/**
 * AC073-Moga Assembly Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC073-Moga.md, AC073-Moga-deep.md
 *
 * DATA CONFLICT NOTE:
 * - AC073-Moga.md (main) states: Winner 2022 = Dr. Amandeep Kaur Arora (AAP), Harjot Kamal Singh (Congress) was runner-up
 * - AC073-Moga-deep.md (deep) states: Winner 2022 = Harjot Kamal Singh (INC/Congress)
 * Both sources claim the same vote count of 52,357 for their respective winners.
 * This represents a fundamental conflict requiring verification against official CEO Punjab results.
 * The conflict is preserved explicitly in the data structure.
 */

// ============================================================================
// ENUMS & UNIONS
// ============================================================================

export type Party = "AAP" | "INC" | "SAD" | "BSP" | "OTHERS";
export type Region = "Malwa";
export type Category = "General";
export type LokSabhaSeat = "Faridkot";
export type VerificationStatus = "VERIFIED" | "PARTIALLY_VERIFIED" | "UNVERIFIED" | "NEEDS_VERIFICATION";
export type Priority = "CRITICAL" | "HIGH" | "MODERATE" | "LOW";
export type MarginType = "NARROW" | "MODERATE" | "WIDE";
export type IntelligenceGapStatus = "OPEN" | "PARTIALLY ADDRESSED" | "CLOSED";

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  category: Category;
  date: string;
}

export interface ConstituencyProfile {
  acNumber: string;
  officialName: string;
  district: string;
  region: Region;
  category: Category;
  lokSabhaSeat: LokSabhaSeat;
  tehsil: string;
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  overview: string;
  winner2022: string;
  winner2022Note: string;
  margin2022: string;
  margin2022Note: string;
  congressOpportunity: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginType: MarginType;
  runnerUp: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  votes: string;
  note: string;
}

export interface ElectionHistory {
  result2022: ElectionResult2022;
  result2017: ElectionResult2017;
  keyTrend: string;
}

// ============================================================================
// ELECTORATE DATA
// ============================================================================

export interface DistrictElectorate {
  election: string;
  totalElectors: string;
  votesPolled: string;
  turnout: string;
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
}

export interface UrbanDemographics {
  upperCastes: string;
  bc: string;
  sc: string;
  jatSikh: string;
}

export interface CasteComposition {
  districtDemographics: {
    scPopulation: string;
    sexRatio: string;
    populationDensity: string;
  };
  urbanDemographics: UrbanDemographics;
  categories: CasteCategory[];
}

export interface MogaDistrictDemographics {
  totalPopulation: string;
  scPopulation: string;
  scPercentage: string;
  sexRatio: string;
  populationDensity: string;
}

// ============================================================================
// DEMOGRAPHICS (DEEP)
// ============================================================================

export interface CasteCompositionDeep {
  jatSikh: string;
  khatriArora: string;
  scDalit: string;
  obc: string;
}

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    lossIn2022: string;
    marginAnalysis: string;
  };
  keyChallenges: string[];
  opportunities: string[];
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  idealProfile: string;
}

export interface RecommendedCandidateProfile {
  table: CandidateAttribute[];
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  rank: number;
  title: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  vulnerabilities: string[];
  lines: AttackLine[];
  congressNarratives: string[];
}

// ============================================================================
// MARGIN ANALYSIS
// ============================================================================

export interface MarginEntry {
  year: number;
  winner: string;
  margin: string;
  keyContest: string;
}

export interface MarginAnalysis {
  entries: MarginEntry[];
}

// ============================================================================
// NOTES
// ============================================================================

export interface ConstituencyNotes {
  notes: string[];
}

// ============================================================================
// DEEP RESEARCH TYPES
// ============================================================================

export interface DeepConstituencyIdentity {
  acNo: string;
  name: string;
  district: string;
  region: string;
  category: string;
  lokSabha: string;
  tehsil: string;
  location: string;
}

export interface GeographicBoundaries {
  description: string;
  keyAreas: string;
}

export interface UrbanRuralComposition {
  mix: string;
  urbanPopulation: string;
  rural: string;
  economy: string;
}

