// Candidate Supremacy Types for Punjab Congress 2027 Election
// Derived from: direct-documentation/cat-4-candidate-supremacy/

import type { Region } from "@/types/constituency-types";

// ==========================================
// B11: CANDIDATE SELECTION & PROFILING TYPES
// ==========================================

export interface WinnabilityFactors {
  partyFactors: PartyFactors;
  candidateFactors: CandidateFactors;
  campaignFactors: CampaignFactors;
}

export interface PartyFactors {
  symbolStrength: number;
  localPartyOrganization: number;
  casteCommunityEquation: number;
  previousElectionResultsTrend: number;
  antiIncumbencyFactor: number;
}

export interface CandidateFactors {
  localVsOutsiderStatus: number;
  casteDemographicMatch: number;
  traditionalVoteBankConnections: number;
  nameRecognition: number;
  acceptanceByLocalLeaders: number;
}

export interface CampaignFactors {
  personalWealthSelfFunding: number;
  networkForResourceMobilization: number;
  dedicationCommitmentIndicators: number;
  charismaAndCommunication: number;
}

export type WinnabilityScore = "High" | "Moderate-High" | "Moderate" | "Low-Moderate" | "Poor";

export interface CandidateConstitutionMatching {
  casteMatchScore: number;
  geographicOriginMatch: number;
  economicClassMatch: number;
  youthAppealAssessment: number;
  genderOutreachCapacity: number;
}

export type CandidateArchetype =
  | "Reformer"
  | "Administrator"
  | "Protector"
  | "Builder"
  | "Charismatic"
  | "Traditional";

export interface CandidateProfile {
  bio: CandidateBio;
  character: CandidateCharacter;
  competence: CandidateCompetence;
  connect: CandidateConnect;
  vision: CandidateVision;
  swot: CandidateSWOT;
}

export interface CandidateBio {
  educationalBackground: string;
  professionalHistory: string;
  familyBackground: string;
  politicalCareerTrajectory: string;
  achievementsRecord: string;
}

export interface CandidateCharacter {
  integrityIndicators: string[];
  leadershipQualities: string[];
  crisisHandling: string[];
  relationshipWithParty: string[];
  publicPerception: string;
}

export interface CandidateCompetence {
  governanceCapability: string;
  legislativeSkill: string;
  communicationAbility: string;
  strategicThinking: string;
  administrativeExperience: string;
}

export interface CandidateConnect {
  localNetworks: string[];
  casteCommunityLinks: string[];
  businessConnections: string[];
  civilSocietyTies: string[];
  religiousInstitutionConnections: string[];
}

export interface CandidateVision {
  articulatedGoals: string;
  understandingOfIssues: string;
  solutionOrientation: string;
  longTermThinking: string;
}

