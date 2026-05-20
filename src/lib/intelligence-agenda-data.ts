// Congress Agenda Conception from Intelligence Playbook for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g82-congress-agenda-conception-from-intelligence-playbook.md

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
// INTELLIGENCE SYNTHESIS PROTOCOL
// ==========================================

export const tierBriefSystem = [
  {
    tier: 1,
    name: "Executive Brief",
    pages: "5 pages maximum",
    audience: "Campaign Chair, Campaign Committee, Central Leadership",
    contents: [
      "One-paragraph situation assessment",
      "Top 5 priority issues ranked by electoral impact",
      "Top 3 strategic opportunities",
      "Top 2 risks",
      "Recommended priority for next 30 days",
    ],
    productionTime: "5 working days from corpus completion",
    updateFrequency: "Bi-weekly",
  },
  {
    tier: 2,
    name: "Deep Dive",
    pages: "20 pages",
    audience: "Strategy Cell, Zone Coordinators, Research Director",
    contents: [
      "Detailed analysis of each priority issue",
      "Voter segmentation, regional variation, trend data",
      "AAP positioning, BJP positioning",
      "Comparative narrative analysis",
      "Voter sentiment trends by region",
      "Competitive positioning map",
    ],
    productionTime: "8 working days from corpus completion",
    updateFrequency: "Monthly",
  },
  {
    tier: 3,
    name: "Raw Data Archive",
    audience: "Research Director, specialist analysts on request",
    contents: [
      "Full document corpus organized by topic cluster",
      "Data tables, source documentation",
      "Methodology notes, confidence ratings per data point",
    ],
    productionTime: "Ongoing (rolling additions)",
    updateFrequency: "Continuous",
  },
];

export const briefTemplate = `
INTELLIGENCE BRIEF — EXECUTIVE SUMMARY
Campaign: Punjab Congress 2027
Date: [DATE]
Classification: INTERNAL

1. SITUATION ASSESSMENT (150 words)
[One paragraph: what the intelligence shows about the current electoral landscape]

2. TOP 5 PRIORITY ISSUES (ranked by electoral impact)
#1: [Issue] — [2-sentence rationale including data citation]
#2: [Issue] — [2-sentence rationale]
...

3. TOP 3 STRATEGIC OPPORTUNITIES
[What AAP/BJP vulnerabilities does the intelligence reveal?]

4. TOP 2 RISKS
[What could go wrong based on current intelligence?]

5. 30-DAY RECOMMENDED PRIORITY
[One sentence: the single most important thing to do next]
`;

// ==========================================
// CONVERSION FRAMEWORK STAGES
// ==========================================

export const conversionPipeline = [
  {
    stage: 1,
    name: "Intelligence Synthesis",
    output: "5-page executive brief",
    owner: "Research Director + 2 analysts",
    timeline: "5 working days",
    qualityGate: "Does it change any assumption?",
  },
  {
    stage: 2,
    name: "Strategic Options Generation",
    output: "3 alternative agenda packages",
    owner: "Strategy Cell + Regional Leads",
    timeline: "4 working days",
    qualityGate: "Are options genuinely distinct?",
  },
  {
    stage: 3,
    name: "Agenda Decision",
    output: "Selected agenda with priorities",
    owner: "Campaign Committee + Final veto: Campaign Chair",
    timeline: "2 working days",
    qualityGate: "Is the decision documentable?",
  },
  {
    stage: 4,
    name: "Messaging Development",
    output: "Master message book + talking points",
    owner: "Comms Team + Zone Coordinators",
    timeline: "3 working days",
    qualityGate: "Can a karyakarta recite it?",
  },
];

// ==========================================
// STRATEGIC OPTIONS GENERATION
// ==========================================

