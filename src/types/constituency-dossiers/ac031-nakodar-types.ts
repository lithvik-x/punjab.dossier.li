/**
 * AC031-Nakodar Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC031-Nakodar.md, AC031-Nakodar-deep.md
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
  reservation: string;
  totalElectors2022: string;
  date: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  tehsil: string;
  areaCharacter: string;
  geographicContext: string;
  keyIdentifiers: {
    doabaRegion: string;
    jalandharDistrictSc: string;
    agricultural: string;
    historic: string;
  };
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  localHeritage: string[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DemographicProfile {
  religiousComposition: {
    sikh: string;
    hindu: string;
    other: string;
  };
  casteComposition: {
    scheduledCaste: string;
    jatSikh: string;
    ramdasiaRavidassia: string;
    obc: string;
  };
  townDemographics: {
    nakodarTownPopulation: string;
    scInTown: string;
    literacy: string;
  };
  casteCompositionStatus: "verified" | "needs_verification";
}

// ============================================================================
// ELECTORAL DATA
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  marginVotes: number;
  runnerUp: string;
  runnerUpParty: string;
  totalElectors: string;
  voterTurnout: string;
  votesPolled: string;
  status: "verified" | "needs_verification" | "partial";
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  status: "verified" | "needs_verification";
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  coreVoters: string[];
  swingFactors: string[];
  historicalTrend: string;
}

export interface VoterTurnout {
  2022: string;
  2017: string;
  pattern: string;
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  jatSikh: string;
  scMazhabiRamdasia: string;
  obc: string;
  hindu: string;
  other: string;
}

export interface CasteCompositionDeep {
  scPopulation: string;
  jatSikhRuralMajority: string;
  ramdasiaRavidassia: string;
  obcTarkhanKashyap: string;
  townSc: string;
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

export interface PublicSentiment {
  currentMood: string;
  volatility: string;
  keySentimentDrivers: string[];
  grievances: string[];
  misinformationStatus: "verified" | "needs_verification";
}

export interface IssueTaxonomy {
  category: string;
  specificIssues: string[];
}

export interface LocalIssues {
  topIssues: Issue[];
  nakodarSpecific: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface CurrentRepresentation {
  mla: string;
  district: string;
  state: string;
}

export interface ActiveSchemes {
  meraGharMeraMaan: boolean;
  ashirwadScheme: boolean;
  aamAadmiClinics: boolean;
  freeElectricity: boolean;
}

export interface DevelopmentGaps {
  nakodarTownInfrastructure: string;
  ruralRoadNetwork: string;
  agriculturalExtension: string;
  healthcare: string;
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
  bjpLeaders: string;
}

export interface CommunityInfluencers {
  jatSikhElders: string;
  scLeaders: string;
  gurudwaraCommittees: string;
  exServicemen: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  communityInfluencers: CommunityInfluencers;
  powerStructureDescription: string;
  casteBasedVoting: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  doabaNewspapers: string[];
  cableTv: string[];
  digital: string[];
}

export interface MediaConsumption {
  primaryChannels: string[];
  socialMediaUsage: string[];
}

export interface MediaLandscape {
  inventory: MediaInventory;
  consumption: MediaConsumption;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocations {
  nakodarTown: string;
  agriculturalVillages: string;
  gurudwaraSites: string;
  roadConnections: string;
}

export interface Infrastructure {
  roadsToJalandharMoga: string;
  healthcare: string;
  education: string;
  mandiFacilities: string;
}

export interface PhysicalMapping {
  keyLocations: KeyLocations;
  infrastructure: Infrastructure;
  healthcareLevel: string;
  educationStatus: "verified" | "needs_verification";
  mandiFacilitiesStatus: "verified" | "needs_verification";
  floodVulnerability: string;
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
  priority: string;
  candidateRequirements: {
    profile: string;
    caste: string;
    keyQualities: string[];
  };
  issues: string[];
  campaignFocus: string;
  boothOrganization: string;
}

export interface AAPStrategy {
  candidateOptions: string[];
  caste: string;
  issues: string[];
  campaignFocus: string;
}

export interface TargetSegment {
  segment: string;
  rationale: string;
}

export interface StrategicBlueprint {
  congressStrategy: CongressStrategy2027;
  aapStrategy: AAPStrategy;
  targetSegments: TargetSegment[];
}

// ============================================================================
// POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualifications: string[];
  mustHave: string[];
}

export interface AttackLines {
  lines: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategicPosition: string;
  threeWayContest: string;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcards {
  factors: string[];
}

export interface Triggers {
  factors: string[];
}

export interface CourseChangingFactors {
  wildcards: Wildcards;
  triggers: Triggers;
}

// ============================================================================
// DATA GAPS & INTELLIGENCE
// ============================================================================

export interface DataGaps {
  requiredVerification: string[];
  intelligencePriorities: string[];
}

export interface ResearchStatus {
  status: "partial" | "complete";
  verificationNeeded: string[];
}

export interface DataQuality {
  sources: { name: string; url?: string }[];
  researchStatus: ResearchStatus;
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
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC031NakodarTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;
  demographicProfile: DemographicProfile;

  // Demographics & Electoral
  voterTurnout: VoterTurnout;
  electionHistory: ElectionHistory;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  localIssues: LocalIssues;
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
  courseChangingFactors: CourseChangingFactors;

  // Quality
  externalFactors: ExternalFactors;
  dataGaps: DataGaps;
  dataQuality: DataQuality;
}
