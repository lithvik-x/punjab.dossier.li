// KPIs, Risk & Campaign Execution Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b23-kpi-risk-campaign-execution.md

import type {
  PartyPerceptionMetrics,
  LeaderPerceptionMetrics,
  IssueOwnershipAnalysis,
  PositioningQuadrant,
  VoterSegmentClassification,
  MediaToneAnalysis,
  DeraLandscape,
  CampaignObjectives,
  RegionalVoteShift,
  VictoryPathway,
  ResourceAllocation,
  TimelinePhase,
  MilestoneCheckpoint,
  ContingencyScenario,
  StakeholderAlignment,
  MasterNarrative,
  SubNarrative,
  EmotionalArchitecture,
  MessageHierarchy,
  NarrativeTesting,
} from '@/types/perception-audit-types';

// ==========================================
// KPI FRAMEWORK - SUCCESS METRICS BY PHASE
// ==========================================

export const prePrimaryPhaseMetrics = {
  boothWorkerRecruitment: {
    target: "5 trained workers per booth (585 total target)",
    measurement: "HR database, supervisor reports",
  },
  volunteerRegistration: {
    target: "50,000 registered volunteers",
    measurement: "Digital signup tracking",
  },
  voterProfileCompletion: {
    target: "60% of target voters profiled",
    measurement: "Database coverage audit",
  },
  candidateSelection: {
    target: "100% of winnable seats with candidates",
    measurement: "Party records",
  },
  voterListAccuracy: {
    target: "95% accuracy rate",
    measurement: "Cross-reference with ECI data",
  },
  coalitionAgreements: {
    target: "100% of needed alliances",
    measurement: "Party communiqués",
  },
};

export const primaryPhaseMetrics = {
  voterContactRate: {
    target: "70% of target voters contacted",
    measurement: "CRM contact logs",
  },
  doorknockCompletion: {
    target: "40% of households visited",
    measurement: "Worker reporting app",
  },
  telephoneOutreach: {
    target: "30% of target voters reached",
    measurement: "Call center records",
  },
  publicRallyAttendance: {
    target: "500+ average per rally",
    measurement: "Estimated/verified headcount",
  },
  mediaAppearances: {
    target: "3+ per candidate per week",
    measurement: "Media monitoring",
  },
  socialMediaEngagement: {
    target: "8%+ engagement (interaction/views)",
    measurement: "Platform analytics",
  },
  volunteerActivityRate: {
    target: "60% of registered volunteers active",
    measurement: "Activity tracking",
  },
  issuePenetration: {
    target: "Top 3 voter issues recognized by 50%+",
    measurement: "Poll sampling",
  },
};

export const gotvPhaseMetrics = {
  contactRate: {
    target: "90% of target voters",
    measurement: "Door-to-door + phone logs",
  },
  turnoutProbabilityClassification: {
    target: "85% of voters classified",
    measurement: "Predictive modeling",
  },
  transportArranged: {
    target: "100% of identified needs met",
    measurement: "Logistics database",
  },
  earlyVotingAssistance: {
    target: "95% of elderly/disabled assisted",
    measurement: "Booth captain reports",
  },
  workerDeployment: {
    target: "100% of critical booths staffed",
    measurement: "Deployment verification",
  },
  turnoutVariance: {
    target: "<5% deviation from prediction",
    measurement: "ECI data comparison",
  },
  supporterTurnoutRate: {
    target: "90%+ of identified supporters voted",
    measurement: "Post-vote survey",
  },
};

export const electionDayMetrics = {
  boothAgentDeployment: {
    target: "100% of party-contested booths",
    measurement: "Central monitoring",
  },
  evmTrackingAccuracy: {
    target: "100% of strongholds monitored",
    measurement: "Agent reports",
  },
  voteCountTransmission: {
    target: "Real-time 95%+ accuracy",
    measurement: "Results dashboard",
  },
  misinformationResponse: {
    target: "<30 minute response time",
    measurement: "Social monitoring",
  },
  legalChallengePreparation: {
    target: "100% of potential issues documented",
    measurement: "Legal team readiness",
  },
  victoryMarginPrediction: {
    target: "±3% of actual margin",
    measurement: "Exit poll comparison",
  },
};

