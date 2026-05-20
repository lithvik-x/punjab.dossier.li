// Reporting Framework Data Structures for Punjab Congress 2027 Election Dashboard
// Derived from: MP10-predictive-outcomes/reporting/daily-weekly-reporting.md

import type {
  ReportType,
  ReportAttribute,
  ReportGenerationSchedule,
  ExportFormat,
  DistributionEntry,
  ProductionCalendarEntry,
  ReportProductionWorkflow,
  QualityChecklist,
  DIBReport,
  WarRoomFlash,
  DailyGroundReport,
  DailyMediaDigest,
  WeeklyIntelligenceSummary,
  WeeklyConstituencyPulse,
  WeeklyCompetitorTracker,
  WeeklyCampaignPerformance,
  AlertType,
  AlertStatus,
  SeverityLevel,
  TrafficLight,
  ACClassification,
  Region,
} from "@/types/reporting-framework";

// ==========================================
// REPORT ATTRIBUTES
// ==========================================

export const REPORT_ATTRIBUTES: Record<ReportType, ReportAttribute> = {
  DIB: {
    format: "1-page consolidated brief",
    deliveryTime: "6:00 AM",
    audience: ["Campaign Director", "CIO", "PPCC President"],
    channel: "Secure messaging (Signal/WhatsApp E2E encrypted) + encrypted email PDF",
  },
  WarRoomFlash: {
    format: "Real-time alert (1-2 paragraphs per alert)",
    deliveryTime: "As triggered (no fixed schedule)",
    audience: ["War Room Operations Lead", "Campaign Director", "Department Heads"],
    channel: "Push notification (mobile app) + secure messaging",
  },
  DailyGroundReport: {
    format: "Structured report (2-3 pages, constituency-wise data tables + narrative)",
    deliveryTime: "8:00 PM",
    audience: ["Ground Ops Coordinator", "Campaign Director", "Regional Coordinators"],
    channel: "Dashboard upload (DASH-001) + email PDF",
  },
  DailyMediaDigest: {
    format: "Structured summary (2 pages)",
    deliveryTime: "10:00 AM",
    audience: ["Media Monitor", "Campaign Director", "Communications Head", "PR Lead"],
    channel: "Email PDF + dashboard upload",
  },
  WIS: {
    format: "10-15 pages, comprehensive analysis document",
    deliveryTime: "Monday 8:00 AM (production starts Saturday, draft by Sunday 8:00 PM)",
    audience: ["Campaign Director", "CIO", "PPCC President", "Core Strategy Team"],
    channel: "Encrypted email PDF + dashboard (interactive link) + printed copy for PPCC President",
  },
  WeeklyConstituencyPulse: {
    format: "Tiered: Tier 1 ACs — 2 pages each; Tier 2 ACs — 1 page each; Tier 3 ACs — highlight table only",
    deliveryTime: "Wednesday 10:00 AM",
    audience: ["Regional Coordinators", "Constituency In-charges", "Campaign Director"],
    channel: "Dashboard upload + email PDF (regional packets)",
  },
  WeeklyCompetitorTracker: {
    format: "3-4 pages, structured per competitor",
    deliveryTime: "Thursday 10:00 AM",
    audience: ["Campaign Director", "CIO", "Strategy Team", "Communications Head"],
    channel: "Encrypted email PDF + dashboard",
  },
  WeeklyCampaignPerformance: {
    format: "KPI dashboard with trend vs target (visual-heavy, 3-4 pages)",
    deliveryTime: "Friday 12:00 PM (before weekend strategy session)",
    audience: ["Campaign Director", "Department Heads"],
    channel: "Dashboard interactive link + email PDF",
  },
};

// ==========================================
// AUTO-GENERATION SCHEDULE
// ==========================================

export const REPORT_GENERATION_SCHEDULE: ReportGenerationSchedule[] = [
  {
    report: "DIB",
    autoGenerationTime: "5:00 AM (auto-populate)",
    humanReviewRequired: true,
    reviewDuration: "30 min analyst review",
  },
  {
    report: "WarRoomFlash",
    autoGenerationTime: "Real-time (triggered)",
    humanReviewRequired: true,
    reviewDuration: "10 min validation",
  },
  {
    report: "DailyGroundReport",
    autoGenerationTime: "7:00 PM (auto-compile)",
    humanReviewRequired: true,
    reviewDuration: "30 min coordinator review",
  },
  {
    report: "DailyMediaDigest",
    autoGenerationTime: "8:30 AM (auto-compile)",
    humanReviewRequired: true,
    reviewDuration: "30 min media monitor review",
  },
  {
    report: "WIS",
    autoGenerationTime: "Saturday 6:00 PM (first draft)",
    humanReviewRequired: true,
    reviewDuration: "48-hour multi-review cycle",
  },
  {
    report: "WeeklyConstituencyPulse",
    autoGenerationTime: "Tuesday 4:00 PM (auto-compile)",
    humanReviewRequired: true,
    reviewDuration: "2-hour regional review",
  },
  {
    report: "WeeklyCompetitorTracker",
    autoGenerationTime: "Wednesday 6:00 PM (first draft)",
    humanReviewRequired: true,
    reviewDuration: "16-hour analyst review",
  },
  {
    report: "WeeklyCampaignPerformance",
    autoGenerationTime: "Friday 8:00 AM (auto-generate)",
    humanReviewRequired: true,
    reviewDuration: "2-hour data head review",
  },
];

// ==========================================
// EXPORT FORMATS
// ==========================================

export const EXPORT_FORMATS: ExportFormat[] = [
  {
    format: "PDF",
    reports: ["DIB", "WIS", "DailyGroundReport", "DailyMediaDigest", "WeeklyCompetitorTracker", "WeeklyCampaignPerformance"],
    useCase: "DIB, WIS, all reports for leadership distribution",
  },
  {
    format: "Dashboard",
    reports: ["WeeklyCampaignPerformance", "WeeklyConstituencyPulse"],
    useCase: "Weekly Campaign Performance, Constituency Pulse",
  },
  {
    format: "Signal",
    reports: ["WarRoomFlash", "DIB"],
    useCase: "War Room Flash alerts, DIB",
  },
  {
    format: "Email",
    reports: ["DIB", "DailyGroundReport", "DailyMediaDigest", "WIS", "WeeklyConstituencyPulse", "WeeklyCompetitorTracker", "WeeklyCampaignPerformance"],
    useCase: "All reports to distribution lists",
  },
  {
    format: "PowerPoint",
    reports: ["WIS"],
    useCase: "WIS executive summary for leadership meetings",
  },
];

// ==========================================
// DISTRIBUTION MATRIX
// ==========================================

