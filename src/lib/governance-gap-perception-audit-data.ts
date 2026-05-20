// Punjab Governance Gap Perception Audit Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g81-punjab-governance-gap-perception-audit.md

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
// PERCEPTION FORMATION MODEL
// ==========================================

export const perceptionChannels = [
  {
    channel: "Direct Personal Experience",
    weight: "30-35%",
    description: "Personal encounter with governance delivery shapes baseline perception",
    examples: [
      "Farmer who received PM-Kisan payments",
      "Patient who waited 6 hours in government hospital",
      "Parent whose son died of drug overdose",
    ],
    power: "Memorable, emotionally valenced, difficult to counter with abstract statistics",
    limitations: "Only reaches 30-35% of voters because many governance failures don't directly touch individuals",
  },
  {
    channel: "Social Network",
    weight: "35-40%",
    description: "Punjab's social cohesion amplifies governance perceptions through networks",
    mechanisms: [
      "Family WhatsApp groups",
      "Village networks",
      "Dera connections",
      "Peer circles",
    ],
    dominanceReason: [
      "High WhatsApp penetration in rural and urban Punjabi communities",
      "Strong family/community loyalty creating information echo chambers",
      "Collective efficacy norms where community problems become individual salience",
    ],
    criticalInsight: "Grievances travel faster and farther than successes - single custodial death circulates for months; 100 infrastructure projects don't go viral",
  },
  {
    channel: "Media Coverage",
    weight: "15-20%",
    description: "Regional TV, Hindi/Punjabi newspapers, digital news portals frame governance perception",
    audience: "Most influential for middle-class and urban voters who consume news regularly",
    aapCoverage: "Mixed - supportive outlets amplify government schemes; opposition outlets emphasize law-and-order failures",
  },
  {
    channel: "Opposition Narrative",
    weight: "10-15%",
    description: "Congress, SAD actively construct narratives about governance failures",
    multiplierEffect: "Direct weight becomes 30-40% effective when media and social amplification are factored in",
  },
];

// ==========================================
// GAP x SALIENCE MATRIX
// ==========================================

export const gapSalienceMatrix = [
  { governanceGap: "Drug abuse persistence", severity: 9, salience: 10, priority: "CRITICAL" },
  { governanceGap: "Unemployment/youth migration", severity: 8, salience: 9, priority: "CRITICAL" },
  { governanceGap: "Farmer debt/agricultural distress", severity: 7, salience: 8, priority: "HIGH" },
  { governanceGap: "Water crisis (groundwater, SYL)", severity: 6, salience: 7, priority: "HIGH" },
  { governanceGap: "Law & order / gangster culture", severity: 8, salience: 8, priority: "HIGH" },
  { governanceGap: "Healthcare system stress", severity: 6, salience: 6, priority: "MEDIUM" },
  { governanceGap: "Women safety deterioration", severity: 6, salience: 7, priority: "MEDIUM-HIGH" },
  { governanceGap: "Sacrilege cases (unresolved)", severity: 5, salience: 6, priority: "MEDIUM" },
  { governanceGap: "Corruption perception (nepotism)", severity: 6, salience: 5, priority: "MEDIUM" },
];

export const criticalFindings = {
  topGrievances: "Drug abuse and unemployment together account for 65-70% of voter grievance intensity",
  persistenceNote: "Drug issue remains #1 salience despite AAP efforts because AAP promised to ELIMINATE (absolute threshold) not manage",
};

// ==========================================
// AAP GOVERNANCE DELIVERY AUDIT
// ==========================================

export const aapPromiseAudit = [
  {
    promise: "Drug abuse - 'End the drug menace in 4 years'",
    actualDelivery: [
      "Infrastructure for de-addiction improved",
      "Some border policing enhanced",
      "State-wide de-addiction centers established",
    ],
    gaps: [
      "Drug availability has not demonstrably decreased",
      "2024-2025 continued reports of drug-related deaths and seizures",
      "Interstate smuggling routes largely intact",
    ],
    perceptionVsReality: "MODERATE GAP - Voters FEEL drugs remain prevalent; WhatsApp forwards about drug deaths continue; PROMISE was absolute making partial failure feel like total failure",
  },
  {
    promise: "Jobs - 10 lakh jobs + 20 lakh self-employment",
    actualDelivery: [
      "Approximately 76% shortfall in formal job creation",
      "Only 24,000-30,000 formal jobs created through direct government intervention",
      "Startup ecosystem contracted from 2022-2024",
    ],
    perceptionVsReality: "SEVERE GAP - Unemployment remains Punjab's #2 issue; young voters (18-35) directly experience job scarcity; migration stories are vivid and collective",
  },
  {
    promise: "Better government hospitals, more doctors, reduced costs",
    actualDelivery: [
      "Some infrastructure upgrades",
      "SEVERE staffing crisis in government hospitals 2024-2025",
      "Patients increasingly turned to private sector",
      "Out-of-pocket healthcare costs increased",
    ],
    perceptionVsReality: "MODERATE GAP - Urban middle-class voters feel deterioration most acutely; rural voters continue using government facilities with growing dissatisfaction",
  },
  {
    promise: "Restore law and order, make Punjab safe",
    actualDelivery: [
      "2024-2025 saw INCREASED gangster activities and high-profile encounters",
      "Lawrence Bittwaha and other gangster narratives dominated news cycles",
      "Police reform pledges unfulfilled",
    ],
    perceptionVsReality: "SEVERE GAP - Gangster narrative has DOMINATED media coverage 2024-2026; perceived lawlessness is high despite mixed actual crime statistics",
  },
];

