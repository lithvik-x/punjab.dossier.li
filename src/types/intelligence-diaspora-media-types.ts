// International Diaspora Media Monitoring Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/g40-international-diaspora-media-monitoring.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: G40

// ==========================================
// METADATA
// ==========================================

export interface DiasporaMediaMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// UK MEDIA TYPES (Section 1.1)
// ==========================================

export type UKOutletName =
  | "sikh_press_association"
  | "radio_sikhnet"
  | "the_sikh_voice"
  | "avtar_european"
  | "punjab_today"
  | "gurdwara_council_uk";

export interface UKMediaOutlet {
  outlet: UKOutletName;
  type: string;
  reach: string;
  politicalLeaning: string;
  monitoringPriority: "critical" | "high" | "medium";
  keyCharacteristics: string[];
}

export interface UKMonitoringConfig {
  frequency: string;
  keyOutlets: UKMediaOutlet[];
}

// ==========================================
// CANADA MEDIA TYPES (Section 1.2)
// ==========================================

export type CanadaOutletName =
  | "atn"
  | "punjabi_post"
  | "canada_today"
  | "desi_news"
  | "gurdwara_bulletins"
  | "sikhnet";

export interface CanadaMediaOutlet {
  outlet: CanadaOutletName;
  type: string;
  reach: string;
  politicalLeaning: string;
  monitoringPriority: "critical" | "high" | "medium";
}

export interface CanadaMonitoringConfig {
  frequency: string;
  keyOutlets: CanadaMediaOutlet[];
}

// ==========================================
// USA MEDIA TYPES (Section 1.3)
// ==========================================

export type USAOutletName =
  | "saldf"
  | "sikh_coalition"
  | "punjabi_usa"
  | "india_abroad"
  | "india_west";

export interface USAMediaOutlet {
  outlet: USAOutletName;
  type: string;
  reach: string;
  politicalLeaning: string;
  monitoringPriority: "high" | "medium";
}

export interface USAMonitoringConfig {
  frequency: string;
  keyOutlets: USAMediaOutlet[];
}

// ==========================================
// AUSTRALIA/EUROPE MEDIA TYPES (Section 1.4)
// ==========================================

export interface AustraliaEuropeOutlet {
  region: string;
  keyOutlets: string[];
  monitoringPriority: "medium" | "low";
  notes: string;
}

// ==========================================
// DIASPORA POLITICS TYPES (Section 2)
// ==========================================

export type DiasporaOrgName =
  | "sfj"
  | "sikhs_for_justice_uk"
  | "dal_khalsa"
  | "referendum_2020"
  | "world_sikh_parliament";

export interface DiasporaOrganization {
  organization: DiasporaOrgName;
  base: string;
  orientation: string;
  punjabPoliticalImpact: string;
  threatLevel: "high" | "medium" | "low";
}

export interface KhalistanFrameRisk {
  currentStatus: string;
  riskScenarios: string[];
  congressPosition: string[];
}

export interface DiasporaInfluenceMechanism {
  flow: string;
  quantitativeEstimate: string;
  concentration: string;
}

// ==========================================
// INTERNATIONAL NARRATIVE TYPES (Section 3)
// ==========================================

export type CoverageType =
  | "punjab_elections"
  | "drug_trafficking"
  | "farmer_protests"
  | "religious_incidents"
  | "law_and_order"
  | "economic_development";

export interface CoverageAssessment {
  coverageType: CoverageType;
  frequency: string;
  typicalAngle: string;
  riskLevel: "high" | "medium" | "low";
}

export interface BJPInternationalImpact {
  outreach: string;
  narrativeFrames: string[];
  counterStrategyNeeded: boolean;
}

// ==========================================
// DIASPORA PERCEPTION TYPES (Section 4)
// ==========================================

export interface CurrentCongressPerception {
  perception: string;
  source: string;
  accuracy: string;
  correctiveNeeded: boolean;
}

export interface PositiveDiasporaPerception {
  strategicApproach: string;
  leadershipVisibility: string;
  achievementDocumentation: string;
  nriEngagementEvents: string;
  counterNarrativeDevelopment: string;
}

export interface DiasporaConcerns {
  priority: number;
  concern: string;
  congressionalResponse: string;
}

// ==========================================
// MONITORING TOOLS TYPES (Section 5)
// ==========================================

export type MonitoringPriority = 1 | 2 | 3;

export interface PriorityOneSource {
  source: string;
  url: string;
  language: string;
  alertType: string;
}

export interface PriorityTwoSource {
  source: string;
  url: string;
  language: string;
  alertType: string;
}

export interface DiasporaSocialMonitoring {
  platform: string;
  keyAccounts: string[];
  tool: string;
}

export interface GurdwaraMonitoring {
  approach: string;
  priorityGurdwaras: {
    gurdwara: string;
    location: string;
    significance: string;
  }[];
}

export interface WeeklyMonitoringProtocol {
  monday: string;
  wednesday: string;
  friday: string;
  dailyCrisis?: string;
}

// ==========================================
// ALERT THRESHOLDS TYPES (Section 5.5)
// ==========================================

export type AlertLevel = "green" | "yellow" | "orange" | "red" | "critical";

export interface AlertThreshold {
  level: AlertLevel;
  trigger: string;
  responseTime: string;
  escalationTo: string;
}

// ==========================================
// CRISIS RESPONSE TYPES (Section 6)
// ==========================================

export type CrisisScenario =
  | "khalistan_angle"
  | "drug_trafficking"
  | "religious_incident";

export interface CrisisResponseFramework {
  scenario: CrisisScenario;
  immediate: string[];
  shortTerm: string[];
  mediumTerm: string[];
}

