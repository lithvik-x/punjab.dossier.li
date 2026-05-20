// Governance Satisfaction Barometer Types
// Derived from: MP1/governance/satisfaction-barometer.md
// Category: public-sentiment

// ==========================================
// SATISFACTION TREND DATA
// ==========================================

export interface SatisfactionTrendPoint {
  period: string;
  satisfactionProxy: number; // percentage 0-100
  evidence: string;
}

export interface SatisfactionTrendData {
  trajectory: SatisfactionTrendPoint[];
  keyInsight: string;
  currentEstimate: {
    value: number;
    range: string;
    proppedBy: string[];
  };
}

// ==========================================
// ISSUE-WISE SATISFACTION
// ==========================================

export type SatisfactionLevel = "VERY_LOW" | "LOW" | "MODERATE" | "HIGH" | "VERY_HIGH";

export interface IssueSatisfaction {
  issue: string;
  satisfactionLevel: SatisfactionLevel;
  satisfactionPercentage: number; // 0-100
  promise: string;
  delivery: string;
  metrics: IssueMetric[];
  strategicSignificance: string;
  verificationStatus: "VERIFIED" | "AAP_CLAIM" | "ALLEGATION" | "VERIFICATION_NEEDED";
}

export interface IssueMetric {
  label: string;
  value: string;
  note?: string;
}

// ==========================================
// LOK SABHA 2024 RESULTS
// ==========================================

export interface LokSabhaResult {
  party: "Congress" | "AAP" | "SAD" | "Independents";
  seats: number;
  seatsTotal: number;
  voteShare?: string;
  constituencies: string[];
}

export interface LokSabhaResults {
  electionDate: string;
  results: LokSabhaResult[];
  strategicImplication: string;
}

// ==========================================
// DEMOGRAPHIC SATISFACTION
// ==========================================

export interface DemographicSatisfaction {
  demographic: string;
  satisfactionPercentage: number;
  trend: "declining" | "stable" | "improving";
  populationPercent?: number;
  keyFactors: string[];
  strategicNote?: string;
}

export interface DemographicSatisfactionData {
  demographics: DemographicSatisfaction[];
  mostEroded: string;
  leastEroded: string;
}

// ==========================================
// CM BHAGWANT MANN APPROVAL
// ==========================================

export interface CMApprovalTrend {
  period: string;
  approval: number;
  notes: string;
}

export interface CMApprovalData {
  trends: CMApprovalTrend[];
  currentEstimate: {
    value: number;
    range: string;
    personalBrandEquity: string;
    keyWeakness: string;
  };
}

// ==========================================
// WILLINGNESS TO RE-ELECT
// ==========================================

export interface ReElectWillingness {
  period: string;
  willingnessProxy: number;
  evidence: string;
}

export interface ReElectWillingnessData {
  trends: ReElectWillingness[];
  currentEstimate: {
    value: number;
    range: string;
    seatEstimate: string;
    retainedSeats: number;
    lostSeats: number;
    floorFactors: string[];
  };
}

// ==========================================
// ANTI-INCUMBENCY INDICATORS
// ==========================================

export type SignalStrength = "VERY_STRONG" | "STRONG" | "MODERATE" | "WEAK";
export type Direction = "anti_incumbency" | "pro_incumbency" | "neutral";

export interface AntiIncumbencyIndicator {
  indicator: string;
  signalStrength: SignalStrength;
  direction: Direction;
  detail: string;
}

export interface AntiIncumbencyData {
  indicators: AntiIncumbencyIndicator[];
  overallAssessment: string;
  trend: "building" | "plateaued" | "declining";
}

// ==========================================
// KEY GOVERNANCE METRICS
// ==========================================

export interface GovernanceMetric {
  label: string;
  value: string;
  category: string;
  verificationStatus: "VERIFIED" | "AAP_CLAIM" | "ALLEGATION" | "VERIFICATION_NEEDED";
  trend?: "up" | "down" | "stable";
  note?: string;
}

export interface GovernanceMetricsData {
  freeElectricity: {
    coverage: string;
    farmerBenefit: string;
    costToExchequer: string;
    satisfaction: number;
    issues: string[];
  };
  drugEradication: {
    promise: string;
    reality: string;
    expertAssessment: string;
    communityResponse: string;
  };
  employment: {
    jobsProvided: number;
    youthUnemployment: number;
    ruralYouthUnemployment: number;
    migrationIssue: string;
  };
  womenWelfare: {
    promise: string;
    deliveryDelay: string;
    freeBusTravel: string;
    sanitaryPads: string;
  };
  healthcare: {
    clinicsOperational: number;
    targetClinics: number;
    outpatientVisits: string;
    populationServedPerInstitution: number;
  };
  farmerWelfare: {
    canalIrrigation: string;
    electricityForFarming: string;
    debtRelief: string;
    mspCommitment: string;
  };
  lawOrder: {
    gangsterCulture: string;
    drugMafia: string;
    policeCredibility: string;
    amritpalSinghFactor: string;
  };
  corruptionGovernance: {
    ministersDropped: number;
    corruptionCases: string[];
    socialMediaSpending: string;
  };
  education: {
    sportsBudget: string;
    newUniversities: string;
    infrastructureInvestment: string;
  };
  infrastructure: {
    tollPlazasClosed: number;
    canalIrrigation: string;
    thermalPlant: string;
  };
}

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

export interface StrategicImplication {
  number: number;
  title: string;
  description: string;
}

export interface StrategicImplicationsData {
  forCongress: StrategicImplication[];
  dataGaps: DataGap[];
}

// ==========================================
// DATA GAPS
// ==========================================

export interface DataGap {
  dataPoint: string;
  status: string;
  actionNeeded: string;
}

// ==========================================
// COMPLETE GOVERNANCE SATISFACTION REPORT
// ==========================================

export interface GovernanceSatisfactionReport {
  metadata: {
    title: string;
    megaPillar: string;
    researchDate: string;
    classification: string;
    dataFreshness: string;
  };
  executiveSummary: string;
  satisfactionTrend: SatisfactionTrendData;
  lokSabhaResults: LokSabhaResults;
  issueSatisfaction: IssueSatisfaction[];
  demographicSatisfaction: DemographicSatisfactionData;
  cmApproval: CMApprovalData;
  reElectWillingness: ReElectWillingnessData;
  antiIncumbency: AntiIncumbencyData;
  governanceMetrics: GovernanceMetricsData;
  strategicImplications: StrategicImplicationsData;
}

// ==========================================
// DASHBOARD DATA INTERFACE
// ==========================================

export interface PublicSentimentDashboardData {
  governanceSatisfaction: GovernanceSatisfactionReport;
}
