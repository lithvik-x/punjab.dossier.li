// Constituency Profiling & Data-Driven Campaigning Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/b103-constituency-profiling-data-driven-campaigning.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: B103

import type { CasteGroupElectorate } from "./election-commission-types";

// ==========================================
// METADATA
// ==========================================

export interface ConstituencyProfilingMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// DATA ARCHITECTURE TYPES (Section 1.1)
// ==========================================

export type DataLevel = 0 | 1 | 2 | 3 | 4;

export interface AtomicDataUnit {
  voterRecord: {
    name: string;
    age: number;
    gender: "male" | "female" | "other";
    epicNumber: string;
    serialNumber: number;
    boothNumber: string;
    caste?: string;
  };
  boothResult: {
    votesPerCandidate: Record<string, number>;
    turnout: number;
    nota: number;
  };
  censusBlock: {
    householdCount: number;
    fullDemographicCensus: boolean;
  };
}

export interface BoothAggregation {
  boothCommitteeCoverage: number;
  turnoutTimeSeries: {
    year: 2012 | 2017 | 2022;
    turnout: number;
  }[];
  voteSharePerParty: Record<string, number>;
  demographicProxies: Record<string, number>;
}

export interface VillageWardAggregation {
  casteComposition: Record<string, number>;
  economicIndicators: {
    primaryOccupation: string;
    landOwnership: "large" | "medium" | "small" | "marginal" | "landless";
    nriDensity: "high" | "medium" | "low";
  };
  infrastructureDeficits: string[];
  governanceQualityIndicators: number;
}

export interface ConstituencySynthesis {
  indicators: Record<string, number>;
  compositeIndices: {
    developmentIndex: number;
    antiIncumbencyIndex: number;
    organizationalStrengthIndex: number;
  };
  typologyClassification: string;
}

export type RegionType = "malwa" | "majha" | "doaba";

export interface DistrictRegionalAggregation {
  districtName: string;
  regionalTypology: RegionType;
  interConstituencyComparisonMatrix: Record<string, number>;
}

// ==========================================
// CONSTITUENCY TYPOLOGY TYPES (Section 1.2)
// ==========================================

export type UrbanRuralType =
  | "rural-dominant"
  | "rural-majority"
  | "semi-urban-mixed"
  | "urban-majority"
  | "urban-dominant";

export type FunctionalCharacterType =
  | "border"
  | "industrial"
  | "agricultural"
  | "religious-significance"
  | "nri-belt"
  | "forest-hill";

export type ElectoralPersonalityType =
  | "safe"
  | "swing"
  | "bellwether"
  | "personality"
  | "issue"
  | "identity"
  | "family";

export interface ConstituencyTypology {
  urbanRural: {
    type: UrbanRuralType;
    ruralPercentage: number;
    count: number;
  };
  functional: {
    type: FunctionalCharacterType;
    description: string;
    seatCount: number;
  };
  electoral: {
    type: ElectoralPersonalityType;
    marginThreshold: string;
    description: string;
  };
}

// ==========================================
// ELECTORAL HISTORY TYPES (Section 1.3)
// ==========================================

export interface ElectionResult {
  winner: {
    name: string;
    party: string;
    votes: number;
    voteShare: number;
  };
  runnerUp: {
    name: string;
    party: string;
    votes: number;
    voteShare: number;
  };
  thirdPlace?: {
    party: string;
    voteShare: number;
  };
  margin: {
    absoluteVotes: number;
    percentagePoints: number;
  };
  totalVoters: number;
  votesPolled: number;
  turnoutPercentage: number;
  nota: {
    votes: number;
    percentage: number;
  };
  postalBallot: {
    count: number;
    percentage: number;
  };
  rejectedVotes: number;
  genderWiseTurnout?: {
    male: number;
    female: number;
  };
  boothWiseResults: boolean;
}

export type TrajectoryCategory = "rising" | "falling" | "stable" | "volatile";

export interface VoteShareTrajectory {
  category: TrajectoryCategory;
  slope: number; // percentage points per election
  description: string;
}

export interface MarginTrajectory {
  trend: "widening" | "narrowing" | "negative";
  description: string;
}

export interface TurnoutTrajectory {
  trend: "rising" | "falling" | "volatile";
  description: string;
}

export type SwingModelType = "uniform" | "differential";

export interface SwingCalculation {
  modelType: SwingModelType;
  requiredSwingForCongressVictory?: number;
  description: string;
}

// ==========================================
// SMALL-AREA ESTIMATION TYPES (Section 1.4)
// ==========================================

export interface MRPStage1 {
  individualFeatures: {
    demographics: string[];
    geographicContext: string[];
    stateLevelVariables: string[];
  };
  modelDescription: string;
}

export interface MRPStage2 {
  postStratification: {
    dataSource: "SECC 2011" | "voter_rolls_2022" | "both";
    weightingMethod: string;
  };
  confidenceIntervals: {
    voteShare: {
      lower: number;
      upper: number;
    };
    marginClassification: "safe" | "swing" | "lost";
  };
}

