/**
 * AC-113 Ghanaur Assembly Constituency Dossier Types
 * Generated through 6-cycle enhancement pipeline
 * Source: AC113-Ghanaur.md + AC113-Ghanaur-deep.md
 */

// =============================================================================
// ENUMS & UNIONS
// =============================================================================

export type Party = "AAP" | "INC" | "SAD" | "BSP" | "BJP" | "OTHERS";
export type Region = "Malwa";
export type Category = "GEN" | "SC" | "ST";
export type LokSabhaSeat = "Patiala";
export type VerificationStatus = "VERIFIED" | "PARTIALLY_VERIFIED" | "NEEDS_VERIFICATION";
export type Priority = "HIGH" | "MEDIUM" | "LOW";
export type IssuePriority = 1 | 2 | 3 | 4 | 5;

// =============================================================================
// CORE CONSTITUENCY IDENTITY
// =============================================================================

export interface ConstituencyIdentity {
  acNumber: number;
  officialName: string;
  district: string;
  region: Region;
  category: Category;
  lokSabhaSeat: LokSabhaSeat;
  location: string;
  neighboringACs?: string[];
}

export interface ResearchMetadata {
  researchMicroTaskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string[];
  verificationStatus: VerificationStatus;
  dataCurrency: string;
}

// =============================================================================
// EXECUTIVE SUMMARY
// =============================================================================

export interface ExecutiveSummary {
  description: string;
  winner: string;
  winnerParty: Party;
  margin: number;
  runnerUp: string;
  runnerUpParty?: Party;
  keyInsight: string;
}

export interface DeepExecutiveSummary {
  description: string;
  winner: string;
  winnerParty: Party;
  margin: number;
  runnerUp: string;
  runnerUpParty?: Party;
  winnerVotes?: number;
  previousMLA?: string;
  assetValue?: string;
  winnerAge?: number;
  winnerEducation?: string;
  keyInsight: string;
}

// =============================================================================
// ELECTION RESULTS
// =============================================================================

export interface ElectionResult2022 {
  year: 2022;
  winner: string;
  winnerParty: Party;
  margin: number;
  runnerUp: string;
  runnerUpParty?: Party;
  notes?: string;
}

export interface ElectionResult2017 {
  year: 2017;
  winner: string;
  winnerParty: Party;
  notes?: string;
}

export interface ElectionResult2012 {
  year: 2012;
  winner: string;
  winnerParty: Party;
  notes?: string;
}

export interface ElectionHistory {
  results2022: ElectionResult2022[];
  results2017?: ElectionResult2017;
  results2012?: ElectionResult2012;
}

export interface MLAProfile {
  name: string;
  party: Party;
  age?: number;
  education?: string;
  declaredAssets?: string;
  firstElected?: number;
  background?: string;
  socialMedia?: {
    facebookLikes?: number;
  };
  keyDevelopmentClaim?: string;
  notableIncident?: string;
}

// =============================================================================
// DEMOGRAPHICS & CASTE COMPOSITION
// =============================================================================

export interface CasteCompositionEntry {
  category: string;
  estimatedPercent: number;
  notes?: string;
}

export interface CasteComposition {
  entries: CasteCompositionEntry[];
  keyDemographics?: string[];
}

export interface CasteCompositionDeep {
  jatSikh: string;
  sc: string;
  obc: string;
  upperCastes: string;
}

export interface DistrictDemographics {
  totalSCPopulation?: number;
  scPopulationPercent?: number;
  malwaRegion?: string;
  ghanaurSpecific?: string;
}

export interface DemographicsDeep {
  district: DistrictDemographics;
  casteComposition: CasteCompositionDeep;
  ruralCharacteristics: string[];
}

// =============================================================================
// ELECTORATE DATA
// =============================================================================

export interface ElectorateEntry {
  electionYear: number;
  totalElectors: number;
  voterTurnout?: number;
  turnoutPercent?: number;
  notes?: string;
}

export interface VoterDemographics {
  ruralVoters: string;
  smallTown: string;
  jatSikhFamilies: string;
  scVoters: string;
}

export interface VoterTurnout {
  2022?: {
    specificData?: string;
    ruralTypical?: number;
  };
  demographics: VoterDemographics;
}

// =============================================================================
// LOCAL ISSUES
// =============================================================================

export interface LocalIssue {
  rank: number;
  title: string;
  description?: string;
}

export interface IssueDetailed {
  agrarianDistress?: string[];
  drugCrisis?: string[];
  healthcare?: string[];
  education?: string[];
  unemployment?: string[];
  infrastructure?: string[];
}

// =============================================================================
// KEY ISSUES AND GRIEVANCES
// =============================================================================

export interface KeyIssues {
  agrarianDistress: {
    title: string;
    points: string[];
  };
  drugCrisis: {
    title: string;
    points: string[];
  };
  healthcare: {
    title: string;
    points: string[];
  };
  education: {
    title: string;
    points: string[];
  };
  unemployment: {
    title: string;
    points: string[];
  };
  infrastructure: {
    title: string;
    points: string[];
  };
}

