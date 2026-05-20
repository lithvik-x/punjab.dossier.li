// KPI Monitoring, Escalation & Course Correction Framework Types
// Source: MP10-predictive-outcomes/kpis/monitoring-escalation-framework.md

// ============================================================
// CYCLE 2: KPI TRAFFIC LIGHT SYSTEM
// ============================================================

export type TrafficLightStatus = "GREEN" | "YELLOW" | "RED";

export interface TrafficLightDefinition {
  status: TrafficLightStatus;
  criteria: string;
  visual: string;
  interpretation: string;
}

export interface KPIThresholdExample {
  kpi: string;
  green: string;
  yellow: string;
  red: string;
}

// ============================================================
// CYCLE 3: MONITORING CADENCE
// ============================================================

export type ReviewCycleType = "daily" | "weekly" | "fortnightly" | "monthly";

export interface ReviewCycle {
  type: ReviewCycleType;
  frequency: string;
  dayTime: string;
  participants: string[];
  duration: string;
  inputs: string[];
  outputs: string[];
  reviewItems?: string[];
  focusAreas?: string[];
  agenda?: string[];
}

export interface DailyReview extends ReviewCycle {
  type: "daily";
  time: string;
}

export interface WeeklyReview extends ReviewCycle {
  type: "weekly";
  standardAgenda: string[];
}

export interface FortnightlyReview extends ReviewCycle {
  type: "fortnightly";
  focusAreas: string[];
}

export interface MonthlyBoardReview extends ReviewCycle {
  type: "monthly";
  agenda: string[];
}

// ============================================================
// CYCLE 4: ESCALATION FRAMEWORK
// ============================================================

export type EscalationLevel = "L1" | "L2" | "L3" | "L4";

export interface EscalationConfig {
  level: EscalationLevel;
  authority: string;
  trigger: string;
  responseTime: string;
  action: string;
}

export interface EscalationCommunicationProtocol {
  level: EscalationLevel;
  communicationMethod: string;
  timeline: string;
}

export interface DeEscalationCriteria {
  fromRedToYellow: string[];
  fromYellowToGreen: string[];
}

// ============================================================
// CYCLE 3-4: COURSE CORRECTION PROTOCOLS
// ============================================================

export type InterventionType = "micro-correction" | "resource-surge" | "narrative-pivot" | "candidate-intervention" | "strategy-overhaul";

export interface CourseCorrectionStep {
  step: number;
  name: string;
  duration: string;
  description: string;
  output: string;
}

export interface StayVsPivotCondition {
  condition: string;
  decision: string;
}

export interface InterventionAction {
  type: InterventionType;
  trigger: string;
  authority: string;
  typicalDuration: string;
}

// ============================================================
// CYCLE 4: PUNJAB-SPECIFIC ESCALATION SCENARIOS
// ============================================================

export interface PunjabScenario {
  scenario: string;
  detection: string;
  escalationPath: string[];
  context?: string;
  verificationNeeded?: string;
}

export interface FactionalInfightingData extends PunjabScenario {
  scenario: "Factional Infighting";
  detection: string;
  escalationPath: string[];
  context: string;
  verificationNeeded: string;
}

export interface CompetitorAllianceData extends PunjabScenario {
  scenario: "Sudden Competitor Alliance";
  detection: string;
  escalationPath: string[];
  verificationNeeded: string;
}

export interface AAPPolicyAnnouncementData extends PunjabScenario {
  scenario: "Major AAP Policy Announcement";
  detection: string;
  escalationPath: string[];
  counterStrategyOptions: string[];
}

export interface CommunalTensionData extends PunjabScenario {
  scenario: "Communal Tension Spike";
  detection: string;
  escalationPath: string[];
  protocol: string;
}

// ============================================================
// CYCLE 3-4: RED TEAM EXERCISES
// ============================================================

export interface RedTeamAssumption {
  number: number;
  assumption: string;
  challengeQuestion: string;
}

export interface RedTeamExercise {
  frequency: string;
  duration: string;
  participants: string[];
  purpose: string;
  assumptions: RedTeamAssumption[];
}

export interface RedTeamOutput {
  assumptionTested: string;
  scenarioWhereWrong: string;
  warningIndicators: string;
  preemptiveAction: string;
}

// ============================================================
// CYCLE 3-4: WAR ROOM DECISION LOG
// ============================================================

