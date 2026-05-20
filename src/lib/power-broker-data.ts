// Power Broker Engagement Data
// Derived from: g74-punjab-local-power-broker-mapping-engagement-protocol.md

import type {
  BrokerTypeConfig,
  DeraInfo,
  EngagementAuthorization,
  RiskScore,
} from "@/types/power-broker-types";

// ==========================================
// BROKER TYPE CONFIGS
// ==========================================

export const BROKER_TYPE_CONFIGS: BrokerTypeConfig[] = [
  {
    type: "Retired Bureaucracy" as const,
    primaryWant: "Legacy, scheme access for followers",
    primaryOffer: "Priority in government schemes, recognition events",
    keyRisk: "Over-promising",
    strategy: "Offer institutional access, not ministerial commitments",
  },
  {
    type: "Police/Paramilitary" as const,
    primaryWant: "Respect, case management, employment",
    primaryOffer: "Favorable local policing inputs, family job placements",
    keyRisk: "Militarized coercion threat",
    strategy: "Keep engagement professional, avoid criminal overlap",
  },
  {
    type: "Panchayat Head" as const,
    primaryWant: "Development visibility, scheme funds",
    primaryOffer: "Panchayat-level project prioritization, fund access",
    keyRisk: "Could flip if denied",
    strategy: "Consistent engagement, involve in development planning",
  },
  {
    type: "Dera Leader" as const,
    primaryWant: "Follower welfare, community recognition",
    primaryOffer: "Government programs for Dera members, respectful treatment",
    keyRisk: "Religious authority overriding political",
    strategy: "Engage through credible intermediary, address Dera grievances",
  },
  {
    type: "Cooperative/Arhtiya" as const,
    primaryWant: "Financial advantage, policy protection",
    primaryOffer: "Favorable MSP policy advocacy, cooperative scheme support",
    keyRisk: "Economic demands escalate",
    strategy: "Frame engagement around farmer welfare, not broker profit",
  },
  {
    type: "Moneylender/Vetala" as const,
    primaryWant: "Debt acknowledgment, enforcement capacity",
    primaryOffer: "Legal space for recovery, non-interference",
    keyRisk: "Predatory reputation risk",
    strategy: "Maintain ethical distance; engagement only where necessary",
  },
  {
    type: "Gangster Operator" as const,
    primaryWant: "Protection, legitimacy",
    primaryOffer: "NONE — do not engage directly",
    keyRisk: "Criminal liability",
    strategy: "Report to district leadership immediately; no direct engagement",
  },
  {
    type: "Influential Family" as const,
    primaryWant: "Political access, community advancement",
    primaryOffer: "MLA candidacy consideration, party positions",
    keyRisk: "Family demands become entitlements",
    strategy: "Engage at family head level, not individual members",
  },
];

// ==========================================
// MAJOR DERAS INFO
// ==========================================

export const MAJOR_DERAS_INFO: DeraInfo[] = [
  {
    name: "Dera Sacha Sauda (Sirsa)",
    location: "Haryana border, Malwa",
    approximateFollowers: "50+ lakh",
    politicalRelevance: "Huge following among Mazhabi Sikh and Valmiki communities",
    engagementAuthority: "State leadership only",
  },
  {
    name: "Dera Sachkhand Ballan (Jalandhar)",
    location: "Jalandhar, Doaba",
    approximateFollowers: "20+ lakh",
    politicalRelevance: "Significant following in Doaba and parts of Majha",
    engagementAuthority: "DCC President",
  },
  {
    name: "Radha Soami Satsang Beas (Beas)",
    location: "Beas, Doaba",
    approximateFollowers: "30+ lakh",
    politicalRelevance: "Pan-Punjab following across all communities",
    engagementAuthority: "State leadership only",
  },
  {
    name: "Dera Sant Pal (Khalra)",
    location: "Doaba",
    approximateFollowers: "Smaller but politically active",
    politicalRelevance: "Known for explicit political endorsements",
    engagementAuthority: "DCC President",
  },
];

// ==========================================
// ENGAGEMENT AUTHORIZATION MATRIX
// ==========================================

