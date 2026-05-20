// Border Zone Types for Punjab Congress 2027 Election Dashboard
// Derived from: MP1-foundational/geography/border-zone.md
// Research Date: 19 May 2026

// ==========================================
// BORDER OVERVIEW
// ==========================================

/**
 * Punjab International Border overview
 */
export interface BorderOverview {
  totalLength: {
    international: number; // 553 km
    landBorder: number; // 518 km
    riverine: number; // 33 km
  };
  fencing: {
    fenced: number; // 461 km
    unfenced: number; // 92 km
  };
  riverineVulnerablePoints: number; // 60 identified by BSF
  districts: BorderDistrict[];
  bsfCommand: {
    headquarters: string; // Jalandhar
    westernCommand: string; // Chandigarh (covers Punjab, J&K, Rajasthan, Gujarat)
  };
  floodDamage2025: {
    fencingDestroyed: string; // "80 km"
    borderOutpostsSubmerged: string; // "nearly 100"
  };
}

export interface BorderDistrict {
  name: "Pathankot" | "Gurdaspur" | "Amritsar" | "Tarn Taran" | "Ferozepur" | "Fazilka";
  region: "Malwa" | "Majha";
  keyACs: string[];
}

// ==========================================
// BORDER SECURITY INFRASTRUCTURE
// ==========================================

/**
 * Border Security Infrastructure and Technology
 */
export interface BorderSecurityInfrastructure {
  fence: {
    builtYears: string; // "1988-1993"
    age: string; // "nearly 40 years old"
    status: string; // "poor physical condition"
  };
  technologies: TechnologySystem[];
  bsfDeployment: BSFDeployment;
  recoveries2025: BSARecoveries2025;
}

export interface TechnologySystem {
  name: string;
  function: string;
  deployment?: string;
  yearActivated?: string;
}

export interface BSFDeployment {
  mandate: string;
  totalBattalions: number; // 193
  totalPersonnel: string; // "2.76 lakh"
  additionalJammu2025: number; // 2 battalions
}

export interface BSARecoveries2025 {
  dronesRecovered: number; // 278
  heroinSeized: string; // "380+ kg"
  weaponsSeized: string; // "200+"
  pakistaniIntrudersApprehended: number; // 53
}

// ==========================================
// CROSS-BORDER POINTS
// ==========================================

/**
 * Cross-Border Points and Trade Corridors
 */
export interface CrossBorderPoint {
  name: string;
  type: "ICP" | "Corridor" | "BorderPost" | "RetreatCeremony";
  location: string;
  district: string;
  status: "operational" | "closed" | "suspended" | "limited";
}

export interface AttariWagahICP extends CrossBorderPoint {
  type: "ICP";
  inaugurated: string; // "April 2012"
  area: string; // "120 acres"
  access: string; // "NH-1"
  tradeHistory: TradeHistory;
  closureInfo: ClosureInfo;
  dailyCeremony: string;
}

export interface TradeHistory {
  peak: {
    value: string; // "Rs 4,370.78 crore"
    year: string; // "2018-19"
  };
  postPulwama: {
    value: string; // "Rs 2,257.55 crore"
    year: string; // "2022-23"
    reason: string; // "India imposed 200% duty on Pakistani goods"
  };
  recovery: {
    value: string; // "Rs 3,886.53 crore"
    year: string; // "2023-24"
    note: string; // "highest in five years"
  };
  postPahalgam2025: {
    status: string; // "closed"
    tradeHalted: string; // "Rs 3,886 crore"
    employmentImpact: string; // "thousands in Amritsar/Attari"
  };
  exports: string[];
  imports: string[];
  bilateralPotential: {
    current: string; // "~$2 billion"
    potential: string; // "$37 billion"
  };
}

export interface ClosureInfo {
  date: string; // "April 2025"
  reason: string; // "Post-Pahalgam"
}

