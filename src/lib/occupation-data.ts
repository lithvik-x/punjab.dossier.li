// Punjab Occupation Structure Data
// Source: MP1-foundational/demographics/occupation-full.md & occupation-vulnerable.md
// Data Currency: Census 2011, Agriculture Census 2015-16, PLFS 2023-24, PLFS 2025, MSME/Udyam 2023-24

import type {
  OccupationReport,
  VulnerableOccupationsReport,
  SectorDistribution,
  LandHoldingSizeClass,
  CultivatorLabourerSummary,
  CropDistribution,
  IndustrialCluster,
  GovernmentEmploymentSummary,
  OccupationVoterMapping,
  VulnerableOccupation,
  BondedLabourData,
  ReligiousOccupation,
  SGPCData,
} from "@/types/occupation-types";

// ==========================================
// WORKFORCE SECTORAL DISTRIBUTION
// ==========================================

export const sectorDistributionData: SectorDistribution[] = [
  { sector: "Agriculture (cultivators + agricultural labourers)", sharePercent: 42, notes: "Declining from ~55% in 2001; still largest single sector" },
  { sector: "Industry (manufacturing + construction + utilities)", sharePercent: 24, notes: "MSME-dominated; construction growing" },
  { sector: "Services (trade, transport, education, health, govt, other)", sharePercent: 34, notes: "Fastest growing; govt employment significant" },
];

export const workforceOverview = {
  sectors: sectorDistributionData,
  unemploymentRate: 7.7,
  nationalUnemploymentRate: 6.7,
  labourForceParticipation: "Lower than national average; female LFPR particularly weak",
  dataSource: "PLFS 2023-24 (July 2023-June 2024), Census 2011 as structural baseline",
  electoralSignificance:
    "Agriculture employs the largest bloc but is shrinking. Youth unemployment is the top political issue. MSME distress in Ludhiana/Jalandhar affects urban votes. NRI households in Doaba are influential swing voters.",
};

// ==========================================
// LAND HOLDINGS (Agriculture Census 2015-16)
// ==========================================

export const landHoldingSizeClasses: LandHoldingSizeClass[] = [
  { sizeClass: "Marginal", sizeRangeHectares: "Below 1.00", numberOfHoldings: 154412, areaThousandHa: 734, averageSizeHa: 0.48 },
  { sizeClass: "Small", sizeRangeHectares: "1.00 - 2.00", numberOfHoldings: 245340, areaThousandHa: 3690, averageSizeHa: 1.5 },
  { sizeClass: "Semi-Medium", sizeRangeHectares: "2.00 - 4.00", numberOfHoldings: 305220, areaThousandHa: 8846, averageSizeHa: 2.9 },
  { sizeClass: "Medium", sizeRangeHectares: "4.00 - 10.00", numberOfHoldings: 253850, areaThousandHa: 16039, averageSizeHa: 6.32 },
  { sizeClass: "Large", sizeRangeHectares: "10.00+", numberOfHoldings: 67650, areaThousandHa: 13328, averageSizeHa: 19.71 },
];

export const landHoldingSummary = {
  totalHoldings: 1026472,
  totalAreaThousandHa: 42637,
  averageSizeHa: 4.15,
  stateAverageNationalComparison: "Punjab's average (4.15 Ha) is significantly higher than national average (~1.08 Ha)",
  marginalSmallHoldingsPercentOfTotal: 39,
  marginalSmallHoldingsPercentOfArea: 10,
  mediumLargeHoldingsPercentOfTotal: 31,
  mediumLargeHoldingsPercentOfArea: 69,
  largestCategoryByNumber: "Semi-medium (29.7%)",
  averageSizeDecline: "From ~4.63 Ha in 2000-01 to 4.15 Ha in 2015-16",
  dataStatus: "VERIFICATION_NEEDED: Agriculture Census 2021-22 data collection completed but full state-level tables not yet publicly released as of May 2026",
};

// ==========================================
// CULTIVATORS vs AGRICULTURAL LABOURERS (Census 2011)
// ==========================================

export const cultivatorLabourerSummary: CultivatorLabourerSummary = {
  cultivators: { category: "Cultivators (land-owning farmers)", persons: "~14.2 lakh", shareOfTotalWorkers: "~18-20%" },
  agriculturalLabourers: { category: "Agricultural Labourers", persons: "~24.5 lakh", shareOfTotalWorkers: "~32-35%" },
  totalAgriculturalWorkers: { category: "Total Agricultural Workers", persons: "~38.7 lakh", shareOfTotalWorkers: "~50-52%" },
  labourerToCultivatorRatio: "Nearly 2:1 — one of the highest ratios in India",
  scCommunityPercentage: "~65-70% of agricultural labourers are from SC communities",
  migrantSeasonalWorkers: "Estimated 8-10 lakh seasonal migrants from UP and Bihar",
};

