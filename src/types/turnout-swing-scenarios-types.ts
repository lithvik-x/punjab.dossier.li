// Turnout Prediction & Swing Scenario Analysis Types
// Derived from: research-M2/MP10-predictive-outcomes/models/turnout-swing-scenarios.md
// Research Date: 19 May 2026 | Status: FRAMEWORK

// Region type imported from kpi-types if needed
// import type { Region } from "./kpi-types";

// ==========================================
// METADATA
// ==========================================

export interface TurnoutSwingMetadata {
  taskId: string;
  megaPillar: string;
  documentationDate: string;
  source: string;
  confidence: {
    methodology: "HIGH" | "MEDIUM" | "LOW";
    punjabCoefficients: "HIGH" | "MEDIUM" | "LOW";
    constituencyPredictions: "HIGH" | "MEDIUM" | "LOW";
  };
  dependencies: {
    voteSharePrediction: string;
    turnoutAnalysis: string;
  };
}

// ==========================================
// FEATURE CATEGORIES
// ==========================================

export type FeatureWeightSignificance = "HIGHEST" | "HIGH" | "MODERATE" | "LOW" | "LOW-MODERATE";

export interface FeatureCategory {
  name: string;
  keyVariables: string;
  source: string;
  weightSignificance: FeatureWeightSignificance;
}

export interface TurnoutFeatureCategories {
  historicalTurnout: FeatureCategory;
  contestCloseness: FeatureCategory;
  demographics: FeatureCategory;
  weatherForecast: FeatureCategory;
  campaignIntensity: FeatureCategory;
  voterRegistrationChanges: FeatureCategory;
  electoralSalience: FeatureCategory;
}

// ==========================================
// HISTORICAL TURNUT DATA
// ==========================================

export interface HistoricalTurnout {
  election: number;
  turnout: number;
  changeFromPrevious: number;
  notes: string;
}

export interface HistoricalTurnoutData {
  elections: HistoricalTurnout[];
  trendNote: string;
  projected2027Baseline: string;
}

// ==========================================
// REGIONAL PATTERNS
// ==========================================

export type RegionType = "Malwa" | "Majha" | "Doaba" | "Urban" | "Rural";

export interface RegionalTurnoutPattern {
  region: RegionType;
  seatCount: number;
  typicalRange2022: string;
  characteristic: string;
}

// ==========================================
// TURNOUT PREDICTION
// ==========================================

export interface ConstituencyTurnoutPrediction {
  constituencyId: string;
  baselineTurnout: number;
  lowScenario: number;
  highScenario: number;
  keyDriver: string;
}

export type TurnoutScenario = "low" | "baseline" | "high";

export interface TurnoutScenarioRange {
  scenario: TurnoutScenario;
  min: number;
  max: number;
  description: string;
}

// ==========================================
// TURNOUT IMPACT ANALYSIS
// ==========================================

export type TurnoutImpact = "HIGH POSITIVE" | "MODERATE POSITIVE" | "SLIGHT NEGATIVE" | "NEUTRAL" | "NEGATIVE";

export interface TurnoutImpactEntry {
  scenario: string;
  mechanism: string;
  congressImpact: TurnoutImpact;
  details?: string;
}

// ==========================================
// HISTORICAL SWING MAGNITUDES
// ==========================================

export interface ElectionTransition {
  fromYear: number;
  toYear: number;
  congressSwing: number;
  winnerSwing: number;
  magnitude: string;
}

export interface HistoricalSwingData {
  transitions: ElectionTransition[];
  keyInsight: string;
  realisticSwingBackRange: string;
}

// ==========================================
// SWING MODEL TYPES
// ==========================================

export type SwingModelType = "uniform" | "differential" | "segment-specific" | "turnout-modulated";

// Uniform Swing
export interface UniformSwingEntry {
  swingPercent: number;
  incVotePercent: number;
  aapVotePercent: number;
  estIncSeats: string;
  probabilityAssessment: string;
}

// Differential Swing (By Region)
export interface RegionalSwingRequirement {
  region: RegionType;
  seatCount: number;
  estimated2022IncVotePercent: number;
  ls2024IncLeadSegments: number;
  requiredSeats: string;
  requiredRegionalSwing: string;
  achievability: "HARDEST" | "ACHIEVABLE" | "STRONG";
}

// Segment-Specific Swing
export interface SegmentSwingEntry {
  segment: string;
  sizePercentElectorate: string;
  swingEvidence: string;
  projected2027Swing: string;
  notes: string;
  volatility: "HIGH" | "MODERATE" | "LOW";
}

