// Punjab Occupation Structure Types
// Derived from: MP1-foundational/demographics/occupation-full.md
// Data Currency: Census 2011 baseline, Agriculture Census 2015-16, PLFS 2023-24, MSME/Udyam 2023-24

// ==========================================
// WORKFORCE SECTORAL DISTRIBUTION
// ==========================================

export interface SectorDistribution {
  sector: string;
  sharePercent: number;
  notes: string;
}

export interface WorkforceOverview {
  sectors: SectorDistribution[];
  unemploymentRate: number;
  nationalUnemploymentRate: number;
  labourForceParticipation: string;
  dataSource: string;
  electoralSignificance: string;
}

// ==========================================
// LAND HOLDINGS (Agriculture Census 2015-16)
// ==========================================

export interface LandHoldingSizeClass {
  sizeClass: string;
  sizeRangeHectares: string;
  numberOfHoldings: number;
  areaThousandHa: number;
  averageSizeHa: number;
}

export interface LandHoldingSummary {
  totalHoldings: number;
  totalAreaThousandHa: number;
  averageSizeHa: number;
  stateAverageNationalComparison: string;
  marginalSmallHoldingsPercentOfTotal: number;
  marginalSmallHoldingsPercentOfArea: number;
  mediumLargeHoldingsPercentOfTotal: number;
  mediumLargeHoldingsPercentOfArea: number;
  largestCategoryByNumber: string;
  averageSizeDecline: string;
  dataStatus: string;
}

export interface CultivatorvsLabourer {
  category: string;
  persons: string;
  shareOfTotalWorkers: string;
}

export interface CultivatorLabourerSummary {
  cultivators: CultivatorvsLabourer;
  agriculturalLabourers: CultivatorvsLabourer;
  totalAgriculturalWorkers: CultivatorvsLabourer;
  labourerToCultivatorRatio: string;
  scCommunityPercentage: string;
  migrantSeasonalWorkers: string;
}

export interface TenancyData {
  leasedAreaPercent: number;
  affectedFarmers: string;
  leaseRateRange: string;
  highestConcentration: string;
  electoralHook: string;
}

export interface CropDistribution {
  crop: string;
  areaLakhHa: number;
  cultivatorHouseholds: string;
  notes?: string;
}

// ==========================================
// INDUSTRY: MSME, MANUFACTURING & CONSTRUCTION
// ==========================================

export interface MSMEMetrics {
  totalMSMERegistrations: number;
  udyogAadhaarRegistrations: number;
  msmeEmployment: number;
  microPercent: number;
  smallPercent: number;
  mediumPercent: number;
}

export interface IndustrialCluster {
  cluster: string;
  district: string;
  subSector: string;
  significance: string;
}

export interface ConstructionWorkers {
  registeredConstructionWorkers: number;
  brickKilnWorkers: number;
  brickKilnSeason: string;
  migrantWorkersFromUP: number;
  migrantWorkersFromBihar: number;
  totalMigrantWorkers: number;
}

export interface LargeScaleIndustry {
  majorUnits: string[];
  industrialFocalPoints: number;
  districtsCovered: number;
  newPolicyNote: string;
}

// ==========================================
// SERVICES: GOVERNMENT, PRIVATE & SELF-EMPLOYED
// ==========================================

export interface GovernmentDepartment {
  department: string;
  sanctionedPosts: number;
  approxFilled: number;
  notes: string;
}

export interface GovernmentEmploymentSummary {
  departments: GovernmentDepartment[];
  totalSanctioned: string;
  totalFilled: string;
  jobsProvided36Months: number;
  reservationPolicyNote: string;
  pensionLiability: string;
  electoralSignificance: string;
}

export interface PrivateServiceCategory {
  category: string;
  estimatedWorkers: string;
  notes: string;
}

export interface StudentEnrollment {
  institutionType: string;
  estimatedEnrollment: string;
}

export interface StudentPopulationSummary {
  institutions: StudentEnrollment[];
  totalInEducationAge15Plus: string;
  politicalNotes: string[];
  overseasAspirationNote: string;
}

// ==========================================
// NRI/REMITTANCE ECONOMY
// ==========================================

export interface NRICountryProfile {
  country: string;
  estimatedPopulation: string;
  keyCharacteristics: string;
}

export interface NRIHouseholdConcentration {
  region: string;
  concentration: string;
  keyDistricts: string;
}

export interface RemittanceMetrics {
  indiaTotalRemittances2024: number;
  punjabEstimatedShare: string;
  topSourceCountries: string;
  remittanceToGSDPRatio: string;
}

export interface NRISummary {
  diasporaByCountry: NRICountryProfile[];
  householdConcentration: NRIHouseholdConcentration[];
  remittanceMetrics: RemittanceMetrics;
  doabaNRIHubNote: string;
  electoralSignificance: string;
}

// ==========================================
// OCCUPATION-VOTER PRIORITY MAPPING
// ==========================================

export interface OccupationVoterMapping {
  occupationCategory: string;
  estimatedVoterBase: string;
  topPriorityIssues: string[];
}

// ==========================================
// DATA GAPS & VERIFICATION
// ==========================================

