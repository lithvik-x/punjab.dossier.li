// Strategic & Operational KPIs Types for Punjab Congress 2027 Election
// Derived from: MP10-predictive-outcomes/kpis/strategic-operational-kpis.md

// ==========================================
// STRATEGIC KPIS
// ==========================================

/**
 * State-Level Win Probability Index
 * Composite probability score (0-100%) that Congress wins 59+ seats
 */
export interface WinProbabilityKPI {
  currentValue: number; // 0-100%
  baseline: string; // VERIFICATION_NEEDED initially
  target: {
    phase2End: number; // 50%+ by end of Phase 2
    phase3End: number; // 70%+ by Phase 3 end
    phase4Entry: number; // 80%+ entering Phase 4 (stretch)
  };
  redFlagThreshold: number; // Below 30% sustained for 3 weeks
  dataSources: string[];
  collectionFrequency: string;
  responsibleTeam: string;
  methodology: string;
  seatBands: SeatBand[];
}

export interface SeatBand {
  range: string;
  label: string;
  probability: number;
}

/**
 * Seat Projection Confidence
 * Range of projected seats with stated confidence interval
 */
export interface SeatProjectionKPI {
  medianSeats: number;
  confidenceInterval: {
    current: number; // seat range width
    phase3Target: number; // <=8 seats
    phase4Target: number; // <=5 seats
    stretchGoal: number; // <=3 seats
  };
  confidenceLevels: ConfidenceLevel[];
  acHeatmap: ACHeatmapEntry[];
  baseline: string;
  redFlagThreshold: {
    intervalWidth: number; // >15 seats
    medianBelow: number; // below 50 seats
  };
  dataSources: string[];
  collectionFrequency: string;
}

export interface ConfidenceLevel {
  ac: string;
  classification: "Safe" | "Leaning" | "Toss-Up" | "Lean Loss" | "Loss";
  confidenceGrade: string;
  projectedSeats: number;
}

export interface ACHeatmapEntry {
  acNumber: number;
  acName: string;
  region: "Malwa" | "Majha" | "Doaba";
  classification: "Safe" | "Leaning" | "Toss-Up" | "Lean Loss" | "Loss";
  congressProbability: number;
}

/**
 * Vote Share Trend
 * Congress vote share trajectory statewide and regional
 */
export interface VoteShareKPI {
  current: number;
  historical: {
    2017: number; // 38.5%
    2022: number; // 23.0%
  };
  regional: RegionalVoteShare[];
  targets: {
    required: number; // 38%+ for 59+ seats
    stretch: number; // 42%+ comfortable majority
  };
  redFlagThreshold: {
    sustainedBelow: number; // 28%
    consecutiveWeeks: number; // 4+ weeks declining
  };
  elasticity: {
    seatsPerPercentagePoint: string; // 2-4 seats
    note: string;
  };
  collectionFrequency: string;
  benchmarkElections: BenchmarkElection[];
}

export interface RegionalVoteShare {
  region: "Malwa" | "Majha" | "Doaba" | "Statewide";
  currentShare: number;
  trend: "up" | "down" | "stable";
  movingAverage4Week: number;
}

export interface BenchmarkElection {
  year: number;
  congressShare: number;
  seats: number;
  note: string;
}

/**
 * Sentiment Trajectory
 * Net sentiment score across social media, news, and ground surveys
 */
export interface SentimentKPI {
  netScore: number; // -100 to +100
  breakdown: SentimentBreakdown;
  regional: RegionalSentiment[];
  topIssues: string[];
  targets: {
    phase3Positive: number; // +20 or above by Phase 3
    stretch: number; // +40 with AAP negative
  };
  redFlagThreshold: {
    negativeFloor: number; // -20 or below
    sustainedWeeks: number; // 2+ weeks
  };
  dataSources: string[];
  collectionFrequency: string;
}

