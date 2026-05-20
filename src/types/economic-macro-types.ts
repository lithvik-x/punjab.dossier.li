// Economic Macro Indicators & Fiscal Health Types for Punjab
// Derived from: MP1-foundational/pestle/economic-macro.md
// Research Date: 19 May 2026 | Status: COMPLETE

// ==========================================
// METADATA
// ==========================================

export interface EconomicMacroMetadata {
  researchDate: string; // "19 May 2026"
  megaPillar: string; // "MP1 - Foundational Scan (PESTLE - Economic)"
  sourceType: string; // "Live Research"
  analyst: string; // "Research Agent"
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// GSDP AND GROWTH TRAJECTORY
// ==========================================

export interface GSDPDataPoint {
  year: string;
  gsdpCurrentPricesRsCrore: number;
  gsdpGrowthConstantPrices?: number;
  perCapitaIncomeRs?: number;
  nationalGDPGrowthConstant?: number;
}

export interface GSDPTrajectory {
  dataPoints: GSDPDataPoint[];
  keyObservations: {
    gsdpCAGR: number; // 8.52% (2019-20 to 2023-24)
    realGrowthVsNational: string; // "trails by 0.5-1 percentage point"
    perCapitaIncomeGap: {
      punjab: number; // 1,95,621
      national: number; // 1,83,236
    };
    perCapitaRankingDecline: {
      1981: number; // 1st
      current: number; // 16th among Indian states
    };
  };
  sources: string[];
}

// ==========================================
// FISCAL DEFICITS
// ==========================================

export interface FiscalDeficitDataPoint {
  year: string;
  revenueDeficitRsCrore: number;
  revenueDeficitPercentGSDP?: number;
  fiscalDeficitRsCrore?: number;
  fiscalDeficitPercentGSDP?: number;
  primaryDeficitRsCrore?: number;
}

export interface FiscalDeficits {
  dataPoints: FiscalDeficitDataPoint[];
  criticalFinding: string;
  capitalExpenditureShare: number; // 4.40% of total borrowings
  sources: string[];
}

// ==========================================
// DEBT PROFILE
// ==========================================

export interface DebtTrajectoryPoint {
  year: string;
  outstandingDebtRsCrore: number;
  debtToGSDPPercent?: number;
}

export interface DebtComposition {
  annualAverageDebtIncrease: {
    period: string; // "under AAP (2022-25)"
    amountRsCrore: number; // 33,721 crore/year
  };
  interestPayments: {
    amountRsCrore: number; // 23,900 crore (2024-25)
    percentRevenueReceipts: number; // 23%
  };
  debtServicing: {
    percentTotalRevenue: number; // 41% (2022-23)
  };
  offBudgetBorrowings: {
    amountRsCrore: number; // 4,093 crore
    via: string; // "PSUs"
    flaggedBy: string; // "CAG"
  };
  nitiAayogRanking: {
    index: string; // "Fiscal Health Index 2025"
    rank: string; // "LAST among major states"
  };
  frbmTarget: {
    recommendedDebtToGSDP: number; // 20%
    punjabCurrent: number; // ~46-47%
  };
}

export interface DebtDrivers {
  competitivePopulism: string[];
  powerSubsidies: {
    amountRsCrore: number; // 18,770 crore (2023-24)
    percentAllSubsidies: number; // 92-99%
    farmPowerSubsidy: {
      re_FY2025_26: number; // 9,992 crore
    };
  };
  salaryPension: {
    salaries: number; // 36.72% of revenue
    pensions: number; // 20.82% of revenue
    total: number; // 57.51% of revenue
  };
  opsReversal: string;
  underTaxMobilisation: string;
}

export interface DebtProfile {
  trajectory: DebtTrajectoryPoint[];
  composition: DebtComposition;
  drivers: DebtDrivers;
  sources: string[];
}

// ==========================================
// REVENUE AND TAX COLLECTIONS
// ==========================================

export interface OwnTaxRevenue {
  component: string;
  valueRsCrore: number;
  trend?: string;
  growth?: number;
}

export interface RevenueCollections {
  ownTaxRevenue: {
    data: OwnTaxRevenue[];
    gstGrowth: {
      net: number; // 11.87%
      midFY25: number; // 5.97% (4-year low)
      nationalAverage: number; // 10%
    };
    exciseGSDP: {
      2021_22: number; // 1.05%
      2024_25: number; // 1.28%
    };
  };
  revenueReceipts: {
    amountRsCrore: number; // 89,192 crore (2023-24)
    cagrFrom2019_20: number; // 9.71%
    shareOfGSDP: {
      2022_23: number; // 12.86%
      2023_24: number; // 11.97%
    };
  };
  committedExpenditure: {
    salariesPensionsInterest: {
      amountRsCrore: number; // 76,388 crore
      percentRevenueExpenditure: number; // 65%
    };
    committedInflexible: {
      amountRsCrore: number; // 88,808 crore
      percentRevenueExpenditure: number; // 75.64%
    };
    totalWithSubsidies: string; // exceeds 120% of total revenue
  };
  sources: string[];
}

// ==========================================
// SECTORAL COMPOSITION
// ==========================================

export interface SectorComposition {
  gsvaShare: {
    agriculture: number; // ~27% (incl. allied)
    industry: number; // ~27% (incl. manufacturing, construction)
    services: number; // ~46%
  };
  growthRates: {
    agriculture: number; // 2.3% (constant, 2023-24)
    industry: number; // ~7% (overall)
    manufacturing: number; // 7.1%
    services: number; // 7.3%
  };
  agricultureEmployment: {
    percentWorkforce: number; // 27.22% (PLFS 2023-24)
    growthNote: string; // "anaemic growth reflecting structural farm crisis"
  };
  fisheries: {
    percentAgriculturalGSVA: number; // 1.50%
    growth2024_25: number; // 11.84%
  };
  horticulture: {
    percentAgriculturalGDP: number; // ~17%
    status: string; // "diversification push underway"
  };
  sources: string[];
}

// ==========================================
// EMPLOYMENT
// ==========================================

export interface EmploymentData {
  unemployment: {
    rate: {
      plfs2022_23: number; // 6.1%
      cmieEstimate: string; // "~8-10%"
      plfs2023_24: number; // 5.9%
    };
    nationalAverage: number; // 3.2%
    keyObservation: string; // "nearly double the national average"
  };
  sectoralEmployment: {
    agriculture: {
      punjab: number; // 27.22%
      national: number; // ~42%
    };
  };
  structuralIssues: string[];
  sources: string[];
}

// ==========================================
// BANKING AND CREDIT
// ==========================================

export interface BankingCredit {
  creditDepositRatio: {
    value: number; // ~61.3% (2024-25)
    nationalAverage: number; // ~78%
    interpretation: string; // "indicates capital flight"
  };
  fdiInflow: {
    period: string; // "Oct 2019-Jun 2025"
    amountRsCrore: number; // 9,839 crore
    note: string; // "cumulative over 6 years"
  };
  investmentFY26: {
    amountRsCrore: number; // 29,480 crore
    projectedJobs: number; // 67,000
    sectors: string;
  };
  exportsFY25: {
    amountRsCrore: number; // 16,317 crore
    keySectors: string[]; // ["Engineering", "Rice", "Pharma", "Textiles"]
  };
  industrialStrengths: {
    woollenKnitwear: string; // "95% of India's"
    sportsGoods: string; // "75%"
    sewingMachines: string; // "85%"
  };
  semiconductorProject: {
    location: string; // "Mohali"
    investmentRsCrore: number; // 4,594 crore
    significance: string; // "diversification signal"
  };
  sources: string[];
}

// ==========================================
// POVERTY AND INFLATION
// ==========================================

export interface PovertyInflation {
  poverty: {
    populationBelowPL: {
      percent: number; // 4.26% (2025-26 est.)
      ranking: string; // "5th lowest among states"
    };
    note: string; // "masks distress in farm households and informal workers"
  };
  inflation: {
    cpi: number; // 3.55% (February 2025)
  };
  multidimensionalPoverty: string; // "likely higher than income poverty, especially in border districts"
  sources: string[];
}

// ==========================================
// POLITICAL INTELLIGENCE
// ==========================================

export interface MacroAAPVulnerability {
  id: number;
  point: string;
  keyStatistic?: string;
}

export interface MacroCongressNarrative {
  id: number;
  narrative: string;
  keyStatistic?: string;
}

export interface PoliticalIntelligence {
  aapVulnerabilities: MacroAAPVulnerability[];
  congressNarratives: MacroCongressNarrative[];
  verificationNeeded: string[];
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface EconomicMacroKPI {
  // Metadata
  metadata: EconomicMacroMetadata;

  // Core Economic Data
  gsdpTrajectory: GSDPTrajectory;
  fiscalDeficits: FiscalDeficits;
  debtProfile: DebtProfile;
  revenueCollections: RevenueCollections;
  sectoralComposition: SectorComposition;
  employment: EmploymentData;
  bankingCredit: BankingCredit;
  povertyInflation: PovertyInflation;

  // Political Intelligence
  politicalIntelligence: PoliticalIntelligence;

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type EconomicSector = "agriculture" | "industry" | "services";

export type DebtMetric = "outstanding" | "debtToGSDP" | "interestPayments" | "debtServicing";

export const GSDP_METRICS = {
  CURRENT_PRICES_BASE_YEAR: "2019-20",
  REAL_GROWTH_NATIONAL_COMPARISON: 0.5, // percentage points behind
  PER_CAPITA_INCOME_RANKING_1981: 1,
  PER_CAPITA_INCOME_RANKING_CURRENT: 16,
} as const;

export const FISCAL_THRESHOLDS = {
  REVENUE_DEFICIT_CRITICAL: 3.0, // percent of GSDP
  FISCAL_DEFICIT_CRITICAL: 4.0, // percent of GSDP
  DEBT_TO_GSDP_WARNING: 40.0, // percent
  DEBT_TO_GSDP_CRITICAL: 45.0, // percent
  FRBM_TARGET: 20.0, // percent (recommended)
} as const;

export const UNEMPLOYMENT_THRESHOLDS = {
  NATIONAL_AVERAGE: 3.2, // percent
  PUNJAB_MULTIPLE_OF_NATIONAL: 2, // approximately 2x
} as const;

export const CREDIT_DEPOSIT_THRESHOLDS = {
  NATIONAL_AVERAGE: 78.0, // percent
  PUNJAB_CURRENT: 61.3, // percent
  INTERPRETATION: "capital flight",
} as const;
