// Governance - AAP Infrastructure & Finance KPI Data (2022-2026)
// Derived from: research-M2/MP1-foundational/governance/infra-finance.md
// Research Date: 19 May 2026 | Data Currency: March 2026 (Budget FY 2026-27)

import type {
  InfraFinanceKPI,
  InfraFinanceMetadata,
  DebtTrajectory,
  BudgetSnapshot,
  PowerSubsidyData,
  FreebiesVsRevenueDeficit,
  FinancialStressIndicators,
  RoadInfrastructureData,
  WaterCrisisData,
  WaterPlan14Point,
  SmartCitiesData,
  RuralDevelopmentData,
  ExpertAssessment,
  StrategicImplicationsData,
  InfraFinanceSource,
} from "@/types/governance-infra-finance-types";

// ==========================================
// METADATA
// ==========================================

const infraFinanceMetadata: InfraFinanceMetadata = {
  researchDate: "19 May 2026",
  megaPillar: "MP1 - Foundational Scan (Governance)",
  intelligenceType: "Competitive Intelligence - Incumbent Performance Assessment",
  dataFreshness: "March 2026 (Budget FY 2026-27)",
  reliability: "HIGH",
};

// ==========================================
// DEBT TRAJECTORY DATA
// ==========================================

const debtTrajectory: DebtTrajectory = {
  march2022_AAPTookPower: 2.83, // Rs lakh crore
  march2025: 3.83, // Rs lakh crore
  re_FY2025_26: 4.02634, // Rs lakh crore (4,02,634 crore)
  projected_FY2026_27: 4.42604, // Rs lakh crore (4,42,604 crore)
  debtAdditionUnderAAP_4Years: 1.60, // Rs lakh crore
  debtToGSDP: {
    "2022-23_NITI_Aayog": 47,
    "2022-23_Parliament": 46.6,
    "FY2026-27_Estimate": 45.13,
  },
  nationalMedianDebtToGSDP: 32.1,
  punjabRankByDebtToGSDP: "2nd highest (after Arunachal Pradesh)",
};

// ==========================================
// BUDGET SNAPSHOT DATA
// ==========================================

const budgetFY2025_26: BudgetSnapshot = {
  fiscalYear: "FY 2025-26",
  totalExpenditureExclDebtRepayment: 146632, // Rs crore
  gsdp: {
    currentPrices: 891301, // Rs crore
    growth: 10, // percent
  },
  revenueDeficit: {
    percentageGSDP: 2.7,
    absolute: 23957, // Rs crore
  },
  fiscalDeficit: {
    percentageGSDP: 3.8,
    absolute: 34201, // Rs crore
  },
  interestPayment: 27679, // Rs crore
};

const budgetFY2026_27: BudgetSnapshot = {
  fiscalYear: "FY 2026-27",
  totalOutlay: 260437, // Rs crore
  gsdp: {
    currentPrices: 980635, // Rs crore
    growth: 10, // percent
  },
  revenueDeficit: {
    percentageGSDP: 2.06,
    absolute: 21955, // Rs crore
  },
  fiscalDeficit: {
    percentageGSDP: 4.08,
    absolute: undefined,
  },
  interestPayment: 28755, // Rs crore
};

// ==========================================
// POWER SUBSIDY DATA
// ==========================================

const powerSubsidyData: PowerSubsidyData = {
  agriculture: {
    tubewells: 14, // lakh
    re_FY2025_26: 9992, // Rs crore
    be_FY2026_27: 7715, // Rs crore
  },
  domestic: {
    freeUnitsSince: "July 2022",
    freeUnits: 300,
    re_FY2025_26: 7614, // Rs crore
    be_FY2026_27: 5771, // Rs crore
  },
  industry: {
    re_FY2025_26: 2894, // Rs crore
    be_FY2026_27: 2064, // Rs crore
  },
  totalPowerSubsidy: {
    re_FY2025_26: 20500, // Rs crore (~Rs 20,500 crore)
    be_FY2026_27: 15550, // Rs crore (~Rs 15,550 crore)
  },
};

