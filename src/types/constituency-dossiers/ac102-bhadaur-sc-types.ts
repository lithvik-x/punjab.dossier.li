/**
 * AC102-Bhadaur-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC102-Bhadaur-SC.md, AC102-Bhadaur-deep.md
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
  parliamentarySegment: string;
  type: 'SC';
  area: string;
  pollingBooths: VerificationStatus;
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string | VerificationStatus;
  party: string | VerificationStatus;
  votePercentage?: string | VerificationStatus;
  margin?: string;
  runnerUp?: string;
  runnerUpParty?: string;
  runnerUpVotes?: string;
  source?: string;
}

// Electoral history
export interface ElectoralHistory {
  elections: ElectionResult[];
  voterBehaviour: VoterBehaviour;
}

// Voter behaviour analysis
export interface VoterBehaviour {
  turnout: VerificationStatus;
  casteFactor: string;
  swingPattern: string;
}

// Caste composition data
export interface CasteComposition {
  sc: string | VerificationStatus;
  scMazhabiSikh?: string;
  scRavidasiaChamar?: string;
  jatSikh?: string;
  obc?: string;
  hinduUpperCaste?: string;
  muslim?: string;
  note?: string;
}

// Electorate data
export interface ElectorateData {
  totalElectors: string;
  totalElectorsNumeric?: number;
  voterTurnout2022?: string;
  voterTurnout2022Numeric?: number;
  scElectors?: string;
  scElectorsNumeric?: number;
}

// Key local issues
export interface KeyLocalIssue {
  issue: string;
  description: string;
  affectedSegments: string[];
  priority: number;
}

// Congress strategic position
export interface CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  lesson2022: string;
  strengths: string[];
  weaknesses: string[];
}

// Recommended candidate profile
export interface CandidateProfile {
  caste: string;
  castePreference?: string;
  profile: string;
  attributes: string[];
  background: string;
  keyQualities?: string[];
}

// Attack lines against AAP
export interface AttackLine {
  category: string;
  description: string;
}

// Executive summary
export interface ExecutiveSummary {
  overview: string;
  dataCurrency: string;
}

// Constituency metadata
export interface ConstituencyMetadata {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: string;
  dataCurrency: string;
}

// Census demographic data (Barnala district)
export interface CensusDemographics {
  totalPopulation: number;
  male: number;
  female: number;
  sexRatio: string;
  scPopulationNote: VerificationStatus;
}

// Deep research data structure
export interface DeepResearchData {
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: string;
  dataCurrency: string;
}

// Geographic context
export interface GeographicContext {
  location: string;
  district: string;
  description: string;
}

// Deep dive election results (with verification markers)
export interface DeepDiveElectionResults {
  year2022: ElectionDataPoint;
  year2017: ElectionDataPoint;
  year2012: ElectionDataPoint;
}

export interface ElectionDataPoint {
  winner: VerificationStatus;
  party: VerificationStatus;
  margin: VerificationStatus;
  totalElectors?: string;
  note?: string;
}

// Key issues from deep research
export interface DeepDiveKeyIssues {
  drugCrisis: string[];
  agrarianDistress: string[];
  developmentGaps: string[];
  casteSpecificIssues: string[];
}

// Political leadership data
export interface PoliticalLeadership {
  currentMLA: VerificationStatus;
  keyPoliticalFigures: VerificationStatus;
}

// Voter outreach data
export interface VoterOutreach {
  voterTurnout2022: VerificationStatus;
  stateAverage?: string;
}

// Government schemes data
export interface GovernmentSchemes {
  scSpecificBeneficiaryData: VerificationStatus;
}

// Intelligence gaps
export interface IntelligenceGap {
  item: string;
  field: string;
  section: string;
  priority: 'high' | 'medium' | 'low';
}

// Research priorities
export interface ResearchPriority {
  priority: number;
  item: string;
}

// Key attack lines for Congress (from deep research)
export interface CongressAttackLine {
  category: string;
  description: string;
}

// Complete constituency dossier
export interface Ac102BhadaurScDossier {
  // Header metadata
  metadata: ConstituencyMetadata;
  executiveSummary: ExecutiveSummary;

  // Section 1: Identity & Baseline
  identity: ConstituencyIdentity;
  geographicContext: GeographicContext;

  // Section 2: Demographics
  casteComposition: CasteComposition;
  electorateData: ElectorateData;
  censusDemographics: CensusDemographics;

  // Section 3: Electoral History
  electoralHistory: ElectoralHistory;

  // Section 4: Key Issues
  keyLocalIssues: KeyLocalIssue[];

  // Section 5: Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;

  // Section 6: Candidate Recommendation
  recommendedCandidateProfile: CandidateProfile;
  attackLinesAgainstAAP: AttackLine[];

  // Section 7: Notes
  notes: string[];

  // Data sources
  dataSources: string[];
}

// Deep dive specific types (from AC102-Bhadaur-deep.md)
export interface Ac102BhadaurDeepResearch {
  // Metadata
  metadata: DeepResearchData;

  // Constituency overview
  constituencyOverview: string;

  // Geographic context
  geographicContext: GeographicContext;

  // Election results (needs verification)
  electionResults: DeepDiveElectionResults;

  // Demographics
  casteDemographics: CasteComposition;
  censusDemographics: CensusDemographics;

  // Electoral trends
  electoralTrends: VerificationStatus;

  // Key issues
  keyIssues: DeepDiveKeyIssues;

  // Political leadership
  politicalLeadership: PoliticalLeadership;

  // Voter outreach
  voterOutreach: VoterOutreach;

  // Government schemes
  governmentSchemes: GovernmentSchemes;

  // Attack lines for Congress
  attackLinesForCongress: CongressAttackLine[];

  // Intelligence gaps
  intelligenceGaps: IntelligenceGap[];

  // Research priorities
  researchPriorities: ResearchPriority[];

  // Sources
  sources: string[];
}

// Combined data structure for dashboard
export interface Ac102BhadaurScCombinedData {
  dossier: Ac102BhadaurScDossier;
  deepDive: Ac102BhadaurDeepResearch;
}

// Data conflict tracking
export interface DataConflict<T> {
  value: T;
  source: string;
  conflictingSource?: string;
  conflictNote?: string;
}

// Caste composition conflict (main file vs deep file)
export interface CasteCompositionConflict {
  mainFileValue: string;
  deepFileValue: string;
  conflictNote: string;
  requiresVerification: boolean;
}

// Elector count conflict
export interface ElectorCountConflict {
  mainFileValue: string;
  deepFileValue: VerificationStatus;
  conflictNote: string;
  requiresVerification: boolean;
}

// Verification item for tracking
export interface VerificationItem {
  field: string;
  section: string;
  status: VerificationStatus;
  priority: 'high' | 'medium' | 'low';
  notes?: string;
}

// Complete verification audit trail
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
  percentage: string;
  numericPercentage?: number;
}

// SWOT item for dashboard
export interface SwotItem {
  category: 'strength' | 'weakness' | 'opportunity' | 'threat';
  item: string;
  priority?: number;
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

// Region type
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';

// District type
export type District = 'Barnala' | 'Pathankot' | 'Gurdaspur' | 'SBS Nagar' | 'Hoshiarpur' | 'Jalandhar' | 'Kapurthala' | 'Moga' | 'Ferozepur' | 'Fazilka' | 'Muktsar' | 'Lehra' | 'Ropar' | 'SAS Nagar' | 'Patiala' | 'Sangrur' | 'Bathinda' | 'Mansa' | 'Faridkot';

// Party abbreviations mapping
export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  Congress: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
};

// Election year constants
export const ELECTION_YEARS = [2012, 2017, 2022] as const;
export type ElectionYear = typeof ELECTION_YEARS[number];

// Priority levels for issues
export type IssuePriorityLevel = 1 | 2 | 3 | 4 | 5;

// SWOT category type
export type SwotCategory = 'strength' | 'weakness' | 'opportunity' | 'threat';
