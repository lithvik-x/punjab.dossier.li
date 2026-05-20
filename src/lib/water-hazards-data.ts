// Water Resources & Natural Hazards Data for Punjab
// Derived from: research-M2/MP1-foundational/geography/water-hazards.md

import type {
  WaterHazardsIntelligence,
  GroundwaterExtraction,
  BlockCategory,
  SafeDistrict,
  WaterTableDecline,
  FreeElectricityNexus,
  UraniumContamination,
  ContaminantData,
  ContaminationSummary,
  CanalSystem,
  CanalReliningProject,
  CanalIrrigationData,
  River,
  Reservoir,
  Wetland,
  SurfaceWaterData,
  FloodData,
  SeismicHazard,
  HeatwaveData,
  DroughtProneArea,
  ElectoralImplication,
} from "@/types/water-hazards-types";

// ==========================================
// GROUNDWATER CRISIS DATA
// ==========================================

export const GROUNDWATER_EXTRACTION: GroundwaterExtraction = {
  extractionRate: 156.36,
  annualWithdrawal: 26.27, // BCM
  replenishableResource: 16.8, // BCM
  classification: "overexploited",
};

export const BLOCK_CATEGORIES: BlockCategory[] = [
  { category: "Overexploited", threshold: ">100%", blocks: 111, percentage: 72.55 },
  { category: "Critical", threshold: "90-100%", blocks: 10, percentage: 6.54 },
  { category: "Semi-Critical", threshold: "70-90%", blocks: 15, percentage: 9.8 },
  { category: "Safe", threshold: "<70%", blocks: 17, percentage: 11.11 },
];

export const NATIONAL_COMPARISON = {
  overexploitedNationalAverage: 10.8, // percentage of 6,762 assessment units
  punjabMultiple: 7, // 7x the national average
};

export const TEN_HUNDRED_PERCENT_EXPLOITED = 10; // districts

export const SAFE_DISTRICTS: SafeDistrict[] = [
  { name: "Muktsar", safePercentage: 100, blocks: 4, reason: "Southernmost, canal-fed" },
  { name: "Pathankot", safePercentage: 66.67, blocks: 4, reason: "Kandi foothills - 2 blocks semi-critical" },
  { name: "Fazilka", safePercentage: 60, blocks: 3, reason: "Rajasthan Feeder canal command area - 2 blocks semi-critical" },
];

export const WATER_TABLE_DECLINE: WaterTableDecline = {
  statewideRate: 0.43, // metres/year (ISADP study)
  localPeakDecline: 46, // cm/year in worst-affected blocks
  areaWithDeclineOver15m: 31, // percentage
  worstAffectedDistricts: ["Barnala", "Bathinda", "Hoshiarpur", "Jalandhar"],
  districtsDeeperThan40m: { count: 3, year: 2014 },
  // Note: 11 in 2024 - this is a change that should be tracked
  ngtProjectionYear: 2039,
  ngtProjectionDepth: 300, // metres
};

export const FREE_ELECTRICITY_NEXUS: FreeElectricityNexus = {
  policyYear: 1997,
  tubewellSurpassedCanalYear: 1972,
  currentTubewellPercentage: 92,
  agriculturalPumpSets: 1450000,
  groundwaterForIrrigation: 24.89, // BCM
  groundwaterForIrrigationPercentage: 94.74,
  paddyWaterRequirement: "4,000-5,000 litres per kg of rice",
  centralPunjabPaddyAreaPercentage: 75,
  cottonArea2012: 600000, // hectares
  cottonArea2024: 100000, // hectares
};

// ==========================================
// GROUNDWATER CONTAMINATION DATA
// ==========================================

export const URANIUM_CONTAMINATION: UraniumContamination = {
  exceedanceRate: 62.5, // percentage of samples exceeding WHO/BIS limit
  preMonsoonExceedance: 53.04,
  postMonsoonExceedance: 62.5,
  whoBisSafetyLimit: 30, // ppb
  districtsAboveSafeLimits: 20, // out of 23 districts
  samplesExceeding100ppb: 30, // percentage
  healthImpacts: ["Kidney toxicity", "Urinary tract cancer", "Organ damage"],
};