// ==========================================
// FREEBIES VS REVENUE DEFICIT DATA
// ==========================================

const freebiesVsRevenueDeficit: FreebiesVsRevenueDeficit = {
  freePower: 15550, // Rs crore
  womenDole: {
    scheme: "Mukh Mantri Mawan Dhian Satikar Yojana",
    amount: 9300, // Rs crore
  },
  freeTravelWomen: 600, // Rs crore
  totalFreebies: 26300, // Rs crore
  revenueDeficit: 21955, // Rs crore
  surplusIfEliminated: true,
};

// ==========================================
// FINANCIAL STRESS INDICATORS
// ==========================================

const financialStress: FinancialStressIndicators = {
  newBorrowingDebtServicing: {
    percentage: 86,
    amount: 49900, // Rs crore in FY 2025-26
  },
  interestPayment: {
    amount: 27679, // Rs crore (FY 2025-26 RE)
    percentageOfRevenueReceipts: 23,
  },
  salaryPension: {
    salaries: 39115, // Rs crore (FY 2026-27 BE)
    pensions: 22465, // Rs crore (FY 2026-27 BE)
    total: 61580, // Rs crore
    comparison: "exceeding total subsidy bill",
  },
  interestRateReduction: {
    previous: "11-12%",
    current: "7%",
    note: "negotiated on restructured loans",
  },
};

// ==========================================
// ROAD INFRASTRUCTURE DATA
// ==========================================

const roadInfrastructureData: RoadInfrastructureData = {
  initiatives: [
    {
      name: "18,000-km Road Upgrade Drive",
      status: "Approved",
      details: "Repair/reconstruction of main and link roads by March 2026",
      cost: 3000, // Rs crore from Centre
      length: 18000, // km
      timeline: "Nov 2025",
    },
    {
      name: "7,767 km Link Roads",
      status: "Under upgrade",
      details: "As of Dec 2025, per PWD Minister Harbhajan Singh's review",
      length: 7767,
    },
    {
      name: "Rural Link Roads Programme",
      status: "Ongoing",
      details: "Strengthening, resurfacing with 5-year maintenance plan",
      cost: 4150, // Rs crore
      length: 19492, // km
    },
    {
      name: "Existing Road Maintenance",
      status: "Ongoing",
      details: "Under PWD and Punjab Mandi Board",
      length: 12000, // km
    },
  ],
  newRoadsMar2026: {
    length: 300, // km
    timeline: "Mar 2026",
  },
  existingRoadMaintenance: {
    length: 12000, // km
    by: "PWD and Punjab Mandi Board",
  },
  fundingFromCentre: {
    amount: 3000, // Rs crore
    scheme: "Special Assistance to States for Capital Investment",
  },
  ruralLinkRoads: {
    length: 19492, // km
    programmeCost: 4150, // Rs crore
    features: ["Strengthening", "Resurfacing", "5-year maintenance plan"],
  },
  assessment: {
    strategicTiming: "Ahead of Zila Parishad and Block Samiti elections",
    newBorrowingDebtServicing: "86% of new borrowing (Rs 49,900 crore) goes to servicing old debt",
    oppositionAllegations: "Partap Singh Bajwa: 'not even a single development project started' in 2.5 years (July 2024)",
  },
};

// ==========================================
// WATER CRISIS DATA
// ==========================================

const waterCrisisData: WaterCrisisData = {
  severity: "CRITICAL",
  blocks: {
    total: 153,
    overExploited: { count: 115, percentage: 75 },
    assessedOverExploited: { count: 109, percentage: 79 },
    safe: { count: 22, percentage: 16 },
  },
  annualWaterTableDecline: 0.7, // metre per year
};

