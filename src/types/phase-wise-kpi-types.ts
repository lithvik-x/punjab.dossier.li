/**
 * Phase-Wise KPI Framework Types
 * Punjab Congress 2027 Election Campaign
 *
 * MP10 - Predictive Outcomes | KPIs & Performance Tracking
 * Source: phase-wise-kpi-framework.md
 */

// ============================================================================
// ENUMS & UNIONS
// ============================================================================

export type CampaignPhase = 1 | 2 | 3 | 4 | 5;

export type KPICategory =
  | 'infrastructure'
  | 'human-resources'
  | 'strategic'
  | 'candidate-manifesto'
  | 'volunteer-ground'
  | 'digital-media'
  | 'tracking'
  | 'voter-contact'
  | 'media-advertising'
  | 'operational'
  | 'final-push'
  | 'polling-day'
  | 'analysis'
  | 'knowledge-management';

export type TrafficLightStatus = 'green' | 'amber' | 'red';

export type AlertLevel = 'green' | 'amber' | 'red' | 'none';

export type DataSource =
  | 'survey-agency'
  | 'field-mis'
  | 'platform-analytics'
  | 'media-monitoring'
  | 'crm-accounting'
  | 'volunteer-management'
  | 'external-audit';

// ============================================================================
// CORE KPI INTERFACES
// ============================================================================

export interface KPIAlertThreshold {
  value: string | number;
  level: AlertLevel;
  description?: string;
}

export interface KPITarget {
  value: string | number;
  description?: string;
}

export interface KPIMeasurement {
  method: string;
  frequency?: string;
  dataSource?: DataSource;
}

export interface PhaseWISEKPI {
  id: string;
  phase: CampaignPhase;
  category: KPICategory;
  kpi: string;
  target: KPITarget;
  measurement: KPIMeasurement;
  alertThreshold: KPIAlertThreshold;
  responsibleVertical?: string;
  notes?: string;
}

// ============================================================================
// PHASE DEFINITIONS
// ============================================================================

export interface CampaignPhaseDefinition {
  phase: CampaignPhase;
  name: string;
  period: string;
  strategicObjective: string;
  kpiIds: string[];
}

// ============================================================================
// REPORTING & GOVERNANCE
// ============================================================================

export interface ReportingCadence {
  phase: CampaignPhase;
  reviewFrequency: 'bi-weekly' | 'weekly' | 'daily' | 'twice-daily' | 'as-needed';
  participants: string[];
  escalationPath: string;
}

export interface TrafficLightThreshold {
  status: TrafficLightStatus;
  minPercentage: number;
  maxPercentage: number;
  actionRequired: string;
}

export const TRAFFIC_LIGHT_THRESHOLDS: TrafficLightThreshold[] = [
  {
    status: 'green',
    minPercentage: 90,
    maxPercentage: 100,
    actionRequired: 'On track — continue execution',
  },
  {
    status: 'amber',
    minPercentage: 60,
    maxPercentage: 89,
    actionRequired: 'At risk — corrective action required within 48 hours',
  },
  {
    status: 'red',
    minPercentage: 0,
    maxPercentage: 59,
    actionRequired: 'Critical miss — immediate escalation to campaign leadership',
  },
];

// ============================================================================
// DATA SOURCE MAPPING
// ============================================================================

export interface KPIDataSourceMapping {
  category: string;
  primarySource: DataSource;
  validation: string;
}

export const KPI_DATA_SOURCE_MAPPINGS: KPIDataSourceMapping[] = [
  {
    category: 'Survey/polling',
    primarySource: 'survey-agency',
    validation: 'Cross-sample audit',
  },
  {
    category: 'Ground operations',
    primarySource: 'field-mis',
    validation: 'Random physical verification',
  },
  {
    category: 'Digital',
    primarySource: 'platform-analytics',
    validation: 'Third-party verification',
  },
  {
    category: 'Media',
    primarySource: 'media-monitoring',
    validation: 'Manual sample check',
  },
  {
    category: 'Financial',
    primarySource: 'crm-accounting',
    validation: 'CA audit monthly',
  },
  {
    category: 'Volunteer',
    primarySource: 'volunteer-management',
    validation: 'District coordinator verification',
  },
];

// ============================================================================
// RISK FRAMEWORK
// ============================================================================

