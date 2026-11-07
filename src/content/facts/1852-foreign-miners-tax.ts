import type { Fact } from '../../types';

export default {
  id: "foreign-miners-tax",
  type: 'fact',
  title: "Foreign Miners' Tax",
  start: 1852,
  end: 1852,
  places: [
    { name: "Sacramento, CA", lat: 38.5816, lon: -121.4944 },
  ],
  body: "California's first foreign miners' tax (1850) charged $20 a month and was repealed in 1851. In 1852 Governor John Bigler's administration brought in a new Foreign Miners' License Tax of $3 a month, which fell mostly on Chinese miners.",
  sources: [
    { title: "Foreign Miners' Tax Act of 1850, Wikipedia", url: "https://en.wikipedia.org/wiki/Foreign_Miners%27_Tax_Act_of_1850" },
  ],
} satisfies Fact;