const waterPlan14Point: WaterPlan14Point = {
  name: "14-Point Action Plan",
  approvalDate: "June 2025",
  restored: {
    waterCourses: { count: 17000, length: 6300, yearsAbandoned: "30-40 years" },
    canals: { count: 79, length: 545 }, // km
  },
  targetHectares: 1579379, // hectares under water-efficient irrigation
  features: [
    "Check dams",
    "New ponds",
    "Lift irrigation systems",
    "Nano bubble technology for water treatment",
    "Ghaggar River floodwater storage for agricultural use",
    "Water User Associations for participatory irrigation management",
  ],
  waterUserAssociations: true,
  regionalVariation: {
    southwestPunjab: "waterlogging",
    kandiArea: "extremely deep groundwater",
  },
  privateSectorCSR: true,
  assessment: {
    comprehensive: true,
    launchDelay: "3 years into AAP's tenure (launched June 2025)",
    crisisContinuing: true,
  },
};

// ==========================================
// SMART CITIES DATA
// ==========================================

const smartCitiesData: SmartCitiesData = {
  mission: "Smart Cities Mission",
  cities: ["Ludhiana", "Amritsar", "Jalandhar", "Sultanpur Lodhi"],
  projects: [
    {
      city: "Ludhiana",
      status: {
        completed: { projects: 61, amount: 688 }, // Rs crore
        ongoing: { projects: 13, amount: 207 }, // Rs crore
        inTendering: 9,
      },
      issues: ["Buddha Nullah rejuvenation (25% spent)"],
      nationalRanking: 49,
      utilization: { received: 959, utilised: 934 },
    },
    {
      city: "Amritsar",
      status: {
        completed: { projects: 29, amount: 142 }, // Rs crore
        pending: { projects: 6, amount: 745 }, // Rs crore
      },
      issues: [
        "Canal-based water supply incomplete (Rs 384 crore)",
        "Integrated command centre delayed multiple times",
        "Outer circular road redevelopment substandard (Rs 120 crore)",
      ],
    },
    {
      city: "Jalandhar",
      status: {
        completed: { projects: 0, amount: 860 }, // Rs crore spent
      },
      issues: [
        "Surface water project (Rs 400 crore) missing March 2025 deadline",
        "Bio-mining (Rs 34 crore) contract terminated",
        "Sports hub (Rs 77 crore) not started",
      ],
    },
    {
      city: "Sultanpur Lodhi",
      status: {
        completed: { projects: 0, amount: 27 }, // Rs crore of 135 received
      },
      issues: [
        "Roads dug up for storm sewers not re-laid",
        "Consultant not even appointed",
        "Civic amenities deteriorated",
      ],
    },
  ],
  overallStatus: {
    completionRate: 87,
    nationalAverage: 94,
    timeframe: "nearly 10 years",
  },
  oppositionActions: [
    "AAP MLAs demanded CBI/Vigilance Bureau probe into 'multi-million scam'",
    "Congress MP Gurjit Singh Aujla demanded Vigilance Bureau inquiry",
    "BJP alleges state government delays matching grants",
  ],
  urbanDevelopment2025: {
    cities: 51,
    focus: ["roads", "drainage", "water supply"],
  },
  landPoolingPolicy: {
    cities: 27,
    approvalDate: "June 2025",
  },
};

// ==========================================
// RURAL DEVELOPMENT DATA
// ==========================================

const ruralDevelopmentData: RuralDevelopmentData = {
  budgetFY2025_26: {
    total: 3500, // Rs crore
    focus: ["village ponds", "playgrounds", "streetlights", "canal restoration", "sewage treatment"],
  },
  financeCommission: {
    year: "15th Finance Commission",
    spent: 2367, // Rs crore FY 2025-26
    comparison: "double the previous year's amount",
  },
  roadConnectivity: {
    commitment: "Pucca roads to every village",
    visibleProgress: "reported late 2025",
  },
  panchayatFunding: {
    oppositionAllegations: "denied development grants for 2+ years under AAP",
  },
  pmayg: {
    housesSanctioned: 347424,
    housesCompleted: 70905,
    asOfDate: "December 2024",
  },
  mgnrega: {
    status: "continues",
    note: "centrally sponsored; Punjab-specific person-days data not extracted",
  },
  assessment: {
    spendingAcceleration: "coinciding with pre-election cycle",
    panchayatNeglect: "suggested in early years of AAP tenure",
    visibleDeliverable: "pucca roads programme",
  },
};

