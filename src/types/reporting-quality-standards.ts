// Reporting Quality Standards & Template Library Types for Punjab Congress 2027 Election
// Source: MP10-predictive-outcomes/reporting/quality-standards-templates.md

// ==========================================
// QUALITY STANDARDS
// ==========================================

/**
 * Seven Quality Standards for all intelligence reports
 */
export type QualityStandard =
  | "accuracy"
  | "timeliness"
  | "relevance"
  | "actionability"
  | "clarity"
  | "consistency"
  | "security";

/**
 * Confidence levels for findings
 */
export type ConfidenceLevel = "HIGH" | "MEDIUM" | "LOW" | "ESTIMATE";

/**
 * Classification levels for reports
 */
export type ClassificationLevel = "PUBLIC" | "INTERNAL" | "CONFIDENTIAL" | "SECRET";

/**
 * Source reliability rating
 */
export type SourceReliabilityRating = "A" | "B" | "C" | "D" | "E" | "F";

// ==========================================
// REPORT TYPES & SLAs
// ==========================================

/**
 * All report types covered by the quality standards
 */
export type ReportTemplateType =
  | "DIB"                    // Daily Intelligence Brief
  | "WarRoomFlash"           // War Room Flash
  | "GroundPulseDaily"       // Ground Pulse Daily
  | "MediaSentimentDaily"    // Media Sentiment Daily
  | "WeeklyStrategicReview"  // Weekly Strategic Review
  | "CompetitorWeekly"       // Competitor Intelligence Weekly
  | "KPIDashboardWeekly"     // KPI Dashboard Weekly
  | "GroundOperationsWeekly" // Ground Operations Weekly
  | "AdHocDeepDive"          // Ad-Hoc Deep Dive
  | "PreElectionScenario"     // Pre-Election Scenario Model
  | "PostElectionAnalysis";  // Post-Election Analysis

/**
 * Report SLA (Service Level Agreement)
 */
export interface ReportSLA {
  reportType: ReportTemplateType;
  slaMinutes: number;
  description: string;
  dataCutoff: string;
  delivery: string;
}

// ==========================================
// ERROR CORRECTION PROTOCOL
// ==========================================

/**
 * Error severity levels
 */
export type ErrorSeverity =
  | "typo_formatting"
  | "factual_non_critical"
  | "factual_decision_impacting"
  | "classification_breach"
  | "fabrication";

/**
 * Error correction entry
 */
export interface ErrorCorrectionEntry {
  severity: ErrorSeverity;
  response: string;
  timeline: string;
}

// ==========================================
// SOURCE RELIABILITY
// ==========================================

/**
 * Source reliability rating entry
 */
export interface SourceReliabilityEntry {
  rating: SourceReliabilityRating;
  label: string;
  criteria: string;
}

/**
 * Quality standard requirement
 */
export interface QualityRequirement {
  requirement: string;
  implementation: string;
}

// ==========================================
// VISUAL STANDARDS
// ==========================================

/**
 * Chart type recommendations by data type
 */
export type PrimaryChartType =
  | "line_chart"
  | "area_chart"
  | "horizontal_bar"
  | "stacked_bar"
  | "pie"
  | "donut"
  | "choropleth"
  | "radar_spider"
  | "scatter"
  | "gauge"
  | "color_coded_table";

/**
 * Data type to chart mapping
 */
export interface ChartTypeMapping {
  dataType: string;
  primaryChart: PrimaryChartType;
  alternatives: PrimaryChartType[];
}

/**
 * Map standards
 */
export interface MapStandards {
  baseMap: string;
  districtCount: number;
  constituencyCount: number;
  regions: string[];
  requiredElements: string[];
}

/**
 * Infographic guidelines
 */
export interface InfographicGuidelines {
  maxPerDailyReport: number;
  maxPerWeeklyReport: number;
  requiredElements: string[];
  accessibility: string;
  minLabelSize: string;
}

