// Gender Demographics & Women Indicators Types for Punjab Congress 2027 Election
// Derived from: research-M2/MP1-foundational/demographics/gender-indicators.md
// Date: 19 May 2026 | Status: COMPLETE

// ==========================================
// POPULATION BY GENDER
// ==========================================

export interface GenderPopulationData {
  totalPopulation2026: string;
  malePopulation: string;
  femalePopulation: string;
  overallSexRatio: string;
  childSexRatio06: string;
  nflsSexRatio: string;
  sexRatioAtBirth: string;
}

export interface DistrictChildSexRatio {
  district: string;
  childSexRatio: number;
}

export interface SexRatioTrend {
  period: string;
  ratio: number;
  note: string;
}

// ==========================================
// FEMALE LITERACY
// ==========================================

export interface LiteracyData {
  period: string;
  male: number;
  female: number;
  total: number;
  gap: number;
}

export interface DistrictLiteracy {
  district: string;
  male: number;
  female: number;
  total: number;
  gap: number;
}

export interface LiteracyTrend {
  period: string;
  male: number;
  female: number;
  total: number;
  gap: number;
}

// ==========================================
// ELECTORATE & VOTER TURNOUT
// ==========================================

export interface VoterTurnoutByGender {
  category: "Male" | "Female" | "Transgender" | "Total";
  electors: string;
  voters?: string;
  turnout?: string;
  percentage?: string;
}

export interface VoterTurnoutData {
  male: VoterTurnoutByGender;
  female: VoterTurnoutByGender;
  transgender: VoterTurnoutByGender;
  total: VoterTurnoutByGender;
  genderGapInElectorate: string;
  womenTurnoutGap: string;
  turnoutNotes: string;
}

// ==========================================
// FEMALE WORKFORCE PARTICIPATION
// ==========================================

export interface FemaleWorkforceData {
  state: string;
  femaleLFPR: string;
  source: string;
}

export interface FLFPRCharacteristics {
  characteristic: string;
  description: string;
}

// ==========================================
// HEALTH & SOCIAL INDICATORS
// ==========================================

export interface HealthSocialIndicator {
  indicator: string;
  punjab: string;
  india?: string;
  notes: string;
}

export interface NFHS5HealthData {
  totalFertilityRate: string;
  meanMarriageAgeWomen: string;
  womenBankAccount: string;
  womenMobilePhone: string;
  spousalViolence: string;
  physicalViolence: string;
  sexualViolence: string;
  anaemiaWomen: string;
  obesityWomen: string;
  womenInHouseholdDecisions: string;
}

// ==========================================
// WIDOW, SINGLE WOMEN & FEMALE-HEADED HH
// ==========================================

export interface VulnerableWomenData {
  category: string;
  estimatedCount: string;
  source: string;
}

export interface WidowChallenges {
  challenge: string;
  description: string;
}

// ==========================================
// SHG, ASHA & ANGANAWADI WORKERS
// ==========================================

export interface FrontlineWomenWorkers {
  category: string;
  approximateCount: string;
  notes: string;
}

export interface SHGData {
  womenSHGs: string;
  shgMembers: string;
  ashaWorkers: string;
  anganwadiCentres: string;
  anganwadiWorkers: string;
  totalFrontlineWomen: string;
}

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

export interface WomenSwingBloc {
  number: number;
  bloc: string;
  description: string;
}

export interface CongressMessagingPillar {
  pillar: string;
  description: string;
}

export interface ConstituencyTargeting {
  criteria: string;
  description: string;
}

// ==========================================
// DATA GAPS & VERIFICATION
// ==========================================

export interface DataGap {
  dataPoint: string;
  status: string;
  sourceNeeded: string;
}

export interface SourceDocument {
  citation: string;
  source: string;
}

// ==========================================
// TYPE EXPORTS
// ==========================================

export type GenderCategory = "Male" | "Female" | "Transgender";

export type RegionName = "Doaba" | "Malwa" | "Majha";

export type VerificationStatus = "VERIFIED" | "VERIFICATION_NEEDED" | "DELAYED";

export type ElectoralImpact = "High" | "Moderate" | "Low";

export type WorkerCategory = "SHG" | "ASHA" | "Anganwadi";
