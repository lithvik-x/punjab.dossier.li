// Campaign Spatial Optimization Framework Data
// Source: MP1-foundational/geography/campaign-spatial.md
// Pillar: MP1 — Foundational Scan > Geography | Task: T-MP1-GEO-014

import type {
  PunjabGeography,
  CampaignCorridor,
  InterConstituencyDistance,
  CampaignCircuit,
  RallyVenue,
  OpenGroundType,
  AccessibilityConstraint,
  BoothDistribution,
  D2DClusterType,
  D2DPhase,
  D2DRequirements,
  VehicleFleet,
  FuelBudget,
  GISDashboardLayer,
  MarketDay,
  FestivalEvent,
  LeaderCategory,
  RegionalTimeAllocation,
  SeatTarget,
  NightHaltHub,
  NightHaltRotation,
  SpatialAdvantage,
  SpatialChallenge,
  PriorityAction,
  VerificationItem,
  CampaignSpatialMetadata,
} from "@/types/campaign-spatial-types";

// ==========================================
// METADATA
// ==========================================

export const CAMPAIGN_SPATIAL_METADATA: CampaignSpatialMetadata = {
  pillar: "MP1 — Foundational Scan > Geography",
  task: "T-MP1-GEO-014",
  date: "19 May 2026",
  status: "COMPLETE",
  dataVintage: "2024-2026 (web research), transport infrastructure data from GEO-009, constituency profiles from GEO-013",
  sources: "8 search queries, Wikipedia (constituency/election data), CEO Punjab, World Bank (Punjab road network), ECI handbooks, Geoapify (distance matrix methodology)",
};

// ==========================================
// PUNJAB GEOGRAPHY
// ==========================================

export const PUNJAB_GEOGRAPHY: PunjabGeography = {
  area: 50362,
  constituencies: 117,
  districts: 23,
  averageElevation: 250,
  roadNetwork: {
    nationalHighways: 4239,
    stateHighways: 1100,
    mdrs: "extensive",
  },
};

// ==========================================
// CAMPAIGN CORRIDORS
// ==========================================

export const CAMPAIGN_CORRIDORS: CampaignCorridor[] = [
  {
    name: "Primary Spine",
    corridorType: "primary",
    nh: "NH-44",
    route: "Delhi-Ambala-Ludhiana-Jalandhar-Amritsar",
    distance: 450,
    travelTime: "7-8 hrs",
    constituenciesServed: "Ludhiana(14), Jalandhar(11), Amritsar(11)",
    districtsServed: "districts",
  },
  {
    name: "East-West Malwa",
    corridorType: "east-west",
    nh: "NH-148A/SH network",
    route: "Ludhiana-Moga-Bathinda",
    distance: 160,
    travelTime: "3-3.5 hrs",
    constituenciesServed: "Moga, Faridkot, Bathinda belt",
  },
  {
    name: "South Malwa",
    corridorType: "south-malwa",
    nh: "NH-62/SH",
    route: "Bathinda-Mansa-Sangrur",
    distance: 120,
    travelTime: "2.5 hrs",
    constituenciesServed: "Mansa, Barnala, Sangrur belt",
  },
  {
    name: "Amritsar-Pathankot",
    corridorType: "amritsar-pathankot",
    nh: "NH-54",
    route: "Amritsar-Gurdaspur-Pathankot",
    distance: 110,
    travelTime: "2-2.5 hrs",
    constituenciesServed: "Majha north (7+3 seats)",
  },
  {
    name: "Tricity-South",
    corridorType: "tricity-south",
    nh: "NH-205A",
    route: "Chandigarh-Mohali-Patiala",
    distance: 70,
    travelTime: "1.5 hrs",
    constituenciesServed: "SAS Nagar, Patiala, Fatehgarh Sahib",
  },
  {
    name: "Border Belt",
    corridorType: "border-belt",
    nh: "SH network",
    route: "Firozpur-Fazilka-Muktsar",
    distance: 100,
    travelTime: "2-2.5 hrs",
    constituenciesServed: "Southwest Malwa border seats",
  },
];

export const INTER_CONSTITUENCY_DISTANCES: InterConstituencyDistance[] = [
  { type: "same-district", distanceRange: "15-30", travelTime: "30-45 min" },
  { type: "adjacent-districts", distanceRange: "40-80", travelTime: "1-1.5 hrs" },
  { type: "cross-region-malwa-majha", distanceRange: "120-200", travelTime: "2.5-4 hrs" },
  { type: "cross-region-malwa-doaba", distanceRange: "80-150", travelTime: "1.5-3 hrs" },
];

