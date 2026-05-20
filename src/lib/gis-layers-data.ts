// @ts-nocheck
// GIS Layers Data - Static (1-5) and Dynamic (6-10)
// Derived from: research-M2/MP1-foundational/geography/gis-layers-static.md
// Derived from: research-M2/MP1-foundational/geography/gis-layers-dynamic.md
// Research Date: 19 May 2026 | Data Currency: 2025-2026

import type {
  // Dynamic Layer Types
  GISDynamicLayerNumber,
  LayerUpdateFrequency,
  ImplementationPriority,
  LayerTechnologyStack,
  LayerOverview,
  EconomicGeographyData,
  RiskVulnerabilityData,
  CampaignActivityData,
  RealTimeSentimentData,
  CompetitorIntelligenceData,
  DynamicLayerMetadata,
  ImplementationPhase,
  GISDynamicIntelligenceStack,
  // Static Layer Types
  GISLayerNumber,
  PunjabBoundaryData,
  PollingInfrastructureData,
  PunjabDemographicData,
  InfrastructureData,
  PoliticalGeographyData,
  CongressPerformanceHistory,
  GISIntelligenceStack,
} from "@/types/gis-layers-types";

// ==========================================
// STATIC LAYERS (1-5) DATA
// ==========================================

// Layer 1: Administrative Boundaries
export const punjabBoundaryData: PunjabBoundaryData = {
  state: "Punjab",
  districts: 23,
  tehsils: 82,
  blocks: 150,
  villages: 12600,
  assemblyConstituencies: 117,
  parliamentaryConstituencies: 13,
  coordinateSystem: "EPSG:4326 (WGS84)",
  regions: [
    { name: "Malwa", seats: 69 },
    { name: "Majha", seats: 27 },
    { name: "Doaba", seats: 23 },
  ],
};

// Layer 2: Polling Infrastructure
export const pollingInfrastructureData: PollingInfrastructureData = {
  totalBooths: 24000,
  estimatedBooths2024LS: 25000,
  webcastingCoverage: 100, // 100% webcasting achieved in Punjab 2024
  nextGenSystems: {
    ppms: true, // Polling Personnel Management System
    pams: true, // Poll Activity Monitoring System
    qis: true, // Queue Information System (WhatsApp chatbot)
  },
  updateCadence: {
    boothLists: "per_election",
    gpsCoordinates: "per_deployment",
    voterCounts: "continuous",
  },
};

// Layer 3: Demographics
export const punjabDemographicData: PunjabDemographicData = {
  scPercentage: 31.9, // Highest in India
  upperCastePercentage: 33,
  obcPercentage: 25,
  jatSikhPercentage: 22, // ~20-25%
  literacyRate: 83.4,
  dataVintage: "Census 2011",
  dataGaps: [
    "Village-level caste sub-group data (Jat, Saini, Kamboj, Ravidassia, etc.)",
    "Post-2011 Census population projection",
    "Religion distribution at village level",
    "Gram Panchayat boundary shapefiles",
  ],
};

// Layer 4: Infrastructure
export const infrastructureData: InfrastructureData = {
  roadNetwork: {
    source: "NIC Bharat Maps, OSM (NextGIS daily updates)",
    formats: ["Shapefile", "GeoJSON"],
    updateFrequency: "monthly",
  },
  canalNetwork: {
    source: "India-WRIS (indiawris.gov.in), Central Water Commission",
    formats: ["Shapefile", "WMS"],
    updateFrequency: "static_with_seasonal",
  },
  mobileCoverage: {
    source: "TRAI coverage maps, DoT data, OpenSignal",
    formats: ["Raster", "Polygon"],
    cost: "Free-Rs 2L",
  },
  facilityTypes: [
    "road",
    "canal",
    "mobile_network",
    "electricity",
    "health_facility",
    "education_institution",
    "bank_atm",
    "railway",
  ],
};

// Layer 5: Political Geography
export const congressPerformanceHistory: CongressPerformanceHistory[] = [
  {
    election: "2012 Assembly",
    congressSeats: 46,
    congressVotePercent: 35.1,
    position: "2nd (behind SAD-BJP 56)",
    keyTrend: "Strong opposition",
  },
  {
    election: "2017 Assembly",
    congressSeats: 77,
    congressVotePercent: 38.5,
    position: "1st (majority)",
    keyTrend: "Peak performance",
  },
  {
    election: "2022 Assembly",
    congressSeats: 18,
    congressVotePercent: 22.0,
    position: "2nd (AAP won 92)",
    keyTrend: "Massive collapse",
  },
  {
    election: "2024 Lok Sabha",
    congressSeats: 0,
    congressVotePercent: 12,
    position: "5th",
    keyTrend: "Near-wipeout in LS",
  },
];

