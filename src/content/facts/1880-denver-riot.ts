import type { Fact } from '../../types';

export default {
  id: "denver-riot-1880",
  type: 'fact',
  title: "Denver anti-Chinese riot",
  start: 1880,
  end: 1880,
  places: [
    { name: "Denver, CO", lat: 39.7392, lon: -104.9903 },
  ],
  body: "On October 31, 1880, a mob destroyed nearly all of Denver's Chinatown and killed Look Young, a 28-year-old laundry worker. No one was held accountable. Denver formally apologized in 2022.",
  sources: [
    { title: "Chinatown, Denver, Wikipedia", url: "https://en.wikipedia.org/wiki/Chinatown,_Denver" },
    { title: "Denver formally apologizes for anti-Chinese riot in 1880 that left one dead, NBC News", url: "https://www.nbcnews.com/news/asian-america/denver-formally-apologizes-anti-chinese-riot-1880-left-one-dead-rcna24817" },
  ],
} satisfies Fact;
