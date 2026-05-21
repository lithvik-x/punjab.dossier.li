/**
 * AC066-Gill-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC066-Gill-SC.md, AC066-Gill-deep.md
 */

// Verification status for data points
export type VerificationStatus = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// Core constituency identification
export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  nameClean: string;
  district: string;
  region: string;
  parliamentarySegment: string;
  type: 'SC';
  date: string;
}

// Constituency overview
export interface ConstituencyOverview {
  description: string;
  urbanRuralComposition: string;
  note: string;
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string | VerificationStatus;
  party: string | VerificationStatus;
  votePercentage?: string | VerificationStatus;
  margin?: string | VerificationStatus;
  runnerUp?: string | VerificationStatus;
  runnerUpParty?: string | VerificationStatus;
  totalElectors?: string | VerificationStatus;
  voterTurnout?: string | VerificationStatus;
  source?: string;
}

// Election results history
export interface ElectionResults {
  year2022: ElectionResult;
  year2017: ElectionResult;
  year2012: ElectionResult;
}

// Historical pattern
export interface HistoricalPattern {
  congressStrength: string;
  aapGains: string;
  competitionPattern: string;
}

// Caste composition
export interface CasteComposition {
  scPopulation: string;
  majorCommunities: SCCommunity[];
  communityDetails: CommunityDetail[];
}

// SC community
export interface SCCommunity {
  name: string;
  percentage: string;
}

// Community detail
export interface CommunityDetail {
  community: string;
  description: string;
  occupation?: string;
  concentration?: string;
}

// Key local issues
export interface LocalIssue {
  issue: string;
  description?: string;
}

// Key local issues list
export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// Congress strategic position
export interface CongressStrategicPosition {
  currentStatus: string;
  challenges: string[];
  opportunities: string[];
}

// Recommended candidate profile
export interface RecommendedCandidateProfile {
  idealCandidate: CandidateAttribute[];
  selectionPriorities: string[];
}

// Candidate attribute
export interface CandidateAttribute {
  attribute: string;
  value: string;
  priority?: string;
}

// Attack line
export interface AttackLine {
  category: string;
  description: string;
}

// Attack lines
export interface AttackLines {
  vulnerabilities: string[];
  congressNarrative: string[];
}

// Key issues for SC community
export interface SCCommunityIssues {
  issues: string[];
  notes: string;
}

// Research notes
export interface ResearchNotes {
  notes: string[];
}

// Deep research metadata
export interface DeepResearchMetadata {
  dossierId: string;
  topic: string;
  tier: number;
  date: string;
  dataCurrency: string;
  sourcesConsulted: string[];
  verificationStatus: string;
}

// Geographic boundaries
export interface GeographicBoundaries {
  description: string;
  borderingConstituencies: string[];
  keyTowns: string[];
  agriculturalProfile: string;
}

// Urban rural composition
export interface UrbanRuralComposition {
  classification: string;
  keyTowns: string[];
  agriculturalProfile: string;
}

// Demographics
export interface Demographics {
  population: PopulationData;
  casteComposition: CasteCompositionData;
  religiousComposition: ReligiousComposition;
  stateDemographics: PunjabStateDemographics;
}

// Population data
export interface PopulationData {
  totalPopulation: VerificationStatus;
  townPopulation: string;
  scPercentage: string;
  note?: string;
}

// Caste composition data
export interface CasteCompositionData {
  sc: string;
  general: string;
  obc: VerificationStatus;
}

// Religious composition
export interface ReligiousComposition {
  sikh: string;
  hindu: string;
  muslim: string;
  christian: string;
  sources: string;
}

// Punjab state demographics
export interface PunjabStateDemographics {
  categories: DemographicCategory[];
}

// Demographic category
export interface DemographicCategory {
  category: string;
  percentage: string;
}

// Key issues and grievances
export interface KeyIssuesGrievances {
  primaryIssues: PrimaryIssue[];
  secondaryIssues: string[];
}

// Primary issue
export interface PrimaryIssue {
  issue: string;
  description: string;
  impact: string;
}

// Political leadership
export interface PoliticalLeadership {
  currentMLA: CurrentMLA;
  localPoliticalFigures: VerificationStatus;
  districtLeadership: DistrictLeadership;
}

// Current MLA
export interface CurrentMLA {
  name: VerificationStatus;
  party: string;
  term: string;
}

// District leadership
export interface DistrictLeadership {
  ludhianaDistrictAdministration: string;
  ppccLeadership: VerificationStatus;
  sadLeadership: VerificationStatus;
  bjpPunjabLeadership: string;
}

// Government schemes
export interface GovernmentSchemes {
  healthSchemes: HealthScheme[];
  socialSecuritySchemes: SocialSecurityScheme[];
  agriculturalSchemes: VerificationStatus;
  beneficiaryStatistics: BeneficiaryStatistics;
}

// Health scheme
export interface HealthScheme {
  name: string;
  description: string;
  source?: string;
}

// Social security scheme
export interface SocialSecurityScheme {
  name: string;
  description: string;
}

// Beneficiary statistics
export interface BeneficiaryStatistics {
  totalAyushmanCards: VerificationStatus;
  schemeCoverage: VerificationStatus;
}

// Electoral history
export interface ElectoralHistory {
  previousWinners: PreviousWinner[];
  trendAnalysis: string;
}

// Previous winner
export interface PreviousWinner {
  year: number;
  winner: VerificationStatus;
  party: VerificationStatus;
  margin: VerificationStatus;
}

// Voter ecosystem
export interface VoterEcosystem {
  votingPatterns: VotingPatterns;
  voterDemographics: VoterDemographics;
}

// Voting patterns
export interface VotingPatterns {
  constituencyClassification: string;
  dalitVote: string;
  farmerVote: string;
  antiIncumbency: string;
}