// ==========================================
// EXPERT ASSESSMENT DATA
// ==========================================

const expertAssessment: ExpertAssessment = {
  expert: {
    name: "Prof. Kesar Singh Bhangoo",
    affiliation: "former economics professor, Punjabi University",
  },
  quote:
    "In the past three years, debt is rising at approximately Rs 44,000 crore per annum. Total debt would reach nearly Rs 5 lakh crore by 2027. This will affect investments and increase unemployment.",
  debtRiseRate: 44000, // Rs crore per annum
  projectedDebtBy2027: 500000, // Rs crore (5 lakh crore)
  implications: [
    "Debt is rising at approximately Rs 44,000 crore per annum",
    "Total debt would reach nearly Rs 5 lakh crore by 2027",
    "This will affect investments and increase unemployment",
  ],
};

// ==========================================
// STRATEGIC IMPLICATIONS DATA
// ==========================================

const strategicImplications: StrategicImplicationsData = {
  attackVectors: [
    {
      id: 1,
      title: "Debt Bomb",
      description:
        "Rs 1.60 lakh crore added in 4 years; Punjab is India's 2nd most indebted state. AAP's freebies (Rs 26,300 crore) exceed the revenue deficit.",
      keyStatistic: "Rs 1.60 lakh crore",
    },
    {
      id: 2,
      title: "Power Subsidy Unsustainability",
      description:
        "300 free units for domestic consumers added Rs 7,600 crore/year to subsidy bill. Total subsidy = 10% of entire state budget.",
      keyStatistic: "10% of state budget",
    },
    {
      id: 3,
      title: "Execution Gap",
      description:
        "Smart City projects across Ludhiana, Amritsar, Jalandhar show massive spending with minimal visible change. Even AAP MLAs demanded probes.",
    },
    {
      id: 4,
      title: "Delayed Action",
      description:
        "14-point water plan launched only in June 2025; 18,000-km road programme in November 2025 -- both in the final 18 months before elections.",
    },
    {
      id: 5,
      title: "Election-Driven Spending",
      description:
        "Women's dole (Rs 9,300 crore) promised in 2022 but delivered only in 2026 budget. Bajwa: 'After four years of silence, they suddenly remember the promise.'",
      keyStatistic: "Rs 9,300 crore",
    },
    {
      id: 6,
      title: "Capital Expenditure Squeeze",
      description:
        "86% of new borrowing services old debt; salaries + pensions + subsidies consume bulk of revenue, leaving little for development.",
      keyStatistic: "86%",
    },
  ],
  aapDefensives: [
    {
      claim: "Debt is in consonance with GSDP growth; debt-to-GSDP ratio improved from 47% to 45%.",
      counter: "45% is still 13 percentage points above national median (32.1%)",
    },
    {
      claim: "Excise revenue doubled under transparent governance.",
      counter: "Revenue growth doesn't offset massive subsidy commitments",
    },
    {
      claim: "17,000 water courses restored, 18,000 km road upgrade, pucca roads to every village.",
      counter: "Water crisis (115/153 blocks over-exploited) and debt trajectory (Rs 4.43 lakh crore by 2027) overshadow these",
    },
    {
      claim: "Legacy debt of previous Congress and SAD-BJP governments.",
      counter: "Rs 1.60 lakh crore added in just 4 years weakens this argument",
    },
  ],
  congressPreparedness: [
    {
      point: "Debt-to-GSDP at 45% is still 13 percentage points above national median (32.1%)",
      evidence: "NITI Aayog and Parliament data",
    },
    {
      point: "Legacy debt argument weakened by Rs 1.60 lakh crore addition in just 4 years",
      evidence: "Budget documents",
    },
    {
      point: "Road and water projects announced in 2025-26 are election-driven",
      evidence: "Timeline analysis",
    },
    {
      point: "Demand White Paper on all budget promises since 2022",
      evidence: "Election Commission guidelines",
    },
    {
      point: "SC scholarship delays (Rs 3,968 crore) and pension arrears to fund deficit reduction",
      evidence: "Budget documents",
    },
  ],
};

