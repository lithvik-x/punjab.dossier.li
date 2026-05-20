// Permanent Intelligence Infrastructure & Institutional Memory Types
// Derived from: research-M2/MP10-predictive-outcomes/futures/permanent-infrastructure.md
// Task ID: T-MP10-FUTR-002

// ==========================================
// DOCUMENT METADATA
// ==========================================

export interface PermanentInfrastructureMetadata {
  taskId: string;
  megaPillar: string;
  subPillar: string;
  dependency: string;
  documentationDate: string;
  dataSources: string;
  confidenceLevel: {
    structural: 'HIGH' | 'MEDIUM' | 'LOW';
    costEstimates: 'HIGH' | 'MEDIUM' | 'LOW';
  };
}

// ==========================================
// CORE PERMANENT ASSETS
// ==========================================

// 2.1 Voter Database
export interface VoterDatabaseAsset {
  retainedData: {
    boothLevelData: {
      description: string;
      boothCount: number;
      constituencyCount: number;
    };
    segmentationProfiles: string[];
    contactInformation: {
      verifiedSupporters: boolean;
      volunteers: boolean;
      influencers: boolean;
      consentRequired: boolean;
    };
  };
  maintenance: {
    refreshCycle: 'Quarterly';
    dataHygieneCycle: '6 months';
    sources: string[];
  };
  technologyStack: {
    security: string[];
    hosting: string;
    compliance: string[];
    integration: string;
  };
}

// 2.2 GIS Infrastructure
export interface GisInfrastructureAsset {
  retainedData: {
    spatialMaps: {
      level: string;
      overlays: string[];
    };
    pollingStationData: string[];
    heatMaps: string[];
  };
  maintenance: {
    gisUpdateCycle: 'Annual';
    satelliteImageryRefresh: 'Quarterly';
    integrationSources: string[];
  };
}

// 2.3 NLP/Analytics Models
export interface NlpAnalyticsAsset {
  retainedModels: {
    sentimentAnalysis: {
      languages: string[];
      scriptSupport: string;
    };
    namedEntityRecognition: {
      entityTypes: string[];
      customization: string;
    };
    predictiveModels: string[];
    socialMediaClassifiers: string[];
  };
  maintenance: {
    retrainingCycle: 'Monthly';
    accuracyAuditThreshold: number;
    fullRebuildCycle: 'Annual';
    labeledDataPriority: string;
  };
}

// 2.4 Media Relationship Network
export interface MediaRelationshipAsset {
  retainedData: {
    journalistDatabase: {
      minimumCount: number;
      mediaTypes: string[];
    };
    relationshipTracking: string[];
    editorialCalendar: string[];
    influencerMapping: {
      platforms: string[];
      minimumFollowers: number;
      geography: string;
    };
  };
  maintenance: {
    relationshipRefresh: 'Quarterly';
    landscapeAudit: 'Annual';
    trackingFocus: string[];
  };
}

// 2.5 Volunteer Management System
export interface VolunteerManagementAsset {
  retainedData: {
    volunteerDatabase: string[];
    trainingMaterials: string[];
    taskTracking: string[];
    recognitionRecords: string[];
  };
  maintenance: {
    engagementTouchpoints: 'Monthly';
    skillsDevelopment: 'Quarterly';
    censusCycle: 'Annual';
    targetPerConstituency: {
      minimum: number;
      maximum: number;
      statewideTarget: {
        minimum: number;
        maximum: number;
      };
    };
  };
}

// 2.6 Digital Monitoring Infrastructure
export interface DigitalMonitoringAsset {
  retainedData: {
    socialMediaListening: {
      languages: string[];
      keywords: string[];
    };
    newsMonitoring: string[];
    whatsappMonitoring: string[];
    competitorTracking: string[];
  };
  maintenance: {
    peacetimeMode: {
      schedule: string;
      days: string;
    };
    alertBasedEscalation: string[];
    reporting: {
      monthly: string;
      quarterly: string;
    };
  };
}

// Union type for all core assets
export type CorePermanentAsset =
  | VoterDatabaseAsset
  | GisInfrastructureAsset
  | NlpAnalyticsAsset
  | MediaRelationshipAsset
  | VolunteerManagementAsset
  | DigitalMonitoringAsset;

// ==========================================
// KNOWLEDGE MANAGEMENT SYSTEM
// ==========================================

export interface KnowledgeManagementSystem {
  knowledgeCapture: {
    postElectionDebrief: boolean;
    campaignStrategyArchives: boolean;
    candidatePerformanceRecords: boolean;
    oppositionResearchFiles: boolean;
  };
  knowledgeArchitecture: {
    repositoryType: string;
    versionControl: boolean;
    accessLogging: boolean;
    taggingSystem: string[];
    searchLanguages: string[];
  };
  knowledgeTransfer: {
    mentorshipPairing: boolean;
    annualMasterclass: {
      duration: string;
      coverageYears: string;
    };
    standardOperatingProcedures: boolean;
  };
}