// ==========================================
// TENANCY & LEASE FARMING
// ==========================================

export const tenancyData = {
  leasedAreaPercent: 30, // 30-35%
  affectedFarmers: "Tenant farmers have no access to institutional credit, crop insurance, or MSP procurement directly",
  leaseRateRange: "Rs 40,000-80,000/acre/year depending on district and water availability",
  highestConcentration: "Highest in Malwa region (Bathinda, Mansa, Muktsar, Fazilka)",
  electoralHook: "Tenant farmer distress is a major issue — Congress promise of formalizing tenancy could resonate",
};

// ==========================================
// CROP-WISE OCCUPATIONAL DISTRIBUTION
// ==========================================

export const cropDistributionData: CropDistribution[] = [
  { crop: "Wheat", areaLakhHa: 35.0, cultivatorHouseholds: "~7.5 lakh (nearly universal in rabi)" },
  { crop: "Paddy/Rice", areaLakhHa: 31.0, cultivatorHouseholds: "~6.5 lakh (nearly universal in kharif)" },
  { crop: "Cotton", areaLakhHa: 3.5, cultivatorHouseholds: "~1.0 lakh (Malwa — Bathinda, Mansa, Fazilka)", notes: "Range 3.0-4.0" },
  { crop: "Sugarcane", areaLakhHa: 0.9, cultivatorHouseholds: "~0.5 lakh (Doaba — Hoshiarpur, Kapurthala)" },
  { crop: "Maize", areaLakhHa: 1.6, cultivatorHouseholds: "~0.8 lakh (scattered)" },
  { crop: "Potato/Vegetables", areaLakhHa: 1.0, cultivatorHouseholds: "~0.5 lakh (Doaba, especially Jalandhar/Hoshiarpur)" },
  { crop: "Kinnow/Fruits", areaLakhHa: 0.5, cultivatorHouseholds: "~0.2 lakh (Abohar-Fazilka belt)" },
];

// ==========================================
// MSME BASE
// ==========================================

export const msmeMetrics = {
  totalMSMERegistrations: 320000,
  udyogAadhaarRegistrations: 154071,
  msmeEmployment: 4086000, // ~40.86 lakh persons
  microPercent: 85,
  smallPercent: 13,
  mediumPercent: 2,
};

// ==========================================
// KEY INDUSTRIAL CLUSTERS
// ==========================================

export const industrialClusters: IndustrialCluster[] = [
  { cluster: "Ludhiana", district: "Ludhiana", subSector: "Hosiery/Knitwear/Textiles", significance: "~90% of India's woolen hosiery; major export hub to Europe/Russia" },
  { cluster: "Ludhiana", district: "Ludhiana", subSector: "Bicycle Manufacturing", significance: "~92% of India's bicycles; global leader" },
  { cluster: "Ludhiana", district: "Ludhiana", subSector: "Auto Parts/Light Engineering", significance: "Significant MSME cluster" },
  { cluster: "Jalandhar", district: "Jalandhar", subSector: "Sports Goods", significance: "~60-75% of India's sports goods; export-oriented" },
  { cluster: "Jalandhar", district: "Jalandhar", subSector: "Hand Tools", significance: "Major MSME cluster" },
  { cluster: "Jalandhar", district: "Jalandhar", subSector: "Leather/Footwear", significance: "Growing sector" },
  { cluster: "Mandi Gobindgarh", district: "Fatehgarh Sahib", subSector: "Steel/Rolling Mills", significance: "Steel re-rolling cluster" },
  { cluster: "Batala", district: "Gurdaspur", subSector: "Castings/Forgings", significance: "Engineering cluster" },
  { cluster: "Mohali/SAS Nagar", district: "SAS Nagar", subSector: "IT/ITeS", significance: "Emerging; Quark City, IT City" },
  { cluster: "Rajpura", district: "Patiala", subSector: "Food Processing", significance: "Industrial focal point" },
  { cluster: "Barnala", district: "Barnala", subSector: "Textiles/Processing", significance: "Emerging" },
];

// ==========================================
// CONSTRUCTION & BRICK KILN WORKERS
// ==========================================

export const constructionWorkers = {
  registeredConstructionWorkers: 700000, // ~6-8 lakh
  brickKilnWorkers: 350000, // ~3-4 lakh (seasonal)
  brickKilnSeason: "October to June",
  migrantWorkersFromUP: 40, // percent
  migrantWorkersFromBihar: 21, // percent
  totalMigrantWorkers: 600000, // ~5-7 lakh
  bondedLabourNote: "Brick kiln workers face bonded labour conditions; seasonal migration with families",
  labourShortageCrisis:
    "Post-COVID, MSME units in Ludhiana face 20-30% labour shortage as migrants returned to home states or diversified to other destinations",
};

