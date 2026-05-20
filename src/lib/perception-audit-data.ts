// @ts-nocheck
// Perception Audit & Strategy Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b22-perception-audit-strategy-formation.md

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
// PERCEPTION AUDIT METHODOLOGY
// ==========================================

export const partyPerceptionMetrics: PartyPerceptionMetrics = {
  partyIdStrength: {
    description: "Proportion of voters identifying Congress as 'their party'",
    historicalRange: "28-35% of electorate in Punjab",
  },
  institutionalTrust: {
    description: "Confidence in party's competence, integrity, commitment to Punjab",
    measuredThrough: ["Longitudinal surveys", "Focus groups", "Behavior tracking"],
  },
  retrospectiveEvaluation: {
    description: "Voter assessment of past Congress government performance",
    creates: "Governance credit or governance debt",
  },
  prospectiveEvaluation: {
    description: "Voter beliefs about future performance under Congress",
    drivers: "Often drives more vote switching than retrospective evaluation",
  },
};

export const leaderPerceptionMetrics: LeaderPerceptionMetrics = {
  favorabilityRatings: {
    description: "Positive vs negative sentiment toward leader",
    measurement: "Direct favorability questions with net calculation",
  },
  nameRecognition: {
    aided: "Correctly identify from list",
    unaided: "Correctly identify unprompted",
  },
  trustAndAuthenticity: {
    description: "Belief leader understands problems and will prioritize voter interests",
    stability: "More stable than favorability but harder to recover once lost",
  },
  leadershipTraitAttribution: {
    traits: ["Strong vs weak", "Honest vs calculating", "Decisive vs wavering", "Connected vs out-of-touch", "Young/energetic vs old/tired"],
    variationByDemographic: "Younger voters value energy/accessibility; older voters value experience/stability",
  },
};

export const issueOwnershipAnalysis: IssueOwnershipAnalysis[] = [
  {
    issue: "Economy and Jobs",
    owner: "Contestable",
    currentPerception: "AAP invested heavily in governance competence positioning",
    recoveryPotential: "Historical Congress strength through central government schemes",
  },
  {
    issue: "Agriculture and Farmer Welfare",
    owner: "Contestable",
    currentPerception: "AAP made inroads but has not fully displaced Congress perception",
    recoveryPotential: "Strong historical association through farm loan waivers, MSP advocacy",
  },
  {
    issue: "Drug Abuse and Law & Order",
    owner: "AAP",
    currentPerception: "AAP's defining 2022 issue",
    recoveryPotential: "Must document delivery gaps to contest",
  },
  {
    issue: "Water and Environment",
    owner: "Contestable",
    currentPerception: "Increasing voter concern about groundwater depletion",
    recoveryPotential: "Punjab-specific messaging rather than national positioning",
  },
  {
    issue: "Healthcare and Education",
    owner: "AAP",
    currentPerception: "AAP's state-level delivery mechanisms give current advantage",
    recoveryPotential: "Must identify specific delivery failures to contest credibly",
  },
];

export const voterSegmentClassifications: VoterSegmentClassification[] = [
  {
    segment: "Core Loyalists",
    estimatedPercentage: "18-22%",
    campaignReachability: "Unlikely to shift regardless of campaign",
    description: "Strong Congress ID, reliable voters",
  },
  {
    segment: "Soft Supporters",
    estimatedPercentage: "12-15%",
    campaignReachability: "Most campaign-reachable segment",
    description: "Leaning Congress but not firmly committed",
  },
  {
    segment: "Tactical Switchers",
    estimatedPercentage: "8-10%",
    campaignReachability: "Must be won back",
    description: "Voted Congress 2022 but considering alternatives",
  },
  {
    segment: "Convertible Opponents",
    estimatedPercentage: "15-18%",
    campaignReachability: "Open to Congress under specific conditions",
    description: "Normally vote for other parties",
  },
  {
    segment: "Deep Opposition",
    estimatedPercentage: "35-40%",
    campaignReachability: "Not campaign-reachable in significant numbers",
    description: "Firm AAP or other party identification",
  },
];

