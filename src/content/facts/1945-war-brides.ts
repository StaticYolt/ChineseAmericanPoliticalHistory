import type { Fact } from '../../types';

export default {
  id: "war-brides",
  type: 'fact',
  title: "Wives and families allowed in",
  start: 1945,
  end: 1946,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "The War Brides Act (1945) and the Chinese Alien Wives of American Citizens Act (1946) let Chinese wives of US citizens and veterans enter outside the tiny quota. For the first time, many Chinatowns began to have more women and children.",
  sources: [
    { title: "War Brides Act, Wikipedia", url: "https://en.wikipedia.org/wiki/War_Brides_Act" },
    { title: "Chinese War Brides, Museum of Chinese in America", url: "https://www.mocanyc.org/collections/stories/chinese-war-brides/" },
  ],
} satisfies Fact;
