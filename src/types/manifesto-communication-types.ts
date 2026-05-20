// Manifesto, Communication & Content Strategy Types
// Derived from: direct-documentation/cat-3-party-propulsion/b9-manifesto-communication-content-strategy.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface ManifestoCommunicationMetadata {
  reportDate: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// MANIFESTO DESIGN TYPES
// ==========================================

export interface VoterPrioritySurvey {
  stratification: string[];
  methodology: string;
  sampleSize: string;
  aiccCoordination: string;
}

export interface FocusGroupDiscussions {
  representativeConstituencies: string;
  demographicGroups: string[];
  swingVoterPopulations: string;
  purpose: string;
}

export interface ConstituencyLevelGathering {
  blockLevelMeetings: string;
  localMediaAnalysis: string;
  previousElectionAnalysis: string;
  localPowerStructures: string;
}

export interface ExpertConsultations {
  agriculturalEconomists: string;
  industrialRelations: string;
  legalExperts: string;
  healthExperts: string;
  educationExperts: string;
  energySpecialists: string;
  waterResource: string;
}

export interface CompetitiveAnalysis {
  aap2022Manifesto: string;
  sadPositions: string;
  bjpStatePositions: string;
  centralSchemes: string;
  differentiationOpportunities: string;
}

export interface DraftingPhase {
  brainstormingSessions: string;
  sectorCommittees: string[];
  legalReview: string;
  financialCosting: string;
  pilotTesting: string;
}

export interface ManifestoComponents {
  statementOfValues: string;
  sectorWiseCommitments: string;
  financialProjections: string;
  implementationTimeline: string;
  successIndicators: string;
}

export interface TestingPhase {
  voterReactionSurveys: string;
  socialMediaResponse: string;
  mediaAnalysis: string;
  focusGroupFeedback: string;
  revisionIterations: string;
}

export interface LaunchPhase {
  eventDesign: string;
  mediaStrategy: string;
  distributionPlan: string;
  digitalRollout: string;
}

// ==========================================
// COMMUNICATION STRATEGY TYPES
// ==========================================

export interface ChannelStrategy {
  traditionalMedia: string[];
  digitalPlatforms: string[];
  groundLevel: string[];
  microTargeting: string;
}

export interface MessageFramework {
  coreNarrative: string;
  keyMessages: string[];
  differentiationFromAAP: string;
  culturalResonance: string;
}

// ==========================================
// CONTENT STRATEGY TYPES
// ==========================================

export interface ContentPillars {
  pillar1: string;
  pillar2: string;
  pillar3: string;
  pillar4: string;
}

export interface ContentFormats {
  video: string[];
  graphics: string[];
  text: string[];
  audio: string[];
}

export interface RegionalContent {
  malwa: string;
  majha: string;
  doaba: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface ManifestoCommunicationData {
  metadata: ManifestoCommunicationMetadata;
  manifestoDesign: {
    researchPhase: {
      voterPrioritySurvey: VoterPrioritySurvey;
      focusGroupDiscussions: FocusGroupDiscussions;
      constituencyLevelGathering: ConstituencyLevelGathering;
      expertConsultations: ExpertConsultations;
      competitiveAnalysis: CompetitiveAnalysis;
    };
    draftingPhase: DraftingPhase;
    keyComponents: ManifestoComponents;
    testingPhase: TestingPhase;
    launchPhase: LaunchPhase;
  };
  communicationStrategy: {
    channelStrategy: ChannelStrategy;
    messageFramework: MessageFramework;
  };
  contentStrategy: {
    contentPillars: ContentPillars;
    contentFormats: ContentFormats;
    regionalContent: RegionalContent;
  };
}
