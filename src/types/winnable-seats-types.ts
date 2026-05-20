// Winnable Seats Intelligence Types
// Derived from: mega-pillar M1/00-TOP-20-WINNABLE-SEATS.md
// Research Date: May 2026 | Status: COMPLETE

import type { Region } from "./kpi-types";

// ==========================================
// METADATA
// ==========================================

export interface WinnableSeatsMetadata {
  documentVersion: string;
  researchDate: string;
  electionContext: string;
  classification: string;
  confidenceLevel: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// 2022 ELECTION RESULTS
// ==========================================

export interface PartyResult2022 {
  party: string;
  seatsWon: number;
  voteShare: number;
  changeFrom2017: number;
}

export interface ElectionResultArchitecture {
  year: number;
  results: PartyResult2022[];
  source: string;
}

export interface MarginAnalysis {
  metric: string;
  value: string | number;
  source?: string;
}

// ==========================================
// REGIONAL TAXONOMY
// ==========================================

export interface RegionalTaxonomy {
  region: Region;
  seats: number;
  keyDemographics: string;
  "2022Pattern": string;
}

// ==========================================
// PRIORITY TIERS
// ==========================================

export type SeatPriority = "P0" | "P1" | "P2";

export interface WinnableSeat {
  // Basic Identification
  seatNumber: number;
  name: string;
  region: Region;
  district: string;
  type: "General" | "SC Reserved" | "ST Reserved";

  // 2022 Results
  "2022Winner": string;
  "2022WinnerParty": string;
  "2022Margin": number;
  "2022MarginDisplay": string;
  "2022RunnerUp": string;
  "2022RunnerUpParty": string;

  // 2017 Results
  "2017Result": string;
  "2017Winner"?: string;
  "2017Swing"?: string;

  // Analysis
  primaryIssues: string[];
  aapVulnerability: string;
  congressPriority: string;
  priority: SeatPriority;

  // Voter Composition
  voterComposition: string[];
  keyDemographics: string[];

  // Strategy
  recommendedNarrative: string;
  candidateProfile: string;

  // Confidence
  confidence: string;
  confidenceClass: "CLASS A" | "CLASS B" | "CLASS C";
  sources?: string[];
}

export interface PriorityTier {
  tier: SeatPriority;
  description: string;
  strategy: string;
  seats: WinnableSeat[];
}

// ==========================================
// DEMOGRAPHIC INSIGHTS
// ==========================================

export interface DemographicInsight {
  demographic: string;
  percentOfPunjabPop: string;
  keyRegions: string[];
  prioritySeats: string[];
}

export interface CongressCoreSeat {
  seatName: string;
  incumbent: string;
  priority: SeatPriority;
}

// ==========================================
// NARRATIVE FRAMEWORKS
// ==========================================

export interface NarrativeFramework {
  title: string;
  subtitle: string;
  description: string;
  applyTo: string[];
  keyPoints: string[];
}

// ==========================================
// CANDIDATE SELECTION GUIDELINES
// ==========================================

export interface CandidateGuidelines {
  seatType: "SC Reserved" | "General (Doaba)" | "General (Malwa/Majha)";
  preferred: string;
  alternative: string;
  avoid: string;
}

// ==========================================
// GROUND INTELLIGENCE REQUIREMENTS
// ==========================================

export interface IntelligenceRequirement {
  category: string;
  items: string[];
}

export interface KeyQuestion {
  question: string;
  purpose: string;
}

// ==========================================
// SOURCE CLASSIFICATION
// ==========================================

export interface SourceClassification {
  class: "CLASS A" | "CLASS B" | "CLASS C";
  definition: string;
  application: string;
}

export interface SourceReference {
  type: "Primary" | "Secondary" | "Tertiary";
  class: "CLASS A" | "CLASS B" | "CLASS C";
  sources: string[];
}

// ==========================================
// COMPLETE WINNABLE SEATS DATA
// ==========================================

export interface WinnableSeatsReport {
  metadata: WinnableSeatsMetadata;
  electionResults2022: ElectionResultArchitecture;
  marginAnalysis: MarginAnalysis[];
  regionalTaxonomy: RegionalTaxonomy[];
  winnableSeats: WinnableSeat[];
  priorityTiers: PriorityTier[];
  doabaAnalysis: {
    totalSeatsInPriorityList: number;
    doabaSeats: number;
    majhaSeats: number;
    malwaSeats: number;
    strategicImplication: string;
  };
  demographicInsights: DemographicInsight[];
  congressCoreSeats: CongressCoreSeat[];
  narrativeFrameworks: NarrativeFramework[];
  candidateGuidelines: CandidateGuidelines[];
  groundIntelligenceRequirements: IntelligenceRequirement[];
  keyQuestions: KeyQuestion[];
  sourceReferences: SourceReference[];
  confidenceClassification: SourceClassification[];
  filesRequired: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const SEAT_PRIORITY_LABELS: Record<SeatPriority, string> = {
  P0: "Immediate Priority",
  P1: "High Priority",
  P2: "Secondary Priority",
};

export const SEAT_PRIORITY_COLORS: Record<SeatPriority, string> = {
  P0: "text-red-600 bg-red-50",
  P1: "text-orange-600 bg-orange-50",
  P2: "text-yellow-600 bg-yellow-50",
};

export const REGIONAL_SEAT_COUNTS = {
  Malwa: 69,
  Majha: 25,
  Doaba: 23,
} as const;

export const MARGIN_THRESHOLDS = {
  P0_MAX: 8000, // AAP won by <8,000 votes
  P1_MAX: 15000, // AAP won by 8,000-15,000 votes
  P2_MAX: 25000, // AAP won by 15,000-25,000 votes
} as const;

export const AAP_MARGIN_STATS = {
  highestMargin: {
    winner: "Aman Arora",
    seat: "Sunam",
    margin: "49%",
  },
  seatsWith20000to75000Margin: 57,
  congressSeatsUnder10000Margin2017: 19,
} as const;
