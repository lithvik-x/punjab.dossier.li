// Turnout Prediction & Swing Scenario Analysis Data
// Derived from: research-M2/MP10-predictive-outcomes/models/turnout-swing-scenarios.md
// Research Date: 19 May 2026 | Status: FRAMEWORK

import type {
  TurnoutSwingMetadata,
  TurnoutFeatureCategories,
  HistoricalTurnoutData,
  RegionalTurnoutPattern,
  TurnoutImpactEntry,
  UniformSwingEntry,
  RegionalSwingRequirement,
  SegmentSwingEntry,
  TurnoutModulatedSwing,
  ScenarioMatrix,
  MostLikelyScenario,
  TippingPointVariable,
  AntiIncumbencyData,
  AntiIncumbencyStrengthIndex,
  VerificationNeed,
  ConstituencyTurnoutPrediction,
} from "@/types/turnout-swing-scenarios-types";

// ==========================================
// METADATA
// ==========================================

export const turnoutSwingMetadata: TurnoutSwingMetadata = {
  taskId: "T-MP10-MODL-003",
  megaPillar: "MP10 — Predictive Outcomes",
  documentationDate: "19 May 2026",
  source: "Pretrained knowledge (election modeling methodology, Punjab electoral data synthesis)",
  confidence: {
    methodology: "HIGH",
    punjabCoefficients: "MEDIUM",
    constituencyPredictions: "LOW",
  },
  dependencies: {
    voteSharePrediction: "MODL-001 (Vote Share Prediction — ready)",
    turnoutAnalysis: "HIST-005 (Turnout Analysis — complete)",
  },
};

// ==========================================
// FEATURE CATEGORIES
// ==========================================

export const turnoutFeatureCategories: TurnoutFeatureCategories = {
  historicalTurnout: {
    name: "Historical Turnout",
    keyVariables: "2012, 2017, 2022 Assembly turnout; 2019, 2024 LS turnout per AC",
    source: "ECI Form-20 data",
    weightSignificance: "HIGHEST",
  },
  contestCloseness: {
    name: "Contest Closeness",
    keyVariables: "Projected margin between top-2 candidates; closer contests drive higher turnout",
    source: "MODL-001 output",
    weightSignificance: "HIGH",
  },
  demographics: {
    name: "Demographics",
    keyVariables: "Age profile (youth % correlates negatively), urbanization % (urban = lower turnout), gender ratio",
    source: "Census 2011 + estimates",
    weightSignificance: "HIGH",
  },
  weatherForecast: {
    name: "Weather Forecast",
    keyVariables: "February fog/rain probability; severe weather depresses elderly/rural turnout",
    source: "IMD historical + forecast",
    weightSignificance: "MODERATE",
  },
  campaignIntensity: {
    name: "Campaign Intensity",
    keyVariables: "Star campaigner visits, ground volunteer density, ad spend per AC",
    source: "Campaign tracker",
    weightSignificance: "MODERATE",
  },
  voterRegistrationChanges: {
    name: "Voter Registration Changes",
    keyVariables: "Net additions/removals from rolls since last election; migration-driven deletions",
    source: "CEO Punjab",
    weightSignificance: "MODERATE",
  },
  electoralSalience: {
    name: "Electoral Salience",
    keyVariables: "High-profile contests, local issues generating mobilization, by-election proximity",
    source: "Media/survey data",
    weightSignificance: "LOW-MODERATE",
  },
};

// ==========================================
// HISTORICAL TURNOUT DATA
// ==========================================

export const historicalTurnoutData: HistoricalTurnoutData = {
  elections: [
    {
      election: 2012,
      turnout: 78.6,
      changeFromPrevious: 0.3,
      notes: "SAD-BJP re-elected",
    },
    {
      election: 2017,
      turnout: 77.4,
      changeFromPrevious: -1.2,
      notes: "Congress wave (77 seats)",
    },
    {
      election: 2022,
      turnout: 72.15,
      changeFromPrevious: -5.25,
      notes: "AAP wave (92 seats)",
    },
  ],
  trendNote: "Steady decline of ~2.2 pp per election cycle over 10 years",
  projected2027Baseline: "68-70% if trend continues (strong anti-incumbency can reverse)",
};

