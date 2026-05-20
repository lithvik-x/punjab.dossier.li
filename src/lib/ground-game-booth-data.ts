// Ground Game & Booth-Level Operations Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b42-ground-game-booth-operations.md

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
// BOOTH-LEVEL ORGANIZATION
// ==========================================

export const boothLevelRoles = {
  boothPresident: {
    title: "Booth President (Booth Incharge)",
    responsibilities: [
      "Maintains voter profile cards",
      "Coordinates with party workers",
      "Executes voter contact programs",
      "Reports to Sector Incharge and campaign team",
    ],
    idealProfile: "Resident of booth area with established social networks and local credibility",
  },
  boothCommittee: {
    size: "5-10 dedicated party workers",
    composition: "Representation from youth, women, minority communities where applicable",
    meetingFrequency: "Weekly during active campaign, daily in final two weeks",
  },
  boothLevelNetwork: {
    size: "15-30 individuals",
    supportLevel: "Varying from active daily to occasional assistance",
    includes: ["Party sympathizers", "Affiliated civil society members", "Recruited volunteers from public events", "Strategic hamlet/street level opinion leaders"],
  },
};

export const workerTrainingModules = [
  "Voter profile card maintenance and update procedures",
  "Voter contact techniques — door-to-door canvassing scripts",
  "Identification and tagging of party supporters, cross-voters, and swing voters",
  "Understanding of local issues specific to booth's geography",
  "Emergency contact procedures and booth-level troubleshooting",
  "Legal boundaries of electoral conduct — model code of conduct compliance",
  "Booth-level GOTV execution on election day",
  "Results reporting mechanisms",
];

export const voterClassificationCategories = [
  { category: "Assured Supporter", code: "Green", description: "Congress voter who voted for the party in prior elections" },
  { category: "Probable Supporter", code: "Yellow", description: "Voter expressing positive sentiment toward Congress but not consistently voting for the party" },
  { category: "Swing Voter", code: "Orange", description: "Voter who has changed voting patterns across elections and remains unpredictable" },
  { category: "Probable Opposition Supporter", code: "Red", description: "Voter favoring an opposing party but not guaranteed" },
  { category: "Assured Opposition Supporter", code: "Black", description: "Committed vote of an opposing party" },
];

// ==========================================
// WORKER DEPLOYMENT STRATEGIES
// ==========================================

export const workerToVoterRatios = [
  {
    constituencyType: "Urban",
    targetRatio: "1 active worker per 40-60 voters",
    committeeSize: "25-35 active committee members per 1,200-voter booth",
    rationale: "Higher population density but greater anonymity and voter distraction",
  },
  {
    constituencyType: "Rural",
    targetRatio: "1 active worker per 60-80 voters",
    committeeSize: "15-20 active committee members per booth",
    rationale: "Tighter social networks where one supportive voice reaches multiple voters",
  },
  {
    constituencyType: "Semi-Urban/Transition",
    targetRatio: "1 active worker per 50-70 voters",
    rationale: "Shared characteristics of both urban and rural deployment",
  },
  {
    constituencyType: "Dera Influence Zones",
    targetRatio: "1:30",
    rationale: "Must penetrate Dera messaging effectively; workers should include individuals with Dera connections",
  },
];

export const specializedTeams = [
  {
    team: "Youth Outreach Teams",
    composition: "Young party workers (18-35 years)",
    focus: ["First-time voters", "Young urban professionals", "Youth in educational institutions"],
    methods: ["Campus engagement", "Social media amplification", "Election day mobilization"],
  },
  {
    team: "Women's Mobilization Teams",
    composition: "Predominantly women volunteers",
    focus: ["Female voters", "Women-specific issues", "Women-friendly transport arrangements"],
    rationale: "Party historically difficulty in mobilizing women supporters",
  },
  {
    team: "Minority Outreach Teams",
    composition: "Community members who can communicate effectively in relevant languages",
    focus: ["Culturally sensitive voter contact", "Urban minority populations", "Christian communities in some areas"],
  },
  {
    team: "Scheduled Caste (SC) Outreach Teams",
    composition: "Mazhabi Sikh and other SC community members",
    focus: ["SC voter mobilization", "Community network navigation"],
    rationale: "~32% SC population; Congress historically weaker among SC voters",
  },
  {
    team: "Agricultural and Farmer Teams",
    composition: "Party workers with farmer connections",
    focus: ["Farmer voters", "Agricultural issues", "Debt, MSP, crop insurance"],
  },
];