// ==========================================
// INTER-ELECTION ACTIVITY CALENDAR
// ==========================================

export type ActivityPeriod = 'Monthly' | 'Quarterly' | 'Biannual' | 'Annual' | 'Pre-Session' | 'By-Election Trigger' | 'T-18 Months' | 'T-12 Months';

export interface ActivityEntry {
  period: ActivityPeriod;
  activity: string;
  responsibleUnit: string;
}

export interface ActivityCalendar {
  activities: ActivityEntry[];
}

// ==========================================
// ORGANIZATIONAL STRUCTURE
// ==========================================

export interface OrganizationalRole {
  role: string;
  count: number | string;
  responsibility: string;
}

export interface OrganizationalStructure {
  roles: OrganizationalRole[];
  peacetimeHeadcount: {
    minimum: number;
    maximum: number;
  };
  campaignModeHeadcount: {
    minimum: number;
    maximum: number;
  };
}

// ==========================================
// BUDGET ESTIMATES
// ==========================================

export interface BudgetCategory {
  category: string;
  annualCostRange: {
    minimum: number;
    maximum: number;
    currency: string;
  };
  notes: string;
}

export interface BudgetEstimate {
  peacetime: {
    categories: BudgetCategory[];
    totalRange: {
      minimum: number;
      maximum: number;
      currency: string;
    };
  };
  campaignMode: {
    duration: string;
    incrementalRange: {
      minimum: number;
      maximum: number;
      currency: string;
    };
  };
}

// ==========================================
// TECHNOLOGY REFRESH CYCLE
// ==========================================

export type RefreshCycle = '3 years' | 'Annual' | 'Monthly' | 'Quarterly' | '3-year';

export interface TechnologyAsset {
  asset: string;
  refreshCycle: RefreshCycle;
  rationale: string;
}

export interface TechnologyRefreshCycle {
  assets: TechnologyAsset[];
}

// ==========================================
// DATA PRIVACY COMPLIANCE (DPDP ACT 2023)
// ==========================================

export interface DPDPComplianceRequirements {
  consentManagement: string[];
  purposeLimitation: string[];
  dataMinimization: string[];
  grievanceRedressal: {
    dataProtectionOfficer: boolean;
    individualRights: string[];
  };
  dataBreachNotification: {
    reportingAuthority: string;
    notificationScope: string;
  };
  crossBorderTransfer: {
    requirement: string;
    currentStatus: string;
  };
  childrensData: string;
}

export interface DPDPCompliancePosture {
  cloudInfrastructure: string[];
  consentCollection: string[];
  impactAssessments: string[];
  auditTrail: boolean;
}

// ==========================================
// RISK FACTORS
// ==========================================

export type RiskLikelihood = 'HIGH' | 'MEDIUM' | 'LOW' | 'LOW-MEDIUM';
export type RiskCategory = 'Funding' | 'Political' | 'Data Breach' | 'Staff Attrition' | 'Technology Obsolescence' | 'Regulatory';

export interface RiskFactor {
  risk: string;
  likelihood: RiskLikelihood;
  mitigation: string;
}

export interface RiskAssessment {
  risks: RiskFactor[];
}

// ==========================================
// IMPLEMENTATION ROADMAP
// ==========================================

export interface ImplementationPhase {
  phase: string;
  duration: string;
  keyActions: string[];
}

export interface ImplementationRoadmap {
  phases: ImplementationPhase[];
}

// ==========================================
// VERIFICATION ITEMS (NEEDED)
// ==========================================

export interface VerificationItem {
  item: string;
  description: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}

// ==========================================
// COMPLETE INFRASTRUCTURE DOCUMENT
// ==========================================

export interface PermanentIntelligenceInfrastructure {
  metadata: PermanentInfrastructureMetadata;
  rationale: {
    whyPersistenceMatters: string[];
    punjabSpecificJustification: string[];
  };
  coreAssets: {
    voterDatabase: VoterDatabaseAsset;
    gisInfrastructure: GisInfrastructureAsset;
    nlpAnalytics: NlpAnalyticsAsset;
    mediaRelationships: MediaRelationshipAsset;
    volunteerManagement: VolunteerManagementAsset;
    digitalMonitoring: DigitalMonitoringAsset;
  };
  knowledgeManagement: KnowledgeManagementSystem;
  activityCalendar: ActivityCalendar;
  organizationalStructure: OrganizationalStructure;
  budgetEstimate: BudgetEstimate;
  technologyRefreshCycle: TechnologyRefreshCycle;
  dataPrivacyCompliance: {
    requirements: DPDPComplianceRequirements;
    recommendedPosture: DPDPCompliancePosture;
  };
  riskAssessment: RiskAssessment;
  implementationRoadmap: ImplementationRoadmap;
  verificationItems: VerificationItem[];
}
