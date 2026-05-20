// Voter Shift Prediction Methodology Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g7-voter-shift-prediction-methodology.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G7

// ==========================================
// THEORETICAL FRAMEWORK
// ==========================================

export interface PushPullFramework {
  framework: string;
  pushFactors: string[];
  pullFactors: string[];
  punjabApplication: string;
}

export interface AnchorTheory {
  theory: string;
  partyIdentification: string;
  stabilityMechanisms: string[];
  deshock: string;
  punjabApplication: string;
}

export interface SalienceTheory {
  theory: string;
  issueSalience: string;
  timing: string;
  mediaAgendaSetting: string;
  punjabApplication: string;
}

// ==========================================
// SHIFT PROBABILITY MODEL
// ==========================================

export interface ShiftProbabilityFormula {
  formula: string;
  variables: {
    variable: string;
    description: string;
    typicalRange: string;
  }[];
  weights: {
    factor: string;
    weight: string;
    justification: string;
  }[];
}

export interface SSPVariable {
  name: string;
  description: string;
  dataSource: string;
  measurementApproach: string;
}

export interface ShiftProbabilityOutput {
  voterSegment: string;
  baseLoyalty: string;
  antiIncumbencyWeight: string;
  issueSalienceScore: string;
  candidateQualityDelta: string;
  deraInfluence: string;
  waveMomentum: string;
  finalProbability: string;
  confidenceLevel: "High" | "Medium" | "Low";
}

// ==========================================
// EARLY WARNING INDICATORS (EWIs)
// ==========================================

export type EWICategory = "Behavioral" | "Psychographic" | "Structural";

export interface BehavioralEWI {
  indicator: string;
  measurement: string;
  baseline: string;
  warningThreshold: string;
  dataCollectionMethod: string;
}

export interface PsychographicEWI {
  indicator: string;
  measurement: string;
  baseline: string;
  warningThreshold: string;
  dataCollectionMethod: string;
}

export interface StructuralEWI {
  indicator: string;
  measurement: string;
  baseline: string;
  warningThreshold: string;
  dataCollectionMethod: string;
}

export interface EWIThreshold {
  category: EWICategory;
  indicator: string;
  normalRange: string;
  elevatedRisk: string;
  criticalRisk: string;
}

// ==========================================
// SHIFT VECTOR MODELING
// ==========================================

export interface ShiftVector {
  fromParty: string;
  toParty: string;
  voterSegment: string;
  magnitude: string;
  velocity: string;
  triggers: string[];
}

export interface ShiftVectorComponents {
  individualLevelFactors: string[];
  communityLevelFactors: string[];
  structuralFactors: string[];
  temporalFactors: string[];
}

export interface ShiftVelocityTracking {
  voterSegment: string;
  baseline2022: string;
  currentIndicators: string;
  projected2027: string;
  confidenceInProjection: string;
}

// ==========================================
// HISTORICAL PATTERN ANALYSIS
// ==========================================

export interface CongressShiftsByCycle {
  year: string;
  seats: number;
  voteShare: string;
  shiftFromPrevious: string;
  keyDrivers: string[];
}

export interface AAPVoteShareProgression {
  year: string;
  seats: number;
  voteShare: string;
  shiftPattern: string;
}

export interface SADBJPShiftAnalysis {
  traditionalVoters: string;
  "2022Shift": string;
  potentialRecovery: string;
  riskFactors: string[];
}

export interface RegionalShiftPattern {
  region: string;
  "2012Pattern": string;
  "2017Pattern": string;
  "2022Pattern": string;
  dominantFactor: string;
  "2027Projection": string;
}

// ==========================================
// PUNJAB-SPECIFIC SHIFT DRIVERS
// ==========================================

export interface DrugsCrisisImpact {
  driver: "Drugs Crisis";
  severity: string;
  affectedCommunities: string[];
  governmentResponsibility: string;
  voterAngerDirection: string;
  shiftPotential: string;
}

export interface AgrarianDistressImpact {
  driver: "Agricultural Distress";
  severity: string;
  affectedFarmers: string;
  mortgageDebt: string;
  farmerSuicides: string;
  shiftDirection: string;
}

export interface YouthUnemploymentImpact {
  driver: "Youth Unemployment";
  severity: string;
  affectedYouthPercent: string;
  educationMigration: string;
  shiftPotential: string;
}

export interface WomenWelfareImpact {
  driver: "Women Welfare";
  beneficiaryPerception: string;
  schemeContinuation: string;
  congressAdvantage: string;
}

export interface CasteConversionImpact {
  driver: "Caste Conversion";
  phenomenon: string;
  affectedVoters: string;
  politicalImplication: string;
}

export interface DeraInfluenceShift {
  driver: "Dera Network Influence";
  keyDeras: string[];
  alignmentShift: string;
  followerVoteTransfer: string;
}

export interface WaveMomentumFactor {
  factor: "Wave Momentum";
  description: string;
  measurement: string;
  impactOnShift: string;
}

// ==========================================
// 2027 PREDICTION APPLICATION
// ==========================================

export interface ShiftPredictionScenario {
  scenario: "Optimistic" | "Base" | "Pessimistic";
  voteShareProjection: string;
  seatProjection: string;
  keyAssumptions: string[];
  riskFactors: string[];
  probability: string;
}

export interface ConstituencyShiftPrediction {
  constituency: string;
  region: string;
  currentHolder: string;
  margin2022: string;
  shiftIndicators: string[];
  prediction2027: string;
  confidence: "High" | "Medium" | "Low";
  counterfactualScenarios: string[];
}

export interface CongressRecoveryPath {
  fromSeats: number;
  toSeatsOptimistic: number;
  toSeatsBase: number;
  voteShareRecovery: string;
  requiredSwing: string;
  criticalSeats: string[];
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface ShiftPredictionConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  dataReliability: string;
  modelLimitations: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface VoterShiftPredictionData {
  documentDate: string;
  agent: string;
  taskId: "G7";
  frameworkSections: string[];

  // Theory
  theoreticalFrameworks: {
    pushPull: PushPullFramework;
    anchor: AnchorTheory;
    salience: SalienceTheory;
  };

  // Model
  shiftProbabilityFormula: ShiftProbabilityFormula;
  sspVariables: SSPVariable[];
  probabilityOutputs: ShiftProbabilityOutput[];

  // EWIs
  behavioralEWIs: BehavioralEWI[];
  psychographicEWIs: PsychographicEWI[];
  structuralEWIs: StructuralEWI[];
  ewiThresholds: EWIThreshold[];

  // Vectors
  shiftVectors: ShiftVector[];
  vectorComponents: ShiftVectorComponents;
  velocityTracking: ShiftVelocityTracking[];

  // Historical
  congressShifts: CongressShiftsByCycle[];
  aapProgression: AAPVoteShareProgression[];
  sadBjpAnalysis: SADBJPShiftAnalysis;
  regionalPatterns: RegionalShiftPattern[];

  // Punjab Drivers
  drugsImpact: DrugsCrisisImpact;
  agrarianImpact: AgrarianDistressImpact;
  youthUnemploymentImpact: YouthUnemploymentImpact;
  womenWelfareImpact: WomenWelfareImpact;
  casteConversionImpact: CasteConversionImpact;
  deraInfluence: DeraInfluenceShift;
  waveMomentum: WaveMomentumFactor;

  // 2027 Predictions
  scenarios: ShiftPredictionScenario[];
  constituencyPredictions: ConstituencyShiftPrediction[];
  recoveryPath: CongressRecoveryPath;

  // Confidence
  knowledgeConfidence: ShiftPredictionConfidence[];
}
