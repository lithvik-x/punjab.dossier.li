/**
 * TypeScript Types for AC014-Jandiala Constituency Dossier
 * Generated through 6-cycle enhancement pipeline
 * Source: AC014-Jandiala.md and AC014-Jandiala-deep.md
 */

// ============================================================================
// ENUMS
// ============================================================================

export enum ConstituencyRegion {
  MAJHA = "Majha",
}

export enum ConstituencyType {
  SCHEDULED_CASTE = "Scheduled Caste (SC)",
}

export enum Party {
  AAP = "Aam Aadmi Party",
  CONGRESS = "Indian National Congress",
  BSP = "Bahujan Samaj Party",
  SAD = "Shiromani Akali Dal",
  BJP = "Bharatiya Janata Party",
}

export enum CasteGroup {
  RAVI_DASSIA = "Ravidassia/Ramdasia",
  MAZHABI_SIKH = "Mazhabi Sikh",
  VALMIKI = "Valmiki/Barad",
  JAT_SIKH = "Jat Sikh",
  HINDU_GENERAL = "Hindu (General)",
  OBC = "OBC",
  UPPER_CASTE = "Upper Caste",
  MINORITY = "Minority",
  SC = "Scheduled Castes",
}

export enum VerificationStatus {
  VERIFIED = "Verified",
  PARTIALLY_VERIFIED = "Partially Verified",
  NEEDS_VERIFICATION = "Needs Verification",
  UNVERIFIED = "Unverified",
}

export enum ProbabilityLevel {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export enum ImpactLevel {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

// ============================================================================
// CORE CONSTITUENCY TYPES
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: ConstituencyRegion;
  type: ConstituencyType;
  date: string;
}

export interface ConstituencyOverview {
  description: string;
  includes: string;
  partOf: string;
  location: string;
  notableFeature: string;
}

export interface GeographicProfile {
  alternateName: string;
  location: string;
  roadConnection: string;
  district: string;
  tehsil: string;
  lokSabhaConstituency: string;
  proximityToCity: string;
}

export interface KeyStatistics2022 {
  winner: string;
  runnerUp: string;
  winnerVoteCount: string;
  margin: string;
  party: Party;
  source: string;
}

export interface DemographicsCensus2011 {
  block: string;
  scPopulation: string;
  townScPopulation: string;
  source: string;
}

// ============================================================================
// CASTE COMPOSITION TYPES
// ============================================================================

export interface CasteComposition {
  sc: number;
  jatSikh: number;
  obc: number;
  upperCaste: number;
  minority: number;
  total: number;
}

export interface ScSubGroup {
  name: CasteGroup;
  description: string;
  traditionalOccupation: string;
  concentration: string;
}

export interface ScSubGroupBreakdown {
  ravidassiaRamdasia: ScSubGroup;
  mazhabiSikh: ScSubGroup;
  valmikiBarad: ScSubGroup;
}

export interface VoterDemographics {
  scVoters: string;
  generalCategoryVoters: string;
  ruralVoters: string;
  urbanVoters: string;
}

export interface DistrictScContext {
  totalSc: number;
  percentageOfDistrict: string;
  source: string;
}

// ============================================================================
// ELECTION RESULTS TYPES
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: Party | string;
  runnerUp: string;
  runnerUpParty: Party | string;
  margin: string;
  verificationStatus: VerificationStatus;
}

export interface ElectionResults {
  2022: ElectionResult;
  2017: ElectionResult;
  2012: ElectionResult;
}

export interface ElectoralHistory {
  results: ElectionResult[];
  seatShiftNote: string;
  source: string;
}

// ============================================================================
// ISSUES TYPES
// ============================================================================

export interface CoreIssue {
  id: number;
  title: string;
  description: string;
  priority: number;
}

export interface LocalIssue {
  id: number;
  issue: string;
  details: string;
  source: string;
}

export interface TopLocalIssues {
  issues: LocalIssue[];
  count: number;
}

// ============================================================================
// STRATEGIC TYPES
// ============================================================================

export interface CandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLine {
  category: string;
  message: string;
}

export interface AttackLines {
  lines: AttackLine[];
}

export interface CongressStrategicPosition {
  background: string;
  requirement: string;
}

// ============================================================================
// GOVERNANCE TYPES
// ============================================================================

export interface MlaPerformance {
  name: string;
  party: Party;
  term: string;
  background: string;
  verificationStatus: VerificationStatus;
}