export const DISTRIBUTION_MATRIX: DistributionEntry[] = [
  {
    report: "DIB",
    campaignDirector: true,
    cio: true,
    ppccPresident: true,
    strategyTeam: false,
    deptHeads: false,
    regionalCoords: false,
    constituencyIncharges: false,
  },
  {
    report: "WarRoomFlash",
    campaignDirector: "CRITICAL",
    cio: "HIGH+",
    ppccPresident: false,
    strategyTeam: false,
    deptHeads: "relevant",
    regionalCoords: false,
    constituencyIncharges: false,
  },
  {
    report: "DailyGroundReport",
    campaignDirector: true,
    cio: false,
    ppccPresident: false,
    strategyTeam: false,
    deptHeads: "Ground Ops",
    regionalCoords: true,
    constituencyIncharges: "own AC",
  },
  {
    report: "DailyMediaDigest",
    campaignDirector: true,
    cio: false,
    ppccPresident: false,
    strategyTeam: true,
    deptHeads: "Media, PR",
    regionalCoords: false,
    constituencyIncharges: false,
  },
  {
    report: "WIS",
    campaignDirector: true,
    cio: true,
    ppccPresident: "printed",
    strategyTeam: true,
    deptHeads: true,
    regionalCoords: true,
    constituencyIncharges: false,
  },
  {
    report: "WeeklyConstituencyPulse",
    campaignDirector: true,
    cio: false,
    ppccPresident: false,
    strategyTeam: false,
    deptHeads: true,
    regionalCoords: true,
    constituencyIncharges: "own AC",
  },
  {
    report: "WeeklyCompetitorTracker",
    campaignDirector: true,
    cio: true,
    ppccPresident: false,
    strategyTeam: true,
    deptHeads: "Media, Comms",
    regionalCoords: true,
    constituencyIncharges: false,
  },
  {
    report: "WeeklyCampaignPerformance",
    campaignDirector: true,
    cio: false,
    ppccPresident: false,
    strategyTeam: true,
    deptHeads: "all",
    regionalCoords: false,
    constituencyIncharges: false,
  },
];

// ==========================================
// PRODUCTION CALENDAR
// ==========================================

export const PRODUCTION_CALENDAR: ProductionCalendarEntry[] = [
  { time: "6:00 AM", monday: "DIB", tuesday: "DIB", wednesday: "DIB", thursday: "DIB", friday: "DIB", saturday: "DIB", sunday: "DIB" },
  { time: "8:00 AM", monday: "WIS delivered", tuesday: null, wednesday: null, thursday: null, friday: null, saturday: "WIS draft", sunday: "WIS review" },
  { time: "10:00 AM", monday: "Media Digest", tuesday: "Media Digest", wednesday: "Constituency Pulse", thursday: "Competitor Tracker", friday: "Campaign Perf.", saturday: null, sunday: null },
  { time: "8:00 PM", monday: "Ground Report", tuesday: "Ground Report", wednesday: "Ground Report", thursday: "Ground Report", friday: "Ground Report", saturday: null, sunday: null },
  { time: "Real-time", monday: "War Room Flash", tuesday: "War Room Flash", wednesday: "War Room Flash", thursday: "War Room Flash", friday: "War Room Flash", saturday: "War Room Flash", sunday: "War Room Flash" },
];

// ==========================================
// PRODUCTION WORKFLOWS
// ==========================================

export const PRODUCTION_WORKFLOWS: Record<ReportType, ReportProductionWorkflow> = {
  DIB: {
    report: "DIB",
    steps: [
      { step: 1, time: "5:00 AM", action: "Automated pull from database templates (DASH-002)", responsible: "System" },
      { step: 2, time: "5:15 AM", action: "Human analyst reviews and ranks top 5 items", responsible: "Analyst" },
      { step: 3, time: "5:30 AM", action: "Cross-check with ground ops coordinator for overnight incidents", responsible: "Ground Ops Coordinator" },
      { step: 4, time: "5:45 AM", action: "Campaign Director review (verbal or annotated)", responsible: "Campaign Director" },
      { step: 5, time: "6:00 AM", action: "Distributed", responsible: "War Room Operations Lead" },
    ],
  },
  WarRoomFlash: {
    report: "WarRoomFlash",
    steps: [
      { step: 1, time: "As triggered", action: "Automated trigger fires from monitoring system", responsible: "System" },
      { step: 2, time: "+10 min", action: "Duty analyst validates (eliminates false positives)", responsible: "War Room Duty Analyst" },
      { step: 3, time: "+15 min", action: "CRITICAL severity escalates to Campaign Director", responsible: "Operations Lead" },
      { step: 4, time: "Ongoing", action: "Response action logged", responsible: "Responsible Team" },
      { step: 5, time: "Resolved", action: "Resolved alerts feed into next DIB", responsible: "War Room Operations Lead" },
    ],
  },
  DailyGroundReport: {
    report: "DailyGroundReport",
    steps: [
      { step: 1, time: "Throughout day", action: "Volunteers upload data via mobile app", responsible: "Volunteers" },
      { step: 2, time: "6:00 PM", action: "Constituency coordinators submit end-of-day summaries", responsible: "Constituency Coordinators" },
      { step: 3, time: "7:00 PM", action: "Data Entry team compiles into template", responsible: "Data Entry Team" },
      { step: 4, time: "7:30 PM", action: "Ground Ops Coordinator reviews and adds narrative", responsible: "Ground Ops Coordinator" },
      { step: 5, time: "8:00 PM", action: "Uploaded to dashboard and distributed", responsible: "Ground Ops Coordinator" },
    ],
  },
  DailyMediaDigest: {
    report: "DailyMediaDigest",
    steps: [
      { step: 1, time: "6:00 AM", action: "Overnight media scan complete", responsible: "Media Monitor" },
      { step: 2, time: "7:30 AM", action: "Morning newspaper review", responsible: "Media Monitor" },
      { step: 3, time: "8:30 AM", action: "Social media overnight data compiled", responsible: "Digital Lead" },
      { step: 4, time: "9:00 AM", action: "Media Monitor drafts digest", responsible: "Media Monitor" },
      { step: 5, time: "9:30 AM", action: "PR Lead adds media opportunities", responsible: "PR Lead" },
      { step: 6, time: "10:00 AM", action: "Distributed", responsible: "Media Monitor" },
    ],
  },
  WIS: {
    report: "WIS",
    steps: [
      { step: 1, time: "Saturday", action: "Data compilation begins, daily reports aggregated, survey data integrated", responsible: "Data & Analytics Head" },
      { step: 2, time: "Sunday 2:00 PM", action: "First draft complete", responsible: "Data & Analytics Head" },
      { step: 3, time: "Sunday 4:00 PM", action: "Section leads review their sections", responsible: "Section Leads" },
      { step: 4, time: "Sunday 6:00 PM", action: "Data & Analytics Head integrates feedback and finalizes", responsible: "Data & Analytics Head" },
      { step: 5, time: "Sunday 8:00 PM", action: "Campaign Director reviews (annotated feedback)", responsible: "Campaign Director" },
      { step: 6, time: "Monday 6:00 AM", action: "Final revisions incorporated", responsible: "Data & Analytics Head" },
      { step: 7, time: "Monday 8:00 AM", action: "Distributed", responsible: "Data & Analytics Head" },
    ],
  },
  WeeklyConstituencyPulse: {
    report: "WeeklyConstituencyPulse",
    steps: [
      { step: 1, time: "Monday-Tuesday", action: "Constituency in-charges submit AC-level data", responsible: "Constituency In-charges" },
      { step: 2, time: "Tuesday 6:00 PM", action: "Regional coordinators compile tiered reports", responsible: "Regional Coordinators" },
      { step: 3, time: "Wednesday 8:00 AM", action: "Data team cross-checks against survey data", responsible: "Data Team" },
      { step: 4, time: "Wednesday 10:00 AM", action: "Distributed by regional packets", responsible: "Regional Coordinators" },
    ],
  },
  WeeklyCompetitorTracker: {
    report: "WeeklyCompetitorTracker",
    steps: [
      { step: 1, time: "Wednesday", action: "Data compilation from all intelligence sources", responsible: "Competitor Intelligence Analyst" },
      { step: 2, time: "Wednesday 6:00 PM", action: "First draft complete", responsible: "Competitor Intelligence Analyst" },
      { step: 3, time: "Wednesday 10:00 PM", action: "Media Monitor reviews media strategy section", responsible: "Media Monitor" },
      { step: 4, time: "Thursday 6:00 AM", action: "Ground Ops reviews ground activity section", responsible: "Ground Ops" },
      { step: 5, time: "Thursday 10:00 AM", action: "Distributed", responsible: "Competitor Intelligence Analyst" },
    ],
  },
  WeeklyCampaignPerformance: {
    report: "WeeklyCampaignPerformance",
    steps: [
      { step: 1, time: "Thursday", action: "Department heads submit weekly metrics", responsible: "Department Heads" },
      { step: 2, time: "Friday 8:00 AM", action: "Data team compiles dashboard visuals", responsible: "Data Team" },
      { step: 3, time: "Friday 10:00 AM", action: "Data & Analytics Head reviews traffic light classifications", responsible: "Data & Analytics Head" },
      { step: 4, time: "Friday 12:00 PM", action: "Distributed for weekend strategy session", responsible: "Data & Analytics Head" },
    ],
  },
};

