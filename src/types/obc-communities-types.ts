// OBC/BC Communities Demographics & Political Intelligence Types for Punjab 2027
// Derived from: research-M2/MP1-foundational/demographics/obc-communities.md

import type { Region } from "./kpi-types";

// ==========================================
// CORE OBC TYPES
// ==========================================

export type BCStatusVerification = "VERIFIED" | "PARTIALLY_VERIFIED" | "VERIFICATION_NEEDED";
export type Religion = "Sikh" | "Hindu" | "Muslim" | "Christian";
export type PoliticalDisposition = "Congress-leaning" | "AAP-inroads" | "SAD-aligned" | "Mixed" | "Organised";
export type TraditionalOccupation =
  | "Agriculture"
  | "Carpentry"
  | "Transport/Trading"
  | "Pottery"
  | "Goldsmithing"
  | "Barber/Services"
  | "Oil-pressing"
  | "Laundry"
  | "Blacksmithing"
  | "Water-carrying/Fishing";

/**
 * OBC Reservation Framework in Punjab
 */
export interface OBCReservationFramework {
  category: "SC" | "OBC/BC" | "General";
  reservationPercent: number;
  populationShare: number;
  notes: string;
}

/**
 * Major OBC Community data
 */
export interface OBCCommunity {
  name: string;
  alternateNames?: string[];
  populationEstimate: string;
  populationLakh: string;
  religion: Religion[];
  geography: {
    primary: string[];
    concentration: string;
  };
  traditionalOccupation: TraditionalOccupation;
  economy: string;
  identity: string;
  politicalDisposition: PoliticalDisposition;
  keyLeaders: { name: string; role: string; party?: string; verificationStatus?: BCStatusVerification }[];
  bcStatus: {
    declared: string;
    notification?: string;
    status: string;
  };
  strategicNotes?: string;
  verificationStatus: BCStatusVerification;
}

/**
 * Artisan/Service community data
 */
export interface ArtisanCommunity {
  community: string;
  alternateNames?: string[];
  traditionalOccupation: string;
  populationEstimate: string;
  populationLakh: string;
  geography: string;
  bcStatus: {
    declared: string;
    notification?: string;
  };
}

/**
 * OBC Political Under-Representation data
 */
export interface OBCPoliticalRepresentation {
  institution: string;
  totalPositions: number;
  obcRepresentation: number;
  representationPercent: number;
}

/**
 * Jat Sikh OBC Demand history and status
 */
export interface JatSikhOBCDemand {
  period: string;
  event: string;
  government?: string;
  outcome: string;
}

/**
 * Regional OBC distribution
 */
export interface RegionalOBCDistribution {
  region: Region;
  assemblySeats: number;
  dominantOBCGroups: string[];
  estimatedOBCShare: string;
  keyConstituencies: string[];
}

/**
 * Key data gaps identified
 */
export interface OBCDataGap {
  gap: string;
  status: string;
  actionNeeded: string;
}

/**
 * Strategic recommendation for Congress
 */
export interface OBCStrategyRecommendation {
  priority: number;
  recommendation: string;
  rationale: string;
  targetCommunities?: string[];
  targetSeats?: string;
}

/**
 * OBC Intelligence Report
 */
export interface OBCIntelligenceReport {
  reportDate: string;
  classification: string;
  verificationStatus: BCStatusVerification;

  // Executive Summary
  totalOBCPopulation: string;
  totalOBCVoters: string;
  obcReservationPercent: number;
  ncbcRecommendedReservation: number;
  reservationGap: number;

  // Reservation Framework
  reservationFramework: OBCReservationFramework[];

  // Major Communities
  majorCommunities: OBCCommunity[];
  artisanServiceCommunities: ArtisanCommunity[];
  otherNotableCommunities: { name: string; alternateNames?: string[]; notes: string }[];

  // Political Under-Representation
  politicalRepresentation: OBCPoliticalRepresentation[];

  // Jat Sikh OBC Demand
  jatSikhDemandHistory: JatSikhOBCDemand[];
  jatSikhCurrentStatus: string;
  jatSikhPoliticalImplications: string;

  // Regional Distribution
  regionalDistribution: RegionalOBCDistribution[];

  // Data Gaps
  dataGaps: OBCDataGap[];

  // Strategic Recommendations
  strategicRecommendations: OBCStrategyRecommendation[];

  // Sources
  sources: { number: number; citation: string }[];
}

// ==========================================
// OBC COMMUNITY CONSTANTS
// ==========================================

export const PUNJAB_OBC_RESERVATION = {
  CURRENT: 12,
  NCBC_RECOMMENDED: 25,
  SC_RESERVATION: 25,
  GENERAL: 63,
} as const;

export const OBC_POPULATION = {
  PERCENT: "31-32%",
  ESTIMATED_MILLION: "8.5-9 million",
} as const;

export const OBC_REGIONAL_SEATS = {
  MALWA: 69,
  MAJHA: 25,
  DOABA: 23,
  TOTAL: 117,
} as const;

export const OBC_TICKET_TARGET = {
  MINIMUM: 20,
  TARGET: 25,
  SEATS_FROM_117: "25-30",
} as const;

export const VERIFICATION_STATUS = {
  VERIFIED: "VERIFIED" as const,
  PARTIALLY_VERIFIED: "PARTIALLY_VERIFIED" as const,
  VERIFICATION_NEEDED: "VERIFICATION_NEEDED" as const,
} as const;