// ==========================================
// LEADING vs LAGGING INDICATORS
// ==========================================

export const leadingIndicators = [
  {
    category: "Voter Engagement",
    indicators: ["Contact rates", "Event attendance", "Social shares"],
    whyTheyLead: "Forecasts turnout probability",
  },
  {
    category: "Narrative Momentum",
    indicators: ["Media tone ratio", "Search volume trends", "Social sentiment"],
    whyTheyLead: "Predicts vote choice shifts",
  },
  {
    category: "Organizational Health",
    indicators: ["Worker activity rates", "Volunteer retention", "Fund-raising velocity"],
    whyTheyLead: "Indicates campaign capacity",
  },
  {
    category: "Resource Status",
    indicators: ["Fund balance", "Inventory levels", "Staffing ratios"],
    whyTheyLead: "Determines execution capacity",
  },
  {
    category: "Coalition Strength",
    indicators: ["Joint rally attendance", "Co-endorsement coverage", "Resource sharing"],
    whyTheyLead: "Predicts alliance vote transfer",
  },
];

export const laggingIndicators = [
  {
    category: "Vote Outcome",
    indicators: ["Vote share %", "Seat count", "Margin of victory"],
    whyTheyLag: "Confirmed only after counting",
  },
  {
    category: "Turnout",
    indicators: ["Actual voter turnout %"],
    whyTheyLag: "Confirmed post-poll",
  },
  {
    category: "Media Effectiveness",
    indicators: ["Final favorability polls", "Recognized narrative success"],
    whyTheyLag: "Confirmed late in campaign",
  },
  {
    category: "Resource Efficiency",
    indicators: ["Cost per vote", "ROI on communications spend"],
    whyTheyLag: "Confirmed post-election",
  },
  {
    category: "Coalition Performance",
    indicators: ["Transferred vote totals"],
    whyTheyLag: "Confirmed in results",
  },
];

// ==========================================
// ORGANIZATIONAL KPIs
// ==========================================

export const organizationalKPIs = [
  {
    kpi: "Worker-to-voter ratio",
    definition: "Trained booth workers / total electorate",
    target: "1:100",
    frequency: "Monthly",
  },
  {
    kpi: "Volunteer retention rate",
    definition: "Active volunteers / registered volunteers",
    target: "65%+",
    frequency: "Weekly",
  },
  {
    kpi: "Training completion rate",
    definition: "Workers completing training modules / enrolled",
    target: "90%+",
    frequency: "Per training cycle",
  },
  {
    kpi: "Resource allocation accuracy",
    definition: "Budget spent vs allocated by category",
    target: "±10%",
    frequency: "Monthly",
  },
  {
    kpi: "Communication reach",
    definition: "Unique voters exposed to messaging",
    target: "80%+",
    frequency: "Weekly",
  },
  {
    kpi: "Data quality score",
    definition: "Accurate/reachable voter contacts / total contacts",
    target: "85%+",
    frequency: "Ongoing",
  },
];

// ==========================================
// ELECTORAL KPIs
// ==========================================

export const electoralKPIs = [
  {
    kpi: "Vote share",
    definition: "Congress votes / total votes cast",
    target: "35%+",
    frequency: "Poll + exit",
  },
  {
    kpi: "Seat projection",
    definition: "Modeled seat total based on current trajectory",
    target: "55-65",
    frequency: "Monthly modeling",
  },
  {
    kpi: "Margin improvement",
    definition: "Vote margin vs 2022 baseline in target seats",
    target: "+5 pp",
    frequency: "Per seat tracking",
  },
  {
    kpi: "Swing voter conversion",
    definition: "Persuaded swing voters / total swing voters",
    target: "40%+",
    frequency: "Poll tracking",
  },
  {
    kpi: "Core vote consolidation",
    definition: "Core supporters voting / identified core supporters",
    target: "95%+",
    frequency: "GOTV tracking",
  },
  {
    kpi: "Opposition erosion",
    definition: "Shift from AAP/BJP to Congress",
    target: "8+ pp in target seats",
    frequency: "Poll tracking",
  },
];

// ==========================================
// COMMUNICATION KPIs
// ==========================================

