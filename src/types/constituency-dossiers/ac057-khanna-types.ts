/**
 * AC057-Khanna Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC057-Khanna.md and AC057-Khanna-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  lokSabhaSeat: string;
  character: string;
  borderStatus: string;
}

export interface ConstituencyBaseline {
  geographicProfile: string[];
  areaCharacter: string;
  mixType: string;
}

export interface ResearchMetadata {
  taskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: "VERIFIED" | "PARTIALLY VERIFIED";
  dataCurrency: string;
}

// ============================================================================
// ELECTORAL HISTORY & RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votes?: string;
  voteShare?: string;
  margin?: string;
  runnerUp: string;
  runnerUpParty: string;
  totalElectors?: string;
  voterTurnout?: string;
  votesPolled?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  pattern: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  pattern: string;
}

export interface ElectoralHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  historicalTrend: string;
  marginNote?: string;
}

export interface VoterTurnoutTrend {
  year: number;
  turnoutPercent: string;
  notes: string;
}

export interface ElectorateData2022 {
  totalElectors: string;
  votesPolled?: string;
  voterTurnout: string;
}

// ============================================================================
// DEMOGRAPHIC DEEP-DIVE
// ============================================================================

export interface PopulationComposition {
  category: string;
  estimatedPercent: string;
  notes?: string;
}

export interface KeyCommunities {
  KhatriArora: string;
  Baniya: string;
  JatSikh: string;
  SC: string;
}

export interface CasteComposition {
  source: string;
  composition: PopulationComposition[];
  keyCommunities: KeyCommunities;
}

export interface VoterEcosystem {
  electorateData: ElectorateData2022;
  turnoutTrend: VoterTurnoutTrend[];
}

// ============================================================================
// LOCAL ISSUES & GRIEVANCES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string[];
}

export interface IssuePriority {
  issue: string;
  description: string;
}

export interface LocalIssuesData {
  topIssues: LocalIssue[];
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
  mlaTenure: string;
}

export interface MLAPerformance {
  name: string;
  party: string;
  background: string[];
  performance: string;
}

export interface GovernanceAudit {
  administrativeStructure: AdministrativeStructure;
  mlaPerformance: MLAPerformance;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  description: string[];
  role: string;
}

export interface InfluencerGroup {
  name: string;
  description: string[];
}

export interface PowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
  traderMerchantAssociations: InfluencerGroup;
}

// ============================================================================
// AAP VULNERABILITY ANALYSIS
// ============================================================================

export interface VulnerabilityPoint {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AapVulnerability {
  whyVulnerable: string[];
  weakPoints: VulnerabilityPoint[];
}

export interface AAPVulnerabilityAnalysis {
  vulnerabilities: AapVulnerability;
}

// ============================================================================
// CONGRESS STRATEGIC BLUEPRINT
// ============================================================================

export interface CongressCurrentPosition {
  result2022: string;
  opportunity: string;
  challenge: string;
}

export interface CommunityOutreach {
  community: string;
  points: string[];
}

export interface CandidateSelectionCriteria {
  background: string[];
  caste: string;
  age: string;
}

export interface CongressStrategy {
  currentPosition: CongressCurrentPosition;
  businessCommunityOutreach: CommunityOutreach[];
  industrialWorkersOutreach: string[];
  candidateSelection: CandidateSelectionCriteria;
}

export interface WinningStrategy {
  phases: string[];
  businessCommunityOutreach: CommunityOutreach[];
  industrialWorkers: string[];
  candidateSelection: CandidateSelectionCriteria;
}

// ============================================================================
// CANDIDATE RECOMMENDATION
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  requirement: string;
}

export interface CandidateRecommendation {
  idealProfile: CandidateAttribute[];
  priorityApproach: string[];
}

// ============================================================================
// VOTE SHARE ANALYSIS & 2027 PROJECTION
// ============================================================================

export interface PartyVoteShare {
  party: string;
  sharePercent: string;
  votesEstimate?: string;
}

export interface CongressGapAnalysis {
  margin: string;
  position: string;
  keyFactor: string;
}

export interface PriorityRanking {
  tier: string;
  description: string;
  seatDetails?: string[];
}

export interface VoteShareAnalysis {
  results2022Breakdown: PartyVoteShare[];
  congressGapAnalysis: CongressGapAnalysis;
  projection2027: PriorityRanking;
  priorityRanking: PriorityRanking;
}

// ============================================================================
// STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: string;
  challenge: string;
  opportunity: string;
}

export interface StrategicConsiderations {
  factors: string[];
}

export interface CongressRecommendations {
  recommendations: string[];
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
// DATA QUALITY
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "VERIFIED" | "PARTIALLY VERIFIED" | "NEEDS MARGIN VERIFICATION";
  verificationNeeded?: string[];
}

export interface DataQuality {
  sources: DataSource[];
  compiled: string;
  status: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC057KhannaTypes {
  // Identity
  metadata: ResearchMetadata;
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;

  // Electoral
  electoralHistory: ElectoralHistory;
  voterEcosystem: VoterEcosystem;

  // Demographics
  casteComposition: CasteComposition;

  // Issues
  localIssues: LocalIssuesData;

  // Governance
  governanceAudit: GovernanceAudit;

  // Power Structure
  powerStructure: PowerStructure;

  // AAP Analysis
  aapVulnerability: AAPVulnerabilityAnalysis;

  // Congress Strategy
  congressStrategy: CongressStrategy;

  // Candidate
  candidateRecommendation: CandidateRecommendation;

  // Vote Share
  voteShareAnalysis: VoteShareAnalysis;

  // Strategic Position
  strategicPosition: {
    congress: CongressStrategicPosition;
    considerations: StrategicConsiderations;
    recommendations: CongressRecommendations;
  };

  // Attack Lines
  attackLines: AttackLinesAgainstAAP;

  // Data Quality
  dataQuality: DataQuality;
}
