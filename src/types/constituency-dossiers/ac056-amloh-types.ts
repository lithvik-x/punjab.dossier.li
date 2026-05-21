/**
 * AC056-Amloh Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC056-Amloh.md, AC056-Amloh-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  lokSabhaSeat: string;
  character?: string;
  borderStatus?: string;
}

export interface ConstituencyProfile {
  attribute: string;
  details: string;
}

export interface GeographicProfile {
  district: string;
  character: string;
  borderStatus: string;
}

export interface ExecutiveSummary {
  description: string;
  margin: number;
  congressTarget: string;
  opportunity: string;
}

export interface Baseline {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  character: string;
  borderStatus: string;
  geographicProfile: GeographicProfile;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: number;
  runnerUp?: string;
  note?: string;
  votes?: number;
  voteShare?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectionResults {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  keyTrend: string;
}

export interface ElectoralHistory {
  election2022: {
    candidate: string;
    party: string;
    votes: number;
    voteShare: string;
    margin: number;
  };
  election2017: {
    winner: string;
    party: string;
  };
  election2012: {
    winner: string;
    party: string;
  };
  historicalTrend: string;
}

export interface VoterTurnout {
  year: number;
  turnoutPercentage: string;
  notes?: string;
}

export interface ElectorateData {
  election: string;
  totalElectors: number;
  voterTurnout: number;
  turnoutPercentage: string;
}

export interface VoterEcosystem {
  electorateData2022: ElectorateData;
  voterTurnoutTrend: VoterTurnout[];
}

// ============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  category: string;
  estimatedPercentage: string;
}

export interface KeyDemographics {
  description: string;
}

export interface CasteBreakdown {
  category: string;
  estimatedPercentage: string;
  notes?: string;
}

export interface Demographics {
  populationComposition: CasteBreakdown[];
  keyCommunities: string[];
}

export interface DemographicDeepDive {
  populationComposition: CasteComposition[];
  keyCommunities: string[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description?: string;
  subIssues?: string[];
}

export interface LocalIssue {
  category: string;
  issues: string[];
}

export interface LocalIssues {
  topIssues: KeyLocalIssue[];
  governanceAudit: GovernanceAudit;
}

export interface GovernanceAudit {
  administrativeStructure: AdministrativeStructure;
  mlaperformanceAssessment: MLAPerformanceAssessment;
}

export interface AdministrativeStructure {
  district: string;
  dc: string;
  mla: string;
}

export interface MLAPerformanceAssessment {
  name: string;
  description: string;
  performance: string;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: CurrentStatus;
  whyCongressCanWin: string[];
  strategicRecommendations: string[];
}

export interface CurrentStatus {
  lossIn2022: string;
  opportunity: string;
  farmerConnect: string;
}

export interface StrategicPosition {
  currentPosition: string;
  opportunity: string;
  margin: string;
  votesNeeded: number;
}

export interface CongressStrategicBlueprint {
  currentPosition: StrategicPosition;
  winningStrategy: WinningStrategy;
  candidateSelection: CandidateSelection;
}

export interface WinningStrategy {
  phase1: Phase1;
}

export interface Phase1 {
  farmerUnionAlliance: string[];
  boothLevelOrganization: string[];
  candidateSelection: CandidateSelection;
}

export interface CandidateSelection {
  caste: string;
  background: string;
  age: string;
  connect: string;
  quality: string;
  network?: string;
}

export interface CandidateProfile {
  attribute: string;
  requirement: string;
}

export interface RecommendedCandidateProfile {
  caste: string;
  background: string;
  age: string;
  connect: string;
  quality: string;
  network?: string;
}

export interface CongressStrategy {
  currentPosition: string;
  opportunity: string;
  farmerNarrative: string[];
  boothWork: string;
  youthFocus: string;
  marginReversalPotential: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  title: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  attackLines: AttackLine[];
}

export interface AAPVulnerabilityAnalysis {
  whyAAPIsVulnerable: string[];
  aapWeakPoints: AAPWeakPoint[];
}

export interface AAPWeakPoint {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface PartyVoteShare {
  party: string;
  voteShare: string;
  estimatedVotes?: number;
}

export interface VoteShareAnalysis {
  partyShares2022: PartyVoteShare[];
  congressGapToWin: string;
  congressGapVotes: number;
  sadVotersToTarget?: number;
  aapFlipNeeded?: number;
}

export interface CongressGapAnalysis {
  votesNeeded: number;
  sadVotersToTarget: number;
  aapFlipNeeded: number;
}

export interface VoteShareAnalysisDeep {
  partyShares2022: PartyVoteShare[];
  congressGapAnalysis: CongressGapAnalysis;
  projection2027: Projection2027;
}

export interface Projection2027 {
  tier: string;
  priority: string;
  margin: number;
  congressArea: string;
  farmerCoalitionKey: boolean;
}

export interface PriorityRanking {
  acNumber: string;
  margin: number;
  note?: string;
}

export interface PrioritySegment {
  segment: string;
  rationale: string;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  description: string;
}

export interface InfluencersPowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
  congressLeaders?: PoliticalInfluencer[];
  farmerUnionLeaders?: PoliticalInfluencer[];
}

export interface Influencer {
  name: string;
  description: string;
  background?: string;
}

export interface PowerStructure {
  influencers: Influencer[];
  farmerUnionLeaders?: Influencer[];
}

// ============================================================================
// STRATEGIC RECOMMENDATIONS
// ============================================================================

export interface RecommendationsSummary {
  priority: string;
  candidate: string;
  narrative: string;
  groundGame: string;
  marginReversalPotential: string;
}

export interface StrategicBlueprint {
  narratives: string[];
  prioritySegments: PrioritySegment[];
  farmerCoalition?: FarmerCoalition;
}

export interface FarmerCoalition {
  timeline: string;
  alliances: string[];
  boothOrganization: string[];
}

export interface StrategicAssessment {
  margin: string;
  congressArea: string;
  farmerCoalitionKey: string;
}

// ============================================================================
// DATA SOURCE TRACKING
// ============================================================================

export interface DataSource {
  name: string;
}

export interface SourceMetadata {
  sources: string[];
  compiled: string;
  status?: string;
}

export interface DataQuality {
  sources: string[];
  verificationStatus: string;
  dataCurrency: string;
}

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: string;
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface Ac056AmlohTypes {
  // Metadata
  metadata: ResearchMetadata;

  // Identity & Baseline
  executiveSummary: ExecutiveSummary;
  identity: ConstituencyIdentity;
  baseline: Baseline;
  geographicProfile: GeographicProfile;

  // Electoral History
  electionResults: ElectionResults;
  electoralHistory: ElectoralHistory;
  voterEcosystem: VoterEcosystem;
  voteShareAnalysis: VoteShareAnalysis;
  voteShareAnalysisDeep: VoteShareAnalysisDeep;

  // Demographics
  casteComposition: CasteComposition[];
  demographics: Demographics;
  demographicDeepDive: DemographicDeepDive;

  // Issues & Sentiment
  localIssues: LocalIssues;
  keyLocalIssues: KeyLocalIssue[];

  // Governance
  governanceAudit: GovernanceAudit;

  // Power Structure
  powerStructure: PowerStructure;
  influencersPowerStructure: InfluencersPowerStructure;

  // AAP Analysis
  aapVulnerabilityAnalysis: AAPVulnerabilityAnalysis;

  // Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  congressStrategicBlueprint: CongressStrategicBlueprint;
  congressStrategy: CongressStrategy;

  // Candidate
  recommendedCandidateProfile: RecommendedCandidateProfile;
  candidateProfile: CandidateProfile[];

  // Attack Lines
  attackLinesAgainstAAP: AttackLinesAgainstAAP;

  // Strategic Blueprint
  strategicBlueprint: StrategicBlueprint;
  recommendationsSummary: RecommendationsSummary;
  strategicAssessment: StrategicAssessment;

  // Priority Ranking
  priorityRanking: PriorityRanking[];

  // Data Quality
  dataQuality: DataQuality;
  sourceMetadata: SourceMetadata;
}
