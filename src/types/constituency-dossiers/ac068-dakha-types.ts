/**
 * AC068-Dakha Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC068-Dakha.md, AC068-Dakha-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  date: string;
}

export interface ConstituencyOverview {
  description: string;
  areaCharacter: string;
  parliamentarySegment: string;
}

export interface GeographicBoundaries {
  bordering: string;
  keyTowns: string[];
}

export interface UrbanRuralComposition {
  type: string;
  economy: string[];
  ruralInfrastructureStatus: "verified" | "needs_verification";
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  runnerUp: string;
  runnerUpParty: string;
  margin: string;
  marginStatus: "verified" | "needs_verification";
  totalCandidates: number;
}

export interface VoterTurnout {
  turnout2022: string;
  turnoutStatus: "verified" | "needs_verification";
  stateAverage: string;
}

export interface HistoricalPattern {
  traditionalParties: string;
  breakthrough: string;
  contestType: string;
}

export interface ElectoralHistoryEntry {
  year: number;
  winner: string;
  party: string;
  margin: string;
  marginStatus: "verified" | "needs_verification";
}

export interface PartyPerformanceTrend {
  year: number;
  sad: string;
  aap: string;
  inc: string;
  notes: string;
}

export interface CompetitiveLandscape2027 {
  keyContenders: string[];
  strategicNotes: string[];
}

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

export interface CasteDemographics {
  jathSikh: string;
  sc: string;
  obc: string;
  upperCastes: string;
  other: string;
}

export interface KeyCommunities {
  name: string;
  description: string;
  politicalSignificance: string;
}

export interface ReligiousComposition {
  sikh: string;
  hindu: string;
}

export interface DemographicsDeep {
  populationCensus2011: string;
  casteCompositionStatus: "verified" | "needs_verification";
  casteCompositionLudhianaRef: CasteDemographics;
  religiousComposition: ReligiousComposition;
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface KeyIssues {
  localIssues: LocalIssue[];
  primaryIssues: string[];
}

export interface AgriculturalDistress {
  issues: string[];
}

export interface KeyIssuesGrievances {
  drugMenace: string;
  agriculturalDistress: AgriculturalDistress;
  unemployment: string;
  ruralInfrastructure: string;
}

// ============================================================================
// POLITICAL LEADERSHIP
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  term: string;
}

export interface LocalInfluencers {
  status: "verified" | "needs_verification";
  influencers: string[];
}

export interface PoliticalLeadership {
  currentMLA: CurrentMLA;
  localInfluencers: LocalInfluencers;
  politicalSignificance: string;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressCurrentStatus {
  position2022: string;
  historicalStanding: string;
  analysis: string;
}

export interface CongressChallenges {
  challenges: string[];
}

export interface CongressOpportunities {
  opportunities: string[];
}

export interface CongressStrategicPosition {
  currentStatus: CongressCurrentStatus;
  challenges: CongressChallenges;
  opportunities: CongressOpportunities;
}

// ============================================================================
// RECOMMENDED CANDIDATE PROFILE
// ============================================================================

export interface IdealCandidate {
  caste: string;
  background: string;
  profile: string;
  connect: string;
  priority: string;
}

export interface SelectionPriorities {
  priorities: string[];
}

export interface RecommendedCandidateProfile {
  idealCandidate: IdealCandidate;
  selectionPriorities: SelectionPriorities;
}

// ============================================================================
// ATTACK LINES AGAINST AAP
// ============================================================================

export interface AttackVulnerabilities {
  vulnerabilities: string[];
}

export interface CongressNarrative {
  narratives: string[];
}

export interface AttackLines {
  vulnerabilities: AttackVulnerabilities;
  congressNarrative: CongressNarrative;
}

// ============================================================================
// COMPETITIVE LANDSCAPE
// ============================================================================

export interface KeyContender {
  party: string;
  position: string;
  notes: string;
}

export interface StrategicConsiderations {
  considerations: string[];
}

export interface CompetitiveLandscape {
  keyContenders: KeyContender[];
  strategicConsiderations: StrategicConsiderations;
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface IntelligenceGap {
  item: string;
  verified: boolean;
}

export interface IntelligenceGaps {
  gaps: IntelligenceGap[];
}

// ============================================================================
// DATA SOURCE TRACKING
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
  dossierId: string;
  topic: string;
  tier: number;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: string;
  researchStatus: ResearchStatus;
}

// ============================================================================
// NOTES
// ============================================================================

export interface ConstituencyNotes {
  notes: string[];
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  summary: string;
}

// ============================================================================
// CONSTITUENCY PROFILE
// ============================================================================

export interface ConstituencyProfile {
  basicDetails: ConstituencyIdentity;
  geographicBoundaries: GeographicBoundaries;
  urbanRuralComposition: UrbanRuralComposition;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC068DakhaTypes {
  // Identity & Overview
  identity: ConstituencyIdentity;
  overview: ConstituencyOverview;
  constituencyProfile: ConstituencyProfile;
  executiveSummary: ExecutiveSummary;

  // Election Results
  electionResult2022: ElectionResult2022;
  historicalPattern: HistoricalPattern;
  electoralHistory: ElectoralHistoryEntry[];
  partyPerformanceTrend: PartyPerformanceTrend[];
  voterTurnout: VoterTurnout;

  // Demographics
  demographics: DemographicsDeep;
  casteDemographics: CasteDemographics;
  keyCommunities: KeyCommunities[];

  // Issues
  keyIssues: KeyIssues;
  keyIssuesGrievances: KeyIssuesGrievances;
  localIssues: LocalIssue[];

  // Political Leadership
  politicalLeadership: PoliticalLeadership;

  // Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLines;
  recommendationsForCongress: string[];

  // Competitive Landscape
  competitiveLandscape2027: CompetitiveLandscape;
  competitiveLandscape: CompetitiveLandscape;

  // Intelligence
  intelligenceGaps: IntelligenceGaps;

  // Data Quality
  dataQuality: DataQuality;

  // Notes
  constituencyNotes: ConstituencyNotes;
}
