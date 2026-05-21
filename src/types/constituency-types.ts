// Constituency Profile Types
// Derived from: MP1-foundational/geography/constituency-profile-cards.md

import type { Region } from "./kpi-types";
export type { Region } from "./kpi-types";

// ==========================================
// REGIONAL OVERVIEW
// ==========================================

export interface RegionalOverview {
  region: Region;
  districts: string[];
  assemblySeats: number;
  keyCharacteristics: string;
}

export interface DistrictReference {
  district: string;
  areaSqKm: number;
  population: number;
  density: number; // per sq km
  region: Region;
  border: boolean;
  rivers: string[];
}

// ==========================================
// CONSTITUENCY PROFILE
// ==========================================

export interface ConstituencyProfile {
  id: number;
  name: string;
  district: string;
  region: Region;
  reservation: "General" | "SC" | "ST";
  lokSabha: string;
  electorate2022: number;
  geographicType: string;
  borderProximity?: string;
  topographicZone?: string;
  riverProximity?: string[];
  floodRisk?: string;
  railConnectivity?: string;
  roadConnectivity?: string;
  airConnectivity?: string;
  cropPattern?: string[];
  industrialProfile?: string;
  keySites?: string[];
  notes?: string;
  institutional?: string;
}

// ==========================================
// REGIONAL DATA
// ==========================================

export interface RegionData {
  region: Region;
  totalSeats: number;
  districts: string[];
  borderDistricts: string[];
  avgElectorate: number;
  totalElectorate: number;
}

export interface CropZone {
  zone: string;
  districts: string[];
  dominantCrops: string[];
  constituencyImpact: string;
}

export interface BorderConstituencySummary {
  borderDistrict: string;
  borderConstituencies: string[];
  borderCharacter: string;
  totalBorderConstituencies: number;
}

export interface GeographicClassification {
  type: string;
  estimatedConstituencies: number;
  keyExamples: string[];
}

// ==========================================
// AGRICULTURAL ZONES
// ==========================================

export interface AgriculturalZone {
  zone: string;
  districts: string[];
  dominantCrops: string[];
  constituencyImpact: string;
  issues?: string[];
}

// ==========================================
// STRATEGIC INSIGHTS
// ==========================================

export interface StrategicInsight {
  priority: number;
  title: string;
  description: string;
  targetConstituencies?: string[];
  actionItems: string[];
}

// ==========================================
// DATA QUALITY
// ==========================================

export interface DataGap {
  dataPoint: string;
  status: "NOT_FOUND" | "VERIFICATION_NEEDED" | "PARTIAL" | "AVAILABLE";
  priority: "HIGH" | "MEDIUM" | "LOW";
  notes?: string;
}

export interface ConstituencyDataQuality {
  constituency: string;
  dataCompleteness: number; // 0-100%
  missingFields: string[];
  verificationNeeded: string[];
}

// ==========================================
// LOOKUP TYPES
// ==========================================

export interface ConstituencyLookup {
  byId: Map<number, ConstituencyProfile>;
  byDistrict: Map<string, ConstituencyProfile[]>;
  byRegion: Map<Region, ConstituencyProfile[]>;
  byReservation: Map<string, ConstituencyProfile[]>;
}

// ==========================================
// SUMMARY STATISTICS
// ==========================================

export interface ConstituencySummaryStats {
  totalConstituencies: number;
  totalElectorate: number;
  avgElectoratePerConstituency: number;
  byRegion: {
    region: Region;
    count: number;
    totalElectorate: number;
  }[];
  byReservation: {
    reservation: string;
    count: number;
  }[];
  borderCount: number;
  urbanCount: number;
  ruralCount: number;
  semiUrbanCount: number;
}

// ==========================================
// ELECTION INTELLIGENCE TYPES
// (From enhanced batch analysis)
// ==========================================

export type Party = "INC" | "AAP" | "SAD" | "BJP";
export type PriorityTier = "CRITICAL" | "HIGH" | "MEDIUM" | "RECOVERY";

export interface ElectionResult {
  year: number;
  winner: string;
  party: Party;
  votePercentage?: string;
  margin: string;
}

export interface CasteComposition {
  category: string;
  percentage: string;
}

export interface LocalIssue {
  issue: string;
  description: string;
}

export interface CandidateProfile {
  profile: string;
  caste?: string;
  keyQualities: string[];
}

export interface AttackLine {
  issue: string;
  message: string;
  audience: string;
}

export interface ElectionIntelligence {
  acId: string;
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  type: "General" | "SC" | "ST";
  lokSabha: string;
  electionResults: ElectionResult[];
  totalElectors?: string;
  voterTurnout?: string;
  casteComposition: CasteComposition[];
  topIssues: LocalIssue[];
  congressPosition: string;
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLine[];
  margin: number;
  party: Party;
  priorityTier: PriorityTier;
  dataGaps: string[];
  crossReferences: string[];
  strategicImplications: string[];
  visualizationRecommendations?: string[];
  uiComponentSpecs?: string[];
}

export interface BatchIntelligence {
  batchNumber: number;
  region: string;
  districts: string;
  constituencies: ElectionIntelligence[];
  executiveSummary: string;
}

export interface PriorityTierSummary {
  tier: PriorityTier;
  constituencies: string[];
  margin: string;
  actionUrgency: string;
}

export interface RegionIntelligenceSummary {
  region: Region;
  totalSeats: number;
  congressSeats: number;
  aapSeats: number;
  sadSeats: number;
  bjpSeats: number;
  criticalSeats: string[];
}
