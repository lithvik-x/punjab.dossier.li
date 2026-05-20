// Daily & Weekly Reporting Framework Types for Punjab Congress 2027 Election
// Derived from: MP10-predictive-outcomes/reporting/daily-weekly-reporting.md

// ==========================================
// REPORT TYPES & ENUMS
// ==========================================

export type ReportFrequency = "daily" | "weekly";

export type ReportType =
  | "DIB"                    // Daily Intelligence Brief
  | "WarRoomFlash"           // Real-Time Alerts
  | "DailyGroundReport"      // Daily Ground Report
  | "DailyMediaDigest"       // Daily Media Digest
  | "WIS"                    // Weekly Intelligence Summary
  | "WeeklyConstituencyPulse" // Weekly Constituency Pulse
  | "WeeklyCompetitorTracker" // Weekly Competitor Tracker
  | "WeeklyCampaignPerformance"; // Weekly Campaign Performance Report

export type SeverityLevel = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "HIGH" | "MED" | "LOW";

export type AlertType =
  | "Sentiment Spike"
  | "Competitor Move"
  | "Ground Incident"
  | "Media Crisis"
  | "KPI Breach";

export type AlertStatus = "MONITORING" | "RESPONDING" | "RESOLVED";

export type IssueStatus = "Reported" | "Escalated" | "Resolved";

export type SentimentType = "POS" | "NEU" | "NEG";

export type ACClassification = "Safe-Congress" | "Leaning-Congress" | "Toss-Up" | "Lean-Loss" | "Loss";

export type ThreatDirection = "↑" | "→" | "↓";

export type TrafficLight = "GREEN" | "YELLOW" | "RED";

export type Party = "AAP" | "SAD" | "BJP" | "BSP" | "Congress" | "Independents";

export type Region = "Malwa" | "Majha" | "Doaba" | "Statewide";

// ==========================================
// REPORT ATTRIBUTES
// ==========================================

export interface ReportAttribute {
  format: string;
  deliveryTime: string;
  audience: string[];
  channel: string;
}

export interface DailyReportAttributes extends ReportAttribute {
  productionStartTime?: string;
}

export interface WeeklyReportAttributes extends ReportAttribute {
  productionDays?: string;
}

// ==========================================
// DAILY REPORTS
// ==========================================

/**
 * DIB — Daily Intelligence Brief
 * 1-page consolidated brief delivered at 6:00 AM
 */
export interface DIBReport {
  type: "DIB";
  date: string;
  top5Items: Top5Item[];
  keyDevelopmentsOvernight: Development[];
  alertsFlags: AlertFlag[];
  recommendedActions: RecommendedAction[];
  todaysFocus: FocusItem[];
}

export interface Top5Item {
  item: string;
  severity: "HIGH" | "MED" | "LOW";
  actionRequired: boolean;
}

export interface Development {
  category: "Political Landscape" | "Competitor Activity" | "Media Environment";
  description: string;
}

export interface AlertFlag {
  type: "RED-FLAG KPI" | "Sentiment Anomaly" | "Ground Incident";
  description: string;
  source: string;
}

export interface RecommendedAction {
  action: string;
  owner: string;
  deadline: string;
}

export interface FocusItem {
  category: "Scheduled Events" | "Anticipated Competitor Moves";
  description: string;
}

/**
 * War Room Flash — Real-Time Alerts
 * Triggered alerts (1-2 paragraphs per alert)
 */
export interface WarRoomFlash {
  type: "WarRoomFlash";
  timestamp: string;
  trigger: AlertType;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  location: "Statewide" | "Region" | "District" | string;
  summary: string;
  impactAssessment: string;
  recommendedResponse: string;
  owner: string;
  status: AlertStatus;
}

/**
 * Daily Ground Report
 * 2-3 pages, constituency-wise data tables + narrative
 */
export interface DailyGroundReport {
  type: "DailyGroundReport";
  date: string;
  d2dCoverage: D2DCoverageUpdate;
  volunteerActivity: VolunteerActivityUpdate;
  localIssues: LocalIssue[];
  competitorGroundActivity: CompetitorGroundActivity;
  resourceStatus: ResourceStatus;
}

export interface D2DCoverageUpdate {
  acsVisitedToday: number;
  totalACs: number;
  cumulativeCoveragePercent: number;
  phaseTargetPercent: number;
  householdsContacted: number;
  voterInteractionsLogged: number;
}

export interface VolunteerActivityUpdate {
  activeVolunteersToday: number;
  newRecruitments: number;
  attendanceAtEventsRallies: number;
  topPerformingConstituencies: string[];
  underperformingConstituencies: string[];
}

export interface LocalIssue {
  acName: string;
  issue: string;
  severity: "H" | "M" | "L";
  status: IssueStatus;
}

export interface CompetitorGroundActivity {
  AAP: string;
  SAD: string;
  BJP: string;
}

export interface ResourceStatus {
  materialDistribution: string;
  vehicleLogistics: string;
  cashflowIssues: string;
}

/**
 * Daily Media Digest
 * 2 pages, media coverage summary
 */
export interface DailyMediaDigest {
  type: "DailyMediaDigest";
  date: string;
  topStories: TopStory[];
  congressCoverage: CongressCoverage;
  competitorCoverage: CompetitorCoverage;
  trendingTopics: TrendingTopic[];
  mediaOpportunities: MediaOpportunity[];
}

