export const OPERATIONAL_HEADS = [
  {
    id: "demography",
    number: 1,
    title: "Demography Derivation",
    icon: "Users",
    description: "Voter segmentation by age, caste, religion, occupation, geography, psychographics",
    color: "bg-blue-500",
  },
  {
    id: "constituency",
    number: 2,
    title: "Constituency Proliferation",
    icon: "MapPin",
    description: "117 Assembly constituencies, booth-level targeting, regional analysis",
    color: "bg-green-500",
  },
  {
    id: "party",
    number: 3,
    title: "Party Propulsion",
    icon: "Flag",
    description: "Congress party machinery, worker networks, booth-level agents",
    color: "bg-cyan-500",
  },
  {
    id: "candidate",
    number: 4,
    title: "Candidate Supremacy",
    icon: "UserCheck",
    description: "Candidate profiles, winnability analysis, anti-incumbency factors",
    color: "bg-teal-500",
  },
  {
    id: "voter",
    number: 5,
    title: "Voter Enticement",
    icon: "Heart",
    description: "Voter outreach, micro-targeting, issue-based campaigns",
    color: "bg-pink-500",
  },
  {
    id: "competition",
    number: 6,
    title: "Competition Management",
    icon: "Swords",
    description: "AAP, SAD, BJP, BSP analysis, vote bank tracking",
    color: "bg-orange-500",
  },
  {
    id: "public-sentiment",
    number: 7,
    title: "Public Sentiment",
    icon: "MessageCircle",
    description: "Real-time sentiment tracking, issue prioritization",
    color: "bg-purple-500",
  },
  {
    id: "media-sentiment",
    number: 8,
    title: "Media Sentiment",
    icon: "Tv",
    description: "News analysis, social media monitoring, narrative tracking",
    color: "bg-indigo-500",
  },
  {
    id: "intelligence",
    number: 9,
    title: "Intelligence & Analytics",
    icon: "Brain",
    description: "Data pipelines, predictive analytics, real-time monitoring",
    color: "bg-violet-500",
  },
  {
    id: "perception",
    number: 10,
    title: "Perception & Strategy",
    icon: "Target",
    description: "SWOT analysis, campaign strategy, narrative formation",
    color: "bg-rose-500",
  },
] as const;

export const REGIONS = [
  { id: "malwa", name: "Malwa", constituencies: 69, border: "Central/South Punjab" },
  { id: "majha", name: "Majha", constituencies: 25, border: "Pakistan border, Central" },
  { id: "doaba", name: "Doaba", constituencies: 23, border: "Dual river region" },
  { id: "powadh", name: "Powadh", constituencies: 10, border: "Punjab-Haryana border" },
] as const;

export const PARTIES = [
  { id: "congress", name: "Indian National Congress", shortName: "INC", color: "#00A0DC" },
  { id: "aap", name: "Aam Aadmi Party", shortName: "AAP", color: "#12B5E5" },
  { id: "sad", name: "Shiromani Akali Dal", shortName: "SAD", color: "#3C8D2F" },
  { id: "bjp", name: "Bharatiya Janata Party", shortName: "BJP", color: "#FF671F" },
  { id: "bsp", name: "Bahujan Samaj Party", shortName: "BSP", color: "#0C7A92" },
] as const;

export const VERIFIED_2022_RESULTS = {
  totalSeats: 117,
  aap: { seats: 92, voteShare: 42.01 },
  congress: { seats: 18, voteShare: 22.98 },
  sad: { seats: 3, voteShare: 18.38 },
  bjp: { seats: 2, voteShare: 8.0 },
  turnout: 72.15,
  electors: 21457000,
};

export const RELIGIOUS_DEMOGRAPHICS = {
  sikhs: { percentage: 57.69, voters: "1.24 Cr", note: "Majority religion" },
  hindus: { percentage: 38.49, voters: "82.3L", note: "Second largest" },
  muslims: { percentage: 1.93, voters: "4.1L", note: "Concentrated in Malerkotla" },
  christians: { percentage: 1.26, voters: "2.7L", note: "Growing via conversions" },
  others: { percentage: 0.63, voters: "1.3L", note: "Buddhists, Jains, Sikhs" },
} as const;

