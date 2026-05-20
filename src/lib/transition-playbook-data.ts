// Transition Playbook Data for Punjab Congress - Campaign to Governance
// Derived from: research-M2/MP10-predictive-outcomes/futures/transition-playbook.md
// Task ID: T-MP10-FUTR-003 | Pillar: MP10 — Predictive Outcomes & Future Planning
// Date Documented: 19 May 2026 | Status: COMPLETE

import type {
  TransitionPlaybook,
  TransitionPlaybookMetadata,
  TransitionCommitteeRole,
  TransitionPhaseDetail,
  PromiseKPIConversion,
  TrackingInfrastructure,
  CampaignAssetMapping,
  KnowledgePreservation,
  CampaignRoleMapping,
  TransitionPrinciples,
  MessagingDimension,
  CommunicationMilestone,
  OppositionAssetRepurposing,
  OppositionPlaybook,
  CoalitionScenario,
  TransitionRisk,
  CriticalSuccessFactor,
  ConfidenceNote,
  ManifestoPromise,
  Day1to7Plan,
  Day8to30Plan,
  Day31to100Plan,
} from "../types/transition-playbook-types";

// ==========================================
// METADATA
// ==========================================

const TRANSITION_PLAYBOOK_METADATA: TransitionPlaybookMetadata = {
  taskId: "T-MP10-FUTR-003",
  pillar: "MP10 — Predictive Outcomes & Future Planning",
  subPillar: "FUTR — Futures & Scenario Planning",
  dependencies: "FUTR-001 (Post-Election Scenarios) COMPLETE",
  dateDocumented: "19 May 2026",
  status: "COMPLETE",
  dataConfidence:
    "Framework-level — structural models based on Indian governance transition norms. Specific personnel and dates marked VERIFICATION_NEEDED.",
};

// ==========================================
// TRANSITION TEAM STRUCTURE
// ==========================================

const TRANSITION_COMMITTEE_ROLES: TransitionCommitteeRole[] = [
  {
    role: "Transition Chair",
    responsibility: "Overall coordination, CM interface",
    suggestedProfile:
      "Senior Congress leader, former minister with Punjab governance experience",
  },
  {
    role: "Chief of Staff Designate",
    responsibility: "CM's Office setup, scheduling, protocol",
    suggestedProfile: "Bureaucratic veteran or experienced political operative",
  },
  {
    role: "Policy Lead",
    responsibility: "Manifesto-to-governance conversion",
    suggestedProfile:
      "Former bureaucrat or policy researcher with Punjab sectoral knowledge",
  },
  {
    role: "Personnel Lead",
    responsibility: "Appointments, cabinet formation, board nominations",
    suggestedProfile:
      "Senior party organizer with knowledge of MLAs and talent pool",
  },
  {
    role: "Intelligence Lead",
    responsibility:
      "Campaign war room to CM monitoring unit handover",
    suggestedProfile: "CryptoMize/designated analytics lead",
  },
  {
    role: "Communications Lead",
    responsibility: "Messaging transition, media management",
    suggestedProfile:
      "Senior spokesperson with government communication experience",
  },
  {
    role: "Legal Counsel",
    responsibility:
      "Constitutional procedures, oath administration, legal compliance",
    suggestedProfile: "Constitutional lawyer or former Advocate General",
  },
  {
    role: "Outreach Lead",
    responsibility:
      "Stakeholder liaison (farmers, industry, religious bodies, media)",
    suggestedProfile: "Leader with established cross-community relationships",
  },
];

const TRANSITION_PHASES: TransitionPhaseDetail[] = [
  {
    phase: "T-0",
    name: "Pre-Result Preparation",
    timeline: "January 2027",
    actions: [
      "Committee formed",
      "Transition documents drafted",
      "Key decisions pre-mapped",
    ],
  },
  {
    phase: "T-1",
    name: "Result Day to Oath",
    timeline: "Results + 1 to +5 days",
    actions: [
      "Claim formation",
      "Governor meeting",
      "Oath ceremony preparation",
      "Security arrangements",
    ],
  },
  {
    phase: "T-2",
    name: "First Week",
    timeline: "Day 1-7",
    actions: [
      "CM oath",
      "Cabinet formation begins",
      "Key bureaucratic appointments",
    ],
  },
  {
    phase: "T-3",
    name: "First Month",
    timeline: "Day 8-30",
    actions: [
      "Priority manifesto actions",
      "Delivery tracking establishment",
    ],
  },
  {
    phase: "T-4",
    name: "First Hundred Days",
    timeline: "Day 31-100",
    actions: [
      "Institutional establishment",
      "Review mechanisms",
      "Mid-course corrections",
    ],
  },
];

