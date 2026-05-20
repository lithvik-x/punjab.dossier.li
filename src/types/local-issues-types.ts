// Local Issues Types for Punjab Congress 2027 Election Dashboard
// Derived from: MP1-foundational/governance/local-issues-majha-doaba.md
// Research Date: 19 May 2026 | Data Currency: 2024-2026

// ==========================================
// META & OVERVIEW
// ==========================================

/**
 * Report Metadata
 */
export interface LocalIssuesMeta {
  megaPillar: string;
  subPillar: string;
  region: string;
  dateCompiled: string;
  dataCurrency: string;
  qualityFlag: string;
  sources: string[];
}

// ==========================================
// REGIONS
// ==========================================

export type RegionName = "Majha" | "Doaba";

export interface MajhaOverview {
  districts: string[];
  totalSeats: number;
  aap2022Seats: number;
  congress2022Seats: number;
  keyPressures: string[];
  historicStronghold: string;
}

export interface DoabaOverview {
  districts: string[];
  totalSeats: number;
  aap2022Seats: number;
  congress2022Seats: number;
  nriConnection: {
    householdsWithOverseasMembers: number;
    note: string;
  };
  keyIndustries: string[];
}

// ==========================================
// MAJHA ISSUES
// ==========================================

/**
 * Issue Priority Level
 */
export type IssuePriority = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type IssueIntensity = "EXTREME" | "HIGH" | "MEDIUM-HIGH" | "MEDIUM" | "SEVERE";
export type ResolutionStatus = "PARTIAL" | "UNRESOLVED" | "RESOLVED";

/**
 * Border Farming Issue
 */
export interface BorderFarmingIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    farmerLandAcres: number;
    govtLandAcres: number;
    villagesAffected: number;
    totalHectares: string;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyGrievances: string[];
  congressResponse: string[];
}

/**
 * Drug Menace Issue
 */
export interface DrugMenaceIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    district: string;
    note: string;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyData: {
    deathsIn32Days: number;
    hoochDeaths5Years: number;
    majhaHooch2020: number;
    arrestsClaimed: number;
    budgetAllocation: number;
  };
  congressResponse: string[];
}

/**
 * Groundwater Contamination Issue
 */
export interface GroundwaterContaminationIssue {
  priority: IssuePriority;
  affectedDistricts: string[];
  scale: {
    samplesAnalysed: number;
    exceedArsenicLimit: number;
    uraniumContamination: number;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyFindings: {
    amritsarArsenic: {
      highest: number;
      unit: string;
      safeLimit: string;
      veryHighRiskSamples: number;
    };
    tarnTaranUranium: string;
    gurdaspurArsenic: string;
    arsenicHabitations: number;
  };
  congressResponse: string[];
}

/**
 * Sacrilege Justice Issue
 */
export interface SacrilegeJusticeIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    casesSince2015: number;
    convictions: number;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyDevelopments: {
    lawPassed: string;
    lawDate: string;
    lifeImprisonment: boolean;
    zeroPastConvictions: boolean;
  };
  congressResponse: string[];
}

/**
 * Hooch Tragedy Issue
 */
export interface HoochTragedyIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    majitha2025: number;
    majha2020: number;
    total5Years: number;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  congressResponse: string[];
}

/**
 * Additional Majha Issue
 */
export interface AdditionalMajhaIssue {
  rank: IssuePriority;
  issue: string;
  intensity: IssueIntensity;
  keyConstituency: string;
}

// ==========================================
// DOABA ISSUES
// ==========================================

/**
 * NRI Property Dispute Issue
 */
export interface NRIPropertyIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    nriCommissionComplaints: number;
    actualEstimate: number;
    meaComplaints2025: number;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyData: {
    householdsWithOverseas: number;
    landRelatedComplaints: number;
    nriSabhaStatus: string;
  };
  congressResponse: string[];
}

/**
 * Youth Unemployment Issue
 */
export interface YouthUnemploymentIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    assetsSold: number;
    borrowed: number;
    migrantsLeftAfter2016: number;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyDynamics: string[];
  congressResponse: string[];
}

/**
 * Sports Leather Industry Issue
 */
export interface SportsLeatherIndustryIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    jalandharSportsGoodsShare: number;
    exportCountries: number;
    employment: number;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyDevelopments: {
    policy2026: string;
    rdCentreMoU: string;
    extensionCentre: string;
  };
  congressResponse: string[];
}

/**
 * Sugarcane Farmer Issue
 */
export interface SugarcaneFarmerIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    totalArrears: number;
    pendingFrom2021_22: number;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyData: {
    bkuStatement: string;
    governmentMills: string;
    seleniferousSoil: string;
  };
  congressResponse: string[];
}

