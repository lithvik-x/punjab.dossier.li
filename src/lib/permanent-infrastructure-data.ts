// @ts-nocheck
// Permanent Intelligence Infrastructure & Institutional Memory Data
// Derived from: research-M2/MP10-predictive-outcomes/futures/permanent-infrastructure.md
// Task ID: T-MP10-FUTR-002

import type {
  PermanentIntelligenceInfrastructure,
  PermanentInfrastructureMetadata,
  VoterDatabaseAsset,
  GisInfrastructureAsset,
  NlpAnalyticsAsset,
  MediaRelationshipAsset,
  VolunteerManagementAsset,
  DigitalMonitoringAsset,
  KnowledgeManagementSystem,
  ActivityCalendar,
  OrganizationalStructure,
  BudgetEstimate,
  TechnologyRefreshCycle,
  DPDPComplianceRequirements,
  DPDPCompliancePosture,
  RiskAssessment,
  ImplementationRoadmap,
  VerificationItem,
} from '../types/permanent-infrastructure-types';

// ==========================================
// DOCUMENT METADATA
// ==========================================

export const permanentInfrastructureMetadata: PermanentInfrastructureMetadata = {
  taskId: 'T-MP10-FUTR-002',
  megaPillar: 'MP10 — Predictive Outcomes',
  subPillar: 'Futures & Scenario Planning',
  dependency: 'FUTR-001 (Post-Election Scenario Planning) — COMPLETE',
  documentationDate: '19 May 2026',
  dataSources: 'Training knowledge (Indian election intelligence practices, data infrastructure management, DPDP Act 2023, organizational design)',
  confidenceLevel: {
    structural: 'HIGH',
    costEstimates: 'MEDIUM',
  },
};

// ==========================================
// RATIONALE DATA
// ==========================================

export const rationalePersistenceMatters = [
  'Continuity of institutional memory — Elections are won or lost between campaigns, not during them',
  'Cost efficiency — Building intelligence infrastructure from scratch is 5-10x more expensive than maintaining it continuously',
  'Competitive parity — BJP\'s national IT cell and data operations run 365 days/year',
  'Rapid response capability — Local crises, by-elections, civic issues, and national policy impacts require intelligence capacity on standby',
] as const;

export const punjabSpecificJustification = [
  'Punjab has a history of volatile electoral swings (anti-incumbency is near-total; no government has won three consecutive terms)',
  'The state\'s border geography, agrarian distress, and religious dynamics create a constantly shifting landscape requiring ongoing monitoring',
  'The NRI diaspora (estimated 2-3 million Punjabis abroad, primarily in Canada, UK, and Australia) influences political narratives year-round',
] as const;

// ==========================================
// CORE PERMANENT ASSETS
// ==========================================

// 2.1 Voter Database
export const voterDatabaseAsset: VoterDatabaseAsset = {
  retainedData: {
    boothLevelData: {
      description: 'Booth-level voter data including demographics, turnout history, party affinity scores',
      boothCount: 23000,
      constituencyCount: 117,
    },
    segmentationProfiles: ['caste', 'occupation', 'age', 'gender', 'issue priority'],
    contactInformation: {
      verifiedSupporters: true,
      volunteers: true,
      influencers: true,
      consentRequired: true,
    },
  },
  maintenance: {
    refreshCycle: 'Quarterly',
    dataHygieneCycle: '6 months',
    sources: [
      'Electoral Roll updates from ECI (published annually in January)',
      'Local Congress worker field reports',
      'Booth committee meetings',
      'Digital engagement (WhatsApp groups, social media interactions)',
    ],
  },
  technologyStack: {
    security: ['Encrypted database', 'Role-based access control (RBAC)'],
    hosting: 'Cloud-hosted with India-based data centers',
    compliance: ['DPDP Act 2023 compliance', 'Data localization for personal data'],
    integration: 'Congress national voter database (Shakti app or successor platform)',
  },
};

