// Governance - Local Issues Malwa Types for Punjab 2027
// Derived from: research-M2/MP1-foundational/governance/local-issues-malwa.md
// Research Date: 19 May 2026 | Data Currency: 2024-2026

// ==========================================
// REGIONAL OVERVIEW
// ==========================================

/**
 * Malwa Regional Overview
 */
export interface MalwaRegionalOverview {
  totalSeats: number; // 69 of 117
  decisiveRegion: boolean;
  historicalNote: string;
  districts: readonly string[];
  socialComposition: {
    jatSikhDominance: string;
    dalitPopulation: string;
    urbanHinduPockets: string;
  };
  election2022: {
    aap: number;
    congress: number;
    sad: number;
  };
  election2024LokSabha: {
    aapVoteShare: number; // dropped from 42% to 26%
    congressSeats: number; // 7 of 13
  };
  currentStatus: string;
}

// ==========================================
// DRUG ADDICTION CRISIS
// ==========================================

/**
 * Drug Addiction Crisis Data - CRITICAL
 */
export interface DrugAddictionCrisis {
  intensity: "CRITICAL";
  mostAcuteDistricts: readonly string[];
  scale: {
    totalDrugUsers: number; // 6.6 million
    childrenWithSubstanceDisorders: number; // 697,000 (10-17 age)
    addictsInGovernmentCentres: number; // ~6.2 lakh
    addictsInPrivateFacilities: number; // ~6.12 lakh
    drugRelatedDeaths: {
      reported: number; // 266 (April 2020-March 2023)
      bjpClaimed: number; // 587 under AAP
    };
    familiesAffected: number; // 64-65%
    opioidDependent: number; // 230,000+
    dronesSeized2024: number; // 200+ (double 2023)
  };
  entityBlamed: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  resolutionStatus: string;
  congressProposedResponse: string[];
}

// ==========================================
// CANCER BELT & WATER CONTAMINATION
// ==========================================

/**
 * Cancer Belt & Water Contamination - CRITICAL
 */
export interface CancerBeltCrisis {
  intensity: "CRITICAL";
  mostAffectedDistricts: readonly string[];
  scale: {
    designation: string;
    muktsarCancerPrevalence: number; // 136.3 per lakh (highest)
    bathindaUranium: {
      concentration: number; // 684 ppb
      whoLimit: number; // 15 ppb
    };
    barcAnalysis: {
      samples: number; // 1,500
      exceededLimitsPercent: number; // 35%
    };
    cgwB2025: {
      wellsSampled: number; // 296
      uraniumAboveLimitsPercent: number; // 53%
      arsenicAboveLimitsPercent: number; // 9.1%
    };
    funding: {
      centralShare: number; // Rs 799.5 crore
      totalExpenditure: number; // Rs 2,084 crore (2019-2026)
    };
  };
  entityBlamed: string[];
  resolutionStatus: string;
  congressProposedResponse: string[];
}

// ==========================================
// UNEMPLOYMENT & YOUTH DISTRESS
// ==========================================

/**
 * Unemployment Crisis Data - CRITICAL
 */
export interface UnemploymentCrisis {
  intensity: "CRITICAL";
  mostAffectedDistricts: readonly string[];
  scale: {
    youthUnemployment15129: number; // 19.3%
    nationalAverage: number; // 14.3%
    ruralYouthUnemployment: number; // 22.5%
    ruralMaleUnemployment: number; // 19.9%
    ruralFemaleUnemployment: number; // 30.7%
    labourForceParticipation: number; // 45.9%
    femaleLabourForceParticipation: number; // 22%
    outMigrationRoutes: string[];
    aapClaimedJobs: number; // 48,000
    punjabDebt: {
      amount: number; // Rs 4 lakh crore
      percentOfGSDP: number; // 45-50%
    };
  };
  entityBlamed: {
    primary: string;
    secondary: string;
    historical: string;
  };
  resolutionStatus: string;
  congressProposedResponse: string[];
}

// ==========================================
// CANAL IRRIGATION
// ==========================================

/**
 * Canal Irrigation Crisis - HIGH
 */
export interface CanalIrrigationCrisis {
  intensity: "HIGH";
  affectedDistricts: readonly string[];
  scale: {
    sirhindFeederClosure: {
      date: string; // March 2024
      incident: string;
    };
    tailEndProblem: string;
    april2025Policy: string;
    canalLining: {
      expenditure: number; // Rs 4,557 crore (FY 2022-2025)
      distanceCleaned: number; // 15,539 km
    };
    undergroundPipeline: {
      project: string; // Sangrur
      fiscalYear: string; // FY 2025-26
    };
  };
  entityBlamed: string[];
  resolutionStatus: string;
  congressProposedResponse: string[];
}

