// Age Structure & Political Cohorts Data for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/age-structure.md
// Research Date: 2026-05-20

import type { AgeStructureData } from "@/types/age-structure-types";

export const ageStructureData: AgeStructureData = {
  // ==========================================
  // 1. POPULATION OVERVIEW
  // ==========================================
  populationOverview: {
    projectedPopulationJuly2026: 31370000,
    projectedPopulationCrore: "3.14 crore (31.37 million)",
    male: 16450000,
    maleCrore: "1.65 crore (16.45 million)",
    female: 14920000,
    femaleCrore: "1.49 crore (14.92 million)",
    sexRatio: "110.2 males per 100 females",
    indiaShare: 2.19,
    growthRate2026: 0.58,
    growthRank: "10th lowest among states",
    tfr: 1.6,
    tfrNote: "Below replacement level of 2.1 (NFHS-5)",
  },

  // ==========================================
  // 2. FIVE-YEAR AGE COHORTS (Census 2011 Base)
  // ==========================================
  ageCohorts: {
    cohorts: [
      { ageGroup: "0-4", population: 2133529, percentOfTotal: 7.69, male: 1149956, female: 983573, malesPer100Females: 116.9 },
      { ageGroup: "5-9", population: 2368019, percentOfTotal: 8.54, male: 1301682, female: 1066337, malesPer100Females: 122.1 },
      { ageGroup: "10-14", population: 2583402, percentOfTotal: 9.31, male: 1445530, female: 1137872, malesPer100Females: 127.0 },
      { ageGroup: "15-19", population: 2817683, percentOfTotal: 10.16, male: 1570180, female: 1247503, malesPer100Females: 125.9 },
      { ageGroup: "20-24", population: 2776636, percentOfTotal: 10.01, male: 1465531, female: 1311105, malesPer100Females: 111.8 },
      { ageGroup: "25-29", population: 2463861, percentOfTotal: 8.88, male: 1270405, female: 1193456, malesPer100Females: 106.4 },
      { ageGroup: "30-34", population: 2116539, percentOfTotal: 7.63, male: 1082533, female: 1034006, malesPer100Females: 104.7 },
      { ageGroup: "35-39", population: 1989071, percentOfTotal: 7.17, male: 1010862, female: 978209, malesPer100Females: 103.3 },
      { ageGroup: "40-44", population: 1788469, percentOfTotal: 6.45, male: 909208, female: 879261, malesPer100Females: 103.4 },
      { ageGroup: "45-49", population: 1587771, percentOfTotal: 5.72, male: 818135, female: 769636, malesPer100Females: 106.3 },
      { ageGroup: "50-54", population: 1254464, percentOfTotal: 4.52, male: 663664, female: 590800, malesPer100Females: 112.3 },
      { ageGroup: "55-59", population: 956555, percentOfTotal: 3.45, male: 485845, female: 470710, malesPer100Females: 103.2 },
      { ageGroup: "60-64", population: 996590, percentOfTotal: 3.59, male: 482483, female: 514107, malesPer100Females: 93.8 },
      { ageGroup: "65-69", population: 719588, percentOfTotal: 2.59, male: 372806, female: 346782, malesPer100Females: 107.5 },
      { ageGroup: "70-74", population: 513472, percentOfTotal: 1.85, male: 272120, female: 241352, malesPer100Females: 112.7 },
      { ageGroup: "75-79", population: 256666, percentOfTotal: 0.93, male: 130203, female: 126463, malesPer100Females: 103.0 },
      { ageGroup: "80+", population: 379801, percentOfTotal: 1.37, male: 186250, female: 193551, malesPer100Females: 96.2 },
    ],
    total: 27743338,
    totalMale: 14639465,
    totalFemale: 13103873,
    totalSexRatio: 111.7,
  },

  // ==========================================
  // 3. POPULATION PYRAMID ANALYSIS
  // ==========================================
  populationPyramid: {
    description: "Punjab's pyramid (2011) showed a constrictive base — narrower at the bottom (0-14) than middle (15-39), indicating declining fertility. By 2026, this pattern has sharpened.",
    currentShares: [
      { ageGroup: "0-14", percent2011: 25.5, percent2026Projected: 22 },
      { ageGroup: "15-59", percent2011: 64, percent2026Projected: 64 },
      { ageGroup: "60+", percent2011: 10.3, percent2026Projected: 12 },
    ],
    birthRegistrations: [
      { year: 2011, count: 511058 },
      { year: 2020, count: 381200, decline: "25.4%" },
    ],
    pyramidShape: "Constrictive base with aging profile",
    constrictiveBaseEvidence: "Birth registrations fell 25.4% between 2011-2020 (511,058 to 381,200)",
  },

  // ==========================================
  // 4. POLITICAL AGE COHORTS (Voter-Relevant)
  // ==========================================
  politicalCohorts: {
    cohorts: [
      { name: "First-time voters", ageRange: "18-22", estimatedPopulation: "~14-16 lakh", percentOfTotal: 5, politicalSignificance: "Born 2005-2009; digital-native; AAP's core 2022 base" },
      { name: "New voters", ageRange: "22-30", estimatedPopulation: "~35-38 lakh", percentOfTotal: 12, politicalSignificance: "Job-seekers; emigration aspirants; high anti-incumbency" },
      { name: "Youth (total)", ageRange: "18-35", estimatedPopulation: "~62-68 lakh", percentOfTotal: 21, politicalSignificance: "Largest swing bloc; determines election outcomes" },
      { name: "Middle-age", ageRange: "35-50", estimatedPopulation: "~52-56 lakh", percentOfTotal: 17, politicalSignificance: "Family decision-makers; economically stressed" },
      { name: "Pre-senior", ageRange: "50-65", estimatedPopulation: "~35-38 lakh", percentOfTotal: 12, politicalSignificance: "Farmers, pension-approaching; institutional voters" },
      { name: "Senior citizens", ageRange: "65+", estimatedPopulation: "~22-25 lakh", percentOfTotal: 8, politicalSignificance: "High turnout; pension/social security concerns" },
      { name: "Pre-voting age", ageRange: "0-17", estimatedPopulation: "~70-75 lakh", percentOfTotal: 24, politicalSignificance: "Future electorate; not voting in 2027" },
    ],
    summary: {
      firstTimeVoters: "~14-16 lakh (5%)",
      newVoters: "~35-38 lakh (12%)",
      youthTotal: "~62-68 lakh (21%)",
      middleAge: "~52-56 lakh (17%)",
      preSenior: "~35-38 lakh (12%)",
      seniorCitizens: "~22-25 lakh (8%)",
      preVotingAge: "~70-75 lakh (24%)",
    },
  },

  // ==========================================
  // 5. FIRST-TIME VOTERS 2027
  // ==========================================
  firstTimeVoters: {
    estimation: {
      birthYears: "2005-2009",
      ageRange: "18-22 by Feb 2027",
      electorate2022: 215000000,
      electorate2024: 214000000,
      sirStatus: "SIR ordered May 14, 2026; expected completion late 2026",
    },
    pool: [
      { parameter: "Age 18-22 population (2027)", estimate: "~14-16 lakh" },
      { parameter: "Likely registered (70-80% norm)", estimate: "~10-13 lakh" },
      { parameter: "Minus emigration abroad (15-20% of cohort)", estimate: "~2-3 lakh absent" },
    ],
    netNewVoters: "~8-10 lakh",
    verificationNeeded: "Exact first-time voter count will only be known after SIR completion",
    politicalCharacter: {
      bornDuringAAPGovernance: true,
      digitalNative: true,
      primaryInfoSources: ["TikTok/Instagram/WhatsApp"],
      keyIssues: ["unemployment", "emigration", "drugs", "education quality"],
      votingPattern: "Voted overwhelmingly for AAP in 2022 (per post-poll surveys)",
    },
  },

  // ==========================================
  // 6. AGE x LIFE STAGE CROSS-TABULATION
  // ==========================================
  lifeStages: {
    stages: [
      { stage: "Students", ageGroup: "18-22", keyConcerns: ["Education quality", "jobs", "emigration"], votingBehaviorPattern: "Volatile; low turnout; AAP-leaning" },
      { stage: "Early career", ageGroup: "23-30", keyConcerns: ["Employment", "housing", "marriage cost"], votingBehaviorPattern: "High emigration; anti-establishment" },
      { stage: "Young families", ageGroup: "30-40", keyConcerns: ["Child education", "healthcare", "income"], votingBehaviorPattern: "Economic voting; pragmatic" },
      { stage: "Established", ageGroup: "40-55", keyConcerns: ["Farm income", "business", "children's future"], votingBehaviorPattern: "Traditional loyalty; issue-based swing" },
      { stage: "Pre-retirement", ageGroup: "55-65", keyConcerns: ["Pension", "health", "debt relief"], votingBehaviorPattern: "High turnout; loyalty-based" },
      { stage: "Elderly", ageGroup: "65+", keyConcerns: ["Healthcare", "social security", "respect"], votingBehaviorPattern: "Highest turnout; community-influenced" },
    ],
  },

  // ==========================================
  // 7. TEMPORAL CHANGE: 2001-2011-2026
  // ==========================================
  temporalChanges: {
    indicators: [
      { indicator: "Total population", value2001: "2.44 crore", value2011: "2.77 crore", value2026Projected: "3.14 crore" },
      { indicator: "Decadal growth", value2001: "20.10%", value2011: "13.89%", value2026Projected: "~13.4% (2011-2026)" },
      { indicator: "0-14 age share", value2001: "~31%", value2011: "25.5%", value2026Projected: "~22%" },
      { indicator: "15-59 age share", value2001: "~60%", value2011: "64%", value2026Projected: "~64% (plateau)" },
      { indicator: "60+ age share", value2001: "~8%", value2011: "10.3%", value2026Projected: "~12-13%" },
      { indicator: "TFR", value2001: "2.47 (NFHS-2)", value2011: "1.7-1.8", value2026Projected: "1.6 (NFHS-5)" },
      { indicator: "Birth registrations", value2001: "511,058", value2011: "~450,000", value2026Projected: "~381,200 (2020)" },
      { indicator: "Median age (est.)", value2001: "~24", value2011: "~27", value2026Projected: "~30-31" },
    ],
    agingInsight: "Punjab is aging faster than the national average",
    medianAgeComparison: {
      india: 28,
      punjab: 30,
      comparableTo: "Southern states (Kerala, Tamil Nadu) rather than northern peers (UP, Bihar)",
    },
  },

  // ==========================================
  // 8. EMIGRATION IMPACT ON YOUTH DEMOGRAPHICS
  // ==========================================
  emigration: {
    scale: {
      annualEmigrationEstimate: "50,000-80,000 Punjabi youth annually",
      profile: "Primarily 18-30 age group; predominantly male; Sikh overrepresentation",
      impactOn2027Electorate: "The physically present 18-30 cohort is 15-20% smaller than census-projected",
      udiseEvidence: {
        sikhChildrenFoundational: "49% of Punjab enrollment",
        populationShare2011: "57.69%",
        gap: "8.68 percentage points below population share",
      },
      netEffect: "Each election cycle, the most politically volatile age group (18-30) loses a significant chunk to emigration, potentially dampening anti-incumbency waves",
    },
    destinations: ["Canada", "UK", "Australia", "EU countries"],
  },

  // ==========================================
  // 9. REGIONAL AGE VARIATIONS
  // ==========================================
  regionalAge: {
    regions: [
      { region: "Malwa", seats: 69, districts: "Ludhiana, Bathinda, Mansa, Sangrur, Moga, etc.", ageProfileCharacter: "Highest emigration; youngest outward; aging farmer base" },
      { region: "Majha", seats: 25, districts: "Amritsar, Gurdaspur, Tarn Taran, Pathankot", ageProfileCharacter: "Border districts; higher fertility in some pockets; strong Sikh character" },
      { region: "Doaba", seats: 23, districts: "Jalandhar, Kapurthala, Hoshiarpur, SBS Nagar", ageProfileCharacter: "Highest NRI connection; most emigration impact; aging fastest" },
    ],
    doabaNote: "Doaba is Punjab's 'aging corridor' — highest proportion of elderly, lowest youth retention, strongest NRI remittance economy",
  },

  // ==========================================
  // 10. DATA QUALITY & GAPS
  // ==========================================
  dataQuality: {
    dataGaps: [
      { dataPoint: "Census 2021 age cohorts", status: "NOT AVAILABLE (census not conducted)", sourceNeeded: "Awaiting Census 2027" },
      { dataPoint: "Exact first-time voter count 2027", status: "PENDING SIR", sourceNeeded: "ECI post-SIR" },
      { dataPoint: "District-wise age breakdown 2026", status: "ESTIMATED ONLY", sourceNeeded: "Requires projection modeling" },
      { dataPoint: "Emigration by age/district", status: "PARTIAL (UDISE+ proxy)", sourceNeeded: "Need MoE/MEA data" },
      { dataPoint: "Urban vs rural age split 2026", status: "NOT AVAILABLE", sourceNeeded: "Requires Census or NFHS-6" },
      { dataPoint: "Age-wise voter turnout 2022", status: "NOT FOUND", sourceNeeded: "CEO Punjab post-poll data if available" },
    ],
    confidence: "MEDIUM",
    sources: ["Census 2011", "NFHS-5 (2019-21)", "UDISE+ 2023-24", "StatisticsTimes", "ECI", "ToI"],
  },
};

