// Booth Analysis Data
// Derived from: b7-booth-analysis-issue-governance-methodology.md

import type {
  BoothTier,
  BoothDataCard,
  IssueCategory,
  GovernanceGapScore,
} from "@/types/booth-analysis-types";

// ==========================================
// ISSUE TAXONOMY
// ==========================================

export const ISSUE_TAXONOMY: {
  id: string;
  name: string;
  macroCategory: IssueCategory;
  description: string;
  governanceGapTypes: string[];
  affectedVoterProfile: string;
  urgencyLevel: string;
}[] = [
  {
    id: "water",
    name: "Water Crisis",
    macroCategory: "Infrastructure",
    description: "Drinking water availability, quality, and supply",
    governanceGapTypes: ["Promise-Delivery", "Scheme-Awareness", "Benefit-Delivery"],
    affectedVoterProfile: "Rural and semi-urban, all castes",
    urgencyLevel: "HIGH",
  },
  {
    id: "power",
    name: "Power/Electricity",
    macroCategory: "Infrastructure",
    description: "Reliability of electricity supply, transformer issues, load shedding",
    governanceGapTypes: ["Promise-Delivery", "Adequacy"],
    affectedVoterProfile: "All voters, farmers especially during kharif",
    urgencyLevel: "HIGH",
  },
  {
    id: "roads",
    name: "Road Infrastructure",
    macroCategory: "Infrastructure",
    description: "Road quality, construction, maintenance, village connectivity",
    governanceGapTypes: ["Promise-Delivery", "Access"],
    affectedVoterProfile: "Rural voters, farmers transporting produce",
    urgencyLevel: "MEDIUM",
  },
  {
    id: "drugs",
    name: "Drug Abuse",
    macroCategory: "Governance",
    description: "Substance abuse, drug peddling, addiction recovery",
    governanceGapTypes: ["Promise-Delivery"],
    affectedVoterProfile: "Youth, families of addicts, rural voters",
    urgencyLevel: "HIGH",
  },
  {
    id: "unemployment",
    name: "Unemployment",
    macroCategory: "Economic",
    description: "Joblessness, youth employment, skill development",
    governanceGapTypes: ["Promise-Delivery", "Scheme-Awareness", "Scheme-Enrollment"],
    affectedVoterProfile: "Youth (18-35), educated unemployed",
    urgencyLevel: "HIGH",
  },
  {
    id: "farmer-debt",
    name: "Farmer Debt",
    macroCategory: "Economic",
    description: "Agricultural loans, MSP, crop insurance, debt relief",
    governanceGapTypes: ["Promise-Delivery", "Scheme-Awareness", "Benefit-Delivery"],
    affectedVoterProfile: "Farmers, especially small/marginal",
    urgencyLevel: "HIGH",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    macroCategory: "Social",
    description: "Hospital access, doctor availability, medicine supply, ASHA workers",
    governanceGapTypes: ["Promise-Delivery", "Access", "Benefit-Delivery"],
    affectedVoterProfile: "All voters, elderly and poor especially",
    urgencyLevel: "MEDIUM",
  },
  {
    id: "education",
    name: "Education",
    macroCategory: "Social",
    description: "School quality, teacher vacancies, infrastructure",
    governanceGapTypes: ["Promise-Delivery", "Adequacy", "Access"],
    affectedVoterProfile: "Families with school-age children",
    urgencyLevel: "MEDIUM",
  },
  {
    id: "law-order",
    name: "Law and Order",
    macroCategory: "Governance",
    description: "Crime rates, police responsiveness, women's safety",
    governanceGapTypes: ["Promise-Delivery"],
    affectedVoterProfile: "Women, families, business owners",
    urgencyLevel: "HIGH",
  },
  {
    id: "sanitation",
    name: "Sanitation/Waste Management",
    macroCategory: "Infrastructure",
    description: "Drainage, garbage collection, sewage treatment",
    governanceGapTypes: ["Promise-Delivery", "Access"],
    affectedVoterProfile: "Urban and semi-urban voters",
    urgencyLevel: "LOW",
  },
  {
    id: "corruption",
    name: "Corruption",
    macroCategory: "Governance",
    description: "Bribery, nepotism, extortion by officials",
    governanceGapTypes: ["Promise-Delivery"],
    affectedVoterProfile: "All voters, business community especially",
    urgencyLevel: "MEDIUM",
  },
  {
    id: "transport",
    name: "Public Transport",
    macroCategory: "Infrastructure",
    description: "Bus service, auto availability, mobility options",
    governanceGapTypes: ["Promise-Delivery", "Access"],
    affectedVoterProfile: "Daily commuters, women, elderly",
    urgencyLevel: "LOW",
  },
];

