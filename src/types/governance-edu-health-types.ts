// Governance - Economic & Education-Health Performance Types for Punjab 2027
// Derived from: research-M2/MP1-foundational/governance/edu-health-performance.md
// Research Date: 2026-05-20 | Data Currency: 2024-2026

// ==========================================
// METADATA
// ==========================================

export interface EconomicPerformanceMetadata {
  reportDate: string;
  megaPillar: string;
  domain: string;
  taskId: string;
  status: string;
  source: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// FISCAL DATA
// ==========================================

/**
 * Punjab Debt Trajectory Data
 */
export interface DebtTrajectoryEntry {
  year: string;
  debtRsCrore: number;
  percentOfGSDP: number;
}

export interface DebtTrajectory {
  data: DebtTrajectoryEntry[];
  annualIncreaseHistory: {
    period: string;
    annualIncreaseRsCrore: number;
  }[];
  aapFirstThreeYears: {
    period: string;
    annualAverageRsCrore: number;
  };
  sources: string[];
}

/**
 * Fiscal Deficit Data
 */
export interface FiscalDeficitEntry {
  deficitType: string;
  FY2024_25_Actuals: number;
  FY2025_26_BE: number;
  FY2025_26_RE: number;
  FY2026_27_BE: number;
}

export interface FiscalDeficits {
  data: FiscalDeficitEntry[];
  note: string;
  source: string;
}

/**
 * Revenue and Expenditure Breakdown
 */
export interface Budget2026_27 {
  totalExpenditureExcludingDebt: number; // Rs crore
  totalReceiptsExcludingBorrowings: number; // Rs crore
  gapFromNetBorrowings: number; // Rs crore
  revenueDeficit: number; // Rs crore
  revenueDeficitPercentGSDP: number;
}

export interface CommittedExpenditure {
  total: number; // Rs crore
  percentOfRevenueReceipts: number;
  breakdown: {
    salaries: number;
    salariesPercent: number;
    pension: number;
    pensionPercent: number;
    interest: number;
    interestPercent: number;
  };
}

export interface RevenueExpenditureData {
  budget2026_27: Budget2026_27;
  committedExpenditure2026_27: CommittedExpenditure;
  committedExpenditure2024_25: string; // 85% of revenue receipts
  source: string;
}

/**
 * Expert Views on Fiscal Crisis
 */
export interface ExpertView {
  viewType: "Alarmist" | "Optimist" | "Independent";
  expertName: string;
  affiliation: string;
  keyQuote: string;
}

export interface FiscalCrisisAssessment {
  experts: ExpertView[];
  overallAssessment: string;
}

// ==========================================
// GSDP GROWTH
// ==========================================

/**
 * GSDP Growth Rate Trend
 */
export interface GSDPGrowthEntry {
  year: string;
  punjabGSDPGrowth: number;
  indiaGDPGrowth: number;
  note?: string;
}

export interface GSDPGrowthTrend {
  data: GSDPGrowthEntry[];
  averageSince2020_21: number;
  downwardSpiralNote: string;
  sources: string[];
}

/**
 * Sectoral Composition
 */
export interface SectorComposition {
  agriculture: {
    percentOfEconomy: number;
    growth2025_26: number; // negative
  };
  manufacturing: {
    percentOfEconomy: number;
    growth2024_25: number; // negative
  };
  services: {
    percentOfEconomy: number;
    growthNote: string;
  };
  source: string;
}

/**
 * Per Capita Income
 */
export interface PerCapitaIncome {
  punjab: number;
  india: number;
  ratio: number;
  punjabGrowthRate: number;
  indiaGrowthRate: number;
  historicalRanking: string;
  source: string;
}

// ==========================================
// UNEMPLOYMENT
// ==========================================

export interface UnemploymentData {
  labourForceParticipationRate: {
    punjab: number;
    allIndia: number;
  };
  unemploymentRate: {
    punjab: number;
    allIndia: number;
    note: string;
  };
  workerPopulationRatio: {
    punjab: number;
    allIndia: number;
  };
  ruralUrbanNote: string;
  youthUnemploymentNote: string;
  source: string;
}

// ==========================================
// INDUSTRIAL SITUATION
// ==========================================

export interface IndustrialData {
  FY2024_25: {
    industrialGrowth: number; // negative -1.2%
    servicesGrowth: number; // 0.3% contraction
  };
  industrialPolicy2026: {
    name: string;
    maxIncentives: string;
    investorsSummitPledged: number; // Rs lakh crore
    jobsPromised: number;
    assessment: string;
  };
  structuralProblems: string[];
  source: string;
}

// ==========================================
// STATE RANKINGS
// ==========================================

export interface StateRankings {
  economicRankings: {
    perCapitaIncome2021_22: number; // 10th among major states
    perCapitaIncomeTrajectory: string; // Falling
    gsdpVsNationalGDP: string; // Below average
  };
  easeOfBusiness: {
    ranking: string;
    note: string;
  };
  healthEducationQuickRef: {
    schoolInfrastructure: string;
    educationalOutcomes: string;
    dropoutRates: string;
  };
  source: string;
}

// ==========================================
// TAX REVENUE
// ==========================================

export interface TaxRevenueData {
  ownSourceRevenueConstraints: string[];
  budget2026_27Status: string;
  federalTransferConcern: string;
  source: string;
}

// ==========================================
// AAP FUNDING OPERATIONS
// ==========================================

export interface PowerSubsidy {
  amountRsCrore: number;
  percentOfRevenueReceipts: number;
  householdCoverage: string;
  note: string;
}

export interface WelfareScheme {
  name: string;
  amountRsCrore: number;
  note: string;
}

export interface SinkingFunds {
  current: number; // Rs crore
  previous: number; // Rs crore
  buildup: string;
}

export interface AAPFundingOperations {
  heavyBorrowing: {
    amountRsCrore: number;
    note: string;
  };
  waysAndMeansAdvances: {
    amountRsCrore: number;
    note: string;
  };
  powerSubsidies: PowerSubsidy;
  welfareSchemes: WelfareScheme[];
  sinkingFunds: SinkingFunds;
  populistDriver: string;
  source: string;
}

// ==========================================
// HISTORICAL COMPARISON
// ==========================================

export interface HistoricalComparison {
  congress2017_2022: {
    debtAdded: string;
    fiscalDeficitManagement: string;
    industrialPolicy: string;
    powerSubsidies: string;
    newInvestment: string;
    agriculturalCrisis: string;
  };
  aap2022_2027: {
    debtAddedPerYear: string;
    fiscalDeficit: string;
    industrialPolicy: string;
    powerSubsidies: string;
    newInvestment: string;
    agriculturalCrisis: string;
  };
  assessment: string;
  note: string;
}

// ==========================================
// VOTER PERCEPTIONS
// ==========================================

export interface VoterPainPoint {
  issue: string;
  description: string;
}

export interface AAPNarrativeVsReality {
  promise: string;
  reality: string;
}

export interface CongressOpportunity {
  contrast: string;
  specificAttacks: string[];
}

export interface VoterPerceptions {
  keyPainPoints: VoterPainPoint[];
  aapNarrativeVsReality: AAPNarrativeVsReality[];
  congressOpportunity: CongressOpportunity;
}

// ==========================================
// 2027 CAMPAIGN ECONOMIC ISSUES
// ==========================================

export interface CongressAttackLine {
  label: string;
  description: string;
}

export interface AAPDefenseLine {
  point: string;
  response: string;
}

export interface CampaignEconomicNarrative {
  congressAttackLines: CongressAttackLine[];
  aapDefenseLines: AAPDefenseLine[];
  broaderNarrative: string;
}

// ==========================================
// KEY DATA SUMMARY
// ==========================================

export interface KeyIndicatorSummary {
  indicator: string;
  punjab: string | number;
  india?: string | number;
  assessment: string;
}

export interface KeyDataSummary {
  indicators: KeyIndicatorSummary[];
  source: string;
}

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

export interface StrategicImplication {
  number: number;
  title: string;
  description: string;
}

export interface StrategicImplications {
  implications: StrategicImplication[];
}

// ==========================================
// SOURCES
// ==========================================

export interface SourceCitation {
  id: number;
  title: string;
  source: string;
  date?: string;
  url?: string;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface EconomicPerformanceKPI {
  // Metadata
  metadata: EconomicPerformanceMetadata;

  // Core Data Sections
  fiscal: {
    debtTrajectory: DebtTrajectory;
    fiscalDeficits: FiscalDeficits;
    revenueExpenditure: RevenueExpenditureData;
    fiscalCrisisAssessment: FiscalCrisisAssessment;
  };

  gsdp: {
    growthTrend: GSDPGrowthTrend;
    sectoralComposition: SectorComposition;
    perCapitaIncome: PerCapitaIncome;
  };

  unemployment: UnemploymentData;
  industrial: IndustrialData;
  stateRankings: StateRankings;
  taxRevenue: TaxRevenueData;
  aapFunding: AAPFundingOperations;
  historicalComparison: HistoricalComparison;
  voterPerceptions: VoterPerceptions;
  campaignIssues: CampaignEconomicNarrative;
  keyDataSummary: KeyDataSummary;
  strategicImplications: StrategicImplications;
  sources: SourceCitation[];
}
