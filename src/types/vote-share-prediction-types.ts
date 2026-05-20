// Vote Share Prediction Model Types - Punjab 2027
// Derived from: research-M2/MP10-predictive-outcomes/models/vote-share-prediction.md
// Documentation Date: 19 May 2026 | Task ID: T-MP10-MODL-001

import type { RegionType } from "./intelligence-constituency-profiling-types";

// ==========================================
// METADATA
// ==========================================

export interface VoteSharePredictionMetadata {
  documentationDate: string;
  source: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  taskId: string;
  dependencies: string;
  dependencyStatus: "MET" | "PENDING" | "VERIFICATION_NEEDED";
}

// ==========================================
// FEATURE CATEGORIES (10 Categories)
// ==========================================

export interface HistoricalVoteShareFeature {
  elections: ("2012" | "2017" | "2022" | "2014" | "2019" | "2024")[];
  derivedFeatures: {
    voteShareTrend: "linear_slope";
    swingBetweenElections: string[];
    volatilityIndex: "SD_of_swings";
    incumbencyPenaltyHistory: string;
  };
  weightLevel: "highest";
  verificationNeeded: "ECI constituency-level raw datasets for 2012, 2017";
}

export interface DemographicCompositionFeature {
  caste: {
    sc: number; // ~32% statewide
    jatSikh: number;
    nonJatSikh: number;
    hinduGeneralOBC: number;
    hinduSC: number;
    others: number;
  };
  religion: {
    sikh: number;
    hindu: number;
    minorityPresence: number;
  };
  urbanization: {
    percentageUrban: number;
    baselineYear: "Census 2011";
  };
  age: {
    firstTimeVoters: "18-22";
    young: "18-30";
    senior: "60+";
  };
  predictiveStrength: "caste_strongest";
}

export interface AntiIncumbencyIndexFeature {
  components: {
    yearsOfIncumbentRule: number; // AAP since March 2022 = ~5 years by election
    historicalSwingPerConstituency: number[];
    cmSatisfactionRating: number;
    mlaSpecificAntiIncumbency: number;
    satisfactionDeclineRate: number;
  };
  scale: "0-100_normalized";
  stateContext: {
    patternStrength: "among_strongest_in_India";
    aap2022Victory: "92 seats on anti-incumbency against Congress";
    congress2017Victory: "77 seats on anti-incumbency against SAD-BJP";
  };
}

export interface CandidateStrengthFeature {
  components: {
    incumbencyAdvantage: number;
    previousElectoralPerformance: number;
    criminalCases: number; // negative weight
    declaredAssets: number;
    localProminence: number; // media/social media
    defectionHistory: number; // negative credibility weight
  };
  sources: ("ECI_affidavits" | "media_databases" | "surveys")[];
}

export interface CampaignIntensityFeature {
  components: {
    ralliesLast6Months: number;
    starCampaignerRallies: number;
    campaignSpendingEstimate: number;
    groundPresence: {
      boothWorkers: number;
      doorToDoorCoverage: number;
    };
    digitalCampaignIntensity: {
      geoTargetedAds: number;
      whatsappDensity: number;
    };
  };
  noiseLevel: "inherently_noisy";
  updateFrequency: "benefits_from_frequent_updates";
}

export interface LocalIssueSeverityFeature {
  topIssues: {
    issue: string;
    score: "1-10_scale";
    salienceWeight: number;
  }[];
  congressAlignment: {
    aligned: number;
    neutral: number;
    opposed: number;
  };
  keyPunjabIssues: string[];
}

export interface SurveyVoteIntentionFeature {
  metrics: {
    rawVoteIntention: number;
    sampleSize: number;
    marginOfError: number;
    surveyHouseReliability: number;
    trendAcrossWaves: number;
  };
  decayFunction: "exponential_decay";
  weighting: "recency_higher_weight";
  verificationNeeded: "Survey house reliability ratings for Punjab polling organizations";
}

export interface SocialMediaSentimentFeature {
  platforms: ("Twitter/X" | "Facebook" | "Instagram" | "YouTube" | "WhatsApp")[];
  metrics: {
    netSentiment: number;
    volume: number;
    trend: number;
    shareOfVoice: number;
  };
  decayWeighting: "30-day_exponential_decay";
  limitation: "Overrepresents_urban_younger_demographics";
  calibration: "rural_calibration_factor_based_on_urbanization_rate";
}

