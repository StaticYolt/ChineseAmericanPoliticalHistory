import type { Fact } from '../../types';

export default {
  id: "national-dollar-strike",
  type: 'fact',
  title: "National Dollar Stores strike",
  start: 1938,
  end: 1938,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "On February 26, 1938, 159 Chinese American women garment workers in San Francisco went on strike against National Dollar Stores, owned by millionaire Joe Shoong. They won a raise and a 40-hour week, though the factory closed the next year.",
  sources: [
    { title: "National Dollar Stores strike, HISTORY", url: "https://history.com/this-day-in-history/national-dollar-stores-strike-san-francisco-chinatown" },
  ],
} satisfies Fact;
