// Punjab Infrastructure: Health, Education & Financial Types
// Source: MP1-foundational/geography/infra-social.md
// Research Date: 19 May 2026 | Data Currency: 2024-2026

// ==========================================
// HEALTH INFRASTRUCTURE
// ==========================================

/**
 * AIIMS Bathinda - First AIIMS in Punjab
 */
export interface AIIMSBathinda {
  name: "AIIMS Bathinda";
  dedicationDate: string; // "Feb 2024"
  dedicatedBy: "PM";
  bedCapacity: number; // 750
  areaAcres: number; // 177
  location: string;
  specialtyDepartments: number; // 10
  superSpecialtyDepartments: number; // 11
  nursingStations: number; // 6
  mbbsOperationalSince: number; // 2019
  nursingProgramStarted: number; // 2025
  strategicSignificance: string;
  malwaRegionSeats?: number; // 69 seats
}

/**
 * PGIMER Chandigarh - Premier referral center
 */
export interface PGIMERChandigarh {
  name: "PGIMER Chandigarh";
  designation: "Institution of National Importance";
  patientLoadPunjab: number; // ~30%
  servingStates: string[]; // Punjab, Haryana, HP, J&K
  status: "Overbedded" | "Overburdened";
}

/**
 * Medical College data
 */
export interface MedicalCollegeData {
  type: "Government" | "Private" | "AIIMS";
  count: number;
  mbbsSeats: number;
}

export interface MedicalCollegeSummary {
  government: MedicalCollegeData;
  private: MedicalCollegeData;
  aiimsBathinda: MedicalCollegeData;
  total: {
    count: number;
    mbbsSeats: number;
  };
  keyInstitutions: string[];
}

/**
 * Public Health Facility Network (CAG Report 2024)
 */
export interface PublicHealthFacility {
  type: "District Hospitals" | "Sub-Divisional Hospitals" | "Community Health Centres" | "Primary Health Centres" | "Sub-Centres";
  count: number;
}

export interface PublicHealthFacilityNetwork {
  facilities: PublicHealthFacility[];
  gapAnalysisNote: string;
  verificationNeeded: string[];
}

/**
 * Drug De-Addiction Crisis Data
 */
export interface DrugCrisisStats {
  totalUsers: number; // 6.6 million
  childrenUsersAge1017: number; // 697,000
  deathsReported: number; // 266 (Apr 2020 - Mar 2023)
  govtTreatment: number; // ~6.2 lakh
  privateTreatment: number; // ~6.12 lakh
}

/**
 * De-Addiction Infrastructure (as of May 2025)
 */
export interface DeAddictionFacility {
  type: "OOAT Centres" | "Govt De-addiction Beds" | "Psychologists" | "Anti-drug Arrests" | "NDPS Cases" | "Properties Demolished";
  count: number;
  details?: string;
  period?: string;
}

export interface DeAddictionInfrastructure {
  ooatCentres: number; // 565 (up from 529)
  govtBeds: number; // 5,000 (tripled from 1,500)
  psychologistsRecruiting: number; // 200 temporary
  antiDrugArrests: number; // 16,348 (Mar-Jun 2025)
  ndpsCases: number; // 9,580 (Mar-Jun 2025)
  propertiesDemolished: number; // 118
  DDRP_platform?: string;
}

export interface DrugDeAddictionData {
  crisisStats: DrugCrisisStats;
  infrastructure: DeAddictionInfrastructure;
  strategicNote: string;
  counterPoints: string[];
}

// ==========================================
// EDUCATION INFRASTRUCTURE
// ==========================================

/**
 * University data
 */
export interface University {
  name: string;
  location: string;
  type: "Central" | "State" | "Deemed" | "Private" | "Institute of National Importance";
  note?: string;
}

export interface UniversitySummary {
  universities: University[];
  approximateCount: { min: number; max: number };
  majorHubs: string[];
  verificationNeeded: string[];
}

/**
 * College data
 */
export interface CollegeSummary {
  approximateCount: { min: number; max: number };
  collegeDensityNote: string;
  majorHubs: string[];
  lowerDensityRegions: string[];
}

/**
 * School data
 */
export interface SchoolSummary {
  governmentSchools: number; // ~19,000
  privateSchoolNote: string;
  mainBoards: string[];
  keyConcern: string;
}

/**
 * ITI and Polytechnic data
 */
export interface ITIPolytechnicData {
  type: "Government ITIs" | "Private ITIs" | "Government Polytechnics" | "Private Polytechnics";
  approximateCount: { min: number; max: number };
}

export interface ITIPolytechnicSummary {
  institutions: ITIPolytechnicData[];
  keyTrades: string[];
  governingBody: string;
  admissionPlatform: string;
  admissionNote: string;
}

/**
 * Coaching Hub data
 */
export interface CoachingHub {
  location: string;
  focus: string[];
  note?: string;
}

export interface CoachingHubSummary {
  hubs: CoachingHub[];
  distantCoachingNote: string;
}

// ==========================================
// FINANCIAL INFRASTRUCTURE
// ==========================================

/**
 * Scheduled Commercial Banks
 */
export interface BankingNetwork {
  scbBranchCount: { min: number; max: number };
  majorPublicSectorBanks: string[];
  keyRRB: string;
  stateCooperativeBank: string;
  dccbNote: string;
  cdRatioPunjab: { min: number; max: number }; // 55-65%
  cdRatioNational: number; // ~78%
  cdRatioVerificationNeeded: boolean;
}

/**
 * ATM Network
 */
