// Urbanization & Settlement Classification Data for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/urbanization.md
// Research Date: 2026-05-20

import type { UrbanizationData } from "@/types/urbanization-types";

export const urbanizationData: UrbanizationData = {
  // ==========================================
  // 1. URBANIZATION OVERVIEW
  // ==========================================
  overview: {
    census2011: {
      totalPopulation: 27743338,
      urbanPopulation: 10399146,
      urbanPercent: 37.49,
      ruralPopulation: 17344192,
      ruralPercent: 62.51,
      urbanDecadalGrowth2001to2011: 25.7,
      nationalUrbanAverage2011: 31.16,
      punjabVsNational: 6.3,
    },
    projections: {
      estimatedPopulation2026: 30200000,
      estimatedUrbanPercent2026: 41.5,
      estimatedRuralPercent2026: 58.5,
    },
    trajectory: {
      year1991: 27.7,
      year2001: 33.9,
      year2011: 37.49,
      year2026: 41.5,
      paceNote: "Punjab added only 3.6 pp in 2001-2011 vs 6.2 pp in 1991-2001",
    },
  },

  // ==========================================
  // 2. MUNICIPAL CORPORATIONS (13 total as of 2024)
  // ==========================================
  municipalCorporations: [
    {
      rank: 1,
      city: "Ludhiana",
      district: "Ludhiana",
      population2011UA: 1618879,
      estimatedPopulation2022: 1917000,
      keyCharacteristic: "Industrial hub, textiles, hosiery, cycle manufacturing",
    },
    {
      rank: 2,
      city: "Amritsar",
      district: "Amritsar",
      population2011UA: 1183705,
      estimatedPopulation2022: 1425000,
      keyCharacteristic: "Religious tourism (Golden Temple), trade, border economy",
    },
    {
      rank: 3,
      city: "Jalandhar",
      district: "Jalandhar",
      population2011UA: 873725,
      estimatedPopulation2022: 1053895,
      keyCharacteristic: "Sports goods, NRIs, medical tourism",
    },
    {
      rank: 4,
      city: "Patiala",
      district: "Patiala",
      population2011UA: 446246,
      estimatedPopulation2022: 736305,
      keyCharacteristic: "Administrative, educational, royal heritage",
    },
    {
      rank: 5,
      city: "Bathinda",
      district: "Bathinda",
      population2011UA: 285813,
      estimatedPopulation2022: 368000,
      keyCharacteristic: "Thermal power, oil refinery, education hub",
    },
    {
      rank: 6,
      city: "Mohali (SAS Nagar)",
      district: "SAS Nagar",
      population2011UA: 166864,
      estimatedPopulation2022: 334205,
      keyCharacteristic: "IT/ITeS, Chandigarh satellite, fastest growing",
    },
    {
      rank: 7,
      city: "Pathankot",
      district: "Pathankot",
      population2011UA: 147875,
      estimatedPopulation2022: 195365,
      keyCharacteristic: "Military cantonment, gateway to J&K/HP",
    },
    {
      rank: 8,
      city: "Moga",
      district: "Moga",
      population2011UA: 168443,
      estimatedPopulation2022: 226973,
      keyCharacteristic: "NRI belt, agricultural trade",
    },
    {
      rank: 9,
      city: "Batala",
      district: "Gurdaspur",
      population2011UA: 158404,
      estimatedPopulation2022: 198481,
      keyCharacteristic: "Iron/steel re-rolling, agricultural implements",
    },
    {
      rank: 10,
      city: "Firozpur",
      district: "Firozpur",
      population2011UA: 146897,
      estimatedPopulation2022: 194456,
      keyCharacteristic: "Border town, cantonment",
    },
    {
      rank: 11,
      city: "Malerkotla",
      district: "Malerkotla",
      population2011UA: 135238,
      estimatedPopulation2022: 169578,
      keyCharacteristic: "Only Muslim-majority city; added as M Corp in May 2021",
    },
    {
      rank: 12,
      city: "Abohar",
      district: "Fazilka",
      population2011UA: 145238,
      estimatedPopulation2022: 175988,
      keyCharacteristic: "Cotton/textile market, kinnow belt",
    },
    {
      rank: 13,
      city: "Phagwara",
      district: "Kapurthala",
      population2011UA: 117954,
      estimatedPopulation2022: 167785,
      keyCharacteristic: "Sugar mill, NRI investments",
    },
  ],

  municipalStructure: {
    municipalCorporations: 13,
    totalMunicipalities: 98,
    municipalCouncilsNagarPanchayats: 85,
    notableCouncils: [
      "Kapurthala",
      "Hoshiarpur",
      "Barnala",
      "Faridkot",
      "Muktsar",
      "Khanna",
      "Rajpura",
      "Nakodar",
      "Zirakpur",
      "Kharar",
      "Doraha",
      "Samana",
      "Nabha",
      "Sirhind",
    ],
    fastGrowingPeriUrban: [
      "Zirakpur",
      "Kharar",
      "Dera Bassi",
      "Khanna-Mandi Gobindgarh",
      "Phagwara",
    ],
  },

  // ==========================================
  // 3. CANTONMENT BOARDS
  // ==========================================
  cantonmentBoards: [
    { name: "Firozpur Cantt", district: "Firozpur", estimatedPopulation: 50000 },
    { name: "Jalandhar Cantt", district: "Jalandhar", estimatedPopulation: 45000 },
    { name: "Amritsar Cantt", district: "Amritsar", estimatedPopulation: 15000 },
    { name: "Dagshai, Subathu, Kasauli (HP, Punjab regimental)", district: "HP", estimatedPopulation: 0 },
  ],

  // ==========================================
  // 4. DISTRICT URBANIZATION LEVELS (Census 2011)
  // ==========================================
  allDistrictUrbanization: [
    { district: "Ludhiana", urbanPercent: 59.16 },
    { district: "SAS Nagar/Mohali", urbanPercent: 54.76 },
    { district: "Amritsar", urbanPercent: 53.58 },
    { district: "Jalandhar", urbanPercent: 50.95 },
    { district: "Kapurthala", urbanPercent: 40.0 },
    { district: "Patiala", urbanPercent: 35.0 },
    { district: "Bathinda", urbanPercent: 32.0 },
    { district: "Gurdaspur", urbanPercent: 30.0 },
    { district: "Pathankot", urbanPercent: 30.0 },
    { district: "Hoshiarpur", urbanPercent: 30.0 },
    { district: "Muktsar Sahib", urbanPercent: 25.0 },
    { district: "Mansa", urbanPercent: 22.0 },
    { district: "Barnala", urbanPercent: 20.0 },
    { district: "Moga", urbanPercent: 20.0 },
    { district: "Faridkot", urbanPercent: 20.0 },
    { district: "Fazilka", urbanPercent: 20.0 },
    { district: "Ferozepur", urbanPercent: 18.0 },
    { district: "Sangrur", urbanPercent: 18.0 },
    { district: "Tarn Taran", urbanPercent: 17.0 },
    { district: "Fatehgarh Sahib", urbanPercent: 17.0 },
    { district: "SBS Nagar", urbanPercent: 15.0 },
    { district: "Rupnagar", urbanPercent: 15.0 },
  ],

  districtUrbanization: [
    {
      category: "Highly Urbanized (>50%)",
      urbanPercentRange: "50-60%",
      districts: ["Ludhiana (59.16%)", "SAS Nagar/Mohali (54.76%)", "Amritsar (53.58%)", "Jalandhar (50.95%)"],
    },
    {
      category: "Moderately Urbanized (30-50%)",
      urbanPercentRange: "30-50%",
      districts: ["Kapurthala", "Patiala", "Bathinda", "Gurdaspur", "Pathankot", "Hoshiarpur"],
    },
    {
      category: "Low Urbanization (<30%)",
      urbanPercentRange: "15-30%",
      districts: [
        "Muktsar Sahib",
        "Mansa",
        "Barnala",
        "Moga",
        "Faridkot",
        "Fazilka",
        "Ferozepur",
        "Sangrur",
        "Tarn Taran",
        "Fatehgarh Sahib",
        "SBS Nagar",
        "Rupnagar",
      ],
    },
  ],

  // ==========================================
  // 5. RURAL SETTLEMENT CLASSIFICATION
  // ==========================================
  villageInfrastructure: {
    totalRevenueVillages: 12278,
    inhabitedVillages: 12100,
    uninhabitedVillages: 178,
    averageVillagePopulation: 1400,
    averageVillageArea: "300-400 hectares",
    totalPanchayats: 13000,
  },

  villageTypology: [
    {
      type: "Border Villages",
      description: "Within 0-10 km of Pakistan border; special security regime; land compensation issues",
      districts: "Ferozepur, Fazilka, Tarn Taran, Amritsar, Gurdaspur, Pathankot",
      electoralSignificance: "~200+ villages; strong anti-incumbency sentiment on border issues",
    },
    {
      type: "Kandi Belt Villages",
      description: "Foothill villages in Shivalik range; water scarcity, erosion, backwardness",
      districts: "Hoshiarpur, Rupnagar, SBS Nagar, Pathankot",
      electoralSignificance: "Historically Congress-leaning; development deficit is key issue",
    },
    {
      type: "Riverine Villages",
      description: "Islands/belts between river channels (Beas, Sutlej, Ravi); flood-prone, limited connectivity",
      districts: "Kapurthala, Jalandhar, Ludhiana, Ferozepur, Amritsar",
      electoralSignificance: "~150-200 villages; marginalized, strong demand for bridges/roads",
    },
    {
      type: "Canal-irrigated Heartland",
      description: "Prosperous agricultural villages; Green Revolution beneficiaries",
      districts: "Ludhiana, Jalandhar, Kapurthala, Moga, Sangrur, Barnala, Patiala",
      electoralSignificance: "Jat-Sikh dominance; farm distress and MSP are core electoral issues",
    },
    {
      type: "Cotton Belt Villages",
      description: "South-west Punjab; cotton/wheat cycle; higher poverty, water stress",
      districts: "Bathinda, Mansa, Muktsar, Fazilka, Faridkot",
      electoralSignificance: "AAP strongholds in 2022; debt and farmer suicides are issues",
    },
    {
      type: "Remote/Backward Villages",
      description: "Low connectivity, poor infrastructure",
      districts: "Parts of Mansa, Bathinda, Muktsar, Fazilka",
      electoralSignificance: "Dalit concentration high; social justice issues dominate",
    },
  ],

  // ==========================================
  // 6. PERI-URBAN ZONES
  // ==========================================
  periUrbanZones: {
    belts: [
      {
        name: "Mohali-Chandigarh-Derabassi-Zirakpur-Kharar corridor",
        anchorCity: "Chandigarh/Mohali",
        keyAreas: "SAS Nagar district, parts of Patiala",
        characteristics: "Fastest growing; IT, real estate; high NRI investment; youth voter concentration",
      },
      {
        name: "Ludhiana-Mandi Gobindgarh-Khanna-Doraha belt",
        anchorCity: "Ludhiana",
        keyAreas: "Ludhiana district east-west",
        characteristics: "Industrial sprawl; migrant labor; pollution; informal economy",
      },
      {
        name: "Jalandhar-Phagwara-Nakodar triangle",
        anchorCity: "Jalandhar",
        keyAreas: "Jalandhar + Kapurthala",
        characteristics: "NRI belt; sports goods; medical/educational infrastructure",
      },
      {
        name: "Amritsar periphery",
        anchorCity: "Amritsar",
        keyAreas: "Amritsar + Tarn Taran (Baba Bakala, Majitha)",
        characteristics: "Religious tourism spill-over; border adjacency; drug trafficking routes",
      },
      {
        name: "Patiala-Rajpura-Sirhind-Fatehgarh Sahib corridor",
        anchorCity: "Patiala",
        keyAreas: "Patiala + Fatehgarh Sahib",
        characteristics: "Educational institutions; historical/religious tourism; highway corridor (Delhi-Amritsar)",
      },
      {
        name: "Bathinda-Goniana-Rampura Phul belt",
        anchorCity: "Bathinda",
        keyAreas: "Bathinda district",
        characteristics: "Thermal power corridor; refinery workers; canal-head agriculture",
      },
    ],
  },

  // ==========================================
  // 7. SLUM POPULATION (Census 2011)
  // ==========================================
  slumData: {
    totalSlumPopulation: 1450000,
    percentOfUrbanPopulation: 14,
    verificationNote: "Post-2011 estimates suggest growth of 15-20% in Ludhiana and Amritsar",
    cities: [
      {
        city: "Amritsar (M Corp + OG)",
        slumPopulation: 329797,
        percentOfCityPop: 28,
        keyElectoralNote: "Largest slum population in Punjab; Dalit concentration",
      },
      {
        city: "Ludhiana (M Corp)",
        slumPopulation: 244163,
        percentOfCityPop: 18,
        keyElectoralNote: "Industrial slums, migrant workers",
      },
      {
        city: "Jalandhar (M Corp + OG)",
        slumPopulation: 145117,
        percentOfCityPop: 17,
        keyElectoralNote: "NRI city with significant slum pockets",
      },
      {
        city: "Bathinda (M Corp)",
        slumPopulation: 41153,
        percentOfCityPop: 14,
        keyElectoralNote: "Refinery/power plant workers",
      },
      {
        city: "Hoshiarpur (M Cl)",
        slumPopulation: 37680,
        percentOfCityPop: 34,
        keyElectoralNote: "High slum-to-city ratio",
      },
      {
        city: "Pathankot (M Cl + OG)",
        slumPopulation: 37069,
        percentOfCityPop: 25,
        keyElectoralNote: "Military-adjacent settlements",
      },
      {
        city: "Tarn Taran (M Cl)",
        slumPopulation: 37828,
        percentOfCityPop: 30,
        keyElectoralNote: "Border-proximity slums",
      },
      {
        city: "Abohar (M Cl)",
        slumPopulation: 40105,
        percentOfCityPop: 28,
        keyElectoralNote: "Agricultural labor settlements",
      },
      {
        city: "Malout (M Cl)",
        slumPopulation: 36507,
        percentOfCityPop: 36,
        keyElectoralNote: "Highest slum ratio among mid-size towns",
      },
      {
        city: "Faridkot (M Cl + OG)",
        slumPopulation: 31716,
        percentOfCityPop: 29,
        keyElectoralNote: "Cotton belt labor",
      },
    ],
  },

  // ==========================================
  // 8. URBANIZATION METRICS AND TRENDS
  // ==========================================
  urbanizationMetrics: {
    urbanizationRate2011: 37.49,
    decadalUrbanGrowth2001to2011: 25.7,
    estimatedUrbanizationRate2026: 41.5,
    mohaliGrowthRate2001to2011: 33.15,
    ruralToUrbanMigrationTrend: "Accelerating since 1991; male migration predominates",
    censusTownFormation: "Slower than national average; few new CTs declared",
  },

  housingInfrastructure: {
    housing: [
      { indicator: "Pucca Houses", urban: "~85%", rural: "~75%" },
      { indicator: "Toilet Access (SBM)", urban: "~95%", rural: "~90%" },
      { indicator: "Electricity Connection", urban: "~99%", rural: "~98%" },
    ],
    urbanHousingShortage: "~300,000 units",
    slumHouseholds: "~270,000",
    tapWaterUrban: "~70%",
    tapWaterRural: "~45%",
  },

  // ==========================================
  // 9. ELECTORAL IMPLICATIONS
  // ==========================================
  electoralImplications: {
    urbanRuralVoting: [
      {
        dimension: "Top Issues",
        urbanVoterPriorities: "Jobs, air pollution, civic infrastructure, traffic, law & order",
        ruralVoterPriorities: "MSP, farm debt, canal water, rural roads, drug addiction",
      },
      {
        dimension: "Media Consumption",
        urbanVoterPriorities: "Social media, YouTube, digital news",
        ruralVoterPriorities: "Cable TV, WhatsApp, vernacular print",
      },
      {
        dimension: "NRI Influence",
        urbanVoterPriorities: "High (Mohali, Jalandhar, Ludhiana, Phagwara)",
        ruralVoterPriorities: "Moderate (remittance-dependent villages)",
      },
      {
        dimension: "AAP Performance Perception",
        urbanVoterPriorities: "Mixed -- anti-corruption appeal, but civic delivery questioned",
        ruralVoterPriorities: "Positive initially (electricity, mohalla clinics), fading on farm distress",
      },
      {
        dimension: "Congress Opportunity",
        urbanVoterPriorities: "Urban middle-class discontent with AAP; legacy Patiala-Amritsar connect",
        ruralVoterPriorities: "Rural distress + farm debt + traditional Jat-Sikh base",
      },
      {
        dimension: "Turnout Pattern",
        urbanVoterPriorities: "Lower (55-65%)",
        ruralVoterPriorities: "Higher (70-80%)",
      },
    ],
    seatClassification: [
      {
        category: "Urban-dominant (>60% urban)",
        approximateSeats: 25,
        keyConstituencies: "Ludhiana Central, North, South; Amritsar Central, North, South; Jalandhar Central, North; Mohali; Patiala Urban",
        likelySwingFactor: "AAP-Congress direct fight; BJP factor in some",
      },
      {
        category: "Semi-urban (30-60%)",
        approximateSeats: 40,
        keyConstituencies: "Jalandhar West, Cantt; Amritsar West; Bathinda Urban; Pathankot; Hoshiarpur; Kapurthala; Rajpura",
        likelySwingFactor: "Three-way contests; local candidate matters most",
      },
      {
        category: "Rural-dominant (<30%)",
        approximateSeats: 60,
        keyConstituencies: "Most Malwa and Doaba seats; border belt; Kandi belt; cotton belt",
        likelySwingFactor: "Jat-Sikh dynamics; farm issues; AAP's 2022 base",
      },
    ],
    congressStrategies: [
      {
        number: 1,
        strategyName: "Urban offensive needed",
        description: "Congress is perceived as a rural party. Must build credible urban narrative on jobs, pollution, civic infrastructure. Target 10-12 urban seats for pickup.",
      },
      {
        number: 2,
        strategyName: "Peri-urban is the swing zone",
        description: "The 35-40 semi-urban seats are where elections are won. Congress must combine rural agrarian appeal with urban development promises in these belts.",
      },
      {
        number: 3,
        strategyName: "Slum voters",
        description: "~1.45 million slum dwellers are concentrated in AAP strongholds (Amritsar, Ludhiana, Jalandhar). Congress must offer credible housing and sanitation alternatives to break AAP's urban poor base.",
      },
      {
        number: 4,
        strategyName: "Mohali-Bathinda growth story",
        description: "Fast-urbanizing towns respond to IT/industrial employment promises. Congress manifesto should address youth employment in these corridors.",
      },
      {
        number: 5,
        strategyName: "Border and Kandi villages",
        description: "These are natural Congress territories due to historical neglect. Reinforce with specific development commitments (roads, water, border-area packages).",
      },
    ],
  },

  // ==========================================
  // 10. DATA QUALITY AND GAPS
  // ==========================================
  dataQuality: [
    {
      dataPoint: "Census 2021 data",
      status: "VERIFICATION_NEEDED",
      actionRequired: "NOT CONDUCTED (postponed indefinitely). Use 2011 baseline with projections.",
    },
    {
      dataPoint: "District-wise urban % 2024-2026",
      status: "VERIFICATION_NEEDED",
      actionRequired: "Extrapolate from 2011 + growth rates",
    },
    {
      dataPoint: "Slum population post-2019",
      status: "VERIFICATION_NEEDED",
      actionRequired: "PMAY-Urban data, state urban development reports",
    },
    {
      dataPoint: "Peri-urban boundary delineation",
      status: "PARTIAL",
      actionRequired: "GMADA/GLADA master plans may have updated maps",
    },
    {
      dataPoint: "Migrant worker urban population",
      status: "VERIFICATION_NEEDED",
      actionRequired: "Inter-state migrant data from Labour Bureau",
    },
    {
      dataPoint: "Jal Jeevan Mission rural tap water progress",
      status: "VERIFICATION_NEEDED",
      actionRequired: "JJM dashboard for Punjab",
    },
    {
      dataPoint: "Housing shortage current estimate",
      status: "VERIFICATION_NEEDED",
      actionRequired: "State urban housing policy documents",
    },
  ],
};

