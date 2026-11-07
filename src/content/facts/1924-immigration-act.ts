import type { Fact } from '../../types';

export default {
  id: "immigration-act-1924",
  type: 'fact',
  title: "Immigration Act of 1924",
  start: 1924,
  end: 1930,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "The 1924 Immigration Act barred immigrants who were ineligible for citizenship. In *Chang Chan v. Nagle* (1925), the Supreme Court held that it kept out even the Chinese wives of US citizens, splitting families across the Pacific.",
  sources: [
    { title: "Chang Chan v. Nagle, EBSCO Research Starters", url: "https://ebsco.com/research-starters/law/chang-chan-v-nagle" },
  ],
} satisfies Fact;
