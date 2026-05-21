/**
 * AC091-Bhucho Mandi SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC091-Bhucho-Mandi-SC.md, AC091-BhuchoMandi-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "SC" | "ST" | "General" | "BC";
  date: string;
}

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "SC" | "ST" | "General" | "BC";
  parliamentarySegment: string;
  date: string;
}

// ============================================================================
// GEOGRAPHIC PROFILE
// ============================================================================

export interface GeographicBoundaries {
  location: string;
  borderAreas: string;
  keyTowns: string;
}

export interface GeographicProfile {
  boundaries: GeographicBoundaries;
  urbanRuralComposition: {
    character: string;
    scPopulation: string;
    economy: string;
  };
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  votes: string;
  margin: string;
  runnerUp: string;
  totalElectors: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  voteShare: string;
  votes: string;
  margin: string;
  runnerUp: string;
  runnerUpVotes: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  status: "needs_verification" | "not_available";
}

export interface ElectionResults {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  politicalSignificance: {
    scReserved: string;
    dramaticShift: string;
    aapWave2022: string;
  };
}

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin: string;
  status: "verified" | "needs_verification";
}

export interface VoterTurnout {
  2022: string;
  status: "verified" | "needs_verification";
}

export interface PartyPerformanceTrend {
  year: number;
  aap: string;
  inc: string;
  sad: string;
  notes: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  scPopulation: string;
  dominant: string;
}

export interface SCSubGroups {
  name: string;
  description: string;
}

export interface CasteBreakdown {
  scheduledCastes: string;
  jatSikh: string;
  hinduGeneral: string;
  obc: string;
  dominant: string;
}

export interface ReligionBreakdown {
  sikh: string;
  hindu: string;
  others: string;
}

export interface Demographics {
  population: string;
  casteComposition: CasteComposition;
  scSubGroups: SCSubGroups[];
  casteBreakdown: CasteBreakdown;
  religionBreakdown: ReligionBreakdown;
  censusYear: number;
}

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout: string;
  ruralCharacter: string;
}

export interface KeySocialGroup {
  name: string;
  percentage: string;
  description: string;
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
    position: string;
    outcome: string;
  };
  strategicOptions: string[];
  keyConsiderations: string[];
}

export interface CongressStatus {
  position2022: string;
  outcome: string;
  challenge: string;
}

// ============================================================================
// RECOMMENDED CANDIDATE PROFILE
// ============================================================================

export interface CandidateProfile {
  profile: string;
  background: string;
  keyTraits: string;
  targetVoter: string;
}

export interface RecommendedCandidateProfile {
  ideal: CandidateProfile;
}

export interface IdealCandidate {
  caste: string;
  subCaste: string;
  background: string;
  profile: string;
  priority: string;
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
  result2022: string;
  keyIssues: string;
}

export interface ConstituencyProfile {
  basicDetails: {
    assemblyConstituencyNo: number;
    district: string;
    region: string;
    category: string;
    parliamentaryConstituency: string;
  };
  electionResults2022: {
    winner: string;
    margin: string;
    turnout: string;
    totalElectors: string;
  };
}

export interface PoliticalLandscape {
  currentMla: {
    name: string;
    party: string;
  };
  keyConsiderations: string[];
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
    primaryNarrative: string;
    targetVoters: string[];
    grievanceFocus: string[];
  };
}

export interface DeepResearchData {
  metadata: ResearchMetadata;
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyProfile;
  demographics: Demographics;
  keyIssues: KeyLocalIssues;
  politicalLandscape: PoliticalLandscape;
  electoralHistory: ElectoralHistoryEntry[];
  competitiveLandscape2027: CompetitiveLandscape2027;
  intelligenceGaps: IntelligenceGaps;
  recommendations: Recommendations;
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface DistrictContextBathinda {
  bathindaDemographics: {
    religionDistribution: ReligionBreakdown;
    remarks: string;
  };
}

export interface Notes {
  content: string[];
}

export interface MainDossierData {
  header: ConstituencyHeader;
  constituencyOverview: string;
  identity: ConstituencyIdentity;
  electionResults: ElectionResults;
  casteComposition: {
    scPopulation: CasteComposition;
    scSubGroups: SCSubGroups[];
  };
  voterDemographics: VoterDemographics;
  keyLocalIssues: KeyLocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  districtContextBathinda: DistrictContextBathinda;
  sources: string[];
  notes: Notes;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC091BhuchoMandiSCTypes {
  // Main dossier data
  mainDossier: MainDossierData;

  // Deep research data
  deepResearch: DeepResearchData;

  // Complete combined dossier
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
    districtContextBathinda: DistrictContextBathinda;
    notes: Notes;
  };
}

export type AC091BhuchoMandiSCData = AC091BhuchoMandiSCTypes;
