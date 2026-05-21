/**
 * AC022 - Khem Karan Assembly Constituency
 * TypeScript Type Definitions
 *
 * Generated from:
 * - AC022-Khem-Karan.md (basic dossier)
 * - AC022-KhemKaran-deep.md (deep research dossier)
 *
 * Document IDs: AC022-Khem-Karan / AC022-KhemKaran-deep
 * Last Updated: 20 May 2026
 */

// ============================================================
// SECTION 1: Constituency Identity & Baseline
// ============================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "OBC";
  lokSabha: string;
  tehsil: string;
  borderStatus: "Border" | "Non-Border";
  reservation: "None (General)" | "SC" | "ST";
  totalElectors2022: number;
}

export interface GeographicContext {
  description: string;
  borderProximity: boolean;
  historicalSignificance: string;
  agriculturalProfile: string[];
  vulnerabilityPoints: string[];
}

export interface KeyIdentifiers {
  borderStatus: string;
  historicalSignificance: string;
  agriculturalProfile: string;
}

// ============================================================
// SECTION 2: Demographic Data
// ============================================================

export interface ReligiousComposition {
  sikh: number;    // percentage
  hindu: number;   // percentage
  christian: number; // percentage
  other?: number;  // percentage (calculated residual)
}

export interface CasteComposition {
  jatSikh: string;          // percentage range string e.g. "~35-40%"
  scheduledCaste: string;   // percentage range string e.g. "~25-30%"
  obc: string;              // percentage range string e.g. "~15-18%"
  hindu: string;            // percentage range string e.g. "~15-18%"
  muslim: string;           // percentage range string e.g. "~1-2%"
  /** Detailed SC percentage from Census 2011 for urban Khem Karan town */
  scUrbanKhemKaran?: number;
  /** Specific SC communities */
  scCommunities?: string;
  /** Specific OBC communities */
  obcCommunities?: string;
}

export interface KeyDemographics {
  urbanPopulation: number;
  ruralDescription: string;
  borderVillages: string;
}

// ============================================================
// SECTION 3: Electoral History
// ============================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  marginValue: number;
  runnerUpParty?: string;
  runnerUpName?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  runnerUp?: string;
  runnerUpParty?: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  margin?: string;
}

export interface ElectionResults {
  year2022: ElectionResult2022;
  year2017: ElectionResult2017;
  year2012: ElectionResult2012;
}

export interface VoterTurnout {
  year2022: string;
  year2017: string;
}

export interface ElectoralHistory {
  electionResults: ElectionResults;
  voterTurnout: VoterTurnout;
  historicalTrend?: string;
}

// ============================================================
// SECTION 4: Public Sentiment
// ============================================================

export type VoterMood = "Pragmatic" | "Conservative" | "Swing" | "Decided";

export interface SentimentDrivers {
  borderSecurity: string;
  agriculturalDistress: string;
  drugMenace: string;
  connectivity: string;
  youthEmployment: string;
}

export interface Grievances {
  employmentOpportunities: string;
  agriculturalInputCosts: string;
  borderAreaDevelopment: string;
  healthcareFacilities: string;
}

export interface PublicSentiment {
  currentMood: VoterMood;
  keyDrivers: SentimentDrivers;
  grievances: Grievances;
}

// ============================================================
// SECTION 5: Governance Gap
// ============================================================

export interface ActiveScheme {
  name: string;
  description?: string;
}

export interface DevelopmentGap {
  issue: string;
  details: string;
}

export interface GovernanceGap {
  currentRepresentative: string;
  currentParty: string;
  electedYear: number;
  district: string;
  state: string;
  activeSchemes: string[];
  developmentGaps: string[];
}

// ============================================================
// SECTION 6: Local Issues
// ============================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description?: string;
  verificationStatus?: "Verified" | "Partially Verified" | "Needs Verification";
}

export interface AreaSpecificConcern {
  area: string;
  concerns: string[];
}

export interface LocalIssues {
  topIssues: LocalIssue[];
  areaSpecificConcerns: AreaSpecificConcern[];
}

// ============================================================
// SECTION 7: Influencers & Power Structure
// ============================================================

export interface PoliticalActor {
  name: string;
  party: string;
  role: string;
  status: "Current" | "Former" | "Needs Verification";
}

export interface CommunityInfluencer {
  group: string;
  influenceType: string;
  description: string;
}

export interface InfluencersAndPowerStructure {
  politicalActors: PoliticalActor[];
  communityInfluencers: CommunityInfluencer[];
  powerStructureNotes: string;
}

// ============================================================
// SECTION 8: Media Landscape
// ============================================================

export interface MediaChannel {
  type: string;
  description: string;
}

export interface MediaLandscape {
  localMedia: string;
  socialMedia: string;
  informationChannels: string[];
}

// ============================================================
// SECTION 9: Physical Mapping
// ============================================================

