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

  // Executive Summary from deep docs
  executiveSummary?: string;

  // Basic Information
  electionResults: ElectionResult[];
  totalElectors?: number | string | null;
  voterTurnout?: number | string | null;
  margin: number | null;
  party: Party;
  priorityTier: PriorityTier;

  // Geographic Context
  geographicContext?: string;
  borderProximity?: string;
  floodRisk?: string;
  topographicZone?: string;

  // Caste Composition
  casteComposition: CasteComposition[];
  religionBreakdown?: Record<string, string>;

  // Demographics
  demographics?: {
    totalPopulation?: number;
    male?: number;
    female?: number;
    urban?: number;
    rural?: number;
    sexRatio?: string;
  };

  // Local Issues (expanded)
  topIssues: LocalIssue[];
  keyIssues?: { issue: string; description: string; source?: string }[];

  // Governance
  congressPosition: string;
  governanceGap?: string[];
  mlaperformance?: string[];

  // Influencers & Power Structure
  influencers?: {
    political?: string[];
    social?: string[];
    religious?: string[];
  };

  // Media Landscape
  mediaLandscape?: {
    local?: string[];
    social?: string[];
  };

  // Physical Mapping
  physicalMapping?: {
    voterDemographics?: Record<string, string | number>;
    keyGeography?: string;
  };

  // SWOT Analysis
  swotAnalysis?: {
    strengths?: string[];
    weaknesses?: string[];
    opportunities?: string[];
    threats?: string[];
  };

  // Strategic Blueprint
  strategicBlueprint?: {
    forAAP?: string[];
    forCongress?: string[];
    forSADBJP?: string[];
  };

  // Course Changing Factors
  courseChangingFactors?: { factor: string; probability: string; impact: string }[];

  // Attack Lines (expanded)
  attackLines: AttackLine[];

  // Recommended Candidate
  recommendedCandidate: CandidateProfile | null;

  // Government Schemes
  governmentSchemes?: string[];

  // Voter Outreach
  voterOutreach?: {
    voterTurnout?: string;
    voterProfile?: string[];
  };

  // Data Quality
  dataGaps: string[];
  intelligenceGaps?: string[];
  requiresVerification?: string[];

  // References
  crossReferences: string[];
  strategicImplications: string[];
  sources?: string[];

  // Visualization & UI
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