// ==========================================
// GROUNDWATER DEPLETION
// ==========================================

/**
 * Groundwater Depletion Crisis - HIGH
 */
export interface GroundwaterDepletionCrisis {
  intensity: "HIGH";
  mostSevereDistricts: readonly string[];
  scale: {
    cgwB2025: {
      wellsMonitored: number; // 164
      shallowWaterPercent: number; // 44.51% (0-10 metres bgl)
    };
    historicalContext: string;
    dualCrisis: string;
    freeElectricityImpact: string;
  };
  entityBlamed: string[];
  resolutionStatus: string;
  congressProposedResponse: string[];
}

// ==========================================
// STUBBLE BURNING
// ==========================================

/**
 * Stubble Burning Crisis - HIGH
 */
export interface StubbleBurningCrisis {
  intensity: "HIGH";
  affectedAreas: string;
  scale: {
    oct2025: {
      firstTripleDigitDay: string; // Oct 26
      cases: number; // 122
    };
    malwaEpicentre: string;
    totalPaddyResidue: string; // ~20 million metric tonnes
    malwaShareOfFires: number; // 58%
    nasaSatelliteNote: string;
  };
  entityBlamed: string[];
  resolutionStatus: string;
  congressProposedResponse: string[];
}

// ==========================================
// HEALTH INFRASTRUCTURE
// ==========================================

/**
 * Health Infrastructure Crisis - HIGH
 */
export interface HealthInfrastructureCrisis {
  intensity: "HIGH";
  affectedAreas: readonly string[];
  keyEvidence: {
    mogaDoctors: {
      actual: number; // 4
      malerkotla: number; // 28
    };
    dharamkotHospital: {
      subDivisionalHospital: string; // No sub-divisional hospital
      nearestTraumaCentre: string; // 65 km away in Jalandhar
    };
    mohaliDispensary: string;
    aamAadmiClinics: {
      launched: number; // 500+
      issue: string; // specialist positions unfilled
    };
    aapMlaDharamkot: string; // "We feel like we are living in Pakistan"
  };
  entityBlamed: string;
  resolutionStatus: string;
  congressProposedResponse: string[];
}

// ==========================================
// LAW & ORDER / GANGSTER CRISIS
// ==========================================

/**
 * Law & Order Crisis - HIGH
 */
export interface LawOrderCrisis {
  intensity: "HIGH";
  affectedDistricts: readonly string[];
  keyEvidence: {
    sidhuMoosewala: {
      murder: string; // May 2022
      location: string; // Mansa
      impact: string;
    };
    gangsterIssue: string;
    extortionRackets: string;
    aapMlaJailed: string; // Pathanmajra
  };
  entityBlamed: string;
  resolutionStatus: string;
}

// ==========================================
// AAP UNFULFILLED PROMISES
// ==========================================

/**
 * AAP Unfulfilled Promises - HIGH (Political Leverage)
 */
export interface AAPUnfulfilledPromises {
  intensity: "HIGH";
  brokenPromises: {
    womenStipend: {
      promise: string; // Rs 1,000/month for women
      status: string; // NOT DELIVERED (3+ years)
    };
    drugFreePunjab: {
      promise: string; // Drug-free in 3 months
      status: string; // FAILED
    };
    msp22Crops: {
      promise: string; // 22 crops at MSP
      status: string; // NOT IMPLEMENTED
    };
    sandMining: {
      claimed: number; // Rs 20,000 crore potential
      actual: number; // only Rs 288 crore
    };
    mohallaClinics: {
      promise: string;
      status: string; // PARTIALLY DONE
    };
  };
  womenProtestNote: string;
  politicalImplication: string;
}

// ==========================================
// EDUCATION INFRASTRUCTURE
// ==========================================

/**
 * Education Infrastructure Crisis - MEDIUM
 */
export interface EducationCrisis {
  intensity: "MEDIUM";
  keyEvidence: {
    schoolsOfEminence: {
      locations: string; // concentrated in urban areas
    };
    itiFundsDiversion: string; // AAP MLA Jagraon exposed
    vacantPrincipalPosts: {
      total: number; // 50 of 64
    };
    zirakpurCollege: string;
  };
}

// ==========================================
// CONSTITUENCY-LEVEL DATA
// ==========================================

/**
 * Constituency Issue Data
 */
export interface ConstituencyIssue {
  rank: number;
  constituency: string;
  district: string;
  winner2022: string;
  topIssues: string[];
  congressOpportunity: string;
}

/**
 * Top 30 Malwa Seats Matrix
 */
export interface ConstituencyMatrix {
  constituencies: ConstituencyIssue[];
}

// ==========================================
// ELECTORAL DYNAMICS
// ==========================================

