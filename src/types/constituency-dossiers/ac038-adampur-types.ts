/**
 * AC038-Adampur Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC038-Adampur.md + AC038-Adampur-deep.md
 */

// Header and Overview
export interface AC038AdampurHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "SC" | "General";
  date: string;
}

export interface AC038AdampurOverview {
  description: string;
  administrativeSignificance: string;
  historicalSignificance: string;
  regionalContext: string;
}

// Election Result
export interface AC038ElectionResult {
  year: number;
  winner: string;
  party: string;
  votes?: number;
  margin?: string | number;
  marginVotes?: number;
  runnerUp?: string;
  runnerUpVotes?: number;
  votePercentage?: number;
  voteShare?: string;
  status: "Winner" | "Runner-up" | "Verifying" | "Not Available";
}

export interface AC038ElectionResults {
  2022: AC038ElectionResult;
  2017: AC038ElectionResult;
  2012: AC038ElectionResult;
}

// Caste Composition
export interface AC038CasteComposition {
  community: string;
  percentage: number | string;
  category: "SC" | "Jat Sikh" | "OBC" | "Hindu" | "Other";
}

// Voter Turnout
export interface AC038VoterTurnout {
  year: number;
  percentage: number | string;
  votes?: number;
  verificationStatus: "Verified" | "Needs Verification" | "Estimated";
}

// Key Local Issue
export interface AC038KeyLocalIssue {
  id: number;
  issue: string;
  description?: string;
  priority: "High" | "Medium" | "Low";
}

// Congress Position
export interface AC038CongressPosition {
  status: "CONTESTABLE" | "SAFE" | "VULNERABLE";
  margin: number;
  marginVotes: number;
  keyChallenge: string;
  threeWayContest: boolean;
  mainChallenger: string;
  strategy: string;
}

// Candidate Profile
export interface AC038CandidateProfile {
  preferredProfile: string;
  casteConsideration: string;
  casteNote: string;
  keyQualities: string[];
}

// Attack Line
export interface AC038AttackLine {
  id: number;
  topic: string;
  description: string;
  impact: "High" | "Medium" | "Low";
}

// Sources
export interface AC038Sources {
  primary: string[];
  secondary: string[];
  researchStatus: string;
}

// Deep dossier types

// Constituency Identity
export interface AC038AdministrativeGeographic {
  acNumber: number;
  parliamentarySegment: string;
  district: string;
  region: string;
  category: "SC";
  lokSabha: string;
  location: string;
}

export interface AC038HistoricalContext {
  significance: string;
  reservationContext: string;
}

export interface AC038EconomicIdentity {
  base: string;
  primaryActivities: string[];
  employment: string[];
}

export interface AC038SocioCultural {
  language: string;
  demographics: string;
  communityNote: string;
}

export interface AC038ConstituencyIdentity {
  administrative: AC038AdministrativeGeographic;
  historical: AC038HistoricalContext;
  economic: AC038EconomicIdentity;
  socioCultural: AC038SocioCultural;
}

// Demographic Deep Dive
export interface AC038SCDemographics {
  scPopulation: number;
  scPercentage: string;
  ruralSCPercentage: string;
  sikhSCPercentage: string;
  communities: string[];
}

export interface AC038ElectoralRoll {
  year: number;
  totalElectors: number;
  semiRural: boolean;
  agriculturalBase: boolean;
}

export interface AC038DemographicDeepDive {
  scDemographics: AC038SCDemographics;
  communityComposition: {
    predominantPopulation: string;
    language: string;
    occupation: string;
  };
  electoralRoll: AC038ElectoralRoll;
}

// Electoral History
export interface AC038ElectoralHistory {
  historicalPattern: string[];
  dalitAssertion: boolean;
  bspPresence: boolean;
  congressSCVoterBase: string;
}

export interface AC038VoterBehaviour {
  coreSupport: string;
  swingFactors: string;
  casteFactor: string;
}

export interface AC038ElectoralHistorySection {
  pastElections: AC038ElectoralHistory;
  voterBehaviour: AC038VoterBehaviour;
}

// Public Sentiment
export interface AC038PublicMood {
  keyIndicators: string[];
  pulse: string[];
  welfareExpectations: string[];
}

export interface AC038Issue {
  issue: string;
  priority: "High" | "Medium" | "Low";
  description?: string;
}

// Governance Gap
export interface AC038ServiceDelivery {
  sector: string;
  status: string;
  verificationStatus: "Verified" | "Needs Verification";
}

export interface AC038GovernanceGap {
  administrativeStructure: string[];
  governanceGaps: string[];
}

// Influencers & Power Structure
export interface AC038Influencer {
  name: string;
  category: string;
}

export interface AC038PowerCenter {
  center: string;
}

export interface AC038InfluencersPowerStructure {
  keyInfluencers: AC038Influencer[];
  powerCenters: AC038PowerCenter[];
}

// Strategic Blueprint
export interface AC038PartyStrategy {
  party: string;
  focus: string[];
}

export interface AC038StrategicBlueprint {
  congressStrategy: string[];
  aapStrategy: string[];
  bspStrategy: string[];
}

// Course Changing Factors
export interface AC038Wildcard {
  factor: string;
  description?: string;
}

export interface AC038MonitoringTrigger {
  trigger: string;
}

export interface AC038CourseChangingFactors {
  wildcards: AC038Wildcard[];
  monitoringTriggers: AC038MonitoringTrigger[];
}

// Complete Main Export
export interface AC038AdampurTypes {
  header: AC038AdampurHeader;
  overview: AC038AdampurOverview;
  electionResults: AC038ElectionResults;
  casteComposition: AC038CasteComposition[];
  voterTurnout: AC038VoterTurnout[];
  keyLocalIssues: AC038KeyLocalIssue[];
  congressPosition: AC038CongressPosition;
  candidateProfile: AC038CandidateProfile;
  attackLines: AC038AttackLine[];
  sources: AC038Sources;
  constituencyIdentity: AC038ConstituencyIdentity;
  demographicDeepDive: AC038DemographicDeepDive;
  electoralHistory: AC038ElectoralHistorySection;
  publicSentiment: AC038PublicMood;
  keyIssues: AC038Issue[];
  governanceGap: AC038GovernanceGap;
  influencersPowerStructure: AC038InfluencersPowerStructure;
  strategicBlueprint: AC038StrategicBlueprint;
  courseChangingFactors: AC038CourseChangingFactors;
  dataSources: AC038Sources;
  researchVerification?: {
    method: string;
    date: string;
    sources: string[];
    status: string;
  };
}

export type AC038AdampurType = AC038AdampurTypes;