export const SC_SUB_CATEGORIES = {
  mazhabiSikh: { name: "Mazhabi Sikh", percentageOfSC: 29.72, population: "26.3L", region: "Majha, Malwa border", politicalTilt: "SAD→AAP", issues: ["Landlessness", "Discrimination", "Christian conversions"] },
  ravidasiaRamdasia: { name: "Ravidasia/Ramdasia", percentageOfSC: 23.45, population: "20.8L", region: "Doaba", politicalTilt: "Congress", issues: ["Sub-categorization", "Dera influence", "Education"] },
  balmikiValmiki: { name: "Balmiki/Valmiki", percentageOfSC: 9.78, population: "8.7L", region: "Doaba, Malwa", politicalTilt: "Congress", issues: ["Sanitation stigma", "Conversion pull", "Sub-quota"] },
  adDharm: { name: "Ad-Dharm", percentageOfSC: 11.48, population: "10.2L", region: "Doaba", politicalTilt: "Congress/BSP", issues: ["Education", "Economic mobility"] },
  raiSikh: { name: "Rai Sikh", percentageOfSC: 5.83, population: "5.2L", region: "Malwa, Majha", politicalTilt: "SAD", issues: ["Criminal tribe stigma", "Representation"] },
  bazigar: { name: "Bazigar", percentageOfSC: 2.72, population: "2.4L", region: "Patiala, Sangrur", politicalTilt: "AAP", issues: ["Nomadic identity", "Livelihood"] },
} as const;

export const OBC_SUB_CATEGORIES = {
  saini: { name: "Saini", populationPct: "3-4%", region: "Doaba", occupation: "Horticulture, agriculture", politicalTilt: "Congress→AAP" },
  kamboj: { name: "Kamboj", populationPct: "3-4%", region: "Malwa", occupation: "Agriculture", politicalTilt: "Congress/SAD" },
  labana: { name: "Labana", populationPct: "2-3%", region: "Malwa", occupation: "Trade, transport", politicalTilt: "Congress" },
  tarkhanRamgarhia: { name: "Tarkhan/Ramgarhia", populationPct: "5-6%", region: "All regions", occupation: "Carpentry, artisan", politicalTilt: "Fragmented" },
  others: { name: "Others (Lohar, Sunar, Nai, Gujjar)", populationPct: "~10%", region: "Statewide", occupation: "Various", politicalTilt: "Mixed" },
} as const;

export const UPPER_CASTE_DATA = {
  jatSikh: { name: "Jat Sikh", populationPct: "20-25%", region: "Malwa dominant", politicalTilt: "Swing (SAD→AAP)", keyIssue: "Agrarian distress, farmer identity" },
  brahmin: { name: "Brahmin", populationPct: "4-5%", region: "HP border districts", politicalTilt: "Congress→BJP urban", keyIssue: "National security, temple politics" },
  khatriArora: { name: "Khatri/Arora", populationPct: "5-7%", region: "Urban centers", politicalTilt: "Congress/BJP/AAP", keyIssue: "Business environment" },
  rajput: { name: "Rajput", populationPct: "2-3%", region: "HP border", politicalTilt: "Congress→BJP", keyIssue: "Identity politics" },
} as const;

export const CASTE_CATEGORIES = {
  general: [
    { name: "Jat Sikh", percentage: 21, votesPerSeat: 28500, note: "~20-25% of Punjab, decisive swing bloc" },
    { name: "Bania (Khatri/Arora)", percentage: 7, votesPerSeat: 9500, note: "Urban trading, concentrated in 20-25 seats" },
    { name: "Brahmin", percentage: 4, votesPerSeat: 5400, note: "HP border districts, urban BJP lean" },
    { name: "Rajput", percentage: 2, votesPerSeat: 2700, note: "HP border, Congress→BJP shift" },
    { name: "Other Upper Caste", percentage: 3, votesPerSeat: 4100, note: "Sood, Bhatia, Mahajan" },
  ],
  obc: [
    { name: "Tarkhan/Ramgarhia", percentage: 6, votesPerSeat: 8100, note: "Largest OBC group, 5-6% of Punjab" },
    { name: "Saini/Kamboja", percentage: 5, votesPerSeat: 6800, note: "Doaba/Malwa, Congress traditional" },
    { name: "Labana", percentage: 3, votesPerSeat: 4100, note: "Malwa, trade/transport" },
    { name: "Other OBCs", percentage: 17, votesPerSeat: 23000, note: "Lohar, Gujjar, Kumhar, Nai, etc." },
  ],
  sc: [
    { name: "Mazhabi Sikh", percentage: 9, votesPerSeat: 12200, note: "~30% of SCs, rural Malwa/Majha, SAD base→AAP" },
    { name: "Ravidasia/Ramdasia", percentage: 7, votesPerSeat: 9500, note: "~23% of SCs, Doaba heartland, Congress" },
    { name: "Balmiki/Valmiki", percentage: 4, votesPerSeat: 5400, note: "~10% of SCs, Doaba/Malwa, conversion risk" },
    { name: "Ad-Dharm/Chamar", percentage: 4, votesPerSeat: 5400, note: "~11% of SCs, Doaba, most educated SC" },
    { name: "Other SCs", percentage: 8, votesPerSeat: 10800, note: "Rai Sikh, Bazigar, Vimukt Jatis" },
  ],
} as const;

