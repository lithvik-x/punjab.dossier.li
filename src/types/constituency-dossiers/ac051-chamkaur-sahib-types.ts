/**
 * AC051-Chamkaur Sahib Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC051-Chamkaur-Sahib.md + AC051-ChamkaurSahib-deep.md
 */

export interface AC051Header {
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: string;
  dataCurrency: string;
}

export interface AC051ConstituencyProfile {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
}

export interface AC051ElectionResult {
  year: number;
  winner: string;
  party: string;
  margin?: string;
  marginVotes?: number;
  runnerUp?: string;
  votes?: number;
  votePercentage?: number;
  status: "Winner" | "Runner-up" | "Verifying";
}

export interface AC051ElectionResults {
  2022: AC051ElectionResult;
  2017: AC051ElectionResult;
  2012: AC051ElectionResult;
}

export interface AC051CasteComposition {
  category: string;
  estimatedPercentage: string;
}

export interface AC051CasteBreakdown {
  community: string;
  percentage: number;
  category: "SC" | "Sikh" | "Hindu" | "Other";
}

export interface AC051VoterTurnout {
  election: number;
  totalElectors: string;
  votesPolled?: string;
  voterTurnout: string;
  turnoutPercentage?: number;
}

export interface AC051KeyLocalIssue {
  id: number;
  issue: string;
  description?: string;
  priority?: "High" | "Medium" | "Low";
}

export interface AC051CongressStrategicPosition {
  lossIn2022: boolean;
  margin: number;
  marginVotes: number;
  opportunity: string;
  significance: string;
  whyCongressCanWin: string[];
  recommendations: string[];
}

export interface AC051CandidateProfile {
  caste: string;
  background: string;
  age: string;
  quality: string;
  note: string;
}

export interface AC051AttackLine {
  topic: string;
  description: string;
}

export interface AC051VoteShareAnalysis {
  party: string;
  voteShare: number;
  note?: string;
}

export interface AC051RecommendationsSummary {
  priority: string;
  candidate: string;
  narrative: string;
  groundGame: string;
  marginReversalPotential: string;
}

// Deep dossier types

export interface AC051ConstituencyIdentity {
  acNo: number;
  name: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  character: string;
  borderStatus: string;
}

export interface AC051GeographicProfile {
  location: string;
  description: string;
  mix: string;
  connectivity: string;
}

export interface AC051ScSubGroups {
  group: string;
  description: string;
}

export interface AC051CasteCoalitionMath {
  category: string;
  percentage: string;
  note?: string;
}

export interface AC051ElectorateData2022 {
  metric: string;
  value: string;
}

export interface AC051VoterTurnoutTrend {
  year: number;
  turnoutPercentage: string;
  notes: string;
}

export interface AC051FirstTimeVoters {
  estimate: string;
  behavior: string;
}

export interface AC051VoterEcosystem {
  electorateData: AC051ElectorateData2022[];
  voterTurnoutTrend: AC051VoterTurnoutTrend[];
  firstTimeVoters: AC051FirstTimeVoters;
}

export interface AC051LocalIssueDetail {
  issue: string;
  details: string[];
}

export interface AC051TopFiveIssues {
  issueName: string;
  description: string;
  subIssues: string[];
}

export interface AC051GovernanceAudit {
  district: string;
  dc: string;
  subDivision: string;
  currentMla: string;
  mlaParty: string;
  mlaTenure: string;
}

export interface AC051MlaPerformance {
  name: string;
  party: string;
  achievement: string;
  performance: string;
}

export interface AC051ActiveScheme {
  scheme: string;
  description: string;
}

export interface AC051PoliticalInfluencer {
  name: string;
  role: string;
  party?: string;
  description: string;
}

export interface AC051CommunityLeader {
  type: string;
  influence: string;
}

export interface AC051InfluencersPowerStructure {
  politicalInfluencers: AC051PoliticalInfluencer[];
  communityLeaders: AC051CommunityLeader[];
}

export interface AC051AAPVulnerability {
  weakness: string;
  explanation: string;
}

