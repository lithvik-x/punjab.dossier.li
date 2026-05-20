// Gender Demographics & Women Indicators Data for Punjab Congress 2027 Election
// Derived from: research-M2/MP1-foundational/demographics/gender-indicators.md
// Date: 19 May 2026 | Status: COMPLETE

import type {
  GenderPopulationData,
  DistrictChildSexRatio,
  LiteracyData,
  DistrictLiteracy,
  VoterTurnoutData,
  FemaleWorkforceData,
  FLFPRCharacteristics,
  NFHS5HealthData,
  VulnerableWomenData,
  WidowChallenges,
  SHGData,
  WomenSwingBloc,
  CongressMessagingPillar,
  DataGap,
  SourceDocument,
} from "@/types/gender-indicators-types";

// ==========================================
// POPULATION BY GENDER
// ==========================================

export const genderPopulationData: GenderPopulationData = {
  totalPopulation2026: "3.23 crore (32,280,000)",
  malePopulation: "1.64 crore (16,447,000)",
  femalePopulation: "~1.49 crore (14,926,000)",
  overallSexRatio: "895 females/1000 males (Census 2011)",
  childSexRatio06: "846 females/1000 males (Census 2011)",
  nflsSexRatio: "918 females/1000 males (NFHS-5, 2019-21)",
  sexRatioAtBirth: "904 (improved from 860 in NFHS-4)",
};

/**
 * District-wise Child Sex Ratio (Lowest) - Census 2011
 */
export const districtChildSexRatio: DistrictChildSexRatio[] = [
  { district: "Tarn Taran", childSexRatio: 820 },
  { district: "Bathinda", childSexRatio: 832 },
  { district: "Mansa", childSexRatio: 835 },
  { district: "Muktsar", childSexRatio: 839 },
  { district: "Ferozepur", childSexRatio: 843 },
  { district: "Punjab Average", childSexRatio: 846 },
];

/**
 * Sex ratio trend data
 */
export const sexRatioTrends = [
  { period: "2001 Census", ratio: 876, note: "Overall sex ratio" },
  { period: "2011 Census", ratio: 895, note: "Overall sex ratio" },
  { period: "NFHS-4", ratio: 860, note: "Sex ratio at birth" },
  { period: "NFHS-5", ratio: 904, note: "Sex ratio at birth - improved" },
];

// ==========================================
// FEMALE LITERACY
// ==========================================

/**
 * Literacy trend data
 */
export const literacyTrends: LiteracyData[] = [
  { period: "Census 2001", male: 75.23, female: 63.36, total: 69.65, gap: 11.87 },
  { period: "Census 2011", male: 80.44, female: 70.73, total: 75.84, gap: 9.71 },
  { period: "Current Est. (SSA Punjab)", male: 81.5, female: 71.3, total: 76.7, gap: 10.2 },
];

/**
 * District-wise Female Literacy Rate - Census 2011
 */
export const districtFemaleLiteracy: DistrictLiteracy[] = [
  { district: "Hoshiarpur", male: 89.9, female: 80.8, total: 85.4, gap: 9.1 },
  { district: "S.A.S. Nagar", male: 89.2, female: 80.0, total: 84.9, gap: 9.2 },
  { district: "Ludhiana", male: 86.3, female: 78.2, total: 82.7, gap: 8.1 },
  { district: "Jalandhar", male: 86.1, female: 78.3, total: 82.4, gap: 7.8 },
  { district: "Gurdaspur", male: 85.9, female: 75.7, total: 81.1, gap: 10.2 },
  { district: "Kapurthala", male: 84.6, female: 75.4, total: 80.2, gap: 9.2 },
  { district: "Fatehgarh Sahib", male: 84.5, female: 75.5, total: 80.3, gap: 9.0 },
  { district: "S.B.S. Nagar", male: 86.2, female: 74.3, total: 80.3, gap: 11.9 },
  { district: "Roopnagar", male: 88.9, female: 77.2, total: 83.3, gap: 11.7 },
  { district: "Amritsar", male: 81.2, female: 72.8, total: 77.2, gap: 8.4 },
  { district: "Patiala", male: 81.4, female: 70.5, total: 76.3, gap: 10.9 },
  { district: "Moga", male: 75.3, female: 67.4, total: 71.6, gap: 7.9 },
  { district: "Faridkot", male: 75.9, female: 64.8, total: 70.6, gap: 11.1 },
  { district: "Ferozepur", male: 76.7, female: 62.2, total: 69.8, gap: 14.5 },
  { district: "Bathinda", male: 75.3, female: 62.9, total: 69.6, gap: 12.4 },
  { district: "Tarn Taran", male: 75.4, female: 62.9, total: 69.4, gap: 12.5 },
  { district: "Barnala", male: 73.1, female: 64.1, total: 68.9, gap: 9.0 },
  { district: "Sangrur", male: 74.2, female: 62.9, total: 68.9, gap: 11.3 },
  { district: "Muktsar", male: 72.9, female: 60.0, total: 66.6, gap: 12.9 },
  { district: "Mansa", male: 68.4, female: 56.4, total: 62.8, gap: 12.0 },
];

