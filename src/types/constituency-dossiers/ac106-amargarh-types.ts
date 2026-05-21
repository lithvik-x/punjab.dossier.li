/**
 * AC106-Amargarh Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC106-Amargarh.md, AC106-Amargarh-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: string;
  dataCurrency: string;
}

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  lokSabhaSeat: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  category: string;
  historicalNote?: string;
}

export interface GeographicContext {
  description: string;
  uniqueFeature: string;
}

export interface ExecutiveSummary {
  summary: string;
}

export interface PoliticalSignificance {
  description: string;
  uniquePosition: string;
  alertLevel?: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votes?: string;
  voteShare?: string;
  turnout?: string;
  margin: string;
  runnerUp?: string;
  runnerUpParty?: string;
  totalContestants?: number;
  keyContestants?: { name: string; party: string }[];
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin?: string;
  runnerUp?: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  margin?: string;
}

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin?: string;
}

export interface ElectoralHistory {
  entries: ElectoralHistoryEntry[];
}

export interface ElectionResults {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteCompositionMain {
  jatSikh: string;
  obc: string;
  sc: string;
  hinduUpperCaste: string;
  muslim: string;
  others: string;
}

export interface CasteCompositionDeep {
  jatSikh: string;
  obc: string;
  sc: string;
  hinduUpperCaste: string;
  muslim: string;
  others: string;
}

export interface Demographics {
  casteCompositionMain: CasteCompositionMain;
  casteCompositionDeep?: CasteCompositionDeep;
}

// ============================================================================
// VOTER DATA
// ============================================================================

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout?: string;
  voterTurnout2022?: string;
  urbanRuralMix?: string;
}

export interface VoterProfile {
  turnout2022: string;
  stateAverage?: string;
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  prioritySegment?: string[];
}

export interface PrimaryIssues {
  issues: LocalIssue[];
}

export interface KeyLocalIssues {
  primaryIssues: PrimaryIssues;
}

export interface IssueCategories {
  developmentIssues: {
    issues: string[];
  };
  drugCrisis?: {
    description: string;
    impact: string;
  };
  agrarianDistress?: {
    issues: string[];
  };
  developmentGaps?: {
    issues: string[];
  };
}

export interface AttackLinesMain {
  line: string;
}

export interface AttackLinesAgainstAAP {
  lines: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  opportunity?: string;
  alertLevel?: string;
}

export interface CongressStrengths {
  strengths: string[];
}

export interface CongressWeaknesses {
  weaknesses: string[];
}

export interface CongressStrengthsAndWeaknesses {
  strengths: CongressStrengths;
  weaknesses: CongressWeaknesses;
}

export interface RecommendedCandidateProfile {
  casteCommunity: string;
  profile: string;
  attributes: string[];
  background: string;
  recommendation?: string;
}

export interface CongressStrategy {
  strategicPosition: CongressStrategicPosition;
  strengthsAndWeaknesses: CongressStrengthsAndWeaknesses;
  recommendedCandidate: RecommendedCandidateProfile;
}

// ============================================================================
// CURRENT REPRESENTATION
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  term?: string;
}

export interface KeyPoliticalFigures {
  status: string;
}

export interface PoliticalLeadership {
  currentMLA: CurrentMLA;
  keyPoliticalFigures: KeyPoliticalFigures;
}

export interface PoliticalPlayers {
  currentMLA: CurrentMLA;
  localInfluencers: KeyPoliticalFigures;
}

// ============================================================================
// 2027 OUTLOOK
// ============================================================================

export interface CongressStrategy2027 {
  targetAntiIncumbency: boolean;
  strongLocalCandidate: boolean;
  focusAreas: string[];
}

export interface KeyWinningStrategy {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
}

export interface Outlook2027 {
  congressStrategy: CongressStrategy2027;
  keyWinningStrategy: KeyWinningStrategy;
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGaps {
  gaps: string[];
}

export interface RequiresVerification {
  items: string[];
}

export interface ResearchPriorities {
  priorities: string[];
}

export interface IntelligenceSection {
  requiresVerification: RequiresVerification;
  researchPriorities: ResearchPriorities;
}

export interface DataQuality {
  sources: { name: string; url?: string }[];
  researchStatus: {
    status: string;
    gaps: string[];
  };
}

// ============================================================================
// DEEP RESEARCH SPECIFIC
// ============================================================================

export interface DeepConstituencyProfile {
  basicInformation: {
    assemblyConstituencyNo: number;
    district: string;
    region: string;
    type: string;
  };
  geographicContext: {
    description: string;
  };
}

export interface Deep2022ElectionResults {
  winner: {
    candidate: string;
    party: string;
    votes?: string;
    voteShare?: string;
    turnout?: string;
  };
  runnerUp: {
    candidate: string;
    party: string;
  };
  keyContestants?: {
    status: string;
  };
}

export interface DeepElectoralHistory {
  "2022Context": {
    performance: {
      aapWon: boolean;
      voteShare: string;
      turnout: string;
      margin?: string;
    };
  };
  historicalPattern: {
    status: string;
  };
}

export interface KeyIssuesAndGrievances {
  drugCrisis?: {
    description: string;
    impact?: string;
  };
  agrarianDistress?: {
    issues: string[];
  };
  developmentGaps?: {
    issues: string[];
  };
}

export interface PoliticalLeadershipDeep {
  currentMla: CurrentMLA;
  keyPoliticalFigures?: {
    status: string;
  };
}

export interface VoterOutreach {
  voterTurnout2022: VoterProfile;
}

export interface GovernmentSchemes {
  status: string;
}

export interface DeepResearchData {
  executiveSummary: ExecutiveSummary;
  constituencyProfile: DeepConstituencyProfile;
  electionResults: Deep2022ElectionResults;
  electoralHistory: DeepElectoralHistory;
  casteDemographics: {
    communityComposition: {
      typicalMalwaPattern: {
        jatSikh: string;
        dalitSc: string;
        obc: string;
        hinduMuslim: string;
      };
    };
  };
  keyIssues: KeyIssuesAndGrievances;
  politicalLeadership: PoliticalLeadershipDeep;
  voterOutreach: VoterOutreach;
  governmentSchemes: GovernmentSchemes;
  attackLines: AttackLinesAgainstAAP;
  intelligenceGaps: IntelligenceSection;
  recommendations: {
    researchPriorities: string[];
  };
  sources?: {
    name: string;
    url?: string;
  }[];
}

export interface MainDossierData {
  metadata: ResearchMetadata;
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  geographicContext: GeographicContext;
  executiveSummary: ExecutiveSummary;
  politicalSignificance: PoliticalSignificance;
  demographics: Demographics;
  voterDemographics: VoterDemographics;
  voterProfile: VoterProfile;
  electionResults: ElectionResults;
  electoralHistory: ElectoralHistory;
  keyLocalIssues: KeyLocalIssues;
  issueCategories: IssueCategories;
  attackLines: AttackLinesMain[];
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  congressStrategy: CongressStrategy;
  outlook2027: Outlook2027;
  politicalLeadership: PoliticalLeadership;
  politicalPlayers: PoliticalPlayers;
  intelligenceGaps: IntelligenceGaps;
  intelligenceSection: IntelligenceSection;
  dataQuality: DataQuality;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC106AmargarhTypes {
  // Metadata
  metadata: ResearchMetadata;

  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  geographicContext: GeographicContext;
  executiveSummary: ExecutiveSummary;
  politicalSignificance: PoliticalSignificance;

  // Demographics
  demographics: Demographics;
  voterDemographics: VoterDemographics;
  voterProfile: VoterProfile;

  // Elections
  electionResults: ElectionResults;
  electoralHistory: ElectoralHistory;

  // Issues & Sentiment
  keyLocalIssues: KeyLocalIssues;
  issueCategories: IssueCategories;
  attackLines: AttackLinesMain[];
  attackLinesAgainstAAP: AttackLinesAgainstAAP;

  // Strategy
  congressStrategy: CongressStrategy;
  outlook2027: Outlook2027;

  // Players
  politicalLeadership: PoliticalLeadership;
  politicalPlayers: PoliticalPlayers;

  // Intelligence
  intelligenceGaps: IntelligenceGaps;
  intelligenceSection: IntelligenceSection;

  // Quality
  dataQuality: DataQuality;

  // Deep Research
  deepResearch?: DeepResearchData;
  mainDossier?: MainDossierData;
}

// Named exports for combined dossiers
export interface AC106AmargarhMainDossier extends MainDossierData {}
export interface AC106AmargarhDeepResearch extends DeepResearchData {}
export interface AC106AmargarhDossierComplete extends AC106AmargarhTypes {}
