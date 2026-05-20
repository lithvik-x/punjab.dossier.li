// Political Anatomy Types for Punjab Congress 2027 Election Dashboard
// Derived from: research-P2/01_punjab_political_anatomy/*.md
// Research Date: May 20, 2026 | Data Currency: 2025-2026

import type { Region } from "./kpi-types";

// ==========================================
// THREE-BODY SYSTEM (Region Overview)
// ==========================================

/**
 * Punjab's Three-Body System - Regional Division
 * The state is divided into Malwa, Majha, and Doaba regions based on river watersheds
 */
export interface PunjabRegion {
  name: Region;
  meaning: string;
  rivers: string;
  districts: string[];
  assemblySeats: number;
  lokSabhaSeats: number;
  percentageOfSeats: number;
  keyCharacteristics: string[];
  scPopulationPercent: number;
  reservedSeatPercent: number;
  primaryEconomy: string;
  nickname: string;
}

export interface ThreeBodySystem {
  regions: PunjabRegion[];
  malwaSeats: number;
  majhaSeats: number;
  doabaSeats: number;
  totalSeats: number;
  malwaPercent: number;
  majhaPercent: number;
  doabaPercent: number;
}

// ==========================================
// REGIONAL POLITICAL STATUS
// ==========================================

export interface RegionalPoliticalStatus {
  region: Region;
  researchDate: string;
  classification: string;
  executiveSummary: string;

  // Demographics
  districts: string[];
  assemblySeats: number;
  lokSabhaSeats: number;
  scPopulationPercent: number;

  // Current political landscape
  parties: RegionalPartyStatus[];
  keyLeaders: RegionalLeader[];
  electionResults2022: RegionalElectionResult;
  lokSabhaResults2024: LokSabhaResult[];
  localBodyResults2025?: LocalBodyResult;

  // Key issues
  keyIssues: KeyIssue[];

  // Strategic assessment
  strengths: string[];
  weaknesses: string[];
  threatLevel: ThreatAssessment[];
}

export interface RegionalPartyStatus {
  party: string;
  position: string;
  seatsWon2022?: number;
  currentStatus: string;
  keyLeaders: string[];
  strengths: string[];
  weaknesses: string[];
  trend: "rising" | "stable" | "declining";
}

export interface RegionalLeader {
  name: string;
  position: string;
  party: string;
  region: string;
  base: string;
  significance: string;
}

export interface RegionalElectionResult {
  party: string;
  seatsWon: number;
  totalSeats: number;
  percentage: number;
}

export interface LokSabhaResult {
  constituency: string;
  winner: string;
  party: string;
  votes?: number;
  margin?: string;
}

export interface LocalBodyResult {
  district: string;
  congress: number;
  aap: number;
  other?: number;
  totalZones?: number;
}

export interface KeyIssue {
  issue: string;
  description: string;
  severity: "HIGH" | "MEDIUM" | "LOW";
  politicalImpact: string;
}

export interface ThreatAssessment {
  party: string;
  threatLevel: "HIGH" | "MEDIUM" | "LOW" | "CRITICAL";
  trend: "rising" | "stable" | "declining";
  keyFactors: string[];
}

// ==========================================
// CASTE ECOSYSTEM
// ==========================================

export interface CasteDemographics {
  casteGroup: string;
  populationPercent: number;
  regionalConcentration: {
    malwa: string;
    majha: string;
    doaba: string;
  };
  politicalBehavior: string;
  currentAlignment: string;
}

export interface CasteEcosystemData {
  totalSCPopulation: number;
  scPopulationPercent: number;
  jatSikhPercent: number;
  obcPercent: number;
  casteGroups: CasteDemographics[];
  regionalCasteComposition: RegionalCasteComposition[];
  dalitSubCasteDistribution: DalitSubCaste[];
  bjpNonJatCoalition: {
    targetGroups: string[];
    estimatedVoteShare: number;
    strategy: string;
  };
  congressCasteStrategy: {
    traditionalBase: string[];
    challenge: string;
    requiredCoalition: string;
  };
}

export interface RegionalCasteComposition {
  region: Region;
  scPopulation: number;
  dominantCaste: string;
  keyDynamic: string;
  reservedSeats: number;
}

export interface DalitSubCaste {
  subCaste: string;
  populationPercent: number;
  regionalNotes: string;
  religiousIdentity: string;
  politicalAlignment: string;
}

// ==========================================
// FARMER CRISIS DATA
// ==========================================

export interface FarmerCrisisData {
  totalFarmDebt: string;
  farmDebtCrore: number;
  stateDebtPercentGSDP: number;
  householdsInDebt: number;
  avgDebtPerHousehold: string;
  avgDebtPerHouseholdRupees: number;

  farmerSuicides: {
    official2023_2025: number;
    officialNov2025: number;
    estimated2000_2015: number;
    inSixDistricts2000_2015: number;
    source: string;
  };

  mspRates: {
    paddy: number;
    wheat: number;
  };

  arhtiyaSystem: {
    registeredArhtiyas: number;
    farmersServed: number;
    commissionPercent: number;
    avgLoanAmount: string;
  };

  regionalDistribution: {
    malwaSuicidePercent: number;
    affectedDistricts: string[];
    suicideClusters: string[];
  };

  flood2025: {
    affectedAcres: number;
    reliefPerAcre: number;
    worstAffectedDistricts: string[];
  };
}

// ==========================================
// YOUTH UNEMPLOYMENT DATA
// ==========================================

export interface YouthUnemploymentData {
  youthUnemploymentRate: number;
  ruralYouthUnemployment: number;
  urbanYouthUnemployment: number;
  femaleYouthUnemployment: number;
  maleYouthUnemployment: number;
  nationalAverage: number;
  ranking: string;

