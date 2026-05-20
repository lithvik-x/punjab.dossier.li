// KPIs, Risk & Campaign Execution Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b23-kpi-risk-campaign-execution.md

// ==========================================
// KPI FRAMEWORK
// ==========================================

export interface KPIPhase {
  phase: string;
  metrics: KPIMetric[];
}

export interface KPIMetric {
  name: string;
  target: string;
  measurementMethod: string;
}

export interface LeadingIndicator {
  category: string;
  indicators: string[];
  predictiveValue: string;
}

export interface LaggingIndicator {
  category: string;
  indicators: string[];
  confirmatoryValue: string;
}

export interface OrganizationalKPI {
  metric: string;
  definition: string;
  target: string;
  frequency: string;
}

export interface ElectoralKPI {
  metric: string;
  definition: string;
  target: string;
  frequency: string;
}

export interface CommunicationKPI {
  metric: string;
  definition: string;
  target: string;
  frequency: string;
}

export interface BenchmarkData {
  election: string;
  congressSeats: number;
  congressVoteShare: number;
  aapSeats: number;
  aapVoteShare: number;
  sadSeats: number;
  bjpSeats: number;
  turnout: string;
}

// ==========================================
// RISK MANAGEMENT
// ==========================================

export interface PoliticalRisk {
  risk: string;
  description: string;
  earlyWarningSignals: string[];
}

export interface OperationalRisk {
  risk: string;
  description: string;
  earlyWarningSignals: string[];
}

export interface FinancialRisk {
  risk: string;
  description: string;
  earlyWarningSignals: string[];
}

export interface ReputationalRisk {
  risk: string;
  description: string;
  earlyWarningSignals: string[];
}

export interface LegalRisk {
  risk: string;
  description: string;
  earlyWarningSignals: string[];
}

export interface RiskAssessment {
  probability: "Rare" | "Unlikely" | "Possible" | "Likely" | "Almost Certain";
  impact: "Negligible" | "Minor" | "Moderate" | "Major" | "Severe";
  rating: "Low" | "Medium" | "High" | "Critical";
  responseTimeline: string;
  resourcePriority: string;
}

export interface MitigationStrategy {
  risk: string;
  prevention: string[];
  earlyDetection: string[];
  responseProtocol: string[];
  recoveryPlans: string[];
  owner: string;
}

export interface ContingencyResource {
  type: string;
  reservePercentage: number;
  description: string;
}

export interface PersonnelContingency {
  element: string;
  description: string;
}

export interface TimelineContingency {
  element: string;
  description: string;
}

export interface LegalBoundary {
  category: string;
  requirement: string;
  consequences: string;
}

export interface CrisisTier {
  tier: 1 | 2 | 3;
  definition: string;
  examples: string[];
  responseAuthority: string;
}

export interface CrisisCommunicationPrinciple {
  principle: string;
  requirement: string;
}

// ==========================================
// CAMPAIGN EXECUTION
// ==========================================

export interface BoothLevelRole {
  role: string;
  count: string;
  responsibilities: string[];
}

export interface BoothPresidentDashboard {
  components: string[];
}

export interface ConstituencyRole {
  role: string;
  count: string;
  responsibilities: string[];
}

export interface DistrictFunction {
  function: string;
  responsibilities: string[];
}

export interface StarCampaigner {
  category: string;
  leaders: string;
  deploymentFocus: string;
}

export interface DeploymentPrinciple {
  principle: string;
  description: string;
}

export interface SchedulingProtocol {
  timing: string;
  action: string;
}

export interface GOTVPhase {
  phase: string;
  timing: string;
  focus: string;
  keyActions: string[];
}

export interface GOTVContactPriority {
  priority: number;
  voterCategory: string;
  contactFrequency: string;
  method: string;
}

export interface GOTVResourceAllocation {
  resource: string;
  allocationPrinciple: string;
}

export interface ElectionDayTimeline {
  time: string;
  activity: string;
  responsibleParty: string;
}

export interface RapidResponseTeam {
  composition: string;
  activationCriteria: string[];
  responseTime: string;
  authority: string;
}

export interface SupplyChainItem {
  category: string;
  items: string;
  leadTime: string;
  storage: string;
}

export interface BudgetCategory {
  category: string;
  typicalAllocation: string;
  punjabAdjustment: string;
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const CAMPAIGN_KPI_CONCEPTS = {
  kpi: "Key Performance Indicator - quantifiable measure for evaluating success",
  leadingIndicator: "Predictive metric forecasting future performance",
  laggingIndicator: "Confirmatory metric showing outcomes after the fact",
  gotv: "Get Out the Vote - voter mobilization operations",
  riskMatrix: "5x5 probability-impact matrix for prioritization",
  booth: "Smallest electoral unit in ECI system (400-500 voters)",
  starCampaigner: "High-profile party figure for local candidate visibility",
  rrt: "Rapid Response Team for emerging campaign problems",
  ppcc: "Pradesh Congress Committee - state-level party unit",
  aicc: "All India Congress Committee - national party organization",
  eci: "Election Commission of India",
  evm: "Electronic Voting Machine",
  swingVoter: "Voter with uncertain party loyalty",
  coreVoter: "Voter with strong party identification",
  constituency: "Electoral district for Legislative Assembly (117 in Punjab)"
} as const;

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export const CAMPAIGN_KPI_CONFIDENCE = {
  kpiFramework: "High - Standard political campaign KPI methodology",
  successMetricsByPhase: "High - Four-phase campaign structure is universal",
  leadingVsLaggingIndicators: "High - Standard performance management framework",
  riskManagement: "High - Enterprise risk management frameworks applicable",
  campaignExecution: "High - Booth-level structure mirrors Indian election organization",
  groundOperations: "High - Standard Indian campaign organization",
  starCampaignerDeployment: "High - Standard political campaigning practice",
  gotvExecution: "High - Phase-based GOTV widely practiced",
  electionDayOperations: "High - Indian election day protocols well-documented",
  rapidResponseTeams: "High - Standard campaign practice",
  logisticalCoordination: "High - Standard supply chain management",
  legalEthicalBoundaries: "High - ECI model code and ethical frameworks documented"
} as const;
