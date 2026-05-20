// Real-Time Voter Opinion Microtracking Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/g71-punjab-real-time-voter-opinion-microtracking-system.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: G71

import type { RegionType } from "./intelligence-constituency-profiling-types";

// ==========================================
// METADATA
// ==========================================

export interface MicrotrackingMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// SYSTEM ARCHITECTURE TYPES (Section 1)
// ==========================================

export type IntelligenceLayer =
  | "social_listening"
  | "ground_intelligence"
  | "media_monitoring";

export interface LayerArchitecture {
  layer: IntelligenceLayer;
  dataSources: string[];
  dataFlow: string;
  refreshCadence: {
    critical: string;
    standard: string;
    trends: string;
  };
}

export interface CommandDashboardSpec {
  unifiedView: boolean;
  crossLayerCorrelation: boolean;
  alertIntegration: boolean;
}

// ==========================================
// SOCIAL LISTENING LAYER TYPES (Section 2)
// ==========================================

export type SocialPlatform = "twitter" | "facebook" | "whatsapp" | "youtube" | "local_forums" | "instagram";

export interface PlatformMonitoringConfig {
  platform: SocialPlatform;
  priority: "high" | "medium" | "low";
  trackContent: string[];
  punjabiSpecific: string;
}

export interface KeywordFramework {
  congress: string[];
  aap: string[];
  sadBjp: string[];
  issues: {
    drugs: string[];
    employment: string[];
    agriculture: string[];
    water: string[];
  };
}

export interface SocialListeningTool {
  tier: "enterprise" | "budget_alternative";
  toolName: string;
  cost: string;
  multilingualSupport: boolean;
  punjabiScriptSupport: boolean;
}

// ==========================================
// GROUND INTELLIGENCE LAYER TYPES (Section 3)
// ==========================================

export interface BoothAgentReport {
  moodAssessment: "positive" | "neutral" | "negative" | "uncertain";
  moodChange: "more_positive" | "same" | "more_negative";
  topIssues: {
    issue: string;
    percentMentioned: string;
  }[];
  candidateNameRecognition: "low" | "medium" | "high";
  candidatePerceptionTrend: "improving" | "stable" | "declining";
  viralLocalIncident: "yes" | "no";
  aapGroundPresence: "none" | "low" | "moderate" | "high";
  alertFlags: string[];
}

export interface WardIntelligenceOfficer {
  responsibilities: string[];
  reportsPerDay: number;
  escalationDeadline: string;
}

export interface DailyHandoffSchedule {
  boothReportsDue: string;
  wioSynthesis: string;
  warRoomBrief: string;
  digitalUpload: string;
}

export type BoothCount = 11700;

// ==========================================
// MEDIA MONITORING LAYER TYPES (Section 4)
// ==========================================

export interface VernacularPress {
  newspaper: string;
  location: string;
  trackContent: string[];
}

export interface TVMonitoring {
  channel: string;
  type: "regional" | "national";
  trackContent: string[];
}

export interface RadioMonitoring {
  station: string;
  type: "local" | "national";
  trackContent: string[];
}

export interface MediaAlertThreshold {
  level: "yellow" | "orange" | "red";
  condition: string;
}

export interface MediaMonitoringTool {
  tool: string;
  capability: string;
  cost: string;
}

// ==========================================
// DASHBOARD TYPES (Section 5)
// ==========================================

export interface DashboardMVP {
  components: string[];
  cost: string;
}

export interface DashboardAdvanced {
  features: string[];
  technologyStack: string;
  cost: string;
}

export interface DashboardMockup {
  sections: string[];
  metrics: string[];
}

// ==========================================
// ALERT SYSTEM TYPES (Section 6)
// ==========================================

export type AlertTier = "yellow" | "orange" | "red";

export interface AlertTierConfig {
  tier: AlertTier;
  name: string;
  triggerCondition: string;
  responseTime: string;
  recipients: string[];
}

export interface AlertResponseRequirement {
  tier: AlertTier;
  acknowledgmentTime: string;
  actionPlanTime: string;
}

export interface AlertThresholdTable {
  metric: string;
  yellow: string;
  orange: string;
  red: string;
}

// ==========================================
// REPORTING CADENCE TYPES (Section 7)
// ==========================================

export interface RealTimeReport {
  trigger: string;
  contents: string[];
  delivery: string;
}

export interface DailyWarRoomBrief {
  time: string;
  deliveredTo: string;
  contents: string[];
}

export interface WeeklyLeadershipSummary {
  day: string;
  time: string;
  deliveredTo: string;
  contents: string[];
}

// ==========================================
// PUNJAB-SPECIFIC TYPES (Section 8)
// ==========================================

export interface WhatsAppMonitoring {
  challenges: string[];
  mitigationStrategy: string[];
}

export interface PunjabiLanguageTracking {
  requirements: string[];
  recommendedTools: string[];
  accuracyNote: string;
}

export type DeraType =
  | "sacha_sauda"
  | "sachkhand_ballan"
  | "radha_soami"
  | "dera_nanak_sahib";

