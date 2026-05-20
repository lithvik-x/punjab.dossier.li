// Hinduism & Interfaith Dynamics Types for Punjab Congress 2027 Election
// Derived from: research-M2/MP1-foundational/demographics/hinduism-interfaith.md
// Date: 19 May 2026 | Status: COMPLETE

// ==========================================
// HINDU POPULATION & DISTRIBUTION
// ==========================================

/**
 * Hindu Population Overview in Punjab
 */
export interface HinduPopulationOverview {
  percentageOfState: string;
  estimatedPopulation: string;
  concentration: string;
  regionalDistribution: HinduRegionalDistribution[];
}

export interface HinduRegionalDistribution {
  region: "Doaba" | "Malwa" | "Majha";
  seats: number;
  hinduShare: string;
  keyDistricts: string[];
}

// ==========================================
// HINDU TRADITIONS & SAMPRADAYAS
// ==========================================

/**
 * Hindu religious traditions in Punjab
 */
export interface HinduTradition {
  name: string;
  description: string;
  founded?: string;
  founder?: string;
  keyCharacteristics: string[];
  politicalAlignment?: string;
  electoralSignificance?: string;
}

export interface AryaSamajData {
  founded: string;
  founder: string;
  davNetwork: {
    colleges: string;
    schools: string;
    concentration: string;
  };
  ideologicalStance: string[];
  politicalAlignment: string;
  voterBehavior: string;
}

export interface DevSamajData {
  founded: string;
  founder: string;
  headquarters: string;
  emphasis: string[];
  politicalProfile: string;
}

export interface ISKCONData {
  temples: string[];
  activities: string[];
  youthEngagement: string;
  politicalNote: string;
}

export interface OtherTraditions {
  name: string;
  description: string;
  location?: string;
  politicalSignificance: string;
}

// ==========================================
// MAJOR TEMPLES & PILGRIMAGE SITES
// ==========================================

export interface Temple {
  name: string;
  location: string;
  deity: string;
  significance: string;
  constituencyRelevance: string;
}

export interface PilgrimageSite extends Temple {
  crossBorderLinks?: string;
  historicalSignificance?: string;
}

export interface TempleEconomy {
  description: string;
  localImpact: string;
  politicalInfluence: string;
}

// ==========================================
// RSS/VHP MAPPING
// ==========================================

export interface RSSShakhaData {
  year: number;
  count: number | string;
  source: string;
  note?: string;
}

export interface RSSDistrictDensity {
  districtCluster: string;
  estimatedShakhas: string;
  strength: string;
}

export interface RSSVictoryPlan2026 {
  name: string;
  fivePointStrategy: RSSStrategyPoint[];
}

export interface RSSStrategyPoint {
  number: number;
  name: string;
  description: string;
  targetAreas?: string;
  scale?: string;
}

export interface VHPOrganizations {
  name: string;
  focus: string;
  activities: string[];
}

// ==========================================
// HINDU POLITICAL ISSUES & SENTIMENT
// ==========================================

export interface HinduMobilizationIssue {
  issue: string;
  sentiment: string;
  politicalImpact: string;
  salience: "High" | "Moderate" | "Low";
}

export interface HinduDalitVotingPattern {
  party: "AAP" | "Congress" | "BJP" | "Others";
  dalitSikhVote: string;
  dalitHinduVote: string;
}

export interface MinorityPersecutionComplex {
  description: string;
  source: string;
}

// ==========================================
// SIKH-HINDU DYNAMICS
// ==========================================

export interface HistoricalContext {
  period: string;
  description: string;
  impact: string;
}

export interface CurrentSikhHinduDynamics {
  minorityPerspective: string;
  sharedCulturalSpace: string;
  languageReality: string;
  marriagePatterns: string;
}

export interface PotentialFlashpoint {
  issue: string;
  risk: string;
  potentialImpact: string;
}

// ==========================================
// INTERFAITH SYNCRETISM
// ==========================================

export interface SharedWorshipPattern {
  practice: string;
  description: string;
  temples: string[];
  trend: string;
}

export interface SharedSacredCalendar {
  occasion: string;
  sharedParticipation: string;
}

export interface DargahVisitation {
  name: string;
  location: string;
  communities: string;
  trend: string;
}

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

export interface StrategicImplication {
  number: number;
  implication: string;
  strategicValue: string;
}

// ==========================================
// SOURCE DOCUMENTATION
// ==========================================

export interface SourceDocument {
  citation: string;
  date?: string;
  type: "web" | "research" | "training" | "magazine";
}

// ==========================================
// TYPE EXPORTS
// ==========================================

export type HinduTraditionName =
  | "Sanatan Dharma"
  | "Arya Samaj"
  | "Dev Samaj"
  | "ISKCON"
  | "Radha Soami Satsang"
  | "Nirankari Mission"
  | "Namdhari"
  | "Sant Ravidas";

export type RegionName = "Doaba" | "Malwa" | "Majha";

export type ThreatLevel = "Low" | "Medium" | "High" | "Critical";

export type IssueSalience = "High" | "Moderate" | "Low";

export type CasteCategory = "General" | "OBC" | "SC" | "ST";

export type ReligiousCategory = "Hindu" | "Sikh" | "Muslim" | "Christian" | "Other";
