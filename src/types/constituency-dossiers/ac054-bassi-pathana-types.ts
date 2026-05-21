/**
 * AC054-Bassi-Pathana Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC054-Bassi-Pathana.md, AC054-BassiPathana-deep.md
 */

// Verification status for data points
export type VerificationStatus = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: string;
  category: 'SC';
  lokSabhaSeat: string;
  date: string;
}

export interface ConstituencyBaseline {
  character: string;
  borderStatus: string;
  geographicProfile: string;
}

export interface ExecutiveSummary {
  overview: string;
  keyChallenge: string;
  opportunity: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  keyTrend: string;
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteComposition {
  scPopulation: string;
  sikh: string;
  hindu: string;
  other: string;
}

export interface SCSubGroups {
  mazhabiSikh: string;
  ramdasiaSikh: string;
  ravidasiaSikh: string;
  hinduSC: string;
}

export interface SCVoterDynamics {
  decisiveVoteBank: string;
  deraInfluence: string;
  villageLevelLeadership: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface ElectorateData {
  totalElectors: string;
  votesPolled: string;
  voterTurnout: string;
}

export interface VoterTurnoutTrend {
  year: number;
  turnoutPercent: string;
  notes: string;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string[];
}

export interface LocalIssues {
  issues: LocalIssue[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface AdministrativeStructure {
  district: string;
  dc: string;
  subDivision: string;
  mla: string;
  mlaParty: string;
  mlaTenure: string;
}

export interface ActiveScheme {
  name: string;
}

export interface GovernmentSchemes {
  schemes: ActiveScheme[];
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  party: string;
  description: string[];
}

export interface Influencers {
  political: PoliticalInfluencer[];
  congressLeaders: string[];
  bspLeaders: string;
}

// ============================================================================
// AAP VULNERABILITY
// ============================================================================

export interface AAPVulnerabilityItem {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AAPVulnerability {
  vulnerabilities: AAPVulnerabilityItem[];
  summary: string[];
}

// ============================================================================
// CONGRESS STRATEGY
// ============================================================================

export interface CongressPosition {
  currentPosition: string;
  challenge: string;
  timeline: string;
}

export interface EngagementPhase {
  phase: string;
  duration: string;
  activities: string[];
}

export interface CongressStrategy {
  currentPosition: CongressPosition;
  phases: EngagementPhase[];
}

export interface DeraInfluence {
  deraSachaSauda: string;
  radhaSoami: string;
  influenceOnSCVotes: string;
}

// ============================================================================
// CANDIDATE RECOMMENDATION
// ============================================================================

export interface CandidateProfile {
  caste: string;
  background: string;
  age: string;
  network: string;
  quality: string;
  family: string;
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface PartyVoteShare {
  party: string;
  sharePercent: string;
  votesEstimated: string;
}

export interface CongressGapAnalysis {
  votesNeeded: string;
  bspVotersToTarget: string;
  scFlipVotersNeeded: string;
}

export interface VoteShareAnalysis {
  parties: PartyVoteShare[];
  gapAnalysis: CongressGapAnalysis;
}

// ============================================================================
// STRATEGIC RECOMMENDATIONS
// ============================================================================

export interface PrioritySegment {
  segment: string;
  rationale: string;
}

export interface StrategicNarrative {
  narrative: string;
}

export interface StrategicBlueprint {
  narratives: StrategicNarrative[];
  prioritySegments: PrioritySegment[];
}

export interface Recommendations {
  priority: string;
  candidate: string;
  timeline: string;
  narrative: string;
  marginReversalPotential: string;
}

// ============================================================================
// 2027 PROJECTION
// ============================================================================

export interface Projection2027 {
  tier: string;
  priority: string;
  margin: string;
  sustainedEffortRequired: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  category: string;
  description: string;
}

export interface AttackLines {
  lines: AttackLine[];
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface DataSource {
  name: string;
}

export interface DataQuality {
  sources: DataSource[];
  verificationStatus: string;
  dataCurrency: string;
  compiledDate: string;
  status: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC054BassiPathanaTypes {
  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;
  executiveSummary: ExecutiveSummary;

  // Demographics
  casteComposition: CasteComposition;
  scSubGroups: SCSubGroups;
  scVoterDynamics: SCVoterDynamics;
  electorateData: ElectorateData;
  voterTurnoutTrend: VoterTurnoutTrend[];

  // Elections
  electionHistory: ElectionHistory;

  // Local Issues
  localIssues: LocalIssues;

  // Governance
  administrativeStructure: AdministrativeStructure;
  governmentSchemes: GovernmentSchemes;

  // Influencers
  influencers: Influencers;
  deraInfluence: DeraInfluence;

  // AAP Analysis
  aapVulnerability: AAPVulnerability;

  // Congress Strategy
  congressStrategy: CongressStrategy;

  // Candidate
  candidateProfile: CandidateProfile;

  // Vote Analysis
  voteShareAnalysis: VoteShareAnalysis;
  projection2027: Projection2027;

  // Strategic
  strategicBlueprint: StrategicBlueprint;
  recommendations: Recommendations;
  attackLines: AttackLines;

  // Quality
  dataQuality: DataQuality;
}
