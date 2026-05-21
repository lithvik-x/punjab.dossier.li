/**
 * AC083 - Lambi Assembly Constituency Type Definitions
 * Process through 6-cycle enhancement pipeline
 * Source: AC083-Lambi.md (Tier 1) + AC083-Lambi-deep.md (Tier 2)
 */

// =============================================================================
// ENUMS & CONSTANTS
// =============================================================================

export const AC083_CONSTITUENCY_NUMBER = 83;
export const AC083_AC_NUMBER_DISPLAY = 'AC083';

export enum AC083VerificationStatus {
  VERIFIED = 'VERIFIED',
  PARTIALLY_VERIFIED = 'PARTIALLY_VERIFIED',
  NEEDS_VERIFICATION = 'NEEDS_VERIFICATION',
}

export enum AC083Region {
  MALWA = 'Malwa',
  SOUTH_WEST_PUNJAB = 'South-West Punjab',
}

export enum AC083Category {
  GENERAL = 'General',
  GEN = 'GEN',
}

export enum AC083LokSabhaSeat {
  FARIDKOT = 'Faridkot',
  FIROZPUR = 'Firozpur',
}

export enum AC083District {
  SRI_MUKTSAR_SAHIB = 'Sri Muktsar Sahib',
  MUKTSAR = 'Muktsar',
}

export enum AC083Party {
  AAP = 'Aam Aadmi Party',
  SAD = 'Shiromani Akali Dal',
  CONGRESS = 'Indian National Congress',
}

export enum AC083Religion {
  SIKH = 'Sikh',
  HINDU = 'Hindu',
  OTHER = 'Others',
}

export enum AC083CasteCategory {
  JAT_SIKH = 'Jat Sikh',
  HINDU_GENERAL = 'Hindu General',
  SCHEDULED_CASTES = 'Scheduled Castes',
  OTHER_BACKWARD_CLASSES = 'Other Backward Classes',
  MUSLIM = 'Muslim',
  OBC = 'OBC',
}

export enum AC083VoterType {
  RURAL = 'Rural',
  URBAN = 'Urban',
}

export enum AC083IntelligenceGapPriority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

// =============================================================================
// RESEARCH METADATA
// =============================================================================

export interface AC083ResearchMicroTask {
  taskId: string;
  topic: string;
  tier: number;
  date: string;
  agent: string;
  sourcesConsulted: string;
  verificationStatus: AC083VerificationStatus;
  dataCurrency: string;
}

export interface AC083SourceMetadata {
  sources: string[];
  verificationStatus: AC083VerificationStatus;
  lastUpdated: string;
  needsVerification: string[];
}

// =============================================================================
// EXECUTIVE SUMMARY
// =============================================================================

export interface AC083ExecutiveSummary {
  politicalSignificance: string;
  historicUpset: string;
  antiIncumbencySymbol: string;
  keyNarrative: string;
}

// =============================================================================
// CONSTITUENCY PROFILE
// =============================================================================

export interface AC083ConstituencyIdentity {
  assemblyConstituencyNo: number;
  officialName: string;
  district: AC083District;
  region: AC083Region;
  category: AC083Category;
  parliamentaryConstituency: AC083LokSabhaSeat;
}

export interface AC083GeographicProfile {
  district: string;
  region: string;
  description: string;
  LokSabhaSeat: AC083LokSabhaSeat;
}

// =============================================================================
// ELECTION RESULTS
// =============================================================================

export interface AC083ElectionResult {
  year: number;
  winner: string;
  party: AC083Party;
  margin: string | number;
  runnerUp?: string;
  runnerUpParty?: AC083Party;
  totalElectors?: string | number;
  significance?: string;
}

export interface AC083ElectionResults {
  2022: AC083ElectionResultDetail;
  2017: AC083ElectionResultDetail;
  2012?: AC083ElectionResultBasic;
  2007?: string;
  2002?: string;
}

export interface AC083ElectionResultDetail {
  winner: string;
  party: AC083Party;
  margin: number;
  runnerUp: string;
  runnerUpParty: AC083Party;
  totalElectors: string;
  turnout?: string;
  significance?: string;
}

export interface AC083ElectionResultBasic {
  winner: string;
  party: AC083Party;
  margin?: string;
}

// =============================================================================
// DEMOGRAPHICS
// =============================================================================

export interface AC083CasteBreakdown {
  category: AC083CasteCategory;
  percentage: string;
  notes?: string;
}

export interface AC083CasteComposition {
  jantSikh: string;
  hinduGeneral: string;
  scheduledCastes: string;
  otherBackwardClasses: string;
  muslim?: string;
  obc?: string;
  dominantCommunity: string;
  notes?: string;
  breakdown: AC083CasteBreakdown[];
}