export const ENGAGEMENT_AUTHORIZATION: EngagementAuthorization[] = [
  { engagementType: "Initial identification", boothWorker: "Yes", blcCoordinator: "—", constituencyCell: "—", dccPresident: "—", stateLeadership: "—" },
  { engagementType: "Informal conversation", boothWorker: "Yes", blcCoordinator: "Yes", constituencyCell: "Yes", dccPresident: "—", stateLeadership: "—" },
  { engagementType: "Offer development access", boothWorker: "—", blcCoordinator: "—", constituencyCell: "Yes", dccPresident: "—", stateLeadership: "—" },
  { engagementType: "Offer scheme prioritization", boothWorker: "—", blcCoordinator: "—", constituencyCell: "Yes", dccPresident: "Yes", stateLeadership: "—" },
  { engagementType: "Offer party position", boothWorker: "—", blcCoordinator: "—", constituencyCell: "—", dccPresident: "Yes", stateLeadership: "Yes" },
  { engagementType: "Dera leadership engagement", boothWorker: "—", blcCoordinator: "—", constituencyCell: "—", dccPresident: "—", stateLeadership: "Yes" },
  { engagementType: "Gangster operator engagement", boothWorker: "PROHIBITED", blcCoordinator: "PROHIBITED", constituencyCell: "PROHIBITED", dccPresident: "PROHIBITED", stateLeadership: "PROHIBITED" },
];

// ==========================================
// RISK SCORING
// ==========================================

export const RISK_SCORING: RiskScore[] = [
  { type: "Broker Flip", probability: 3, impact: 4, score: 12, priority: "HIGH" },
  { type: "Exposure", probability: 2, impact: 5, score: 10, priority: "HIGH" },
  { type: "Betrayal", probability: 2, impact: 4, score: 8, priority: "MEDIUM" },
  { type: "Escalation", probability: 3, impact: 3, score: 9, priority: "MEDIUM" },
  { type: "Gangster Coercion", probability: 1, impact: 5, score: 5, priority: "LOW" },
];

// ==========================================
// ETHICAL BOUNDARIES
// ==========================================

export const BROKER_ENGAGEMENT_DO_LIST = [
  "Deliver genuine development benefits to communities that support it",
  "Advocate policy positions that serve broker constituencies",
  "Provide institutional access and responsive governance",
  "Offer recognition and dignity to community leaders",
];

export const BROKER_ENGAGEMENT_DONT_LIST = [
  "Offer cash payments for voter mobilization",
  "Promise criminal non-prosecution in exchange for political support",
  "Threaten economic harm to coerce political allegiance",
  "Trade government positions for political endorsements",
];

export const DISENGAGEMENT_TRIGGERS = [
  "Broker demands cash payment for voter mobilization",
  "Broker threatens to expose or blackmail as part of engagement",
  "Broker's demands conflict with party ideology or candidate's values",
  "Broker is actively working for opponent while feigning alignment",
  "Broker's network is already lost (consistent voting against Congress)",
];

// ==========================================
// POWER SCORE RANGES
// ==========================================

export const POWER_SCORE_RANGES = {
  priority1: { min: 3.5, label: "Priority 1 engagement targets" },
  priority2: { min: 2.5, label: "Priority 2 engagement targets" },
  limited: { min: 0, label: "Limited engagement investment" },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get broker type config by type
 */
export function getBrokerTypeConfig(type: BrokerTypeConfig["type"]): BrokerTypeConfig | undefined {
  return BROKER_TYPE_CONFIGS.find(c => c.type === type);
}

/**
 * Get Dera info by name
 */
export function getDeraInfo(name: string): DeraInfo | undefined {
  return MAJOR_DERAS_INFO.find(d => d.name.includes(name.split(" ")[0]));
}

/**
 * Get engagement authorization for type
 */
export function getEngagementAuthorization(engagementType: string): EngagementAuthorization | undefined {
  return ENGAGEMENT_AUTHORIZATION.find(e => e.engagementType === engagementType);
}

/**
 * Get risk score by type
 */
export function getRiskScore(type: string): RiskScore | undefined {
  return RISK_SCORING.find(r => r.type === type);
}

/**
 * Calculate composite risk score
 */
export function calculateRiskScore(probability: number, impact: number): number {
  return probability * impact;
}

/**
 * Get priority level from composite score
 */
export function getPriorityLevel(compositeScore: number): "Priority 1" | "Priority 2" | "Limited Engagement" {
  if (compositeScore >= POWER_SCORE_RANGES.priority1.min) return "Priority 1";
  if (compositeScore >= POWER_SCORE_RANGES.priority2.min) return "Priority 2";
  return "Limited Engagement";
}

/**
 * Check if engagement is prohibited for broker type
 */
export function isEngagementProhibited(type: BrokerTypeConfig["type"]): boolean {
  return type === "Gangster Operator";
}

/**
 * Get disengagement triggers
 */
export function getDisengagementTriggers(): string[] {
  return DISENGAGEMENT_TRIGGERS;
}
