// Exit Poll & Rapid Counting System Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/g21-exit-poll-rapid-counting-system.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: G21

import type { RegionType } from "./intelligence-constituency-profiling-types";

// ==========================================
// METADATA
// ==========================================

export interface ExitPollRapidCountingMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// EXIT POLL DESIGN TYPES (Section 1)
// ==========================================

export interface SampleSizeCalculation {
  formula: string;
  zScore: number;
  proportion: number;
  marginOfError: number;
  respondentsPerConstituency: number;
}

export interface StratifiedSamplingWeights {
  constituencyType: string;
  urbanWeight: number;
  ruralWeight: number;
  totalSample: number;
}

export interface BoothSelectionCriteria {
  tier: 1 | 2 | 3;
  description: string;
  boothsPerConstituency: number;
  selectionCriteria: string[];
}

export interface ExitPollQuestionnaire {
  questionNumber: number;
  question: string;
  options: string[];
  type: "vote_choice" | "issue" | "economic" | "caste" | "age" | "swing" | "confidence";
}

export interface InterviewerTraining {
  modules: {
    name: string;
    duration: string;
    format: string;
    assessment: string;
  }[];
  certificationRequirements: string[];
  trainerToTraineeRatio: number;
}

export interface DataCollectionApp {
  platform: string;
  offlineCapability: boolean;
  dataEntryMethod: string;
  gpsVerification: boolean;
  timestampCapture: boolean;
  antiFraudChecks: boolean;
}

export interface BoothsCoverageSummary {
  category: string;
  prioritySeats: number;
  boothsPerConstituency: number;
  respondentsTarget: number;
  interviewersNeeded: number;
}

// ==========================================
// RAPID COUNTING SYSTEM TYPES (Section 2)
// ==========================================

export interface RapidCountProcessFlow {
  pollClosing: string;
  officialCounting: string;
  rapidCount: string;
  dataAggregation: string;
  earlySignalReport: string;
  regionalTrendAnalysis: string;
}

export interface CounterObserverResponsibilities {
  countersPerBooths: number;
  supervisorOversight: number;
  ecRegistration: string;
  observationGuidelines: string[];
}

export interface DataTransmissionMethods {
  primary: {
    method: string;
    process: string;
  };
  fallback1: {
    method: string;
    format: string;
    example: string;
  };
  fallback2: {
    method: string;
    process: string;
  };
}

export interface CentralDashboardSpec {
  features: {
    mapView: boolean;
    trendLines: boolean;
    marginTracker: boolean;
    dataCompleteness: boolean;
    alerts: boolean;
    swingIndicator: boolean;
  };
  accessLevels: {
    level1: string;
    level2: string;
    level3: string;
  };
  technologyStack: string;
}

export interface CrossValidationLayers {
  layer1: {
    name: string;
    method: string;
    purpose: string;
  };
  layer2: {
    name: string;
    method: string;
    purpose: string;
  };
  layer3: {
    name: string;
    method: string;
    purpose: string;
  };
}

export interface ConfidenceScoring {
  level: string;
  range: string;
  validationLayers: number;
  boothsReporting: string;
}

export interface MOECalculation {
  formula: string;
  moeBySampleCompleteness: {
    boothsReporting: string;
    respondents: number;
    moeAtP50: string;
    moeAtP35: string;
  }[];
}

// ==========================================
// EARLY VICTORY DETECTION TYPES (Section 3)
// ==========================================

export interface CongressWinSignals {
  indicator: string;
  threshold: string;
  confidence: string;
}

export interface CongressLossSignals {
  indicator: string;
  threshold: string;
  confidence: string;
}

export interface UrbanSeatSignals {
  signal: string;
  winImplication: string;
  lossImplication: string;
}

export interface RuralSeatSignals {
  signal: string;
  winImplication: string;
  lossImplication: string;
}

export interface ReservedSeatSignals {
  signal: string;
  winImplication: string;
  lossImplication: string;
}

export interface RegionalEarlyTrends {
  region: RegionType;
  seats: number;
  dominanceSignal: string;
  secondaryConfirmation: string;
}

