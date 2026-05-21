/**
 * AC094-Talwandi Sabo Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC094-Talwandi-Sabo.md (Tier 1), AC094-TalwandiSabo-deep.md (Tier 2)
 */

// ============================================================================
// RESEARCH MICRO-TASK METADATA
// ============================================================================

export interface ResearchMetadata {
  dossierId: string;
  topic: string;
  tier: 1 | 2;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: "VERIFIED" | "PARTIALLY VERIFIED" | "UNVERIFIED";
  dataCurrency: string;
}

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  date: string;
}

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  lokSabhaSeat: string;
  tehsil?: string;
  date: string;
}

export interface GeographicProfile {
  location: string;
  region: string;
  areaCharacter: string;
}

export interface ExecutiveSummary {
  overview: string;
  result2022: string;
  keyIssues: string[];
  constituencyCharacter: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  voteCount: string;
  margin: string;
  marginPercentage: string;
  runnerUp?: string;
  runnerUpParty?: string;
  totalElectors: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  voteShare: string;
  voteCount: string;
  margin: string;
  marginPercentage?: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2012 {
  winner?: string;
  party?: string;
  voteShare?: string;
  voteCount?: string;
  margin?: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResults {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
}

export interface ElectoralHistory {
  year: number;
  winner: string;
  party: string;
  margin: string;
  status: "verified" | "needs_verification";
}

export interface VoterTurnout {
  2022: string;
  2017?: string;
  status: "verified" | "needs_verification";
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  jatSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
  notes?: string;
}

export interface CasteCompositionDeep {
  jatSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
  verificationStatus: string;
}

export interface ReligionDistribution {
  sikh: string;
  hindu: string;
  others?: string;
  notes?: string;
}

export interface Demographics {
  totalElectors: string;
  voterTurnout: VoterTurnout;
  casteComposition: CasteComposition;
  religionDistribution: ReligionDistribution;
  areaCharacter: string;
  urbanRuralComposition?: string;
}

export interface DemographicDeepDive {
  population?: string;
  censusYear?: number;
  casteComposition: CasteCompositionDeep;
  religionDistribution: ReligionDistribution;
  districtLevelData?: string;
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface KeyLocalIssues {
  primaryIssues: LocalIssue[];
  secondaryIssues?: string[];
}

export interface PrimaryIssues {
  issues: LocalIssue[];
}

export interface SecondaryIssues {
  issues: string[];
}

// ============================================================================
// POLITICAL SIGNIFICANCE
// ============================================================================

export interface PoliticalSignificance {
  aapHold: string;
  decreasedMargin: string;
  ruralConstituency: string;
}

export interface CongressStrategicPosition {
  currentStatus: {
    position2022: string;
    marginDecrease: string;
    antiIncumbencyBuilding: string;
  };
  keyChallenges: string[];
  opportunities: string[];
  recommendedApproach: string;
}

export interface CongressStatus {
  position2022: string;
  historicalBase: string;
  challenge: string;
}

export interface RecommendedCandidateProfile {
  profile: string;
  background: string;
  keyTraits: string[];
  targetVoter: string[];
}

export interface CandidateAttribute {
  caste?: string;
  background?: string;
  profile?: string;
  priority?: string;
}

export interface IdealCandidate {
  caste?: string;
  subCaste?: string;
  background: string;
  profile: string;
  keyTraits?: string[];
  targetVoter?: string[];
  priority?: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  category: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  vulnerabilities: string[];
  narratives: string[];
}

// ============================================================================
// POLITICAL LANDSCAPE
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  gender: string;
  note?: string;
}

export interface PoliticalPlayers {
  currentMLA: CurrentMLA;
}

export interface VoterProfile {
  ruralVoters?: string;
  femaleVoters?: string;
  turnout?: string;
}

export interface PartyPerformanceTrend {
  year: number;
  aap?: string;
  inc?: string;
  sad?: string;
  notes: string;
}

// ============================================================================
// 2027 OUTLOOK
// ============================================================================

export interface CompetitiveLandscape2027 {
  likelyContenders?: string[];
  strategicConsiderations: string[];
  marginSwingPotential: string;
}

export interface CongressStrategy2027 {
  targetAntiIncumbency: string;
  candidateRequirements: string;
  narrativeFocus: string[];
  targetVoters: string[];
  grievanceFocus: string[];
}

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

export interface DeepResearchData {
  metadata: ResearchMetadata;
  executiveSummary: ExecutiveSummary;
  constituencyProfile: {
    basicDetails: {
      assemblyConstituencyNo: number;
      district: string;
      region: string;
      category: string;
      parliamentaryConstituency: string;
    };
    electionResults2022: {
      winner: string;
      margin: string;
      turnout: string;
      totalElectors: string;
    };
  };
  demographics: DemographicDeepDive;
  electoralHistory: ElectoralHistory[];
  keyIssues: KeyLocalIssues;
  politicalPlayers: PoliticalPlayers;
  voterProfile: VoterProfile;
  outlook2027: {
    congressStrategy: CongressStrategy2027;
    competitiveLandscape: CompetitiveLandscape2027;
  };
  intelligenceGaps: string[];
  recommendations: CongressStrategy2027;
}

export interface DeepConstituencyIdentity {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  category: string;
  parliamentaryConstituency: string;
}

export interface DeepElectoralHistory {
  year: number;
  winner?: string;
  party?: string;
  margin?: string;
  status: string;
}

export interface PublicSentimentIndicators {
  drugCrisis?: string;
  agriculturalDistress?: string;
  ruralInfrastructure?: string;
  unemployment?: string;
  healthcare?: string;
}

export interface AAPStrategy {
  mainNarrative?: string;
  targetVoters?: string[];
  vulnerabilityPoints?: string[];
}

export interface CongressStrategyDeep {
  candidate?: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

export interface BSPStrategy {
  mainNarrative?: string;
  targetVoters?: string[];
}

export interface SADBPPStrategy {
  mainNarrative?: string;
  targetVoters?: string[];
}

export interface StrategicBlueprint {
  congress: CongressStrategyDeep;
  aap?: AAPStrategy;
  bsp?: BSPStrategy;
  sadbpp?: SADBPPStrategy;
}

export interface CourseChangingFactor {
  factor: string;
  impact: string;
}

export interface CourseChangingFactors {
  factors: CourseChangingFactor[];
}

export interface Wildcards {
  factors: string[];
}

export interface Triggers {
  triggers: string[];
}

export interface DataGaps {
  criticalMissingData: string[];
  needsVerification: string[];
}

export interface IntelligencePriority {
  priority: string;
  item: string;
}

export interface IntelligencePriorities {
  priorities: IntelligencePriority[];
}

export interface Recommendations {
  congressStrategy: CongressStrategy2027;
  congressDeepStrategy: CongressStrategyDeep;
}

export interface DataSource {
  name: string;
  url: string;
}

export interface ResearchStatus {
  status: string;
  notes?: string;
}

export interface DataQuality {
  verificationStatus: string;
  completeness: string;
  reliability: string;
}

// ============================================================================
// GOVERNANCE & DEVELOPMENT
// ============================================================================

export interface GovernanceGap {
  issue: string;
  description: string;
}

export interface GovernanceGaps {
  gaps: GovernanceGap[];
}

export interface DevelopmentIssue {
  area: string;
  status: string;
}

export interface DevelopmentIssues {
  issues: DevelopmentIssue[];
}

// ============================================================================
// SOURCES
// ============================================================================

export interface SourceMetadata {
  sources: string[];
  sourceUrls: string[];
}

export interface Sources {
  sourcesList: string[];
  sourceUrls: string[];
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface MainDossierData {
  header: ConstituencyHeader;
  identity: ConstituencyIdentity;
  geographicProfile: GeographicProfile;
  electionResults: ElectionResults;
  politicalSignificance: PoliticalSignificance;
  casteComposition: CasteComposition;
  religionDistribution: ReligionDistribution;
  demographics: Demographics;
  keyLocalIssues: KeyLocalIssues[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  sources: SourceMetadata;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC094TalwandiSaboTypes {
  // Main dossier data
  mainDossier: MainDossierData;

  // Deep research data
  deepResearch: DeepResearchData;

  // Complete combined dossier
  completeDossier: {
    header: ConstituencyHeader;
    identity: ConstituencyIdentity;
    geographicProfile: GeographicProfile;
    executiveSummary: ExecutiveSummary;
    electionResults: ElectionResults;
    politicalSignificance: PoliticalSignificance;
    casteComposition: CasteComposition;
    religionDistribution: ReligionDistribution;
    demographics: Demographics;
    keyLocalIssues: KeyLocalIssues[];
    congressStrategicPosition: CongressStrategicPosition;
    recommendedCandidateProfile: RecommendedCandidateProfile;
    attackLinesAgainstAAP: AttackLinesAgainstAAP;
    deepResearchData: DeepResearchData;
    sources: SourceMetadata;
  };
}

export type AC094TalwandiSaboData = AC094TalwandiSaboTypes;
