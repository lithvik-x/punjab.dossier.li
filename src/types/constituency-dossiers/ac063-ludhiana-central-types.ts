/**
 * AC063-Ludhiana Central Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC063-Ludhiana-Central.md, AC063-LudhianaCentral-deep.md
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
  lokSabhaSeat: string;
  areaCharacter: string;
  borderStatus: string;
}

export interface GeographicProfile {
  urbanCore: string;
  oldCityArea: string;
  denseCommercialZones: string;
  wholesaleMarkets: string;
  residentialCumCommercial: string;
}

export interface ConstituencyOverview {
  summary: string;
  historicalCompetition: string;
  currentHolder: string;
  party: string;
}

export interface HistoricalContext {
  "2017Winner": string;
  "2017Votes": string;
  "2012Pattern": string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  keyContestants: string;
  totalElectors: string;
  voterTurnout: string;
  votesPolled: string;
  voteShare?: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  votes: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  pattern: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  historicalTrend: string;
}

export interface VoteShareBreakdown {
  party: string;
  estimatedShare: string;
  estimatedVotes: string;
}

export interface VoteShareAnalysis {
  "2022Breakdown": VoteShareBreakdown[];
  margin: string;
  congressGap: string;
  recoveryPotential: string;
}

// ============================================================================
// CASTE & DEMOGRAPHICS
// ============================================================================

export interface CasteCategory {
  name: string;
  percentage?: string;
  concentration: string;
  notes?: string;
}

export interface CasteComposition {
  categories: CasteCategory[];
  totalSCPercentage: string;
  keyCommunities: string[];
}

export interface VoterDemographics {
  urbanDensity: string;
  voterDensity: string;
  residentialCommercial: string;
}

export interface PopulationComposition {
  category: string;
  estimatedPercentage: string;
  notes: string;
}

export interface DemographicDeepDive {
  populationComposition: PopulationComposition[];
  keyCommunities: string[];
  oldCityFamilies: string;
}

// ============================================================================
// VOTER ECOSYSTEM
// ============================================================================

export interface ElectorateData2022 {
  totalElectors: string;
  voterTurnout: string;
}

export interface VoterTurnoutTrend {
  year: number;
  turnoutPercentage: string;
  notes: string;
}

export interface VoterEcosystem {
  electorateData: ElectorateData2022;
  turnoutTrend: VoterTurnoutTrend[];
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  subIssues: string[];
  priority: string;
}

export interface IssueTaxonomy {
  category: string;
  issues: LocalIssue[];
}

export interface LocalIssues {
  topIssues: LocalIssue[];
  governanceIssues: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface AdministrativeStructure {
  district: string;
  dc: string;
  mc: string;
  mla: string;
  mlaParty: string;
  mlaTerm: string;
}

export interface MLAAssessment {
  name: string;
  strengths: string;
  performance: string;
  party: string;
}

export interface GovernanceAudit {
  administrativeStructure: AdministrativeStructure;
  mlaAssessment: MLAAssessment;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface PoliticalInfluencer {
  name: string;
  role: string;
  description: string;
  influence: string;
}

export interface MarketAssociation {
  name: string;
  concerns: string[];
  influence: string;
}

export interface PowerStructure {
  politicalInfluencers: PoliticalInfluencer[];
  marketAssociations: MarketAssociation[];
  oldCityFamilyNetwork: string;
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

export interface AAPVulnerabilityAnalysis {
  vulnerabilities: string[];
  weakPoints: AAPVulnerabilityItem[];
}

// ============================================================================
// CONGRESS STRATEGY
// ============================================================================

export interface CongressCurrentStatus {
  "2022Result": string;
  "2017Result": string;
  pattern: string;
}

export interface CongressChallenges {
  challenges: string[];
}

export interface CongressOpportunities {
  opportunities: string[];
}

export interface CongressStrategy {
  currentStatus: CongressCurrentStatus;
  challenges: CongressChallenges;
  opportunities: CongressOpportunities;
}

export interface CongressStrategicBlueprint {
  phases: {
    phase: string;
    timeline: string;
    activities: string[];
  }[];
  candidateSelection: CandidateSelection;
}

// ============================================================================
// CANDIDATE RECOMMENDATION
// ============================================================================

export interface CandidateAttribute {
  attribute: string;
  requirement: string;
}

export interface CandidateSelection {
  idealCaste: string;
  background: string;
  ageRange?: string;
  profile: string;
  nameRecognition: string;
  networkRequirement: string;
  priorityCriteria: string[];
}

export interface RecommendedCandidate {
  profile: CandidateSelection;
  priorityApproach: string[];
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLines {
  vulnerabilities: string[];
  narratives: string[];
}

export interface AttackNarratives {
  narrative: string;
}

// ============================================================================
// STRATEGIC NARRATIVES
// ============================================================================

export interface CongressNarratives {
  narratives: string[];
}

export interface PrioritySegment {
  segment: string;
  rationale: string;
}

export interface StrategicBlueprint {
  narratives: CongressNarratives[];
  prioritySegments: PrioritySegment[];
  oldCityCoalition: string;
}

// ============================================================================
// POLITICAL STRATEGY
// ============================================================================

export interface PoliticalStrategy {
  congressStrategy: CongressStrategy;
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
  congressNarratives: CongressNarratives[];
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SWOTStrengths {
  strengths: string[];
}

export interface SWOTWeaknesses {
  weaknesses: string[];
}

export interface SWOTOpportunities {
  opportunities: string[];
}

export interface SWOTThreats {
  threats: string[];
}

export interface SwotAnalysis {
  strengths: SWOTStrengths;
  weaknesses: SWOTWeaknesses;
  opportunities: SWOTOpportunities;
  threats: SWOTThreats;
}

// ============================================================================
// DATA QUALITY & SOURCES
// ============================================================================

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete" | "PARTIALLY_VERIFIED";
  verificationNeeded: string[];
  notes?: string;
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
  compiled: string;
  currentStatus: string;
}

// ============================================================================
// 2027 PROJECTION
// ============================================================================

export interface PriorityRanking {
  tier: string;
  priority: string;
  urbanCore: string;
  betterMargin?: string;
}

export interface VoteProjection {
  analysis2022: VoteShareAnalysis;
  projection2027: PriorityRanking;
  marginAnalysis: string;
}

export interface CongressPosition {
  currentPosition: string;
  opportunity: string;
  challenge: string;
}

export interface WinningStrategy {
  phase1: {
    activities: string[];
  };
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC063LudhianaCentralTypes {
  // Identity
  identity: ConstituencyIdentity;
  geographicProfile: GeographicProfile;
  overview: ConstituencyOverview;
  historicalContext: HistoricalContext;

  // Elections
  electionHistory: ElectionHistory;
  voteShareAnalysis: VoteShareAnalysis;

  // Demographics
  casteComposition: CasteComposition;
  voterDemographics: VoterDemographics;
  demographicDeepDive: DemographicDeepDive;

  // Voter Ecosystem
  voterEcosystem: VoterEcosystem;

  // Issues
  localIssues: LocalIssues;
  issueTaxonomy: IssueTaxonomy[];

  // Governance
  governanceAudit: GovernanceAudit;

  // Power Structure
  powerStructure: PowerStructure;

  // AAP Analysis
  aapVulnerability: AAPVulnerabilityAnalysis;

  // Strategy
  politicalStrategy: PoliticalStrategy;
  congressBlueprint: CongressStrategicBlueprint;
  swotAnalysis: SwotAnalysis;
  strategicBlueprint: StrategicBlueprint;

  // 2027
  voteProjection: VoteProjection;

  // Data Quality
  dataQuality: DataQuality;

  // Additional metadata
  notes: string[];
}
