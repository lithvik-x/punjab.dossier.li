// @ts-nocheck
// Income, Poverty & Economic Stratification Data for Punjab Congress 2027 Election
// Derived from: research-M2/MP1-foundational/demographics/income-stratification.md
// Date: 19 May 2026 | Status: COMPLETE

import type {
  IncomeBand,
  IncomeBandData,
  PerCapitaConsumption,
  NFSABeneficiaries,
  PovertyRateTrend,
  MultidimensionalPoverty,
  LandHoldingsData,
  VehicleOwnership,
  AssetOwnership,
  FarmerDebtData,
  DebtPurpose,
  FarmerSuicideData,
  DistrictSuicideData,
  SuicideDemographics,
  OverIndebtednessData,
  CasteIncomeCorrelation,
  GiniCoefficient,
  MobilityData,
  NRIRemittanceData,
  PrimaryFear,
  RegionalAnxiety,
  EconomicStrategicImplication,
  DataGap,
  SourceDocument,
} from "@/types/income-stratification-types";

// ==========================================
// MONTHLY INCOME BANDS
// ==========================================

export const incomeBands: IncomeBand[] = [
  {
    range: "Below Rs 5,000",
    estimatedPercentage: "8-10%",
    typicalProfile: "Landless labourers, BPL/AAY cardholders, informal workers",
    geographyConcentration: "Rural Malwa (Sangrur, Mansa, Bathinda), urban slums",
  },
  {
    range: "Rs 5,000 - 10,000",
    estimatedPercentage: "15-18%",
    typicalProfile: "Marginal farmers (<1 ha), casual labour, SC agricultural workers",
    geographyConcentration: "Rural Doaba (Nawanshahr, Kapurthala), border districts",
  },
  {
    range: "Rs 10,000 - 20,000",
    estimatedPercentage: "25-28%",
    typicalProfile: "Small farmers (1-2 ha), petty shopkeepers, low-skill service workers",
    geographyConcentration: "Across all regions; dominant rural band",
  },
  {
    range: "Rs 20,000 - 35,000",
    estimatedPercentage: "20-22%",
    typicalProfile: "Medium farmers (2-4 ha), govt employees, skilled workers",
    geographyConcentration: "Peri-urban areas, Ludhiana, Jalandhar, Amritsar",
  },
  {
    range: "Rs 35,000 - 50,000",
    estimatedPercentage: "12-15%",
    typicalProfile: "Large farmers (4+ ha), small business owners, mid-level professionals",
    geographyConcentration: "Malwa belt, urban centres",
  },
  {
    range: "Rs 50,000 - 1,00,000",
    estimatedPercentage: "8-10%",
    typicalProfile: "NRIs/remittance households, established businesses, professionals",
    geographyConcentration: "Doaba (NRI belt: Jalandhar, Kapurthala, Hoshiarpur)",
  },
  {
    range: "Rs 1,00,000 - 3,00,000",
    estimatedPercentage: "3-4%",
    typicalProfile: "Industrialists, large landowners, traders",
    geographyConcentration: "Ludhiana (industrial), Amritsar, Chandigarh periphery",
  },
  {
    range: "Above Rs 3,00,000",
    estimatedPercentage: "1-2%",
    typicalProfile: "Industrial houses, political class, large NRIs",
    geographyConcentration: "Ludhiana, Mohali, Amritsar",
  },
];

/**
 * Income band data with numeric values for calculations
 */
