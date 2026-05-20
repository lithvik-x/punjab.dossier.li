// Election Violence & Security Planning Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b31-election-violence-security-planning.md

// ==========================================
// SECURITY ASSESSMENT
// ==========================================

export interface HistoricalElectionViolence {
  period: string;
  description: string;
  severity: string;
}

export interface CurrentThreatAssessment {
  category: string;
  description: string;
}

export interface SensitiveArea {
  region: string;
  districts: string[];
  reasons: string;
  riskLevel: "Critical" | "High" | "Medium";
}

export interface CommunityTensionPoint {
  community: string;
  description: string;
  riskFactors: string[];
}

export interface CriminalPoliticianNexusRisk {
  category: string;
  description: string;
  mitigation: string;
}

// ==========================================
// VIOLENCE PREVENTION
// ==========================================

export interface CAPFDeployment {
  phase: string;
  description: string;
  forces: string[];
}

export interface StatePoliceDeployment {
  area: string;
  control: string;
  hierarchy: string[];
}

export interface SpecializedUnit {
  unit: string;
  function: string;
}

export interface SurveillanceTeam {
  type: string;
  function: string;
  deployment: string;
}

export interface BoothCapturePrevention {
  indicators: string[];
  preventionMechanisms: string[];
  responseProtocol: string;
}

// ==========================================
// SENSITIVE BOOTH IDENTIFICATION
// ==========================================

export interface BoothSensitivityCriteria {
  criteria: string;
  description: string;
}

export interface VulnerabilityMapping {
  type: "Geographic" | "Temporal" | "Social" | "Infrastructure";
  description: string;
}

export interface RiskTier {
  tier: 1 | 2 | 3;
  classification: "Critical" | "Sensitive" | "Normal";
  description: string;
  securityMeasures: string[];
}

export interface DeploymentOptimization {
  strategy: string;
  description: string;
}

// ==========================================
// RAPID RESPONSE
// ==========================================

export interface CrisisCommunicationProtocol {
  chainOfCommand: string;
  stakeholderCommunication: string[];
  mediaManagement: string;
  transparencyProvisions: string;
}

export interface LegalResponseFramework {
  immediateAction: string;
  electionSpecificMechanism: string;
  evidencePreservation: string;
  humanRightsConsiderations: string;
}

export interface MedicalEmergencyProtocol {
  resource: string;
  positioning: string;
  capability: string;
}

export interface EvacuationProcedure {
  scenario: string;
  authority: string;
  steps: string[];
}

export interface EvidencePreservationProtocol {
  documentation: string;
  witnessProtection: string;
  digitalEvidence: string;
  ballotBoxIntegrity: string;
}

// ==========================================
// LEGAL FRAMEWORK
// ==========================================

export interface IPCProvision {
  section: string;
  offense: string;
  penalty: string;
}

export interface ECIRegulation {
  category: string;
  description: string;
}

export interface CompensationFramework {
  type: string;
  description: string;
  authority: string;
}

export interface CriminalProcedureStep {
  stage: string;
  description: string;
  timeline: string;
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const ELECTION_VIOLENCE_CONCEPTS = {
  capf: "Central Armed Police Forces under Ministry of Home Affairs",
  sensitiveBooth: "Polling station with elevated risk of malpractice or violence",
  boothCapturing: "Unauthorized takeover of polling station under Section 229A IPC",
  flyingSquad: "Mobile police team responding to electoral malpractice",
  vvat: "Voter Verifiable Paper Audit Trail",
  microObserver: "Civilian ECI observer at polling stations",
  modelCodeOfConduct: "ECI guidelines governing campaign conduct",
  deo: "District Election Officer - chief election official at district level",
  countermand: "ECI power to cancel poll and order re-polling",
  staticSurveillance: "Fixed security position at polling station",
  rapidResponseTeam: "Team designated for emergent security situations"
} as const;

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export const ELECTION_VIOLENCE_CONFIDENCE = {
  overall: "Medium",
  legalProvisions: "High - Published IPC sections and ECI regulations",
  deploymentProtocols: "High - General Indian election security practices",
  punjabSpecific: "Medium - Historical patterns and current threat assessment",
  intelligenceBasedJudgments: "Low - Cannot be independently verified"
} as const;