/**
 * Industrial Decline Issue
 */
export interface IndustrialDeclineIssue {
  priority: IssuePriority;
  affectedSeats: string[];
  scale: {
    capitalFlight: string;
    gtRoadLosingCompetitiveness: boolean;
  };
  intensity: IssueIntensity;
  entityBlamed: string[];
  resolutionStatus: ResolutionStatus;
  keyDynamics: string[];
  congressResponse: string[];
}

/**
 * Additional Doaba Issue
 */
export interface AdditionalDoabaIssue {
  rank: IssuePriority;
  issue: string;
  intensity: IssueIntensity;
  keyConstituency: string;
}

// ==========================================
// CROSS-CUTTING THEMES
// ==========================================

/**
 * AAP Performance Perception
 */
export interface AAPPerformancePerception {
  aapMLACriticism: {
    date: string;
    quote: string;
  };
  congressClaim: {
    date: string;
    claim: string;
    mlasReadyToSwitch: number;
  };
  delhiLossImpact: {
    date: string;
    impact: string;
  };
  internalCracks: {
    date: string;
    issue: string;
  };
  blockElections: {
    date: string;
    significance: string;
  };
  aapClaim: string;
}

/**
 * Operation Sindoor Impact
 */
export interface OperationSindoorImpact {
  blackouts: {
    districts: string[];
    duration: string;
  };
  schoolsShut: {
    districts: number;
    duration: string;
  };
  evacuations: {
    unplanned: boolean;
    compensation: string;
  };
  farmersImpact: {
    harvestLost: boolean;
    cropsDamaged: boolean;
  };
  congressOpportunity: string;
}

/**
 * Migration Pressure Valve
 */
export interface MigrationPressureValve {
  historicalContext: string;
  currentConstraints: {
    canada: string;
    uk: string;
    us: string;
  };
  politicalRisk: string;
  congressStrategy: string;
}

// ==========================================
// CONGRESS STRATEGY
// ==========================================

/**
 * Congress Regional Strategy
 */
export interface CongressRegionalStrategy {
  region: RegionName;
  totalSeats: number;
  targetSeats: string;
  strategies: {
    issue: string;
    action: string;
  }[];
}

/**
 * Congress Strategic Positioning Summary
 */
export interface CongressStrategicPositioning {
  majha: CongressRegionalStrategy;
  doaba: CongressRegionalStrategy;
}

// ==========================================
// DATA SOURCES
// ==========================================

/**
 * Source Citation
 */
export interface LocalIssuesSource {
  id: number;
  title: string;
  source: string;
  date?: string;
}

// ==========================================
// MAIN KPI DATA STRUCTURE
// ==========================================

export interface LocalIssuesKPI {
  meta: LocalIssuesMeta;
  majha: {
    overview: MajhaOverview;
    issues: {
      borderFarming: BorderFarmingIssue;
      drugMenace: DrugMenaceIssue;
      groundwater: GroundwaterContaminationIssue;
      sacrilegeJustice: SacrilegeJusticeIssue;
      hoochTragedy: HoochTragedyIssue;
    };
    additionalIssues: AdditionalMajhaIssue[];
  };
  doaba: {
    overview: DoabaOverview;
    issues: {
      nriProperty: NRIPropertyIssue;
      youthUnemployment: YouthUnemploymentIssue;
      sportsLeatherIndustry: SportsLeatherIndustryIssue;
      sugarcaneFarmer: SugarcaneFarmerIssue;
      industrialDecline: IndustrialDeclineIssue;
    };
    additionalIssues: AdditionalDoabaIssue[];
  };
  crossCutting: {
    aapPerformance: AAPPerformancePerception;
    operationSindoor: OperationSindoorImpact;
    migrationPressureValve: MigrationPressureValve;
  };
  congressStrategy: CongressStrategicPositioning;
  sources: LocalIssuesSource[];
}

// ==========================================
// ENUMS & CONSTANTS
// ==========================================

export const MAJHA_DISTRICTS = ["Amritsar", "Gurdaspur", "Tarn Taran", "Pathankot"] as const;
export const DOABA_DISTRICTS = ["Jalandhar", "Hoshiarpur", "Kapurthala", "Nawanshahr"] as const;

export const MAJHA_TOTAL_SEATS = 25;
export const DOABA_TOTAL_SEATS = 23;

export const MAJHA_AAP_2022_SEATS = 17;
export const MAJHA_CONGRESS_2022_SEATS = 3;
export const DOABA_AAP_2022_SEATS = 13;
export const DOABA_CONGRESS_2022_SEATS = 7;

export const GROUNDWATER_SAFE_ARSENIC_LIMIT_PPM = 0.05;
export const GROUNDWATER_SAFE_ARSENIC_LIMIT_PPBB = 50;

