import type { Figure } from '../../types';

export default {
  id: "ng-poon-chew",
  type: 'figure',
  title: "Ng Poon Chew",
  start: 1900,
  end: 1931,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  person: {
    name: "Ng Poon Chew",
    chineseName: "伍盤照",
    years: "1866–1931",
    role: "Founder and editor of *Chung Sai Yat Po*, a San Francisco Chinese-language daily",
    affiliation: "Christian minister; public opponent of the Chinese Exclusion Act",
    motivation: "Fair treatment for Chinese Americans and for Chinese travelers at US ports",
    sources: [
      { title: "Ng Poon Chew, Wikipedia", url: "https://en.wikipedia.org/wiki/Ng_Poon_Chew" },
    ],
  },
  impact: [
    "Led a national speaking tour in 1905 supporting a boycott protesting mistreatment of Chinese at American ports",
    "Addressed the House of Representatives and persuaded President Theodore Roosevelt to order harsh treatment of Chinese travelers stopped",
    "Co-wrote *A Statement for Non-exclusion* (1905)",
  ],
  turningPoints: ["exclusion-act"],
  sources: [
    { title: "Ng Poon Chew, Wikipedia", url: "https://en.wikipedia.org/wiki/Ng_Poon_Chew" },
  ],
} satisfies Figure;