export const deraLandscape: DeraLandscape[] = [
  {
    name: "Dera Sacha Sauda",
    location: "Sirsa ( Haryana)",
    followerBase: "Significant in Malwa region",
    mobilizationCapacity: "Can deliver votes en masse",
    politicalAlignment: "Negotiation required",
  },
  {
    name: "Dera Sachkhand Ballan",
    location: "Jalandhar",
    followerBase: "Significant in Doaba and Majha",
    mobilizationCapacity: "Substantial voter influence",
    politicalAlignment: "Historical relationships vary",
  },
  {
    name: "Radha Soami Beas",
    location: "Beas",
    followerBase: "Urban and semi-urban across Punjab",
    mobilizationCapacity: "Moderate influence",
    politicalAlignment: "Generally apolitical",
  },
];

// ==========================================
// CAMPAIGN STRATEGY FORMATION
// ==========================================

export const campaignObjectives: CampaignObjectives = {
  tier1: {
    type: "Seat Target",
    description: "Winning 55-65 seats in 117-member assembly",
    target: "59 seats for majority",
    requiredVoteShare: "35-38% (up from 23% in 2022)",
  },
  tier2: {
    type: "Vote Shift Targets",
    regionalTargets: [
      { region: "Malwa", target: "Convert 15-18% of 2022 AAP voters to Congress", currentAAPVotersToConvert: "15-18%" },
      { region: "Majha", target: "Maintain baseline while recovering Sikh voter support", currentAAPVotersToConvert: "Maintain + recover" },
      { region: "Doaba", target: "Strong improvement among SC voters, particularly youth", currentAAPVotersToConvert: "Significant improvement needed" },
    ],
  },
  tier3: {
    type: "Perception Movement Targets",
    metrics: [
      "Favorability movement (+/- points versus baseline)",
      "Issue ownership perception shifts",
      "Voter engagement levels",
      "Media effectiveness (ad recall, message penetration)",
    ],
  },
};

export const victoryPathways: VictoryPathway[] = [
  {
    name: "Malwa Dominance",
    description: "Winning 35+ seats in Malwa through Jat Sikh and SC voter coalition",
    seatTarget: 35,
    keyStrategy: "Regional-specific solutions for Malwa's agricultural distress and drug abuse",
  },
  {
    name: "Regional Balance",
    description: "Strong performance across all three regions",
    seatTarget: "20+ Malwa, 15+ Majha, 15+ Doaba",
    keyStrategy: "Balanced coalition building across regional demographics",
  },
  {
    name: "Opposition Split",
    description: "Capitalizing on SAD-BJP alliance fractures while containing AAP",
    seatTarget: "Variable depending on alliance breakdown",
    keyStrategy: "Strategic positioning against AAP while SAD-BJP tensions exploited",
  },
];

export const resourceAllocation: ResourceAllocation[] = [
  { category: "Media and Advertising", percentage: "30-35%", description: "Paid media, digital, outdoor, printed materials" },
  { category: "Field Operations", percentage: "25-30%", description: "Ground staff, volunteer coordination, voter contact, GOTV" },
  { category: "Research and Analytics", percentage: "5-8%", description: "Ongoing tracking, data infrastructure, analytics platforms" },
  { category: "Party Infrastructure", percentage: "15-20%", description: "Organizational capacity, training, logistics" },
  { category: "Communications", percentage: "10-15%", description: "Spokesperson travel, rapid response, earned media" },
];

export const timelinePhases: TimelinePhase[] = [
  {
    phase: "Foundation",
    timing: "60+ Days Out",
    focus: ["Complete perception audit baseline", "Finalize candidate selection", "Establish infrastructure", "Begin platform development"],
    keyActivities: ["Voter contact in soft supporter segments", "Dera coordination", "Early narrative seeding"],
  },
  {
    phase: "Acceleration",
    timing: "30-60 Days Out",
    focus: ["Launch master narrative", "Paid media campaign", "Intensive voter contact", "GOTV infrastructure activation"],
    keyActivities: ["Community-specific outreach", "Reactive communications to opposition"],
  },
  {
    phase: "Sprint",
    timing: "7-30 Days Out",
    focus: ["Peak media intensity", "High-frequency voter contact", "Event-driven campaigning", "Direct contrast advertising"],
    keyActivities: ["Rallies, public meetings", "Early voting mobilization", "Message discipline enforcement"],
  },
  {
    phase: "Finale",
    timing: "Final 7 Days",
    focus: ["Maximum resource deployment", "Last-mile voter contact", "GOTV operations", "Rumor control"],
    keyActivities: ["Comfort messaging to supporters", "Final persuasion for undecided"],
  },
];

