// Governance - Economic & Education-Health Performance Data
// Derived from: research-M2/MP1-foundational/governance/edu-health-performance.md
// Research Date: 2026-05-20 | Data Currency: 2024-2026

import type {
  EconomicPerformanceKPI,
  DebtTrajectoryEntry,
  FiscalDeficitEntry,
  CongressAttackLine,
  AAPDefenseLine,
  KeyIndicatorSummary,
} from "@/types/governance-edu-health-types";

// ==========================================
// DEBT TRAJECTORY DATA
// ==========================================

const DEBT_TRAJECTORY_DATA: DebtTrajectoryEntry[] = [
  { year: "2021-22", debtRsCrore: 281773, percentOfGSDP: 48.24 },
  { year: "2022-23", debtRsCrore: 314221, percentOfGSDP: 46.68 },
  { year: "2023-24", debtRsCrore: 346185, percentOfGSDP: 46.66 },
  { year: "2024-25", debtRsCrore: 382935, percentOfGSDP: 47.30 },
  { year: "2025-26 (BE)", debtRsCrore: 403000, percentOfGSDP: 46.80 },
  { year: "2025-26 (RE)", debtRsCrore: 417136, percentOfGSDP: 46.80 },
];

const ANNUAL_DEBT_INCREASE_HISTORY = [
  { period: "1980s", annualIncreaseRsCrore: 609 },
  { period: "1990-91 to 2001-02", annualIncreaseRsCrore: 2696 },
  { period: "2002-03 to 2006-07", annualIncreaseRsCrore: 6389 },
  { period: "2011-12 to 2021-22", annualIncreaseRsCrore: 19867 },
  { period: "AAP first three years (2022-23 to 2024-25)", annualIncreaseRsCrore: 33721 },
  { period: "2025-26 budgeted increase", annualIncreaseRsCrore: 34201 },
];

// ==========================================
// FISCAL DEFICIT DATA
// ==========================================

const FISCAL_DEFICIT_DATA: FiscalDeficitEntry[] = [
  { deficitType: "Fiscal Deficit (% GSDP)", FY2024_25_Actuals: 4.7, FY2025_26_BE: 3.8, FY2025_26_RE: 4.2, FY2026_27_BE: 4.1 },
  { deficitType: "Revenue Deficit (% GSDP)", FY2024_25_Actuals: 3.9, FY2025_26_BE: 2.7, FY2025_26_RE: 3.0, FY2026_27_BE: 2.2 },
  { deficitType: "Primary Deficit (% GSDP)", FY2024_25_Actuals: 1.8, FY2025_26_BE: 1.0, FY2025_26_RE: 1.1, FY2026_27_BE: 1.1 },
];

// ==========================================
// CONGRESS ATTACK LINES
// ==========================================

const CONGRESS_ATTACK_LINES: CongressAttackLine[] = [
  { label: "Debt Dhoka", description: "AAP promised development but Punjab is deeper in debt" },
  { label: "Kisan Virodhi", description: "Despite free power, farm growth is negative and no alternative employment" },
  { label: "Naukri Nahi", description: "Unemployment double the national average; youth leaving Punjab" },
  { label: "Karobar Chhota", description: "Industrial contraction, closure of small units" },
  { label: "Bijli-Freebi", description: "Free electricity actually benefits rich households more while state fiscal health deteriorates" },
];

// ==========================================
// AAP DEFENSE LINES
// ==========================================

const AAP_DEFENSE_LINES: AAPDefenseLine[] = [
  { point: "Previous governments left the debt", response: "Partially true, Congress also borrowed" },
  { point: "Welfare schemes help the poor", response: "But 75% of rich households also get free power" },
  { point: "Industrial Policy 2026 will create jobs", response: "Too late in the term, not yet materialised" },
  { point: "We inherited a broken economy", response: "Partially true but 4 years have passed" },
];

// ==========================================
// KEY DATA SUMMARY INDICATORS
// ==========================================