export const boothPriorityClassification = [
  {
    category: "Category A (High Priority)",
    criteria: [
      "Past election margins < 500 votes",
      "Significant swing voter populations",
      "Local issues solvable and publicized",
      "Demographic composition favoring potential Congress gains",
    ],
    resourceLevel: "Maximum worker deployment, multiple contact passes, special local issue resolution, dedicated transport",
  },
  {
    category: "Category B (Medium Priority)",
    criteria: [
      "Standard competitive seats",
    ],
    resourceLevel: "Standard deployment (Booth President + committee), two contact passes, baseline GOTV support",
  },
  {
    category: "Category C (Maintenance)",
    criteria: [
      "Strong historical Congress vote share (>60%)",
      "Limited persuadable voters",
      "Geographic remoteness",
    ],
    resourceLevel: "Minimal deployment, baseline contact and GOTV support",
  },
];

// ==========================================
// VOTER CONTACT PROGRAMS
// ==========================================

export const canvassingScript = [
  { step: "Greeting", content: "Clearly state name, that they represent the Congress party, and the candidate's name" },
  { step: "Personal connection", content: "Reference something specific about the voter or local area to establish rapport" },
  { step: "Key message delivery", content: "Communicate 2-3 core campaign points tailored to the voter's apparent concerns" },
  { step: "Issue probing", content: "Ask about the voter's primary concerns and listen actively" },
  { step: "Supporter identification", content: "Based on response, tentatively classify the voter" },
  { step: "Closing", content: "Thank the voter, leave campaign material, note any follow-up required" },
];

export const phoneBankingProtocol = [
  { step: 1, action: "List Preparation", detail: "Compile voter lists from booth diaries, organized by priority" },
  { step: 2, action: "Caller Training", detail: "Script delivery, handling hostile responses, accurate recording" },
  { step: 3, action: "Call Structure", detail: "Identification, brief key message, issue probing, supporter identification, GOTV reminder" },
  { step: 4, action: "Documentation", detail: "All responses recorded immediately — mood, issues raised, commitment level" },
  { step: 5, action: "Volume Targets", detail: "20-40 voter contacts per phone banker per session" },
];

export const contactTreeArchitecture = {
  root: "Booth President",
  tier1Contacts: "20-30 individuals",
  eachTier1Contact: "5-10 additional contacts",
  contentTypes: [
    "Voter contact reminders — personalized messages encouraging supporters to vote",
    "Logistical information — booth location, transport arrangements, polling hours",
    "Motivational content — victory updates, party achievements, inspirational messaging",
    "Response mobilization — requests for supporters to confirm voting intention",
    "Event promotion — public meetings, rallies, visibility events",
  ],
  messageDesign: "Brief, clear, preferably include visual elements in Punjabi/Hindi",
  limitations: "Limited to voters with smartphones and data connectivity",
};

export const supporterTaggingAccuracy = {
  targetAccuracy: "70%+",
  definition: "Voters classified as Green actually vote for the party on election day",
  implication: "Lower accuracy indicates poor contact methodology or excessive optimism in voter assessment",
};

// ==========================================
// GOTV EXECUTION
// ==========================================

export const lastWeekIntensification = [
  {
    phase: "Days 7-5 (Before Polling)",
    actions: [
      "Complete third and final contact with all swing voters and probable supporters",
      "Deliver clear GOTV messaging — polling date, booth location, transport arrangements",
      "Confirm supporter commitment",
    ],
  },
  {
    phase: "Days 4-2",
    actions: [
      "Reconfirm all assured supporters",
      "Confirm election-day transport needs",
      "Address any last-minute concerns",
      "Begin preliminary GOTV logistics coordination",
    ],
  },
  {
    phase: "Day 1 (Day Before Polling)",
    actions: [
      "Final confirmation calls/messages to all Green and Yellow tagged voters",
      "Ensure booth duty volunteers have received assignments",
      "Confirm candidate's election-day schedule",
      "Prepare results reporting mechanism",
    ],
  },
];

export const transportAssistanceVoters = [
  "Elderly voters (>65 years) without personal transport",
  "Differently-abled voters",
  "Voters in hard-to-reach locations (riverine areas, remote agricultural fields)",
  "Voters who have arranged group transport through community organizations",
];

export const boothDutyRoster = [
  { role: "Booth Monitoring", count: "1-2 volunteers", task: "Track turnout, identify irregularities, provide real-time updates" },
  { role: "Voter Assistance", count: "As needed", task: "Assist elderly voters, differently-abled voters, first-time voters" },
  { role: "Transport Coordination", count: "1 volunteer", task: "Manage transport schedule, ensure voters arrive at scheduled times" },
  { role: "Results Observation", count: "1-2 volunteers", task: "At counting center or assigned to relay results" },
];

