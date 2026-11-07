// EXAMPLE turning point. Facts come from the KQED article in `sources`.
// Everything marked TODO is yours to research and write.
import type { TurningPoint } from '../../types';

const kqed = {
  title: "Chinese immigrants led the first mass resistance to America's deportation system, KQED",
  url: 'https://www.kqed.org/news/12096279/chinese-immigrants-led-the-first-mass-resistance-to-americas-deportation-system',
};

export default {
  id: 'geary-act',
  type: 'turning-point',
  era: 'exclusion',
  title: 'Geary Act and the refusal to register',
  start: 1892,
  end: 1893,
  places: [
    { name: 'San Francisco, CA', lat: 37.7749, lon: -122.4194 },
    { name: 'New York, NY', lat: 40.7128, lon: -74.006 },
  ],

  whatHappened: `
The 1892 Geary Act extended Chinese exclusion for ten more years and required Chinese residents to register and carry a certificate of residence. The Chinese Six Companies in San Francisco urged people not to comply, and only about 13,000 of roughly 100,000 Chinese residents registered. In 1893 the Supreme Court upheld the law in *Fong Yue Ting v. United States*.
`,
  whyItMatters: `
TODO: why this was a turning point. One angle from the source: it was the first mass resistance to the US deportation system, organized by Chinese immigrants themselves.
`,

  people: [
    {
      name: 'Fong Yue Ting',
      years: 'TODO',
      role: 'New York laundryman; one of three test cases against the act',
      affiliation: 'TODO',
      motivation: 'TODO',
      sources: [kqed],
    },
    {
      name: 'Jee Gam',
      years: 'TODO',
      role: 'Christian leader who wrote essays against the act',
      affiliation: 'TODO',
      motivation: 'TODO',
      sources: [kqed],
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
    children: 'TODO',
    adults: 'TODO',
    elderly: 'TODO',
  },

  media: [
    {
      title: 'TODO: a cartoon or ad from 1892–1893',
      year: 1892,
      src: 'images/placeholder.svg',
      alt: 'TODO',
      credit: 'TODO: creator, publication, date',
      rights: 'public-domain',
      context: 'TODO',
      source: { title: 'TODO: source', url: 'https://example.com' },
    },
  ],

  sources: [kqed],
} satisfies TurningPoint;
