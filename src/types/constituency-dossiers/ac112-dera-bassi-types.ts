/**
 * AC112 - Dera Bassi Assembly Constituency Type Definitions
 * Generated from: AC112-Dera-Bassi.md and AC112-DeraBassi-deep.md
 * Date: 21 May 2026
 *
 * Coverage: 100% content analysis across 6-cycle enhancement pipeline
 */

// ============================================================================
// CORE CONSTITUENCY IDENTITY
// ============================================================================

export interface ConstituencyHeader {
  acNumber: number;
  name: string;
  district: string;
  region: string;
  type: 'General' | 'SC' | 'ST';
  dataCurrency: string;
}

export interface GeographicProfile {
  description: string;
  location: string;
  significance: string;
  partOf: string;
  neighboringACs: string[];
  triCityArea: string;
}

export interface LokSabhaSeat {
  name: string;
  partOf: string;
}

export interface KeyStatistics2022 {
  winner: string;
  winnerParty: string;
  winnerVotes: number | null;
  runnerUp: string;
  runnerUpParty: string;
  runnerUpVotes: number | null;
  margin: number;
  marginPercentage: string;
  verificationStatus: 'Verified' | 'Partially Verified' | 'Needs Verification';
}

export interface ConstituencyIdentity {
  header: ConstituencyHeader;
  geographicProfile: GeographicProfile;
  lokSabhaSeat: LokSabhaSeat;
  keyStatistics2022: KeyStatistics2022;
  notableNote: string;
}

// ============================================================================
// ELECTION RESULTS
// ============================================================================

export interface ElectionResult {
  year: number;
  winner: string;
  party: string;
  runnerUp?: string | null;
  runnerUpParty?: string | null;
  margin: number | null;
  winnerVoteCount: number | null;
  totalElectors?: number | null;
  voterTurnout?: number | null;
  verificationStatus: 'Verified' | 'Partially Verified' | 'Needs Verification';
}

export interface ElectoralHistory {
  2022: ElectionResult;
  2017: ElectionResult;
  2012: ElectionResult;
}

export interface MLAProfile {
  name: string;
  party: string;
  role: string;
  background: string;
  firstTerm: number;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  organizationalSignificance: string;
  keySupporter: string;
}

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

export interface DistrictDemographics {
  totalPopulation: number;
  literacyRate: string;
  urbanPopulation: string;
  ruralDescription: string;
}

export interface CasteCompositionBreakdown {
  category: string;
  percentageRange: string;
  notes?: string;
}

export interface DeraBassiCharacteristics {
  urbanization: string;
  migrantPopulation: string;
  realEstateBoom: string;
  industrialAreas: string;
  transportSector: string;
}

export interface Demographics {
  districtDemographics: DistrictDemographics;
  casteComposition: CasteCompositionBreakdown[];
  scVoterComposition: string;
  noSingleDominantCaste: string;
  deraBassiCharacteristics: DeraBassiCharacteristics;
}

// ============================================================================
// KEY ISSUES & GRIEVANCES
// ============================================================================

export interface IssueCategory {
  urbanization: string[];
  drugMenace: string[];
  unemployment: string[];
  governanceFailures: string[];
  farmerLandIssues: string[];
}

export interface LocalIssue {
  rank: number;
  title: string;
  description: string;
  category: 'Urbanization' | 'Social' | 'Economic' | 'Infrastructure' | 'Law & Order' | 'Governance';
}

export interface LocalIssues {
  urbanizationPressures: string[];
  drugMenace: string[];
  unemployment: string[];
  governanceFailures: string[];
  farmerLandIssues: string[];
}

export interface KeyIssues {
  localIssues: LocalIssues;
  issuesList: LocalIssue[];
}

// ============================================================================
// POLITICAL DYNAMICS
// ============================================================================

export interface AAPPosition {
  incumbentStrengths: string[];
  organizationalReach: string;
  risks: string[];
}

export interface CongressPosition {
  runnerUp2022: string;
  urbanProfessionalVoterBase: string;
  futureOpportunity: string;
}

export interface BJPPosition {
  organizationalPresence: string;
  voterDemographic: string;
  alliancePotential: string;
}

export interface SADPosition {
  traditionalBase: string;
  alliancePartner: string;
}

export interface KeyVariables2027 {
  variables: string[];
}

export interface PoliticalDynamics {
  aapPosition: AAPPosition;
  congressPosition: CongressPosition;
  bjpPosition: BJPPosition;
  sadPosition: SADPosition;
  keyVariables2027: KeyVariables2027;
}

// ============================================================================
// DEVELOPMENT PROFILE
// ============================================================================

export interface DistrictDevelopment {
  gmadaInitiatives: string[];
  sectorPromotion: string;
  metroProposals: string;
  healthcareInvestments: string;
}

export interface MLADevelopmentWork {
  irrigationWaterAccess: string;
  canalWaterSupplyProjects: string;
  roadInfrastructure: string;
}

export interface InfrastructureGaps {
  municipalInfrastructure: string;
  sewageTreatment: string;
  drinkingWaterSupply: string;
  powerSupply: string;
}

export interface DevelopmentProfile {
  districtDevelopment: DistrictDevelopment;
  mladevelopmentWork: MLADevelopmentWork;
  infrastructureGaps: InfrastructureGaps;
}

// ============================================================================
// VOTER TURNOUT ANALYSIS
// ============================================================================

export interface VoterDemographics {
  urbanVoters: string;
  migrantVoters: string;
  ruralVoters: string;
  youngProfessionalVoters: string;
}

