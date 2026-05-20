// AAP Governance Performance Data (2022-2026)
// Derived from: research-P3/aap-governance/A1.01_aap_tenure_overview.md
// Research Date: May 2026 | Status: COMPLETE

import type {
  AAPGovernanceKPI,
  AAPPromise,
  AAPPolicyEvent,
  BudgetAllocation,
  AAPMajorAchievement,
  PerceptionTimeline,
  OppositionCriticism,
} from "@/types/aap-governance-types";

// ==========================================
// METADATA
// ==========================================

const aapGovernanceMetadata = {
  researchDate: "May 2026",
  sourceType: "Live Web Research (Stream A)",
  analyst: "AI Agent",
  status: "COMPLETE" as const,
};

// ==========================================
// PROMISE TRACKER DATA
// ==========================================

export const aapPromises: AAPPromise[] = [
  {
    id: "AAP_001",
    promise: "25 lakh jobs",
    status: "PARTIALLY_FULFILLED",
    deliveryStatus: "65,264 govt + 7 lakh private claimed = ~7.65 lakh total",
    evidence:
      "65,264 government jobs claimed; 7 lakh private jobs claimed; total far below 25 lakh target",
    source:
      "Babushahi, Sunday Guardian - Youth unemployment at 14.9% (15-29 age group)",
    category: "employment",
    fulfillmentPercent: 31,
  },
  {
    id: "AAP_002",
    promise: "300 units free electricity",
    status: "FULFILLED",
    deliveryStatus: "Fully implemented",
    evidence:
      "90% households receive zero bills; free power continues for farmers (8 hrs/day)",
    source: "Tribune, Punjab Newsline - Rs 15,550 crore power subsidy in Budget 2026-27",
    category: "electricity",
    fulfillmentPercent: 100,
  },
  {
    id: "AAP_003",
    promise: "Rs 1,000/month for women",
    status: "DELAYED_PILOT_ONLY",
    deliveryStatus: "Pilot launched Apr 2026, 4 years after election",
    evidence:
      "Announced in Budget Mar 2026; pilot rolled out in select constituencies Apr 2026",
    source:
      "NDTV, Economic Times - Named Mukh Mantri Mawan Dhiyan Satkar Yojna",
    category: "women_welfare",
    fulfillmentPercent: 10,
  },
  {
    id: "AAP_004",
    promise: "Drug-free Punjab",
    status: "NOT_FULFILLED",
    deliveryStatus: "Self-imposed deadline of May 2025 not met",
    evidence:
      "8,344 FIRs, 14,734 arrests under Yudh Nashian Virudh; drugs persist",
    source: "Sunday Guardian - DGP did not declare state drug-free",
    category: "drugs",
    fulfillmentPercent: 0,
  },
  {
    id: "AAP_005",
    promise: "Aam Aadmi Clinics / Mohalla Clinics",
    status: "FULFILLED",
    deliveryStatus: "881 clinics opened",
    evidence: "5 crore+ outpatient visits registered",
    source: "Punjab Newsline, Frontline",
    category: "healthcare",
    fulfillmentPercent: 100,
  },
  {
    id: "AAP_006",
    promise: "End VIP culture",
    status: "NOT_FULFILLED",
    deliveryStatus: "No visible change",
    evidence:
      "State resources allegedly used for Delhi AAP leaders; court asked for account of advertisement spending",
    source: "Outlook India, The Wire",
    category: "governance",
    fulfillmentPercent: 0,
  },
  {
    id: "AAP_007",
    promise: "Eliminate mafias (transport, liquor, cable, mining, sand)",
    status: "NOT_FULFILLED",
    deliveryStatus: "All mafias continue to flourish",
    evidence: "Illegal mining continues",
    source: "Outlook India",
    category: "governance",
    fulfillmentPercent: 0,
  },
  {
    id: "AAP_008",
    promise: "MSP for 22 crops",
    status: "NOT_FULFILLED",
    deliveryStatus: "Not implemented",
    evidence: "Mann deflects to Centre; farmers continue protests at Khanauri border",
    source: "Frontline",
    category: "agriculture",
    fulfillmentPercent: 0,
  },
  {
    id: "AAP_009",
    promise: "Jan Lokpal Bill",
    status: "NOT_FULFILLED",
    deliveryStatus: "Never introduced",
    evidence: "Anti-corruption action limited to Vigilance Bureau raids",
    source: "Outlook India",
    category: "governance",
    fulfillmentPercent: 0,
  },
  {
    id: "AAP_010",
    promise: "Holy City status for Amritsar and Anandpur Sahib",
    status: "FULFILLED",
    deliveryStatus: "Both declared as promised",
    evidence: "",
    source: "Outlook India",
    category: "governance",
    fulfillmentPercent: 100,
  },
  {
    id: "AAP_011",
    promise: "Free healthcare up to Rs 10 lakh per family",
    status: "FULFILLED",
    deliveryStatus: "Mukh Mantri Sehat Yojna launched",
    evidence: "Rs 2,000 crore allocated in Budget 2026-27",
    source: "Punjab Newsline",
    category: "healthcare",
    fulfillmentPercent: 100,
  },
  {
    id: "AAP_012",
    promise: "Doorstep ration delivery",
    status: "ROLLED_BACK",
    deliveryStatus: "Scheme announced but later withdrawn",
    evidence: "",
    source: "Tribune",
    category: "social_welfare",
    fulfillmentPercent: 0,
  },
  {
    id: "AAP_013",
    promise: "Anti-Corruption Action Line",
    status: "PARTIALLY_FULFILLED",
    deliveryStatus: "12,218 complaints; 275 FIRs; 341 arrested",
    evidence:
      "Rajasthan model without Lokpal; no systemic anti-corruption reform",
    source: "Babushahi",
    category: "governance",
    fulfillmentPercent: 50,
  },
];