export interface DecisionLogEntry {
  decisionId: string;
  dateTime: string;
  trigger: string;
  decision: string;
  authority: string;
  responsible: string;
  deadline: string;
  successMetric: string;
  reviewDate: string;
  outcome?: "worked" | "partially-worked" | "failed";
}

export interface AccountabilityPrinciple {
  number: number;
  principle: string;
  description: string;
}

export interface AuditSummary {
  totalDecisions: number;
  onTime: number;
  delayed: number;
  achievedOutcome: number;
  failed: number;
  patternAnalysis: string;
  recommendations: string;
}

// ============================================================
// PHASE-WISE KPI FRAMEWORK - MP10-predictive-outcomes/kpis/phase-wise-kpi-framework.md
// ============================================================

export type KPIStatus = "green" | "amber" | "red" | "pending";

export interface KPI {
  id: string;
  kpi: string;
  target: string;
  measurement: string;
  alertThreshold: string;
  status?: KPIStatus;
  currentValue?: string | number;
}

export interface PhaseCategory {
  name: string;
  kpis: KPI[];
}

export interface CampaignPhase {
  // Legacy field names (used by older code)
  phase: number;
  phaseName: string;
  timeline: string;
  strategicObjective: string;
  categories: PhaseCategory[];
  // New field names (used by newer code)
  id: number;
  name: string;
  description: string;
  kpiCount: number;
  kpis: KPI[];
}

export interface ReportingCadence {
  phase: string;
  frequency: string;
  keyMetrics: string;
  escalation: string;
}

export interface TrafficLightThreshold {
  GREEN: number;
  AMBER_LOW: number;
  AMBER: number;
  RED: number;
}

export interface KPIDataSource {
  source: string;
  type: string;
  description: string;
}

export interface KPIRisk {
  severity: string;
  phase: string;
  risk: string;
  mitigation?: string;
}

// Phase 1: Foundation KPIs
export const PHASE1_INFRASTRUCTURE_KPIS: KPI[] = [
  {
    id: "1.1",
    kpi: "Baseline survey completion",
    target: "50,000+ interviews across all 117 ACs",
    measurement: "Survey platform dashboard; coverage report by AC",
    alertThreshold: "<30,000 by Jul 15",
  },
  {
    id: "1.2",
    kpi: "Booth-level committee verification",
    target: "100% of ~24,000 booths verified with president + 5 members",
    measurement: "MIS report from district presidents; random audit 10%",
    alertThreshold: "<70% by Jul 31",
  },
  {
    id: "1.3",
    kpi: "Digital presence establishment",
    target: "Functional website, social handles (Twitter/X, Instagram, Facebook, YouTube) with brand guidelines live",
    measurement: "Content audit checklist",
    alertThreshold: "Not live by Jun 30",
  },
  {
    id: "1.4",
    kpi: "Intelligence dashboard operational",
    target: "Dashboard with demographics, competitor tracking, sentiment baseline loaded",
    measurement: "Technical acceptance test",
    alertThreshold: "Not operational by Jul 15",
  },
  {
    id: "1.5",
    kpi: "Monitoring system live",
    target: "Social listening, media monitoring, and Opposition tracking feeds active",
    measurement: "Dashboard uptime >95%",
    alertThreshold: "Not live by Jul 31",
  },
];

export const PHASE1_HR_KPIS: KPI[] = [
  {
    id: "1.6",
    kpi: "Core campaign team recruited",
    target: "Campaign manager, media head, digital head, ground ops head, data head, 5 regional coordinators",
    measurement: "HR onboarding records",
    alertThreshold: "<80% by Jul 15",
  },
  {
    id: "1.7",
    kpi: "District coordinators appointed",
    target: "All 23 districts have a Congress-appointed coordinator with contact verified",
    measurement: "District reporting system",
    alertThreshold: "<20/23 by Jul 31",
  },
  {
    id: "1.8",
    kpi: "Volunteer registration drive launched",
    target: "Online + offline registration portal live; target 50,000 registered",
    measurement: "Registration dashboard",
    alertThreshold: "<20,000 by Aug 15",
  },
];

