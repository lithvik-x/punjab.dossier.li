// ==========================================
// SC CASTE MAPPING CONSTANTS
// Constants and enums for SC Caste Demographics
// ==========================================

import type { Region } from "@/types/kpi-types";

// ==========================================
// SC SUB-GROUP IDENTIFIERS
// ==========================================

export const SC_SUB_GROUP_IDS = {
  MAZHABI_SIKH: "mazhabi-sikh",
  RAVIDASIA_RAMDASIA: "ravidasia-ramdasia",
  AD_DHARMI: "ad-dharmi",
  VALMIKI_CHUHRA: "valmiki-chuhra",
  OTHER_SC: "other-sc",
} as const;

export type SCSubGroupId =
  (typeof SC_SUB_GROUP_IDS)[keyof typeof SC_SUB_GROUP_IDS];

// ==========================================
// SC REGIONS
// ==========================================

export const SC_REGIONS = {
  MALWA: "Malwa",
  MAJHA: "Majha",
  DOABA: "Doaba",
} as const;

export type SCRegion = (typeof SC_REGIONS)[keyof typeof SC_REGIONS];

// ==========================================
// POLITICAL PARTIES IN SC CONTEXT
// ==========================================

export const SC_POLITICAL_PARTIES = {
  CONGRESS: "Congress",
  AAP: "AAP",
  SAD_BJP: "SAD-BJP",
  BSP: "BSP",
  OTHERS: "Others",
} as const;

// ==========================================
// SUB-CATEGORIZATION STANCE
// ==========================================

export const SUB_CATEGORIZATION_STANCE = {
  SUPPORT: "SUPPORT",
  OPPOSE: "OPPOSE",
  NEUTRAL: "NEUTRAL",
} as const;

export type SubCategorizationStance =
  (typeof SUB_CATEGORIZATION_STANCE)[keyof typeof SUB_CATEGORIZATION_STANCE];

// ==========================================
// DATA QUALITY FLAGS
// ==========================================

export const DATA_QUALITY = {
  VERIFIED: "VERIFIED",
  UNVERIFIED: "VERIFICATION_NEEDED",
  ESTIMATED: "ESTIMATED",
} as const;

export type DataQualityFlag =
  (typeof DATA_QUALITY)[keyof typeof DATA_QUALITY];

// ==========================================
// ELECTION YEARS
// ==========================================

export const ELECTION_YEARS = {
  2012: 2012,
  2017: 2017,
  2022: 2022,
  2024: 2024,
  2027: 2027,
} as const;

// ==========================================
// CONSTITUENCY TYPES
// ==========================================

export const CONSTITUENCY_TYPE = {
  SC_RESERVED: "SC_RESERVED",
  GENERAL: "GENERAL",
  MIXED: "MIXED",
} as const;

export type ConstituencyType =
  (typeof CONSTITUENCY_TYPE)[keyof typeof CONSTITUENCY_TYPE];

// ==========================================
// KEY METRICS THRESHOLDS
// ==========================================

export const SC_VOTE_THRESHOLDS = {
  // Congress target vote share in SC-reserved seats
  MINIMUM_VIABLE: 40,
  COMFORTABLE: 55,
  OPTIMAL: 70,

  // AAP performance decline indicators
  AAP_WEAKENING: 14, // Lok Sabha 2024 leads in SC segments
  CRITICAL_DECLINE: 20, // Congress leads in 20+ seats

  // Turnout thresholds
  LOW_TURNOUT: 70,
  AVERAGE_TURNOUT: 76,
  HIGH_TURNOUT: 80,
} as const;

// ==========================================
// SEAT PROJECTION MATRIX
// ==========================================

export const SC_SEAT_PROJECTIONS = {
  TOTAL_RESERVED: 34,
  CONGRESS_2012: 24,
  CONGRESS_2017: 21,
  CONGRESS_2022: 2,
  CONGRESS_2024_INDICATOR: 14, // Lok Sabha leads
  AAP_2022: 32,
  SAD_BJP_2017: 7,
  BSP_2017: 1,
} as const;

