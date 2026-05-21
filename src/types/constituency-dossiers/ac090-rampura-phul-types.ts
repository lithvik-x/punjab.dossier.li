/**
 * AC-090 Rampura Phul Assembly Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC090-Rampura-Phul.md + AC090-RampuraPhul-deep.md
 */

// =============================================================================
// ENUMS & UNIONS
// =============================================================================

export type Party = "AAP" | "INC" | "SAD" | "BSP" | "OTHERS";
export type Region = "Malwa";
export type Category = "General";
export type LokSabhaSeat = "Bathinda" | "Faridkot";
export type VerificationStatus = "VERIFIED" | "PARTIALLY_VERIFIED" | "NEEDS_VERIFICATION";
export type Priority = "HIGH" | "MEDIUM" | "LOW";
export type IssuePriority = 1 | 2 | 3 | 4 | 5;

// =============================================================================
// CORE CONSTITUENCY IDENTITY
// =============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: Region;
  category: Category;
  lokSabhaSeat: LokSabhaSeat;
  location?: string;
}

export interface ResearchMetadata {
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

// =============================================================================
// EXECUTIVE SUMMARY
// =============================================================================

export interface ExecutiveSummary {
  description: string;
  winner: string;
  winnerParty: Party;
  margin: number;
  keyIssues: string[];
  politicalInsight: string;
}

// =============================================================================
// ELECTION RESULTS
// =============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  winnerParty: Party;
  voteShare?: number;
  margin: number;
  marginDescription?: string;
  runnerUp?: string;
  runnerUpParty?: Party;
  totalElectors?: number;
  notes?: string;
}

export interface ElectionResultPartial {
  year: number;
  winner: string;
  winnerParty: Party;
  margin: number;
  runnerUp?: string;
  runnerUpParty?: Party;
  notes?: string;
}

export interface VoteShareEntry {
  party: Party;
  voteSharePercent: number;
}

export interface VoteShareAnalysis {
  entries: VoteShareEntry[];
  congressGapToWin?: number;
  congressGapDescription?: string;
}

// =============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// =============================================================================

export interface CasteCategoryEntry {
  category: string;
  estimatedPercent: number;
}

export interface CasteComposition {
  entries: CasteCategoryEntry[];
  keyDemographics: string[];
}

export interface ReligionDistribution {
  religion: string;
  percent: number;
}

export interface DemographicsCensus2011 {
  totalPopulation?: number;
  casteComposition: CasteCategoryEntry[];
  religionDistribution?: ReligionDistribution[];
  notes?: string;
}

// =============================================================================
// ELECTORATE DATA
// =============================================================================

export interface ElectorateEntry {
  electionYear: number;
  totalElectors: number;
  voterTurnout?: number;
  turnoutPercent?: number;
}

export interface VoterProfile {
  turnout?: number;
  ruralVotersPercent?: number;
  urbanVotersPercent?: number;
  urbanRuralMix?: string;
}

// =============================================================================
// LOCAL ISSUES
// =============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description?: string;
}

export interface LocalIssueFull extends LocalIssue {
  priorityOrder: number;
}

// =============================================================================
// STRATEGIC POSITIONING
// =============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    holder: string;
    margin: number;
    vulnerability: string;
    history: string;
  };
  assessment: {
    points: string[];
  };
  recommendations: string[];
}

export interface CandidateProfile {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoters: string[];
  priority?: string;
}

export interface AttackLine {
  rank: number;
  title: string;
  description: string;
}

// =============================================================================
// POLITICAL PLAYERS & INFLUENCERS
// =============================================================================

export interface CurrentMLA {
  name: string;
  party: Party;
  notes?: string;
}

export interface LocalInfluencer {
  category: string;
  examples: string[];
  notes?: string;
}

// =============================================================================
// POWER STRUCTURE & INFLUENCERS
// =============================================================================

export interface InfluencerCategory {
  category: string;
  examples: string[];
}

// =============================================================================
// GOVERNANCE
// =============================================================================

export interface GovernanceGap {
  gaps: string[];
}

export interface PublicSentimentIndicator {
  indicator: string;
  description: string;
}

// =============================================================================
// 2027 OUTLOOK & STRATEGY
// =============================================================================

export interface CongressStrategy2027 {
  targetVoters: string[];
  primaryNarrative: string;
  grievanceFocus: string[];
  keyActions: string[];
}

export interface KeyWinningStrategy {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

// =============================================================================
// INTELLIGENCE GAPS
// =============================================================================

export interface IntelligenceGap {
  dataItem: string;
  verificationNeeded: string;
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

// =============================================================================
// STRATEGIC BLUEPRINTS
// =============================================================================

export interface StrategicBlueprint {
  party: Party | "BSP";
  strategy: string[];
}

// =============================================================================
// DEEP RESEARCH SUPPLEMENT
// =============================================================================

export interface DeepResearchData {
  identity: {
    constituency: ConstituencyIdentity;
    research: ResearchMetadata;
  };
  executiveSummary: {
    description: string;
    winner: string;
    margin: number;
    keyIssues: string[];
  };
  demographics: DemographicsCensus2011;
  electoralHistory: {
    results: ElectionResultPartial[];
    notes?: string;
  };
  keyIssues: {
    primaryIssues: string[];
    attackLines: string[];
  };
  politicalPlayers: {
    currentMLA: CurrentMLA;
    localInfluencers: LocalInfluencer[];
  };
  voterProfile: VoterProfile;
  outlook2027: {
    congressStrategy: CongressStrategy2027;
    keyWinningStrategy: KeyWinningStrategy;
  };
  intelligenceGaps: IntelligenceGaps;
  recommendations: string[];
  sources: string[];
}

// =============================================================================
// MAIN DOSSIER
// =============================================================================

export interface RecommendationsSummary {
  priority: Priority;
  priorityRationale: string;
  candidate: string;
  narrative: string;
  outreach: string;
  coalition?: string;
}

export interface MainDossierData {
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyIdentity;
  electionResults: ElectionResult[];
  casteComposition: CasteComposition;
  electorateData: ElectorateEntry[];
  voterDemographics: VoterProfile;
  keyLocalIssues: LocalIssue[];
  congressPosition: CongressStrategicPosition;
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLine[];
  voteShareAnalysis?: VoteShareAnalysis;
  recommendations: RecommendationsSummary;
  sources: string[];
}

// =============================================================================
// COMBINED TYPES (for both files)
// =============================================================================

export interface RampuraPhulDossierComplete {
  researchId: string;
  deepResearchId: string;
  main: MainDossierData;
  deep: DeepResearchData;
  compiledDate: string;
}

// =============================================================================
// CONSTITUENCY REFERENCE (shortcut type)
// =============================================================================

export interface ConstituencyReference {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  category: Category;
  winner2022: string;
  winnerParty2022: Party;
  margin2022: number;
}

// =============================================================================
// TOP-LEVEL EXPORTS
// =============================================================================

export type AC090RampuraPhulTypes = {
  dossier: RampuraPhulDossierComplete;
  reference: ConstituencyReference;
};
