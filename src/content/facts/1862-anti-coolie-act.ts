import type { Fact } from '../../types';

export default {
  id: "anti-coolie-act",
  type: 'fact',
  title: "California's \"Anti-Coolie Act\"",
  start: 1862,
  end: 1862,
  places: [
    { name: "Sacramento, CA", lat: 38.5816, lon: -121.4944 },
  ],
  body: "California placed a monthly tax on most Chinese workers in the state. The law's official purpose was to \"protect free white labor.\"",
  sources: [
    { title: "Anti-Coolie Act, Wikipedia", url: "https://en.wikipedia.org/wiki/Anti-Coolie_Act" },
  ],
} satisfies Fact;
