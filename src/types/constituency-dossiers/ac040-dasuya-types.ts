/**
 * AC040-Dasuya Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC040-Dasuya.md, AC040-Dasuya-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  name: string;
  district: string;
  region: string;
  lokSabha: string;
  reservation: string;
  type: "General" | "SC" | "ST" | "BC";
  date: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  location: string;
  areaCharacter: string;
  borderArea: boolean;
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
    christian: string;
  };
  casteCompositionStatus: "verified" | "needs_verification";
  culturalInstitutions: string[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DistrictDemographics {
  totalPopulation: string;
  rural: string;
  primaryEconomy: string;
  borderTrade: string;
}

export interface ElectoralRollAnalytics {
  totalElectors: string;
  genderGap: string;
  voterTurnout2022: string;
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
  runnerUpVotes?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  votes: string;
  votesCount: number;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: string;
  runnerUpVotesCount: number;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  votes: string;
  votesCount: number;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: string;
  runnerUpVotesCount: number;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  coreVoters: string[];
  swingFactors: string[];
  alternatingWins: boolean;
  volatilityReason: string;
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  hinduBrahminRajput: string;
  jatSikh: string;
  scMazhabiRamdasia: string;
  obc: string;
}

export interface CasteCompositionDeep {
  hinduRajputBrahmin: string;
  jatSikh: string;
  scMazhabiRamdasia: string;
  obc: string;
  source: string;
  regionalNote: string;
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
  aapWave2022: string;
  antiCongressSentiment: string;
  youthSupportForAAP: string;
  governanceExpectations: string;
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

export interface AdministrativeStructure {
  districtCollector: string;
  tehsil: string;
}

export interface ServiceDelivery {
  health: string;
  education: string;
  roads: string;
  waterSanitation: string;
}

export interface GovernanceIssues {
  borderInfrastructure: string;
  agriculturalProblems: string;
  ruralConnectivity: string;
}

export interface GovernanceGap {
  administrativeStructure: AdministrativeStructure;
  serviceDelivery: ServiceDelivery;
  governanceIssues: GovernanceIssues;
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
  youthActivists: string;
}

export interface KeyInfluencers {
  kisanUnionLeaders: string;
  youthActivists: string;
  localCongressLeaders: string;
  sikhReligiousLeaders: string;
}

export interface PowerStructure {
  nonPoliticalInfluencers: NonPoliticalInfluencers;
  politicalNodes: PoliticalNodes;
  keyInfluencers: KeyInfluencers;
  casteEquations: string;
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface AAPStrategy {
  maintainMargin: string;
  governanceDelivery: string;
  youthEmployment: string;
}

export interface CongressStrategy {
  rebuilding: string;
  localCandidate: string;
  antiIncumbency: string;
}

export interface BJPStrategy {
  combiningWithSAD: string;
  hinduVoterMobilization: string;
}

export interface PartyStrategies {
  aap: AAPStrategy;
  congress: CongressStrategy;
  bjp: BJPStrategy;
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
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualification: string;
  keyQualities: string[];
  mustAddress: string[];
}

export interface AttackLines {
  attackLine1: string;
  attackLine2: string;
  attackLine3: string;
  attackLine4: string;
  attackLine5: string;
}

export interface CongressStrategicPosition {
  status: string;
  detail: string;
  historicalWinPattern: string;
  challenges: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressPosition: CongressStrategicPosition;
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
  microTaskInfo: {
    taskId: string;
    topic: string;
    tier: string;
    date: string;
    agent: string;
    sourcesConsulted: string;
    verificationStatus: string;
    dataCurrency: string;
  };
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC040DasuyaTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;

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
  partyStrategies: PartyStrategies;

  // Strategy
  swotAnalysis: SwotAnalysis;
  politicalStrategy: PoliticalStrategy;

  // External
  externalFactors: ExternalFactors;

  // Quality
  dataQuality: DataQuality;
}
