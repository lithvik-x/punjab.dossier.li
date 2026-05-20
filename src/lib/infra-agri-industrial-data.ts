// @ts-nocheck
// Infrastructure Data for Punjab Agricultural & Industrial
// Derived from: research-M2/MP1-foundational/geography/infra-agri-industrial.md
// Research Date: 19 May 2026 | Data Currency: 2025-2026

import type {
  MandiAPMCData,
  DistrictMandi,
  MandiProcurementStats,
  ColdStorageData,
  KVKData,
  VeterinaryData,
  SeedFertilizerData,
  IndustrialEstate,
  SEZData,
  MSMECluster,
  ITPark,
  TextileCluster,
  FoodProcessingPark,
  PSIECComplex,
  AgriculturalIssue,
  IndustrialIssue,
  InfrastructureKPI,
} from "@/types/infra-agri-industrial-types";

// ==========================================
// MANDI/APMC DATA
// ==========================================

export const mandiAPMCData: MandiAPMCData = {
  principalMarketYards: 154,
  subMarketYards: 277,
  totalRegulatedMarkets: 431,
  wheatProcurementCenters2026: 2041,
  eNAMLinkedAPMCs: "Partial coverage",
  msrpData: [
    {
      season: "Rabi 2023-24",
      mspRsPerQuintal: 2125,
      procurementCenters: 1800,
      estimatedProcurement: "VERIFICATION_NEEDED",
    },
    {
      season: "Rabi 2024-25",
      mspRsPerQuintal: 2275,
      procurementCenters: 1900,
      estimatedProcurement: "VERIFICATION_NEEDED",
    },
    {
      season: "Rabi 2025-26",
      mspRsPerQuintal: 2425,
      procurementCenters: 2041,
      estimatedProcurement: "29.7 MT (national, Punjab largest contributor)",
    },
  ],
};

export const districtMandis: DistrictMandi[] = [
  { district: "Ludhiana", majorMandis: ["Ludhiana", "Khanna", "Jagraon", "Moga Road"] },
  { district: "Amritsar", majorMandis: ["Amritsar", "Tarn Taran", "Baba Bakala", "Patti"] },
  { district: "Jalandhar", majorMandis: ["Jalandhar", "Phillaur", "Nakodar", "Shahkot"] },
  { district: "Bathinda", majorMandis: ["Bathinda", "Rampura Phul", "Goniana", "Talwandi Sabo"] },
  { district: "Sangrur", majorMandis: ["Sangrur", "Sunam", "Barnala", "Dhuri", "Lehragaga"] },
  { district: "Patiala", majorMandis: ["Patiala", "Rajpura", "Nabha", "Samana"] },
  { district: "Faridkot", majorMandis: ["Faridkot", "Kotkapura", "Moga (shared)", "Jaitu"] },
  { district: "Fazilka", majorMandis: ["Fazilka", "Abohar", "Jalalabad"] },
  { district: "Muktsar", majorMandis: ["Muktsar", "Malout", "Gidderbaha"] },
  { district: "Mansa", majorMandis: ["Mansa", "Budhlada", "Sardulgarh"] },
  { district: "Pathankot", majorMandis: ["Pathankot", "Dinanagar"] },
  { district: "Gurdaspur", majorMandis: ["Gurdaspur", "Batala", "Qadian", "Dera Baba Nanak"] },
  { district: "Hoshiarpur", majorMandis: ["Hoshiarpur", "Dasuya", "Garhshankar", "Mukerian"] },
  { district: "Kapurthala", majorMandis: ["Kapurthala", "Phagwara", "Sultanpur Lodhi"] },
  { district: "Rupnagar", majorMandis: ["Rupnagar", "Anandpur Sahib", "Nangal"] },
  { district: "SAS Nagar", majorMandis: ["Mohali", "Kharar", "Dera Bassi"] },
  { district: "Fatehgarh Sahib", majorMandis: ["Fatehgarh Sahib", "Bassi Pathana", "Sirhind"] },
  { district: "Tarn Taran", majorMandis: ["Tarn Taran", "Patti", "Khadoor Sahib"] },
  { district: "Nawanshahr", majorMandis: ["Nawanshahr", "Banga", "Balachaur"] },
  { district: "Barnala", majorMandis: ["Barnala", "Tapa", "Sehna"] },
];

