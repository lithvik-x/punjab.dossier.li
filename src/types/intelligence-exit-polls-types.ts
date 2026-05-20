// Exit Polls & Election Forecasting Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/b30-exit-polls-election-forecasting.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: B30

import type { RegionType } from "./intelligence-constituency-profiling-types";

// ==========================================
// METADATA
// ==========================================

export interface ExitPollsMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// EXIT POLL METHODOLOGY TYPES (Section 9.9)
// ==========================================

export type ExitPollMethod = "face_to_face" | "telephone" | "online";

export interface ExitPollMethodConfig {
  method: ExitPollMethod;
  responseRate: string;
  recommendedWeight: number;
  limitations: string;
}

export type PunjabiElectorate =
  | "mazhabi_sikh"
  | "other_sc"
  | "jat_sikh"
  | "other_sikh"
  | "hindu_upper_caste"
  | "hindu_obc"
  | "hindu_sc"
  | "muslim"
  | "christian";

export interface CasteCommunityWeighting {
  category: PunjabiElectorate;
  populationPercent: number;
  weight: number;
}

export type SamplingMethod = "probability_proportional_size" | "stratified_random" | "quota";

export interface BoothSelectionCriteria {
  historicalVotingPatterns: boolean;
  casteComposition: boolean;
  geographicSpread: boolean;
  deraInfluence: boolean;
}

export interface SampleSizeDetermination {
  totalVoters: number;
  desiredMarginOfError: number;
  confidenceLevel: number;
  requiredSample: number;
  adjustedForDesignEffect: number;
  distributedPerBooth: number;
}

export interface QuestionDesign {
  questionNumber: number;
  questionType: "direct_choice" | "tactical" | "open_ended" | "proxy" | "demographic";
  question: string;
  sequencing: string;
  notes: string;
}

export type WeightingVariable =
  | "past_swing_pattern"
  | "candidate_quality"
  | "anti_incumbency_timing"
  | "booth_level_uniformity";

export interface KnownFailuresLesson {
  election: string;
  failure: string;
  rootCauses: string[];
  mitigationApplied: string;
}

export type ExitPollLimitation =
  | "social_desirability_bias"
  | "interviewer_bias"
  | "late_deciders"
  | "proxy_voting"
  | "low_response_urban";

export interface ExitPollLimitationMitigation {
  limitation: ExitPollLimitation;
  impact: string;
  mitigation: string;
}

// ==========================================
// PUNJAB-SPECIFIC CHALLENGE TYPES
// ==========================================

export interface VoterVolatilityFactors {
  factor: string;
  description: string;
  implicationForExitPolls: string;
}

export type CasteCommunityDimension =
  | "religious_denomination"
  | "caste_within_religion"
  | "regional_sub_identity"
  | "dera_affiliation";

export interface CasteCommunityCrossTab {
  dimension: CasteCommunityDimension;
  categories: string[];
}

export interface TacticalVotingPattern {
  pattern: string;
  description: string;
  exitPollQuestion: string;
}

export interface BoothLevelVariation {
  characteristic: string;
  range: string;
  implication: string;
}

export interface ProxyVotingConcern {
  estimatedProxyVotes: string;
  boothsEffected: string;
  mitigation: string;
}

// ==========================================
// ALTERNATIVE INTELLIGENCE TYPES
// ==========================================

export type BoothReportFrequency =
  | "30_minutes_post_closing"
  | "hourly"
  | "event_triggered";

export interface BoothAgentReport {
  estimatedTurnoutByGender: {
    male: number;
    female: number;
  };
  votingIrregularities: string[];
  moodAtBooth: "enthusiastic" | "subdued" | "tense";
  knownCandidateVoteShares: Record<string, number>;
}

export interface CongressNetworkRequirements {
  minimumBoothCoverage: number;
  communicationProtocol: string;
  qualityControl: string;
  dashboardRequirement: string;
}

export interface PartyAgentNetwork {
  constituencyObservers: string[];
  assemblySegmentCoordinators: string[];
  regionalNodalOfficers: {
    malwa: string;
    majha: string;
    doaba: string;
  };
  reportSchedule: {
    preElection: string;
    electionDayAM: string;
    electionDayPM: string;
    postCounting: string;
  };
}

export interface FocusGroupConfiguration {
  groupSize: number;
  groupsPerConstituency: number;
  stratification: string[];
  discussionTopics: string[];
}

export interface SocialMediaPlatform {
  platform: string;
  demographicCoverage: string;
  metrics: string[];
}

export interface ParallelVoteCounting {
  trainedVolunteers: number;
  accuracyTarget: number;
  reportingMethod: string;
}

