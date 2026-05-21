/**
 * AC070-Jagraon-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC070-Jagraon-SC.md, AC070-Jagraon-deep.md
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
  tehsil: string;
  area: string;
}

// Historical context
export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  notableConnections: string;
}

// Economic profile
export interface EconomicIdentity {
  primaryActivities: string[];
  economy: string;
  notableTowns: string[];
}

// Socio-cultural profile
export interface SocioCulturalIdentity {
  language: string;
  religion: string;
  casteComposition: CasteComposition;
  culturalNotes: string[];
}

// Caste composition data
export interface CasteComposition {
  dominant: ScCommunity[];
  other: string[];
  note?: string;
}

// SC communities in Jagraon
export interface ScCommunity {
  name: string;
  significance: string;
}

// Administrative setup
export interface AdministrativeSetup {
  tehsil: string;
  keyTowns: string[];
  urbanRuralComposition: string;
}

// Census and demographic data
export interface CensusData {
  population2011: VerificationStatus;
  electors2022: VerificationStatus;
  sexRatio: VerificationStatus;
  literacy: VerificationStatus;
}

// Electoral roll analytics
export interface ElectoralRollAnalytics {
  totalElectors2017: number;
  validVotes2017: number;
  totalCandidates2022: number;
  voterTurnout2022: VerificationStatus;
  genderGap: VerificationStatus;
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  votesReceived?: string | VerificationStatus;
  margin?: string;
  runnerUp?: string;
  runnerUpParty?: string;
  runnerUpVotes?: string | VerificationStatus;
  totalElectors?: number | VerificationStatus;
  validVotes?: number | VerificationStatus;
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

// Current mood
export interface CurrentMood {
  mlaName: string;
  mlaParty: string;
  mlaTerm: string;
  incumbentNote: string;
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

// Congress strategic position
export interface CongressStrategicPosition {
  currentStatus: string;
  keyChallenges: string[];
  opportunities: string[];
}

// Candidate profile
export interface CandidateProfile {
  idealCandidate: IdealCandidate;
  selectionCriteria: string[];
}

// Ideal candidate requirements
export interface IdealCandidate {
  caste: string;
  profile: string;
  background: string;
  connect: string;
  priority: string;
}

// Attack lines
export interface AttackLine {
  vulnerability: string;
  description: string;
}

// Congress narrative
export interface CongressNarrative {
  narratives: string[];
}

// Margin analysis entry
export interface MarginAnalysisEntry {
  year: number;
  winner: string;
  party: string;
  note: string;
}

// Public sentiment
export interface PublicSentiment {
  currentMood: CurrentMood;
  keyIssues: KeyIssues;
  congressPosition: CongressStrategicPosition;
  narratives: CongressNarrative;
}

// Local issues
export interface LocalIssues {
  primaryIssues: string[];
  secondaryIssues: string[];
  issueVoterMapping: IssuePriority[];
}

// Influencer types
export interface Influencer {
  type: string;
  status: VerificationStatus;
}

// Political nodes
export interface PoliticalNodes {
  currentMLA: CurrentMLA;
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

// Influencers
export interface Influencers {
  nonPolitical: Influencer[];
  politicalNodes: PoliticalNodes;
}

// ============================================
// DEEP DIVE TYPES (from AC070-Jagraon-deep.md)
// ============================================

// Executive summary
export interface ExecutiveSummary {
  overview: string;
  keyWinner: string;
  party: string;
  historicalSignificance: string;
}

// Constituency profile
export interface ConstituencyProfile {
  basicDetails: BasicDetails;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
}

// Basic details
export interface BasicDetails {
  acNumber: number;
  district: string;
  region: string;
  category: string;
  parliamentaryConstituency: string;
  tehsil: string;
}

// Geographic boundaries
export interface GeographicBoundaries {
  location: string;
  border: string;
  keyTowns: string[];
}

// Urban-rural composition
export interface UrbanRuralComposition {
  type: string;
  economy: string;
  historicalSignificance: string;
}

// 2022 Election results deep
export interface DeepDiveElectionResults2022 {
  winner: string;
  party: string;
  runnerUp: string;
  runnerUpParty: string;
  totalCandidates: number;
  note?: string;
}

// Key contestants
export interface KeyContestant {
  name: string;
  party: string;
  result?: string;
}

// 2017 Reference data
export interface DeepDive2017Data {
  totalElectors: number;
  validVotes: number;
  note: string;
}

// Demographics deep
export interface DemographicsDeep {
  population: PopulationData;
  casteComposition: CasteCompositionDeep;
  religiousComposition: ReligiousComposition;
}

// Population data
export interface PopulationData {
  jagraonTown: VerificationStatus;
  constituency: VerificationStatus;
}

// Caste composition deep
export interface CasteCompositionDeep {
  jatSikh: string;
  scDalit: string;
  baniyaArora: string;
  obc: VerificationStatus;
  note: string;
}

// Religious composition
export interface ReligiousComposition {
  dominant: string;
  minority: string;
  pattern: string;
}

// Key issues deep
export interface KeyIssuesDeep {
  primaryIssues: PrimaryIssue[];
  secondaryIssues: string[];
}

// Primary issue
export interface PrimaryIssue {
  issue: string;
  details: string[];
}

// Political landscape
export interface PoliticalLandscape {
  currentMLA: string;
  partyPerformance: PartyPerformance[];
}

// Party performance
export interface PartyPerformance {
  year: number;
  aap: string;
  bjp: string;
  inc: string;
  sad: string;
}

// Local factors
export interface LocalFactors {
  description: string;
  bjpNote: string;
}

// Competitive landscape
export interface CompetitiveLandscape {
  likelyContenders: Contender[];
  strategicConsiderations: string[];
}

// Contender
export interface Contender {
  party: string;
  position: string;
  note?: string;
}

// Intelligence gaps
export interface IntelligenceGaps {
  missingData: string[];
}

// Recommendations deep
export interface RecommendationsDeep {
  candidate: string;
  focus: string[];
  casteStrategy: string;
  message: string;
}

// Deep dive overview
export interface DeepDiveOverview {
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyProfile;
  electionResults: DeepDiveElectionResults2022;
  keyContestants: KeyContestant[];
  data2017: DeepDive2017Data;
  demographics: DemographicsDeep;
  keyIssues: KeyIssuesDeep;
  politicalLandscape: PoliticalLandscape;
  localFactors: LocalFactors;
  competitiveLandscape: CompetitiveLandscape;
  intelligenceGaps: IntelligenceGaps;
  recommendations: RecommendationsDeep;
}

// Complete constituency dossier
export interface Ac070JagraonScDossier {
  // Header metadata
  metadata: ConstituencyMetadata;

  // Section 1: Identity & Baseline
  identity: ConstituencyIdentity;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;
  administrativeSetup: AdministrativeSetup;

  // Section 2: Demographics
  censusData: CensusData;
  electoralAnalytics: ElectoralRollAnalytics;

  // Section 3: Electoral History
  electoralHistory: ElectoralHistory;

  // Section 4: Public Sentiment
  publicSentiment: PublicSentiment;

  // Section 5: Local Issues
  localIssues: LocalIssues;

  // Section 6: Influencers & Power Structure
  influencers: Influencers;

  // Section 7: Media Landscape
  mediaLandscape: MediaLandscape;

  // Section 8: SWOT Analysis
  swot: SwotAnalysis;

  // Section 9: Strategic Blueprint
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

// Combined data structure
export interface Ac070JagraonScCombinedData {
  dossier: Ac070JagraonScDossier;
  deepDive: DeepDiveOverview;
}

// Data conflict tracking
export interface DataConflict<T> {
  value: T;
  source: string;
  conflictingSource?: string;
  conflictNote?: string;
}

// Category conflict
export interface CategoryConflict {
  mainFileValue: string; // SC from AC070-Jagraon-SC.md
  deepFileValue: string; // GEN from AC070-Jagraon-deep.md
  conflictNote: string;
  resolution: string;
}

// Verification item
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

// Electoral data for charts
export interface ElectionChartData {
  year: number;
  winnerParty: string;
  winnerVoteShare: number | null;
  margin: number | null;
  totalElectors: number;
}

// SWOT as array for dashboard
export interface SwotItem {
  category: 'strength' | 'weakness' | 'opportunity' | 'threat';
  item: string;
  priority?: number;
}

// Issue display item
export interface IssueDisplayItem {
  issue: string;
  affectedSegments: string[];
  priority: number;
  isVerified: boolean;
}

// ============================================
// UTILITY TYPES & HELPERS
// ============================================

// All verification statuses
export type AllVerificationStatuses = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// Constituency type union
export type ConstituencyType = 'SC' | 'ST' | 'GEN';

// Research status union
export type ResearchStatus = 'complete' | 'partial' | 'needs_more_data';

// Region type
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';

// District type
export type District =
  | 'Ludhiana'
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

// Party abbreviations mapping
export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
  SADB: 'SAD (B)',
};

// Election year constants
export const ELECTION_YEARS = [2012, 2017, 2022] as const;
export type ElectionYear = typeof ELECTION_YEARS[number];
