// Media Narrative Types for Punjab Dashboard

export interface TVChannel {
  name: string;
  type: string;
  subscribers: string;
  ownership: string;
  barchart: number;
}

export interface TVAdRate {
  channel: string;
  standard: string;
  primeTime: string;
  note: string;
}

export interface RadioStation {
  name: string;
  frequency: string;
  listeners: string;
  demographic: string;
  type: string;
}

export interface DiasporaRadio {
  name: string;
  market: string;
  type: string;
  reach: string;
  utility: string;
}

export interface CampaignBudget {
  scale: string;
  tvBudget: string;
  radioBudget: string;
  total: string;
}

export interface YouTubeChannel {
  name: string;
  subscribers: string;
  lean: string;
  value: string;
  region: string;
}

export interface RegionalStrategy {
  region: string;
  seats: number;
  priority: string;
  primaryChannels: string;
  printPriority: string;
  budgetAllocation: string;
  tvBudget: string;
  strategy: string;
}

export interface MSONetwork {
  name: string;
  coverage: string;
  fiber?: string;
  headend?: string;
  owner?: string;
  note: string;
}

export interface MediaSource {
  name: string;
  type: string;
  sentiment: number;
  reach: string;
  lean: string;
  verified: boolean;
  owner: string;
}

export interface SocialMetric {
  platform: string;
  penetration: string;
  groups?: number;
  reach?: string;
  followers?: string;
  engagement?: number;
  sentiment: number;
  views?: string;
  subscribers?: string;
}

export interface Journalist {
  name: string;
  outlet: string;
  location: string;
  score: number;
  role: string;
}

export interface CoverageVolume {
  party: string;
  level: string;
  color: string;
}

export interface CongressMention {
  label: string;
  source: string;
  sentiment: number;
  reach: string;
}

export interface CongressSentiment {
  negative: number;
  neutral: number;
  positive: number;
  trend: string;
}

export interface AAPSentiment {
  negative: number;
  neutral: number;
  positive: number;
  trend: string;
}

export interface BJPSentiment {
  negative: number;
  neutral: number;
  positive: number;
  trend: string;
}

// Perception Page Types
export interface StrategyPhase {
  phase: string;
  name: string;
  timeline: string;
  objectives: number;
  status: string;
}

export interface NarrativePillar {
  pillar: string;
  sentiment: number;
  reach: string;
  owned: boolean;
}

export interface VoteShareTrajectory {
  year: string;
  congress: number;
  aap: number;
  sad: number;
  bjp: number;
}

export interface SeatScenario {
  scenario: string;
  seats: string;
  probability: number;
}

export interface ScenarioPlanning {
  scenario: string;
  congressSeats: string;
  aapSeats: string;
  sadBjpSeats: string;
  conditions: string;
}

export interface CMFaceAnalysis {
  candidate: string;
  base: string;
  strength: string;
  weakness: string;
  regionalGap: string;
  impact: string;
}

export interface CMAnnouncementTiming {
  timing: string;
  days: string;
  status: string;
}

export interface BreakevenAnalysis {
  variable: string;
  seatImpact: string;
}

export interface GrievanceMatrix {
  issue: string;
  severity: number;
  salience: number;
  region: string;
  priority: string;
}

export interface AngryVoterProfile {
  segment: string;
  grievance: string;
  intensity: number;
  AAP2022: string;
  recovery: string;
  action: string;
}

// Party Page Types
export interface PartyWorker {
  level: string;
  count: number;
  coverage: number;
  note?: string;
}

export interface ClassCasteEntry {
  class: string;
  caste: string;
  population: string;
  primaryParty: string;
  note: string;
}

export interface NRISupportPattern {
  country: string;
  sympathies: string;
  reason: string;
  risk: string;
}

export interface NRIVoterRegistration {
  metric: string;
  value: string;
  note: string;
}

export interface VolunteerRecruitment {
  targetTotal: number;
  boothLevelWorkers: number;
  sectorSupervisors: number;
  boothPresidents: number;
  sources: VolunteerSource[];
  nonMonetaryIncentives: NonMonetaryIncentive[];
}

export interface VolunteerSource {
  source: string;
  yield: string;
  activation: string;
}

