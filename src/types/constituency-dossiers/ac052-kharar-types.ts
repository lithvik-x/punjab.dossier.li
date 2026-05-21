/**
 * AC052-Kharar Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC052-Kharar.md, AC052-Kharar-deep.md
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
  date: string;
}

export interface ConstituencyProfile {
  acNumber: string;
  officialName: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  character: string;
}

export interface ExecutiveSummary {
  overview: string;
  winner: string;
  margin: string;
  runnerUp: string;
  congressOpportunity: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginVotes: number;
  runnerUp: string;
  totalElectors: number;
  voterTurnout: number;
  turnoutPercentage: number;
  marginType: "NARROW" | "MODERATE" | "WIDE";
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
  marginVotes: number;
}

export interface DeepElectoralHistoryRunnerUp {
  candidate: string;
  party: string;
  votes: string;
  voteShare: string;
}

export interface DeepElectoralHistory {
  election2022: DeepElectoralHistory2022;
  runnerUp: DeepElectoralHistoryRunnerUp;
  others: string;
  historicalPattern: string;
  aapWon: string;
  congressSadChallenge: string;
}

export interface ElectoralHistoryDeep {
  election2022: DeepElectoralHistory2022;
  runnerUp: DeepElectoralHistoryRunnerUp;
  election2017: ElectionResult2017;
  election2012: ElectionResult2012;
  historicalTrend: string;
  marginAnalysis: string;
}

export interface VoterEcosystem2022 {
  totalElectors: number;
  votesPolled: number;
  voterTurnout: number;
  turnoutPercentage: number;
  pollingStations: number;
}

export interface VoterTurnoutRecord {
  year: string;
  turnoutPercentage: string;
  notes: string;
}

export interface VoterTurnoutTrend {
  records: VoterTurnoutRecord[];
}

export interface ElectorateData {
  election2022: {
    totalElectors: number;
    voterTurnout: number;
    turnoutPercentage: number;
  };
  election2017: {
    totalElectors: string;
    voterTurnout: string;
    turnoutPercentage: string;
  };
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
}

export interface CasteComposition {
  categories: CasteCategory[];
  keyDemographics: string[];
}

export interface DeepCasteComposition {
  categories: CasteCategory[];
  keyDemographics: string[];
  totalSikhPercentage: string;
  totalHinduPercentage: string;
  totalSCPercentage: string;
  totalOtherPercentage: string;
}

export interface PopulationComposition {
  category: string;
  estimatedPercentage: string;
  notes: string;
}

export interface DemographicsDeepDive {
  populationComposition: PopulationComposition[];
  rapidUrbanization: string;
  chandigarhMigration: string;
  itServiceSector: string;
  realEstateDriven: string;
  mixedIncome: string;
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

export interface LocalIssueDetail {
  title: string;
  points: string[];
}

export interface LocalIssuesDetailed {
  issues: LocalIssueDetail[];
}

export interface IssueGrievance {
  issue: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
}

// ============================================================================
// GOVERNANCE
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
  age: string;
  image: string;
  performance: string;
  accessibility: string;
}

export interface GovernanceAudit {
  administrativeStructure: AdministrativeStructure;
  mlaPerformance: MLAPerformance;
}

export interface GovernanceGap {
  issue: string;
  currentStatus: string;
  voterSentiment: string;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  role: string;
  party: string;
  description: string;
}

export interface InfluencersPowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
  powerStructureNote: string;
}

export interface AAPVulnerabilityPoint {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: "ANGRY" | "FRUSTRATED" | "DISAPPOINTED" | "NEUTRAL";
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  lossIn2022: string;
  history: string;
  challenge: string;
  urbanVoterShift: string;
  sadVoters: string;
  hinduFactor: string;
  developmentNarrative: string;
}

export interface StrategicConsideration {
  factor: string;
  description: string;
}

export interface StrategicConsiderations {
  considerations: StrategicConsideration[];
}

export interface CongressStrategyPhase1 {
  targetSADVoters: string;
  hinduOutreach: string;
  candidateSelection: string;
}

export interface CongressCoalitionBuilding {
  phase1: CongressStrategyPhase1;
}

export interface CongressWinningStrategy {
  currentPosition: string;
  coalitionBuilding: CongressCoalitionBuilding;
}

export interface CongressStrategicBlueprint {
  currentPosition: string;
  winningStrategy: CongressWinningStrategy;
  phase1Timeline: string;
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
  priorityActions: string[];
}

export interface CandidateRecommendation {
  idealCandidate: RecommendedCandidateProfile;
  priority: string;
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
  sharePercentage: string;
  votesEstimate: string;
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
  congressGapToWin: string;
  congressGapVotes: number;
  gapCalculation: string;
}

export interface CongressGapAnalysis {
  votesNeeded: string;
  sadVotersToTarget: string;
  bjpVotersToTarget: string;
}

export interface VoteShare2027Projection {
  voteShare: PartyVoteShare[];
  gapAnalysis: CongressGapAnalysis;
  tierRanking: string;
  difficulty: string;
  margin: number;
  congressNeeds: string;
  candidateQuality: string;
}

// ============================================================================
// RECOMMENDATIONS SUMMARY
// ============================================================================

export interface RecommendationsSummary {
  priority: string;
  priorityLevel: "CRITICAL" | "HIGH" | "MODERATE" | "LOW";
  candidate: string;
  strategy: string;
  narrative: string;
  marginReversalPotential: string;
  marginReversalLevel: "VERY HIGH" | "HIGH" | "MEDIUM" | "LOW";
}

// ============================================================================
// AAP STRATEGY & VULNERABILITY
// ============================================================================

export interface AAPVulnerabilityAnalysis {
  whyVulnerable: string[];
  weakPoints: AAPVulnerabilityPoint[];
}

export interface AAPVulnerability {
  analysis: AAPVulnerabilityAnalysis;
}

export interface AAPVulnerablePoint {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: "ANGRY" | "FRUSTRATED" | "DISAPPOINTED" | "NEUTRAL";
}

// ============================================================================
// DEEP RESEARCH COMPREHENSIVE
// ============================================================================

export interface GeographicProfile {
  fastGrowingUrban: string;
  majorRealEstateHub: string;
  itServiceSectorPresence: string;
  commuterTown: string;
}

export interface DeepConstituencyIdentity {
  acNo: string;
  name: string;
  district: string;
  region: string;
  category: string;
  lokSabha: string;
  location: string;
  borderStatus: string;
  character: string;
  geographicProfile: GeographicProfile;
}

export interface DeepResearch {
  constituencyIdentity: DeepConstituencyIdentity;
  demographics: DemographicsDeepDive;
  electoralHistory: ElectoralHistoryDeep;
  voterEcosystem: VoterEcosystem2022;
  voterTurnoutTrend: VoterTurnoutTrend;
  localIssues: LocalIssuesDetailed;
  governanceAudit: GovernanceAudit;
  influencers: InfluencersPowerStructure;
  aapVulnerability: AAPVulnerability;
  congressStrategicBlueprint: CongressStrategicBlueprint;
  candidateRecommendation: CandidateRecommendation;
  voteShare2027Projection: VoteShare2027Projection;
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
  researchStatus: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC052KhararTypes {
  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;

  // Elections
  electionHistory: ElectionHistory;
  electorateData: ElectorateData;

  // Demographics
  casteComposition: CasteComposition;

  // Issues
  keyLocalIssues: KeyLocalIssues;

  // Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  strategicConsiderations: StrategicConsiderations;
  congressRecommendations: { list: string[] };

  // Candidate
  recommendedCandidateProfile: RecommendedCandidateProfile;

  // Attack Lines
  attackLines: AttackLinesAgainstAAP;

  // Vote Share
  voteShareAnalysis: VoteShareAnalysis;

  // Recommendations
  recommendationsSummary: RecommendationsSummary;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}