// ==========================================
// DAY 1-7 PLAN
// ==========================================

const DAY_1_TO_7_PLAN: Day1to7Plan = {
  day1: {
    day: "Day 1 (Oath Day)",
    actions: [
      "CM takes oath of office and secrecy. Location: Raj Bhavan or large public venue",
      "First statement: Unity message, commitment to all Punjabis regardless of voting preference",
      "Key symbolic action: Visit to a site representing Congress's top manifesto commitment (e.g., farm debt relief announcement at a mandi, or drug rehabilitation center visit)",
      "Security and protocol team activated",
    ],
    notes: [
      "VERIFICATION_NEEDED: standard Punjab CM oath venue",
    ],
  },
  day1to2: {
    actions: [
      "CM holds first meeting with Chief Secretary and Director General of Police",
      "Direct all departments to prepare status reports on pending schemes, financial commitments, and legal cases",
      "Freeze major outgoing contracts/appointments made by outgoing government in last 30 days (lame-duck period review)",
    ],
  },
  day2to5: {
    actions: [
      "Cabinet formation: Balance by region (Malwa/Majha/Doaba), caste, gender, and competence",
    ],
    cabinetTarget: "15–18 ministers (Punjab cabinet maximum is 18, per constitutional limit of 15% of 117 = 17.55, rounded to 18)",
    keyPortfolios: [
      "Finance",
      "Home",
      "Revenue",
      "Agriculture",
      "Health",
      "Education",
      "Rural Development",
      "Industry",
    ],
    regionalTargets: {
      ministersPerRegion: 3,
      minimumWomen: 2,
      communityBalance: ["Sikh", "Hindu", "Dalit balance per Punjab demographics"],
    },
  },
  day5to7: {
    actions: [
      "First cabinet meeting: Pass resolution on top 3 manifesto commitments with timelines",
      "Notify Governance Delivery Unit (GDU) formation",
      "Issue first communication to all Deputy Commissioners: governance expectations, zero-tolerance on corruption, accessibility mandate",
    ],
    firstCabinetMeetingFocus: "Top 3 manifesto commitments with timelines",
    governanceDeliveryUnitNote: "Successor to the campaign war room",
  },
};

// ==========================================
// DAY 8-30 PLAN
// ==========================================

const ASSUMED_MANIFESTO_PROMISES: ManifestoPromise[] = [
  {
    promise: "Farm debt relief",
    nodalDepartment: "Agriculture Department",
    minister: "Agriculture Minister",
    timeline: "100 days",
    milestones: ["Enrollment system designed", "First disbursement cycle"],
    budgetSource: "State budget + central assistance",
    kpiDefinition: "Number of farmers enrolled, amount disbursed",
    measurableTargets: "VERIFICATION_NEEDED",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    promise: "Drug eradication",
    nodalDepartment: "Home Department",
    minister: "Home Minister",
    timeline: "Ongoing",
    milestones: ["Seizure operations increased", "Rehabilitation centers operational"],
    budgetSource: "State budget",
    kpiDefinition: "Seizures, rehabilitation admissions, supply chain disruptions",
    measurableTargets: "VERIFICATION_NEEDED",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    promise: "Youth employment / skilling",
    nodalDepartment: "Employment Department",
    minister: "Labor/Employment Minister",
    timeline: "1 year",
    milestones: ["Skill certification program launched", "First placements"],
    budgetSource: "State budget + central schemes",
    kpiDefinition: "Jobs created, skill certifications, placement rate",
    measurableTargets: "VERIFICATION_NEEDED",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    promise: "Education quality improvement",
    nodalDepartment: "Education Department",
    minister: "Education Minister",
    timeline: "Ongoing",
    milestones: ["Teacher vacancies filled", "Infrastructure projects identified"],
    budgetSource: "State budget + SSA/RTE funds",
    kpiDefinition: "Teacher vacancies filled, infrastructure projects completed",
    measurableTargets: "VERIFICATION_NEEDED",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    promise: "Industry investment promotion",
    nodalDepartment: "Industries Department",
    minister: "Industries Minister",
    timeline: "1-3 years",
    milestones: ["MoUs signed", "Investment realized", "Jobs created"],
    budgetSource: "State budget + FDI promotion",
    kpiDefinition: "MoUs signed, investment realized, jobs created",
    measurableTargets: "VERIFICATION_NEEDED",
    verificationStatus: "VERIFICATION_NEEDED",
  },
];

