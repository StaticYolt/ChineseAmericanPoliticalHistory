import type { Fact } from '../../types';

export default {
  id: "scott-act",
  type: 'fact',
  title: "Scott Act",
  start: 1888,
  end: 1888,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "The Scott Act, signed October 1, 1888, voided the certificates that let Chinese laborers return after visiting China. About 20,000 people were stranded outside the United States, and the Supreme Court upheld the law in *Chae Chan Ping v. United States*.",
  sources: [
    { title: "Scott Act, Immigration History", url: "https://immigrationhistory.org/item/scott-act/" },
  ],
} satisfies Fact;