// ==========================================
// QUALITY CHECKLISTS
// ==========================================

export const QUALITY_CHECKLISTS: Record<ReportType, QualityChecklist> = {
  DIB: {
    report: "DIB",
    checks: [
      "Top 5 items are genuinely ranked by impact (not chronological)",
      "Every recommendation has an owner and deadline",
      "No factual errors",
      "Red-flag KPIs are surfaced prominently",
      "Total length does not exceed 1 page",
    ],
  },
  WarRoomFlash: {
    report: "WarRoomFlash",
    checks: [
      "Alert severity is accurately classified",
      "No duplicate alerts within 30-minute window for same event",
      "Impact assessment is specific to Punjab campaign (not generic)",
      "Recommended response is actionable within 1 hour",
    ],
  },
  DailyGroundReport: {
    report: "DailyGroundReport",
    checks: [
      "D2D coverage numbers match volunteer app data (cross-verified)",
      "Every underperforming AC has a reason noted",
      "Local issues are actionable (not vague complaints)",
      "Competitor activity is observation-based (not speculation)",
    ],
  },
  DailyMediaDigest: {
    report: "DailyMediaDigest",
    checks: [
      "SOV percentages sum to approximately 100% across tracked parties",
      "Every top story has tonality assessed",
      "Trending topics are Punjab-specific (not national trends)",
      "Media opportunities are specific and time-bound",
    ],
  },
  WIS: {
    report: "WIS",
    checks: [
      "Executive summary is self-contained (readable without rest of document)",
      "All data points are sourced and dated",
      "Seat projection includes confidence interval",
      "Every recommendation is specific and actionable",
      "No section exceeds its page allocation",
      "Charts/visuals are legible in print format",
    ],
  },
  WeeklyConstituencyPulse: {
    report: "WeeklyConstituencyPulse",
    checks: [
      "Tier 1 ACs have full 2-page assessment",
      "Every classification change has a documented reason",
      "Caste/community data is sourced (not estimated)",
      "Recommended actions are specific to the AC (not generic)",
    ],
  },
  WeeklyCompetitorTracker: {
    report: "WeeklyCompetitorTracker",
    checks: [
      "Every competitor action is dated and sourced",
      "Threat level change is justified with evidence",
      "No speculative claims without VERIFICATION_NEEDED tag",
      "Strategic implications are actionable (not observational)",
    ],
  },
  WeeklyCampaignPerformance: {
    report: "WeeklyCampaignPerformance",
    checks: [
      "All KPIs have current value AND target for comparison",
      "Traffic light classifications match KPIF-003 thresholds",
      "Trend arrows accurately reflect direction (minimum 2 data points)",
      "Every YELLOW/RED KPI has an associated action item with owner",
    ],
  },
};

// ==========================================
// SAMPLE REPORT DATA
// ==========================================

export const SAMPLE_DIB_REPORT: DIBReport = {
  type: "DIB",
  date: "2026-05-19",
  top5Items: [
    {
      item: "AAP announces new farm loan waiver scheme - potential 3-point sentiment shift",
      severity: "HIGH",
      actionRequired: true,
    },
    {
      item: "Congress volunteer activation down 12% in Malwa region",
      severity: "HIGH",
      actionRequired: true,
    },
    {
      item: "SAD-BJP alliance talks rekindled according to sources",
      severity: "MED",
      actionRequired: true,
    },
    {
      item: "Positive media coverage on drug eradication efforts",
      severity: "LOW",
      actionRequired: false,
    },
    {
      item: "Ground reports indicate voter fatigue in Doaba",
      severity: "MED",
      actionRequired: true,
    },
  ],
  keyDevelopmentsOvernight: [
    {
      category: "Political Landscape",
      description: "BJP state unit chief signals open to SAD reconciliation ahead of elections",
    },
    {
      category: "Competitor Activity",
      description: "AAP launches 'Kheti' app targeting farmer voters with subsidy information",
    },
    {
      category: "Media Environment",
      description: "3 major Punjab newspapers carried positive Congress stories on infrastructure",
    },
  ],
  alertsFlags: [
    {
      type: "RED-FLAG KPI",
      description: "D2D coverage in 3 ACs fell below 40% this week",
      source: "KPIF-003 Dashboard",
    },
    {
      type: "Sentiment Anomaly",
      description: "Negative sentiment spike on Twitter regarding candidate ticket distribution",
      source: "Social Sentiment Engine",
    },
    {
      type: "Ground Incident",
      description: "Minor altercation reported at Ferozpur rally site",
      source: "Ground Incident Hotline",
    },
  ],
  recommendedActions: [
    {
      action: "Launch rapid response on AAP farm loan waiver claims - fact-check and expose gaps",
      owner: "Communications Head",
      deadline: "2:00 PM",
    },
    {
      action: "Emergency volunteer recruitment drive in Malwa region",
      owner: "Ground Ops Coordinator",
      deadline: "Wednesday 6:00 PM",
    },
    {
      action: "Schedule meeting with SAD dissidents who are open to Congress alliance",
      owner: "Campaign Director",
      deadline: "Thursday",
    },
  ],
  todaysFocus: [
    {
      category: "Scheduled Events",
      description: "CM Face rally in Bathinda at 4:00 PM, expected turnout 15,000+",
    },
    {
      category: "Anticipated Competitor Moves",
      description: "AAP likely to counter-program with free power announcement",
    },
  ],
};

export const SAMPLE_WAR_ROOM_FLASH: WarRoomFlash = {
  type: "WarRoomFlash",
  timestamp: "2026-05-19T14:32:00",
  trigger: "Competitor Move",
  severity: "HIGH",
  location: "Statewide",
  summary: "AAP has announced expansion of their 'Yojana' dole scheme to include students and unemployed youth, potentially affecting Congress's outreach to these demographics.",
  impactAssessment: "High risk of shifting young voter sentiment. This directly counter-programs Congress's employment messaging. May affect up to 23 constituencies with high youth voter concentration.",
  recommendedResponse: "Rapid response team to prepare fact-check on scheme sustainability and funding source. Social media counter-narrative on 'short-term sops vs long-term jobs'.",
  owner: "Communications Head + Digital Lead",
  status: "RESPONDING",
};

