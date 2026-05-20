// Governance - Power, Agriculture & Employment Types for Punjab 2022-2026
// Derived from: research-M2/MP1-foundational/governance/power-agri-employment.md
// Research Date: 19 May 2026 | Data Currency: 2025-2026
// Confidence Level: HIGH (multi-source verification)

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type DeliveryStatus =
  | "DELIVERED"
  | "NOT DELIVERED"
  | "PARTIAL"
  | "DELAYED"
  | "VERIFICATION_NEEDED";

export type SectorCategory = "power" | "agriculture" | "employment" | "industry";

export type VulnerabilityLevel = "HIGH" | "MEDIUM" | "LOW" | "ZERO";

export type ThreatLevel = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";

// ==========================================
// POWER SECTOR
// ==========================================

/**
 * Free 300 Units Electricity Scheme
 */
export interface FreeElectricityScheme {
  promise: string;
  launchDate: string; // "1 July 2022"
  deliveryStatus: DeliveryStatus;
  beneficiaryHouseholds: number; // ~80 lakh
  beneficiaryHouseholdsNote: string; // approx. 90% of total households
  billingCycle: string; // 600 units free per two-month billing cycle
  domesticSubsidyCost: {
    fy2025_26: number; // Rs crore
    fy2026_27: number; // Rs crore
  };
}

/**
 * PSPCL Financial Health
 */
export interface PSPCLFinancialHealth {
  totalAnnualSubsidyRequirement: number; // Rs crore, FY 2025-26
  subsidyBreakdown: {
    agriculture: number; // Rs crore
    domestic300Units: number; // Rs crore
    industrial: number; // Rs crore
  };
  unpaidSubsidy: {
    totalAsOfDec2025: number; // Rs crore
    currentYear2025_26: number; // Rs crore
    legacyUnpaid: number; // Rs crore
    legacyBreakdown: {
      dueMarch2025: number; // Rs crore
      otherLegacy: number; // Rs crore
    };
  };
  governmentDeptOutstandingBills: number; // Rs crore
  criticalConcern: string;
  associationWarning: string; // PSEB Engineers' Association letter to CM
  revenueGapControversy: {
    originalGap: number; // Rs crore (Nov 2025 filing)
    revisedSurplus: number; // Rs crore
    lossReductionClaim: number; // percentage points (2.75%)
    disputedDistributionLoss: {
      original: number; // percentage
      claimed: number; // percentage
    };
    concern: string;
  };
}

/**
 * Power Supply Quality
 */
export interface PowerSupplyQuality {
  peakDemandMet: {
    value: number; // MW
    date: string; // June 2025
    note: string; // new record
  };
  ruralSupplyHours: string; // VERIFICATION_NEEDED
  urbanSupply: string; // Generally reliable
  transformerFailureRate: string; // VERIFICATION_NEEDED
  distributionLosses: {
    original: number; // percentage
    claimed: number; // percentage
    disputed: boolean;
  };
}

/**
 * Solar Pump Penetration
 */
export interface SolarPumpData {
  maxInstallablePumps: number; // 78,000 under PM-KUSUM
  applicationsInvited: {
    count: number; // 20,000
    date: string; // September 2024
  };
  subsidyPercentage: number; // up to 90% under PM-KUSUM
  actualInstallations: string; // VERIFICATION_NEEDED
  paceAssessment: string;
}

/**
 * Power Sector KPI
 */
export interface PowerSectorKPI {
  freeElectricity: FreeElectricityScheme;
  pspclFinancialHealth: PSPCLFinancialHealth;
  supplyQuality: PowerSupplyQuality;
  solarPumps: SolarPumpData;
}

// ==========================================
// AGRICULTURE
// ==========================================

/**
 * MSP Guarantee Status
 */
export interface MSPGuaranteeData {
  promise: string;
  deliveryStatus: DeliveryStatus;
  cropsCovered: number; // 22 crops
  governmentPosition: string;
  farmerProtests: {
    startDate: string; // January 2025
    locations: string[]; // Khanauri and Shambhu borders
    ongoing: boolean;
  };
  oppositionAttacks: string[]; // Congress (Warring), SAD
  procurementStatus: string;
}

/**
 * Farmer Debt Relief
 */
export interface FarmerDebtReliefData {
  averageFarmDebt: number; // Rs lakh (2.03)
  debtRanking: string; // among highest in India
  aapPromise: string;
  aapDelivery: string; // NO new debt waiver scheme launched
  previousWaiver: {
    scheme: string; // Congress (Capt Amarinder)
    amount: number; // Rs crore (1,771)
    beneficiaries: number; // 1.09 lakh farmers
  };
  farmerDemands: {
    model: string; // Telangana model
    amount: number; // Rs 2 lakh per farmer
    totalCost: number; // Rs 31,000 crore
  };
}

/**
 * Flood Compensation
 */