// ==========================================
// BRAND STANDARDS
// ==========================================

/**
 * Brand color palette
 */
export interface BrandColor {
  element: string;
  colorName: string;
  hexCode: string;
}

/**
 * Typography standards
 */
export interface TypographyStandards {
  headings: {
    print: string;
    digital: string;
    weight: string;
  };
  body: {
    print: string;
    digital: string;
  };
  punjabi: string;
}

/**
 * Logo usage standards
 */
export interface LogoStandards {
  symbol: string;
  position: string;
  minHeightPrint: string;
  minHeightDigital: string;
  clearSpace: string;
  restrictions: string[];
}

// ==========================================
// REVIEW PIPELINE
// ==========================================

/**
 * Four-stage review pipeline stages
 */
export type ReviewStage = "author_self_review" | "peer_review" | "editor_section_head" | "final_approval";

/**
 * Review stage entry
 */
export interface ReviewStageEntry {
  stage: ReviewStage;
  name: string;
  description: string;
  sla?: string;
}

/**
 * QC checklist item
 */
export interface QCChecklistItem {
  item: string;
  category: QualityStandard;
}

// ==========================================
// TEMPLATE LIBRARY
// ==========================================

/**
 * Template entry
 */
export interface TemplateEntry {
  templateId: string;
  reportType: ReportTemplateType;
  sourceDocument: string;
  version: string;
}

/**
 * Common template sections
 */
export interface CommonTemplateSection {
  order: number;
  name: string;
  description: string;
}

// ==========================================
// CONTINUOUS IMPROVEMENT
// ==========================================

/**
 * Monthly quality audit standards
 */
export interface MonthlyQualityAudit {
  sampleSize: string;
  minSampleCount: number;
  auditDimensions: string[];
  targetScore: number;
  correctiveActionThreshold: number;
}

/**
 * Consumer feedback schedule
 */
export interface ConsumerFeedbackSchedule {
  frequency: string;
  recipients: string;
  topics: string[];
  improvementTimeline: string;
}

/**
 * Template iteration rules
 */
export interface TemplateIterationRules {
  structuralChange: string;
  headerBlockChange: string;
  auditTrail: string;
}

// ==========================================
// DISTRIBUTION MATRIX
// ==========================================

/**
 * Distribution level by classification
 */
export interface DistributionLevel {
  level: ClassificationLevel;
  label: string;
  distribution: string;
}

/**
 * War Room Flash collapse rule
 */
export interface WarRoomFlashProtocol {
  description: string;
  confirmationAuthority: string;
}

// ==========================================
// QUALITY STANDARDS DATA
// ==========================================

/**
 * All quality standards requirements
 */