export interface DeraIntelligence {
  dera: DeraType;
  location: string;
  estimatedFollowers: string;
  politicalAlignment: string;
  intelligenceApproach: string;
}

export interface NRIDiasporaSentiment {
  countries: string[];
  trackingMethods: string[];
  importance: string;
}

// ==========================================
// COST AND INFRASTRUCTURE TYPES (Section 9)
// ==========================================

export interface MVPCost {
  component: string;
  toolApproach: string;
  monthlyCost: string;
}

export interface StandardSetupCost {
  component: string;
  toolApproach: string;
  monthlyCost: string;
}

export interface AdvancedEnterpriseCost {
  component: string;
  toolApproach: string;
  monthlyCost: string;
}

export interface CentralTeamStaffing {
  role: string;
  count: number;
  description: string;
}

export interface RegionalNodeStaffing {
  role: string;
  count: string;
  reportsTo: string;
}

// ==========================================
// DECISION INTEGRATION TYPES (Section 10)
// ==========================================

export interface DecisionTrigger {
  intelligenceFinding: string;
  campaignAdjustment: string;
  decisionAuthority: string;
}

export interface AuthorityToAct {
  alertTier: AlertTier;
  authority: string;
  autonomousActions: string[];
}

export interface RapidResponseTeam {
  composition: {
    role: string;
    count: number;
  }[];
  activationProtocol: string;
}

export interface IntelligenceToActionLoop {
  steps: string[];
  weeklyReview: string;
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface MicrotrackingKPI {
  metadata: MicrotrackingMetadata;

  // System Architecture
  systemArchitecture: {
    threeLayers: LayerArchitecture[];
    commandDashboard: CommandDashboardSpec;
    keyDesignPrinciple: string;
  };

  // Social Listening Layer
  socialListening: {
    platformMonitoring: PlatformMonitoringConfig[];
    keywordFramework: KeywordFramework;
    tools: SocialListeningTool[];
  };

  // Ground Intelligence Layer
  groundIntelligence: {
    boothAgentReport: BoothAgentReport;
    wardIntelligenceOfficer: WardIntelligenceOfficer;
    dailyHandoff: DailyHandoffSchedule;
    boothCount: BoothCount;
  };

  // Media Monitoring Layer
  mediaMonitoring: {
    vernacularPress: VernacularPress[];
    tv: TVMonitoring[];
    radio: RadioMonitoring[];
    alertThresholds: MediaAlertThreshold[];
    tools: MediaMonitoringTool[];
  };

  // Dashboard
  dashboard: {
    mvp: DashboardMVP;
    advanced: DashboardAdvanced;
    mockup: DashboardMockup;
  };

  // Alert System
  alertSystem: {
    tiers: AlertTierConfig[];
    responseRequirements: AlertResponseRequirement[];
    thresholdTable: AlertThresholdTable[];
  };

  // Reporting Cadence
  reportingCadence: {
    realTime: RealTimeReport;
    dailyBrief: DailyWarRoomBrief;
    weeklySummary: WeeklyLeadershipSummary;
  };

  // Punjab-Specific
  punjabSpecific: {
    whatsappMonitoring: WhatsAppMonitoring;
    punjabiLanguage: PunjabiLanguageTracking;
    deraIntelligence: DeraIntelligence[];
    nriDiaspora: NRIDiasporaSentiment;
  };

  // Cost and Infrastructure
  costInfrastructure: {
    mvp: MVPCost[];
    standard: StandardSetupCost[];
    advanced: AdvancedEnterpriseCost[];
    centralTeam: CentralTeamStaffing[];
    regionalNodes: RegionalNodeStaffing[];
  };

  // Decision Integration
  decisionIntegration: {
    decisionTriggers: DecisionTrigger[];
    authorityToAct: AuthorityToAct[];
    rapidResponseTeam: RapidResponseTeam;
    intelligenceToActionLoop: IntelligenceToActionLoop;
  };

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const MICROTRACKING_CATEGORIES = [
  "system_architecture",
  "social_listening_layer",
  "ground_intelligence_layer",
  "media_monitoring_layer",
  "dashboard",
  "alert_system",
  "reporting_cadence",
  "punjab_specific",
  "cost_infrastructure",
  "decision_integration",
] as const;

export type MicrotrackingCategory = typeof MICROTRACKING_CATEGORIES[number];

export const BOOTH_COUNT = 11700;
export const CONSTITUENCY_COUNT = 117;

export const REGIONAL_DERA_DISTRIBUTION = {
  sacha_sauda: { location: "Sirsa", estimatedFollowers: "50 lakh+", alignment: "Historically Congress, soft SAD" },
  sachkhand_ballan: { location: "Jalandhar (Doaba)", estimatedFollowers: "20 lakh+", alignment: "Congress traditional base" },
  radha_soami: { location: "Beas", estimatedFollowers: "10 lakh+", alignment: "Swing — educated urban" },
};

export const NRI_DIASPORA_COUNTRIES = ["Canada", "UK", "Australia", "USA"];
