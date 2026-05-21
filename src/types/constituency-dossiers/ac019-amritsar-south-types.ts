/**
 * AC019 - Amritsar South Assembly Constituency
 * TypeScript Type Definitions
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC019-Amritsar-South.md, AC019-AmritsarSouth-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY METADATA
// ============================================================================

export interface ConstituencyMetadata {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  date: string;
  researchId?: string;
  tier?: number;
  verificationStatus?: "VERIFIED" | "PARTIALLY_VERIFIED" | "UNVERIFIED";
  sourcesConsulted?: string[];
}

export interface GeographicProfile {
  description: string;
  partOfLokSabha: string;
  areaCharacter: "Urban" | "Rural" | "Semi-Urban" | "Peri-Urban" | "Mixed";
  terrain?: string;
  keyGeography?: string;
  connectivity?: string[];
  voterDemographicsEstimate?: {
    ruralVoters?: string;
    urbanPeriUrbanVoters?: string;
    jatSikhVoters?: string;
    scVoters?: string;
    otherHinduVoters?: string;
  };
}

export interface ResearchSource {
  name: string;
  url?: string;
}

// ============================================================================
// KEY STATISTICS 2022
// ============================================================================

export interface KeyStatistics2022 {
  winner: string;
  runnerUp: string;
  winnerParty: string;
  winnerVoteCount?: string;
  winnerVoteShare?: string;
  margin?: string;
  marginVotes?: string;
  totalElectors: string;
  voterTurnout: string;
  votesPolled?: string;
  runnerUpParty?: string;
  notes?: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResultEntry {
  year: number;
  winner: string;
  party: string;
  runnerUp?: string;
  runnerUpParty?: string;
  margin?: string;
  marginVotes?: number;
  winnerVoteCount?: number;
  runnerUpVoteCount?: number;
  totalElectors?: number;
  voterTurnout?: string;
  source?: string;
}

export interface ElectoralHistory {
  results: ElectionResultEntry[];
  turnoutPattern?: string;
  coreVoters?: string[];
  swingFactors?: string[];
}

// ============================================================================
// CASTE & RELIGION COMPOSITION
// ============================================================================

export interface CasteCompositionEntry {
  category: string;
  percentage: string;
  notes?: string;
  source?: string;
}

export interface CasteCompositionDeep {
  scPopulation: string;
  jatSikh: string;
  hinduKhatriArora?: string;
  obc?: string;
  generalCategoryUpperCastes?: string;
  source?: string;
}

export interface ReligionBreakdown {
  religion: string;
  percentage: string;
  notes?: string;
  source?: string;
}

// ============================================================================
// DEMOGRAPHIC DATA
// ============================================================================

export interface DemographicData {
  casteComposition: CasteCompositionEntry[];
  casteCompositionDeep?: CasteCompositionDeep;
  religionBreakdown?: ReligionBreakdown[];
  voterDemographicsEstimate?: GeographicProfile["voterDemographicsEstimate"];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  issue: string;
  description?: string;
  prioritySegment?: string[];
  notes?: string;
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface VoterProfile {
  demographic: string;
  concerns: string[];
  notes?: string;
}

export interface PublicSentiment {
  perceivedMood?: string;
  ruralSouthVoterProfile?: VoterProfile;
  keySentimentDrivers?: string[];
  verificationStatus?: "verified" | "needs_verification" | "partial";
}

// ============================================================================
// GOVERNANCE GAP
// ============================================================================

export interface MLAPerformance {
  name: string;
  party: string;
  term?: string;
  firstTerm?: boolean;
  notes?: string;
}

export interface RuralInfrastructure {
  agriculturalRoads?: string;
  irrigation?: string;
  ruralWaterSupply?: string;
  groundwater?: string;
  powerForAgriculture?: string;
  verificationStatus?: "verified" | "needs_verification";
}

export interface PeriUrbanDevelopment {
  urbanSprawl?: string;
  landUseChange?: string;
  municipalServices?: string;
  zoneChanges?: string;
  landAcquisition?: string;
  farmerCompensation?: string;
}

export interface GovernanceGap {
  mlaPerformance?: MLAPerformance;
  ruralInfrastructure?: RuralInfrastructure;
  periUrbanDevelopment?: PeriUrbanDevelopment;
  healthcare?: string;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface Influencer {
  name: string;
  role: string;
  party?: string;
  notes?: string;
}

export interface PowerStructure {
  political: Influencer[];
  socialReligious: string[];
  farmerUnions?: string[];
  dairyCooperatives?: string[];
  jatSikhSarpanches?: string;
  casteEquations?: string;
}

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

export interface MediaLandscape {
  localRegional?: string[];
  farmerMedia?: string[];
  socialMedia?: string[];
  digitalPlatforms?: string[];
  notes?: string;
}

// ============================================================================
// PHYSICAL MAPPING
// ============================================================================

export interface PhysicalMapping {
  keyGeography: string;
  agriculturalBelt?: string;
  villages?: string;
  connectivity?: string[];
  markets?: string[];
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SWOTCategory {
  strengths?: string[];
  weaknesses?: string[];
  opportunities?: string[];
  threats?: string[];
}

export interface SWOTPartySpecific {
  AAP?: {
    strengths?: string[];
    weaknesses?: string[];
    opportunities?: string[];
  };
  Opposition?: {
    opportunities?: string[];
  };
}

// ============================================================================
// STRATEGIC BLUEPRINT
// ============================================================================

export interface StrategicBlueprint {
  forAAP?: string[];
  forCongress?: string[];
  forSADBJP?: string[];
}

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

export interface CourseChangingFactor {
  factor: string;
  probability: "High" | "Medium" | "Low";
  impact: "HIGH" | "MEDIUM" | "LOW";
}

// ============================================================================
// INTELLIGENCE GAPS & VERIFICATION
// ============================================================================

export interface IntelligenceGap {
  item: string;
  priority?: "High" | "Medium" | "Low";
}

export interface KeywordMonitor {
  keyword: string;
  query: string;
}

// ============================================================================
// RECOMMENDED CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

export interface AttackLine {
  category: string;
  message: string;
}

export interface CongressStrategy {
  currentPosition: string;
  incumbentName?: string;
  termCount?: number;
  challenges: string[];
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLine[];
  congressStrategy: CongressStrategy;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface DataQuality {
  sources: ResearchSource[];
  researchStatus: {
    status: "partial" | "complete";
    verificationNeeded: string[];
  };
}

// ============================================================================
// UNIFIED CONSTITUENCY DATA TYPE
// ============================================================================

export interface AC019AmritsarSouthDossier {
  // Identity
  metadata: ConstituencyMetadata;
  geographicProfile: GeographicProfile;
  researchSource: string;

  // Statistics & Demographics
  keyStatistics2022: KeyStatistics2022;
  demographicData: DemographicData;

  // Elections
  electoralHistory: ElectoralHistory;

  // Issues & Sentiment
  localIssues: LocalIssue[];
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;

  // Power & Media
  powerStructure: PowerStructure;
  mediaLandscape: MediaLandscape;
  physicalMapping: PhysicalMapping;

  // Strategy
  swotAnalysis: SWOTCategory;
  swotPartySpecific?: SWOTPartySpecific;
  strategicBlueprint: StrategicBlueprint;
  politicalStrategy: PoliticalStrategy;
  courseChangingFactors: CourseChangingFactor[];

  // Intelligence
  intelligenceGaps: IntelligenceGap[];
  keywordsForMonitoring: KeywordMonitor[];

  // Quality
  dataQuality: DataQuality;
}
