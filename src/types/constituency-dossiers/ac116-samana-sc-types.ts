/**
 * AC116-Samana-SC Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC116-Samana-SC.md, AC116-Samana-deep.md
 */

// ============================================================================
// VERIFICATION STATUS & ENUMS
// ============================================================================

export type VerificationStatus = 'verified' | 'needs_verification' | 'pending' | 'estimated';
export type ConstituencyType = 'SC' | 'ST' | 'GEN';
export type Region = 'Majha' | 'Doaba' | 'Malwa' | 'Powadh';
export type Party = 'AAP' | 'INC' | 'BJP' | 'SAD' | ' BSP' | 'IND';
export type ElectionYear = 2012 | 2017 | 2022 | 2027;

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: 'SC';
  date: string;
}

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  nameClean: string;
  district: string;
  region: string;
  parliamentarySegment: string;
  type: 'SC';
  partOf: string;
  neighboringACs: string[];
  date: string;
}

export interface BasicDetails {
  acNo: number;
  type: 'GEN' | 'SC' | 'ST';
  district: string;
  region: string;
  partOf: string;
  neighboringACs: string;
}

// ============================================================================
// RESEARCH METADATA
// ============================================================================

export interface ResearchMetadata {
  dossierId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: string;
  dataCurrency: string;
}

// ============================================================================
// ELECTORAL DATA
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  winnerParty: string;
  winnerVotes: number;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes?: number;
  margin: number | string;
  marginVotes?: number;
  note: string;
}

export interface ElectionResult2017 {
  winner: string;
  winnerParty: string;
  status: VerificationStatus;
}

export interface ElectionResult2012 {
  winner: string;
  winnerParty: string;
  status: VerificationStatus;
}

export interface ElectoralHistory {
  elections: {
    year: number;
    winner: string;
    party: string;
    margin?: string;
    note?: string;
    status?: VerificationStatus;
  }[];
}

export interface ElectoralSummary2022 {
  winner: string;
  winnerVotes: number;
  runnerUp: string;
  runnerUpVotes: string;
  margin: string;
  note: string;
}

// ============================================================================
// MLA PROFILE
// ============================================================================

export interface MLAProfile {
  name: string;
  party: string;
  role: string;
  education: string;
  politicalProfile: string;
  ministerialRole: string;
  controversy?: string;
  socialMedia?: string;
  note?: string;
}

