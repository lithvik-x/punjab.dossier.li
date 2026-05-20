// Language & Linguistics Types for Punjab Congress 2027 Election Dashboard
// Derived from: research-M2/MP1-foundational/demographics/language-linguistics.md

// ==========================================
// LANGUAGE DEMOGRAPHICS
// ==========================================

/**
 * Mother tongue distribution from Census 2011
 */
export interface LanguageDemographic {
  language: string;
  speakers: number;
  percentage: number;
}

/**
 * Functional language layers in Punjab
 */
export interface FunctionalLanguageLayer {
  layer: string;
  language: string;
  context: string;
}

/**
 * Script types used in Punjab
 */
export type ScriptType = "gurmukhi" | "roman_punjabi" | "shahmukhi" | "devanagari";

/**
 * Script usage pattern
 */
export interface ScriptUsage {
  script: ScriptType;
  name: string;
  literacy?: number;
  context: string[];
  campaignNotes: string;
}

// ==========================================
// DIALECT TAXONOMY
// ==========================================

/**
 * Punjabi dialect types
 */
export type PunjabiDialect = "majhi" | "malwai" | "doabi" | "puadhi";

/**
 * Dialect information
 */
export interface DialectInfo {
  dialect: PunjabiDialect;
  name: string;
  region: string;
  districts: string[];
  constituencies: string[];
  approximateSeats: number;
  characteristics: string;
  campaignMarkers: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

/**
 * Dialect-region quick reference
 */
export interface DialectRegionReference {
  dialect: PunjabiDialect;
  region: string;
  districts: string[];
  approximateACs: number;
  campaignPriority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// EDUCATION & LITERACY
// ==========================================

/**
 * Education medium landscape
 */
export interface EducationMedium {
  medium: string;
  schools: string;
  reach: string;
}

/**
 * District literacy data
 */
export interface DistrictLiteracy {
  district: string;
  literacyRate: number;
  stateAverage: number;
  deviation: number;
}

// ==========================================
// LANGUAGE POLITICS
// ==========================================

/**
 * Language politics event
 */
export interface LanguagePoliticsEvent {
  date: string;
  title: string;
  description: string;
  source: string;
  congressOpportunity: boolean;
}

/**
 * Strategic language recommendations
 */
export interface LanguageStrategy {
  do: string[];
  doNot: string[];
  specialCases: {
    context: string;
    recommendation: string;
  }[];
}

// ==========================================
// CAMPAIGN LANGUAGE MATRIX
// ==========================================

/**
 * Script selection by channel
 */
export interface ChannelScriptSelection {
  channel: string;
  primaryScript: ScriptType;
  secondaryScript?: ScriptType;
  notes: string;
}

/**
 * Dialect-adapted slogan
 */
export interface DialectSlogan {
  messageTheme: string;
  majhi: string;
  malwai: string;
  doabi: string;
  puadhi: string;
}

// ==========================================
// LANGUAGE LINGUISTICS KPI DATA
// ==========================================

/**
 * Language and linguistics dashboard data
 */
export interface LanguageLinguisticsKPI {
  // Mother tongue data
  motherTongueDistribution: LanguageDemographic[];
  totalPopulation: number;
  dataSource: string;
  dataVintage: string;

  // Functional language landscape
  functionalLayers: FunctionalLanguageLayer[];

  // Script usage
  scriptUsage: ScriptUsage[];
  romanPunjabiShare: number; // estimated
  englishFunctionalLiteracy: number; // estimated 15-25%

  // Dialect data
  dialects: DialectInfo[];
  dialectRegionReference: DialectRegionReference[];

  // Literacy
  overallLiteracy: number;
  districtLiteracy: DistrictLiteracy[];
  lowLiteracyDistricts: string[];
  audioFirstStrategyDistricts: string[];

  // Language politics
  languageEvents: LanguagePoliticsEvent[];
  congressLanguagePosition: LanguageStrategy;

  // Campaign recommendations
  channelScriptMatrix: ChannelScriptSelection[];
  dialectSlogans: DialectSlogan[];
  priorityActions: string[];

  // Data gaps
  dataGaps: DataGap[];
}

/**
 * Data gap entry
 */
export interface DataGap {
  dataPoint: string;
  status: "NOT_AVAILABLE" | "NOT_FOUND" | "ESTIMATED" | "VERIFICATION_NEEDED";
  actionNeeded: string;
}

// ==========================================
// CONSTANTS
// ==========================================

export const PUNJABI_MOTHER_TONGUE = {
  SPEAKERS: 24919067,
  PERCENTAGE: 89.82,
} as const;

export const HINDI_MOTHER_TONGUE = {
  SPEAKERS: 2177853,
  PERCENTAGE: 7.85,
} as const;

export const OTHER_LANGUAGES = {
  SPEAKERS: 646418,
  PERCENTAGE: 2.83,
} as const;

export const LITERACY_RATE = {
  PUNJAB: 83.4,
  HIGHEST: {
    DISTRICT: "Hoshiarpur",
    RATE: 84.6,
  },
  LOWEST: {
    DISTRICT: "Mansa",
    RATE: 61.8,
  },
  SAMPLE_NAGAR: {
    DISTRICT: "SAS Nagar",
    RATE: 83.8,
  },
  JALANDHAR: {
    RATE: 82.5,
  },
} as const;

export const ENGLISH_FUNCTIONAL_LITERACY = {
  ESTIMATE_MIN: 15,
  ESTIMATE_MAX: 25,
} as const;

export const DIALECT_SEATS = {
  MAJHI: 25,
  MALWAI: 69,
  DOABI: 23,
  PUADHI_MIN: 5,
  PUADHI_MAX: 8,
} as const;

export const MAJOR_DIALECTS: DialectRegionReference[] = [
  {
    dialect: "majhi",
    region: "Majha",
    districts: ["Amritsar", "Tarn Taran", "Gurdaspur (partial)", "Pathankot (partial)"],
    approximateACs: 25,
    campaignPriority: "HIGH",
  },
  {
    dialect: "malwai",
    region: "Malwa",
    districts: [
      "Ludhiana", "Moga", "Sangrur", "Barnala", "Faridkot", "Patiala",
      "Fatehgarh Sahib", "Mansa", "Muktsar", "Bathinda", "Ferozepur (partial)",
      "SAS Nagar (partial)", "Malerkotla",
    ],
    approximateACs: 69,
    campaignPriority: "CRITICAL",
  },
  {
    dialect: "doabi",
    region: "Doaba",
    districts: ["Jalandhar", "Nawanshahr (SBS Nagar)", "Kapurthala", "Hoshiarpur"],
    approximateACs: 23,
    campaignPriority: "HIGH",
  },
  {
    dialect: "puadhi",
    region: "Powadh",
    districts: ["Rupnagar", "SAS Nagar (partial)", "Fatehgarh Sahib (partial)", "Patiala (partial)"],
    approximateACs: 8,
    campaignPriority: "MEDIUM",
  },
];

export const LOW_LITERACY_DISTRICTS = [
  "Mansa",
  "Muktsar",
  "Barnala",
  "Bathinda",
  "Sangrur",
] as const;

export const AUDIO_FIRST_STRATEGY_DISTRICTS = [
  "Mansa",
  "Muktsar",
  "Bathinda",
  "Barnala",
  "Sangrur",
] as const;

export const HINDI_CONCENTRATION_AREAS = [
  "Pathankot",
  "Fazilka",
  "Mohali",
] as const;

export const SHAHMUKHI_RELEVANT_AREA = "Malerkotla" as const;
