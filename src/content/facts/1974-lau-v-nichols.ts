import type { Fact } from '../../types';

export default {
  id: "lau-v-nichols",
  type: 'fact',
  title: "Lau v. Nichols",
  start: 1974,
  end: 1974,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "On January 21, 1974, the Supreme Court ruled for Chinese-speaking students in San Francisco who were taught only in English: schools must help students who don't speak English understand their lessons.",
  sources: [
    { title: "Lau v. Nichols: A watershed Supreme Court ruling, National Center for Youth Law", url: "https://youthlaw.org/news/1974/01/21/lau-v-nichols-a-watershed-supreme-court-ruling-for-the-rights-of-non-english-speaking-students/" },
  ],
} satisfies Fact;