// Voter demographics
export interface VoterDemographics {
  youngVoters: string;
  womenVoters: string;
  ruralElectorate: string;
}

// Competitive landscape
export interface CompetitiveLandscape {
  keyContenders: KeyContender[];
  attackLinesAAP: AttackLine[];
  attackLinesOpposition: VerificationStatus;
}

// Key contender
export interface KeyContender {
  party: string;
  description: string;
  position: string;
}

// Intelligence gaps
export interface IntelligenceGaps {
  dataRequiringVerification: string[];
  requiredAdditionalSearches: string[];
}

// Recommendations for congress
export interface CongressRecommendations {
  targetVoterSegments: TargetVoterSegment[];
  candidateProfileRecommendation: CandidateProfileRecommendation;
  keyMessages: string[];
  allianceConsiderations: string;
}

// Target voter segment
export interface TargetVoterSegment {
  segment: string;
  description: string;
  priority: string;
}

// Candidate profile recommendation
export interface CandidateProfileRecommendation {
  caste: string;
  profile: string;
  background: string;
}

// Complete constituency dossier
export interface Ac066GillScDossier {
  // Header metadata
  metadata: ConstituencyIdentity;

  // Section 1: Identity & Profile
  overview: ConstituencyOverview;
  electionResults: ElectionResults;
  historicalPattern: HistoricalPattern;

  // Section 2: Demographics & Caste
  casteComposition: CasteComposition;
  demographics: Demographics;

  // Section 3: Key Issues
  keyLocalIssues: KeyLocalIssues;
  scCommunityIssues: SCCommunityIssues;

  // Section 4: Political Position
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLines: AttackLines;

  // Section 5: Research Notes
  researchNotes: ResearchNotes;
}

// Deep research dossier
export interface Ac066GillDeepDossier {
  // Research metadata
  metadata: DeepResearchMetadata;

  // Executive summary
  executiveSummary: string;

  // Section 1: Constituency Profile
  constituencyProfile: {
    basicDetails: ConstituencyIdentity;
    geographicBoundaries: GeographicBoundaries;
    urbanRuralComposition: UrbanRuralComposition;
  };

  // Section 2: Election Results
  electionResults: {
    winnerRunnerUp: {
      winner: VerificationStatus;
      party: string;
      runnerUp: VerificationStatus;
      margin: VerificationStatus;
    };
    voterTurnout: {
      year2022: string;
      year2017: VerificationStatus;
      trend: VerificationStatus;
    };
    partyPerformanceTrend: PartyPerformanceTrend[];
  };

  // Section 3: Demographics
  demographics: Demographics;

  // Section 4: Key Issues
  keyIssuesGrievances: KeyIssuesGrievances;

  // Section 5: Political Leadership
  politicalLeadership: PoliticalLeadership;

  // Section 6: Government Schemes
  governmentSchemes: GovernmentSchemes;

  // Section 7: Electoral History
  electoralHistory: ElectoralHistory;

  // Section 8: Voter Ecosystem
  voterEcosystem: VoterEcosystem;

  // Section 9: Competitive Landscape
  competitiveLandscape: CompetitiveLandscape;

  // Section 10: Intelligence Gaps
  intelligenceGaps: IntelligenceGaps;

  // Section 11: Recommendations
  recommendations: CongressRecommendations;
}

// Party performance trend
export interface PartyPerformanceTrend {
  year: number;
  aap: string;
  inc: string;
  sad: string;
  bjp: string;
}

// Combined data structure
export interface Ac066GillScCombinedData {
  dossier: Ac066GillScDossier;
  deepDossier: Ac066GillDeepDossier;
  researchDate: string;
  researchStatus: 'complete' | 'partial' | 'needs_more_data';
  verificationProgress: number;
}

// Verification audit
export interface VerificationAudit {
  constituencyId: string;
  totalFields: number;
  verified: number;
  needsVerification: number;
  pending: number;
  estimated: number;
  lastUpdated: string;
}

// Dashboard display types
export interface DossierSummary {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  currentMLA: string | VerificationStatus;
  currentParty: string;
  lastElection: number;
  researchStatus: 'complete' | 'partial' | 'needs_more_data';
  verificationProgress: number;
}

// Issue display item
export interface IssueDisplayItem {
  issue: string;
  affectedSegments: string[];
  priority: number;
  isVerified: boolean;
}

// ============================================
// UTILITY TYPES & HELPERS
// ============================================

// All verification statuses
export type AllVerificationStatuses = 'verified' | 'needs_verification' | 'pending' | 'estimated';

// Constituency type union
export type ConstituencyType = 'SC' | 'ST' | 'GEN';

// Research status union
export type ResearchStatus = 'complete' | 'partial' | 'needs_more_data';

// Region type
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';

// District type
export type District = 'Ludhiana' | 'Pathankot' | 'Gurdaspur' | 'SBS Nagar' | 'Hoshiarpur' | 'Jalandhar' | 'Kapurthala' | 'Moga' | 'Ferozepur' | 'Fazilka' | 'Muktsar' | 'Lehra' | 'Ropar' | 'SAS Nagar' | 'Patiala' | 'Sangrur' | 'Barnala' | 'Bathinda' | 'Mansa' | 'Faridkot';

// Party abbreviations mapping
export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
  BSP: 'Bahujan Samaj Party',
};

// Election year constants
export const ELECTION_YEARS = [2012, 2017, 2022] as const;
export type ElectionYear = typeof ELECTION_YEARS[number];

// SC community types
export type SCCommunityType = 'Mazhabi Sikh' | 'Ramdassia' | 'Balmiki' | 'Ad Dharmi' | 'Bazigar';