// ==========================================
// CAMPAIGN CIRCUITS
// ==========================================

export const CAMPAIGN_CIRCUITS: CampaignCircuit[] = [
  {
    id: 1,
    name: "Central Malwa",
    region: "Malwa",
    constituencies: 25,
    hub: "Ludhiana",
    route: [
      "Ludhiana",
      "Khanna",
      "Samrala",
      "Moga",
      "Barnala",
      "Sangrur",
      "Dhuri",
      "Malerkotla",
      "Ahmedgarh",
      "Ludhiana",
    ],
    coverage: "Ludhiana (14), Moga (3), Barnala (2), Sangrur (7), Malerkotla (1), Fatehgarh Sahib (4)",
    circuitDuration: "3-4 days",
    strategicPriority: "HIGH",
    strategicNote: "Congress won 0 of 14 Ludhiana seats in 2022; this is the largest recovery opportunity",
  },
  {
    id: 2,
    name: "Southern Malwa",
    region: "Malwa",
    constituencies: 20,
    hub: "Bathinda",
    route: [
      "Bathinda",
      "Mansa",
      "Budhlada",
      "Maur",
      "Rampura Phul",
      "Talwandi Sabo",
      "Muktsar",
      "Malout",
      "Fazilka",
      "Abohar",
      "Balluana",
      "Bathinda",
    ],
    coverage: "Bathinda (5), Mansa (3), Muktsar (4), Fazilka (5), parts of Faridkot",
    circuitDuration: "3-4 days",
    strategicPriority: "CRITICAL",
    strategicNote: "Congress must break AAP's rural Malwa dominance",
  },
  {
    id: 3,
    name: "Northern Malwa & Tricity",
    region: "Tricity",
    constituencies: 24,
    hub: "Patiala",
    route: [
      "Patiala",
      "Rajpura",
      "SAS Nagar",
      "Dera Bassi",
      "Kharar",
      "Fatehgarh Sahib",
      "Bassi Pathana",
      "Samana",
      "Patran",
      "Shutrana",
      "Patiala",
    ],
    coverage: "Patiala (7), SAS Nagar (4), Fatehgarh Sahib (4), Rupnagar (4)",
    circuitDuration: "3 days",
    strategicPriority: "HIGH",
    strategicNote: "Patiala is Congress's strongest region; must consolidate",
  },
  {
    id: 4,
    name: "Majha Circuit",
    region: "Majha",
    constituencies: 25,
    hub: "Amritsar",
    route: [
      "Amritsar",
      "Tarn Taran",
      "Khem Karan",
      "Patti",
      "Bhoa",
      "Pathankot",
      "Gurdaspur",
      "Batala",
      "Dera Baba Nanak",
      "Ajnala",
      "Amritsar",
    ],
    coverage: "Amritsar (11), Tarn Taran (4), Gurdaspur (7), Pathankot (3)",
    circuitDuration: "3-4 days",
    strategicPriority: "HIGH",
    strategicNote: "Majha has strong Congress history; border issues are potent campaign themes",
  },
  {
    id: 5,
    name: "Doaba Circuit",
    region: "Doaba",
    constituencies: 23,
    hub: "Jalandhar",
    route: [
      "Jalandhar",
      "Phagwara",
      "Kapurthala",
      "Sultanpur Lodhi",
      "Nawanshahr",
      "Balachaur",
      "Hoshiarpur",
      "Dasuya",
      "Mukerian",
      "Jalandhar",
    ],
    coverage: "Jalandhar (11), Kapurthala (4), SBS Nagar (3), Hoshiarpur (5)",
    circuitDuration: "3 days",
    strategicPriority: "MEDIUM-HIGH",
    strategicNote: "Doaba's NRI influence and Dalit population make it volatile",
  },
];

// ==========================================
// RALLY VENUES
// ==========================================

