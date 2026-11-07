import type { Fact } from '../../types';

export default {
  id: "tacoma-expulsion",
  type: 'fact',
  title: "Expulsion from Tacoma",
  start: 1885,
  end: 1886,
  places: [
    { name: "Tacoma, WA", lat: 47.2529, lon: -122.4443 },
  ],
  body: "On November 3, 1885, a mob led by Tacoma's business and political leaders marched about 150 to 200 Chinese residents to a train station and forced them out of town. Chinatown was burned within days. Seattle's Chinese residents were attacked and driven out in 1886.",
  sources: [
    { title: "Tacoma riot of 1885, Wikipedia", url: "https://en.wikipedia.org/wiki/Tacoma_riot_of_1885" },
  ],
} satisfies Fact;