// 2.2 GIS Infrastructure
export const gisInfrastructureAsset: GisInfrastructureAsset = {
  retainedData: {
    spatialMaps: {
      level: 'Constituency and booth-level',
      overlays: ['demographics', 'caste distribution', 'development indicators', 'Congress organizational strength'],
    },
    pollingStationData: ['physical infrastructure', 'distance from population centers'],
    heatMaps: ['water crisis hotspots', 'drug abuse prevalence', 'farmer distress zones'],
  },
  maintenance: {
    gisUpdateCycle: 'Annual',
    satelliteImageryRefresh: 'Quarterly',
    integrationSources: [
      'ECI delimitation or boundary changes',
      'Punjab Spatial Data Infrastructure (if operational)',
    ],
  },
};

// 2.3 NLP/Analytics Models
export const nlpAnalyticsAsset: NlpAnalyticsAsset = {
  retainedModels: {
    sentimentAnalysis: {
      languages: ['Punjabi', 'Hindi'],
      scriptSupport: 'Gurmukhi script support is essential',
    },
    namedEntityRecognition: {
      entityTypes: ['political leaders', 'constituencies', 'local issues'],
      customization: 'Punjab-specific entities',
    },
    predictiveModels: ['voter turnout', 'seat projection', 'swing analysis'],
    socialMediaClassifiers: ['political topic detection', 'misinformation flagging'],
  },
  maintenance: {
    retrainingCycle: 'Monthly',
    accuracyAuditThreshold: 75,
    fullRebuildCycle: 'Annual',
    labeledDataPriority: 'Punjabi-language datasets (scarce and valuable)',
  },
};

// 2.4 Media Relationship Network
export const mediaRelationshipAsset: MediaRelationshipAsset = {
  retainedData: {
    journalistDatabase: {
      minimumCount: 500,
      mediaTypes: ['print', 'TV', 'digital', 'regional Punjabi media'],
    },
    relationshipTracking: ['relationship strength scores', 'engagement history', 'responsiveness', 'sympathy/hostility'],
    editorialCalendar: ['election cycles', 'budget sessions', 'agricultural seasons'],
    influencerMapping: {
      platforms: ['YouTube', 'TikTok', 'Instagram'],
      minimumFollowers: 10000,
      geography: 'Punjab politics',
    },
  },
  maintenance: {
    relationshipRefresh: 'Quarterly',
    landscapeAudit: 'Annual',
    trackingFocus: ['journalist movement and promotions', 'outlet changes', 'new digital platforms'],
  },
};

// 2.5 Volunteer Management System
export const volunteerManagementAsset: VolunteerManagementAsset = {
  retainedData: {
    volunteerDatabase: ['skills', 'availability', 'past contribution history', 'geographical location'],
    trainingMaterials: ['onboarding workflows', 'standard materials'],
    taskTracking: ['assignment system', 'completion tracking'],
    recognitionRecords: ['certificates', 'letters', 'event invitations'],
  },
  maintenance: {
    engagementTouchpoints: 'Monthly',
    skillsDevelopment: 'Quarterly',
    censusCycle: 'Annual',
    targetPerConstituency: {
      minimum: 50,
      maximum: 100,
      statewideTarget: {
        minimum: 5850,
        maximum: 11700,
      },
    },
  },
};

// 2.6 Digital Monitoring Infrastructure
export const digitalMonitoringAsset: DigitalMonitoringAsset = {
  retainedData: {
    socialMediaListening: {
      languages: ['Punjabi', 'Hindi'],
      keywords: ['political entities', 'issue keywords'],
    },
    newsMonitoring: ['Google Alerts', 'RSS feeds', 'TV caption monitoring'],
    whatsappMonitoring: ['consent-based participation in public groups'],
    competitorTracking: ['AAP social media', 'SAD social media', 'BJP social media', 'public events', 'policy announcements'],
  },
  maintenance: {
    peacetimeMode: {
      schedule: '9 AM - 6 PM IST',
      days: 'Monday-Saturday',
    },
    alertBasedEscalation: [
      'major policy announcement',
      'crisis',
      'scandal',
      'by-election',
    ],
    reporting: {
      monthly: 'Analytical summary report to PPCC leadership',
      quarterly: 'Comprehensive trend report',
    },
  },
};

