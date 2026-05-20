// Governance Gap & Perception Management Types for Punjab Congress 2027 Election
// Derived from: research-P5/constituency-proliferation/governance-gaps/ and research-P5/candidate-supremacy/perception-management/

/**
 * AAP Government Performance Scorecard
 */
export interface AAPPerformanceScorecard {
  sector: string;
  claim: string;
  reality: string;
  gapLevel: "Critical" | "High" | "Moderate";
}

export interface GovernanceGap {
  sector: string;
  aapClaim: string;
  groundReality: string;
  evidence: string;
  congressMessaging: string;
  severity: "Critical" | "High" | "Medium";
}

/**
 * Sector-wise Gap Analysis
 */
export interface SectorGap {
  sector: "Law and Order" | "Drug Menace" | "Fiscal Crisis" | "Healthcare" | "Education" | "Employment" | "Internal Dissent";
  criticalMetric: string;
  metricValue: string;
  promise: string;
  reality: string;
  evidence: string[];
  congressAttackLine: string;
  impactSeats?: number;
}

/**
 * Case Study for Failed Promises
 */
export interface FailedPromiseCase {
  caseName: string;
  promise: string;
  timeline: string;
  reality: string;
  evidence: string[];
  congressLine: string;
}

/**
 * Corruption Allegations
 */
export interface CorruptionAllegation {
  case: string;
  investigatingAgency?: string;
  date: string;
  accused: string;
  status: "Ongoing" | "Filed" | "Closed" | "Investigation";
  details: string;
}

/**
 * MLA Performance Issues
 */
export interface MLAPerformanceIssue {
  issue: string;
  description: string;
  affectedConstituencies: string[];
  severity: "Widespread" | "Localized" | "Isolated";
}

/**
 * Perception Management Metrics
 */
export interface PerceptionMetrics {
  firstImpressionTime: string;
  voterBehaviorPrediction: string;
  visualIdentityWeight: string;
  nameRecognitionBoost: string;
}

export interface ORMMetric {
  metric: string;
  target: string;
  current: string;
  status: "On Track" | "At Risk" | "Behind";
}

/**
 * Narrative Strategy
 */
export interface NarrativeStrategy {
  type: "Contrast" | "Legacy" | "Youth" | "Anti-Corruption" | "Regional Balance";
  description: string;
  example: string;
  effectiveness: "High" | "Medium" | "Low";
}

/**
 * Media Perception Framework
 */
export interface MediaPerceptionFramework {
  positiveCoverageTarget: number;
  messagePenetrationTarget: number;
  spokespersonVisibilityTarget: number;
  shareOfVoiceTarget: number;
}

export interface MediaPerceptionMetrics {
  metric: string;
  target: string;
  measurement: string;
  current?: string;
}

/**
 * Crisis Response Protocol
 */
export interface CrisisResponseProtocol {
  trigger: string;
  responseTime: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  protocol: string;
}

/**
 * Perception Correction Decision Tree
 */
export interface PerceptionCorrectionStep {
  condition: string;
  action: string;
  responseTemplate: string;
}

/**
 * Congress Perception Positioning
 */
export interface CongressPositioning {
  positioningStatement: string;
  differentiators: Differentiator[];
  targetVoterSegments: string[];
}

export interface Differentiator {
  aapNarrative: string;
  congressCounterNarrative: string;
}

/**
 * Image Restoration Strategy
 */
export interface ImageRestorationStrategy {
  strategy: "Denial" | "Evasion" | "Reducing Offensiveness" | "Corrective Action" | "Mortification";
  whenToUse: string;
  example: string;
}
