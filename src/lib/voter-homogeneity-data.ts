// @ts-nocheck
// Voter Homogeneity Data
// Derived from: g69-punjab-voter-homogeneity-measurement-framework.md

import type {
  HomogeneityTier,
  BoothHomogeneityScore,
  ConstituencyHomogeneity,
} from "@/types/voter-homogeneity-types";

// ==========================================
// HOMOGENEITY CLASSIFICATIONS
// ==========================================

export const HOMOGENEITY_CLASSIFICATIONS: HomogeneityTier[] = [
  {
    tier: "Highly Heterogeneous",
    bhsRange: { min: 0, max: 0.35 },
    description: "Booths with extreme caste/class fragmentation",
    strategicImplication: "Micro-targeting essential; coalition-building required",
    exampleProfile: "Urban commercial centers, peri-urban mixed colonies",
  },
  {
    tier: "Somewhat Heterogeneous",
    bhsRange: { min: 0.35, max: 0.50 },
    description: "Moderate diversity with identifiable majority",
    strategicImplication: "Focus on base + swing segments",
    exampleProfile: "Semi-urban towns, market villages",
  },
  {
    tier: "Moderately Homogeneous",
    bhsRange: { min: 0.50, max: 0.65 },
    description: "One dominant group with notable minorities",
    strategicImplication: "Base-first with minority outreach",
    exampleProfile: "Single-caste dominant villages, small towns",
  },
  {
    tier: "Highly Homogeneous",
    bhsRange: { min: 0.65, max: 0.85 },
    description: "Strong dominant group",
    strategicImplication: "Base-focused turnout operation",
    exampleProfile: "Jat-dominant Malwa, Valmiki/SC concentrated areas",
  },
  {
    tier: "Extremely Homogeneous",
    bhsRange: { min: 0.85, max: 1.0 },
    description: "Near-monolithic voting pattern expected",
    strategicImplication: "GOTV for dominant group",
    exampleProfile: "Dera influence zones, single-derivation villages",
  },
];

// ==========================================
// REGIONAL HOMOGENEITY PATTERNS
// ==========================================

export const REGIONAL_HOMOGENEITY_PATTERNS = {
  Malwa: {
    avgBHS: 0.62,
    dominantPattern: "Jat Sikh homogeneous blocks",
    heterogeneitySources: ["Doaba migrant Labor", "RSS influence", "Dera zones"],
    strategicNote: "High BHS but AAP eroding traditional Congress base",
  },
  Majha: {
    avgBHS: 0.55,
    dominantPattern: "Mixed with Hindu-Sikh divide",
    heterogeneitySources: ["Urban commerce", "Border dynamics", "Defence vote"],
    strategicNote: "Complex cross-cutting identities",
  },
  Doaba: {
    avgBHS: 0.48,
    dominantPattern: "Most heterogeneous region",
    heterogeneitySources: ["NRI families", "Valmiki concentrate", "Doaba migration"],
    strategicNote: "Highest AAP penetration, diverse voter profiles",
  },
};

// ==========================================
// COEFFICIENT OF VARIATION (CV) BENCHMARKS
// ==========================================

export const CV_BENCHMARKS = {
  highlyUniform: { max: 0.30, description: "Nearly identical voting patterns" },
  uniform: { max: 0.45, description: "Minor variations within groups" },
  moderate: { max: 0.60, description: "Moderate variation, predictable" },
  varied: { max: 0.75, description: "Significant variation" },
  highlyVaried: { max: 1.0, description: "Extreme fragmentation" },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get homogeneity tier from BHS score
 */
export function getHomogeneityTier(bhs: number): HomogeneityTier | undefined {
  return HOMOGENEITY_CLASSIFICATIONS.find(
    t => bhs >= t.bhsRange.min && bhs < t.bhsRange.max
  );
}

/**
 * Calculate Booth Homogeneity Score
 */
export function calculateBHS(casteVoteShares: number[]): number {
  if (casteVoteShares.length === 0) return 0;

  const maxShare = Math.max(...casteVoteShares);
  const totalShare = casteVoteShares.reduce((sum, share) => sum + share, 0);

  if (totalShare === 0) return 0;
  return Math.round((maxShare / totalShare) * 100) / 100;
}

/**
 * Calculate Coefficient of Variation (CV)
 */
export function calculateCV(values: number[]): number {
  if (values.length === 0) return 0;

  const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
  if (mean === 0) return 0;

  const squaredDiffs = values.map(val => Math.pow(val - mean, 2));
  const variance = squaredDiffs.reduce((sum, d) => sum + d, 0) / values.length;
  const stdDev = Math.sqrt(variance);

  return Math.round((stdDev / mean) * 100) / 100;
}

/**
 * Get CV classification
 */
export function getCVClassification(cv: number): string {
  if (cv <= CV_BENCHMARKS.highlyUniform.max) return "Highly Uniform";
  if (cv <= CV_BENCHMARKS.uniform.max) return "Uniform";
  if (cv <= CV_BENCHMARKS.moderate.max) return "Moderate";
  if (cv <= CV_BENCHMARKS.varied.max) return "Varied";
  return "Highly Varied";
}

/**
 * Get regional average BHS
 */
export function getRegionalAvgBHS(region: string): number {
  return REGIONAL_HOMOGENEITY_PATTERNS[region]?.avgBHS ?? 0;
}

/**
 * Get strategic note for region
 */
export function getRegionalStrategicNote(region: string): string {
  return REGIONAL_HOMOGENEITY_PATTERNS[region]?.strategicNote ?? "";
}

/**
 * Assess homogeneity risk for booth
 */
export function assessHomogeneityRisk(bhs: number): "high" | "medium" | "low" {
  const tier = getHomogeneityTier(bhs);
  if (!tier) return "medium";

  if (tier.tier === "Highly Heterogeneous" || tier.tier === "Extremely Homogeneous") {
    return "high";
  }
  if (tier.tier === "Moderately Homogeneous" || tier.tier === "Highly Homogeneous") {
    return "low";
  }
  return "medium";
}