// ==========================================
// ANGRY VOTER PROFILES
// ==========================================

export const angryVoterProfiles = [
  {
    segment: "Youth (18-35, Male, Rural/Urban Fringe)",
    grievanceProfile: { unemployment: "10/10", drugs: "9/10", water: "6/10" },
    whyAngry: [
      "Face direct unemployment",
      "Many have friends/peer networks affected by drugs",
      "Aspire to migrate for jobs",
      "Feel system failed them",
    ],
    electoralSignificance: "Highest turnout potential IF grievance channeled to Congress; 2022 grievance was directed AGAINST Congress; 2027 same grievance directed AGAINST AAP could deliver similar margins to Congress",
  },
  {
    segment: "Farmers (All Sizes, Malwa Concentration)",
    grievanceProfile: { farmerDebt: "9/10", msp: "7/10", water: "7/10" },
    whyAngry: [
      "Agricultural distress is STRUCTURAL, not cyclical",
      "2015-2022 farm protests left deep residue",
      "SYL canal issue remains unresolved",
      "Feeling AAP has not prioritized farmer interests despite agrarian state",
    ],
    electoralSignificance: "Congress has traditional farmer base but suffered erosion in Malwa due to AAP's 2022 farm-law opposition positioning; farmer grievance with AAP could recover Malwa losses",
  },
  {
    segment: "Women (All Ages, Urban and Rural)",
    grievanceProfile: { safety: "9/10", drugs: "8/10", healthcare: "6/10" },
    whyAngry: [
      "Women safety deterioration (2024-2026 gangster incidents, acid attacks, domestic violence rise) DIRECTLY FELT",
      "Drug abuse of male family members creates ongoing domestic stress",
      "Healthcare cost increases squeeze household budgets",
    ],
    electoralSignificance: "Women turnout was 66% in 2022 (vs 69% male); increased female turnout through safety grievance mobilization could shift outcomes in close seats",
  },
  {
    segment: "SC Voters (Mazhabi Sikh, Valmiki, Ravidasia)",
    grievanceProfile: { employment: "9/10", drugs: "9/10", schemeAccess: "6/10" },
    whyAngry: [
      "Highest dependence on government jobs and schemes",
      "Closest to drug abuse networks (Mazhabi Sikh communities)",
      "Historically Congress-aligned but 2022 shift to AAP significant",
    ],
    electoralSignificance: "SC voters are Congress's structural base (32% of population); recovering even 40% of 2022 AAP SC voters would deliver 15-20 additional seats",
  },
];

// ==========================================
// REGIONAL PERCEPTION DIFFERENCES
// ==========================================