export const PHASE1_STRATEGIC_KPIS: KPI[] = [
  {
    id: "1.9",
    kpi: "Candidate longlisting complete",
    target: "All 117 ACs have a longlist of 3-5 potential candidates based on winnability analysis",
    measurement: "Candidate committee report",
    alertThreshold: "<90 ACs by Aug 15",
  },
  {
    id: "1.10",
    kpi: "Manifesto drafting initiated",
    target: "Thematic clusters identified; first draft of 10 key promises based on survey data",
    measurement: "Draft document review",
    alertThreshold: "No draft by Aug 15",
  },
  {
    id: "1.11",
    kpi: "Fundraising pipeline initiated",
    target: "Donor database built; initial outreach to top 100 donors; target INR 5 crore committed",
    measurement: "CRM tracking",
    alertThreshold: "<INR 2 crore by Aug 31",
  },
];

// Phase 2: Buildup KPIs
export const PHASE2_CANDIDATE_MANIFESTO_KPIS: KPI[] = [
  {
    id: "2.1",
    kpi: "All 117 candidates selected",
    target: "Official announcement with EC-compliant paperwork",
    measurement: "Party announcement records",
    alertThreshold: "<100 by Oct 31",
  },
  {
    id: "2.2",
    kpi: "Manifesto launched",
    target: "Public launch event + digital release; media coverage in top 10 Punjab outlets",
    measurement: "Media tracking report",
    alertThreshold: "Not launched by Nov 15",
  },
  {
    id: "2.3",
    kpi: "Narrative testing complete",
    target: "Core campaign message tested via focus groups in 10 ACs across 3 regions; >60% positive response",
    measurement: "Focus group report",
    alertThreshold: "<50% positive or not done by Oct 31",
  },
];

export const PHASE2_VOLUNTEER_GROUND_KPIS: KPI[] = [
  {
    id: "2.4",
    kpi: "Volunteers trained",
    target: "2,00,000 (2 lakh) volunteers registered and undergone basic training",
    measurement: "Training module completion records",
    alertThreshold: "<1 lakh by Nov 15",
  },
  {
    id: "2.5",
    kpi: "Constituency dossiers complete",
    target: "117 AC-level dossiers with demographics, caste matrix, key issues, Opposition analysis, win pathways",
    measurement: "Quality audit of 20 random dossiers",
    alertThreshold: "<80 dossiers by Nov 1",
  },
  {
    id: "2.6",
    kpi: "Booth-level micro-plans drafted",
    target: "Each booth has a plan: target voters, volunteers assigned, material distributed",
    measurement: "MIS report from district coordinators",
    alertThreshold: "<50% by Nov 15",
  },
];

export const PHASE2_DIGITAL_MEDIA_KPIS: KPI[] = [
  {
    id: "2.7",
    kpi: "Digital audience targets met",
    target: "10 lakh+ social media followers across platforms; 50,000+ WhatsApp group network nodes",
    measurement: "Platform analytics",
    alertThreshold: "<5 lakh by Nov 30",
  },
  {
    id: "2.8",
    kpi: "Fundraising on track",
    target: "INR 25 crore cumulative committed; 30% disbursed to AC-level operations",
    measurement: "Finance dashboard",
    alertThreshold: "<INR 15 crore by Nov 30",
  },
];

export const PHASE2_TRACKING_KPIS: KPI[] = [
  {
    id: "2.9",
    kpi: "Weekly tracking surveys initiated",
    target: "2,000 interviews/week across Punjab; rolling approval rating published weekly",
    measurement: "Survey vendor report",
    alertThreshold: "Not operational by Oct 15",
  },
];

// Phase 3: Intensification KPIs
export const PHASE3_VOTER_CONTACT_KPIS: KPI[] = [
  {
    id: "3.1",
    kpi: "Door-to-door (D2D) identification",
    target: "100% voter identification in target segments across all 117 ACs",
    measurement: "D2D app/report from field teams",
    alertThreshold: "<70% by Jan 15",
  },
  {
    id: "3.2",
    kpi: "D2D persuasion rate",
    target: ">75% of identified persuadable voters contacted with tailored messaging",
    measurement: "Persuasion tracking system",
    alertThreshold: "<50% by Jan 31",
  },
  {
    id: "3.3",
    kpi: "Rally & event execution",
    target: ">90% of planned rallies and public meetings held; avg attendance >5,000 per AC rally",
    measurement: "Event management reports",
    alertThreshold: "<60% rallies held",
  },
];

