/**
 * AC015 - Amritsar North Assembly Constituency
 * TypeScript Type Definitions
 * Cycles: Initial Analysis → Enhancement → Refinement → Additional Improvement → Further Refinement → Final Verification
 */

// ============================================================================
// CORE CONSTITUENCY TYPES
// ============================================================================

export interface ConstituencyMetadata {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: 'General' | 'SC' | 'ST';
  date: string;
  researchId?: string;
  tier?: number;
  verificationStatus?: 'VERIFIED' | 'PARTIALLY_VERIFIED' | 'UNVERIFIED';
  sourcesConsulted?: string[];
}

export interface GeographicProfile {
  description: string;
  partOfLokSabha: string;
  type: 'Urban' | 'Rural' | 'Semi-Urban';
  connectivity?: string[];
  keyMarkets?: string[];
  residentialAreas?: string[];
}

export interface KeyStatistics2022 {
  winner: string;
  runnerUp: string;
  winnerVoteCount: number;
  winnerVoteShare: number;
  runnerUpVoteCount: number;
  runnerUpVoteShare: number;
  margin: number;
  marginPercentagePoints: number;
  totalValidVotes: number;
  totalElectors?: number;
}

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  runnerUp: string;
  runnerUpParty: string;
  margin: string | number;
  marginVotes?: number;
  winnerVoteCount?: number;
  runnerUpVoteCount?: number;
}

export interface CasteComposition {
  category: string;
  percentage: number;
  notes?: string;
}

export interface ReligionBreakdown {
  religion: string;
  percentage: number;
}

export interface LocalIssue {
  rank: number;
  issue: string;
  description?: string;
}

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLine {
  category: string;
  message: string;
}

export interface StrategicPosition {
  summary: string;
  coalitionStrategy?: string;
  targetVoterSegments?: string[];
}

export interface DemographicData {
  casteComposition: CasteComposition[];
  religionBreakdown: ReligionBreakdown[];
  scPopulation?: number;
  urbanVotersPercentage?: number;
  keySocialGroups?: string[];
}

export interface ElectoralHistory {
  results: ElectionResult[];
  source?: string;
}

export interface PublicSentiment {
  perceivedMood?: string;
  AAPStrongPosition?: {
    voteShare?: number;
    margin?: number;
    percentagePoints?: number;
  };
  voterDiscontentVectors?: string[];
}

export interface GovernanceGap {
  MLAPerformance?: {
    name: string;
    party: string;
    term: string;
    notes?: string;
  };
  infrastructureIssues?: {
    waterSupply?: string;
    sewerage?: string;
    roads?: string;
    power?: string;
  };
  lawAndOrder?: string[];
}

export interface Influencer {
  name: string;
  role: string;
  party?: string;
  notes?: string;
}

export interface PowerStructure {
  political: Influencer[];
  socialReligious: string[];
}

export interface MediaLandscape {
  localRegional: string[];
  socialMedia: string[];
}

export interface PhysicalMapping {
  keyGeography: string;
  markets?: string[];
  residentialAreas?: string[];
  connectivity?: string[];
  voterDemographicsEstimate?: {
    urbanVoters?: string;
    scVoters?: string;
    generalCategory?: string;
    sikhVoters?: string;
  };
}

export interface SWOTCategory {
  strengths?: string[];
  weaknesses?: string[];
  opportunities?: string[];
  threats?: string[];
}

export interface CourseChangingFactor {
  factor: string;
  probability: 'High' | 'Medium' | 'Low';
  impact: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface IntelligenceGap {
  item: string;
  priority?: 'High' | 'Medium' | 'Low';
}

export interface KeywordMonitor {
  keyword: string;
  query: string;
}

export interface StrategicBlueprint {
  forAAP?: string[];
  forCongress?: string[];
  forSADBJP?: string[];
}

// ============================================================================
// UNIFIED CONSTITUENCY DATA TYPE
// ============================================================================

export interface AC015AmritsarNorthDossier {
  metadata: ConstituencyMetadata;
  geographicProfile: GeographicProfile;
  keyStatistics2022: KeyStatistics2022;
  demographicData: DemographicData;
  electoralHistory: ElectoralHistory;
  localIssues: LocalIssue[];
  strategicPosition: StrategicPosition;
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLine[];
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  powerStructure: PowerStructure;
  mediaLandscape: MediaLandscape;
  physicalMapping: PhysicalMapping;
  swotAnalysis: SWOTCategory;
  strategicBlueprint: StrategicBlueprint;
  courseChangingFactors: CourseChangingFactor[];
  intelligenceGaps: IntelligenceGap[];
  keywordsForMonitoring: KeywordMonitor[];
}
