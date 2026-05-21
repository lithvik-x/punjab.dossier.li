/**
 * AC077-Firozpur Rural SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC077-Firozpur-Rural-SC.md, AC077-FirozpurRural-deep.md
 *
 * FIROZPUR RURAL (AC077) - SC Reserved Constituency in Firozpur District, Malwa Region
 * Key Highlights:
 * - Firozpur district has HIGHEST Scheduled Caste population in Punjab
 * - AAP won 2022 with 27,746 vote margin
 * - 2017 Winner: Satkar Kaur (Congress) with 71,037 votes
 */

// ============================================================================
// RESEARCH METADATA (from source file headers)
// ============================================================================

export interface ResearchMetadata {
  dossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: "VERIFIED" | "PARTIALLY_VERIFIED" | "UNVERIFIED";
}

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
  keyVillages: string;
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
  party: "AAP" | "INC" | "BSP" | "SAD" | "OTHER";
  margin: string;
  marginVotes: number;
  runnerUp: string;
  runnerUpParty: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  votes: string;
  votesCount: number;
}

export interface ElectoralHistory {
  year: number;
  winner: string;
  party: string;
  margin: string;
  marginVotes?: number;
  status: "verified" | "needs_verification";
}

export interface VoterTurnout {
  year2022: string;
  stateAverage: string;
  status: "verified" | "needs_verification";
}

export interface PartyPerformanceTrend {
  year: number;
  aap: string;
  inc: string;
  sad: string;
  notes: string;
}

export interface ElectionResults {
  result2022: ElectionResult2022;
  significantMargin: string;
  voterTurnout: VoterTurnout;
}

export interface ElectionResultsDeep {
  winner: string;
  party: string;
  margin: string;
  marginVotes: number;
  significantVictory: string;
  historicalContext: string;
  winner2017: string;
  votes2017: string;
  votesCount2017: number;
  pattern: string;
  keyNote: string;
}

export interface MarginAnalysis {
  year: number;
  winner: string;
  margin: string;
  marginVotes?: number;
  votes?: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DistrictDemographics {
  indicator: string;
  value: string;
}

export interface FirozpurDistrictDemographics {
  table: DistrictDemographics[];
  borderAreas: string;
  ruralPopulation: string;
}

export interface ScDemographicsPunjab {
  scPopulation: string;
  firozpurDistrict: string;
  mazhabiSikh: string;
  ramdasiaRavidassia: string;
  adDharmi: string;
}

export interface ReligiousComposition {
  predominant: string;
  scPopulationReligion: string;
}

export interface Demographics {
  firozpurDistrict: FirozpurDistrictDemographics;
  scDemographics: ScDemographicsPunjab;
  religiousComposition: ReligiousComposition;
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface PrimaryIssue {
  rank: number;
  title: string;
  description: string;
}

export interface SecondaryIssue {
  issue: string;
}

export interface PrimaryIssues {
  issues: PrimaryIssue[];
}

export interface SecondaryIssues {
  issues: string[];
}

export interface KeyLocalIssues {
  primaryIssues: PrimaryIssues;
  secondaryIssues: SecondaryIssues;
}

// ============================================================================
// POLITICAL LANDSCAPE
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  term: string;
}

export interface PoliticalLandscape {
  currentMla: CurrentMLA;
  partyPerformanceTrend: PartyPerformanceTrend[];
  keyObservation: string;
}

export interface CompetitiveLandscape2027 {
  likelyContenders: {
    party: string;
    status: string;
  }[];
  strategicConsiderations: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    position2022: string;
    margin: string;
    marginVotes: number;
    historicalBase: string;
    challenge: string;
  };
  keyChallenges: string[];
  opportunities: string[];
}

export interface CongressStatus {
  position2022: string;
  margin: string;
  marginVotes: number;
  historicalBase: string;
  challenge: string;
}

export interface CongressChallenges {
  challenges: string[];
}

export interface CongressOpportunities {
  opportunities: string[];
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
  selectionCriteria: string[];
}

export interface SelectionCriteria {
  criteria: string[];
}

// ============================================================================
// ATTACK LINES AGAINST AAP
// ============================================================================

export interface AttackLine {
  category: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  vulnerabilities: string[];
  narratives: string[];
}

export interface AAPVulnerabilities {
  vulnerabilities: string[];
}

export interface CongressNarratives {
  narratives: string[];
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  overview: string;
  result2022: string;
  constituencyCharacter: string;
  keyHighlights: string[];
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  item: string;
}

export interface IntelligenceGaps {
  missingData: string[];
}

// ============================================================================
// RECOMMENDATIONS
// ============================================================================

export interface CongressStrategyRecommendation {
  candidate: string;
  focus: string[];
  outreach: string;
  bspConsideration?: string;
  challenge: string;
}

export interface Recommendations {
  congressStrategy: CongressStrategyRecommendation;
}

// ============================================================================
// CASTE COMPOSITION (DEEP)
// ============================================================================

export interface SCCommunity {
  name: string;
  description: string;
}

export interface ScDemographics {
  highScPopulation: string;
  majorCommunities: SCCommunity[];
}

export interface BorderRuralFeatures {
  scPopulationConcentrated: string;
  agriculturalLabor: string;
  limitedAlternativeOccupations: string;
  drugAddictionSevere: string;
}

export interface CasteCompositionDeep {
  scDemographics: ScDemographics;
  borderRuralFeatures: BorderRuralFeatures;
}

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

export interface DeepResearchData {
  metadata: ResearchMetadata;
  constituencyOverview: string;
  electionResults: ElectionResultsDeep;
  casteComposition: CasteCompositionDeep;
  keyLocalIssues: KeyLocalIssues;
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  marginAnalysis: MarginAnalysis[];
  notes: string[];
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface MainDossierData {
  header: ConstituencyHeader;
  executiveSummary: ExecutiveSummary;
  constituencyProfile: {
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
  };
  electionResults: ElectionResults;
  demographics: Demographics;
  keyIssues: KeyLocalIssues;
  politicalLandscape: PoliticalLandscape;
  electoralHistory: ElectoralHistory[];
  competitiveLandscape2027: CompetitiveLandscape2027;
  intelligenceGaps: IntelligenceGaps;
  recommendations: Recommendations;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC077FirozpurRuralSCTypes {
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
    electionResultsDeep: ElectionResultsDeep;
    demographics: Demographics;
    casteCompositionDeep: CasteCompositionDeep;
    keyLocalIssues: KeyLocalIssues;
    congressStrategicPosition: CongressStrategicPosition;
    recommendedCandidateProfile: RecommendedCandidateProfile;
    attackLinesAgainstAAP: AttackLinesAgainstAAP;
    marginAnalysis: MarginAnalysis[];
    deepResearchData: DeepResearchData;
    notes: string[];
  };
}

export type AC077FirozpurRuralSCData = AC077FirozpurRuralSCTypes;