/**
 * Key Pattern: Malwa districts with lowest female literacy
 */
export const malwaLowestFemaleLiteracyDistricts = [
  { district: "Mansa", femaleLiteracy: 56.4 },
  { district: "Muktsar", femaleLiteracy: 60.0 },
  { district: "Sangrur", femaleLiteracy: 62.9 },
  { district: "Bathinda", femaleLiteracy: 62.9 },
  { district: "Tarn Taran", femaleLiteracy: 62.9 },
];

// ==========================================
// ELECTORATE & VOTER TURNOUT
// ==========================================

export const voterTurnoutData: VoterTurnoutData = {
  male: {
    category: "Male",
    electors: "1,12,98,081",
    voters: "~77.6 lakh",
    turnout: "~68.7%",
    percentage: "52.6%",
  },
  female: {
    category: "Female",
    electors: "1,02,00,996",
    voters: "~69.8 lakh",
    turnout: "~68.4%",
    percentage: "47.4%",
  },
  transgender: {
    category: "Transgender",
    electors: "727",
    voters: "VERIFICATION_NEEDED",
    turnout: "VERIFICATION_NEEDED",
  },
  total: {
    category: "Total",
    electors: "2,14,99,804",
    voters: "~1,55.1 lakh",
    turnout: "72.15%",
  },
  genderGapInElectorate:
    "10.97 lakh more male than female electors (52.6% vs 47.4%). This gap reflects the underlying population sex ratio imbalance.",
  womenTurnoutGap:
    "Female turnout at ~68.4% was nearly at par with male turnout at ~68.7% -- a gender turnout gap of only 0.3 percentage points. In many individual constituencies, women turnout exceeded men.",
  turnoutNotes:
    "Transgender voters: Only 727 registered in 2022 (up from 507 in 2019 Lok Sabha). Massively undercounted.",
};

// ==========================================
// FEMALE WORKFORCE PARTICIPATION
// ==========================================

export const femaleWorkforceData: FemaleWorkforceData[] = [
  {
    state: "Punjab",
    femaleLFPR: "~24-28% (estimated)",
    source: "PLFS 2022-23",
  },
  {
    state: "India",
    femaleLFPR: "37.0%",
    source: "PLFS 2022-23",
  },
  {
    state: "Punjab",
    femaleLFPR: "VERIFICATION_NEEDED",
    source: "PLFS 2023-24",
  },
  {
    state: "India",
    femaleLFPR: "41.7%",
    source: "PLFS 2023-24",
  },
];

/**
 * FLFPR Characteristics
 */
export const flfprCharacteristics: FLFPRCharacteristics[] = [
  {
    characteristic: "Rural-Urban Divide",
    description: "Rural FLFPR is higher than urban due to agricultural work, but both are below national averages",
  },
  {
    characteristic: "Caste Dimension",
    description: "SC women have higher workforce participation but in lower-quality informal work",
  },
  {
    characteristic: "Sector Concentration",
    description: "Agriculture (56%), domestic work, ASHA/Anganwadi, SHG-related enterprises",
  },
  {
    characteristic: "Urban Female Employment",
    description: "Predominantly in education, health, government services, and small retail",
  },
];

// ==========================================
// HEALTH & SOCIAL INDICATORS (NFHS-5)
// ==========================================

export const nfhs5HealthData: NFHS5HealthData = {
  totalFertilityRate: "1.6",
  meanMarriageAgeWomen: "23.4 yrs",
  womenBankAccount: "~83%",
  womenMobilePhone: "~66%",
  spousalViolence: "~14%",
  physicalViolence: "14%",
  sexualViolence: "2%",
  anaemiaWomen: "~40%",
  obesityWomen: "Rising significantly",
  womenInHouseholdDecisions: "~85%",
};

