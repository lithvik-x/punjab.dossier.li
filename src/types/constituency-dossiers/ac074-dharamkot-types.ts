// AC074-Dharamkot Constituency Dossier Types
// Derived from: AC074-Dharamkot.md and AC074-Dharamkot-deep.md
// Research Date: 20 May 2026 | Status: PARTIALLY VERIFIED
// Cycles: 1-6 Enhancement Pipeline Complete

// ==========================================
// METADATA
// ==========================================

export interface AC074Metadata {
  acNumber: 74;
  name: "Dharamkot";
  district: "Moga";
  region: "Malwa";
  type: "General";
  date: string;
  researchSource: string;
  researchDossierId: string;
  topic: string;
  tier: number;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: string;
}

// Union types for constrained values
export type Region = "Majha" | "Malwa" | "Doaba";
export type ConstituencyType = "General" | "SC" | "ST";
export type ReservationType = "GEN" | "SC" | "ST";

// ==========================================
// CONSTITUENCY IDENTITY & BASELINE
// ==========================================

export interface AC074ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  category: ConstituencyType;
  parliamentaryConstituency: string;
  tehsil: string;
}

export interface GeographicBoundaries {
  location: string;
  border: string;
  keyTowns: string;
}

export interface UrbanRuralComposition {
  classification: string;
  religiousSignificance: string;
  economy: string;
}

export interface ConstituencyBaseline {
  identity: AC074ConstituencyIdentity;
  overview: string;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
}

// ==========================================
// HISTORICAL CONTEXT
// ==========================================

export interface HistoricalPattern {
  traditionalPowers: string;
  breakthrough: string;
  contestPattern: string;
}

export interface HistoricalContext {
  formation: string;
  historicalSignificance: string;
  religiousImportance: string;
  modernEra: string;
  historicalPattern: HistoricalPattern;
}

// ==========================================
// ECONOMIC IDENTITY
// ==========================================

export interface EconomicIdentity {
  primarySector: string;
  secondarySectors: string[];
  employmentBase: string;
  keyCharacteristics: string[];
}

// ==========================================
// DEMOGRAPHIC DEEP-DIVE
// ==========================================

export interface MogaDistrictDemographics {
  totalPopulation: number;
  scPopulation: number;
  scPercentage: number;
  sexRatio: number;
}

export interface CasteCompositionBreakdown {
  jatSikh: string;
  sc: string;
  obc: string;
  upperCaste: string;
  other: string;
}

export interface KeyCommunities {
  jatSikh: string;
  mazhabiRamdassia: string;
  obcGroups: string;
}

export interface ReligiousComposition {
  predominant: string;
  significance: string;
}

export interface CensusData {
  dharamkotTown: string;
  constituency: string;
}

export interface DemographicDeepDive {
  mogaDistrictDemographics: MogaDistrictDemographics;
  casteComposition: CasteCompositionBreakdown;
  keyCommunities: KeyCommunities;
  religiousComposition: ReligiousComposition;
  censusData: CensusData;
}

// ==========================================
// ELECTORAL HISTORY
// ==========================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  totalElectors: number;
  margin: string;
  runnerUp: string;
  totalCandidates: number;
  acType: string;
  turnout: string;
  stateAverage: number;
}

export interface HistoricalElectionResult {
  year: number;
  winner: string;
  party: string;
  margin: string;
  notes: string;
}

export interface ElectoralHistory {
  election2022: ElectionResult2022;
  historicalPattern: string;
  pastThreeElections: HistoricalElectionResult[];
}

// ==========================================
// CASTE COMPOSITION DATA
// ==========================================

export interface CasteCompositionData {
  jatSikh: number;
  sc: number;
  obc: number;
  upperCaste: number;
  other: number;
}

// ==========================================
// KEY LOCAL ISSUES
// ==========================================

export type IssueCategory =
  | "Agriculture"
  | "Drug Menace"
  | "Irrigation"
  | "Environment"
  | "Infrastructure"
  | "Education"
  | "Healthcare";

export interface KeyLocalIssue {
  issue: IssueCategory;
  description: string;
  priority?: number;
}

export interface LocalIssues {
  primaryIssues: KeyLocalIssue[];
  secondaryIssues: string[];
}

// ==========================================
// PUBLIC SENTIMENT
// ==========================================

export interface CurrentMood {
  dominantConcerns: string[];
  publicExpectations: string[];
}

export interface PublicSentiment {
  currentMood: CurrentMood;
  keyIssues: KeyLocalIssue[];
}

// ==========================================
// GOVERNANCE GAP
// ==========================================

