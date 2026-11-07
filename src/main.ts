import './styles.css';
import { contentProblems, itemById, stateAt } from './content';
import { FIRST_YEAR, eraAt } from './content/eras';
import { createMap, focusMarker, updateMap } from './map';
import { createOverlay, renderOverlay } from './overlay';
import { createSlider, stop, updateSlider } from './slider';
import { setState, startRouting, state, subscribe, type AppState } from './state';
import { DEFAULT_TAB, type MapItem } from './types';
import { renderArgumentLinks, renderList, renderSources } from './views';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

function select(item: MapItem, year = state.year) {
  stop();
  // Open at a year where the item is on the map.
  const y = stateAt(item, year) === 'hidden' ? item.start : year;
  setState({ view: 'map', year: y, selectedId: item.id, tab: DEFAULT_TAB }, { push: true });
}

function closeOverlay() {
  const id = state.selectedId;
  setState({ selectedId: null }, { push: true });
  if (id) focusMarker(id);
}

createMap($('map'), (item) => select(item));
createSlider($('slider'), {
  onYear: (year) => {
    // Moving to a year where the open item isn't on the map closes it.
    const open = state.selectedId ? itemById.get(state.selectedId) : undefined;
    const keep = open && stateAt(open, year) !== 'hidden';
    setState({ year, selectedId: keep ? state.selectedId : null });
  },
});
createOverlay($('overlay'), {
  onClose: closeOverlay,
  onTab: (tab) => setState({ tab }),
  onOpenItem: (item) => select(item, item.start),
});

renderList($('list'));
renderSources($('sources'));
renderArgumentLinks($('argument-links'));

function render(s: AppState, prev: AppState) {
  for (const view of ['map', 'list', 'argument', 'sources'] as const) {
    $(`view-${view}`).hidden = s.view !== view;
  }
  document.querySelectorAll<HTMLAnchorElement>('.nav-link').forEach((a) => {
    if (a.dataset.nav === s.view) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  if (s.view !== prev.view) window.scrollTo({ top: 0 });

  const era = eraAt(s.year);
  $('banner-year').textContent = String(s.year);
  $('banner-era').textContent = era.name;
  $('banner-summary').textContent = era.summary;

  updateMap(s.year, s.selectedId);
  updateSlider(s.year);

  const item = s.view === 'map' && s.selectedId ? itemById.get(s.selectedId) ?? null : null;
  renderOverlay(item, s.tab);
  document.title = item
    ? `${item.title} | Chinese American Political Identity`
    : 'Chinese American Political Identity: A Timeline Map';
}

subscribe(render);
startRouting();

// First visit with no link to a specific place: show the intro.
if (!location.hash || location.hash === '#/' || location.hash === '#') {
  const intro = $<HTMLDialogElement>('intro');
  intro.addEventListener('close', () => setState({ year: FIRST_YEAR }), { once: true });
  intro.showModal();
}

if (import.meta.env.DEV && contentProblems.length) {
  const bar = $('content-problems');
  bar.textContent = 'Content problems: ' + contentProblems.join(' ');
  bar.classList.remove('hidden');
}
