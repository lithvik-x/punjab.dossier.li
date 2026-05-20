// Political Landscape Synthesis Types for Punjab 2027
// Derived from: research P4/synthesis/s1-s8
// Date: May 20, 2026

// ==========================================
// REGIONAL TYPES
// ==========================================

export interface RegionalCasteEcosystem {
  caste: string;
  malwaPercent?: string;
  majhaPercent?: string;
  doabaPercent?: string;
  congressSupport: number;
  akaliSupport: number;
  aapSupport: number;
  keyIssue: string;
}

export interface RegionalProfile {
  region: "Malwa" | "Majha" | "Doaba";
  seats: number;
  description: string;
  keyCharacteristics: string[];
}

export interface RegionalAnalysis {
  profile: RegionalProfile;
  casteEcosystem: RegionalCasteEcosystem[];
  criticalFindings: string[];
  electoralImplications: string;
}

// ==========================================
// CASTE COALITION TYPES
// ==========================================

export interface CastePopulation {
  name: string;
  populationPercent: number;
  congressBase: number;
  keyIssue: string;
}

export interface CoalitionBlock {
  name: string;
  description: string;
  casteComponents: string[];
  fragilityFactors: string[];
}

export interface CoalitionViability {
  coalitionName: string;
  baseSupport: string;
  targetVotePercent: number;
  risks: string[];
}

export interface CasteCompatibilityMatrix {
  casteA: string;
  casteB: string;
  relationship: "Alliance" | "Cooperation" | "Neutral" | "Tension" | "Distance";
}

// ==========================================
// PARTY ALIGNMENT TYPES
// ==========================================

export interface PartyVoteShare {
  party: string;
  voteShare: number;
  trend: "up" | "down" | "stable";
  source?: string;
  date?: string;
}

export interface PartySeatProjection {
  party: string;
  optimistic: number;
  baseline: number;
  pessimistic: number;
}

export interface PartyStrengths {
  boothInfrastructure: number; // 1-10
  financialResources: number;
  leadershipUnity: number;
  cmFaceClarity: number;
  regionalStrength: number;
  factionalVulnerability: "CRITICAL" | "MODERATE" | "SEVERE" | "LOW";
  trajectory: "IMPROVING" | "DECLINING" | "STABLE";
}

// ==========================================
// CRISIS DATA TYPES
// ==========================================

export interface FarmerDebtCrisis {
  averageDebtPerHousehold: string; // Rs 2.03 lakh
  familiesInDebt: string; // 89%
  totalFarmLoans: string; // Rs 1.4 lakh crore
  farmSuicidePercent: string; // 80-90% in Malwa
  stateRank: string; // Last among 18 major states
}

export interface YouthUnemployment {
  statewide: number; // 20.2%
  doaba: string; // 32-38%
  rural: number; // 22.5%
  nationalAverage: number; // 14.6%
  ageGroup: string; // 18-35
}

export interface CrisisIntersection {
  feedbackLoop: string;
  primaryCause: string;
  regionalSeverity: {
    region: string;
    severity: "MAXIMUM" | "HIGH" | "MEDIUM";
  }[];
}

// ==========================================
// POWER BROKER TYPES
// ==========================================

export interface ArhtiyaNetwork {
  totalAgents: number;
  voterInfluencePerAgent: string; // 200-2000
  alignment: {
    akali: number;
    congress: number;
    aap: number;
    independent: number;
  };
  leveragePoint: string;
}

export interface DeraInfluence {
  name: string;
  seatsInfluenced: number;
  region: string;
  congressStatus: "Solid" | "Mixed" | "Lost" | "Neutral" | "Winnable";
  congressSupport?: number;
  strategy: "Defend" | "Court" | "Avoid" | "Monitor";
}

export interface CasteCouncilData {
  councilType: string;
  population: string;
  congressLoyalty: number;
  vulnerability: string;
  gotvLeverage: string;
}

// ==========================================
// PARTY MACHINERY TYPES
// ==========================================