// ==========================================
// KNOWLEDGE MANAGEMENT SYSTEM
// ==========================================

export const knowledgeManagementSystem: KnowledgeManagementSystem = {
  knowledgeCapture: {
    postElectionDebrief: true,
    campaignStrategyArchives: true,
    candidatePerformanceRecords: true,
    oppositionResearchFiles: true,
  },
  knowledgeArchitecture: {
    repositoryType: 'Centralized digital repository',
    versionControl: true,
    accessLogging: true,
    taggingSystem: ['by constituency', 'by topic', 'by election cycle', 'by region (Malwa/Majha/Doaba)'],
    searchLanguages: ['English', 'Hindi', 'Punjabi (Gurmukhi)'],
  },
  knowledgeTransfer: {
    mentorshipPairing: true,
    annualMasterclass: {
      duration: '2-day intensive',
      coverageYears: '30+ years of Punjab electoral history (1985-present)',
    },
    standardOperatingProcedures: true,
  },
};

// ==========================================
// INTER-ELECTION ACTIVITY CALENDAR
// ==========================================

export const activityCalendar: ActivityCalendar = {
  activities: [
    { period: 'Monthly', activity: 'Data refresh (voter rolls, social media monitoring), media relationship maintenance, volunteer engagement', responsibleUnit: 'Operations Team' },
    { period: 'Quarterly', activity: 'Model retraining audit, GIS update, media landscape review, analytical trend report to PPCC', responsibleUnit: 'Analytics + Operations' },
    { period: 'Biannual', activity: 'Volunteer census, data hygiene (duplicate removal, deceased voter flagging), technology audit', responsibleUnit: 'Data Team' },
    { period: 'Annual', activity: 'Full model rebuild evaluation, infrastructure cost review, knowledge management audit, budget planning for next fiscal', responsibleUnit: 'Leadership' },
    { period: 'Pre-Session', activity: 'Issue monitoring brief for Congress MLAs, opposition tracking during session', responsibleUnit: 'Policy + Research' },
    { period: 'By-Election Trigger', activity: 'Activate full campaign intelligence protocol for affected constituency', responsibleUnit: 'Rapid Response Team' },
    { period: 'T-18 Months', activity: 'Begin formal campaign intelligence ramp-up, recruit additional field operatives, refresh all predictive models', responsibleUnit: 'Full Team' },
    { period: 'T-12 Months', activity: 'Full operational capacity — all systems at campaign readiness', responsibleUnit: 'All Units' },
  ],
};

// ==========================================
// ORGANIZATIONAL STRUCTURE
// ==========================================

export const organizationalStructure: OrganizationalStructure = {
  roles: [
    { role: 'Intelligence Director', count: 1, responsibility: 'Overall strategy, PPCC liaison, budget management' },
    { role: 'Data & Analytics Lead', count: 1, responsibility: 'Voter database, predictive models, GIS' },
    { role: 'Research Analysts', count: '2-3', responsibility: 'Opposition research, policy analysis, trend monitoring' },
    { role: 'Digital Monitoring Lead', count: 1, responsibility: 'Social media listening, misinformation tracking' },
    { role: 'Field Coordinators', count: 3, responsibility: 'Local intelligence, volunteer management, booth-level data collection (one per region: Malwa, Majha, Doaba)' },
    { role: 'Media Relations Lead', count: 1, responsibility: 'Journalist relationships, press briefings, influencer management' },
    { role: 'Technology Administrator', count: '1 (part-time)', responsibility: 'Infrastructure maintenance, security, tool updates' },
    { role: 'Administrative Coordinator', count: 1, responsibility: 'Knowledge management, scheduling, reporting' },
  ],
  peacetimeHeadcount: { minimum: 11, maximum: 13 },
  campaignModeHeadcount: { minimum: 30, maximum: 50 },
};