/**
 * NFHS-5 Comparison: Punjab vs India
 */
export const nfhs5Comparison = [
  { indicator: "Total Fertility Rate", punjab: "1.6", india: "2.0", notes: "Below replacement; declining" },
  { indicator: "Mean Marriage Age (Women)", punjab: "23.4 yrs", india: "22.3 yrs", notes: "Above national average" },
  { indicator: "Women with Bank Account", punjab: "~83%", india: "~79%", notes: "Improved significantly" },
  { indicator: "Women Owning Mobile Phone", punjab: "~66%", india: "~54%", notes: "Higher than national" },
  { indicator: "Spousal Violence (ever)", punjab: "~14%", india: "~29%", notes: "Lower than national" },
  { indicator: "Physical Violence (age 18-49)", punjab: "14%", india: "~30%", notes: "Lower than national" },
  { indicator: "Sexual Violence", punjab: "2%", india: "~6%", notes: "Lower than national" },
  { indicator: "Anaemia (Women 15-49)", punjab: "~40%", india: "~57%", notes: "Better but still high" },
  { indicator: "Women in Household Decisions", punjab: "~85%", india: "~89%", notes: "Slightly below national" },
];

// ==========================================
// WIDOW, SINGLE WOMEN & FEMALE-HEADED HH
// ==========================================

export const vulnerableWomenData: VulnerableWomenData[] = [
  {
    category: "Widows (all ages)",
    estimatedCount: "~4.2 lakh+",
    source: "Census 2011 extrapolation",
  },
  {
    category: "Female-Headed Households",
    estimatedCount: "~10-12% of total HH",
    source: "Census 2011",
  },
  {
    category: "Single Women (never married 35+, divorced, separated)",
    estimatedCount: "~4.18 lakh (8.45% of female pop.)",
    source: "ActionAid/Ekal Nari estimate",
  },
];

/**
 * Widow Challenges
 */
export const widowChallenges: WidowChallenges[] = [
  {
    challenge: "Property Rights",
    description: "Loss of land/property rights to in-laws",
  },
  {
    challenge: "Pension Inadequacy",
    description: "Pension inadequacy (central and state schemes)",
  },
  {
    challenge: "Social Stigma",
    description: "Social stigma, particularly in rural areas",
  },
  {
    challenge: "Economic Vulnerability",
    description: "Economic vulnerability, especially among SC widows",
  },
];

// ==========================================
// SHG, ASHA & ANGANAWADI WORKERS
// ==========================================

export const shgData: SHGData = {
  womenSHGs: "~37,000",
  shgMembers: "~3 lakh (300,000)",
  ashaWorkers: "~36,000+",
  anganwadiCentres: "~26,000+",
  anganwadiWorkers: "~26,000+",
  totalFrontlineWomen: "~95,000+",
};

/**
 * Total Frontline Women Workers: ~95,000+
 */
export const frontlineWomenWorkers = [
  { category: "Women SHGs", count: "~37,000" },
  { category: "SHG Women Members", count: "~3 lakh (300,000)" },
  { category: "ASHA Workers", count: "~36,000+" },
  { category: "Anganwadi Centres", count: "~26,000+" },
  { category: "Anganwadi Workers", count: "~26,000+" },
  { category: "Total Frontline Women Workers", count: "~95,000+" },
];

// ==========================================
// STRATEGIC IMPLICATIONS FOR CONGRESS
// ==========================================

export const womenSwingBlocs: WomenSwingBloc[] = [
  {
    number: 1,
    bloc: "Women voters outnumber men in turnout",
    description:
      "In multiple constituencies women turnout exceeded men -- even a small shift in women's voting preference can swing 15-20 seats",
  },
  {
    number: 2,
    bloc: "Malwa women (69 seats)",
    description:
      "Face double disadvantage of low literacy + low sex ratio + low workforce participation -- most receptive to empowerment messaging",
  },
  {
    number: 3,
    bloc: "ASHA/Anganwadi workers (~62,000)",
    description:
      "Organized, underpaid, and politically aware -- promising regularisation can yield massive returns",
  },
  {
    number: 4,
    bloc: "SHG network (3 lakh women)",
    description: "Provides a ready-made organizational infrastructure for grassroots mobilization",
  },
  {
    number: 5,
    bloc: "Widows and single women (~8 lakh+)",
    description: "Economically vulnerable and respond to targeted welfare promises",
  },
];

