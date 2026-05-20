// Governance - AAP Infrastructure & Finance Performance Types (2022-2026)
// Derived from: research-M2/MP1-foundational/governance/infra-finance.md
// Research Date: 19 May 2026 | Data Currency: March 2026 (Budget FY 2026-27)

// ==========================================
// METADATA
// ==========================================

export interface InfraFinanceMetadata {
  researchDate: string; // "19 May 2026"
  megaPillar: string; // "MP1 - Foundational Scan (Governance)"
  intelligenceType: string; // "Competitive Intelligence - Incumbent Performance Assessment"
  dataFreshness: string; // "March 2026 (Budget FY 2026-27)"
  reliability: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// DEBT TRAJECTORY TYPES
// ==========================================

export interface DebtTrajectory {
  march2022_AAPTookPower: number; // Rs 2.83 lakh crore
  march2025: number; // Rs 3.83 lakh crore
  re_FY2025_26: number; // Rs 4,02,634 crore
  projected_FY2026_27: number; // Rs 4,42,604 crore
  debtAdditionUnderAAP_4Years: number; // ~Rs 1.60 lakh crore
  debtToGSDP: {
    "2022-23_NITI_Aayog": number; // 47%
    "2022-23_Parliament": number; // 46.6%
    "FY2026-27_Estimate": number; // 45.13%
  };
  nationalMedianDebtToGSDP: number; // 32.1%
  punjabRankByDebtToGSDP: string; // "2nd highest (after Arunachal Pradesh)"
}

// ==========================================
// BUDGET SNAPSHOT TYPES
// ==========================================

export interface BudgetSnapshot {
  fiscalYear: string;
  totalExpenditureExclDebtRepayment?: number; // Rs 1,46,632 crore (FY 2025-26 Budget)
  totalOutlay?: number; // Rs 2,60,437 crore (FY 2026-27 BE)
  gsdp: {
    currentPrices: number; // Rs 8,91,301 crore (FY 2025-26)
    growth: number; // 10%
  };
  revenueDeficit: {
    percentageGSDP: number;
    absolute: number; // Rs crore
  };
  fiscalDeficit: {
    percentageGSDP: number;
    absolute?: number; // Rs 34,201 crore
  };
  interestPayment?: number; // Rs 27,679 crore (FY 2025-26 RE)
}

// ==========================================
// POWER SUBSIDY TYPES
// ==========================================

export interface PowerSubsidyCategory {
  category: string;
  re_FY2025_26: number; // Rs crore
  be_FY2026_27: number; // Rs crore
  details?: string;
}

export interface PowerSubsidyData {
  agriculture: {
    tubewells: number; // 14 lakh
    re_FY2025_26: number;
    be_FY2026_27: number;
  };
  domestic: {
    freeUnitsSince: string; // "July 2022"
    freeUnits: number; // 300
    re_FY2025_26: number;
    be_FY2026_27: number;
  };
  industry: {
    re_FY2025_26: number;
    be_FY2026_27: number;
  };
  totalPowerSubsidy: {
    re_FY2025_26: number;
    be_FY2026_27: number;
  };
}

// ==========================================
// FREEBIES VS REVENUE DEFICIT TYPES
// ==========================================

export interface FreebiesVsRevenueDeficit {
  freePower: number; // Rs 15,550 crore
  womenDole: {
    scheme: string; // "Mukh Mantri Mawan Dhian Satikar Yojana"
    amount: number; // Rs 9,300 crore
  };
  freeTravelWomen: number; // Rs 600 crore
  totalFreebies: number; // Rs 26,300 crore
  revenueDeficit: number; // Rs 21,955 crore
  surplusIfEliminated: boolean; // true
}

// ==========================================
// ROAD INFRASTRUCTURE TYPES
// ==========================================

export interface RoadInitiative {
  name: string;
  status: string;
  details: string;
  cost?: number; // Rs crore
  length?: number; // km
  timeline?: string;
}

export interface RoadInfrastructureData {
  initiatives: RoadInitiative[];
  newRoadsMar2026: {
    length: number; // 300 km
    timeline: string;
  };
  existingRoadMaintenance: {
    length: number; // 12,000 km
    by: string; // "PWD and Punjab Mandi Board"
  };
  fundingFromCentre: {
    amount: number; // Rs 3,000 crore
    scheme: string; // "Special Assistance to States for Capital Investment"
  };
  ruralLinkRoads: {
    length: number; // 19,492 km
    programmeCost: number; // Rs 4,150 crore
    features: string[];
  };
  assessment: {
    strategicTiming: string;
    newBorrowingDebtServicing: string; // "86% of new borrowing goes to servicing old debt"
    oppositionAllegations: string;
  };
}

// ==========================================
// WATER RESOURCES TYPES
// ==========================================

export interface WaterCrisisData {
  severity: "CRITICAL";
  blocks: {
    total: number; // 153
    overExploited: { count: number; percentage: number }; // 115 (75%)
    assessedOverExploited: { count: number; percentage: number }; // 109 (79%)
    safe: { count: number; percentage: number }; // 22 (16%)
  };
  annualWaterTableDecline: number; // 0.7 metre per year
}

export interface WaterPlan14Point {
  name: string;
  approvalDate: string; // "June 2025"
  restored: {
    waterCourses: { count: number; length: number; yearsAbandoned: string }; // 17,000, ~6,300 km, 30-40 years
    canals: { count: number; length: number }; // 79, 545 km
  };
  targetHectares: number; // 15,79,379 hectares under water-efficient irrigation
  features: string[];
  waterUserAssociations: boolean;
  regionalVariation: {
    southwestPunjab: string; // waterlogging
    kandiArea: string; // extremely deep groundwater
  };
  privateSectorCSR: boolean;
  assessment: {
    comprehensive: boolean;
    launchDelay: string; // "3 years into AAP's tenure"
    crisisContinuing: boolean;
  };
}

// ==========================================
// SMART CITIES TYPES
// ==========================================

export interface SmartCityProject {
  city: string;
  status: {
    completed: { projects: number; amount: number }; // e.g., 61/83 projects, Rs 688 crore
    ongoing?: { projects: number; amount: number };
    pending?: { projects: number; amount: number };
    inTendering?: number;
  };
  issues?: string[];
  nationalRanking?: number;
  utilization?: { received: number; utilised: number };
  spent?: number;
}

export interface SmartCitiesData {
  mission: string; // "Smart Cities Mission"
  cities: string[]; // Ludhiana, Amritsar, Jalandhar, Sultanpur Lodhi
  projects: SmartCityProject[];
  overallStatus: {
    completionRate: number; // 87%
    nationalAverage: number; // 94%
    timeframe: string; // "nearly 10 years"
  };
  oppositionActions: string[];
  urbanDevelopment2025: {
    cities: number; // 51
    focus: string[];
  };
  landPoolingPolicy: {
    cities: number; // 27
    approvalDate: string; // "June 2025"
  };
}

// ==========================================
// RURAL DEVELOPMENT TYPES
// ==========================================

export interface RuralDevelopmentData {
  budgetFY2025_26: {
    total: number; // Rs 3,500 crore
    focus: string[];
  };
  financeCommission: {
    year: string; // "15th Finance Commission"
    spent: number; // Rs 2,367 crore
    comparison: string; // "double the previous year's amount"
  };
  roadConnectivity: {
    commitment: string; // "Pucca roads to every village"
    visibleProgress: string; // reported late 2025
  };
  panchayatFunding: {
    oppositionAllegations: string; // "denied development grants for 2+ years"
  };
  pmayg: {
    housesSanctioned: number; // 3,47,424
    housesCompleted: number; // 70,905
    asOfDate: string; // "December 2024"
  };
  mgnrega: {
    status: string;
    note: string;
  };
  assessment: {
    spendingAcceleration: string; // "coinciding with pre-election cycle"
    panchayatNeglect: string;
    visibleDeliverable: string; // "pucca roads programme"
  };
}

// ==========================================
// EXPERT ASSESSMENT TYPES
// ==========================================

export interface ExpertAssessment {
  expert: {
    name: string; // "Prof. Kesar Singh Bhangoo"
    affiliation: string; // "former economics professor, Punjabi University"
  };
  quote: string;
  debtRiseRate: number; // Rs 44,000 crore per annum
  projectedDebtBy2027: number; // Rs 5 lakh crore
  implications: string[];
}

export interface FinancialStressIndicators {
  newBorrowingDebtServicing: {
    percentage: number; // 86%
    amount: number; // Rs 49,900 crore in FY 2025-26
  };
  interestPayment: {
    amount: number; // Rs 27,679 crore (FY 2025-26 RE)
    percentageOfRevenueReceipts: number; // 23%
  };
  salaryPension: {
    salaries: number; // Rs 39,115 crore (FY 2026-27 BE)
    pensions: number; // Rs 22,465 crore (FY 2026-27 BE)
    total: number;
    comparison: string; // "exceeding total subsidy bill"
  };
  interestRateReduction: {
    previous: string; // "11-12%"
    current: string; // "7%"
    note: string; // "negotiated on restructured loans"
  };
}

// ==========================================
// STRATEGIC IMPLICATIONS TYPES
// ==========================================

export interface AttackVector {
  id: number;
  title: string;
  description: string;
  keyStatistic?: string;
}

export interface AAPDefensive {
  claim: string;
  counter: string;
}

export interface CongressRebuttal {
  point: string;
  evidence: string;
}

export interface StrategicImplicationsData {
  attackVectors: AttackVector[];
  aapDefensives: AAPDefensive[];
  congressPreparedness: CongressRebuttal[];
}

// ==========================================
// SOURCE TYPES
// ==========================================

export interface InfraFinanceSource {
  id: number;
  title: string;
  source: string;
  date?: string;
  url?: string;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface InfraFinanceKPI {
  // Metadata
  metadata: InfraFinanceMetadata;

  // Core Financial Data
  debtTrajectory: DebtTrajectory;
  budgetSnapshots: {
    fy2025_26: BudgetSnapshot;
    fy2026_27: BudgetSnapshot;
  };
  powerSubsidy: PowerSubsidyData;
  freebiesVsRevenueDeficit: FreebiesVsRevenueDeficit;
  financialStress: FinancialStressIndicators;

  // Infrastructure Data
  roads: RoadInfrastructureData;
  water: {
    crisis: WaterCrisisData;
    plan14Point: WaterPlan14Point;
  };
  smartCities: SmartCitiesData;
  ruralDevelopment: RuralDevelopmentData;

  // Expert Assessment
  expertAssessment: ExpertAssessment;

  // Strategic Intelligence
  strategicImplications: StrategicImplicationsData;

  // Sources
  sources: InfraFinanceSource[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type FiscalStatus = "SURPLUS" | "DEFICIT" | "CRITICAL";

export type InfrastructureCategory = "roads" | "water" | "smartCities" | "rural";

export type SmartCityStatus = "ahead" | "onTrack" | "behind" | "delayed";

export const DEBT_THRESHOLDS = {
  NATIONAL_MEDIAN: 32.1, // percent
  PUNJAB_CURRENT: 45.13, // percent (FY 2026-27)
  ARUNACHAL_COMPARABLE: true,
} as const;

export const SUBSIDY_BURDEN = {
  POWER_SUBSIDY_RE_FY2025_26: 20500, // crore
  POWER_SUBSIDY_BE_FY2026_27: 15550, // crore
  FREEBIES_TOTAL: 26300, // crore
  AS_PERCENTAGE_STATE_BUDGET: 10, // percent
} as const;

export const GROUNDWATER_BLOCK_THRESHOLDS = {
  TOTAL_BLOCKS: 153,
  OVER_EXPLOITED_CRITICAL: 75, // percentage
  SAFE_THRESHOLD: 25, // percentage
} as const;

export const ROAD_INFRASTRUCTURE_TARGETS = {
  UPGRADE_PROGRAMME: 18000, // km
  RURAL_LINK_ROADS: 19492, // km
  NEW_ROADS_MAR2026: 300, // km
  EXISTING_MAINTENANCE: 12000, // km
} as const;
