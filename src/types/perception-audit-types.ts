// Perception Audit & Strategy Formation Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b22-perception-audit-strategy-formation.md

// ==========================================
// PERCEPTION AUDIT METHODOLOGY
// ==========================================

export interface PartyPerceptionMetrics {
  partyIdStrength: {
    description: string;
    historicalRange: string;
  };
  institutionalTrust: {
    description: string;
    measuredThrough: string[];
  };
  retrospectiveEvaluation: {
    description: string;
    creates: string;
  };
  prospectiveEvaluation: {
    description: string;
    drivers: string;
  };
}

export interface LeaderPerceptionMetrics {
  favorabilityRatings: {
    description: string;
    measurement: string;
  };
  nameRecognition: {
    aided: string;
    unaided: string;
  };
  trustAndAuthenticity: {
    description: string;
    stability: string;
  };
  leadershipTraitAttribution: {
    traits: string[];
    variationByDemographic: string;
  };
}

export interface IssueOwnershipAnalysis {
  issue: string;
  owner: "Congress" | "AAP" | "SAD" | "BJP" | "Contestable";
  currentPerception: string;
  recoveryPotential: string;
}

export interface PositioningQuadrant {
  dimension1: string;
  dimension2: string;
  voterPosition: string;
}

export interface VoterSegmentClassification {
  segment: "Core Loyalists" | "Soft Supporters" | "Tactical Switchers" | "Convertible Opponents" | "Deep Opposition";
  estimatedPercentage: string;
  campaignReachability: string;
  description: string;
}

export interface MediaToneAnalysis {
  traditionalMedia: {
    printCoverage: string;
    electronicMedia: string;
    regionalLanguageMedia: string;
  };
  socialMediaIntelligence: {
    mentionVolume: string;
    sentimentClassification: string;
    influencerIdentification: string;
  };
  earnedMediaValuation: string;
}

export interface DeraLandscape {
  name: string;
  location: string;
  followerBase: string;
  mobilizationCapacity: string;
  politicalAlignment: string;
}

// ==========================================
// CAMPAIGN STRATEGY FORMATION
// ==========================================

export interface CampaignObjectives {
  tier1: {
    type: "Seat Target";
    description: string;
    target: string;
    requiredVoteShare: string;
  };
  tier2: {
    type: "Vote Shift Targets";
    regionalTargets: RegionalVoteShift[];
  };
  tier3: {
    type: "Perception Movement Targets";
    metrics: string[];
  };
}

export interface RegionalVoteShift {
  region: "Malwa" | "Majha" | "Doaba";
  target: string;
  currentAAPVotersToConvert: string;
}

export interface VictoryPathway {
  name: string;
  description: string;
  seatTarget: number;
  keyStrategy: string;
}

export interface ResourceAllocation {
  category: string;
  percentage: string;
  description: string;
}

export interface TimelinePhase {
  phase: string;
  timing: string;
  focus: string[];
  keyActivities: string[];
}

export interface MilestoneCheckpoint {
  week: string;
  focus: string[];
  deliverables: string[];
}

export interface ContingencyScenario {
  scenario: string;
  probability: string;
  impact: string;
  responseProtocol: string[];
}

export interface StakeholderAlignment {
  stakeholder: string;
  roles: string[];
  integrationRequirements: string[];
}

// ==========================================
// NARRATIVE ARCHITECTURE
// ==========================================

export interface MasterNarrative {
  theme: string;
  coreElements: {
    diagnosis: string;
    villain: string;
    solution: string;
    hero: string;
  };
  emotionalResonance: string;
  sustainabilityCriteria: string[];
}

export interface SubNarrative {
  audience: string;
  region?: string;
  community?: string;
  focus: string;
  keyMessages: string[];
}

export interface EmotionalArchitecture {
  pathway: {
    step: string;
    description: string;
    objective: string;
  }[];
  toneCalibration: string[];
}

export interface MessageHierarchy {
  umbrellaMessage: string;
  coreMessages: string[];
  supportingPoints: string[];
}

export interface NarrativeTesting {
  methodology: string;
  timing: string;
  metrics: string[];
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const PERCEPTION_AUDIT_CONCEPTS = {
  netFavorability: "Favorable minus unfavorable percentage",
  issueOwnership: "Voter perception of party competence on specific issues",
  positioningQuadrant: "2x2 matrix mapping voter perceptions",
  messageDiscipline: "Consistent core messaging across all communications",
  narrativeArchitecture: "Overarching story connecting all campaign communications",
  subNarrative: "Master narrative adapted for specific audience segments",
  gotv: "Get Out the Vote operations",
  dera: "Spiritual movement with significant voter influence in Punjab"
} as const;

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface PerceptionAuditConfidence {
  section: string;
  confidence: "High" | "Medium" | "Low";
  reasoning: string;
  requiresVerification?: string[];
}

export const PERCEPTION_AUDIT_CONFIDENCE: PerceptionAuditConfidence[] = [
  {
    section: "General perception audit methodologies",
    confidence: "High",
    reasoning: "Well-established in political marketing literature"
  },
  {
    section: "Punjab-specific electoral dynamics",
    confidence: "Medium",
    reasoning: "General knowledge, requires current local validation"
  },
  {
    section: "Dera endorsement probabilities",
    confidence: "Low",
    reasoning: "Requires field verification"
  },
  {
    section: "Voter segmentation percentages",
    confidence: "Medium",
    reasoning: "Requires primary research for current calibration"
  }
];
