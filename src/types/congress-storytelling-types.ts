// Congress Storytelling & History Campaign Types
// Derived from: direct-documentation/cat-3-party-propulsion/g36-congress-storytelling-history-campaign.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface CongressStorytellingMetadata {
  reportDate: string;
  documentType: string;
  for: string;
  election: string;
  preparedBy: string;
  classification: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// LEGACY STORY TYPES
// ==========================================

export interface PartitionRehabilitation {
  story: string;
  keyNarrativeElements: string[];
  talkingPoints: string[];
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

export interface GreenRevolution {
  story: string;
  keyFacts: string[];
  dataPoints: { metric: string; value: string }[];
  talkingPoints: string[];
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

export interface IndustrialDevelopment {
  story: string;
  keyAssetsBuilt: { asset: string; description: string }[];
  talkingPoints: string[];
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

export interface AnandpurSahibResolution {
  story: string;
  significance: string;
  criticalContext: string;
  talkingPoints: string[];
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

export interface DrugDeAddictionCampaign {
  story: string;
  components: string[];
  aapContradiction: string;
  talkingPoints: string[];
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

export interface FarmerWelfareRecord {
  story: string;
  keyContributions: string[];
  aapContradiction: string[];
  talkingPoints: string[];
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// MODERN SUCCESS STORIES TYPES
// ==========================================

export interface InfrastructureDevelopment2017_2022 {
  story: string;
  roadsConnectivity: { item: string; details: string }[];
  healthInfrastructure: { item: string; details: string }[];
  education: { item: string; details: string }[];
  waterSanitation: { item: string; details: string }[];
  talkingPoints: string[];
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

export interface SchemesThatWorked {
  scheme: string;
  congressAction: string;
  aapInherited: string;
  aapFourYearRecord: string;
}

export interface AAPGovernanceFailures {
  electricity: string;
  water: string;
  drugs: string;
  health: string;
  education: string;
  lawOrder: string;
  fiscal: string;
  keyFraming: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// SIDHU MOOSE WALA TYPES
// ==========================================

export interface MooseWalaLegacy {
  whoHeWas: string;
  politicalSignificance: string;
  postHumousImpact: string;
  lessons: string;
}

// ==========================================
// STORYTELLING ARCHITECTURE TYPES
// ==========================================

export interface NarrativeTheme {
  theme: string;
  story: string;
  dataPoints: { metric: string; value: string }[];
  talkingPoints: string[];
  culturalSensitivity: string;
}

export interface CulturalSensitivityGuidelines {
  sikHImage: string;
  malwaVisuals: string;
  majhaDialect: string;
  doabaNRI: string;
  avoidElements: string[];
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface CongressStorytellingData {
  metadata: CongressStorytellingMetadata;
  executiveSummary: string;
  legacy1947_2022: {
    partitionRehabilitation: PartitionRehabilitation;
    greenRevolution: GreenRevolution;
    industrialDevelopment: IndustrialDevelopment;
    anandpurSahibResolution: AnandpurSahibResolution;
    drugDeAddictionCampaign: DrugDeAddictionCampaign;
    farmerWelfareRecord: FarmerWelfareRecord;
  };
  modernSuccessStories: {
    infrastructure2017_2022: InfrastructureDevelopment2017_2022;
    schemesThatWorked: SchemesThatWorked[];
    aapGovernanceFailures: AAPGovernanceFailures;
  };
  sidhuMooseWala: MooseWalaLegacy;
  narrativeArchitecture: {
    themes: NarrativeTheme[];
    culturalGuidelines: CulturalSensitivityGuidelines;
  };
}
