/**
 * AC065-Ludhiana North Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC065-Ludhiana-North.md, AC065-LudhianaNorth-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  date: string;
}

export interface ConstituencyIdentity {
  acNo: string;
  name: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  character: string;
  borderStatus: string;
}

export interface ConstituencyProfile {
  acNumber: string;
  officialName: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  character: string;
}

export interface ExecutiveSummary {
  overview: string;
  winner: string;
  party: string;
  runnerUp: string;
  margin: number;
  urbanVoterDynamics: string;
  congressChallenge: string;
  congressRecovery: string;
  competitiveSeat: string;
  traditionalCongressBase: string;
  recoveryTarget2027: string;
}

export interface GeographicProfile {
  mixOfUrbanCoreAndRural: boolean;
  significantPeriUrbanAreas: boolean;
  villagesTransitioningToUrban: boolean;
  northLudhianaDevelopmentZone: boolean;
  borderStatus: string;
}

export interface BorderStatus {
  isBorderDistrict: boolean;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: number;
  marginVotes: number;
  defeated: string;
  note: string;
}

export interface DeepElectoralHistory2022 {
  candidate: string;
  party: string;
  votes: string;
  voteShare: string;
  margin: string;
}

export interface DeepElectoralHistoryCandidate {
  candidate: string;
  party: string;
  votes: string;
  position: string;
}

export interface DeepElectoralHistory {
  election2022: DeepElectoralHistory2022[];
  election2017: {
    winner: string;
    pattern: string;
  };
  election2012: {
    winner: string;
    pattern: string;
  };
  historicalTrendAnalysis: string;
  historicalTrend: {
    year: number;
    party: string;
    result: string;
    note: string;
  }[];
}

export interface ElectionHistory {
  result2022: ElectionResult2022;
  historicalContext: string;
  congressHistoricallyStrong: string;
  aapBreakthrough2022: string;
  patternSimilarToOtherLudhianaSeats: string;
  traditionalCongressVoterBasePersists: string;
  keyTrend: string;
}

export interface VoteShare2022 {
  party: string;
  voteShare: string;
  votesEstimated: string;
}

export interface VoteShareAnalysis {
  parties2022: VoteShare2022[];
  congressGapAnalysis: string;
  votesNeeded: string;
  halfMargin: string;
  marginDataStatus: string;
}

// ============================================================================
// ELECTORATE DATA
// ============================================================================

export interface ElectorateData2022 {
  totalElectors: string;
  voterTurnout: string;
}

export interface VoterTurnoutRecord {
  year: string;
  turnoutPercentage: string;
  notes: string;
}

export interface VoterEcosystem {
  electorateData2022: ElectorateData2022;
  voterTurnoutTrend: VoterTurnoutRecord[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
  notes?: string;
}

export interface CasteComposition {
  categories: CasteCategory[];
  keyDemographics: string[];
}

export interface KeyCommunity {
  community: string;
  location: string;
}

export interface DemographicDeepDive {
  populationComposition: CasteCategory[];
  keyCommunities: KeyCommunity[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  subIssues?: string[];
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

export interface LocalIssuesGrievances {
  top5IssuesPriorityOrder: LocalIssue[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    result2022: string;
    margin: string;
    challenge: string;
    analysis: string;
  };
  strategyRequirements: string[];
  opportunities: string[];
  boothLevelOrganizingIsParamount: string;
  casteCommunityMath: string;
}

export interface CongressStrategicBlueprint {
  currentPosition: {
    result2022: string;
    opportunity: string;
    margin: string;
    challenge: string;
  };
  winningStrategy: {
    phase1: {
      timeframe: string;
      activities: string[];
    };
  };
  traditionalVoterActivation: {
    congressFamilyNetworks: string;
    boothLevelWorkers: string;
    casteCommunityConsolidation: string;
  };
  drugCrisisCampaign: {
    priority: string;
    narrative: string;
  };
  periUrbanIssuesFocus: {
    urbanRuralTransitionProblems: string;
    northLudhianaDevelopment: string;
    infrastructureGaps: string;
  };
  candidateSelection: {
    criteria: string[];
  };
}

// ============================================================================
// GOVERNANCE AUDIT
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
  background: string;
  performance: string;
  accessibilityConcerns: string;
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
  description: string;
  attributes: string[];
}

export interface InfluencersPowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
}

// ============================================================================
// AAP VULNERABILITY ANALYSIS
// ============================================================================

export interface WhyAapVulnerable {
  reasons: string[];
}

export interface AapWeakPoint {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AapWeakPoints {
  points: AapWeakPoint[];
}

export interface AapVulnerabilityAnalysis {
  whyAapVulnerable: WhyAapVulnerable;
  aapWeakPoints: AapWeakPoints;
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  requirement: string;
}

export interface CandidateRecommendation {
  idealCandidateProfile: CandidateAttribute[];
  priorityApproach: string[];
}

export interface RecommendedCandidateProfile {
  table: {
    attribute: string;
    idealProfile: string;
  }[];
  keySelectionCriteria: string[];
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
  congressNarrative: string[];
}

// ============================================================================
// 2027 PROJECTION
// ============================================================================

export interface CongressGapAnalysis {
  margin: string;
  votesNeeded: string;
  halfMargin: string;
  traditionalBase: string;
}

export interface PriorityRanking {
  tier: string;
  priorityLevel: string;
  description: string;
  margin: string;
  relatedSeats: {
    acNumber: string;
    name: string;
    margin?: string;
    note?: string;
  }[];
}

export interface VoteShareProjection2027 {
  voteShare2022: VoteShare2022[];
  gapAnalysis: CongressGapAnalysis;
  projection: PriorityRanking;
  tier1HighPriority: string;
}

// ============================================================================
// DEEP RESEARCH
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

export interface DeepResearch {
  metadata: ResearchMetadata;
  constituencyIdentity: ConstituencyIdentity;
  geographicProfile: GeographicProfile;
  electoralHistory: DeepElectoralHistory;
  demographics: DemographicDeepDive;
  voterEcosystem: VoterEcosystem;
  localIssues: LocalIssuesGrievances;
  governanceAudit: GovernanceAudit;
  influencersPowerStructure: InfluencersPowerStructure;
  aapVulnerabilityAnalysis: AapVulnerabilityAnalysis;
  congressStrategicBlueprint: CongressStrategicBlueprint;
  candidateRecommendation: CandidateRecommendation;
  voteShareProjection2027: VoteShareProjection2027;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface VerificationStatus {
  status: "VERIFIED" | "PARTIALLY VERIFIED" | "UNVERIFIED";
  notes: string[];
}

export interface DataQuality {
  sources: string[];
  compiledDate: string;
  verificationStatus: VerificationStatus;
  dataCurrency: string;
  researchStatus?: string;
  status?: string;
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface MainDossierData {
  header: ConstituencyHeader;
  constituencyOverview: string;
  electionHistory: ElectionHistory;
  voteShareAnalysis: VoteShareAnalysis;
  casteComposition: CasteComposition;
  keyLocalIssues: KeyLocalIssues;
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
  notes: string[];
  congressMustWork: string;
  boothLevelOrganizing: string;
  marginRecoverable: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC065LudhianaNorthTypes {
  // Identity
  identity: ConstituencyIdentity;
  header: ConstituencyHeader;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;

  // Geographic
  geographicProfile: GeographicProfile;
  borderStatus: BorderStatus;

  // Elections
  electionHistory: ElectionHistory;
  voteShareAnalysis: VoteShareAnalysis;

  // Demographics
  casteComposition: CasteComposition;
  demographicDeepDive: DemographicDeepDive;

  // Electorate
  voterEcosystem: VoterEcosystem;

  // Issues
  keyLocalIssues: KeyLocalIssues;
  localIssuesGrievances: LocalIssuesGrievances;

  // Strategy
  congressStrategicPosition: CongressStrategicPosition;
  congressStrategicBlueprint: CongressStrategicBlueprint;
  congressGapAnalysis: CongressGapAnalysis;
  aapVulnerabilityAnalysis: AapVulnerabilityAnalysis;

  // Governance
  governanceAudit: GovernanceAudit;

  // Influencers
  influencersPowerStructure: InfluencersPowerStructure;

  // Candidate
  recommendedCandidateProfile: RecommendedCandidateProfile;
  candidateRecommendation: CandidateRecommendation;

  // Attack Lines
  attackLines: AttackLinesAgainstAAP;

  // Vote Share
  voteShareProjection2027: VoteShareProjection2027;
  priorityRanking: PriorityRanking;

  // Deep Research
  deepResearch: DeepResearch;

  // Main Dossier
  mainDossier: MainDossierData;

  // Quality
  dataQuality: DataQuality;
}
