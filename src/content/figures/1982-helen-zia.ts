import type { Figure } from '../../types';

export default {
  id: "helen-zia",
  type: 'figure',
  title: "Helen Zia",
  start: 1982,
  end: 2002,
  places: [
    { name: "Detroit, MI", lat: 42.3314, lon: -83.0458 },
  ],
  person: {
    name: "Helen Zia",
    years: "1952–",
    role: "Journalist, author and organizer",
    affiliation: "Co-founded American Citizens for Justice; executive editor of *Ms.* magazine (1989–1992)",
    motivation: "Justice for Vincent Chin, and Asian American civil rights",
    sources: [
      { title: "Helen Zia, Wikipedia", url: "https://en.wikipedia.org/wiki/Helen_Zia" },
    ],
  },
  impact: [
    "Co-founded American Citizens for Justice after Vincent Chin's killing and pushed for a federal trial",
    "Wrote *Asian American Dreams* (2000)",
    "Co-wrote *My Country Versus Me* with Wen Ho Lee",
  ],
  turningPoints: ["vincent-chin"],
  sources: [
    { title: "Helen Zia, Wikipedia", url: "https://en.wikipedia.org/wiki/Helen_Zia" },
  ],
} satisfies Figure;