export interface NonMonetaryIncentive {
  type: string;
  description: string;
  effectiveness: string;
}

export interface VolunteerTraining {
  totalHours: string;
  modules: TrainingModule[];
  format: TrainingFormat[];
}

export interface TrainingModule {
  module: string;
  duration: string;
  content: string;
}

export interface TrainingFormat {
  format: string;
  percentage: string;
  bestFor: string;
}

export interface BoothStructure {
  roles: BoothRole[];
  pollingDayOps: PollingDayOp[];
}

export interface BoothRole {
  role: string;
  quantity: number;
  responsibility: string;
}

export interface PollingDayOp {
  time: string;
  action: string;
}

export interface ThreeContactStage {
  stage: string;
  timing: string;
  objective: string;
  channels: string[];
  contactRate: string;
}

export interface BoothContactStrategy {
  category: string;
  margin: string;
  contactRatio: string;
  priority: string;
  notes: string;
}

export interface CeilingEffect {
  finding: string;
  threshold: string;
  data: string;
  recommendation: string;
}

export interface FemaleBoothSevakTarget {
  target: string;
  current: string;
  gap: string;
  reason: string;
  shgNetwork: string;
}

export interface GOTVOperationsBudget {
  range: string;
  breakdown: GOTVBreakdown;
  perBooth: string;
}

export interface GOTVBreakdown {
  transport: string;
  boothAgentPayments: string;
  communicationCosts: string;
  foodAndLogistics: string;
  emergencyReserve: string;
}

export interface ElectionConstraint {
  harvestBlackout: HarvestBlackout;
  countdown72Hour: Countdown72Hour;
}

export interface HarvestBlackout {
  periods: string[];
  impact: string;
  mitigation: string;
}

export interface Countdown72Hour {
  protocol: string;
  components: string[];
}

export interface BSPRelaunch2026 {
  threat: string;
  probability: string;
  reason: string;
  impact: string;
}

// SAD Status Types
export interface SADStatusData {
  president: string;
  presidentReElection: string;
  electoralDecline: ElectoralDecline[];
  factions: SADFaction[];
  bspAlliance: BSPAlliance;
  panthicIssues: PanthicIssues;
  keyLeaders: SADKeyLeader[];
}

export interface ElectoralDecline {
  election: string;
  seats?: number;
  voteShare?: string;
  note: string;
}

export interface SADFaction {
  name: string;
  leader: string;
  status: string;
  position?: string;
}

export interface BSPAlliance {
  status: string;
  date: string;
  current: string;
}

export interface PanthicIssues {
 akalTakhtAction: string;
  sgpcControl: string;
  impact: string;
}

export interface SADKeyLeader {
  name: string;
  status?: string;
  seat?: string;
  note: string;
}

// ============================================================
// SEAT PROJECTION & MONTE CARLO SIMULATION TYPES (from MP10-predictive-outcomes/models/seat-projection-montecarlo)
// ============================================================

export interface MonteCarloMetadata {
  documentationDate: string;
  source: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  task: string;
  dependencies: string;
}

export interface SimulationParameters {
  iterations: number;
  totalSeats: number;
  majorityThreshold: number;
  drawsPerIteration: number;
  totalDraws: number;
  performanceSeconds: number;
}

export interface VoteShareDistribution {
  seatType: "safe" | "competitive" | "tossup";
  marginThreshold: string;
  standardDeviation: string;
}

export interface CorrelationType {
  type: string;
  mechanism: string;
  strength: string;
  value?: string;
}

export interface RegionalWaveScaling {
  region: string;
  seats: number;
  waveIntensity: number;
  contestStructure: string;
  keyDynamics: string;
}

export interface IndependentCandidateModel {
  baselineVoteShare: string;
  highIndependentSeats: string;
  spoilerEffect: string;
  regionalConcentration: string;
}

export interface HistoricalSwing {
  election: string;
  congressSwing: string;
  winnerSwing: string;
  seats?: number;
  note: string;
}

export interface ReservedSeatDynamics {
  total: number;
  percentage: number;
  congressWon2017: number;
  bspVoteShareReserved: string;
  bspVoteShareGeneral: string;
  doabaSCSeats: number;
}

