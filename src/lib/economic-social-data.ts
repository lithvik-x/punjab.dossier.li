// @ts-nocheck
// Economic & Social Intelligence Data for Punjab
// Derived from: research-P3/economic-social/A8.01-08 files
// Research Date: May 2026 | Status: COMPLETE

import type {
  EconomicSocialKPI,
  GSDPDataPoint,
  PerCapitaIncome,
  GrowthComparison,
  SectoralComposition,
  UnemploymentRate,
  YouthUnemploymentData,
  UnemploymentByDemographic,
  StateComparison,
  DrugAddictionData,
  DrugSeizureData,
  SubstanceProfile,
  DrugDemographicPattern,
  DistrictEconomicData,
} from "@/types/economic-social-types";

// ==========================================
// METADATA
// ==========================================

const economicSocialMetadata = {
  researchDate: "May 20, 2026",
  sourceType: "Live Web Research (Stream A)",
  analyst: "AI Agent",
  status: "COMPLETE" as const,
};

// ==========================================
// GSDP DATA
// ==========================================

export const gsdpNominalData: GSDPDataPoint[] = [
  { year: "2019-20", gsdpCurrentPricesRsCrore: 537031, growthPercent: 4.78 },
  { year: "2020-21", gsdpCurrentPricesRsCrore: 540853, growthPercent: 0.71 },
  { year: "2021-22", gsdpCurrentPricesRsCrore: 627717, growthPercent: 16.06 },
  { year: "2022-23", gsdpCurrentPricesRsCrore: 692519, growthPercent: 10.32 },
  { year: "2023-24", gsdpCurrentPricesRsCrore: 771744, growthPercent: 11.44 },
  { year: "2024-25", gsdpCurrentPricesRsCrore: 838637, growthPercent: 8.67 },
  { year: "2025-26 (BE)", gsdpCurrentPricesRsCrore: 891301, growthPercent: 10 },
];

export const gsdpRealGrowthData: GSDPDataPoint[] = [
  { year: "2019-20", gsdpConstantPricesRsCrore: 413295, realGrowthPercent: 4.1 },
  { year: "2020-21", gsdpConstantPricesRsCrore: 407264, realGrowthPercent: -1.46 },
  { year: "2021-22", gsdpConstantPricesRsCrore: 437373, realGrowthPercent: 7.39 },
  { year: "2022-23", gsdpConstantPricesRsCrore: 468396, realGrowthPercent: 7.09 },
  { year: "2023-24", gsdpConstantPricesRsCrore: 497764, realGrowthPercent: 6.27 },
  { year: "2024-25", gsdpConstantPricesRsCrore: 528239, realGrowthPercent: 6.12 },
  { year: "2025-26 (AE)", gsdpConstantPricesRsCrore: 560000, realGrowthPercent: 6.1 },
];

export const perCapitaIncome: PerCapitaIncome = {
  punjab: 253317,
  india: 215935,
  ratio: 1.17,
  trend: "declining",
};

export const growthComparison: GrowthComparison[] = [
  { year: "2021-22", punjab: 7.4, india: 9.7, gap: -2.3 },
  { year: "2022-23", punjab: 6.6, india: 7.6, gap: -1.0 },
  { year: "2023-24", punjab: 6.8, india: 9.2, gap: -2.4 },
  { year: "2024-25", punjab: 6.3, india: 6.5, gap: -0.2 },
  { year: "2025-26 (AE)", punjab: 6.1, india: 7.4, gap: -1.3 },
];

export const sectoralComposition: SectoralComposition[] = [
  { sector: "Agriculture & Allied", sharePercent: 22.8, growthPercent: -2.49 },
  { sector: "Industry (Total)", sharePercent: 29.0, growthPercent: 6.3 },
  { sector: "Manufacturing", sharePercent: 17.0, growthPercent: 7.3 },
  { sector: "Services", sharePercent: 48.5, growthPercent: 8.4 },
];

// ==========================================
// UNEMPLOYMENT DATA
// ==========================================

export const unemploymentCurrentRates: UnemploymentRate[] = [
  { category: "Overall (15+ years)", punjab: 7.0, allIndia: 4.8 },
  { category: "Rural", punjab: 7.9, allIndia: 4.0 },
  { category: "Urban", punjab: 5.6, allIndia: 6.7 },
  { category: "Rural Male", punjab: 7.2 },
  { category: "Rural Female", punjab: 10.2 },
  { category: "Urban Male", punjab: 5.2 },
  { category: "Urban Female", punjab: 7.3 },
];

export const youthUnemploymentData: YouthUnemploymentData[] = [
  { period: "Jul-Sep 2025", punjab: 18.9, allIndia: 14.8, gap: 4.1 },
  { period: "Oct-Dec 2025", punjab: 19.3, allIndia: 14.3, gap: 5.0 },
];