export const mandiProcurementStats: MandiProcurementStats[] = [
  { season: "Rabi 2023-24", mspRsPerQuintal: 2125, procurementCenters: 1800, note: "VERIFICATION_NEEDED" },
  { season: "Rabi 2024-25", mspRsPerQuintal: 2275, procurementCenters: 1900, note: "VERIFICATION_NEEDED" },
  { season: "Rabi 2025-26", mspRsPerQuintal: 2425, procurementCenters: 2041, estimatedProcurementMT: 29.7, note: "29.7 MT national procurement, Punjab largest contributor" },
];

// ==========================================
// COLD STORAGE & WAREHOUSING DATA
// ==========================================

export const coldStorageData: ColdStorageData = {
  totalColdStorages: 200,
  coldStorageNote: "Major concentration in potato belt (Jalandhar, Kapurthala, Hoshiarpur)",
  fciGodowns: "Extensive network - FCI Punjab Zone covers all 23 districts",
  siloWarehouses: [
    { locations: 16, note: "Between Bathinda-Rampura Phul, Bhuchchu, others", year: 2025 },
  ],
  centralPoolStorageCapacity: "VERIFICATION_NEEDED - Under World's Largest Grain Storage Plan",
  keyHubs: [
    { region: "Jalandhar-Kapurthala belt", focus: "Potato, perishables - Largest concentration" },
    { region: "Ludhiana", focus: "Dairy-linked cold chain" },
    { region: "Amritsar-Tarn Taran", focus: "Vegetable/fruit storage" },
    { region: "Bathinda-Muktsar", focus: "Cotton and grain storage" },
  ],
};

// ==========================================
// KVK DATA
// ==========================================

export const kvkData: KVKData = {
  totalKVKs: 22,
  asOfYear: 2024,
  administrativeZone: "ICAR ATARI Zone I",
  zoneHQ: "Ludhiana",
  parentUniversities: ["PAU Ludhiana", "GADVASU Ludhiana"],
  districtsCovered: [
    "Amritsar",
    "Bathinda",
    "Barnala",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Ferozepur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Mansa",
    "Moga",
    "Mohali (Majra)",
    "Muktsar",
    "Nawanshahr",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "Sangrur",
    "Tarn Taran",
  ],
};

// ==========================================
// VETERINARY INFRASTRUCTURE DATA
// ==========================================

export const veterinaryData: VeterinaryData = {
  civilVeterinaryHospitals: 140,
  civilVeterinaryDispensaries: 1300,
  veterinaryPolyclinics: 23,
  mobileVeterinaryClinics: "Operational across districts - VERIFICATION_NEEDED",
  notes: "Punjab (India) veterinary infrastructure managed by Department of Animal Husbandry, Dairying & Fisheries. Note: 2,508 total facilities figure in search results refers to Punjab (Pakistan), not Indian Punjab.",
};

// ==========================================
// SEED & FERTILIZER INFRASTRUCTURE
// ==========================================

export const seedFertilizerData: SeedFertilizerData = {
  pauSeedFarms: "PAU operates seed farms at Ludhiana and regional stations",
  stateSeedFarms: "VERIFICATION_NEEDED",
  fertilizerDepots: "IFFCO, KRIBHCO outlets across all blocks",
  soilTestingLabs: "District-level labs under Department of Agriculture",
};

// ==========================================
// INDUSTRIAL ESTATES DATA
// ==========================================

