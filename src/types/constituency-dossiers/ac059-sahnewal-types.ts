/**
 * AC059-Sahnewal Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC059-Sahnewal.md, AC059-Sahnewal-deep.md
 *
 * SAHNEWAL (AC-059) - General Category Constituency in Ludhiana District, Malwa Region
 * Key Insight: AAP won 2022 with smallest margin (15,193) in Ludhiana cluster - BEST Congress target
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
// GEOGRAPHIC PROFILE
// ============================================================================

export interface GeographicProfile {
  character: string;
  borderStatus: string;
  description: string[];
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export type PartyCode = "AAP" | "INC" | "SAD" | "BSP" | "OTHER";

export interface ElectionResult {
  winner: string;
  party: PartyCode;
  margin: string;
  marginVotes?: number;
  runnerUp?: string;
  runnerUpParty?: PartyCode;
  note?: string;
}

export interface ElectionResult2022 {
  winner: string;
  party: PartyCode;
  votes?: string;
  voteShare?: string;
  margin: string;
  marginVotes: number;
  runnerUp?: string;
  runnerUpParty?: PartyCode;
  note?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: PartyCode;
}

export interface ElectionResult2012 {
  winner: string;
  party: PartyCode;
}

export interface ElectionHistory {
  result2022: ElectionResult2022;
  result2017: ElectionResult2017;
  result2012: ElectionResult2012;
  keyTrend: string;
}

export interface HistoricalTrendAnalysis {
  pattern: string;
  interpretation: string;
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
  numericPercentage?: number;
}

export interface CasteComposition {
  categories: CasteCategory[];
  keyDemographics: string[];
  dominantCommunities?: string[];
}

export interface KeyCommunities {
  community: string;
  description: string;
}

// ============================================================================
// VOTER ELECTORATE DATA
// ============================================================================

export interface VoterTurnout {
  election: string;
  totalElectors: string;
  votesPolled?: string;
  voterTurnout?: string;
  turnoutPercentage?: number;
}

export interface VoterTurnoutTrend {
  year: string;
  turnoutPercentage: number;
  notes: string;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string[];
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: string;
  opportunity: string;
  advantage: string;
}

export interface WhyCongressCanWin {
  reasons: string[];
}

export interface StrategicRecommendations {
  recommendations: string[];
}

export interface CongressStrategicBlueprint {
  currentPosition: {
    result2022: string;
    opportunity: string;
    margin: string;
  };
  winningStrategy: {
    phase1: {
      title: string;
      activities: string[];
    };
    candidateSelection: {
      criteria: string[];
      ageRange: string;
    };
  };
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

export interface PriorityApproach {
  steps: string[];
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

export interface CongressGapAnalysis {
  votesNeeded: string;
  halfMarginTarget: string;
  sadVotersToTarget: string;
}

// ============================================================================
// RECOMMENDATIONS SUMMARY
// ============================================================================

export interface RecommendationsSummary {
  priority: string;
  priorityLevel?: "LOW" | "MEDIUM" | "MEDIUM-HIGH" | "HIGH";
  candidate: string;
  narrative: string;
  groundGame: string;
  marginReversalPotential: string;
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
  character: string;
  borderStatus: string;
}

export interface DeepElectoralHistory {
  election2022: {
    candidate: string;
    party: PartyCode;
    votes: string;
    voteShare: string;
    margin: string;
  };
  election2017: {
    winner: string;
    party: PartyCode;
  };
  election2012: {
    winner: string;
    party: PartyCode;
  };
  historicalTrend: string;
}

export interface DeepDemographics {
  populationComposition: CasteCategory[];
  keyCommunities: KeyCommunities[];
}

export interface DeepVoterEcosystem {
  electorate2022: {
    totalElectors: string;
    votesPolled: string;
    voterTurnout: string;
  };
  turnoutTrend: VoterTurnoutTrend[];
}

export interface GovernanceAudit {
  district: string;
  dc: string;
  mla: string;
  mlaParty: string;
  mlaTenure: string;
}

export interface MlaPerformanceAssessment {
  mlaName: string;
  assessment: string;
  localLeader: boolean;
  margin: string;
  performance: string;
}

export interface PoliticalInfluencer {
  name: string;
  affiliation: string;
  description: string[];
  vulnerability?: string;
}

export interface InfluencersPowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
}

export interface AapVulnerabilityAnalysis {
  whyVulnerable: string[];
  weakPoints: {
    issue: string;
    aapPromise: string;
    currentStatus: string;
    voterSentiment: string;
  }[];
}

export interface AAPStrategy {
  priorities: string[];
}

export interface CongressStrategyDeep {
  priorities: string[];
}

export interface TargetSegment {
  segment: string;
  votes: string;
}

export interface Wildcards {
  factors: string[];
}

export interface Triggers {
  triggers: string[];
}

export interface CourseChangingFactors {
  factors: string[];
}

export interface StrategicBlueprint {
  aapStrategy: AAPStrategy;
  congressStrategy: CongressStrategyDeep;
  targetSegments: TargetSegment[];
}

export interface PriorityRanking {
  tier: string;
  seats: {
    acNumber: string;
    name: string;
    margin: string;
    note?: string;
  }[];
}

export interface DataGap {
  gap: string;
}

export interface IntelligencePriority {
  status: string;
}

export interface DataQuality {
  sources: string[];
  compiledDate: string;
  verificationStatus: string;
  researchAgent: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC059SahnewalTypes {
  // Metadata from source files
  researchMetadata: ResearchMetadata;
  researchMetadataDeep: ResearchMetadata;

  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  geographicProfile: GeographicProfile;

  // Executive Summary
  executiveSummary: ExecutiveSummary;

  // Elections
  electionHistory: ElectionHistory;
  historicalTrendAnalysis: HistoricalTrendAnalysis;

  // Demographics
  casteComposition: CasteComposition;
  keyCommunities: KeyCommunities[];

  // Voter Ecosystem
  voterTurnout: VoterTurnout[];
  voterTurnoutTrend: VoterTurnoutTrend[];

  // Issues
  keyLocalIssues: KeyLocalIssues;

  // Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  whyCongressCanWin: WhyCongressCanWin;
  strategicRecommendations: StrategicRecommendations;
  congressStrategicBlueprint: CongressStrategicBlueprint;

  // Candidate
  recommendedCandidateProfile: RecommendedCandidateProfile;
  priorityApproach: PriorityApproach;

  // Attack Lines
  attackLines: AttackLinesAgainstAAP;

  // Vote Share
  voteShareAnalysis: VoteShareAnalysis;
  congressGapAnalysis: CongressGapAnalysis;

  // Recommendations
  recommendationsSummary: RecommendationsSummary;

  // Deep Research
  deepResearch: {
    constituencyIdentity: DeepConstituencyIdentity;
    electoralHistory: DeepElectoralHistory;
    demographics: DeepDemographics;
    voterEcosystem: DeepVoterEcosystem;
    governanceAudit: GovernanceAudit;
    mlaPerformance: MlaPerformanceAssessment;
    powerStructure: InfluencersPowerStructure;
    aapVulnerability: AapVulnerabilityAnalysis;
    strategicBlueprint: StrategicBlueprint;
    priorityRanking: PriorityRanking;
  };

  // Data Quality
  dataQuality: DataQuality;
}