// ==========================================
// SOURCES
// ==========================================

const infraFinanceSources: InfraFinanceSource[] = [
  { id: 1, title: "Punjab Budget Analysis 2025-26", source: "PRS India", url: "prsindia.org" },
  { id: 2, title: "Punjab Budget FY 2026-27", source: "The Hindu", date: "8 March 2026" },
  { id: 3, title: "Punjab's debt expected to reach Rs 4.17 lakh crore", source: "New Indian Express", date: "27 March 2025" },
  { id: 4, title: "Punjab 14-point groundwater action plan", source: "New Indian Express", date: "20 June 2025" },
  { id: 5, title: "Smart City mess in Punjab", source: "Tribune India", date: "8 December 2024" },
  { id: 6, title: "Punjab lags in Smart Cities Mission", source: "Times of India", date: "26 April 2025" },
  { id: 7, title: "Punjab's freebies bill surpasses revenue deficit", source: "Indian Express", date: "8 March 2026" },
  { id: 8, title: "Growing burden of free power in Punjab", source: "Tribune India", date: "22 April 2025" },
  { id: 9, title: "Punjab 18,000-km road upgrade", source: "B2B Purchase", date: "28 November 2025" },
  { id: 10, title: "Macro and Fiscal Landscape of Punjab", source: "NITI Aayog", date: "2023" },
  { id: 11, title: "AAP Punjab PWD Minister review", source: "X/Twitter", date: "21 December 2025" },
  { id: 12, title: "Punjab government 14-point action plan for groundwater", source: "New Indian Express", date: "June 2025" },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const infraFinanceKPI: InfraFinanceKPI = {
  metadata: infraFinanceMetadata,
  debtTrajectory,
  budgetSnapshots: {
    fy2025_26: budgetFY2025_26,
    fy2026_27: budgetFY2026_27,
  },
  powerSubsidy: powerSubsidyData,
  freebiesVsRevenueDeficit,
  financialStress,
  roads: roadInfrastructureData,
  water: {
    crisis: waterCrisisData,
    plan14Point: waterPlan14Point,
  },
  smartCities: smartCitiesData,
  ruralDevelopment: ruralDevelopmentData,
  expertAssessment,
  strategicImplications,
  sources: infraFinanceSources,
};

// ==========================================
// CONVENIENCE EXPORTS
// ==========================================

export const debtStats = {
  totalDebtFY2026_27: 4.43, // Rs lakh crore
  debtAdded4Years: 1.60, // Rs lakh crore
  debtToGSDP: 45.13, // percent
  nationalMedian: 32.1, // percent
  rank: "2nd highest in India",
};

export const subsidyStats = {
  totalPowerSubsidy: 15550, // Rs crore FY 2026-27
  agriculture: 7715, // Rs crore
  domestic: 5771, // Rs crore
  industry: 2064, // Rs crore
  totalFreebies: 26300, // Rs crore
};

export const roadStats = {
  upgradeProgramme: 18000, // km
  ruralLinkRoads: 19492, // km
  newRoadsMar2026: 300, // km
  existingMaintenance: 12000, // km
};

export const waterStats = {
  overExploitedBlocks: 115, // out of 153
  totalBlocks: 153,
  percentageOverExploited: 75, // percent
  annualDecline: 0.7, // metre per year
  waterCoursesRestored: 17000,
  canalsRestored: 79,
};

export const smartCityStats = {
  completionRate: 87, // percent
  nationalAverage: 94, // percent
  projectsCompleted: 61 + 29, // Ludhiana + Amritsar
};

export const fiscalHealth = {
  revenueDeficitFY2026_27: 21955, // Rs crore
  fiscalDeficit: 4.08, // percent of GSDP
  interestPayment: 28755, // Rs crore FY 2026-27
  salariesPensionsTotal: 61580, // Rs crore
  newBorrowingDebtServicing: 86, // percent
};
