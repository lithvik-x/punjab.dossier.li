/**
 * AC060-Ludhiana East Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC060-Ludhiana-East.md, AC060-LudhianaEast-deep.md
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
  lokSabhaSeat: string;
  character: string;
  date: string;
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
  urbanVoterDynamics: string;
  congressChallenge: string;
  congressHeld2017: string;
}

export interface GeographicProfile {
  fullyUrban: boolean;
  partOfLudhianaCity: boolean;
  commercialAndResidentialMix: boolean;
  industrialWorkersPresent: boolean;
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
  runnerUp: string;
  totalElectors: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectionHistory {
  result2022: ElectionResult2022;
  result2017: ElectionResult2017;
  result2012: ElectionResult2012;
  keyTrend: string;
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

export interface VoteShare2022 {
  party: string;
  voteShare: string;
  votesEstimated: string;
}

export interface VoteShareAnalysis {
  parties2022: VoteShare2022[];
  congressGapAnalysis: string;
  marginDataStatus: string;
}

// ============================================================================
// ELECTORATE DATA
// ============================================================================

export interface ElectorateRecord {
  election: string;
  totalElectors: string;
  voterTurnout: string;
  turnoutPercentage: string;
}

export interface ElectorateData {
  records: ElectorateRecord[];
}

export interface VoterTurnoutTrend {
  year: string;
  turnoutPercentage: string;
  notes: string;
}

export interface VoterEcosystem {
  electorateData2022: {
    totalElectors: string;
    votesPolled: string;
    voterTurnout: string;
  };
  voterTurnoutTrend: VoterTurnoutTrend[];
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

export interface KeyCommunities {
  community: string;
  description: string;
}

export interface DemographicDeepDive {
  populationComposition: CasteCategory[];
  keyCommunities: KeyCommunities[];
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
    lossIn2022: string;
    challenge: string;
    opportunity: string;
  };
  strategicConsiderations: string[];
  recommendations: string[];
}

export interface CongressStrategicBlueprint {
  currentPosition: {
    result2022: string;
    opportunity: string;
    challenge: string;
  };
  winningStrategy: {
    phase1: {
      timeframe: string;
      activities: string[];
    };
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
  lines: AttackLine[];
}

// ============================================================================
// 2027 PROJECTION
// ============================================================================

export interface CongressGapAnalysis {
  margin: string;
  congress2017Winner: string;
  urbanShiftToRecover: string;
}

export interface PriorityRanking {
  tier: string;
  priorityLevel: string;
  description: string;
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
}

// ============================================================================
// DEEP RESEARCH
// ============================================================================

export interface DeepResearch {
  constituencyIdentity: {
    acNo: string;
    name: string;
    district: string;
    region: string;
    category: string;
    lokSabhaSeat: string;
    character: string;
    borderStatus: string;
  };
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
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC060LudhianaEastTypes {
  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;

  // Geographic
  geographicProfile: GeographicProfile;
  borderStatus: BorderStatus;

  // Elections
  electionHistory: ElectionHistory;
  electorateData: ElectorateData;

  // Demographics
  casteComposition: CasteComposition;
  demographicDeepDive: DemographicDeepDive;

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
  voteShareAnalysis: VoteShareAnalysis;
  voteShareProjection2027: VoteShareProjection2027;
  priorityRanking: PriorityRanking;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}
