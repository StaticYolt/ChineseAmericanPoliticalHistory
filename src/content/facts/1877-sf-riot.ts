import type { Fact } from '../../types';

export default {
  id: "sf-riot-1877",
  type: 'fact',
  title: "San Francisco riot and \"The Chinese Must Go\"",
  start: 1877,
  end: 1879,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "In July 1877 anti-Chinese mobs attacked San Francisco's Chinatown. Denis Kearney's Workingmen's Party grew out of the unrest with the slogan \"The Chinese must go!\"",
  sources: [
    { title: "The Chinese Must Go, American Heritage", url: "https://americanheritage.com/chinese-must-go" },
    { title: "Kearneyism in California, Museum of the City of San Francisco", url: "https://sfmuseum.org/hist6/kearneyism.html" },
  ],
} satisfies Fact;
