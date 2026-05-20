// Booth Analysis Types
// Derived from: b7-booth-analysis-issue-governance-methodology.md, g11-booth-data-collection-protocol.md

import type { Region } from "./kpi-types";

// ==========================================
// BOOTH CLASSIFICATION
// ==========================================

export type BoothTier = "A+" | "A" | "B" | "C" | "D";

export interface BoothClassification {
  tier: BoothTier;
  compositeScore: number;
  electoralIndex: number;
  demographicIndex: number;
  governanceDeficitIndex: number;
  primaryIssues: string[];
  localLeader?: string;
  priorityAction?: string;
}

// Composite scoring weights
export const BOOTH_SCORING_WEIGHTS = {
  electoral: 0.50,
  demographic: 0.25,
  governance: 0.25,
} as const;

export const ELECTORAL_INDEX_WEIGHTS = {
  voteShare: 0.60,
  marginNormalized: 0.25,
  stabilityFactor: 0.15,
} as const;

export const DEMOGRAPHIC_INDEX_WEIGHTS = {
  socialHeterogeneity: 0.40,
  socioeconomic: 0.30,
  swingPropensity: 0.30,
} as const;

// ==========================================
// BOOTH DATA CARD
// ==========================================

export interface BoothDataCard {
  // Section A: Identification
  boothNumber: string;
  boothName: string;
  acNumber: number;
  acName: string;
  pcNumber: number;
  totalElectors: number;
  totalVoters: number;
  locationType: "Urban" | "Rural" | "Special";

  // Section B: Electoral History
  electoralHistory: {
    year: 2012 | 2017 | 2022;
    congressVoteShare: number;
    aapVoteShare: number;
    sadVoteShare: number;
    winner: string;
    margin: number;
    turnout: number;
  }[];

  // Section C: Demographic Profile
  demographics: {
    communityComposition: { name: string; percentage: number }[];
    socioeconomic: { abc1: number; c2de: number };
    keyOccupation: string;
    migration: { direction: "In" | "Out" | "Stable"; intensity: "High" | "Med" | "Low" };
  };

  // Section D: Infrastructure Assessment
  infrastructure: {
    roadType: "Pucca" | "Kachha" | "None";
    distanceToMotorableRoad: number; // km
    waterSource: "Borewell" | "Canal" | "Pipe" | "Tank";
    waterRegularity: "Daily" | "Weekly" | "Rare";
    drainage: "Covered" | "Open" | "None";
    wasteCollection: "Regular" | "Occasional" | "None";
    nearestPHCDistance: number; // km
    phcFunctioning: boolean;
    primarySchoolDistance: number; // km
    middleSchoolDistance: number; // km
    electricityRegularity: "Regular" | "Irregular";
    mobileNetwork: "2G" | "3G" | "4G" | "None";
    signalStrength: "Strong" | "Weak" | "None";
    internetAvailable: boolean;
    internetReliable: boolean;
  };

  // Section E: Classification
  classification: BoothClassification;

  // Section F: Issue Matrix
  issues: {
    category: IssueCategory;
    description: string;
    severity: 1 | 2 | 3 | 4 | 5;
    affectedVoters: number;
    communityCrossCutting: boolean;
  }[];
}

// ==========================================
// ISSUE TAXONOMY
// ==========================================

export type IssueCategory =
  | "Infrastructure"
  | "Economic"
  | "Social"
  | "Environmental"
  | "Governance";

export interface IssueSubCategory {
  parent: IssueCategory;
  name: string;
  examples: string[];
}