export interface TopStory {
  story: string;
  outlet: string;
  sentiment: SentimentType;
  reach: string;
}

export interface CongressCoverage {
  totalMentions: number;
  shareOfVoice: ShareOfVoice;
  tonalitySplit: TonalitySplit;
  keyNarrativeFrames: string[];
}

export interface ShareOfVoice {
  congress: number;
  AAP: number;
  SAD: number;
  BJP: number;
}

export interface TonalitySplit {
  positive: number;
  neutral: number;
  negative: number;
}

export interface CompetitorCoverage {
  AAP: { stories: string; tonality: string };
  SAD: { stories: string; tonality: string };
  BJP: { stories: string; tonality: string };
}

export interface TrendingTopic {
  hashtag: string;
  sentiment: string;
  viralContentAlert?: string;
}

export interface MediaOpportunity {
  type: "Story Pitch" | "Reactive Opportunity";
  description: string;
  timeBound: string;
}

// ==========================================
// WEEKLY REPORTS
// ==========================================

/**
 * WIS — Weekly Intelligence Summary
 * 10-15 pages, comprehensive analysis document
 */
export interface WeeklyIntelligenceSummary {
  type: "WIS";
  weekNumber: number;
  dateRange: string;
  executiveSummary: ExecutiveSummary;
  sections: WISSections;
  recommendations: StrategicRecommendation[];
  nextWeekPlan: string[];
}

export interface ExecutiveSummary {
  strategicAssessment: string[];
  kpiTrafficLightSnapshot: KPITrafficLight[];
  criticalDecisions: CriticalDecision[];
  keyRisksAndOpportunities: string[];
}

export interface KPITrafficLight {
  kpi: string;
  status: TrafficLight;
  currentValue: string;
  target: string;
}

export interface CriticalDecision {
  decision: string;
  outcomes: string;
}

export interface WISSections {
  politicalLandscape: PoliticalLandscape;
  voteShareProjection: VoteShareProjection;
  competitorIntelligence: WeeklyCompetitorIntelligence;
  campaignPerformance: CampaignPerformanceSection;
  mediaNarrative: MediaNarrativeSection;
  groundIntelligence: GroundIntelligenceSection;
  riskRegister: RiskRegister;
}

export interface PoliticalLandscape {
  overallAssessment: string;
  antiIncumbencyTrend: string;
  allianceCoalitionDynamics: string;
  byElectionImpact?: string;
}

export interface VoteShareProjection {
  statewideTrend: number;
  regionalBreakdown: RegionalVoteShare[];
  seatProjectionWithConfidence: SeatProjectionWithCI;
  acClassificationChanges: ACClassificationChange[];
  winProbabilityIndexMovement: WinProbabilityMovement;
}

export interface RegionalVoteShare {
  region: Region;
  voteShare: number;
  trend: "up" | "down" | "stable";
}

export interface SeatProjectionWithCI {
  medianSeats: number;
  confidenceInterval: string;
  seatRange: string;
}

export interface ACClassificationChange {
  acName: string;
  previousClassification: ACClassification;
  newClassification: ACClassification;
  reason: string;
}

export interface WinProbabilityMovement {
  previousValue: number;
  currentValue: number;
  direction: ThreatDirection;
}

export interface WeeklyCompetitorIntelligence {
  AAP: CompetitorWeeklyData;
  SAD: CompetitorWeeklyData;
  BJP: CompetitorWeeklyData;
  BSP: CompetitorWeeklyData;
  competitiveDynamics: CompetitiveDynamics;
  strategicImplications: StrategicImplication[];
}

export interface CompetitorWeeklyData {
  keyActions: string[];
  mediaStrategy: string;
  groundActivityAssessment: string;
  internalDynamics?: string;
  vulnerabilityAssessment: string;
  threatLevel: "HIGH" | "MEDIUM" | "LOW";
  threatDirection: ThreatDirection;
}

export interface CompetitiveDynamics {
  allianceMovements: string;
  voteSplittingScenarios: string;
  narrativeBattleground: string;
}

export interface StrategicImplication {
  implication: string;
  recommendedCounterMoves: string[];
  defensiveActions: string[];
  opportunityWindows: string[];
}

export interface CampaignPerformanceSection {
  kpiDashboard: KPIMetric[];
  d2dCoverageProgress: D2DProgressByRegion;
  eventRallyImpact: string;
  volunteerActivation: VolunteerMetrics;
  fundraisingVsTarget: FundraisingMetrics;
  digitalEngagementMetrics: DigitalEngagement;
}

export interface KPIMetric {
  name: string;
  currentValue: number;
  target: number;
  gap: number;
  trafficLight: TrafficLight;
  trendArrow: ThreatDirection;
}

export interface D2DProgressByRegion {
  Malwa: number;
  Majha: number;
  Doaba: number;
}

export interface VolunteerMetrics {
  totalRegistered: number;
  activeToday: number;
  newRecruitments: number;
  activationRate: number;
}

export interface FundraisingMetrics {
  raised: number;
  target: number;
  percentComplete: number;
}

export interface DigitalEngagement {
  reach: number;
  engagementRate: number;
  topContent: string;
}

export interface MediaNarrativeSection {
  shareOfVoiceWeeklyTrend: WeeklySOVTrend[];
  narrativePenetrationAssessment: string;
  mediaCrisisIncidentsSummary: string;
  socialMediaPerformance: SocialMediaPerformance;
}