export interface KeyLocation {
  name: string;
  type: string;
}

export interface Infrastructure {
  roadConnectivity: string;
  nearestRailwayStation: string;
  primaryHealthCenter: string;
  mandi: string;
}

export interface PhysicalMapping {
  keyLocations: string[];
  infrastructure: Infrastructure;
  vulnerabilityPoints: string[];
}

// ============================================================
// SECTION 10: SWOT Analysis
// ============================================================

export interface SWOTStrengths {
  items: string[];
}

export interface SWOTWeaknesses {
  items: string[];
}

export interface SWOTOpportunities {
  items: string[];
}

export interface SWOTThreats {
  items: string[];
}

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ============================================================
// SECTION 11: Strategic Blueprint
// ============================================================

export interface CandidateProfile {
  caste?: string;
  profile?: string;
  keyQualification?: string;
  avoid?: string;
}

export interface TargetSegment {
  segment: string;
  description: string;
}

export interface KeyMessage {
  message: string;
}

export interface CongressStrategy2027 {
  candidateProfile: CandidateProfile;
  casteFactor: string;
  issues: string[];
  campaign: string;
  groundGame: string;
  targetSegments: string[];
  keyMessages: string[];
}

export interface StrategicBlueprint {
  congressStrategy: CongressStrategy2027;
  targetSegments: TargetSegment[];
  keyMessages: KeyMessage[];
}

// ============================================================
// SECTION 12: Course-Changing Factors (Wildcards)
// ============================================================

export interface Wildcard {
  factor: string;
  probability?: string;
  description: string;
}

export interface Trigger {
  name: string;
  description: string;
}

export interface CourseChangingFactors {
  wildcards: Wildcard[];
  triggers: Trigger[];
}

// ============================================================
// SECTION 13: Data Gaps
// ============================================================

export interface DataGap {
  item: string;
  verificationNeeded: boolean;
}

export interface IntelligencePriority {
  priority: number;
  item: string;
}

export interface DataGapsAndRecommendations {
  requiredVerification: string[];
  intelligencePriorities: string[];
}

// ============================================================
// SECTION 14: Key Local Issues (from basic dossier)
// ============================================================

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// ============================================================
// SECTION 15: Congress Strategic Position
// ============================================================

export type ContestabilityStatus = "Safe" | "Contestable" | "Likely Lost" | "Unknown";

export interface CongressStrategicPosition {
  status: ContestabilityStatus;
  margin: string;
  marginValue: number;
  notes: string;
  keyFactors: string[];
  recommendedCandidateProfile: CandidateProfile;
}

// ============================================================
// SECTION 16: Attack Lines Against AAP
// ============================================================

export interface AttackLine {
  line: string;
}

export interface AttackLines {
  lines: string[];
}

// ============================================================
// SECTION 17: Caste Composition (from deep dossier detail)
// ============================================================

export interface CasteCompositionDetailed {
  scheduledCasteUrban: number;
  jatSikhMajority: string;
  ramdasiaRavidassiaPresence: string;
  obcCommunities: string;
}

// ============================================================
// SECTION 18: Sources
// ============================================================

export interface Source {
  name: string;
  description: string;
}

export interface DocumentMetadata {
  dossierId: string;
  topic: string;
  date: string;
  dataCurrency: string;
  sources: string;
  verificationStatus: string;
  preparedFor?: string;
  classification?: string;
  documentStatus?: string;
}

// ============================================================
// MAIN EXPORT: Full Constituency Dossier
// ============================================================

export interface AC022KhemKaranDossier {
  // Metadata
  metadata: {
    basicDossier: DocumentMetadata;
    deepDossier: DocumentMetadata;
  };

  // Section 1
  identity: ConstituencyIdentity;
  geographicContext: GeographicContext;

  // Section 2
  demographicData: {
    religiousComposition: ReligiousComposition;
    casteComposition: CasteComposition;
    casteCompositionDetailed?: CasteCompositionDetailed;
    keyDemographics: KeyDemographics;
  };

  // Section 3
  electoralHistory: ElectoralHistory;

  // Section 4
  publicSentiment: PublicSentiment;

  // Section 5
  governanceGap: GovernanceGap;

  // Section 6
  localIssues: LocalIssues;

  // Section 7
  influencersAndPowerStructure: InfluencersAndPowerStructure;

  // Section 8
  mediaLandscape: MediaLandscape;

  // Section 9
  physicalMapping: PhysicalMapping;

  // Section 10
  swotAnalysis: SWOTAnalysis;

  // Section 11
  strategicBlueprint: StrategicBlueprint;

  // Section 12
  courseChangingFactors: CourseChangingFactors;

  // Section 13
  dataGaps: DataGapsAndRecommendations;

  // Additional from basic dossier
  congressStrategicPosition: CongressStrategicPosition;
  attackLines: AttackLines;
  sources: string[];
}
