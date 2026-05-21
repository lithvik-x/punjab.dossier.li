/**
 * AC097-Sardulgarh Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC097-Sardulgarh.md, AC097-Sardulgarh-deep.md
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
  date: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  areaCharacter: string;
  geographicContext: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  localHeritage: string[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DistrictDemographics {
  totalPopulation: string;
  male: string;
  female: string;
  urban: string;
  urbanPercentage: string;
  rural: string;
  ruralPercentage: string;
  sexRatio: string;
}

export interface ElectoralRollAnalytics {
  totalElectors2022: string;
  totalVotes: string;
  voterTurnout2022: string;
  voterTurnoutStatus: string;
  voterTurnoutStateAverage: string;
  ruralConstituency: string;
}

export interface SchemePenetration {
  status: "verified" | "needs_verification";
  details?: string;
}

export interface DigitalAccess {
  status: "needs_verification";
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
  runnerUp: string;
  runnerUpParty: string;
  totalElectors: string;
  totalVotes: string;
  turnout: string;
  turnoutStatus: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  marginVotes: number;
  totalElectors: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  status: string;
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
  sikhMajority: string;
  hinduMinority: string;
  jatSikh: string;
  scPopulation: string;
  obc: string;
  source: string;
}

export interface CasteCompositionDeep {
  districtSource: string;
  districtPopulation: string;
  male: string;
  female: string;
  urban: string;
  rural: string;
  sexRatio: string;
  communityComposition: {
    jatSikh: string;
    dalitSC: string;
    hindu: string;
    muslim: string;
  };
  casteCompositionStatus: "verified" | "needs_verification";
  localDetails: string;
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

export interface ServiceDelivery {
  health: string;
  education: string;
  roads: string;
  waterSanitation: string;
  status: "verified" | "needs_verification";
}

export interface SchemeImplementation {
  youthNriScheme: string;
  status: "needs_verification";
}

export interface GovernanceGap {
  serviceDelivery: ServiceDelivery;
  schemeImplementation: SchemeImplementation;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalLeadership {
  currentMLA: {
    name: string;
    party: string;
    term: string;
    status: string;
  };
  keyPoliticalFigures: string;
}

export interface NonPoliticalInfluencers {
  status: "needs_verification";
}

export interface PoliticalNodes {
  status: "needs_verification";
}

export interface PowerStructure {
  politicalLeadership: PoliticalLeadership;
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

export interface MediaLandscape {
  inventory: MediaInventory;
  consumption: MediaConsumption;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface BoothLogistics {
  status: "verified" | "needs_verification";
  locations?: string[];
}

export interface CampaignInfrastructure {
  status: "needs_verification";
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
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoter: string[];
  casteConsideration: string;
}

export interface AttackLines {
  drugCrisis: string;
  agrarianDistress: string;
  brokenPromises: string;
  governanceFailures: string;
  unemployment: string;
}

export interface CongressStrategy {
  currentPosition: string;
  incumbentName: string;
  termCount: number;
  challenges: string[];
  strategicOptions: string[];
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
// DEEP RESEARCH TYPES
// ============================================================================

export interface ExecutiveSummary {
  description: string;
  keyHighlights: string[];
}

export interface ConstituencyProfile {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  lokSabhaSeat: string;
  type: string;
}

export interface ElectoralTrends {
  "2022Performance": {
    aapWon: boolean;
    margin: string;
    marginStatus: "verified" | "needs_verification";
  };
  historicalPattern: string;
  historicalStatus: "verified" | "needs_verification";
}

export interface KeyIssuesGrievances {
  drugCrisis: {
    description: string;
    governmentResponse: string;
    impact: string;
  };
  agrarianIssues: {
    cottonFarming: string;
    mspProcurement: string;
    waterTableDepletion: string;
    stubbleBurning: string;
  };
  employment: {
    industrialDevelopment: string;
    youthEmigration: string;
    skillDevelopment: string;
  };
}

export interface VoterOutreach {
  voterTurnout2022: string;
  stateAverage: string;
  turnoutStatus: "verified" | "needs_verification";
}

export interface GovernmentSchemes {
  status: "needs_verification";
  details: string;
}

export interface IntelligenceGaps {
  gaps: string[];
}

export interface ResearchPriorities {
  priorities: string[];
}

export interface DeepResearch {
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyProfile;
  geographicContext: string;
  electoralTrends: ElectoralTrends;
  keyIssuesGrievances: KeyIssuesGrievances;
  voterOutreach: VoterOutreach;
  governmentSchemes: GovernmentSchemes;
  intelligenceGaps: IntelligenceGaps;
  researchPriorities: ResearchPriorities;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC097SardulgarhTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;

  // Demographics
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
  governanceGap: GovernanceGap;
  issues: IssueTaxonomy[];

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: MediaLandscape;

  // Physical
  physicalMapping: {
    boothLogistics: BoothLogistics;
    campaignInfrastructure: CampaignInfrastructure;
  };

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;

  // External
  externalFactors: ExternalFactors;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}