// ==========================================
// BUDGET ESTIMATES
// ==========================================

export const budgetEstimate: BudgetEstimate = {
  peacetime: {
    categories: [
      { category: 'Personnel (11-13 staff)', annualCostRange: { minimum: 6000000, maximum: 8000000, currency: 'INR' }, notes: 'Salaries + benefits at Punjab market rates' },
      { category: 'Cloud Infrastructure & Database', annualCostRange: { minimum: 600000, maximum: 1000000, currency: 'INR' }, notes: 'AWS/Azure India region, data storage, compute' },
      { category: 'Software Licenses (GIS, NLP tools, monitoring)', annualCostRange: { minimum: 800000, maximum: 1500000, currency: 'INR' }, notes: 'Esri/QGIS, social listening, analytics platforms' },
      { category: 'Travel & Field Operations', annualCostRange: { minimum: 1000000, maximum: 1500000, currency: 'INR' }, notes: 'Regional coordinator travel, booth visits' },
      { category: 'Training & Capacity Building', annualCostRange: { minimum: 300000, maximum: 500000, currency: 'INR' }, notes: 'Workshops, certifications, masterclass events' },
      { category: 'Media Relations & Events', annualCostRange: { minimum: 500000, maximum: 800000, currency: 'INR' }, notes: 'Journalist briefings, background dinners, press kits' },
      { category: 'Miscellaneous & Contingency', annualCostRange: { minimum: 500000, maximum: 800000, currency: 'INR' }, notes: 'Emergency response, unexpected by-elections' },
    ],
    totalRange: { minimum: 9700000, maximum: 14100000, currency: 'INR' },
  },
  campaignMode: {
    duration: '12-18 months',
    incrementalRange: { minimum: 20000000, maximum: 40000000, currency: 'INR' },
  },
};

// ==========================================
// TECHNOLOGY REFRESH CYCLE
// ==========================================

export const technologyRefreshCycle: TechnologyRefreshCycle = {
  assets: [
    { asset: 'Voter Database Platform', refreshCycle: '3 years', rationale: 'Database technology evolves; security threats change' },
    { asset: 'GIS Software', refreshCycle: 'Annual', rationale: 'Open-source options (QGIS) vs. commercial (Esri) trade-offs' },
    { asset: 'NLP Models', refreshCycle: 'Monthly', rationale: 'Language models improve rapidly; Punjabi NLP is a niche with advancing open-source options' },
    { asset: 'Social Listening Tools', refreshCycle: 'Annual', rationale: 'Market consolidation and new entrants (e.g., Indian-made alternatives)' },
    { asset: 'Security Infrastructure', refreshCycle: 'Quarterly', rationale: 'Data breach during peacetime destroys credibility' },
    { asset: 'Hardware (field devices, servers)', refreshCycle: '3-year', rationale: 'Standard IT lifecycle management' },
  ],
};

// ==========================================
// DPDP ACT 2023 COMPLIANCE
// ==========================================

export const dpdComplianceRequirements: DPDPComplianceRequirements = {
  consentManagement: [
    'Obtain clear, informed, and verifiable consent',
    'Consent must be free, specific, informed, unconditional, and unambiguous',
  ],
  purposeLimitation: [
    'Data collected for election intelligence cannot be repurposed for commercial activities',
    'Cannot be shared with non-political entities',
  ],
  dataMinimization: [
    'Collect only what is necessary',
    'Do not retain excessive personal information beyond the defined purpose',
  ],
  grievanceRedressal: {
    dataProtectionOfficer: true,
    individualRights: ['access', 'correction', 'erasure of their data'],
  },
  dataBreachNotification: {
    reportingAuthority: 'Data Protection Board of India',
    notificationScope: 'Affected individuals within prescribed timeframe',
  },
  crossBorderTransfer: {
    requirement: 'Ensure destination country is on government approved whitelist',
    currentStatus: 'Not yet published as of May 2026',
  },
  childrensData: 'Do not collect data from individuals under 18 without verifiable parental consent',
};

