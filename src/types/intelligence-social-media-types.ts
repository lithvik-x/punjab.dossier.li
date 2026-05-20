// Social Media Command Center Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/b41-social-media-command-center.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: B41

// ==========================================
// METADATA
// ==========================================

export interface SocialMediaMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// TEAM STRUCTURE TYPES (Section 9.13)
// ==========================================

export type TeamTier = "leadership" | "content" | "monitoring" | "response" | "influencer";

export interface TeamMemberRole {
  tier: TeamTier;
  role: string;
  reportingTo: string;
  responsibilities: string[];
  experienceRequired: string;
}

export interface LeadershipTier {
  roles: TeamMemberRole[];
  staffCount: number;
}

export interface ContentDivision {
  roles: TeamMemberRole[];
  staffCount: number;
  shiftCoverage: boolean;
}

export interface MonitoringDivision {
  roles: TeamMemberRole[];
  staffCount: number;
  platformsCovered: string[];
}

export interface ResponseDivision {
  roles: TeamMemberRole[];
  staffCount: number;
  responseTimeSLA: string;
}

export interface InfluencerDivision {
  roles: TeamMemberRole[];
  staffCount: number;
  influencerCategories: string[];
}

export interface PhysicalWarRoomRequirements {
  spaceSqFt: number;
  workstations: number;
  videoWall: string;
  briefingArea: boolean;
  serverRoom: boolean;
  internetConnection: string;
  powerBackup: string;
}

export interface VirtualWarRoomInfrastructure {
  collaborationPlatform: string;
  contentLibraries: string;
  projectManagement: string;
  secureCommunications: string[];
}

// ==========================================
// TOOLS AND TECHNOLOGY TYPES
// ==========================================

export type SocialMediaToolCategory =
  | "management"
  | "listening"
  | "indian_platform"
  | "crisis_monitoring"
  | "design"
  | "video"
  | "analytics"
  | "collaboration";

export interface SocialMediaTool {
  category: SocialMediaToolCategory;
  toolName: string;
  purpose: string;
  recommendedOptions: string[];
  cost?: string;
}

export type ContentCreationTool = "canva" | "adobe_creative_cloud" | "davinci_resolve" | "capcut" | "audacity";

export interface AnalyticsReportingTool {
  nativePlatformAnalytics: string[];
  customDashboards: string[];
  spreadsheetAutomation: string;
}

// ==========================================
// WORKFLOW AND ESCALATION TYPES
// ==========================================

export type ContentApprovalStage =
  | "idea_generation"
  | "content_brief"
  | "creator_production"
  | "division_head_review"
  | "platform_director_approval"
  | "scheduled_published"
  | "performance_tracking";

export interface ContentApprovalWorkflow {
  stages: ContentApprovalStage[];
  slaByUrgency: {
    urgent: string;
    standard: string;
    planned: string;
  };
}

export type EscalationLevel = 1 | 2 | 3 | 4;

export interface EscalationProtocol {
  level: EscalationLevel;
  trigger: string;
  responseTime: string;
  escalationPath: string[];
}

export type ShiftType = "morning" | "afternoon" | "night_owl" | "peak_surge";

export interface ShiftCoverage {
  shift: ShiftType;
  timing: string;
  coverage: string;
}

export interface StaffingTraining {
  recruitmentSources: string[];
  trainingModules: {
    module: string;
    duration: string;
    audience: string;
    content: string;
  }[];
  ongoingDevelopment: string[];
}

// ==========================================
// CONTENT CALENDAR TYPES
// ==========================================

export type ThematicPillar =
  | "leadership_vision"
  | "issue_ownership"
  | "regional_focus"
  | "counter_narrative"
  | "cultural_resonance"
  | "youth_aspiration";

export interface AnnualThematicFramework {
  pillar: ThematicPillar;
  description: string;
}

export type MonthlyCampaignArc = {
  month: string;
  focus: string;
  contentTheme: string;
  keyMilestones: string[];
};

export type WeeklyTacticalDay =
  | "monday_issue"
  | "tuesday_candidate"
  | "wednesday_engagement"
  | "thursday_counter"
  | "friday_cultural"
  | "saturday_community"
  | "sunday_rest";

export interface WeeklyContentPlan {
  day: WeeklyTacticalDay;
  contentType: string;
}

export type TriggerType =
  | "opposition_gaffe"
  | "breaking_news"
  | "trending_topic"
  | "viral_opponent"
  | "local_success"
  | "religious_cultural";

export interface TriggerBasedContent {
  trigger: TriggerType;
  responseProtocol: string;
  examples: string[];
}

export interface NewsjackingFramework {
  monitor: string;
  assess: string;
  create: string;
  approve: string;
  publish: string;
  boost: string;
}

