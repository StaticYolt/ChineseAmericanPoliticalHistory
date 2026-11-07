// EXAMPLE turning point. Facts come from the MIT page in `sources`.
// Everything marked TODO is yours to research and write.
import type { TurningPoint } from '../../types';

const mit = {
  title: 'Killing of Vincent Chin (1982), MIT Asian American Studies',
  url: 'https://asianamericanstudies.mit.edu/killing-vincent-chin-1982',
};

export default {
  id: 'vincent-chin',
  type: 'turning-point',
  era: 'suspicion',
  title: 'The killing of Vincent Chin',
  start: 1982,
  end: 1983,
  places: [{ name: 'Highland Park (Detroit), MI', lat: 42.4056, lon: -83.0966 }],

  whatHappened: `
On June 19, 1982, Vincent Chin, a 27-year-old Chinese American, was beaten in the Detroit area by two autoworkers who had mistaken him for Japanese. He died four days later. The two men were sentenced to three years' probation and a $3,000 fine each, and never served prison time.
`,
  whyItMatters: `
TODO: why this was a turning point. One angle from the source: it was the first time people of Asian descent mobilized together as "Asian American."
`,

  people: [
    {
      name: 'Vincent Chin',
      years: 'TODO–1982',
      role: 'TODO',
      affiliation: 'TODO',
      motivation: 'TODO',
      sources: [mit],
    },
    {
      name: 'Lily Chin',
      years: 'TODO',
      role: "Vincent Chin's mother; co-founded American Citizens for Justice",
      affiliation: 'American Citizens for Justice',
      motivation: 'TODO',
      sources: [mit],
    },
    {
      name: 'Helen Zia',
      years: 'TODO',
      role: 'Journalist; co-founded American Citizens for Justice',
      affiliation: 'American Citizens for Justice',
      motivation: 'TODO',
      sources: [mit],
    },
  ],

  generations: {
    children: 'TODO',
    teens: 'TODO',
    adults: 'TODO',
    elderly: 'TODO',
  },

  media: [
    {
      title: 'TODO: a news image or ad from the time',
      year: 1982,
      src: 'images/placeholder.svg',
      alt: 'TODO',
      credit: 'TODO: creator, publication, date',
      rights: 'fair-use',
      context: 'TODO',
      source: { title: 'TODO: source', url: 'https://example.com' },
    },
  ],

  sources: [mit],
} satisfies TurningPoint;