// ==========================================
// LARGE-SCALE INDUSTRY
// ==========================================

export const largeScaleIndustry = {
  majorUnits: ["Vardhman Textiles (Ludhiana)", "Nestle (Moga)", "PepsiCo (multiple)", "ITC (Kapurthala)", "Mahindra & Mahindra (Mohali)"],
  industrialFocalPoints: 23,
  districtsCovered: 23,
  newPolicyNote: "New industrial policy announced January 2026 with focus on MSME upgradation and AI integration",
};

// ==========================================
// GOVERNMENT EMPLOYMENT
// ==========================================

export const governmentEmployment: GovernmentEmploymentSummary = {
  departments: [
    { department: "School Education (teachers)", sanctionedPosts: 120000, approxFilled: 95000, notes: "25,000 new hires announced Mar 2026" },
    { department: "Police", sanctionedPosts: 37500, approxFilled: 30000, notes: "5,000 vacancies being filled (2026)" },
    { department: "Health & Family Welfare", sanctionedPosts: 47500, approxFilled: 27500, notes: "50%+ vacancies; 68,949 sanctioned in health + medical education, 34,949 vacant" },
    { department: "PSPCL (Electricity)", sanctionedPosts: 25000, approxFilled: 20000, notes: "5,300 vacancies in pipeline" },
    { department: "Revenue/Administration", sanctionedPosts: 15000, approxFilled: 12000, notes: "Patwaris, tehsildars, clerical" },
    { department: "Higher Education", sanctionedPosts: 10000, approxFilled: 8000, notes: "Universities and colleges" },
  ],
  totalSanctioned: "~3.5-4.0 lakh",
  totalFilled: "~2.8-3.2 lakh",
  jobsProvided36Months: 52606,
  reservationPolicyNote: "2026 cabinet approved job reservations for specific categories",
  pensionLiability: "Significant fiscal burden; 5th Punjab Pay Commission recommended 27% increase",
  electoralSignificance:
    "Govt job aspirants are a massive voting bloc; Punjab Youth Outlook Survey shows govt job is #1 preference",
};

// ==========================================
// PRIVATE SERVICES & SELF-EMPLOYMENT
// ==========================================

export const privateServiceCategories = [
  { category: "Retail/Trade", estimatedWorkers: "~8-10 lakh", notes: "Shopkeepers, traders, mandi arhtiyas" },
  { category: "Transport (trucking, taxis, buses)", estimatedWorkers: "~5-6 lakh", notes: "One of India's highest per-capita truck ownership" },
  { category: "Education (private schools/colleges)", estimatedWorkers: "~3-4 lakh", notes: "Large private school network" },
  { category: "Healthcare (private)", estimatedWorkers: "~1.5-2 lakh", notes: "Clinics, hospitals, diagnostic labs" },
  { category: "IT/ITeS", estimatedWorkers: "~0.5-1 lakh", notes: "Concentrated in Mohali; growing" },
  { category: "Hospitality/Tourism", estimatedWorkers: "~1-1.5 lakh", notes: "Amritsar (Golden Temple), religious tourism" },
  { category: "Professional Services (CA, lawyers, etc.)", estimatedWorkers: "~1-1.5 lakh", notes: "Across all districts" },
  { category: "Self-employed/Informal", estimatedWorkers: "~8-12 lakh", notes: "Large informal sector" },
];

// ==========================================
// STUDENT POPULATION
// ==========================================

export const studentPopulation = {
  institutions: [
    { institutionType: "Universities (state + central + private)", estimatedEnrollment: "~3-4 lakh" },
    { institutionType: "Colleges (arts, science, commerce)", estimatedEnrollment: "~5-6 lakh" },
    { institutionType: "ITIs/Polytechnics", estimatedEnrollment: "~1-1.5 lakh" },
    { institutionType: "Professional (engineering, medical, law)", estimatedEnrollment: "~1-2 lakh" },
    { institutionType: "School (Class 9-12)", estimatedEnrollment: "~15-18 lakh" },
  ],
  totalInEducationAge15Plus: "~25-30 lakh",
  politicalNotes: [
    "Students are not in the workforce but are a politically active demographic",
    "High overseas education aspiration; IELTS/PTE coaching industry is massive (~5,000+ centers)",
    "Student visa rejections and immigration policy changes are major political concerns",
  ],
  overseasAspirationNote: "IELTS and study abroad have become mainstream life aspirations",
};

