/**
 * AC099 - Lehra Assembly Constituency Types
 * Tier 1: Basic Research Dossier
 * Tier 2: Deep Research Dossier
 */

// =============================================================================
// Research Metadata
// =============================================================================

export interface ResearchMetadata {
  taskId: string;
  topic: string;
  tier: 1 | 2;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED';
  dataCurrency: string;
}

// =============================================================================
// Constituency Identity
// =============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  type: 'General' | 'SC' | 'ST';
  lokSabhaSeat: string;
}

export interface GeographicContext {
  assemblyConstituencyNo: number;
  district: string;
  region: string;
  type: string;
  needsVerification: boolean;
}

// =============================================================================
// Election Results
// =============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  voteShare?: number;
  votes?: number;
  margin?: number;
  runnerUp?: string;
  totalElectors?: number;
  contestants?: number;
}

export interface ElectionResults {
  2022?: ElectionResult;
  2017?: ElectionResult;
  2012?: ElectionResult;
}

export interface DeepElectoralHistory2022 {
  candidate: string;
  party: string;
  status: string;
}

export interface DeepElectoralHistoryRunnerUp {
  candidate: string;
  party: string;
  needsVerification: boolean;
}

export interface DeepElectoralHistory {
  winner: DeepElectoralHistory2022;
  runnerUp: DeepElectoralHistoryRunnerUp;
  contestants: number;
  context: string;
}

// =============================================================================
// Demographics
// =============================================================================

export interface CasteComposition {
  sikhs: string;
  hindus: string;
  jatSikh: string;
  scPopulation: string;
  obc: string;
}

export interface CasteDemographicsComposition {
  typicalMalwaPattern: boolean;
  jatSikh: string;
  dalitSC: string;
  obc: string;
  hinduMuslim: string;
  needsVerification: boolean;
}

export interface ReligionBreakdown {
  sikhs: string;
  hindus: string;
}

export interface Demographics {
  totalElectors: string;
  voterTurnout: string;
  type: string;
}

// =============================================================================
// Voter Demographics
// =============================================================================

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout: string;
  ruralConstituency: boolean;
}

// =============================================================================
// Local Issues
// =============================================================================

export interface LocalIssue {
  priority: number;
  title: string;
  description: string;
}

export interface LocalIssues {
  issues: LocalIssue[];
}

export interface KeyLocalIssue {
  issue: string;
  description: string;
}

// =============================================================================
// Public Sentiment
// =============================================================================

export interface SentimentDriver {
  category: string;
  indicators: string[];
}

export interface PublicSentiment {
  drugCrisis: boolean;
  agrarianIssues: boolean;
  developmentGaps: boolean;
  employmentConcerns: boolean;
}

// =============================================================================
// Political Position
// =============================================================================

export interface CongressStrategicPosition {
  currentHolder: string;
  party: string;
  requirements: string[];
}

export interface CandidateProfile {
  profile: string;
  background: string;
  keyTraits: string;
  targetVoter: string;
}

export interface AttackLine {
  line: string;
}

export interface StrategicData {
  position: CongressStrategicPosition;
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLine[];
}

// =============================================================================
// Deep Research Types
// =============================================================================

export interface DeepResearchExecutiveSummary {
  description: string;
  winner: string;
  party: string;
  totalContestants: number;
}

export interface DeepConstituencyProfile {
  basicInformation: GeographicContext;
  geographicContext: GeographicContext;
}

export interface Deep2022ElectionResults {
  winner: DeepElectoralHistory2022;
  runnerUp: DeepElectoralHistoryRunnerUp;
  keyContestants: DeepElectoralHistory;
}

export interface DrugCrisis {
  regionAffected: boolean;
  youthAddictionConcern: boolean;
  deathsReported: boolean;
}

export interface AgrarianIssues {
  mspImplementation: boolean;
  groundwaterDepletion: boolean;
  stubbleManagement: boolean;
}

export interface Development {
  healthcareGaps: boolean;
  educationInfrastructure: boolean;
  employment: boolean;
}

export interface KeyIssuesAndGrievances {
  drugCrisis: DrugCrisis;
  agrarianIssues: AgrarianIssues;
  development: Development;
}