export const ISSUE_TAXONOMY: Record<IssueCategory, IssueSubCategory[]> = {
  Infrastructure: [
    { parent: "Infrastructure", name: "Transportation", examples: ["Road quality", "Public transport", "Bridge conditions"] },
    { parent: "Infrastructure", name: "Water", examples: ["Drinking water", "Water quality", "Pipeline infrastructure"] },
    { parent: "Infrastructure", name: "Sanitation", examples: ["Drainage", "Solid waste", "Sewerage"] },
    { parent: "Infrastructure", name: "Energy", examples: ["Electricity supply", "Solar adoption", "Street lighting"] },
    { parent: "Infrastructure", name: "Digital", examples: ["Mobile coverage", "Internet connectivity", "Bank penetration"] },
  ],
  Economic: [
    { parent: "Economic", name: "Employment", examples: ["Unemployment rate", "MGNREGA", "Skill training"] },
    { parent: "Economic", name: "Agriculture", examples: ["MSP", "Crop loans", "Input subsidies"] },
    { parent: "Economic", name: "Business", examples: ["Street vendors", "Market conditions", "Industry support"] },
    { parent: "Economic", name: "Financial", examples: ["Bank access", "Kisan Credit Card", "Insurance"] },
    { parent: "Economic", name: "Migration", examples: ["Out-migration", "Remittances", "Skilling"] },
  ],
  Social: [
    { parent: "Social", name: "Education", examples: ["School infrastructure", "Teacher availability", "Dropout rates"] },
    { parent: "Social", name: "Healthcare", examples: ["PHC functionality", "Medicine availability", "Health insurance"] },
    { parent: "Social", name: "Women", examples: ["Gender violence", "Self-help groups", "Safety"] },
    { parent: "Social", name: "Social Security", examples: ["Pension delivery", "Disability support"] },
    { parent: "Social", name: "Caste Relations", examples: ["Inter-community", "SC/ST rights", "Minority welfare"] },
  ],
  Environmental: [
    { parent: "Environmental", name: "Water", examples: ["Groundwater", "Canal water", "Pollution"] },
    { parent: "Environmental", name: "Land", examples: ["Soil degradation", "Mining impact", "Contamination"] },
    { parent: "Environmental", name: "Air", examples: ["Stubble burning", "Industrial pollution", "Air quality"] },
    { parent: "Environmental", name: "Forest", examples: ["Forest cover", "Wildlife conflict", "Green cover"] },
    { parent: "Environmental", name: "Climate", examples: ["Weather events", "Crop failure", "Heat vulnerability"] },
  ],
  Governance: [
    { parent: "Governance", name: "Administrative", examples: ["Office access", "Document services", "Land records"] },
    { parent: "Governance", name: "Law Order", examples: ["Crime rates", "Police response", "Traffic"] },
    { parent: "Governance", name: "Corruption", examples: ["Bribe prevalence", "RTI", "PDS efficiency"] },
    { parent: "Governance", name: "Political", examples: ["Local body functionality", "MLA accessibility"] },
    { parent: "Governance", name: "Welfare", examples: ["Scheme awareness", "Enrollment", "Grievance redress"] },
  ],
};

// ==========================================
// GOVERNANCE GAP TYPES
// ==========================================

export type GovernanceGapType =
  | "Promise-Delivery"
  | "Scheme-Awareness"
  | "Scheme-Enrollment"
  | "Benefit-Delivery"
  | "Adequacy"
  | "Access";

export interface GovernanceGapScore {
  type: GovernanceGapType;
  score: number; // 0-100
  classification: "Full Delivery" | "Partial Delivery" | "Minimal Delivery" | "No Delivery";
}

// ==========================================
// BOOTH TYPE CLASSIFICATION
// ==========================================

export type BoothType =
  | "Urban"
  | "Rural"
  | "SC-Dominated"
  | "Border"
  | "Naxal-Affected"
  | "Migrant"
  | "Special";

// ==========================================
// DATA COLLECTION PROTOCOL
// ==========================================

export type CollectionPhase = 1 | 2 | 3;

export interface CollectionMethod {
  boothType: BoothType[];
  method: "Door-to-Door" | "Key Informant" | "Existing Data" | "Digital Self-Reporting";
  avgTimePerBooth: number; // minutes
}

export const COLLECTION_METHODS: CollectionMethod[] = [
  { boothType: ["Rural", "SC-Dominated", "Migrant"], method: "Door-to-Door", avgTimePerBooth: 85 },
  { boothType: ["Urban", "Border"], method: "Key Informant", avgTimePerBooth: 45 },
  { boothType: ["Special"], method: "Existing Data", avgTimePerBooth: 20 },
  { boothType: ["Urban"], method: "Digital Self-Reporting", avgTimePerBooth: 20 },
];

// ==========================================
// VERIFICATION
// ==========================================

export type QualityScore = "Green" | "Yellow" | "Orange" | "Red";

export interface BoothDataQuality {
  boothNumber: string;
  qualityScore: QualityScore;
  confidencePercentage: number;
  flags: string[];
  verificationDate?: string;
}
