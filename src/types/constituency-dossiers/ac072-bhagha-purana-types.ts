/**
 * AC072-Bhagha Purana Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC072-Bhagha-Purana.md, AC072-BhaghaPurana-deep.md
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
  date: string;
}

export interface ConstituencyProfile {
  basicDetails: {
    assemblyConstituencyNo: number;
    district: string;
    region: string;
    category: "GEN" | "SC" | "ST" | "BC";
    parliamentaryConstituency: string;
    tehsil: string;
  };
  geographicBoundaries: {
    description: string;
    borderAreas: string[];
    keyTowns: string[];
  };
  urbanRuralComposition: {
    character: string;
    economy: string[];
    ruralInfrastructureStatus: "verified" | "needs_verification";
  };
}

export interface ExecutiveSummary {
  overview: string;
  winner2022: string;
  party: string;
  constituencyCharacter: string;
}

export interface HistoricalContext {
  historicalSignificance: string;
  politicalEvolution: string;
  competingParties: string[];
  aapBreakthrough: string;
  contestType: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginStatus: "verified" | "needs_verification";
  totalElectors?: string;
  voterTurnout?: string;
  votesPolled?: string;
  runnerUp?: string;
  runnerUpParty?: string;
}

export interface ElectionResult2017 {
  winner: string;
  partyStatus: "verified" | "needs_verification";
  party?: string;
  marginStatus: "verified" | "needs_verification";
  margin?: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  marginStatus: "verified" | "needs_verification";
  margin?: string;
}

export interface ElectoralHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPatternStatus: "verified" | "needs_verification";
  turnoutPattern?: string;
}

export interface VoterTurnout {
  2022: string;
  status: "verified" | "needs_verification";
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DistrictDemographics {
  totalPopulation: string;
  scPopulation: string;
  scPercentage: string;
  sexRatio: string;
  populationDensity: string;
}

export interface CasteCompositionMain {
  source: string;
  jatSikh: string;
  sc: string;
  obc: string;
  upperCaste: string;
  other: string;
  keyCommunities: {
    jatSikh: string;
    mazhabiRamdassia: string;
    obcGroups: string;
  };
}

export interface CasteCompositionDeep {
  jatSikh: string;
  scDalit: string;
  obc: string;
  obcStatus: "verified" | "needs_verification";
}

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface PrimaryIssues {
  drugMenace: string;
  agriculturalDistress: {
    mspProcurement: string;
    stubbleManagement: string;
    groundwaterDepletion: string;
    risingInputCosts: string;
  };
  unemployment: string;
  ruralInfrastructure: string;
}

export interface SecondaryIssues {
  healthcare: string;
  education: string;
  marketAccess: string;
}

export interface KeyIssuesTaxonomy {
  primaryIssues: PrimaryIssues;
  secondaryIssues: SecondaryIssues;
  localIssues: LocalIssue[];
}

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

export interface SentimentDriver {
  issue: string;
  description: string;
}

// ============================================================================
// POLITICAL LANDSCAPE
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  term: string;
}

export interface PartyPerformanceTrend {
  year: number;
  party: string;
  result: "W" | "LOST";
  position: string;
  notes: string;
}

export interface PoliticalLandscape {
  currentMLA: CurrentMLA;
  partyTrends: PartyPerformanceTrend[];
  historicalPattern: string;
}

export interface CompetitiveLandscape2027 {
  likelyContenders: {
    party: string;
    position: string;
  }[];
  strategicConsiderations: string[];
  sadFactor: string;
  congressFactor: string;
  aapAntiIncumbency: string;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    position: string;
    challenge: string;
    historicalPosition: string;
  };
  strategyNeeds: string[];
}

export interface RecommendedCandidateProfile {
  caste: string;
  background: string;
  profile: string;
  priority: string;
}

export interface AttackLine {
  vulnerability: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  vulnerabilities: AttackLine[];
  congressNarrative: string[];
}

export interface CongressStrategy {
  strategicPosition: CongressStrategicPosition;
  recommendedCandidate: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
}

// ============================================================================
// STRATEGIC DATA
// ============================================================================

export interface KeyLocalIssue {
  issue: string;
  description: string;
}

export interface StrategicData {
  congressStrategy: CongressStrategy;
  keyLocalIssues: KeyLocalIssue[];
  notes: string[];
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  item: string;
  status: "verified" | "needs_verification";
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

// ============================================================================
// RECOMMENDATIONS
// ============================================================================

export interface RecommendationsSummary {
  forCongress: {
    candidate: string;
    focus: string[];
    casteStrategy: string;
    sadFactor: string;
  };
}

// ============================================================================
// DATA QUALITY TRACKING
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "PARTIALLY VERIFIED" | "VERIFIED";
  verificationNeeded: string[];
}

export interface DataQuality {
  dossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: ResearchStatus;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC072BhaghaPuranaDossier {
  // Identity
  identity: ConstituencyIdentity;
  profile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;
  historicalContext: HistoricalContext;

  // Demographics
  districtDemographics: DistrictDemographics;
  casteComposition: CasteCompositionMain;
  religiousComposition: ReligiousComposition;

  // Elections
  electoralHistory: ElectoralHistory;
  voterTurnout: VoterTurnout;
  politicalLandscape: PoliticalLandscape;
  competitiveLandscape2027: CompetitiveLandscape2027;

  // Issues
  keyIssues: KeyIssuesTaxonomy;
  strategicData: StrategicData;

  // Strategy
  congressStrategy: CongressStrategy;

  // Intelligence
  intelligenceGaps: IntelligenceGaps;

  // Recommendations
  recommendations: RecommendationsSummary;

  // Quality
  dataQuality: DataQuality;
}

export type AC072BhaghaPuranaTypes = AC072BhaghaPuranaDossier;
