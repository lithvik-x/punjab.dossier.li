/**
 * AC117-Shutrana-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC117-Shutrana-SC.md, AC117-Shutrana-deep.md
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
  neighboringACs: string[];
  note: string;
}

// Election result entry
export interface ElectionResult {
  year: number;
  winner: string | VerificationStatus;
  party: string | VerificationStatus;
  votePercentage?: string | VerificationStatus;
  margin?: string | number;
  runnerUp?: string;
  runnerUpParty?: string;
  runnerUpVotes?: string;
  source?: string;
}

// Electoral history
export interface ElectoralHistory {
  elections: ElectionResult[];
  voterBehaviour: VoterBehaviour;
}

// Voter behaviour analysis
export interface VoterBehaviour {
  turnout: VerificationStatus;
  casteFactor: string;
  swingPattern: string;
}

// MLA Profile
export interface MLAProfile {
  name: string;
  party: string;
  age: number | VerificationStatus;
  occupation: string;
  declaredAssets: string;
  education: VerificationStatus;
  firstElected: number;
  socialMedia: string | VerificationStatus;
  criminalCase: CriminalCase;
}

// Criminal case information
export interface CriminalCase {
  status: 'critical' | 'pending' | 'none';
  description: string;
  date: string;
  charges: string[];
  location: string;
  additionalNotes?: string[];
}

// SC Reserved Seat significance
export interface SCReservedSignificance {
  onlySCCandidates: boolean;
  dalitVoteBankDecisive: boolean;
  communities: string[];
  historicalBSPPresence: boolean;
}

// Demographic composition
export interface DemographicComposition {
  scPopulation: string;
  stateLevelSCPercentage?: string;
  mainSCGroups: string[];
  scSikhPercentage?: string;
  scHinduPercentage?: string;
  ruralCharacteristics: RuralCharacteristics;
}

// Rural characteristics
export interface RuralCharacteristics {
  entirelyRural: boolean;
  villageType: string;
  primaryOccupation: string[];
  povertyStatus: string;
}

// Caste composition breakdown
export interface CasteCompositionBreakdown {
  mazhabiSikh: string;
  ravidasia: string;
  jatSikh: string;
  obc: string;
  hinduUpperCaste: string;
  others: string;
}

// Key issues and grievances
export interface KeyIssues {
  criminalCase: string[];
  dalitGrievances: string[];
  povertyLivelihood: string[];
  healthcare: string[];
  education: string[];
  landAgriculture: string[];
}

// Political party positions
export interface PartyPosition {
  party: string;
  position: string;
  details: string[];
}

// Political dynamics
export interface PoliticalDynamics {
  aapPosition: string;
  congressPosition: string;
  sadPosition: string;
  bspPosition: string;
  keyVariables2027: string[];
  casteCalculus: string;
}

// Development profile
export interface DevelopmentProfile {
  mlaBackground: string;
  developmentWork: string;
  ruralGaps: RuralGaps;
  welfareSchemes: string[];
}

// Rural development gaps
export interface RuralGaps {
  roads: string;
  housing: string;
  drinkingWater: string;
  sanitation: string;
  health: string;
}

// Voter turnout
export interface VoterTurnout {
  specificTurnout: VerificationStatus;
  typicalRange: string;
  demographics: string[];
}

// Influential figures
export interface InfluentialFigures {
  currentMLA: string;
  districtLeaders: string[];
  keyInfluencers: string[];
}

// Welfare schemes
export interface WelfareSchemes {
  centralSchemes: string[];
  stateSchemes: string[];
  implementationIssues: string[];
}

// Electoral recommendations
export interface ElectoralRecommendations {
  target: string;
  winningVoteShare: string;
  criticalNote: string;
  voteBankStrategy: string[];
  candidateProfile: RecommendedCandidate;
  oppositionStrategy: string[];
  allianceConsiderations: string[];
  winningPath: string[];
}

// Recommended candidate profile
export interface RecommendedCandidate {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
  contrastPoint?: string;
}

// Intelligence assessment
export interface IntelligenceAssessment {
  overallPosition: string;
  factors: AssessmentFactor[];
  criticalAlert?: string;
  opportunityWindows: string[];
  intelligenceGaps: string[];
}

// Assessment factor
export interface AssessmentFactor {
  factor: string;
  assessment: string;
}

// Congress strategic position
export interface CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  opportunity: string;
  strengths: string[];
  weaknesses: string[];
}

// Complete constituency dossier
export interface Ac117ShutranaScDossier {
  // Header metadata
  metadata: ConstituencyMetadata;

  // Section 1: Identity & Baseline
  identity: ConstituencyIdentity;

  // Section 2: Electoral History
  electoralHistory: ElectoralHistory;
  mlaprofile: MLAProfile;
  scReservedSignificance: SCReservedSignificance;

  // Section 3: Demographics
  demographicComposition: DemographicComposition;
  casteComposition: CasteCompositionBreakdown;

  // Section 4: Key Issues
  keyIssues: KeyIssues;

  // Section 5: Political Dynamics
  politicalDynamics: PoliticalDynamics;

  // Section 6: Development
  developmentProfile: DevelopmentProfile;

  // Section 7: Voter Turnout
  voterTurnout: VoterTurnout;

  // Section 8: Influential Figures
  influentialFigures: InfluentialFigures;

  // Section 9: Welfare Schemes
  welfareSchemes: WelfareSchemes;

  // Section 10: Strategic Recommendations
  electoralRecommendations: ElectoralRecommendations;

  // Section 11: Intelligence
  intelligenceAssessment: IntelligenceAssessment;

  // Data sources
  dataSources: string[];
}

// Supporting interfaces
export interface ConstituencyMetadata {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  date: string;
  researchMethod: string;
  type: 'SC';
  verificationStatus: string;
  sourcesConsulted: string[];
}

// Deep dive specific types (from AC117-Shutrana-deep.md)
export interface DeepDiveOverview {
  constituencyOverview: string;
  electionResults: DeepDiveElectionResults;
  casteCompositionDeep: CasteCompositionBreakdown;
  electorateData: ElectorateData;
  keyLocalIssues: string[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: CandidateProfileDeep;
  attackLinesAgainstAAP: AttackLine[];
  notes: string[];
  sources: string[];
}

// Election data point for deep dive
export interface ElectionDataPoint {
  winner: string;
  party: string;
  margin?: string;
  totalElectors?: string;
}

// Deep dive election results
export interface DeepDiveElectionResults {
  year2022: ElectionDataPoint;
  year2017: ElectionDataPoint;
  year2012: ElectionDataPoint;
}

// Electorate data
export interface ElectorateData {
  totalElectors: string;
  voterTurnout2022: string;
  scElectors: string;
}

// Candidate profile for deep dive
export interface CandidateProfileDeep {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
}

// Attack line
export interface AttackLine {
  line: string;
}

// Congress strategic position deep
export interface CongressStrategicPositionDeep {
  currentPosition: string;
  historicalStrength: string;
  opportunity: string;
  strengths: string[];
  weaknesses: string[];
}

// Combined data structure for dashboard
export interface Ac117ShutranaScCombinedData {
  dossier: Ac117ShutranaScDossier;
  deepDive: DeepDiveOverview;
}

// Data conflict tracking
export interface DataConflict<T> {
  value: T;
  source: string;
  conflictingSource?: string;
  conflictNote?: string;
}

// Conflict markers for conflicting information
export interface MarginConflict {
  mainFileValue: string; // 51,554 from deep file
  conflictingNote: string;
  requiresVerification: boolean;
}

// Electorate count conflict
export interface ElectorateConflict {
  mainFileValue: string; // ~135,000-145,000 from deep file
  conflictingNote: string;
  requiresVerification: boolean;
}

// Verification item
export interface VerificationItem {
  field: string;
  section: string;
  status: VerificationStatus;
  priority: 'high' | 'medium' | 'low';
  notes?: string;
}

// Complete verification audit trail
export interface VerificationAudit {
  constituencyId: string;
  totalFields: number;
  verified: number;
  needsVerification: number;
  pending: number;
  estimated: number;
  highPriorityItems: VerificationItem[];
  lastUpdated: string;
}

// Dashboard display types
export interface DossierSummary {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  currentMLA: string;
  currentParty: string;
  lastElection: number;
  researchStatus: 'complete' | 'partial' | 'needs_more_data';
  verificationProgress: number;
}

// UI Filter types
export interface ConstituencyFilters {
  district?: string;
  region?: string;
  type?: 'SC' | 'ST' | 'GEN';
  searchQuery?: string;
}

// Electoral data for charts
export interface ElectionChartData {
  year: number;
  winnerParty: string;
  winnerVoteShare: number | null;
  margin: number | null;
  totalElectors: number;
}

// Caste demographics for charts
export interface CasteDemographics {
  category: string;
  percentage: number;
  color?: string;
}

// SWOT item
export interface SwotItem {
  category: 'strength' | 'weakness' | 'opportunity' | 'threat';
  item: string;
  priority?: number;
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

export type AllVerificationStatuses = 'verified' | 'needs_verification' | 'pending' | 'estimated';
export type ConstituencyType = 'SC' | 'ST' | 'GEN';
export type ResearchStatus = 'complete' | 'partial' | 'needs_more_data';
export type MLATerm = 'first_term' | 'second_term' | 'multi_term';

export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
  BSP: 'Bahujan Samaj Party',
};

export const ELECTION_YEARS = [2012, 2017, 2022] as const;
export type ElectionYear = typeof ELECTION_YEARS[number];

export type IssuePriorityLevel = 1 | 2 | 3 | 4 | 5;
export type SwotCategory = 'strength' | 'weakness' | 'opportunity' | 'threat';
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';
export type District = 'Patiala' | 'other';
