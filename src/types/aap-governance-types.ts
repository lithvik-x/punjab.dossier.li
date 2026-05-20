// AAP Governance Performance Types (2022-2026)
// Derived from: research-P3/aap-governance/A1.01_aap_tenure_overview.md
// Research Date: May 2026 | Status: COMPLETE

import type { ACClassification, Region } from "./kpi-types";

// ==========================================
// METADATA
// ==========================================

export interface AAPGovernanceMetadata {
  researchDate: string;
  sourceType: string;
  analyst: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// PROMISE TRACKER
// ==========================================

export type AAPromiseStatus =
  | "FULFILLED"
  | "PARTIALLY_FULFILLED"
  | "DELAYED_PILOT_ONLY"
  | "NOT_FULFILLED"
  | "ROLLED_BACK"
  | "UNKNOWN";

export interface AAPPromise {
  id: string;
  promise: string;
  status: AAPromiseStatus;
  deliveryStatus: string;
  evidence: string;
  source: string;
  category: AAPPromiseCategory;
  fulfillmentPercent?: number;
  keyEvidence?: string[];
}

export type AAPPromiseCategory =
  | "employment"
  | "electricity"
  | "women_welfare"
  | "healthcare"
  | "drugs"
  | "governance"
  | "infrastructure"
  | "agriculture"
  | "education"
  | "law_order"
  | "social_welfare"
  | "economic";

export const AAP_PROMISE_CATEGORIES: Record<AAPPromiseCategory, string> = {
  employment: "Employment & Jobs",
  electricity: "Free Electricity",
  women_welfare: "Women Welfare",
  healthcare: "Healthcare",
  drugs: "Drug Eradication",
  governance: "Governance & Anti-Corruption",
  infrastructure: "Infrastructure",
  agriculture: "Agriculture & Farmers",
  education: "Education",
  law_order: "Law & Order",
  social_welfare: "Social Welfare",
  economic: "Economic Development",
};

// ==========================================
// BUDGET & FISCAL DATA
// ==========================================

export interface AAPBudgetOverview {
  totalOutlay: number; // Rs crore
  projectedGSDP: number; // Rs crore
  revenueDeficit: number; // % of GSDP
  fiscalDeficit: number; // % of GSDP
  outstandingDebt: number; // Rs crore
  debtToGSDP: number; // percentage
  fiscalYear: string;
}

export interface BudgetAllocation {
  sector: string;
  allocationRsCrore: number;
  percentChangeYoY?: number;
  category: string;
}

export interface AAPMajorAchievement {
  id: string;
  title: string;
  description: string;
  metrics: AchievementMetric[];
  source: string;
  category: AAPPromiseCategory;
}

export interface AchievementMetric {
  label: string;
  value: string | number;
  unit?: string;
}

// ==========================================
// POLICY TIMELINE
// ==========================================

export interface AAPPolicyEvent {
  date: string;
  policy: string;
  impact: string;
  note?: string;
}

export interface AAPPolicyTimeline {
  events: AAPPolicyEvent[];
}

// ==========================================
// PUBLIC PERCEPTION DATA
// ==========================================

export interface PerceptionTimeline {
  period: "2022" | "2024" | "2026";
  description: string;
  voteShare?: number;
  seatsWon?: number;
  keyNarrative: string;
  turnaroundFactors?: string[];
}

export interface PerceptionData {
  timelines: PerceptionTimeline[];
  currentSentiment: "positive" | "negative" | "mixed" | "neutral";
  keyIssues: string[];
  recoveryIndicators?: string[];
  riskFactors?: string[];
}

// ==========================================
// OPPOSITION CRITICISM
// ==========================================

export interface OppositionCriticism {
  party: "CONGRESS" | "BJP" | "SAD" | "EXPERT" | "ACADEMIC";
  source: string;
  keyPoints: string[];
  date?: string;
}

// ==========================================
// GOVERNANCE KPI DATA
// ==========================================

export interface AAPGovernanceKPI {
  metadata: AAPGovernanceMetadata;

  // Promise Tracker
  promises: AAPPromise[];

  // Budget Overview
  budget: AAPBudgetOverview;
  majorAllocations: BudgetAllocation[];

  // Policy Timeline
  policyTimeline: AAPPolicyTimeline;

  // Key Achievements
  achievements: AAPMajorAchievement[];

  // Public Perception
  perception: PerceptionData;

  // Opposition Criticism
  oppositionCriticism: OppositionCriticism[];

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const PROMISE_STATUS_LABELS: Record<AAPromiseStatus, string> = {
  FULFILLED: "Fulfilled",
  PARTIALLY_FULFILLED: "Partially Fulfilled",
  DELAYED_PILOT_ONLY: "Delayed - Pilot Only",
  NOT_FULFILLED: "Not Fulfilled",
  ROLLED_BACK: "Rolled Back",
  UNKNOWN: "Unknown",
};

export const PROMISE_STATUS_COLORS: Record<AAPromiseStatus, string> = {
  FULFILLED: "text-green-600 bg-green-50",
  PARTIALLY_FULFILLED: "text-yellow-600 bg-yellow-50",
  DELAYED_PILOT_ONLY: "text-orange-600 bg-orange-50",
  NOT_FULFILLED: "text-red-600 bg-red-50",
  ROLLED_BACK: "text-gray-600 bg-gray-50",
  UNKNOWN: "text-gray-500 bg-gray-50",
};

export const AAP_KEY_METRICS = {
  GOVERNMENT_JOBS_CLAIMED: 65264,
  PRIVATE_JOBS_CLAIMED: 700000,
  AAM_AADMI_CLINICS: 881,
  FREE_ELECTRICITY_UNITS: 300,
  POWER_SUBSIDY_CRORE: 15550,
  WOMENS_STIPEND_DELAY_YEARS: 4,
  DEBT_INCREASE_LAKH_CRORE: 1.33,
  TOTAL_DEBT_LAKH_CRORE: 4.48,
  YUDH_NASIAN_VIRUDH_FIRS: 8344,
  YUDH_NASIAN_VIRUDH_ARRESTS: 14734,
  YUDH_NASIAN_VIRUDH_HEROIN_KG: 586,
  SCHOOLS_OF_EMINENCE_PLANNED: 118,
  SCHOOLS_OF_EMINENCE_OPERATIONAL: 60,
  SEWA_KENDRAS: 544,
  SEWA_KENDRAS_SERVICES: 465,
} as const;

export const AAP_PROMISE_IDS = {
  JOBS_25_LAKH: "AAP_001",
  FREE_ELECTRICITY: "AAP_002",
  WOMEN_STIPEND: "AAP_003",
  DRUG_FREE: "AAP_004",
  CLINICS: "AAP_005",
  SCHOOLS_EMINENCE: "AAP_006",
  ELIMINATE_MAFIAS: "AAP_007",
  MSP_22_CROPS: "AAP_008",
  JAN_LOKPAL: "AAP_009",
  ANTI_VIP: "AAP_010",
  HOLY_CITY: "AAP_011",
  FREE_HEALTHCARE: "AAP_012",
  ANTI_CORRUPTION: "AAP_013",
  IRRIGATION: "AAP_014",
  CANAL_REVIVAL: "AAP_015",
} as const;
