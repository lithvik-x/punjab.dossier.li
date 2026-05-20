// Political Forecasting & Scenario Planning Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/b86-political-forecasting-scenario-planning.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: B86

import type { RegionType } from "./intelligence-constituency-profiling-types";

// ==========================================
// METADATA
// ==========================================

export interface ForecastingMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// ELECTION FORECASTING MODELS (Section 1)
// ==========================================

export interface BaselineSeatsVoteModel {
  coreFormula: string;
  punjabApplication: {
    congress2022Baseline: { seats: number; voteShare: number };
    aap2022Baseline: { seats: number; voteShare: number };
    sad2022Baseline: { seats: number; voteShare: number };
    bjp2022Baseline: { seats: number; voteShare: number };
  };
  majorityThreshold: number;
  swingRequired: string;
}

export interface RegionalSwingModel {
  region: RegionType;
  currentCongressSeats2022: number;
  targetSeats: string;
  swingRequired: string;
  swingFactors: string[];
}

export interface MultinomialLogitModel {
  probabilityFunction: string;
  coefficientInterpretation: {
    beta0: string;
    beta1Incumbency: string;
    beta2Swing: string;
    beta3Caste: string;
    beta4LocalIssues: string;
  };
}

export type CompositeForecastingConfidence = "high" | "medium" | "low";

export interface CompositeForecastingIndex {
  formula: string;
  weights: {
    baseline: number;
    regionalSwing: number;
    pollingTrend: number;
    expertJudgment: number;
  };
  confidenceBands: {
    high: { cfiThreshold: number; predictionInterval: string };
    medium: { cfiThreshold: string; predictionInterval: string };
    low: { cfiThreshold: number; predictionInterval: string };
  };
}

// ==========================================
// SCENARIO PLANNING TYPES (Section 2)
// ==========================================

export type ScenarioName =
  | "congress_majority"
  | "congress_strong"
  | "hung_assembly"
  | "congress_minority"
  | "aap_realignment"
  | "aap_supermajority";

export type CongressVoteShareTrajectory = "low" | "medium" | "high";
export type AAPCohesion = "fractured" | "united";

export interface ScenarioMatrix {
  scenario: ScenarioName;
  conditions: {
    congressVoteShare: CongressVoteShareTrajectory;
    aapCohesion: AAPCohesion;
    description: string[];
  };
  seatEstimate: string;
  coalitionRequirement: string;
  probability: string;
  strategicImplications: string[];
}

export interface CongressMajorityScenario extends ScenarioMatrix {
  scenario: "congress_majority";
  conditions: {
    congressVoteShare: "high";
    aapCohesion: "fractured";
    antiIncumbencyMaturation: boolean;
    sadBjpAllianceViable: boolean;
    description: string[];
  };
}

export interface CongressStrongScenario extends ScenarioMatrix {
  scenario: "congress_strong";
  conditions: {
    congressVoteShare: "medium";
    aapCohesion: "united";
    casteMobilization: boolean;
    goodGovernanceNarrative: boolean;
    description: string[];
  };
}

export interface HungAssemblyScenario extends ScenarioMatrix {
  scenario: "hung_assembly";
  conditions: {
    congressVoteShare: "medium";
    aapCohesion: "fractured";
    sadRecovery: boolean;
    description: string[];
  };
  seatDistribution: {
    congress: string;
    aap: string;
    sad: string;
    others: string;
  };
}

// ==========================================
// CONTINGENCY PLANNING TYPES (Section 3)
// ==========================================

export type ContingencyType =
  | "early_election"
  | "electoral_reform"
  | "judicial_intervention"
  | "evm_malfunction"
  | "violence_incident"
  | "third_party_spoiler";

export interface PreElectionContingency {
  contingency: "early_election" | "electoral_reform" | "judicial_intervention";
  preparation: string[];
}

export interface InElectionContingency {
  contingency: "evm_malfunction" | "violence_incident" | "third_party_spoiler";
  preparation: string[];
}

export interface PostElectionContingency {
  contingency: "defection_management" | "coalition_negotiation" | "opposing_coalition";
  preparation: string[];
}

// ==========================================
// RISK-ADJUSTED STRATEGY TYPES (Section 4)
// ==========================================

export type RiskCategory = "strategic" | "operational" | "external";
export type RiskProbability = "high" | "medium" | "low";
export type RiskImpact = "high" | "medium" | "low";

export interface RiskAssessment {
  risk: string;
  category: RiskCategory;
  probability: RiskProbability;
  impact: RiskImpact;
  mitigation: string;
}