// ==========================================
// REGIONAL PATTERNS
// ==========================================

export const regionalTurnoutPatterns: RegionalTurnoutPattern[] = [
  {
    region: "Malwa",
    seatCount: 69,
    typicalRange2022: "75-83%",
    characteristic: "Highest; rural agrarian mobilization; farmer union engagement",
  },
  {
    region: "Majha",
    seatCount: 25,
    typicalRange2022: "65-73%",
    characteristic: "Moderate; border belt; SAD/Congress competitive",
  },
  {
    region: "Doaba",
    seatCount: 23,
    typicalRange2022: "62-70%",
    characteristic: "Lower; NRI outmigration depletes physically present voters",
  },
  {
    region: "Urban",
    seatCount: 0, // distributed across regions
    typicalRange2022: "53-65%",
    characteristic: "Lowest; SAS Nagar was 53% in 2022",
  },
  {
    region: "Rural",
    seatCount: 0, // distributed across regions
    typicalRange2022: "72-83%",
    characteristic: "Highest; social networks drive mobilization",
  },
];

// ==========================================
// TURNOUT PREDICTIONS (SAMPLE CONSTITUENCIES)
// ==========================================

export const sampleConstituencyTurnoutPredictions: ConstituencyTurnoutPrediction[] = [
  {
    constituencyId: "AC-001",
    baselineTurnout: 72.5,
    lowScenario: 67.0,
    highScenario: 77.0,
    keyDriver: "Contest closeness",
  },
  {
    constituencyId: "AC-002",
    baselineTurnout: 64.0,
    lowScenario: 58.5,
    highScenario: 69.0,
    keyDriver: "Urban depression",
  },
];

// ==========================================
// TURNOUT IMPACT ANALYSIS
// ==========================================

export const turnoutImpactAnalysis: TurnoutImpactEntry[] = [
  {
    scenario: "Uniform increase (+3 pp)",
    mechanism: "All groups mobilize equally",
    congressImpact: "NEUTRAL",
    details: "More voters = marginal seats benefit challenger",
  },
  {
    scenario: "Urban turnout surge",
    mechanism: "Congress-leaning urban middle class re-engages",
    congressImpact: "HIGH POSITIVE",
    details: "Recovers Ludhiana, Amritsar, Jalandhar, SAS Nagar",
  },
  {
    scenario: "Rural Malwa turnout surge",
    mechanism: "AAP's core base re-mobilizes",
    congressImpact: "NEGATIVE",
    details: "Reinforces AAP stronghold unless swing is concurrent",
  },
  {
    scenario: "Women turnout recovery (to 2017 levels: 78%)",
    mechanism: "Women historically favor Congress; 2022 drop to 71.9% hurt Congress disproportionately",
    congressImpact: "HIGH POSITIVE",
    details: "Estimated +3-4 lakh votes statewide, worth 5-8 seats",
  },
  {
    scenario: "Youth turnout increase",
    mechanism: "Unpredictable; Punjab youth split between AAP, Congress, and disengagement",
    congressImpact: "MODERATE POSITIVE",
    details: "If anti-incumbency narrative resonates",
  },
  {
    scenario: "Elderly turnout decline",
    mechanism: "Weather-sensitive voters; AAP welfare (free power) may help retain elderly",
    congressImpact: "SLIGHT NEGATIVE",
  },
];

// ==========================================
// HISTORICAL SWING DATA
// ==========================================

export const historicalSwingData = {
  transitions: [
    {
      fromYear: 2007,
      toYear: 2012,
      congressSwing: -4.5,
      winnerSwing: 0,
      magnitude: "Moderate incumbency advantage",
    },
    {
      fromYear: 2012,
      toYear: 2017,
      congressSwing: 12.9,
      winnerSwing: 40,
      magnitude: "Strong anti-incumbency",
    },
    {
      fromYear: 2017,
      toYear: 2022,
      congressSwing: -15.5,
      winnerSwing: 59,
      magnitude: "MASSIVE wave — +18.3 pp AAP swing",
    },
  ],
  keyInsight:
    "The 2017→2022 transition was historically anomalous — a +18.3 pp swing to AAP. This was Punjab's largest single-election swing in post-reorganization history. The swing BACK need not be equally large.",
  realisticSwingBackRange: "Historical anti-incumbency swings in Punjab (excluding 2022 anomaly) range from 8-15 pp against the incumbent. Given AAP started from 42% (an inflated wave number), even a 10-12 pp swing against AAP brings them to 30-32%, which in a 4-cornered contest translates to 30-40 seats.",
};

