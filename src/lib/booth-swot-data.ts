// Booth SWOT Data
// Derived from: g70-punjab-booth-swot-analysis-protocol.md

import type {
  BoothSWOTReport,
  ViabilityScoreCalculation,
  VisitFrequency,
  EscalationCriteria,
} from "@/types/booth-swot-types";

// ==========================================
// VIABILITY INTERPRETATION
// ==========================================

export const VIABILITY_INTERPRETATION: Record<string, { range: string; investment: string; candidatePriority: string }> = {
  "4.0-5.0": { range: "Strong Congress booth", investment: "Maintain + protect", candidatePriority: "Low (occasional)" },
  "3.0-3.9": { range: "Contested booth", investment: "Intensive engagement", candidatePriority: "High (at least 2 visits)" },
  "2.0-2.9": { range: "Weak booth", investment: "Limited investment", candidatePriority: "Medium (1 strategic visit)" },
  "1.0-1.9": { range: "Structural loss booth", investment: "Suppression focus", candidatePriority: "Avoid (don't amplify rival)" },
};

// ==========================================
// VISIT FREQUENCY STANDARDS
// ==========================================

export const VISIT_FREQUENCY_STANDARDS: VisitFrequency[] = [
  {
    priority: "High",
    voteShareRange: "55-65%",
    visitFrequency: "Bi-weekly",
    boothPresidentReport: "Monthly",
    wardCoordinatorVisit: "Every 2 months",
  },
  {
    priority: "Medium",
    voteShareRange: "40-55%",
    visitFrequency: "Monthly",
    boothPresidentReport: "Monthly",
    wardCoordinatorVisit: "Quarterly",
  },
  {
    priority: "Low",
    voteShareRange: "<40%",
    visitFrequency: "Quarterly",
    boothPresidentReport: "Quarterly",
    wardCoordinatorVisit: "Bi-annual",
  },
  {
    priority: "Crisis",
    voteShareRange: "Escalated",
    visitFrequency: "Weekly",
    boothPresidentReport: "Weekly",
    wardCoordinatorVisit: "Within 72 hours",
  },
];

// ==========================================
// ESCALATION CRITERIA
// ==========================================

export const ESCALATION_PROTOCOLS: EscalationCriteria[] = [
  {
    urgency: "CRISIS",
    timeline: "2-4 hours",
    responseOwner: "District President + Police Liaison",
    actionType: "Immediate security + ECI complaint",
  },
  {
    urgency: "URGENT",
    timeline: "24 hours",
    responseOwner: "District War Room + Legal Cell",
    actionType: "Documentation + legal preemptive filing",
  },
  {
    urgency: "HIGH",
    timeline: "48 hours",
    responseOwner: "AC Coordinator + Candidate",
    actionType: "Candidate visit, karyakarta surge",
  },
  {
    urgency: "STANDARD",
    timeline: "72 hours",
    responseOwner: "Ward Coordinator",
    actionType: "纳入竞选计划",
  },
];

// ==========================================
// SWOT SCORING GUIDE
// ==========================================

