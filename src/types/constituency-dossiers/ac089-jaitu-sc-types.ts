/**
 * AC089-Jaitu-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC089-Jaitu-SC.md (Tier 1, Verified), AC089-Jaitu-deep.md (Tier 2, Partial)
 */

// Verification status for data points
export type VerificationStatus = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// ============================================
// RESEARCH METADATA
// ============================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: 1 | 2;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'needs_verification';
  dataCurrency: string;
}

// ============================================
// CONSTITUENCY IDENTITY & BASELINE
// ============================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  type: 'SC' | 'GEN'; // Conflict: SC in main file, GEN in deep file
  lokSabhaSeat: string;
  area: string;
}

export interface ConstituencyBaseline {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  category: 'SC' | 'GEN'; // Category conflict between sources
  parliamentaryConstituency: string;
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  movementHistory: VerificationStatus;
}

// ============================================
// ECONOMIC & SOCIO-CULTURAL PROFILE
// ============================================

export interface EconomicIdentity {
  primaryActivities: string[];
  employment: string;
  landholding: string;
  economyType: string;
}

export interface CasteComposition {
  sc: string | VerificationStatus;
  scSubGroups?: string[]; // Mazhabi, Ramdasia from main file
  jatSikh?: string;
  hinduGeneral?: string;
  obc?: string;
  upperCaste?: string;
  note?: string;
}

export interface CasteCompositionDeep {
  jatSikh: string;
  hinduGeneral: string;
  sc: string;
  obc: string;
  note?: string;
}

export interface ReligionDistribution {
  sikh: string;
  hindu: string;
  others: string;
  source: string;
}

export interface SocioCulturalIdentity {
  language: string;
  religion: string;
  casteComposition: CasteComposition | CasteCompositionDeep;
  culturalInstitutions: string[];
}

// ============================================
// DEMOGRAPHICS & CENSUS
// ============================================

export interface CensusData {
  population2011: string | VerificationStatus;
  source: string;
}

export interface Demographics {
  totalPopulation: string;
  source: string;
}

export interface DistrictDemographics {
  sexRatio: VerificationStatus;
  literacy: VerificationStatus;
}

// ============================================
// ELECTORAL DATA
// ============================================

export interface ElectoralRollAnalytics {
  totalElectors2022: number | string;
  voterTurnout2022: string;
  totalVotes: number | string;
  source: string;
}

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  voteCount: number;
  margin: number;
  marginVotes: number;
  runnerUp: string;
  runnerUpParty: string;
  totalElectors: number;
  totalVotes: number;
  turnout: string;
  source: string;
}

export interface ElectionResult2017 {
  winner: VerificationStatus;
  party: VerificationStatus;
  totalElectors: string;
}

export interface ElectionHistory {
  elections: Array<{
    year: number;
    winner: string | VerificationStatus;
    party: string | VerificationStatus;
    margin?: string;
  }>;
}

export interface ElectoralHistory {
  year2022: ElectionResult2022;
  year2017: ElectionResult2017;
}

export interface VoterProfile {
  totalElectors: number | string;
  voterTurnout: string;
  description: string;
}

// ============================================
// LOCAL ISSUES
// ============================================

export interface LocalIssue {
  issue: string;
  priority?: number;
}

export interface KeyIssues {
  issues: string[];
  source: string;
}

export interface IssueVoterMapping {
  issue: string;
  affectedSegment: string;
}

// ============================================
// POLITICAL SIGNIFICANCE
// ============================================

export interface PoliticalSignificance {
  scReservedSeat: string;
  aapPerformance: string;
  ruralConstituency: string;
}

// ============================================
// PUBLIC SENTIMENT
// ============================================

export interface PublicSentiment {
  currentMood: CurrentMood;
  keyIssues: KeyIssues;
}

export interface CurrentMood {
  mlaName: string;
  mlaParty: string;
  term: string;
  antiIncumbencyFactor?: string;
}

// ============================================
// GOVERNANCE & SERVICE DELIVERY
// ============================================

