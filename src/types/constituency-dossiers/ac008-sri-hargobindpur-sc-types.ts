// AC008-SriHargobindpur-SC Constituency Dossier Types
// Derived from: AC008-Sri-Hargobindpur.md and AC008-SriHargobindpurSC-deep.md
// 6-Cycle Enhancement Pipeline - Cycle 1: Initial Type Creation

// ==========================================
// CONSTITUENCY IDENTITY & BASELINE
// ==========================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: "Majha";
  date: string;
  researchSource: string;
  reservation: "SC";
  parliamentarySegment: string;
}

export interface AdministrativeGeographic {
  acNumber: number;
  parliamentarySegment: string;
  district: string;
  type: "SC" | "ST" | "General";
  area: string;
  historical: string;
}

export interface HistoricalContext {
  religiousSignificance: string;
  gurdwara: string;
  partitionImpact: string;
  socialHistory: string;
}

export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string[];
  economicStatus: string;
  land: string;
}

export interface SocioCulturalIdentity {
  language: string;
  religion: string;
  casteComposition: string;
  socialProfile: string;
}

export interface AdministrativeSetup {
  rural: string;
  health: string;
  education: string;
}

// ==========================================
// DEMOGRAPHIC DEEP-DIVE
// ==========================================

export interface CensusData {
  population: string;
  electors2022: string;
  sexRatio: string;
  literacy: string;
}

export interface ElectoralRollAnalytics {
  voterTurnout2024: number;
  voterTurnout2022: number;
  source: string;
  note: string;
}

export interface SchemePenetration {
  pds: string;
  mgnrega: string;
  scSchemes: string;
}

// ==========================================
// ELECTORAL HISTORY
// ==========================================

export interface ElectionResult {
  year: number;
  winner: string;
  party?: string;
  votes?: number;
  votePercentage?: number;
  margin?: string;
  runnerUp?: string;
  runnerUpParty?: string;
  runnerUpVotes?: number;
  runnerUpPercentage?: number;
}

export interface ElectoralHistory {
  elections: ElectionResult[];
  conflictingData: ConflictingData[];
  verdict: string;
}

export interface ConflictingData {
  source: string;
  winner: string;
  party: string;
  votes: number;
  percentage: number;
  runnerUp?: string;
  runnerUpParty?: string;
  runnerUpVotes?: number;
  runnerUpPercentage?: number;
}

export interface VoterBehaviour {
  turnout2022: number;
  casteFactor: string;
  swing: string;
}

// ==========================================
// PUBLIC SENTIMENT
// ==========================================

export interface CurrentMood {
  mla: string;
  party: string;
  term: string;
  expectations: string[];
}

export interface KeyIssue {
  issue: string;
  description: string;
}

// ==========================================
// GOVERNANCE GAP
// ==========================================

export interface GovernanceGap {
  health: string;
  education: string;
  roads: string;
}

// ==========================================
// LOCAL ISSUES
// ==========================================

export interface IssueVoterMapping {
  issue: string;
  segment: string;
}

// ==========================================
// INFLUENCERS & POWER STRUCTURE
// ==========================================

export interface CommunityInfluencers {
  dalitLeaders: string;
  panchayatHeads: string;
}

export interface PoliticalInfluencers {
  incumbentMLA: string;
  party: string;
  incWorkers: string;
  sad: string;
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
// CASTE COMPOSITION
// ==========================================

export interface CasteComposition {
  sc: string;
  jatSikh: string;
  obc: string;
  upperCaste: string;
  minority: string;
  note: string;
}

// ==========================================
// CONGRESS STRATEGIC POSITION
// ==========================================

export interface CongressStrategicPosition {
  position: string;
  recommendation: string;
}

export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLines {
  category: string;
  points: string[];
}

// ==========================================
// DATA QUALITY TRACKING
// ==========================================

export interface DataQualityStatus {
  field: string;
  status: "VERIFIED" | "NEEDS_VERIFICATION" | "PARTIAL" | "CONFLICTING";
  sources?: string[];
  notes?: string;
}

// ==========================================
// COMPLETE CONSTITUENCY DOSSIER
// ==========================================

export interface AC008SriHargobindpurSCDossier {
  // Identity
  constituency: ConstituencyIdentity;
  administrativeGeographic: AdministrativeGeographic;
  historical: HistoricalContext;
  economic: EconomicIdentity;
  socioCultural: SocioCulturalIdentity;
  administrative: AdministrativeSetup;

  // Demographics
  census: CensusData;
  electoralAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;

  // Electoral
  electoralHistory: ElectoralHistory;
  voterBehaviour: VoterBehaviour;

  // Sentiment
  currentMood: CurrentMood;
  keyIssues: KeyIssue[];

  // Governance
  governanceGap: GovernanceGap;

  // Local
  issueVoterMapping: IssueVoterMapping[];

  // Influencers
  communityInfluencers: CommunityInfluencers;
  politicalInfluencers: PoliticalInfluencers;

  // SWOT
  swot: SWOTAnalysis;

  // Strategy
  strategicBlueprint: StrategicBlueprint;

  // Deep-dive additions
  casteComposition: CasteComposition;
  congressPosition: CongressStrategicPosition;
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLines[];

  // Data Quality
  dataQuality: DataQualityStatus[];

  // Metadata
  dataSources: string[];
  researchStatus: string;
}