export interface SentimentBreakdown {
  congress: {
    positive: number;
    neutral: number;
    negative: number;
  };
  aap: {
    positive: number;
    neutral: number;
    negative: number;
  };
  sadBjp: {
    positive: number;
    neutral: number;
    negative: number;
  };
}

export interface RegionalSentiment {
  region: string;
  netScore: number;
  trend: "improving" | "declining" | "stable";
}

/**
 * Issue Ownership Index
 * Share of voters who associate Congress as best party for top issues
 */
export interface IssueOwnershipKPI {
  issues: IssueOwnership[];
  targets: {
    leadMinimum: number; // >= 3 of top 5 issues by Phase 3
    stretch: number; // Lead on all top 5
  };
  redFlagThreshold: string; // "Congress does not lead on any top-5 issue"
  collectionFrequency: string;
  methodology: string;
}

export interface IssueOwnership {
  issue: string;
  congressOwnership: number; // percentage
  aapOwnership: number;
  sadBjpOwnership: number;
  othersOwnership: number;
  leader: "Congress" | "AAP" | "SAD-BJP" | "Others";
}

/**
 * Media Share of Voice (SOV)
 * Proportion of Punjab election coverage mentioning Congress vs competitors
 */
export interface MediaSOVKPI {
  current: {
    congress: number;
    aap: number;
    sadBjp: number;
    others: number;
  };
  byChannel: ChannelSOV[];
  targets: {
    parity: number; // >= 30% SOV in Phase 3-4
    stretch: number; // >= 40% SOV
  };
  redFlagThreshold: number; // Below 20% sustained 2+ weeks
  collectionFrequency: string;
  dataSources: string[];
}

export interface ChannelSOV {
  channel: "TV" | "Print" | "Digital" | "Social";
  congress: number;
  aap: number;
  sadBjp: number;
  others: number;
}

/**
 * Competitor Threat Index
 * Composite score measuring threat level from each competitor
 */
export interface CompetitorThreatKPI {
  competitors: CompetitorThreat[];
  targets: {
    maxCriticalRegions: number; // No competitor rated "Critical" in more than 1 region
  };
  redFlagThreshold: {
    criticalRegions: number; // Any competitor rated "Critical" in 2+ regions
    aapConsecutiveWeeks: number; // AAP threat rising 3+ consecutive weeks
  };
  collectionFrequency: string;
}

export interface CompetitorThreat {
  party: "AAP" | "SAD-BJP" | "BSP" | "Independents";
  overallThreat: "Low" | "Medium" | "High" | "Critical";
  byRegion: RegionThreat[];
  momentum: "rising" | "stable" | "declining";
  keyFactors: string[];
}

export interface RegionThreat {
  region: string;
  threat: "Low" | "Medium" | "High" | "Critical";
  voterShiftPattern: string;
  resourceDeployment: string;
}

// ==========================================
// OPERATIONAL KPIS
// ==========================================

/**
 * Volunteer Activation Rate
 * % of registered volunteers who completed campaign activity in past 7 days
 */
export interface VolunteerActivationKPI {
  activatedVolunteers: number;
  totalRegistered: number;
  activationRate: number; // percentage
  byDistrict: DistrictVolunteerData[];
  byRegion: RegionVolunteerData[];
  targets: {
    phase34: number; // >= 70% activation rate in Phase 3-4
  };
  redFlagThreshold: {
    rate: number; // Below 40%
    sustainedWeeks: number; // 2+ weeks
  };
  collectionFrequency: string;
  activitiesTracked: string[];
}

export interface DistrictVolunteerData {
  district: string;
  registered: number;
  activated: number;
  rate: number;
}

export interface RegionVolunteerData {
  region: string;
  totalVolunteers: number;
  activeRate: number;
  trend: "up" | "down" | "stable";
}

/**
 * Door-to-Door (D2D) Coverage Percentage
 * % of target voter households contacted at least once
 */
