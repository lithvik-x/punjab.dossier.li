/**
 * AC033-Kartarpur Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC033-Kartarpur.md, AC033-Kartarpur-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  lokSabha: string;
  type: "General" | "SC" | "ST" | "BC";
  reservation: string;
  totalElectors2022: string;
  religiousSignificance: string;
  keyIdentifiers: string[];
}

export interface ConstituencyBaseline {
  geographicContext: string;
  areaGainedInternationalAttention: string;
  category: string;
}

export interface HistoricalContext {
  kartarpurCorridor: string;
  guruNanakConnection: string;
  religiousStrategicSignificance: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  other: string;
}

export interface CasteComposition {
  sc: string;
  scTown: string;
  scVillage: string;
  ramdasiaRavidassia: string;
  mazhabiSikh: string;
  jathSikh: string;
  obc: string;
  hindu: string;
}

export interface TownDemographics {
  municipalCouncilPopulation: string;
  scPopulationTown: string;
  religiousPilgrims: string;
}

export interface DemographicDeepDive {
  religiousComposition: ReligiousComposition;
  casteComposition: CasteComposition;
  townDemographics: TownDemographics;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
  status: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectoralHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  historicalTrend: string;
  loksabha2024: string;
}

export interface VoterTurnout {
  2022: string;
  2017: string;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface Issue {
  rank: number;
  title: string;
  description: string;
}

export interface PublicSentiment {
  currentMood: string;
  keyDrivers: string[];
  grievances: string[];
}

export interface LocalIssues {
  topIssues: Issue[];
  kartarpurSpecific: string[];
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface CurrentRepresentation {
  mla: string;
  party: string;
  ministryRole: string;
  district: string;
  state: string;
}

export interface ActiveSchemes {
  schemes: string[];
}

export interface DevelopmentGaps {
  gaps: string[];
}

export interface GovernanceGap {
  currentRepresentation: CurrentRepresentation;
  activeSchemes: ActiveSchemes;
  developmentGaps: DevelopmentGaps;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActors {
  aapMla: string;
  congressLeaders: string;
  sadLeaders: string;
  gurudwaraCommittee: string;
}

export interface CommunityInfluencers {
  scLeaders: string;
  gurudwaraCommittees: string;
  religiousPilgrims: string;
  borderCommunities: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  communityInfluencers: CommunityInfluencers;
  powerDynamics: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  localMedia: string[];
  religiousPublications: string[];
  coverage: string;
  networks: string[];
}

export interface MediaSpecialFactor {
  factor: string;
  pilgrimageSeasonCoverage: string;
  diplomaticAngle: string;
}

export interface MediaLandscape {
  inventory: MediaInventory;
  specialFactor: MediaSpecialFactor;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocations {
  locations: string[];
}

export interface Infrastructure {
  corridorAccessRoad: string;
  securityInfrastructure: string;
  healthcare: string;
  pilgrimFacilities: string;
}

export interface PhysicalMapping {
  keyLocations: KeyLocations;
  infrastructure: Infrastructure;
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface CongressStrategy2027 {
  candidate: string;
  caste: string;
  issues: string;
  campaign: string;
  religiousApproach: string;
}

export interface AAPStrategy {
  candidate: string;
  caste: string;
  issues: string;
  campaign: string;
}

export interface TargetSegments {
  segments: string[];
}

export interface StrategicBlueprint {
  congressStrategy: CongressStrategy2027;
  aapStrategy: AAPStrategy;
  targetSegments: TargetSegments;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcards {
  wildcards: string[];
}

export interface Triggers {
  triggers: string[];
}

export interface CourseChangingFactors {
  wildcards: Wildcards;
  triggers: Triggers;
}

// ============================================================================
// POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  caste: string;
  profile: string;
  keyQualification: string;
  mustAddress: string;
}

export interface AttackLines {
  lines: string[];
}

export interface CongressStrategicPosition {
  status: string;
  keyFactors: string[];
  reclaimCondition: string;
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressPosition: CongressStrategicPosition;
}

// ============================================================================
// DATA GAPS & RECOMMENDATIONS
// ============================================================================

export interface DataGaps {
  requiredVerification: string[];
  intelligencePriorities: string[];
}

export interface ResearchStatus {
  dossierId: string;
  topic: string;
  date: string;
  dataCurrency: string;
  sources: string[];
  verificationStatus: string;
}

export interface DataQuality {
  researchStatus: ResearchStatus;
  dataGaps: DataGaps;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC033KartarpurTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;

  // Demographics
  demographicDeepDive: DemographicDeepDive;

  // Elections
  electoralHistory: ElectoralHistory;
  voterTurnout: VoterTurnout;

  // Sentiment & Issues
  publicSentiment: PublicSentiment;
  localIssues: LocalIssues;

  // Governance
  governanceGap: GovernanceGap;

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: MediaLandscape;

  // Physical
  physicalMapping: PhysicalMapping;

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;

  // Course-Changing
  courseChangingFactors: CourseChangingFactors;

  // Quality
  dataQuality: DataQuality;
}
