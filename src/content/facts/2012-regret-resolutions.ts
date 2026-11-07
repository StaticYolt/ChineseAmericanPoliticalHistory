import type { Fact } from '../../types';

export default {
  id: "regret-resolutions",
  type: 'fact',
  title: "Congress expresses regret for exclusion",
  start: 2011,
  end: 2012,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "In June 2012 the House passed a resolution, authored by Rep. Judy Chu, expressing regret for the Chinese Exclusion Act, following a Senate resolution in 2011.",
  sources: [
    { title: "A past wrong corrected: Expressing regret for Chinese Exclusion Act of 1882, Northwest Asian Weekly", url: "https://nwasianweekly.com/2012/06/editorial-a-past-wrong-corrected-expressing-regret-for-chinese-exclusion-act-of-1882" },
  ],
} satisfies Fact;