export const dpdCompliancePosture: DPDPCompliancePosture = {
  cloudInfrastructure: [
    'AWS Mumbai',
    'Azure Pune',
    'Local providers as default',
  ],
  consentCollection: [
    'door-to-door surveys',
    'WhatsApp opt-ins',
    'volunteer registration',
  ],
  impactAssessments: ['Annual privacy impact assessments'],
  auditTrail: true,
};

// ==========================================
// RISK FACTORS
// ==========================================

export const riskAssessment: RiskAssessment = {
  risks: [
    {
      risk: 'Funding Interruption — PPCC unable to sustain annual budget',
      likelihood: 'HIGH',
      mitigation: 'Build tiered structure; core operations survivable at 50% budget; demonstrate ROI through by-election performance',
    },
    {
      risk: 'Political Interference — Leadership changes redirect intelligence priorities',
      likelihood: 'MEDIUM',
      mitigation: 'Institutionalize through formal PPCC resolution; make the unit report to a committee, not an individual',
    },
    {
      risk: 'Data Breach — Opponent or hostile actor accesses voter database',
      likelihood: 'MEDIUM',
      mitigation: 'Encryption at rest and in transit; annual penetration testing; strict RBAC; no data on personal devices',
    },
    {
      risk: 'Staff Attrition — Skilled analysts leave for better-paying private sector',
      likelihood: 'HIGH',
      mitigation: 'Competitive compensation for Punjab market; create professional development pathways; build institutional knowledge into systems (not just people)',
    },
    {
      risk: 'Technology Obsolescence — Tools become outdated',
      likelihood: 'MEDIUM',
      mitigation: 'Annual technology review; maintain flexibility to switch platforms; prefer open-source where viable',
    },
    {
      risk: 'DPDP Act Enforcement — Regulatory action for non-compliance',
      likelihood: 'LOW-MEDIUM',
      mitigation: 'Proactive compliance posture; designated DPO; regular audits',
    },
  ],
};

// ==========================================
// IMPLEMENTATION ROADMAP
// ==========================================

export const implementationRoadmap: ImplementationRoadmap = {
  phases: [
    {
      phase: 'Phase 1: Foundation (Months 1-3 Post-Election)',
      duration: 'Months 1-3',
      keyActions: [
        'Retain core team (5-7 persons from campaign staff)',
        'Secure database and transfer campaign data to permanent infrastructure',
        'Establish PPCC committee oversight',
        'Begin consent refresh for voter contact data',
      ],
    },
    {
      phase: 'Phase 2: Stabilization (Months 4-6)',
      duration: 'Months 4-6',
      keyActions: [
        'Hire remaining permanent positions',
        'Deploy reduced-capacity monitoring infrastructure',
        'Conduct first quarterly PPCC briefing',
        'Launch volunteer engagement program',
      ],
    },
    {
      phase: 'Phase 3: Steady State (Month 7 Onward)',
      duration: 'Month 7 onward',
      keyActions: [
        'Full peacetime operations at reduced capacity',
        'Monthly data refreshes, quarterly reports, annual audits',
        'Continuous knowledge capture and institutional memory building',
        'Prepare ramp-up plan for next election cycle (trigger at T-18 months)',
      ],
    },
  ],
};

// ==========================================
// VERIFICATION ITEMS
// ==========================================

export const verificationItems: VerificationItem[] = [
  { item: 'Benchmark cost comparison from other state Congress units', description: 'Cost efficiency claims for permanent vs. campaign-built infrastructure', priority: 'HIGH' },
  { item: 'Precise NRI population figures by country', description: 'Canada, UK, Australia diaspora numbers for Punjab', priority: 'MEDIUM' },
  { item: 'Congress national data platform status', description: 'Current status and capabilities of Shakti app or successor platform', priority: 'HIGH' },
  { item: 'Punjab Spatial Data Infrastructure status', description: 'Status of state spatial data infrastructure for GIS integration', priority: 'MEDIUM' },
  { item: 'Comprehensive influencer inventory for Punjab', description: 'Punjabi-language influencers with 10K+ followers in Punjab politics', priority: 'MEDIUM' },
  { item: 'Benchmark against BJP/AAP state intelligence budgets', description: 'Verify cost estimates against actual competitor operations', priority: 'HIGH' },
  { item: 'DPDP Act rules notification status', description: 'Current status of DPDP Act rules notification (as of May 2026)', priority: 'HIGH' },
  { item: 'Cross-border transfer whitelist status', description: 'Government approved whitelist for data transfer destinations', priority: 'MEDIUM' },
];