export const congressMessagingPillars: CongressMessagingPillar[] = [
  {
    pillar: "Women's Economic Empowerment",
    description:
      "Direct income support, skill training, SHG strengthening, FLFPR improvement schemes",
  },
  {
    pillar: "ASHA/Anganwadi Regularization",
    description: "Promise of pay commission, benefits, and worker status",
  },
  {
    pillar: "Anti-Foeticide & Beti Bachao",
    description: "District-level campaigns in worst-affected areas (Tarn Taran, Bathinda, Mansa)",
  },
  {
    pillar: "Widow/Single Women Pension",
    description: "Enhanced pension with automatic enrollment, property rights enforcement",
  },
  {
    pillar: "Women's Safety",
    description: "Fast-track courts, helplines, one-stop centers in all districts",
  },
  {
    pillar: "Girls' Education",
    description: "Focus on Mansa, Muktsar, Sangrur where female literacy is below 63%",
  },
];

// ==========================================
// DATA GAPS & VERIFICATION NEEDS
// ==========================================

export const genderDataGaps: DataGap[] = [
  {
    dataPoint: "Census 2021 results",
    status: "DELAYED/UNAVAILABLE",
    sourceNeeded: "Census of India",
  },
  {
    dataPoint: "District-wise women voter turnout 2022",
    status: "PARTIALLY_AVAILABLE",
    sourceNeeded: "CEO Punjab portal",
  },
  {
    dataPoint: "Current FLFPR (2024-25)",
    status: "VERIFICATION_NEEDED",
    sourceNeeded: "PLFS latest round",
  },
  {
    dataPoint: "Transgender voter registration 2025-26",
    status: "VERIFICATION_NEEDED",
    sourceNeeded: "ECI updated rolls",
  },
  {
    dataPoint: "Constituency-wise gender turnout comparison",
    status: "VERIFICATION_NEEDED",
    sourceNeeded: "CEO Punjab detailed data",
  },
  {
    dataPoint: "Women's property ownership rates",
    status: "VERIFICATION_NEEDED",
    sourceNeeded: "State revenue records",
  },
];

// ==========================================
// SOURCES
// ==========================================

export const genderSourceDocuments: SourceDocument[] = [
  { citation: "Census of India 2011 -- Punjab Population, Sex Ratio, Literacy", source: "Census 2011" },
  { citation: "NFHS-5 (2019-21) -- Punjab State Report", source: "DHS Program/IPS Mumbai" },
  { citation: "CEO Punjab Election Portal -- Voter Turnout Dashboard", source: "elections.punjab.gov.in" },
  { citation: "ECI -- 2022 Punjab Assembly Election data", source: "Wikipedia compilation verified" },
  { citation: "SSA Punjab -- District-wise literacy rates", source: "ssapunjab.org" },
  { citation: "MoSPI -- Women and Men in India 2024 report", source: "MoSPI" },
  { citation: "Mission Shakti/Gender Budget 2025-26 -- SHG data", source: "Punjab government" },
  { citation: "ActionAid India -- Single Women Report", source: "ActionAid India" },
  { citation: "Indian Express -- Transgender voter registration (2019)", source: "Indian Express" },
  { citation: "PLFS/NSSO -- Labour force participation estimates", source: "MoSPI" },
  { citation: "NHRSC India -- Health Dossier 2021: Punjab", source: "NHRSC India" },
  { citation: "StatisticsTimes -- Punjab Population Projections 2026", source: "StatisticsTimes" },
];

// ==========================================
// CONSTANTS & MAPPINGS
// ==========================================

/**
 * Districts with worst child sex ratio (need Beti Bachao focus)
 */
export const WORST_CHILD_SEX_RATIO_DISTRICTS = [
  "Tarn Taran",
  "Bathinda",
  "Mansa",
  "Muktsar",
  "Ferozepur",
] as const;

/**
 * Districts with lowest female literacy (need girls' education focus)
 */
export const LOWEST_FEMALE_LITERACY_DISTRICTS = [
  "Mansa",
  "Muktsar",
  "Sangrur",
  "Ferozepur",
  "Bathinda",
  "Tarn Taran",
] as const;

/**
 * Malwa region districts (69 assembly seats)
 */
