import type { Figure } from '../../types';

export default {
  id: "ling-chi-wang",
  type: 'figure',
  title: "Ling-Chi Wang",
  start: 1969,
  end: 2000,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
    { name: "Berkeley, CA", lat: 37.8715, lon: -122.273 },
  ],
  person: {
    name: "Ling-Chi Wang",
    years: "1938–",
    role: "Professor of Asian American and ethnic studies at UC Berkeley",
    affiliation: "Co-founded Chinese for Affirmative Action (1969)",
    motivation: "Equal rights, bilingual education and fair housing for Chinese Americans",
    sources: [
      { title: "Ling-Chi Wang, Wikipedia", url: "https://en.wikipedia.org/wiki/Ling-Chi_Wang" },
    ],
  },
  impact: [
    "Co-founded Chinese for Affirmative Action in San Francisco in 1969",
    "Pushed for bilingual education and language access for immigrant students",
    "Organized a boycott of the national labs and a lawsuit over racial profiling during the Wen Ho Lee case",
  ],
  turningPoints: ["immigration-act-1965"],
  sources: [
    { title: "Ling-Chi Wang, Wikipedia", url: "https://en.wikipedia.org/wiki/Ling-Chi_Wang" },
  ],
} satisfies Figure;
