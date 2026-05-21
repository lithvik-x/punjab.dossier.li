/**
 * TypeScript types for AC011-Ajnala Assembly Constituency
 * Generated from AC011-Ajnala.md and AC011-Ajnala-deep.md
 * 6-Cycle Enhancement Pipeline - FINAL (Cycle 6): 100% content coverage verification complete
 */

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type VerificationStatus = 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED';
export type ProbabilityLevel = 'High' | 'Medium' | 'Low';
export type ImpactLevel = 'HIGH' | 'MEDIUM' | 'LOW';
export type ConstituencyType = 'General' | 'SC' | 'ST' | 'Other';
export type CasteCategory = 'SC' | 'ST' | 'OBC' | 'General' | 'OC';
export type PartyCode = 'AAP' | 'SAD' | 'Congress' | 'BJP' | 'Other';

// ============================================================================
// CONSTITUENCY IDENTITY & BASELINE
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: ConstituencyType;
  lokSabhaConstituency: string;
  borderProximity: string;
  economyType: string;
  researchMicroTaskId: string;
  tier: number;
  researchDate: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

export interface GeographicProfile {
  description: string;
  borderDistance: string;
  characteristics: string[];
}

export interface ElectionResult2022 {
  winner: string;
  winnerParty: string;
  runnerUp: string;
  runnerUpParty: string;
  winnerVoteCount: number;
  runnerUpVoteCount: string; // NEEDS VERIFICATION
  margin: string; // NEEDS VERIFICATION
  totalCandidates: string; // NEEDS VERIFICATION
  totalElectors: number;
  voterTurnout: string;
}

export interface ElectionResult2017 {
  winner: string; // NEEDS VERIFICATION
  party: string; // NEEDS VERIFICATION
  runnerUp: string; // NEEDS VERIFICATION
  runnerUpParty: string; // NEEDS VERIFICATION
  margin: string; // NEEDS VERIFICATION
}

export interface ElectionResult2012 {
  winner: string; // NEEDS VERIFICATION
  party: string; // NEEDS VERIFICATION
  runnerUp: string; // NEEDS VERIFICATION
  runnerUpParty: string; // NEEDS VERIFICATION
  margin: string; // NEEDS VERIFICATION
}

export interface ElectionHistory {
  2022: ElectionResult2022;
  2017: ElectionResult2017;
  2012: ElectionResult2012;
}

// ============================================================================
// DEMOGRAPHIC DEEP-DIVE
// ============================================================================

export interface CasteComposition {
  scPopulation: number;
  scPercentage: number;
  scTownPercentage: number;
  ravidassiaRamdasiaNote: string;
  generalCategory: string;
  hinduKhatriArora: string;
  muslimPopulation: string;
  keySocialGroups: KeySocialGroup[];
}

export interface KeySocialGroup {
  name: string;
  category: string;
  description: string;
}

export interface ReligionBreakdown {
  sikh: string;
  hindu: string;
  scPopulation: string;
  scPersons?: number;
  ajnalaTehsilNote: string;
}

