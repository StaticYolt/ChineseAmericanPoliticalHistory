import type { TurningPoint } from '../../types';

export default {
  id: "immigration-act-1965",
  type: 'turning-point',
  era: "movement",
  title: "Immigration and Nationality Act of 1965",
  start: 1965,
  end: 1968,
  places: [
    { name: "Liberty Island, NY", lat: 40.6892, lon: -74.0445 },
  ],

  whatHappened: "President Lyndon B. Johnson signed the Immigration and Nationality Act at the Statue of Liberty on October 3, 1965. It ended the national-origin quotas that had kept Asian immigration tiny for decades.",
  whyItMatters: "TODO: why it's a turning point. One angle: the Chinese American population grew quickly and became more varied by class and origin, just as the \"model minority\" label appeared.",

  people: [
    {
      name: "Ling-Chi Wang",
      years: "1938–",
      role: "Professor of Asian American and ethnic studies at UC Berkeley",
      affiliation: "Co-founded Chinese for Affirmative Action in San Francisco (1969)",
      motivation: "Equal rights, bilingual education and fair housing for Chinese Americans",
      sources: [
        { title: "Ling-Chi Wang, Wikipedia", url: "https://en.wikipedia.org/wiki/Ling-Chi_Wang" },
      ],
    },
    {
      name: "Alex Hing",
      years: "TODO",
      role: "Helped form the Red Guard Party in San Francisco's Chinatown (1969)",
      affiliation: "Red Guard Party",
      motivation: "TODO",
      sources: [
        { title: "Red Guard Party, Wikipedia", url: "https://en.wikipedia.org/wiki/Red_Guard_Party" },
        { title: "Counterculturalist: Alex Hing, Asian American Writers' Workshop", url: "https://aaww.org/counterculturalist-alex-hing/" },
      ],
    },
    {
      name: "TODO: an immigrant who arrived after 1965",
      years: "TODO",
      role: "TODO",
      affiliation: "TODO",
      motivation: "TODO",
      sources: [
        { title: "TODO: source", url: "https://example.com" },
      ],
    },
  ],

  generations: {
    children: "TODO: daily life, struggles and good things for children.",
    adults: "TODO: daily life, struggles and good things for adults.",
    elderly: "TODO: daily life, struggles and good things for elderly people.",
  },

  media: [
    {
      title: "Success Story of One Minority in the U.S.",
      year: 1966,
      src: 'images/placeholder.svg', // TODO: add the real image to public/images/
      alt: "TODO: describe what the image shows",
      credit: "U.S. News & World Report, December 26, 1966",
      rights: "fair-use",
      context: "TODO: an early \"model minority\" story about Chinese Americans. Add what it claimed and why that mattered.",
      source: { title: "Model Minority, Encyclopedia.com", url: "https://www.encyclopedia.com/social-sciences/applied-and-social-sciences-magazines/model-minority" },
    },
  ],

  sources: [
    { title: "Signing of the Immigration and Nationality Act, October 3, 1965, LBJ Presidential Library", url: "https://www.lbjlibrary.org/object/text/signing-immigration-and-nationality-act-10-03-1965" },
    { title: "Immigration and Nationality Act of 1965, Wikipedia", url: "https://en.wikipedia.org/wiki/Immigration_and_Nationality_Act_of_1965" },
  ],
} satisfies TurningPoint;
