// Social Media Command Center Operations Manual Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/g15-social-media-command-center-ops-manual.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: G15

import type { SocialPlatform } from "./intelligence-social-media-types";

// ==========================================
// METADATA
// ==========================================

export interface SocialMediaOpsMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// COMMAND CENTER STRUCTURE TYPES (Section 1)
// ==========================================

export interface PhysicalWarRoomSetup {
  locationRequirements: {
    primaryLocation: string;
    chandigarhProximity: string;
    spaceSqFt: number;
    controlledAccess: boolean;
    workstations: number;
    videoWallPanels: number;
  };
  equipmentRequirements: {
    internetConnection: string;
    powerBackup: string;
    computers: number;
    monitors: number;
  };
  securityRequirements: {
    accessControl: string;
    secureServerRoom: boolean;
    encryption: string;
  };
}

export interface VirtualWarRoomSetup {
  collaborationPlatform: string;
  contentStorage: string;
  projectManagement: string;
  secureCommunications: string[];
}

export interface CommandCenterStaffing {
  totalCoreTeam: number;
  shifts: string[];
  warRoomOperationalFrom: string;
}

// ==========================================
// MONITORING PROTOCOLS TYPES (Section 2)
// ==========================================

export interface ShiftSchedule {
  shiftName: string;
  timing: string;
  coverage: string;
  staffNeeded: number;
}

export interface MonitoringCoverage {
  platform: SocialPlatform;
  coverageHours: number;
  peakHours: string[];
  overnightMonitoring: boolean;
}

export interface RealTimeDashboardMetrics {
  sentimentTracking: string[];
  competitorMonitoring: string[];
  crisisDetection: boolean;
  kpiUpdates: string;
}

// ==========================================
// PLATFORM-SPECIFIC TYPES (Section 3)
// ==========================================

export interface TwitterXMonitoring {
  handles: string[];
  hashtags: string[];
  trendingTopics: boolean;
  competitorAccounts: string[];
}

export interface FacebookMonitoring {
  pages: string[];
  groups: string[];
  publicPosts: boolean;
  engagementTracking: string[];
}

export interface InstagramMonitoring {
  handles: string[];
  storiesTracking: boolean;
  reelsMonitoring: boolean;
  hashtagTracking: string[];
}

export interface WhatsAppMonitoring {
  broadcastLists: string[];
  groupMonitoring: boolean;
  forwardTracking: boolean;
  limitations: string;
}

// ==========================================
// ESCALATION PROCEDURES TYPES (Section 4)
// ==========================================

export type EscalationLevel = 1 | 2 | 3 | 4;

export interface EscalationProcedure {
  level: EscalationLevel;
  trigger: string;
  responseTime: string;
  contacts: string[];
  actions: string[];
}

export interface CrisisCommunicationTree {
  immediate: string[];
  shortTerm: string[];
  mediumTerm: string[];
}

// ==========================================
// HASHTAG STRATEGY TYPES (Section 5)
// ==========================================

export interface HashtagCampaign {
  campaignName: string;
  primaryHashtag: string;
  supportingHashtags: string[];
  usageGuidelines: string[];
  trackingMethod: string;
}

export interface HashtagTracking {
  hashtag: string;
  volumeTracking: boolean;
  sentimentAnalysis: boolean;
  influencerUsage: boolean;
}

// ==========================================
// MEME WARFARE TYPES (Section 6)
// ==========================================

export interface MemeTemplate {
  templateName: string;
  format: string;
  customizationOptions: string[];
  usageContext: string[];
}

export interface ViralContentLibrary {
  templates: MemeTemplate[];
  approvedImages: string[];
  captions: string[];
}

export interface MemeWarfareProtocol {
  creation: string;
  approval: string;
  deployment: string;
  tracking: string;
}

// ==========================================
// BOT DETECTION TYPES (Section 7)
// ==========================================

export interface BotDetectionMetrics {
  accountAge: boolean;
  usernamePatterns: boolean;
  postingFrequency: boolean;
  engagementTiming: boolean;
  networkAnalysis: boolean;
}

