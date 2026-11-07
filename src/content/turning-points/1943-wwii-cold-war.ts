import type { TurningPoint } from '../../types';

export default {
  id: "wwii-cold-war",
  type: 'turning-point',
  era: "citizenship",
  title: "World War II and the Cold War",
  start: 1943,
  end: 1956,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],

  whatHappened: "With China a US ally in World War II, Congress repealed the Chinese Exclusion Acts on December 17, 1943. Chinese immigrants could become citizens for the first time, but immigration was capped at 105 people a year. After the Communist victory in China in 1949, Chinese Americans came under suspicion as possible communists.",
  whyItMatters: "TODO: why it's a turning point. One angle: in a few years Chinese Americans went from \"allies\" to suspects, as the PBS source on the McCarthy era describes.",

  people: [
    {
      name: "Tye Leung Schulze",
      years: "1887–1972",
      role: "Interpreter",
      affiliation: "TODO",
      motivation: "TODO",
      sources: [
        { title: "She Was the First Chinese American Woman to Vote, PBS American Masters", url: "https://www.pbs.org/wnet/americanmasters/she-was-first-chinese-american-woman-vote" },
      ],
    },
    {
      name: "Flora Belle Jan",
      years: "1906–1950",
      role: "Journalist; worked for the US Office of War Information in Beijing",
      affiliation: "TODO",
      motivation: "TODO",
      sources: [
        { title: "Flora Belle Jan, Wikipedia", url: "https://en.wikipedia.org/wiki/Flora_Belle_Jan" },
      ],
    },
    {
      name: "TODO: a Chinese American serviceman or Cold War target",
      years: "TODO",
      role: "TODO",
      affiliation: "TODO",
      motivation: "TODO",
      sources: [
        { title: "TODO: source", url: "https://example.com" },
      ],
    },
  ],

  generations: {
    children: "TODO: daily life, struggles and good things for children.",
    adults: "TODO: daily life, struggles and good things for adults.",
    elderly: "TODO: daily life, struggles and good things for elderly people.",
  },

  media: [
    {
      title: "How to Tell Your Friends from the Japs",
      year: 1941,
      src: 'images/placeholder.svg', // TODO: add the real image to public/images/
      alt: "TODO: describe what the image shows",
      credit: "Time magazine, December 1941",
      rights: "fair-use",
      context: "TODO: what it shows and the stereotype or argument it pushed.",
      source: { title: "TODO: source", url: "https://example.com" },
    },
  ],

  sources: [
    { title: "Chinese Exclusion Repeal Act, Wikipedia", url: "https://en.wikipedia.org/wiki/Chinese_Exclusion_Repeal_Act" },
    { title: "McCarthy: Chinese Americans 'numbed with fear', PBS American Experience", url: "https://www.pbs.org/wgbh/americanexperience/features/mccarthy-numbed-with-fear-chinese-americans" },
  ],
} satisfies TurningPoint;
