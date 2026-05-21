/**
 * AC076-Firozpur City Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC076-Firozpur-City.md, AC076-FirozpurCity-deep.md
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
  date: string;
}

export interface ConstituencyOverview {
  summary: string;
  borderSignificance: string;
  urbanCharacter: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  subDistrictsCovered: string[];
  areaCharacter: string;
  terrain: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

export interface GeographicBoundaries {
  district: string;
  locationDescription: string;
  borderArea: string;
  keyAreas: string[];
}

export interface UrbanRuralComposition {
  character: string;
  borderCharacter: string;
  economy: string;
}

// ============================================================================
// HISTORICAL CONTEXT
// ============================================================================

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  localHeritage: string[];
}

export interface BorderContext {
  features: string[];
  historicalImportance: string;
  strategicLocation: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  marginVotes: number;
  totalElectors?: string;
  voterTurnout?: string;
  votesPolled?: string;
  runnerUp: string;
  runnerUpParty: string;
  congressVotes?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  status: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  margin: string;
  status: string;
}

export interface ElectoralHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  coreVoters: string[];
  swingFactors: string[];
}

export interface PartyPerformanceTrend {
  year: number;
  aap: string;
  inc: string;
  sad: string;
  notes: string;
}

export interface VoterTurnout {
  2022: string;
  stateAverage: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DistrictDemographics {
  scPopulation: string;
  borderAreas: string;
  muslimPopulation: string;
}

export interface CasteComposition {
  jathSikh: string;
  sc: string;
  khatriArora: string;
  muslim: string;
}

export interface UrbanDemographics {
  brahmin: string;
  khatriArora: string;
  baniya: string;
  scPopulation: string;
  punjabiMuslim: string;
  sikhHinduMix: string;
}

export interface ReligiousComposition {
  predominant: string;
  hindu: string;
  muslim: string;
}

export interface Demographics {
  districtDemographics: DistrictDemographics;
  casteComposition: CasteComposition;
  urbanDemographics: UrbanDemographics;
  religiousComposition: ReligiousComposition;
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface PrimaryIssue {
  rank: number;
  title: string;
  description: string;
}

export interface SecondaryIssue {
  title: string;
  description: string;
}

export interface KeyIssues {
  primaryIssues: PrimaryIssue[];
  secondaryIssues: SecondaryIssue[];
}

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  prioritySegment?: string[];
}

export interface LocalIssues {
  issues: LocalIssue[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressCurrentStatus {
  lastResult: string;
  challenge: string;
  historicalPosition: string;
}

export interface CongressChallenges {
  challenges: string[];
}

export interface CongressOpportunities {
  opportunities: string[];
}

export interface CongressStrategicPosition {
  currentStatus: CongressCurrentStatus;
  keyChallenges: CongressChallenges;
  opportunities: CongressOpportunities;
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface IdealCandidate {
  caste: string;
  background: string;
  profile: string;
  priority: string;
}

export interface SelectionCriteria {
  criteria: string[];
}

export interface RecommendedCandidate {
  idealCandidate: IdealCandidate;
  selectionCriteria: SelectionCriteria;
}

export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AAPVulnerabilities {
  vulnerabilities: string[];
}

export interface CongressNarrative {
  narratives: string[];
}

export interface AttackLines {
  vulnerabilities: AAPVulnerabilities;
  congressNarrative: CongressNarrative;
}

// ============================================================================
// POLITICAL LANDSCAPE
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  term: string;
}

export interface PoliticalLandscape {
  currentMla: CurrentMLA;
  partyPerformanceTrend: PartyPerformanceTrend[];
}

// ============================================================================
// GOVERNANCE GAP
// ============================================================================

export interface ServiceDelivery {
  health: string;
  education: string;
  roads: string;
  waterSanitation?: string;
}

export interface SchemeImplementation {
  mgnrega?: string;
  beneficiaryLists?: string;
  pds?: string;
}

export interface GovernanceGap {
  serviceDelivery: ServiceDelivery;
  schemeImplementation: SchemeImplementation;
}

// ============================================================================
// POWER STRUCTURE
// ============================================================================

export interface NonPoliticalInfluencers {
  religious?: string[];
  casteLeaders?: string;
  professional?: string[];
}

export interface PoliticalNodes {
  exMla?: string;
  boothAgents?: string;
  influentialFamilies?: string;
}

export interface PowerStructure {
  nonPoliticalInfluencers: NonPoliticalInfluencers;
  politicalNodes: PoliticalNodes;
  casteEquations?: string;
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
// POLITICAL STRATEGY
// ============================================================================

export interface AttackLinesPolitical {
  drugCrisis?: string;
  unemployment?: string;
  brokenPromises?: string;
  governanceFailures?: string;
  urbanDecay?: string;
  borderSecurity?: string;
  tradeIssues?: string;
}

export interface CongressStrategy {
  currentPosition: string;
  incumbentName?: string;
  termCount?: number;
  challenges: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLinesPolitical;
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
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  item: string;
  status: "verified" | "needs_verification";
}

export interface IntelligenceGaps {
  missingData: IntelligenceGap[];
}

export interface DataGap {
  item: string;
}

export interface DataGaps {
  dataGaps: DataGap[];
}

// ============================================================================
// RECOMMENDATIONS
// ============================================================================

export interface CongressStrategyRecommendation {
  candidate: string;
  focus: string[];
  challenge: string;
}

export interface Recommendations {
  congressStrategy: CongressStrategyRecommendation;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete" | "verified";
  verificationNeeded?: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  summary: string;
  winner2022: string;
  party: string;
  borderSignificance: string;
}

// ============================================================================
// RESEARCH DOSSIER METADATA
// ============================================================================

export interface ResearchDossierMetadata {
  dossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC076FirozpurCityTypes {
  // Identity
  identity: ConstituencyIdentity;
  overview: ConstituencyOverview;
  baseline: ConstituencyBaseline;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
  historicalContext: HistoricalContext;
  borderContext: BorderContext;

  // Executive Summary & Metadata
  executiveSummary: ExecutiveSummary;
  researchMetadata: ResearchDossierMetadata;

  // Demographics
  demographics: Demographics;

  // Elections
  electionHistory: ElectoralHistory;
  politicalLandscape: PoliticalLandscape;
  voterTurnout: VoterTurnout;

  // Issues
  keyIssues: KeyIssues;
  localIssues: LocalIssues;

  // Congress Position
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  recommendations: Recommendations;

  // Strategy
  politicalStrategy: PoliticalStrategy;
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;

  // Governance
  governanceGap: GovernanceGap;

  // Power Structure
  powerStructure: PowerStructure;

  // Intelligence Gaps
  intelligenceGaps: IntelligenceGaps;
  dataGaps: DataGaps;

  // Quality
  dataQuality: DataQuality;
}