export const RALLY_VENUES: RallyVenue[] = [
  {
    name: "Guru Nanak Stadium",
    location: "Ludhiana",
    region: "Malwa",
    capacity: "15,000-20,000",
    accessibility: "NH-44, railway station 2 km",
    notes: "Best for Central Malwa rallies; Congress held massive rallies here pre-2017",
  },
  {
    name: "War Heroes Stadium",
    location: "Amritsar",
    region: "Majha",
    capacity: "10,000-15,000",
    accessibility: "NH-54, airport 10 km",
    notes: "Prime venue for Majha outreach",
  },
  {
    name: "Burlton Park/Gandhi Stadium",
    location: "Jalandhar",
    region: "Doaba",
    capacity: "10,000-12,000",
    accessibility: "NH-44, railway station 3 km",
    notes: "Doaba's main rally ground",
  },
  {
    name: "Multipurpose Sports Stadium",
    location: "Bathinda",
    region: "Malwa",
    capacity: "8,000-10,000",
    accessibility: "SH network",
    notes: "Key for southern Malwa mobilization",
  },
  {
    name: "Patiala Polo Ground",
    location: "Patiala",
    region: "Malwa",
    capacity: "8,000-10,000",
    accessibility: "Well-connected",
    notes: "Historic Congress rally venue",
  },
  {
    name: "Chandigarh Sector 25 Ground",
    location: "Chandigarh",
    region: "Tricity",
    capacity: "20,000+",
    accessibility: "NH-44, airport 10 km",
    notes: "State-level mega rallies; NOT in Punjab but serves Tricity",
  },
];

export const OPEN_GROUND_TYPES: OpenGroundType[] = [
  {
    type: "mandi",
    description: "Grain market yards",
    capacityRange: "2,000-5,000",
    availability: "Non-procurement season (avoid Apr-May, Oct-Nov)",
  },
  {
    type: "gurdwara",
    description: "Gurdwara courtyards",
    capacityRange: "Variable",
    availability: "Year-round; politically sensitive but high footfall",
  },
  {
    type: "dussehra-ground",
    description: "Ramlila grounds",
    capacityRange: "2,000-10,000",
    availability: "Available in most towns",
  },
  {
    type: "canal-bank",
    description: "Canal bank areas",
    capacityRange: "Variable",
    availability: "Often used for informal gatherings; access controlled by irrigation dept",
  },
  {
    type: "school-ground",
    description: "School/college grounds (after hours)",
    capacityRange: "1,000-3,000",
    availability: "Available in every block; useful for small ward-level meetings",
  },
];

export const ACCESSIBILITY_CONSTRAINTS: AccessibilityConstraint[] = [
  {
    factor: "Border permits",
    impact: "Inner Line Permit required for 0-5 km from IB in Gurdaspur, Tarn Taran, Firozpur, Fazilka",
    mitigation: "Apply 72 hrs in advance; coordinate with BSF",
  },
  {
    factor: "Fog season (Dec-Jan)",
    impact: "Severe visibility reduction; delays convoys 2-4 hrs",
    mitigation: "Schedule rallies after 11 AM; use GPS routing",
  },
  {
    factor: "Harvest season roads",
    impact: "Grain-laden trolleys congest SHs/MDRs during Apr-May, Oct-Nov",
    mitigation: "Use NH corridors; avoid mandi approach roads",
  },
  {
    factor: "Rainy season (Jul-Sep)",
    impact: "Rural roads become muddy; some border roads flooded",
    mitigation: "All-weather NH/SH routes only; track IMD forecasts",
  },
];

// ==========================================
// BOOTH-LEVEL D2D CLUSTERING
// ==========================================

export const BOOTH_DISTRIBUTION: BoothDistribution[] = [
  {
    areaType: "urban",
    avgBoothsPerConstituency: "250-350",
    votersPerBooth: "800-1,000",
    d2dTimePerBooth: "2-3 hrs (apartment/colony coverage)",
  },
  {
    areaType: "semi-urban",
    avgBoothsPerConstituency: "200-250",
    votersPerBooth: "900-1,100",
    d2dTimePerBooth: "3-4 hrs (mixed urban-rural)",
  },
  {
    areaType: "rural",
    avgBoothsPerConstituency: "150-200",
    votersPerBooth: "1,000-1,200",
    d2dTimePerBooth: "4-6 hrs (village-to-village travel)",
  },
  {
    areaType: "border-remote",
    avgBoothsPerConstituency: "120-160",
    votersPerBooth: "800-1,000",
    d2dTimePerBooth: "6-8 hrs (sparse, poor roads)",
  },
];