export interface WeeklySOVTrend {
  party: Party;
  mondayPercent: number;
  fridayPercent: number;
  trend: ThreatDirection;
}

export interface SocialMediaPerformance {
  totalFollowers: number;
  engagementRate: number;
  topHashtags: string[];
}

export interface GroundIntelligenceSection {
  keyLocalIssues: LocalIssueTrending[];
  casteCommunityDynamicsShifts: CasteCommunityShift[];
  candidateFeedbackSummary: CandidateFeedback[];
  voterMoodAssessmentByRegion: VoterMoodRegion[];
}

export interface LocalIssueTrending {
  issue: string;
  acsAffected: number;
  trend: "increasing" | "decreasing" | "stable";
}

export interface CasteCommunityShift {
  community: string;
  previousTilt: string;
  currentTilt: string;
  driver: string;
}

export interface CandidateFeedback {
  candidateName: string;
  acName: string;
  feedback: string;
  issues: string[];
}

export interface VoterMoodRegion {
  region: Region;
  mood: "optimistic" | "pessimistic" | "neutral" | "swing";
  keyFactors: string[];
}

export interface RiskRegister {
  activeRisks: Risk[];
  newRisksThisWeek: Risk[];
  escalatedDeEscalated: RiskChange[];
  earlyWarningIndicators: EarlyWarningIndicator[];
}

export interface Risk {
  riskId: string;
  description: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  probability: "HIGH" | "MEDIUM" | "LOW";
  impact: "HIGH" | "MEDIUM" | "LOW";
  mitigation: string;
  owner: string;
}

export interface RiskChange {
  riskId: string;
  change: "escalated" | "de-escalated";
  previousSeverity: string;
  newSeverity: string;
  reason: string;
}

export interface EarlyWarningIndicator {
  indicator: string;
  status: "GREEN" | "YELLOW" | "RED";
  description: string;
}

export interface StrategicRecommendation {
  recommendation: string;
  rationale: string;
  owner: string;
  timeline: string;
  expectedImpact: string;
}

/**
 * Weekly Constituency Pulse
 * Tiered format based on strategic priority
 */
export interface WeeklyConstituencyPulse {
  type: "WeeklyConstituencyPulse";
  weekNumber: number;
  date: string;
  tiers: ConstituencyTier[];
}

export interface ConstituencyTier {
  tier: 1 | 2 | 3;
  description: string;
  acCount: number;
  constituencies: ACProfile[];
}

export interface ACProfile {
  acName: string;
  tier: 1 | 2 | 3;
  seatAssessment: SeatAssessment;
  groundActivity: ACGroundActivity;
  competitorActivity: ACCompetitorActivity;
  casteCommunityDynamics: CasteCommunityDynamics;
  candidateStatus?: CandidateStatus;
  recommendedActions: string[];
}

export interface SeatAssessment {
  currentClassification: ACClassification;
  projectedMargin: number;
  movementThisWeek: number;
  keyFactors: string[];
}

export interface ACGroundActivity {
  d2dCoveragePercent: number;
  targetCoveragePercent: number;
  volunteerCount: number;
  newVolunteersThisWeek: number;
  eventsHeld: number;
  localIssuesFlagged: string[];
}

export interface ACCompetitorActivity {
  AAP: { activity: string; estimatedImpact: string };
  "SAD/BJP": { activity: string; estimatedImpact: string };
}

export interface CasteCommunityDynamics {
  dominantGroups: CasteGroup[];
  communitySentimentShift: string;
  driver: string;
}

export interface CasteGroup {
  name: string;
  approximatePercent: number;
}

export interface CandidateStatus {
  candidateName: string;
  acceptanceRating: number;
  campaignActivityLevel: "HIGH" | "MEDIUM" | "LOW";
  issuesFlagged: string[];
}

/**
 * Weekly Competitor Tracker
 * 3-4 pages, structured per competitor
 */
export interface WeeklyCompetitorTracker {
  type: "WeeklyCompetitorTracker";
  weekNumber: number;
  competitors: WeeklyTrackerCompetitor[];
  competitiveDynamics: CompetitiveDynamics;
  strategicImplications: StrategicImplication[];
}

export interface WeeklyTrackerCompetitor {
  party: "AAP" | "SAD" | "BJP" | "BSP";
  isIncumbent: boolean;
  keyActionsThisWeek: string[];
  mediaStrategy: string;
  groundActivityAssessment: string;
  internalDynamics?: string;
  vulnerabilityAssessment: string;
  threatLevel: "HIGH" | "MEDIUM" | "LOW";
  threatDirection: ThreatDirection;
}

/**
 * Weekly Campaign Performance Report
 * KPI dashboard with trend vs target (visual-heavy, 3-4 pages)
 */
export interface WeeklyCampaignPerformance {
  type: "WeeklyCampaignPerformance";
  weekNumber: number;
  kpiTrafficLightDashboard: KPITrafficLightDashboard;
  performanceTrends: PerformanceTrendChart[];
  departmentScorecards: DepartmentScorecard[];
  actionItems: ActionItem[];
}

export interface KPITrafficLightDashboard {
  overallHealthScore: number;
  kpis: DashboardKPI[];
}

export interface DashboardKPI {
  name: string;
  currentValue: number;
  target: number;
  gap: number;
  trafficLight: TrafficLight;
  trendArrow: ThreatDirection;
}