export const SAMPLE_DAILY_GROUND_REPORT: DailyGroundReport = {
  type: "DailyGroundReport",
  date: "2026-05-18",
  d2dCoverage: {
    acsVisitedToday: 67,
    totalACs: 117,
    cumulativeCoveragePercent: 57,
    phaseTargetPercent: 65,
    householdsContacted: 892340,
    voterInteractionsLogged: 1245678,
  },
  volunteerActivity: {
    activeVolunteersToday: 18234,
    newRecruitments: 456,
    attendanceAtEventsRallies: 23456,
    topPerformingConstituencies: ["Bathinda Rural", "Moga", "Sangrur", "Ludhiana East", "Jalandhar North"],
    underperformingConstituencies: ["Ferozpur", "Muktsar", "Pathankot", "Hoshiarpur", "Nawanshahr"],
  },
  localIssues: [
    { acName: "Ferozpur", issue: "Border area security concerns affecting voter movement", severity: "H", status: "Escalated" },
    { acName: "Moga", issue: "Agricultural land dispute causing tension between Jat Sikh farmers", severity: "M", status: "Reported" },
    { acName: "Sangrur", issue: "Stubble burning compensation not reaching farmers", severity: "M", status: "Reported" },
    { acName: "Pathankot", issue: "Urban voters complaining about traffic and parking issues", severity: "L", status: "Reported" },
    { acName: "Ludhiana", issue: "Industrial unemployment causing unrest among factory workers", severity: "H", status: "Escalated" },
  ],
  competitorGroundActivity: {
    AAP: "Visible booth-level presence in Malwa. Door-to-door 'survey' campaigns in 45+ ACs. Social media rapid response teams active.",
    SAD: "Quiet ground activity. Focus on intra-party consolidation after leadership dispute. 3 factional leaders met in Amritsar.",
    BJP: "Limited ground activity except in urban centers. Major push on social media targeting Hindu voters with temple renovation narrative.",
  },
  resourceStatus: {
    materialDistribution: "85% complete - pamphlets delivered to 99 ACs, banner distribution ongoing in Malwa",
    vehicleLogistics: "Fleet utilization at 72% - 45 vehicles available for surge deployment",
    cashflowIssues: "No - Fund transfer of Rs 2.5 Cr received from Central Election Committee",
  },
};

export const SAMPLE_DAILY_MEDIA_DIGEST: DailyMediaDigest = {
  type: "DailyMediaDigest",
  date: "2026-05-19",
  topStories: [
    { story: "Congress's 5-year drug eradication guarantee gains traction in rural Punjab", outlet: "The Tribune", sentiment: "POS", reach: "2.3L" },
    { story: "AAP's new scheme announcement dominates news cycle", outlet: "Dainik Bhaskar", sentiment: "NEU", reach: "4.1L" },
    { story: "SAD-BJP reunion speculation fills opinion columns", outlet: "Indian Express", sentiment: "NEU", reach: "1.8L" },
  ],
  congressCoverage: {
    totalMentions: 847,
    shareOfVoice: { congress: 32, AAP: 41, SAD: 14, BJP: 13 },
    tonalitySplit: { positive: 38, neutral: 42, negative: 20 },
    keyNarrativeFrames: ["Drug eradication", "Youth employment", "Farmer welfare", "Women empowerment"],
  },
  competitorCoverage: {
    AAP: { stories: "124", tonality: "Balanced (52% neutral)" },
    SAD: { stories: "67", tonality: "Slightly negative (48% neutral, 31% negative)" },
    BJP: { stories: "89", tonality: "Slightly positive (45% neutral, 35% positive)" },
  },
  trendingTopics: [
    { hashtag: "#PunjabElections2027", sentiment: "Positive for Congress", viralContentAlert: "Video of CM rally in Bathinda reached 2.5L views" },
    { hashtag: "#DrugsMuktPunjab", sentiment: "Strongly positive for Congress" },
    { hashtag: "#AAPJobsPromise", sentiment: "Negative - users pointing to unfulfilled promises" },
  ],
  mediaOpportunities: [
    { type: "Story Pitch", description: "Expose AAP's unfulfilled 1 lakh jobs promise with ground data", timeBound: "By Wednesday" },
    { type: "Reactive Opportunity", description: "Counter AAP's dole scheme announcement with Congress's skill-development program data", timeBound: "Within 24 hours" },
  ],
};

