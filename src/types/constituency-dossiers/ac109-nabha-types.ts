/**
 * AC109-Nabha Assembly Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC109-Nabha.md, AC109-Nabha-deep.md
 *
 * DATA CONFLICT NOTE:
 * - AC109-Nabha.md (main) states: Category = "General"
 * - AC109-Nabha-deep.md (deep) states: Type = "SC Reserved"
 * This represents a fundamental conflict - the deep research file claims it is
 * an SC reserved constituency while the main dossier lists it as General category.
 * Official sources should be consulted to verify the correct category.
 * The conflict is preserved explicitly in the data structure.
 */

// ============================================================================
// ENUMS & UNIONS
// ============================================================================

export type Party = "AAP" | "INC" | "SAD" | "BSP" | "OTHERS";
export type Region = "Malwa";
export type Category = "General" | "SC";
export type LokSabhaSeat = "Patiala";
export type VerificationStatus = "VERIFIED" | "PARTIALLY_VERIFIED" | "UNVERIFIED" | "NEEDS_VERIFICATION";
export type Priority = "CRITICAL" | "HIGH" | "MODERATE" | "LOW";
export type MarginType = "NARROW" | "MODERATE" | "WIDE";
export type IntelligenceGapStatus = "OPEN" | "PARTIALLY ADDRESSED" | "CLOSED";

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  category: Category;
  date: string;
}

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  category: Category;
  dataCurrency: string;
}

export interface ConstituencyProfile {
  acNumber: string;
  officialName: string;
  district: string;
  region: Region;
  category: Category;
  lokSabhaSeat: LokSabhaSeat;
  type: string;
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  overview: string;
  winner2022: string;
  party2022: string;
  margin2022: string;
  marginType: MarginType;
  runnerUp: string;
  congressOpportunity: string;
  notes: string[];
}

export interface DeepExecutiveSummary {
  overview: string;
  constituencyType: string;
  significance: string;
  seatStatus: string;
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
  runnerUpParty?: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  note: string;
}

export interface ElectionHistory {
  result2022: ElectionResult2022;
  result2017: ElectionResult2017;
  result2012: ElectionResult2012;
  keyTrend: string;
}

// Deep research election results (with verification needs)
export interface DeepElectoralHistory2022 {
  winner: string;
  party: string;
  votesSecured?: string;
  runnerUp: string;
  runnerUpParty?: string;
  margin: string;
  significance?: string;
  winnerConfirmed: boolean;
  needsVerification: string[];
}

export interface DeepElectoralHistory2017 {
  winner: string;
  party: string;
  margin: string;
}

export interface DeepElectoralHistory {
  election2022: DeepElectoralHistory2022;
  election2017: DeepElectoralHistory2017;
  historicalPattern?: string;
  keyObservation?: string;
}

// ============================================================================
// ELECTORATE DATA
// ============================================================================

export interface ElectorateData {
  totalElectors: string;
  voterTurnout2022: string;
  note: string;
}

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

export interface CasteComposition {
  categories: CasteCategory[];
  note: string;
}

export interface CasteCompositionDeep {
  jatSikh: string;
  obc: string;
  sc: string;
  hinduUpperCaste: string;
  others: string;
}

export interface DistrictDemographics {
  totalPopulation: string;
  urbanPopulation: string;
  sexRatio: string;
}

export interface DemographicsDeep {
  districtDemographics: DistrictDemographics;
  casteComposition: CasteCompositionDeep;
  scPopulationNote: string;
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

// Deep research issues
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

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentPosition: {
    status: string;
    lossIn2022: string;
    historicalStrength: string;
    challenge: string;
  };
  strengths: string[];
  weaknesses: string[];
  keyChallenges?: string[];
  opportunities?: string[];
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  idealProfile: string;
}

export interface RecommendedCandidateProfile {
  ideal: {
    caste: string;
    profile: string;
    attributes: string;
    background: string;
  };
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
}

// ============================================================================
// NOTES
// ============================================================================

export interface Notes {
  content: string[];
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
  type: string;
}

export interface GeographicBoundaries {
  description: string;
  keyAreas: string;
}

export interface GeographicContext {
  location: string;
  economy: string;
  agriculturalEconomy: string;
}

export interface UrbanRuralComposition {
  mix: string;
  urbanPopulation: string;
  rural: string;
  economy: string;
}

export interface VoterTurnout {
  stateAverage: string;
  constituencySpecific?: string;
}

export interface PoliticalLeadership {
  currentMLA?: string;
  currentMLAParty?: string;
  currentMLATerm?: string;
  keyPoliticalFigures?: string[];
  needsVerification: string[];
}

export interface GovernmentSchemes {
  beneficiaryData?: string;
  needsVerification: string[];
}

export interface CompetitiveLandscape2027 {
  likelyContenders?: string[];
  strategicConsiderations?: string[];
}

export interface IntelligenceGap {
  gap: string;
  status: IntelligenceGapStatus;
}

export interface IntelligenceGaps {
  missingData: IntelligenceGap[];
}

export interface Recommendations {
  congressStrategy?: {
    candidate?: string;
    focus?: string[];
    strengths?: string[];
    challenges?: string[];
  };
  researchPriorities?: string[];
}

export interface DeepResearchMetadata {
  researchDossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string;
  verificationStatus: VerificationStatus;
  sources: string[];
}

export interface DeepResearchData {
  metadata: DeepResearchMetadata;
  constituencyIdentity: DeepConstituencyIdentity;
  geographicBoundaries: GeographicBoundaries;
  geographicContext: GeographicContext;
  urbanRuralComposition: UrbanRuralComposition;
  electoralHistory: DeepElectoralHistory;
  demographics: DemographicsDeep;
  keyIssues: KeyIssuesAndGrievances;
  politicalLeadership: PoliticalLeadership;
  voterTurnout: VoterTurnout;
  governmentSchemes: GovernmentSchemes;
  competitiveLandscape: CompetitiveLandscape2027;
  intelligenceGaps: IntelligenceGaps;
  recommendations: Recommendations;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface DataSource {
  source: string;
  url?: string;
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
  header: ConstituencyHeader;
  constituencyOverview: string;
  electionResults: {
    results2022: ElectionResult2022;
    historicalContext: string;
    congressBase: string;
    aapGainedGround: string;
    ruralScVotesDecisive: string;
  };
  casteComposition: {
    categories: CasteCategory[];
    note: string;
  };
  electorateData: ElectorateData;
  keyLocalIssues: LocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  notes: Notes;
}

export interface AC109NabhaTypes {
  // Identity
  header: ConstituencyHeader;
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;

  // Main dossier data
  executiveSummary: ExecutiveSummary;
  constituencyOverview: string;
  electionHistory: ElectionHistory;
  electorateData: ElectorateData;
  casteComposition: CasteComposition;
  keyLocalIssues: KeyLocalIssues;
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
  notes: Notes;

  // Deep research
  deepResearch: DeepResearchData;

  // Quality
  dataQuality: DataQuality;
}

export interface AC109NabhaDossier {
  main: MainDossierData;
  deep: DeepResearchData;
  quality: DataQuality;
}
