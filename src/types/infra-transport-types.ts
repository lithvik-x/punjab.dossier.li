// Infrastructure Transport Types for Punjab Road, Rail & Air Transport
// Derived from: research-M2/MP1-foundational/geography/infra-transport.md
// Research Date: 19 May 2026 | Data Currency: 2024-2026

// ==========================================
// ROAD NETWORK DATA
// ==========================================

export interface RoadNetworkData {
  nationalHighways: NationalHighwayData;
  stateHighways: StateHighwayData;
  borderRoads: BorderRoadData;
  majorNationalHighways: MajorNationalHighway[];
  congestionHotspots: string[];
  railCrossings: RailCrossingData;
}

export interface NationalHighwayData {
  totalLengthKm: number;
  sourceYear: number;
  growthFrom2020: {
    length2020: number;
    length2024: number;
    growthPercent: number;
  };
  ongoingProjects: number;
  projectSource: string;
}

export interface StateHighwayData {
  lengthKm: number;
  sourceYear: number;
  note: string;
}

export interface BorderRoadData {
  approvedLengthKm: number;
  approvedDate: string;
  cost: number;
  states: string[];
  benefitingDistricts: string[];
}

export interface MajorNationalHighway {
  number: string;
  formerNumber?: string;
  description: string;
  significance: string;
}

export interface RailCrossingData {
  robsConstructedSince2014: number;
  note: string;
}

// ==========================================
// RAILWAY NETWORK DATA
// ==========================================

export interface RailwayNetworkData {
  routeLengthKm: number;
  runningTrackLengthKm: number;
  totalStations: number;
  electrificationPercent: number;
  newTracksSince2014: number;
  tracksElectrifiedSince2014: number;
  railwayZones: string[];
  annualBudgetAllocation: number;
  ongoingProjectValue: number;
  averageInvestmentComparison: {
    years2009to2014: number;
    allocation2025to2026: number;
    multiplier: number;
  };
  majorJunctions: MajorJunction[];
  stationClassification: StationClassification[];
  newTrainServices: NewTrainService[];
  stationRedevelopment: StationRedevelopment[];
  railLinkProjects: RailLinkProject[];
  freightData: FreightData;
}

export interface MajorJunction {
  stationName: string;
  code: string;
  category: "NSG-2" | "NSG-3" | "NSG-4";
  significance: string;
  note?: string;
}

export interface StationClassification {
  category: string;
  stations: string[];
  note?: string;
}

export interface NewTrainService {
  name: string;
  startPoint: string;
  endPoint: string;
  launchDate: string;
  details: string;
}

export interface StationRedevelopment {
  stationName: string;
  cost: number;
  status: string;
}

export interface RailLinkProject {
  project: string;
  cost: number;
  impact: string;
  note?: string;
}

export interface FreightData {
  fciDispatchesRakesPerMonth: number;
  fciTonnagePerRake: string;
  annualFreightCapacity: string;
  borderCrossing: BorderCrossingInfo;
}

export interface BorderCrossingInfo {
  name: string;
  type: string;
  status: string;
  note: string;
}

// ==========================================
// AVIATION INFRASTRUCTURE DATA
// ==========================================

export interface AviationData {
  operationalAirports: Airport[];
  underConstruction: AirportUnderConstruction[];
  udanCoveredAirports: string[];
  strategicNotes: string[];
}

export interface Airport {
  name: string;
  type: "International" | "Domestic" | "Civil" | "Private" | "Domestic/Civil";
  iataCode: string;
  status: string;
  capacity?: string;
  runway?: string;
  note?: string;
}

export interface AirportUnderConstruction {
  name: string;
  type: string;
  location: string;
  distanceFromCity: string;
  status: string;
  completionTimeline: string;
  note?: string;
}

// ==========================================
// PUBLIC TRANSPORT DATA
// ==========================================

export interface PublicTransportData {
  stateBusOperators: BusOperator[];
  electricBusDeployment: ElectricBusData;
  urbanLastMile: UrbanTransportMode[];
  brtPlans: BRTPlan[];
  metroStatus: MetroStatus;
}

export interface BusOperator {
  name: string;
  headquarters: string;
  newBuses2026: number;
  fleetBreakdown: BusFleetBreakdown[];
  totalFleetNote?: string;
  note?: string;
}

export interface BusFleetBreakdown {
  type: string;
  count: number;
  scheme?: string;
}