// ==========================================
// DERIVED METRICS FOR DASHBOARD
// ==========================================

export const urbanizationMetrics = {
  urbanizationRate2011: "37.49%",
  urbanPopulation2011: "10.4 million",
  urbanPopulation2026: "~12.5 million (projected)",
  urbanGrowth2001to2011: "+25.7%",
  mohaliFastestGrowing: "33.15% growth (2001-2011)",
  urbanVsRuralVoters: "~41-42% urban vs ~58-59% rural (2026)",
  urbanSeatsBattleground: "35-40 semi-urban seats",
  slumPopulation: "~1.45 million",
  urbanHousingShortage: "~300,000 units",
  top4DistrictsUrbanPop: "50%+ of Punjab's urban population",
  assemblySeatsInTop4Urban: "~35-40 seats",
};

// Chart data for urbanization trajectory
export const urbanizationTrajectoryData = [
  { year: 1991, percent: 27.7, label: "1991" },
  { year: 2001, percent: 33.9, label: "2001" },
  { year: 2011, percent: 37.49, label: "2011" },
  { year: 2026, percent: 41.5, label: "2026 (proj)", isProjection: true },
];

// Chart data for municipal corporation populations
export const municipalCorpPopulationData = [
  { city: "Ludhiana", pop2022: 1917000, color: "#4F46E5" },
  { city: "Amritsar", pop2022: 1425000, color: "#7C3AED" },
  { city: "Jalandhar", pop2022: 1053895, color: "#2563EB" },
  { city: "Patiala", pop2022: 736305, color: "#059669" },
  { city: "Bathinda", pop2022: 368000, color: "#DC2626" },
  { city: "Mohali", pop2022: 334205, color: "#F59E0B" },
];

