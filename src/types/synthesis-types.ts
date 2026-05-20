// Synthesis Intelligence Types for Punjab Congress 2027
// Processed from synthesis MD files: s1-cross-reference-validation, s2-master-index, s3-quality-validation, s4-gap-analysis

// ==========================================
// CROSS-REFERENCE VALIDATION TYPES (s1)
// ==========================================

export interface CorroboratedFinding {
  finding: string;
  trackASource: string[];
  trackBSource: string[];
  status: "CORROBORATED" | "PARTIALLY_CORROBORATED" | "GAP_IDENTIFIED" | "NO_VALIDATION";
}

export interface ContradictoryFinding {
  finding: string;
  trackA: string;
  trackB: string;
  resolution: string;
}

export interface MethodologyGap {
  gap: string;
  trackBSection: string;
  risk: "HIGH" | "MEDIUM" | "LOW";
  recommendation: string;
}

export interface CrossReferenceValidation {
  synthesisDate: string;
  documentsReviewed: {
    trackA: number;
    trackB: number;
    total: number;
  };
  corroboratedFindings: CorroboratedFinding[];
  contradictoryFindings: ContradictoryFinding[];
  corroboratedMethodology: string[];
  methodologyGaps: MethodologyGap[];
  confidenceAssessment: {
    domain: string;
    confidence: "HIGH" | "MEDIUM" | "LOW";
    basis: string;
  }[];
}

// ==========================================
// MASTER INDEX TYPES (s2)
// ==========================================

export interface DocumentReference {
  docId: string;
  title: string;
  type: "Research" | "Documentation";
  keyTopics: string[];
  policyRelevance: string;
}

export interface CategoryCoverage {
  category: string;
  frameworkSections: string;
  trackAFiles: number;
  trackBFiles: number;
  coverageRating: "COMPREHENSIVE" | "MODERATE" | "WEAK" | "CRITICAL_GAP";
}

export interface IntelligenceGap {
  gap: string;
  category: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  impact: string;
  remediationEffort: string;
  priority: string;
}

export interface MasterIndex {
  synthesisDate: string;
  totalDocuments: {
    trackA: number;
    trackB: number;
    total: number;
  };
  categories: CategoryCoverage[];
  intelligenceGaps: IntelligenceGap[];
  policyRelevanceMatrix: {
    strategyElement: string;
    primaryDocuments: string[];
    secondaryDocuments: string[];
  }[];
}

// ==========================================
// QUALITY VALIDATION TYPES (s3)
// ==========================================

export interface DocumentQuality {
  document: string;
  credibility: "High" | "Medium" | "Low";
  freshness: "High" | "Medium" | "Low";
  completeness: "High" | "Medium" | "Low";
  uncertainty: boolean;
  compliance: boolean;
  score: "HIGH" | "MEDIUM" | "LOW" | "FAIL";
}

export interface QualityValidation {
  synthesisDate: string;
  scope: {
    trackA: number;
    trackB: number;
    total: number;
  };
  overallAssessment: "EXEMPLARY" | "GOOD" | "ADEQUATE" | "POOR";
  passRate: number;
  trackASummary: {
    high: number;
    medium: number;
    low: number;
    fail: number;
    total: number;
  };
  trackBSummary: {
    high: number;
    medium: number;
    low: number;
    fail: number;
    total: number;
  };
  documentsRequiringRevision: string[];
  bestPracticesDocuments: {
    document: string;
    reason: string;
  }[];
}

// ==========================================
// GAP ANALYSIS TYPES (s4)
// ==========================================

