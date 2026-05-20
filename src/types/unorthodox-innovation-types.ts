// Unorthodox Voter Contact Innovation Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g35-unorthodox-voter-contact-innovation.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G35

// ==========================================
// INNOVATION TACTICS OVERVIEW
// ==========================================

export interface UnorthodoxTactic {
  id: number;
  tactic: string;
  category: "Digital" | "Physical" | "Event-Based" | "Ambient" | "Community";
  implementationComplexity: "Low" | "Medium" | "High";
  costProfile: "Very Low" | "Low" | "Medium";
  expectedReach: string;
  targetSegment: string[];
  effectivenessRating: string;
}

export interface TacticImplementation {
  tacticName: string;
  setupRequirements: string[];
  keyPartners: string[];
  contentRequirements: string[];
  staffingNeeds: string[];
  timelineToLaunch: string;
}

export interface TacticCostAnalysis {
  tacticName: string;
  setupCost: string;
  perUnitCost: string;
  costPerThousandReach: string;
  comparableChannelCPM: string;
  valueProposition: string;
}

// ==========================================
// QR CODE PLACEMENT
// ==========================================

export interface QRCodePlacement extends UnorthodoxTactic {
  id: 1;
  tactic: "QR Code Voter Engagement";
  placementLocations: string[];
  landingContent: string;
  incentiveForScan: string;
  dataCapture: string;
  followUpStrategy: string;
}

export interface QRCodeCampaignMetrics {
  placements: string;
  estimatedScans: string;
  scanRate: string;
  costPerScan: string;
  voteConversionEstimate: string;
}

// ==========================================
// CABLE TV INSERTION
// ==========================================

export interface CableTVInsertion extends UnorthodoxTactic {
  id: 2;
  tactic: "Cable TV Local Insertion";
  networkPartners: string[];
  adSlotDuration: string;
  contentFormat: string;
  targetingCriteria: string;
  frequencyRecommendation: string;
}

export interface CableTVCostEfficiency {
  cpcEstimate: string;
  cpmEstimate: string;
  comparableDigitalCPM: string;
  reachAdvantage: string;
}

// ==========================================
// WHATSAPP STATUS ADS
// ==========================================

export interface WhatsAppStatusAd extends UnorthodoxTactic {
  id: 3;
  tactic: "WhatsApp Status Advertisement";
  contentFormat: string;
  videoSpecs: string;
  textOverlaySpecs: string;
  targetingApproach: string;
  viralityPotential: string;
}

export interface WhatsAppStatusMetrics {
  estimatedViews: string;
  saveRate: string;
  shareRate: string;
  cpcEstimate: string;
  engagementRate: string;
}

// ==========================================
// AUTO-RICKSHAW WRAPS
// ==========================================

export interface AutoRickshawWrap extends UnorthodoxTactic {
  id: 4;
  tactic: "Auto-Rickshaw Mobile Branding";
  vehicleCountTarget: string;
  routeCoverage: string;
  wrapDesignSpecs: string;
  driverIncentive: string;
  routeOptimization: string;
}

export interface AutoRickshawMetrics {
  vehiclesDeployed: string;
  dailyImpressions: string;
  routeCoverage: string;
  costPerDay: string;
  costPerImpression: string;
}

// ==========================================
// APMC MARKET PRESENCE
// ==========================================

export interface APMCMarketPresence extends UnorthodoxTactic {
  id: 5;
  tactic: "APMC Mandi Voter Engagement";
  marketLocations: string[];
  peakTiming: string;
  engagementApproach: string;
  messengerProfile: string;
  issueFocus: string;
}

export interface APMCMarketMetrics {
  marketsCovered: string;
  farmersReached: string;
  engagementRate: string;
  costPerEngagement: string;
}

// ==========================================
// VILLAGE FAIR/FESTIVAL BOOTH
// ==========================================

export interface VillageFairBooth extends UnorthodoxTactic {
  id: 6;
  tactic: "Village Fair & Festival Booth";
  eventTypes: string[];
  boothDesign: string;
  engagementActivities: string[];
  localPartnerCoordination: string;
  seasonalCalendar: string;
}

export interface VillageFairMetrics {
  eventsParticipated: string;
  attendeesEstimated: string;
  voterRegistrations: string;
  contactCardsCollected: string;
  costPerEvent: string;
}

// ==========================================
// CREMATION/BURIAL GROUND BRANDING
// ==========================================

export interface CremationGroundBranding extends UnorthodoxTactic {
  id: 7;
  tactic: "Cremation/Burial Ground Memorial Branding";
  locationCriteria: string;
  brandingElements: string[];
  communityPermission: string;
  messageFramework: string;
  respectfulImplementation: string;
}

export interface CremationGroundMetrics {
  locationsTargeted: string;
  familiesReached: string;
  communitySentiment: string;
  costPerLocation: string;
}

