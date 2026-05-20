// Infrastructure Types for Punjab Agricultural & Industrial Data
// Derived from: research-M2/MP1-foundational/geography/infra-agri-industrial.md
// Research Date: 19 May 2026 | Data Currency: 2025-2026

// ==========================================
// AGRICULTURAL INFRASTRUCTURE
// ==========================================

/**
 * Mandi/APMC Regulated Markets Data
 */
export interface MandiAPMCData {
  principalMarketYards: number;
  subMarketYards: number;
  totalRegulatedMarkets: number;
  wheatProcurementCenters2026: number;
  eNAMLinkedAPMCs: "Partial coverage" | "Full coverage" | "Not linked";
  msrpData: MSRPData[];
}

export interface MSRPData {
  season: string;
  mspRsPerQuintal: number;
  procurementCenters: number;
  estimatedProcurement: string;
}

export interface DistrictMandi {
  district: string;
  majorMandis: string[];
}

export interface MandiProcurementStats {
  season: string;
  mspRsPerQuintal: number;
  procurementCenters: number;
  estimatedProcurementMT?: number;
  note: string;
}

/**
 * Cold Storage & Warehousing Data
 */
export interface ColdStorageData {
  totalColdStorages: number;
  coldStorageNote: string;
  fciGodowns: string;
  siloWarehouses: SiloWarehouse[];
  centralPoolStorageCapacity: string;
  keyHubs: ColdStorageHub[];
}

export interface SiloWarehouse {
  locations: number;
  note: string;
  year: number;
}

export interface ColdStorageHub {
  region: string;
  focus: string;
}

/**
 * Krishi Vigyan Kendra (KVK) Data
 */
export interface KVKData {
  totalKVKs: number;
  asOfYear: number;
  administrativeZone: string;
  zoneHQ: string;
  parentUniversities: string[];
  districtsCovered: string[];
}

/**
 * Veterinary Infrastructure Data
 */
export interface VeterinaryData {
  civilVeterinaryHospitals: number;
  civilVeterinaryDispensaries: number;
  veterinaryPolyclinics: number;
  mobileVeterinaryClinics: string;
  notes: string;
}

/**
 * Seed & Fertilizer Infrastructure
 */
export interface SeedFertilizerData {
  pauSeedFarms: string;
  stateSeedFarms: string;
  fertilizerDepots: string;
  soilTestingLabs: string;
}

// ==========================================
// INDUSTRIAL INFRASTRUCTURE
// ==========================================

/**
 * Industrial Estate/Focal Point Data
 */
export interface IndustrialEstate {
  district: string;
  focalPointEstate: string;
  keyIndustries: string;
  managedBy: string;
}

export interface PSIECComplex {
  name: string;
  location: string;
  area?: string;
}

/**
 * Special Economic Zone Data
 */
export interface SEZData {
  name: string;
  location: string;
  type: string;
  areaHectares: string;
  status: "Operational" | "Notified" | "Non-operational" | "De-notified" | "VERIFICATION_NEEDED";
}

/**
 * MSME Cluster Data
 */
export interface MSMECluster {
  clusterType: string;
  location: string;
  keyProducts: string;
  nationalSignificance: string;
  verificationStatus?: string;
}

/**
 * IT Park Data
 */
export interface ITPark {
  name: string;
  location: string;
  focus: string;
  status: "Operational" | "Developing" | "VERIFICATION_NEEDED";
}

/**
 * Textile Park/Cluster Data
 */
export interface TextileCluster {
  name: string;
  location: string;
  type: string;
  status: string;
}

/**
 * Food Processing Park Data
 */
export interface FoodProcessingPark {
  name: string;
  location: string;
  focus: string;
  status: string;
}

// ==========================================
// STRATEGIC OBSERVATIONS
// ==========================================

export interface AgriculturalIssue {
  issue: string;
  description: string;
  congressPromise?: string;
}

export interface IndustrialIssue {
  issue: string;
  description: string;
  congressPromise?: string;
}

// ==========================================
// INFRASTRUCTURE KPI AGGREGATE DATA
// ==========================================

export interface InfrastructureKPI {
  mandi: MandiAPMCData;
  coldStorage: ColdStorageData;
  kvk: KVKData;
  veterinary: VeterinaryData;
  seedFertilizer: SeedFertilizerData;
  industrialEstates: IndustrialEstate[];
  sezs: SEZData[];
  msmeClusters: MSMECluster[];
  itParks: ITPark[];
  textileClusters: TextileCluster[];
  foodProcessingParks: FoodProcessingPark[];
  psiecComplexes: PSIECComplex[];
  districtMandis: DistrictMandi[];
  agriculturalIssues: AgriculturalIssue[];
  industrialIssues: IndustrialIssue[];
}

// ==========================================
// CONSTANTS & ENUMS
// ==========================================

export type DistrictName =
  | "Ludhiana"
  | "Amritsar"
  | "Jalandhar"
  | "Bathinda"
  | "Sangrur"
  | "Patiala"
  | "Faridkot"
  | "Fazilka"
  | "Muktsar"
  | "Mansa"
  | "Pathankot"
  | "Gurdaspur"
  | "Hoshiarpur"
  | "Kapurthala"
  | "Rupnagar"
  | "SAS Nagar"
  | "Fatehgarh Sahib"
  | "Tarn Taran"
  | "Nawanshahr"
  | "Barnala"
  | "Ferozepur"
  | "Moga";

export type InfrastructureCategory =
  | "mandi"
  | "cold_storage"
  | "kvk"
  | "veterinary"
  | "seed_fertilizer"
  | "industrial_estate"
  | "sez"
  | "msme_cluster"
  | "it_park"
  | "textile"
  | "food_processing";

export const MSP_VALUES = {
  RABI_2023_24: 2125,
  RABI_2024_25: 2275,
  RABI_2025_26: 2425,
} as const;

export const PROCUREMENT_CENTERS = {
  RABI_2023_24: 1800,
  RABI_2024_25: 1900,
  RABI_2025_26: 2041,
} as const;

export const TOTAL_REGULATED_MARKETS = 431;
export const PRINCIPAL_MARKET_YARDS = 154;
export const SUB_MARKET_YARDS = 277;
export const TOTAL_KVKS = 22;
export const ESTIMATED_COLD_STORAGES = 200;
export const SILO_WAREHOUSES_UNDER_TENDER = 16;
export const CIVIL_VETERINARY_HOSPITALS_ESTIMATED = 140;
export const CIVIL_VETERINARY_DISPENSARIES_ESTIMATED = 1300;
export const VETERINARY_POLYCLINICS = 23;
export const WHEAT_PROCUREMENT_2026 = 2041;
export const ESTIMATED_PROCUREMENT_2026_MT = 29.7;
