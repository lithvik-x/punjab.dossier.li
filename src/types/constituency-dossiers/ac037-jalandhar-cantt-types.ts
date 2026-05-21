/**
 * AC037-Jalandhar-Cantt Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC037-Jalandhar-Cantt.md, AC037-JalandharCantt-deep.md
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

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  location: string;
  areaCharacter: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  localHeritage: string[];
}

export interface EconomicIdentity {
  primaryActivities: string[];
  employmentPatterns: string[];
  landholdingPatterns: string;
}

export interface SocioCulturalIdentity {
  language: string;
  religiousComposition: {
    sikh: string;
    hindu: string;
    muslim: string;
    christian: string;
  };
  casteCompositionStatus: "verified" | "needs_verification";
  culturalInstitutions: string[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CensusData {
  totalPopulation: string;
  scPopulation: string;
  stPopulation: string;
  urban: string;
}

export interface ElectoralRollAnalytics {
  totalElectors: string;
  voters: string;
  voterTurnout2022: string;
  genderGap: string;
  voterTurnout2017: string;
}

export interface SchemePenetration {
  pdsNfsa: string;
  mgnrega: string;
  pmKisan: string;
  ayushmanBharat: string;
}

export interface DigitalAccess {
  mobileInternetUrban: string;
  socialMedia: string[];
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votesSecured: number;
  voteShare: string;
  margin: string;
  marginVotes: number | null;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: number | null;
  totalElectors: string;
  voterTurnout: string;
  votesPolled: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
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
  coreVoters: string[];
  swingFactors: string[];
  historicalPattern: string;
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  hinduKhatriArora: string;
  sikhJatMazhabiMix: string;
  scMazhabiRamdasia: string;
  muslim: string;
  christian: string;
}

export interface CasteCompositionDeep {
  scPopulation: string;
  stPopulation: string;
  militaryFamilies: string;
  businessCommunity: string;
}

export interface DistrictDemographics {
  totalPopulation: string;
  urbanPopulation: string;
  scPopulation: string;
  scPercentage: string;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface Issue {
  rank: number;
  title: string;
  description: string;
  prioritySegment: string[];
}

export interface PublicSentiment {
  keySentimentIndicators: string[];
  pulse: string[];
  issues: Issue[];
  misinformationStatus: "verified" | "needs_verification";
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

export interface GrievanceHotspots {
  locations: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface GovernanceMetrics {
  publicGrievanceRedressal: string;
  cantonmentBoardDigitization: string;
}

export interface GovernanceGaps {
  civilCantonmentCoordination: string;
  encroachment: string;
  historicalStructures: string;
}

export interface GovernanceAudit {
  cantonmentBoard: string;
  districtCollector: string;
  municipalCorporation: string;
  recentInitiatives: GovernanceMetrics;
  gaps: GovernanceGaps;
}

export interface ServiceDelivery {
  health: string;
  education: string;
  roads: string;
  waterSanitation: string;
}

export interface SchemeImplementation {
  mgnrega: string;
  beneficiaryLists: string;
  pds: string;
}

export interface GovernanceStructure {
  administrativeUnits: string[];
  recentInitiatives: GovernanceMetrics;
  gaps: GovernanceGaps;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalPlayers {
  cantonmentBoardAuthorities: string;
  exServicemenAssociations: string;
  tradeBodies: string;
  militaryWelfareAssociations: string;
  localBJPLeaders: string;
}

export interface PowerCenters {
  cantonmentBoard: string;
  veteranNetworks: string;
  businessAssociations: string;
}

export interface NonPoliticalInfluencers {
  religious: string[];
  casteLeaders: string;
  professional: string[];
}

export interface PoliticalNodes {
  exMla: string;
  boothAgents: string;
}

export interface PowerStructure {
  politicalPlayers: PoliticalPlayers;
  powerCenters: PowerCenters;
  nonPoliticalInfluencers: NonPoliticalInfluencers;
  politicalNodes: PoliticalNodes;
  casteEquations: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  tv: string[];
  digital: string[];
  communityMedia: string[];
}

export interface MediaConsumption {
  bySegment: string;
}

export interface MediaInfluencers {
  localJournalists: string;
  politicalCommentators: string;
  socialMediaActivists: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyAreas {
  jalandharCantonment: string;
  civilLines: string;
  sadarBazaar: string;
  modelTown: string;
  newJawaharNagar: string;
}

export interface Boundaries {
  adjacent: string;
  parliamentarySeat: string;
}

export interface BoothLogistics {
  status: "verified" | "needs_verification";
  locations?: string[];
}

export interface CampaignInfrastructure {
  rallyGrounds: string;
  hoardingSpots: string;
}

export interface PhysicalMapping {
  keyAreas: KeyAreas;
  boundaries: Boundaries;
  boothLogistics: BoothLogistics;
  campaignInfrastructure: CampaignInfrastructure;
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
  keyQualifications: string[];
  incumbentAdvantage: string;
}

export interface AttackLines {
  pargatSinghService: string;
  aapPerformance: string;
  drugCrisis: string;
  canttDevelopment: string;
  localRepresentative: string;
}

export interface CongressStrategy {
  currentPosition: string;
  incumbentName: string;
  termCount: number;
  margin: string;
  keyFactors: string[];
  challenges: string[];
}

export interface AAPStrategy {
  narrative: string;
  focusAreas: string[];
}

export interface SADBJPStrategy {
  narrative: string;
  focusAreas: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategy;
  aapStrategy: AAPStrategy;
  sadbjpStrategy: SADBJPStrategy;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcards {
  cantonmentBoardElections: string;
  defenseLandDevelopment: string;
  candidateSelection: string;
  localDevelopmentFunds: string;
}

export interface MonitoringTriggers {
  armyRecruitmentDrives: string;
  cantonmentBoardDecisions: string;
  defenseCorridorAnnouncements: string;
}

export interface ExternalFactors {
  politicalShocks: string[];
  economicShocks: string[];
  socialEvents: string[];
  externalShocks: string[];
  wildcards: Wildcards;
  monitoringTriggers: MonitoringTriggers;
}

// ============================================================================
// RESEARCH METADATA (from deep research file)
// ============================================================================

export interface ResearchMicroTask {
  taskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: "verified" | "partially_verified" | "needs_verification";
  dataCurrency: string;
}

// ============================================================================
// DATA SOURCE TRACKING
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete";
  verificationNeeded: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
  researchMicroTask?: ResearchMicroTask;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC037JalandharCanttTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;

  // Demographics
  censusData: CensusData;
  districtDemographics: DistrictDemographics;
  electoralRollAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;
  digitalAccess: DigitalAccess;

  // Elections
  electionHistory: ElectionHistory;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceAudit: GovernanceAudit;
  governanceStructure: GovernanceStructure;
  governanceGap: {
    serviceDelivery: ServiceDelivery;
    schemeImplementation: SchemeImplementation;
  };
  issues: IssueTaxonomy[];
  grievanceHotspots: GrievanceHotspots;

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: {
    inventory: MediaInventory;
    consumption: MediaConsumption;
    influencers: MediaInfluencers;
  };

  // Physical
  physicalMapping: PhysicalMapping;

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;

  // External
  externalFactors: ExternalFactors;

  // Quality
  dataQuality: DataQuality;
}
