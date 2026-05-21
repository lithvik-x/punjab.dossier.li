/**
 * AC115-Patiala Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC115-Patiala.md, AC115-Patiala-deep.md
 */

// ============================================================================
// RESEARCH METADATA
// ============================================================================

export interface ResearchMicroTask {
  id: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: string;
  dataCurrency: string;
}

export interface DataSource {
  name: string;
  url?: string;
}

export interface ResearchStatus {
  status: "partial" | "complete";
  verificationNeeded: string[];
}

export interface DataQuality {
  sources: DataSource[];
  researchStatus: ResearchStatus;
}

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "General" | "SC" | "ST" | "BC";
  category: string;
  date: string;
}

export interface ConstituencyBaseline {
  parliamentarySegment: string;
  subDistrictsCovered: string[];
  areaCharacter: string;
  character: string;
  neighboringACs: string[];
  terrain: string;
  pollingBoothsStatus: "verified" | "needs_verification";
  pollingBooths?: string[];
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  overview: string;
  keyOutcome: string;
  politicalSignificance: string;
  strategicImplication: string;
}

export interface MLAProfile {
  name: string;
  age: string;
  background: string;
  politicalJourney: string;
  firstElected: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
  };
  keyMoment: string;
  legislativeRole: string;
}

export interface ExCMContext {
  name: string;
  title: string;
  formerRole: string;
  partyAffiliation2022: string;
  contestedFrom: string;
  outcome: string;
  politicalSignificance: string;
  royalConnection: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  winnerVotes: string;
  margin: string;
  runnerUp: string;
  runnerUpParty: string;
  totalElectors: string;
  voterTurnout: string;
  votesPolled: string;
  notes: string;
}

export interface ElectionResult2017 {
  winner: string;
  party: string;
  margin: string;
  notes: string;
}

export interface ElectionResult2012 {
  winner: string;
  party: string;
  notes: string;
}

export interface ElectoralHistory {
  results2022: ElectionResult2022;
  results2017: ElectionResult2017;
  results2012: ElectionResult2012;
  turnoutPattern: string;
  coreVoters: string[];
  swingFactors: string[];
}

export interface VoterTurnoutAnalysis {
  turnout2022: string;
  typicalUrbanTurnout: string;
  demographics: string[];
  voterCharacteristics: string[];
}

// ============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// ============================================================================

export interface PatialaCityDemographics {
  urbanPopulation: string;
  diversity: string[];
  casteMix: string;
}

export interface CasteCompositionUrban {
  category: string;
  percentage: string;
  notes?: string;
}

export interface UrbanVoterCharacteristics {
  voterAwareness: string;
  politicallyActive: string[];
  studentPopulation: string;
  womenVoters: string;
}

export interface DemographicComposition {
  patialaCityDemographics: PatialaCityDemographics;
  casteComposition: CasteCompositionUrban[];
  urbanVoterCharacteristics: UrbanVoterCharacteristics;
}

export interface CasteComposition {
  source: string;
  hinduUpperCaste: string;
  jatSikh: string;
  obc: string;
  sc: string;
  muslim: string;
  others: string;
}

export interface CasteCompositionDeep {
  upperCastes: string;
  obc: string;
  sc: string;
  minorities: string;
}

// ============================================================================
// KEY ISSUES & GRIEVANCES
// ============================================================================

export interface Issue {
  rank: number;
  title: string;
  description: string;
  affectedSegments: string[];
}

export interface UrbanGovernanceFailures {
  infrastructure: string[];
  waterSupply: string;
  sewageDrainage: string;
  powerCuts: string;
  roadMaintenance: string;
}

export interface DrugCrisis {
  problem: string;
  availability: string;
  lawEnforcement: string;
}

export interface Unemployment {
  youthUnemployment: string;
  emigration: string;
  smallIndustry: string;
}

export interface Healthcare {
  governmentHospital: string;
  privateHospitalCosts: string;
  healthCardImplementation: string;
}

export interface LawAndOrder {
  crimeAgainstWomen: string;
  propertyDisputes: string;
  drugPeddling: string;
}

export interface Education {
  punjabiUniversity: string;
  governmentSchools: string;
  coachingInstitutes: string;
}

export interface KeyIssuesGrievances {
  urbanGovernanceFailures: UrbanGovernanceFailures;
  drugCrisis: DrugCrisis;
  unemployment: Unemployment;
  healthcare: Healthcare;
  lawAndOrder: LawAndOrder;
  education: Education;
}

// ============================================================================
// POLITICAL DYNAMICS
// ============================================================================

export interface AAPPosition {
  won2022: string;
  mlaBackground: string;
  governmentBenefits: string;
  risk: string;
}

export interface CongressPosition2022 {
  defeated: string;
  legacyStrength: string;
  needFor2027: string;
  potentialCoalition: string;
}

export interface SADPosition {
  mlaBackground: string;
  support: string;
  lost2022: string;
  alliancePossibility: string;
}

export interface BJPPosition {
  independentBase: string;
  upperCasteHinduVoters: string;
  allianceBenefit: string;
}

export interface AmarinderSinghFactor {
  politicalFuture: string;
  partyViability: string;
  affiliationImpact: string;
  royalInfluence: string;
}

export interface KeyVariables2027 {
  variable: string;
  description: string;
}

