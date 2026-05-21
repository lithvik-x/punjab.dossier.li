/**
 * AC092 - Bathinda Urban Assembly Constituency
 * TypeScript Type Definitions
 *
 * Research Micro-Task ID: AC092-BathindaUrban-001
 * Generated through 6-cycle enhancement pipeline
 * Sources: AC092-Bathinda-Urban.md (Tier 1) + AC092-BathindaUrban-deep.md (Tier 2)
 */

// ============================================================================
// ENUMS
// ============================================================================

export enum BathindaUrbanRegion {
  MALWA = "Malwa",
}

export enum BathindaUrbanType {
  GENERAL = "General",
}

export enum VerificationStatus {
  PARTIALLY_VERIFIED = "PARTIALLY_VERIFIED",
  VERIFIED = "VERIFIED",
  NEEDS_VERIFICATION = "NEEDS_VERIFICATION",
}

export enum Party {
  AAP = "AAP",
  AAM_AADMI_PARTY = "Aam Aadmi Party",
  BJP = "BJP",
  CONGRESS = "Congress",
  INC = "INC",
  SAD = "SAD",
  BSP = "BSP",
  UNKNOWN = "UNKNOWN",
}

export enum Religion {
  HINDU = "Hindu",
  SIKH = "Sikh",
  CHRISTIAN = "Christian",
  MUSLIM = "Muslim",
  BUDDHIST = "Buddhist",
  JAIN = "Jain",
  OTHER = "Other",
}

export enum CasteCategory {
  UPPER_CASTE = "Upper Caste",
  JAT_SIKH = "Jat Sikh",
  SCHEDULED_CASTE = "SC",
  OBC = "OBC",
  MINORITY = "Minority",
  BANIYA = "Baniya",
  OTHER = "Other",
}

export enum MediaType {
  NATIONAL = "National",
  REGIONAL = "Regional",
  LOCAL = "Local",
  SOCIAL = "Social",
}

