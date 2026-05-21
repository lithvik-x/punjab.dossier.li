/**
 * AC050-Rupnagar Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC050-Rupnagar.md, AC050-Rupnagar-deep.md
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
  townType: string;
  date: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  location: string;
  areaCharacter: string;
  industrialPresence: string;
}

export interface ExecutiveSummary {
  overview: string;
  marginAnalysis: string;
  congressPotential: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CensusData {
  totalPopulation: string;
  sexRatio: string;
  scPopulation: string;
  literacyRate: string;
}

export interface TownDemographics {
  type: string;
  language: string;
  communities: string;
  industrialTown: boolean;
}

export interface DemographicDeepDive {
  censusData: CensusData;
  townDemographics: TownDemographics;
}

export interface ElectoralRollAnalytics {
  totalElectors2022: string;
  voterTurnout2022: string;
  turnoutPercentage2022: string;
  totalElectors2017: string;
  voterTurnout2017: string;
  turnoutPercentage2017: string;
}

export interface CasteComposition {
  sikhs: string;
  hindu: string;
  sc: string;
  other: string;
  keyDemographics: string[];
}

export interface CasteCompositionDeep {
  sikhsJatAndOthers: string;
  hindu: string;
  sc: string;
  other: string;
  keyNote: string;
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
  totalCandidates: number;
  urbanRuralMix: string;
  industrialPresence: boolean;
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
  historicalPattern: string;
  keyTrend: string;
}

export interface ElectoralHistory {
  results2022: ElectionResult2022;
  runnerUp: string;
  runnerUpParty: string;
  marginOfVictory: string;
  totalCandidates: number;
  urbanRuralMix: string;
  industrialPresence: boolean;
}

export interface VoteShareAnalysis {
  aap: string;
  inc: string;
  sad: string;
  bjp: string;
  others: string;
  congressGapToWin: string;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface Issue {
  rank: number;
  title: string;
  description: string;
}

export interface PublicSentiment {
  keySentimentIndicators: string[];
  urbanDominance: string;
  industrialTownConcerns: string;
  youthEmploymentExpectations: string;
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

export interface LocalIssues {
  topIssues: Issue[];
  governanceGaps: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface AdministrativeStructure {
  districtCollector: string;
  municipalCorporation: string;
  industrialArea: string;
}

export interface GovernanceGap {
  administrativeStructure: AdministrativeStructure;
  keyConcerns: string[];
}

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
  prioritySegment: string[];
}

export interface LocalIssue {
  title: string;
  description: string;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface KeyInfluencer {
  category: string;
  description: string;
}

export interface InfluencersPowerStructure {
  keyInfluencers: KeyInfluencer[];
  industrialists: string;
  aapLocalLeaders: string;
  bjpLeaders: string;
  naraingarhConnection: string;
  formerMLAs: string;
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface AAPStrategy {
  maintainMargin: string;
  industrialDevelopmentPromises: string;
  urbanSchemes: string;
}

export interface BPPStrategy {
  strongChallengePossible: boolean;
  naraingarhIndustrialBase: string;
  centralSchemes: string;
}

export interface CongressStrategy {
  weakenedPosition: boolean;
  rebuildingNeeded: string;
}

export interface StrategicBlueprint {
  aapStrategy: AAPStrategy;
  bjpStrategy: BPPStrategy;
  congressStrategy: CongressStrategy;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: string;
  lossIn2022: string;
  opportunity: string;
  strategy: string;
}

export interface StrategicRecommendations {
  candidate: string;
  urbanFocus: string;
  ruralOutreach: string;
  drugNarrative: string;
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

export interface AttackLine {
  title: string;
  description: string;
}

export interface AttackLines {
  developmentFailures: string;
  brokenPromises: string;
  drugCrisis: string;
  mlaPerformance: string;
}

export interface CongressStrategyDeep {
  currentPosition: string;
  incumbentName: string;
  termCount: number;
  challenges: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidateProfile;
  attackLines: AttackLines;
  congressStrategy: CongressStrategyDeep;
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SwotStrengths {
  strengths: string[];
}

export interface SwotWeaknesses {
  weaknesses: string[];
}

export interface SwotOpportunities {
  opportunities: string[];
}

export interface SwotThreats {
  threats: string[];
}

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================================================
// RECOMMENDATIONS
// ============================================================================

export interface PriorityLevel {
  level: string;
  rationale: string;
}

export interface RecommendationsSummary {
  priority: PriorityLevel;
  candidate: string;
  narrative: string;
  voterCoalition: string;
  marginReversalPotential: PriorityLevel;
}

// ============================================================================
// DATA SOURCE TRACKING
// ============================================================================

export interface DataSource {
  name: string;
}

export interface ResearchStatus {
  status: "VERIFIED" | "PARTIALLY VERIFIED" | "NEEDS VERIFICATION";
  sourcesConsulted: string[];
  dataCurrency: string;
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC050RupnagarTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  executiveSummary: ExecutiveSummary;

  // Demographics
  demographicDeepDive: DemographicDeepDive;
  electoralRollAnalytics: ElectoralRollAnalytics;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;

  // Elections
  electionHistory: ElectionHistory;
  electoralHistory: ElectoralHistory;
  voteShareAnalysis: VoteShareAnalysis;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  localIssues: LocalIssues;

  // Power Structure
  influencersPowerStructure: InfluencersPowerStructure;
  strategicBlueprint: StrategicBlueprint;

  // Strategy
  congressStrategicPosition: CongressStrategicPosition;
  strategicRecommendations: StrategicRecommendations;
  politicalStrategy: PoliticalStrategy;
  swotAnalysis: SwotAnalysis;
  recommendationsSummary: RecommendationsSummary;

  // Quality
  dataQuality: DataQuality;
}
