import type { Fact } from '../../types';

export default {
  id: "stranded-students",
  type: 'fact',
  title: "Chinese students stranded by the revolution",
  start: 1949,
  end: 1955,
  places: [
    { name: "New York, NY", lat: 40.7158, lon: -73.997 },
  ],
  body: "Thousands of Chinese students and scholars were at American universities when the Communists won China's civil war in 1949. Many could not safely go home, and their futures depended on US Cold War policy. (Shown at New York; they were spread across many campuses.)",
  sources: [
    { title: "Stranded: Chinese Migrant Scholars in American Universities, 1940–1970, National Academy of Education", url: "https://naeducation.org/?p=33686" },
  ],
} satisfies Fact;