export interface MinisterialSignificance {
  healthMinister: string;
  irrigationMining: string;
  significance: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface PatialaDistrictDemographics {
  totalSCPopulation: string;
  scPercentage: string;
  malwaRegion: string;
}

export interface CasteComposition {
  sc: {
    ramdassiaMazhabiSikh: string;
    mazhabiSikh?: string;
    ravidasia?: string;
  };
  jatSikh: string;
  obc: string;
  upperCaste: string;
  others?: string;
}

export interface RuralCharacteristics {
  character: string;
  samanaTown: string;
  agriculturalEconomy: string;
  mixedCasteVillages: string;
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface KeyIssue {
  category: string;
  description: string;
}

export interface KeyIssues {
  healthcare: string[];
  agrarianDistress: string[];
  education: string[];
  drugCrisis: string[];
  governance: string[];
}

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

// ============================================================================
// POLITICAL DYNAMICS
// ============================================================================

export interface AAPPosition {
  status: string;
  mlapower: string;
  developmentControl: string;
  risk: string;
}

export interface CongressPosition {
  position: string;
  needs: string;
  antiIncumbency: string;
}

export interface SADPosition {
  formerMLA: string;
  malwaSupport: string;
  comebackPotential: string;
}

export interface BJPPosition {
  independentBase: string;
  allianceBenefit: string;
}

export interface KeyVariables2027 {
  variables: string[];
}

export interface PoliticalDynamics {
  aapPosition: AAPPosition;
  congressPosition: CongressPosition;
  sadPosition: SADPosition;
  bjpPosition: BJPPosition;
  keyVariables2027: KeyVariables2027;
}

// ============================================================================
// DEVELOPMENT PROFILE
// ============================================================================

export interface DevelopmentWork {
  healthMinister: string;
  irrigation: string;
  constituencyMLA: string;
  schoolsOfEminence: string;
}

export interface RuralDevelopmentGaps {
  roads: string;
  healthcare: string;
  irrigation: string;
  education: string;
}

export interface DevelopmentProfile {
  mlaDevelopmentWork: DevelopmentWork;
  ruralDevelopmentGaps: RuralDevelopmentGaps;
}

// ============================================================================
// VOTER TURNOUT
// ============================================================================

export interface VoterTurnout2022 {
  data: string;
  typical: string;
}

export interface VoterDemographics {
  ruralVoters: string;
  scVoters: string;
  jatSikhVoters: string;
  samanaTownVoters: string;
}

export interface VoterTurnoutAnalysis {
  voterTurnout2022: VoterTurnout2022;
  voterDemographics: VoterDemographics;
}

// ============================================================================
// INFLUENTIAL POLITICAL FIGURES
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  role: string;
}

export interface DistrictLeaders {
  sadLeaders: string;
  congressLeaders: string;
  patialaRoyalFamily: string;
}

export interface KeyInfluencers {
  villageSarpanches: string;
  gurdwaraCommittees: string;
  scCommunityLeaders: string;
  jatSikhElders: string;
}

export interface InfluentialFigures {
  currentMLA: CurrentMLA;
  districtLeaders: DistrictLeaders;
  keyInfluencers: KeyInfluencers;
}

// ============================================================================
// WELFARE SCHEMES
// ============================================================================

export interface StateGovernmentSchemes {
  womenScheme: string;
  healthCards: string;
  schoolsOfEminence: string;
  irrigationSchemes: string;
}

export interface CentralGovernmentSchemes {
  pmKisanSammanNidhi: string;
  jalJeevanMission: string;
  pmAwasYojana: string;
}

export interface WelfareSchemes {
  stateGovernment: StateGovernmentSchemes;
  centralGovernment: CentralGovernmentSchemes;
}

// ============================================================================
// INTELLIGENCE ASSESSMENT
// ============================================================================

export interface CongressPositionAssessment {
  overall: string;
  factorAssessment: {
    factor: string;
    assessment: string;
  }[];
}

export interface KeyRiskFactors {
  risks: string[];
}

export interface OpportunityWindows {
  opportunities: string[];
}

export interface IntelligenceGaps {
  gaps: string[];
}

export interface IntelligenceAssessment {
  congressPositionAssessment: CongressPositionAssessment;
  keyRiskFactors: KeyRiskFactors;
  opportunityWindows: OpportunityWindows;
  intelligenceGaps: IntelligenceGaps;
}

// ============================================================================
// ELECTORAL RECOMMENDATIONS
// ============================================================================

export interface VoteBankStrategy {
  scVoters: string;
  ruralYouth: string;
  women: string;
  farmers: string;
}

export interface CandidateProfile {
  caste: string;
  socialConnect: string;
  cleanImage: string;
  criminalCases: string;
  youngCandidate: string;
}

export interface OppositionStrategy {
  behaviorControversy: string;
  healthSectorFailures: string;
  brokenPromises: string;
  firstTimeMla: string;
}

export interface AllianceConsiderations {
  bjpSadAlliance: string;
  nonAapVoteSplitting: string;
  bspConsideration: string;
}

export interface ElectoralRecommendations {
  target: string;
  winningVoteShareTarget: string;
  voteBankStrategy: VoteBankStrategy;
  candidateProfile: CandidateProfile;
  oppositionStrategy: OppositionStrategy;
  allianceConsiderations: AllianceConsiderations;
}

// ============================================================================
// DEEP DIVE DATA (from AC116-Samana-deep.md)
// ============================================================================

export interface DeepExecutiveSummary {
  overview: string;
  margin: string;
  scVoterSupport: string;
  congressHistoricalSupport: string;
  recoveryPotential: string;
}

export interface DeepElectionResults {
  year2022: {
    winner: string;
    party: string;
    margin: string;
    runnerUp: string;
    runnerUpParty: string;
  };
  year2017: {
    winner: string;
    party: string;
  };
  year2012: {
    winner: string;
    party: string;
  };
}

export interface DeepCasteComposition {
  scMazhabiSikh: string;
  scRavidasia: string;
  jatSikh: string;
  obc: string;
  hinduUpperCaste: string;
  others: string;
}

export interface ElectorateData {
  totalElectors: string;
  voterTurnout2022: string;
  scElectors: string;
}

export interface DeepKeyLocalIssues {
  issues: string[];
}

export interface DeepCongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  challenge: string;
  strengths: string[];
  weaknesses: string[];
}

