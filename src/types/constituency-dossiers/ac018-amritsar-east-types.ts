/**
 * AC018 - Amritsar East Assembly Constituency
 * TypeScript type definitions
 * Cycles: 1 (Initial creation), 2 (Enhancement - stricter types, const assertions)
 */

// ============ CONSTITUENCY IDENTITY ============

/** AC Number must be between 1-117 for Punjab Legislative Assembly */
export interface ConstituencyIdentity {
  /** Punjab AC number (1-117) */
  acNumber: 18;
  name: "Amritsar East";
  district: "Amritsar";
  region: "Majha";
  type: "General" | "SC" | "ST";
  date: string; // ISO 8601 format: YYYY-MM-DD
}

// ============ GEOGRAPHIC PROFILE ============

export interface GeographicProfile {
  description: string;
  location: string;
  partOfLokSabha: string;
  urbanRuralMix: "Urban" | "Semi-Urban" | "Peri-Urban" | "Mixed";
  voterDemographics?: VoterDemographicsEstimate;
}

export interface VoterDemographicsEstimate {
  urbanVotersPercent: number;
  ruralPeriUrbanVotersPercent: number;
  scVotersPercent: number;
  sikhVotersPercent: number;
  hinduVotersPercent: number;
}

// ============ KEY STATISTICS ============

/** Punjab political party abbreviations */
export type PunjabParty = "AAP" | "INC" | "BJP" | "SAD" | "OTH";

export interface KeyStatistics2022 {
  winner: string;
  party: PunjabParty;
  runnerUp: string | null;
  runnerUpParty: PunjabParty | null;
  winnerVoteCount: number | null;
  /** Vote margin - must be positive */
  margin: number;
  totalElectors: number | null;
  /** Voter turnout as percentage (0-100) */
  voterTurnout: number | null;
  marginPercent?: number;
}

// ============ ELECTION RESULTS ============

/** Supported election years in India */
export type ElectionYear = 2012 | 2017 | 2022;

export interface ElectionResult {
  year: ElectionYear;
  winner: string;
  party: PunjabParty;
  /** Runner-up candidate name - empty string if not verified */
  runnerUp: string;
  /** Runner-up party - empty string if not verified */
  runnerUpParty: string;
  /** Vote margin - positive number or null if not available */
  margin: number | null;
  winnerVoteCount?: number | null;
  isVerified: boolean;
}

export interface ElectionResultsData {
  /** 2022 Punjab Legislative Assembly Election */
  2022?: ElectionResult;
  /** 2017 Punjab Legislative Assembly Election */
  2017?: ElectionResult;
  /** 2012 Punjab Legislative Assembly Election */
  2012?: ElectionResult;
}

// ============ CASTE COMPOSITION ============

/** Caste composition percentages (must sum to ~100) */
export interface CasteComposition {
  /** Upper caste percentage */
  upperCaste: number;
  /** Jat Sikh percentage */
  jatSikh: number;
  /** Scheduled Castes percentage */
  sc: number;
  /** Other Backward Classes percentage */
  obc: number;
  /** Minority community percentage */
  minority: number;
  /** Other categories percentage */
  other: number;
}

export interface DetailedCasteBreakdown {
  /** Scheduled Castes as percentage of total population */
  scheduledCastes: number;
  /** Jat Sikh demographic description */
  jatSikh: string;
  /** Hindu Khatri/Arora demographic description */
  hinduKhatriArora: string;
  /** Brahmin demographic description */
  brahmin: string;
  /** Other Backward Classes description */
  obc: string;
}

// ============ RELIGION BREAKDOWN ============

/** Religion distribution in constituency */
export interface ReligionBreakdown {
  /** Sikh population percentage (state average: 57.7%) */
  sikh: number;
  /** Hindu population percentage */
  hindu: number;
  other?: number;
  urbanArea: {
    sikh: number;
    hindu: number;
  };
  /** Peri-urban village religious composition */
  periUrbanVillages: string;
}

// ============ KEY VOTING DYNAMICS ============