export interface FloodCompensationData {
  year: number; // 2023
  amountPerAcre: number; // Rs 6,800
  assessment: string; // significantly below actual losses
  cropInsurancePolicy: string; // No dedicated policy exists
  compensationNature: string; // ad hoc and inadequate
}

/**
 * Crop Insurance (PMFBY)
 */
export interface CropInsuranceData {
  scheme: string; // PMFBY (central scheme)
  statePolicy: string; // Punjab does not have state-specific policy
  claimSettlementNational: {
    min: number; // percentage (51%)
    max: number; // percentage (69%)
  };
  punjabSpecificData: string; // VERIFICATION_NEEDED
  adoptionRateNational: string; // ~25% national average
}

/**
 * Canal Water Supply
 */
export interface CanalWaterSupplyData {
  improvementStatus: string; // VERIFICATION_NEEDED
  infrastructureNote: string;
  majorNewProjects: string; // None announced
  groundwaterDepletion: string; // continues at alarming rates
}

/**
 * Agriculture KPI
 */
export interface AgricultureSectorKPI {
  mspGuarantee: MSPGuaranteeData;
  debtRelief: FarmerDebtReliefData;
  floodCompensation: FloodCompensationData;
  cropInsurance: CropInsuranceData;
  canalWater: CanalWaterSupplyData;
}

// ==========================================
// EMPLOYMENT
// ==========================================

/**
 * Job Creation Data
 */
export interface JobCreationData {
  manifestoPromise: {
    totalJobs: number; // 25 lakh
    govtVacancies: number; // 1.25 lakh
  };
  governmentJobs: {
    claimedByNov2024: number; // 48,000 (AAP claim)
    firstTranche: number; // 26,074
    secondTranche: number; // 44,786
    totalClaimedBySep2024: number; // ~70,860
    cabinetApprovedFeb2025: number; // 60,000 additional
    recruitmentClaim: string; // zero-bribe recruitment
  };
  privateSector: {
    claimedByCMMann: number; // 5.5 lakh (Mar 2026)
    assessment: string; // unverifiable, likely conflates opportunities with jobs
  };
  deliveryAssessment: string;
}

/**
 * Unemployment Rate Data
 */
export interface UnemploymentData {
  overall: {
    punjab: number; // percentage (7.7%)
    national: number; // percentage (6.7%)
    source: string;
  };
  youthUnemployment: {
    q3FY25: {
      punjab: number; // 14.9%
      note: string; // up from 12.2% in Q2
      source: string; // PLFS Oct-Dec 2024
    };
    feb2026: {
      punjab: number; // 19.3%
      source: string; // PLFS
    };
    rural: {
      punjab: number; // 22.5%
      source: string; // BJP data, Feb 2026
    };
    female: {
      punjab: number; // 21.7%
      note: string; // up from 18.5%
      source: string; // PLFS Oct-Dec 2024
    };
  };
  ranking: {
    punjabRank: string; // 4th highest in India
    note: string;
  };
  nationalComparison: string;
  migrationData: {
    usDeportees: {
      total: number; // 332
      fromPunjab: number; // 126
      percentage: number; // 38%
    };
    illegalMigrationNote: string;
  };
}

/**
 * Unfulfilled Employment Promises
 */
export interface UnfulfilledEmploymentPromises {
  womenMonthlyPayment: {
    promise: string; // Rs 1,000/month for women
    deliveryStatus: DeliveryStatus;
    rolloutDate: string; // March 2026
    delayYears: number; // nearly 4 years
    congressDemand: string; // arrears for full 4-year period
  };
  contractRegularisation: {
    policy: string; // No comprehensive policy announced
    status: string; // VERIFICATION_NEEDED
  };
  drugFreePunjab: {
    deadline: string; // May 2025
    status: string; // passed without success
    dgpStatement: string; // battle is "not yet over"
  };
}

/**
 * Employment KPI
 */
export interface EmploymentSectorKPI {
  jobCreation: JobCreationData;
  unemployment: UnemploymentData;
  unfulfilledPromises: UnfulfilledEmploymentPromises;
}

// ==========================================
// INDUSTRY & INVESTMENT
// ==========================================

/**
 * Investment Summit Data
 */
export interface InvestmentSummitData {
  name: string; // Progressive Punjab Investors Summit
  date: string; // March 2026
  moUsCommitted: number; // Rs 12,250 crore
}

/**
 * FDI Data
 */
export interface FDIData {
  cumulativeInflow: {
    amount: number; // Rs 12,088 crore
    period: string; // Oct 2019 - Sep 2025
  };
  nationalRanking: {
    before: number; // 14th
    current: number; // 11th
    improvement: string; // suggests some reversal of capital flight
  };
}

/**
 * MSME Data
 */
export interface MSMEData {
  totalUnits: number; // ~1.6 lakh
  newPolicy: {
    name: string; // Industrial & Business Development Policy 2026
    launched: string; // March 2026
    focus: string;
  };
  outcomes: string; // VERIFICATION_NEEDED (policy just launched)
  creditFlow: string; // VERIFICATION_NEEDED
}

