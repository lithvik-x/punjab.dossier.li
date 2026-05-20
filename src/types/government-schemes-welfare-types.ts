// Government Schemes & Welfare Delivery Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b39-government-schemes-welfare-delivery.md

// ==========================================
// SCHEME DELIVERY MECHANISMS
// ==========================================

export interface CentralScheme {
  name: string;
  description: string;
  beneficiaries: string;
  deliveryMechanism: string;
  punjabSpecific: string;
  challenges: string[];
}

export interface StateScheme {
  name: string;
  description: string;
  currentDisbursement: string;
  modificationsSince2022: string;
}

export interface DeliveryChain {
  stages: string[];
  dbtChain?: string[];
}

export interface AdministrativeBottleneck {
  issue: string;
  description: string;
  affectedScheme: string;
}

export interface DBTAnalysis {
  advantages: string[];
  limitations: string[];
  penetrationRate: string;
}

// ==========================================
// INCLUSION/EXCLUSION ERRORS
// ==========================================

export interface TargetingError {
  type: "Inclusion" | "Exclusion";
  description: string;
  affectedGroups: string[];
  estimate?: string;
}

export interface LeakyBucketAnalysis {
  scheme: string;
  estimatedLeakageRate: string;
  primaryLeakagePoint: string;
}

export interface EliteCaptureMechanism {
  type: string;
  description: string;
  affectedSchemes: string[];
}

export interface BeneficiaryBarrier {
  barrier: string;
  description: string;
  affectedPopulation: string[];
}

// ==========================================
// PUBLIC PERCEPTION
// ==========================================

export interface VoterAttributionAnalysis {
  phenomenon: string;
  description: string;
  percentage?: string;
}

export interface CongressAAPPositioning {
  party: "Congress" | "AAP";
  welfareLegacy: string;
  positioningStrength: string;
  challenges: string[];
}

export interface InformationAsymmetry {
  partyAdvantage: string;
  voterLimitations: string[];
}

export interface DeliveryAwarenessGap {
  realityType: "Delivery Reality" | "Awareness Reality";
  schemes: DeliveryAwarenessItem[];
}

export interface DeliveryAwarenessItem {
  scheme: string;
  actualDelivery: string;
  awarenessReality: string;
  gap: string;
}

// ==========================================
// POLITICAL CREDIT ASSIGNMENT
// ==========================================

export interface CreditAssignmentPattern {
  mechanism: string;
  description: string;
}

export interface IncumbencyAdvantage {
  factor: string;
  description: string;
}

export interface PropagandaDeliveryGap {
  aspect: string;
  description: string;
}

export interface CongressChallenge {
  dimension: string;
  description: string;
  strategicOptions: string[];
}

// ==========================================
// METHODOLOGICAL NOTES
// ==========================================

export interface WelfareStrategyRecommendation {
  focus: string;
  approach: string;
  targetAudience: string;
}

export interface KnowledgeConfidence {
  component: string;
  confidenceLevel: "High" | "Medium" | "Low";
  notes: string;
  requiresVerification?: string[];
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const WELFARE_SCHEMES_CONCEPTS = {
  dbt: "Direct Benefit Transfer - government transfer to bank accounts bypassing intermediaries",
  inclusionError: "False positive - non-eligible household receiving benefits",
  exclusionError: "False negative - genuine beneficiary denied benefits",
  leakyBucket: "Gap between government allocation and actual beneficiary receipt",
  eliteCapture: "Socially powerful groups disproportionate benefit despite targeting",
  welfareDeliveryChain: "Sequence from government budget to beneficiary",
  politicalCreditAssignment: "Process by which voters attribute welfare to parties",
  tunnelVisionHeuristic: "Voter focus on single issue subordinating welfare considerations",
  welfarePositioning: "Strategic association with welfare delivery in voter perceptions",
  secC: "Socio-Economic Caste Census 2011 - beneficiary identification database",
  nsap: "National Social Assistance Programme - central elderly/widow/disabled pensions"
} as const;
