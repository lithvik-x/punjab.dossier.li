// Education & Digital Access Data for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/education-digital.md
// Research Date: 2026-05-20

import type { EducationDigitalData } from "@/types/education-digital-types";

export const educationDigitalData: EducationDigitalData = {
  literacyRates: [
    { metric: "Overall Literacy (7+)", census2011: "76.7%", estimated2024_25: "~83-85%", note: "Projected" },
    { metric: "Male Literacy", census2011: "80.4%", estimated2024_25: "~82.1%", note: "Sage Journals estimate, Jan 2025" },
    { metric: "Female Literacy", census2011: "70.7%", estimated2024_25: "~76-78%", note: "Projected" },
    { metric: "Urban Literacy", census2011: "~85%", estimated2024_25: "VERIFICATION_NEEDED" },
    { metric: "Rural Literacy", census2011: "~72%", estimated2024_25: "VERIFICATION_NEEDED" },
  ],
  scLiteracy: [
    { district: "Hoshiarpur", scLiteracy: "82.5%", districtTotal: "84.6%" },
    { district: "Rupnagar", scLiteracy: "78.4%", districtTotal: "N/A" },
  ],
  schoolInfrastructure: [
    { indicator: "Total Schools", punjab: "27,281", nationalAverage: "—" },
    { indicator: "Enrolled Students", punjab: "59.09 lakh", nationalAverage: "—" },
    { indicator: "Total Teachers", punjab: "2.73 lakh", nationalAverage: "—" },
    { indicator: "Female Teacher Share", punjab: "76.6%", nationalAverage: "~50%", note: "HIGHEST in India" },
    { indicator: "Private Unaided Schools", punjab: "27.8%", nationalAverage: "23.1%" },
    { indicator: "Functional Electricity", punjab: "100%", nationalAverage: "~95%" },
    { indicator: "Functional Drinking Water", punjab: "100%", nationalAverage: "~96%" },
    { indicator: "Functional Girls' Toilet", punjab: "98.4%", nationalAverage: "~92%" },
    { indicator: "Computer Access", punjab: "99.0%", nationalAverage: "~65%", note: "HIGHEST in India" },
    { indicator: "Internet Connectivity", punjab: "88.9%", nationalAverage: "~55%", note: "HIGHEST in India" },
    { indicator: "Kitchen Garden Coverage", punjab: "75.0%", nationalAverage: "—" },
  ],
  gerData: [
    { level: "Primary GER", punjab: "105.6%", national: "90.9%" },
    { level: "Secondary GER", punjab: "92.6%", national: "78.7%" },
    { level: "Higher Secondary GER", punjab: "79.5%", national: "58.4%" },
  ],
  dropoutData: [
    { level: "Primary Dropout", punjab: "2.5%", national: "0.3%", note: "ANOMALY - exceeds national" },
    { level: "Upper Primary Dropout", punjab: "2.7%", national: "3.5%" },
    { level: "Secondary Dropout", punjab: "6.2%", national: "11.5%" },
    { level: "UP-to-Secondary Transition", punjab: "94.2%", national: "—" },
    { level: "Secondary-to-HS Transition", punjab: "90.7%", national: "—", note: "Highest among large states" },
    { level: "Class 12 Retention", punjab: "67.8%", national: "47.2%" },
  ],
  ptrData: [
    { level: "Overall PTR", punjab: "22:1", national: "24:1" },
    { level: "Secondary PTR", punjab: "9:1", national: "15:1", note: "LOWEST in India" },
    { level: "HS PTR", punjab: "16:1", national: "—", note: "Improved from 18 in 2021-22" },
  ],
  digitalAccess: [
    { metric: "Internet Subscribers per 100", punjab: "~77", india: "~72", note: "Above national average" },
    { metric: "Rural Internet per 100", punjab: "~42.5", india: "~45", note: "Rural-urban divide stark" },
    { metric: "Jio Wireless Subscribers", punjab: "1.17 crore", india: "—", note: "Mar 2026" },
    { metric: "Telephone Density", punjab: "~90%+", india: "~84%" },
    { metric: "Rural Smartphone Access (children)", punjab: "85%", india: "N/A", note: "ASER data, Feb 2026" },
    { metric: "Smartphone Household Penetration", punjab: "65-70%", india: "60%", note: "Estimated" },
  ],
  digitalLiteracyTiers: [
    { tier: "Tier 1", description: "No digital access", estimatedPct: "~15-18%" },
    { tier: "Tier 2", description: "Basic phone only (no internet)", estimatedPct: "~10-12%" },
    { tier: "Tier 3", description: "Smartphone for calls/WhatsApp only", estimatedPct: "~25-30%" },
    { tier: "Tier 4", description: "Active social media + video consumer", estimatedPct: "~25-30%" },
    { tier: "Tier 5", description: "Digital payments/government services", estimatedPct: "~10-12%" },
    { tier: "Tier 6", description: "Advanced (content creation, e-commerce)", estimatedPct: "~5-8%" },
  ],
  socialMediaPlatforms: [
    { platform: "WhatsApp", indiaMAU: "~530M", favoritePct: "15.8%", punjabEstimate: "~80-85%", demographic: "All ages, primary info channel in rural" },
    { platform: "YouTube", indiaMAU: "~500M", favoritePct: "Most used (29h 37min/mo)", punjabEstimate: "~75-80%", demographic: "All ages, dominant entertainment" },
    { platform: "Instagram", indiaMAU: "~400M", favoritePct: "14.3%", punjabEstimate: "~50-55%", demographic: "Urban, 18-35 age group" },
    { platform: "Facebook", indiaMAU: "~350M", favoritePct: "Declining but major", punjabEstimate: "~45-50%", demographic: "35+ rural, general" },
    { platform: "Snapchat", indiaMAU: "~200M", favoritePct: "Growing fast", punjabEstimate: "~25-30%", demographic: "15-25 age group" },
    { platform: "X/Twitter", indiaMAU: "~30M", favoritePct: "Niche", punjabEstimate: "~5-8%", demographic: "Political/urban elite" },
    { platform: "Telegram", indiaMAU: "~100M", favoritePct: "Growing", punjabEstimate: "~20-25%", demographic: "News, education" },
    { platform: "ShareChat/Moj", indiaMAU: "~180M", favoritePct: "Regional content", punjabEstimate: "~15-20%", demographic: "Punjabi content" },
  ],
};

