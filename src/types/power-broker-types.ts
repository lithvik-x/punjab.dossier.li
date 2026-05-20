// Power Broker Mapping Types
// Derived from: g74-punjab-local-power-broker-mapping-engagement-protocol.md

// ==========================================
// BROKER TYPES
// ==========================================

export type BrokerType =
  | "Retired Bureaucracy"
  | "Police/Paramilitary"
  | "Panchayat Head"
  | "Dera Leader"
  | "Cooperative/Arhtiya"
  | "Moneylender/Vetala"
  | "Gangster Operator"
  | "Influential Family";

export interface BrokerTypeConfig {
  type: BrokerType;
  primaryWant: string;
  primaryOffer: string;
  keyRisk: string;
  strategy: string;
}

export const BROKER_TYPE_CONFIGS: BrokerTypeConfig[] = [
  {
    type: "Retired Bureaucracy",
    primaryWant: "Legacy, scheme access for followers",
    primaryOffer: "Priority in government schemes, recognition events",
    keyRisk: "Over-promising",
    strategy: "Offer institutional access, not ministerial commitments",
  },
  {
    type: "Police/Paramilitary",
    primaryWant: "Respect, case management, employment",
    primaryOffer: "Favorable local policing inputs, family job placements",
    keyRisk: "Militarized coercion threat",
    strategy: "Keep engagement professional, avoid criminal overlap",
  },
  {
    type: "Panchayat Head",
    primaryWant: "Development visibility, scheme funds",
    primaryOffer: "Panchayat-level project prioritization, fund access",
    keyRisk: "Could flip if denied",
    strategy: "Consistent engagement, involve in development planning",
  },
  {
    type: "Dera Leader",
    primaryWant: "Follower welfare, community recognition",
    primaryOffer: "Government programs for Dera members, respectful treatment",
    keyRisk: "Religious authority overriding political",
    strategy: "Engage through credible intermediary, address Dera grievances",
  },
  {
    type: "Cooperative/Arhtiya",
    primaryWant: "Financial advantage, policy protection",
    primaryOffer: "Favorable MSP policy advocacy, cooperative scheme support",
    keyRisk: "Economic demands escalate",
    strategy: "Frame engagement around farmer welfare, not broker profit",
  },
  {
    type: "Moneylender/Vetala",
    primaryWant: "Debt acknowledgment, enforcement capacity",
    primaryOffer: "Legal space for recovery, non-interference",
    keyRisk: "Predatory reputation risk",
    strategy: "Maintain ethical distance; engagement only where necessary",
  },
  {
    type: "Gangster Operator",
    primaryWant: "Protection, legitimacy",
    primaryOffer: "NONE — do not engage directly",
    keyRisk: "Criminal liability",
    strategy: "Report to district leadership immediately; no direct engagement",
  },
  {
    type: "Influential Family",
    primaryWant: "Political access, community advancement",
    primaryOffer: "MLA candidacy consideration, party positions",
    keyRisk: "Family demands become entitlements",
    strategy: "Engage at family head level, not individual members",
  },
];

// ==========================================
// POWER ASSESSMENT
// ==========================================

export interface PowerAssessment {
  voterDependency: 1 | 2 | 3 | 4 | 5;
  networkSize: 1 | 2 | 3 | 4 | 5;
  resourceControl: 1 | 2 | 3 | 4 | 5;
  reputation: 1 | 2 | 3 | 4 | 5;
  compositeScore: number;
  priorityLevel: "Priority 1" | "Priority 2" | "Limited Engagement";
}

export const POWER_SCORE_RANGES = {
  priority1: { min: 3.5, label: "Priority 1 engagement targets" },
  priority2: { min: 2.5, label: "Priority 2 engagement targets" },
  limited: { min: 0, label: "Limited engagement investment" },
};

// ==========================================
// INFLUENCE MECHANISMS
// ==========================================

export type InfluenceMechanism = "Economic Leverage" | "Social Authority" | "Coercive Capacity" | "Informational Access" | "Institutional Position";

// ==========================================
// ALIGNMENT ANALYSIS
// ==========================================