export const politicalGeographyData: PoliticalGeographyData = {
  acWiseResultsYears: [2012, 2017, 2022],
  lsResultsYears: [2014, 2019, 2024],
  congressPerformance: congressPerformanceHistory,
  marginCategories: {
    safe: 10, // >10%
    competitive: 5, // 5-10%
    marginal: 5, // <5%
  },
  dataSources: [
    "ECI Statistical Reports (eci.gov.in)",
    "Lok Dhaba (Ashoka University)",
    "Dataful.in",
    "CEO Punjab",
  ],
  updateCadence: "Per election",
};

// Complete Static GIS Intelligence Stack
export const gisIntelligenceStack: GISIntelligenceStack = {
  metadata: {
    researchDate: "19 May 2026",
    sourcesConsulted: 14,
    dataFreshness: "2024 (most recent: Lok Sabha 2024 election data)",
    confidence: "MEDIUM",
    coordinateSystem: "EPSG:4326 (WGS84)",
  },
  layers: {
    layer1: punjabBoundaryData,
    layer2: pollingInfrastructureData,
    layer3: punjabDemographicData,
    layer4: infrastructureData,
    layer5: politicalGeographyData,
  },
  platformStack: {
    desktop: ["QGIS 3.x (free)"],
    spatialDatabase: ["PostgreSQL + PostGIS"],
    webDashboard: ["Leaflet.js", "Mapbox GL JS"],
    dataPipeline: ["Python (geopandas, shapely, fiona)"],
    alternative: ["ESRI ArcGIS + ArcGIS Online"],
  },
  implementationPriority: [
    {
      priority: 1,
      layer: "Layer 1 (Boundaries)",
      timeline: "Week 1",
      estimatedCost: "Free (IGISMap + Census)",
      rationale: "Foundation for all other layers",
    },
    {
      priority: 2,
      layer: "Layer 5 (Political)",
      timeline: "Week 1-2",
      estimatedCost: "Free (ECI + Lok Dhaba)",
      rationale: "Immediate strategic value",
    },
    {
      priority: 3,
      layer: "Layer 2 (Polling)",
      timeline: "Week 2-3",
      estimatedCost: "Free-Rs 1L (CEO Punjab data + PAMS access)",
      rationale: "Campaign planning critical",
    },
    {
      priority: 4,
      layer: "Layer 3 (Demographics)",
      timeline: "Week 3-4",
      estimatedCost: "Free (Census) + Rs 2-5L (caste survey)",
      rationale: "Targeting requires caste data",
    },
    {
      priority: 5,
      layer: "Layer 4 (Infrastructure)",
      timeline: "Week 4-6",
      estimatedCost: "Free (OSM, WRIS, HMIS) + Rs 1-2L (mobile coverage)",
      rationale: "Development messaging support",
    },
  ],
  totalEstimatedCost: "Rs 3-8 Lakhs",
  strategicValue: [
    {
      point: 1,
      title: "Micro-targeting by caste geography",
      description:
        "Overlay caste heatmaps on AC boundaries to identify dominant caste communities at each booth",
    },
    {
      point: 2,
      title: "Booth-level resource allocation",
      description:
        "Identify 500-700 critical booths across 40-50 target seats where focused effort swings the result",
    },
    {
      point: 3,
      title: "Development gap exploitation",
      description:
        "Build constituency-specific development manifestos tied to verifiable ground reality",
    },
    {
      point: 4,
      title: "Regional strategy differentiation",
      description:
        "Separate analyses for Malwa (69), Majha (27), and Doaba (23) - Congress collapsed most in Malwa",
    },
    {
      point: 5,
      title: "Competitor vulnerability mapping",
      description:
        "Visualize where AAP's 2022 vote was thin, SAD's base is eroding, BJP has zero presence",
    },
    {
      point: 6,
      title: "Turnout optimisation",
      description:
        "Focus voter mobilisation on Congress-supporting demographics with historically low turnout",
    },
    {
      point: 7,
      title: "Candidate-caste matching",
      description:
        "Select candidates whose caste profile matches the AC demographic for maximum electability",
    },
  ],
  dataGaps: [
    {
      gap: "Village-level caste sub-group data",
      impact: "HIGH",
      recommendedAction:
        "Commission field survey; use booth-level voter surname analysis from electoral rolls",
    },
    {
      gap: "Polling station GPS coordinates",
      impact: "HIGH",
      recommendedAction:
        "Request from CEO Punjab / NextGen DISE team; alternatively geocode from booth addresses",
    },
    {
      gap: "Gram Panchayat boundary shapefiles",
      impact: "MEDIUM",
      recommendedAction:
        "Request from Punjab Revenue Department or NIC Punjab",
    },
    {
      gap: "Post-2011 Census population data",
      impact: "MEDIUM",
      recommendedAction:
        "Use electoral roll data as proxy; project Census 2011 figures",
    },
  ],
  sources: [
    "IGISMap — India Administrative Boundary Shapefiles",
    "Election Commission of India — Statistical Reports",
    "CEO Punjab — Election Reporting Portal",
    "NIC Punjab — NextGen DISE documentation",
    "Lok Dhaba — Ashoka University Election Data Visualisation",
    "Dataful — Punjab Assembly Election Results",
    "Census of India — Census Tables",
  ],
};