export const SAMPLE_WEEKLY_INTELLIGENCE_SUMMARY: WeeklyIntelligenceSummary = {
  type: "WIS",
  weekNumber: 20,
  dateRange: "May 12-18, 2026",
  executiveSummary: {
    strategicAssessment: [
      "Congress momentum building in Malwa but slipping in Doaba",
      "AAP's welfare scheme announcements creating short-term sentiment spikes",
      "SAD-BJP reunion possibility increasing uncertainty in competitive seats",
    ],
    kpiTrafficLightSnapshot: [
      { kpi: "Win Probability", status: "YELLOW", currentValue: "48%", target: "50%+" },
      { kpi: "D2D Coverage", status: "GREEN", currentValue: "57%", target: "65%" },
      { kpi: "Volunteer Activation", status: "YELLOW", currentValue: "62%", target: "70%" },
      { kpi: "Media SOV", status: "GREEN", currentValue: "32%", target: "30%" },
    ],
    criticalDecisions: [
      { decision: "Approve additional Rs 50L for Malwa volunteer surge", outcomes: "Expected +8% activation rate" },
    ],
    keyRisksAndOpportunities: [
      "Risk: SAD-BJP reunion could shift 8-12 seats to BJP",
      "Opportunity: AAP's broken promises creating anti-incumbency",
    ],
  },
  sections: {
    politicalLandscape: {
      overallAssessment: "Multi-cornered contest dynamics intensifying as AAP consolidates urban votes",
      antiIncumbencyTrend: "Moderate anti-incumbency against AAP visible in SC-dominated seats",
      allianceCoalitionDynamics: "SAD-BJP reunion talks at critical stage - outcome to be determined by May 25",
      byElectionImpact: "No pending by-elections",
    },
    voteShareProjection: {
      statewideTrend: 2.3,
      regionalBreakdown: [
        { region: "Malwa", voteShare: 28.5, trend: "up" },
        { region: "Majha", voteShare: 24.2, trend: "stable" },
        { region: "Doaba", voteShare: 19.8, trend: "down" },
      ],
      seatProjectionWithConfidence: { medianSeats: 54, confidenceInterval: "±8", seatRange: "46-62" },
      acClassificationChanges: [
        { acName: "Bathinda Rural", previousClassification: "Toss-Up", newClassification: "Leaning-Congress", reason: "Strong rally response, volunteer surge" },
        { acName: "Dera Baba Nanak", previousClassification: "Leaning-Congress", newClassification: "Toss-Up", reason: "AAP candidate announcement with high local profile" },
      ],
      winProbabilityIndexMovement: { previousValue: 45, currentValue: 48, direction: "↑" },
    },
    competitorIntelligence: {
      AAP: {
        keyActions: ["Launched student dole scheme", "Opened 50 new party offices", "High-profile defection attempts"],
        mediaStrategy: "Positive narrative focus on governance achievements, avoiding drug issue",
        groundActivityAssessment: "Strong booth-level presence in 69 Malwa ACs",
        vulnerabilityAssessment: "Unfulfilled promises creating anti-incumbency in urban seats",
        threatLevel: "HIGH",
        threatDirection: "→",
      },
      SAD: {
        keyActions: ["Leadership meetings", "Factional reconciliation efforts", "Silent worker mobilization"],
        mediaStrategy: "Low profile, avoiding media",
        groundActivityAssessment: "Weak ground game except in traditional strongholds",
        vulnerabilityAssessment: "Internal divisions weakening traditional vote bank",
        threatLevel: "MEDIUM",
        threatDirection: "↓",
      },
      BJP: {
        keyActions: ["Urban outreach", "Hindu card played via temple renovations", "Social media push"],
        mediaStrategy: "National narrative alignment, local issues secondary",
        groundActivityAssessment: "Limited except in 8-10 urban seats",
        vulnerabilityAssessment: "Solo fight without SAD damaging in Malwa",
        threatLevel: "MEDIUM",
        threatDirection: "→",
      },
      BSP: {
        keyActions: ["SC voter mobilization meetings", "Alliance feelers to Congress"],
        mediaStrategy: "Low visibility campaign",
        groundActivityAssessment: "Limited ground presence but stable SC vote",
        vulnerabilityAssessment: "Resource constraints limiting expansion",
        threatLevel: "LOW",
        threatDirection: "→",
      },
      competitiveDynamics: {
        allianceMovements: "SAD-BJP reunion talks at advanced stage, may be announced by May 25",
        voteSplittingScenarios: "3-way contests in 40+ seats if SAD-BJP separate",
        narrativeBattleground: "Drugs vs Employment as top voter issues",
      },
      strategicImplications: [
        {
          implication: "SAD-BJP reunion would complicate Congress's path to majority",
          recommendedCounterMoves: ["Approach SAD dissidents", "Target Jat Sikh votes directly"],
          defensiveActions: ["Strengthen local candidate profiles in 15 swing seats"],
          opportunityWindows: ["SAD internal conflict creates opportunity for swing voters"],
        },
      ],
    },
    campaignPerformance: {
      kpiDashboard: [
        { name: "Win Probability", currentValue: 48, target: 50, gap: -2, trafficLight: "YELLOW", trendArrow: "↑" },
        { name: "D2D Coverage", currentValue: 57, target: 65, gap: -8, trafficLight: "GREEN", trendArrow: "↑" },
        { name: "Volunteer Activation", currentValue: 62, target: 70, gap: -8, trafficLight: "YELLOW", trendArrow: "↓" },
        { name: "Media SOV", currentValue: 32, target: 30, gap: 2, trafficLight: "GREEN", trendArrow: "↑" },
      ],
      d2dCoverageProgress: { Malwa: 61, Majha: 54, Doaba: 48 },
      eventRallyImpact: "High-impact rallies in Bathinda (18,000 attendance) and Moga (12,000) generated positive social media buzz",
      volunteerActivation: {
        totalRegistered: 29400,
        activeToday: 18234,
        newRecruitments: 1824,
        activationRate: 62,
      },
      fundraisingVsTarget: { raised: 84500000, target: 100000000, percentComplete: 84.5 },
      digitalEngagementMetrics: {
        reach: 1245000,
        engagementRate: 4.8,
        topContent: "CM rally video - 2.5L views",
      },
    },
    mediaNarrative: {
      shareOfVoiceWeeklyTrend: [
        { party: "Congress", mondayPercent: 30, fridayPercent: 32, trend: "↑" },
        { party: "AAP", mondayPercent: 43, fridayPercent: 41, trend: "↓" },
        { party: "SAD", mondayPercent: 15, fridayPercent: 14, trend: "↓" },
        { party: "BJP", mondayPercent: 12, fridayPercent: 13, trend: "↑" },
      ],
      narrativePenetrationAssessment: "Drug eradication narrative gaining traction in 34 ACs",
      mediaCrisisIncidentsSummary: "1 minor issue - candidate's old statement viral but handled within 4 hours",
      socialMediaPerformance: {
        totalFollowers: 2456789,
        engagementRate: 4.8,
        topHashtags: ["#DrugsMuktPunjab", "#CongressForPunjab", "#YouthJobsNow"],
      },
    },
    groundIntelligence: {
      keyLocalIssues: [
        { issue: "Drugs in rural Malwa", acsAffected: 45, trend: "increasing" },
        { issue: "Unemployment among youth", acsAffected: 67, trend: "stable" },
        { issue: "Farmer debt relief", acsAffected: 23, trend: "decreasing" },
      ],
      casteCommunityDynamicsShifts: [
        { community: "Jat Sikh", previousTilt: "AAP", currentTilt: "Swing", driver: "Broken promises on jobs" },
        { community: "SC (Mazhabi)", previousTilt: "AAP", currentTilt: "Congress", driver: "AAP's unfulfilled SC promises" },
        { community: "Urban Youth", previousTilt: "AAP", currentTilt: "Swing", driver: "Employment concerns" },
      ],
      candidateFeedbackSummary: [
        { candidateName: "Gurpreet Singh", acName: "Bathinda Rural", feedback: "Positive - ground response overwhelming", issues: ["Need more polling day volunteers"] },
        { candidateName: "Jaspreet Singh", acName: "Moga", feedback: "Cautiously optimistic", issues: ["SAD worker poaching"] },
      ],
      voterMoodAssessmentByRegion: [
        { region: "Malwa", mood: "optimistic", keyFactors: ["Rally response", "Drug narrative resonates"] },
        { region: "Majha", mood: "swing", keyFactors: ["SAD-BJP speculation causing confusion"] },
        { region: "Doaba", mood: "pessimistic", keyFactors: ["Economic stress", "AAP still has base support"] },
      ],
    },
    riskRegister: {
      activeRisks: [
        { riskId: "R-001", description: "SAD-BJP reunion shifts 8-12 seats", severity: "HIGH", probability: "MEDIUM", impact: "HIGH", mitigation: "Approach SAD dissidents, target Jat Sikh votes", owner: "Strategy Head" },
        { riskId: "R-002", description: "Doaba turnout lower due to voter fatigue", severity: "MEDIUM", probability: "HIGH", impact: "MEDIUM", mitigation: "NRI mobilization, visible candidate presence", owner: "Ground Ops" },
      ],
      newRisksThisWeek: [
        { riskId: "R-003", description: "AAP's dole scheme creating sentiment shift among youth", severity: "MEDIUM", probability: "HIGH", impact: "MEDIUM", mitigation: "Counter-narrative on scheme sustainability", owner: "Communications" },
      ],
      escalatedDeEscalated: [
        { riskId: "R-001", change: "escalated", previousSeverity: "MEDIUM", newSeverity: "HIGH", reason: "SAD-BJP meeting confirmed" },
      ],
      earlyWarningIndicators: [
        { indicator: "Social media negative mentions", status: "YELLOW", description: "Up 12% but within normal fluctuation" },
        { indicator: "Volunteer dropout rate", status: "RED", description: "8% weekly dropout - above 5% threshold" },
      ],
    },
  },
  recommendations: [
    {
      recommendation: "Launch 'Congress Worker App' for real-time volunteer management",
      rationale: "Current WhatsApp-based tracking is insufficient for 117 ACs",
      owner: "Digital Lead + Ground Ops",
      timeline: "By June 1",
      expectedImpact: "+15% volunteer activation rate",
    },
    {
      recommendation: "Schedule 3 mega-rallies in Malwa before end of May",
      rationale: "Build momentum and counter AAP's media narrative",
      owner: "Campaign Director",
      timeline: "May 20-30",
      expectedImpact: "+3-5 point vote share in affected ACs",
    },
    {
      recommendation: "Activate NRI voter outreach program for Doaba",
      rationale: "Doaba has highest NRI influence - mobilization could flip 4-6 seats",
      owner: "Regional Coordinator Doaba",
      timeline: "Immediate",
      expectedImpact: "Unknown - pilot program",
    },
  ],
  nextWeekPlan: [
    "Rally schedule finalization for Malwa mega-events",
    "Candidate list completion for priority ACs",
    "Volunteer surge deployment plan for underperforming ACs",
    "Social media counter-narrative rollout for AAP dole scheme",
  ],
};