export const D2D_CLUSTER_TYPES: D2DClusterType[] = [
  {
    type: "high-density-urban",
    description: "10+ booths within 2 km radius",
    boothDensity: "High",
    teamSize: "4-6 volunteers",
    completionTime: "1-2 days",
  },
  {
    type: "village-cluster",
    description: "3-5 booths per village cluster with 1-3 km between villages",
    boothDensity: "Medium",
    teamSize: "Motorcycle teams",
    completionTime: "1 village per 3-4 hours",
  },
  {
    type: "scattered-rural",
    description: "1-2 booths per area with 5-10 km gaps",
    boothDensity: "Low",
    teamSize: "Dedicated vehicle teams",
    completionTime: "Full-day circuits",
  },
  {
    type: "border-belt",
    description: "Security constraints; limited campaigning hours",
    boothDensity: "Sparse",
    teamSize: "Coordinated with local administration",
    completionTime: "Variable",
  },
];

export const D2D_PHASES: D2DPhase[] = [
  { phase: 1, activity: "Cluster mapping + volunteer assignment", duration: "3 days", teamSize: "5 data analysts", targetBooths: "200 booths -> 40 clusters", totalBooths: 40 },
  { phase: 2, activity: "Urban cluster coverage", duration: "5-7 days", teamSize: "8 teams of 4", targetBooths: "~80 urban booths", totalBooths: 80 },
  { phase: 3, activity: "Village cluster coverage", duration: "10-14 days", teamSize: "12 motorcycle teams", targetBooths: "~100 rural booths", totalBooths: 100 },
  { phase: 4, activity: "Scattered/border booth mopup", duration: "5-7 days", teamSize: "6 vehicle teams", targetBooths: "~20 remote booths", totalBooths: 20 },
];

export const D2D_REQUIREMENTS: D2DRequirements = {
  constituencyBooths: 200,
  totalDays: "25-30 days",
  volunteers: 80,
  statewideVolunteers: "9,000-10,000",
};

// ==========================================
// VEHICLE & LOGISTICS
// ==========================================

export const VEHICLE_FLEET: VehicleFleet[] = [
  {
    vehicleType: "LED Rath (campaign van)",
    purpose: "Mobile rally, audio-visual",
    qtyNeeded: 5,
    fuelType: "Diesel",
    range: "300 km/day",
    dailyCost: "Rs 8,000-12,000",
  },
  {
    vehicleType: "SUV/Innova (leader convoy)",
    purpose: "Star campaigner transport",
    qtyNeeded: 15,
    fuelType: "Diesel",
    range: "400 km/day",
    dailyCost: "Rs 5,000-7,000",
  },
  {
    vehicleType: "Motorcycle squad",
    purpose: "D2D rural reach",
    qtyNeeded: 200,
    fuelType: "Petrol",
    range: "100 km/day",
    dailyCost: "Rs 500/bike",
  },
  {
    vehicleType: "Tempo Traveller",
    purpose: "Volunteer/team transport",
    qtyNeeded: 30,
    fuelType: "Diesel",
    range: "300 km/day",
    dailyCost: "Rs 3,000-4,000",
  },
  {
    vehicleType: "Sound system truck",
    purpose: "Rally PA system",
    qtyNeeded: 5,
    fuelType: "Diesel",
    range: "200 km/day",
    dailyCost: "Rs 6,000-8,000",
  },
];

export const FUEL_BUDGET: FuelBudget[] = [
  {
    period: "Monthly (90-day campaign)",
    cost: "Rs 25-35 lakh/month",
    note: "Estimated for 5-circuit parallel operation",
  },
  {
    period: "90-day campaign total",
    cost: "Rs 75 lakh to Rs 1 crore",
    note: "Border area fuel slightly more expensive (+Rs 2-3/litre in remote areas)",
  },
];

export const GIS_DASHBOARD_LAYERS: GISDashboardLayer[] = [
  { layer: "Booth coverage map", dataSource: "D2D team GPS check-ins", updateFrequency: "Real-time" },
  { layer: "Rally/Event locations", dataSource: "Event management system", updateFrequency: "Daily" },
  { layer: "Leader movement tracker", dataSource: "Convoy GPS", updateFrequency: "Real-time" },
  { layer: "Media coverage heat map", dataSource: "Social listening + news tracking", updateFrequency: "Daily" },
  { layer: "Opposition activity map", dataSource: "Field intelligence reports", updateFrequency: "Every 6 hrs" },
  { layer: "Voter sentiment overlay", dataSource: "Survey/poll data", updateFrequency: "Weekly" },
];

