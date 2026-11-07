import type { Fact } from '../../types';

export default {
  id: "asian-american-movement",
  type: 'fact',
  title: "The Asian American movement",
  start: 1968,
  end: 1969,
  places: [
    { name: "Berkeley, CA", lat: 37.8715, lon: -122.273 },
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "In 1968 students at UC Berkeley founded the Asian American Political Alliance, and Yuji Ichioka and Emma Gee are credited with coining the term \"Asian American.\" That November, students at San Francisco State began the Third World Liberation Front strike, the longest student strike in US history, which created the first ethnic studies programs.",
  sources: [
    { title: "Asian American movement, Wikipedia", url: "https://en.wikipedia.org/wiki/Asian_American_movement" },
    { title: "Yuji Ichioka, Wikipedia", url: "https://en.wikipedia.org/wiki/Yuji_Ichioka" },
    { title: "How the Longest Student Strike in U.S. History Created Ethnic Studies, KQED", url: "https://www.kqed.org/news/11830384/how-the-longest-student-strike-in-u-s-history-created-ethnic-studies" },
  ],
} satisfies Fact;