export const electionDayMonitoring = [
  { metric: "Turnout tracking", frequency: "Every 2 hours from polling opening to closing", responsible: "Booth monitors" },
  { metric: "Margin indicator system", method: "Track which cross-voters and swing voters have appeared at booth", responsible: "Observer reports" },
  { metric: "Problem reporting", escalation: "Immediate escalation to constituency control room", responsible: "Booth President" },
  { metric: "Atmospheric indicators", method: "Read electoral atmosphere through supporter energy, opposition responses, queue lengths", responsible: "Experienced campaigners" },
];

// ==========================================
// REGIONAL DEPLOYMENT STRATEGY
// ==========================================

export const regionalDeployment = [
  {
    region: "Malwa",
    seats: 69,
    demographics: "Typically high-caste Hindu and Jat Sikh agrarian",
    deploymentStrategy: "Jat Sikh and SC voter coalition building",
  },
  {
    region: "Majha",
    seats: 27,
    demographics: "Cosmopolitan with significant Hindu urban population",
    deploymentStrategy: "Maintain baseline while recovering Sikh voter support",
  },
  {
    region: "Doaba",
    seats: 23,
    demographics: "Heavily agricultural with significant SC population including Mazhabi Sikhs",
    deploymentStrategy: "Strong improvement among SC voters, particularly youth",
  },
];

// ==========================================
// ZONE-BASED DEPLOYMENT
// ==========================================

export const zoneArchitecture = {
  structure: "Each assembly constituency divided into geographic zones (3-6 sectors each)",
  oversight: "Zone Incharge — senior party functionary with organizational experience",
  reporting: "Reports directly to Candidate/Campaign Manager",
  sectorInchargeCoverage: "Typically manages 15-20 booths within easy travel distance",
};

export const priorityZoning = [
  { priority: "High Priority", description: "Where the margin of victory is likely to be decided", resourceLevel: "Concentrated resources" },
  { priority: "Medium Priority", description: "Safe zones requiring maintenance contact", resourceLevel: "Standard contact" },
  { priority: "Low Priority", description: "Outcome effectively predetermined", resourceLevel: "Baseline contact only (every seat matters for 59-seat majority)" },
];

// ==========================================
// BOOTH CAPTAIN RESPONSIBILITIES
// ==========================================

export const boothCaptainCoreResponsibilities = [
  "Voter Profile Maintenance — ensuring booth diary is current, accurate, and complete",
  "Worker Coordination — recruiting, training, and managing booth committee and extended volunteer network",
  "Voter Contact Execution — personally conducting or overseeing systematic door-to-door contact",
  "Supporter Mobilization — ensuring identified supporters are motivated to vote and have means to do so",
  "Election Day Coordination — assigning booth duty volunteers, monitoring turnout, troubleshooting problems",
  "Feedback Loop — communicating voter sentiment, local issues, and campaign challenges upward",
  "Conflict Resolution — managing intra-party disputes at booth level",
];

// ==========================================
// VOLUNTEER MANAGEMENT
// ==========================================

export const volunteerMotivationStrategies = [
  {
    category: "Recognition Systems",
    methods: ["Public acknowledgment through social media spotlights", "Worker meetings", "Symbolic recognition (certificates, small party mementos)"],
  },
  {
    category: "Practical Support",
    methods: ["Refreshments during campaign work", "Travel allowances where needed", "Physical materials (badges, caps, slips with party messages)"],
  },
  {
    category: "Direction and Purpose",
    methods: ["Clear task assignments with measurable outcomes", "Regular communication about campaign progress", "Explicit feedback on what their work is achieving"],
  },
  {
    category: "Retention Through Results",
    methods: ["When volunteers see campaign succeeding — increasing supporter identification, positive voter responses, electoral victories", "Commitment intensifies"],
  },
];

// ==========================================
// CANVASSING LOGISTICS
// ==========================================

export const canvassingTiming = [
  { time: "Morning hours", rationale: "Before agricultural/work schedules" },
  { time: "Evening hours", rationale: "After work returns" },
  { time: "Weekend days", rationale: "Maximum availability" },
];

export const followUpContact = {
  note: "First-time contact rarely converts a committed opposition voter",
  requirement: "Swing voters and probable supporters require 3-4 contacts before making a decision",
  tracking: "Booth diary tracks contact history and prompts follow-up canvassing",
};
