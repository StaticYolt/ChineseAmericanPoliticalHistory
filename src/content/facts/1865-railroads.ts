import type { Fact } from '../../types';

export default {
  id: "railroads",
  type: 'fact',
  title: "Building the transcontinental railroad",
  start: 1865,
  end: 1869,
  places: [
    { name: "Summit Tunnel, Sierra Nevada, CA", lat: 39.3162, lon: -120.3263 },
    { name: "Promontory Summit, UT", lat: 41.618, lon: -112.551 },
  ],
  body: "Thousands of Chinese workers built the Central Pacific Railroad through the Sierra Nevada. On June 24, 1867, about 3,000 of them went on strike for equal pay and shorter hours, one of the largest labor actions of the era. The railroad was finished at Promontory Summit, Utah, on May 10, 1869.",
  sources: [
    { title: "150 Years Ago, Chinese Railroad Workers Staged the Era's Largest Labor Strike, NBC News", url: "https://www.nbcnews.com/news/asian-america/150-years-ago-chinese-railroad-workers-staged-era-s-largest-n774901" },
    { title: "Railroad Chinese Labor Strike, June 24th, 1867, Museum of Chinese in America", url: "https://mocanyc.org/collections/stories/railroad-chinese-labor-strike-june-24th-1867" },
  ],
} satisfies Fact;
