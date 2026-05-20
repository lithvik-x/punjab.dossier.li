// Governance - Agrarian Distress Types for Punjab 2027
// Derived from: research-M2/MP1-foundational/governance/agrarian-distress.md
// Research Date: 20 May 2026 | Data Currency: 2025-2026

// ==========================================
// FARMER DEBT & SUICIDES
// ==========================================

/**
 * Farmer Suicide Data
 */
export interface FarmerSuicideData {
  year: number;
  recordedSuicides: number;
  cultivators?: number;
  labourers?: number;
  source: string;
}

export interface FarmerSuicideStats {
  data: FarmerSuicideData[];
  peakYear: {
    year: number;
    rate: number; // percentage
    note: string;
  };
  national2022: {
    total: number;
    dailyAverage: number;
    source: string;
  };
  cumulative2023To2026: number;
  verificationNeeded: string[];
}

/**
 * Farmer Debt Data
 */
export interface FarmerDebtData {
  averageDebtPerFarmer: string; // VERIFICATION_NEEDED
  keyDriver: {
    informalCreditShare: number; // percentage
    note: string;
    source: string;
  };
  flood2025: {
    damagedAcres: number; // lakh acres
    reliefPerAcre: number; // Rs
    reliefType: string; // compensation not debt relief
  };
}

// ==========================================
// MSP PROCUREMENT
// ==========================================

/**
 * MSP Procurement Data
 */
export interface MSPProcurementData {
  wheat2026: {
    procured: number; // lakh tonnes
    target: number; // lakh tonnes
    exceeded: boolean;
    source: string;
  };
  national: {
    wheatProcured: number; // LMT
    disbursed: number; // Rs crore
  };
  mspRates: {
    wheat: number; // Rs per quintal (VERIFICATION_NEEDED)
    paddy: number; // Rs per quintal
    moistureCap?: number; // percentage for paddy
  };
  structuralIssues: string[];
  legalGuaranteeDemand: string;
}

// ==========================================
// GROUNDWATER CRISIS
// ==========================================

/**
 * Groundwater Crisis Data
 */
export interface GroundwaterCrisis {
  declineRate: {
    worstArea: number; // cm/year
    averageAnnual: string;
  };
  overExploitedBlocks: {
    percentage: number;
    source: string;
  };
  waterExhaustionTimeline: {
    year: number;
    source: string;
  };
  primaryDriver: string;
  malwaCancer: {
    ratePer100k: string; // 90-110 per 100,000
    linkedContaminants: string[];
    source: string;
  };
}

// ==========================================
// STUBBLE BURNING
// ==========================================

/**
 * Stubble Burning Data
 */
export interface StubbleBurningData {
  fires2024_25: {
    count: number;
    changeFrom2023: number; // percentage decrease
    source: string;
  };
  historicalData: {
    year: number;
    fires: number;
  }[];
  wheatSeason2025: {
    events: number;
    source: string;
  };
  paddySeason2025: {
    events: number;
    dateRange: string;
    hotspotDistricts: {
      district: string;
      incidents: number;
    }[];
  };
  farmerDemands: {
    bkuUgrahan: {
      demand: string;
      amount: number; // Rs per acre
    };
    skm: {
      demand: string;
      amount: number; // Rs per quintal
    };
  };
  punitiveMeasures: {
    firSection: string;
    environmentalCompensation: number; // Rs lakh
    landRecordPenalty: string;
  };
}

// ==========================================
// FARMER PROTESTS
// ==========================================

/**
 * Farmer Protest Event
 */
export interface FarmerProtestEvent {
  date: string;
  event: string;
  demands: string[];
  scale?: string;
  outcome?: string;
}

/**
 * Land Pooling Policy
 */
export interface LandPoolingPolicy {
  scope: {
    acres: number;
    cities: number;
  };
  governmentOffer: {
    return: string;
    annualCompensation: string;
  };
  farmerRejection: {
    label: string;
    concern: string;
  };
  politicalAlignment: string[]; // Parties opposing
  result: string;
  aapInternalCracks: string[];
}

// ==========================================
// FARM DEBT WAIVERS
// ==========================================

/**
 * Farm Debt Waiver Data
 */
export interface FarmDebtWaiver {
  2017: {
    announcement: string;
    waiverAmount: number; // Rs crore
    additionalAllocation?: number; // Rs crore
    phase2RepaymentResume: string;
    impact: string;
  };
  currentAAP: {
    statement: string;
    date: string;
    formalWaiver: string; // "Not announced as of May 2026"
  };
  farmerDemands2027: string[];
}

// ==========================================
// POLITICAL POSITIONING
// ==========================================

/**
 * Party Farmer Issue Positioning
 */
