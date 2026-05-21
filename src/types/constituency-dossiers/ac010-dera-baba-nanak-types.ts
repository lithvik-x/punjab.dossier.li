/**
 * TypeScript types for AC010-Dera Baba Nanak constituency dossier
 * Generated through 6-cycle enhancement pipeline
 */

// =============================================================================
// CORE IDENTIFICATION
// =============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  nameDerivations?: string[];
  parliamentarySegment: string;
  district: string;
  region: string;
  type: 'GEN' | 'SC' | 'ST' | 'OBC';
  area: string;
  significance: string;
}

// =============================================================================
// HISTORICAL & GEOGRAPHIC
// =============================================================================

export interface HistoricalContext {
  religiousSignificance: string;
  kartarpurCorridor: KartarpurCorridor;
  movementHistory?: string;
}

export interface KartarpurCorridor {
  description: string;
  inauguration: string;
  inauguratedBy: string;
  kartarpurSahib: string;
  strategicImportance: string;
  phase2?: Phase2Development;
}

export interface Phase2Development {
  status: string;
  yatriFacilities?: string;
  hotels?: string;
  retail?: string;
  yatriUnits?: number;
}

// =============================================================================

export interface GeographicInfo {
  borderArea: boolean;
  internationalBorder: string;
  kartarpurCorridor: boolean;
  agriculturalBelt: boolean;
}

// =============================================================================
// ECONOMIC PROFILE
// =============================================================================

export interface EconomicIdentity {
  primaryActivities: string[];
  employmentSources: string[];
  pilgrimageEconomy?: string;
  crops: string[];
  borderTrade?: string;
}

export interface SchemePenetration {
  pds: string;
  mgnrega?: string;
  pilgrimageSchemes?: string;
}

// =============================================================================
// SOCIO-CULTURAL
// =============================================================================

export interface SocioCulturalIdentity {
  language: string;
  dialect?: string;
  religiousComposition: ReligiousComposition;
  casteComposition?: CasteComposition;
  pilgrimageCommunity?: string;
}

export interface ReligiousComposition {
  sikh?: number;
  hindu?: number;
  others?: number;
}

export interface CasteComposition {
  jatSikh?: number;
  sc?: number;
  obc?: number;
  upperCaste?: number;
  minority?: number;
  other?: number;
}

// =============================================================================
// ADMINISTRATIVE SETUP
// =============================================================================

export interface AdministrativeSetup {
  municipalCouncil?: string;
  health?: string[];
  education?: string[];
  pilgrimageInfrastructure?: string;
}

// =============================================================================
// DEMOGRAPHICS
// =============================================================================

export interface Demographics {
  townPopulation?: string;
  ruralPopulation?: string;
  sexRatio?: string;
  literacy?: string;
  electoralRoll2022: ElectorateData;
  voterTurnout2024?: string;
}

export interface ElectorateData {
  totalElectors: number;
  note?: string;
  voterTurnout2022?: string;
}

// =============================================================================
// ELECTORAL HISTORY
// =============================================================================

export interface ElectoralHistory {
  elections: ElectionResult[];
  voterBehaviour?: VoterBehaviour;
}

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  votes?: number;
  votePercentage?: string;
  margin?: string;
  runnerUp?: string;
  runnerUpVotes?: number;
  runnerUpParty?: string;
  byeElection?: boolean;
}

export interface VoterBehaviour {
  turnout?: string;
  pilgrimageFactor?: string;
  swing?: string;
}

// =============================================================================
// PUBLIC SENTIMENT
// =============================================================================

export interface PublicSentiment {
  currentMLA?: CurrentMLA;
  expectations: string[];
  keyIssues: KeyIssue[];
}

export interface CurrentMLA {
  name: string;
  party: string;
  electionYear: number;
  termStatus?: string;
}

export interface KeyIssue {
  issue: string;
  description?: string;
  segment?: string;
}

// =============================================================================
// GOVERNANCE GAP
// =============================================================================

export interface GovernanceGap {
  pilgrimageInfrastructure?: PilgrimageInfrastructure;
  borderIssues?: BorderIssues;
}

export interface PilgrimageInfrastructure {
  kartarpurCorridorStatus?: string;
  yatriFacilities?: string;
  currentFacilities?: string;
}

export interface BorderIssues {
  securityConcerns?: string;
  smuggling?: string[];
  policeAlert?: string;
}

// =============================================================================
// LOCAL ISSUES
// =============================================================================

export interface IssueVoterMapping {
  issue: string;
  segment: string;
}

// =============================================================================
// INFLUENCERS & POWER STRUCTURE
// =============================================================================

export interface Influencers {
  religious?: ReligiousInfluencer[];
  political: PoliticalInfluencer[];
  casteEquations?: string;
}

export interface ReligiousInfluencer {
  group: string;
  verificationStatus?: string;
}

export interface PoliticalInfluencer {
  name: string;
  role: string;
  party?: string;
  familyConnection?: string;
  verificationStatus?: string;
  electionYear?: number;
}

// =============================================================================
// SWOT ANALYSIS
// =============================================================================

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// =============================================================================
// STRATEGIC BLUEPRINT
// =============================================================================

export interface StrategicBlueprint {
  narratives: string[];
  prioritySegments: PrioritySegment[];
}

export interface PrioritySegment {
  segment: string;
  priority: number;
}

// =============================================================================
// COURSE-CHANGING FACTORS
// =============================================================================

export interface CourseChangingFactors {
  politicalShocks?: string[];
  externalShocks?: string[];
}

// =============================================================================
// CANDIDATE PROFILE
// =============================================================================

export interface RecommendedCandidate {
  profile: string;
  casteConsideration?: string;
  keyQualities: string[];
}

// =============================================================================
// ATTACK LINES
// =============================================================================

export interface AttackLines {
  crisis?: string[];
  tourismPotential?: string[];
  borderDevelopment?: string[];
  agriculturalDistress?: string[];
}

// =============================================================================
// CONGRESS STRATEGIC POSITION
// =============================================================================

export interface CongressStrategicPosition {
  incumbentStatus: string;
  politicalInfluence?: string;
  marginAnalysis?: string;
  strategyFocus?: string;
}

// =============================================================================
// DATA SOURCE
// =============================================================================

export interface DataSource {
  sources: string[];
  researchStatus: string;
  note?: string;
}

// =============================================================================
// MASTER TYPE - Complete Constituency Dossier
// =============================================================================

export interface DeraBabaNanakDossier {
  // Identity
  identity: ConstituencyIdentity;

  // Historical & Geographic
  historicalContext: HistoricalContext;
  geographicInfo: GeographicInfo;

  // Economic
  economicIdentity: EconomicIdentity;
  schemePenetration: SchemePenetration;

  // Socio-Cultural
  socioCultural: SocioCulturalIdentity;

  // Administrative
  administrativeSetup: AdministrativeSetup;

  // Demographics
  demographics: Demographics;

  // Electoral
  electoralHistory: ElectoralHistory;

  // Public Sentiment
  publicSentiment: PublicSentiment;

  // Governance
  governanceGap: GovernanceGap;

  // Local Issues
  issueVoterMapping: IssueVoterMapping[];

  // Influencers
  influencers: Influencers;

  // SWOT
  swot: SWOTAnalysis;

  // Strategy
  strategicBlueprint: StrategicBlueprint;

  // Course-Changing Factors
  courseChangingFactors?: CourseChangingFactors;

  // Candidate
  recommendedCandidate?: RecommendedCandidate;
  attackLines?: AttackLines;

  // Congress Strategy
  congressStrategicPosition?: CongressStrategicPosition;

  // Metadata
  dataSource: DataSource;
}
