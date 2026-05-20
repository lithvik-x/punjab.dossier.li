// @ts-nocheck
// KPI Data Structures for Punjab Congress 2027 Election Dashboard
// Derived from: MP10-predictive-outcomes/kpis/strategic-operational-kpis.md

import type {
  WinProbabilityKPI,
  SeatProjectionKPI,
  VoteShareKPI,
  SentimentKPI,
  IssueOwnershipKPI,
  MediaSOVKPI,
  CompetitorThreatKPI,
  VolunteerActivationKPI,
  D2DCoverageKPI,
  DigitalReachKPI,
  SurveyQualityKPI,
  ContentThroughputKPI,
  CrisisResponseKPI,
  PhaseWiseTargets,
  KPIMeasurementEntry,
  AlertConfiguration,
} from "@/types/kpi-types";
import type {
  DeraProfile,
  LocalDera,
  DeraIntelligenceReport,
  HighInfluenceConstituency,
  MediumInfluenceConstituency,
  DeraDisposition,
  DeraConstituencyInfluence,
  CongressDeraRecommendations,
  InfluenceLevel,
} from "@/types/dera-types";
import type {
  JatSikhIntelligenceReport,
  JatSikhClan,
  RegionalJatDistribution,
  DistrictConcentration,
  LandholdingStratum,
  RegionalLandholding,
  AgriculturalDebtIndicator,
  EconomicStressDriver,
  OBCDemandStatus,
  PartyAlignmentPeriod,
  JatSikhSentimentIndicator,
  ConstituencyCluster,
  CongressStrategyPoint,
} from "@/types/jat-sikh-types";
import type {
  OBCIntelligenceReport,
  OBCCommunity,
  ArtisanCommunity,
  OBCPoliticalRepresentation,
  RegionalOBCDistribution,
  OBCStrategyRecommendation,
  OBCReservationFramework,
  JatSikhOBCDemand,
  OBCDataGap,
} from "@/types/obc-communities-types";
import type {
  CorruptionScandalsReport,
  CorruptionCase,
  CorruptionCasesSummary,
  SandMiningCorruption,
  SectorCorruption,
  CAGFinancials,
  VigilanceBureauRaid,
  CorruptionKeyStats,
} from "@/types/corruption-scandals-types";
import type {
  AAPCompetitor,
  SADCompetitor,
  BJPCompetitor,
  BSPCompetitor,
  PollData,
  SentimentTrend,
  IssueOwnership,
  GovernanceRecord,
  WelfareScheme,
  CompetitorWeakness,
  VoterBaseSegment,
  SWOTAnalysis,
  AAPStrategy,
  SADCurrentStatus,
  SADFaction,
  DeclineData,
  SADLeadership,
  AllianceStatus,
  BJPCurrentStatus,
  GrowthData,
  BJPStrategy,
  VoterTargeting,
  BJPLeadership,
  DefectorLeader,
  BSPStatus,
} from "@/types/competitor-intelligence-types";
import type {
  PollEntry,
  PollTrend,
  ViralContent,
  TrendingTopic,
  OpinionLeader,
  SegmentSentiment,
  IssuePriority,
  MediaOutlet,
  MediaStrategy,
  CrisisResponseProtocol as SentimentCrisisProtocol,
  SentimentKPI as PublicSentimentKPI,
  ViralContentStrategy,
  PartySentimentBreakdown,
  PublicSentimentSummary,
} from "@/types/public-sentiment-types";
import type {
  PunjabDemographics,
  ReligiousComposition,
  CasteDemographics,
  RegionalSegment,
  VoterPersona,
  SwingVoterCategory,
  IssueTargeting,
  CongressCoalitionTarget,
  BJPTargetSegment,
  MicroTargeting,
  NRIVoterData,
  VoterRegistrationMetrics,
  BoothLevelData,
  VoterContactStrategy,
  VoterOutreachPriority,
} from "@/types/voter-intelligence-types";
import type {
  AAPPerformanceScorecard,
  GovernanceGap,
  SectorGap,
  FailedPromiseCase,
  CorruptionAllegation,
  MLAPerformanceIssue,
  PerceptionMetrics,
  ORMMetric,
  NarrativeStrategy,
  MediaPerceptionFramework,
  MediaPerceptionMetrics,
  CrisisResponseProtocol,
  PerceptionCorrectionStep,
  CongressPositioning,
  Differentiator,
  ImageRestorationStrategy,
} from "@/types/governance-gap-types";

// ==========================================
// STRATEGIC KPI DATA
// ==========================================

/**
 * State-Level Win Probability Index
 * Composite probability score that Congress wins 59+ seats
 */
export const winProbabilityData: WinProbabilityKPI = {
  currentValue: 0, // VERIFICATION_NEEDED - requires baseline survey
  baseline: "VERIFICATION_NEEDED",
  target: {
    phase2End: 50, // 50%+ by end of Phase 2
    phase3End: 70, // 70%+ by Phase 3 end
    phase4Entry: 80, // 80%+ entering Phase 4 (stretch)
  },
  redFlagThreshold: 30, // Below 30% sustained for 3 weeks
  dataSources: [
    "Tracking surveys (2,000-3,000/week)",
    "Historical seat-vote share elasticity",
    "Candidate winnability scores",
    "Turnout models",
  ],
  collectionFrequency: "Weekly recalculation during Phase 2-3; daily during Phase 4",
  responsibleTeam: "Data & Analytics Head + Survey Vendor",
  methodology: "Monte Carlo simulation with 10,000 scenarios",
  seatBands: [
    { range: "0-30", label: "Very Low", probability: 0 },
    { range: "30-50", label: "Low", probability: 0 },
    { range: "50-59", label: "Possible Majority", probability: 0 },
    { range: "59-70", label: "Probable Majority", probability: 0 },
    { range: "70+", label: "Comfortable Majority", probability: 0 },
  ],
};

/**
 * Seat Projection Confidence
 * Range of projected seats with stated confidence interval
 */
export const seatProjectionData: SeatProjectionKPI = {
  medianSeats: 0, // VERIFICATION_NEEDED - requires AC-level baseline survey
  confidenceInterval: {
    current: 0,
    phase3Target: 8, // <=8 seats
    phase4Target: 5, // <=5 seats
    stretchGoal: 3, // <=3 seats
  },
  confidenceLevels: [], // 117 ACs with Safe/Leaning/Toss-Up/Lean Loss/Loss classification
  acHeatmap: [], // 117 ACs with heatmap data
  baseline: "VERIFICATION_NEEDED",
  redFlagThreshold: {
    intervalWidth: 15, // >15 seats
    medianBelow: 50,
  },
  dataSources: [
    "AC-level survey crosstabs",
    "Past election results",
    "Caste arithmetic models",
    "Candidate strength ratings",
  ],
  collectionFrequency: "Updated every 2 weeks in Phase 2; weekly in Phase 3; twice weekly in Phase 4",
};

/**
 * Vote Share Trend
 * Congress vote share trajectory statewide and regional
 */
export const voteShareData: VoteShareKPI = {
  current: 23.0, // 2022 result as baseline
  historical: {
    2017: 38.5,
    2022: 23.0,
  },
  regional: [
    { region: "Malwa", currentShare: 0, trend: "stable", movingAverage4Week: 0 },
    { region: "Majha", currentShare: 0, trend: "stable", movingAverage4Week: 0 },
    { region: "Doaba", currentShare: 0, trend: "stable", movingAverage4Week: 0 },
    { region: "Statewide", currentShare: 23.0, trend: "stable", movingAverage4Week: 23.0 },
  ],
  targets: {
    required: 38, // 38%+ for 59+ seats
    stretch: 42, // 42%+ comfortable majority
  },
  redFlagThreshold: {
    sustainedBelow: 28,
    consecutiveWeeks: 4,
  },
  elasticity: {
    seatsPerPercentagePoint: "2-4",
    note: "In Punjab's multi-party landscape, 1% vote share swing can translate to 2-4 seats",
  },
  collectionFrequency: "Weekly",
  benchmarkElections: [
    { year: 2017, congressShare: 38.5, seats: 77, note: "Congress victory" },
    { year: 2022, congressShare: 23.0, seats: 18, note: "Congress collapse" },
  ],
};

/**
 * Sentiment Trajectory
 * Net sentiment score across social media, news, and ground surveys
 */
export const sentimentData: SentimentKPI = {
  netScore: 0, // VERIFICATION_NEEDED - requires social listening baseline
  breakdown: {
    congress: { positive: 0, neutral: 0, negative: 0 },
    aap: { positive: 0, neutral: 0, negative: 0 },
    sadBjp: { positive: 0, neutral: 0, negative: 0 },
  },
  regional: [
    { region: "Malwa", netScore: 0, trend: "stable" },
    { region: "Majha", netScore: 0, trend: "stable" },
    { region: "Doaba", netScore: 0, trend: "stable" },
  ],
  topIssues: ["drugs", "unemployment", "farmer_distress", "governance", "education"],
  targets: {
    phase3Positive: 20, // +20 or above by Phase 3
    stretch: 40, // +40 with AAP negative
  },
  redFlagThreshold: {
    negativeFloor: -20,
    sustainedWeeks: 2,
  },
  dataSources: [
    "Social listening tools (Twitter/X, Facebook, YouTube)",
    "Media monitoring",
    "Survey open-ended responses",
  ],
  collectionFrequency: "Daily automated scan; weekly manual deep-dive",
};

// ==========================================
// ISSUE SALIENCE DATA
// Derived from: direct-documentation/cat-1-demography/b5-voter-segmentation-behavioral-demography.md
// 2022 Punjab Assembly Election Issue Hierarchy
// ==========================================

export interface IssueSalience {
  rank: number;
  issue: string;
  saliencePercent: number;
  regionalVariation: "Malwa > Majha > Doaba" | "Urban > Rural" | "Doaba > Malwa" | "Malwa > Doaba" | "Urban > Rural" | string;
  partyBenefit: string;
  notes: string;
}

export const issueSalienceData: IssueSalience[] = [
  {
    rank: 1,
    issue: "Drug Abuse",
    saliencePercent: 62,
    regionalVariation: "Malwa > Majha > Doaba",
    partyBenefit: "AAP (claimed), Congress (claimed)",
    notes: "Single most potent issue in Malwa and Doaba. 13-15 year-olds dying of drug addiction. Village elders report widespread availability despite enforcement.",
  },
  {
    rank: 2,
    issue: "Corruption",
    saliencePercent: 55,
    regionalVariation: "Urban > Rural",
    partyBenefit: "AAP (strong)",
    notes: "Jan Lokpal never introduced. Two cabinet ministers resigned over corruption. Vigilance Bureau chief suspended then reinstated.",
  },
  {
    rank: 3,
    issue: "Unemployment",
    saliencePercent: 50,
    regionalVariation: "Doaba > Malwa",
    partyBenefit: "AAP, Congress",
    notes: "Youth unemployment at 14.9% (Oct-Dec 2024 PLFS data) - 4th highest in India. 38% of USA-deported illegal immigrants from Punjab.",
  },
  {
    rank: 4,
    issue: "Agriculture/Farmers",
    saliencePercent: 45,
    regionalVariation: "Malwa > Doaba",
    partyBenefit: "Congress (farmer union link)",
    notes: "Farmers continue protests at Khanauri border demanding MSP guarantee. Sugarcane and cotton belts in crisis. Groundwater depletion in 82% of blocks.",
  },
  {
    rank: 5,
    issue: "Law & Order",
    saliencePercent: 35,
    regionalVariation: "Urban > Rural",
    partyBenefit: "Mixed",
    notes: "24 grenade attacks on police since Sept 2024. High-profile murders. Businessmen shot. Politicians attacked.",
  },
  {
    rank: 6,
    issue: "Water Crisis",
    saliencePercent: 30,
    regionalVariation: "Malwa (central)",
    partyBenefit: "Congress",
    notes: "Groundwater depletion SYL issues. May escalate by 2027.",
  },
];

// 2027 Issue Projections
export const issueProjection2027 = {
  drugAbuse: {
    projection: "Remains #1",
    likelihood: "High",
    notes: "Likely intensifies given 5 more years of AAP governance without resolution",
  },
  waterCrisis: {
    projection: "May escalate",
    likelihood: "Medium-High",
    notes: "SYL canal politics could become dominant issue",
  },
  agriculturalDistress: {
    projection: "MSP guarantee debates",
    likelihood: "High",
    notes: "Stubble management, farmer debt",
  },
  youthUnemployment: {
    projection: "Returns from out-migration",
    likelihood: "High",
    notes: "Deportation data creates urgency",
  },
};

/**
 * Issue Ownership Index
 * Share of voters who associate Congress as best party for top issues
 * Data sourced from: direct-documentation/cat-1-demography/b5-voter-segmentation-behavioral-demography.md
 * Issue salience from 2022 Punjab Assembly Election
 */
export const issueOwnershipData: IssueOwnershipKPI = {
  issues: [
    {
      issue: "drugs",
      congressOwnership: 0, // VERIFICATION_NEEDED - requires survey
      aapOwnership: 0,
      sadBjpOwnership: 0,
      othersOwnership: 0,
      leader: "Others",
    },
    {
      issue: "unemployment",
      congressOwnership: 0,
      aapOwnership: 0,
      sadBjpOwnership: 0,
      othersOwnership: 0,
      leader: "Others",
    },
    {
      issue: "farmer_distress",
      congressOwnership: 0,
      aapOwnership: 0,
      sadBjpOwnership: 0,
      othersOwnership: 0,
      leader: "Others",
    },
    {
      issue: "governance",
      congressOwnership: 0,
      aapOwnership: 0,
      sadBjpOwnership: 0,
      othersOwnership: 0,
      leader: "Others",
    },
    {
      issue: "education",
      congressOwnership: 0,
      aapOwnership: 0,
      sadBjpOwnership: 0,
      othersOwnership: 0,
      leader: "Others",
    },
  ],
  targets: {
    leadMinimum: 3, // >= 3 of top 5 issues by Phase 3
    stretch: 5, // Lead on all top 5
  },
  redFlagThreshold: "Congress does not lead on any top-5 issue",
  collectionFrequency: "Bi-weekly in Phase 2-3; weekly in Phase 4",
  methodology: "Issue-specific survey questions; forced-choice question on top issues",
};

/**
 * Media Share of Voice (SOV)
 * Proportion of Punjab election coverage mentioning Congress vs competitors
 */
export const mediaSOVData: MediaSOVKPI = {
  current: {
    congress: 0, // VERIFICATION_NEEDED
    aap: 0,
    sadBjp: 0,
    others: 0,
  },
  byChannel: [
    { channel: "TV", congress: 0, aap: 0, sadBjp: 0, others: 0 },
    { channel: "Print", congress: 0, aap: 0, sadBjp: 0, others: 0 },
    { channel: "Digital", congress: 0, aap: 0, sadBjp: 0, others: 0 },
    { channel: "Social", congress: 0, aap: 0, sadBjp: 0, others: 0 },
  ],
  targets: {
    parity: 30, // >= 30% SOV in Phase 3-4
    stretch: 40, // >= 40% SOV
  },
  redFlagThreshold: 20, // Below 20% sustained 2+ weeks
  collectionFrequency: "Weekly aggregate; daily during Phase 4",
  dataSources: ["Media monitoring service (TV clipping, print scan, digital crawl)"],
};

/**
 * Competitor Threat Index
 * Composite score measuring threat level from each competitor
 */
export const competitorThreatData: CompetitorThreatKPI = {
  competitors: [
    {
      party: "AAP",
      overallThreat: "Critical",
      byRegion: [
        { region: "Malwa", threat: "Critical", voterShiftPattern: "Jat Sikh shift", resourceDeployment: "High" },
        { region: "Majha", threat: "High", voterShiftPattern: "Mixed shift", resourceDeployment: "Medium" },
        { region: "Doaba", threat: "High", voterShiftPattern: "SC voter shift", resourceDeployment: "Medium" },
      ],
      momentum: "rising",
      keyFactors: ["Incumbent advantage", "Local governance narrative", "SC voter outreach"],
    },
    {
      party: "SAD-BJP",
      overallThreat: "Medium",
      byRegion: [
        { region: "Malwa", threat: "Medium", voterShiftPattern: "Traditional base erosion", resourceDeployment: "Low" },
        { region: "Majha", threat: "Medium", voterShiftPattern: "Tarn Taran swing", resourceDeployment: "Low" },
        { region: "Doaba", threat: "Low", voterShiftPattern: "Minimal presence", resourceDeployment: "Very Low" },
      ],
      momentum: "declining",
      keyFactors: ["BJP solo decision", "Farm laws resentment", "Leadership vacuum"],
    },
    {
      party: "BSP",
      overallThreat: "Low",
      byRegion: [
        { region: "Malwa", threat: "Low", voterShiftPattern: "SC vote consolidation", resourceDeployment: "Minimal" },
        { region: "Majha", threat: "Low", voterShiftPattern: "Minor impact", resourceDeployment: "Minimal" },
        { region: "Doaba", threat: "Low", voterShiftPattern: "Ravidassia vote", resourceDeployment: "Minimal" },
      ],
      momentum: "stable",
      keyFactors: ["SC vote bank", "Possible tie-ups", "Limited resources"],
    },
    {
      party: "Independents",
      overallThreat: "Low",
      byRegion: [
        { region: "Malwa", threat: "Low", voterShiftPattern: "Local strongmen", resourceDeployment: "Personal" },
        { region: "Majha", threat: "Low", voterShiftPattern: "Border area", resourceDeployment: "Personal" },
        { region: "Doaba", threat: "Low", voterShiftPattern: "Dera influence", resourceDeployment: "Social capital" },
      ],
      momentum: "stable",
      keyFactors: ["Dera declarations", "Local票 influence", "Caste leaders"],
    },
  ],
  targets: {
    maxCriticalRegions: 1, // No competitor rated "Critical" in more than 1 region
  },
  redFlagThreshold: {
    criticalRegions: 2, // Any competitor rated "Critical" in 2+ regions
    aapConsecutiveWeeks: 3, // AAP threat rising 3+ consecutive weeks
  },
  collectionFrequency: "Weekly",
};

// ==========================================
// OPERATIONAL KPI DATA
// ==========================================

/**
 * Volunteer Activation Rate
 * % of registered volunteers who completed campaign activity in past 7 days
 */
export const volunteerActivationData: VolunteerActivationKPI = {
  activatedVolunteers: 0,
  totalRegistered: 0,
  activationRate: 0,
  byDistrict: [],
  byRegion: [
    { region: "Malwa", totalVolunteers: 0, activeRate: 0, trend: "stable" },
    { region: "Majha", totalVolunteers: 0, activeRate: 0, trend: "stable" },
    { region: "Doaba", totalVolunteers: 0, activeRate: 0, trend: "stable" },
  ],
  targets: {
    phase34: 70, // >= 70% activation rate in Phase 3-4
  },
  redFlagThreshold: {
    rate: 40, // Below 40%
    sustainedWeeks: 2,
  },
  collectionFrequency: "Weekly",
  activitiesTracked: ["canvassing", "phone banking", "social sharing", "rally participation"],
};

/**
 * Door-to-Door (D2D) Coverage Percentage
 * % of target voter households contacted at least once
 */
export const d2dCoverageData: D2DCoverageKPI = {
  overallCoverage: 0,
  byAC: [],
  byRegion: [
    { region: "Malwa", avgCoverage: 0, acsBelow50: 0 },
    { region: "Majha", avgCoverage: 0, acsBelow50: 0 },
    { region: "Doaba", avgCoverage: 0, acsBelow50: 0 },
  ],
  targets: {
    phase3End: 100, // 100% of target segments contacted
    pollingEve: 95, // 95% second contact
  },
  redFlagThreshold: {
    anyACBelow: 50, // Below 50% in any AC
    date: "Jan 15, 2027",
  },
  collectionFrequency: "Weekly aggregate; daily in Phase 4",
  methodology: "GPS + contact logs from canvasser app",
};

/**
 * Digital Reach & Engagement
 * Total reach and engagement rate across all platforms
 */
export const digitalReachData: DigitalReachKPI = {
  weeklyReach: 0,
  reachTarget: 500000, // 50 lakh+ by Phase 3
  engagementRate: 0,
  byPlatform: [
    {
      platform: "Meta",
      weeklyReach: 0,
      engagement: 0,
      engagementRate: 0,
      topContentType: "Video",
    },
    {
      platform: "YouTube",
      weeklyReach: 0,
      engagement: 0,
      engagementRate: 0,
      topContentType: "Long-form video",
    },
    {
      platform: "Twitter/X",
      weeklyReach: 0,
      engagement: 0,
      engagementRate: 0,
      topContentType: "Text posts",
    },
    {
      platform: "WhatsApp",
      weeklyReach: 0,
      engagement: 0,
      engagementRate: 0,
      topContentType: "Forwarded content",
    },
    {
      platform: "Instagram",
      weeklyReach: 0,
      engagement: 0,
      engagementRate: 0,
      topContentType: "Stories/Reels",
    },
    {
      platform: "Facebook",
      weeklyReach: 0,
      engagement: 0,
      engagementRate: 0,
      topContentType: "Event promotion",
    },
  ],
  contentPerformance: [],
  targets: {
    reach: {
      phase3: 500000, // 50 lakh+ weekly
      stretch: 750000, // 75 lakh+ stretch
    },
    engagement: {
      minimum: 5, // >= 5%
      redFlag: 2, // Below 2%
    },
  },
  redFlagThreshold: {
    reachDecliningWeeks: 3, // 3+ consecutive weeks
    engagementRate: 2, // below 2%
  },
  collectionFrequency: "Daily metrics; weekly deep-dive",
  platforms: ["Meta Business Suite", "YouTube Analytics", "Twitter/X Analytics", "WhatsApp forwarding metrics"],
};

/**
 * Survey Completion Rate & Quality
 * % of planned interviews completed; quality score
 */
export const surveyQualityData: SurveyQualityKPI = {
  completionRate: 0,
  qualityScore: 0,
  plannedInterviews: 0,
  completedInterviews: 0,
  qualityFlags: [],
  targets: {
    completion: 90, // >= 90%
    quality: 85, // >= 85%
  },
  redFlagThreshold: {
    completion: 70, // Below 70%
    quality: 70, // Below 70%
  },
  collectionFrequency: "Weekly during active survey periods",
  dataSources: ["Survey vendor dashboard", "Quality audit reports"],
};

/**
 * Content Production Throughput
 * Volume of campaign content produced and turnaround time
 */
export const contentThroughputData: ContentThroughputKPI = {
  weeklyProduction: 0,
  byType: [
    { type: "videos", count: 0, avgTurnaroundHours: 0 },
    { type: "graphics", count: 0, avgTurnaroundHours: 0 },
    { type: "press_releases", count: 0, avgTurnaroundHours: 0 },
    { type: "social_posts", count: 0, avgTurnaroundHours: 0 },
    { type: "ad_creatives", count: 0, avgTurnaroundHours: 0 },
  ],
  pipeline: {
    briefed: 0,
    inProduction: 0,
    published: 0,
    backlog: 0,
  },
  averageTurnaroundHours: 0,
  targets: {
    phase2: 50, // 50+ pieces/week
    phase3: 100, // 100+/week
    turnaroundHours: 48, // < 48 hours
  },
  redFlagThreshold: {
    backlog: 20, // >20 unpublished
    turnaroundHours: 72, // >72 hours
  },
  collectionFrequency: "Weekly",
};

/**
 * Crisis Response Time
 * Time from crisis event detection to official response
 */
export const crisisResponseData: CrisisResponseKPI = {
  incidents: [],
  averageResponseTime: {
    highSeverity: 0,
    mediumSeverity: 0,
    lowSeverity: 0,
  },
  targets: {
    highSeverity: 2, // <= 2 hours
    mediumSeverity: 6, // <= 6 hours
    lowSeverity: 24, // <= 24 hours
  },
  redFlagThreshold: {
    highSeverity: 4, // > 4 hours
  },
  collectionFrequency: "Per-incident tracking; weekly review",
  severityCategories: ["negative_story", "opposition_attack", "candidate_controversy", "polling_irregularity"],
};

// ==========================================
// PHASE-WISE TARGETS
// ==========================================

export const phaseWiseTargets: PhaseWiseTargets = {
  phase1: {
    // August 2026 - Baseline establishment
    winProbability: 0,
    seatProjectionInterval: 0,
    voteShareTarget: 25,
    sentimentTarget: 0,
    issueOwnershipTarget: 1,
    mediaSOVTarget: 20,
    volunteerActivation: 30,
    d2dCoverage: 20,
    digitalReach: "10L",
    engagementRate: 3,
    surveyCompletion: 80,
    surveyQuality: 75,
    contentProduction: 30,
    crisisResponseHigh: 4,
    crisisResponseMedium: 12,
    crisisResponseLow: 48,
  },
  phase2: {
    // November 2026 - Candidate selection complete
    winProbability: 50,
    seatProjectionInterval: 12,
    voteShareTarget: 32,
    sentimentTarget: 10,
    issueOwnershipTarget: 2,
    mediaSOVTarget: 25,
    volunteerActivation: 50,
    d2dCoverage: 60,
    digitalReach: "30L",
    engagementRate: 4,
    surveyCompletion: 85,
    surveyQuality: 80,
    contentProduction: 50,
    crisisResponseHigh: 3,
    crisisResponseMedium: 8,
    crisisResponseLow: 24,
  },
  phase3: {
    // January 2027 - Pre-poll sprint
    winProbability: 70,
    seatProjectionInterval: 8,
    voteShareTarget: 38,
    sentimentTarget: 20,
    issueOwnershipTarget: 3,
    mediaSOVTarget: 30,
    volunteerActivation: 70,
    d2dCoverage: 100,
    digitalReach: "50L",
    engagementRate: 5,
    surveyCompletion: 90,
    surveyQuality: 85,
    contentProduction: 100,
    crisisResponseHigh: 2,
    crisisResponseMedium: 6,
    crisisResponseLow: 24,
  },
  phase4: {
    // Polling sprint - Real-time operations
    winProbability: 80,
    seatProjectionInterval: 5,
    voteShareTarget: 40,
    sentimentTarget: 25,
    issueOwnershipTarget: 3,
    mediaSOVTarget: 35,
    volunteerActivation: 80,
    d2dCoverage: 95,
    digitalReach: "60L",
    engagementRate: 6,
    surveyCompletion: 95,
    surveyQuality: 90,
    contentProduction: 120,
    crisisResponseHigh: 1,
    crisisResponseMedium: 4,
    crisisResponseLow: 12,
  },
};

// ==========================================
// KPI MEASUREMENT METHODOLOGY
// ==========================================

export const kpiMeasurementMethodology: KPIMeasurementEntry[] = [
  {
    kpi: "Win Probability",
    primaryDataSource: "Composite",
    collectionMethod: "Monte Carlo simulation on survey + structural data",
    frequency: "Weekly/Daily",
    responsibleTeam: "Data & Analytics",
  },
  {
    kpi: "Seat Projection",
    primaryDataSource: "Survey crosstabs",
    collectionMethod: "Statistical model with candidate adjustment",
    frequency: "Bi-weekly/Weekly",
    responsibleTeam: "Data & Analytics",
  },
  {
    kpi: "Vote Share Trend",
    primaryDataSource: "Tracking surveys",
    collectionMethod: "Weighted probability sample",
    frequency: "Weekly",
    responsibleTeam: "Survey Vendor + Data",
  },
  {
    kpi: "Sentiment Trajectory",
    primaryDataSource: "Social + media + survey",
    collectionMethod: "NLP sentiment analysis + survey questions",
    frequency: "Daily/Weekly",
    responsibleTeam: "Media + Monitoring",
  },
  {
    kpi: "Issue Ownership",
    primaryDataSource: "Survey",
    collectionMethod: "Forced-choice question on top issues",
    frequency: "Bi-weekly",
    responsibleTeam: "Strategy + Survey",
  },
  {
    kpi: "Media SOV",
    primaryDataSource: "Media monitoring",
    collectionMethod: "Automated clipping + manual coding",
    frequency: "Weekly/Daily",
    responsibleTeam: "Media Head",
  },
  {
    kpi: "Competitor Threat",
    primaryDataSource: "Multi-source",
    collectionMethod: "Intelligence synthesis scoring",
    frequency: "Weekly",
    responsibleTeam: "Intelligence Team",
  },
  {
    kpi: "Volunteer Activation",
    primaryDataSource: "Volunteer app",
    collectionMethod: "Activity log analysis",
    frequency: "Weekly",
    responsibleTeam: "Ground Ops",
  },
  {
    kpi: "D2D Coverage",
    primaryDataSource: "Canvasser app",
    collectionMethod: "GPS + contact logs",
    frequency: "Weekly/Daily",
    responsibleTeam: "Ground Ops",
  },
  {
    kpi: "Digital Reach",
    primaryDataSource: "Platform APIs",
    collectionMethod: "Automated analytics pull",
    frequency: "Daily",
    responsibleTeam: "Digital Head",
  },
  {
    kpi: "Survey Quality",
    primaryDataSource: "Vendor dashboard",
    collectionMethod: "Statistical quality audit",
    frequency: "Weekly",
    responsibleTeam: "Data Head",
  },
  {
    kpi: "Content Throughput",
    primaryDataSource: "CMS",
    collectionMethod: "Editorial pipeline tracking",
    frequency: "Weekly",
    responsibleTeam: "Media + Creative",
  },
  {
    kpi: "Crisis Response",
    primaryDataSource: "Monitoring + comms logs",
    collectionMethod: "Timestamp analysis",
    frequency: "Per-incident",
    responsibleTeam: "Media Head",
  },
];

// ==========================================
// ALERT CONFIGURATION
// ==========================================

export const alertConfigurations: AlertConfiguration[] = [
  {
    kpi: "Win Probability",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Data & Analytics Head",
    redAction: "Escalation alert to Campaign Committee",
    correlationAlert: "Leading indicators may follow within 1-2 weeks",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Seat Projection",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Data & Analytics Head",
    redAction: "Escalation alert to Campaign Committee",
    correlationAlert: "Vote share indicators may shift",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Vote Share Trend",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Survey Vendor + Data Head",
    redAction: "Escalation to Strategy Team",
    correlationAlert: "Sentiment and issue ownership may be affected",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Sentiment Trajectory",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Media & Digital Head",
    redAction: "Escalation to Campaign Committee",
    correlationAlert: "Issue ownership and media SOV correlation",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Issue Ownership",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Strategy Team",
    redAction: "Escalation to Campaign Committee",
    correlationAlert: "Message quality review needed",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Media SOV",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Media Head",
    redAction: "Escalation to Campaign Committee",
    correlationAlert: "Digital reach correlation",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Competitor Threat",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Intelligence Team",
    redAction: "Escalation to Strategy Head",
    correlationAlert: "AAP rising threat requires monitoring",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Volunteer Activation",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Ground Operations Head",
    redAction: "Escalation to District Coordinators",
    correlationAlert: "D2D coverage will be affected",
    phaseGateThreshold: 70,
  },
  {
    kpi: "D2D Coverage",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Ground Operations Head",
    redAction: "Escalation to Campaign Committee",
    correlationAlert: "Vote share impact within 2 weeks",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Digital Reach",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Digital Head",
    redAction: "Escalation to Media Head",
    correlationAlert: "Media SOV may be affected",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Survey Quality",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Data Head",
    redAction: "Escalation to Survey Vendor",
    correlationAlert: "Seat projection confidence affected",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Content Throughput",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Media + Creative Team",
    redAction: "Escalation to Media Head",
    correlationAlert: "Digital reach and engagement affected",
    phaseGateThreshold: 70,
  },
  {
    kpi: "Crisis Response",
    states: ["green", "amber", "red"],
    amberAction: "Push notification to Rapid Response Team",
    redAction: "Escalation to Media Head immediately",
    correlationAlert: "Sentiment trajectory may spike negatively",
    phaseGateThreshold: 70,
  },
];

// ==========================================
// DASHBOARD MODULE MAPPING
// ==========================================

export const dashboardKPIMapping = [
  {
    module: "M1: Demographics & Geography",
    strategicKPIs: ["Vote Share Trend"],
    operationalKPIs: ["Survey Completion Rate"],
  },
  {
    module: "M2: Voter Ecosystem",
    strategicKPIs: ["Issue Ownership Index", "Sentiment Trajectory"],
    operationalKPIs: ["D2D Coverage %"],
  },
  {
    module: "M3: Competitor Intelligence",
    strategicKPIs: ["Competitor Threat Index"],
    operationalKPIs: ["Crisis Response Time"],
  },
  {
    module: "M4: Campaign Strategy",
    strategicKPIs: ["Win Probability", "Seat Projection Confidence"],
    operationalKPIs: ["Content Production Throughput"],
  },
  {
    module: "M5: Media & Communication",
    strategicKPIs: ["Media Share of Voice"],
    operationalKPIs: ["Digital Reach & Engagement"],
  },
  {
    module: "M6: Outreach & Ground Ops",
    strategicKPIs: [],
    operationalKPIs: ["Volunteer Activation Rate", "D2D Coverage %"],
  },
  {
    module: "M7: Monitoring & Alerts",
    strategicKPIs: ["Sentiment Trajectory"],
    operationalKPIs: ["Crisis Response Time"],
  },
  {
    module: "M8: Predictive Models",
    strategicKPIs: ["Win Probability", "Seat Projection Confidence", "Vote Share Trend"],
    operationalKPIs: ["Survey Quality Score"],
  },
];

// ==========================================
// KPI INTERDEPENDENCY DATA
// ==========================================

export const kpiInterdependencies = [
  {
    type: "Leading",
    kpis: ["Sentiment Trajectory", "Issue Ownership Index", "Volunteer Activation Rate", "Digital Reach", "D2D Coverage %"],
    signal: "Predict future strategic outcomes; enable proactive course correction",
  },
  {
    type: "Coincident",
    kpis: ["Media SOV", "Content Throughput", "Survey Quality"],
    signal: "Real-time operational health",
  },
  {
    type: "Lagging",
    kpis: ["Win Probability", "Seat Projection", "Vote Share Trend"],
    signal: "Confirm strategic position; validate whether leading indicators translated correctly",
  },
];

export const kpiCorrelationPairs = [
  { inputKPI: "D2D Coverage %", outputKPI: "Vote Share Trend", relationship: "Higher D2D coverage in an AC correlates with higher vote share", expectedImpact: "Direct" },
  { inputKPI: "Volunteer Activation Rate", outputKPI: "D2D Coverage %", relationship: "More active volunteers enables more ground coverage", expectedImpact: "Direct" },
  { inputKPI: "Issue Ownership Index", outputKPI: "Sentiment Trajectory", relationship: "Leading on key issues drives positive sentiment", expectedImpact: "Indirect" },
  { inputKPI: "Media SOV", outputKPI: "Sentiment Trajectory", relationship: "Higher media presence shapes voter perception", expectedImpact: "Moderate" },
  { inputKPI: "Digital Reach & Engagement", outputKPI: "Media SOV", relationship: "Strong digital performance attracts mainstream media attention", expectedImpact: "Indirect" },
  { inputKPI: "Crisis Response Time", outputKPI: "Sentiment Trajectory", relationship: "Faster crisis response limits negative sentiment spikes", expectedImpact: "Direct" },
  { inputKPI: "Survey Completion Rate", outputKPI: "Seat Projection Confidence", relationship: "Better data narrows the confidence interval", expectedImpact: "Direct" },
];

// ==========================================
// AAP BROKEN PROMISES DATA
// Derived from: direct-documentation/cat-6-competition/g19-aap-attack-surface-complete.md
// Classification: CONFIDENTIAL - Campaign Use Only
// ==========================================

export interface AAPBrokenPromise {
  promise: string;
  deliveryStatus: "FAILED" | "DELIVERED_LATE" | "PARTIAL" | "WORSENED" | "NOT_DELIVERED" | "MISHANDLED";
  deliveryRate?: string;
  evidenceStrength: "STRONG" | "MODERATE" | "WEAK";
  keyEvidence: string;
  attackLine: string;
  quoteCard?: string;
  counterToPrepare?: string;
}

export const aapBrokenPromises: AAPBrokenPromise[] = [
  {
    promise: "25 Lakh Jobs",
    deliveryStatus: "FAILED",
    deliveryRate: "5.2%",
    evidenceStrength: "STRONG",
    keyEvidence: "Total jobs: 25 lakh promised, ~1.3 lakh claimed (-94.8%). Government jobs: 1.25 lakh promised, ~70,000 partial (-44%). PLFS Data (Oct-Dec 2024): Youth unemployment at 14.9% - 4th highest in India.",
    attackLine: "AAP promised 25 lakh jobs. They delivered 1.3 lakh. That is not a shortfall — that is a lie. Every Punjab family knows a young person who could not find work and had to leave.",
    quoteCard: "25 lakh jobs were promised. 1.3 lakh were delivered. 94.8% went missing — along with the young people who left Punjab because AAP had nothing to offer them.",
    counterToPrepare: "AAP claims 65,000 government jobs + 5.5 lakh private sector opportunities = ~6.15 lakh. Note: private sector opportunities are unverified announcements, not actual jobs.",
  },
  {
    promise: "Rs 1,000/Month to Women",
    deliveryStatus: "DELIVERED_LATE",
    deliveryRate: "4 years late",
    evidenceStrength: "STRONG",
    keyEvidence: "March 8, 2026 (4 years after election): NDTV reported AAP fulfilled promise. Mann stated: 'I could have easily fulfilled the promise before the elections by giving money to the women for two-three months, but that scheme would not have lasted.'",
    attackLine: "AAP held Punjab's women hostage for four years. They admitted it — they said they could have paid but wouldn't, because they wanted the money to last through the election. That is not a welfare scheme. That is a political ATM.",
    quoteCard: "AAP's own Chief Minister told us: we had the money, we chose the timing. Four years of interest-free loans from Punjab's women — that is what AAP's promise was worth.",
  },
  {
    promise: "Drug-Free Punjab",
    deliveryStatus: "FAILED",
    evidenceStrength: "STRONG",
    keyEvidence: "Village Thetharke in Dera Baba Nanak: 'All kinds of drugs are freely available.' Governor (2026): 'Drug menace remains Punjab's biggest challenge.' 13-15 year-olds dying of drug addiction. 8,344 FIRs, 14,734 arrests, 586 kg heroin seized — yet trade continues.",
    attackLine: "Every village in Punjab knows a family destroyed by drugs. Every parent in Doaba fears for their son's life. AAP promised to end it in months. Years later, drugs are still freely available — and the same gangsters who deal them are the ones allegedly getting political protection.",
    quoteCard: "AAP promised drug-free Punjab in one year. Years later, my village has drugs, my nephew is addicted, and the men who sell poison walk free. That is AAP's drug 'victory.'",
  },
  {
    promise: "End Gangsterism/Mafia",
    deliveryStatus: "WORSENED",
    evidenceStrength: "STRONG",
    keyEvidence: "July 8, 2025: Businessman Sanjay Verma shot dead in Abohar. December 2025: Kabaddi athlete shot dead in Mohali. Nine murders in first week of Jan 2026. AAP sarpanch shot dead at wedding. 24 grenade attacks on police installations since Sept 2024.",
    attackLine: "AAP promised to eliminate the mafia. What they delivered was a government run by the mafia. Killings, extortion, attacks on politicians, attacks on police — in AAP's Punjab, the gangsters run everything except the government, and some days that is unclear.",
  },
  {
    promise: "MSP for 22 Crops",
    deliveryStatus: "NOT_DELIVERED",
    evidenceStrength: "STRONG",
    keyEvidence: "Farmers continue protests at Khanauri border demanding legal MSP guarantee. January 2025: Punjab farmers held protests demanding MSP — directly contradicting AAP's claim of delivery. State government has no MSP scheme operational for the 22 crops.",
    attackLine: "AAP promised MSP for 22 crops. Not one Punjab farmer has received MSP for those crops. The farmers still protesting at Khanauri are the same farmers AAP promised to make debt-free. AAP talks about farmers at rallies. The farmers are still waiting for AAP to buy their produce.",
  },
  {
    promise: "Jan Lokpal / Corruption-Free Punjab",
    deliveryStatus: "NOT_DELIVERED",
    evidenceStrength: "STRONG",
    keyEvidence: "Jan Lokpal bill never introduced in Punjab Assembly. Two cabinet ministers resigned over corruption allegations. Vigilance Bureau Chief suspended in driving license scam, then controversially reinstated. Sanjeev Arora (Ludhiana MLA) arrested by ED in money laundering case (May 2026).",
    attackLine: "The Lokpal was promised on day one. It was never introduced. The corruption that AAP said they would end has grown — because the men accused of corruption are now ruling Punjab.",
  },
  {
    promise: "Food Security / NFSA",
    deliveryStatus: "MISHANDLED",
    evidenceStrength: "MODERATE",
    keyEvidence: "Door-to-door verification removed 10.77 lakh beneficiaries from NFSA. Year-long disruption until cabinet reversal in January 2026. Wheat replaced by wheat flour without proper communication.",
    attackLine: "AAP removed 10.77 lakh poor families from food security. These were families that qualified — but they were removed because either they or someone in their family did not vote for AAP. That is not governance. That is a hunger tax on political dissent.",
  },
  {
    promise: "End VIP Culture",
    deliveryStatus: "FAILED",
    evidenceStrength: "STRONG",
    keyEvidence: "Jalandhar MLA Raman Arora had around a dozen gunmen — three times more than a Punjab MLA should have. Security withdrawn temporarily (May 2026) only after public outcry — restored after a year.",
    attackLine: "AAP's first promise was to end VIP culture. AAP's first action in government was to give their leader three times the security allowed by law. They said VIP culture would end. What ended was the pretense.",
  },
  {
    promise: "Check Youth Immigration",
    deliveryStatus: "FAILED",
    evidenceStrength: "STRONG",
    keyEvidence: "38% of USA-deported illegal immigrants (332 on three flights) were from Punjab. Youth unemployment at 14.9% (Oct-Dec 2024 PLFS data). Families exhausting savings to fund children's migration.",
    attackLine: "AAP promised to make Punjab worth staying in. What they delivered was a state where young people sell their ancestral land to pay agents to get their children out of Punjab. That is AAP's youth policy: export the problem.",
  },
  {
    promise: "Free Electricity for Farmers",
    deliveryStatus: "PARTIAL",
    evidenceStrength: "MODERATE",
    keyEvidence: "300 units free electricity delivered but fiscal sustainability not addressed. Costs Rs 6,500 crore per year — significant contributor to state's fiscal crisis (debt potentially reaching Rs 4.5 lakh crore by 2026-27).",
    attackLine: "Free electricity is popular. We are not going to take it away. But AAP's 300 units cost Rs 6,500 crore every year — money that should be going to hospitals, schools, and jobs. AAP bought votes with free electricity while pushing Punjab deeper into debt.",
    counterToPrepare: "This is a 'what not to attack' area with nuance. Free electricity is genuinely popular. Congress should promise sustainable version, not abolition.",
  },
];

// AAP Broken Promise Summary for Quick Reference
export const aapBrokenPromiseSummary = {
  totalPromises: 10,
  failed: 5,
  deliveredLate: 1,
  worsened: 1,
  notDelivered: 2,
  mishandled: 1,
  partial: 1,
  strongestAttacks: [
    { promise: "25 Lakh Jobs", strength: "STRONG", deliveryRate: "5.2%" },
    { promise: "Drug-Free Punjab", strength: "STRONG", note: "Most potent in Malwa/Doaba" },
    { promise: "End Gangsterism", strength: "STRONG", note: "Murder wave 2025-26" },
    { promise: "MSP for 22 Crops", strength: "STRONG", note: "Farmers still protesting" },
  ],
};

// ==========================================
// FARMER UNION DATA
// Derived from: direct-documentation/cat-6-competition/b27-farmers-protest-political-impact.md
// ==========================================

export interface FarmerUnion {
  name: string;
  abbreviation: string;
  founded: string;
  primaryBase: string;
  keyLeaders: string[];
  membershipEstimate: string;
  ideologicalLean: string;
  politicalAlignment: string;
  currentStance: string;
  protestsSince2022: string[];
  keyDemands: string[];
  strengthAreas: string[];
  vulnerabilityAreas: string[];
}

export const majorFarmerUnions: FarmerUnion[] = [
  {
    name: "Bhartiya Kisan Union (Ekta Ugrahan)",
    abbreviation: "BKU-Ekta Ugrahan",
    founded: "2015",
    primaryBase: "Malwa region - Bathinda, Mansa, Muktsar, Sangrur, Barnala",
    keyLeaders: ["Satnam Singh Sahni", "Sukhdev Singh"],
    membershipEstimate: "~5-7 lakh members",
    ideologicalLean: "Pro-left, anti-corporate farming",
    politicalAlignment: "Independent, skeptical of all parties",
    currentStance: "Continued protests against central government, demands MSP legal guarantee, farm debt waiver",
    protestsSince2022: [
      "2022: Participated in Delhi border protest",
      "2023: State-level protests",
      "2024: MSP demand protests at Khanauri border",
      "2025: Ongoing protests",
    ],
    keyDemands: ["MSP as legal right", "Farm debt waiver", "Crop loan waiver", "Paddy procurement at MSP"],
    strengthAreas: ["Strong rural network in Malwa", "Large membership base", "Media visibility"],
    vulnerabilityAreas: ["Internal factions", "Political ambiguity"],
  },
  {
    name: "Kirti Kisan Union",
    abbreviation: "KKU",
    founded: "Early 2000s",
    primaryBase: "Doaba region - Jalandhar, Hoshiarpur, Nawanshahr, Kapurthala",
    keyLeaders: ["Karamjeet Singh", "Various local leaders"],
    membershipEstimate: "~1-2 lakh members",
    ideologicalLean: "Moderate, focused on practical issues",
    politicalAlignment: "Congress-leaning historically",
    currentStance: "Supportive of Congress on farm issues, critical of AAP",
    protestsSince2022: [
      "Joined 2022 protests",
      "Doaba-specific land pooling protests 2023",
    ],
    keyDemands: ["MSP for all crops", "Land pooling policy repeal", "Better procurement"],
    strengthAreas: ["Doaba NRI connections", "Strong local leadership"],
    vulnerabilityAreas: ["Limited Malwa presence", "Smaller than BKU-Ekta Ugrahan"],
  },
  {
    name: "Punjab Kisan Committee",
    abbreviation: "PKC",
    founded: "2017",
    primaryBase: "Majha region - Amritsar, Tarn Taran, Gurdaspur",
    keyLeaders: ["Various leaders"],
    membershipEstimate: "~50,000-1 lakh members",
    ideologicalLean: "Left-leaning, communist association",
    politicalAlignment: "Congress-affiliated",
    currentStance: "Critical of both AAP and central government",
    protestsSince2022: ["2022 protests", "Local level demonstrations"],
    keyDemands: ["MSP guarantee", "Debt relief", "Better irrigation"],
    strengthAreas: ["Majha presence", "Ideological consistency"],
    vulnerabilityAreas: ["Limited scale", "Lesser-known leadership"],
  },
];

// Farmer Protest Events Since 2022
export const farmerProtestEvents = [
  {
    date: "2022",
    event: "Delhi Border Protest",
    scale: "Large-scale",
    demands: ["MSP legal guarantee", "Crop loans waiver"],
    outcome: "Central government offered some concessions but key demands unmet",
  },
  {
    date: "2023",
    event: "State-Level Agitations",
    scale: "Moderate",
    demands: ["Paddy procurement issues", "Stubble management"],
    outcome: "Some state-level issues addressed",
  },
  {
    date: "January 2025",
    event: "Khanauri Border Protest",
    scale: "Significant",
    demands: ["MSP legal guarantee", "Farm debt waiver"],
    outcome: "Ongoing - farmers continue protests into 2025-2026",
  },
  {
    date: "2024-2025",
    event: "Stubble Burning Protests",
    scale: "Regional",
    demands: ["Alternative to stubble burning", "Compensation"],
    outcome: "Government measures inadequate",
  },
];

// Farmer Political Alignment by Issue
export const farmerPoliticalMapping = {
  congress: {
    historical: "Traditional ally - Congress representa farmer interests historically",
    delivered2017: "Farm debt waiver, better MSP procurement",
    current2025_26: "Working to regain farmer trust after 2022 protests",
    keyLeaders: ["Rajat Singh (Agricultural cell)", "Gurpreet Singh (Kisan Congress)"],
    risk: "May not fully regain Malwa farmer base given AAP's 2022 gains",
  },
  aap: {
    historical: "New entrant - won farmers in 2022 on anti-incumbency",
    rise2022: "Positioned as alternative, promised MSP for 22 crops",
    currentReality: "MSP promise unfulfilled - farmers protesting at Khanauri",
    farmerPerception: "Mixed - some appreciate free electricity, others angry at MSP failure",
    strength: ["Free 300 units electricity scheme", "Some irrigation improvements"],
    weakness: ["MSP promise broken", "No debt waiver"],
  },
  sad: {
    historical: "Traditional farmer party but tied to center's farm policies",
    stance2020_21: "Supported farm laws initially, faced backlash",
    currentPosition: "Trying to regain farmer base after alliance split",
    dilemma: "Central government policies conflict with farmer interests",
  },
  bjp: {
    stance2020_21: "Passed farm laws, faced massive protests",
    pivot2025: "Trying to rebuild farmer relationships through state governments",
    leaders: ["Central agitating separately from Punjab"],
    risk: "Farmers remember 2020-21 protests",
  },
};

// Farmer Issue Priorities for 2027
export const farmerIssuePriorities2027 = [
  {
    issue: "MSP Legal Guarantee",
    priority: "CRITICAL",
    farmerUnionConsensus: true,
    congressPosition: "Support MSP through state legislation",
    aapPosition: "Claims delivery but no legal guarantee",
  },
  {
    issue: "Farm Debt Waiver",
    priority: "HIGH",
    farmerUnionConsensus: true,
    congressPosition: "Will implement if elected",
    aapPosition: "Not announced as of May 2026",
  },
  {
    issue: "Paddy Procurement",
    priority: "HIGH",
    farmerUnionConsensus: true,
    congressPosition: "Ensure smooth procurement at MSP",
    aapPosition: "Procurement ongoing but at lower rates than promised",
  },
  {
    issue: "Stubble Management",
    priority: "MEDIUM",
    farmerUnionConsensus: false,
    congressPosition: "Subsidies for Happy Seeder, alternative solutions",
    aapPosition: "Enforcement but inadequate alternatives",
  },
  {
    issue: "Electricity Subsidies",
    priority: "MEDIUM",
    farmerUnionConsensus: false,
    congressPosition: "Review sustainability, may adjust",
    aapPosition: "Popular but financially unsustainable",
  },
];

// ==========================================
// DERA INFLUENCE DATA (MP1-foundational/demographics/dera-influence-mapping.md)
// ==========================================

/**
 * Summary statistics for Dera influence across Punjab
 */
export const deraInfluenceSummary = {
  totalDeras: "~100 formal, up to 9,000 informal",
  formalDeras: "~100",
  informalEstimates: "9,000",
  majorDeras: 6,
  constituenciesImpacted: 68,
  totalAssemblyConstituencies: 117,
  voteSwingPotential: "3-8%",
};

/**
 * Dera Sacha Sauda (DSS) - Most politically active dera
 * Head: Gurmeet Ram Rahim Singh Insan (incarcerated)
 * Followers: 50-70 lakh across Punjab, Haryana, Rajasthan, HP
 * Primary base: Dalits (Balmiki/Valmiki), OBCs, lower-caste Sikhs, women
 * 2027 Disposition: LEANING BJP/Haryana BJP
 */
export const deraSachaSauda: DeraProfile = {
  id: "dss",
  name: "Dera Sacha Sauda",
  abbreviation: "DSS",
  headquarters: "Sirsa, Haryana",
  location: "Major branch at Salabatpura, Bathinda",
  head: {
    name: "Gurmeet Ram Rahim Singh Insan",
    status: "Incarcerated since August 2017",
    note: "Serving 20-year rape sentence + two life terms for murder",
  },
  estimatedFollowers: "50-70 lakh (5-7 million)",
  punjabFollowerConcentration: "27 Assembly constituencies, primarily Malwa region",
  primaryDemographicBase: ["Dalit", "OBC"],
  politicalHistory: [
    { election: "2007 Assembly", endorsed: "Congress (Capt Amarinder Singh)", outcome: "Congress won 44 seats; 37 from Malwa alone" },
    { election: "2012 Assembly", endorsed: "Congress (implicit)", outcome: "Congress won 46 seats, retained government" },
    { election: "2014 Lok Sabha", endorsed: "Implicitly anti-AAP/Akali", outcome: "Fragmented results" },
    { election: "2017 Assembly", endorsed: "Initially AAP, then switched to SAD-BJP", outcome: "SAD backlash; Sikh anger over blasphemy" },
    { election: "2019 Lok Sabha", endorsed: "BJP-leaning (in Haryana)", outcome: "BJP gained in Haryana" },
    { election: "2022 Assembly", endorsed: "AAP (tacit - Ram Rahim released on furlough before polls)", outcome: "AAP won 66 of 69 Malwa seats" },
    { election: "2024 Lok Sabha", endorsed: "BJP (in Haryana); unclear in Punjab", outcome: "BJP lost Sirsa seat to Congress despite DSS support" },
    { election: "2025 Delhi Assembly", endorsed: "BJP (Ram Rahim granted 30-day parole before polls, Jan 2025)", outcome: "BJP won Delhi" },
  ],
  currentDisposition: "LEANING_BJP",
  currentStatusNotes: [
    "Ram Rahim granted temporary release 15 times since 2017 conviction",
    "Spent over 400 days outside prison",
    "Most recent parole: January 2026 (40-day parole ahead of Punjab political season)",
    "Pattern: Paroles consistently timed before elections in Punjab, Haryana, Delhi",
    "DSS political wing makes endorsement decisions after consulting followers",
    "WARNING: Ram Rahim's Hindutva alignment angers Sikh sentiments - any public BJP endorsement risks backlash in Sikh-dominated constituencies",
  ],
  constituencyInfluence: [
    { constituency: "Bathinda (Urban + Rural)", district: "Bathinda", influenceLevel: "HIGH", notes: "Salabatpura branch HQ; massive follower base" },
    { constituency: "Talwandi Sabo", district: "Bathinda", influenceLevel: "HIGH", notes: "Strong DSS presence" },
    { constituency: "Maur", district: "Bathinda", influenceLevel: "HIGH", notes: "DSS decisive in 2017 bypoll violence" },
    { constituency: "Mansa", district: "Mansa", influenceLevel: "HIGH", notes: "Core Malwa DSS belt" },
    { constituency: "Sardulgarh", district: "Mansa", influenceLevel: "HIGH", notes: "DSS dominant" },
    { constituency: "Budhlada", district: "Mansa", influenceLevel: "HIGH", notes: "DSS dominant" },
    { constituency: "Sangrur", district: "Sangrur", influenceLevel: "HIGH", notes: "Significant follower concentration" },
    { constituency: "Barnala", district: "Barnala", influenceLevel: "HIGH", notes: "DSS strong" },
    { constituency: "Sunam", district: "Sangrur", influenceLevel: "MEDIUM", notes: "DSS present but contested" },
    { constituency: "Bhadaur", district: "Barnala", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Faridkot", district: "Faridkot", influenceLevel: "HIGH", notes: "DSS strong influence" },
    { constituency: "Kotkapura", district: "Faridkot", influenceLevel: "HIGH", notes: "DSS significant" },
    { constituency: "Jaitu", district: "Faridkot", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Muktsar", district: "Muktsar", influenceLevel: "HIGH", notes: "Core DSS territory" },
    { constituency: "Malout", district: "Muktsar", influenceLevel: "HIGH", notes: "DSS strong" },
    { constituency: "Gidderbaha", district: "Muktsar", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Fazilka", district: "Fazilka", influenceLevel: "MEDIUM", notes: "Border area, DSS presence" },
    { constituency: "Abohar", district: "Fazilka", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Balluana", district: "Fazilka", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Rampura Phul", district: "Bathinda", influenceLevel: "HIGH", notes: "DSS strong" },
    { constituency: "Bhucho Mandi", district: "Bathinda", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Lehra", district: "Sangrur", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Dirba", district: "Sangrur", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Mehal Kalan", district: "Barnala", influenceLevel: "MEDIUM", notes: "DSS present" },
    { constituency: "Shutrana", district: "Patiala", influenceLevel: "LOW", notes: "Peripheral influence" },
    { constituency: "Samana", district: "Patiala", influenceLevel: "LOW", notes: "Peripheral influence" },
    { constituency: "Patiala (Rural)", district: "Patiala", influenceLevel: "LOW", notes: "DSS present but not dominant" },
  ],
};

/**
 * Radha Soami Satsang Beas (Dera Beas)
 * Head: Baba Gurinder Singh Dhillon (since 2024)
 * Followers: 20-30 lakh in Punjab; 5,000+ centres globally
 * Primary base: All castes/communities, urban educated middle-class, Jat Sikhs
 * 2027 Disposition: SHIFTING FROM NEUTRAL TO SAD-BJP
 */
export const deraBeas: DeraProfile = {
  id: "deras-beas",
  name: "Radha Soami Satsang Beas",
  abbreviation: "RSSB / Dera Beas",
  headquarters: "Dera Baba Jaimal Singh, Beas, Amritsar district",
  head: {
    name: "Baba Gurinder Singh Dhillon",
    since: "2024",
    note: "Transitioning spiritual duties",
  },
  estimatedFollowers: "20-30 lakh (2-3 million) in Punjab; 5,000+ centres globally",
  punjabFollowerConcentration: "19 Assembly constituencies - Amritsar, Jalandhar, Patiala, Muktsar, Kapurthala, Fazilka; strongest in Doaba (NRI belt) and Majha",
  primaryDemographicBase: ["Jat Sikh", "Urban Middle Class", "Cross-Caste"],
  politicalHistory: [
    { election: "Traditional", endorsed: "NEUTRAL (formal circulars stating respect for all political parties)", outcome: "Never formally endorsed any party" },
    { election: "Historical", endorsed: "Pro-Congress leanings (due to secular teachings)", outcome: "Informal alignment" },
    { election: "Feb 2026", endorsed: "BJP-SAD with Ashwani Sharma and Sukhbir Badal", outcome: "Breaking decades of neutrality - anti-drugs walk in Ferozepur" },
  ],
  currentDisposition: "SHIFTING_TO_SAD_BJP",
  currentStatusNotes: [
    "Gurinder Dhillon's niece married to SAD leader Bikram Singh Majithia (brother-in-law of Sukhbir Badal)",
    "Feb 2026: Broke neutrality by participating in anti-drugs walk with BJP and SAD",
    "20-minute closed-door meeting with BJP and Governor afterwards",
    "Dhillon publicly visited Majithia in Nabha Jail; Majithia got Supreme Court bail shortly after",
    "Political analysts speculate Dhillon could become BJP's CM face if SAD-BJP alliance materialises",
    "BJP-RSS actively courting Dera Beas as centerpiece of 2027 strategy",
  ],
  constituencyInfluence: [
    { constituency: "Beas", district: "Amritsar", influenceLevel: "HIGH", notes: "Dera headquarters location" },
    { constituency: "Jandiala", district: "Amritsar", influenceLevel: "HIGH", notes: "Proximity to Beas" },
    { constituency: "Majitha", district: "Amritsar", influenceLevel: "HIGH", notes: "Majithia family connection via marriage" },
    { constituency: "Amritsar (North/South/East/West/Central)", district: "Amritsar", influenceLevel: "MEDIUM", notes: "Urban follower base" },
    { constituency: "Attari", district: "Amritsar", influenceLevel: "MEDIUM", notes: "Border area, RSSB present" },
    { constituency: "Baba Bakala", district: "Amritsar", influenceLevel: "MEDIUM", notes: "RSSB influence" },
    { constituency: "Jalandhar (North/South/West/Central)", district: "Jalandhar", influenceLevel: "MEDIUM", notes: "Doaba stronghold" },
    { constituency: "Phillaur", district: "Jalandhar", influenceLevel: "MEDIUM", notes: "RSSB followers" },
    { constituency: "Adampur", district: "Jalandhar", influenceLevel: "MEDIUM", notes: "RSSB present" },
    { constituency: "Kartarpur", district: "Jalandhar", influenceLevel: "LOW-MEDIUM", notes: "RSSB peripheral" },
    { constituency: "Kapurthala", district: "Kapurthala", influenceLevel: "MEDIUM", notes: "RSSB influence" },
    { constituency: "Sultanpur Lodhi", district: "Kapurthala", influenceLevel: "MEDIUM", notes: "RSSB present" },
    { constituency: "Patiala (Urban + Rural)", district: "Patiala", influenceLevel: "MEDIUM", notes: "RSSB followers among educated class" },
  ],
};

/**
 * Dera Sachkhand Ballan
 * Head: Sant Niranjan Dass (Padma Shri Jan 2026)
 * Community: Ravidassia (Ad-Dharmi) - separate religion since 2010
 * Followers: ~14% of Punjab's Dalit population (~4.5% of total electorate)
 * Primary base: Ravidassia/Ad-Dharmi Dalits; strong in Doaba (Dalits 42% of population)
 * 2027 Disposition: FORMALLY NEUTRAL but BJP gaining access advantage
 */
export const deraBallan: DeraProfile = {
  id: "dera-ballan",
  name: "Dera Sachkhand Ballan",
  abbreviation: "DJJS / Ballan",
  headquarters: "Ballan village, Jalandhar district (on Jalandhar-Pathankot road)",
  head: {
    name: "Sant Niranjan Dass",
    title: "Padma Shri (Jan 2026)",
  },
  estimatedFollowers: "~14% of Punjab's Dalit population (~4.5% of total Punjab electorate)",
  punjabFollowerConcentration: "Primarily Doaba region (Jalandhar, Hoshiarpur, Nawanshahr, Kapurthala); ~19 Assembly constituencies",
  primaryDemographicBase: ["Dalit"],
  politicalHistory: [
    { election: "Traditional", endorsed: "NEUTRAL - has never formally endorsed any political party", outcome: "Dalit votes historically favored Congress" },
    { election: "2022", endorsed: "AAP made significant inroads through welfare promises", outcome: "AAP won Ravidassia votes" },
  ],
  currentDisposition: "FORMALLY_NEUTRAL_BJP_GAINING",
  currentStatusNotes: [
    "PM Modi became first sitting PM to visit Dera Sachkhand Ballan on Guru Ravidas Jayanti (1 Feb 2026)",
    "Modi touched feet of Sant Niranjan Dass - powerful visual symbolism",
    "Padma Shri to Sant Niranjan Dass announced just before the visit",
    "BJP positioning as pro-Dalit through dera outreach",
    "Congress and AAP leaders have also visited - Kejriwal and Mann visited March 2023",
    "Congress must re-engage urgently through Channi (first Dalit CM) and other Dalit leaders",
  ],
  constituencyInfluence: [
    { constituency: "Jalandhar North", district: "Jalandhar", influenceLevel: "HIGH", notes: "Doaba - Ballan/Ravidassia heartland" },
    { constituency: "Jalandhar West", district: "Jalandhar", influenceLevel: "HIGH", notes: "Ballan influence strong" },
    { constituency: "Phillaur", district: "Jalandhar", influenceLevel: "HIGH", notes: "Ravidassia dominant" },
    { constituency: "Adampur", district: "Jalandhar", influenceLevel: "HIGH", notes: "Ballan present" },
    { constituency: "Nawanshahr", district: "Nawanshahr", influenceLevel: "HIGH", notes: "Doaba Dalit concentration" },
    { constituency: "Phagwara", district: "Kapurthala", influenceLevel: "HIGH", notes: "Ballan influence" },
    { constituency: "Hoshiarpur", district: "Hoshiarpur", influenceLevel: "MEDIUM", notes: "Ballan present" },
    { constituency: "Chabbewal (SC)", district: "Hoshiarpur", influenceLevel: "MEDIUM", notes: "Ballan in Doaba" },
    { constituency: "Kapurthala", district: "Kapurthala", influenceLevel: "MEDIUM", notes: "RSSB/Ballan overlap" },
  ],
};

/**
 * Noormahal Dera (Divya Jyoti Jagriti Sansthan - DJJS)
 * Head: Ashutosh Maharaj (declared clinically dead 2014; followers say deep meditation)
 * Followers: Several lakhs
 * Primary base: Cross-caste, Hindus and Sikhs, particularly women
 * 2027 Disposition: NEUTRAL - unlikely to issue formal endorsement
 */
export const deraNoormahal: DeraProfile = {
  id: "dera-noormahal",
  name: "Noormahal Dera (Divya Jyoti Jagriti Sansthan)",
  abbreviation: "DJJS",
  headquarters: "Nurmahal, Jalandhar district",
  head: {
    name: "Ashutosh Maharaj",
    status: "Declared clinically dead 2014; followers maintain he is in deep meditation",
  },
  estimatedFollowers: "Several lakhs; significant following in Doaba and Malwa",
  punjabFollowerConcentration: "Approximately 8 Assembly constituencies, mainly in Jalandhar, Ludhiana belt",
  primaryDemographicBase: ["Cross-Caste"],
  politicalHistory: [
    { election: "Traditional", endorsed: "APOLITICAL - officially apolitical stance", outcome: "Followers vote independently without formal dera direction" },
  ],
  currentDisposition: "NEUTRAL",
  currentStatusNotes: [
    "Organisation continues functioning despite Ashutosh Maharaj's unclear status",
    "Active in social work, disaster relief (2025 Punjab floods relief operations)",
    "Controversial relationship with Sikh establishment - labelled anti-Sikh by some Sikh bodies",
    "Sikh hardliners oppose politicians visiting this dera",
  ],
  constituencyInfluence: [
    { constituency: "Jalandhar West", district: "Jalandhar", influenceLevel: "MEDIUM", notes: "DJJS present alongside Ballan" },
    { constituency: "Jalandhar Central", district: "Jalandhar", influenceLevel: "MEDIUM", notes: "DJJS followers" },
    { constituency: "Ludhiana North", district: "Ludhiana", influenceLevel: "MEDIUM", notes: "Ludhiana belt presence" },
  ],
};

/**
 * Sant Nirankari Mission
 * Head: Sudarshan Dhar (successor to Hardev Singh who died 2016)
 * Followers: Several lakhs in Punjab
 * Primary base: Urban, educated Sikhs and Hindus, middle-class
 * 2027 Disposition: NEUTRAL - zero electoral endorsement risk or opportunity
 */
export const deraNirankari: DeraProfile = {
  id: "dera-nirankari",
  name: "Sant Nirankari Mission",
  abbreviation: "SNM",
  headquarters: "Nirankari Colony, Delhi (significant presence in Punjab)",
  head: {
    name: "Sudarshan Dhar",
    note: "Successor to Hardev Singh who died in 2016",
  },
  estimatedFollowers: "Several lakhs in Punjab",
  punjabFollowerConcentration: "Approximately 4 Assembly constituencies, mainly in Jalandhar and Ludhiana urban areas",
  primaryDemographicBase: ["Urban Middle Class"],
  politicalHistory: [
    { election: "Traditional", endorsed: "STRICTLY APOLITICAL - never endorses parties", outcome: "Deep historical controversy: 1978 Sikh-Nirankari clash (13 Sikhs killed)" },
  ],
  currentDisposition: "NEUTRAL",
  currentStatusNotes: [
    "Continues spiritual and social activities",
    "No political engagement expected",
    "Politicians avoid public association due to Sikh backlash risk",
    "Followers vote independently",
  ],
  constituencyInfluence: [
    { constituency: "Jalandhar North", district: "Jalandhar", influenceLevel: "MEDIUM", notes: "Urban follower base" },
    { constituency: "Jalandhar South", district: "Jalandhar", influenceLevel: "MEDIUM", notes: "Nirankari presence" },
    { constituency: "Ludhiana Urban", district: "Ludhiana", influenceLevel: "MEDIUM", notes: "Middle-class followers" },
  ],
};

/**
 * Namdhari Darbar
 * Head: Thakur Dalip Singh (with competing claimants)
 * Followers: Relatively small - a few lakhs
 * Primary base: Namdhari Sikhs; concentrated in Ludhiana rural areas
 * 2027 Disposition: NEUTRAL - minimal electoral impact due to small follower base and internal divisions
 */
export const deraNamdhari: DeraProfile = {
  id: "dera-namdhari",
  name: "Namdhari Darbar",
  abbreviation: "Namdhari",
  headquarters: "Bhaini Sahib, Ludhiana district",
  head: {
    name: "Thakur Dalip Singh",
    note: "With competing claimants to leadership",
  },
  estimatedFollowers: "A few lakhs",
  punjabFollowerConcentration: "Approximately 2 Assembly constituencies in Ludhiana belt",
  primaryDemographicBase: ["Jat Sikh"],
  politicalHistory: [
    { election: "Traditional", endorsed: "GENERALLY APOLITICAL", outcome: "Namdhari followers tend to vote as a bloc when directed, but leadership rarely issues guidance" },
    { election: "2022", endorsed: "Some Namdhari leaders expressed anti-AAP sentiment over agricultural policy", outcome: "Limited impact" },
  ],
  currentDisposition: "NEUTRAL",
  currentStatusNotes: [
    "Internal succession disputes limit unified political action",
    "Historically anti-British, known for simplicity and vegetarianism",
  ],
  constituencyInfluence: [
    { constituency: "Ludhiana Rural", district: "Ludhiana", influenceLevel: "MEDIUM", notes: "Namdhari concentration" },
    { constituency: "Moga", district: "Moga", influenceLevel: "LOW-MEDIUM", notes: "Namdhari presence" },
  ],
};

/**
 * All major deras combined data
 */
export const allMajorDeras: DeraProfile[] = [
  deraSachaSauda,
  deraBeas,
  deraBallan,
  deraNoormahal,
  deraNirankari,
  deraNamdhari,
];

/**
 * Local/Regional Deras with limited constituency influence
 */
export const localDeras: LocalDera[] = [
  { name: "Dera Baba Wadbhag Singh", location: "Mairi, Una (HP border)", community: "Sikh-Hindu syncretic", influenceArea: "Hoshiarpur border seats" },
  { name: "Dera Baba Daudhwala", location: "Ferozepur", community: "Sikh", influenceArea: "Ferozepur rural" },
  { name: "Dera Baba Farid", location: "Faridkot", community: "Sufi/interfaith", influenceArea: "Faridkot, Muktsar belt" },
  { name: "Dera Baba Nanaksar", location: "Jagraon/Ludhiana", community: "Sikh (Nanaksar)", influenceArea: "Ludhiana rural, Moga" },
  { name: "Dera Jagatdhari", location: "Various", community: "Hindu-Dalit", influenceArea: "Doaba pockets" },
];

/**
 * HIGH Influence Constituencies - Dera endorsement can determine winner
 */
export const highInfluenceConstituencies: HighInfluenceConstituency[] = [
  { constituency: "Bathinda Urban", region: "Malwa", district: "Bathinda", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Bathinda Rural", region: "Malwa", district: "Bathinda", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Talwandi Sabo", region: "Malwa", district: "Bathinda", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Maur", region: "Malwa", district: "Bathinda", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Rampura Phul", region: "Malwa", district: "Bathinda", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Mansa", region: "Malwa", district: "Mansa", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Sardulgarh", region: "Malwa", district: "Mansa", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Budhlada", region: "Malwa", district: "Mansa", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Faridkot", region: "Malwa", district: "Faridkot", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Kotkapura", region: "Malwa", district: "Faridkot", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Muktsar", region: "Malwa", district: "Muktsar", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Malout", region: "Malwa", district: "Muktsar", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Sangrur", region: "Malwa", district: "Sangrur", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Barnala", region: "Malwa", district: "Barnala", dominantDeras: ["DSS"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Beas", region: "Majha", district: "Amritsar", dominantDeras: ["Dera Beas"], influenceLevel: "HIGH", winner2022: "AAP" },
  { constituency: "Majitha", region: "Majha", district: "Amritsar", dominantDeras: ["Dera Beas"], influenceLevel: "HIGH", winner2022: "SAD" },
];

/**
 * MEDIUM Influence Constituencies - Dera vote can be decisive in close contests
 */
export const mediumInfluenceConstituencies: MediumInfluenceConstituency[] = [
  { constituency: "Sunam", region: "Malwa", district: "Sangrur", dominantDeras: ["DSS"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Fazilka", region: "Malwa", district: "Fazilka", dominantDeras: ["DSS", "Dera Beas"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Abohar", region: "Malwa", district: "Fazilka", dominantDeras: ["DSS"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Gidderbaha", region: "Malwa", district: "Muktsar", dominantDeras: ["DSS"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Jandiala", region: "Majha", district: "Amritsar", dominantDeras: ["Dera Beas"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Amritsar North", region: "Majha", district: "Amritsar", dominantDeras: ["Dera Beas"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Amritsar South", region: "Majha", district: "Amritsar", dominantDeras: ["Dera Beas"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Jalandhar North", region: "Doaba", district: "Jalandhar", dominantDeras: ["Dera Beas", "Ballan"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Jalandhar West", region: "Doaba", district: "Jalandhar", dominantDeras: ["Ballan", "DJJS"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Phillaur", region: "Doaba", district: "Jalandhar", dominantDeras: ["Ballan", "Dera Beas"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Adampur", region: "Doaba", district: "Jalandhar", dominantDeras: ["Ballan"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Kapurthala", region: "Doaba", district: "Kapurthala", dominantDeras: ["Dera Beas"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Phillaur (SC)", region: "Doaba", district: "Jalandhar", dominantDeras: ["Ballan"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Nawanshahr", region: "Doaba", district: "Nawanshahr", dominantDeras: ["Ballan"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Phagwara", region: "Doaba", district: "Kapurthala", dominantDeras: ["Ballan"], influenceLevel: "MEDIUM", winner2022: "AAP" },
  { constituency: "Hoshiarpur", region: "Doaba", district: "Hoshiarpur", dominantDeras: ["Ballan"], influenceLevel: "MEDIUM", winner2022: "Congress" },
  { constituency: "Chabbewal (SC)", region: "Doaba", district: "Hoshiarpur", dominantDeras: ["Ballan"], influenceLevel: "MEDIUM", winner2022: "AAP" },
];

/**
 * BJP Dera Strategy for 2027
 */
export const bjpDeraStrategy = [
  {
    dera: "Dera Sachkhand Ballan",
    approach: "PM Modi's unprecedented visit (Feb 2026) + Padma Shri",
    development: "Direct Dalit outreach; first sitting PM to visit",
  },
  {
    dera: "Dera Beas",
    approach: "Using Governor and SAD-BJP reunion channel",
    development: "Gurinder Dhillon walking with BJP-SAD in Feb 2026; potential CM face speculation",
  },
  {
    dera: "Dera Sacha Sauda",
    approach: "Ram Rahim's repeated paroles (15 times, 400+ days out)",
    development: "Haryana BJP government facilitates releases; ensures political utility",
  },
];

/**
 * Congress Engagement Recommendations
 */
export const congressDeraRecommendations = [
  {
    priority: "URGENT" as const,
    dera: "Dera Ballan",
    action: "Re-engage through Channi (first Dalit CM) and traditional Congress alignment with Ravidassia community",
    warning: "Must organize senior leadership visits before BJP captures this space permanently",
  },
  {
    priority: "HIGH" as const,
    dera: "Dera Beas",
    action: "Damage control - maintain cordial relations but do not expect endorsement",
    warning: "Gurinder Dhillon's SAD family connection (Majithia marriage) makes him hostile territory",
  },
  {
    priority: "HIGH" as const,
    dera: "Dera Sacha Sauda",
    action: "Explore back-channel engagement through Salabatpura branch leadership",
    warning: "WARNING: Any public association risks Akal Takht backlash and Sikh voter alienation. Handle extremely carefully.",
  },
  {
    priority: "MEDIUM" as const,
    dera: "Counter-Narrative",
    action: "Highlight BJP's transactional dera engagement (paroles for votes, Padma awards for access) versus Congress's genuine relationship with dera communities through shared secular values",
  },
];

/**
 * Complete Dera Intelligence Report
 */
export const deraIntelligenceReport: DeraIntelligenceReport = {
  reportDate: "19 May 2026",
  source: "Intelligence Research Agent",
  status: "VERIFIED (multiple corroborating sources)",
  classification: "STRATEGIC - Directly impacts constituency-level campaign planning",
  summary: deraInfluenceSummary,
  majorDeras: allMajorDeras,
  localDeras: localDeras,
  highInfluenceConstituencies: highInfluenceConstituencies,
  mediumInfluenceConstituencies: mediumInfluenceConstituencies,
  bjpStrategy: bjpDeraStrategy,
  congressRecommendations: congressDeraRecommendations,
};

// ==========================================
// DERA INFLUENCE UTILITY FUNCTIONS
// ==========================================

/**
 * Get a dera profile by its ID
 */
export function getDeraById(id: string): DeraProfile | undefined {
  return allMajorDeras.find((dera) => dera.id === id);
}

/**
 * Get all high influence constituencies for a specific dera
 */
export function getHighInfluenceForDera(deraId: string): DeraConstituencyInfluence[] {
  const dera = getDeraById(deraId);
  if (!dera) return [];
  return dera.constituencyInfluence.filter((c) => c.influenceLevel === "HIGH");
}

/**
 * Get dera disposition as a display-friendly object with color coding
 */
export function getDeraDispositionInfo(disposition: DeraDisposition): { label: string; color: string; bgColor: string } {
  const dispositionMap: Record<DeraDisposition, { label: string; color: string; bgColor: string }> = {
    NEUTRAL: { label: "Neutral", color: "text-gray-600", bgColor: "bg-gray-100" },
    LEANING_BJP: { label: "Leaning BJP", color: "text-orange-700", bgColor: "bg-orange-100" },
    LEANING_CONGRESS: { label: "Leaning Congress", color: "text-blue-700", bgColor: "bg-blue-100" },
    LEANING_AAP: { label: "Leaning AAP", color: "text-yellow-700", bgColor: "bg-yellow-100" },
    SHIFTING_TO_SAD_BJP: { label: "Shifting to SAD-BJP", color: "text-amber-700", bgColor: "bg-amber-100" },
    FORMALLY_NEUTRAL_BJP_GAINING: { label: "Neutral (BJP Gaining)", color: "text-orange-600", bgColor: "bg-orange-50" },
  };
  return dispositionMap[disposition] || dispositionMap.NEUTRAL;
}

/**
 * Get Congress recommendation priority as display-friendly object
 */
export function getPriorityInfo(priority: CongressDeraRecommendations["priority"]): { label: string; color: string; bgColor: string } {
  const priorityMap: Record<CongressDeraRecommendations["priority"], { label: string; color: string; bgColor: string }> = {
    URGENT: { label: "URGENT", color: "text-red-700", bgColor: "bg-red-100" },
    HIGH: { label: "HIGH", color: "text-orange-700", bgColor: "bg-orange-100" },
    MEDIUM: { label: "MEDIUM", color: "text-yellow-700", bgColor: "bg-yellow-100" },
    LOW: { label: "LOW", color: "text-green-700", bgColor: "bg-green-100" },
  };
  return priorityMap[priority];
}

/**
 * Get influence level as display-friendly object
 */
export function getInfluenceLevelInfo(level: InfluenceLevel): { label: string; color: string; bgColor: string } {
  const levelMap: Record<InfluenceLevel, { label: string; color: string; bgColor: string }> = {
    HIGH: { label: "High", color: "text-red-700", bgColor: "bg-red-100" },
    MEDIUM: { label: "Medium", color: "text-yellow-700", bgColor: "bg-yellow-100" },
    LOW: { label: "Low", color: "text-green-700", bgColor: "bg-green-100" },
    "LOW-MEDIUM": { label: "Low-Medium", color: "text-lime-700", bgColor: "bg-lime-100" },
  };
  return levelMap[level] || levelMap.MEDIUM;
}

/**
 * Get constituencies by influence level
 */
export function getConstituenciesByInfluence(influenceLevel: "HIGH" | "MEDIUM"): (HighInfluenceConstituency | MediumInfluenceConstituency)[] {
  if (influenceLevel === "HIGH") {
    return highInfluenceConstituencies;
  }
  return mediumInfluenceConstituencies;
}

/**
 * Get total constituency count impacted by major deras
 */
export function getTotalImpactedConstituencies(): number {
  const allNames = new Set([
    ...highInfluenceConstituencies.map((c) => c.constituency),
    ...mediumInfluenceConstituencies.map((c) => c.constituency),
  ]);
  return allNames.size;
}

// ==========================================
// LANGUAGE & LINGUISTICS DATA
// Derived from: research-M2/MP1-foundational/demographics/language-linguistics.md
// ==========================================

import type {
  LanguageLinguisticsKPI,
  DialectInfo,
  LanguageDemographic,
  ScriptUsage,
  ChannelScriptSelection,
  DialectSlogan,
  DataGap,
} from "@/types/language-linguistics-types";
import type {
  OccupationReport,
  SectorDistribution,
  LandHoldingSizeClass,
  LandHoldingSummary,
  CultivatorLabourerSummary,
  TenancyData,
  CropDistribution,
  MSMEMetrics,
  IndustrialCluster,
  ConstructionWorkers,
  LargeScaleIndustry,
  GovernmentEmploymentSummary,
  PrivateServiceCategory,
  StudentPopulationSummary,
  NRISummary,
  OccupationVoterMapping,
  VulnerableOccupationsReport,
  OverallUnemployment,
  EducatedUnemployment,
  YouthUnemploymentByGender,
  UnemploymentBureauData,
  DistressMigration,
  DisguisedUnemployment,
  DiscouragedWorkers,
  NonWorkingPopulation,
  VulnerableOccupation,
  BondedLabourData,
} from "@/types/occupation-types";

/**
 * Language Demographics from Census 2011
 */
export const languageDemographics: LanguageDemographic[] = [
  { language: "Punjabi", speakers: 24919067, percentage: 89.82 },
  { language: "Hindi", speakers: 2177853, percentage: 7.85 },
  { language: "Others (Urdu, English, etc.)", speakers: 646418, percentage: 2.83 },
];

/**
 * Script Usage Patterns
 */
export const scriptUsageData: ScriptUsage[] = [
  {
    script: "gurmukhi",
    name: "Gurmukhi",
    literacy: 80,
    context: ["Official/government", "Education (Punjabi-medium)", "Print media", "Sacred/religious"],
    campaignNotes: "All printed material (posters, pamphlets, manifestos) MUST use Gurmukhi for credibility and cultural respect.",
  },
  {
    script: "roman_punjabi",
    name: "Roman Punjabi",
    context: ["Social media (Facebook, Instagram, WhatsApp, X/Twitter, YouTube)", "Youth (18-35)", "NRI community"],
    campaignNotes: "ALL social media messaging must be in Roman Punjabi. Gurmukhi posts get lower engagement among youth target demographic. Default to Roman.",
  },
  {
    script: "shahmukhi",
    name: "Shahmukhi",
    context: ["Pakistani Punjab", "Malerkotla (Muslim-majority town)", "Border communities"],
    campaignNotes: "Minimal relevance for Indian Punjab election. Only consider for Malerkotla constituency (AC 109) if micro-targeting Muslim voters.",
  },
  {
    script: "devanagari",
    name: "Hindi (Devanagari)",
    context: ["~7.85% mother tongue speakers", "Pathankot (Hindi belt influence)", "Fazilka border areas", "Mohali IT corridor", "Hindu-majority urban wards"],
    campaignNotes: "Use Hindi for targeted outreach to Hindu urban voters. Do NOT use Hindi as primary campaign language -- triggers Hindi imposition sensitivities.",
  },
];

/**
 * Punjabi Dialect Information
 */
export const dialectInfo: DialectInfo[] = [
  {
    dialect: "majhi",
    name: "Majhi",
    region: "Majha (central Punjab, India-Pakistan border belt)",
    districts: ["Amritsar", "Tarn Taran", "Gurdaspur (partial)", "Pathankot (partial)"],
    constituencies: [
      "Amritsar North/Central/South/East/West", "Ajnala", "Rajasansi", "Attari", "Tarn Taran",
      "Khadoor Sahib", "Patti", "Zira (partial)", "Gurdaspur", "Pathankot", "Bhoa",
      "Dinanagar", "Qadian", "Batala", "Sri Hargobindpur", "Dera Baba Nanak", "Fatehgarh Churian",
    ],
    approximateSeats: 25,
    characteristics: "Prestige dialect; basis of standard written Punjabi. Closest to literary Gurmukhi. Influenced by Urdu vocabulary near Pakistan border. Perceived as 'pure' Punjabi.",
    campaignMarkers: "Use standard Punjabi -- this dialect IS campaign Punjabi. 'Ki haal ae?', 'Tenu mil ke khushi hoyi.'",
    priority: "HIGH",
  },
  {
    dialect: "malwai",
    name: "Malwai",
    region: "Malwa (southern/central Punjab -- largest region)",
    districts: [
      "Ludhiana", "Moga", "Sangrur", "Barnala", "Faridkot", "Patiala", "Fatehgarh Sahib",
      "Mansa", "Muktsar", "Bathinda", "Ferozepur (partial)", "SAS Nagar (partial)", "Malerkotla",
    ],
    constituencies: [
      "Ludhiana North/Central/South/East/West", "Moga", "Dharamkot", "Bagha Purana", "Nihal Singh Wala",
      "Sangrur", "Barnala", "Bhadaur", "Sunam", "Lehragaga", "Faridkot", "Kotkapura", "Jaitu",
      "Patiala Rural/Urban", "Nabha", "Samana", "Shutrana", "Ghanaur", "Fatehgarh Sahib", "Bassi Pathana",
      "Amloh", "Mansa", "Budhlada", "Sardulgarh", "Muktsar", "Malout", "Gidderbaha", "Lambi",
      "Bathinda Rural/Urban", "Talwandi Sabo", "Maur", "Ferozepur City/Rural", "Guruharsahai",
      "Jalalabad", "Fazilka", "Abohar", "Balluana", "Mohali", "Kharar", "Rajpura", "Dhuri",
      "Dirba", "Tapa", "Mehal Kalan", "Banga",
    ],
    approximateSeats: 69,
    characteristics: "Largest dialect by speaker count and constituency count. Influenced by proximity to Haryana/Rajasthan -- some Hindi/Haryanvi loan words. Softer tone than Majhi.",
    campaignMarkers: "Slightly different vocabulary. 'Ki karde aa?' instead of 'Ki karde paye o?' Use words like 'konsa' (which) vs Majhi 'kehda'. Avoid overly Persianized vocabulary.",
    priority: "CRITICAL",
  },
  {
    dialect: "doabi",
    name: "Doabi",
    region: "Doaba (between Beas and Sutlej rivers)",
    districts: ["Jalandhar", "Nawanshahr (SBS Nagar)", "Kapurthala", "Hoshiarpur"],
    constituencies: [
      "Jalandhar North/Central/South/West", "Adampur", "Kartarpur", "Phillaur", "Nakodar",
      "Shahkot", "Nawanshahr", "Banga", "Balachaur", "Mukerian", "Dasuya", "Urmar",
      "Chabbewal", "Hoshiarpur", "Sham Chaurasi", "Garhshankar", "Kapurthala",
      "Sultanpur Lodhi", "Phagwara", "Bholath",
    ],
    approximateSeats: 23,
    characteristics: "Sweet-sounding, perceived as melodious. Tonal modulation distinct from Majhi and Malwai. 'Ki karda aa?' (vs Majhi 'Ki karda pya ae?'). Uses 'aa' as sentence-ending particle.",
    campaignMarkers: "Use softer formulations. 'Terian/Tohanian' instead of 'Tuhadi'. Play on Doabi pride -- Doaba is the NRI belt, connect language with prosperity/abroad connections.",
    priority: "HIGH",
  },
  {
    dialect: "puadhi",
    name: "Puadhi",
    region: "Powadh (between Sutlej and Ghaggar rivers -- southeastern Punjab)",
    districts: ["Rupnagar", "SAS Nagar (Mohali -- partial)", "Fatehgarh Sahib (partial)", "Patiala (partial -- Rajpura belt)"],
    constituencies: [
      "Rupnagar", "Chamkaur Sahib", "Anandpur Sahib", "Nangal",
      "Kharar (partial)", "Rajpura (partial)", "Mohali (partial)", "Samrala (partial)",
    ],
    approximateSeats: 8,
    characteristics: "Transitional dialect -- blends Malwai with Haryanvi influences. Least distinct of the four; many speakers switch between Puadhi and Malwai/Hindi fluidly. Small geographic footprint but important as it includes the rapidly urbanizing Mohali belt.",
    campaignMarkers: "Can use standard Punjabi here without dialect penalty. The Mohali urban voter is comfortable with Hindi/English mix. Rural Puadh areas respond to Malwai-adjacent messaging.",
    priority: "MEDIUM",
  },
];

/**
 * Channel Script Selection Matrix for Campaign
 */
export const channelScriptMatrix: ChannelScriptSelection[] = [
  { channel: "WhatsApp forwards", primaryScript: "roman_punjabi", secondaryScript: "gurmukhi", notes: "Youth/village both use Roman" },
  { channel: "Facebook/Instagram", primaryScript: "roman_punjabi", secondaryScript: "hindi", notes: "Video captions in Roman" },
  { channel: "Print pamphlets/posters", primaryScript: "gurmukhi", secondaryScript: "devanagari", notes: "Gurmukhi signals authenticity" },
  { channel: "TV ads", primaryScript: "gurmukhi", notes: "Spoken Punjabi (dialect-matched); Hindi subtitles optional" },
  { channel: "Door-to-door / Jorha", primaryScript: "gurmukhi", notes: "Train workers in local dialect" },
  { channel: "Loudspeaker jingles", primaryScript: "gurmukhi", notes: "Spoken dialect; Malwai for Malwa, etc." },
  { channel: "YouTube/TikTok reels", primaryScript: "roman_punjabi", secondaryScript: "english", notes: "Youth-driven, Roman mandatory; English keywords for SEO" },
  { channel: "Manifesto", primaryScript: "gurmukhi", notes: "Gurmukhi version is primary; Hindi/English translations available" },
];

/**
 * Dialect-Adapted Campaign Slogans
 */
export const dialectSlogans: DialectSlogan[] = [
  {
    messageTheme: "Congress will win",
    majhi: "Congress jeetugi",
    malwai: "Congress jeetuga",
    doabi: "Congress jeetuga ae",
    puadhi: "Congress jeetuga",
  },
  {
    messageTheme: "Your vote matters",
    majhi: "Tuhada vote bahar hai",
    malwai: "Tuhada vote faisla karega",
    doabi: "Tuhada vote masle aa",
    puadhi: "Tuhada vote matters aa",
  },
  {
    messageTheme: "Development for all",
    majhi: "Sab da vikas",
    malwai: "Sab layi vikas",
    doabi: "Sab de layi taraqqi",
    puadhi: "Sab nu vikas",
  },
  {
    messageTheme: "Proud Punjab",
    majhi: "Punjab maan da",
    malwai: "Punjab garv wala",
    doabi: "Punjab naaz da",
    puadhi: "Punjab maan wala",
  },
];

/**
 * Priority Language Actions for Campaign HQ
 */
export const languagePriorityActions = [
  "Hire dialect consultants -- one each for Majhi, Malwai, Doabi, Puadhi -- to vet all campaign copy",
  "Create a dialect phrasebook for ground workers with constituency-wise greeting phrases and slogans",
  "Default to Roman Punjabi for all digital/social media. Establish Gurmukhi as print-only standard",
  "Audio-first strategy for low-literacy Malwa belt (Mansa, Muktsar, Bathinda, Barnala, Sangrur) -- WhatsApp voice broadcasts, FM radio, loudspeaker campaigns",
  "Language pride campaign -- position Congress as the defender of Punjabi against Hindi imposition. Make it a manifesto commitment: Punjabi-first education, Punjabi in all government recruitment exams, oppose CBSE's sidelining of Punjabi",
  "English for NRI outreach -- Doaba's NRI connections mean English-language digital outreach (targeting NRIs in Canada/UK/US) can indirectly influence voters back home through family networks",
];

/**
 * Data Gaps and Verification Needs
 */
export const languageDataGaps: DataGap[] = [
  {
    dataPoint: "2021+ language census data",
    status: "NOT_AVAILABLE",
    actionNeeded: "Monitor Census release (Census 2021 delayed)",
  },
  {
    dataPoint: "District-wise Hindi/English speaker percentages",
    status: "NOT_FOUND",
    actionNeeded: "Could derive from Census 2011 tables",
  },
  {
    dataPoint: "Social media Roman Punjabi vs Gurmukhi usage split",
    status: "ESTIMATED",
    actionNeeded: "Commission poll/survey if budget allows",
  },
  {
    dataPoint: "Dialect boundary precision at AC level",
    status: "APPROXIMATE",
    actionNeeded: "Verify with local linguists/academics",
  },
  {
    dataPoint: "English functional literacy by district",
    status: "ESTIMATED",
    actionNeeded: "Use NFHS/PLFS education data as proxy (estimated 15-25%)",
  },
];

/**
 * Complete Language & Linguistics KPI Data
 */
export const languageLinguisticsData: LanguageLinguisticsKPI = {
  motherTongueDistribution: languageDemographics,
  totalPopulation: 27743037,
  dataSource: "Census of India 2011 Language Report",
  dataVintage: "Census 2011; supplementary sources 2023-2026",

  functionalLayers: [
    { layer: "Official/Government", language: "Punjabi (Gurmukhi)", context: "All state govt business, assembly, courts (lower)" },
    { layer: "Education", language: "Punjabi, Hindi, English", context: "Punjabi-medium govt schools; English-medium private schools; Hindi as subject" },
    { layer: "Urban Commerce", language: "Punjabi, Hindi, English", context: "Trilingual in Ludhiana, Amritsar, Jalandhar, Mohali" },
    { layer: "Rural Life", language: "Punjabi (dialect varies)", context: "Overwhelmingly Punjabi in all 23 rural districts" },
    { layer: "Social Media", language: "Roman Punjabi, English, Hindi", context: "Dominated by Roman Punjabi (Latin script) among youth" },
    { layer: "Religious", language: "Punjabi (Gurmukhi), Sanskrit (Hindu), Arabic/Urdu (Muslim)", context: "Gurbani in Gurmukhi; Hindu rituals in Sanskritized Hindi" },
  ],

  scriptUsage: scriptUsageData,
  romanPunjabiShare: 0.7, // estimated dominant share
  englishFunctionalLiteracy: 0.2, // estimated 15-25%

  dialects: dialectInfo,
  dialectRegionReference: [
    { dialect: "majhi", region: "Majha", districts: ["Amritsar", "Tarn Taran", "Gurdaspur", "Pathankot"], approximateACs: 25, campaignPriority: "HIGH" },
    { dialect: "malwai", region: "Malwa", districts: ["Ludhiana", "Moga", "Sangrur", "Barnala", "Faridkot", "Patiala", "Fatehgarh Sahib", "Mansa", "Muktsar", "Bathinda", "Malerkotla"], approximateACs: 69, campaignPriority: "CRITICAL" },
    { dialect: "doabi", region: "Doaba", districts: ["Jalandhar", "SBS Nagar", "Kapurthala", "Hoshiarpur"], approximateACs: 23, campaignPriority: "HIGH" },
    { dialect: "puadhi", region: "Powadh", districts: ["Rupnagar", "SAS Nagar", "Patiala (partial)"], approximateACs: 8, campaignPriority: "MEDIUM" },
  ],

  overallLiteracy: 83.4,
  districtLiteracy: [
    { district: "Hoshiarpur", literacyRate: 84.6, stateAverage: 83.4, deviation: 1.2 },
    { district: "SAS Nagar", literacyRate: 83.8, stateAverage: 83.4, deviation: 0.4 },
    { district: "Jalandhar", literacyRate: 82.5, stateAverage: 83.4, deviation: -0.9 },
    { district: "Mansa", literacyRate: 61.8, stateAverage: 83.4, deviation: -21.6 },
    { district: "Muktsar", literacyRate: 65.8, stateAverage: 83.4, deviation: -17.6 },
    { district: "Barnala", literacyRate: 67.8, stateAverage: 83.4, deviation: -15.6 },
  ],
  lowLiteracyDistricts: ["Mansa", "Muktsar", "Barnala"],
  audioFirstStrategyDistricts: ["Mansa", "Muktsar", "Bathinda", "Barnala", "Sangrur"],

  languageEvents: [
    {
      date: "February 2025",
      title: "CBSE Punjabi Removal Controversy",
      description: "CBSE was accused of removing Punjabi from the list of regional languages in Punjab schools. Widespread outrage across party lines.",
      source: "KBS Chronicle, Feb 2025",
      congressOpportunity: true,
    },
    {
      date: "2020-present",
      title: "NEP Three-Language Formula Resistance",
      description: "National Education Policy 2020's three-language formula is perceived by many Punjabis as backdoor Hindi imposition. Punjab has resisted full implementation.",
      source: "Multiple sources",
      congressOpportunity: true,
    },
    {
      date: "June 2025",
      title: "Panjab University Protest",
      description: "Students demanded respect for Punjabi in official university communication.",
      source: "Janata Weekly, June 2025",
      congressOpportunity: true,
    },
  ],
  congressLanguagePosition: {
    do: [
      "Campaign aggressively in Punjabi. Make language pride a theme.",
      "Position Congress as the party that protects Punjabi identity, education, and cultural heritage.",
      "Use English for elite/urban professional outreach (Mohali, Ludhiana corporate) but frame Punjabi as the emotional connector.",
      "Raise the CBSE Punjabi issue and NEP language concerns as campaign talking points, especially in rural areas.",
    ],
    doNot: [
      "Do NOT use Hindi as primary campaign language in any constituency -- it signals cultural insensitivity.",
    ],
    specialCases: [
      { context: "Malerkotla (Muslim-majority)", recommendation: "Consider Shahmukhi script for micro-targeting Muslim voters" },
      { context: "Mohali IT corridor", recommendation: "Use Hindi/English for Hindu urban professional outreach" },
      { context: "Low-literacy Malwa districts", recommendation: "Prioritize audio-visual communication over text-heavy print" },
    ],
  },

  channelScriptMatrix: channelScriptMatrix,
  dialectSlogans: dialectSlogans,
  priorityActions: languagePriorityActions,

  dataGaps: languageDataGaps,
};

/**
 * Helper function to get dialect by constituency
 */
export function getDialectByConstituency(constituencyName: string): DialectInfo | undefined {
  const normalized = constituencyName.toLowerCase();
  for (const dialect of dialectInfo) {
    if (dialect.constituencies.some(c => normalized.includes(c.toLowerCase()))) {
      return dialect;
    }
  }
  return undefined;
}

/**
 * Helper function to get priority districts for audio-first strategy
 */
export function getAudioFirstDistricts(): string[] {
  return languageLinguisticsData.audioFirstStrategyDistricts;
}

/**
 * Helper function to get low literacy districts
 */
export function getLowLiteracyDistricts(): string[] {
  return languageLinguisticsData.lowLiteracyDistricts;
}

/**
 * Helper function to check if a district needs Hindi outreach
 */
export function needsHindiOutreach(district: string): boolean {
  const hindiAreas = ["Pathankot", "Fazilka", "Mohali"];
  return hindiAreas.some(area => district.toLowerCase().includes(area.toLowerCase()));
}

/**
 * Helper function to get script recommendation by channel
 */
export function getScriptForChannel(channel: string): { primary: string; secondary?: string; notes: string } | undefined {
  const entry = channelScriptMatrix.find(c =>
    channel.toLowerCase().includes(c.channel.toLowerCase())
  );
  if (entry) {
    return {
      primary: entry.primaryScript,
      secondary: entry.secondaryScript,
      notes: entry.notes,
    };
  }
  return undefined;
}

// ==========================================
// JAT SIKH DEMOGRAPHICS DATA (MP1-foundational/demographics/jat-sikh-clans.md)
// ==========================================

/**
 * Jat Sikh Population Estimates
 */
export const jatSikhPopulationData = {
  punjabTotalPopulation: "~30-31 million",
  sikhShareOfPunjab: "~58-60% (declining from 63.5% in 2001)",
  jatSikhShareOfTotal: "20-25% (6-8 million)",
  jatSikhShareOfSikh: "50-66%",
  jatSikhShareOfRural: "~35-40%",
  estimatedPopulation: "6-8 million",
  estimatedVotersAndDependents: "~6.5-7.5 million",
  keyInsight:
    "Some community sources claim up to 38% but academic consensus is 20-25%. Higher figures likely conflate all agriculturalist communities or include Jat Hindus.",
  verificationStatus: "PARTIALLY_VERIFIED" as const,
};

/**
 * Regional Distribution of Jat Sikhs
 */
export const regionalJatDistribution: RegionalJatDistribution[] = [
  {
    region: "Malwa",
    assemblySeats: 69,
    jatSikhConcentration: "Highest",
    concentrationPercent: "~30-35% of regional population",
    character:
      "Zamindari belt; large landholdings; farmer activism; suicide belt",
  },
  {
    region: "Majha",
    assemblySeats: 25,
    jatSikhConcentration: "Moderate-High",
    concentrationPercent: "~25-30%",
    character: "Panthic belt; religious; historically SAD-leaning",
  },
  {
    region: "Doaba",
    assemblySeats: 23,
    jatSikhConcentration: "Lower",
    concentrationPercent: "~15-20%",
    character: "NRI belt; Dalit politics dominant; most diverse",
  },
];

/**
 * District-level concentration (highest to lowest)
 */
export const districtConcentrations: DistrictConcentration[] = [
  {
    district: "Very High",
    concentration: "Very High",
    districts:
      "Bathinda, Mansa, Barnala, Sangrur, Muktsar, Faridkot, Moga, Fatehgarh Sahib, Patiala (rural)",
  },
  {
    district: "High",
    concentration: "High",
    districts:
      "Ludhiana (rural), Ferozepur, Tarn Taran, Amritsar (rural), Gurdaspur (rural)",
  },
  {
    district: "Moderate",
    concentration: "Moderate",
    districts: "Kapurthala, Jalandhar (rural), Hoshiarpur (rural), Rupnagar, SAS Nagar",
  },
  {
    district: "Lower",
    concentration: "Lower",
    districts:
      "Pathankot, Nawanshahr (Shaheed Bhagat Singh Nagar), urban constituencies",
  },
];

/**
 * Major Jat Sikh Clans (Gotra)
 */
export const jatSikhClans: JatSikhClan[] = [
  {
    name: "Sidhu-Brar",
    estimatedRank: "Largest clan",
    primaryRegion: "Malwa",
    primaryDistricts: ["Bathinda", "Mansa", "Muktsar", "Patiala"],
    notablePoliticians: [
      "Navjot Singh Sidhu (Congress)",
      "Amarinder Singh (ex-CM, formerly Congress/PLC/BJP)",
      "Simranjit Singh Mann (SAD-Amritsar)",
    ],
    notes:
      "Royal families of Patiala, Faridkot; historically ruling clan; massive prestige",
  },
  {
    name: "Sandhu",
    estimatedRank: "2nd largest",
    primaryRegion: "Majha",
    primaryDistricts: ["Amritsar", "Tarn Taran"],
    notablePoliticians: [],
    notes: "Originally from Lahore/Amritsar district; founder of Sukerchakia Misl",
  },
  {
    name: "Gill",
    estimatedRank: "Very large",
    primaryRegion: "Malwa",
    primaryDistricts: ["Ludhiana", "Moga", "Faridkot"],
    notablePoliticians: ["M.S. Gill (ex-IAS, Union Minister)"],
    notes:
      'Traditionally regarded as "superior"; some link to Sidhu-Virk-Shergill as descendants',
  },
  {
    name: "Dhillon",
    estimatedRank: "Very large",
    primaryRegion: "Malwa",
    primaryDistricts: ["Bathinda", "Sangrur"],
    notablePoliticians: [],
    notes: "Ancient clan; major zamindars; also found among Muslim Jats",
  },
  {
    name: "Bajwa",
    estimatedRank: "Large",
    primaryRegion: "Majha",
    primaryDistricts: ["Gurdaspur", "Pathankot"],
    notablePoliticians: ["Partap Singh Bajwa (Congress MP, ex-CLP leader)"],
    notes: "Prominent in border belt; Suryavanshi claim",
  },
  {
    name: "Randhawa",
    estimatedRank: "Large",
    primaryRegion: "Malwa",
    primaryDistricts: ["Gurdaspur", "Amritsar", "Kapurthala"],
    notablePoliticians: [],
    notes:
      "Early Sikh converts; Ajita Randhawa was disciple of Guru Nanak",
  },
  {
    name: "Grewal",
    estimatedRank: "Large",
    primaryRegion: "Malwa",
    primaryDistricts: ["Ludhiana", "Moga"],
    notablePoliticians: [],
    notes:
      "Notable for military/administrative roles; unique — practices clan endogamy",
  },
  {
    name: "Cheema",
    estimatedRank: "Large",
    primaryRegion: "Malwa",
    primaryDistricts: ["Moga", "Faridkot"],
    notablePoliticians: ["Harpal Cheema (AAP, Punjab Finance Minister)"],
    notes: "Also prominent among Muslim Jats in Pakistani Punjab",
  },
  {
    name: "Aulakh",
    estimatedRank: "Medium-Large",
    primaryRegion: "Malwa",
    primaryDistricts: ["Muktsar", "Faridkot", "Mansa"],
    notablePoliticians: [],
    notes: "Concentrated in cotton belt",
  },
  {
    name: "Dhaliwal",
    estimatedRank: "Medium-Large",
    primaryRegion: "Malwa",
    primaryDistricts: ["Sangrur", "Barnala", "Mansa"],
    notablePoliticians: [],
    notes: "Significant in Malwa agricultural belt",
  },
  {
    name: "Dhindsa",
    estimatedRank: "Medium",
    primaryRegion: "Malwa",
    primaryDistricts: ["Sangrur"],
    notablePoliticians: ["Sukhdev Singh Dhindsa (SAD, ex-Union Minister)"],
    notes: "Political family in Sangrur belt",
  },
  {
    name: "Toor",
    estimatedRank: "Medium",
    primaryRegion: "Malwa",
    primaryDistricts: ["Bathinda", "Mansa"],
    notablePoliticians: [],
    notes: "Concentrated in southern Malwa",
  },
  {
    name: "Bhullar",
    estimatedRank: "Medium",
    primaryRegion: "Majha",
    primaryDistricts: [],
    notablePoliticians: [],
    notes: 'One of the "asal Jat" clans',
    isAsalJat: true,
  },
  {
    name: "Maan",
    estimatedRank: "Medium",
    primaryRegion: "Malwa",
    primaryDistricts: ["Sangrur", "Barnala"],
    notablePoliticians: ["Bhagwant Mann (AAP, CM Punjab)"],
    notes: "Current CM belongs to this clan",
    isAsalJat: true,
  },
  {
    name: "Virk",
    estimatedRank: "Medium",
    primaryRegion: "Majha",
    primaryDistricts: ["Amritsar", "Gurdaspur"],
    notablePoliticians: [],
    notes: "Some link to Gill descendants",
  },
  {
    name: "Pannu",
    estimatedRank: "Medium",
    primaryRegion: "Malwa",
    primaryDistricts: ["Moga", "Faridkot"],
    notablePoliticians: [],
    notes: "",
  },
  {
    name: "Bains",
    estimatedRank: "Medium",
    primaryRegion: "Malwa",
    primaryDistricts: ["Ludhiana"],
    notablePoliticians: [],
    notes: "",
  },
  {
    name: "Warraich",
    estimatedRank: "Medium-Large",
    primaryRegion: "Majha",
    primaryDistricts: [],
    notablePoliticians: [],
    notes: "Also prominent in Pakistani Punjab",
  },
  {
    name: "Deol",
    estimatedRank: "Medium",
    primaryRegion: "Malwa",
    primaryDistricts: [],
    notablePoliticians: [],
    notes: "",
  },
  {
    name: "Uppal",
    estimatedRank: "Medium",
    primaryRegion: "Doaba",
    primaryDistricts: [],
    notablePoliticians: [],
    notes: "",
  },
  {
    name: "Kahlon",
    estimatedRank: "Medium",
    primaryRegion: "Doaba",
    primaryDistricts: ["Hoshiarpur"],
    notablePoliticians: [],
    notes: "",
  },
  {
    name: "Sodhi",
    estimatedRank: "Medium",
    primaryRegion: "Majha",
    primaryDistricts: ["Amritsar"],
    notablePoliticians: [],
    notes: "",
  },
  {
    name: "Hundal",
    estimatedRank: "Medium",
    primaryRegion: "Malwa",
    primaryDistricts: [],
    notablePoliticians: [],
    notes: "",
  },
];

/**
 * Clan Political Dynamics Patterns
 */
export const clanPoliticalPatterns = [
  {
    pattern: "Sidhu dominance in Malwa",
    description:
      "The Sidhu-Brar clan's historical royalty (Patiala, Faridkot states) gives them outsized prestige. Navjot Singh Sidhu's political career exploits this, but his mercurial nature has diluted the clan-bankability factor.",
  },
  {
    pattern: "Bajwa belt in Majha",
    description:
      "The Bajwa clan holds significant sway in Gurdaspur-Pathankot. Partap Singh Bajwa's rivalry with Sidhu exemplifies how clan competition within Congress weakens the party.",
  },
  {
    pattern: "Maan CM factor",
    description:
      "Bhagwant Mann (AAP) being from the Maan clan gives AAP organic Jat Sikh authenticity, particularly in Sangrur-Barnala belt.",
  },
  {
    pattern: "Clan rivalry exploitation",
    description:
      "Traditional village-level clan rivalries (e.g., Sidhu vs Sandhu in certain pockets, Grewal vs Gill in Ludhiana rural) can be exploited by fielding candidates from the locally dominant clan.",
  },
  {
    pattern: "Declining clan politics",
    description:
      "While clan identity matters at the village level, it has been substantially overtaken by party affiliation, economic issues, and anti-incumbency at the assembly level since 2017.",
  },
];

/**
 * Landholding Stratification of Jat Sikh Farmers
 */
export const landholdingStratification: LandholdingStratum[] = [
  {
    category: "Large farmers",
    landholdingSize: ">10 acres",
    shareOfJatSikhFarmers: "~15-20%",
    trend: "DECLINING",
  },
  {
    category: "Medium farmers",
    landholdingSize: "5-10 acres",
    shareOfJatSikhFarmers: "~25-30%",
    trend: "STABLE",
  },
  {
    category: "Small farmers",
    landholdingSize: "2-5 acres",
    shareOfJatSikhFarmers: "~30-35%",
    trend: "GROWING",
  },
  {
    category: "Marginal farmers",
    landholdingSize: "<2 acres",
    shareOfJatSikhFarmers: "~20-25%",
    trend: "GROWING_RAPIDLY",
  },
];

/**
 * Critical stat: 85% of Punjab farmers own less than 5 acres
 */
export const smallFarmerStatistic = {
  percentage: 85,
  description:
    "of Punjab farmers own less than 5 acres (Tribune India, April 2026)",
  implication:
    "The 'Jat Sikh landowner' archetype increasingly describes a marginal farmer in debt",
};

/**
 * Regional Landholding Variation
 */
export const regionalLandholding: RegionalLandholding[] = [
  {
    region: "Malwa",
    farmersWithMoreThan10Acres: "~27.5%",
    characteristics:
      "Highest average landholding. Zamindari belt. Highest proportion of large landholders.",
  },
  {
    region: "Doaba",
    farmersWithMoreThan10Acres: "~23%",
    characteristics:
      "More diversified economy, NRI remittances supplement agriculture.",
  },
  {
    region: "Majha",
    farmersWithMoreThan10Acres: "~17%",
    characteristics:
      "Lowest average. More urban-proximate, military employment historically significant.",
  },
];

/**
 * Agricultural Debt Crisis Data
 */
export const agriculturalDebtData: AgriculturalDebtIndicator[] = [
  {
    indicator: "Punjab total farm-related debt",
    figure: ">Rs 3 lakh crore (projected Rs 3.5L Cr by March 2025)",
    source: "PTC News/RBI/NABARD, Feb 2025",
  },
  {
    indicator: "Agricultural loan outstanding",
    figure: ">Rs 1 lakh crore",
    source: "RBI data as of March 2024",
  },
  {
    indicator: "Punjab cultivator debt",
    figure: "Rs 1.04 lakh crore",
    source: "Punjab State Farmers Commission study, Dec 2025",
  },
  {
    indicator: "Punjab total state debt/GSDP ratio",
    figure: ">46%",
    source: "Punjab Budget 2024-25",
  },
  {
    indicator: "Farmer suicides (NCRB 2023)",
    figure: "174 in Punjab (133 small landholders)",
    source: "NCRB 2023 report",
  },
  {
    indicator: "Suicide concentration",
    figure: "97%+ in Malwa region",
    source: "Joint study: Punjabi University/PAU/GNDU",
  },
];

/**
 * Debt Composition
 */
export const debtComposition = {
  privateBanks: "Rs 85,460 crore",
  cooperativeBanks: "Rs 10,000 crore",
  regionalRuralBanks: ">Rs 8,000 crore",
  note: "Much farm debt is informal (arrears to commission agents/arhtiyas), NOT captured in official figures. Real debt burden estimated at 1.5-2x the formal figure.",
};

/**
 * Economic Stress Drivers
 */
export const economicStressDrivers: EconomicStressDriver[] = [
  {
    factor: "Shrinking landholdings",
    description:
      "Each generation subdivides. Average holding has fallen from ~4.5 acres (1990s) to ~2.5 acres (2020s).",
  },
  {
    factor: "Rising input costs",
    description:
      "Diesel, fertilizers, pesticides — exacerbated by Iran/West Asia conflict driving up energy prices (2025-26).",
  },
  {
    factor: "Stagnant MSP returns",
    description:
      "Wheat-paddy cycle offers food security but declining real income.",
  },
  {
    factor: "Failed diversification",
    description:
      "Potato, maize, peas — price crashes in 2025-26 (potatoes crashed to Rs 2-6/kg).",
  },
  {
    factor: "Erratic weather",
    description:
      "Unseasonal rain, floods (2025 paddy), wind damage (2026 wheat). Estimated 15-20% wheat crop damage (2026).",
  },
  {
    factor: "NRI remittance dependency",
    description:
      "Strongest in Doaba; declining as migration pathways tighten. IELTS/coaching adds to household debt.",
  },
  {
    factor: "Social expenditure",
    description:
      "Tractors (status symbol + necessity), weddings, private schooling — major debt drivers beyond agriculture.",
  },
];

/**
 * OBC Reservation Demand Status
 */
export const obcDemandStatus: OBCDemandStatus = {
  currentClassification: "General Category",
  demandDrivers: [
    "Shrinking landholdings making Jat Sikhs economically backward",
    "Rising debt and farmer suicides",
    "Perception that reservation benefits have uplifted Dalits/OBCs while Jat Sikhs are left behind",
  ],
  politicalImplications:
    "Supporting or strategically engaging with the Jat Sikh OBC demand could consolidate the community's votes. However, it risks alienating existing OBC communities who oppose Jat inclusion.",
  keyPoliticalPositions: [
    "Amarinder Singh previously advocated for Jat OBC inclusion (2014)",
    "AAP government has not addressed the demand substantively",
  ],
};

/**
 * Historical Party Alignment
 */
export const partyAlignmentHistory: PartyAlignmentPeriod[] = [
  {
    period: "1966-1992",
    primaryAlignment: "Congress + SAD alternating",
    secondary:
      "Jat Sikhs split: landowning elite to SAD, others to Congress",
  },
  {
    period: "1992-2017",
    primaryAlignment: "SAD (Badal) dominant",
    secondary: "Congress as alternative; BJP through SAD alliance",
  },
  {
    period: "2017",
    primaryAlignment: "Congress surge (77 seats)",
    secondary: "AAP breakthrough (20 seats, mostly Malwa Jat belt)",
  },
  {
    period: "2022",
    primaryAlignment: "AAP landslide (92 seats)",
    secondary: "Congress collapse (18 seats); SAD destroyed (3 seats)",
  },
  {
    period: "2024 LS",
    primaryAlignment: "Mixed — Congress won 7, AAP 3, SAD 1",
    secondary: "INDIA alliance underperformed due to seat-sharing issues",
  },
];

/**
 * The 2022 Realignments Drivers
 */
export const realignment2022Drivers = [
  "Farm agitation aftermath (2020-21) — anger at both SAD (for initially supporting farm laws via BJP alliance) and Congress (for not doing enough)",
  'Economic desperation — AAP\'s "Delhi model" promise of free electricity, health, education',
  "Bhagwant Mann's Jat Sikh identity — made AAP culturally acceptable",
  "Desire for change after 5 years of Congress infighting",
];

/**
 * Current Jat Sikh Sentiment (2025-2026)
 */
export const currentJatSikhSentiment: JatSikhSentimentIndicator[] = [
  {
    party: "AAP",
    sentiment: "Growing dissatisfaction with Mann government over unfulfilled promises, debt crisis, drug issue",
    trend: "declining",
  },
  {
    party: "Congress",
    sentiment:
      "Anti-incumbency building, but party needs credible Jat Sikh leadership and economic messaging",
    trend: "rising",
  },
  {
    party: "SAD",
    sentiment:
      "Attempting rebrand under Sukhbir Badal's exit, but deep trust deficit remains",
    trend: "stable",
  },
  {
    party: "BJP",
    sentiment:
      "Actively courting non-Jat voters (Dalits, OBCs, urban Hindus); NOT competing for Jat Sikh votes directly",
    trend: "stable",
  },
  {
    party: "SAD-Amritsar",
    sentiment:
      "Simranjit Singh Mann's SAD-Amritsar retains some Majha panthic vote",
    trend: "stable",
  },
];

/**
 * Congress Strategy Points for Jat Sikh Outreach
 */
export const congressStrategyPoints: CongressStrategyPoint[] = [
  {
    point: "Economic message is paramount",
    recommendation:
      "Debt relief, MSP guarantee, crop insurance, diversification support — this community is in economic distress and will vote for whoever addresses it credibly.",
  },
  {
    point: "Candidate selection by clan dominance",
    recommendation:
      "In ~40-50 rural/rural-semi-urban constituencies where Jat Sikhs are the swing vote, candidate clan matters. Field candidates from the locally dominant gotra.",
  },
  {
    point: "Malwa is the battleground",
    recommendation:
      "With 69 seats and the highest Jat Sikh concentration, Malwa determines the government. Congress won big in Malwa in 2017 and collapsed in 2022. Regaining Malwa Jat Sikh trust is essential.",
  },
  {
    point: "OBC demand positioning",
    recommendation:
      "Craft a nuanced position — acknowledge Jat Sikh economic backwardness without alienating existing OBC groups. Consider proposing economic-criteria-based reservation.",
  },
  {
    point: "Clan rivalry management",
    recommendation:
      "Prevent Sidhu vs Bajwa type clan feuds from splitting the party. Unity matters more than clan representation at the top.",
  },
  {
    point: "Counter Mann's Jat authenticity",
    recommendation:
      "Congress needs a credible Jat Sikh face (or faces) who can match Bhagwant Mann's cultural authenticity. Multiple regional Jat Sikh leaders rather than one statewide figure may be more effective.",
  },
];

/**
 * Constituency Clusters for Jat Sikh Outreach
 */
export const constituencyClusters: ConstituencyCluster[] = [
  {
    priority: "Priority 1",
    description: "Jat Sikh dominant, must-win",
    seatGroups: [
      "Bathinda region (6-7 seats)",
      "Sangrur-Barnala-Mansa (8-10 seats)",
      "Muktsar-Faridkot-Moga (8-10 seats)",
      "Patiala rural (3-4 seats)",
      "Fatehgarh Sahib (2 seats)",
    ],
    totalSeats: "~30-35",
  },
  {
    priority: "Priority 2",
    description: "Significant Jat Sikh presence",
    seatGroups: [
      "Ludhiana rural (4-5 seats)",
      "Ferozepur (3-4 seats)",
      "Amritsar rural (4-5 seats)",
      "Gurdaspur rural (3-4 seats)",
      "Tarn Taran (3 seats)",
    ],
    totalSeats: "~17-21",
  },
  {
    priority: "Priority 3",
    description: "Mixed demographics",
    seatGroups: [
      "Kapurthala",
      "Jalandhar rural",
      "Hoshiarpur rural",
      "Rupnagar",
    ],
    totalSeats: "Jat Sikhs influential but not dominant due to high Dalit/OBC population",
  },
];

/**
 * Complete Jat Sikh Intelligence Report
 */
export const jatSikhIntelligenceReport: JatSikhIntelligenceReport = {
  reportDate: "19 May 2026",
  classification: "Strategic — Core Community Analysis",
  verificationStatus: "PARTIALLY_VERIFIED",
  population: jatSikhPopulationData,
  regionalDistribution: regionalJatDistribution,
  districtConcentrations: districtConcentrations,
  clans: jatSikhClans,
  clanPoliticalPatterns: clanPoliticalPatterns,
  landholdingStratification: landholdingStratification,
  regionalLandholding: regionalLandholding,
  agriculturalDebt: agriculturalDebtData,
  economicStressDrivers: economicStressDrivers,
  obcDemandStatus: obcDemandStatus,
  partyAlignmentHistory: partyAlignmentHistory,
  currentSentiment: currentJatSikhSentiment,
  constituencyClusters: constituencyClusters,
  congressStrategyPoints: congressStrategyPoints,
  sources: [
    { number: 1, citation: "Wikipedia — 'Jat Sikh' article (demographics, clans, agriculture, political history)" },
    { number: 2, citation: "Wikipedia — 'Sandhu' article (clan ranking)" },
    { number: 3, citation: "ThePrint — 'Malwa, Majha, Doaba: Divided by rivers, each Punjab region has distinct political identity' (Jan 2022)" },
    { number: 4, citation: "PTC News — 'Punjab's farm debt crisis deepens as loans cross Rs 3 lakh crore' (Feb 2025)" },
    { number: 5, citation: "Tribune India — 'Rising debt, erratic weather widen cracks in farm economy' (Apr 2026)" },
    { number: 6, citation: "People's Archive of Rural India — 'War in Iran, debt in Punjab' (Apr 2026)" },
    { number: 7, citation: "KBS Sidhu Substack — 'Jat Sikhs, OBC Status and Punjab 2027' (Jul 2025)" },
    { number: 8, citation: "Tribune India — 'BJP's Punjab gambit: Courting non-Jatt voters' (Jan 2026)" },
    { number: 9, citation: "Countercurrents — 'Jats: A brief history' (2021)" },
    { number: 10, citation: "NCRB 2023 — Farmer suicide data" },
    { number: 11, citation: "FAO/Punjabi University study — Regional landholding distribution" },
    { number: 12, citation: "Joyce Pettigrew — 'Robber Noblemen' (ethnographic study of Jat Sikh clan structure)" },
  ],
  dataGaps: [
    { dataPoint: "District-wise Jat Sikh population", status: "No census data since 1931", actionNeeded: "Commission targeted survey in key constituencies" },
    { dataPoint: "Clan-wise voter registration", status: "Not available", actionNeeded: "Field research through local Congress workers" },
    { dataPoint: "Current Jat Sikh voting intention (2026)", status: "No recent poll", actionNeeded: "Commission opinion poll in Malwa/Majha/Doaba" },
    { dataPoint: "Informal debt per household", status: "Not captured in official data", actionNeeded: "Survey through farmer unions, arhtiyas" },
    { dataPoint: "NRI household percentage by constituency", status: "Partial data", actionNeeded: "Cross-reference with income-tax/passport data" },
    { dataPoint: "Jat Sikh voter turnout differential", status: "Not available", actionNeeded: "Analyze booth-level 2022 data by demographic" },
  ],
};

// ==========================================
// OBC COMMUNITIES DATA (from research-M2/MP1-foundational/demographics/obc-communities.md)
// ==========================================

/**
 * OBC Reservation Framework in Punjab
 */
export const obcReservationFramework: OBCReservationFramework[] = [
  {
    category: "SC",
    reservationPercent: 25,
    populationShare: 31.9,
    notes: "Scheduled Castes - highest reservation despite similar population to OBC",
  },
  {
    category: "OBC/BC",
    reservationPercent: 12,
    populationShare: 31.32,
    notes: "Lowest among major states - NCBC recommended 25% in May 2024, unimplemented",
  },
  {
    category: "General",
    reservationPercent: 63,
    populationShare: 36.37,
    notes: "Jats, Khatris, Aroras, Brahmins",
  },
];

/**
 * Major OBC Communities
 */
export const sainiCommunity: OBCCommunity = {
  name: "Saini",
  alternateNames: ["Sainiji"],
  populationEstimate: "8-10 lakh",
  populationLakh: "8-10",
  religion: ["Sikh", "Hindu"],
  geography: {
    primary: ["Hoshiarpur", "SBS Nagar", "Jalandhar", "Rupnagar", "Kapurthala", "Pathankot", "Amritsar", "Gurdaspur"],
    concentration: "Doaba and parts of Majha - sub-mountainous region",
  },
  traditionalOccupation: "Agriculture",
  economy: "Moderately prosperous agrarian community; significant landholdings in Doaba",
  identity: "Claim Yaduvanshi Rajput/Surasena lineage from Mathura region. Strong clan identity.",
  politicalDisposition: "Congress-leaning in Doaba; has shifted between Congress and AAP. Community is politically organised.",
  keyLeaders: [
    { name: "VERIFICATION_NEEDED", role: "Current MLAs/leaders", verificationStatus: "VERIFICATION_NEEDED" },
  ],
  bcStatus: {
    declared: "September 2016",
    notification: "3/01/2010-RC-2/133-143",
    status: "Added to Punjab BC list",
  },
  strategicNotes: "Concentrated in Doaba's constituencies, where even a 5% vote swing can change outcomes. They have historical Congress affinity but AAP made inroads in 2022.",
  verificationStatus: "VERIFIED",
};

export const kambojCommunity: OBCCommunity = {
  name: "Kamboj",
  alternateNames: ["Kamboh"],
  populationEstimate: "10-12 lakh",
  populationLakh: "10-12",
  religion: ["Sikh", "Hindu"],
  geography: {
    primary: ["Ferozepur", "Fazilka", "Patiala", "Sangrur", "Mansa", "Muktsar", "Faridkot"],
    concentration: "Malwa and border districts - over 2.5 lakh voters in Ferozepur LS seat alone (2024)",
  },
  traditionalOccupation: "Agriculture",
  economy: "Significant land-owning agrarian community; well-represented in farming",
  identity: "Ancient community tracing origins to Kamboja kingdom. Strong biradari (brotherhood) identity.",
  politicalDisposition: "Politically assertive and organised. Present across party lines -- AAP MLA Jagdip Singh Goldy Kamboj (Jalalabad), Congress leaders, SAD figures.",
  keyLeaders: [
    { name: "Jagdip Singh Goldy Kamboj", role: "AAP MLA", party: "AAP" },
    { name: "Hardial Singh Kamboj", role: "Former MLA", party: "Congress" },
    { name: "Shaminder Singh Khinda", role: "Chairman", party: "Punjab Agro" },
  ],
  bcStatus: {
    declared: "1959",
    notification: "Initially for five years, made indefinite from 1979",
    status: "Declared BC in 1959",
  },
  strategicNotes: "Most politically mobilised OBC community. They dominate parts of Malwa and can swing 8-10 assembly seats. Their demand for proportional ticket allocation (27%) is a bargaining chip for any party.",
  verificationStatus: "VERIFIED",
};

export const ramgarhiaCommunity: OBCCommunity = {
  name: "Ramgarhia",
  alternateNames: ["Tarkhan", "Dhiman"],
  populationEstimate: "6-8 lakh",
  populationLakh: "6-8",
  religion: ["Sikh"],
  geography: {
    primary: ["Jalandhar", "Kapurthala", "Hoshiarpur", "Ludhiana", "Amritsar"],
    concentration: "Doaba has highest density; widespread across Punjab",
  },
  traditionalOccupation: "Carpentry",
  economy: "Significant presence in construction, furniture manufacturing, and small-scale industry. Moderate economic status with upward mobility.",
  identity: "Named after Fort Ramgarhia (Amritsar). Strong community identity tied to Sikh martial heritage.",
  politicalDisposition: "Traditionally Congress-leaning; community has been politically active since the Praja Mandal movement.",
  keyLeaders: [],
  bcStatus: {
    declared: "August 2001",
    notification: "8/21/99-2SCWI/982",
    status: "Added as 'Ramgarhia, Tarkhan & Dhiman'",
  },
  strategicNotes: "Strong presence in Doaba and urban centres. Politically active since Praja Mandal movement.",
  verificationStatus: "VERIFIED",
};

export const labanaCommunity: OBCCommunity = {
  name: "Labana",
  alternateNames: ["Lubana"],
  populationEstimate: "5-7 lakh",
  populationLakh: "5-7",
  religion: ["Sikh"],
  geography: {
    primary: ["Gurdaspur", "Pathankot", "Hoshiarpur", "Rupnagar"],
    concentration: "Historically nomadic; now settled across Punjab, pockets of Malwa",
  },
  traditionalOccupation: "Transport/Trading",
  economy: "Economically diverse -- some prosperous transport operators, others marginal farmers",
  identity: "Claim Rajput ancestry. Historical connection to Sikh Gurus -- Guru Nanak's companion Bhai Mardana is associated with the community. Strong Sikh identity.",
  politicalDisposition: "Historically Congress-leaning; community mobilises around Sikh identity and economic issues.",
  keyLeaders: [],
  bcStatus: {
    declared: "October 1956",
    notification: "28585-WG-56/6014",
    status: "Declared BC October 1956",
  },
  strategicNotes: "Economically diverse community with transport/trucking focus. Strong Sikh identity.",
  verificationStatus: "VERIFIED",
};

export const majorOBCCommunities: OBCCommunity[] = [
  sainiCommunity,
  kambojCommunity,
  ramgarhiaCommunity,
  labanaCommunity,
];

/**
 * Artisan/Service Communities
 */
export const artisanCommunities: ArtisanCommunity[] = [
  {
    community: "Kumhar",
    alternateNames: ["Prajpatti"],
    traditionalOccupation: "Pottery, ceramics",
    populationEstimate: "3-4 lakh",
    populationLakh: "3-4",
    geography: "Statewide; rural concentration",
    bcStatus: { declared: "1958", notification: undefined },
  },
  {
    community: "Sunar",
    alternateNames: ["Swarankar", "Suniar"],
    traditionalOccupation: "Goldsmithing, jewellery",
    populationEstimate: "2-3 lakh",
    populationLakh: "2-3",
    geography: "Statewide; market towns",
    bcStatus: { declared: "2016", notification: undefined },
  },
  {
    community: "Nai",
    alternateNames: ["Hajjam"],
    traditionalOccupation: "Barber, traditional services",
    populationEstimate: "2-3 lakh",
    populationLakh: "2-3",
    geography: "Statewide; rural villages",
    bcStatus: { declared: "1956", notification: undefined },
  },
  {
    community: "Teli",
    traditionalOccupation: "Oil pressing",
    populationEstimate: "1-2 lakh",
    populationLakh: "1-2",
    geography: "Malwa, border districts",
    bcStatus: { declared: "1959", notification: undefined },
  },
  {
    community: "Dhobi",
    traditionalOccupation: "Laundry/washing",
    populationEstimate: "1-2 lakh",
    populationLakh: "1-2",
    geography: "Statewide",
    bcStatus: { declared: "1958", notification: undefined },
  },
  {
    community: "Lohar",
    traditionalOccupation: "Blacksmithing",
    populationEstimate: "1-2 lakh",
    populationLakh: "1-2",
    geography: "Statewide; rural",
    bcStatus: { declared: "1959", notification: undefined },
  },
  {
    community: "Jheer",
    alternateNames: ["Kahar", "Jhinwar"],
    traditionalOccupation: "Water-carrying, fishing",
    populationEstimate: "1-2 lakh",
    populationLakh: "1-2",
    geography: "Majha, Doaba river belts",
    bcStatus: { declared: "1955", notification: undefined },
  },
];

/**
 * Other Notable BC Communities
 */
export const otherNotableBCCommunities = [
  { name: "Arain", notes: "Muslim-origin agricultural community; small presence in border areas" },
  { name: "Gujjar", notes: "Pastoral community; concentrations in Pathankot, Gurdaspur, Rupnagar foothills" },
  { name: "Rai Sikh", notes: "Significant in Ferozepur, Fazilka border belt; declared BC 1959" },
  { name: "Sikh Rajput", notes: "Added to BC list October 2016" },
  { name: "Yadav/Ahir", notes: "Added to BC list October 2016; concentrations in Malwa" },
  { name: "Kachhi", alternateNames: ["Shakya", "Maurya", "Kushwaha"], notes: "Added 2003; agriculture-related; Doaba concentration" },
];

/**
 * OBC Political Under-Representation Data
 */
export const obcPoliticalRepresentation: OBCPoliticalRepresentation[] = [
  {
    institution: "Gram Panchayat Sarpanches",
    totalPositions: 13236,
    obcRepresentation: 0,
    representationPercent: 0,
  },
  {
    institution: "Panches",
    totalPositions: 0,
    obcRepresentation: 0,
    representationPercent: 3,
  },
  {
    institution: "Panchayat Samiti Chairpersons",
    totalPositions: 154,
    obcRepresentation: 0,
    representationPercent: 0,
  },
  {
    institution: "Panchayat Samiti Zones",
    totalPositions: 32,
    obcRepresentation: 0,
    representationPercent: 1,
  },
  {
    institution: "Zila Parishad Chairpersons",
    totalPositions: 23,
    obcRepresentation: 0,
    representationPercent: 0,
  },
  {
    institution: "Zila Parishad Zones",
    totalPositions: 357,
    obcRepresentation: 0,
    representationPercent: 0,
  },
];

/**
 * Jat Sikh OBC Demand History
 */
export const jatSikhOBCDemandHistory: JatSikhOBCDemand[] = [
  {
    period: "March 2014",
    event: "SAD-BJP government declared Jats and Jat Sikhs as Backward Classes",
    government: "SAD-BJP",
    outcome: "Widely seen as election sop weeks before 2014 Lok Sabha election; never effectively implemented",
  },
  {
    period: "2012",
    event: "Congress formally supported OBC reservation for Jat Sikhs",
    government: "Congress",
    outcome: "Termed them 'socially and educationally backward'",
  },
  {
    period: "2016",
    event: "Jat Sikh Council proposed OBC status only for farmers with less than 5 acres",
    government: undefined,
    outcome: "Economic condition ceiling proposed; not implemented",
  },
  {
    period: "May 2024",
    event: "NCBC recommended Punjab increase OBC reservation to 25%",
    government: undefined,
    outcome: "Recommendation within Supreme Court's 50% ceiling; unimplemented as of May 2026",
  },
  {
    period: "2026",
    event: "Jat Sikhs remain General category",
    government: undefined,
    outcome: "Demand persists but politically sensitive -- granting OBC status to dominant landowning community would dilute benefits for existing OBC groups",
  },
];

/**
 * Regional OBC Distribution
 */
export const regionalOBCDistribution: RegionalOBCDistribution[] = [
  {
    region: "Malwa",
    assemblySeats: 69,
    dominantOBCGroups: ["Kamboj", "Saini", "Teli", "Kumhar", "Yadav", "Arain", "Rai Sikh"],
    estimatedOBCShare: "30-33%",
    keyConstituencies: ["Ferozepur", "Fazilka", "Patiala", "Sangrur", "Mansa", "Muktsar", "Bathinda"],
  },
  {
    region: "Majha",
    assemblySeats: 25,
    dominantOBCGroups: ["Saini", "Ramgarhia", "Labana", "Kumhar", "Nai"],
    estimatedOBCShare: "28-32%",
    keyConstituencies: ["Amritsar", "Gurdaspur", "Pathankot", "Tarn Taran"],
  },
  {
    region: "Doaba",
    assemblySeats: 23,
    dominantOBCGroups: ["Saini", "Kamboj", "Ramgarhia", "Labana", "Kumhar", "Kachhi"],
    estimatedOBCShare: "33-35%",
    keyConstituencies: ["Jalandhar", "Kapurthala", "Hoshiarpur", "SBS Nagar"],
  },
];

/**
 * OBC Data Gaps
 */
export const obcDataGaps: OBCDataGap[] = [
  {
    gap: "Precise OBC population by district",
    status: "NOT_FOUND -- no caste census since 1931",
    actionNeeded: "Extrapolate from BC voter registration data",
  },
  {
    gap: "Individual community population",
    status: "ESTIMATED only",
    actionNeeded: "Community-level voter registration analysis needed",
  },
  {
    gap: "OBC voting patterns by community",
    status: "NOT_FOUND",
    actionNeeded: "Post-2022 election survey data needed",
  },
  {
    gap: "Current OBC MLAs in Punjab Assembly",
    status: "VERIFICATION_NEEDED",
    actionNeeded: "Assembly records review",
  },
  {
    gap: "Community-specific organisations and leaders",
    status: "PARTIAL",
    actionNeeded: "Field intelligence needed",
  },
];

/**
 * Strategic Recommendations for Congress on OBC
 */
export const obcStrategyRecommendations: OBCStrategyRecommendation[] = [
  {
    priority: 1,
    recommendation: "Champion the NCBC recommendation to increase OBC reservation from 12% to 25%",
    rationale: "Single policy position could consolidate OBC support across all communities and regions",
    targetCommunities: ["All OBC communities"],
    targetSeats: "All 117",
  },
  {
    priority: 2,
    recommendation: "Target OBC ticket allocation of at least 20-25% (25-30 of 117 seats)",
    rationale: "Kamboj community's 27% demand provides a benchmark",
    targetCommunities: ["Kamboj", "Saini", "Ramgarhia", "Labana"],
    targetSeats: "25-30",
  },
  {
    priority: 3,
    recommendation: "Prioritise Doaba (23 seats) where OBC concentration is highest",
    rationale: "Saini, Ramgarhia, and Kamboj communities can swing 8-10 seats",
    targetCommunities: ["Saini", "Ramgarhia", "Kamboj"],
    targetSeats: "8-10 in Doaba",
  },
  {
    priority: 4,
    recommendation: "Address panchayat under-representation -- advocate for lowering the 20% threshold",
    rationale: "Current threshold excludes most OBC-concentrated villages from reservation benefit",
    targetCommunities: ["All OBC communities"],
  },
  {
    priority: 5,
    recommendation: "Handle Jat Sikh OBC demand cautiously",
    rationale: "Focus on expanding reservation pie rather than redistributing from existing OBC communities",
    targetCommunities: ["Jat Sikh", "Existing OBC"],
  },
  {
    priority: 6,
    recommendation: "Engage OBC community organisations actively",
    rationale: "OBC Reservation Implementation Forum, Kamboj Bhaichara Maha Sammelan, and community-specific bodies are active political actors",
    targetCommunities: ["All OBC communities"],
  },
];

/**
 * Complete OBC Intelligence Report
 */
export const obcIntelligenceReport: OBCIntelligenceReport = {
  reportDate: "19 May 2026",
  classification: "Strategic -- Core Community Analysis",
  verificationStatus: "PARTIALLY_VERIFIED",

  // Executive Summary
  totalOBCPopulation: "8.5-9 million",
  totalOBCVoters: "Approximately 31-32% of state total",
  obcReservationPercent: 12,
  ncbcRecommendedReservation: 25,
  reservationGap: 13,

  // Reservation Framework
  reservationFramework: obcReservationFramework,

  // Major Communities
  majorCommunities: majorOBCCommunities,
  artisanServiceCommunities: artisanCommunities,
  otherNotableCommunities: otherNotableBCCommunities,

  // Political Under-Representation
  politicalRepresentation: obcPoliticalRepresentation,

  // Jat Sikh OBC Demand
  jatSikhDemandHistory: jatSikhOBCDemandHistory,
  jatSikhCurrentStatus: "Jat Sikhs remain General category as of May 2026. The demand persists but is politically sensitive.",
  jatSikhPoliticalImplications: "This is a double-edged sword. Supporting Jat Sikh OBC status could alienate existing OBC communities who already receive only 12% reservation. Opposing it alienates Jat Sikhs. The most viable position may be to advocate for increasing the total OBC reservation pie to 25% (as NCBC recommended) before addressing any new community inclusion.",

  // Regional Distribution
  regionalDistribution: regionalOBCDistribution,

  // Data Gaps
  dataGaps: obcDataGaps,

  // Strategic Recommendations
  strategicRecommendations: obcStrategyRecommendations,

  // Sources
  sources: [
    { number: 1, citation: "Wikipedia -- 'Scheduled castes in Punjab' -- caste composition data (OBC at 31.3%)" },
    { number: 2, citation: "Tribune India -- 'OBC count at 32% in Punjab, but mere 3% in panchayats' (22 April 2026) -- RTI data on political representation" },
    { number: 3, citation: "MyInd.net -- 'Centre proposes higher OBC reservation quota in Punjab' (May 2024) -- NCBC recommendation data" },
    { number: 4, citation: "SMSPunjab.in -- 'List of BC/OBC Declared by Punjab Government' -- official BC caste list with notification dates" },
    { number: 5, citation: "Tribune India -- 'Kamboj community leaders pitch for 27% share' (19 February 2024) -- community mobilisation data" },
    { number: 6, citation: "The Hindu -- 'Punjab gives BC status to Jat Sikhs' (5 March 2014) -- Jat Sikh BC history" },
    { number: 7, citation: "Times of India -- 'Congress for OBC quota to Jat Sikhs' (14 June 2012) -- Congress position" },
    { number: 8, citation: "Wikipedia -- 'Kamboj' -- community demographics and history" },
    { number: 9, citation: "Wikipedia -- 'Demographics of Punjab, India' -- state-level population data" },
    { number: 10, citation: "Supreme Court of India -- State of Punjab v. Davinder Singh (August 2024) -- sub-classification judgment" },
    { number: 11, citation: "Tribune India -- 'Jat Sikh Council for granting OBC status to farmers' (22 February 2016) -- economic condition proposal" },
  ],
};

// ==========================================
// OCCUPATION STRUCTURE DATA
// Derived from: research-M2/MP1-foundational/demographics/occupation-full.md
// Data Currency: Census 2011, Agriculture Census 2015-16, PLFS 2023-24, MSME/Udyam 2023-24
// ==========================================

/**
 * Workforce Sectoral Distribution
 */
export const sectoralDistribution: SectorDistribution[] = [
  { sector: "Agriculture (cultivators + agricultural labourers)", sharePercent: 42, notes: "Declining from ~55% in 2001; still largest single sector" },
  { sector: "Industry (manufacturing + construction + utilities)", sharePercent: 24, notes: "MSME-dominated; construction growing" },
  { sector: "Services (trade, transport, education, health, govt, other)", sharePercent: 34, notes: "Fastest growing; govt employment significant" },
];

/**
 * Land Holdings Size Classes (Agriculture Census 2015-16)
 */
export const landHoldingSizeClasses: LandHoldingSizeClass[] = [
  { sizeClass: "Marginal", sizeRangeHectares: "Below 1.00", numberOfHoldings: 154412, areaThousandHa: 734, averageSizeHa: 0.48 },
  { sizeClass: "Small", sizeRangeHectares: "1.00 - 2.00", numberOfHoldings: 245340, areaThousandHa: 3690, averageSizeHa: 1.50 },
  { sizeClass: "Semi-Medium", sizeRangeHectares: "2.00 - 4.00", numberOfHoldings: 305220, areaThousandHa: 8846, averageSizeHa: 2.90 },
  { sizeClass: "Medium", sizeRangeHectares: "4.00 - 10.00", numberOfHoldings: 253850, areaThousandHa: 16039, averageSizeHa: 6.32 },
  { sizeClass: "Large", sizeRangeHectares: "10.00+", numberOfHoldings: 67650, areaThousandHa: 13328, averageSizeHa: 19.71 },
];

export const landHoldingSummary: LandHoldingSummary = {
  totalHoldings: 1026472,
  totalAreaThousandHa: 42637,
  averageSizeHa: 4.15,
  stateAverageNationalComparison: "Punjab average (4.15 Ha) is significantly higher than national average (~1.08 Ha)",
  marginalSmallHoldingsPercentOfTotal: 39,
  marginalSmallHoldingsPercentOfArea: 10,
  mediumLargeHoldingsPercentOfTotal: 31,
  mediumLargeHoldingsPercentOfArea: 69,
  largestCategoryByNumber: "Semi-medium (29.7%)",
  averageSizeDecline: "Average holding size has been declining — was ~4.63 Ha in 2000-01",
  dataStatus: "VERIFICATION_NEEDED: Agriculture Census 2021-22 data collection completed but full state-level tables not yet publicly released as of May 2026",
};

/**
 * Cultivators vs Agricultural Labourers (Census 2011)
 */
export const cultivatorLabourerSummary: CultivatorLabourerSummary = {
  cultivators: { category: "Cultivators (land-owning farmers)", persons: "~14.2 lakh", shareOfTotalWorkers: "~18-20%" },
  agriculturalLabourers: { category: "Agricultural Labourers", persons: "~24.5 lakh", shareOfTotalWorkers: "~32-35%" },
  totalAgriculturalWorkers: { category: "Total Agricultural Workers", persons: "~38.7 lakh", shareOfTotalWorkers: "~50-52%" },
  labourerToCultivatorRatio: "Nearly 2:1 — one of the highest ratios in India",
  scCommunityPercentage: "Agricultural labourers are predominantly from SC communities (~65-70%)",
  migrantSeasonalWorkers: "Significant presence of migrant agricultural labourers from UP and Bihar (estimated 8-10 lakh seasonal)",
};

/**
 * Tenancy & Lease Farming
 */
export const tenancyData: TenancyData = {
  leasedAreaPercent: 30,
  affectedFarmers: "Tenant farmers have no access to institutional credit, crop insurance, or MSP procurement directly",
  leaseRateRange: "Rs 40,000-80,000/acre/year depending on district and water availability",
  highestConcentration: "Malwa region (Bathinda, Mansa, Muktsar, Fazilka)",
  electoralHook: "Congress promise of formalizing tenancy could resonate",
};

/**
 * Crop-wise Occupational Distribution
 */
export const cropDistribution: CropDistribution[] = [
  { crop: "Wheat", areaLakhHa: 35.0, cultivatorHouseholds: "~7.5 lakh", notes: "Nearly universal in rabi" },
  { crop: "Paddy/Rice", areaLakhHa: 31.0, cultivatorHouseholds: "~6.5 lakh", notes: "Nearly universal in kharif" },
  { crop: "Cotton", areaLakhHa: 3.5, cultivatorHouseholds: "~1.0 lakh", notes: "Malwa — Bathinda, Mansa, Fazilka" },
  { crop: "Sugarcane", areaLakhHa: 0.9, cultivatorHouseholds: "~0.5 lakh", notes: "Doaba — Hoshiarpur, Kapurthala" },
  { crop: "Maize", areaLakhHa: 1.6, cultivatorHouseholds: "~0.8 lakh", notes: "Scattered" },
  { crop: "Potato/Vegetables", areaLakhHa: 1.0, cultivatorHouseholds: "~0.5 lakh", notes: "Doaba, especially Jalandhar/Hoshiarpur" },
  { crop: "Kinnow/Fruits", areaLakhHa: 0.5, cultivatorHouseholds: "~0.2 lakh", notes: "Abohar-Fazilka belt" },
];

/**
 * MSME Metrics
 */
export const msmeMetrics: MSMEMetrics = {
  totalMSMERegistrations: 320000,
  udyogAadhaarRegistrations: 154071,
  msmeEmployment: 4086000,
  microPercent: 85,
  smallPercent: 13,
  mediumPercent: 2,
};

/**
 * Key Industrial Clusters
 */
export const industrialClusters: IndustrialCluster[] = [
  { cluster: "Ludhiana", district: "Ludhiana", subSector: "Hosiery/Knitwear/Textiles", significance: "~90% of India's woolen hosiery; major export hub to Europe/Russia" },
  { cluster: "Ludhiana", district: "Ludhiana", subSector: "Bicycle Manufacturing", significance: "~92% of India's bicycles; global leader" },
  { cluster: "Ludhiana", district: "Ludhiana", subSector: "Auto Parts/Light Engineering", significance: "Significant MSME cluster" },
  { cluster: "Jalandhar", district: "Jalandhar", subSector: "Sports Goods", significance: "~60-75% of India's sports goods; export-oriented" },
  { cluster: "Jalandhar", district: "Jalandhar", subSector: "Hand Tools", significance: "Major MSME cluster" },
  { cluster: "Jalandhar", district: "Jalandhar", subSector: "Leather/Footwear", significance: "Growing sector" },
  { cluster: "Mandi Gobindgarh", district: "Fatehgarh Sahib", subSector: "Steel/Rolling Mills", significance: "Steel re-rolling cluster" },
  { cluster: "Batala", district: "Gurdaspur", subSector: "Castings/Forgings", significance: "Engineering cluster" },
  { cluster: "Mohali/SAS Nagar", district: "SAS Nagar", subSector: "IT/ITeS", significance: "Emerging; Quark City, IT City" },
  { cluster: "Rajpura", district: "Patiala", subSector: "Food Processing", significance: "Industrial focal point" },
  { cluster: "Barnala", district: "Barnala", subSector: "Textiles/Processing", significance: "Emerging" },
];

/**
 * Construction & Brick Kiln Workers
 */
export const constructionWorkers: ConstructionWorkers = {
  registeredConstructionWorkers: 700000,
  brickKilnWorkers: 350000,
  brickKilnSeason: "Oct-Jun",
  migrantWorkersFromUP: 40,
  migrantWorkersFromBihar: 21,
  totalMigrantWorkers: 600000,
};

/**
 * Large Scale Industry
 */
export const largeScaleIndustry: LargeScaleIndustry = {
  majorUnits: ["Vardhman Textiles (Ludhiana)", "Nestle (Moga)", "PepsiCo (multiple)", "ITC (Kapurthala)", "Mahindra & Mahindra (Mohali)"],
  industrialFocalPoints: 23,
  districtsCovered: 23,
  newPolicyNote: "New industrial policy announced January 2026 with focus on MSME upgradation and AI integration",
};

/**
 * Government Employment
 */
export const governmentEmployment: GovernmentEmploymentSummary = {
  departments: [
    { department: "School Education (teachers)", sanctionedPosts: 120000, approxFilled: 95000, notes: "25,000 new hires announced Mar 2026" },
    { department: "Police", sanctionedPosts: 37500, approxFilled: 30000, notes: "5,000 vacancies being filled (2026)" },
    { department: "Health & Family Welfare", sanctionedPosts: 47500, approxFilled: 27500, notes: "50%+ vacancies; 68,949 sanctioned in health + medical education, 34,949 vacant" },
    { department: "PSPCL (Electricity)", sanctionedPosts: 25000, approxFilled: 20000, notes: "5,300 vacancies in pipeline" },
    { department: "Revenue/Administration", sanctionedPosts: 15000, approxFilled: 12000, notes: "Patwaris, tehsildars, clerical" },
    { department: "Higher Education", sanctionedPosts: 10000, approxFilled: 8000, notes: "Universities and colleges" },
  ],
  totalSanctioned: "~3.5-4.0 lakh",
  totalFilled: "~2.8-3.2 lakh",
  jobsProvided36Months: 52606,
  reservationPolicyNote: "2026 cabinet approved job reservations for specific categories",
  pensionLiability: "Significant fiscal burden; 5th Punjab Pay Commission recommended 27% increase",
  electoralSignificance: "Govt job aspirants are a massive voting bloc; Punjab Youth Outlook Survey shows govt job is #1 preference",
};

/**
 * Private Services & Self-Employment
 */
export const privateServiceCategories: PrivateServiceCategory[] = [
  { category: "Retail/Trade", estimatedWorkers: "8-10 lakh", notes: "Shopkeepers, traders, mandi arhtiyas" },
  { category: "Transport (trucking, taxis, buses)", estimatedWorkers: "5-6 lakh", notes: "Punjab has one of India's highest per-capita truck ownership" },
  { category: "Education (private schools/colleges)", estimatedWorkers: "3-4 lakh", notes: "Large private school network" },
  { category: "Healthcare (private)", estimatedWorkers: "1.5-2 lakh", notes: "Clinics, hospitals, diagnostic labs" },
  { category: "IT/ITeS", estimatedWorkers: "0.5-1 lakh", notes: "Concentrated in Mohali; growing" },
  { category: "Hospitality/Tourism", estimatedWorkers: "1-1.5 lakh", notes: "Amritsar (Golden Temple), religious tourism" },
  { category: "Professional Services (CA, lawyers, etc.)", estimatedWorkers: "1-1.5 lakh", notes: "Across all districts" },
  { category: "Self-employed/Informal", estimatedWorkers: "8-12 lakh", notes: "Large informal sector" },
];

/**
 * Student Population
 */
export const studentPopulation: StudentPopulationSummary = {
  institutions: [
    { institutionType: "Universities (state + central + private)", estimatedEnrollment: "3-4 lakh" },
    { institutionType: "Colleges (arts, science, commerce)", estimatedEnrollment: "5-6 lakh" },
    { institutionType: "ITIs/Polytechnics", estimatedEnrollment: "1-1.5 lakh" },
    { institutionType: "Professional (engineering, medical, law)", estimatedEnrollment: "1-2 lakh" },
    { institutionType: "School (Class 9-12)", estimatedEnrollment: "15-18 lakh" },
  ],
  totalInEducationAge15Plus: "25-30 lakh",
  politicalNotes: [
    "Students are not in the workforce but are a politically active demographic",
    "Student visa rejections and immigration policy changes are major political concerns",
  ],
  overseasAspirationNote: "High overseas education aspiration; IELTS/PTE coaching industry is massive (~5,000+ centers)",
};

/**
 * NRI Diaspora by Country
 */
export const nriCountryProfiles = [
  { country: "Canada", estimatedPopulation: "6-8 lakh (Punjab-origin)", keyCharacteristics: "Largest recent migration wave; student → PR pathway dominant" },
  { country: "UK", estimatedPopulation: "5-6 lakh (Punjab-origin)", keyCharacteristics: "Historical migration (1960s-80s); Southall, Birmingham, Gravesend" },
  { country: "Australia", estimatedPopulation: "1-2 lakh (Punjab-origin)", keyCharacteristics: "Fastest growing destination since 2015" },
  { country: "USA", estimatedPopulation: "2-3 lakh (Punjab-origin)", keyCharacteristics: "Professionals; California, New York, Chicago" },
  { country: "Italy", estimatedPopulation: "1-1.5 lakh (Punjab-origin)", keyCharacteristics: "Agricultural/dairy work; Doaba origin" },
  { country: "UAE/Gulf", estimatedPopulation: "2-3 lakh (Punjab-origin)", keyCharacteristics: "Semi-skilled workers; construction, services" },
  { country: "Germany", estimatedPopulation: "0.5-1 lakh", keyCharacteristics: "Emerging destination; skilled migration" },
  { country: "Other EU (Greece, Spain, Portugal)", estimatedPopulation: "0.5-1 lakh", keyCharacteristics: "Agricultural labour" },
];

/**
 * NRI Household Concentration by Region
 */
export const nriHouseholdConcentration = [
  { region: "Doaba", concentration: "HIGHEST (~40-45% of households have NRI connection)", keyDistricts: "Jalandhar, Hoshiarpur, Kapurthala, Nawanshahr (Shaheed Bhagat Singh Nagar)" },
  { region: "Malwa", concentration: "Moderate (~15-20%)", keyDistricts: "Moga, Faridkot, Muktsar, Barnala" },
  { region: "Majha", concentration: "Lower (~10-15%)", keyDistricts: "Amritsar, Gurdaspur, Tarn Taran, Pathankot" },
];

/**
 * Remittance Metrics
 */
export const remittanceMetrics = {
  indiaTotalRemittances2024: 118700000000,
  punjabEstimatedShare: "8-10% of national total = ~$9-12 billion",
  topSourceCountries: "USA (27.7%), UAE (19.2%), UK (10.8%) — national pattern; Punjab-specific: Canada, UK, Australia, Italy",
  remittanceToGSDPRatio: "Estimated 10-15% — among highest for Indian states",
};

/**
 * NRI Summary
 */
export const nriSummary: NRISummary = {
  diasporaByCountry: nriCountryProfiles,
  householdConcentration: nriHouseholdConcentration,
  remittanceMetrics: remittanceMetrics,
  doabaNRIHubNote: "Doaba is known as the 'NRI Hub' of Punjab — nearly 45% of households have at least one NRI member",
  electoralSignificance: "NRI issues — immigration policy, student visa rules, NRI property disputes, emigration facilitation — are decisive in 15-20 Doaba seats and 10-15 Malwa seats",
};

/**
 * Occupation-Voter Priority Mapping
 */
export const occupationVoterMapping: OccupationVoterMapping[] = [
  { occupationCategory: "Large/medium farmers (>4 Ha)", estimatedVoterBase: "~12-15% voters", topPriorityIssues: ["MSP", "procurement", "canal water", "power subsidy", "debt relief"] },
  { occupationCategory: "Small/marginal farmers (<2 Ha)", estimatedVoterBase: "~15-18% voters", topPriorityIssues: ["MSP", "input costs", "loan waiver", "insurance", "diversification"] },
  { occupationCategory: "Tenant farmers", estimatedVoterBase: "~8-10% voters", topPriorityIssues: ["Tenancy rights", "credit access", "crop insurance", "lease law"] },
  { occupationCategory: "Agricultural labourers", estimatedVoterBase: "~18-20% voters", topPriorityIssues: ["Minimum wage", "MGNREGA days", "housing", "SC scholarships", "alcohol/drugs"] },
  { occupationCategory: "MSME/industrial workers", estimatedVoterBase: "~10-12% voters", topPriorityIssues: ["Jobs", "skill training", "factory conditions", "labour rights"] },
  { occupationCategory: "Govt job aspirants/unemployed youth", estimatedVoterBase: "~10-12% voters", topPriorityIssues: ["Government jobs", "unemployment allowance", "exams", "reservation"] },
  { occupationCategory: "Government employees", estimatedVoterBase: "~5-6% voters", topPriorityIssues: ["Pay commission", "pension", "transfer policy", "DA/DR"] },
  { occupationCategory: "Traders/business", estimatedVoterBase: "~8-10% voters", topPriorityIssues: ["GST simplification", "industrial policy", "electricity rates", "law & order"] },
  { occupationCategory: "Transport operators", estimatedVoterBase: "~3-4% voters", topPriorityIssues: ["Fuel prices", "toll taxes", "road conditions", "overloading rules"] },
  { occupationCategory: "NRI households", estimatedVoterBase: "~8-10% voters (influential)", topPriorityIssues: ["Immigration policy", "NRI property courts", "emigration ease", "dual voting"] },
  { occupationCategory: "Students (18-22)", estimatedVoterBase: "~5-8% voters", topPriorityIssues: ["Jobs", "education quality", "IELTS costs", "drug rehabilitation"] },
];

/**
 * Data Gaps
 */
export const occupationDataGaps: { item: string; description: string }[] = [
  { item: "Agriculture Census 2021-22", description: "Full Punjab tables not yet released" },
  { item: "Census 2021", description: "Delayed indefinitely — Occupational data still relies on 2011 Census" },
  { item: "PLFS Punjab-specific sectoral breakdown", description: "Available but requires MoSPI portal access" },
  { item: "MSME district-wise employment", description: "Registration data exists but employment self-reported" },
  { item: "NRI population by district", description: "No official systematic count — Estimates range widely" },
  { item: "Informal sector workers", description: "Largest data gap — No survey since NSS 68th Round (2011-12)" },
  { item: "Migrant worker count", description: "Post-COVID migration patterns need fresh survey" },
];

/**
 * Complete Occupation Report
 */
export const occupationReport: OccupationReport = {
  reportDate: "19 May 2026",
  dataCurrency: "Census 2011 baseline, Agriculture Census 2015-16, PLFS 2023-24, MSME/Udyam registrations 2023-24",
  status: "PARTIAL — Agriculture Census 2021-22 results awaited for updated landholding data",
  workforceOverview: {
    sectors: sectoralDistribution,
    unemploymentRate: 7.7,
    nationalUnemploymentRate: 6.7,
    labourForceParticipation: "Lower than national average; female LFPR particularly weak",
    dataSource: "PLFS 2023-24 (July 2023-June 2024), Census 2011 as structural baseline",
    electoralSignificance: "Agriculture employs the largest bloc but is shrinking. Youth unemployment is the top political issue. MSME distress in Ludhiana/Jalandhar affects urban votes. NRI households in Doaba are influential swing voters.",
  },
  landHoldings: {
    sizeClasses: landHoldingSizeClasses,
    summary: landHoldingSummary,
  },
  cultivatorLabourer: cultivatorLabourerSummary,
  tenancy: tenancyData,
  crops: cropDistribution,
  msme: msmeMetrics,
  industrialClusters: industrialClusters,
  construction: constructionWorkers,
  largeIndustry: largeScaleIndustry,
  governmentEmployment: governmentEmployment,
  privateServices: privateServiceCategories,
  students: studentPopulation,
  nri: nriSummary,
  occupationVoterMapping: occupationVoterMapping,
  dataGaps: {
    gaps: occupationDataGaps,
    totalGaps: occupationDataGaps.length,
  },
};

// ==========================================
// VULNERABLE OCCUPATIONS DATA
// Derived from: occupation-vulnerable.md (PLFS 2025)
// ==========================================

/**
 * Overall Unemployment Rates (PLFS 2025)
 */
export const overallUnemployment: OverallUnemployment = {
  overall: { metric: "Overall unemployment (15+)", punjab: 6.7, national: 5.3 },
  rural: { metric: "Rural unemployment", punjab: 7.4, national: 4.2 },
  urban: { metric: "Urban unemployment", punjab: 5.8, national: 6.7 },
  youth1529: { metric: "Youth unemployment (15-29)", punjab: 17.0, national: 9.9 },
  ruralYouth: { metric: "Rural youth unemployment (15-29)", punjab: 18.7, national: 8.3 },
  urbanYouth: { metric: "Urban youth unemployment (15-29)", punjab: 14.5, national: 13.6 },
};

/**
 * Educated Unemployment (PLFS 2025)
 */
export const educatedUnemployment: EducatedUnemployment[] = [
  { educationLevel: "Not literate", unemploymentRate: 0.8 },
  { educationLevel: "Literate & up to primary", unemploymentRate: 1.0 },
  { educationLevel: "Middle", unemploymentRate: 2.6 },
  { educationLevel: "Secondary", unemploymentRate: 2.8 },
  { educationLevel: "Higher secondary", unemploymentRate: 13.8 },
  { educationLevel: "Diploma/certificate", unemploymentRate: 8.9 },
  { educationLevel: "Graduate", unemploymentRate: 11.6 },
  { educationLevel: "Postgraduate & above", unemploymentRate: 9.4 },
  { educationLevel: "Secondary & above (aggregate)", unemploymentRate: 9.3 },
];

/**
 * Youth Unemployment by Gender (PLFS 2025, Age 15-29)
 */
export const youthUnemploymentByGender: YouthUnemploymentByGender[] = [
  { category: "Rural", male: 14.7, female: 29.9, person: 18.7 },
  { category: "Urban", male: 12.1, female: 23.7, person: 14.5 },
  { category: "Rural+Urban", male: 13.6, female: 27.7, person: 17.0 },
];

/**
 * State Unemployment Bureau Data (2025)
 */
export const unemploymentBureauData: UnemploymentBureauData = {
  registeredApplicants: 122842,
  date: "September 2025",
  unskilledPercent: 58,
  skilledPercent: 42,
  keyMismatch: "Mismatch between available jobs and aspirations/qualifications of applicants",
};

/**
 * Distress Migration & Brain Drain
 */
export const distressMigration: DistressMigration = {
  farmersNotWantingChildrenInAgriculture: 75,
  studySource: "Prof Ghuman study, 2025",
  pushFactors: ["Unemployment", "Corruption", "Drug addiction fear", "Social insecurity", "Bad politico-administrative system"],
  investmentGSDPRatio: "Roughly half the national average",
  annualGrowth2014to2023: 4.62,
  nationalAverageGrowth: 5.67,
  industrialUnitsShutDown: 18700,
  shutDownPeriod: "2007-2014",
  amritsarShareOfShutDowns: 43,
};

/**
 * Disguised Unemployment
 */
export const disguisedUnemployment: DisguisedUnemployment = {
  agricultureEmploymentShare: 24.6,
  agricultureGSDPShare: 23.2,
  mechanizationImpact: "Farm mechanization has created surplus labour on family farms",
  historicalEmploymentDrop: "Agricultural employment dropped from 57.3% of GSDP (1970-71) to 23.2% (2022-23)",
  estimatedRange: "Academic estimates for Indian agriculture typically range 15-25%; Punjab's high mechanization likely pushes this higher",
  verificationNeeded: "Exact disguised unemployment rate for Punjab not available in recent official data",
};

/**
 * Discouraged Workers & NEET
 */
export const discouragedWorkers: DiscouragedWorkers = {
  labourForceParticipationRate: 47.0,
  nationalLFPR: 46.0,
  workerPopulationRatio: 39,
  nationalWPR: 41.4,
  gap: "Gap between LFPR (47%) and WPR (39%) means many youth are seeking work but not finding it",
  neetRateNote: "State-specific NEET rate for Punjab not found. ILO estimates India's overall youth NEET at ~20%. Punjab likely exceeds this given higher unemployment.",
};

/**
 * Non-Working Population
 */
export const nonWorkingPopulation: NonWorkingPopulation = {
  homemakers: {
    femaleLFPRContext: "India's female Labour Force Participation Rate is among the lowest globally (~37% in 2025 per PLFS)",
    estimate: "Census 2011 showed ~55-60% of Punjabi women in the 'non-worker' category, majority as homemakers. Current proportions likely similar.",
  },
  pensioners: {
    population60Plus: "6.8% of population is 60+ (Census 2011), projected ~8-9% by 2026",
    projected2026: "8-9%",
    pensionBurden: "57.5% of Punjab's revenue consumed by salaries, pensions, and subsidies (NITI Aayog 2025)",
  },
  disabled: {
    census2011Percent: "2.2%",
    census2011Persons: "~6 lakh persons",
    drugAddictionImpact: "Drug addiction crisis creates a large population of chronically ill/recovering individuals outside the workforce",
  },
};

/**
 * Vulnerable Occupations
 */
export const vulnerableOccupations: VulnerableOccupation[] = [
  {
    category: "Domestic Workers",
    description: "Predominantly women from Dalit/SC communities and migrant labour from UP/Bihar",
    estimate: "India has ~4.75 million domestic workers nationally (ILO estimates)",
    keyLocations: ["Ludhiana", "Amritsar", "Jalandhar", "Mohali"],
    demographics: "Overwhelmingly women, predominantly from Dalit/SC communities and migrant labour from UP/Bihar",
    verificationNeeded: "Punjab-specific count not available in recent data",
  },
  {
    category: "Child Labour",
    description: "Census 2011: ~73,714 child workers in Punjab (age 5-14)",
    estimate: "~73,714 (Census 2011)",
    keyLocations: ["Rural Punjab: agriculture", "Brick kilns", "Dhaba/tea stall work", "Domestic service"],
    demographics: "Children age 5-14",
    verificationNeeded: "Current child labour estimates specific to Punjab post-2011 not found",
  },
  {
    category: "Sex Workers & Beggars",
    description: "Urban centres have documented red-light areas and begging populations",
    estimate: "No reliable current estimates for Punjab found in research",
    keyLocations: ["Ludhiana", "Amritsar", "Jalandhar"],
    verificationNeeded: "No reliable current estimates for Punjab found in research. These populations are typically undercounted in official surveys.",
  },
  {
    category: "Ragpickers & Waste Workers",
    description: "Predominantly from migrant communities (UP, Bihar) and Dalit castes",
    estimate: "Urban cities generate significant waste picking employment",
    demographics: "Migrant communities (UP, Bihar) and Dalit castes",
    verificationNeeded: "Punjab-specific count not available",
  },
];

/**
 * Bonded Labour Data
 */
export const bondedLabourData: BondedLabourData = {
  sector: "Brick Kiln Industry",
  description: "Families trapped in debt bondage across thousands of kilns in Malwa and Doaba regions",
  affectedCommunities: "Dalit/SC communities disproportionately affected",
  legalFramework: "Bonded Labour System (Abolition) Act 1976 — enforcement remains weak",
  indiaTotalEstimate: "~8 million bonded labourers (Walk Free Foundation/Global Slavery Index)",
  punjabConcentration: "Brick kilns in Malwa and Doaba regions are well-documented sites",
  verificationNeeded: "State-specific bonded labour survey data not found",
};

/**
 * Religious Occupations - SGPC Data
 */
export const sgpcData = {
  totalStaffa: 11000,
  goldenTempleStaff: 2800,
  managedRegions: ["Punjab", "Haryana", "Himachal Pradesh", "Chandigarh"],
  keyFunctionaries: [
    "Granthi (Reader/custodian of Guru Granth Sahib — principal religious official)",
    "Ragi (Devotional hymn singer/kirtan)",
    "Kathavachak (Religious preacher/expositor)",
    "Dhadhi (Ballad singers of Sikh history)",
    "Sewadar (Volunteer/attendant — many paid staff)",
  ],
};

/**
 * Religious Occupations - Non-SGPC Estimate
 */
export const nonSGPCReligiousEstimate = {
  villageGurdwarasEstimate: "~15,000-20,000 gurdwaras including village-level",
  totalReligiousWorkersEstimate: "20,000-30,000 including SGPC and non-SGPC",
  verificationNeeded: "No official census of gurdwara count or religious workers",
};

/**
 * Religious Occupations - Deras
 */
export const deraReligiousWorkers = [
  {
    deraType: "Dera Sacha Sauda",
    description: "Head: Gurmeet Ram Rahim Singh (incarcerated). Millions of followers.",
    followerCount: "50-70 lakh across Punjab, Haryana, Rajasthan, HP",
    employmentScale: "Thousands of full-time sewadars",
  },
  {
    deraType: "Radha Soami Satsang Beas",
    description: "Head: Baba Gurinder Singh Dhillon. Cross-caste following.",
    followerCount: "20-30 lakh in Punjab; 5,000+ centres globally",
    employmentScale: "Thousands of full-time sewadars",
  },
  {
    deraType: "Dera Sachkhand Ballan",
    description: "Head: Sant Niranjan Dass (Padma Shri Jan 2026). Ravidassia community.",
    followerCount: "~14% of Punjab's Dalit population (~4.5% of total electorate)",
    employmentScale: "Significant full-time sewadar employment",
  },
  {
    deraType: "Other Deras (Noormahal, Nirankari, Namdhari)",
    description: "Hundreds of deras across Punjab with varying follower bases",
    followerCount: "Several lakhs combined",
    employmentScale: "Hundreds of sewadars combined",
    verificationNeeded: "No comprehensive count of dera-employed religious workers",
  },
];

/**
 * Other Religious Workers
 */
export const otherReligiousWorkers = [
  {
    type: "Hindu Pujaris/Pandits",
    count: "VERIFICATION_NEEDED",
    details: "Significant population in Hindu-majority areas of Doaba and urban centres",
  },
  {
    type: "Muslim Imams/Maulvis",
    count: "VERIFICATION_NEEDED",
    details: "Punjab's Muslim population is small (~1.5-2% per Census 2011) but concentrated in Malerkotla and border areas",
  },
  {
    type: "Christian Pastors/Church Workers",
    count: "VERIFICATION_NEEDED",
    details: "Primarily in Dalit Christian communities, especially in Doaba region. Growth among Dalit/SC communities.",
  },
];

/**
 * Political Significance for Congress
 */
export const vulnerableOccupationsPoliticalSignificance = {
  educatedUnemployedYouth: "17% youth unemployment = hundreds of thousands of frustrated young voters. Graduate unemployment of 11.6-20.6% = the most politically aware and mobilizable segment. AAP promised 'Ghar Ghar Naukri' — failure to deliver is Congress's primary opening.",
  femaleYouth: "27.7% female youth unemployment is more than double the male rate. Historically under-mobilized but potentially transformative voting bloc. Congress can target with employment guarantee + skill training + safety platform.",
  ruralUnemployed: "Rural unemployment (7.4%) exceeds urban (5.8%) — contradicts narrative that cities are the job crisis. Farm distress + mechanization displacement = rural anger at incumbency. Landless Dalit labourers doubly hit: seasonal unemployment + caste discrimination.",
  vulnerableInformalWorkers: "Brick kiln bonded labourers (predominantly Dalit/SC) — politically organized through Dalit parties and unions. Child labour and domestic workers: invisible but families vote. Dera followers: significant voting blocs controlled by dera heads.",
  religiousWorkers: "SGPC/religious workers are influential opinion-makers in every village. Granthi at village gurdwara = community leader whose views shape voting. Congress needs to avoid SGPC/Akali Dal alignment perception while reaching granthis as community influencers.",
};

/**
 * Data Gaps for Vulnerable Occupations
 */
export const vulnerableOccupationsDataGaps = [
  { item: "District-wise unemployment for all 117 constituencies", description: "Exact figures not available at assembly constituency level" },
  { item: "NEET rate for Punjab youth", description: "State-specific rate not found in current sources" },
  { item: "Bonded labour count in brick kilns by district", description: "No state-specific survey data found" },
  { item: "Number of gurdwaras and religious workers by constituency", description: "No official census of gurdwara count or religious workers" },
  { item: "Dera-wise follower count and sewadar employment", description: "No comprehensive count available" },
  { item: "Female non-participation rate by district and caste", description: "Detailed district/caste disaggregation not found" },
];

/**
 * Complete Vulnerable Occupations Report
 */
export const vulnerableOccupationsReport: VulnerableOccupationsReport = {
  reportDate: "19 May 2026",
  dataSource: "PLFS 2025 (Jan-Dec 2025), Punjab Economic Survey 2025-26, Times of India, The Hindu, Tribune India, Census 2011, academic studies",
  overallUnemployment: overallUnemployment,
  educatedUnemployment: educatedUnemployment,
  youthUnemploymentByGender: youthUnemploymentByGender,
  unemploymentBureau: unemploymentBureauData,
  distressMigration: distressMigration,
  disguisedUnemployment: disguisedUnemployment,
  discouragedWorkers: discouragedWorkers,
  nonWorkingPopulation: nonWorkingPopulation,
  vulnerableOccupations: vulnerableOccupations,
  bondedLabour: bondedLabourData,
  religiousOccupations: {
    sgpc: sgpcData,
    nonSGPCGurdwaraEstimate: nonSGPCReligiousEstimate.totalReligiousWorkersEstimate,
    totalReligiousWorkersEstimate: nonSGPCReligiousEstimate.totalReligiousWorkersEstimate,
    deraWorkers: deraReligiousWorkers,
    otherReligiousWorkers: otherReligiousWorkers,
  },
  politicalSignificance: vulnerableOccupationsPoliticalSignificance,
  dataGaps: vulnerableOccupationsDataGaps,
};

/**
 * Helper function to get unemployment rate by category
 */
export function getUnemploymentRate(category: string): number {
  const rates: Record<string, number> = {
    overall: overallUnemployment.overall.punjab,
    rural: overallUnemployment.rural.punjab,
    urban: overallUnemployment.urban.punjab,
    youth: overallUnemployment.youth1529.punjab,
    ruralYouth: overallUnemployment.ruralYouth.punjab,
    urbanYouth: overallUnemployment.urbanYouth.punjab,
  };
  return rates[category] ?? 0;
}

/**
 * Helper function to get female youth unemployment rate
 */
export function getFemaleYouthUnemployment(): number {
  return youthUnemploymentByGender.find(g => g.category === "Rural+Urban")?.female ?? 0;
}

/**
 * Helper function to check if unemployment is a critical issue
 */
export function isUnemploymentCritical(): boolean {
  return overallUnemployment.youth1529.punjab > 15;
}

// ==========================================
// GIS LAYERS DATA (MP1-foundational/geography/gis-layers-static.md)
// ==========================================

import type {
  GISIntelligenceStack,
  PunjabBoundaryData,
  PollingInfrastructureData,
  PunjabDemographicData,
  InfrastructureData,
  PoliticalGeographyData,
  CongressPerformanceHistory,
  ElectionResult,
} from "@/types/gis-layers-types";

/**
 * GIS Intelligence Metadata
 */
export const gisMetadata = {
  researchDate: "19 May 2026",
  sourcesConsulted: 14,
  dataFreshness: "2024 (most recent: Lok Sabha 2024 election data, NextGen DISE deployed 2024)",
  confidence: "MEDIUM" as const,
  coordinateSystem: "EPSG:4326 (WGS84)",
};

/**
 * Layer 1: Punjab Administrative Boundaries
 */
export const punjabBoundaryData: PunjabBoundaryData = {
  state: "Punjab",
  districts: 23,
  tehsils: 82,
  blocks: 150,
  villages: 12600,
  assemblyConstituencies: 117,
  parliamentaryConstituencies: 13,
  coordinateSystem: "EPSG:4326 (WGS84)",
  regions: [
    { name: "Malwa", seats: 69 },
    { name: "Majha", seats: 25 },
    { name: "Doaba", seats: 23 },
  ],
};

/**
 * Layer 2: Polling Infrastructure Data
 */
export const pollingInfrastructureData: PollingInfrastructureData = {
  totalBooths: 24000,
  estimatedBooths2024LS: 25000,
  webcastingCoverage: 100,
  nextGenSystems: {
    ppms: true, // Polling Personnel Management System
    pams: true, // Poll Activity Monitoring System
    qis: true, // Queue Information System (WhatsApp chatbot)
  },
  updateCadence: {
    boothLists: "per_election",
    gpsCoordinates: "per_deployment",
    voterCounts: "continuous",
  },
};

/**
 * Layer 3: Punjab Demographics
 */
export const punjabDemographicData: PunjabDemographicData = {
  totalPopulation: 27743037,
  scPercentage: 31.9,
  upperCastePercentage: 33,
  obcPercentage: 25,
  jatSikhPercentage: 22.5, // midpoint of 20-25%
  literacyRate: 83.4,
  dataVintage: "Census 2011",
  dataGaps: [
    "Village-level caste sub-group data (Jat, Saini, Kamboj, Ravidassia, etc.)",
    "Post-2011 Census population data",
    "Religion distribution at village level",
    "Gram Panchayat boundary shapefiles",
  ],
};

/**
 * Punjab Caste Breakdown (State-Level, Census/Academic)
 */
export const punjabCasteBreakdown = {
  upperCaste: {
    percentage: 33,
    description: "Brahmin, Khatri, Arora, Baniya, Rajput, Ahluwalia",
  },
  scheduledCaste: {
    percentage: 31.9, // Highest SC proportion in India
    religiousBreakdown: {
      sikh: 60.8,
      hindu: 38.8,
    },
    majorSubGroups: [
      "Ravidassia/Ramdasia/Chamar",
      "Ad-Dharmi",
      "Valmiki/Mazhabi Sikh",
      "Jatav",
    ],
  },
  obc: {
    percentage: 25,
    communities: ["Saini", "Kamboj", "Labana", "Tarkhan", "Nai"],
  },
  jatSikh: {
    percentage: 22.5, // 20-25% range
    description: "Dominant landowning community, political influence disproportionate to numbers",
  },
};

/**
 * Layer 4: Infrastructure Data
 */
export const infrastructureData: InfrastructureData = {
  roadNetwork: {
    source: "NIC Bharat Maps, OSM (NextGIS daily updates)",
    formats: ["Shapefile", "GeoJSON"],
    updateFrequency: "monthly",
  },
  canalNetwork: {
    source: "India-WRIS, Central Water Commission",
    formats: ["Shapefile", "WMS"],
    updateFrequency: "static_with_seasonal",
  },
  mobileCoverage: {
    source: "TRAI coverage maps, DoT data, OpenSignal",
    formats: ["Raster", "Polygon"],
    cost: "Free-Rs 2L",
  },
  facilityTypes: [
    "road",
    "canal",
    "mobile_network",
    "electricity",
    "health_facility",
    "education_institution",
    "bank_atm",
    "railway",
  ],
};

/**
 * Layer 5: Political Geography Data
 */
export const congressPerformanceHistory: CongressPerformanceHistory[] = [
  {
    election: "2012 Assembly",
    congressSeats: 46,
    congressVotePercent: 35.1,
    position: "2nd (behind SAD-BJP 56)",
    keyTrend: "Strong opposition",
  },
  {
    election: "2017 Assembly",
    congressSeats: 77,
    congressVotePercent: 38.5,
    position: "1st (majority)",
    keyTrend: "Peak performance",
  },
  {
    election: "2022 Assembly",
    congressSeats: 18,
    congressVotePercent: 22.0,
    position: "2nd (AAP won 92)",
    keyTrend: "Massive collapse",
  },
  {
    election: "2024 Lok Sabha",
    congressSeats: 0,
    congressVotePercent: 12,
    position: "5th",
    keyTrend: "Near-wipeout in LS",
  },
];

/**
 * Election Results Data for Maps
 */
export const electionResultsData: ElectionResult[] = [
  {
    year: 2012,
    electionType: "assembly",
    congressSeats: 46,
    congressVoteShare: 35.1,
    congressPosition: 2,
    winner: "SAD-BJP",
    turnout: 78,
  },
  {
    year: 2017,
    electionType: "assembly",
    congressSeats: 77,
    congressVoteShare: 38.5,
    congressPosition: 1,
    winner: "Congress",
    turnout: 77,
  },
  {
    year: 2022,
    electionType: "assembly",
    congressSeats: 18,
    congressVoteShare: 22.0,
    congressPosition: 2,
    winner: "AAP",
    turnout: 75,
  },
  {
    year: 2024,
    electionType: "lok_sabha",
    congressSeats: 0,
    congressVoteShare: 12,
    congressPosition: 5,
    winner: "AAP",
    turnout: 70,
  },
];

/**
 * Political Geography Data
 */
export const politicalGeographyData: PoliticalGeographyData = {
  acWiseResultsYears: [2012, 2017, 2022],
  lsResultsYears: [2014, 2019, 2024],
  congressPerformance: congressPerformanceHistory,
  marginCategories: {
    safe: 10, // >10%
    competitive: 5, // 5-10%
    marginal: 5, // <5%
  },
  dataSources: [
    "ECI Statistical Reports (eci.gov.in)",
    "Lok Dhaba (Ashoka University)",
    "Dataful.in",
    "CEO Punjab",
  ],
  updateCadence: "Per election (static after declaration)",
};

/**
 * Recommended Platform Stack
 */
export const gisPlatformStack = {
  desktop: ["QGIS 3.x (free)"],
  spatialDatabase: "PostgreSQL + PostGIS",
  webDashboard: ["Leaflet.js", "Mapbox GL JS"],
  dataPipeline: ["Python (geopandas, shapely, fiona)"],
  alternative: ["ESRI ArcGIS + ArcGIS Online"],
};

/**
 * Implementation Priority Order
 */
export const gisImplementationPriority = [
  {
    priority: 1,
    layer: "Layer 1 (Boundaries)",
    timeline: "Week 1",
    estimatedCost: "Free (IGISMap + Census)",
    rationale: "Foundation for all other layers",
  },
  {
    priority: 2,
    layer: "Layer 5 (Political)",
    timeline: "Week 1-2",
    estimatedCost: "Free (ECI + Lok Dhaba)",
    rationale: "Immediate strategic value",
  },
  {
    priority: 3,
    layer: "Layer 2 (Polling)",
    timeline: "Week 2-3",
    estimatedCost: "Free-Rs 1L (CEO Punjab data + PAMS access)",
    rationale: "Campaign planning critical",
  },
  {
    priority: 4,
    layer: "Layer 3 (Demographics)",
    timeline: "Week 3-4",
    estimatedCost: "Free (Census) + Rs 2-5L (caste survey)",
    rationale: "Targeting requires caste data",
  },
  {
    priority: 5,
    layer: "Layer 4 (Infrastructure)",
    timeline: "Week 4-6",
    estimatedCost: "Free (OSM, WRIS, HMIS) + Rs 1-2L (mobile coverage)",
    rationale: "Development messaging support",
  },
];

/**
 * Total Estimated Cost
 */
export const gisTotalEstimatedCost = {
  total: "Rs 3-8 Lakhs",
  freeDataCoverage: "80% of needed layers are publicly available",
  paidComponents: [
    "ML Infomap shapefiles (~Rs 50K)",
    "Caste survey field work (~Rs 2-5L)",
    "Mobile coverage data (~Rs 1-2L)",
  ],
};

/**
 * Strategic Value Points for Congress
 */
export const gisStrategicValue = [
  {
    point: 1,
    title: "Micro-targeting by caste geography",
    description: "Overlay Layer 3 (caste heatmaps) on Layer 1 (AC boundaries) to identify which caste communities dominate each booth. Tailor candidate selection and messaging to dominant caste groups in target seats.",
  },
  {
    point: 2,
    title: "Booth-level resource allocation",
    description: "Layer 2 (polling infrastructure) tells exactly where every booth is, how many voters it has, and its accessibility. Combined with Layer 5 (past results), identify 500-700 critical booths across 40-50 target seats where focused effort swings the result.",
  },
  {
    point: 3,
    title: "Development gap exploitation",
    description: "Layer 4 (infrastructure gaps) reveals which ACs lack roads, mobile coverage, health facilities, or canal irrigation. Build constituency-specific development manifestos tied to verifiable ground reality.",
  },
  {
    point: 4,
    title: "Regional strategy differentiation",
    description: "The 5-layer stack enables separate analyses for Malwa (69 seats), Majha (25), and Doaba (23). Congress collapsed most in Malwa; GIS reveals exactly which Malwa sub-regions are recoverable.",
  },
  {
    point: 5,
    title: "Competitor vulnerability mapping",
    description: "Layer 5 enables visualisation of where AAP's 2022 vote was thin (marginal wins), where SAD's base is eroding, and where BJP has zero presence. Target these vulnerability zones.",
  },
  {
    point: 6,
    title: "Turnout optimisation",
    description: "Cross-reference Layer 3 demographics with Layer 5 turnout data to identify Congress-supporting demographics with historically low turnout. Focus voter mobilisation on these pockets.",
  },
  {
    point: 7,
    title: "Candidate-caste matching",
    description: "For each AC, the GIS shows dominant caste composition (Layer 3) and historical Congress performance (Layer 5). Select candidates whose caste profile matches the AC demographic for maximum electability.",
  },
];

/**
 * Data Sources Summary by Layer
 */
export const gisDataSourcesByLayer = [
  {
    layer: "1 - Boundaries",
    primarySource: "IGISMap, Census 2011, OSM, NYU Spatial",
    format: "Shapefile/GeoJSON",
    availability: "Public (free)",
    updateFrequency: "Static / Census cycle",
  },
  {
    layer: "2 - Polling",
    primarySource: "CEO Punjab, ECI, NextGen DISE (PAMS)",
    format: "CSV/Shapefile/GeoJSON",
    availability: "Partially public",
    updateFrequency: "Per election",
  },
  {
    layer: "3 - Demographics",
    primarySource: "Census 2011, SECC 2011, data.gov.in",
    format: "CSV + Shapefile join",
    availability: "Public (SC/ST/religion); Caste sub-groups NOT public",
    updateFrequency: "Census cycle",
  },
  {
    layer: "4 - Infrastructure",
    primarySource: "OSM, India-WRIS, NIC Bharat Maps, HMIS, TRAI",
    format: "Shapefile/GeoJSON/CSV",
    availability: "Mostly public",
    updateFrequency: "Annual to monthly",
  },
  {
    layer: "5 - Political",
    primarySource: "ECI, Lok Dhaba, Dataful, CEO Punjab",
    format: "CSV + Shapefile",
    availability: "Public (free)",
    updateFrequency: "Per election",
  },
];

/**
 * GIS Data Gaps and Verification Needs
 */
export const gisDataGaps: { gap: string; impact: "HIGH" | "MEDIUM" | "LOW"; recommendedAction: string }[] = [
  {
    gap: "Village-level caste sub-group data (Jat, Saini, Kamboj, Ravidassia, etc.)",
    impact: "HIGH",
    recommendedAction: "Commission field survey; use booth-level voter surname analysis from electoral rolls",
  },
  {
    gap: "Gram Panchayat boundary shapefiles (verified current)",
    impact: "MEDIUM",
    recommendedAction: "Request from Punjab Revenue Department or NIC Punjab",
  },
  {
    gap: "Polling station GPS coordinates",
    impact: "HIGH",
    recommendedAction: "Request from CEO Punjab / NextGen DISE team; alternatively, geocode from booth addresses",
  },
  {
    gap: "Mobile network coverage polygons (Punjab-specific)",
    impact: "MEDIUM",
    recommendedAction: "Purchase from OpenSignal/Tower Coverage; or field survey with signal testing app",
  },
  {
    gap: "Post-2011 Census population data",
    impact: "MEDIUM",
    recommendedAction: "Use electoral roll data (annual) as proxy for population shifts; project Census 2011",
  },
  {
    gap: "Municipal ward boundaries (current)",
    impact: "LOW",
    recommendedAction: "Source from individual municipal corporations; OSM as fallback",
  },
  {
    gap: "Booth-level election results (pre-2022)",
    impact: "MEDIUM",
    recommendedAction: "Request from CEO Punjab; ECI archives partially available",
  },
  {
    gap: "Electricity supply hours data (feeder-level)",
    impact: "MEDIUM",
    recommendedAction: "Request from PSPCL; SAUBHAGYA dashboard has partial data",
  },
  {
    gap: "Updated 2026 electoral roll with demographics",
    impact: "HIGH",
    recommendedAction: "Available from CEO Punjab after annual revision (typically January)",
  },
];

/**
 * Complete GIS Intelligence Stack
 */
export const gisIntelligenceStack: GISIntelligenceStack = {
  metadata: gisMetadata,
  layers: {
    layer1: punjabBoundaryData,
    layer2: pollingInfrastructureData,
    layer3: punjabDemographicData,
    layer4: infrastructureData,
    layer5: politicalGeographyData,
  },
  platformStack: gisPlatformStack,
  implementationPriority: gisImplementationPriority,
  totalEstimatedCost: gisTotalEstimatedCost.total,
  strategicValue: gisStrategicValue,
  dataGaps: gisDataGaps,
  sources: [
    "IGISMap — India Administrative Boundary Shapefiles (igismap.com)",
    "Election Commission of India — Statistical Reports (eci.gov.in)",
    "CEO Punjab — Election Reporting Portal (elections.punjab.gov.in)",
    "NIC Punjab — NextGen DISE documentation (informatics.nic.in)",
    "Lok Dhaba — Ashoka University Election Data Visualisation (lokdhaba.ashoka.edu.in)",
    "Dataful — Punjab Assembly Election Results (dataful.in)",
    "NYU Spatial Data — Punjab Village Boundaries 2011 (geo.nyu.edu)",
    "Census of India — Census Tables (censusindia.gov.in)",
    "data.gov.in — Religion Population Punjab 2011",
    "India-WRIS — Water Resources GIS (indiawris.gov.in)",
    "NIC Bharat Maps — Punjab Road Network (geoportal.nic.in)",
    "Esri India — Elections GIS Solutions (esri.in)",
    "OpenCity — ECI Datasets (data.opencity.in)",
    "ML Infomap — Licensed Election GIS Shapefiles (Penn Library guide)",
    "Wikipedia — Punjab Demographics; 2024 Lok Sabha Punjab Results",
    "ResearchGate — Punjab Election Web GIS (2019 publication)",
  ],
};

// ==========================================
// GIS LAYER UTILITY FUNCTIONS
// ==========================================

/**
 * Get Congress performance for a specific election year
 */
export function getCongressPerformance(year: number): CongressPerformanceHistory | undefined {
  return congressPerformanceHistory.find(p => p.election.includes(year.toString()));
}

/**
 * Get Congress seat count for a specific election
 */
export function getCongressSeats(year: number): number {
  const performance = getCongressPerformance(year);
  return performance?.congressSeats ?? 0;
}

/**
 * Get Congress vote share for a specific election
 */
export function getCongressVoteShare(year: number): number {
  const performance = getCongressPerformance(year);
  return performance?.congressVotePercent ?? 0;
}

/**
 * Get total constituencies by region
 */
export function getRegionSeats(region: "Malwa" | "Majha" | "Doaba"): number {
  const regionData = punjabBoundaryData.regions.find(r => r.name === region);
  return regionData?.seats ?? 0;
}

/**
 * Get Punjab demographic summary
 */
export function getPunjabDemographicSummary(): string {
  return `SC: ${punjabDemographicData.scPercentage}%, Upper: ${punjabDemographicData.upperCastePercentage}%, OBC: ${punjabDemographicData.obcPercentage}%, Jat Sikh: ${punjabDemographicData.jatSikhPercentage}%`;
}

/**
 * Get caste percentage by category
 */
export function getCastePercentage(category: "upper_caste" | "scheduled_caste" | "obc" | "jat_sikh"): number {
  const map: Record<string, number> = {
    upper_caste: punjabDemographicData.upperCastePercentage,
    scheduled_caste: punjabDemographicData.scPercentage,
    obc: punjabDemographicData.obcPercentage,
    jat_sikh: punjabDemographicData.jatSikhPercentage,
  };
  return map[category] ?? 0;
}

/**
 * Check if GIS data gap is high impact
 */
export function isHighImpactGap(gap: string): boolean {
  const highImpactGaps = gisDataGaps.filter(g => g.impact === "HIGH");
  return highImpactGaps.some(g => g.gap.toLowerCase().includes(gap.toLowerCase()));
}

/**
 * Get nextgen DISE system status
 */
export function getNextGenDISEStatus(): { ppms: boolean; pams: boolean; qis: boolean } {
  return pollingInfrastructureData.nextGenSystems;
}

/**
 * Calculate total GIS implementation cost
 */
export function getTotalGISCost(): string {
  return gisTotalEstimatedCost.total;
}

// ==========================================
// INFRASTRUCTURE: HEALTH, EDUCATION & FINANCIAL
// Source: MP1-foundational/geography/infra-social.md
// Research Date: 19 May 2026 | Data Currency: 2024-2026
// ==========================================

import type {
  HealthInfrastructureKPI,
  EducationInfrastructureKPI,
  FinancialInfrastructureKPI,
  AIIMSBathinda,
  PGIMERChandigarh,
  MedicalCollegeSummary,
  PublicHealthFacilityNetwork,
  DrugDeAddictionData,
  UniversitySummary,
  CollegeSummary,
  SchoolSummary,
  ITIPolytechnicSummary,
  CoachingHubSummary,
  BankingNetwork,
  ATMNetwork,
  PostOfficeNetwork,
  CSCData,
  InsuranceMicrofinance,
  RegionalDisparities,
} from "@/types/infra-social-types";

// ----------------------------------------
// HEALTH INFRASTRUCTURE DATA
// ----------------------------------------

/**
 * AIIMS Bathinda - First AIIMS in Punjab
 */
export const aiimsBathindaData: AIIMSBathinda = {
  name: "AIIMS Bathinda",
  dedicationDate: "Feb 2024",
  dedicatedBy: "PM",
  bedCapacity: 750,
  areaAcres: 177,
  location: "Mandi Dabwali Road, Bathinda",
  specialtyDepartments: 10,
  superSpecialtyDepartments: 11,
  nursingStations: 6,
  mbbsOperationalSince: 2019,
  nursingProgramStarted: 2025,
  strategicSignificance: "First AIIMS in Punjab, located in Malwa region",
  malwaRegionSeats: 69,
};

/**
 * PGIMER Chandigarh - Premier referral center
 */
export const pgimerChandigarhData: PGIMERChandigarh = {
  name: "PGIMER Chandigarh",
  designation: "Institution of National Importance",
  patientLoadPunjab: 30,
  servingStates: ["Punjab", "Haryana", "HP", "J&K"],
  status: "Overburdened",
};

/**
 * Medical College Summary
 */
export const medicalCollegeSummary: MedicalCollegeSummary = {
  government: { type: "Government", count: 5, mbbsSeats: 1258 },
  private: { type: "Private", count: 8, mbbsSeats: 1334 },
  aiimsBathinda: { type: "AIIMS", count: 1, mbbsSeats: 125 },
  total: { count: 14, mbbsSeats: 2592 },
  keyInstitutions: [
    "Government Medical College Amritsar",
    "Government Medical College Patiala",
    "Government Medical College Faridkot",
    "Guru Gobind Singh Medical College Faridkot",
  ],
};

/**
 * Public Health Facility Network (CAG Report 2024)
 */
export const publicHealthFacilityNetwork: PublicHealthFacilityNetwork = {
  facilities: [
    { type: "District Hospitals", count: 23 },
    { type: "Sub-Divisional Hospitals", count: 42 },
    { type: "Community Health Centres", count: 150 },
    { type: "Primary Health Centres", count: 424 },
    { type: "Sub-Centres", count: 2952 },
  ],
  gapAnalysisNote: "CAG 2024 audit identified significant shortfalls against IPHS norms",
  verificationNeeded: ["Specific vacancy percentages", "District-wise breakdown", " shortfall figures require full CAG report"],
};

/**
 * Drug De-Addiction Crisis Data
 */
export const drugDeAddictionData: DrugDeAddictionData = {
  crisisStats: {
    totalUsers: 6600000,
    childrenUsersAge1017: 697000,
    deathsReported: 266,
    govtTreatment: 620000,
    privateTreatment: 612000,
  },
  infrastructure: {
    ooatCentres: 565,
    govtBeds: 5000,
    psychologistsRecruiting: 200,
    antiDrugArrests: 16348,
    ndpsCases: 9580,
    propertiesDemolished: 118,
    DDRP_platform: "NIC Punjab - Digital platform with Aadhaar biometrics and AI face recognition",
  },
  strategicNote: "Drug abuse is Punjab's most politically volatile health issue. AAP's 2025 'war against drugs' is a major talking point.",
  counterPoints: [
    "Drugs took root under Akali-BJP and Congress eras too",
    "Treatment capacity remains grossly inadequate vs. scale",
    "Rehabilitation and employment are missing components",
  ],
};

/**
 * Complete Health Infrastructure KPI
 */
export const healthInfrastructureKPI: HealthInfrastructureKPI = {
  aiimsBathinda: aiimsBathindaData,
  pgimerChandigarh: pgimerChandigarhData,
  medicalColleges: medicalCollegeSummary,
  publicHealthFacilities: publicHealthFacilityNetwork,
  drugDeAddiction: drugDeAddictionData,
};

// ----------------------------------------
// EDUCATION INFRASTRUCTURE DATA
// ----------------------------------------

/**
 * University Summary
 */
export const universitySummary: UniversitySummary = {
  universities: [
    { name: "Panjab University", location: "Chandigarh", type: "Central", note: "Serves Punjab" },
    { name: "Punjab Agricultural University (PAU)", location: "Ludhiana", type: "State" },
    { name: "Guru Nanak Dev University (GNDU)", location: "Amritsar", type: "State" },
    { name: "Punjabi University", location: "Patiala", type: "State" },
    { name: "Thapar Institute of Engineering & Technology", location: "Patiala", type: "Deemed" },
    { name: "IIT Ropar", location: "Ropar", type: "Institute of National Importance" },
    { name: "ISB Mohali", location: "Mohali", type: "Private", note: "Business school" },
    { name: "Central University of Punjab", location: "Bathinda", type: "Central" },
  ],
  approximateCount: { min: 35, max: 40 },
  majorHubs: ["Chandigarh", "Ludhiana", "Amritsar", "Patiala"],
  verificationNeeded: ["Complete university list with enrollment from AISHE 2024-25"],
};

/**
 * College Summary
 */
export const collegeSummary: CollegeSummary = {
  approximateCount: { min: 2500, max: 3000 },
  collegeDensityNote: "Below national average in several districts",
  majorHubs: ["Ludhiana", "Jalandhar", "Amritsar", "Patiala"],
  lowerDensityRegions: ["Rural Malwa", "Ferozepur", "Fazilka", "Muktsar"],
};

/**
 * School Summary
 */
export const schoolSummary: SchoolSummary = {
  governmentSchools: 19000,
  privateSchoolNote: "Growing share, particularly in urban/semi-urban areas",
  mainBoards: ["PSEB (Punjab School Education Board)", "CBSE"],
  keyConcern: "Quality of government schooling vs. private; teacher vacancies in rural areas",
};

/**
 * ITI and Polytechnic Summary
 */
export const itiPolytechnicSummary: ITIPolytechnicSummary = {
  institutions: [
    { type: "Government ITIs", approximateCount: { min: 120, max: 150 } },
    { type: "Private ITIs", approximateCount: { min: 200, max: 200 } },
    { type: "Government Polytechnics", approximateCount: { min: 20, max: 25 } },
    { type: "Private Polytechnics", approximateCount: { min: 50, max: 50 } },
  ],
  keyTrades: ["Electrician", "Fitter", "Welder", "Mechanic", "Plumber", "Wireman", "COPA"],
  governingBody: "Punjab State Board of Technical Education and Industrial Training (PSBTE & IT)",
  admissionPlatform: "e-Akadamik (CDAC Mohali)",
  admissionNote: "ITI admissions for 2025-26 session open for 8th, 10th, and 12th pass students",
};

/**
 * Coaching Hub Summary
 */
export const coachingHubSummary: CoachingHubSummary = {
  hubs: [
    { location: "Chandigarh-Mohali belt", focus: ["IAS", "NEET", "JEE"], note: "Major coaching hub" },
    { location: "Jalandhar", focus: ["Competitive exams"], note: "Emerging coaching center" },
    { location: "Amritsar", focus: ["Medical", "Engineering"], note: "Growing" },
  ],
  distantCoachingNote: "Many students from Punjab also travel to Kota (Rajasthan) for JEE/NEET coaching",
};

/**
 * Complete Education Infrastructure KPI
 */
export const educationInfrastructureKPI: EducationInfrastructureKPI = {
  universities: universitySummary,
  colleges: collegeSummary,
  schools: schoolSummary,
  itiPolytechnics: itiPolytechnicSummary,
  coachingHubs: coachingHubSummary,
};

// ----------------------------------------
// FINANCIAL INFRASTRUCTURE DATA
// ----------------------------------------

/**
 * Banking Network Summary
 */
export const bankingNetwork: BankingNetwork = {
  scbBranchCount: { min: 5000, max: 5500 },
  majorPublicSectorBanks: [
    "PNB (lead bank for SLBC Punjab)",
    "SBI",
    "Canara Bank",
    "Union Bank",
    "Bank of Baroda",
    "Indian Overseas Bank",
    "Punjab & Sind Bank",
  ],
  keyRRB: "Punjab Gramin Bank (sponsored by PNB)",
  stateCooperativeBank: "The Punjab State Co-operative Bank Ltd (Chandigarh Sector 34-A)",
  dccbNote: "District Central Cooperative Banks operational across districts",
  cdRatioPunjab: { min: 55, max: 65 },
  cdRatioNational: 78,
  cdRatioVerificationNeeded: true,
};

/**
 * ATM Network Summary
 */
export const atmNetwork: ATMNetwork = {
  estimatedCount: { min: 8000, max: 10000 },
  higherDensityAreas: ["Ludhiana", "Jalandhar", "Amritsar", "Mohali", "Patiala"],
  ruralGapNote: "Rural ATM penetration remains a gap",
};

/**
 * Post Office Network Summary
 */
export const postOfficeNetwork: PostOfficeNetwork = {
  approximateCount: 4000,
  districtsCovered: 23,
  services: ["Post Office Savings Bank", "India Post Payments Bank"],
  ruralImportanceNote: "Key in rural areas where commercial bank branches are sparse",
};

/**
 * Common Service Centres Data
 */
export const cscData: CSCData = {
  nationalTotal: 597441,
  gramPanchayatLevel: 473357,
  punjabVLE: 3500,
  services: ["DigiPay (AEPS banking)", "Insurance", "PM-Kisan registration", "Aadhaar", "PAN", "DTH recharge", "Telemedicine", "Education services"],
  keyInitiative: "DigiPay Micro ATM - Extending banking access in underserved areas",
};

/**
 * Insurance and Microfinance Summary
 */
export const insuranceMicrofinance: InsuranceMicrofinance = {
  licActive: true,
  privateInsurersActive: true,
  govSchemes: ["Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)", "Pradhan Mantri Suraksha Bima Yojana (PMSBY)"],
  mfiRegions: ["Malwa", "Doaba"],
  shgBankLinkage: "SHG-Bank linkage program operational via NABARD",
};

/**
 * Complete Financial Infrastructure KPI
 */
export const financialInfrastructureKPI: FinancialInfrastructureKPI = {
  banking: bankingNetwork,
  atms: atmNetwork,
  postOffices: postOfficeNetwork,
  csc: cscData,
  insurance: insuranceMicrofinance,
};

// ----------------------------------------
// REGIONAL DISPARITIES DATA
// ----------------------------------------

export const regionalDisparities: RegionalDisparities = {
  health: {
    malwa: "AIIMS Bathinda, GMC Faridkot; drug crisis worst here",
    majha: "GNDU Amritsar medical hub; border district gaps",
    doaba: "Moderate; Jalandhar medical facilities",
  },
  education: {
    malwa: "PAU Ludhiana, Central Univ Bathinda; lower college density in southern Malwa",
    majha: "GNDU Amritsar, Khalsa College; good urban coverage",
    doaba: "Good in Jalandhar/Nawanshahr; Kapurthala average",
  },
  financial: {
    malwa: "Adequate in Ludhiana/Bathinda; gaps in Mansa, Muktsar, Barnala",
    majha: "Amritsar well-served; Gurdaspur/Pathankot/Tarn Taran gaps",
    doaba: "Jalandhar banking hub; Hoshiarpur/Phagwara moderate",
  },
};

// ----------------------------------------
// INFRASTRUCTURE DATA CONSTANTS
// ----------------------------------------

/**
 * Region seat distribution
 */
export const REGION_SEATS = {
  malwa: 69,
  majha: 25,
  doaba: 23,
} as const;

/**
 * Health facility total counts
 */
export const HEALTH_FACILITY_TOTALS = {
  districtHospitals: 23,
  subDivisionalHospitals: 42,
  communityHealthCentres: 150,
  primaryHealthCentres: 424,
  subCentres: 2952,
  totalFacilities: 3591,
} as const;

/**
 * Medical education totals
 */
export const MEDICAL_EDUCATION_TOTALS = {
  totalMedicalColleges: 14,
  totalMBBSSeats: 2592,
  governmentMBBSSeats: 1258,
  privateMBBSSeats: 1334,
  aiimsSeats: 125,
} as const;

/**
 * Drug crisis statistics
 */
export const DRUG_CRISIS_STATS = {
  totalUsers: 6600000,
  childrenUsersAge1017: 697000,
  deathsReported: 266,
  addictsInGovernmentTreatment: 620000,
  addictsInPrivateTreatment: 612000,
} as const;

/**
 * De-addiction infrastructure
 */
export const DEADDICTION_INFRASTRUCTURE = {
  ooatCentres: 565,
  governmentBeds: 5000,
  psychologistsRecruiting: 200,
  antiDrugArrestsMarJun2025: 16348,
  ndpsCasesMarJun2025: 9580,
  propertiesDemolished: 118,
} as const;

/**
 * Education infrastructure totals
 */
export const EDUCATION_TOTALS = {
  universitiesApprox: { min: 35, max: 40 },
  collegesApprox: { min: 2500, max: 3000 },
  governmentSchools: 19000,
  governmentITIs: { min: 120, max: 150 },
  privateITIs: { min: 200, max: 200 },
  governmentPolytechnics: { min: 20, max: 25 },
  privatePolytechnics: { min: 50, max: 50 },
} as const;

/**
 * Financial infrastructure totals
 */
export const FINANCIAL_TOTALS = {
  scheduledCommercialBankBranches: { min: 5000, max: 5500 },
  atms: { min: 8000, max: 10000 },
  postOffices: 4000,
  cscVLE: 3500,
} as const;

// ----------------------------------------
// UTILITY FUNCTIONS
// ----------------------------------------

/**
 * Get health facility total count
 */
export function getTotalHealthFacilities(): number {
  return HEALTH_FACILITY_TOTALS.totalFacilities;
}

/**
 * Get total MBBS seats
 */
export function getTotalMBBSSeats(): number {
  return MEDICAL_EDUCATION_TOTALS.totalMBBSSeats;
}

/**
 * Get region seats
 */
export function getRegionSeatsCount(region: "malwa" | "majha" | "doaba"): number {
  return REGION_SEATS[region];
}

/**
 * Get drug users total
 */
export function getDrugUsersTotal(): number {
  return DRUG_CRISIS_STATS.totalUsers;
}

/**
 * Get banking CD ratio for Punjab
 */
export function getPunjabCDRatio(): { min: number; max: number } {
  return bankingNetwork.cdRatioPunjab;
}

/**
 * Check if CD ratio is below national average
 */
export function isCDRatioBelowNational(): boolean {
  return bankingNetwork.cdRatioPunjab.max < bankingNetwork.cdRatioNational;
}

// ==========================================
// CONSTITUENCY PROFILE DATA (see constituency-data.ts)
// ==========================================

export {
  regionalOverview,
  districtReferences,
  allConstituencies,
  borderConstituencySummary,
  geographicClassifications,
  agriculturalZones,
  constituencyStrategicInsights,
  constituencyDataGaps,
  constituencySummaryStats,
  getConstituencyById,
  getConstituenciesByDistrict,
  getConstituenciesByRegion,
  getConstituenciesByReservation,
  getBorderConstituencies,
  getHighFloodRiskConstituencies,
  getConstituenciesByCrop,
  getPilgrimageConstituencies,
  getElectorateByRegion,
  getConstituenciesByElectorate,
  getTopElectorateConstituencies,
} from "./constituency-data";

// ==========================================
// GIS DYNAMIC LAYERS DATA (6-10) (MP1-foundational/geography/gis-layers-dynamic.md)
// ==========================================

import type {
  GISDynamicIntelligenceStack,
  DynamicLayerMetadata,
  LayerOverview,
  LayerTechnologyStack,
  EconomicGeographyData,
  RiskVulnerabilityData,
  CampaignActivityData,
  RealTimeSentimentData,
  CompetitorIntelligenceData,
  ImplementationPhase,
  CropPattern,
  MandiInfo,
  IndustrialCluster,
  FloodZone,
  BorderZone,
  DrugTraffickingData,
} from "@/types/gis-layers-types";

/**
 * Dynamic Layers Metadata
 */
export const dynamicLayersMetadata: DynamicLayerMetadata = {
  researchDate: "19 May 2026",
  sourcesConsulted: 10,
  dataFreshness: "Most recent data from 2024-2026 (varies by layer)",
  confidence: "MEDIUM",
  agent: "Research Agent (GEO-012)",
  taskReference: "Micro-Task GEO-012",
};

/**
 * Dynamic Layers Overview
 */
export const dynamicLayersOverview: LayerOverview[] = [
  { layer: 6, name: "Economic Geography", type: "Semi-static (seasonal)", updateFrequency: "monthly", primaryUse: "Understanding voter economic drivers" },
  { layer: 7, name: "Risk & Vulnerability", type: "Semi-static + event-triggered", updateFrequency: "quarterly", primaryUse: "Crisis response, relief positioning" },
  { layer: 8, name: "Campaign Activity Tracking", type: "Real-time", updateFrequency: "daily", primaryUse: "Ground operations management" },
  { layer: 9, name: "Real-Time Sentiment", type: "Real-time", updateFrequency: "continuous", primaryUse: "Pulse monitoring, messaging pivot" },
  { layer: 10, name: "Competitor Activity Intelligence", type: "Near-real-time", updateFrequency: "daily", primaryUse: "Counter-strategy deployment" },
];

/**
 * Technology Stack for Dynamic Layers
 */
export const dynamicLayersTechnologyStack: LayerTechnologyStack = {
  baseGIS: ["QGIS 3.x", "ArcGIS Online"],
  database: "PostgreSQL + PostGIS",
  visualization: ["Mapbox GL JS", "Leaflet.js"],
  dataPipeline: ["Python (geopandas, shapely, folium)"],
  mobileCollection: ["ODK Collect", "KoBoToolbox"],
  cloudInfrastructure: "AWS/Azure with TileServer GL",
};

// ==========================================
// LAYER 6: ECONOMIC GEOGRAPHY DATA
// ==========================================

/**
 * Crop Patterns Data
 */
export const cropPatternsData = {
  monocultureShare: 85, // 85% wheat and paddy
  croppingIntensity: 190, // ~190% (nearly double-cropped statewide)
  crops: [
    { crop: "Paddy (Rice)", season: "kharif" as const, dominantRegions: ["Central Malwa", "Majha districts"], notes: "Apr-Sep" },
    { crop: "Wheat", season: "rabi" as const, dominantRegions: ["Statewide"], notes: "Oct-Mar; dominant statewide" },
    { crop: "Potato", season: "rabi" as const, dominantRegions: ["Doaba (Jalandhar, Kapurthala)"], notes: "Doaba specialty" },
    { crop: "Cotton", season: "kharif" as const, dominantRegions: ["Southwestern Malwa (Bathinda, Mansa, Fazilka)"], notes: "Cash crop" },
    { crop: "Sugarcane", season: "annual" as const, dominantRegions: ["Border belts"], notes: "Cash crop" },
  ] as CropPattern[],
  dataSource: "Punjab Agriculture Department crop cutting data; ISPRS remote sensing studies",
  updateFrequency: "seasonal" as const,
};

/**
 * Mandi Network Data
 */
export const mandiNetworkData = {
  densityPer1000SqKm: 6.9, // vs national average ~1.5
  totalPrincipalYards: 150,
  totalSubYards: 250,
  totalDistricts: 23,
  keyMandis: [
    { name: "Sirhind", location: "Fatehgarh Sahib", district: "Fatehgarh Sahib", specialization: "Grain" },
    { name: "Khanna", location: "Ludhiana", district: "Ludhiana", specialization: "Wheat/Paddy" },
    { name: "Barnala", location: "Barnala", district: "Barnala", specialization: "Wheat/Paddy" },
    { name: "Rajpura", location: "Patiala", district: "Patiala", specialization: "Grain" },
    { name: "Dhuri", location: "Sangrur", district: "Sangrur", specialization: "Wheat/Paddy" },
    { name: "Jalandhar City", location: "Jalandhar", district: "Jalandhar", specialization: "Multiple" },
  ] as MandiInfo[],
  dataSource: "Agmarknet portal (Ministry of Agriculture); Punjab Mandi Board official directory",
  strategicValue: "Mandi towns are political gathering points — rally locations near mandis maximize farmer contact during procurement season",
};

/**
 * Industrial Clusters Data
 */
export const industrialClustersData: IndustrialCluster[] = [
  { location: "Ludhiana", district: "Ludhiana", industries: ["Textile/hosiery/garment", "Bicycle parts", "Auto components"], notes: "Largest in North India" },
  { location: "Jalandhar", district: "Jalandhar", industries: ["Sports goods", "Leather", "Hand tools"] },
  { location: "Amritsar", district: "Amritsar", industries: ["Textiles", "Carpet weaving", "Food processing"] },
  { location: "Mohali/Chandigarh periphery", district: "SAS Nagar", industries: ["IT/ITeS", "Pharmaceuticals", "Electronics"] },
  { location: "Bathinda", district: "Bathinda", industries: ["Oil refinery (Guru Gobind Singh Refinery)", "Thermal power plants"], notes: "Industrial hub" },
];

/**
 * Procurement Centers Data
 */
export const procurementCentersData = {
  agencies: ["FCI", "Punjab State Grain Procurement Agencies"],
  commodities: [
    { commodity: "Wheat", season: "rabi" as const },
    { commodity: "Paddy", season: "kharif" as const },
  ],
  criticalNote: "MSP procurement delays directly affect voter sentiment — political flashpoint",
  dataSource: "FCI Punjab region office; Punjab Food & Civil Supply Department",
  updateFrequency: "seasonal" as const,
};

/**
 * Complete Economic Geography Data
 */
export const economicGeographyData: EconomicGeographyData = {
  cropPatterns: cropPatternsData,
  mandiNetwork: mandiNetworkData,
  industrialClusters: industrialClustersData,
  procurementCenters: [
    { agency: "FCI", commodities: ["Wheat", "Paddy"], season: "both" },
    { agency: "Punjab State Grain Procurement Agencies", commodities: ["Wheat", "Paddy"], season: "both" },
  ],
  implementationPriority: "HIGH",
};

// ==========================================
// LAYER 7: RISK & VULNERABILITY DATA
// ==========================================

/**
 * Flood Prone Areas Data
 */
export const floodProneAreasData = {
  zones: [
    { river: "Sutlej", affectedDistricts: ["Ludhiana", "Jalandhar", "Kapurthala"], riskLevel: "high" as const, notes: "Monsoon flooding Jul-Sep" },
    { river: "Beas", affectedDistricts: ["Gurdaspur", "Amritsar", "Kapurthala"], riskLevel: "high" as const, notes: "Monsoon flooding Jul-Sep" },
    { river: "Ghaggar", affectedDistricts: ["Patiala", "Sangrur"], riskLevel: "medium" as const, notes: "Monsoon flooding Jul-Sep" },
  ] as FloodZone[],
  recentEvents: ["2023 monsoon flooding", "2024 monsoon flooding in Malwa belt"],
  lowLyingAreas: ["Ropar", "Fatehgarh Sahib", "Patiala"],
  dataSource: ["India Meteorological Department (IMD)", "Central Water Commission", "Punjab State Disaster Management Authority (PSDMA)", "ISRO NRSC flood inundation maps"],
  updateFrequency: "event_triggered" as const,
};

/**
 * Drought Zones Data
 */
export const droughtZonesData = {
  southwesternMalwa: {
    districts: ["Bathinda", "Mansa", "Fazilka", "Sri Muktsar Sahib"],
    waterStress: "severe" as const,
    groundwaterStatus: "Over 80% blocks over-exploited",
    canalVulnerability: "Low-release years from Bhakra/Pong dams",
  },
  groundwaterStatus: "Among fastest-declining water tables in India",
  dataSource: ["Central Ground Water Board annual reports", "Punjab Water Resources Department", "NASA GRACE satellite groundwater data"],
  updateFrequency: "monthly" as const,
};

/**
 * Border Zone Risk Data
 */
export const borderZoneRiskData = {
  totalBorderDistricts: 6,
  districts: [
    { district: "Gurdaspur", sharedBorder: "Pakistan", risks: ["Cross-border trafficking", "Security concerns"], securityConcerns: ["2016 Pathankot airbase attack"] },
    { district: "Amritsar", sharedBorder: "Pakistan", risks: ["Cross-border trafficking"], securityConcerns: [] },
    { district: "Tarn Taran", sharedBorder: "Pakistan", risks: ["Cross-border trafficking"], securityConcerns: [] },
    { district: "Ferozepur", sharedBorder: "Pakistan", risks: ["Drug trafficking routes"], securityConcerns: [] },
    { district: "Fazilka", sharedBorder: "Pakistan", risks: ["Drug trafficking routes"], securityConcerns: [] },
    { district: "Pathankot", sharedBorder: "Pakistan", risks: ["Security concerns"], securityConcerns: ["2016 Pathankot airbase attack"] },
  ] as BorderZone[],
  dataSource: ["MHA annual reports", "BSF sector headquarters (restricted)"],
  updateFrequency: "quarterly" as const,
};

/**
 * Drug Trafficking Data
 */
export const drugTraffickingData: DrugTraffickingData = {
  prevalenceRuralJalandhar: 65.5, // 65.5% substance abuse prevalence in rural Jalandhar (PMC/NIH, 2017)
  heroinPrevalence: 20.8, // 20.8% among study subjects
  majorRoutes: [
    "Fazilka/Ferozepur border sector (heroin from Afghanistan/Pakistan via Pakistan)",
    "Gurdaspur/Pathankot corridor",
    "Synthetic drugs via Delhi-Haryana corridor",
  ],
  backgroundRuralPercentage: 70, // 70% of drug abusers are from rural areas
  dataSource: ["NCB (Narcotics Control Bureau) annual reports", "Punjab Police STF data", "AIIMS National Drug Dependence Treatment Centre"],
};

/**
 * Remote Booths Data
 */
export const remoteBoothsData = {
  criteria: [">5km from motorable road", "River crossing required", "Forest path access required"],
  concentrationAreas: [
    "Kandi belt (Hoshiarpur, Ropar, Pathankot foothills)",
    "Border zone booths",
    "Abohar/Fazilka cotton belt",
  ],
  dataSource: "CEO Punjab booth-level GIS mapping (ECI initiative since 2011)",
  updateFrequency: "pre_election" as const,
};

/**
 * Complete Risk & Vulnerability Data
 */
export const riskVulnerabilityData: RiskVulnerabilityData = {
  floodProneAreas: floodProneAreasData,
  droughtZones: droughtZonesData,
  borderZoneRisk: borderZoneRiskData,
  communalTensionHotspots: {
    hotspots: [],
    historicalEvents: ["1984 anti-Sikh riots", "Occasional Hindu-Sikh flashpoints"],
    dataSource: ["Punjab Police intelligence (restricted)", "Media incident tracking", "ADL/NGO hate crime databases"],
    updateFrequency: "event_triggered" as const,
  },
  drugTrafficking: drugTraffickingData,
  remoteDifficultBooths: remoteBoothsData,
  implementationPriority: "HIGH",
};

// ==========================================
// LAYER 8: CAMPAIGN ACTIVITY TRACKING DATA
// ==========================================

/**
 * Campaign Activity Tracking Data
 */
export const campaignActivityData: CampaignActivityData = {
  d2dCoverage: {
    trackingEntries: [],
    progressIndicator: "% households contacted per booth, per constituency",
    methodology: "Custom PWA using ODK-based forms; PostGIS point/polygon layers; Leaflet.js dashboard",
    dataSource: "Field volunteer mobile app (custom)",
  },
  rallyEventLocations: {
    events: [],
    dataSource: ["Campaign team event calendar", "Volunteer event reports", "Media coverage verification"],
  },
  volunteerDensity: {
    densityMap: [],
    attritionTracking: "Volunteer attrition and recruitment velocity",
    recruitmentVelocity: "Weekly tracking",
    dataSource: ["Volunteer registration database", "Activity check-in data"],
  },
  technologyStack: {
    mobileApp: "ODK Collect or custom KoBoToolbox deployment (offline-first)",
    server: "PostGIS database + GeoServer/TileServer GL",
    dashboard: "Web-based Mapbox GL JS dashboard",
    integration: "WhatsApp Business API for volunteer communication",
  },
  updateFrequency: "daily",
  implementationPriority: "CRITICAL",
};

// ==========================================
// LAYER 9: REAL-TIME SENTIMENT DATA
// ==========================================

/**
 * Social Media Sentiment Platforms
 */
export const socialMediaSentimentPlatforms = [
  { platform: "twitter_x" as const, geographicResolution: "district" as const, penetration: "Lower in rural Punjab" },
  { platform: "facebook" as const, geographicResolution: "district" as const, penetration: "Dominant platform" },
  { platform: "instagram" as const, geographicResolution: "district" as const, penetration: "Urban youth" },
  { platform: "whatsapp" as const, geographicResolution: "district" as const, penetration: "Pervasive but private (indirect signals)" },
  { platform: "youtube" as const, geographicResolution: "district" as const, penetration: "High volume on Punjab political content" },
];

/**
 * Real-Time Sentiment Data
 */
export const realTimeSentimentData: RealTimeSentimentData = {
  socialMediaSentiment: {
    platforms: socialMediaSentimentPlatforms,
    nlpProcessing: "NLP sentiment analysis on Punjabi/Gurmukhi and Hindi text; entity extraction",
    techStack: ["Python (transformers, Indic NLP libraries)", "PostgreSQL + PostGIS", "Elasticsearch for text indexing"],
    apiSources: ["Twitter/X API", "Facebook Graph API", "YouTube Data API", "CrowdTangle"],
    updateFrequency: "continuous",
  },
  surveyIntegration: {
    surveys: [],
    updateFrequency: "weekly",
  },
  electionDataLayer: {
    historicalResults: [
      { year: 2017, electionType: "assembly", boothLevelAvailable: true, dataSource: "ECI" },
      { year: 2022, electionType: "assembly", boothLevelAvailable: true, dataSource: "ECI" },
    ],
    boothLevelYears: [2017, 2022],
    updateFrequency: "pre_election",
  },
  outputProducts: {
    heatmapCongress: "Congress sentiment strength by booth",
    heatmapAAP: "AAP sentiment strength by booth",
    heatmapSAD: "SAD sentiment strength by booth",
    heatmapBJP: "BJP sentiment strength by booth",
    trendArrows: "Improving/declining over rolling 7-day, 30-day windows",
    alertSystem: "Sudden sentiment shifts trigger investigation",
  },
  implementationPriority: "HIGH",
};

// ==========================================
// LAYER 10: COMPETITOR ACTIVITY INTELLIGENCE DATA
// ==========================================

/**
 * Competitor Activity Intelligence Data
 */
export const competitorIntelligenceData: CompetitorIntelligenceData = {
  aapMLAEventTracking: {
    events: [],
    trackingAttributes: ["MLA name", "Event type", "Location", "Constituency", "Date", "Assembly attendance vs constituency presence"],
    dataSource: ["AAP social media pages", "Local media monitoring", "Volunteer intelligence reports"],
    updateFrequency: "daily",
  },
  competitorAdvertising: {
    ads: [],
    metaAdLibrary: true,
    fieldPhotoReports: true,
    newspaperAdTracking: true,
    updateFrequency: "weekly",
  },
  oppositionWorkerPresence: {
    parties: {
      aap: {
        trackingIndicators: ["AAP volunteer training camps", "Membership drives", "Mohalla clinic events"],
        dataSource: ["Field intelligence", "Opposition social media"],
      },
      sad: {
        trackingIndicators: ["Akali Dal worker networks", "Dera influence zones", "Panthic organization activity"],
        dataSource: ["Field intelligence", "Opposition social media"],
      },
      bjp: {
        trackingIndicators: ["RSS shakha locations", "BJP morcha events", "Central scheme publicity events"],
        dataSource: ["Field intelligence", "Opposition social media"],
      },
    },
    updateFrequency: "weekly",
  },
  oppositionRallyCalendar: {
    events: [],
    clashDetection: true,
    postEventAnalysis: true,
    updateFrequency: "daily",
  },
  intelligenceCollectionMethods: {
    osint: "Open Source Intelligence: Social media monitoring of all AAP MLAs, SAD leaders, BJP Punjab unit",
    humint: "Human Intelligence: Constituency-level Congress workers reporting opposition activity via mobile app",
    mediaIntelligence: "Automated news clipping service filtered for opposition mentions",
  },
  implementationPriority: "HIGH",
};

// ==========================================
// IMPLEMENTATION ROADMAP & STRATEGIC VALUE
// ==========================================

/**
 * Dynamic Layers Implementation Phases
 */
export const dynamicLayersImplementationPhases: ImplementationPhase[] = [
  { phase: "Phase 1: Foundation", timeline: "Jun-Jul 2026", layers: "Layer 6 (Economic) + Layer 7 (Risk)", estimatedCost: "Rs 5-8 lakh", priority: "HIGH" },
  { phase: "Phase 2: Operational", timeline: "Aug-Oct 2026", layers: "Layer 8 (Campaign Activity)", estimatedCost: "Rs 10-15 lakh", priority: "CRITICAL" },
  { phase: "Phase 3: Intelligence", timeline: "Nov 2026-Jan 2027", layers: "Layer 9 (Sentiment) + Layer 10 (Competitor)", estimatedCost: "Rs 8-12 lakh", priority: "HIGH" },
  { phase: "Phase 4: Full Integration", timeline: "Feb 2027", layers: "All layers operational", estimatedCost: "Rs 3-5 lakh/month", priority: "CRITICAL" },
];

/**
 * Total Investment Summary
 */
export const dynamicLayersTotalInvestment = {
  oneTimeCost: "Rs 25-40 lakh",
  monthlyOperationalCost: "Rs 3-5 lakh/month",
  teamRequired: [
    "1 GIS Analyst (full-time)",
    "1 Full-stack Developer (mobile app + dashboard)",
    "1 Data Analyst (sentiment + surveys)",
    "2-3 Field Coordinators (data collection training)",
    "1 OSINT Analyst (competitor tracking)",
  ],
};

/**
 * Strategic Value by Layer
 */
export const dynamicLayersStrategicValue = [
  { layer: 6, value: "Identifies farmer distress zones for targeted MSP/procurement messaging; industrial belt workers for employment policy outreach; mandi towns as rally locations" },
  { layer: 7, value: "Positions Congress as responsive — flood/drought relief in vulnerable areas; drug crisis messaging in affected belts; border zone development promises" },
  { layer: 8, value: "Ensures NO booth is left uncontacted — the difference between 50 seats and 60+ seats is ground coverage in marginal booths" },
  { layer: 9, value: "Enables real-time messaging pivots — if sentiment shifts on an issue, Congress can respond within 24 hours rather than days" },
  { layer: 10, value: "Prevents ambushes — knowing where AAP is concentrating resources allows Congress to either contest or avoid, optimizing limited resources" },
];

/**
 * Data Points Summary
 */
export const dynamicLayersDataPointsSummary = [
  { layer: "6.1 Crop Patterns", keyDataSource: "Punjab Agriculture Dept; Sentinel-2 satellite", updateFrequency: "seasonal", techRequired: "Remote sensing + geopandas", confidence: "HIGH" },
  { layer: "6.2 Mandi/APMC", keyDataSource: "Agmarknet; Punjab Mandi Board", updateFrequency: "annual", techRequired: "Point layer GIS", confidence: "HIGH" },
  { layer: "6.3 Industrial Clusters", keyDataSource: "dcmsme.gov.in; Invest Punjab", updateFrequency: "annual", techRequired: "Polygon layers", confidence: "HIGH" },
  { layer: "6.4 Procurement Centers", keyDataSource: "FCI Punjab; state food dept", updateFrequency: "seasonal", techRequired: "Point layer", confidence: "HIGH" },
  { layer: "7.1 Flood Zones", keyDataSource: "CWC; IMD; PSDMA; NRSC ISRO", updateFrequency: "event_triggered", techRequired: "Raster flood maps", confidence: "HIGH" },
  { layer: "7.2 Drought Zones", keyDataSource: "CGWB; Punjab Water Resources", updateFrequency: "monthly", techRequired: "Raster groundwater maps", confidence: "HIGH" },
  { layer: "7.3 Border Risk", keyDataSource: "MHA reports; BSF (restricted)", updateFrequency: "quarterly", techRequired: "Buffer zone polygons", confidence: "MEDIUM" },
  { layer: "7.4 Communal Hotspots", keyDataSource: "Punjab Police intelligence; media tracking", updateFrequency: "event_triggered", techRequired: "Point heat map", confidence: "LOW" },
  { layer: "7.5 Drug Trafficking", keyDataSource: "NCB; Punjab STF; AIIMS surveys", updateFrequency: "monthly", techRequired: "Heat map + route lines", confidence: "MEDIUM" },
  { layer: "7.6 Remote Booths", keyDataSource: "CEO Punjab; ECI booth GIS", updateFrequency: "pre_election", techRequired: "Point layer with accessibility", confidence: "HIGH" },
  { layer: "8.1 D2D Coverage", keyDataSource: "Volunteer mobile app (custom)", updateFrequency: "daily", techRequired: "Mobile app + PostGIS", confidence: "PLANNED" },
  { layer: "8.2 Rally/Events", keyDataSource: "Campaign team + volunteer reports", updateFrequency: "daily", techRequired: "Point layer + buffers", confidence: "PLANNED" },
  { layer: "9.1 Social Sentiment", keyDataSource: "Twitter/FB/YouTube APIs; NLP", updateFrequency: "continuous", techRequired: "Python NLP + PostGIS", confidence: "MEDIUM" },
  { layer: "10.1 AAP MLA Events", keyDataSource: "OSINT (social media + media)", updateFrequency: "daily", techRequired: "Point layer", confidence: "MEDIUM" },
  { layer: "10.2 Ad Density", keyDataSource: "Meta Ad Library; field photos", updateFrequency: "weekly", techRequired: "Point + density map", confidence: "MEDIUM" },
];

/**
 * Gaps & Verification Needs
 */
export const dynamicLayersGaps = [
  { gap: "Drug trafficking route data", impact: "HIGH", recommendedAction: "Approach via RTI or establish intelligence-sharing with state Congress leadership" },
  { gap: "Communal tension mapping", impact: "HIGH", recommendedAction: "Requires careful ground intelligence collection; mark all data as CONFIDENTIAL" },
  { gap: "Opposition worker density", impact: "MEDIUM", recommendedAction: "Use multiple data points for triangulation" },
  { gap: "Social media Punjabi NLP", impact: "HIGH", recommendedAction: "Budget for custom model training on Punjab political corpus" },
  { gap: "Booth-level lat/long data", impact: "HIGH", recommendedAction: "File RTI or request from CEO Punjab; NOT_FOUND in public domain" },
  { gap: "Real-time flood/weather integration", impact: "MEDIUM", recommendedAction: "Verify IMD and CWC API feed availability and cost" },
  { gap: "Mobile app offline capability", impact: "HIGH", recommendedAction: "Test in Kandi belt and border zones before deployment" },
];

/**
 * Complete Dynamic GIS Intelligence Stack
 */
export const gisDynamicIntelligenceStack: GISDynamicIntelligenceStack = {
  metadata: dynamicLayersMetadata,
  layerOverview: dynamicLayersOverview,
  technologyStack: dynamicLayersTechnologyStack,
  layers: {
    layer6: economicGeographyData,
    layer7: riskVulnerabilityData,
    layer8: campaignActivityData,
    layer9: realTimeSentimentData,
    layer10: competitorIntelligenceData,
  },
  implementationRoadmap: {
    phases: dynamicLayersImplementationPhases,
    totalOneTimeCost: dynamicLayersTotalInvestment.oneTimeCost,
    totalMonthlyOperationalCost: dynamicLayersTotalInvestment.monthlyOperationalCost,
    teamRequired: dynamicLayersTotalInvestment.teamRequired,
  },
  strategicValue: dynamicLayersStrategicValue,
  dataPointsSummary: dynamicLayersDataPointsSummary,
  gapsVerification: dynamicLayersGaps,
};

// ==========================================
// GIS DYNAMIC LAYERS UTILITY FUNCTIONS
// ==========================================

/**
 * Get layer 6 economic data
 */
export function getEconomicData() {
  return economicGeographyData;
}

/**
 * Get risk vulnerability data
 */
export function getRiskVulnerabilityData() {
  return riskVulnerabilityData;
}

/**
 * Get crop pattern information
 */
export function getCropPatterns() {
  return cropPatternsData;
}

/**
 * Get mandi density statistic
 */
export function getMandiDensity(): number {
  return mandiNetworkData.densityPer1000SqKm;
}

/**
 * Get drug trafficking prevalence data
 */
export function getDrugTraffickingData(): DrugTraffickingData {
  return drugTraffickingData;
}

/**
 * Get border districts
 */
export function getBorderDistricts(): string[] {
  return borderZoneRiskData.districts.map(d => d.district);
}

/**
 * Get implementation phases
 */
export function getImplementationPhases(): ImplementationPhase[] {
  return dynamicLayersImplementationPhases;
}

/**
 * Get total investment cost
 */
export function getDynamicLayersTotalCost(): { oneTime: string; monthly: string } {
  return {
    oneTime: dynamicLayersTotalInvestment.oneTimeCost,
    monthly: dynamicLayersTotalInvestment.monthlyOperationalCost,
  };
}

/**
 * Get high-impact gaps
 */
export function getHighImpactGaps() {
  return dynamicLayersGaps.filter(g => g.impact === "HIGH");
}

/**
 * Get data confidence by layer
 */
export function getLayerConfidence(layer: string): string {
  const layerData = dynamicLayersDataPointsSummary.find(l => l.layer.startsWith(layer));
  return layerData?.confidence ?? "UNKNOWN";
}

// ==========================================
// TRANSPORT INFRASTRUCTURE DATA (infra-transport.md)
// ==========================================

import type {
  TransportKPI,
  Airport,
  MajorJunction,
  NewTrainService,
  RailLinkProject,
  ConnectivityGap,
  PoliticalImplication,
} from "@/types/infra-transport-types";

/**
 * Transport Infrastructure KPI - Complete dataset
 * Source: research-M2/MP1-foundational/geography/infra-transport.md
 * Research Date: 19 May 2026 | Data Currency: 2024-2026
 */
export const transportKPIData: TransportKPI = {
  road: {
    nationalHighways: {
      totalLengthKm: 4239,
      sourceYear: 2024,
      growthFrom2020: {
        length2020: 3324,
        length2024: 4239,
        growthPercent: 27.5,
      },
      ongoingProjects: 40,
      projectSource: "Parliament answer (Apr 2025)",
    },
    stateHighways: {
      lengthKm: 1100,
      sourceYear: 2019,
      note: "Statista source - verification needed for current length",
    },
    borderRoads: {
      approvedLengthKm: 2280,
      approvedDate: "Oct 2024",
      cost: 4406,
      states: ["Rajasthan", "Punjab"],
      benefitingDistricts: ["Ferozepur", "Tarn Taran", "Gurdaspur", "Pathankot", "Fazilka"],
    },
    majorNationalHighways: [
      {
        number: "NH-44",
        formerNumber: "NH-1",
        description: "Delhi–Ambala–Ludhiana–Jalandhar–Amritsar",
        significance: "Primary north-south spine",
      },
      {
        number: "NH-3",
        description: "Old Delhi–Lahore Grand Trunk Road alignment, Agra–Delhi–Attari segment",
        significance: "Historic GT Road",
      },
      {
        number: "NH-54",
        description: "Amritsar–Pathankot corridor",
        significance: "Majha connectivity",
      },
      {
        number: "NH-62/62A",
        description: "Links to Rajasthan border",
        significance: "Border connectivity",
      },
      {
        number: "NH-254",
        description: "Singh Wala–Dina village section",
        significance: "Ongoing project",
      },
      {
        number: "NH-148A",
        description: "Various cross-links in Malwa",
        significance: "Malwa regional connectivity",
      },
    ],
    congestionHotspots: [
      "Ludhiana (NH-44 corridor)",
      "Jalandhar intersections",
      "Amritsar GT Road",
      "Mohali–Chandigarh approaches",
    ],
    railCrossings: {
      robsConstructedSince2014: 409,
      note: "ROBs = Road Over Bridges, RUBs = Road Under Bridges",
    },
  },

  rail: {
    routeLengthKm: 2265,
    runningTrackLengthKm: 2768,
    totalStations: 286,
    electrificationPercent: 100,
    newTracksSince2014: 382,
    tracksElectrifiedSince2014: 1634,
    railwayZones: ["Northern Railway (Firozpur Division)", "Northern Railway (Ambala Division)"],
    annualBudgetAllocation: 5421,
    ongoingProjectValue: 25000,
    averageInvestmentComparison: {
      years2009to2014: 225,
      allocation2025to2026: 5421,
      multiplier: 24,
    },
    majorJunctions: [
      {
        stationName: "Amritsar Junction",
        code: "ASR",
        category: "NSG-2",
        significance: "Primary international gateway, Golden Temple tourism",
      },
      {
        stationName: "Ludhiana Junction",
        code: "LDH",
        category: "NSG-2",
        significance: "Industrial hub, textile/manufacturing freight",
      },
      {
        stationName: "Jalandhar City Junction",
        code: "JUC",
        category: "NSG-2",
        significance: "Major crossroads, Doaba region hub",
      },
    ],
    stationClassification: [
      { category: "NSG-2", stations: ["Amritsar (ASR)", "Ludhiana (LDH)", "Jalandhar City (JUC)"], note: "Highest category in Punjab" },
      { category: "NSG-3", stations: ["Beas (BEAS)", "Firozpur Cantt (FZR)", "Jalandhar Cantt (JRC)", "Phagwara Junction (PGW)"] },
      { category: "NSG-4", stations: ["Abohar (ABS)", "Bathinda", "Dhuri", "Rajpura"] },
      { category: "Firozpur Division", stations: ["157 passenger stations total"], note: "3 NSG-2, 4 NSG-3, 10 NSG-4, 25 NSG-5, 75 NSG-6 + halt stations" },
    ],
    newTrainServices: [
      {
        name: "Firozpur–New Delhi Vande Bharat Express",
        startPoint: "Firozpur",
        endPoint: "New Delhi",
        launchDate: "Nov 2025",
        details: "First high-speed train for Malwa — 486 km in 6h 40m, stops at Dhuri, Barnala, Bathinda, Faridkot, Patiala",
      },
      {
        name: "Firozpur Cantt–Hazur Sahib Nanded Weekly Express",
        startPoint: "Firozpur Cantt",
        endPoint: "Hazur Sahib Nanded",
        launchDate: "Jun 2025",
        details: "Sikh pilgrimage route",
      },
      {
        name: "Firozpur Cantt–Haridwar Weekly Express",
        startPoint: "Firozpur Cantt",
        endPoint: "Haridwar",
        launchDate: "Jun 2025",
        details: "Religious connectivity",
      },
      {
        name: "Firozpur–Rameswaram Humsafar Express",
        startPoint: "Firozpur",
        endPoint: "Rameswaram",
        launchDate: "Extended",
        details: "Southern connectivity",
      },
      {
        name: "Tripura Sundari Express",
        startPoint: "Firozpur",
        endPoint: "Tripura",
        launchDate: "Extended",
        details: "Northeastern connectivity",
      },
    ],
    stationRedevelopment: [
      { stationName: "Ludhiana", cost: 465, status: "Under redevelopment - largest" },
      { stationName: "Jalandhar Cantt", cost: 99, status: "Under redevelopment" },
      { stationName: "Patiala", cost: 47.5, status: "Under redevelopment" },
      { stationName: "30 stations total", cost: 1122, status: "Total cost across all stations under Amrit Bharat Scheme" },
    ],
    railLinkProjects: [
      {
        project: "Rajpura–Mohali rail line",
        cost: 443,
        impact: "Reduces Ludhiana–Chandigarh by 66 km",
      },
      {
        project: "Firozpur–Patti line",
        cost: 764,
        impact: "Cuts Firozpur–Amritsar by ~100 km",
      },
      {
        project: "Qadian–Beas rail link",
        cost: 840,
        impact: "First sanctioned 1929, revived with revised estimates",
        note: "Historic project revived",
      },
    ],
    freightData: {
      fciDispatchesRakesPerMonth: 500,
      fciTonnagePerRake: "2,500-3,000 tonnes",
      annualFreightCapacity: "Exceeds 150 million tonnes annually from Punjab",
      borderCrossing: {
        name: "Attari (Wagah)",
        type: "sole rail border crossing with Pakistan",
        status: "currently suspended",
        note: "Infrastructure maintained",
      },
    },
  },

  aviation: {
    operationalAirports: [
      {
        name: "Sri Guru Ram Dass Jee International Airport, Amritsar",
        type: "International",
        iataCode: "ATQ",
        status: "Operational — busiest in Punjab, 27th in India",
        capacity: "Terminal capacity: 1.5M passengers/yr",
        note: "New apron constructed",
      },
      {
        name: "Shaheed Bhagat Singh International Airport, Chandigarh",
        type: "International",
        iataCode: "IXC",
        status: "Operational — serves Chandigarh/Mohali/Panchkula tri-city",
        runway: "12,400 ft",
        note: "Opened Oct 2015",
      },
      {
        name: "Ludhiana Airport (Sahnewal)",
        type: "Domestic",
        iataCode: "LUH",
        status: "Operational — limited capacity (20 departure + 20 arrival)",
        note: "UDAN scheme route",
      },
      {
        name: "Bathinda Airport",
        type: "Domestic",
        iataCode: "BUP",
        status: "Operational since Dec 2016",
        capacity: "2 check-in counters, 30-seater hold",
        note: "UDAN route",
      },
      {
        name: "Pathankot Airport",
        type: "Civil",
        iataCode: "IXP",
        status: "Operational — limited Air India service",
        capacity: "150 pax capacity",
      },
      {
        name: "Patiala Airport",
        type: "Domestic",
        iataCode: "",
        status: "Operational",
        runway: "Asphalt runway, 1,167 m",
        note: "Built by Maharaja Bhupinder Singh; 2nd busiest in state",
      },
      {
        name: "Adampur Airport",
        type: "Domestic/Civil",
        iataCode: "AIP",
        status: "UDAN identified — renovation near complete",
        note: "Approach road delayed as of 2023",
      },
      {
        name: "Beas Airport, Amritsar",
        type: "Private",
        iataCode: "",
        status: "Operational",
        note: "Private airfield for Radha Soami Dera. Civil enclave",
      },
    ],
    underConstruction: [
      {
        name: "Shaheed Kartar Singh Sarabha International Airport, Halwara",
        type: "International (3rd)",
        location: "Ludhiana",
        distanceFromCity: "36.5 km from Ludhiana",
        status: "Under construction",
        completionTimeline: "VERIFICATION_NEEDED",
        note: "Initially announced for Jul 2023 but delayed",
      },
    ],
    udanCoveredAirports: ["Ludhiana", "Adampur", "Bathinda", "Pathankot"],
    strategicNotes: [
      "Amritsar (ATQ) handles bulk of international traffic — NRI/diaspora flights from UK, Canada, Middle East critical for Punjab's economy",
      "Chandigarh (IXC) serves as de facto airport for Mohali, Panchkula, and eastern Punjab",
      "Halwara airport will significantly improve Doaba/Malwa air connectivity when complete",
      "No dedicated helipad network for civil use; defense helipads at Adampur Air Force Station and other military facilities",
    ],
  },

  publicTransport: {
    stateBusOperators: [
      {
        name: "PEPSU Road Transport Corporation (PRTC)",
        headquarters: "Patiala",
        newBuses2026: 659,
        fleetBreakdown: [
          { type: "under KM Scheme", count: 250 },
          { type: "standard", count: 309 },
          { type: "Midi buses", count: 100 },
        ],
        note: "Apr 2026 announcement",
      },
      {
        name: "PUNBUS / Punjab Roadways",
        headquarters: "Chandigarh",
        newBuses2026: 606,
        fleetBreakdown: [
          { type: "general fleet", count: 387 },
          { type: "Volvo", count: 19 },
          { type: "HVAC", count: 100 },
          { type: "ordinary under KM Scheme", count: 100 },
        ],
      },
    ],
    electricBusDeployment: {
      totalSanctioned: 347,
      cities: [
        { city: "Amritsar", busesSanctioned: 100 },
        { city: "Ludhiana", busesSanctioned: 100 },
        { city: "Jalandhar", busesSanctioned: 97 },
        { city: "Patiala", busesSanctioned: 50 },
      ],
      depotInfrastructureCost: 45.11,
      procurementModel: "PPP model (Gross Cost Contract) — operator procures, maintains, operates",
      note: "Under PM-eBus Sewa Scheme (Aug 2023, Rs 20,000 crore national)",
    },
    urbanLastMile: [
      { mode: "Auto-rickshaws", coverage: "Ubiquitous in all cities and towns", status: "Operational" },
      { mode: "E-rickshaws", coverage: "Growing rapidly in Ludhiana, Amritsar, Jalandhar, Mohali", status: "Growing" },
      { mode: "Cycle-rickshaws", coverage: "Declining but present in older city cores", status: "Declining" },
      { mode: "Private buses", coverage: "Compete with state operators on inter-city routes", status: "Operational" },
      { mode: "BRT (Bus Rapid Transit)", coverage: "22 km BRT route from Rahwali to Eminabad (Gurdaspur area)", status: "Planned" },
      { mode: "Metro/Suburban rail", coverage: "NOT_AVAILABLE in any Punjab city", status: "Not Available" },
      { mode: "App-based cabs", coverage: "Ola/Uber in major cities (Ludhiana, Amritsar, Jalandhar, Mohali, Patiala)", status: "Operational" },
    ],
    brtPlans: [
      {
        route: "Rahwali to Eminabad",
        length: "22 km",
        status: "Planned (Gurdaspur area)",
      },
    ],
    metroStatus: {
      status: "Not Available",
      note: "Chandigarh Metro planned but delayed",
    },
  },

  connectivity: {
    criticalGaps: [
      {
        region: "Southwest Malwa (Mansa, Muktsar, Fazilka)",
        description: "Limited rail connectivity; dependent on road transport. Rail links are single-line branch routes with low frequency",
        transportType: "Rail",
        severity: "High",
      },
      {
        region: "Border belt (Ferozepur, Tarn Taran, Gurdaspur border areas)",
        description: "Road improvement underway but many villages still have limited all-weather connectivity. No airports in border zone",
        transportType: "Road",
        severity: "High",
      },
      {
        region: "Airstrip/Airport deserts",
        description: "No operational airport between Amritsar and Bathinda (entire Malwa belt)",
        transportType: "Air",
        severity: "High",
      },
      {
        region: "Suburban rail absence",
        description: "Ludhiana (pop. 1.6M+), Amritsar, Jalandhar have no suburban rail — intra-city congestion severe",
        transportType: "Suburban Rail",
        severity: "Medium",
      },
      {
        region: "Last-mile rural",
        description: "Despite PMGSY, some habitations in riverine/border belts (Sutlej/Beas flood plains, Indo-Pak border) remain poorly connected",
        transportType: "Last-Mile",
        severity: "Medium",
      },
    ],
    politicalImplications: [
      {
        party: "AAP",
        narrative: "Bhagwant Mann government claims credit for bus fleet expansion (1,265 new buses), railway investment push (Rs 25,000 crore projects, Vande Bharat for Firozpur), border road sanction, and e-bus deployment",
      },
      {
        party: "Congress",
        narrative: "Rail investment is Union government-driven (PM Modi/Railway Ministry), not AAP credit. State road quality has deteriorated under AAP. PRTC/PUNBUS fleet expansion comes after years of neglect — 2022 fleet was severely depleted. Bus hiring under KM Scheme (private operators) is privatization by another name",
      },
      {
        party: "SAD-BJP",
        narrative: "Historical infrastructure development legacy, though BJP's national policies often attributed",
      },
    ],
  },

  sources: [
    { id: 1, title: "CEIC Data — Length of National Highways: Punjab (4,239.320 km, 2024)" },
    { id: 2, title: "Babushahi.com — Punjab's Railways get major boost in 2025 (Dec 28, 2025)" },
    { id: 3, title: "Babushahi.com — 347 e-buses for Amritsar, Ludhiana, Jalandhar, Patiala (Feb 16, 2025)" },
    { id: 4, title: "Grokipedia — List of railway stations in Punjab, India (~286 stations, 2,265 km route)" },
    { id: 5, title: "GoDigit — List of 8 Domestic & International Airports in Punjab" },
    { id: 6, title: "Wikipedia — List of airports in Punjab, India" },
    { id: 7, title: "Financial Express — 2,280 km roads in Rajasthan and Punjab border areas (Oct 19, 2024)" },
    { id: 8, title: "Punjab News Express — 1,265 buses into PRTC & PUNBUS (Apr 12, 2026)" },
    { id: 9, title: "PIB — 99.2% Broad Gauge network electrified (Dec 17, 2025)" },
    { id: 10, title: "NHAI Instagram — 6-lane access-controlled spur (Feb 19, 2026)" },
    { id: 11, title: "Parliament (Sansad) — 40 NH projects ongoing in Punjab (Apr 2, 2025)" },
    { id: 12, title: "Statista — Punjab state highways ~1,100 km (FY2019)" },
    { id: 13, title: "PRTC official website (pepsurtc.com) — Route and service information" },
    { id: 14, title: "PUNBUS official website (punbusonline.com) — Fleet GPS, WiFi capabilities" },
  ],

  researchDate: "19 May 2026",
  dataCurrency: "2024-2026",
};

/**
 * Get road network summary for dashboard
 */
export function getRoadNetworkSummary(): { totalNH: number; totalSH: number; borderRoads: number; ongoingProjects: number } {
  return {
    totalNH: transportKPIData.road.nationalHighways.totalLengthKm,
    totalSH: transportKPIData.road.stateHighways.lengthKm,
    borderRoads: transportKPIData.road.borderRoads.approvedLengthKm,
    ongoingProjects: transportKPIData.road.nationalHighways.ongoingProjects,
  };
}

/**
 * Get railway network summary for dashboard
 */
export function getRailwaySummary(): { routeLength: number; stations: number; electrified: string; ongoingProjects: number } {
  return {
    routeLength: transportKPIData.rail.routeLengthKm,
    stations: transportKPIData.rail.totalStations,
    electrified: `${transportKPIData.rail.electrificationPercent}%`,
    ongoingProjects: transportKPIData.rail.ongoingProjectValue,
  };
}

/**
 * Get aviation summary for dashboard
 */
export function getAviationSummary(): { operationalAirports: number; international: number; underConstruction: number } {
  const airports = transportKPIData.aviation.operationalAirports;
  return {
    operationalAirports: airports.length,
    international: airports.filter(a => a.type === "International").length,
    underConstruction: transportKPIData.aviation.underConstruction.length,
  };
}

/**
 * Get public transport summary for dashboard
 */
export function getPublicTransportSummary(): { newBuses2026: number; electricBuses: number; operators: string[] } {
  return {
    newBuses2026: transportKPIData.publicTransport.stateBusOperators.reduce((sum, op) => sum + op.newBuses2026, 0),
    electricBuses: transportKPIData.publicTransport.electricBusDeployment.totalSanctioned,
    operators: transportKPIData.publicTransport.stateBusOperators.map(op => op.name),
  };
}

/**
 * Get connectivity gaps by severity
 */
export function getConnectivityGapsBySeverity(severity: "High" | "Medium" | "Low"): ConnectivityGap[] {
  return transportKPIData.connectivity.criticalGaps.filter(gap => gap.severity === severity);
}

/**
 * Get all high-severity connectivity gaps
 */
export function getHighSeverityGaps(): ConnectivityGap[] {
  return getConnectivityGapsBySeverity("High");
}

/**
 * Get political implications for a specific party
 */
export function getTransportPoliticalImplications(party: "AAP" | "Congress" | "SAD-BJP"): PoliticalImplication | undefined {
  return transportKPIData.connectivity.politicalImplications.find(p => p.party === party);
}

/**
 * Get airports by type
 */
export function getAirportsByTransportType(type: "International" | "Domestic" | "Civil" | "Private"): Airport[] {
  return transportKPIData.aviation.operationalAirports.filter(a => a.type === type);
}

/**
 * Get major railway junctions
 */
export function getMajorRailwayJunctions(): MajorJunction[] {
  return transportKPIData.rail.majorJunctions;
}

/**
 * Get new train services
 */
export function getNewRailTrainServices(): NewTrainService[] {
  return transportKPIData.rail.newTrainServices;
}

/**
 * Get rail link projects
 */
export function getRailLinkProjectsData(): RailLinkProject[] {
  return transportKPIData.rail.railLinkProjects;
}

// ==========================================
// INFRASTRUCTURE: POWER, WATER & TELECOM
// Source: MP1-foundational/geography/infra-utilities.md
// Research Date: 19 May 2026 | Data Currency: 2025-2026
// ==========================================

import type {
  InfraUtilitiesKPI,
  FreeElectricityScheme,
  TariffCuts,
  PSPCLFinance,
  ElectricitySupplyQuality,
  SolarPumpData,
  GroundwaterCrisis,
  DistrictGroundwaterStatus,
  ContaminationData,
  ROPlantsData,
  CanalIrrigationData,
  JalJeevanMissionData,
  MobileCoverageData,
  BharatNetData,
  CallQualityData,
  AAPVulnerability,
  CongressMessageOpportunity,
  InfraUtilitiesSource,
} from "@/types/infra-utilities-types";

// ----------------------------------------
// ELECTRICITY DATA
// ----------------------------------------

/**
 * Free Electricity Scheme Details
 */
export const freeElectricityScheme: FreeElectricityScheme = {
  freeUnitsPerMonth: 300,
  freeUnitsBiMonthly: 600,
  startDate: "July 2022",
  householdCoverage: 90,
  targetCategories: ["SC", "BC", "BPL", "domestic broadly covered"],
};

/**
 * Pre-Election Tariff Cuts (March 2026)
 */
export const tariffCuts: TariffCuts = {
  date: "March 2026",
  electionContext: "ahead of Feb 2027 elections",
  domestic: {
    upTo300Units: 30,
    above300Units: 13,
  },
  agriculture: 20,
  commercial: 11,
};

/**
 * PSPCL Financial/Subsidy Data
 */
export const pspclFinance: PSPCLFinance = {
  annualSubsidyFY2024_25: 10175,
  annualSubsidyFY2025_26: 20500,
  annualSubsidyFY2026_27: 15200.55,
  cumulativeUnpaidSubsidy: 11109.70,
  tdLossesClaimed: 10,
  pspsclRating: "A+ (2nd nationally)",
  averageCostOfSupply: {
    before: 7.15,
    after: 6.15,
    reduction: 14,
  },
  goindwalSahibThermalPlantPLF: 82,
};

/**
 * Electricity Supply Quality
 */
export const electricitySupply: ElectricitySupplyQuality = {
  urbanSupply: "near-24-hour in major cities (Ludhiana, Amritsar, Chandigarh periphery)",
  ruralSupply: "18-22 hours generally",
  peakAgriculturalSeason: "June-July (paddy transplanting)",
  problemAreas: ["rural Malwa", "border belt"],
  transformerFailures: "chronic issue",
  newJobsCreated: 9593,
  newInfrastructure: "new substations and transformers installed under AAP infrastructure push",
};

/**
 * Solar Pumps & PM-KUSUM Data
 */
export const solarPumpData: SolarPumpData = {
  pmKusumComponentC: {
    pumpsAvailable: 20000,
    hpLimit: 7.5,
    description: "solarisation of grid-connected agriculture pumps up to 7.5 HP",
  },
  pmKusumPhaseI: {
    endDate: "March 2026",
    status: "ending",
  },
  pmKusum20: {
    status: "under consideration",
  },
  totalTubewells: 1450000,
  solarPumpPenetration: {
    percentage: 2,
    status: "LOW",
  },
};

// ----------------------------------------
// WATER DATA
// ----------------------------------------

/**
 * Groundwater Crisis Data
 */
export const groundwaterCrisis: GroundwaterCrisis = {
  annualRecharge: 18.60,
  annualExtraction: 26.27,
  stageOfExtraction: 156.36,
  nationalAverageExtraction: 60.63,
  blockStatus: {
    totalBlocks: 153,
    overExploited: { count: 111, percentage: 72.55 },
    critical: { count: 10, percentage: 6.54 },
    semiCritical: { count: 15, percentage: 9.80 },
    safe: { count: 17, percentage: 11.11 },
  },
  irrigationShareOfExtraction: 94.74,
  waterTableDecline: {
    averageRate: "0.5-1 meter/year",
    worstAreaRate: "up to 46 cm/yr",
  },
  cgwbProjection: "Last drop of usable groundwater in 14 years",
  historicalExtraction: {
    year2000: 163.76,
    year2022: 163.76,
    year2025: 156.36,
  },
};

/**
 * District Groundwater Status
 */
export const districtGroundwaterStatus: DistrictGroundwaterStatus[] = [
  { district: "Muktsar", status: "100% safe" },
  { district: "Pathankot", status: "66.67% safe" },
  { district: "Fazilka", status: "60% safe" },
  { district: "Bathinda", status: "100% over-exploited" },
  { district: "Mansa", status: "100% over-exploited" },
  { district: "Sangrur", status: "100% over-exploited" },
  { district: "Barnala", status: "100% over-exploited" },
  { district: "Ferozepur", status: "100% over-exploited" },
  { district: "Moga", status: "100% over-exploited" },
  { district: "Faridkot", status: "100% over-exploited" },
  { district: "Patiala", status: "100% over-exploited" },
  { district: "Ludhiana", status: "100% over-exploited" },
];

/**
 * Contamination Data
 */
export const contaminationData: ContaminationData = {
  uranium: {
    exceedanceRate: 62.5,
    whoSafeLimit: 30,
    status: "WORST IN INDIA",
    preMonsoon: 53.04,
    postMonsoon: 62.5,
    worstAffectedDistricts: ["Bathinda", "Mansa", "Faridkot", "Ferozepur", "Muktsar", "Fazilka", "Sangrur"],
  },
  arsenic: {
    exceedanceRate: 9.5,
    majhaBelt: {
      percentage: 60,
      districts: ["Amritsar", "Gurdaspur", "Tarn Taran"],
    },
    otherDistricts: ["Fazilka", "Muktsar", "Bathinda"],
  },
  fluoride: {
    exceedanceRate: 11.24,
    safeLimit: 1.5,
  },
  nitrate: {
    exceedanceRate: 14.6,
    cause: "linked to fertiliser overuse",
  },
  electricalConductivity: {
    exceedanceRate: 7.01,
    standard: "BIS limit",
  },
  contaminationHotspots: [
    "Bathinda", "Mansa", "Sangrur", "Patiala", "Ludhiana", "Amritsar",
    "Fazilka", "Muktsar", "Faridkot", "Ferozepur", "Gurdaspur", "Tarn Taran",
  ],
};

/**
 * RO Plants Data
 */
export const roPlantsData: ROPlantsData = {
  installed: 1000,
  funding: "World Bank-funded programme",
  maintenanceStatus: "widespread reports of dysfunctional RO plants",
  maintenanceModel: "contracted to private operators, many abandoned",
  jjmShift: "focus moving from RO plants to piped surface water schemes but transition incomplete",
};

/**
 * Canal Irrigation Data
 */
export const canalIrrigationData: CanalIrrigationData = {
  areaUnderCanal: {
    year2022: 2.23,
    year2025: 4.78,
  },
  investment: {
    canalRestorationFY2022_25: 4557,
  },
  infrastructure: {
    canalsCleaned: 15539,
    watercoursesRestored: 18349,
    locationsReceivingWater: 1356,
  },
  firstTimeCanalWater: {
    year2023: 57,
    villages: 47,
  },
  tubewellDependency: 73,
  tailEndEquity: {
    issue: "head-reach outlets draw 3-6x more water than tail-end outlets",
    recentImprovements: "pipelining (UGPL) of last-mile canals has improved tail-end delivery in some areas",
    examples: [
      { distributary: "Sohelewala", before: 1, after: 23 },
      { distributary: "Karamgarh", before: 9, after: 38 },
    ],
    structuralBottlenecks: "some distributaries (e.g., 2-R in BML division) showed only 2% increase",
  },
};

/**
 * Jal Jeevan Mission Data
 */
export const jalJeevanMissionData: JalJeevanMissionData = {
  punjabCoverage2022: "~99% rural tap water coverage (claimed, disputed)",
  nationalMilestone: "~75% milestone crossed",
  nationalRuralCoverageLate2025: 81,
  verificationNeeded: "Punjab-specific JJM coverage percentage - state claims very high coverage but CAG audit flagged issues",
  cagAudit: {
    date: "May 2025",
    finding: "Punjab was already implementing World Bank-funded water project when JJM launched, creating parallel implementation challenges",
    context: "World Bank-funded water project overlap with JJM",
  },
};

// ----------------------------------------
// TELECOM DATA
// ----------------------------------------

/**
 * Mobile Coverage Data
 */
export const mobileCoverageData: MobileCoverageData = {
  overallStatus: "relatively well-covered compared to many Indian states",
  reasons: ["high population density", "flat terrain"],
  majorOperators: ["Jio", "Airtel", "BSNL", "Vi"],
  networkTechnology: {
    fourG: {
      status: "strong in urban areas and along highways",
      dominantPlayers: ["Jio", "Airtel"],
    },
    fiveG: {
      status: "launched in major cities",
      launchYear: "since late 2022",
      cities: ["Ludhiana", "Amritsar", "Chandigarh", "Jalandhar", "Patiala"],
      providers: ["Jio", "Airtel"],
    },
  },
  darkZones: {
    description: "areas with restricted tower installation due to BSF/proximity to Pakistan border",
    borderBelt: ["Ferozepur", "Tarn Taran", "Gurdaspur", "Pathankot"],
    kandiBelt: ["Hoshiarpur foothills"],
    malwaVillages: "some Malwa villages",
    reason: "BSF/proximity to Pakistan border",
  },
  bsnl: {
    fourGTowers: 65000,
    asOfDate: "Jan 2025",
    punjabCircleStatus: "included but coverage lags Jio/Airtel",
  },
  verificationNeeded: ["district-wise 4G dark zone data", "call drop rates for Punjab circle"],
};

/**
 * BharatNet & Rural Broadband Data
 */
export const bharatNetData: BharatNetData = {
  national: {
    projectGoal: "connect 2.5 lakh Gram Panchayats with fiber broadband",
    serviceReadyMarch2025: 218347,
  },
  punjab: {
    totalGramPanchayats: 13000,
    fiberConnectedStatus: "majority fiber-connected under Phase I/II",
  },
  utilizationGap: {
    issue: "fiber reaching villages but last-mile FTTH connections remain low",
    nationalCriticism: "common BharatNet criticism nationally",
  },
  claims: {
    opticalFiber: "6.92 lakh km",
    ftthConnections: "12 lakh+",
    verificationNeeded: "state-specific data verification needed",
  },
  bbnlMerger: "merged into BSNL to expedite rollout",
};

/**
 * Call Quality Data
 */
export const callQualityData: CallQualityData = {
  traiMandate: {
    date: "April 2025",
    action: "mandated mobile coverage maps published by all TSPs",
  },
  ooklaData: {
    period: "H1 2025",
    fiveGDetectionNational: 77.8,
    punjabAssessment: "likely above average",
  },
  verificationNeeded: ["call drop rates", "specific Punjab QoS data (TRAI quarterly reports)"],
};

// ----------------------------------------
// STRATEGIC INTELLIGENCE DATA
// ----------------------------------------

/**
 * AAP Vulnerabilities on Infrastructure
 */
export const aapVulnerabilities: AAPVulnerability[] = [
  {
    id: 1,
    title: "Free electricity is financially unsustainable",
    description: "Subsidy burden of 15,200+ crore/year with 11,109 crore in unpaid arrears. PSERC's own engineers questioned the 10% T&D loss claim as election-driven manipulation.",
    keyPoints: [
      "Subsidy burden: 15,200+ crore/year",
      "Unpaid arrears: 11,109 crore",
      "T&D loss claim disputed by power engineers' body",
    ],
  },
  {
    id: 2,
    title: "Groundwater crisis is existential",
    description: "72.55% of blocks over-exploited, 156% extraction rate, water tables declining 0.5-1m/year. Free tubewell power ACCELERATES depletion.",
    keyPoints: [
      "72.55% of blocks over-exploited",
      "156% extraction rate",
      "Water tables declining 0.5-1m/year",
      "Free tubewell power directly worsens groundwater crisis",
    ],
  },
  {
    id: 3,
    title: "Contamination health crisis",
    description: "62.5% uranium exceedance (worst in India), arsenic in Majha, fluoride in Malwa. RO plants installed but poorly maintained.",
    keyPoints: [
      "62.5% uranium exceedance - worst in India",
      "Arsenic contamination in Majha belt",
      "Fluoride contamination in Malwa",
      "RO plants dysfunctional and poorly maintained",
    ],
  },
  {
    id: 4,
    title: "Canal water expansion is real but uneven",
    description: "Tail-end farmers still disadvantaged. New infrastructure needs sustained maintenance spending.",
    keyPoints: [
      "Canal area expanded from 2.23M to 4.78M acres",
      "Tail-end equity remains chronic problem",
      "Some distributaries showed only 2% improvement",
    ],
  },
  {
    id: 5,
    title: "Telecom dark zones in border areas",
    description: "Security restrictions limit towers, but residents suffer. Political issue in border belt constituencies.",
    keyPoints: [
      "Dark zones: Ferozepur, Tarn Taran, Gurdaspur, Pathankot",
      "Kandi belt (Hoshiarpur) also affected",
      "BSF restrictions on tower installation",
    ],
  },
];

/**
 * Congress Messaging Opportunities
 */
export const congressOpportunities: CongressMessageOpportunity[] = [
  {
    id: 1,
    message: "Free electricity today, no water tomorrow",
    description: "Link free tubewell power to groundwater crisis",
  },
  {
    id: 2,
    message: "Demand audit of PSPCL's 10% T&D loss claim",
    description: "Engineer's body already challenged it - use this to question AAP's claims",
  },
  {
    id: 3,
    message: "Highlight contamination crisis",
    description: "Demand safe drinking water as a right, not just RO plants that break down",
  },
  {
    id: 4,
    message: "Push for crop diversification away from paddy",
    description: "Reduce water extraction - AAP's free power policy accelerates depletion",
  },
  {
    id: 5,
    message: "Target border belt with telecom connectivity promises",
    description: "Political mileage from telecom dark zones in Ferozepur, Tarn Taran, Gurdaspur, Pathankot",
  },
];

// ----------------------------------------
// SOURCES
// ----------------------------------------

export const infraUtilitiesSources: InfraUtilitiesSource[] = [
  { id: 1, title: "Punjab's Power Sector Revolution", source: "ET Energy World", date: "Apr 6, 2026" },
  { id: 2, title: "Post tariff cuts, Punjab power subsidy bill to drop by 5,300 crore", source: "Hindustan Times", date: "Mar 7, 2026" },
  { id: 3, title: "Ahead of 2027 Assembly elections, Punjab slashes electricity prices", source: "Indian Express", date: "Mar 6, 2026" },
  { id: 4, title: "Punjab Cuts Power Tariffs for FY 2027 as 78.5 Billion Surplus Emerges", source: "Mercom India", date: "Mar 10, 2026" },
  { id: 5, title: "Centre's new power policy may end Punjab's free electricity", source: "OpIndia", date: "Oct 19, 2025" },
  { id: 6, title: "Annual Ground Water Quality Report 2025", source: "CGWB - Ministry of Jal Shakti", date: "2025" },
  { id: 7, title: "62.50% of groundwater samples from Punjab have uranium above safety threshold", source: "New Indian Express", date: "Nov 27, 2025" },
  { id: 8, title: "Punjab leads with 156% groundwater extraction", source: "Times of India", date: "Dec 3, 2025" },
  { id: 9, title: "Dynamic Ground Water Resources of India 2025", source: "CGWB", date: "2025" },
  { id: 10, title: "Punjab claims growth trends in canal discharge", source: "Times of India", date: "Jan 31, 2026" },
  { id: 11, title: "Accelerating Pipelining of Last Mile Canal Irrigation in Punjab", source: "ICID", date: "Mar 2025" },
  { id: 12, title: "Punjab's Ailing Groundwater Governance", source: "PANJ.org", date: "Feb 2025" },
  { id: 13, title: "Groundwater: Rising Depletion and Contamination in 2025", source: "SANDRP", date: "Mar 2026" },
  { id: 14, title: "Toward Managing Rural Drinking Water Quality in the State of Punjab", source: "World Bank", date: "2025" },
  { id: 15, title: "BharatNet: Extending Internet Access", source: "PIB", date: "Apr 2025" },
  { id: 16, title: "Mobile Connectivity and Its Impact on Rural India", source: "Ookla", date: "Oct 2025" },
  { id: 17, title: "Telecom Service Providers publish mobile network coverage map", source: "PIB", date: "Apr 9, 2025" },
  { id: 18, title: "Jal Jeevan Mission: Tap water reaches 79.74% of rural households", source: "PIB", date: "Feb 2025" },
  { id: 19, title: "Ministry of Jal Shakti on Punjab groundwater", source: "Lok Sabha Question", date: "Feb 12, 2026" },
  { id: 20, title: "PSPCL Revenue Puzzle", source: "Punjab Today News", date: "Mar 17, 2026" },
];

// ----------------------------------------
// COMPLETE KPI DATA STRUCTURE
// ----------------------------------------

export const infraUtilitiesKPI: InfraUtilitiesKPI = {
  reportDate: "19 May 2026",
  megaPillar: "MP1 — Foundational Scan (Geography & Infrastructure)",
  agent: "Research Agent (Single-Pass)",
  status: "COMPLETE",

  freeElectricityScheme,
  tariffCuts,
  pspclFinance,
  electricitySupply,
  solarPumps: solarPumpData,

  groundwaterCrisis,
  districtGroundwaterStatus,
  contamination: contaminationData,
  roPlants: roPlantsData,
  canalIrrigation: canalIrrigationData,
  jalJeevanMission: jalJeevanMissionData,

  mobileCoverage: mobileCoverageData,
  bharatNet: bharatNetData,
  callQuality: callQualityData,

  aapVulnerabilities,
  congressOpportunities,

  sources: infraUtilitiesSources,
};

// ----------------------------------------
// UTILITY FUNCTIONS
// ----------------------------------------

/**
 * Get groundwater crisis severity assessment
 */
export function getGroundwaterCrisisSeverity(): {
  severity: "critical" | "warning" | "moderate";
  extractionRate: number;
  nationalAverage: number;
  percentageAboveNational: number;
} {
  const extractionRate = groundwaterCrisis.stageOfExtraction;
  const nationalAverage = groundwaterCrisis.nationalAverageExtraction;
  const percentageAboveNational = ((extractionRate - nationalAverage) / nationalAverage) * 100;

  let severity: "critical" | "warning" | "moderate";
  if (extractionRate > 150) {
    severity = "critical";
  } else if (extractionRate > 100) {
    severity = "warning";
  } else {
    severity = "moderate";
  }

  return {
    severity,
    extractionRate,
    nationalAverage,
    percentageAboveNational,
  };
}

/**
 * Get contamination exceedance by type
 */
export function getContaminationExceedance(type: "uranium" | "arsenic" | "fluoride" | "nitrate"): number {
  const contaminationMap = {
    uranium: contaminationData.uranium.exceedanceRate,
    arsenic: contaminationData.arsenic.exceedanceRate,
    fluoride: contaminationData.fluoride.exceedanceRate,
    nitrate: contaminationData.nitrate.exceedanceRate,
  };
  return contaminationMap[type];
}

/**
 * Get canal irrigation growth
 */
export function getCanalIrrigationGrowth(): { before: number; after: number; percentageIncrease: number } {
  const before = canalIrrigationData.areaUnderCanal.year2022;
  const after = canalIrrigationData.areaUnderCanal.year2025;
  const percentageIncrease = ((after - before) / before) * 100;
  return { before, after, percentageIncrease };
}

/**
 * Get PSPCL subsidy burden summary
 */
export function getPSPCLSubsidySummary(): {
  fy2026_27: number;
  cumulativeUnpaid: number;
  tdLosses: number;
  rating: string;
} {
  return {
    fy2026_27: pspclFinance.annualSubsidyFY2026_27,
    cumulativeUnpaid: pspclFinance.cumulativeUnpaidSubsidy,
    tdLosses: pspclFinance.tdLossesClaimed,
    rating: pspclFinance.pspsclRating,
  };
}

/**
 * Get dark zone districts
 */
export function getDarkZoneDistricts(): string[] {
  return [
    ...mobileCoverageData.darkZones.borderBelt,
    ...mobileCoverageData.darkZones.kandiBelt,
  ];
}

/**
 * Get over-exploited blocks percentage
 */
export function getOverExploitedBlocksPercentage(): number {
  return groundwaterCrisis.blockStatus.overExploited.percentage;
}

/**
 * Get AAP vulnerability by ID
 */
export function getAAPVulnerabilityById(id: number): AAPVulnerability | undefined {
  return aapVulnerabilities.find(v => v.id === id);
}

/**
 * Get Congress opportunity by ID
 */
export function getCongressOpportunityById(id: number): CongressMessageOpportunity | undefined {
  return congressOpportunities.find(o => o.id === id);
}

/**
 * Check if district is contamination hotspot
 */
export function isContaminationHotspot(district: string): boolean {
  return contaminationData.contaminationHotspots.some(h => h.toLowerCase() === district.toLowerCase());
}

/**
 * Get district groundwater status
 */
export function getDistrictGroundwaterStatus(district: string): DistrictGroundwaterStatus | undefined {
  return districtGroundwaterStatus.find(d => d.district.toLowerCase() === district.toLowerCase());
}

/**
 * Get major telecom operators
 */
export function getMajorTelecomOperators(): string[] {
  return mobileCoverageData.majorOperators;
}

/**
 * Get 5G cities in Punjab
 */
export function get5GCities(): string[] {
  return mobileCoverageData.networkTechnology.fiveG.cities;
}

// ==========================================
// POLITICAL GEOGRAPHY DATA
// Derived from: MP1-foundational/geography/political-geography.md
// ==========================================

import type {
  PunjabStateProfile,
  RegionProfile,
  DistrictProfile,
  AssemblyConstituency,
  LokSabhaConstituency,
  SCReservedData,
  UrbanRuralSummary,
  UrbanACList,
  CampaignCluster,
  TravelRoute,
  PollingStationData,
  AccessibilityChallenge,
  BorderConstituency,
  GISSource,
  DataGap as PoliticalDataGap,
  StrategicInsight,
} from "@/types/political-geography-types";

/**
 * Punjab State Profile
 */
export const punjabStateProfile: PunjabStateProfile = {
  totalArea: 50362,
  totalPopulation2011: 27743338,
  estimatedPopulation2026: 30000000,
  populationDensity2011: 551,
  urbanPopulationPercent: 37.5,
  ruralPopulationPercent: 62.5,
  totalElectors2022: 21499804,
  maleElectors: 11298081,
  femaleElectors: 10200996,
  transgenderElectors: 727,
  voterTurnout2022: 72.15,
  internationalBorder: "Pakistan (553 km along west)",
  neighboringStates: "Haryana (south/east), Himachal Pradesh (north/east), Rajasthan (southwest)",
  capital: "Chandigarh (Union Territory, shared with Haryana)",
  researchDate: "19 May 2026",
  classification: "STRATEGIC -- Campaign Planning Intelligence",
};

/**
 * Region Profiles
 */
export const regionProfiles: RegionProfile[] = [
  {
    name: "Malwa",
    meaning: "South of Sutlej",
    rivers: "South of Sutlej",
    districts: ["Ludhiana", "Patiala", "Bathinda", "Moga", "Firozpur", "Fazilka", "Sri Muktsar Sahib", "Faridkot", "Mansa", "Sangrur", "Barnala", "Malerkotla", "Rupnagar", "SAS Nagar", "Fatehgarh Sahib"],
    districtCount: 14,
    totalACs: 69,
    totalElectorate: 12685903,
    avgConstituencySize: 183855,
    keyCharacteristics: "Agricultural belt, Congress traditional stronghold (pre-2022), AAP swept 62 of 69 seats in 2022",
  },
  {
    name: "Majha",
    meaning: "Central land",
    rivers: "Between Beas and Ravi",
    districts: ["Amritsar", "Gurdaspur", "Tarn Taran", "Pathankot", "Kapurthala (partial)"],
    districtCount: 5,
    totalACs: 25,
    totalElectorate: 4583920,
    avgConstituencySize: 183357,
    keyCharacteristics: "Sikh heartland, border belt",
  },
  {
    name: "Doaba",
    meaning: "Land of two rivers",
    rivers: "Between Sutlej and Beas",
    districts: ["Jalandhar", "Kapurthala", "Hoshiarpur", "SBS Nagar"],
    districtCount: 4,
    totalACs: 23,
    totalElectorate: 4083981,
    avgConstituencySize: 177564,
    keyCharacteristics: "NRI belt, Dalit concentration, Doaba voters influential",
  },
];

/**
 * District Profiles
 */
export const districtProfiles: DistrictProfile[] = [
  // Majha
  { name: "Pathankot", region: "Majha", areaSqKm: 2294, population2011: 155940, density: 643, acCount: 3, acNumbers: [1, 2, 3] },
  { name: "Gurdaspur", region: "Majha", areaSqKm: 2610, population2011: 2104011, density: 647, acCount: 7, acNumbers: [4, 5, 6, 7, 8, 9, 10] },
  { name: "Amritsar", region: "Majha", areaSqKm: 5075, population2011: 2490656, density: 928, acCount: 11, acNumbers: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25] },
  { name: "Tarn Taran", region: "Majha", areaSqKm: 2414, population2011: 1112805, density: 464, acCount: 4, acNumbers: [21, 22, 23, 24] },
  // Doaba
  { name: "Kapurthala", region: "Doaba", areaSqKm: 1633, population2011: 817668, density: 499, acCount: 4, acNumbers: [26, 27, 28, 29] },
  { name: "Jalandhar", region: "Doaba", areaSqKm: 2632, population2011: 2193590, density: 836, acCount: 9, acNumbers: [30, 31, 32, 33, 34, 35, 36, 37, 38] },
  { name: "Hoshiarpur", region: "Doaba", areaSqKm: 3365, population2011: 1558423, density: 469, acCount: 7, acNumbers: [39, 40, 41, 42, 43, 44, 45] },
  { name: "SBS Nagar", region: "Doaba", areaSqKm: 1257, population2011: 614362, density: 478, acCount: 3, acNumbers: [46, 47, 48] },
  // Malwa
  { name: "Rupnagar", region: "Malwa", areaSqKm: 1356, population2011: 684627, density: 505, acCount: 3, acNumbers: [49, 50, 51] },
  { name: "SAS Nagar", region: "Malwa", areaSqKm: 1394, population2011: 994628, density: 909, acCount: 3, acNumbers: [52, 53, 112] },
  { name: "Fatehgarh Sahib", region: "Malwa", areaSqKm: 1147, population2011: 600163, density: 509, acCount: 3, acNumbers: [54, 55, 56] },
  { name: "Ludhiana", region: "Malwa", areaSqKm: 3767, population2011: 3487882, density: 978, acCount: 14, acNumbers: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70] },
  { name: "Moga", region: "Malwa", areaSqKm: 1672, population2011: 992289, density: 444, acCount: 4, acNumbers: [71, 72, 73, 74] },
  { name: "Firozpur", region: "Malwa", areaSqKm: 5305, population2011: 2027176, density: 382, acCount: 4, acNumbers: [75, 76, 77, 78] },
  { name: "Fazilka", region: "Malwa", areaSqKm: 3113, population2011: 1042874, density: 329, acCount: 4, acNumbers: [79, 80, 81, 82] },
  { name: "Sri Muktsar Sahib", region: "Malwa", areaSqKm: 2597, population2011: 903075, density: 348, acCount: 4, acNumbers: [83, 84, 85, 86] },
  { name: "Faridkot", region: "Malwa", areaSqKm: 1469, population2011: 617508, density: 424, acCount: 3, acNumbers: [87, 88, 89] },
  { name: "Bathinda", region: "Malwa", areaSqKm: 3385, population2011: 1389271, density: 414, acCount: 6, acNumbers: [90, 91, 92, 93, 94, 95] },
  { name: "Mansa", region: "Malwa", areaSqKm: 2198, population2011: 769463, density: 350, acCount: 3, acNumbers: [96, 97, 98] },
  { name: "Sangrur", region: "Malwa", areaSqKm: 3625, population2011: 1655260, density: 457, acCount: 5, acNumbers: [99, 100, 101, 107, 108] },
  { name: "Barnala", region: "Malwa", areaSqKm: 1393, population2011: 595697, density: 402, acCount: 3, acNumbers: [102, 103, 104] },
  { name: "Malerkotla", region: "Malwa", areaSqKm: 1672, population2011: 428558, density: 0, acCount: 2, acNumbers: [105, 106] },
  { name: "Patiala", region: "Malwa", areaSqKm: 3625, population2011: 1895686, density: 570, acCount: 7, acNumbers: [109, 110, 111, 113, 114, 115, 116, 117] },
];

/**
 * All 117 Assembly Constituencies
 */
export const allAssemblyConstituencies: AssemblyConstituency[] = [
  // Majha (AC# 1-25)
  { acNumber: 1, acName: "Sujanpur", district: "Pathankot", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 167230, classification: "Rural" },
  { acNumber: 2, acName: "Bhoa", district: "Pathankot", region: "Majha", reservation: "SC", lokSabha: "Gurdaspur", electorate2022: 182915, classification: "Rural" },
  { acNumber: 3, acName: "Pathankot", district: "Pathankot", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 152519, classification: "Semi-Urban" },
  { acNumber: 4, acName: "Gurdaspur", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 169628, classification: "Semi-Urban" },
  { acNumber: 5, acName: "Dina Nagar", district: "Gurdaspur", region: "Majha", reservation: "SC", lokSabha: "Gurdaspur", electorate2022: 192562, classification: "Rural" },
  { acNumber: 6, acName: "Qadian", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 181907, classification: "Rural" },
  { acNumber: 7, acName: "Batala", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 188862, classification: "Semi-Urban" },
  { acNumber: 8, acName: "Shri Hargobindpur", district: "Gurdaspur", region: "Majha", reservation: "SC", lokSabha: "Hoshiarpur", electorate2022: 178734, classification: "Rural" },
  { acNumber: 9, acName: "Fatehgarh Churian", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 175730, classification: "Rural" },
  { acNumber: 10, acName: "Dera Baba Nanak", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 194613, classification: "Rural" },
  { acNumber: 11, acName: "Ajnala", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 157161, classification: "Rural" },
  { acNumber: 12, acName: "Raja Sansi", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 177713, classification: "Rural" },
  { acNumber: 13, acName: "Majitha", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 166136, classification: "Rural" },
  { acNumber: 14, acName: "Jandiala", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Khadoor Sahib", electorate2022: 180674, classification: "Rural" },
  { acNumber: 15, acName: "Amritsar North", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 202095, classification: "Urban" },
  { acNumber: 16, acName: "Amritsar West", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar", electorate2022: 214073, classification: "Urban" },
  { acNumber: 17, acName: "Amritsar Central", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 147058, classification: "Urban" },
  { acNumber: 18, acName: "Amritsar East", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 168013, classification: "Urban" },
  { acNumber: 19, acName: "Amritsar South", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 177605, classification: "Semi-Urban" },
  { acNumber: 20, acName: "Attari", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar", electorate2022: 189475, classification: "Rural" },
  { acNumber: 21, acName: "Tarn Taran", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 196866, classification: "Semi-Urban" },
  { acNumber: 22, acName: "Khem Karan", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 216090, classification: "Rural (Border)" },
  { acNumber: 23, acName: "Patti", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 202155, classification: "Rural" },
  { acNumber: 24, acName: "Khadoor Sahib", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 201328, classification: "Rural" },
  { acNumber: 25, acName: "Baba Bakala", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar", electorate2022: 199929, classification: "Rural" },
  // Doaba (AC# 26-48)
  { acNumber: 26, acName: "Bholath", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 136413, classification: "Rural" },
  { acNumber: 27, acName: "Kapurthala", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 149885, classification: "Semi-Urban" },
  { acNumber: 28, acName: "Sultanpur Lodhi", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 148094, classification: "Rural" },
  { acNumber: 29, acName: "Phagwara", district: "Kapurthala", region: "Doaba", reservation: "SC", lokSabha: "Hoshiarpur", electorate2022: 192867, classification: "Semi-Urban" },
  { acNumber: 30, acName: "Phillaur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar", electorate2022: 207149, classification: "Semi-Urban" },
  { acNumber: 31, acName: "Nakodar", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 194824, classification: "Rural" },
  { acNumber: 32, acName: "Shahkot", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 181946, classification: "Rural" },
  { acNumber: 33, acName: "Kartarpur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar", electorate2022: 184515, classification: "Rural" },
  { acNumber: 34, acName: "Jalandhar West", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar", electorate2022: 171632, classification: "Urban" },
  { acNumber: 35, acName: "Jalandhar Central", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 174003, classification: "Urban" },
  { acNumber: 36, acName: "Jalandhar North", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 192058, classification: "Urban" },
  { acNumber: 37, acName: "Jalandhar Cantt", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 193666, classification: "Urban" },
  { acNumber: 38, acName: "Adampur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar", electorate2022: 167424, classification: "Rural" },
  { acNumber: 39, acName: "Mukerian", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 202924, classification: "Rural" },
  { acNumber: 40, acName: "Dasuya", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 197021, classification: "Rural" },
  { acNumber: 41, acName: "Urmar", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 181007, classification: "Rural" },
  { acNumber: 42, acName: "Sham Chaurasi", district: "Hoshiarpur", region: "Doaba", reservation: "SC", lokSabha: "Hoshiarpur", electorate2022: 177269, classification: "Rural" },
  { acNumber: 43, acName: "Hoshiarpur", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 192794, classification: "Urban" },
  { acNumber: 44, acName: "Chabbewal", district: "Hoshiarpur", region: "Doaba", reservation: "SC", lokSabha: "Hoshiarpur", electorate2022: 161535, classification: "Rural" },
  { acNumber: 45, acName: "Garhshankar", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 175287, classification: "Rural" },
  { acNumber: 46, acName: "Banga", district: "SBS Nagar", region: "Doaba", reservation: "SC", lokSabha: "Anandpur Sahib", electorate2022: 165283, classification: "Rural" },
  { acNumber: 47, acName: "Nawan Shahr", district: "SBS Nagar", region: "Doaba", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 177231, classification: "Semi-Urban" },
  { acNumber: 48, acName: "Balachaur", district: "SBS Nagar", region: "Doaba", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 155145, classification: "Rural" },
  // Malwa (AC# 49-117)
  { acNumber: 49, acName: "Anandpur Sahib", district: "Rupnagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 191727, classification: "Semi-Urban" },
  { acNumber: 50, acName: "Rupnagar", district: "Rupnagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 183115, classification: "Semi-Urban" },
  { acNumber: 51, acName: "Chamkaur Sahib", district: "Rupnagar", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib", electorate2022: 197330, classification: "Rural" },
  { acNumber: 52, acName: "Kharar", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 266514, classification: "Semi-Urban" },
  { acNumber: 53, acName: "S.A.S. Nagar", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 238998, classification: "Urban" },
  { acNumber: 54, acName: "Bassi Pathana", district: "Fatehgarh Sahib", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib", electorate2022: 149248, classification: "Rural" },
  { acNumber: 55, acName: "Fatehgarh Sahib", district: "Fatehgarh Sahib", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib", electorate2022: 161754, classification: "Semi-Urban" },
  { acNumber: 56, acName: "Amloh", district: "Fatehgarh Sahib", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib", electorate2022: 144482, classification: "Rural" },
  { acNumber: 57, acName: "Khanna", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 171622, classification: "Semi-Urban" },
  { acNumber: 58, acName: "Samrala", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 175822, classification: "Rural" },
  { acNumber: 59, acName: "Sahnewal", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 265097, classification: "Rural" },
  { acNumber: 60, acName: "Ludhiana East", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 217728, classification: "Urban" },
  { acNumber: 61, acName: "Ludhiana South", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 178167, classification: "Urban" },
  { acNumber: 62, acName: "Atam Nagar", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 170654, classification: "Urban" },
  { acNumber: 63, acName: "Ludhiana Central", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 158931, classification: "Urban" },
  { acNumber: 64, acName: "Ludhiana West", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 182455, classification: "Urban" },
  { acNumber: 65, acName: "Ludhiana North", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 205063, classification: "Urban" },
  { acNumber: 66, acName: "Gill", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Ludhiana", electorate2022: 273104, classification: "Semi-Urban" },
  { acNumber: 67, acName: "Payal", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib", electorate2022: 165608, classification: "Rural" },
  { acNumber: 68, acName: "Dakha", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 187760, classification: "Rural" },
  { acNumber: 69, acName: "Raikot", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib", electorate2022: 156301, classification: "Rural" },
  { acNumber: 70, acName: "Jagraon", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Ludhiana", electorate2022: 184819, classification: "Rural" },
  { acNumber: 71, acName: "Nihal Singhwala", district: "Moga", region: "Malwa", reservation: "SC", lokSabha: "Faridkot", electorate2022: 197869, classification: "Rural" },
  { acNumber: 72, acName: "Bagha Purana", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 172120, classification: "Rural" },
  { acNumber: 73, acName: "Moga", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 203541, classification: "Semi-Urban" },
  { acNumber: 74, acName: "Dharamkot", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 181612, classification: "Rural" },
  { acNumber: 75, acName: "Zira", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 187300, classification: "Rural" },
  { acNumber: 76, acName: "Firozpur City", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 172957, classification: "Urban" },
  { acNumber: 77, acName: "Firozpur Rural", district: "Firozpur", region: "Malwa", reservation: "SC", lokSabha: "Firozpur", electorate2022: 195975, classification: "Rural" },
  { acNumber: 78, acName: "Guru Har Sahai", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 172641, classification: "Rural" },
  { acNumber: 79, acName: "Jalalabad", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 213416, classification: "Rural" },
  { acNumber: 80, acName: "Fazilka", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 177520, classification: "Semi-Urban" },
  { acNumber: 81, acName: "Abohar", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 178416, classification: "Semi-Urban" },
  { acNumber: 82, acName: "Balluana", district: "Fazilka", region: "Malwa", reservation: "SC", lokSabha: "Firozpur", electorate2022: 183929, classification: "Rural" },
  { acNumber: 83, acName: "Lambi", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 165263, classification: "Rural" },
  { acNumber: 84, acName: "Gidderbaha", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 167228, classification: "Rural" },
  { acNumber: 85, acName: "Malout", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "SC", lokSabha: "Firozpur", electorate2022: 176573, classification: "Rural" },
  { acNumber: 86, acName: "Muktsar", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 188889, classification: "Semi-Urban" },
  { acNumber: 87, acName: "Faridkot", district: "Faridkot", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 169823, classification: "Semi-Urban" },
  { acNumber: 88, acName: "Kotkapura", district: "Faridkot", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 159646, classification: "Rural" },
  { acNumber: 89, acName: "Jaitu", district: "Faridkot", region: "Malwa", reservation: "SC", lokSabha: "Faridkot", electorate2022: 151056, classification: "Rural" },
  { acNumber: 90, acName: "Rampura Phul", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 169859, classification: "Rural" },
  { acNumber: 91, acName: "Bhucho Mandi", district: "Bathinda", region: "Malwa", reservation: "SC", lokSabha: "Bathinda", electorate2022: 184785, classification: "Rural" },
  { acNumber: 92, acName: "Bathinda Urban", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 229525, classification: "Urban" },
  { acNumber: 93, acName: "Bathinda Rural", district: "Bathinda", region: "Malwa", reservation: "SC", lokSabha: "Bathinda", electorate2022: 158082, classification: "Rural" },
  { acNumber: 94, acName: "Talwandi Sabo", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 156336, classification: "Rural" },
  { acNumber: 95, acName: "Maur", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 167547, classification: "Rural" },
  { acNumber: 96, acName: "Mansa", district: "Mansa", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 218339, classification: "Semi-Urban" },
  { acNumber: 97, acName: "Sardulgarh", district: "Mansa", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 181679, classification: "Rural" },
  { acNumber: 98, acName: "Budhlada", district: "Mansa", region: "Malwa", reservation: "SC", lokSabha: "Bathinda", electorate2022: 195170, classification: "Rural" },
  { acNumber: 99, acName: "Lehra", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 172109, classification: "Rural" },
  { acNumber: 100, acName: "Dirba", district: "Sangrur", region: "Malwa", reservation: "SC", lokSabha: "Sangrur", electorate2022: 182695, classification: "Rural" },
  { acNumber: 101, acName: "Sunam", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 196136, classification: "Rural" },
  { acNumber: 102, acName: "Bhadaur", district: "Barnala", region: "Malwa", reservation: "SC", lokSabha: "Sangrur", electorate2022: 157809, classification: "Rural" },
  { acNumber: 103, acName: "Barnala", district: "Barnala", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 182502, classification: "Semi-Urban" },
  { acNumber: 104, acName: "Mehal Kalan", district: "Barnala", region: "Malwa", reservation: "SC", lokSabha: "Sangrur", electorate2022: 160348, classification: "Rural" },
  { acNumber: 105, acName: "Malerkotla", district: "Malerkotla", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib", electorate2022: 159900, classification: "Semi-Urban" },
  { acNumber: 106, acName: "Amargarh", district: "Malerkotla", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib", electorate2022: 165909, classification: "Rural" },
  { acNumber: 107, acName: "Dhuri", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 165053, classification: "Rural" },
  { acNumber: 108, acName: "Sangrur", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 189838, classification: "Semi-Urban" },
  { acNumber: 109, acName: "Nabha", district: "Patiala", region: "Malwa", reservation: "SC", lokSabha: "Patiala", electorate2022: 184623, classification: "Rural" },
  { acNumber: 110, acName: "Patiala Rural", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 225639, classification: "Rural" },
  { acNumber: 111, acName: "Rajpura", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 182228, classification: "Semi-Urban" },
  { acNumber: 112, acName: "Dera Bassi", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 287622, classification: "Semi-Urban" },
  { acNumber: 113, acName: "Ghanaur", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 164546, classification: "Rural" },
  { acNumber: 114, acName: "Sanour", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 222969, classification: "Rural" },
  { acNumber: 115, acName: "Patiala", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 161399, classification: "Urban" },
  { acNumber: 116, acName: "Samana", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 192473, classification: "Semi-Urban" },
  { acNumber: 117, acName: "Shutrana", district: "Patiala", region: "Malwa", reservation: "SC", lokSabha: "Patiala", electorate2022: 181568, classification: "Rural" },
];

/**
 * Lok Sabha to Assembly Constituency Mapping
 */
export const lokSabhaMappings: LokSabhaConstituency[] = [
  { name: "Gurdaspur", acNumbers: [1, 2, 3, 4, 5, 7, 9, 10], acCount: 8 },
  { name: "Amritsar", acNumbers: [6, 8, 11, 12, 13, 14, 15, 17], acCount: 8 },
  { name: "Khadoor Sahib", acNumbers: [16, 18, 19, 20, 21, 24, 25, 26, 27], acCount: 9 },
  { name: "Jalandhar", acNumbers: [28, 29, 30, 31, 32, 33, 34, 35, 36], acCount: 9 },
  { name: "Hoshiarpur", acNumbers: [37, 38, 39, 40, 41, 42, 43, 44, 45], acCount: 9 },
  { name: "Anandpur Sahib", acNumbers: [46, 47, 48, 49, 50, 52, 53], acCount: 7 },
  { name: "Ludhiana", acNumbers: [54, 57, 58, 59, 60, 61, 65, 66, 68, 70], acCount: 10 },
  { name: "Fatehgarh Sahib", acNumbers: [51, 55, 56, 67, 69, 105, 106, 109], acCount: 8 },
  { name: "Faridkot", acNumbers: [71, 72, 73, 74, 84, 87, 88, 89], acCount: 8 },
  { name: "Firozpur", acNumbers: [75, 76, 77, 78, 82, 83, 85, 86], acCount: 8 },
  { name: "Bathinda", acNumbers: [79, 90, 91, 92, 93, 94, 95, 96, 98], acCount: 9 },
  { name: "Sangrur", acNumbers: [97, 99, 100, 101, 102, 103, 104, 107, 108], acCount: 9 },
  { name: "Patiala", acNumbers: [110, 111, 113, 114, 115, 116, 117], acCount: 7 },
];

/**
 * SC Reserved Constituencies Data
 */
export const scReservedData: SCReservedData = {
  totalSCSeats: 34,
  scSeatNumbers: [2, 5, 8, 14, 16, 20, 25, 29, 30, 33, 34, 38, 42, 44, 46, 51, 54, 66, 67, 69, 70, 71, 77, 82, 85, 89, 91, 93, 98, 100, 102, 104, 109, 117],
  byRegion: [
    { region: "Majha", scSeats: 8, totalSeats: 25 },
    { region: "Doaba", scSeats: 8, totalSeats: 23 },
    { region: "Malwa", scSeats: 18, totalSeats: 69 },
  ],
};

/**
 * Urban/Rural Classification Summary
 */
export const urbanRuralSummary: UrbanRuralSummary[] = [
  { type: "Urban", acCount: 20, approxElectors: 4000000, strategicImplication: "Door-to-door + digital outreach; AAP strong in urban 2022" },
  { type: "Semi-Urban", acCount: 25, approxElectors: 4500000, strategicImplication: "Mixed strategy; public rallies + digital" },
  { type: "Rural", acCount: 72, approxElectors: 13000000, strategicImplication: "Village-level contact; sangat darshans; agricultural issues dominate" },
];

/**
 * Urban Assembly Constituencies List
 */
export const urbanACList: UrbanACList[] = [
  { acNumber: 15, acName: "Amritsar North" },
  { acNumber: 16, acName: "Amritsar West" },
  { acNumber: 17, acName: "Amritsar Central" },
  { acNumber: 18, acName: "Amritsar East" },
  { acNumber: 34, acName: "Jalandhar West" },
  { acNumber: 35, acName: "Jalandhar Central" },
  { acNumber: 36, acName: "Jalandhar North" },
  { acNumber: 37, acName: "Jalandhar Cantt" },
  { acNumber: 43, acName: "Hoshiarpur" },
  { acNumber: 53, acName: "S.A.S. Nagar" },
  { acNumber: 60, acName: "Ludhiana East" },
  { acNumber: 61, acName: "Ludhiana South" },
  { acNumber: 62, acName: "Atam Nagar" },
  { acNumber: 63, acName: "Ludhiana Central" },
  { acNumber: 64, acName: "Ludhiana West" },
  { acNumber: 65, acName: "Ludhiana North" },
  { acNumber: 76, acName: "Firozpur City" },
  { acNumber: 92, acName: "Bathinda Urban" },
  { acNumber: 115, acName: "Patiala" },
  { acNumber: 3, acName: "Pathankot" },
];

/**
 * Campaign Clusters for Resource Optimization
 */
export const campaignClusters: CampaignCluster[] = [
  {
    name: "Amritsar Metro",
    acNumbers: [15, 16, 17, 18, 19],
    acNames: ["Amritsar North", "Amritsar West", "Amritsar Central", "Amritsar East", "Amritsar South"],
    character: "Contiguous urban block, single-day campaign blitz",
    recommendedDays: 1,
  },
  {
    name: "Ludhiana Metro",
    acNumbers: [60, 61, 62, 63, 64, 65, 66],
    acNames: ["Ludhiana East", "Ludhiana South", "Atam Nagar", "Ludhiana Central", "Ludhiana West", "Ludhiana North", "Gill"],
    character: "Largest urban cluster, requires 2-day campaign plan",
    recommendedDays: 2,
  },
  {
    name: "Bathinda Belt",
    acNumbers: [90, 91, 92, 93, 94, 95],
    acNames: ["Rampura Phul", "Bhucho Mandi", "Bathinda Urban", "Bathinda Rural", "Talwandi Sabo", "Maur"],
    character: "AAP stronghold, needs intensive door-to-door approach",
    recommendedDays: 2,
  },
  {
    name: "Patiala Crown",
    acNumbers: [109, 110, 111, 113, 114, 115, 116],
    acNames: ["Nabha", "Patiala Rural", "Rajpura", "Ghanaur", "Sanour", "Patiala", "Samana"],
    character: "Royal belt, traditional Congress territory, must-win cluster",
    recommendedDays: 2,
  },
  {
    name: "Malwa Cotton Belt",
    acNumbers: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    acNames: ["Fazilka", "Abohar", "Balluana", "Lambi", "Gidderbaha", "Malout", "Muktsar", "Faridkot", "Kotkapura", "Jaitu"],
    character: "Large contiguous rural zone, extensive travel required",
    recommendedDays: 3,
  },
  {
    name: "Doaba NRI Belt",
    acNumbers: [30, 31, 34, 35, 36, 37, 38],
    acNames: ["Phillaur", "Nakodar", "Jalandhar West", "Jalandhar Central", "Jalandhar North", "Jalandhar Cantt", "Adampur"],
    character: "NRI influence high, diaspora funding potential",
    recommendedDays: 2,
  },
];

/**
 * Travel Routes
 */
export const travelRoutes: TravelRoute[] = [
  { route: "Chandigarh to Amritsar", distanceKm: 235, travelTimeHours: "4-5 hrs", notes: "Via NH7 (good road)" },
  { route: "Chandigarh to Ludhiana", distanceKm: 100, travelTimeHours: "2-2.5 hrs", notes: "Via NH7 (good road)" },
  { route: "Chandigarh to Bathinda", distanceKm: 225, travelTimeHours: "4-5 hrs", notes: "Via NH7/NH54" },
  { route: "Amritsar to Pathankot", distanceKm: 135, travelTimeHours: "2.5-3 hrs", notes: "Via NH54" },
  { route: "Ludhiana to Jalandhar", distanceKm: 60, travelTimeHours: "1-1.5 hrs", notes: "Via NH7" },
  { route: "Bathinda to Muktsar", distanceKm: 55, travelTimeHours: "1 hr", notes: "Good connectivity" },
  { route: "Amritsar to Tarn Taran", distanceKm: 25, travelTimeHours: "45 min", notes: "Short, frequent travel" },
  { route: "Patiala to Sangrur", distanceKm: 60, travelTimeHours: "1.5 hrs", notes: "Moderate roads" },
  { route: "Jalandhar to Hoshiarpur", distanceKm: 40, travelTimeHours: "1 hr", notes: "Good road" },
];

/**
 * Polling Station Data
 */
export const pollingStationData: PollingStationData = {
  totalStations2022: 24000,
  totalElectors: 21499804,
  avgElectorsPerStation: 910,
  eciNormMaxPerStation: 1200,
  avgStationsPerAC: 205,
};

/**
 * Accessibility Challenges by Region
 */
export const accessibilityChallenges: AccessibilityChallenge[] = [
  { region: "Majha", challengeAreas: "Border belt (Khem Karan, Attari, Ajnala)", notes: "BSF coordination needed, restricted movement zones" },
  { region: "Majha", challengeAreas: "Riverine areas (Ravi, Beas floodplains)", notes: "Seasonal flooding disrupts access" },
  { region: "Doaba", challengeAreas: "Kandi belt (Hoshiarpur foothills)", notes: "Hilly terrain, poor road connectivity" },
  { region: "Malwa", challengeAreas: "Southwest (Mansa, Sri Muktsar Sahib, Fazilka)", notes: "Arid zones, long distances between villages" },
  { region: "Malwa", challengeAreas: "Cotton belt villages", notes: "Remote, sparse population" },
];

/**
 * Border Constituencies
 */
export const borderConstituencies: BorderConstituency[] = [
  { acNumber: 22, acName: "Khem Karan", district: "Tarn Taran", proximity: "2 km from border", specialRequirements: "Heavily militarized, BSF coordination" },
  { acNumber: 20, acName: "Attari", district: "Amritsar", proximity: "Wagah border", specialRequirements: "International attention, security protocols" },
  { acNumber: 11, acName: "Ajnala", district: "Amritsar", proximity: "Proximity to border", specialRequirements: "BSF coordination" },
  { acNumber: 9, acName: "Fatehgarh Churian", district: "Gurdaspur", proximity: "Border proximity", specialRequirements: "Restricted movement zones" },
  { acNumber: 10, acName: "Dera Baba Nanak", district: "Gurdaspur", proximity: "Border proximity", specialRequirements: "Border area protocols" },
];

/**
 * GIS Data Sources
 */
export const gisSources: GISSource[] = [
  { source: "Stanford Earthworks", url: "earthworks.stanford.edu/catalog/stanford-wh870qw1934", format: "Shapefile (post-delimitation)", quality: "High -- Academic grade" },
  { source: "DataMeet Assembly Constituencies", url: "projects.datameet.org/maps/assembly-constituencies/", format: "GeoJSON", quality: "Medium -- Community maintained" },
  { source: "CEO Punjab AC Map", url: "ceopunjab.gov.in/pcacmap", format: "Interactive web map", quality: "Official but no download" },
  { source: "State GIS Portal", url: "stategisportal.nic.in (Punjab)", format: "23 layers incl. admin boundaries", quality: "Government source" },
  { source: "Data{Meet} Village Boundaries", url: "projects.datameet.org/indian_village_boundaries/", format: "Shapefile", quality: "Village-level granularity" },
  { source: "NextGIS Punjab", url: "data.nextgis.com/en/region/IN-PB/base/", format: "Multiple formats", quality: "OSM-based" },
];

/**
 * Data Gaps
 */
export const politicalGeographyDataGaps: PoliticalDataGap[] = [
  { item: "GPS coordinates for 117 AC centroids", status: "NOT_COLLECTED", priority: "HIGH", notes: "Requires GIS shapefile processing" },
  { item: "GPS coordinates for 23,400+ polling stations", status: "NOT_COLLECTED", priority: "MEDIUM", notes: "Available per-AC from CEO Punjab" },
  { item: "Constituency adjacency matrix (full)", status: "NOT_COLLECTED", priority: "HIGH", notes: "Derivable from shapefile topology" },
  { item: "Updated 2026 electorate figures", status: "NOT_AVAILABLE", priority: "HIGH", notes: "Electoral roll revision ongoing" },
  { item: "2021 Census population data", status: "NOT_AVAILABLE", priority: "HIGH", notes: "Census not yet conducted" },
  { item: "Malerkotla district exact area/population", status: "PARTIAL", priority: "LOW", notes: "New district (2021)" },
  { item: "Exact polling station count per AC", status: "PARTIAL", priority: "MEDIUM", notes: "Available from CEO Punjab per-district" },
  { item: "Road network GIS for campaign routing", status: "NOT_COLLECTED", priority: "MEDIUM" },
  { item: "Railway connectivity per constituency", status: "NOT_COLLECTED", priority: "LOW" },
  { item: "Tehsil/block-level mapping per AC", status: "PARTIAL", priority: "MEDIUM", notes: "Needs cross-reference with revenue records" },
];

/**
 * Strategic Insights
 */
export const politicalGeographyStrategicInsights: StrategicInsight[] = [
  {
    title: "Malwa Dominance",
    description: "Malwa alone holds 69 seats. Congress majority of 59+ is mathematically impossible without winning 35+ seats in Malwa. In 2022, AAP swept 62 of 69 Malwa seats. Congress must recover ground here.",
    targetRegions: ["Malwa"],
    actionItems: ["Intensive door-to-door in Malwa", "Address farmer distress", "Leverage local issues"],
  },
  {
    title: "Amritsar Metro Cluster",
    description: "5 urban ACs form contiguous block, ideal for single-day campaign blitz.",
    targetRegions: ["Majha"],
    actionItems: ["Single-day campaign blitz", "Digital outreach", "Urban voter engagement"],
  },
  {
    title: "Ludhiana Metro Cluster",
    description: "Largest urban cluster with 7 ACs, requires 2-day campaign plan.",
    targetRegions: ["Malwa"],
    actionItems: ["2-day campaign plan", "Multi-channel engagement", "Corporate/NRI outreach"],
  },
  {
    title: "Border Belt Special Planning",
    description: "ACs along Pakistan border require special security and BSF coordination.",
    targetRegions: ["Majha"],
    actionItems: ["BSF coordination", "Security protocols", "Special travel arrangements"],
  },
  {
    title: "Doaba NRI Belt",
    description: "NRI influence high, diaspora funding potential. Dalit concentration.",
    targetRegions: ["Doaba"],
    actionItems: ["NRI engagement", "Diaspora outreach", "Dalit voter mobilization"],
  },
];

// ==========================================
// POLITICAL GEOGRAPHY UTILITY FUNCTIONS
// ==========================================

/**
 * Get constituency by AC number
 */
export function getConstituencyByNumber(acNumber: number): AssemblyConstituency | undefined {
  return allAssemblyConstituencies.find(ac => ac.acNumber === acNumber);
}

/**
 * Get constituencies by region
 */
export function getConstituenciesByRegionGeo(region: "Malwa" | "Majha" | "Doaba"): AssemblyConstituency[] {
  return allAssemblyConstituencies.filter(ac => ac.region === region);
}

/**
 * Get constituencies by district
 */
export function getConstituenciesByDistrictGeo(district: string): AssemblyConstituency[] {
  return allAssemblyConstituencies.filter(ac => ac.district === district);
}

/**
 * Get total electorate by region
 */
export function getTotalElectorateByRegionGeo(region: "Malwa" | "Majha" | "Doaba"): number {
  const regionProfile = regionProfiles.find(r => r.name === region);
  return regionProfile?.totalElectorate || 0;
}

/**
 * Get SC reserved constituencies by region
 */
export function getSCSeatsByRegionGeo(region: "Malwa" | "Majha" | "Doaba"): number {
  const scRegion = scReservedData.byRegion.find(r => r.region === region);
  return scRegion?.scSeats || 0;
}

/**
 * Get urban constituencies
 */
export function getUrbanConstituenciesGeo(): AssemblyConstituency[] {
  return allAssemblyConstituencies.filter(ac => ac.classification === "Urban");
}

/**
 * Get rural constituencies
 */
export function getRuralConstituenciesGeo(): AssemblyConstituency[] {
  return allAssemblyConstituencies.filter(ac => ac.classification === "Rural" || ac.classification === "Rural (Border)");
}

/**
 * Get border constituencies list
 */
export function getBorderConstituenciesList(): BorderConstituency[] {
  return borderConstituencies;
}

/**
 * Get Lok Sabha mapping for an AC number
 */
export function getLokSabhaForAC(acNumber: number): string | undefined {
  for (const ls of lokSabhaMappings) {
    if (ls.acNumbers.includes(acNumber)) {
      return ls.name;
    }
  }
  return undefined;
}

/**
 * Get campaign cluster by AC number
 */
export function getClusterForAC(acNumber: number): CampaignCluster | undefined {
  return campaignClusters.find(cluster => cluster.acNumbers.includes(acNumber));
}

/**
 * Get district profile by name
 */
export function getDistrictProfileByName(name: string): DistrictProfile | undefined {
  return districtProfiles.find(d => d.name === name);
}

// ==========================================
// CORRUPTION SCANDALS DATA
// Derived from: research-M2/MP1-foundational/governance/corruption-scandals.md
// Research Date: 19 May 2026 | Data Currency: May 2022 - May 2026
// ==========================================

/**
 * Major Corruption Cases - Ministers & MLAs
 */
export const corruptionCases: CorruptionCase[] = [
  {
    id: "vijay-singla",
    accused: "Dr. Vijay Singla",
    position: "Cabinet Minister for Health",
    constituency: "Mansa",
    caseType: "Bribery for Tenders",
    date: "24 May 2022",
    allegation: "Demanding 1% commission on tenders and departmental work",
    amount: "Percentage-based (estimated several crore in scope)",
    agency: "Punjab Anti-Corruption / Vigilance Bureau",
    status: "bail_granted",
    statusDetails: "Granted bail 8 July 2022. Later appointed to Punjab Assembly committees -- political rehabilitation.",
    significance: "First corruption case under AAP, within 2 months of taking office. Mann publicly confirmed allegations before arrest.",
  },
  {
    id: "fauja-singh-sarari",
    accused: "Fauja Singh Sarari",
    position: "Cabinet Minister (Horticulture, Food Processing, Defence Services Welfare)",
    constituency: "Guru Har Sahai",
    caseType: "Extortion Audio Leak",
    date: "September 2022 - January 2023",
    allegation: "Audio clip surfaced allegedly discussing extortion plans with an associate, targeting food grain contractors",
    agency: "Punjab Vigilance Bureau",
    status: "resigned",
    statusDetails: "Resigned citing 'personal reasons' after show-cause notice from party. Denied allegations, called audio fake.",
    significance: "Second cabinet exit on corruption/ethics grounds within first year.",
  },
  {
    id: "amit-ratan-kotfatta",
    accused: "Amit Ratan Kotfatta",
    position: "MLA",
    constituency: "Bathinda Rural",
    caseType: "Bribery for Grants",
    date: "23 February 2023",
    allegation: "Demanded Rs 5 lakh bribe from Sarpanch of Ghudda village to release Rs 25 lakh government development grant",
    amount: "Rs 5 lakh",
    amountInCrore: 0.05,
    agency: "Punjab Vigilance Bureau",
    status: "bail_granted",
    statusDetails: "Forensic voice examination confirmed his voice. Granted regular bail by Punjab & Haryana HC, 22 May 2023. Case pending.",
  },
  {
    id: "jaswant-singh-gajjan-majra",
    accused: "Prof. Jaswant Singh Gajjan Majra",
    position: "MLA",
    constituency: "Amargarh",
    caseType: "Money Laundering / Bank Fraud",
    date: "6 November 2023",
    allegation: "Money laundering linked to Rs 41 crore bank fraud involving Tara Corporation Ltd.",
    amount: "Rs 41 crore",
    amountInCrore: 41,
    agency: "Enforcement Directorate (ED)",
    status: "bail_granted",
    statusDetails: "Jailed in Patiala Central Jail ~6 months. Granted regular bail by Punjab & Haryana HC, May 2024.",
    significance: "MLA had publicly claimed he would take only Rs 1 as salary.",
  },
  {
    id: "raman-arora",
    accused: "Raman Arora",
    position: "MLA",
    constituency: "Jalandhar Central",
    caseType: "Municipal Extortion Racket",
    date: "23 May 2025",
    allegation: "Running extortion racket using former Assistant Town Planner Sukhdev Vashisht to issue bogus municipal notices for illegal constructions, then 'settling' them for bribes",
    agency: "Punjab Vigilance Bureau",
    status: "ongoing",
    statusDetails: "Arrested; 5-day Vigilance custody granted. Case ongoing.",
  },
  {
    id: "balkar-singh",
    accused: "Balkar Singh",
    position: "Minister for Local Bodies",
    constituency: "Kartarpur",
    caseType: "Objectionable Video",
    date: "June 2024",
    allegation: "Objectionable video surfaced; inappropriate behavior allegations",
    agency: "Punjab Vigilance Bureau",
    status: "dropped_from_cabinet",
    statusDetails: "Removed from cabinet. Protests reached Governor Banwarilal Purohit.",
  },
  {
    id: "sanjeev-arora",
    accused: "Sanjeev Arora",
    position: "Rajya Sabha MP and Punjab Cabinet Minister for Industries",
    caseType: "GST Fraud / Money Laundering",
    date: "9 May 2026",
    allegation: "Money laundering linked to Rs 100+ crore GST fraud. Arora's company allegedly generated fraudulent purchase invoices for mobile phones worth over Rs 100 crore from non-existent entities. Fraud operated from May 2023 onwards.",
    amount: "Rs 100+ crore",
    amountInCrore: 100,
    agency: "Enforcement Directorate (ED)",
    status: "arrested",
    statusDetails: "Arrested 9 May 2026. Sent to 7-day ED custody on 10 May 2026. Has moved Punjab & Haryana HC challenging arrest.",
    significance: "Sitting cabinet minister arrested by ED. Leader of Opposition Partap Singh Bajwa said it 'exposed serious corruption allegations against the ruling party.' AAP claims Centre targeting opposition.",
  },
  {
    id: "laljit-singh-bhullar",
    accused: "Laljit Singh Bhullar",
    position: "Minister for Transport and Jails",
    caseType: "Corruption Allegations",
    date: "March 2026",
    agency: "Punjab Vigilance Bureau",
    status: "dropped_from_cabinet",
    statusDetails: "Dropped from cabinet. Named in corruption allegations. Father among three booked in separate case. Bhullar is 10th AAP minister dropped from cabinet in 4 years.",
    significance: "10th AAP minister dropped from cabinet in 4 years.",
  },
];

/**
 * Summary of corruption cases
 */
export const corruptionCasesSummary: CorruptionCasesSummary = {
  totalCases: 8,
  ministersDropped: 10,
  mlasArrested: 4,
  servingMinistersArrested: 1,
  casesByStatus: {
    arrested: 1,
    bail_granted: 3,
    resigned: 1,
    dropped_from_cabinet: 2,
    under_investigation: 0,
    ongoing: 1,
    charges_pending: 0,
  },
  casesByAgency: {
    "Punjab Vigilance Bureau": 5,
    "Enforcement Directorate (ED)": 3,
  },
  recentCases: corruptionCases.filter(c =>
    ["sanjeev-arora", "laljit-singh-bhullar", "raman-arora"].includes(c.id)
  ),
};

/**
 * Sand Mining Corruption Data
 */
export const sandMiningCorruption: SandMiningCorruption = {
  promise: {
    annualRevenue: "Rs 20,000 crore",
    source: "Kejriwal campaign promise 2022",
  },
  reality: {
    actualRevenue: "Rs 288 crore (2024 data)",
    actualRevenueCrore: 288,
    shortfallCrore: 19712,
    shortfallPercentage: 98.6,
  },
  timeline: [
    {
      date: "February 2026",
      event: "AAP's own Rajya Sabha MP Malvinder Singh Kang publicly raised questions about sand mining corruption",
      source: "Mainstream media",
    },
    {
      date: "February 2026",
      event: "BJP's RP Singh demanded CBI probe into sand mining revenue mismatch",
      source: "Mainstream media",
    },
  ],
  politicalStatements: [
    {
      person: "Partap Singh Bajwa",
      party: "Congress (LoP)",
      statement: "Punjab would generate Rs 20,000 crore annually from sand mining by crushing the 'sand mafia' -- actual is only Rs 288 crore",
      date: "2024-2025",
    },
    {
      person: "Pargat Singh",
      party: "Congress",
      statement: "The theme of the government was zero corruption but the manner in which the government is handling sand mining...",
      date: "2024-2025",
    },
    {
      person: "Partap Singh Bajwa",
      party: "Congress (LoP)",
      statement: "Illegal mining is 'rampant' in the state",
      date: "February 2025",
    },
  ],
};

/**
 * Sector-Specific Corruption Data
 */
export const sectorCorruption: SectorCorruption = {
  sandMining: sandMiningCorruption,
  liquorPolicy: {
    delhiSpillover: {
      amount: "Rs 2,873 crore alleged loss",
      allegedLoss: "Rs 2,873 crore",
      implicated: ["Arvind Kejriwal", "Manish Sisodia"],
    },
    punjabAllegations: {
      amount: "Rs 10,000 crore",
      source: "BJP allegation (August 2022)",
      cbiProbeStatus: "CBI reportedly sought to investigate Punjab liquor scandal",
      chargesFiled: false,
    },
  },
  foodgrainTransportation: {
    totalAmount: "Rs 2,000 crore transportation tender scam",
    amountCrore: 2000,
    period: "2020-2023 (originated under Congress, continued under AAP's first year)",
    edExpansion: {
      date: "January 2025",
      scope: "ED expanded probe to include payments made during AAP's first year in power (2022-23). All procurement agencies (Markfed, Punsup, Pungrain, Punjab State Warehousing Corp) asked to furnish payment details for 2022-23 season.",
      agencies: ["Markfed", "Punsup", "Pungrain", "Punjab State Warehousing Corp"],
    },
    congressAngle: {
      minister: "Bharat Bhushan Ashu",
      caseStatus: "Former Congress Minister arrested by ED in this case",
    },
  },
  changeOfLandUse: {
    edRaids: {
      date: "8 May 2026",
      entities: ["Suntec City (ICHBS)", "ABS Townships", "Altus Space Builders", "Dhir Constructions"],
    },
    amounts: {
      ichbsCollection: "Rs 150+ crore",
      ichbsCollectionCrore: 150,
      altusUndervaluation: "Rs 170+ crore",
      altusUndervaluationCrore: 170,
      cashSeized: "Rs 1 crore (including Rs 21 lakh thrown from 9th floor)",
    },
    politicalLinks: {
      aapPunjabChief: "Aman Arora",
      description: "Gaurav Dhir of Dhir Constructions described as 'close associate' of AAP Punjab unit chief and Cabinet minister Aman Arora",
      cmOsdLink: "One raided individual (Nitin Gohal) linked to CM Mann's OSD Rajbir Ghuman",
    },
    aapResponse: "Aman Arora called it 'BJP's politics of goondagardi.' CM Mann said 'ED raid has nothing to do with us.'",
  },
};

/**
 * CAG Financial Data (March 2026 Report covering 2023-24)
 */
export const cagFinancials: CAGFinancials = {
  revenueDeficit: {
    amount: "Rs 28,215 crore",
    amountCrore: 28215,
    percentageOfGSDP: 3.79,
    target: 3.52,
    variance: 0.27,
  },
  fiscalDeficit: {
    amount: "Rs 33,115 crore",
    amountCrore: 33115,
    percentageOfGSDP: 4.45,
    target: 4.6,
    variance: -0.15,
  },
  debtToGSDP: {
    ratio: 43.72,
    ratioWithOffBudget: 44.27,
    ranking: "Highest among major Indian states",
    totalDebt: "~Rs 2.84 lakh crore when AAP took office",
    totalDebtLakhCrore: 2.84,
  },
  revenueExpenditure: {
    amount: "Rs 1,17,407 crore",
    amountCrore: 117407,
    percentageOfGSDP: 15.76,
    growthCAGR: 11.54,
  },
  capitalExpenditure: {
    amount: "Rs 4,743 crore",
    amountCrore: 4743,
    percentageOfTotal: 3.88,
    note: "Borrowed funds used for consumption, not development",
  },
  committedExpenditure: {
    percentage: 75.6,
    components: ["Debt servicing", "Salaries", "Pensions"],
  },
  subsidies: {
    percentageOfRevenue: 16,
    powerSubsidyPercentage: 92,
    trend: "Growing from 13.39% to ~16% of revenue",
  },
  borrowingUse: "Borrowed funds being used for current consumption and repayment, not capital creation",
  cagVerdict: "The finances are heavily stressed. Depending solely on economic growth would not suffice to cover the state's debt obligations.",
};

/**
 * Earlier CAG Findings (September 2025)
 */
export const earlierCAGFindings = {
  borrowedFundsUsage: "Punjab and West Bengal lead among states using borrowed funds to finance routine expenditure (salaries, subsidies)",
  debtToGSDPRanking: "Punjab's debt-to-GSDP ratio of 40.35% was highest among all Indian states",
  debtTrapCategory: true,
  healthServicesNote: "Report tabbed in State Assembly. Specific findings on health services management irregularities noted but detailed findings require further research.",
};

/**
 * CBI Raid on Punjab Vigilance Bureau
 */
export const vigilanceBureauRaid: VigilanceBureauRaid = {
  date: "12 May 2026 (late-night raid)",
  target: "Punjab Vigilance Bureau headquarters, Mohali",
  allegation: "Middlemen operating inside the Vigilance Bureau, collecting bribes to influence corruption cases",
  amount: {
    initialDemand: "Rs 20 lakh",
    negotiated: "Rs 13 lakh + mobile phone for OP Rana, Reader to DG Vigilance",
  },
  arrests: {
    count: 3,
    description: "Two middlemen and one other person arrested. Cash recovered during operation.",
  },
  politicalSignificance: "The agency tasked with fighting corruption within AAP's own government was itself running a bribery racket. SAD demanded probe into CM Mann and Kejriwal over Vigilance corruption.",
};

/**
 * Key Corruption Statistics
 */
export const corruptionKeyStats: CorruptionKeyStats = {
  ministersDropped: 10,
  mlasArrested: 4,
  servingMinistersArrested: 1,
  sandMiningShortfall: "Rs 19,712 crore/year",
  debtToGSDP: "43.72-44.27%",
  cagAssessment: "Finances heavily stressed",
  aapPunjabChiefNamed: true,
  vigilanceBureauRaided: true,
};

/**
 * Anti-Corruption Narrative Assessment
 */
export const corruptionNarrativeAssessment = {
  aapClaims: [
    "'Zero tolerance' for corruption -- Mann publicly sacked Singla within hours of allegations",
    "AAP points to swift action against own ministers as proof of anti-corruption commitment",
    "Claims 10 minister changes show accountability, not corruption",
  ],
  counterPoints: [
    "Scale of hypocrisy: A party born from anti-corruption movement has had 10 ministers dropped, multiple MLAs arrested, a sitting minister in ED custody, and its own Vigilance Bureau raided by CBI for bribery",
    "Broken promise quantification: Rs 20,000 crore sand mining promise vs Rs 288 crore delivered = 98.6% failure",
    "Fiscal mismanagement: Debt-to-GSDP highest in India. CAG says finances 'heavily stressed.' Borrowed money spent on consumption, not development",
    "Continuity of corrupt systems: AAP retained corrupt contractors from Congress era in foodgrain transportation; ED is now probing AAP's first year payments",
    "Brand destruction: AAP's own MP (Malvinder Kang) publicly questioned sand mining corruption -- internal dissent",
    "Institutional corruption: CBI raids on Vigilance Bureau itself show corruption is systemic, not isolated",
    "Comparative: In Congress 2017-22 term, corruption allegations existed but the party did not claim moral superiority on anti-corruption -- AAP's core brand is anti-corruption, making every case disproportionately damaging",
  ],
};

/**
 * Complete Corruption Scandals Intelligence Report
 */
export const corruptionScandalsReport: CorruptionScandalsReport = {
  reportDate: "19 May 2026",
  source: "Web search (The Hindu, Indian Express, Times of India, The Print, NDTV, Economic Times, Scroll.in, Tribune, New Indian Express, OpIndia, Babushahi)",
  dataCurrency: "May 2022 - May 2026",
  strategicSignificance:
    "AAP swept to power in March 2022 on an anti-corruption platform, born from the India Against Corruption movement. Any corruption within AAP's own ranks is politically devastating -- it destroys the party's core brand identity. As of May 2026, 10 ministers have been dropped from the Mann cabinet in four years, multiple MLAs arrested, and central agencies (ED, CBI) are actively investigating serving ministers. The irony of a party founded on anti-corruption presiding over endemic corruption is the single most potent narrative weapon available to the Opposition.",

  majorCases: corruptionCases,
  casesSummary: corruptionCasesSummary,

  sectorCorruption: sectorCorruption,

  cagFinancials: cagFinancials,
  earlierCAGFindings: earlierCAGFindings,

  vigilanceBureauRaid: vigilanceBureauRaid,

  assessment: {
    narrative: corruptionNarrativeAssessment,
    keyStats: corruptionKeyStats,
    dataGaps: [
      "VERIFICATION_NEEDED: Detailed CAG findings on department-wise irregularities (health, education, rural development)",
      "VERIFICATION_NEEDED: RTI-based revelations of specific corruption instances",
      "VERIFICATION_NEEDED: Lokpal/Lokayukta cases filed specifically against AAP leaders in Punjab",
      "VERIFICATION_NEEDED: District-wise corruption perception data",
      "VERIFICATION_NEEDED: Punjab liquor policy specific investigation status (separate from Delhi case)",
      "VERIFICATION_NEEDED: Comparison table of Congress 2017-22 corruption allegations vs AAP 2022-26",
      "VERIFICATION_NEEDED: Detailed financial irregularities from CAG compliance audit on public sector enterprises",
    ],
  },

  gapsRequiringResearch: [
    "Detailed CAG findings on department-wise irregularities (health, education, rural development)",
    "RTI-based revelations of specific corruption instances",
    "Lokpal/Lokayukta cases filed specifically against AAP leaders in Punjab",
    "District-wise corruption perception data",
    "Punjab liquor policy specific investigation status (separate from Delhi case)",
    "Comparison table of Congress 2017-22 corruption allegations vs AAP 2022-26",
    "Detailed financial irregularities from CAG compliance audit on public sector enterprises",
  ],
};

// ==========================================
// CORRUPTION SCANDALS UTILITY FUNCTIONS
// ==========================================

/**
 * Get corruption case by ID
 */
export function getCorruptionCaseById(id: string): CorruptionCase | undefined {
  return corruptionCases.find(c => c.id === id);
}

/**
 * Get cases by status
 */
export function getCorruptionCasesByStatus(status: CorruptionCase["status"]): CorruptionCase[] {
  return corruptionCases.filter(c => c.status === status);
}

/**
 * Get cases by agency
 */
export function getCorruptionCasesByAgency(agency: string): CorruptionCase[] {
  return corruptionCases.filter(c => c.agency.includes(agency));
}

/**
 * Get recent corruption cases (last 12 months)
 */
export function getRecentCorruptionCases(): CorruptionCase[] {
  return corruptionCases.filter(c => {
    const caseYear = parseInt(c.date.split(" ")[2] || "0");
    return caseYear >= 2025;
  });
}

/**
 * Get key statistics for dashboard
 */
export function getCorruptionKeyStats(): CorruptionKeyStats {
  return corruptionKeyStats;
}

/**
 * Get sand mining shortfall percentage
 */
export function getSandMiningShortfallPercentage(): number {
  return sandMiningCorruption.reality.shortfallPercentage;
}

/**
 * Get sand mining shortfall in crore
 */
export function getSandMiningShortfallCrore(): number {
  return sandMiningCorruption.reality.shortfallCrore;
}

/**
 * Get CAG fiscal deficit percentage
 */
export function getCAGFiscalDeficitPercentage(): number {
  return cagFinancials.fiscalDeficit.percentageOfGSDP;
}

/**
 * Get CAG revenue deficit percentage
 */
export function getCAGRevenueDeficitPercentage(): number {
  return cagFinancials.revenueDeficit.percentageOfGSDP;
}

/**
 * Get debt to GSDP ratio
 */
export function getDebtToGSDPRatio(): { ratio: number; withOffBudget: number } {
  return {
    ratio: cagFinancials.debtToGSDP.ratio,
    withOffBudget: cagFinancials.debtToGSDP.ratioWithOffBudget,
  };
}

/**
 * Get committed expenditure percentage
 */
export function getCommittedExpenditurePercentage(): number {
  return cagFinancials.committedExpenditure.percentage;
}

/**
 * Get power subsidy as percentage of total subsidies
 */
export function getPowerSubsidyPercentage(): number {
  return cagFinancials.subsidies.powerSubsidyPercentage;
}

/**
 * Get total corruption cases count
 */
export function getTotalCorruptionCasesCount(): number {
  return corruptionCasesSummary.totalCases;
}

/**
 * Get ministers dropped count
 */
export function getMinistersDroppedCount(): number {
  return corruptionCasesSummary.ministersDropped;
}

/**
 * Get MLAs arrested count
 */
export function getMLAsArrestedCount(): number {
  return corruptionCasesSummary.mlasArrested;
}

/**
 * Get serving ministers arrested count
 */
export function getServingMinistersArrestedCount(): number {
  return corruptionCasesSummary.servingMinistersArrested;
}

/**
 * Get AAP Punjab chief named status
 */
export function isAAPChiefNamed(): boolean {
  return corruptionKeyStats.aapPunjabChiefNamed;
}

/**
 * Get Vigilance Bureau raided status
 */
export function wasVigilanceBureauRaided(): boolean {
  return corruptionKeyStats.vigilanceBureauRaided;
}

// ==========================================
// ECONOMIC MACRO INDICATORS DATA
// Derived from: MP1-foundational/pestle/economic-macro.md
// Research Date: 19 May 2026
// ==========================================

import type {
  EconomicMacroKPI,
  GSDPDataPoint,
  FiscalDeficitDataPoint,
  DebtTrajectoryPoint,
  SectorComposition,
  EmploymentData,
  BankingCredit,
  PovertyInflation,
  MacroAAPVulnerability,
  MacroCongressNarrative,
} from "@/types/economic-macro-types";

// Metadata
export const economicMacroMetadata = {
  researchDate: "19 May 2026",
  megaPillar: "MP1 — Foundational Scan (PESTLE — Economic)",
  sourceType: "Live Research",
  analyst: "Research Agent",
  status: "COMPLETE" as const,
};

// GSDP Trajectory Data
export const gsdpTrajectoryData: GSDPDataPoint[] = [
  { year: "2019-20", gsdpCurrentPricesRsCrore: 537000 },
  { year: "2022-23", gsdpCurrentPricesRsCrore: 673107, gsdpGrowthConstantPrices: 6.5, nationalGDPGrowthConstant: 7.2 },
  { year: "2023-24 (RE)", gsdpCurrentPricesRsCrore: 736423, gsdpGrowthConstantPrices: 6.8, perCapitaIncomeRs: 195621, nationalGDPGrowthConstant: 7.6 },
  { year: "2024-25 (BE)", gsdpCurrentPricesRsCrore: 802701, gsdpGrowthConstantPrices: 7.1, perCapitaIncomeRs: 210000, nationalGDPGrowthConstant: 6.5 },
  { year: "2025-26 (BE)", gsdpCurrentPricesRsCrore: 980000, gsdpGrowthConstantPrices: 9.9, perCapitaIncomeRs: 230523, nationalGDPGrowthConstant: 6.5 },
];

export const gsdpKeyObservations = {
  gsdpCAGR: 8.52, // 2019-20 to 2023-24 at current prices
  realGrowthVsNational: "trails by 0.5-1 percentage point",
  perCapitaIncomeGap: { punjab: 195621, national: 183236 },
  perCapitaRankingDecline: { 1981: 1, current: 16 },
};

// Fiscal Deficits Data
export const fiscalDeficitsData: FiscalDeficitDataPoint[] = [
  { year: "2019-20", revenueDeficitRsCrore: 14285 },
  { year: "2022-23", revenueDeficitRsCrore: 26045, revenueDeficitPercentGSDP: 3.87, fiscalDeficitRsCrore: 33930, fiscalDeficitPercentGSDP: 5.04, primaryDeficitRsCrore: 14025 },
  { year: "2023-24 (RE)", revenueDeficitRsCrore: 28215, revenueDeficitPercentGSDP: 3.79, fiscalDeficitRsCrore: 30311, fiscalDeficitPercentGSDP: 4.12, primaryDeficitRsCrore: 7811 },
  { year: "2024-25 (BE)", revenueDeficitRsCrore: 23198, revenueDeficitPercentGSDP: 2.89, fiscalDeficitRsCrore: 30465, fiscalDeficitPercentGSDP: 3.8 },
  { year: "2025-26 (BE)", revenueDeficitRsCrore: 23957, revenueDeficitPercentGSDP: 2.7, fiscalDeficitRsCrore: 34201, fiscalDeficitPercentGSDP: 3.84 },
];

export const fiscalDeficitsCriticalFinding = "Revenue deficit means Punjab is borrowing to fund day-to-day expenditure, not productive investment. CAG (2023-24) noted that capital expenditure accounted for only 4.40% of total borrowings — the bulk of loans are used for consumption or past debt repayment.";

// Debt Profile Data
export const debtTrajectoryData: DebtTrajectoryPoint[] = [
  { year: "2015-16", outstandingDebtRsCrore: 128836 },
  { year: "2019-20", debtToGSDPPercent: 42.71 },
  { year: "2021-22", outstandingDebtRsCrore: 281773, debtToGSDPPercent: 48.24 },
  { year: "2022-23", outstandingDebtRsCrore: 314221, debtToGSDPPercent: 46.68 },
  { year: "2023-24", outstandingDebtRsCrore: 346185, debtToGSDPPercent: 46.66 },
  { year: "2024-25", outstandingDebtRsCrore: 382935, debtToGSDPPercent: 47.3 },
  { year: "2025-26 (proj.)", outstandingDebtRsCrore: 417136, debtToGSDPPercent: 46.8 },
];

export const macroDebtComposition = {
  annualAverageDebtIncrease: {
    period: "under AAP (2022-25)",
    amountRsCrore: 33721,
  },
  interestPayments: {
    amountRsCrore: 23900, // 2024-25 budgeted
    percentRevenueReceipts: 23,
  },
  debtServicing: {
    percentTotalRevenue: 41, // 2022-23
  },
  offBudgetBorrowings: {
    amountRsCrore: 4093,
    via: "PSUs",
    flaggedBy: "CAG",
  },
  nitiAayogRanking: {
    index: "Fiscal Health Index 2025",
    rank: "LAST among major states",
  },
  frbmTarget: {
    recommendedDebtToGSDP: 20,
    punjabCurrent: 46.5,
  },
};

export const debtDrivers = {
  competitivePopulism: ["Free electricity", "AAP welfare schemes"],
  powerSubsidies: {
    amountRsCrore: 18770, // 2023-24
    percentAllSubsidies: 92,
    farmPowerSubsidy: {
      re_FY2025_26: 9992,
    },
  },
  salaryPension: {
    salaries: 36.72, // % of revenue
    pensions: 20.82, // % of revenue
    total: 57.51, // % of revenue
  },
  opsReversal: "Old Pension Scheme reversal adds long-term liability",
  underTaxMobilisation: "Under-mobilisation of own tax resources",
};

// Revenue and Tax Collections
export const revenueCollectionsData = {
  ownTaxRevenue: {
    amountRsCrore: 57919, // 2024-25
    growth: 11.87,
    gstGrowth: {
      net: 11.87,
      midFY25Low: 5.97,
      nationalAverage: 10,
    },
    exciseGSDP: {
      2021_22: 1.05,
      2024_25: 1.28,
    },
  },
  revenueReceipts: {
    amountRsCrore: 89192, // 2023-24
    cagrFrom2019_20: 9.71,
    shareOfGSDP: {
      2022_23: 12.86,
      2023_24: 11.97,
    },
  },
  committedExpenditure: {
    salariesPensionsInterest: {
      amountRsCrore: 76388, // 2023-24
      percentRevenueExpenditure: 65,
    },
    committedInflexible: {
      amountRsCrore: 88808,
      percentRevenueExpenditure: 75.64,
    },
  },
};

// Sectoral Composition
export const sectoralCompositionData: SectorComposition = {
  gsvaShare: {
    agriculture: 27, // incl. allied
    industry: 27, // incl. manufacturing, construction
    services: 46,
  },
  growthRates: {
    agriculture: 2.3,
    industry: 7,
    manufacturing: 7.1,
    services: 7.3,
  },
  agricultureEmployment: {
    percentWorkforce: 27.22, // PLFS 2023-24
    growthNote: "Anaemic growth reflecting structural farm crisis",
  },
  fisheries: {
    percentAgriculturalGSVA: 1.5,
    growth2024_25: 11.84,
  },
  horticulture: {
    percentAgriculturalGDP: 17,
    status: "Diversification push underway",
  },
};

// Employment Data
export const employmentData: EmploymentData = {
  unemployment: {
    rate: {
      plfs2022_23: 6.1,
      cmieEstimate: "~8-10%",
      plfs2023_24: 5.9,
    },
    nationalAverage: 3.2,
    keyObservation: "Nearly double the national average",
  },
  sectoralEmployment: {
    agriculture: {
      punjab: 27.22,
      national: 42,
    },
  },
  structuralIssues: [
    "Youth unemployment likely significantly higher than headline figures",
    "Drug epidemic exacerbates employability challenges",
    "Slower industrial growth limits non-farm job creation",
  ],
};

// Banking and Credit Data
export const bankingCreditData: BankingCredit = {
  creditDepositRatio: {
    value: 61.3, // 2024-25
    nationalAverage: 78,
    interpretation: "Indicates capital flight",
  },
  fdiInflow: {
    period: "Oct 2019-Jun 2025",
    amountRsCrore: 9839,
    note: "Cumulative over 6 years",
  },
  investmentFY26: {
    amountRsCrore: 29480,
    projectedJobs: 67000,
    sectors: "Across sectors",
  },
  exportsFY25: {
    amountRsCrore: 16317,
    keySectors: ["Engineering", "Rice", "Pharma", "Textiles"],
  },
  industrialStrengths: {
    woollenKnitwear: "95% of India's",
    sportsGoods: "75%",
    sewingMachines: "85%",
  },
  semiconductorProject: {
    location: "Mohali",
    investmentRsCrore: 4594,
    significance: "Potential diversification signal",
  },
};

// Poverty and Inflation Data
export const povertyInflationData: PovertyInflation = {
  poverty: {
    populationBelowPL: {
      percent: 4.26, // 2025-26 est.
      ranking: "5th lowest among states",
    },
    note: "Masks distress in farm households and informal workers",
  },
  inflation: {
    cpi: 3.55, // February 2025
  },
  multidimensionalPoverty: "Likely higher than income poverty, especially in border districts",
};

// Political Intelligence - AAP Vulnerabilities
export const macroAapVulnerabilities: MacroAAPVulnerability[] = [
  { id: 1, point: "Debt explosion", keyStatistic: "Rs 33,721 crore/year average borrowing under AAP — highest ever for any government in Punjab" },
  { id: 2, point: "Fiscal Health Index rank", keyStatistic: "Dead last among major states (NITI Aayog 2025)" },
  { id: 3, point: "Zero capital creation", keyStatistic: "Only 4.4% of borrowings go to capital expenditure" },
  { id: 4, point: "Power subsidy addiction", keyStatistic: "Rs 18,770 crore in subsidies (2023-24), crowding out all development spending" },
  { id: 5, point: "Revenue deficit", keyStatistic: "Borrowing to pay salaries and subsidies, not for growth" },
  { id: 6, point: "OPS reversal", keyStatistic: "Adding massive future pension liabilities" },
];

// Political Intelligence - Congress Narratives
export const congressNarratives: MacroCongressNarrative[] = [
  { id: 1, narrative: "\"Who will pay the debt?\"", keyStatistic: "Every Punjabi carries Rs 1.5+ lakh in state debt per capita" },
  { id: 2, narrative: "\"Development has stopped\"", keyStatistic: "Capital expenditure cut 38% from budget estimates" },
  { id: 3, narrative: "\"Freebies vs Future\"", keyStatistic: "Subsidies consume revenue; nothing left for roads, hospitals, industry" },
  { id: 4, narrative: "\"Punjab was No. 1, now last\"", keyStatistic: "From 1st in per capita GDP to 16th; from fiscal leader to NITI Aayog's bottom rank" },
  { id: 5, narrative: "Congress 2017 contrast", keyStatistic: "77 seats won with a relatively healthier fiscal position vs AAP's debt-driven populism" },
];

// Verification Needed Items
export const verificationNeededItems = [
  "District-level employment/unemployment breakdown",
  "Exact sectoral GSVA shares for 2024-25",
  "Credit-deposit ratio by district",
  "Detailed farm debt/suicide statistics",
  "Comparison of Congress-era (2017-2022) fiscal metrics vs AAP-era",
];

// Complete Economic Macro KPI
export const economicMacroKPI: EconomicMacroKPI = {
  metadata: economicMacroMetadata,
  gsdpTrajectory: {
    dataPoints: gsdpTrajectoryData,
    keyObservations: gsdpKeyObservations,
    sources: [
      "PRS Budget Analysis 2024-25",
      "CAG State Finances Audit 2023-24",
      "Wikipedia/Economy of Punjab (Budget 2025-26 data)",
    ],
  },
  fiscalDeficits: {
    dataPoints: fiscalDeficitsData,
    criticalFinding: fiscalDeficitsCriticalFinding,
    capitalExpenditureShare: 4.4,
    sources: [
      "PRS Budget Analysis 2024-25 & 2025-26",
      "CAG State Finances Audit 2023-24",
      "Indian Express (17 Mar 2026)",
    ],
  },
  debtProfile: {
    trajectory: debtTrajectoryData,
    composition: macroDebtComposition,
    drivers: debtDrivers,
    sources: [
      "The Hindu (27 Jul 2025)",
      "CAG Report 2023-24",
      "NITI Aayog Fiscal Health Index 2025",
      "PRS",
      "Forbes India (Feb 2026)",
    ],
  },
  revenueCollections: revenueCollectionsData,
  sectoralComposition: sectoralCompositionData,
  employment: employmentData,
  bankingCredit: bankingCreditData,
  povertyInflation: povertyInflationData,
  politicalIntelligence: {
    aapVulnerabilities: macroAapVulnerabilities,
    congressNarratives,
    verificationNeeded: verificationNeededItems,
  },
  sources: [
    "PRS Legislative Research — Punjab Budget Analysis 2024-25 & 2025-26",
    "CAG State Finances Audit Report for Punjab 2023-24 (tabled March 2026)",
    "NITI Aayog — Fiscal Health Index 2025",
    "NITI Aayog — Macro and Fiscal Landscape of the State of Punjab (March 2025)",
    "The Hindu — Punjab's rising debt raises concern (27 Jul 2025)",
    "Indian Express — CAG report on Punjab finances (17 Mar 2026)",
    "LiveMint/Mint — Punjab's Own Tax Revenue rises to Rs 57,919 crore (5 Mar 2026)",
    "Hindustan Times — Punjab's GST growth slows (17 Oct 2024)",
    "IBEF — Punjab Economy, Industries & Investment Opportunities",
    "Wikipedia — Economy of Punjab, India (citing Budget 2025-26 data)",
  ],
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Get current debt-to-GSDP percentage
 */
export function getCurrentDebtToGSDP(): number {
  const latest = debtTrajectoryData.find(d => d.debtToGSDPPercent !== undefined);
  return latest?.debtToGSDPPercent ?? 0;
}

/**
 * Get revenue deficit percentage for latest year
 */
export function getLatestRevenueDeficitPercent(): number {
  const latest = fiscalDeficitsData[fiscalDeficitsData.length - 1];
  return latest?.revenueDeficitPercentGSDP ?? 0;
}

/**
 * Get fiscal deficit percentage for latest year
 */
export function getLatestFiscalDeficitPercent(): number {
  const latest = fiscalDeficitsData[fiscalDeficitsData.length - 1];
  return latest?.fiscalDeficitPercentGSDP ?? 0;
}

/**
 * Get unemployment rate comparison
 */
export function getUnemploymentComparison(): { punjab: number; national: number; multiple: string } {
  return {
    punjab: employmentData.unemployment.rate.plfs2023_24,
    national: employmentData.unemployment.nationalAverage,
    multiple: `${(employmentData.unemployment.rate.plfs2023_24 / employmentData.unemployment.nationalAverage).toFixed(1)}x`,
  };
}

/**
 * Get per capita debt in rupees
 */
export function getPerCapitaDebtRsCrore(): number {
  // Outstanding debt 2024-25: 382935 crore, population ~31 million
  return Math.round((debtTrajectoryData[5].outstandingDebtRsCrore * 100000) / 31000000);
}

/**
 * Get committed expenditure as percentage of revenue
 */
export function getCommittedExpenditurePercent(): number {
  return (revenueCollectionsData.committedExpenditure.salariesPensionsInterest.percentRevenueExpenditure);
}

/**
 * Check if fiscal deficit is above FRBM target
 */
export function isFiscalDeficitAboveFRBM(): boolean {
  return getLatestFiscalDeficitPercent() > 20;
}

/**
 * Get sectoral growth rates
 */
export function getSectoralGrowthRates(): { agriculture: number; industry: number; services: number } {
  return {
    agriculture: sectoralCompositionData.growthRates.agriculture,
    industry: sectoralCompositionData.growthRates.industry,
    services: sectoralCompositionData.growthRates.services,
  };
}

// ==========================================
// RELIGIOUS MINORITIES DATA
// Derived from: research-M2/MP1-foundational/demographics/religious-minorities.md
// Research Date: 19 May 2026 | Data Currency: Census 2011 (base); estimated trends from 2022-2026
// ==========================================

import type {
  ReligiousMinoritiesOverview,
  MuslimCommunity,
  ChristianCommunity,
  BuddhistCommunity,
  JainCommunity,
  DistrictMuslimPopulation,
  DalitChristianReservationIssue,
  ReligiousMinoritiesStrategicImplications,
  ReligiousMinorityDataPoint,
  DataGap as ReligiousMinorityDataGap,
} from "@/types/religious-minorities-types";

/**
 * Religious Minorities Overview
 */
export const religiousMinoritiesOverview: ReligiousMinoritiesOverview = {
  researchDate: "19 May 2026",
  sourcesConsulted: 8,
  dataFreshness: "Census 2011 (base); estimated trends from 2022-2026 reporting",
  confidence: "MEDIUM",
  totalMinorityPercent: 3.5,
  populations: [
    { religion: "muslim", population2011: 535489, sharePercent: 1.93 },
    { religion: "christian", population2011: 348098, sharePercent: 1.26 },
    { religion: "buddhist", population2011: 33237, sharePercent: 0.12 },
    { religion: "jain", population2011: 45040, sharePercent: 0.16 },
  ],
};

/**
 * District-wise Muslim Population (2011 Census)
 */
export const districtMuslimPopulation: DistrictMuslimPopulation[] = [
  { district: "Sangrur (incl. Malerkotla)", muslimPopulation: 179116, percentOfDistrict: 10.82 },
  { district: "Ludhiana", muslimPopulation: 77713, percentOfDistrict: 2.22 },
  { district: "Patiala", muslimPopulation: 40043, percentOfDistrict: 2.11 },
  { district: "SAS Nagar (Mohali)", muslimPopulation: 29488, percentOfDistrict: 2.96 },
  { district: "Jalandhar", muslimPopulation: 30233, percentOfDistrict: 1.38 },
  { district: "Rupnagar", muslimPopulation: 14492, percentOfDistrict: 2.12 },
  { district: "Pathankot", muslimPopulation: 14317, percentOfDistrict: 2.12 },
  { district: "Bathinda", muslimPopulation: 16299, percentOfDistrict: 1.17 },
  { district: "Barnala", muslimPopulation: 13100, percentOfDistrict: 2.20 },
  { district: "Fatehgarh Sahib", muslimPopulation: 16808, percentOfDistrict: 2.80 },
  { district: "Hoshiarpur", muslimPopulation: 23089, percentOfDistrict: 1.46 },
  { district: "Amritsar", muslimPopulation: 12502, percentOfDistrict: 0.50 },
  { district: "Gurdaspur", muslimPopulation: 13350, percentOfDistrict: 0.82 },
  { district: "Mansa", muslimPopulation: 10375, percentOfDistrict: 1.35 },
  { district: "Moga", muslimPopulation: 9388, percentOfDistrict: 0.94 },
  { district: "Kapurthala", muslimPopulation: 10190, percentOfDistrict: 1.25 },
  { district: "SBS Nagar", muslimPopulation: 6829, percentOfDistrict: 1.12 },
  { district: "Muktsar", muslimPopulation: 4333, percentOfDistrict: 0.48 },
  { district: "Faridkot", muslimPopulation: 3125, percentOfDistrict: 0.51 },
  { district: "Firozpur", muslimPopulation: 3150, percentOfDistrict: 0.38 },
  { district: "Tarn Taran", muslimPopulation: 3855, percentOfDistrict: 0.34 },
  { district: "Fazilka", muslimPopulation: 3694, percentOfDistrict: 0.31 },
];

/**
 * Muslim Community Data
 */
export const muslimCommunity: MuslimCommunity = {
  population2011: 535489,
  sharePercent: 1.93,
  decadalGrowth: {
    2001: 382045,
    2011: 535489,
    percentIncrease: 40,
    note: "Fastest growth among minorities",
  },
  highestConcentration: {
    district: "Sangrur (includes Malerkotla)",
    population: 179116,
    percentOfDistrict: 10.82,
  },
  malerkotla: {
    isIndiaOnlyMuslimMajorityMunicipality: true,
    muslimPopulationPercent: 68.5,
    createdAsDistrictYear: 2021,
    note: "Native Punjabi Muslims who stayed during Partition",
  },
  qadian: {
    isAhmadiyyaHeadquarters: true,
    founder: "Mirza Ghulam Ahmad",
    founderBirthYear: 1835,
    district: "Gurdaspur",
  },
  urbanMigrantPockets: [
    { city: "Ludhiana", population: 77713, originStates: ["UP", "Bihar", "Rajasthan", "J&K"] },
    { city: "Patiala", population: 40043, originStates: ["UP", "Bihar", "Rajasthan", "J&K"] },
    { city: "Jalandhar", population: 30233, originStates: ["UP", "Bihar", "Rajasthan", "J&K"] },
    { city: "SAS Nagar/Mohali", population: 29488, originStates: ["UP", "Bihar", "Rajasthan", "J&K"] },
  ],
  districtWise: districtMuslimPopulation,
  denominationalBreakdown: [
    {
      denomination: "Sunni",
      description: "Majority of Punjabi Muslims, especially in Malerkotla and among migrant laborers",
      populationStatus: "verified",
    },
    {
      denomination: "Ahmadiyya",
      description: "Concentrated in Qadian (Gurdaspur district); headquarters of the Ahmadiyya Muslim Community",
      populationStatus: "NOT_FOUND",
    },
    {
      denomination: "Shia",
      description: "Small presence, primarily in urban centers",
      populationStatus: "NOT_FOUND",
    },
  ],
  keyInstitutions: [
    {
      name: "Moorish Mosque",
      type: "Architectural Heritage Site",
      location: "Kapurthala",
      description: "One of the most notable mosques in Punjab",
    },
  ],
  politicalDisposition: {
    malerkotlaTendencia: "Congress-leaning due to secular tradition of erstwhile princely state",
    urbanMigrantTendencia: "Support secular parties (Congress/AAP)",
    generalMessaging: "Responds positively to inclusive secular messaging and minority rights protection",
    verificationNeeded: ["2022 voting patterns"],
  },
  estimatedVoterCount: "5.5-6 lakh",
};

/**
 * Dalit Christian Reservation Issue - Critical Political Matter
 */
export const dalitChristianReservationIssue: DalitChristianReservationIssue = {
  supremeCourtRuling: {
    caseName: "Chinthada Anand vs State of Andhra Pradesh",
    rulingDate: "March 2026",
    keyFinding: "Converting to a religion other than Hinduism, Sikhism, or Buddhism results in loss of Scheduled Caste status and protections under SC/ST Prevention of Atrocities Act",
  },
  impactOnPunjab: {
    affectedCommunities: ["Valmiki", "Majhbi Sikh", "Ad-dharmi"],
    consequences: [
      "Dalit Christians lose SC reservation benefits (jobs, education, political representation)",
      "Excluded from Punjab government employment provisions for SCs",
      "Work primarily in private sector or as daily wage laborers",
    ],
  },
  historicalContext: {
    presidentialOrder1950: "First excluded non-Hindu Dalits",
    "1956Amendment": "Added Sikhs",
    "1990Amendment": "Added Buddhists",
    currentExclusion: "Christians and Muslims remain excluded",
  },
  pendingLegalChallenges: {
    description: "Cases pending before Supreme Court seeking extension of SC status to Dalit Christians/Muslims",
    commissions: ["Ranganath Misra Commission", "Sachar Committee"],
  },
  politicalExploitation: {
    party: "BJP",
    leader: "Amit Shah",
    statement: "Anti-conversion law pledge at Moga rally",
  },
  communityResponse: {
    leaders: [
      { name: "Hamid Masih", role: "President, Punjab Christian Movement" },
      { name: "Prof. Emanual Nahar", role: "Former Chairman, Punjab Minority Commission" },
    ],
  },
};

/**
 * Christian Community Data
 */
export const christianCommunity: ChristianCommunity = {
  growthDynamics: {
    census2011: {
      population: 348098,
      sharePercent: 1.26,
    },
    estimatedCurrentShare: {
      lowEstimate: 3,
      highEstimate: 5,
      note: "Census-based estimates; media estimates claim 10-15% based on visible church growth",
    },
    reportedConversions: {
      number: 350000,
      period: "2023-2025",
      source: "Media reports",
      verificationStatus: "NOT_FOUND - independent verification needed",
    },
    dalitConnection: {
      punjabDalitPercent: 31.9,
      rankingAmongStates: "Highest among Indian states",
      primaryDriverOfChristianGrowth: "Dalits convert seeking social dignity",
    },
  },
  geographicDistribution: [
    {
      region: "Doaba (Jalandhar, Hoshiarpur, Kapurthala, Nawanshahr)",
      dalitPercent: "32%+",
      description: "Belt with highest concentration of Dalit Christians",
    },
    {
      region: "Majha (Amritsar, Tarn Taran, Gurdaspur, Pathankot)",
      dalitPercent: "Sizeable",
      description: "Significant Valmiki and Majhbi Sikh communities with significant Christian following",
    },
  ],
  denominationalBreakdown: [
    {
      denomination: "Catholic",
      description: "Established presence through mission schools and hospitals; organized institutional structure",
      populationStatus: "verified",
    },
    {
      denomination: "Protestant (mainline)",
      description: "Church of North India, Methodist, Lutheran churches with historical presence",
      populationStatus: "verified",
    },
    {
      denomination: "Pentecostal/Independent",
      description: "Fastest-growing segment; attracts Dalit congregations; uncounted in official records",
      keyOrganizations: ["Ankur Narula Ministry", "Khojewal Ministry", "Barjinder Deol Ministry"],
      populationStatus: "NOT_FOUND",
    },
  ],
  dalitChristianIssue: dalitChristianReservationIssue,
  educationalSocialInfrastructure: {
    missionSchools: "Significant network across Punjab; Catholic and Protestant missions run prominent schools and hospitals",
    churches: "Rapid growth of small independent churches in villages, especially in Doaba and Majha",
    fcraRestrictions: "Central government restrictions on foreign funding have shifted toward independent, locally-funded ministries",
  },
  estimatedVoterCount: "5-15 lakh",
  voterCountContested: true,
};

/**
 * Buddhist Community Data
 */
export const buddhistCommunity: BuddhistCommunity = {
  population2011: 33237,
  sharePercent: 0.12,
  urbanConcentration: ["Ludhiana", "Amritsar", "Jalandhar"],
  literacyRate2001: 72.7,
  ambedkariteMovement: {
    description: "Neo-Buddhist converts from Dalit backgrounds form the core",
    communityOrigin: ["Chamar", "Ad-dharmi"],
    connection: "Broader Dalit political consciousness",
    reservationBenefit: "Buddhist converts benefit from SC reservation (since 1990 amendment included Buddhists), unlike Christians and Muslims",
  },
  organizationalPresence: {
    status: "NOT_FOUND",
    note: "Verification needed for specific organizational presence in Punjab",
  },
  politicalRelevance: {
    numericImpact: "Small absolute numbers but symbolically significant in Dalit politics",
    symbolicSignificance: "Intersects with Ad-dharmi and Ravidassia movements",
    regionalConnection: "Concentrated in Doaba region where Dalit political assertion is strongest",
  },
};

/**
 * Jain Community Data
 */
export const jainCommunity: JainCommunity = {
  population2011: 45040,
  sharePercent: 0.16,
  literacyRate2001: 95.9,
  urbanConcentration: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  sects: {
    predominant: ["Digambar", "Shwetambar"],
    breakdownStatus: "NOT_FOUND",
  },
  economicProfile: {
    traditionalOccupations: ["Trade", "Money-lending", "Business"],
    industrialPresence: "Significant presence in Punjab's industrial and commercial sectors (especially Ludhiana's textile/hosiery industry)",
    perCapitaAffluence: "Among the most affluent religious communities per capita in Punjab",
    institutions: "Jain temples (derasars) and charitable trusts",
  },
  politicalRelevance: {
    voteShare: "Small vote share but disproportionate economic influence",
    economicInfluence: "Significant in Punjab's industrial and commercial sectors",
    tendency: "Tend to support business-friendly policies and stability",
    verificationNeeded: ["Specific political affiliations"],
  },
};

/**
 * Religious Minorities Strategic Implications for Congress
 */
export const religiousMinoritiesStrategicImplications: ReligiousMinoritiesStrategicImplications = {
  muslimVoteBank: {
    estimatedVoters: "5.5-6 lakh",
    strategies: [
      {
        component: "Malerkotla",
        description: "Single most concentrated Muslim vote bank. Congress must retain historical connection to Malerkotla's secular legacy. Direct engagement with local Muslim leadership critical",
        priority: "HIGH",
      },
      {
        component: "Migrant Muslim laborers",
        description: "Growing population in Ludhiana, Jalandhar, Mohali; often unregistered voters. Congress should advocate for electoral roll inclusion and labor rights",
        priority: "HIGH",
      },
      {
        component: "Qadian/Ahmadiyya community",
        description: "Persecuted minority; Congress position on religious freedom resonates",
        priority: "MEDIUM",
      },
      {
        component: "Urdu promotion and Waqf Board governance",
        description: "Concrete policy commitments will signal seriousness",
        priority: "MEDIUM",
      },
    ],
  },
  christianVoteBank: {
    estimatedVoters: "5-15 lakh",
    contested: true,
    strategies: [
      {
        component: "Dalit Christian reservation issue - THE defining political opportunity",
        description: [
          "Publicly commit to extending SC reservation benefits to Dalit Christians",
          "Advocate at national level for amendment to Presidential Order of 1950",
          "Contrast with BJP's anti-conversion law stance",
          "Position Congress as protector of both Dalit rights AND religious freedom",
        ],
        politicalOpportunity: "CRITICAL",
      },
      {
        component: "Doaba region (32%+ Dalit belt)",
        description: [
          "Christian Dalit votes could swing 8-10 seats in Jalandhar, Hoshiarpur, Kapurthala, Nawanshahr",
        ],
        politicalOpportunity: "HIGH",
      },
      {
        component: "Counter BJP polarization",
        description: [
          "BJP will attempt to use conversion as a polarizing issue",
          "Congress must frame the debate around social justice, not religion",
        ],
        politicalOpportunity: "HIGH",
      },
      {
        component: "Church engagement",
        description: [
          "Direct outreach to both institutional churches (Catholic, CNI) and independent ministries",
          "Avoid appearing to endorse any particular denomination",
        ],
        politicalOpportunity: "MEDIUM",
      },
    ],
  },
  buddhistJainCommunities: [
    {
      community: "Buddhist",
      approach: "Align Ambedkarite messaging with Congress Dalit outreach",
      rationale: "Small numbers but connect to broader Dalit politics",
    },
    {
      community: "Jain",
      approach: "Engage Jain business community on economic policy",
      rationale: "Economic influence exceeds vote share; their support signals stability and pro-business credentials",
    },
  ],
  crossCuttingStrategy: {
    reforms: ["Strengthen Punjab State Minority Commission with real powers"],
    infrastructure: ["Support minority-run institutions against FCRA overreach"],
    employment: "Address the specific complaint that Dalit Christians have no government job pathway",
    coalitionBuilding: "Muslim + Christian + Buddhist Dalits share common exclusion from SC benefits (Buddhists now included, but solidarity messaging works)",
  },
};

/**
 * Key Data Points Table
 */
export const religiousMinoritiesDataPoints: ReligiousMinorityDataPoint[] = [
  { metric: "Muslim population (Punjab)", value: "535,489 (1.93%)", source: "Census of India", date: "2011" },
  { metric: "Christian population (Punjab)", value: "348,098 (1.26%)", source: "Census of India", date: "2011" },
  { metric: "Buddhist population (Punjab)", value: "33,237 (0.12%)", source: "Census of India", date: "2011" },
  { metric: "Jain population (Punjab)", value: "45,040 (0.16%)", source: "Census of India", date: "2011" },
  { metric: "Malerkotla Muslim %", value: "~68.5%", source: "Census 2011 data", date: "2011" },
  { metric: "Sangrur district Muslim pop.", value: "179,116 (10.82%)", source: "Census / Muslim-Census.com", date: "2011" },
  { metric: "Ludhiana Muslim pop.", value: "77,713 (2.22%)", source: "Census / Muslim-Census.com", date: "2011" },
  { metric: "SC % of Punjab population", value: "31.9% (highest among states)", source: "Census of India", date: "2011" },
  { metric: "Estimated Christian conversions (2023-25)", value: "~3.5 lakh", source: "Media reports", date: "2025" },
  { metric: "SC status denied to Christians/Muslims", value: "SC ruling (Chinthada Anand case)", source: "Supreme Court", date: "Mar 2026" },
  { metric: "Ranganath Misra Commission recommendation", value: "Include Dalit Christians/Muslims in SC", source: "GoI Commission", date: "2007" },
  { metric: "Jain literacy rate (Punjab)", value: "95.9%", source: "Census of India", date: "2001" },
  { metric: "Muslim literacy rate (Punjab)", value: "51.2%", source: "Census of India", date: "2001" },
  { metric: "Christian literacy rate (Punjab)", value: "54.6%", source: "Census of India", date: "2001" },
];

/**
 * Data Gaps and Verification Needs
 */
export const religiousMinoritiesDataGaps: ReligiousMinorityDataGap[] = [
  { id: 1, topic: "Post-2011 census data", description: "No official census since 2011. All growth figures for Christians are estimates.", priority: "CRITICAL" },
  { id: 2, topic: "Actual Christian population (2025-2026)", description: "Estimates range from 3% to 15%. Wide disparity suggests political manipulation of data.", priority: "CRITICAL" },
  { id: 3, topic: "Muslim population (2025-2026)", description: "Migrant Muslim worker numbers in Ludhiana/Jalandhar likely significantly higher than 2011 figures.", priority: "HIGH" },
  { id: 4, topic: "Waqf Board properties", description: "Number, value, and management status of Waqf properties in Punjab.", priority: "HIGH" },
  { id: 5, topic: "Mosque count by district", description: "Verification needed for mosque count by district.", priority: "MEDIUM" },
  { id: 6, topic: "Denominational breakdown of Christians", description: "Catholic vs Protestant vs Pentecostal/Independent percentages.", priority: "HIGH" },
  { id: 7, topic: "Buddhist/Jain organizational presence", description: "Specific temples, institutions, community organizations.", priority: "MEDIUM" },
  { id: 8, topic: "2022 voting patterns by minority community", description: "How Muslims and Christians voted in 2022 Assembly elections.", priority: "HIGH" },
  { id: 9, topic: "Dalit Christian voter registration", description: "How many Dalit Christians are registered voters vs eligible but unregistered.", priority: "MEDIUM" },
  { id: 10, topic: "FCRA impact on Christian institutions", description: "Quantitative data on funding cuts and institutional closures.", priority: "LOW" },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get Muslim population for a specific district
 */
export function getMuslimPopulationByDistrict(district: string): DistrictMuslimPopulation | undefined {
  return districtMuslimPopulation.find(d =>
    d.district.toLowerCase().includes(district.toLowerCase())
  );
}

/**
 * Get all districts with Muslim population above threshold
 */
export function getDistrictsWithHighMuslimPopulation(thresholdPercent: number = 2.0): DistrictMuslimPopulation[] {
  return districtMuslimPopulation.filter(d => d.percentOfDistrict >= thresholdPercent);
}

/**
 * Get estimated Muslim voter count
 */
export function getEstimatedMuslimVoters(): string {
  return muslimCommunity.estimatedVoterCount;
};

/**
 * Get estimated Christian voter count range
 */
export function getEstimatedChristianVotersRange(): { low: number; high: number } {
  return {
    low: 500000,
    high: 1500000,
  };
}

/**
 * Get total religious minority population
 */
export function getTotalReligiousMinorityPopulation(): number {
  return religiousMinoritiesOverview.populations.reduce((sum, p) => sum + p.population2011, 0);
}

/**
 * Get SC Dalit percentage in Punjab
 */
export function getPunjabDalitPercent(): number {
  return christianCommunity.growthDynamics.dalitConnection.punjabDalitPercent;
}

/**
 * Get Dalit Christian reservation issue summary
 */
export function getDalitChristianReservationSummary(): {
  ruling: string;
  caseName: string;
  rulingDate: string;
  affectedCommunities: string[];
} {
  return {
    ruling: dalitChristianReservationIssue.supremeCourtRuling.keyFinding,
    caseName: dalitChristianReservationIssue.supremeCourtRuling.caseName,
    rulingDate: dalitChristianReservationIssue.supremeCourtRuling.rulingDate,
    affectedCommunities: dalitChristianReservationIssue.impactOnPunjab.affectedCommunities,
  };
}

/**
 * Check if data gap is critical
 */
export function isCriticalDataGap(gapId: number): boolean {
  const gap = religiousMinoritiesDataGaps.find(g => g.id === gapId);
  return gap?.priority === "CRITICAL";
}

/**
 * Get all critical data gaps
 */
export function getCriticalDataGaps(): ReligiousMinorityDataGap[] {
  return religiousMinoritiesDataGaps.filter(g => g.priority === "CRITICAL");
}


// ==========================================
// CONGRESS PARTY INTELLIGENCE DATA
// Derived from: research-P2/02_congress_party_intelligence/
// ==========================================

import type {
  CongressIntelligenceReport,
  CongressCentralLeadership,
  PPCCStructure,
  DistrictCongressCommittee,
  BoothOrganization,
  SCCellData,
  OBCCellData,
  MinorityCellData,
  YouthCongressData,
  FarmerCellData,
  NRICellData,
  MediaCellData,
  RebelManagementData,
  TicketDistributionData,
  DataAnalyticsData,
  WorkerNetwork,
} from "@/types/congress-intelligence-types";

/**
 * Congress Central Leadership Data
 * Central command structure of the Indian National Congress
 */
export const congressCentralLeadership: CongressCentralLeadership = {
  highCommand: {
    honoraryPresident: "Mallikarjun Kharge",
    generalSecretaries: [
      "K.C. Venugopal",
      "Ajay Kumar",
      "Randeep Singh Surjewala",
      "Jairam Ramesh",
      "Priyanka Gandhi Vadra"
    ],
    treasurer: "Ajay Kumar",
    communication: "Jairam Ramesh",
    mediaChairperson: "Priyanka Gandhi Vadra"
  },
  aiccOfficeBearers: [
    { role: "Punjab State In-charge", incumbent: "M. Veerappa Moily", notes: "Senior leader, G-23 member" },
    { role: "Co-In-charge", incumbent: "Raghav Chadha", notes: "Young leader, Rajya Sabha MP" },
    { role: "AICC Secretary", incumbent: "Sanjay Kakinwar", notes: "Party apparatus" }
  ],
  cwcMembers: [
    { name: "Amrinder Singh", position: "Former CM", faction: "Prakash", notes: "Amritsar" },
    { name: "Rajinder Singh", position: "Leader", faction: "Prakash", notes: "Buttar" },
    { name: "Sukhpal Singh", position: "Leader", faction: "Sidhu", notes: "Bhular" }
  ],
  groups: [
    { name: "G-23", leader: "Kapil Sibal", members: 23, ideology: "Rebel", influence: "MEDIUM" },
    { name: "Young Turks", leader: "Siddharth", members: 15, ideology: "Modernizers", influence: "MEDIUM" }
  ],
  centralElectionsAuthority: {
    chairman: "M. Veerappa Moily",
    members: ["Raghav Chadha", "Sanjay Kakinwar"],
    role: "Ticket distribution oversight"
  }
};

/**
 * PPCC Structure Data
 * Pradesh Congress Committee organizational structure
 */
export const ppccStructure: PPCCStructure = {
  president: "Ravinder Singh",
  workingPresident: "Gurpreet Singh",
  generalSecretaries: [
    "Rajinder Singh",
    "Sukhpal Singh Bhular",
    "Parminder Singh",
    "Balbir Singh"
  ],
  vicePresidents: [
    "Gurpreet Kangar",
    "Kuljit Singh",
    "Malkiat Singh"
  ],
  secretaries: [
    "Harmit Singh",
    "Harjinder Singh",
    "Joginder Singh"
  ],
  treasurer: "Narinder Singh",
  chiefSpokesperson: "Parminder Singh",
  officeBearersCount: 47,
  departments: [
    { name: "SC Cell", head: "Rajinder Singh", staff: 5 },
    { name: "OBC Cell", head: "Balbir Singh", staff: 4 },
    { name: "Minority Cell", head: "Gurpreet Kangar", staff: 3 },
    { name: "Youth Congress", head: "Kuljit Singh", staff: 6 },
    { name: "Farmer Cell", head: "Sukhpal Singh", staff: 4 },
    { name: "NRI Cell", head: "Malkiat Singh", staff: 2 },
    { name: "Media Cell", head: "Parminder Singh", staff: 8 }
  ],
  cells: [
    { name: "SC Cell", chairman: "Rajinder Singh", secretary: "Kuldeep Singh", focus: "Dalit outreach" },
    { name: "OBC Cell", chairman: "Balbir Singh", secretary: "Jaswinder Singh", focus: "Backward caste outreach" },
    { name: "Minority Cell", chairman: "Gurpreet Kangar", secretary: "Joginder Singh", focus: "Muslim/Christian outreach" },
    { name: "Youth Congress", chairman: "Kuljit Singh", secretary: "Amarinder Singh", focus: "Youth engagement" },
    { name: "Farmer Cell", chairman: "Sukhpal Singh", focus: "Agrarian community" },
    { name: "NRI Cell", chairman: "Malkiat Singh", focus: "Diaspora engagement" },
    { name: "Social Media Cell", chairman: "Parminder Singh", focus: "Digital presence" }
  ]
};

/**
 * District Congress Committees
 * District-wise organizational strength
 */
export const districtCongressCommittees: DistrictCongressCommittee[] = [
  { district: "Ludhiana", president: "Surinder Kumar", generalSecretaries: 8, blockCount: 14, boothCount: 3200, status: "Active" },
  { district: "Amritsar", president: "Rajinder Singh", generalSecretaries: 6, blockCount: 10, boothCount: 2400, status: "Active" },
  { district: "Jalandhar", president: "Mohan Kumar", generalSecretaries: 6, blockCount: 10, boothCount: 2200, status: "Active" },
  { district: "Patiala", president: "Gurpreet Singh", generalSecretaries: 5, blockCount: 8, boothCount: 1900, status: "Active" },
  { district: "Bathinda", president: "Gurmail Singh", generalSecretaries: 5, blockCount: 9, boothCount: 1800, status: "Reorganizing" },
  { district: "Sangrur", president: "Jagsir Singh", generalSecretaries: 6, blockCount: 10, boothCount: 2100, status: "Active" },
  { district: "Hoshiarpur", president: "Raj Kumar", generalSecretaries: 4, blockCount: 7, boothCount: 1500, status: "Active" },
  { district: "Ferozepur", president: "Mohinder Singh", generalSecretaries: 4, blockCount: 8, boothCount: 1700, status: "Weak" },
  { district: "Moga", president: "Kuldeep Singh", generalSecretaries: 4, blockCount: 7, boothCount: 1500, status: "Reorganizing" },
  { district: "Kapurthala", president: "Gurdial Singh", generalSecretaries: 3, blockCount: 5, boothCount: 1100, status: "Active" },
  { district: "Pathankot", president: "Reena Singh", generalSecretaries: 3, blockCount: 4, boothCount: 900, status: "Active" },
  { district: "SAS Nagar", president: "Balwinder Singh", generalSecretaries: 3, blockCount: 3, boothCount: 800, status: "Active" }
];

/**
 * Booth Organization Data
 * Booth-level organizational structure and coverage
 */
export const boothOrganizationData: BoothOrganization = {
  totalBooths: 22968,
  targetBoothSevaks: 300000,
  appointedBoothSevaks: 234000,
  coveragePercent: 78,
  boothPresidentModel: {
    description: "One Booth President per booth with vice president support",
    target: 22968,
    appointed: 18750,
    coverage: 81
  },
  pannaPramukhModel: {
    description: "One Panna Pramukh per 100 voters for micro-targeting",
    totalAppointed: 45000,
    responsibility: "Voter list management, micro-targeting, data collection",
    perBoothRatio: "2:1"
  },
  womensParticipation: {
    targetPercent: 30,
    currentPercent: 8,
    gap: 22,
    strategy: "Mahila Congress activation, SHG networks, women's self-help groups"
  }
};

/**
 * SC Cell Data
 * Scheduled Caste outreach and mobilization
 */
export const scCellData: SCCellData = {
  totalSCPopulation: 31.9,
  scPercent: 31.9,
  scVoters: "55-60 lakh",
  communities: [
    { community: "Mazhabi Sikh", populationPercent: 8, primaryRegion: "Malwa", votingTendency: "Congress 55%", keyIssue: "Jobs, reservation" },
    { community: "Ravidasia", populationPercent: 5, primaryRegion: "Malwa/Doaba", votingTendency: "BSP 40%, Congress 35%", keyIssue: "Reservation, dignity" },
    { community: "Ad-Dharmi", populationPercent: 4, primaryRegion: "Doaba", votingTendency: "Congress 45%, BSP 30%", keyIssue: "Land rights, jobs" },
    { community: "Chamar", populationPercent: 10, primaryRegion: "All regions", votingTendency: "Congress 50%", keyIssue: "Social justice, welfare" },
    { community: "Valmiki", populationPercent: 3, primaryRegion: "Urban areas", votingTendency: "AAP 35%, Congress 35%", keyIssue: "Sanitation jobs, housing" }
  ],
  strategy: {
    targetVoteShare: 75,
    currentEstimate: 55,
    swingSeats: 25,
    outreachPriority: "CRITICAL"
  },
  outreach: {
    programs: ["SC Mahasammelan", "Reservation awareness", "Job melas", "Legal aid camps"],
    leaders: ["Rajinder Singh (SC Cell Chairman)", "Diversify Dalit leadership"],
    organizations: ["Scheduled Castes Federation", "Bhim Army", "Ambedkarite groups"]
  },
  mazhabiSikh: {
    population: "8%",
    concentration: ["Bathinda", "Moga", "Ferozepur", "Sangrur"],
    votingPattern: "Congress 55%, BSP 25%",
    congressReach: 55,
    bspVulnerability: 25
  },
  ravidasia: {
    population: "5%",
    concentration: ["Malwa belt", "Doaba"],
    votingPattern: "BSP 40%, Congress 35%",
    BSPConnection: "Mayawati's 2026 Punjab push"
  }
};

/**
 * OBC Cell Data
 * Other Backward Classes outreach and mobilization
 */
export const obcCellData: OBCCellData = {
  totalOBCPopulation: 31,
  obcPercent: 31,
  obcVoters: "50-55 lakh",
  communities: [
    { community: "Jat", population: "21%", primaryRegion: "Malwa", occupation: "Agriculture", votingTendency: "SAD 40%, Congress 30%" },
    { community: "Khatri", population: "3%", primaryRegion: "Urban", occupation: "Business, Trade", votingTendency: "Congress 45%, BJP 30%" },
    { community: "Arora", population: "2%", primaryRegion: "Urban", occupation: "Trade, Commerce", votingTendency: "Congress 40%" },
    { community: "Rajput", population: "2%", primaryRegion: "Malwa", occupation: "Agriculture, Army", votingTendency: "BJP 35%, Congress 35%" },
    { community: "Gujjar", population: "1.5%", primaryRegion: "Doaba/Majha", occupation: "Agriculture, Dairy", votingTendency: "Congress 50%" },
    { community: "Bhatia", population: "0.5%", primaryRegion: "Majha", occupation: "Trade", votingTendency: "Congress 55%" },
    { community: "Kamboj", population: "1%", primaryRegion: "Malwa", occupation: "Agriculture", votingTendency: "Congress 45%" }
  ],
  categories: [
    { category: "Backwards", jatis: ["Jat", "Gujjar", "Kamboj", "Khatri"], populationPercent: 18 },
    { category: "Most Backwards", jatis: ["Lohar", "Tarkhan", "Nai", "Mochi", "Dhanak"], populationPercent: 8 },
    { category: "Denotified", jatis: ["Valmiki", "Bugi", " Sapera"], populationPercent: 5 }
  ],
  strategy: {
    targetVoteShare: 55,
    currentEstimate: 40,
    keyCommunities: ["Jat", "Khatri", "Gujjar"],
    swingSeats: 20
  },
  artisanCommunities: [
    { community: "Loher/Tarkhan", traditionalOccupation: "Blacksmith, Artisan", concentration: ["Doaba", "Majha"], economicStatus: "Declining, 60% migrated" },
    { community: "Nai/Barber", traditionalOccupation: "Hair cutting, ritual", concentration: ["All regions"], economicStatus: "Urban migration" },
    { community: "Mochi/Shoes", traditionalOccupation: "Shoe making", concentration: ["Malwa"], economicStatus: "Artisanal decline" }
  ]
};

/**
 * Minority Cell Data
 * Minority community outreach and mobilization
 */
export const minorityCellData: MinorityCellData = {
  totalMinorityPercent: 3.5,
  minorityVoters: "5-6 lakh",
  communities: [
    { community: "Muslim", population: "535,489 (1.93%)", primaryLocation: ["Malerkotla", "Ludhiana", "Patiala"], votingTendency: "Congress 60%", keyIssue: "Waqf, secularism" },
    { community: "Christian", population: "348,098 (1.26%)", primaryLocation: ["Doaba", "Majha", "Urban"], votingTendency: "Congress 50%", keyIssue: "Dalit Christian reservation" },
    { community: "Buddhist", population: "33,237 (0.12%)", primaryLocation: ["Urban areas"], votingTendency: "Congress 45%", keyIssue: "SC status" },
    { community: "Jain", population: "45,040 (0.16%)", primaryLocation: ["Ludhiana", "Amritsar"], votingTendency: "Congress 40%", keyIssue: "Business friendly" }
  ],
  strategy: {
    targetCommunities: ["Muslim", "Christian"],
    currentEstimate: 45,
    outreachPriority: "HIGH",
    messageThemes: ["Secularism", "Minority rights", "Reservation for Dalit Christians"]
  },
  malerkotlaFocus: {
    description: "Only Muslim-majority municipality in India",
    muslimPopulation: "68.5%",
    significance: "Symbolic, 1 Assembly seat",
    congressConnection: "Historical secular legacy"
  },
  christianOutreach: {
    estimatedPopulation: "3-5% (contested)",
    concentration: ["Doaba (32%+ Dalit belt)", "Majha"],
    dalitChristianIssue: "SC status denied to Dalit Christians (Supreme Court March 2026)",
    congressPosition: "Extend SC reservation to Dalit Christians"
  }
};

/**
 * Youth Congress Data
 * Youth mobilization and engagement
 */
export const youthCongressData: YouthCongressData = {
  totalYouthPopulation: 60,
  youthPercent: 60,
  youthVoters: "1.2 crore (18-35 yrs)",
  structure: {
    president: "Kuljit Singh",
    generalSecretaries: ["Amarinder Singh", "Gurleen", "Joban"],
    blockUnits: 150,
    collegeUnits: 85,
    activeMembers: 25000
  },
  nsuiConnection: {
    statePresident: "Gurdeep Singh",
    units: 200,
    activeMembers: 15000,
    campusPresence: ["Punjab University", "PU Chandigarh", "LPU", "GNDU"]
  },
  strategy: {
    priorityIssues: ["Jobs", "Drugs", "Skill development", "Startups"],
    outreachChannels: ["Social media", "College campus", "NSS", "NYSC"],
    targetActivation: 70,
    digitalFirst: true
  },
  digitalNativeEngagement: {
    socialMediaFollowing: 500000,
    whatsappGroups: 5000,
    engagementRate: "8-12%",
    contentTypes: ["Short videos", "Memes", "Live sessions", "Stories"]
  }
};

/**
 * Farmer Cell Data
 * Farmer outreach and agrarian community mobilization
 */
export const farmerCellData: FarmerCellData = {
  totalFarmers: 10.8,
  farmerHouseholds: 10.8,
  farmLabor: 11.2,
  landlessFarmLabor: 11.2,
  strategy: {
    targetVoteShare: 65,
    currentEstimate: 50,
    keyIssues: ["Drugs", "Farm debt", "MSP", "Stubble burning", "Water"],
    outreachPriority: "HIGH"
  },
  bkuConnection: {
    status: "Limited formal alliance",
    supportLevel: "Sympathetic but not formally aligned",
    leaderContacts: ["Balbir Singh Rajewal", "Gurnam Singh"],
    memberEstimate: 50000
  },
  ruralOutreach: {
    villages: 12751,
    targetVillages: 10000,
    bkuChembers: 50,
    kisanMahapanchayat: 25
  }
};

/**
 * NRI Cell Data
 * Non-Resident Indian engagement and diaspora mobilization
 */
export const nriCellData: NRICellData = {
  totalDiaspora: "20+ lakh",
  diasporaCountries: [
    { country: "Canada", population: "8 lakh", congressSympathy: "45%", aapSympathy: "40%", riskLevel: "HIGH", keyFactor: "India-Canada tensions, Nijjar killing" },
    { country: "USA", population: "6+ lakh", congressSympathy: "35%", aapSympathy: "30%", riskLevel: "MEDIUM", keyFactor: "Diaspora organizations,Modi support growing" },
    { country: "UK", population: "4-5 lakh", congressSympathy: "40%", aapSympathy: "30%", riskLevel: "LOW", keyFactor: "Labour Party connections" },
    { country: "Australia", population: "2 lakh", congressSympathy: "25%", aapSympathy: "35%", riskLevel: "LOW", keyFactor: "Pro-government diaspora" },
    { country: "Europe", population: "2 lakh", congressSympathy: "38%", aapSympathy: "28%", riskLevel: "LOW", keyFactor: "Human rights narrative" }
  ],
  voterRegistration: {
    registered2019: 393,
    votesCast2019: 0,
    potentialIfOnline: "10-15 lakh",
    registrationChallenge: "Legal prohibition, logistical barriers"
  },
  strategy: {
    priorityCountries: ["Canada", "UK", "USA"],
    engagementChannels: ["WhatsApp groups", "Video calls", "Consulates", "Gurdwara outreach"],
    targetOutcome: "Narrative support, funding, diaspora pressure on MPs"
  },
  remittanceInfluence: {
    annualRemittance: "$4-5 billion",
    percentOfStateGDP: "15-20%",
    influenceChannels: ["Family voting instructions", "Local community pressure", "Political contributions"]
  }
};

/**
 * Media Cell Data
 * Traditional and social media presence
 */
export const mediaCellData: MediaCellData = {
  traditionalMedia: {
    print: {
      newspapers: [
        { name: "Punjab Kesari", language: "Punjabi", reach: "High", congressStance: "Neutral-Critical" },
        { name: "Ajit", language: "Punjabi", reach: "High", congressStance: "SAD leaning" },
        { name: "Jagbani", language: "Punjabi", reach: "Medium", congressStance: "Neutral" },
        { name: "Dainik Bhaskar", language: "Hindi", reach: "High", congressStance: "Neutral" }
      ],
      magazines: ["The Week", "India Today", "Punjab Today"],
      expenditure: "Rs 15-20 crore/month"
    },
    tv: {
      channels: ["ETV Punjab", "India News Punjab", "DD Punjab", "PTC"],
      debates: 15,
      expenditure: "Rs 10-15 crore/month"
    },
    digital: {
      newsPortals: ["PunjabKesari.com", "AjitDaily.com", "SanjhaMorcha.com"],
      expenditure: "Rs 5-8 crore/month"
    }
  },
  socialMedia: {
    platforms: [
      { platform: "Facebook", followers: 850000, postsPerWeek: 45, engagementRate: "3-5%" },
      { platform: "Instagram", followers: 450000, postsPerWeek: 30, engagementRate: "5-8%" },
      { platform: "Twitter/X", followers: 180000, postsPerWeek: 60, engagementRate: "2-3%" },
      { platform: "YouTube", followers: 250000, postsPerWeek: 10, engagementRate: "4-6%" },
      { platform: "WhatsApp", followers: 5000000, postsPerWeek: 500, engagementRate: "N/A" }
    ],
    totalFollowers: 6730000,
    engagementRate: "4-6%",
    contentTypes: [
      { type: "Short videos/Reels", frequency: "Daily", avgReach: "50K-100K" },
      { type: "Live sessions", frequency: "Weekly", avgReach: "20K-50K" },
      { type: "Press releases", frequency: "Daily", avgReach: "10K-20K" },
      { type: "Memes/Infographics", frequency: "3-4x/week", avgReach: "30K-60K" }
    ]
  },
  digitalStrategy: {
    targetReach: "1 crore impressions/week",
    currentReach: "65 lakh impressions/week",
    priorityPlatforms: ["WhatsApp", "Facebook", "Instagram", "YouTube"],
    contentThemes: ["Jobs", "Drugs", "Farmers", "Youth", "Development"],
    influencerBudget: "Rs 2-3 crore/month"
  },
  contentTeam: {
    teamSize: 25,
    roles: ["Content creators", "Video editors", "Social media managers", "Graphic designers", "PR"],
    outputTarget: "100+ pieces/month"
  },
  responseCell: {
    monitoringHours: "6 AM - 11 PM",
    responseTime: "< 30 minutes",
    teamSize: 8
  }
};

/**
 * Rebel Management Data
 * Rebel candidate assessment and seat negotiation
 */
export const rebelManagementData: RebelManagementData = {
  rebelAssessment: {
    totalRebelCandidates: 15,
    potentialRebels: 8,
    highImpactRebels: 3,
    history: {
      2017: 12,
      2022: 18,
      pattern: "AAP wave attracts more rebels"
    }
  },
  seatNegotiation: {
    negotiableSeats: 30,
    sittingMLAs: 18,
    rebelFactor: "High in 8-10 seats",
    negotiationTimeline: "Central command controls final list"
  },
  winnabilityAnalysis: {
    criteria: ["Local influence", "Caste arithmetic", "Anti-incumbency", "Money power", "Party loyalty"],
    weightage: { winnability: 40, caste: 25, loyalty: 15, money: 10, local: 10 },
    topFactors: ["Winnability", "Caste balance", "Anti-AAP positioning"]
  }
};

/**
 * Ticket Distribution Data
 * Screening process and candidate selection
 */
export const ticketDistributionData: TicketDistributionData = {
  screeningProcess: {
    committees: [
      { name: "Central Election Authority", members: ["M. Veerappa Moily", "Raghav Chadha"], role: "Final approval" },
      { name: "State Screening Committee", members: ["Ravinder Singh", "Amrinder Singh", "Prakash"], role: "Candidate evaluation" },
      { name: "District Level Committee", members: ["DCC Presidents", "MLAs"], role: "Initial screening" }
    ],
    stages: ["Application", "Interview", "Caste balancing", "Central approval", "Announcement"],
    finalAuthority: "Central Election Authority / High Command"
  },
  criteria: {
    winnability: 40,
    casteBalance: 25,
    youthQuota: 15,
    minorityRepresentation: 10,
    financialRules: 5,
    localVSExternal: 5
  },
  timeline: {
    applicationStart: "T-8 months",
    interviewStart: "T-6 months",
    centralApproval: "T-4 months",
    finalList: "T-3 months"
  },
  candidateProfile: {
    totalSeats: 117,
    insiders: 75,
    outsiders: 15,
    womenQuota: 33,
    youthQuota: 25,
    rebelFactor: 15
  }
};

/**
 * Data Analytics Data
 * Analytics infrastructure and capabilities
 */
export const dataAnalyticsData: DataAnalyticsData = {
  infrastructure: {
    verbStatus: "Limited - needs upgrade",
    dataCenter: "SAS Nagar (planned)",
    staffSize: 15,
    budget: "Rs 5-10 crore"
  },
  dataCoverage: {
    voterList: "85% (needs updating)",
    boothLevel: "70%",
    demographic: "60%",
    casteMapping: "55%",
    sentiment: "40%"
  },
  tools: {
    crm: "Basic Excel/Google Sheets",
    gis: "Google Earth Pro",
    socialListening: "Basic Twitter analytics",
    survey: "Manual/Third party",
    predictive: "None"
  },
  capabilities: {
    realTimeTracking: false,
    microTargeting: false,
    sentimentAnalysis: false,
    predictiveModeling: false,
    competitorAnalysis: false
  },
  gaps: {
    critical: ["No dedicated CRM", "No GIS mapping", "No predictive analytics", "No social listening tool"],
    important: ["Limited voter list accuracy", "Caste data incomplete", "No mobile app for workers"],
    minor: ["No A/B testing", "No automation"]
  }
};

/**
 * Worker Network Data
 * Party worker strength and activation
 */
export const workerNetworkData: WorkerNetwork = {
  totalWorkers: 300000,
  activeWorkers: 180000,
  activationRate: 60,
  byLevel: [
    { level: "Booth-level Sevaks", count: 234000, target: 300000, coverage: 78, status: "Partial" },
    { level: "Booth Presidents", count: 18750, target: 22968, coverage: 81, status: "Active" },
    { level: "Sector Supervisors", count: 12000, target: 20000, coverage: 60, status: "Partial" },
    { level: "Block-level Officers", count: 300, target: 341, coverage: 88, status: "Active" },
    { level: "District Officers", count: 25, target: 29, coverage: 86, status: "Active" }
  ],
  byRegion: [
    { region: "Malwa", workers: 120000, booths: 12000, workerPerBooth: 10, activationTrend: "up" },
    { region: "Majha", workers: 60000, booths: 6000, workerPerBooth: 10, activationTrend: "stable" },
    { region: "Doaba", workers: 45000, booths: 4500, workerPerBooth: 10, activationTrend: "down" }
  ]
};

/**
 * Congress Intelligence Report Summary
 */
export const congressIntelligenceReport: CongressIntelligenceReport = {
  reportDate: "20 May 2026",
  confidence: "MEDIUM",
  sourcesConsulted: 20,
  dataCurrency: "Based on 2024-2026 reporting; requires verification",
  leadership: congressCentralLeadership,
  ppcc: ppccStructure,
  districtStructure: districtCongressCommittees,
  regionalStructure: [
    { region: "Malwa", coordinator: "TBA", dccCount: 8, boothCount: 12000, politicalContext: "Highest stakes, 59 seats, Jat Sikh dominant" },
    { region: "Majha", coordinator: "TBA", dccCount: 4, boothCount: 6000, politicalContext: "Border region, Hindu-Sikh mix" },
    { region: "Doaba", coordinator: "TBA", dccCount: 3, boothCount: 4500, politicalContext: "Doaba region, highest SC concentration" }
  ],
  boothOrganization: boothOrganizationData,
  scCell: scCellData,
  obcCell: obcCellData,
  minorityCell: minorityCellData,
  youthCongress: youthCongressData,
  farmerCell: farmerCellData,
  nriCell: nriCellData,
  mediaCell: mediaCellData,
  rebelManagement: rebelManagementData,
  ticketDistribution: ticketDistributionData,
  dataAnalytics: dataAnalyticsData,
  workerNetwork: workerNetworkData,
  gaps: [
    "PPCC financial accounts not publicly disclosed",
    "Worker activation rates estimated, not verified",
    "Booth-level data incomplete for 30% of seats",
    "Caste mapping at AC level incomplete",
    "NRI voter registration numbers unreliable",
    "Digital analytics capabilities lag behind AAP"
  ]
};

// ==========================================
// CONGRESS INTELLIGENCE HELPER FUNCTIONS
// ==========================================

/**
 * Get district congress committee by district name
 */
export function getDCCByDistrict(district: string): DistrictCongressCommittee | undefined {
  return districtCongressCommittees.find(d =>
    d.district.toLowerCase().includes(district.toLowerCase())
  );
}

/**
 * Get active district congress committees
 */
export function getActiveDCCs(): DistrictCongressCommittee[] {
  return districtCongressCommittees.filter(d => d.status === "Active");
}

/**
 * Get weak/reorganizing DCCs needing attention
 */
export function getWeakDCCs(): DistrictCongressCommittee[] {
  return districtCongressCommittees.filter(d => d.status === "Weak" || d.status === "Reorganizing");
}

/**
 * Get SC communities by region
 */
export function getSCCommunitiesByRegion(region: string): { community: string; populationPercent: number; votingTendency: string }[] {
  return scCellData.communities.filter(c => {
    if (region === "Malwa") return c.primaryRegion.includes("Malwa") || c.primaryRegion === "All regions";
    if (region === "Doaba") return c.primaryRegion.includes("Doaba") || c.primaryRegion === "All regions";
    if (region === "Majha") return c.primaryRegion.includes("Majha") || c.primaryRegion === "All regions";
    return true;
  });
}

/**
 * Get OBC communities by category
 */
export function getOBCByCategory(category: string): { community: string; population: string; votingTendency: string }[] {
  const cat = obcCellData.categories.find(c => c.category === category);
  if (!cat) return [];
  return obcCellData.communities.filter(c => cat.jatis.includes(c.community));
}

/**
 * Get NRI risk by country
 */
export function getNRIRiskByCountry(country: string): { country: string; riskLevel: "HIGH" | "MEDIUM" | "LOW"; keyFactor: string } | undefined {
  return nriCellData.diasporaCountries.find(n =>
    n.country.toLowerCase().includes(country.toLowerCase())
  );
}

/**
 * Get high-risk NRI countries
 */
export function getHighRiskNRICountries(): { country: string; congressSympathy: string; aapSympathy: string }[] {
  return nriCellData.diasporaCountries.filter(n => n.riskLevel === "HIGH");
}

/**
 * Get media cell expenditure summary
 */
export function getMediaExpenditureSummary(): { category: string; amount: string }[] {
  return [
    { category: "Print Media", amount: mediaCellData.traditionalMedia.print.expenditure },
    { category: "TV Media", amount: mediaCellData.traditionalMedia.tv.expenditure },
    { category: "Digital Media", amount: mediaCellData.traditionalMedia.digital.expenditure },
    { category: "Influencer Budget", amount: mediaCellData.digitalStrategy.influencerBudget }
  ];
}

/**
 * Get worker activation rate by region
 */
export function getWorkerActivationByRegion(region: "Malwa" | "Majha" | "Doaba"): number {
  const data = workerNetworkData.byRegion.find(r => r.region === region);
  return data ? Math.round((data.workers / data.booths) * 10) : 0;
}

/**
 * Get analytics gaps by severity
 */
export function getAnalyticsGapsBySeverity(severity: "critical" | "important" | "minor"): string[] {
  return dataAnalyticsData.gaps[severity] || [];
}

/**
 * Get ticket distribution criteria breakdown
 */
export function getTicketCriteriaBreakdown(): { criterion: string; weight: number }[] {
  return Object.entries(ticketDistributionData.criteria).map(([key, value]) => ({
    criterion: key.replace(/([A-Z])/g, ' $1').trim(),
    weight: value
  }));
}

/**
 * Get congress intelligence data gaps
 */
export function getCongressIntelligenceGaps(): string[] {
  return congressIntelligenceReport.gaps;
}

// ==========================================
// COMPETITOR INTELLIGENCE DATA
// Derived from: research-P5/competition-management/
// ==========================================

/**
 * AAP Competitor Intelligence
 * Comprehensive analysis of Aam Aadmi Party Punjab
 */
export const aapCompetitorData: AAPCompetitor = {
  party: "AAP",
  governanceRecord: {
    healthInfrastructure: "Claims 2,304 Mohalla Clinics built; infrastructure gaps persist",
    educationInitiatives: "122 government schools upgraded; learning outcomes mixed",
    infrastructureRoads: "Road infrastructure improved but pothole complaints continue",
    lawEnforcement: "Police-recruit scandal; 22,000 positions vacant",
    fiscalPerformance: {
      totalDebt: "Rs 4.17 lakh crore",
      debtToGSDP: ">50% of GSDP",
      newLoans: "Rs 20,000+ crore borrowed in 2024-25",
      irregularities: "CAG flags massive financial irregularities"
    } as unknown as FiscalData,
  },
  welfareSchemes: [
    { name: "300 Units Free Electricity", description: "For all households", launchDate: "2022", status: "Active" },
    { name: "Sankalp Portal", description: "Job portal for youth", launchDate: "2023", status: "Active" },
    { name: "Shag Incentive", description: "Rs 1,000/month for women", launchDate: "2026", status: "Active" },
    { name: "Mahila Samriddhi Yojana", description: "Direct benefit transfer for women", launchDate: "2023", status: "Announced" },
  ],
  weaknesses: [
    { area: "Leadership Exodus", severity: "Critical", description: "7 Rajya Sabha MPs defected since 2023", evidence: "Ashutosh, Sushil Gupta, Rajinder Pal, etc." },
    { area: "Fiscal Crisis", severity: "Critical", description: "State debt at Rs 4.17 lakh crore", evidence: "CAG report, RBI data" },
    { area: "Drug Menace", severity: "Critical", description: "No visible improvement in drug availability", evidence: "Ground reports, village-level surveys" },
    { area: "Youth Unemployment", severity: "High", description: "19.3% youth unemployment rate", evidence: "PLFS data Oct-Dec 2024" },
    { area: "Gangsterism", severity: "High", description: "Murder wave 2025-26", evidence: "Media reports, FIR data" },
    { area: "Corruption", severity: "High", description: "ED arrests, vigilance cases", evidence: "Sanjeev Arora ED case May 2026" },
  ],
  voterBase: [
    { segment: "Urban Middle Class", support: "Strong", trend: "Declining", keyFactors: ["Free schemes", "Healthcare narrative"] },
    { segment: "SC Voters", support: "Strong", trend: "Stable", keyFactors: ["Welfare schemes", "Channi factor"] },
    { segment: "Dalit Voters", support: "Moderate", trend: "Declining", keyFactors: ["Job promises unfulfilled"] },
    { segment: "Jat Sikh", support: "Weak", trend: "Declining", keyFactors: ["Mann government performance", "Drug issue"] },
  ],
  electoralPerformance: {
    2022: { seats: 92, voteShare: 42.3 },
    2024: { seats: 3, voteShare: 24.4, details: "Lok Sabha performance - severe decline" },
    current: { assemblySeats: 92, rajyaSabhaSeats: 2, lokSabhaSeats: 3, mlacount: 0 },
  },
  swot: {
    strengths: ["Incumbent advantage", "Welfare scheme visibility", "SC voter base", "Digital campaign infrastructure"],
    weaknesses: ["Fiscal mismanagement", "Leadership exodus", "Unfulfilled promises", "Drug crisis unaddressed"],
    opportunities: ["BJP-SAD split", "Congress weakness in Malwa", "Dera support potential"],
    threats: ["Anti-incumbency mounting", "Jat Sikh drift", "Economic distress", "Crime graph"],
  },
  strategy: {
    welfareExpansion: ["Free electricity continuation", "Women welfare schemes", "Job melas"],
    antiBJPPolarization: ["BJP-SAD alliance attacks", "Central government neglect narrative"],
    digitalCampaign: ["Social media dominance", "WhatsApp networks", "Influencer engagement"],
    farmerDamageControl: ["MSP announcements", "Crop diversification subsidies"],
  },
};

/**
 * SAD Competitor Intelligence
 */
export const sadCompetitorData: SADCompetitor = {
  party: "SAD",
  currentStatus: {
    president: "Sukhbir Singh Badal",
    assemblySeats: 3,
    lokSabhaSeats: 1,
    voteShare2022: 18.0,
    voteShare2024: 17.5,
  },
  factions: [
    { name: "SAD (Badal)", leader: "Sukhbir Singh Badal", status: "Active", position: "Core party" },
    { name: "SAD-Amritsar", leader: "Simranjit Singh Mann", status: "Split", position: "Panthic opposition" },
    { name: "SAD-Waris Punjab De", leader: "Manjinder Singh Kawach", status: "Split" },
    { name: "SAD-Punar Surjit", leader: "Prem Singh Chandumajra", status: "Split" },
  ],
  electoralDecline: [
    { election: "2017", seats: 15, voteShare: "25.2%", notes: "Pre-farm laws" },
    { election: "2022", seats: 3, voteShare: "18.0%", notes: "Farm laws backlash" },
    { election: "2024", seats: 1, voteShare: "17.5%", notes: "Continued decline" },
  ],
  leadership: {
    president: "Sukhbir Singh Badal",
    formerCM: "Parkash Singh Badal",
    lokSabhaLeader: "Harsimrat Kaur Badal",
    legalCases: ["Drug trafficking cases", "Bogus fertilizer case", "Sacred Relief Fund case"],
  },
  allianceStatus: {
    bjpAlliance: { status: "Negotiating", date: "2025-2026", reason: "BJP wants to go solo; SAD desperate for alliance" },
    bspAlliance: { status: "None" },
    current: "BJP-SAD alliance uncertain for 2027",
  },
  swot: {
    strengths: ["Traditional Sikh voter base", "Badal family loyalty network", "Agricultural community connect"],
    weaknesses: ["Farm laws damage", "Leadership vacuum", "Massacre legacy (1984)", "BJP dependency"],
    opportunities: ["BJP alliance if restored", "Anti-AAP Sikh vote consolidation"],
    threats: ["AAP erosion of Sikh votes", "SAD-Amritsar competition", "Leadership mortality"],
  },
};

/**
 * BJP Competitor Intelligence
 */
export const bjpCompetitorData: BJPCompetitor = {
  party: "BJP",
  currentStatus: {
    statePresident: "SP Singh",
    workingPresident: "Additional presidents",
    assemblySeats: 3,
    lokSabhaSeats: 18,
    voteShare2022: 6.6,
    voteShare2024: 18.5,
    soloStatus: "Confirmed",
  },
  growthTrajectory: [
    { election: "2017", type: "Assembly", voteShare: 5.2, seats: 3, notes: "Pre-agreement with SAD" },
    { election: "2022", type: "Assembly", voteShare: 6.6, seats: 3, notes: "SAD-BJP alliance" },
    { election: "2024", type: "Lok Sabha", voteShare: 18.5, seats: 18, notes: "Solo - massive jump" },
  ],
  strategy: {
    socialCoalition: ["Non-Jat voters", "Urban Hindus", "Dalits", "OBCs (excluding Jats)"],
    organizationalBuild: [" booth-level workers", "Social media cells", "Dera engagement"],
    antiDrugCampaign: ["Anti-drug narrative", "Youth outreach"],
    deraEngagement: ["Dera Beas", "Dera Ballan", "DSS through Haryana connection"],
  },
  voterTargeting: [
    { community: "Urban Hindus", population: "~15%", currentSupport: "60%", target: "75%", strategy: "Modi cult, development narrative" },
    { community: "Dalits", population: "~32%", currentSupport: "25%", target: "40%", strategy: "Welfare schemes, dera outreach" },
    { community: "OBCs (non-Jat)", population: "~20%", currentSupport: "20%", target: "35%", strategy: "Reservation narrative" },
    { community: "Jats (targeted least)", population: "~20%", currentSupport: "5%", target: "10%", strategy: "Not priority" },
  ],
  leadership: {
    statePresident: "SP Singh",
    nationalOversight: "Manpreet Singh (in charge)",
    keyUnionMinisters: [],
    defectorLeaders: [
      { name: "Kumar Mangalam Birla", fromParty: "Congress", role: "Advisory", impact: "Corporate connect" },
    ],
  },
  swot: {
    strengths: ["Modi popularity", "Central schemes visibility", "Hindu consolidation", "NRI Hindu support"],
    weaknesses: ["No base in Sikh-majority areas", "SAD alliance uncertainty", "Local leadership gap"],
    opportunities: ["AAP fatigue", "Dera marriages", "Malwa Hindu vote"],
    threats: ["Anti-Hindu narrative by AAP", "SAD competition for Sikh voters", "Congress consolidation"],
  },
};

/**
 * BSP Competitor Intelligence
 */
export const bspCompetitorData: BSPCompetitor = {
  party: "BSP",
  currentStatus: {
    president: "Mayawati",
    assemblySeats: 0,
    voteShare2022: 1.5,
    trend: "Declining since 2012",
  },
  declineTrajectory: [
    { election: "2007", seats: 12, voteShare: "8.4%", notes: "Peak performance" },
    { election: "2012", seats: 3, voteShare: "4.9%", notes: "Beginning of decline" },
    { election: "2017", seats: 0, voteShare: "2.4%", notes: "Complete wipeout" },
    { election: "2022", seats: 0, voteShare: "1.5%", notes: "Continued collapse" },
  ],
  outreachCampaign: "Mayawati visits 2025-26, Dalit card plays, alliance talks attempted",
};

/**
 * Poll Trend Data
 */
export const pollTrendData: PollData[] = [
  { source: "Congress Internal", date: "May 2026", congress: 31, aap: 26, sad: 19, bjp: 13, others: 11, margin: "Congress +5" },
  { source: "Punjab Mail", date: "Apr 2026", congress: 29, aap: 28, sad: 18, bjp: 14, others: 11, margin: "Congress +1" },
  { source: "The Tribune", date: "Mar 2026", congress: 30, aap: 27, sad: 20, bjp: 12, others: 11, margin: "Congress +3" },
];

/**
 * Sentiment Trends
 */
export const sentimentTrends: SentimentTrend[] = [
  { party: "Congress", favorable: 31, unfavorable: 42, netScore: -11, trend: "Improving" },
  { party: "AAP", favorable: 35, unfavorable: 48, netScore: -13, trend: "Declining" },
  { party: "SAD", favorable: 12, unfavorable: 55, netScore: -43, trend: "Stable" },
  { party: "BJP", favorable: 28, unfavorable: 45, netScore: -17, trend: "Improving" },
];

/**
 * Issue Ownership Data
 */
export const issueOwnershipData_2027: IssueOwnership[] = [
  { issue: "Drugs", importance: 62, congressOwnership: 25, aapOwnership: 30, sadBJPOwnership: 10, owner: "AAP" },
  { issue: "Corruption", importance: 55, congressOwnership: 20, aapOwnership: 35, sadBJPOwnership: 15, owner: "AAP" },
  { issue: "Unemployment", importance: 50, congressOwnership: 30, aapOwnership: 25, sadBJPOwnership: 10, owner: "Congress" },
  { issue: "Farmers", importance: 45, congressOwnership: 35, aapOwnership: 20, sadBJPOwnership: 20, owner: "Congress" },
  { issue: "Law & Order", importance: 35, congressOwnership: 20, aapOwnership: 25, sadBJPOwnership: 15, owner: "Others" },
];

// ==========================================
// PUBLIC SENTIMENT DATA
// Derived from: research-P5/public-sentiment/ and research-P5/media-sentiment/
// ==========================================

/**
 * Poll Entry Data
 */
export const pollEntries: PollEntry[] = [
  { source: "Congress Survey", date: "May 2026", congress: 31, aap: 26, sad: 19, bjp: 13, others: 11, margin: "+5 AAP" },
  { source: " AAP Survey", date: "Apr 2026", congress: 29, aap: 28, sad: 18, bjp: 14, others: 11, margin: "+1" },
  { source: "The Tribune", date: "Mar 2026", congress: 30, aap: 27, sad: 20, bjp: 12, others: 11, margin: "+3" },
  { source: "NDI Poll", date: "Feb 2026", congress: 28, aap: 30, sad: 18, bjp: 13, others: 11, margin: "AAP +2" },
];

/**
 * Poll Trends
 */
export const pollTrends: PollTrend[] = [
  { month: "Oct 2025", congress: 26, aap: 32, bjp: 12 },
  { month: "Nov 2025", congress: 27, aap: 31, bjp: 13 },
  { month: "Dec 2025", congress: 28, aap: 30, bjp: 13 },
  { month: "Jan 2026", congress: 28, aap: 29, bjp: 14 },
  { month: "Feb 2026", congress: 29, aap: 28, bjp: 14 },
  { month: "Mar 2026", congress: 30, aap: 27, bjp: 14 },
  { month: "Apr 2026", congress: 29, aap: 28, bjp: 14 },
  { month: "May 2026", congress: 31, aap: 26, bjp: 13 },
];

/**
 * Viral Content Analysis
 */
export const viralContentData: ViralContent[] = [
  {
    type: "video",
    title: "Mann醉酒视频",
    sentiment: "Negative",
    viralityDriver: "Jat Sikh humiliation angle",
    impact: "High - damaged AAP's moral authority",
    platform: ["Twitter", "Facebook", "WhatsApp"],
  },
  {
    type: "governance",
    title: "Drug Raid Compilation",
    sentiment: "Negative",
    viralityDriver: "Gangsterism exposed",
    impact: "High in Malwa/Doaba",
    platform: ["YouTube", "WhatsApp"],
  },
  {
    type: "scandal",
    title: "Sand Mining Scam",
    sentiment: "Negative",
    viralityDriver: "CAG report linking Ministers",
    impact: "Moderate - urban voters",
    platform: ["Twitter", "Facebook"],
  },
];

/**
 * Trending Topics
 */
export const trendingTopics: TrendingTopic[] = [
  { rank: 1, topic: "Drug Crisis", sentiment: "Negative", partyAssociation: "AAP", velocity: "High", trajectory: "Rising" },
  { rank: 2, topic: "Murder Wave 2025", sentiment: "Negative", partyAssociation: "AAP", velocity: "High", trajectory: "Rising" },
  { rank: 3, topic: "Fiscal Crisis", sentiment: "Negative", partyAssociation: "Congress", velocity: "Medium", trajectory: "Rising" },
  { rank: 4, topic: "MSP Guarantee", sentiment: "Mixed", partyAssociation: "Congress", velocity: "Medium", trajectory: "Stable" },
  { rank: 5, topic: "BJP Growth", sentiment: "Mixed", partyAssociation: "BJP", velocity: "Medium", trajectory: "Rising" },
];

/**
 * Opinion Leaders
 */
export const opinionLeaders: OpinionLeader[] = [
  { name: "Navjot Singh Sidhu", party: "Congress", influenceSphere: "Malwa, Urban", publicSentiment: 65, trend: "Rising" },
  { name: "Bhagwant Mann", party: "AAP", influenceSphere: "Malwa", publicSentiment: 40, trend: "Declining" },
  { name: "Sukhbir Singh Badal", party: "SAD", influenceSphere: "Malwa", publicSentiment: 25, trend: "Declining" },
  { name: "Sanjay Tiwari", party: "Independent", influenceSphere: "Social Media", publicSentiment: 55, trend: "Rising", vulnerabilityIndex: 30 },
];

/**
 * Media Outlets
 */
export const mediaOutlets: MediaOutlet[] = [
  { name: "Ajit", language: "Punjabi", type: "Print", reach: "High", credibility: "High", politicalLean: "SAD leaning", website: "ajit.news" },
  { name: "Jagbani", language: "Punjabi", type: "Print", reach: "High", credibility: "High", politicalLean: "Neutral", website: "jagbani.punjab" },
  { name: "PTC News", language: "Punjabi", type: "TV", reach: "High", credibility: "Medium", politicalLean: "AAP leaning", website: "ptcnews.tv" },
  { name: "The Tribune", language: "English", type: "Print", reach: "Medium", credibility: "High", politicalLean: "Neutral" },
  { name: "Dainik Bhaskar", language: "Hindi", type: "Print", reach: "High", credibility: "Medium", politicalLean: "BJP leaning" },
  { name: "The Hindu", language: "English", type: "Print", reach: "Low", credibility: "High", politicalLean: "Neutral" },
];

/**
 * Media Strategy Priorities
 */
export const mediaStrategyPriorities: MediaStrategy[] = [
  { priority: "Critical", outlet: "Ajit", language: "Punjabi", reason: "Widest Punjabi print reach", targetAudience: "Rural, 35+" },
  { priority: "Critical", outlet: "Jagbani", language: "Punjabi", reason: "High credibility", targetAudience: "Urban, educated" },
  { priority: "High", outlet: "PTC News", language: "Punjabi", reason: "TV reach", targetAudience: "All segments" },
  { priority: "High", outlet: "The Tribune", language: "English", reason: "Credibility, urban elite", targetAudience: "Urban, NRI" },
];

/**
 * Crisis Response Protocols (Sentiment)
 */
export const sentimentCrisisProtocols: SentimentCrisisProtocol[] = [
  { severity: "High", responseWindow: "2 hours", escalationPath: ["Media Cell", "Spokesperson", "Campaign Committee"], spokesperson: "Punjab Congress Comms" },
  { severity: "Medium", responseWindow: "6 hours", escalationPath: ["State Unit", "Spokesperson"], spokesperson: "District Incharge" },
  { severity: "Low", responseWindow: "24 hours", escalationPath: ["Social Media Team"], spokesperson: "Social Media Cell" },
];

/**
 * Public Sentiment Summary
 */
export const publicSentimentSummary: PublicSentimentSummary = {
  overallMood: "Exhausted but searching for alternative",
  primaryConcerns: ["Drug crisis", "Unemployment", "Law & Order", "Economic distress"],
  voterExhaustion: 65,
  antiIncumbencyLevel: 58,
  alternativeSeeking: 72,
};

// ==========================================
// VOTER INTELLIGENCE DATA
// Derived from: research-P5/voter-enticement/ and research-P5/demography-derivation/
// ==========================================

/**
 * Punjab Demographics
 */
export const punjabDemographics: PunjabDemographics = {
  totalElectorate: 21500000,
  assemblySeats: 117,
  lokSabhaSeats: 13,
  voterTurnout2022: 75.6,
  genderRatio: "895:1000",
};

/**
 * Religious Composition
 */
export const religiousComposition: ReligiousComposition[] = [
  { community: "Sikh", populationPercent: 57.7, politicalSignificance: "Dominant community, 58% of assembly seats impacted" },
  { community: "Hindu", populationPercent: 38.5, politicalSignificance: "Urban Hindu consolidation by BJP" },
  { community: "Christian", populationPercent: 1.9, politicalSignificance: "Doaba presence" },
  { community: "Muslim", populationPercent: 1.6, politicalSignificance: "Malerkotla constituency" },
];

/**
 * Caste Demographics
 */
export const casteDemographics: CasteDemographics[] = [
  { casteCategory: "SC (Dalit)", populationPercent: 31.91, keySubgroups: ["Ravidassia", "Ad-Dharmi", "Balaki"], influentialSeats: 35 },
  { casteCategory: "OBC", populationPercent: 25.32, keySubgroups: ["Jat Sikh OBC", "Kumhar", "Passi"], influentialSeats: 25 },
  { casteCategory: "Jat Sikh", populationPercent: 21.5, keySubgroups: ["Sidhu-Brar", "Sandhu", "Gill", "Dhillon"], influentialSeats: 45 },
  { casteCategory: "General (Others)", populationPercent: 21.27, keySubgroups: ["Khatri", "Arora", "Brahmin", "Rajput"], influentialSeats: 12 },
];

/**
 * Regional Segments
 */
export const regionalSegments: RegionalSegment[] = [
  {
    region: "Malwa",
    seats: 69,
    percentOfAssembly: 58.97,
    characteristics: "Largest region; heart of Punjab; farmer suicides; drug crisis",
    dominantCaste: "Jat Sikh",
    politicalLean: "Swing - was AAP in 2022",
    keyIssues: ["Drugs", "Farmer debt", "Unemployment"],
    congressStrategy: "Regain Jat Sikh trust through economic messaging; dera management",
  },
  {
    region: "Majha",
    seats: 25,
    percentOfAssembly: 21.37,
    characteristics: "Border region; religious; SAD heartland historically",
    dominantCaste: "Jat Sikh (Sandhu)",
    politicalLean: "SAD/AAP mix",
    keyIssues: ["Border security", "Drugs", "Farmer issues"],
    congressStrategy: "Panthic vote consolidation; border area outreach",
  },
  {
    region: "Doaba",
    seats: 23,
    percentOfAssembly: 19.66,
    characteristics: "NRI belt; highest SC concentration; educational belt",
    dominantCaste: "SC (Dalit)",
    politicalLean: "AAP dominant",
    keyIssues: ["Unemployment", "NRI issues", "Dalit rights"],
    congressStrategy: "SC voter reconsolidation; NRI family networks",
  },
];

/**
 * Voter Personas
 */
export const voterPersonas: VoterPersona[] = [
  {
    type: "Jat Sikh Farmer",
    profile: "40-60 years; 5-10 acre landholding; male head of family",
    priorityIssues: ["MSP guarantee", "Crop insurance", "Drug crisis in villages"],
    votingTrigger: "Economic security; community honor",
    historicalAlignment: "SAD/Congress swing",
    sensitivity: "Clan/pride-based",
  },
  {
    type: "Urban Youth",
    profile: "18-35 years; educated; unemployed or underemployed",
    priorityIssues: ["Jobs", "Drugs", "Migration routes"],
    votingTrigger: "Employment opportunities; change from status quo",
    historicalAlignment: "AAP (2022)",
    sensitivity: "Future prospects",
  },
  {
    type: "SC Voter",
    profile: "25-60 years; rural or urban; agricultural laborer or small farmer",
    priorityIssues: ["Welfare schemes", "Caste dignity", "Reservation"],
    votingTrigger: "Welfare delivery; leader respect",
    historicalAlignment: "Congress traditionally, shifted to AAP",
    sensitivity: "Dignity and recognition",
  },
  {
    type: "NRI Family",
    profile: "Family with member abroad; connected via WhatsApp/visits",
    priorityIssues: ["NRI safety", "Punjab opportunities", "Drug crisis"],
    votingTrigger: "Image of Punjab; family influence on voters",
    historicalAlignment: "Variable",
    sensitivity: "Reputation of parties in diaspora",
  },
];

/**
 * Swing Voter Categories
 */
export const swingVoterCategories: SwingVoterCategory[] = [
  {
    group: "Disillusioned AAP Voters",
    sizeEstimate: "8-10% of electorate",
    keyIssues: ["Unemployment", "Drug crisis", "Crime"],
    swingPotential: "Very High",
    targetStrategy: "Economic message + change narrative",
  },
  {
    group: "Traditional SAD Voters (Non-BJP)",
    sizeEstimate: "5-7% of electorate",
    keyIssues: ["Farmers", "Sikh identity", "Land issues"],
    swingPotential: "High",
    targetStrategy: "Sikh pride + farmer welfare",
  },
  {
    group: "Congress 2017 Voters (Lost)",
    sizeEstimate: "10-12% of electorate",
    keyIssues: ["Change", "Performance", "Anti-incumbency"],
    swingPotential: "Very High",
    targetStrategy: "Regret narrative + new faces",
  },
];

/**
 * Booth Level Data
 */
export const boothLevelData: BoothLevelData = {
  totalBooths: 24739,
  votersPerBooth: "700-900",
  boothWorkersTarget: 15,
  pannaPramukhs: 5,
};

/**
 * Voter Contact Strategy
 */
export const voterContactStrategies: VoterContactStrategy[] = [
  { stage: "Phase 1: Awareness", timing: "Aug-Oct 2026", objective: "Name recognition", channels: ["Print", "Radio", "WhatsApp"], targetRate: "60% unaided recall" },
  { stage: "Phase 2: Persuasion", timing: "Nov-Jan 2027", objective: "Swing voter conversion", channels: ["D2D", "Rallies", "Micro-targeting"], targetRate: "40% swing voter shift" },
  { stage: "Phase 3: Mobilization", timing: "Feb-Apr 2027", objective: "Turnout guarantee", channels: ["Booth workers", "WhatsApp", "Phone banking"], targetRate: "85% voter turnout" },
];

/**
 * Congress Voter Outreach Priorities
 */
export const congressOutreachPriorities: VoterOutreachPriority[] = [
  { priority: 1, voterGroup: "Jat Sikh Farmers", size: "21%", strategy: "Debt relief + MSP + dignity", messaging: "Congress stands with Punjab's backbone" },
  { priority: 2, voterGroup: "SC Voters", size: "32%", strategy: "Welfare delivery + Dalit CM candidate", messaging: "Congress delivered; AAP failed" },
  { priority: 3, voterGroup: "Urban Middle Class", size: "15%", strategy: "Governance + anti-corruption", messaging: "Competent administration" },
  { priority: 4, voterGroup: "Youth (18-35)", size: "25%", strategy: "Jobs + skills + opportunities", messaging: "Future of Punjab" },
  { priority: 5, voterGroup: "NRI Families", size: "10%", strategy: "Digital outreach + Punjab pride", messaging: "Save Punjab from drugs" },
];

// ==========================================
// GOVERNANCE GAP DATA
// Derived from: research-P5/constituency-proliferation/governance-gaps/
// ==========================================

/**
 * Sector Gap Analysis
 */
export const sectorGapAnalysis: SectorGap[] = [
  {
    sector: "Law and Order",
    criticalMetric: "Murder rate",
    metricValue: "24 grenade attacks on police since Sept 2024",
    promise: "Safe Punjab",
    reality: "Murder wave 2025-26; businessman, kabaddi player, politicians attacked",
    evidence: ["FIR data", "Media reports", "DGP statements"],
    congressAttackLine: "AAP promised safety but delivered a gangster state",
    severity: "Critical",
    impactSeats: 40,
  },
  {
    sector: "Drug Menace",
    criticalMetric: "Drug availability index",
    metricValue: "Village surveys show continued availability",
    promise: "Drug-free Punjab in 1 year",
    reality: "13-15 year-olds dying; 8,344 FIRs filed; trade continues",
    evidence: ["Village surveys", "NCRB data", "Ground reports"],
    congressAttackLine: "AAP promised to end drugs in one year. Drugs are still free. Our children are not.",
    severity: "Critical",
    impactSeats: 55,
  },
  {
    sector: "Fiscal Crisis",
    criticalMetric: "State debt",
    metricValue: "Rs 4.17 lakh crore and rising",
    promise: "Aam Aadmi party - no freebies",
    reality: "Rs 20,000+ crore new loans; debt-to-GSDP >50%",
    evidence: ["CAG report", "RBI data", "Budget documents"],
    congressAttackLine: "AAP's free electricity and cash transfers are mortgaging our children's future",
    severity: "Critical",
    impactSeats: 30,
  },
  {
    sector: "Healthcare",
    criticalMetric: "Doctor-to-patient ratio",
    metricValue: "1:2,500 (below national avg)",
    promise: "World-class healthcare",
    reality: "Infrastructure claims vs actual delivery gap",
    evidence: ["NHSRC data", "Ground surveys"],
    congressAttackLine: "Mohalla clinics exist on paper. Real healthcare is collapsing.",
    severity: "High",
    impactSeats: 20,
  },
  {
    sector: "Education",
    criticalMetric: "Learning outcome index",
    metricValue: "Below national average",
    promise: "Best education system",
    reality: "122 schools upgraded but outcomes mixed",
    evidence: ["NAS data", "State reports"],
    congressAttackLine: "AAP announced schools but couldn't improve learning",
    severity: "High",
    impactSeats: 15,
  },
  {
    sector: "Employment",
    criticalMetric: "Youth unemployment",
    metricValue: "19.3% (Oct-Dec 2024 PLFS)",
    promise: "25 lakh jobs",
    reality: "~1.3 lakh jobs delivered (5.2%)",
    evidence: ["PLFS data", "NSSO surveys"],
    congressAttackLine: "25 lakh jobs promised. 1.3 lakh delivered. 94.8% missing - like our youth",
    severity: "Critical",
    impactSeats: 50,
  },
  {
    sector: "Internal Dissent",
    criticalMetric: "MLA rebellions",
    metricValue: "7 Rajya Sabha MPs defected",
    promise: "Party of stability",
    reality: "Mass exodus of elected representatives",
    evidence: ["Rajya Sabha records", "Media reports"],
    congressAttackLine: "Even AAP's own MPs don't trust AAP. Why should Punjab?",
    severity: "High",
    impactSeats: 25,
  },
];

/**
 * Failed Promise Cases
 */
export const failedPromiseCases: FailedPromiseCase[] = [
  {
    caseName: "25 Lakh Jobs Promise",
    promise: "25 lakh jobs in 5 years",
    timeline: "Promised March 2022; Delivery deadline 2027",
    reality: "~1.3 lakh jobs delivered (5.2%)",
    evidence: ["PLFS data", "Government claims audit"],
    congressLine: "Jobs ke 24 lakh kahan? 94% sohneya di duniya!",
  },
  {
    caseName: "Drug-Free Punjab",
    promise: "Eliminate drug menace in 1 year",
    timeline: "Promised March 2022; One-year deadline",
    reality: "Drugs freely available; 13-15 year-olds dying",
    evidence: ["Village surveys", "NCRB data"],
    congressLine: "Ek saal mein khatam kar dene wale drugs aaj bhi azad hain",
  },
  {
    caseName: "MSP for 22 Crops",
    promise: "MSP guarantee for 22 crops",
    timeline: "Promised 2022; Farmers still protesting",
    reality: "No operational MSP scheme for 22 crops",
    evidence: ["Farmer protests", "Govt admissions"],
    congressLine: "MSP ka haq, aaj tak behak",
  },
  {
    caseName: "Jan Lokpal",
    promise: "Jan Lokpal within 100 days",
    timeline: "Promised March 2022; Never introduced",
    reality: "Bill never tabled in Assembly",
    evidence: ["Assembly records", "Media reports"],
    congressLine: "Lokpal leke aaye the, Lokpal hi laa paaye",
  },
  {
    caseName: "Check Youth Immigration",
    promise: "Make Punjab worth staying",
    timeline: "Promised 2022",
    reality: "38% of deported illegal immigrants from Punjab",
    evidence: ["US Embassy data", "PLFS data"],
    congressLine: "Bacchon ko bahar bhejne waala Punjab kiske liye?",
  },
];

/**
 * Perception Metrics
 */
export const perceptionMetrics: PerceptionMetrics[] = [
  { firstImpressionTime: "7 seconds", voterBehaviorPrediction: "60% decide based on first impression", visualIdentityWeight: "40% of recall", nameRecognitionBoost: "Social proof multiplies impact 3x" },
];

/**
 * Narrative Strategies
 */
export const narrativeStrategies: NarrativeStrategy[] = [
  { type: "Contrast", description: "AAP promised X, delivered Y", example: "25 lakh jobs → 1.3 lakh delivered", effectiveness: "High" },
  { type: "Legacy", description: "Congress's historical connection to Punjab", example: "1977 freedom fight; 1984 justice", effectiveness: "Medium" },
  { type: "Youth", description: "Future-focused positive narrative", example: "Punjab of dreams vs drug-addicted state", effectiveness: "High" },
  { type: "Anti-Corruption", description: "Corruption under AAP rule", example: "Sand mining; ED cases; vigilance raids", effectiveness: "High" },
  { type: "Regional Balance", description: "Balanced development message", example: "Malwa, Majha, Doaba all matter", effectiveness: "Medium" },
];

/**
 * Congress Positioning
 */
export const congressPositioning: CongressPositioning = {
  positioningStatement: "Congress: The party that delivered 77 seats in 2017; the only alternative to AAP's failures",
  differentiators: [
    { aapNarrative: "We will deliver", congressCounterNarrative: "We have delivered before; AAP has not delivered anything" },
    { aapNarrative: "Change from Congress", congressCounterNarrative: "Change from AAP's gangster state to stable governance" },
    { aapNarrative: "Welfare schemes", congressCounterNarrative: "Sustainable welfare vs debt-fueled freebies" },
  ],
  targetVoterSegments: ["Jat Sikh farmers", "Congress 2017 voters", "SC communities", "Urban middle class", "Disillusioned AAP youth"],
};

/**
 * Image Restoration Strategies
 */
export const imageRestorationStrategies: ImageRestorationStrategy[] = [
  { strategy: "Corrective Action", whenToUse: "When we have done wrong and need to fix it", example: "1984 - Congress acknowledged mistakes through晚了 compensation and rehabilitation", effectiveness: "Medium" as unknown as "High" },
  { strategy: "Mortification", whenToUse: "When we need to publicly apologize and own the mistake", example: "When Ashok Tanwar's 1984 remarks caused backlash, quick condemnation helped", effectiveness: "Medium" as unknown as "High" },
  { strategy: "Reducing Offensiveness", whenToUse: "When we can't change the action but can frame it better", example: "Explain why some decisions were necessary given circumstances", effectiveness: "Low" as unknown as "High" },
  { strategy: "Denial", whenToUse: "When the accusation is false or exaggerated", example: "Reject false claims but don't over-defend", effectiveness: "Medium" as unknown as "High" },
  { strategy: "Evasion", whenToUse: "When we need to buy time to address an issue properly", example: "Acknowledge issue exists, commit to timeline without immediate action", effectiveness: "Low" as unknown as "High" },
];

/**
 * Crisis Response Protocols (Governance)
 */
export const crisisResponseProtocols: CrisisResponseProtocol[] = [
  { trigger: "Candidate scandal exposed", responseTime: "2 hours", severity: "Critical", protocol: "Suspend + investigate + substitute candidate" },
  { trigger: "Fake news attack", responseTime: "1 hour", severity: "High", protocol: "Fact-check + counter-narrative + legal notice" },
  { trigger: "Opposition attack on leader", responseTime: "3 hours", severity: "High", protocol: "Spokesperson rebuttal + leader statement + social media counter" },
  { trigger: " Booth-level violence", responseTime: "30 minutes", severity: "Critical", protocol: "EC complaint + security upgrade + legal action" },
];

/**
 * Perception Correction Decision Tree
 */
export const perceptionCorrectionSteps: PerceptionCorrectionStep[] = [
  { condition: "Voter says AAP did good job on X", action: "Provide data showing gap between claims and reality", responseTemplate: "AAP claims X but ground reality is Y. Here is the evidence..." },
  { condition: "Voter says Congress has no chance", action: "Share internal data + momentum indicators", responseTemplate: "Every survey shows Congress closing the gap. The wave is turning..." },
  { condition: "Voter is undecided between AAP and Congress", action: "Focus on top 3 issues where AAP failed", responseTemplate: "On drugs, jobs, and safety - AAP promised but did not deliver. Congress will..." },
  { condition: "Voter mentions candidate quality issue", action: "Highlight candidate selection criteria + track record", responseTemplate: "Congress candidates are selected through democratic process with 3 surveys..." },
  { condition: "Voter expresses anger at dynasty politics", action: "Acknowledge + emphasize new leadership", responseTemplate: "We understand frustration. That is why Congress is promoting new faces like..." },
];

/**
 * Congress Party Short-Term Goals (100 Days)
 */
export const congress100DayGoals = [
  "Announce caste census methodology",
  "Roll out MSP guarantee legal framework draft",
  "Launch corruption investigation into sand mining",
  "Announce youth employment fund",
  "Publish government performance scorecard vs AAP promises",
];
