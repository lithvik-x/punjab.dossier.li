/**
 * TypeScript types for AC009-Fatehgarh-Churian constituency dossier
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
  fort?: string;
  borderLocation: string;
  movementHistory?: string;
  borderSecurity?: string;
}

export interface GeographicInfo {
  borderArea: boolean;
  agriculturalBelt: boolean;
  proximityToPakistan: boolean;
}

// =============================================================================
// ECONOMIC PROFILE
// =============================================================================

export interface EconomicIdentity {
  primaryActivities: string[];
  employmentSources: string[];
  crops: string[];
  borderTrade?: string;
}

export interface SchemePenetration {
  pds: string;
  mgnrega?: string;
  borderArea?: string;
}

// =============================================================================
// SOCIO-CULTURAL
// =============================================================================

export interface SocioCulturalIdentity {
  language: string;
  dialect?: string;
  religiousComposition: ReligiousComposition;
  casteComposition?: CasteComposition;
  borderCommunity?: string;
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
  rural: string[];
  health?: string[];
  education?: string[];
}

// =============================================================================
// DEMOGRAPHICS
// =============================================================================

export interface Demographics {
  population?: string;
  electors2022: ElectorateData;
  sexRatio?: string;
  literacy?: string;
}

export interface ElectorateData {
  totalElectors: number;
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
}

export interface VoterBehaviour {
  turnout?: string;
  swingPattern?: string;
  borderFactor?: string;
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
  borderIssues?: BorderIssues;
  ruralServices?: RuralServices;
}

export interface BorderIssues {
  security?: string;
  smuggling: string[];
  connectivity?: string;
}

export interface RuralServices {
  healthEducation?: string;
  mgnrega?: string;
}

// =============================================================================
// ISSUE-VOTER MAPPING
// =============================================================================

export interface IssueVoterMapping {
  issue: string;
  segment: string;
}

// =============================================================================
// INFLUENCERS & POWER STRUCTURE
// =============================================================================

export interface Influencers {
  political: PoliticalInfluencer[];
  community: CommunityInfluencer[];
}

export interface PoliticalInfluencer {
  name: string;
  role: string;
  party?: string;
  familyConnection?: string;
  verificationStatus?: string;
}

export interface CommunityInfluencer {
  group: string;
  verificationStatus?: string;
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
  distress?: string[];
  neglect?: string[];
  exodus?: string[];
}

// =============================================================================
// CONGRESS STRATEGIC POSITION
// =============================================================================

export interface CongressStrategicPosition {
  incumbentStatus: string;
  marginAnalysis: string;
  strategyFocus: string;
}

// =============================================================================
// DATA SOURCE
// =============================================================================

export interface DataSource {
  sources: string[];
  researchStatus: string;
}

// =============================================================================
// MASTER TYPE - Complete Constituency Dossier
// =============================================================================

export interface FatehgarhChurianDossier {
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

  // Candidate
  recommendedCandidate?: RecommendedCandidate;
  attackLines?: AttackLines;

  // Congress Strategy
  congressStrategicPosition?: CongressStrategicPosition;

  // Metadata
  dataSource: DataSource;
}