export const QUALITY_STANDARDS_REQUIREMENTS: Record<QualityStandard, QualityRequirement[]> = {
  accuracy: [
    { requirement: "Verified sources only", implementation: "Every data point must trace to a named source (URL, report title + page, interview transcript ID, or dataset timestamp)" },
    { requirement: "No fabrication", implementation: "Zero tolerance. Analysts must never infer data not supported by evidence. Gaps are marked NOT_FOUND or VERIFICATION_NEEDED" },
    { requirement: "Confidence levels", implementation: "Every finding tagged: HIGH (corroborated by 2+ sources), MEDIUM (single reliable source), LOW (unverified or conflicting), ESTIMATE (model-derived, state assumptions)" },
    { requirement: "Numerical precision", implementation: "Do not over-precision. Survey data rounded to whole percentage. Model outputs state margin of error" },
  ],
  timeliness: [
    { requirement: "DIB (Daily Intelligence Brief)", implementation: "60 minutes (5:00 AM data cutoff, 6:00 AM delivery)" },
    { requirement: "War Room Flash", implementation: "15 minutes from trigger event" },
    { requirement: "Ground Pulse Daily", implementation: "90 minutes (end-of-day data collection, delivery by 8:30 PM)" },
    { requirement: "Media Sentiment Daily", implementation: "60 minutes post media cycle close" },
    { requirement: "Weekly Strategic Review", implementation: "4 hours (Sunday data cutoff, delivery by 2:00 PM)" },
    { requirement: "Competitor Weekly", implementation: "4 hours (Monday data cutoff, delivery by 2:00 PM)" },
    { requirement: "KPI Dashboard Weekly", implementation: "3 hours (Saturday data cutoff, delivery by 12:00 PM)" },
    { requirement: "Ground Operations Weekly", implementation: "4 hours (Saturday data cutoff, delivery by 2:00 PM)" },
    { requirement: "Ad-Hoc Deep Dive", implementation: "As agreed in request, minimum 24 hours for substantive analysis" },
    { requirement: "Pre-Election Scenarios", implementation: "Delivery per campaign calendar milestones" },
    { requirement: "Post-Election Analysis", implementation: "48 hours after result certification" },
  ],
  relevance: [
    { requirement: "Congress Action Test", implementation: "Every finding must pass the 'Congress Action Test': Does this help the PPCC win seats? If not connected to a campaign decision, it belongs in an appendix, not the body." },
  ],
  actionability: [
    { requirement: "So What", implementation: "Why this matters (1 sentence)" },
    { requirement: "Recommended Action", implementation: "Specific, assigned, time-bound (Owner + Deadline)" },
    { requirement: "Risk if Ignored", implementation: "Consequence of inaction (1 sentence)" },
  ],
  clarity: [
    { requirement: "Primary language", implementation: "English. Punjabi executive summaries required for: DIB, Weekly Strategic Review, Pre-Election Scenarios" },
    { requirement: "Jargon", implementation: "No jargon without inline definition. First use of acronyms spelled out" },
    { requirement: "Readability", implementation: "Class XII education level for body, graduate level for methodology appendices" },
    { requirement: "Sentence limit", implementation: "25 words maximum per sentence" },
  ],
  consistency: [
    { requirement: "Standard header block", implementation: "All reports use the standard header block (Section 3.1) and designated template (Section 3.2)" },
    { requirement: "Terminology", implementation: "Standardized per project glossary (VERIFICATION_NEEDED — glossary not yet compiled)" },
    { requirement: "Visuals", implementation: "Follow standards in Section 4" },
  ],
  security: [
    { requirement: "PUBLIC", implementation: "Press-suitable, unrestricted" },
    { requirement: "INTERNAL", implementation: "Campaign staff — PPCC + CryptoMize, encrypted channels" },
    { requirement: "CONFIDENTIAL", implementation: "Senior leadership — Campaign Director, CIO, PPCC President, Section Heads — E2E encrypted" },
    { requirement: "SECRET", implementation: "Named individuals — Campaign Director + CIO + named recipients — air-gapped review" },
    { requirement: "Labeling", implementation: "Every report carries its classification label in the header, every page footer, and the filename" },
  ],
};

/**
 * Report SLAs
 */
