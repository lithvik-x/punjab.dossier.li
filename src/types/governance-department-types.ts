// Governance - AAP Department Scorecard Types for Punjab 2022-2026
// Derived from: research-M2/MP1-foundational/governance/department-scorecard.md
// Research Date: 19 May 2026 | Data Currency: March-April 2026

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type Grade = "A+" | "A" | "A-" | "B+" | "B" | "B-" | "C+" | "C" | "C-" | "D+" | "D" | "D-" | "F";
export type AssessmentStatus = "DELIVERED" | "LARGELY DELIVERED" | "PARTIAL" | "PARTIAL (vacancies remain)" | "IN PROGRESS" | "IMPROVED" | "FAILED" | "NOT DELIVERED" | "NOT FULLY DELIVERED" | "UNVERIFIED" | "UNVERIFIED (proposals, not realized investment)" | "CONTROVERSIAL" | "NEGATIVE (not AAP's fault)";
export type SatisfactionLevel = "HIGH" | "MODERATE-HIGH" | "MODERATE" | "LOW-MODERATE" | "LOW" | "NOT_FOUND";
export type RegionName = "Malwa" | "Majha" | "Doaba" | "PUADH";

// ==========================================
// METADATA
// ==========================================

export interface ScorecardMetadata {
  researchDate: string;
  sourcesConsulted: number;
  dataFreshness: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  aggregateGrade: Grade;
  aggregateScore: number; // 6.94 out of 10
}

// ==========================================
// OVERALL SUMMARY
// ==========================================

export interface GradeDistribution {
  category: "Grade A/A-" | "Grade B/B-" | "Grade C/C-" | "Grade D/F";
  departments: string[];
}

export interface OverallSummary {
  aggregateGrade: Grade;
  aggregateScore: number;
  topPerformers: string[];
  worstPerformers: string[];
  gradeDistribution: GradeDistribution[];
  congressMessaging: string;
}

// ==========================================
// DEPARTMENT METRICS
// ==========================================

export interface DepartmentMetric {
  promise: string;
  achieved: string;
  assessment: AssessmentStatus;
}

export interface DepartmentMetrics {
  [metric: string]: DepartmentMetric;
}

export interface DepartmentBudget {
  allocation?: string;
  utilization?: string;
  note?: string;
}

export interface DepartmentData {
  id: number;
  name: string;
  grade: Grade;
  metrics: DepartmentMetric[];
  budget?: DepartmentBudget;
  publicSatisfaction: SatisfactionLevel;
  congressCounterNarrative: string;
}

// ==========================================
// POWER & ELECTRICITY (Grade A-)
// ==========================================

export interface PowerElectricityData {
  id: 1;
  name: "Power & Electricity";
  grade: "A-";
  metrics: {
    freeElectricity: DepartmentMetric;
    daytimePowerForFarmers: DepartmentMetric;
    pspclProfitability: DepartmentMetric;
    powerInfrastructure: DepartmentMetric;
    tariffReduction: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
    utilization: string; // NOT_FOUND
  };
  publicSatisfaction: "HIGH";
  keyStats: {
    householdsZeroBills: number; // percentage (90-91%)
    peakSummerCoverage: number; // percentage (75-80%)
    tubewellPowerShare: number; // percentage (67% of agriculture budget)
    pspclProfitYears: number; // 3 consecutive years
    transmissionOverhaul: number; // Rs 5,000 crore
    modernizationsPlan: number; // Rs 5,000 crore (Oct 2025)
  };
  congressCounterNarrative: string;
}

// ==========================================
// HEALTH & FAMILY WELFARE (Grade B+)
// ==========================================

export interface HealthWelfareData {
  id: 2;
  name: "Health & Family Welfare";
  grade: "B+";
  metrics: {
    aamAadmiClinics: DepartmentMetric;
    freeDiagnostics: DepartmentMetric;
    healthInsurance: DepartmentMetric;
    doctorRecruitment: DepartmentMetric;
    medicalColleges: DepartmentMetric;
    farishteyScheme: DepartmentMetric;
    aimsPunjab: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
    note?: string; // embedded in Rs 2.36 lakh crore budget 2025-26
  };
  publicSatisfaction: "MODERATE-HIGH";
  keyStats: {
    clinicsOperational: number;
    targetHigher: boolean;
    opdVisitsCumulative: number; // 5+ crore
    diagnosticTestsFree: number;
    healthInsuranceCoverage: number; // Rs 10 lakh/family
    doctorsRecruited4Years: number;
    medicalCollegesUnderConstruction: number;
    mbbsSeatsToAdd: number;
    farishteyBeneficiaries: number;
  };
  clinicFundingDisputes: string;
  congressCounterNarrative: string;
}

