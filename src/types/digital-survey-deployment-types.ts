// Congress Digital Survey Deployment Playbook Types
// Derived from: direct-documentation/cat-3-party-propulsion/g83-congress-digital-survey-deployment-playbook.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface DigitalSurveyMetadata {
  reportDate: string;
  documentType: string;
  version: string;
  classification: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// SURVEY TYPES
// ==========================================

export type SurveyType =
  | "Baseline Vote Share"
  | "Candidate Preference Test"
  | "Issue Salience Poll"
  | "Leader Approval"
  | "Rapid Pulse";

export interface SurveyTypeInfo {
  type: SurveyType;
  purpose: string;
  whenToRun: string;
  costIndex: "High" | "Medium" | "Low";
  turnaround: string;
  decisionMatrix: string;
}

// ==========================================
// METHODOLOGY TYPES
// ==========================================

export interface DigitalInfrastructure {
  smartphonePenetration: {
    urban: number;
    rural: number;
  };
  whatsappUsage: number;
  facebookInstagramPenetration: {
    age18_45: number;
    punjabiSpeaking: number;
  };
}

export interface MixedModeMethodology {
  primaryChannel: string;
  boothAgentSupplementation: string;
  phoneFollowUp: string;
  qrCodeAtEvents: string;
  completionRates: {
    whatsappTrusted: number;
    coldDistribution: number;
  };
}

export interface SampleSizes {
  baselineStateWide: MinimumRecommended;
  baselinePerConstituency: MinimumRecommended;
  candidatePreference: MinimumRecommended;
  issueSalience: MinimumRecommended;
  leaderApproval: MinimumRecommended;
  rapidPulse: MinimumRecommended;
}

export interface MinimumRecommended {
  minimum: number;
  recommended: number;
  confidenceLevel: string;
}

// ==========================================
// RECRUITMENT TYPES
// ==========================================

export interface RecruitmentChannels {
  boothAgentNetworks: string;
  whatsappBroadcastLists: string;
  socialMediaRecruitment: string;
  qrCodeAtEvents: string;
}

export interface RecruitmentQuotas {
  demographic: string;
  targetPercent: number;
  boothAgentQuota: string;
}

export interface SampleBias {
  overRepresents: string[];
  underRepresents: string[];
  correctionMethod: string;
}

// ==========================================
// PLATFORM SELECTION TYPES
// ==========================================

export interface PlatformComparison {
  platform: string;
  cost: string;
  punjabiSupport: string;
  mobileFirst: string;
  analytics: string;
  bestFor: string;
}

export interface PlatformRecommendation {
  phase1: string;
  phase2: string;
  criticalRequirement: string;
  mobileFirstDesign: string;
}

// ==========================================
// QUESTIONNAIRE DESIGN TYPES
// ==========================================

export interface TranslationGuidance {
  commonFailures: string[];
  naturalPunjabiPhrases: { english: string; punjabi: string }[];
}

export interface SocialDesirabilityProblem {
  overReporting: string;
  underReporting: string;
  misrepresentation: string;
  mitigation: string[];
}

export interface CasteReligionHandling {
  communityQuestion: string;
  avoidDirectReligionQuestion: string;
  jatVsMazhabi: string;
  developmentPriorities: string;
}

// ==========================================
// SAMPLING TYPES
// ==========================================

export interface PrimaryStrata {
  region: string;
  urbanRural: string;
  casteCommunity: string;
}

export interface SecondaryStrata {
  gender: string;
  age: string;
  boothLevelClustering: string;
}

export interface OversamplingStrategy {
  target: string;
  method: string;
  fieldEnumeration: string;
}

export interface WeightAdjustments {
  stratum: string;
  populationPercent: number;
  rawDigitalSamplePercent: number;
  weight: number;
}

// ==========================================
// DATA COLLECTION CADENCE TYPES
// ==========================================

export interface StandardTimelines {
  surveyType: SurveyType;
  fieldDuration: string;
  analysisTime: string;
  totalTurnaround: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface DigitalSurveyDeploymentData {
  metadata: DigitalSurveyMetadata;
  surveyTypes: SurveyTypeInfo[];
  methodology: {
    digitalInfrastructure: DigitalInfrastructure;
    mixedModeMethodology: MixedModeMethodology;
    sampleSizes: SampleSizes;
  };
  recruitment: {
    channels: RecruitmentChannels;
    quotas: RecruitmentQuotas[];
    sampleBias: SampleBias;
  };
  platformSelection: {
    comparison: PlatformComparison[];
    recommendation: PlatformRecommendation;
  };
  questionnaireDesign: {
    translationGuidance: TranslationGuidance;
    socialDesirabilityProblem: SocialDesirabilityProblem;
    casteReligionHandling: CasteReligionHandling;
  };
  sampling: {
    primaryStrata: PrimaryStrata;
    secondaryStrata: SecondaryStrata;
    oversamplingStrategy: OversamplingStrategy;
    weightAdjustments: WeightAdjustments[];
  };
  dataCollectionCadence: {
    standardTimelines: StandardTimelines[];
  };
}
