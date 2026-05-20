// Income, Poverty & Economic Stratification Types for Punjab Congress 2027 Election
// Derived from: research-M2/MP1-foundational/demographics/income-stratification.md
// Date: 19 May 2026 | Status: COMPLETE

// ==========================================
// MONTHLY INCOME BANDS
// ==========================================

export interface IncomeBand {
  range: string;
  estimatedPercentage: string;
  typicalProfile: string;
  geographyConcentration: string;
}

export interface IncomeBandData {
  band: string;
  minMonthly: number;
  maxMonthly: number;
  estPercentageHouseholds: string;
  typicalProfile: string;
  geography: string;
}

export interface PerCapitaConsumption {
  region: "Rural" | "Urban";
  punjab: string;
  india: string;
  source: string;
}

// ==========================================
// POVERTY INDICATORS
// ==========================================

export interface NFSABeneficiaries {
  totalBeneficiaries: string;
  rationCardsRestored2024: string;
  rationCardsDeleted: string;
  coverageMandate: string;
}

export interface PovertyRateTrend {
  period: string;
  ruralPoverty: string;
  urbanPoverty: string;
  source: string;
}

export interface MultidimensionalPoverty {
  period: string;
  nationalMPI: string;
  punjabStatus: string;
  note: string;
}

export interface IneligibilityCriteria {
  criterion: string;
  threshold: string;
}

// ==========================================
// ASSET OWNERSHIP
// ==========================================

export interface LandHoldingCategory {
  category: string;
  size: string;
  holdings: string;
  percentageOfTotal: string;
}

export interface LandHoldingsData {
  categories: LandHoldingCategory[];
  averageHoldingSize: string;
  totalHoldings: string;
  note: string;
}

export interface VehicleOwnership {
  type: string;
  penetration: string;
  note?: string;
}

export interface AssetOwnership {
  twoWheelers: string;
  fourWheelers: string;
  tractors: string;
  smartphones: string;
  gold: string;
  livestock: string;
  consumerDurables: string;
}

// ==========================================
// DEBT PROFILE
// ==========================================

export interface FarmerDebtData {
  averageDebtPerVictim: string;
  institutionalShare: string;
  nonInstitutionalShare: string;
  nonInstitutionalAsDriver: string;
  source: string;
}

export interface DebtPurpose {
  purpose: string;
  percentage: string;
}

export interface FarmerSuicideData {
  period: string;
  suicides: number;
  districts: string;
  source: string;
  peakYear?: string;
  peakCases?: number;
}

export interface DistrictSuicideData {
  district: string;
  suicides: number;
  period: string;
}

export interface SuicideDemographics {
  ageRange: string;
  percentageInRange: string;
  malePercentage: string;
  illiteratePercentage: string;
}

export interface OverIndebtednessData {
  estimatedPercentage: string;
  definition: string;
  mostAcuteRegions: string;
}

// ==========================================
// ECONOMIC MOBILITY
// ==========================================

export interface CasteIncomeCorrelation {
  casteCategory: string;
  annualFarmHHIncome: string;
  relativePosition: string;
}

export interface GiniCoefficient {
  value: string;
  year: string;
  source: string;
  interpretation: string;
}

export type MobilityTrend = "Upward" | "Stable" | "Downward" | "Low";

export interface MobilityData {
  category: string;
  trend: MobilityTrend;
  description: string;
}

export interface NRIRemittanceData {
  annualRemittances: string;
  primaryRegion: string;
  primaryDistricts: string[];
}

// ==========================================
// ECONOMIC ANXIETY INDICATORS
// ==========================================

export interface PrimaryFear {
  rank: number;
  fear: string;
  description: string;
}

export interface RegionalAnxiety {
  region: string;
  primaryAnxiety: string;
  politicalImplication: string;
}

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

export interface EconomicStrategicImplication {
  number: number;
  implication: string;
  description: string;
}

// ==========================================
// DATA GAPS
// ==========================================

export interface DataGap {
  dataPoint: string;
  status: "VERIFICATION_NEEDED" | "DELAYED" | "PARTIALLY_AVAILABLE";
}

export interface SourceDocument {
  citation: string;
  source: string;
}

// ==========================================
// TYPE EXPORTS
// ==========================================

export type IncomeBandName =
  | "Below Rs 5,000"
  | "Rs 5,000 - 10,000"
  | "Rs 10,000 - 20,000"
  | "Rs 20,000 - 35,000"
  | "Rs 35,000 - 50,000"
  | "Rs 50,000 - 1,00,000"
  | "Rs 1,00,000 - 3,00,000"
  | "Above Rs 3,00,000";

export type RegionName = "Malwa" | "Majha" | "Doaba" | "Urban";

export type CasteCategory = "General" | "OBC" | "SC";

export type EconomicAnxietyRank = 1 | 2 | 3 | 4 | 5 | 6;