  registeredUnemployed: {
    total: number;
    unskilled: number;
    skilled: number;
  };

  educationLevels: {
    graduateUnemployment: number;
    postgraduateUnemployment: number;
  };

  migrationData: {
    students2021: number;
    students2022: number;
    increasePercent: number;
    canadaStudents2022: number;
  };

  genderDisparity: {
    ruralFemale: number;
    urbanFemale: number;
    ruralMale: number;
    urbanMale: number;
  };

  keyDrivers: string[];
}

// ==========================================
// NRI REMITTANCE DATA
// ==========================================

export interface NRIRemittanceData {
  totalNRIPopulation: number;
  nriVoterRegistration: number;
  remittancePercentGDP: number;
  electionCycleContribution: string;

  majorCountries: {
    country: string;
    nriPopulation: number;
    relevance: string;
  }[];

  doaba: {
    description: string;
    householdsWithNRI: number;
    villages: string;
  };

  politicalImpact: {
    fundingPerElection: string;
    partyNRIWings: string[];
    voterInfluence: string;
  };
}

// ==========================================
// JAT SIKH BEHAVIOR DATA
// ==========================================

export interface JatSikhBehaviorData {
  populationPercent: number;
  landOwnership: string;
  regionalConcentration: {
    malwa: number;
    majha: number;
    doaba: number;
  };

  economicStatus: {
    avgLandholding: string;
    debtCrisis: string;
    farmerSuicidePercent: number;
  };

  politicalHistory: {
    traditionalParty: string;
    shift2022: string;
    fragmentation2024: string;
  };

  keyIssues: {
    issue: string;
    impact: string;
  }[];

  voteSwingPotential: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// MAJHA SPECIFIC DATA
// ==========================================

export interface MajhaData {
  assemblySeats: number;
  lokSabhaSeats: number;
  districts: string[];
  scPopulation: number;
  borderSecurityIncidents: {
    date: string;
    location: string;
    description: string;
  }[];
  tarnTaranBypoll2025: {
    winner: string;
    party: string;
    votes: number;
    margin: number;
    runnerUp: string;
    runnerUpVotes: number;
  };
  congressFactionalism: {
    leaders: string[];
    issue: string;
    highCommandIntervention: string;
  };
  parties: {
    party: string;
    seats2022: number;
    status: string;
  }[];
}

// ==========================================
// DOABA SPECIFIC DATA
// ==========================================

export interface DoabaData {
  assemblySeats: number;
  scPopulation: number;
  reservedSeats: number;
  nriBelt: boolean;
  districts: string[];
  literacy: string;
  keyCharacteristics: string[];

  localBody2025: {
    district: string;
    congress: number;
    aap: number;
  }[];

  casteComposition: {
    caste: string;
    percent: number;
  }[];

  nriImpact: {
    householdsWithNRI: string;
    majorDestinations: string[];
  };
}

// ==========================================
// MALWA SPECIFIC DATA
// ==========================================

export interface MalwaData {
  assemblySeats: number;
  lokSabhaSeats: number;
  districts: string[];
  farmerSuicidePercent: number;
  avgFarmDebt: string;

  stateFiscalRank: number;
  youthUnemployment: number;

  aap2022Sweep: number;
  congress2024LS: number;

  keyDistricts: {
    district: string;
    significance: string;
    currentRepresentation: string;
  }[];

  agriculturalProfile: {
    paddyLandPercent: number;
    wheatLandPercent: number;
    problem: string;
  };
}

// ==========================================
// POLITICAL ANATOMY KPI DATA STRUCTURE
// ==========================================

export interface PoliticalAnatomyKPI {
  // Metadata
  reportDate: string;
  researchDate: string;
  classification: string;
  confidence: string;

  // Three-Body System
  threeBodySystem: ThreeBodySystem;

  // Regional Data
  regionalStatuses: RegionalPoliticalStatus[];

  // Caste Ecosystem
  casteEcosystem: CasteEcosystemData;

  // Farmer Crisis
  farmerCrisis: FarmerCrisisData;

  // Youth Unemployment
  youthUnemployment: YouthUnemploymentData;

  // NRI Remittance
  nriRemittance: NRIRemittanceData;

  // Jat Sikh Behavior
  jatSikhBehavior: JatSikhBehaviorData;

  // Regional Specific Data
  majhaData: MajhaData;
  doabaData: DoabaData;
  malwaData: MalwaData;

  // Key Data Gaps
  dataGaps: {
    item: string;
    status: string;
  }[];

  // Sources
  sources: {
    id: number;
    title: string;
    source: string;
    date?: string;
  }[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const PUNJAB_TOTAL_SEATS = 117;
export const MAJHA_SEATS = 25;
export const DOABA_SEATS = 23;
export const MALWA_SEATS = 69;

export const MAJHA_PERCENT = 21;
export const DOABA_PERCENT = 20;
export const MALWA_PERCENT = 59;

export const SC_POPULATION_PUNJAB = 31.9;
export const JAT_SIKH_POPULATION = 21;
export const OBC_POPULATION = 31;

export const FARMER_SUICIDE_OFFICIAL_2025 = 2809;
export const FARMER_SUICIDE_ESTIMATED = 7000;
export const TOTAL_FARM_DEBT_LAKH_CRORE = 3;

export const YOUTH_UNEMPLOYMENT_PUNJAB = 19.3;
export const YOUTH_UNEMPLOYMENT_NATIONAL = 14.3;

export const NRI_REMITTANCE_GDP_PERCENT = 30;
export const NRI_POPULATION_APPROX = 700000;