export const communicationKPIs = [
  {
    kpi: "Net Favorability",
    definition: "Favorability rating minus unfavorability",
    target: "+15 pp",
    frequency: "Bi-weekly poll",
  },
  {
    kpi: "Issue ownership",
    definition: "Perceived best party on top voter issue",
    target: "Congress first",
    frequency: "Monthly poll",
  },
  {
    kpi: "Narrative penetration",
    definition: "Voter correctly articulates Congress narrative",
    target: "50%+",
    frequency: "Survey",
  },
  {
    kpi: "Social media growth",
    definition: "Follower increase rate vs opposition",
    target: "2x opposition pace",
    frequency: "Weekly",
  },
  {
    kpi: "Earned media value",
    definition: "Rupee equivalent of media coverage",
    target: "₹Y crore equivalent",
    frequency: "Weekly",
  },
  {
    kpi: "Advertising recall",
    definition: "Voter recalls Congress ad (aided)",
    target: "40%+",
    frequency: "Ad tracking poll",
  },
];

// ==========================================
// HISTORICAL BENCHMARKS
// ==========================================

export const historicalBenchmarks = {
  punjab2022Results: {
    congress: { seats: 18, voteShare: "23.0%" },
    aap: { seats: 92, voteShare: "42.4%" },
    sad: { seats: 3, voteShare: "18.4%" },
    bjp: { seats: 2, voteShare: "6.6%" },
    voterTurnout: "75.4%",
  },
  performanceBenchmarks: [
    {
      category: "Stronghold seats",
      criteria: "2022 Congress >30%",
      target: "90%+ retention, +5 pp improvement",
    },
    {
      category: "Contested seats",
      criteria: "2022 margin <10%",
      target: "15 seat pickup",
    },
    {
      category: "Opponent erosion seats",
      criteria: "AAP 2022 >50%",
      target: "10 seat reduction in their margin",
    },
    {
      category: "New voter targets",
      criteria: "Youth vote shift",
      target: "+8 pp youth vote shift to Congress",
    },
  ],
};

// ==========================================
// RISK MANAGEMENT FRAMEWORK
// ==========================================

export const politicalRisks = [
  {
    risk: "Alliance collapse",
    description: "Coalition partner withdraws support",
    earlyWarningSigns: ["Private complaints", "Public statements", "Negotiation breakdown"],
  },
  {
    risk: "Ticket distribution disputes",
    description: "Candidate selection creates factional conflict",
    earlyWarningSigns: ["Faction leader criticism", "Worker slowdowns", "Voter alienation"],
  },
  {
    risk: "Narrative failure",
    description: "Campaign message fails to penetrate",
    earlyWarningSigns: ["Polling shows zero narrative movement", "Low unaided recall"],
  },
  {
    risk: "Populist position backfire",
    description: "Policy stance alienates core vote",
    earlyWarningSigns: ["Focus group negative response", "Dera leader criticism"],
  },
  {
    risk: "Caste combination miscalculation",
    description: "Community-specific outreach fails",
    earlyWarningSigns: ["Community leader endorsements not translating to votes"],
  },
  {
    risk: "Youth vote underperformance",
    description: "Young voter turnout lower than projected",
    earlyWarningSigns: ["Early voting data shows age skew"],
  },
];

export const operationalRisks = [
  {
    risk: "Booth worker shortage",
    description: "Insufficient trained workers at critical booths",
    earlyWarningSigns: ["Recruitment below target", "Training attendance low"],
  },
  {
    risk: "Supply chain failure",
    description: "Campaign materials not delivered",
    earlyWarningSigns: ["Logistics delays", "Vendor defaults"],
  },
  {
    risk: "Technology platform failure",
    description: "CRM/communication platform outage",
    earlyWarningSigns: ["System downtime", "Data loss"],
  },
  {
    risk: "Volunteer burnout",
    description: "High-performing volunteers disengage",
    earlyWarningSigns: ["Decreasing activity rates", "Resignation signals"],
  },
  {
    risk: "Event security breach",
    description: "Rally or event security failure",
    earlyWarningSigns: ["Security assessment downgrade", "Local police warnings"],
  },
  {
    risk: "Transport/logistics failure",
    description: "Voter transport for GOTV fails",
    earlyWarningSigns: ["Vehicle shortage", "Driver unavailability"],
  },
];