// ==========================================
// DYNAMIC LAYERS (6-10) DATA
// ==========================================

// Technology Stack (Common Across Layers 6-10)
export const layerTechnologyStack: LayerTechnologyStack = {
  baseGIS: ["QGIS 3.x", "ArcGIS Online"],
  database: "PostgreSQL + PostGIS",
  visualization: ["Mapbox GL JS", "Leaflet.js"],
  dataPipeline: ["Python (geopandas, shapely, folium)"],
  mobileCollection: ["ODK Collect", "KoBoToolbox"],
  cloudInfrastructure: "AWS/Azure with TileServer GL",
};

// Dynamic Layer Overview
export const dynamicLayerOverview: LayerOverview[] = [
  {
    layer: 6,
    name: "Economic Geography",
    type: "Semi-static (seasonal)",
    updateFrequency: "monthly",
    primaryUse: "Understanding voter economic drivers",
  },
  {
    layer: 7,
    name: "Risk & Vulnerability",
    type: "Semi-static + event-triggered",
    updateFrequency: "quarterly",
    primaryUse: "Crisis response, relief positioning",
  },
  {
    layer: 8,
    name: "Campaign Activity Tracking",
    type: "Real-time",
    updateFrequency: "daily",
    primaryUse: "Ground operations management",
  },
  {
    layer: 9,
    name: "Real-Time Sentiment",
    type: "Real-time",
    updateFrequency: "continuous",
    primaryUse: "Pulse monitoring, messaging pivot",
  },
  {
    layer: 10,
    name: "Competitor Activity Intelligence",
    type: "Near-real-time",
    updateFrequency: "weekly",
    primaryUse: "Counter-strategy deployment",
  },
]

// Layer 6: Economic Geography Data
export const economicGeographyData: EconomicGeographyData = {
  cropPatterns: {
    monocultureShare: 85, // 85% of gross cropped area is wheat and paddy
    croppingIntensity: 190, // ~190% - nearly double-cropped statewide
    crops: [
      {
        crop: "Wheat",
        season: "rabi",
        dominantRegions: ["Statewide"],
        percentageOfArea: 45,
        notes: "Dominant Rabi crop",
      },
      {
        crop: "Paddy",
        season: "kharif",
        dominantRegions: ["Central Malwa", "Majha districts"],
        percentageOfArea: 40,
        notes: "Dominant Kharif crop",
      },
      {
        crop: "Potato",
        season: "rabi",
        dominantRegions: ["Doaba (Jalandhar, Kapurthala)"],
        notes: "Major cash crop in Doaba region",
      },
      {
        crop: "Cotton",
        season: "kharif",
        dominantRegions: [
          "Southwestern Malwa (Bathinda, Mansa, Fazilka)",
        ],
        notes: "Cotton belt",
      },
      {
        crop: "Sugarcane",
        season: "annual",
        dominantRegions: ["Border belts"],
        notes: "Limited area",
      },
    ],
    dataSource:
      "Punjab Agriculture Department crop cutting data; ISPRS remote sensing studies",
    updateFrequency: "seasonal",
  },
  mandiNetwork: {
    densityPer1000SqKm: 6.9, // vs national average ~1.5
    totalPrincipalYards: 154,
    totalSubYards: 277,
    totalDistricts: 23,
    keyMandis: [
      { name: "Sirhind", location: "Fatehgarh Sahib", district: "Fatehgarh Sahib" },
      { name: "Khanna", location: "Ludhiana", district: "Ludhiana" },
      { name: "Barnala", location: "Barnala", district: "Barnala" },
      { name: "Rajpura", location: "Patiala", district: "Patiala" },
      { name: "Dhuri", location: "Sangrur", district: "Sangrur" },
      { name: "Jalandhar City", location: "Jalandhar", district: "Jalandhar" },
    ],
    dataSource: "Agmarknet portal; Punjab Mandi Board official directory",
    strategicValue:
      "Mandi towns are political gathering points - rally locations near mandis maximize farmer contact",
  },
  industrialClusters: [
    {
      location: "Ludhiana",
      district: "Ludhiana",
      industries: [
        "Textile/hosiery/garment",
        "bicycle parts",
        "auto components",
      ],
      notes: "Largest in North India",
    },
    {
      location: "Jalandhar",
      district: "Jalandhar",
      industries: ["Sports goods", "leather", "hand tools"],
    },
    {
      location: "Amritsar",
      district: "Amritsar",
      industries: ["Textiles", "carpet weaving", "food processing"],
    },
    {
      location: "Mohali/Chandigarh periphery",
      district: "SAS Nagar",
      industries: ["IT/ITeS", "pharmaceuticals", "electronics"],
    },
    {
      location: "Bathinda",
      district: "Bathinda",
      industries: [
        "Oil refinery (Guru Gobind Singh Refinery)",
        "thermal power plants",
      ],
    },
  ],
  procurementCenters: [
    {
      agency: "FCI",
      commodities: ["Wheat (Rabi)", "Paddy (Kharif)"],
      season: "both",
    },
    {
      agency: "State agencies",
      commodities: ["Wheat (Rabi)", "Paddy (Kharif)"],
      season: "both",
    },
  ],
  implementationPriority: "HIGH",
};

