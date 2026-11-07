import type { Fact } from '../../types';

export default {
  id: "delta-agriculture",
  type: 'fact',
  title: "Farming the Sacramento River Delta",
  start: 1860,
  end: 1915,
  places: [
    { name: "Walnut Grove and Locke, CA (Sacramento River Delta)", lat: 38.2508, lon: -121.5091 },
  ],
  body: "Chinese workers built levees and drained swamps in the Sacramento–San Joaquin Delta, then worked its farms. Chinese communities grew in towns like Walnut Grove, and in 1915 Chinese residents built the town of Locke after a fire.",
  sources: [
    { title: "Walnut Grove Chinese Historic District, National Park Service", url: "https://www.nps.gov/places/walnut-grove-chinese-historic-district.htm" },
    { title: "Locke Historic District, National Park Service", url: "https://www.nps.gov/places/locke-historic-district.htm" },
  ],
} satisfies Fact;