const DAY_8_TO_30_PLAN: Day8to30Plan = {
  manifestoPromises: ASSUMED_MANIFESTO_PROMISES,
  institutionalActions: [
    {
      action: "Establish Governance Delivery Unit (GDU)",
      description:
        "Under CM's Office — successor to the campaign war room",
      authority: "CM's Office",
      headRole: "Senior IAS officer (preferably with private sector/analytics experience)",
    },
    {
      action: "Issue Government Order (GO) creating GDU",
      description: "GDU with authority to track all departmental KPIs",
      authority: "CM's Office",
      headRole: "GDU Head",
    },
    {
      action: "Conduct first round of secretary-level reviews",
      description:
        "Each department presents current status, challenges, and 100-day plan",
      authority: "CM's Office",
      headRole: "Chief Secretary",
    },
    {
      action: "Launch public grievance portal",
      description: "If not already functional, with CM's direct monitoring",
      authority: "CM's Office",
      headRole: "IT Department",
    },
  ],
  communicationActions: [
    "First press conference by CM: Outline 100-day vision, set expectations",
    "Begin weekly 'Report to People' communication (social media + press)",
    "Establish media protocol: structured briefings, not ad-hoc responses",
  ],
};

// ==========================================
// DAY 31-100 PLAN
// ==========================================

const DAY_31_TO_100_PLAN: Day31to100Plan = {
  departmentReforms: [
    "Complete department-by-department review of all schemes (inherited from AAP + Congress's own)",
    "Rationalize schemes: merge duplicates, close ineffective ones, scale successful ones",
    "Establish monthly KPI review chaired by CM for top 10 departments",
    "Implement citizen satisfaction survey mechanism for governance feedback",
  ],
  legislativeAgenda: [
    {
      action: "Prepare ordinance-ready proposals",
      description:
        "For any urgent manifesto commitments requiring legislative backing",
      verificationNeeded: [],
    },
    {
      action: "Plan first assembly session",
      description: "Governor's address, budget session timeline",
      verificationNeeded: [],
    },
    {
      action: "Identify bills to repeal",
      description:
        "If they were contentious AAP-era legislation",
      verificationNeeded: ["Specific laws to target"],
    },
  ],
  reviewMechanism: {
    day60: "Internal mid-course review — are the top 5 promises on track?",
    day90: "Comprehensive 100-day report card preparation",
    day100:
      "Public presentation of 100-day achievements with honest accounting of delays",
  },
};

// ==========================================
// PROMISE TRACKING SYSTEM
// ==========================================

const PROMISE_KPI_CONVERSIONS: PromiseKPIConversion[] = [
  {
    campaignPromiseElement: "Farm debt relief",
    governanceKPI: "Number of farmers enrolled, amount disbursed",
    target: "VERIFICATION_NEEDED",
    reviewFrequency: "Monthly",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    campaignPromiseElement: "Drug eradication",
    governanceKPI:
      "Seizures, rehabilitation admissions, supply chain disruptions",
    target: "VERIFICATION_NEEDED",
    reviewFrequency: "Weekly",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    campaignPromiseElement: "Youth employment",
    governanceKPI: "Jobs created, skill certifications, placement rate",
    target: "VERIFICATION_NEEDED",
    reviewFrequency: "Monthly",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    campaignPromiseElement: "Education quality",
    governanceKPI: "Teacher vacancies filled, infrastructure projects completed",
    target: "VERIFICATION_NEEDED",
    reviewFrequency: "Quarterly",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    campaignPromiseElement: "Industry investment",
    governanceKPI: "MoUs signed, investment realized, jobs created",
    target: "VERIFICATION_NEEDED",
    reviewFrequency: "Quarterly",
    verificationStatus: "VERIFICATION_NEEDED",
  },
];

const TRACKING_INFRASTRUCTURE: TrackingInfrastructure = {
  dashboard: {
    location: "CM's Office",
    builtBy: "GDU with CryptoMize technology support if engaged",
    technologySupport: "CryptoMize",
  },
  trafficLightSystem: {
    green: "On track",
    yellow: "Delayed",
    red: "At risk",
  },
  publicAccountability: "Quarterly public report card published on government website",
  legislativeAccountability: "Annual report to Vidhan Sabha on promise fulfillment",
};