export interface Demographics {
  casteComposition: CasteComposition;
  religionBreakdown: ReligionBreakdown;
  language: string;
  censusSource: string[];
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface PublicSentiment {
  perceivedMood: string; // NEEDS VERIFICATION
  drugCrisis: DrugCrisis;
  farmerDistress: FarmerDistress;
  youthUnemployment: YouthUnemployment;
  governanceDissatisfaction: GovernanceDissatisfaction;
  sources: string[];
}

export interface DrugCrisis {
  description: string;
  borderVulnerability: string;
  keyAttackLine: boolean;
  status: string;
}

export interface FarmerDistress {
  issues: string[];
  recentEvent: string;
  signal: string;
}

export interface YouthUnemployment {
  emigrationCountries: string[];
  culturalNorm: boolean;
  skillsMismatch: string;
}

export interface GovernanceDissatisfaction {
  digitalGovernanceGains: string;
  lawAndOrderConcerns: string;
  infrastructureNeglect: string;
  jobsAnnounced: string;
  jobsAnnouncedDate: string;
}

// ============================================================================
// GOVERNANCE GAP
// ============================================================================

export interface GovernanceGap {
  mlaPerformance: MLAPerformance;
  districtGovernance: DistrictGovernance;
  infrastructure: Infrastructure;
}

export interface MLAPerformance {
  name: string;
  party: string;
  term: string;
  priorities: string[];
}

export interface DistrictGovernance {
  dc: string; // NEEDS VERIFICATION
  police: string; // NEEDS VERIFICATION
  waterSupply: WaterSupply;
}

export interface WaterSupply {
  project: string;
  funding: string;
  benefit: string;
  status: string; // NEEDS VERIFICATION
}

export interface Infrastructure {
  ruralRoads: string; // NEEDS VERIFICATION
  grainMarkets: string; // NEEDS VERIFICATION
  healthcare: string; // NEEDS VERIFICATION
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  status: string;
}

export interface LocalIssues {
  top5: LocalIssue[];
  sources: string[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  role: string;
  party?: string;
  background?: string; // NEEDS VERIFICATION
  status: string;
}

export interface SocialReligiousInfluencer {
  name: string;
  role: string;
  description: string;
  status: string;
}

export interface Influencers {
  political: PoliticalInfluencer[];
  socialReligious: SocialReligiousInfluencer[];
  sources: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaSource {
  name: string;
  type: string;
  language: string;
}

export interface MediaLandscape {
  local: MediaSource[];
  regional: MediaSource[];
  socialMedia: string[];
  sources: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface PhysicalMapping {
  keyGeography: string[];
  voterDemographics: VoterDemographics;
  boothStrategy: BoothStrategy;
}

export interface VoterDemographics {
  ruralVoters: number;
  urbanVoters: number;
  femaleParticipation: string; // NEEDS VERIFICATION
}

export interface BoothStrategy {
  scHeavyBooths: string;
  scPercentage: number;
  decisiveFactor: string;
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

export interface StrategicBlueprint {
  forCongress: string[];
  forAAP: string[];
  forSADBJP: string[];
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface CourseChangingFactor {
  factor: string;
  probability: 'High' | 'Medium' | 'Low';
  impact: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface CourseChangingFactors {
  factors: CourseChangingFactor[];
}

// ============================================================================
// INTELLIGENCE GAPS & VERIFICATION
// ============================================================================

export interface IntelligenceGap {
  id: number;
  item: string;
}

export interface VerificationTODO {
  gaps: IntelligenceGap[];
  keywords: string[];
}

// ============================================================================
// SUMMARY DATA (from AC011-Ajnala.md)
// ============================================================================

export interface SummaryCasteComposition {
  jatSikh: number;
  sc: number;
  obc: number;
  upperCaste: number;
  minority: number;
  other: number;
}

export interface AttackLines {
  brokenPromises: string;
  drugCrisis: string;
  farmerDistress: string;
  governanceFailure: string;
}

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface SummaryData {
  overview: string;
  electionResults2022: {
    winner: string;
    party: string;
    margin: string;
    totalElectors: string;
    voterTurnout: string;
  };
  electionResults2017: {
    winner: string;
    party: string;
  };
  electionResults2012: {
    winner: string;
  };
  casteComposition: SummaryCasteComposition;
  keyLocalIssues: string[];
  congressStrategicPosition: string;
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  sources: string[];
}

// ============================================================================
// VALIDATION SCHEMAS (Zod-like structure for runtime validation)
// ============================================================================

export const VALIDATION_SCHEMA = {
  acNumber: { type: 'number', min: 1, max: 117, required: true },
  name: { type: 'string', minLength: 1, required: true },
  district: { type: 'string', required: true },
  region: { type: 'string', required: true },
  type: { type: 'enum', values: ['General', 'SC', 'ST', 'Other'], required: true },
} as const;

// ============================================================================
// MAIN EXPORT - COMPLETE CONSTITUENCY DATA
// ============================================================================

export interface AjnalaConstituencyDossier {
  identity: ConstituencyIdentity;
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
  // Enhanced tracking
  dataQuality: DataQualityFlags;
  sourceReliability: SourceReliability[];
  // Electoral analysis
  electoralWaveAnalysis: ElectoralWaveAnalysis[];
  candidateProfiles: CandidateProfile[];
  constituencyTrends: ConstituencyTrend[];
}

// ============================================================================
// COMPOSITE KEY TYPES FOR LOOKUPS
// ============================================================================

export type ElectionYear = 2012 | 2017 | 2022 | 2027;
export type StakeholderType = ' MLA' | 'Candidate' | 'Party' | 'Community';

export interface CompositeKey {
  acNumber: number;
  year: ElectionYear;
  type: StakeholderType;
}

// ============================================================================
// LOOKUP TABLES
// ============================================================================

export interface PartyVoteShare {
  party: PartyCode;
  voteCount: number;
  percentage: number;
  margin?: number;
}

export interface BoothLevelData {
  boothName: string;
  totalVoters: number;
  scPercentage: number;
  winner: string;
  winnerParty: string;
  margin: number;
}

// ============================================================================
// ADDITIONAL DATA INTERFACES FOR COMPREHENSIVE COVERAGE
// ============================================================================

export interface ElectoralWaveAnalysis {
  waveType: string;
  description: string;
  impact: string;
  affectedParties: PartyCode[];
}

export interface CandidateProfile {
  name: string;
  party: PartyCode;
  caste: string;
  background: string;
  previousElections: ElectionHistoryEntry[];
  assets?: string; // NEEDS VERIFICATION
  criminalCases?: string; // NEEDS VERIFICATION
}

export interface ElectionHistoryEntry {
  year: ElectionYear;
  constituency: string;
  result: 'Winner' | 'Runner-up' | 'Lost';
  margin?: number;
}

export interface ConstituencyTrend {
  period: string;
  winner: PartyCode;
  margin: number;
  swingPercentage: number;
}

export interface DemographicTrend {
  category: string;
  trend: 'Increasing' | 'Decreasing' | 'Stable';
  percentageChange: number;
  censusYears: number[];
}

export interface GovernanceMetric {
  indicator: string;
  currentValue: string;
  previousValue?: string;
  source: string;
  lastUpdated: string;
}

export interface InfrastructureProject {
  name: string;
  status: 'Completed' | 'In Progress' | 'Planned' | 'Proposed';
  fundingSource?: string;
  startDate?: string;
  completionDate?: string;
  beneficiaries?: string;
}

export interface CrisisIndicator {
  issue: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  trend: 'Worsening' | 'Improving' | 'Stable';
  affectedPopulation?: string;
  source?: string;
}

// ============================================================================
// ENHANCED SWOT WITH CATEGORIES
// ============================================================================

export interface SWOTCategory {
  category: 'Strengths' | 'Weaknesses' | 'Opportunities' | 'Threats';
  items: SWOTItem[];
}

export interface SWOTWithCategory extends SWOTAnalysis {
  categorized: SWOTCategory[];
}

// ============================================================================
// STRATEGIC RECOMMENDATIONS
// ============================================================================

export interface StrategicRecommendation {
  forParty: PartyCode | 'All';
  priority: number;
  recommendation: string;
  rationale: string;
  expectedImpact: ImpactLevel;
  riskLevel: 'High' | 'Medium' | 'Low';
}

export interface CampaignMessage {
  topic: string;
  positive: string[];
  negative: string[];
  targetAudience: string[];
}

// ============================================================================
// DATA QUALITY FLAGS
// ============================================================================

export interface DataQualityFlags {
  hasCompleteElectionData: boolean;
  hasVerifiedDemographics: boolean;
  hasCurrentSentimentData: boolean;
  hasBoothLevelData: boolean;
  hasCandidateProfiles: boolean;
  verificationGapsCount: number;
}

export interface SourceReliability {
  source: string;
  reliability: 'High' | 'Medium' | 'Low';
  lastVerified?: string;
}
