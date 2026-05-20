// OSINT, HUMINT & Data Architecture Types - Punjab 2027
// Derived from: direct-documentation/cat-9-intelligence-analytics/b20-osint-humint-data-architecture.md
// Documentation Date: 20 May 2026 | Agent: Track B | Task ID: B20

import type { RegionType } from "./intelligence-constituency-profiling-types";

// ==========================================
// METADATA
// ==========================================

export interface IntelligenceArchitectureMetadata {
  researchDate: string;
  sourceType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  status: "COMPLETE" | "IN_PROGRESS" | "VERIFICATION_NEEDED";
}

// ==========================================
// OSINT TYPES (Section 1)
// ==========================================

export type SocialPlatform =
  | "twitter"
  | "facebook"
  | "instagram"
  | "youtube"
  | "whatsapp"
  | "koo"
  | "telegram"
  | "tiktok";

export interface PlatformAccessibility {
  platform: SocialPlatform;
  dataAccessible: string;
  monitoringTools: string[];
  limitations: string;
}

export interface SocialMediaMonitoringArchitecture {
  realTimeIngestion: boolean;
  keywordTaxonomy: string[];
  geospatialFiltering: boolean;
  sentimentClassification: "positive" | "negative" | "neutral" | "emotion";
  influencerMapping: boolean;
  trendAlerting: boolean;
}

export interface PublicDataSource {
  source: string;
  dataType: string;
  accessLevel: "open" | "registered" | "paid";
  updateFrequency: string;
}

export interface OSINTTools {
  category: "commercial" | "open_source" | "dark_web";
  toolName: string;
  purpose: string;
  cost?: string;
}

export interface OSINTCollectionFramework {
  requirementsDriven: boolean;
  legalReview: boolean;
  sourceDocumentation: boolean;
  corroborationStandard: "single" | "dual" | "multiple";
}

// ==========================================
// HUMINT TYPES (Section 2)
// ==========================================

export type InformantLevel = 1 | 2 | 3 | 4 | 5;

export interface InformantNetworkHierarchy {
  level: InformantLevel;
  sourceType: string;
  typicalAccess: string;
  reliabilityFactors: string[];
}

export interface BoothIntelligence {
  voterProfile: {
    dominantCaste: string;
    religiousComposition: string;
    economicProfile: string;
    keyFamilies: string[];
  };
  boothAccessibility: {
    location: string;
    voterTrafficTiming: string;
    accessibilityIssues: string[];
  };
  politicalHistory: {
    previousPatterns: string;
    marginOfVictory: number;
    trendDirection: "rising" | "falling" | "stable";
  };
  groundSentiment: {
    issuesOfConcern: string[];
    candidateResponse: string;
    localEvents: string[];
  };
  microTargetingData: {
    householdData: boolean;
    partyWorkerKnowledge: string;
  };
  competitionAssessment: {
    opponentOrganization: string;
    knownActivists: string[];
    resourceDeployment: string;
  };
}

export type ReportFrequency =
  | "routine_weekly"
  | "event_triggered"
  | "pre_election_surge"
  | "election_day_hourly";

export interface ReportTypes {
  reportName: string;
  frequency: ReportFrequency;
  content: string;
  format: "sms" | "whatsapp" | "digital" | "voice";
}

export type TechnologyStack = "encrypted_messaging" | "ivrs" | "app_based" | "aggregator_dashboard";

export interface HUMINTOSINTIntegration {
  corroborationLoop: boolean;
  gapFilling: boolean;
  earlyWarning: boolean;
  narrativeTracking: boolean;
}

// ==========================================
// DATA ARCHITECTURE TYPES (Section 3)
// ==========================================

export type DataTier = 1 | 2 | 3 | 4;

export interface DataClassification {
  tier: DataTier;
  dataType: string;
  examples: string[];
  securityLevel: "low" | "medium" | "high" | "very_high";
}

export type StorageDataType =
  | "osint_social_media"
  | "structured_intelligence"
  | "geospatial"
  | "media_images_videos"
  | "audio_recordings"
  | "graph_relationships"
  | "raw_unprocessed"
  | "backups";

export interface StorageSolution {
  dataType: StorageDataType;
  storageSolution: string;
  rationale: string;
}

export type ProcessingLayer = "stream" | "batch" | "nlp" | "geospatial" | "graph";

export interface DataPipelineComponent {
  layer: ProcessingLayer;
  technology: string;
  description: string;
}

export type SecurityControl =
  | "encryption_at_rest"
  | "encryption_in_transit"
  | "tls_1_3"
  | "key_management"
  | "mfa"
  | "network_segmentation"
  | "intrusion_detection"
  | "endpoint_security"
  | "dlp"
  | "vulnerability_management"
  | "audit_logging";

export interface TechnicalSecurityControls {
  controls: SecurityControl[];
  implementation: string;
}

export type RoleType =
  | "viewer"
  | "analyst"
  | "manager"
  | "senior_manager"
  | "intelligence_officer"
  | "system_administrator"
  | "data_owner";