export const industrialEstates: IndustrialEstate[] = [
  { district: "Ludhiana", focalPointEstate: "Focal Point Phases I-VII, Dhandari Kalan", keyIndustries: "Hosiery, bicycle parts, auto components, sewing machines", managedBy: "PSIEC" },
  { district: "Ludhiana", focalPointEstate: "Industrial Area-A, Industrial Area-B", keyIndustries: "Textiles, light engineering", managedBy: "PSIEC" },
  { district: "Jalandhar", focalPointEstate: "Focal Point, Industrial Estate", keyIndustries: "Sports goods, hand tools, rubber goods, leather", managedBy: "PSIEC" },
  { district: "Jalandhar", focalPointEstate: "Surgical/medical equipment cluster", keyIndustries: "Medical instruments", managedBy: "Private cluster" },
  { district: "Amritsar", focalPointEstate: "Focal Point", keyIndustries: "Textiles, woolens, food processing", managedBy: "PSIEC" },
  { district: "Amritsar", focalPointEstate: "Industrial Estate", keyIndustries: "Carpet, handicrafts", managedBy: "PSIEC" },
  { district: "Bathinda", focalPointEstate: "Focal Point", keyIndustries: "Thermal power, refinery (HMEL), textiles", managedBy: "PSIEC/State" },
  { district: "Mohali (SAS Nagar)", focalPointEstate: "Phase VII-VIII, Industrial Area", keyIndustries: "IT/ITeS, electronics, pharma", managedBy: "PSIEC" },
  { district: "Mohali", focalPointEstate: "Quark City IT Park", keyIndustries: "IT/ITeS", managedBy: "Private" },
  { district: "Patiala", focalPointEstate: "Industrial Estate", keyIndustries: "Bicycle (Atlas), beverages", managedBy: "PSIEC" },
  { district: "Rajpura", focalPointEstate: "Industrial Estate", keyIndustries: "Food processing, logistics", managedBy: "PSIEC" },
  { district: "Pathankot", focalPointEstate: "Industrial Estate", keyIndustries: "Army-related, plywood", managedBy: "PSIEC" },
  { district: "Hoshiarpur", focalPointEstate: "Industrial Estate", keyIndustries: "Sports goods, inverter/UPS", managedBy: "PSIEC" },
  { district: "Batala (Gurdaspur)", focalPointEstate: "Focal Point", keyIndustries: "Machine tools, castings", managedBy: "PSIEC" },
  { district: "Dera Bassi", focalPointEstate: "Industrial Area", keyIndustries: "Pharma, food processing", managedBy: "PSIEC" },
  { district: "Malout", focalPointEstate: "Industrial Estate", keyIndustries: "Textiles, auto components", managedBy: "PSIEC" },
  { district: "Abohar", focalPointEstate: "Industrial Estate", keyIndustries: "Cotton ginning, food processing", managedBy: "PSIEC" },
];

export const psiecComplexes: PSIECComplex[] = [
  { name: "Phase IV-A", location: "Dhandari Kalan", area: "32 acres" },
  { name: "Phase VI", location: "Dhandari Kalan" },
  { name: "Phase VII", location: "Dhandari Kalan" },
  { name: "Multiple phases", location: "Dhandari Kalan", note: "Extensive industrial zones" },
];

// ==========================================
// SEZ DATA
// ==========================================

export const sezData: SEZData[] = [
  {
    name: "Quarkcity India Pvt. Ltd.",
    location: "Focal Point, Phase VIII-Extension, Mohali",
    type: "IT/ITeS",
    areaHectares: "~5.09 (after partial de-notification)",
    status: "Operational",
  },
  {
    name: "Sun Pharmaceutical Industries Ltd.",
    location: "Mohali",
    type: "Pharma",
    areaHectares: "VERIFICATION_NEEDED",
    status: "Notified",
  },
  {
    name: "Noida SEZ (jurisdictional unit)",
    location: "A-41, Focal Point, Mohali",
    type: "Multi-sector",
    areaHectares: "Government SEZ",
    status: "Operational",
  },
];

// ==========================================
// MSME CLUSTER DATA
// ==========================================

