import type { Fact } from '../../types';

export default {
  id: "taiping-rebellion",
  type: 'fact',
  title: "Taiping Rebellion",
  start: 1850,
  end: 1864,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "The Taiping Rebellion (1850–1864), one of the deadliest wars in history, tore through China. War, poverty and famine in the south pushed many young men to look for work abroad. (Shown at San Francisco, where most of them arrived.)",
  sources: [
    { title: "Chinese Immigrants in America in the 19th Century, American Historical Association", url: "https://www.historians.org/wp-content/uploads/2024/05/Chinese-Immigrants-in-America-in-the-19th-Century.pdf" },
  ],
} satisfies Fact;
