/**
 * AC025-BabaBakala Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC025-Baba-Bakala.md, AC025-BabaBakala-deep.md
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
  totalElectors2022: string;
  date: string;
}

export interface ConstituencyBaseline {
  tehsil: string;
  areaCharacter: string;
  keyIdentifiers: {
    religiousSite: string;
    tehsilHeadquarters: string;
    scPopulation: string;
  };
  geographicNotes: string;
}

export interface HistoricalContext {
  historicalSignificance: string;
  localHeritage: string[];
  religiousImportance: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  other: string;
}

export interface CasteCompositionDeep {
  scPopulationTown: string;
  dominantSCCommunities: string[];
  ruralPresence: string;
  urbanPresence: string;
  townPopulation: string;
}

export interface TownDemographics {
  bababakalaTown: string;
  scInTown: string;
  tehsilNotes: string;
}

export interface ElectoralRollAnalytics {
  totalElectors2022: string;
  voterTurnout2022: string;
  voterTurnout2017: string;
  genderGap: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votes: string;
  voteShare: string;
  margin: string;
  marginVotes: number;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: string;
  totalElectors: string;
  voterTurnout: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  status: "verified" | "needs_verification";
  votes?: string;
  margin?: string;
  runnerUp?: string;
  runnerUpParty?: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  votes: string;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  historicalTrend: string;
  coreVoters: string[];
  swingFactors: string[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  source: string;
  sc: string;
  jatSikh: string;
  obc: string;
  hinduUpper: string;
  other: string;
  notes: string;
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
  sentimentDrivers: string[];
  grievances2024_2025: string[];
  mlaSatisfaction: string;
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

export interface ActiveSchemes {
  meraGharMeraMaan: string;
  ashirwadScheme: string;
  scWelfareSchemes: string;
  aamAadmiClinics: string;
}

export interface DevelopmentGaps {
  townInfrastructure: string;
  ruralHealthcare: string;
  agriculturalExtension: string;
  skillDevelopment: string;
}

export interface ServiceDelivery {
  health: string;
  education: string;
  roads: string;
  waterSanitation: string;
}

export interface SchemeImplementation {
  scWelfare: string;
  beneficiaryLists: string;
  pds: string;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalActors {
  incumbentMLA: string;
  congressLeaders: "verified" | "needs_verification";
  sadLeaders: "verified" | "needs_verification";
  bjpLeaders: "verified" | "needs_verification";
}

export interface CommunityInfluencers {
  scCommunityLeaders: string;
  gurudwaraCommittee: string;
  castePanchayats: string;
  exServicemen: string;
}

export interface PowerStructure {
  politicalActors: PoliticalActors;
  communityInfluencers: CommunityInfluencers;
  seatHoldingParty: string;
  decisiveVoterGroup: string;
  religiousFactor: string;
  casteConsolidationKey: boolean;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaInventory {
  newspapers: string[];
  cableTv: string[];
  religiousChannels: string[];
  digital: string[];
}

export interface InformationChannels {
  districtPress: string[];
  cableOperators: string[];
  gurudwaraAnnouncements: string[];
}

export interface MediaConsumption {
  bySegment: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface KeyLocations {
  bababakalaTown: string;
  gurudwaraBabaBakalaSahib: string;
  tehsilComplex: string;
  agriculturalVillages: string;
}

export interface Infrastructure {
  roads: string;
  healthcare: string;
  education: "verified" | "needs_verification";
  gurudwaraParking: "verified" | "needs_verification";
}

export interface CampaignInfrastructure {
  rallyGrounds: string;
  hoardingSpots: string;
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
  casteStrategy: string;
  issues: string[];
  campaign: string;
  religiousApproach: string;
}

export interface TargetSegments {
  segment: string;
  description: string;
}

export interface KeyMessages {
  narrative: string;
  themes: string[];
}

export interface StrategicBlueprint {
  congressStrategy: CongressStrategy2027;
  targetSegments: TargetSegments[];
  keyMessages: KeyMessages[];
  mustWinBoothsStatus: "verified" | "needs_verification";
  resourceAllocationStatus: "verified" | "needs_verification";
}

// ============================================================================
// CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  caste: string;
  casteCritical: boolean;
  profile: string;
  keyQualification: string;
  mustAddress: string;
}

export interface AttackLines {
  developmentFailure: string;
  drugMenace: string;
  reservationImplementation: string;
  scStActViolations: string;
  brokenPromises: string;
}

export interface CongressStrategicPosition {
  status: string;
  incumbentName: string;
  margin: string;
  historicalPattern: string[];
  challenge: string;
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressStrategicPosition: CongressStrategicPosition;
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface Wildcards {
  factor: string;
  description: string;
}

export interface Triggers {
  trigger: string;
  description: string;
}

export interface CourseChangingFactors {
  wildcards: Wildcards[];
  triggers: Triggers[];
}

// ============================================================================
// DATA GAPS & RECOMMENDATIONS
// ============================================================================

export interface DataGaps {
  requiredVerification: string[];
  intelligencePriorities: string[];
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
  preparedFor: string;
  classification: string;
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// LOCAL ISSUES (Baba Bakala Specific)
// ============================================================================

export interface BabaBakalaSpecificIssues {
  tehsilHeadquarters: string;
  gurudwaraDevelopment: string;
  roadConnectivity: string;
  mandiFacilities: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC025BabaBakalaTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;

  // Demographics
  religiousComposition: ReligiousComposition;
  casteCompositionDeep: CasteCompositionDeep;
  townDemographics: TownDemographics;
  electoralRollAnalytics: ElectoralRollAnalytics;

  // Elections
  electionHistory: ElectionHistory;
  casteComposition: CasteComposition;

  // Sentiment & Governance
  publicSentiment: PublicSentiment;
  activeSchemes: ActiveSchemes;
  developmentGaps: DevelopmentGaps;
  serviceDelivery: ServiceDelivery;
  schemeImplementation: SchemeImplementation;
  issues: IssueTaxonomy[];
  bababakalaSpecificIssues: BabaBakalaSpecificIssues;

  // Power Structure
  powerStructure: PowerStructure;

  // Media
  mediaLandscape: {
    inventory: MediaInventory;
    informationChannels: InformationChannels;
    consumption: MediaConsumption;
  };

  // Physical
  physicalMapping: {
    keyLocations: KeyLocations;
    infrastructure: Infrastructure;
    campaignInfrastructure: CampaignInfrastructure;
  };

  // Course Changing
  courseChangingFactors: CourseChangingFactors;

  // Strategy
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;

  // Data Quality
  dataGaps: DataGaps;
  dataQuality: DataQuality;
}
