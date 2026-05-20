// Competition Strategy Types for Punjab 2027
// Derived from: direct-documentation/cat-6-competition/
// Date: 20 May 2026 | Data Currency: May 2026

// ==========================================
// VERIFICATION STATUS
// ==========================================

export type VerificationLevel = "HIGH" | "MEDIUM" | "LOW";

// ==========================================
// AAP PARTY HISTORY TYPES
// ==========================================

export interface AAPOrigin {
  movement: string;
  year: number;
  founder: string;
  background: string;
}

export interface AAPDelhiGovernance {
  firstGovernment: {
    year: number;
    duration: string;
    reason: string;
  };
  secondGovernment: {
    year: number;
    seats: number;
    voteShare: number;
    keyInitiatives: string[];
  };
  mohallaClinics: {
    established: number;
    patientsPerDay: number;
    status: string;
  };
  electricityScheme: {
    freeUnits: number;
    subsidyModel: string;
  };
}

export interface AAPPunjabEntry {
  year: number;
  firstElection: string;
  seatsWon: number;
  voteShare: number;
  breakthrough: string;
}

export interface AAP2022Victory {
  seats: number;
  voteShare: number;
  chiefMinister: string;
  breakthrough: string;
}

export interface AAPKeyPromise {
  promise: string;
  delivery: string;
  status: string;
  details?: string;
}

export interface AAPGovernanceRecord2022 {
  freeElectricity: {
    delivered: boolean;
    scheme: string;
    cost: string;
    sustainability: string;
  };
  mohallaClinics: {
    established: number;
    status: string;
    specialistVacancies: string;
  };
  drugCrisis: {
    ooatClinics: string;
    enforcement: string;
    status: string;
  };
  lawAndOrder: {
    encounters: string;
    gangsterism: string;
    status: string;
  };
}

export interface AAPLeader {
  name: string;
  position: string;
  background: string;
  strengths?: string[];
  vulnerabilities?: string[];
}

// ==========================================
// SAD PARTY HISTORY TYPES
// ==========================================

export interface SADOrigins {
  movementYear: number;
  sgpcFormation: number;
  founders: string[];
  purpose: string;
}

export interface SADGovernancePeriod {
  period: string;
  chiefMinister: string;
  highlights: string[];
  controversies?: string[];
}

export interface SAD2022Collapse {
  seats: number;
  voteShare: string;
  reasons: string[];
}

export interface SADLeadership {
  name: string;
  position: string;
  tenure?: string;
  status: string;
  notes?: string;
}

export interface SADAlliance {
  partner: string;
  duration: string;
  status: "active" | "collapsed" | "none";
  endDate?: string;
  reason?: string;
}

// ==========================================
// BJP PUNJAB HISTORY TYPES
// ==========================================

export interface BJPLimitedBase {
  urbanHindu: string;
  borderAreas: string;
  merchantCommunity: string;
}

export interface BJPAllianceHistory {
  partner: string;
  startYear: number;
  endYear: number;
  seatSharing: string;
}

export interface BJP2022Performance {
  seats: number;
  voteShare: number;
  soloRun: boolean;
  mlAsElected: string;
}

export interface BJPCurrentStatus {
  statePresident: string;
  assemblySeats: number;
  lokSabhaSeats: number;
  soloStatus: string;
}

// ==========================================
// COMPETITIVE INTELLIGENCE TYPES
// ==========================================

export interface SWOTItem {
  dimension: "strengths" | "weaknesses" | "opportunities" | "threats";
  items: string[];
}

export interface PESTLEFactor {
  category: string;
  factors: string[];
}

export interface VulnerabilityAssessment {
  type: string;
  description: string;
  seats?: number;
}

export interface CompetitorProfile {
  party: string;
  strengths: string[];
  weaknesses: string[];
  morphology: string;
  leadership: string;
  digitalFootprint?: string;
  financial?: string;
}

