/**
 * AC081-Abohar Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC081-Abohar.md (Tier 1 - VERIFIED), AC081-Abohar-deep.md (Tier 2 - PARTIALLY VERIFIED)
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
  verificationStatus: "VERIFIED" | "PARTIALLY VERIFIED";
  dataCurrency: string;
}

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  borderDistance?: string;
  parliamentarySeat: string;
}

export interface ConstituencyProfile {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  border?: string;
  category: "General" | "SC" | "ST" | "BC";
  parliamentaryConstituency: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  source: string;
  jathSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  muslim: string;
  otherBackwardClasses: string;
  dominantCastes?: string[];
  obcBreakdown?: string;
}

export interface CasteCompositionDeep {
  hinduMajorityUrban: string;
  sikhUrban: string;
  dominantCastes: string[];
  obcPercentage: string;
  obcIncludes: string;
  scPopulation: string;
}

export interface ReligionDistribution {
  source: string;
  sikh: string;
  hindu: string;
  others: string;
}

export interface LiteracyRate {
  district: string;
  rate: string;
  censusYear: number;
}

export interface Demographics {
  population: string;
  casteComposition: CasteComposition;
  religionDistribution: ReligionDistribution;
  literacyRate: LiteracyRate;
}

export interface DistrictDemographics {
  totalPopulation: string;
  sexRatio?: string;
  literacyRate: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  partyFull: string;
  voteShare: string;
  margin: string;
  marginVotes: number;
  runnerUp: string;
  runnerUpParty: string;
  totalVotesPolled: string;
  totalElectors?: string;
  voterTurnout?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  partyFull: string;
  margin: string;
  marginVotes: number;
  defeated: string;
  partyDefeated: string;
  totalElectors: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  status: string;
}

export interface ElectoralHistory {
  year: number;
  winner: string;
  party: string;
  margin: string;
  verification: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  historicalResults: ElectoralHistory[];
  turnoutPattern?: string;
  coreVoters?: string[];
  swingFactors?: string[];
}

export interface VoterDemographics {
  totalElectors2017: string;
  voterTurnout: string;
  urbanRuralMix: string;
}

export interface VoterProfile {
  turnoutAnalysis: {
    stateAverage: string;
    aboharEstimate: string;
    trend: string;
  };
  voterDemographics: {
    ruralVoters: string;
    urbanVoters: string;
    youngVoters: string;
  };
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface LocalIssues {
  issues: LocalIssue[];
}

export interface KeyIssues {
  primaryIssues: {
    drugCrisis: string;
    agriculturalDistress: string;
    unemployment: string;
    waterScarcity: string;
    borderAreaIssues: string;
  };
  attackLinesForCongress: string[];
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface PublicSentiment {
  mlSatisfaction?: string;
  issues: LocalIssue[];
  misinformationStatus: "verified" | "needs_verification";
}

export interface SentimentIndicator {
  indicator: string;
  status: string;
}

// ============================================================================
// POLITICAL PLAYERS
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  background: string;
  strengths: string[];
  incumbencyStatus?: string;
}

export interface KeyCompetitor {
  name: string;
  party: string;
  status: string;
}

export interface PoliticalPlayer {
  name: string;
  role: string;
  party?: string;
  background?: string;
  strengths?: string[];
}

export interface PoliticalPlayers {
  currentMLA: CurrentMLA;
  keyCompetitors: KeyCompetitor[];
  localInfluencers: string;
}

export interface CongressStrategicPosition {
  currentStatus: string;
  incumbentName: string;
  capitalizingOn: string[];
  needToAddress: string[];
  targetVoters: string[];
}

export interface StrategicPosition {
  congressPosition: CongressStrategicPosition;
}

// ============================================================================
// CANDIDATE RECOMMENDATION
// ============================================================================

export interface CandidateProfile {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoter: string;
}

export interface RecommendedCandidate {
  profile: string;
  background: string;
  keyQualities: string[];
}

export interface CandidateRecommendation {
  recommendedProfile: CandidateProfile;
}

export interface AttackLine {
  line: string;
}

export interface AttackLines {
  drugCrisis: string;
  unemployment: string;
  brokenPromises: string;
  governanceFailures: string;
  healthInfrastructure: string;
  industrialGrowth: string;
  lawAndOrder: string;
}

export interface AttackLinesAgainstAAP {
  lines: string[];
}

// ============================================================================
// GOVERNANCE & DEVELOPMENT
// ============================================================================

export interface DevelopmentIndicators {
  roadConnectivity: string;
  healthcareFacilities: string;
  educationalInstitutions: string;
  industrialDevelopment: string;
}

export interface GovernanceGap {
  serviceDelivery: {
    health: string;
    education: string;
    roads: string;
    waterSanitation: string;
  };
  developmentIndicators: DevelopmentIndicators;
}

export interface StateGovernmentSchemes {
  beneficiaryData: string;
}

// ============================================================================
// BOOTH ANALYSIS
// ============================================================================

export interface BoothProfile {
  strongBooth: string;
  marginalBooth: string;
  status: "verified" | "needs_verification";
}

export interface BoothAnalysis {
  strongBoothProfile: {
    description: string;
    status: string;
  };
  marginalBoothProfile: {
    description: string;
    status: string;
  };
}

// ============================================================================
// 2027 OUTLOOK
// ============================================================================

export interface CongressStrengths2027 {
  points: string[];
}

export interface CongressChallenges2027 {
  points: string[];
}

export interface KeyWinningStrategy {
  strategies: string[];
}

export interface Outlook2027 {
  congressStrengths: CongressStrengths2027;
  congressChallenges: CongressChallenges2027;
  keyWinningStrategy: KeyWinningStrategy;
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  item: string;
  verificationNeeded: string;
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

export interface RequiredVerification {
  items: string[];
}

// ============================================================================
// DATA QUALITY
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
// COMPLETE DOSSIER TYPES
// ============================================================================

export interface AC081AboharMainDossier {
  metadata: ResearchMicroTask;
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  demographics: Demographics;
  casteCompositionDeep: CasteCompositionDeep;
  religionDistribution: ReligionDistribution;
  districtDemographics: DistrictDemographics;
  voterDemographics: VoterDemographics;
  voterProfile: VoterProfile;
  electionHistory: ElectionHistory;
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  localIssues: LocalIssues;
  keyIssues: KeyIssues;
  publicSentiment: PublicSentiment;
  politicalPlayers: PoliticalPlayers;
  congressPosition: CongressStrategicPosition;
  governanceGap: GovernanceGap;
  boothAnalysis: BoothAnalysis;
  outlook2027: Outlook2027;
  intelligenceGaps: IntelligenceGaps;
  dataQuality: DataQuality;
}

export interface AC081AboharDeepResearch {
  metadata: ResearchMicroTask;
  executiveSummary: string;
  constituencyProfile: {
    basicDetails: ConstituencyProfile;
    borderInfo: string;
  };
  demographics: {
    population: string;
    casteComposition: CasteComposition;
    religionDistribution: ReligionDistribution;
    literacyRate: LiteracyRate;
  };
  electoralHistory: {
    table: ElectoralHistory[];
  };
  keyIssues: KeyIssues;
  politicalPlayers: PoliticalPlayers;
  voterProfile: VoterProfile;
  governance: {
    developmentIndicators: DevelopmentIndicators;
    stateGovernmentSchemes: StateGovernmentSchemes;
  };
  boothAnalysis: BoothAnalysis;
  outlook2027: Outlook2027;
  intelligenceGaps: IntelligenceGaps;
  recommendations: string[];
  attackLines: string[];
}

export interface AC081AboharTypes {
  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;

  // Demographics
  demographics: Demographics;
  casteCompositionDeep: CasteCompositionDeep;
  religionDistribution: ReligionDistribution;
  districtDemographics: DistrictDemographics;
  voterDemographics: VoterDemographics;
  voterProfile: VoterProfile;

  // Elections
  electionHistory: ElectionHistory;
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;

  // Issues
  localIssues: LocalIssues;
  keyIssues: KeyIssues;
  publicSentiment: PublicSentiment;

  // Political
  politicalPlayers: PoliticalPlayers;
  congressPosition: CongressStrategicPosition;
  candidateRecommendation: CandidateRecommendation;
  attackLines: AttackLinesAgainstAAP;

  // Governance
  governanceGap: GovernanceGap;

  // Booth
  boothAnalysis: BoothAnalysis;

  // Outlook
  outlook2027: Outlook2027;

  // Intelligence
  intelligenceGaps: IntelligenceGaps;

  // Quality
  dataQuality: DataQuality;
}