// ==========================================
// UNIFORM SWING TABLE
// ==========================================

export const uniformSwingTable: UniformSwingEntry[] = [
  {
    swingPercent: 0,
    incVotePercent: 23,
    aapVotePercent: 42,
    estIncSeats: "18",
    probabilityAssessment: "Baseline only — 2024 LS proved this is obsolete",
  },
  {
    swingPercent: 3,
    incVotePercent: 26,
    aapVotePercent: 39,
    estIncSeats: "25-30",
    probabilityAssessment: "Already exceeded by 2024 LS data",
  },
  {
    swingPercent: 5,
    incVotePercent: 28,
    aapVotePercent: 37,
    estIncSeats: "30-38",
    probabilityAssessment: "Below target",
  },
  {
    swingPercent: 8,
    incVotePercent: 31,
    aapVotePercent: 34,
    estIncSeats: "45-55",
    probabilityAssessment: "Competitive but may fall short",
  },
  {
    swingPercent: 10,
    incVotePercent: 33,
    aapVotePercent: 32,
    estIncSeats: "55-65",
    probabilityAssessment: "Crosses 59 threshold",
  },
  {
    swingPercent: 12,
    incVotePercent: 35,
    aapVotePercent: 30,
    estIncSeats: "65-75",
    probabilityAssessment: "Comfortable majority",
  },
  {
    swingPercent: 15,
    incVotePercent: 38,
    aapVotePercent: 27,
    estIncSeats: "75-85",
    probabilityAssessment: "Landslide — replicates 2017 scale",
  },
];

export const uniformSwingThresholdForMajority = 10; // +10 pp uniform swing needed

// ==========================================
// REGIONAL SWING REQUIREMENTS
// ==========================================

export const regionalSwingRequirements: RegionalSwingRequirement[] = [
  {
    region: "Malwa",
    seatCount: 69,
    estimated2022IncVotePercent: 18,
    ls2024IncLeadSegments: 15,
    requiredSeats: "25-30",
    requiredRegionalSwing: "+10-14 pp",
    achievability: "HARDEST",
  },
  {
    region: "Majha",
    seatCount: 25,
    estimated2022IncVotePercent: 28,
    ls2024IncLeadSegments: 10,
    requiredSeats: "15-18",
    requiredRegionalSwing: "+6-8 pp",
    achievability: "ACHIEVABLE",
  },
  {
    region: "Doaba",
    seatCount: 23,
    estimated2022IncVotePercent: 26,
    ls2024IncLeadSegments: 10,
    requiredSeats: "14-17",
    requiredRegionalSwing: "+5-7 pp",
    achievability: "ACHIEVABLE",
  },
];

// ==========================================
// SEGMENT-SPECIFIC SWING
// ==========================================