// ==========================================
// VOTE TRANSFER & ALLIANCE MATHEMATICS TYPES
// ==========================================

export interface VoteTransferEfficiency {
  from: string;
  to: string;
  efficiencyRate: string;
  notes: string;
}

export interface SeatSharingFactor {
  factor: string;
  description: string;
  formula?: string;
}

export interface AllianceScenario {
  scenario: string;
  seats: string;
  effect: string;
  marginalSeats?: string[];
  probability: string;
}

export interface GameTheoryModel {
  model: string;
  application: string;
  formula?: string;
}

// ==========================================
// FARMERS PROTEST TYPES
// ==========================================

export interface FarmLaw {
  name: string;
  year: number;
  description: string;
  coreGrievances: string[];
}

export interface FarmerUnion {
  name: string;
  base: string;
  politicalAlignment: string;
  currentPosition: string;
}

export interface BKUFaction {
  name: string;
  leader: string;
  orientation: string;
  notes?: string;
}

export interface FarmersProtestTimeline {
  date: string;
  event: string;
}

export interface AllianceBreakup {
  party: string;
  date: string;
  reason: string;
  impact: string;
}

export interface MSPStatus {
  legalGuarantee: string;
  currentStatus: string;
  coverage: string;
  procurementData: string;
}

export interface StubbleManagement {
  problem: string;
  cost: string;
  subsidy: string;
  environmentalPenalty: string;
}

export interface FarmerVoteDynamics {
  ruralPopulation: string;
  farmHouseholds: string;
  influencedVotes: string;
  votingFactors: string[];
  partyAppeal: {
    congress: string;
    aap: string;
    sad: string;
  };
}

// ==========================================
// DERA POLITICS TYPES
// ==========================================

export type DeraType = "Sikh-derived" | "Hindu-derived" | "Syncretic";
export type DeraPoliticalAlignment = "Pro-Congress" | "Pro-SAD" | "Pro-AAP" | "Swing";

export interface DeraSocialMechanism {
  mechanism: string;
  description: string;
}

export interface DeraOrganizationalInfrastructure {
  component: string;
  description: string;
}

export interface DeraVoterContact {
  method: string;
  description: string;
}

export interface DeraFollowerCategory {
  category: string;
  percentage: string;
  votingBehavior: string;
}

export interface DeraRegionPattern {
  region: string;
  seats: number;
  keyDeras: string[];
  notes?: string;
}

export interface DeraConstituencyLinkage {
  constituency: string;
  dera: string;
  influence: string;
  followerBloc: string;
}

export interface DeraCasteMapping {
  caste: string;
  primaryDera: string;
  secondary?: string;
}

export interface DeraSupariPayment {
  type: string;
  form: string;
  amount: string;
}

export interface DeraEngagementFramework {
  phase: string;
  timeline: string;
  action: string;
}

export interface MajorDeraProfile {
  name: string;
  headquarters: string;
  leader: string;
  followerBase: string;
  casteComposition: string;
  politicalAlignment: string;
  keySeats: string;
  notes?: string;
}

// ==========================================
// PANTHIC POLITICS TYPES
// ==========================================

export interface SGPCElectionResult {
  year: number;
  winner: string;
  seats: number;
  significance: string;
}

export interface SGPCStructure {
  electedMembers: number;
  nominatedMembers: number;
  annualBudget: string;
}

export interface PanthicTrigger {
  trigger: string;
  description: string;
  activation: string;
}

export interface SGPCPoliticalSignificance {
  barometer: string;
  organizationalTest: string;
  financialControl: string;
}

export interface AkaliPanthicStrategy {
  strategy: string;
  description: string;
}

export interface CongressPanthicDilemma {
  problem: string;
  mitigationStrategies: string[];
  coreSikhVote: string;
}

export interface AAPPanthicDisruption {
  innovation: string;
  developmentPlusIdentity: string[];
  organizationalReach: string[];
}

// ==========================================
// AAP ATTACK SURFACE TYPES
// ==========================================