export type AdaptiveContentUnit =
  | "template_graphics"
  | "video_b_roll"
  | "approved_quote_cards"
  | "meme_templates"
  | "fact_check_assets";

export interface AdaptiveContentLibrary {
  unit: AdaptiveContentUnit;
  count: number;
  description: string;
}

// ==========================================
// PLATFORM-SPECIFIC TYPES
// ==========================================

export interface FacebookOptimization {
  algorithmPriority: string;
  optimalPostLength: string;
  bestPostingTimes: string[];
  videoFormat: string;
  carouselUse: string;
  stories: string;
}

export interface InstagramOptimization {
  reelsPriority: boolean;
  carouselUse: string;
  storySequence: string;
  closeFriends: boolean;
  hashtagStrategy: string;
  bestTimes: string[];
}

export interface TwitterOptimization {
  optimalLength: string;
  format: string;
  trendingHashtag: string;
  bestTimes: string[];
}

export interface WhatsAppOptimization {
  status24Hour: boolean;
  broadcastLists: boolean;
  infographics: boolean;
  language: string;
}

export interface YouTubeOptimization {
  longFormContent: string;
  shortsForViral: string;
  thumbnailTesting: boolean;
  endScreens: boolean;
  seoOptimization: boolean;
}

export interface EmergingPlatformStrategy {
  platform: string;
  targetDemographic: string;
  priority: string;
}

// ==========================================
// CRISIS CONTENT TYPES
// ==========================================

export type CrisisType =
  | "misinformation"
  | "leadership_attack"
  | "candidate_controversy"
  | "violence_incident"
  | "hack_security";

export interface CrisisContentResponse {
  crisisType: CrisisType;
  immediateAction: string;
  contentResponse: string;
  approvalLevel: string;
}

export type CrisisContentTemplate =
  | "misinformation_correction"
  | "leadership_defense"
  | "incident_response";

export interface CrisisTemplateFormat {
  template: CrisisContentTemplate;
  format: string;
}

// ==========================================
// ENGAGEMENT OPTIMIZATION TYPES
// ==========================================

export type SocialPlatform = "facebook" | "instagram" | "twitter" | "youtube" | "whatsapp";

export interface PlatformBenchmark {
  platform: SocialPlatform;
  engagementRate: {
    benchmark: string;
    good: string;
    excellent: string;
  };
  keyMetric: string;
}

export type EngagementMetricType =
  | "reach"
  | "engagement"
  | "amplification"
  | "conversation"
  | "applause"
  | "conversion"
  | "growth";

export interface EngagementKPI {
  metricType: EngagementMetricType;
  description: string;
  dashboardCadence: string;
}

export type DashboardCadence = "real_time" | "hourly" | "daily" | "weekly" | "monthly";

export interface BotDetectionIndicator {
  indicator: string;
  description: string;
  detectionMethod: string;
}

export type InfluencerCategory =
  | "celebrity"
  | "major"
  | "mid_tier"
  | "micro"
  | "nano"
  | "party_voice";

export interface InfluencerOutreachProtocol {
  identification: string;
  assessment: string;
  approach: string;
  onboarding: string;
  coordination: string;
  compensation: string;
  tracking: string;
  disclosure: string;
}

export interface DeraEngagementProtocol {
  sensitivityFirst: boolean;
  contentAlignment: string;
  permissionBased: boolean;
  whatsappPrimary: boolean;
  respectHierarchy: boolean;
}

export type CommentType =
  | "genuine_question"
  | "constructive_criticism"
  | "partisan_attack"
  | "troll_misinformation"
  | "threat_harassment"
  | "vulgar_abusive";

export interface CommentResponseGuideline {
  commentType: CommentType;
  responseApproach: string;
  exampleTone: string;
}

// ==========================================
// SENTIMENT TRACKING TYPES
// ==========================================

export interface SentimentMonitoringArchitecture {
  dataSources: string[];
  aggregation: string;
  analysis: string;
  visualization: string;
  alertSystem: string;
}

export type SentimentMonitoringDimension =
  | "overall_sentiment"
  | "issue_salience"
  | "leadership_perception"
  | "regional_variation"
  | "platform_breakdown"
  | "trend_direction";

export interface KeySentimentMetrics {
  mentionVolume: string;
  sentimentScore: string;
  shareOfVoice: string;
  trendingTopics: string;
  engagementQualityRatio: string;
  crisisIndicators: string;
}

export type AlertLevel = "green" | "yellow" | "orange" | "red";

export interface AlertThresholdConfig {
  level: AlertLevel;
  condition: string;
  response: string;
}

export type IssueCategory = "high_priority" | "medium_priority" | "low_priority";

export interface IssueEscalationPolicy {
  category: IssueCategory;
  flagTrigger: string;
  initialResponse: string;
  fullResponse: string;
}