export const financialRisks = [
  {
    risk: "Fundraising shortfall",
    description: "Campaign fails to meet financial targets",
    earlyWarningSigns: ["Donation velocity decline", "Large donor retreat"],
  },
  {
    risk: "Cash flow timing",
    description: "Funds available but not when needed",
    earlyWarningSigns: ["Working capital shortfall", "Payment delays"],
  },
  {
    risk: "Expense fraud",
    description: "Internal financial misconduct",
    earlyWarningSigns: ["Audit exceptions", "Vendor complaints"],
  },
  {
    risk: "Regulatory violation",
    description: "Expenditure limit breach",
    earlyWarningSigns: ["Accounting discrepancies", "ECI notice"],
  },
  {
    risk: "Third-party financial dependency",
    description: "Funder exerts inappropriate influence",
    earlyWarningSigns: ["Conditional donation offers", "Funder demands"],
  },
];

export const reputationalRisks = [
  {
    risk: "Candidate scandal",
    description: "Candidate involved in misconduct",
    earlyWarningSigns: ["Media inquiry", "Opposition research release", "Social media surge"],
  },
  {
    risk: "Social media crisis",
    description: "Viral negative content about party/candidate",
    earlyWarningSigns: ["Sentiment tracking spike", "Trending negative hashtags"],
  },
  {
    risk: "Misinformation amplification",
    description: "False narrative gains traction",
    earlyWarningSigns: ["Fact-check requests", "Reporter inquiries"],
  },
  {
    risk: "Dera/religious leader withdrawal",
    description: "Community leader withdraws support publicly",
    earlyWarningSigns: ["Statement released", "Supporters directed elsewhere"],
  },
  {
    risk: "Legacy corruption narrative",
    description: "Party linked to historical corruption",
    earlyWarningSigns: ["Media retrospectives", "Opposition ads"],
  },
];

export const legalRisks = [
  {
    risk: "Model Code violation",
    description: "Campaign activity violates ECI rules",
    earlyWarningSigns: ["ECI notice", "Opposition complaint"],
  },
  {
    risk: "Defamation suit",
    description: "Opposition/critic sues for statements",
    earlyWarningSigns: ["Legal notice received"],
  },
  {
    risk: "Criminal nexus allegation",
    description: "Criminal-politician connection alleged",
    earlyWarningSigns: ["Media investigation", "ED/CBI inquiry"],
  },
  {
    risk: "Vote-buying accusation",
    description: "Freebies/vote inducement alleged",
    earlyWarningSigns: ["ECI scrutiny", "Media sting"],
  },
  {
    risk: "EVM manipulation claim",
    description: "Electronic voting integrity questioned",
    earlyWarningSigns: ["Technical complaints"],
  },
  {
    risk: "Post-election result challenge",
    description: "Losing party challenges results",
    earlyWarningSigns: ["Legal team alert"],
  },
];

// ==========================================
// CAMPAIGN EXECUTION FRAMEWORK
// ==========================================

export const boothLevelStructure = [
  { role: "Booth President", count: 1, responsibilities: "Overall booth coordination, reporting, problem resolution" },
  { role: "Booth Secretary", count: 1, responsibilities: "Voter records, contact management, data reporting" },
  { role: "Booth Worker", count: "3-5", responsibilities: "Voter contact, doorknocking, identification, GOTV" },
];

export const constituencyLevelStructure = [
  { role: "Constituency Campaign Manager", count: 1, responsibilities: "Overall constituency campaign execution" },
  { role: "Voter Contact Lead", count: 1, responsibilities: "Contact operations, data management, worker coordination" },
  { role: "Event Lead", count: 1, responsibilities: "Rally and event execution, logistics" },
  { role: "Communication Lead", count: 1, responsibilities: "Local media, social media, narrative dissemination" },
  { role: "Logistics Lead", count: 1, responsibilities: "Materials, transport, supplies" },
  { role: "Data Analyst", count: 1, responsibilities: "Tracking metrics, reporting to state" },
];