// ==========================================
// VOTER PROFILE TYPES (Section 2)
// ==========================================

export interface VoterSegmentation {
  demographics: {
    caste: string[];
    religion: string[];
    ageGroups: string[];
    gender: string[];
    education: string[];
    occupation: string[];
    income: string[];
  };
  geography: {
    ruralUrban: string[];
    villageSize: string[];
    borderInterior: string[];
    farmType: string[];
  };
  politicalBehavior: string[];
  psychographicsValues: string[];
}

export interface VoterPersona {
  id: string;
  name: string;
  demographics: {
    caste: string;
    religion: string;
    ageRange: string;
    ruralUrban: string;
    education: string;
  };
  electoratePercentage: number;
  primaryIssues: string[];
  mediaConsumption: string[];
  congressAffinity: "core" | "leaning" | "swing" | "opposition";
  trend: string;
}

export interface VoterDatabaseSource {
  source: "electoral_rolls" | "secc_2011" | "nfhs" | "state_surveys" | "voter_contact" | "social_media";
  dataPoints: string[];
  limitations: string[];
}

// ==========================================
// ISSUE-CONSTITUENCY MATCHING TYPES (Section 3)
// ==========================================

export type IssueTier = 1 | 2 | 3 | 4;

export interface IssueTaxonomy {
  tier: IssueTier;
  issues: {
    name: string;
    geographicScope: "state-wide" | "regional" | "district" | "constituency-specific";
    description: string;
  }[];
}

export interface IssueSalienceMeasurement {
  methodology: "survey" | "social_media" | "booth_worker_report" | "media_content_analysis";
  weights: {
    surveySalience: number;
    socialMediaVolume: number;
    boothReportFrequency: number;
    mediaCoverage: number;
  };
}

export interface IssueSegmentAffinityMatrix {
  issue: string;
  jatSikh: "very_high" | "high" | "medium" | "low";
  mazhabi: "very_high" | "high" | "medium" | "low";
  obcFarmer: "very_high" | "high" | "medium" | "low";
  urbanMiddle: "very_high" | "high" | "medium" | "low";
  women: "very_high" | "high" | "medium" | "low";
  youth: "very_high" | "high" | "medium" | "low";
  nri: "very_high" | "high" | "medium" | "low";
}

// ==========================================
// CAMPAIGN RESOURCE ALLOCATION TYPES (Section 4)
// ==========================================

export type ResourceCategory =
  | "human"
  | "financial"
  | "time"
  | "material"
  | "media"
  | "intelligence";

export interface WinProbabilityModel {
  features: {
    congress2022VoteShare: number;
    marginClassification: "safe" | "competitive" | "lost";
    casteCompositionAlignment: number;
    aapAntiIncumbency: number;
    candidateQualityScore: number;
    boothCommitteeCoverageIndex: number;
    sentimentTrend: "improving" | "deteriorating";
    campaignIntensity: number;
  };
  winProbability: number;
}

export type InvestmentQuadrant = "must_win" | "priority_upset" | "opportunistic" | "low_priority";

export interface ResourceAllocation {
  quadrant: InvestmentQuadrant;
  winProbability: number;
  issueSalience: number;
  strategy: string;
  resourceLevel: "minimal" | "medium" | "very_high";
}

export interface ContactOptimization {
  segment: string;
  primaryChannel: string;
  secondaryChannel: string;
  tertiaryChannel: string;
  contactFrequency: string;
}

// ==========================================
// GIS MAPPING TYPES (Section 5)
// ==========================================

export type GISLayer =
  | "administrative_boundaries"
  | "demographic_layers"
  | "electoral_layers"
  | "infrastructure_layers"
  | "issue_specific_layers"
  | "political_organization_layers";

export interface GISLayerData {
  layerType: GISLayer;
  dataPoints: string[];
  updateCadence: string;
}

export interface SpatialAnalysis {
  technique: "booth_level_clustering" | "travel_time" | "catchment_area" | "buffer";
  description: string;
}

export interface ConstituencyMappingProduct {
  productType: "booth_strength_map" | "demographic_atlas" | "issue_heat_map" | "campaign_routing_map" | "gotv_map";
  colorCoding?: string;
  description: string;
}

// ==========================================
// KEY CONCEPTS & DEFINITIONS
// ==========================================

export interface KeyConcept {
  term: string;
  definition: string;
}

// ==========================================
// METHODOLOGICAL NOTES
// ==========================================

export type KnowledgeConfidence = "high" | "medium" | "low";