export const KEY_ISSUES_VERIFIED = [
  { id: "drugs", name: "Drugs & Narcotics", priority: 1, sentiment: -0.87, verified: true, data: "6.6M users (Parliamentary Panel 2023), 697K children 10-17 with SUD, 230K opioid-dependent, 106 overdose deaths (2024, 2nd highest India), 51,000+ NDPS cases (2015-2024), 4,600+ kg heroin seized, 200+ drones seized (2024, double prior year), 13 lakh registered vs 8-9 lakh estimated actual patients" },
  { id: "unemployment", name: "Youth Unemployment", priority: 2, sentiment: -0.72, verified: true, data: "14-15% youth unemployment (PLFS 2024-25), national avg 14.8%; AAP's 1 lakh jobs promise unfulfilled" },
  { id: "agriculture", name: "Farmer Distress", priority: 3, sentiment: -0.65, verified: true, data: "89% farm households in debt, Rs 2.03L avg debt, 2,809 farmer suicides (2023-25)" },
  { id: "healthcare", name: "Healthcare", priority: 4, sentiment: -0.45, verified: true, data: "1 doctor per 7,000+ patients (CAG 2025, vs 1:1000 WHO norm), rural health critical" },
  { id: "power", name: "Power/Electricity", priority: 5, sentiment: -0.38, verified: true, data: "AAP free power promise kept but infrastructure crumbling" },
  { id: "education", name: "Education", priority: 6, sentiment: -0.28, verified: true, data: "41% schools without drinking water, 23% without electricity (UDISE 2023-24)" },
  { id: "pesticides", name: "Pesticide Issues", priority: 7, sentiment: -0.42, verified: true, data: "Cancer cases in Malwa: 1 per 20 households, pesticide link" },
  { id: "stubble", name: "Stubble Burning", priority: 8, sentiment: -0.31, verified: true, data: "Oct-Nov: 50% of Punjab's air pollution from stubble burning" },
  { id: "water", name: "Water Crisis", priority: 9, sentiment: -0.55, verified: true, data: "87% blocks overexploited, groundwater depletion 0.5m/year in central Punjab" },
  { id: "governance", name: "Governance", priority: 10, sentiment: -0.42, verified: true, data: "92 MLAs: 23 underperforming, 17 structural anomalies, 9 under scanner" },
] as const;

export const CAMPAIGN_CHANNELS = [
  { id: "whatsapp", name: "WhatsApp", reach: 8500000, engagement: 0.72, cost: 0.05, verified: true, note: "Primary voter contact channel" },
  { id: "facebook", name: "Facebook", reach: 6200000, engagement: 0.45, cost: 0.12, verified: true, note: "Wide penetration in Punjab" },
  { id: "instagram", name: "Instagram", reach: 4100000, engagement: 0.68, cost: 0.15, verified: true, note: "Youth-heavy platform" },
  { id: "youtube", name: "YouTube", reach: 3800000, engagement: 0.52, cost: 0.25, verified: true, note: "Video content dominant" },
  { id: "tiktok", name: "TikTok", reach: 2200000, engagement: 0.81, cost: 0.08, verified: false, note: "Banned but still used" },
  { id: "tv", name: "TV Ads", reach: 12000000, engagement: 0.22, cost: 2.50, verified: true, note: "PTC, TV Punjab reach" },
  { id: "radio", name: "Radio", reach: 4500000, engagement: 0.31, cost: 0.35, verified: false, note: "Local language stations" },
  { id: "print", name: "Print Media", reach: 2800000, engagement: 0.18, cost: 0.80, verified: true, note: "Tribune, Dainik Bhaskar" },
  { id: "door", name: "Door-to-Door", reach: 500000, engagement: 0.85, cost: 1.20, verified: true, note: "25,000 booth sevaks deployed" },
  { id: "rallies", name: "Rallies", reach: 800000, engagement: 0.78, cost: 1.50, verified: true, note: "Star campaigner visits" },
] as const;

export const ELECTION_INFO = {
  electionDate: "February 2027",
  daysRemaining: 258,
  totalSeats: 117,
  majorityMark: 59,
  totalElectors: 21608701,
  booths: 23847,
  votersPerBooth: 906,
} as const;

export const BJP_SAD_ALLIANCE = {
  broken: true,
  confirmedDate: "March 2026",
  source: "Amit Shah statement, TOI March 14, 2026",
  implication: "BJP fighting solo, SAD must realign strategy",
} as const;

export const CONGRESS_ORG = {
  boothSevaks: 25000,
  appointedDate: "May 2026",
  source: "New Indian Express May 16, 2026",
  coordinators: 117,
  appointedDateCoord: "June 2025",
} as const;
