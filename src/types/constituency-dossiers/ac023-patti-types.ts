/**
 * AC023 - Patti Assembly Constituency Type Definitions
 * Generated through 6-cycle enhancement pipeline
 * Data sourced from: AC023-Patti.md, AC023-Patti-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY TYPES
// ============================================================================

export interface ConstituencyBasicInfo {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  lokSabha: string;
  reservation: string;
  totalElectors2022: number;
  tehsil?: string;
}

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  voteShare?: string;
  margin?: string;
  runnerUp?: string;
  dataVerified: boolean;
}

export interface ElectionResults {
  2022: ElectionResult;
  2017: ElectionResult;
  2012: ElectionResult;
}

export interface CasteComposition {
  category: string;
  percentage: string;
}

export interface VoterTurnout {
  year: number;
  percentage: string;
}

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface AttackLine {
  rank: number;
  text: string;
}

export interface RecommendedCandidateProfile {
  preferredCaste: string;
  profile: string[];
  keyQualification: string;
  requirement: string;
}

// ============================================================================
// DEEP RESEARCH TYPES
// ============================================================================

export interface ConstituencyIdentity {
  basicProfile: {
    acNo: number;
    name: string;
    district: string;
    region: string;
    category: string;
    lokSabha: string;
    tehsil: string;
  };
  geographicContext: string;
  keyIdentifiers: {
    tehsilHeadquarters: boolean;
    agricultural: string;
    borderProximity: boolean;
  };
}

export interface ReligiousComposition {
  community: string;
  percentage: number;
}

export interface CasteCompositionDetailed {
  category: string;
  percentage: string;
  notes?: string;
}

export interface TownDemographics {
  population: number;
  scPopulationPercentage: number;
  literacy?: string;
}

export interface ElectoralHistory2022 {
  winner: string;
  party: string;
  votes?: string;
  margin: number;
  runnerUp?: string;
  source: string;
  dataVerified: boolean;
}

export interface ElectoralHistory2017 {
  winner: string;
  party: string;
  margin?: string;
  dataVerified: boolean;
}

export interface ElectoralHistory {
  2022: ElectoralHistory2022;
  2017: ElectoralHistory2017;
  historicalTrend: string;
}

export interface PublicSentiment {
  currentMood: string;
  keyDrivers: {
    issue: string;
    notes?: string;
  }[];
  grievances: string[];
}

export interface GovernanceCurrent {
  mla: string;
  party: string;
  district: string;
  state: string;
}

export interface ActiveScheme {
  name: string;
}

export interface DevelopmentGap {
  item: string;
  verified: boolean;
}

export interface GovernanceGap {
  currentRepresentation: GovernanceCurrent;
  activeSchemes: ActiveScheme[];
  developmentGaps: DevelopmentGap[];
}

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface PattiSpecificIssues {
  issues: string[];
}

export interface Influencers {
  politicalActors: {
    name: string;
    party?: string;
    verificationStatus?: string;
  }[];
  communityInfluencers: string[];
}

export interface MediaLandscape {
  localMedia: string[];
  informationFlow: string[];
}

export interface PhysicalMapping {
  keyLocations: string[];
  infrastructure: {
    item: string;
    verified: boolean;
  }[];
}

export interface SwotItem {
  category: 'strengths' | 'weaknesses' | 'opportunities' | 'threats';
  item: string;
}

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  analysisDate?: string;
}

export interface StrategicBlueprint {
  congressStrategy: {
    candidate: string;
    casteStrategy: string;
    issues: string;
    campaign: string;
    ground: string;
  };
  targetSegments: string[];
  keyMessages: string[];
}

export interface Wildcard {
  factor: string;
  description: string;
  impact?: 'high' | 'medium' | 'low';
}

export interface Trigger {
  name: string;
  description?: string;
  probability?: 'high' | 'medium' | 'low';
}

export interface CourseChangingFactors {
  wildcards: Wildcard[];
  triggers: Trigger[];
}

export interface DataGap {
  item: string;
  verified: boolean;
}

export interface IntelligencePriority {
  item: string;
}

export interface DataGapsRecommendations {
  requiredVerification: DataGap[];
  intelligencePriorities: IntelligencePriority[];
}

// ============================================================================
// MASTER CONSTITUENCY TYPE
// ============================================================================

export interface ACA23PattiConstituencyDossier {
  // From AC023-Patti.md
  basicInfo: ConstituencyBasicInfo;
  electionResults: ElectionResults;
  casteComposition: CasteComposition[];
  voterTurnout: VoterTurnout[];
  keyLocalIssues: KeyLocalIssue[];
  congressStrategicPosition: {
    status: string;
    description: string;
  };
  historicalPattern: string[];
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLine[];
  sources: string[];

  // From AC023-Patti-deep.md
  deepResearch: {
    constituencyIdentity: ConstituencyIdentity;
    demographicDeepDive: {
      religiousComposition: ReligiousComposition[];
      casteCompositionDetailed: CasteCompositionDetailed[];
      townDemographics: TownDemographics;
    };
    electoralHistory: ElectoralHistory;
    publicSentiment: PublicSentiment;
    governanceGap: GovernanceGap;
    localIssues: {
      topIssues: LocalIssue[];
      pattiSpecific: PattiSpecificIssues;
    };
    influencersPowerStructure: Influencers;
    mediaLandscape: MediaLandscape;
    physicalMapping: PhysicalMapping;
    swotAnalysis: SwotAnalysis;
    strategicBlueprint: StrategicBlueprint;
    courseChangingFactors: CourseChangingFactors;
    dataGapsRecommendations: DataGapsRecommendations;
  };
  documentMetadata: {
    dossierId: string;
    topic: string;
    date: string;
    dataCurrency: string;
    sources: string;
    verificationStatus: string;
    documentStatus: string;
    preparedFor: string;
    classification: string;
  };
}