// District urbanization data for bar chart
export const districtUrbanizationChartData = [
  { district: "Ludhiana", percent: 59.16, category: "Highly Urbanized" },
  { district: "Mohali", percent: 54.76, category: "Highly Urbanized" },
  { district: "Amritsar", percent: 53.58, category: "Highly Urbanized" },
  { district: "Jalandhar", percent: 50.95, category: "Highly Urbanized" },
  { district: "Kapurthala", percent: 40.0, category: "Moderate" },
  { district: "Patiala", percent: 35.0, category: "Moderate" },
  { district: "Bathinda", percent: 32.0, category: "Moderate" },
  { district: "Muktsar", percent: 25.0, category: "Low" },
  { district: "Mansa", percent: 22.0, category: "Low" },
  { district: "Ferozepur", percent: 18.0, category: "Low" },
];

// Slum concentration by city
export const slumConcentrationData = [
  { city: "Amritsar", slumPop: 329797, percent: 28 },
  { city: "Ludhiana", slumPop: 244163, percent: 18 },
  { city: "Jalandhar", slumPop: 145117, percent: 17 },
  { city: "Bathinda", slumPop: 41153, percent: 14 },
  { city: "Hoshiarpur", slumPop: 37680, percent: 34 },
  { city: "Malout", slumPop: 36507, percent: 36 },
];

// Seat classification summary
export const seatClassificationSummary = {
  urbanDominant: { seats: 25, percent: 21 },
  semiUrban: { seats: 40, percent: 34 },
  ruralDominant: { seats: 60, percent: 45 },
};