export const masterNarrative: MasterNarrative = {
  theme: "Punjab's Renaissance",
  coreElements: {
    diagnosis: "Punjab has lost its way - drugs have destroyed families, unemployment has driven youth away",
    villain: "The incumbent government's broken promises and incompetence - systemic failure despite full governing authority",
    solution: "Congress's proven track record combined with renewed commitment and fresh approach",
    hero: "The people of Punjab - their resilience, potential, desire for change - with Congress as the instrument",
  },
  emotionalResonance: "Authentic without being divisive, credible given Congress record, differentiated from AAP 2022 narrative",
  sustainabilityCriteria: [
    "Emotionally resonant without being divisive",
    "Credible given Congress's own governance record",
    "Differentiated from AAP's 2022 narrative",
    "Adaptable to evolving campaign circumstances",
  ],
};

export const regionalSubNarratives: SubNarrative[] = [
  {
    audience: "Malwa Voters",
    region: "Malwa",
    focus: "Drug abuse as primary concern, agricultural distress, youth unemployment",
    keyMessages: ["Congress understands Malwa's specific challenges", "Regional-specific solutions", "Jat Sikh pride and SC community empowerment"],
  },
  {
    audience: "Majha Voters",
    region: "Majha",
    focus: "Historical Congress heartland narrative, border security, agricultural economy",
    keyMessages: ["Congress's tradition of representing Majha", "Security concerns addressed", "Agricultural prosperity focus"],
  },
  {
    audience: "Doaba Voters",
    region: "Doaba",
    focus: "SC population majority - social justice, employment, dignity, representation",
    keyMessages: ["Dignity and representation", "Economic opportunity", "Dera-resonant values"],
  },
  {
    audience: "Mazhabi Sikh Community",
    community: "SC",
    focus: "Empowerment, dignity, protection from drug trafficking, economic opportunity",
    keyMessages: ["Congress as protector", "Economic opportunity", "Dignity assurance"],
  },
  {
    audience: "Urban Middle Class",
    focus: "Governance competence, service delivery, tax efficiency, law and order",
    keyMessages: ["Competence delivery", "Service quality", "Efficient governance"],
  },
];

export const emotionalArchitecture: EmotionalArchitecture = {
  pathway: [
    { step: "Acknowledgment", description: "Demonstrate understanding of Punjab's struggles", objective: "Voters must feel heard before listening" },
    { step: "Aspiration", description: "Paint picture of prosperous, safe, united Punjab", objective: "Concrete vision not abstract rhetoric" },
    { step: "Agency", description: "Give voters sense of their own power", objective: "Change is possible, vote is the instrument" },
    { step: "Urgency", description: "Create appropriate time pressure", objective: "Clear-eyed stakes, no fear-mongering" },
    { step: "Confidence", description: "Reassure Congress can deliver", objective: "Historical evidence and candidate credibility" },
  ],
  toneCalibration: [
    "Authenticity over polish",
    "Directness over political correctness",
    "Strength without aggression",
    "Optimism without naivety",
  ],
};

export const messageHierarchy: MessageHierarchy = {
  umbrellaMessage: "Congress will restore Punjab's greatness through governance that delivers",
  coreMessages: [
    "AAP has failed on drugs and law and order despite promises",
    "Congress has a real plan for jobs and economic opportunity",
    "Congress understands Punjab's culture and will protect Punjabi identity",
    "Congress candidates are committed to serving, not just winning",
  ],
  supportingPoints: "Specific facts, statistics, evidence - varies by audience and medium but connects to core messages",
};

export const narrativeTesting: NarrativeTesting = {
  methodology: "Qualitative (focus groups, depth interviews) + Quantitative (message testing surveys, aided recall)",
  timing: "8-10 weeks: concept testing; 6-8 weeks: refinement; 4-6 weeks: final validation; Ongoing through campaign",
  metrics: ["Attitude shift", "Behavioral intention", "Aided recall", "Net promoter score"],
};
