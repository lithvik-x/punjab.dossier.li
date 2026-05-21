/**
 * AC111-Rajpura Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC111-Rajpura.md, AC111-Rajpura-deep.md
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  category: "General" | "SC" | "ST" | "BC";
  dataCurrency: string;
}

export interface ConstituencyIdentity {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: "GEN" | "SC" | "ST" | "BC";
  parliamentarySeat: string;
  neighboringACs: string[];
  date: string;
}

export interface GeographicProfile {
  location: string;
  highwayCorridor: string;
  areaCharacter: string;
  borderProximity: string;
}

// ============================================================================
// RESEARCH METADATA
// ============================================================================

export interface ResearchMetadata {
  microTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: string;
  dataCurrency: string;
}

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export interface ExecutiveSummary {
  overview: string;
  electionResult2022: string;
  constituencyCharacter: string;
  mlaSignificance: string;
}

export interface ExecutiveSummaryDeep {
  overview: string;
  electionResult2022: string;
  margin: string;
  mlaProfile: string;
  threeWayFight: string;
  strategicSignificance: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult2022 {
  winner: string;
  party: string;
  winnerVotes: number;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: number;
  margin: number;
  marginPercentage: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2017 {
  winner: string;
  winnerParty: string;
  status: "verified" | "needs_verification";
}

export interface ElectionResult2012 {
  winner: string;
  winnerParty: string;
  status: "verified" | "needs_verification";
}

export interface Candidate2022 {
  name: string;
  party: string;
  votes: number;
}

export interface ElectionHistory {
  year: number;
  winner: string;
  party: string;
  margin?: string;
  status: "verified" | "needs_verification";
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface CasteComposition {
  category: string;
  estimatedPercentage: string;
}

export interface CasteCompositionDeep {
  jatSikh: string;
  obc: string;
  sc: string;
  hinduUpperCaste: string;
  others: string;
}

export interface PatialaDistrictDemographics {
  totalScPopulation: string;
  scPercentageOfDistrict: string;
  region: string;
}

export interface PunjabStateDemographics {
  sikh: string;
  hindu: string;
  muslim: string;
  christian: string;
}

export interface CasteCategoriesPunjab {
  jatSikh: string;
  scDalit: string;
  obc: string;
  upperCastes: string;
}

export interface RajpuraSpecificCharacteristics {
  description: string;
  tradingCommunity: string;
  scPopulation: string;
  jattSikhFarmers: string;
}

export interface Demographics {
  patialaDistrict: PatialaDistrictDemographics;
  punjabState: PunjabStateDemographics;
  casteCategories: CasteCategoriesPunjab;
  rajpuraSpecific: RajpuraSpecificCharacteristics;
}

// ============================================================================
// CASTE BREAKDOWN (Structured)
// ============================================================================

export interface CasteBreakdownEntry {
  community: string;
  percentage: string;
  description?: string;
}

export interface CasteBreakdown {
  entries: CasteBreakdownEntry[];
}

// ============================================================================
// ELECTORATE DATA
// ============================================================================

export interface ElectorateData {
  totalElectors: string;
  voterTurnout2022: string;
}

export interface VoterTurnout2022PatialaDistrict {
  totalElectors: string;
  votesPolled: string;
  turnoutPercentage: string;
}

export interface VoterDemographics {
  urbanVoters: string;
  ruralVoters: string;
  youthVoters: string;
}

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

export interface KeyLocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
}

export interface KeyLocalIssues {
  issues: LocalIssue[];
}

// ============================================================================
// ISSUES & GRIEVANCES (Deep Research)
// ============================================================================

export interface DrugMenace {
  description: string;
  borderProximity: string;
  primaryGrievance: string;
  driver: string;
}

export interface FarmerDistress {
  description: string;
  mspIssues: string;
  stubbleBurning: string;
  groundwaterDepletion: string;
  debtBurden: string;
}

export interface Unemployment {
  description: string;
  dunkiRoute: string;
  lackOfIndustrialDevelopment: string;
  skillMismatch: string;
}

export interface GovernanceGaps {
  municipalInfrastructure: string;
  roadMaintenance: string;
  healthcareFacilities: string;
}

export interface WaterAndEnvironment {
  groundwaterDepletion: string;
  drinkingWaterQuality: string;
  canalIrrigationDependency: string;
}

export interface IssuesGrievances {
  drugMenace: DrugMenace;
  farmerDistress: FarmerDistress;
  unemployment: Unemployment;
  governanceGaps: GovernanceGaps;
  waterAndEnvironment: WaterAndEnvironment;
}

// ============================================================================
// POLITICAL DYNAMICS
// ============================================================================

export interface INCVulnerability {
  description: string;
  antiIncumbencyFactor: string;
  aapSweptMalwa: string;
}

export interface BJPPresence {
  bjpVotes2022: number;
  partyPosition: string;
  rssNetworkActive: string;
  upperCasteHinduVotes: string;
}

export interface SADFactor {
  contested2022: string;
  alliance2017: string;
  malwaBaseBreached: string;
}

export interface AAPFortunes2026 {
  stateWidePower: string;
  performanceAudit: string;
  mlaSignificance: string;
  competitiveIfAntiIncumbency: string;
}

export interface CongressRevivalPotential {
  rebuildFrom18Seats: string;
  amarinderSinghInfluence: string;
  dalitVoteConsolidation: string;
}

export interface PoliticalDynamics {
  incVulnerability: INCVulnerability;
  bjpPresence: BJPPresence;
  sadFactor: SADFactor;
  aapFortunes2026: AAPFortunes2026;
  congressRevivalPotential: CongressRevivalPotential;
}

// ============================================================================
// DEVELOPMENT PROFILE
// ============================================================================

export interface DevelopmentProjects2022_2026 {
  announcement: string;
  urbanProjects: string;
  healthSector: string;
  education: string;
}

export interface MLADevelopmentClaims {
  facebookActivity: string;
  claims: string;
  organizationalAccess: string;
}

export interface DevelopmentGaps {
  industrialDevelopment: string;
  employmentGeneration: string;
  healthcareInfrastructure: string;
}

export interface DevelopmentProfile {
  patialaDistrictDevelopment: DevelopmentProjects2022_2026;
  mlaDevelopmentClaims: MLADevelopmentClaims;
  gaps: DevelopmentGaps;
}

// ============================================================================
// VOTER TURNOUT ANALYSIS
// ============================================================================

export interface VoterTurnoutAnalysis {
  patialaDistrict2022: VoterTurnout2022PatialaDistrict;
  rajpuraSpecific: string;
  semiUrbanTypical: string;
  voterDemographics: VoterDemographics;
}

// ============================================================================
// INFLUENTIAL POLITICAL FIGURES
// ============================================================================

export interface CurrentMLA {
  name: string;
  party: string;
  role: string;
  background: string;
  firstElected: string;
  socialMedia: string;
  notableAchievement: string;
}

export interface DistrictLeader {
  name: string;
  party: string;
  role: string;
  region: string;
}

export interface KeyInfluencer {
  name: string;
  type: string;
  politicalAffiliation: string;
  description: string;
}

export interface InfluentialFigures {
  currentMLA: CurrentMLA;
  districtLeaders: DistrictLeader[];
  keyInfluencers: KeyInfluencer[];
}

// ============================================================================
// WELFARE SCHEMES
// ============================================================================

export interface StateGovernmentSchemes {
  womenFinancialAssistance: string;
  healthCards: string;
  schoolsOfEminence: string;
  irrigationFacilities: string;
}

export interface CentralGovernmentSchemes {
  pmKisanSammanNidhi: string;
  jalJeevanMission: string;
  pmAwasYojana: string;
}

export interface PunjabSocialSecurity {
  socialSecurityPensions: string;
  ashirwadScheme: string;
  scholarships: string;
}

export interface WelfareSchemes {
  stateGovernment: StateGovernmentSchemes;
  centralGovernment: CentralGovernmentSchemes;
  punjabSocialSecurity: PunjabSocialSecurity;
  beneficiaryOutreach: string;
}

// ============================================================================
// ELECTION REFORM & ECI INITIATIVES
// ============================================================================

export interface ECIMeasures {
  voterSlipDistribution: string;
  evmsWithVVPAT: string;
  sveep: string;
}

export interface PatialaECIActivities {
  awarenessPrograms: string;
  nationalVotersDay: string;
  mockPolls: string;
}

export interface ElectionReform {
  eciMeasures: ECIMeasures;
  patialaDistrictActivities: PatialaECIActivities;
}

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

export interface CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  opportunity: string;
  strengths: string[];
  weaknesses: string[];
}

export interface CongressStrategicPositionDeep {
  target: string;
  winningVoteShareTarget: string;
  voteBankStrategy: string[];
  candidateProfileRecommended: string;
  candidateProfileAttributes: string[];
  oppositionToAAP: string[];
  allianceConsiderations: string[];
}

// ============================================================================
// RECOMMENDED CANDIDATE PROFILE
// ============================================================================

export interface CandidateProfile {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
}

export interface RecommendedCandidateProfile {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
}

// ============================================================================
// ATTACK LINES
// ============================================================================

export interface AttackLine {
  line: string;
}

export interface AttackLinesAgainstAAP {
  lines: string[];
}

export interface AttackLinesDeep {
  narratives: string[];
  focusAreas: string[];
}

// ============================================================================
// INTELLIGENCE ASSESSMENT
// ============================================================================

export interface FactorAssessment {
  factor: string;
  assessment: string;
}

export interface KeyRiskFactor {
  description: string;
}

export interface OpportunityWindow {
  description: string;
}

export interface IntelligenceGap {
  item: string;
}

export interface IntelligenceAssessment {
  overallPosition: string;
  factors: FactorAssessment[];
  keyRiskFactors: KeyRiskFactor[];
  opportunityWindows: OpportunityWindow[];
  intelligenceGaps: IntelligenceGap[];
}

// ============================================================================
// ELECTORAL RECOMMENDATIONS FOR CONGRESS (Deep)
// ============================================================================

export interface VoteBankStrategy {
  jattSikhFarmers: string;
  dalitVoters: string;
  urbanTradingCommunity: string;
  womenVoters: string;
}

export interface AllianceConsiderations {
  sadBjpTieUp: string;
  bspTieUp: string;
  triangularContestDynamics: string;
}

export interface ElectoralRecommendations {
  target: string;
  winningVoteShareTarget: string;
  voteBankStrategy: VoteBankStrategy;
  candidateProfileRecommended: string;
  candidateAttributes: string[];
  oppositionToAAPStrategy: string[];
  allianceConsiderations: AllianceConsiderations;
}

// ============================================================================
// STRATEGIC DATA (Main Dossier)
// ============================================================================

export interface StrategicData {
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  notes: string[];
}

// ============================================================================
// SWOT ANALYSIS
// ============================================================================

export interface SWOTStrengths {
  items: string[];
}

export interface SWOTWeaknesses {
  items: string[];
}

export interface SWOTOpportunities {
  items: string[];
}

export interface SWOTThreats {
  items: string[];
}

export interface SWOTAnalysis {
  strengths: SWOTStrengths;
  weaknesses: SWOTWeaknesses;
  opportunities: SWOTOpportunities;
  threats: SWOTThreats;
}

// ============================================================================
// DATA QUALITY
// ============================================================================

export interface DataQuality {
  verificationStatus: string;
  needsVerification: string[];
  sources: string[];
}

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export interface MainDossierData {
  header: ConstituencyHeader;
  executiveSummary: ExecutiveSummary;
  electionResults2022: ElectionResult2022;
  electionResults2017: ElectionResult2017;
  electionResults2012: ElectionResult2012;
  casteComposition: CasteComposition[];
  electorateData: ElectorateData;
  keyLocalIssues: KeyLocalIssue[];
  congressStrategicPosition: CongressStrategicPosition;
  recommendedCandidateProfile: RecommendedCandidateProfile;
  attackLinesAgainstAAP: AttackLinesAgainstAAP;
  notes: string[];
}

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

export interface DeepResearchData {
  metadata: ResearchMetadata;
  executiveSummary: ExecutiveSummaryDeep;
  constituencyProfile: {
    basicDetails: {
      acNo: number;
      type: string;
      district: string;
      region: string;
      partOf: string;
      neighboringACs: string[];
    };
    electoralSummary2022: {
      winner: string;
      winnerVotes: number;
      runnerUp: string;
      runnerUpVotes: number;
      margin: number;
      marginPercentage: string;
    };
    candidateDetails2022: Candidate2022[];
    mlaProfile: CurrentMLA;
    electoralHistory: ElectionHistory[];
  };
  demographics: Demographics;
  casteCompositionDeep: CasteCompositionDeep;
  issuesAndGrievances: IssuesGrievances;
  politicalDynamics: PoliticalDynamics;
  developmentProfile: DevelopmentProfile;
  voterTurnoutAnalysis: VoterTurnoutAnalysis;
  influentialFigures: InfluentialFigures;
  welfareSchemes: WelfareSchemes;
  electionReform: ElectionReform;
  electoralRecommendations: ElectoralRecommendations;
  intelligenceAssessment: IntelligenceAssessment;
  swotAnalysis: SWOTAnalysis;
  dataQuality: DataQuality;
}

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export interface AC111RajpuraTypes {
  mainDossier: MainDossierData;
  deepResearch: DeepResearchData;
  completeDossier: {
    header: ConstituencyHeader;
    identity: ConstituencyIdentity;
    geographicProfile: GeographicProfile;
    executiveSummary: ExecutiveSummary;
    executiveSummaryDeep: ExecutiveSummaryDeep;
    electionResults2022: ElectionResult2022;
    electionResults2017: ElectionResult2017;
    electionResults2012: ElectionResult2012;
    candidateDetails2022: Candidate2022[];
    casteComposition: CasteComposition[];
    casteCompositionDeep: CasteCompositionDeep;
    electorateData: ElectorateData;
    demographics: Demographics;
    keyLocalIssues: KeyLocalIssue[];
    issuesAndGrievances: IssuesGrievances;
    politicalDynamics: PoliticalDynamics;
    developmentProfile: DevelopmentProfile;
    voterTurnoutAnalysis: VoterTurnoutAnalysis;
    influentialFigures: InfluentialFigures;
    welfareSchemes: WelfareSchemes;
    electionReform: ElectionReform;
    congressStrategicPosition: CongressStrategicPosition;
    congressStrategicPositionDeep: CongressStrategicPositionDeep;
    recommendedCandidateProfile: RecommendedCandidateProfile;
    attackLinesAgainstAAP: AttackLinesAgainstAAP;
    electoralRecommendations: ElectoralRecommendations;
    intelligenceAssessment: IntelligenceAssessment;
    swotAnalysis: SWOTAnalysis;
    strategicData: StrategicData;
    dataQuality: DataQuality;
    notes: string[];
  };
}

export type AC111RajpuraData = AC111RajpuraTypes;
