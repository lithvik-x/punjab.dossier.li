// Voter Homogeneity Measurement Types
// Derived from: g69-punjab-voter-homogeneity-measurement-framework.md

import type { Region } from "./kpi-types";

// ==========================================
// HOMOGENEITY METRICS
// ==========================================

export type HomogeneityTier = "High" | "Moderate" | "Heterogeneous";

export interface HomogeneityClassification {
  tier: HomogeneityTier;
  cvRange: string;
  interpretation: string;
  strategicPriority: string;
}

export const HOMOGENEITY_CLASSIFICATIONS: HomogeneityClassification[] = [
  {
    tier: "High",
    cvRange: "CV < 15%",
    interpretation: "Voters behave uniformly; single message strategy effective",
    strategicPriority: "Low — secure but do not over-invest",
  },
  {
    tier: "Moderate",
    cvRange: "CV 15-30%",
    interpretation: "Some variation; segment-specific messaging needed",
    strategicPriority: "Medium — identify swing booths",
  },
  {
    tier: "Heterogeneous",
    cvRange: "CV > 30%",
    interpretation: "Wide variation; micro-targeting essential",
    strategicPriority: "High — requires intensive micro-targeting",
  },
];

// ==========================================
// BOOTH HOMOGENEITY SCORE (BHS)
// ==========================================

export interface BoothHomogeneityScore {
  boothId: string;
  constituencyId: number;
  bhs: number; // Booth Homogeneity Score
  classification: "Aligned" | "Moderate Deviation" | "Deviant" | "Extreme Outlier";
  deviationDirection?: "stronghold" | "weak_spot";
}

// ==========================================
// HOMOGENEITY DATA
// ==========================================

export interface ConstituencyHomogeneity {
  acNumber: number;
  acName: string;
  region: Region;
  cv: number;
  tier: HomogeneityTier;
  boothCount: number;
  congress: {
    mean: number;
    stdDev: number;
    cv: number;
  };
  aap?: {
    mean: number;
    stdDev: number;
    cv: number;
  };
  outlierBooths: string[];
  deraInfluence: boolean;
  deraName?: string;
}

// ==========================================
// REGIONAL HOMOGENEITY PATTERNS
// ==========================================

export interface RegionalHomogeneityPattern {
  region: Region;
  ruralCV: string;
  urbanCV: string;
  keyDriver: string;
  estimatedSeats: {
    high: number;
    moderate: number;
    heterogeneous: number;
  };
}

export const REGIONAL_HOMOGENEITY_PATTERNS: RegionalHomogeneityPattern[] = [
  {
    region: "Malwa",
    ruralCV: "10-20%",
    urbanCV: "20-30%",
    keyDriver: "Caste dominance vs economic class cleavage",
    estimatedSeats: { high: 15, moderate: 30, heterogeneous: 24 },
  },
  {
    region: "Majha",
    ruralCV: "15-25%",
    urbanCV: "25-35%",
    keyDriver: "Agricultural unity vs commercial diversity",
    estimatedSeats: { high: 5, moderate: 12, heterogeneous: 10 },
  },
  {
    region: "Doaba",
    ruralCV: "20-30%",
    urbanCV: "30-45%",
    keyDriver: "Dera networks + SC diversity in both",
    estimatedSeats: { high: 3, moderate: 8, heterogeneous: 12 },
  },
];

// ==========================================
// DERAS AND HOMOGENEITY
// ==========================================

export interface DeraHomogeneityEffect {
  deraName: string;
  location: string;
  approximateFollowers: string;
  homogeneityEffect: "High homogenization" | "Moderate homogenization";
}

export const MAJOR_DERAS: DeraHomogeneityEffect[] = [
  {
    deraName: "Dera Sacha Sauda (Sirsa)",
    location: "Haryana border, Malwa",
    approximateFollowers: "50+ lakh",
    homogeneityEffect: "High homogenization",
  },
  {
    deraName: "Dera Sachkhand Ballan",
    location: "Jalandhar, Doaba",
    approximateFollowers: "20+ lakh",
    homogeneityEffect: "Moderate homogenization",
  },
  {
    deraName: "Radha Soami Satsang Beas",
    location: "Beas, Doaba",
    approximateFollowers: "30+ lakh",
    homogeneityEffect: "High homogenization",
  },
  {
    deraName: "Dera Nankiana Sahib",
    location: "Tarn Taran, Majha",
    approximateFollowers: "5+ lakh",
    homogeneityEffect: "Moderate homogenization",
  },
];

// ==========================================
// HOMOGENEITY-CANDIDATE DEPLOYMENT
// ==========================================

export interface CandidateDeploymentMatrix {
  cvRange: string;
  candidatePriority: string;
  keyTrait: string;
}

export const CANDIDATE_DEPLOYMENT_MATRIX: CandidateDeploymentMatrix[] = [
  { cvRange: "<15%", candidatePriority: "Party loyalty", keyTrait: "Infrastructure manager" },
  { cvRange: "15-25%", candidatePriority: "Local acceptance", keyTrait: "Community connector" },
  { cvRange: "25-35%", candidatePriority: "Segment matching", keyTrait: "Adaptive communicator" },
  { cvRange: ">35%", candidatePriority: "Dual-profile capacity", keyTrait: "Political entrepreneur" },
];

// ==========================================
// MEASUREMENT FREQUENCY
// ==========================================

export interface MeasurementTimeline {
  phase: "Baseline" | "Campaign" | "Event-Triggered" | "Weekly";
  frequency: string;
  dataSources: string[];
  milestone?: string;
}

export const MEASUREMENT_TIMELINE: MeasurementTimeline[] = [
  { phase: "Baseline", frequency: "One-time", dataSources: ["2024 LS", "2022 assembly"], milestone: "November 2026" },
  { phase: "Campaign", frequency: "Monthly", dataSources: ["Survey data", "Early field reports"], milestone: "December 2026" },
  { phase: "Campaign", frequency: "Monthly", dataSources: ["CEMS test polls", "Aggregator data"], milestone: "January 2027" },
  { phase: "Campaign", frequency: "Pre-election", dataSources: ["Final field survey", "Last CEMS pulse"], milestone: "February 2027" },
];

// ==========================================
// RESOURCE ALLOCATION
// ==========================================

export interface HomogeneityResourceAllocation {
  constituencyType: string;
  investmentLevel: string;
  allocationPriority: string;
}

export const HOMOGENEITY_RESOURCE_ALLOCATION: HomogeneityResourceAllocation[] = [
  {
    constituencyType: "High Homogeneity Safe (CV <15%, Congress strong)",
    investmentLevel: "Minimal maintenance",
    allocationPriority: "Turnout, infrastructure",
  },
  {
    constituencyType: "High Homogeneity Competitive (CV <15%, swing)",
    investmentLevel: "Moderate",
    allocationPriority: "Persuasion + turnout",
  },
  {
    constituencyType: "Moderate Homogeneity (CV 15-30%)",
    investmentLevel: "Targeted",
    allocationPriority: "Micro-targeting in deviant booths",
  },
  {
    constituencyType: "Heterogeneous (CV >30%)",
    investmentLevel: "Intensive",
    allocationPriority: "Precision outreach, candidate matching",
  },
];
