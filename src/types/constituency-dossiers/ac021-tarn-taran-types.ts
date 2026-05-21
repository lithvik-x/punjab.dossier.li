/**
 * TypeScript types for AC021-TarnTaran Assembly Constituency
 * Generated from AC021-Tarn-Taran.md and AC021-TarnTaran-deep.md
 * 6-Cycle Enhancement Pipeline - Cycle 3: Enhancement and Refinement
 */

// ============================================================================
// CONSTITUENCY IDENTITY & BASELINE
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  lokSabhaConstituency: string;
  reservation: 'None (General)' | 'SC' | 'ST' | 'Other';
  totalElectors2022: number;
  researchDate: string;
  verificationStatus: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED';
  dataCurrency: string;
  tier: number;
  sources: string[];
}

export interface GeographicProfile {
  description: string;
  borderStatus: string;
  religiousSignificance: string;
  agriculturalProfile: string;
  borderDistance: string;
  characteristics: string[];
}

export interface BasicProfile {
  acNo: number;
  name: string;
  district: string;
  region: string;
  category: 'General' | 'SC' | 'ST' | 'Other';
  lokSabha: string;
  villageCount: string; // NEEDS VERIFICATION
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  winnerParty: string;
  runnerUp: string;
  runnerUpParty: string;
  winnerVoteCount: number;
  runnerUpVoteCount: number;
  margin: number;
  marginPercentage: string;
  totalCandidates: string; // NEEDS VERIFICATION
  totalElectors: number;
  voterTurnout: string;
  voteShare: string; // estimated
}