// ==========================================
// POPULATION THRESHOLDS
// ==========================================

export const SC_POPULATION_THRESHOLDS = {
  // Sub-group percentages of total SC population
  MAZHABI_SIKH: 26.33,
  RAVIDASIA_RAMDASIA: 20.76,
  AD_DHARMI: 10.17,
  VALMIKI: 8.6,
  OTHER: 34.14,

  // State-level SC percentage
  PUNJAB_SC_PERCENT: 31.94, // Highest in India

  // Regional SC concentrations
  DOABA_SC_CONCENTRATION: 40,
  MAJHA_SC_CONCENTRATION: 32,
  MALWA_SC_CONCENTRATION: 30,
} as const;

// ==========================================
// RELIGIOUS COMPOSITION
// ==========================================

export const SC_RELIGIOUS_COMPOSITION = {
  SIKH: 60.8,
  HINDU: 38.2,
  CHRISTIAN: 0.8,
} as const;

// ==========================================
// RURAL/URBAN SPLIT
// ==========================================

export const SC_RURAL_URBAN_SPLIT = {
  RURAL: 73.3,
  URBAN: 26.7,
} as const;

// ==========================================
// KEY INSTITUTIONS
// ==========================================

export const SC_KEY_INSTITUTIONS = {
  DERA_SACHKHAND_BALLAN: {
    name: "Dera Sachkhand Ballan",
    location: "Jalandhar",
    followers: "Ravidasia/Ramdasia",
    pilgrimageSize: "20 lakh",
    pilgrimageDestination: "Varanasi",
  },
  DERA_SACHA_SAUDA: {
    name: "Dera Sacha Sauda",
    location: "Sirsa, Haryana",
    followers: "Mazhabi Sikhs (Malwa)",
    note: "2015 pardon controversy damaged SAD",
  },
  DARSHAN_RATNA_RAAVAN: {
    name: "Darshan Ratna Raavan",
    role: "Valmiki religious leader",
    warning: "BJP sending RSS preachers",
  },
} as const;

// ==========================================
// HISTORICAL LEADERS
// ==========================================

export const SC_HISTORICAL_LEADERS = {
  KANSHI_RAM: {
    name: "Kanshi Ram",
    subGroup: "Ramdasia",
    from: "Ropar",
    legacy: "Founded BSP",
  },
  BUTA_SINGH: {
    name: "Buta Singh",
    subGroup: "SC",
    legacy: "Congress stalwart, Union Home Minister",
  },
  GIANI_ZAIL_SINGH: {
    name: "Giani Zail Singh",
    subGroup: "SC ally (not SC himself)",
    legacy: "PM who implemented SC sub-quota as Punjab CM in 1975",
  },
  MANGU_RAM_MUGOWALIA: {
    name: "Mangu Ram Mugowalia",
    subGroup: "Ad-Dharmi",
    legacy: "Founded Ad-Dharm movement (1926)",
  },
} as const;

// ==========================================
// SUB-CATEGORIZATION VERDICT IMPACT
// ==========================================

export const SUB_CATEGORIZATION_IMPACT = {
  FAVORS_CLUSTER: ["Mazhabi Sikh", "Valmiki"],
  OPPOSES_CLUSTER: ["Ravidasia", "Ramdasia", "Ad-Dharmi"],
  BHARAT_BANDH_STRONG_IN: ["Doaba (Ravidasia belt)"],
  BHARAT_BANDH_WEAK_IN: ["Malwa", "Majha (Mazhabi/Valmiki belt)"],
} as const;

// ==========================================
// STRATEGIC CONSTANTS
// ==========================================

