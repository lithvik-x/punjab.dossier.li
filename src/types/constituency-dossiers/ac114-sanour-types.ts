/**
 * AC114-Sanour Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC114-Sanour.md, AC114-Sanour-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface AC114Identity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  dataCurrency: string;
}

export interface AC114ConstituencyProfile {
  acNo: number;
  type: string;
  district: string;
  region: string;
  partOf: string;
  neighboringACs: string[];
}

export interface AC114MLATimelineEvent {
  date: string;
  event: string;
}

export interface AC114MLACriminalCase {
  timeline: AC114MLATimelineEvent[];
  currentStatus: string;
  proclaimedOffenderDate?: string;
}

export interface AC114MLAProfile {
  name: string;
  age: number;
  education: string;
  father: string;
  firstElected: number;
  party: string;
  partyPosition: string;
  criminalStatus: "proclaimed_offender" | "absconding" | "active";
  criminalCase: AC114MLACriminalCase;
  criticalNote: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface AC114ElectionResult2022 {
  winner: string;
  winnerVotes: number;
  party: string;
  runnerUp: string;
  runnerUpVotes: number;
  margin: number;
  marginPercent: string;
  totalCandidates: number;
}

export interface AC114ElectionResult2017 {
  winner: string;
  party: string;
}

export interface AC114ElectionResult2012 {
  winner: string;
  party: string;
  status: "verified" | "needs_verification";
}

export interface AC114ElectoralHistory {
  results2022: AC114ElectionResult2022;
  results2017: AC114ElectionResult2017;
  results2012: AC114ElectionResult2012;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface AC114PatialaDistrictDemographics {
  totalSCPopulation: string;
  scPercentageOfDistrict: string;
  malwaRegionCharacteristic: string;
}

export interface AC114CasteComposition {
  jatSikh: string;
  sc: string;
  obc: string;
  upperCaste: string;
  others: string;
  notes?: string;
}

export interface AC114RuralCharacteristics {
  urbanRural: "entirely_rural" | "predominantly_rural" | "mixed";
  majorTowns: string[];
  agriculturalVillages: string;
  irrigationType: string;
  farmerProfiles: string[];
  socialStructure: string;
  panchayatInfluence: string;
}

export interface AC114VoterDemographics {
  electorateType: string;
  dominantFamilies: string[];
  scVoters: string;
  voterFamilySize: string;
}

export interface AC114VoterTurnout {
  winningVotes: number;
  totalCandidates: number;
  typicalRuralTurnout: string;
}

// ============================================================================
// KEY ISSUES
// ============================================================================

export interface AC114KeyIssue {
  rank: number;
  title: string;
  description: string;
  affectedSegments: string[];
}

export interface AC114CriticalIssue extends AC114KeyIssue {
  severity: "critical" | "high" | "medium";
  criminalStatus?: string;
}

export interface AC114AgrarianDistress extends AC114KeyIssue {
  subIssues: string[];
}

export interface AC114DrugCrisis extends AC114KeyIssue {
  regionNotorious: boolean;
  deAddictionInfrastructure: string;
}

export interface AC114GovernanceVacuum extends AC114KeyIssue {
  sinceDate: string;
  managingAuthority: string;
  developmentStatus: string;
}

// ============================================================================
// POLITICAL DYNAMICS
// ============================================================================

export interface AC114AAPPosition {
  status: "critically_weakened" | "weakened" | "stable" | "strong";
  reputationDamage: string[];
  newInCharge: string;
  narrativeUndermined: string[];
  hypocrisyPoints: string[];
}

export interface AC114CongressPosition {
  status: "opportunity" | "moderate" | "weak";
  performance2022: string;
  consolidationPotential: string;
  allianceComplications: string;
}

export interface AC114SADPosition {
  status: "strong_potential" | "moderate" | "weak";
  previousMLA: string;
  lossMargin2022: string;
  malwaHeartland: boolean;
  bjpAlliancePossible: boolean;
}

export interface AC114BJPPosition {
  independentBase: string;
  benefitsFromAlliance: string;
}

export interface AC114KeyVariables2027 {
  pathanmajraDisqualification: string;
  aapCandidateSelection: string;
  sadCandidateSelection: string;
  congressCandidateStrength: string;
  bjpAllianceDynamics: string;
}

export interface AC114PoliticalDynamics {
  aapPosition: AC114AAPPosition;
  congressPosition: AC114CongressPosition;
  sadPosition: AC114SADPosition;
  bjpPosition: AC114BJPPosition;
  keyVariables2027: AC114KeyVariables2027;
}

// ============================================================================
// DEVELOPMENT PROFILE
// ============================================================================

export interface AC114DevelopmentDuringTenure {
  activeRepresentationPeriod: string;
  developmentWork: string;
  managingAuthority: string;
}

export interface AC114MLAPublicStatements {
  videoClaim: string;
  blameTarget: string;
  videoDate: string;
}

export interface AC114InfrastructureGaps {
  ruralRoads: string;
  irrigation: string;
  health: string;
  education: string;
}

// ============================================================================
// INFLUENTIAL FIGURES
// ============================================================================

export interface AC114CurrentMLA extends AC114KeyIssue {
  criminalStatus: string;
}

export interface AC114DistrictLeaders {
  sadLeaders: string[];
  congressLeaders: string[];
  patialaRoyalFamily: string;
}

export interface AC114KeyInfluencers {
  villageSarpanches: string;
  gurdwaraCommittees: string;
  jatSikhElders: string;
  cooperativeSocietyHeads: string;
}

// ============================================================================
// WELFARE SCHEMES
// ============================================================================

export interface AC114StateSchemes {
  womenScheme: string;
  healthCards: string;
  schoolsOfEminence: string;
}

export interface AC114CentralSchemes {
  pmKisan: string;
  jalJeevanMission: string;
  pmAwasYojana: string;
}

export interface AC114ImplementationGap {
  mlAAbsenceSince: string;
  facilitationStatus: string;
}

// ============================================================================
// STRATEGIC RECOMMENDATIONS
// ============================================================================

export interface AC114Target {
  constituency: string;
  voteShareTarget: string;
}

export interface AC114VoteBankStrategy {
  jatSikhWomen: string;
  dalitVoters: string;
  ruralYouth: string;
  overallSentiment: string;
}

export interface AC114CandidateProfile {
  party: string;
  image: string;
  criminalCases: string;
  narrativeAbility: string;
  castePreference: string;
}

export interface AC114AllianceConsiderations {
  congressAvoids: string;
  ifSADBJPForms: string;
  bspRole: string;
}

export interface AC114WinningPath {
  scenarioA: string;
  scenarioB: string;
  bestPath: string;
}

export interface AC114ElectoralRecommendations {
  target: AC114Target;
  primaryAttackLine: string;
  voteBankStrategy: AC114VoteBankStrategy;
  candidateProfile: AC114CandidateProfile;
  allianceConsiderations: AC114AllianceConsiderations;
  winningPath: AC114WinningPath;
}

// ============================================================================
// INTELLIGENCE ASSESSMENT
// ============================================================================

export interface AC114FactorAssessment {
  factor: string;
  assessment: string;
}

export interface AC114CriticalAlert {
  issue: string;
  details: string[];
}

export interface AC114OpportunityWindows {
  mlACriminalCase: string;
  governanceVacuum: string;
  aapNarrativeDestroyed: string;
  farmDistress: string;
  drugCrisis: string;
}

export interface AC114IntelligenceGaps {
  aapCandidateIn2027: string;
  congressCandidateOrBacking: string;
  courtProceedingsStatus: string;
  groundSentimentAfter2Years: string;
}

export interface AC114IntelligenceAssessment {
  congressPosition: string;
  factorAssessments: AC114FactorAssessment[];
  criticalAlert: AC114CriticalAlert;
  opportunityWindows: AC114OpportunityWindows;
  intelligenceGaps: AC114IntelligenceGaps;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface AC114DataSource {
  name: string;
  url?: string;
}

export interface AC114ResearchStatus {
  status: "partial" | "complete";
  verificationNeeded: string[];
  criticalNote?: string;
}

export interface AC114DataQuality {
  sources: AC114DataSource[];
  researchStatus: AC114ResearchStatus;
}

// ============================================================================
// STRATEGIC POSITION (CONGRESS)
// ============================================================================

export interface AC114CongressStrengths {
  items: string[];
}

export interface AC114CongressWeaknesses {
  items: string[];
}

export interface AC114CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  opportunity: string;
  strengths: AC114CongressStrengths;
  weaknesses: AC114CongressWeaknesses;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AC114AttackLines {
  items: string[];
}

export interface AC114RecommendedCandidateProfile {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
}

// ============================================================================
// NOTES
// ============================================================================

export interface AC114Notes {
  threeWayCompetition: string;
  sadRunnerUp: string;
  scPopulation: string;
  unityWithSAD: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC114SanourTypes {
  // Identity
  identity: AC114Identity;
  constituencyProfile: AC114ConstituencyProfile;
  mlaProfile: AC114MLAProfile;

  // Electoral History
  electoralHistory: AC114ElectoralHistory;

  // Demographics
  patialaDistrictDemographics: AC114PatialaDistrictDemographics;
  casteComposition: AC114CasteComposition;
  ruralCharacteristics: AC114RuralCharacteristics;
  voterDemographics: AC114VoterDemographics;
  voterTurnout: AC114VoterTurnout;

  // Key Issues
  criticalIssue: AC114CriticalIssue;
  agrarianDistress: AC114AgrarianDistress;
  drugCrisis: AC114DrugCrisis;
  governanceVacuum: AC114GovernanceVacuum;
  healthcareEducation: AC114KeyIssue[];

  // Political Dynamics
  politicalDynamics: AC114PoliticalDynamics;

  // Development
  developmentDuringTenure: AC114DevelopmentDuringTenure;
  mlAPublicStatements: AC114MLAPublicStatements;
  infrastructureGaps: AC114InfrastructureGaps;

  // Influential Figures
  currentMLA: AC114CriticalIssue;
  districtLeaders: AC114DistrictLeaders;
  keyInfluencers: AC114KeyInfluencers;

  // Welfare Schemes
  stateSchemes: AC114StateSchemes;
  centralSchemes: AC114CentralSchemes;
  implementationGap: AC114ImplementationGap;

  // Strategic Recommendations
  electoralRecommendations: AC114ElectoralRecommendations;

  // Intelligence Assessment
  intelligenceAssessment: AC114IntelligenceAssessment;

  // Congress Strategic Position
  congressStrategicPosition: AC114CongressStrategicPosition;

  // Attack Lines
  attackLines: AC114AttackLines;
  recommendedCandidateProfile: AC114RecommendedCandidateProfile;

  // Notes
  notes: AC114Notes;

  // Data Quality
  dataQuality: AC114DataQuality;
}
