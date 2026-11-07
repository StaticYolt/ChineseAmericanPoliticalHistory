import type { Fact } from '../../types';

export default {
  id: "sffa-v-harvard",
  type: 'fact',
  title: "Students for Fair Admissions v. Harvard",
  start: 2023,
  end: 2023,
  places: [
    { name: "Cambridge, MA", lat: 42.3736, lon: -71.1097 },
  ],
  body: "On June 29, 2023, the Supreme Court ended race-conscious college admissions in a case that centered on claims of bias against Asian American applicants. Chinese Americans were split over the case.",
  sources: [
    { title: "Students for Fair Admissions v. Harvard, Wikipedia", url: "https://en.wikipedia.org/wiki/Students_for_Fair_Admissions_v._Harvard" },
  ],
} satisfies Fact;