export interface ElectricBusData {
  totalSanctioned: number;
  cities: ElectricBusCity[];
  depotInfrastructureCost: number;
  procurementModel: string;
  note?: string;
}

export interface ElectricBusCity {
  city: string;
  busesSanctioned: number;
}

export interface UrbanTransportMode {
  mode: string;
  coverage: string;
  status: "Operational" | "Growing" | "Declining" | "Planned" | "Not Available";
}

export interface BRTPlan {
  route: string;
  length: string;
  status: string;
}

export interface MetroStatus {
  status: "Not Available" | "Planned" | "Under Construction" | "Operational";
  note: string;
}

// ==========================================
// CONNECTIVITY GAPS DATA
// ==========================================

export interface ConnectivityGaps {
  criticalGaps: ConnectivityGap[];
  politicalImplications: PoliticalImplication[];
}

export interface ConnectivityGap {
  region: string;
  description: string;
  transportType: "Rail" | "Road" | "Air" | "Suburban Rail" | "Last-Mile";
  severity: "High" | "Medium" | "Low";
}

export interface PoliticalImplication {
  party: "AAP" | "Congress" | "SAD-BJP";
  narrative: string;
  counterNarrative?: string;
}

// ==========================================
// TRANSPORT KPI AGGREGATE
// ==========================================

export interface TransportKPI {
  road: RoadNetworkData;
  rail: RailwayNetworkData;
  aviation: AviationData;
  publicTransport: PublicTransportData;
  connectivity: ConnectivityGaps;
  sources: Source[];
  researchDate: string;
  dataCurrency: string;
}

export interface Source {
  id: number;
  title: string;
  date?: string;
  note?: string;
}

// ==========================================
// CONSTANTS
// ==========================================

export const ROAD_CONSTANTS = {
  NATIONAL_HIGHWAY_LENGTH_KM: 4239,
  NH_LENGTH_2020_KM: 3324,
  NH_GROWTH_PERCENT: 27.5,
  STATE_HIGHWAY_LENGTH_KM: 1100,
  BORDER_ROAD_LENGTH_KM: 2280,
  BORDER_ROAD_COST_CRORE: 4406,
  ROAD_DENSITY_PER_100_SQ_KM: 170,
  ONGOING_NH_PROJECTS: 40,
} as const;

export const RAIL_CONSTANTS = {
  ROUTE_LENGTH_KM: 2265,
  RUNNING_TRACK_KM: 2768,
  TOTAL_STATIONS: 286,
  ELECTRIFICATION_PERCENT: 100,
  NEW_TRACKS_SINCE_2014_KM: 382,
  TRACKS_ELECTRIFIED_SINCE_2014_KM: 1634,
  ANNUAL_BUDGET_2025_26_CRORE: 5421,
  ONGOING_PROJECT_VALUE_CRORE: 25000,
  INVESTMENT_MULTIPLIER: 24,
  ROBs_RUBs_SINCE_2014: 409,
} as const;

export const AVIATION_CONSTANTS = {
  OPERATIONAL_INTERNATIONAL_AIRPORTS: 2,
  OPERATIONAL_DOMESTIC_AIRPORTS: 5,
  AIRPORTS_UNDER_CONSTRUCTION: 1,
  E_BUS_SANCTIONED: 347,
  DEPOT_INFRASTRUCTURE_CRORE: 45.11,
} as const;

export const PUBLIC_TRANSPORT_CONSTANTS = {
  NEW_BUSES_2026_TOTAL: 1265,
  PRTC_NEW_BUSES: 659,
  PUNBUS_NEW_BUSES: 606,
  ELECTRIC_BUSES_SANCTIONED: 347,
  E_BUS_CITIES: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala"],
} as const;

export const TRANSPORT_DISTRICTS = [
  "Ludhiana",
  "Amritsar",
  "Jalandhar",
  "Bathinda",
  "Sangrur",
  "Patiala",
  "Faridkot",
  "Fazilka",
  "Muktsar",
  "Mansa",
  "Pathankot",
  "Gurdaspur",
  "Hoshiarpur",
  "Kapurthala",
  "Rupnagar",
  "SAS Nagar",
  "Fatehgarh Sahib",
  "Tarn Taran",
  "Nawanshahr",
  "Barnala",
  "Ferozepur",
  "Moga",
] as const;

export type TransportDistrict = (typeof TRANSPORT_DISTRICTS)[number];
