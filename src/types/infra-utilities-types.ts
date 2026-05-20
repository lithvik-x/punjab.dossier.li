// Punjab Infrastructure: Power, Water & Telecom Types
// Derived from: research-M2/MP1-foundational/geography/infra-utilities.md
// Research Date: 19 May 2026 | Data Currency: 2025-2026

// ==========================================
// ELECTRICITY (PSPCL) TYPES
// ==========================================

/**
 * Free Electricity Scheme Details
 */
export interface FreeElectricityScheme {
  freeUnitsPerMonth: number; // 300 units
  freeUnitsBiMonthly: number; // 600 units (bi-monthly cycle)
  startDate: string; // "July 2022"
  householdCoverage: number; // ~90% of Punjab households
  targetCategories: string[]; // SC, BC, BPL, domestic broadly
}

/**
 * Pre-Election Tariff Cuts (March 2026)
 */
export interface TariffCuts {
  date: string; // "March 2026"
  electionContext: string; // "ahead of Feb 2027 elections"
  domestic: {
    upTo300Units: number; // 30% reduction
    above300Units: number; // 13% reduction
  };
  agriculture: number; // 20% reduction
  commercial: number; // 11% reduction
}

/**
 * PSPCL Financial/Subsidy Data
 */
export interface PSPCLFinance {
  annualSubsidyFY2024_25: number; // ~10,175 crore
  annualSubsidyFY2025_26: number; // ~20,500 crore (incl. arrears)
  annualSubsidyFY2026_27: number; // 15,200.55 crore (estimated)
  cumulativeUnpaidSubsidy: number; // 11,109.70 crore (to Mar 2025)
  tdLossesClaimed: number; // 10% (down from 12.75%)
  pspsclRating: string; // "A+" (2nd nationally)
  averageCostOfSupply: {
    before: number; // 7.15/unit
    after: number; // 6.15/unit
    reduction: number; // 14% cut
  };
  goindwalSahibThermalPlantPLF: number; // 82%
}

/**
 * Electricity Supply Quality
 */
export interface ElectricitySupplyQuality {
  urbanSupply: string; // near-24-hour in major cities
  ruralSupply: string; // 18-22 hours generally
  peakAgriculturalSeason: string; // "June-July (paddy transplanting)"
  problemAreas: string[]; // ["rural Malwa", "border belt"]
  transformerFailures: string; // chronic issue
  newJobsCreated: number; // 9,593 new jobs in electricity dept
  newInfrastructure: string; // substations and transformers installed
}

/**
 * Solar Pumps & PM-KUSUM
 */
export interface SolarPumpData {
  pmKusumComponentC: {
    pumpsAvailable: number; // 20,000
    hpLimit: number; // up to 7.5 HP
    description: string; // solarisation of grid-connected agriculture pumps
  };
  pmKusumPhaseI: {
    endDate: string; // "March 2026"
    status: string; // ending
  };
  pmKusum20: {
    status: string; // under consideration
  };
  totalTubewells: number; // ~14.5 lakh (1.45 million)
  solarPumpPenetration: {
    percentage: number; // <2%
    status: string; // LOW
  };
}

// ==========================================
// WATER TYPES
// ==========================================

/**
 * Groundwater Crisis Data
 */
export interface GroundwaterCrisis {
  annualRecharge: number; // 18.60 BCM
  annualExtraction: number; // 26.27 BCM
  stageOfExtraction: number; // 156.36%
  nationalAverageExtraction: number; // 60.63%
  blockStatus: {
    totalBlocks: number; // 153
    overExploited: { count: number; percentage: number }; // 111 (72.55%)
    critical: { count: number; percentage: number }; // 10 (6.54%)
    semiCritical: { count: number; percentage: number }; // 15 (9.80%)
    safe: { count: number; percentage: number }; // 17 (11.11%)
  };
  irrigationShareOfExtraction: number; // 94.74% (24.89 BCM)
  waterTableDecline: {
    averageRate: string; // "0.5-1 meter/year"
    worstAreaRate: string; // "up to 46 cm/yr"
  };
  cgwbProjection: string; // "Last drop of usable groundwater in 14 years"
  historicalExtraction: {
    year2000: number; // ~163.76% in 2022
    year2022: number; // 163.76%
    year2025: number; // 156.36% (slight decline)
  };
}

/**
 * Districts with groundwater status
 */
export interface DistrictGroundwaterStatus {
  district: string;
  status: "100% over-exploited" | "100% safe" | "66.67% safe" | "60% safe" | "mixed";
}

/**
 * Contamination Data
 */
