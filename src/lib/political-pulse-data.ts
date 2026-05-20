// Political Pulse Tracking Data
// Derived from: g72-punjab-monthly-political-pulse-tracking-protocol.md

import type {
  PulseWave,
  TrackedKPI,
  WaveCost,
  PulseWaveReport,
} from "@/types/political-pulse-types";

// ==========================================
// TRACKED KPIs
// ==========================================

export const TRACKED_KPIS: TrackedKPI[] = [
  { number: 1, name: "Congress Vote Share Estimate", measurement: "% respondents naming Congress, after undecided allocation" },
  { number: 2, name: "AAP Vote Share Estimate", measurement: "% respondents naming AAP" },
  { number: 3, name: "BJP Vote Share Estimate", measurement: "% respondents naming BJP (in BJP-contested seats)" },
  { number: 4, name: "SAD Vote Share Estimate", measurement: "% respondents naming SAD (in SAD-contested seats)" },
  { number: 5, name: "Top 3 Issues by Salience", measurement: "Ranked list of issues from rotating block" },
  { number: 6, name: "Congress Leader Approval Rating", measurement: "% approving of Congress Punjab President, net of disapproving" },
  { number: 7, name: "AAP Leader Approval Rating", measurement: "% approving of Bhagwant Mann, net of disapproving" },
  { number: 8, name: "Intended Turnout Rate", measurement: "% saying absolutely certain or very likely to vote" },
  { number: 9, name: "Congress Swing Voter Index", measurement: "% of 2022 non-Congress voters now considering Congress" },
  { number: 10, name: "Regional Confidence Score", measurement: "Congress vote share estimate by Malwa/Majha/Doaba" },
];

// ==========================================
// SAMPLE DESIGN
// ==========================================

export const SAMPLE_DESIGN = {
  respondentsPerAC: 500,
  totalStatewide: 58500,
  marginOfError: {
    statewide: "±1.5%",
    regional: "±3.0%",
    acLevel: "±5.0%",
  },
  stratification: [
    { dimension: "Region", categories: ["Malwa", "Majha", "Doaba"], targetShare: "Malwa 59%, Majha 21%, Doaba 20%" },
    { dimension: "Gender", categories: ["Male", "Female"], targetShare: "48:52" },
    { dimension: "Age", categories: ["18-25", "26-35", "36-50", "50+"], targetShare: "25%, 28%, 27%, 20%" },
    { dimension: "Caste", categories: ["Jat Sikh", "Valmiki/SC", "OBC", "Others"], targetShare: "35%, 25%, 10%, 30%" },
  ],
};

// ==========================================
// SURVEY MODE CONFIGURATION
// ==========================================

export const SURVEY_MODE_CONFIG = [
  {
    mode: "Phone (IVR + Live)" as const,
    share: 0.40,
    respondents: 23400,
    advantages: "Urban respondents, younger voters, speed",
    challenges: "Landline decline in rural areas",
  },
  {
    mode: "WhatsApp Structured" as const,
    share: 0.35,
    respondents: 20475,
    advantages: "Jat Sikh and middle-class respondents, high response rates",
    challenges: "Excludes non-WhatsApp users",
  },
  {
    mode: "Booth Agent F2F" as const,
    share: 0.25,
    respondents: 14625,
    advantages: "Rural, older, SC voters—hardest to reach segments",
    challenges: "Slowest, requires training",
  },
];

// ==========================================
// WAVE COST BREAKDOWN
// ==========================================

export const WAVE_COSTS: WaveCost[] = [
  { component: "Agency setup", wave1: 450000, wave2To9: 0 },
  { component: "Phone survey", wave1: 1053000, wave2To9: 1053000 },
  { component: "WhatsApp survey", wave1: 511875, wave2To9: 511875 },
  { component: "Booth agent field work", wave1: 950625, wave2To9: 950625 },
  { component: "Data processing", wave1: 200000, wave2To9: 150000 },
  { component: "Report design", wave1: 75000, wave2To9: 50000 },
  { component: "Translator/QA", wave1: 100000, wave2To9: 50000 },
];

export const TOTAL_WAVE_COST = {
  wave1: 3340500,
  waves2to9: 2715500,
  total9Waves: 29953070,
};

// ==========================================
// SHIFT SIGNIFICANCE THRESHOLDS
// ==========================================

export const SHIFT_SIGNIFICANCE = [
  { magnitude: "±1-2%", oneWaveSignificance: "Likely noise", consecutiveWavesRequired: 3 },
  { magnitude: "±2-4%", oneWaveSignificance: "Probable signal", consecutiveWavesRequired: 2 },
  { magnitude: "±4%+", oneWaveSignificance: "Strong signal", consecutiveWavesRequired: 1 },
];

// ==========================================
// TRAFFIC LIGHT THRESHOLDS
// ==========================================

export const TRAFFIC_LIGHT_THRESHOLDS = {
  congressVoteShare: { green: 35, amber: 30, red: 25 },
  aapVoteShare: { green: 40, amber: 35, red: 30 },
  turnout: { green: 70, amber: 65, red: 60 },
  netApproval: { green: 20, amber: 10, red: 0 },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get KPI by number
 */
export function getKPIByNumber(number: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10): TrackedKPI | undefined {
  return TRACKED_KPIS.find(k => k.number === number);
}

/**
 * Get wave cost breakdown
 */
export function getWaveCostBreakdown(waveNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9): number {
  if (waveNumber === 1) return TOTAL_WAVE_COST.wave1;
  return TOTAL_WAVE_COST.waves2to9;
}

/**
 * Calculate total 9-wave cost
 */
export function getTotal9WaveCost(): number {
  return TOTAL_WAVE_COST.total9Waves;
}

/**
 * Get traffic light status for a metric
 */
export function getTrafficLight(
  metric: string,
  value: number
): "Green" | "Amber" | "Red" {
  const thresholds = TRAFFIC_LIGHT_THRESHOLDS[metric as keyof typeof TRAFFIC_LIGHT_THRESHOLDS];
  if (!thresholds) return "Amber";

  if (value >= thresholds.green) return "Green";
  if (value >= thresholds.amber) return "Amber";
  return "Red";
}

/**
 * Determine shift significance
 */
export function getShiftSignificance(
  magnitude: number
): { oneWaveSignificance: string; consecutiveWavesRequired: number } {
  const absMagnitude = Math.abs(magnitude);

  if (absMagnitude >= 4) return { oneWaveSignificance: "Strong signal", consecutiveWavesRequired: 1 };
  if (absMagnitude >= 2) return { oneWaveSignificance: "Probable signal", consecutiveWavesRequired: 2 };
  return { oneWaveSignificance: "Likely noise", consecutiveWavesRequired: 3 };
}

/**
 * Get survey mode by name
 */
export function getSurveyMode(name: "Phone (IVR + Live)" | "WhatsApp Structured" | "Booth Agent F2F") {
  return SURVEY_MODE_CONFIG.find(m => m.mode === name);
}
