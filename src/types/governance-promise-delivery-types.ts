// Governance - Promise Delivery Gap Analysis Types for Punjab 2017-2022
// Derived from: research-M2/MP1-foundational/governance/promise-delivery-gap.md
// Research Date: 2026-05-20 | Data Currency: 2017-2022

// ==========================================
// METADATA
// ==========================================

export interface PromiseDeliveryMetadata {
  reportDate: string;
  megaPillar: string;
  domain: string;
  taskId: string;
  status: string;
  source: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
}

// ==========================================
// EDUCATION METRICS
// ==========================================

export interface EducationMetrics {
  npgiRanking: {
    year: string;
    rank: number;
    note: string;
  };
  nasPerformance: {
    year: string;
    status: string;
    note: string;
  };
  infantMortalityRate: {
    nfhs4: number; // per 1,000 live births
    nfhs5: number;
    nationalAverage: number;
  };
  lifeExpectancy: {
    punjab: number;
    national: number;
    period: string;
  };
}

// ==========================================
// JOBS & EMPLOYMENT
// ==========================================

export interface JobsData {
  unemployedPersons: {
    q1_2017: number; // in lakhs
    q4_2021: number;
    change: string;
  };
  youthUnemployment: {
    q1_2017: string;
    q4_2021: string;
  };
  unemploymentRate: {
    congressTenure: number;
    nationalRate: number;
    trend: string;
  };
  verdict: "CATASTROPHIC FAILURE" | "FAILURE" | "PARTIAL" | "SUCCESS";
}

// ==========================================
// DRUG METRICS
// ==========================================

export interface DrugMetrics {
  ndpsCases: {
    2016: number;
    2017: number;
    2019: number;
    2020: number;
  };
  heroinRecovered: {
    2019: number; // kg
    2020: number; // kg
  };
  verdict: "CATASTROPHIC FAILURE" | "FAILURE" | "PARTIAL" | "SUCCESS";
}

// ==========================================
// CRIME STATISTICS
// ==========================================

export interface CrimeStatistics {
  totalIPCCases: {
    2017: number;
    2020: number;
    changePercent: number;
  };
  murderTrend: {
    baseline: string;
    change: string;
  };
  crimesAgainstWomen: {
    2019: number;
    2020: number;
    changePercent: number;
  };
  drugCases: {
    2017: number;
    2020: number;
    note: string;
  };
}

// ==========================================
// ECONOMIC INDICATORS
// ==========================================

export interface EconomicIndicators {
  gsdpGrowth: {
    congressTenure: number;
    previousSAD_BJP: number;
    nationalAverage: number;
  };
  perCapitaIncomeGrowth: {
    congress: number;
    previousSAD_BJP: number;
    period: string;
  };
  easeOfBusiness: {
    2017: number;
    2019: number;
  };
}

// ==========================================
// ELECTORAL DATA
// ==========================================

export interface ElectoralData {
  congressSeats: {
    2017: number;
    2022: number;
    change: number;
  };
  voteShare: {
    2017: number;
    2022: number;
    changePercent: number;
  };
  regionalSeats: {
    region: string;
    2017: number;
    2022: number;
    change: number;
  }[];
  cabinetMinistersLost: number;
  notableLosses: {
    name: string;
    seat: string;
    margin?: number;
    note: string;
  }[];
}

// ==========================================
// LEADERSHIP TIMELINE
// ==========================================

export interface LeadershipEntry {
  name: string;
  role: string;
  period: string;
  keyActions: string[];
  assessment: string;
}

export interface LeadershipTimeline {
  leaders: LeadershipEntry[];
  transitionNote: string;
}

// ==========================================
// AAP COMPARISON
// ==========================================

export interface AAPClaimData {
  aapClaim: string;
  reality: string;
  attackVector: string;
}

export interface ComparativeAccountability {
  dimension: string;
  congress2017_2022: string;
  aap2022_2027: string;
}

export interface AAPComparison {
  claims: AAPClaimData[];
  comparativeFramework: ComparativeAccountability[];
  keyInsight: string;
}

// ==========================================
// PROMISE VERDICTS
// ==========================================

export type PromiseVerdict = "CATASTROPHIC FAILURE" | "FAILURE" | "PARTIAL" | "SUCCESS";

export interface PromiseCategory {
  name: string;
  verdict: PromiseVerdict;
  keyData: Record<string, string | number>;
  notes: string[];
}

// ==========================================
// CONSTITUENCY ANALYSIS
// ==========================================

export interface ConstituencyAsset {
  type: string;
  examples: string;
  whyAsset: string;
}

export interface ConstituencyLiability {
  constituency: string;
  whyLiability: string;
  mitigation: string;
}

export interface HighRiskSeats {
  category: string;
  reasons: string[];
}

export interface OpportunitySeats {
  category: string;
  reasons: string[];
}

export interface ConstituencyAnalysis {
  assets: ConstituencyAsset[];
  liabilities: ConstituencyLiability[];
  highRiskSeats: HighRiskSeats[];
  opportunitySeats: OpportunitySeats[];
}

// ==========================================
// STRATEGIC RECOMMENDATIONS
// ==========================================

export interface StrategicRecommendation {
  number: number;
  title: string;
  description: string;
  canSay: string[];
  mustNotSay: string[];
}

export interface PositioningFramework {
  recommended: string;
  whenToAttackAAP: string;
  whenToReferenceCongress: string;
}

// ==========================================
// SOURCES
// ==========================================

export interface SourceCitation {
  id: number;
  title: string;
  source: string;
  date?: string;
  url?: string;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface PromiseDeliveryKPI {
  // Metadata
  metadata: PromiseDeliveryMetadata;

  // Core verdict
  coreVerdict: {
    promiseDeliveryRate: string;
    summary: string;
  };

  // Actual achievements
  education: EducationMetrics;
  womenChildWelfare: {
    crimesAgainstWomenChange: number;
    note: string;
  };
  fiscalManagement: {
    gstImprovement: string;
    taxPosture: string;
  };

  // Promise failures
  jobs: JobsData;
  drugs: DrugMetrics;
  farmerWelfare: {
    verdict: PromiseVerdict;
    note: string;
  };
  mafiaRaj: {
    verdict: PromiseVerdict;
    note: string;
  };
  sacrilegeCases: {
    verdict: PromiseVerdict;
    note: string;
  };

  // Governance failures
  crimeStatistics: CrimeStatistics;
  economicIndicators: EconomicIndicators;
  leadershipTimeline: LeadershipTimeline;

  // Electoral impact
  electoralData: ElectoralData;

  // AAP comparison
  aapComparison: AAPComparison;

  // Constituency analysis
  constituencyAnalysis: ConstituencyAnalysis;

  // Strategic recommendations
  strategicRecommendations: StrategicRecommendation[];
  positioningFramework: PositioningFramework;

  // Sources
  sources: SourceCitation[];
}