export interface PoliticalLeadership {
  currentMLA: {
    name: string;
    party: string;
    term: string;
  };
  keyPoliticalFigures: string;
  needsVerification: boolean;
}

export interface VoterOutreach {
  stateAverage: number;
  constituencySpecific: string;
  needsVerification: boolean;
}

export interface GovernmentSchemes {
  needsVerification: boolean;
}

export interface IntelligenceGap {
  item: string;
  needsVerification: boolean;
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

export interface ResearchPriority {
  priority: number;
  description: string;
}

export interface DeepResearchData {
  executiveSummary: DeepResearchExecutiveSummary;
  constituencyProfile: DeepConstituencyProfile;
  electionResults: Deep2022ElectionResults;
  casteDemographics: CasteDemographicsComposition;
  electoralTrends: {
    '2022Performance': {
      aapWon: boolean;
      contestants: number;
    };
    historicalPattern: string;
    needsVerification: boolean;
  };
  keyIssues: KeyIssuesAndGrievances;
  politicalLeadership: PoliticalLeadership;
  voterOutreach: VoterOutreach;
  governmentSchemes: GovernmentSchemes;
  attackLines: string[];
  intelligenceGaps: IntelligenceGaps;
  researchPriorities: ResearchPriority[];
}

// =============================================================================
// Main Dossier Types
// =============================================================================

export interface MainDossierData {
  researchMetadata: ResearchMetadata;
  basicInformation: ConstituencyIdentity;
  electionResults: ElectionResults;
  politicalSignificance: {
    shift: string;
    margin: string;
    ruralConstituency: boolean;
  };
  casteComposition: CasteComposition;
  voterDemographics: VoterDemographics;
  keyLocalIssues: LocalIssues;
  congressPosition: CongressStrategicPosition;
  recommendedCandidate: CandidateProfile;
  attackLines: AttackLine[];
  sources: string[];
}

// =============================================================================
// Complete Dossier Types
// =============================================================================

export interface AC099LehraDossierComplete {
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
}

export interface AC099LehraReference {
  taskId: string;
  topic: string;
  verificationStatus: 'VERIFIED' | 'PARTIALLY VERIFIED';
}

// =============================================================================
// Export all types
// =============================================================================

export type AC099LehraTypes = {
  ResearchMetadata: ResearchMetadata;
  ConstituencyIdentity: ConstituencyIdentity;
  GeographicContext: GeographicContext;
  ElectionResult: ElectionResult;
  ElectionResults: ElectionResults;
  DeepElectoralHistory2022: DeepElectoralHistory2022;
  DeepElectoralHistoryRunnerUp: DeepElectoralHistoryRunnerUp;
  DeepElectoralHistory: DeepElectoralHistory;
  CasteComposition: CasteComposition;
  CasteDemographicsComposition: CasteDemographicsComposition;
  ReligionBreakdown: ReligionBreakdown;
  Demographics: Demographics;
  VoterDemographics: VoterDemographics;
  LocalIssue: LocalIssue;
  LocalIssues: LocalIssues;
  KeyLocalIssue: KeyLocalIssue;
  SentimentDriver: SentimentDriver;
  PublicSentiment: PublicSentiment;
  CongressStrategicPosition: CongressStrategicPosition;
  CandidateProfile: CandidateProfile;
  AttackLine: AttackLine;
  StrategicData: StrategicData;
  DeepResearchExecutiveSummary: DeepResearchExecutiveSummary;
  DeepConstituencyProfile: DeepConstituencyProfile;
  Deep2022ElectionResults: Deep2022ElectionResults;
  DrugCrisis: DrugCrisis;
  AgrarianIssues: AgrarianIssues;
  Development: Development;
  KeyIssuesAndGrievances: KeyIssuesAndGrievances;
  PoliticalLeadership: PoliticalLeadership;
  VoterOutreach: VoterOutreach;
  GovernmentSchemes: GovernmentSchemes;
  IntelligenceGap: IntelligenceGap;
  IntelligenceGaps: IntelligenceGaps;
  ResearchPriority: ResearchPriority;
  DeepResearchData: DeepResearchData;
  MainDossierData: MainDossierData;
  AC099LehraDossierComplete: AC099LehraDossierComplete;
  AC099LehraReference: AC099LehraReference;
};
