// Economic & Social Intelligence Types for Punjab
// Derived from: research-P3/economic-social/A8.01-08 files
// Research Date: May 2026 | Status: COMPLETE

import type { Region } from "./kpi-types";

// ==========================================
// METADATA
// ==========================================

export interface EconomicSocialMetadata {
  researchDate: string;
  sourceType: string;
  analyst: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// GSDP AND GROWTH TYPES
// ==========================================

export interface GSDPDataPoint {
  year: string;
  gsdpCurrentPricesRsCrore: number;
  growthPercent?: number;
  gsdpConstantPricesRsCrore?: number;
  realGrowthPercent?: number;
}

export interface PerCapitaIncome {
  punjab: number;
  india: number;
  ratio: number;
  trend: "improving" | "declining" | "stable";
}

export interface SectoralComposition {
  sector: string;
  sharePercent: number;
  growthPercent?: number;
}

export interface GrowthComparison {
  year: string;
  punjab: number;
  india: number;
  gap: number;
}

// ==========================================
// UNEMPLOYMENT TYPES
// ==========================================

export interface UnemploymentRate {
  category: string;
  punjab: number;
  allIndia?: number;
  rural?: number;
  urban?: number;
}

export interface YouthUnemploymentData {
  period: string;
  punjab: number;
  allIndia: number;
  gap: number;
}

export interface UnemploymentByDemographic {
  demographic: string;
  rural: number;
  urban: number;
  combined: number;
}

export interface StateComparison {
  state: string;
  youthUnemploymentRate: number;
  rank?: number;
}

// ==========================================
// DRUG STATISTICS TYPES
// ==========================================

export interface DrugAddictionData {
  totalUsers: number;
  childrenUsers: number;
  opioidDependents: number;
  populationSurveyPercent: number;
  treatmentSeekers: number;
}

export interface DrugSeizureData {
  period: string;
  ndpsCases: number;
  arrests: number;
  heroinSeizedKg: number;
  dronesSeized?: number;
}

export interface DrugDemographicPattern {
  demographic: string;
  addictionRate: number;
}

export interface SubstanceProfile {
  substance: string;
  percentAmongUsers: number;
  notes: string;
}

// ==========================================
// FISCAL DATA TYPES
// ==========================================

export interface FiscalParameters {
  totalExpenditure: number;
  receipts: number;
  revenueDeficit: number;
  fiscalDeficit: number;
  netBorrowings: number;
}

export interface DebtData {
  outstandingDebtRsCrore: number;
  debtToGSDP: number;
  comparedToNational: number;
}

// ==========================================
// DISTRICT DATA TYPES
// ==========================================

export interface DistrictEconomicData {
  district: string;
  perCapitaIncome?: number;
  economicDriver?: string;
  region: Region;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface EconomicSocialKPI {
  metadata: EconomicSocialMetadata;

  // GSDP Data
  gsdp: {
    nominalData: GSDPDataPoint[];
    realGrowthData: GSDPDataPoint[];
    perCapitaIncome: PerCapitaIncome;
    growthComparison: GrowthComparison[];
    sectoralComposition: SectoralComposition[];
    keyObservations: string[];
  };

  // Unemployment Data
  unemployment: {
    currentRates: UnemploymentRate[];
    youthUnemployment: YouthUnemploymentData[];
    demographicBreakdown: UnemploymentByDemographic[];
    stateComparison: StateComparison[];
    laborForceParticipation: {
      youthLFPR: number;
      allIndiaYouthLFPR: number;
    };
    workerPopulationRatio: {
      youth: number;
      note: string;
    };
    keyFindings: string[];
  };

  // Drug Statistics
  drugs: {
    addictionBurden: DrugAddictionData;
    enforcement: DrugSeizureData;
    substanceProfile: SubstanceProfile[];
    demographicPatterns: DrugDemographicPattern[];
    governmentInitiatives: string[];
    treatmentGap: {
      relapseRate: number;
      treatmentSeekers: number;
      mentalHealthDeficit: string;
    };
  };

  // Fiscal Data
  fiscal: {
    budget2025_26: FiscalParameters;
    debt: DebtData;
    majorAllocations: { sector: string; amount: number }[];
  };

  // District Data
  districtDisparities: DistrictEconomicData[];

  // Sources
  sources: string[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const PLFS_QUARTERS = {
  CURRENT: "Oct-Dec 2025",
  PREVIOUS: "Jul-Sep 2025",
} as const;

export const UNEMPLOYMENT_THRESHOLDS = {
  YOUTH_CRISIS: 20,
  FEMALE_YOUTH_CRISIS: 25,
  NATIONAL_AVERAGE: 14.3,
} as const;

export const SECTORAL_THRESHOLDS = {
  AGRICULTURE_TARGET: 25,
  SERVICES_TARGET: 50,
  INDUSTRY_TARGET: 25,
} as const;
