// EXAMPLE fun fact. Replace with your own; the source is the Nast archive's timeline.
import type { Fact } from '../../types';

export default {
  id: 'nast-cartoons',
  type: 'fact',
  title: "Thomas Nast's Chinese cartoons",
  start: 1868,
  end: 1886,
  places: [{ name: 'New York, NY', lat: 40.7128, lon: -74.006 }],
  body: `
From 1868 to 1886, the cartoonist Thomas Nast drew dozens of cartoons about Chinese immigrants for *Harper's Weekly* in New York. TODO: add what makes this surprising.
`,
  sources: [
    {
      title: 'Timeline of Chinese cartoons, Thomas Nast Cartoons',
      url: 'https://thomasnastcartoons.com/the-chinese-cartoons/timeline-of-chinese-cartoons/',
    },
  ],
} satisfies Fact;