export interface BoothOrganization {
  party: string;
  estimatedBooths: number;
  workersPerBooth: string;
  governanceLeverage: boolean;
  readiness: string;
}

export interface PartyFinances {
  party: string;
  estimatedAnnualFunds: string;
  governmentPatronage: boolean;
  fundraisingCapacity: string;
}

export interface LeadershipAssessment {
  leader: string;
  party: string;
  strengths: string[];
  weaknesses: string[];
  massConnect: "STRONG" | "MODERATE" | "WEAK";
  unified: boolean;
}

// ==========================================
// CANDIDATE QUALITY TYPES
// ==========================================

export interface CQIDimension {
  dimension: string;
  weight: number;
  scoringRange: { min: number; max: number };
}

export interface CQIBand {
  band: string;
  scoreRange: [number, number];
  eligibility: string;
  vulnerabilityRequirement: string;
}

export interface VulnerabilityFlag {
  flagType: string;
  threshold: string;
  riskLevel: "CRITICAL" | "HIGH" | "MEDIUM";
  mitigation: string;
}

export interface TicketAllocationSequence {
  phase: number;
  name: string;
  timeline: string;
  actions: string[];
}

// ==========================================
// VOTER DYNAMICS TYPES
// ==========================================

export interface VoterSegment {
  id: string;
  name: string;
  percentOfElectorate: string;
  swingProbability: number;
  primaryRegion: string;
  priorityLevel: "CRITICAL" | "HIGH" | "MODERATE" | "RETENTION";
  coreMessage: string;
  primaryChannel: string;
}

export interface VDJStage {
  stage: number;
  name: string;
  reachableSegments: string[];
  activationSpeed: string;
}

export interface GOTVIntervention {
  segment: string;
  difficulty: "HIGH" | "MEDIUM" | "LOW";
  primaryChallenge: string;
  interventionStrategy: string;
  expectedTurnoutImpact: string;
}

// ==========================================
// DIGITAL INTELLIGENCE TYPES
// ==========================================

export interface PlatformUsage {
  platform: string;
  youthUsagePercent: number;
  ranking: number;
  targetingCapability: "High" | "Medium" | "Low";
  congressGap: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM";
}

export interface DigitalGap {
  gap: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  impact: string;
  fillTime: string;
}

export interface WhatsAppArchitecture {
  level: number;
  name: string;
  description: string;
}

export interface DigitalBudget {
  component: string;
  lowCrore: number;
  highCrore: number;
  priority: "CRITICAL" | "HIGH" | "MEDIUM";
}

export interface NRIInfluence {
  country: string;
  population: string;
  engagementChannels: string[];
  congressGap: string;
}

// ==========================================
// OPPOSITION STRATEGY TYPES
// ==========================================

export interface SADStrategy {
  revivalPillars: string[];
  targetSeats: string;
  realisticCeiling: number;
  internalFragments: string[];
  exploitationOpportunity: string;
}

export interface AAPDefenseStrategy {
  pillars: string[];
  vulnerabilities: string[];
  brokenPromises: {
    promise: string;
    status: string;
  }[];
  bjpAsMainThreat: boolean;
}

export interface OppositionThreatAssessment {
  party: string;
  threatLevel: "HIGH" | "MEDIUM" | "LOW";
  primaryThreatType: string;
  exploitableWeakness: string;
}

// ==========================================
// SCENARIO ANALYSIS TYPES
// ==========================================

export interface ElectionScenario {
  scenarioName: string;
  seats: {
    congress?: number;
    aap?: number;
    akali?: number;
    bjp?: number;
    others?: number;
  };
  requirements: string[];
  likelihood: string;
}

export interface CoalitionMath {
  party: string;
  pathTo59: string[];
  gapAnalysis: string[];
  uncomfortableAlliances: string[];
}

// ==========================================
// STRATEGIC INSIGHT TYPES
// ==========================================

export interface StrategicInsight {
  insightId: string;
  title: string;
  problem: string;
  opportunity: string;
  recommendation: string;
  priority: "IMMEDIATE" | "HIGH" | "MEDIUM";
}

