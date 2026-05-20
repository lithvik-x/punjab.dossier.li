// Rumor Management & Fact-Checking System Types
// Derived from: direct-documentation/cat-7-public-sentiment/g32-rumor-management-fact-checking-system.md
// Punjab Congress Digital Intelligence Dashboard 2027

// ==========================================
// RUMOR DETECTION NETWORK
// ==========================================

/**
 * Detection Network Ring
 */
export interface DetectionRing {
  ring: string;
  timeHorizon: string;
  description: string;
  coverage: string;
}

/**
 * Platform Monitoring Method
 */
export interface PlatformMonitoring {
  platform: string;
  monitoringMethod: string;
  keyAccountsGroups: string;
}

/**
 * Alert Escalation Matrix
 */
export interface AlertEscalation {
  detectionSource: string;
  timeToDistrictCommand: string;
  timeToStateHQ: string;
}

/**
 * Alert Level Configuration
 */
export interface AlertLevel {
  level: number;
  scope: string;
  recipients: string[];
  action: string;
}

// ==========================================
// RUMOR CLASSIFICATION SYSTEM
// ==========================================

/**
 * Classification by Source
 */
export interface RumorSourceClassification {
  category: string;
  definition: string;
  examples: string;
  primaryResponseOwner: string;
}

/**
 * Classification by Spread Velocity
 */
export interface RumorVelocityClassification {
  category: string;
  definition: string;
  detectionWindow: string;
  priority: "Monitor" | "Prepare Response" | "Immediate response" | "Emergency response";
}

/**
 * Classification by Demographic Reach
 */
export interface RumorDemographicClassification {
  category: string;
  definition: string;
  demographicsAffected: string;
  responseScale: string;
}

/**
 * Classification by Damage Potential
 */
export interface RumorDamageClassification {
  category: string;
  impactLevel: "Low" | "Medium" | "High" | "Crisis";
  responseUrgency: string;
  example: string;
}

// ==========================================
// RESPONSE PROTOCOLS
// ==========================================

/**
 * Tier 1 Response Protocol
 */
export interface Tier1Protocol {
  trigger: string;
  steps: string[];
  responseTime: string;
  resourceRequirement: string;
  example: string;
}

/**
 * Tier 2 Response Protocol
 */
export interface Tier2Protocol {
  trigger: string;
  steps: string[];
  responseTime: string;
  resourceRequirements: string[];
  example: string;
}

/**
 * Tier 3 Response Protocol
 */
export interface Tier3Protocol {
  trigger: string;
  steps: string[];
  responseTime: string;
  resourceRequirements: string[];
  example: string;
}

/**
 * Tier 4 Response Protocol (Emergency)
 */
export interface Tier4Protocol {
  trigger: string;
  steps: string[];
  responseTime: string;
  resourceRequirements: string[];
  example: string;
}

/**
 * Response Time Summary
 */
export interface ResponseTimeSummary {
  tier: number;
  detectionToInitialResponse: string;
  detectionToPublicStatement: string;
  detectionToLeaderCrisisResponse: string;
}

// ==========================================
// FACT-CHECK PRODUCTION
// ==========================================

/**
 * Rapid Fact-Check Pipeline
 */
export interface FactCheckPipeline {
  phase: string;
  timeRange: string;
  activities: string[];
}

/**
 * Format Selection
 */
export interface FormatSelection {
  format: string;
  bestUsedWhen: string;
  platform: string;
  languageMix: string;
}

/**
 * Language Distribution Strategy
 */
export interface LanguageStrategy {
  useCase: string;
  primaryLanguage: string;
  secondaryLanguage?: string;
}

/**
 * Approval Authority Matrix
 */
export interface ApprovalAuthority {
  tier: number;
  contentType: string;
  approvalAuthority: string;
  backup: string;
}

/**
 * Distribution Channel
 */
export interface DistributionChannel {
  channel: string;
  priority: "PRIMARY" | "SECONDARY";
  reach: string;
  credibility: string;
}

// ==========================================
// PRE-BUNKING
// ==========================================

/**
 * Pre-Bunking Content Category
 */
export interface PreBunkCategory {
  category: number;
  name: string;
  description: string;
  examples: string[];
}

/**
 * Inoculation Format Structure
 */
export interface InoculationFormat {
  part: "Pre-empt" | "Inoculate" | "Empower";
  content: string;
}

