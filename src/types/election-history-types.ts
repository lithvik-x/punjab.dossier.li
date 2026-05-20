// Election History Types for Punjab
// Derived from: mega-pillar M1/01-POLITICAL-HISTORY.md
// Research Date: May 2026 | Status: COMPLETE

import type { Region } from "./kpi-types";

// ==========================================
// METADATA
// ==========================================

export interface ElectionHistoryMetadata {
  documentVersion: string;
  researchDate: string;
  accessDate: string;
  confidenceLevel: string;
  preparedFor: string;
  client: string;
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

// ==========================================
// ASSEMBLY ELECTION HISTORY
// ==========================================

export interface AssemblyElectionResult {
  year: number;
  congressSeats: number;
  akaliSeats: number;
  aapSeats?: number;
  bjpSeats: number;
  bspSeats: number;
  othersSeats: number;
  chiefMinister?: string;
}

export interface VoteShareTrend {
  year: number;
  congressPercent: number;
  akaliPercent: number;
  aapPercent?: number;
  bjpPercent: number;
  othersPercent: number;
  turnoutPercent: number;
}

// ==========================================
// WAVE ELECTION ANALYSIS
// ==========================================

export interface WaveElection {
  year: number;
  waveParty: string;
  waveMagnitude: string;
  voteShift: string;
  trigger: string;
  regionalPattern: string;
}

// ==========================================
// ANTI-INCUMBENCY PATTERNS
// ==========================================

export interface AntiIncumbencyPattern {
  termDuration: string;
  averageSeatLoss: string;
  historicalPattern: string;
}

// ==========================================
// REGIONAL ELECTORAL PATTERNS
// ==========================================

export interface RegionalElectoralPattern {
  region: Region;
  districts: string[];
  assemblySeats: number;
  dominantCommunity: string;
  traditionalPattern: string;
  result2022: string;
  prediction2027: string;
  historicalNote: string;
}

// ==========================================
// KEY POLITICAL EVENTS
// ==========================================

export interface KeyPoliticalEvent {
  year: number;
  event: string;
  currentRelevance: string;
}

export interface AAPGovernmentPerformance {
  successes: string[];
  failures: string[];
  scandals: string[];
}

export interface CongressOppositionPerformance {
  leadershipInstability: string;
  organizationalReach: string;
  candidatePipeline: string;
}

export interface AkaliDalRecovery {
  baseStrategy: string;
  coalitionTalks: string;
  positioning: string;
}

// ==========================================
// PREDICTIVE MODELING
// ==========================================

export interface StructuralFactor {
  factor: string;
  weight: "HIGH" | "MEDIUM" | "LOW";
  direction: "Against AAP" | "For Congress";
  magnitude: string;
}

export interface SeatPrediction {
  party: string;
  range: string;
  centralEstimate: number;
}

export interface ScenarioAnalysis {
  scenario: string;
  outcome: string;
  probability: string;
}

export interface PredictionSummary {
  baselinePrediction: SeatPrediction[];
  scenarioAnalysis: ScenarioAnalysis[];
  mostLikelyOutcome: string;
}

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

export interface WhatWorksInPunjab {
  factor: string;
  description: string;
}

export interface WhatDoesNotWork {
  factor: string;
  description: string;
}

export interface HistoricalFraming {
  usePositively: string[];
  avoid: string[];
}

// ==========================================
// SOURCE DOCUMENTATION
// ==========================================

export interface SourceDocument {
  source: string;
  type: string;
  coverage?: string;
  credibility?: string;
  access?: string;
}

// ==========================================
// COMPLETE ELECTION HISTORY REPORT
// ==========================================

export interface ElectionHistoryReport {
  metadata: ElectionHistoryMetadata;
  electionResults2022: ElectionResultArchitecture;
  assemblyElectionHistory: AssemblyElectionResult[];
  voteShareTrends: VoteShareTrend[];
  waveElections: WaveElection[];
  antiIncumbencyPatterns: AntiIncumbencyPattern[];
  regionalPatterns: RegionalElectoralPattern[];
  keyPoliticalEvents: KeyPoliticalEvent[];
  recentDevelopments: {
    aapGovernment: AAPGovernmentPerformance;
    congressOpposition: CongressOppositionPerformance;
    akaliDalRecovery: AkaliDalRecovery;
  };
  predictiveModeling: {
    factorsAgainstAAP: StructuralFactor[];
    factorsForCongress: StructuralFactor[];
    prediction: PredictionSummary;
  };
  strategicImplications: {
    whatWorks: WhatWorksInPunjab[];
    whatDoesNotWork: WhatDoesNotWork[];
    recommendedFraming: HistoricalFraming;
  };
  sources: {
    primary: SourceDocument[];
    secondary: SourceDocument[];
  };
  confidenceRatings: {
    rating: string;
    definition: string;
    application: string;
  }[];
}
