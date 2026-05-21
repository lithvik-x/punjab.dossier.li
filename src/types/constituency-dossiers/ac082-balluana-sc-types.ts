/**
 * AC082-Balluana-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC082-Balluana-SC.md, AC082-Balluana-deep.md
 */

// Verification status for data points
export type VerificationStatus = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  date: string;
}

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  parliamentarySegment: string;
  area: string;
  date: string;
}

export interface GeographicProfile {
  location: string;
  district: string;
  region: string;
  character: string;
  lokSabhaSeat: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
  totalElectors: string;
  turnout: string;
  source: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
  status: VerificationStatus;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  margin: string;
  status: VerificationStatus;
}

export interface ElectionResults {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
}

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin: string;
  status: VerificationStatus;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  sc: string;
  jatSikh: string;
  hindu: string;
  obc: string;
  scSubCommunities: string[];
  note: string;
}

export interface DistrictDemographics {
  totalPopulation: string;
  sexRatio: string;
  literacy: string;
  scPopulation: string;
}

export interface Demographics {
  casteComposition: CasteComposition;
  districtDemographics: DistrictDemographics;
  voterProfile: {
    rural: string;
    urban: string;
    youngVoters: string;
    voterTurnout: string;
  };
}

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout: string;
  ruralConstituency: string;
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface LocalIssue extends KeyLocalIssue {}

export interface PrimaryIssues {
  issues: LocalIssue[];
}

export interface SecondaryIssues {
  issues: string[];
}

export interface KeyLocalIssues {
  primaryIssues: PrimaryIssues;
  secondaryIssues: SecondaryIssues;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    position2022: string;
    historicalBase: string;
    challenge: string;
  };
  keyChallenges: string[];
  opportunities: string[];
}

// ============================================================================
// RECOMMENDED CANDIDATE PROFILE
// ============================================================================

export interface IdealCandidate {
  caste: string;
  background: string;
  profile: string;
  keyTraits: string[];
  targetVoter: string;
}

export interface RecommendedCandidateProfile {
  ideal: IdealCandidate;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  category: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  vulnerabilities: string[];
  narratives: string[];
}

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

export interface ResearchMetadata {
  dossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: string;
}

export interface ExecutiveSummary {
  overview: string;
  electionResult2022: string;
  constituencyCharacter: string;
}

export interface ConstituencyProfile {
  basicDetails: {
    assemblyConstituencyNo: number;
    district: string;
    region: string;
    category: string;
    parliamentaryConstituency: string;
  };
  geographicBoundaries: {
    location: string;
    borderAreas: string;
  };
  urbanRuralComposition: {
    predominantlyRural: string;
    scPopulation: string;
    economy: string;
  };
}

export interface CompetitiveLandscape2027 {
  likelyContenders: {
    party: string;
    status: string;
  }[];
  strategicConsiderations: string[];
}

export interface IntelligenceGaps {
  criticalMissingData: string[];
}

export interface Recommendations {
  congressStrategy: {
    candidate: string;
    focus: string[];
    outreach: string;
  };
}

export interface DeepResearchData {
  metadata: ResearchMetadata;
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyProfile;
  demographics: Demographics;
  keyIssues: KeyLocalIssues;
  politicalLandscape: {
    currentMla: {
      name: string;
      party: string;
    };
    partyPerformanceTrend: {
      year: number;
      aap: string;
      inc: string;
      sad: string;
      notes: string;
    }[];
  };
  electoralHistory: ElectoralHistoryEntry[];
  competitiveLandscape2027: CompetitiveLandscape2027;
  intelligenceGaps: IntelligenceGaps;
  recommendations: Recommendations;
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface MainDossierData {
  header: ConstituencyHeader;
  constituencyOverview: string;
  electionResults: ElectionResults;
  casteComposition: CasteComposition;
  keyLocalIssues: KeyLocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  notes: string[];
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC082BalluanaSCTypes {
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
  completeDossier: {
    header: ConstituencyHeader;
    identity: ConstituencyIdentity;
    geographicProfile: GeographicProfile;
    electionResults: ElectionResults;
    demographics: Demographics;
    keyLocalIssues: KeyLocalIssue[];
    congressStrategicPosition: CongressStrategicPosition;
    recommendedCandidateProfile: RecommendedCandidateProfile;
    attackLinesAgainstAAP: AttackLinesAgainstAAP;
    deepResearchData: DeepResearchData;
    notes: string[];
  };
}

// ============================================================================
// DATA CONFLICT TRACKING
// ============================================================================

export interface DistrictConflict {
  mainFileValue: string; // Fazilka
  deepFileValue: string; // Muktsar
  conflictNote: string;
  requiresVerification: boolean;
}

export interface CasteCompositionConflict {
  mainFileValue: string; // 32-35%
  deepFileValue: string; // 55-60%
  conflictNote: string;
  requiresVerification: boolean;
}

export interface ElectorCountConflict {
  mainFileValue: string; // ~152,000
  deepFileValue: string; // 184,434
  conflictNote: string;
  requiresVerification: boolean;
}

// ============================================================================
// VERIFICATION AUDIT TRAIL
// ============================================================================

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

// ============================================================================
// DASHBOARD DISPLAY TYPES
// ============================================================================

export interface DossierSummary {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  currentMLA: string;
  currentParty: string;
  lastElection: number;
  researchStatus: 'partial' | 'complete' | 'needs_more_data';
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
  percentage: number;
  color?: string;
}

export interface SwotItem {
  category: 'strength' | 'weakness' | 'opportunity' | 'threat';
  item: string;
  priority?: number;
}

export interface IssueDisplayItem {
  issue: string;
  affectedSegments: string[];
  priority: number;
  isVerified: boolean;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type AllVerificationStatuses = 'verified' | 'needs_verification' | 'pending' | 'estimated';
export type ConstituencyType = 'SC' | 'ST' | 'GEN';
export type ResearchStatusType = 'complete' | 'partial' | 'needs_more_data';
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';
export type District = 'Pathankot' | 'Gurdaspur' | 'SBS Nagar' | 'Hoshiarpur' | 'Jalandhar' | 'Kapurthala' | 'Moga' | 'Ferozepur' | 'Fazilka' | 'Muktsar' | 'Lehra' | 'Ropar' | 'SAS Nagar' | 'Patiala' | 'Sangrur' | 'Barnala' | 'Bathinda' | 'Mansa' | 'Faridkot';

export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
  BSP: 'Bahujan Samaj Party',
};

export const ELECTION_YEARS = [2012, 2017, 2022] as const;
export type ElectionYear = typeof ELECTION_YEARS[number];

export type IssuePriorityLevel = 1 | 2 | 3 | 4 | 5;
export type SwotCategory = 'strength' | 'weakness' | 'opportunity' | 'threat';

export type AC082BalluanaSCData = AC082BalluanaSCTypes;