export const gotvPhases = [
  {
    phase: "Identification refinement",
    timing: "T-21 to T-14",
    focus: "Finalize voter categorization",
    keyActions: ["Re-confirm supporter/swing/opposition voters", "Update turnout probability"],
  },
  {
    phase: "Contact intensification",
    timing: "T-14 to T-7",
    focus: "High-frequency contact of persuadable voters",
    keyActions: ["Daily call", "Personalized WhatsApp", "Booth-level visits"],
  },
  {
    phase: "Early voting push",
    timing: "T-7 to T-3",
    focus: "Early vote and postal vote assistance",
    keyActions: ["Help voters request/mail ballots", "Transport to early voting centers"],
  },
  {
    phase: "Final weekend",
    timing: "T-3 to T-1",
    focus: "Hardest push on closest voters",
    keyActions: ["Personal doorknock of top 100 swing voters per booth"],
  },
  {
    phase: "Election day",
    timing: "T-0",
    focus: "Turnout verification and assistance",
    keyActions: ["Transport arranged", "Booth-level voter verification", "Problem resolution"],
  },
];

export const gotvContactPriorities = [
  { priority: 1, voterCategory: "Likely Congress voters not yet voted", contactFrequency: "Multiple daily", method: "Personal call, WhatsApp, home visit" },
  { priority: 2, voterCategory: "Persuadable swing voters", contactFrequency: "Daily", method: "Personal call, in-person" },
  { priority: 3, voterCategory: "Low-turnout-risk supporters", contactFrequency: "2-3 times", method: "Group WhatsApp, booth worker visit" },
  { priority: 4, voterCategory: "Early voters (already voted)", contactFrequency: "Thank you message", method: "SMS, WhatsApp" },
  { priority: 5, voterCategory: "Opposition supporters", contactFrequency: "None", method: "Not worth resources" },
];

export const electionDayTimeline = [
  { time: "5:00 AM", activity: "Booth setup verification", responsible: "Booth agents + candidates" },
  { time: "7:00 AM", activity: "Polling opens — early voter transport", responsible: "Transport coordinators" },
  { time: "9:00 AM", activity: "First wave of voters voted — turnout check", responsible: "Booth presidents" },
  { time: "11:00 AM", activity: "Mid-morning assessment — low turnout intervention", responsible: "Constituency managers" },
  { time: "1:00 PM", activity: "Afternoon push — worker break coverage", responsible: "District coordinators" },
  { time: "3:00 PM", activity: "Last hour mobilization — contact undecided", responsible: "All workers" },
  { time: "5:00 PM", activity: "Polling closes — EVM collection observation", responsible: "Booth agents" },
  { time: "6:00 PM", activity: "Counting begins — results tracking", responsible: "State election room" },
];

export const rapidResponseTriggers = [
  { situation: "Viral negative content", responseTime: "30 minutes", authority: "RRT auto-activates" },
  { situation: "EVM malfunction report", responseTime: "15 minutes", authority: "RRT auto-activates" },
  { situation: "Voter intimidation report", responseTime: "10 minutes", authority: "RRT + law enforcement" },
  { situation: "Booth agent access denied", responseTime: "15 minutes", authority: "RRT + legal" },
  { situation: "Medical emergency", responseTime: "Immediate", authority: "RRT + emergency services" },
  { situation: "Critical event logistics failure", responseTime: "30 minutes", authority: "RRT + event lead" },
  { situation: "Media mischaracterization", responseTime: "45 minutes", authority: "RRT + comms lead" },
];

export const resourceAllocation = [
  { category: "Voter contact operations", typicalAllocation: "30-35%", punjabAdjustment: "35% (high-priority state)" },
  { category: "Event execution", typicalAllocation: "20-25%", punjabAdjustment: "20%" },
  { category: "Communication/media", typicalAllocation: "15-20%", punjabAdjustment: "20%" },
  { category: "Logistics and operations", typicalAllocation: "10-15%", punjabAdjustment: "15%" },
  { category: "Admin and overhead", typicalAllocation: "8-10%", punjabAdjustment: "8%" },
  { category: "Contingency reserve", typicalAllocation: "5%", punjabAdjustment: "5%" },
];