export interface AC083ReligionBreakdown {
  religion: AC083Religion;
  percentage: string;
}

export interface AC083ReligionDistribution {
  sikh: string;
  hindu: string;
  others: string;
  districtLevel: boolean;
  breakdown: AC083ReligionBreakdown[];
}

export interface AC083Demographics {
  population?: string;
  totalElectors: string;
  voterTurnout: string;
  ruralVoters: string;
  urbanVoters: string;
  voterType: AC083VoterType;
  agrarianCommunity: string;
  casteComposition: AC083CasteComposition;
  religionDistribution: AC083ReligionDistribution;
  censusYear?: number;
}

// =============================================================================
// KEY ISSUES
// =============================================================================

export interface AC083LocalIssue {
  issue: string;
  category: string;
  details?: string;
}

export interface AC083KeyIssues {
  primaryIssues: string[];
  agriculturalDistress: string[];
  drugCrisis: string;
  governanceAndInfrastructure: string[];
  unemployment: string;
  groundwater?: string;
  ruralInfrastructure?: string[];
}

export interface AC083IssueTaxonomy {
  agriculturalDistress: {
    items: string[];
    crops: string[];
    problems: string[];
  };
  drugMenace: {
    description: string;
    region: string;
    impact: string;
  };
  infrastructure: {
    healthcare: string;
    education: string;
    roads: string;
    electricity: string;
  };
  groundwater: {
    description: string;
    problem: string;
  };
  youthUnemployment: {
    description: string;
    impact: string;
  };
}

// =============================================================================
// POLITICAL PLAYERS
// =============================================================================

export interface AC083PoliticalActor {
  name: string;
  party: AC083Party;
  role: string;
  background?: string;
  currentStatus?: string;
}

export interface AC083CurrentMLA {
  name: string;
  party: AC083Party;
  background: string;
  electedYear: number;
  defeated: string;
}

export interface AC083KeyHistoricalFigure {
  name: string;
  role: string;
  party: AC083Party;
  significance: string;
  age?: number;
  lostIn2022?: boolean;
}

export interface AC083PoliticalInfluencer {
  name: string;
  category: string;
  influence: string;
  party?: AC083Party;
}

export interface AC083PowerStructure {
  badalFamily: AC083KeyHistoricalFigure;
  localInfluencers: AC083PoliticalInfluencer[];
  notes: string;
}

// =============================================================================
// ELECTORAL ANALYSIS
// =============================================================================

export interface AC083BoothProfile {
  type: 'strong' | 'marginal';
  description: string;
  voterComposition?: string;
  characteristics: string[];
}

export interface AC083BoothAnalysis {
  strongBooths: AC083BoothProfile;
  marginalBooths: AC083BoothProfile;
  notes?: string;
}

export interface AC083VoterProfile {
  turnout2022: string;
  ruralVotersPercentage: string;
  urbanVotersPercentage: string;
  agrarianCommunity: string;
  turnoutAnalysis: string;
}

export interface AC083VoteShareAnalysis {
  2022: {
    aap: string;
    sad: string;
    congress: string;
    notes: string;
  };
  trend: string;
}

// =============================================================================
// GOVERNANCE & DEVELOPMENT
// =============================================================================

export interface AC083DevelopmentIndicator {
  sector: string;
  status: string;
  details?: string;
}

export interface AC083Infrastructure {
  agriculturalInfrastructure: string;
  healthcare: string;
  industrialDevelopment: string;
}

export interface AC083GovernanceGap {
  sector: string;
  gap: string;
  priority: string;
}

export interface AC083GovernanceAndDevelopment {
  developmentIndicators: AC083DevelopmentIndicator[];
  infrastructure: AC083Infrastructure;
  governanceGaps: AC083GovernanceGap[];
  districtLevel: boolean;
}

// =============================================================================
// 2027 OUTLOOK & STRATEGY
// =============================================================================

export interface AC083CongressStrategy {
  opportunity: string;
  canTarget: string[];
  canLeverage: string[];
  challenges: string[];
  keyWinningStrategies: string[];
  primaryNarrative: string;
  targetVoters: string[];
  focusAreas: string[];
}

export interface AC083CongressChallenges {
  aapWonConvincingly: boolean;
  sadIsPrimaryOpponent: boolean;
  needToUnderstandSwingVoters: string;
  intelligenceGaps: string[];
}

export interface AC083AAPStrategy {
  assessment: string;
  vulnerabilities: string[];
  deliveryFailures: string[];
}

export interface AC083StrategicConsiderations {
  congressPosition: string;
  strategicOptions: string[];
  candidateDependency: string;
  coalitionConsideration: string;
}

// =============================================================================
// INTELLIGENCE GAPS
// =============================================================================

