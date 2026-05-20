// Constituency Issue Types
// Derived from: g33-constituency-issue-salience-mapping.md

import type { Region } from "./kpi-types";

// ==========================================
// ISSUE CATEGORIES (12-MACRO)
// ==========================================

export type IssueSalienceCategory =
  | "Drugs"
  | "Unemployment"
  | "FarmerDistress"
  | "WaterCrisis"
  | "LawOrder"
  | "Corruption"
  | "WomenSafety"
  | "Healthcare"
  | "Education"
  | "Infrastructure"
  | "Religious"
  | "NonFarmEmployment";

export interface IssueDefinition {
  code: IssueSalienceCategory;
  name: string;
  primaryIndicators: string[];
  secondaryIndicators: string[];
  typicalDemographics: string[];
}

export const ISSUE_DEFINITIONS: IssueDefinition[] = [
  {
    code: "Drugs",
    name: "Drugs Crisis",
    primaryIndicators: ["Heroin/seized cases", "Drug-related deaths", "Addiction rates"],
    secondaryIndicators: ["Young men in rehab", "Families displaced", "Village-level prevalence"],
    typicalDemographics: ["Rural Punjabi Sikh youth (18-35)", "Malwa region"],
  },
  {
    code: "Unemployment",
    name: "Unemployment / Youth Migration",
    primaryIndicators: ["Registered unemployed", "Out-migration rates", "NREGA demand"],
    secondaryIndicators: ["Graduate unemployment", "White-collar job loss", "Remittance dependency"],
    typicalDemographics: ["Educated youth", "Doaba region", "Jat Sikh middle class"],
  },
  {
    code: "FarmerDistress",
    name: "Farmer Distress / Agricultural Debt",
    primaryIndicators: ["Farm debt per household", "Suicides linked to debt", "MSP realization"],
    secondaryIndicators: ["Input cost inflation", "Mandi infrastructure", "Crop failure compensation"],
    typicalDemographics: ["Majha and Malwa farmers", "Small/marginal holdings"],
  },
  {
    code: "WaterCrisis",
    name: "Water Crisis",
    primaryIndicators: ["Groundwater depth", "SYL dispute intensity", "Canal water availability"],
    secondaryIndicators: ["Tanker mafia presence", "Borewell failure rates", "Contamination"],
    typicalDemographics: ["South Malwa", "Ferozepur", "Bathinda", "Mansa"],
  },
  {
    code: "LawOrder",
    name: "Law & Order / Crime",
    primaryIndicators: ["Murder/robbery rates", "Police conviction rates", "Gang activity"],
    secondaryIndicators: ["Dasta practice", "Political violence"],
    typicalDemographics: ["Urban-periurban seats", "Border constituencies", "Majha"],
  },
  {
    code: "Corruption",
    name: "Corruption",
    primaryIndicators: ["CBI cases", "Disproportionate assets", "Lokayukta data"],
    secondaryIndicators: ["PWD irregularities", "Billing fraud"],
    typicalDemographics: ["All regions"],
  },
  {
    code: "WomenSafety",
    name: "Women Safety",
    primaryIndicators: ["Crime against women", "Molestation/assault rates", "Dowry deaths"],
    secondaryIndicators: ["Harassment", "Domestic violence", "Eve-teasing"],
    typicalDemographics: ["Urban seats", "Rural underreporting"],
  },
  {
    code: "Healthcare",
    name: "Healthcare",
    primaryIndicators: ["Hospital beds per 1000", "Infant mortality", "PHC accessibility"],
    secondaryIndicators: ["Drug shortages", "Doctor absenteeism", "Female mortality"],
    typicalDemographics: ["Malwa rural", "SC-dominant seats"],
  },
  {
    code: "Education",
    name: "Education",
    primaryIndicators: ["Dropout rates", "Literacy gaps", "Government school quality"],
    secondaryIndicators: ["Mid-day meal", "Teacher vacancies", "Skill training"],
    typicalDemographics: ["SC-dominant constituencies", "Rural Malwa and Doaba"],
  },
  {
    code: "Infrastructure",
    name: "Infrastructure",
    primaryIndicators: ["Road connectivity", "Rural electrification", "Mandi storage"],
    secondaryIndicators: ["Power supply", "Irrigation coverage", "Transport"],
    typicalDemographics: ["All rural seats", "Malwa"],
  },
  {
    code: "Religious",
    name: "Religious / Sectarian Issues",
    primaryIndicators: ["Communal incidents", "Dera tensions", "Sacrilege incidents"],
    secondaryIndicators: ["Gurdwara disputes", "Minority concerns"],
    typicalDemographics: ["Malwa", "Doaba"],
  },
  {
    code: "NonFarmEmployment",
    name: "Employment (Non-Farm)",
    primaryIndicators: ["MSME closures", "Industrial units", "FDI in Punjab"],
    secondaryIndicators: ["Startup ecosystem", "Gig economy", "Unorganized sector"],
    typicalDemographics: ["Urban seats", "Majha industrial corridors"],
  },
];