export const CONTAMINANT_DATA: ContaminantData[] = [
  {
    name: "Nitrate",
    safetyLimit: ">45 mg/L",
    districtsAffected: 20,
    exceedanceRate: 14.6, // percentage of samples
    healthImpact: "Blue baby syndrome, unfit for drinking",
  },
  {
    name: "Fluoride",
    safetyLimit: ">1.5 mg/L",
    districtsAffected: 17,
    exceedanceRate: 11.24,
    healthImpact: "Dental/skeletal fluorosis",
  },
  {
    name: "Arsenic",
    safetyLimit: ">10 ppb",
    districtsAffected: 12,
    exceedanceRate: 9.5,
    healthImpact: "Skin/internal cancers, cardiovascular disease",
  },
  {
    name: "Salinity (EC)",
    safetyLimit: "Above BIS limit",
    districtsAffected: 9,
    exceedanceRate: 7.01,
    healthImpact: "Agricultural productivity decline",
  },
  {
    name: "Iron",
    safetyLimit: "VERIFICATION_NEEDED",
    districtsAffected: 18,
    exceedanceRate: 0, // VERIFICATION_NEEDED
    healthImpact: "—",
  },
];

export const CONTAMINATION_SUMMARY: ContaminationSummary = {
  contaminants: CONTAMINANT_DATA,
  worstDistrict: {
    name: "Bathinda",
    nitrateFailRate: 46, // percentage of samples fail nitrate test
    note: "One of India's 15 worst-affected districts",
  },
};

// ==========================================
// CANAL IRRIGATION DATA
// ==========================================

export const MAJOR_CANALS: CanalSystem[] = [
  {
    name: "Sirhind Canal",
    source: "Harike Headworks (Sutlej-Beas confluence)",
    commandArea: "Central Punjab",
    keyDistricts: ["Ludhiana", "Barnala", "Sangrur", "Fatehgarh Sahib", "Patiala"],
  },
  {
    name: "Rajasthan Feeder",
    source: "Harike Headworks",
    commandArea: "South-West Punjab + Rajasthan",
    keyDistricts: ["Fazilka", "Muktsar", "Bathinda"],
  },
  {
    name: "Sirhind Feeder",
    source: "Harike Headworks",
    commandArea: "South-West Punjab",
    keyDistricts: ["Faridkot", "Muktsar", "Ferozepur"],
  },
  {
    name: "Upper Bari Doab Canal",
    source: "Madhopur Headworks (Ravi)",
    commandArea: "Majha region",
    keyDistricts: ["Gurdaspur", "Amritsar", "Tarn Taran"],
  },
  {
    name: "Bist Doab Canal",
    source: "Mukerian (Beas)",
    commandArea: "Doaba region",
    keyDistricts: ["Hoshiarpur", "Jalandhar", "Kapurthala"],
  },
  {
    name: "Kandi Canal",
    source: "Chohes/seasonal streams",
    commandArea: "Kandi belt",
    keyDistricts: ["Hoshiarpur", "Rupnagar", "Pathankot"],
  },
];

export const CANAL_RELINING_PROJECTS: CanalReliningProject[] = [
  { canal: "Sirhind Feeder", cost: 671, approvalYear: 2018, status: "VERIFICATION_NEEDED" },
  { canal: "Rajasthan Feeder", cost: 1305, approvalYear: 2018, status: "VERIFICATION_NEEDED" },
];

export const CANAL_IRRIGATION_DATA: CanalIrrigationData = {
  majorCanals: MAJOR_CANALS,
  tubewellPercentage: 92,
  canalPercentage: 8,
  rajasthanFeederFlow: 18000, // cusecs
  headReachTailEndIssue: {
    headReach: "Reliable water supply, less maintenance, often over-irrigate",
    tailEnd: "Unreliable supply, maximum maintenance burden, often forced to rely on tubewells",
    worstDistricts: ["Fazilka", "Muktsar", "Bathinda"],
  },
  reliningProjects: CANAL_RELINING_PROJECTS,
};

// ==========================================
// SURFACE WATER DATA
// ==========================================

