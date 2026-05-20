// Vote Share Prediction Model Data - Punjab 2027
// Derived from: research-M2/MP10-predictive-outcomes/models/vote-share-prediction.md
// Documentation Date: 19 May 2026 | Task ID: T-MP10-MODL-001

import type {
  VoteSharePredictionMetadata,
  ModelComponent,
  RegionalVariation,
  VerificationItem,
  PartyType,
  FeatureCategory,
  UpdateFrequency,
  PartyPrediction,
  ConstituencyPrediction,
  StateLevelProjection,
} from "@/types/vote-share-prediction-types";

// ==========================================
// METADATA
// ==========================================

export const metadata: VoteSharePredictionMetadata = {
  documentationDate: "19 May 2026",
  source: "Pretrained knowledge (political science methodology, ML ensemble methods, Indian election modeling)",
  confidence: "HIGH",
  taskId: "T-MP10-MODL-001",
  dependencies: "T-MP8-ANLY-002 (Predictive Modeling Suite)",
  dependencyStatus: "MET",
};

// ==========================================
// MODEL COMPONENTS
// ==========================================

export const MODEL_COMPONENTS: ModelComponent[] = [
  {
    name: "Random Forest",
    algorithm: "Random Forest (500 trees)",
    trees: 500,
    strength: "Non-linear interactions, robust to outliers",
    weightRange: "25-35%",
    weightPercentage: [25, 35],
  },
  {
    name: "XGBoost",
    algorithm: "XGBoost (gradient boosting)",
    boosting: "gradient",
    strength: "Best on structured tabular data, feature importance",
    weightRange: "35-45%",
    weightPercentage: [35, 45],
  },
  {
    name: "Bayesian Hierarchical",
    algorithm: "Bayesian Hierarchical",
    hierarchical: true,
    strength: "Uncertainty quantification, borrows strength across constituencies",
    weightRange: "20-30%",
    weightPercentage: [20, 30],
  },
  {
    name: "Meta-Learner",
    algorithm: "Ridge Regression (stacking)",
    metaLearner: "Ridge Regression",
    strength: "Optimal combination of A, B, C",
    weightRange: "N/A",
  },
];

// ==========================================
// FEATURE CATEGORIES (Ordered by Weight)
// ==========================================

export const FEATURE_CATEGORIES: { category: FeatureCategory; weight: string; description: string }[] = [
  {
    category: "historical_vote_share",
    weight: "highest",
    description: "Constituency-level vote shares from 2012-2024, derived trend/swing features",
  },
  {
    category: "demographic_composition",
    weight: "high",
    description: "Caste proportions, religion ratio, urbanization, age demographics",
  },
  {
    category: "anti_incumbency_index",
    weight: "high",
    description: "Composite index: years of rule, historical swing, CM rating, MLA-specific",
  },
  {
    category: "candidate_strength",
    weight: "medium-high",
    description: "Incumbency, previous performance, criminal cases, assets, local prominence",
  },
  {
    category: "campaign_intensity",
    weight: "medium",
    description: "Rallies, spending, ground presence, digital campaign intensity",
  },
  {
    category: "local_issue_severity",
    weight: "medium",
    description: "Top 3 local issues, Congress alignment score, issue salience weighting",
  },
  {
    category: "survey_vote_intention",
    weight: "medium",
    description: "Raw vote intention, sample size, margin of error, recency decay",
  },
  {
    category: "social_media_sentiment",
    weight: "medium-low",
    description: "30-day rolling sentiment across platforms, volume, trend",
  },
  {
    category: "economic_indicators",
    weight: "medium-low",
    description: "Unemployment, inflation, agricultural distress, government delivery",
  },
  {
    category: "transfer_alliance_dynamics",
    weight: "conditional",
    description: "Vote transfer efficiency (activated only when alliances confirmed)",
  },
];

// ==========================================
// KEY PUNJAB ISSUES
// ==========================================

