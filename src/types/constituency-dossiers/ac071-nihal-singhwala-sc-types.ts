/**
 * AC071-Nihal Singh Wala SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC071-Nihal-Singhwala-SC.md, AC071-NihalSinghWala-deep.md
 */

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
  tehsil: string;
  areaCharacter: string;
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
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
}

export interface ElectionResultPartial {
  winner: string;
  party: string;
  margin: string;
}

export interface ElectionResults {
  results2022: ElectionResult2022;
  historicalContext: string;
  congressBase: string;
  aapGainedGround: string;
  ruralScVotesDecisive: string;
}

export interface ElectoralHistory {
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

export interface ScDemographicsMoga {
  scPopulation: string;
  totalPopulation: string;
  scPercentage: string;
}

export interface MogaDistrictProfile {
  sexRatio: string;
  literacy: string;
  populationDensity: string;
}

export interface CasteComposition {
  majorCommunities: {
    name: string;
    description: string;
  }[];
}

export interface ScDemographicsPunjab {
  scPopulation: string;
  dalitCommunities: string[];
}

export interface MogaDistrictDemographics {
  totalPopulation: string;
  sexRatio: string;
  scPopulation: string;
  literacyRate: string;
  populationDensity: string;
}

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
}

export interface Demographics {
  scDemographicsMoga: ScDemographicsMoga;
  mogaDistrictProfile: MogaDistrictProfile;
  casteComposition: CasteComposition;
  religiousComposition: ReligiousComposition;
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

export type LocalIssue = KeyLocalIssue;

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

export interface CongressStatus {
  position2022: string;
  historicalBase: string;
  challenge: string;
}

// ============================================================================
// RECOMMENDED CANDIDATE PROFILE
// ============================================================================

export interface IdealCandidate {
  caste: string;
  subCaste: string;
  background: string;
  profile: string;
  priority: string;
}

export interface CandidateProfile {
  ideal: IdealCandidate;
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

export interface AttackLines {
  farmSector: string;
  drugMenace: string;
  brokenPromises: string;
  ruralNeglect: string;
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
    tehsil: string;
  };
  geographicBoundaries: GeographicBoundaries;
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
    bsp考虑: string;
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
      term: string;
    };
    partyPerformanceTrend: PartyPerformanceTrend[];
  };
  electoralHistory: ElectoralHistory[];
  competitiveLandscape2027: CompetitiveLandscape2027;
  intelligenceGaps: IntelligenceGaps;
  recommendations: Recommendations;
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface DistrictContextMoga {
  mogaDemographics: {
    scPopulation: string;
    totalPopulation: string;
    ruralPopulation: string;
    economy: string;
    drugAddictionRates: string;
  };
}

export interface Notes {
  content: string[];
}

export interface MainDossierData {
  header: ConstituencyHeader;
  constituencyOverview: string;
  electionResults: ElectionResults;
  casteComposition: {
    scDemographicsMoga: ScDemographicsMoga;
    mogaDistrictProfile: MogaDistrictProfile;
    majorCommunities: {
      name: string;
      description: string;
    }[];
  };
  keyLocalIssues: KeyLocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  districtContextMoga: DistrictContextMoga;
  notes: Notes;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC071NihalSinghWalaSCTypes {
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
    districtContextMoga: DistrictContextMoga;
    notes: Notes;
  };
}

export type AC071NihalSinghWalaSCData = AC071NihalSinghWalaSCTypes;