const KEY_INDICATORS: KeyIndicatorSummary[] = [
  { indicator: "GSDP Growth 2025-26", punjab: "6.1%", india: "7.4%", assessment: "Below national average" },
  { indicator: "Per Capita Income 2025-26", punjab: "Rs 2,30,523", india: "Rs 2,19,575", assessment: "Barely above national average" },
  { indicator: "Unemployment Rate", punjab: "6.1%", india: "3.2%", assessment: "Nearly double national average" },
  { indicator: "Debt as % GSDP", punjab: "46.8%", assessment: "Among highest for Indian states" },
  { indicator: "Fiscal Deficit 2025-26 RE", punjab: "4.2% of GSDP", assessment: "Above FRBM threshold" },
  { indicator: "Revenue Deficit 2025-26 RE", punjab: "3.0% of GSDP", assessment: "Elevated" },
  { indicator: "Committed Expenditure", punjab: "72% of revenue", assessment: "Very high — limits flexibility" },
  { indicator: "Industrial Growth 2024-25", punjab: "-1.2%", assessment: "Contracting" },
  { indicator: "Agricultural Growth 2025-26", punjab: "-2.5%", assessment: "Contracting" },
  { indicator: "Debt per Year (AAP avg)", punjab: "Rs 33,721 crore", assessment: "Highest in Punjab history" },
];

// ==========================================
// MAIN KPI DATA OBJECT
// ==========================================

