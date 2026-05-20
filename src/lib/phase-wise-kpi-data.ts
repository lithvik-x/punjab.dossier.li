/**
 * Phase-Wise KPI Framework Data
 * Punjab Congress 2027 Election Campaign
 *
 * MP10 - Predictive Outcomes | KPIs & Performance Tracking
 * Source: phase-wise-kpi-framework.md
 */

import type {
  PhaseWISEKPI,
  CampaignPhaseDefinition,
  ReportingCadence,
  KPIFrameworkRisk,
  CampaignPhase,
} from '../types/phase-wise-kpi-types';

// ============================================================================
// CAMPAIGN PHASE DEFINITIONS
// ============================================================================

export const CAMPAIGN_PHASES: CampaignPhaseDefinition[] = [
  {
    phase: 1,
    name: 'Foundation',
    period: 'Now to August 2026',
    strategicObjective:
      'Build the intelligence, organizational, and technological infrastructure required for a winning campaign. Establish baseline data across all 117 Assembly Constituencies.',
    kpiIds: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '1.10', '1.11'],
  },
  {
    phase: 2,
    name: 'Buildup',
    period: 'September to November 2026',
    strategicObjective:
      'Finalize candidates, launch manifesto, scale volunteer network to 2 lakh, complete constituency-level intelligence dossiers, and establish daily operational rhythm.',
    kpiIds: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9'],
  },
  {
    phase: 3,
    name: 'Intensification',
    period: 'December 2026 to January 2027',
    strategicObjective:
      'Maximum voter contact, persuasion, narrative dominance, and operational readiness for polling. This is the ground war phase.',
    kpiIds: ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8'],
  },
  {
    phase: 4,
    name: 'Peak & Polling',
    period: 'February 2027',
    strategicObjective:
      'Execute flawless polling day operations. Maximize turnout among favorable voters. Ensure 100% booth coverage.',
    kpiIds: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6'],
  },
  {
    phase: 5,
    name: 'Post-Election',
    period: 'February-March 2027',
    strategicObjective:
      'Analyze results, extract intelligence, document learnings, and prepare for either governance transition or Opposition rebuilding.',
    kpiIds: ['5.1', '5.2', '5.3', '5.4', '5.5'],
  },
];

// ============================================================================
// ALL KPIs (40 total across 5 phases)
// ============================================================================

