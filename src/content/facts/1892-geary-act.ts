import type { Fact } from '../../types';

export default {
  id: "geary-act",
  type: 'fact',
  title: "Geary Act and the refusal to register",
  start: 1892,
  end: 1893,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
    { name: "New York, NY", lat: 40.7158, lon: -73.997 },
  ],
  body: "The 1892 Geary Act extended exclusion and required Chinese residents to carry a certificate of residence. The Chinese Six Companies urged people not to comply, and only about 13,000 of roughly 100,000 registered. The Supreme Court upheld the law in *Fong Yue Ting v. United States* (1893).",
  sources: [
    { title: "Chinese immigrants led the first mass resistance to America's deportation system, KQED", url: "https://www.kqed.org/news/12096279/chinese-immigrants-led-the-first-mass-resistance-to-americas-deportation-system" },
  ],
} satisfies Fact;
