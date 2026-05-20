// Opposition Research & Attack Strategy Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b40-opposition-research-attack-strategy.md

// ==========================================
// OPPOSITION RESEARCH METHODOLOGY
// ==========================================

export interface ResearchPhase {
  phase: number;
  name: string;
  description: string;
  outputs: string[];
}

export interface DataCollectionSource {
  category: string;
  description: string;
  reliability: string;
}

export interface VerificationTier {
  level: "Verified" | "Confirmed" | "Unverified" | "Disputed";
  criteria: string;
}

export interface VulnerabilityAssessment {
  dimension: string;
  score: string;
  criteria: string;
}

export interface IntelligencePackage {
  type: "Candidate Brief" | "Opposing Candidate Profile" | "Media Package";
  contents: string[];
}

export interface ResearchEthicalBoundary {
  category: "Prohibited Methods" | "Privacy Boundaries" | "Accuracy Responsibilities" | "Source Protection";
  rules: string[];
}

// ==========================================
// VULNERABILITY IDENTIFICATION
// ==========================================

export interface CandidateVulnerability {
  category: "Criminal" | "Financial" | "Professional" | "Personal";
  description: string;
  verificationApproach: string;
  messageStrategy: string;
}

export interface PartyVulnerability {
  party: "AAP" | "SAD-BJP";
  vulnerabilityCategory: string;
  description: string;
  exploitationPotential: string;
}

export interface LeaderVulnerability {
  type: "Statement" | "Association" | "Image" | "Lifestyle";
  description: string;
  verificationRequirements: string;
}

export interface ComparativeAssessment {
  dimension: string;
  description: string;
  prioritizationCriteria: string;
}

// ==========================================
// ATTACK ADVERTISING
// ==========================================

export interface AttackTypology {
  type: "Comparative Advertising" | "Associative Messaging" | "Contextual Framing";
  description: string;
  requirements: string[];
  effectiveness: string;
}

export interface MessageDevelopmentProcess {
  stage: string;
  activities: string[];
}

export interface MessageTestingMethod {
  method: string;
  description: string;
}

export interface AttackTiming {
  phase: string;
  focus: string;
  escalation: string;
}

export interface AmplificationChannel {
  channel: string;
  description: string;
  advantages: string;
  challenges: string;
}

// ==========================================
// TRUTH-SQUADDING OPERATIONS
// ==========================================

export interface FactCheckProtocol {
  step: string;
  description: string;
}

export interface ClaimRating {
  rating: "True" | "Mostly True" | "Partially False" | "Mostly False" | "False";
  criteria: string;
}

export interface PreemptiveStrategy {
  approach: string;
  description: string;
}

export interface CounterNarrativeArchitecture {
  opponentNarrative: string;
  counterNarrative: string;
  deploymentStrategy: string;
}

export interface ResponseEscalation {
  level: 1 | 2 | 3 | 4;
  trigger: string;
  responseType: string;
  targetTime: string;
}

export interface PostResponseAssessment {
  dimension: string;
  questions: string[];
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const OPPOSITION_RESEARCH_CONCEPTS = {
  oppositionResearch: "Systematic collection and analysis of opponent information",
  vulnerabilityAssessment: "Evaluation of information for strategic utility",
  negativeCampaigning: "Communication disadvantaging opponents",
  attackAdvertising: "Paid communication highlighting opponent weaknesses",
  truthSquadOperations: "Fact-checking and rapid response capabilities",
  comparativeAdvertising: "Direct contrast between sponsoring candidate and opponent",
  associativeMessaging: "Linking opponent to negative concepts without explicit claim",
  counterNarrativeDevelopment: "Alternative interpretive frameworks for events"
} as const;

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export const OPPOSITION_RESEARCH_CONFIDENCE = {
  overall: "High",
  frameworkMethodology: "High - Established political communication scholarship",
  punjabApplication: "Medium - Requires empirical validation",
  voterResponsePatterns: "Medium - Requires focus groups and testing",
  socialMediaDynamics: "Medium - Platform changes challenge established frameworks"
} as const;
