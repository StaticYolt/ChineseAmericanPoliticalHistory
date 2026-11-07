import type { Fact } from '../../types';

export default {
  id: "paper-sons",
  type: 'fact',
  title: "San Francisco earthquake and the \"paper son\" system",
  start: 1906,
  end: 1943,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "The April 1906 earthquake and fire destroyed San Francisco's birth records. Chinese residents could claim US birth, and their \"children\" in China, real or not, could claim citizenship through them. These \"paper sons\" and \"paper daughters\" memorized false family histories to pass interrogation.",
  sources: [
    { title: "Paper sons, Wikipedia", url: "https://en.wikipedia.org/wiki/Paper_sons" },
    { title: "Paper Sons and Daughters, Angel Island Immigration Station Foundation", url: "https://www.aiisf.org/mosaic-profiles/papersons" },
  ],
} satisfies Fact;
