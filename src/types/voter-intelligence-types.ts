// Voter Intelligence & Segmentation Types for Punjab Congress 2027 Election
// Derived from: research-P5/voter-enticement/ and research-P5/demography-derivation/

/**
 * Voter Demographics
 */
export interface PunjabDemographics {
  totalElectorate: number;
  assemblySeats: number;
  lokSabhaSeats: number;
  voterTurnout2022: number;
  genderRatio: string;
}

export interface ReligiousComposition {
  community: string;
  populationPercent: number;
  politicalSignificance: string;
}

export interface CasteDemographics {
  casteCategory: string;
  populationPercent: number;
  keySubgroups: string[];
  influentialSeats: number;
}

/**
 * Regional Segmentation
 */
export interface RegionalSegment {
  region: "Malwa" | "Majha" | "Doaba";
  seats: number;
  percentOfAssembly: number;
  characteristics: string;
  dominantCaste: string;
  politicalLean: string;
  keyIssues: string[];
  congressStrategy: string;
}

export interface VoterPersona {
  type: string;
  profile: string;
  priorityIssues: string[];
  votingTrigger: string;
  historicalAlignment: string;
  sensitivity: string;
}

/**
 * Swing Voter Categories
 */
export interface SwingVoterCategory {
  group: string;
  sizeEstimate: string;
  keyIssues: string[];
  swingPotential: "Very High" | "High" | "Medium";
  targetStrategy: string;
}

/**
 * Issue-Based Voter Targeting
 */
export interface IssueTargeting {
  issue: string;
  affectedVoters: string;
  percentAffected: number;
  coreConcerns: string[];
  messaging: string;
}

/**
 * Congress Voter Coalition
 */
export interface CongressCoalitionTarget {
  segment: string;
  populationPercent: number;
  currentSupport: string;
  targetSupport: string;
  strategy: string[];
  messaging: string;
}

/**
 * BJP Target Voter Segments
 */
export interface BJPTargetSegment {
  community: string;
  population: string;
  currentSupport: string;
  bjpTarget: string;
  congressRisk: "High" | "Medium" | "Low";
}

/**
 * Micro-Targeting Data
 */
export interface MicroTargeting {
  segment: string;
  coreIssue: string;
  primaryMessage: string;
  secondaryMessage: string;
  channel: string;
  contactFrequency: string;
}

/**
 * NRI Voter Engagement
 */
export interface NRIVoterData {
  region: string;
  estimatedPopulation: number;
  votingPotential: number;
  keyConcerns: string[];
  engagementStrategy: string;
}

/**
 * Voter Registration Metrics
 */
export interface VoterRegistrationMetrics {
  category: string;
  metric: string;
  value: string;
  note: string;
}

/**
 * Booth-Level Voter Data
 */
export interface BoothLevelData {
  totalBooths: number;
  votersPerBooth: string;
  boothWorkersTarget: number;
  pannaPramukhs: number;
}

/**
 * Voter Contact Strategy
 */
export interface VoterContactStrategy {
  stage: string;
  timing: string;
  objective: string;
  channels: string[];
  targetRate: string;
}

/**
 * Congress Voter Outreach Priority
 */
export interface VoterOutreachPriority {
  priority: number;
  voterGroup: string;
  size: string;
  strategy: string;
  messaging: string;
}
