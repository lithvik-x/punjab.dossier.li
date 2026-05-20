// @ts-nocheck
// Infrastructure Utility Functions and Constants
// Derived from: research-M2/MP1-foundational/geography/infra-agri-industrial.md

import type {
  DistrictName,
  InfrastructureCategory,
} from "@/types/infra-agri-industrial-types";
import {
  districtMandis,
  msmeClusters,
  industrialEstates,
  kvkData,
  coldStorageData,
  veterinaryData,
  sezData,
  itParks,
  agriculturalIssues,
  industrialIssues,
} from "@/lib/infra-agri-industrial-data";

// ==========================================
// DISTRICT LOOKUP UTILITIES
// ==========================================

/**
 * Get all mandis for a specific district
 */
export function getMandisByDistrict(district: string): string[] {
  const found = districtMandis.find(
    (d) => d.district.toLowerCase() === district.toLowerCase()
  );
  return found ? found.majorMandis : [];
}

/**
 * Get districts covered by KVKs
 */
export function getKVKcoveredDistricts(): string[] {
  return kvkData.districtsCovered;
}

/**
 * Check if a district has KVK coverage
 */
export function hasKVKcoverage(district: string): boolean {
  return kvkData.districtsCovered.some(
    (d) => d.toLowerCase() === district.toLowerCase()
  );
}

// ==========================================
// INFRASTRUCTURE CATEGORY UTILITIES
// ==========================================

/**
 * Get MSME clusters by location
 */
export function getMSMEClustersByLocation(location: string): typeof msmeClusters {
  return msmeClusters.filter(
    (c) => c.location.toLowerCase().includes(location.toLowerCase())
  );
}

/**
 * Get MSME clusters by type
 */
export function getMSMEClustersByType(type: string): typeof msmeClusters {
  return msmeClusters.filter(
    (c) => c.clusterType.toLowerCase().includes(type.toLowerCase())
  );
}

/**
 * Get industrial estates by district
 */
export function getIndustrialEstatesByDistrict(
  district: string
): typeof industrialEstates {
  return industrialEstates.filter(
    (e) => e.district.toLowerCase() === district.toLowerCase()
  );
}

/**
 * Get IT parks by location
 */
export function getITParksByLocation(location: string): typeof itParks {
  return itParks.filter(
    (p) => p.location.toLowerCase().includes(location.toLowerCase())
  );
}

/**
 * Get SEZs by status
 */
export function getSEZsByStatus(
  status: "Operational" | "Notified" | "Non-operational" | "De-notified"
): typeof sezData {
  return sezData.filter((s) => s.status === status);
}

// ==========================================
// COLD STORAGE UTILITIES
// ==========================================

/**
 * Get cold storage hubs by region
 */
export function getColdStorageHubsByRegion(region: string): typeof coldStorageData.keyHubs {
  return coldStorageData.keyHubs.filter((h) =>
    h.region.toLowerCase().includes(region.toLowerCase())
  );
}

/**
 * Get cold storage hub details
 */
export function getColdStorageHubDetails(region: string): string {
  const hub = coldStorageData.keyHubs.find((h) =>
    h.region.toLowerCase().includes(region.toLowerCase())
  );
  return hub ? hub.focus : "Information not available";
}

// ==========================================
// VETERINARY UTILITIES
// ==========================================

/**
 * Get total veterinary facilities count
 */
export function getTotalVeterinaryFacilities(): number {
  return (
    veterinaryData.civilVeterinaryHospitals +
    veterinaryData.civilVeterinaryDispensaries +
    veterinaryData.veterinaryPolyclinics
  );
}

// ==========================================
// STRATEGIC ISSUES UTILITIES
// ==========================================

/**
 * Get agricultural issues for Congress
 */
export function getAgriculturalIssues(): typeof agriculturalIssues {
  return agriculturalIssues;
}

/**
 * Get industrial issues for Congress
 */
export function getIndustrialIssues(): typeof industrialIssues {
  return industrialIssues;
}

/**
 * Get issues with Congress promises
 */
export function getIssuesWithPromises(): {
  agricultural: typeof agriculturalIssues;
  industrial: typeof industrialIssues;
} {
  return {
    agricultural: agriculturalIssues.filter((i) => i.congressPromise),
    industrial: industrialIssues.filter((i) => i.congressPromise),
  };
}

