// Movement & Mobility Patterns Types for Punjab 2027
// Derived from: research-M2/MP1-foundational/geography/movement-mobility.md

import type { Region } from "./kpi-types";

// ==========================================
// DAILY COMMUTER PATTERNS
// ==========================================

export interface UrbanCommuterCorridor {
  name: string;
  description: string;
  dailyCommuters: number;
  profile: string[];
  campaignNote?: string;
}

export interface RuralMandiCommute {
  distanceRange: string; // "10-30 km"
  timingPattern: string;
  procurementSeasons: string[];
  campaignNote: string;
}

// ==========================================
// SEASONAL MIGRATION (INBOUND LABOR)
// ==========================================

export interface SeasonalMigration {
  estimatedMigrantWorkers: string; // "1.2-1.3 million (12-13 lakh)"
  originStates: string[];
  earningsPerSeason: string; // "Rs 40,000-45,000"
  seasonDuration: string; // "roughly three months"
  source: string;
  dataVintage: string;
}

export interface SeasonalCalendarEntry {
  period: string;
  activity: string;
  migrantInflux: string;
  politicalSignificance?: string;
}

export interface MigrantSentimentData {
  sentiment: string;
  flashpointIncidents: string[];
  slogan: string;
  year: number;
}

export interface BJPMobilizationData {
  targetVoterPool: string; // "20+ lakh eligible voters"
  originStates: string[];
  strategy: string;
}

export interface CongressPositionData {
  position: string;
  challenges: string[];
}

export interface MigrantSettlement {
  location: string;
  type: "industrial" | "brick_kiln" | "construction" | "domestic";
  reachabilityNote: string;
}

// ==========================================
// EMIGRATION & NRI DIASPORA
// ==========================================

export interface EmigrationProfile {
  proportionOfRuralHouseholds: number; // 13.34%
  ranking: string; // "second-highest after Kerala"
  totalEmigrants: string; // "1 million"
  period: string; // "2016 to February 2021"
  primaryDestinations: string[];
}

export interface EmigrationCorridor {
  originRegion: Region;
  originDistricts: string[];
  primaryDestination: string;
  secondaryDestination?: string;
  notes: string;
}

export interface NRIEngagementTiming {
  peakSeason: string; // "November-February"
  coincidesWith: string; // "campaign season"
}

export interface NRIVoterImpact {
  mechanism: string;
  strategicNote: string;
  concentrationRegion: Region;
}

// ==========================================
// PILGRIMAGE ROUTES & CIRCUITS
// ==========================================

export interface PilgrimageSite {
  name: string;
  type: "sikh" | "hindu" | "islamic" | "sufi" | "mixed";
  location?: string;
  dailyVisitors?: number;
  peakEvent?: string;
  peakAttendance?: string;
  campaignValue: string;
}

export interface PilgrimageCircuit {
  id: number;
  name: string;
  sites: PilgrimageSite[];
  totalDailyVisitors: string;
  peakEvent: string;
  peakAttendance: string;
  campaignNote: string;
}

export interface PilgrimageSeasonalData {
  circuit: string;
  peak: string;
  attendance: string;
  campaignRelevance: string;
}

// ==========================================
// WEEKLY MANDI / MARKET DAY SCHEDULE
// ==========================================

export interface CattleMandiDay {
  day: string;
  locations: string[];
  districts: string[];
}

export interface AgriculturalMandiHub {
  name: string;
  cropType: "wheat" | "paddy" | "cotton" | "vegetables" | "all";
  season: string;
  notes?: string;
}

export interface MandiCampaignNote {
  note: string;
  procurementSeasons: string[];
  mediaCoverage: string;
}

// ==========================================
// MAJOR FAIRS & CONGREGATIONS
// ==========================================

export interface MajorFair {
  name: string;
  religion: "sikh" | "hindu" | "islamic" | "christian" | "government" | "all";
  location: string;
  timing: string;
  attendance: string;
  attendanceCount: number;
  campaignRelevance?: string;
}

export interface FairAttendance {
  name: string;
  attendance: string;
  attendanceCount: number;
  location: string;
  timing: string;
}

// ==========================================
// CAMPAIGN OPPORTUNITY CALENDAR
// ==========================================

export interface CampaignWindow {
  period: string;
  mobilityEvent: string;
  campaignAction: string;
}

export interface CriticalCampaignWindow extends CampaignWindow {
  significance: string;
  regionalFocus?: string;
  expectedTurnout?: string;
}

export interface StrategicInsight {
  event: string;
  significance: string;
  regionalImplication: string;
  congressAction: string;
}

// ==========================================
// DATA GAPS
// ==========================================

export interface MobilityDataGap {
  dataPoint: string;
  status: string;
  verificationNeeded: string;
}

// ==========================================
// MOBILITY KPI DATA (main interface)
// ==========================================

export interface MobilityKPI {
  // Commuter Patterns
  urbanCommuterCorridors: UrbanCommuterCorridor[];
  ruralMandiCommute: RuralMandiCommute;

  // Seasonal Migration
  seasonalMigration: SeasonalMigration;
  seasonalCalendar: SeasonalCalendarEntry[];
  migrantSentiment: MigrantSentimentData;
  bjpMobilization: BJPMobilizationData;
  congressPosition: CongressPositionData;
  migrantSettlements: MigrantSettlement[];

  // Emigration
  emigrationProfile: EmigrationProfile;
  emigrationCorridors: EmigrationCorridor[];
  nriEngagement: NRIEngagementTiming;
  nriVoterImpact: NRIVoterImpact;

  // Pilgrimage
  pilgrimageCircuits: PilgrimageCircuit[];
  hinduPilgrimageSites: PilgrimageSite[];
  islamicSufiSites: PilgrimageSite[];

  // Mandi Schedule
  cattleMandiSchedule: CattleMandiDay[];
  agriculturalMandiHubs: AgriculturalMandiHub[];
  mandiCampaignNote: MandiCampaignNote;

  // Fairs
  majorFairs: MajorFair[];

  // Campaign Calendar
  campaignCalendar: CampaignWindow[];
  criticalWindows: CriticalCampaignWindow[];
  strategicInsight: StrategicInsight;

  // Data Gaps
  dataGaps: MobilityDataGap[];

  // Sources
  sources: string[];
}
