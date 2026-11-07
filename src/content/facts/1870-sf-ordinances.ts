import type { Fact } from '../../types';

export default {
  id: "sf-ordinances",
  type: 'fact',
  title: "San Francisco's anti-Chinese ordinances",
  start: 1870,
  end: 1879,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "San Francisco passed city laws aimed at Chinese residents, including an 1870 sanitary (\"cubic air\") ordinance on crowded lodging and a \"Queue Ordinance\" to cut off prisoners' braids, vetoed in 1873 and passed in 1876. A federal judge struck down the queue law in *Ho Ah Kow v. Nunan* (1879).",
  sources: [
    { title: "Pigtail Ordinance, Wikipedia", url: "https://en.wikipedia.org/wiki/Pigtail_Ordinance" },
    { title: "What did these anti-Chinese laws and rules say?, AAPI History Museum", url: "https://aapihistorymuseum.org/?p=173" },
  ],
} satisfies Fact;
