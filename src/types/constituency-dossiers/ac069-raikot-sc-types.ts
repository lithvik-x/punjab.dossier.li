/**
 * AC069-Raikot-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC069-Raikot-SC.md, AC069-Raikot-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "SC" | "ST" | "General" | "BC";
  reservedStatus: "Reserved" | "General";
  date: string;
}

export interface ConstituencyOverview {
  description: string;
  parliamentaryConstituency: string;
  areaCharacter: string;
}

export interface GeographicProfile {
  location: string;
  borders: string;
  keyTowns: string[];
  areaCharacter: string;
  economy: string[];
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginVotes: number;
  runnerUp: string;
  runnerUpParty: string;
  resultType: string;
  status: "verified" | "needs_verification";
}

export interface HistoricalPattern {
  trend: string;
  traditionalStrongparty: string;
  aapGains: string;
  marginAnalysis: string;
}

export interface ElectoralHistory {
  year: number;
  winner: string;
  party: string;
  margin: string;
  keyFactor: string;
  status: "verified" | "needs_verification";
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  historicalPattern: HistoricalPattern;
  marginAnalysis: ElectoralHistory[];
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface SCDemographics {
  concentration: string;
  dominantCommunities: string[];
  communityBreakdown: {
    community: string;
    status: "Largest" | "Significant" | "Present" | "Noted";
  }[];
}

export interface OtherCommunities {
  jatSikh: string;
  obc: string;
}

export interface CasteComposition {
  scDemographics: SCDemographics;
  otherCommunities: OtherCommunities;
}

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  christian: string;
  muslim: string;
}

export interface PunjabSCDemographics {
  scPopulation: string;
  mazhabiSikh: string;
  ramdasiaRavidassia: string;
}

export interface Demographics {
  casteComposition: CasteComposition;
  religiousComposition: ReligiousComposition;
  punjabScDemographics: PunjabSCDemographics;
  urbanRuralComposition: {
    character: string;
    scPopulation: string;
    economy: string[];
  };
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface LocalIssues {
  primaryIssues: KeyLocalIssue[];
  count: number;
}

export interface IssueAnalysis {
  category: string;
  issues: string[];
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentStatus: {
    result2022: string;
    margin: string;
    gapToClose: string;
    historicalBase: string;
  };
  keyChallenges: string[];
  opportunities: string[];
}

export interface StrategicPosition {
  congress: CongressStrategicPosition;
}

// ============================================================================
// RECOMMENDED CANDIDATE PROFILE
// ============================================================================

export interface CandidateProfile {
  idealCandidate: {
    caste: string;
    subCaste: string;
    background: string[];
    profile: string;
    priority: string[];
  };
  selectionPriorities: string[];
  candidateAttributes: string[];
}

export interface RecommendedCandidate {
  profile: CandidateProfile;
  selectionPriorities: string[];
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  vulnerability: string;
  title: string;
  narrative: string[];
}

export interface AttackLines {
  vulnerabilities: AttackLine[];
  congressNarrative: string[];
  keyMessage: string;
}

export interface AAPVulnerabilities {
  welfare: string;
  drugCrisis: string;
  education: string;
  land: string;
  representation: string;
}

// ============================================================================
// MARGIN ANALYSIS
// ============================================================================

export interface MarginEntry {
  year: number;
  winner: string;
  margin: string;
  marginVotes?: number;
  keyFactor: string;
}

export interface MarginAnalysis {
  entries: MarginEntry[];
  notes: string[];
}

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

export interface ResearchMetadata {
  dossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: "PARTIALLY VERIFIED" | "VERIFIED" | "NEEDS VERIFICATION";
}

export interface ConstituencyProfile {
  basicDetails: {
    assemblyConstituencyNo: number;
    district: string;
    region: string;
    category: string;
    parliamentaryConstituency: string;
  };
  geographicBoundaries: GeographicProfile;
}

export interface VoterTurnout {
  2022: string;
  stateAverage: string;
  status: "verified" | "needs_verification";
}

export interface PartyPerformance {
  year: number;
  aap: string;
  inc: string;
  sad: string;
  notes: string;
}

export interface PoliticalLandscape {
  currentMla: {
    name: string;
    party: string;
    status: "verified" | "needs_verification";
  };
  partyPerformance: PartyPerformance[];
}

export interface DeepElectoralHistory {
  entries: {
    year: number;
    winner: string;
    party: string;
    margin: string;
    status: "verified" | "needs_verification";
  }[];
}

export interface IntelligenceGap {
  item: string;
  status: "critical" | "important" | "minor";
}

export interface IntelligenceGaps {
  criticalMissingData: IntelligenceGap[];
}

export interface DeepResearchData {
  metadata: ResearchMetadata;
  executiveSummary: string;
  constituencyProfile: ConstituencyProfile;
  voterTurnout: VoterTurnout;
  keyIssues: IssueAnalysis;
  politicalLandscape: PoliticalLandscape;
  electoralHistory: DeepElectoralHistory;
  intelligenceGaps: IntelligenceGaps;
  recommendations: {
    forCongress: {
      candidate: string;
      focus: string[];
      outreach: string;
      differentiation: string;
    };
  };
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete";
  verificationNeeded: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC069RaikotSCTypes {
  // Identity
  identity: ConstituencyIdentity;
  overview: ConstituencyOverview;

  // Election Results
  electionHistory: ElectionHistory;

  // Demographics
  demographics: Demographics;

  // Issues
  localIssues: LocalIssues;

  // Strategy
  strategicPosition: StrategicPosition;
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;

  // Analysis
  marginAnalysis: MarginAnalysis;
  notes: string[];

  // Deep Research
  deepResearch: DeepResearchData;

  // Quality
  dataQuality: DataQuality;
}

// Main Dossier Type Alias
export type AC069RaikotDossier = AC069RaikotSCTypes;
