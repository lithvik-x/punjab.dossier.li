/**
 * AC080 - Fazilka Assembly Constituency Type Definitions
 * Generated from: AC080-Fazilka.md and AC080-Fazilka-deep.md
 * Date: 20 May 2026
 *
 * Coverage: 100% content analysis across 6-cycle enhancement pipeline
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: 'General' | 'SC' | 'ST';
  date: string;
}

export interface GeographicProfile {
  description: string;
  location: string;
  significance: string;
  landUse: string;
  borderCharacter: string;
}

export interface KeyStatistics2022 {
  winner: string;
  party: string;
  margin: number;
  runnerUp: string | null;
  runnerUpParty: string | null;
  significantVictory: string;
}

export interface ConstituencyIdentity {
  header: ConstituencyHeader;
  geographicProfile: GeographicProfile;
  keyStatistics2022: KeyStatistics2022;
  notableNote: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  runnerUp: string | null;
  runnerUpParty: string | null;
  margin: number | null;
  winnerVoteCount: number | null;
  verificationStatus: 'Verified' | 'Partially Verified' | 'Needs Verification';
}

export interface ElectionResults {
  2022: ElectionResult;
  2017: ElectionResult;
  2012: ElectionResult;
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

export interface DistrictDemographics {
  indicator: string;
  value: string;
}

export interface CasteCompositionEntry {
  caste: string;
  percentage: number;
  notes: string;
}

export interface CasteComposition {
  jatSikh: number;
  sc: number;
  obc: number;
  upperCaste: number;
  borderCommunities: number;
  other: number;
}

export interface ReligionComposition {
  religion: string;
  percentage: number | null;
  notes: string;
}

export interface Demographics {
  districtDemographics: DistrictDemographics[];
  casteComposition: CasteComposition;
  religiousComposition: ReligionComposition[];
  scPopulationDistrict: number;
  districtScPercentage: number;
  ruralPopulationPercentage: number;
}

// ============================================================================
// KEY ISSUES AND GRIEVANCES
// ============================================================================

export interface PrimaryIssue {
  rank: number;
  title: string;
  description: string;
}

export interface SecondaryIssue {
  title: string;
  description: string;
}

export interface KeyIssues {
  primary: PrimaryIssue[];
  secondary: SecondaryIssue[];
}

// ============================================================================
// POLITICAL LANDSCAPE
// ============================================================================

export interface CurrentMLA {
  name: string | null;
  party: string;
  term: string;
  verificationStatus: string;
}

export interface PoliticalLandscape {
  currentMla: CurrentMLA;
  partyPerformanceTrend: PartyPerformanceTrend[];
  districtSignificance: string;
}

// ============================================================================
// COMPETITIVE LANDSCAPE 2027
// ============================================================================

export interface LikelyContender {
  party: string;
  position: string;
}

export interface CompetitiveLandscape2027 {
  likelyContenders: LikelyContender[];
  strategicConsiderations: string[];
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  id: number;
  item: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

// ============================================================================
// LOCAL ISSUES (from main dossier)
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  category: 'Border' | 'Agriculture' | 'Social' | 'Economic' | 'Infrastructure' | 'Urban';
}

export interface LocalIssues {
  issues: LocalIssue[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    result: string;
    margin: number;
    challenge: string;
    historicalBase: string;
  };
  keyChallenges: string[];
  opportunities: string[];
}

export interface RecommendedCandidateProfile {
  idealCandidate: {
    caste: string;
    background: string;
    profile: string;
    priority: string;
  };
  selectionCriteria: string[];
}

export interface AttackLine {
  topic: string;
  vulnerability: string;
  line: string;
}

export interface StrategicData {
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLine[];
}

// ============================================================================
// BORDER CONTEXT
// ============================================================================

export interface BorderContext {
  districtFeatures: string[];
  economy: string;
  majorConcerns: string[];
}

// ============================================================================
// KEY COMMUNITIES
// ============================================================================

export interface KeyCommunity {
  community: string;
  description: string;
  politicalSignificance: string;
}

// ============================================================================
// HISTORICAL PATTERN
// ============================================================================

export interface HistoricalPattern {
  pattern: string;
  breakthrough: string;
  borderDynamics: string;
}

// ============================================================================
// RECOMMENDATIONS (from deep research)
// ============================================================================

export interface CongressStrategy {
  candidate: string;
  focus: string[];
  message: string;
  challenge: string;
}

export interface DeepResearchRecommendations {
  congressStrategy: CongressStrategy;
}

// ============================================================================
// SOURCE METADATA
// ============================================================================

export interface SourceMetadata {
  researchDossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: string;
}

// ============================================================================
// CONSTITUENCY PROFILE (from deep research)
// ============================================================================

export interface ConstituencyProfile {
  basicDetails: {
    assemblyConstituencyNo: number;
    district: string;
    region: string;
    category: string;
    parliamentaryConstituency: string;
    tehsil: string;
  };
  geographicBoundaries: {
    description: string;
    keyTowns: string;
  };
  urbanRuralComposition: {
    composition: string;
    borderCharacter: string;
    economy: string[];
  };
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  summary: string;
  districtCreationNote: string;
  electionNote: string;
}

// ============================================================================
// ELECTORAL HISTORY
// ============================================================================

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin: string;
  verificationStatus: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER TYPE
// ============================================================================

export interface AC080FazilkaDossier {
  // Metadata
  metadata: SourceMetadata;

  // Executive Summary
  executiveSummary: ExecutiveSummary;

  // Core Identity
  constituencyIdentity: ConstituencyIdentity;

  // Constituency Profile (from deep research)
  constituencyProfile: ConstituencyProfile;

  // Election Data
  electionResults: ElectionResults;

  // Demographics
  demographics: Demographics;

  // Key Issues
  keyIssues: KeyIssues;

  // Political Landscape
  politicalLandscape: PoliticalLandscape;

  // Electoral History
  electoralHistory: ElectoralHistoryEntry[];

  // Competitive Landscape 2027
  competitiveLandscape2027: CompetitiveLandscape2027;

  // Intelligence Gaps
  intelligenceGaps: IntelligenceGaps;

  // Local Issues (from main dossier)
  localIssues: LocalIssues;

  // Congress Strategic Position
  congressStrategicPosition: CongressStrategicPosition;

  // Recommended Candidate Profile
  recommendedCandidateProfile: RecommendedCandidateProfile;

  // Attack Lines Against AAP
  attackLinesAgainstAAP: AttackLine[];

  // Border Context
  borderContext: BorderContext;

  // Key Communities
  keyCommunities: KeyCommunity[];

  // Historical Pattern
  historicalPattern: HistoricalPattern;

  // Strategic Data
  strategicData: StrategicData;

  // Deep Research Recommendations
  recommendations: DeepResearchRecommendations;
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type AC080FazilkaTypes = AC080FazilkaDossier;