// Layer 7: Risk & Vulnerability Data
export const riskVulnerabilityData: RiskVulnerabilityData = {
  floodProneAreas: {
    zones: [
      {
        river: "Sutlej",
        affectedDistricts: ["Ludhiana", "Jalandhar", "Kapurthala"],
        riskLevel: "high",
        notes: "Monsoon flooding Jul-Sep",
      },
      {
        river: "Beas",
        affectedDistricts: ["Gurdaspur", "Amritsar", "Kapurthala"],
        riskLevel: "high",
        notes: "Monsoon flooding Jul-Sep",
      },
      {
        river: "Ghaggar",
        affectedDistricts: ["Patiala", "Sangrur"],
        riskLevel: "medium",
        notes: "Monsoon flooding Jul-Sep",
      },
    ],
    recentEvents: ["2023 monsoon flooding", "2024 monsoon flooding"],
    dataSource: [
      "India Meteorological Department (IMD)",
      "Punjab State Disaster Management Authority (PSDMA)",
      "ISRO NRSC flood inundation maps",
    ],
    updateFrequency: "event_triggered",
  },
  droughtZones: {
    southwesternMalwa: {
      districts: ["Bathinda", "Mansa", "Fazilka", "Muktsar"],
      waterStress: "severe",
      groundwaterStatus: "Over 80% blocks over-exploited",
      canalVulnerability: "Low-release years from Bhakra/Pong dams",
    },
    groundwaterStatus: "Over 80% blocks over-exploited",
    dataSource: [
      "Central Ground Water Board annual reports",
      "Punjab Water Resources Department",
      "NASA GRACE satellite groundwater data",
    ],
    updateFrequency: "monthly",
  },
  borderZoneRisk: {
    districts: [
      {
        district: "Gurdaspur",
        sharedBorder: "Pakistan",
        risks: ["Drug trafficking", "security concerns"],
        securityConcerns: ["2016 Pathankot airbase attack"],
      },
      {
        district: "Amritsar",
        sharedBorder: "Pakistan",
        risks: ["Drug trafficking", "cross-border issues"],
        securityConcerns: [],
      },
      {
        district: "Tarn Taran",
        sharedBorder: "Pakistan",
        risks: ["Drug trafficking"],
        securityConcerns: [],
      },
      {
        district: "Ferozepur",
        sharedBorder: "Pakistan",
        risks: ["Drug trafficking"],
        securityConcerns: [],
      },
      {
        district: "Fazilka",
        sharedBorder: "Pakistan",
        risks: ["Drug trafficking", "cotton belt"],
        securityConcerns: [],
      },
      {
        district: "Pathankot",
        sharedBorder: "Pakistan",
        risks: ["Security concerns"],
        securityConcerns: ["Strategic importance"],
      },
    ],
    totalBorderDistricts: 6,
    dataSource: ["MHA annual reports", "BSF sector headquarters"],
    updateFrequency: "quarterly",
  },
  communalTensionHotspots: {
    hotspots: [
      {
        corridor: "Sahiwal/Tarn Taran",
        districts: ["Tarn Taran", "Amritsar"],
        riskLevel: "medium",
        requiresConfidentialHandling: true,
      },
      {
        corridor: "Parts of Amritsar, Jalandhar",
        districts: ["Amritsar", "Jalandhar"],
        riskLevel: "medium",
        requiresConfidentialHandling: true,
      },
    ],
    historicalEvents: ["1984 anti-Sikh riots"],
    dataSource: ["Punjab Police intelligence briefings", "ADL/NGO hate crime databases"],
    updateFrequency: "event_triggered",
  },
  drugTrafficking: {
    prevalenceRuralJalandhar: 65.5, // percentage
    heroinPrevalence: 20.8, // percentage among study subjects
    majorRoutes: [
      "Through Fazilka/Ferozepur border sector (heroin from Afghanistan/Pakistan)",
      "Through Gurdaspur/Pathankot",
      "Synthetic drugs via Delhi-Haryana corridor",
    ],
    backgroundRuralPercentage: 70, // 70% of drug abusers are from rural areas
    dataSource: [
      "NCB (Narcotics Control Bureau) annual reports",
      "Punjab Police STF data",
      "AIIMS National Drug Dependence Treatment Centre",
    ],
  },
  remoteDifficultBooths: {
    criteria: ">5km distance from motorable road or requiring river crossing/forest path",
    concentrationAreas: [
      "Kandi belt (Hoshiarpur, Ropar, Pathankot foothills)",
      "Border zone booths",
      "Abohar/Fazilka cotton belt",
    ],
    accessChallenges: [
      "River crossing required",
      "Forest path access",
      "Mountain terrain",
    ],
  },
  implementationPriority: "HIGH",
};