export const MALWA_DISTRICTS = [
  "Ludhiana",
  "Bathinda",
  "Fazilka",
  "Firozpur",
  "Muktsar",
  "Mansa",
  "Sangrur",
  "Barnala",
  "Moga",
  "Tarn Taran",
  "Patiala",
  "Fatehgarh Sahib",
  "Sanouri",
  "Malerkotla",
  "Dhuri",
  "Nabha",
  "Khanauri",
  "Nagar",
  " Rampura Phul",
  "Budhlada",
  "Bhatti",
  "Bhawani Garh",
  "Chanarthal",
  "Dhillu",
  "Dhanaula",
  "Dhariwal",
  "Gardhi",
  "Ghark",
  "Gobind Garh",
  "Guru Har Sahai",
  "Harchand",
  "Jagraon",
  "Jai Singh",
  "Kotfath",
  "Mahar",
  "Maloud",
  "Maur",
  "Moga",
  "Mullan",
  "Nakodar",
  "Nurmahal",
  "Pathankot",
  "Patiala",
  "Paunta",
  "Qila",
  "Raikot",
  "Rampura",
  "Sahnewal",
  "Samana",
  "Sangrur",
  "Sardulgarh",
  "Sh. Jay",
  "Sultanpur",
  "Tarn Taran",
  "Ukhai",
  "Zira",
] as const;

/**
 * Women turnout exceeded men constituencies (2022) - Data from CEO Punjab
 */
export const WOMEN_TURNOUT_EXCEEDED_MEN_CONSTITUENCIES: string[] = []; // VERIFICATION_NEEDED from CEO Punjab

/**
 * SC female literacy rate (Census 2011)
 */
export const SC_FEMALE_LITERACY = 58.4; // Census 2011

/**
 * Gender literacy gap reduction
 */
export const LITERACY_GAP_REDUCTION = {
  2001: 11.87, // percentage points
  2011: 9.71, // percentage points
};

// ==========================================
// HELPER FUNCTIONS & UTILITY MAPPINGS
// ==========================================

/**
 * Get districts requiring Beti Bachao campaigns (child sex ratio < 846)
 */
export function getBetiBachaoPriorityDistricts(): string[] {
  return districtChildSexRatio
    .filter(d => d.childSexRatio < 846)
    .map(d => d.district);
}

/**
 * Get districts requiring girls' education focus (female literacy < 65%)
 */
export function getGirlsEducationPriorityDistricts(): string[] {
  return districtFemaleLiteracy
    .filter(d => d.female < 65)
    .map(d => d.district);
}

/**
 * Get women mobilization priority based on vulnerability indicators
 */
export function getWomenMobilizationPriority(): {
  constituencyType: string;
  keyDistricts: string[];
  reason: string;
}[] {
  return [
    {
      constituencyType: "Malwa Rural",
      keyDistricts: malwaLowestFemaleLiteracyDistricts.map(d => d.district),
      reason: "Low female literacy + low child sex ratio + low workforce participation",
    },
    {
      constituencyType: "SC Reserved Seats",
      keyDistricts: ["All 34 SC-reserved constituencies"],
      reason: "SC female literacy at 58.4% - lowest among all groups",
    },
    {
      constituencyType: "Border Districts",
      keyDistricts: ["Gurdaspur", "Pathankot", "Tarn Taran", "Fazilka"],
      reason: "Lower female turnout, potential anti-conversion outreach",
    },
  ];
}

/**
 * NFHS-5 positive indicators for messaging
 */
export const NFHS5_POSITIVE_INDICATORS = [
  "Total Fertility Rate 1.6 (below replacement)",
  "Women bank account ownership ~83%",
  "Women mobile phone ownership ~66%",
  "Spousal violence ~14% (lower than national ~29%)",
] as const;

/**
 * NFHS-5 concerning indicators requiring intervention
 */
export const NFHS5_CONCERNING_INDICATORS = [
  "Anaemia in women ~40%",
  "Rising obesity among women",
  "SRB at 904 still reflects gender-biased sex selection",
] as const;

/**
 * Frontline women worker counts for mobilization calculation
 */
export const FRONTLINE_WORKER_COUNTS = {
  total: 95000,
  asha: 36000,
  anganwadi: 26000,
  shgMembers: 300000,
} as const;

/**
 * Vulnerable women population estimate for welfare targeting
 */
export const VULNERABLE_WOMEN_TOTAL = {
  widows: 420000,
  femaleHeadedHouseholds: "10-12% of total",
  singleWomen: 418000,
  totalVulnerable: "~8 lakh+",
} as const;
