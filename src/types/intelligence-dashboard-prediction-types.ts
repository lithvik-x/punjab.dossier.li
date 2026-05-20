// Dashboards, Prediction & Reporting Framework Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/b21-dashboards-prediction-reporting.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: B21

import type { RegionType } from "./intelligence-constituency-profiling-types";

// ==========================================
// METADATA
// ==========================================

export interface DashboardPredictionMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// KPI VISUALIZATION TYPES (Section 9.4)
// ==========================================

export type KPITier = 1 | 2 | 3 | 4;

export interface KPIDefinition {
  tier: KPITier;
  name: string;
  description: string;
  refreshCycle: string;
}

export type VisualEncoding =
  | "position"
  | "color_hue"
  | "size"
  | "saturation"
  | "brightness";

export interface DashboardColorPalette {
  congress: string;
  bjp: string;
  aap: string;
  danger: string;
  warning: string;
  success: string;
  neutral: string;
  background: string;
}

export interface KPIFramework {
  specific: boolean;
  measurable: boolean;
  achievable: boolean;
  relevant: boolean;
  timeBound: boolean;
}

// ==========================================
// REAL-TIME MONITORING TYPES
// ==========================================

export type DataIngestionPattern = "message_queue" | "streaming_api" | "webhook" | "batch";

export interface FieldReportSchema {
  reporterId: string;
  timestamp: string;
  constituencyCode: string;
  metricType: string;
  observedValue: string | number;
  confidenceRating: "high" | "medium" | "low";
}

export interface StreamProcessingConfig {
  cepEngine: string;
  slidingWindowHours: number;
  alertThreshold: number;
}

export interface AnalyticalComputation {
  derivedMetrics: string[];
  updateCadence: "real_time" | "15_min" | "30_min" | "hourly" | "daily";
}

export type VisualizationDelivery = "push" | "pull" | "websocket";

export interface RealTimeMonitoringArchitecture {
  dataIngestion: DataIngestionPattern;
  fieldReportSchema: FieldReportSchema;
  streamProcessing: StreamProcessingConfig;
  analyticalComputation: AnalyticalComputation;
  visualizationDelivery: VisualizationDelivery[];
}

// ==========================================
// DRILL-DOWN HIERARCHY TYPES
// ==========================================

export type DrillDownLevel =
  | "state"
  | "regional"
  | "constituency"
  | "candidate"
  | "metric";

export interface DrillDownHierarchy {
  currentLevel: DrillDownLevel;
  availableDrillDowns: DrillDownLevel[];
  availableDrillUps: DrillDownLevel[];
}

export interface InteractiveFilter {
  dimension: string;
  values: string[];
  active: boolean;
}

export interface CrossFilter {
  sourceFilter: string;
  affectedVisualizations: string[];
}

// ==========================================
// MOBILE RESPONSIVE TYPES
// ==========================================

export type ResponsiveBreakpoint = "compact" | "large_phone" | "tablet" | "desktop";

export interface MobileLayoutConfig {
  breakpoint: ResponsiveBreakpoint;
  widthPixels: number;
  cardLayout: "single_column" | "two_column" | "multi_column";
  touchTargetMinPixels: number;
}

// ==========================================
// DATA REFRESH TYPES
// ==========================================

export type DataRefreshCategory =
  | "real_time"
  | "field_reports"
  | "poll_data"
  | "external_benchmarks"
  | "computed_models";

export interface DataRefreshPolicy {
  category: DataRefreshCategory;
  updateFrequency: string;
  latencyTolerance: string;
}

export interface DataFreshnessIndicator {
  lastUpdated: string;
  dataThrough: string;
  staleDataThreshold: string;
}

// ==========================================
// ELECTORAL PREDICTION TYPES (Section 9.5)
// ==========================================

export type ElectoralModelingParadigm =
  | "baseline_statistical"
  | "causal_inference"
  | "expert_judgment";

export interface BaselineStatisticalModel {
  relationship: string;
  historicalData: string[];
  accuracyMetrics: string;
}

export interface CausalInferenceModel {
  method: "difference_in_differences" | "regression_discontinuity";
  description: string;
  limitations: string;
}

export interface ExpertJudgmentIntegration {
  method: "delphi" | "structured_judgment" | "bayesian";
  participants: string[];
  aggregationProtocol: string;
}

export interface HybridElectoralModel {
  paradigms: ElectoralModelingParadigm[];
  baselineModel: BaselineStatisticalModel;
  causalModel: CausalInferenceModel;
  expertIntegration: ExpertJudgmentIntegration;
  bayesianFramework: boolean;
}

export type SeatEstimationStep =
  | "baseline_calculation"
  | "constituency_adjustment"
  | "monte_carlo_simulation"
  | "calibration_validation";

export interface SeatEstimationProcess {
  steps: SeatEstimationStep[];
  monteCarloIterations: number;
  outputFormat: "probability_distribution" | "point_estimate" | "confidence_intervals";
}

export interface VoteShareSwingModel {
  modelType: "uniform" | "regional" | "caste_corrected" | "momentum_adjusted";
  formula: string;
  confidenceIntervals: {
    lower: number;
    upper: number;
  };
}

export type SafetyCategory =
  | "safe"
  | "likely"
  | "lean"
  | "toss_up"
  | "lost";