export interface DeepCandidateProfile {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
}

export interface AttackLine {
  line: string;
}

export interface AttackLinesAgainstAAP {
  lines: string[];
}

export interface DeepNotes {
  scReservedSeat: string;
  sadRunnerUp: string;
  threeWayDynamic: string;
  largeScPopulation: string;
  communityMobilization: string;
}

export interface DeepResearchData {
  metadata: ResearchMetadata;
  executiveSummary: DeepExecutiveSummary;
  electionResults: DeepElectionResults;
  casteComposition: DeepCasteComposition;
  electorateData: ElectorateData;
  keyLocalIssues: DeepKeyLocalIssues;
  congressStrategicPosition: DeepCongressStrategicPosition;
  recommendedCandidateProfile: DeepCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  notes: DeepNotes;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface Ac116SamanaScDossier {
  // Header metadata
  metadata: ResearchMetadata;

  // Section 1: Executive Summary
  executiveSummary: {
    overview: string;
    electionResult2022: string;
    constituencyCharacter: string;
    margin: string;
    scVoterSupport: string;
  };

  // Section 2: Constituency Profile
  constituencyProfile: {
    basicDetails: BasicDetails;
    electoralSummary2022: ElectoralSummary2022;
    electoralHistory: ElectoralHistory;
    mlaProfile: MLAProfile;
    ministerialSignificance: MinisterialSignificance;
  };

  // Section 3: Demographics
  demographics: {
    patialaDistrictDemographics: PatialaDistrictDemographics;
    casteComposition: CasteComposition;
    ruralCharacteristics: RuralCharacteristics;
  };

  // Section 4: Key Issues
  keyIssues: KeyIssues;

  // Section 5: Political Dynamics
  politicalDynamics: PoliticalDynamics;

  // Section 6: Development Profile
  developmentProfile: DevelopmentProfile;

  // Section 7: Voter Turnout
  voterTurnoutAnalysis: VoterTurnoutAnalysis;

  // Section 8: Influential Figures
  influentialFigures: InfluentialFigures;

  // Section 9: Welfare Schemes
  welfareSchemes: WelfareSchemes;

  // Section 10: Electoral Recommendations
  electoralRecommendations: ElectoralRecommendations;

  // Section 11: Intelligence Assessment
  intelligenceAssessment: IntelligenceAssessment;

  // Deep Research Data
  deepResearch: DeepResearchData;
}

// Combined data structure
export interface Ac116SamanaScCombinedData {
  dossier: Ac116SamanaScDossier;
  deepDive: DeepResearchData;
}

// Verification audit trail
export interface VerificationItem {
  field: string;
  section: string;
  status: VerificationStatus;
  priority: 'high' | 'medium' | 'low';
  notes?: string;
}

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

// Party abbreviations
export const PARTY_ABBREVIATIONS: Record<string, string> = {
  AAP: 'Aam Aadmi Party',
  INC: 'Indian National Congress',
  BJP: 'Bharatiya Janata Party',
  SAD: 'Shiromani Akali Dal',
  BSP: 'Bahujan Samaj Party',
};

// Election years
export const ELECTION_YEARS = [2012, 2017, 2022, 2027] as const;

// Main export
export type AC116SamanaSCTypes = Ac116SamanaScDossier;
