/**
 * AC004-Gurdaspur Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC004-Gurdaspur.md + AC004-Gurdaspur-deep.md
 */

export interface AC004GurdaspurHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General";
  date: string;
}

export interface AC004GurdaspurOverview {
  description: string;
  administrativeSignificance: string;
  historicalSignificance: string;
  regionalContext: string;
}

export interface AC004ElectionResult {
  year: number;
  winner: string;
  party: string;
  votes?: number;
  margin?: string | number;
  marginVotes?: number;
  runnerUp?: string;
  votePercentage?: number;
  status: "Winner" | "Runner-up" | "Verifying";
}

export interface AC004ElectionResults {
  2022: AC004ElectionResult;
  2017: AC004ElectionResult;
  2012: AC004ElectionResult;
}

export interface AC004CasteComposition {
  community: string;
  percentage: number;
  category: "Jat Sikh" | "SC" | "OBC" | "Upper Caste" | "Minority" | "Other";
}

export interface AC004KeyLocalIssue {
  id: number;
  issue: string;
  description?: string;
  priority?: "High" | "Medium" | "Low";
}

export interface AC004CongressPosition {
  "2022Win": boolean;
  margin: number;
  marginVotes: number;
  keyChallenge: string;
  strategy: string;
}

export interface AC004CandidateProfile {
  preferredProfile: string;
  casteConsideration: string;
  casteNote?: string;
  keyQualities: string[];
}

export interface AC004AttackLine {
  topic: string;
  description: string;
  impact: "High" | "Medium" | "Low";
}

export interface AC004Sources {
  primary: string[];
  secondary: string[];
  researchStatus: string;
}

// Deep dossier types

export interface AC004AdministrativeGeographic {
  acNumber: number;
  parliamentarySegment: string;
  district: string;
  type: "GEN" | "General";
  city: string;
  area: string;
  borderInfo: string;
}

export interface AC004HistoricalContext {
  significance: string;
  etymology: string;
  cantonment: string;
  freedomMovement: string;
  partitionImpact: string;
}

export interface AC004EconomicIdentity {
  primaryActivities: string[];
  employment: string[];
  crops: string[];
  industry: string[];
}

export interface AC004SocioCultural {
  language: string;
  religiousComposition: {
    community: string;
    percentage: number;
  }[];
  casteCompositionNote: string;
  cultural: string;
}

export interface AC004AdministrativeSetup {
  municipalCouncil: string;
  health: string;
  education: string;
}

export interface AC004ConstituencyIdentity {
  administrative: AC004AdministrativeGeographic;
  historical: AC004HistoricalContext;
  economic: AC004EconomicIdentity;
  socioCultural: AC004SocioCultural;
  administrativeSetup: AC004AdministrativeSetup;
}

export interface AC004CensusData {
  year: number;
  population: number;
  male: number;
  female: number;
  estimated2026?: number;
  sexRatio: number;
  literacyRate: number;
  urbanPercentage: number;
  ruralPercentage: number;
}

export interface AC004ElectoralRoll {
  totalElectors: string | number;
  voterTurnout?: string;
  year: number;
  verificationStatus: "Verified" | "Needs Verification";
}

export interface AC004SchemePenetration {
  scheme: string;
  coverage: string;
  status: "Active" | "Verified" | "Needs Verification";
}

export interface AC004DemographicDeepDive {
  censusData: AC004CensusData;
  electoralRoll: AC004ElectoralRoll;
  schemePenetration: AC004SchemePenetration[];
}

export interface AC004VoterBehaviour {
  coreSupport: string;
  swingPattern: string;
  casteFactor: string;
}

export interface AC004PublicMood {
  mla: string;
  mlaParty: string;
  expectations: string[];
}

export interface AC004Issue {
  issue: string;
  priority: "High" | "Medium" | "Low";
  description?: string;
}

export interface AC004ServiceDelivery {
  sector: string;
  status: string;
  verificationStatus: "Verified" | "Needs Verification";
}

export interface AC004SpecialConcern {
  concern: string;
  description: string;
}

export interface AC004IssueVoterMapping {
  issue: string;
  prioritySegment: string;
}

export interface AC004PoliticalFigure {
  name: string;
  role: string;
  party?: string;
  source?: string;
}

export interface AC004SwotCategory {
  items: string[];
}

export interface AC004Swot {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface AC004Narrative {
  title: string;
  description: string;
}

export interface AC004PrioritySegment {
  rank: number;
  segment: string;
  description: string;
}

export interface AC004StrategicBlueprint {
  narratives: AC004Narrative[];
  prioritySegments: AC004PrioritySegment[];
}

export interface AC004DataSources {
  sources: string[];
  researchStatus: string;
}

export interface AC004DistrictVotingPattern {
  party: string;
  percentage: number;
  source: string;
}

export interface AC004ResearchVerification {
  method: string;
  date: string;
  sources: string[];
}

// Complete main export

export interface AC004GurdaspurTypes {
  header: AC004GurdaspurHeader;
  overview: AC004GurdaspurOverview;
  electionResults: AC004ElectionResults;
  casteComposition: AC004CasteComposition[];
  keyLocalIssues: AC004KeyLocalIssue[];
  congressPosition: AC004CongressPosition;
  candidateProfile: AC004CandidateProfile;
  attackLines: AC004AttackLine[];
  sources: AC004Sources;
  constituencyIdentity: AC004ConstituencyIdentity;
  demographicDeepDive: AC004DemographicDeepDive;
  electoralHistory: {
    pastElections: AC004ElectionResult[];
    voterBehaviour: AC004VoterBehaviour;
    districtVotingPattern?: AC004DistrictVotingPattern[];
  };
  publicSentiment: AC004PublicMood;
  keyIssues: AC004Issue[];
  governanceGap: {
    serviceDelivery: AC004ServiceDelivery[];
    specialConcerns: AC004SpecialConcern[];
  };
  localIssues: {
    issueVoterMapping: AC004IssueVoterMapping[];
  };
  influencersPowerStructure: {
    politicalFigures: AC004PoliticalFigure[];
    casteEquations: string;
  };
  swot: AC004Swot;
  strategicBlueprint: AC004StrategicBlueprint;
  dataSources: AC004DataSources;
  researchVerification?: AC004ResearchVerification;
}

export type AC004GurdaspurType = AC004GurdaspurTypes;
