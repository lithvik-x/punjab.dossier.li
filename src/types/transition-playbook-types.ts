// Transition Playbook Types for Punjab Congress - Campaign to Governance
// Derived from: research-M2/MP10-predictive-outcomes/futures/transition-playbook.md
// Task ID: T-MP10-FUTR-003 | Pillar: MP10 — Predictive Outcomes & Future Planning
// Date Documented: 19 May 2026 | Status: COMPLETE

// ==========================================
// METADATA
// ==========================================

export interface TransitionPlaybookMetadata {
  taskId: string;
  pillar: string;
  subPillar: string;
  dependencies: string;
  dateDocumented: string;
  status: string;
  dataConfidence: string;
}

export type TransitionPhase = "T-0" | "T-1" | "T-2" | "T-3" | "T-4";
export type DataVerificationStatus = "VERIFICATION_NEEDED" | "VERIFIED" | "CONFIRMED";

// ==========================================
// TRANSITION TEAM STRUCTURE
// ==========================================

export interface TransitionCommitteeRole {
  role: string;
  responsibility: string;
  suggestedProfile: string;
}

export interface TransitionPhaseDetail {
  phase: TransitionPhase;
  name: string;
  timeline: string;
  actions: string[];
}

// ==========================================
// CORE TRANSITION COMMITTEE
// ==========================================

export interface TransitionCommittee {
  roles: TransitionCommitteeRole[];
  phases: TransitionPhaseDetail[];
}

// ==========================================
// DAY 1-100 PLAN
// ==========================================

export interface Day1OathDay {
  day: string;
  actions: string[];
  notes: string[];
}

export interface Day1to2Actions {
  actions: string[];
}

export interface Day2to5Actions {
  actions: string[];
  cabinetTarget: string;
  keyPortfolios: string[];
  regionalTargets: {
    ministersPerRegion: number;
    minimumWomen: number;
    communityBalance: string[];
  };
}

export interface Day5to7Actions {
  actions: string[];
  firstCabinetMeetingFocus: string;
  governanceDeliveryUnitNote: string;
}

export interface Day1to7Plan {
  day1: Day1OathDay;
  day1to2: Day1to2Actions;
  day2to5: Day2to5Actions;
  day5to7: Day5to7Actions;
}

export interface ManifestoPromise {
  promise: string;
  nodalDepartment: string;
  minister: string;
  timeline: string;
  milestones: string[];
  budgetSource: string;
  kpiDefinition: string;
  measurableTargets: string;
  verificationStatus: DataVerificationStatus;
}

export interface Day8to30Plan {
  manifestoPromises: ManifestoPromise[];
  institutionalActions: {
    action: string;
    description: string;
    authority: string;
    headRole: string;
  }[];
  communicationActions: string[];
}

export interface Day31to100Plan {
  departmentReforms: string[];
  legislativeAgenda: {
    action: string;
    description: string;
    verificationNeeded: string[];
  }[];
  reviewMechanism: {
    day60: string;
    day90: string;
    day100: string;
  };
}

// ==========================================
// MANIFESTO PROMISE TRACKING
// ==========================================

export interface PromiseKPIConversion {
  campaignPromiseElement: string;
  governanceKPI: string;
  target: string;
  reviewFrequency: "Weekly" | "Monthly" | "Quarterly";
  verificationStatus: DataVerificationStatus;
}

export interface TrackingInfrastructure {
  dashboard: {
    location: string;
    builtBy: string;
    technologySupport: string;
  };
  trafficLightSystem: {
    green: string;
    yellow: string;
    red: string;
  };
  publicAccountability: string;
  legislativeAccountability: string;
}

// ==========================================
// INTELLIGENCE ASSETS TRANSITION
// ==========================================

export interface CampaignAssetMapping {
  campaignAsset: string;
  governanceSuccessor: string;
  notes: string;
}

export interface KnowledgePreservation {
  preservationItem: string;
  transformation: string;
}

export interface IntelligenceTransition {
  assetMappings: CampaignAssetMapping[];
  knowledgePreservation: KnowledgePreservation[];
}

// ==========================================
// PERSONNEL TRANSITION
// ==========================================

export interface CampaignRoleMapping {
  campaignRole: string;
  possibleGovernanceRole: string;
  selectionCriteria: string;
}

export interface TransitionPrinciples {
  principle: string;
  description: string;
}

export interface PersonnelTransitionPlan {
  roleMappings: CampaignRoleMapping[];
  principles: TransitionPrinciples[];
}

// ==========================================
// COMMUNICATION TRANSITION
// ==========================================

export interface MessagingDimension {
  dimension: string;
  campaignMode: string;
  governanceMode: string;
}

export interface CommunicationMilestone {
  day: string;
  milestone: string;
  description: string;
}

export interface CommunicationTransitionPlan {
  messagingDimensions: MessagingDimension[];
  milestones: CommunicationMilestone[];
}

// ==========================================
// OPPOSITION STRATEGY
// ==========================================

export interface OppositionAssetRepurposing {
  campaignAsset: string;
  oppositionUse: string;
}

export interface OppositionPlaybook {
  strategy: string;
  description: string;
}

export interface CoalitionScenario {
  scenario: string;
  priorityPartners: string;
  approach: string;
}

export interface OppositionStrategyPlan {
  assetRepurposing: OppositionAssetRepurposing[];
  playbook: OppositionPlaybook[];
  coalitionScenarios: CoalitionScenario[];
}

// ==========================================
// RISK FACTORS
// ==========================================

export interface TransitionRisk {
  risk: string;
  mitigation: string;
}

// ==========================================
// SUMMARY
// ==========================================

export interface CriticalSuccessFactor {
  factor: string;
  description: string;
}

// ==========================================
// DATA CONFIDENCE NOTES
// ==========================================

export interface ConfidenceNote {
  item: string;
  basis: string;
  verificationNeeded: string[];
}

// ==========================================
// MAIN TRANSITION PLAYBOOK TYPE
// ==========================================

export interface TransitionPlaybook {
  metadata: TransitionPlaybookMetadata;
  purpose: {
    objective: string;
    context: string;
  };
  transitionCommittee: TransitionCommittee;
  day1to7Plan: Day1to7Plan;
  day8to30Plan: Day8to30Plan;
  day31to100Plan: Day31to100Plan;
  promiseTracking: {
    conversions: PromiseKPIConversion[];
    infrastructure: TrackingInfrastructure;
  };
  intelligenceTransition: IntelligenceTransition;
  personnelTransition: PersonnelTransitionPlan;
  communicationTransition: CommunicationTransitionPlan;
  oppositionStrategy: OppositionStrategyPlan;
  riskFactors: TransitionRisk[];
  successFactors: CriticalSuccessFactor[];
  dataConfidenceNotes: ConfidenceNote[];
}
