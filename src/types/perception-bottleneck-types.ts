// Perception Bottleneck Breaking Point Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g8-perception-bottleneck-breaking-point-methodology.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G8

// ==========================================
// BOTTLENECK TYPES
// ==========================================

export type BottleneckType =
  | "Winnability Belief"
  | "Competence Doubt"
  | "Integrity Question"
  | "Identity Mismatch"
  | "Priority Conflict";

export interface BottleneckDefinition {
  type: BottleneckType;
  definition: string;
  voterQuestion: string;
  underlyingFear: string;
  strategicCategory: string;
}

// ==========================================
// MEASUREMENT METHODOLOGY
// ==========================================

export interface BottleneckSurveyMetrics {
  metric: string;
  question: string;
  scale: string;
  threshold: string;
  measurementFrequency: string;
}

export interface FocusGroupProtocol {
  method: string;
  groupComposition: string;
  discussionTopics: string[];
  perceptionIndicators: string[];
}

export interface SocialMediaAnalysis {
  metric: string;
  platforms: string[];
  sentimentIndicators: string[];
  volumeThresholds: string;
  engagementMarkers: string[];
}

// ==========================================
// BREAKING POINT IDENTIFICATION
// ==========================================

export interface BreakingPointThreshold {
  bottleneckType: BottleneckType;
  socialProofThreshold: string;
  evidenceAccumulationPoint: string;
  authorityEndorsementTrigger: string;
  criticalIncidentRequirement: string;
  temporalAccelerationPoint: string;
}

export interface SocialProofIndicator {
  indicator: string;
  measurement: string;
  baseline: string;
  breakingPoint: string;
  exceedingThreshold: string;
}

export interface EvidenceAccumulation {
  evidenceType: string;
  quantity: string;
  quality: string;
  credibilityWeight: string;
  voterAccumulationPattern: string;
}

export interface AuthorityEndorsement {
  authorityType: string;
  credibilityScore: string;
  voterTrust: string;
  endorsementTiming: string;
  multiplierEffect: string;
}

export interface CriticalIncident {
  incidentType: string;
  severityRequirement: string;
  voterPerception: string;
  mediaAmplification: string;
  persistenceImpact: string;
}

export interface TemporalDynamics {
  accelerationFactor: string;
  thresholdVelocity: string;
  peakTiming: string;
  decayRate: string;
  reversalRisk: string;
}

// ==========================================
// COUNTER-NARRATIVE DESIGN
// ==========================================

export interface CounterNarrative {
  bottleneckType: BottleneckType;
  counterNarrative: string;
  evidenceRequired: string[];
  messengerRecommendation: string;
  deliveryChannels: string[];
  emotionalAppeal: string;
}

export interface NarrativeFraming {
  framing: string;
  storyElements: string[];
  emotionalResonance: string;
  evidenceBase: string;
  messengerCriteria: string;
}

export interface NarrativeEffectiveness {
  narrativeType: string;
  targetBottleneck: string;
  expectedShift: string;
  timeToEffect: string;
  decayRate: string;
}

// ==========================================
// PUNJAB-SPECIFIC BOTTLENECK INVENTORY
// ==========================================

export interface PunjabBottleneck {
  id: string;
  bottleneckType: BottleneckType;
  description: string;
  severity: number; // 1-10
  affectedVoterSegment: string;
  geographicConcentration: string;
  causeOrigin: string;
  currentEvidence: string[];
  breakingPointMetrics: string;
  recommendedCounterNarrative: string;
  urgencyLevel: "Critical" | "High" | "Medium";
}

export interface WinnabilityBottleneck extends PunjabBottleneck {
  bottleneckType: "Winnability Belief";
  perceivedGap: string;
  winningEvidenceRequired: string;
  timelineConstraint: string;
}

export interface CompetenceBottleneck extends PunjabBottleneck {
  bottleneckType: "Competence Doubt";
  specificCompetenceQuestion: string;
  governanceEvidenceRequired: string;
  deliveryTimeline: string;
}

export interface IntegrityBottleneck extends PunjabBottleneck {
  bottleneckType: "Integrity Question";
  specificIntegrityConcern: string;
  accountabilityEvidenceRequired: string;
  trustRebuildingApproach: string;
}

