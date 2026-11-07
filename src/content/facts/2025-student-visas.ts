import type { Fact } from '../../types';

export default {
  id: "chinese-student-visas",
  type: 'fact',
  title: "Chinese student visas targeted",
  start: 2025,
  end: 2025,
  places: [
    { name: "Washington, DC", lat: 38.9072, lon: -77.0369 },
  ],
  body: "In May 2025, Secretary of State Marco Rubio said the US would \"aggressively\" revoke visas of Chinese students with Communist Party ties or in \"critical fields.\" About 280,000 Chinese students were enrolled in the US at the time.",
  sources: [
    { title: "Rubio says U.S. will 'aggressively' revoke visas for many Chinese students, NPR", url: "https://www.npr.org/2025/05/28/g-s1-69495/rubio-says-u-s-will-aggressively-revoke-visas-for-many-chinese-students" },
  ],
} satisfies Fact;