// ==========================================
// DERIVED METRICS FOR DASHBOARD
// ==========================================

export const ageStructureMetrics = {
  // Key age structure indicators
  projectedPopulation2026: "3.14 crore (31.37 million)",
  sexRatio: "110.2 males per 100 females",
  annualGrowthRate2026: "0.58% (10th lowest among states)",
  tfr: 1.6,

  // Age group shares
  youth018_35: "21%",
  workingAge: "64%",
  elderly60Plus: "~12-13%",

  // First-time voters
  firstTimeVoters2027: "~8-10 lakh net",
  firstTimeVoterBirthYears: "2005-2009",

  // Emigration
  annualYouthEmigration: "50,000-80,000",
  presentYouthDeficit: "15-20% smaller than projected",

  // Regional
  malwaSeats: 69,
  majhaSeats: 25,
  doabaSeats: 23,

  // Key insight
  missingYouthParadox: "Punjab's youth are either emigrating or politically disengaged. High emigration actually reduces the size of the anti-incumbency cohort — this benefits AAP",
};

// Chart data for age cohort distribution
export const ageCohortDistributionData = [
  { ageGroup: "0-4", population: 2133529, percent: 7.69, color: "#818CF8" },
  { ageGroup: "5-9", population: 2368019, percent: 8.54, color: "#6366F1" },
  { ageGroup: "10-14", population: 2583402, percent: 9.31, color: "#4F46E5" },
  { ageGroup: "15-19", population: 2817683, percent: 10.16, color: "#4338CA" },
  { ageGroup: "20-24", population: 2776636, percent: 10.01, color: "#3730A3" },
  { ageGroup: "25-29", population: 2463861, percent: 8.88, color: "#312E81" },
  { ageGroup: "30-34", population: 2116539, percent: 7.63, color: "#7C3AED" },
  { ageGroup: "35-39", population: 1989071, percent: 7.17, color: "#6D28D9" },
  { ageGroup: "40-44", population: 1788469, percent: 6.45, color: "#5B21B6" },
  { ageGroup: "45-49", population: 1587771, percent: 5.72, color: "#4C1D95" },
  { ageGroup: "50-54", population: 1254464, percent: 4.52, color: "#059669" },
  { ageGroup: "55-59", population: 956555, percent: 3.45, color: "#047857" },
  { ageGroup: "60-64", population: 996590, percent: 3.59, color: "#065F46" },
  { ageGroup: "65-69", population: 719588, percent: 2.59, color: "#DC2626" },
  { ageGroup: "70-74", population: 513472, percent: 1.85, color: "#B91C1C" },
  { ageGroup: "75-79", population: 256666, percent: 0.93, color: "#991B1B" },
  { ageGroup: "80+", population: 379801, percent: 1.37, color: "#7F1D1D" },
];