export interface PerformanceTrendChart {
  metricName: string;
  dataPoints: TrendDataPoint[];
  chartType: "line" | "bar";
}

export interface TrendDataPoint {
  date: string;
  value: number;
}

export interface DepartmentScorecard {
  department: string;
  metrics: DepartmentMetric[];
}

export interface DepartmentMetric {
  metricName: string;
  achieved: number;
  target: number;
  status: TrafficLight;
}

export interface ActionItem {
  type: "YELLOW" | "RED";
  kpi: string;
  correctionPlan: string;
  owner: string;
  deadline: string;
  status: "pending" | "implemented" | "escalated";
}

// ==========================================
// REPORTING TECHNOLOGY INTEGRATION
// ==========================================

export interface ReportGenerationSchedule {
  report: ReportType;
  autoGenerationTime: string;
  humanReviewRequired: boolean;
  reviewDuration: string;
}

export interface NLGNarrative {
  generatedText: string;
  confidence: number;
  flaggedForReview: boolean;
}

export interface ExportFormat {
  format: "PDF" | "Dashboard" | "Signal" | "Email" | "PowerPoint";
  reports: ReportType[];
  useCase: string;
}

// ==========================================
// DISTRIBUTION MATRIX
// ==========================================

export interface DistributionEntry {
  report: ReportType;
  campaignDirector: boolean | string;
  cio: boolean | string;
  ppccPresident: boolean | string;
  strategyTeam: boolean | string;
  deptHeads: boolean | string;
  regionalCoords: boolean | string;
  constituencyIncharges: boolean | string;
}

// ==========================================
// PRODUCTION CALENDAR
// ==========================================

export interface ProductionCalendarEntry {
  time: string;
  monday: string | null;
  tuesday: string | null;
  wednesday: string | null;
  thursday: string | null;
  friday: string | null;
  saturday: string | null;
  sunday: string | null;
}

export interface ReportProductionWorkflow {
  report: ReportType;
  steps: ProductionStep[];
}

export interface ProductionStep {
  step: number;
  time: string;
  action: string;
  responsible: string;
}

export interface QualityChecklist {
  report: ReportType;
  checks: string[];
}

// ==========================================
// FORTNIGHTLY & MONTHLY REPORTING TYPES
// Derived from: MP10-predictive-outcomes/reporting/fortnightly-monthly-reporting.md
// ==========================================

export type FortnightlyReportType =
  | "CDD"  // Constituency Deep-Dive
  | "TAR"  // Trend Analysis Report
  | "CSA"  // Competitor Strategy Assessment
  | "VGR"; // Volunteer & Ground Force Review

export type MonthlyReportType =
  | "MSA"  // Monthly Strategic Assessment
  | "FR"   // Financial Review
  | "TR";  // Technology Review

export type ACClassificationType =
  | "Safe-Congress"
  | "Leaning-Congress"
  | "Toss-Up"
  | "Leaning-Away"
  | "Safe-Away";

export type CyclePhase =
  | "Cycle 1" | "Cycle 2" | "Cycle 3" | "Cycle 4"
  | "Cycle 5" | "Cycle 6" | "Cycle 7" | "Cycle 8";

// ==========================================
// AC ROTATION PLAN (8-Cycle Coverage)
// ==========================================

export interface ACRotationEntry {
  cycle: CyclePhase;
  weeks: string;
  acsCovered: number;
  selectionPriority: string;
}

// ==========================================
// CONSTITUENCY DEEP-DIVE (CDD)
// ==========================================

export interface CDDSeatAssessment {
  currentClassification: ACClassificationType;
  classificationHistory: string[];
  projectedVoteShare: {
    congress: number;
    aap: number;
    sad: number;
    bjp: number;
    others: number;
  };
  marginOfVictoryDefeat: number;
  marginTrend: "improving" | "declining" | "stable";
  winProbabilityIndex: number;
  winProbabilityChange: number;
}

export interface CDDDemographicCasteDynamics {
  populationComposition: { group: string; percentage: number }[];
  casteSentimentMatrix: { community: string; sentiment: "positive" | "neutral" | "negative" }[];
  demographicShifts: string[];
  genderSpecificSentiment: string;
}

export interface CDDIssueOwnership {
  issue: string;
  rank: number;
  owningParty: "Congress" | "AAP" | "SAD" | "BJP" | "Others";
  congressPerformance: "strong" | "weak";
}

export interface CDDGroundOperations {
  d2dCoverage: number;
  d2dCoveragePace: "ahead" | "on" | "behind";
  volunteerNetworkStrength: number;
  volunteerQuality: "H" | "M" | "L";
  keyLeadersAlignment: string[];
  campaignInfrastructure: {
    officeStatus: string;
    vehicleAvailability: string;
    materialStock: string;
  };
}

export interface CDDCompetitorDeployment {
  party: "AAP" | "SAD" | "BJP" | "BSP";
  groundStrength: string;
  candidateStrength: string;
  resourceCommitment: string;
  allianceStatus?: string;
}

export interface CDDStrategicActionPlan {
  priorityActions: { action: string; impact: number }[];
  resourceRequirements: string[];
  riskFactors: string[];
  deadline: string;
  owner: string;
}

export interface ConstituencyDeepDive {
  acName: string;
  cycleNumber: number;
  reportDate: string;
  seatAssessment: CDDSeatAssessment;
  demographicCasteDynamics: CDDDemographicCasteDynamics;
  issueOwnershipMap: CDDIssueOwnership[];
  groundOperations: CDDGroundOperations;
  competitorDeployment: CDDCompetitorDeployment[];
  strategicActionPlan: CDDStrategicActionPlan;
}

