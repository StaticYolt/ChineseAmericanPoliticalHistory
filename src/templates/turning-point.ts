// TEMPLATE: copy this file into src/content/turning-points/, rename it
// (e.g. 1898-wong-kim-ark.ts) and fill it in. The site picks it up automatically.
// Files in src/templates/ are never shown on the site.
import type { TurningPoint } from '../types';

export default {
  id: 'change-me',                    // lowercase-with-dashes; used in the link #/1898/change-me
  type: 'turning-point',
  era: 'exclusion',                   // gold-mountain | exclusion | citizenship | movement | suspicion | contested
  title: 'Title of the turning point',
  start: 1898,                        // the year it appears on the map
  end: 1898,                          // last year of the event (same as start for a single moment)
  places: [
    // The first place is where the marker goes. Find coordinates on any map site (right-click → coordinates).
    { name: 'San Francisco, CA', lat: 37.7749, lon: -122.4194 },
  ],

  // Markdown works in these: *italic*, **bold**, [links](https://...), blank lines for new paragraphs.
  whatHappened: `
2–3 sentences of plain facts.
`,
  whyItMatters: `
What it changed, and how it set up the next period.
`,

  // Exactly three representative Chinese Americans.
  people: [
    {
      name: 'Name',
      chineseName: '名字',            // optional: traditional characters
      years: '1870–1944',
      role: 'What they did',
      affiliation: 'Party, organization or side',
      motivation: 'Why they acted',
      sources: [{ title: 'Source title', url: 'https://example.com' }],
      // image: { src: 'images/name.webp', alt: '...', credit: '...', rights: 'public-domain', source: { title: '...', url: '...' } },
    },
    {
      name: 'Name',
      years: '',
      role: '',
      affiliation: '',
      motivation: '',
      sources: [{ title: 'Source title', url: 'https://example.com' }],
    },
    {
      name: 'Name',
      years: '',
      role: '',
      affiliation: '',
      motivation: '',
      sources: [{ title: 'Source title', url: 'https://example.com' }],
    },
  ],

  // Daily life, struggles and good things for each age group. Delete `teens` if it isn't relevant.
  generations: {
    children: '',
    teens: '',
    adults: '',
    elderly: '',
  },

  // 1–3 portrayals of Chinese Americans by others at the time.
  media: [
    {
      title: 'Title of the cartoon, ad or headline',
      year: 1898,
      src: 'images/placeholder.svg',  // put the real file in public/images/
      alt: 'Describe what the image shows (no slurs)',
      credit: 'Creator, publication, date',
      rights: 'public-domain',        // public-domain | fair-use | licensed
      context: 'What it shows and the stereotype or argument it pushed.',
      source: { title: 'Where you found it', url: 'https://example.com' },
    },
  ],

  sources: [{ title: 'Source title', url: 'https://example.com' }],
} satisfies TurningPoint;