export interface CandidateSWOT {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

// ==========================================
// B12: DIGITAL CRISIS MANAGEMENT TYPES
// ==========================================

export type Platform =
  | "Facebook"
  | "Instagram"
  | "YouTube"
  | "X"
  | "WhatsApp"
  | "ShareChat"
  | "Koo"
  | "Telegram";

export interface DigitalPlatform {
  name: Platform;
  primaryAudience: string;
  contentStrategy: string;
  postingCadence: string;
  keyMetrics: string[];
}

export type VulnerabilityCategory =
  | "Criminal"
  | "Financial"
  | "PersonalLife"
  | "SocialMedia"
  | "Associational"
  | "Statement"
  | "Academic"
  | "FamilyMember";

export interface VulnerabilityAudit {
  category: VulnerabilityCategory;
  severity: number;
  exploitability: string;
  persistence: string;
  counterNarrativeDifficulty: string;
}

export type CrisisLevel = 1 | 2 | 3 | 4;

export interface CrisisSeverity {
  level: CrisisLevel;
  description: string;
  responseTimeline: string;
  authorizationLevel: string;
}

// ==========================================
// B34: CRIMINAL POLITICS & MONEY POWER TYPES
// ==========================================

export interface CriminalizationStats {
  percentageMlAsWithCriminalCases: number;
  seriousCrimeCasesPercentage: number;
  year: number;
}

export interface MoneyPowerAnalysis {
  reportedExpenditureCeiling: number;
  competitiveSeatEstimate: string;
  majorExpenditureCategories: string[];
}

export type SelfFinancingProfile =
  | "Businessperson"
  | "Contractor"
  | "AgriculturalWealth"
  | "CriminalWealth"
  | "ReturningCandidate";

export type EncounterPoliticsPattern =
  | "InsurgencyPeriod"
  | "PostInsurgency"
  | "RecentPeriod";

// ==========================================
// G20: STAR CAMPAIGNER DEPLOYMENT TYPES
// ==========================================

export type StarCampaignerTier = "National" | "State";

export interface StarCampaigner {
  name: string;
  role: string;
  securityCover: string;
  coreVoterSignal: string;
  bestUsedIn: string[];
  tier: StarCampaignerTier;
}

export interface DeploymentPhase {
  name: string;
  startDate: string;
  endDate: string;
  focus: string;
}

export interface ConstituencyDeployment {
  constituencyId: string;
  recommendedCampaigner: string;
  deploymentRationale: string;
  expectedImpact: string;
}

// ==========================================
// G31: LEADERSHIP CREDIBILITY TYPES
// ==========================================

export type CredibilityDimension =
  | "Competence"
  | "Integrity"
  | "Relatability"
  | "Decisiveness"
  | "Electability";

export interface LeaderCredibilityProfile {
  leaderName: string;
  dimensionScores: Record<CredibilityDimension, number>;
  base: {
    caste: string;
    age: number;
    constituency: string;
    politicalBase: string;
  };
  credibilityStrengths: string[];
  credibilityGaps: string[];
  deploymentRecommendation: string;
}

export type CMFaceDeclaration = "declare" | "no-declare" | "late-declare";

export interface CMMFaceRiskMatrix {
  scenario: string;
  riskLevel: string;
  primaryRisk: string;
  mitigation: string;
}

// ==========================================
// G64: SLANDER & HEARSAY MONITORING TYPES
// ==========================================

export type MonitoringSource =
  | "WhatsApp"
  | "Facebook"
  | "X"
  | "YouTube"
  | "LocalCableTV"
  | "LocalForums"
  | "WordOfMouth";

export interface AlertThreshold {
  volumeRed: number;
  velocityRed: string;
  sourceCredibilityRed: string;
  platformRed: string;
}

export type AttackCategory =
  | "Casteist"
  | "Communal"
  | "PersonalCorruption"
  | "CharacterAssassination"
  | "FamilyAttack"
  | "FalsePromise"
  | "MemeRidicule";

export interface ResponseProtocol {
  category: AttackCategory;
  immediateTimeframe: string;
  shortTermTimeframe: string;
  mediumTermTimeframe: string;
  longTermTimeframe: string;
  responseTeam: string;
}

export type EscalationLevel = 1 | 2 | 3 | 4;

// ==========================================
// G65: FACT-FICTION CLARIFICATION TYPES
// ==========================================

export type NarrativeType = "A" | "B" | "C" | "D";

export interface NarrativeClassification {
  type: NarrativeType;
  definition: string;
  example: string;
  responsePriority: "High" | "Medium" | "Low";
}

export interface FactCheckWorkflow {
  hourPhase: string;
  action: string;
  duration: string;
}

export interface DamageThreshold {
  totalScore: number;
  category: "Critical" | "High" | "Moderate" | "Low";
  responseDeadline: string;
}

// ==========================================
// G66: TV INTERVIEW COORDINATION TYPES
// ==========================================

export type ChannelTier = 1 | 2 | 3;

export interface TVChannel {
  name: string;
  language: string;
  reach: string;
  primaryAudience: string;
  politicalLean: string;
  tier: ChannelTier;
}

export type ShowFormat =
  | "StudioDebate"
  | "SingleAnchorInterview"
  | "PhoneInPublicShow"
  | "Live Emmy"
  | "PanelOfExperts";

export type HostilityLevel = "Hostile" | "Moderate" | "Friendly";

export interface PreInterviewProtocol {
  hoursBefore: number;
  action: string;
  description: string;
}

export interface HostileQuestionCard {
  questionType: string;
  question: string;
  responseStructure: string;
  bridgePhrases: string[];
}

// ==========================================
// G67: CAMPAIGN WEBSITE & MICROSITE TYPES
// ==========================================

export interface MicrositeFeature {
  feature: string;
  priority: "P0" | "P1" | "P2";
  description: string;
}

export type TechnicalStack = "CongressOfficial" | "NoCode" | "Custom";

export interface ContentRequirement {
  pageElement: string;
  languageOrder: string;
  ratio: string;
}

export interface ECICompliance {
  candidateNameRequired: boolean;
  partyNameRequired: boolean;
  symbolRequired: boolean;
  fundingSourceRequired: boolean;
}

// ==========================================
// G75: IMAGE MANAGEMENT TYPES
// ==========================================

export type ImageDimension = "Competence" | "Character" | "Accessibility" | "Relatability";

export interface DailyImageAction {
  timeOfDay: string;
  action: string;
  description: string;
}

export interface WeeklyImageReview {
  mediaCoverageAnalysis: string;
  socialListening: string;
  voterFeedbackSynthesis: string;
}

export type DressCodeSetting =
  | "VillageVisits"
  | "ReligiousGatherings"
  | "FarmerMeetings"
  | "SportsEvents"
  | "UrbanConstituency"
  | "Funerals"
  | "Weddings";

export interface DressCodeRecommendation {
  setting: DressCodeSetting;
  recommended: string;
  avoid: string;
}

export type ImageDamageCategory = "A" | "B" | "C";

export interface ImageScorecard {
  dimension: ImageDimension;
  score: number;
  evidenceThisMonth: string;
  actionRequired: string;
}

// ==========================================
// G76: PERSONAL BRAND TYPES
// ==========================================

export type BrandArchetype =
  | "FarmersSon"
  | "YoungReformer"
  | "ExperiencedAdministrator"
  | "DeraConnectedLeader"
  | "Warrior"
  | "ProfessionalPolitician";

export interface BrandElement {
  tagline: string;
  visualIdentity: string;
  voice: string;
  story: string;
}

export interface BrandConsistency {
  touchpoint: string;
  rule: string;
}

export interface ContentTypeFrequency {
  contentType: string;
  frequency: string;
  purpose: string;
}

export interface BrandHealthMetric {
  metric: string;
  method: string;
  frequency: string;
  healthyRange: string;
}

// ==========================================
// G77: PUBLIC PERCEPTION TRACKING TYPES
// ==========================================

export type PerceptionDimension =
  | "Trustworthiness"
  | "Accessibility"
  | "Competence"
  | "Corruption"
  | "Leadership"
  | "ConnectWithCommunity"
  | "DeliveryCapability"
  | "Character";

export interface PerceptionScore {
  dimension: PerceptionDimension;
  score: number;
  priorScore: number;
  trend: "up" | "down" | "stable";
  status: "Critical" | "Weak" | "Average" | "Strong" | "VeryStrong" | "Exceptional";
}

export type DataCollectionMethod =
  | "FGD"
  | "ExitPoll"
  | "BoothAgentReport"
  | "SocialMediaSentiment"
  | "MysteryCaller";

export interface VoterSegment {
  segment: string;
  approximateElectorate: number;
  keyPerceptionDrivers: string[];
}

export interface PerceptionGap {
  dimension: PerceptionDimension;
  voterScore: number;
  candidateSelfScore: number;
  gap: number;
  severity: string;
}

// ==========================================
// G78: RUMOR & MEME SUPPRESSION TYPES
// ==========================================

export type ThreatType = "TextRumor" | "VisualMeme" | "HalfTruth" | "Deepfake";

export interface ThreatAssessment {
  type: ThreatType;
  suppressionDifficulty: string;
  frequencyPercentage: number;
  electoralImpact: string;
}

export type AttackPattern = "AAP" | "BJP";

export interface AttackPatternCharacteristics {
  party: AttackPattern;
  primaryPlatform: string;
  memeFormat: string;
  attackThemes: string[];
  amplification: string;
}

export interface SuppressionTactic {
  platform: MonitoringSource;
  tactic: string;
  principle: string;
}

export interface ResponseApproach {
  approach: "TruthCascade" | "HumorousDeflection" | "SourceDiscrediting";
  principle: string;
  bestFor: string;
  warning?: string;
}

export type TriageCategory = "Ignore" | "Suppress" | "Respond" | "Escalate";

// ==========================================
// MAIN REPORT TYPE
// ==========================================

export interface CandidateSupremacyReport {
  reportDate: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  sourcesConsulted: number;
  dataCurrency: string;
  winnabilityModel: WinnabilityFactors;
  candidateProfiles: Record<string, CandidateProfile>;
  archetypes: CandidateArchetype[];
  digitalCrisis: {
    platforms: DigitalPlatform[];
    vulnerabilityAudit: VulnerabilityAudit[];
    crisisLevels: CrisisSeverity[];
  };
  criminalPolitics: {
    criminalizationStats: CriminalizationStats[];
    moneyPowerAnalysis: MoneyPowerAnalysis;
  };
  starCampaigners: {
    roster: StarCampaigner[];
    phases: DeploymentPhase[];
    deployments: ConstituencyDeployment[];
  };
  leadershipCredibility: {
    dimensionHierarchy: CredibilityDimension[];
    leaders: LeaderCredibilityProfile[];
    cmFaceRiskMatrix: CMMFaceRiskMatrix[];
  };
  slanderMonitoring: {
    sources: MonitoringSource[];
    alertThresholds: AlertThreshold;
    responseProtocols: ResponseProtocol[];
  };
  factFiction: {
    narrativeTypes: NarrativeClassification[];
    workflow: FactCheckWorkflow[];
    damageThresholds: DamageThreshold[];
  };
  tvInterview: {
    channels: TVChannel[];
    showFormats: ShowFormat[];
    preInterviewProtocols: PreInterviewProtocol[];
    hostileQuestionCards: HostileQuestionCard[];
  };
  campaignWebsite: {
    features: MicrositeFeature[];
    contentRequirements: ContentRequirement[];
    compliance: ECICompliance;
  };
  imageManagement: {
    dimensions: ImageDimension[];
    dailyActions: DailyImageAction[];
    dressCodes: DressCodeRecommendation[];
    scorecards: ImageScorecard[];
  };
  personalBrand: {
    archetypes: BrandArchetype[];
    elements: BrandElement;
    consistencyRules: BrandConsistency[];
    healthMetrics: BrandHealthMetric[];
  };
  publicPerception: {
    dimensions: PerceptionDimension[];
    voterSegments: VoterSegment[];
    dataCollectionMethods: DataCollectionMethod[];
    gaps: PerceptionGap[];
  };
  rumorSuppression: {
    threatAssessment: ThreatAssessment[];
    attackPatterns: AttackPatternCharacteristics[];
    suppressionTactics: SuppressionTactic[];
    responseApproaches: ResponseApproach[];
  };
}
