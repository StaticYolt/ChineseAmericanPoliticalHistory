import type { Fact } from '../../types';

export default {
  id: "model-minority",
  type: 'fact',
  title: "The \"model minority\" image",
  start: 1966,
  end: 1966,
  places: [
    { name: "New York, NY", lat: 40.7158, lon: -73.997 },
  ],
  body: "On December 26, 1966, *U.S. News & World Report* ran \"Success Story of One Minority in the U.S.\" about Chinese Americans, months after a similar *New York Times Magazine* story on Japanese Americans. The \"model minority\" label took hold.",
  sources: [
    { title: "Model Minority, Encyclopedia.com", url: "https://www.encyclopedia.com/social-sciences/applied-and-social-sciences-magazines/model-minority" },
  ],
} satisfies Fact;