// ==========================================
// TREND ANALYSIS REPORT (TAR)
// ==========================================

export interface TARSentimentTrend {
  statewideCongressSentiment: number;
  sentimentChange: number;
  regionalBreakdown: {
    region: "Malwa" | "Majha" | "Doaba";
    sentiment: number;
    trend: "up" | "down" | "stable";
  }[];
  demographicTrends: {
    segment: string;
    trend: "improving" | "declining" | "stable";
    change: number;
  }[];
  statisticalSignificance: {
    metric: string;
    pValue: number;
    status: "VERIFIED" | "NOT_YET_SIGNIFICANT";
  }[];
  competitorComparison: {
    party: "AAP" | "SAD" | "BJP";
    sentimentChange: number;
  }[];
}

export interface TARMediaNarrativeTrends {
  shareOfVoiceTrend: { date: string; congress: number; aap: number; sadBjp: number }[];
  narrativePenetration: { theme: string; penetration: number; landing: boolean }[];
  mediaTonalityTrend: { party: string; tonality: number; trend: "up" | "down" | "stable" }[];
  socialMediaEngagement: { platform: string; engagement: number; virality: number }[];
  issueSalienceShift: { issue: string; direction: "rising" | "fading"; change: number }[];
}

export interface TARGroundActivityTrends {
  d2dPace: { householdsPerWeek: number; trendVsPlan: "ahead" | "on" | "behind" };
  volunteerRecruitmentTrend: { recruited: number; retained: number; rate: number };
  eventRallyFrequency: { events: number; attendance: number; trend: "up" | "down" | "stable" };
  groundReportedIssues: { issue: string; mentionCount: number }[];
  regionalActivityHeatMap: { region: string; activity: number }[];
}

export interface TARCompetitorTrendIntelligence {
  party: "AAP" | "SAD" | "BJP" | "BSP";
  activityLevelTrend: "rising" | "stable" | "declining";
  narrativeShift: string;
  groundExpansion: "expanding" | "contracting" | "stable";
  resourceDeploymentTrend: string;
}

export interface TrendAnalysisReport {
  period: { startDate: string; endDate: string };
  executiveSummary: {
    keyTrend: string;
    direction: "up" | "down" | "stable";
    statisticalConfidence: "HIGH" | "MED" | "LOW";
    mostSignificantShift: string;
    campaignTrajectoryImplications: string;
  };
  sentimentTrend: TARSentimentTrend;
  mediaNarrativeTrends: TARMediaNarrativeTrends;
  groundActivityTrends: TARGroundActivityTrends;
  competitorTrendIntelligence: TARCompetitorTrendIntelligence[];
  statisticalAnnex: {
    sampleSizes: { segment: string; size: number }[];
    confidenceIntervals: { metric: string; interval: string }[];
    methodologyNotes: string;
    dataFreshness: { source: string; lastUpdated: string }[];
    limitations: string[];
  };
}

// ==========================================
// COMPETITOR STRATEGY ASSESSMENT (CSA)
// ==========================================

export type StrategicPosture = "Offensive" | "Defensive" | "Holding";

export interface CSAAAPStrategyEvolution {
  strategicPosture: StrategicPosture;
  postureShift: string;
  narrativeStrategy: {
    keyMessages: string[];
    targetDemographics: string[];
    mediaChannels: string[];
  };
  groundStrategy: {
    constituencyPrioritization: string[];
    resourceAllocationPattern: string;
  };
  candidateStrategy: {
    selectionPattern: string;
    casteCalculations: string;
  };
  allianceManeuvers: string;
  vulnerabilityAssessment: { weakness: string; exploitableByCongress: boolean }[];
  twoWeekForecast: { anticipatedMove: string; confidence: "HIGH" | "MED" | "LOW" };
}

export interface CSASADStrategyEvolution {
  strategicPosture: StrategicPosture;
  postureShift: string;
  narrativeStrategy: {
    keyMessages: string[];
    targetDemographics: string[];
    mediaChannels: string[];
  };
  groundStrategy: {
    constituencyPrioritization: string[];
    resourceAllocationPattern: string;
  };
  candidateStrategy: {
    selectionPattern: string;
    casteCalculations: string;
  };
  factionalDynamics: {
    faction: "Badal" | "Sukhbir" | "Splinter";
    alignment: string;
    impact: string;
  }[];
  allianceManeuvers: string;
  vulnerabilityAssessment: { weakness: string; exploitableByCongress: boolean }[];
  twoWeekForecast: { anticipatedMove: string; confidence: "HIGH" | "MED" | "LOW" };
}

export interface CSABJPStrategyEvolution {
  strategicPosture: StrategicPosture;
  postureShift: string;
  narrativeStrategy: {
    keyMessages: string[];
    targetDemographics: string[];
    mediaChannels: string[];
  };
  groundStrategy: {
    constituencyPrioritization: string[];
    resourceAllocationPattern: string;
  };
  candidateStrategy: {
    selectionPattern: string;
    casteCalculations: string;
  };
  centralGovernmentResourceDeployment: string;
  allianceStatus: string;
  vulnerabilityAssessment: { weakness: string; exploitableByCongress: boolean }[];
  twoWeekForecast: { anticipatedMove: string; confidence: "HIGH" | "MED" | "LOW" };
}