export const PHASE3_MEDIA_ADVERTISING_KPIS: KPI[] = [
  {
    id: "3.4",
    kpi: "Ad campaigns live",
    target: "Ads running on TV, digital, print, and outdoor in all 23 districts",
    measurement: "Media plan execution report",
    alertThreshold: "Not live by Dec 31",
  },
  {
    id: "3.5",
    kpi: "Media share of voice (SOV)",
    target: "Congress mentions >30% of total election coverage in Punjab media (TV + print + digital)",
    measurement: "Media monitoring dashboard",
    alertThreshold: "<20% sustained for 2 weeks",
  },
  {
    id: "3.6",
    kpi: "Daily tracking intensity",
    target: "2,000-3,000 interviews/week; daily sentiment score published to leadership",
    measurement: "Survey vendor dashboard",
    alertThreshold: "<1,500/week sustained",
  },
];

export const PHASE3_OPERATIONAL_KPIS: KPI[] = [
  {
    id: "3.7",
    kpi: "Volunteer active rate",
    target: ">70% of registered volunteers engaged in at least 1 activity/week",
    measurement: "Volunteer management system",
    alertThreshold: "<40% sustained",
  },
  {
    id: "3.8",
    kpi: "Booth agent training complete",
    target: "100% of booth agents trained in EC procedures, crowd management, and reporting",
    measurement: "Training attendance records",
    alertThreshold: "<80% by Jan 31",
  },
];

// Phase 4: Peak & Polling KPIs
export const PHASE4_FINAL_PUSH_KPIS: KPI[] = [
  {
    id: "4.1",
    kpi: "D2D second contact completion",
    target: ">95% of target voters receive a second contact (reminder + persuasion reinforcement)",
    measurement: "Field reports",
    alertThreshold: "<75% by polling eve",
  },
  {
    id: "4.2",
    kpi: "Maximum ad frequency",
    target: "All platforms at peak frequency; TV 8+ GRPs/day, digital 3+ impressions/target voter/day",
    measurement: "Media buying reports",
    alertThreshold: "Below threshold on any platform",
  },
  {
    id: "4.3",
    kpi: "Get-out-the-vote (GOTV) plan operational",
    target: "AC-wise turnout targets set; vehicle roster confirmed; volunteer assignments locked for each booth",
    measurement: "GOTV plan document signed off",
    alertThreshold: "Not finalized 7 days before polling",
  },
];

export const PHASE4_POLLING_DAY_KPIS: KPI[] = [
  {
    id: "4.4",
    kpi: "Agent presence at booths",
    target: "100% of ~24,000 booths have a trained Congress agent present at all times during polling",
    measurement: "Real-time agent check-in system",
    alertThreshold: "Any booth unreported by 9 AM",
  },
  {
    id: "4.5",
    kpi: "Voter turnout in target segments",
    target: ">75% turnout in Congress-favorable booths/segments vs. 2022 baseline",
    measurement: "Real-time turnout data from agents",
    alertThreshold: "<60% at midday in any AC",
  },
  {
    id: "4.6",
    kpi: "Incident reporting",
    target: "All polling irregularities reported within 30 minutes; legal team response within 1 hour",
    measurement: "Incident management dashboard",
    alertThreshold: ">5 unreported incidents in any AC",
  },
];

// Phase 5: Post-Election KPIs
export const PHASE5_ANALYSIS_KPIS: KPI[] = [
  {
    id: "5.1",
    kpi: "Result analysis report",
    target: "AC-wise result analysis with variance vs. prediction within 72 hours of result declaration",
    measurement: "Report delivery",
    alertThreshold: "Not delivered in 72 hrs",
  },
  {
    id: "5.2",
    kpi: "Prediction accuracy",
    target: "Predicted seat count within +/- 5 seats of actual; predicted vote share within +/- 3% of actual",
    measurement: "Back-testing against model",
    alertThreshold: "Deviation >10 seats",
  },
  {
    id: "5.3",
    kpi: "Intelligence audit",
    target: "Full audit of all intelligence products; accuracy assessment of each mega-pillar",
    measurement: "Audit report",
    alertThreshold: "Audit not initiated within 2 weeks",
  },
];