// Turnout-Modulated Swing
export interface TurnoutModulatedSwing {
  turnoutScenario: TurnoutScenarioRange;
  antiIncumbencyAmplifier: string;
  netSwingEffectOnIncSeats: string;
}

// ==========================================
// SCENARIO MATRIX
// ==========================================

export interface CongressSeatRange {
  low: number;
  high: number;
}

export type SwingMagnitude = "+5 pp" | "+8 pp" | "+10 pp" | "+12 pp" | "+15 pp";

export interface ScenarioMatrixCell {
  turnoutScenario: TurnoutScenario;
  congressSeatRange: CongressSeatRange;
}

export interface ScenarioMatrix {
  modestSwing: ScenarioMatrixCell;
  moderateSwing: ScenarioMatrixCell;
  fullAntiIncumbency: ScenarioMatrixCell;
  strongWave: ScenarioMatrixCell;
  aapCollapse: ScenarioMatrixCell;
}

// ==========================================
// MOST LIKELY SCENARIO
// ==========================================

export interface MostLikelyScenario {
  mostLikelySwing: string;
  mostLikelyTurnout: string;
  mostLikelyOutcome: string;
  probability59Seats: string;
  probability70Seats: string;
}

// ==========================================
// TIPPING POINT VARIABLES
// ==========================================

export type TippingPointDirection = "PRO-CONGRESS" | "PRO-AAP" | "NEUTRAL" | "UNPREDICTABLE";

export interface TippingPointVariable {
  variable: string;
  proCongressShift: string;
  proAapShift: string;
  direction: TippingPointDirection;
}

// ==========================================
// ANTI-INCUMBENCY DATA
// ==========================================

export interface AntiIncumbencyEntry {
  transition: string;
  incumbent: string;
  seatsWon: number;
  seatsLostNextElection: number;
  percentLoss: number;
}

export interface AntiIncumbencyData {
  entries: AntiIncumbencyEntry[];
  averageSeatLoss: number;
  averagePercentLoss: number;
}

export interface AntiIncumbencyStrengthIndex {
  description: string;
  contributingFactors: string[];
  keyStatistics: string;
}

// ==========================================
// VERIFICATION NEEDS
// ==========================================

export type VerificationStatus = "COMPLETE" | "PARTIAL" | "NOT COLLECTED";

export interface VerificationNeed {
  dataPoint: string;
  status: VerificationStatus;
  impactOnModel: string;
}

// ==========================================
// SWING ANALYSIS CORE TYPES
// ==========================================

export interface SwingAnalysis {
  metadata: TurnoutSwingMetadata;
  featureCategories: TurnoutFeatureCategories;
  historicalTurnout: HistoricalTurnoutData;
  regionalPatterns: RegionalTurnoutPattern[];
  turnoutPredictions: ConstituencyTurnoutPrediction[];
  turnoutImpact: TurnoutImpactEntry[];
  historicalSwing: HistoricalSwingData;
  uniformSwingTable: UniformSwingEntry[];
  regionalSwingRequirements: RegionalSwingRequirement[];
  segmentSwingEntries: SegmentSwingEntry[];
  turnoutModulatedSwing: TurnoutModulatedSwing[];
  scenarioMatrix: ScenarioMatrix;
  mostLikelyScenario: MostLikelyScenario;
  tippingPointVariables: TippingPointVariable[];
  antiIncumbency: AntiIncumbencyData;
  antiIncumbencyStrengthIndex: AntiIncumbencyStrengthIndex;
  verificationNeeds: VerificationNeed[];
}

// ==========================================
// SWING TYPE DISCRIMINATORS
// ==========================================

export interface UniformSwingAnalysis {
  type: "uniform";
  entries: UniformSwingEntry[];
  thresholdForMajority: number;
}

export interface DifferentialSwingAnalysis {
  type: "differential";
  regionalRequirements: RegionalSwingRequirement[];
  strategyImplication: string;
}

export interface SegmentSwingAnalysis {
  type: "segment-specific";
  entries: SegmentSwingEntry[];
  keyFinding: string;
}

export interface TurnoutModulatedAnalysis {
  type: "turnout-modulated";
  entries: TurnoutModulatedSwing[];
  coreInsight: string;
}

export type SwingAnalysisType =
  | UniformSwingAnalysis
  | DifferentialSwingAnalysis
  | SegmentSwingAnalysis
  | TurnoutModulatedAnalysis;