export const KEY_PUNJAB_ISSUES = [
  "Drug menace",
  "Farmer distress",
  "Unemployment",
  "Sacrilege legacy",
  "Sand mining corruption",
  "Smart School scheme",
  "Power tariff",
  "SYL canal",
] as const;

// ==========================================
// REGIONAL VARIATIONS
// ==========================================

export const REGIONAL_VARIATIONS: RegionalVariation[] = [
  {
    region: "malwa",
    seats: 69,
    keyDynamics: [
      "Agrarian issues",
      "Jat Sikh concentration",
      "Strongest anti-incumbency",
      "AAP 2022 stronghold",
      "Highest predictive uncertainty",
    ],
    volatility: "highest",
  },
  {
    region: "majha",
    seats: 25,
    keyDynamics: [
      "Border belt",
      "Religious sentiment",
      "SAD traditional base",
      "Congress competitive",
      "Lower volatility",
    ],
    volatility: "lower",
  },
  {
    region: "doaba",
    seats: 23,
    keyDynamics: [
      "Highest SC concentration",
      "Hindu urban",
      "BSP factor strongest",
      "NRI influence",
      "Caste arithmetic dominant",
    ],
    volatility: "lower",
  },
];

// ==========================================
// REGIONAL SEAT COUNTS
// ==========================================

export const REGIONAL_SEAT_COUNTS: Record<string, number> = {
  malwa: 69,
  majha: 25, // Note: Some sources say 27, but MD specifies 25
  doaba: 23,
};

export const TOTAL_ASSEMBLY_SEATS = 117;
export const MAJORITY_THRESHOLD = 59;
export const SC_RESERVED_SEATS = 34;

// ==========================================
// PARTIES
// ==========================================

export const PARTIES: PartyType[] = ["Congress", "AAP", "SAD+", "BJP+", "Others"];

export const PARTY_ALLIANCES: Record<string, string[]> = {
  "SAD+": ["SAD", "BJBP"],
  "BJP+": ["BJP"],
};

// ==========================================
// VERIFICATION ITEMS
// ==========================================

export const VERIFICATION_ITEMS: VerificationItem[] = [
  {
    item: "ECI constituency-level vote share data for 2012, 2017 Assembly Elections",
    status: "VERIFICATION_NEEDED",
  },
  {
    item: "Punjab by-election results 2022-May 2026 for out-of-sample validation",
    status: "VERIFICATION_NEEDED",
  },
  {
    item: "District-level PLFS unemployment data for Punjab",
    status: "VERIFICATION_NEEDED",
  },
  {
    item: "Survey house reliability ratings for Punjab polling organizations",
    status: "VERIFICATION_NEEDED",
  },
  {
    item: "Alliance formations for 2027",
    status: "VERIFICATION_NEEDED",
  },
  {
    item: "Updated caste composition estimates at constituency level",
    status: "VERIFICATION_NEEDED",
  },
  {
    item: "Back-test results: validate target benchmarks achievable",
    status: "VERIFICATION_NEEDED",
  },
];

// ==========================================
// UPDATE FREQUENCY PROTOCOLS
// ==========================================

export const UPDATE_FREQUENCIES: Record<UpdateFrequency, string> = {
  monthly: "Monthly standard update",
  survey_triggered_48h: "Within 48 hours of new survey wave",
  campaign_weekly: "Weekly during last 90 days (Nov 2026 - Feb 2027)",
  event_triggered_24h: "Within 24 hours of major events (alliance announcements, candidate nominations, major scandals)",
};

// ==========================================
// TARGET BENCHMARKS
// ==========================================

export const TARGET_BENCHMARKS = {
  voteShareMAE: {
    target: "< 5%",
    rationale: "Achievable with ensemble on Indian election data",
  },
  seatCountMAE: {
    target: "< 8 seats",
    rationale: "Acceptable for strategic planning",
  },
  directionalAccuracy: {
    target: "> 80%",
    rationale: "Minimum for actionable seat-level strategy",
  },
  regionalSeatMAE: {
    target: "< 4 seats",
    rationale: "Sound regional strategy",
  },
};