// ==========================================
// TREND ANALYSIS TYPES
// ==========================================

export interface PartyTrajectory {
  party: string;
  trajectory: string;
  currentPosition: string;
  structuralCeiling?: string;
  keyRisk?: string;
}

export interface RegionalTrajectory {
  region: "Malwa" | "Majha" | "Doaba";
  trajectoryAssessment: string;
  currentState: string[];
  projection2027: {
    bestCase: string;
    baseCase: string;
    worstCase: string;
  };
  swingFactors: string[];
}

export interface TrendScenario {
  scenarioName: string;
  seats: Record<string, number>;
  requirements: string[];
  likelihood: string;
}

export interface SwingFactor {
  factorId: string;
  description: string;
  indicator: string;
}

// ==========================================
// SWING CALCULATION TYPES
// ==========================================

export interface SwingSegment {
  id: string;
  name: string;
  percentOfElectorate: string;
  voterCount: string;
  swingProbability: string;
  congressSwingGain: string;
  regionConcentration: string;
}

export interface CasteSwingCalculation {
  caste: string;
  population: string;
  currentCongressPercent: number;
  targetCongressPercent: number;
  voterGain: string;
  seatImpact: string;
}

export interface MalwaSwingEquation {
  currentSeats: number;
  targetSeats: number;
  requiredSwing: string;
  totalSwingImpact: string;
  projectedOutcome: string;
}

export interface FlippableSeat {
  seat: string;
  region: string;
  priority: "VERY_HIGH" | "HIGH" | "MEDIUM";
  flipPotential: string;
}

// ==========================================
// RISK-OPPORTUNITY TYPES
// ==========================================

export interface RiskItem {
  riskId: string;
  title: string;
  category: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM";
  likelihood: string;
  impact: string;
  velocity: string;
  mitigation: string[];
}

export interface OpportunityItem {
  opportunityId: string;
  title: string;
  category: string;
  urgency: "IMMEDIATE" | "HIGH" | "MEDIUM";
  potentialImpact: string;
  timing: string;
  exploitationStrategy: string[];
}

// ==========================================
// STRATEGIC RECOMMENDATIONS TYPES
// ==========================================

export interface PriorityVoterSegment {
  rank: number;
  segment: string;
  size: string;
  currentCongressPercent: string;
  targetPercent: string;
  seatImpact: string;
  roi: string;
}

export interface RegionalPriority {
  region: string;
  seats: number;
  resourceAllocation: string;
  target: string;
  subRegionPriorities: {
    subRegion: string;
    seats: number;
    priorityIssue: string;
    flipPotential: string;
  }[];
}

export interface TimelineMilestone {
  phase: string;
  action: string;
  owner: string;
  deadline: string;
  successMetric: string;
}

export interface ResourceAllocation {
  category: string;
  amount: string;
  breakdown: string[];
}

// ==========================================
// MAIN EXPORT - POLITICAL LANDSCAPE SYNTHESIS
// ==========================================

export interface PoliticalLandscapeSynthesis {
  synthesisDate: string;
  sourceFiles: string[];

  // Regional Analysis
  regionalAnalysis: RegionalAnalysis[];

  // Caste Data
  castePopulation: CastePopulation[];
  coalitionBlocks: CoalitionBlock[];
  casteCompatibilityMatrix: CasteCompatibilityMatrix[];

  // Party Data
  partyVoteShare: PartyVoteShare[];
  partySeatProjection: PartySeatProjection[];
  partyStrengths: Record<string, PartyStrengths>;

  // Crisis Data
  farmerDebtCrisis: FarmerDebtCrisis;
  youthUnemployment: YouthUnemployment;
  crisisIntersection: CrisisIntersection;

  // Power Brokers
  arhtiyaNetwork: ArhtiyaNetwork;
  deraInfluence: DeraInfluence[];
  casteCouncils: CasteCouncilData[];

