// Government Schemes & Welfare Delivery Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b39-government-schemes-welfare-delivery.md

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
// SCHEME DELIVERY MECHANISMS
// ==========================================

export const centralGovernmentSchemes = [
  {
    scheme: "PM-KISAN",
    description: "Pradhan Mantri Kisan Samman Nidhi - Rs 6,000 annually to farmer families",
    beneficiaries: "~2.3 million farmers across 23 districts",
    deliveryMechanism: "Direct Benefit Transfer (DBT) to registered bank accounts",
    installments: "Three equal installments of Rs 2,000 each",
    challenges: [
      "Land record digitization gaps - many farmers lack updated Jamabandi records",
      "Aadhaar linking issues in Malwa region",
      "Bank account operational problems",
    ],
  },
  {
    scheme: "Ayushman Bharat - PMJAY",
    description: "Rs 5 lakh per family per year for secondary/tertiary hospitalization",
    beneficiaries: "~3.9 million families (SECC 2011 data)",
    deliveryMechanism: "Trust/society model with empanelled government and private hospitals",
    challenges: [
      "Limited empanelled hospital density in rural Muktsar, Fazilka, border areas",
      "Urban private hospital capture of scheme benefits",
    ],
  },
  {
    scheme: "MGNREGA",
    description: "100 days of wage employment per year to rural households",
    beneficiaries: "Rural households",
    deliveryMechanism: "Gram panchayats with piece-rate wage payments",
    challenges: [
      "Delayed wage payments (30-45 days beyond schedule)",
      "Limited worksite availability",
      "Wages below notified rates",
      "Below national average person-days generated per active household",
    ],
  },
];

export const stateGovernmentSchemes = [
  {
    scheme: "Bebe Nanki",
    description: "Financial assistance to widows and destitute women",
    status: "Renamed from original Congress-era program by AAP government",
    note: "Congress challenge: differentiate original scheme design intent from AAP modifications",
  },
  {
    scheme: "Old Age Pension",
    description: "Monthly stipends to elderly citizens",
    coverage: "~60-70% of eligible households",
    inclusionGaps: ["Homeless persons", "Those without Aadhaar linkage", "Migrants"],
  },
  {
    scheme: "Disability Pension",
    description: "Monthly stipends to disabled citizens",
    structure: "Partially central-sponsored (NSAP) with state top-ups",
  },
];

// ==========================================
// DELIVERY CHAIN AND BOTTLENECKS
// ==========================================

export const deliveryChain = {
  monetaryTransfers: "State Department → District Collector → Block Development Officer → Gram Panchayat → Beneficiary",
  dbtScheme: "Core Banking System → Aadhaar Authentication → DBT Portal → Bank Account",
};

export const administrativeBottlenecks = [
  {
    issue: "Land Record Digitization Gaps",
    description: "Updated Jamabandi records (post-2010 mutations) not uniformly digitized",
    impact: "PM-KISAN and land-linked scheme delivery affected",
  },
  {
    issue: "Aadhaar-Seeding Delays",
    description: "~8-12% of eligible pension scheme beneficiaries lack properly seeded Aadhaar",
    impact: "DBT authentication failures",
  },
  {
    issue: "Bank Account Operational Issues",
    description: "Dormant accounts, KYC lapses, zero-balance account problems",
    impact: "Last-mile delivery failures despite confirmed eligibility",
  },
  {
    issue: "G2P Payment Delays",
    description: "3-15 days beyond scheduled release date",
    cause: "Reconciliation procedures between state treasuries and RBI/RTGS systems",
  },
  {
    issue: "Administrative Capacity Variation",
    description: "District-level implementation varies significantly",
    strongerDistricts: ["Hoshiarpur", "Rupnagar"],
    weakerDistricts: ["Ferozpur", "Muktsar", "Fazilka"],
  },
];

// ==========================================
// DBT ANALYSIS
// ==========================================

export const dbtPenetration = {
  majorSchemes: "78-85%",
  inKindTransfers: "Physical delivery persists for ration through PDS, fertilizer distribution",
};