export interface PoliticalDynamics {
  aapPosition: AAPPosition;
  congressPosition: CongressPosition2022;
  sadPosition: SADPosition;
  bjpPosition: BJPPosition;
  amarinderSinghFactor: AmarinderSinghFactor;
  keyVariables2027: KeyVariables2027[];
}

// ============================================================================
// DEVELOPMENT PROFILE
// ============================================================================

export interface DevelopmentProjects2022to2026 {
  cmMannGovernment: string;
  puda: string;
  gmada: string;
  heritageConservation: string;
}

export interface MLADevelopmentWork {
  publicRecord: string;
  cityWorks: string;
  infrastructureClaims: string;
  verificationNeeded: string[];
}

export interface UrbanInfrastructureGaps {
  oldCityWaterSupply: string;
  sewageTreatment: string;
  trafficCongestion: string;
  parkingInfrastructure: string;
  heritageBuildingPreservation: string;
}

export interface DevelopmentProfile {
  patialaCityDevelopment: DevelopmentProjects2022to2026;
  mlaDevelopmentWork: MLADevelopmentWork;
  urbanInfrastructureGaps: UrbanInfrastructureGaps;
}

// ============================================================================
// INFLUENTIAL POLITICAL FIGURES
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  background: string;
}

export interface DistrictLevelLeader {
  name: string;
  role: string;
  description: string;
}

export interface KeyInfluencer {
  name: string;
  type: string;
  influence: string;
}

export interface InfluentialFigures {
  currentMLA: CurrentMLA;
  districtLevelLeaders: DistrictLevelLeader[];
  amarinderSingh: DistrictLevelLeader;
  keyInfluencers: KeyInfluencer[];
}

// ============================================================================
// WELFARE SCHEMES & BENEFICIARY PROGRAMS
// ============================================================================

export interface StateGovernmentSchemes {
  womenScheme: string;
  healthCards: string;
  schoolsOfEminence: string;
  urbanEmployment: string;
}

export interface CentralGovernmentSchemes {
  pmKisan: string;
  jalJeevanMission: string;
  pmAwasYojana: string;
  ayushmanBharat: string;
}

export interface PatialaSpecific {
  heritageTourism: string;
  industrialFocalPoint: string;
}

export interface WelfareSchemes {
  stateGovernment: StateGovernmentSchemes;
  centralGovernment: CentralGovernmentSchemes;
  patialaSpecific: PatialaSpecific;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  alertLevel: string;
  marginNote: string;
}

export interface Strengths {
  item: string;
}

export interface Weaknesses {
  item: string;
}

export interface CongressPosition {
  strengths: string[];
  weaknesses: string[];
}

// ============================================================================
// RECOMMENDED CANDIDATE & POLITICAL STRATEGY
// ============================================================================

export interface RecommendedCandidate {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
}

export interface AttackLines {
  narrowMargin: string;
  urbanGovernance: string;
  brokenPromises: string;
  drugNetworks: string;
  heritageNeglect: string;
}

export interface PoliticalStrategy {
  recommendedCandidate: RecommendedCandidate;
  attackLines: AttackLines;
}

export interface ElectoralRecommendations {
  target: string;
  winningVoteShare: string;
  voteBankStrategy: string[];
  candidateProfileRecommended: RecommendedCandidate;
  oppositionStrategy: string[];
  allianceConsiderations: string;
}

// ============================================================================
// INTELLIGENCE ASSESSMENT
// ============================================================================

export interface IntelligenceFactor {
  factor: string;
  assessment: string;
}

export interface KeyRiskFactor {
  risk: string;
  description: string;
}

export interface OpportunityWindow {
  opportunity: string;
  description: string;
}

export interface IntelligenceGaps {
  gap: string;
  description: string;
}

export interface IntelligenceAssessment {
  overallCongressPosition: string;
  factors: IntelligenceFactor[];
  keyRiskFactors: KeyRiskFactor[];
  opportunityWindows: OpportunityWindow[];
  intelligenceGaps: IntelligenceGaps[];
}

// ============================================================================
// DATA SOURCE TRACKING
// ============================================================================

export interface Sources {
  sourcesConsulted: string[];
  notes: string;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC115PatialaTypes {
  // Metadata
  researchMicroTask: ResearchMicroTask;
  dataQuality: DataQuality;

  // Identity
  identity: ConstituencyIdentity;
  baseline: ConstituencyBaseline;

  // Executive Summary
  executiveSummary: ExecutiveSummary;
  mlaProfile: MLAProfile;
  exCMContext: ExCMContext;

  // Demographics
  demographicComposition: DemographicComposition;
  casteComposition: CasteComposition;
  casteCompositionDeep: CasteCompositionDeep;

  // Elections
  electionHistory: ElectoralHistory;
  voterTurnoutAnalysis: VoterTurnoutAnalysis;

  // Issues
  keyIssuesGrievances: KeyIssuesGrievances;

  // Political Dynamics
  politicalDynamics: PoliticalDynamics;

  // Development
  developmentProfile: DevelopmentProfile;

  // Influential Figures
  influentialFigures: InfluentialFigures;

  // Welfare Schemes
  welfareSchemes: WelfareSchemes;

  // Congress Strategy
  congressStrategicPosition: CongressStrategicPosition;
  congressPosition: CongressPosition;
  electoralRecommendations: ElectoralRecommendations;

  // Political Strategy
  politicalStrategy: PoliticalStrategy;

  // Intelligence
  intelligenceAssessment: IntelligenceAssessment;

  // Sources
  sources: Sources;
}