// ==========================================
// SCHOOL/COLLEGE GATE OUTREACH
// ==========================================

export interface SchoolGateOutreach extends UnorthodoxTactic {
  id: 8;
  tactic: "School/College Gate Parent Outreach";
  institutionTypes: string[];
  timingStrategy: string;
  messengerProfile: string;
  parentDemographic: string;
  messageFramework: string;
  safetyConsiderations: string;
}

export interface SchoolGateMetrics {
  institutionsTargeted: string;
  parentsReached: string;
  contactConversion: string;
  eventsPerMonth: string;
  costPerInstitution: string;
}

// ==========================================
// MOBILE LED VAN
// ==========================================

export interface MobileLEDVan extends UnorthodoxTactic {
  id: 9;
  tactic: "Mobile LED Van Campaign";
  routePlanning: string;
  contentLoopDuration: string;
  geographicCoverage: string;
  staffingRequirement: string;
  localPermissions: string;
}

export interface MobileLEDMetrics {
  vansDeployed: string;
  locationsPerDay: string;
  impressionsPerDay: string;
  costPerVanPerDay: string;
  costPerThousandImpressions: string;
}

// ==========================================
// IPL CRICKET WATCH PARTY
// ==========================================

export interface IPLWatchParty extends UnorthodoxTactic {
  id: 10;
  tactic: "IPL Cricket Watch Party Political Engagement";
  venueSourcing: string;
  audienceProfile: string;
  halftimeEngagement: string;
  teamLoyaltyLeverage: string;
  prizeIncentives: string;
}

export interface IPLWatchPartyMetrics {
  venuesOrganized: string;
  attendanceTotal: string;
  engagementConversion: string;
  costPerAttendee: string;
  socialMediaUplift: string;
}

// ==========================================
// WHATSAPP CHANNEL LAUNCH
// ==========================================

export interface WhatsAppChannelLaunch extends UnorthodoxTactic {
  id: 11;
  tactic: "WhatsApp Channel Official Launch";
  channelContentStrategy: string;
  contentTypes: string[];
  postingFrequency: string;
  subscriberAcquisitionPlan: string;
  moderationRequirement: string;
}

export interface WhatsAppChannelMetrics {
  subscriberTarget: string;
  weeklyReach: string;
  engagementRate: string;
  forwardRate: string;
  subscriberGrowthRate: string;
}

// ==========================================
// ADDITIONAL TACTICS
// ==========================================

export interface AdditionalTactic {
  id: number;
  tactic: string;
  description: string;
  implementationNotes: string;
  costEfficiency: string;
  riskFactors: string[];
}

// ==========================================
// INTEGRATION STRATEGY
// ==========================================

export interface InnovationIntegrationPlan {
  primaryTactics: string[];
  supportingTactics: string[];
  sequencingRecommendation: string;
  crossTacticSynergies: string[];
  budgetAllocation: string;
  expectedCombinedReach: string;
}

export interface CampaignCalendarIntegration {
  tactic: string;
  launchTiming: string;
  duration: string;
  peakEffectiveness: string;
  electionProximity: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface InnovationConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  punjabValidation: string;
  costEstimateReliability: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface UnorthodoxInnovationData {
  documentDate: string;
  agent: string;
  taskId: "G35";
  frameworkSections: string[];

  // Core Tactics
  qrCodePlacement: QRCodePlacement;
  cableTVInsertion: CableTVInsertion;
  whatsAppStatusAd: WhatsAppStatusAd;
  autoRickshawWrap: AutoRickshawWrap;
  apmcMarketPresence: APMCMarketPresence;
  villageFairBooth: VillageFairBooth;
  cremationGroundBranding: CremationGroundBranding;
  schoolGateOutreach: SchoolGateOutreach;
  mobileLEDVan: MobileLEDVan;
  iplWatchParty: IPLWatchParty;
  whatsAppChannelLaunch: WhatsAppChannelLaunch;

  // Additional
  additionalTactics: AdditionalTactic[];

  // Metrics
  qrCodeMetrics: QRCodeCampaignMetrics;
  cableTVCostEfficiency: CableTVCostEfficiency;
  whatsAppStatusMetrics: WhatsAppStatusMetrics;
  autoRickshawMetrics: AutoRickshawMetrics;
  apmcMetrics: APMCMarketMetrics;
  villageFairMetrics: VillageFairMetrics;
  schoolGateMetrics: SchoolGateMetrics;
  mobileLEDMetrics: MobileLEDMetrics;
  iplWatchPartyMetrics: IPLWatchPartyMetrics;
  whatsAppChannelMetrics: WhatsAppChannelMetrics;

  // Integration
  integrationPlan: InnovationIntegrationPlan;
  campaignCalendar: CampaignCalendarIntegration[];

  // Confidence
  knowledgeConfidence: InnovationConfidence[];
}