export interface InternationalPressLiaison {
  outlet: string;
  journalist: string;
  beat: string;
  contact: string;
  lastContact: string;
}

export interface PressKitContents {
  items: string[];
}

export interface EscalationTree {
  level: string;
  contacts: string[];
}

// ==========================================
// NRI ENGAGEMENT TYPES (Section 7)
// ==========================================

export interface DiasporaMediaVoterInfluenceLoop {
  internationalCoverage: string;
  familyWhatsappGroups: string;
  diasporaNarrativeFormation: string;
  communityNetworkTransmission: string;
  voteChoice: string;
}

export interface FeedbackLoopManagement {
  positive: string;
  negative: string;
  interventionPoints: string[];
}

// ==========================================
// SECURITY NARRATIVE TYPES (Section 8)
// ==========================================

export interface CounterKhalistanFrame {
  coreNarrative: string;
  messagingFramework: {
    attackVector: string;
    congressionalResponse: string;
  }[];
}

export interface ProDevelopmentPositioning {
  visualNarrative: string[];
  prohibitedFraming: string[];
  requiredFraming: string[];
}

export interface PreventionDiasporaExtremes {
  engagementBoundaries: string;
  documentation: string;
  counterAttribution: string;
  positiveDifferentiation: string;
}

// ==========================================
// SOURCE LIST TYPES (Section 9)
// ==========================================

export interface CriticalInternationalSource {
  source: string;
  url: string;
}

export interface DiasporaMediaSource {
  source: string;
  url: string;
}

export interface MainstreamInternationalSource {
  source: string;
  url: string;
}

export interface WireServiceSource {
  source: string;
  url: string;
}

export interface SocialMediaAccountTracking {
  platform: string;
  accounts: string[];
}

// ==========================================
// IMPLEMENTATION TYPES (Section 10)
// ==========================================

export interface PreElectionChecklist {
  task: string;
  completed: boolean;
}

export interface ElectionPhaseChecklist {
  task: string;
  completed: boolean;
}

export interface CrisisActivationChecklist {
  task: string;
  completed: boolean;
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface DiasporaMediaMonitoringKPI {
  metadata: DiasporaMediaMetadata;

  // UK Media
  ukMedia: {
    outlets: UKMediaOutlet[];
    monitoringConfig: UKMonitoringConfig;
  };

  // Canada Media
  canadaMedia: {
    outlets: CanadaMediaOutlet[];
    monitoringConfig: CanadaMonitoringConfig;
  };

  // USA Media
  usaMedia: {
    outlets: USAMediaOutlet[];
    monitoringConfig: USAMonitoringConfig;
  };

  // Australia/Europe Media
  australiaEuropeMedia: AustraliaEuropeOutlet[];

  // Diaspora Politics
  diasporaPolitics: {
    organizations: DiasporaOrganization[];
    khalistanRisk: KhalistanFrameRisk;
    influenceMechanism: DiasporaInfluenceMechanism;
  };

  // International Narrative
  internationalNarrative: {
    coverageTypes: CoverageAssessment[];
    coverageByCountry: string;
    bjpInternationalImpact: BJPInternationalImpact;
  };

  // Diaspora Perception
  diasporaPerception: {
    currentPerceptions: CurrentCongressPerception[];
    positiveStrategy: PositiveDiasporaPerception;
    concerns: DiasporaConcerns[];
  };

  // Monitoring Tools
  monitoringTools: {
    priority1: PriorityOneSource[];
    priority2: PriorityTwoSource[];
    diasporaSocial: DiasporaSocialMonitoring[];
    gurdwara: GurdwaraMonitoring;
    weeklyProtocol: WeeklyMonitoringProtocol;
  };

  // Alert Thresholds
  alertThresholds: AlertThreshold[];

  // Crisis Response
  crisisResponse: {
    scenarios: CrisisResponseFramework[];
    pressLiaison: InternationalPressLiaison[];
    pressKit: PressKitContents;
    escalationTree: EscalationTree;
  };

  // NRI Engagement
  nriEngagement: {
    influenceLoop: DiasporaMediaVoterInfluenceLoop;
    feedbackManagement: FeedbackLoopManagement;
  };

  // Security Narrative
  securityNarrative: {
    counterKhalistanFrame: CounterKhalistanFrame;
    proDevelopmentPositioning: ProDevelopmentPositioning;
    preventionExtremes: PreventionDiasporaExtremes;
  };

  // Source Lists
  sources: {
    criticalInternational: CriticalInternationalSource[];
    diasporaMedia: DiasporaMediaSource[];
    mainstreamInternational: MainstreamInternationalSource[];
    wireServices: WireServiceSource[];
    socialMediaTracking: SocialMediaAccountTracking[];
  };

  // Implementation Checklists
  implementation: {
    preElection: PreElectionChecklist[];
    electionPhase: ElectionPhaseChecklist[];
    crisisActivation: CrisisActivationChecklist[];
  };
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const DIASPORA_MEDIA_CATEGORIES = [
  "uk_media",
  "canada_media",
  "usa_media",
  "australia_europe_media",
  "diaspora_politics",
  "international_narrative",
  "diaspora_perception",
  "monitoring_tools",
  "alert_thresholds",
  "crisis_response",
  "nri_engagement",
  "security_narrative",
] as const;

export type DiasporaMediaCategory = typeof DIASPORA_MEDIA_CATEGORIES[number];

export const NRI_DIASPORA_POPULATION = {
  canada: "~1.2M",
  uk: "~800K",
  usa: "~500K",
  australia: "~300K",
  europe: "~400K",
};

export const KhalistanThreatLevel = "HIGH";
export const KhalistanReferendum2020 = "Negligible in Punjab domestic politics";