// ==========================================
// MARKET DAY & FESTIVAL CALENDAR
// ==========================================

export const MARKET_DAYS: MarketDay[] = [
  { day: "Monday", keyMandiTowns: "Barnala, Malerkotla, Dhuri", constituencies: "Sangrur belt", bestCampaignActivity: "Nukkad natak, leaflet distribution" },
  { day: "Tuesday", keyMandiTowns: "Moga, Faridkot, Muktsar", constituencies: "Southwest Malwa", bestCampaignActivity: "Leader padyatra through mandi" },
  { day: "Wednesday", keyMandiTowns: "Bathinda, Mansa, Fazilka", constituencies: "Southern Malwa", bestCampaignActivity: "Mini-rally at mandi entrance" },
  { day: "Thursday", keyMandiTowns: "Amritsar, Tarn Taran, Batala", constituencies: "Majha", bestCampaignActivity: "Auto-rickshaw rally through mandi" },
  { day: "Friday", keyMandiTowns: "Jalandhar, Phagwara, Nawanshahr", constituencies: "Doaba", bestCampaignActivity: "Stall + voter registration" },
  { day: "Saturday", keyMandiTowns: "Ludhiana, Khanna, Doraha", constituencies: "Central Malwa", bestCampaignActivity: "Cycle rally + farmer interaction" },
  { day: "Sunday", keyMandiTowns: "Patiala, Rajpura, Mohali", constituencies: "Tricity/Patiala", bestCampaignActivity: "Door-to-door (non-market day; residential areas)" },
];

export const FESTIVAL_CALENDAR: FestivalEvent[] = [
  { date: "Oct 2026", festival: "Dussehra", regionFocus: "Statewide", campaignOpportunity: "Ramlila ground rallies (all towns)" },
  { date: "Nov 2026", festival: "Diwali/Bandi Chhor Divas", regionFocus: "Statewide", campaignOpportunity: "Sikh community events; Gurdwara visits" },
  { date: "Nov 2026", festival: "Guru Nanak Jayanti", regionFocus: "Sultanpur Lodhi focus", campaignOpportunity: "Massive gathering (500,000+); NRI presence" },
  { date: "Dec 2026", festival: "Shaheedi Jor Mela", regionFocus: "Fatehgarh Sahib", campaignOpportunity: "200,000+ attendance; major Sikh event", expectedAttendance: "200,000+" },
  { date: "Jan 2027", festival: "Lohri", regionFocus: "Statewide", campaignOpportunity: "Village bonfire events; youth mobilization" },
  { date: "Jan 2027", festival: "Maghi Mela", regionFocus: "Muktsar", campaignOpportunity: "100,000+; politically significant gathering", expectedAttendance: "100,000+" },
  { date: "Feb 2027", festival: "Basant Panchami", regionFocus: "Statewide", campaignOpportunity: "Kite festivals; outdoor campaign events" },
];

// ==========================================
// LEADER TIME ALLOCATION
// ==========================================

export const LEADER_CATEGORIES: LeaderCategory[] = [
  {
    category: "CM Face / State President",
    role: "Major rallies, media events, debates",
    availableDays: "60-70 of 90 campaign days",
    constituencyAllocation: "50-60 constituencies (1 rally per 1-2 days)",
    priority: "Target + swing seats",
  },
  {
    category: "Star Campaigners (5-8)",
    role: "Regional rallies, community events",
    availableDays: "40-50 days each",
    constituencyAllocation: "15-20 constituencies each",
    priority: "Caste/community-specific outreach",
  },
  {
    category: "MPs / Senior Leaders (10-15)",
    role: "Roadshows, corner meetings",
    availableDays: "30-40 days",
    constituencyAllocation: "8-10 constituencies each",
    priority: "Home district + neighboring seats",
  },
  {
    category: "Local MLA Candidates",
    role: "D2D, nukkad sabhas, padyatras",
    availableDays: "Full 90 days",
    constituencyAllocation: "Own constituency + 1-2 neighbors",
    priority: "Own race priority",
  },
];

