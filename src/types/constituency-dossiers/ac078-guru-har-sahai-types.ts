/**
 * AC078-Guru Har Sahai Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC078-Guru-Har-Sahai.md, AC078-GuruHarSahai-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  lokSabhaSeat: string;
  date: string;
}

export interface ConstituencyProfile {
  assemblyConstituencyNo: string;
  officialName: string;
  district: string;
  region: string;
  category: string;
  parliamentaryConstituency: string;
  tehsil: string;
}

export interface GeographicBoundaries {
  description: string;
  borderArea: string;
  keyTowns: string;
}

export interface UrbanRuralComposition {
  predominantly: string;
  borderCharacter: string;
  economy: string;
}

export interface ExecutiveSummary {
  overview: string;
  winner: string;
  margin: string;
  congressOpportunity: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginType: "NARROW" | "MODERATE" | "WIDE";
  note: string;
}

export interface ElectionResultDeep2022 {
  winner: string;
  party: string;
  runnerUp: string;
  margin: string;
  status: string;
}

export interface HistoricalPattern {
  congressSadCompetitive: string;
  aapWon: string;
  multiCorneredContest: string;
}

export interface MarginAnalysisEntry {
  year: string;
  winner: string;
  margin: string;
  competitiveness: string;
}

export interface MarginAnalysis {
  table: MarginAnalysisEntry[];
}

export interface ElectoralHistory {
  year2022: ElectionResultDeep2022;
  year2017: string;
  year2012: string;
}

export interface VoterTurnout {
  year: string;
  turnout: string;
  stateAverage: string;
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  name: string;
  estimatedPercentage: string;
}

export interface CasteComposition {
  categories: CasteCategory[];
  keyCommunities: string[];
}

export interface FirozpurDemographics {
  scPopulation: string;
  borderAreas: string;
}

export interface ReligiousComposition {
  predominant: string;
  minority: string;
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

export interface PrimaryIssues {
  issues: string[];
}

export interface SecondaryIssues {
  issues: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  lossIn2022: string;
  opportunity: string;
  challenge: string;
}

export interface CongressKeyChallenges {
  challenges: string[];
}

export interface CongressOpportunities {
  opportunities: string[];
}

export interface CurrentStatus {
  result: string;
  opportunity: string;
  challenge: string;
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  idealProfile: string;
}

export interface IdealCandidate {
  caste: string;
  background: string;
  profile: string;
  priority: string;
}

export interface SelectionCriteria {
  criteria: string[];
}

export interface RecommendedCandidateProfile {
  ideal: IdealCandidate;
  selectionCriteria: SelectionCriteria;
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
  vulnerabilities: AttackLine[];
}

export interface CongressNarrative {
  narratives: string[];
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SWOTStrengths {
  factors: string[];
}

export interface SWOTWeaknesses {
  factors: string[];
}

export interface SWOTOpportunities {
  factors: string[];
}

export interface SWOTThreats {
  factors: string[];
}

export interface CongressSWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================================================
// DEEP RESEARCH TYPES
// ============================================================================

export interface ResearchMetadata {
  dossierId: string;
  topic: string;
  tier: string;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: string;
}

export interface DeepGeographicContext {
  location: string;
  borderArea: string;
  keyTowns: string[];
  economy: string;
}

export interface DeepDemographics {
  firozpurDistrict: FirozpurDemographics;
  casteComposition: string;
  religiousComposition: ReligiousComposition;
  borderCommunities: string;
}

export interface DeepPublicSentiment {
  primaryGrievances: string[];
  secondaryIssues: string[];
}

export interface IntelligenceGap {
  item: string;
  status: "VERIFIED" | "PARTIALLY VERIFIED" | "UNVERIFIED" | "NEEDS_VERIFICATION";
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

export interface DeepRecommendations {
  candidate: string;
  focus: string[];
  message: string;
}

export interface DeepResearch {
  researchMetadata: ResearchMetadata;
  executiveSummary: string;
  constituencyProfile: ConstituencyProfile;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
  electionResults2022: ElectionResultDeep2022;
  voterTurnout: VoterTurnout;
  demographics: DeepDemographics;
  primaryIssues: PrimaryIssues;
  secondaryIssues: SecondaryIssues;
  currentMLA: string;
  partyPerformanceTrend: string;
  electoralHistory: ElectoralHistory;
  intelligenceGaps: IntelligenceGaps;
  recommendations: DeepRecommendations;
}

export interface VerificationStatus {
  status: "VERIFIED" | "PARTIALLY VERIFIED" | "UNVERIFIED";
  notes: string[];
}

export interface DataQuality {
  sources: string[];
  compiledDate: string;
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

// ============================================================================
// NOTES SECTION
// ============================================================================

export interface ConstituencyNotes {
  notes: string[];
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC078GuruHarSahaiTypes {
  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;

  // Geography
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;

  // Elections
  electionResult2022: ElectionResult2022;
  historicalPattern: HistoricalPattern;
  marginAnalysis: MarginAnalysis;
  electoralHistory: ElectoralHistory;
  voterTurnout: VoterTurnout;

  // Demographics
  casteComposition: CasteComposition;
  religiousComposition: ReligiousComposition;

  // Issues
  keyLocalIssues: KeyLocalIssues;
  primaryIssues: PrimaryIssues;
  secondaryIssues: SecondaryIssues;

  // Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  congressKeyChallenges: CongressKeyChallenges;
  congressOpportunities: CongressOpportunities;
  congressSWOT: CongressSWOT;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  congressNarrative: CongressNarrative;

  // Deep Research
  deepResearch: DeepResearch;

  // Notes
  constituencyNotes: ConstituencyNotes;

  // Quality
  dataQuality: DataQuality;
}