// ==========================================
// MONTE CARLO SIMULATION
// ==========================================

export const MONTE_CARLO_CONFIG = {
  iterations: 10000,
  confidenceIntervals: ["95% CI", "80% CI", "50% CI"],
};

// ==========================================
// CROSS-VALIDATION CONFIG
// ==========================================

export const CROSS_VALIDATION_CONFIG = {
  primary: {
    method: "Temporal CV",
    trainTest1: "pre-2017 → 2017",
    trainTest2: "pre-2022 → 2022",
  },
  secondary: {
    method: "k-fold",
    k: 5,
    stratification: "region" as const,
  },
};

// ==========================================
// ANTI-INCUMBENCY PATTERN
// ==========================================

export const PUNJAB_ANTIINCUMBENCY = {
  averageSwingAgainstIncumbent: 15, // percentage points, >15% since 2002
  aap2022Victory: {
    seats: 92,
    against: "Congress",
    factor: "anti-incumbency",
  },
  congress2017Victory: {
    seats: 77,
    against: "SAD-BJP",
    factor: "anti-incumbency",
  },
  multiplierActive: true,
  nonLinearAccelerationTerm: "last_12_months_before_election",
};

// ==========================================
// CASTE COMPOSITION (State-level estimates)
// ==========================================

export const CASTE_COMPOSITION = {
  sc: 32, // percentage statewide
  jatSikh: "significant in Malwa",
  nonJatSikh: "distributed across regions",
  hinduGeneralOBC: "urban concentration",
  hinduSC: "concentrated in rural areas",
};

// ==========================================
// ELECTION YEARS
// ==========================================

export const ELECTION_YEARS = {
  assembly: [2012, 2017, 2022] as const,
  general: [2014, 2019, 2024] as const,
  upcoming: 2027,
};

// ==========================================
// TRAINING DATA SOURCES
// ==========================================

export const TRAINING_DATA_SOURCES = [
  { source: "ECI Election Results", period: "2012, 2017, 2022", granularity: "Constituency", status: "VERIFICATION_NEEDED" },
  { source: "General Election Results", period: "2014, 2019, 2024", granularity: "Constituency", status: "VERIFICATION_NEEDED" },
  { source: "Census 2011", period: "2011", granularity: "Block", status: "AVAILABLE" },
  { source: "PLFS Unemployment", period: "2017-2026", granularity: "District", status: "VERIFICATION_NEEDED" },
  { source: "Survey Data", period: "Rolling", granularity: "Constituency", status: "To_be_generated" },
];

// ==========================================
// SOCIAL MEDIA PLATFORMS
// ==========================================

export const SOCIAL_MEDIA_PLATFORMS = [
  "Twitter/X",
  "Facebook",
  "Instagram",
  "YouTube",
  "WhatsApp",
] as const;

export const SOCIAL_MEDIA_DECAY_DAYS = 30;

// ==========================================
// HIERARCHICAL HELPERS
// ==========================================

/**
 * Creates an empty party prediction array with zeros
 */
export function createEmptyPartyPredictions(): PartyPrediction[] {
  return PARTIES.map((party) => ({
    party,
    predictedVoteShare: 0,
    ciLower: 0,
    ciUpper: 0,
    winProbability: 0,
  }));
}

/**
 * Creates an empty constituency prediction template
 */
export function createEmptyConstituencyPrediction(
  constituencyId: string,
  region: "malwa" | "majha" | "doaba"
): ConstituencyPrediction {
  return {
    constituencyId,
    region,
    predictions: createEmptyPartyPredictions(),
  };
}

/**
 * Creates an empty state-level projection
 */
export function createEmptyStateProjection(): StateLevelProjection {
  const seats: Record<PartyType, number> = {
    Congress: 0,
    AAP: 0,
    "SAD+": 0,
    "BJP+": 0,
    Others: 0,
  };
  const ranges: Record<PartyType, { min: number; max: number }> = {
    Congress: { min: 0, max: 0 },
    AAP: { min: 0, max: 0 },
    "SAD+": { min: 0, max: 0 },
    "BJP+": { min: 0, max: 0 },
    Others: { min: 0, max: 0 },
  };
  return {
    predictedSeats: seats,
    seatRanges: ranges,
    aggregatedFrom: "constituency-level Monte Carlo",
  };
}