export interface VoterTurnoutAnalysis {
  turnout2022: string;
  typicalTurnout: string;
  voterDemographics: VoterDemographics;
  verificationStatus: string;
}

// ============================================================================
// INFLUENTIAL POLITICAL FIGURES
// ============================================================================

export interface CurrentMLA {
  name: string;
  roles: string[];
}

export interface DistrictLeaders {
  name: string;
  description: string;
}

export interface KeyInfluencer {
  category: string;
  description: string;
}

export interface InfluentialFigures {
  currentMLA: CurrentMLA;
  districtLeaders: DistrictLeaders[];
  keyInfluencers: KeyInfluencer[];
}

// ============================================================================
// WELFARE SCHEMES & BENEFICIARY PROGRAMS
// ============================================================================

export interface StateSchemes {
  womenFinancialAssistance: string;
  healthCards: string;
  schoolsOfEminence: string;
  irrigationImprovements: string;
}

export interface CentralSchemes {
  pmKisanSammanNidhi: string;
  jalJeevanMission: string;
  pmAwasYojana: string;
  ayushmanBharat: string;
}

export interface TransportSectorBenefits {
  welfareConnection: string;
  subsidizedPermits: string;
  accidentInsurance: string;
}

export interface WelfareSchemes {
  stateSchemes: StateSchemes;
  centralSchemes: CentralSchemes;
  transportSectorBenefits: TransportSectorBenefits;
}

// ============================================================================
// ELECTORAL RECOMMENDATIONS FOR CONGRESS
// ============================================================================

export interface VoteBankStrategy {
  urbanMigrants: string;
  realEstateConstructionWorkers: string;
  scVotersInRuralParts: string;
  womenVoters: string;
}

export interface OppositionToAAP {
  infrastructureFailure: string;
  transportWingRole: string;
  governanceRecord: string;
}

export interface AllianceConsiderations {
  bjpLikelyPartner: string;
  triangularContest: string;
}

export interface RecommendedCandidateProfile {
  profile: string;
  casteBalancing: string;
  cleanImage: string;
  migrantCommunityAbility: string;
}

export interface ElectoralRecommendations {
  target: string;
  winningVoteShareTarget: string;
  voteBankStrategy: VoteBankStrategy;
  oppositionToAAP: OppositionToAAP;
  allianceConsiderations: AllianceConsiderations;
  recommendedCandidateProfile: RecommendedCandidateProfile;
}

// ============================================================================
// INTELLIGENCE ASSESSMENT
// ============================================================================

export interface CongressPositionAssessment {
  overallPosition: string;
  factor: string;
  assessment: string;
}

export interface KeyRiskFactor {
  risk: string;
}

export interface OpportunityWindow {
  opportunity: string;
}

export interface IntelligenceGap {
  gap: string;
}

export interface IntelligenceAssessment {
  congressPosition: CongressPositionAssessment[];
  keyRiskFactors: KeyRiskFactor[];
  opportunityWindows: OpportunityWindow[];
  intelligenceGaps: IntelligenceGap[];
}

// ============================================================================
// STRATEGIC DATA
// ============================================================================

export interface CongressStrengths {
  strengths: string[];
}

export interface CongressWeaknesses {
  weaknesses: string[];
}

export interface RecommendedCaste {
  caste: string;
  reason: string;
}

export interface RecommendedProfile {
  profile: string;
  attributes: string[];
  background: string;
}

export interface AttackLine {
  line: string;
}

export interface CongressStrategicPosition {
  currentPosition: string;
  historicalStrength: string;
  opportunity: string;
}

export interface StrategicData {
  congressStrategicPosition: CongressStrategicPosition;
  strengths: CongressStrengths;
  weaknesses: CongressWeaknesses;
  recommendedCaste: RecommendedCaste;
  recommendedProfile: RecommendedProfile;
  attackLines: AttackLine[];
  notes: string[];
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
// COMPLETE TYPES
// ============================================================================

export interface AC112DeraBassiMainDossier {
  header: ConstituencyHeader;
  executiveSummary: string;
  electionResults: {
    2022: ElectionResult;
    2017: ElectionResult;
    2012: ElectionResult;
  };
  casteComposition: CasteCompositionBreakdown[];
  electorateData: {
    totalElectors: string;
    voterTurnout2022: string;
  };
  keyLocalIssues: LocalIssue[];
  strategicData: StrategicData;
}

export interface AC112DeraBassiDeepResearch {
  researchMetadata: ResearchMetadata;
  constituencyProfile: {
    basicDetails: {
      acNo: number;
      type: string;
      district: string;
      region: string;
      lokSabhaSeat: string;
      neighboringACs: string[];
      notable: string;
    };
    electoralSummary2022: KeyStatistics2022;
    electoralHistory: ElectoralHistory;
    mlaprofile: MLAProfile;
    scVoterComposition: string;
  };
  demographics: Demographics;
  keyIssues: KeyIssues;
  politicalDynamics: PoliticalDynamics;
  developmentProfile: DevelopmentProfile;
  voterTurnoutAnalysis: VoterTurnoutAnalysis;
  influentialFigures: InfluentialFigures;
  welfareSchemes: WelfareSchemes;
  electoralRecommendations: ElectoralRecommendations;
  intelligenceAssessment: IntelligenceAssessment;
}

export interface AC112DeraBassiTypes {
  mainDossier: AC112DeraBassiMainDossier;
  deepResearch: AC112DeraBassiDeepResearch;
  completeDossier: AC112DeraBassiMainDossier & AC112DeraBassiDeepResearch;
}

export type AC112DeraBassiDossier = AC112DeraBassiTypes;
