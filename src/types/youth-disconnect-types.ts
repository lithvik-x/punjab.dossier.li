// Youth Disconnect & Anti-Establishment Politics Types
// Derived from: direct-documentation/cat-7-public-sentiment/b36-youth-disconnect-anti-establishment.md
// Punjab Congress Digital Intelligence Dashboard 2027

/**
 * Youth Disillusionment Factors
 */
export interface YouthDisillusionmentFactors {
  structuralOrigins: string[];
  farmerProtestEffect: string;
  issuePriorities: string[];
}

/**
 * Apolitical Trend Data
 */
export interface ApoliticalTrendData {
  surveyData: string;
  intentionalNonEngagement: string;
  culturalFactors: string;
  generationalShift: string;
}

/**
 * Voter Turnout Historical Pattern
 */
export interface VoterTurnoutPattern {
  electionYear: number;
  turnout: number;
  trend: "Rising" | "Falling" | "Stable";
  notes?: string;
}

/**
 * Youth Turnout Specifics
 */
export interface YouthTurnoutSpecifics {
  firstTimeVoterTurnout: string;
  ageGroup: string;
  comparisonToStateAverage: string;
}

/**
 * Electoral Implications
 */
export interface ElectoralImplications {
  lowerTurnoutBenefit: string;
  aapUrbanStrategy: string;
  congressChallenge: string;
}

/**
 * Social Media Platform Dynamics
 */
export interface SocialMediaPlatformDynamics {
  platform: string;
  ageRange: string;
  politicalSignificance: string;
  notes: string;
}

/**
 * Migration Scale and Patterns
 */
export interface MigrationData {
  migrationType: "International" | "Internal";
  destinations: string[];
  estimatedAnnualEmigrants: string;
  ageGroup: string;
  selectivity: string;
}

/**
 * Voter Registration Impact
 */
export interface VoterRegistrationImpact {
  issue: string;
  affectedConstituencies: string;
  discrepancyRange: string;
  partiesMostAffected: string;
}

/**
 * AAP Youth Coalition Data
 */
export interface AAPYouthCoalition {
  year: number;
  youthVoteShare: string;
  attributedFactors: string[];
  erosionSignals?: string[];
}

/**
 * Congress Strategic Implications
 */
export interface CongressStrategicImplications {
  youthVoteChallenge: string;
  mobilizationArchitecture: string;
  regionalVariation: string;
}

/**
 * Key Concept Definition
 */
export interface KeyConcept {
  term: string;
  definition: string;
}

/**
 * Methodological Notes
 */
export interface MethodologicalNotes {
  ageDisaggregation: string;
  urbanRuralDistinction: string;
  migrationStatus: string;
  socialMediaAsSignal: string;
  regionalCalibration: string;
}

/**
 * Data Source Reference
 */
export interface DataSource {
  name: string;
  type: "Election Commission" | "ADR" | "CSDS" | "NSO" | "Government";
  reliability: "High" | "Medium" | "Low";
}

/**
 * Knowledge Confidence Level
 */
export interface ConfidenceLevel {
  category: string;
  confidence: "High" | "Medium" | "Low";
  verification: string;
}

/**
 * Youth Disconnect Report
 */
export interface YouthDisconnectReport {
  reportDate: string;
  documentationType: string;
  agent: string;
  taskId: string;
  frameworkReference: string;
  youthPopulationPercent: string;
  youthUnemploymentRate: string;
  disillusionmentFactors: YouthDisillusionmentFactors;
  apoliticalTrends: ApoliticalTrendData;
  turnoutPatterns: VoterTurnoutPattern[];
  youthTurnout: YouthTurnoutSpecifics;
  socialMediaDynamics: SocialMediaPlatformDynamics[];
  migrationData: MigrationData[];
  aapYouthCoalition: AAPYouthCoalition;
  congressStrategy: CongressStrategicImplications;
  keyConcepts: KeyConcept[];
  dataSources: DataSource[];
  confidenceLevels: ConfidenceLevel[];
  gaps: string[];
}
