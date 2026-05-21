/**
 * AC107-Dhuri Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC107-Dhuri.md, AC107-Dhuri-deep.md
 */

// Verification status for data points
export type VerificationStatus = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// Core constituency identification
export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  nameClean: string;
  district: string;
  region: string;
  category: string;
  dataCurrency: string;
}

// Geographic context
export interface GeographicContext {
  description: string;
  economy: string;
  populationType: string;
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  margin?: string;
  marginVotes?: number;
  runnerUp?: string;
  runnerUpParty?: string;
  note?: string;
}

// Deep dive election data with more detail
export interface DeepDiveElectionData {
  winner: string;
  party: string;
  votes: number;
  voteShare: string;
  runnerUp: string;
  runnerUpParty: string;
  margin: string;
  marginVotes: number;
  turnout?: string;
  note?: string;
}

// Caste composition data
export interface CasteComposition {
  jatSikh: string;
  obc: string;
  sc: string;
  hinduUpperCaste: string;
  others: string;
}

// Electorate data
export interface ElectorateData {
  totalElectors: string;
  voterTurnout2022: string;
}

// District demographics from census (Sangrur)
export interface DistrictDemographics {
  totalPopulation: number;
  male: number;
  female: number;
  rural: string;
  urban: string;
}

// Key local issues
export interface LocalIssue {
  issue: string;
  description: string;
}

// Congress strategic position
export interface CongressStrategicPosition {
  currentPosition: string;
  historicalChallenge: string;
  opportunity: string;
  strengths: string[];
  weaknesses: string[];
}

// Recommended candidate profile
export interface CandidateProfile {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
}

// Attack lines against AAP/CM
export interface AttackLine {
  line: string;
}

// Notes
export interface ConstituencyNotes {
  cmPersonalConstituency: string;
  antiIncumbency: string;
  industrialPotential: string;
  symbolicVictory: string;
}

// Research metadata (from deep file)
export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

// Deep dive executive summary
export interface DeepDiveExecutiveSummary {
  summary: string;
  keyContext: string[];
}

// Deep dive constituency profile
export interface DeepDiveConstituencyProfile {
  acNumber: number;
  district: string;
  region: string;
  type: VerificationStatus;
  geographicContext: string;
}

// 2022 election results (deep)
export interface DeepDive2022Results {
  winner: string;
  party: string;
  votes: number;
  votesAlternative?: number;
  status: string;
  runnerUp: string;
  runnerUpVotes?: number;
  margin: string;
  marginVotes: number;
  keyContext: string[];
}

// Caste-demographics composition
export interface DeepDiveCasteDemographics {
  communityComposition: VerificationStatus;
  districtLevelDemographics: DistrictDemographics;
}

// Electoral trends
export interface DeepDiveElectoralTrends {
  aapWon2022: boolean;
  cmSeat: boolean;
  margin: string;
  historicalPattern: string;
  historicalPatternStatus: VerificationStatus;
}

// Key issues and grievances
export interface DeepDiveKeyIssues {
  drugCrisis: string[];
  agrarianDistress: string[];
  developmentGaps: string[];
}

// Political leadership
export interface DeepDivePoliticalLeadership {
  currentMla: string;
  party: string;
  position: string;
  keyPoliticalFigures: string[];
  keyPoliticalFiguresStatus: VerificationStatus;
}

// Voter outreach
export interface DeepDiveVoterOutreach {
  turnout2022: VerificationStatus;
  stateAverage: string;
}

// Government schemes
export interface DeepDiveGovernmentSchemes {
  note: VerificationStatus;
}

// Intelligence gaps
export interface DeepDiveIntelligenceGaps {
  gaps: string[];
  requiresVerification: string[];
}

// Research priorities
export interface DeepDiveRecommendations {
  researchPriorities: string[];
}