export interface EconomicIndicatorsFeature {
  unemployment: {
    districtLevel: "PLFS";
    youthUnemployment: number;
  };
  inflation: {
    cpiPunjab: number;
    foodInflation: number;
  };
  agriculturalDistress: {
    mspRealizationGap: number;
    cropDamage: number;
    farmerProtestParticipation: number;
    stubbleBurningPenalties: number;
  };
  governmentDelivery: {
    smartSchoolCoverage: number;
    freeElectricityDelivery: number;
    healthcareUtilization: number;
  };
  dominantPredictors: ("agricultural_distress" | "youth_unemployment")[];
}

export interface TransferAllianceDynamicsFeature {
  components: {
    voteTransferEfficiency: number;
    historicalTransferRates: number[];
    casteBasedTransferModeling: string[];
  };
  activationCondition: "conditionally_activated_only_when_alliances_confirmed";
  verificationNeeded: "Alliance formations for 2027 are uncertain as of May 2026";
}

export type FeatureCategory =
  | "historical_vote_share"
  | "demographic_composition"
  | "anti_incumbency_index"
  | "candidate_strength"
  | "campaign_intensity"
  | "local_issue_severity"
  | "survey_vote_intention"
  | "social_media_sentiment"
  | "economic_indicators"
  | "transfer_alliance_dynamics";

// ==========================================
// MODEL ARCHITECTURE
// ==========================================

export type ModelComponentType = "Random Forest" | "XGBoost" | "Bayesian Hierarchical" | "Meta-Learner";

export interface ModelComponent {
  name: ModelComponentType;
  algorithm: string;
  trees?: number; // Random Forest
  boosting?: "gradient"; // XGBoost
  hierarchical?: boolean; // Bayesian
  metaLearner?: "Ridge Regression"; // Meta-learner
  strength: string;
  weightRange: string;
  weightPercentage?: [number, number];
}

export interface PredictionFlow {
  inputFeatures: FeatureCategory[];
  featureEngineering: ("imputation" | "scaling" | "interaction_terms")[];
  models: {
    predictionA: "Random Forest";
    predictionB: "XGBoost";
    predictionC: "Bayesian Hierarchical";
  };
  metaLearner: "Ridge Stacking";
  output: ("vote_share_per_party" | "95_CI" | "seat_projection")[];
}

export interface KeyInteractionTerms {
  terms: ("caste_x_anti_incumbency" | "urbanization_x_economic_indicators")[];
}

export interface AggregationMethod {
  level: "constituency";
  constituencyCount: 117;
  stateAggregation: "bottom_up";
  seatDerivation: "Monte Carlo simulation";
  monteCarloIterations: 10000;
}

// ==========================================
// CROSS-VALIDATION
// ==========================================

export interface CrossValidationProtocol {
  primary: {
    method: "Temporal CV";
    splits: {
      trainTest1: "pre-2017 → 2017";
      trainTest2: "pre-2022 → 2022";
    };
  };
  secondary: {
    method: "k-fold";
    k: 5;
    stratification: "region";
    strata: ("Malwa" | "Majha" | "Doaba")[];
  };
  outOfSample: "By-election results 2022-2026 as holdout";
  verificationNeeded: "List of Punjab by-elections 2022-May 2026 with results";
}

// ==========================================
// TRAINING DATA
// ==========================================

export type TrainingDataSource =
  | "ECI Election Results"
  | "General Election Results"
  | "Census 2011"
  | "PLFS Unemployment"
  | "Survey Data";

export interface TrainingDataEntry {
  source: TrainingDataSource;
  period: string;
  granularity: "Constituency" | "Block" | "District";
  status: "AVAILABLE" | "VERIFICATION_NEEDED" | "To_be_generated";
}

// ==========================================
// OUTPUT FORMAT
// ==========================================

export type PartyType = "Congress" | "AAP" | "SAD+" | "BJP+" | "Others";

export interface PartyPrediction {
  party: PartyType;
  predictedVoteShare: number;
  ciLower: number;
  ciUpper: number;
  winProbability: number;
}

export interface ConstituencyPrediction {
  constituencyId: string;
  constituencyName?: string;
  region: RegionType;
  predictions: PartyPrediction[];
  expectedWinner?: PartyType;
}