export interface KPIFrameworkRisk {
  id: string;
  risk: string;
  impactedPhases: CampaignPhase[];
  impactDescription: string;
  mitigation: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

// ============================================================================
// PHASE CASCADE
// ============================================================================

export interface PhaseCascadeEntry {
  fromPhase: CampaignPhase;
  toPhase: CampaignPhase;
  dependency: string;
  minimumCompletionRate: number;
}

export const PHASE_CASCADE: PhaseCascadeEntry[] = [
  {
    fromPhase: 1,
    toPhase: 2,
    dependency: 'Baselines established, infrastructure built',
    minimumCompletionRate: 70,
  },
  {
    fromPhase: 2,
    toPhase: 3,
    dependency: 'Candidates + manifesto + volunteer army ready',
    minimumCompletionRate: 80,
  },
  {
    fromPhase: 3,
    toPhase: 4,
    dependency: 'Voter contact + persuasion + narrative dominance',
    minimumCompletionRate: 80,
  },
  {
    fromPhase: 4,
    toPhase: 5,
    dependency: 'Maximum turnout + 100% booth coverage',
    minimumCompletionRate: 85,
  },
];

// ============================================================================
// FRAMEWORK PRINCIPLES
// ============================================================================

export interface FrameworkPrinciple {
  id: string;
  title: string;
  description: string;
}

export const FRAMEWORK_PRINCIPLES: FrameworkPrinciple[] = [
  {
    id: 'smart',
    title: 'SMART Targets',
    description: 'Every KPI is Specific, Measurable, Achievable, Relevant, and Time-bound.',
  },
  {
    id: 'leading',
    title: 'Leading Indicators',
    description:
      'Prioritize predictive metrics (volunteer activation rate, persuasion score) over lagging ones (rally attendance alone).',
  },
  {
    id: 'cascade',
    title: 'Cascade Accountability',
    description: 'Each KPI maps to a responsible vertical (media team, ground ops, digital, fundraising).',
  },
  {
    id: 'weekly-review',
    title: 'Weekly Review Cadence',
    description: 'KPI dashboard reviewed every Monday by campaign leadership.',
  },
  {
    id: 'threshold-alerts',
    title: 'Threshold Alerts',
    description: 'Amber/Red triggers defined for each KPI to enable rapid intervention.',
  },
];

// ============================================================================
// DASHBOARD CONFIGURATION
// ============================================================================

export interface DashboardConfig {
  mondayReviewTime: string;
  escalationWindowHours: number;
  predictionAccuracySeatTolerance: number;
  predictionAccuracyVoteTolerance: number;
}

export const DASHBOARD_CONFIG: DashboardConfig = {
  mondayReviewTime: '09:00 IST',
  escalationWindowHours: 48,
  predictionAccuracySeatTolerance: 5,
  predictionAccuracyVoteTolerance: 3,
};

// ============================================================================
// KPI CATEGORY METADATA
// ============================================================================

export interface KPICategoryMeta {
  id: KPICategory;
  label: string;
  description: string;
  icon?: string;
  color?: string;
}

export const KPI_CATEGORY_META: KPICategoryMeta[] = [
  { id: 'infrastructure', label: 'Infrastructure', description: 'Tech and operational infrastructure setup' },
  { id: 'human-resources', label: 'Human Resources', description: 'Team recruitment and volunteer management' },
  { id: 'strategic', label: 'Strategic', description: 'Candidate selection, manifesto, fundraising' },
  { id: 'candidate-manifesto', label: 'Candidate & Manifesto', description: 'Candidate finalization and narrative testing' },
  { id: 'volunteer-ground', label: 'Volunteer & Ground', description: 'Ground operations and volunteer army' },
  { id: 'digital-media', label: 'Digital & Media', description: 'Online presence and audience building' },
  { id: 'tracking', label: 'Tracking', description: 'Survey and sentiment tracking' },
  { id: 'voter-contact', label: 'Voter Contact', description: 'D2D outreach and persuasion' },
  { id: 'media-advertising', label: 'Media & Advertising', description: 'Ad campaigns and share of voice' },
  { id: 'operational', label: 'Operational', description: 'Day-to-day campaign operations' },
  { id: 'final-push', label: 'Final Push', description: 'Last mile GOTV execution' },
  { id: 'polling-day', label: 'Polling Day', description: 'Polling day operations and monitoring' },
  { id: 'analysis', label: 'Analysis', description: 'Post-election analysis and prediction accuracy' },
  { id: 'knowledge-management', label: 'Knowledge Management', description: 'Documentation and transition planning' },
];

// ============================================================================
// RESPONSIBLE VERTICALS
// ============================================================================

export type ResponsibleVertical =
  | 'Data Team'
  | 'Ground Operations'
  | 'Digital Team'
  | 'Intelligence Team'
  | 'HR'
  | 'Candidate Committee'
  | 'Manifesto Committee'
  | 'Fundraising'
  | 'Media Team'
  | 'Communications'
  | 'Strategy Team'
  | 'Legal Team'
  | 'Leadership';

export const VERTICAL_COLOR_MAP: Record<ResponsibleVertical, string> = {
  'Data Team': 'blue',
  'Ground Operations': 'green',
  'Digital Team': 'purple',
  'Intelligence Team': 'cyan',
  HR: 'orange',
  'Candidate Committee': 'red',
  'Manifesto Committee': 'pink',
  Fundraising: 'yellow',
  'Media Team': 'indigo',
  Communications: 'violet',
  'Strategy Team': 'teal',
  'Legal Team': 'gray',
  Leadership: 'amber',
};