export const SWOT_SCORING_GUIDE = [
  {
    score: 5,
    strengthGuide: "Dominant (near-universal worker coverage, star leader)",
    weaknessGuide: "Severe (no workers, hostile location, 100% AAP penetration)",
    opportunityGuide: "Certain, high-impact (scheme rollout imminent, rival scandal breaking)",
    threatGuide: "Imminent, existential (booth capturing planned, candidate criminal threat)",
  },
  {
    score: 4,
    strengthGuide: "Strong (above-average worker density, good local support)",
    weaknessGuide: "Significant (major gaps, some AAP penetration, anti-incumbent sentiment)",
    opportunityGuide: "Probable, meaningful (likely within 60 days, moderate impact)",
    threatGuide: "Probable, damaging (likely rival wave, moderate criminal threat)",
  },
  {
    score: 3,
    strengthGuide: "Average (parity with rivals, adequate coverage)",
    weaknessGuide: "Moderate (manageable with effort, partial rival presence)",
    opportunityGuide: "Possible, limited (uncertain timing, limited scale)",
    threatGuide: "Possible, limited (some rival activity but contained)",
  },
  {
    score: 2,
    strengthGuide: "Below average (gaps in coverage, weaker than rivals)",
    weaknessGuide: "Concerning (requires significant resource allocation to fix)",
    opportunityGuide: "Unlikely (low probability, niche impact)",
    threatGuide: "Unlikely (minimal rival activity, manageable)",
  },
  {
    score: 1,
    strengthGuide: "Minimal (critical gaps, effectively no party presence)",
    weaknessGuide: "Critical (near-impossible to win without fundamental change)",
    opportunityGuide: "Rare (edge case, very niche)",
    threatGuide: "Minimal (no discernible threat)",
  },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Calculate viability score from SWOT elements
 */
export function calculateViabilityScore(
  sMean: number,
  wMean: number,
  oWeighted: number,
  tWeighted: number
): ViabilityScoreCalculation {
  const finalScore = sMean - wMean + oWeighted - tWeighted;
  const normalizedScore = Math.max(1, Math.min(5, finalScore));

  let interpretation = "";
  let campaignInvestment = "";
  let candidatePriority = "";

  if (normalizedScore >= 4.0) {
    interpretation = "Strong Congress booth";
    campaignInvestment = "Maintain + protect";
    candidatePriority = "Low (occasional)";
  } else if (normalizedScore >= 3.0) {
    interpretation = "Contested booth";
    campaignInvestment = "Intensive engagement";
    candidatePriority = "High (at least 2 visits)";
  } else if (normalizedScore >= 2.0) {
    interpretation = "Weak booth";
    campaignInvestment = "Limited investment";
    candidatePriority = "Medium (1 strategic visit)";
  } else {
    interpretation = "Structural loss booth";
    campaignInvestment = "Suppression focus";
    candidatePriority = "Avoid (don't amplify rival)";
  }

  return {
    sMean: Math.round(sMean * 100) / 100,
    wMean: Math.round(wMean * 100) / 100,
    oWeighted: Math.round(oWeighted * 100) / 100,
    tWeighted: Math.round(tWeighted * 100) / 100,
    finalScore: Math.round(normalizedScore * 100) / 100,
    interpretation,
    campaignInvestment,
    candidateVisitPriority: candidatePriority,
  };
}

/**
 * Get visit frequency by priority
 */
export function getVisitFrequency(priority: "High" | "Medium" | "Low" | "Crisis"): VisitFrequency | undefined {
  return VISIT_FREQUENCY_STANDARDS.find(v => v.priority === priority);
}

/**
 * Get escalation protocol by urgency
 */
export function getEscalationProtocol(urgency: "CRISIS" | "URGENT" | "HIGH" | "STANDARD"): EscalationCriteria | undefined {
  return ESCALATION_PROTOCOLS.find(e => e.urgency === urgency);
}

/**
 * Determine booth priority from vote share
 */
export function getBoothPriority(voteShare: number): "High" | "Medium" | "Low" | "Crisis" {
  if (voteShare >= 55) return "High";
  if (voteShare >= 40) return "Medium";
  if (voteShare >= 25) return "Low";
  return "Crisis";
}

/**
 * Get scoring guide for a specific score
 */
export function getScoringGuide(score: 1 | 2 | 3 | 4 | 5) {
  return SWOT_SCORING_GUIDE.find(g => g.score === score);
}

/**
 * Check if immediate action is required based on SWOT
 */
export function requiresImmediateAction(report: Partial<BoothSWOTReport>): boolean {
  if (!report.viabilityScore || report.viabilityScore < 2.0) return true;
  if (report.immediateActionRequired) return true;
  return false;
}
