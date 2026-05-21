/**
 * AC058-Samrala Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC058-Samrala.md, AC058-Samrala-deep.md
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

export interface ExecutiveSummary {
  overview: string;
  winner: string;
  margin: string;
  congressOpportunity: string;
}

export interface DeepConstituencyIdentity {
  acNo: string;
  name: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  character: string;
  borderStatus: string;
}

export interface GeographicProfile {
  description: string;
  community: string;
  mix: string;
  ludhianaInfluence: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  runnerUp: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectionHistory {
  result2022: ElectionResult2022;
  result2017: ElectionResult2017;
  result2012: ElectionResult2012;
  keyTrend: string;
}

export interface DeepElectoralHistory2022 {
  candidate: string;
  party: string;
  votes: string;
  voteShare: string;
  margin: string;
}

export interface DeepElectoralHistoryOther {
  candidate: string;
  party: string;
  votes: string;
  voteShare: string;
  position: string;
}

export interface DeepElectoralHistory {
  election2022: DeepElectoralHistory2022;
  congress: DeepElectoralHistoryOther;
  sad: DeepElectoralHistoryOther;
  keyNotes: {
    totalElectors: string;
    voterTurnout: string;
    aapWon: string;
  };
}

export interface ElectoralHistoryDetailed {
  election2022: DeepElectoralHistory;
  election2017: {
    winner: string;
    party: string;
    pattern: string;
  };
  election2012: {
    winner: string;
    party: string;
    pattern: string;
  };
  historicalTrend: string;
}

export interface HistoricalTrendAnalysis {
  trend: string;
  marginAssessment: string;
}

// ============================================================================
// ELECTORATE DATA
// ============================================================================

export interface ElectorateRecord {
  election: string;
  totalElectors: string;
  voterTurnout: string;
  turnoutPercentage: string;
}

export interface ElectorateData {
  records: ElectorateRecord[];
}

export interface VoterTurnoutTrend {
  year: string;
  turnoutPercentage: string;
  notes: string;
}

export interface VoterEcosystem {
  electorate2022: {
    totalElectors: string;
    votesPolled: string;
    voterTurnout: string;
  };
  turnoutTrend: VoterTurnoutTrend[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
  notes?: string;
}

export interface CasteCompositionData {
  categories: CasteCategory[];
  keyDemographics: string[];
}

export interface PopulationComposition {
  categories: CasteCategory[];
  keyCommunities: {
    community: string;
    role: string;
  }[];
}

export interface DemographicDeepDive {
  populationComposition: PopulationComposition;
  keyCommunities: {
    community: string;
    role: string;
  }[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  subIssues?: string[];
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

export interface Top5Issues {
  issue: string;
  details: string[];
}

export interface LocalIssuesGrievances {
  top5Issues: Top5Issues[];
}

export interface DeepLocalIssues {
  issues: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  lossIn2022: string;
  opportunity: string;
  challenge: string;
}

export interface CongressCurrentPosition {
  status: string;
  opportunity: string;
  marginReversal: string;
}

export interface StrategicRecommendations {
  recommendations: string[];
}

export interface CongressRecommendations {
  list: string[];
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

export interface IdealCandidateProfile {
  attribute: string;
  requirement: string;
}

export interface CandidateRecommendation {
  table: IdealCandidateProfile[];
  priorityApproach: string[];
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  rank: number;
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
  estimatedPercentage: string;
  estimatedVotes?: string;
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
  congressGapToWin: string;
}

export interface VoteShareAnalysisDeep {
  parties: PartyVoteShare[];
  congressGapAnalysis: {
    votesNeeded: string;
    sadVotersToTarget: string;
    aapFlipNeeded: string;
  };
}

export interface CongressGapAnalysis {
  votesNeeded: string;
  sadVotersToTarget: string;
  aapFlipNeeded: string;
}

// ============================================================================
// RECOMMENDATIONS SUMMARY
// ============================================================================

export interface RecommendationsSummary {
  priority: string;
  priorityLevel: "CRITICAL" | "HIGH" | "MODERATE" | "LOW";
  candidate: string;
  narrative: string;
  groundGame: string;
  marginReversalPotential: string;
}

// ============================================================================
// GOVERNANCE & MLA
// ============================================================================

export interface AdministrativeStructure {
  district: string;
  dc: string;
  mla: string;
}

export interface MLAAssessment {
  name: string;
  background: string;
  performance: string;
}

export interface GovernanceAudit {
  administrative: AdministrativeStructure;
  mlaPerformance: MLAAssessment;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  affiliation: string;
  description: string[];
  role?: string;
}

export interface InfluencersPowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
  farmerUnionLeaders?: {
    name: string;
    description: string[];
    influence: string;
  };
}

// ============================================================================
// AAP VULNERABILITY ANALYSIS
// ============================================================================

export interface AAPVulnerabilityPoint {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AAPWeakPoints {
  points: AAPVulnerabilityPoint[];
}

export interface AAPVulnerabilityAnalysis {
  whyVulnerable: string[];
  weakPoints: AAPVweakPoints;
}

export interface AAPVweakPoints {
  points: AAPVulnerabilityPoint[];
}

export interface AAPMLAProfile {
  name: string;
  background: string;
  voterConnect: string;
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface Phase1FarmerCoalition {
  farmerUnionAlliance: {
    groups: string[];
    narrative: string;
    focus: string[];
  };
  boothLevelOrganization: {
    workers: string;
    networks: string;
    management: string;
  };
  candidateSelection: {
    type: string;
    background: string;
    age: string;
  };
}

export interface CongressStrategy {
  currentPosition: CongressCurrentPosition;
  winningStrategy: {
    phase1: Phase1FarmerCoalition;
  };
}

export interface CongressStrategicBlueprint {
  currentPosition: CongressCurrentPosition;
  winningStrategy: CongressStrategy;
}

// ============================================================================
// PRIORITY RANKING
// ============================================================================

export interface PriorityRanking {
  tier: string;
  margin: string;
  description: string;
}

export interface PriorityRankingList {
  ac058: {
    name: string;
    margin: string;
  };
  ac055: {
    name: string;
    margin: string;
  };
  ac056: {
    name: string;
    margin: string;
  };
}

// ============================================================================
// 2027 PROJECTION
// ============================================================================

export interface Projection2027 {
  tier: string;
  margin: string;
  agriculturalTraditionalArea: string;
  farmerCoalitionKey: string;
}

export interface VoteShare2027Projection {
  projection2027: Projection2027;
  priorityRanking: PriorityRankingList;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface VerificationStatus {
  status: "VERIFIED" | "PARTIALLY VERIFIED" | "UNVERIFIED";
  notes: string[];
}

export interface DataQuality {
  sources: string[];
  compiledDate: string;
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

export interface SourceMetadata {
  researchMicroTaskId: string;
  topic: string;
  tier: string;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: string;
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC058SamralaTypes {
  // Identity
  sourceMetadata: SourceMetadata;
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;
  deepConstituencyIdentity: DeepConstituencyIdentity;
  geographicProfile: GeographicProfile;

  // Elections
  electionHistory: ElectionHistory;
  electoralHistoryDetailed: ElectoralHistoryDetailed;
  historicalTrendAnalysis: HistoricalTrendAnalysis;

  // Demographics
  casteComposition: CasteCompositionData;
  demographicDeepDive: DemographicDeepDive;

  // Electorate
  electorateData: ElectorateData;
  voterEcosystem: VoterEcosystem;

  // Issues
  keyLocalIssues: KeyLocalIssues;
  localIssuesGrievances: LocalIssuesGrievances;

  // Governance
  governanceAudit: GovernanceAudit;

  // Influencers
  influencersPowerStructure: InfluencersPowerStructure;

  // AAP Analysis
  aapVulnerabilityAnalysis: AAPVulnerabilityAnalysis;

  // Strategy
  congressStrategicPosition: CongressStrategicPosition;
  congressStrategicBlueprint: CongressStrategicBlueprint;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  candidateRecommendation: CandidateRecommendation;
  attackLines: AttackLinesAgainstAAP;
  voteShareAnalysis: VoteShareAnalysis;
  voteShareAnalysisDeep: VoteShareAnalysisDeep;
  congressGapAnalysis: CongressGapAnalysis;

  // 2027
  voteShare2027Projection: VoteShare2027Projection;

  // Recommendations
  recommendationsSummary: RecommendationsSummary;

  // Quality
  dataQuality: DataQuality;
}
