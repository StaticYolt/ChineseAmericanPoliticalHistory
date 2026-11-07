import type { Fact } from '../../types';

export default {
  id: "ging-hawk-essay",
  type: 'fact',
  title: "Ging Hawk Club essay contest",
  start: 1936,
  end: 1936,
  places: [
    { name: "New York, NY", lat: 40.7158, lon: -73.997 },
  ],
  body: "In 1936 the Ging Hawk Club, a New York Chinese American women's organization, held an essay contest on the question \"Does My Future Lie in China or America?\" The winning essays were published in the *Chinese Digest* and set off heated letters, showing how live that choice was for the second generation.",
  sources: [
    { title: "Charlotte Brooks discusses American Exodus, The Metropole", url: "https://themetropole.blog/2020/03/12/the-metropole-bookshelf-charlotte-brooks-discusses-her-new-work-american-exodus-second-generation-chinese-americans-in-china-1901-1949/" },
  ],
} satisfies Fact;
