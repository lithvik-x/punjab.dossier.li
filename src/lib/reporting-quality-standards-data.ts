// Reporting Quality Standards Data for Punjab Congress 2027 Election Dashboard
// Source: MP10-predictive-outcomes/reporting/quality-standards-templates.md

import type {
  ReportSLA,
  QualityStandard,
  ClassificationLevel,
  SourceReliabilityRating,
  ErrorSeverity,
  BrandColor,
} from "@/types/reporting-quality-standards";

/**
 * Quality metrics for dashboard display
 */
export interface QualityMetrics {
  totalReports: number;
  onTimeDelivery: number;
  accuracyScore: number;
  averageReviewTime: number;
}

/**
 * Report type performance data
 */
export interface ReportPerformanceData {
  reportType: string;
  slaMinutes: number;
  actualDeliveryMinutes: number;
  onTime: boolean;
  qualityScore: number;
  lastDelivery: string;
}

/**
 * Source reliability data point
 */
export interface SourceReliabilityData {
  rating: SourceReliabilityRating;
  count: number;
  percentage: number;
}

/**
 * Error correction data
 */
export interface ErrorCorrectionData {
  severity: ErrorSeverity;
  count: number;
  avgResolutionTime: string;
}

/**
 * Classification distribution data
 */
export interface ClassificationDistributionData {
  level: ClassificationLevel;
  reportCount: number;
  percentage: number;
}

/**
 * Quality trend data point
 */
export interface QualityTrendPoint {
  date: string;
  accuracyScore: number;
  timelinessScore: number;
  overallScore: number;
}

/**
 * Dashboard page mapping for quality standards
 */
export const QUALITY_STANDARDS_PAGE_MAPPING: Record<QualityStandard, string[]> = {
  accuracy: ["intelligence", "public-sentiment", "media-sentiment"],
  timeliness: ["intelligence"],
  relevance: ["intelligence", "perception"],
  actionability: ["intelligence", "perception"],
  clarity: ["intelligence"],
  consistency: ["intelligence", "party"],
  security: ["intelligence"],
};

/**
 * Report SLA data for dashboard
 */
