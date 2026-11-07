import type { Figure } from '../../types';

export default {
  id: "russell-jeung",
  type: 'figure',
  title: "Russell Jeung",
  start: 2020,
  end: 2100, // still active: shows as "–today"
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  person: {
    name: "Russell Jeung",
    chineseName: "張華耀",
    years: "TODO",
    role: "Professor of Asian American studies at San Francisco State",
    affiliation: "Co-founder of Stop AAPI Hate",
    motivation: "Documenting and stopping anti-Asian racism during the COVID-19 pandemic",
    sources: [
      { title: "Russell Jeung, PhD, co-founder of Stop AAPI Hate, SF State Journalism", url: "https://journalism.sfsu.edu/event/russell-jeung-phd-zhanghuayao-scholar-co-founder-stop-aapi-hate" },
    ],
  },
  impact: [
    "Co-founded Stop AAPI Hate in 2020 to track anti-Asian incidents",
    "The coalition received over 1,100 reports in its first two weeks",
  ],
  turningPoints: [],
  sources: [
    { title: "Russell Jeung, PhD, co-founder of Stop AAPI Hate, SF State Journalism", url: "https://journalism.sfsu.edu/event/russell-jeung-phd-zhanghuayao-scholar-co-founder-stop-aapi-hate" },
    { title: "Stop AAPI Hate receives over 1,100 incident reports in two weeks, Chinese for Affirmative Action", url: "https://caasf.org/press-release/stop-aapi-hate-receives-over-1100-incident-reports-of-verbal-harassment-shunning-and-physical-assault-in-two-weeks/" },
  ],
} satisfies Figure;
