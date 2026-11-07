import type { Fact } from '../../types';

export default {
  id: "rock-springs-massacre",
  type: 'fact',
  title: "Rock Springs massacre",
  start: 1885,
  end: 1885,
  places: [
    { name: "Rock Springs, WY", lat: 41.5875, lon: -109.2029 },
  ],
  body: "On September 2, 1885, white miners in Rock Springs, Wyoming Territory, killed 28 Chinese miners and burned their homes.",
  sources: [
    { title: "Rock Springs massacre, Wikipedia", url: "https://en.wikipedia.org/wiki/Rock_Springs_massacre" },
  ],
} satisfies Fact;
