// GIS Constituency Mapping Framework Types
// Source: direct-documentation/cat-1-demography/g30-gis-constituency-mapping-framework.md

export type GISLayerPriority = 'Critical' | 'High' | 'Medium' | 'Low';

export type MapProductPriority = 'Critical' | 'High' | 'Medium';

export type BoothClusterType = 'Safe Congress' | 'Winnable' | 'Hostile' | 'Low Turnout' | 'Swing';

export type GOTVBoothType = 'Gulf Diaspora' | 'Shift Workers' | 'Border Areas' | 'Low Enthusiasm' | 'SC Dominant';

export interface GISLayerSpec {
  layer: string;
  source: string;
  resolution: string;
  priority: GISLayerPriority;
  updateFrequency: string;
}

export interface BoothLocationAttributes {
  boothNumber: string;
  boothName: string;
  latitude: number;
  longitude: number;
  totalElectors: number;
  genderBreakdown?: { male: number; female: number; thirdGender: number };
  urbanRural: 'Urban' | 'Rural' | 'Peri-urban';
  assemblyConstituencyCode: string;
  partNumber: string;
}

export interface CasteCompositionData {
  scPopulationPercentage: string;
  jatSikhPercentage: string;
  obcPercentage: string;
  muslimPopulationPercentage: string;
  christianPopulationPercentage: string;
  mazhabiSikhSubCaste: string;
}

export interface DemographicDataByBooth {
  ruralUrbanClassification: 'Rural' | 'Urban' | 'Peri-urban';
  totalPopulation: number;
  populationDensity?: number;
  sexRatio?: number;
  literacyRate?: number;
  workerType: 'Agricultural' | 'Industrial' | 'Services';
  migrationRate?: string;
  bplFamiliesCount?: number;
}

export interface RoadNetworkData {
  nationalHighways: string;
  stateHighways: string;
  majorDistrictRoads: string;
  railwayNetwork: string;
  distanceToNearestMajorRoad?: number;
  floodProneSegments?: string;
}

export interface KeyLocationMarker {
  type: 'Gurdwara' | 'Temple' | 'Dera' | 'Market' | 'Industry' | 'University' | 'Army Cantonment' | 'Border Crossing';
  name: string;
  location: string;
  influenceRadius?: string;
  politicalSignificance?: string;
}

export interface VoterDensityData {
  turnout2022: number;
  turnout2017: number;
  turnout2012: number;
  marginOfVictory: number;
  congressVotePercentage2022: number;
  boothLevelTrend: string;
}

export interface BoothCluster {
  type: BoothClusterType;
  definition: string;
  campaignAction: string;
  minimumBooths: number;
}

export interface IssueHeatLayer {
  issue: string;
  dataSource: string;
  indicator: string;
  distressScore: number;
}

export interface DeraInfluenceMap {
  deraName: string;
  headquarters: string;
  primaryCommunities: string[];
  malwaDistrictsWithPresence: string[];
  influenceRadius: string[];
  voterEstimateWithinRadius?: string;
  partyEndorsementHistory2022?: string;
}

export interface MediaMarketMap {
  cableTVCoverage: string;
  fmRadioReach: string[];
  printMedia: string[];
  whatsappPenetration: string;
  localCableNetwork: string;
}

export interface GISMappingProduct {
  name: string;
  priority: MapProductPriority;
  description: string;
  classificationScheme?: { color: string; range: string; interpretation: string }[];
  dataRequired: string[];
  format: string;
  use: string;
}

export interface GISImplementationRoadmap {
  phase: string;
  goal: string;
  tasks: string[];
  deliverable: string;
  staff: string;
  duration: string;
}

export interface GISToolRecommendation {
  tool: string;
  cost: string;
  bestFor: string;
  learningCurve: string;
}

export interface GISBudget {
  category: string;
  item: string;
  estimatedCostINR: number;
  notes?: string;
}

export interface GISSueccessMetrics {
  metric: string;
  target: string;
  measurement: string;
}

export interface GISMappingFramework {
  strategicPurpose: {
    congress2022Result: string;
    aap2022Result: string;
    congress2027Target: string;
    swingRequired: string;
  };
  requiredLayers: GISLayerSpec[];
  boothLocationAttributes: string[];
  casteCompositionAttributes: string[];
  demographicDataAttributes: string[];
  roadNetworkAttributes: string[];
  keyLocationMarkers: string[];
  policeStationJurisdictions: string[];
  voterDensityAttributes: string[];
  spatialAnalysis: {
    boothClustering: BoothCluster[];
    casteConcentrationMapping: string;
    commuterShiftWorkerAnalysis: string;
    marketDayAnalysis: string;
    borderAreaAnalysis: string;
  };
  mappingProducts: GISMappingProduct[];
  tools: GISToolRecommendation[];
  implementationRoadmap: GISImplementationRoadmap[];
  budget: { category: string; items: GISBudget[] }[];
  successMetrics: GISSueccessMetrics[];
}