export const MAJOR_RIVERS: River[] = [
  {
    name: "Sutlej",
    origin: "Tibet (via Himachal)",
    flowThrough: "Largest river in Punjab",
    keyDistricts: ["Rupnagar", "Ludhiana", "Jalandhar", "Kapurthala", "Ferozepur"],
  },
  {
    name: "Beas",
    origin: "Himachal Pradesh",
    flowThrough: "Joins Sutlej at Harike",
    keyDistricts: ["Hoshiarpur", "Kapurthala", "Amritsar", "Tarn Taran"],
  },
  {
    name: "Ravi",
    origin: "Himachal Pradesh",
    flowThrough: "Northern border river",
    keyDistricts: ["Pathankot", "Gurdaspur", "Amritsar"],
  },
  {
    name: "Ghaggar",
    origin: "Shivalik Hills (seasonal)",
    flowThrough: "Southern boundary",
    keyDistricts: ["Patiala", "Mohali", "Mansa", "Sangrur"],
  },
  {
    name: "Patiala Ki Rao",
    origin: "Shivalik",
    flowThrough: "Minor",
    keyDistricts: ["Mohali", "Patiala"],
  },
];

export const MAJOR_RESERVOIRS: Reservoir[] = [
  {
    name: "Bhakra",
    river: "Sutlej",
    state: "Himachal Pradesh",
    relevance: "Irrigation + flood control for entire state",
  },
  {
    name: "Pong (Maharana Pratap Sagar)",
    river: "Beas",
    state: "Himachal Pradesh",
    relevance: "Majha + Doaba irrigation",
  },
  {
    name: "Ranjit Sagar (Thein Dam)",
    river: "Ravi",
    state: "Punjab/HP border",
    relevance: "Gurdaspur, Pathankot irrigation",
  },
];

export const WETLANDS: Wetland[] = [
  {
    name: "Harike",
    type: "International RAMSAR site",
    stressFactors: ["Agricultural runoff", "Industrial pollution"],
  },
  {
    name: "Kanjli",
    type: "Wetland",
    stressFactors: ["Agricultural runoff", "Industrial pollution"],
  },
  {
    name: "Ropar",
    type: "Wetland",
    stressFactors: ["Agricultural runoff", "Industrial pollution"],
  },
];

export const SURFACE_WATER_DATA: SurfaceWaterData = {
  majorRivers: MAJOR_RIVERS,
  majorReservoirs: MAJOR_RESERVOIRS,
  wetlands: WETLANDS,
  villagePonds: "Thousands of village ponds (choes), many encroached or polluted",
};

// ==========================================
// NATURAL HAZARDS DATA
// ==========================================

export const FLOOD_DATA: FloodData = {
  event: "September 2025 Floods",
  date: "August-September 2025",
  impact: {
    livesLost: 55,
    peopleAffected: 2000000, // 20 lakh
    villagesAffected: 2050, // 2,050+
    agriculturalLandSubmerged: 148000, // hectares
    districtsDeclared: 23,
    majorCitiesAffected: ["Mohali", "Ludhiana", "Jalandhar", "Amritsar", "Chandigarh"],
    worstHitDistricts: [
      "Gurdaspur",
      "Amritsar",
      "Ferozepur",
      "Fazilka",
      "Pathankot",
      "Hoshiarpur",
      "Kapurthala",
      "Tarn Taran",
      "Jalandhar",
      "Rupnagar",
    ],
  },
  causes: {
    factors: [
      "24% surplus monsoon rainfall (443 mm vs 357 mm average)",
      "Cloudburst-induced runoff from Himachal Pradesh",
      "Weak Dhussi Bandhs - insufficient pre-monsoon maintenance",
      "50,000 people living on Bela belt (Sutlej floodplain)",
      "450 villages on Beas/Ravi floodplains in Gurdaspur - illegal encroachment",
      "Siltation reducing dam/river carrying capacity",
      "Blocked canals and drains in south-western districts",
      "Construction obstructing natural drainage (choes) causing urban flash floods",
    ],
    historicalPattern: [
      "September 1988",
      "July 1993",
      "August 2013",
      "August-September 2025",
    ],
  },
  historicalRecurrence: "Increasing frequency - major floods every 10-15 years",
};