export interface StateLevelProjection {
  predictedSeats: Record<PartyType, number>;
  seatRanges: Record<PartyType, { min: number; max: number }>;
  aggregatedFrom: "constituency-level Monte Carlo";
}

export type UpdateFrequency =
  | "monthly"
  | "survey_triggered_48h"
  | "campaign_weekly"
  | "event_triggered_24h";

export interface UpdateProtocol {
  standard: UpdateFrequency;
  surveyTriggered: "within_48_hours_of_new_survey_wave";
  campaignMode: "weekly_during_last_90_days";
  eventTriggered: "within_24_hours_of_major_events";
}

// ==========================================
// REGIONAL VARIATIONS
// ==========================================

export interface RegionalVariation {
  region: RegionType;
  seats: number;
  keyDynamics: string[];
  volatility: "highest" | "lower";
}

export const REGIONAL_VARIATIONS: RegionalVariation[] = [
  {
    region: "malwa",
    seats: 69,
    keyDynamics: [
      "Agrarian issues",
      "Jat Sikh concentration",
      "Strongest anti-incumbency",
      "AAP 2022 stronghold",
      "Highest predictive uncertainty",
    ],
    volatility: "highest",
  },
  {
    region: "majha",
    seats: 25,
    keyDynamics: [
      "Border belt",
      "Religious sentiment",
      "SAD traditional base",
      "Congress competitive",
      "Lower volatility",
    ],
    volatility: "lower",
  },
  {
    region: "doaba",
    seats: 23,
    keyDynamics: [
      "Highest SC concentration",
      "Hindu urban",
      "BSP factor strongest",
      "NRI influence",
      "Caste arithmetic dominant",
    ],
    volatility: "lower",
  },
];

// ==========================================
// PUNJAB-SPECIFIC CONSIDERATIONS
// ==========================================

export interface PunjabAntiIncumbencyPattern {
  averageSwingAgainstIncumbent: number; // >15% since 2002
  multiplier: "Punjab_specific_anti_incumbency_multiplier";
  accelerationTerm: "non-linear for last 12 months before election";
}

export interface MultiCorneredContest {
  viableParties: number; // 3-4
  absoluteShareForWin: number;
  monteCarloHandling: "accounts for multi-cornered_uncertainty";
}

export interface CasteBasedVoting {
  explicitFeatures: boolean;
  scReservedModeling: "modeled_separately_due_to_BSP_vote_splitting";
  jatVsNonJatDistinction: "critical in Malwa";
  scReservedSeats: 34;
}

export interface RuralUrbanDivide {
  urbanizationFeature: "direct_feature";
  interactionTerm: "urbanization_x_economic_indicators";
  sentimentCalibration: "inverse_urbanization_weighting";
}

// ==========================================
// VALIDATION FRAMEWORK
// ==========================================

export interface BackTestingProtocol {
  method: "train_year_X_predict_X+5";
  metrics: ("MAE_per_party_per_constituency" | "seat_count_accuracy" | "directional_accuracy")[];
}

export interface TargetBenchmarks {
  voteShareMAE: {
    target: string;
    rationale: "Achievable with ensemble on Indian election data";
  };
  seatCountMAE: {
    target: string;
    rationale: "Acceptable for strategic planning";
  };
  directionalAccuracy: {
    target: string;
    rationale: "Minimum for actionable seat-level strategy";
  };
  regionalSeatMAE: {
    target: string;
    rationale: "Sound regional strategy";
  };
}

export interface CalibrationProtocol {
  confidenceIntervalSizingCheck: "every_cycle";
  featureImportanceDriftMonitoring: "between_updates";
  retrainingTrigger: "out_of_sample_error_exceeds_1.5x_backtest_error";
}

export interface KnownLimitations {
  blackSwanEvents: "require_manual_override_protocol";
  allianceUncertainty: "wider_confidence_intervals_until_alliances_finalize";
  surveyQuality: "bounds_model_accuracy_regardless_of_sophistication";
  campaignMomentum: "hard_to_predict_last_2-3_weeks";
}

// ==========================================
// MODEL GOVERNANCE
// ==========================================