export const PHASE_WISE_KPIS: PhaseWISEKPI[] = [
  // =========================================================================
  // PHASE 1: FOUNDATION — Infrastructure KPIs
  // =========================================================================
  {
    id: '1.1',
    phase: 1,
    category: 'infrastructure',
    kpi: 'Baseline survey completion',
    target: { value: '50,000+', description: 'interviews across all 117 ACs' },
    measurement: { method: 'Survey platform dashboard; coverage report by AC' },
    alertThreshold: { value: '<30,000 by Jul 15', level: 'amber' },
    responsibleVertical: 'Data Team',
  },
  {
    id: '1.2',
    phase: 1,
    category: 'infrastructure',
    kpi: 'Booth-level committee verification',
    target: { value: '100%', description: 'of ~24,000 booths verified with president + 5 members' },
    measurement: { method: 'MIS report from district presidents; random audit 10%' },
    alertThreshold: { value: '<70% by Jul 31', level: 'amber' },
    responsibleVertical: 'Ground Operations',
  },
  {
    id: '1.3',
    phase: 1,
    category: 'infrastructure',
    kpi: 'Digital presence establishment',
    target: {
      value: 'Functional',
      description: 'website, social handles (Twitter/X, Instagram, Facebook, YouTube) with brand guidelines live',
    },
    measurement: { method: 'Content audit checklist' },
    alertThreshold: { value: 'Not live by Jun 30', level: 'red' },
    responsibleVertical: 'Digital Team',
  },
  {
    id: '1.4',
    phase: 1,
    category: 'infrastructure',
    kpi: 'Intelligence dashboard operational',
    target: {
      value: 'Operational',
      description: 'Dashboard with demographics, competitor tracking, sentiment baseline loaded',
    },
    measurement: { method: 'Technical acceptance test' },
    alertThreshold: { value: 'Not operational by Jul 15', level: 'red' },
    responsibleVertical: 'Data Team',
  },
  {
    id: '1.5',
    phase: 1,
    category: 'infrastructure',
    kpi: 'Monitoring system live',
    target: {
      value: 'Active',
      description: 'Social listening, media monitoring, and Opposition tracking feeds active',
    },
    measurement: { method: 'Dashboard uptime >95%' },
    alertThreshold: { value: 'Not live by Jul 31', level: 'amber' },
    responsibleVertical: 'Intelligence Team',
  },

  // =========================================================================
  // PHASE 1: FOUNDATION — Human Resources KPIs
  // =========================================================================
  {
    id: '1.6',
    phase: 1,
    category: 'human-resources',
    kpi: 'Core campaign team recruited',
    target: {
      value: '100%',
      description: 'Campaign manager, media head, digital head, ground ops head, data head, 5 regional coordinators',
    },
    measurement: { method: 'HR onboarding records' },
    alertThreshold: { value: '<80% by Jul 15', level: 'amber' },
    responsibleVertical: 'HR',
  },
  {
    id: '1.7',
    phase: 1,
    category: 'human-resources',
    kpi: 'District coordinators appointed',
    target: {
      value: '23/23',
      description: 'All 23 districts have a Congress-appointed coordinator with contact verified',
    },
    measurement: { method: 'District reporting system' },
    alertThreshold: { value: '<20/23 by Jul 31', level: 'amber' },
    responsibleVertical: 'HR',
  },
  {
    id: '1.8',
    phase: 1,
    category: 'human-resources',
    kpi: 'Volunteer registration drive launched',
    target: { value: '50,000', description: 'registered volunteers' },
    measurement: { method: 'Registration dashboard' },
    alertThreshold: { value: '<20,000 by Aug 15', level: 'amber' },
    responsibleVertical: 'Ground Operations',
  },

  // =========================================================================
  // PHASE 1: FOUNDATION — Strategic KPIs
  // =========================================================================
  {
    id: '1.9',
    phase: 1,
    category: 'strategic',
    kpi: 'Candidate longlisting complete',
    target: {
      value: '117/117',
      description: 'All 117 ACs have a longlist of 3-5 potential candidates based on winnability analysis',
    },
    measurement: { method: 'Candidate committee report' },
    alertThreshold: { value: '<90 ACs by Aug 15', level: 'amber' },
    responsibleVertical: 'Candidate Committee',
  },
  {
    id: '1.10',
    phase: 1,
    category: 'strategic',
    kpi: 'Manifesto drafting initiated',
    target: {
      value: 'Draft',
      description: 'Thematic clusters identified; first draft of 10 key promises based on survey data',
    },
    measurement: { method: 'Draft document review' },
    alertThreshold: { value: 'No draft by Aug 15', level: 'red' },
    responsibleVertical: 'Manifesto Committee',
  },
  {
    id: '1.11',
    phase: 1,
    category: 'strategic',
    kpi: 'Fundraising pipeline initiated',
    target: { value: 'INR 5 crore', description: 'committed' },
    measurement: { method: 'CRM tracking', dataSource: 'crm-accounting' },
    alertThreshold: { value: '<INR 2 crore by Aug 31', level: 'amber' },
    responsibleVertical: 'Fundraising',
  },

  // =========================================================================
  // PHASE 2: BUILDUP — Candidate & Manifesto KPIs
  // =========================================================================
  {
    id: '2.1',
    phase: 2,
    category: 'candidate-manifesto',
    kpi: 'All 117 candidates selected',
    target: { value: '117/117', description: 'Official announcement with EC-compliant paperwork' },
    measurement: { method: 'Party announcement records' },
    alertThreshold: { value: '<100 by Oct 31', level: 'amber' },
    responsibleVertical: 'Candidate Committee',
  },
  {
    id: '2.2',
    phase: 2,
    category: 'candidate-manifesto',
    kpi: 'Manifesto launched',
    target: {
      value: 'Live',
      description: 'Public launch event + digital release; media coverage in top 10 Punjab outlets',
    },
    measurement: { method: 'Media tracking report' },
    alertThreshold: { value: 'Not launched by Nov 15', level: 'red' },
    responsibleVertical: 'Media Team',
  },
  {
    id: '2.3',
    phase: 2,
    category: 'candidate-manifesto',
    kpi: 'Narrative testing complete',
    target: {
      value: '>60%',
      description: 'Core campaign message tested via focus groups in 10 ACs across 3 regions',
    },
    measurement: { method: 'Focus group report', dataSource: 'survey-agency' },
    alertThreshold: { value: '<50% positive or not done by Oct 31', level: 'amber' },
    responsibleVertical: 'Communications',
  },

  // =========================================================================
  // PHASE 2: BUILDUP — Volunteer & Ground KPIs
  // =========================================================================
  {
    id: '2.4',
    phase: 2,
    category: 'volunteer-ground',
    kpi: 'Volunteers trained',
    target: { value: '2,00,000', description: '(2 lakh) volunteers registered and undergone basic training' },
    measurement: { method: 'Training module completion records', dataSource: 'volunteer-management' },
    alertThreshold: { value: '<1 lakh by Nov 15', level: 'amber' },
    responsibleVertical: 'Ground Operations',
  },
  {
    id: '2.5',
    phase: 2,
    category: 'volunteer-ground',
    kpi: 'Constituency dossiers complete',
    target: {
      value: '117/117',
      description: 'AC-level dossiers with demographics, caste matrix, key issues, Opposition analysis, win pathways',
    },
    measurement: { method: 'Quality audit of 20 random dossiers' },
    alertThreshold: { value: '<80 dossiers by Nov 1', level: 'amber' },
    responsibleVertical: 'Intelligence Team',
  },
  {
    id: '2.6',
    phase: 2,
    category: 'volunteer-ground',
    kpi: 'Booth-level micro-plans drafted',
    target: {
      value: '100%',
      description: 'Each booth has a plan: target voters, volunteers assigned, material distributed',
    },
    measurement: { method: 'MIS report from district coordinators' },
    alertThreshold: { value: '<50% by Nov 15', level: 'amber' },
    responsibleVertical: 'Ground Operations',
  },

  // =========================================================================
  // PHASE 2: BUILDUP — Digital & Media KPIs
  // =========================================================================
  {
    id: '2.7',
    phase: 2,
    category: 'digital-media',
    kpi: 'Digital audience targets met',
    target: {
      value: '10 lakh+',
      description: 'Social media followers across platforms; 50,000+ WhatsApp group network nodes',
    },
    measurement: { method: 'Platform analytics', dataSource: 'platform-analytics' },
    alertThreshold: { value: '<5 lakh by Nov 30', level: 'amber' },
    responsibleVertical: 'Digital Team',
  },
  {
    id: '2.8',
    phase: 2,
    category: 'digital-media',
    kpi: 'Fundraising on track',
    target: { value: 'INR 25 crore', description: 'cumulative committed; 30% disbursed to AC-level operations' },
    measurement: { method: 'Finance dashboard', dataSource: 'crm-accounting' },
    alertThreshold: { value: '<INR 15 crore by Nov 30', level: 'amber' },
    responsibleVertical: 'Fundraising',
  },

  // =========================================================================
  // PHASE 2: BUILDUP — Tracking KPIs
  // =========================================================================
  {
    id: '2.9',
    phase: 2,
    category: 'tracking',
    kpi: 'Weekly tracking surveys initiated',
    target: {
      value: '2,000/week',
      description: 'interviews across Punjab; rolling approval rating published weekly',
    },
    measurement: { method: 'Survey vendor report', dataSource: 'survey-agency' },
    alertThreshold: { value: 'Not operational by Oct 15', level: 'red' },
    responsibleVertical: 'Data Team',
  },

  // =========================================================================
  // PHASE 3: INTENSIFICATION — Voter Contact KPIs
  // =========================================================================
  {
    id: '3.1',
    phase: 3,
    category: 'voter-contact',
    kpi: 'Door-to-door (D2D) identification',
    target: { value: '100%', description: 'voter identification in target segments across all 117 ACs' },
    measurement: { method: 'D2D app/report from field teams', dataSource: 'field-mis' },
    alertThreshold: { value: '<70% by Jan 15', level: 'amber' },
    responsibleVertical: 'Ground Operations',
  },
  {
    id: '3.2',
    phase: 3,
    category: 'voter-contact',
    kpi: 'D2D persuasion rate',
    target: { value: '>75%', description: 'of identified persuadable voters contacted with tailored messaging' },
    measurement: { method: 'Persuasion tracking system', dataSource: 'field-mis' },
    alertThreshold: { value: '<50% by Jan 31', level: 'red' },
    responsibleVertical: 'Ground Operations',
  },
  {
    id: '3.3',
    phase: 3,
    category: 'voter-contact',
    kpi: 'Rally & event execution',
    target: {
      value: '>90%',
      description: 'of planned rallies and public meetings held; avg attendance >5,000 per AC rally',
    },
    measurement: { method: 'Event management reports', dataSource: 'field-mis' },
    alertThreshold: { value: '<60% rallies held', level: 'amber' },
    responsibleVertical: 'Ground Operations',
  },

  // =========================================================================
  // PHASE 3: INTENSIFICATION — Media & Advertising KPIs
  // =========================================================================
  {
    id: '3.4',
    phase: 3,
    category: 'media-advertising',
    kpi: 'Ad campaigns live',
    target: { value: '100%', description: 'Ads running on TV, digital, print, and outdoor in all 23 districts' },
    measurement: { method: 'Media plan execution report' },
    alertThreshold: { value: 'Not live by Dec 31', level: 'red' },
    responsibleVertical: 'Media Team',
  },
  {
    id: '3.5',
    phase: 3,
    category: 'media-advertising',
    kpi: 'Media share of voice (SOV)',
    target: { value: '>30%', description: 'of total election coverage in Punjab media (TV + print + digital)' },
    measurement: { method: 'Media monitoring dashboard', dataSource: 'media-monitoring' },
    alertThreshold: { value: '<20% sustained for 2 weeks', level: 'amber' },
    responsibleVertical: 'Communications',
  },
  {
    id: '3.6',
    phase: 3,
    category: 'media-advertising',
    kpi: 'Daily tracking intensity',
    target: {
      value: '2,000-3,000/week',
      description: 'interviews/week; daily sentiment score published to leadership',
    },
    measurement: { method: 'Survey vendor dashboard', dataSource: 'survey-agency' },
    alertThreshold: { value: '<1,500/week sustained', level: 'amber' },
    responsibleVertical: 'Data Team',
  },

  // =========================================================================
  // PHASE 3: INTENSIFICATION — Operational KPIs
  // =========================================================================
  {
    id: '3.7',
    phase: 3,
    category: 'operational',
    kpi: 'Volunteer active rate',
    target: { value: '>70%', description: 'of registered volunteers engaged in at least 1 activity/week' },
    measurement: { method: 'Volunteer management system', dataSource: 'volunteer-management' },
    alertThreshold: { value: '<40% sustained', level: 'amber' },
    responsibleVertical: 'Ground Operations',
  },
  {
    id: '3.8',
    phase: 3,
    category: 'operational',
    kpi: 'Booth agent training complete',
    target: { value: '100%', description: 'of booth agents trained in EC procedures, crowd management, and reporting' },
    measurement: { method: 'Training attendance records' },
    alertThreshold: { value: '<80% by Jan 31', level: 'amber' },
    responsibleVertical: 'Ground Operations',
  },

  // =========================================================================
  // PHASE 4: PEAK & POLLING — Final Push KPIs
  // =========================================================================
  {
    id: '4.1',
    phase: 4,
    category: 'final-push',
    kpi: 'D2D second contact completion',
    target: {
      value: '>95%',
      description: 'of target voters receive a second contact (reminder + persuasion reinforcement)',
    },
    measurement: { method: 'Field reports', dataSource: 'field-mis' },
    alertThreshold: { value: '<75% by polling eve', level: 'red' },
    responsibleVertical: 'Ground Operations',
  },
  {
    id: '4.2',
    phase: 4,
    category: 'final-push',
    kpi: 'Maximum ad frequency',
    target: {
      value: 'Peak',
      description: 'TV 8+ GRPs/day, digital 3+ impressions/target voter/day',
    },
    measurement: { method: 'Media buying reports' },
    alertThreshold: { value: 'Below threshold on any platform', level: 'amber' },
    responsibleVertical: 'Media Team',
  },
  {
    id: '4.3',
    phase: 4,
    category: 'final-push',
    kpi: 'Get-out-the-vote (GOTV) plan operational',
    target: {
      value: 'Finalized',
      description: 'AC-wise turnout targets set; vehicle roster confirmed; volunteer assignments locked for each booth',
    },
    measurement: { method: 'GOTV plan document signed off' },
    alertThreshold: { value: 'Not finalized 7 days before polling', level: 'red' },
    responsibleVertical: 'Ground Operations',
  },

  // =========================================================================
  // PHASE 4: PEAK & POLLING — Polling Day KPIs
  // =========================================================================
  {
    id: '4.4',
    phase: 4,
    category: 'polling-day',
    kpi: 'Agent presence at booths',
    target: { value: '100%', description: 'of ~24,000 booths have a trained Congress agent present at all times during polling' },
    measurement: { method: 'Real-time agent check-in system' },
    alertThreshold: { value: 'Any booth unreported by 9 AM', level: 'red' },
    responsibleVertical: 'Ground Operations',
  },
  {
    id: '4.5',
    phase: 4,
    category: 'polling-day',
    kpi: 'Voter turnout in target segments',
    target: { value: '>75%', description: 'turnout in Congress-favorable booths/segments vs. 2022 baseline' },
    measurement: { method: 'Real-time turnout data from agents', dataSource: 'field-mis' },
    alertThreshold: { value: '<60% at midday in any AC', level: 'red' },
    responsibleVertical: 'Ground Operations',
  },
  {
    id: '4.6',
    phase: 4,
    category: 'polling-day',
    kpi: 'Incident reporting',
    target: {
      value: '<30 min',
      description: 'All polling irregularities reported within 30 minutes; legal team response within 1 hour',
    },
    measurement: { method: 'Incident management dashboard' },
    alertThreshold: { value: '>5 unreported incidents in any AC', level: 'amber' },
    responsibleVertical: 'Legal Team',
  },

  // =========================================================================
  // PHASE 5: POST-ELECTION — Analysis KPIs
  // =========================================================================
  {
    id: '5.1',
    phase: 5,
    category: 'analysis',
    kpi: 'Result analysis report',
    target: {
      value: '72 hours',
      description: 'AC-wise result analysis with variance vs. prediction within 72 hours of result declaration',
    },
    measurement: { method: 'Report delivery' },
    alertThreshold: { value: 'Not delivered in 72 hrs', level: 'amber' },
    responsibleVertical: 'Intelligence Team',
  },
  {
    id: '5.2',
    phase: 5,
    category: 'analysis',
    kpi: 'Prediction accuracy',
    target: {
      value: '±5 seats / ±3%',
      description: 'Predicted seat count within +/- 5 seats of actual; predicted vote share within +/- 3% of actual',
    },
    measurement: { method: 'Back-testing against model' },
    alertThreshold: { value: 'Deviation >10 seats', level: 'amber' },
    responsibleVertical: 'Data Team',
  },
  {
    id: '5.3',
    phase: 5,
    category: 'analysis',
    kpi: 'Intelligence audit',
    target: {
      value: 'Complete',
      description: 'Full audit of all intelligence products; accuracy assessment of each mega-pillar',
    },
    measurement: { method: 'Audit report' },
    alertThreshold: { value: 'Audit not initiated within 2 weeks', level: 'amber' },
    responsibleVertical: 'Intelligence Team',
  },

  // =========================================================================
  // PHASE 5: POST-ELECTION — Knowledge Management KPIs
  // =========================================================================
  {
    id: '5.4',
    phase: 5,
    category: 'knowledge-management',
    kpi: 'Knowledge documentation',
    target: {
      value: 'Complete',
      description: 'Campaign playbook documented: what worked, what failed, AC-wise case studies',
    },
    measurement: { method: 'Document repository' },
    alertThreshold: { value: 'Not completed within 30 days', level: 'amber' },
    responsibleVertical: 'Strategy Team',
  },
  {
    id: '5.5',
    phase: 5,
    category: 'knowledge-management',
    kpi: 'Transition plan',
    target: {
      value: '14 days',
      description: 'If elected: governance transition document. If not: rebuilding roadmap with organizational reforms.',
    },
    measurement: { method: 'Transition/rebuilding document' },
    alertThreshold: { value: 'Not ready within 14 days of result', level: 'red' },
    responsibleVertical: 'Leadership',
  },
];

