import type { Fact } from '../../types';

export default {
  id: "page-act",
  type: 'fact',
  title: "Page Act",
  start: 1875,
  end: 1875,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "The Page Act of 1875 barred women from China and other Asian countries presumed to be coming for \"immoral purposes.\" In practice it kept out most Chinese women, which left Chinese America a largely male \"bachelor society\" for decades.",
  sources: [
    { title: "Chinese Women, Immigration, and the First U.S. Exclusion Law: The Page Act of 1875, National Park Service", url: "https://www.nps.gov/safr/blogs/chinese-women-immigration-and-the-first-u-s-exclusion-law-the-page-act-of-1875.htm" },
  ],
} satisfies Fact;