// ==========================================
// COMPLETE INFRASTRUCTURE OBJECT
// ==========================================

export const permanentIntelligenceInfrastructure: PermanentIntelligenceInfrastructure = {
  metadata: permanentInfrastructureMetadata,
  rationale: {
    whyPersistenceMatters: [...rationalePersistenceMatters],
    punjabSpecificJustification: [...punjabSpecificJustification],
  },
  coreAssets: {
    voterDatabase: voterDatabaseAsset,
    gisInfrastructure: gisInfrastructureAsset,
    nlpAnalytics: nlpAnalyticsAsset,
    mediaRelationships: mediaRelationshipAsset,
    volunteerManagement: volunteerManagementAsset,
    digitalMonitoring: digitalMonitoringAsset,
  },
  knowledgeManagement: knowledgeManagementSystem,
  activityCalendar: activityCalendar,
  organizationalStructure: organizationalStructure,
  budgetEstimate: budgetEstimate,
  technologyRefreshCycle: technologyRefreshCycle,
  dataPrivacyCompliance: {
    requirements: dpdComplianceRequirements,
    recommendedPosture: dpdCompliancePosture,
  },
  riskAssessment: riskAssessment,
  implementationRoadmap: implementationRoadmap,
  verificationItems: verificationItems,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get total peacetime budget in rupees
 */
export function getTotalPeacetimeBudget(): number {
  const { totalRange } = budgetEstimate.peacetime;
  return (totalRange.minimum + totalRange.maximum) / 2;
}

/**
 * Get total campaign mode budget in rupees
 */
export function getTotalCampaignModeBudget(): number {
  const { incrementalRange } = budgetEstimate.campaignMode;
  return (incrementalRange.minimum + incrementalRange.maximum) / 2;
}

/**
 * Get combined budget (peacetime + campaign mode)
 */
export function getCombinedBudget(): { peacetime: number; campaignMode: number; total: number } {
  const peacetime = getTotalPeacetimeBudget();
  const campaignMode = getTotalCampaignModeBudget();
  return { peacetime, campaignMode, total: peacetime + campaignMode };
}

/**
 * Get activities by period
 */
export function getActivitiesByPeriod(period: string): typeof activityCalendar.activities {
  return activityCalendar.activities.filter(a => a.period === period);
}

/**
 * Get risk by likelihood level
 */
export function getRisksByLikelihood(likelihood: string): typeof riskAssessment.risks {
  return riskAssessment.risks.filter(r => r.likelihood === likelihood);
}

/**
 * Get implementation phases
 */
export function getImplementationPhases(): typeof implementationRoadmap.phases {
  return implementationRoadmap.phases;
}

/**
 * Get verification items by priority
 */
export function getVerificationItemsByPriority(priority: string): VerificationItem[] {
  return verificationItems.filter(v => v.priority === priority);
}

/**
 * Get technology refresh timeline
 */
export function getTechnologyRefreshTimeline(): Map<string, string> {
  const map = new Map<string, string>();
  for (const asset of technologyRefreshCycle.assets) {
    map.set(asset.asset, asset.refreshCycle);
  }
  return map;
}

/**
 * Get organizational headcount
 */
export function getOrganizationalHeadcount(): { peacetime: { min: number; max: number }; campaign: { min: number; max: number } } {
  return {
    peacetime: organizationalStructure.peacetimeHeadcount,
    campaign: organizationalStructure.campaignModeHeadcount,
  };
}