export interface KeyVotingDynamics {
  voterProfile: "Mixed urban-rural" | "Urban" | "Rural";
  urbanVotersBehavior: string;
  ruralPeriUrbanVotersBehavior: string;
}

// ============ PUBLIC SENTIMENT ============

export interface PublicSentiment {
  perceivedMood: string | null;
  volatility: "High" | "Medium" | "Low";
  narrowMarginImplication: string;
  postSidhuDynamics: string;
  keyVoterConcerns: string[];
}

// ============ LOCAL ISSUES ============

/** Issue categories for classification */
export type IssueCategory = "Urban" | "Agriculture" | "LawOrder" | "Employment" | "Governance";

export interface LocalIssue {
  /** Issue priority rank (1 = highest) */
  rank: 1 | 2 | 3 | 4 | 5;
  issue: string;
  description?: string;
  category?: IssueCategory;
}

/** Collection of local issues with priority ordering */
export interface LocalIssuesData {
  top5Issues: LocalIssue[];
}

// ============ GOVERNANCE GAP ============

export interface GovernanceGap {
  mlapPerformance: string;
  infrastructureStatus: {
    urbanResidential: string;
    periUrban: string;
    nationalHighwayConnectivity: string | null;
  };
  postSidhuInfluence: string;
}

// ============ INFLUENCERS & POWER STRUCTURE ============

export interface PoliticalInfluencer {
  name: string;
  role: string;
  party: string | null;
  influence: string;
  currentStatus: string | null;
  verificationStatus: "Verified" | "Partially Verified" | "Needs Verification";
}

export interface SocialReligiousInfluencer {
  name: string;
  role: string;
  influence: string;
}

export interface InfluencersPowerStructure {
  political: PoliticalInfluencer[];
  socialReligious: SocialReligiousInfluencer[];
}

// ============ MEDIA LANDSCAPE ============

export interface MediaOutlet {
  name: string;
  type: "Local" | "Regional" | "Social";
}

export interface MediaLandscape {
  local: string[];
  regional: string[];
  socialMedia: string[];
}

// ============ PHYSICAL MAPPING ============

export interface PhysicalMapping {
  keyGeography: string;
  urbanAreas: string;
  periUrbanVillages: string;
  connectivity: string | null;
}

// ============ SWOT ANALYSIS ============

/** SWOT categories */
export type SwotCategory = "Strength" | "Weakness" | "Opportunity" | "Threat";
/** Parties in Punjab politics */
export type PoliticalParty = "AAP" | "Congress" | "BJP" | "Neutral";

export interface SwotEntry {
  category: SwotCategory;
  party: PoliticalParty;
  point: string;
}

export interface SwotAnalysis {
  entries: SwotEntry[];
}

// ============ STRATEGIC BLUEPRINT ============

export interface StrategicDirective {
  party: "AAP" | "Congress" | "BJP";
  objective: string;
  keyActions: string[];
}

export interface StrategicBlueprint {
  directives: StrategicDirective[];
}

// ============ COURSE CHANGING FACTORS ============

export interface CourseChangingFactor {
  factor: string;
  probability: "High" | "Medium" | "Low";
  impact: "HIGH" | "MEDIUM" | "LOW";
}

export interface CourseChangingFactors {
  factors: CourseChangingFactor[];
}

// ============ INTELLIGENCE GAPS ============

export interface IntelligenceGap {
  id: number;
  item: string;
  priority: "High" | "Medium" | "Low";
}

export interface IntelligenceGapsData {
  gaps: IntelligenceGap[];
  monitoringKeywords: string[];
}

// ============ SOURCE CITATION ============

export interface Source {
  name: string;
  type: "Web Search" | "Database" | "News" | "Official";
}

export interface SourceData {
  consulted: Source[];
  verificationStatus: "Fully Verified" | "Partially Verified" | "Needs Verification";
  currencyDate: string;
}

// ============ CONGRESS STRATEGIC POSITION ============

