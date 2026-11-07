import type { Fact } from '../../types';

export default {
  id: "wen-ho-lee",
  type: 'fact',
  title: "Wen Ho Lee",
  start: 1999,
  end: 2001,
  places: [
    { name: "Los Alamos, NM", lat: 35.88, lon: -106.3031 },
  ],
  body: "Los Alamos scientist Wen Ho Lee was arrested on December 10, 1999, and held in solitary confinement for 278 days. He pleaded guilty to one count on September 13, 2000, and the judge apologized to him for his treatment. His memoir with Helen Zia, *My Country Versus Me*, followed (sources give 2001 to 2003 for its publication).",
  sources: [
    { title: "Wen Ho Lee, Wikipedia", url: "https://en.wikipedia.org/wiki/Wen_Ho_Lee" },
    { title: "My Country Versus Me (first edition record), Open Library", url: "https://openlibrary.org/books/OL3706118M" },
  ],
} satisfies Fact;
