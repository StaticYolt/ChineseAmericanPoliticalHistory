import type { TurningPoint } from '../../types';

export default {
  id: "gold-rush",
  type: 'turning-point',
  era: "gold-mountain",
  title: "The California Gold Rush",
  start: 1848,
  end: 1855,
  places: [
    { name: "Coloma, CA", lat: 38.7999, lon: -120.8908 },
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],

  whatHappened: "Gold was found at Sutter's Mill in Coloma, California, in January 1848. News of *Gam Saan*, \"Gold Mountain,\" reached southern China, and thousands of Chinese men crossed the Pacific to mine and work in California.",
  whyItMatters: "TODO: why the Gold Rush is a turning point. One starting point: in 1852 Governor John Bigler called on the legislature to \"check the tide of Asiatic immigration,\" and San Francisco merchant Norman Asing answered him in an open letter, one of the first Chinese American political statements.",

  people: [
    {
      name: "Norman Asing",
      years: "TODO",
      role: "San Francisco business owner and a founder of a Chinese benevolent association",
      affiliation: "Described himself as a naturalized citizen of Charleston, South Carolina",
      motivation: "Answered Governor Bigler's 1852 call to restrict Chinese immigration, arguing that immigration built the nation and that American identity isn't limited to one race",
      sources: [
        { title: "Norman Asing, Petition to California Governor John Bigler (1852), National Constitution Center", url: "https://constitutioncenter.org/the-constitution/historic-document-library/detail/norman-asing-petition-to-california-governor-john-bigler" },
      ],
    },
    {
      name: "TODO: a Chinese miner",
      years: "TODO",
      role: "TODO",
      affiliation: "TODO",
      motivation: "TODO",
      sources: [
        { title: "TODO: source", url: "https://example.com" },
      ],
    },
    {
      name: "TODO: third person",
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
      title: "TODO: a Gold Rush-era image of Chinese miners",
      year: 1852,
      src: 'images/placeholder.svg', // TODO: add the real image to public/images/
      alt: "TODO: describe what the image shows",
      credit: "TODO: creator, publication, date",
      rights: "public-domain",
      context: "TODO: what it shows and the stereotype or argument it pushed.",
      source: { title: "TODO: source", url: "https://example.com" },
    },
  ],

  sources: [
    { title: "Chinese in the California gold rush, Wikipedia", url: "https://en.wikipedia.org/wiki/Chinese_in_the_California_gold_rush" },
    { title: "Searching for the Gold Mountain, Library of Congress", url: "https://www.loc.gov/classroom-materials/immigration/chinese/searching-for-the-gold-mountain/" },
    { title: "Norman Asing, Petition to California Governor John Bigler (1852), National Constitution Center", url: "https://constitutioncenter.org/the-constitution/historic-document-library/detail/norman-asing-petition-to-california-governor-john-bigler" },
  ],
} satisfies TurningPoint;
