// Post-Election Scenario Planning Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g39-post-election-scenario-planning.md

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
// SCENARIO OUTCOMES
// ==========================================

export const electionScenarios = [
  {
    scenario: "Congress Majority (55-65 seats)",
    description: "Congress crosses majority threshold independently",
    probability: "Low-Medium",
    conditions: [
      "Malwa Jat Sikh and SC voter coalition materializes",
      "AAP defectors bring over 10 seats",
      "BJP splitting anti-AAP votes in 25-30 seats",
      "Youth vote mobilization exceeds projections",
    ],
    immediateActions: [
      "Form government within 24-48 hours",
      "Announce Chief Minister designate",
      "Begin transition planning",
      "Notify Governor immediately",
    ],
  },
  {
    scenario: "Hung Assembly (No Single Party Majority)",
    description: "No party achieves 59-seat majority",
    probability: "Medium",
    coalitionDynamics: [
      "Congress must seek coalition partners (45-55 seats)",
      "AAP will attempt coalition with smaller parties",
      "SAD-BJP alliance possible at 20-25 seats",
    ],
    keyTimeline: "72-hour window after results for coalition formation",
  },
  {
    scenario: "Congress Leading but Short of Majority (50-58 seats)",
    description: "Congress is largest party but needs coalition support",
    probability: "Medium-High",
    coalitionTargets: ["Left parties (3-5 seats)", "Independents (5-8 seats)", "小型BNK parties (2-4 seats)"],
    negotiationPriority: "Identify common minimum program within 48 hours",
  },
  {
    scenario: "AAP Retains Majority (60+ seats)",
    description: "AAP maintains or improves position",
    probability: "Low-Medium",
    conditions: [
      "Drug issue does not penetrate",
      "SC voters remain with AAP",
      "Malwa farmers do not shift",
      "BJP splitting Congress votes in Hindu constituencies",
    ],
    oppositionStrategy: "Leader of Opposition, committee assignments, 2029 Loksabha preparation",
  },
];

// ==========================================
// COALITION BUILDING FRAMEWORK
// ==========================================

export const coalitionReadinessFramework = {
  potentialPartners: [
    { party: "Left Parties (CPI-M, CPI)", seatPotential: "3-5 seats", alignment: "Progressive, anti-BJP", negotiationComplexity: "Low-Medium" },
    { party: "Independents", seatPotential: "5-8 seats", alignment: "Regional, local", negotiationComplexity: "High" },
    { party: "BSP", seatPotential: "1-2 seats", alignment: "SC voters", negotiationComplexity: "Medium" },
    { party: "SAD (post-election realignment)", seatPotential: "10-15 seats", alignment: "Sikh voters, anti-AAP", negotiationComplexity: "High" },
  ],
  coalitionAgreementEssentials: [
    "Common minimum program document",
    "Seat-sharing for government formation",
    "Portfolio allocation for coalition partners",
    "Decision-making framework (consensus vs. unilateral)",
    "Exit clause provisions",
  ],
};

// ==========================================
// POST-ELECTION COMMUNICATION FRAMEWORK
// ==========================================

export const communicationByScenario = {
  majorityWin: {
    tone: "Celebratory but responsible",
    keyMessages: [
      "Punjab has chosen Congress's vision for change",
      "Governance delivery begins immediately",
      "Accountability for all promises made",
    ],
    channels: ["Public rally", "Media briefing", "Social media", "WhatsApp chains"],
  },
  hungAssembly: {
    tone: "Constructive, coalition-building",
    keyMessages: [
      "Congress ready to serve all Punjabis",
      "Coalition government for stability",
      "Dialogue with all parties committed to Punjab's progress",
    ],
    channels: ["Private negotiations", "Public statements through authorized spokespersons", "Social media monitored"],
  },
  opposition: {
    tone: "Constructive opposition, accountability focus",
    keyMessages: [
      "Congress will vigilantly oppose and propose",
      "AAP's failures will be documented and highlighted",
      "Congress ready for 2029 Loksabha and future cycles",
    ],
    channels: ["Legislative tactics", "Media strategy", "Public mobilization"],
  },
};

// ==========================================
// GOVERNMENT FORMATION TIMELINE
// ==========================================

export const governmentFormationTimeline = [
  { day: "Day 1 (Result +0)", activity: "Results analysis, internal assessment", responsible: "Congress high command, PCC President" },
  { day: "Day 2 (Result +1)", activity: "Coalition outreach begins", responsible: "PCC President, negotiation team" },
  { day: "Day 3 (Result +2)", activity: "Coalition framework agreement", responsible: "Negotiation team, legal cell" },
  { day: "Day 4-5", activity: "Government formation formalities", responsible: "Congress high command, Governor's office" },
  { day: "Day 6+", activity: "Cabinet formation, transition planning", responsible: "CM designate, party organization" },
];

// ==========================================
// TRANSITION PLANNING
// ==========================================

export const transitionPlanningElements = {
  governancePriorityAreas: [
    "Drug abuse response strategy",
    "Agricultural distress mitigation",
    "Water crisis management",
    "Employment generation programs",
    "Law and order review",
  ],
  administrativeActions: [
    "Principal Secretary appointments",
    "Police leadership changes",
    "DC transfers in sensitive districts",
    "Board and corporation chair appointments",
  ],
  legislativeAgenda: [
    "First 100 days legislative priorities",
    "Budget session preparation",
    "Key executive orders ready for signature",
  ],
};

