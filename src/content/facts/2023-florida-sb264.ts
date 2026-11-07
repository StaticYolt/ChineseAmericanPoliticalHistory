import type { Fact } from '../../types';

export default {
  id: "florida-sb264",
  type: 'fact',
  title: "Florida's SB 264 land law",
  start: 2023,
  end: 2023,
  places: [
    { name: "Tallahassee, FL", lat: 30.4383, lon: -84.2807 },
  ],
  body: "Florida's 2023 law SB 264 restricts property purchases by Chinese citizens and some others. Chinese residents challenged it in *Shen v. Simpson*.",
  sources: [
    { title: "Shen v. Simpson, ACLU of Florida", url: "https://www.aclufl.org/?p=20823" },
  ],
} satisfies Fact;
