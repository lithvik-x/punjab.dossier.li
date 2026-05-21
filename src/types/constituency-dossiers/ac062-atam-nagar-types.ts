/**
 * AC062 - Atam Nagar Assembly Constituency Type Definitions
 * Generated from: AC062-Atam-Nagar.md and AC062-AtamNagar-deep.md
 * Date: 21 May 2026
 *
 * Coverage: 100% content analysis across 6-cycle enhancement pipeline
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: 'General' | 'SC' | 'ST';
  date: string;
}

export interface GeographicProfile {
  description: string;
  location: string;
  significance: string;
  landUse: string;
}

export interface KeyStatistics2022 {
  winner: string;
  runnerUp: string | null;
  winnerParty: string;
  margin: number;
  totalElectors: number | null;
  votesPolled: number | null;
  voterTurnout: number | null;
}

export interface ConstituencyIdentity {
  header: ConstituencyHeader;
  geographicProfile: GeographicProfile;
  keyStatistics2022: KeyStatistics2022;
  borderStatus: string;
  lokSabhaSeat: string;
  character: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  runnerUp: string | null;
  runnerUpParty: string | null;
  margin: number | null;
  winnerVoteCount: number | null;
  votesPolled?: number | null;
  totalElectors?: number | null;
  voterTurnout?: number | null;
  voteShare?: number | null;
  verificationStatus: 'Verified' | 'Partially Verified' | 'Needs Verification';
}

export interface ElectionResults {
  2022: ElectionResult;
  2017: ElectionResult;
  2012: ElectionResult;
}

export interface VoteShareBreakdown {
  party: string;
  sharePercent: number;
  votesEstimate: number;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteBreakdown {
  category: string;
  percentage: string;
  notes?: string;
}

export interface KeyCommunity {
  community: string;
  description: string;
}

export interface Demographics {
  populationComposition: CasteBreakdown[];
  keyCommunities: KeyCommunity[];
  scPopulationPercent: string;
  upperCastePercent: string;
  obcPercent: string;
}

// ============================================================================
// VOTER ECOSYSTEM
// ============================================================================

export interface VoterEcosystem {
  totalElectors: number;
  votesPolled: number;
  voterTurnout: number;
  turnoutAnalysis: string;
  swingPotential: boolean;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  category: 'Urban' | 'Rural' | 'Social' | 'Economic' | 'Infrastructure' | 'Law & Order';
}

// ============================================================================
// GOVERNANCE AUDIT
// ============================================================================

export interface AdministrativeStructure {
  district: string;
  dc: string;
  mc: string;
  mla: string;
  mlaParty: string;
  mlaTerm: string;
}

export interface MLAAssessment {
  mlaName: string;
  party: string;
  margin: number;
  performanceAssessment: string;
  closeContest: boolean;
}

export interface GovernanceAudit {
  administrativeStructure: AdministrativeStructure;
  mlaAssessment: MLAAssessment;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  party: string;
  role: string;
  background: string | null;
  verificationStatus: string;
}

export interface CongressLeader {
  name: string;
  position: string;
  organizationalBase: string;
}

export interface BPPSADLeader {
  name: string;
  position: string;
  coalitionPotential: string;
  voterBase: string;
}

export interface InfluencersPowerStructure {
  political: PoliticalInfluencer[];
  congressLeaders: CongressLeader[];
  bjpSadLeaders: BPPSADLeader[];
}

// ============================================================================
// AAP VULNERABILITY ANALYSIS
// ============================================================================

export interface AAPVulnerability {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AAPWeakPoints {
  vulnerabilities: AAPVulnerability[];
}

export interface AAPVulnerabilityAnalysis {
  whyVulnerable: string[];
  weakPoints: AAPWeakPoints;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentPosition: string;
  margin: number;
  votesNeeded: string;
  opportunity: string;
}

export interface WinningStrategy {
  phase: string;
  duration: string;
  tactics: string[];
}

export interface CongressStrategy {
  strategicPosition: CongressStrategicPosition;
  winningStrategy: WinningStrategy[];
}

// ============================================================================
// CANDIDATE RECOMMENDATION
// ============================================================================

export interface CandidateAttributes {
  attribute: string;
  requirement: string;
}

export interface CandidateProfile {
  attributes: CandidateAttributes[];
  priorityApproach: string[];
}

export interface CandidateRecommendation {
  idealCandidateProfile: CandidateProfile;
  recommendedActions: string[];
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface PartyVoteShare {
  party: string;
  sharePercent: number;
  votesEstimate: number;
}

export interface VoteShareAnalysis {
  breakdown: PartyVoteShare[];
  congressGapAnalysis: string;
  votesNeeded: number;
  halfMargin: string;
}

export interface PriorityRanking {
  tier: string;
  priority: string;
  margin: number;
  factors: string[];
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  item: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

// ============================================================================
// SOURCE METADATA
// ============================================================================

export interface SourceMetadata {
  sources: string[];
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  verificationStatus: string;
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER TYPE
// ============================================================================

export interface AC062AtamNagarDossier {
  // Metadata
  metadata: SourceMetadata;

  // Executive Summary
  executiveSummary: string;

  // Core Identity
  constituencyIdentity: ConstituencyIdentity;

  // Election Data
  electionResults: ElectionResults;
  historicalTrendAnalysis: string;

  // Demographics
  demographics: Demographics;

  // Voter Ecosystem
  voterEcosystem: VoterEcosystem;

  // Local Issues
  localIssues: LocalIssue[];

  // Governance
  governanceAudit: GovernanceAudit;

  // Influencers
  influencersPowerStructure: InfluencersPowerStructure;

  // AAP Vulnerability
  aapVulnerabilityAnalysis: AAPVulnerabilityAnalysis;

  // Congress Strategy
  congressStrategy: CongressStrategy;

  // Vote Share Analysis
  voteShareAnalysis: VoteShareAnalysis;

  // Candidate Recommendation
  candidateRecommendation: CandidateRecommendation;

  // Priority Ranking
  priorityRanking: PriorityRanking;

  // Intelligence Gaps
  intelligenceGaps: IntelligenceGaps;
}