export interface D2DCoverageKPI {
  overallCoverage: number; // percentage
  byAC: ACoverageData[];
  byRegion: RegionCoverageData[];
  targets: {
    phase3End: number; // 100% of target segments contacted
    pollingEve: number; // 95% second contact
  };
  redFlagThreshold: {
    anyACBelow: number; // Below 50% in any AC
    date: string; // by Jan 15, 2027
  };
  collectionFrequency: string;
  methodology: string;
}

export interface ACoverageData {
  acNumber: number;
  acName: string;
  region: string;
  firstContact: number;
  secondContact: number;
  targetHouseholds: number;
  coveredHouseholds: number;
}

export interface RegionCoverageData {
  region: string;
  avgCoverage: number;
  acsBelow50: number;
}

/**
 * Digital Reach & Engagement
 * Total reach and engagement rate across all platforms
 */
export interface DigitalReachKPI {
  weeklyReach: number;
  reachTarget: number; // 50 lakh+ by Phase 3
  engagementRate: number;
  byPlatform: PlatformMetrics[];
  contentPerformance: ContentPerformance[];
  targets: {
    reach: {
      phase3: number; // 50 lakh+ weekly
      stretch: number;
    };
    engagement: {
      minimum: number; // >= 5%
      redFlag: number; // Below 2%
    };
  };
  redFlagThreshold: {
    reachDecliningWeeks: number; // 3+ consecutive weeks
    engagementRate: number; // below 2%
  };
  collectionFrequency: string;
  platforms: string[];
}

export interface PlatformMetrics {
  platform: "Meta" | "YouTube" | "Twitter/X" | "WhatsApp" | "Instagram" | "Facebook";
  weeklyReach: number;
  engagement: number;
  engagementRate: number;
  topContentType: string;
}

export interface ContentPerformance {
  contentId: string;
  type: string;
  reach: number;
  engagement: number;
  engagementRate: number;
  topPerforming: boolean;
}

/**
 * Survey Completion Rate & Quality
 * % of planned interviews completed; quality score
 */
export interface SurveyQualityKPI {
  completionRate: number;
  qualityScore: number;
  plannedInterviews: number;
  completedInterviews: number;
  qualityFlags: QualityFlag[];
  targets: {
    completion: number; // >= 90%
    quality: number; // >= 85%
  };
  redFlagThreshold: {
    completion: number; // Below 70%
    quality: number; // Below 70%
  };
  collectionFrequency: string;
  dataSources: string[];
}

export interface QualityFlag {
  type: "completion" | "response_consistency" | "demographic_representativeness";
  severity: "low" | "medium" | "high";
  affectedInterviews: number;
  resolution: string;
}

/**
 * Content Production Throughput
 * Volume of campaign content produced and turnaround time
 */
export interface ContentThroughputKPI {
  weeklyProduction: number;
  byType: ContentTypeProduction[];
  pipeline: PipelineStatus;
  averageTurnaroundHours: number;
  targets: {
    phase2: number; // 50+ pieces/week
    phase3: number; // 100+/week
    turnaroundHours: number; // < 48 hours
  };
  redFlagThreshold: {
    backlog: number; // Backlog >20 unpublished
    turnaroundHours: number; // >72 hours
  };
  collectionFrequency: string;
}

export interface ContentTypeProduction {
  type: "videos" | "graphics" | "press_releases" | "social_posts" | "ad_creatives";
  count: number;
  avgTurnaroundHours: number;
}

export interface PipelineStatus {
  briefed: number;
  inProduction: number;
  published: number;
  backlog: number;
}

/**
 * Crisis Response Time
 * Time from crisis event detection to official response
 */
export interface CrisisResponseKPI {
  incidents: CrisisIncident[];
  averageResponseTime: {
    highSeverity: number; // hours
    mediumSeverity: number; // hours
    lowSeverity: number; // hours
  };
  targets: {
    highSeverity: number; // <= 2 hours
    mediumSeverity: number; // <= 6 hours
    lowSeverity: number; // <= 24 hours
  };
  redFlagThreshold: {
    highSeverity: number; // > 4 hours
  };
  collectionFrequency: string;
  severityCategories: string[];
}

