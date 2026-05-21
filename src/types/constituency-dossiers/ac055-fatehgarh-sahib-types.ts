/**
 * AC055-Fatehgarh Sahib Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC055-Fatehgarh-Sahib.md + AC055-FatehgarhSahib-deep.md
 */

// Main dossier types

export interface AC055Header {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General";
  lokSabhaSeat: string;
  religiousSignificance: string;
  date: string;
}

export interface AC055ExecutiveSummary {
  description: string;
  margin: number;
  marginVotes: number;
  winnableAssessment: string;
}

export interface AC055ConstituencyProfile {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  religiousSignificance: string;
}

export interface AC055ElectionResult {
  year: number;
  winner: string;
  party: string;
  margin?: string | number;
  marginVotes?: number;
  runnerUp?: string;
  votes?: number;
  votePercentage?: number;
  totalElectors?: number;
  voterTurnout?: number;
  turnoutPercentage?: number;
  status: "Winner" | "Runner-up" | "Verifying";
}

export interface AC055ElectionResults {
  2022: AC055ElectionResult;
  2017: AC055ElectionResult;
  2012: AC055ElectionResult;
}

export interface AC055CasteComposition {
  category: string;
  estimatedPercent: string;
  notes?: string;
}

export interface AC055KeyLocalIssue {
  id: number;
  issue: string;
  description?: string;
}

export interface AC055CongressPosition {
  lossIn2022: boolean;
  margin: number;
  marginVotes: number;
  opportunity: string;
  religiousFactor: string;
}

export interface AC055StrategicRecommendation {
  priority: string;
  candidate: string;
  narrative: string;
  groundGame: string;
  marginReversalPotential: string;
}

export interface AC055CandidateProfile {
  caste: string;
  background: string;
  age: string;
  quality: string;
  connect: string;
}

export interface AC055AttackLine {
  topic: string;
  description: string;
}

export interface AC055VoteShare {
  party: string;
  voteSharePercent: string;
}

export interface AC055VoteShareAnalysis {
  party: string;
  voteSharePercent: number;
  votesEstimated?: number;
}

export interface AC055CongressGapAnalysis {
  votesNeeded: number;
  targetSADVoters?: number;
  aapFlipNeeded?: number;
}

export interface AC055RecommendationsSummary {
  priority: string;
  candidate: string;
  narrative: string;
  groundGame: string;
  marginReversalPotential: string;
}

export interface AC055Sources {
  primary: string[];
  compiled: string;
}

// Deep dossier types

export interface AC055ConstituencyIdentity {
  constituencyDetails: {
    acNo: number;
    name: string;
    district: string;
    region: string;
    category: string;
    lokSabhaSeat: string;
    character: string;
    borderStatus: string;
  };
  geographicProfile: {
    description: string[];
  };
}

export interface AC055ElectoralHistory2022 {
  candidate: string;
  party: string;
  votes: string;
  voteShare: string;
  margin: string;
}

export interface AC055ElectoralHistoryDetail {
  2022: AC055ElectoralHistory2022[];
  totalElectors: number;
  voterTurnout: number;
  turnoutPercent: number;
  keyNotes: string;
}

export interface AC055HistoricalTrend {
  2012: string;
  2017: string;
  2022: string;
  analysis: string;
}

export interface AC055DemographicDeepDive {
  populationComposition: {
    category: string;
    estimatedPercent: number;
    notes: string;
  }[];
  keyCommunities: {
    community: string;
    description: string;
  }[];
}

export interface AC055VoterEcosystem {
  electorate2022: {
    totalElectors: number;
    votesPolled: number;
    voterTurnout: number;
  };
  turnoutTrend: {
    year: number;
    turnoutPercent: number;
    notes: string;
  }[];
}

export interface AC055LocalIssueDetail {
  issue: string;
  priority: number;
  details: string[];
}

export interface AC055TopIssues {
  issues: AC055LocalIssueDetail[];
}

export interface AC055GovernanceAudit {
  administrativeStructure: {
    district: string;
    dc: string;
    mc: string;
    mla: string;
    mlaParty: string;
    mlaTenure: string;
  };
  mlaPerformance: {
    name: string;
    party: string;
    localConnect: string;
    performanceAssessment: string;
  };
}

export interface AC055PoliticalInfluencer {
  name: string;
  description: string[];
}

export interface AC055InfluencersPowerStructure {
  politicalInfluencers: AC055PoliticalInfluencer[];
  congressLeaders: string[];
  sgpcReligiousLeaders: {
    description: string[];
  };
}

export interface AC055AAPVulnerabilityTable {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AC055AAPVulnerabilityAnalysis {
  whyAAPIsVulnerable: string[];
  weakPoints: AC055AAPVulnerabilityTable[];
}

export interface AC055CongressStrategicBlueprint {
  currentPosition: {
    result2022: string;
    opportunity: string;
    margin: string;
  };
  winningStrategy: {
    phase1: {
      title: string;
      duration: string;
      actions: string[];
    };
    candidateSelection: string[];
  };
}

export interface AC055CandidateRecommendation {
  idealCandidateProfile: {
    attribute: string;
    requirement: string;
  }[];
  priorityApproach: string[];
}

export interface AC055VoteShareProjection2022 {
  party: string;
  sharePercent: number;
  votesEst: number;
}

export interface AC055CongressGapAnalysisDeep {
  votesNeeded: number;
  sadVotersToTarget: number;
  aapFlipNeeded: number;
}

export interface AC0552027Projection {
  tier: string;
  priority: string;
  margin: number;
  votesAchievable: number;
  coalition: string;
}

export interface AC055PriorityRanking {
  tier: string;
  priority: string;
  seats: {
    ac: string;
    constituency: string;
    margin: number;
    note?: string;
  }[];
}

export interface AC055VoteShareAnalysisDeep {
  resultsBreakdown: AC055VoteShareProjection2022[];
  congressGapAnalysis: AC055CongressGapAnalysisDeep;
  projection2027: AC0552027Projection;
  priorityRanking: AC055PriorityRanking;
}

// Complete main export

export interface AC055FatehgarhSahibTypes {
  header: AC055Header;
  executiveSummary: AC055ExecutiveSummary;
  constituencyProfile: AC055ConstituencyProfile;
  electionResults: AC055ElectionResults;
  casteComposition: AC055CasteComposition[];
  keyLocalIssues: AC055KeyLocalIssue[];
  congressPosition: AC055CongressPosition;
  strategicRecommendations: AC055StrategicRecommendation;
  candidateProfile: AC055CandidateProfile;
  attackLines: AC055AttackLine[];
  voteShare: AC055VoteShare[];
  congressGap: number;
  recommendationsSummary: AC055RecommendationsSummary;
  sources: AC055Sources;
  // Deep dossier extensions
  constituencyIdentity: AC055ConstituencyIdentity;
  electoralHistory: AC055ElectoralHistoryDetail;
  historicalTrend: AC055HistoricalTrend;
  demographicDeepDive: AC055DemographicDeepDive;
  voterEcosystem: AC055VoterEcosystem;
  topIssues: AC055TopIssues;
  governanceAudit: AC055GovernanceAudit;
  influencersPowerStructure: AC055InfluencersPowerStructure;
  aapVulnerabilityAnalysis: AC055AAPVulnerabilityAnalysis;
  congressStrategicBlueprint: AC055CongressStrategicBlueprint;
  candidateRecommendation: AC055CandidateRecommendation;
  voteShareAnalysisDeep: AC055VoteShareAnalysisDeep;
}

export type AC055FatehgarhSahibType = AC055FatehgarhSahibTypes;
