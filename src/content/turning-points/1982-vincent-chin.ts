import type { TurningPoint } from '../../types';

export default {
  id: "vincent-chin",
  type: 'turning-point',
  era: "suspicion",
  title: "The killing of Vincent Chin",
  start: 1982,
  end: 1983,
  places: [
    { name: "Highland Park (Detroit), MI", lat: 42.4056, lon: -83.0966 },
  ],

  whatHappened: "On June 19, 1982, Vincent Chin, a 27-year-old Chinese American, was beaten in the Detroit area by two autoworkers who had mistaken him for Japanese. He died four days later. The two men were sentenced to three years' probation and a $3,000 fine each, and never served prison time.",
  whyItMatters: "TODO: why it's a turning point. From the source: it was the first time people of Asian descent mobilized together as \"Asian American.\"",

  people: [
    {
      name: "Vincent Chin",
      years: "TODO–1982",
      role: "TODO",
      affiliation: "TODO",
      motivation: "TODO",
      sources: [
        { title: "Killing of Vincent Chin (1982), MIT Asian American Studies", url: "https://asianamericanstudies.mit.edu/killing-vincent-chin-1982" },
      ],
    },
    {
      name: "Lily Chin",
      years: "TODO",
      role: "Vincent Chin's mother; co-founded American Citizens for Justice",
      affiliation: "American Citizens for Justice",
      motivation: "TODO",
      sources: [
        { title: "Killing of Vincent Chin (1982), MIT Asian American Studies", url: "https://asianamericanstudies.mit.edu/killing-vincent-chin-1982" },
      ],
    },
    {
      name: "Helen Zia",
      years: "1952–",
      role: "Journalist and organizer; co-founded American Citizens for Justice and was its president in 1983",
      affiliation: "American Citizens for Justice",
      motivation: "Justice for Vincent Chin through a federal civil rights trial",
      sources: [
        { title: "Helen Zia, Wikipedia", url: "https://en.wikipedia.org/wiki/Helen_Zia" },
      ],
    },
  ],

  generations: {
    children: "TODO: daily life, struggles and good things for children.",
    adults: "TODO: daily life, struggles and good things for adults.",
    elderly: "TODO: daily life, struggles and good things for elderly people.",
    teens: "TODO: daily life, struggles and good things for teenagers.",
  },

  media: [
    {
      title: "TODO: news coverage or ads from the 1980s \"Japan-bashing\" era",
      year: 1982,
      src: 'images/placeholder.svg', // TODO: add the real image to public/images/
      alt: "TODO: describe what the image shows",
      credit: "TODO: creator, publication, date",
      rights: "fair-use",
      context: "TODO: what it shows and the stereotype or argument it pushed.",
      source: { title: "TODO: source", url: "https://example.com" },
    },
  ],

  sources: [
    { title: "Killing of Vincent Chin (1982), MIT Asian American Studies", url: "https://asianamericanstudies.mit.edu/killing-vincent-chin-1982" },
  ],
} satisfies TurningPoint;