export const strategicOptions = [
  {
    option: "A",
    name: "National Narrative Override",
    frame: "Congress vs BJP / Democracy vs Autocracy",
    useWhen: [
      "BJP announces Punjab-specific campaign",
      "National security issues spike",
      "Central leadership requires nationalist frame",
    ],
    intelligenceBasis: [
      "Hindu upper-caste urban vote",
      "Traditional Congress loyalists",
      "Swing voters motivated by democratic norms",
    ],
    risk: "May not land in rural Malwa where farmer debt dominates",
  },
  {
    option: "B",
    name: "Farmer-First Economic Narrative",
    frame: "Agricultural distress as the defining Punjab crisis",
    useWhen: [
      "Farm debt data is fresh",
      "MSP protests are active",
      "International news highlights Punjab agriculture",
    ],
    intelligenceBasis: [
      "68% of Malwa seats have agriculture as primary voter concern",
      "Jat Sikh voter intensity on this issue",
    ],
    risk: "AAP owns farmer welfare messaging since 2022 - differentiation required",
  },
  {
    option: "C",
    name: "Youth and Jobs Narrative",
    frame: "Unemployment and out-migration as the moral crisis",
    useWhen: [
      "Youth voter turnout data shows anger",
      "Migration stories circulate on social media",
      "Economic data on Punjab joblessness is in news",
    ],
    intelligenceBasis: [
      "18-35 voter cohort is largest single group",
      "Their top issue is economic opportunity not identity politics",
    ],
    risk: "Congress historically weak on economic credibility with this cohort",
  },
  {
    option: "D",
    name: "Anti-Corruption and Governance",
    frame: "AAP's 5-year governance failure as the dominant story",
    useWhen: [
      "AAP gaffes provide openings",
      "Specific governance failures are documentable",
      "Local corruption cases are fresh",
    ],
    intelligenceBasis: [
      "Urban voter frustration with AAP",
      "Middle-class disgust with Bhola greasing",
      "Class IV government employee grievances",
    ],
    risk: "Negative framing without positive alternative can depress turnout",
  },
];

export const optionsDistinctivenessCriteria = [
  "Which voter segment each option targets as primary",
  "What the other two options are deliberately not doing",
  "What a voter in Fazilka would hear differently under each option",
];

// ==========================================
// DECISION-MAKING PROCESS
// ==========================================

export const decisionSequence = [
  {
    step: 1,
    name: "Data Decision",
    owner: "Strategy Cell",
    description: "Technical recommendation with explicit criteria",
    criteria: [
      "Which option best matches voter priority data",
      "Which option addresses most winnable voter segments",
      "Which option creates sharpest contrast with AAP",
      "Which option is executable with available resources",
    ],
    output: "One-page memo",
  },
  {
    step: 2,
    name: "Political Assessment",
    owner: "Campaign Chair + Regional Leads",
    description: "Regional leads have veto authority for their zone",
    requirement: "Must articulate why with evidence, not just instinct",
  },
  {
    step: 3,
    name: "Final Decision",
    owner: "Campaign Committee",
    description: "Ratified with documented vote; dissenting opinions recorded",
    decisionDocument: [
      "Which option selected",
      "Top 3 priority issues within selected option (ranked)",
      "Regional adaptation rules",
      "Single non-negotiable message",
      "Decision window: 45 days unless Trigger Event occurs",
    ],
  },
];

// ==========================================
// TRIGGER EVENT PROTOCOL
// ==========================================

export const triggerCategories = [
  {
    category: 1,
    name: "Immediate Recalibration",
    examples: ["BJP announces Punjab CM face", "AAP top leader arrested", "Major security incident"],
    decisionWindow: "48 hours",
    responseLevel: "Full Campaign Committee",
  },
  {
    category: 2,
    name: "Substantive Review",
    examples: ["Farmer protest turns violent", "Large Dera leader endorses BJP", "Economic crisis announcement"],
    decisionWindow: "7 days",
    responseLevel: "Strategy Cell + Campaign Chair",
  },
  {
    category: 3,
    name: "Monitor Only",
    examples: ["AAP gaffe without follow-through", "BJP state-level statement", "Minor corruption allegation"],
    decisionWindow: "14 days",
    responseLevel: "Research Director assessment",
  },
  {
    category: 4,
    name: "No Response",
    examples: ["Social media attack without media pickup", "Opposition internal statements"],
    responseLevel: "Log and monitor",
  },
];

export const decisionWindowRule = {
  rule: "72-hour rule",
  description: "If decision is not made within 72 hours, existing agenda continues unchanged",
  implication: "Indecision is a decision to hold current agenda; silence is not neutrality",
};

// ==========================================
// MESSAGE DISCIPLINE FRAMEWORK
// ==========================================

