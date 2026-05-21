/**
 * AC110-Patiala Rural Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC110-Patiala-Rural.md, AC110-PatialaRural-deep.md
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
  dataCurrency: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  geographicContext: string;
  areaCharacter: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

export interface HistoricalContext {
  historicalSignificance: string;
  politicalImportance: string;
}

export interface EconomicIdentity {
  primaryActivities: string[];
  employmentPatterns: string[];
  areaDescription: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CensusData {
  totalPopulation: string;
  urban: string;
  sexRatio: string;
  literacyRate: string;
  casteWise: string;
}

export interface ElectoralRollAnalytics {
  totalElectors: string;
  voterTurnout2022: string;
  voterTurnoutStateAverage: string;
}

export interface CasteComposition {
  source: string;
  jathSikh: string;
  obc: string;
  sc: string;
  hinduUpperCaste: string;
  others: string;
}

export interface DistrictDemographics {
  totalPopulation: string;
  urban: string;
  sexRatio: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpNote?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  note?: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  swingFactors: string[];
  coreVoters: string[];
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

export interface PublicSentiment {
  mlaSatisfaction: string;
  trustInInstitutions: string;
  issues: KeyLocalIssue[];
  misinformationStatus: "verified" | "needs_verification";
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface GovernanceMetrics {
  health: string;
  education: string;
  infrastructure: string;
  waterSanitation: string;
}

export interface ActiveScheme {
  name: string;
  status: string;
}

export interface GovernanceGap {
  serviceDelivery: GovernanceMetrics;
  schemes: ActiveScheme[];
}

// ============================================================================
// POWER STRUCTURE
// ============================================================================

export interface KeyPoliticalFigure {
  name: string;
  role: string;
  party?: string;
  note?: string;
}

export interface PoliticalPlayers {
  currentMLA: KeyPoliticalFigure;
  formerLeaders: string[];
  notableCandidates?: string[];
}

export interface CommunityInfluencer {
  category: string;
  individuals: string[];
}

export interface PowerStructure {
  politicalPlayers: PoliticalPlayers;
  communityInfluencers: CommunityInfluencer[];
  casteEquations: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  tv: string[];
  digital: string[];
}

export interface MediaLandscape {
  inventory: MediaInventory;
  consumption: string;
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface PrioritySegment {
  segment: string;
  rationale: string;
}

export interface StrategicBlueprint {
  narratives: string[];
  prioritySegments: PrioritySegment[];
  mustWinBoothsStatus: "verified" | "needs_verification";
  resourceAllocationStatus: "verified" | "needs_verification";
}

// ============================================================================
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
  background: string;
}

export interface AttackLines {
  drugCrisis: string;
  unemployment: string;
  brokenPromises: string;
  governanceFailures: string;
  ruralNeglect?: string;
  farmerDistress?: string;
}

export interface CongressStrategy {
  currentPosition: string;
  historicalStrength: string;
  challenges: string[];
  termCount?: number;
  incumbentName?: string;
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategy;
}

// ============================================================================
// EXTERNAL FACTORS
// ============================================================================

export interface ExternalFactors {
  politicalShocks: string[];
  economicShocks: string[];
  socialEvents: string[];
  externalShocks: string[];
}

// ============================================================================
// RESEARCH & DATA QUALITY
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete";
  verificationNeeded: string[];
  intelligenceGaps?: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

export interface ResearchMetadata {
  microTaskId: string;
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

export interface AC110PatialaRuralTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;

  // Demographics
  censusData: CensusData;
  districtDemographics: DistrictDemographics;
  electoralRollAnalytics: ElectoralRollAnalytics;
  casteComposition: CasteComposition;

  // Elections
  electionHistory: ElectionHistory;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  issues: IssueTaxonomy[];

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: MediaLandscape;

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;

  // External
  externalFactors: ExternalFactors;

  // Quality
  dataQuality: DataQuality;
  researchMetadata: ResearchMetadata;
}