export enum ProbabilityLevel {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export enum ImpactLevel {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum PoliticalParty {
  AAP = "AAP",
  BJP = "BJP",
  CONGRESS = "Congress",
  SAD = "SAD",
}

// ============================================================================
// CORE TYPES
// ============================================================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

export interface GeographicProfile {
  description: string;
  location: string;
  lokSabhaConstituency: string;
  keyAreas: string[];
  urbanPercentage: number;
}

export interface KeyStatistics2022 {
  winner: string;
  runnerUp: string;
  runnerUpParty: Party | string;
  winnerParty: Party;
  winnerVoteCount: number | null;
  margin: number;
  totalElectors: number | null;
  totalVotes: number | null;
  voterTurnout: number | null;
}

export interface ElectionResult {
  year: number;
  winner: string;
  party: Party | string;
  runnerUp: string;
  runnerUpParty: Party | string;
  margin: number;
  winnerVoteCount?: number;
  runnerUpVoteCount?: number;
  totalElectors?: number;
  totalVotes?: number;
  voterTurnout?: number;
  needsVerification: boolean;
}

export interface ElectoralHistory {
  results: ElectionResult[];
  significance: string;
  historicalNote: string;
}

export interface CasteComposition {
  category: CasteCategory;
  percentage: number;
}

export interface ReligionBreakdown {
  religion: Religion;
  percentage: number;
}

export interface VoterDemographics {
  totalElectors: number;
  voterTurnout: number;
  urbanPercentage: number;
  description: string;
}

export interface DemographicsCensus2011 {
  population: number;
  populationNote: string;
  casteComposition: CasteComposition[];
  religionDistribution: ReligionBreakdown[];
  districtReligionDistribution: ReligionBreakdown[];
}

export interface LocalIssue {
  rank: number;
  issue: string;
  description: string;
}

export interface LocalIssues {
  issues: LocalIssue[];
  source: string;
}

export interface PoliticalSignificance {
  description: string;
  keyPoints: string[];
}

export interface CongressStrategicPosition {
  summary: string;
  strategicConsiderations: string[];
}

export interface RecommendedCandidateProfile {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoter: string;
}

export interface AttackLine {
  line: string;
}

export interface VotingDynamics {
  area: string;
  voterBase: string;
  dominantParties: string[];
}

export interface Demographics {
  casteComposition: CasteComposition[];
  religionBreakdown: ReligionBreakdown[];
  votingDynamics: VotingDynamics[];
  voterDemographics: VoterDemographics;
  demographicsCensus2011: DemographicsCensus2011;
}

export interface MlaPerformance {
  name: string;
  party: Party;
  term: string;
  background: string | null;
  attendanceRecord: string | null;
  workQuality: string | null;
  needsVerification: boolean;
}

export interface GovernanceGap {
  mlaPerformance: MlaPerformance;
  governanceIssues: string[];
  developmentWork: string[];
}

export interface PoliticalInfluencer {
  name: string;
  party?: Party;
  description: string;
  isCurrent: boolean;
  needsVerification: boolean;
}

export interface SocialReligiousInfluencer {
  name: string;
  type: string;
  description: string;
}

export interface Influencers {
  political: PoliticalInfluencer[];
  socialReligious: SocialReligiousInfluencer[];
}

export interface MediaOutlet {
  name: string;
  type: MediaType;
}

export interface MediaLandscape {
  outlets: MediaOutlet[];
  notes: string;
}

export interface PhysicalMapping {
  keyGeography: string;
  description: string;
  urbanVoterPercentage: number;
  middleClassPercentage: string;
}

export interface SwotItem {
  text: string;
  party: PoliticalParty | "AAP" | "Opposition";
}

export interface SwotAnalysis {
  strengths: SwotItem[];
  weaknesses: SwotItem[];
  opportunities: SwotItem[];
  threats: SwotItem[];
}

export interface CourseChangingFactor {
  factor: string;
  probability: ProbabilityLevel;
  impact: ImpactLevel;
}

export interface StrategicBlueprint {
  party: PoliticalParty | string;
  strategy: string[];
}

export interface IntelligenceGap {
  id: number;
  item: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
}

export interface KeywordsForMonitoring {
  keywordSets: string[];
}

export interface CongressStrategy2027 {
  summary: string;
  targetVoters: string[];
  grievanceFocus: string[];
  candidateRequirements: string;
  notes: string[];
}

export interface WinningStrategy {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
  verificationNotes: string[];
}

export interface DeepResearchData {
  executiveSummary: string;
  constituencyProfile: {
    assemblyConstituencyNo: number;
    district: string;
    region: string;
    category: string;
    parliamentaryConstituency: string;
    historicalSignificance: string;
  };
  demographics: DemographicsCensus2011;
  electoralHistory: ElectoralHistory;
  keyIssues: LocalIssues;
  attackLines: string[];
  politicalPlayers: {
    currentMla: PoliticalInfluencer;
    keyHistoricalFigure: PoliticalInfluencer;
    localInfluencers: string[];
  };
  voterProfile: {
    turnout: string;
    urbanVoters: string;
    middleClass: string;
  };
  outlook2027: CongressStrategy2027;
  intelligenceGaps: IntelligenceGaps;
  recommendations: string[];
}

export interface SummaryData {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: string;
  date: string;
  overview: string;
  electionResults2022: {
    winner: string;
    party: string;
    voteShare: string;
    margin: number;
    runnerUp: string;
    totalElectors: number | null;
    totalVotes: number | null;
    voterTurnout: number | null;
  };
  electionResults2017: {
    winner: string | null;
    party: string | null;
    voteShare: string | null;
    margin: number | null;
    runnerUp: string | null;
    needsVerification: boolean;
  };
  electionResults2012: {
    winner: string | null;
    needsVerification: boolean;
  };
  casteComposition: CasteComposition[];
  keyLocalIssues: string[];
  politicalSignificance: string;
  congressStrategicPosition: string;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: string[];
  sources: string;
}

// ============================================================================
// MAIN CONSTITUENCY TYPE
// ============================================================================

export interface BathindaUrbanConstituency {
  // Header Metadata
  researchMetadata: ResearchMetadata;

  // Section 1: Constituency Identity & Baseline
  constituencyIdentity: {
    acNumber: number;
    name: string;
    district: string;
    region: BathindaUrbanRegion;
    type: BathindaUrbanType;
    geographicProfile: GeographicProfile;
    keyStatistics2022: KeyStatistics2022;
  };

  // Section 2: Demographic Deep-Dive
  demographics: Demographics;

  // Section 3: Electoral History
  electoralHistory: ElectoralHistory;

  // Section 4: Political Significance
  politicalSignificance: PoliticalSignificance;

  // Section 5: Congress Strategic Position
  congressStrategicPosition: CongressStrategicPosition;

  // Section 6: Local Issues
  localIssues: LocalIssues;

  // Section 7: Influencers & Power Structure
  influencers: Influencers;

  // Section 8: Media Landscape
  mediaLandscape: MediaLandscape;

  // Section 9: Physical Mapping
  physicalMapping: PhysicalMapping;

  // Section 10: Governance Gap
  governanceGap: GovernanceGap;

  // Section 11: SWOT Analysis
  swotAnalysis: SwotAnalysis;

  // Section 12: Strategic Blueprint
  strategicBlueprint: StrategicBlueprint[];

  // Section 13: Course-Changing Factors
  courseChangingFactors: CourseChangingFactor[];

  // Section 14: 2027 Outlook
  outlook2027: CongressStrategy2027;

  // Intelligence Gaps
  intelligenceGaps: IntelligenceGaps;

  // Keywords for Monitoring
  keywordsForMonitoring: KeywordsForMonitoring;

  // Summary Data (from Tier 1 dossier)
  summary: SummaryData;

  // Deep Research Data (from Tier 2 dossier)
  deepResearch: DeepResearchData;
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type BathindaUrbanDossier = BathindaUrbanConstituency;
export type BathindaUrbanTypes = BathindaUrbanConstituency;