export interface PartyPositioning {
  congress: {
    historicalStrength: string;
    delivered2017: string;
    current2025_26: string;
    designatedLeaders: string[];
    risk: string;
  };
  aap: {
    rise2022: string;
    currentReality: string;
    farmerPerception: string;
    strength: string[];
    weakness: string[];
  };
  bjp: {
    stance2020_21: string;
    pivot2025: string;
    leaders: string[];
    risk: string;
  };
  sad: {
    stance2020_21: string;
    currentPosition: string;
    dilemma: string;
  };
}

// ==========================================
// REGIONAL DISTRIBUTION
// ==========================================

/**
 * Regional Distress Level
 */
export interface RegionalDistress {
  region: string;
  districts: string[];
  distressLevel: "HIGHEST" | "HIGH" | "MODERATE" | "LOW";
  keyIssues: string[];
}

/**
 * Regional Distress Data
 */
export interface RegionalDistressData {
  mostAffected: RegionalDistress[];
  leastAffected: {
    region: string;
    districts: string[];
    note: string;
  };
}

// ==========================================
// POLICY RECOMMENDATIONS
// ==========================================

/**
 * Policy Recommendation
 */
export interface PolicyRecommendation {
  tier: "top" | "second" | "third";
  priority: number;
  title: string;
  description: string;
  voteImpact?: string;
}

// ==========================================
// STRATEGIC RECOMMENDATIONS
// ==========================================

/**
 * Strategic Recommendation for Congress
 */
export interface StrategicRecommendation {
  number: number;
  title: string;
  description: string;
}

// ==========================================
// DATA GAPS
// ==========================================

/**
 * Data Verification Status
 */
export interface DataVerificationStatus {
  dataPoint: string;
  status: "VERIFICATION_NEEDED" | "NOT_FOUND" | "VERIFIED";
  note?: string;
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

export interface AgrarianDistressKPI {
  // Metadata
  reportDate: string;
  megaPillar: string;
  domain: string;
  taskId: string;
  status: string;
  source: string;
  confidence: string;

  // Key Data Sections
  farmerDebt: FarmerDebtData;
  farmerSuicides: FarmerSuicideStats;
  mspProcurement: MSPProcurementData;
  groundwater: GroundwaterCrisis;
  stubbleBurning: StubbleBurningData;
  protests: {
    recentEvents: FarmerProtestEvent[];
    may2026: {
      event: string;
      demands: string[];
      outcome: string;
    };
    landPooling: LandPoolingPolicy;
  };
  debtWaivers: FarmDebtWaiver;
  politicalPositioning: PartyPositioning;
  regionalDistress: RegionalDistressData;
  policyRecommendations: {
    topTier: PolicyRecommendation[];
    secondTier: PolicyRecommendation[];
    thirdTier: PolicyRecommendation[];
  };
  strategicRecommendations: StrategicRecommendation[];
  dataGaps: DataVerificationStatus[];
  sources: SourceCitation[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type RegionName = "Malwa" | "Majha" | "Doaba" | "PUADH";
export type DistressLevel = "HIGHEST" | "HIGH" | "MODERATE" | "LOW";
export type VerificationStatus = "VERIFICATION_NEEDED" | "NOT_FOUND" | "VERIFIED";

export const MALWA_DISTRICTS = [
  "Sangrur",
  "Mansa",
  "Bathinda",
  "Barnala",
  "Faridkot",
  "Moga",
] as const;

export const MAJHA_DISTRICTS = [
  "Amritsar",
  "Tarn Taran",
  "Gurdaspur",
] as const;

export const DOABA_DISTRICTS = [
  "Hoshiarpur",
  "Kapurthala",
  "Shaheed Bhagat Singh Nagar",
] as const;

export const FARMER_UNIONS = [
  "BKU Ugrahan",
  "BKU Lakhowal",
  "Samyukt Kisan Morcha (SKM)",
  "Kisan Mazdoor Sangharsh Committee",
  "Lok Hit Mission",
] as const;

export const KEY_FARMER_LEADERS = [
  "Jagjit Singh Dalewal",
  "Sukhpal Singh Khaira",
  "Amrinder Singh Raja Warring",
] as const;

export const MSP_GUARANTEE_DEMAND = "Legal guarantee of MSP for all crops" as const;

export const DEBT_WAIVER_COST_2017 = 5900; // Rs crore
export const DEBT_WAIVER_ADDITIONAL_2021 = 1200; // Rs crore

export const FLOOD_RELIEF_2025 = 20000; // Rs per acre
export const STUBBLE_BURNING_FIRES_2024_25 = 10909;
export const STUBBLE_BURNING_DECREASE = 70; // percentage
