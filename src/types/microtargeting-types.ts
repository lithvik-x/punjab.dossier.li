// Micro-Targeting, Turnout & Voter Contact Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/b14-microtargeting-turnout-contact-framework.md
// Date: 20 May 2026 | Agent: Track B | Task ID: B14

// ==========================================
// CASTE/COMMUNITY SEGMENTATION
// ==========================================

export interface CasteSegment {
  name: string;
  populationPercent: string;
  keyConcerns: string[];
  campaignMessaging: string[];
  geographicContext?: string;
}

export interface JatSikhSegment extends CasteSegment {
  name: "Jat Sikh";
  populationPercent: "20-22%";
}

export interface MazhabiSikhSegment extends CasteSegment {
  name: "Mazhabi Sikh";
  populationPercent: "8-10%";
}

export interface ValmikiSegment extends CasteSegment {
  name: "Valmiki";
  populationPercent: "3-4%";
}

export interface RavidasiaSegment extends CasteSegment {
  name: "Ravidasia";
  populationPercent: "4-5%";
}

export interface OBCSegment extends CasteSegment {
  name: "OBC Communities";
  populationPercent: "15-18%";
}

export interface UpperCasteHinduSegment extends CasteSegment {
  name: "Upper Caste Hindu";
  populationPercent: "10-12%";
}

// ==========================================
// AGE COHORT SEGMENTATION
// ==========================================

export interface AgeCohort {
  name: string;
  ageRange: string;
  electoratePercent: string;
  politicalConcerns: string[];
  engagementPatterns: string;
  influenceOnVoting: string;
}

export interface FirstTimeVoters extends AgeCohort {
  name: "First-Time Voters";
  ageRange: "18-25";
  electoratePercent: "12-15%";
}

export interface YoungAdults extends AgeCohort {
  name: "Young Adults";
  ageRange: "26-35";
}

export interface EstablishedAdults extends AgeCohort {
  name: "Established Adults";
  ageRange: "36-50";
}

export interface MatureAdults extends AgeCohort {
  name: "Mature Adults";
  ageRange: "51-65";
}

export interface SeniorCitizens extends AgeCohort {
  name: "Senior Citizens";
  ageRange: "65+";
  electoratePercent: "10-12%";
}

// ==========================================
// GENDER SEGMENTATION
// ==========================================

export interface GenderSegment {
  gender: "Male" | "Female" | "NRI";
  keyConcerns: string[];
  engagementApproach: string;
}

// ==========================================
// GEOGRAPHIC MICRO-TARGETING
// ==========================================

export interface BoothCategory {
  category: "Safe Booth" | "Contested Booth" | "Hostile Booth" | "Floating Booth" | "New Voter Booth";
  characteristics: string;
  resourcePriority: string;
}

export interface BoothClassification {
  boothCategory: BoothCategory;
}

export interface ConstituencyType {
  type: "SC-Reserved" | "General";
  seats: number;
  strategy: string;
}

// ==========================================
// DIGITAL MICRO-TARGETING
// ==========================================

export interface MetaTargetingParams {
  location: string;
  age: string;
  gender: string;
  interests: string[];
  behavior: string[];
  connections: string;
}

export interface WhatsAppStrategy {
  groupTargeting: string[];
  contactListSegmentation: string[];
  broadcastOptimization: string[];
  contentStrategy: string[];
}

export interface YouTubeGoogleStrategy {
  targeting: string[];
  keywords: string[];
  displayNetwork: string;
}

// ==========================================
// CHANNEL EFFECTIVENESS
// ==========================================

export interface ChannelMetrics {
  channel: string;
  contactToVoteConversion: string;
  persuasionRate: string;
  mobilizationRate: string;
  conversionCost: string;
}

// ==========================================
// TURNOUT BARRIER ANALYSIS
// ==========================================

export interface TurnoutBarrier {
  barrierType: "Apathy" | "Accessibility" | "Procedural" | "Economic" | "Social" | "Weather" | "Confusion" | "Intimidation";
  description: string;
  affectedVoters: string;
  counterStrategy: string;
}

export interface TurnoutBoostPhase {
  phase: string;
  timeframe: string;
  actions: string[];
}

// ==========================================
// CONTACT CHANNEL TYPES
// ==========================================

export interface ContactChannel {
  name: "Door-to-Door" | "Phone Banking" | "WhatsApp" | "SMS" | "Village Announcements" | "Cable TV" | "Gurdwara";
  advantages: string[];
  implementationRequirements: string[];
  punjabSpecific: string[];
  conversionMetrics: {
    contactRate?: string;
    conversationRate?: string;
    mobilizationImpact?: string;
  };
}

// ==========================================
// INFLUENCE POINTS
// ==========================================

export interface InfluencePoint {
  type: "Household Decision Makers" | "Community Leaders" | "Dera Heads" | "Teachers" | "Anganwadi Workers";
  primaryContacts: string[];
  secondaryInfluencers: string[];
  strategy: string;
}

export interface DeraLeader {
  name: string;
  location: string;
  politicalInfluence: string;
  engagementStrategy: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface MicrotargetingData {
  documentDate: string;
  agent: string;
  taskId: string;
  frameworkSections: string[];

  // Segmentation
  casteSegments: CasteSegment[];
  ageCohorts: AgeCohort[];
  genderSegments: GenderSegment[];

  // Geographic
  boothCategories: BoothCategory[];
  constituencyTypes: ConstituencyType[];

  // Digital
  metaTargeting: MetaTargetingParams;
  whatsappStrategy: WhatsAppStrategy;
  youtubeGoogleStrategy: YouTubeGoogleStrategy;

  // Channels
  channels: ContactChannel[];
  channelMetrics: ChannelMetrics[];

  // Turnout
  turnoutBarriers: TurnoutBarrier[];
  turnoutPhases: TurnoutBoostPhase[];

  // Influence
  influencePoints: InfluencePoint[];
  deraLeaders: DeraLeader[];

  // Confidence
  knowledgeConfidence: {
    general: string;
    punjabSpecific: string;
    digitalTargeting: string;
    deraInfluence: string;
  };
}