export interface SwingSeatDecisionFramework {
  marginThreshold: string;
  action: string;
}

// ==========================================
// ELECTORAL HISTORY TYPES (Section 4)
// ==========================================

export interface Punjab2022Results {
  party: string;
  seatsWon: number;
  voteShare: number;
  changeFrom2017: string;
}

export interface CongressRegionalPerformance {
  region: RegionType;
  seatsContested: number;
  seatsWon: number;
  winRate: string;
}

export interface VoteShareSwingImpact {
  party: string;
  baseline2022: number;
  swing10Percent: number;
  estimatedSeats: string;
}

export interface RegionalSwingProjection {
  region: RegionType;
  congress2022: number;
  congressPlus10Percent: string;
  seatsNeededForMajority: string;
}

export interface CriticalThresholdSeat {
  constituency: string;
  result2022: string;
  margin: string;
  type: string;
}

// ==========================================
// POST-RESULT NARRATIVE TYPES (Section 5)
// ==========================================

export interface NarrativeFramework {
  earlyResultType: string;
  approvedNarrative: string;
  sourceAttribution: string;
}

export interface VictoryAnnouncementProtocol {
  confidenceLevel: string;
  regionalConfirmation: boolean;
  authorizationRequired: string;
  statementLimitations: string[];
}

export interface ConcessionAnnouncementProtocol {
  internalDataThreshold: string;
  confidenceLevel: string;
  deliberationRequired: string;
  statementFormat: string;
}

export interface ResultsNightMediaBriefing {
  time: string;
  activity: string;
  spokesperson: string;
  content: string;
}

// ==========================================
// STAFFING AND TRAINING TYPES (Section 6)
// ==========================================

export interface InterviewerRequirements {
  category: string;
  interviewersPerConstituency: number;
  constituencies: number;
  totalInterviewers: number;
}

export interface TrainingCurriculum {
  session: string;
  duration: string;
  format: string;
  assessmentMethod: string;
}

export interface SupervisorStructure {
  level: string;
  ratio: string;
  count: number;
  responsibility: string;
}

export interface CostEstimation {
  category: string;
  unitCost: string;
  quantity: string;
  total: string;
}

// ==========================================
// LEGAL AND ETHICAL TYPES (Section 7)
// ==========================================

export interface ECRegulations {
  prePollBan: {
    rule: string;
    violationPenalty: string;
  };
  pollingStationProximity: {
    rule: string;
    boundaryDistance: string;
  };
  voterAnonymity: {
    rule: string;
    restrictions: string[];
  };
  interviewerIdentification: {
    rule: string;
    requirements: string[];
  };
  countingObserverRegistration: {
    form: string;
    submissionDeadline: string;
  };
}

export interface ProhibitedActions {
  publishingExitPoll: string;
  citingSeatProjections: string;
  characterizingInternalData: string;
  mediaBriefingSpecificNumbers: string;
  socialMediaSeatProjections: string;
}

export interface DataSecurityMeasures {
  voterResponses: string;
  voteChoiceData: string;
  rapidCountData: string;
  interviewerIdentities: string;
}

// ==========================================
// INTEGRATION TYPES (Section 8)
// ==========================================

export interface GOTVIntegration {
  earlyDataUsage: string;
  adjustmentPossibility: string;
  dataApplication: string;
}

export interface MediaNarrativeTimeline {
  phase: string;
  time: string;
  action: string;
}

export interface ApprovedNarrativeThemes {
  theme: string;
  triggerCondition: string;
  message: string;
}

// ==========================================
// IMPLEMENTATION TYPES (Section 9)
// ==========================================

export interface PreElectionPhase {
  month: string;
  activity: string;
}

export interface ElectionWeekSchedule {
  day: string;
  activity: string;
}

// ==========================================
// RISK ASSESSMENT TYPES (Section 10)
// ==========================================

export interface RiskAssessment {
  risk: string;
  likelihood: string;
  impact: string;
  mitigation: string;
}