export interface CongressStrategicPosition {
  competitiveAssessment: string;
  coalitionBuildingNote: string;
  marginAnalysis: string;
}

// ============ RECOMMENDED CANDIDATE PROFILE ============

export interface RecommendedCandidateProfile {
  profile: string;
  casteConsideration: string;
  keyQualities: string[];
}

// ============ ATTACK LINES ============

export interface AttackLine {
  theme: string;
  message: string;
}

export interface AttackLinesData {
  lines: AttackLine[];
}

// ============ MAIN CONSTITUENCY DATA TYPE ============

export interface AC018AmritsarEast {
  // Identity
  identity: ConstituencyIdentity;

  // Overview
  overview: string;

  // Election Results
  electionResults: ElectionResultsData;

  // Caste & Demographics
  casteComposition: CasteComposition;
  religionBreakdown: ReligionBreakdown | null;
  detailedCasteBreakdown: DetailedCasteBreakdown | null;
  keyVotingDynamics: KeyVotingDynamics | null;

  // Public Sentiment
  publicSentiment: PublicSentiment | null;

  // Local Issues
  localIssues: LocalIssuesData;

  // Governance
  governanceGap: GovernanceGap | null;

  // Influencers
  influencersPowerStructure: InfluencersPowerStructure | null;

  // Media
  mediaLandscape: MediaLandscape | null;

  // Physical Mapping
  physicalMapping: PhysicalMapping | null;

  // Analysis
  congressStrategicPosition: CongressStrategicPosition | null;
  recommendedCandidateProfile: RecommendedCandidateProfile | null;
  attackLines: AttackLinesData | null;
  swotAnalysis: SwotAnalysis | null;
  strategicBlueprint: StrategicBlueprint | null;
  courseChangingFactors: CourseChangingFactors | null;

  // Intelligence
  intelligenceGaps: IntelligenceGapsData | null;

  // Sources
  sources: SourceData;
}

// ============ TYPE EXPORTS ============
// Note: All types are exported via 'export interface' declarations above
// Additional utility types and constants are exported at the end of the file

// ============ TYPE UTILITIES & GUARDS ============

/** Type guard to check if an election year is valid */
export function isValidElectionYear(year: number): year is ElectionYear {
  return [2012, 2017, 2022].includes(year);
}

/** Type guard to check if a party is a valid Punjab party */
export function isValidPunjabParty(party: string): party is PunjabParty {
  return ["AAP", "INC", "BJP", "SAD", "OTH"].includes(party);
}

/** Type guard to check if caste composition percentages sum to ~100 */
export function isValidCasteComposition(caste: CasteComposition): boolean {
  const sum = caste.upperCaste + caste.jatSikh + caste.sc + caste.obc + caste.minority + caste.other;
  return sum >= 99 && sum <= 101;
}

/** Type guard to check if vote margin is valid (positive number) */
export function isValidMargin(margin: number | null): margin is number {
  return margin !== null && margin > 0;
}

/** Type guard to check if voter turnout is valid (0-100) */
export function isValidVoterTurnout(turnout: number | null): turnout is number {
  return turnout !== null && turnout >= 0 && turnout <= 100;
}

// ============ CONSTANTS ============

export const AC018_CONSTANTS = {
  AC_NUMBER: 18,
  NAME: "Amritsar East",
  DISTRICT: "Amritsar",
  REGION: "Majha" as const,
  TYPE: "General" as const,

  /** Known 2022 vote margin */
  KNOWN_MARGIN_2022: 6750,

  /** State Sikh average (57.7%) */
  STATE_SIKH_AVERAGE: 57.7,

  /** Amritsar East SC population */
  SC_POPULATION_PERCENT: 23,

  /** Narrowest AAP margin in Amritsar district */
  IS_NARROWEST_AAP_MARGIN: true,
} as const;

// ============ DEFAULT VALUES ============

export const DEFAULT_VERIFICATION_STATUS = {
  verified: "Verified" as const,
  partiallyVerified: "Partially Verified" as const,
  needsVerification: "Needs Verification" as const,
};