export interface ContaminationData {
  uranium: {
    exceedanceRate: number; // 62.50%
    whoSafeLimit: number; // 30 ppb
    status: string; // WORST IN INDIA
    preMonsoon: number; // 53.04%
    postMonsoon: number; // 62.50%
    worstAffectedDistricts: string[]; // Malwa: Bathinda, Mansa, Faridkot, Ferozepur, Muktsar, Fazilka, Sangrur
  };
  arsenic: {
    exceedanceRate: string; // "9.1-9.5%"
    majhaBelt: {
      percentage: number; // 60%
      districts: string[]; // Amritsar, Gurdaspur, Tarn Taran
    };
    otherDistricts: string[]; // Fazilka, Muktsar, Bathinda
  };
  fluoride: {
    exceedanceRate: number; // 11.24%
    safeLimit: number; // 1.5 mg/L
  };
  nitrate: {
    exceedanceRate: number; // 14.6%
    cause: string; // linked to fertiliser overuse
  };
  electricalConductivity: {
    exceedanceRate: number; // 7.01%
    standard: string; // BIS limit
  };
  contaminationHotspots: string[]; // 16 districts identified
}

/**
 * RO Plants Data
 */
export interface ROPlantsData {
  installed: number; // Over 1,000 community RO plants
  funding: string; // World Bank-funded programme
  maintenanceStatus: string; // widespread reports of dysfunctional plants
  maintenanceModel: string; // contracted to private operators, many abandoned
  jjmShift: string; // focus moving to piped surface water schemes but incomplete
}

/**
 * Canal Irrigation Data
 */
export interface CanalIrrigationData {
  areaUnderCanal: {
    year2022: number; // 2.23 million acres
    year2025: number; // 4.78 million acres
  };
  investment: {
    canalRestorationFY2022_25: number; // 4,557 crore
  };
  infrastructure: {
    canalsCleaned: number; // 15,539 km
    watercoursesRestored: number; // 18,349
    locationsReceivingWater: number; // 1,356 (after decades of gap)
  };
  firstTimeCanalWater: {
    year2023: number; // 57 locations
    villages: number; // 47 villages
  };
  tubewellDependency: number; // ~73% of irrigation
  tailEndEquity: {
    issue: string; // head-reach outlets draw 3-6x more water
    recentImprovements: string; // pipelining (UGPL) of last-mile canals
    examples: Array<{ distributary: string; before: number; after: number }>;
    structuralBottlenecks: string; // some distributaries showed only 2% increase
  };
}

/**
 * Jal Jeevan Mission Data
 */
export interface JalJeevanMissionData {
  punjabCoverage2022: string; // ~99% rural tap water coverage (claimed, disputed)
  nationalMilestone: string; // ~75% milestone crossed
  nationalRuralCoverageLate2025: number; // ~81% (15.68 crore households)
  verificationNeeded: string; // CAG audit flagged issues with quality and sustainability
  cagAudit: {
    date: string; // "May 2025"
    finding: string; // Punjab had parallel implementation challenges
    context: string; // already implementing World Bank-funded water project when JJM launched
  };
}

// ==========================================
// TELECOM TYPES
// ==========================================

/**
 * Mobile Coverage Data
 */
export interface MobileCoverageData {
  overallStatus: string; // well-covered compared to many Indian states
  reasons: string[]; // high population density, flat terrain
  majorOperators: string[]; // Jio, Airtel, BSNL, Vi
  networkTechnology: {
    fourG: {
      status: string; // strong in urban areas and along highways
      dominantPlayers: string[]; // Jio and Airtel
    };
    fiveG: {
      status: string; // launched in major cities
      launchYear: string; // since late 2022
      cities: string[]; // Ludhiana, Amritsar, Chandigarh, Jalandhar, Patiala
      providers: string[]; // Jio and Airtel
    };
  };
  darkZones: {
    description: string; // areas with restricted tower installation
    borderBelt: string[]; // Ferozepur, Tarn Taran, Gurdaspur, Pathankot
    kandiBelt: string[]; // Hoshiarpur foothills
    malwaVillages: string; // some Malwa villages
    reason: string; // BSF/proximity to Pakistan border
  };
  bsnl: {
    fourGTowers: number; // 65,000+ nationally
    asOfDate: string; // Jan 2025
    punjabCircleStatus: string; // included but coverage lags Jio/Airtel
  };
  verificationNeeded: string[]; // district-wise 4G dark zone data, call drop rates
}

/**
 * BharatNet & Rural Broadband Data
 */