export interface CSABSPOthersAssessment {
  bsp: { constituencyFocus: string[]; voteCuttingPotential: string };
  independentCandidates: {
    name: string;
    constituency: string;
    spoilerPotential: "high" | "medium" | "low";
  }[];
  newEntrants: { party: string; status: string }[];
}

export interface CSACrossCompetitiveDynamics {
  interCompetitorDynamics: { attacker: string; target: string; nature: string }[];
  voteSplittingScenarios: { scenario: string; affectedACs: string[]; impact: string }[];
  allianceMarketplace: { potentialAlliance: string; status: "forming" | "fraying" | "stable" }[];
}

export interface CSACongressStrategicResponse {
  offensiveOpportunities: { opportunity: string; impact: number }[];
  defensiveNecessities: { necessity: string; urgency: "high" | "medium" | "low" }[];
  narrativeCounterStrategies: string[];
  priorityConstituenciesForCounterDeployment: string[];
}

export interface CompetitorStrategyAssessment {
  period: { startDate: string; endDate: string };
  aapStrategy: CSAAAPStrategyEvolution;
  sadStrategy: CSASADStrategyEvolution;
  bjpStrategy: CSABJPStrategyEvolution;
  bspOthers: CSABSPOthersAssessment;
  crossCompetitiveDynamics: CSACrossCompetitiveDynamics;
  congressResponse: CSACongressStrategicResponse;
}

// ==========================================
// VOLUNTEER & GROUND FORCE REVIEW (VGR)
// ==========================================

export interface VGRRecruitmentMetrics {
  newVolunteersThisFortnight: number;
  recruitmentTarget: number;
  recruitmentGap: number;
  recruitmentByRegion: {
    region: "Malwa" | "Majha" | "Doaba";
    count: number;
  }[];
  channelEffectiveness: { channel: string; conversionRate: number }[];
  conversionRate: number;
}

export interface VGRRetentionActivation {
  activeVolunteerCount: number;
  totalRegistered: number;
  changeFromLastPeriod: number;
  activationRate: number;
  dropOffRate: number;
  primaryDropOffReasons: string[];
  retentionByTenure: {
    cohort: "0-30 days" | "30-90 days" | "90+ days";
    retentionRate: number;
  }[];
}

export interface VGRPerformanceTrends {
  d2dContactsPerVolunteerPerDay: number;
  trend: "up" | "down" | "stable";
  topPerformingConstituencies: { acName: string; productivity: number }[];
  bottomPerformingConstituencies: { acName: string; rootCause: string }[];
  eventStaffingSufficiencyRate: number;
}

export interface VGRTrainingCapacity {
  sessionsConducted: number;
  volunteersTrained: number;
  skillGaps: string[];
  trainerToVolunteerRatio: { region: string; ratio: number }[];
}

export interface VGRGroundForceDeployment {
  totalDeployed: number;
  acsCovered: number;
  coverageGaps: { acName: string; volunteerCount: number }[];
  recommendedReallocation: { fromAC: string; toAC: string; count: number }[];
}

export interface VolunteerGroundForceReview {
  period: { startDate: string; endDate: string };
  recruitmentMetrics: VGRRecruitmentMetrics;
  retentionActivation: VGRRetentionActivation;
  performanceTrends: VGRPerformanceTrends;
  trainingCapacity: VGRTrainingCapacity;
  groundForceDeployment: VGRGroundForceDeployment;
}

// ==========================================
// MONTHLY STRATEGIC ASSESSMENT (MSA)
// ==========================================

export interface MSAExecutiveSummary {
  campaignHealthScore: number;
  scoreMovement: number;
  seatProjectionHeadline: {
    congress: number;
    range: { low: number; high: number };
  };
  top3StrategicDevelopments: string[];
  top3Risks: string[];
  top3Opportunities: string[];
  keyDecisionsRequired: string[];
}

export interface MSAPoliticalLandscape {
  antiIncumbencyIndex: number;
  voterMoodAssessment: string;
  issueSalienceRanking: { issue: string; rank: number }[];
  issueOwnershipMatrix: { issue: string; owner: string }[];
  congressPositioningEffectiveness: string;
  competitorPositioningShifts: string[];
  narrativeBattleground: string;
  allianceLandscapeUpdate: string;
}

export interface MSARegionalDynamics {
  region: "Malwa" | "Majha" | "Doaba";
  sentiment: number;
  keyIssues: string[];
  competitiveDynamics: string;
}

export interface MSAACClassificationSummary {
  safeCongress: { count: number; acList: string[] };
  leaningCongress: { count: number; acList: string[] };
  tossUp: { count: number; acList: string[] };
  leaningAway: { count: number; acList: string[] };
  safeAway: { count: number; acList: string[] };
  classificationChangesThisMonth: { acName: string; from: string; to: string; reason: string }[];
}

export interface MSATier1ACAssessment {
  acName: string;
  currentStatus: string;
  keyDriver: string;
  recommendedAction: string;
  winProbability: number;
}

export interface MSATier2ACSummary {
  acName: string;
  currentClassification: ACClassificationType;
  trendArrow: "up" | "down" | "stable";
  keyNote: string;
}

export interface MSAPathTo59Analysis {
  currentProjectedSeats: number;
  targetSeats: number;
  seatsNeeded: number;
  sourceACs: { acName: string; winProbability: number }[];
  feasibilityAssessment: string;
}