export interface GovernanceGap {
  schools: VerificationStatus;
  health: VerificationStatus;
  roads: VerificationStatus;
  scWelfareSchemes: VerificationStatus;
  scholarships: VerificationStatus;
}

export interface ServiceDelivery {
  schools: VerificationStatus;
  healthAnmAsha: VerificationStatus;
  roads: VerificationStatus;
}

// ============================================
// INFLUENCERS & POWER STRUCTURE
// ============================================

export interface PoliticalActors {
  currentMLA: CurrentMLA;
  boothLevel: VerificationStatus;
}

export interface CurrentMLA {
  name: string;
  party: string;
  term?: string;
}

export interface Influencer {
  name?: string;
  type: string;
  community?: string;
  status: VerificationStatus;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  boothLevel: VerificationStatus;
}

// ============================================
// CONGRESS STRATEGY
// ============================================

export interface CongressStrategicPosition {
  currentHolder: string;
  strategicOptions: string[];
  focusAreas: string[];
  allianceConsideration?: string;
}

export interface RecommendedCandidateProfile {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoters: string;
  casteConsideration?: string;
}

export interface AttackLine {
  category: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  lines: string[];
  source: string;
}

// ============================================
// SWOT ANALYSIS
// ============================================

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================
// STRATEGIC BLUEPRINT
// ============================================

export interface StrategicBlueprint {
  topNarratives: string[];
  prioritySegments: PrioritySegment[];
  targetVoters: string[];
  grievanceFocus: string[];
}

export interface PrioritySegment {
  segment: string;
  description: string;
  percentage?: string;
}

// ============================================
// 2027 OUTLOOK
// ============================================

export interface Outlook2027 {
  congressLeverage: string;
  candidateRequirement: string;
  targetVoters: string[];
  narrativeFocus: string[];
}

export interface CongressStrategy2027 {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

// ============================================
// INTELLIGENCE GAPS
// ============================================

export interface IntelligenceGaps {
  gaps: string[];
  requiresVerification: boolean;
}

// ============================================
// DATA QUALITY & SOURCES
// ============================================

export interface DataSource {
  url: string;
  description: string;
}

export interface DataQuality {
  overall: VerificationStatus;
  conflicts: DataConflictEntry[];
  needsLocalVerification: boolean;
}

export interface DataConflictEntry {
  field: string;
  mainFileValue: string;
  deepFileValue: string;
  resolution: string;
}

// ============================================
// DEEP RESEARCH SPECIFIC
// ============================================

export interface DeepDiveOverview {
  constituencyOverview: string;
  electionResults: DeepDiveElectionResults;
  casteCompositionDeep: CasteCompositionDeep;
  religionDistribution: ReligionDistribution;
  keyLocalIssues: string[];
  congressStrategicPosition: string;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstIncumbent: string[];
  sources: string[];
}

export interface DeepDiveElectionResults {
  year2022: {
    winner: string;
    party: string;
    margin: VerificationStatus;
    turnout: string;
    totalElectors: string;
  };
  year2017: {
    winner: VerificationStatus;
    party: VerificationStatus;
  };
  year2012: {
    winner: VerificationStatus;
    party: VerificationStatus;
  };
}

export interface DeepPublicSentiment {
  voterProfile: VoterProfile;
  currentMLA: CurrentMLA;
  turnout: string;
}

export interface DeepCongressStrategy {
  leverage: string;
  candidateRequirement: string;
  targetVoters: string[];
  grievanceFocus: string[];
  narrativeFocus: string[];
}

export interface DeepIssues {
  primaryIssues: string[];
  attackLines: string[];
}

// ============================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================

export interface Ac089JaituScDossier {
  // Header metadata
  metadata: ResearchMetadata;

  // Section 1: Identity & Baseline
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;

  // Section 2: Economic & Socio-Cultural
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;

  // Section 3: Demographics
  censusData: CensusData;
  demographics: Demographics;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;
  religionDistribution: ReligionDistribution;
  districtDemographics: DistrictDemographics;