// ==========================================
// NRI/REMITTANCE ECONOMY
// ==========================================

export const nriDiasporaByCountry = [
  { country: "Canada", estimatedPopulation: "~6-8 lakh (Punjab-origin)", keyCharacteristics: "Largest recent migration wave; student → PR pathway dominant" },
  { country: "UK", estimatedPopulation: "~5-6 lakh (Punjab-origin)", keyCharacteristics: "Historical migration (1960s-80s); Southall, Birmingham, Gravesend" },
  { country: "Australia", estimatedPopulation: "~1-2 lakh (Punjab-origin)", keyCharacteristics: "Fastest growing destination since 2015" },
  { country: "USA", estimatedPopulation: "~2-3 lakh (Punjab-origin)", keyCharacteristics: "Professionals; California, New York, Chicago" },
  { country: "Italy", estimatedPopulation: "~1-1.5 lakh (Punjab-origin)", keyCharacteristics: "Agricultural/dairy work; Doaba origin" },
  { country: "UAE/Gulf", estimatedPopulation: "~2-3 lakh (Punjab-origin)", keyCharacteristics: "Semi-skilled workers; construction, services" },
  { country: "Germany", estimatedPopulation: "~0.5-1 lakh", keyCharacteristics: "Emerging destination; skilled migration" },
  { country: "Other EU (Greece, Spain, Portugal)", estimatedPopulation: "~0.5-1 lakh", keyCharacteristics: "Agricultural labour" },
];

export const nriHouseholdConcentration = [
  { region: "Doaba", concentration: "HIGHEST (~40-45% of households have NRI connection)", keyDistricts: "Jalandhar, Hoshiarpur, Kapurthala, Nawanshahr (SBS Nagar)" },
  { region: "Malwa", concentration: "Moderate (~15-20%)", keyDistricts: "Moga, Faridkot, Muktsar, Barnala" },
  { region: "Majha", concentration: "Lower (~10-15%)", keyDistricts: "Amritsar, Gurdaspur, Tarn Taran, Pathankot" },
];

export const remittanceMetrics = {
  indiaTotalRemittances2024: 118.7, // billion USD
  punjabEstimatedShare: "~8-10% of national total = ~$9-12 billion",
  topSourceCountries: "USA (27.7%), UAE (19.2%), UK (10.8%) — national pattern; Punjab-specific: Canada, UK, Australia, Italy",
  remittanceToGSDPRatio: "Estimated 10-15% — among highest for Indian states",
  ukFastestGrowing: "UK has become the fastest-growing remittance source since 2017, overtaking Gulf nations",
  advancedEconomiesDominant: "US, UK, Canada, Australia now account for majority of India's inward remittances (surpassing Gulf since 2023-24 per RBI)",
};

export const nriSummary = {
  doabaNRIHubNote: "Doaba is known as the 'NRI Hub' of Punjab — nearly 45% of households have at least one NRI member",
  scDiasporaNote: "SC Dalit diaspora from Doaba is a unique phenomenon — SC households with NRI members have higher economic status than general category households without",
  electoralSignificance:
    "NRI issues — immigration policy, student visa rules, NRI property disputes, emigration facilitation — are decisive in 15-20 Doaba seats and 10-15 Malwa seats. Any party seen as 'pro-NRI' gains advantage.",
};

// ==========================================
// OCCUPATION-VOTER PRIORITY MAPPING
// ==========================================

export const occupationVoterMapping: OccupationVoterMapping[] = [
  { occupationCategory: "Large/medium farmers (>4 Ha)", estimatedVoterBase: "~12-15% voters", topPriorityIssues: ["MSP", "procurement", "canal water", "power subsidy", "debt relief"] },
  { occupationCategory: "Small/marginal farmers (<2 Ha)", estimatedVoterBase: "~15-18% voters", topPriorityIssues: ["MSP", "input costs", "loan waiver", "insurance", "diversification"] },
  { occupationCategory: "Tenant farmers", estimatedVoterBase: "~8-10% voters", topPriorityIssues: ["Tenancy rights", "credit access", "crop insurance", "lease law"] },
  { occupationCategory: "Agricultural labourers", estimatedVoterBase: "~18-20% voters", topPriorityIssues: ["Minimum wage", "MGNREGA days", "housing", "SC scholarships", "alcohol/drugs"] },
  { occupationCategory: "MSME/industrial workers", estimatedVoterBase: "~10-12% voters", topPriorityIssues: ["Jobs", "skill training", "factory conditions", "labour rights"] },
  { occupationCategory: "Govt job aspirants/unemployed youth", estimatedVoterBase: "~10-12% voters", topPriorityIssues: ["Government jobs", "unemployment allowance", "exams", "reservation"] },
  { occupationCategory: "Government employees", estimatedVoterBase: "~5-6% voters", topPriorityIssues: ["Pay commission", "pension", "transfer policy", "DA/DR"] },
  { occupationCategory: "Traders/business", estimatedVoterBase: "~8-10% voters", topPriorityIssues: ["GST simplification", "industrial policy", "electricity rates", "law & order"] },
  { occupationCategory: "Transport operators", estimatedVoterBase: "~3-4% voters", topPriorityIssues: ["Fuel prices", "toll taxes", "road conditions", "overloading rules"] },
  { occupationCategory: "NRI households", estimatedVoterBase: "~8-10% voters (influential)", topPriorityIssues: ["Immigration policy", "NRI property courts", "emigration ease", "dual voting"] },
  { occupationCategory: "Students (18-22)", estimatedVoterBase: "~5-8% voters", topPriorityIssues: ["Jobs", "education quality", "IELTS costs", "drug rehabilitation"] },
];