export const incomeBandData: IncomeBandData[] = [
  { band: "Below Rs 5,000", minMonthly: 0, maxMonthly: 5000, estPercentageHouseholds: "8-10%", typicalProfile: "Landless labourers, BPL/AAY", geography: "Rural Malwa, urban slums" },
  { band: "Rs 5,000 - 10,000", minMonthly: 5000, maxMonthly: 10000, estPercentageHouseholds: "15-18%", typicalProfile: "Marginal farmers, casual labour", geography: "Rural Doaba, border districts" },
  { band: "Rs 10,000 - 20,000", minMonthly: 10000, maxMonthly: 20000, estPercentageHouseholds: "25-28%", typicalProfile: "Small farmers, petty shopkeepers", geography: "All regions" },
  { band: "Rs 20,000 - 35,000", minMonthly: 20000, maxMonthly: 35000, estPercentageHouseholds: "20-22%", typicalProfile: "Medium farmers, govt employees", geography: "Peri-urban" },
  { band: "Rs 35,000 - 50,000", minMonthly: 35000, maxMonthly: 50000, estPercentageHouseholds: "12-15%", typicalProfile: "Large farmers, business owners", geography: "Malwa, urban centres" },
  { band: "Rs 50,000 - 1,00,000", minMonthly: 50000, maxMonthly: 100000, estPercentageHouseholds: "8-10%", typicalProfile: "NRIs, established businesses", geography: "Doaba (NRI belt)" },
  { band: "Rs 1,00,000 - 3,00,000", minMonthly: 100000, maxMonthly: 300000, estPercentageHouseholds: "3-4%", typicalProfile: "Industrialists, large traders", geography: "Ludhiana, Amritsar" },
  { band: "Above Rs 3,00,000", minMonthly: 300000, maxMonthly: Infinity, estPercentageHouseholds: "1-2%", typicalProfile: "Industrial houses, political class", geography: "Ludhiana, Mohali, Amritsar" },
];

/**
 * Per Capita Consumption (HCES 2023-24)
 */
export const perCapitaConsumption: PerCapitaConsumption[] = [
  { region: "Rural", punjab: "Rs 4,500-5,000 (estimated)", india: "Rs 4,122", source: "MoSPI HCES 2023-24" },
  { region: "Urban", punjab: "Rs 7,500-8,000 (estimated)", india: "Rs 6,996", source: "MoSPI HCES 2023-24" },
];

/**
 * Key insight about fragile middle class
 */
export const FRAGILE_MIDDLE_BAND = {
  range: "Rs 10,000 - 35,000",
  percentageHouseholds: "45-50%",
  description:
    "Punjab's rural middle class is economically precarious -- one crop failure or medical emergency pushes them into the Rs 5,000-10,000 band. This 'fragile middle' is the swing voter pool.",
};

// ==========================================
// POVERTY INDICATORS
// ==========================================

/**
 * NFSA/BPL/AAY Coverage
 */
export const nfsaBeneficiaries: NFSABeneficiaries = {
  totalBeneficiaries: "1.53 crore",
  rationCardsRestored2024: "10.77 lakh beneficiaries",
  rationCardsDeleted: "3.1 lakh cards",
  coverageMandate: "75% rural, 50% urban",
};

/**
 * Ineligibility criteria for ration cards
 */
export const rationCardIneligibility = [
  { criterion: "Annual household income", threshold: "> Rs 60,000" },
  { criterion: "Fertile land", threshold: "> 2.5 acres" },
  { criterion: "Barren land", threshold: "> 5 acres" },
];

/**
 * Poverty rate trends
 */
export const povertyRateTrends: PovertyRateTrend[] = [
  { period: "2011-12 (Tendulkar)", ruralPoverty: "~7.0% (Punjab)", urbanPoverty: "~6.0% (Punjab)", source: "Planning Commission" },
  { period: "2022-23 (Updated Tendulkar)", ruralPoverty: "~4.9% (India)", urbanPoverty: "~4.1% (India)", source: "SBI Research" },
  { period: "2023-24 (HCES-based)", ruralPoverty: "Below 5% (India)", urbanPoverty: "Below 4% (India)", source: "MoSPI" },
];

/**
 * Multidimensional Poverty (MPI)
 */
export const multidimensionalPoverty: MultidimensionalPoverty = {
  period: "2019-21",
  nationalMPI: "14.96%",
  punjabStatus: "BETTER than national average",
  note: "Significant intra-state variation; Malwa districts (Sangrur, Mansa, Bathinda) have higher MPI than Majha/Doaba",
};

// ==========================================
// ASSET OWNERSHIP
// ==========================================

/**
 * Land Holdings (Agriculture Census 2015-16)
 */
export const landHoldingsData: LandHoldingsData = {
  categories: [
    { category: "Marginal", size: "<1 ha (<2.5 acres)", holdings: "1,54,412", percentageOfTotal: "~14.7%" },
    { category: "Small", size: "1-2 ha (2.5-5 acres)", holdings: "2,07,436", percentageOfTotal: "~19.7%" },
    { category: "Semi-Medium", size: "2-4 ha", holdings: "VERIFICATION_NEEDED", percentageOfTotal: "~25% (est.)" },
    { category: "Medium", size: "4-10 ha", holdings: "VERIFICATION_NEEDED", percentageOfTotal: "~28% (est.)" },
    { category: "Large", size: "10+ ha", holdings: "VERIFICATION_NEEDED", percentageOfTotal: "~12% (est.)" },
  ],
  averageHoldingSize: "3.62 ha",
  totalHoldings: "~10.53 lakh",
  note: "Punjab well above national average of 1.08 ha but masks extreme inequality",
};