// ==========================================
// TIER CLASSIFICATION DATA
// ==========================================

export const TIER_CLASSIFICATION = {
  tier1: {
    description: "Toss-up/Leaning ACs (highest strategic priority)",
    acCountRange: "30-40 ACs",
    pageFormat: "2 pages each",
    examples: ["Bathinda Rural", "Moga", "Sangrur", "Ludhiana East", "Ferozpur"],
  },
  tier2: {
    description: "Safe/Lean-win ACs requiring maintenance",
    acCountRange: "30-40 ACs",
    pageFormat: "1 page each",
    examples: ["Patiala", "Amritsar South", "Jalandhar South"],
  },
  tier3: {
    description: "Lean-loss/Loss ACs monitored for unexpected shifts",
    acCountRange: "Remaining ACs",
    pageFormat: "Highlight table only",
  },
} as const;

// ==========================================
// KPI FRAMEWORK INTEGRATION MAPPINGS
// ==========================================

export const REPORT_KPI_MAPPINGS = {
  DIB: {
    primaryKPIs: ["Sentiment Trajectory", "Win Probability"],
    secondaryKPIs: ["Media SOV", "Competitor Threat"],
  },
  WarRoomFlash: {
    primaryKPIs: ["Crisis Response Time", "Sentiment Trajectory"],
    secondaryKPIs: ["Competitor Threat"],
  },
  DailyGroundReport: {
    primaryKPIs: ["D2D Coverage", "Volunteer Activation"],
    secondaryKPIs: [],
  },
  DailyMediaDigest: {
    primaryKPIs: ["Media SOV", "Sentiment Trajectory"],
    secondaryKPIs: ["Digital Reach"],
  },
  WIS: {
    primaryKPIs: ["Win Probability", "Seat Projection", "Vote Share"],
    secondaryKPIs: ["Issue Ownership", "Media SOV", "Competitor Threat"],
  },
  WeeklyConstituencyPulse: {
    primaryKPIs: ["Seat Projection", "D2D Coverage"],
    secondaryKPIs: ["Volunteer Activation"],
  },
  WeeklyCompetitorTracker: {
    primaryKPIs: ["Competitor Threat"],
    secondaryKPIs: ["Media SOV", "Sentiment Trajectory"],
  },
  WeeklyCampaignPerformance: {
    primaryKPIs: ["All Strategic + Operational KPIs"],
    secondaryKPIs: [],
  },
} as const;

// ==========================================
// ALERT CONFIGURATION
// ==========================================

export const ALERT_TRIGGERS = {
  sentimentSpike: {
    threshold: 10,
    direction: "absolute",
    timeframe: "24 hours",
  },
  competitorMove: {
    types: ["Rally >5000 attendance", "Major policy announcement", "Alliance news", "Candidate announcement"],
  },
  groundIncident: {
    severityLevels: ["Minor", "Moderate", "Major", "Critical"],
    escalationPath: ["Local", "Regional", "State"],
  },
  mediaCrisis: {
    reachThreshold: 100000,
    negativeThreshold: 60,
  },
  kpiBreach: {
    redFlagKPIs: ["Win Probability <30%", "D2D Coverage <50%", "Volunteer Activation <40%"],
  },
} as const;

// ==========================================
// FORTNIGHTLY & MONTHLY REPORTING DATA
// Derived from: MP10-predictive-outcomes/reporting/fortnightly-monthly-reporting.md
// ==========================================

import type {
  FortnightlyReportType,
  MonthlyReportType,
  ACRotationEntry,
  ReportFileNaming,
  ReportProductionLoad,
  FortnightlyMonthlyDistributionEntry,
  QualityCheckStatus,
} from "@/types/reporting-framework";

// ==========================================
// REGIONAL AC DISTRIBUTION
// ==========================================

export const REGIONAL_AC_DISTRIBUTION = {
  malwa: { seats: 69, percentage: 59, regionName: "Malwa" },
  majha: { seats: 25, percentage: 21, regionName: "Majha" },
  doaba: { seats: 23, percentage: 20, regionName: "Doaba" },
  total: 117,
} as const;

// ==========================================
// FORTNIGHTLY REPORT SCHEDULES
// ==========================================

export const FORTNIGHTLY_REPORT_SCHEDULES: { reportType: FortnightlyReportType; format: string; deliveryDay: string; deliveryTime: string; audience: string[]; channel: string }[] = [
  {
    reportType: "CDD",
    format: "15-20 pages per cycle (10-15 ACs covered, 1-2 pages each)",
    deliveryDay: "Tuesday",
    deliveryTime: "10:00 AM of Week 2 (even weeks)",
    audience: ["Campaign Director", "Regional Coordinators", "Constituency In-charges (relevant ACs)"],
    channel: "Dashboard upload + encrypted email PDF (regional packets)",
  },
  {
    reportType: "TAR",
    format: "8-10 pages, data-heavy with statistical analysis",
    deliveryDay: "Tuesday",
    deliveryTime: "10:00 AM of Week 2 (odd weeks)",
    audience: ["Campaign Director", "CIO", "Data & Analytics Head", "Strategy Team"],
    channel: "Dashboard upload + encrypted email PDF",
  },
  {
    reportType: "CSA",
    format: "6-8 pages, structured per competitor with strategic analysis",
    deliveryDay: "Thursday",
    deliveryTime: "10:00 AM of Week 2 (odd weeks)",
    audience: ["Campaign Director", "CIO", "Strategy Team", "Communications Head"],
    channel: "Encrypted email PDF only (highest sensitivity classification)",
  },
  {
    reportType: "VGR",
    format: "4-5 pages, quantitative focus with trend charts",
    deliveryDay: "Thursday",
    deliveryTime: "10:00 AM of Week 2 (even weeks)",
    audience: ["Campaign Director", "Ground Ops Coordinator", "Volunteer Coordinator", "Regional Coordinators"],
    channel: "Dashboard upload + email PDF",
  },
];

// ==========================================
// MONTHLY REPORT SCHEDULES
// ==========================================