export interface DeepElectoralHistory2022 {
  winner: string;
  party: string;
  votesSecured: string;
  runnerUp: string;
  margin: string;
  significance: string;
  winnerConfirmed: boolean;
}

export interface DeepElectoralHistory2017 {
  winner: string;
  party: string;
  margin: string;
}

export interface DeepElectoralHistory {
  election2022: DeepElectoralHistory2022;
  election2017: DeepElectoralHistory2017;
  historicalPattern: string;
  keyObservation: string;
}

export interface DistrictDemographicsDeep {
  indicator: string;
  value: string;
}

export interface DemographicsDeep {
  population: {
    mogaTown: string;
    constituency: string;
  };
  districtDemographics: DistrictDemographicsDeep[];
  casteComposition: CasteCompositionDeep;
  religiousComposition: ReligiousComposition;
}

export interface PrimaryIssue {
  issue: string;
}

export interface SecondaryIssue {
  issue: string;
}

export interface KeyIssuesAndGrievances {
  primaryIssues: PrimaryIssue[];
  secondaryIssues: SecondaryIssue[];
}

export interface CurrentMLA {
  name: string;
  party: string;
  term: string;
}

export interface PartyPerformanceTrend {
  year: number;
  inc: string;
  aap: string;
  sad: string;
  notes: string;
}

export interface PoliticalLandscape {
  currentMLA: CurrentMLA;
  significanceOf2022Win: string;
  partyPerformanceTrend: PartyPerformanceTrend[];
}

export interface LikelyContender {
  party: string;
  position: string;
}

export interface StrategicConsiderations {
  considerations: string[];
}

export interface CompetitiveLandscape2027 {
  likelyContenders: LikelyContender[];
  strategicConsiderations: StrategicConsiderations;
}

export interface ElectoralHistoryDeep {
  year: number;
  winner: string;
  party: string;
  margin: string;
}

export interface IntelligenceGap {
  gap: string;
  status: IntelligenceGapStatus;
}

export interface CongressStrategyDeep {
  candidate: string;
  focus: string[];
  strengths: string[];
  challenges: string[];
}

export interface AAPStrategyDeep {
  target: string;
  points: string[];
}

export interface IntelligenceGaps {
  missingData: IntelligenceGap[];
}

export interface RecommendationsDeep {
  congressStrategy: CongressStrategyDeep;
  aapStrategy: AAPStrategyDeep;
}

export interface DeepResearchMetadata {
  researchDossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string;
  verificationStatus: VerificationStatus;
}

export interface DeepResearchData {
  metadata: DeepResearchMetadata;
  constituencyIdentity: DeepConstituencyIdentity;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
  electoralHistory: ElectoralHistoryDeep[];
  demographics: DemographicsDeep;
  keyIssues: KeyIssuesAndGrievances;
  politicalLandscape: PoliticalLandscape;
  competitiveLandscape: CompetitiveLandscape2027;
  intelligenceGaps: IntelligenceGaps;
  recommendations: RecommendationsDeep;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface DataSource {
  source: string;
}

export interface VerificationNote {
  note: string;
}

export interface DataQuality {
  sources: string[];
  compiledDate: string;
  verificationStatus: VerificationStatus;
  verificationNotes: VerificationNote[];
  dataCurrency: string;
  conflictNote: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface MainDossierData {
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;
  overview: string;
  electionHistory: ElectionHistory;
  districtElectorate: DistrictElectorate;
  casteComposition: CasteComposition;
  keyLocalIssues: KeyLocalIssues;
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
  marginAnalysis: MarginAnalysis;
  constituencyNotes: ConstituencyNotes;
}

export interface AC073MogaTypes {
  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;

  // Main dossier data
  executiveSummary: ExecutiveSummary;
  overview: string;
  electionHistory: ElectionHistory;
  districtElectorate: DistrictElectorate;
  casteComposition: CasteComposition;
  keyLocalIssues: KeyLocalIssues;
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
  marginAnalysis: MarginAnalysis;
  constituencyNotes: ConstituencyNotes;

  // Deep research
  deepResearch: DeepResearchData;

  // Quality
  dataQuality: DataQuality;
}