export interface MarginClassification {
  category: SafetyCategory;
  winProbabilityThreshold: {
    min?: number;
    max?: number;
  };
  marginThreshold?: {
    min?: number;
    max?: number;
  };
}

export type ScenarioType =
  | "best_case"
  | "expected_case"
  | "worst_case";

export interface ScenarioDefinition {
  scenario: ScenarioType;
  assumptionSet: string[];
  variableSpecifications: string[];
}

export interface ModelValidation {
  historicalBackTesting: boolean;
  forwardTesting: boolean;
  liveAccuracyTracking: boolean;
  calibrationPlots: boolean;
}

// ==========================================
// REPORTING FRAMEWORK TYPES (Section 9.6)
// ==========================================

export type BriefSection =
  | "executive_summary"
  | "situation_assessment"
  | "indicator_dashboard"
  | "seat_projections"
  | "alerts_action_items"
  | "annexure";

export interface DailyBriefStructure {
  section: BriefSection;
  maxWords?: number;
  format: "bullet" | "narrative" | "table" | "chart";
}

export interface WeeklySummaryStructure {
  weekInReview: string;
  trendAnalysis: string;
  regionalDeepDive: RegionType;
  competitiveIntelligence: string;
  strategicRecommendations: string;
  riskRegisterUpdate: string;
}

export type AlertTier = 1 | 2 | 3;

export interface AlertThreshold {
  tier: AlertTier;
  name: string;
  triggerCondition: string;
  responseTime: string;
  distributionLevel: string;
}

export type AlertCategory =
  | "assassination"
  | "opposition_announcement"
  | "mass_desertion"
  | "legal_judicial"
  | "social_media_crisis"
  | "exit_poll"
  | "polling_shift"
  | "campaign_event"
  | "media_narrative"
  | "endorsement"
  | "fundraising"
  | "opposition_shift";

export interface IncidentReportTemplate {
  section: string;
  fields: string[];
  required: boolean;
}

export type TrendVisualizationPrinciple =
  | "time_horizon_appropriate"
  | "baseline_reference_visible"
  | "seasonality_accounted"
  | "uncertainty_visualized"
  | "multiple_perspectives"
  | "causality_cautious";

export interface TrendAnalysisContent {
  directionMagnitude: string;
  driverIdentification: string;
  stabilityAssessment: string;
  implicationAnalysis: string;
}

// ==========================================
// EXECUTIVE DASHBOARD TYPES
// ==========================================

export interface ExecutiveDashboardContent {
  header: string[];
  primaryMetrics: string[];
  regionalSummary: string[];
  priorityWatchList: string[];
  alertTicker: string[];
  drillDownAccess: string[];
}

export interface ExecutiveDashboardPrinciples {
  maxDataElements: number;
  maxHierarchyLevels: number;
  visualDistinction: boolean;
  targetComparisonVisible: boolean;
  trendDirectionVisible: boolean;
  mobileOptimized: boolean;
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface DashboardPredictionKPI {
  metadata: DashboardPredictionMetadata;

  // KPI Visualization
  kpiVisualization: {
    tiers: KPIDefinition[];
    visualEncodingHierarchy: VisualEncoding[];
    colorPalette: DashboardColorPalette;
    framework: KPIFramework;
  };

  // Real-Time Monitoring
  realTimeMonitoring: RealTimeMonitoringArchitecture;

  // Drill-Down
  drillDown: {
    hierarchy: DrillDownHierarchy;
    interactiveFilters: InteractiveFilter[];
    crossFiltering: CrossFilter[];
  };

  // Mobile Responsive
  mobileResponsive: {
    breakpoints: MobileLayoutConfig[];
    cardBasedArchitecture: boolean;
  };

  // Data Refresh
  dataRefresh: {
    policies: DataRefreshPolicy[];
    freshnessIndicators: DataFreshnessIndicator[];
  };

  // Electoral Prediction
  electoralPrediction: {
    modelingParadigms: HybridElectoralModel;
    seatEstimation: SeatEstimationProcess;
    voteShareSwing: VoteShareSwingModel;
    marginClassification: MarginClassification[];
    scenarioPlanning: ScenarioDefinition[];
    modelValidation: ModelValidation;
  };

  // Reporting
  reporting: {
    dailyBrief: DailyBriefStructure[];
    weeklySummary: WeeklySummaryStructure;
    alertThresholds: AlertThreshold[];
    incidentReport: IncidentReportTemplate[];
    trendAnalysis: TrendAnalysisContent;
  };

  // Executive Dashboard
  executiveDashboard: {
    content: ExecutiveDashboardContent;
    principles: ExecutiveDashboardPrinciples;
  };

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const DASHBOARD_PREDICTION_CATEGORIES = [
  "kpi_visualization",
  "real_time_monitoring",
  "drill_down_capabilities",
  "mobile_responsive",
  "data_refresh",
  "electoral_prediction",
  "reporting_framework",
  "executive_dashboard",
] as const;

export type DashboardPredictionCategory =
  typeof DASHBOARD_PREDICTION_CATEGORIES[number];

export const MAJORITY_THRESHOLD = 59;
export const PUNJAB_ASSEMBLY_SEATS = 117;
