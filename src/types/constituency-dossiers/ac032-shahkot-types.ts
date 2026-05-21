/**
 * AC032-Shahkot Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC032-Shahkot.md, AC032-Shahkot-deep.md
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
  tehsil: string;
  subDistrictsCovered: string[];
  areaCharacter: string;
  terrain: string;
  keyIdentifiers: {
    doabaRegion: string;
    jalandharDistrictSC: string;
    agriculturalProfile: string[];
    urbanCenter: string;
  };
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
  totalElectors2022: string;
  genderGap: string;
  voterTurnout2022: string;
  voterTurnout2017: string;
  voterTurnoutStateAverage: string;
}

export interface SchemePenetration {
  meraGharMeraMaan: string;
  ashirwadScheme: string;
  aamAadmiClinics: string;
  freeElectricity: string;
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
  totalElectors: string;
  voterTurnout: string;
  votesPolled: string;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes?: string;
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
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  historicalTrend: string[];
  turnoutPattern: string;
  coreVoters: string[];
  swingFactors: string[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  jatSikh: string;
  sc: string;
  obc: string;
  hindu: string;
  other: string;
}

export interface CasteCompositionDeep {
  scPopulation: string;
  jatSikhRural: string;
  ramdasiaRavidassia: string;
  obcCommunities: string[];
}

export interface TehsilDemographics {
  description: string;
  scRural: string;
  agriculturalLabor: string;
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
  status: "stable" | "volatile" | "shifting";
  sentimentDrivers: string[];
  grievances: string[];
  mlaSatisfaction: string;
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

export interface CurrentRepresentation {
  mla: string;
  party: string;
  district: string;
  stateGovernment: string;
}

export interface ServiceDelivery {
  health: string;
  education: string;
  roads: string;
  waterSanitation: string;
}

export interface SchemeImplementation {
  meraGharMeraMaan: string;
  ashirwadScheme: string;
  aamAadmiClinics: string;
  freeElectricity: string;
}

export interface DevelopmentGaps {
  shahkotTownInfrastructure: string;
  ruralRoadNetwork: string;
  agriculturalExtension: string;
  healthcare: string;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface TopIssues {
  agriculture: string;
  infrastructure: string;
  healthcare: string;
  employment: string;
  casteWelfare: string;
}

export interface ShahkotSpecific {
  townMunicipalityNeeds: string;
  marketInfrastructure: string;
  sugarcane: string;
  floodVulnerability: string;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActors {
  mla: string;
  aapLocalLeaders: string;
  sadLeaders: string;
  bjpLeaders: string;
}

export interface CommunityInfluencers {
  familyInfluence: string;
  jatSikhElders: string;
  scLeaders: string;
  exServicemen: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  communityInfluencers: CommunityInfluencers;
  powerEquation: string;
  casteBasedVoting: string;
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

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocations {
  shahkotTown: string;
  agriculturalVillages: string;
  gurudwaraSites: string;
  jalandharMogaRoad: string;
}

export interface Infrastructure {
  roads: string;
  healthcare: string;
  education: string;
  mandiFacilities: string;
}

export interface BoothLogistics {
  status: "verified" | "needs_verification";
  locations?: string[];
}

export interface CampaignInfrastructure {
  rallyGrounds: string;
  hoardingSpots: string;
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

export interface CongressStrategy2027 {
  candidate: string;
  casteStrategy: string;
  keyIssues: string[];
  campaign: string;
  organization: string;
}

export interface AAPStrategy {
  candidate: string;
  casteStrategy: string;
  keyIssues: string[];
  campaign: string;
}

export interface TargetSegment {
  segment: string;
  description: string;
}

export interface StrategicBlueprint {
  congressStrategy: CongressStrategy2027;
  aapStrategy: AAPStrategy;
  targetSegments: TargetSegment[];
  mustWinBoothsStatus: "verified" | "needs_verification";
  resourceAllocationStatus: "verified" | "needs_verification";
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcards {
  candidateLadiFamilySuccession: string;
  allianceCongressSad: string;
  localPerformanceAssessment: string;
  monsoonAgriculturalConditions: string;
}

export interface Triggers {
  partyAlliances: string;
  candidateSelection: string;
  developmentAnnouncements: string;
  agriculturalConditions: string;
}

export interface CourseChangingFactors {
  wildcards: Wildcards;
  triggers: string[];
}

// ============================================================================
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualifications: string[];
  antiDrugMessaging: string;
}

export interface AttackLines {
  aapInaction: string;
  drugCrisis: string;
  brokenPromises: string;
  sadBjpLegacy: string;
  localCandidateMatter: string;
}

export interface CongressPoliticalStrategy {
  currentPosition: string;
  incumbentName: string;
  margin: string;
  challenges: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressPoliticalStrategy;
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
// DATA GAPS & RECOMMENDATIONS
// ============================================================================

export interface DataGaps {
  verificationItems: string[];
}

export interface IntelligencePriorities {
  priorities: string[];
}

export interface Recommendations {
  dataGaps: DataGaps;
  intelligencePriorities: IntelligencePriorities;
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

export interface AC032ShahkotTypes {
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

  // Elections
  electionHistory: ElectionHistory;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;
  tehsilDemographics: TehsilDemographics;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: {
    currentRepresentation: CurrentRepresentation;
    serviceDelivery: ServiceDelivery;
    schemeImplementation: SchemeImplementation;
    developmentGaps: DevelopmentGaps;
  };
  localIssues: {
    topIssues: TopIssues;
    shahkotSpecific: ShahkotSpecific;
  };
  issues: IssueTaxonomy[];

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: {
    inventory: MediaInventory;
    consumption: MediaConsumption;
  };

  // Physical
  physicalMapping: {
    keyLocations: KeyLocations;
    infrastructure: Infrastructure;
    boothLogistics: BoothLogistics;
    campaignInfrastructure: CampaignInfrastructure;
  };

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  courseChangingFactors: CourseChangingFactors;
  politicalStrategy: PoliticalStrategy;
  recommendations: Recommendations;

  // External
  externalFactors: ExternalFactors;

  // Quality
  dataQuality: DataQuality;
}