// ==========================================
// INTELLIGENCE ASSETS TRANSITION
// ==========================================

const CAMPAIGN_ASSET_MAPPINGS: CampaignAssetMapping[] = [
  {
    campaignAsset: "Voter sentiment tracker",
    governanceSuccessor: "Public sentiment monitoring unit",
    notes:
      "Reconfigure from election to governance satisfaction",
  },
  {
    campaignAsset: "Competitor intelligence",
    governanceSuccessor: "Opposition monitoring desk",
    notes: "Track AAP, SAD, BJP legislative activity",
  },
  {
    campaignAsset: "Media monitoring",
    governanceSuccessor: "Government media cell",
    notes: "Proactive messaging, rapid response",
  },
  {
    campaignAsset: "Social media war room",
    governanceSuccessor: "Digital communications unit",
    notes: "Shift from campaign content to governance communication",
  },
  {
    campaignAsset: "Data/analytics infrastructure",
    governanceSuccessor: "GDU analytics cell",
    notes: "Same tools, different metrics",
  },
  {
    campaignAsset: "Ground intelligence network",
    governanceSuccessor: "District-level feedback system",
    notes: "Repurpose volunteer network for governance feedback",
  },
];

const KNOWLEDGE_PRESERVATION: KnowledgePreservation[] = [
  {
    preservationItem: "All research outputs (MP1–MP10 intelligence)",
    transformation: "Archived and indexed",
  },
  {
    preservationItem: "Voter segmentation data",
    transformation: "Citizen engagement data",
  },
  {
    preservationItem: "Competitor profiles",
    transformation: "Opposition profiles for legislative strategy",
  },
  {
    preservationItem: "District-level intelligence",
    transformation: "Governance baseline data",
  },
];

// ==========================================
// PERSONNEL TRANSITION
// ==========================================

const CAMPAIGN_ROLE_MAPPINGS: CampaignRoleMapping[] = [
  {
    campaignRole: "Campaign Manager",
    possibleGovernanceRole:
      "Chief Principal Secretary to CM or Political Affairs Secretary",
    selectionCriteria: "Organizational skill, CM trust",
  },
  {
    campaignRole: "Media Cell Head",
    possibleGovernanceRole: "Media Advisor to CM or Director, Information & Public Relations",
    selectionCriteria: "Communication skill, media relationships",
  },
  {
    campaignRole: "Social Media Lead",
    possibleGovernanceRole: "Digital Communications Head, CM's Office",
    selectionCriteria: "Platform expertise, content strategy",
  },
  {
    campaignRole: "Research/Policy Lead",
    possibleGovernanceRole: "OSD Policy in CM's Office or GDU head",
    selectionCriteria: "Policy depth, analytical skill",
  },
  {
    campaignRole: "Field Coordinators",
    possibleGovernanceRole: "OSDs to ministers or DC liaison",
    selectionCriteria: "Ground knowledge, constituency relationships",
  },
  {
    campaignRole: "Data Analytics Lead",
    possibleGovernanceRole: "GDU Analytics Head",
    selectionCriteria: "Technical skill, institutional knowledge",
  },
  {
    campaignRole: "Legal Cell",
    possibleGovernanceRole:
      "Additional Advocate General or Legal Advisor to CM",
    selectionCriteria: "Legal acumen, court experience",
  },
];

const TRANSITION_PRINCIPLES: TransitionPrinciples[] = [
  {
    principle: "Not everyone transitions",
    description:
      "Campaign skills do not always translate to governance. Be selective.",
  },
  {
    principle: "No loyalty appointments",
    description:
      "Resist pressure to reward campaign workers with government positions they are unqualified for. Use advisory roles or party positions instead.",
  },
  {
    principle: "Institutional memory",
    description:
      "Retain key bureaucrats from previous government unless there is documented corruption or incompetence. Sudden mass transfers create governance paralysis.",
  },
  {
    principle: "Merit in boards",
    description:
      "PSU boards and corporation appointments should balance political representation with professional competence.",
  },
];

// ==========================================
// COMMUNICATION TRANSITION
// ==========================================

