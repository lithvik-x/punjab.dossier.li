/**
 * AC024-KhadoorSahib Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC024-Khadoor-Sahib.md, AC024-KhadoorSahib-deep.md
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
  religiousSignificance: string;
  areaCharacter: string;
  keyIdentifiers: {
    religiousSite: string;
    agricultural: string;
    tourism: string;
  };
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  guruConnection: string;
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
    christian: string;
    muslim?: string;
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
  voterTurnout2017: string;
  voterTurnoutStateAverage: string;
  votesPolled2022: string;
}

export interface SchemePenetration {
  meraGharMeraMaan: string;
  ashirwadScheme: string;
  guruAngadShrineDevelopment: string;
  religiousTourismDevelopment: string;
  mgnrega: string;
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
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  dataStatus: "verified" | "needs_verification";
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
  jathSikh: string;
  scMazhabiRamdasia: string;
  obc: string;
  hindu: string;
  muslim: string;
  other: string;
}

export interface CasteCompositionDeep {
  scPopulationVillage: string;
  jathSikhMajority: string;
  ramdasiaRavidassiaPresence: string;
}

export interface ReligiousCompositionDistrict {
  sikh: string;
  hindu: string;
  christian: string;
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
  misinformationStatus: "verified" | "needs_verification";
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

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
  activeSchemes: string[];
}

export interface DevelopmentGaps {
  healthcareInfrastructure: string;
  roadConnectivity: string;
  agriculturalResearchCenter: string;
  guruShrineFacilities: string;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActors {
  mla: string;
  mp: string;
  sadLeaders: string;
  warisPunjabDe: string;
  religiousLeaders: string;
}

export interface CommunityInfluencers {
  sgpcMembers: string;
  jatSikhElders: string;
  nriDevotees: string;
  gurudwaraManagers: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  communityInfluencers: CommunityInfluencers;
  currentGovernment: string;
  traditionalInfluence: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  tv: string[];
  digital: string[];
  religiousMedia: string[];
}

export interface MediaConsumption {
  bySegment: string;
  specialFactors: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocations {
  religiousCenter: string;
  gurudwaraComplex: string;
  agriculturalVillages: string;
  borderCheckPosts: string;
}

export interface InfrastructureMapping {
  roads: string;
  religiousSiteParking: string;
  healthcare: string;
  education: string;
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

export interface StrategicBlueprint {
  narratives: string[];
  prioritySegments: {
    segment: string;
    rationale: string;
  }[];
  congressStrategy2027: {
    candidate: string;
    caste: string;
    issues: string[];
    campaign: string;
    religiousAngle: string;
  };
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
  avoid: string;
}

export interface AttackLines {
  incumbentAchievements: string;
  drugCrisis: string;
  brokenPromises: string;
  governanceFailures: string;
  localIssues: string;
}

export interface CongressStrategy {
  currentPosition: string;
  incumbentName: string;
  partyStatus: string;
  challenges: string[];
  historicalData: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategy;
}

// ============================================================================
// EXTERNAL FACTORS
// ============================================================================

export interface Wildcards {
  amritpalSinghRelease: string;
  warisPunjabDe: string;
  sadRevival: string;
  drugSeizures: string;
}

export interface Triggers {
  amritpalSinghCourtCase: string;
  agriculturalCrisis: string;
  borderSecurityIncident: string;
  religiousCommunityMobilization: string;
}

export interface ExternalFactors {
  wildcards: Wildcards;
  triggers: Triggers;
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

export interface AC024KhadoorSahibTypes {
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
  religiousCompositionDistrict: ReligiousCompositionDistrict;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: {
    serviceDelivery: ServiceDelivery;
    schemeImplementation: SchemeImplementation;
    developmentGaps: DevelopmentGaps;
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
    infrastructure: InfrastructureMapping;
    campaignInfrastructure: CampaignInfrastructure;
  };

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;

  // External
  externalFactors: ExternalFactors;

  // Quality
  dataQuality: DataQuality;
}