// ==========================================
// LAME DUCK PERIOD PREPARATION
// ==========================================

export const lameDuckPreparation = {
  ifOpposition: [
    "Document all governance failures systematically",
    "Establish MLA coordination in each constituency",
    "Prepare alternative budgets and policies",
    "Build case files on corruption/irregularities",
    "Strengthen booth-level organization for 2029",
  ],
  ifCoalitionPartner: [
    "Negotiate maximum concessions on policy priorities",
    "Ensure representation in every significant committee",
    "Maintain independent communication channels",
    "Plan for potential early elections",
  ],
};

// ==========================================
// ORGANIZATIONAL DEEPENING
// ==========================================

export const organizationalDeepeningActions = [
  {
    scenario: "All outcomes",
    actions: [
      "Retain all booth-level workers on payroll/incentive structure",
      "Convert campaign staff to permanent organizational staff",
      "Establish regular karyakarta contact protocol",
      "Build voter database for 2029 and beyond",
    ],
  },
  {
    scenario: "Opposition",
    additionalActions: [
      "Intensive membership drive",
      "Youth wing activation and recruitment",
      "Farmer and labor union relationship formalization",
      "Digital infrastructure for ongoing engagement",
    ],
  },
];

// ==========================================
// INTERNAL PARTY MANAGEMENT
// ==========================================

export const internalPartyManagement = {
  ticketDistributionAftermath: [
    "Winners: Integration into organization, briefing on legislative responsibilities",
    "Losers: Counseling, constructive role assignment, faction management",
    "Neutral: Systematic engagement to prevent desertion",
  ],
  factionManagement: [
    "Regional leaders given visible roles regardless of outcome",
    "Faction leaders included in decision-making bodies",
    "Clear communication channels to prevent rumor circulation",
    "Resource allocation to prevent competition within organization",
  ],
  leadershipSignaling: [
    "Clarity on Chief Minister candidate and succession",
    "Visible roles for all senior leaders",
    "Youth given significant responsibilities",
    "No perceived marginalization of defeated leaders",
  ],
};

// ==========================================
// CONSTITUENCY-LEVEL POST-ELECTION
// ==========================================

export const constituencyPostElection = [
  { responsibility: "Booth agent reports compilation", timeline: "48 hours post-results", purpose: "Document polling day incidents, margin verification" },
  { responsibility: "Margin analysis by booth", timeline: "72 hours", purpose: "Identify where votes were lost/won, data for future planning" },
  { responsibility: "Voter contact failure analysis", timeline: "1 week", purpose: "Understand why identified supporters did not vote" },
  { responsibility: "Opposition performance assessment", timeline: "1 week", purpose: "Evaluate what worked for AAP/SAD-BJP in each seat" },
  { responsibility: "Local issue documentation", timeline: "2 weeks", purpose: "Catalog local factors for future campaigns" },
];

// ==========================================
// LEGAL AND CONSTITUTIONAL PREPARATION
// ==========================================

export const legalPreparation = {
  alwaysReady: [
    "Election petition filing preparation (within 45 days of results)",
    "Vote counting challenge documentation",
    "Candidate qualification challenge预备",
    "ECI procedural compliance verification",
  ],
  ifDisputedResults: [
    "Recount petition grounds prepared for each close seat",
    "Legal counsel on standby for each district",
    "Evidence preservation from booth agents",
    "Witness statement collection from polling agents",
  ],
};

// ==========================================
// SCENARIO-SPECIFIC PREPAREDNESS CHECKLISTS
// ==========================================

export const preparednessChecklists = [
  {
    scenario: "Congress Majority",
    readinessItems: [
      "CM candidate briefed and ready for transition",
      "Chief Secretary identified and contacted",
      "Governor relationship managed",
      "Council of Ministers list prepared",
      "First decisions agenda drafted",
      "State budget position reviewed",
      "Key DC/SSP transfers identified",
    ],
  },
  {
    scenario: "Hung Assembly",
    readinessItems: [
      "Coalition negotiation team on standby",
      "Common minimum program draft prepared",
      "Seat-sharing framework for coalition",
      "Partner party relationship managers designated",
      "Legal cell ready for government formation procedures",
      "Governor communication strategy ready",
    ],
  },
  {
    scenario: "Opposition",
    readinessItems: [
      "LoP (Leader of Opposition) candidate identified",
      "Legislative party organization chart ready",
      "Committee assignment preferences prepared",
      "Media and communication strategy for opposition",
      "Booth-level organizational deeping plan activated",
      "2029 preparation roadmap drafted",
    ],
  },
];

// ==========================================
// DECISION-MAKING FRAMEWORK
// ==========================================

export const decisionMakingFramework = {
  authority: {
    governmentFormation: "Congress high command + PCC President",
    coalitionNegotiations: "Designated negotiation team (3-5 senior leaders)",
    publicStatements: "Authorized spokespersons only (2-3 designated)",
    seatSpecific: "Constituency MLAs/leadership within framework",
  },
  rapidResponse: {
    trigger: "Unexpected event or opponent move",
    authorization: "PCC President + Campaign Chair jointly",
    implementation: "Within 4 hours of trigger",
    communication: "Pre-approved statement templates ready",
  },
};
