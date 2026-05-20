// Party Branding, Crisis & Organization Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-3-party-propulsion/b10-party-branding-crisis-organization.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface PartyBrandingMetadata {
  reportDate: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// BRANDING TYPES
// ==========================================

export interface CongressSymbol {
  name: string;
  description: string;
  origin: string;
  designLineage: string;
  legalProtection: string;
  punjabUsage: string;
}

export interface CongressColorPalette {
  saffron: ColorDetail;
  green: ColorDetail;
  black: ColorDetail;
  white: ColorDetail;
  modernAccent: ColorDetail;
}

export interface ColorDetail {
  hex: string;
  usage: string;
}

export interface CongressTypography {
  historical: string;
  digital: string;
  print: string;
  punjabiScript: string;
  requirement: string;
}

export interface CongressVisualLanguage {
  foundingFatherImagery: string[];
  punjabHeroes: string[];
  farmerLaborerIconography: string;
  womenYouthDepiction: string;
  punjabSpecificVisuals: string[];
}

export interface CongressSlogans {
  preIndependence: SloganEra[];
  earlyPostIndependence: SloganEra[];
  emergency: SloganEra[];
  "1977": SloganEra[];
  "1990s": SloganEra[];
  "2004_2014": SloganEra[];
  punjabSpecific: SloganEra[];
}

export interface SloganEra {
  era: string;
  slogan: string;
  significance: string;
}

export interface CongressSoundBranding {
  rhythmPercussion: string;
  voiceSpeeches: string;
  jingles: string;
  avoidElements: string;
}

// ==========================================
// CRISIS MANAGEMENT TYPES
// ==========================================

export type CrisisType =
  | "Internal Rebellion"
  | "Corruption Scandal"
  | "Communal Flare-Up"
  | "Leadership Controversy"
  | "Misinformation Attack"
  | "Defection";

export interface CrisisTypology {
  type: CrisisType;
  definition: string;
  detectionSignals: string[];
  punjabContext: string;
  severityIndicators: string[];
}

export interface InternalRebellionData {
  ticketSelectionRisk: string;
  incumbentRenewalRisk: string;
  historicalPattern: string;
}

export interface CorruptionScandalData {
  vulnerabilities: string[];
  transportContracts: string;
  sandMining: string;
  medicationProcurement: string;
  legalDefenseTimeline: string;
}

export interface CommunalFlareUpData {
  faultLines: string[];
  sakalaVsMazhabi: string;
  deraCommunityRelations: string;
}

export interface LeadershipControversyData {
  transitionConsiderations: string;
  unelectabilitySignals: string;
  dynastySignals: string;
}

export interface MisinformationAttackData {
  dominantPlatforms: string[];
  deepfakeRisk: string;
  historicalVulnerabilities: string[];
}

export interface DefectionData {
  detectionSignals: string[];
  aayaRamGayaRam: string;
}

// ==========================================
// ORGANIZATION TYPES
// ==========================================

export interface PPCCOrganizationalStructure {
  branding: CongressSymbol;
  colorPalette: CongressColorPalette;
  typography: CongressTypography;
  visualLanguage: CongressVisualLanguage;
  slogans: CongressSlogans;
  soundBranding: CongressSoundBranding;
}

export interface CrisisManagementSystem {
  crisisTypes: CrisisTypology[];
  internalRebellion: InternalRebellionData;
  corruptionScandal: CorruptionScandalData;
  communalFlareUp: CommunalFlareUpData;
  leadershipControversy: LeadershipControversyData;
  misinformationAttack: MisinformationAttackData;
  defection: DefectionData;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface PartyBrandingCrisisData {
  metadata: PartyBrandingMetadata;
  organizationalStructure: PPCCOrganizationalStructure;
  crisisManagement: CrisisManagementSystem;
  regionalSloganRequirement: string;
  gurumukhiSuitableSlogan: string;
}