export interface DataGap {
  item: string;
  description: string;
}

export interface DataGapsSummary {
  gaps: DataGap[];
  totalGaps: number;
}

// ==========================================
// COMPLETE OCCUPATION REPORT
// ==========================================

export interface OccupationReport {
  reportDate: string;
  dataCurrency: string;
  status: string;
  workforceOverview: WorkforceOverview;
  landHoldings: {
    sizeClasses: LandHoldingSizeClass[];
    summary: LandHoldingSummary;
  };
  cultivatorLabourer: CultivatorLabourerSummary;
  tenancy: TenancyData;
  crops: CropDistribution[];
  msme: MSMEMetrics;
  industrialClusters: IndustrialCluster[];
  construction: ConstructionWorkers;
  largeIndustry: LargeScaleIndustry;
  governmentEmployment: GovernmentEmploymentSummary;
  privateServices: PrivateServiceCategory[];
  students: StudentPopulationSummary;
  nri: NRISummary;
  occupationVoterMapping: OccupationVoterMapping[];
  dataGaps: DataGapsSummary;
}

// ==========================================
// VULNERABLE OCCUPATIONS & UNEMPLOYMENT
// (from occupation-vulnerable.md - PLFS 2025)
// ==========================================

export interface UnemploymentRate {
  metric: string;
  punjab: number;
  national: number;
}

export interface OverallUnemployment {
  overall: UnemploymentRate;
  rural: UnemploymentRate;
  urban: UnemploymentRate;
  youth1529: UnemploymentRate;
  ruralYouth: UnemploymentRate;
  urbanYouth: UnemploymentRate;
}

export interface EducatedUnemployment {
  educationLevel: string;
  unemploymentRate: number;
}

export interface YouthUnemploymentByGender {
  category: string;
  male: number;
  female: number;
  person: number;
}

export interface UnemploymentBureauData {
  registeredApplicants: number;
  date: string;
  unskilledPercent: number;
  skilledPercent: number;
  keyMismatch: string;
}

export interface DistressMigration {
  farmersNotWantingChildrenInAgriculture: number;
  studySource: string;
  pushFactors: string[];
  investmentGSDPRatio: string;
  annualGrowth2014to2023: number;
  nationalAverageGrowth: number;
  industrialUnitsShutDown: number;
  shutDownPeriod: string;
  amritsarShareOfShutDowns: number;
}

export interface DisguisedUnemployment {
  agricultureEmploymentShare: number;
  agricultureGSDPShare: number;
  mechanizationImpact: string;
  historicalEmploymentDrop: string;
  estimatedRange: string;
  verificationNeeded: string;
}

export interface DiscouragedWorkers {
  labourForceParticipationRate: number;
  nationalLFPR: number;
  workerPopulationRatio: number;
  nationalWPR: number;
  gap: string;
  neetRateNote: string;
}

export interface NonWorkingPopulation {
  homemakers: {
    femaleLFPRContext: string;
    estimate: string;
  };
  pensioners: {
    population60Plus: string;
    projected2026: string;
    pensionBurden: string;
  };
  disabled: {
    census2011Percent: string;
    census2011Persons: string;
    drugAddictionImpact: string;
  };
}

export interface VulnerableOccupation {
  category: string;
  description: string;
  estimate: string;
  keyLocations?: string[];
  demographics?: string;
  verificationNeeded?: string;
}

export interface BondedLabourData {
  sector: string;
  description: string;
  affectedCommunities: string;
  legalFramework: string;
  indiaTotalEstimate: string;
  punjabConcentration: string;
  verificationNeeded?: string;
}

export interface ReligiousOccupation {
  type: string;
  count: string;
  details?: string;
  keyRegions?: string[];
}

export interface SGPCData {
  totalStaffa: number;
  goldenTempleStaff: number;
  managedRegions: string[];
  keyFunctionaries: string[];
}

export interface DeraReligiousWorkers {
  deraType: string;
  description: string;
  followerCount: string;
  employmentScale: string;
  verificationNeeded?: string;
}

export interface VulnerableOccupationsReport {
  reportDate: string;
  dataSource: string;
  overallUnemployment: OverallUnemployment;
  educatedUnemployment: EducatedUnemployment[];
  youthUnemploymentByGender: YouthUnemploymentByGender[];
  unemploymentBureau: UnemploymentBureauData;
  distressMigration: DistressMigration;
  disguisedUnemployment: DisguisedUnemployment;
  discouragedWorkers: DiscouragedWorkers;
  nonWorkingPopulation: NonWorkingPopulation;
  vulnerableOccupations: VulnerableOccupation[];
  bondedLabour: BondedLabourData;
  religiousOccupations: {
    sgpc: SGPCData;
    nonSGPCGurdwaraEstimate: string;
    totalReligiousWorkersEstimate: string;
    deraWorkers: DeraReligiousWorkers[];
    otherReligiousWorkers: ReligiousOccupation[];
  };
  politicalSignificance: {
    educatedUnemployedYouth: string;
    femaleYouth: string;
    ruralUnemployed: string;
    vulnerableInformalWorkers: string;
    religiousWorkers: string;
  };
  dataGaps: DataGap[];
}
