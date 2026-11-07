import type { Figure } from '../../types';

export default {
  id: "mary-tape",
  type: 'figure',
  title: "Mary Tape",
  start: 1884,
  end: 1890,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  person: {
    name: "Mary Tape",
    years: "1857–1934",
    role: "San Francisco mother, landscape painter and amateur photographer",
    affiliation: "Her family brought *Tape v. Hurley* (1885)",
    motivation: "Her daughter Mamie's right to go to public school",
    sources: [
      { title: "Mary Tape, National Park Service", url: "https://www.nps.gov/people/mary-tape.htm" },
    ],
  },
  impact: [
    "Fought San Francisco's school board after it turned away her daughter in 1884",
    "Wrote a furious letter to the board, published in the *Daily Alta California*, after the city opened a separate Chinese school",
    "The case became an early landmark in the fight against school segregation",
  ],
  turningPoints: ["exclusion-act"],
  sources: [
    { title: "Mary Tape, National Park Service", url: "https://www.nps.gov/people/mary-tape.htm" },
    { title: "Before Brown v. Board of Education, There Was Tape v. Hurley, Library of Congress", url: "https://blogs.loc.gov/headlinesandheroes/2021/05/before-brown-v-education-there-was-tape-v-hurley/" },
  ],
} satisfies Figure;