// ==========================================
// HOME / POLICE / LAW & ORDER (Grade D+)
// ==========================================

export interface HomePoliceData {
  id: 3;
  name: "Home (Police / Law & Order)";
  grade: "D+";
  metrics: {
    endGangsterCulture: DepartmentMetric;
    drugElimination: DepartmentMetric;
    bulldozerJustice: DepartmentMetric;
    policeReform: DepartmentMetric;
    antiTerror: DepartmentMetric;
    convictionRate: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
  };
  publicSatisfaction: "LOW";
  keyStats: {
    gangstersArrested2025: number;
    grenadeAttacksIncreased: boolean;
    extortionIncreased: boolean;
    heroinRecovered2025: number; // kg (2,021)
    recordBusts: boolean;
    threatPersists: boolean;
  };
  keyFailures: string[];
  congressCounterNarrative: string;
}

// ==========================================
// EDUCATION (Grade B)
// ==========================================

export interface EducationData {
  id: 4;
  name: "Education";
  grade: "B";
  metrics: {
    improveGovernmentSchools: DepartmentMetric;
    teacherRecruitment: DepartmentMetric;
    teacherTraining: DepartmentMetric;
    competitiveExams: DepartmentMetric;
    budgetIncrease: DepartmentMetric;
    universities: DepartmentMetric;
  };
  budget: {
    allocation: number; // Rs ~16,000 crore (2025-26)
    utilization: string; // NOT_FOUND
  };
  publicSatisfaction: "MODERATE-HIGH";
  keyStats: {
    nasRanking: string; // #1 in National Achievement Survey
    smartClassrooms: number;
    computerLabs: number;
    desksSupplied: number;
    teachersRecruited: number;
    contractualTeachersRegularised: boolean;
    teacherTrainingCountries: string[];
    jeeMainQualifiers2026: number;
    neetQualifiers2026: number;
    budgetIncrease4Years: number; // 52%
  };
  congressCounterNarrative: string;
}

// ==========================================
// AGRICULTURE (Grade D+)
// ==========================================

export interface AgricultureData {
  id: 5;
  name: "Agriculture";
  grade: "D+";
  metrics: {
    mspForAllCrops: DepartmentMetric;
    debtWaiver: DepartmentMetric;
    cropDiversification: DepartmentMetric;
    stubbleBurning: DepartmentMetric;
    farmerNegotiations: DepartmentMetric;
    canalIrrigation: DepartmentMetric;
  };
  budget: {
    allocation2024_25: number; // Rs 13,784 crore
    allocation2023_24: number; // Rs 13,888 crore
    tubewellPowerShare: number; // 67%
  };
  publicSatisfaction: "LOW";
  keyStats: {
    mspDelivery: string; // NOT DELIVERED
    debtWaiverStatus: string; // No new scheme
    cottonArea2023: number; // lakh hectares (1.75 - 13-year low)
    cropDiversificationStatus: string; // FAILED
    stubbleBurningReduction2023: number; // 26%
    stubbleBurningAreaIncrease: number; // 25%
    canalWaterExtension: string; // Fazilka-Abohar belt
  };
  congressCounterNarrative: string;
}

// ==========================================
// FINANCE & PLANNING (Grade B-)
// ==========================================

export interface FinancePlanningData {
  id: 6;
  name: "Finance & Planning";
  grade: "B-";
  metrics: {
    debtManagement: DepartmentMetric;
    revenueGrowth: DepartmentMetric;
    exciseRevenue: DepartmentMetric;
    gstCollection: DepartmentMetric;
    stampDuty: DepartmentMetric;
    capexSpending: DepartmentMetric;
    centralSupportDecline: DepartmentMetric;
  };
  budget: {
    total2025_26: number; // Rs 2.36 lakh crore
    theme: string; // "Badalda Punjab"
  };
  publicSatisfaction: "NOT_FOUND";
  keyStats: {
    debtToGSDPBefore: number; // 48.25%
    debtToGSDPAfter: number; // 44.47%
    debtReduction: number; // 4-point drop
    outstandingDebt: number; // Rs 3+ lakh crore
    ownTaxRevenue2021_22: number; // Rs 37,327 crore
    ownTaxRevenue2024_25: number; // Rs 57,919 crore
    taxRevenueGrowth: number; // percentage
    exciseRevenue2021_22: number; // Rs 6,157 crore
    exciseRevenue2025_26: number; // Rs 11,500 crore (projected)
    exciseGrowth: number; // 86.77%
    gst2021_22: number; // Rs 15,542 crore
    gst2025_26: number; // Rs 26,500 crore (projected)
    gstGrowth: number; // 70.5%
    stampDutyAnnualAvg: number; // Rs 5,091 crore
    stampDutyCongressEra: number; // Rs 2,494 crore
    stampDutyIncrease: number; // 60%
    capexProposed: number; // Rs 31,630 crore
    capexCongress: number; // Rs 19,356 crore
    centralGrantsDrop2017_22: number; // Rs 72,340 crore
    centralGrantsDrop2022_26: number; // Rs 27,832 crore
  };
  caveat: string;
  congressCounterNarrative: string;
}

