export const WARD_NAMES = [
  "अम्बेडकर नगर",
  "कल्याणपुरम",
  "पंचशील नगर",
  "गणेशपुर",
  "पं. दीनदयाल उपाध्याय नगर",
  "सिविल लाईन",
  "औद्योगिक नगर",
  "गाँधीनगर",
  "स्वतन्त्रता सेनानी पुरम",
  "विन्ध्यवासिनी नगर",
  "शास्त्रीनगर",
  "अटननगर",
  "निरालानगर",
  "सुभाष नगर",
  "विकासनगर",
  "लक्ष्मीबाई नगर",
  "लाजयत नगर",
  "लाहिया मार्केट"
]


export const PROPERTY_TAX_WARDS = Array.from(
  { length: 18 },
  (_, index) => `Ward No. ${index + 1}`
);

export const OWNER_NAMES = [
  "Amit Kumar",
  "Rajesh Sharma",
  "Sunil Gupta",
  "Omkar Singh",
  "Radheshyam Verma",
  "Nandan Singh",
  "Pooja Agarwal",
  "Neeraj Kumar",
  "Vikas Yadav",
  "Anil Saxena",
];

export const FATHER_NAMES = [
  "Ramesh Chandra",
  "Mahesh Kumar",
  "Anokhe Lal",
  "Janki Prasad",
  "Ram Prakash",
  "Suresh Chand",
];

export const LOCALITIES = [
  "Railway Road",
  "Shanti Nagar",
  "Civil Lines",
  "GT Road",
  "Nai Basti",
  "Aruna Nagar",
  "Kachahari Road",
  "Agra Road",
];

export const LANDMARKS = [
  "Near Railway Crossing",
  "Near Shiv Temple",
  "Near Nagar Palika Office",
  "Near Main Market",
  "Near Government School",
  "Near Water Tank",
];

export const PROPERTY_TYPES = [
  "Residential",
  "Commercial",
  "Mixed Use",
] as const;