export interface BharatNetData {
  national: {
    projectGoal: string; // connect 2.5 lakh Gram Panchayats with fiber broadband
    serviceReadyMarch2025: number; // 2,18,347 GPs
  };
  punjab: {
    totalGramPanchayats: number; // 13,000+
    fiberConnectedStatus: string; // majority under Phase I/II
  };
  utilizationGap: {
    issue: string; // fiber reaching villages but last-mile FTTH connections remain low
    nationalCriticism: string; // common BharatNet criticism
  };
  claims: {
    opticalFiber: string; // 6.92 lakh km (BJP Punjab claim)
    ftthConnections: string; // 12 lakh+ (BJP Punjab claim)
    verificationNeeded: string; // state-specific data verification needed
  };
  bbnlMerger: string; // merged into BSNL to expedite rollout
}

/**
 * Call Drops & Quality Data
 */
export interface CallQualityData {
  traiMandate: {
    date: string; // April 2025
    action: string; // mandated mobile coverage maps published by all TSPs
  };
  ooklaData: {
    period: string; // H1 2025
    fiveGDetectionNational: number; // 77.8% of Indian villages
    punjabAssessment: string; // likely above average
  };
  verificationNeeded: string[]; // call drop rates, specific Punjab QoS data (TRAI quarterly reports)
}

// ==========================================
// STRATEGIC INTELLIGENCE TYPES
// ==========================================

/**
 * AAP Vulnerabilities on Infrastructure
 */
export interface AAPVulnerability {
  id: number;
  title: string;
  description: string;
  keyPoints: string[];
}

/**
 * Congress Messaging Opportunities
 */
export interface CongressMessageOpportunity {
  id: number;
  message: string;
  description: string;
  targetAudience?: string;
}

// ==========================================
// SOURCE TYPES
// ==========================================

export interface InfraUtilitiesSource {
  id: number;
  title: string;
  source: string;
  date?: string;
  url?: string;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface InfraUtilitiesKPI {
  // Metadata
  reportDate: string;
  megaPillar: string;
  agent: string;
  status: string;

  // Electricity
  freeElectricityScheme: FreeElectricityScheme;
  tariffCuts: TariffCuts;
  pspclFinance: PSPCLFinance;
  electricitySupply: ElectricitySupplyQuality;
  solarPumps: SolarPumpData;

  // Water
  groundwaterCrisis: GroundwaterCrisis;
  districtGroundwaterStatus: DistrictGroundwaterStatus[];
  contamination: ContaminationData;
  roPlants: ROPlantsData;
  canalIrrigation: CanalIrrigationData;
  jalJeevanMission: JalJeevanMissionData;

  // Telecom
  mobileCoverage: MobileCoverageData;
  bharatNet: BharatNetData;
  callQuality: CallQualityData;

  // Strategic Intelligence
  aapVulnerabilities: AAPVulnerability[];
  congressOpportunities: CongressMessageOpportunity[];

  // Sources
  sources: InfraUtilitiesSource[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export type BlockCategory = "over-exploited" | "critical" | "semi-critical" | "safe";

export type ContaminationType = "uranium" | "arsenic" | "fluoride" | "nitrate" | "electricalConductivity";

export const WATER_TABLE_DECLINE_THRESHOLDS = {
  AVERAGE: "0.5-1 meter/year",
  WORST: "46 cm/yr",
} as const;

export const GROUNDWATER_CRISIS_INDICATORS = {
  STAGE_OF_EXTRACTION_CRITICAL: 100, // Above 100% is overexploited
  PUNJAB_EXTRACTION_RATE: 156.36,
  NATIONAL_AVERAGE: 60.63,
} as const;

export const TARFF_REDUCTION_TARGETS = {
  DOMESTIC_UP_TO_300: 30, // percent
  DOMESTIC_ABOVE_300: 13, // percent
  AGRICULTURE: 20, // percent
  COMMERCIAL: 11, // percent
} as const;

export const PSPCL_FINANCIAL_CONSTANTS = {
  SUBSIDY_FY2024_25: 10175, // crore
  SUBSIDY_FY2025_26: 20500, // crore
  SUBSIDY_FY2026_27: 15200.55, // crore
  CUMULATIVE_UNPAID: 11109.70, // crore
  T_D_LOSSES_CLAIMED: 10, // percent
  T_D_LOSSES_PREVIOUS: 12.75, // percent
} as const;

export const GROUNDWATER_BLOCKS_TOTAL = 153;

export const CONTAMINATION_THRESHOLDS = {
  URANIUM_WHO_LIMIT: 30, // ppb
  FLUORIDE_LIMIT: 1.5, // mg/L
} as const;