// ==========================================
// BOOTH SCORING WEIGHTS
// ==========================================

export const BOOTH_SCORING_WEIGHTS = {
  congressBaseVote: 0.35,
  "rival AAP": 0.25,
  "rival SAD": 0.15,
  "rival BJP": 0.10,
  other: 0.15,
};

// ==========================================
// GOVERNANCE GAP THRESHOLDS
// ==========================================

export const GOVERNANCE_GAP_THRESHOLDS = {
  PromiseDelivery: {
    severe: { minGap: 40, description: "Massive gap between promise and delivery" },
    moderate: { minGap: 20, description: "Notable delivery shortfall" },
    mild: { minGap: 10, description: "Minor gap" },
  },
  SchemeAwareness: {
    severe: { minGap: 50, description: "Most voters unaware of schemes" },
    moderate: { minGap: 30, description: "Moderate awareness gap" },
    mild: { minGap: 15, description: "Minor awareness issues" },
  },
  SchemeEnrollment: {
    severe: { minGap: 40, description: "Most eligible voters not enrolled" },
    moderate: { minGap: 25, description: "Notable enrollment gap" },
    mild: { minGap: 10, description: "Minor enrollment issues" },
  },
  BenefitDelivery: {
    severe: { minGap: 40, description: "Most beneficiaries not receiving benefits" },
    moderate: { minGap: 25, description: "Notable benefit delivery gap" },
    mild: { minGap: 10, description: "Minor benefit delivery issues" },
  },
  Adequacy: {
    severe: { minGap: 50, description: "Services grossly inadequate" },
    moderate: { minGap: 30, description: "Moderate adequacy issues" },
    mild: { minGap: 15, description: "Minor adequacy issues" },
  },
  Access: {
    severe: { minGap: 40, description: "Most voters cannot access services" },
    moderate: { minGap: 25, description: "Moderate access barriers" },
    mild: { minGap: 10, description: "Minor access issues" },
  },
};

// ==========================================
// BOOTH TIER DISTRIBUTION GUIDELINES
// ==========================================

export const BOOTH_TIER_DISTRIBUTION = {
  "A+": {
    voteShareMin: 55,
    description: "Safe Congress booth",
    recommendedAction: "Protect and maximize turnout",
  },
  "A": {
    voteShareMin: 45,
    description: "Favorable booth",
    recommendedAction: "Intensive engagement, GOTV",
  },
  "B": {
    voteShareMin: 35,
    description: "Contested booth",
    recommendedAction: "Focused outreach, candidate visit",
  },
  "C": {
    voteShareMin: 25,
    description: "Difficult booth",
    recommendedAction: "Limited investment, suppression focus",
  },
  "D": {
    voteShareMin: 0,
    description: "Structural loss booth",
    recommendedAction: "Do not amplify rival, document only",
  },
} as const;

export type BoothTierDistribution = typeof BOOTH_TIER_DISTRIBUTION;

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get issue category by ID
 */
export function getIssueCategory(id: string): typeof ISSUE_TAXONOMY[number] | undefined {
  return ISSUE_TAXONOMY.find(i => i.id === id);
}

/**
 * Get issues by macro category
 */
export function getIssuesByMacroCategory(macroCategory: string): typeof ISSUE_TAXONOMY {
  return ISSUE_TAXONOMY.filter(i => i.macroCategory === macroCategory);
}

/**
 * Get high urgency issues
 */
export function getHighUrgencyIssues(): typeof ISSUE_TAXONOMY {
  return ISSUE_TAXONOMY.filter(i => i.urgencyLevel === "HIGH");
}

/**
 * Calculate governance gap severity
 */
export function getGovernanceGapSeverity(
  gapType: string,
  gapPercentage: number
): "severe" | "moderate" | "mild" {
  const thresholds = GOVERNANCE_GAP_THRESHOLDS[gapType as keyof typeof GOVERNANCE_GAP_THRESHOLDS];
  if (!thresholds) return "mild";

  if (gapPercentage >= thresholds.severe.minGap) return "severe";
  if (gapPercentage >= thresholds.moderate.minGap) return "moderate";
  return "mild";
}

/**
 * Determine booth tier from vote share
 */
export function getBoothTierFromVoteShare(voteShare: number): BoothTier {
  if (voteShare >= 55) return "A+";
  if (voteShare >= 45) return "A";
  if (voteShare >= 35) return "B";
  if (voteShare >= 25) return "C";
  return "D";
}

/**
 * Get booth tier info
 */
export function getBoothTierInfo(tier: BoothTier): BoothTierDistribution[BoothTier] {
  return BOOTH_TIER_DISTRIBUTION[tier];
}