/**
 * Anti-Incumbency Analysis
 */
export interface AntiIncumbencyAnalysis {
  description: string;
  aapVoteShare2022: number;
  aapVoteShare2024: number;
  congressBase: string;
  winningThreshold: {
    fourCornered: number; // ~20-22%
    threeCornered: number; // ~26-28%
  };
}

/**
 * AAP Internal Dissent
 */
export interface AAPInternalDissent {
  description: string;
  keyIncidents: string[];
  rajyaSabhaDefection: {
    date: string; // April 2026
    count: number; // 7 MPs to BJP
  };
  congressClaim: string; // 30+ AAP MLAs ready to switch
}

/**
 * Women Voters Analysis
 */
export interface WomenVotersAnalysis {
  influence: string;
  aapPromiseIssue: string;
  deliveryImpact: string;
  drugCrisisImpact: string;
}

/**
 * Dalit Vote Analysis
 */
export interface DalitVoteAnalysis {
  percentOfPunjab: number;
  percentInRuralMalwa: number;
  aapInroads: string;
  congressBase: string;
  landRightsIssue: string;
  congressMustOffer: string;
}

// ==========================================
// CONGRESS CAMPAIGN INTELLIGENCE
// ==========================================

/**
 * Campaign Leverage Point
 */
export interface CampaignLeveragePoint {
  priority: number;
  narrative: string;
  description: string;
}

/**
 * Constituency Attack Line
 */
export interface ConstituencyAttackLine {
  priority: number;
  constituency: string;
  primaryAttack: string;
  supportingEvidence: string;
}

// ==========================================
// DATA GAPS
// ==========================================

/**
 * Data Verification Status
 */
export interface DataGap {
  dataPoint: string;
  status: "NOT_FOUND" | "PARTIAL" | "CONFIRMED_NOT_DELIVERED";
  actionRequired: string;
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
 * Local Issues Malwa KPI
 */
export interface LocalIssuesMalwaKPI {
  // Metadata
  reportDate: string;
  megaPillar: string;
  domain: string;
  taskId: string;
  classification: string;
  dataCurrency: string;

  // Regional Overview
  regionalOverview: MalwaRegionalOverview;

  // Crisis Data
  drugAddiction: DrugAddictionCrisis;
  cancerBelt: CancerBeltCrisis;
  unemployment: UnemploymentCrisis;
  canalIrrigation: CanalIrrigationCrisis;
  groundwaterDepletion: GroundwaterDepletionCrisis;
  stubbleBurning: StubbleBurningCrisis;
  healthInfrastructure: HealthInfrastructureCrisis;
  lawOrder: LawOrderCrisis;
  aapPromises: AAPUnfulfilledPromises;
  education: EducationCrisis;

  // Constituency Data
  constituencyMatrix: ConstituencyMatrix;

  // Electoral Dynamics
  antiIncumbency: AntiIncumbencyAnalysis;
  aapInternalDissent: AAPInternalDissent;
  womenVoters: WomenVotersAnalysis;
  dalitVote: DalitVoteAnalysis;

  // Campaign Intelligence
  leveragePoints: CampaignLeveragePoint[];
  attackLines: ConstituencyAttackLine[];

  // Data Gaps
  dataGaps: DataGap[];

  // Sources
  sources: SourceCitation[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type IssueIntensity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
export type CongressOpportunity = "HIGH" | "MEDIUM-HIGH" | "MEDIUM" | "BASE";

export const MALWA_DISTRICTS_14 = [
  "Bathinda",
  "Mansa",
  "Sangrur",
  "Barnala",
  "Faridkot",
  "Muktsar (Sri Muktsar Sahib)",
  "Ferozepur",
  "Fazilka",
  "Ludhiana (rural)",
  "Moga",
  "Fatehgarh Sahib",
  "Patiala",
  "Mohali (SAS Nagar)",
  "Rupnagar (parts)",
] as const;

export const DRUG_CRISIS_MOST_ACUTE = [
  "Ferozepur",
  "Fazilka",
  "Muktsar",
  "Bathinda",
  "Mansa",
  "Sangrur",
] as const;

export const CANCER_BELT_MOST_AFFECTED = [
  "Bathinda",
  "Muktsar",
  "Mansa",
  "Faridkot",
  "Fazilka",
] as const;

export const UNEMPLOYMENT_MOST_ACUTE = [
  "Bathinda",
  "Mansa",
  "Sangrur",
  "Barnala",
  "Muktsar",
  "Faridkot",
] as const;

export const CANAL_CRISIS_SOUTHERN_MALWA = [
  "Fazilka",
  "Ferozepur",
  "Muktsar",
  "Bathinda",
  "Mansa",
  "Sangrur",
] as const;
