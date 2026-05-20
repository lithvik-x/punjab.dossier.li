// Campaign Legal Compliance & ECI Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g42-campaign-legal-compliance-eci.md

// ==========================================
// MODEL CODE OF CONDUCT
// ==========================================

export interface MCCProvision {
  rule: string;
  description: string;
  punjabRisk: string;
}

export interface SilencePeriodRule {
  duration: string;
  prohibitedActivities: string[];
  exceptions: string[];
}

export interface DoAndDont {
  allowed: string[];
  prohibited: string[];
}

// ==========================================
// EXPENDITURE LIMITS
// ==========================================

export interface CandidateExpenditureLimit {
  category: string;
  limit: string;
  includes: string[];
}

export interface ExpenditureTrackingRequirement {
  requirement: string;
  description: string;
}

export interface SocialMediaExpenditureItem {
  item: string;
  trackingRequirement: string;
}

export interface ExpenditureViolationConsequence {
  violation: string;
  consequence: string;
}

// ==========================================
// CANDIDATE AFFIDAVIT
// ==========================================

export interface Form26Part {
  part: "A" | "B" | "C" | "D";
  contents: string[];
}

export interface AffidavitFilingStep {
  step: number;
  description: string;
}

export interface PostFilingOption {
  scenario: string;
  options: string[];
}

export interface PreFilingChecklist {
  item: string;
  completed: boolean;
}

// ==========================================
// CRIMINAL CASE MANAGEMENT
// ==========================================

export interface StrategicDeclareApproach {
  element: string;
  description: string;
}

export interface ScreeningPhase {
  phase: number;
  name: string;
  description: string;
}

export interface LegalDefensePreparation {
  action: string;
  description: string;
}

// ==========================================
// FCRA & FOREIGN FUNDING
// ==========================================

export interface ProhibitedForeignSource {
  source: string;
  description: string;
}

export interface ProhibitedFundingMechanism {
  mechanism: string;
  description: string;
}

export interface LegalCorporateDonation {
  requirement: string;
  description: string;
}

export interface DonorVerificationStep {
  step: string;
  action: string;
}

// ==========================================
// RPA SECTION 126
// ==========================================

export interface Section126Prohibition {
  activity: string;
  duration: string;
  punishment: string;
}

export interface ExitPollBlackout {
  rule: string;
  duration: string;
  enforcement: string;
}

export interface Final48HourProhibited {
  content: string[];
}

// ==========================================
// PAID NEWS RULES
// ==========================================

export interface PaidNewsDefinition {
  characteristic: string;
  description: string;
}

export interface LegitimateVsPaidNews {
  legitimate: string[];
  paidNews: string[];
}

export interface PaidNewsAvoidance {
  control: string;
  description: string;
}

// ==========================================
// BOOTH-LEVEL COMPLIANCE
// ==========================================

export interface CanvassingRestriction {
  phase: string;
  rules: string;
}

export interface PollingStationProhibition {
  distance: string;
  prohibitedActivities: string[];
}

export interface BoothDoAndDont {
  allowed: string[];
  prohibited: string[];
}

// ==========================================
// COMMON VIOLATIONS
// ==========================================

export interface CommonMistake {
  mistake: string;
  legalRisk: string;
}

export interface KeyViolationPenalty {
  violation: string;
  penalty: string;
  authority: string;
}

export interface ECIReportingStep {
  step: number;
  action: string;
}

// ==========================================
// LEGAL RISK MITIGATION
// ==========================================

export interface LegalCounselStructure {
  role: string;
  description: string;
}

export interface PreCampaignAudit {
  category: string;
  items: string[];
}

export interface EventComplianceChecklist {
  beforeEvent: string[];
  beforeSocialMedia: string[];
  beforePrint: string[];
}

export interface AccidentalViolationResponse {
  step: number;
  action: string;
}

// ==========================================
// MEDIA LAW
// ==========================================

export interface DefamationSafeClaim {
  type: string;
  example: string;
}

export interface DefamationUnsafeClaim {
  type: string;
  risk: string;
}

export interface MediaLawTier {
  tier: number;
  response: string;
  timeline: string;
}

// ==========================================
// COMPLIANCE CALENDAR
// ==========================================

export interface CompliancePhase {
  phase: string;
  timing: string;
  actions: string[];
}

// ==========================================
// KEY LEGAL PROVISIONS
// ==========================================

export interface RPASection {
  section: string;
  subject: string;
  penalty: string;
}

export const LEGAL_COMPLIANCE_CONCEPTS = {
  mcc: "Model Code of Conduct - ECI campaign behavior guidelines",
  form26: "Candidate affidavit with criminal, financial, educational details",
  fcra: "Foreign Contribution Regulation Act",
  paidNews: "Publishing news content in exchange for payment",
  section126: "Quietening period restrictions",
  deo: "District Election Officer",
  ro: "Returning Officer"
} as const;