export interface ModelVersioning {
  versionTag: {
    date: string;
    trainingDataCutoff: string;
    featureSetVersion: string;
  };
  predictionsArchived: boolean;
}

export interface BiasAuditing {
  regularChecks: "systematic_over_under_prediction_by_region_caste_incumbency";
  correctiveWeighting: "applied_and_documented";
}

export interface Interpretability {
  shapValues: "XGBoost_generated_every_cycle";
  permutationImportance: "RF_generated_every_cycle";
  topDriversIdentification: "Top 3 drivers of Congress vote share change per constituency";
}

// ==========================================
// VERIFICATION ITEMS
// ==========================================

export interface VerificationItem {
  item: string;
  status: "VERIFICATION_NEEDED" | "PENDING" | "AVAILABLE";
}

export const VERIFICATION_ITEMS: VerificationItem[] = [
  { item: "ECI constituency-level vote share data for 2012, 2017 Assembly Elections", status: "VERIFICATION_NEEDED" },
  { item: "Punjab by-election results 2022-May 2026 for out-of-sample validation", status: "VERIFICATION_NEEDED" },
  { item: "District-level PLFS unemployment data for Punjab", status: "VERIFICATION_NEEDED" },
  { item: "Survey house reliability ratings for Punjab polling organizations", status: "VERIFICATION_NEEDED" },
  { item: "Alliance formations for 2027", status: "VERIFICATION_NEEDED" },
  { item: "Updated caste composition estimates at constituency level", status: "VERIFICATION_NEEDED" },
  { item: "Back-test results: validate target benchmarks achievable", status: "VERIFICATION_NEEDED" },
];

// ==========================================
// STRATEGIC RELEVANCE
// ==========================================

export interface StrategicRelevance {
  resourceAllocation: "competitive_seats_within_3-5%_get_priority";
  candidateSelection: "what_if_simulations_for_ticket_distribution";
  messageTargeting: "local_issue_alignment_per_constituency";
  allianceStrategy: "vote_transfer_scenario_simulation";
  earlyWarning: "monthly_to_weekly_updates_detect_erosion_weeks_months_ahead";
  regionalBalance: "separate_accuracy_tracking_for_Malwa_Majha_Doaba";
  counterCompetitor: "identify_seats_where_competitors_vulnerable";
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface VoteSharePredictionKPI {
  metadata: VoteSharePredictionMetadata;

  // Feature Categories
  features: {
    historicalVoteShare: HistoricalVoteShareFeature;
    demographicComposition: DemographicCompositionFeature;
    antiIncumbencyIndex: AntiIncumbencyIndexFeature;
    candidateStrength: CandidateStrengthFeature;
    campaignIntensity: CampaignIntensityFeature;
    localIssueSeverity: LocalIssueSeverityFeature;
    surveyVoteIntention: SurveyVoteIntentionFeature;
    socialMediaSentiment: SocialMediaSentimentFeature;
    economicIndicators: EconomicIndicatorsFeature;
    transferAllianceDynamics: TransferAllianceDynamicsFeature;
  };

  // Model Architecture
  modelArchitecture: {
    components: ModelComponent[];
    predictionFlow: PredictionFlow;
    interactionTerms: KeyInteractionTerms;
    aggregation: AggregationMethod;
    crossValidation: CrossValidationProtocol;
    trainingData: TrainingDataEntry[];
  };

  // Output
  output: {
    perConstituency: ConstituencyPrediction;
    stateLevel: StateLevelProjection;
    updateProtocol: UpdateProtocol;
  };

  // Punjab-Specific
  punjabSpecific: {
    antiIncumbencyPattern: PunjabAntiIncumbencyPattern;
    multiCorneredContest: MultiCorneredContest;
    casteBasedVoting: CasteBasedVoting;
    ruralUrbanDivide: RuralUrbanDivide;
  };

  // Validation
  validation: {
    backTestingProtocol: BackTestingProtocol;
    targetBenchmarks: TargetBenchmarks;
    calibrationProtocol: CalibrationProtocol;
    knownLimitations: KnownLimitations;
  };

  // Governance
  governance: {
    versioning: ModelVersioning;
    biasAuditing: BiasAuditing;
    interpretability: Interpretability;
  };

  // Strategic
  strategicRelevance: StrategicRelevance;

  // Verification
  verificationItems: VerificationItem[];
}