export interface StrategicRisk extends RiskAssessment {
  category: "strategic";
}

export interface OperationalRisk extends RiskAssessment {
  category: "operational";
}

export interface ExternalRisk extends RiskAssessment {
  category: "external";
}

export interface ExpectedValueCalculation {
  formula: string;
  components: {
    outcomeProbability: string;
    outcomeValue: string;
    riskProbability: string;
    riskCost: string;
    implementationCost: string;
  };
  decisionRule: string;
}

export type RobustnessTestType =
  | "optimistic_case"
  | "pessimistic_case"
  | "expected_case"
  | "stress_test";

export interface AdaptiveStrategyFramework {
  monthlyReviewTriggers: string[];
  strategyAdjustmentProtocol: {
    detect: string;
    diagnose: string;
    decide: string;
    deploy: string;
  };
}

// ==========================================
// HISTORICAL ACCURACY TYPES (Section 5)
// ==========================================

export interface HistoricalAccuracyPattern {
  documented: string[];
  lessReliable: string[];
}

export interface CongressRecoveryPattern {
  election: string;
  seatsFrom: number;
  seatsTo: number;
  seatGain: number;
}

export interface IssueSalienceShift {
  issue: string;
  emergedAsSalient: string;
  verification: string;
}

// ==========================================
// QUANTITATIVE BENCHMARKS (Section 6)
// ==========================================

export interface SeatProjectionInterval {
  confidenceLevel: string;
  seatRange: string;
  interpretation: string;
}

export interface VoteShareThreshold {
  voteShare: string;
  seatsWonHistorical: string;
  projectedSeats2027: string;
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface ForecastingScenarioKPI {
  metadata: ForecastingMetadata;

  // Election Forecasting Models
  forecastingModels: {
    baselineSeatsVote: BaselineSeatsVoteModel;
    regionalSwing: RegionalSwingModel[];
    multinomialLogit: MultinomialLogitModel;
    compositeForecastingIndex: CompositeForecastingIndex;
  };

  // Scenario Planning
  scenarioPlanning: {
    fourOutcomeMatrix: ScenarioMatrix[];
    scenarioA: CongressMajorityScenario;
    scenarioB: CongressStrongScenario;
    scenarioC: HungAssemblyScenario;
    scenarioD: ScenarioMatrix;
    scenarioE: ScenarioMatrix;
    scenarioF: ScenarioMatrix;
  };

  // Contingency Planning
  contingencyPlanning: {
    preElection: PreElectionContingency[];
    inElection: InElectionContingency[];
    postElection: PostElectionContingency[];
  };

  // Risk-Adjusted Strategy
  riskStrategy: {
    strategicRisks: StrategicRisk[];
    operationalRisks: OperationalRisk[];
    externalRisks: ExternalRisk[];
    expectedValueCalculation: ExpectedValueCalculation;
    robustnessTesting: RobustnessTestType[];
    adaptiveFramework: AdaptiveStrategyFramework;
  };

  // Historical Accuracy
  historicalAccuracy: {
    patterns: HistoricalAccuracyPattern;
    congressRecovery: CongressRecoveryPattern[];
    issueSalienceShifts: IssueSalienceShift[];
  };

  // Quantitative Benchmarks
  benchmarks: {
    seatProjectionIntervals: SeatProjectionInterval[];
    voteShareThresholds: VoteShareThreshold[];
  };

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const FORECASTING_CATEGORIES = [
  "election_forecasting_models",
  "scenario_planning",
  "contingency_planning",
  "risk_adjusted_strategy",
  "historical_accuracy",
  "quantitative_benchmarks",
] as const;

export type ForecastingCategory = typeof FORECASTING_CATEGORIES[number];

export const MAJORITY_THRESHOLD = 59;
export const PUNJAB_ASSEMBLY_SEATS = 117;

export const REGIONAL_SEAT_DISTRIBUTION: Record<RegionType, number> = {
  malwa: 69,
  majha: 27,
  doaba: 23,
};

export const SCENARIO_PROBABILITIES = {
  congress_majority: "15-20%",
  congress_strong: "20-25%",
  hung_assembly: "25-30%",
  congress_minority: "20-25%",
  aap_realignment: "10-15%",
  aap_supermajority: "5-10%",
};

export const SEAT_PROJECTION_INTERVALS = {
  "95%_CI": "28-78 seats",
  "80%_CI": "38-68 seats",
  "50%_CI": "45-60 seats",
  "point_estimate": "50-55 seats",
};
