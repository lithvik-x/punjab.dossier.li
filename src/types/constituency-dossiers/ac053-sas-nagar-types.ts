/**
 * AC053-SAS-Nagar Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC053-SAS-Nagar.md, AC053-SASNagar-deep.md
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
  party: string;
  margin: string;
  marginNote: string;
  congressOpportunity: string;
  keyInsight: string;
}

// ============================================================================
// GEOGRAPHIC PROFILE
// ============================================================================

export interface GeographicProfile {
  description: string;
  economy: string;
  residentialCharacter: string;
  commercialHub: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginType: "NARROW" | "MODERATE" | "WIDE";
  runnerUp: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectionHistory {
  result2022: ElectionResult2022;
  result2017: ElectionResult2017;
  keyTrend: string;
  historicalPattern: string;
}

export interface DeepElectoralHistory2022Candidate {
  candidate: string;
  party: string;
  votes: string;
  voteShare: string;
  margin: string;
}

export interface DeepElectoralHistory2022 {
  candidates: DeepElectoralHistory2022Candidate[];
  totalElectors: string;
  voterTurnout: string;
  turnoutPercentage: string;
  note: string;
}

export interface DeepElectoralHistory2017 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectoralHistoryDeep {
  election2022: DeepElectoralHistory2022;
  election2017: DeepElectoralHistory2017;
  historicalTrend: string;
}

export interface VoterTurnoutRecord {
  year: string;
  turnoutPercentage: string;
  notes: string;
}

export interface VoterTurnoutTrend {
  records: VoterTurnoutRecord[];
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

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
}

export interface KeyDemographics {
  points: string[];
}

export interface CasteComposition {
  categories: CasteCategory[];
  keyDemographics: KeyDemographics;
  totalSikhPercentage: string;
  totalHinduPercentage: string;
  totalSCPercentage: string;
  totalOtherPercentage: string;
}

export interface DeepDemographicPopulation {
  category: string;
  estimatedPercentage: string;
  notes: string;
}

export interface DeepDemographics {
  populationComposition: DeepDemographicPopulation[];
  urbanized: string;
  professionalClass: string;
  migratoryPopulation: string;
  higherIncome: string;
  nriPresence: string;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  subIssues?: string[];
  description: string;
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

export interface DeepLocalIssues {
  issues: LocalIssue[];
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

export interface MLAAssessment {
  name: string;
  profile: string;
  performance: string;
}

export interface GovernanceAudit {
  administrative: AdministrativeStructure;
  mlaAssessment: MLAAssessment;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  party: string;
  position: string;
  description: string;
}

export interface InfluencersPowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
}

// ============================================================================
// AAP VULNERABILITY
// ============================================================================

export interface AAPVulnerabilityPoint {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AAPVulnerabilityAnalysis {
  whyVulnerable: string[];
  weakPoints: AAPVulnerabilityPoint[];
}

export interface AAPStrategy {
  points: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  lossIn2022: string;
  challenge: string;
  urbanShift: string;
}

export interface StrategicConsiderations {
  points: string[];
}

export interface CongressRecommendations {
  list: string[];
}

export interface CongressStrategicBlueprint {
  currentPosition: string;
  timeframe: string;
  longTermBuild: CongressLongTermBuild;
}

export interface CongressLongTermBuild {
  urbanVoterAppeal: string[];
  sadCoalition: string[];
  candidateSelection: string[];
}

export interface CongressStrategy {
  canWin: string;
  needStrongCandidate: string;
  localIssuesFocus: string;
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  requirement: string;
}

export interface RecommendedCandidateProfile {
  table: CandidateAttribute[];
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
  sharePercentage: string;
  votesEstimated: string;
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
  congressGapAnalysis: CongressGapAnalysis;
}

export interface CongressGapAnalysis {
  votesNeeded: string;
  margin: string;
  targetVoters: string;
}

export interface VoteShareAnalysis2022 {
  party: string;
  sharePercentage: string;
}

export interface VoteShareDeep {
  results2022: PartyVoteShare[];
  gapAnalysis: CongressGapAnalysis;
  congressGapToWin: string;
  marginReversalPotential: string;
}

export interface PriorityRanking {
  tier: string;
  priority: string;
  margin: string;
  timeframe: string;
}

// ============================================================================
// 2027 PROJECTION
// ============================================================================

export interface AAPVulnerabilityFor2027 {
  points: string[];
}

export interface CongressStrategy2027 {
  targetSegment: string;
  narrative: string;
}

export interface StrategicBlueprint2027 {
  aapVulnerability: AAPVulnerabilityFor2027;
  congressStrategy: CongressStrategy2027;
}

export interface Projection2027 {
  tierRanking: PriorityRanking;
  analysis: string;
  strategicBlueprint: StrategicBlueprint2027;
}

// ============================================================================
// DEEP RESEARCH
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

export interface DeepResearch {
  constituencyIdentity: DeepConstituencyIdentity;
  geographicProfile: GeographicProfile;
  electoralHistory: ElectoralHistoryDeep;
  demographics: DeepDemographics;
  voterEcosystem: VoterTurnoutTrend;
  localIssues: DeepLocalIssues;
  governance: GovernanceAudit;
  influencers: InfluencersPowerStructure;
  aapVulnerability: AAPVulnerabilityAnalysis;
  congressBlueprint: CongressStrategicBlueprint;
  voteShare: VoteShareDeep;
  projection2027: Projection2027;
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

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC053SasNagarTypes {
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

  // Strategy
  congressStrategicPosition: CongressStrategicPosition;
  strategicConsiderations: StrategicConsiderations;
  congressRecommendations: CongressRecommendations;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
  voteShareAnalysis: VoteShareAnalysis;
  recommendationsSummary: RecommendationsSummary;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}

// ============================================================================
// RECOMMENDATIONS SUMMARY
// ============================================================================

export interface RecommendationsSummary {
  priority: string;
  priorityLevel: "CRITICAL" | "HIGH" | "MODERATE" | "LOW" | "MEDIUM-LOW";
  candidate: string;
  timeline: string;
  narrative: string;
  marginReversalPotential: string;
}
