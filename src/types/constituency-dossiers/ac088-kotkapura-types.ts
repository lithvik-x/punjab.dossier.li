/**
 * AC088-Kotkapura Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC088-Kotkapura.md, AC088-Kotkapura-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: string;
  dataCurrency: string;
}

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  lokSabhaSeat: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  category: string;
  historicalNote?: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare?: string;
  margin: string;
  runnerUp?: string;
  totalElectors?: string;
  turnout?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  totalElectors?: string;
}

export interface ElectionResult2012 {
  winner: string;
  party?: string;
  margin?: string;
}

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin: string;
}

export interface ElectoralHistory {
  entries: ElectoralHistoryEntry[];
}

export interface ElectionResults {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteCompositionMain {
  sikhMajority: string;
  hinduMinority: string;
  jatSikh: string;
  scPopulation: string;
  obc: string;
}

export interface CasteCompositionDeep {
  jatSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
}

export interface ReligionDistribution {
  sikh: string;
  hindu: string;
  others: string;
}

export interface DemographicsCensus2011 {
  population: string;
}

export interface Demographics {
  census2011: DemographicsCensus2011;
  casteCompositionMain: CasteCompositionMain;
  casteCompositionDeep: CasteCompositionDeep;
  religionDistribution: ReligionDistribution;
}

// ============================================================================
// VOTER DATA
// ============================================================================

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout: string;
  urbanRuralMix: string;
}

export interface VoterProfile {
  turnout2022: string;
}

// ============================================================================
// POLITICAL SIGNIFICANCE
// ============================================================================

export interface PoliticalSignificance {
  aapStronghold: string;
  growingMargin: string;
  industrialHistory: string;
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  prioritySegment?: string[];
}

export interface PrimaryIssues {
  issues: LocalIssue[];
}

export interface KeyLocalIssues {
  primaryIssues: PrimaryIssues;
}

export interface AttackLinesMain {
  line: string;
}

export interface AttackLinesDeep {
  lines: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentHolder: string;
  marginGrowth: string;
  challenges: string[];
}

export interface RecommendedCandidateProfile {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoter: string;
}

export interface CongressStrategy {
  strategicPosition: CongressStrategicPosition;
  recommendedCandidate: RecommendedCandidateProfile;
}

// ============================================================================
// 2027 OUTLOOK
// ============================================================================

export interface CongressStrategy2027 {
  targetAntiIncumbency: boolean;
  strongLocalCandidate: boolean;
  focusAreas: string[];
}

export interface KeyWinningStrategy {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

export interface Outlook2027 {
  congressStrategy: CongressStrategy2027;
  keyWinningStrategy: KeyWinningStrategy;
}

// ============================================================================
// POLITICAL PLAYERS & INFLUENCERS
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
}

export interface LocalInfluencers {
  status: string;
  details?: string;
}

export interface PoliticalPlayers {
  currentMLA: CurrentMLA;
  localInfluencers: LocalInfluencers;
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  summary: string;
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGaps {
  gaps: string[];
}

export interface DataQuality {
  sources: { name: string; url?: string }[];
  researchStatus: {
    status: string;
    gaps: string[];
  };
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC088KotkapuraTypes {
  // Metadata
  metadata: ResearchMetadata;

  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  executiveSummary: ExecutiveSummary;
  politicalSignificance: PoliticalSignificance;

  // Demographics
  demographics: Demographics;
  voterDemographics: VoterDemographics;
  voterProfile: VoterProfile;

  // Elections
  electionResults: ElectionResults;
  electoralHistory: ElectoralHistory;

  // Issues & Sentiment
  keyLocalIssues: KeyLocalIssues;
  attackLines: AttackLinesMain[];

  // Strategy
  congressStrategy: CongressStrategy;
  outlook2027: Outlook2027;

  // Players
  politicalPlayers: PoliticalPlayers;

  // Intelligence
  intelligenceGaps: IntelligenceGaps;

  // Quality
  dataQuality: DataQuality;
}
