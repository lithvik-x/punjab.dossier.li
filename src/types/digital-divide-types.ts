// Digital Divide & Media Accessibility Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g37-digital-divide-media-accessibility.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G37

// ==========================================
// DIGITAL PENETRATION OVERVIEW
// ==========================================

export interface DigitalPenetrationRate {
  category: "Urban" | "Rural";
  smartphonePenetration: string;
  internetAccess: string;
  socialMediaUsage: string;
  whatsapppenetration: string;
  changeTrend: string;
}

export interface StateDigitalOverview {
  smartphoneOverall: string;
  internetOverall: string;
  digitalPrimaryVoters: string;
  offlinePrimaryVoters: string;
  hybridVoters: string;
}

// ==========================================
// VOTER SEGMENT ACCESSIBILITY
// ==========================================

export interface DigitalAccessibilitySegment {
  segment: string;
  sizePercent: string;
  primaryMedia: string;
  secondaryMedia: string;
  tertiaryMedia: string;
  reachStrategy: string;
  accessibilityScore: "High" | "Medium" | "Low";
}

export interface SCVoterAccessibility {
  segment: "SC Voters";
  digitalPenetration: string;
  smartphoneOwnership: string;
  whatsappUsage: string;
  facebookUsage: string;
  offlineMediaReliance: string;
  recommendedChannels: string[];
  boothLevelStrategy: string;
}

export interface RuralWomenAccessibility {
  segment: "Rural Women";
  smartphoneOwnership: string;
  internetAccess: string;
  whatsappUsage: string;
  tvAccessibility: string;
  radioAccessibility: string;
  familyMediatedAccess: string;
  recommendedChannels: string[];
}

export interface ElderlyVoterAccessibility {
  segment: "Elderly (65+)";
  digitalPenetration: string;
  traditionalMediaReliance: string;
  familyInfluenceMediation: string;
  recommendedChannels: string[];
}

// ==========================================
// MEDIA CONSUMPTION PATTERNS
// ==========================================

export interface MediaConsumptionBySegment {
  segment: string;
  primaryChannel: string;
  secondaryChannel: string;
  tertiaryChannel: string;
  dailyConsumptionHours: string;
  trustedMediaSource: string;
  persuasionSusceptibility: string;
}

export interface WhatsAppUsage {
  totalUsers: string;
  urbanUsers: string;
  ruralUsers: string;
  ageDistribution: string;
  groupUsage: string;
  politicalContentExposure: string;
}

export interface CableTVPenetration {
  totalHouseholds: string;
  urbanCoverage: string;
  ruralCoverage: string;
  localCableNetworks: string;
  regionalChannels: string;
}

export interface PrintMediaReach {
  dailyNewspapers: string;
  vernacularReach: string;
  urbanReach: string;
  ruralReach: string;
  digitalSubscribers: string;
}

// ==========================================
// GEOGRAPHIC DIGITAL DIVIDE
// ==========================================

export interface RegionalDigitalDivide {
  region: "Malwa" | "Majha" | "Doaba";
  smartphonePenetration: string;
  internetAccess: string;
  socialMediaActive: string;
  offlineVoterPercent: string;
  urbanRuralMix: string;
}

export interface ConstituencyDigitalClassification {
  constituencyName: string;
  tier: "Tier 1 Digital-Primary" | "Tier 2 Hybrid" | "Tier 3 Offline-Primary";
  digitalPenetrationScore: string;
  offlineVoterPercent: string;
  recommendedChannelMix: string;
}

export interface MalwaDigitalProfile extends RegionalDigitalDivide {
  region: "Malwa";
  digitalChallenge: string;
  ruralConnectivityGap: string;
  whatsapppenetration: string;
}

export interface MajhaDigitalProfile extends RegionalDigitalDivide {
  region: "Majha";
  urbanRuralBalance: string;
  nriConnectedFamilies: string;
}

