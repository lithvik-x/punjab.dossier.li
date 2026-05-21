/**
 * AC029-Phagwara Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC029-Phagwara.md, AC029-Phagwara-deep.md
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
  municipalCorporation: boolean;
  cityType: string;
  nriHub: boolean;
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
  nriDiaspora: string;
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

export interface UrbanDemographics {
  phagwaraCityPopulation: string;
  scPopulationPercentage: string;
  scInPhagwaraSharkiCT: string;
  hinduMajorityWards: string;
  nriFamilies: string;
}

export interface ElectoralRollAnalytics {
  totalElectors: string;
  genderGap: string;
  voterTurnout2022: string;
  voterTurnout2017: string;
  voterTurnoutStateAverage: string;
}

export interface SchemePenetration {
  meraGharMeraMaan: string;
  ashirwadScheme: string;
  scWelfareSchemes: string;
  aamAadmiClinics: string;
}

export interface DigitalAccess {
  mobileInternetUrban: string;
  mobileInternetRural: string;
  socialMedia: string[];
  specialFactor: string;
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
  scMazhabiRamdasia: string;
  jatSikh: string;
  obc: string;
  hinduUpper: string;
}

export interface CasteCompositionDeep {
  scOverall: string;
  scInPhagwaraSharkiCT: string;
  mazhabiSikh: string;
  ramdasiaRavidassia: string;
  religiousCompositionKapurthala: {
    sikh: string;
    hindu: string;
    other: string;
  };
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
  mlaSatisfaction: string;
  keySentimentDrivers: string[];
  issues: Issue[];
  misinformationStatus: "verified" | "needs_verification";
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

// ============================================================================
// KEY EVENTS
// ============================================================================

export interface KeyEvent {
  year: number;
  title: string;
  description: string;
  impact: string;
}

export interface GovernanceGap {
  phagwaraMCInfrastructure: string;
  industrialEmployment: string;
  skillDevelopment: string;
  urbanSCColonies: string;
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

export interface PoliticalActors {
  congressMLA: string;
  aapLocalLeaders: string;
  bjpLeaders: string;
  sadLeaders: string;
}

export interface CommunityInfluencers {
  scLeaders: string;
  mazhabiSikhCommunity: string;
  urbanSarpanches: string;
  nriLeaders: string;
  exServicemen: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  communityInfluencers: CommunityInfluencers;
  casteEquations: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  tv: string[];
  digital: string[];
  nriMediaConnections: string[];
}

export interface MediaConsumption {
  bySegment: string;
}

export interface MediaLandscape {
  inventory: MediaInventory;
  consumption: MediaConsumption;
  specialFactor: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocations {
  phagwaraCity: boolean;
  industrialAreas: boolean;
  scColonies: boolean;
  nriResidentialAreas: boolean;
}

export interface Infrastructure {
  railConnectivity: boolean;
  roadToJalandhar: boolean;
  roadToKapurthala: boolean;
  municipalCorporation: boolean;
  healthcare: string;
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
  keyLocations: KeyLocations;
  infrastructure: Infrastructure;
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

export interface TargetSegment {
  segment: string;
  rationale: string;
}

export interface StrategicBlueprint {
  congressStrategy2027: string[];
  aapStrategy: string[];
  targetSegments: TargetSegment[];
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
  mustAddress: string;
}

export interface AttackLines {
  joginderSinghMann: string;
  drugCrisis: string;
  rs1000PromisedMoney: string;
  brokenPromises: string;
  bjpSomParkash: string;
}

export interface CongressStrategy {
  status: string;
  currentPosition: string;
  incumbentName: string;
  margin2022: string;
  keyFactors: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategy;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcards {
  candidateSelection: string;
  communalIncident: string;
  nriFactor: string;
  alliance: string;
}

export interface Triggers {
  scSchemeDeliveryAssessment: string;
  lawOrderIncidents: string;
  municipalCorporationPerformance: string;
  urbanDevelopmentAnnouncements: string;
}

export interface CourseChangingFactors {
  wildcards: Wildcards;
  triggers: Triggers;
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
// DATA SOURCE TRACKING
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete";
  verificationNeeded: string[];
  intelligencePriorities: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
  documentStatus: string;
  preparedFor: string;
  classification: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC029PhagwaraTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;

  // Demographics
  censusData: CensusData;
  urbanDemographics: UrbanDemographics;
  electoralRollAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;
  digitalAccess: DigitalAccess;

  // Elections
  electionHistory: ElectionHistory;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  serviceDelivery: ServiceDelivery;
  schemeImplementation: SchemeImplementation;
  issues: IssueTaxonomy[];
  keyEvents: KeyEvent[];

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: MediaLandscape;

  // Physical
  physicalMapping: PhysicalMapping;

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;
  courseChangingFactors: CourseChangingFactors;

  // External
  externalFactors: ExternalFactors;

  // Quality
  dataQuality: DataQuality;
}
