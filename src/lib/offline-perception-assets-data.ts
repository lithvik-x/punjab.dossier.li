// Congress Offline Perception Assets Inventory for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g80-congress-offline-perception-assets-inventory.md

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
// PHYSICAL INFRASTRUCTURE
// ==========================================

export const partyOfficeNetwork = {
  stateHQ: {
    location: "Chandigarh",
    role: "Apex of party's organizational pyramid",
    strategicValue: "Signals party's state-level institutional capacity",
  },
  districtOffices: {
    count: 23,
    coverage: "All Punjab districts",
    role: "Coordinating hub for block-level and booth-level organization",
    assessmentCriteria: [
      "Physical condition (owned vs rented, maintenance, signage)",
      "Operational status (open daily vs seasonally)",
      "Leadership presence (senior leader visit frequency)",
      "Resource inventory (meeting space, event capacity)",
    ],
  },
  blockOffices: {
    count: 147,
    role: "Critical mid-tier - district strategy to booth-level execution",
    importance: "Often de facto public face of party between elections",
  },
  boothLevel: {
    estimatedCount: 23000,
    actualOffices: "Relatively rare - operates through booth president homes or informal gathering points",
    perceptionAsset: "Visible Congress presence (flag, poster, designated meeting point) at booth level",
  },
};

export const infrastructureAssessmentScoring = [
  {
    level: "State HQ (Chandigarh)",
    reach: 5,
    credibility: 5,
    activatability: 3,
    totalScore: 13,
    priority: "Maintain",
  },
  {
    level: "District Offices (23)",
    reach: 4,
    credibility: 4,
    activatability: 4,
    totalScore: 12,
    priority: "Strengthen",
  },
  {
    level: "Block Offices (147)",
    reach: 3,
    credibility: 3,
    activatability: 5,
    totalScore: 11,
    priority: "Activate",
  },
  {
    level: "Booth-Level Presence",
    reach: 2,
    credibility: 2,
    activatability: 5,
    totalScore: 9,
    priority: "Deploy",
  },
];

// ==========================================
// KARYAKARTA NETWORK
// ==========================================

export const karyakartaTierModel = [
  {
    tier: 1,
    name: "Core Activists",
    estimatedPercentage: "15-20% of claimed",
    estimatedCount: "45,000-60,000",
    description: "Consistent year-round party engagement",
    characteristics: [
      "Current and former elected representatives and their networks",
      "Party functionaries with formal positions",
      "Families with multi-generational Congress affiliation",
      "Individuals deriving social status/livelihood from party activity",
    ],
    strategicNote: "Reliable GOTV agents but may have entrenched positions resisting new candidate leadership",
  },
  {
    tier: 2,
    name: "Active Period Supporters",
    estimatedPercentage: "20-25%",
    estimatedCount: "60,000-75,000",
    description: "Engage actively during election cycles but limited off-season involvement",
    strategicNote: "Essential for intensive campaign periods; require activation protocols, refresher training, clear direction",
  },
  {
    tier: 3,
    name: "Passive Supporters",
    estimatedPercentage: "30-35%",
    estimatedCount: "90,000-105,000",
    description: "Identify with Congress, may attend events, wear symbols, vote consistently, but do not actively participate",
    conversionPotential: "Latent assets convertible to active engagement through targeted outreach",
  },
  {
    tier: 4,
    name: "Nominal Members",
    estimatedPercentage: "25-30%",
    estimatedCount: "75,000-90,000",
    description: "Connection to party is purely formal - name on membership list, occasional attendance, ancestral voting pattern",
    note: "Should be inventoried but not relied upon for active campaign execution",
  },
];

export const karyakartaDensityTargets = [
  { constituencyType: "Priority constituencies", target: "Minimum 1 active karyakarta per 75 voters at campaign intensity" },
  { constituencyType: "Defensive constituencies", target: "Minimum 1 active karyakarta per 100 voters" },
  { constituencyType: "Opportunity constituencies", target: "Maximum feasible activation, targeting 1 per 50 voters" },
];

