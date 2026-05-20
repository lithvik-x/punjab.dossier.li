// Water Resources & Natural Hazards Types for Punjab
// Derived from: research-M2/MP1-foundational/geography/water-hazards.md

// ==========================================
// GROUNDWATER CRISIS
// ==========================================

export interface GroundwaterExtraction {
  extractionRate: number; // percentage (156.36% for Punjab)
  annualWithdrawal: number; // BCM
  replenishableResource: number; // BCM
  classification: "overexploited" | "critical" | "semi-critical" | "safe";
}

export interface BlockCategory {
  category: string;
  threshold: string;
  blocks: number;
  percentage: number;
}

export interface SafeDistrict {
  name: string;
  safePercentage: number;
  blocks: number;
  reason: string;
}

export interface WaterTableDecline {
  statewideRate: number; // metres/year
  localPeakDecline: number; // cm/year
  areaWithDeclineOver15m: number; // percentage
  worstAffectedDistricts: string[];
  districtsDeeperThan40m: {
    count: number;
    year: number;
  };
  ngtProjectionYear: number;
  ngtProjectionDepth: number; // metres
}

export interface FreeElectricityNexus {
  policyYear: number;
  tubewellSurpassedCanalYear: number;
  currentTubewellPercentage: number;
  agriculturalPumpSets: number;
  groundwaterForIrrigation: number; // BCM
  groundwaterForIrrigationPercentage: number;
  paddyWaterRequirement: string; // litres per kg
  centralPunjabPaddyAreaPercentage: number;
  cottonArea2012: number; // hectares
  cottonArea2024: number; // hectares
}

// ==========================================
// GROUNDWATER CONTAMINATION
// ==========================================

export interface UraniumContamination {
  exceedanceRate: number; // percentage
  preMonsoonExceedance: number;
  postMonsoonExceedance: number;
  whoBisSafetyLimit: number; // ppb
  districtsAboveSafeLimits: number;
  samplesExceeding100ppb: number; // percentage
  healthImpacts: string[];
}

export interface ContaminantData {
  name: string;
  safetyLimit: string;
  districtsAffected: number;
  exceedanceRate: number;
  healthImpact: string;
}

export interface ContaminationSummary {
  contaminants: ContaminantData[];
  worstDistrict: {
    name: string;
    nitrateFailRate: number;
    note: string;
  };
}

// ==========================================
// CANAL IRRIGATION
// ==========================================

export interface CanalSystem {
  name: string;
  source: string;
  commandArea: string;
  keyDistricts: string[];
}

export interface CanalReliningProject {
  canal: string;
  cost: number; // crore
  approvalYear: number;
  status: string;
}

export interface CanalIrrigationData {
  majorCanals: CanalSystem[];
  tubewellPercentage: number;
  canalPercentage: number;
  rajasthanFeederFlow: number; // cusecs
  headReachTailEndIssue: {
    headReach: string;
    tailEnd: string;
    worstDistricts: string[];
  };
  reliningProjects: CanalReliningProject[];
}

// ==========================================
// SURFACE WATER RESOURCES
// ==========================================

export interface River {
  name: string;
  origin: string;
  flowThrough: string;
  keyDistricts: string[];
}

export interface Reservoir {
  name: string;
  river: string;
  state: string;
  relevance: string;
}

export interface Wetland {
  name: string;
  type: string;
  stressFactors: string[];
}

export interface SurfaceWaterData {
  majorRivers: River[];
  majorReservoirs: Reservoir[];
  wetlands: Wetland[];
  villagePonds: string;
}

// ==========================================
// NATURAL HAZARDS
// ==========================================

export interface FloodImpact {
  livesLost: number;
  peopleAffected: number;
  villagesAffected: number;
  agriculturalLandSubmerged: number; // hectares
  districtsDeclared: number;
  majorCitiesAffected: string[];
  worstHitDistricts: string[];
}

export interface FloodCauses {
  factors: string[];
  historicalPattern: string[];
}

export interface FloodData {
  event: string;
  date: string;
  impact: FloodImpact;
  causes: FloodCauses;
  historicalRecurrence: string;
}

export interface SeismicZone {
  zone: string;
  riskLevel: string;
  districts: string[];
  mskIntensity?: string;
}

export interface SeismicHazard {
  zones: SeismicZone[];
  vulnerableReason: string;
}

export interface HeatwaveData {
  preMonsoonTemperature: string;
  worstAffectedDistricts: string[];
  agriculturalImpacts: string[];
  vulnerableBelt: string;
}

export interface DroughtProneArea {
  belt: string;
  districts: string[];
  rainfallPattern: string;
  groundwaterDependence: string;
}

// ==========================================
// STRATEGIC ELECTORAL IMPLICATIONS
// ==========================================

export interface ElectoralImplication {
  issue: string;
  electoralAngle: string;
  congressOpportunity: string;
}

export interface WaterHazardsIntelligence {
  reportDate: string;
  source: string;
  status: string;
  classification: string;
  groundwater: {
    extraction: GroundwaterExtraction;
    blockCategories: BlockCategory[];
    nationalComparison: {
      overexploitedNationalAverage: number;
      punjabMultiple: number;
    };
    tenHundredPercentExploited: number;
    safeDistricts: SafeDistrict[];
    waterTable: WaterTableDecline;
    freeElectricityNexus: FreeElectricityNexus;
  };
  contamination: {
    uranium: UraniumContamination;
    summary: ContaminationSummary;
  };
  canalIrrigation: CanalIrrigationData;
  surfaceWater: SurfaceWaterData;
  naturalHazards: {
    floods: FloodData;
    seismic: SeismicHazard;
    heatwaves: HeatwaveData;
    droughtProne: DroughtProneArea[];
  };
  electoralImplications: ElectoralImplication[];
  sources: string[];
}