// SC Education Metrics
export const scEducationMetrics = {
  scPopulationShare: "~32%",
  scEnrolmentShare: "36.1%",
  scPrimaryGER: "103.0%",
  scSecondaryGER: "92.3%",
  scHSGER: "79.1%",
  note: "Highest SC enrolment share of any Indian state",
};

// 4G/5G Coverage
export const networkCoverage = {
  coverage: "4G well-covered by Jio, Airtel, Vi networks",
  fiveG: "5G rollout began 2022-23 in major cities (Ludhiana, Amritsar, Chandigarh, Jalandhar)",
  darkZones: [
    "Border belt: Gurdaspur, Pathankot, Tarn Taran",
    "Kandi area: Hoshiarpur, Rupnagar",
    "Deep rural Malwa",
  ],
};

// Campaign Strategic Implications
export const campaignImplications = [
  { number: 1, text: "WhatsApp-first strategy — ~80-85% smartphone user penetration, primary info channel in rural Punjab" },
  { number: 2, text: "YouTube for political messaging — Punjabi YouTube consumption among highest in India" },
  { number: 3, text: "Digital divide = campaign gap — ~55-60% of rural Punjab NOT online, traditional media essential" },
  { number: 4, text: "SC voter education — 36.1% SC school enrolment, targeted WhatsApp/Facebook content for SC-welfare" },
  { number: 5, text: "Female voter reach — Only 34.5% female on social media, door-to-door/SHG networks needed" },
  { number: 6, text: "Youth (18-30) digital-native — Instagram, Snapchat, YouTube Shorts for first-time voters" },
  { number: 7, text: "NRI amplification — Punjab diaspora runs WhatsApp groups/YouTube channels influencing domestic opinion" },
];

// Teacher Data
export const teacherData = {
  singleTeacherSchools: {
    previous: 35,
    current: 2431,
    change: "68x increase (likely data reclassification)",
  },
  femaleTeacherShare: "76.6% (highest in India)",
  teacherTrainingRate: "97%+ trained at secondary and HS levels",
};

// Learning Outcomes
export const learningOutcomes = {
  classIIIReading: "Among better-performing northern states",
  classVReading: "At or above national average (48.8%)",
  digitalLiteracy: {
    smartphoneAccess: "85% in rural Punjab (ASER data)",
    ownDevice: "31.4% nationally",
  },
  stateNote: "Punjab typically at or above national average in ASER",
};

// ==========================================
// DERIVED METRICS FOR DASHBOARD
// ==========================================