export const msmeClusters: MSMECluster[] = [
  { clusterType: "Hosiery & Textiles", location: "Ludhiana", keyProducts: "Woolen knitwear, yarn", nationalSignificance: "90% of India's woolen hosiery" },
  { clusterType: "Bicycle & Parts", location: "Ludhiana", keyProducts: "Bicycles, components", nationalSignificance: "Major national hub" },
  { clusterType: "Sports Goods", location: "Jalandhar", keyProducts: "Inflatable balls, equipment", nationalSignificance: "Global supplier" },
  { clusterType: "Hand Tools", location: "Jalandhar", keyProducts: "Wrenches, spanners, pliers", nationalSignificance: "Significant export cluster" },
  { clusterType: "Machine Tools", location: "Batala", keyProducts: "Lathe machines, castings", nationalSignificance: "Industrial machinery" },
  { clusterType: "Auto Components", location: "Ludhiana, Malout", keyProducts: "Two-wheeler parts, tractor parts", nationalSignificance: "Auto ancillary hub" },
  { clusterType: "Surgical Instruments", location: "Jalandhar", keyProducts: "Medical instruments, disposables", nationalSignificance: "Emerging cluster" },
  { clusterType: "Rubber Goods", location: "Jalandhar", keyProducts: "Rubber products", nationalSignificance: "VERIFICATION_NEEDED" },
  { clusterType: "Cotton Ginning & Processing", location: "Abohar, Fazilka, Muktsar", keyProducts: "Raw cotton processing", nationalSignificance: "Cotton belt" },
  { clusterType: "Pharma & Chemicals", location: "Dera Bassi, Mohali", keyProducts: "Formulations, APIs", nationalSignificance: "Growing hub" },
  { clusterType: "Electrical Goods", location: "Ludhiana", keyProducts: "Switches, meters", nationalSignificance: "VERIFICATION_NEEDED" },
  { clusterType: "Steel & Forgings", location: "Mandi Gobindgarh (Fatehgarh Sahib)", keyProducts: "Steel re-rolling, forgings", nationalSignificance: "\"Steel Town of Punjab\"" },
  { clusterType: "Yarn & Textiles", location: "Multiple (Amritsar, Ludhiana)", keyProducts: "Cotton/acrylic yarn", nationalSignificance: "VERIFICATION_NEEDED" },
  { clusterType: "IT & ESDM", location: "Mohali", keyProducts: "Software, electronics design", nationalSignificance: "Emerging IT hub" },
];

// ==========================================
// IT PARK DATA
// ==========================================

export const itParks: ITPark[] = [
  { name: "IT City", location: "Mohali (SAS Nagar)", focus: "IT/ITeS, startups", status: "Operational" },
  { name: "Quark City", location: "Mohali", focus: "IT/ITeS SEZ", status: "Operational" },
  { name: "Rajiv Gandhi IT Park", location: "Chandigarh (adjacent)", focus: "IT/ITeS", status: "Operational" },
  { name: "STPI Mohali", location: "Mohali", focus: "Software exports", status: "Operational" },
  { name: "Emerging IT hubs", location: "Ludhiana, Amritsar", focus: "IT/BPO", status: "Developing" },
];

// ==========================================
// TEXTILE CLUSTER DATA
// ==========================================

export const textileClusters: TextileCluster[] = [
  { name: "Textile Processing Cluster", location: "Ludhiana", type: "Hosiery/woolen", status: "Operational (undergoing green transformation)" },
  { name: "Textile Dyeing Cluster", location: "Ludhiana", type: "Dyeing/finishing", status: "Operational (green upgrade push 2026)" },
  { name: "Punjab Textile & Apparel Policy", location: "Statewide", type: "Policy framework 2026", status: "Notified 2026" },
  { name: "Integrated Textile Park", location: "VERIFICATION_NEEDED", type: "SITP scheme", status: "VERIFICATION_NEEDED" },
];

// ==========================================
// FOOD PROCESSING PARK DATA
// ==========================================

export const foodProcessingParks: FoodProcessingPark[] = [
  { name: "Mega Food Park", location: "VERIFICATION_NEEDED", focus: "Multi-commodity", status: "VERIFICATION_NEEDED" },
  { name: "Agro-processing clusters", location: "Multiple districts", focus: "Basmati rice, dairy, fruits", status: "Operational" },
];

