import type { Fact } from '../../types';

export default {
  id: "people-v-hall",
  type: 'fact',
  title: "People v. Hall",
  start: 1854,
  end: 1854,
  places: [
    { name: "Sacramento, CA", lat: 38.5816, lon: -121.4944 },
  ],
  body: "The California Supreme Court ruled that Chinese people could not testify against white people in court. Crimes against Chinese immigrants became very hard to prosecute.",
  sources: [
    { title: "People v. Hall, Immigration History", url: "https://immigrationhistory.org/item/people-v-hall/" },
  ],
} satisfies Fact;