export interface WinProbabilityThreshold {
  category: string;
  probabilityRange: string;
  color: string;
  description: string;
}

export interface ConfidenceInterval {
  level: string;
  congressRange: string;
  aapRange: string;
  sadBjpRange: string;
}

export interface SimulationOutputMetric {
  metric: string;
  description: string;
  formula?: string;
}

export interface SeatCategory {
  type: "swing" | "surge" | "safe" | "unlikely";
  congressProbability: string;
  strategicPriority: string;
}

export interface ScenarioComparison {
  scenario: string;
  description: string;
  expectedShift: string;
}

export interface ValidationBenchmark {
  election: string;
  expectedAccuracy: string;
  description: string;
}

export interface SensitivityParameter {
  parameter: string;
  variation: string;
  impactMetric: string;
}

export interface CalibrationStatus {
  backtestingComplete: boolean;
  sensitivityAnalysisComplete: boolean;
  recalibrationFrequency: string;
  nextRecalibration: string;
}

// ==========================================
// POST-ELECTION SCENARIOS (T-MP10-FUTR-001)
// ==========================================

export interface ConstitutionalFramework {
  article164: {
    description: string;
    councilOfMinisters: string;
    convention: string;
    floorTestTimeframe: string;
  };
  antiDefectionLaw: {
    schedule: string;
    disqualificationTriggers: string[];
    mergerThreshold: number;
    mergerThresholdSeats: number;
    speakerAuthority: string;
  };
  supremeCourtPrecedents: SupremeCourtPrecedent[];
}

export interface SupremeCourtPrecedent {
  case: string;
  year: number;
  keyRuling: string;
  relevance: string;
}

export interface ScenarioMatrix {
  scenarios: CongressScenario[];
}

export interface CongressScenario {
  scenarioId: "A" | "B" | "C" | "D" | "E";
  scenarioName: string;
  seatRange: string;
  probabilityAssessment: string;
  governmentFormation: GovernmentFormationDetails;
  cabinetConsiderations?: CabinetConsiderations;
  swot: SwotAnalysis;
  first100DaysAgenda?: string[];
}

export interface GovernmentFormationDetails {
  formation: string;
  floorTestTiming?: string;
  riskFactors?: string[];
  allianceMath?: AlliancePartner[];
  governorDynamics?: string[];
  horseTradingPrevention?: string[];
}

export interface AlliancePartner {
  party: string;
  likelySeats: string;
  region: string;
  conditions: string[];
}

export interface CabinetConsiderations {
  ministerCount: string;
  regionalBalance: string;
  communityRepresentation: string[];
  keyPortfolios: string[];
  experienceVsNewFaces: string;
}

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface PresidentsRuleScenario {
  triggerConditions: string[];
  maxDuration: string;
  likelihoodAssessment: string;
  historicalPrecedent: string[];
  congressPositioning: string[];
}

export interface CommunicationStrategy {
  victorySpeech: string[];
  coalitionAnnouncement: string[];
  concessionSpeech: string[];
  mediaManagement: MediaManagement;
}

export interface MediaManagement {
  designatedSpokesperson: string;
  speechesPrepared: boolean;
  socialMediaWarRoom: boolean;
  legalTeamOnStandby: boolean;
}

export interface LegalPreparedness {
  electionPetitions: ElectionPetitionDetails;
  recountRequests: RecountRequestDetails;
  disqualificationCases: DisqualificationCaseDetails;
  evmVvpatChallenges: EVMVVPATChallengeDetails;
}

export interface ElectionPetitionDetails {
  jurisdiction: string;
  filingDeadline: string;
  grounds: string[];
  preIdentifiedDistricts: string[];
}

export interface RecountRequestDetails {
  grounds: string[];
  marginThreshold: string;
  prePreparedApplications: string;
}

export interface DisqualificationCaseDetails {
  potentialGrounds: string[];
  monitoringAreas: string[];
}

export interface EVMVVPATChallengeDetails {
  currentRule: string;
  legalDemand: string;
  preservationPeriod: string;
}

export interface GovernmentFormationTimeline {
  day: string;
  action: string;
}

export interface KeyVariable {
  variable: string;
  impact: string;
}