export interface ATMNetwork {
  estimatedCount: { min: number; max: number };
  higherDensityAreas: string[];
  ruralGapNote: string;
}

/**
 * Post Office Network
 */
export interface PostOfficeNetwork {
  approximateCount: number;
  districtsCovered: number;
  services: string[];
  ruralImportanceNote: string;
}

/**
 * Common Service Centres
 */
export interface CSCData {
  nationalTotal: number; // 5,97,441
  gramPanchayatLevel: number; // 4,73,357
  punjabVLE: number; // 3,500+
  services: string[];
  keyInitiative: string;
}

/**
 * Insurance and Microfinance
 */
export interface InsuranceMicrofinance {
  licActive: boolean;
  privateInsurersActive: boolean;
  govSchemes: string[];
  mfiRegions: string[];
  shgBankLinkage: string;
}

// ==========================================
// REGIONAL DISPARITIES
// ==========================================

export type Region = "Malwa" | "Majha" | "Doaba";

export interface RegionalHealthData {
  malwa: string;
  majha: string;
  doaba: string;
}

export interface RegionalEducationData {
  malwa: string;
  majha: string;
  doaba: string;
}

export interface RegionalFinancialData {
  malwa: string;
  majha: string;
  doaba: string;
}

export interface RegionalDisparities {
  health: RegionalHealthData;
  education: RegionalEducationData;
  financial: RegionalFinancialData;
}

// ==========================================
// INFRASTRUCTURE KPI DATA
// ==========================================

export interface InfrastructureKPI {
  health: HealthInfrastructureKPI;
  education: EducationInfrastructureKPI;
  financial: FinancialInfrastructureKPI;
}

export interface HealthInfrastructureKPI {
  aiimsBathinda: AIIMSBathinda;
  pgimerChandigarh: PGIMERChandigarh;
  medicalColleges: MedicalCollegeSummary;
  publicHealthFacilities: PublicHealthFacilityNetwork;
  drugDeAddiction: DrugDeAddictionData;
}

export interface EducationInfrastructureKPI {
  universities: UniversitySummary;
  colleges: CollegeSummary;
  schools: SchoolSummary;
  itiPolytechnics: ITIPolytechnicSummary;
  coachingHubs: CoachingHubSummary;
}

export interface FinancialInfrastructureKPI {
  banking: BankingNetwork;
  atms: ATMNetwork;
  postOffices: PostOfficeNetwork;
  csc: CSCData;
  insurance: InsuranceMicrofinance;
}

// ==========================================
// DATA GAPS & VERIFICATION NEEDS
// ==========================================

export interface DataGap {
  id: number;
  item: string;
  verificationNeeded: string;
}

export const INFRA_SOCIAL_DATA_GAPS: DataGap[] = [
  { id: 1, item: "Exact Punjab SCB branch count and CD ratio for FY2024-25", verificationNeeded: "SLBC data partially available" },
  { id: 2, item: "District-wise breakdown of health facility vacancy rates against IPHS norms", verificationNeeded: "Full CAG report" },
  { id: 3, item: "AISHE 2024-25 state-level enrollment data for Punjab", verificationNeeded: "Collection underway" },
  { id: 4, item: "Complete ITI/polytechnic enrollment figures by trade and district", verificationNeeded: "PSBTE data" },
  { id: 5, item: "Post office count by district", verificationNeeded: "India Post data" },
  { id: 6, item: "Private hospital and diagnostic lab counts by district", verificationNeeded: "Health department data" },
  { id: 7, item: "Ambulance network (108/102 services) coverage data", verificationNeeded: "Health department data" },
];

// ==========================================
// SOURCES
// ==========================================

export interface InfraSocialSource {
  id: number;
  title: string;
  source: string;
  url?: string;
}

export const INFRA_SOCIAL_SOURCES: InfraSocialSource[] = [
  { id: 1, title: "CAG Report No. 4 of 2024 - Public Health Infrastructure in Punjab", source: "cag.gov.in" },
  { id: 2, title: "PM dedicates AIIMS Bathinda", source: "PIB Press Release, 25 Feb 2024", url: "pib.gov.in/PRID=2008922" },
  { id: 3, title: "AIIMS Bathinda official website", source: "aiimsbathinda.edu.in" },
  { id: 4, title: "Punjab de-addiction bed increase", source: "Times of India, 1 May 2025" },
  { id: 5, title: "Punjab rehab system expansion", source: "The Hindu, 9 Jun 2025" },
  { id: 6, title: "Punjab drug policy analysis", source: "IDPC/Talking Drugs, Jun 2025" },
  { id: 7, title: "Drug De-Addiction Registry Portal (DDRP)", source: "NIC Informatics, Oct 2025" },
  { id: 8, title: "Statewise CD Ratio data", source: "SLBC India, 31-03-2025", url: "slbcindia.com" },
  { id: 9, title: "Shortage of Healthcare Infrastructure in Punjab", source: "Lok Sabha Question, Dec 2024", url: "sansad.in" },
  { id: 10, title: "Punjab medical college seat data", source: "NEET/MBBS admission portals" },
  { id: 11, title: "Polytechnic/ITI admissions 2025-26", source: "PSBTE & IT", url: "punjabteched.com" },
  { id: 12, title: "ITI/Polytechnic online admission system", source: "e-Akadamik, CDAC Mohali" },
  { id: 13, title: "National CSC statistics", source: "CSC Portal", url: "csc.gov.in" },
  { id: 14, title: "CSC operational data", source: "Lok Sabha Question, Mar 2025" },
  { id: 15, title: "VLE CSCs in Punjab", source: "Punjab Transport Dept" },
];