export interface AC083IntelligenceGap {
  information: string;
  priority: AC083IntelligenceGapPriority;
  requiresPrimarySource: boolean;
}

export interface AC083IntelligenceGaps {
  gaps: AC083IntelligenceGap[];
  verificationNeeded: string[];
  dataQualityNote: string;
}

// =============================================================================
// RECOMMENDATIONS
// =============================================================================

export interface AC083CandidateProfile {
  recommendedProfile: string;
  background: string;
  keyTraits: string[];
  targetVoter: string;
}

export interface AC083AttackLine {
  line: string;
  target: string;
  category: string;
}

export interface AC083AttackLines {
  againstAAP: AC083AttackLine[];
}

export interface AC083CongressRecommendations {
  candidate: string;
  primaryNarrative: string;
  targetVoters: string[];
  coalition: string;
  focus: string[];
}

// =============================================================================
// PUBLIC SENTIMENT
// =============================================================================

export interface AC083SentimentDriver {
  sentiment: string;
  driver: string;
  impact: string;
}

export interface AC083PublicSentiment {
  antiEstablishment: boolean;
  antiAAP: boolean;
  swingPotential: string;
  sentimentDrivers: AC083SentimentDriver[];
}

// =============================================================================
// MEDIA LANDSCAPE
// =============================================================================

export interface AC083MediaOutlet {
  name: string;
  type: string;
  reach?: string;
}

export interface AC083MediaLandscape {
  primarySources: string[];
  outlets?: AC083MediaOutlet[];
  socialMediaPresence?: string;
}

// =============================================================================
// SWOT ANALYSIS
// =============================================================================

export interface AC083SWOTStrengths {
  items: string[];
  historicalLegacy: string;
  sadBase: string;
}

export interface AC083SWOTWeaknesses {
  items: string[];
  lostMomentum: boolean;
  defeatIn2022: string;
}

export interface AC083SWOTOpportunities {
  items: string[];
  antiAAPSentiment: string;
  coalitionPotential: boolean;
}

export interface AC083SWOTThreats {
  items: string[];
  aapIncumbency: string;
  voterDisillusionment: string;
}

export interface AC083SWOTAnalysis {
  strengths: AC083SWOTStrengths;
  weaknesses: AC083SWOTWeaknesses;
  opportunities: AC083SWOTOpportunities;
  threats: AC083SWOTThreats;
}

// =============================================================================
// STRATEGIC BLUEPRINT
// =============================================================================

export interface AC083CourseChangingFactor {
  factor: string;
  impact: string;
  timeline: string;
}

export interface AC083CourseChangingFactors {
  factors: AC083CourseChangingFactor[];
  coalitionScenario: string;
  aapPerformance: string;
}

export interface AC083StrategicBlueprint {
  coalitionBuilding: string;
  primaryNarrative: string;
  targetVoters: string[];
  grievanceFocus: string[];
  historicalConnection: string;
  courseChangingFactors: AC083CourseChangingFactors;
}

// =============================================================================
// DATA QUALITY
// =============================================================================

export interface AC083DataQuality {
  overall: string;
  verifiedData: string[];
  estimatedData: string[];
  needsVerification: string[];
  sources: string[];
}

// =============================================================================
// DEEP RESEARCH (TIER 2)
// =============================================================================

export interface AC083DeepResearch {
  executiveSummary: AC083ExecutiveSummary;
  constituencyProfile: AC083ConstituencyIdentity;
  demographics: AC083Demographics;
  electoralHistory: AC083ElectionResults;
  keyIssues: AC083KeyIssues;
  politicalPlayers: {
    currentMLA: AC083CurrentMLA;
    keyHistoricalFigure: AC083KeyHistoricalFigure;
    localInfluencers: string;
  };
  voterProfile: AC083VoterProfile;
  governanceAndDevelopment: AC083GovernanceAndDevelopment;
  boothAnalysis: AC083BoothAnalysis;
  outlook2027: {
    congressStrategy: AC083CongressStrategy;
    congressChallenges: AC083CongressChallenges;
  };
  intelligenceGaps: AC083IntelligenceGaps;
  recommendations: AC083CongressRecommendations;
  swotAnalysis: AC083SWOTAnalysis;
  strategicBlueprint: AC083StrategicBlueprint;
  dataQuality: AC083DataQuality;
}

// =============================================================================
// MAIN DOSSIER (TIER 1)
// =============================================================================