export interface AAPBrokenPromise {
  promise: string;
  originalPromise: string;
  deliveryStatus: string;
  evidence: string[];
  gap?: string;
  attackLine?: string;
  quoteCard?: string;
}

export interface AAPGovernanceFailure {
  sector: string;
  assessment: string;
  incidents: string[];
  statistics?: string[];
  congressAttackLine?: string;
}

export interface AAPCorruptionCase {
  minister: string;
  position: string;
  caseType: string;
  date: string;
  status: string;
  details: string;
}

export interface AAPGangsterismIncident {
  date: string;
  incident: string;
  victim?: string;
  location?: string;
}

export interface AAPDrugCrisisData {
  firs: string;
  arrests: string;
  heroinSeized: string;
  villageReports?: string;
  status: string;
}

export interface AAPHealthcareGap {
  metric: string;
  value: string;
  description: string;
}

export interface AAPEducationGap {
  metric: string;
  vacant: string;
  total: string;
  percentage: string;
}

// ==========================================
// DIGITAL COUNTER-CAMPAIGN TYPES
// ==========================================

export interface DigitalThreatActor {
  party: string;
  teamSize: string;
  whatsappReach?: string;
  handles: number;
  coordination: string;
  responseTime: string;
  capabilities: string[];
}

export interface DigitalCongressGaps {
  gap: string;
  description: string;
  impact: string;
}

export interface TruthStackLayer {
  layer: number;
  name: string;
  description: string;
  responseTime: string;
}

export interface WhatsAppRumorTier {
  tier: string;
  severity: string;
  description: string;
  responseTime: string;
}

export interface InfluencerTier {
  tier: number;
  name: string;
  followers: string;
  compensation: string;
  targetContent: string;
}

export interface SocialMediaResponse {
  platform: string;
  responseTime: string;
  tone: string;
  rules: string[];
}

export interface WikipediaDefense {
  action: string;
  timeline: string;
  budget: string;
}

export interface DeepfakeResponse {
  detection: string;
  verification: string;
  legalNotice: string;
  platformTakedown: string;
  counterVideo: string;
}

export interface CrisisEscalationLevel {
  level: number;
  name: string;
  criteria: string[];
  response: string;
}

export interface WarRoomRole {
  role: string;
  count: number;
  responsibility: string;
}

export interface DigitalBudgetCategory {
  category: string;
  costRange: string;
}

export interface DigitalBudgetSummary {
  staffing: string;
  tools: string;
  wikipedia: string;
  ads: string;
  influencers: string;
  legal: string;
  memeDesk: string;
  nriCell: string;
  total: string;
}

// ==========================================
// COMPREHENSIVE DATA STRUCTURES
// ==========================================

export interface AAPHistoryReport {
  reportDate: string;
  origin: AAPOrigin;
  delhiGovernance: AAPDelhiGovernance;
  punjabEntry: AAPPunjabEntry;
  victory2022: AAP2022Victory;
  keyPromises: AAPKeyPromise[];
  governanceRecord: AAPGovernanceRecord2022;
  leaders: AAPLeader[];
}

export interface SADHistoryReport {
  reportDate: string;
  origins: SADOrigins;
  governancePeriods: SADGovernancePeriod[];
  alliance: SADAlliance;
  collapse2022: SAD2022Collapse;
  leadership: SADLeadership[];
  keyIssues?: string[];
}

export interface BJPHistoryReport {
  reportDate: string;
  limitedBase: BJPLimitedBase;
  allianceHistory: BJPAllianceHistory;
  performance2022: BJP2022Performance;
  currentStatus: BJPCurrentStatus;
  rssConnection?: string;
}