// ==========================================
// DATA GAPS
// ==========================================

export const dataGaps = [
  { item: "Agriculture Census 2021-22", description: "Full Punjab tables not yet released — will update landholding fragmentation trends" },
  { item: "Census 2021", description: "Delayed indefinitely; occupational data still relies on 2011 Census" },
  { item: "PLFS Punjab-specific sectoral breakdown", description: "Available but requires MoSPI portal access for latest year district-level data" },
  { item: "MSME district-wise employment", description: "Udyam portal has registration data but employment data is self-reported and incomplete" },
  { item: "NRI population by district", description: "No official systematic count; estimates range widely (academic studies vs govt figures)" },
  { item: "Informal sector workers", description: "Largest data gap — no comprehensive survey since NSS 68th Round (2011-12)" },
  { item: "Migrant worker count", description: "Post-COVID migration patterns need fresh survey; brick kiln seasonal data outdated" },
];

// ==========================================
// COMPLETE OCCUPATION REPORT
// ==========================================

export const occupationReport: OccupationReport = {
  reportDate: "19 May 2026",
  dataCurrency: "Census 2011 baseline, Agriculture Census 2015-16, PLFS 2023-24, MSME/Udyam 2023-24",
  status: "PARTIAL — Agriculture Census 2021-22 results awaited for updated landholding data",
  workforceOverview,
  landHoldings: {
    sizeClasses: landHoldingSizeClasses,
    summary: landHoldingSummary,
  },
  cultivatorLabourer: cultivatorLabourerSummary,
  tenancy: tenancyData,
  crops: cropDistributionData,
  msme: msmeMetrics,
  industrialClusters,
  construction: constructionWorkers,
  largeIndustry: largeScaleIndustry,
  governmentEmployment,
  privateServices: privateServiceCategories,
  students: studentPopulation,
  nri: {
    diasporaByCountry: nriDiasporaByCountry,
    householdConcentration: nriHouseholdConcentration,
    remittanceMetrics,
    ...nriSummary,
  },
  occupationVoterMapping,
  dataGaps: { gaps: dataGaps, totalGaps: dataGaps.length },
};

// ==========================================
// VULNERABLE OCCUPATIONS & UNEMPLOYMENT DATA
// (from occupation-vulnerable.md - PLFS 2025)
// ==========================================

export const overallUnemployment = {
  overall: { metric: "Overall unemployment (15+ age)", punjab: 6.7, national: 5.3 },
  rural: { metric: "Rural unemployment", punjab: 7.4, national: 4.2 },
  urban: { metric: "Urban unemployment", punjab: 5.8, national: 6.7 },
  youth1529: { metric: "Youth unemployment (15-29)", punjab: 17.0, national: 9.9 },
  ruralYouth: { metric: "Rural youth (15-29)", punjab: 18.7, national: 8.3 },
  urbanYouth: { metric: "Urban youth (15-29)", punjab: 14.5, national: 13.6 },
};

export const educatedUnemployment = [
  { educationLevel: "Not literate", unemploymentRate: 0.8 },
  { educationLevel: "Literate & up to primary", unemploymentRate: 1.0 },
  { educationLevel: "Middle", unemploymentRate: 2.6 },
  { educationLevel: "Secondary", unemploymentRate: 2.8 },
  { educationLevel: "Higher secondary", unemploymentRate: 13.8 },
  { educationLevel: "Diploma/certificate", unemploymentRate: 8.9 },
  { educationLevel: "Graduate", unemploymentRate: 11.6 },
  { educationLevel: "Postgraduate & above", unemploymentRate: 9.4 },
  { educationLevel: "Secondary & above (aggregate)", unemploymentRate: 9.3 },
];

