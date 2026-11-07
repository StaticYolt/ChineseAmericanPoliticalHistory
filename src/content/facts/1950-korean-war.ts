import type { Fact } from '../../types';

export default {
  id: "korean-war-suspicion",
  type: 'fact',
  title: "Korean War and suspicion",
  start: 1950,
  end: 1953,
  places: [
    { name: "San Francisco, CA", lat: 37.7941, lon: -122.4078 },
  ],
  body: "When China entered the Korean War, the United States cut off all trade with China in December 1950, and sending money to family there became restricted. In the McCarthy era, the FBI watched Chinese American groups, and in 1952 the Chinese Hand Laundry Alliance's newspaper was prosecuted under the Trading with the Enemy Act.",
  sources: [
    { title: "On this day in 1950, U.S. cuts off all trade with China, Brooklyn Eagle", url: "https://brooklyneagle.com/articles/2018/12/17/december-17-on-this-day-in-1950-u-s-cuts-off-all-trade-with-china/" },
    { title: "McCarthy: Chinese Americans 'numbed with fear', PBS American Experience", url: "https://www.pbs.org/wgbh/americanexperience/features/mccarthy-numbed-with-fear-chinese-americans" },
    { title: "Chinese Hand Laundry Alliance, Wikipedia", url: "https://en.wikipedia.org/wiki/Chinese_Hand_Laundry_Alliance" },
  ],
} satisfies Fact;
