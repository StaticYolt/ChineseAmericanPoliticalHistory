// TEMPLATE: copy into src/content/figures/, rename (e.g. 1959-hiram-fong.ts), fill in.
import type { Figure } from '../types';

export default {
  id: 'change-me',
  type: 'figure',
  title: 'Person name',
  start: 1959,                  // first year of their active period
  end: 1977,                    // last year of their active period
  places: [{ name: 'City, ST', lat: 21.3069, lon: -157.8583 }],  // where they did their main work
  person: {
    name: 'Person name',
    // chineseName: '名字',
    years: '1906–2004',
    role: 'What they did',
    affiliation: 'Party, organization or side',
    motivation: 'Why they acted',
    sources: [{ title: 'Source title', url: 'https://example.com' }],
    // image: { src: 'images/x.webp', alt: '...', credit: '...', rights: 'licensed', source: { title: '...', url: '...' } },
  },
  impact: ['Main impact', 'Second point'],
  turningPoints: [],            // ids of related turning points, e.g. ['exclusion-act']
  sources: [{ title: 'Source title', url: 'https://example.com' }],
} satisfies Figure;