// Layer 8: Campaign Activity Data
export const campaignActivityData: CampaignActivityData = {
  d2dCoverage: {
    trackingEntries: [],
    progressIndicator: "% households contacted per booth, per constituency",
    methodology:
      "Custom PWA using ODK-based forms; PostGIS point/polygon layers; Leaflet.js dashboard",
    dataSource: "Field volunteer mobile app",
  },
  rallyEventLocations: {
    events: [],
    dataSource: [
      "Campaign team event calendar",
      "Volunteer event reports",
      "Media coverage verification",
    ],
  },
  volunteerDensity: {
    densityMap: [],
    attritionTracking: "Track volunteer dropout and recruitment velocity",
    recruitmentVelocity: "New volunteers per week",
    dataSource: "Volunteer registration database; activity check-in data",
  },
  technologyStack: {
    mobileApp: "ODK Collect or custom KoboToolbox deployment",
    server: "PostGIS database + GeoServer/TileServer GL",
    dashboard:
      "Web-based Mapbox GL JS dashboard for state/district/constituency coordinators",
    integration: "WhatsApp Business API for volunteer communication",
  },
  updateFrequency: "daily",
  implementationPriority: "CRITICAL",
};

// Layer 9: Real-Time Sentiment Data
export const realTimeSentimentData: RealTimeSentimentData = {
  socialMediaSentiment: {
    platforms: [
      {
        platform: "facebook",
        geographicResolution: "district",
        penetration: "Dominant in rural Punjab",
      },
      {
        platform: "twitter_x",
        geographicResolution: "district",
        penetration: "Lower penetration in rural Punjab",
      },
      {
        platform: "instagram",
        geographicResolution: "district",
        penetration: "Urban youth",
      },
      {
        platform: "whatsapp",
        geographicResolution: "district",
        penetration: "Pervasive but private - indirect signals only",
      },
      {
        platform: "youtube",
        geographicResolution: "district",
        penetration: "High volume on Punjab political content",
      },
    ],
    nlpProcessing:
      "NLP sentiment analysis on Punjabi/Gurmukhi and Hindi text; entity extraction for parties and leaders",
    techStack: [
      "Python (transformers, Indic NLP libraries)",
      "PostgreSQL + PostGIS",
      "Elasticsearch for text indexing",
    ],
    apiSources: [
      "Twitter/X API (limited free tier)",
      "Facebook Graph API (public pages/groups)",
      "YouTube Data API",
      "CrowdTangle (if available)",
    ],
    updateFrequency: "continuous",
  },
  surveyIntegration: {
    surveys: [],
    updateFrequency: "weekly",
  },
  electionDataLayer: {
    historicalResults: [
      {
        year: 2017,
        electionType: "assembly",
        boothLevelAvailable: true,
        dataSource: "ECI Form 20",
      },
      {
        year: 2022,
        electionType: "assembly",
        boothLevelAvailable: true,
        dataSource: "ECI Form 20",
      },
    ],
    boothLevelYears: [2009, 2014, 2019],
    updateFrequency: "pre_election",
  },
  outputProducts: {
    heatmapCongress: "Congress sentiment strength by booth",
    heatmapAAP: "AAP sentiment strength by booth",
    heatmapSAD: "SAD sentiment strength by booth",
    heatmapBJP: "BJP sentiment strength by booth",
    trendArrows:
      "Improving/declining sentiment over rolling 7-day, 30-day windows",
    alertSystem:
      "Sudden sentiment shifts trigger investigation for potential issue/controversy",
  },
  implementationPriority: "HIGH",
};

