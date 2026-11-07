import type { Fact } from '../../types';

export default {
  id: "angel-island",
  type: 'fact',
  title: "Angel Island Immigration Station",
  start: 1910,
  end: 1940,
  places: [
    { name: "Angel Island, CA", lat: 37.8618, lon: -122.4326 },
  ],
  body: "From 1910 to 1940, Chinese arrivals were held at Angel Island in San Francisco Bay, sometimes for weeks or months, and questioned closely about their families. Detainees carved poems into the barrack walls that survive today.",
  sources: [
    { title: "Chinese Poetry at the Angel Island Immigration Station, Smithsonian Magazine", url: "https://www.smithsonianmag.com/blogs/smithsonian-center-folklife-cultural-heritage/2021/04/20/chinese-poetry-angel-island-immigration-station/" },
  ],
} satisfies Fact;
