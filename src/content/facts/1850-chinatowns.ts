import type { Fact } from '../../types';

export default {
  id: "chinatowns",
  type: 'fact',
  title: "Chinatowns",
  start: 1850,
  end: 1882,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "San Francisco's Chinatown grew in the 1850s as the arrival point for Chinese immigrants. Chinatowns gave newcomers housing, jobs, community and some safety, and they also became targets for city laws and mobs.",
  sources: [
    { title: "Searching for the Gold Mountain, Library of Congress", url: "https://www.loc.gov/classroom-materials/immigration/chinese/searching-for-the-gold-mountain/" },
  ],
} satisfies Fact;