export const unemploymentDemographicBreakdown: UnemploymentByDemographic[] = [
  { demographic: "Male Youth (15-29)", rural: 19.9, urban: 12.5, combined: 16.7 },
  { demographic: "Female Youth (15-29)", rural: 30.7, urban: 24.3, combined: 28.4 },
  { demographic: "Combined Youth (15-29)", rural: 22.5, urban: 14.8, combined: 19.3 },
];

export const stateComparison: StateComparison[] = [
  { state: "Himachal Pradesh", youthUnemploymentRate: 29.9, rank: 1 },
  { state: "Jammu & Kashmir", youthUnemploymentRate: 22.8, rank: 2 },
  { state: "Punjab", youthUnemploymentRate: 19.3, rank: 3 },
  { state: "Kerala", youthUnemploymentRate: 21.8, rank: 4 },
  { state: "Haryana", youthUnemploymentRate: 12.4, rank: 5 },
  { state: "All-India", youthUnemploymentRate: 14.3 },
];

// ==========================================
// DRUG STATISTICS DATA
// ==========================================

export const drugAddictionBurden: DrugAddictionData = {
  totalUsers: 6600000,
  childrenUsers: 697000,
  opioidDependents: 230000,
  populationSurveyPercent: 15.4,
  treatmentSeekers: 620000,
};

export const drugSeizureData: DrugSeizureData = {
  period: "2015-2024",
  ndpsCases: 51000,
  arrests: 6000,
  heroinSeizedKg: 4600,
  dronesSeized: 200,
};

export const substanceProfile: SubstanceProfile[] = [
  { substance: "Heroin (chitta)", percentAmongUsers: 46, notes: "Most common opioid; inhaled/injected" },
  { substance: "Tramadol", percentAmongUsers: 32, notes: "Pharmaceutical opioid, widely abused" },
  { substance: "Buprenorphine", percentAmongUsers: 32, notes: "Among IDUs; also used in OST" },
  { substance: "Opium (doda/bhukki)", percentAmongUsers: 0, notes: "Traditional use" },
  { substance: "Alcohol", percentAmongUsers: 38, notes: "Among substance users" },
  { substance: "Tobacco", percentAmongUsers: 33, notes: "High prevalence" },
  { substance: "Cannabis", percentAmongUsers: 2, notes: "Lower prevalence" },
  { substance: "Sedatives", percentAmongUsers: 12, notes: "Prescription drug abuse" },
];

export const drugDemographicPatterns: DrugDemographicPattern[] = [
  { demographic: "Overall (11-35 years)", addictionRate: 65.5 },
  { demographic: "Males", addictionRate: 69.2 },
  { demographic: "Females", addictionRate: 14.8 },
  { demographic: "Age 11-19", addictionRate: 56.3 },
  { demographic: "Age 20-30", addictionRate: 69.8 },
  { demographic: "Age >30", addictionRate: 78.4 },
  { demographic: "Illiterate/Primary", addictionRate: 85.5 },
  { demographic: "Secondary education", addictionRate: 74.6 },
  { demographic: "Above Secondary", addictionRate: 46.1 },
];

// ==========================================
// DISTRICT DATA
// ==========================================

export const districtEconomicData: DistrictEconomicData[] = [
  { district: "Ropar (Rupnagar)", perCapitaIncome: 254748, economicDriver: "Agrarian (29% agriculture in GDVA)", region: "Malwa" },
  { district: "Mohali (SAS Nagar)", perCapitaIncome: 223709, economicDriver: "Manufacturing (30%), IT hub", region: "Malwa" },
  { district: "Ludhiana", perCapitaIncome: 213718, economicDriver: "Manufacturing (31%), industry", region: "Malwa" },
  { district: "Jalandhar", perCapitaIncome: undefined, economicDriver: "Manufacturing, industry", region: "Doaba" },
  { district: "Amritsar", perCapitaIncome: undefined, economicDriver: "Trade, tourism, services", region: "Majha" },
  { district: "Patiala", perCapitaIncome: undefined, economicDriver: "Education, services", region: "Malwa" },
  { district: "Bathinda", perCapitaIncome: undefined, economicDriver: "Agriculture, agro-processing", region: "Malwa" },
  { district: "Hoshiarpur", perCapitaIncome: undefined, economicDriver: "Agriculture, forestry", region: "Doaba" },
  { district: "Gurdaspur", perCapitaIncome: undefined, economicDriver: "Border restrictions, limited activity", region: "Majha" },
  { district: "Tarn Taran", perCapitaIncome: undefined, economicDriver: "Border proximity, agrarian stagnation", region: "Majha" },
  { district: "Sangrur", perCapitaIncome: undefined, economicDriver: "Agriculture", region: "Malwa" },
  { district: "Moga", perCapitaIncome: undefined, economicDriver: "Agriculture", region: "Malwa" },
  { district: "Ferozpur", perCapitaIncome: undefined, economicDriver: "Border area, agriculture", region: "Malwa" },
  { district: "Muktsar", perCapitaIncome: undefined, economicDriver: "Agriculture", region: "Malwa" },
  { district: "Barnala", perCapitaIncome: undefined, economicDriver: "Agriculture", region: "Malwa" },
  { district: "Fatehgarh Sahib", perCapitaIncome: undefined, economicDriver: "Agriculture, industry", region: "Malwa" },
  { district: "Kapurthala", perCapitaIncome: undefined, economicDriver: "Industry, agriculture", region: "Doaba" },
  { district: "Nawanshahr", perCapitaIncome: undefined, economicDriver: "Agriculture", region: "Doaba" },
  { district: "Pathankot", perCapitaIncome: undefined, economicDriver: "Border, tourism, trade", region: "Majha" },
  { district: "Faridkot", perCapitaIncome: undefined, economicDriver: "Agriculture", region: "Malwa" },
  { district: "Mansa", perCapitaIncome: undefined, economicDriver: "Agriculture", region: "Malwa" },
];

