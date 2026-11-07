// EXAMPLE figure, all placeholders, so you can see a figure marker on the map.
// Replace it with a real person (or delete the file).
import type { Figure } from '../../types';

export default {
  id: 'example-figure',
  type: 'figure',
  title: 'TODO: figure name',
  start: 1873,
  end: 1898,
  places: [{ name: 'New York, NY', lat: 40.7128, lon: -74.006 }],
  person: {
    name: 'TODO Figure Name',
    years: 'TODO',
    role: 'TODO',
    affiliation: 'TODO',
    motivation: 'TODO',
    sources: [{ title: 'TODO: source', url: 'https://example.com' }],
  },
  impact: ['TODO: main impact', 'TODO: second point'],
  turningPoints: ['exclusion-act', 'geary-act'],
  sources: [{ title: 'TODO: source', url: 'https://example.com' }],
} satisfies Figure;