export interface KartarpurCorridor extends CrossBorderPoint {
  type: "Corridor";
  inaugurated?: string;
  length: string; // "4.1 km"
  opened: string; // "November 2019"
  connectivity: string; // "Dera Baba Nanak to Gurdwara Darbar Sahib Kartarpur"
  statusHistory: CorridorStatus[];
  emotionalSignificance: string;
  politicalLeverage: string;
}

export interface CorridorStatus {
  period: string;
  status: "operational" | "closed" | "suspended" | "limited";
  note?: string;
}

export interface HussainiwalaPost extends CrossBorderPoint {
  type: "BorderPost" | "RetreatCeremony";
  historical: string; // "memorials to Bhagat Singh, Rajguru, Sukhdev"
  cremationSite: string;
}

export interface SulemankiPost extends CrossBorderPoint {
  type: "BorderPost";
  river: string; // "Sutlej"
  note: string; // "historic crossing point"
}

// ==========================================
// DRUG TRAFFICKING
// ==========================================

/**
 * Drug Trafficking Data and Drone Smuggling Statistics
 */
export interface DrugTraffickingData {
  droneSeizures: DroneSeizure[];
  primaryRoute: string; // "Afghanistan -> Pakistan -> Punjab border -> Indian distribution"
  hotspotDistricts: string[];
  drugTypes: DrugType[];
  traffickingMethods: string[];
}

export interface DroneSeizure {
  year: number;
  cases: number;
  source: string;
  note?: string;
}

export interface DrugType {
  type: string;
  note?: string;
}

// ==========================================
// BORDER FARMER IMPACT
// ==========================================

/**
 * Border Farmer Population and Land Impact
 */
export interface BorderFarmerImpact {
  landBeyondFence: {
    total: string; // "~50,000 acres"
    privateFarmland: string; // "21,500 acres"
    agriculturalLand: string; // "~22,000 acres"
    governmentCommonLand: string; // "remaining"
  };
  farmingFamilies: number; // ~12,000
  villages: {
    total: string; // "220 villages"
    amritsarUnderBADP: number; // 360
  };
  restrictions: FarmerRestrictions;
  compensation: CompensationDetails;
  fenceRealignment: FenceRealignmentProposal;
}

export interface FarmerRestrictions {
  accessHours: {
    winter: string; // "9 AM to 4 PM"
    summer: string; // "6 PM"
  };
  kisanID: string; // "mandatory"
  escortRequirement: string; // "2-4 BSF Kisan Guards per tractor/group"
  cropHeightLimit: string; // "3 feet maximum"
  prohibited: string[]; // "overnight stay in fields"
  effectiveFarmingDays: number; // 200 (reduced from ~280)
  cropDamage: {
    cause: string; // "wild boar, nilgai from Pakistan side"
    extent: string; // "up to 50% of harvest"
  };
}

export interface CompensationDetails {
  committee: string; // "Kapoor Committee"
  yearFormed: number; // 1986
  initialRate: string; // "Rs 2,500/acre (1988)"
  currentRate: string; // "Rs 10,000/acre (2015)"
  courtOrder: string; // "Punjab & Haryana High Court, Justice Surya Kant bench"
  disbursementIssues: string[];
  status: string; // "2023-2024 compensation not disbursed in many areas as of 2026"
}

export interface FenceRealignmentProposal {
  announcement: {
    date: string; // "January 2026"
    cm: string; // "Bhagwant Mann"
    status: string; // "Centre agreed in principle"
  };
  landRestoration: string; // "~45,000 acres"
  farmersPosition: {
    willingDistance: string; // "up to 300 metres from border"
    permanentAcquisitionRate: string; // "Rs 1 crore per acre"
  };
  bsfPosition: string; // "supports advancement where feasible"
  challenges: string[];
  politicalTrustDeficit: string;
}

// ==========================================
// BORDER CONSTITUENCIES
// ==========================================

/**
 * Assembly Constituencies in Border Districts
 */
