import type { Fact } from '../../types';

export default {
  id: "mccarran-walter-act",
  type: 'fact',
  title: "McCarran–Walter Act",
  start: 1952,
  end: 1952,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "The Immigration and Nationality Act of 1952 ended race as a bar to US citizenship, so all Asian immigrants could naturalize. It kept small national quotas in place.",
  sources: [
    { title: "Immigration and Nationality Act (McCarran-Walter Act), Immigration History", url: "https://immigrationhistory.org/item/immigration-and-nationality-act-the-mccarran-walter-act/" },
  ],
} satisfies Fact;