const MESSAGING_DIMENSIONS: MessagingDimension[] = [
  {
    dimension: "Tone",
    campaignMode: "Aggressive, comparative, aspirational",
    governanceMode: "Measured, inclusive, delivery-focused",
  },
  {
    dimension: "Audience",
    campaignMode: "Voters, party workers",
    governanceMode:
      "All citizens, including those who voted for other parties",
  },
  {
    dimension: "Content",
    campaignMode: "Promises, attacks on opponents",
    governanceMode: "Progress reports, policy explanations, transparency",
  },
  {
    dimension: "Frequency",
    campaignMode: "High-volume, multi-channel daily",
    governanceMode: "Structured, predictable schedule",
  },
  {
    dimension: "Social Media",
    campaignMode: "Rapid response, meme-friendly",
    governanceMode: "Official, informative, accessible",
  },
];

const COMMUNICATION_MILESTONES: CommunicationMilestone[] = [
  {
    day: "Day 1",
    milestone: "CM's oath speech",
    description: "Vision, unity, humility",
  },
  {
    day: "Day 7",
    milestone: "First press conference",
    description: "Cabinet introduced, top priorities announced",
  },
  {
    day: "Day 30",
    milestone: "'First Month Report'",
    description: "What was done, what is in progress",
  },
  {
    day: "Day 100",
    milestone: "Public report card",
    description: "Honest assessment of achievement vs. promise",
  },
];

// ==========================================
// OPPOSITION STRATEGY
// ==========================================

const OPPOSITION_ASSET_REPURPOSING: OppositionAssetRepurposing[] = [
  {
    campaignAsset: "Voter segmentation data",
    oppositionUse:
      "Identify swing voters for next election cycle; understand why Congress lost",
  },
  {
    campaignAsset: "Competitor intelligence",
    oppositionUse:
      "Track government performance, expose failures, build opposition narrative",
  },
  {
    campaignAsset: "Media monitoring",
    oppositionUse:
      "Rapid response to government propaganda; fact-check government claims",
  },
  {
    campaignAsset: "Ground network",
    oppositionUse:
      "Maintain constituency-level presence through volunteer-engaged oversight",
  },
  {
    campaignAsset: "Research database",
    oppositionUse:
      "Policy alternative development; shadow manifesto preparation",
  },
];

const OPPOSITION_PLAYBOOK_ITEMS: OppositionPlaybook[] = [
  {
    strategy: "Constructive Opposition",
    description:
      "Support good governance bills, oppose only on principle — build public credibility",
  },
  {
    strategy: "Performance Tracking",
    description:
      "Maintain a parallel tracker of the ruling party's manifesto promises vs. delivery",
  },
  {
    strategy: "Legislative Engagement",
    description:
      "Ensure all Congress MLAs are trained in assembly procedures, question-hour preparation, and committee participation",
  },
  {
    strategy: "Shadow Cabinet",
    description:
      "Assign Congress MLAs to shadow each government department, building expertise and holding government accountable",
  },
  {
    strategy: "Public Communication",
    description:
      "Weekly press briefings on government performance, NOT just criticism",
  },
  {
    strategy: "Intelligence Maintenance",
    description:
      "Continue sentiment tracking, ground intelligence, and media monitoring at reduced scale",
  },
  {
    strategy: "Five-Year Planning",
    description:
      "Use the loss intelligence to prepare for 2032 — understand demographic shifts, emerging issues, and voter realignment",
  },
];

const COALITION_SCENARIOS: CoalitionScenario[] = [
  {
    scenario:
      "Congress is single largest party but short of majority",
    priorityPartners: "Parties with compatible secular politics",
    approach:
      "Explore post-poll alliances. Priority for power-sharing agreements and common minimum program.",
  },
  {
    scenario: "Congress is second-largest party",
    priorityPartners: "N/A",
    approach:
      "Lead opposition. Focus on holding government accountable and rebuilding for next cycle.",
  },
  {
    scenario: "Hung assembly with President's Rule risk",
    priorityPartners: "Like-minded parties",
    approach:
      "Coordinate with like-minded parties to prevent President's Rule, which historically harms Punjab's democratic fabric.",
  },
];

// ==========================================
// RISK FACTORS
// ==========================================

