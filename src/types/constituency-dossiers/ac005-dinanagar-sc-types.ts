/**
 * AC005 - Dina Nagar (SC) Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC005-Dina-Nagar-SC.md + AC005-DinaNagarSC-deep.md
 */

// ============================================================================
// CORE IDENTIFICATION
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  parliamentarySegment: string;
  type: 'SC' | 'ST' | 'GEN';
  town: string;
  areaDescription: string;
}

// ============================================================================
// HISTORICAL & ADMINISTRATIVE
// ============================================================================

export interface HistoricalContext {
  origin: string;
  significance: string;
  development: string;
  needsVerification: boolean;
}

export interface AdministrativeSetup {
  municipalCouncil: string;
  health: string;
  education: string;
  needsVerification: boolean;
}

// ============================================================================
// ECONOMIC & SOCIO-CULTURAL
// ============================================================================

export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string[];
  economicStatus: string;
}

export interface SocioCulturalIdentity {
  language: string;
  religion: string;
  casteComposition: string;
  socialProfile: string;
  needsVerification: boolean;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CensusData {
  townPopulation2011: number | null;
  districtContext: string;
  sexRatio: number | null;
  literacy: number | null;
  needsVerification: boolean;
}

export interface ElectoralRollAnalytics {
  totalElectors: number | null;
  voterTurnout2022: number | null;
  needsVerification: boolean;
}

export interface SchemePenetration {
  pds: string;
  mgnrega: string;
  scWelfare: string[];
  pensions: string[];
}

// ============================================================================
// ELECTORAL HISTORY
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  voteCount: number | null;
  margin: string;
  runnerUp?: string;
  runnerUpParty?: string;
  needsVerification: boolean;
}

export interface ElectoralHistory {
  pastElections: ElectionResult[];
  voterBehaviour: VoterBehaviour;
}

export interface VoterBehaviour {
  casteFactor: string;
  partyLoyalty: string;
  swing: string;
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface CurrentMood {
  mla: string;
  party: string;
  terms: number;
  expectations: string[];
}

export interface KeyIssue {
  issue: string;
  priority: number;
}

export interface PublicSentiment {
  currentMood: CurrentMood;
  keyIssues: KeyIssue[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface GovernanceGap {
  scWelfareImplementation: string;
  scholarships: string;
  housing: string;
  needsVerification: boolean;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface IssueVoterMapping {
  issue: string;
  prioritySegment: string;
}

export interface LocalIssues {
  issueVoterMappings: IssueVoterMapping[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  role: string;
  party?: string;
  notes?: string;
}

export interface CommunityInfluencer {
  category: string;
  details: string;
  needsVerification: boolean;
}

export interface PowerStructure {
  political: PoliticalInfluencer[];
  boothAgents?: string;
  community: CommunityInfluencer[];
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface Narrative {
  title: string;
  description: string;
}

export interface PrioritySegment {
  segment: string;
  percentage: string;
  strategy: string;
}

export interface StrategicBlueprint {
  topNarratives: Narrative[];
  prioritySegments: PrioritySegment[];
}

// ============================================================================
// DEEP DOSSIER TYPES
// ============================================================================

export interface CasteComposition {
  category: string;
  percentage: string;
}

export interface ElectionResultDeep {
  year: number;
  winner: string;
  party: string;
  margin: string | number;
  totalElectors?: number;
  voterTurnout?: number;
  needsVerification: boolean;
}

export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLine {
  category: string;
  points: string[];
}

export interface CongressPosition {
  vulnerability: 'EXTREME' | 'HIGH' | 'MODERATE' | 'LOW';
  margin: number | string;
  strategicNotes: string;
}

// ============================================================================
// MASTER CONSTITUENCY TYPE
// ============================================================================

export interface DinaNagarSCDossier {
  // Identity
  identity: ConstituencyIdentity;

  // Baseline sections
  historicalContext: HistoricalContext;
  administrativeSetup: AdministrativeSetup;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;

  // Demographics
  censusData: CensusData;
  electoralRollAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;

  // Electoral
  electoralHistory: ElectoralHistory;
  publicSentiment: PublicSentiment;

  // Governance
  governanceGap: GovernanceGap;

  // Local
  localIssues: LocalIssues;

  // Power structure
  powerStructure: PowerStructure;

  // Analysis
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;

  // Deep dossier
  casteComposition: CasteComposition[];
  electionResultsDeep: ElectionResultDeep[];
  congressPosition: CongressPosition;
  recommendedCandidateProfile: CandidateProfile;
  attackLines: AttackLine[];

  // Metadata
  dataSources: string[];
  researchStatus: string;
  lastUpdated: string;
}
