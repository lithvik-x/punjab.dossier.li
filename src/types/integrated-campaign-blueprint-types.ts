// Integrated Campaign Blueprint Template Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g9-integrated-campaign-blueprint-template.md

// ==========================================
// CAMPAIGN MISSION
// ==========================================

export interface CampaignMission {
  objective: string;
  target: string;
  timeline: string;
  missionStatement: string;
}

export interface CurrentPosition {
  congress2022Result: string;
  aap2022Result: string;
  sadBjp2022Result: string;
  congressTarget2027: string;
  requiredSwing: string;
}

export interface StrategicChallenge {
  challenge: string;
  description: string;
}

// ==========================================
// VICTORY PATHWAYS
// ==========================================

export interface VictoryPathwayDetail {
  name: string;
  description: string;
  seatTarget: string;
  keyRequirements: string[];
  risks: string[];
}

// ==========================================
// STRATEGIC PILLARS
// ==========================================

export interface StrategicPillar {
  pillar: string;
  description: string;
  keyActions: string[];
}

export interface RegionalStrategy {
  region: string;
  focus: string;
  priorityActions: string[];
}

// ==========================================
// TARGET VOTER SEGMENTS
// ==========================================

export interface TargetVoterSegment {
  segment: string;
  size: string;
  currentPosition: string;
  targetPosition: string;
  keyMessages: string[];
}

export interface VoterCoalition {
  name: string;
  components: string[];
  targetSeats: string;
}

// ==========================================
// NARRATIVE FRAMEWORK
// ==========================================

export interface NarrativeTheme {
  theme: string;
  tagline: string;
  coreStory: string;
}

export interface NarrativePillar {
  pillar: string;
  description: string;
  evidence: string[];
}

export interface AttackNarrative {
  target: string;
  line: string;
  evidence: string[];
}

// ==========================================
// GROUND GAME ARCHITECTURE
// ==========================================

export interface BoothOrganizationStandard {
  component: string;
  requirement: string;
}

export interface WorkerDeploymentTarget {
  area: string;
  target: string;
}

export interface GOTVStrategy {
  phase: string;
  focus: string;
  metrics: string[];
}

// ==========================================
// RESOURCE ALLOCATION
// ==========================================

export interface BudgetAllocationPrinciple {
  category: string;
  percentage: string;
  rationale: string;
}

export interface PrioritySeatInvestment {
  seatCategory: string;
  perSeatBudget: string;
  totalBudget: string;
}

// ==========================================
// CAMPAIGN TIMELINE
// ==========================================

export interface CampaignPhaseTimeline {
  phase: string;
  timeline: string;
  objectives: string[];
  keyActivities: string[];
}

export interface Milestone {
  date: string;
  milestone: string;
  successCriteria: string;
}

// ==========================================
// COALITION STRATEGY
// ==========================================

export interface PotentialAlly {
  party: string;
  alignment: string;
  seatNegotiation: string;
}

export interface CommunityOutreachTarget {
  community: string;
  currentAlignment: string;
  targetAlignment: string;
  approach: string;
}

// ==========================================
// RISK MANAGEMENT
// ==========================================

export interface CampaignRisk {
  risk: string;
  probability: string;
  impact: string;
  mitigation: string;
}

export interface ContingencyScenario {
  scenario: string;
  trigger: string;
  response: string[];
}

// ==========================================
// SUCCESS METRICS
// ==========================================

export interface KPIProgressMetric {
  metric: string;
  baseline: string;
  target: string;
  measurement: string;
}

export interface VictoryIndicator {
  indicator: string;
  target: string;
  timeline: string;
}