export const REPORT_SLA_DATA: ReportSLA[] = [
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
 * Sample report performance data (for demo/testing)
 */
export const SAMPLE_REPORT_PERFORMANCE: ReportPerformanceData[] = [
  { reportType: "DIB", slaMinutes: 60, actualDeliveryMinutes: 55, onTime: true, qualityScore: 92, lastDelivery: "2026-05-20 06:00" },
  { reportType: "WarRoomFlash", slaMinutes: 15, actualDeliveryMinutes: 12, onTime: true, qualityScore: 88, lastDelivery: "2026-05-20 10:30" },
  { reportType: "GroundPulseDaily", slaMinutes: 90, actualDeliveryMinutes: 85, onTime: true, qualityScore: 90, lastDelivery: "2026-05-19 20:25" },
  { reportType: "MediaSentimentDaily", slaMinutes: 60, actualDeliveryMinutes: 58, onTime: true, qualityScore: 94, lastDelivery: "2026-05-19 22:00" },
  { reportType: "WeeklyStrategicReview", slaMinutes: 240, actualDeliveryMinutes: 230, onTime: true, qualityScore: 95, lastDelivery: "2026-05-18 13:45" },
  { reportType: "CompetitorWeekly", slaMinutes: 240, actualDeliveryMinutes: 245, onTime: false, qualityScore: 91, lastDelivery: "2026-05-19 14:05" },
  { reportType: "KPIDashboardWeekly", slaMinutes: 180, actualDeliveryMinutes: 175, onTime: true, qualityScore: 93, lastDelivery: "2026-05-17 11:55" },
  { reportType: "GroundOperationsWeekly", slaMinutes: 240, actualDeliveryMinutes: 238, onTime: true, qualityScore: 89, lastDelivery: "2026-05-17 14:18" },
];

/**
 * Sample source reliability distribution (for demo/testing)
 */
export const SAMPLE_SOURCE_RELIABILITY: SourceReliabilityData[] = [
  { rating: "A", count: 245, percentage: 42 },
  { rating: "B", count: 198, percentage: 34 },
  { rating: "C", count: 87, percentage: 15 },
  { rating: "D", count: 32, percentage: 5 },
  { rating: "E", count: 18, percentage: 3 },
  { rating: "F", count: 5, percentage: 1 },
];

/**
 * Sample error correction data (for demo/testing)
 */
export const SAMPLE_ERROR_CORRECTION: ErrorCorrectionData[] = [
  { severity: "typo_formatting", count: 12, avgResolutionTime: "Next cycle" },
  { severity: "factual_non_critical", count: 3, avgResolutionTime: "3.5 hours" },
  { severity: "factual_decision_impacting", count: 1, avgResolutionTime: "45 minutes" },
  { severity: "classification_breach", count: 0, avgResolutionTime: "N/A" },
  { severity: "fabrication", count: 0, avgResolutionTime: "N/A" },
];

/**
 * Sample classification distribution (for demo/testing)
 */
export const SAMPLE_CLASSIFICATION_DISTRIBUTION: ClassificationDistributionData[] = [
  { level: "PUBLIC", reportCount: 45, percentage: 35 },
  { level: "INTERNAL", reportCount: 52, percentage: 40 },
  { level: "CONFIDENTIAL", reportCount: 28, percentage: 22 },
  { level: "SECRET", reportCount: 5, percentage: 3 },
];

/**
 * Sample quality trend data (for demo/testing)
 */
export const SAMPLE_QUALITY_TRENDS: QualityTrendPoint[] = [
  { date: "2026-05-14", accuracyScore: 88, timelinessScore: 92, overallScore: 90 },
  { date: "2026-05-15", accuracyScore: 90, timelinessScore: 88, overallScore: 89 },
  { date: "2026-05-16", accuracyScore: 91, timelinessScore: 91, overallScore: 91 },
  { date: "2026-05-17", accuracyScore: 89, timelinessScore: 94, overallScore: 92 },
  { date: "2026-05-18", accuracyScore: 92, timelinessScore: 93, overallScore: 93 },
  { date: "2026-05-19", accuracyScore: 91, timelinessScore: 90, overallScore: 91 },
  { date: "2026-05-20", accuracyScore: 93, timelinessScore: 92, overallScore: 93 },
];

/**
 * Brand colors mapped to dashboard theme
 */
export const BRAND_COLORS_MAP: Record<string, BrandColor> = {
  congressPrimary: { element: "Congress primary", colorName: "Congress Green", hexCode: "#00875A" },
  congressAccent: { element: "Congress accent", colorName: "Congress Tricolor Saffron", hexCode: "#FF9933" },
  congressSecondary: { element: "Congress secondary", colorName: "Congress Tricolor White", hexCode: "#FFFFFF" },
  headerBar: { element: "Header bar", colorName: "Dark green", hexCode: "#006B47" },
  alertCritical: { element: "Alert / Critical", colorName: "Red", hexCode: "#CC0000" },
  cautionWarning: { element: "Caution / Warning", colorName: "Amber", hexCode: "#FF8800" },
  positiveTrend: { element: "Positive trend", colorName: "Green", hexCode: "#228B22" },
  negativeTrend: { element: "Negative trend", colorName: "Red", hexCode: "#CC3333" },
  neutralData: { element: "Neutral data", colorName: "Slate gray", hexCode: "#5A6872" },
  background: { element: "Background", colorName: "White", hexCode: "#FFFFFF" },
  textBody: { element: "Text body", colorName: "Near-black", hexCode: "#1A1A2E" },
};

/**
 * Quality standards summary for intelligence dashboard
 */
export const QUALITY_STANDARDS_SUMMARY = {
  totalReportsThisWeek: 28,
  onTimeDeliveryRate: 93,
  averageQualityScore: 91,
  sourceReliabilityDistribution: SAMPLE_SOURCE_RELIABILITY,
  errorCorrectionStats: {
    totalErrors: 16,
    criticalErrors: 0,
    resolvedErrors: 15,
    pendingErrors: 1,
  },
  classificationBreakdown: SAMPLE_CLASSIFICATION_DISTRIBUTION,
  slaCompliance: {
    dib: { target: 60, actual: 55, unit: "minutes" },
    warRoomFlash: { target: 15, actual: 12, unit: "minutes" },
    groundPulse: { target: 90, actual: 85, unit: "minutes" },
    mediaSentiment: { target: 60, actual: 58, unit: "minutes" },
  },
};
