// Population Data Utility Functions
// Derived from: research-M2/MP1-foundational/demographics/population-structure.md

import type { PopulationStructureData } from "@/types/population-types";

/**
 * Get severity level for data quality
 */
export function getDataQualitySeverity(quality: "HIGH" | "MEDIUM" | "LOW"): "success" | "warning" | "danger" {
  switch (quality) {
    case "HIGH":
      return "success";
    case "MEDIUM":
      return "warning";
    case "LOW":
      return "danger";
  }
}

/**
 * Get intensity badge variant for election implications
 */
export function getIntensityVariant(intensity: "HIGH" | "MEDIUM" | "LOW"): "danger" | "warning" | "info" {
  switch (intensity) {
    case "HIGH":
      return "danger";
    case "MEDIUM":
      return "warning";
    case "LOW":
      return "info";
  }
}

/**
 * Format large numbers with Indian notation
 */
export function formatIndianNumber(num: number): string {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(2) + " crore";
  } else if (num >= 100000) {
    return (num / 100000).toFixed(2) + " lakh";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2) + " thousand";
  }
  return num.toString();
}

/**
 * Get population density category
 */
export function getPopulationDensityCategory(density: number): string {
  if (density < 400) return "Low density";
  if (density < 600) return "Medium density";
  return "High density";
}

/**
 * Calculate dependency ratio interpretation
 */
export function getDependencyRatioInterpretation(
  young: number,
  old: number,
  total: number
): { status: string; severity: "success" | "warning" | "danger" } {
  if (total < 50) {
    return { status: "Low dependency - favorable", severity: "success" };
  } else if (total < 70) {
    return { status: "Moderate dependency", severity: "warning" };
  }
  return { status: "High dependency - aging population", severity: "danger" };
}

/**
 * Get sex ratio interpretation
 */
export function getSexRatioInterpretation(
  ratio: number,
  nationalAverage?: number
): { status: string; severity: "success" | "warning" | "danger" } {
  if (nationalAverage && ratio < nationalAverage) {
    return {
      status: `Below national average (${nationalAverage})`,
      severity: "warning",
    };
  }
  if (ratio >= 950) {
    return { status: "Excellent - significantly above 950", severity: "success" };
  } else if (ratio >= 900) {
    return { status: "Good", severity: "success" };
  } else if (ratio >= 850) {
    return { status: "Moderate", severity: "warning" };
  }
  return { status: "Below average - concerning", severity: "danger" };
}

/**
 * Get youth unemployment severity
 */
export function getYouthUnemploymentSeverity(rate: number): {
  status: string;
  severity: "success" | "warning" | "danger";
} {
  if (rate < 10) {
    return { status: "Low - manageable", severity: "success" };
  } else if (rate < 15) {
    return { status: "Moderate - concerning", severity: "warning" };
  }
  return {
    status: `Critical - ${rate}% is politically explosive`,
    severity: "danger",
  };
}

/**
 * Get female unemployment severity
 */
export function getFemaleUnemploymentSeverity(rate: number): {
  status: string;
  severity: "success" | "warning" | "danger";
} {
  if (rate < 10) {
    return { status: "Low", severity: "success" };
  } else if (rate < 18) {
    return { status: "Moderate", severity: "warning" };
  }
  return {
    status: `Critical - ${rate}% nearly double male rate`,
    severity: "danger",
  };
}

/**
 * Get turnout change interpretation
 */
export function getTurnoutChangeInterpretation(
  change: number
): { status: string; severity: "success" | "warning" | "danger" } {
  if (change >= 0) {
    return { status: "Turnout increased", severity: "success" };
  } else if (change >= -3) {
    return { status: "Slight decline", severity: "warning" };
  }
  return {
    status: `Significant decline (${change} pp) - voter disenchantment signal`,
    severity: "danger",
  };
}

/**
 * Get diaspora concentration level
 */
export function getDiasporaConcentrationLevel(percent: number): {
  status: string;
  severity: "success" | "warning" | "danger";
} {
  if (percent >= 20) {
    return { status: "Very high concentration", severity: "danger" };
  } else if (percent >= 10) {
    return { status: "High concentration", severity: "warning" };
  }
  return { status: "Moderate concentration", severity: "success" };
}

/**
 * Get Sikh population trend interpretation
 */
export function getSikhPopulationTrend(percent: number): {
  status: string;
  severity: "success" | "warning" | "danger";
} {
  if (percent >= 58) {
    return { status: "Majority maintained", severity: "success" };
  } else if (percent >= 55) {
    return { status: "Declining but majority", severity: "warning" };
  }
  return {
    status: `${percent}% - approaching minority threshold`,
    severity: "danger",
  };
}

/**
 * Get fertility rate interpretation
 */
export function getFertilityRateInterpretation(rate: number): {
  status: string;
  severity: "success" | "warning" | "danger";
} {
  if (rate >= 2.1) {
    return { status: "Above replacement level", severity: "success" };
  } else if (rate >= 1.5) {
    return { status: "Below replacement - demographic transition", severity: "warning" };
  }
  return {
    status: `Very low (${rate}) - aging population concern`,
    severity: "danger",
  };
}