// ==========================================
// ISSUE SALIENCE SCORE
// ==========================================

export interface IssueSalienceScore {
  issue: IssueSalienceCategory;
  score: number; // 0-100
  rank: number;
  trend: "up" | "down" | "stable";
  methodologyBreakdown?: {
    survey: number;
    socialMedia: number;
    news: number;
    keyInformants: number;
    focusGroups: number;
  };
}

export interface ConstituencyIssueProfile {
  acNumber: number;
  acName: string;
  region: Region;
  salienceScores: IssueSalienceScore[];
  topIssues: IssueSalienceCategory[];
  trendAnalysis?: {
    increased: IssueSalienceCategory[];
    decreased: IssueSalienceCategory[];
    new: IssueSalienceCategory[];
  };
  communityVariation?: {
    community: string;
    topIssues: IssueSalienceCategory[];
  }[];
  attribution?: {
    primary: "State Govt" | "Central Govt" | "Local MLA" | "Local Bodies" | "Community";
    localMlaResponsible: boolean;
  };
}

// ==========================================
// REGIONAL ISSUE SIGNATURES
// ==========================================

export interface RegionalIssueSignature {
  region: Region;
  issues: {
    issue: IssueSalienceCategory;
    intensity: "CRITICAL" | "HIGH" | "MODERATE-HIGH" | "MODERATE";
    seats: string;
    rationale: string;
  }[];
  keyConstituencies: string[];
}

export const REGIONAL_ISSUE_SIGNATURES: RegionalIssueSignature[] = [
  {
    region: "Malwa",
    issues: [
      { issue: "Drugs", intensity: "CRITICAL", seats: "1-2", rationale: "Border heroin pipeline, agricultural distress driving addiction" },
      { issue: "FarmerDistress", intensity: "HIGH", seats: "2-3", rationale: "Small/marginal holdings, MSP non-realization" },
      { issue: "WaterCrisis", intensity: "HIGH", seats: "2-3", rationale: "South Malwa most groundwater-depleted, SYL politically volatile" },
      { issue: "WomenSafety", intensity: "MODERATE-HIGH", seats: "3-4", rationale: "Dowry culture, domestic violence, limited reporting" },
      { issue: "Religious", intensity: "MODERATE", seats: "3-4", rationale: "Sikh-Hindu relations, dera politics, sacrilege (2015)" },
    ],
    keyConstituencies: ["Bathinda Rural", "Rampura Phul", "Mansa", "Ferozepur Rural", "Jalalabad", "Fazilka"],
  },
  {
    region: "Majha",
    issues: [
      { issue: "Drugs", intensity: "HIGH", seats: "1-2", rationale: "Border proximity, smuggling routes, BSF issues" },
      { issue: "Unemployment", intensity: "HIGH", seats: "2-3", rationale: "Industrial decline in Jalandhar, Ludhiana, Amritsar" },
      { issue: "LawOrder", intensity: "MODERATE-HIGH", seats: "2-3", rationale: "Urban crime, gang rivalries, political violence" },
      { issue: "Corruption", intensity: "MODERATE", seats: "3-4", rationale: "Urban middle-class grievance, PWD corruption" },
      { issue: "Infrastructure", intensity: "MODERATE", seats: "3-4", rationale: "Urban decay, sewage, road maintenance" },
    ],
    keyConstituencies: ["Amritsar Central", "Amritsar West", "Jalandhar Central", "Jalandhar North", "Ludhiana Central", "Ludhiana East"],
  },
  {
    region: "Doaba",
    issues: [
      { issue: "Unemployment", intensity: "CRITICAL", seats: "1-2", rationale: "Highest out-migration, degree-holders unable to find employment" },
      { issue: "FarmerDistress", intensity: "CRITICAL", seats: "1-2", rationale: "Highest SC concentration, land alienation, manual scavenging" },
      { issue: "Drugs", intensity: "HIGH", seats: "2-3", rationale: "Doaba youth affected, pharmaceutical abuse more common" },
      { issue: "Healthcare", intensity: "HIGH", seats: "2-3", rationale: "Poor public health infrastructure, maternal mortality" },
      { issue: "NonFarmEmployment", intensity: "MODERATE-HIGH", seats: "3-4", rationale: "Lack of industries, reliance on government jobs" },
    ],
    keyConstituencies: ["Jalandhar Rural", "Hoshiarpur", "Nakodar", "Phagwara", "Kapurthala"],
  },
];

// ==========================================
// CANDIDATE-ISSUE FIT
// ==========================================

export interface CandidateIssueFit {
  candidateName: string;
  issueCredibilityScore: number; // 1-10
  deliveryCapacity: "High" | "Medium" | "Low";
  fitClassification: "Star Candidate" | "Problem Candidate" | "Sleeper Candidate" | "Weak Candidate";
  alignmentTechniques?: string[];
}