// ============================================================================
// REPORTING CADENCE
// ============================================================================

export const REPORTING_CADENCE: ReportingCadence[] = [
  {
    phase: 1,
    reviewFrequency: 'bi-weekly',
    participants: ['Core team', 'district coordinators'],
    escalationPath: 'Campaign Committee',
  },
  {
    phase: 2,
    reviewFrequency: 'weekly',
    participants: ['Core team', 'all vertical heads'],
    escalationPath: 'Campaign Committee',
  },
  {
    phase: 3,
    reviewFrequency: 'daily',
    participants: ['Full war room'],
    escalationPath: 'PPCC President',
  },
  {
    phase: 4,
    reviewFrequency: 'twice-daily',
    participants: ['War room', 'all agents'],
    escalationPath: 'PPCC President + AICC',
  },
  {
    phase: 5,
    reviewFrequency: 'weekly',
    participants: ['Core team', 'leadership'],
    escalationPath: 'PPCC President',
  },
];

// ============================================================================
// CRITICAL RISKS
// ============================================================================

export const KPI_FRAMEWORK_RISKS: KPIFrameworkRisk[] = [
  {
    id: 'risk-1',
    risk: 'Candidate selection delays',
    impactedPhases: [2, 3, 4],
    impactDescription: 'Cascading delays across Phase 2-4 KPIs',
    mitigation: 'Parallel processing; screening committee meets weekly',
    severity: 'high',
  },
  {
    id: 'risk-2',
    risk: 'Fundraising shortfall',
    impactedPhases: [2, 3, 4],
    impactDescription: 'Advertising, volunteer deployment, ground ops all constrained',
    mitigation: 'Diversified funding; digital micro-donations; PAC support',
    severity: 'critical',
  },
  {
    id: 'risk-3',
    risk: 'Survey quality issues',
    impactedPhases: [1, 2, 3],
    impactDescription: 'Baseline data unreliable; targeting ineffective',
    mitigation: 'Multiple vendors; statistical validation; spot audits',
    severity: 'high',
  },
  {
    id: 'risk-4',
    risk: 'Volunteer attrition',
    impactedPhases: [2, 3, 4],
    impactDescription: 'D2D and polling day KPIs at risk',
    mitigation: 'Incentive structure; recognition program; staggered training',
    severity: 'medium',
  },
  {
    id: 'risk-5',
    risk: 'Digital platform restrictions',
    impactedPhases: [2, 3, 4],
    impactDescription: 'Reach targets unmet; ad costs spike',
    mitigation: 'Multi-platform strategy; owned media (WhatsApp) emphasis',
    severity: 'high',
  },
  {
    id: 'risk-6',
    risk: 'Anti-incumbency miscalibration',
    impactedPhases: [2, 3],
    impactDescription: 'Persuasion messages miss the mark',
    mitigation: 'Continuous sentiment tracking; A/B testing of messages',
    severity: 'medium',
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all KPIs for a specific phase
 */
export function getKPIsByPhase(phase: CampaignPhase): PhaseWISEKPI[] {
  return PHASE_WISE_KPIS.filter((kpi) => kpi.phase === phase);
}

/**
 * Get a specific KPI by ID
 */
export function getKPIById(id: string): PhaseWISEKPI | undefined {
  return PHASE_WISE_KPIS.find((kpi) => kpi.id === id);
}

/**
 * Get KPIs by category
 */
export function getKPIsByCategory(category: string): PhaseWISEKPI[] {
  return PHASE_WISE_KPIS.filter((kpi) => kpi.category === category);
}

/**
 * Get phase definition by phase number
 */
export function getPhaseDefinition(phase: CampaignPhase): CampaignPhaseDefinition | undefined {
  return CAMPAIGN_PHASES.find((p) => p.phase === phase);
}

/**
 * Get reporting cadence for a phase
 */
export function getReportingCadence(phase: CampaignPhase): ReportingCadence | undefined {
  return REPORTING_CADENCE.find((r) => r.phase === phase);
}

/**
 * Get risks impacting a specific phase
 */
export function getRisksByPhase(phase: CampaignPhase): KPIFrameworkRisk[] {
  return KPI_FRAMEWORK_RISKS.filter((risk) => risk.impactedPhases.includes(phase));
}

/**
 * Calculate total KPI count by phase
 */
export function getKPICountByPhase(): Record<CampaignPhase, number> {
  return CAMPAIGN_PHASES.reduce(
    (acc, p) => {
      acc[p.phase] = p.kpiIds.length;
      return acc;
    },
    {} as Record<CampaignPhase, number>
  );
}

/**
 * Get alert level color for traffic light system
 */
export function getAlertLevelColor(
  level: 'green' | 'amber' | 'red'
): { bg: string; text: string; border: string } {
  switch (level) {
    case 'green':
      return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-500' };
    case 'amber':
      return { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-500' };
    case 'red':
      return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-500' };
  }
}