// ==========================================
// PUADH REGION TYPES (from local-issues-puadh-remaining.md)
// ==========================================

export type PuadhRegionName = "SAS Nagar (Mohali)" | "Ludhiana Urban" | "Patiala" | "Fatehgarh Sahib" | "Rupnagar / Anandpur Sahib";

/**
 * Issue Priority Level for Puadh
 */
export type PuadhIssuePriority = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type PuadhIssueIntensity = "Critical" | "High" | "Medium";
export type PuadhIssueTemporality = "Chronic" | "Acute" | "Emerging";

/**
 * Constituency Issue
 */
export interface PuadhConstituencyIssue {
  issue: string;
  priority: PuadhIssuePriority;
  intensity: PuadhIssueIntensity;
  temporality: PuadhIssueTemporality;
  blamedEntity: string;
  status: string;
  congressResponse: string;
}

/**
 * Key Data Point
 */
export interface PuadhDataPoint {
  metric: string;
  value: string;
  source: string;
  date: string;
}

/**
 * SAS Nagar (Mohali) Region Data
 */
export interface SASNagarIssues {
  region: "SAS Nagar (Mohali)";
  district: string;
  seats: string[];
  issues: PuadhConstituencyIssue[];
  keyStats: {
    smartCityCompletionRate: number;
    nationalAverage: number;
    pendingProjects: number;
    pendingValueCrore: number;
    garbageDumpsIncrease: string;
    cityBusPlanningYears: number;
    trafficDeathsNote: string;
  };
}

/**
 * Ludhiana Urban Region Data
 */
export interface LudhianaUrbanIssues {
  region: "Ludhiana Urban";
  district: string;
  seats: string[];
  issues: PuadhConstituencyIssue[];
  keyStats: {
    chineseImportShare: number;
    manufacturingEfficiencyGap: number;
    buddhaNullahBOD: number;
    safeLimitBOD: number;
    trafficPoliceStrength: number;
    woolenKnitwearIndiaShare: number;
    hosieryIndiaShare: number;
  };
}

/**
 * Patiala Region Data
 */
export interface PatialaIssues {
  region: "Patiala";
  district: string;
  seats: string[];
  issues: PuadhConstituencyIssue[];
  keyStats: {
    civicProjectTendersCrore: number;
    electricBusesPlanned: number;
    dogSterilizationPerDay: number;
    kennelCapacityBefore: number;
    kennelCapacityAfter: number;
  };
}

/**
 * Fatehgarh Sahib Region Data
 */
export interface FatehgarhSahibIssues {
  region: "Fatehgarh Sahib";
  district: string;
  seats: string[];
  issues: PuadhConstituencyIssue[];
  keyStats: {
    holyCityStatus: boolean;
    flood2025Affected: boolean;
    sacrilegeLawMinYears: number;
  };
}

/**
 * Rupnagar / Anandpur Sahib Region Data
 */
export interface RupnagarIssues {
  region: "Rupnagar / Anandpur Sahib";
  district: string;
  seats: string[];
  issues: PuadhConstituencyIssue[];
  keyStats: {
    newDistrictProposed: boolean;
    newDistrictCostCrore: number;
    dbaProtestDays: number;
    holyCityStatus: boolean;
  };
}

/**
 * Cross-Cutting Theme for Puadh
 */
export interface PuadhCrossCuttingTheme {
  id: number;
  title: string;
  description: string;
  affectedRegions: string[];
}

/**
 * Congress Strategy for Puadh
 */
export interface PuadhCongressStrategy {
  number: number;
  region: string;
  title: string;
  description: string;
  attackVectors: string[];
}

/**
 * Data Gap for Puadh
 */
export interface PuadhDataGap {
  gap: string;
  priority: "High" | "Medium" | "Low";
  actionNeeded: string;
}

/**
 * Puadh Local Issues KPI Data Structure
 */
export interface PuadhLocalIssuesKPI {
  meta: {
    researchDate: string;
    sourcesConsulted: number;
    dataFreshness: string;
    confidence: string;
    researcher: string;
  };
  overview: {
    totalSeatsCovered: string;
    totalPunjabSeats: number;
    keyThemes: string[];
  };
  sasNagar: SASNagarIssues;
  ludhianaUrban: LudhianaUrbanIssues;
  patiala: PatialaIssues;
  fatehgarhSahib: FatehgarhSahibIssues;
  rupnagar: RupnagarIssues;
  crossCuttingThemes: PuadhCrossCuttingTheme[];
  dataPoints: PuadhDataPoint[];
  strategicImplications: PuadhCongressStrategy[];
  dataGaps: PuadhDataGap[];
  sources: LocalIssuesSource[];
}
