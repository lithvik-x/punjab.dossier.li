// Booth SWOT Analysis Types
// Derived from: g70-punjab-booth-swot-analysis-protocol.md

import type { Region } from "./kpi-types";

// ==========================================
// SWOT DIMENSIONS
// ==========================================

export type SWOTDimension = "Strengths" | "Weaknesses" | "Opportunities" | "Threats";
export type SWOTInternal = "Strengths" | "Weaknesses";
export type SWOTExternal = "Opportunities" | "Threats";
export type InternalExternal = "Internal" | "External";

export interface SWOTElement {
  dimension: SWOTDimension;
  name: string;
  score: 1 | 2 | 3 | 4 | 5;
  description: string;
}

// ==========================================
// STRENGTHS
// ==========================================

export type StrengthCategory =
  | "Worker Density"
  | "Local Leader Support"
  | "Booth-Level Vote Base"
  | "Infrastructure Access";

export interface BoothStrength extends SWOTElement {
  dimension: "Strengths";
  category: StrengthCategory;
}

// ==========================================
// WEAKNESSES
// ==========================================

export type WeaknessCategory =
  | "Low Worker Density"
  | "Anti-Incumbency"
  | "AAP Penetration"
  | "Physical Barriers"
  | "Voting Pattern Anomalies";

export interface BoothWeakness extends SWOTElement {
  dimension: "Weaknesses";
  category: WeaknessCategory;
}

// ==========================================
// OPPORTUNITIES
// ==========================================

export type OpportunityCategory =
  | "Welfare Scheme Rollout"
  | "Rival Crisis"
  | "Local Issue Exploitation"
  | "Demographic Opportunity";

export interface BoothOpportunity extends SWOTElement {
  dimension: "Opportunities";
  category: OpportunityCategory;
  timeline: "immediate" | "30days" | "60days";
  probability: number; // 0-1
}

// ==========================================
// THREATS
// ==========================================

export type ThreatCategory =
  | "BJP Hindu Consolidation"
  | "AAP Wave"
  | "SAD Recovery"
  | "Criminal Candidate"
  | "PAN Detection";

export interface BoothThreat extends SWOTElement {
  dimension: "Threats";
  category: ThreatCategory;
  urgency: "HIGH" | "MEDIUM" | "LOW";
  probability: number; // 0-1
  impactIfRealized: string;
}

// ==========================================
// BOOTH SWOT REPORT
// ==========================================

export interface BoothSWOTReport {
  boothId: string;
  boothName: string;
  acNumber: number;
  acName: string;
  region: Region;
  totalVoters: number;
  congressBaseEstimate: number;
  primaryRival: string;
  lastElections: {
    2022: { congress: number };
    2017: { congress: number };
  };
  strengths: BoothStrength[];
  weaknesses: BoothWeakness[];
  opportunities: BoothOpportunity[];
  threats: BoothThreat[];
  viabilityScore?: number; // 1-5, calculated
  immediateActionRequired: boolean;
  escalationNotes?: string;
}

// ==========================================
// SWOT SCORING
// ==========================================

export interface SWOTScoringGuide {
  score: 1 | 2 | 3 | 4 | 5;
  strengthGuide: string;
  weaknessGuide: string;
  opportunityGuide: string;
  threatGuide: string;
}

