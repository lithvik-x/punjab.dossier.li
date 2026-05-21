/**
 * AC-087 Faridkot Assembly Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC087-Faridkot.md + AC087-Faridkot-deep.md
 */

// =============================================================================
// ENUMS & UNIONS
// =============================================================================

export type Party = "AAP" | "INC" | "SAD" | "BSP" | "OTHERS";
export type Region = "Malwa";
export type Category = "GEN";
export type LokSabhaSeat = "Faridkot";
export type VerificationStatus = "VERIFIED" | "PARTIALLY_VERIFIED" | "NEEDS_VERIFICATION";
export type Priority = "HIGH" | "MEDIUM" | "LOW";
export type IssuePriority = 1 | 2 | 3 | 4 | 5;

// =============================================================================
// CORE CONSTITUENCY IDENTITY
// =============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: Region;
  category: Category;
  lokSabhaSeat: LokSabhaSeat;
}

export interface ResearchMetadata {
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

// =============================================================================
// EXECUTIVE SUMMARY
// =============================================================================

export interface ExecutiveSummary {
  description: string;
  winner2022: string;
  winnerParty2022: Party;
  votes2022: number;
  voteShare2022: number;
  turnout2022: number;
  margin2022: number;
  totalElectors2022: number;
  runnerUp2022: string;
  runnerUpParty2022: Party;
}

// =============================================================================
// ELECTION RESULTS
// =============================================================================

export interface ElectionResult2022 {
  year: 2022;
  winner: string;
  winnerParty: Party;
  votes: number;
  voteShare: number;
  turnout: number;
  totalElectors: number;
  margin: number;
  runnerUp: string;
  runnerUpParty: Party;
}

export interface ElectionResult2017 {
  year: 2017;
  winner: string;
  winnerParty: Party;
  votes: number;
  voteShare: number;
  margin: number;
  runnerUp: string;
  runnerUpParty: Party;
  notes?: string;
}

export interface ElectionResult2012 {
  year: 2012;
  winner?: string;
  winnerParty?: Party;
  notes: string;
}

export interface ElectionResults {
  election2022: ElectionResult2022;
  election2017: ElectionResult2017;
  election2012: ElectionResult2012;
}

// =============================================================================
// POLITICAL SIGNIFICANCE
// =============================================================================

export interface PoliticalSignificance {
  districtHeadquarters: boolean;
  historicalSignificance: string;
  transitSeat: string;
}

// =============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// =============================================================================

export interface CasteBreakdown {
  category: string;
  estimatedPercent: string;
  notes?: string;
}

export interface CasteComposition {
  sikhs: CasteBreakdown;
  hindus: CasteBreakdown;
  jatSikh: CasteBreakdown;
  scPopulation: CasteBreakdown;
  obc: CasteBreakdown;
}

export interface CasteCompositionDeep {
  jatSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
}

export interface ReligionBreakdown {
  religion: string;
  percentage: string;
}

export interface Demographics {
  totalPopulation?: number;
  totalElectors: number;
  voterTurnout: number;
  turnoutPercent: number;
  urbanRuralMix: string;
}

export interface VoterProfile {
  ruralVoters: string;
  urbanVoters: string;
  turnout: string;
  note?: string;
}

// =============================================================================
// LOCAL ISSUES
// =============================================================================

export interface LocalIssue {
  rank: IssuePriority;
  title: string;
  description: string;
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// =============================================================================
// CONGRESS STRATEGIC POSITION
// =============================================================================

export interface CongressStrategicPosition {
  currentStatus: string;
  strategicConsiderations: string[];
  focusAreas: string[];
}

// =============================================================================
// CANDIDATE RECOMMENDATIONS
// =============================================================================

export interface RecommendedCandidateProfile {
  profile: string;
  background: string;
  keyTraits: string;
  targetVoter: string;
}

export interface CandidateAttribute {
  attribute: string;
  description: string;
}

// =============================================================================
// ATTACK LINES
// =============================================================================

export interface AttackLine {
  rank: IssuePriority;
  title: string;
  description: string;
}

// =============================================================================
// DEEP RESEARCH TYPES
// =============================================================================

export interface ConstituencyProfile {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  category: Category;
  parliamentaryConstituency: LokSabhaSeat;
}

export interface ElectoralHistoryEntry {
  year: number;
  winner?: string;
  party?: Party;
  margin?: string;
  notes?: string;
}

export interface ElectoralHistory {
  entries: ElectoralHistoryEntry[];
}

export interface PrimaryIssues {
  issues: string[];
}

export interface CurrentMLA {
  name: string;
  party: Party;
}

export interface LocalInfluencers {
  note: string;
}

export interface IntelligenceGap {
  item: string;
  status: "NEEDS_VERIFICATION" | "NEEDS_DATA";
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

export interface CongressStrategy2027 {
  targetAntiIncumbency: boolean;
  candidateRequirement: string;
  focusAreas: string[];
}

export interface KeyWinningStrategy {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string;
  grievanceFocus: string[];
}

export interface RecommendationsForCongress {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string;
  grievanceFocus: string[];
}

export interface DeepResearchData {
  executiveSummary: string;
  constituencyProfile: ConstituencyProfile;
  electionResults2022: ElectionResult2022;
  demographics: {
    population: number;
    casteComposition: CasteCompositionDeep;
    religionDistribution: ReligionBreakdown[];
  };
  electoralHistory: ElectoralHistory;
  primaryIssues: PrimaryIssues;
  attackLinesForCongress: string[];
  currentMLA: CurrentMLA;
  localInfluencers: LocalInfluencers;
  voterProfile: VoterProfile;
  congressStrategy2027: CongressStrategy2027;
  keyWinningStrategy: KeyWinningStrategy;
  intelligenceGaps: IntelligenceGaps;
  recommendationsForCongress: RecommendationsForCongress;
}

// =============================================================================
// MAIN DOSSIER
// =============================================================================

export interface MainDossierData {
  researchMetadata: ResearchMetadata;
  constituencyIdentity: ConstituencyIdentity;
  executiveSummary: ExecutiveSummary;
  electionResults: ElectionResults;
  politicalSignificance: PoliticalSignificance;
  casteComposition: CasteComposition;
  voterDemographics: Demographics;
  keyLocalIssues: LocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLine[];
  sources: string[];
}

// =============================================================================
// COMBINED COMPLETE DOSSIER
// =============================================================================

export interface AC087FaridkotDossierComplete {
  researchId: string;
  deepResearchId: string;
  main: MainDossierData;
  deep: DeepResearchData;
  sources: string[];
  compiledDate: string;
}

// =============================================================================
// CONSTITUENCY REFERENCE (shortcut type)
// =============================================================================

export interface AC087FaridkotReference {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  category: Category;
  winner2022: string;
  winnerParty2022: Party;
  margin2022: number;
}