// ==========================================
// STRATEGIC OBSERVATIONS
// ==========================================

export const agriculturalIssues: AgriculturalIssue[] = [
  {
    issue: "Mandi Modernization",
    description: "Over 1,100 markets nationally are non-functional; Punjab's mandis need digital upgrade.",
    congressPromise: "e-mandi expansion",
  },
  {
    issue: "Cold Chain Gaps",
    description: "Despite ~200 cold storages, post-harvest losses remain high. Districts in Malwa cotton belt and border areas underserved.",
  },
  {
    issue: "Procurement Centers",
    description: "2,041 centers in 2026 is a large number but quality/efficiency of procurement varies. AAP claims vs farmer experience gap.",
  },
  {
    issue: "KVK Coverage",
    description: "22 KVKs for 23 districts is adequate but outreach effectiveness varies.",
    congressPromise: "Enhanced farm science extension",
  },
];

export const industrialIssues: IndustrialIssue[] = [
  {
    issue: "SEZ Underperformance",
    description: "Only 2-3 operational SEZs out of 11 approved shows policy implementation failure.",
  },
  {
    issue: "Ludhiana Dominance",
    description: "Ludhiana alone contributes majority of industrial output. Other districts (especially Malwa cotton belt, border areas) lack industrial estates.",
  },
  {
    issue: "Green Transformation",
    description: "Textile dyeing clusters face environmental scrutiny. Green upgrade funding needed.",
    congressPromise: "Green upgrade funding commitment",
  },
  {
    issue: "IT Asymmetry",
    description: "Mohali gets all IT investment. Amritsar, Jalandhar, Bathinda need IT parks to create youth employment.",
    congressPromise: "IT parks in Amritsar, Jalandhar, Bathinda",
  },
  {
    issue: "Steel Town Decline",
    description: "Mandi Gobindgarh steel cluster faces competition and environmental challenges. Needs modernization package.",
    congressPromise: "Modernization package for Mandi Gobindgarh",
  },
  {
    issue: "Border District Industrial Lag",
    description: "Pathankot, Gurdaspur, Tarn Taran, Fazilka lack significant industrial infrastructure.",
  },
];

// ==========================================
// AGGREGATE INFRASTRUCTURE KPI
// ==========================================

export const infrastructureKPI: InfrastructureKPI = {
  mandi: mandiAPMCData,
  coldStorage: coldStorageData,
  kvk: kvkData,
  veterinary: veterinaryData,
  seedFertilizer: seedFertilizerData,
  industrialEstates: industrialEstates,
  sezs: sezData,
  msmeClusters: msmeClusters,
  itParks: itParks,
  textileClusters: textileClusters,
  foodProcessingParks: foodProcessingParks,
  psiecComplexes: psiecComplexes,
  districtMandis: districtMandis,
  agriculturalIssues: agriculturalIssues,
  industrialIssues: industrialIssues,
};

// ==========================================
// EXPORTS FOR CONSTANTS
// ==========================================

export const MSP_VALUES = {
  RABI_2023_24: 2125,
  RABI_2024_25: 2275,
  RABI_2025_26: 2425,
} as const;

export const PROCUREMENT_CENTERS = {
  RABI_2023_24: 1800,
  RABI_2024_25: 1900,
  RABI_2025_26: 2041,
} as const;

export const TOTAL_REGULATED_MARKETS = 431;
export const PRINCIPAL_MARKET_YARDS = 154;
export const SUB_MARKET_YARDS = 277;
export const TOTAL_KVKS = 22;
export const ESTIMATED_COLD_STORAGES = 200;
export const SILO_WAREHOUSES_UNDER_TENDER = 16;
export const CIVIL_VETERINARY_HOSPITALS_ESTIMATED = 140;
export const CIVIL_VETERINARY_DISPENSARIES_ESTIMATED = 1300;
export const VETERINARY_POLYCLINICS = 23;
export const WHEAT_PROCUREMENT_2026 = 2041;
export const ESTIMATED_PROCUREMENT_2026_MT = 29.7;