/**
 * Industry Investment KPI
 */
export interface IndustryInvestmentKPI {
  investmentSummit: InvestmentSummitData;
  fdi: FDIData;
  investmentRealized2025_26: number; // Rs 4,000+ crore claimed
  startupsRegistered: number; // 1,127
  artisansSupported: number; // 4.39 lakh
  msme: MSMEData;
  capitalFlightAssessment: {
    historicalPattern: string;
    recentTrend: string;
    remainingConcerns: string[];
    mouConversionRate: string; // VERIFICATION_NEEDED
  };
}

// ==========================================
// STRATEGIC VULNERABILITY MATRIX
// ==========================================

/**
 * AAP Policy Area Vulnerability
 */
export interface AAPVulnerabilityEntry {
  policyArea: string;
  deliveryScore: VulnerabilityLevel;
  keyVulnerability: string;
  congressAttackVector: string;
}

/**
 * Strategic Vulnerability Matrix
 */
export interface StrategicVulnerabilityMatrix {
  entries: AAPVulnerabilityEntry[];
}

// ==========================================
// DATA GAPS
// ==========================================

/**
 * Data Verification Status
 */
export interface DataVerificationStatus {
  dataPoint: string;
  status: "VERIFICATION_NEEDED" | "NOT_FOUND" | "VERIFIED";
  note?: string;
}

// ==========================================
// SOURCES
// ==========================================

/**
 * Source Citation
 */
export interface SourceCitation {
  id: number;
  title: string;
  source: string;
  date?: string;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

/**
 * Power, Agriculture & Employment KPI
 */
export interface PowerAgriEmploymentKPI {
  // Metadata
  reportDate: string;
  megaPillar: string;
  classification: string;
  confidence: string;

  // Sector Data
  power: PowerSectorKPI;
  agriculture: AgricultureSectorKPI;
  employment: EmploymentSectorKPI;
  industry: IndustryInvestmentKPI;

  // Strategic Analysis
  vulnerabilityMatrix: StrategicVulnerabilityMatrix;

  // Data Quality
  dataGaps: DataVerificationStatus[];

  // Sources
  sources: SourceCitation[];
}

// ==========================================
// CONSTANTS
// ==========================================

export const POWER_SUBSIDY_CONSTANTS = {
  TOTAL_SUBSIDY_FY2025_26: 19657, // Rs crore
  AGRICULTURE_SUBSIDY: 10413, // Rs crore
  DOMESTIC_SUBSIDY: 6589, // Rs crore
  INDUSTRIAL_SUBSIDY: 2384, // Rs crore
  UNPAID_SUBSIDY_DEC2025: 10000, // Rs crore
} as const;

export const FREE_ELECTRICITY_CONSTANTS = {
  LAUNCH_DATE: "1 July 2022",
  UNITS_PER_MONTH: 300,
  UNITS_PER_BILLING_CYCLE: 600, // two-month cycle
  BENEFICIARY_HOUSEHOLDS_LAKH: 80,
  COVERAGE_PERCENTAGE: 90,
} as const;

export const EMPLOYMENT_CONSTANTS = {
  MANIFESTO_JOB_TARGET: 2500000, // 25 lakh
  MANIFESTO_GOVT_VACANCIES: 125000, // 1.25 lakh
  YOUTH_UNEMPLOYMENT_PUNJAB: 19.3, // percentage
  YOUTH_UNEMPLOYMENT_RURAL: 22.5, // percentage
  YOUTH_UNEMPLOYMENT_FEMALE: 21.7, // percentage
  OVERALL_UNEMPLOYMENT_PUNJAB: 7.7, // percentage
  OVERALL_UNEMPLOYMENT_NATIONAL: 6.7, // percentage
} as const;

export const AGRICULTURE_CONSTANTS = {
  MSP_CROPS_COUNT: 22,
  AVERAGE_FARM_DEBT_LAKH: 2.03, // Rs lakh
  PREVIOUS_WAIVER_AMOUNT: 1771, // Rs crore (Capt Amarinder)
  PREVIOUS_WAIVER_BENEFICIARIES: 109000, // 1.09 lakh farmers
  FLOOD_COMPENSATION_2023: 6800, // Rs per acre
} as const;

export const INDUSTRY_CONSTANTS = {
  INVESTORS_SUMMIT_MAR_2026: 12250, // Rs crore MoUs
  FDI_CUMULATIVE_OCT2019_SEP2025: 12088, // Rs crore
  INVESTMENT_REALIZED_2025_26: 4000, // Rs crore
  MSME_UNITS: 160000, // ~1.6 lakh
  STARTUPS_REGISTERED: 1127,
  ARTISANS_SUPPORTED: 439000, // 4.39 lakh
} as const;

export const UNEMPLOYMENT_RANKING = {
  PUNJAB_RANK_INDIA: 4, // 4th highest
} as const;
