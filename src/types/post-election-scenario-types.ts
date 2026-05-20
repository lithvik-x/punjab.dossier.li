// Post-Election Scenario Planning Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g39-post-election-scenario-planning.md

// ==========================================
// SCENARIO PARAMETERS
// ==========================================

export interface ElectoralOutcomeScenario {
  scenario: string;
  probability: string;
  characteristics: string[];
}

export interface PreparedResponseComponent {
  component: string;
  description: string;
}

export interface VictoryPathway {
  name: string;
  requirements: string[];
  timeline: string;
}

// ==========================================
// SCENARIO A: MAJORITY GOVERNMENT
// ==========================================

export interface MajorityScenarioActions {
  immediate: string[];
  shortTerm: string[];
  mediumTerm: string[];
}

export interface CommunicationFramework {
  audience: string;
  message: string;
  channel: string;
}

export interface LeadershipNegotiation {
  scenario: string;
  dynamics: string;
  negotiationPoints: string[];
}

// ==========================================
// SCENARIO B: HUNG ASSEMBLY
// ==========================================

export interface HungAssemblyDynamics {
  keyFactor: string;
  description: string;
}

export interface AllianceNegotiationStrategy {
  party: string;
  approach: string;
  leveragePoints: string[];
}

export interface RapidResponsePlaybook {
  trigger: string;
  response: string[];
  timeline: string;
}

// ==========================================
// SCENARIO C: OPPOSITION
// ==========================================

export interface OppositionPositioning {
  immediateActions: string[];
  messagingFramework: string;
  organizationalStrengthening: string[];
}

export interface LearningFromLoss {
  focusArea: string;
  questions: string[];
}

// ==========================================
// PREPAREDNESS VELOCITY
// ==========================================

export interface PrePositionedResource {
  type: string;
  location: string;
  readyBy: string;
}

export interface PreClearedDecision {
  decision: string;
  authority: string;
  preClearanceDate: string;
}

export interface PreScriptedCommunication {
  scenario: string;
  message: string;
  audience: string;
}

// ==========================================
// 72-HOUR WINDOW PROTOCOL
// ==========================================

export interface ImmediateResponseAction {
  hour: string;
  action: string;
  responsible: string;
}

export interface MediaStrategy {
  channel: string;
  message: string;
  timing: string;
}

export interface GroundActivistGuidance {
  instruction: string;
  channel: string;
}

// ==========================================
// COALITION MANAGEMENT
// ==========================================

export interface PotentialCoalitionPartner {
  party: string;
  seatShare: string;
  compatibility: string;
  negotiationApproach: string;
}

export interface CoalitionRedLine {
  issue: string;
  party: string;
  position: string;
}

// ==========================================
// LEGAL CHALLENGES
// ==========================================

export interface LegalGround {
  type: string;
  description: string;
  evidence: string[];
}

export interface LegalChallengeRisk {
  scenario: string;
  likelihood: string;
  impact: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export const POST_ELECTION_CONFIDENCE = {
  overall: "Medium-High",
  framework: "High - Based on established political scenario planning",
  punjabSpecific: "Medium - Requires validation of assumptions",
  timing: "High - Historical Punjab post-election patterns documented"
} as const;
