// Jat Sikh Demographics & Clan Structure Types for Punjab 2027
// Derived from: research-M2/MP1-foundational/demographics/jat-sikh-clans.md

import type { Region } from "./kpi-types";

// ==========================================
// CORE JAT SIKH TYPES
// ==========================================

export type JatSikhConcentration = "Very High" | "High" | "Moderate" | "Lower";
export type LandholdingCategory = "Large farmers" | "Medium farmers" | "Small farmers" | "Marginal farmers";
export type PartyAlignment = "Congress" | "SAD" | "AAP" | "BJP" | "SAD-BJP" | "Independent";
export type VerificationStatus = "VERIFIED" | "PARTIALLY_VERIFIED" | "VERIFICATION_NEEDED";

/**
 * Overall Jat Sikh Population Estimates
 */
export interface JatSikhPopulationEstimate {
  punjabTotalPopulation: string;
  sikhShareOfPunjab: string;
  jatSikhShareOfTotal: string;
  jatSikhShareOfSikh: string;
  jatSikhShareOfRural: string;
  estimatedPopulation: string;
  estimatedVotersAndDependents: string;
  verificationStatus: VerificationStatus;
}

/**
 * Regional distribution of Jat Sikhs
 */
export interface RegionalJatDistribution {
  region: Region;
  assemblySeats: number;
  jatSikhConcentration: string;
  concentrationPercent: string;
  character: string;
}

/**
 * District-level Jat Sikh concentration
 */
export interface DistrictConcentration {
  district: string;
  concentration: JatSikhConcentration;
  districts: string[];
}

/**
 * Major Jat Sikh Clan (Gotra) data
 */
export interface JatSikhClan {
  name: string;
  estimatedRank: string;
  primaryRegion: string;
  primaryDistricts: string[];
  notablePoliticians: string[];
  notes: string;
  isAsalJat?: boolean; // Traditional "genuine Jats" clans
}

/**
 * Clan political dynamics pattern
 */
export interface ClanPoliticalPattern {
  pattern: string;
  description: string;
}

/**
 * Landholding stratification of Jat Sikh farmers
 */
export interface LandholdingStratum {
  category: LandholdingCategory;
  landholdingSize: string;
  shareOfJatSikhFarmers: string;
  trend: "DECLINING" | "STABLE" | "GROWING" | "GROWING_RAPIDLY";
}

/**
 * Regional landholding variation
 */
export interface RegionalLandholding {
  region: Region;
  farmersWithMoreThan10Acres: string;
  characteristics: string;
}

/**
 * Agricultural debt crisis indicators
 */
export interface AgriculturalDebtIndicator {
  indicator: string;
  figure: string;
  source: string;
}

/**
 * Economic stress drivers for Jat Sikh farmers
 */
export interface EconomicStressDriver {
  factor: string;
  description: string;
}

/**
 * OBC reservation demand status
 */
export interface OBCDemandStatus {
  currentClassification: string;
  demandDrivers: string[];
  politicalImplications: string;
  keyPoliticalPositions: string[];
}

/**
 * Historical party alignment periods
 */
export interface PartyAlignmentPeriod {
  period: string;
  primaryAlignment: string;
  secondary: string;
}

/**
 * Current Jat Sikh sentiment indicators
 */
export interface JatSikhSentimentIndicator {
  party: string;
  sentiment: string;
  trend: "rising" | "stable" | "declining";
}

/**
 * Strategic constituency clusters for outreach
 */
export interface ConstituencyCluster {
  priority: "Priority 1" | "Priority 2" | "Priority 3";
  description: string;
  seatGroups: string[];
  totalSeats: string;
}

/**
 * Key strategic recommendations for Congress
 */
export interface CongressStrategyPoint {
  point: string;
  recommendation: string;
}

/**
 * Source citation
 */
export interface JatSikhSource {
  number: number;
  citation: string;
}

/**
 * Data gap requiring verification
 */
export interface JatSikhDataGap {
  dataPoint: string;
  status: string;
  actionNeeded: string;
}

/**
 * Complete Jat Sikh demographic intelligence report
 */
export interface JatSikhIntelligenceReport {
  reportDate: string;
  classification: string;
  verificationStatus: VerificationStatus;
  population: JatSikhPopulationEstimate;
  regionalDistribution: RegionalJatDistribution[];
  districtConcentrations: DistrictConcentration[];
  clans: JatSikhClan[];
  clanPoliticalPatterns: ClanPoliticalPattern[];
  landholdingStratification: LandholdingStratum[];
  regionalLandholding: RegionalLandholding[];
  agriculturalDebt: AgriculturalDebtIndicator[];
  economicStressDrivers: EconomicStressDriver[];
  obcDemandStatus: OBCDemandStatus;
  partyAlignmentHistory: PartyAlignmentPeriod[];
  currentSentiment: JatSikhSentimentIndicator[];
  constituencyClusters: ConstituencyCluster[];
  congressStrategyPoints: CongressStrategyPoint[];
  sources: JatSikhSource[];
  dataGaps: JatSikhDataGap[];
}

// ==========================================
// JAT SIKH CLAN CONSTANTS
// ==========================================

export const JAT_SIKH_CLAN_RANKS = {
  LARGEST: "Largest clan",
  SECOND_LARGEST: "2nd largest",
  VERY_LARGE: "Very large",
  LARGE: "Large",
  MEDIUM_LARGE: "Medium-Large",
  MEDIUM: "Medium",
} as const;

export const ASAL_JAT_CLANS = ["Mann", "Chahal", "Bhullar"] as const;

export const CLAN_IDIOM = {
  saying: "Sandhu, Sidhu, ik baraabar, Gills tore uchera",
  meaning: "Sandhus and Sidhus are equal but Gills are a bit superior",
} as const;

export const JAT_SIKH_REGIONAL_SEATS = {
  MALWA: 69,
  MAJHA: 25,
  DOABA: 23,
  TOTAL: 117,
} as const;

// ==========================================
// VERIFICATION STATUS CONSTANTS
// ==========================================

export const VERIFICATION_STATUS = {
  VERIFIED: "VERIFIED" as const,
  PARTIALLY_VERIFIED: "PARTIALLY_VERIFIED" as const,
  VERIFICATION_NEEDED: "VERIFICATION_NEEDED" as const,
} as const;
