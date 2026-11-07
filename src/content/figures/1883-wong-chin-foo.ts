import type { Figure } from '../../types';

export default {
  id: "wong-chin-foo",
  type: 'figure',
  title: "Wong Chin Foo",
  start: 1883,
  end: 1898,
  places: [
    { name: "New York, NY", lat: 40.7158, lon: -73.997 },
  ],
  person: {
    name: "Wong Chin Foo",
    years: "1847–1898",
    role: "Journalist and lecturer",
    affiliation: "Founded the Chinese Equal Rights League (1892); naturalized US citizen (1874)",
    motivation: "Equal rights and citizenship for Chinese immigrants",
    sources: [
      { title: "Chronology, The First Chinese American: The Remarkable Life of Wong Chin Foo", url: "https://firstchineseamerican.com/chronology.htm" },
      { title: "Review: The First Chinese American, Washington Independent Review of Books", url: "https://www.washingtonindependentreviewofbooks.com/bookreview/the-first-chinese-american-the-remarkable-life-of-wong-chin-foo" },
    ],
  },
  impact: [
    "Published the *Chinese American* in New York in 1883, believed to be the first use of the term \"Chinese American\"",
    "Wrote \"Why Am I a Heathen?\" for the *North American Review* (1887)",
    "Testified before Congress against the Geary Act in 1893, believed to be the first Chinese person to do so",
  ],
  turningPoints: ["exclusion-act"],
  sources: [
    { title: "Chronology, The First Chinese American: The Remarkable Life of Wong Chin Foo", url: "https://firstchineseamerican.com/chronology.htm" },
  ],
} satisfies Figure;