// Deep research data
export interface DeepResearchData {
  metadata: ResearchMetadata;
  executiveSummary: DeepDiveExecutiveSummary;
  constituencyProfile: DeepDiveConstituencyProfile;
  electionResults2022: DeepDive2022Results;
  casteDemographics: DeepDiveCasteDemographics;
  electoralTrends: DeepDiveElectoralTrends;
  keyIssuesAndGrievances: DeepDiveKeyIssues;
  politicalLeadership: DeepDivePoliticalLeadership;
  voterOutreach: DeepDiveVoterOutreach;
  governmentSchemes: DeepDiveGovernmentSchemes;
  intelligenceGaps: DeepDiveIntelligenceGaps;
  recommendations: DeepDiveRecommendations;
  sources: string[];
}

// Main dossier data
export interface MainDossierData {
  identity: ConstituencyIdentity;
  executiveSummary: string;
  electionResults: {
    year2022: ElectionResult;
    year2017: ElectionResult;
    year2012: ElectionResult;
  };
  casteComposition: CasteComposition;
  electorateData: ElectorateData;
  localIssues: LocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: CandidateProfile;
  attackLinesAgainstAAP: AttackLine[];
  notes: ConstituencyNotes;
}

// Complete constituency dossier (combined)
export interface Ac107DhuriDossier {
  metadata: {
    acNumber: number;
    name: string;
    district: string;
    region: string;
    date: string;
    researchMethod: string;
  };
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
}

// Data conflict tracking
export interface DataConflict<T> {
  value: T;
  source: string;
  conflictingSource?: string;
  conflictNote?: string;
}

// Vote count conflict between sources
export interface VoteCountConflict {
  mainFileVotes?: number;
  deepFileVotes: number;
  deepFileVotesAlternative?: number;
  runnerUpVotesDeep: number;
  marginMainFile: string;
  marginDeepFile: string;
  conflictNote: string;
}

// Verification item for tracking
export interface VerificationItem {
  field: string;
  section: string;
  status: VerificationStatus;
  priority: 'high' | 'medium' | 'low';
  notes?: string;
}

// Verification audit trail
export interface VerificationAudit {
  constituencyId: string;
  totalFields: number;
  verified: number;
  needsVerification: number;
  pending: number;
  estimated: number;
  highPriorityItems: VerificationItem[];
  lastUpdated: string;
}

// Dashboard display types
export interface DossierSummary {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  currentMLA: string;
  currentParty: string;
  lastElection: number;
  researchStatus: 'complete' | 'partial' | 'needs_more_data';
  verificationProgress: number;
}

// UI Filter types for constituency dashboard
export interface ConstituencyFilters {
  district?: string;
  region?: string;
  type?: 'SC' | 'ST' | 'GEN';
  searchQuery?: string;
}

// Electoral data for charts
export interface ElectionChartData {
  year: number;
  winnerParty: string;
  winnerVoteShare: number | null;
  margin: number | null;
  totalElectors: number;
}

// Caste demographics for pie/donut charts
export interface CasteDemographics {
  category: string;
  percentage: number;
  color?: string;
}

// Issue display for dashboard
export interface IssueDisplayItem {
  issue: string;
  affectedSegments: string[];
  priority: number;
  isVerified: boolean;
}

// ============================================
// UTILITY TYPES & HELPERS
// ============================================

// All verification statuses as a union type
export type AllVerificationStatuses = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// Constituency type union
export type ConstituencyType = 'SC' | 'ST' | 'GEN';

// Research status union
export type ResearchStatus = 'complete' | 'partial' | 'needs_more_data';

// Party abbreviations mapping
export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
};

// Election year constants
export const ELECTION_YEARS = [2012, 2017, 2022] as const;
export type ElectionYear = typeof ELECTION_YEARS[number];

// Priority levels for issues
export type IssuePriorityLevel = 1 | 2 | 3 | 4 | 5;

// Region type
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';

// District type
export type District =
  | 'Sangrur'
  | 'Patiala'
  | 'Ropar'
  | 'SAS Nagar'
  | 'Ludhiana'
  | 'Jalandhar'
  | 'Hoshiarpur'
  | 'Kapurthala'
  | 'SBS Nagar'
  | 'Ferozepur'
  | 'Moga'
  | 'Bathinda'
  | 'Mansa'
  | 'Faridkot'
  | 'Pathankot'
  | 'Gurdaspur';