export interface ContingencyPlan {
  scenario: string;
  response: string;
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface ExitPollRapidCountingKPI {
  metadata: ExitPollRapidCountingMetadata;

  // Exit Poll Design
  exitPollDesign: {
    sampleSize: SampleSizeCalculation;
    stratifiedSampling: StratifiedSamplingWeights[];
    boothSelection: BoothSelectionCriteria[];
    questionnaire: ExitPollQuestionnaire[];
    interviewerTraining: InterviewerTraining;
    dataCollectionApp: DataCollectionApp;
    boothsCoverage: BoothsCoverageSummary[];
  };

  // Rapid Counting
  rapidCounting: {
    processFlow: RapidCountProcessFlow;
    counterResponsibilities: CounterObserverResponsibilities;
    dataTransmission: DataTransmissionMethods;
    centralDashboard: CentralDashboardSpec;
    crossValidation: CrossValidationLayers;
    confidenceScoring: ConfidenceScoring[];
    moeCalculation: MOECalculation;
  };

  // Early Victory Detection
  earlyVictoryDetection: {
    congressWinSignals: CongressWinSignals[];
    congressLossSignals: CongressLossSignals[];
    urbanSeatSignals: UrbanSeatSignals[];
    ruralSeatSignals: RuralSeatSignals[];
    reservedSeatSignals: ReservedSeatSignals[];
    regionalTrends: RegionalEarlyTrends[];
    swingSeatFramework: SwingSeatDecisionFramework;
  };

  // Electoral History
  electoralHistory: {
    results2022: Punjab2022Results[];
    congressRegional: CongressRegionalPerformance[];
    swingImpacts: VoteShareSwingImpact[];
    regionalSwingProjections: RegionalSwingProjection[];
    criticalThresholdSeats: CriticalThresholdSeat[];
  };

  // Post-Result Narrative
  postResultNarrative: {
    approvedFrameworks: NarrativeFramework[];
    victoryProtocol: VictoryAnnouncementProtocol;
    concessionProtocol: ConcessionAnnouncementProtocol;
    mediaBriefingSchedule: ResultsNightMediaBriefing[];
  };

  // Staffing
  staffing: {
    requirements: InterviewerRequirements[];
    trainingCurriculum: TrainingCurriculum[];
    supervisorStructure: SupervisorStructure[];
    costEstimation: CostEstimation[];
  };

  // Legal/Ethical
  legalEthical: {
    ecRegulations: ECRegulations;
    prohibitedActions: ProhibitedActions;
    dataSecurity: DataSecurityMeasures;
  };

  // Integration
  integration: {
    gotvIntegration: GOTVIntegration;
    mediaNarrativeTimeline: MediaNarrativeTimeline[];
    approvedThemes: ApprovedNarrativeThemes[];
  };

  // Implementation
  implementation: {
    preElectionPhase: PreElectionPhase[];
    electionWeek: ElectionWeekSchedule[];
  };

  // Risk Assessment
  riskAssessment: {
    risks: RiskAssessment[];
    contingencies: ContingencyPlan[];
  };

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const EXIT_POLL_RAPID_COUNTING_CATEGORIES = [
  "exit_poll_design",
  "rapid_counting_system",
  "early_victory_detection",
  "electoral_history",
  "post_result_narrative",
  "staffing_training",
  "legal_ethical",
  "integration",
  "implementation",
  "risk_assessment",
] as const;

export type ExitPollRapidCountingCategory = typeof EXIT_POLL_RAPID_COUNTING_CATEGORIES[number];

export const PUNJAB_ELECTION_PARAMS = {
  electionDate: "February 2027",
  pollClosing: "6:00 PM IST",
  targetIntelligenceBy: "8:00-10:00 PM IST",
  constituencies: 117,
  totalBooths: 24000,
  avgBoothsPerConstituency: 205,
};

export const REGIONAL_SEATS: Record<RegionType, number> = {
  malwa: 69,
  majha: 27,
  doaba: 23,
};

export const BUDGET_SUMMARY = {
  personnel: "INR 2.0 Crore",
  technology: "INR 0.43 Crore",
  trainingMaterials: "INR 0.48 Crore",
  travelLogistics: "INR 1.29 Crore",
  contingency: "INR 0.68 Crore",
  total: "INR 4.88 Crore",
};
