import type { Fact } from '../../types';

export default {
  id: "china-war-relief",
  type: 'fact',
  title: "War relief for China",
  start: 1937,
  end: 1945,
  places: [
    { name: "New York, NY", lat: 40.7158, lon: -73.997 },
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "After Japan invaded China in 1937, Chinatowns raised money for China through \"Bowl of Rice\" parties, parades and rallies, such as a May 9, 1938 parade in New York's Chinatown. TODO: add how this changed how other Americans saw Chinese Americans.",
  sources: [
    { title: "Bowl of Rice Party (button), Smithsonian", url: "https://si.edu/object/bowl-rice-party:nmah_1864982" },
    { title: "Parade Rally in NYC Chinatown against the Japanese invasion of China, May 9, 1938, Museum of Chinese in America", url: "https://spike150.mocanyc.org/stories/2019-06-28-anti-japanese-parade-rally" },
  ],
} satisfies Fact;