export const PHASE5_KM_KPIS: KPI[] = [
  {
    id: "5.4",
    kpi: "Knowledge documentation",
    target: "Complete campaign playbook documented: what worked, what failed, AC-wise case studies",
    measurement: "Document repository",
    alertThreshold: "Not completed within 30 days",
  },
  {
    id: "5.5",
    kpi: "Transition plan",
    target: "If elected: governance transition document with priority actions, key appointments, and first-100-day plan. If not: rebuilding roadmap with organizational reforms.",
    measurement: "Transition/rebuilding document",
    alertThreshold: "Not ready within 14 days of result",
  },
];

// Complete Phase Data
export const CAMPAIGN_PHASES: CampaignPhase[] = [
  {
    phase: 1,
    phaseName: "Foundation",
    timeline: "Now to August 2026",
    strategicObjective: "Build the intelligence, organizational, and technological infrastructure required for a winning campaign. Establish baseline data across all 117 Assembly Constituencies.",
    categories: [
      { name: "Infrastructure KPIs", kpis: PHASE1_INFRASTRUCTURE_KPIS },
      { name: "Human Resources KPIs", kpis: PHASE1_HR_KPIS },
      { name: "Strategic KPIs", kpis: PHASE1_STRATEGIC_KPIS },
    ],
    id: 1,
    name: "Foundation",
    description: "Build the intelligence, organizational, and technological infrastructure required for a winning campaign. Establish baseline data across all 117 Assembly Constituencies.",
    kpiCount: PHASE1_INFRASTRUCTURE_KPIS.length + PHASE1_HR_KPIS.length + PHASE1_STRATEGIC_KPIS.length,
    kpis: [...PHASE1_INFRASTRUCTURE_KPIS, ...PHASE1_HR_KPIS, ...PHASE1_STRATEGIC_KPIS],
  },
  {
    phase: 2,
    phaseName: "Buildup",
    timeline: "September to November 2026",
    strategicObjective: "Finalize candidates, launch manifesto, scale volunteer network to 2 lakh, complete constituency-level intelligence dossiers, and establish daily operational rhythm.",
    categories: [
      { name: "Candidate & Manifesto KPIs", kpis: PHASE2_CANDIDATE_MANIFESTO_KPIS },
      { name: "Volunteer & Ground KPIs", kpis: PHASE2_VOLUNTEER_GROUND_KPIS },
      { name: "Digital & Media KPIs", kpis: PHASE2_DIGITAL_MEDIA_KPIS },
      { name: "Tracking KPIs", kpis: PHASE2_TRACKING_KPIS },
    ],
    id: 2,
    name: "Buildup",
    description: "Finalize candidates, launch manifesto, scale volunteer network to 2 lakh, complete constituency-level intelligence dossiers, and establish daily operational rhythm.",
    kpiCount: PHASE2_CANDIDATE_MANIFESTO_KPIS.length + PHASE2_VOLUNTEER_GROUND_KPIS.length + PHASE2_DIGITAL_MEDIA_KPIS.length + PHASE2_TRACKING_KPIS.length,
    kpis: [...PHASE2_CANDIDATE_MANIFESTO_KPIS, ...PHASE2_VOLUNTEER_GROUND_KPIS, ...PHASE2_DIGITAL_MEDIA_KPIS, ...PHASE2_TRACKING_KPIS],
  },
  {
    phase: 3,
    phaseName: "Intensification",
    timeline: "December 2026 to January 2027",
    strategicObjective: "Maximum voter contact, persuasion, narrative dominance, and operational readiness for polling. This is the ground war phase.",
    categories: [
      { name: "Voter Contact KPIs", kpis: PHASE3_VOTER_CONTACT_KPIS },
      { name: "Media & Advertising KPIs", kpis: PHASE3_MEDIA_ADVERTISING_KPIS },
      { name: "Operational KPIs", kpis: PHASE3_OPERATIONAL_KPIS },
    ],
    id: 3,
    name: "Intensification",
    description: "Maximum voter contact, persuasion, narrative dominance, and operational readiness for polling. This is the ground war phase.",
    kpiCount: PHASE3_VOTER_CONTACT_KPIS.length + PHASE3_MEDIA_ADVERTISING_KPIS.length + PHASE3_OPERATIONAL_KPIS.length,
    kpis: [...PHASE3_VOTER_CONTACT_KPIS, ...PHASE3_MEDIA_ADVERTISING_KPIS, ...PHASE3_OPERATIONAL_KPIS],
  },
  {
    phase: 4,
    phaseName: "Peak & Polling",
    timeline: "February 2027",
    strategicObjective: "Execute flawless polling day operations. Maximize turnout among favorable voters. Ensure 100% booth coverage.",
    categories: [
      { name: "Final Push KPIs", kpis: PHASE4_FINAL_PUSH_KPIS },
      { name: "Polling Day KPIs", kpis: PHASE4_POLLING_DAY_KPIS },
    ],
    id: 4,
    name: "Peak & Polling",
    description: "Execute flawless polling day operations. Maximize turnout among favorable voters. Ensure 100% booth coverage.",
    kpiCount: PHASE4_FINAL_PUSH_KPIS.length + PHASE4_POLLING_DAY_KPIS.length,
    kpis: [...PHASE4_FINAL_PUSH_KPIS, ...PHASE4_POLLING_DAY_KPIS],
  },
  {
    phase: 5,
    phaseName: "Post-Election",
    timeline: "February-March 2027",
    strategicObjective: "Analyze results, extract intelligence, document learnings, and prepare for either governance transition or Opposition rebuilding.",
    categories: [
      { name: "Analysis KPIs", kpis: PHASE5_ANALYSIS_KPIS },
      { name: "Knowledge Management KPIs", kpis: PHASE5_KM_KPIS },
    ],
    id: 5,
    name: "Post-Election",
    description: "Analyze results, extract intelligence, document learnings, and prepare for either governance transition or Opposition rebuilding.",
    kpiCount: PHASE5_ANALYSIS_KPIS.length + PHASE5_KM_KPIS.length,
    kpis: [...PHASE5_ANALYSIS_KPIS, ...PHASE5_KM_KPIS],
  },
];

