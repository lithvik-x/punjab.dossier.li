// SC Caste Demographics & Sub-Group Mapping Types for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/sc-caste-mapping.md
// Date: 19 May 2026 | Data Currency: 2011 Census base, supplemented with 2022-2026 reports

// ==========================================
// POPULATION OVERVIEW
// ==========================================

export interface SCPopulationOverview {
  totalSCPopulation: number;
  scShareOfStatePopulation: number;
  ruralSCPercent: number;
  urbanSCPercent: number;
  scSikhPercent: number;
  scHinduPercent: number;
  scChristianPercent: number;
  totalSCReservedAssemblySeats: number;
  totalSCReservedParliamentarySeats: number;
}

// ==========================================
// MAJOR SC SUB-GROUPS
// ==========================================

export interface SCSubGroup {
  name: string;
  percentOfSCPopulation: number;
  approximatePopulation: number;
  religion: string;
  traditionalOccupation: string;
  regionConcentration: string;
}

export interface ChamarCluster {
  totalPopulation: number;
  adDharmi: number;
  sikhRamdasia: number;
  hinduRamdasiaRavidasia: number;
  economicAdvantage: string;
  politicalDominance: string;
  keyInstitution: string;
}

export interface MazhabiSikhProfile {
  percentOfDalitPopulation: number;
  religion: string;
  alternateName: string;
  geography: string[];
  socioEconomicStatus: string;
  militaryTradition: string;
  politicalAllegiance: string;
  subCategorizationStance: string;
}

export interface ValmikiProfile {
  percentOfSCPopulation: number;
  approximatePopulation: number;
  religion: string;
  geography: string[];
  socioEconomicStatus: string;
  keyReligiousLeader: string;
  politicalAllegiance: string;
  subCategorizationStance: string;
}

// ==========================================
// DISTRICT-WISE SC POPULATION
// ==========================================

export interface DistrictSCData {
  district: string;
  scPercentOfDistrict: number;
  region: "Doaba" | "Majha" | "Malwa";
  dominantSCSubGroup: string;
}

// ==========================================
// REGIONAL DISTRIBUTION
// ==========================================

export interface RegionalSCDistribution {
  region: string;
  totalSeats: number;
  scReservedSeats: number;
  scPopulationShare: number;
  dominantSCSubGroup: string;
}

// ==========================================
// SC-RESERVED ASSEMBLY CONSTITUENCIES
// ==========================================

export interface SCReservedConstituency {
  name: string;
  district: string;
  likelyDominantSCGroup: string;
  winner2022: string;
  region: "Doaba" | "Majha" | "Malwa";
  notes?: string;
}

export interface DoabaReservedSeats {
  seats: SCReservedConstituency[];
  total: number;
}

export interface MajhaReservedSeats {
  seats: SCReservedConstituency[];
  total: number;
}

export interface MalwaReservedSeats {
  seats: SCReservedConstituency[];
  total: number;
}

// ==========================================
// HISTORICAL POLITICAL PATTERNS
// ==========================================

export interface PartyPerformanceInReservedSeats {
  election: string;
  congress: number;
  aap: number;
  sadBjp: number;
  bsp: number;
  others: number;
}

export interface HistoricalPoliticalDynamics {
  congressTraditionalBase: string;
  adDharmiMovementLegacy: string;
  bspInterlude: string;
  aapTsunami2022: string;
  partialCorrection2024: string;
}

// ==========================================
// INTER-SC DYNAMICS
// ==========================================

export interface SCFaultLine {
  dimension: string;
  chamarOrigin: string;
  mazhabiValmiki: string;
}

export interface SupremeCourtVerdictImpact {
  ruling: string;
  mazhabiValmikiPerspective: string;
  ravidasiaRamdasiaPerspective: string;
  bharatBandhImpact: string;
  politicalImplications: string;
}

export interface DeraInfluence {
  name: string;
  location: string;
  primaryFollowers: string;
  electoralImpact: "HIGH" | "VERY HIGH" | "MODERATE" | "LOW";
  visitedBy?: string[];
  politicalReach?: string;
  note?: string;
}

// ==========================================
// SC VOTER TURNOUT PATTERNS
// ==========================================

export interface SCVoterTurnout {
  metric: string;
  value: string;
  source: string;
  verificationNeeded: boolean;
}

// ==========================================
// SC LEADERSHIP LANDSCAPE
// ==========================================

export interface CurrentSCLeader {
  name: string;
  party: string;
  subGroup: string;
  position: string;
  relevance: string;
}

export interface HistoricalSCLeader {
  name: string;
  subGroup: string;
  legacy: string;
}

// ==========================================
// STRATEGIC IMPLICATIONS FOR CONGRESS
// ==========================================

export interface CongressOpportunity {
  number: number;
  title: string;
  description: string;
}

export interface CongressRisk {
  number: number;
  title: string;
  description: string;
}

export interface CongressStrategy {
  strategy: string;
  targetSubGroup: string;
  approach: string[];
}

export interface TargetSeatMatrix {
  scenario: string;
  seatsNeeded: number;
  feasibility: string;
}

// ==========================================
// DATA GAPS
// ==========================================

export interface DataGap {
  gap: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  method: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface SCCasteMappingData {
  // Metadata
  documentDate: string;
  dataCurrency: string;
  qualityFlag: string;

  // Population Overview
  populationOverview: SCPopulationOverview;

  // Major Sub-Groups
  majorSubGroups: SCSubGroup[];
  chamarCluster: ChamarCluster;
  mazhabiSikhProfile: MazhabiSikhProfile;
  valmikiProfile: ValmikiProfile;

  // Geographic Distribution
  districtWiseSC: DistrictSCData[];
  regionalDistribution: RegionalSCDistribution[];

  // Reserved Constituencies
  doabaReservedSeats: DoabaReservedSeats;
  majhaReservedSeats: MajhaReservedSeats;
  malwaReservedSeats: MalwaReservedSeats;

  // Political Patterns
  partyPerformanceHistory: PartyPerformanceInReservedSeats[];
  historicalDynamics: HistoricalPoliticalDynamics;

  // Inter-SC Dynamics
  faultLines: SCFaultLine[];
  subCategorizationVerdict: SupremeCourtVerdictImpact;
  deraInfluences: DeraInfluence[];

  // Voter Turnout
  voterTurnout: SCVoterTurnout[];

  // Leadership
  currentLeaders: CurrentSCLeader[];
  historicalLeaders: HistoricalSCLeader[];

  // Strategy
  opportunities: CongressOpportunity[];
  risks: CongressRisk[];
  recommendedStrategies: CongressStrategy[];
  targetSeatMatrix: TargetSeatMatrix[];

  // Data Quality
  dataGaps: DataGap[];
}