/**
 * Pre-Bunking Phase
 */
export interface PreBunkingPhase {
  phase: number;
  timing: string;
  focus: string;
}

/**
 * Known Rumor Scenario
 */
export interface KnownRumorScenario {
  rumorTitle: string;
  background: string;
  originPoints: string[];
  preBunkStrategy: string;
  format: string;
}

/**
 * Historical Incident Pre-Bunk
 */
export interface HistoricalIncidentPreBunk {
  incident: string;
  triggerScenario: string;
  preBunkStrategy: string;
}

// ==========================================
// FACT-CHECKER NETWORK
// ==========================================

/**
 * Network Structure Overview
 */
export interface FactCheckNetworkStructure {
  level: string;
  roles: string[];
  coverage?: string;
}

/**
 * Regional Volunteer Coverage Target
 */
export interface RegionalCoverageTarget {
  region: string;
  targetACCoverage: number;
  minimumVerifiersPerAC: number;
}

/**
 * Subject Matter Expert Panel
 */
export interface ExpertPanel {
  panel: string;
  expertiseArea: string;
  responseTime: string;
  panelSize: number;
}

// ==========================================
// SUCCESS METRICS
// ==========================================

/**
 * Response Time Metric
 */
export interface ResponseTimeMetric {
  metric: string;
  definition: string;
  target: string;
  criticalThreshold: string;
}

/**
 * Containment Rate Target
 */
export interface ContainmentRateTarget {
  rumorTier: number;
  targetRate: string;
  minimumAcceptable: string;
}

/**
 * Fact-Check Engagement Metric
 */
export interface EngagementMetric {
  metric: string;
  definition: string;
  target: string;
}

/**
 * Pre-Bunking Metric
 */
export interface PreBunkingMetric {
  metric: string;
  definition: string;
  target: string;
}

/**
 * Network Health Metric
 */
export interface NetworkHealthMetric {
  metric: string;
  definition: string;
  target: string;
}

// ==========================================
// OPERATIONAL CALENDAR
// ==========================================

/**
 * Pre-Election Phase Activities
 */
export interface PreElectionActivities {
  phase: string;
  activities: string[];
}

/**
 * Campaign Phase Activities
 */
export interface CampaignPhaseActivities {
  phase: string;
  activities: string[];
  peakPeriodActivities?: string[];
}

// ==========================================
// KEY SUCCESS FACTORS
// ==========================================

/**
 * Key Success Factor
 */
export interface KeySuccessFactor {
  factor: string;
  description: string;
}

// ==========================================
// INTEGRATION POINTS
// ==========================================

/**
 * System Integration Point
 */
export interface IntegrationPoint {
  section: string;
  integrationDescription: string;
}

/**
 * Rumor Management Report
 */
export interface RumorManagementReport {
  reportDate: string;
  documentationType: string;
  agent: string;
  taskId: string;
  frameworkSections: string;
  detectionRings: DetectionRing[];
  alertEscalation: AlertEscalation[];
  alertLevels: AlertLevel[];
  sourceClassifications: RumorSourceClassification[];
  velocityClassifications: RumorVelocityClassification[];
  demographicClassifications: RumorDemographicClassification[];
  damageClassifications: RumorDamageClassification[];
  tier1Protocol: Tier1Protocol;
  tier2Protocol: Tier2Protocol;
  tier3Protocol: Tier3Protocol;
  tier4Protocol: Tier4Protocol;
  responseTimeSummary: ResponseTimeSummary[];
  preBunkCategories: PreBunkCategory[];
  preBunkingPhases: PreBunkingPhase[];
  knownRumorScenarios: KnownRumorScenario[];
  historicalIncidents: HistoricalIncidentPreBunk[];
  networkStructure: FactCheckNetworkStructure[];
  regionalCoverageTargets: RegionalCoverageTarget[];
  expertPanels: ExpertPanel[];
  responseTimeMetrics: ResponseTimeMetric[];
  containmentRateTargets: ContainmentRateTarget[];
  engagementMetrics: EngagementMetric[];
  preBunkingMetrics: PreBunkingMetric[];
  networkHealthMetrics: NetworkHealthMetric[];
  preElectionActivities: PreElectionActivities[];
  campaignPhaseActivities: CampaignPhaseActivities[];
  keySuccessFactors: KeySuccessFactor[];
  integrationPoints: IntegrationPoint[];
}