export interface AC083MainDossier {
  researchMetadata: AC083ResearchMicroTask;
  basicInformation: AC083ConstituencyIdentity;
  electionResults: {
    2022: AC083ElectionResultDetail;
    2017: AC083ElectionResultDetail;
    2012: AC083ElectionResultBasic;
  };
  politicalSignificance: {
    parkashSinghBadalSeat: string;
    sadStronghold: string;
    sikhMajority: string;
  };
  casteComposition: AC083CasteComposition;
  voterDemographics: {
    totalElectors: string;
    voterTurnout: string;
    fullyRural: string;
    agriculturalEconomy: string;
  };
  keyLocalIssues: AC083LocalIssue[];
  congressStrategicPosition: {
    aapWon2022: string;
    congressFinishedThird: string;
    strategicConsiderations: AC083StrategicConsiderations;
  };
  recommendedCandidateProfile: AC083CandidateProfile;
  attackLinesAgainstAAP: AC083AttackLine[];
  sources: string[];
}

// =============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// =============================================================================

export interface AC083LambiDossierComplete {
  mainDossier: AC083MainDossier;
  deepResearch: AC083DeepResearch;
  metadata: {
    constituencyNumber: number;
    displayCode: string;
    createdDate: string;
    lastUpdated: string;
    dataCoverage: string;
  };
}

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export interface AC083LambiTypes {
  // Enums
  VerificationStatus: typeof AC083VerificationStatus;
  Region: typeof AC083Region;
  Category: typeof AC083Category;
  LokSabhaSeat: typeof AC083LokSabhaSeat;
  District: typeof AC083District;
  Party: typeof AC083Party;
  Religion: typeof AC083Religion;
  CasteCategory: typeof AC083CasteCategory;
  VoterType: typeof AC083VoterType;
  IntelligenceGapPriority: typeof AC083IntelligenceGapPriority;

  // Interfaces
  ResearchMicroTask: AC083ResearchMicroTask;
  SourceMetadata: AC083SourceMetadata;
  ExecutiveSummary: AC083ExecutiveSummary;
  ConstituencyIdentity: AC083ConstituencyIdentity;
  GeographicProfile: AC083GeographicProfile;
  ElectionResult: AC083ElectionResult;
  ElectionResults: AC083ElectionResults;
  ElectionResultDetail: AC083ElectionResultDetail;
  ElectionResultBasic: AC083ElectionResultBasic;
  CasteBreakdown: AC083CasteBreakdown;
  CasteComposition: AC083CasteComposition;
  ReligionBreakdown: AC083ReligionBreakdown;
  ReligionDistribution: AC083ReligionDistribution;
  Demographics: AC083Demographics;
  LocalIssue: AC083LocalIssue;
  KeyIssues: AC083KeyIssues;
  IssueTaxonomy: AC083IssueTaxonomy;
  PoliticalActor: AC083PoliticalActor;
  CurrentMLA: AC083CurrentMLA;
  KeyHistoricalFigure: AC083KeyHistoricalFigure;
  PoliticalInfluencer: AC083PoliticalInfluencer;
  PowerStructure: AC083PowerStructure;
  BoothProfile: AC083BoothProfile;
  BoothAnalysis: AC083BoothAnalysis;
  VoterProfile: AC083VoterProfile;
  VoteShareAnalysis: AC083VoteShareAnalysis;
  DevelopmentIndicator: AC083DevelopmentIndicator;
  Infrastructure: AC083Infrastructure;
  GovernanceGap: AC083GovernanceGap;
  GovernanceAndDevelopment: AC083GovernanceAndDevelopment;
  CongressStrategy: AC083CongressStrategy;
  CongressChallenges: AC083CongressChallenges;
  AAPStrategy: AC083AAPStrategy;
  StrategicConsiderations: AC083StrategicConsiderations;
  IntelligenceGap: AC083IntelligenceGap;
  IntelligenceGaps: AC083IntelligenceGaps;
  CandidateProfile: AC083CandidateProfile;
  AttackLine: AC083AttackLine;
  AttackLines: AC083AttackLines;
  CongressRecommendations: AC083CongressRecommendations;
  SentimentDriver: AC083SentimentDriver;
  PublicSentiment: AC083PublicSentiment;
  MediaOutlet: AC083MediaOutlet;
  MediaLandscape: AC083MediaLandscape;
  SWOTStrengths: AC083SWOTStrengths;
  SWOTWeaknesses: AC083SWOTWeaknesses;
  SWOTOpportunities: AC083SWOTOpportunities;
  SWOTThreats: AC083SWOTThreats;
  SWOTAnalysis: AC083SWOTAnalysis;
  CourseChangingFactor: AC083CourseChangingFactor;
  CourseChangingFactors: AC083CourseChangingFactors;
  StrategicBlueprint: AC083StrategicBlueprint;
  DataQuality: AC083DataQuality;
  DeepResearch: AC083DeepResearch;
  MainDossier: AC083MainDossier;
  LambiDossierComplete: AC083LambiDossierComplete;
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export type {
  AC083LambiDossierComplete as AC083LambiDossier,
};