export const economicPerformanceKPI: EconomicPerformanceKPI = {
  // Metadata
  metadata: {
    reportDate: "2026-05-20",
    megaPillar: "MP1 — Foundational Scan",
    domain: "Governance",
    taskId: "T-MP1-GOV-002",
    status: "COMPLETE",
    source: "web-research",
    confidence: "HIGH",
  },

  // Fiscal Data
  fiscal: {
    debtTrajectory: {
      data: DEBT_TRAJECTORY_DATA,
      annualIncreaseHistory: ANNUAL_DEBT_INCREASE_HISTORY,
      aapFirstThreeYears: {
        period: "2022-23 to 2024-25",
        annualAverageRsCrore: 33721,
      },
      sources: [
        "The Hindu (July 2025)",
        "Paper by Prof. Ranjit Singh Ghuman, GNDU",
        "PRS India Budget Analysis 2026-27",
      ],
    },

    fiscalDeficits: {
      data: FISCAL_DEFICIT_DATA,
      note: "In 2025-26, fiscal deficit expected to exceed budget estimates (4.2% vs 3.8% budgeted)",
      source: "PRS India Budget Analysis 2026-27",
    },

    revenueExpenditure: {
      budget2026_27: {
        totalExpenditureExcludingDebt: 166711,
        totalReceiptsExcludingBorrowings: 127740,
        gapFromNetBorrowings: 38471,
        revenueDeficit: 21955,
        revenueDeficitPercentGSDP: 2.2,
      },
      committedExpenditure2026_27: {
        total: 90335,
        percentOfRevenueReceipts: 72,
        breakdown: {
          salaries: 39115,
          salariesPercent: 31,
          pension: 22465,
          pensionPercent: 18,
          interest: 28755,
          interestPercent: 23,
        },
      },
      committedExpenditure2024_25: "85% of revenue receipts",
      source: "PRS India Budget Analysis 2026-27",
    },

    fiscalCrisisAssessment: {
      experts: [
        {
          viewType: "Alarmist",
          expertName: "Prof. Ranjit Singh Ghuman",
          affiliation: "GNDU",
          keyQuote:
            "Nearly 41% of total revenue went toward debt servicing. Approximately 23% was consumed by power subsidy. Salaries, wages, and pensions accounted for about 57.51%. These five heads together consumed nearly 122% of total revenue.",
        },
        {
          viewType: "Optimist",
          expertName: "Finance Minister Harpal Singh Cheema",
          affiliation: "Punjab Government",
          keyQuote:
            "The government maintains fiscal situation is stable. The AAP government invested Rs 1,000 crore each in the Guarantee Redemption Fund and Consolidated Sinking Fund, which now exceeds Rs 10,000 crore.",
        },
        {
          viewType: "Independent",
          expertName: "Dr. Lakhwinder Singh",
          affiliation: "IHD New Delhi",
          keyQuote:
            "The key problem in Punjab is that the State hardly has the resources to make a new capital investment; hence, the development has come to a near standstill. The government is borrowing to repay the rate of interest.",
        },
      ],
      overallAssessment:
        "Punjab exhibits classic debt trap dynamics — borrowing to service existing debt, with 72% of revenue pre-committed. While not a cash-flow crisis, structural fiscal health is severely compromised.",
    },
  },

  // GSDP Growth
  gsdp: {
    growthTrend: {
      data: [
        { year: "2022-23", punjabGSDPGrowth: 6.6, indiaGDPGrowth: 0, note: "National avg higher" },
        { year: "2023-24", punjabGSDPGrowth: 6.2, indiaGDPGrowth: 0, note: "National avg higher" },
        { year: "2024-25 (Adv Est)", punjabGSDPGrowth: 6.0, indiaGDPGrowth: 0, note: "National avg higher" },
        { year: "2025-26 (Est)", punjabGSDPGrowth: 6.1, indiaGDPGrowth: 7.4, note: "Punjab below national" },
      ],
      averageSince2020_21: 4.9,
      downwardSpiralNote: "Punjab's growth has been on a downward spiral since 2022-23",
      sources: ["Tribune India, March 27, 2025", "PRS India Budget Analysis 2026-27"],
    },

    sectoralComposition: {
      agriculture: { percentOfEconomy: 23, growth2025_26: -2.5 },
      manufacturing: { percentOfEconomy: 29, growth2024_25: -1.2 },
      services: { percentOfEconomy: 48, growthNote: "Growth slowing" },
      source: "PRS India Budget Analysis 2026-27",
    },

    perCapitaIncome: {
      punjab: 230523,
      india: 219575,
      ratio: 1.05,
      punjabGrowthRate: 6.4,
      indiaGrowthRate: 6.9,
      historicalRanking:
        "Punjab topped per capita income rankings until 2000. By 2021-22, fell to 10th among major Indian states.",
      source: "PRS India Budget Analysis 2026-27; IdeasforIndia, July 2024",
    },
  },

  // Unemployment
  unemployment: {
    labourForceParticipationRate: { punjab: 53.5, allIndia: 57.9 },
    unemploymentRate: {
      punjab: 6.1,
      allIndia: 3.2,
      note: "Punjab's unemployment rate is nearly double the national average",
    },
    workerPopulationRatio: { punjab: 50.2, allIndia: 56.0 },
    ruralUrbanNote:
      "Punjab has higher unemployment rates than the rest of India, especially in rural sectors. Paradoxically, mechanised agriculture has displaced rural labour without creating alternative employment.",
    youthUnemploymentNote:
      "High demand for emigration from Punjab coexists with high immigration of unskilled workers from poorer states. Youth of both genders are not finding appropriate employment.",
    source: "IdeasforIndia, July 2024, citing PLFS 2022-23 data",
  },

  // Industrial
  industrial: {
    FY2024_25: {
      industrialGrowth: -1.2,
      servicesGrowth: 0.3,
    },
    industrialPolicy2026: {
      name: "Progressive Industrial & Business Policy 2026",
      maxIncentives: "100%",
      investorsSummitPledged: 1.5, // Rs lakh crore
      jobsPromised: 500000,
      assessment:
        "Reactive policy announcement in an election year. Claims of Rs 1.5 lakh crore investment need verification. No major new manufacturing plants announced in Punjab 2022-2026 despite repeated promises.",
    },
    structuralProblems: [
      "Small firm sizes, lack of large industrial units",
      "Low investment, technical efficiency, and productivity growth",
      "Infrastructure deficits (power, roads, logistics)",
      "Competition from other states with better business environments",
    ],
    source: "Tribune India, March 27, 2025; News reports, March 2026",
  },

  // State Rankings
  stateRankings: {
    economicRankings: {
      perCapitaIncome2021_22: 10,
      perCapitaIncomeTrajectory: "Falling (was 1st until 2000)",
      gsdpVsNationalGDP: "Below national average",
    },
    easeOfBusiness: {
      ranking: "Not among top Indian states",
      note: "Neighboring Haryana and Gujarat significantly outperform Punjab",
    },
    healthEducationQuickRef: {
      schoolInfrastructure: "Improvements noted",
      educationalOutcomes: "Some indicators among best in India",
      dropoutRates: "Dropout rates rise in upper primary — inequality persists",
    },
    source: "IdeasforIndia, July 2024",
  },

  // Tax Revenue
  taxRevenue: {
    ownSourceRevenueConstraints: [
      "Limited industrial base (manufacturing contraction)",
      "Agricultural income dominance (farm income largely untaxed)",
      "Small service sector relative to national average",
    ],
    budget2026_27Status: "Tax-free budget — no new taxes announced (politically motivated ahead of 2027 elections)",
    federalTransferConcern:
      "Discontinuation of Revenue Deficit Grant from Union Budget 2026 described as major fiscal blow. Punjab was one of seven states receiving this grant.",
    source: "Reddit/r/punjab, February 2026",
  },

  // AAP Funding Operations
  aapFunding: {
    heavyBorrowing: {
      amountRsCrore: 38471,
      note: "Net borrowings in 2026-27 budget to meet expenditure",
    },
    waysAndMeansAdvances: {
      amountRsCrore: 80000,
      note: "Short-term RBI advances — essentially revolving credit to meet immediate obligations",
    },
    powerSubsidies: {
      amountRsCrore: 15550,
      percentOfRevenueReceipts: 12.3,
      householdCoverage: "75% of highest consumption households receive free electricity",
      note: "One of the highest across states; poorly targeted, benefiting non-poor disproportionately",
    },
    welfareSchemes: [
      {
        name: "Mukh Mantri Mawan Dhian Satikar Yojana",
        amountRsCrore: 9300,
        note: "Cash transfer scheme for women",
      },
      {
        name: "Meri Rasoi",
        amountRsCrore: 900,
        note: "Ration kits",
      },
    ],
    sinkingFunds: {
      current: 10000,
      previous: 3000,
      buildup: "GRF and CSF built up from Rs 3,000 crore to Rs 10,000+ crore",
    },
    populistDriver:
      "Competitive political populism in the name of welfarism — free electricity, cash transfers, and ration kits create long-term fiscal commitments",
    source: "PRS India Budget Analysis 2026-27",
  },

  // Historical Comparison
  historicalComparison: {
    congress2017_2022: {
      debtAdded: "Significant but moderate",
      fiscalDeficitManagement: "Mixed",
      industrialPolicy: "Status quo",
      powerSubsidies: "High",
      newInvestment: "Limited",
      agriculturalCrisis: "Present",
    },
    aap2022_2027: {
      debtAddedPerYear: "Rs 33,721 crore/year average",
      fiscalDeficit: "4.1-4.7% of GSDP",
      industrialPolicy: "New policy 2026 (election year)",
      powerSubsidies: "Increased",
      newInvestment: "Limited (except promises)",
      agriculturalCrisis: "Worsening (-2.5% growth)",
    },
    assessment:
      "AAP has borrowed at the highest rate in Punjab's history while delivering lower growth than the Congress period. However, Congress also left Punjab with structural fiscal problems (debt was already Rs 2.81 lakh crore in 2021-22).",
    note:
      "The 2022-2027 period includes post-COVID recovery base effects and global inflation — some fiscal stress is not solely government-induced.",
  },

  // Voter Perceptions
  voterPerceptions: {
    keyPainPoints: [
      {
        issue: "Unemployment (6.1% vs 3.2% national)",
        description: "Nearly double the national unemployment rate, particularly acute among educated youth",
      },
      {
        issue: "No new quality jobs",
        description: "Industrial contraction (-1.2%) means fewer manufacturing jobs despite tall industrial policy promises",
      },
      {
        issue: "Farmer distress",
        description: "Agriculture in contraction (-2.5%), MSP protests ongoing despite AAP's free power promise",
      },
      {
        issue: "Price inflation",
        description: "Consumer price inflation affects real purchasing power of households",
      },
      {
        issue: "Rural distress",
        description: "Mechanisation displaced farm labour without creating alternatives",
      },
      {
        issue: "Youth emigration",
        description: "High aspiration levels unmet by state economy",
      },
    ],
    aapNarrativeVsReality: [
      {
        promise: "AAP will bring industry and jobs",
        reality: "Industrial contraction shows otherwise",
      },
      {
        promise: "Free power to farmers",
        reality: "Delivered but at cost of deeper debt",
      },
      {
        promise: "Better governance",
        reality: "Fiscal deficit has worsened",
      },
      {
        promise: "Develop Punjab",
        reality: "Growth below national average",
      },
    ],
    congressOpportunity: {
      contrast:
        "Congress can contrast AAP's borrowing-fuelelled populism with actual delivery gaps",
      specificAttacks: [
        "Punjab borrowed more under AAP than any previous government",
        "Growth slowed, jobs declined, industry contracted",
        "Per capita income advantage over national average is eroding",
      ],
    },
  },

  // Campaign Issues
  campaignIssues: {
    congressAttackLines: CONGRESS_ATTACK_LINES,
    aapDefenseLines: AAP_DEFENSE_LINES,
    broaderNarrative:
      "The 'Congress vs AAP economic credibility' battle will be central. Congress's 2017-2022 record: Lost 2022 on anti-incumbency, mixed economic legacy. AAP's 2022-2027 record: Debt acceleration + economic stagnation = vulnerability.",
  },

  // Key Data Summary
  keyDataSummary: {
    indicators: KEY_INDICATORS,
    source: "Compiled from PRS India, The Hindu, Tribune India, IdeasforIndia",
  },

  // Strategic Implications
  strategicImplications: {
    implications: [
      {
        number: 1,
        title: "Economic governance is AAP's Achilles heel",
        description:
          "The debt data, unemployment data, and growth stagnation provide Congress ammunition for a sustained economic critique.",
      },
      {
        number: 2,
        title: "Avoid overpromising on economy",
        description:
          "Congress must acknowledge Punjab's structural problems honestly — the state was already in fiscal distress before AAP. Voters may punish Congress if they appear insincere.",
      },
      {
        number: 3,
        title: "Focus on jobs above all",
        description:
          "Punjab's 6.1% unemployment (vs 3.2% national) is a structural crisis. Any credible Congress economic platform must emphasise industrial investment, skill development, and job creation.",
      },
      {
        number: 4,
        title: "Agrarian distress is real but complicated",
        description:
          "AAP delivered free power but agriculture is contracting. Congress should differentiate between power subsidies (which benefit large farmers more) and direct income support.",
      },
      {
        number: 5,
        title: "Fiscal conservatism message",
        description:
          "AAP's 72% committed expenditure and debt trap is a strong argument for Congress to position itself as the party of fiscal responsibility. The contrast with Congress's own past is tricky but addressable.",
      },
    ],
  },

  // Sources
  sources: [
    {
      id: 1,
      title: "Punjab Budget Analysis 2026-27",
      source: "PRS India",
      date: "March 2026",
      url: "https://prsindia.org/budgets/states/punjab-budget-analysis-2026-27",
    },
    {
      id: 2,
      title: "Punjab's rising debt raises concern amid claims of sound fiscal management",
      source: "The Hindu",
      date: "July 27, 2025",
      url: "https://www.thehindu.com/news/national/punjab/punjabs-rising-debt-raises-concern-amid-claims-of-sound-fiscal-management/article69861644.ece",
    },
    {
      id: 3,
      title: "Punjab growth continues downward spiral",
      source: "Tribune India",
      date: "March 27, 2025",
      url: "https://www.tribuneindia.com/news/punjab/punjab-growth-continues-downward-spiral/",
    },
    {
      id: 4,
      title: "Economic development of Punjab: Prospects and policies",
      source: "IdeasforIndia",
      date: "July 17, 2024",
      url: "https://www.ideasforindia.in/topics/macroeconomics/economic-development-of-punjab-prospects-and-policies",
    },
    {
      id: 5,
      title: "White Paper — Budget FY 2025-26",
      source: "Punjab Finance Department",
      date: "June 2025",
      url: "https://finance.punjab.gov.pk/system/files/WP25-26N.pdf",
    },
    {
      id: 6,
      title: "Budget 2026: The Omission of Punjab",
      source: "Reddit r/punjab",
      date: "February 3, 2026",
    },
  ],
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get debt trajectory data formatted for charts
 */
export function getDebtTrendForChart(): { labels: string[]; values: number[] } {
  const data = economicPerformanceKPI.fiscal.debtTrajectory.data;
  return {
    labels: data.map((d) => d.year),
    values: data.map((d) => d.debtRsCrore),
  };
}

/**
 * Get GSDP growth trend for charts
 */
export function getGSDPGrowthTrendForChart(): { labels: string[]; punjab: number[]; india: number[] } {
  const data = economicPerformanceKPI.gsdp.growthTrend.data;
  return {
    labels: data.map((d) => d.year),
    punjab: data.map((d) => d.punjabGSDPGrowth),
    india: data.map((d) => d.indiaGDPGrowth),
  };
}

/**
 * Get fiscal deficit data for comparison
 */
export function getFiscalDeficitComparison(): {
  labels: string[];
  fiscalDeficit: number[];
  revenueDeficit: number[];
  primaryDeficit: number[];
} {
  const data = economicPerformanceKPI.fiscal.fiscalDeficits.data;
  return {
    labels: ["2024-25 Act", "2025-26 BE", "2025-26 RE", "2026-27 BE"],
    fiscalDeficit: data.map((d) => d.FY2024_25_Actuals),
    revenueDeficit: data.map((d) => d.FY2025_26_BE),
    primaryDeficit: data.map((d) => d.FY2026_27_BE),
  };
}

/**
 * Get unemployment comparison
 */
export function getUnemploymentComparison(): {
  labels: string[];
  punjab: number[];
  allIndia: number[];
} {
  const data = economicPerformanceKPI.unemployment;
  return {
    labels: ["Labour Force Participation Rate", "Unemployment Rate", "Worker-Population Ratio"],
    punjab: [data.labourForceParticipationRate.punjab, data.unemploymentRate.punjab, data.workerPopulationRatio.punjab],
    allIndia: [data.labourForceParticipationRate.allIndia, data.unemploymentRate.allIndia, data.workerPopulationRatio.allIndia],
  };
}

/**
 * Get key indicators summary
 */
export function getKeyIndicatorsSummary(): KeyIndicatorSummary[] {
  return economicPerformanceKPI.keyDataSummary.indicators;
}

/**
 * Get committed expenditure breakdown
 */
export function getCommittedExpenditureBreakdown(): {
  salaries: { value: number; percent: number };
  pension: { value: number; percent: number };
  interest: { value: number; percent: number };
  total: number;
  percentOfRevenue: number;
} {
  const ce = economicPerformanceKPI.fiscal.revenueExpenditure.committedExpenditure2026_27;
  return {
    salaries: { value: ce.breakdown.salaries, percent: ce.breakdown.salariesPercent },
    pension: { value: ce.breakdown.pension, percent: ce.breakdown.pensionPercent },
    interest: { value: ce.breakdown.interest, percent: ce.breakdown.interestPercent },
    total: ce.total,
    percentOfRevenue: ce.percentOfRevenueReceipts,
  };
}

/**
 * Get sectoral composition data
 */
export function getSectoralComposition(): {
  agriculture: { percent: number; growth: number };
  manufacturing: { percent: number; growth: number };
  services: { percent: number; growth: string };
} {
  const sc = economicPerformanceKPI.gsdp.sectoralComposition;
  return {
    agriculture: { percent: sc.agriculture.percentOfEconomy, growth: sc.agriculture.growth2025_26 },
    manufacturing: { percent: sc.manufacturing.percentOfEconomy, growth: sc.manufacturing.growth2024_25 },
    services: { percent: sc.services.percentOfEconomy, growth: sc.services.growthNote },
  };
}

/**
 * Get per capita income comparison
 */
export function getPerCapitaIncomeComparison(): {
  punjab: number;
  india: number;
  ratio: number;
  punjabGrowth: number;
  indiaGrowth: number;
} {
  const pci = economicPerformanceKPI.gsdp.perCapitaIncome;
  return {
    punjab: pci.punjab,
    india: pci.india,
    ratio: pci.ratio,
    punjabGrowth: pci.punjabGrowthRate,
    indiaGrowth: pci.indiaGrowthRate,
  };
}

/**
 * Get AAP funding sources breakdown
 */
export function getAAPFundingBreakdown(): {
  heavyBorrowing: number;
  wma: number;
  powerSubsidies: number;
  welfareSchemes: { name: string; amount: number }[];
  sinkingFunds: { current: number; previous: number };
} {
  const funding = economicPerformanceKPI.aapFunding;
  return {
    heavyBorrowing: funding.heavyBorrowing.amountRsCrore,
    wma: funding.waysAndMeansAdvances.amountRsCrore,
    powerSubsidies: funding.powerSubsidies.amountRsCrore,
    welfareSchemes: funding.welfareSchemes.map((w) => ({ name: w.name, amount: w.amountRsCrore })),
    sinkingFunds: { current: funding.sinkingFunds.current, previous: funding.sinkingFunds.previous },
  };
}

/**
 * Get Congress attack lines
 */
export function getCongressAttackLines(): CongressAttackLine[] {
  return economicPerformanceKPI.campaignIssues.congressAttackLines;
}

/**
 * Get AAP defense lines
 */
export function getAAPDefenseLines(): AAPDefenseLine[] {
  return economicPerformanceKPI.campaignIssues.aapDefenseLines;
}