export const segmentSwingEntries: SegmentSwingEntry[] = [
  {
    segment: "Jat Sikh farmers",
    sizePercentElectorate: "20-25%",
    swingEvidence: "Significant erosion visible in Malwa LS results",
    projected2027Swing: "12-18 pp",
    notes: "Most volatile segment; farmer distress is driver",
    volatility: "HIGH",
  },
  {
    segment: "SC/Dalit",
    sizePercentElectorate: "~32%",
    swingEvidence: "Partial shift AAP→INC visible in Doaba LS leads",
    projected2027Swing: "8-12 pp",
    notes: "BSP collapse frees Dalit votes; Congress must consolidate",
    volatility: "MODERATE",
  },
  {
    segment: "Youth (18-30)",
    sizePercentElectorate: "22-25%",
    swingEvidence: "High AAP erosion; turnout depression",
    projected2027Swing: "10-15 pp (if mobilized)",
    notes: "Migration depletes physical presence; digital engagement key",
    volatility: "HIGH",
  },
  {
    segment: "Urban Hindu",
    sizePercentElectorate: "12-15%",
    swingEvidence: "Shift to BJP; Congress competitive",
    projected2027Swing: "5-8 pp",
    notes: "BJP rising here; Congress gains limited by BJP absorption",
    volatility: "MODERATE",
  },
  {
    segment: "Women",
    sizePercentElectorate: "~49%",
    swingEvidence: "Sharp 2022 turnout drop (78%→72%); historically pro-Congress",
    projected2027Swing: "10-14 pp (if turnout recovers)",
    notes: "Highest upside segment if mobilized",
    volatility: "HIGH",
  },
  {
    segment: "Sikh urban/semi-urban",
    sizePercentElectorate: "8-10%",
    swingEvidence: "Mixed; AAP scheme beneficiaries vs. sacrilege sentiment",
    projected2027Swing: "6-10 pp",
    notes: "Candidate-dependent",
    volatility: "MODERATE",
  },
  {
    segment: "Rural non-Jat",
    sizePercentElectorate: "10-12%",
    swingEvidence: "Moderate shift",
    projected2027Swing: "8-12 pp",
    notes: "OBC/artisan communities; local candidate matters",
    volatility: "MODERATE",
  },
];

// ==========================================
// TURNOUT-MODULATED SWING
// ==========================================

export const turnoutModulatedSwing: TurnoutModulatedSwing[] = [
  {
    turnoutScenario: {
      scenario: "low",
      min: 65,
      max: 68,
      description: "Low turnout (65-68%)",
    },
    antiIncumbencyAmplifier: "Weakened — disengagement cuts both ways",
    netSwingEffectOnIncSeats: "-3 to -5 seats vs. baseline",
  },
  {
    turnoutScenario: {
      scenario: "baseline",
      min: 70,
      max: 72,
      description: "Baseline turnout (70-72%)",
    },
    antiIncumbencyAmplifier: "Neutral",
    netSwingEffectOnIncSeats: "Baseline projection",
  },
  {
    turnoutScenario: {
      scenario: "high",
      min: 74,
      max: 78,
      description: "High turnout (74-78%)",
    },
    antiIncumbencyAmplifier: "Strengthened — energized opposition base turns out",
    netSwingEffectOnIncSeats: "+4 to +8 seats vs. baseline",
  },
];

// ==========================================
// SCENARIO MATRIX
// ==========================================

export const scenarioMatrix: ScenarioMatrix = {
  modestSwing: {
    turnoutScenario: "low",
    congressSeatRange: { low: 25, high: 30 },
  },
  moderateSwing: {
    turnoutScenario: "low",
    congressSeatRange: { low: 40, high: 48 },
  },
  fullAntiIncumbency: {
    turnoutScenario: "low",
    congressSeatRange: { low: 50, high: 58 },
  },
  strongWave: {
    turnoutScenario: "low",
    congressSeatRange: { low: 60, high: 70 },
  },
  aapCollapse: {
    turnoutScenario: "low",
    congressSeatRange: { low: 70, high: 80 },
  },
};

// Extended matrix with all turnout scenarios
export const fullScenarioMatrix = {
  modestSwing: {
    lowTurnout: { low: 25, high: 30 },
    baselineTurnout: { low: 28, high: 33 },
    highTurnout: { low: 30, high: 36 },
  },
  moderateSwing: {
    lowTurnout: { low: 40, high: 48 },
    baselineTurnout: { low: 45, high: 53 },
    highTurnout: { low: 48, high: 56 },
  },
  fullAntiIncumbency: {
    lowTurnout: { low: 50, high: 58 },
    baselineTurnout: { low: 55, high: 65 },
    highTurnout: { low: 58, high: 68 },
  },
  strongWave: {
    lowTurnout: { low: 60, high: 70 },
    baselineTurnout: { low: 65, high: 75 },
    highTurnout: { low: 68, high: 78 },
  },
  aapCollapse: {
    lowTurnout: { low: 70, high: 80 },
    baselineTurnout: { low: 75, high: 85 },
    highTurnout: { low: 78, high: 88 },
  },
};

// ==========================================
// MOST LIKELY SCENARIO
// ==========================================

