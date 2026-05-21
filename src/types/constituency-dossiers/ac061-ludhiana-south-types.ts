/**
 * AC061-Ludhiana South Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC061-Ludhiana-South.md, AC061-LudhianaSouth-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  date: string;
}

export interface ConstituencyOverview {
  description: string;
  location: string;
  character: string;
}

export interface ConstituencyProfile {
  acNo: string;
  officialName: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  character: string;
  borderStatus: string;
}

export interface GeographicProfile {
  description: string;
  characteristics: string[];
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  partyFull: string;
  votesReceived: string;
  voteShare: string;
  runnerUp: string;
  runnerUpParty: string;
  margin: string;
  marginType: "NARROW" | "MODERATE" | "WIDE" | "SIGNIFICANT";
  turnout: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  votes: string;
  note: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  note: string;
  dataStatus: string;
}

export interface ElectionHistory {
  result2022: ElectionResult2022;
  result2017: ElectionResult2017;
  result2012: ElectionResult2012;
  historicalTrend: string;
}

export interface MarginAnalysisEntry {
  year: string;
  winner: string;
  margin: string;
  runnerUpParty: string;
}

export interface MarginAnalysis {
  entries: MarginAnalysisEntry[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
  notes?: string;
}

export interface DistrictLevelDemographics {
  scheduledCastes: string;
  upperCastes: string;
  obc: string;
  muslim: string;
  christian: string;
}

export interface KeyCasteGroups {
  groups: string[];
}

export interface CasteComposition {
  districtLevel: DistrictLevelDemographics;
  keyCasteGroups: KeyCasteGroups;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface Demographics {
  totalElectors2022: string;
  voterTurnoutTrend: VoterTurnoutTrend[];
  turnout2022: string;
  turnout2017: string;
}

export interface VoterTurnoutTrend {
  year: string;
  turnout: string;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  details?: string[];
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

export interface DeepLocalIssues {
  issues: string[];
  priorityOrder: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    result2022: string;
    result2017: string;
    voteShare: string;
  };
  keyChallenges: string[];
  opportunities: string[];
}

export interface WhyCongressCanWin {
  factors: string[];
}

export interface StrategicRecommendations {
  recommendations: string[];
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  idealProfile: string;
}

export interface RecommendedCandidateProfile {
  idealCharacteristics: string[];
  table: CandidateAttribute[];
  candidateTypes: string[];
}

export interface CandidateRecommendation {
  caste: string;
  profile: string;
  background: string;
  nameRecognition: string;
  age?: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  rank: number;
  title: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  vulnerabilities: AttackLine[];
  narratives: string[];
}

// ============================================================================
// VULNERABILITY ANALYSIS
// ============================================================================

export interface AapVulnerability {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AapWeakPoints {
  vulnerabilities: AapVulnerability[];
}

export interface AapVulnerabilityAnalysis {
  whyVulnerable: string[];
  weakPoints: AapVulnerability[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface AdministrativeStructure {
  district: string;
  dc: string;
  mc: string;
  mla: string;
  mlaParty: string;
  mlaTenure: string;
}

export interface MlaPerformanceAssessment {
  name: string;
  party: string;
  assessment: string;
  performanceNote: string;
}

export interface GovernanceAudit {
  administrativeStructure: AdministrativeStructure;
  mlaPerformance: MlaPerformanceAssessment;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  party: string;
  position: string;
  influence: string;
  details: string[];
}

export interface InfluencersPowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
}

export interface Influencer {
  name: string;
  party: string;
  role: string;
  details: string[];
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface CoalitionBuilding {
  phase: string;
  duration: string;
  strategies: string[];
}

export interface DalitVoterOutreach {
  target: string;
  communities: string[];
}

export interface CongressStrategy {
  currentPosition: string;
  challenge: string;
  opportunity: string;
  coalitionBuilding: CoalitionBuilding;
  dalitVoterOutreach: DalitVoterOutreach;
  candidateSelection: CandidateRecommendation;
}

export interface StrategicBlueprint {
  congressStrategy: CongressStrategy;
  phase1Timeline: string;
  priorityApproach: string[];
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface PartyVoteShare {
  party: string;
  sharePercentage: string;
  votesEstimate: string;
}

export interface CongressGapAnalysis {
  position2022: string;
  need: string;
  combinedAntiAAP: string;
}

export interface VoteShareAnalysis2022 {
  breakdown: PartyVoteShare[];
  congressGapAnalysis: CongressGapAnalysis;
}

export interface Projection2027 {
  tier: string;
  tierLevel: "TIER 1" | "TIER 2" | "TIER 3" | "CHALLENGING";
  description: string;
  requirements: string[];
}

export interface VoteShareAnalysis {
  results2022: PartyVoteShare[];
  gapAnalysis: CongressGapAnalysis;
  projection2027: Projection2027;
  priorityRanking?: string[];
}

// ============================================================================
// DEEP RESEARCH
// ============================================================================

export interface ExecutiveSummary {
  overview: string;
  winner: string;
  margin: string;
  congressOpportunity: string;
  seatHistory: string;
}

export interface DeepElectoralHistory {
  election2022: {
    candidate: string;
    party: string;
    votes: string;
    voteShare: string;
    margin: string;
  };
  election2017: {
    winner: string;
    party: string;
    pattern: string;
  };
  election2012: {
    winner: string;
    dataStatus: string;
    pattern: string;
  };
  historicalTrend: string;
}

export interface DeepDemographics {
  populationComposition: {
    category: string;
    estimatedPercentage: string;
    notes: string;
  }[];
  keyCommunities: string[];
}

export interface VoterEcosystem {
  electorateData: {
    metric: string;
    value: string;
  }[];
  turnoutTrend: {
    year: string;
    turnoutPercentage: string;
    notes: string;
  }[];
}

export interface DeepLocalIssuesGrievances {
  topIssues: {
    rank: number;
    title: string;
    description: string;
    subIssues: string[];
  }[];
}

export interface DeepCongressPosition {
  currentPosition: {
    result2022: string;
    challenge: string;
    opportunity: string;
  };
  winningStrategy: {
    coalitionBuilding: string[];
    dalitVoterOutreach: string[];
    candidateSelection: string[];
  };
}

export interface DeepResearch {
  executiveSummary: ExecutiveSummary;
  constituencyIdentity: ConstituencyProfile;
  geographicProfile: GeographicProfile;
  electoralHistory: DeepElectoralHistory;
  demographics: DeepDemographics;
  voterEcosystem: VoterEcosystem;
  localIssues: DeepLocalIssuesGrievances;
  governanceAudit: GovernanceAudit;
  influencersPowerStructure: InfluencersPowerStructure;
  aapVulnerabilityAnalysis: AapVulnerabilityAnalysis;
  congressStrategicBlueprint: CongressStrategy;
  candidateRecommendation: CandidateRecommendation;
  voteShareAnalysis: VoteShareAnalysis;
}

export interface DataQuality {
  sources: string[];
  compiledDate: string;
  verificationStatus: {
    status: "VERIFIED" | "PARTIALLY VERIFIED" | "UNVERIFIED";
    notes: string[];
  };
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC061LudhianaSouthTypes {
  // Identity
  identity: ConstituencyIdentity;
  overview: ConstituencyOverview;
  profile: ConstituencyProfile;

  // Elections
  electionHistory: ElectionHistory;
  marginAnalysis: MarginAnalysis;

  // Demographics
  casteComposition: CasteComposition;
  demographics: Demographics;

  // Issues
  keyLocalIssues: KeyLocalIssues;
  deepLocalIssues: DeepLocalIssues;

  // Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  whyCongressCanWin: WhyCongressCanWin;
  strategicRecommendations: StrategicRecommendations;
  recommendedCandidateProfile: RecommendedCandidateProfile;

  // Attack Lines
  attackLines: AttackLinesAgainstAAP;

  // AAP Analysis
  aapVulnerabilityAnalysis: AapVulnerabilityAnalysis;

  // Governance
  governanceAudit: GovernanceAudit;

  // Influencers
  influencersPowerStructure: InfluencersPowerStructure;

  // Vote Share
  voteShareAnalysis: VoteShareAnalysis;

  // Strategic Blueprint
  strategicBlueprint: StrategicBlueprint;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}

export type AC061LudhianaSouthDossier = AC061LudhianaSouthTypes;