export interface CrisisIncident {
  id: string;
  type: "negative_story" | "opposition_attack" | "candidate_controversy" | "polling_irregularity";
  severity: "high" | "medium" | "low";
  detectionTime: Date;
  responseTime: Date;
  responseDurationHours: number;
  resolution: string;
}

// ==========================================
// KPI FRAMEWORK & INTERDEPENDENCIES
// ==========================================

/**
 * KPI Interdependency Mapping
 * Leading, coincident, and lagging indicators
 */
export interface KPIInterdependency {
  type: "leading" | "coincident" | "lagging";
  kpis: string[];
  signal: string;
}

export interface KPICorrelationPair {
  inputKPI: string;
  outputKPI: string;
  relationship: string;
  expectedImpact: string;
}

/**
 * Target-Setting Framework
 */
export interface KPITargetTier {
  tier: "target" | "stretch" | "red_flag";
  definition: string;
  usage: string;
}

export interface KPICalibration {
  historicalBaseline: {
    "2022Seats": number;
    "2022VoteShare": number;
    "2017Seats": number;
    "2017VoteShare": number;
  };
  seatVoteRequirement: {
    targetSeats: number;
    requiredVoteShare: string; // 36-40%
    elasticity: string; // 2-4 seats per 1%
  };
  recalibrationSchedule: RecalibrationPoint[];
}

export interface RecalibrationPoint {
  phase: string;
  timeline: string;
  trigger: string;
}

/**
 * Dashboard Integration
 */
export interface DashboardKPIMapping {
  module: string;
  strategicKPIs: string[];
  operationalKPIs: string[];
}

export interface AlertConfiguration {
  kpi: string;
  states: ("green" | "amber" | "red")[];
  amberAction: string;
  redAction: string;
  correlationAlert: string;
  phaseGateThreshold: number;
}

/**
 * KPI Measurement Methodology
 */
export interface KPIMeasurementEntry {
  kpi: string;
  primaryDataSource: string;
  collectionMethod: string;
  frequency: string;
  responsibleTeam: string;
}

// ==========================================
// PHASE-WISE TARGETS
// ==========================================

export interface PhaseWiseTargets {
  phase1: PhaseTargets; // August 2026
  phase2: PhaseTargets; // November 2026
  phase3: PhaseTargets; // January 2027
  phase4: PhaseTargets; // Polling sprint
}