export const SWOT_SCORING_GUIDE: SWOTScoringGuide[] = [
  {
    score: 5,
    strengthGuide: "Dominant (near-universal worker coverage, star leader)",
    weaknessGuide: "Severe (no workers, hostile location, 100% AAP penetration)",
    opportunityGuide: "Certain, high-impact (scheme rollout imminent, rival scandal breaking)",
    threatGuide: "Imminent, existential (booth capturing planned, candidate criminal threat)",
  },
  {
    score: 4,
    strengthGuide: "Strong (above-average worker density, good local support)",
    weaknessGuide: "Significant (major gaps, some AAP penetration, anti-incumbent sentiment)",
    opportunityGuide: "Probable, meaningful (likely within 60 days, moderate impact)",
    threatGuide: "Probable, damaging (likely rival wave, moderate criminal threat)",
  },
  {
    score: 3,
    strengthGuide: "Average (parity with rivals, adequate coverage)",
    weaknessGuide: "Moderate (manageable with effort, partial rival presence)",
    opportunityGuide: "Possible, limited (uncertain timing, limited scale)",
    threatGuide: "Possible, limited (some rival activity but contained)",
  },
  {
    score: 2,
    strengthGuide: "Below average (gaps in coverage, weaker than rivals)",
    weaknessGuide: "Concerning (requires significant resource allocation to fix)",
    opportunityGuide: "Unlikely (low probability, niche impact)",
    threatGuide: "Unlikely (minimal rival activity, manageable)",
  },
  {
    score: 1,
    strengthGuide: "Minimal (critical gaps, effectively no party presence)",
    weaknessGuide: "Critical (near-impossible to win without fundamental change)",
    opportunityGuide: "Rare (edge case, very niche)",
    threatGuide: "Minimal (no discernible threat)",
  },
];

// ==========================================
// VIABILITY SCORE CALCULATION
// ==========================================

export interface ViabilityScoreCalculation {
  sMean: number;
  wMean: number;
  oWeighted: number;
  tWeighted: number;
  finalScore: number;
  interpretation: string;
  campaignInvestment: string;
  candidateVisitPriority: string;
}

export const VIABILITY_INTERPRETATION: Record<string, { range: string; investment: string; candidatePriority: string }> = {
  "4.0-5.0": { range: "Strong Congress booth", investment: "Maintain + protect", candidatePriority: "Low (occasional)" },
  "3.0-3.9": { range: "Contested booth", investment: "Intensive engagement", candidatePriority: "High (at least 2 visits)" },
  "2.0-2.9": { range: "Weak booth", investment: "Limited investment", candidatePriority: "Medium (1 strategic visit)" },
  "1.0-1.9": { range: "Structural loss booth", investment: "Suppression focus", candidatePriority: "Avoid (don't amplify rival)" },
};

// ==========================================
// VISIT FREQUENCY
// ==========================================

export type BoothPriorityCategory = "High" | "Medium" | "Low" | "Crisis";

export interface VisitFrequency {
  priority: BoothPriorityCategory;
  voteShareRange: string;
  visitFrequency: string;
  boothPresidentReport: string;
  wardCoordinatorVisit: string;
}

export const VISIT_FREQUENCY: VisitFrequency[] = [
  { priority: "High", voteShareRange: "55-65%", visitFrequency: "Bi-weekly", boothPresidentReport: "Monthly", wardCoordinatorVisit: "Every 2 months" },
  { priority: "Medium", voteShareRange: "40-55%", visitFrequency: "Monthly", boothPresidentReport: "Monthly", wardCoordinatorVisit: "Quarterly" },
  { priority: "Low", voteShareRange: "<40%", visitFrequency: "Quarterly", boothPresidentReport: "Quarterly", wardCoordinatorVisit: "Bi-annual" },
  { priority: "Crisis", voteShareRange: "Escalated", visitFrequency: "Weekly", boothPresidentReport: "Weekly", wardCoordinatorVisit: "Within 72 hours" },
];

// ==========================================
// ESCALATION CRITERIA
// ==========================================

export type EscalationUrgency = "CRISIS" | "URGENT" | "HIGH" | "STANDARD";

export interface EscalationCriteria {
  urgency: EscalationUrgency;
  timeline: string;
  responseOwner: string;
  actionType: string;
}

export const ESCALATION_CRITERIA: EscalationCriteria[] = [
  { urgency: "CRISIS", timeline: "2-4 hours", responseOwner: "District President + Police Liaison", actionType: "Immediate security + ECI complaint" },
  { urgency: "URGENT", timeline: "24 hours", responseOwner: "District War Room + Legal Cell", actionType: "Documentation + legal preemptive filing" },
  { urgency: "HIGH", timeline: "48 hours", responseOwner: "AC Coordinator + Candidate", actionType: "Candidate visit, karyakarta surge" },
  { urgency: "STANDARD", timeline: "72 hours", responseOwner: "Ward Coordinator", actionType: "纳入竞选计划" },
];
