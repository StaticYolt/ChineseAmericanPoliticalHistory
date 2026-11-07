import type { Fact } from '../../types';

export default {
  id: "chinese-hand-laundry-alliance",
  type: 'fact',
  title: "The Great Depression and the Chinese Hand Laundry Alliance",
  start: 1933,
  end: 1941,
  places: [
    { name: "New York, NY", lat: 40.7158, lon: -73.997 },
  ],
  body: "During the Great Depression, a 1933 New York City law required laundries to be run by US citizens and post a $1,000 bond, which would have shut out Chinese owners. Laundry workers formed the Chinese Hand Laundry Alliance, which won an exemption and cut the bond to $100.",
  sources: [
    { title: "Chinese Hand Laundry Alliance, Wikipedia", url: "https://en.wikipedia.org/wiki/Chinese_Hand_Laundry_Alliance" },
    { title: "Chinese Hand Laundry Alliance, Museum of Chinese in America", url: "https://www.mocanyc.org/collections/stories/chinese-hand-laundry-alliance/" },
  ],
} satisfies Fact;
