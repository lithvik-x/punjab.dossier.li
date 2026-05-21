/**
 * AC096-Mansa Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC096-Mansa.md, AC096-Mansa-deep.md
 */

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
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  parliamentarySegment: string;
  date: string;
}

// ============================================================================
// GEOGRAPHIC PROFILE
// ============================================================================

export interface GeographicProfile {
  location: string;
  region: string;
  district: string;
  areaCharacter: string;
  economy: string;
}

export interface GeographicContext {
  cottonBelt: string;
  ruralUrbanComposition: {
    rural: string;
    urban: string;
  };
  districtPopulation: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  votes: number;
  voteShare: string;
  margin: number;
  marginDescription: string;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: number;
  runnerUpVoteShare: string;
  totalElectors: string;
  turnout: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  votes: number;
  voteShare: string;
  margin: number;
  runnerUp: string;
  runnerUpParty: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2012 {
  winner: string;
  status: "not_available" | "verified" | "needs_verification";
}

export interface ElectionResults {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  historicalPattern: string;
}

export interface ElectoralHistory {
  year: number;
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  status: "verified" | "needs_verification" | "not_available";
}

// ============================================================================
// CASTE & DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  sikh: string;
  hindu: string;
  jatSikh: string;
  sc: string;
  obc: string;
}

export interface DistrictDemographics {
  totalPopulation: string;
  male: string;
  female: string;
  urban: string;
  rural: string;
  sexRatio: string;
}

export interface CommunityBreakdown {
  name: string;
  description: string;
}

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  muslim: string;
  christian: string;
}

export interface Demographics {
  districtLevel: DistrictDemographics;
  casteComposition: CasteComposition;
  religiousComposition: ReligiousComposition;
  communityBreakdown: CommunityBreakdown[];
}

// ============================================================================
// VOTER DEMOGRAPHICS
// ============================================================================

export interface VoterDemographics {
  totalElectors: string;
  voterTurnout: string;
  ruralCharacter: string;
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface LocalIssue extends KeyLocalIssue {}

export interface PrimaryIssues {
  issues: LocalIssue[];
}

export interface SecondaryIssues {
  issues: string[];
}

export interface KeyLocalIssues {
  primaryIssues: PrimaryIssues;
  secondaryIssues: SecondaryIssues;
}

// ============================================================================
// PUBLIC SENTIMENT & GOVERNANCE
// ============================================================================

export interface SentimentDriver {
  issue: string;
  sentiment: string;
}

export interface GovernanceGap {
  area: string;
  description: string;
}

export interface PublicSentiment {
  drugCrisis: string;
  agrarianDistress: string;
  governanceFailures: string;
  employment: string;
}

// ============================================================================
// POLITICAL DYNAMICS
// ============================================================================

export interface PoliticalSignificance {
  mooseWalaSeat: string;
  aapVictory: string;
  districtHQ: string;
  cottonBelt: string;
}

export interface CongressStrategicPosition {
  currentStatus: {
    position2022: string;
    historicalBase: string;
    challenge: string;
  };
  keyChallenges: string[];
  opportunities: string[];
  strategicConsiderations: string[];
}

export interface RecommendedCandidateProfile {
  ideal: {
    caste: string;
    background: string;
    keyTraits: string;
    targetVoter: string;
  };
}

export interface AttackLine {
  category: string;
  description: string;
}

export interface AttackLinesAgainstAAP {
  vulnerabilities: string[];
  narratives: string[];
}

export interface StrategicData {
  politicalSignificance: PoliticalSignificance;
  congressPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLinesAgainstAAP;
}

// ============================================================================
// DRUG CRISIS DATA (Deep Research)
// ============================================================================

export interface DrugCrisis {
  severity: string;
  impactOnYouth: string;
  statisticalEvidence: string;
  governmentResponse: string;
  regionalContext: string;
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
  verificationStatus: string;
}

export interface ExecutiveSummary {
  overview: string;
  "2022Result": string;
  constituencyCharacter: string;
}

export interface ConstituencyProfile {
  basicDetails: {
    assemblyConstituencyNo: number;
    district: string;
    region: string;
    lokSabhaSeat: string;
    type: string;
  };
  geographicContext: GeographicContext;
}

export interface CasteDemographicsMalwa {
  jatSikh: string;
  dalitSc: string;
  obc: string;
  otherBackward: string;
}

export interface ElectoralTrends {
  2022: {
    turnout: string;
    aapWon: string;
    congressLegacy: string;
  };
  historicalPattern: string;
}

export interface KeyIssues {
  drugCrisis: DrugCrisis;
  agrarianDistress: {
    cottonBelt: string;
    mspProcurement: string;
    waterTable: string;
    indebtedness: string;
  };
  governanceChallenges: {
    employment: string;
    nriEmigration: string;
    healthcare: string;
    education: string;
  };
}

export interface CurrentMLA {
  name: string;
  party: string;
  position: string;
  term: string;
}

export interface KeyPoliticalFigures {
  moosesWala: {
    name: string;
    role: string;
    impact: string;
  };
}

export interface PoliticalDynamics {
  aapDominance: string;
  congressPresence: string;
  sadBjpImpact: string;
}

export interface VoterOutreach {
  voterTurnout2022: string;
  womenParticipation: string;
  nriVoters: string;
}

export interface GovernmentSchemes {
  central: string[];
  state: string[];
  aapInitiatives: {
    womenStipend: string;
    implementation: string;
  };
}

export interface IntelligenceGaps {
  criticalMissingData: string[];
}

export interface ResearchPriorities {
  priorities: string[];
}

export interface StrategicConsiderations {
  considerations: string[];
}

export interface DeepResearchData {
  metadata: ResearchMetadata;
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyProfile;
  demographics: Demographics;
  electoralTrends: ElectoralTrends;
  keyIssues: KeyIssues;
  politicalLeadership: {
    currentMLA: CurrentMLA;
    keyPoliticalFigures: KeyPoliticalFigures;
    politicalDynamics: PoliticalDynamics;
  };
  voterOutreach: VoterOutreach;
  governmentSchemes: GovernmentSchemes;
  intelligenceGaps: IntelligenceGaps;
  researchPriorities: ResearchPriorities;
  strategicConsiderations: StrategicConsiderations;
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface MainDossierData {
  header: ConstituencyHeader;
  constituencyOverview: string;
  identity: ConstituencyIdentity;
  geographicProfile: GeographicProfile;
  electionResults: ElectionResults;
  demographics: Demographics;
  voterDemographics: VoterDemographics;
  keyLocalIssues: KeyLocalIssue[];
  strategicData: StrategicData;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC096MansaCompleteDossier {
  header: ConstituencyHeader;
  identity: ConstituencyIdentity;
  geographicProfile: GeographicProfile;
  electionResults: ElectionResults;
  demographics: Demographics;
  voterDemographics: VoterDemographics;
  keyLocalIssues: KeyLocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  deepResearchData: DeepResearchData;
}

export interface AC096MansaTypes {
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
  completeDossier: AC096MansaCompleteDossier;
}

export type AC096MansaData = AC096MansaTypes;