// Layer 10: Competitor Intelligence Data
export const competitorIntelligenceData: CompetitorIntelligenceData = {
  aapMLAEventTracking: {
    events: [],
    trackingAttributes: [
      "Event type",
      "Location",
      "Constituency",
      "Date",
      "Attendance",
      "Media coverage",
    ],
    dataSource: [
      "AAP social media pages (Facebook, Twitter, YouTube)",
      "Local media monitoring",
      "Volunteer intelligence reports",
    ],
    updateFrequency: "daily",
  },
  competitorAdvertising: {
    ads: [],
    metaAdLibrary: true,
    fieldPhotoReports: true,
    newspaperAdTracking: true,
    updateFrequency: "weekly",
  },
  oppositionWorkerPresence: {
    parties: {
      aap: {
        trackingIndicators: [
          "AAP volunteer training camps",
          "Membership drives",
          "Mohalla clinic events",
        ],
        dataSource: [
          "Field intelligence",
          "Volunteer reports",
          "AAP social media",
        ],
      },
      sad: {
        trackingIndicators: [
          "Akali Dal worker networks",
          "Dera influence zones",
          "Panthic organization activity",
        ],
        dataSource: [
          "Field intelligence",
          "Volunteer reports",
          "Local media",
        ],
      },
      bjp: {
        trackingIndicators: [
          "RSS shakha locations",
          "BJP morcha events",
          "Central scheme publicity",
        ],
        dataSource: [
          "Field intelligence",
          "Volunteer reports",
          "BJP social media",
        ],
      },
    },
    updateFrequency: "weekly",
  },
  oppositionRallyCalendar: {
    events: [],
    clashDetection: true,
    postEventAnalysis: true,
    updateFrequency: "daily",
  },
  intelligenceCollectionMethods: {
    osint: "Social media monitoring of all AAP MLAs, SAD leaders, BJP Punjab unit",
    humint: "Constituency-level Congress workers reporting opposition activity via mobile app",
    mediaIntelligence: "Automated news clipping service filtered for opposition mentions",
  },
  implementationPriority: "HIGH",
};

// Dynamic Layer Metadata
export const dynamicLayerMetadata: DynamicLayerMetadata = {
  researchDate: "19 May 2026",
  sourcesConsulted: 10,
  dataFreshness: "Most recent data from 2024-2026 (varies by layer)",
  confidence: "MEDIUM",
  agent: "Research Agent (GEO-012)",
  taskReference: "Micro-Task GEO-012",
};

// Implementation Phases
export const implementationPhases: ImplementationPhase[] = [
  {
    phase: "Phase 1: Foundation",
    timeline: "Jun-Jul 2026",
    layers: "Layer 6 (Economic) + Layer 7 (Risk)",
    estimatedCost: "Rs 5-8 lakh",
    priority: "HIGH",
  },
  {
    phase: "Phase 2: Operational",
    timeline: "Aug-Oct 2026",
    layers: "Layer 8 (Campaign Activity)",
    estimatedCost: "Rs 10-15 lakh",
    priority: "CRITICAL",
  },
  {
    phase: "Phase 3: Intelligence",
    timeline: "Nov 2026-Jan 2027",
    layers: "Layer 9 (Sentiment) + Layer 10 (Competitor)",
    estimatedCost: "Rs 8-12 lakh",
    priority: "HIGH",
  },
  {
    phase: "Phase 4: Full Integration",
    timeline: "Feb 2027",
    layers: "All layers operational",
    estimatedCost: "Ongoing: Rs 3-5 lakh/month",
    priority: "CRITICAL",
  },
]

