import type { Fact } from '../../types';

export default {
  id: "covid-hate-crimes-act",
  type: 'fact',
  title: "Atlanta shootings and the COVID-19 Hate Crimes Act",
  start: 2021,
  end: 2021,
  places: [
    { name: "Atlanta, GA", lat: 33.749, lon: -84.388 },
  ],
  body: "On March 16, 2021, a gunman killed eight people at Atlanta-area spas, six of them Asian women. On May 20, 2021, President Biden signed the COVID-19 Hate Crimes Act.",
  sources: [
    { title: "Bill Signing: S. 937, COVID-19 Hate Crimes Act, The White House (archived)", url: "https://bidenwhitehouse.archives.gov/briefing-room/legislation/2021/05/20/bill-signing-s-937/" },
  ],
} satisfies Fact;
