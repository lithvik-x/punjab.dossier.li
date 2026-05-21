/**
 * AC104-Mehal-Kalan-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC104-Mehal-Kalan-SC.md, AC104-MehalKalan-deep.md
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
  category: string;
  dataCurrency: string;
}

// Geographic context
export interface GeographicContext {
  description: string;
  terrain: string;
}

// Historical context
export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  movementHistory: VerificationStatus;
}

// Economic profile
export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string;
  landholding: string;
}

// Socio-cultural profile
export interface SocioCulturalIdentity {
  language: string;
  religion: string;
  casteComposition: CasteComposition;
  culturalInstitutions: string[];
}

// Caste composition data
export interface CasteComposition {
  scMazhabiSikh: string;
  scRavidasia: string;
  jatSikh: string;
  obc: string;
  hinduUpperCaste: string;
  others: string;
}

// District demographics from census
export interface DistrictDemographics {
  totalPopulation: number;
  male: number;
  female: number;
  sexRatio: string;
}

// Administrative setup
export interface AdministrativeSetup {
  panchayats: string;
  health: VerificationStatus;
  education: VerificationStatus;
}

// Census and demographic data
export interface CensusData {
  population2011: VerificationStatus;
  electors2022: number;
  sexRatio: VerificationStatus;
  literacy: VerificationStatus;
}

// Electoral roll analytics
export interface ElectoralRollAnalytics {
  totalElectors: string;
  voterTurnout2022: string;
  scElectors: string;
  source?: string;
}

// Scheme penetration
export interface SchemePenetration {
  pds: string;
  mgnrega: string;
  pmKisan: VerificationStatus;
  socialPensions: string;
}

// Digital access
export interface DigitalAccess {
  smartphonePenetration: string;
  socialMedia: string[];
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string | VerificationStatus;
  party: string | VerificationStatus;
  votePercentage?: string | VerificationStatus;
  votes?: number | VerificationStatus;
  margin?: string;
  runnerUp?: string;
  runnerUpParty?: string;
  source?: string;
}

// Deep dive election data with more detail
export interface DeepDiveElectionData {
  year: number;
  winner: string;
  party: string;
  votes: number;
  voteShare: string;
  turnout: string;
  runnerUp: string;
  runnerUpParty: string;
  margin?: string;
}

// Electoral history
export interface ElectoralHistory {
  elections: ElectionResult[];
  voterBehaviour: VoterBehaviour;
}

// Deep dive electoral history
export interface DeepDiveElectoralHistory {
  year2022: DeepDiveElectionData;
  year2017: VerificationStatus;
  year2012: VerificationStatus;
}

// Voter behaviour analysis
export interface VoterBehaviour {
  turnout: VerificationStatus;
  casteFactor: string;
  swingPattern: string;
}

// Current mood
export interface CurrentMood {
  mlaName: string;
  mlaParty: string;
  mlaTerm: string;
  expectations: string[];
}

// Issue priority
export interface IssuePriority {
  issue: string;
  prioritySegment: string;
}

// Key issues
export interface KeyIssues {
  issues: string[];
  issueVoterMapping: IssuePriority[];
}

// Key local issues (from main file)
export interface LocalIssue {
  issue: string;
  description: string;
}

// Governance gap
export interface GovernanceGap {
  schools: VerificationStatus;
  health: VerificationStatus;
  roads: VerificationStatus;
  scWelfareSchemes: VerificationStatus;
  scholarships: VerificationStatus;
}

// Service delivery
export interface ServiceDelivery {
  schools: VerificationStatus;
  healthAnmAsha: VerificationStatus;
  roads: VerificationStatus;
}

// Influencer types
export interface Influencer {
  name?: string;
  type: string;
  status: VerificationStatus;
}

// Political nodes
export interface PoliticalNodes {
  currentMLA: CurrentMLA;
  oppositionNetwork: string;
  boothLevel: VerificationStatus;
}

// Current MLA
export interface CurrentMLA {
  name: string;
  party: string;
  term: string;
}

// Media landscape
export interface MediaLandscape {
  description: string;
  channels: string[];
}

// SWOT entries
export interface SwotEntries {
  items: string[];
}

// SWOT analysis
export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// Strategic narratives
export interface StrategicNarrative {
  narrative: string;
  priority: number;
}

// Priority segment
export interface PrioritySegment {
  segment: string;
  description: string;
  percentage?: string;
}

// Strategic blueprint
export interface StrategicBlueprint {
  topNarratives: string[];
  prioritySegments: PrioritySegment[];
}

// Issue-voter mapping
export interface IssueVoterMapping {
  issue: string;
  prioritySegment: string;
}

// Complete constituency dossier (main file structure)
export interface Ac104MehalKalanScDossier {
  // Header metadata
  metadata: ConstituencyMetadata;

  // Section 1: Identity & Baseline
  identity: ConstituencyIdentity;
  geographicContext: GeographicContext;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;
  administrativeSetup: AdministrativeSetup;

  // Section 2: Demographics
  censusData: CensusData;
  districtDemographics: DistrictDemographics;
  electoralAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;
  digitalAccess: DigitalAccess;

  // Section 3: Electoral History
  electoralHistory: ElectoralHistory;

  // Section 4: Public Sentiment
  publicSentiment: PublicSentiment;

  // Section 5: Governance Gap
  governanceGap: GovernanceGap;
  serviceDelivery: ServiceDelivery;

  // Section 6: Local Issues
  localIssues: LocalIssues;

  // Section 7: Influencers & Power Structure
  influencers: Influencers;

  // Section 8: Media Landscape
  mediaLandscape: MediaLandscape;

  // Section 9: SWOT Analysis
  swot: SwotAnalysis;

  // Section 10: Strategic Blueprint
  strategicBlueprint: StrategicBlueprint;

  // Data sources
  dataSources: string[];

  // Research status
  researchStatus: string;
}

// Supporting interfaces
export interface ConstituencyMetadata {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  date: string;
  researchMethod: string;
  type: 'SC';
}

export interface PublicSentiment {
  currentMood: CurrentMood;
  keyIssues: KeyIssues;
}

export interface LocalIssues {
  issues: string[];
  issueVoterMapping: IssueVoterMapping[];
}

export interface Influencers {
  nonPolitical: Influencer[];
  politicalNodes: PoliticalNodes;
}

// Deep dive specific types (from AC104-MehalKalan-deep.md)
export interface DeepDiveOverview {
  executiveSummary: string;
  constituencyProfile: DeepDiveConstituencyProfile;
  electionResults: DeepDiveElectionResults;
  casteDemographics: DeepDiveCasteDemographics;
  districtDemographics: DistrictDemographics;
  electoralTrends: ElectoralTrends;
  keyIssuesAndGrievances: KeyIssuesAndGrievances;
  politicalLeadership: PoliticalLeadership;
  voterOutreach: VoterOutreach;
  governmentSchemes: GovernmentSchemes;
  attackLinesForCongress: AttackLine[];
  intelligenceGaps: IntelligenceGaps;
  recommendations: DeepDiveRecommendations;
  sources: string[];
}

export interface DeepDiveConstituencyProfile {
  acNumber: number;
  district: string;
  region: string;
  lokSabhaSeat: string;
  type: string;
  geographicContext: string;
}

export interface DeepDiveElectionResults {
  winner: string;
  party: string;
  votes: number;
  voteShare: string;
  turnout: string;
  runnerUp: string;
  runnerUpParty: string;
  margin: string;
  marginStatus: VerificationStatus;
}

export interface ElectoralTrends {
  aapWon2022: boolean;
  voteShare: string;
  turnout: string;
  historicalPattern: VerificationStatus;
}

export interface DeepDiveCasteDemographics {
  scPopulation: string;
  scVotersNote: string;
  districtCasteBreakdown?: DistrictCasteBreakdown;
}

export interface DistrictCasteBreakdown {
  totalPopulation: number;
  male: number;
  female: number;
  sexRatio: string;
}

export interface KeyIssuesAndGrievances {
  drugCrisis: string[];
  agrarianDistress: string[];
  scCommunityIssues: string[];
  developmentGaps: string[];
}

export interface PoliticalLeadership {
  currentMLA: CurrentMLAInfo;
  keyPoliticalFigures: VerificationStatus;
}

export interface CurrentMLAInfo {
  name: string;
  party: string;
  term: string;
}

export interface VoterOutreach {
  turnout2022: string;
  stateAverage: string;
}

export interface GovernmentSchemes {
  note: VerificationStatus;
}

export interface AttackLine {
  category: string;
  description: string;
}

export interface IntelligenceGaps {
  gaps: string[];
  requiresVerification: string[];
}

export interface DeepDiveRecommendations {
  researchPriorities: string[];
}

// Congress strategic position (from main file)
export interface CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  challenge: string;
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

// Attack lines against AAP (from main file)
export interface AttackLineMain {
  line: string;
}

// Notes
export interface ConstituencyNotes {
  scReservedSeat: string;
  marginSignificance: string;
  groundMobilization: string;
  mazhabiSikhCommunity: string;
}

// Combined data structure for dashboard
export interface Ac104MehalKalanScCombinedData {
  dossier: Ac104MehalKalanScDossier;
  deepDive: DeepDiveOverview;
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: CandidateProfile;
  attackLinesAgainstAAP: AttackLineMain[];
  notes: ConstituencyNotes;
}

// Data conflict tracking
export interface DataConflict<T> {
  value: T;
  source: string;
  conflictingSource?: string;
  conflictNote?: string;
}

// Margin conflict between source files
export interface MarginConflict {
  mainFileValue: string; // "30,347 votes"
  deepFileValue: string; // "[NEEDS VERIFICATION]"
  conflictNote: string;
}

// Verification item for tracking what needs verification
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

// SWOT as array of objects for dashboard display
export interface SwotItem {
  category: 'strength' | 'weakness' | 'opportunity' | 'threat';
  item: string;
  priority?: number;
}

// Issue mapping for visual display
export interface IssueDisplayItem {
  issue: string;
  affectedSegments: string[];
  priority: number;
  isVerified: boolean;
}

// ============================================
// UTILITY TYPES & HELPERS
// ============================================

// All verification statuses as a union type for validation
export type AllVerificationStatuses = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// Constituency type union
export type ConstituencyType = 'SC' | 'ST' | 'GEN';

// Research status union
export type ResearchStatus = 'complete' | 'partial' | 'needs_more_data';

// MLA term type
export type MLATerm = 'first_term' | 'second_term' | 'multi_term';

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

// SWOT category type
export type SwotCategory = 'strength' | 'weakness' | 'opportunity' | 'threat';

// Region type
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';

// District type
export type District =
  | 'Pathankot'
  | 'Gurdaspur'
  | 'SBS Nagar'
  | 'Hoshiarpur'
  | 'Jalandhar'
  | 'Kapurthala'
  | 'Moga'
  | 'Ferozepur'
  | 'Fazilka'
  | 'Muktsar'
  | 'Lehra'
  | 'Ropar'
  | 'SAS Nagar'
  | 'Patiala'
  | 'Sangrur'
  | 'Barnala'
  | 'Bathinda'
  | 'Mansa'
  | 'Faridkot';
