import type { Fact } from '../../types';

export default {
  id: "tape-v-hurley",
  type: 'fact',
  title: "Tape v. Hurley",
  start: 1885,
  end: 1885,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "When San Francisco turned away eight-year-old Mamie Tape from a public school, her parents sued. On January 9, 1885, a court ruled that excluding Chinese children violated state law and the Fourteenth Amendment, but the city responded by opening a separate Chinese school.",
  sources: [
    { title: "Mary Tape, National Park Service", url: "https://www.nps.gov/people/mary-tape.htm" },
    { title: "Before Brown v. Board of Education, There Was Tape v. Hurley, Library of Congress", url: "https://blogs.loc.gov/headlinesandheroes/2021/05/before-brown-v-education-there-was-tape-v-hurley/" },
  ],
} satisfies Fact;