export const REPORT_SLAS: ReportSLA[] = [
  { reportType: "DIB", slaMinutes: 60, description: "Daily Intelligence Brief", dataCutoff: "5:00 AM", delivery: "6:00 AM" },
  { reportType: "WarRoomFlash", slaMinutes: 15, description: "War Room Flash", dataCutoff: "Trigger event", delivery: "15 min from trigger" },
  { reportType: "GroundPulseDaily", slaMinutes: 90, description: "Ground Pulse Daily", dataCutoff: "End of day", delivery: "8:30 PM" },
  { reportType: "MediaSentimentDaily", slaMinutes: 60, description: "Media Sentiment Daily", dataCutoff: "Post media cycle close", delivery: "60 min post close" },
  { reportType: "WeeklyStrategicReview", slaMinutes: 240, description: "Weekly Strategic Review", dataCutoff: "Sunday", delivery: "2:00 PM" },
  { reportType: "CompetitorWeekly", slaMinutes: 240, description: "Competitor Intelligence Weekly", dataCutoff: "Monday", delivery: "2:00 PM" },
  { reportType: "KPIDashboardWeekly", slaMinutes: 180, description: "KPI Dashboard Weekly", dataCutoff: "Saturday", delivery: "12:00 PM" },
  { reportType: "GroundOperationsWeekly", slaMinutes: 240, description: "Ground Operations Weekly", dataCutoff: "Saturday", delivery: "2:00 PM" },
  { reportType: "AdHocDeepDive", slaMinutes: 1440, description: "Ad-Hoc Deep Dive", dataCutoff: "As agreed", delivery: "Minimum 24 hours" },
  { reportType: "PreElectionScenario", slaMinutes: 0, description: "Pre-Election Scenario Model", dataCutoff: "Per campaign calendar", delivery: "Per milestones" },
  { reportType: "PostElectionAnalysis", slaMinutes: 2880, description: "Post-Election Analysis", dataCutoff: "Result certification", delivery: "48 hours after" },
];

/**
 * Source reliability ratings
 */
export const SOURCE_RELIABILITY_RATINGS: SourceReliabilityEntry[] = [
  { rating: "A", label: "Verified Authoritative", criteria: "Government data, election commission records, verified primary sources" },
  { rating: "B", label: "Reliable", criteria: "Established media, academic research, ground reports from 2+ independent volunteers" },
  { rating: "C", label: "Corroborated", criteria: "Single source confirmed by one other" },
  { rating: "D", label: "Unverified", criteria: "Single source, no corroboration" },
  { rating: "E", label: "Speculative", criteria: "Opinion or analysis without direct evidence — must be labeled ESTIMATE" },
  { rating: "F", label: "Discredited", criteria: "Known false — do not use" },
];

/**
 * Error correction protocol
 */
export const ERROR_CORRECTION_PROTOCOL: ErrorCorrectionEntry[] = [
  { severity: "typo_formatting", response: "Correct in next version, no retraction", timeline: "Next publication cycle" },
  { severity: "factual_non_critical", response: "Issue corrected version, flag change in version notes", timeline: "Within 4 hours" },
  { severity: "factual_decision_impacting", response: "Immediate verbal alert to recipients + corrected version", timeline: "Within 1 hour" },
  { severity: "classification_breach", response: "Immediate verbal alert + retraction of misclassified version + incident report", timeline: "Within 30 minutes" },
  { severity: "fabrication", response: "Full retraction + root cause analysis + analyst accountability review", timeline: "Within 1 hour" },
];

/**
 * Chart type mappings
 */
export const CHART_TYPE_MAPPINGS: ChartTypeMapping[] = [
  { dataType: "Time series", primaryChart: "line_chart", alternatives: ["area_chart"] },
  { dataType: "Seat projections", primaryChart: "horizontal_bar", alternatives: ["choropleth"] },
  { dataType: "Vote share", primaryChart: "stacked_bar", alternatives: ["pie", "donut"] },
  { dataType: "Regional comparison", primaryChart: "choropleth", alternatives: ["horizontal_bar"] },
  { dataType: "Competitor positioning", primaryChart: "radar_spider", alternatives: ["scatter"] },
  { dataType: "KPI traffic lights", primaryChart: "color_coded_table", alternatives: ["gauge"] },
];

/**
 * Map standards
 */
export const MAP_STANDARDS: MapStandards = {
  baseMap: "Punjab with 23 district boundaries",
  districtCount: 23,
  constituencyCount: 117,
  regions: ["Malwa (south)", "Majha (north)", "Doaba (central)"],
  requiredElements: ["scale bar", "legend", "data source", "date"],
};

/**
 * Infographic guidelines
 */
export const INFOGRAPHIC_GUIDELINES: InfographicGuidelines = {
  maxPerDailyReport: 1,
  maxPerWeeklyReport: 3,
  requiredElements: ["title", "data source", "date", "classification label"],
  accessibility: "Colorblind-safe palette",
  minLabelSize: "12pt",
};