  // Section 4: Electoral Data
  electoralAnalytics: ElectoralRollAnalytics;
  electoralHistory: ElectoralHistory;
  electionResult2022: ElectionResult2022;
  electionResult2017: ElectionResult2017;

  // Section 5: Political Significance
  politicalSignificance: PoliticalSignificance;

  // Section 6: Public Sentiment
  publicSentiment: PublicSentiment;

  // Section 7: Local Issues
  keyIssues: KeyIssues;
  localIssues: LocalIssue[];

  // Section 8: Governance
  governanceGap: GovernanceGap;

  // Section 9: Influencers
  powerStructure: PowerStructure;
  politicalActors: PoliticalActors;

  // Section 10: Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;

  // Section 11: SWOT
  swot: SwotAnalysis;

  // Section 12: Strategic Blueprint
  strategicBlueprint: StrategicBlueprint;
  congressStrategy2027: CongressStrategy2027;

  // Section 13: Outlook
  outlook2027: Outlook2027;

  // Section 14: Data Quality
  intelligenceGaps: IntelligenceGaps;
  dataQuality: DataQuality;
  dataSources: DataSource[];

  // Research status
  researchStatus: string;
}

export interface Ac089JaituScDeepResearch {
  metadata: ResearchMetadata;
  executiveSummary: string;
  constituencyProfile: ConstituencyBaseline;
  demographics: Demographics;
  casteComposition: CasteCompositionDeep;
  religionDistribution: ReligionDistribution;
  electoralHistory: DeepDiveElectionResults;
  publicSentiment: DeepPublicSentiment;
  keyIssues: DeepIssues;
  congressStrategy: DeepCongressStrategy;
  intelligenceGaps: IntelligenceGaps;
  sources: string[];
}

export interface Ac089JaituScCompleteDossier {
  dossier: Ac089JaituScDossier;
  deepResearch: Ac089JaituScDeepResearch;
}

// ============================================
// CONFLICT TRACKING
// ============================================

export interface CategoryConflict {
  mainFileValue: 'SC';
  deepFileValue: 'GEN';
  conflictNote: string;
  requiresResolution: boolean;
}

export interface CasteCompositionConflict {
  mainFileSCValue: string;
  deepFileSCValue: string;
  mainFileNote: string;
  requiresLocalVerification: boolean;
}

export interface ElectorCountConflict {
  mainFileValue: number;
  deepFileValue: string;
  conflictNote: string;
}

// ============================================
// VERIFICATION AUDIT
// ============================================

export interface VerificationItem {
  field: string;
  section: string;
  status: VerificationStatus;
  priority: 'high' | 'medium' | 'low';
  notes?: string;
}

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

// ============================================
// DASHBOARD DISPLAY TYPES
// ============================================

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

export interface ElectionChartData {
  year: number;
  winnerParty: string;
  winnerVoteShare: number | null;
  margin: number | null;
  totalElectors: number;
}

export interface CasteDemographics {
  category: string;
  percentage: string;
  color?: string;
}

// ============================================
// UTILITY TYPES & HELPERS
// ============================================

export type AllVerificationStatuses = 'verified' | 'needs_verification' | 'pending' | 'estimated';
export type ConstituencyType = 'SC' | 'ST' | 'GEN';
export type ResearchStatus = 'complete' | 'partial' | 'needs_more_data';
export type MLATerm = 'first_term' | 'second_term' | 'multi_term';
export type SwotCategory = 'strength' | 'weakness' | 'opportunity' | 'threat';
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';
export type District = 'Faridkot' | '其他';

export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
  BSP: 'Bahujan Samaj Party',
};

export const ELECTION_YEARS = [2012, 2017, 2022] as const;
export type ElectionYear = typeof ELECTION_YEARS[number];

export const PRIORITY_LEVELS: IssuePriorityLevel[] = [1, 2, 3, 4, 5];
export type IssuePriorityLevel = 1 | 2 | 3 | 4 | 5;

