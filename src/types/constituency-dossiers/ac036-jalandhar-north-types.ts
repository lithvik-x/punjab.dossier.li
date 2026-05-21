/**
 * AC036-Jalandhar-North Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC036-Jalandhar-North.md, AC036-JalandharNorth-deep.md
 * Note: User requested AC036-Nagar but AC036 is Jalandhar-North (no AC036-Nagar exists)
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
  subDistrictsCovered: string[];
  areaCharacter: string;
  terrain: string;
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
  population: string;
  sexRatio: string;
  literacyRate: string;
  casteWise: string;
}

export interface ElectoralRollAnalytics {
  totalElectors: string;
  genderGap: string;
  voterTurnout2022: string;
  voterTurnoutStateAverage: string;
}

export interface SchemePenetration {
  pdsNfsa: string;
  mgnrega: string;
  pmKisan: string;
  ayushmanBharat: string;
}

export interface DigitalAccess {
  mobileInternetUrban: string;
  mobileInternetRural: string;
  socialMedia: string[];
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
  totalElectors: string;
  voterTurnout: string;
  votesPolled: string;
  runnerUp: string;
  runnerUpParty: string;
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
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  hinduKhatriArora: string;
  jatSikh: string;
  scMazhabiRamdasia: string;
  obc: string;
  muslim: string;
  other: string;
}

export interface CasteCompositionDeep {
  jathSikh: string;
  scDalit: string;
  obc: string;
  upperCaste: string;
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
  mlaSatisfaction: string;
  trustInInstitutions: string;
  issues: Issue[];
  misinformationStatus: "verified" | "needs_verification";
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface GovernanceMetrics {
  developmentBoost: string;
  smartCityInitiatives: string;
  grievanceRedressal: string;
}

export interface GovernanceGaps {
  trafficCongestion: string;
  waterSewerage: string;
  solidWasteManagement: string;
}

export interface GovernanceAudit {
  districtCollector: string;
  policeSystem: string;
  developmentMetrics: GovernanceMetrics;
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

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalPlayers {
  localMLAs: string;
  municipalCounselors: string;
  industrialistsTraders: string;
  religiousLeaders: string;
  socialMediaInfluencers: string;
}

export interface PowerCenters {
  partyLocalUnits: string;
  industrialAssociations: string;
  tradeUnions: string;
  studentOrganizations: string;
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
  urbanJalandharCity: string;
  cantonmentArea: string;
  industrialZones: string;
  marketAreas: string;
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
  drugCrisis: string;
  unemployment: string;
  brokenPromises: string;
  governanceFailures: string;
  developmentFocus: string;
}

export interface CongressStrategy {
  currentPosition: string;
  incumbentName: string;
  termCount: number;
  margin: string;
  challenges: string[];
}

export interface AAPStrategy {
  narrative: string;
  focusAreas: string[];
}

export interface SADBPStrategy {
  narrative: string;
  focusAreas: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategy;
  aapStrategy: AAPStrategy;
  sadbjpStrategy: SADBPStrategy;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcards {
  ticketDistribution: string;
  candidateCriminalBackground: string;
  developmentFundAllocation: string;
  centralGovernmentSchemes: string;
  drugSeizureIncidents: string;
}

export interface MonitoringTriggers {
  bypollHistory: string;
  candidateAnnouncements: string;
  allianceFormations: string;
  groundReports: string;
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
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC036JalandharNorthTypes {
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
  governanceGap: {
    serviceDelivery: ServiceDelivery;
    schemeImplementation: SchemeImplementation;
  };
  issues: IssueTaxonomy[];

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
