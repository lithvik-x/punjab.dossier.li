// Population Structure Constants
// Source: research-M2/MP1-foundational/demographics/population-structure.md

export const POPULATION_CONSTANTS = {
  // Census 2011 Data
  CENSUS_2011: {
    TOTAL_POPULATION: 27743338,
    POPULATION_CRORE: "2.77 crore",
    RANKING_AMONG_STATES: 16,
    SHARE_OF_INDIA_POPULATION: 2.3, // percent
    DENSITY_PER_KM2: 551,
    DECADAL_GROWTH_RATE: 13.9, // percent 2001-2011
    PREVIOUS_DECADAL_GROWTH: 20.1, // percent 1991-2001
  },

  // Projections 2026
  PROJECTIONS_2026: {
    POPULATION: 31370000,
    POPULATION_MILLION: "~31.37 million",
    ANNUAL_GROWTH_RATE: 0.58, // percent
    GROWTH_RANK: "10th lowest among Indian states",
  },

  // Religious Composition (Census 2011)
  RELIGIOUS_COMPOSITION: {
    SIKH: 57.69,
    HINDU: 38.49,
    CHRISTIAN: 1.26,
    MUSLIM: 1.93,
    OTHER: 0.6,
  },

  // Sikh Population Trend
  SIKH_TREND: {
    2001: 59.91,
    2011: 57.69,
    PROJECTED_2025: 55, // estimated
    PROJECTED_2030: 50, // some analysts suggest below 50%
  },

  // Dalit (SC) Population
  DALIT_SC: {
    POPULATION_PERCENT: 32,
    RANKING: "one of the highest in India",
  },

  // Sex Ratio
  SEX_RATIO: {
    HISTORICAL: {
      1911: 870,
      1971: 865,
      1991: 882,
      2001: 876,
      2011: 895,
    },
    CENSUS_2011: 895,
    AT_BIRTH_2025: 924,
    NATIONAL_AVERAGE_2025: 928,
  },

  // Age Structure (Census 2011)
  AGE_STRUCTURE: {
    GROUPS: {
      "0_14": { POPULATION: 7084950, PERCENT: 25.53 },
      "15_29": { POPULATION: 8058180, PERCENT: 29.05 },
      "30_44": { POPULATION: 5894079, PERCENT: 21.25 },
      "45_59": { POPULATION: 3798790, PERCENT: 13.69 },
      "60_PLUS": { POPULATION: 1847158, PERCENT: 6.65 },
    },
    WORKING_AGE: {
      POPULATION: 17751049,
      PERCENT: 63.98,
      AGE_RANGE: "15-59",
    },
    DEPENDENCY: {
      YOUNG: 40, // per 100 working-age
      OLD: 10, // per 100 working-age
      TOTAL: 50, // per 100 working-age
    },
  },

  // Fertility Rates (NFHS-5 2019-2021)
  FERTILITY_RATES: {
    NO_SCHOOLING: 2.5,
    LESS_THAN_5_YEARS: 2.5,
    "5_9_YEARS": 2.0,
    "10_11_YEARS": 1.9,
    "12_PLUS_YEARS": 1.5,
  },

  // Urban vs Rural (Census 2011)
  URBAN_RURAL: {
    URBAN_PERCENT: 37.5,
    RURAL_PERCENT: 62.5,
    URBAN_GROWTH: 37.5, // percent 2001-2011
    URBANIZATION_RANK: "After Maharashtra, Gujarat, Tamil Nadu, Kerala",
  },

  // Literacy (Census 2011)
  LITERACY: {
    OVERALL: 76,
    MALE: 81,
    FEMALE: 71,
  },

  // Life Expectancy (SRS 2018-2022)
  LIFE_EXPECTANCY: {
    STATE: 70.8,
    NATIONAL: 69.9,
    URBAN: 73.3,
    RURAL: 69.2,
    GAP: 4.1,
  },

  // Sectoral Employment (PLFS Oct-Dec 2024)
  EMPLOYMENT: {
    AGRICULTURE_ALLIED: 2.78,
    SECONDARY: 38.15,
    TERTIARY: 59.08,
  },

  // Youth Unemployment (PLFS)
  YOUTH_UNEMPLOYMENT: {
    JUL_SEP_2024: 12.2,
    OCT_DEC_2024: 14.9,
    FEMALE: 21.7,
    MALE: 12.8,
  },

  // Labour Force Indicators (Oct-Dec 2024)
  LABOUR_FORCE: {
    LFPR: 43.3,
    LFPR_PREVIOUS: 43.8,
    WPR: 36.9,
    WPR_PREVIOUS: 38.5,
  },

  // US Deportation Connection
  DEPORTATION: {
    TOTAL_DEPORTED: 332,
    PUNJAB_ORIGIN: 126,
    PERCENT: 38,
  },

  // NRI/Diaspora Estimates
  NRI: {
    CANADA: "1.2-1.5 million",
    USA: "500,000-700,000",
    UK: "400,000-600,000",
    AUSTRALIA: "200,000-300,000",
    GULF: "300,000-500,000",
    TOTAL: "~3-4 million",
    DIASPORA_TO_HOME_RATIO: "10-13% - one of the highest for any Indian state",
    STATE_AVERAGE_RURAL_HOUSEHOLDS: 13.34, // percent
  },

  // NRI Households by Region
  NRI_HOUSEHOLDS: {
    DOABA: 24, // percent
    MAJHA: 12, // percent
    MALWA: 5, // percent
  },

  // Electoral Data (2022)
  ELECTORAL: {
    REGISTERED_VOTERS: 21499804,
    VOTER_TURNOUT: 72.15, // percent
    TURNOUT_CHANGE: -5.05, // percentage points from 2017
    PREVIOUS_TURNOUT: 77.2, // 2017
    VOTES_CAST: 15500000,
    TOTAL_SEATS: 117,
    MAJORITY_THRESHOLD: 59,
  },

  // Major Urban Centers
  URBAN_CENTERS: [
    { CITY: "Ludhiana", POPULATION_MILLION: 1.7 },
    { CITY: "Amritsar", POPULATION_MILLION: 1.3 },
    { CITY: "Jalandhar", POPULATION_MILLION: 1.1 },
    { CITY: "Patiala", POPULATION_MILLION: 0.5 },
    { CITY: "Bathinda", POPULATION_MILLION: 0.4 },
    { CITY: "Mohali/SAS Nagar", POPULATION_MILLION: 0.4 },
  ],

  // Regional Seats
  REGIONAL_SEATS: {
    MALWA: 69,
    MAJHA: 25,
    DOABA: 23,
  },

  // District-level highest Dalit concentration
  DALIT_HIGHEST_CONCENTRATION: [
    { DISTRICT: "SBS Nagar", PERCENT: 42.5 },
    { DISTRICT: "Muktsar", PERCENT: 42.3 },
    { DISTRICT: "Fazilka", PERCENT: 42.3 },
    { DISTRICT: "Firozpur", PERCENT: 42.1 },
  ],

  // Emigration reversal indicators
  EMIGRATION_REVERSAL: {
    PASSPORT_DROP: 40, // percent since 2023
    IELTS_COACHING_DROP: 70, // percent
  },

  // Financial cost of emigration (PAU Study 2021-2023)
  EMIGRATION_COST: {
    ASSETS_SOLD_MORTGAGED: 5636, // crore rupees
    BORROWED: 14342, // crore rupees
  },
} as const;

// Color mappings for regions
export const REGION_COLORS = {
  DOABA: "#8B5CF6", // purple
  MAJHA: "#3B82F6", // blue
  MALWA: "#22C55E", // green
} as const;

// Severity colors
export const SEVERITY_COLORS = {
  HIGH: "text-red-600",
  MEDIUM: "text-yellow-600",
  LOW: "text-green-600",
} as const;

// Badge variants mapping
export const INTENSITY_BADGE_VARIANTS = {
  HIGH: "danger",
  MEDIUM: "warning",
  LOW: "info",
} as const;

// Data quality badge variants
export const QUALITY_BADGE_VARIANTS = {
  HIGH: "success",
  MEDIUM: "warning",
  LOW: "danger",
} as const;