// =============================================================================
// POLITICAL DYNAMICS
// =============================================================================

export interface PartyPosition {
  party: Party;
  position: string;
  details?: string[];
}

export interface AntiIncumbencyRisk {
  description: string;
  factors: string[];
}

export interface KeyVariables {
  variables: string[];
}

// =============================================================================
// DEVELOPMENT PROFILE
// =============================================================================

export interface DevelopmentClaims {
  claims: string[];
  verification?: string;
  limitedPublicRecord?: string;
}

export interface DistrictDevelopment {
  cmGovernment?: string;
  pudaDevelopment?: string;
  healthEducationSchemes?: string;
}

export interface RuralDevelopmentGaps {
  gaps: string[];
}

// =============================================================================
// INFLUENTIAL POLITICAL FIGURES
// =============================================================================

export interface PoliticalFigure {
  name: string;
  role?: string;
  party?: Party;
  influence?: string;
  notes?: string;
}

export interface KeyInfluencer {
  category: string;
  examples: string[];
}

// =============================================================================
// WELFARE SCHEMES
// =============================================================================

export interface StateScheme {
  name: string;
  details: string;
}

export interface CentralScheme {
  name: string;
  details: string;
}

export interface SocialSecurity {
  schemes: string[];
}

export interface WelfareSchemes {
  stateGovernment: StateScheme[];
  centralGovernment: CentralScheme[];
  socialSecurity: SocialSecurity;
}

// =============================================================================
// CONGRESS STRATEGIC POSITION
// =============================================================================

export interface CongressStrategicPosition {
  currentPosition: {
    status: string;
    historicalStrength?: string;
    opportunity?: string;
  };
  strengths?: string[];
  weaknesses?: string[];
  recommendations?: string[];
}

export interface CongressPosition {
  previousMLA?: string;
  congressNeeds?: string;
  traditionalVoters?: string;
  legacyInfluence?: string;
}

export interface PartyPositioning {
  aap: PartyPosition;
  congress: CongressPosition;
  sad: PartyPosition;
  bjp: PartyPosition;
  antiIncumbencyRisk?: AntiIncumbencyRisk;
  keyVariables?: KeyVariables;
}

// =============================================================================
// CANDIDATE PROFILE
// =============================================================================

export interface CandidateProfile {
  caste?: string;
  profile?: string;
  attributes?: string[];
  background?: string;
}

export interface RecommendedCandidateProfile {
  caste: string;
  profile: string;
  attributes: string[];
  background: string;
}

// =============================================================================
// ATTACK LINES
// =============================================================================

export interface AttackLine {
  rank: number;
  title: string;
  description: string;
}

export interface AttackLines {
  lines: AttackLine[];
}

// =============================================================================
// INTELLIGENCE ASSESSMENT
// =============================================================================

export interface FactorAssessment {
  factor: string;
  assessment: string;
}

export interface CongressPositionAssessment {
  overall: string;
  factors: FactorAssessment[];
}

export interface KeyRiskFactor {
  risk: string;
  description: string;
}

export interface OpportunityWindow {
  opportunity: string;
  description: string;
}

export interface IntelligenceGap {
  gap: string;
}

export interface IntelligenceAssessment {
  congressPosition: CongressPositionAssessment;
  keyRiskFactors: KeyRiskFactor[];
  opportunityWindows: OpportunityWindow[];
  intelligenceGaps: IntelligenceGap[];
}

// =============================================================================
// ELECTORAL RECOMMENDATIONS
// =============================================================================

export interface VoteBankStrategy {
  strategy: string[];
}

export interface CandidateProfileRecommendation {
  strongRuralConnect?: string;
  jatSikhCandidate?: string;
  cleanImage?: string;
  abilityToProject?: string;
}

export interface OppositionStrategy {
  mlaRecord?: string;
  governmentFailures?: string[];
  corruptionNarrative?: string;
  attackLine?: string;
}

export interface AllianceConsiderations {
  alliances: string;
  triangularContest?: string;
  bspPossible?: string;
}

export interface ElectoralRecommendations {
  target: string;
  winningVoteShareTarget: string;
  voteBankStrategy: VoteBankStrategy;
  candidateProfileRecommendation: CandidateProfileRecommendation;
  oppositionStrategy: OppositionStrategy;
  allianceConsiderations: AllianceConsiderations;
}

// =============================================================================
// STRATEGIC ASSESSMENT
// =============================================================================

export interface StrategicAssessment {
  currentStatus: string;
  historicalStrength?: string;
  opportunity?: string;
  strengths?: string[];
  weaknesses?: string[];
}

// =============================================================================
// SWOT ANALYSIS
// =============================================================================

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

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// =============================================================================
// MAIN DOSSIER DATA
// =============================================================================

