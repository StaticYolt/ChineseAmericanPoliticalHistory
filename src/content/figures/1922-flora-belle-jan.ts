import type { Figure } from '../../types';

export default {
  id: "flora-belle-jan",
  type: 'figure',
  title: "Flora Belle Jan",
  start: 1922,
  end: 1932,
  places: [
    { name: "Fresno, CA", lat: 36.7378, lon: -119.7871 },
  ],
  person: {
    name: "Flora Belle Jan",
    years: "1906–1950",
    role: "Journalist, poet and fiction writer",
    affiliation: "Wrote for the *San Francisco Examiner*, *Chicago Daily News*, *Fresno Bee* and the *Shanghai Herald*",
    motivation: "TODO: from your research (her letters in *Unbound Spirit* are a good place to look)",
    sources: [
      { title: "Flora Belle Jan, Wikipedia", url: "https://en.wikipedia.org/wiki/Flora_Belle_Jan" },
      { title: "Unbound Spirit: Letters of Flora Belle Jan, University of Illinois Press", url: "https://www.press.uillinois.edu/books/?id=c033803" },
    ],
  },
  impact: [
    "Recognized as a promising writer in her teens in Fresno; graduated from the University of Chicago in 1927",
    "Her letters from 1918 to 1948, published as *Unbound Spirit* (2009), show the life of an educated Chinese American woman between two cultures",
    "Moved to China in the early 1930s, worked for the US Office of War Information in Beijing, and returned to California in 1949",
  ],
  turningPoints: ["wwii-cold-war"],
  sources: [
    { title: "Flora Belle Jan, Wikipedia", url: "https://en.wikipedia.org/wiki/Flora_Belle_Jan" },
    { title: "Unbound Spirit: Letters of Flora Belle Jan, University of Illinois Press", url: "https://www.press.uillinois.edu/books/?id=c033803" },
  ],
} satisfies Figure;
