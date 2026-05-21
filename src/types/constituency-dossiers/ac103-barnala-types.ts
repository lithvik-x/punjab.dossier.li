/**
 * AC103-Barnala Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC103-Barnala.md, AC103-Barnala-deep.md
 */

// ============================================================================
// RESEARCH METADATA
// ============================================================================

export interface ResearchMicroTask {
  taskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: "VERIFIED" | "PARTIALLY VERIFIED" | "needs_verification";
  dataCurrency: string;
}

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  dataCurrency: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  subDistrictsCovered: string[];
  areaCharacter: string;
  terrain: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CensusData {
  cityPopulation?: string;
  districtPopulation?: string;
  malePopulation?: string;
  femalePopulation?: string;
  sexRatio?: string;
  literacyRate?: string;
}

export interface CityDemographics {
  cityPopulation: string;
  sikhPercentage: string;
  hinduPercentage: string;
  notableFact: string;
}

export interface DistrictDemographics {
  totalPopulation: string;
  male: string;
  female: string;
  sexRatio: string;
}

export interface ElectoralRollAnalytics {
  totalElectors: string;
  genderGap: string;
  voterTurnout2022: string;
  voterTurnoutStateAverage?: string;
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
  marginVotes?: number;
  runnerUp: string;
  runnerUpParty: string;
  totalElectors?: string;
  voterTurnout?: string;
  votesPolled?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin?: string;
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
  turnoutPattern?: string;
  coreVoters?: string[];
  swingFactors?: string[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  jathSikh: string;
  obc: string;
  sc: string;
  hinduUpperCaste: string;
  others: string;
  source?: string;
}

export interface CasteCompositionDeep {
  cityDemographics: CityDemographics;
  districtDemographics: DistrictDemographics;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface Issue {
  rank: number;
  title: string;
  description: string;
  prioritySegment?: string[];
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

export interface PublicSentiment {
  mlaSatisfaction?: string;
  trustInInstitutions?: string;
  issues: Issue[];
  misinformationStatus: "verified" | "needs_verification";
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
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface NonPoliticalInfluencers {
  religious: string[];
  casteLeaders: string;
  professional: string[];
}

export interface PoliticalNodes {
  exMla: string;
  boothAgents: string;
  currentMla?: string;
}

export interface PowerStructure {
  nonPoliticalInfluencers: NonPoliticalInfluencers;
  politicalNodes: PoliticalNodes;
  casteEquations?: string;
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
  mustWinBoothsStatus: "verified" | "needs_verification";
  resourceAllocationStatus: "verified" | "needs_verification";
}

// ============================================================================
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  caste?: string;
  profile: string;
  attributes?: string[];
  background?: string;
}

export interface AttackLines {
  drugCrisis: string;
  unemployment: string;
  brokenPromises: string;
  governanceFailures: string;
  healthInfrastructure?: string;
}

export interface CongressStrategicPosition {
  currentPosition: string;
  performance2022: string;
  alertLevel?: string;
  strengths: string[];
  weaknesses: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategicPosition;
}

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

export interface GeographicContext {
  location: string;
  region: string;
  districtHeadquarters: string;
  urbanRuralMix: string;
}

export interface ElectoralTrends {
  status: string;
  historicalPatterns?: string;
}

export interface VoterOutreach {
  voterTurnout2022?: string;
  stateAverage: string;
  constituencySpecific?: string;
}

export interface GovernmentSchemes {
  status: string;
  beneficiaryData?: string;
}

export interface KeyIssuesDeep {
  drugCrisis: string;
  agrarianDistress: string;
  urbanIssues: string;
}

export interface PoliticalLeadership {
  currentMla: string;
  status: string;
}

export interface KeyPoliticalFigures {
  status: string;
  localLeaders?: string;
  influentialFamilies?: string;
}

export interface IntelligenceGaps {
  requiresVerification: string[];
}

export interface ResearchPriorities {
  priorities: string[];
}

export interface DeepResearch {
  executiveSummary: string;
  constituencyProfile: {
    basicInformation: {
      assemblyConstituencyNo: number;
      district: string;
      region: string;
      type: string;
    };
    geographicContext: GeographicContext;
  };
  demographics: {
    cityDemographics: CityDemographics;
    districtDemographics: DistrictDemographics;
  };
  keyIssues: KeyIssuesDeep;
  politicalLeadership: PoliticalLeadership;
  keyPoliticalFigures: KeyPoliticalFigures;
  electoralTrends: ElectoralTrends;
  voterOutreach: VoterOutreach;
  governmentSchemes: GovernmentSchemes;
  intelligenceGaps: IntelligenceGaps;
  researchPriorities: ResearchPriorities;
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
// DATA QUALITY
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete" | "needs_verification";
  verificationNeeded: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC103BarnalaTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;

  // Demographics
  censusData: CensusData;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;
  electoralRollAnalytics: ElectoralRollAnalytics;

  // Elections
  electionHistory: ElectionHistory;

  // Sentiment & Issues
  publicSentiment: PublicSentiment;
  keyIssues: Issue[];
  issues: IssueTaxonomy[];

  // Governance
  governanceGap: {
    serviceDelivery: ServiceDelivery;
    schemeImplementation: SchemeImplementation;
  };

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: {
    inventory: MediaInventory;
    consumption: MediaConsumption;
  };

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;
  congressStrategicPosition: CongressStrategicPosition;

  // External
  externalFactors: ExternalFactors;

  // Deep Research
  deepResearch: DeepResearch;
  researchMetadata: ResearchMicroTask;

  // Quality
  dataQuality: DataQuality;

  // Notes
  notes: string[];
}