export interface DalitGovernanceIndicators {
  scholarshipDisbursement: string;
  scCorporation: string;
  preventionOfAtrocities: string;
  landCeiling: string;
}

export interface GeneralInfrastructure {
  jandialaTown: string[];
  rural: string[];
  waterSupply: string;
}

// ============================================================================
// INFLUENCERS TYPES
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  party?: Party;
  role: string;
  status?: string;
}

export interface SocialReligiousInfluencer {
  name: string;
  role: string;
  notes?: string;
}

export interface Influencers {
  political: PoliticalInfluencer[];
  socialReligious: SocialReligiousInfluencer[];
}

// ============================================================================
// MEDIA TYPES
// ============================================================================

export interface LocalMedia {
  outlets: string[];
}

export interface DiasporaMedia {
  description: string;
  channels: string;
}

export interface SocialMedia {
  platforms: string[];
  usage: string;
}

export interface MediaLandscape {
  local: LocalMedia;
  diaspora: DiasporaMedia;
  socialMedia: SocialMedia;
}

// ============================================================================
// SWOT TYPES
// ============================================================================

export interface SwotCategory {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface SwotAnalysis {
  forParty: string;
  analysis: SwotCategory;
}

// ============================================================================
// STRATEGIC BLUEPRINT TYPES
// ============================================================================

export interface PartyStrategy {
  party: string;
  recommendations: string[];
}

export interface StrategicBlueprints {
  aap: PartyStrategy;
  congress: PartyStrategy;
  bsp: PartyStrategy;
  sadBjp: PartyStrategy;
}

// ============================================================================
// COURSE-CHANGING FACTORS TYPES
// ============================================================================

export interface CourseChangingFactor {
  factor: string;
  probability: ProbabilityLevel;
  impact: ImpactLevel;
}

export interface CourseChangingFactors {
  factors: CourseChangingFactor[];
}

// ============================================================================
// VERIFICATION TYPES
// ============================================================================

export interface IntelligenceGap {
  id: number;
  item: string;
}

export interface VerificationToDo {
  gaps: IntelligenceGap[];
}

export interface MonitoringKeywords {
  keywordSets: string[];
}

// ============================================================================
// SOURCE TYPES
// ============================================================================

export interface Sources {
  consulted: string[];
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

export interface ResearchMetadata {
  taskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sources: Sources;
}

// ============================================================================
// SWOT ANALYSIS PARTIES
// ============================================================================

export interface SwotForAap {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================================================
// PUBLIC SENTIMENT TYPES
// ============================================================================

export interface PublicSentiment {
  perceivedMood: string;
  dalitCommunityMood: string;
  notes: string;
  verificationStatus: VerificationStatus;
}

// ============================================================================
// COMPLETE CONSTITUENCY DATA TYPE
// ============================================================================

export interface Ac014JandialaTypes {
  // Header
  header: ConstituencyHeader;

  // Overview
  overview: ConstituencyOverview;

  // Geographic Profile
  geographicProfile: GeographicProfile;

  // Key Statistics 2022
  keyStatistics2022: KeyStatistics2022;

  // Demographics
  demographics: DemographicsCensus2011;
  districtScContext: DistrictScContext;
  casteComposition: CasteComposition;
  scSubGroupBreakdown: ScSubGroupBreakdown;
  voterDemographics: VoterDemographics;

  // Election Results
  electionResults: ElectionResults;

  // Issues
  coreIssues: CoreIssue[];
  topLocalIssues: TopLocalIssues;

  // Strategic
  candidateProfile: CandidateProfile;
  attackLines: AttackLines;
  congressStrategicPosition: CongressStrategicPosition;

  // Governance
  mlaPerformance: MlaPerformance;
  dalitGovernanceIndicators: DalitGovernanceIndicators;
  generalInfrastructure: GeneralInfrastructure;

  // Influencers
  influencers: Influencers;

  // Media
  mediaLandscape: MediaLandscape;

  // SWOT
  swotAnalysis: SwotAnalysis;

  // Strategic Blueprints
  strategicBlueprints: StrategicBlueprints;

  // Course Changing Factors
  courseChangingFactors: CourseChangingFactors;

  // Intelligence Gaps
  verificationToDo: VerificationToDo;
  monitoringKeywords: MonitoringKeywords;

  // Metadata
  researchMetadata: ResearchMetadata;
}
