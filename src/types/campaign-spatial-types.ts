// Campaign Spatial Optimization Framework Types
// Source: MP1-foundational/geography/campaign-spatial.md

// ==========================================
// GEOGRAPHY & INFRASTRUCTURE
// ==========================================

export interface PunjabGeography {
  area: number; // sq km
  constituencies: number;
  districts: number;
  averageElevation: number; // meters
  roadNetwork: RoadNetwork;
}

export interface RoadNetwork {
  nationalHighways: number; // km
  stateHighways: number; // km
  mdrs: string; // extensive
}

// ==========================================
// CAMPAIGN CORRIDORS
// ==========================================

export interface CampaignCorridor {
  name: string;
  corridorType: "primary" | "east-west" | "south-malwa" | "amritsar-pathankot" | "tricity-south" | "border-belt";
  nh: string;
  route: string;
  distance: number; // km
  travelTime: string;
  constituenciesServed: string;
  districtsServed?: string;
}

export interface InterConstituencyDistance {
  type: "same-district" | "adjacent-districts" | "cross-region-malwa-majha" | "cross-region-malwa-doaba";
  distanceRange: string; // km
  travelTime: string;
}

// ==========================================
// CAMPAIGN CIRCUITS
// ==========================================

export interface CampaignCircuit {
  id: number;
  name: string;
  region: "Malwa" | "Majha" | "Doaba" | "Tricity";
  constituencies: number;
  hub: string;
  route: string[];
  coverage: string;
  circuitDuration: string;
  strategicPriority: "CRITICAL" | "HIGH" | "MEDIUM-HIGH" | "MEDIUM";
  strategicNote: string;
}

// ==========================================
// RALLY VENUES
// ==========================================

export interface RallyVenue {
  name: string;
  location: string;
  region: string;
  capacity: string;
  accessibility: string;
  notes: string;
}

export interface OpenGroundType {
  type: "mandi" | "gurdwara" | "dussehra-ground" | "canal-bank" | "school-ground";
  description: string;
  capacityRange: string;
  availability: string;
}

export interface AccessibilityConstraint {
  factor: string;
  impact: string;
  mitigation: string;
}

// ==========================================
// BOOTH-LEVEL D2D CLUSTERING
// ==========================================

export interface BoothDistribution {
  areaType: "urban" | "semi-urban" | "rural" | "border-remote";
  avgBoothsPerConstituency: string;
  votersPerBooth: string;
  d2dTimePerBooth: string;
}

export interface D2DClusterType {
  type: "high-density-urban" | "village-cluster" | "scattered-rural" | "border-belt";
  description: string;
  boothDensity: string;
  teamSize: string;
  completionTime: string;
}

export interface D2DPhase {
  phase: number;
  activity: string;
  duration: string;
  teamSize: string;
  targetBooths: string;
  totalBooths: number;
}

export interface D2DRequirements {
  constituencyBooths: number;
  totalDays: string;
  volunteers: number;
  statewideVolunteers: string;
}

// ==========================================
// VEHICLE & LOGISTICS
// ==========================================

export interface VehicleFleet {
  vehicleType: string;
  purpose: string;
  qtyNeeded: number;
  fuelType: string;
  range: string;
  dailyCost: string;
}

export interface FuelBudget {
  period: string;
  cost: string;
  note: string;
}

export interface GISDashboardLayer {
  layer: string;
  dataSource: string;
  updateFrequency: string;
}

// ==========================================
// MARKET DAY & FESTIVAL CALENDAR
// ==========================================

export interface MarketDay {
  day: string;
  keyMandiTowns: string;
  constituencies: string;
  bestCampaignActivity: string;
}

export interface FestivalEvent {
  date: string;
  festival: string;
  regionFocus: string;
  campaignOpportunity: string;
  expectedAttendance?: string;
}

// ==========================================
// LEADER TIME ALLOCATION
// ==========================================

export interface LeaderCategory {
  category: string;
  role: string;
  availableDays: string;
  constituencyAllocation: string;
  priority: string;
}

export interface RegionalTimeAllocation {
  region: string;
  seats: number;
  congress2022: number;
  target2027: string;
  campaignerDaysAllocation: string;
}

export interface SeatTarget {
  region: "Malwa" | "Majha" | "Doaba";
  totalSeats: number;
  congress2022: number;
  target2027: string;
  gainsNeeded: string;
}

// ==========================================
// NIGHT-HALT HUBS
// ==========================================

export interface NightHaltHub {
  hubCity: string;
  region: string;
  constituenciesWithin60min: number;
  hotelsDharamshalas: string;
  strategicValue: string;
}

export interface NightHaltRotation {
  day: number;
  morning: string;
  afternoon: string;
  eveningRally: string;
  nightHalt: string;
}

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

export interface SpatialAdvantage {
  title: string;
  description: string;
}

export interface SpatialChallenge {
  title: string;
  description: string;
}

export interface PriorityAction {
  number: number;
  action: string;
  deadline: string;
}

// ==========================================
// VERIFICATION & GAPS
// ==========================================

export interface VerificationItem {
  item: string;
  status: "NOT_BUILT" | "NOT_COLLECTED" | "VERIFICATION_NEEDED" | "NOT_AVAILABLE" | "NOT_INTEGRATED";
  actionRequired: string;
}

// ==========================================
// DATA VINTAGE & METADATA
// ==========================================

export interface CampaignSpatialMetadata {
  pillar: string;
  task: string;
  date: string;
  status: string;
  dataVintage: string;
  sources: string;
}
