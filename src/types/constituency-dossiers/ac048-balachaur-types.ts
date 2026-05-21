/**
 * AC048-Balachaur Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC048-Balachaur.md, AC048-Balachaur-deep.md
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
  marginNote: string;
  congressOpportunity: string;
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
  totalSikhPercentage: string;
  totalHinduPercentage: string;
  totalSCPercentage: string;
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

export interface DeepLocalIssues {
  issues: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  lossIn2022: string;
  opportunity: string;
  advantage: string;
}

export interface WhyCongressCanWin {
  factors: string[];
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
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
  congressGapToWin: string;
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

export interface SBSNagarDistrict {
  totalPopulation: string;
  description: string;
  ruralCharacter: string;
  borderAreaDemographics: string;
}

export interface DeepDemographics {
  sbsNagarDistrict: SBSNagarDistrict;
}

export interface DeepElectoralHistory2022 {
  candidate: string;
  party: string;
  votes: string;
  margin: string;
}

export interface DeepElectoralHistoryRunnerUp {
  candidate: string;
  party: string;
  votes: string;
}

export interface DeepElectoralHistory {
  election2022: DeepElectoralHistory2022;
  runnerUp: DeepElectoralHistoryRunnerUp;
  historicalPattern: string;
}

export interface PublicSentimentIndicators {
  narrowMarginVolatility: string;
  youthSupportForAAP: string;
  agriculturalCommunityConcerns: string;
}

export interface AAPStrategy {
  points: string[];
}

export interface CongressStrategyDeep {
  canWin: string;
  needStrongCandidate: string;
  localMobilization: string;
}

export interface SADBPPStrategy {
  canCombineToWin: string;
  agriculturalNarrative: string;
}

export interface StrategicBlueprint {
  aapStrategy: AAPStrategy;
  congressStrategy: CongressStrategyDeep;
  sadBppStrategy: SADBPPStrategy;
}

export interface DeepResearch {
  constituencyIdentity: DeepConstituencyIdentity;
  demographics: DeepDemographics;
  electoralHistory: DeepElectoralHistory;
  publicSentiment: PublicSentimentIndicators;
  localIssues: DeepLocalIssues;
  strategicBlueprint: StrategicBlueprint;
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
// RESEARCH MICRO-TASK METADATA
// ============================================================================

export interface ResearchMicroTask {
  taskId: string;
  topic: string;
  tier: string;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC048BalachaurTypes {
  // Metadata
  researchMicroTask: ResearchMicroTask;

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
  whyCongressCanWin: WhyCongressCanWin;
  strategicRecommendations: StrategicRecommendations;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
  voteShareAnalysis: VoteShareAnalysis;
  recommendationsSummary: RecommendationsSummary;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}
