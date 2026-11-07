import type { Fact } from '../../types';

export default {
  id: "china-initiative",
  type: 'fact',
  title: "The DOJ \"China Initiative\"",
  start: 2018,
  end: 2022,
  places: [
    { name: "Knoxville, TN", lat: 35.9606, lon: -83.9207 },
  ],
  body: "The Justice Department's China Initiative (2018–2022) prosecuted researchers over alleged ties to China, and many cases collapsed. University of Tennessee professor Anming Hu was cleared and returned to work. Critics said it treated Chinese American scientists as suspects.",
  sources: [
    { title: "The Controversial China Initiative Is Ending, and Researchers Are Relieved, Scientific American", url: "https://www.scientificamerican.com/article/the-controversial-china-initiative-is-ending-and-researchers-are-relieved/" },
    { title: "UT professor cleared of charges in failed federal case goes back to work, WBIR", url: "https://wbir.com/article/news/education/ut-prof-cleared-of-charges-in-failed-federal-case-goes-back-to-work/51-de7fbc88-2846-4eac-a20b-914cbc3071d2" },
  ],
} satisfies Fact;