const TRANSITION_RISKS: TransitionRisk[] = [
  {
    risk: "Factionalism in cabinet formation",
    mitigation:
      "CM must assert authority; use objective criteria (region, caste, win margin, competence)",
  },
  {
    risk: "Bureaucratic resistance to new government",
    mitigation:
      "Engage Chief Secretary early; transfer obstructive officers; reward cooperative ones",
  },
  {
    risk: "AAP-instigated disruptions (protests, legal challenges)",
    mitigation:
      "Legal team on standby; maintain communication momentum; do not be provoked",
  },
  {
    risk: "Media narrative of 'same old Congress'",
    mitigation:
      "Deliver visible, distinctive actions in first 30 days that differentiate from both AAP and previous Congress tenure",
  },
  {
    risk: "Unfulfillable manifesto promises",
    mitigation:
      "Be honest about timelines; under-promise and over-deliver in first 100 days",
  },
  {
    risk: "Intelligence leaks from outgoing government",
    mitigation:
      "Assume campaign data is compromised; change access credentials, secure physical war room",
  },
];

// ==========================================
// CRITICAL SUCCESS FACTORS
// ==========================================

const CRITICAL_SUCCESS_FACTORS: CriticalSuccessFactor[] = [
  {
    factor: "Preparation before results",
    description: "Transition team constituted and briefed by January 2027",
  },
  {
    factor: "Speed in first week",
    description: "Oath, cabinet, key appointments within 7 days",
  },
  {
    factor: "Discipline in first month",
    description:
      "Manifesto-to-KPI conversion, GDU operational, first reviews complete",
  },
  {
    factor: "Institutional depth by Day 100",
    description:
      "Review mechanisms, legislative agenda, public accountability",
  },
  {
    factor: "Honest communication",
    description:
      "Public report cards, admission of delays, celebration of achievements",
  },
];

// ==========================================
// DATA CONFIDENCE NOTES
// ==========================================

const DATA_CONFIDENCE_NOTES: ConfidenceNote[] = [
  {
    item: "Cabinet size limit (18 ministers)",
    basis:
      "Constitutional provision limiting council of ministers to 15% of legislative strength",
    verificationNeeded: ["Punjab-specific application"],
  },
  {
    item: "Oath venue and protocol",
    basis: "Standard Indian state CM oath procedures",
    verificationNeeded: ["Punjab-specific conventions"],
  },
  {
    item: "Manifesto promises referenced",
    basis: "Placeholder assumptions",
    verificationNeeded: ["Must be updated once 2027 manifesto is finalized (expected Q4 2026)"],
  },
  {
    item: "Bureaucratic appointment procedures",
    basis: "Standard IAS/IPS posting norms",
    verificationNeeded: [
      "Punjab-specific rules",
      "Pending cases from AAP tenure that may affect appointments",
    ],
  },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const TRANSITION_PLAYBOOK_DATA: TransitionPlaybook = {
  metadata: TRANSITION_PLAYBOOK_METADATA,
  purpose: {
    objective:
      "Provides Congress with a structured plan for transitioning from election campaign mode to governance mode upon winning 59+ seats in the February 2027 Punjab Assembly Election",
    context:
      "A smooth transition is critical: AAP's 2022 transition was chaotic, with delayed cabinet expansion and early signs of governance inexperience. Congress must demonstrate institutional competence from Day 1.",
  },
  transitionCommittee: {
    roles: TRANSITION_COMMITTEE_ROLES,
    phases: TRANSITION_PHASES,
  },
  day1to7Plan: DAY_1_TO_7_PLAN,
  day8to30Plan: DAY_8_TO_30_PLAN,
  day31to100Plan: DAY_31_TO_100_PLAN,
  promiseTracking: {
    conversions: PROMISE_KPI_CONVERSIONS,
    infrastructure: TRACKING_INFRASTRUCTURE,
  },
  intelligenceTransition: {
    assetMappings: CAMPAIGN_ASSET_MAPPINGS,
    knowledgePreservation: KNOWLEDGE_PRESERVATION,
  },
  personnelTransition: {
    roleMappings: CAMPAIGN_ROLE_MAPPINGS,
    principles: TRANSITION_PRINCIPLES,
  },
  communicationTransition: {
    messagingDimensions: MESSAGING_DIMENSIONS,
    milestones: COMMUNICATION_MILESTONES,
  },
  oppositionStrategy: {
    assetRepurposing: OPPOSITION_ASSET_REPURPOSING,
    playbook: OPPOSITION_PLAYBOOK_ITEMS,
    coalitionScenarios: COALITION_SCENARIOS,
  },
  riskFactors: TRANSITION_RISKS,
  successFactors: CRITICAL_SUCCESS_FACTORS,
  dataConfidenceNotes: DATA_CONFIDENCE_NOTES,
};

export default TRANSITION_PLAYBOOK_DATA;