/**
 * Critical fact about farmer suicides
 */
export const FARMER_SUICIDE_ASSET_FACT = {
  fact: "77% of farmer suicides were by marginal/small farmers owning <2 hectares",
  source: "PAU study, 2000-2018",
};

/**
 * Vehicle ownership estimates
 */
export const vehicleOwnership: VehicleOwnership[] = [
  { type: "Two-wheelers", penetration: "60-70% rural households", note: "One of India's highest per-capita rates" },
  { type: "Four-wheelers", penetration: "15-20% of households", note: "Much higher than national average of ~8%" },
  { type: "Tractors", penetration: "~25% of small farmers", note: "Many marginal farmers take loans for tractors they cannot economically justify" },
];

/**
 * Asset ownership summary
 */
export const assetOwnership: AssetOwnership = {
  twoWheelers: "60-70% rural households",
  fourWheelers: "15-20% households",
  tractors: "~25% of small farmers own tractors",
  smartphones: "65-75% households",
  gold: "Culturally significant; Sikh weddings involve substantial gold gifting; lower-middle and poor households often have gold as their ONLY financial safety net",
  livestock: "Declining asset as dairying becomes corporatized; marginal farmers still maintain 1-2 buffaloes",
  consumerDurables: "TV, refrigerator, washing machine penetration high relative to income (aspiration-driven consumption)",
};

// ==========================================
// DEBT PROFILE
// ==========================================

/**
 * Farmer Debt Data
 */
export const farmerDebtData: FarmerDebtData = {
  averageDebtPerVictim: "Rs 8,31,927",
  institutionalShare: "55.09%",
  nonInstitutionalShare: "44.91%",
  nonInstitutionalAsDriver: "88% of cases debt-driven",
  source: "PAU/ISADP Study",
};

/**
 * Debt purpose breakdown
 */
export const debtPurposes: DebtPurpose[] = [
  { purpose: "Farm inputs (seeds, fertilizers, equipment)", percentage: "~40%" },
  { purpose: "Consumption expenditure (daily needs)", percentage: "~15%" },
  { purpose: "Medical emergencies", percentage: "~12%" },
  { purpose: "Education/children", percentage: "~8%" },
  { purpose: "Daughter's marriage", percentage: "~15%" },
  { purpose: "Tractor/farm machinery loans", percentage: "~10%" },
];

/**
 * Non-institutional credit crisis details
 */
export const nonInstitutionalCreditCrisis = {
  description: "Informal credit market dominated by arthiyas (commission agents) who operate out of mandis",
  interestRates: "18-36% annually (vs 7-9% institutional)",
  debtCollectionMechanism: "Tied to crop sale in mandi; farmers sell produce through arthiyas who deduct loan repayments at source",
  politicalNexus: "Many arthiyas are politically connected or are politicians themselves",
  impact: "Perpetual debt bondage cycle; Sage Journal study shows informal credit accounts for 20% of all suicides in sample",
};

/**
 * Farmer Suicide Data
 */
export const farmerSuicideData: FarmerSuicideData[] = [
  {
    period: "2000-2018",
    suicides: 9291,
    districts: "6 districts (Sangrur, Bathinda, Ludhiana, Mansa, Moga, Barnala)",
    source: "PAU Study (EPW)",
    peakYear: "2015",
    peakCases: 515,
  },
  {
    period: "2023-24 to Nov 2025",
    suicides: 2809,
    districts: "State-wide",
    source: "State Agriculture Dept",
  },
];

/**
 * District-wise suicide breakdown (2000-2018)
 */
export const districtSuicideData: DistrictSuicideData[] = [
  { district: "Sangrur", suicides: 2506, period: "2000-2018" },
  { district: "Mansa", suicides: 2098, period: "2000-2018" },
  { district: "Bathinda", suicides: 1956, period: "2000-2018" },
  { district: "Barnala", suicides: 1126, period: "2000-2018" },
  { district: "Moga", suicides: 880, period: "2000-2018" },
  { district: "Ludhiana", suicides: 725, period: "2000-2018" },
];

