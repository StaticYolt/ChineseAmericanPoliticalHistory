import type { Figure } from '../../types';

export default {
  id: "alex-hing",
  type: 'figure',
  title: "Alex Hing",
  start: 1969,
  end: 1971,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  person: {
    name: "Alex Hing",
    years: "TODO",
    role: "Activist who helped form the Red Guard Party in San Francisco's Chinatown",
    affiliation: "Red Guard Party (1969), modeled on the Black Panther Party",
    motivation: "TODO",
    sources: [
      { title: "Red Guard Party, Wikipedia", url: "https://en.wikipedia.org/wiki/Red_Guard_Party" },
      { title: "Counterculturalist: Alex Hing, Asian American Writers' Workshop", url: "https://aaww.org/counterculturalist-alex-hing/" },
    ],
  },
  impact: [
    "Helped form the Red Guard Party in 1969",
    "The Red Guard ran a Sunday brunch for Chinatown's elderly residents and helped keep the Chinatown tuberculosis center open",
    "Pushed a ten-point plan on housing, education, jobs, medical care and police brutality",
  ],
  turningPoints: ["immigration-act-1965"],
  sources: [
    { title: "Red Guard Party, Wikipedia", url: "https://en.wikipedia.org/wiki/Red_Guard_Party" },
    { title: "Counterculturalist: Alex Hing, Asian American Writers' Workshop", url: "https://aaww.org/counterculturalist-alex-hing/" },
  ],
} satisfies Figure;
