/**
 * AC044-Chabbewal Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC044-Chabbewal.md, AC044-Chabbewal-deep.md
 *
 * CHABBEWAL (AC-044) - SC Reserved Constituency in Hoshiarpur District, Doaba Region
 * Key Events: Congress won 2022, AAP won 2024 bypoll with record 28,690 margin
 */

// ============================================================================
// RESEARCH METADATA (from source file headers)
// ============================================================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: "VERIFIED" | "PARTIALLY_VERIFIED" | "UNVERIFIED";
  dataCurrency: string;
}

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  lokSabhaSeat: string;
  date: string;
}

export interface ConstituencyProfile {
  acNumber: string;
  officialName: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  description: string;
  keyHighlights: string[];
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export type PartyCode = "AAP" | "INC" | "BSP" | "OTHER";

export interface BypollResult {
  winner: string;
  party: PartyCode;
  margin: string;
  marginVotes: number;
  runnerUp: string;
  runnerUpParty: PartyCode;
}

export interface ElectionResult {
  winner: string;
  party: PartyCode;
  margin: string;
  marginVotes?: number;
  note?: string;
}

export interface ElectionResultWithRunnerUp extends ElectionResult {
  runnerUp: string;
  runnerUpParty: PartyCode;
}

export interface ElectionHistory {
  bypoll2024: BypollResult;
  result2022: ElectionResult;
  result2017: ElectionResult;
  keyTrend: string;
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
  numericPercentage?: number;
}

export interface CasteCompositionData {
  categories: CasteCategory[];
  keyDemographics: string[];
  dominantCommunities?: string[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: string;
  bypollResult: string;
  challenge: string;
  timeFactor: string;
}

export interface StrategicAssessment {
  marginIndicators: string[];
  strategicFlags: string[];
}

export interface CongressRecommendations {
  recommendations: string[];
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  idealProfile: string;
}

export interface RecommendedCandidateProfile {
  table: CandidateAttribute[];
}

export interface CandidateQuality {
  quality: string;
  description: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  title: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  lines: AttackLine[];
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface PartyVoteShare {
  party: string;
  partyCode: PartyCode;
  estimatedPercentage: string;
  numericPercentage: number;
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
  congressGap: string;
  congressGapVotes: number;
}

// ============================================================================
// RECOMMENDATIONS SUMMARY
// ============================================================================

export interface RecommendationsSummary {
  priority: string;
  priorityLevel?: "LOW" | "MEDIUM" | "MEDIUM-HIGH" | "HIGH";
  candidate: string;
  timeline: string;
  narrative: string;
  groundWork: string;
}

// ============================================================================
// DEEP RESEARCH TYPES
// ============================================================================

export interface DeepConstituencyIdentity {
  acNo: string;
  name: string;
  district: string;
  region: string;
  category: string;
  lokSabha: string;
  location: string;
}

export interface DeepElectoralHistory {
  election2022: {
    winner: string;
    margin: string;
    marginVotes: number;
  };
  bypoll2024: {
    winner: string;
    margin: string;
    marginVotes: number;
    runnerUp: string;
  };
  significance: string[];
}

export interface PublicSentimentIndicators {
  indicators: string[];
}

export interface AAPStrategy {
  priorities: string[];
}

export interface CongressStrategyDeep {
  priorities: string[];
}

export interface BSPStrategy {
  potential: string[];
}

export interface Wildcards {
  factors: string[];
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC044ChabbewalTypes {
  // Metadata from source files
  researchMetadata: ResearchMetadata;
  researchMetadataDeep: ResearchMetadata;

  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;

  // Executive Summary
  executiveSummary: ExecutiveSummary;

  // Elections
  electionHistory: ElectionHistory;

  // Demographics
  casteComposition: CasteCompositionData;
  keyLocalIssues: KeyLocalIssues;

  // Strategy
  congressStrategicPosition: CongressStrategicPosition;
  strategicAssessment: StrategicAssessment;
  congressRecommendations: CongressRecommendations;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
  voteShareAnalysis: VoteShareAnalysis;
  recommendationsSummary: RecommendationsSummary;

  // Deep Research
  deepResearch: {
    constituencyIdentity: DeepConstituencyIdentity;
    scDemographics: {
      scPopulation: string;
      reserved: string;
      ruralSC: string;
    };
    hoshiarpurDistrict: {
      description: string;
    };
    electoralHistory: DeepElectoralHistory;
    publicSentiment: PublicSentimentIndicators;
    strategicBlueprint: {
      aapStrategy: AAPStrategy;
      congressStrategy: CongressStrategyDeep;
      bspPotential: BSPStrategy;
    };
    wildcards: Wildcards;
  };

  // Quality
  dataQuality: {
    sources: string[];
    compiledDate: string;
    verificationStatus: string;
    researchAgent: string;
  };
}