export const MONTHLY_REPORT_SCHEDULES: { reportType: MonthlyReportType; format: string; deliveryDay: string; deliveryTime: string; audience: string[]; channel: string }[] = [
  {
    reportType: "MSA",
    format: "25-30 pages, comprehensive state-level analysis",
    deliveryDay: "Monday",
    deliveryTime: "10:00 AM (first Monday of each month)",
    audience: ["Campaign Director", "CIO", "PPCC President", "Core Strategy Team", "PPCC Office-Bearers"],
    channel: "Printed booklet (PPCC President) + encrypted email PDF + dashboard interactive link",
  },
  {
    reportType: "FR",
    format: "5-7 pages, financial data tables + narrative",
    deliveryDay: "Wednesday",
    deliveryTime: "10:00 AM (first Wednesday of each month)",
    audience: ["Campaign Director", "CIO", "Finance Head", "PPCC Treasurer"],
    channel: "Encrypted email PDF only (financial confidentiality)",
  },
  {
    reportType: "TR",
    format: "3-4 pages, system performance metrics + narrative",
    deliveryDay: "Friday",
    deliveryTime: "10:00 AM (first Friday of each month)",
    audience: ["CIO", "Data & Analytics Head", "Technology Lead"],
    channel: "Encrypted email PDF + dashboard",
  },
];

// ==========================================
// AC ROTATION PLAN (8 Cycles to Cover All 117 ACs)
// ==========================================

export const AC_ROTATION_PLAN: ACRotationEntry[] = [
  { cycle: "Cycle 1", weeks: "Weeks 1-2", acsCovered: 15, selectionPriority: "All Tier 1 Toss-Up ACs (first batch)" },
  { cycle: "Cycle 2", weeks: "Weeks 3-4", acsCovered: 15, selectionPriority: "Remaining Tier 1 + highest-priority Tier 2" },
  { cycle: "Cycle 3", weeks: "Weeks 5-6", acsCovered: 15, selectionPriority: "Tier 2 ACs by region (Malwa focus)" },
  { cycle: "Cycle 4", weeks: "Weeks 7-8", acsCovered: 15, selectionPriority: "Tier 2 ACs by region (Majha + Doaba focus)" },
  { cycle: "Cycle 5", weeks: "Weeks 9-10", acsCovered: 15, selectionPriority: "Tier 3 ACs showing movement + Tier 1 refresh" },
  { cycle: "Cycle 6", weeks: "Weeks 11-12", acsCovered: 14, selectionPriority: "Remaining uncovered ACs + Tier 1 refresh" },
  { cycle: "Cycle 7", weeks: "Weeks 13-14", acsCovered: 14, selectionPriority: "Full re-scan of all Tier 1 ACs" },
  { cycle: "Cycle 8", weeks: "Weeks 15-16", acsCovered: 14, selectionPriority: "Final pre-campaign deep-dive on battleground ACs" },
];

// ==========================================
// REPORT FILE NAMING CONVENTIONS
// ==========================================

export const REPORT_FILE_NAMING: ReportFileNaming[] = [
  { reportType: "CDD", code: "CDD", examples: ["CDD-2026-06-02-v1.pdf"] },
  { reportType: "TAR", code: "TAR", examples: ["TAR-2026-05-19-v1.pdf"] },
  { reportType: "CSA", code: "CSA", examples: ["CSA-2026-05-21-v1.pdf"] },
  { reportType: "VGR", code: "VGR", examples: ["VGR-2026-06-05-v1.pdf"] },
  { reportType: "MSA", code: "MSA", examples: ["MSA-2026-06-01-v1.pdf"] },
  { reportType: "FR", code: "FR", examples: ["FR-2026-06-03-v1.pdf"] },
  { reportType: "TR", code: "TR", examples: ["TR-2026-06-05-v1.pdf"] },
];

// ==========================================
// REPORT PRODUCTION LOAD DISTRIBUTION
// ==========================================

export const REPORT_PRODUCTION_LOAD: ReportProductionLoad[] = [
  { timeframe: "Daily", reportsProduced: 28, peakProductionDays: "Every day (constant)" },
  { timeframe: "Weekly", reportsProduced: 4, peakProductionDays: "Monday, Wednesday, Thursday, Friday" },
  { timeframe: "Fortnightly", reportsProduced: 8, peakProductionDays: "4 peak days/month" },
  { timeframe: "Monthly", reportsProduced: 3, peakProductionDays: "First week of month (3 consecutive days)" },
];

// ==========================================
// PRODUCTION CALENDAR INTEGRATION
// ==========================================

export const FORTNIGHTLY_MONTHLY_CALENDAR = {
  week1: { fortnightly: { tuesday: "TAR", thursday: null }, monthly: null },
  week2: { fortnightly: { tuesday: "CDD", thursday: "VGR" }, monthly: { monday: "MSA" } },
  week3: { fortnightly: { tuesday: "TAR", thursday: "CSA" }, monthly: { wednesday: "FR" } },
  week4: { fortnightly: { tuesday: "CDD", thursday: "VGR" }, monthly: { friday: "TR" } },
} as const;

// ==========================================
// DISTRIBUTION MATRIX (FORTNIGHTLY & MONTHLY)
// ==========================================

export const FORTNIGHTLY_MONTHLY_DISTRIBUTION: FortnightlyMonthlyDistributionEntry[] = [
  { reportType: "CDD", campaignDirector: true, cio: false, ppccPresident: false, strategyTeam: false, deptHeads: false, regionalCoords: true, constituencyInCharges: true, financeHead: false },
  { reportType: "TAR", campaignDirector: true, cio: true, ppccPresident: false, strategyTeam: true, deptHeads: false, regionalCoords: false, constituencyInCharges: false, financeHead: false },
  { reportType: "CSA", campaignDirector: true, cio: true, ppccPresident: false, strategyTeam: true, deptHeads: true, regionalCoords: false, constituencyInCharges: false, financeHead: false },
  { reportType: "VGR", campaignDirector: true, cio: false, ppccPresident: false, strategyTeam: false, deptHeads: true, regionalCoords: true, constituencyInCharges: false, financeHead: false },
  { reportType: "MSA", campaignDirector: true, cio: true, ppccPresident: true, strategyTeam: true, deptHeads: true, regionalCoords: true, constituencyInCharges: false, financeHead: false },
  { reportType: "FR", campaignDirector: true, cio: true, ppccPresident: false, strategyTeam: false, deptHeads: true, regionalCoords: false, constituencyInCharges: false, financeHead: true },
  { reportType: "TR", campaignDirector: false, cio: true, ppccPresident: false, strategyTeam: false, deptHeads: true, regionalCoords: false, constituencyInCharges: false, financeHead: false },
];

// ==========================================
// QUALITY CHECKLISTS (FORTNIGHTLY & MONTHLY)
// ==========================================