// Complete Dynamic GIS Intelligence Stack
export const gisDynamicIntelligenceStack: GISDynamicIntelligenceStack = {
  metadata: dynamicLayerMetadata,
  layerOverview: dynamicLayerOverview,
  technologyStack: layerTechnologyStack,
  layers: {
    layer6: economicGeographyData,
    layer7: riskVulnerabilityData,
    layer8: campaignActivityData,
    layer9: realTimeSentimentData,
    layer10: competitorIntelligenceData,
  },
  implementationRoadmap: implementationPhases,
  totalOneTimeCost: "Rs 25-40 lakh",
  totalMonthlyOperationalCost: "Rs 3-5 lakh/month",
  teamRequired: [
    "1 GIS Analyst (full-time)",
    "1 Full-stack Developer (mobile app + dashboard)",
    "1 Data Analyst (sentiment + surveys)",
    "2-3 Field Coordinators (data collection training)",
    "1 OSINT Analyst (competitor tracking)",
  ],
  strategicValue: [
    {
      layer: 6,
      value:
        "Identifies farmer distress zones for targeted MSP/procurement messaging; industrial belt workers for employment policy outreach; mandi towns as rally locations",
    },
    {
      layer: 7,
      value:
        "Positions Congress as responsive - flood/drought relief promises in vulnerable areas; drug crisis messaging in affected belts; border zone development promises",
    },
    {
      layer: 8,
      value:
        "Ensures NO booth is left uncontacted - the difference between 50 seats and 60+ seats is ground coverage in marginal booths",
    },
    {
      layer: 9,
      value:
        "Enables real-time messaging pivots - if sentiment shifts on an issue, Congress can respond within 24 hours rather than days",
    },
    {
      layer: 10,
      value:
        "Prevents ambushes - knowing where AAP is concentrating resources allows Congress to either contest or avoid, optimizing limited resources",
    },
  ],
  dataPointsSummary: [
    {
      layer: "6.1 Crop Patterns",
      keyDataSource:
        "Punjab Agriculture Dept; Sentinel-2 satellite",
      updateFrequency: "seasonal",
      techRequired: "Remote sensing + geopandas",
      confidence: "HIGH",
    },
    {
      layer: "6.2 Mandi/APMC",
      keyDataSource: "Agmarknet; Punjab Mandi Board",
      updateFrequency: "monthly",
      techRequired: "Point layer GIS",
      confidence: "HIGH",
    },
    {
      layer: "6.3 Industrial Clusters",
      keyDataSource: "dcmsme.gov.in; Invest Punjab",
      updateFrequency: "annual",
      techRequired: "Polygon layers",
      confidence: "HIGH",
    },
    {
      layer: "6.4 Procurement Centers",
      keyDataSource: "FCI Punjab; state food dept",
      updateFrequency: "seasonal",
      techRequired: "Point layer",
      confidence: "HIGH",
    },
    {
      layer: "7.1 Flood Zones",
      keyDataSource: "CWC; IMD; PSDMA; NRSC ISRO",
      updateFrequency: "event_triggered",
      techRequired: "Raster flood maps",
      confidence: "HIGH",
    },
    {
      layer: "7.2 Drought Zones",
      keyDataSource: "CGWB; Punjab Water Resources",
      updateFrequency: "monthly",
      techRequired: "Raster groundwater maps",
      confidence: "HIGH",
    },
    {
      layer: "7.3 Border Risk",
      keyDataSource: "MHA reports; BSF (restricted)",
      updateFrequency: "quarterly",
      techRequired: "Buffer zone polygons",
      confidence: "MEDIUM",
    },
    {
      layer: "7.4 Communal Hotspots",
      keyDataSource: "Punjab Police intelligence; media tracking",
      updateFrequency: "event_triggered",
      techRequired: "Point heat map",
      confidence: "LOW",
    },
    {
      layer: "7.5 Drug Trafficking",
      keyDataSource: "NCB; Punjab STF; AIIMS surveys",
      updateFrequency: "monthly",
      techRequired: "Heat map + route lines",
      confidence: "MEDIUM",
    },
    {
      layer: "7.6 Remote Booths",
      keyDataSource: "CEO Punjab; ECI booth GIS",
      updateFrequency: "pre_election",
      techRequired: "Point layer with accessibility",
      confidence: "HIGH",
    },
    {
      layer: "8.1 D2D Coverage",
      keyDataSource: "Volunteer mobile app (custom)",
      updateFrequency: "daily",
      techRequired: "Mobile app + PostGIS",
      confidence: "MEDIUM",
    },
    {
      layer: "8.2 Rally/Events",
      keyDataSource: "Campaign team + volunteer reports",
      updateFrequency: "daily",
      techRequired: "Point layer + buffers",
      confidence: "MEDIUM",
    },
    {
      layer: "8.3 Volunteer Density",
      keyDataSource: "Registration database",
      updateFrequency: "daily",
      techRequired: "Choropleth",
      confidence: "MEDIUM",
    },
    {
      layer: "9.1 Social Sentiment",
      keyDataSource: "Twitter/FB/YouTube APIs; NLP",
      updateFrequency: "continuous",
      techRequired: "Python NLP + PostGIS",
      confidence: "MEDIUM",
    },
    {
      layer: "9.2 Survey Integration",
      keyDataSource: "Field surveys; IVR polls",
      updateFrequency: "weekly",
      techRequired: "Survey tool + PostGIS",
      confidence: "MEDIUM",
    },
    {
      layer: "10.1 AAP MLA Events",
      keyDataSource: "OSINT (social media + media)",
      updateFrequency: "daily",
      techRequired: "Point layer",
      confidence: "MEDIUM",
    },
    {
      layer: "10.2 Ad Density",
      keyDataSource: "Meta Ad Library; field photos",
      updateFrequency: "weekly",
      techRequired: "Point + density map",
      confidence: "MEDIUM",
    },
    {
      layer: "10.3 Opposition Workers",
      keyDataSource: "Field intelligence",
      updateFrequency: "weekly",
      techRequired: "Choropleth estimate",
      confidence: "LOW",
    },
  ],
  gapsVerification: [
    {
      gap: "Drug trafficking route data",
      impact: "HIGH",
      recommendedAction:
        "Approach via RTI or establish intelligence-sharing arrangement with state Congress leadership",
    },
    {
      gap: "Communal tension mapping",
      impact: "HIGH",
      recommendedAction:
        "Highly sensitive - no public dataset exists; requires careful ground intelligence collection",
    },
    {
      gap: "Opposition worker density",
      impact: "MEDIUM",
      recommendedAction:
        "By nature an estimate - use multiple data points for triangulation",
    },
    {
      gap: "Social media Punjabi NLP",
      impact: "HIGH",
      recommendedAction:
        "Existing Indic NLP models have limited Punjabi/Gurmukhi accuracy; budget for custom model training",
    },
    {
      gap: "Booth-level lat/long data",
      impact: "HIGH",
      recommendedAction:
        "File RTI or request from PPCC contacts; CEO Punjab should have this data",
    },
    {
      gap: "Real-time flood/weather integration",
      impact: "MEDIUM",
      recommendedAction:
        "Verify API integration availability and cost with IMD and CWC",
    },
    {
      gap: "Mobile app offline capability",
      impact: "HIGH",
      recommendedAction:
        "Critical for rural Punjab where connectivity is inconsistent; must be tested in Kandi belt and border zones",
    },
  ],
};

