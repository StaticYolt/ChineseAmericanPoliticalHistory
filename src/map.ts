// The map: states drawn once as SVG, markers as HTML buttons layered on top.
//   us-atlas        → Census state shapes (TopoJSON)
//   topojson-client → turns them into GeoJSON shapes + a mesh of shared borders
//   d3-geo          → projects [lon, lat] to x/y and turns shapes into SVG paths
import { geoAlbersUsa, geoPath } from 'd3-geo';
import { feature, mesh } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import usData from 'us-atlas/states-10m.json';
import { items, stateAt, yearRange } from './content';
import { statehood } from './content/statehood';
import type { MapItem } from './types';
import { esc, typeLabel } from './util';

const W = 975;
const H = 610;
// The projection us-atlas is designed for: lower 48 plus Alaska and Hawaii insets.
export const projection = geoAlbersUsa().scale(1300).translate([W / 2, H / 2]);
const path = geoPath(projection);

type StatesTopology = Topology<{ states: GeometryCollection<{ name: string }>; nation: GeometryCollection }>;
const us = usData as unknown as StatesTopology;

const SVG_NS = 'http://www.w3.org/2000/svg';
const markers = new Map<string, HTMLButtonElement>();
const statePaths: SVGPathElement[] = [];

export function createMap(container: HTMLElement, onSelect: (item: MapItem) => void) {
  container.classList.add('relative', 'w-full', 'aspect-[975/610]');

  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('class', 'absolute inset-0 size-full');
  svg.setAttribute('aria-hidden', 'true'); // the buttons carry the information

  // Only the 50 states + DC have a statehood year; this drops Puerto Rico and
  // other territories, which geoAlbersUsa can't place anyway.
  const states = feature(us, us.objects.states).features.filter((f) => String(f.id) in statehood);
  for (const s of states) {
    const p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', path(s) ?? '');
    p.setAttribute('class', 'state');
    p.dataset.fips = String(s.id);
    p.dataset.name = s.properties.name;
    svg.append(p);
    statePaths.push(p);
  }
  // Shared borders, drawn once so they aren't doubled in thickness.
  const borders = document.createElementNS(SVG_NS, 'path');
  borders.setAttribute('d', path(mesh(us, us.objects.states, (a, b) => a !== b)) ?? '');
  borders.setAttribute('class', 'borders');
  svg.append(borders);
  container.append(svg);

  const layer = document.createElement('div');
  layer.className = 'absolute inset-0';
  container.append(layer);

  for (const item of items) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'marker';
    button.dataset.type = item.type;
    button.dataset.id = item.id;
    button.setAttribute('aria-label', `${yearRange(item)}, ${typeLabel[item.type].toLowerCase()}: ${item.title}`);
    button.innerHTML = `<span class="marker-shape" aria-hidden="true"></span><span class="marker-label" aria-hidden="true">${esc(item.title)}</span>`;
    button.addEventListener('click', () => onSelect(item));
    layer.append(button);
    markers.set(item.id, button);
  }
}

/** Update territory shading and markers for a year. Nothing is redrawn. */
export function updateMap(year: number, selectedId: string | null) {
  for (const p of statePaths) {
    p.classList.toggle('is-territory', year < statehood[p.dataset.fips!]);
  }

  // Markers that share a spot (lots of San Francisco) are fanned out in a small
  // circle so each one stays clickable.
  const visible: { item: MapItem; x: number; y: number }[] = [];
  for (const item of items) {
    const button = markers.get(item.id)!;
    const s = stateAt(item, year);
    button.dataset.state = s;
    button.classList.toggle('is-selected', item.id === selectedId);
    const xy = projection([item.places[0].lon, item.places[0].lat]);
    if (!xy) {
      button.dataset.state = 'hidden';
      console.warn(`"${item.id}": ${item.places[0].name} is outside the map.`);
      continue;
    }
    if (s !== 'hidden') visible.push({ item, x: xy[0], y: xy[1] });
  }

  const groups = new Map<string, typeof visible>();
  for (const v of visible) {
    const key = `${Math.round(v.x / 14)},${Math.round(v.y / 14)}`;
    groups.set(key, [...(groups.get(key) ?? []), v]);
  }
  for (const group of groups.values()) {
    group.forEach((v, i) => {
      const spread = group.length > 1 ? 14 : 0;
      const angle = (i / group.length) * Math.PI * 2 - Math.PI / 2;
      const x = v.x + Math.cos(angle) * spread;
      const y = v.y + Math.sin(angle) * spread;
      const button = markers.get(v.item.id)!;
      button.style.left = `${(x / W) * 100}%`;
      button.style.top = `${(y / H) * 100}%`;
    });
  }

  // Hidden markers leave the tab order. Buttons are in timeline order in the
  // DOM, so Tab moves through visible markers from earliest to latest.
  for (const button of markers.values()) {
    button.tabIndex = button.dataset.state === 'hidden' ? -1 : 0;
  }
}

export function focusMarker(id: string) {
  markers.get(id)?.focus();
}
