/**
 * AC016-AmritsarWest Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC016-Amritsar-West.md, AC016-AmritsarWest-deep.md
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
  description: string;
  urbanSC: string;
}

export interface ConstituencyBaseline {
  geographicProfile: {
    description: string;
    location: string;
    parliamentarySegment: string;
    areaCharacter: string;
  };
  keyStatistics2022: {
    winner: string;
    runnerUp: string;
    winnerVoteCount: string;
    margin: string;
    party: string;
    source: string;
  };
  scPopulation: {
    amritsarWestSC: string;
    districtSC: string;
    note: string;
  };
  notableFact: string;
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  localHeritage: string[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  scheduledCastes: string;
  jatSikh: string;
  upperCaste: string;
  obc: string;
  minority: string;
  source: string;
}

export interface CasteCompositionDeep {
  scPopulation: string;
  generalPopulation: string;
  communityBreakdown: {
    ravidassia: string;
    mazhabiSikh: string;
    jatSikh: string;
    hinduUpperCastes: string;
    obc: string;
  };
}

export interface ReligionBreakdown {
  sikh: string;
  hindu: string;
  scCombined: string;
  source: string;
}

export interface VoterDemographicsEstimate {
  urbanVoters: string;
  scVoters: string;
  generalCategoryVoters: string;
  sikhVoters: string;
  hinduVoters: string;
}

export interface KeyVotingDynamics {
  scVotersDominance: string;
  urbanSCVoterBehavior: string;
  loyaltyPattern: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  totalElectors: string;
  voterTurnout: string;
  winnerVoteCount: string;
  runnerUp: string;
  runnerUpParty: string;
  marginDescription: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  status: "verified" | "needs_verification";
}

export interface ElectoralHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  marginSignificance: string;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  affectedSegment: string;
}

export interface DissatisfactionVector {
  issue: string;
  description: string;
}

export interface PublicSentiment {
  perceivedMood: string;
  aapPosition: {
    marginStrength: string;
    scVoterLoyalty: string;
  };
  dissatisfactionVectors: DissatisfactionVector[];
  oppositionOpportunities: string[];
  source: string;
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface MlaPerformance {
  name: string;
  party: string;
  term: string;
  background: string;
  accessToDalitSchemes: string;
}

export interface UrbanScSpecificIssues {
  employment: string;
  slumDevelopment: string;
  icdsScholarships: string;
  skillTraining: string;
}

export interface AmritsarWestInfrastructure {
  urbanRoadNetwork: string;
  waterSupply: string;
  drainage: string;
}

export interface GovernanceGap {
  mlPerformance: MlaPerformance;
  urbanScSpecificIssues: UrbanScSpecificIssues;
  infrastructure: AmritsarWestInfrastructure;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  party: string;
  description: string;
}

export interface SocialReligiousInfluencer {
  category: string;
  description: string;
}

export interface Influencer {
  name: string;
  category: string;
  description: string;
}

export interface PowerStructure {
  political: PoliticalInfluencer[];
  socialReligious: SocialReligiousInfluencer[];
  parties: {
    bsp: string;
    congress: string;
    sad: string;
  };
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  digital: string[];
  socialMedia: string[];
}

export interface MediaLandscape {
  local: string[];
  digital: string[];
  socialMedia: string[];
  voterContact: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyGeography {
  description: string;
  areas: string[];
  road: string;
  periUrban: string;
}

export interface PhysicalMapping {
  keyGeography: KeyGeography;
  voterDemographics: VoterDemographicsEstimate;
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SwotAap {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface SwotOpposition {
  opportunities: string[];
}

export interface SwotAnalysis {
  aap: SwotAap;
  opposition: SwotOpposition;
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface PartyStrategy {
  party: string;
  recommendations: string[];
}

export interface StrategicBlueprint {
  forAAP: PartyStrategy;
  forBSP: PartyStrategy;
  forCongress: PartyStrategy;
  forSADBJP: PartyStrategy;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface CourseChangingFactor {
  factor: string;
  probability: string;
  impact: string;
}

export interface CourseChangingFactors {
  factors: CourseChangingFactor[];
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGaps {
  gaps: string[];
  monitoringKeywords: string[];
}

export interface VerificationToDo {
  items: string[];
}

export interface DataQuality {
  sources: { name: string; url?: string }[];
  researchStatus: {
    status: "partial" | "complete";
    verificationNeeded: string[];
  };
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
  brokenPromises: string;
  urbanNeglect: string;
  housingIssues: string;
  employment: string;
}

export interface CongressStrategy {
  currentPosition: string;
  incumbentName: string;
  termCount: number;
  challenges: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategy;
}

// ============================================================================
// RESEARCH METADATA
// ============================================================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: string;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: string;
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC016AmritsarWestTypes {
  // Identity
  researchMetadata: ResearchMetadata;
  identity: ConstituencyIdentity;
  overview: ConstituencyOverview;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;

  // Demographics
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;
  religionBreakdown: ReligionBreakdown;
  keyVotingDynamics: KeyVotingDynamics;

  // Elections
  electoralHistory: ElectoralHistory;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  issues: LocalIssue[];

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

  // Course-changing
  courseChangingFactors: CourseChangingFactors;

  // Quality
  intelligenceGaps: IntelligenceGaps;
  dataQuality: DataQuality;
}
