import type { TurningPoint } from '../../types';

export default {
  id: "exclusion-act",
  type: 'turning-point',
  era: "exclusion",
  title: "Chinese Exclusion Act",
  start: 1882,
  end: 1882,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],

  whatHappened: "President Chester A. Arthur signed the Chinese Exclusion Act on May 6, 1882. It suspended the immigration of Chinese laborers for ten years, required certificates for Chinese residents who left and wanted to return, and barred courts from granting citizenship to Chinese immigrants.",
  whyItMatters: "TODO: why it's a turning point. From the source: the 1892 Geary Act extended it, Congress made it permanent in 1902, and it stayed in force until 1943.",

  people: [
    {
      name: "Wong Chin Foo",
      years: "1847–1898",
      role: "Journalist and lecturer in New York",
      affiliation: "Founded the Chinese Equal Rights League (1892)",
      motivation: "Equal rights and citizenship for Chinese immigrants",
      sources: [
        { title: "Chronology, The First Chinese American: The Remarkable Life of Wong Chin Foo", url: "https://firstchineseamerican.com/chronology.htm" },
        { title: "Review: The First Chinese American, Washington Independent Review of Books", url: "https://www.washingtonindependentreviewofbooks.com/bookreview/the-first-chinese-american-the-remarkable-life-of-wong-chin-foo" },
      ],
    },
    {
      name: "Mary Tape",
      years: "1857–1934",
      role: "San Francisco mother, painter and photographer",
      affiliation: "Her family brought *Tape v. Hurley* (1885)",
      motivation: "Her daughter Mamie's right to attend public school",
      sources: [
        { title: "Mary Tape, National Park Service", url: "https://www.nps.gov/people/mary-tape.htm" },
      ],
    },
    {
      name: "Ng Poon Chew",
      chineseName: "伍盤照",
      years: "1866–1931",
      role: "Editor of the San Francisco Chinese-language daily *Chung Sai Yat Po*",
      affiliation: "Christian minister and public opponent of the Exclusion Act",
      motivation: "Fair treatment of Chinese Americans and Chinese travelers",
      sources: [
        { title: "Ng Poon Chew, Wikipedia", url: "https://en.wikipedia.org/wiki/Ng_Poon_Chew" },
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
      title: "E Pluribus Unum (Except the Chinese)",
      year: 1882,
      src: 'images/placeholder.svg', // TODO: add the real image to public/images/
      alt: "TODO: describe what the image shows",
      credit: "Thomas Nast, Harper's Weekly, April 1, 1882",
      rights: "public-domain",
      context: "TODO: what it shows and the stereotype or argument it pushed.",
      source: { title: "Timeline of Chinese cartoons, Thomas Nast Cartoons", url: "https://thomasnastcartoons.com/the-chinese-cartoons/timeline-of-chinese-cartoons/" },
    },
  ],

  sources: [
    { title: "Chinese Exclusion Act (1882), National Archives", url: "https://www.archives.gov/milestone-documents/chinese-exclusion-act" },
  ],
} satisfies TurningPoint;