export const educationDigitalMetrics = {
  // Key metrics
  overallLiteracy: "~83-85%",
  maleLiteracy: "~82.1%",
  femaleLiteracy: "~76-78%",
  scLiteracyHoshiarpur: "82.5%",

  // Infrastructure
  schools: "27,281",
  enrolledStudents: "59.09 lakh",
  teachers: "2.73 lakh",
  femaleTeacherShare: "76.6% (highest in India)",
  computerAccess: "99.0% (highest in India)",
  internetConnectivity: "88.9% (highest in India)",

  // GER
  primaryGER: "105.6%",
  secondaryGER: "92.6%",
  higherSecondaryGER: "79.5%",

  // Digital
  internetPer100: "~77",
  ruralInternetPer100: "~42.5",
  ruralSmartphoneAccess: "85%",

  // Key insight
  keyInsight:
    "Rural-urban digital divide is stark — rural internet access (~42.5 per 100) is significantly lower than urban. This impacts campaign reach in agricultural Malwa and Majha belts.",
};

// Chart data for literacy rates
export const literacyRateData = [
  { metric: "Overall Literacy", census2011: 76.7, estimated2024_25: 84, color: "#2563EB" },
  { metric: "Male Literacy", census2011: 80.4, estimated2024_25: 82.1, color: "#059669" },
  { metric: "Female Literacy", census2011: 70.7, estimated2024_25: 77, color: "#DC2626" },
];

// Chart data for GER comparison
export const gerComparisonData = [
  { level: "Primary GER", punjab: 105.6, national: 90.9, color: "#4F46E5" },
  { level: "Secondary GER", punjab: 92.6, national: 78.7, color: "#7C3AED" },
  { level: "Higher Secondary GER", punjab: 79.5, national: 58.4, color: "#2563EB" },
];

// Chart data for digital access
export const digitalAccessData = [
  { metric: "Internet per 100 (overall)", punjab: 77, india: 72, color: "#059669" },
  { metric: "Rural Internet per 100", punjab: 42.5, india: 45, color: "#DC2626" },
  { metric: "Telephone Density", punjab: 90, india: 84, color: "#2563EB" },
  { metric: "Smartphone Households", punjab: 67.5, india: 60, color: "#7C3AED" },
];

// Chart data for social media penetration
export const socialMediaPenetrationData = [
  { platform: "WhatsApp", percent: 82.5, color: "#22C55E" },
  { platform: "YouTube", percent: 77.5, color: "#EF4444" },
  { platform: "Facebook", percent: 47.5, color: "#3B82F6" },
  { platform: "Instagram", percent: 52.5, color: "#EC4899" },
  { platform: "Snapchat", percent: 27.5, color: "#F59E0B" },
  { platform: "Telegram", percent: 22.5, color: "#2563EB" },
];

// Digital literacy tier distribution
export const digitalLiteracyTierData = [
  { tier: "No access", percent: 16.5, color: "#6B7280" },
  { tier: "Basic phone", percent: 11, color: "#9CA3AF" },
  { tier: "Smartphone basic", percent: 27.5, color: "#F59E0B" },
  { tier: "Social media", percent: 27.5, color: "#2563EB" },
  { tier: "Digital payments", percent: 11, color: "#059669" },
  { tier: "Advanced", percent: 6.5, color: "#7C3AED" },
];

// Strategic implications for Congress campaign
export const congressDigitalStrategy = {
  whatsappFirst: {
    priority: 1,
    action: "WhatsApp-first strategy — ~80-85% smartphone user penetration, primary info channel in rural Punjab",
  },
  youtubeMessaging: {
    priority: 2,
    action: "YouTube for political messaging — Punjabi YouTube consumption among highest in India",
  },
  traditionalMedia: {
    priority: 3,
    action: "Digital divide = campaign gap — ~55-60% of rural Punjab NOT online, traditional media essential",
  },
  scVoterEducation: {
    priority: 4,
    action: "SC voter education — 36.1% SC school enrolment, targeted WhatsApp/Facebook content",
  },
  femaleOutreach: {
    priority: 5,
    action: "Female voter reach — Only 34.5% female on social media, door-to-door/SHG networks needed",
  },
  youthDigital: {
    priority: 6,
    action: "Youth (18-30) digital-native — Instagram, Snapchat, YouTube Shorts for first-time voters",
  },
  nriAmplification: {
    priority: 7,
    action: "NRI amplification — Punjab diaspora runs WhatsApp groups/YouTube channels influencing domestic opinion",
  },
};
