/**
 * AC013-Majitha Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC013-Majitha.md, AC013-Majitha-deep.md
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

export interface GeographicProfile {
  description: string;
  administrativeStatus: string;
  location: string;
  nh3Corridor: boolean;
  tehsilHQ: boolean;
  proximityToAmritsar: string;
  proximityToWagah: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  areaCharacter: "Semi-urban/urban" | "Rural" | "Mixed";
  terrain: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

export interface HistoricalContext {
  localHeritage: string[];
  regionalSignificance: string;
}

// ============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  jathSikh: string;
  sc: string;
  obc: string;
  upperCaste: string;
  minority: string;
  other: string;
}

export interface DistrictDemographics {
  totalSCPopulation: string;
  scPercentage: string;
  urbanSCPercentage: string;
  ruralSCPercentage: string;
}

export interface SCComposition {
  majithaMunicipalCouncilSC: string;
  majithaTehsilBlockSC: string;
}

export interface VoterDemographicsEstimate {
  ruralVoters: string;
  urbanVoters: string;
  scVoters: string;
  jathSikhVoters: string;
  otherHindu: string;
}

export interface KeySocialGroup {
  group: string;
  description: string;
  politicalAffiliation: string;
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
  votesPolled?: string;
  runnerUp: string;
  runnerUpParty: string;
  isHighMarginWin: boolean;
  marginNotes: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  runnerUp?: string;
  runnerUpParty?: string;
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
  turnoutPattern: string;
  coreVoters: string[];
  swingFactors: string[];
}

export interface ElectoralRollAnalytics {
  totalElectors2022: string;
  voterTurnout2022: string;
  genderGap: string;
  turnoutStateAverage: string;
}

export interface GanieveKaurMajithiaSignificance {
  familyBackground: string;
  marginSignificance: string;
  statewideContext: string;
  winType: string;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface Issue {
  rank: number;
  title: string;
  description: string;
  affectedSegments: string[];
}

export interface PublicSentiment {
  perceivedMoodStatus: "verified" | "needs_verification";
  sadResilience2022: string;
  threatsToSadHold2027: string[];
  farmerDistress: string;
  drugCrisis: string;
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

export interface TopLocalIssues {
  issues: Issue[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface MlaPerformance2022 {
  mlaName: string;
  party: string;
  termCount: number;
  roleDescription: string;
  constituencyFundUtilization: string;
}

export interface MajithiaFamilyLegacy {
  bikramSinghMajithiaRole: string;
  familyBackground: string;
  landOwnership: string;
  patronageNetwork: string;
}

export interface InfrastructureStatus {
  nh3Road: string;
  majithaTown: string;
  ruralInfrastructure: string;
}

export interface GovernanceGap {
  serviceDelivery: {
    health: string;
    education: string;
    roads: string;
    waterSanitation: string;
  };
  schemeImplementation: {
    mgnrega: string;
    beneficiaryLists: string;
    pds: string;
  };
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  role: string;
  influenceLevel: "high" | "medium" | "low";
  party?: string;
}

export interface SocialReligiousInfluencer {
  category: string;
  names: string[];
}

export interface PowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
  socialReligiousInfluencers: SocialReligiousInfluencer[];
  familyInfluence: string;
  boothLevel: string;
  casteEquations: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  regionalNews: string[];
  digital: string[];
  cable: string[];
}

export interface MediaConsumption {
  primaryChannel: string;
  voterContactMethod: string;
  platformNotes: string;
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

export interface PhysicalMapping {
  majithaTownDescription: string;
  ruralAreaDescription: string;
  nh3Corridor: string;
  proximityToAmritsarCity: string;
  proximityToWagahBorder: string;
  voterDemographics: VoterDemographicsEstimate;
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SwotSad {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface SwotAnalysis {
  sad: SwotSad;
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface PartyStrategy {
  party: string;
  keyNarratives: string[];
  prioritySegments: { segment: string; rationale: string }[];
  candidateNotes: string;
}

export interface StrategicBlueprint {
  forSad: PartyStrategy;
  forAap: PartyStrategy;
  forCongress: PartyStrategy;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface CourseChangingFactor {
  factor: string;
  probability: "High" | "Medium" | "Low";
  impact: "HIGH" | "MEDIUM" | "LOW";
}

export interface CourseChangingFactors {
  factors: CourseChangingFactor[];
}

// ============================================================================
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLines {
  drugCrisis: string;
  familyRule: string;
  brokenPromises: string;
  aapWave: string;
}

export interface CongressStrategy {
  currentPosition: string;
  majithiaFamilyDepth: string;
  strategicOptions: string;
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategy;
}

// ============================================================================
// INTELLIGENCE GAPS & VERIFICATION
// ============================================================================

export interface IntelligenceGap {
  item: string;
  priority: "high" | "medium" | "low";
}

export interface VerificationToDo {
  gaps: IntelligenceGap[];
  monitoringKeywords: string[];
}

// ============================================================================
// DATA SOURCE TRACKING
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "PARTIALLY_VERIFIED" | "VERIFIED" | "UNVERIFIED";
  verificationNeeded: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
  dataCurrency: string;
}

// ============================================================================
// DEEP RESEARCH METADATA
// ============================================================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: "PARTIALLY_VERIFIED" | "VERIFIED" | "UNVERIFIED";
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC013MajithaTypes {
  // Identity
  identity: ConstituencyIdentity;
  geographicProfile: GeographicProfile;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;

  // Demographics
  casteComposition: CasteComposition;
  districtDemographics: DistrictDemographics;
  scComposition: SCComposition;
  keySocialGroups: KeySocialGroup[];

  // Electoral
  electionHistory: ElectionHistory;
  electoralRollAnalytics: ElectoralRollAnalytics;
  ganieveKaurMajithiaSignificance: GanieveKaurMajithiaSignificance;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  localIssues: TopLocalIssues;
  mlaperformance: MlaPerformance2022;
  majithiaFamilyLegacy: MajithiaFamilyLegacy;
  infrastructure: InfrastructureStatus;

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: {
    inventory: MediaInventory;
    consumption: MediaConsumption;
  };

  // Physical
  physicalMapping: PhysicalMapping;
  boothLogistics: BoothLogistics;
  campaignInfrastructure: CampaignInfrastructure;

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;
  courseChangingFactors: CourseChangingFactors;

  // Verification
  intelligenceGaps: VerificationToDo;

  // Quality
  dataQuality: DataQuality;
  researchMetadata: ResearchMetadata;
}
