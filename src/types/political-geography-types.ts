// Political Geography Types for Punjab
// Derived from: MP1-foundational/geography/political-geography.md

import type { Region } from "./kpi-types";

// ==========================================
// STATE OVERVIEW
// ==========================================

export interface PunjabStateProfile {
  totalArea: number; // sq km
  totalPopulation2011: number;
  estimatedPopulation2026: number;
  populationDensity2011: number; // per sq km
  urbanPopulationPercent: number;
  ruralPopulationPercent: number;
  totalElectors2022: number;
  maleElectors: number;
  femaleElectors: number;
  transgenderElectors: number;
  voterTurnout2022: number; // percentage
  internationalBorder: string;
  neighboringStates: string;
  capital: string;
  researchDate: string;
  classification: string;
}

// ==========================================
// REGION TYPES
// ==========================================

export interface RegionProfile {
  name: Region;
  meaning: string;
  rivers: string;
  districts: string[];
  districtCount: number;
  totalACs: number;
  totalElectorate: number;
  avgConstituencySize: number;
  keyCharacteristics: string;
}

// ==========================================
// DISTRICT TYPES
// ==========================================

export interface DistrictProfile {
  name: string;
  region: Region;
  areaSqKm: number;
  population2011: number;
  density: number; // per sq km
  acCount: number;
  acNumbers: number[];
}

// ==========================================
// ASSEMBLY CONSTITUENCY TYPES
// ==========================================

export interface AssemblyConstituency {
  acNumber: number;
  acName: string;
  district: string;
  region: Region;
  reservation: "General" | "SC";
  lokSabha: string;
  electorate2022: number;
  classification: GeographicClassification;
}

export type GeographicClassification = "Urban" | "Semi-Urban" | "Rural" | "Rural (Border)";

// ==========================================
// LOK SABHA MAPPING
// ==========================================

export interface LokSabhaConstituency {
  name: string;
  acNumbers: number[];
  acCount: number;
}

// ==========================================
// SC RESERVED CONSTITUENCIES
// ==========================================

export interface SCReservedData {
  totalSCSeats: number;
  scSeatNumbers: number[];
  byRegion: {
    region: Region;
    scSeats: number;
    totalSeats: number;
  }[];
}

// ==========================================
// URBAN/RURAL CLASSIFICATION
// ==========================================

export interface UrbanRuralSummary {
  type: GeographicClassification;
  acCount: number;
  approxElectors: number;
  strategicImplication: string;
}

export interface UrbanACList {
  acNumber: number;
  acName: string;
}

// ==========================================
// CAMPAIGN CLUSTERS
// ==========================================

export interface CampaignCluster {
  name: string;
  acNumbers: number[];
  acNames: string[];
  character: string;
  recommendedDays: number;
}

// ==========================================
// TRAVEL ROUTES
// ==========================================

export interface TravelRoute {
  route: string;
  distanceKm: number;
  travelTimeHours: string;
  notes: string;
}

// ==========================================
// POLLING STATION DATA
// ==========================================

export interface PollingStationData {
  totalStations2022: number;
  totalElectors: number;
  avgElectorsPerStation: number;
  eciNormMaxPerStation: number;
  avgStationsPerAC: number;
}

export interface AccessibilityChallenge {
  region: Region;
  challengeAreas: string;
  notes: string;
}

// ==========================================
// BORDER CONSTITUENCIES
// ==========================================

export interface BorderConstituency {
  acNumber: number;
  acName: string;
  district: string;
  proximity: string;
  specialRequirements: string;
}

// ==========================================
// GIS DATA
// ==========================================

export interface GISSource {
  source: string;
  url: string;
  format: string;
  quality: string;
}

// ==========================================
// DATA GAPS
// ==========================================

export interface DataGap {
  item: string;
  status: "NOT_COLLECTED" | "NOT_AVAILABLE" | "PARTIAL" | "VERIFICATION_NEEDED";
  priority: "HIGH" | "MEDIUM" | "LOW";
  notes?: string;
}

// ==========================================
// STRATEGIC INSIGHTS
// ==========================================

export interface StrategicInsight {
  title: string;
  description: string;
  targetRegions?: Region[];
  actionItems: string[];
}
