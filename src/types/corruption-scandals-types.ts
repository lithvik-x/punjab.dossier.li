// Corruption Scandals Types for Punjab 2027
// Derived from: research-M2/MP1-foundational/governance/corruption-scandals.md
// Research Date: 19 May 2026 | Data Currency: May 2022 - May 2026

// ==========================================
// MAJOR CORRUPTION CASES
// ==========================================

/**
 * Status of a corruption case
 */
export type CorruptionCaseStatus =
  | "arrested"
  | "bail_granted"
  | "resigned"
  | "dropped_from_cabinet"
  | "under_investigation"
  | "ongoing"
  | "charges_pending";

/**
 * Investigating agency
 */
export type InvestigatingAgency =
  | "Punjab Vigilance Bureau"
  | "Enforcement Directorate (ED)"
  | "Central Bureau of Investigation (CBI)"
  | "Punjab Anti-Corruption"
  | "CBI under PMLA";

/**
 * A single corruption case involving minister or MLA
 */
export interface CorruptionCase {
  id: string;
  accused: string;
  position: string;
  constituency?: string;
  caseType: string;
  date: string;
  allegation: string;
  amount?: string;
  amountInCrore?: number;
  agency: InvestigatingAgency;
  status: CorruptionCaseStatus;
  statusDetails: string;
  significance?: string;
}

/**
 * Summary of corruption cases
 */
export interface CorruptionCasesSummary {
  totalCases: number;
  ministersDropped: number;
  mlasArrested: number;
  servingMinistersArrested: number;
  casesByStatus: Record<CorruptionCaseStatus, number>;
  casesByAgency: Record<string, number>;
  recentCases: CorruptionCase[];
}

// ==========================================
// SECTOR-SPECIFIC CORRUPTION
// ==========================================

/**
 * Sand mining corruption data
 */
export interface SandMiningCorruption {
  promise: {
    annualRevenue: string;
    source: string;
  };
  reality: {
    actualRevenue: string;
    actualRevenueCrore: number;
    shortfallCrore: number;
    shortfallPercentage: number;
  };
  timeline: {
    date: string;
    event: string;
    source: string;
  }[];
  politicalStatements: {
    person: string;
    party: string;
    statement: string;
    date: string;
  }[];
}

/**
 * Liquor policy corruption data
 */
export interface LiquorPolicyCorruption {
  delhiSpillover: {
    amount: string;
    allegedLoss: string;
    implicated: string[];
  };
  punjabAllegations: {
    amount: string;
    source: string;
    cbiProbeStatus: string;
    chargesFiled: boolean;
  };
}

/**
 * Foodgrain transportation scam data
 */
export interface FoodgrainScam {
  totalAmount: string;
  amountCrore: number;
  period: string;
  edExpansion: {
    date: string;
    scope: string;
    agencies: string[];
  };
  congressAngle: {
    minister: string;
    caseStatus: string;
  };
}

/**
 * Change of Land Use (CLU) scam data
 */
export interface CLUScam {
  edRaids: {
    date: string;
    entities: string[];
  };
  amounts: {
    ichbsCollection: string;
    ichbsCollectionCrore: number;
    altusUndervaluation: string;
    altusUndervaluationCrore: number;
    cashSeized: string;
  };
  politicalLinks: {
    aapPunjabChief: string;
    description: string;
    cmOsdLink: string;
  };
  aapResponse: string;
}

/**
 * Sector-specific corruption combined
 */
export interface SectorCorruption {
  sandMining: SandMiningCorruption;
  liquorPolicy: LiquorPolicyCorruption;
  foodgrainTransportation: FoodgrainScam;
  changeOfLandUse: CLUScam;
}

// ==========================================
// CAG AUDIT FINDINGS
// ==========================================

/**
 * CAG Report on State Finances (March 2026)
 */
export interface CAGFinancials {
  revenueDeficit: {
    amount: string;
    amountCrore: number;
    percentageOfGSDP: number;
    target: number;
    variance: number;
  };
  fiscalDeficit: {
    amount: string;
    amountCrore: number;
    percentageOfGSDP: number;
    target: number;
    variance: number;
  };
  debtToGSDP: {
    ratio: number;
    ratioWithOffBudget: number;
    ranking: string;
    totalDebt: string;
    totalDebtLakhCrore: number;
  };
  revenueExpenditure: {
    amount: string;
    amountCrore: number;
    percentageOfGSDP: number;
    growthCAGR: number;
  };
  capitalExpenditure: {
    amount: string;
    amountCrore: number;
    percentageOfTotal: number;
    note: string;
  };
  committedExpenditure: {
    percentage: number;
    components: string[];
  };
  subsidies: {
    percentageOfRevenue: number;
    powerSubsidyPercentage: number;
    trend: string;
  };
  borrowingUse: string;
  cagVerdict: string;
}

/**
 * Earlier CAG findings (September 2025)
 */
export interface EarlierCAGFindings {
  borrowedFundsUsage: string;
  debtToGSDPRanking: string;
  debtTrapCategory: boolean;
  healthServicesNote: string;
}

// ==========================================
// VIGILANCE BUREAU CORRUPTION
// ==========================================

/**
 * CBI Raid on Punjab Vigilance Bureau
 */
export interface VigilanceBureauRaid {
  date: string;
  target: string;
  allegation: string;
  amount: {
    initialDemand: string;
    negotiated: string;
  };
  arrests: {
    count: number;
    description: string;
  };
  politicalSignificance: string;
}

// ==========================================
// ANTI-CORRUPTION NARRATIVE
// ==========================================

/**
 * Counter-narrative points for Congress campaign
 */
export interface AntiCorruptionNarrative {
  aapClaims: string[];
  counterPoints: string[];
  keyStatistics: {
    metric: string;
    value: string;
  }[];
}

/**
 * Complete anti-corruption assessment
 */
export interface CorruptionAssessment {
  narrative: AntiCorruptionNarrative;
  keyStats: CorruptionKeyStats;
  dataGaps: string[];
}

// ==========================================
// KEY STATISTICS
// ==========================================

/**
 * Key corruption statistics for dashboard
 */
export interface CorruptionKeyStats {
  ministersDropped: number;
  mlasArrested: number;
  servingMinistersArrested: number;
  sandMiningShortfall: string;
  debtToGSDP: string;
  cagAssessment: string;
  aapPunjabChiefNamed: boolean;
  vigilanceBureauRaided: boolean;
}

// ==========================================
// COMPLETE CORRUPTION REPORT
// ==========================================

/**
 * Complete corruption scandals intelligence report
 */
export interface CorruptionScandalsReport {
  reportDate: string;
  source: string;
  dataCurrency: string;
  strategicSignificance: string;

  // Case data
  majorCases: CorruptionCase[];
  casesSummary: CorruptionCasesSummary;

  // Sector data
  sectorCorruption: SectorCorruption;

  // CAG data
  cagFinancials: CAGFinancials;
  earlierCAGFindings: EarlierCAGFindings;

  // Bureau corruption
  vigilanceBureauRaid: VigilanceBureauRaid;

  // Assessment
  assessment: CorruptionAssessment;

  // Gaps
  gapsRequiringResearch: string[];
}