// Chart data for political age cohorts
export const politicalCohortData = [
  { cohort: "First-time voters (18-22)", population: "~14-16 lakh", percent: 5, color: "#8B5CF6" },
  { cohort: "New voters (22-30)", population: "~35-38 lakh", percent: 12, color: "#7C3AED" },
  { cohort: "Middle-age (35-50)", population: "~52-56 lakh", percent: 17, color: "#2563EB" },
  { cohort: "Pre-senior (50-65)", population: "~35-38 lakh", percent: 12, color: "#059669" },
  { cohort: "Senior (65+)", population: "~22-25 lakh", percent: 8, color: "#DC2626" },
  { cohort: "Pre-voting (0-17)", population: "~70-75 lakh", percent: 24, color: "#6B7280" },
];

// Chart data for temporal change
export const temporalChangeData = [
  { year: 2001, population: 2.44, growthRate: 20.1, youth014Share: 31, elderly60Share: 8 },
  { year: 2011, population: 2.77, growthRate: 13.89, youth014Share: 25.5, elderly60Share: 10.3 },
  { year: 2026, population: 3.14, growthRate: 0.58, youth014Share: 22, elderly60Share: 12.5 },
];

// Birth registration decline data
export const birthRegistrationData = [
  { year: 2011, count: 511058, color: "#4F46E5" },
  { year: 2020, count: 381200, color: "#DC2626" },
];

