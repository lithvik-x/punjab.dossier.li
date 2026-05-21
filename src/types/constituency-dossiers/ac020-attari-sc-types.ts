/**
 * AC020-Attari-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC020-Attari-SC.md, AC020-Attari-deep.md
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
  borderSignificance: string;
  pollingBooths?: VerificationStatus;
}

// Geographic Profile
export interface GeographicProfile {
  location: string;
  distanceFromDistrictHQ: string;
  distanceFromWagahBorder: string;
  borderCeremonyLocation: string;
  connectivity: string;
  type: 'Rural + Semi-urban';
  borderSecurityPresence: string;
}

// Historical context
export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  borderSignificance: string;
  movementHistory?: VerificationStatus;
}

// Economic profile
export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string;
  landholding: string;
  borderTrade?: string;
}

// Socio-cultural profile
export interface SocioCulturalIdentity {
  language: string;
  religion: string;
  casteComposition: CasteComposition;
  culturalInstitutions: string[];
  communityNotes?: string[];
}

// Caste composition data
export interface CasteComposition {
  sc: number | string | VerificationStatus;
  jatSikh?: number | string;
  obc?: number | string;
  upperCaste?: number | string;
  minority?: number | string;
  note?: string;
  source?: string;
}

// Administrative setup
export interface AdministrativeSetup {
  panchayats: string;
  health?: VerificationStatus;
  education?: VerificationStatus;
  tehsil?: string;
}

// Census and demographic data
export interface CensusData {
  population2011?: VerificationStatus;
  electors2022: number | string;
  sexRatio?: VerificationStatus;
  literacy?: VerificationStatus;
}

// Electoral roll analytics
export interface ElectoralRollAnalytics {
  totalElectors: number | string;
  genderGap?: VerificationStatus;
  voterTurnout2022: string | VerificationStatus;
  source?: string;
}

// Scheme penetration
export interface SchemePenetration {
  pds: string;
  mgnrega?: string;
  pmKisan?: VerificationStatus;
  socialPensions?: string;
  badp?: string; // Border Area Development Programme
}

// Digital access
export interface DigitalAccess {
  smartphonePenetration?: string;
  socialMedia: string[];
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string | VerificationStatus;
  party: string | VerificationStatus;
  votePercentage?: string | VerificationStatus;
  margin?: string | number;
  runnerUp?: string | VerificationStatus;
  runnerUpParty?: string | VerificationStatus;
  runnerUpVotes?: string | VerificationStatus;
  totalElectors?: string | VerificationStatus;
  source?: string;
}

// Electoral history
export interface ElectoralHistory {
  elections: ElectionResult[];
  voterBehaviour: VoterBehaviour;
  borderSecurityFactor?: string;
}

// Voter behaviour analysis
export interface VoterBehaviour {
  turnout?: VerificationStatus;
  casteFactor: string;
  swingPattern: string;
  dalitVoteDynamics?: string;
}

// Current mood
export interface CurrentMood {
  mlaName: string;
  mlaParty: string;
  mlaTerm: string;
  mladesignation?: string;
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

// Governance gap
export interface GovernanceGap {
  schools?: VerificationStatus;
  health?: VerificationStatus;
  roads?: VerificationStatus;
  scWelfareSchemes?: VerificationStatus;
  scholarships?: VerificationStatus;
  borderInfrastructure?: VerificationStatus;
  badp?: VerificationStatus; // Border Area Development Programme
}

// Service delivery
export interface ServiceDelivery {
  schools?: VerificationStatus;
  healthAnmAsha?: VerificationStatus;
  roads?: VerificationStatus;
  waterSupply?: VerificationStatus;
}

// Influencer types
export interface Influencer {
  name?: string;
  type: string;
  community?: string;
  status: VerificationStatus;
}

// Political nodes
export interface PoliticalNodes {
  currentMLA: CurrentMLA;
  oppositionNetwork: string;
  boothLevel?: VerificationStatus;
}

// Current MLA
export interface CurrentMLA {
  name: string;
  party: string;
  term: string;
  designation?: string;
}

// Media landscape
export interface MediaLandscape {
  description: string;
  channels: string[];
  borderMediaNote?: string;
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
  partyStrategies?: {
    aap?: string[];
    bjp?: string[];
    congress?: string[];
    sad?: string[];
    bsp?: string[];
  };
}

// Issue-voter mapping
export interface IssueVoterMapping {
  issue: string;
  prioritySegment: string;
}

// Complete constituency dossier
export interface Ac020AttariScDossier {
  // Header metadata
  metadata: ConstituencyMetadata;

  // Section 1: Identity & Baseline
  identity: ConstituencyIdentity;
  geographicProfile: GeographicProfile;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;
  administrativeSetup: AdministrativeSetup;

  // Section 2: Demographics
  censusData: CensusData;
  electoralAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;
  digitalAccess: DigitalAccess;
  borderDemographics?: BorderDemographics;

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

  // Section 9: Physical Mapping
  physicalMapping: PhysicalMapping;

  // Section 10: SWOT Analysis
  swot: SwotAnalysis;

  // Section 11: Strategic Blueprint
  strategicBlueprint: StrategicBlueprint;

  // Section 12: Course-Changing Factors
  courseChangingFactors: CourseChangingFactor[];

  // Data sources
  dataSources: string[];

  // Research status
  researchStatus: string;
}

// Supporting interfaces for complete structure
export interface ConstituencyMetadata {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  date: string;
  researchMethod?: string;
  type: 'SC';
  researchMicroTaskId?: string;
  tier?: number;
  verificationStatus?: string;
  sourcesConsulted?: string[];
}

export interface PublicSentiment {
  currentMood: CurrentMood;
  keyIssues: KeyIssues;
  perceivedMood?: VerificationStatus;
  borderAreaVoterProfile?: BorderVoterProfile;
}

export interface LocalIssues {
  issues: string[];
  issueVoterMapping: IssueVoterMapping[];
}

export interface Influencers {
  nonPolitical: Influencer[];
  politicalNodes: PoliticalNodes;
  socialReligious?: Influencer[];
  exBsfVeterans?: Influencer[];
  borderVillageSarpanches?: Influencer[];
}

// Border demographics
export interface BorderDemographics {
  dalitPopulation: string;
  ravidassiaCommunity?: string;
  mazhabiSikh?: string;
  borderVillageNote: string;
  postPartitionLandAllocation?: string;
}

// Border voter profile
export interface BorderVoterProfile {
  dalitPopulation: string;
  borderSecurityConcern: string;
  nationalistSentiment: string;
  keySentimentDrivers: string[];
}

// Physical mapping
export interface PhysicalMapping {
  keyGeography: string[];
  borderVillages: string[];
  wagahLocation: string;
  agriculturalHinterland: string;
  connectivity: string;
  voterDemographicsEstimate: VoterDemographicsEstimate;
}

export interface VoterDemographicsEstimate {
  ruralVoters: string;
  scVoters: string;
  jatSikhVoters: string;
  hinduVoters: string;
  note?: string;
}

// Course-changing factor
export interface CourseChangingFactor {
  factor: string;
  probability: 'Low' | 'Medium' | 'High';
  impact: 'LOW' | 'MEDIUM' | 'HIGH';
}

// Deep dive specific types (from AC020-Attari-deep.md)
export interface DeepDiveOverview {
  constituencyOverview: string;
  electionResults: DeepDiveElectionResults;
  casteCompositionDeep: CasteComposition;
  keyLocalIssues: string[];
  congressStrategicPosition: string;
  recommendedCandidateProfile: CandidateProfile;
  attackLinesAgainstIncumbent: AttackLine[];
  sources: string[];
  notable?: string;
  borderSecurityFactor?: string;
  swot?: SwotAnalysis;
  strategicBlueprint?: StrategicBlueprint;
}

export interface DeepDiveElectionResults {
  year2022: ElectionDataPoint;
  year2017: ElectionDataPoint;
  year2012: ElectionDataPoint;
}

export interface ElectionDataPoint {
  winner: string | VerificationStatus;
  party: string | VerificationStatus;
  margin: string | VerificationStatus;
  totalElectors?: string;
  runnerUp?: string | VerificationStatus;
  runnerUpParty?: string | VerificationStatus;
  runnerUpVotes?: string | VerificationStatus;
}

export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLine {
  category: string;
  description: string;
}

// Combined data structure for dashboard
export interface Ac020AttariScCombinedData {
  dossier: Ac020AttariScDossier;
  deepDive: DeepDiveOverview;
}

// Data conflict tracking for conflicting information between source files
export interface DataConflict<T> {
  value: T;
  source: string;
  conflictingSource?: string;
  conflictNote?: string;
}

// Conflict markers for specific conflicting data points
export interface CasteCompositionConflict {
  mainFileValue: string; // ~32-35% from AC020-Attari-SC.md
  deepFileValue: string; // 52.17% from AC020-Attari-deep.md
  conflictNote: string;
  requiresVerification: boolean;
}

// Elector count conflict
export interface ElectorCountConflict {
  estimatedValue: string; // ~1,45,000 from AC020-Attari-SC.md
  deepFileValue?: string;
  conflictNote: string;
}

// Constituency type conflict (SC vs General)
export interface ConstituencyTypeConflict {
  mainFileValue: 'SC'; // AC020-Attari-SC.md
  deepFileValue: 'General'; // AC020-Attari-deep.md
  conflictNote: string;
  requiresResolution: boolean;
  resolutionGuidance?: string;
}

// Winner name case conflict
export interface WinnerNameConflict {
  mainFileValue: string; // Adc Jaswinder Singh (lowercase 'c')
  deepFileValue: string; // ADC Jaswinder Singh (uppercase 'C')
  conflictNote: string;
  requiresResolution: boolean;
}

// All conflicts aggregated
export interface DataConflicts {
  casteComposition?: CasteCompositionConflict;
  electorCount?: ElectorCountConflict;
  constituencyType?: ConstituencyTypeConflict;
  winnerName?: WinnerNameConflict;
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

// Intelligence gaps
export interface IntelligenceGap {
  item: string;
  status: VerificationStatus;
  priority: 'high' | 'medium' | 'low';
}

// Keywords for ongoing monitoring
export interface MonitoringKeyword {
  keyword: string;
  category: string;
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
  BSP: 'Bahujan Samaj Party',
  CONGRESS: 'Indian National Congress',
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
  | 'Amritsar'
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

// Factor probability
export type FactorProbability = 'Low' | 'Medium' | 'High';
export type FactorImpact = 'LOW' | 'MEDIUM' | 'HIGH';