export const messageHierarchy = [
  {
    layer: 1,
    name: "Central Narrative",
    type: "Non-Negotiable",
    description: "Campaign Committee-approved top 3 issues",
    requirement: "Every public utterance by every Congress candidate must touch at least one of these three",
  },
  {
    layer: 2,
    name: "Regional Adaptation",
    type: "Permitted",
    description: "Zone Coordinators can elevate locally-relevant issue as secondary priority",
    conditions: [
      "Does not contradict central narrative",
      "Documented and approved by Strategy Cell",
      "Shared with other zone coordinators to check for contradictions",
    ],
  },
  {
    layer: 3,
    name: "Local Issues",
    type: "Allowed but Flagged",
    description: "Individual candidates may raise hyperlocal issues",
    rule: "Permitted as long as additive, not replacements for central narrative",
    offMessageDefinition: "If a candidate cannot articulate how local issue connects to Layer 1 priority, they are off-message",
  },
];

export const disciplineMechanism = {
  weeklyComplianceReport: [
    "Media monitoring of all Congress candidates' public statements",
    "Social media sampling of candidate accounts",
    "Zone Coordinator spot checks (5 karyakartas per district per week)",
  ],
  redFlagCriteria: "Any candidate whose most-mentioned issue in a week does not connect to Layer 1",
  redFlagResponse: [
    "30-minute call from Zone Coordinator within 48 hours",
    "Second red flag in 30 days triggers Campaign Committee review of candidate's campaign support",
  ],
};

// ==========================================
// CASCADE COMMUNICATION PLAN
// ==========================================

export const cascadeTimeline = [
  { tPlus: "T+0", action: "Decision made by Campaign Committee", recipient: "-" },
  { tPlus: "T+4 hours", action: "Zone Coordinators receive full decision brief + regional adaptation guidelines", recipient: "Zone Coordinators" },
  { tPlus: "T+8 hours", action: "Zone Coordinators brief Regional Presidents (in person or phone, not email)", recipient: "Regional Presidents" },
  { tPlus: "T+24 hours", action: "District Presidents receive 1-page summary + top 3 talking points", recipient: "District Presidents" },
  { tPlus: "T+48 hours", action: "Candidates receive master message book + regional adaptation document", recipient: "Candidates" },
  { tPlus: "T+72 hours", action: "Karyakarta training materials distributed through WhatsApp chain (visual format)", recipient: "Karyakartas" },
  { tPlus: "T+96 hours", action: "Zone Coordinators conduct random spot checks (5 karyakartas per district)", recipient: "-" },
  { tPlus: "T+120 hours", action: "Research Director issues first compliance report", recipient: "-" },
];

export const stakeholderDocuments = [
  { stakeholder: "Campaign Committee", document: "Full decision brief", length: "5 pages", delivery: "Physical + digital" },
  { stakeholder: "Zone Coordinators", document: "Full brief + regional adaptation guide", length: "12 pages", delivery: "Physical briefing" },
  { stakeholder: "Regional Presidents", document: "Summary + regional adaptation", length: "2 pages", delivery: "Digital + verbal follow-up" },
  { stakeholder: "District Presidents", document: "1-page summary + talking points", length: "1 page", delivery: "WhatsApp + digital" },
  { stakeholder: "Candidates", document: "Master message book", length: "15 pages", delivery: "Physical package + digital" },
  { stakeholder: "Karyakartas", document: "Visual message card", length: "1 page image", delivery: "WhatsApp chain" },
];

export const verbalFollowUpRule = {
  rule: "Zone Coordinators must follow up every digital communication with verbal call to Regional President within 24 hours",
  reason: "Digital communication averages 40% read rate; the call gets to 100%",
};

// ==========================================
// SUCCESS METRICS
// ==========================================

