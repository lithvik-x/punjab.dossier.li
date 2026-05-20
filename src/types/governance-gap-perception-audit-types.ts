// Punjab Governance Gap Perception Audit Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g81-punjab-governance-gap-perception-audit.md

// ==========================================
// PERCEPTION FORMATION MODEL
// ==========================================

export interface PerceptionChannel {
  channel: string;
  weight: string;
  description: string;
}

export interface ChannelCharacteristic {
  channel: string;
  whyDominant: string;
  implication: string;
}

// ==========================================
// AAP GOVERNANCE DELIVERY AUDIT
// ==========================================

export interface AAPPromiseAudit {
  promise: string;
  actualDelivery: string;
  gapAnalysis: string;
}

export interface PerceptionVsRealityGap {
  issue: string;
  severity: "Severe" | "Moderate" | "Minimal";
  explanation: string;
}

// ==========================================
// GAP x SALIENCE MATRIX
// ==========================================

export interface GovernanceGapSalience {
  gap: string;
  severity: number;
  salience: number;
  priority: "CRITICAL" | "HIGH" | "MEDIUM";
}

// ==========================================
// ANGRY VOTER PROFILES
// ==========================================

export interface AngryVoterProfile {
  segment: string;
  grievanceProfile: string[];
  whyAngry: string;
  electoralSignificance: string;
  priorityAction: string;
}

export interface VoterSegmentGrievance {
  segment: string;
  primaryGrievance: string;
  intensity: string;
  aapVoteShare: string;
  recoveryPotential: string;
}

// ==========================================
// REGIONAL PERCEPTION DIFFERENCES
// ==========================================

export interface RegionalGovernanceGrievance {
  region: string;
  dominantGrievances: string[];
  whyDifferent: string;
  perceptionIntensity: string;
  congressOpportunity: string;
}

// ==========================================
// CONGRESS GRIEVANCE OPPORTUNITY
// ==========================================

export interface GrievanceStrategy {
  approach: string;
  description: string;
  emotionalProposition: string;
}

export interface MessagingArchitecture {
  type: "Anchor" | "Counter" | "Acknowledgment";
  statement: string;
  description: string;
}

export interface CounterNarrativeRisk {
  risk: string;
  severity: "Severe" | "Moderate" | "Minimal";
  managementStrategy: string;
}

export interface StrategyOption {
  strategy: string;
  approach: string;
  riskLevel: string;
}

// ==========================================
// PERCEPTION MEASUREMENT
// ==========================================

export interface FocusGroupProtocol {
  questionType: string;
  question: string;
}

export interface SurveyQuestion {
  qNumber: string;
  question: string;
  scale: string;
}

export interface SentimentAnalysisProtocol {
  platform: string;
  metric: string;
  tracking: string;
}

// ==========================================
// PERCEPTION AUDIT OUTPUT
// ==========================================

export interface RankedGovernanceGap {
  rank: number;
  gap: string;
  perceivedSeverity: number;
  primaryVoterSegment: string;
  regionalConcentration: string;
  messagingPriority: string;
}

export interface VoterSegmentGrievanceProfile {
  segment: string;
  primaryGrievance: string;
  intensity: string;
  aap2022VoteShare: string;
  congressRecoveryPotential: string;
  priorityAction: string;
}

export interface MeasurementQuestionnaire {
  section: string;
  questions: {
    q: string;
    type: string;
  }[];
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const GOVERNANCE_GAP_CONCEPTS = {
  availabilityHeuristic: "Voters assess governance through most memorable incidents",
  attributionFraming: "Gains attributed externally, failures attributed to government",
  narrativeCompetition: "Parties construct competing narratives about governance quality"
} as const;