// ==========================================
// POLICY TIMELINE
// ==========================================

export const aapPolicyTimeline: AAPPolicyEvent[] = [
  {
    date: "Mar 16, 2022",
    policy: "Bhagat Mann sworn in as CM at Khatkar Kalan",
    impact: "Symbolic launch; oath taken at ancestral village of Bhagat Singh",
  },
  {
    date: "Mar 23, 2022",
    policy: "Anti-Corruption Action Line launched",
    impact: "12,218 complaints; 275 FIRs registered, 341 arrested as of Apr 2026",
  },
  {
    date: "Apr 2022",
    policy: "300 units free electricity for domestic consumers",
    impact: "90% households receive zero electricity bills; major relief but fiscal burden",
  },
  {
    date: "Jul 2022",
    policy: "AAP loses Sangrur Lok Sabha bypoll",
    impact: "Simranjit Singh Mann (pro-Khalistan advocate) wins -- early warning sign",
  },
  {
    date: "2022-23",
    policy: "Aam Aadmi Clinics launched",
    impact: "881 clinics opened by 2026; 5 crore+ outpatient visits",
  },
  {
    date: "May 2023",
    policy: "Canal water revived; Malwa Canal announced",
    impact: "18,349 long-neglected canals revived; irrigation reached 78% of fields",
  },
  {
    date: "Jul 2023",
    policy: "Purchase of GVK private thermal plant (540 MW) at Goindwal Sahib",
    impact: "Reduced electricity production costs; PSPCL turned profitable",
  },
  {
    date: "Sep 2023",
    policy: "Cabinet reshuffle (first)",
    impact: "Faced internal dissent; some ministers dropped",
  },
  {
    date: "Jan 2024",
    policy: "Schools of Eminence programme",
    impact: "118 planned, 60 operational by 2026",
  },
  {
    date: "Mar 2024",
    policy: "Budget FY 2024-25 presented",
    impact: "Debt projected at Rs 3.74 lakh crore",
  },
  {
    date: "May 2024",
    policy: "300 units free power extended; daytime power for farmers",
    impact: "Eight hours uninterrupted daytime electricity for irrigation",
  },
  {
    date: "Jun 2024",
    policy: "AAP wins only 3/13 Lok Sabha seats",
    impact: "Vote share drops to 26%; Mann resigns as state convenor",
  },
  {
    date: "Sep 2024",
    policy: "Major cabinet reshuffle",
    impact: "4 ministers dropped, 5 new faces inducted; OSD Onkar Singh removed",
  },
  {
    date: "Oct 2024",
    policy: "AAP MLAs face public ire over unfulfilled promises",
    impact: "Rising discontent in villages reported by Indian Express",
  },
  {
    date: "Nov 2024",
    policy: "AAP wins Gidderbaha, Dera Baba Nanak, Chabbewal bypolls",
    impact: "Tally rises to 94; Congress wins Barnala",
  },
  {
    date: "Jan 2025",
    policy: "Farmers protest MSP; Mann urges PM to talk",
    impact: "Government's own MSP procurement of 22 crops remains unfulfilled",
  },
  {
    date: "Mar 2025",
    policy: "3-year report card presented",
    impact: "Claims 50,000+ government jobs; opposition disputes figures",
  },
  {
    date: "Mar 2025",
    policy: "'Yudh Nashian Virudh' anti-drug campaign launched",
    impact: "8,344 FIRs, 14,734 arrests, 586 kg heroin seized by May 2025",
  },
  {
    date: "Aug 2025",
    policy: "Land pooling policy withdrawn after HC strictures",
    impact: "Government forced to reverse controversial policy",
  },
  {
    date: "Oct 2025",
    policy: "Delhi leaders' interference reported",
    impact: "The Wire reports local AAP MLAs unhappy with Delhi durbar",
  },
  {
    date: "Jan 2026",
    policy: "Punjab ranked #1 in NAS Grade 9",
    impact: "Surpassed Kerala and Chandigarh in national survey",
  },
  {
    date: "Mar 2026",
    policy: "Progressive Punjab Investors Summit",
    impact: "Claimed Rs 1.55 lakh crore investment commitments",
  },
  {
    date: "Mar 8, 2026",
    policy: "Budget FY 2026-27: Rs 2.6 lakh crore outlay",
    impact: "Women's stipend scheme announced; debt at Rs 4.48 lakh crore",
  },
  {
    date: "Mar 16, 2026",
    policy: "4-year anniversary; all guarantees fulfilled claim",
    impact: "16,000 Jan Sabhas held across state for report card",
  },
  {
    date: "Apr 2026",
    policy: "Women's Rs 1,000/month pilot launched in select constituencies",
    impact: "Only pilot, not statewide; election-year rollout",
  },
  {
    date: "May 2026",
    policy: "ED raids on AAP Rajya Sabha MP Ashok Kumar Mittal",
    impact: "Political storm; BJP-AAP clash intensifies",
  },
];