/**
 * Suicide demographics
 */
export const suicideDemographics: SuicideDemographics = {
  ageRange: "19-35 years",
  percentageInRange: "75%",
  malePercentage: "92%",
  illiteratePercentage: "45%",
};

/**
 * Over-indebtedness data
 */
export const overIndebtednessData: OverIndebtednessData = {
  estimatedPercentage: "35-45%",
  definition: "Debt servicing >50% of income",
  mostAcuteRegions: "Malwa cotton belt and southwest Punjab",
};

// ==========================================
// ECONOMIC MOBILITY
// ==========================================

/**
 * Caste-Income Correlation
 */
export const casteIncomeCorrelation: CasteIncomeCorrelation[] = [
  { casteCategory: "General Caste", annualFarmHHIncome: "Rs 1,49,380", relativePosition: "Baseline (highest)" },
  { casteCategory: "OBC", annualFarmHHIncome: "Rs 1,13,415", relativePosition: "76% of General" },
  { casteCategory: "SC/Dalit", annualFarmHHIncome: "Rs 85,877", relativePosition: "57% of General" },
];

/**
 * Gini Coefficient
 */
export const giniCoefficient: GiniCoefficient = {
  value: "0.48",
  year: "2012-13",
  source: "Saini & Kaur, 2022",
  interpretation: "HIGH income inequality among farm households; above India's national Gini of ~0.35-0.40; approaches 'severe inequality' threshold",
};

/**
 * Intergenerational mobility
 */
export const mobilityData: MobilityData[] = [
  { category: "Agricultural families", trend: "Stable", description: "Mostly STABLE or DOWNWARD; land fragmentation across generations" },
  { category: "NRI remittance families (Doaba)", trend: "Upward", description: "UPWARD mobility via migration; Jalandhar-Kapurthala-Hoshiarpur belt shows significant wealth accumulation" },
  { category: "Urban professional families", trend: "Stable", description: "MODERATE upward mobility in Ludhiana, Mohali, Amritsar" },
  { category: "Dalit families", trend: "Low", description: "LOWEST mobility; despite reservation, asset poverty persists across generations; landlessness rate estimated at 70-80%" },
];

/**
 * NRI Remittance Economy
 */
export const nriRemittanceData: NRIRemittanceData = {
  annualRemittances: "Rs 15,000-20,000 crore",
  primaryRegion: "Doaba",
  primaryDistricts: ["Jalandhar", "Kapurthala", "Hoshiarpur"],
};

// ==========================================
// ECONOMIC ANXIETY INDICATORS
// ==========================================

/**
 * Primary fears (ranked by prevalence)
 */
export const primaryFears: PrimaryFear[] = [
  {
    rank: 1,
    fear: "Crop failure",
    description: "Cotton whitefly (2015 wiped out Bathinda-Mansa-Barnala), wheat blight, erratic monsoon. Single bad season can push a farmer from middle to BPL.",
  },
  {
    rank: 2,
    fear: "Debt spiral",
    description: "Inability to repay arthiya before next sowing season. Fear of land auction or social humiliation.",
  },
  {
    rank: 3,
    fear: "Medical emergency",
    description: "Privatized healthcare costs. One serious illness can cost Rs 5-15 lakh, wiping out years of savings.",
  },
  {
    rank: 4,
    fear: "Daughter's marriage",
    description: "Culturally, Sikh and Jat weddings involve substantial expenditure (Rs 5-20 lakh). Despite legal prohibition, dowry expectations persist.",
  },
  {
    rank: 5,
    fear: "Job loss/underemployment",
    description: "Youth unemployment in Punjab is estimated at 10-14% (higher than national average). Drug addiction compounds joblessness.",
  },
  {
    rank: 6,
    fear: "Old-age destitution",
    description: "No universal pension. Landless elderly (especially Dalits) face extreme poverty. Old-age pension in Punjab is Rs 1,500-2,000/month (insufficient).",
  },
];

/**
 * Regional anxiety mapping
 */
