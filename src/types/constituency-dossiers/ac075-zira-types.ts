/**
 * AC075 - Zira Assembly Constituency
 * TypeScript Type Definitions
 *
 * Generated from:
 * - AC075-Zira.md (basic dossier)
 * - AC075-Zira-deep.md (deep research dossier)
 *
 * Document IDs: AC075-Zira / AC075-Zira-deep
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
}

export interface GeographicContext {
  description: string;
  borderProximity: boolean;
  keyTowns: string[];
  agriculturalCharacter: string;
}

export interface GeographicBoundaries {
  location: string;
  borderArea: string;
}

export interface UrbanRuralComposition {
  character: string;
  economy: string[];
  borderCharacter?: string;
}

export interface ExecutiveSummary {
  overview: string;
  borderSignificance: string;
  currentRepresentation: string;
  keyCharacteristic: string;
}

// ============================================================
// SECTION 2: Demographic Data
// ============================================================

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  other?: string;
}

export interface DistrictDemographics {
  scPopulation: string;
  borderAreas: string;
  sexRatio?: string;
}

export interface CasteComposition {
  jatSikh: string;
  scheduledCaste: string;
  obc: string;
  upperCastes: string;
  borderCommunities?: string;
}

export interface KeyCommunities {
  jatSikh: string;
  rajput: string;
  mazhabiRamdassia: string;
  punjabiMuslim: string;
  borderHindu: string;
}

export interface Demographics {
  districtDemographics: DistrictDemographics;
  casteComposition: CasteComposition;
  keyCommunities: KeyCommunities;
  religiousComposition?: ReligiousComposition;
}

// ============================================================
// SECTION 3: Electoral History
// ============================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginValue: number;
  runnerUp?: string;
  runnerUpParty?: string;
  acType?: string;
  defeated?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin?: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  margin?: string;
}

export interface ElectoralHistory {
  year2022: ElectionResult2022;
  year2017?: ElectionResult2017;
  year2012?: ElectionResult2012;
}

export interface VoterTurnout {
  year2022?: string;
  stateAverage?: string;
}

export interface PartyPerformanceTrend {
  year: number;
  aap?: string;
  inc?: string;
  sad?: string;
  notes: string;
}

export interface PoliticalLandscape {
  currentMLA: string;
  currentParty: string;
  mlATenure?: string;
  partyPerformanceTrend: PartyPerformanceTrend[];
}

// ============================================================
// SECTION 4: Public Sentiment
// ============================================================

export interface SentimentDrivers {
  borderSecurity?: string;
  agriculturalDistress?: string;
  drugMenace?: string;
  connectivity?: string;
  youthEmployment?: string;
}

export interface PrimaryIssues {
  borderSecurity: string;
  drugMenace: string;
  agriculturalDistress: string;
  unemployment: string;
}

export interface SecondaryIssues {
  infrastructure: string;
  healthcare: string;
  education: string;
}

export interface KeyIssues {
  primaryIssues: PrimaryIssues;
  secondaryIssues: SecondaryIssues;
}

// ============================================================
// SECTION 5: Governance Gap
// ============================================================

export interface GovernanceGap {
  currentRepresentative: string;
  currentParty: string;
  electedYear: number;
  district: string;
  state: string;
}

// ============================================================
// SECTION 6: Local Issues
// ============================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description?: string;
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// ============================================================
// SECTION 7: Influencers & Power Structure
// ============================================================

export interface PoliticalActor {
  name: string;
  party: string;
  role: string;
  status: "Current" | "Former" | "Historical";
}

export interface PowerStructure {
  politicalActors?: PoliticalActor[];
  notes?: string;
}

// ============================================================
// SECTION 8: Media Landscape
// ============================================================

export interface MediaLandscape {
  primaryChannels?: string;
  socialMedia?: string;
}

// ============================================================
// SECTION 9: Physical Mapping
// ============================================================

export interface PhysicalMapping {
  districtFeatures: string;
  borderLength?: string;
  borderDistricts?: string;
  strategicImportance?: string;
  agriculturalHeartland?: string;
  traffickingRoutes?: string;
}

// ============================================================
// SECTION 10: SWOT Analysis
// ============================================================

export interface SWOTAnalysis {
  congressPosition?: string;
  strengths?: string[];
  challenges?: string[];
  opportunities?: string[];
}

// ============================================================
// SECTION 11: Strategic Blueprint
// ============================================================

export interface CandidateProfile {
  caste: string;
  background: string;
  profile: string;
  priority: string;
}

export interface SelectionCriteria {
  criteria: string[];
}

export interface CongressStrategicPosition {
  status: string;
  margin: string;
  marginValue: number;
  historicalBase: string;
  challenges: string[];
  opportunities: string[];
}

export interface RecommendedCandidateProfile {
  idealCandidate: CandidateProfile;
  selectionCriteria: SelectionCriteria;
}

export interface AttackLine {
  vulnerability: string;
  description?: string;
}

export interface CongressNarrative {
  narrative: string[];
}

export interface AttackLines {
  vulnerabilities: AttackLine[];
  congressNarrative: CongressNarrative;
}

export interface CongressStrategy {
  currentStatus: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLines;
}

// ============================================================
// SECTION 12: Data Gaps
// ============================================================

export interface IntelligenceGap {
  item: string;
}

export interface IntelligenceGaps {
  missingData: IntelligenceGap[];
}

export interface Recommendations {
  congressStrategy: string;
  focusAreas: string[];
  message: string;
}

// ============================================================
// SECTION 13: Sources
// ============================================================

export interface DocumentMetadata {
  dossierId: string;
  topic: string;
  tier?: string;
  date: string;
  dataCurrency: string;
  sources: string;
  verificationStatus: string;
}

export interface ResearchMetadata {
  compiledDate: string;
  frameworkVersion?: string;
}

// ============================================================
// SECTION 14: Historical Pattern
// ============================================================

export interface HistoricalPattern {
  traditionalStronghold?: string;
  sadPresence?: string;
  aapBreakthrough?: string;
  notes?: string;
}

// ============================================================
// SECTION 15: Border Context
// ============================================================

export interface BorderContext {
  districtFeatures: string;
  borderLength?: string;
  borderDistricts?: string;
  strategicImportance?: string;
  agriculturalHeartland?: string;
  traffickingRoutes?: string;
}

// ============================================================
// MAIN EXPORT: Full Constituency Dossier
// ============================================================

export interface AC075ZiraDossier {
  // Metadata
  metadata: {
    basicDossier: DocumentMetadata;
    deepDossier: DocumentMetadata;
    researchMetadata?: ResearchMetadata;
  };

  // Section 1
  identity: ConstituencyIdentity;
  executiveSummary: ExecutiveSummary;
  geographicContext: GeographicContext;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
  historicalPattern?: HistoricalPattern;

  // Section 2
  demographics: Demographics;

  // Section 3
  electoralHistory: ElectoralHistory;
  voterTurnout?: VoterTurnout;
  politicalLandscape?: PoliticalLandscape;

  // Section 4
  keyIssues: KeyIssues;
  sentimentDrivers?: SentimentDrivers;

  // Section 5
  governanceGap?: GovernanceGap;

  // Section 6
  localIssues: KeyLocalIssues;

  // Section 7
  powerStructure?: PowerStructure;

  // Section 8
  mediaLandscape?: MediaLandscape;

  // Section 9
  physicalMapping: PhysicalMapping;
  borderContext?: BorderContext;

  // Section 10
  swotAnalysis?: SWOTAnalysis;

  // Section 11
  congressStrategy: CongressStrategy;

  // Section 12
  intelligenceGaps: IntelligenceGaps;
  recommendations: Recommendations;

  // Section 13
  sources: string[];
}