export interface IdentityBottleneck extends PunjabBottleneck {
  bottleneckType: "Identity Mismatch";
  voterIdentityConcern: string;
  alignmentEvidenceRequired: string;
  symbolicActionNeeded: string;
}

export interface PriorityConflictBottleneck extends PunjabBottleneck {
  bottleneckType: "Priority Conflict";
  conflictingPriority: string;
  issueHierarchyEvidence: string;
  prioritizationProof: string;
}

// ==========================================
// PRIORITIZATION MATRIX
// ==========================================

export interface BottleneckPriority {
  bottleneckId: string;
  severity: number;
  prevalence: string;
  easeOfResolution: "Easy" | "Moderate" | "Difficult";
  counterNarrativeAvailability: "High" | "Medium" | "Low";
  impactPotential: string;
  recommendedOrder: number;
}

export interface ResourceBottleneckAllocation {
  bottleneckId: string;
  severity: number;
  allocatedResources: string;
  expectedImpact: string;
  resourceEfficiency: string;
}

// ==========================================
// DEPLOYMENT CALENDAR
// ==========================================

export interface BottleneckIntervention {
  bottleneckId: string;
  interventionType: string;
  startDate: string;
  duration: string;
  keyMilestones: string[];
  resourceRequirement: string;
  coordinationNeeded: string;
}

export interface CampaignPhaseIntegration {
  phase: string;
  timeframe: string;
  primaryBottleneck: string;
  interventions: string[];
  successMetrics: string[];
}

export interface NarrativeDeploymentSequence {
  narrative: string;
  deploymentOrder: number;
  timingRationale: string;
  prerequisiteEvidence: string;
  parallelNarratives: string[];
  conflictingMessages: string[];
}

// ==========================================
// MONITORING & ADJUSTMENT
// ==========================================

export interface BottleneckTrackingMetric {
  bottleneckId: string;
  metric: string;
  baselineMeasurement: string;
  currentValue?: string;
  targetValue: string;
  measurementFrequency: string;
  dataSource: string;
}

export interface InterventionAdjustment {
  bottleneckId: string;
  intervention: string;
  adjustmentNeeded: string;
  rationale: string;
  expectedOutcome: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface BottleneckConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  evidenceQuality: string;
  punjabValidation: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface PerceptionBottleneckData {
  documentDate: string;
  agent: string;
  taskId: "G8";
  frameworkSections: string[];

  // Definitions
  bottleneckDefinitions: BottleneckDefinition[];
  types: BottleneckType[];

  // Measurement
  surveyMetrics: BottleneckSurveyMetrics[];
  focusGroupProtocol: FocusGroupProtocol;
  socialMediaAnalysis: SocialMediaAnalysis[];

  // Breaking Points
  breakingPointThresholds: BreakingPointThreshold[];
  socialProofIndicators: SocialProofIndicator[];
  evidenceAccumulation: EvidenceAccumulation[];
  authorityEndorsements: AuthorityEndorsement[];
  criticalIncidents: CriticalIncident[];
  temporalDynamics: TemporalDynamics;

  // Counter-Narratives
  counterNarratives: CounterNarrative[];
  narrativeFramings: NarrativeFraming[];
  narrativeEffectiveness: NarrativeEffectiveness[];

  // Punjab Inventory
  punjabBottlenecks: PunjabBottleneck[];
  winnabilityBottlenecks: WinnabilityBottleneck[];
  competenceBottlenecks: CompetenceBottleneck[];
  integrityBottlenecks: IntegrityBottleneck[];
  identityBottlenecks: IdentityBottleneck[];
  priorityConflictBottlenecks: PriorityConflictBottleneck[];

  // Prioritization
  bottleneckPriorities: BottleneckPriority[];
  resourceAllocation: ResourceBottleneckAllocation[];

  // Deployment
  interventions: BottleneckIntervention[];
  campaignPhaseIntegration: CampaignPhaseIntegration[];
  narrativeDeploymentSequence: NarrativeDeploymentSequence[];

  // Monitoring
  trackingMetrics: BottleneckTrackingMetric[];
  interventionAdjustments: InterventionAdjustment[];

  // Confidence
  knowledgeConfidence: BottleneckConfidence[];
}