// ==========================================
// RURAL DEVELOPMENT & PANCHAYATS (Grade B-)
// ==========================================

export interface RuralDevelopmentData {
  id: 7;
  name: "Rural Development & Panchayats";
  grade: "B-";
  metrics: {
    ruralRoads: DepartmentMetric;
    financeCommissionFunds: DepartmentMetric;
    panchayatEmpowerment: DepartmentMetric;
    ruralEmployment: DepartmentMetric;
  };
  budget: {
    roads2026: number; // Rs 12,597 crore
    totalInfrastructure2025_26: number; // Rs 33,550 crore
  };
  publicSatisfaction: "MODERATE";
  keyStats: {
    linkRoadsApproved: number; // km (13,400)
    roadsUnderWork: number; // km (43,000)
    roadsCommitment: number; // Rs 16,209 crore
    fcFunds2025_26: number; // Rs 2,367.64 crore
    fcFundsVsPreviousYear: number; // double
  };
  congressCounterNarrative: string;
}

// ==========================================
// URBAN DEVELOPMENT (Grade C-)
// ==========================================

export interface UrbanDevelopmentData {
  id: 8;
  name: "Urban Development";
  grade: "C-";
  metrics: {
    smartCities: DepartmentMetric;
    mohallaClinicsUrban: DepartmentMetric;
    urbanLandAcquisition: DepartmentMetric;
    aamAadmiCanteens: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
  };
  publicSatisfaction: "LOW";
  keyStats: {
    smartCitiesProgress: string; // NOT_FOUND
    landAcquired: number; // acres (65,533)
    citiesAffected: number;
    canteensStatus: string; // Non-starters
  };
  congressCounterNarrative: string;
}

// ==========================================
// PUBLIC WORKS / ROADS & BRIDGES (Grade C+)
// ==========================================

export interface PublicWorksData {
  id: 9;
  name: "Public Works (Roads & Bridges)";
  grade: "C+";
  metrics: {
    roadConstruction: DepartmentMetric;
    bridgeConstruction: DepartmentMetric;
    roadQuality: DepartmentMetric;
  };
  budget: {
    roads2026: number; // Rs 12,597 crore
    totalInfrastructure: number; // Rs 33,550 crore
  };
  publicSatisfaction: "MODERATE";
  keyStats: {
    linkRoadsApproved: number; // km (13,400)
    roadsWork: number; // km (43,000)
    corruptionFreeMission: boolean;
  };
  congressCounterNarrative: string;
}

// ==========================================
// WATER SUPPLY & SANITATION (Grade C)
// ==========================================

export interface WaterSupplyData {
  id: 10;
  name: "Water Supply & Sanitation";
  grade: "C";
  metrics: {
    tapWaterHousehold: DepartmentMetric;
    canalWaterTailEnds: DepartmentMetric;
    sanitation: DepartmentMetric;
  };
  budget: {
    allocation: string; // embedded in multiple schemes
  };
  publicSatisfaction: "MODERATE";
  keyStats: {
    tapCoverageAAP: number; // 99.93%
    tapCoverageNationally: number; // 78.30% (JJM data Jan 2025)
    canalWaterExtension: string; // Fazilka-Abohar belt
  };
  congressCounterNarrative: string;
}

// ==========================================
// SOCIAL SECURITY & WOMEN/CHILD (Grade C-)
// ==========================================

export interface SocialSecurityData {
  id: 11;
  name: "Social Security & Women/Child Development";
  grade: "C-";
  metrics: {
    womenHonorarium: DepartmentMetric;
    meriRasoi: DepartmentMetric;
    childWelfare: DepartmentMetric;
    oldAgePensions: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
  };
  publicSatisfaction: "LOW-MODERATE";
  keyStats: {
    womenHonorariumAmount: string; // Rs 1,000-1,500/month (proposed)
    honorariumOperational: string; // NOT confirmed
    rationFamiliesTargeted: number; // 40 lakh
    rationStatus: string; // being planned
  };
  congressCounterNarrative: string;
}

