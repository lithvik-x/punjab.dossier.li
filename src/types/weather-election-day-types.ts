// Weather Patterns & Election Day Planning Types for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g29-weather-election-day-planning.md

// ==========================================
// FEBRUARY WEATHER PATTERNS
// ==========================================

export interface RegionalClimatology {
  region: "Malwa" | "Majha" | "Doaba";
  temperatureRange: string;
  precipitation: string;
  fogDays: string;
  specialCharacteristics: string;
}

export interface HistoricalElectionWeather {
  election: string;
  date: string;
  avgTemp: string;
  weatherEvent: string;
  regionAffected: string;
  turnoutImpact: string;
}

export interface February2027Forecast {
  parameter: string;
  expectation: string;
  planningAssumption: string;
}

// ==========================================
// WEATHER IMPACT ON VOTER TURNOUT
// ==========================================

export interface WeatherTurnoutImpact {
  weatherType: "Fog" | "Light Rain" | "Heavy Rain" | "Cold";
  impactDirection: "Positive" | "Negative" | "Minimal";
  estimatedSwing: string;
  affectedVoterCategories: string[];
}

export interface VoterCategoryWeatherImpact {
  voterCategory: string;
  weatherVariable: string;
  impactDirection: string;
  estimatedSwing: string;
}

export interface CongressVoterWeatherVulnerability {
  voterBase: string;
  dependencyLevel: "High" | "Medium" | "Low";
  weatherRisk: string;
  impact: string;
}

// ==========================================
// TRANSPORT & LOGISTICS
// ==========================================

export interface RoadConditionWeatherImpact {
  weather: string;
  roadCondition: string;
  impact: string;
}

export interface PublicTransportAvailability {
  mode: string;
  availabilityOnElectionDay: string;
}

export interface VoterTransportProtocol {
  step: number;
  action: string;
}

export interface BoothAccessibilityConsideration {
  aspect: string;
  measure: string;
}

// ==========================================
// POLLING DAY CONTINGENCY
// ==========================================

export interface ExtendedVotingHourScenario {
  scenario: string;
  action: string;
  authority: string;
}

export interface PowerOutageBackup {
  vulnerability: string;
  backup: string;
  criticalPoint: string;
}

export interface CommunicationBackupProtocol {
  priority: number;
  method: string;
  fallback: string;
}

export interface StaffDeploymentPriority {
  role: string;
  focus: string;
}

// ==========================================
// GOTV IMPLICATIONS
// ==========================================

export interface WeatherMotivationStrategy {
  weatherCondition: string;
  message: string;
  channel: string;
}

export interface WhatsAppReminderTiming {
  timing: string;
  message: string;
  weatherSpecificAddition?: string;
}

export interface OrganizedTransportModel {
  component: string;
  description: string;
}

// ==========================================
// REGIONAL VARIATIONS
// ==========================================

export interface MalwaWeatherProfile {
  weatherProfile: string;
  specificVulnerabilities: string[];
  congressPriority: string[];
  recommendedContingency: string;
}

export interface MajhaWeatherProfile {
  weatherProfile: string;
  specificVulnerabilities: string[];
  congressPriority: string[];
  recommendedContingency: string;
}

export interface DoabaWeatherProfile {
  weatherProfile: string;
  specificVulnerabilities: string[];
  congressPriority: string[];
  recommendedContingency: string;
}

// ==========================================
// DISASTER PREPAREDNESS
// ==========================================

export interface ExtremeWeatherScenario {
  scenario: string;
  probability: string;
  impact: string;
  ecAction: string;
  congressAction: string;
}

export interface ECIContingencyProtocol {
  protocol: string;
  description: string;
}

export interface ContingencyInventoryItem {
  item: string;
  quantityPerAssemblySegment: string;
  purpose: string;
}

export interface ImmediateAction {
  timeline: "Before January 2027" | "Two Weeks Before Polling" | "Polling Day" | "Post-Poll";
  actions: string[];
}

// ==========================================
// KEY CONCEPTS
// ==========================================

export const WEATHER_ELECTION_CONCEPTS = {
  gotv: "Get Out the Vote operations",
  malwa: "Central Punjab region (69 seats)",
  majha: "Border region including Amritsar, Gurdaspur (27 seats)",
  doaba: "Beas river region (23 seats)"
} as const;

// ==========================================
// KNOWLEDGE CONFIDENCE
// ==========================================

export const WEATHER_ELECTION_CONFIDENCE = {
  overall: "High",
  basis: "Established meteorological patterns and documented election data"
} as const;