export interface PhaseTargets {
  winProbability: number;
  seatProjectionInterval: number;
  voteShareTarget: number;
  sentimentTarget: number;
  issueOwnershipTarget: number;
  mediaSOVTarget: number;
  volunteerActivation: number;
  d2dCoverage: number;
  digitalReach: string;
  engagementRate: number;
  surveyCompletion: number;
  surveyQuality: number;
  contentProduction: number;
  crisisResponseHigh: number;
  crisisResponseMedium: number;
  crisisResponseLow: number;
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type KPICategory = "strategic" | "operational";

export type KPIClassification =
  | "win_probability"
  | "seat_projection"
  | "vote_share"
  | "sentiment"
  | "issue_ownership"
  | "media_sov"
  | "competitor_threat"
  | "volunteer_activation"
  | "d2d_coverage"
  | "digital_reach"
  | "survey_quality"
  | "content_throughput"
  | "crisis_response";

export type AlertState = "green" | "amber" | "red";

export type ThreatLevel = "Low" | "Medium" | "High" | "Critical";

export type ACClassification = "Safe" | "Leaning" | "Toss-Up" | "Lean Loss" | "Loss";

export type Region = "Malwa" | "Majha" | "Doaba" | "Statewide";

export type Competitor = "AAP" | "SAD-BJP" | "BSP" | "Independents";

export const TOP_5_ISSUES = [
  "drugs",
  "unemployment",
  "farmer_distress",
  "governance",
  "education"
] as const;

export type TopIssue = typeof TOP_5_ISSUES[number];

export const SEAT_TARGETS = {
  MAJORITY: 59,
  COMFORTABLE: 70,
  ABSOLUTE: 75,
} as const;

export const VOTE_SHARE_THRESHOLDS = {
  MINIMUM_FOR_59: 36,
  TARGET_FOR_59: 38,
  STRETCH_FOR_70: 42,
  RED_FLAG: 28,
} as const;

export const ELASTICITY_FACTORS = {
  SEATS_PER_PERCENT: "2-4",
  "2017_RESULT": { seats: 77, voteShare: 38.5 },
  "2022_RESULT": { seats: 18, voteShare: 23.0 },
} as const;

// ==========================================
// CASTE DYNAMICS TYPES (from research-M2/MP1-foundational/demographics/caste-dynamics.md)
// ==========================================

/**
 * Caste Organizations and their political characteristics
 */
export interface CasteOrganization {
  name: string;
  type: "jat_sikh" | "dalit_sc" | "obc" | "hindu_upper" | "dera";
  nature: string;
  politicalAlignment: string[];
  keyMechanism?: string;
  concentration?: string;
  population?: string;
  notes: string;
}

/**
 * Regional dominant caste patterns
 */
export interface RegionalCastePattern {
  region: "Malwa" | "Majha" | "Doaba";
  seats: number;
  dominantCaste: string;
  keyDynamic: string;
  scConcentration?: string;
}

/**
 * Winning coalition arithmetic
 */
export interface CasteGroupPopulation {
  group: string;
  populationPercent: number;
  politicalBehavior: string;
}

export interface CoalitionRequirement {
  target: string;
  requirement: string;
  strategy: string;
}

/**
 * Caste-wise voting patterns from 2022/2024 elections
 */
export interface CasteVotePattern {
  election: "2022" | "2024" | "Dec2025";
  party: string;
  casteGroup: string;
  seatsWon?: number;
  voteShare?: number;
  seatsWonReserved?: number;
  totalReserved?: number;
  note: string;
}

/**
 * Dera political influence
 */
export interface DeraInfluence {
  name: string;
  location: string;
  primaryFollowers: string;
  electoralImpact: "HIGH" | "VERY HIGH" | "MODERATE" | "LOW";
  visitedBy?: string[];
  politicalReach?: string;
  note?: string;
}

/**
 * Key political leaders with cross-caste appeal
 */
export interface CrossCasteLeader {
  name: string;
  party: string;
  casteBackground: string;
  role: string;
  crossCasteAcceptability: string;
  note: string;
}

/**
 * Caste tension incidents
 */
export interface CasteTensionIncident {
  date: string;
  location: string;
  description: string;
  type: "inter_caste_marriage" | "land_rights" | "social_boycott" | "discrimination";
}

/**
 * Strategic implications for Congress
 */
export interface CongressStrategyImplication {
  priority: number;
  targetGroup: string;
  populationPercent: number;
  targetSeats?: string;
  keyActions: string[];
  antiCoalitionIntelligence?: string;
}

/**
 * Data point metric for display
 */
export interface CasteDataPoint {
  metric: string;
  value: string;
  source: string;
  date: string;
}

// Caste Dynamics KPI Data Interface
export interface CasteDynamicsKPI {
  populationArithmetic: CasteGroupPopulation[];
  regionalPatterns: RegionalCastePattern[];
  reservedSeats: {
    total: number;
    scReserved: number;
    congressWon2022: number;
    aapWon2022: number;
  };
  interCasteMarriageRate: {
    punjab: number;
    nationalAverage: number;
    ranking: string;
  };
  bjpVoteShare: {
    2022: number;
    2024: number;
    increase: number;
  };
  deraInfluence: DeraInfluence[];
  crossCasteLeaders: CrossCasteLeader[];
  casteTensionIncidents: CasteTensionIncident[];
  strategicImplications: CongressStrategyImplication[];
  dataPoints: CasteDataPoint[];
  gaps: string[];
}
