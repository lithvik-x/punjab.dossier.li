/**
 * AC046-Banga Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC046-Banga.md, AC046-Banga-deep.md
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
  acNumber: string;
  officialName: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
}

export interface ExecutiveSummary {
  overview: string;
  winner: string;
  party: string;
  margin: string;
  marginNote: string;
  runnerUp: string;
  congressOpportunity: string;
  keyTrend: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votesReceived: string;
  margin: string;
  runnerUp: string;
  totalCandidates: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
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

export interface ElectorateRecord {
  election: string;
  totalElectors: string;
  voterTurnout: string;
  turnoutPercentage: string;
}

export interface ElectorateData {
  records: ElectorateRecord[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteCategory {
  category: string;
  estimatedPercentage: string;
}

export interface CasteCompositionData {
  categories: CasteCategory[];
  keyDemographics: string[];
  totalSCPercentage: string;
  totalSikhPercentage: string;
  totalHinduPercentage: string;
  totalOtherPercentage: string;
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

export interface DeepLocalIssues {
  issues: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: string;
  uniquePosition: string;
  opportunity: string;
}

export interface StrategicConsiderations {
  considerations: string[];
}

export interface CongressRecommendations {
  recommendations: string[];
}

export interface WhyCongressCanWin {
  factors: string[];
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

export interface AttackLinesAgainstOpposition {
  lines: AttackLine[];
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface PartyVoteShare {
  party: string;
  estimatedPercentage: string;
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
}

// ============================================================================
// RECOMMENDATIONS SUMMARY
// ============================================================================

export interface RecommendationsSummary {
  priority: string;
  priorityLevel: "CRITICAL" | "HIGH" | "MODERATE" | "LOW";
  candidate: string;
  strategy: string;
  narrative: string;
  marginReversalPotential: string;
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
  location: string;
}

export interface ShahidBhagatSinghNagarDistrict {
  totalPopulation: string;
  scPopulation: string;
  scPercentage: string;
  sexRatio: string;
  description: string;
}

export interface SCCommunityComposition {
  communities: string[];
}

export interface DemographicDeepDive {
  district: ShahidBhagatSinghNagarDistrict;
  scCommunities: SCCommunityComposition;
}

export interface ElectoralHistory2022 {
  candidate: string;
  party: string;
  votes: string;
  margin: string;
}

export interface ElectoralHistoryRunnerUp {
  candidate: string;
  party: string;
  votes: string;
}

export interface DeepElectoralHistory {
  election2022: ElectoralHistory2022;
  runnerUp: ElectoralHistoryRunnerUp;
  historicalPattern: string;
}

export interface PublicSentimentIndicators {
  sadRetained: string;
  dalitVotersStayed: string;
  congressInContention: string;
  antiIncumbencyAgainstAAP: string;
}

export interface AdministrativeStructure {
  dc: string;
  tehsil: string;
  blockDevelopment: string;
}

export interface GovernanceGaps {
  gaps: string[];
}

export interface GovernanceGap {
  administrativeStructure: AdministrativeStructure;
  gaps: GovernanceGaps;
}

export interface KeyInfluencer {
  name: string;
  description: string;
}

export interface Influencers {
  influencers: KeyInfluencer[];
}

export interface PoliticalInfluencers {
  sadLeadership: string;
  dalitCommunityLeaders: string;
  panchayats: string;
  kisanCommittees: string;
}

export interface InfluencersPowerStructure {
  keyInfluencers: PoliticalInfluencers;
}

export interface LocalIssuesDeep {
  issues: string[];
}

export interface SADStrategy {
  points: string[];
}

export interface CongressStrategy {
  points: string[];
}

export interface AAPStrategy {
  points: string[];
}

export interface StrategicBlueprintDeep {
  sadStrategy: SADStrategy;
  congressStrategy: CongressStrategy;
  aapStrategy: AAPStrategy;
}

export interface DeepResearch {
  constituencyIdentity: DeepConstituencyIdentity;
  demographics: DemographicDeepDive;
  electoralHistory: DeepElectoralHistory;
  publicSentiment: PublicSentimentIndicators;
  governanceGap: GovernanceGap;
  localIssues: LocalIssuesDeep;
  influencersPowerStructure: InfluencersPowerStructure;
  strategicBlueprint: StrategicBlueprintDeep;
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
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC046BangaTypes {
  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;

  // Elections
  electionHistory: ElectionHistory;
  electorateData: ElectorateData;

  // Demographics
  casteComposition: CasteCompositionData;

  // Issues
  keyLocalIssues: KeyLocalIssues;

  // Strategy
  congressStrategicPosition: CongressStrategicPosition;
  strategicConsiderations: StrategicConsiderations;
  whyCongressCanWin: WhyCongressCanWin;
  congressRecommendations: CongressRecommendations;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstOpposition;
  voteShareAnalysis: VoteShareAnalysis;
  recommendationsSummary: RecommendationsSummary;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}

export type { AC046BangaTypes as AC046BangaDossier };