export interface GovernanceGap {
  serviceDelivery: {
    health: string;
    education: string;
  };
  infrastructure: {
    roads: string;
    electricity: string;
  };
  schemes: {
    pds: string;
    mgnrega: string;
    ayushmanBharat: string;
  };
}

// ==========================================
// INFLUENCERS & POWER STRUCTURE
// ==========================================

export interface PoliticalActors {
  currentMLA: string;
  currentParty: string;
  historicalLeaders: string;
}

export interface CommunityInfluencers {
  farmerLeaders: string;
  religiousLeaders: string;
  socialActivists: string;
}

export interface InfluencersPowerStructure {
  political: PoliticalActors;
  community: CommunityInfluencers;
}

// ==========================================
// SWOT ANALYSIS
// ==========================================

export interface SWOTStrengths {
  strengths: string[];
}

export interface SWOTWeaknesses {
  weaknesses: string[];
}

export interface SWOTOpportunities {
  opportunities: string[];
}

export interface SWOTThreats {
  threats: string[];
}

export interface SWOTAnalysis {
  strengths: SWOTStrengths;
  weaknesses: SWOTWeaknesses;
  opportunities: SWOTOpportunities;
  threats: SWOTThreats;
}

// ==========================================
// STRATEGIC BLUEPRINT
// ==========================================

export interface Narrative {
  title: string;
  description: string;
}

export interface PrioritySegment {
  segment: string;
  focus: string;
}

export interface StrategicBlueprint {
  topNarratives: Narrative[];
  prioritySegments: PrioritySegment[];
}

// ==========================================
// CONGRESS STRATEGY (from main file)
// ==========================================

export interface CongressStrategicPosition {
  currentStatus: string;
  challenge: string;
  historicalBase: string;
}

export interface CongressChallenges {
  AAPNarrative: string;
  drugCrisis: string;
  farmDistress: string;
  boothOrganization: string;
}

export interface CongressOpportunities {
  ruralGrievances: string;
  governmentFailures: string;
  brokenPromises: string;
  issueBasedCampaign: string;
}

export interface RecommendedCandidateProfile {
  caste: string;
  background: string[];
  profile: string[];
  priority: string;
}

export interface SelectionCriteria {
  villageConnect: string;
  farmerCredentials: string;
  drugPreventionConnect: string;
  cleanImage: string;
}

export interface AttackLine {
  line: string;
  description: string;
}

export interface CongressNarrative {
  farmersPromise: string;
  youthDrugs: string;
  voteMessage: string;
}

export interface CongressStrategy {
  strategicPosition: CongressStrategicPosition;
  challenges: CongressChallenges;
  opportunities: CongressOpportunities;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  selectionCriteria: SelectionCriteria;
  attackLines: AttackLine[];
  congressNarrative: CongressNarrative;
}

// ==========================================
// INTELLIGENCE GAPS (from deep file)
// ==========================================

export interface IntelligenceGap {
  item: string;
  status: string;
}

export interface IntelligenceGaps {
  missingData: IntelligenceGap[];
  recommendations: string[];
}

export interface DeepResearchData {
  intelligenceGaps: IntelligenceGaps;
  recommendations: string[];
}

// ==========================================
// DATA QUALITY FLAGS
// ==========================================

export type DataVerificationStatus = "VERIFIED" | "NEEDS_VERIFICATION" | "PARTIAL" | "NOT_FOUND";

export interface DataQualityFlag {
  field: string;
  status: DataVerificationStatus;
  source?: string;
  notes?: string;
}

// ==========================================
// SOURCES
// ==========================================

export interface SourceMetadata {
  sources: string[];
  verificationStatus: string;
}

// ==========================================
// COMPLETE AC074 DOSSIER
// ==========================================

export interface AC074DharamkotDossier {
  metadata: AC074Metadata;
  baseline: ConstituencyBaseline;
  historicalContext: HistoricalContext;
  economicIdentity: EconomicIdentity;
  demographic: DemographicDeepDive;
  electoral: ElectoralHistory;
  casteComposition: CasteCompositionData;
  localIssues: LocalIssues;
  publicSentiment: PublicSentiment;
  governanceGap: GovernanceGap;
  influencers: InfluencersPowerStructure;
  swot: SWOTAnalysis;
  strategicBlueprint: StrategicBlueprint;
  congressStrategy: CongressStrategy;
  deepResearch: DeepResearchData;
  dataQualityFlags: DataQualityFlag[];
  sources: string[];
}

// Type exports for index.ts
export type AC074DharamkotTypes = AC074DharamkotDossier;