// ==========================================
// BUDGET DATA
// ==========================================

export const aapBudgetOverview = {
  totalOutlay: 260437, // Rs crore
  projectedGSDP: 980635, // Rs crore (approx 10% growth)
  revenueDeficit: 2.06, // % of GSDP
  fiscalDeficit: 4.08, // % of GSDP
  outstandingDebt: 442604, // Rs crore (approx Rs 4.48 lakh crore)
  debtToGSDP: 45, // percentage
  fiscalYear: "2026-27",
};

export const aapMajorAllocations: BudgetAllocation[] = [
  {
    sector: "Social Welfare & Women Empowerment",
    allocationRsCrore: 18304,
    percentChangeYoY: 96,
    category: "Social",
  },
  {
    sector: "Women's Stipend Scheme",
    allocationRsCrore: 9300,
    category: "Women Welfare",
  },
  {
    sector: "Education",
    allocationRsCrore: 19279,
    percentChangeYoY: 7,
    category: "Education",
  },
  {
    sector: "Agriculture & Allied Sectors",
    allocationRsCrore: 15377,
    category: "Agriculture",
  },
  {
    sector: "Power Subsidy",
    allocationRsCrore: 15550,
    category: "Energy",
  },
  {
    sector: "Health",
    allocationRsCrore: 6879,
    category: "Healthcare",
  },
  {
    sector: "Health Insurance (Mukh Mantri Sehat Yojna)",
    allocationRsCrore: 2000,
    category: "Healthcare",
  },
  {
    sector: "Road & Bridge Infrastructure",
    allocationRsCrore: 5440,
    category: "Infrastructure",
  },
  {
    sector: "Free Bus Travel for Women",
    allocationRsCrore: 600,
    category: "Transport",
  },
  {
    sector: "Social Security Pensions",
    allocationRsCrore: 6150,
    category: "Social",
  },
  {
    sector: "Meri Rasoi (Free Ration)",
    allocationRsCrore: 900,
    category: "Social",
  },
];

