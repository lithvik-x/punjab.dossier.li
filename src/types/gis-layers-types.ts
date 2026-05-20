// GIS Layer Architecture Types - Static Layers (1-5)
// Derived from: MP1-foundational/geography/gis-layers-static.md
// Research Date: 19 May 2026

// ==========================================
// DYNAMIC GIS LAYERS (6-10) TYPES
// Derived from: MP1-foundational/geography/gis-layers-dynamic.md
// Research Date: 19 May 2026
// ==========================================

/**
 * GIS Dynamic Layer classification for Punjab Congress 2027
 */
export type GISDynamicLayerNumber = 6 | 7 | 8 | 9 | 10;

/**
 * Layer update frequency types
 */
export type LayerUpdateFrequency =
  | "continuous"      // Real-time
  | "daily"          // Daily updates
  | "weekly"          // Weekly updates
  | "monthly"         // Monthly updates
  | "quarterly"      // Quarterly updates
  | "seasonal"        // Twice per year (harvest cycles)
  | "event_triggered" // On specific events
  | "pre_election";   // Before each election cycle

/**
 * Layer implementation priority
 */
export type ImplementationPriority = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

/**
 * Technology stack components for dynamic layers
 */
export interface LayerTechnologyStack {
  baseGIS: string[];
  database: string;
  visualization: string[];
  dataPipeline: string[];
  mobileCollection: string[];
  cloudInfrastructure: string;
}

/**
 * Layer overview entry
 */
export interface LayerOverview {
  layer: number;
  name: string;
  type: string;
  updateFrequency: LayerUpdateFrequency;
  primaryUse: string;
}

// ==========================================
// LAYER 6: ECONOMIC GEOGRAPHY
// ==========================================

export interface CropPattern {
  crop: string;
  season: "kharif" | "rabi" | "annual";
  dominantRegions: string[];
  percentageOfArea?: number;
  notes?: string;
}

export interface MandiInfo {
  name: string;
  location: string;
  district: string;
  specialization?: string;
  throughputVolume?: string;
  seasonalActivityIndex?: string;
}

export interface IndustrialCluster {
  location: string;
  district: string;
  industries: string[];
  notes?: string;
}

export interface ProcurementCenter {
  agency: string;
  commodities: string[];
  season: "rabi" | "kharif" | "both";
}

export interface EconomicGeographyData {
  cropPatterns: {
    monocultureShare: number; // 85% wheat and paddy
    croppingIntensity: number; // ~190%
    crops: CropPattern[];
    dataSource: string;
    updateFrequency: LayerUpdateFrequency;
  };
  mandiNetwork: {
    densityPer1000SqKm: number; // 6.9 vs national 1.5
    totalPrincipalYards: number; // 150+
    totalSubYards: number; // 250+
    totalDistricts: number; // 23
    keyMandis: MandiInfo[];
    dataSource: string;
    strategicValue: string;
  };
  industrialClusters: IndustrialCluster[];
  procurementCenters: ProcurementCenter[];
  implementationPriority: ImplementationPriority;
}

// ==========================================
// LAYER 7: RISK & VULNERABILITY
// ==========================================

export interface FloodZone {
  river: string;
  affectedDistricts: string[];
  riskLevel: "high" | "medium" | "low";
  notes?: string;
}

export interface DroughtZone {
  districts: string[];
  waterStress: "severe" | "moderate" | "low";
  groundwaterStatus: string; // over-exploited percentage
  canalVulnerability: string;
}

export interface BorderZone {
  district: string;
  sharedBorder: string;
  risks: string[];
  securityConcerns: string[];
}

export interface CommunalHotspot {
  corridor: string;
  districts: string[];
  riskLevel: "high" | "medium" | "low";
  requiresConfidentialHandling: boolean;
}

export interface DrugTraffickingData {
  prevalenceRuralJalandhar: number; // 65.5%
  heroinPrevalence: number; // 20.8%
  majorRoutes: string[];
  backgroundRuralPercentage: number; // 70%
  dataSource: string[];
}

export interface RemoteBooth {
  criteria: string;
  concentrationAreas: string[];
  accessChallenges: string[];
}