export const regionalAnxiety: RegionalAnxiety[] = [
  {
    region: "Malwa (Sangrur, Mansa, Bathinda)",
    primaryAnxiety: "Farmer debt + suicide + crop failure",
    politicalImplication: "Anti-incumbency strongest here; AAP won massively in 2022 on these issues",
  },
  {
    region: "Majha (Amritsar, Gurdaspur, Tarn Taran)",
    primaryAnxiety: "Drug menace + unemployment + border area neglect",
    politicalImplication: "National security + local economy concerns",
  },
  {
    region: "Doaba (Jalandhar, Kapurthala, Hoshiarpur)",
    primaryAnxiety: "NRI investment + youth emigration + industrial decline",
    politicalImplication: "Dual identity politics; aspirational but frustrated",
  },
  {
    region: "Urban (Ludhiana, Amritsar, Jalandhar)",
    primaryAnxiety: "Inflation + job loss + civic infrastructure",
    politicalImplication: "Middle-class swing voters",
  },
];

// ==========================================
// STRATEGIC IMPLICATIONS FOR CONGRESS
// ==========================================

export const economicStrategicImplications: EconomicStrategicImplication[] = [
  {
    number: 1,
    implication: "Debt waiver is the #1 electoral issue in Malwa",
    description: "9,291+ farmer suicides (2000-2018) and 2,809+ (2023-25) under AAP watch. Congress must promise comprehensive debt settlement including non-institutional debt conversion.",
  },
  {
    number: 2,
    implication: "BPL restoration is a live issue",
    description: "AAP deleted 3.1 lakh ration cards then restored 10.77 lakh beneficiaries under pressure. This caused significant anxiety among the poor. Congress can promise permanent, non-arbitrary PDS coverage.",
  },
  {
    number: 3,
    implication: "The 'fragile middle' (Rs 10,000-35,000/month) is the swing voter pool",
    description: "They are not BPL-poor but are one crisis away from poverty. Message: 'economic security for the middle, dignity for the poor.'",
  },
  {
    number: 4,
    implication: "SC economic empowerment is an untapped Congress opportunity",
    description: "32% of Punjab is Dalit with income at 57% of General caste levels. Congress should propose targeted asset-building (land, housing, skill training) beyond reservation.",
  },
  {
    number: 5,
    implication: "Healthcare privatization anxiety is universal",
    description: "AAP promised free medicines in hospitals (Jan 2024). Congress must counter with a MORE comprehensive rural health insurance scheme.",
  },
  {
    number: 6,
    implication: "Daughter's marriage + drug menace = dual anxiety in every household",
    description: "A 'daughter protection scheme' (marriage assistance + drug rehabilitation centers) addresses both simultaneously.",
  },
];

// ==========================================
// DATA GAPS
// ==========================================