  // Party Machinery
  boothOrganization: BoothOrganization[];
  partyFinances: PartyFinances[];
  leadershipAssessment: LeadershipAssessment[];

  // Voter Dynamics
  voterSegments: VoterSegment[];
  vdjStages: VDJStage[];
  gotvInterventions: GOTVIntervention[];

  // Digital
  platformUsage: PlatformUsage[];
  digitalGaps: DigitalGap[];
  whatsappArchitecture: WhatsAppArchitecture[];
  digitalBudget: DigitalBudget[];
  nriInfluence: NRIInfluence[];

  // Opposition
  sadStrategy: SADStrategy;
  aapDefenseStrategy: AAPDefenseStrategy;
  oppositionThreatAssessment: OppositionThreatAssessment[];

  // Scenarios
  electionScenarios: ElectionScenario[];
  coalitionMath: CoalitionMath;

  // Strategic Insights
  strategicInsights: StrategicInsight[];

  // Trend Analysis
  partyTrajectories: PartyTrajectory[];
  regionalTrajectories: RegionalTrajectory[];
  trendScenarios: TrendScenario[];
  swingFactors: SwingFactor[];

  // Swing Calculation
  swingSegments: SwingSegment[];
  casteSwingCalculations: CasteSwingCalculation[];
  malwaSwingEquation: MalwaSwingEquation;
  flippableSeats: FlippableSeat[];

  // Risk-Opportunity
  risks: RiskItem[];
  opportunities: OpportunityItem[];

  // Strategic Recommendations
  priorityVoterSegments: PriorityVoterSegment[];
  regionalPriorities: RegionalPriority[];
  timelineMilestones: TimelineMilestone[];
  resourceAllocations: ResourceAllocation[];
}

// ==========================================
// VERIFIED STATISTICS
// ==========================================

export interface VerifiedStatistic {
  metric: string;
  value: string | number;
  source: string;
  date: string;
}

export const POLITICAL_LANDSCAPE_KEY_STATS: VerifiedStatistic[] = [
  { metric: "Malwa Assembly Seats", value: 73, source: "Hindustan Times", date: "Jan 2017" },
  { metric: "Majha Assembly Seats", value: 25, source: "India.com", date: "Mar 2017" },
  { metric: "Doaba Assembly Seats", value: 23, source: "Framework", date: "" },
  { metric: "SC Population", value: "32%", source: "Indian Express", date: "Apr 2026" },
  { metric: "Jat Sikh Population", value: "20-21%", source: "The Hindu", date: "Jan 2022" },
  { metric: "Mazhabi Sikh Congress Base", value: "72%", source: "Framework", date: "" },
  { metric: "Ravidassia Congress Base", value: "55%", source: "Framework", date: "" },
  { metric: "Gujjar Congress Base", value: "50%", source: "Framework", date: "" },
  { metric: "Bania Congress Base", value: "35%", source: "Framework", date: "" },
  { metric: "Khatri Congress Base", value: "40%", source: "Framework", date: "" },
  { metric: "Brahmin Congress Base", value: "42%", source: "Framework", date: "" },
  { metric: "AAP Vote Share Decline", value: "42% → 26%", source: "Indian Express", date: "Jun 2024" },
  { metric: "BJP Vote Share (2024 LS)", value: "18.5-19%", source: "Frontline", date: "Feb 2026" },
  { metric: "Akali Dal ZP wins (Bathinda)", value: "13 of 17", source: "Tribune India", date: "Dec 2025" },
  { metric: "Farm Suicides (2023)", value: 174, source: "NCRB", date: "2023" },
  { metric: "Avg Farm Debt", value: "Rs 2.03 lakh", source: "NSO", date: "2023" },
  { metric: "Youth Unemployment", value: "20.2%", source: "PLFS", date: "Q2 2025" },
  { metric: "State Debt", value: "Rs 4.17 lakh crore", source: "NITI Aayog", date: "2025" },
  { metric: "Channi LS Vote Margin", value: "1.76 lakh", source: "Indian Express", date: "Jun 2024" },
];
