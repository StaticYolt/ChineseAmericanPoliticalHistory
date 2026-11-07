import type { Fact } from '../../types';

export default {
  id: "cable-act",
  type: 'fact',
  title: "Cable Act",
  start: 1922,
  end: 1922,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "Under the Cable Act, an American woman who married an immigrant who was not eligible for citizenship, which included all Asian immigrants, lost her own US citizenship.",
  sources: [
    { title: "Cable Act, Immigration History", url: "https://immigrationhistory.org/item/cable-act/" },
    { title: "Cable Act, Densho Encyclopedia", url: "https://encyclopedia.densho.org/Cable_Act/" },
  ],
} satisfies Fact;