export const activationProtocol = [
  "Personal invitation from known party workers rather than mass mobilization",
  "Specific task assignment with clear, achievable deliverables",
  "Minimal time commitment requests initially, expanding as engagement deepens",
  "Social recognition of contributions within peer networks",
  "Connection to candidates - passive supporters become active when directly connected to compelling candidate",
];

// ==========================================
// HISTORICAL LEGITIMACY ASSETS
// ==========================================

export const historicalLegacyAssets = {
  independenceEra: {
    description: "Pre-independence history provides reservoir of legitimate authority no other party can claim",
    assets: [
      "Role in freedom movement",
      "Association with iconic national leaders (Gandhi, Nehru, Patel)",
      "Institutional continuity across decades",
    ],
    emotionalValue: "Framework positioning Congress as 'the party that fought for and built this nation'",
  },
  punjabStatehood: {
    description: "Central role in Punjabi Suba movement and preservation of Punjab's linguistic/cultural identity",
    resonance: "Particularly among Punjabi-speaking Sikhs viewing Congress as protector of their identity",
  },
  nehruGandhiFamily: {
    description: "National prominence with deep Punjab connection",
    assets: [
      "Indira Gandhi's 1984 actions - defining memory for many Punjabis, particularly Hindu communities",
      "Rajiv Gandhi's later engagements with Punjab maintaining family connection",
    ],
  },
  sidhuFamily: {
    description: "Distinctive Punjabi political legacy bridging urban and rural constituencies",
    assets: [
      "Elder Sidhu's prominence as cricketer and politician",
      "Name recognition transcending generational preference",
      "Navjot Singh Sidhu's trajectory from AAP to Congress bringing legacy into Congress ecosystem",
    ],
    reach: "Recognition value in virtually every urban and semi-urban booth in Punjab",
  },
  amarinderSinghLegacy: {
    description: "Tenure as Chief Minister 2017-2022 provides recent administrative experience",
    assets: [
      "Government initiatives from 2017-2022 remain voter reference points",
      "Personal legitimacy as rural Sikh leader from royal lineage",
      "Credibility in Malwa constituencies newer leaders cannot match",
    ],
    complexity: "Relationship with Congress high command has been complex",
  },
};

// ==========================================
// COMMUNITY ORGANIZATIONS
// ==========================================

export const formalPartyWings = [
  {
    wing: "Punjab Pradesh Congress Committee (PPCC) Youth Congress",
    capacity: "Stronger urban presence, weaker rural penetration",
    deploymentNote: "Coordinate with local candidates to match volunteer skills with local knowledge",
  },
  {
    wing: "National Students' Union of India (NSUI)",
    capacity: "Campus presence enabling voter registration drives among first-time voters",
    strategicValue: "Conduit for communicating with young voters difficult to reach through traditional structures",
  },
  {
    wing: "Congress Women's Congress",
    capacity: "Formal structure exists but actual female participation constrained by rural social norms",
    challenge: "Translating female voter preference into active female karyakarta deployment",
  },
  {
    wing: "Scheduled Castes Congress",
    importance: "Critical given Punjab's ~32% SC population",
    challenge: "Congress's historical SC voter performance weaker than demographic suggests - indicates outreach gaps",
  },
];

export const communityNetworks = [
  {
    type: "Dera Connections",
    description: "Spiritual and social reform movements with significant follower bases",
    keyDeras: [
      { name: "Dera Sacha Sauda (Sirsa)", influence: "Significant in Malwa region", alignment: "Negotiation required" },
      { name: "Dera Sachkhand Ballan (Jalandhar)", influence: "Significant in Doaba and Majha", alignment: "Historical relationships vary" },
    ],
    strategy: [
      "Identify which Deras have sympathetic leadership toward Congress",
      "Identify which Deras are actively opposed",
      "Identify which Deras maintain political neutrality",
      "Resource deployment concentrated in zones where alignment is favorable or influenceable",
    ],
  },
  {
    type: "Gurdwara Connections",
    description: "Sikh religious institutions providing informal community networks",
    note: "While gurdwaras maintain institutional neutrality, individual SGPC members often have political alignments",
    regions: "Particularly relevant in Doaba and Majha where Sikh voters are concentrated",
  },
  {
    type: "Farmer Organizations",
    description: "Powerful farmer unions with complex political alignments",
    unions: "Bhartiya Kisan Union and its factions",
    opportunity: "Congress's historical identification with farmer interests (MSP, debt relief, agricultural policy)",
    strategy: "Farm union leaders who are Congress-sympathetic should be mapped at block level and incorporated into voter contact",
  },
];

