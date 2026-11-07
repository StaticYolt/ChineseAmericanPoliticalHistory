import type { Fact } from '../../types';

export default {
  id: "lum-v-rice",
  type: 'fact',
  title: "Gong Lum v. Rice",
  start: 1927,
  end: 1927,
  places: [
    { name: "Rosedale, MS", lat: 33.8534, lon: -91.0276 },
  ],
  body: "Martha Lum, a Chinese American girl in Rosedale, Mississippi, was barred from the white school and assigned to a school for Black children. In 1927 the Supreme Court upheld the segregation.",
  sources: [
    { title: "Gong Lum v. Rice, Britannica", url: "https://www.britannica.com/event/Gong-Lum-v-Rice" },
  ],
} satisfies Fact;
