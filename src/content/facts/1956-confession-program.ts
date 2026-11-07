import type { Fact } from '../../types';

export default {
  id: "confession-program",
  type: 'fact',
  title: "Chinese Confession Program",
  start: 1956,
  end: 1965,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "Immigration authorities urged \"paper sons\" to confess their false papers in exchange for possible legal status. 13,895 people confessed, but each had to name relatives and paper families, which exposed 22,083 people in all.",
  sources: [
    { title: "Chinese Confession Program, Wikipedia", url: "https://en.wikipedia.org/wiki/Chinese_Confession_Program" },
  ],
} satisfies Fact;
