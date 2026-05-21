/**
 * AC079-Jalalabad Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC079-Jalalabad.md, AC079-Jalalabad-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
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

export interface ConstituencyIdentity {
  acNumber: number;
  assemblyConstituencyNo: string;
  name: string;
  district: string;
  formerDistrict: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  parliamentaryConstituency: string;
  tehsil: string;
  date: string;
}

export interface GeographicBoundaries {
  description: string;
  borderCharacter: string;
  keyTowns: string;
}

export interface UrbanRuralComposition {
  composition: string;
  borderCharacter: string;
  economy: string;
}

export interface ConstituencyProfile {
  identity: ConstituencyIdentity;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  overview: string;
  winner: string;
  party: string;
  runnerUp: string;
  runnerUpParty: string;
  margin: string;
  marginDiscrepancy: string;
  significance: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface VoteShareData {
  party: string;
  candidate: string;
  votes: number;
  percentage: string;
}

export interface VoterTurnout {
  year: number;
  votes: number;
  totalElectors: number;
  turnoutPercentage: string;
  stateAverage: string;
  significance: string;
}

export interface HighProfileNote {
  description: string;
  significance: string;
  showsAapPenetration: string;
}

export interface ElectionResults {
  winner: string;
  party: string;
  runnerUp: string;
  runnerUpParty: string;
  margin: string;
  marginDiscrepancy: string;
  voteShareData: VoteShareData[];
  voterTurnout: VoterTurnout;
  highProfileNote: HighProfileNote;
}

// ============================================================================
// ELECTORAL HISTORY
// ============================================================================

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin: string;
  note?: string;
}

export interface ElectoralHistory {
  entries: ElectoralHistoryEntry[];
  marginDiscrepancyNote: string;
}

export interface PartyPerformanceTrend {
  year: number;
  aap: string;
  sad: string;
  inc: string;
  notes: string;
}

export interface PartyPerformanceTrends {
  trends: PartyPerformanceTrend[];
}

export interface SukhbirBadalDefeat {
  description: string;
  perceivedImpact: string;
  margin: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface FazilkaDistrictDemographics {
  scPopulation: string;
  scPercentage: string;
  borderArea: string;
  ruralUrban: string;
}

export interface CasteComposition {
  jatSikh: string;
  sc: string;
  brahminKhatri: string;
  obc: string;
  notes: string;
}

export interface ReligiousComposition {
  predominant: string;
  hindu: string;
}

export interface Demographics {
  fazilkaDistrict: FazilkaDistrictDemographics;
  casteComposition: CasteComposition;
  religiousComposition: ReligiousComposition;
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface PrimaryIssue {
  rank: number;
  title: string;
  description: string;
  subIssues?: string[];
}

export interface SecondaryIssue {
  rank: number;
  title: string;
}

export interface KeyIssues {
  primaryIssues: PrimaryIssue[];
  secondaryIssues: SecondaryIssue[];
}

// ============================================================================
// POLITICAL LANDSCAPE
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  tenure: string;
}

export interface HistoricalSignificance {
  description: string;
  traditionalSeat: string;
  showsAapAbility: string;
}

export interface PoliticalLandscape {
  currentMLA: CurrentMLA;
  historicalSignificance: HistoricalSignificance;
  partyPerformanceTrends: PartyPerformanceTrends;
  sukhbirBadalDefeat: SukhbirBadalDefeat;
}

// ============================================================================
// COMPETITIVE LANDSCAPE 2027
// ============================================================================

export interface LikelyContender {
  party: string;
  candidate: string;
  notes: string;
}

export interface StrategicConsideration {
  description: string;
}

export interface CompetitiveLandscape2027 {
  likelyContenders: LikelyContender[];
  strategicConsiderations: StrategicConsideration[];
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  item: string;
  status: "MISSING" | "NEEDS_VERIFICATION" | "PARTIAL";
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

// ============================================================================
// STRATEGIC RECOMMENDATIONS
// ============================================================================

export interface CongressStrategy {
  positioning: string;
  approach: string;
  focus: string[];
  casteStrategy: string;
}

export interface SADStrategy {
  priority: string;
  options: string;
  factors: string;
}

export interface AAPStrategy {
  position: string;
  counterStrategy: string;
  emphasis: string;
}

export interface StrategicRecommendations {
  congress: CongressStrategy;
  sad: SADStrategy;
  aap: AAPStrategy;
}

// ============================================================================
// DEEP RESEARCH TYPES
// ============================================================================

export interface DeepConstituencyOverview {
  description: string;
  borderImportance: string;
}

export interface DeepElectionResults {
  winner: string;
  party: string;
  margin: string;
  totalElectors: number;
  voterTurnout: string;
  votes: number;
}

export interface DeepHistoricalContext {
  2017: string;
  bigShock: string;
  pattern: string;
}

export interface SukhbirSinghBadalNote {
  party: string;
  formerPosition: string;
  defeatImpact: string;
}

export interface DeepCasteComposition {
  demographics: {
    jatSikh: string;
    scPopulation: string;
    obc: string;
    upperCastes: string;
    borderCommunities: string;
  };
  keyCommunities: {
    community: string;
    description: string;
  }[];
}

export interface DeepKeyLocalIssues {
  issues: string[];
}

export interface DeepCongressStrategicPosition {
  currentStatus: {
    result2022: string;
    challenge: string;
    historical: string;
  };
  keyChallenges: string[];
  opportunities: string[];
}

export interface DeepRecommendedCandidateProfile {
  idealCandidate: {
    attribute: string;
    profile: string;
  }[];
  strategicNote: string;
}

export interface DeepAttackLines {
  vulnerabilities: string[];
  narratives: string[];
}

export interface DeepNotes {
  notes: string[];
}

export interface DeepResearch {
  constituencyOverview: DeepConstituencyOverview;
  electionResults: DeepElectionResults;
  historicalContext: DeepHistoricalContext;
  sukhbirSinghBadalNote: SukhbirSinghBadalNote;
  casteComposition: DeepCasteComposition;
  keyLocalIssues: DeepKeyLocalIssues;
  congressStrategicPosition: DeepCongressStrategicPosition;
  recommendedCandidateProfile: DeepRecommendedCandidateProfile;
  attackLines: DeepAttackLines;
  notes: DeepNotes;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface VerificationStatus {
  status: "VERIFIED" | "PARTIALLY VERIFIED" | "UNVERIFIED";
  notes: string[];
}

export interface DataQuality {
  sources: string[];
  compiledDate: string;
  verificationStatus: VerificationStatus;
  dataCurrency: string;
  frameworkVersion: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC079JalalabadDossier {
  // Identity
  metadata: ResearchMetadata;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;

  // Elections
  electionResults: ElectionResults;
  electoralHistory: ElectoralHistory;

  // Demographics
  demographics: Demographics;

  // Issues
  keyIssues: KeyIssues;

  // Political Landscape
  politicalLandscape: PoliticalLandscape;

  // Competitive Landscape
  competitiveLandscape2027: CompetitiveLandscape2027;

  // Intelligence
  intelligenceGaps: IntelligenceGaps;

  // Strategy
  strategicRecommendations: StrategicRecommendations;

  // Deep Research
  deepResearch: DeepResearch;

  // Quality
  dataQuality: DataQuality;
}

export type AC079JalalabadTypes = AC079JalalabadDossier;