// ==========================================
// KEY ACHIEVEMENTS
// ==========================================

export const aapAchievements: AAPMajorAchievement[] = [
  {
    id: "ACH_001",
    title: "Employment Generation",
    description:
      "65,264 government jobs claimed in four years (highest in Punjab's history per government)",
    metrics: [
      { label: "Education Jobs", value: 16308 },
      { label: "Punjab Police Jobs", value: 12966 },
      { label: "Power Department Jobs", value: 8765 },
      { label: "Health & Family Welfare Jobs", value: 6320 },
      { label: "Local Government Jobs", value: 5771 },
      { label: "Private Sector Jobs Claimed", value: "7 lakh" },
    ],
    source: "Babushahi",
    category: "employment",
  },
  {
    id: "ACH_002",
    title: "Education Transformation",
    description:
      "Punjab ranked #1 in Grade 9 category in National Achievement Survey (NAS) 2024",
    metrics: [
      { label: "NAS Grade 9 Ranking", value: "#1" },
      { label: "Education Budget Increase", value: "52%", unit: "from Rs 12,657 crore to Rs 19,279 crore" },
      { label: "Schools of Eminence Planned", value: 118 },
      { label: "Schools Operational", value: 60 },
      { label: "Smart Classrooms Created", value: "9,000+" },
      { label: "Teachers Recruited", value: 14525 },
      { label: "Contractual Staff Regularized", value: 12316 },
    ],
    source: "Times of India",
    category: "education",
  },
  {
    id: "ACH_003",
    title: "Healthcare Expansion",
    description:
      "881 Aam Aadmi Clinics opened (vs 400 in 75 years by previous governments)",
    metrics: [
      { label: "Aam Aadmi Clinics", value: 881 },
      { label: "Outpatient Visits", value: "5 crore+" },
      { label: "Doctors Recruited", value: 1575 },
      { label: "Medical Colleges Under Construction", value: 7 },
      { label: "MBBS Seats to be Added", value: 600 },
    ],
    source: "Punjab Newsline",
    category: "healthcare",
  },
  {
    id: "ACH_004",
    title: "Digital Governance",
    description: "544 Sewa Kendras providing 465+ services",
    metrics: [
      { label: "Sewa Kendras", value: 544 },
      { label: "Services Offered", value: 465 },
      { label: "Monthly Footfall", value: "30 lakh" },
      { label: "Digital Services Delivered", value: "82 million" },
      { label: "Pendency Rate Reduced", value: "from 14% to 0.52%" },
      { label: "Property Documents Registered (Easy Registry)", value: "6 lakh+" },
    ],
    source: "Babushahi",
    category: "governance",
  },
  {
    id: "ACH_005",
    title: "Anti-Drug Campaign (Yudh Nashian Virudh)",
    description:
      "Major anti-drug initiative launched in March 2025",
    metrics: [
      { label: "FIRs Registered", value: 8344 },
      { label: "Arrests Made", value: 14734 },
      { label: "Heroin Seized", value: "586 kg", unit: "kg" },
    ],
    source: "Sunday Guardian",
    category: "drugs",
  },
];

// ==========================================
// PUBLIC PERCEPTION DATA
// ==========================================

export const aapPerceptionTimeline: PerceptionTimeline[] = [
  {
    period: "2022",
    description: "Landslide Mandate",
    voteShare: 42,
    seatsWon: 92,
    keyNarrative:
      "AAP won 92/117 seats with 42% vote share. Ik Mauka Kejriwal Nu campaign resonated. Anti-incumbency against Congress drove the wave.",
  },
  {
    period: "2024",
    description: "Significant Erosion",
    voteShare: 26,
    seatsWon: 3,
    keyNarrative:
      "AAP won only 3/13 Lok Sabha seats; Congress won 7. Vote share dropped from 42% to 26%. Growing complaints from AAP MLAs about public anger.",
    turnaroundFactors: [
      "By-election wins partially recovered ground",
      "Mann reshuffled cabinet; dropped 4 ministers",
    ],
  },
  {
    period: "2026",
    description: "Partial Recovery, Persistent Concerns",
    voteShare: undefined,
    seatsWon: 94,
    keyNarrative:
      "Government claims all guarantees fulfilled in 4-year report card. Education ranking (#1 in NAS) is genuine achievement. Women's stipend rolled out as pilot -- 4 years late, seen as election-year move.",
    turnaroundFactors: [
      "Drug menace, gangsterism remain top public concerns",
      "Debt at Rs 4.48 lakh crore creates anxiety",
      "Delhi leaders' interference is growing irritant",
    ],
  },
];