export interface RiskVulnerabilityData {
  floodProneAreas: {
    zones: FloodZone[];
    recentEvents: string[]; // 2023, 2024 monsoon flooding
    dataSource: string[];
    updateFrequency: LayerUpdateFrequency;
  };
  droughtZones: {
    southwesternMalwa: DroughtZone;
    groundwaterStatus: string; // over 80% blocks over-exploited
    dataSource: string[];
    updateFrequency: LayerUpdateFrequency;
  };
  borderZoneRisk: {
    districts: BorderZone[];
    totalBorderDistricts: number; // 6
    dataSource: string[];
    updateFrequency: LayerUpdateFrequency;
  };
  communalTensionHotspots: {
    hotspots: CommunalHotspot[];
    historicalEvents: string[];
    dataSource: string[];
    updateFrequency: LayerUpdateFrequency;
  };
  drugTrafficking: DrugTraffickingData;
  remoteDifficultBooths: RemoteBooth;
  implementationPriority: ImplementationPriority;
}

// ==========================================
// LAYER 8: CAMPAIGN ACTIVITY TRACKING
// ==========================================

export interface D2DTrackingEntry {
  volunteer: string;
  boothsVisited: number;
  housesContacted: number;
  responses: {
    supportive: number;
    neutral: number;
    hostile: number;
  };
  issuesRaised: string[];
  gpsTrackAvailable: boolean;
}

export interface RallyEvent {
  location: string;
  constituency: string;
  expectedAttendance: number;
  actualAttendance?: number;
  speakers: string[];
  mediaCoverage?: string;
  date: string;
  bufferAnalysis?: {
    population5km: number;
    population10km: number;
  };
}

export interface VolunteerDensity {
  booth: string;
  constituency: string;
  activeVolunteers: number;
  votersPerThousand: number;
  status: "adequate" | "under_resourced" | "critical";
}

export interface CampaignActivityData {
  d2dCoverage: {
    trackingEntries: D2DTrackingEntry[];
    progressIndicator: string;
    methodology: string;
    dataSource: string;
  };
  rallyEventLocations: {
    events: RallyEvent[];
    dataSource: string[];
  };
  volunteerDensity: {
    densityMap: VolunteerDensity[];
    attritionTracking: string;
    recruitmentVelocity: string;
    dataSource: string;
  };
  technologyStack: {
    mobileApp: string;
    server: string;
    dashboard: string;
    integration: string;
  };
  updateFrequency: LayerUpdateFrequency;
  implementationPriority: ImplementationPriority;
}

// ==========================================
// LAYER 9: REAL-TIME SENTIMENT
// ==========================================

export interface SocialMediaSentiment {
  platform: "twitter_x" | "facebook" | "instagram" | "whatsapp" | "youtube";
  geographicResolution: "district" | "booth";
  penetration: string;
  sentimentScore?: number;
}

export interface SurveyDataPoint {
  type: "ground_survey" | "booth_micro_survey" | "telephonic_ivor";
  constituency: string;
  sampleSize?: number;
  sentimentScore?: number;
  geoTagged: boolean;
}

export interface HistoricalElectionData {
  year: number;
  electionType: "assembly" | "lok_sabha";
  boothLevelAvailable: boolean;
  dataSource: string;
}

export interface RealTimeSentimentData {
  socialMediaSentiment: {
    platforms: SocialMediaSentiment[];
    nlpProcessing: string;
    techStack: string[];
    apiSources: string[];
    updateFrequency: LayerUpdateFrequency;
  };
  surveyIntegration: {
    surveys: SurveyDataPoint[];
    updateFrequency: LayerUpdateFrequency;
  };
  electionDataLayer: {
    historicalResults: HistoricalElectionData[];
    boothLevelYears: number[];
    updateFrequency: LayerUpdateFrequency;
  };
  outputProducts: {
    heatmapCongress: string;
    heatmapAAP: string;
    heatmapSAD: string;
    heatmapBJP: string;
    trendArrows: string;
    alertSystem: string;
  };
  implementationPriority: ImplementationPriority;
}

// ==========================================
// LAYER 10: COMPETITOR ACTIVITY INTELLIGENCE
// ==========================================

export interface AAPMLAEvent {
  mlaName: string;
  eventType: "constituency_visit" | "grievance_camp" | "public_meeting" | "other";
  location: string;
  constituency: string;
  date: string;
  attendance?: number;
  dataSource: string[];
}