export const youthUnemploymentByGender = [
  { category: "Rural", male: 14.7, female: 29.9, person: 18.7 },
  { category: "Urban", male: 12.1, female: 23.7, person: 14.5 },
  { category: "Rural+Urban", male: 13.6, female: 27.7, person: 17.0 },
];

export const unemploymentBureauData = {
  registeredApplicants: 122842,
  date: "September 2025",
  unskilledPercent: 58,
  skilledPercent: 42,
  keyMismatch: "Mismatch between available jobs and aspirations and qualifications of applicants",
};

export const distressMigration = {
  farmersNotWantingChildrenInAgriculture: 75,
  studySource: "Prof Ghuman study, 2025",
  pushFactors: [
    "Unemployment",
    "Corruption",
    "Drug addiction fear",
    "Social insecurity",
    "Bad politico-administrative system",
  ],
  investmentGSDPRatio: "Roughly half the national average — chronic investment deficiency",
  annualGrowth2014to2023: 4.62,
  nationalAverageGrowth: 5.67,
  industrialUnitsShutDown: 18700,
  shutDownPeriod: "2007-2014",
  amritsarShareOfShutDowns: 43,
};

export const disguisedUnemployment = {
  agricultureEmploymentShare: 24.6,
  agricultureGSDPShare: 23.2,
  mechanizationImpact: "Farm mechanization has created surplus labour on family farms",
  historicalEmploymentDrop: "Agricultural employment dropped from 57.3% of GSDP (1970-71) to 23.2% (2022-23)",
  estimatedRange: "Academic estimates for Indian agriculture typically range 15-25%. Punjab's high mechanization likely pushes this higher",
  verificationNeeded: "Exact disguised unemployment rate for Punjab not available in recent official data",
};

export const discouragedWorkers = {
  labourForceParticipationRate: 47.0,
  nationalLFPR: 46.0,
  workerPopulationRatio: 39,
  nationalWPR: 41.4,
  gap: "Gap between LFPR (47%) and WPR (39%) means many youth are seeking work but not finding it",
  neetRateNote: "State-specific NEET rate for Punjab not found. ILO estimates India's overall youth NEET at ~20%. Punjab likely exceeds this",
};

// ==========================================
// NON-WORKING POPULATION
// ==========================================

export const nonWorkingPopulation = {
  homemakers: {
    femaleLFPRContext: "Female LFPR for 15-29 age group is significantly depressed by the 27.7% female youth unemployment rate",
    estimate: "Census 2011 showed ~55-60% of Punjabi women in the non-worker category, majority as homemakers",
  },
  pensioners: {
    population60Plus: "6.8% of population is 60+ (Census 2011)",
    projected2026: "~8-9%",
    pensionBurden: "57.5% of Punjab's revenue consumed by salaries, pensions, and subsidies (NITI Aayog 2025)",
  },
  disabled: {
    census2011Percent: "~2.2%",
    census2011Persons: "~6 lakh persons",
    drugAddictionImpact: "Drug addiction crisis creates a large population of chronically ill/recovering individuals outside the workforce",
  },
};

// ==========================================
// VULNERABLE OCCUPATIONS
// ==========================================

export const vulnerableOccupations: VulnerableOccupation[] = [
  {
    category: "Domestic Workers",
    description: "Significant population in Ludhiana, Amritsar, Jalandhar, and Mohali urban areas",
    estimate: "Part of India's 4.75 million domestic workers nationally (ILO estimates)",
    demographics: "Overwhelmingly women, predominantly from Dalit/SC communities and migrant labour from UP/Bihar",
    verificationNeeded: "Punjab-specific count not available in recent data",
  },
  {
    category: "Child Labour",
    description: "Persists in agriculture, brick kilns, and domestic work",
    estimate: "Census 2011: ~73,714 child workers in Punjab (age 5-14)",
    demographics: "Rural Punjab shows prevalence in agricultural operations, brick kiln families, dhaba/tea stall work, and domestic service",
    verificationNeeded: "Current child labour estimates specific to Punjab post-2011 not found",
  },
  {
    category: "Sex Workers & Beggars",
    description: "Urban centres (Ludhiana, Amritsar, Jalandhar) have documented red-light areas and begging populations",
    estimate: "No reliable current estimates found",
    verificationNeeded: "No reliable current estimates for Punjab found in research — typically undercounted in official surveys",
  },
  {
    category: "Ragpickers & Waste Workers",
    description: "Predominantly from migrant communities (UP, Bihar) and Dalit castes",
    estimate: "Urban cities generate significant waste picking employment",
    verificationNeeded: "Punjab-specific count not available",
  },
];

// ==========================================
// BONDED LABOUR
// ==========================================