// ==========================================
// FISCAL DATA
// ==========================================

export const fiscalData = {
  budget2025_26: {
    totalExpenditure: 146632,
    receipts: 112431,
    revenueDeficit: 2.7,
    fiscalDeficit: 3.8,
    netBorrowings: 31701,
  },
  debt: {
    outstandingDebtRsCrore: 442604,
    debtToGSDP: 47,
    comparedToNational: 32.1,
  },
  majorAllocations: [
    { sector: "Social Welfare & Women", amount: 18304 },
    { sector: "Women's Stipend", amount: 9300 },
    { sector: "Education", amount: 19279 },
    { sector: "Power Subsidy", amount: 15550 },
    { sector: "Agriculture", amount: 15377 },
    { sector: "Health", amount: 6879 },
  ],
};

// ==========================================
// SOURCES
// ==========================================

const economicSocialSources = [
  "PRS India -- Punjab Budget Analysis 2025-26",
  "StatisticsTimes -- Economy of Punjab",
  "Times of India -- Agri, industry drag Punjab growth to 6.1%",
  "Tribune India -- Punjab growth continues downward spiral",
  "IBEF -- Punjab Economy",
  "NITI Aayog -- Macro and Fiscal Landscape of Punjab (2025)",
  "PLFS Quarterly Bulletin Oct-Dec 2025 -- NSO, MoSPI",
  "IDPC -- Punjab needs healing: Drug policy struggles in India",
  "Herald Open Access -- Urgent Need to Revisit De-addiction in Punjab",
  "Springer -- A narrative review of substance use in Punjab (2015-2024)",
];

// ==========================================
// MAIN KPI DATA
// ==========================================

export const economicSocialKPI: EconomicSocialKPI = {
  metadata: economicSocialMetadata,
  gsdp: {
    nominalData: gsdpNominalData,
    realGrowthData: gsdpRealGrowthData,
    perCapitaIncome,
    growthComparison,
    sectoralComposition,
    keyObservations: [
      "Punjab's real GSDP growth has followed a declining trajectory since post-pandemic recovery peak",
      "Punjab has grown below national average consistently since 2013-14",
      "Agriculture projected to contract by 2.49% in 2025-26",
      "Services sector remains primary growth driver at 8.4%",
      "Debt-to-GSDP ratio of 47% significantly above median state level of 32.1%",
    ],
  },
  unemployment: {
    currentRates: unemploymentCurrentRates,
    youthUnemployment: youthUnemploymentData,
    demographicBreakdown: unemploymentDemographicBreakdown,
    stateComparison,
    laborForceParticipation: {
      youthLFPR: 45.9,
      allIndiaYouthLFPR: 41.3,
    },
    workerPopulationRatio: {
      youth: 37.1,
      note: "Only about 37% of youth population is actually employed",
    },
    keyFindings: [
      "Rural Punjab youth unemployment at 22.5% is among worst in northern states",
      "Female youth unemployment at 28.4% combined is nearly double male rate",
      "Rural female youth unemployment at 30.7% means nearly one in three young rural women seeking work cannot find it",
      "Gap between Punjab and national average has widened from 4.1 to 5.0 percentage points in single quarter",
      "Punjab ranks among top 5 states with highest youth unemployment nationally",
    ],
  },
  drugs: {
    addictionBurden: drugAddictionBurden,
    enforcement: drugSeizureData,
    substanceProfile,
    demographicPatterns: drugDemographicPatterns,
    governmentInitiatives: [
      "Anti-Narcotics Task Force (ANTF) with dedicated DGP-level leadership",
      "State Narcotics Control Bureau (SMAC)",
      "1933-MANAS helpline",
      "Yudh Nashian Virudh campaign: 8,344 FIRs, 14,734 arrests, 586 kg heroin seized",
    ],
    treatmentGap: {
      relapseRate: 65,
      treatmentSeekers: 620000,
      mentalHealthDeficit: "Only 0.75 psychiatrists per 100,000 people",
    },
  },
  fiscal: fiscalData,
  districtDisparities: districtEconomicData,
  sources: economicSocialSources,
};

// ==========================================
// EXPORTS
// ==========================================

export default economicSocialKPI;
