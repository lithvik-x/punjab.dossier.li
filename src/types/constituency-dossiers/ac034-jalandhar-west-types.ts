/**
 * AC034-Jalandhar-West Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC034-Jalandhar-West.md, AC034-JalandharWest-deep.md
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
  keyIdentifiers: string[];
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
    other: string;
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
  voterTurnout2024: string;
  voterTurnout2017: string;
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
  socialMedia: string[];
}

export interface UrbanDemographics {
  cityVoterProfile: string;
  educatedMiddleClass: string;
  industrialWorkers: string;
  migrantPopulation: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
}

export interface ElectionResult2024 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  turnout: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  margin?: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2024: ElectionResult2024;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  historicalTrend: string;
  coreVoters: string[];
  swingFactors: string[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  sc: string;
  hindu: string;
  jatSikh: string;
  muslim: string;
  other: string;
}

export interface CasteCompositionDeep {
  scPopulation: string;
  ramdasiaRavidassia: string;
  mazhabiSikh: string;
  urbanConcentration: string;
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
  currentMood: string;
  sentimentDrivers: string[];
  grievances: string[];
  mlaSatisfaction: string;
  trustInInstitutions: string;
  issues: Issue[];
  misinformationStatus: "verified" | "needs_verification";
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

export interface JalandharWestSpecific {
  wardLevelIssues: string[];
  scColonyDevelopment: string[];
  cityVoterPriorities: string[];
  middleClassConcerns: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface ServiceDelivery {
  health: string;
  education: string;
  roads: string;
  waterSanitation: string;
  municipal: string;
}

export interface SchemeImplementation {
  meraGharMeraMaan: string;
  ashirwadScheme: string;
  scWelfareSchemes: string;
  aamAadmiClinics: string;
  freeElectricity: string;
}

export interface GovernanceGap {
  serviceDelivery: ServiceDelivery;
  schemeImplementation: SchemeImplementation;
  developmentGaps: string[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActors {
  mla: string;
  mp: string;
  congressLeaders: string;
  bjpLeaders: string;
}

export interface CommunityInfluencers {
  scLeaders: string;
  municipalCouncillors: string;
  industrialists: string;
  exServicemen: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  communityInfluencers: CommunityInfluencers;
  powerStructureDescription: string;
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

export interface InformationFlow {
  urbanMediaSaturation: string;
  politicalWhatsAppGroups: string;
  cableTvNetworks: string;
  socialMedia: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface BoothLogistics {
  status: "verified" | "needs_verification";
  locations?: string[];
}

export interface CampaignInfrastructure {
  rallyGrounds: string;
  hoardingSpots: string;
}

export interface KeyLocations {
  jalandharCityWest: string;
  urbanResidentialAreas: string;
  industrialZones: string;
  scColonies: string;
}

export interface Infrastructure {
  urbanInfrastructure: string;
  healthcare: string;
  education: string;
  municipalServices: string;
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

export interface StrategicBlueprint {
  congress2027: {
    candidate: string;
    caste: string;
    issues: string[];
    campaign: string;
    organization: string;
  };
  aap2027: {
    candidate: string;
    caste: string;
    issues: string[];
    campaign: string;
  };
  targetSegments: string[];
  mustWinBoothsStatus: "verified" | "needs_verification";
  resourceAllocationStatus: "verified" | "needs_verification";
}

// ============================================================================
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  caste: string;
  profile: string;
  keyQualification: string;
  must: string;
}

export interface RecommendedCandidateProfile {
  casteRequirement: string;
  backgroundType: string;
  keyQualities: string[];
  antiCorruptionStance: boolean;
  scCommunityConnect: string;
}

export interface CongressStrategicPosition {
  status: "difficult" | "competitive" | "favorable" | "lost";
  margin2022: string;
  margin2024: string;
  congressFinish: string;
  strategyOverhaulNeeded: boolean;
}

export interface AttackLines {
  mlaPerformance: string;
  urbanPoorIgnored: string;
  drugCrisis: string;
  brokenPromises: string;
  scCommunityNeglect: string;
}

export interface CongressStrategy {
  status: string;
  currentPosition: string;
  keyFactors: string[];
  challenges: string[];
  recommendedCandidate: RecommendedCandidate;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLines;
}

export interface PoliticalStrategy {
  congress: CongressStrategy;
  aap?: {
    candidate: string;
    caste: string;
    issues: string[];
    campaign: string;
  };
}

// ============================================================================
// EXTERNAL FACTORS
// ============================================================================

export interface Wildcards {
  mlaPerformance: string;
  bjpMpFactor: string;
  municipalPerformance: string;
  nationalIssues: string;
}

export interface Triggers {
  urbanInfrastructureAnnouncements: string;
  stateGovernmentSchemes: string;
  municipalCorporationPerformance: string;
  localDevelopment: string;
}

export interface ExternalFactors {
  wildcards: Wildcards;
  triggers: Triggers;
  politicalShocks: string[];
  economicShocks: string[];
  socialEvents: string[];
  externalShocks: string[];
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface CourseChangingFactors {
  wildcards: Wildcards;
  triggers: Triggers;
}

// ============================================================================
// DATA GAPS & VERIFICATION
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

export interface DataGaps {
  requiredVerification: string[];
  intelligencePriorities: string[];
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC034JalandharWestTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;

  // Demographics
  censusData: CensusData;
  electoralRollAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;
  digitalAccess: DigitalAccess;
  urbanDemographics: UrbanDemographics;

  // Elections
  electionHistory: ElectionHistory;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  issues: IssueTaxonomy[];
  jalandharWestSpecific: JalandharWestSpecific;

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: {
    inventory: MediaInventory;
    consumption: MediaConsumption;
    informationFlow: InformationFlow;
  };

  // Physical
  physicalMapping: {
    boothLogistics: BoothLogistics;
    campaignInfrastructure: CampaignInfrastructure;
    keyLocations: KeyLocations;
    infrastructure: Infrastructure;
  };

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;

  // External
  externalFactors: ExternalFactors;
  courseChangingFactors: CourseChangingFactors;

  // Data Gaps
  dataGaps: DataGaps;

  // Quality
  dataQuality: DataQuality;
}