export interface AC051AAPPromiseStatus {
  promise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AC051AAPWeakPoints {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AC051AAPVulnerabilityAnalysis {
  whyAAPIsVulnerable: string[];
  weakPoints: AC051AAPWeakPoints[];
}

export interface AC051CongressBlueprint {
  currentPosition: {
    result2022: string;
    incumbent: string;
    congressVoteShare: string;
    gapToWin: string;
  };
  winningStrategy: {
    phase1: {
      name: string;
      steps: string[];
    };
    phase2: {
      name: string;
      narratives: string[];
    };
    phase3: {
      name: string;
      activities: string[];
    };
  };
}

export interface AC051CandidateRecommendation {
  idealProfile: {
    caste: string;
    subCaste: string;
    age: string;
    background: string;
    family: string;
    cleanImage: string;
    connect: string;
    availability: string;
  };
  candidateTypes: {
    type: string;
    pros: string;
    cons: string;
  }[];
  recommendedApproach: string[];
}

export interface AC051VoteShareBreakdown {
  party: string;
  votes: number;
  sharePercentage: number;
  trend: string;
}

export interface AC051CongressGapAnalysis {
  votesNeededToWin: number;
  currentCongressVotes: number;
  gap: number;
  halfMarginTarget: string;
  sadVotesToTarget: string;
}

export interface AC051ScenarioProjection {
  scenario: string;
  aap: number;
  inc: number;
  margin: string;
  winner: string;
}

export interface AC051WinningThreshold {
  description: string;
  targetVoterSwitch: string;
  achievability: string;
}

export interface AC051PriorityRanking {
  tier: string;
  acNumber: number;
  constituency: string;
  margin: number;
  targetStatus: string;
}

export interface AC051VoteShareAnalysis2027 {
  resultsBreakdown: AC051VoteShareBreakdown[];
  congressGapAnalysis: AC051CongressGapAnalysis;
  projectionModel: AC051ScenarioProjection[];
  winningThreshold: AC051WinningThreshold;
  priorityRanking: AC051PriorityRanking[];
}

export interface AC051Sources {
  sources: string[];
  compiled: string;
  nextUpdate: string;
  status: string;
}

// Complete main export

export interface AC051ChamkaurSahibTypes {
  // Header metadata
  header: AC051Header;

  // Executive summary
  executiveSummary: string;

  // Basic constituency info (from main dossier)
  constituencyProfile: AC051ConstituencyProfile;

  // Election history
  electionResults: AC051ElectionResults;

  // Demographics
  casteComposition: AC051CasteComposition[];
  casteBreakdown: AC051CasteBreakdown[];

  // Voter data
  electorateData: AC051VoterTurnout[];

  // Local issues
  keyLocalIssues: AC051KeyLocalIssue[];

  // Congress position
  congressStrategicPosition: AC051CongressStrategicPosition;

  // Candidate
  recommendedCandidateProfile: AC051CandidateProfile;

  // Attack lines
  attackLinesAgainstAAP: AC051AttackLine[];

  // Vote share
  voteShareAnalysis: AC051VoteShareAnalysis[];

  // Recommendations
  recommendationsSummary: AC051RecommendationsSummary;

  // Deep dossier sections
  constituencyIdentity: AC051ConstituencyIdentity;
  geographicProfile: AC051GeographicProfile;
  scSubGroups: AC051ScSubGroups[];
  casteCoalitionMath: AC051CasteCoalitionMath[];
  voterEcosystem: AC051VoterEcosystem;
  topFiveIssues: AC051TopFiveIssues[];
  governanceAudit: AC051GovernanceAudit;
  mlaPerformance: AC051MlaPerformance;
  activeSchemes: AC051ActiveScheme[];
  influencersPowerStructure: AC051InfluencersPowerStructure;
  aapVulnerabilityAnalysis: AC051AAPVulnerabilityAnalysis;
  congressStrategicBlueprint: AC051CongressBlueprint;
  candidateRecommendation: AC051CandidateRecommendation;
  voteShareAnalysis2027: AC051VoteShareAnalysis2027;
  sources: AC051Sources;
}

export type AC051ChamkaurSahibType = AC051ChamkaurSahibTypes;