export const dbtAdvantages = [
  "Reduced interception by middlemen",
  "Transparent digital audit trail",
  "Faster fund reach in ideal conditions",
  "Beneficiary empowerment through choice",
];

export const dbtLimitations = [
  "Technical failures in authentication",
  "Beneficiary bank account issues",
  "Exclusion of those without formal banking",
  "Inability to address quality of service issues (healthcare, education)",
];

// ==========================================
// INCLUSION/EXCLUSION ERRORS
// ==========================================

export const inclusionErrors = {
  description: "Non-eligible households incorrectly receiving scheme benefits",
  manifestations: [
    "PM-KISAN payments to farmers exceeding income thresholds or land ceiling limits",
    "Ayushman Bharat cards issued to families outside SECC 2011 target group",
    "MGNREGA job cards allocated to non-rural households or fictitious names",
  ],
};

export const exclusionErrors = {
  description: "Genuine beneficiaries erroneously denied scheme access",
  manifestations: [
    "Landless agricultural laborers (~18-22% of rural workforce) excluded from PM-KISAN",
    "SC/OBC beneficiaries with land disputes excluded due to record mismatches",
    "Urban informal workers excluded from MGNREGA despite rural-adjacent residence",
    "Migrant laborers excluded from state pension schemes due to domicile requirements",
  ],
};

// ==========================================
// LEAKY BUCKET ANALYSIS
// ==========================================

export const leakageRates = [
  {
    scheme: "MGNREGA",
    estimatedLeakage: "25-35%",
    primaryLeakagePoints: "Wage rate underpayment, worksite manipulation, ghost beneficiaries",
    region: "Higher in Malwa border districts",
  },
  {
    scheme: "PM-KISAN",
    estimatedLeakage: "8-12%",
    primaryLeakagePoints: "Land ceiling violations, duplicate payments, deceased farmer payments",
  },
  {
    scheme: "PDS/Ration",
    estimatedLeakage: "15-20%",
    primaryLeakagePoints: "Ghost ration cards, quantity/quality shortfalls, unauthorized commodity diversion",
  },
  {
    scheme: "Ayushman Bharat",
    estimatedLeakage: "10-15%",
    primaryLeakagePoints: "Empanelled hospital fraud, package upcoding, unnecessary procedures",
  },
];

// ==========================================
// ELITE CAPTURE PHENOMENA
// ==========================================

export const eliteCapturePatterns = [
  {
    type: "Landowner Dominance",
    description: "PM-KISAN's land-linked eligibility excludes landless laborers",
    impact: "Benefits disproportionately flow to above-poverty-line households",
  },
  {
    type: "Caste Network Effects",
    description: "In villages with concentrated land ownership (Jat Sikh agrarian elites), scheme information and approval filtered through caste networks",
    impact: "SC and OBC households report lower awareness and access even when formally eligible",
  },
  {
    type: "Political Influence Over Targeting",
    description: "Local political networks influence sequencing of verification, dispute resolution, delivery prioritization",
    impact: "Connection to Sarpanch or local MLA significantly affects speed and certainty of scheme access",
  },
  {
    type: "Private Provider Capture",
    description: "Private healthcare providers (concentrated in urban Ludhiana, Jalandhar, Amritsar) capture Ayushman benefits",
    impact: "Rural PHCs and CHCs underutilized for scheme purposes",
  },
];

// ==========================================
// GENUINE BENEFICIARY BARRIERS
// ==========================================

export const beneficiaryBarriers = [
  {
    barrier: "Documentation Barriers",
    description: "Missing Caste certificates, income certificates, BPL cards, or disability certifications",
  },
  {
    barrier: "Awareness Gaps",
    description: "Eligible SC/OBC beneficiaries report never receiving scheme information through official channels",
    cause: "Inconsistently funded Anganwadi worker and ASHA worker outreach",
  },
  {
    barrier: "Geographic Accessibility",
    description: "Remote villages in Fazilka, Gurdaspur, and Hoshiarpur face physical access barriers",
    impact: "Registration camps, bank branches, empanelled hospitals difficult to reach",
  },
  {
    barrier: "Digital Literacy",
    description: "Elderly, women, and less-educated beneficiaries struggle with online processes",
    impact: "OTP verification and DBT tracking challenges",
  },
];