export const REGIONAL_TIME_ALLOCATION: RegionalTimeAllocation[] = [
  { region: "Malwa", seats: 69, congress2022: 8, target2027: "35-40", campaignerDaysAllocation: "55% of CM Face time; 50% of star campaigner time" },
  { region: "Majha", seats: 25, congress2022: 6, target2027: "12-14", campaignerDaysAllocation: "25% of CM Face time; 25% of star campaigner time" },
  { region: "Doaba", seats: 23, congress2022: 4, target2027: "10-12", campaignerDaysAllocation: "20% of CM Face time; 25% of star campaigner time" },
];

export const SEAT_TARGETS: SeatTarget[] = [
  { region: "Malwa", totalSeats: 69, congress2022: 8, target2027: "35-40", gainsNeeded: "27-32" },
  { region: "Majha", totalSeats: 25, congress2022: 6, target2027: "12-14", gainsNeeded: "6-8" },
  { region: "Doaba", totalSeats: 23, congress2022: 4, target2027: "10-12", gainsNeeded: "6-8" },
];

// ==========================================
// NIGHT-HALT HUBS
// ==========================================

export const NIGHT_HALT_HUBS: NightHaltHub[] = [
  { hubCity: "Ludhiana", region: "Central Malwa", constituenciesWithin60min: 20, hotelsDharamshalas: "Excellent (100+ hotels)", strategicValue: "Base for Central Malwa Circuit" },
  { hubCity: "Amritsar", region: "Majha", constituenciesWithin60min: 15, hotelsDharamshalas: "Excellent (80+ hotels)", strategicValue: "Base for Majha Circuit" },
  { hubCity: "Jalandhar", region: "Doaba", constituenciesWithin60min: 15, hotelsDharamshalas: "Good (60+ hotels)", strategicValue: "Base for Doaba Circuit" },
  { hubCity: "Bathinda", region: "South Malwa", constituenciesWithin60min: 10, hotelsDharamshalas: "Moderate (25+ hotels)", strategicValue: "Forward base for Southern Malwa" },
  { hubCity: "Patiala", region: "North Malwa", constituenciesWithin60min: 12, hotelsDharamshalas: "Good (40+ hotels)", strategicValue: "Base for Tricity-Patiala Circuit" },
  { hubCity: "Sangrur", region: "Central Malwa", constituenciesWithin60min: 10, hotelsDharamshalas: "Moderate", strategicValue: "Alternate base for Malwa interior" },
  { hubCity: "Gurdaspur", region: "Majha", constituenciesWithin60min: 8, hotelsDharamshalas: "Limited", strategicValue: "Forward base for border Majha" },
];

export const NIGHT_HALT_ROTATION: NightHaltRotation[] = [
  { day: 1, morning: "Ludhiana (3 constituencies)", afternoon: "Moga (2 constituencies)", eveningRally: "Moga city rally", nightHalt: "Moga/Barnala" },
  { day: 2, morning: "Barnala (2 constituencies)", afternoon: "Sangrur (3 constituencies)", eveningRally: "Sangrur rally", nightHalt: "Sangrur/Sunam" },
  { day: 3, morning: "Malerkotla (1 constituency)", afternoon: "Ahmedgarh + Fatehgarh Sahib", eveningRally: "Fatehgarh Sahib rally", nightHalt: "Fatehgarh Sahib" },
  { day: 4, morning: "Rajpura + SAS Nagar", afternoon: "Mohali (2 constituencies)", eveningRally: "Mohali rally", nightHalt: "Chandigarh/Mohali" },
  { day: 5, morning: "Patiala rural (3 constituencies)", afternoon: "Patiala urban (2 constituencies)", eveningRally: "Patiala mega rally", nightHalt: "Patiala" },
];

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

export const SPATIAL_ADVANTAGES: SpatialAdvantage[] = [
  {
    title: "Patiala-Ambala-Amritsar Corridor",
    description: "Congress has deep historical roots along this GT Road alignment; rallies here reinforce brand recall.",
  },
  {
    title: "Doaba NRI Network",
    description: "Diaspora families can be activated through coordinated visits; plan major Doaba rallies during Dec-Jan NRI peak season.",
  },
  {
    title: "Fatehgarh Sahib Religious Circuit",
    description: "Shaheedi Jor Mela (Dec) is a natural Congress mobilization event — Sikh heritage messaging resonates.",
  },
];

