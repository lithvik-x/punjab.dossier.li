/**
 * AC064-Ludhiana West Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC064-Ludhiana-West.md, AC064-LudhianaWest-deep.md
 */

// ============================================================================
// DOCUMENT METADATA
// ============================================================================

export interface AC064DocumentMetadata {
  dossierId: string;
  researchDossierId?: string;
  topic: string;
  tier?: string;
  date: string;
  dataCurrency: string;
  sources: string[];
  verificationStatus: string;
  agent?: string;
  preparedFor?: string;
  classification?: string;
}

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface AC064ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  lokSabhaSeat: string;
  areaCharacter: string;
  borderStatus: string;
}

export interface AC064GeographicProfile {
  description: string;
  urbanCore: string;
  periUrban: string;
  ruralAreas: string;
  industrialInterface: string;
  villageUrbanInterface: string;
  keyCharacteristics: string[];
}

export interface AC064ExecutiveSummary {
  summary: string;
  politicalTransition: string;
  currentHolder: string;
  party: string;
  bypollContext: string;
}

// ============================================================================
// HISTORICAL CONTEXT
// ============================================================================

export interface AC064HistoricalResult {
  year: number;
  winner: string;
  party: string;
  margin?: string;
  marginNumeric?: number;
  keyContest?: string;
  votes?: string;
}

