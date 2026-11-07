// TEMPLATE: copy into src/content/facts/, rename (e.g. 1915-locke-california.ts), fill in.
import type { Fact } from '../types';

export default {
  id: 'change-me',
  type: 'fact',
  title: 'Short title',
  start: 1915,                  // first year it shows on the map
  end: 1930,                    // last year it shows (same as start for a one-year fact)
  places: [{ name: 'Town, ST', lat: 38.25, lon: -121.51 }],
  body: `
60–120 words. Markdown works.
`,
  // image: { src: 'images/x.webp', alt: '...', credit: '...', rights: 'public-domain', source: { title: '...', url: '...' } },
  sources: [{ title: 'Source title', url: 'https://example.com' }],
} satisfies Fact;
