// Governance - AAP Service Delivery & Infrastructure Gaps Types for Punjab 2022-2026
// Derived from: research-M2/MP1-foundational/governance/service-delivery-gaps.md
// Research Date: 19 May 2026 | Data Period: 2022-2026 (AAP tenure)

// ==========================================
// METADATA
// ==========================================

export interface ServiceDeliveryGapsMetadata {
  researchDate: string; // "19 May 2026"
  megaPillar: string; // "MP1 - Foundational Scan (Governance)"
  dataPeriod: string; // "2022-2026 (AAP tenure)"
  agent: string; // "Research Agent - Service Delivery Gaps"
  qualityStandard: string; // "ZERO fabrication"
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// ENUMS
// ==========================================

export type VerificationStatus = "VERIFIED" | "VERIFICATION_NEEDED";

// ==========================================
// 1. HEALTH SERVICE DELIVERY GAPS
// ==========================================

export interface MedicalSpecialistCrisis {
  specialistVacancyRate: number; // percentage (47%)
  vacantPosts: number; // 1,098 of 2,098
  totalPosts: number; // 2,098
  lastRegularRecruitment: string; // "2022"
  yearsSinceRecruitment: number; // 3+
  retiredSpecialistsOnAdhoc: number; // 88
  districtHospitalsMeetingIPHS: number; // percentage (~45%)
  attritionDrivers: string[];
}

export interface DistrictHealthcareShortage {
  district: string;
  shortageType: string;
  details: string;
}

export interface DoctorShortage {
  doctorToPopulationRatio: number; // 1.02 per 1,000
  nationalTarget: number; // 2 per 1,000
  governmentTarget2030: number; // 2 per 1,000
  governmentTarget2047: number; // 4 per 1,000
  hiringStall: string; // "4 years (2020-2024)"
  mosRecruited: number; // 400 recently
  newMOPostsApproved: number; // 1,390 (Mar 2025)
  jalandharCivilHospitalMOS: number; // 24 against requirement
}

export interface DistrictHealthcareAccess {
  district: string;
  popPerMedicalInstitution?: number;
  popPerDoctor?: number;
  notes?: string;
}

export interface AamAadmiClinicData {
  operational: number; // 500+
  cagAuditFindings?: {
    lackingToilets: number; // 21
    noPowerBackups: number; // 15
    notDisabledFriendly: number; // 12
    staffShortages: boolean; // widespread
  };
  accusations: string; // "rebranding rather than new infrastructure"
  gap: string; // "Primary care expanded, but secondary/tertiary care neglected"
}

export interface DrugDeaddictionData {
  estimatedOpioidDependents: number; // 230,000+
  drugRelatedDeaths: number; // 266 (Apr 2020 - Mar 2023)
  unlicensedCentresExploitingFamilies: boolean;
  mentalHealthTreatmentGap: number; // percentage (~80%)
  governmentCentresVsDemand: VerificationStatus;
}

export interface HealthServiceGaps {
  specialistCrisis: MedicalSpecialistCrisis;
  districtShortages: DistrictHealthcareShortage[];
  generalDoctorShortage: DoctorShortage;
  districtDisparities: DistrictHealthcareAccess[];
  aamAadmiClinics: AamAadmiClinicData;
  drugDeaddiction: DrugDeaddictionData;
}

// ==========================================
// 2. EDUCATION SERVICE DELIVERY GAPS
// ==========================================

export interface TeacherVacancies {
  abolishedPosts: number; // 30,391 (across departments, Apr 2026)
  ettCadreDelays: boolean;
  masterCadreDelays: boolean;
  specialEducationPosts: number; // 725 (PRT + TGT, Jul 2025)
  candidatesApplied: number; // 2 lakh
  masterCadreVacancies: number; // 4,161 identified
  recruitmentGap: string; // "Four-year gap"
}

export interface SchoolInfrastructure {
  educationBudget: number; // Rs 19,279 crore (Apr 2026)
  absorptionCapacityQuestioned: boolean;
  schoolsOfEminence: string; // "coverage limited"
  ruralGaps: string[]; // functional toilets, drinking water, computer labs, internet
  schoolBuildingConditions: VerificationStatus;
  toiletDrinkingWaterData: VerificationStatus;
}

export interface LearningOutcomes {
  enrollmentVsQualityTradeoff: string; // "documented (Nature, Dec 2025)"
  rationalisationPolicy2025: string; // minimum standards set
  currentLevelsBelowFloors: boolean; // implied by policy
}

export interface EducationServiceGaps {
  teacherVacancies: TeacherVacancies;
  schoolInfrastructure: SchoolInfrastructure;
  learningOutcomes: LearningOutcomes;
}

// ==========================================
// 3. ELECTRICITY & POWER SUPPLY GAPS
// ==========================================

export interface PowerCrisis {
  powerCutsRuralUrban: string; // "8-10 hours"
  demandSurge: {
    fromMW: number; // 7,900 MW
    toMW: number; // 12,000+ MW
    timeframe: string; // "10 days (heatwave)"
  };
  infrastructureSpending: number; // Rs 5,000-6,000 crore (Mission Roshan Punjab)
  unplannedOutageReduction: number; // percentage (~70%)
  oppositionAllegation: string;
  keyVulnerability: string;
}

export interface SupplyHours {
  nationalAverageRural: number; // 22.6 hours/day (2025)
  punjabActualCrisis: number; // "significantly below national average"
  districtWiseData: VerificationStatus;
}

export interface PowerStructuralIssues {
  pspclFinancialStress: boolean;
  freePowerToFarmersStrainsFinances: boolean;
  agreementsDelayed: string[]; // Himachal and J&K
  fundShortage: boolean;
}

export interface PowerSupplyGaps {
  crisis: PowerCrisis;
  supplyHours: SupplyHours;
  structuralIssues: PowerStructuralIssues;
}

// ==========================================
// 4. WATER SUPPLY, SANITATION & SEWERAGE GAPS
// ==========================================

export interface DrinkingWater {
  climateResilientWASHPlan: string; // launched 2025-2035
  groundwaterContamination: string; // Malwa region (cancer belt)
  roPlantMaintenance: string; // recurring breakdowns
  pipedWaterCoverage: VerificationStatus;
  waterQualityData: VerificationStatus;
}

export interface SewerageDrainage {
  districtsForPlanning: number; // 14 (Sep 2025)
  floodManagementFailures: boolean;
  floodCause: string; // "drainage infrastructure inadequacy + government planning failure"
  urbanAgingSystems: boolean;
  ruralOpenDefecation: string; // border and Malwa belt
}

export interface WaterSanitationGaps {
  drinkingWater: DrinkingWater;
  sewerageDrainage: SewerageDrainage;
}

// ==========================================
// 5. SOCIAL WELFARE & PENSION DELIVERY GAPS
// ==========================================

export interface PensionArrears {
  beneficiariesAffected: number; // 35.27 lakh
  beneficiaryCategories: string[]; // elderly, widows, persons with disabilities
  paymentDelayPeriod: string; // "October 2025 to February 2026"
  delayMonths: number; // 5 months
  annualAllocation: number; // Rs 3,806 crore (2025-26)
  retiredDoctorsProtest: boolean; // Apr 2025
  politicalSignificance: string;
}

export interface PDSSystem {
  nfsaFamiliesCovered: number; // 36 lakh
  smartRationCardScheme: string; // operational
  aepdsOperational: boolean; // electronic PDS
  inclusionExclusionErrors: VerificationStatus;
  rationTimeliness: VerificationStatus;
  grainQuality: VerificationStatus;
}

export interface SocialWelfareGaps {
  pensionArrears: PensionArrears;
  pds: PDSSystem;
}

// ==========================================
// 6. INFRASTRUCTURE GAPS
// ==========================================

export interface RoadProgress {
  ruralLinkRoads: {
    constructed: number; // km (19,373)
    cost: number; // Rs 4,092 crore
  };
  newPlanAnnounced: {
    length: number; // km (44,920)
    cost: number; // Rs 16,209 crore
    announced: string; // Nov 2025
  };
  linkRoadsDirected: {
    length: number; // km (13,400)
    cost: number; // Rs 2,436.49 crore
    date: string; // Oct 2024
  };
  borderRegionConnectivity: string; // "long-neglected (CM admission, Mar 2026)"
  gapAnalysis: string;
}

export interface IrrigationInfrastructure {
  canalIrrigatedArea: {
    startYear: number; // 2022
    startAcres: number; // 2.23 million
    endYear: number; // 2025
    endAcres: number; // 4.78 million
  };
  canalSystemRejuvenation: number; // Rs 6,500 crore
  canalModernisation: number; // Rs 5,640 crore (2025)
  villagesReached: number; // 1,365 additional
  villagesStillDependentOnTubewells: string; // many
  canalMaintenanceQuality: VerificationStatus;
  tailEndVillageAccess: VerificationStatus;
  waterUserCommitteeFunctionality: VerificationStatus;
}

export interface FloodManagement {
  floods2025: boolean; // inadequate drainage + planning failure
  reliefReleased: number; // Rs 1,010 crore (digital system)
  gaps: string[]; // pre-monsoon desilting, embankment maintenance, early warning
}

export interface InfrastructureGaps {
  roads: RoadProgress;
  irrigation: IrrigationInfrastructure;
  floodManagement: FloodManagement;
}

// ==========================================
// 7. ADMINISTRATIVE GAPS
// ==========================================

export interface StaffVacancies {
  abolishedPosts: number; // 30,391 (Apr 2026)
  affectedDepartments: string[];
  chronicInabilityToFill: boolean;
  contractBasedHiring: boolean;
  qualityRetentionConcerns: boolean;
}

export interface GovernancePerception {
  remoteControlAllegation: string; // "AAP accused of remote control from Delhi"
  bureaucraticReshuffles: string; // "frequent -- destabilising administration"
  iasIpsTransfersSince2022: VerificationStatus;
  keyDepartmentVacancyRate: VerificationStatus;
}

export interface AdministrativeGaps {
  staffVacancies: StaffVacancies;
  governancePerception: GovernancePerception;
}

// ==========================================
// 8. FINANCIAL GAPS
// ==========================================

export interface FinancialGap {
  category: string;
  issue: string;
}

export interface FinancialGaps {
  gaps: FinancialGap[];
  powerSector: string;
  health: string;
  education: string;
  socialWelfare: string;
  debtConstraint: string;
}

// ==========================================
// 9. STRATEGIC IMPLICATIONS FOR CONGRESS
// ==========================================

export interface HighestImpactGap {
  rank: number;
  issue: string;
  affectedVoters: string;
  description: string;
}

export interface CongressMessagingAngle {
  issue: string;
  message: string;
}

export interface StrategicImplications {
  highestImpactGaps: HighestImpactGap[];
  congressMessaging: CongressMessagingAngle[];
}

// ==========================================
// SOURCES
// ==========================================

export interface ServiceDeliverySource {
  id: number;
  title: string;
  source: string;
  date?: string;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface ServiceDeliveryGapsKPI {
  // Metadata
  metadata: ServiceDeliveryGapsMetadata;

  // Health
  health: HealthServiceGaps;

  // Education
  education: EducationServiceGaps;

  // Power
  power: PowerSupplyGaps;

  // Water & Sanitation
  waterSanitation: WaterSanitationGaps;

  // Social Welfare
  socialWelfare: SocialWelfareGaps;

  // Infrastructure
  infrastructure: InfrastructureGaps;

  // Administrative
  administrative: AdministrativeGaps;

  // Financial
  financial: FinancialGaps;

  // Strategic
  strategic: StrategicImplications;

  // Sources
  sources: ServiceDeliverySource[];
}

// ==========================================
// CONSTANTS
// ==========================================

export const HEALTH_VACANCY_THRESHOLDS = {
  SPECIALIST_VACANCY_CRITICAL: 40, // percentage
  IPHS_NORM_COMPLIANCE_TARGET: 100, // percentage
  DOCTOR_POPULATION_RATIO_TARGET: 2, // per 1,000
} as const;

export const POWER_CRISIS_THRESHOLDS = {
  MAX_ACCEPTABLE_CUTS: 4, // hours
  CURRENT_CUTS: 10, // hours (crisis)
  DEMAND_SURGE_THRESHOLD_MW: 10000, // MW
} as const;

export const PENSION_DELAY_THRESHOLDS = {
  MAX_ACCEPTABLE_DELAY: 1, // month
  CURRENT_DELAY: 5, // months (crisis)
  BENEFICIARY_IMPACT_THRESHOLD: 1000000, // 10 lakh
} as const;

export const EDUCATION_VACANCY_THRESHOLDS = {
  VACANT_POSTS_ABOLISHED_CRITICAL: 10000,
  RECRUITMENT_GAP_YEARS_CRITICAL: 2,
} as const;