export const mostLikelyScenario: MostLikelyScenario = {
  mostLikelySwing: "+8 to +10 pp AAP→INC (with BJP absorbing some of AAP's losses)",
  mostLikelyTurnout: "69-72% (continuing gradual decline, partially offset by anti-incumbency energy)",
  mostLikelyOutcome: "48-65 Congress seats",
  probability59Seats: "55-65%",
  probability70Seats: "25-35%",
};

// ==========================================
// TIPPING POINT VARIABLES
// ==========================================

export const tippingPointVariables: TippingPointVariable[] = [
  {
    variable: "BJP+SAD re-alliance",
    proCongressShift: "-5 to -8 INC seats (squeezes Congress)",
    proAapShift: "Helps AAP by reducing fragmentation",
    direction: "PRO-AAP",
  },
  {
    variable: "Major AAP scandal",
    proCongressShift: "+5 to +8 INC seats",
    proAapShift: "Collapses AAP credibility",
    direction: "PRO-CONGRESS",
  },
  {
    variable: "Strong Congress CM face announced",
    proCongressShift: "+3 to +5 INC seats",
    proAapShift: "Neutral",
    direction: "PRO-CONGRESS",
  },
  {
    variable: "Severe winter weather on polling day",
    proCongressShift: "-3 to -5 INC seats (elderly/rural stay home)",
    proAapShift: "Neutral",
    direction: "NEUTRAL",
  },
  {
    variable: "Women-targeted Congress mobilization success",
    proCongressShift: "+4 to +8 INC seats",
    proAapShift: "—",
    direction: "PRO-CONGRESS",
  },
  {
    variable: "Farmer union endorsement of Congress",
    proCongressShift: "+5 to +10 INC seats in Malwa",
    proAapShift: "—",
    direction: "PRO-CONGRESS",
  },
  {
    variable: "Major communal/security incident",
    proCongressShift: "Unpredictable; could benefit strong-on-security narrative",
    proAapShift: "Depends on AAP response",
    direction: "UNPREDICTABLE",
  },
];

// ==========================================
// ANTI-INCUMBENCY DATA
// ==========================================

export const antiIncumbencyData: AntiIncumbencyData = {
  entries: [
    {
      transition: "1992→1997",
      incumbent: "Congress (87)",
      seatsWon: 87,
      seatsLostNextElection: 58,
      percentLoss: 67,
    },
    {
      transition: "1997→2002",
      incumbent: "SAD-BJP (75)",
      seatsWon: 75,
      seatsLostNextElection: 18,
      percentLoss: 24,
    },
    {
      transition: "2002→2007",
      incumbent: "Congress (62)",
      seatsWon: 62,
      seatsLostNextElection: 15,
      percentLoss: 24,
    },
    {
      transition: "2007→2012",
      incumbent: "SAD-BJP (67)",
      seatsWon: 67,
      seatsLostNextElection: 14,
      percentLoss: 21,
    },
    {
      transition: "2012→2017",
      incumbent: "SAD-BJP (68)",
      seatsWon: 68,
      seatsLostNextElection: 53,
      percentLoss: 78,
    },
    {
      transition: "2017→2022",
      incumbent: "Congress (77)",
      seatsWon: 77,
      seatsLostNextElection: 59,
      percentLoss: 77,
    },
  ],
  averageSeatLoss: 36,
  averagePercentLoss: 49,
};

export const antiIncumbencyStrengthIndex: AntiIncumbencyStrengthIndex = {
  description: "Punjab's anti-incumbency is among the strongest in India",
  contributingFactors: [
    "No government has won a third consecutive term in Punjab's post-reorganization history",
    "Average anti-incumbency vote swing: 12-18 pp against the incumbent party",
    "2024 LS confirmation: AAP lost segment leads in 59 of 92 seats it won in 2022 — a 64% erosion in just 2 years",
    "Structural causes: High political awareness, strong civil society (farmer unions, religious bodies), active media, competitive party system",
  ],
  keyStatistics: "Average seat loss: 36 seats (49% of incumbent's tally). AAP (92 seats) is historically vulnerable to losing 45-60 seats simply from Punjab's anti-incumbency cycle.",
};

// ==========================================
// VERIFICATION NEEDS
// ==========================================