// ==========================================
// OPPOSITION CRITICISM
// ==========================================

export const aapOppositionCriticism: OppositionCriticism[] = [
  {
    party: "CONGRESS",
    source: "MP Gurjeet Singh Aujla (Amritsar)",
    keyPoints: [
      "Called Rs 1,000/month promise a betrayal",
      "Calculates Rs 48,000 owed per eligible woman",
      "Criticized decline in governance and administrative functioning",
    ],
    date: "March 2026",
  },
  {
    party: "CONGRESS",
    source: "Opposition Leader Pratap Singh Bajwa",
    keyPoints: [
      "Called it gangster rule, not Bhagwant Mann government",
      "Alleged financial mismanagement through auctioning properties",
      "Cited illegal mining with connivance of local officers",
    ],
    date: "2026",
  },
  {
    party: "BJP",
    source: "Union Minister Ravneet Singh Bittu",
    keyPoints: [
      "Criticized AAP for announcing schemes in Delhi while Punjab promises unfulfilled",
    ],
    date: "January 2025",
  },
  {
    party: "EXPERT",
    source: "Prof. Ronki Ram (Panjab University)",
    keyPoints: [
      "Party has not brought radical social and economic changes",
      "Does not reflect Bhagat Singh's revolutionary ideals",
    ],
  },
  {
    party: "ACADEMIC",
    source: "Outlook India analysis",
    keyPoints: [
      "Organized crime, fiscal discipline, mafia elimination biggest electoral vulnerabilities",
    ],
    date: "April 2026",
  },
];

// ==========================================
// SOURCES
// ==========================================

const aapGovernanceSources = [
  "Babushahi -- CM Mann unveils Punjab's 4-year achievements (Apr 3, 2026)",
  "Outlook India -- Four Years of AAP Government in Punjab: Biggest Hits and Misses (Apr 6, 2026)",
  "The Tribune -- Mann govt's half-term over, governance still a challenge (Sep 16, 2024)",
  "Sunday Guardian -- AAP faces heat in Punjab over unmet promises (Jul 10, 2025)",
  "Frontline (The Hindu) -- Unkept promises in Punjab haunt AAP in Delhi (Jan 29, 2025)",
  "Times of India -- Mann presents education report card (Mar 31, 2026)",
  "Punjab Newsline -- AAP govt's politics of work fulfilled all guarantees (Mar 16, 2026)",
  "The Wire -- Delhi leaders' involvement hurting AAP government (Oct 27, 2025)",
  "Drishti IAS -- Punjab Budget 2026-27 Overview (Mar 11, 2026)",
  "Indian Express -- Punjab Budget analysis (Mar 8, 2026)",
  "Punjab Today News -- Punjab Budget 2026: Five Questions as Debt Nears Rs 4.5 Lakh Crore",
];

// ==========================================
// MAIN KPI DATA
// ==========================================

export const aapGovernanceKPI: AAPGovernanceKPI = {
  metadata: aapGovernanceMetadata,
  promises: aapPromises,
  budget: aapBudgetOverview,
  majorAllocations: aapMajorAllocations,
  policyTimeline: { events: aapPolicyTimeline },
  achievements: aapAchievements,
  perception: {
    timelines: aapPerceptionTimeline,
    currentSentiment: "mixed",
    keyIssues: [
      "Drug menace",
      "Gangsterism",
      "Fiscal debt",
      "Unfulfilled promises",
      "Delhi interference",
    ],
    riskFactors: [
      "27 lakh youth unemployed despite claims",
      "Drug trade persists despite Yudh Nashian Virudh",
      "Women's stipend 4 years late",
    ],
  },
  oppositionCriticism: aapOppositionCriticism,
  sources: aapGovernanceSources,
};

// ==========================================
// EXPORTS
// ==========================================

export default aapGovernanceKPI;
