/**
 * AC095-Maur Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC095-Maur.md, AC095-Maur-deep.md
 */

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

export interface ConstituencyBaseline {
  areaCharacter: string;
  terrain: string;
  parliamentarySegment: string;
}

export interface ExecutiveSummary {
  overview: string;
  keyFinding: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votesReceived: string;
  voteShare: string;
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
  totalElectors: string;
  turnout: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  totalElectors: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017 | null;
  results2012: null;
  turnoutPattern: string;
  marginTrend: string;
}

export interface KeyCandidates2022 {
  candidate: string;
  party: string;
  status: "verified" | "needs_verification";
}

export interface ElectoralHistoryRecord {
  year: number;
  winner: string;
  party: string;
  margin: string;
  status: "verified" | "needs_verification";
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  source: string;
  jathSikh: string;
  hinduGeneral: string;
  sc: string;
  obc: string;
  other: string;
}

export interface CasteCompositionDeep {
  jathSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
  verificationStatus: "verified" | "needs_verification";
}

export interface ReligionDistribution {
  sikh: string;
  hindu: string;
  others: string;
  source: string;
}

export interface Demographics {
  totalPopulation: string;
  totalElectors: string;
  voterTurnout: string;
  ruralVoters: string;
  casteComposition: CasteComposition;
  religionDistribution: ReligionDistribution;
  verificationStatus: "needs_verification" | "partial" | "verified";
}

export interface DistrictDemographics {
  district: string;
  sikh: string;
  hindu: string;
  others: string;
  source: string;
}

// ============================================================================
// CASTE COMPOSITION - DEEP
// ============================================================================

export interface CasteCompositionData {
  jathSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
  verificationStatus: "needs_verification";
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  prioritySegment: string[];
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
  verificationStatus: "verified" | "needs_verification";
}

export interface PublicSentimentIndicators {
  drugCrisis: string;
  agriculturalDistress: string;
  unemployment: string;
  infrastructureGaps: string;
  healthFacilities: string;
}

export interface CongressStrategicPosition {
  currentStatus: string;
  challenges: string[];
  requirements: string[];
}

export interface RecommendedCandidateProfile {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoter: string[];
}

export interface AttackLine {
  issue: string;
  narrative: string;
}

export interface AttackLinesAgainstAAP {
  lines: AttackLine[];
}

export interface StrategicConsiderations {
  antiIncumbency: string;
  ruralDistress: string;
  coalitionApproach: string;
}

// ============================================================================
// DEEP RESEARCH - EXECUTIVE SUMMARY
// ============================================================================

export interface DeepResearchExecutiveSummary {
  overview: string;
  keyIssues: string[];
  politicalLandscape: string;
}

export interface DeepConstituencyProfile {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  category: string;
  parliamentaryConstituency: string;
}

export interface DeepElectoralHistory2022 {
  winner: string;
  party: string;
  votesReceived: string;
  runnerUp: string;
  margin: string;
  turnout: string;
  totalElectors: string;
}

export interface DeepElectoralHistoryCandidate {
  candidate: string;
  party: string;
  status: "verified" | "needs_verification";
}

export interface DeepElectoralHistory {
  year: number;
  winner: string;
  party: string;
  margin: string;
  status: "verified" | "needs_verification" | "partial";
}

export interface DistrictContext {
  districtName: string;
  religionDistribution: ReligionDistribution;
}

export interface DeepResearchData {
  executiveSummary: DeepResearchExecutiveSummary;
  constituencyProfile: DeepConstituencyProfile;
  electionResults2022: DeepElectoralHistory2022;
  keyCandidates2022: DeepElectoralHistoryCandidate[];
  demographics: Demographics;
  electoralHistory: DeepElectoralHistory[];
  districtContext: DistrictContext;
  publicSentimentIndicators: PublicSentimentIndicators;
  currentMLA: string;
  intelligenceGaps: string[];
  recommendations: string[];
}

export interface MainDossierData {
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  electionHistory: ElectionHistory;
  demographics: Demographics;
  keyLocalIssues: KeyLocalIssues;
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  sources: string[];
}

export interface CongressStrategy2027 {
  leverageAntiIncumbency: boolean;
  candidateRequirement: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

export interface DeepResearch {
  executiveSummary: string;
  constituencyProfile: DeepConstituencyProfile;
  electionResults2022: DeepElectoralHistory2022;
  keyCandidates2022: DeepElectoralHistoryCandidate[];
  demographics: Demographics;
  electoralHistory: DeepElectoralHistory[];
  currentMLA: string;
  intelligenceGaps: string[];
  recommendations: CongressStrategy2027;
}

export interface MaurDossierComplete {
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
}

// ============================================================================
// DATA SOURCE TRACKING
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete" | "verified";
  verificationNeeded: string[];
  intelligenceGaps: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC095MaurTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  executiveSummary: ExecutiveSummary;

  // Elections
  electionHistory: ElectionHistory;
  keyCandidates2022: KeyCandidates2022[];

  // Demographics
  demographics: Demographics;
  casteCompositionDeep: CasteCompositionDeep;
  districtDemographics: DistrictDemographics;

  // Issues & Sentiment
  keyLocalIssues: KeyLocalIssues;
  publicSentimentIndicators: PublicSentimentIndicators;
  congressStrategicPosition: CongressStrategicPosition;

  // Strategy
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  strategicConsiderations: StrategicConsiderations;

  // Deep Research
  deepResearch: DeepResearchData;
  congressStrategy2027: CongressStrategy2027;

  // Quality
  dataQuality: DataQuality;
}