// ==========================================
// FORECASTING FRAMEWORK TYPES
// ==========================================

export interface MultiModelEnsemble {
  models: string[];
  weights: number[];
  combinationMethod: string;
}

export type SeatEstimationFormula = {
  expectedSeats: string;
  probabilityOfWinning: string;
};

export interface ConfidenceIntervalBand {
  narrow: {
    seats: number;
    interpretation: string;
  };
  wide: {
    seats: number;
    interpretation: string;
  };
  inconclusive: {
    interpretation: string;
  };
}

export type TwoPartySpace = "congress_vs_aap" | "bjp_vs_sad";

export interface VoteShareProjection {
  party: string;
  baseVote: string;
  adjustmentFactors: string[];
  turnoutAssumption: string;
  constituencySpecificFactors: string;
}

export type SwingCalculationModel = "uniform" | "constituency_level" | "caste_compositional" | "seat_level";

export interface SwingCalculation {
  modelType: SwingCalculationModel;
  formula: string;
  example: string;
}

export type StatisticalConfidence = {
  voteShare95CI: string;
  seatCount95CI: string;
  constituencyLevel95CI: string;
};

export interface StructuralUncertainty {
  lateDeciders: string;
  proxyVoting: string;
  evmMalfunction: string;
  resultValidation: string;
}

export interface ModelValidationHistory {
  election: string;
  exitPollAccuracy: string;
  keyLesson: string;
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface ExitPollsForecastingKPI {
  metadata: ExitPollsMetadata;

  // Exit Poll Methodology
  exitPollMethodology: {
    methods: ExitPollMethodConfig[];
    recommendedMix: {
      faceToFace: number;
      telephone: number;
      online: number;
    };
    casteCommunityWeighting: CasteCommunityWeighting[];
    samplingMethod: SamplingMethod;
    boothSelectionCriteria: BoothSelectionCriteria;
    sampleSize: SampleSizeDetermination;
    questionDesign: QuestionDesign[];
    weightingVariables: WeightingVariable[];
    knownFailures: KnownFailuresLesson[];
    limitations: ExitPollLimitationMitigation[];
  };

  // Punjab-Specific Challenges
  punjabChallenges: {
    voterVolatility: VoterVolatilityFactors[];
    casteCommunityCrossTabs: CasteCommunityCrossTab[];
    tacticalVotingPatterns: TacticalVotingPattern[];
    boothLevelVariation: BoothLevelVariation;
    proxyVotingConcerns: ProxyVotingConcern;
  };

  // Alternative Intelligence
  alternativeIntelligence: {
    boothLevelReporting: {
      frequency: BoothReportFrequency[];
      reportContent: BoothAgentReport;
      networkRequirements: CongressNetworkRequirements;
    };
    partyAgentNetwork: PartyAgentNetwork;
    earlyVotingPatterns: string;
    focusGroups: FocusGroupConfiguration;
    socialMediaMonitoring: SocialMediaPlatform[];
    parallelVoteCounting: ParallelVoteCounting;
  };

  // Forecasting
  forecasting: {
    multiModelEnsemble: MultiModelEnsemble;
    seatEstimationFormula: SeatEstimationFormula;
    confidenceIntervals: ConfidenceIntervalBand;
    twoPartySpace: TwoPartySpace[];
    voteShareProjection: VoteShareProjection[];
    swingCalculation: SwingCalculation;
    statisticalConfidence: StatisticalConfidence;
    structuralUncertainty: StructuralUncertainty;
    modelValidation: ModelValidationHistory[];
  };

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const EXIT_POLLS_CATEGORIES = [
  "exit_poll_methodology",
  "punjab_specific_challenges",
  "alternative_intelligence",
  "forecasting_framework",
] as const;

export type ExitPollsCategory = typeof EXIT_POLLS_CATEGORIES[number];

export const PUNJAB_REGIONAL_SEATS: Record<RegionType, number> = {
  malwa: 69,
  majha: 27,
  doaba: 23,
};

export const MARGIN_OF_ERROR = {
  VOTE_SHARE_95CI: "±2-3 pp",
  SEAT_COUNT_95CI: "±8-12 seats",
  CONSTITUENCY_LEVEL_95CI: "±8-12 pp",
};

export const COMBINED_CONFIDENCE = {
  CONGRESS_SEATS_2027: "45-65",
  CENTRAL_ESTIMATE: 55,
  CONGRESS_VOTE_SHARE: "28-35%",
  CENTRAL_VOTE_ESTIMATE: "31%",
};
