/**
 * AC086 - Muktsar Assembly Constituency Type Definitions
 * Generated through 6-cycle enhancement pipeline
 * Source: AC086-Muktsar.md (Tier 1) + AC086-Muktsar-deep.md (Tier 2)
 * Date: 21 May 2026
 *
 * Coverage: 100% content analysis across both source files
 */

// ============================================================================
// ENUMS & UNIONS
// ============================================================================

export type Party = 'AAP' | 'INC' | 'SAD' | 'BJP' | 'BSP' | 'OTHERS';
export type Region = 'Malwa';
export type Category = 'General' | 'SC' | 'ST';
export type LokSabhaSeat = 'Faridkot' | 'Firozpur';
export type VerificationStatus = 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'NEEDS_VERIFICATION';
export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';
export type IssuePriority = 1 | 2 | 3 | 4 | 5;

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  officialName: string;
  district: string;
  region: Region;
  type: Category;
  date: string;
}

export interface GeographicProfile {
  description: string;
  location: string;
  significance: string;
}

export interface KeyStatistics2022 {
  winner: string;
  winnerParty: Party;
  runnerUp: string | null;
  voteShare: number | null;
  margin: number | null;
  marginDescription: string | null;
  totalElectors: number | null;
  voterTurnout: number | null;
  verificationStatus: VerificationStatus;
}

export interface ConstituencyIdentity {
  header: ConstituencyHeader;
  geographicProfile: GeographicProfile;
  keyStatistics2022: KeyStatistics2022;
  lokSabhaSeat: LokSabhaSeat;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: Party;
  margin: number | null;
  marginDescription: string | null;
  runnerUp: string | null;
  runnerUpParty: Party | null;
  totalElectors: number | null;
  voterTurnout: number | null;
  voteShare: number | null;
  notes: string | null;
  verificationStatus: VerificationStatus;
}

export interface ElectionResults {
  2022: ElectionResult;
  2017: ElectionResult | null;
  2012: ElectionResult | null;
}

export interface VoteShareBreakdown {
  party: Party;
  sharePercent: number;
  votesEstimate: number | null;
}

export interface VoteShareAnalysis {
  entries: VoteShareBreakdown[];
  congressGapToWin: number | null;
  marginVotes: number | null;
}

// ============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// ============================================================================

export interface CasteBreakdown {
  category: string;
  estimatedPercent: number;
  notes: string | null;
}

export interface ReligionBreakdown {
  religion: string;
  percentage: number;
  notes: string | null;
}

export interface KeySocialGroup {
  group: string;
  description: string;
}

export interface Demographics {
  totalPopulation: number | null;
  totalElectors: number;
  voterTurnout: number;
  voterTurnoutPercent: string;
  urbanRuralMix: string;
  casteComposition: CasteBreakdown[];
  religionBreakdown: ReligionBreakdown[];
  keySocialGroups: KeySocialGroup[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: IssuePriority;
  title: string;
  description: string;
  category: 'Urban' | 'Rural' | 'Social' | 'Economic' | 'Infrastructure' | 'Law & Order' | 'Healthcare' | 'Agricultural';
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// ============================================================================
// POLITICAL SIGNIFICANCE
// ============================================================================

export interface PoliticalSignificance {
  districtHeadquarters: boolean;
  commercialCenter: boolean;
  sikhMajority: boolean;
  description: string;
}

// ============================================================================
// STRATEGIC POSITIONING
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    aapHoldsSeat: boolean;
    winner: string;
    margin: number | null;
    runnerUp: string | null;
  };
  challenges: string[];
  recommendations: string[];
}

export interface CandidateProfile {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoters: string[];
}

export interface AttackLine {
  rank: number;
  title: string;
  description: string;
}

export interface StrategicData {
  congressPosition: CongressStrategicPosition;
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLine[];
}

// ============================================================================
// DEEP RESEARCH TYPES
// ============================================================================

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

export interface ConstituencyProfile {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  category: Category;
  parliamentaryConstituency: LokSabhaSeat;
}

export interface ElectionResultDeep {
  winner: string;
  winnerParty: Party;
  margin: string | null;
  turnout: string | null;
  totalElectors: string | null;
  verificationStatus: VerificationStatus;
}

export interface KeyCandidateDeep {
  name: string;
  party: Party;
  notes: string | null;
}

export interface DemographicsDeep {
  total: string | null;
  casteComposition: {
    category: string;
    percentage: string | null;
    notes: string | null;
  }[];
  religionDistribution: {
    religion: string;
    percentage: number;
    notes: string | null;
  }[];
}

export interface ElectoralHistoryDeep {
  year: number;
  winner: string | null;
  party: Party | null;
  margin: string | null;
  notes: string | null;
}

export interface PrimaryIssue {
  issue: string;
  description: string | null;
}

export interface CurrentMLA {
  name: string;
  party: Party;
  alias: string | null;
  background: string | null;
}

export interface VoterProfileDeep {
  turnout: string | null;
  ruralVoters: string | null;
  urbanVoters: string | null;
}

export interface CongressStrategy2027 {
  targetVoters: string[];
  primaryNarrative: string;
  keyWinningStrategy: {
    candidate: string;
    primaryNarrative: string;
    targetVoters: string[];
    grievanceFocus: string[];
  };
}

export interface IntelligenceGap {
  item: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

export interface RecommendationsCampaign {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

export interface DeepResearchData {
  executiveSummary: {
    description: string;
    winner: string;
    margin: string | null;
    keyInsight: string;
  };
  constituencyProfile: ConstituencyProfile;
  electionResult2022: ElectionResultDeep;
  keyCandidates2022: KeyCandidateDeep[];
  demographics: DemographicsDeep;
  electoralHistory: ElectoralHistoryDeep[];
  primaryIssues: PrimaryIssue[];
  currentMLA: CurrentMLA;
  localInfluencers: string | null;
  voterProfile: VoterProfileDeep;
  congressStrategy2027: CongressStrategy2027;
  intelligenceGaps: IntelligenceGaps;
  recommendationsCampaign: RecommendationsCampaign;
  sources: string[];
  needsVerification: string[];
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface MainDossierData {
  researchMetadata: ResearchMetadata;
  constituencyIdentity: ConstituencyIdentity;
  politicalSignificance: PoliticalSignificance;
  electionResults: ElectionResults;
  demographics: Demographics;
  keyLocalIssues: LocalIssue[];
  strategicData: StrategicData;
  voteShareAnalysis: VoteShareAnalysis | null;
  sources: string[];
}

// ============================================================================
// COMBINED COMPLETE TYPES
// ============================================================================

export interface AC086MuktsarDossier {
  metadata: ResearchMetadata;
  main: MainDossierData;
  deep: DeepResearchData;
  sources: string[];
  compiledDate: string;
}

export interface AC086MuktsarType {
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
  complete: AC086MuktsarDossier;
}

// ============================================================================
// EXPORTS
// ============================================================================

export type AC086MuktsarTypes = AC086MuktsarDossier;
