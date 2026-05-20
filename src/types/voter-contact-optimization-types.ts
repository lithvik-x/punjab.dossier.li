// Voter Contact Optimization Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g16-voter-contact-optimization-framework.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G16

// ==========================================
// CONTACT PRIORITIZATION TIERS
// ==========================================

export type ContactTier = "Tier 1" | "Tier 2" | "Tier 3";

export interface ContactPrioritizationTier {
  tier: ContactTier;
  conversionPotential: string;
  resourceAllocation: string;
  contactFrequencyFormula: string;
  priorityCriteria: string[];
  targetVoterProfile: string;
}

export interface TierResourceAllocation {
  tier: ContactTier;
  percentOfResources: string;
  contactGoal: string;
  expectedConversion: string;
}

// ==========================================
// CHANNEL OPTIMIZATION
// ==========================================

export interface ContactChannel {
  name: string;
  category: "Face-to-Face" | "Telephonic" | "Digital" | "Mass" | "Interpersonal";
  advantages: string[];
  implementationRequirements: string[];
  punjabSpecificAdvantage: string[];
  conversionMetrics: {
    contactRate?: string;
    conversationRate?: string;
    voteConversionRate?: string;
    costPerContact?: string;
    roi?: string;
  };
  bestUsedFor: string[];
  limitations: string[];
}

export interface ChannelCostEfficiency {
  channel: string;
  costPerContact: string;
  costPerVote: string;
  roiRanking: number;
  budgetRecommendation: string;
}

export interface MultiChannelIntegration {
  primaryChannel: string;
  secondaryChannel: string;
  tertiaryChannel: string;
  integrationRationale: string;
  sequencingNotes: string;
}

// ==========================================
// CONTACT SEQUENCE OPTIMIZATION
// ==========================================

export interface ContactSequenceStep {
  step: number;
  channel: string;
  timing: string;
  messageFocus: string;
  objective: "Awareness" | "Persuasion" | "Mobilization" | "GOTV";
  expectedResponse: string;
}

export interface FirstContactStrategy {
  objective: string;
  recommendedChannel: string;
  messageFramework: string;
  keyDataToCollect: string[];
  followUpTrigger: string;
}

export interface GOTVContactSequence {
  contactNumber: number;
  daysBeforeElection: number;
  channel: string;
  message: string;
  action: string;
}

// ==========================================
// MESSAGE DIFFERENTIATION
// ==========================================

export interface ContactNumberMessage {
  contactNumber: number;
  messageFramework: string;
  contentFocus: string;
  tone: string;
  cta: string;
  specialInstructions?: string;
}

export interface SegmentMessageMatrix {
  segment: string;
  issueEmphasis: string;
  emotionalAppeal: string;
  messengerRecommendation: string;
  channelPreference: string;
}

// ==========================================
// A/B TESTING FRAMEWORK
// ==========================================

export interface ABTestVariable {
  variable: string;
  testGroup: string;
  controlGroup: string;
  hypothesis: string;
  successMetric: string;
}

export interface MessageABTest {
  testName: string;
  testType: "Headline" | "Message Frame" | "Visuals" | "Messenger" | "Channel";
  elements: ABTestVariable[];
  sampleSize: string;
  duration: string;
  analysisPlan: string;
}

// ==========================================
// CONVERSION TRACKING
// ==========================================

export interface ConversionFunnel {
  stage: string;
  metric: string;
  targetValue: string;
  actualValue?: string;
  gapAnalysis?: string;
}

export interface ContactTrackingMetrics {
  contactAttempted: string;
  contactMade: string;
  conversationCompleted: string;
  pledgeObtained: string;
  voteConfirmed: string;
  turnoutRate: string;
}

export interface ContactAttribution {
  channel: string;
  voterId: string;
  contactDate: string;
  contactResult: string;
  followUpScheduled?: string;
  vote?: string;
}

// ==========================================
// SPECIAL SEGMENT STRATEGIES
// ==========================================

export interface WomenContactStrategy {
  segment: "Women Voters";
  bestChannels: string[];
  timingConsiderations: string;
  messageEmphasis: string[];
  femaleVolunteerUtilization: string;
  familyTargetingApproach: string;
}

export interface YouthContactStrategy {
  segment: "Youth (18-35)";
  digitalFirstApproach: string;
  peerInfluenceLeverage: string;
  issueFraming: string;
  activationPoints: string[];
}

export interface SCVoterContactStrategy {
  segment: "SC Voters";
  communityLeaderEngagement: string;
  localIssueEmphasis: string;
  boothLevelPresence: string;
  transportMobilization: string;
}

export interface MigrantLaborerStrategy {
  segment: "Migrant Laborers";
  contactTiming: string;
  locationTargeting: string;
  messageFramework: string;
  returnVoterProgram: string;
}

// ==========================================
// RESOURCE ALLOCATION
// ==========================================

export interface ResourceAllocationMatrix {
  region: string;
  voterCount: string;
  allocatedBudget: string;
  costPerVoter: string;
  channelMix: string;
  expectedContacts: string;
  conversionTargets: string;
}

export interface BudgetOptimizationScenario {
  scenario: string;
  channelReallocation: string;
  expectedOutcome: string;
  riskFactors: string[];
  recommendation: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface ContactOptimizationConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  sourceReliability: string;
  punjabSpecificValidation: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface VoterContactOptimizationData {
  documentDate: string;
  agent: string;
  taskId: "G16";
  frameworkSections: string[];

  // Prioritization
  contactTiers: ContactPrioritizationTier[];
  tierAllocations: TierResourceAllocation[];

  // Channels
  channels: ContactChannel[];
  channelCostEfficiency: ChannelCostEfficiency[];
  channelIntegration: MultiChannelIntegration[];

  // Sequences
  firstContactStrategy: FirstContactStrategy;
  gotvSequence: GOTVContactSequence[];
  contactSequenceOptimization: ContactSequenceStep[];

  // Messages
  contactNumberMessages: ContactNumberMessage[];
  segmentMessageMatrix: SegmentMessageMatrix[];

  // Testing
  abTests: MessageABTest[];

  // Tracking
  conversionFunnel: ConversionFunnel[];
  trackingMetrics: ContactTrackingMetrics;
  attributionModel: string;

  // Special Segments
  womenStrategy: WomenContactStrategy;
  youthStrategy: YouthContactStrategy;
  scVoterStrategy: SCVoterContactStrategy;
  migrantLaborerStrategy: MigrantLaborerStrategy;

  // Resources
  resourceAllocation: ResourceAllocationMatrix[];
  budgetScenarios: BudgetOptimizationScenario[];

  // Confidence
  knowledgeConfidence: ContactOptimizationConfidence[];
}
