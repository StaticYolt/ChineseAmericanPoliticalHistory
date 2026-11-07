// The whole app runs off this one object. The URL hash mirrors it, so links,
// refreshes and the back button all land on the same view.
//   #/                     map at the first year
//   #/1882                 map at 1882
//   #/1882/exclusion-act   map at 1882 with that item's overlay open
//   #/list  #/argument  #/sources
import { DEFAULT_TAB, type OverlayTab } from './types';
import { CURRENT_YEAR, FIRST_YEAR } from './content/eras';
import { itemById } from './content';

export type View = 'map' | 'list' | 'argument' | 'sources';

export interface AppState {
  view: View;
  year: number;
  selectedId: string | null;
  tab: OverlayTab;
}

export const state: AppState = { view: 'map', year: FIRST_YEAR, selectedId: null, tab: DEFAULT_TAB };

type Listener = (state: AppState, previous: AppState) => void;
const listeners: Listener[] = [];

export function subscribe(listener: Listener) {
  listeners.push(listener);
}

const clampYear = (y: number) => Math.min(CURRENT_YEAR, Math.max(FIRST_YEAR, Math.round(y)));

function toHash(s: AppState): string {
  if (s.view !== 'map') return `#/${s.view}`;
  return s.selectedId ? `#/${s.year}/${s.selectedId}` : `#/${s.year}`;
}

function fromHash(hash: string): Partial<AppState> {
  const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'list' || parts[0] === 'argument' || parts[0] === 'sources') {
    return { view: parts[0], selectedId: null };
  }
  const year = Number(parts[0]);
  const id = parts[1] && itemById.has(parts[1]) ? parts[1] : null;
  return {
    view: 'map',
    year: Number.isFinite(year) && parts[0] ? clampYear(year) : state.year,
    selectedId: id,
    tab: DEFAULT_TAB,
  };
}

function apply(patch: Partial<AppState>) {
  const previous = { ...state };
  Object.assign(state, patch);
  if (patch.year !== undefined) state.year = clampYear(patch.year);
  listeners.forEach((l) => l(state, previous));
}

/**
 * Change the state. `push: true` adds a browser history entry (opening an item,
 * switching views); otherwise the URL is replaced, so dragging the slider
 * doesn't fill the back button with hundreds of years.
 */
export function setState(patch: Partial<AppState>, { push = false } = {}) {
  apply(patch);
  const hash = toHash(state);
  if (hash === location.hash) return;
  if (push) history.pushState(null, '', hash);
  else history.replaceState(null, '', hash);
}

export function startRouting() {
  window.addEventListener('popstate', () => apply(fromHash(location.hash)));
  window.addEventListener('hashchange', () => apply(fromHash(location.hash)));
  apply(fromHash(location.hash));
}