export interface AstroturfCounter {
  detectionIndicators: string[];
  responseProtocol: string;
  documentation: string;
}

// ==========================================
// CRISIS INTEGRATION TYPES (Section 8)
// ==========================================

export interface CrisisAlertSystem {
  detection: string;
  validation: string;
  escalation: string;
  response: string;
  monitoring: string;
}

export interface CrossFunctionalCrisis {
  socialMedia: string[];
  groundTeam: string[];
  pressSecretary: string[];
  legal: string[];
}

// ==========================================
// REPORTING FORMATS TYPES (Section 9)
// ==========================================

export interface DailyReport {
  metrics: string[];
  sentimentSummary: string;
  topContent: string[];
  competitorActivity: string;
  alerts: string[];
}

export interface WeeklyReport {
  trends: string[];
  campaignPerformance: string;
  engagementGrowth: string;
  competitiveAnalysis: string;
  recommendations: string;
}

export interface CrisisReport {
  incident: string;
  timeline: string;
  response: string;
  impact: string;
  lessons: string;
}

// ==========================================
// STAFFING AND SHIFTS TYPES (Section 10)
// ==========================================

export interface StaffRole {
  title: string;
  responsibilities: string[];
  reportingTo: string;
  keyMetrics: string[];
}

export interface ShiftConfiguration {
  shiftName: string;
  startTime: string;
  endTime: string;
  staffCount: number;
  responsibilities: string[];
}

export interface TrainingProgram {
  module: string;
  duration: string;
  content: string[];
  certification: string;
}

// ==========================================
// MAIN OPS MANUAL TYPE
// ==========================================

export interface SocialMediaOpsManual {
  metadata: SocialMediaOpsMetadata;

  // Command Center Structure
  commandCenter: {
    physical: PhysicalWarRoomSetup;
    virtual: VirtualWarRoomSetup;
    staffing: CommandCenterStaffing;
  };

  // Monitoring
  monitoring: {
    shifts: ShiftSchedule[];
    platformCoverage: {
      twitter: TwitterXMonitoring;
      facebook: FacebookMonitoring;
      instagram: InstagramMonitoring;
      whatsapp: WhatsAppMonitoring;
    };
    dashboardMetrics: RealTimeDashboardMetrics;
  };

  // Escalation
  escalation: {
    procedures: EscalationProcedure[];
    crisisCommunication: CrisisCommunicationTree;
  };

  // Content Strategy
  contentStrategy: {
    hashtagCampaigns: HashtagCampaign[];
    hashtagTracking: HashtagTracking[];
    viralLibrary: ViralContentLibrary;
    memeWarfare: MemeWarfareProtocol;
  };

  // Bot Detection
  botDetection: {
    metrics: BotDetectionMetrics;
    counterAstroturf: AstroturfCounter;
  };

  // Crisis Integration
  crisisIntegration: {
    alertSystem: CrisisAlertSystem;
    crossFunctional: CrossFunctionalCrisis;
  };

  // Reporting
  reporting: {
    daily: DailyReport;
    weekly: WeeklyReport;
    crisis: CrisisReport;
  };

  // Staffing
  staffing: {
    roles: StaffRole[];
    shifts: ShiftConfiguration[];
    training: TrainingProgram[];
  };

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const OPS_MANUAL_CATEGORIES = [
  "command_center_structure",
  "monitoring_protocols",
  "platform_specific",
  "escalation_procedures",
  "hashtag_strategy",
  "meme_warfare",
  "bot_detection",
  "crisis_integration",
  "reporting_formats",
  "staffing_shifts",
] as const;

export type OpsManualCategory = typeof OPS_MANUAL_CATEGORIES[number];

export const CAMPAIGN_INTENSITY_PHASES = {
  foundation: "Month 1-2",
  build: "Month 3-4",
  scale: "Month 5-6",
  intensification: "Month 7-8",
};

export const BUDGET_OPTIONS = {
  standard: "INR 1.25-2.5 lakhs/month",
  premium: "INR 2.5-5 lakhs/month",
  enterprise: "INR 5+ lakhs/month",
};