/**
 * Determines the expected winner from predictions
 */
export function getExpectedWinner(predictions: PartyPrediction[]): PartyType | undefined {
  let maxProbability = 0;
  let winner: PartyType | undefined;
  for (const pred of predictions) {
    if (pred.winProbability > maxProbability) {
      maxProbability = pred.winProbability;
      winner = pred.party;
    }
  }
  return winner;
}

/**
 * Checks if a seat is competitive (within 3-5% of winning)
 */
export function isCompetitiveSeat(predictions: PartyPrediction[], threshold = 5): boolean {
  const sorted = [...predictions].sort((a, b) => b.winProbability - a.winProbability);
  if (sorted.length < 2) return false;
  const top = sorted[0];
  const second = sorted[1];
  // A seat is competitive if leader has < threshold probability or gap is small
  return top.winProbability < (100 - threshold) || (top.winProbability - second.winProbability) < threshold * 10;
}

/**
 * Calculates confidence interval width
 */
export function calculateCIWidth(prediction: PartyPrediction): number {
  return prediction.ciUpper - prediction.ciLower;
}

/**
 * Gets update frequency description
 */
export function getUpdateFrequencyDescription(frequency: UpdateFrequency): string {
  return UPDATE_FREQUENCIES[frequency];
}

/**
 * Gets region by seat count
 */
export function getRegionBySeats(seats: number): "malwa" | "majha" | "doaba" | undefined {
  if (seats === 69) return "malwa";
  if (seats === 25) return "majha";
  if (seats === 23) return "doaba";
  return undefined;
}

/**
 * Validates prediction sum (vote shares should be roughly 100%)
 */
export function validatePredictionSum(predictions: PartyPrediction[], tolerance = 5): boolean {
  const sum = predictions.reduce((acc, p) => acc + p.predictedVoteShare, 0);
  return Math.abs(sum - 100) <= tolerance;
}

/**
 * Gets party abbreviation
 */
export function getPartyAbbreviation(party: PartyType): string {
  const abbrevs: Record<PartyType, string> = {
    Congress: "INC",
    AAP: "AAP",
    "SAD+": "SAD+",
    "BJP+": "BJP+",
    Others: "OTH",
  };
  return abbrevs[party];
}

// ==========================================
// EXPORTS
// ==========================================

export const voteSharePredictionData = {
  metadata,
  modelComponents: MODEL_COMPONENTS,
  featureCategories: FEATURE_CATEGORIES,
  keyPunjabIssues: KEY_PUNJAB_ISSUES,
  regionalVariations: REGIONAL_VARIATIONS,
  regionalSeatCounts: REGIONAL_SEAT_COUNTS,
  totalAssemblySeats: TOTAL_ASSEMBLY_SEATS,
  majorityThreshold: MAJORITY_THRESHOLD,
  scReservedSeats: SC_RESERVED_SEATS,
  parties: PARTIES,
  verificationItems: VERIFICATION_ITEMS,
  updateFrequencies: UPDATE_FREQUENCIES,
  targetBenchmarks: TARGET_BENCHMARKS,
  monteCarloConfig: MONTE_CARLO_CONFIG,
  crossValidationConfig: CROSS_VALIDATION_CONFIG,
  antiIncumbency: PUNJAB_ANTIINCUMBENCY,
  casteComposition: CASTE_COMPOSITION,
  electionYears: ELECTION_YEARS,
  trainingDataSources: TRAINING_DATA_SOURCES,
  socialMediaPlatforms: SOCIAL_MEDIA_PLATFORMS,
  socialMediaDecayDays: SOCIAL_MEDIA_DECAY_DAYS,
};

export default voteSharePredictionData;