export const CONGRESS_SC_STRATEGY = {
  CHANNI_PLUS_MODEL: {
    target: "Ravidasia / Ramdasia",
    components: ["Channi as campaign face", "Ravidasia welfare schemes", "Dera Ballan relationship"],
  },
  MAZHABI_OUTREACH: {
    target: "Mazhabi Sikh (26.33%)",
    components: ["Sub-categorisation promise", "More Mazhabi candidates", "Agri-labour issues"],
  },
  VALMIKI_ENGAGEMENT: {
    target: "Valmiki / Chuhra (8.6%)",
    components: ["Counter BJP RSS", "Sanitation worker welfare", "Elevate Verka"],
  },
  DOABA_FOCUS: {
    target: "Ravidasia-dominant belt",
    context: "15/23 Doaba seats were Congress in 2017, lost all to AAP in 2022",
  },
  CANDIDATE_DIVERSITY: {
    target: "All sub-groups",
    distribution: "~10-12 Mazhabi, ~8-10 Ravidasia/Ramdasia, ~4-6 Valmiki, ~4-6 mixed",
  },
} as const;

// ==========================================
// SEAT TARGET SCENARIOS
// ==========================================

export const SC_SEAT_TARGETS = {
  MINIMUM_VIABLE: {
    seats: 15,
    condition: "AAP anti-incumbency solid",
  },
  COMFORTABLE: {
    seats: 20,
    condition: "Doaba sweep + Malwa gains",
  },
  OPTIMAL: {
    seats: 25,
    condition: "Near-total AAP collapse in SC belt",
  },
} as const;

// ==========================================
// DERA INFLUENCE SCORES
// ==========================================

export const DERA_INFLUENCE_SCORES = {
  DERA_SACHKHAND_BALLAN: {
    impact: "VERY HIGH",
    reach: "Doaba belt (10-12 ACs)",
    followers: "Lakhs",
  },
  RADHA_SOAMI: {
    impact: "HIGH",
    reach: "Cross-caste, NRI-heavy",
  },
  DERA_SACHA_SAUDA: {
    impact: "HIGH",
    reach: "Malwa belt",
  },
  NAMDHARI: {
    impact: "MODERATE",
    reach: "Jat Sikh, Ramgarhia, Mazhabi",
  },
} as const;

// ==========================================
// FAULT LINE DIMENSIONS
// ==========================================

export const SC_FAULT_LINE_DIMENSIONS = [
  "Population",
  "Economic Status",
  "Political Representation",
  "Government Jobs",
  "Religious Identity",
  "Sub-Categorisation",
  "Dera Influence",
] as const;

// ==========================================
// DATA SOURCE REFERENCES
// ==========================================

export const SC_DATA_SOURCES = {
  CENSUS_2011: "Census 2011",
  INDIA_TODAY_2022: "India Today (19 Jan 2022)",
  INDIAN_EXPRESS_2024: "Indian Express (23 Aug 2024)",
  PUNJAB_SC_SUB_PLAN: "Punjab SC Sub Plan 2025-26",
  WIKIPEDIA: "Wikipedia — Scheduled castes in Punjab",
  ECI: "Election Commission of India",
  ADR: "ADR/Punjab Election Watch",
  OUTLOOK_INDIA: "Outlook India (Feb 2022)",
} as const;

// ==========================================
// VERIFICATION STATUS
// ==========================================

export const SC_VERIFICATION_STATUS = {
  VERIFIED: [
    "Total SC Population (2011): 88,86,583",
    "SC Share of State Population: 31.94%",
    "SC-Reserved Assembly Seats: 34 of 117",
    "Party performance 2012, 2017, 2022",
  ],
  VERIFICATION_NEEDED: [
    "Constituency-level sub-group dominance for all 34 seats",
    "Doaba reserved seats turnout 2022",
    "Malwa reserved seats turnout 2022",
    "Majha reserved seats turnout 2022",
    "2024 Lok Sabha SC-reserved segment vote shares",
    "Current Mazhabi Sikh sentiment toward AAP government",
    "Dera Sachkhand Ballan current political orientation",
    "Valmiki community BJP penetration assessment",
    "SC voter turnout by sub-group",
  ],
} as const;
