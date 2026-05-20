// Urbanization & Settlement Classification Types for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/urbanization.md
// Research Date: 2026-05-20

// ==========================================
// URBANIZATION OVERVIEW
// ==========================================

export interface UrbanizationOverview {
  census2011: {
    totalPopulation: number;
    urbanPopulation: number;
    urbanPercent: number;
    ruralPopulation: number;
    ruralPercent: number;
    urbanDecadalGrowth2001to2011: number;
    nationalUrbanAverage2011: number;
    punjabVsNational: number; // percentage points above national
  };
  projections: {
    estimatedPopulation2026: number;
    estimatedUrbanPercent2026: number;
    estimatedRuralPercent2026: number;
  };
  trajectory: {
    year1991: number;
    year2001: number;
    year2011: number;
    year2026: number;
    paceNote: string;
  };
}

// ==========================================
// MUNICIPAL CORPORATIONS
// ==========================================

export interface MunicipalCorporation {
  rank: number;
  city: string;
  district: string;
  population2011UA: number;
  estimatedPopulation2022: number;
  keyCharacteristic: string;
}

export interface CantonmentBoard {
  name: string;
  district: string;
  estimatedPopulation: number;
}

// ==========================================
// MUNICIPAL COUNCILS
// ==========================================

export interface MunicipalCouncil {
  name: string;
  district: string;
  note?: string;
}

export interface MunicipalStructure {
  municipalCorporations: number;
  totalMunicipalities: number;
  municipalCouncilsNagarPanchayats: number;
  notableCouncils: string[];
  fastGrowingPeriUrban: string[];
}

// ==========================================
// DISTRICT URBANIZATION LEVELS
// ==========================================

export interface DistrictUrbanization {
  district: string;
  urbanPercent: number;
}

export type UrbanizationCategory = "Highly Urbanized (>50%)" | "Moderately Urbanized (30-50%)" | "Low Urbanization (<30%)";

export interface DistrictUrbanizationCategory {
  category: UrbanizationCategory;
  urbanPercentRange: string;
  districts: string[];
}

// ==========================================
// RURAL SETTLEMENT CLASSIFICATION
// ==========================================

export interface VillageInfrastructure {
  totalRevenueVillages: number;
  inhabitedVillages: number;
  uninhabitedVillages: number;
  averageVillagePopulation: number;
  averageVillageArea: string;
  totalPanchayats: number;
}

export type VillageType = "Border Villages" | "Kandi Belt Villages" | "Riverine Villages" | "Canal-irrigated Heartland" | "Cotton Belt Villages" | "Remote/Backward Villages";

export interface VillageTypology {
  type: VillageType;
  description: string;
  districts: string;
  electoralSignificance: string;
  populationEstimate?: string;
}

// ==========================================
// PERI-URBAN ZONES
// ==========================================

export interface PeriUrbanBelt {
  name: string;
  anchorCity: string;
  keyAreas: string;
  characteristics: string;
}

export interface PeriUrbanZones {
  belts: PeriUrbanBelt[];
}

// ==========================================
// SLUM POPULATION
// ==========================================

export interface CitySlumData {
  city: string;
  slumPopulation: number;
  percentOfCityPop: number;
  keyElectoralNote: string;
}

export interface SlumOverview {
  totalSlumPopulation: number;
  percentOfUrbanPopulation: number;
  cities: CitySlumData[];
  verificationNote: string;
}

// ==========================================
// URBAN INFRASTRUCTURE METRICS
// ==========================================

export interface HousingInfrastructureGap {
  indicator: string;
  urban: string;
  rural: string;
}

export interface UrbanizationMetrics {
  urbanizationRate2011: number;
  decadalUrbanGrowth2001to2011: number;
  estimatedUrbanizationRate2026: number;
  mohaliGrowthRate2001to2011: number;
  ruralToUrbanMigrationTrend: string;
  censusTownFormation: string;
}

export interface HousingInfrastructureData {
  housing: HousingInfrastructureGap[];
  urbanHousingShortage: string;
  slumHouseholds: string;
  tapWaterUrban: string;
  tapWaterRural: string;
}

// ==========================================
// ELECTORAL IMPLICATIONS
// ==========================================

export interface UrbanRuralVoterPriorities {
  dimension: string;
  urbanVoterPriorities: string;
  ruralVoterPriorities: string;
}

export interface SeatClassification {
  category: string;
  approximateSeats: number;
  keyConstituencies: string;
  likelySwingFactor: string;
}

export interface CongressStrategy {
  number: number;
  strategyName: string;
  description: string;
}

export interface ElectoralImplications {
  urbanRuralVoting: UrbanRuralVoterPriorities[];
  seatClassification: SeatClassification[];
  congressStrategies: CongressStrategy[];
}

// ==========================================
// DATA QUALITY
// ==========================================

export interface DataQualityItem {
  dataPoint: string;
  status: "VERIFICATION_NEEDED" | "PARTIAL" | "HIGH";
  actionRequired: string;
}

// ==========================================
// MAIN EXPORT
// ==========================================

export interface UrbanizationData {
  overview: UrbanizationOverview;
  municipalCorporations: MunicipalCorporation[];
  municipalStructure: MunicipalStructure;
  cantonmentBoards: CantonmentBoard[];
  districtUrbanization: DistrictUrbanizationCategory[];
  allDistrictUrbanization: DistrictUrbanization[];
  villageInfrastructure: VillageInfrastructure;
  villageTypology: VillageTypology[];
  periUrbanZones: PeriUrbanZones;
  slumData: SlumOverview;
  urbanizationMetrics: UrbanizationMetrics;
  housingInfrastructure: HousingInfrastructureData;
  electoralImplications: ElectoralImplications;
  dataQuality: DataQualityItem[];
}
