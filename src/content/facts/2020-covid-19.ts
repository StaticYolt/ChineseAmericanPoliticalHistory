import type { Fact } from '../../types';

export default {
  id: "covid-19",
  type: 'fact',
  title: "COVID-19 and anti-Asian hate",
  start: 2020,
  end: 2021,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "As COVID-19 spread in 2020, harassment of Asian Americans rose. Stop AAPI Hate, co-founded by SF State professor Russell Jeung, received over 1,100 incident reports in its first two weeks.",
  sources: [
    { title: "Stop AAPI Hate receives over 1,100 incident reports in two weeks, Chinese for Affirmative Action", url: "https://caasf.org/press-release/stop-aapi-hate-receives-over-1100-incident-reports-of-verbal-harassment-shunning-and-physical-assault-in-two-weeks/" },
  ],
} satisfies Fact;
