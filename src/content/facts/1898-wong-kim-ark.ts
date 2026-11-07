import type { Fact } from '../../types';

export default {
  id: "wong-kim-ark",
  type: 'fact',
  title: "United States v. Wong Kim Ark",
  start: 1898,
  end: 1898,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "On March 28, 1898, the Supreme Court ruled that Wong Kim Ark, born in San Francisco to Chinese parents, was a US citizen by birth. The case confirmed birthright citizenship under the Fourteenth Amendment.",
  sources: [
    { title: "March 28, 1898: Supreme Court affirms birthright citizenship of Wong Kim Ark, ABA Journal", url: "https://abajournal.com/magazine/article/march-28-1898-supreme-court-affirms-birthright-citizenship-of-wong-kim-ark" },
  ],
} satisfies Fact;
