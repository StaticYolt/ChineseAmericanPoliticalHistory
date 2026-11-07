import type { Fact } from '../../types';

export default {
  id: "hells-canyon-massacre",
  type: 'fact',
  title: "Hells Canyon massacre",
  start: 1887,
  end: 1887,
  places: [
    { name: "Deep Creek, Hells Canyon, OR", lat: 45.6, lon: -116.7 },
  ],
  body: "In May 1887, as many as 34 Chinese gold miners were murdered at Deep Creek in Hells Canyon on the Snake River. The killings were mostly forgotten for a century.",
  sources: [
    { title: "Chinese Massacre at Deep Creek, Oregon Encyclopedia", url: "https://www.oregonencyclopedia.org/articles/chinese_massacre_at_deep_creek" },
  ],
} satisfies Fact;
