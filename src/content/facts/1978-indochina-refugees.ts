import type { Fact } from '../../types';

export default {
  id: "indochina-refugees",
  type: 'fact',
  title: "Refugees from Southeast Asia",
  start: 1978,
  end: 1985,
  places: [
    { name: "Los Angeles, CA", lat: 34.056, lon: -118.239 },
  ],
  body: "Many of the refugees who fled Vietnam, Laos and Cambodia after 1975, including many \"boat people,\" were ethnic Chinese. They brought a new and different Chinese immigrant experience to American cities. (Shown at Los Angeles; they settled in many cities.)",
  sources: [
    { title: "Indochina refugee crisis, Wikipedia", url: "https://en.wikipedia.org/wiki/Indochina_refugee_crisis" },
  ],
} satisfies Fact;