// ==========================================
// VOTER ATTRIBUTION OF WELFARE
// ==========================================

export const voterAttributionPatterns = {
  visibilityVsFunding: "Voters attribute visible welfare (roads, cards, money received) to current government, ignoring funding source",
  sourceConfusion: "40-60% of beneficiaries cannot correctly identify central vs. state government responsible for schemes",
  temporalAttribution: "Families receiving PM-KISAN in 2025 under AAP may credit AAP despite unchanged central program",
  incumbencyAdvantage: "AAP receives automatic credit/blame for delivery regardless of scheme origin",
};

export const congressAAPPositioning = {
  congressLegacy: [
    "Original Bebe Nanki implementation (2007)",
    "NREGA expansion during 2009-2014",
    "Free electricity for farmers (partially continued)",
    "SC/OBC scholarship programs",
  ],
  congressChallenges: [
    "AAP's aggressive information campaign positioning as pro-poor alternative",
    "Congress's own governance failures during 2012-2017",
    "Limited investment in welfare communication infrastructure",
  ],
  aapPositioning: [
    "High-profile welfare distribution events",
    "Visible distribution through state apparatus (MLAs, DCs)",
    "New state-specific schemes for fresh attribution",
    "Government advertisement highlighting welfare expansion",
  ],
};

// ==========================================
// INFORMATION ASYMMETRY
// ==========================================

export const informationAsymmetry = {
  partyAdvantage: [
    "Detailed knowledge about which villages, communities, families received which schemes",
    "Information not publicly documented but valuable electoral intelligence",
  ],
  voterLimitations: [
    "Lack of knowledge about total monetary value of benefits received",
    "Inability to attribute correctly to central vs. state government",
    "Unaware of pending entitlements and application status",
    "Unaware of grievance redressal mechanisms",
  ],
  strategicUse: [
    "Political parties control information dissemination to beneficiaries",
    "Local worker network can mobilize voters around entitlements",
    "Awareness campaigns create perception of party as one that 'cares'",
  ],
};

// ==========================================
// GROUND-LEVEL AWARENESS VS DELIVERY
// ==========================================

export const deliveryVsAwarenessReality = {
  deliveryReality: [
    { scheme: "PM-KISAN", reality: "~2.3 million Punjab farmers receive Rs 6,000/year" },
    { scheme: "Ayushman Bharat", reality: "~3.9 million families eligible, coverage activation varies" },
    { scheme: "MGNREGA", reality: "Average 40-55 person-days generated per active household (below 100-day guarantee)" },
  ],
  awarenessReality: [
    { issue: "MGNREGA workers", awareness: "Many unaware of 100-day guarantee" },
    { issue: "PM-KISAN beneficiaries", awareness: "Often cannot recall last installment date" },
    { issue: "Ayushman Bharat cardholders", awareness: "Frequently do not know coverage amount" },
  ],
};

// ==========================================
// KEY CONCEPTS & DEFINITIONS
// ==========================================

export const welfareKeyConcepts = {
  DBT: "Direct Benefit Transfer - Government transfer of welfare benefits directly to beneficiaries' bank accounts",
  inclusionError: "Error where non-eligible household incorrectly receives welfare benefits (false positive)",
  exclusionError: "Error where genuinely eligible household is erroneously denied welfare benefits (false negative)",
  leakyBucket: "Gap between government budget allocation and actual benefit receipt due to leakage",
  eliteCapture: "Process by which socially/economically powerful groups disproportionate benefit despite formal targeting",
  welfareDeliveryChain: "Sequence of actors through which welfare benefits flow from government to beneficiary",
  politicalCreditAssignment: "Process by which voters attribute welfare outcomes to specific parties/governments",
  tunnelVisionHeuristic: "Voter cognitive shortcut where one primary issue dominates political evaluation",
  welfarePositioning: "Strategic process of associating party with welfare delivery in voter perceptions",
  SECC2011: "Socio-Economic Caste Census 2011 - primary targeting database for Ayushman Bharat",
  NSAP: "National Social Assistance Programme - central government social assistance for elderly, widows, disabled below poverty line",
};
