/**
 * AC084-Giddarbaha Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC084-Giddarbaha.md, AC084-Giddarbaha-deep.md
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

export interface ConstituencyProfile {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  category: "GEN" | "SC" | "ST" | "BC";
  parliamentaryConstituency: string;
}

export interface ExecutiveSummary {
  overview: string;
  politicalContext: string;
  keyTakeaway: string;
}

// ============================================================================
// RESEARCH METADATA
// ============================================================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: "VERIFIED" | "PARTIALLY VERIFIED" | "needs_verification";
  dataCurrency: string;
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
  totalVotesPolled: string;
  voterTurnout: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  totalElectors: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin: string;
  status: "verified" | "needs_verification";
}

export interface ElectoralHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  historyEntries: ElectoralHistoryEntry[];
}

export interface DeepElectionResults {
  winner: string;
  party: string;
  turnout: string;
  totalElectors: string;
  status: "verified" | "needs_verification";
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DemographicsCensus2011 {
  total: string;
  status: "verified" | "needs_verification";
}

export interface CasteCompositionDetailed {
  jatSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
  muslim: string;
  other: string;
  status: "verified" | "needs_verification";
}

export interface ReligionDistributionDistrict {
  sikh: string;
  hindu: string;
  others: string;
  source: string;
}

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout: string;
  areaCharacter: string;
}

export interface DeepVoterProfile {
  turnout2022: string;
  areaCharacter: string;
  ruralUrban: "Rural" | "Urban" | "Mixed";
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  sikkMajority: string;
  hinduMinority: string;
  jatSikh: string;
  scPopulation: string;
  obc: string;
}

export interface CasteCompositionDeep {
  jatSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
  muslim: string;
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface KeyIssuesAndGrievances {
  primaryIssues: KeyLocalIssue[];
  attackLinesForCongress: string[];
}

export interface DeepKeyIssues {
  agriculturalDistress: string[];
  drugCrisis: string[];
  unemployment: string[];
  ruralInfrastructure: string[];
  groundwaterDepletion: string[];
}

// ============================================================================
// POLITICAL SIGNIFICANCE
// ============================================================================

export interface PoliticalSignificance {
  incumbentName: string;
  politicalContext: string;
  marginSignificance: string;
  partyBastion: string;
}

export interface PoliticalParties {
  winner: string;
  runnerUp: string;
  margin: string;
  marginCategory: "close" | "significant" | "landslide";
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentPosition: string;
  incumbentName: string;
  margin2022: string;
  vulnerabilityAssessment: string;
  challenges: string[];
  strategicFocus: string[];
}

export interface CongressStrategyDeep {
  currentPosition: string;
  candidateRequirement: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

// ============================================================================
// RECOMMENDED CANDIDATE
// ============================================================================

export interface RecommendedCandidate {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoter: string[];
}

export interface CandidateProfileDeep {
  profile: string;
  casteBackground: string;
  keyQualities: string[];
  ruralConnect: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLines {
  drugCrisis: string;
  unemployment: string;
  brokenPromises: string;
  governanceFailures: string;
  healthFacilities: string;
}

export interface AttackLinesDeep {
  coreMessage: string;
  drugDeaths: string;
  youthUnemployment: string;
  agriculturalCrisis: string;
  healthFacilities: string;
  governanceCollapse: string;
}

// ============================================================================
// POLITICAL PLAYERS & INFLUENCERS
// ============================================================================

export interface PoliticalPlayers {
  keyPoliticalFamilies: string;
  status: "verified" | "needs_verification";
}

export interface InfluencersDeep {
  traditionalVotingPatterns: string;
  congressBase: string;
  sadBase: string;
}

// ============================================================================
// 2027 OUTLOOK
// ============================================================================

export interface Outlook2027 {
  congressStrategy: string;
  keyWinningStrategy: StrategyItem[];
}

export interface StrategyItem {
  element: string;
  description: string;
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  topic: string;
  status: "needs_verification" | "verified";
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
  summary: string;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface DataSource {
  name: string;
  url: string;
}

export interface ResearchStatus {
  status: "partial" | "complete" | "verified";
  verificationNeeded: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
  metadata: ResearchMetadata;
}

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

export interface DeepResearchData {
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyProfile;
  demographics: DemographicsCensus2011;
  casteCompositionDeep: CasteCompositionDeep;
  religionDistribution: ReligionDistributionDistrict;
  electoralHistory: ElectoralHistoryEntry[];
  keyIssues: DeepKeyIssues;
  politicalPlayers: PoliticalPlayers;
  voterProfile: DeepVoterProfile;
  outlook2027: Outlook2027;
  intelligenceGaps: IntelligenceGaps;
  congressStrategy: CongressStrategyDeep;
  dataQuality: DataQuality;
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface MainDossierData {
  identity: ConstituencyIdentity;
  electionHistory: ElectoralHistory;
  politicalSignificance: PoliticalSignificance;
  casteComposition: CasteComposition;
  voterDemographics: VoterDemographics;
  keyLocalIssues: KeyLocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  dataQuality: DataQuality;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC084GiddarbahaTypes {
  // Identity
  researchMetadata: ResearchMetadata;
  identity: ConstituencyIdentity;
  constituencyProfile: ConstituencyProfile;

  // Demographics
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;
  religionDistribution: ReligionDistributionDistrict;
  voterDemographics: VoterDemographics;
  demographicsCensus2011: DemographicsCensus2011;

  // Elections
  electionHistory: ElectoralHistory;
  deepElectionResults: DeepElectionResults;

  // Political Context
  politicalSignificance: PoliticalSignificance;
  politicalParties: PoliticalParties;

  // Issues
  keyLocalIssues: KeyLocalIssue[];
  keyIssuesAndGrievances: KeyIssuesAndGrievances;
  deepKeyIssues: DeepKeyIssues;

  // Strategy
  congressStrategicPosition: CongressStrategicPosition;
  congressStrategyDeep: CongressStrategyDeep;
  recommendedCandidate: RecommendedCandidate;
  candidateProfileDeep: CandidateProfileDeep;
  attackLines: AttackLines;
  attackLinesDeep: AttackLinesDeep;

  // Influencers
  politicalPlayers: PoliticalPlayers;
  influencersDeep: InfluencersDeep;

  // Outlook
  outlook2027: Outlook2027;

  // Intelligence
  intelligenceGaps: IntelligenceGaps;

  // Quality
  dataQuality: DataQuality;

  // Combined
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
}

export type AC084GiddarbahaDossier = AC084GiddarbahaTypes;
