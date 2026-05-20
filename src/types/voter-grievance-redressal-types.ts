// Voter Grievance Redressal System Types
// Derived from: direct-documentation/cat-3-party-propulsion/g41-voter-grievance-redressal-system.md
// Research Date: 2026-05-20 | Data Currency: May 2026

// ==========================================
// METADATA
// ==========================================

export interface VoterGrievanceMetadata {
  reportDate: string;
  documentType: string;
  track: string;
  version: string;
  electionContext: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// CHANNEL TYPES
// ==========================================

export interface WhatsAppChannel {
  numberStrategy: string;
  protocol: string;
  handlingTemplate: string;
  autoReply: string;
}

export interface PhoneHotline {
  tier1: TierInfo;
  tier2: TierInfo;
  tier3: TierInfo;
}

export interface TierInfo {
  numberType: string;
  purpose: string;
  timing: string;
}

export interface SocialMediaChannel {
  twitter: TwitterChannel;
  facebook: FacebookChannel;
  protocol: string[];
}

export interface TwitterChannel {
  account: string;
  hashtagMonitoring: string[];
  responseTime: string;
}

export interface FacebookChannel {
  pagesMonitored: string;
  complaintKeywords: string[];
  responseTime: string;
}

export interface InPersonCollection {
  atRallies: string;
  boothLevel: string;
  doorToDoor: string;
}

// ==========================================
// COMPLAINT CATEGORIZATION TYPES
// ==========================================

export type GrievanceCategory =
  | "G-01"
  | "G-02"
  | "G-03"
  | "G-04"
  | "G-05"
  | "G-06"
  | "G-07"
  | "G-08"
  | "G-09";

export interface GrievanceCategoryDef {
  code: GrievanceCategory;
  name: string;
  description: string;
  primaryHandler: string;
  sla: string;
}

export interface CategoryResponseProtocol {
  g01_GovernmentServices: string;
  g02_LocalInfrastructure: string;
  g03_LawOrder: string;
  g04_GovernmentEmployeeCorruption: string;
  g05_AAPGovernanceFailure: string;
  g06_AgriculturalDistress: string;
  g07_EmploymentYouth: string;
  g08_WomensSafety: string;
  g09_DeraCommunityIssues: string;
}

// ==========================================
// RESPONSE PROTOCOL TYPES
// ==========================================

export interface ThreeTierResponse {
  tier1: Tier1Response;
  tier2: Tier2Response;
  tier3: Tier3Response;
}

export interface Tier1Response {
  name: string;
  timeframe: string;
  actions: string[];
}

export interface Tier2Response {
  name: string;
  timeframe: string;
  actions: string[];
}

export interface Tier3Response {
  name: string;
  timeframe: string;
  actions: string[];
}

export interface EscalationTrigger {
  trigger: string;
  escalationPath: string;
}

// ==========================================
// CRM & TRACKING TYPES
// ==========================================

export interface CRMFields {
  referenceNumber: string;
  timestamp: string;
  category: GrievanceCategory;
  location: string;
  voterContact: string;
  assignedTo: string;
  status: string;
  resolutionDate?: string;
}

export interface DashboardMetrics {
  totalComplaints: number;
  resolvedPercentage: number;
  averageResolutionTime: string;
  categoryBreakdown: Record<GrievanceCategory, number>;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface VoterGrievanceRedressalData {
  metadata: VoterGrievanceMetadata;
  executiveSummary: string;
  channels: {
    whatsapp: WhatsAppChannel;
    phoneHotline: PhoneHotline;
    socialMedia: SocialMediaChannel;
    inPerson: InPersonCollection;
  };
  complaintCategories: GrievanceCategoryDef[];
  categoryProtocols: CategoryResponseProtocol;
  responseProtocols: {
    threeTier: ThreeTierResponse;
    escalationTriggers: EscalationTrigger[];
  };
  crmFields: CRMFields;
  dashboardMetrics: DashboardMetrics;
}