export interface ElectionResult2025Bypoll {
  winner: string;
  winnerParty: string;
  runnerUp: string;
  runnerUpParty: string;
  winnerVoteCount: number;
  runnerUpVoteCount: number;
  margin: number;
  date: string;
  reason: string;
  note: string;
  voteShare: string; // estimated
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  runnerUp: string; // NEEDS VERIFICATION
  runnerUpParty: string; // NEEDS VERIFICATION
  margin: string; // NEEDS VERIFICATION
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectionHistory {
  2022: ElectionResult2022;
  '2025Bypoll': ElectionResult2025Bypoll;
  2017: ElectionResult2017;
  2012: ElectionResult2012;
}

// ============================================================================
// DEMOGRAPHIC DEEP-DIVE
// ============================================================================

export interface ReligionBreakdown {
  sikh: string;
  hindu: string;
  christian: string;
  other: string;
}

export interface CasteComposition {
  scUrbanPercentage: number;
  scDistrictAverage: number;
  upperCastes: string;
  obc: string;
  scPopulationDistrict: string;
}

export interface KeyCasteDemographics {
  jatSikh: string;
  ramdasiaRavidassia: string;
  mazhabiSikh: string;
  khatriArora: string;
}

export interface Demographics {
  religionBreakdown: ReligionBreakdown;
  casteComposition: CasteComposition;
  keyCasteDemographics: KeyCasteDemographics;
  language: string;
  scripts: string;
  censusSource: string[];
}

// ============================================================================
// SUMMARY DATA (from AC021-Tarn-Taran.md)
// ============================================================================

export interface SummaryCasteComposition {
  sikh: number;
  hindu: number;
  christian: number;
  scPopulation: number;
  upperCaste: number;
}

export interface SummaryData {
  overview: string;
  electionResults2022: {
    winner: string;
    party: string;
    voteShare: string;
    margin: string;
    runnerUp: string;
  };
  electionResults2025Bypoll: {
    winner: string;
    party: string;
    winnerVoteCount: number;
    runnerUp: string;
    runnerUpParty: string;
    runnerUpVoteCount: number;
  };
  electionResults2017: {
    winner: string;
    party: string;
  };
  electionResults2012: {
    winner: string;
    party: string;
  };
  casteComposition: SummaryCasteComposition;
  voterTurnout: {
    2022: string;
    2017: string;
  };
  keyLocalIssues: string[];
  congressStrategicPosition: string;
  recommendedCandidate: {
    caste: string;
    profile: string;
    keyQualification: string;
    avoid: string;
  };
  attackLines: string[];
  sources: string[];
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface PublicSentiment {
  perceivedMood: string;
  electoralHistory: string;
  sadStrength: string;
  congressWeakness: string;
  keySentimentDrivers: string[];
  grievances: Grievance[];
}

export interface Grievance {
  category: string;
  description: string;
}

// ============================================================================
// GOVERNANCE GAP
// ============================================================================

export interface CurrentRepresentation {
  mla: string;
  mlaParty: string;
  mp: string;
  mpParty: string;
}

export interface GovernmentScheme {
  name: string;
  description: string;
}

export interface DevelopmentGap {
  area: string;
  status: string;
}

export interface GovernanceGap {
  currentRepresentation: CurrentRepresentation;
  governmentSchemes: GovernmentScheme[];
  developmentGaps: DevelopmentGap[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface ElectionRelatedIssue {
  category: string;
  description: string;
}

export interface LocalIssues {
  topIssues: LocalIssue[];
  electionRelatedIssues: ElectionRelatedIssue[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActor {
  name: string;
  role: string;
  party: string;
  background?: string;
}

export interface CommunityInfluencer {
  name: string;
  role: string;
  description: string;
}

export interface PowerStructure {
  primary: string;
  local: string;
  party: string;
}

export interface Influencers {
  political: PoliticalActor[];
  community: CommunityInfluencer[];
  powerStructure: PowerStructure;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaSource {
  name: string;
  type: string;
  language?: string;
}

export interface MediaLandscape {
  local: MediaSource[];
  socialMedia: string[];
  informationFlow: string[];
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocation {
  name: string;
  description: string;
}

export interface Infrastructure {
  roads: string;
  rail: string;
  healthcare: string;
  education: string;
}

export interface VulnerabilityPoint {
  area: string;
  description: string;
}

export interface PhysicalMapping {
  keyLocations: KeyLocation[];
  infrastructure: Infrastructure;
  vulnerabilityPoints: VulnerabilityPoint[];
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SWOTItem {
  factor: string;
  description: string;
}

export interface SWOTAnalysis {
  strengths: SWOTItem[];
  weaknesses: SWOTItem[];
  opportunities: SWOTItem[];
  threats: SWOTItem[];
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface CongressStrategy {
  candidateSelection: string;
  casteConsolidation: string;
  alliance: string;
  issueFocus: string;
  campaign: string;
}

export interface TargetVoterSegment {
  segment: string;
  percentage: string;
  strategy: string;
}

export interface KeyMessage {
  message: string;
}

export interface StrategicBlueprint {
  congressStrategy: CongressStrategy;
  targetVoterSegments: TargetVoterSegment[];
  keyMessages: string[];
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcard {
  factor: string;
  description: string;
}

export interface Trigger {
  trigger: string;
  description: string;
}

export interface PredictiveIndicator {
  indicator: string;
  description: string;
}

export interface CourseChangingFactors {
  wildcards: Wildcard[];
  triggers: Trigger[];
  predictiveIndicators: PredictiveIndicator[];
}

// ============================================================================
// DATA GAPS & VERIFICATIONS
// ============================================================================

export interface DataGap {
  id: number;
  item: string;
}

export interface IntelligencePriority {
  id: number;
  priority: string;
}

export interface VerificationTODO {
  dataGaps: DataGap[];
  intelligencePriorities: IntelligencePriority[];
}

// ============================================================================
// MAIN EXPORT - COMPLETE CONSTITUENCY DATA
// ============================================================================

export interface TarnTaranConstituencyDossier {
  metadata: {
    microTaskId: string;
    topic: string;
    tier: number;
    date: string;
    agent: string;
    verificationStatus: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED';
    dataCurrency: string;
    sources: string[];
  };
  identity: ConstituencyIdentity;
  basicProfile: BasicProfile;
  geographicProfile: GeographicProfile;
  electionHistory: ElectionHistory;
  demographics: Demographics;
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  localIssues: LocalIssues;
  influencers: Influencers;
  mediaLandscape: MediaLandscape;
  physicalMapping: PhysicalMapping;
  swotAnalysis: SWOTAnalysis;
  strategicBlueprint: StrategicBlueprint;
  courseChangingFactors: CourseChangingFactors;
  verificationTODO: VerificationTODO;
  summary: SummaryData;
}