export const REPORTING_CADENCE: ReportingCadence[] = [
  { phase: "Phase 1", frequency: "Bi-weekly", keyMetrics: "Core team + district coordinators", escalation: "Campaign Committee" },
  { phase: "Phase 2", frequency: "Weekly", keyMetrics: "Core team + all vertical heads", escalation: "Campaign Committee" },
  { phase: "Phase 3", frequency: "Daily (standup) + Weekly (review)", keyMetrics: "Full war room", escalation: "PPCC President" },
  { phase: "Phase 4", frequency: "Twice daily (polling week)", keyMetrics: "War room + all agents", escalation: "PPCC President + AICC" },
  { phase: "Phase 5", frequency: "Weekly (wind-down)", keyMetrics: "Core team + leadership", escalation: "PPCC President" },
];

export const TRAFFIC_LIGHT_THRESHOLDS: TrafficLightThreshold = {
  GREEN: 90,
  AMBER_LOW: 60,
  AMBER: 89,
  RED: 60,
};

export const KPI_DATA_SOURCES: KPIDataSource[] = [
  { source: "External survey agency", type: "Survey/polling", description: "Cross-sample audit" },
  { source: "Field team MIS + app data", type: "Ground operations", description: "Random physical verification" },
  { source: "Platform analytics (Meta, Google, YouTube)", type: "Digital", description: "Third-party verification" },
  { source: "Media monitoring service", type: "Media", description: "Manual sample check" },
  { source: "CRM + accounting system", type: "Financial", description: "CA audit monthly" },
  { source: "Volunteer management system", type: "Volunteer", description: "District coordinator verification" },
];

export const KPI_RISKS: KPIRisk[] = [
  { severity: "HIGH", phase: "Phase 2", risk: "Candidate selection delays" },
  { severity: "HIGH", phase: "Phase 2-4", risk: "Fundraising shortfall" },
  { severity: "MEDIUM", phase: "Phase 1", risk: "Survey quality issues" },
  { severity: "MEDIUM", phase: "Phase 3-4", risk: "Volunteer attrition" },
  { severity: "MEDIUM", phase: "Phase 3", risk: "Digital platform restrictions" },
  { severity: "LOW", phase: "Phase 3", risk: "Anti-incumbency miscalibration" },
];

export const PHASE_CASCADE = [
  "Phase 1 (Foundation) → Baselines established, infrastructure built",
  "Phase 2 (Buildup) → Candidates + manifesto + volunteer army ready",
  "Phase 3 (Intensify) → Voter contact + persuasion + narrative dominance",
  "Phase 4 (Peak/Poll) → Maximum turnout + 100% booth coverage",
  "Phase 5 (Post) → Learn, document, transition or rebuild",
];
