import type { Fact } from '../../types';

export default {
  id: "campaign-finance-scandal",
  type: 'fact',
  title: "The \"Asian donor\" fundraising scandal",
  start: 1996,
  end: 1997,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "During investigations into 1996 campaign fundraising, Asian American donors were singled out and treated as foreigners. Former Congressman Norman Mineta criticized a 1997 *National Review* cover that drew Al Gore and the Clintons as racial caricatures.",
  sources: [
    { title: "Norman Mineta interview on the fundraising scandal (April 1997), PBS Frontline", url: "https://www.pbs.org/wgbh/pages/frontline/shows/fixers/reports/mineta.html" },
  ],
} satisfies Fact;