export interface FrameworkSectionGap {
  section: string;
  description: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

export interface CategoryGapAnalysis {
  category: string;
  frameworkSections: number;
  trackAFiles: number;
  trackBFiles: number;
  coveragePercent: number;
  coverageRating: "STRONG" | "MODERATE" | "WEAK" | "CRITICAL_GAP";
  existingFiles: string[];
  missingSections: FrameworkSectionGap[];
}

export interface RemediationWave {
  wave: number;
  timeline: string;
  priority: "IMMEDIATE" | "SHORT-TERM" | "MEDIUM-TERM";
  items: {
    gap: string;
    file: string;
    category: string;
  }[];
}

export interface GapAnalysis {
  synthesisDate: string;
  corpusReviewed: {
    trackA: number;
    trackB: number;
    total: number;
  };
  frameworkSections: number;
  categoryGapAnalysis: CategoryGapAnalysis[];
  tier1Gaps: string[];
  tier2Gaps: string[];
  gapSeverityMatrix: {
    gap: string;
    category: string;
    severity: string;
    impact: string;
    remediationEffort: string;
    priority: string;
  }[];
  remediationWaves: RemediationWave[];
}

// ==========================================
// SYNTHESIS KPI DATA (Aggregated)
// ==========================================

export interface SynthesisDemographicData {
  scPopulation: {
    percentage: number;
    rank: string;
    subCastes: {
      name: string;
      percentage: string;
    }[];
  };
  jatSikh: {
    percentage: string;
    region: string;
  };
  obc: {
    percentage: number;
  };
  regionalSeats: {
    malwa: number;
    majha: number;
    doaba: number;
  };
  voterData: {
    totalPopulation: string;
    voters: string;
    firstTimeVoters: string;
    sexRatio: string;
    urbanPercentage: string;
  };
}

export interface SynthesisPartyData {
  bjp: {
    voteShare2019: number;
    voteShare2024: number;
    status: string;
    growth: string;
  };
  aap: {
    voteShare2022: number;
    voteShare2024: number;
    mandateStatus: string;
  };
  congress: {
    seats2022: number;
    seats2024: number;
    factions: string[];
    cmFace: string;
  };
  sad: {
    splitDate: string;
    factions: string[];
    seats2022: number;
  };
}

export interface SynthesisGovernanceData {
  youthUnemployment: {
    percentage: number;
    ageGroup: string;
    ruralPercentage: number;
  };
  groundwater: {
    overExploitedBlocks: number;
    totalBlocks: number;
    criticalDistricts: string;
  };
  farmerDebt: {
    averagePerHousehold: string;
    familiesInDebt: string;
    totalDebt: string;
  };
  drugCrisis: {
    users: string;
    overdoseDeaths2024: number;
    ndpsCases: string;
  };
}

export interface SynthesisIntelligenceSummary {
  crossReference: CrossReferenceValidation;
  masterIndex: MasterIndex;
  qualityValidation: QualityValidation;
  gapAnalysis: GapAnalysis;
  demographicData: SynthesisDemographicData;
  partyData: SynthesisPartyData;
  governanceData: SynthesisGovernanceData;
}

// ==========================================
// SYNTHESIS QUALITY METRICS
// ==========================================

export interface SynthesisQualityMetrics {
  totalDocuments: number;
  highQualityDocuments: number;
  mediumQualityDocuments: number;
  lowQualityDocuments: number;
  passRate: number;
  trackACoverage: number;
  trackBCoverage: number;
  criticalGaps: number;
  highPriorityGaps: number;
}

// ==========================================
// KEY METRICS FROM SYNTHESIS
// ==========================================

export interface KeySynthesisMetric {
  id: string;
  category: string;
  metric: string;
  value: string | number;
  source: string;
  trend?: "up" | "down" | "stable";
  status?: "CORROBORATED" | "PARTIAL" | "GAP";
}

export const SYNTHESIS_KEY_METRICS: KeySynthesisMetric[] = [
  // Demographics
  { id: "DEM-001", category: "Demographics", metric: "SC Population", value: "~32%", source: "s1/a1,b1", status: "CORROBORATED" },
  { id: "DEM-002", category: "Demographics", metric: "Jat Sikh Population", value: "20-25%", source: "s1/a2,b5", status: "CORROBORATED" },
  { id: "DEM-003", category: "Demographics", metric: "OBC Population", value: "~31%", source: "s1/a4,b25", status: "CORROBORATED" },
  { id: "DEM-004", category: "Demographics", metric: "Malwa Seats", value: "69", source: "s1/a2,a6,b5", status: "CORROBORATED" },
  { id: "DEM-005", category: "Demographics", metric: "Total Voters", value: "2.14 Cr", source: "s2/A1", status: "CORROBORATED" },

  // Party Positioning
  { id: "PART-001", category: "Party", metric: "BJP Vote Share Growth", value: "9.63% → 18.56%", source: "s1/a11,b16", trend: "up", status: "CORROBORATED" },
  { id: "PART-002", category: "Party", metric: "AAP Vote Collapse", value: "42% → 26%", source: "s1/a13,b16", trend: "down", status: "PARTIAL" },
  { id: "PART-003", category: "Party", metric: "SAD Split", value: "August 2025", source: "s1/a11", status: "CORROBORATED" },
  { id: "PART-004", category: "Party", metric: "Congress Factions", value: "3 (Warring/Bajwa/Channi)", source: "s1/a12,a13,b8,b16", status: "CORROBORATED" },

  // Governance Issues
  { id: "GOV-001", category: "Governance", metric: "Youth Unemployment", value: "18.8%", source: "s1/a5,a16,b5", status: "CORROBORATED" },
  { id: "GOV-002", category: "Governance", metric: "Groundwater Crisis", value: "115/153 blocks", source: "s1/a15,a19,b4,b13", status: "CORROBORATED" },
  { id: "GOV-003", category: "Governance", metric: "Farmer Debt", value: "Rs 2.03L/household", source: "s1/a6,a16,b13", status: "CORROBORATED" },
  { id: "GOV-004", category: "Governance", metric: "Drug Users", value: "6.6 Million", source: "s1/a8,b13", status: "CORROBORATED" },

  // Quality Metrics
  { id: "QUAL-001", category: "Quality", metric: "Overall Pass Rate", value: "97%", source: "s3", status: "CORROBORATED" },
  { id: "QUAL-002", category: "Quality", metric: "HIGH Quality Documents", value: "65/67", source: "s3", status: "CORROBORATED" },

  // Gap Analysis
  { id: "GAP-001", category: "Gaps", metric: "Critical Gap Categories", value: "3", source: "s4", status: "CORROBORATED" },
  { id: "GAP-002", category: "Gaps", metric: "Weak Categories", value: "4", source: "s4", status: "CORROBORATED" },
];