/**
 * Brand color palette
 */
export const BRAND_COLORS: BrandColor[] = [
  { element: "Congress primary", colorName: "Congress Green", hexCode: "#00875A" },
  { element: "Congress accent", colorName: "Congress Tricolor Saffron", hexCode: "#FF9933" },
  { element: "Congress secondary", colorName: "Congress Tricolor White", hexCode: "#FFFFFF" },
  { element: "Header bar", colorName: "Dark green", hexCode: "#006B47" },
  { element: "Alert / Critical", colorName: "Red", hexCode: "#CC0000" },
  { element: "Caution / Warning", colorName: "Amber", hexCode: "#FF8800" },
  { element: "Positive trend", colorName: "Green", hexCode: "#228B22" },
  { element: "Negative trend", colorName: "Red", hexCode: "#CC3333" },
  { element: "Neutral data", colorName: "Slate gray", hexCode: "#5A6872" },
  { element: "Background", colorName: "White", hexCode: "#FFFFFF" },
  { element: "Text body", colorName: "Near-black", hexCode: "#1A1A2E" },
];

/**
 * Typography standards
 */
export const TYPOGRAPHY_STANDARDS: TypographyStandards = {
  headings: {
    print: "Bold, 14pt+",
    digital: "Bold, 18px+",
    weight: "bold",
  },
  body: {
    print: "Regular, 11pt+",
    digital: "Regular, 14px+",
  },
  punjabi: "Noto Sans Gurmukhi",
};

/**
 * Logo standards
 */
export const LOGO_STANDARDS: LogoStandards = {
  symbol: "Congress hand symbol",
  position: "Top-right corner of every report header",
  minHeightPrint: "20mm",
  minHeightDigital: "40px",
  clearSpace: "5mm",
  restrictions: ["Do not distort", "Do not recolor", "Do not overlay text"],
};

/**
 * Four-stage review pipeline
 */
export const REVIEW_PIPELINE: ReviewStageEntry[] = [
  { stage: "author_self_review", name: "Author Self-Review", description: "Author self-review against QC checklist" },
  { stage: "peer_review", name: "Peer Review", description: "4-hour SLA daily, 24-hour weekly" },
  { stage: "editor_section_head", name: "Editor / Section Head", description: "Quality, classification, strategic alignment" },
  { stage: "final_approval", name: "Final Approval", description: "Campaign Director (daily) or CIO (weekly/strategic)" },
];

/**
 * War Room Flash collapse protocol
 */
export const WAR_ROOM_FLASH_PROTOCOL: WarRoomFlashProtocol = {
  description: "War Room Flash alerts collapse stages 2-4 to a single verbal confirmation from the War Room Operations Lead",
  confirmationAuthority: "War Room Operations Lead",
};

/**
 * Universal QC checklist
 */
export const QC_CHECKLIST: QCChecklistItem[] = [
  { item: "Header block complete (title, date, version, classification, distribution)", category: "consistency" },
  { item: "All data points trace to named sources", category: "accuracy" },
  { item: "Confidence levels assigned to every finding", category: "accuracy" },
  { item: "No fabricated or extrapolated data without explicit ESTIMATE label", category: "accuracy" },
  { item: "Every finding has a 'So What' and 'Recommended Action'", category: "actionability" },
  { item: "Punjabi executive summary included (where required)", category: "clarity" },
  { item: "Classification level correct and justified", category: "security" },
  { item: "Distribution list verified against classification level", category: "security" },
  { item: "Page/word count within SLA for report type", category: "timeliness" },
  { item: "Visuals follow brand and visual standards", category: "consistency" },
  { item: "Previous version corrections incorporated", category: "consistency" },
  { item: "Spell-check and grammar-check completed", category: "clarity" },
];

/**
 * Template library
 */