export interface CompetitiveIntelligenceReport {
  reportDate: string;
  swot: SWOTItem[];
  pestle: PESTLEFactor[];
  vulnerabilities: VulnerabilityAssessment[];
  competitorProfiles: CompetitorProfile[];
  voteTransferEfficiency: VoteTransferEfficiency[];
  seatSharingFactors: SeatSharingFactor[];
  allianceScenarios: AllianceScenario[];
  gameTheoryModels: GameTheoryModel[];
  historicalElectionResults: {
    year: number;
    congress: number;
    aap: number;
    sad: number;
    bjp: number;
    bsp: number;
    others: number;
  }[];
}

export interface FarmersProtestReport {
  reportDate: string;
  farmLaws: FarmLaw[];
  keyUnions: FarmerUnion[];
  bkuFactions: BKUFaction[];
  protestTimeline: FarmersProtestTimeline[];
  allianceBreakup: AllianceBreakup;
  mspStatus: MSPStatus;
  stubbleManagement: StubbleManagement;
  farmerVoteDynamics: FarmerVoteDynamics;
  policyPromises2027: {
    promise: string;
    feasibility: string;
    challenges: string[];
  }[];
}

export interface DeraPoliticsReport {
  reportDate: string;
  deraTypes: DeraType[];
  socialMechanisms: DeraSocialMechanism[];
  organizationalInfrastructure: DeraOrganizationalInfrastructure[];
  voterContactMethods: DeraVoterContact[];
  followerCategories: DeraFollowerCategory[];
  regionalPatterns: DeraRegionPattern[];
  constituencyLinkages: DeraConstituencyLinkage[];
  casteMappings: DeraCasteMapping[];
  supariSystem: {
    definition: string;
    paymentTypes: DeraSupariPayment[];
    marketDynamics: string[];
    legalStatus: string;
  };
  majorDeras: MajorDeraProfile[];
  engagementFramework: DeraEngagementFramework[];
  congressStrategy: {
    advantages: string[];
    risks: string[];
    negotiationTips: string[];
  };
}

export interface PanthicPoliticsReport {
  reportDate: string;
  historicalTrajectory: {
    period: string;
    keyEvents: string[];
  }[];
  sgpcElections: SGPCElectionResult[];
  sgpcStructure: SGPCStructure;
  panthicTriggers: PanthicTrigger[];
  institutionalRoles: {
    institution: string;
    role: string;
    politicalSignificance: string;
  }[];
  akaliPanthicStrategy: AkaliPanthicStrategy[];
  congressDilemma: CongressPanthicDilemma;
  aapDisruption: AAPPanthicDisruption;
}

export interface AAPAttackSurfaceReport {
  reportDate: string;
  brokenPromises: AAPBrokenPromise[];
  governanceFailures: AAPGovernanceFailure[];
  corruptionCases: AAPCorruptionCase[];
  gangsterismIncidents: AAPGangsterismIncident[];
  drugCrisis: AAPDrugCrisisData;
  healthcareGaps: AAPHealthcareGap[];
  educationGaps: AAPEducationGap[];
  summary: {
    totalPromises: number;
    failed: number;
    partiallyDelivered: number;
    fulfilled: number;
  };
}

export interface DigitalCounterCampaignReport {
  reportDate: string;
  threatLandscape: {
    aapDigital: DigitalThreatActor;
    bjpDigital: DigitalThreatActor;
  };
  congressGaps: DigitalCongressGaps[];
  truthStack: TruthStackLayer[];
  whatsappStrategy: {
    rumorTiers: WhatsAppRumorTier[];
    factCheckCascade: string;
    truthSpreaderNetwork: string;
  };
  socialMediaDefense: SocialMediaResponse;
  influencerDefense: {
    tiers: InfluencerTier[];
    nriPriority: string;
    hostileInfluencerResponse: string;
  };
  memeWarfare: {
    strategy: string;
    rules: string[];
    production: string;
  };
  deepfakeResponse: DeepfakeResponse;
  crisisEscalation: CrisisEscalationLevel[];
  warRoomStructure: {
    roles: WarRoomRole[];
    totalStaff: number;
  };
  budgetSummary: DigitalBudgetSummary;
}
