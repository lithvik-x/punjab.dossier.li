// Women Voting & Gender Politics Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/b28-women-voting-gender-politics.md
// Date: 20 May 2026 | Agent: Track B | Task ID: B28

// ==========================================
// WOMEN VOTER TURNOUT
// ==========================================

export interface WomenTurnoutTrend {
  period: string;
  turnout: string;
  genderGap: string;
  trend: string;
}

export interface GenderGapFactor {
  factor: string;
  impact: "High" | "Moderate" | "Low";
  regionalVariation: string;
}

export interface WomenVoterMobilization {
  strategy: string;
  channels: string[];
  targetSegment: string;
}

// ==========================================
// GENDER VOTING PATTERNS
// ==========================================

export interface GenderVotingPattern {
  pattern: string;
  description: string;
  evidence?: string;
}

export interface SwingVotingPattern {
  pattern: string;
  description: string;
}

export interface FamilyVotingDynamics {
  description: string;
  patriarchalConsultationModel: string;
  matriarchInfluence: string;
  newlyMarriedWomenConstraint: string;
  hiddenInfluenceMechanism: string;
}

export interface WomenIssuePriority {
  rank: number;
  issue: string;
  description: string;
}

// ==========================================
// WOMEN POLITICAL REPRESENTATION
// ==========================================

export interface WomenMLATrend {
  period: string;
  womenMLAs: number;
  percentOfAssembly: string;
}

export interface WomenReservationImpact {
  currentSeats: number;
  reservedSeats: number;
  expectedImpact: string;
  regionalDistribution: {
    malwa: number;
    doaba: number;
    majha: number;
  };
}

export interface WomenPartyLeadership {
  party: string;
  positions: string;
  representationLevel: string;
}

// ==========================================
// SAFETY CONCERNS
// ==========================================

export interface CrimeAgainstWomenStats {
  category: string;
  annualCases: string;
  trend: string;
}

export interface SafetyIssue {
  issue: string;
  intensity: "Very High" | "High" | "Moderate";
  affectedWomen: string;
  electoralRelevance: string;
}

export interface GovernmentScheme {
  name: string;
  status: "Active" | "Discontinued" | "Reduced";
  originalBenefit: string;
  politicalImpact: string;
  congressAdvantage: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface WomenVotingConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  source: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface WomenVotingData {
  documentDate: string;
  agent: string;
  taskId: string;
  frameworkReference: string;

  // Turnout
  turnoutTrends: WomenTurnoutTrend[];
  genderGapFactors: GenderGapFactor[];
  mobilizationStrategies: WomenVoterMobilization[];

  // Voting Patterns
  genderVotingPatterns: GenderVotingPattern[];
  swingPatterns: SwingVotingPattern[];
  familyDynamics: FamilyVotingDynamics;
  issuePriorities: WomenIssuePriority[];

  // Representation
  womenMLATrends: WomenMLATrend[];
  womenReservationImpact: WomenReservationImpact;
  partyLeadership: WomenPartyLeadership[];

  // Safety
  crimeStats: CrimeAgainstWomenStats[];
  safetyIssues: SafetyIssue[];
  governmentSchemes: GovernmentScheme[];
  congressAdvantage: string;

  // Knowledge
  knowledgeConfidence: WomenVotingConfidence[];
}