// ==========================================
// CONSTANTS
// ==========================================

export const ALL_DISTRICTS: DistrictName[] = [
  "Ludhiana",
  "Amritsar",
  "Jalandhar",
  "Bathinda",
  "Sangruri",
  "Patiala",
  "Faridkot",
  "Fazilka",
  "Muktsar",
  "Mansa",
  "Pathankot",
  "Gurdaspur",
  "Hoshiarpur",
  "Kapurthala",
  "Rupnagar",
  "SAS Nagar",
  "Fatehgarh Sahib",
  "Tarn Taran",
  "Nawanshahr",
  "Barnala",
  "Ferozepur",
  "Moga",
];

export const INFRASTRUCTURE_CATEGORIES: {
  id: InfrastructureCategory;
  label: string;
  description: string;
}[] = [
  { id: "mandi", label: "Mandis/APMC", description: "Agricultural marketing infrastructure" },
  { id: "cold_storage", label: "Cold Storage", description: "Cold chain and warehousing" },
  { id: "kvk", label: "KVKs", description: "Krishi Vigyan Kendras" },
  { id: "veterinary", label: "Veterinary", description: "Animal husbandry infrastructure" },
  { id: "seed_fertilizer", label: "Seed & Fertilizer", description: "Seed farms and fertilizer distribution" },
  { id: "industrial_estate", label: "Industrial Estates", description: "PSIEC focal points and industrial areas" },
  { id: "sez", label: "SEZs", description: "Special Economic Zones" },
  { id: "msme_cluster", label: "MSME Clusters", description: "Micro, small and medium enterprise clusters" },
  { id: "it_park", label: "IT Parks", description: "Information technology parks" },
  { id: "textile", label: "Textile", description: "Textile parks and clusters" },
  { id: "food_processing", label: "Food Processing", description: "Food processing infrastructure" },
];

export const MSP_TREND = [
  { year: "Rabi 2023-24", msp: 2125 },
  { year: "Rabi 2024-25", msp: 2275 },
  { year: "Rabi 2025-26", msp: 2425 },
];

export const REGIONS = ["Malwa", "Majha", "Doaba"] as const;

export const PSIEC_MANAGED_DISTRICTS = [
  "Ludhiana",
  "Jalandhar",
  "Amritsar",
  "Bathinda",
  "Mohali (SAS Nagar)",
  "Patiala",
  "Rajpura",
  "Pathankot",
  "Hoshiarpur",
  "Batala (Gurdaspur)",
  "Dera Bassi",
  "Malout",
  "Abohar",
];

/**
 * Major industrial hubs for Congress strategy
 */
export const MAJOR_INDUSTRIAL_HUBS = {
  LUDHIANA: {
    name: "Ludhiana",
    significance: "Industrial capital of Punjab",
    keySectors: ["Hosiery", "Bicycle parts", "Auto components", "Textiles"],
  },
  JALANDHAR: {
    name: "Jalandhar",
    significance: "Sports goods and hand tools hub",
    keySectors: ["Sports goods", "Hand tools", "Rubber goods", "Surgical instruments"],
  },
  MOHALI: {
    name: "Mohali (SAS Nagar)",
    significance: "IT and emerging tech hub",
    keySectors: ["IT/ITeS", "Pharma", "Electronics"],
  },
  BATHINDA: {
    name: "Bathinda",
    significance: "Energy and cotton hub",
    keySectors: ["Thermal power", "Refinery (HMEL)", "Cotton"],
  },
  MANDI_GOBINDPUR: {
    name: "Mandi Gobindgarh",
    significance: "Steel Town of Punjab",
    keySectors: ["Steel re-rolling", "Forgings"],
  },
};

/**
 * Border districts with industrial lag
 */
export const BORDER_DISTRICTS_INDUSTRIAL_LAG = [
  "Pathankot",
  "Gurdaspur",
  "Tarn Taran",
  "Fazilka",
  "Muktsar",
];

/**
 * Malwa cotton belt districts
 */
export const MALWA_COTTON_BELT = [
  "Bathinda",
  "Muktsar",
  "Mansa",
  "Sangrur",
  "Fazilka",
  "Ferozepur",
  "Faridkot",
];
