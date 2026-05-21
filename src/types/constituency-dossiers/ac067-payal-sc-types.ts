/**
 * AC067-Payal-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC067-Payal-SC.md, AC067-Payal-deep.md
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
  tehsil: string;
  electoralRoll: VerificationStatus;
}

// Constituency overview summary
export interface ConstituencyOverview {
  description: string;
  character: string;
  focus: string;
}

// Historical context
export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  traditionalStrength: string;
}

// Economic profile
export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string;
  landholding: string;
  economyBase: string;
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
  sc: string | VerificationStatus;
  jatSikh?: number | VerificationStatus;
  obc?: string | VerificationStatus;
  khatriArora?: string | VerificationStatus;
  minority?: string | VerificationStatus;
  note?: string;
}

// SC demographics specific
export interface ScDemographics {
  concentration: string;
  communities: string[];
  dominantCommunity: string;
  obcPresence: string;
  jatSikhPresence: string;
}

// Community distribution
export interface CommunityDistribution {
  mazhabiSikh: CommunityDetail;
  ramdassia: CommunityDetail;
  balmiki: CommunityDetail;
  obcGroups: CommunityDetail;
}

export interface CommunityDetail {
  description: string;
  occupation?: string;
  area?: string;
}

// Administrative setup
export interface AdministrativeSetup {
  tehsil: string;
  health: VerificationStatus;
  education: VerificationStatus;
}

// Census and demographic data
export interface CensusData {
  population2011: VerificationStatus;
  tehsilPopulation: VerificationStatus;
  sexRatio: VerificationStatus;
  literacy: VerificationStatus;
}

// Electoral roll analytics
export interface ElectoralRollAnalytics {
  totalElectors: VerificationStatus;
  genderGap: VerificationStatus;
  voterTurnout2022: VerificationStatus;
  stateAverage2022: string;
  source?: string;
}

// Geographic boundaries
export interface GeographicBoundaries {
  north: string;
  south: string;
  eastWest: string;
  keyTowns: string[];
}

// Urban-rural composition
export interface UrbanRuralComposition {
  predominant: string;
  semiUrban: string;
  agriculturalProfile: string;
  dairyFarming: string;
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string | VerificationStatus;
  party: string | VerificationStatus;
  votePercentage?: string | VerificationStatus;
  margin?: string | VerificationStatus;
  runnerUp?: string | VerificationStatus;
  runnerUpParty?: string | VerificationStatus;
  runnerUpVotes?: string | VerificationStatus;
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

// Historical pattern
export interface HistoricalPattern {
  congressStrength: string;
  aapImprovement: string;
  sadFactor: string;
}

// Current mood
export interface CurrentMood {
  mlaName: string | VerificationStatus;
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
  oppositionNetwork: VerificationStatus;
  boothLevel: VerificationStatus;
}

// Current MLA
export interface CurrentMLA {
  name: string | VerificationStatus;
  party: string;
  term: string;
}

// District-level leadership
export interface DistrictLeadership {
  ppcc: VerificationStatus;
  sadLudhiana: VerificationStatus;
  bjpLudhiana: VerificationStatus;
}

// Local influencers
export interface LocalInfluencers {
  formerMLAs: VerificationStatus;
  sarpanches: VerificationStatus;
  prominentFamilies: VerificationStatus;
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

// Congress strategic position
export interface CongressStrategicPosition {
  currentStatus: string;
  traditionalBase: string;
  challenge: string;
  keyChallenges: string[];
  opportunities: string[];
}

// Recommended candidate profile
export interface RecommendedCandidateProfile {
  idealCandidate: IdealCandidate;
  selectionCriteria: string[];
}

// Ideal candidate
export interface IdealCandidate {
  caste: string;
  profile: string;
  connect: string;
  background: string;
  priority: string;
}

// Attack line
export interface AttackLine {
  category: string;
  description: string;
}

// Attack lines against incumbent
export interface AttackLinesAgainstIncumbent {
  vulnerabilities: string[];
  congressNarratives: string[];
}

// Recommended candidate from deep dive
export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

// Regional context
export interface RegionalContext {
  malwaNotes: string;
  ludhianaRuralSpecifics: string;
}

// Malwa region notes
export interface MalwaRegionNotes {
  drugAddiction: string;
  farmDistress: string;
  scPopulation: string;
  ruralUrbanDivide: string;
}

// Ludhiana rural specifics
export interface LudhianaRuralSpecifics {
  economy: string;
  farmers: string;
  laborClass: string;
  industrialPollution: string;
}

// Complete constituency dossier
export interface Ac067PayalScDossier {
  // Header metadata
  metadata: ConstituencyMetadata;

  // Section 1: Identity & Baseline
  identity: ConstituencyIdentity;
  overview: ConstituencyOverview;
  historicalContext: HistoricalContext;
  historicalPattern: HistoricalPattern;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;
  scDemographics: ScDemographics;
  communityDistribution: CommunityDistribution;
  administrativeSetup: AdministrativeSetup;

  // Section 2: Demographics
  censusData: CensusData;
  electoralAnalytics: ElectoralRollAnalytics;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;

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

  // Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstIncumbent;

  // Regional Context
  regionalContext: RegionalContext;

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
  researchMethod: string;
  type: 'SC';
  sources: string;
  verificationStatus: string;
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
  districtLeadership: DistrictLeadership;
  localInfluencers: LocalInfluencers;
}

// Deep dive specific types (from AC067-Payal-deep.md)
export interface DeepDiveOverview {
  researchDossierId: string;
  topic: string;
  tier: number;
  executiveSummary: string;
  constituencyOverview: string;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
  electionResults: DeepDiveElectionResults;
  casteCompositionDeep: CasteComposition;
  religiousComposition: ReligiousComposition;
  keyIssues: DeepDiveKeyIssues;
  congressStrategicPosition: string;
  recommendedCandidateProfile: CandidateProfile;
  attackLinesAgainstAAP: AttackLine[];
  governmentSchemes: GovernmentScheme[];
  electoralHistory: ElectionResult[];
  voterEcosystem: VoterEcosystem;
  competitiveLandscape: CompetitiveLandscape;
  intelligenceGaps: IntelligenceGap[];
  sources: string[];
}

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
}

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  others: string;
}

export interface DeepDiveKeyIssues {
  primaryIssues: PrimaryIssue[];
  secondaryIssues: string[];
}

export interface PrimaryIssue {
  issue: string;
  description: string;
  source?: string;
}

export interface GovernmentScheme {
  name: string;
  description: string;
  coverage?: string;
}

export interface VoterEcosystem {
  keyVotingBlocs: VotingBloc[];
  electionDynamics: string;
}

export interface VotingBloc {
  bloc: string;
  description: string;
}

export interface CompetitiveLandscape {
  likelyContenders: Contender[];
  strategicConsiderations: string;
}

export interface Contender {
  party: string;
  advantage: string;
}

export interface IntelligenceGap {
  gap: string;
  priority: 'high' | 'medium' | 'low';
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
export interface Ac067PayalScCombinedData {
  dossier: Ac067PayalScDossier;
  deepDive: DeepDiveOverview;
}

// Data conflict tracking for conflicting information between source files
export interface DataConflict<T> {
  value: T;
  source: string;
  conflictingSource?: string;
  conflictNote?: string;
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
  currentMLA: string | VerificationStatus;
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
  totalElectors: number | null;
}

// Caste demographics for pie/donut charts
export interface CasteDemographics {
  category: string;
  percentage: number | string;
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
  | 'Faridkot'
  | 'Ludhiana'
  | 'Tarn Taran'
  | 'Amritsar'
  | 'Moga'
  | 'Ferozepur';