export const bondedLabour: BondedLabourData = {
  sector: "Brick Kiln Industry",
  description: "Families trapped in debt bondage across thousands of kilns in Malwa and Doaba regions",
  affectedCommunities: "Dalit/SC communities disproportionately affected",
  legalFramework: "Bonded Labour System (Abolition) Act 1976 — enforcement remains weak",
  indiaTotalEstimate: "~8 million bonded labourers (Walk Free Foundation/Global Slavery Index)",
  punjabConcentration: "Brick kilns in Malwa and Doaba regions are well-documented sites",
  verificationNeeded: "State-specific bonded labour survey data not found",
};

// ==========================================
// RELIGIOUS OCCUPATIONS
// ==========================================

export const sgpcData: SGPCData = {
  totalStaffa: 11000,
  goldenTempleStaff: 2800,
  managedRegions: ["Punjab", "Haryana", "Himachal Pradesh", "Chandigarh"],
  keyFunctionaries: ["Granthi (Reader/custodian of Guru Granth Sahib)", "Ragi (Devotional hymn singer)", "Kathavachak (Religious preacher)", "Dhadhi (Ballad singers)", "Sewadar (Volunteer/attendant)"],
};

export const deraReligiousWorkers = [
  {
    deraType: "Dera Sacha Sauda (Sirsa)",
    description: "Bordering Punjab, has millions of followers and thousands of full-time workers",
    followerCount: "Millions",
    employmentScale: "Thousands of full-time sewadars",
    verificationNeeded: "No comprehensive count available",
  },
  {
    deraType: "Radha Soami Satsang",
    description: "Major dera network in Punjab",
    followerCount: "Large following",
    employmentScale: "Significant full-time sewadar employment",
    verificationNeeded: "No comprehensive count available",
  },
  {
    deraType: "Namdhari dera",
    description: "Sectarian religious centre",
    followerCount: "Moderate",
    employmentScale: "Moderate employment",
    verificationNeeded: "No comprehensive count available",
  },
  {
    deraType: "Nihang dals",
    description: "Sikh religious armed groups with religious centres",
    followerCount: "Significant",
    employmentScale: "Moderate",
    verificationNeeded: "No comprehensive count available",
  },
  {
    deraType: "Ravidasia deras",
    description: "Ravidas community religious centres",
    followerCount: "Significant in Doaba region",
    employmentScale: "Moderate",
    verificationNeeded: "No comprehensive count available",
  },
];

export const otherReligiousWorkers: ReligiousOccupation[] = [
  { type: "Hindu Pujaris/Pandits", count: "Significant population", details: "Serve in temples and perform domestic rituals. Significant in Doaba and urban centres", keyRegions: ["Doaba", "Urban centres"] },
  { type: "Muslim Imams/Maulvis", count: "Small", details: "Punjab's Muslim population is small (~1.5-2% per Census 2011)", keyRegions: ["Malerkotla", "Border areas"] },
  { type: "Christian Pastors", count: "Growing", details: "Census 2011: ~1.26% Christian population. Growth among Dalit/SC communities has increased demand for pastoral workers", keyRegions: ["Doaba region"] },
];

// ==========================================
// VULNERABLE OCCUPATIONS REPORT
// ==========================================

export const vulnerableOccupationsReport: VulnerableOccupationsReport = {
  reportDate: "19 May 2026",
  dataSource: "PLFS 2025 (Jan-Dec 2025), Punjab Economic Survey 2025-26, Times of India, The Hindu, Tribune India, Census 2011, academic studies",
  overallUnemployment,
  educatedUnemployment,
  youthUnemploymentByGender,
  unemploymentBureau: unemploymentBureauData,
  distressMigration,
  disguisedUnemployment,
  discouragedWorkers,
  nonWorkingPopulation,
  vulnerableOccupations,
  bondedLabour,
  religiousOccupations: {
    sgpc: sgpcData,
    nonSGPCGurdwaraEstimate:
      "If Punjab has ~15,000-20,000 gurdwaras (including village-level), total religious worker population in Sikh institutions is likely 20,000-30,000",
    totalReligiousWorkersEstimate: "20,000-30,000",
    deraWorkers: deraReligiousWorkers,
    otherReligiousWorkers,
  },
  politicalSignificance: {
    educatedUnemployedYouth:
      "17% youth unemployment = hundreds of thousands of frustrated young voters. Graduate unemployment of 11.6-20.6% = most politically aware and mobilizable segment. AAP promised 'Ghar Ghar Naukri' — failure to deliver is Congress's primary opening",
    femaleYouth:
      "Historically under-mobilized but potentially transformative voting bloc. Congress can target with employment guarantee + skill training + safety platform",
    ruralUnemployed:
      "Higher than urban (7.4% vs 5.8%) — contradicts narrative that cities are the job crisis. Landless Dalit labourers doubly hit: seasonal unemployment + caste discrimination",
    vulnerableInformalWorkers:
      "Brick kiln bonded labourers (predominantly Dalit/SC) — politically organized through Dalit parties and unions. Dera followers: significant voting blocs controlled by dera heads",
    religiousWorkers:
      "SGPC/religious workers are influential opinion-makers in every village. Granthi at village gurdwara = community leader whose views shape voting. Congress needs to avoid SGPC/Akali Dal alignment perception while reaching granthis as community influencers",
  },
  dataGaps: [
    { item: "District-wise unemployment for all 117 constituencies", description: "Exact district-wise unemployment for all 117 constituencies" },
    { item: "NEET rate for Punjab youth", description: "State-specific NEET rate for Punjab youth not found" },
    { item: "Bonded labour count in brick kilns by district", description: "State-specific bonded labour survey data not found" },
    { item: "Gurdwaras and religious workers by constituency", description: "No official census of gurdwara count or religious workers" },
    { item: "Dera-wise follower count and sewadar employment", description: "No comprehensive count of dera-employed religious workers" },
    { item: "Female non-participation rate by district and caste", description: "Female non-participation rate by district and caste not found" },
  ],
};

