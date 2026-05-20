// Congress Agenda Conception from Intelligence Playbook Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g82-congress-agenda-conception-from-intelligence-playbook.md

// ==========================================
// INTELLIGENCE SYNTHESIS
// ==========================================

export interface TierBrief {
  tier: 1 | 2 | 3;
  name: string;
  pages: string;
  reads: string;
  contents: string[];
  productionTime: string;
  updateFrequency: string;
}

export interface BriefTemplate {
  section: string;
  contents: string[];
}

export interface SynthesisRule {
  rule: string;
  description: string;
}

// ==========================================
// STRATEGIC OPTIONS GENERATION
// ==========================================

export interface StrategicOption {
  option: string;
  frame: string;
  useWhen: string;
  intelligenceBasis: string;
  risk: string;
}

export interface OptionsDistinctCriteria {
  criteria: string;
  description: string;
}

// ==========================================
// DECISION-MAKING PROCESS
// ==========================================

export interface DecisionSequenceStep {
  step: number;
  name: string;
  participants: string;
  output: string;
}

export interface FactionalPriorityHandling {
  scenario: string;
  process: string;
}

export interface AgendaDecisionDocument {
  selectedOption: string;
  top3Priorities: string[];
  regionalAdaptationRules: string;
  nonNegotiableMessage: string;
  decisionWindow: string;
}

// ==========================================
// TRIGGER EVENTS
// ==========================================

export interface TriggerCategory {
  category: number;
  examples: string[];
  decisionWindow: string;
  responseLevel: string;
}

export interface DecisionWindowRule {
  rule: string;
  description: string;
}

export interface EmergencyBriefRequirement {
  document: string;
  pages: string;
  timeline: string;
}

// ==========================================
// MESSAGE DISCIPLINE
// ==========================================

export interface MessageLayer {
  layer: number;
  name: string;
  description: string;
  rules: string[];
}

export interface DisciplineMechanism {
  monitoringMethod: string;
  consequence: string;
}

export interface CascadePlan {
  timeOffset: string;
  action: string;
  method: string;
}

export interface StakeholderDocument {
  stakeholder: string;
  document: string;
  length: string;
  deliveryMethod: string;
}

// ==========================================
// SUCCESS METRICS
// ==========================================

export interface VoterRecallMetric {
  metric: string;
  frequency: string;
  sampleSize: string;
  target: string;
}

export interface MediaCoverageMetric {
  metric: string;
  frequency: string;
  target: string;
}

export interface PerceptionSurveyMetric {
  metric: string;
  frequency: string;
  sampleSize: string;
  target: string;
}

export interface ChangeCourseThreshold {
  condition: string;
  requirement: string;
}

// ==========================================
// 90-DAY SPRINT PROTOCOL
// ==========================================

export interface SprintPhase {
  phase: string;
  days: string;
  keyActions: string[];
  owner: string;
  lockStatus: string;
}

export interface WhatStaysConstant {
  element: string;
  description: string;
}

export interface WhatCanPivot {
  element: string;
  condition: string;
}

export interface SilencePeriodRule {
  rule: string;
  description: string;
  authority: string;
}

// ==========================================
// DECISION FLOW DIAGRAM NODES
// ==========================================

export interface DecisionFlowNode {
  node: string;
  action: string;
  nextStep: string;
}

export interface TriggerEventProtocol {
  category: string;
  protocol: string;
}

export interface AgendaLockStatus {
  phase: string;
  status: string;
  description: string;
}