/**
 * Get urban vs rural political weight
 */
export function getUrbanRuralPoliticalWeight(
  urbanPercent: number,
  totalSeats: number
): { urbanSeats: number; ruralSeats: number; description: string } {
  // Urban seats are typically 20-30% of total in Punjab
  const urbanSeats = Math.round((urbanPercent / 100) * totalSeats * 0.8);
  const ruralSeats = totalSeats - urbanSeats;
  return {
    urbanSeats,
    ruralSeats,
    description: `Urban voters represent approximately ${urbanSeats} seats worth of political influence`,
  };
}

/**
 * Calculate effective voting population
 */
export function calculateEffectiveVoters(
  registeredVoters: number,
  turnoutPercent: number
): number {
  return Math.round(registeredVoters * (turnoutPercent / 100));
}

/**
 * Get dalit concentration category
 */
export function getDalitConcentrationCategory(percent: number): {
  status: string;
  color: string;
} {
  if (percent >= 42) {
    return { status: "Very high concentration (>42%)", color: "text-red-600" };
  } else if (percent >= 35) {
    return { status: "High concentration (35-42%)", color: "text-orange-600" };
  } else if (percent >= 30) {
    return { status: "Above average (30-35%)", color: "text-yellow-600" };
  }
  return { status: "Average or below (<30%)", color: "text-green-600" };
}

/**
 * Get region color for visualizations
 */
export function getRegionColor(region: "Doaba" | "Majha" | "Malwa"): string {
  switch (region) {
    case "Doaba":
      return "#8B5CF6"; // purple
    case "Majha":
      return "#3B82F6"; // blue
    case "Malwa":
      return "#22C55E"; // green
  }
}

/**
 * Sort districts by sex ratio (highest to lowest)
 */
export function sortBySexRatio<T extends { sexRatio: number }>(districts: T[]): T[] {
  return [...districts].sort((a, b) => b.sexRatio - a.sexRatio);
}

/**
 * Filter districts by region
 */
export function filterByRegion<T extends { region?: string }>(
  items: T[],
  region: "Doaba" | "Majha" | "Malwa"
): T[] {
  return items.filter((item) => item.region === region);
}

/**
 * Get NRI household status
 */
export function getNRIHouseholdStatus(percent: number): {
  status: string;
  severity: "success" | "warning" | "danger";
} {
  if (percent >= 20) {
    return { status: "Very high diaspora influence", severity: "danger" };
  } else if (percent >= 10) {
    return { status: "Significant diaspora influence", severity: "warning" };
  }
  return { status: "Moderate diaspora presence", severity: "success" };
}

/**
 * Get emigration reversal severity
 */
export function getEmigrationReversalSeverity(
  passportDrop: number,
  ieltsDrop: number
): { status: string; severity: "success" | "warning" | "danger" } {
  if (passportDrop >= 50 || ieltsDrop >= 60) {
    return {
      status: "Severe reversal - pipeline drying up",
      severity: "danger",
    };
  } else if (passportDrop >= 30 || ieltsDrop >= 40) {
    return {
      status: "Significant reversal",
      severity: "warning",
    };
  }
  return { status: "Moderate slowdown", severity: "success" };
}

/**
 * Get congress strategy priority
 */
export function getStrategyPriorityLabel(priority: number): {
  label: string;
  color: string;
} {
  switch (priority) {
    case 1:
      return { label: "HIGHEST PRIORITY", color: "text-red-600" };
    case 2:
      return { label: "HIGH PRIORITY", color: "text-orange-600" };
    case 3:
      return { label: "MEDIUM-HIGH", color: "text-yellow-600" };
    default:
      return { label: `PRIORITY ${priority}`, color: "text-blue-600" };
  }
}

/**
 * Summary statistics for population data
 */
export function getPopulationSummary(data: PopulationStructureData) {
  const pop = data.populationOverview;
  const rel = data.religiousComposition;
  const sex = data.sexRatio;
  const age = data.ageStructure;
  const econ = data.economicStructure;
  const youth = data.youthUnemployment;
  const elec = data.electoralData;

  return {
    population2026: pop.projections.projectedPopulationMillion,
    growthRate: `${pop.projections.annualGrowthRate2026}%`,
    sikhPercent: `${rel.census2011.sikh}%`,
    hinduPercent: `${rel.census2011.hindu}%`,
    dalitPercent: `${rel.dalitSC.populationPercent}%`,
    sexRatio: sex.census2011,
    sexRatioAtBirth: sex.sexRatioAtBirth2025,
    workingAge: `${age.census2011.workingAge.percent}%`,
    youthUnemployment: `${youth.urbanYouthRate[1].unemploymentRate}%`,
    femaleYouthUnemployment: `${youth.genderBreakdown[0].unemploymentRate}%`,
    agricultureEmployment: `${econ.agricultureAllied}%`,
    serviceEmployment: `${econ.tertiary}%`,
    voterTurnout: `${elec.voterTurnout2022}%`,
    turnoutChange: `${elec.turnoutChangeFrom2017 > 0 ? "+" : ""}${elec.turnoutChangeFrom2017}pp`,
    diasporaSize: data.nriDiaspora.totalEstimated,
  };
}
