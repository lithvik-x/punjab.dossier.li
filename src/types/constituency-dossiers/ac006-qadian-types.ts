// AC006-Qadian Constituency Dossier Types
// Derived from: AC006-Qadian.md and AC006-Qadian-deep.md
// Research: Web-verified via minimax-web-search
// Date: 20 May 2026

import type { Region } from "../kpi-types";

// ==========================================
// CONSTITUENCY IDENTITY & BASELINE
// ==========================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  type: "General" | "SC" | "ST";
  parliamentarySegment: string;
  town: string;
  area: string;
  significance: string;
  date: string;
}

export interface HistoricalContext {
  religiousSignificance: string;
  sikhHeritage: string;
  mugalEra: VerificationStatus;
  partitionImpact: VerificationStatus;
}

export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string;
  pilgrimageEconomy: string;
  crops: string[];
}

export interface ReligiousComposition {
  sikh: number; // percentage estimate
  muslim: number; // percentage estimate
  hindu: number; // percentage estimate
  other?: number; // percentage for other religions
}

export interface SocioCulturalIdentity {
  language: string;
  religiousComposition: ReligiousComposition;
  religiousCompositionNote?: string; // e.g., "~60%", "~10-15%"
  casteComposition: VerificationStatus;
  cultural: string;
}

export interface AdministrativeSetup {
  municipalCouncil: string;
  health: VerificationStatus;
  education: VerificationStatus;
}

// ==========================================
// VERIFICATION STATUS
// ==========================================

export type VerificationStatus =
  | { verified: true; value: string | number }
  | { verified: false; note: string; value?: string | number };

// ==========================================
// DEMOGRAPHIC DEEP-DIVE
// ==========================================

export interface CensusData {
  townPopulation2011: VerificationStatus;
  sexRatio: VerificationStatus;
  literacy: VerificationStatus;
  ruralPopulation: string;
}

export interface ElectoralRollAnalytics2022 {
  totalElectors: {
    verified: true;
    value: number;
    note?: string; // e.g., "estimated"
  };
  voterTurnout: {
    verified: true;
    value: number;
    note?: string; // e.g., "estimated"
  };
}

export interface SchemePenetration {
  pds: string;
  mgnrega: VerificationStatus;
  pilgrimageSchemes: VerificationStatus;
}

// ==========================================
// ELECTORAL HISTORY
// ==========================================

export interface ElectionResult {
  year: 2012 | 2017 | 2022;
  winner: string;
  party: "INC" | "AAP" | "SAD" | "BJP" | "Others";
  voteShare?: number; // percentage estimate
  margin?: string; // descriptive margin
  marginVotes?: number; // exact margin in votes
  opponent?: VerificationStatus;
  defeatedOpponent?: string; // name of opponent who lost
}

export interface VoterBehaviour {
  turnout: VerificationStatus;
  swing: string;
  religiousFactor: string;
}

// ==========================================
// PUBLIC SENTIMENT
// ==========================================

export interface PublicSentiment {
  mla: string;
  mlaStatus: VerificationStatus;
  expectations: string[];
}

export interface KeyIssues {
  issues: Issue[];
}

export interface Issue {
  rank: number;
  title: string;
  description: string;
}

// ==========================================
// GOVERNANCE GAP
// ==========================================

export interface GovernanceGap {
  religiousTourism: {
    pilgrimagePotential: string;
    infrastructure: VerificationStatus;
  };
  ruralServices: {
    health: VerificationStatus;
    education: VerificationStatus;
    roads: VerificationStatus;
  };
}

// ==========================================
// LOCAL ISSUES
// ==========================================

export interface IssueVoterMapping {
  issue: string;
  voterSegment: string;
}

// Additional key local issues from source analysis
export interface LocalIssue {
  title: string;
  description: string;
  priority: number;
}

export interface LocalIssues {
  issues: LocalIssue[];
}

// ==========================================
// INFLUENCERS & POWER STRUCTURE
// ==========================================

export interface ReligiousInfluencer {
  role: string;
  description: string;
  verification: VerificationStatus;
}

export interface PoliticalInfluencer {
  name: string;
  party: string;
  role: string;
  description: string;
  verification: VerificationStatus;
}

export interface PowerStructure {
  religious: ReligiousInfluencer[];
  political: PoliticalInfluencer[];
}

// ==========================================
// SWOT ANALYSIS
// ==========================================

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ==========================================
// STRATEGIC BLUEPRINT
// ==========================================

export interface StrategicBlueprint {
  narratives: string[];
  prioritySegments: string[];
}

// ==========================================
// CANDIDATE & CAMPAIGN STRATEGY
// ==========================================

export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLines {
  lines: AttackLine[];
}

export interface AttackLine {
  topic: string;
  description: string;
}

export interface CongressPosition {
  assessment: string;
  marginAnalysis: string;
  strategicNotes: string[];
}

// Recommended strategic positioning
export interface StrategicPositioning {
  recommendedProfile: string;
  casteConsideration: string;
  keyQualities: string[];
  recommendedNarratives: string[];
}

// ==========================================
// CASTE COMPOSITION (Gurdaspur District)
// ==========================================

export interface CasteComposition {
  jatSikh: number;
  sc: number;
  obc: number;
  upperCaste: number;
  minority: number;
  other: number;
  minorityBreakdown?: {
    ahmadiyya: number;
    muslim: number;
    christian: number;
  };
}

// ==========================================
// COMPLETE CONSTITUENCY DOSSIER
// ==========================================

export interface AC006QadianDossier {
  identity: ConstituencyIdentity;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;
  administrativeSetup: AdministrativeSetup;
  censusData: CensusData;
  electoralRollAnalytics: ElectoralRollAnalytics2022;
  schemePenetration: SchemePenetration;
  electionHistory: ElectionResult[];
  voterBehaviour: VoterBehaviour;
  publicSentiment: PublicSentiment;
  keyIssues: KeyIssues;
  localIssues: LocalIssues; // Additional issues from source analysis
  governanceGap: GovernanceGap;
  issueVoterMapping: IssueVoterMapping[];
  powerStructure: PowerStructure;
  swot: SWOTAnalysis;
  strategicBlueprint: StrategicBlueprint;
  strategicPositioning: StrategicPositioning;
  candidateProfile: CandidateProfile;
  attackLines: AttackLines;
  congressPosition: CongressPosition;
  casteComposition: CasteComposition;
  sources: string[];
  researchStatus: string;
}