export interface MethodologicalNote {
  application: string;
  regionalDifferentiation?: {
    region: RegionType;
    description: string;
  };
  casteCoalitionCalculus?: string;
  temporalConsiderations?: string;
  limitations?: {
    dataGaps: string[];
    modelUncertainties: string[];
    ethicalConsiderations: string[];
  };
  confidence: {
    level: KnowledgeConfidence;
    topic: string;
    reasoning: string;
  };
}

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface ConstituencyProfilingKPI {
  metadata: ConstituencyProfilingMetadata;

  // Data Architecture
  dataArchitecture: {
    levels: {
      level: DataLevel;
      name: string;
      description: string;
    }[];
  };

  // Constituency Typology
  typology: {
    regions: {
      malwa: { seats: number };
      majha: { seats: number };
      doaba: { seats: number };
    };
    urbanRuralClassification: ConstituencyTypology["urbanRural"][];
    functionalClassification: ConstituencyTypology["functional"][];
    electoralPersonalityClassification: ConstituencyTypology["electoral"][];
  };

  // Electoral History
  electoralHistory: {
    electionsTracked: ("2012" | "2017" | "2022" | "2019" | "2024")[];
    derivedMetrics: {
      voteShareTrajectory: TrajectoryCategory[];
      marginTrajectory: MarginTrajectory[];
      turnoutTrajectory: TurnoutTrajectory[];
      swingCalculation: SwingCalculation;
    };
  };

  // Small-Area Estimation
  smallAreaEstimation: {
    mrpStages: {
      stage1: MRPStage1;
      stage2: MRPStage2;
    };
    applicationToPunjab: string[];
  };

  // Voter Profiles
  voterProfiles: {
    segmentationDimensions: VoterSegmentation;
    personas: VoterPersona[];
    dataSources: VoterDatabaseSource[];
  };

  // Issue-Constituency Matching
  issueMatching: {
    issueTaxonomy: IssueTaxonomy[];
    salienceMeasurement: IssueSalienceMeasurement;
    affinityMatrix: IssueSegmentAffinityMatrix[];
  };

  // Campaign Resource Allocation
  resourceAllocation: {
    resourceCategories: ResourceCategory[];
    winProbabilityModel: WinProbabilityModel;
    quadrants: ResourceAllocation[];
    contactOptimization: ContactOptimization[];
  };

  // GIS Mapping
  gisMapping: {
    layers: GISLayerData[];
    spatialTechniques: SpatialAnalysis[];
    products: ConstituencyMappingProduct[];
  };

  // Key Concepts
  keyConcepts: KeyConcept[];

  // Methodological Notes
  methodology: MethodologicalNote[];

  // Sources
  sources: string[];
}

// ==========================================
// REGIONAL DATA
// ==========================================

export interface RegionalData {
  region: RegionType;
  seats: number;
  characteristics: string[];
  issues: string[];
}

// ==========================================
// PUNJAB REGIONAL CONSTANTS
// ==========================================

export const PUNJAB_REGIONAL_DATA: RegionalData[] = [
  {
    region: "malwa",
    seats: 69,
    characteristics: [
      "Higher drug prevalence",
      "Jat Sikh majority",
      "AAP anti-incumbency building",
      "Congress infrastructure rebuilding"
    ],
    issues: ["drugs", "farmer_distress", "stubborn_burning"]
  },
  {
    region: "majha",
    seats: 27,
    characteristics: [
      "Border dynamics",
      "Religious tourism economy",
      "Buffer between Malwa and Doaba"
    ],
    issues: ["border_issues", "security", "tourism"]
  },
  {
    region: "doaba",
    seats: 23,
    characteristics: [
      "NRI economy",
      "Highest youth out-migration",
      "AAP breakthrough in 2022",
      "Congress organizational revival priority"
    ],
    issues: ["nri_remittances", "youth_migration", "industrial_decline"]
  }
];

// ==========================================
// VOTE SHARE THRESHOLDS
// ==========================================

export const VOTE_SHARE_THRESHOLDS = {
  MRP_CONFIDENCE_INTERVAL: {
    VOTE_SHARE: { lower: -3, upper: 3 }, // percentage points
    MARGIN_CLASSIFICATION: ["safe", "swing", "lost"]
  },
  REGIONAL_SEAT_DISTRIBUTION: {
    malwa: 69,
    majha: 27,
    doaba: 23
  },
  MARGIN_CLASSIFICATION: {
    safe: { minMargin: 10, winProbability: 0.9 },
    competitive: { minMargin: 2, maxMargin: 10, winProbability: 0.7 },
    lost: { maxMargin: 2, winProbability: 0.1 }
  }
};

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const CONSTITUENCY_PROFILING_CATEGORIES = [
  "data_architecture",
  "typology",
  "electoral_history",
  "small_area_estimation",
  "voter_profiles",
  "issue_matching",
  "resource_allocation",
  "gis_mapping"
] as const;

export type ConstituencyProfilingCategory = typeof CONSTITUENCY_PROFILING_CATEGORIES[number];

export const BOOTH_COUNT_APPROXIMATE = 23400;
export const CONSTITUENCY_COUNT = 117;
export const MAJORITY_THRESHOLD = 59;