// Regional age profile comparison
export const regionalAgeProfileData = [
  { region: "Malwa", seats: 69, emigrationImpact: "Highest", agingRate: "Moderate", nriConnection: "5%" },
  { region: "Majha", seats: 25, emigrationImpact: "Moderate", agingRate: "Moderate", nriConnection: "12%" },
  { region: "Doaba", seats: 23, emigrationImpact: "Most", agingRate: "Fastest", nriConnection: "24%" },
];

// Strategic implications summary
export const ageStructureStrategicImplications = {
  keyInsight:
    "The 'Missing Youth' paradox — Punjab's youth are either emigrating or politically disengaged. High emigration actually reduces the size of the anti-incumbency cohort — this benefits AAP",
  congressStrategy: [
    { priority: 1, factor: "Youth (18-35) is largest swing bloc at ~21%", action: "Target youth who remain — job-seekers, not emigration aspirants" },
    { priority: 2, factor: "First-time voters have NO memory of Congress governance", action: "Rebuild youth brand from scratch — must compete with AAP's 2022 record" },
    { priority: 3, factor: "Aging farmer population (50-65) is traditional Congress base", action: "High turnout, loyal, economically stressed by farm debt — protect this base" },
    { priority: 4, factor: "Middle-age economic voters (35-50) are decision-makers", action: "Kitchen-table issues: inflation, farm income, jobs for their children" },
    { priority: 5, factor: "Declining birth cohort means fewer new voters each election", action: "By 2032, youth bulge shifts to 35-50 — more conservative, economically-focused" },
  ],
};