export const SEISMIC_HAZARD: SeismicHazard = {
  zones: [
    {
      zone: "Zone IV",
      riskLevel: "High damage risk",
      districts: [
        "Amritsar",
        "Tarn Taran",
        "Kapurthala",
        "Gurdaspur",
        "Pathankot",
        "Jalandhar",
        "Hoshiarpur",
        "Ludhiana",
        "Rupnagar",
        "Fatehgarh Sahib",
      ],
      mskIntensity: "VIII",
    },
    {
      zone: "Zone III",
      riskLevel: "Moderate damage risk",
      districts: [
        "Bathinda",
        "Mansa",
        "Sangrur",
        "Barnala",
        "Patiala",
        "Mohali",
        "Faridkot",
        "Muktsar",
        "Fazilka",
        "Moga",
        "Firozpur",
        "Nawanshahr",
        "Dera Bassi",
      ],
    },
  ],
  vulnerableReason:
    "Sub-Himalayan belt and along Main Boundary Thrust - proximity to Kangra/Dharamshala seismic gap",
};

export const HEATWAVE_DATA: HeatwaveData = {
  preMonsoonTemperature: "Regularly exceeds 45 degrees C in southern Punjab",
  worstAffectedDistricts: ["Bathinda", "Mansa", "Muktsar"],
  agriculturalImpacts: [
    "Heat stress during wheat grain-filling (March-April) reduces yields",
    "Heat during paddy transplanting (June) increases water demand",
  ],
  vulnerableBelt: "Kandi belt (foothills) - vulnerable to heat + drought combination",
};

export const DROUGHT_PRONE_AREAS: DroughtProneArea[] = [
  {
    belt: "Kandi Belt",
    districts: ["Hoshiarpur", "Pathankot", "Rupnagar", "Nawanshahr"],
    rainfallPattern: "Rainfed agriculture, vulnerable to monsoon failure",
    groundwaterDependence: "High",
  },
  {
    belt: "South-Western Districts",
    districts: ["Bathinda", "Mansa", "Muktsar", "Fazilka"],
    rainfallPattern: "~300-400 mm annually",
    groundwaterDependence: "Entirely groundwater-dependent despite canal network",
  },
];

// ==========================================
// ELECTORAL IMPLICATIONS
// ==========================================

export const ELECTORAL_IMPLICATIONS: ElectoralImplication[] = [
  {
    issue: "Groundwater depletion",
    electoralAngle: "80%+ blocks overexploited; farmers see borewells drying",
    congressOpportunity:
      "Position Congress as the 'water-saving' party; propose crop diversification tied to guaranteed MSP for less-water crops",
  },
  {
    issue: "Free electricity",
    electoralAngle: "Every party promises it; it destroys groundwater",
    congressOpportunity:
      "Frame it honestly: 'free electricity = empty aquifers.' Propose conditional free power (only for non-paddy crops)",
  },
  {
    issue: "Contamination",
    electoralAngle: "62.5% uranium exceedance; 20 districts with toxic water",
    congressOpportunity:
      "Public health crisis — demand water purification infrastructure, especially in Bathinda, Faridkot, Muktsar",
  },
  {
    issue: "Head-reach vs tail-end",
    electoralAngle: "Tail-end farmers in Fazilka, Muktsar, Bathinda feel cheated",
    congressOpportunity:
      "Promise canal modernisation, piped irrigation for tail-end, water user association empowerment",
  },
  {
    issue: "2025 floods",
    electoralAngle: "55 deaths, 20 lakh affected — AAP was in power",
    congressOpportunity:
      "Hammer AAP on flood preparedness failure; propose Dhussi Bandh modernisation, floodplain zoning enforcement",
  },
  {
    issue: "Cotton collapse",
    electoralAngle: "Area fell from 6 lakh ha to 1 lakh ha; pushed farmers to water-intensive paddy",
    congressOpportunity:
      "Propose cotton revival programme (Bt cotton + pest management + MSP guarantee) to reduce paddy/water demand",
  },
];

// ==========================================
// COMPLETE WATER HAZARDS INTELLIGENCE REPORT
// ==========================================

