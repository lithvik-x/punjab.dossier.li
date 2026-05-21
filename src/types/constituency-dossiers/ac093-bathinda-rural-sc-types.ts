/**
 * AC093-Bathinda-Rural-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC093-Bathinda-Rural-SC.md, AC093-BathindaRural-deep.md
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
  date: string;
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string | VerificationStatus;
  party: string | VerificationStatus;
  votePercentage?: string | VerificationStatus;
  voteCount?: number | VerificationStatus;
  margin?: string | VerificationStatus;
  runnerUp?: string | VerificationStatus;
  runnerUpParty?: string | VerificationStatus;
  totalElectors?: string | number | VerificationStatus;
  totalVotes?: number | VerificationStatus;
  voterTurnout?: string | VerificationStatus;
  source?: string;
}

// Election results history
export interface ElectionResults {
  year2022: ElectionResult;
  year2017: ElectionResult;
  year2012: ElectionResult;
}

// Historical pattern
export interface HistoricalPattern {
  congressStrength: string;
  aapGains: string;
  competitionPattern: string;
}

// Caste composition
export interface CasteComposition {
  scPopulation: string;
  majorCommunities: SCCommunity[];
  communityDetails: CommunityDetail[];
}

// SC community
export interface SCCommunity {
  name: string;
  percentage: string;
}

// Community detail
export interface CommunityDetail {
  community: string;
  description: string;
  occupation?: string;
  concentration?: string;
}

// Demographics
export interface Demographics {
  population: PopulationData;
  casteComposition: CasteCompositionData;
  religiousComposition: ReligiousComposition;
}

// Population data
export interface PopulationData {
  totalPopulation: string | VerificationStatus;
  note?: string;
}

// Caste composition data
export interface CasteCompositionData {
  sc: string;
  sikhs: string;
  hindu: string;
  obc: string;
}

// Religious composition
export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  others: string;
  sources?: string;
}

// Key local issues
export interface LocalIssue {
  issue: string;
  description?: string;
}

// Key local issues list
export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// Congress strategic position
export interface CongressStrategicPosition {
  currentStatus: string;
  challenges: string[];
  opportunities: string[];
}

// Recommended candidate profile
export interface RecommendedCandidateProfile {
  idealCandidate: CandidateAttribute[];
  selectionPriorities: string[];
}

// Candidate attribute
export interface CandidateAttribute {
  attribute: string;
  value: string;
  priority?: string;
}

// Attack line
export interface AttackLine {
  category: string;
  description: string;
}

// Attack lines
export interface AttackLines {
  vulnerabilities: string[];
  congressNarrative: string[];
}

// SC community issues
export interface SCCommunityIssues {
  issues: string[];
  notes: string;
}

// Research notes
export interface ResearchNotes {
  notes: string[];
}

// Political significance
export interface PoliticalSignificance {
  scReservedSeat: string;
  ruralConstituency: string;
  aapDominance: string;
}

// Complete constituency dossier (from Tier 1 source)
export interface Ac093BathindaRuralScDossier {
  metadata: ConstituencyIdentity;
  politicalSignificance: PoliticalSignificance;
  electionResults: ElectionResults;
  historicalPattern: HistoricalPattern;
  casteComposition: CasteComposition;
  demographics: Demographics;
  keyLocalIssues: KeyLocalIssues;
  scCommunityIssues: SCCommunityIssues;
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLines;
  researchNotes: ResearchNotes;
}

// ============================================
// DEEP RESEARCH TYPES (from Tier 2 source)
// ============================================

// Deep research metadata
export interface DeepResearchMetadata {
  dossierId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: string;
  dataCurrency: string;
}

// Executive summary
export interface ExecutiveSummary {
  description: string;
  keyHighlights: string[];
}

// Constituency profile - basic details
export interface ConstituencyProfileBasicDetails {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  category: string;
  parliamentaryConstituency: string;
}

// Geographic boundaries
export interface GeographicBoundaries {
  description: string;
  borderingAreas?: string[];
}

// Voter profile
export interface VoterProfile {
  turnout2022: string | VerificationStatus;
  scVoters: string;
  ruralVoters: string;
  electorCount?: string | VerificationStatus;
}

// 2027 Outlook
export interface Outlook2027 {
  congressStrategy: string[];
  keyWinningStrategy: KeyWinningStrategy[];
}

// Key winning strategy
export interface KeyWinningStrategy {
  aspect: string;
  description: string;
}

// Primary issues
export interface PrimaryIssue {
  issue: string;
}

// Primary issues list
export interface PrimaryIssuesList {
  issues: PrimaryIssue[];
}

// Intelligence gaps
export interface IntelligenceGaps {
  dataRequiringVerification: string[];
}

// Deep research dossier
export interface Ac093BathindaDeepDossier {
  metadata: DeepResearchMetadata;
  executiveSummary: ExecutiveSummary;
  constituencyProfile: {
    basicDetails: ConstituencyProfileBasicDetails;
    geographicBoundaries: GeographicBoundaries;
  };
  electionResults2022: {
    winner: string;
    party: string;
    margin: string;
    turnout: string | VerificationStatus;
    totalElectors: string | VerificationStatus;
  };
  electoralHistory: {
    year2022: { winner: string; party: string; margin: string };
    year2017: { winner: string | VerificationStatus; party?: string; margin?: string | VerificationStatus };
    year2012: { winner: string | VerificationStatus; party?: string; margin?: string | VerificationStatus };
  };
  demographics: {
    population: string;
    casteComposition: {
      sc: string;
      jatSikh: string;
      hinduGeneral: string;
      obc: string;
    };
    religionDistribution: {
      sikh: string;
      hindu: string;
      others: string;
    };
  };
  voterProfile: VoterProfile;
  primaryIssues: PrimaryIssuesList;
  attackLinesForCongress: string[];
  outlook2027: Outlook2027;
  intelligenceGaps: IntelligenceGaps;
  recommendationsForCongress: string[];
}

// Combined data structure
export interface Ac093BathindaRuralScCombinedData {
  dossier: Ac093BathindaRuralScDossier;
  deepDossier: Ac093BathindaDeepDossier;
  researchDate: string;
  researchStatus: 'complete' | 'partial' | 'needs_more_data';
  verificationProgress: number;
}

// Verification audit
export interface VerificationAudit {
  constituencyId: string;
  totalFields: number;
  verified: number;
  needsVerification: number;
  pending: number;
  estimated: number;
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
export type District = 'Ludhiana' | 'Pathankot' | 'Gurdaspur' | 'SBS Nagar' | 'Hoshiarpur' | 'Jalandhar' | 'Kapurthala' | 'Moga' | 'Ferozepur' | 'Fazilka' | 'Muktsar' | 'Lehra' | 'Ropar' | 'SAS Nagar' | 'Patiala' | 'Sangrur' | 'Barnala' | 'Bathinda' | 'Mansa' | 'Faridkot';

// Party abbreviations mapping
export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
  BSP: 'Bahujan Samaj Party',
};

// Election year constants
export const ELECTION_YEARS = [2012, 2017, 2022] as const;
export type ElectionYear = typeof ELECTION_YEARS[number];

// SC community types
export type SCCommunityType = 'Mazhabi Sikh' | 'Ramdasia' | 'Balmiki' | 'Ad Dharmi' | 'Bazigar';
