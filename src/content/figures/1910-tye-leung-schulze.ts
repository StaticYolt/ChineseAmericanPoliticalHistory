import type { Figure } from '../../types';

export default {
  id: "tye-leung-schulze",
  type: 'figure',
  title: "Tye Leung Schulze",
  start: 1910,
  end: 1946,
  places: [
    { name: "Angel Island, CA", lat: 37.8618, lon: -122.4326 },
  ],
  person: {
    name: "Tye Leung Schulze",
    years: "1887–1972",
    role: "Interpreter at Angel Island and later for the wives of Chinese American servicemen",
    affiliation: "Worked with Donaldina Cameron's Presbyterian Mission Home",
    motivation: "Helping Chinese women and immigrants; she had fled an arranged marriage herself at 12",
    sources: [
      { title: "Tye Leung Schulze, National Park Service", url: "https://www.nps.gov/people/tye-leung-schulze.htm" },
      { title: "She Was the First Chinese American Woman to Vote, PBS American Masters", url: "https://www.pbs.org/wnet/americanmasters/she-was-first-chinese-american-woman-vote" },
    ],
  },
  impact: [
    "In 1910 became the first Chinese American woman to work for the federal government, as an interpreter at Angel Island",
    "In May 1912 became the first Chinese American woman to vote in a US election",
    "Married immigration inspector Charles Schulze in Washington state in 1913 because California banned marriages between white and Asian people; both lost their jobs",
  ],
  turningPoints: ["wwii-cold-war"],
  sources: [
    { title: "Tye Leung Schulze, National Park Service", url: "https://www.nps.gov/people/tye-leung-schulze.htm" },
    { title: "She Was the First Chinese American Woman to Vote, PBS American Masters", url: "https://www.pbs.org/wnet/americanmasters/she-was-first-chinese-american-woman-vote" },
  ],
} satisfies Figure;