export const FORTNIGHTLY_MONTHLY_QUALITY_CHECKS: QualityCheckStatus[] = [
  {
    reportType: "CDD",
    checkItems: [
      "Every AC has vote share projection with data source cited",
      "Demographic data is not older than 3 months (or flagged as STALE_DATA)",
      "Issue ownership is survey-based (not anecdotal)",
      "Action plan items have owners and deadlines",
      "No AC assessment exceeds 2 pages",
    ],
    status: "partial",
  },
  {
    reportType: "TAR",
    checkItems: [
      "Every trend claim includes statistical significance or is flagged as INDICATIVE_NOT_SIGNIFICANT",
      "Charts are readable in print format",
      "No data point older than 14 days unless explicitly noted",
      "Regional breakdown covers all three regions",
      "Methodology is transparent in annex",
    ],
    status: "partial",
  },
  {
    reportType: "CSA",
    checkItems: [
      "Every strategic claim is evidence-based (sourced to specific observation or data)",
      "Anticipated moves are explicitly marked as FORECAST with confidence level (HIGH/MED/LOW)",
      "Vulnerability assessments are actionable (not descriptive)",
      "No reliance on single-source intelligence for major claims",
      "Response options are feasible within current resource constraints",
    ],
    status: "partial",
  },
  {
    reportType: "VGR",
    checkItems: [
      "All metrics match volunteer management system data (cross-verified)",
      "Retention rates are calculated using consistent methodology",
      "Every underperforming constituency has a documented root cause",
      "Reallocation recommendations are feasible (not aspirational)",
    ],
    status: "partial",
  },
  {
    reportType: "MSA",
    checkItems: [
      "Executive summary is self-contained and readable in under 5 minutes",
      "All data points are sourced and dated",
      "Seat projection includes confidence interval and methodology note",
      "Every recommendation has an owner and resource estimate",
      "Risk register entries have probability/impact ratings",
      "Page count does not exceed 30 pages",
      "Printed format is legible (charts in grayscale)",
    ],
    status: "partial",
  },
  {
    reportType: "FR",
    checkItems: [
      "Budget vs actual figures reconcile with financial management system",
      "Cost-per-vote uses consistent methodology (voter contacts from D2D system)",
      "All INR figures rounded to lakhs",
      "Variance explanations provided for any line item exceeding 10% deviation",
    ],
    status: "partial",
  },
  {
    reportType: "TR",
    checkItems: [
      "Uptime figures match monitoring system logs",
      "Data quality scores are calculated using defined methodology",
      "Security incidents are classified per severity framework",
      "Every recommendation has an estimated cost and timeline",
    ],
    status: "partial",
  },
];

// ==========================================
// MSA SECTION STRUCTURE (25-30 pages)
// ==========================================

export const MSA_SECTION_STRUCTURE = {
  executiveSummary: { pages: 2, description: "Campaign health score, seat projection headline, top 3 strategic developments/risks/opportunities" },
  section1: { name: "Political Landscape Overview", pages: "3-4", subsections: ["Overall Political Environment", "Party Positioning Landscape", "Regional Dynamics"] },
  section2: { name: "Constituency-Level Analysis", pages: "8-10", subsections: ["Seat Projection Update", "AC Classification Summary", "Tier 1 ACs — Detailed Assessment", "Tier 2 ACs — Summary Table", "Path to 59+ Analysis"] },
  section3: { name: "Competitor Deep-Dive", pages: "4-5", subsections: ["One competitor per month rotating (AAP/SAD/BJP/BSP)", "SWOT Analysis", "Congress counter-strategy"] },
  section4: { name: "Campaign Performance Against KPIs", pages: "3-4", subsections: ["Strategic KPI Dashboard", "Operational KPI Dashboard", "Department Performance Scorecards", "Month-over-Month Comparison"] },
  section5: { name: "Prediction Model Update", pages: "2-3", subsections: ["Model Performance Review", "Updated Projections", "Key Model Drivers"] },
  section6: { name: "Risk Register & Early Warnings", pages: "2-3", subsections: ["Active Risk Register", "Early Warning Indicators", "Black Swan Scenarios"] },
  section7: { name: "Recommendations for Next Month", pages: 2, subsections: ["Strategic Recommendations (max 5)", "Tactical Adjustments (max 5)", "Resource Reallocation Proposals", "Priority Constituencies"] },
} as const;

// ==========================================
// COMPETITOR ROTATION FOR MSA DEEP-DIVE
// ==========================================

export const MSA_COMPETITOR_ROTATION = [
  { month: 1, competitor: "AAP", note: "incumbent" },
  { month: 2, competitor: "SAD", note: "" },
  { month: 3, competitor: "BJP", note: "" },
  { month: 4, competitor: "BSP/Others", note: "" },
] as const;

// ==========================================
// KEY METRICS FROM SOURCE DOCUMENT
// ==========================================

export const REPORTING_METRICS = {
  totalACs: 117,
  majorityMark: 59,
  regionalBreakdown: {
    malwa: { acs: 69, percentage: 59 },
    majha: { acs: 25, percentage: 21 },
    doaba: { acs: 23, percentage: 20 },
  },
  seatTargets: { majority: 59, comfortable: 70, absolute: 75 },
  voteShareRequirements: { minimumFor59: 36, targetFor59: 38, stretchFor70: 42, redFlag: 28 },
} as const;

// ==========================================
// REPORTING RESPONSIBLE TEAMS
// ==========================================

export const FORTNIGHTLY_MONTHLY_TEAMS = {
  CDD: { primary: "Data & Analytics Head (overall coordination)", authors: "Regional Coordinators (primary authors for their regions)", dataInput: "Constituency In-charges", competitorSection: "Competitor Intelligence Analyst (Section 5)" },
  TAR: { primary: "Data & Analytics Head (primary author)", statisticalAnalysis: "Statistician/Data Scientist", mediaSection: "Media Monitor (Section 3)", groundSection: "Ground Ops Coordinator (Section 4)" },
  CSA: { primary: "Competitor Intelligence Analyst (primary author)", narrativeStrategy: "Media Monitor", groundDeployment: "Ground Ops" },
  VGR: { primary: "Volunteer Coordinator (primary author)", deploymentSection: "Ground Ops Coordinator", metricCalculation: "Data team" },
  MSA: { executiveEditor: "CIO", primaryAuthors: "Data & Analytics Head (Sections 1, 2, 4, 5)", competitorSection: "Competitor Intelligence Analyst (Section 3)", constituencyInputs: "Ground Ops Coordinator", mediaNarrative: "Media Monitor", riskSection: "Risk Manager (Section 6)" },
  FR: { primary: "Finance Head (primary author)", costCalculations: "Data team" },
  TR: { primary: "Technology Lead (primary author)", dataQuality: "Data Engineer" },
} as const;

// ==========================================
// DATA SOURCES BY REPORT
// ==========================================

export const FORTNIGHTLY_MONTHLY_DATA_SOURCES = {
  CDD: ["AC-level survey crosstabs (latest wave)", "D2D tracking data", "Constituency coordinator reports", "Local media monitoring", "Volunteer app data", "Competitor ground intelligence", "Demographic databases (Census 2011 + electoral roll)"],
  TAR: ["Daily and weekly report aggregations", "Tracking survey rolling data", "Social listening platform analytics", "Media monitoring fortnightly aggregation", "D2D database fortnightly extracts", "Volunteer management system"],
  CSA: ["Weekly Competitor Tracker aggregations", "Ground intelligence (competitor events observed)", "Social media deep analysis (competitor accounts, ad library)", "Public statements analysis", "Media strategy reverse-engineering", "Competitor manifesto/promise tracker", "Informant networks (VERIFICATION_NEEDED)"],
  VGR: ["Volunteer management system", "D2D tracking database", "Regional coordinator reports", "Training records", "Volunteer feedback surveys"],
  MSA: ["All daily/weekly/fortnightly report aggregations", "Latest tracking survey wave", "Seat projection model (MODL-001/002)", "KPI dashboard (KPIF-002/003)", "Competitor intelligence files", "Ground operations database", "Financial management system", "Risk register database", "Early warning system"],
  FR: ["Financial management system", "Department expenditure reports", "Fundraising database", "D2D contact data (for cost-per-vote calculation)", "Election Commission filing records"],
  TR: ["System monitoring dashboards", "Database administration logs", "Data quality audit reports", "Tool usage analytics", "Security incident logs", "Infrastructure inventory"],
} as const;