// ==========================================
// CHART DATA & DERIVED METRICS
// ==========================================

export const unemploymentByEducationData = educatedUnemployment.map((item) => ({
  education: item.educationLevel,
  rate: item.unemploymentRate,
  color: item.unemploymentRate > 10 ? "#EF4444" : item.unemploymentRate > 5 ? "#F59E0B" : "#22C55E",
}));

export const youthUnemploymentGenderData = youthUnemploymentByGender.map((item) => ({
  category: item.category,
  male: item.male,
  female: item.female,
  person: item.person,
}));

export const landHoldingDistributionData = landHoldingSizeClasses.map((item) => ({
  sizeClass: item.sizeClass,
  holdings: item.numberOfHoldings,
  area: item.areaThousandHa,
  avgSize: item.averageSizeHa,
  percentOfTotal: (item.numberOfHoldings / 1026472) * 100,
}));

export const msmeSizeDistributionData = [
  { size: "Micro", percent: 85, color: "#3B82F6" },
  { size: "Small", percent: 13, color: "#8B5CF6" },
  { size: "Medium", percent: 2, color: "#22C55E" },
];

export const nriDestinationData = nriDiasporaByCountry.map((item, idx) => ({
  country: item.country,
  estimate: item.estimatedPopulation,
  color: ["#EF4444", "#3B82F6", "#22C55E", "#F59E0B", "#8B5CF6", "#EC4899", "#14B8A6", "#6366F1"][idx % 8],
}));

// Derived metrics for quick access
export const occupationMetrics = {
  // Employment
  agricultureWorkforceShare: 42,
  industryWorkforceShare: 24,
  servicesWorkforceShare: 34,

  // Land holdings
  totalLandHoldings: 1026472,
  averageHoldingSizeHa: 4.15,
  marginalSmallHoldingsPercent: 39,

  // Unemployment
  overallUnemploymentRate: 6.7,
  youthUnemploymentRate: 17.0,
  femaleYouthUnemploymentRate: 27.7,
  educatedYouthUnemployment: 11.6, // Graduate

  // MSME
  totalMSMERegistrations: 320000,
  msmeEmployment: 4086000,

  // Government
  governmentEmployeesTotal: "~3.5-4.0 lakh",
  governmentJobsProvided36Months: 52606,

  // NRI
  nriDiasporaTotal: "~3-4 million",
  remittanceEstimate: "$9-12 billion annually",
  doabaNRIHouseholdConcentration: "40-45%",

  // Key voter blocs
  agriculturalLabourerVoterBase: "18-20%",
  govtJobAspirantVoterBase: "10-12%",
  tenantFarmerVoterBase: "8-10%",
  nriHouseholdVoterBase: "8-10% (influential)",
};

// Priority issues mapping
export const voterPriorityIssues = {
  farmers: ["MSP", "procurement", "canal water", "power subsidy", "debt relief", "input costs", "loan waiver", "insurance"],
  agriculturalLabourers: ["Minimum wage", "MGNREGA days", "housing", "SC scholarships", "alcohol/drugs"],
  youth: ["Government jobs", "unemployment allowance", "exams", "reservation", "skill training"],
  nri: ["Immigration policy", "NRI property courts", "emigration ease", "dual voting"],
  women: ["Employment guarantee", "skill training", "safety", "education quality"],
};
