import type { Fact } from '../../types';

export default {
  id: "la-massacre-1871",
  type: 'fact',
  title: "Chinese Massacre of 1871",
  start: 1871,
  end: 1871,
  places: [
    { name: "Los Angeles, CA", lat: 34.056, lon: -118.239 },
  ],
  body: "On October 24, 1871, a mob in Los Angeles killed about 18 Chinese residents, one of the largest mass lynchings in US history.",
  sources: [
    { title: "Los Angeles Chinese massacre of 1871, Wikipedia", url: "https://en.wikipedia.org/wiki/Los_Angeles_Chinese_massacre_of_1871" },
    { title: "Forgotten Los Angeles History: The Chinese Massacre of 1871, Los Angeles Public Library", url: "https://lapl.org/collections-resources/blogs/lapl/chinese-massacre-1871" },
  ],
} satisfies Fact;