// ==========================================
// PHYSICAL SYMBOLS
// ==========================================

export const congressHandSymbol = {
  description: "Raised open palm - among most instantly recognizable political symbols in Indian electoral politics",
  advantages: [
    "Universal recognition across literacy levels and language barriers",
    "Positive visual association - openness, welcome, offering",
    "Historical continuity with Congress's independence-era identity",
    "Simplicity of reproduction - easily painted, printed, displayed at minimal cost",
  ],
  deploymentModes: [
    { mode: "Wall paintings", description: "Most visible element of Congress ground presence in rural Punjab" },
    { mode: "Flags and banners", description: "Party offices, rallies, public events" },
    { mode: "Vehicles and transport", description: "Mobile visibility during campaigns" },
    { mode: "Merchandise", description: "Caps, badges, slips of paper distributed at rallies" },
  ],
};

export const symbolDensityStrategy = [
  { phase: "Traditional Congress strongholds", purpose: "Maintain perceived strength" },
  { phase: "Opportunity constituencies", purpose: "Create perceived momentum" },
  { phase: "Contested zones", purpose: "Counter opposition symbol dominance" },
];

// ==========================================
// ASSET SCORECARD
// ==========================================

export const consolidatedAssetScorecard = [
  {
    category: "Physical Infrastructure (offices)",
    reach: 3,
    credibility: 4,
    activatability: 3,
    rcsScore: 10,
    deployability: "Medium",
  },
  {
    category: "Karyakarta Network (active)",
    reach: 4,
    credibility: 5,
    activatability: 5,
    rcsScore: 14,
    deployability: "High",
  },
  {
    category: "Historical Legitimacy",
    reach: 5,
    credibility: 5,
    activatability: 3,
    rcsScore: 13,
    deployability: "Medium-High",
  },
  {
    category: "Community Organizations",
    reach: 3,
    credibility: 3,
    activatability: 4,
    rcsScore: 10,
    deployability: "Medium",
  },
  {
    category: "Ally Networks",
    reach: 2,
    credibility: 2,
    activatability: 3,
    rcsScore: 7,
    deployability: "Low",
  },
  {
    category: "Physical Symbols",
    reach: 4,
    credibility: 3,
    activatability: 5,
    rcsScore: 12,
    deployability: "High",
  },
];

// ==========================================
// REGIONAL DEPLOYMENT STRATEGY
// ==========================================

export const regionalAssetDeployment = [
  {
    region: "Malwa (69 seats)",
    primaryAssets: ["Karyakarta network", "Physical symbols", "Dera connections"],
    priorityDeployment: "Symbol density intensification, Dera-friendly zone targeting",
  },
  {
    region: "Majha (27 seats)",
    primaryAssets: ["Urban karyakarta network", "Sidhu family legacy", "Youth outreach"],
    priorityDeployment: "Youth activation, urban office strengthening",
  },
  {
    region: "Doaba (23 seats)",
    primaryAssets: ["SC karyakarta network", "Community organizations", "Farmer networks"],
    priorityDeployment: "SC voter mobilization, agricultural labor outreach",
  },
];

// ==========================================
// DEPLOYMENT TIMELINE
// ==========================================

