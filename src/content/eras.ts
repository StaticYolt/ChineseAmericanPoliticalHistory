import type { Era } from '../types';

export const FIRST_YEAR = 1848;
export const CURRENT_YEAR = new Date().getFullYear();

// Era names and years are a first draft. Change them freely: the slider bands,
// the year banner and the list view all read from this array.
export const eras: Era[] = [
  {
    id: 'gold-mountain',
    name: 'Gold Mountain',
    start: 1848,
    end: 1881,
    summary: 'Chinese immigrants arrive for the Gold Rush and the railroads, and an anti-Chinese movement grows.',
  },
  {
    id: 'exclusion',
    name: 'Exclusion',
    start: 1882,
    end: 1942,
    summary: 'Federal law bars Chinese laborers and keeps Chinese immigrants from becoming citizens.',
  },
  {
    id: 'citizenship',
    name: 'Citizenship and Cold War',
    start: 1943,
    end: 1964,
    summary: 'Exclusion is repealed during World War II, but small quotas and Cold War suspicion remain.',
  },
  {
    id: 'movement',
    name: 'Reopening and movement',
    start: 1965,
    end: 1981,
    summary: 'Immigration reopens, and the Asian American movement begins.',
  },
  {
    id: 'suspicion',
    name: 'Visibility and suspicion',
    start: 1982,
    end: 2000,
    summary: 'Chinese Americans organize across groups, while their loyalty is questioned.',
  },
  {
    id: 'contested',
    name: 'Contested',
    start: 2001,
    end: CURRENT_YEAR,
    summary: 'Chinese Americans split by generation, class and party, as US–China tension keeps loyalty in question.',
  },
];

export function eraAt(year: number): Era {
  return eras.find((e) => year >= e.start && year <= e.end) ?? eras[eras.length - 1];
}
