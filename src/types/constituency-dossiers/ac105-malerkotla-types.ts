/**
 * AC105-Malerkotla Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC105-Malerkotla.md, AC105-Malerkotla-deep.md
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

export interface GeographicContext {
  description: string;
  uniqueFeature: string;
}

export interface ExecutiveSummary {
  summary: string;
}

export interface PoliticalSignificance {
  description: string;
  uniquePosition: string;
  communalHarmony: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votes: string;
  margin?: string;
  runnerUp?: string;
  totalContestants?: number;
  keyContestants?: { name: string; party: string }[];
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin?: string;
  runnerUp?: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin?: string;
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
  muslim: string;
  hindu: string;
  otherReligions?: string;
}

export interface CasteCompositionDeep {
  muslim: string;
  jatSikh: string;
  obc: string;
  sc: string;
  hinduUpperCaste: string;
  others: string;
}

export interface ReligionDistribution {
  muslim: string;
  hindu: string;
  sikh?: string;
  others: string;
}

export interface TownDemographics {
  muslim: string;
  hindu: string;
  otherReligions?: string;
  source?: string;
}

export interface DemographicsCensus2011 {
  population?: string;
}

export interface Demographics {
  census2011?: DemographicsCensus2011;
  townDemographics?: TownDemographics;
  casteCompositionMain: CasteCompositionMain;
  casteCompositionDeep?: CasteCompositionDeep;
  religionDistribution?: ReligionDistribution;
}

// ============================================================================
// VOTER DATA
// ============================================================================

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout?: string;
  voterTurnout2022?: string;
  urbanRuralMix?: string;
}

export interface VoterProfile {
  turnout2022: string;
  stateAverage?: string;
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

export interface DevelopmentIssues {
  issues: string[];
}

export interface CommunalHarmony {
  description: string;
  historicalTradition: string;
  majorIncidents: string;
  sufisShrineImportance?: string;
}

export interface MuslimCommunityConcerns {
  concerns: string[];
}

export interface UniquePosition {
  description: string;
  isOnlyMuslimMajorityTown: string;
  communalHarmony: string;
  historicallyReserved: string;
}

export interface IssueCategories {
  developmentIssues: DevelopmentIssues;
  communalHarmony: CommunalHarmony;
  muslimCommunityConcerns: MuslimCommunityConcerns;
  uniquePosition: UniquePosition;
}

export interface AttackLinesMain {
  line: string;
}

export interface AttackLinesAgainstAAP {
  lines: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  opportunity: string;
}

export interface CongressStrengths {
  strengths: string[];
}

export interface CongressWeaknesses {
  weaknesses: string[];
}

export interface CongressStrengthsAndWeaknesses {
  strengths: CongressStrengths;
  weaknesses: CongressWeaknesses;
}

export interface RecommendedCandidateProfile {
  casteCommunity: string;
  profile: string;
  attributes: string[];
  background: string;
  recommendation: string;
}

export interface CongressStrategy {
  strategicPosition: CongressStrategicPosition;
  strengthsAndWeaknesses: CongressStrengthsAndWeaknesses;
  recommendedCandidate: RecommendedCandidateProfile;
}

// ============================================================================
// CURRENT REPRESENTATION
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  term?: string;
}

export interface KeyPoliticalFigures {
  status: string;
}

export interface PoliticalLeadership {
  currentMLA: CurrentMLA;
  keyPoliticalFigures: KeyPoliticalFigures;
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

export interface PoliticalPlayers {
  currentMLA: CurrentMLA;
  localInfluencers: KeyPoliticalFigures;
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGaps {
  gaps: string[];
}

export interface RequiresVerification {
  items: string[];
}

export interface ResearchPriorities {
  priorities: string[];
}

export interface IntelligenceSection {
  requiresVerification: RequiresVerification;
  researchPriorities: ResearchPriorities;
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

export interface AC105MalerkotlaTypes {
  // Metadata
  metadata: ResearchMetadata;

  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  geographicContext: GeographicContext;
  executiveSummary: ExecutiveSummary;
  politicalSignificance: PoliticalSignificance;
  uniquePosition: UniquePosition;

  // Demographics
  demographics: Demographics;
  voterDemographics: VoterDemographics;
  voterProfile: VoterProfile;

  // Elections
  electionResults: ElectionResults;
  electoralHistory: ElectoralHistory;

  // Issues & Sentiment
  keyLocalIssues: KeyLocalIssues;
  issueCategories: IssueCategories;
  attackLines: AttackLinesMain[];
  attackLinesAgainstAAP: AttackLinesAgainstAAP;

  // Strategy
  congressStrategy: CongressStrategy;
  outlook2027: Outlook2027;

  // Players
  politicalLeadership: PoliticalLeadership;
  politicalPlayers: PoliticalPlayers;

  // Intelligence
  intelligenceGaps: IntelligenceGaps;
  intelligenceSection: IntelligenceSection;

  // Quality
  dataQuality: DataQuality;
}