export const deploymentTimeline = [
  {
    phase: "Pre-Campaign (90-60 days)",
    partyOffices: "Open all block offices; conduct staff meetings",
    karyakartas: "Inventory completion; tier 3-4 activation",
    historicalAssets: "Candidate background preparation; family legacy documentation",
    communityOrgs: "Relationship mapping; leader identification",
    symbols: "Baseline deployment; wall painting",
    allies: "Negotiation and alignment",
  },
  {
    phase: "Intensive Phase (60-15 days)",
    partyOffices: "Daily operation; visible activity",
    karyakartas: "Systematic voter contact; identification",
    historicalAssets: "Leader-specific messaging deployment",
    communityOrgs: "Coordinated outreach events",
    symbols: "Fresh painting; flag distribution",
    allies: "Coordinated events; joint voter contact",
  },
  {
    phase: "GOTV Phase (14-0 days)",
    partyOffices: "Full mobilization; hub for booth coordination",
    karyakartas: "GOTV execution; transport coordination",
    historicalAssets: "Reinforcement of stable leadership narrative",
    communityOrgs: "Integrated voter contact programs",
    symbols: "Maximum visibility push; merchandise saturation",
    allies: "Transfer agreement enforcement",
  },
];

// ==========================================
// GAP IDENTIFICATION
// ==========================================

export const bjpOrganizationalComparison = {
  bjpStrengths: [
    "Disciplined hierarchical structure from village to state",
    "Ideological motivation sustaining worker engagement between elections",
    "Sangh network extending into civil society organizations (RSS, VHP, BMS, ABVP)",
    "Systematic booth-level organization with year-round assigned responsibilities",
    "Central leadership coordination ensuring statewide message coherence",
  ],
  congressWeaknesses: [
    "Organizational continuity dependent on individual leaders rather than institutional systems",
    "Sporadic engagement - high activity during elections, minimal between cycles",
    "Factionalism fragmenting worker energy",
    "Limited civil society network integration",
    "Aging worker base with insufficient youth pipeline",
  ],
};

export const buildingVsLeveraging = [
  {
    category: "Building (Requires Sustained Investment)",
    items: [
      "Systematic booth-level organizational structure functioning year-round",
      "Youth recruitment pipeline converting NSUI/Youth Congress engagement into durable party involvement",
      "Civil society network integration - RWAs, professional associations, farmer groups",
      "Digital-merged-offline infrastructure - party offices with digital communication capability",
    ],
  },
  {
    category: "Leveraging (Can Be Activated短期内)",
    items: [
      "Existing karyakarta base - particularly tier 2 and tier 3 workers",
      "Historical legitimacy assets - require packaging and communication deployment",
      "Physical symbol inventory - flags, merchandise, painting capacity",
      "Community organization relationships - many informal relationships can be formalized",
    ],
  },
];

// ==========================================
// RESOURCE PRIORITY RECOMMENDATIONS
// ==========================================

export const resourcePriorities = [
  {
    priority: "Highest",
    item: "Karyakarta activation",
    description: "Convert Tier 3 passive supporters to Tier 1-2 active engagement",
    cost: "Low",
    impact: "High",
    timeframe: "60-90 days",
  },
  {
    priority: "High",
    item: "Symbol deployment intensification",
    description: "Wall paintings, flags, booth-level visibility",
    cost: "Low-Medium",
    impact: "Medium-High",
    timeframe: "60-0 days",
  },
  {
    priority: "High",
    item: "Block office activation",
    description: "Establish regular operational status at all 147 block offices",
    cost: "Medium",
    impact: "High",
    timeframe: "90-60 days",
  },
  {
    priority: "Medium",
    item: "Community organization formalization",
    description: "Convert informal relationships with farmer groups, youth organizations, civil society into structured voter contact agreements",
    cost: "Low",
    impact: "Medium",
    timeframe: "90-60 days",
  },
  {
    priority: "Lower (Long-Term)",
    item: "Party office ownership",
    description: "Transitioning from rented to owned facilities where financially feasible",
    cost: "High",
    impact: "Long-term",
    timeframe: "Multi-election cycle",
  },
];