export const regionalGrievanceProfiles = [
  {
    region: "Malwa (69 Seats)",
    tagline: "Drugs and Debt",
    dominantGrievances: [
      { issue: "Drug abuse", rank: 1 },
      { issue: "Farmer debt", rank: 2 },
      { issue: "Water depletion", rank: 3 },
      { issue: "Law & order", rank: 4 },
    ],
    regionalFactors: [
      "Highest concentration of farmer distress",
      "Longest history of drug network penetration (historically opium belt)",
      "Highest groundwater depletion rates",
      "Bargari sacrilege incident long shadow",
    ],
    intensity: "HIGHEST in Malwa for drugs and farmer debt - these grievances have become CULTURAL NARRATIVES in Malwa villages",
    congressOpportunity: "Malwa voters rejected Congress in 2022 over farm law betrayal perception and anti-incumbency against Amarinder; now AAP's drug/debt promises have FAILED; Congress can position as party that 'never stopped fighting for Malwa'",
  },
  {
    region: "Majha (27 Seats)",
    tagline: "Jobs and Justice",
    dominantGrievances: [
      { issue: "Unemployment", rank: 1 },
      { issue: "Law & order", rank: 2 },
      { issue: "Sacrosanct issues", rank: 3 },
      { issue: "Drug abuse", rank: 4 },
    ],
    regionalFactors: [
      "Border-adjacent (Amritsar, Gurdaspur, Pathankot)",
      "Higher military/farm/retired defense personnel concentration",
      "Security concerns paramount",
      "Youth migration to armed forces or overseas MAJOR theme",
    ],
    intensity: "Jobs crisis MORE ACUTELY FELT - Majha youth traditionally had clearer pathways (military, government jobs, agriculture)",
    congressOpportunity: "Majha has strong Congress legacy (many veteran party families); SAD decline here means Congress can recover ground if grievance on jobs and security credibly mobilized",
  },
  {
    region: "Doaba (23 Seats)",
    tagline: "Water and Work",
    dominantGrievances: [
      { issue: "Water crisis", rank: 1 },
      { issue: "Unemployment", rank: 2 },
      { issue: "Drug abuse", rank: 3 },
      { issue: "Healthcare", rank: 4 },
    ],
    regionalFactors: [
      "HIGHEST rate of groundwater depletion in Punjab (50-100 cm/year)",
      "Water table in parts of Jalandhar, Hoshiarpur, Kapurthala critically low",
      "Highest NRI population - remittance dependency makes unemployment feel different (aspiration gap)",
    ],
    intensity: "Water crisis is EXISTENTIAL - 'Will there be water to drink in 10 years?' is genuine voter fear",
    congressOpportunity: "Water infrastructure is LONG-TERM Congress commitment; AAP's water promises largely absent; Congress should own water issue as signature domain",
  },
];

// ==========================================
// CONGRESS GRIEVANCE STRATEGY
// ==========================================

export const feelYourPainStrategy = {
  proposition: "'We feel your anger - and we will fight for you.'",
  distinction: "FEEL YOUR PAIN vs WE WILL FIX IT (AAP 2022 approach)",
  rationale: "Does not require Congress to prove competence (which invites comparison to 2017-2022 record); asks voters to evaluate whether Congress UNDERSTANDS and VALIDATES their suffering",
};

export const anchorGrievanceStatements = [
  "Punjab ki factory band hai, jawaniyan Canada bhaag raha hai (Punjab's factories are shut, youth are fleeing to Canada)",
  "Dawai dealers ke paise AAP sarkar nahi kar sakti, drug mafias AAP ke saamne bilkul free hain (The government cannot even book drug dealers; drug mafias are absolutely free before the AAP government)",
  "Maati pi gayi, pani khatam ho gaya, kisan ki mehnat bekaar ja rahi hai (The land is exhausted, water is depleted, farmer's labor is going to waste)",
];

export const counterNarrativeResponse = {
  aapClaim: "We built de-addiction centers",
  congressResponse: "De-addiction centers are useless if drugs are still available on every corner",
  framing: "FRAME AAP's delivery as inadequate to its own promise, not just below voter expectations",
};

export const authenticityRequirement = {
  requirement: "Grievance messaging MUST come with LOCAL PROOF",
  example: "A Congress candidate from Malwa must be able to say 'In my village, three young men died of drugs in the last year'",
  warning: "Generic grievance without local calibration is dismissed as political opportunism",
};

// ==========================================
// COUNTER-NARRATIVE RISK MANAGEMENT
// =========================================

export const counterNarrativeRisks = {
  greatestVulnerability: "Congress's OWN governance record (2017-2022)",
  aapCounterAttack: "You destroyed Punjab for 5 years, what are you talking about?",
};

export const riskMitigationStrategies = [
  {
    strategy: "The 'Amarinder Distance' Positioning",
    approach: "Congress can credibly claim: 'The Amarinder government failed you - and we removed him. The Congress of today is not the Congress of 2017.'",
    requirement: "Party reform narrative - new Punjab Congress president, fresh candidates, 2024-2026 opposition conduct must reinforce that Congress has CHANGED",
  },
  {
    strategy: "Comparative Grievance Framing",
    approach: "Do not defend 2017-2022. Instead: 'In 2017, we inherited problems and did not solve them fast enough. But AAP inherited a functioning state and is DESTROYING it. The drug trade was smaller in 2022. Unemployment was lower in 2022. Water was more available in 2022. AAP had FOUR YEARS.'",
    shift: "Shifts question from 'Did Congress govern badly?' to 'Is AAP governing worse than Congress did?'",
  },
  {
    strategy: "Acknowledgment with Contrasting Vision",
    approach: "For voter segments who experienced Congress's governance failures directly: acknowledge failure and offer contrasting vision",
    example: "For farmers: 'Yes, the 2017-2022 government did not do enough on MSP. We are sorry. Here is what we will do differently. AAP has done NOTHING on MSP despite four years.'",
  },
];

// ==========================================
// RANKED GOVERNANCE GAPS BY PERCEIVED SEVERITY
// ==========================================