export const verificationNeeds: VerificationNeed[] = [
  {
    dataPoint: "Constituency-level turnout for all 117 ACs (2012, 2017, 2022)",
    status: "PARTIAL",
    impactOnModel: "Cannot calibrate turnout model without this",
  },
  {
    dataPoint: "2024 LS assembly segment-wise leads (full 117 AC breakdown)",
    status: "PARTIAL",
    impactOnModel: "Essential for swing calibration at AC level (currently aggregate only: 37/33/23/9)",
  },
  {
    dataPoint: "November 2024 by-election results",
    status: "NOT COLLECTED",
    impactOnModel: "Important out-of-sample validation point",
  },
  {
    dataPoint: "2025 local body election results",
    status: "NOT COLLECTED",
    impactOnModel: "Proxy indicator for current swing trajectory",
  },
  {
    dataPoint: "Weather data for February polling dates (2012, 2017, 2022)",
    status: "NOT COLLECTED",
    impactOnModel: "Needed for weather-turnout correlation",
  },
  {
    dataPoint: "District-wise voter registration changes (2022-2026)",
    status: "NOT COLLECTED",
    impactOnModel: "Migration impact estimation",
  },
  {
    dataPoint: "Women's turnout by constituency (2022)",
    status: "NOT COLLECTED",
    impactOnModel: "Critical for segment-specific analysis",
  },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get seat projection based on swing magnitude and turnout scenario
 */
export function getSeatProjection(
  swingPp: number,
  turnoutScenario: "low" | "baseline" | "high"
): { low: number; high: number } {
  if (swingPp <= 5) {
    return turnoutScenario === "low"
      ? { low: 25, high: 30 }
      : turnoutScenario === "baseline"
        ? { low: 28, high: 33 }
        : { low: 30, high: 36 };
  }
  if (swingPp <= 8) {
    return turnoutScenario === "low"
      ? { low: 40, high: 48 }
      : turnoutScenario === "baseline"
        ? { low: 45, high: 53 }
        : { low: 48, high: 56 };
  }
  if (swingPp <= 10) {
    return turnoutScenario === "low"
      ? { low: 50, high: 58 }
      : turnoutScenario === "baseline"
        ? { low: 55, high: 65 }
        : { low: 58, high: 68 };
  }
  if (swingPp <= 12) {
    return turnoutScenario === "low"
      ? { low: 60, high: 70 }
      : turnoutScenario === "baseline"
        ? { low: 65, high: 75 }
        : { low: 68, high: 78 };
  }
  // swingPp > 12 (AAP collapse scenario)
  return turnoutScenario === "low"
    ? { low: 70, high: 80 }
    : turnoutScenario === "baseline"
      ? { low: 75, high: 85 }
      : { low: 78, high: 88 };
}

/**
 * Calculate probability of majority based on current trajectory
 */
export function getMajorityProbability(): {
  probability59Plus: string;
  probability70Plus: string;
} {
  return {
    probability59Plus: mostLikelyScenario.probability59Seats,
    probability70Plus: mostLikelyScenario.probability70Seats,
  };
}

/**
 * Get regional swing requirement summary
 */
export function getRegionalSwingSummary(): {
  malwa: { required: string; achievability: string };
  majha: { required: string; achievability: string };
  doaba: { required: string; achievability: string };
} {
  const malwa = regionalSwingRequirements.find((r) => r.region === "Malwa")!;
  const majha = regionalSwingRequirements.find((r) => r.region === "Majha")!;
  const doaba = regionalSwingRequirements.find((r) => r.region === "Doaba")!;

  return {
    malwa: {
      required: malwa.requiredRegionalSwing,
      achievability: malwa.achievability,
    },
    majha: {
      required: majha.requiredRegionalSwing,
      achievability: majha.achievability,
    },
    doaba: {
      required: doaba.requiredRegionalSwing,
      achievability: doaba.achievability,
    },
  };
}

/**
 * Check if swing is sufficient for majority
 */
export function isSwingSufficientForMajority(swingPp: number): {
  sufficient: boolean;
  threshold: number;
  margin: number;
} {
  const threshold = uniformSwingThresholdForMajority;
  return {
    sufficient: swingPp >= threshold,
    threshold,
    margin: swingPp - threshold,
  };
}