export interface MainDossierData {
  executiveSummary: ExecutiveSummary;
  constituencyProfile: ConstituencyIdentity;
  electionResults: {
    year2022: ElectionResult2022;
    year2017?: ElectionResult2017;
    year2012?: ElectionResult2012;
  };
  casteComposition: CasteComposition;
  electorateData: ElectorateEntry[];
  keyLocalIssues: LocalIssue[];
  congressPosition: CongressStrategicPosition;
  recommendedCandidate: RecommendedCandidateProfile;
  attackLines: AttackLine[];
  notes?: string[];
}

// =============================================================================
// DEEP RESEARCH SUPPLEMENT
// =============================================================================

export interface DeepResearchData {
  identity: {
    constituency: ConstituencyIdentity;
    research: ResearchMetadata;
  };
  executiveSummary: DeepExecutiveSummary;
  constituencyProfile: {
    basicDetails: ConstituencyIdentity;
    electoralSummary2022: {
      winner: string;
      winnerVotes?: string;
      runnerUp?: string;
      runnerUpParty?: Party;
      margin: number;
      marginNotes?: string;
      previousReport?: string;
    };
    electoralHistory: {
      "2022"?: string;
      "2017"?: string;
      "2012"?: string;
    };
    mlaProfile: MLAProfile;
    context2022?: string;
  };
  demographics: DemographicsDeep;
  keyIssues: KeyIssues;
  politicalDynamics: PartyPositioning;
  developmentProfile: {
    mladevelopmentClaims: DevelopmentClaims;
    districtDevelopment: DistrictDevelopment;
    ruralDevelopmentGaps: RuralDevelopmentGaps;
  };
  voterTurnout: VoterTurnout;
  influentialFigures: {
    currentMLA?: PoliticalFigure;
    districtLevelLeaders?: PoliticalFigure[];
    keyInfluencers?: KeyInfluencer[];
  };
  welfareSchemes: WelfareSchemes;
  electoralRecommendations: ElectoralRecommendations;
  intelligenceAssessment: IntelligenceAssessment;
}

// =============================================================================
// COMBINED TYPES (for both files)
// =============================================================================

export interface AC113GhanaurDossierComplete {
  researchId: string;
  deepResearchId: string;
  main: MainDossierData;
  deep: DeepResearchData;
  sources: string[];
  compiledDate: string;
}

// =============================================================================
// CONSTITUENCY REFERENCE (shortcut type)
// =============================================================================

export interface AC113GhanaurReference {
  acNumber: number;
  name: string;
  district: string;
  region: Region;
  category: Category;
  winner2022: string;
  winnerParty2022: Party;
  margin2022: number;
}

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type AC113GhanaurTypes = {
  // Identity
  ConstituencyIdentity: ConstituencyIdentity;
  ResearchMetadata: ResearchMetadata;

  // Executive Summary
  ExecutiveSummary: ExecutiveSummary;
  DeepExecutiveSummary: DeepExecutiveSummary;

  // Election Results
  ElectionResult2022: ElectionResult2022;
  ElectionResult2017: ElectionResult2017;
  ElectionResult2012: ElectionResult2012;
  ElectionHistory: ElectionHistory;
  MLAProfile: MLAProfile;

  // Demographics
  CasteCompositionEntry: CasteCompositionEntry;
  CasteComposition: CasteComposition;
  CasteCompositionDeep: CasteCompositionDeep;
  DistrictDemographics: DistrictDemographics;
  DemographicsDeep: DemographicsDeep;

  // Electorate
  ElectorateEntry: ElectorateEntry;
  VoterDemographics: VoterDemographics;
  VoterTurnout: VoterTurnout;

  // Local Issues
  LocalIssue: LocalIssue;
  IssueDetailed: IssueDetailed;
  KeyIssues: KeyIssues;

  // Political Dynamics
  PartyPosition: PartyPosition;
  AntiIncumbencyRisk: AntiIncumbencyRisk;
  KeyVariables: KeyVariables;
  PartyPositioning: PartyPositioning;

  // Development
  DevelopmentClaims: DevelopmentClaims;
  DistrictDevelopment: DistrictDevelopment;
  RuralDevelopmentGaps: RuralDevelopmentGaps;

  // Influential Figures
  PoliticalFigure: PoliticalFigure;
  KeyInfluencer: KeyInfluencer;

  // Welfare Schemes
  WelfareSchemes: WelfareSchemes;

  // Congress Position
  CongressStrategicPosition: CongressStrategicPosition;
  CongressPosition: CongressPosition;

  // Candidate
  CandidateProfile: CandidateProfile;
  RecommendedCandidateProfile: RecommendedCandidateProfile;

  // Attack Lines
  AttackLine: AttackLine;
  AttackLines: AttackLines;

  // Intelligence
  IntelligenceAssessment: IntelligenceAssessment;

  // Recommendations
  ElectoralRecommendations: ElectoralRecommendations;

  // Main & Deep Data
  MainDossierData: MainDossierData;
  DeepResearchData: DeepResearchData;

  // Complete Dossier
  AC113GhanaurDossierComplete: AC113GhanaurDossierComplete;
  AC113GhanaurReference: AC113GhanaurReference;
};