export interface DoabaDigitalProfile extends RegionalDigitalDivide {
  region: "Doaba";
  nriDigitalConnectivity: string;
  youthDigitalNativeness: string;
}

// ==========================================
// CONSTITUENCY CLASSIFICATION
// ==========================================

export interface Tier1DigitalPrimary {
  tier: "Tier 1";
  description: string;
  seatCount: string;
  characteristics: string[];
  primaryStrategy: string;
  digitalChannelPercent: string;
  offlineSupport: string;
}

export interface Tier2Hybrid {
  tier: "Tier 2";
  description: string;
  seatCount: string;
  characteristics: string[];
  strategyApproach: string;
  channelMixRecommendation: string;
}

export interface Tier3OfflinePrimary {
  tier: "Tier 3";
  description: string;
  seatCount: string;
  characteristics: string[];
  offlineStrategy: string;
  digitalSupplement: string;
}

// ==========================================
// OFFLINE-Primary VOTER STRATEGY
// ==========================================

export interface OfflineVoterProfile {
  profile: string;
  percentOfElectorate: string;
  concentrationRegion: string;
  estimatedAbsoluteNumbers: string;
  mediaConsumption: string;
  influencePathways: string;
  mobilizationApproach: string;
}

export interface DoorToDoorImportance {
  rationale: string;
  costImplication: string;
  staffingRequirement: string;
  expectedEffectiveness: string;
}

export interface VillageAnnouncementValue {
  paSystemCoverage: string;
  villageReach: string;
  costEfficiency: string;
  messageRetention: string;
  bestUsedFor: string;
}

// ==========================================
// CHANNEL SELECTION MATRIX
// ==========================================

export interface ChannelAccessibilityScore {
  channel: string;
  urbanScore: string;
  ruralScore: string;
  scWomenScore: string;
  youthScore: string;
  elderlyScore: string;
  overallImportance: string;
}

export interface MultiChannelIntegration {
  segment: string;
  primaryChannel: string;
  secondaryChannel: string;
  tertiaryChannel: string;
  fallbackChannel: string;
  integrationNotes: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface DigitalDivideConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  dataSource: string;
  punjabSpecificValidation: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface DigitalDivideData {
  documentDate: string;
  agent: string;
  taskId: "G37";
  frameworkSections: string[];

  // Overview
  stateDigitalOverview: StateDigitalOverview;
  penetrationByArea: DigitalPenetrationRate[];

  // Segment Accessibility
  segmentAccessibility: DigitalAccessibilitySegment[];
  scVoterAccessibility: SCVoterAccessibility;
  ruralWomenAccessibility: RuralWomenAccessibility;
  elderlyVoterAccessibility: ElderlyVoterAccessibility;

  // Media Consumption
  mediaConsumptionBySegment: MediaConsumptionBySegment[];
  whatsappUsage: WhatsAppUsage;
  cableTVPenetration: CableTVPenetration;
  printMediaReach: PrintMediaReach;

  // Geographic
  regionalDigitalProfiles: RegionalDigitalDivide[];
  malwaProfile: MalwaDigitalProfile;
  majhaProfile: MajhaDigitalProfile;
  doabaProfile: DoabaDigitalProfile;

  // Classification
  tier1DigitalPrimary: Tier1DigitalPrimary;
  tier2Hybrid: Tier2Hybrid;
  tier3OfflinePrimary: Tier3OfflinePrimary;
  constituencyClassifications: ConstituencyDigitalClassification[];

  // Offline Strategy
  offlineVoterProfiles: OfflineVoterProfile[];
  doorToDoorImportance: DoorToDoorImportance;
  villageAnnouncementValue: VillageAnnouncementValue;

  // Channel Matrix
  channelAccessibilityScores: ChannelAccessibilityScore[];
  multiChannelIntegrations: MultiChannelIntegration[];

  // Confidence
  knowledgeConfidence: DigitalDivideConfidence[];
}
