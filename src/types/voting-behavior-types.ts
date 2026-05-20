// Voting Behavior Theories & Models Types for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/b32-voting-behavior-theories-models.md
// Date: 20 May 2026 | Agent: Track B | Task ID: B32

// ==========================================
// COLUMBIA SCHOOL
// ==========================================

export interface ColumbiaSchool {
  coreFramework: string;
  keyPrinciples: string[];
  politicalApplication: string;
  punjabApplication: string;
  limitations: string;
}

// ==========================================
// MICHIGAN MODEL
// ==========================================

export interface MichiganModel {
  coreFramework: string;
  funnelComponents: {
    longTerm: string;
    mediumTerm: string;
    shortTerm: string;
    voteDecision: string;
  };
  keyConcepts: {
    partyImage: string;
    candidateImage: string;
    issueVoting: string;
    retrospectiveVoting: string;
  };
  punjabModifications: {
    candidateCentricVolatility: string;
    retrospectivePunishment: string;
    imageVsRealityGap: string;
  };
}

// ==========================================
// RATIONAL CHOICE THEORY
// ==========================================

export interface RationalChoiceTheory {
  corePremise: string;
  keyAssumptions: string[];
  politicalApplication: string;
  punjabVoterRationality: string;
  limitations: string[];
}

// ==========================================
// INDIAN ELECTORAL BEHAVIOR
// ==========================================

export interface CasteVotingContinuum {
  position: "Caste-Exclusive" | "Caste-Conscious" | "Caste-Irrelevant";
  description: string;
}

export interface CasteVotingBloc {
  community: string;
  populationPercent: string;
  historicalAlignment: string;
  currentPattern: string;
}

export interface CommunityVsDevelopment {
  type: "Community Voting" | "Development Voting";
  description: string;
  punjabManifestation: string;
}

export interface TicketSplittingPattern {
  election: string;
  lokSabhaResult: string;
  assemblyResult: string;
  pattern: string;
}

// ==========================================
// PUNJAB-SPECIFIC RESEARCH
// ==========================================

export interface JatSikhVotingPatterns {
  traditionalAlignment: string;
  volatility2017to2022: string;
  developmentVsCommunity: string;
  deraInfluence: string;
}

export interface SCVoteBankDynamics {
  historicalPattern: string;
  shift2022: string;
  determinants: string[];
  subCasteComplexity: string;
}

export interface UrbanRuralVoting {
  urbanPattern2022: string;
  ruralPattern2022: string;
  ruralUrbanDivide: string;
}

export interface PunjabSpecificResearch {
  pre2000Studies: string;
  period2007to2017: string;
  post2022Analysis: string;
  methodologyNotes: string;
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export interface VotingTheoryConcept {
  name: string;
  definition: string;
  theoreticalOrigin: string;
}

export interface TheoreticalModel {
  name: string;
  origin: string;
  keyPrinciples: string[];
  punjabApplicability: string;
}

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export interface VotingBehaviorConfidence {
  category: string;
  confidenceLevel: "High" | "Medium" | "Low";
  notes: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface VotingBehaviorData {
  documentDate: string;
  agent: string;
  taskId: string;
  frameworkReference: string;

  // Theories
  columbiaSchool: ColumbiaSchool;
  michiganModel: MichiganModel;
  rationalChoiceTheory: RationalChoiceTheory;

  // Indian Electoral Behavior
  casteVotingContinuum: CasteVotingContinuum[];
  casteVotingBlocs: CasteVotingBloc[];
  communityVsDevelopment: CommunityVsDevelopment;
  ticketSplitting: TicketSplittingPattern[];

  // Punjab-Specific
  jatSikhPatterns: JatSikhVotingPatterns;
  scVoteBankDynamics: SCVoteBankDynamics;
  urbanRuralVoting: UrbanRuralVoting;
  punjabResearch: PunjabSpecificResearch;

  // Key Concepts
  keyConcepts: VotingTheoryConcept[];
  theoreticalModels: TheoreticalModel[];

  // Confidence
  knowledgeConfidence: VotingBehaviorConfidence[];
  researchGaps: string[];
}
