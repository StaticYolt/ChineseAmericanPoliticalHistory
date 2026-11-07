// EXAMPLE turning point. The law's facts come from the National Archives page
// in `sources`. Everything marked TODO is yours to research and write.
import type { TurningPoint } from '../../types';

const nationalArchives = {
  title: 'Chinese Exclusion Act (1882), National Archives',
  url: 'https://www.archives.gov/milestone-documents/chinese-exclusion-act',
};

export default {
  id: 'exclusion-act',
  type: 'turning-point',
  era: 'exclusion',
  title: 'Chinese Exclusion Act',
  start: 1882,
  end: 1882,
  places: [{ name: 'Washington, DC', lat: 38.9072, lon: -77.0369 }],

  whatHappened: `
President Chester A. Arthur signed the Chinese Exclusion Act on May 6, 1882. It suspended the immigration of Chinese laborers for ten years, required certificates for Chinese residents who left and wanted to return, and barred state and federal courts from granting citizenship to Chinese immigrants.
`,
  whyItMatters: `
TODO: what it changed, and how it set up the next period. Starting point from the source: the 1892 Geary Act extended it, Congress made it permanent in 1902, and it stayed in force until 1943.
`,

  people: [
    {
      name: 'TODO: person it happened to',
      years: 'TODO',
      role: 'TODO',
      affiliation: 'TODO',
      motivation: 'TODO',
      sources: [{ title: 'TODO: source', url: 'https://example.com' }],
    },
    {
      name: 'TODO: person who organized or fought back',
      years: 'TODO',
      role: 'TODO',
      affiliation: 'TODO',
      motivation: 'TODO',
      sources: [{ title: 'TODO: source', url: 'https://example.com' }],
    },
    {
      name: 'TODO: third person',
      years: 'TODO',
      role: 'TODO',
      affiliation: 'TODO',
      motivation: 'TODO',
      sources: [{ title: 'TODO: source', url: 'https://example.com' }],
    },
  ],

  generations: {
    children: 'TODO: daily life, struggles and good things for children.',
    adults: 'TODO: daily life, struggles and good things for adults.',
    elderly: 'TODO: daily life, struggles and good things for elderly people.',
    // teens is optional; add it when it's relevant
  },

  media: [
    {
      title: 'E Pluribus Unum (Except the Chinese)',
      year: 1882,
      src: 'images/placeholder.svg',
      alt: 'TODO: describe what the cartoon shows',
      credit: "Thomas Nast, Harper's Weekly, April 1, 1882",
      rights: 'public-domain',
      context: 'TODO: what it shows and the argument it made.',
      source: {
        title: 'Timeline of Chinese cartoons, Thomas Nast Cartoons',
        url: 'https://thomasnastcartoons.com/the-chinese-cartoons/timeline-of-chinese-cartoons/',
      },
    },
  ],

  sources: [nationalArchives],
} satisfies TurningPoint;