export type ViralOpportunityType =
  | "favorable_news"
  | "opposition_stumble"
  | "cultural_moment"
  | "grassroots_win"
  | "viral_format";

export interface ViralResponseWorkflow {
  identification: string;
  assessment: string;
  creation: string;
  approval: string;
  publication: string;
  tracking: string;
}

// ==========================================
// NEGATIVE CAMPAIGN TYPES
// ==========================================

export interface CounterNarrativeFramework {
  exposeContradiction: string;
  documentRecord: string;
  contrastWithPositive: string;
  thirdPartyValidation: string;
  visualContrast: string;
}

export interface NegativeCampaignProhibited {
  attacksOnFamily: boolean;
  repeatingOppositionClaims: boolean;
  engagementWithProvocative: boolean;
  unsubstantiatedClaims: boolean;
  communalDivisiveLanguage: boolean;
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface SocialMediaCommandCenterKPI {
  metadata: SocialMediaMetadata;

  // Team Structure
  teamStructure: {
    leadership: LeadershipTier;
    content: ContentDivision;
    monitoring: MonitoringDivision;
    response: ResponseDivision;
    influencer: InfluencerDivision;
  };

  // War Room Setup
  warRoomSetup: {
    physical: PhysicalWarRoomRequirements;
    virtual: VirtualWarRoomInfrastructure;
  };

  // Tools
  tools: {
    socialMediaTools: SocialMediaTool[];
    contentCreation: ContentCreationTool[];
    analyticsReporting: AnalyticsReportingTool;
  };

  // Workflow
  workflow: {
    contentApproval: ContentApprovalWorkflow;
    escalationProtocols: EscalationProtocol[];
    shiftCoverage: ShiftCoverage[];
    staffingTraining: StaffingTraining;
  };

  // Content Calendar
  contentCalendar: {
    annualThematic: AnnualThematicFramework[];
    monthlyArcs: MonthlyCampaignArc[];
    weeklyPlan: WeeklyContentPlan[];
    triggerBased: TriggerBasedContent;
    newsjacking: NewsjackingFramework;
    adaptiveContent: AdaptiveContentLibrary[];
  };

  // Platform Optimization
  platformOptimization: {
    facebook: FacebookOptimization;
    instagram: InstagramOptimization;
    twitter: TwitterOptimization;
    whatsapp: WhatsAppOptimization;
    youtube: YouTubeOptimization;
    emergingPlatforms: EmergingPlatformStrategy[];
  };

  // Crisis Content
  crisisContent: {
    crisisResponses: CrisisContentResponse[];
    templates: CrisisTemplateFormat[];
  };

  // Engagement Optimization
  engagementOptimization: {
    benchmarks: PlatformBenchmark[];
    kpis: EngagementKPI[];
    dashboardCadence: DashboardCadence;
    botDetection: BotDetectionIndicator[];
    influencerProtocol: InfluencerOutreachProtocol;
    deraEngagement: DeraEngagementProtocol;
    commentGuidelines: CommentResponseGuideline[];
  };

  // Sentiment Tracking
  sentimentTracking: {
    architecture: SentimentMonitoringArchitecture;
    dimensions: SentimentMonitoringDimension[];
    keyMetrics: KeySentimentMetrics;
    alertThresholds: AlertThresholdConfig[];
    issueEscalation: IssueEscalationPolicy[];
    viralWorkflow: ViralResponseWorkflow;
  };

  // Negative Campaign
  negativeCampaign: {
    counterNarrative: CounterNarrativeFramework;
    prohibitedActions: NegativeCampaignProhibited;
  };

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const SOCIAL_MEDIA_CATEGORIES = [
  "team_structure",
  "war_room_setup",
  "tools_technology",
  "workflow_escalation",
  "content_calendar",
  "platform_optimization",
  "crisis_content",
  "engagement_optimization",
  "sentiment_tracking",
  "negative_campaign",
] as const;

export type SocialMediaCategory = typeof SOCIAL_MEDIA_CATEGORIES[number];

export const PAID_SOCIAL_BUDGET_ALLOCATION = {
  meta: "45-50%",
  twitter: "10-15%",
  youtube: "15-20%",
  whatsapp_status: "5-10%",
  emerging_platforms: "5-10%",
};

export const ENGAGEMENT_RATE_BENCHMARKS = {
  facebook: { benchmark: "0.5-1.5%", good: "1%", excellent: "3%+" },
  instagram: { benchmark: "1.5-3%", good: "2%", excellent: "5%+" },
  twitter: { benchmark: "0.3-0.8%", good: "0.5%", excellent: "1%+" },
  youtube: { benchmark: "5-10%", good: "7%", excellent: "12%+" },
  whatsapp_status: { benchmark: "10-20%", good: "15%", excellent: "30%+" },
};
