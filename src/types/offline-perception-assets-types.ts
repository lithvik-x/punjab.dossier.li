// Congress Offline Perception Assets Inventory Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g80-congress-offline-perception-assets-inventory.md

// ==========================================
// PHYSICAL INFRASTRUCTURE
// ==========================================

export interface PartyOfficeNetwork {
  level: string;
  description: string;
  assessmentCriteria: string[];
}

export interface InfrastructureAssessmentScore {
  level: string;
  reach: number;
  credibility: number;
  activatability: number;
  totalScore: number;
  priority: string;
}

export interface ActivationStatusFramework {
  infrastructureLevel: string;
  reachScore: number;
  credibilityScore: number;
  activatabilityScore: number;
  totalScore: number;
  priority: string;
}

// ==========================================
// KARYAKARTA NETWORK
// ==========================================

export interface KaryakartaTier {
  tier: number;
  name: string;
  estimatedCount: string;
  percentage: string;
  characteristics: string[];
}

export interface KaryakartaDensityTarget {
  constituencyType: string;
  targetRatio: string;
  activeWorkersPerBooth: string;
}

export interface ActivationProtocol {
  step: number;
  action: string;
}

export interface OrganizationalWeakness {
  category: string;
  description: string;
}

// ==========================================
// HISTORICAL LEGITIMACY
// ==========================================

export interface HistoricalLegacyAsset {
  era: string;
  description: string;
  currentValue: string;
}

export interface IconicFamilyLegacy {
  family: string;
  description: string;
  electoralValue: string;
}

export interface DeploymentRecommendation {
  assetType: string;
  effectivenessRegion: string;
  notes: string;
}

// ==========================================
// COMMUNITY ORGANIZATIONS
// ==========================================

export interface PartyWing {
  wing: string;
  description: string;
  deploymentNote: string;
}

export interface TradeUnionInfo {
  sector: string;
  congressConnection: string;
}

export interface DeraConnection {
  dera: string;
  location: string;
  alignment: "Favorable" | "Neutral" | "Opposed";
  strategy: string;
}

// ==========================================
// PHYSICAL SYMBOLS
// ==========================================

export interface SymbolDeployment {
  mode: string;
  description: string;
  impact: string;
}

export interface SymbolDensityStrategy {
  zoneType: string;
  focus: string[];
}

// ==========================================
// ASSET SCORING
// ==========================================

export interface AssetScoringDimensions {
  dimension: string;
  description: string;
  scale: string;
}

export interface ConsolidatedAssetScore {
  category: string;
  reach: number;
  credibility: number;
  activatability: number;
  rcsScore: number;
  deployability: string;
}

export interface AssetClassification {
  classification: string;
  criteria: string;
  examples: string[];
}

// ==========================================
// DEPLOYMENT STRATEGY
// ==========================================

export interface RegionalDeploymentPriority {
  region: string;
  primaryAssets: string[];
  deploymentPriority: string;
}

export interface DeploymentTimeline {
  phase: string;
  asset: string;
  action: string;
}

export interface GapAnalysisItem {
  category: "Building" | "Leveraging";
  description: string;
  investmentLevel: string;
  timeframe: string;
}

export interface ResourcePriority {
  priority: number;
  asset: string;
  costLevel: string;
  impactLevel: string;
  timeframe: string;
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const OFFLINE_ASSETS_CONCEPTS = {
  perceptionAssets: "Offline infrastructure shaping voter perceptions of party strength",
  rcsScore: "Reach x Credibility x normalized Activatability composite",
  karyakartaTier: "Worker classification by engagement level",
  symbolDensity: "Concentration of party symbols in geographic area",
  deraNetworks: "Spiritual movements with voter influence in Punjab"
} as const;

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export const OFFLINE_ASSETS_CONFIDENCE = {
  overall: "High",
  karyakartaNumbers: "Medium - Party-reported figures require validation",
  assetActivatability: "Medium - Assumes standard 90-day campaign window"
} as const;