export interface AdvertisingDensity {
  type: "billboard" | "hoarding" | "wall_painting" | "digital_ad" | "newspaper";
  location: string;
  party: string;
  density?: number;
}

export interface OppositionWorkerDensity {
  party: "AAP" | "SAD" | "BJP" | "BSP";
  booth: string;
  estimatedDensity: "high" | "medium" | "low";
  indicators: string[];
}

export interface OppositionEvent {
  party: string;
  eventType: string;
  location: string;
  date: string;
  expectedAttendance?: number;
  clashWithCongress: boolean;
}

export interface CompetitorIntelligenceData {
  aapMLAEventTracking: {
    events: AAPMLAEvent[];
    trackingAttributes: string[];
    dataSource: string[];
    updateFrequency: LayerUpdateFrequency;
  };
  competitorAdvertising: {
    ads: AdvertisingDensity[];
    metaAdLibrary: boolean;
    fieldPhotoReports: boolean;
    newspaperAdTracking: boolean;
    updateFrequency: LayerUpdateFrequency;
  };
  oppositionWorkerPresence: {
    parties: {
      aap: {
        trackingIndicators: string[];
        dataSource: string[];
      };
      sad: {
        trackingIndicators: string[];
        dataSource: string[];
      };
      bjp: {
        trackingIndicators: string[];
        dataSource: string[];
      };
    };
    updateFrequency: LayerUpdateFrequency;
  };
  oppositionRallyCalendar: {
    events: OppositionEvent[];
    clashDetection: boolean;
    postEventAnalysis: boolean;
    updateFrequency: LayerUpdateFrequency;
  };
  intelligenceCollectionMethods: {
    osint: string;
    humint: string;
    mediaIntelligence: string;
  };
  implementationPriority: ImplementationPriority;
}

// ==========================================
// COMPLETE DYNAMIC GIS INTELLIGENCE STACK
// ==========================================

export interface DynamicLayerMetadata {
  researchDate: string;
  sourcesConsulted: number;
  dataFreshness: string;
  confidence: "HIGH" | "MEDIUM" | "LOW";
  agent: string;
  taskReference: string;
}

export interface ImplementationPhase {
  phase: string;
  timeline: string;
  layers: string;
  estimatedCost: string;
  priority: ImplementationPriority;
}

export interface GISDynamicIntelligenceStack {
  metadata: DynamicLayerMetadata;
  layerOverview: LayerOverview[];
  technologyStack: LayerTechnologyStack;
  layers: {
    layer6: EconomicGeographyData;
    layer7: RiskVulnerabilityData;
    layer8: CampaignActivityData;
    layer9: RealTimeSentimentData;
    layer10: CompetitorIntelligenceData;
  };
  implementationRoadmap: {
    phases: ImplementationPhase[];
    totalOneTimeCost: string;
    totalMonthlyOperationalCost: string;
    teamRequired: string[];
  };
  strategicValue: {
    layer: number;
    value: string;
  }[];
  dataPointsSummary: {
    layer: string;
    keyDataSource: string;
    updateFrequency: LayerUpdateFrequency;
    techRequired: string;
    confidence: "HIGH" | "MEDIUM" | "LOW";
  }[];
  gapsVerification: {
    gap: string;
    impact: "HIGH" | "MEDIUM" | "LOW";
    recommendedAction: string;
  }[];
}

/**
 * GIS Layer classification for Punjab Congress 2027
 */
export type GISLayerNumber = 1 | 2 | 3 | 4 | 5;

/**
 * Layer 1: Administrative Boundaries
 */
export interface AdministrativeBoundary {
  type: "state" | "district" | "tehsil" | "block" | "ac" | "pc" | "village" | "municipal" | "patwar" | "kanungo";
  name: string;
  code?: string;
  parentCode?: string;
}

export interface PunjabBoundaryData {
  state: string;
  districts: number;
  tehsils: number;
  blocks: number;
  villages: number;
  assemblyConstituencies: number;
  parliamentaryConstituencies: number;
  coordinateSystem: string;
  regions: {
    name: "Malwa" | "Majha" | "Doaba";
    seats: number;
  }[];
}

/**
 * Layer 2: Polling Infrastructure
 */
