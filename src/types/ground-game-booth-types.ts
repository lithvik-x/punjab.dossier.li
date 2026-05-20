// Ground Game & Booth-Level Operations Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b42-ground-game-booth-operations.md

// ==========================================
// BOOTH-LEVEL ORGANIZATION
// ==========================================

export interface BoothLevelStructure {
  role: string;
  count: string;
  responsibilities: string[];
}

export interface BoothCommitteeStructure {
  type: "Booth President" | "Booth Committee" | "Extended Network";
  description: string;
  size: string;
}

export interface WorkerIdentificationChannel {
  channel: string;
  description: string;
}

export interface TrainingModule {
  module: string;
  content: string[];
}

export interface VoterProfileCard {
  section: string;
  fields: string[];
}

export interface VoterClassification {
  category: "Assured Supporter" | "Probable Supporter" | "Swing Voter" | "Probable Opposition Supporter" | "Assured Opposition Supporter";
  description: string;
}

export interface LocalIssueCategory {
  category: string;
  examples: string[];
}

export interface BoothCaptainResponsibility {
  area: string;
  tasks: string[];
}

// ==========================================
// WORKER DEPLOYMENT
// ==========================================

export interface WorkerVoterRatio {
  constituencyType: "Urban" | "Rural" | "Semi-Urban" | "Dera Influence Zone";
  ratio: string;
  committeeSize: string;
}

export interface ZoneArchitecture {
  component: string;
  description: string;
}

export interface PriorityZoning {
  priority: "High" | "Medium" | "Low";
  description: string;
  resourceLevel: string;
}

export interface SpecializedTeam {
  team: string;
  focus: string;
  methods: string[];
}

export interface BoothPriorityCategory {
  category: "A" | "B" | "C";
  description: string;
  characteristics: string[];
}

export interface VolunteerMotivationStrategy {
  element: string;
  description: string;
}

// ==========================================
// VOTER CONTACT PROGRAMS
// ==========================================

export interface CanvassingPreparation {
  step: string;
  description: string;
}

export interface CanvassingScript {
  component: string;
  description: string;
}

export interface ContactDocumentation {
  field: string;
  description: string;
}

export interface PhoneBankingProtocol {
  step: number;
  description: string;
}

export interface WhatsAppContactTree {
  aspect: string;
  description: string;
}

export interface VoterIDDrive {
  purpose: string;
  targetPopulation: string[];
  forms: string[];
}

export interface SupporterTaggingCategory {
  tag: "Green" | "Yellow" | "Orange" | "Red" | "Black";
  meaning: string;
  action: string;
}

export interface TaggingMethodology {
  factor: string;
  description: string;
}

export interface AccuracyTarget {
  metric: string;
  targetPercentage: string;
}

// ==========================================
// GOTV EXECUTION
// ==========================================

export interface IntensificationProtocol {
  phase: string;
  focus: string[];
}

export interface TransportAssessment {
  voterCategory: string;
  needs: string[];
}

export interface TransportPlanning {
  mechanism: string;
  description: string;
  legalCompliance: string;
}

export interface BoothDutyRoster {
  role: string;
  responsibilities: string[];
}

export interface ShiftSchedule {
  aspect: string;
  description: string;
}

export interface ElectionDayMetric {
  metric: string;
  target: string;
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const GROUND_GAME_CONCEPTS = {
  boothLevelOrganization: "Structured hierarchy at polling station level",
  gotv: "Get Out the Vote - maximizing supporter turnout",
  voterProfileCard: "Comprehensive booth-level voter record",
  supporterTagging: "Classification by voting probability",
  contactTree: "Cascading digital messaging network",
  workerToVoterRatio: "Active workers per voter for resource allocation",
  zoneBasedDeployment: "Geographic organization with hierarchical oversight",
  phoneBanking: "Systematic voter calling by telephone",
  boothPresident: "Primary volunteer at polling station level",
  sectorIncharge: "Oversees multiple booths",
  swayamsevak: "Traditional term for party volunteer"
} as const;

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export const GROUND_GAME_CONFIDENCE = {
  overall: "High",
  boothOrganization: "High - Standard Indian political party practice",
  punjabApplicability: "High - Based on documented organizational characteristics",
  ratios: "Medium - Typical practice, requires calibration"
} as const;
