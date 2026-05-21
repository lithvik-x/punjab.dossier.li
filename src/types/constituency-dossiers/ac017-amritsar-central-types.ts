/**
 * AC017 - Amritsar Central Assembly Constituency
 * TypeScript Type Definitions
 *
 * Research Micro-Task ID: AC017-AmritsarCentral-001
 * Generated through 6-cycle enhancement pipeline
 */

// ============================================================================
// ENUMS
// ============================================================================

export enum ConstituencyRegion {
  MAJHA = "Majha",
}

export enum ConstituencyType {
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
  OTHER = "Other",
}

export enum MediaType {
  NATIONAL = "National",
  REGIONAL = "Regional",
  LOCAL = "Local",
  SOCIAL = "Social",
  TOURISM = "Tourism",
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

export enum SwotQuadrant {
  STRENGTHS = "Strengths",
  WEAKNESSES = "Weaknesses",
  OPPORTUNITIES = "Opportunities",
  THREATS = "Threats",
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
  runnerUp: string | null;
  runnerUpParty: string | null;
  winnerParty: Party;
  winnerVoteCount: number | null;
  margin: number;
  totalElectors: number | null;
  voterTurnout: number | null;
}

export interface ScPopulation {
  percentage: number;
  comparisonToDistrictAverage: string;
  notes: string;
}

export interface CasteComposition {
  category: CasteCategory;
  percentage: number;
}

export interface ReligionBreakdown {
  religion: Religion;
  percentage: number;
}

export interface ElectionResult {
  year: number;
  winner: string;
  party: Party | string;
  runnerUp: string;
  runnerUpParty: Party | string;
  margin: number;
  needsVerification: boolean;
}

export interface ElectoralHistory {
  results: ElectionResult[];
  significance: string;
  historicalNote: string;
}

export interface VotingDynamics {
  area: string;
  voterBase: string;
  dominantParties: string[];
}

export interface VoterDemographicsEstimate {
  urbanVoters: number;
  scVoters: number;
  sikhVoters: number;
  hinduVoters: number;
  womenVoters: string;
}

export interface KeyVoterConcern {
  topic: string;
  description: string;
}

export interface PublicSentiment {
  perceivedMood: string | null;
  needsVerification: boolean;
  aapPosition: string;
  keyVoterConcerns: KeyVoterConcern[];
  tourismFactor: string;
}

export interface MlaPerformance {
  name: string;
  party: Party;
  term: string;
  background: string | null;
  needsVerification: boolean;
}

export interface GovernanceGap {
  mlaPerformance: MlaPerformance;
  cityCentreInfrastructure: string[];
  tourismSecurity: string[];
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

export interface PoliticalInfluencer {
  name: string;
  party?: Party;
  description: string;
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
  tourismMediaNotes: string;
  socialMediaNotes: string;
}

export interface PhysicalMapping {
  keyGeography: string;
  goldenTempleArea: string;
  cityCentreCommercial: string[];
  oldCity: string;
  internationalBorder: string;
  voterDemographicsEstimate: VoterDemographicsEstimate;
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
}

export interface KeywordsForMonitoring {
  keywordSets: string[];
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
    margin: number;
    totalElectors: number | null;
    voterTurnout: number | null;
  };
  electionResults2017: {
    winner: string | null;
    party: string | null;
    needsVerification: boolean;
  };
  electionResults2012: {
    winner: string | null;
    needsVerification: boolean;
  };
  casteComposition: CasteComposition[];
  keyLocalIssues: string[];
  congressStrategicPosition: string;
  recommendedCandidateProfile: {
    profile: string;
    casteConsideration: string;
    keyQualities: string[];
  };
  attackLinesAgainstAAP: string[];
  sources: string;
}

// ============================================================================
// MAIN CONSTITUENCY TYPE
// ============================================================================

export interface AmritsarCentralConstituency {
  // Header Metadata
  researchMetadata: ResearchMetadata;

  // Section 1: Constituency Identity & Baseline
  constituencyIdentity: {
    acNumber: number;
    name: string;
    district: string;
    region: ConstituencyRegion;
    type: ConstituencyType;
    geographicProfile: GeographicProfile;
    keyStatistics2022: KeyStatistics2022;
    scPopulation: ScPopulation;
  };

  // Section 2: Demographic Deep-Dive
  demographics: {
    casteComposition: CasteComposition[];
    religionBreakdown: ReligionBreakdown[];
    votingDynamics: VotingDynamics[];
  };

  // Section 3: Electoral History
  electoralHistory: ElectoralHistory;

  // Section 4: Public Sentiment
  publicSentiment: PublicSentiment;

  // Section 5: Governance Gap
  governanceGap: GovernanceGap;

  // Section 6: Local Issues
  localIssues: LocalIssues;

  // Section 7: Influencers & Power Structure
  influencers: Influencers;

  // Section 8: Media Landscape
  mediaLandscape: MediaLandscape;

  // Section 9: Physical Mapping
  physicalMapping: PhysicalMapping;

  // Section 10: SWOT Analysis
  swotAnalysis: SwotAnalysis;

  // Section 11: Strategic Blueprint
  strategicBlueprint: StrategicBlueprint[];

  // Section 12: Course-Changing Factors
  courseChangingFactors: CourseChangingFactor[];

  // Intelligence Gaps
  intelligenceGaps: IntelligenceGap[];

  // Keywords for Monitoring
  keywordsForMonitoring: KeywordsForMonitoring;

  // Summary Data (from shorter file)
  summary: SummaryData;
}