export const TEMPLATE_LIBRARY: TemplateEntry[] = [
  { templateId: "TPL-001", reportType: "DIB", sourceDocument: "RPTG-001 Section 1.1", version: "1.0" },
  { templateId: "TPL-002", reportType: "WarRoomFlash", sourceDocument: "RPTG-001 Section 1.2", version: "1.0" },
  { templateId: "TPL-003", reportType: "GroundPulseDaily", sourceDocument: "RPTG-001 Section 1.3", version: "1.0" },
  { templateId: "TPL-004", reportType: "MediaSentimentDaily", sourceDocument: "RPTG-001 Section 1.4", version: "1.0" },
  { templateId: "TPL-005", reportType: "WeeklyStrategicReview", sourceDocument: "RPTG-001 Section 2.1", version: "1.0" },
  { templateId: "TPL-006", reportType: "CompetitorWeekly", sourceDocument: "RPTG-001 Section 2.2", version: "1.0" },
  { templateId: "TPL-007", reportType: "KPIDashboardWeekly", sourceDocument: "RPTG-001 Section 2.3", version: "1.0" },
  { templateId: "TPL-008", reportType: "GroundOperationsWeekly", sourceDocument: "RPTG-001 Section 2.4", version: "1.0" },
  { templateId: "TPL-009", reportType: "AdHocDeepDive", sourceDocument: "RPTG-002", version: "1.0" },
  { templateId: "TPL-010", reportType: "PreElectionScenario", sourceDocument: "RPTG-002", version: "1.0" },
  { templateId: "TPL-011", reportType: "PostElectionAnalysis", sourceDocument: "RPTG-002", version: "1.0" },
];

/**
 * Common template sections
 */
export const COMMON_TEMPLATE_SECTIONS: CommonTemplateSection[] = [
  { order: 1, name: "Executive Summary", description: "3-5 bullet points, readable standalone in 30 seconds" },
  { order: 2, name: "Key Findings", description: "Numbered, ranked by strategic impact, each with confidence level" },
  { order: 3, name: "Analysis", description: "Detailed examination with source citations" },
  { order: 4, name: "Recommended Actions", description: "Owner-assigned, time-bound, prioritized" },
  { order: 5, name: "Appendix", description: "Methodology notes, raw data tables, full source list" },
];

/**
 * Classification distribution levels
 */
export const CLASSIFICATION_DISTRIBUTION: DistributionLevel[] = [
  { level: "PUBLIC", label: "Press-suitable", distribution: "Unrestricted" },
  { level: "INTERNAL", label: "Campaign staff", distribution: "PPCC + CryptoMize, encrypted channels" },
  { level: "CONFIDENTIAL", label: "Senior leadership", distribution: "Campaign Director, CIO, PPCC President, Section Heads — E2E encrypted" },
  { level: "SECRET", label: "Named individuals", distribution: "Campaign Director + CIO + named recipients — air-gapped review" },
];

/**
 * Monthly quality audit
 */
export const MONTHLY_QUALITY_AUDIT: MonthlyQualityAudit = {
  sampleSize: "10%",
  minSampleCount: 5,
  auditDimensions: ["accuracy", "completeness", "actionability", "timeliness", "classification"],
  targetScore: 85,
  correctiveActionThreshold: 75,
};

/**
 * Consumer feedback schedule
 */
export const CONSUMER_FEEDBACK_SCHEDULE: ConsumerFeedbackSchedule = {
  frequency: "Quarterly",
  recipients: "All report recipients",
  topics: ["relevance", "actionability", "format", "missing info", "timeliness"],
  improvementTimeline: "Top 3 improvements implemented within 2 weeks of review",
};

/**
 * Template iteration rules
 */
export const TEMPLATE_ITERATION_RULES: TemplateIterationRules = {
  structuralChange: "Any structural change increments minor version (1.0 to 1.1)",
  headerBlockChange: "Any change to header block or quality requirements increments major version (1.0 to 2.0)",
  auditTrail: "All template versions are retained for audit trail",
};