export const SPATIAL_CHALLENGES: SpatialChallenge[] = [
  {
    title: "Southern Malwa Access",
    description: "Bathinda-Mansa-Muktsar belt was AAP's strongest region; limited local Congress cadre requires heavy external campaigner deployment.",
  },
  {
    title: "Border Belt Permit Delays",
    description: "Firozpur, Tarn Taran, Gurdaspur border areas require advance security coordination — plan border rallies 2 weeks ahead.",
  },
  {
    title: "Ludhiana Urban",
    description: "Congress lost all 14 Ludhiana seats; requires sustained urban campaign (not just rally-based) with D2D focus on industrial worker colonies.",
  },
  {
    title: "Rural Road Network Degradation",
    description: "Interior Malwa village roads have deteriorated under AAP; Congress campaign vehicles need SUV capability for these areas.",
  },
];

export const PRIORITY_ACTIONS: PriorityAction[] = [
  { number: 1, action: "Build the 117x117 distance matrix using Google Maps API before campaign season", deadline: "Before campaign season (est. cost: Rs 50,000-1,00,000)" },
  { number: 2, action: "Secure 5 regional campaign offices in Ludhiana, Amritsar, Jalandhar, Bathinda, Patiala", deadline: "September 2026" },
  { number: 3, action: "Procure/requisition 5 LED Raths and equip with GPS tracking", deadline: "October 2026" },
  { number: 4, action: "Recruit 10,000 D2D volunteers with motorcycle access — train in booth-cluster routing", deadline: "November 2026" },
  { number: 5, action: "Negotiate venue bookings at 7 major stadiums and 100+ mandi grounds", deadline: "November 2026" },
  { number: 6, action: "Obtain border area permits for campaign teams in all 6 border districts", deadline: "Well in advance" },
];

// ==========================================
// VERIFICATION & GAPS
// ==========================================

export const VERIFICATION_ITEMS: VerificationItem[] = [
  { item: "Exact 117x117 distance matrix with travel times", status: "NOT_BUILT", actionRequired: "Commission GIS team to build using OSRM/Google Maps API" },
  { item: "Booth-level voter concentration data from 2022/2025 rolls", status: "NOT_COLLECTED", actionRequired: "Request from CEO Punjab; cluster analysis pending" },
  { item: "Specific mandi operating day schedules by district", status: "VERIFICATION_NEEDED", actionRequired: "Obtain from Punjab Mandi Board" },
  { item: "Stadium/ground booking procedures and costs", status: "VERIFICATION_NEEDED", actionRequired: "Contact district administrations" },
  { item: "Security clearance timelines for border area rallies", status: "VERIFICATION_NEEDED", actionRequired: "Coordinate with Punjab Police/BSF liaison" },
  { item: "Fuel price projections for Jan-Feb 2027", status: "NOT_AVAILABLE", actionRequired: "Budget at current rates + 10% buffer" },
  { item: "Opposition campaign spatial patterns (AAP/SAD/BJP)", status: "NOT_COLLECTED", actionRequired: "Track via field intelligence; map on GIS dashboard" },
  { item: "Real-time traffic/congestion data for route planning", status: "NOT_INTEGRATED", actionRequired: "Integrate Google Maps live traffic API" },
  { item: "Helipad locations for VIP helicopter movement", status: "NOT_COLLECTED", actionRequired: "List from District Collectors; AAP CM used helicopter extensively" },
  { item: "Night-halt security assessment for each hub", status: "VERIFICATION_NEEDED", actionRequired: "Coordinate with state intelligence" },
];

// ==========================================
// KEY STATISTICS
// ==========================================

export const CAMPAIGN_SPATIAL_STATS = {
  punjabArea: "50,362 sq km",
  constituencies: 117,
  districts: 23,
  pollingStations: "23,500+",
  avgBoothsPerConstituency: "~200",
  votersPerBooth: "~900-1,000",
  totalD2DVolunteersNeeded: "9,000-10,000",
  vehicleFleetLEDaths: 5,
  vehicleFleetSUVs: "10-15",
  vehicleFleetMotorcycles: "200+",
  vehicleFleetTempoTravellers: "20-30",
  vehicleFleetSoundTrucks: 5,
  monthlyFuelBudget: "Rs 25-35 lakh",
  campaignFuelBudget: "Rs 75 lakh to Rs 1 crore",
  majorStadiumsAvailable: 7,
  mandiGroundsToBook: "100+",
  campaignCircuits: 5,
  borderDistricts: 6,
} as const;