// ==========================================
// INDUSTRIES & COMMERCE (Grade C)
// ==========================================

export interface IndustriesData {
  id: 12;
  name: "Industries & Commerce";
  grade: "C";
  metrics: {
    investmentAttraction: DepartmentMetric;
    easeOfBusiness: DepartmentMetric;
    jobCreation: DepartmentMetric;
    exitOfIndustry: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
  };
  publicSatisfaction: "LOW-MODERATE";
  keyStats: {
    investmentProposals: number; // Rs 1.55 lakh crore
    potentialJobs: number; // 5.5 lakh
    governmentJobsCreated: number; // 65,000
    rightToBusinessAct: boolean;
    fastTrackPunjabServices: number; // 200+
    approvalDays: string; // 5-18 days for MSMEs
  };
  congressCounterNarrative: string;
}

// ==========================================
// TRANSPORT (Grade D+)
// ==========================================

export interface TransportData {
  id: 13;
  name: "Transport";
  grade: "D+";
  metrics: {
    publicTransportOverhaul: DepartmentMetric;
    endTransportMafia: DepartmentMetric;
    electricBuses: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
  };
  publicSatisfaction: "LOW";
  keyStats: {
    transportMafiaStatus: string; // continues to flourish
  };
  congressCounterNarrative: string;
}

// ==========================================
// REVENUE & REHABILITATION (Grade C-)
// ==========================================

export interface RevenueData {
  id: 14;
  name: "Revenue & Rehabilitation";
  grade: "C-";
  metrics: {
    stampDutyRevenue: DepartmentMetric;
    landAcquisitionPolicy: DepartmentMetric;
    digitization: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
  };
  publicSatisfaction: "LOW";
  keyStats: {
    stampDuty4Years: number; // Rs 19,515 crore
    stampDutyVsCongress: number; // 60% more
    landAcquisition: number; // acres (65,533)
    citiesAffected: number;
    digitizationIncentive: number; // Rs 800 crore central
  };
  congressCounterNarrative: string;
}

// ==========================================
// FOOD & CIVIL SUPPLIES (Grade C-)
// ==========================================

export interface FoodCivilSuppliesData {
  id: 15;
  name: "Food & Civil Supplies";
  grade: "C-";
  metrics: {
    rationDelivery: DepartmentMetric;
    procurementSystem: DepartmentMetric;
    foodSecurity: DepartmentMetric;
  };
  budget: {
    allocation: string; // NOT_FOUND
  };
  publicSatisfaction: "LOW";
  keyStats: {
    meriRasoiFamiliesTargeted: number; // 40 lakh
    meriRasoiStatus: string; // not operational
    arhtiyaStrike: string; // disrupted operations
  };
  congressCounterNarrative: string;
}

// ==========================================
// DEPARTMENT SCORECARD UNION
// ==========================================

export type DepartmentScorecard =
  | PowerElectricityData
  | HealthWelfareData
  | HomePoliceData
  | EducationData
  | AgricultureData
  | FinancePlanningData
  | RuralDevelopmentData
  | UrbanDevelopmentData
  | PublicWorksData
  | WaterSupplyData
  | SocialSecurityData
  | IndustriesData
  | TransportData
  | RevenueData
  | FoodCivilSuppliesData;

// ==========================================
// STRATEGIC DATA
// ==========================================

export interface CampaignAttackVector {
  rank: number;
  department: string;
  grade: Grade;
  description: string;
  campaignSuggestion: string;
}

export interface RegionPriority {
  region: RegionName;
  seats: number;
  priorityDepartments: string[];
  keyMessage: string;
}

export interface StrategicImplications {
  topAttackVectors: CampaignAttackVector[];
  regionPriorities: RegionPriority[];
}

// ==========================================
// DATA POINTS SUMMARY
// ==========================================

export interface DataPointSummary {
  id: number;
  department: string;
  grade: Grade;
  budgetUtil: string;
  keyMetric: string;
  congressHook: string;
}

// ==========================================
// GAPS & VERIFICATION
// ==========================================

export interface DataGap {
  id: number;
  dataPoint: string;
  verificationNeeded: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface DepartmentScorecardData {
  metadata: ScorecardMetadata;
  overallSummary: OverallSummary;
  departments: DepartmentScorecard[];
  strategicImplications: StrategicImplications;
  dataPointSummary: DataPointSummary[];
  dataGaps: DataGap[];
  sources: string[];
}
