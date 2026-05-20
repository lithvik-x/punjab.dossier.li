// @ts-nocheck
// Constituency Issue Salience Data
// Derived from: g33-constituency-issue-salience-mapping.md

import type {
  IssueSalienceCategory,
  IssueDefinition,
  ConstituencyIssueProfile,
} from "@/types/constituency-issue-types";

// ==========================================
// ISSUE DEFINITIONS
// ==========================================

export const ISSUE_DEFINITIONS: IssueDefinition[] = [
  {
    id: "drug-abuse",
    name: "Drug Abuse",
    category: "Law & Order",
    description: "Substance abuse crisis affecting youth, families, agricultural communities",
    keyQuestions: ["Extent of local drug problem", "Primary substances", "Key affected demographics"],
  },
  {
    id: "unemployment",
    name: "Unemployment",
    category: "Economy",
    description: "Joblessness among educated youth, lack of industrial growth",
    keyQuestions: ["Youth unemployment rates", "Migration patterns", "Skill gaps"],
  },
  {
    id: "farmer-debt",
    name: "Farmer Debt",
    category: "Agriculture",
    description: "Agricultural loans, MSP procurement issues, crop losses",
    keyQuestions: ["Average debt levels", "MSP access", "Crop insurance enrollment"],
  },
  {
    id: "water-crisis",
    name: "Water Crisis",
    category: "Infrastructure",
    description: "Drinking water scarcity, groundwater depletion, irrigation water shortage",
    keyQuestions: ["Groundwater levels", "Canal access", "Summer water availability"],
  },
  {
    id: "women-safety",
    name: "Women Safety",
    category: "Law & Order",
    description: "Safety concerns, harassment, assault cases",
    keyQuestions: ["Local crime statistics", "Police responsiveness", "Night safety"],
  },
  {
    id: "law-order",
    name: "Law and Order",
    category: "Law & Order",
    description: "General crime rates, theft, burglary, organized crime",
    keyQuestions: ["Crime rates", "Police presence", "Response time"],
  },
  {
    id: "religious-harmony",
    name: "Religious Harmony",
    category: "Social",
    description: "Communal tensions, inter-faith relations, festival issues",
    keyQuestions: ["Recent incidents", "Community relations", "Political exploitation"],
  },
  {
    id: "corruption",
    name: "Corruption",
    category: "Governance",
    description: "Bribery in government services, nepotism, official extortion",
    keyQuestions: ["Most corrupt departments", "Common bribe types", "Impact on services"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    category: "Social Services",
    description: "Hospital access, doctor availability, medicine costs",
    keyQuestions: ["Hospital distance", "Doctor availability", "Medicine affordability"],
  },
  {
    id: "power-electricity",
    name: "Power/Electricity",
    category: "Infrastructure",
    description: "Load shedding, transformer failures, electricity tariffs",
    keyQuestions: ["Daily load shedding hours", "Transformer issues", "Tariff concerns"],
  },
  {
    id: "road-infrastructure",
    name: "Road Infrastructure",
    category: "Infrastructure",
    description: "Road quality, connectivity, village access",
    keyQuestions: ["Paved vs unpaved roads", "Monsoon condition", "Connectivity gaps"],
  },
];

// ==========================================
// REGIONAL ISSUE SIGNATURES
// ==========================================

export const REGIONAL_ISSUE_SIGNATURES: Record<string, { primary: string[]; secondary: string[]; tertiary: string[] }> = {
  Malwa: {
    primary: ["Drug Abuse", "Farmer Debt", "Unemployment"],
    secondary: ["Water Crisis", "Power/Electricity", "Corruption"],
    tertiary: ["Road Infrastructure", "Healthcare"],
  },
  Majha: {
    primary: ["Drug Abuse", "Water Crisis", "Law and Order"],
    secondary: ["Unemployment", "Healthcare", "Women Safety"],
    tertiary: ["Farmer Debt", "Power/Electricity"],
  },
  Doaba: {
    primary: ["Unemployment", "Drug Abuse", "Migration"],
    secondary: ["Healthcare", "Education", "Power/Electricity"],
    tertiary: ["Water Crisis", "Road Infrastructure"],
  },
};

// ==========================================
// URBAN VS RURAL ISSUE PRIORITIES
// ==========================================

export const URBAN_ISSUE_PRIORITIES: IssueSalienceCategory[] = [
  { issue: "Unemployment", rank: 1, salience: 0.85 },
  { issue: "Drug Abuse", rank: 2, salience: 0.75 },
  { issue: "Corruption", rank: 3, salience: 0.70 },
  { issue: "Power/Electricity", rank: 4, salience: 0.65 },
  { issue: "Healthcare", rank: 5, salience: 0.60 },
];

export const RURAL_ISSUE_PRIORITIES: IssueSalienceCategory[] = [
  { issue: "Drug Abuse", rank: 1, salience: 0.90 },
  { issue: "Farmer Debt", rank: 2, salience: 0.85 },
  { issue: "Water Crisis", rank: 3, salience: 0.80 },
  { issue: "Power/Electricity", rank: 4, salience: 0.70 },
  { issue: "Unemployment", rank: 5, salience: 0.65 },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get issue definition by ID
 */
export function getIssueDefinition(id: string): IssueDefinition | undefined {
  return ISSUE_DEFINITIONS.find(i => i.id === id);
}

/**
 * Get issue definitions by category
 */
export function getIssuesByCategory(category: string): IssueDefinition[] {
  return ISSUE_DEFINITIONS.filter(i => i.category === category);
}

/**
 * Get regional issue signature
 */
export function getRegionalIssueSignature(region: string): { primary: string[]; secondary: string[]; tertiary: string[] } {
  return REGIONAL_ISSUE_SIGNATURES[region] || { primary: [], secondary: [], tertiary: [] };
}

/**
 * Get top N issues for a region
 */
export function getTopIssuesForRegion(region: string, count: number = 5): string[] {
  const signature = getRegionalIssueSignature(region);
  return [...signature.primary, ...signature.secondary].slice(0, count);
}

/**
 * Calculate issue salience score
 */
export function calculateIssueSalience(rank: number, maxRank: number = 12): number {
  return Math.round(((maxRank - rank + 1) / maxRank) * 100) / 100;
}
