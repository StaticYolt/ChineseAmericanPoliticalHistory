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

/*
Turning points - Gold rush (1848), Chinese Exclusion Act (1882), World war II and the Cold War (1945), Immigration and Nationality Act of 1965
Facts - Taiping Rebellion (), Foreign Miners tax (1852), Railroads, Agriculture, Page Act (1875), Chinatowns, Chinese Massacre of 1871, Smaller Exclusioanry Ordinances, Angel Island (1910 - ...) 
      San fransico Earthquake and fires (1906) -> paper son system
      United States vs Wong Kim Ark (1898), Ging Hawk Club National Essay Competition
      The Great Depression, Citizenship (December 17, 1943)
      Chinese Alien Wives of American Citizens Act in 1946, permitting entry to the wives of Chinese men who were US citizens
      Chinese Confesison Program, 
      Wen Ho Lee My country vs me (2003)
      Covid-19


*/