export interface MSASeatProjectionUpdate {
  statewideProjection: {
    congress: number;
    aap: number;
    sad: number;
    bjp: number;
    others: number;
  };
  projectionModelConfidence: "HIGH" | "MED" | "LOW";
  methodologyNote: string;
}

export interface MSACompetitorDeepDive {
  month: number;
  focusCompetitor: "AAP" | "SAD" | "BJP" | "BSP";
  organizationStrength: { level: string; districtLevel: number; boothLevel: number };
  leadershipAssessment: { strengths: string[]; vulnerabilities: string[]; publicPerception: string };
  financialResources: { estimatedBudget: number; spendingPattern: string };
  groundDeployment: { constituencyPrioritization: string[]; volunteerStrength: number };
  mediaStrategy: { channels: string[]; narratives: string[]; spending: number };
  allianceStrategy: string;
  candidateSelectionStrategy: { pattern: string; casteArithmetic: string };
  swotAnalysis: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  anticipatedEvolution: string;
  congressCounterStrategy: string;
}

export interface MSAKPIDashboard {
  voteShare: { current: number; target: number; gap: number };
  seatProjection: { current: number; target: number; gap: number };
  winnableACs: { count: number; target: number; gap: number };
  competitivePositioningIndex: { value: number; trend: "up" | "down" | "stable" };
}

export interface MSAOperationalKPIDashboard {
  d2dCoverage: { current: number; plan: number; gap: number };
  volunteerCount: { active: number; target: number; gap: number };
  fundraising: { cumulative: number; target: number; gap: number };
  mediaSOV: { current: number; target: number; gap: number };
  socialMediaEngagement: { rate: number; trend: "up" | "down" | "stable" };
}

export interface MSADepartmentScorecard {
  department: string;
  rating: "excellent" | "good" | "satisfactory" | "poor";
  keyMetrics: { metric: string; value: number }[];
}

export interface MSAPredictionModelUpdate {
  predictionAccuracyVsActual: { metric: string; accuracy: number }[];
  modelCalibrationAssessment: string;
  dataQualityScore: number;
  updatedProjections: {
    statewideVoteShare: { estimate: number; confidenceInterval: string };
    regionalVoteShare: { region: string; estimate: number }[];
    seatProjection: { pointEstimate: number; range: { low: number; high: number } };
    scenarioAnalysis: {
      bestCase: number;
      baseCase: number;
      worstCase: number;
    };
  };
  keyModelDrivers: { driver: string; impact: "high" | "medium" | "low" }[];
}

export interface MSARiskRegisterEntry {
  riskId: string;
  description: string;
  probability: "H" | "M" | "L";
  impact: "H" | "M" | "L";
  mitigationStatus: string;
  category: "Political" | "Operational" | "Financial" | "Legal" | "Reputational";
}

export interface MSAEarlyWarningIndicator {
  indicator: string;
  currentValue: number;
  threshold: number;
  status: "normal" | "watch" | "breaching";
  trend: "improving" | "stable" | "deteriorating";
}

export interface MSABlackSwanScenario {
  scenario: string;
  probability: "low" | "medium" | "high";
  impact: string;
  contingencyPlanStatus: string;
}

export interface MSAStrategicRecommendation {
  recommendation: string;
  rationale: string;
  owner: string;
  resourcesNeeded: string;
  expectedImpact: string;
}

export interface MSATacticalAdjustment {
  adjustment: string;
  departmentAffected: string;
  timeline: string;
}

export interface MSAResourceReallocation {
  from: string;
  to: string;
  justification: string;
  budgetIncreaseRequest?: { amount: number; roiProjection: string };
}

export interface MonthlyStrategicAssessment {
  month: string;
  year: number;
  executiveSummary: MSAExecutiveSummary;
  politicalLandscape: MSAPoliticalLandscape;
  regionalDynamics: MSARegionalDynamics[];
  seatProjectionUpdate: MSASeatProjectionUpdate;
  acClassificationSummary: MSAACClassificationSummary;
  tier1ACsAssessment: MSATier1ACAssessment[];
  tier2ACsSummary: MSATier2ACSummary[];
  pathTo59Analysis: MSAPathTo59Analysis;
  competitorDeepDive: MSACompetitorDeepDive;
  kpiDashboard: MSAKPIDashboard;
  operationalKPIDashboard: MSAOperationalKPIDashboard;
  departmentScorecards: MSADepartmentScorecard[];
  monthOverMonthComparison: { kpi: string; current: number; previous: number; change: number }[];
  predictionModelUpdate: MSAPredictionModelUpdate;
  riskRegister: MSARiskRegisterEntry[];
  earlyWarningIndicators: MSAEarlyWarningIndicator[];
  blackSwanScenarios: MSABlackSwanScenario[];
  strategicRecommendations: MSAStrategicRecommendation[];
  tacticalAdjustments: MSATacticalAdjustment[];
  resourceReallocation: MSAResourceReallocation[];
  priorityConstituenciesForNextMonth: {
    intensifiedEffort: string[];
    redeployedFrom: string[];
  };
}

// ==========================================
// FINANCIAL REVIEW (FR)
// ==========================================

export interface FRFinancialSummary {
  totalBudget: number;
  cumulativeSpend: number;
  spendPercentage: number;
  monthlySpendVsPlan: { actual: number; plan: number; variance: number };
  cashPosition: number;
  runwayMonths: number;
  fundraisingThisMonth: { actual: number; target: number; gap: number };
}