export const rankedGovernanceGaps = [
  { rank: 1, gap: "Drug abuse persistence", severityScore: 9.5, primarySegment: "Youth, Women, SC voters", regional: "All regions, highest Malwa" },
  { rank: 2, gap: "Unemployment / youth migration", severityScore: 9.0, primarySegment: "Youth (18-35 male)", regional: "All regions, highest Majha" },
  { rank: 3, gap: "Farmer debt / agricultural distress", severityScore: 8.0, primarySegment: "Farmers, Rural households", regional: "Malwa (69 seats)" },
  { rank: 4, gap: "Water crisis (groundwater depletion)", severityScore: 7.5, primarySegment: "Rural households, Farmers", regional: "Doaba (highest severity), Malwa" },
  { rank: 5, gap: "Law & order / gangster incidents", severityScore: 7.5, primarySegment: "All voters, Women safety focus", regional: "Urban Punjab, Majha border" },
  { rank: 6, gap: "Women safety deterioration", severityScore: 7.0, primarySegment: "Women voters, Families", regional: "Urban + Rural" },
  { rank: 7, gap: "Healthcare system stress", severityScore: 6.5, primarySegment: "Low-income households, Elderly", regional: "Rural Punjab" },
  { rank: 8, gap: "Sacrilege cases (unresolved)", severityScore: 6.0, primarySegment: "Sikh religious identity voters", regional: "Malwa (Bargari/Kotkapura legacy)" },
  { rank: 9, gap: "Corruption / nepotism perception", severityScore: 5.5, primarySegment: "Urban middle class, Youth", regional: "Urban Punjab" },
];

// ==========================================
// VOTER SEGMENT GRIEVANCE PROFILES
// =========================================

export const segmentGrievanceProfiles = [
  {
    segment: "Youth (18-35, Male)",
    primaryGrievance: "Unemployment, Drugs",
    intensity: 9.5,
    aap2022VoteShare: "55-60%",
    recoveryPotential: "HIGH if drugs/unemployment credibly blamed on AAP",
    priorityAction: "Door-to-door in urban/fringe seats",
  },
  {
    segment: "SC Voters (All)",
    primaryGrievance: "Drugs, Employment",
    intensity: 9.0,
    aap2022VoteShare: "50-55%",
    recoveryPotential: "HIGH-MEDIUM (requires local candidate credibility)",
    priorityAction: "Booth-level SC mobilization",
  },
  {
    segment: "Women (25-55)",
    primaryGrievance: "Safety, Drugs (family)",
    intensity: 8.5,
    aap2022VoteShare: "48-52%",
    recoveryPotential: "MEDIUM-HIGH (safety narrative activation)",
    priorityAction: "Women-focused community meetings",
  },
  {
    segment: "Farmers (Malwa)",
    primaryGrievance: "Debt, Water, MSP",
    intensity: 8.5,
    aap2022VoteShare: "40-45%",
    recoveryPotential: "MEDIUM (AAP farm positioning still resonant)",
    priorityAction: "Farmer union + dera network outreach",
  },
  {
    segment: "Majha Youth",
    primaryGrievance: "Jobs, Security",
    intensity: 8.0,
    aap2022VoteShare: "45-50%",
    recoveryPotential: "MEDIUM-HIGH (jobs narrative needs local proof)",
    priorityAction: "Ex-serviceman + army recruitment network",
  },
  {
    segment: "Urban Middle Class",
    primaryGrievance: "Law & order, Jobs",
    intensity: 7.0,
    aap2022VoteShare: "50-55%",
    recoveryPotential: "MEDIUM (synthesis narrative)",
    priorityAction: "Social media + digital",
  },
];

// ==========================================
// MESSAGING PRIORITY TIMELINE
// =========================================

export const messagingPriorityTimeline = [
  {
    phase: "IMMEDIATE (0-3 months)",
    focus: "Drug abuse narrative activation through LOCALIZED victim stories; Unemployment narrative through youth migration stories (NRI angle)",
    regions: "Both anchored in Malwa and Doaba",
  },
  {
    phase: "MEDIUM-TERM (3-6 months)",
    focus: "Water crisis narrative deployment in Doaba; Farmer debt narrative in Malwa through MGNREGA + MSP framing; Law & order narrative through LOCAL gangster incident anchoring",
  },
  {
    phase: "PRE-ELECTION (6-8 months)",
    focus: "Safety (women) narrative intensification; Healthcare cost narrative for urban poor; Comparative grievance framing: 'AAP had four years. What did they deliver?'",
  },
];

// ==========================================
// SUCCESS METRIC
// =========================================

export const successMetric = {
  metric: "Congress's perceived 'understanding voter anger' score",
  baseline: "35%",
  target: "55%",
  targetDate: "September 2026",
  condition: "If drug abuse and unemployment remain top-two voter salience issues, grievance strategy effectively positioned for February 2027 election",
};
