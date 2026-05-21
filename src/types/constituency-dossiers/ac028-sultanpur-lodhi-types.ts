/**
 * AC028-Sultanpur Lodhi Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC028-Sultanpur-Lodhi.md, AC028-SultanpurLodhi-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  lokSabha: string;
  date: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  areaCharacter: string;
  terrain: string;
  religiousSignificance: string;
  geographicContext: string;
  floodingHistory: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  localHeritage: string[];
}

export interface EconomicIdentity {
  primaryActivities: string[];
  employmentPatterns: string[];
  landholdingPatterns: string;
}

export interface SocioCulturalIdentity {
  language: string;
  religiousComposition: {
    sikh: string;
    hindu: string;
    other: string;
  };
  casteCompositionStatus: "verified" | "needs_verification";
  culturalInstitutions: string[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DemographicData {
  religiousCompositionKapurthala: {
    sikh: string;
    hindu: string;
    other: string;
  };
  casteComposition: {
    scDistrict: string;
    scSultanpurTown: string;
    scRawalVillage: string;
    jatSikh: string;
  };
  townDemographics: string;
  ruralCharacter: string;
}

export interface CensusData {
  population: string;
  sexRatio: string;
  literacyRate: string;
  casteWise: string;
}

export interface ElectoralRollAnalytics {
  totalElectors2022: string;
  genderGap: string;
  voterTurnout2022: string;
  voterTurnout2017: string;
  voterTurnoutPattern: string;
}

export interface SchemePenetration {
  meraGharMeraMaan: string;
  ashirwadScheme: string;
  aamAadmiClinics: string;
  floodRelief2025: string;
}

export interface DigitalAccess {
  mobileInternetUrban: string;
  mobileInternetRural: string;
  socialMedia: string[];
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  totalElectors: string;
  voterTurnout: string;
  votesPolled: string;
  runnerUp: string;
  runnerUpParty: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  coreVoters: string[];
  swingFactors: string[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  jatSikh: string;
  sc: string;
  obc: string;
  hindu: string;
  other: string;
}

export interface CasteCompositionDeep {
  scDistrictAverage: string;
  scSultanpurTown: string;
  scRawalVillage: string;
  jatSikhRuralMajority: string;
}

// ============================================================================
// PUBLIC SENTIMENT & ISSUES
// ============================================================================

export interface Issue {
  rank: number;
  title: string;
  description: string;
  prioritySegment: string[];
}

export interface SentimentDrivers {
  flooding: string;
  religiousSentiment: string;
  development: string;
  agricultural: string;
  localIdentity: string;
}

export interface Grievances {
  floodRelief: string;
  cropLossCompensation: string;
  infrastructure: string;
  healthcare: string;
}

export interface PublicSentiment {
  currentMood: string;
  sentimentDrivers: SentimentDrivers;
  grievances: Grievances;
  floodImpact2025: string;
  issues: Issue[];
  misinformationStatus: "verified" | "needs_verification";
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
  district: string;
  state: string;
}

export interface ActiveSchemes {
  meraGharMeraMaan: string;
  ashirwadScheme: string;
  aamAadmiClinics: string;
  floodRelief2025: string;
}

export interface DevelopmentGaps {
  floodProtection: string;
  townDrainage: string;
  healthcare: string;
  heritageDevelopment: string;
}

export interface GovernanceGap {
  currentRepresentation: CurrentRepresentation;
  activeSchemes: ActiveSchemes;
  developmentGaps: DevelopmentGaps;
}

export interface ServiceDelivery {
  health: string;
  education: string;
  roads: string;
  waterSanitation: string;
}

export interface SchemeImplementation {
  mgnrega: string;
  beneficiaryLists: string;
  pds: string;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssues {
  topIssues: Issue[];
  sultanpurLodhiSpecific: {
    guruNanakShrine: string;
    floodProneVillages: string;
    municipalInfrastructure: string;
    marketFacilities: string;
  };
  flood2025Issues: {
    embankmentRepairs: string;
    reliefDistribution: string;
    cropLossCompensation: string;
    villageEvacuation: string;
  };
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActors {
  independentMLA: string;
  congressLeaders: string;
  aapLeaders: string;
  sadLeaders: string;
}

export interface CommunityInfluencers {
  religiousLeaders: string;
  jatSikhElders: string;
  floodVictims: string;
  exServicemen: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  communityInfluencers: CommunityInfluencers;
  powerStructureNotes: string[];
}

export interface NonPoliticalInfluencers {
  religious: string[];
  casteLeaders: string;
  professional: string[];
}

export interface PoliticalNodes {
  independentMLA: string;
  congressLeaders: string;
  aapLeaders: string;
  sadLeaders: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  tv: string[];
  digital: string[];
}

export interface MediaConsumption {
  bySegment: string;
}

export interface MediaLandscape {
  inventory: MediaInventory;
  consumption: MediaConsumption;
  specialCoverage: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocations {
  sultanpurLodhiTown: string;
  guruNanakShrineArea: string;
  beasRiverVillages: string;
  agriculturalLand: string;
}

export interface Infrastructure {
  roads: string;
  floodVulnerableAreas: string;
  healthcare: string;
  heritageSites: string;
}

export interface VulnerabilityPoints {
  beasRiverFlooding: string;
  embankmentBreaches: string;
  lowLyingVillages: string;
}

export interface PhysicalMapping {
  keyLocations: KeyLocations;
  infrastructure: Infrastructure;
  vulnerabilityPoints: VulnerabilityPoints;
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
  issues: string[];
  campaign: string;
  religious: string;
}

export interface TargetSegments {
  segment: string;
  rationale: string;
}

export interface StrategicBlueprint {
  congressStrategy: CongressStrategy2027;
  targetSegments: TargetSegments[];
  keyMessages: string[];
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcards {
  floodRecurrence: string;
  ranaInderPartap: string;
  congressSadAlliance: string;
  monsoon: string;
}

export interface Triggers {
  monsoon2026: string;
  floodReliefAssessment: string;
  governmentCompensationDelivery: string;
  religiousCommunityMobilization: string;
}

export interface CourseChangingFactors {
  wildcards: Wildcards;
  triggers: Triggers;
}

// ============================================================================
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
  mustQualification: string;
}

export interface AttackLines {
  aapCandidateIgnored: string;
  brokenPromises: string;
  drugCrisis: string;
  gurdwaraInfrastructure: string;
  ruralDistress: string;
}

export interface CongressStrategy {
  currentPosition: string;
  incumbentName: string;
  termCount: number;
  challenges: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategy: CongressStrategy;
}

// ============================================================================
// DATA GAPS & RECOMMENDATIONS
// ============================================================================

export interface RequiredVerification {
  verificationItem: string;
}

export interface IntelligencePriorities {
  priority: string;
}

export interface DataGapsRecommendations {
  requiredVerification: RequiredVerification[];
  intelligencePriorities: IntelligencePriorities[];
}

// ============================================================================
// EXTERNAL FACTORS
// ============================================================================

export interface ExternalFactors {
  politicalShocks: string[];
  economicShocks: string[];
  socialEvents: string[];
  externalShocks: string[];
}

// ============================================================================
// DATA SOURCE TRACKING
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete";
  verificationNeeded: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC028SultanpurLodhiTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  socioCulturalIdentity: SocioCulturalIdentity;

  // Demographics
  demographicData: DemographicData;
  censusData: CensusData;
  electoralRollAnalytics: ElectoralRollAnalytics;
  schemePenetration: SchemePenetration;
  digitalAccess: DigitalAccess;

  // Elections
  electionHistory: ElectionHistory;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  localIssues: LocalIssues;
  issues: IssueTaxonomy[];

  // Power Structure
  powerStructure: PowerStructure;
  nonPoliticalInfluencers: NonPoliticalInfluencers;
  politicalNodes: PoliticalNodes;

  // Media
  mediaLandscape: MediaLandscape;

  // Physical
  physicalMapping: PhysicalMapping;

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;
  courseChangingFactors: CourseChangingFactors;

  // Data Management
  dataGapsRecommendations: DataGapsRecommendations;
  externalFactors: ExternalFactors;
  dataQuality: DataQuality;
}
