import type { Fact } from '../../types';

export default {
  id: "us-china-relations",
  type: 'fact',
  title: "US–China relations restored",
  start: 1979,
  end: 1979,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "The United States and the People's Republic of China established diplomatic relations on January 1, 1979. Students and immigrants from mainland China could come to the United States again.",
  sources: [
    { title: "U.S. immigration policy toward the People's Republic of China, Wikipedia", url: "https://en.wikipedia.org/wiki/U.S._immigration_policy_toward_the_People%27s_Republic_of_China" },
  ],
} satisfies Fact;