export interface FRBudgetVsActual {
  department: string;
  planned: number;
  actual: number;
  variance: number;
}

export interface FRCostPerVoteAnalysis {
  overallCostPerVoterContacted: number;
  costByChannel: { channel: string; cost: number }[];
  costByRegion: { region: string; cost: number }[];
  efficiencyTrend: "improving" | "stable" | "declining";
  benchmarkComparison?: string;
}

export interface FRFundraisingUpdate {
  sources: { source: string; amount: number; percentage: number }[];
  pipeline: { committed: number; received: number };
  projectedNextMonth: number;
  targetsByRemainingMonths: { month: string; target: number }[];
}

export interface FRFinancialRiskAssessment {
  budgetShortfallRisk: string;
  unexpectedExpenditureContingencies: string[];
  regulatoryComplianceStatus: string;
  recommendedReserveLevel: number;
}

export interface FinancialReview {
  month: string;
  financialSummary: FRFinancialSummary;
  budgetVsActual: FRBudgetVsActual[];
  costPerVoteAnalysis: FRCostPerVoteAnalysis;
  fundraisingUpdate: FRFundraisingUpdate;
  financialRiskAssessment: FRFinancialRiskAssessment;
  recommendations: {
    budgetReallocation: { from: string; to: string; justification: string }[];
    costOptimization: string[];
    fundraisingStrategyAdjustment: string[];
  };
}

// ==========================================
// TECHNOLOGY & INFRASTRUCTURE REVIEW (TR)
// ==========================================

export interface TRSystemPerformance {
  dashboardUptime: number;
  slaTarget: number;
  reportGenerationSuccessRate: number;
  dataPipelineHealth: { sourcesOnSchedule: number; totalSources: number };
  mobileAppStability: { crashRate: number; activeUsers: number };
  databasePerformance: { avgQueryResponseMs: number };
}

export interface TRDataQualityAssessment {
  overallScore: number;
  d2dData: { completeness: number; accuracyFlagRate: number };
  surveyData: { latestWaveCompletionRate: number; responseQuality: number };
  mediaMonitoring: { coverageGapIncidents: number };
  volunteerData: { profileCompletionRate: number };
  dataFreshness: { percentageUpdatedLast7Days: number };
}

export interface TRToolEffectiveness {
  analyticsDashboard: { userAdoption: number; targetUsers: number };
  automatedReportGeneration: { deliveredOnTime: number; totalReports: number };
  socialListening: { alertAccuracy: number };
  predictionModel: { inputDataCompleteness: number };
  communicationTools: { signalActivity: number; whatsappGroupActivity: number };
}

export interface TRInfrastructureStatus {
  hardware: { operational: number; total: number };
  network: { connectivityIncidents: number };
  storage: { utilization: number; capacityPlanStatus: string };
  backup: { lastSuccessfulBackup: string; recoveryTestStatus: string };
}

export interface TRSecurityIncident {
  unauthorizedAccessAttempts: number;
  dataBreachIncidents: number;
  breachStatus?: "resolved" | "ongoing";
  phishingAttempts: number;
  securityPatchStatus: "current" | "patches_pending";
}

export interface TechnologyInfrastructureReview {
  month: string;
  systemPerformance: TRSystemPerformance;
  dataQualityAssessment: TRDataQualityAssessment;
  toolEffectiveness: TRToolEffectiveness;
  infrastructureStatus: TRInfrastructureStatus;
  securityIncidents: TRSecurityIncident;
  recommendations: {
    systemImprovements: string[];
    toolUpgrades: string[];
    dataQualityRemediation: string[];
    securityHardening: string[];
  };
}

// ==========================================
// REPORT SCHEDULE & PRODUCTION
// ==========================================

export interface FortnightlyReportSchedule {
  reportType: FortnightlyReportType;
  format: string;
  deliveryDay: "Tuesday" | "Thursday";
  deliveryTime: string;
  audience: string[];
  channel: string;
}

export interface MonthlyReportSchedule {
  reportType: MonthlyReportType;
  format: string;
  deliveryDay: "Monday" | "Wednesday" | "Friday";
  deliveryTime: string;
  audience: string[];
  channel: string;
}

export interface ReportProductionLoad {
  timeframe: "Daily" | "Weekly" | "Fortnightly" | "Monthly";
  reportsProduced: number;
  peakProductionDays: string;
}

export interface ReportFileNaming {
  reportType: FortnightlyReportType | MonthlyReportType;
  code: string;
  examples: string[];
}

// ==========================================
// DISTRIBUTION MATRIX (FORTNIGHTLY & MONTHLY)
// ==========================================

export interface FortnightlyMonthlyDistributionEntry {
  reportType: FortnightlyReportType | MonthlyReportType;
  campaignDirector: boolean;
  cio: boolean;
  ppccPresident: boolean;
  strategyTeam: boolean;
  deptHeads: boolean;
  regionalCoords: boolean;
  constituencyInCharges: boolean;
  financeHead: boolean;
}

// ==========================================
// QUALITY CHECKLIST STATUS
// ==========================================

export interface QualityCheckStatus {
  reportType: FortnightlyReportType | MonthlyReportType;
  checkItems: string[];
  lastVerified?: string;
  status: "compliant" | "partial" | "non_compliant";
}