export type BrokerAlignment = "Congress-Aligned" | "AAP-Aligned" | "Swing/Undetermined" | "Hostile";

export interface BrokerProfile {
  id: string;
  name: string;
  type: BrokerType;
  location: string;
  estimatedNetworkSize: number;
  alignment: BrokerAlignment;
  powerAssessment: PowerAssessment;
  influenceMechanism: InfluenceMechanism[];
  engagementStatus: "Identified" | "Contacted" | "Engaged" | "Committed" | "Hostile" | "Disengaged";
  riskScore?: {
    flip: number;
    exposure: number;
    betrayal: number;
    escalation: number;
    gangsterCoercion: number;
  };
  notes?: string;
}

// ==========================================
// DERA SPECIFIC
// ==========================================

export interface DeraInfo {
  name: string;
  location: string;
  approximateFollowers: string;
  politicalRelevance: string;
  engagementAuthority: "State leadership only" | "DCC President" | "Candidate" | "Any level";
}

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
// LEVERAGE TYPES
// ==========================================

export type LeverageType = "Past Favor" | "Future Potential" | "Dependency" | "Network";

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

// ==========================================
// DISENGAGEMENT TRIGGERS
// ==========================================

export const DISENGAGEMENT_TRIGGERS = [
  "Broker demands cash payment for voter mobilization",
  "Broker threatens to expose or blackmail as part of engagement",
  "Broker's demands conflict with party ideology or candidate's values",
  "Broker is actively working for opponent while feigning alignment",
  "Broker's network is already lost (consistent voting against Congress)",
];

// ==========================================
// RISK SCORING
// ==========================================

export interface RiskScore {
  type: string;
  probability: number;
  impact: number;
  score: number;
  priority: "HIGH" | "MEDIUM" | "LOW";
}

export const RISK_SCORING: RiskScore[] = [
  { type: "Broker Flip", probability: 3, impact: 4, score: 12, priority: "HIGH" },
  { type: "Exposure", probability: 2, impact: 5, score: 10, priority: "HIGH" },
  { type: "Betrayal", probability: 2, impact: 4, score: 8, priority: "MEDIUM" },
  { type: "Escalation", probability: 3, impact: 3, score: 9, priority: "MEDIUM" },
  { type: "Gangster Coercion", probability: 1, impact: 5, score: 5, priority: "LOW" },
];

// ==========================================
// ENGAGEMENT AUTHORIZATION
// ==========================================

export interface EngagementAuthorization {
  engagementType: string;
  boothWorker: string;
  blcCoordinator: string;
  constituencyCell: string;
  dccPresident: string;
  stateLeadership: string;
}

export const ENGAGEMENT_AUTHORIZATION: EngagementAuthorization[] = [
  { engagementType: "Initial identification", boothWorker: "Yes", blcCoordinator: "—", constituencyCell: "—", dccPresident: "—", stateLeadership: "—" },
  { engagementType: "Informal conversation", boothWorker: "Yes", blcCoordinator: "Yes", constituencyCell: "Yes", dccPresident: "—", stateLeadership: "—" },
  { engagementType: "Offer development access", boothWorker: "—", blcCoordinator: "—", constituencyCell: "Yes", dccPresident: "—", stateLeadership: "—" },
  { engagementType: "Offer scheme prioritization", boothWorker: "—", blcCoordinator: "—", constituencyCell: "Yes", dccPresident: "Yes", stateLeadership: "—" },
  { engagementType: "Offer party position", boothWorker: "—", blcCoordinator: "—", constituencyCell: "—", dccPresident: "Yes", stateLeadership: "Yes" },
  { engagementType: "Dera leadership engagement", boothWorker: "—", blcCoordinator: "—", constituencyCell: "—", dccPresident: "—", stateLeadership: "Yes" },
  { engagementType: "Gangster operator engagement", boothWorker: "PROHIBITED", blcCoordinator: "PROHIBITED", constituencyCell: "PROHIBITED", dccPresident: "PROHIBITED", stateLeadership: "PROHIBITED" },
];