export interface RoleHierarchy {
  role: RoleType;
  accessLevel: string;
  typicalUsers: string;
}

export type AuthenticationMethod = "sso" | "oauth" | "api_keys" | "session_timeout";

export interface AuthorizationModel {
  modelType: "rbac" | "abac";
  attributeExamples: string[];
}

// ==========================================
// COMPLIANCE TYPES
// ==========================================

export interface IndianLegalFramework {
  law: string;
  relevance: string;
  keyProvisions: string;
}

export interface DataProtectionPrinciple {
  principle: string;
  application: string;
}

export interface ComplianceConsideration {
  dataResidency: string;
  crossBorderTransfer: string;
  pucchabStateSpecific: string;
}

// ==========================================
// PUNJAB-SPECIFIC TYPES
// ==========================================

export type DeraType =
  | "sacha_sauda"
  | "sachkhand_ballan"
  | "radha_soami"
  | "nirankari"
  | "namdhari";

export interface DeraInfluenceZone {
  dera: DeraType;
  location: string;
  district: string;
  estimatedFollowers: number;
  politicalAlignment: string;
}

export type PunjabiScript = "gurmukhi" | "shahmukhi" | "hinglish" | "english";

export interface CasteSubCaste {
  category: string;
  examples: string[];
  politicalOrientation: string;
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const INTELLIGENCE_ARCHITECTURE_CATEGORIES = [
  "osint_collection",
  "humint_networks",
  "data_pipeline",
  "security_protocols",
  "access_controls",
  "compliance",
] as const;

export type IntelligenceArchitectureCategory =
  typeof INTELLIGENCE_ARCHITECTURE_CATEGORIES[number];

export const REGIONAL_DERA_DISTRIBUTION: DeraInfluenceZone[] = [
  {
    dera: "sacha_sauda",
    location: "Sirsa",
    district: "Sirsa/Bathinda/Mansa",
    estimatedFollowers: 500000,
    politicalAlignment: "Historically Congress, soft SAD",
  },
  {
    dera: "sachkhand_ballan",
    location: "Jalandhar",
    district: "Jalandhar/Doaba",
    estimatedFollowers: 200000,
    politicalAlignment: "Congress traditional base",
  },
  {
    dera: "radha_soami",
    location: "Beas",
    district: "Beas/Amritsar rural",
    estimatedFollowers: 100000,
    politicalAlignment: "Swing - educated urban",
  },
];

export const CASTE_SUBCATEGORIES: CasteSubCaste[] = [
  {
    category: "Mazhabi Sikh",
    examples: ["Rural", "Agricultural"],
    politicalOrientation: "Congress leaning",
  },
  {
    category: "Valmiki",
    examples: ["Urban", "Sanitation workers"],
    politicalOrientation: "Split",
  },
  {
    category: "Ravidasia",
    examples: ["Migrant workers", "Doaba concentration"],
    politicalOrientation: "Split",
  },
  {
    category: "Ad-Dharmi",
    examples: ["Various"],
    politicalOrientation: "Congress traditional",
  },
  {
    category: "Bazigar",
    examples: ["Various"],
    politicalOrientation: "Congress traditional",
  },
];

export const BOOTH_COUNT_APPROXIMATE = 11700;
export const CONSTITUENCY_COUNT = 117;

// ==========================================
// MAIN KPI TYPE
// ==========================================

export interface IntelligenceArchitectureKPI {
  metadata: IntelligenceArchitectureMetadata;

  // OSINT
  osint: {
    platformAccessibility: PlatformAccessibility[];
    monitoringArchitecture: SocialMediaMonitoringArchitecture;
    publicDataSources: PublicDataSource[];
    tools: OSINTTools[];
    collectionFramework: OSINTCollectionFramework;
  };

  // HUMINT
  humint: {
    informantHierarchy: InformantNetworkHierarchy[];
    boothIntelligence: BoothIntelligence;
    reportTypes: ReportTypes[];
    technologyStack: TechnologyStack[];
    integrationFramework: HUMINTOSINTIntegration;
  };

  // Data Architecture
  dataArchitecture: {
    dataClassification: DataClassification[];
    storageSolutions: StorageSolution[];
    pipelineComponents: DataPipelineComponent[];
  };

  // Security
  security: {
    technicalControls: TechnicalSecurityControls[];
    roleHierarchy: RoleHierarchy[];
    authentication: AuthenticationMethod[];
    authorization: AuthorizationModel;
  };

  // Compliance
  compliance: {
    legalFramework: IndianLegalFramework[];
    dataProtectionPrinciples: DataProtectionPrinciple[];
    considerations: ComplianceConsideration;
  };

  // Punjab-Specific
  punjabSpecific: {
    deraInfluence: DeraInfluenceZone[];
    casteSubCaste: CasteSubCaste[];
    languageRequirements: PunjabiScript[];
  };

  // Sources
  sources: string[];
}