// ==========================================
// EXPORTS
// ==========================================

// Static layers export
export {
  punjabBoundaryData,
  pollingInfrastructureData,
  punjabDemographicData,
  infrastructureData,
  politicalGeographyData,
  congressPerformanceHistory,
  gisIntelligenceStack,
};

// Dynamic layers export
export {
  layerTechnologyStack,
  dynamicLayerOverview,
  economicGeographyData,
  riskVulnerabilityData,
  campaignActivityData,
  realTimeSentimentData,
  competitorIntelligenceData,
  dynamicLayerMetadata,
  implementationPhases,
  gisDynamicIntelligenceStack,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get layer update frequency as string
 */
export function getLayerUpdateFrequency(layer: number): LayerUpdateFrequency {
  const overview = dynamicLayerOverview.find((l) => l.layer === layer);
  return overview?.updateFrequency || "monthly";
}

/**
 * Get implementation priority for a layer
 */
export function getLayerPriority(
  layer: 6 | 7 | 8 | 9 | 10
): ImplementationPriority {
  const priorities: Record<number, ImplementationPriority> = {
    6: "HIGH",
    7: "HIGH",
    8: "CRITICAL",
    9: "HIGH",
    10: "HIGH",
  };
  return priorities[layer] || "MEDIUM";
}

/**
 * Get congress performance for an election year
 */
export function getCongressPerformance(
  year: number
): CongressPerformanceHistory | undefined {
  return congressPerformanceHistory.find((p) =>
    p.election.includes(year.toString())
  );
}

/**
 * Get total implementation cost estimate
 */
export function getTotalImplementationCost(): string {
  return "Rs 25-40 lakh (one-time setup) + Rs 3-5 lakh/month (operational)";
}