export const WATER_HAZARDS_INTELLIGENCE: WaterHazardsIntelligence = {
  reportDate: "19 May 2026",
  source: "CGWB, CSE, ISADP, ResearchGate, ICID, Wiley Water Policy, IIFT, BMTPC, Down to Earth",
  status: "RESEARCH COMPLETE",
  classification: "STRATEGIC - Affects multiple constituencies and voter priorities",
  groundwater: {
    extraction: GROUNDWATER_EXTRACTION,
    blockCategories: BLOCK_CATEGORIES,
    nationalComparison: NATIONAL_COMPARISON,
    tenHundredPercentExploited: TEN_HUNDRED_PERCENT_EXPLOITED,
    safeDistricts: SAFE_DISTRICTS,
    waterTable: WATER_TABLE_DECLINE,
    freeElectricityNexus: FREE_ELECTRICITY_NEXUS,
  },
  contamination: {
    uranium: URANIUM_CONTAMINATION,
    summary: CONTAMINATION_SUMMARY,
  },
  canalIrrigation: CANAL_IRRIGATION_DATA,
  surfaceWater: SURFACE_WATER_DATA,
  naturalHazards: {
    floods: FLOOD_DATA,
    seismic: SEISMIC_HAZARD,
    heatwaves: HEATWAVE_DATA,
    droughtProne: DROUGHT_PRONE_AREAS,
  },
  electoralImplications: ELECTORAL_IMPLICATIONS,
  sources: [
    "CGWB Dynamic Ground Water Resources of India 2025",
    "CSE/Down to Earth State of India's Environment 2025",
    "CGWB Annual Ground Water Quality Report 2025",
    "CGWB Annual Ground Water Quality Report 2024",
    "Down to Earth - 2025 Punjab Floods analysis by Prof. Sucha Singh, Panjab University",
    "ISADP - Scenario of Groundwater Exploitation in Punjab: Recent Trends",
    "ResearchGate - Spatio-temporal assessment of groundwater depletion in Punjab",
    "ICID webinar - Accelerating Pipelining of Last Mile Canal Irrigation in Punjab",
    "Wiley Water Policy - Governing the Ungovernable",
    "IIFT Working Paper 87 - Possibilities for Paddy Crop in Punjab",
    "BMTPC / ASC India - Seismic Zone IV classification for Punjab districts",
    "BBC / ReliefWeb / India Water Portal - September 2025 flood coverage",
    "Mongabay India - NGT committee projection: 300m depth by 2039",
  ],
};

// ==========================================
// DERIVED KPIs FOR DASHBOARD
// ==========================================

export const WATER_HAZARDS_METADATA = {
  pillar: "MP1 — Foundational Scan (Geography)",
  task: "Water Resources, Irrigation, Groundwater Crisis, Natural Hazards",
  date: "19 May 2026",
  status: "RESEARCH COMPLETE",
  quality: "Sources cited; uncertain data marked VERIFICATION_NEEDED",
};

export const GROUNDWATER_STATS = {
  extractionRate: `${GROUNDWATER_EXTRACTION.extractionRate}%`,
  annualWithdrawal: `${GROUNDWATER_EXTRACTION.annualWithdrawal} BCM`,
  replenishable: `${GROUNDWATER_EXTRACTION.replenishableResource} BCM`,
  overexploitedBlocks: `${BLOCK_CATEGORIES[0].blocks} of 153`,
  overexploitedPercentage: `${BLOCK_CATEGORIES[0].percentage}%`,
  uraniumExceedance: `${URANIUM_CONTAMINATION.exceedanceRate}%`,
  tailEndDistricts: CANAL_IRRIGATION_DATA.headReachTailEndIssue.worstDistricts.join(", "),
};

export const FLOOD_STATS = {
  livesLost: FLOOD_DATA.impact.livesLost,
  peopleAffected: `${FLOOD_DATA.impact.peopleAffected / 100000} lakh`,
  villagesAffected: FLOOD_DATA.impact.villagesAffected,
  agriculturalLand: `${FLOOD_DATA.impact.agriculturalLandSubmerged / 1000}K hectares`,
  districtsHit: FLOOD_DATA.impact.districtsDeclared,
};