export const successMetrics = [
  {
    metric: "Voter Issue Recall (Bi-weekly)",
    method: "Ask 500 registered voters per district (3 districts per zone, 9 districts total, 4,500 respondents per wave)",
    questions: [
      "What is the most important issue facing Punjab today?",
      "What issue do you most associate with Congress?",
      "What issue do you most associate with AAP?",
    ],
    target: "Congress issue recall moves from current baseline to top-2 association within 60 days",
    recalibrationTrigger: "If AAP holds top-2 association on target issue after 60 days, agenda not breaking through",
  },
  {
    metric: "Media Coverage Analysis (Weekly)",
    method: "Track whether media stories about Congress are about intended issues or unintended issues",
    tracking: [
      "Count stories using campaign's designated priority issue language",
      "Count stories using alternative issue language",
      "Measure sentiment ratio: positive-to-negative on designated issues",
    ],
    target: "60% of Congress-related media coverage must use intended agenda language within 45 days",
    recalibrationTrigger: "If unintended issues dominate for two consecutive weeks, agenda not controlling narrative",
  },
  {
    metric: "Perception Survey (Monthly)",
    sample: "Professional survey of 2,000 Punjab voters",
    questions: [
      "Best party to handle [top issue]",
      "Trust on [top 3 issues] by party",
      "Candidate quality perception vs AAP candidate quality",
    ],
    target: "Congress closes gap with AAP on 'best party to handle [top issue]' by 10 percentage points within 90 days",
    recalibrationTrigger: "If gap does not close, Strategy Cell must produce modification recommendation",
  },
];

export const changeCourseCriteria = [
  "Two of three metrics failing targets for two consecutive measurement periods, AND",
  "Strategy Cell produces data-backed alternative recommendation, AND",
  "Campaign Committee vote to change exceeds 60% supermajority (not simple majority)",
];

// ==========================================
// 90-DAY SPRINT PROTOCOL
// ==========================================

export const ninetyDayCalendar = [
  {
    phase: "Lock-In",
    days: "-90 to -75",
    keyActions: [
      "Final agenda decision confirmed by Campaign Committee",
      "Master message book distributed to all candidates",
      "Zone Coordinator adaptation documents finalized",
      "Karyakarta training completed (all zones)",
      "Metric baselines established (all three measurement streams)",
    ],
    owner: "Campaign Committee",
    lockStatus: "AGENDA LOCKED",
  },
  {
    phase: "Narrative Intensification",
    days: "-75 to -60",
    keyActions: [
      "All public events use locked agenda language exclusively",
      "Media buys focused on top 2 priority issues",
      "Social media content calendar locked",
      "Red flag compliance process begins",
    ],
    owner: "Comms Team",
    lockStatus: "NO CHANGE",
  },
  {
    phase: "Ground Game Alignment",
    days: "-60 to -30",
    keyActions: [
      "Booth-level karyakarta issue briefings",
      "Candidate debate prep focused on agenda talking points",
      "Negative contrast ads against AAP on top issue launched",
      "Weekly metric reviews - any zone below 50% compliance gets intervention",
    ],
    owner: "Zone Coordinators",
    lockStatus: "NO CHANGE",
  },
  {
    phase: "Pre-Election Silence Period Preparation",
    days: "-30 to -15",
    keyActions: [
      "All advertising finalized and cleared",
      "Candidate manifestos reviewed for agenda consistency",
      "Comms team prepares pre-silence-period media blitz",
      "Contingency scripts prepared for unexpected events during silence period",
    ],
    owner: "Comms + Strategy",
    lockStatus: "ADS LOCKED",
  },
  {
    phase: "Silence Period",
    days: "-15 to -7",
    keyActions: [
      "No new policy announcements by candidates",
      "Existing positive narrative ads continue (no new creative)",
      "Social media switches to engagement content",
      "Zone Coordinators conduct final compliance verification",
    ],
    owner: "Zone Coordinators",
    lockStatus: "TOTAL LOCK",
  },
  {
    phase: "Lock-Down",
    days: "-7 to -1",
    keyActions: [
      "No changes to any public-facing message",
      "All candidate statements reviewed by Zone Coordinator before release",
      "Research Director on 24-hour standby for emergency briefs",
      "Comms Team ready with pre-approved silence period scripts only",
    ],
    owner: "All",
    lockStatus: "ABSOLUTE LOCK",
  },
  {
    phase: "Election Day",
    days: "0",
    keyActions: [
      "Single message card to all karyakartas (one page, top 3 issues, one contrast statement)",
      "No new announcements",
      "Existing narrative reinforced at every voter contact point",
    ],
    owner: "All",
    lockStatus: "SILENCE",
  },
];

// ==========================================
// SILENCE PERIOD RULES
// =========================================

export const silencePeriodRules = [
  "No new advertisements (political or issue)",
  "No new press releases from candidates",
  "No new policy proposals",
  "Social media restricted to pre-approved content only",
  "Zone Coordinators have authority to pull any content violating silence period rules",
  "Any violation triggers immediate Comms Team intervention and Campaign Committee notification within 2 hours",
];
