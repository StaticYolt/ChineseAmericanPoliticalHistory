import type { Figure } from '../../types';

export default {
  id: "judy-chu",
  type: 'figure',
  title: "Judy Chu",
  start: 2009,
  end: 2100, // still active: shows as "–today"
  places: [
    { name: "Monterey Park, CA", lat: 34.0625, lon: -118.1228 },
  ],
  person: {
    name: "Judy Chu",
    years: "TODO",
    role: "US Representative from California",
    affiliation: "Democratic Party; chair of the Congressional Asian Pacific American Caucus (2011–2025)",
    motivation: "TODO",
    sources: [
      { title: "Full Biography, Congresswoman Judy Chu", url: "https://chu.house.gov/about/full-biography" },
    ],
  },
  impact: [
    "Became the first Chinese American woman elected to Congress in 2009",
    "Wrote the House resolution of regret for the Chinese Exclusion Act, passed in 2012",
    "Chaired the Congressional Asian Pacific American Caucus from 2011 to 2025",
  ],
  turningPoints: ["exclusion-act"],
  sources: [
    { title: "Full Biography, Congresswoman Judy Chu", url: "https://chu.house.gov/about/full-biography" },
    { title: "A past wrong corrected: Expressing regret for Chinese Exclusion Act of 1882, Northwest Asian Weekly", url: "https://nwasianweekly.com/2012/06/editorial-a-past-wrong-corrected-expressing-regret-for-chinese-exclusion-act-of-1882" },
  ],
} satisfies Figure;