export const incomeDataGaps: DataGap[] = [
  { dataPoint: "District-wise NFSA/AAY cardholder counts", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Updated Agriculture Census data (post-2015-16)", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Punjab-specific MPCE from HCES 2023-24", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Current over-indebtedness rate (formal survey)", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Smartphone/internet penetration district-wise", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Vehicle registration data by district", status: "VERIFICATION_NEEDED" },
  { dataPoint: "Homeless population estimates", status: "VERIFICATION_NEEDED" },
  { dataPoint: "NRI remittance flows by district", status: "VERIFICATION_NEEDED" },
  { dataPoint: "MPI district-wise scores (NITI Aayog)", status: "VERIFICATION_NEEDED" },
];

// ==========================================
// SOURCES
// ==========================================

export const incomeSourceDocuments: SourceDocument[] = [
  { citation: "PAU Study published in Economic and Political Weekly -- Sukhpal Singh, Manjeet Kaur, H.S. Kingra", source: "EPW" },
  { citation: "Times of India -- Punjab restores benefits to 10.77 lakh ration card holders", source: "Times of India, Feb 2024" },
  { citation: "New Indian Express -- 1.53 crore NFSA beneficiaries in Punjab", source: "New Indian Express, Sep 2025" },
  { citation: "ISADP -- Determinants of Farmers' Suicide in South-Western Punjab", source: "ISADP 2024" },
  { citation: "Sage Journals -- Economic Model of Agrarian Suicide in Punjab", source: "Sage Journals" },
  { citation: "Saini & Kaur (2022) -- Gini coefficient 0.48 for Punjab farm households", source: "Saini & Kaur 2022" },
  { citation: "ResearchGate -- Caste-wise income of marginal farm households, Punjab", source: "ResearchGate" },
  { citation: "Agriculture Census 2015-16 -- Punjab operational holdings data", source: "Agriculture Census" },
  { citation: "MoSPI -- HCES 2023-24 (national MPCE)", source: "MoSPI" },
  { citation: "SBI Research -- India poverty rate below 5% in FY24", source: "SBI Research" },
  { citation: "State Agriculture Department -- 2,809 farmer suicides (2023-24 to Nov 2025)", source: "Punjab Agriculture Dept" },
  { citation: "Emerald Publishing -- Insights into economic inequality and mobility in Punjab", source: "Emerald Publishing, Nov 2025" },
];

// ==========================================
// CONSTANTS & MAPPINGS
// ==========================================

/**
 * Malwa districts with highest farmer suicides
 */
export const WORST_FARMER_SUICIDE_DISTRICTS = [
  "Sangrur",
  "Mansa",
  "Bathinda",
  "Barnala",
  "Moga",
] as const;

/**
 * Districts with highest poverty/MPI
 */
export const HIGHEST_POVERTY_DISTRICTS = ["Sangrur", "Mansa", "Bathinda"] as const;

/**
 * Income band for swing voters (fragile middle)
 */
export const SWING_VOTER_INCOME_BAND = {
  min: 10000,
  max: 35000,
  description: "Rs 10,000-35,000/month - one crisis away from poverty",
};

/**
 * Caste income ratios
 */
export const CASTE_INCOME_RATIOS = {
  general: 1.0,
  obc: 0.76,
  sc: 0.57,
} as const;

/**
 * Land holding size categories (in hectares)
 */
export const LAND_HOLDING_CATEGORIES = {
  marginal: { max: 1 },
  small: { min: 1, max: 2 },
  semiMedium: { min: 2, max: 4 },
  medium: { min: 4, max: 10 },
  large: { min: 10 },
} as const;

// ==========================================
// HELPER FUNCTIONS & UTILITY MAPPINGS
// ==========================================

/**
 * Get income band for a given monthly income
 */
export function getIncomeBand(monthlyIncome: number): string {
  if (monthlyIncome < 5000) return "Below Rs 5,000";
  if (monthlyIncome < 10000) return "Rs 5,000 - 10,000";
  if (monthlyIncome < 20000) return "Rs 10,000 - 20,000";
  if (monthlyIncome < 35000) return "Rs 20,000 - 35,000";
  if (monthlyIncome < 50000) return "Rs 35,000 - 50,000";
  if (monthlyIncome < 100000) return "Rs 50,000 - 1,00,000";
  if (monthlyIncome < 300000) return "Rs 1,00,000 - 3,00,000";
  return "Above Rs 3,00,000";
}

/**
 * Check if income band is swing voter band
 */
export function isSwingVoterBand(monthlyIncome: number): boolean {
  return monthlyIncome >= 10000 && monthlyIncome <= 35000;
}

/**
 * Get districts with highest farmer suicide risk
 */
export function getFarmerSuicideRiskDistricts(): string[] {
  return districtSuicideData.map(d => d.district);
}

/**
 * Get regions with highest economic anxiety
 */
export function getHighestAnxietyRegions(): {
  region: string;
  anxiety: string;
  implication: string;
}[] {
  return regionalAnxiety;
}

/**
 * Debt purpose breakdown as key-value map
 */
export const DEBT_PURPOSE_MAP: Record<string, string> = {
  farmInputs: "~40%",
  consumption: "~15%",
  medical: "~12%",
  education: "~8%",
  daughterMarriage: "~15%",
  tractor: "~10%",
};

/**
 * Over-indebtedness threshold
 */
export const OVER_INDEBTEDNESS_THRESHOLD = {
  debtToIncomeRatio: 0.5, // 50% of income
  estimatedAffectedHouseholds: "35-45%",
};

/**
 * Caste income index (relative to General = 100)
 */
export const CASTE_INCOME_INDEX = {
  general: 100,
  obc: 76,
  sc: 57,
} as const;

/**
 * Youth unemployment estimate
 */
export const YOUTH_UNEMPLOYMENT = {
  punjab: "10-14%",
  note: "Higher than national average",
} as const;

/**
 * Old age pension in Punjab
 */
export const PUNJAB_PENSION = {
  oldAge: "Rs 1,500-2,000/month",
  insufficient: true,
} as const;
