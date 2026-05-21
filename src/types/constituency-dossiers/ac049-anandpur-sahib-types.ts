/**
 * AC049-Anandpur Sahib Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC049-Anandpur-Sahib.md, AC049-AnandpurSahib-deep.md
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
  religiousSignificance: string;
  date: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  subDistrictsCovered: string[];
  areaCharacter: string;
  terrain: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

export interface ExecutiveSummary {
  overview: string;
  keyFinding: string;
  marginAnalysis: string;
  symbolicSignificance: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  source: string;
  sikh: string;
  hindu: string;
  sc: string;
  other: string;
}

export interface DemographicsDeep {
  districtPopulation: string;
  sexRatio: string;
  scPopulationUrban: string;
  rural: string;
}

export interface ElectorateData {
  election: string;
  totalElectors: string;
  voterTurnout: string;
  turnoutPercentage: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginAnalysis: string;
  runnerUp: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  keyTrend: string;
  historicalPattern: string;
}

export interface VoteShareAnalysis {
  party: string;
  voteShare: string;
}

export interface VoteShareData {
  analysis: VoteShareAnalysis[];
  congressGapToWin: string;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface KeyIssue {
  rank: number;
  title: string;
  description: string;
}

export interface LocalIssues {
  issues: KeyIssue[];
}

export interface PublicSentimentIndicators {
  religiousSignificance: string;
  aapDominance: string;
  governanceExpectations: string;
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface AdministrativeStructure {
  dc: string;
  tehsil: string;
  religiousTrustBoards: string;
}

export interface SpecialConsiderations {
  harmoniconSahibManagement: string;
  religiousTourism: string;
  borderArea: string;
}

export interface GovernanceGap {
  administrativeStructure: AdministrativeStructure;
  specialConsiderations: SpecialConsiderations;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface KeyInfluencer {
  name: string;
  type: string;
}

export interface Influencers {
  sgpc: string;
  religiousLeaders: string;
  aapLeadership: string;
  localBodies: string;
}

export interface PowerStructure {
  keyInfluencers: Influencers;
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface AAPStrategy {
  maintainMargin: string;
  religiousTourismProjects: string;
  developmentShowcase: string;
}

export interface CongressStrategy {
  rebuildingEffort: string;
  traditionalVoteRetrieval: string;
}

export interface SADStrategy {
  historicalPresence: string;
  sgpcInfluence: string;
}

export interface StrategicBlueprint {
  aapStrategy: AAPStrategy;
  congressStrategy: CongressStrategy;
  sadStrategy: SADStrategy;
}

// ============================================================================
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidateProfile {
  caste: string;
  background: string;
  age: string;
  quality: string;
  connect: string;
}

export interface AttackLinesAgainstAAP {
  ministerialNonPerformance: string;
  brokenPromises: string;
  drugCrisis: string;
  developmentFailures: string;
}

export interface CongressStrategicPosition {
  lossIn2022: string;
  marginReversal: string;
  challenge: string;
  timeRequired: string;
}

export interface StrategicAssessment {
  marginAnalysis: string[];
  strategicIndicators: string[];
  recommendations: string[];
}

export interface RecommendationsSummary {
  priority: string;
  candidate: string;
  timeline: string;
  narrative: string;
  marginReversalPotential: string;
}

// ============================================================================
// DATA SOURCE TRACKING
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "verified" | "partial" | "needs_verification";
  dataCurrency: string;
  verificationStatus: string;
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC049AnandpurSahibTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  executiveSummary: ExecutiveSummary;

  // Demographics
  casteComposition: CasteComposition;
  demographicsDeep: DemographicsDeep;
  electorateData: ElectorateData[];

  // Elections
  electionHistory: ElectionHistory;
  voteShareData: VoteShareData;

  // Sentiment & Issues
  publicSentimentIndicators: PublicSentimentIndicators;
  localIssues: LocalIssues;

  // Governance
  governanceGap: GovernanceGap;

  // Power Structure
  powerStructure: PowerStructure;

  // Strategy
  strategicBlueprint: StrategicBlueprint;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  congressStrategicPosition: CongressStrategicPosition;
  strategicAssessment: StrategicAssessment;
  recommendationsSummary: RecommendationsSummary;

  // Quality
  dataQuality: DataQuality;
}