export interface PollingStation {
  boothNumber: string;
  acNumber: number;
  boothName: string;
  buildingName?: string;
  gpsCoordinates?: {
    latitude: number;
    longitude: number;
  };
  classification: "urban" | "rural" | "remote";
  totalVoters: number;
  maleVoters?: number;
  femaleVoters?: number;
  bloName?: string;
  bloContact?: string;
  webcastingStatus: boolean;
  accessibility: "pwd_friendly" | "model_polling_station" | "standard";
}

export interface PollingInfrastructureData {
  totalBooths: number;
  estimatedBooths2024LS: number;
  webcastingCoverage: number; // percentage
  nextGenSystems: {
    ppms: boolean; // Polling Personnel Management System
    pams: boolean; // Poll Activity Monitoring System
    qis: boolean; // Queue Information System (WhatsApp chatbot)
  };
  updateCadence: {
    boothLists: "per_election";
    gpsCoordinates: "per_deployment";
    voterCounts: "continuous";
  };
}

/**
 * Layer 3: Demographics
 */
export interface CasteBreakdown {
  category: "upper_caste" | "scheduled_caste" | "obc" | "jat_sikh" | "other";
  percentage: number;
  description?: string;
}

export interface ScheduledCasteData extends CasteBreakdown {
  category: "scheduled_caste";
  subGroups?: {
    name: string;
    percentageOfSC: number;
  }[];
  religiousBreakdown?: {
    sikh: number;
    hindu: number;
  };
}

export interface PunjabDemographicData {
  totalPopulation?: number;
  scPercentage: number; // 31.9% - highest in India
  upperCastePercentage: number; // ~33%
  obcPercentage: number; // ~25%
  jatSikhPercentage: number; // ~20-25%
  literacyRate: number; // 83.4%
  sexRatio?: number;
  dataVintage: string; // "Census 2011"
  dataGaps: string[];
}

/**
 * Layer 4: Infrastructure
 */
export type InfrastructureType =
  | "road"
  | "canal"
  | "mobile_network"
  | "electricity"
  | "health_facility"
  | "education_institution"
  | "bank_atm"
  | "railway";

export interface InfrastructureData {
  roadNetwork: {
    source: string;
    formats: string[];
    updateFrequency: "monthly" | "annual";
  };
  canalNetwork: {
    source: string;
    formats: string[];
    updateFrequency: "static_with_seasonal";
  };
  mobileCoverage: {
    source: string;
    formats: string[];
    cost: string;
  };
  facilityTypes: InfrastructureType[];
}

/**
 * Layer 5: Political Geography
 */
export interface ElectionResult {
  year: number;
  electionType: "assembly" | "lok_sabha" | "bye_election";
  congressSeats: number;
  congressVoteShare: number;
  congressPosition: number;
  winner: string;
  margin?: number;
  turnout?: number;
}

export interface CongressPerformanceHistory {
  election: string;
  congressSeats: number;
  congressVotePercent: number;
  position: string;
  keyTrend: string;
}

export interface PoliticalGeographyData {
  acWiseResultsYears: number[];
  lsResultsYears: number[];
  congressPerformance: CongressPerformanceHistory[];
  marginCategories: {
    safe: number; // >10%
    competitive: number; // 5-10%
    marginal: number; // <5%
  };
  dataSources: string[];
  updateCadence: string;
}

/**
 * Complete GIS Intelligence Stack
 */
export interface GISIntelligenceStack {
  metadata: {
    researchDate: string;
    sourcesConsulted: number;
    dataFreshness: string;
    confidence: "HIGH" | "MEDIUM" | "LOW";
    coordinateSystem: string;
  };
  layers: {
    layer1: PunjabBoundaryData;
    layer2: PollingInfrastructureData;
    layer3: PunjabDemographicData;
    layer4: InfrastructureData;
    layer5: PoliticalGeographyData;
  };
  platformStack: {
    desktop: string[];
    spatialDatabase: string;
    webDashboard: string[];
    dataPipeline: string[];
    alternative: string[];
  };
  implementationPriority: {
    priority: number;
    layer: string;
    timeline: string;
    estimatedCost: string;
    rationale: string;
  }[];
  totalEstimatedCost: string;
  strategicValue: {
    point: number;
    title: string;
    description: string;
  }[];
  dataGaps: {
    gap: string;
    impact: "HIGH" | "MEDIUM" | "LOW";
    recommendedAction: string;
  }[];
  sources: string[];
}