export interface BorderConstituencies {
  totalACs: number; // 28-30 out of 117
  totalDistricts: number; // 6
  byDistrict: BorderDistrictACs[];
  keyElectoralIssues: ElectoralIssue[];
}

export interface BorderDistrictACs {
  district: string;
  totalACs: number;
  borderACs: string[];
}

export interface ElectoralIssue {
  priority: number;
  issue: string;
  affectedPopulation: string;
  politicalRelevance: string;
}

// ==========================================
// STRATEGIC SIGNIFICANCE
// ==========================================

/**
 * Strategic Significance for Congress 2027
 */
export interface CongressBorderStrategy {
  positioning: string; // "Party of border area development and farmer welfare"
  keyPromises: StrategyPromise[];
  voterCoalition: string;
  attackVectors: {
    againstAAP: string[];
    againstBJP: string[];
  };
}

export interface StrategyPromise {
  number: number;
  promise: string;
  historicalContext: string;
}

// ==========================================
// DATA SOURCES
// ==========================================

export interface BorderZoneDataSource {
  source: string;
  date: string;
  publication?: string;
}

export const BORDER_ZONE_DATA_SOURCES: BorderZoneDataSource[] = [
  { source: "BSF Western Command ADG press briefing", date: "December 2025", publication: "Times of India" },
  { source: "NCB Annual Report 2024", date: "September 2025", publication: "The Hindu" },
  { source: "Punjab Border Fence Realignment analysis", date: "2026", publication: "Sanskriti IAS" },
  { source: "Border village farmers navigate conflict and survival", date: "May 2025", publication: "Mongabay India" },
  { source: "Analyzing the plight of Punjab's border farmers", date: "April 2026", publication: "IAS Gyan" },
  { source: "Attari border closure to hit Rs 3,800 crore trade", date: "April 2025", publication: "Indian Express" },
  { source: "BSF, Home Ministry consider moving border fence closer", date: "December 2023", publication: "Swarajya" },
  { source: "BSF laser walls deployment", date: "April 2016", publication: "PIB / HuffPost India" },
  { source: "India-Pakistan trade data", date: "2025-26", publication: "Land Ports Authority of India / OEC World" },
  { source: "CM Mann fence realignment announcement", date: "April 2026", publication: "Hindustan Times" },
];

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type BorderRegion = "Malwa" | "Majha";

export type BorderDistrictName = "Pathankot" | "Gurdaspur" | "Amritsar" | "Tarn Taran" | "Ferozepur" | "Fazilka";

export const BORDER_DISTRICTS: BorderDistrictName[] = [
  "Pathankot",
  "Gurdaspur",
  "Amritsar",
  "Tarn Taran",
  "Ferozepur",
  "Fazilka"
];

export const BORDER_LENGTH_TOTAL = 553; // km
export const BORDER_LENGTH_LAND = 518; // km
export const BORDER_LENGTH_RIVERINE = 33; // km
export const BORDER_FENCED = 461; // km
export const BORDER_UNFENCED = 92; // km

export const BORDER_FARMING_FAMILIES = 12000;
export const BORDER_LAND_BEYOND_FENCE = "~50,000 acres";
export const BORDER_VILLAGES = 220;
export const BORDER_DISTRICTS_COUNT = 6;
export const BORDER_ACS_COUNT = "28-30"; // out of 117

// ==========================================
// KPI DATA INTERFACE
// ==========================================

export interface BorderZoneKPI {
  overview: BorderOverview;
  security: BorderSecurityInfrastructure;
  crossBorderPoints: CrossBorderPoint[];
  drugTrafficking: DrugTraffickingData;
  farmerImpact: BorderFarmerImpact;
  constituencies: BorderConstituencies;
  strategy: CongressBorderStrategy;
  dataSources: BorderZoneDataSource[];
  dataFreshness: {
    status: string;
    note: string;
  };
}
