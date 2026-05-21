/**
 * AC047-Nawan Shahar Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC047-Nawan-Shahar.md, AC047-NawanShahr-deep.md
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
  party: string;
  margin: string;
  runnerUp: string;
  note: string;
  congressChallenge: string;
  opportunity: string;
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

export interface CasteCompositionData {
  categories: CasteCategory[];
  keyDemographics: string[];
  totalSCPercentage: string;
  totalSikhPercentage: string;
  totalHinduPercentage: string;
  totalOtherPercentage: string;
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
  challenge: string;
  opportunity: string;
}

export interface StrategicConsiderations {
  considerations: string[];
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

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  rank: number;
  title: string;
  description: string;
}

export interface AttackLinesAgainstBSP {
  lines: AttackLine[];
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface PartyVoteShare {
  party: string;
  estimatedPercentage: string;
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
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

export interface ShahidBhagatSinghNagarDistrict {
  totalPopulation: string;
  scPopulation: string;
  urban: string;
}

export interface DeepDemographics {
  district: ShahidBhagatSinghNagarDistrict;
}

export interface ElectoralHistory2022 {
  candidate: string;
  party: string;
  votes: string;
  margin: string;
}

export interface ElectoralHistoryRunnerUp {
  candidate: string;
  party: string;
  votes: string;
}

export interface DeepElectoralHistory {
  election2022: ElectoralHistory2022;
  runnerUp: ElectoralHistoryRunnerUp;
  historicalPattern: string;
}

export interface PublicSentimentIndicators {
  dalitVoteConsolidation: string;
  congressWeakness: string;
  aapInabilityToBreak: string;
}

export interface BSPStrategy {
  points: string[];
}

export interface AAPStrategy {
  points: string[];
}

export interface CongressStrategyDeep {
  points: string[];
}

export interface StrategicBlueprint {
  bspStrategy: BSPStrategy;
  congressStrategy: CongressStrategyDeep;
  aapStrategy: AAPStrategy;
}

export interface CourseChangingFactor {
  wildcard: string;
  description: string;
}

export interface CourseChangingFactors {
  wildcards: CourseChangingFactor[];
}

export interface DeepResearch {
  constituencyIdentity: DeepConstituencyIdentity;
  demographics: DeepDemographics;
  electoralHistory: DeepElectoralHistory;
  publicSentiment: PublicSentimentIndicators;
  strategicBlueprint: StrategicBlueprint;
  courseChangingFactors: CourseChangingFactors;
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

export interface AC047NawanShahrTypes {
  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;

  // Elections
  electionHistory: ElectionHistory;
  electorateData: ElectorateData;

  // Demographics
  casteComposition: CasteCompositionData;

  // Issues
  keyLocalIssues: KeyLocalIssues;

  // Strategy
  congressStrategicPosition: CongressStrategicPosition;
  strategicConsiderations: StrategicConsiderations;
  congressRecommendations: CongressRecommendations;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstBSP;
  voteShareAnalysis: VoteShareAnalysis;
  recommendationsSummary: RecommendationsSummary;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}
