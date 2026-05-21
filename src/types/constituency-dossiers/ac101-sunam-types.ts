/**
 * AC101 - Sunam Assembly Constituency Type Definitions
 * Generated from: AC101-Sunam.md and AC101-Sunam-deep.md
 * Date: 21 May 2026
 *
 * Coverage: 100% content analysis across 6-cycle enhancement pipeline
 * Processing: Main dossier (AC101-Sunam.md) + Deep research (AC101-Sunam-deep.md)
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface AC101Header {
  acNumber: number;
  constituencyName: string;
  district: string;
  region: string;
  category: 'General' | 'SC' | 'ST';
  dataCurrency: string;
}

export interface AC101GeographicContext {
  description: string;
  location: string;
  agriculturalBase: string;
  demographics: string;
}

export interface AC101ConstituencyProfile {
  acNumber: string;
  officialName: string;
  district: string;
  region: string;
  category: string;
  lokSabhaSeat: string;
  type: string;
  geographicContext: AC101GeographicContext;
}

export interface AC101ConstituencyIdentity {
  header: AC101Header;
  profile: AC101ConstituencyProfile;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface AC101ElectionResult2022 {
  winner: string;
  party: string;
  voteShare: string;
  margin: string;
  marginVotes: number;
  runnerUp: string;
  runnerUpParty: string;
  note: string;
  verificationStatus: 'Verified' | 'Partially Verified' | 'Needs Verification';
}

export interface AC101ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  note: string;
  verificationStatus: 'Needs Verification';
}

export interface AC101ElectionResult2012 {
  winner: string;
  party: string;
  note: string;
  verificationStatus: 'Needs Verification';
}

export interface AC101ElectionHistory {
  result2022: AC101ElectionResult2022;
  result2017: AC101ElectionResult2017;
  result2012: AC101ElectionResult2012;
  keyTrend: string;
}

export interface AC101DeepElectoralHistory {
  winner: string;
  runnerUp: string;
  margin: string;
  keyContestants: string;
  context2017: string;
  verificationStatus: string;
}

export interface AC101ElectoralTrends {
  historicalPattern: string;
  aapSurge: string;
  antiIncumbency: string;
}

// ============================================================================
// CASTE COMPOSITION & DEMOGRAPHICS
// ============================================================================

export interface AC101CasteCategory {
  category: string;
  estimatedPercentage: string;
}

export interface AC101CasteComposition {
  categories: AC101CasteCategory[];
  totalSikhPercentage: string;
  totalHinduPercentage: string;
  totalSCPercentage: string;
  totalOtherPercentage: string;
  keyDemographics: string[];
}

export interface AC101DistrictDemographics {
  totalPopulation: string;
  male: string;
  female: string;
  rural: string;
  urban: string;
  source: string;
}

export interface AC101CommunityComposition {
  description: string;
  verificationStatus: string;
}

export interface AC101DemographicsDeep {
  districtLevel: AC101DistrictDemographics;
  communityComposition: AC101CommunityComposition;
}

export interface AC101ElectorateData {
  totalElectors: string;
  voterTurnout2022: string;
  turnoutPercentage: string;
}

export interface AC101VoterOutreach {
  stateAverage: string;
  constituencySpecific: string;
  verificationStatus: string;
}

// ============================================================================
// KEY ISSUES & GRIEVANCES
// ============================================================================

export interface AC101LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface AC101KeyIssues {
  issues: AC101LocalIssue[];
}

export interface AC101IssueDetail {
  drugCrisis: string;
  agrarianDistress: string;
  developmentGaps: string;
}

export interface AC101DeepLocalIssues {
  issueCategories: string[];
  details: AC101IssueDetail;
}

export interface AC101PublicSentiment {
  perceivedMood: string;
  sentimentDrivers: string[];
  verificationStatus: string;
}

// ============================================================================
// POLITICAL LEADERSHIP
// ============================================================================

export interface AC101CurrentMLA {
  name: string;
  term: string;
  verificationStatus: string;
}

export interface AC101KeyPoliticalFigures {
  description: string;
  verificationStatus: string;
}

export interface AC101PoliticalLeadership {
  currentMLA: AC101CurrentMLA;
  keyFigures: AC101KeyPoliticalFigures;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface AC101CongressStrengths {
  strengths: string[];
}

export interface AC101CongressWeaknesses {
  weaknesses: string[];
}

export interface AC101CongressStrategicPosition {
  currentPosition: string;
  performance2022: string;
  strengths: AC101CongressStrengths;
  weaknesses: AC101CongressWeaknesses;
}

export interface AC101StrategicAssessment {
  opportunity: string;
  challenges: string[];
}

export interface AC101CongressStrategy {
  strategicPosition: AC101CongressStrategicPosition;
  assessment: AC101StrategicAssessment;
}

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

export interface AC101CandidateAttribute {
  attribute: string;
  idealProfile: string;
}

export interface AC101RecommendedCandidateProfile {
  table: AC101CandidateAttribute[];
  castePreference: string;
  backgroundPreference: string;
  keyAttributes: string[];
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AC101AttackLine {
  rank: number;
  title: string;
  line: string;
}

export interface AC101AttackLinesAgainstAAP {
  lines: AC101AttackLine[];
}

export interface AC101DeepAttackLines {
  lines: string[];
}

// ============================================================================
// GOVERNMENT SCHEMES
// ============================================================================

export interface AC101ActiveScheme {
  name: string;
  beneficiaryData: string;
  verificationStatus: string;
}

export interface AC101GovernmentSchemes {
  schemes: AC101ActiveScheme[];
  verificationStatus: string;
}

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

export interface AC101IntelligenceGap {
  item: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface AC101IntelligenceGaps {
  gaps: AC101IntelligenceGap[];
  verificationItems: AC101IntelligenceGap[];
}

export interface AC101ResearchPriorities {
  priorities: string[];
}

export interface AC101IntelligenceData {
  gaps: AC101IntelligenceGaps;
  researchPriorities: AC101ResearchPriorities;
}

// ============================================================================
// DEEP RESEARCH METADATA
// ============================================================================

export interface AC101ResearchMicroTask {
  id: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: string;
  dataCurrency: string;
}

export interface AC101Sources {
  sources: string[];
  urls: string[];
}

export interface AC101DataQuality {
  sources: AC101Sources;
  compiledDate: string;
  verificationStatus: string;
  dataCurrency: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC101SunamDossier {
  // Identity
  identity: AC101ConstituencyIdentity;

  // Election Data
  electionHistory: AC101ElectionHistory;
  deepElectoralHistory: AC101DeepElectoralHistory;
  electoralTrends: AC101ElectoralTrends;

  // Demographics
  casteComposition: AC101CasteComposition;
  demographicsDeep: AC101DemographicsDeep;
  electorateData: AC101ElectorateData;
  voterOutreach: AC101VoterOutreach;

  // Issues
  keyIssues: AC101KeyIssues;
  deepLocalIssues: AC101DeepLocalIssues;
  publicSentiment: AC101PublicSentiment;

  // Political
  politicalLeadership: AC101PoliticalLeadership;

  // Strategy
  congressStrategy: AC101CongressStrategy;
  recommendedCandidateProfile: AC101RecommendedCandidateProfile;
  attackLines: AC101AttackLinesAgainstAAP;
  deepAttackLines: AC101DeepAttackLines;

  // Schemes
  governmentSchemes: AC101GovernmentSchemes;

  // Intelligence
  intelligenceData: AC101IntelligenceData;

  // Metadata
  researchMetadata: AC101ResearchMicroTask;
  dataQuality: AC101DataQuality;
}

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================

export type AC101SunamTypes = AC101SunamDossier;