export interface AC064HistoricalContext {
  results: AC064HistoricalResult[];
  trendAnalysis: string;
  historicalPattern: string;
  marginTrend: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface AC064ElectionResult2022 {
  winner: string;
  party: string;
  margin: string;
  marginNumeric?: number;
  runnerUp: string;
  runnerUpParty?: string;
  totalElectors?: string;
  voterTurnout?: string;
  votesPolled?: string;
  voteShare?: string;
}

export interface AC064ElectionResult2017 {
  winner: string;
  party: string;
  votes: string;
  margin?: string;
}

export interface AC064Bypoll2025 {
  winner: string;
  party: string;
  context: string;
  turnout: string;
  note: string;
}

export interface AC064ElectionHistory {
  results2022: AC064ElectionResult2022;
  bypoll2025: AC064Bypoll2025;
  results2017: AC064ElectionResult2017;
  historicalTrend: string;
}

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

export interface AC064VoteShareEntry {
  party: string;
  estimatedShare: string;
  estimatedVotes: string;
  voteShareNumeric?: number;
}

export interface AC064VoteShareAnalysis {
  breakdown2022: AC064VoteShareEntry[];
  margin: string;
  marginNumeric: number;
  congressGap: string;
  targetVotes: string;
  pattern: string;
  recoveryPotential: string;
}

export interface AC064CongressPosition {
  currentPosition: string;
  opportunity: string;
  challenge: string;
}

// ============================================================================
// CASTE & DEMOGRAPHICS
// ============================================================================

export interface AC064CasteCategory {
  name: string;
  estimatedPercentage: string;
  notes?: string;
  concentration?: string;
}

export interface AC064CasteComposition {
  categories: AC064CasteCategory[];
  totalSCPercentage: string;
  upperCastesPercentage: string;
  obcPercentage: string;
  keyCommunities: string[];
}

export interface AC064KeyCommunity {
  community: string;
  location: string;
  notes?: string;
}

export interface AC064DemographicDeepDive {
  populationComposition: AC064CasteCategory[];
  keyCommunities: AC064KeyCommunity[];
  mixedUrbanRural: string;
}

// ============================================================================
// VOTER ECOSYSTEM
// ============================================================================

export interface AC064ElectorateData {
  totalElectors: string;
  voterTurnout: string;
  turnoutPercentage?: string;
}

export interface AC064BypollTurnout {
  turnout: string;
  note: string;
}

export interface AC064VoterEcosystem {
  electorateData: AC064ElectorateData;
  bypollTurnout: AC064BypollTurnout;
  turnoutTrend: string;
}

// ============================================================================
// LOCAL ISSUES
// ============================================================================

export interface AC064LocalIssue {
  rank: number;
  title: string;
  subIssues: string[];
  priority: string;
  details?: string[];
}

export interface AC064IssueTaxonomy {
  category: string;
  issues: AC064LocalIssue[];
}

export interface AC064TopIssues {
  issues: AC064LocalIssue[];
}

export interface AC064PeriUrbanChallenges {
  challenges: string[];
}

export interface AC064LocalIssues {
  topIssues: AC064LocalIssue[];
  periUrbanChallenges: AC064PeriUrbanChallenges;
  governanceIssues: string[];
}

// ============================================================================
// GOVERNANCE
// ============================================================================

export interface AC064AdministrativeStructure {
  district: string;
  dc: string;
  mc: string;
  mla: string;
  mlaParty: string;
  mlaTerm?: string;
}

export interface AC064MLAAssessment {
  name: string;
  party: string;
  strengths?: string;
  performance: string;
  note?: string;
  term?: string;
}

export interface AC064PreviousMLA {
  name: string;
  party: string;
  margin: string;
  note: string;
}

export interface AC064GovernanceAudit {
  administrativeStructure: AC064AdministrativeStructure;
  mlaAssessment: AC064MLAAssessment;
  previousMLA?: AC064PreviousMLA;
}

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

export interface AC064PoliticalInfluencer {
  name: string;
  role: string;
  party?: string;
  description: string;
  influence: string;
  status?: string;
}

export interface AC064CongressLeader {
  name: string;
  role: string;
  status: string;
  description: string;
}

export interface AC064ThirdPosition {
  party: string;
  description: string;
  potential: string;
}

export interface AC064PowerStructure {
  politicalInfluencers: AC064PoliticalInfluencer[];
  congressLeaders?: AC064CongressLeader[];
  thirdPosition?: AC064ThirdPosition;
  dynamics: string[];
}

// ============================================================================
// AAP VULNERABILITY
// ============================================================================

export interface AC064AAPWeakPoint {
  issue: string;
  aapPromise: string;
  currentStatus: string;
  voterSentiment: string;
}

export interface AC064AAPVulnerabilityAnalysis {
  vulnerabilities: string[];
  weakPoints: AC064AAPWeakPoint[];
  whyVulnerable: string[];
}

// ============================================================================
// CONGRESS STRATEGY
// ============================================================================

export interface AC064CongressCurrentStatus {
  result2022: string;
  bypoll2025: string;
  challenge: string;
  opportunity: string;
}

export interface AC064CongressChallenges {
  challenges: string[];
}

export interface AC064CongressOpportunities {
  opportunities: string[];
}

export interface AC064CongressStrategy {
  currentStatus: AC064CongressCurrentStatus;
  challenges: AC064CongressChallenges;
  opportunities: AC064CongressOpportunities;
}

// ============================================================================
// CONGRESS STRATEGIC BLUEPRINT
// ============================================================================

export interface AC064PhaseActivity {
  activity: string;
  details?: string[];
}

export interface AC064StrategicPhase {
  phase: string;
  timeline: string;
  activities: AC064PhaseActivity[];
}

export interface AC064CongressBlueprint {
  phases: AC064StrategicPhase[];
  candidateSelection: AC064CandidateSelection;
}

// ============================================================================
// CANDIDATE RECOMMENDATION
// ============================================================================

export interface AC064CandidateAttribute {
  attribute: string;
  requirement: string;
}

export interface AC064CandidateSelection {
  idealCaste: string;
  background: string;
  ageRange?: string;
  profile: string;
  connect?: string;
  networkRequirement?: string;
  priorityCriteria?: string[];
  nameRecognition?: string;
  quality?: string;
}

export interface AC064RecommendedCandidate {
  profile: AC064CandidateSelection;
  priorityApproach: string[];
  focusAreas?: string[];
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AC064Vulnerability {
  rank: number;
  title: string;
  description: string;
}

export interface AC064AttackLine {
  id: number;
  narrative: string;
}

export interface AC064AttackLines {
  vulnerabilities: AC064Vulnerability[];
  narratives: AC064AttackLine[];
}

// ============================================================================
// CONGRESS NARRATIVES
// ============================================================================

export interface AC064CongressNarrative {
  narrative: string;
}

export interface AC064CongressNarratives {
  narratives: AC064CongressNarrative[];
}

// ============================================================================
// POLITICAL STRATEGY
// ============================================================================

export interface AC064PoliticalStrategy {
  congressStrategy: AC064CongressStrategy;
  recommendedCandidate: AC064RecommendedCandidate;
  attackLines: AC064AttackLines;
  congressNarratives: AC064CongressNarratives[];
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface AC064SwotCategory {
  items: string[];
}

export interface AC064SwotAnalysis {
  strengths: AC064SwotCategory;
  weaknesses: AC064SwotCategory;
  opportunities: AC064SwotCategory;
  threats: AC064SwotCategory;
}

// ============================================================================
// 2027 PROJECTION
// ============================================================================

export interface AC064PriorityRanking {
  tier: string;
  priority: string;
  margin: string;
  note: string;
}

export interface AC064VoteProjection {
  analysis2022: AC064VoteShareAnalysis;
  projection2027: AC064PriorityRanking;
  marginAnalysis: string;
  congressPosition: AC064CongressPosition;
}

// ============================================================================
// PRIORITY SEGMENTS
// ============================================================================

export interface AC064PrioritySegment {
  segment: string;
  rationale: string;
}

export interface AC064StrategicBlueprint {
  narratives: AC064CongressNarratives[];
  prioritySegments: AC064PrioritySegment[];
  congressCoalition: string;
}

// ============================================================================
// DATA QUALITY & SOURCES
// ============================================================================

export interface AC064DataSource {
  name: string;
  url?: string;
}

export interface AC064ResearchStatus {
  status: string;
  verificationNeeded: string[];
  notes?: string;
}

export interface AC064DataQuality {
  sources: AC064DataSource[];
  researchStatus: AC064ResearchStatus;
  compiled: string;
  currentStatus: string;
}

// ============================================================================
// NOTES
// ============================================================================

export interface AC064Notes {
  notes: string[];
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC064LudhianaWestTypes {
  // Metadata
  metadata: AC064DocumentMetadata;

  // Identity
  identity: AC064ConstituencyIdentity;
  geographicProfile: AC064GeographicProfile;
  executiveSummary: AC064ExecutiveSummary;
  historicalContext: AC064HistoricalContext;

  // Elections
  electionHistory: AC064ElectionHistory;
  voteShareAnalysis: AC064VoteShareAnalysis;

  // Demographics
  casteComposition: AC064CasteComposition;
  demographicDeepDive: AC064DemographicDeepDive;

  // Voter Ecosystem
  voterEcosystem: AC064VoterEcosystem;

  // Issues
  localIssues: AC064LocalIssues;

  // Governance
  governanceAudit: AC064GovernanceAudit;

  // Power Structure
  powerStructure: AC064PowerStructure;

  // AAP Analysis
  aapVulnerability: AC064AAPVulnerabilityAnalysis;

  // Strategy
  politicalStrategy: AC064PoliticalStrategy;
  congressBlueprint: AC064CongressBlueprint;
  swotAnalysis: AC064SwotAnalysis;
  strategicBlueprint: AC064StrategicBlueprint;

  // 2027
  voteProjection: AC064VoteProjection;

  // Data Quality
  dataQuality: AC064DataQuality;

  // Additional metadata
  notes: string[];
}

// Type exports
export type AC064LudhianaWestDossier = AC064LudhianaWestTypes;
