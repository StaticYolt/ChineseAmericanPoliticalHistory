import type { Fact } from '../../types';

export default {
  id: "yick-wo-v-hopkins",
  type: 'fact',
  title: "Yick Wo v. Hopkins",
  start: 1886,
  end: 1886,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "San Francisco enforced a laundry permit law almost only against Chinese owners. In 1886 the Supreme Court ruled for laundry owner Yick Wo: a law that is fair on paper but enforced unfairly violates equal protection.",
  sources: [
    { title: "Yick Wo v. Hopkins, Wikipedia", url: "https://en.wikipedia.org/wiki/Yick_Wo_v._Hopkins" },
  ],
} satisfies Fact;
