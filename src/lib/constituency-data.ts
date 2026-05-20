// Constituency Profile Data
// Derived from: MP1-foundational/geography/constituency-profile-cards.md
// Research Date: 19 May 2026

import type {
  ConstituencyProfile,
  DistrictReference,
  RegionalOverview,
  CropZone,
  BorderConstituencySummary,
  GeographicClassification,
  AgriculturalZone,
  StrategicInsight,
  DataGap,
  ConstituencySummaryStats,
} from "@/types/constituency-types";

// ==========================================
// REGIONAL OVERVIEW
// ==========================================

export const regionalOverview: RegionalOverview[] = [
  {
    region: "Majha",
    districts: ["Amritsar", "Gurdaspur", "Pathankot", "Tarn Taran"],
    assemblySeats: 25,
    keyCharacteristics: "Border belt, Ravi/Beas rivers, high defence presence, sacred Sikh sites",
  },
  {
    region: "Doaba",
    districts: ["Jalandhar", "Kapurthala", "Hoshiarpur", "SBS Nagar"],
    assemblySeats: 23,
    keyCharacteristics: "NRI hub, Beas/Sutlej rivers, high literacy, hoshiarpur foothills",
  },
  {
    region: "Malwa",
    districts: [
      "Ludhiana", "Patiala", "Bathinda", "Sangrur", "Faridkot", "Fazilka",
      "Firozpur", "Mansa", "Moga", "Muktsar", "Barnala", "Fatehgarh Sahib",
      "Rupnagar", "SAS Nagar", "Malerkotla",
    ],
    assemblySeats: 69,
    keyCharacteristics: "Largest region, cotton belt, paddy-wheat dominant, semi-arid south, canal-irrigated",
  },
];

// ==========================================
// DISTRICT REFERENCE TABLE
// ==========================================

export const districtReferences: DistrictReference[] = [
  { district: "Amritsar", areaSqKm: 2647, population: 2490891, density: 932, region: "Majha", border: true, rivers: ["Ravi", "Beas (edge)"] },
  { district: "Barnala", areaSqKm: 1410, population: 596294, density: 419, region: "Malwa", border: false, rivers: [] },
  { district: "Bathinda", areaSqKm: 3385, population: 1388859, density: 414, region: "Malwa", border: false, rivers: ["Ghaggar (seasonal)"] },
  { district: "Faridkot", areaSqKm: 1469, population: 618008, density: 424, region: "Malwa", border: false, rivers: [] },
  { district: "Fatehgarh Sahib", areaSqKm: 1180, population: 599814, density: 508, region: "Malwa", border: false, rivers: ["Sutlej (edge)"] },
  { district: "Firozpur", areaSqKm: 2190, population: 965337, density: 440, region: "Malwa", border: true, rivers: ["Sutlej"] },
  { district: "Fazilka", areaSqKm: 3113, population: 1180483, density: 379, region: "Malwa", border: true, rivers: ["Sutlej"] },
  { district: "Gurdaspur", areaSqKm: 2635, population: 2299026, density: 872, region: "Majha", border: true, rivers: ["Ravi", "Beas"] },
  { district: "Hoshiarpur", areaSqKm: 3365, population: 1582793, density: 466, region: "Doaba", border: false, rivers: ["Beas", "Sutlej (edge)", "Shivalik foothills"] },
  { district: "Jalandhar", areaSqKm: 2632, population: 2181753, density: 831, region: "Doaba", border: false, rivers: ["Sutlej", "Beas"] },
  { district: "Kapurthala", areaSqKm: 1632, population: 817668, density: 501, region: "Doaba", border: false, rivers: ["Beas"] },
  { district: "Ludhiana", areaSqKm: 3767, population: 3487882, density: 975, region: "Malwa", border: false, rivers: ["Sutlej"] },
  { district: "Malerkotla", areaSqKm: 837, population: 452016, density: 540, region: "Malwa", border: false, rivers: [] },
  { district: "Mansa", areaSqKm: 2171, population: 768808, density: 350, region: "Malwa", border: false, rivers: ["Ghaggar (seasonal)"] },
  { district: "Moga", areaSqKm: 2216, population: 992289, density: 444, region: "Malwa", border: false, rivers: ["Sutlej (edge)"] },
  { district: "Sri Muktsar Sahib", areaSqKm: 2615, population: 902702, density: 348, region: "Malwa", border: false, rivers: ["Sutlej (edge)"] },
  { district: "Pathankot", areaSqKm: 929, population: 676598, density: 728, region: "Majha", border: true, rivers: ["Ravi", "Chakki"] },
  { district: "Patiala", areaSqKm: 3218, population: 1892282, density: 596, region: "Malwa", border: false, rivers: ["Ghaggar", "Sutlej (edge)"] },
  { district: "Rupnagar", areaSqKm: 1369, population: 683349, density: 488, region: "Malwa", border: false, rivers: ["Sutlej"] },
  { district: "SAS Nagar (Mohali)", areaSqKm: 1093, population: 986147, density: 830, region: "Malwa", border: false, rivers: [] },
  { district: "Sangrur", areaSqKm: 3610, population: 1655169, density: 457, region: "Malwa", border: false, rivers: ["Ghaggar (seasonal)"] },
  { district: "SBS Nagar (Nawanshahr)", areaSqKm: 1267, population: 612310, density: 478, region: "Doaba", border: false, rivers: ["Sutlej (edge)"] },
  { district: "Tarn Taran", areaSqKm: 2449, population: 1119627, density: 464, region: "Majha", border: true, rivers: ["Ravi", "Beas (Harike confluence)"] },
];

// ==========================================
// MAJHA CONSTITUENCIES (25 seats)
// ==========================================

// Pathankot District (3 seats)
export const majhaPathankotConstituencies: ConstituencyProfile[] = [
  {
    id: 1, name: "Sujanpur", district: "Pathankot", region: "Majha", reservation: "General", lokSabha: "Gurdaspur",
    electorate2022: 167230, geographicType: "Border / Semi-Urban", borderProximity: "YES (Pakistan, ~10 km)",
    topographicZone: "Shivalik foothills / Plains", riverProximity: ["Ravi (west)", "Chakki (north)"], floodRisk: "MODERATE",
    railConnectivity: "Sujanpur railway station (Pathankot-Jalandhar line)",
    roadConnectivity: "NH-44, Pathankot-Dalhousie road", cropPattern: ["Wheat", "paddy", "maize", "some horticulture"],
    industrialProfile: "NOT_FOUND", keySites: ["NOT_FOUND"],
  },
  {
    id: 2, name: "Bhoa", district: "Pathankot", region: "Majha", reservation: "SC", lokSabha: "Gurdaspur",
    electorate2022: 182915, geographicType: "Border / Rural", borderProximity: "YES (Pakistan, ~5-15 km)",
    topographicZone: "Shivalik foothills", riverProximity: ["Ravi (west)", "Chakki"], floodRisk: "MODERATE",
    roadConnectivity: "NH-44 corridor", cropPattern: ["Wheat", "paddy", "maize"],
    industrialProfile: "NOT_FOUND", keySites: [],
  },
  {
    id: 3, name: "Pathankot", district: "Pathankot", region: "Majha", reservation: "General", lokSabha: "Gurdaspur",
    electorate2022: 152519, geographicType: "Urban / Border", borderProximity: "YES (Pakistan & J&K, within 10 km)",
    topographicZone: "Shivalik foothills", riverProximity: ["Ravi", "Chakki"], floodRisk: "MODERATE",
    airConnectivity: "Pathankot Airport (civil enclave, IAF base)",
    railConnectivity: "Pathankot Junction (major railhead, Jammu-Delhi line)",
    roadConnectivity: "NH-44, NH-154; gateway to J&K and HP",
    cropPattern: ["Wheat", "paddy", "maize", "horticulture"],
    industrialProfile: "Defence-related, small-scale",
    keySites: ["Nurpur Fort", "Shahpurkandi Fort", "Mukteshwar Temple"],
  },
];

// Gurdaspur District (7 seats)
export const majhaGurdaspurConstituencies: ConstituencyProfile[] = [
  {
    id: 4, name: "Gurdaspur", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur",
    electorate2022: 169628, geographicType: "Semi-Urban / Border", borderProximity: "YES (Pakistan, ~20 km)",
    topographicZone: "Alluvial plains, Shivalik edge", riverProximity: ["Beas (south)", "Ravi (west)"], floodRisk: "LOW",
    railConnectivity: "Gurdaspur railway station", roadConnectivity: "NH-54, NH-354",
    cropPattern: ["Wheat", "paddy", "sugarcane"], keySites: [],
  },
  {
    id: 5, name: "Dina Nagar", district: "Gurdaspur", region: "Majha", reservation: "SC", lokSabha: "Gurdaspur",
    electorate2022: 192562, geographicType: "Rural / Border", borderProximity: "YES (Pakistan, ~15-25 km)",
    riverProximity: ["Ravi (northwest)"], floodRisk: "LOW",
    cropPattern: ["Wheat", "paddy"], keySites: ["Dina Nagar historic town"],
  },
  {
    id: 6, name: "Qadian", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur",
    electorate2022: 181907, geographicType: "Semi-Urban", borderProximity: "Moderate",
    riverProximity: ["Beas (south)"], floodRisk: "LOW",
    cropPattern: ["Wheat", "paddy", "basmati"], keySites: ["Qadian -- Ahmadiyya headquarters"],
  },
  {
    id: 7, name: "Batala", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur",
    electorate2022: 188862, geographicType: "Urban / Industrial", borderProximity: "Moderate (~40 km)",
    riverProximity: ["Beas (south)"], floodRisk: "LOW",
    railConnectivity: "Batala railway station",
    cropPattern: ["Wheat", "paddy"],
    industrialProfile: "Cast iron, agricultural implements, steel rolling",
    keySites: ["Batala historic town", "multiple gurudwaras"],
  },
  {
    id: 8, name: "Sri Hargobindpur", district: "Gurdaspur", region: "Majha", reservation: "SC", lokSabha: "Gurdaspur",
    electorate2022: 178734, geographicType: "Rural", borderProximity: "Moderate (~40 km)",
    riverProximity: ["Beas (south)"], floodRisk: "LOW",
    cropPattern: ["Wheat", "paddy"], keySites: ["Sri Hargobindpur -- historic Sikh town, damdama sahib"],
  },
  {
    id: 9, name: "Fatehgarh Churian", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur",
    electorate2022: 175730, geographicType: "Rural / Semi-Urban", borderProximity: "Moderate",
    riverProximity: ["Beas (south)"], floodRisk: "LOW",
    cropPattern: ["Wheat", "paddy", "basmati"], keySites: [],
  },
  {
    id: 10, name: "Dera Baba Nanak", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur",
    electorate2022: 194613, geographicType: "Border / Rural", borderProximity: "YES (Pakistan, within 5 km; Kartarpur Corridor)",
    riverProximity: ["Ravi (on border)"], floodRisk: "HIGH",
    keySites: ["Dera Baba Nanak", "Kartarpur Sahib Corridor (Pakistan view)"],
    cropPattern: ["Wheat", "paddy"],
  },
];

// Amritsar District (10 seats)
export const majhaAmritsarConstituencies: ConstituencyProfile[] = [
  {
    id: 11, name: "Ajnala", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar",
    electorate2022: 157161, geographicType: "Border / Rural", borderProximity: "YES (Pakistan, ~5-10 km)",
    riverProximity: ["Ravi (north)"], floodRisk: "HIGH",
    cropPattern: ["Wheat", "paddy", "basmati"], keySites: [],
  },
  {
    id: 12, name: "Raja Sansi", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar",
    electorate2022: 177713, geographicType: "Semi-Urban", borderProximity: "Moderate (~20 km)",
    airConnectivity: "Sri Guru Ram Dass Jee International Airport (nearby)",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 13, name: "Majitha", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar",
    electorate2022: 166136, geographicType: "Rural / Semi-Urban", borderProximity: "Moderate",
    riverProximity: ["Beas (east, near Harike)"], floodRisk: "LOW",
    cropPattern: ["Wheat", "paddy"], keySites: ["Majitha historic town"],
  },
  {
    id: 14, name: "Jandiala", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar",
    electorate2022: 180674, geographicType: "Semi-Urban", borderProximity: "Moderate",
    railConnectivity: "Jandiala railway station (Amritsar-Delhi line)",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 15, name: "Amritsar North", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar",
    electorate2022: 202095, geographicType: "Urban",
    airConnectivity: "Sri Guru Ram Dass Jee International Airport",
    railConnectivity: "Amritsar Junction", roadConnectivity: "NH-3, NH-54",
    keySites: ["Golden Temple", "Jallianwala Bagh", "Wagah Border (nearby)"],
    cropPattern: [],
  },
  {
    id: 16, name: "Amritsar West", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar",
    electorate2022: 214073, geographicType: "Urban",
    keySites: ["Partition Museum", "Town Hall"],
    cropPattern: [],
  },
  {
    id: 17, name: "Amritsar Central", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar",
    electorate2022: 147058, geographicType: "Urban (core city)",
    keySites: ["Golden Temple vicinity", "Durgiana Temple"],
    cropPattern: [],
  },
  {
    id: 18, name: "Amritsar East", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar",
    electorate2022: 168013, geographicType: "Urban",
    cropPattern: [], keySites: [],
  },
  {
    id: 19, name: "Amritsar South", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar",
    electorate2022: 177605, geographicType: "Semi-Urban / Peri-Urban",
    cropPattern: [], keySites: [],
  },
  {
    id: 20, name: "Attari", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar",
    electorate2022: 189475, geographicType: "Border / Rural", borderProximity: "YES (Pakistan, ~0-5 km; Wagah-Attari border)",
    railConnectivity: "Attari railway station (last Indian station before Pakistan)",
    keySites: ["Wagah Border Ceremony", "Attari Joint Check Post"],
    cropPattern: [],
  },
  {
    id: 25, name: "Baba Bakala", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar",
    electorate2022: 199929, geographicType: "Rural / Semi-Urban",
    riverProximity: ["Beas (south)"], floodRisk: "LOW",
    keySites: ["Baba Bakala Gurudwara (historical Sikh shrine)"],
    cropPattern: ["Wheat", "paddy"],
  },
];

// Tarn Taran District (5 seats)
export const majhaTarnTaranConstituencies: ConstituencyProfile[] = [
  {
    id: 21, name: "Tarn Taran", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Tarn Taran",
    electorate2022: 196866, geographicType: "Semi-Urban / Border", borderProximity: "YES (Pakistan, ~10-20 km)",
    riverProximity: ["Ravi (west)", "Beas (east)"], floodRisk: "HIGH (Harike wetland area, Ravi/Beas confluence)",
    keySites: ["Tarn Taran Gurudwara (largest Sikh sarovar)", "Harike Bird Sanctuary"],
    cropPattern: ["Wheat", "paddy"],
  },
  {
    id: 22, name: "Khem Karan", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Tarn Taran",
    electorate2022: 216090, geographicType: "Border / Rural", borderProximity: "YES (Pakistan, on border, 0-5 km)",
    riverProximity: ["Sutlej/Beas confluence at Harike"], floodRisk: "VERY HIGH (riverine flooding, 2025 floods)",
    cropPattern: ["Wheat", "paddy", "basmati"],
    keySites: ["Khem Karan battle memorial (1965 war)", "Harike Barrage"],
  },
  {
    id: 23, name: "Patti", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Tarn Taran",
    electorate2022: 202155, geographicType: "Rural / Border", borderProximity: "YES (Pakistan, ~10-15 km)",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 24, name: "Khadoor Sahib", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Tarn Taran",
    electorate2022: 201328, geographicType: "Rural / Semi-Urban",
    riverProximity: ["Beas (north)"], floodRisk: "LOW",
    keySites: ["Khadoor Sahib Gurudwara", "Goindwal Sahib"],
    cropPattern: ["Wheat", "paddy"],
  },
];

// ==========================================
// DOABA CONSTITUENCIES (23 seats)
// ==========================================

// Kapurthala District (4 seats)
export const doabaKapurthalaConstituencies: ConstituencyProfile[] = [
  {
    id: 26, name: "Bholath", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Kapurthala",
    electorate2022: 136413, geographicType: "Rural",
    riverProximity: ["Beas (north)"], floodRisk: "LOW",
    cropPattern: ["Wheat", "paddy", "maize"], keySites: [],
  },
  {
    id: 27, name: "Kapurthala", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Kapurthala",
    electorate2022: 149885, geographicType: "Urban / Semi-Urban",
    railConnectivity: "Kapurthala railway station",
    keySites: ["Kapurthala Palace", "Jagatjit Palace", "Moorish Mosque"],
    industrialProfile: "NOT_FOUND", cropPattern: [],
  },
  {
    id: 28, name: "Sultanpur Lodhi", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Kapurthala",
    electorate2022: 148094, geographicType: "Rural / Semi-Urban",
    riverProximity: ["Beas (north)"], floodRisk: "LOW",
    keySites: ["Sultanpur Lodhi -- Guru Nanak's years of spiritual awakening; 550th Prakash Purb celebrations (2019)"],
    cropPattern: [],
  },
  {
    id: 29, name: "Phagwara", district: "Kapurthala", region: "Doaba", reservation: "SC", lokSabha: "Kapurthala",
    electorate2022: 192867, geographicType: "Urban / Industrial",
    railConnectivity: "Phagwara Junction (Delhi-Jalandhar line)", roadConnectivity: "NH-44",
    industrialProfile: "Sugar mill, textile, small manufacturing",
    keySites: ["Notable NRI connectivity", "Jagatjit Nagar"],
    cropPattern: [],
  },
];

// Jalandhar District (9 seats)
export const doabaJalandharConstituencies: ConstituencyProfile[] = [
  {
    id: 30, name: "Phillaur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar",
    electorate2022: 207149, geographicType: "Semi-Urban",
    riverProximity: ["Sutlej (south)"], floodRisk: "LOW",
    railConnectivity: "Phillaur railway station",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 31, name: "Nakodar", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar",
    electorate2022: 194824, geographicType: "Semi-Urban / Rural",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 32, name: "Shahkot", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar",
    electorate2022: 181946, geographicType: "Rural",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 33, name: "Kartarpur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar",
    electorate2022: 184515, geographicType: "Rural / Semi-Urban",
    riverProximity: ["Beas (north)"], floodRisk: "LOW",
    keySites: ["Kartarpur -- Gurdwara Darbar Sahib (founder of Sikhism, Guru Nanak)"],
    cropPattern: [],
  },
  {
    id: 34, name: "Jalandhar West", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar",
    electorate2022: 171632, geographicType: "Urban", cropPattern: [], keySites: [],
  },
  {
    id: 35, name: "Jalandhar Central", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar",
    electorate2022: 174003, geographicType: "Urban (core city)",
    railConnectivity: "Jalandhar City Junction", roadConnectivity: "NH-44",
    industrialProfile: "Sports goods manufacturing hub, hand tools",
    keySites: ["Devi Talab Mandir", "Wonderland Theme Park"],
    cropPattern: [],
  },
  {
    id: 36, name: "Jalandhar North", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar",
    electorate2022: 192058, geographicType: "Urban / Semi-Urban", cropPattern: [], keySites: [],
  },
  {
    id: 37, name: "Jalandhar Cantt", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar",
    electorate2022: 193666, geographicType: "Urban (Cantonment)",
    keySites: ["Jalandhar Cantonment (major military base)"],
    cropPattern: [],
  },
  {
    id: 38, name: "Adampur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar",
    electorate2022: 167424, geographicType: "Rural / Semi-Urban",
    airConnectivity: "Adampur Air Force Station (IAF base)",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
];

// Hoshiarpur District (7 seats)
export const doabaHoshiarpurConstituencies: ConstituencyProfile[] = [
  {
    id: 39, name: "Mukerian", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur",
    electorate2022: 202924, geographicType: "Rural",
    riverProximity: ["Beas (south)"], topographicZone: "Shivalik foothills",
    cropPattern: ["Wheat", "paddy", "maize"], keySites: [],
  },
  {
    id: 40, name: "Dasuya", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur",
    electorate2022: 197021, geographicType: "Rural / Semi-Urban",
    riverProximity: ["Beas (south)"], topographicZone: "Shivalik foothills",
    railConnectivity: "Dasuya railway station (Jalandhar-Pathankot line)",
    cropPattern: [], keySites: [],
  },
  {
    id: 41, name: "Urmar", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur",
    electorate2022: 181007, geographicType: "Rural",
    topographicZone: "Shivalik foothills / Plains", cropPattern: [], keySites: [],
  },
  {
    id: 42, name: "Sham Chaurasi", district: "Hoshiarpur", region: "Doaba", reservation: "SC", lokSabha: "Hoshiarpur",
    electorate2022: 177269, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 43, name: "Hoshiarpur", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur",
    electorate2022: 192794, geographicType: "Urban / Semi-Urban",
    railConnectivity: "Hoshiarpur railway station", topographicZone: "Shivalik foothills",
    keySites: ["Takhni-Rehmapur Wildlife Sanctuary", "Chohal"],
    industrialProfile: "Woodworking, furniture",
    cropPattern: [],
  },
  {
    id: 44, name: "Chabbewal", district: "Hoshiarpur", region: "Doaba", reservation: "SC", lokSabha: "Hoshiarpur",
    electorate2022: 161535, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 45, name: "Garhshankar", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur",
    electorate2022: 175287, geographicType: "Rural",
    topographicZone: "Shivalik foothills", cropPattern: [], keySites: [],
  },
];

// SBS Nagar District (3 seats)
export const doabaSBSNagarConstituencies: ConstituencyProfile[] = [
  {
    id: 46, name: "Banga", district: "SBS Nagar", region: "Doaba", reservation: "SC", lokSabha: "Kapurthala",
    electorate2022: 165283, geographicType: "Semi-Urban / Rural",
    topographicZone: "Plains",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 47, name: "Nawan Shahr", district: "SBS Nagar", region: "Doaba", reservation: "General", lokSabha: "Kapurthala",
    electorate2022: 177231, geographicType: "Semi-Urban",
    keySites: ["Shaheed Bhagat Singh museum at Khatkar Kalan (ancestral village)"],
    cropPattern: [],
  },
  {
    id: 48, name: "Balachaur", district: "SBS Nagar", region: "Doaba", reservation: "General", lokSabha: "Kapurthala",
    electorate2022: 155145, geographicType: "Rural",
    topographicZone: "Shivalik foothills", cropPattern: [], keySites: [],
  },
];

// ==========================================
// MALWA CONSTITUENCIES (69 seats)
// ==========================================

// Rupnagar District (3 seats)
export const malwaRupnagarConstituencies: ConstituencyProfile[] = [
  {
    id: 49, name: "Anandpur Sahib", district: "Rupnagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib",
    electorate2022: 191727, geographicType: "Semi-Urban / Pilgrimage Town",
    riverProximity: ["Sutlej (south)", "Sirsa"], topographicZone: "Shivalik foothills",
    keySites: ["Anandpur Sahib -- Takht Sri Keshgarh Sahib", "Virasat-e-Khalsa museum", "Hola Mohalla festival"],
    railConnectivity: "Anandpur Sahib railway station",
    cropPattern: [],
  },
  {
    id: 50, name: "Rupnagar", district: "Rupnagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib",
    electorate2022: 183115, geographicType: "Semi-Urban",
    riverProximity: ["Sutlej (south)"],
    railConnectivity: "Rupnagar railway station",
    keySites: ["Archaeological site (Harappan)", "Ropar"],
    cropPattern: [],
  },
  {
    id: 51, name: "Chamkaur Sahib", district: "Rupnagar", region: "Malwa", reservation: "SC", lokSabha: "Anandpur Sahib",
    electorate2022: 197330, geographicType: "Rural / Semi-Urban",
    riverProximity: ["Sutlej (south)"],
    keySites: ["Chamkaur Sahib Gurudwara (Battle of Chamkaur, Guru Gobind Singh)"],
    cropPattern: [],
  },
];

// SAS Nagar District (3 seats - including Dera Bassi)
export const malwaSASNagarConstituencies: ConstituencyProfile[] = [
  {
    id: 52, name: "Kharar", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "SAS Nagar",
    electorate2022: 266514, geographicType: "Urban / Peri-Urban (Chandigarh satellite)",
    airConnectivity: "Chandigarh International Airport (adjacent)",
    railConnectivity: "Chandigarh railway station (nearby)", roadConnectivity: "NH-205, Chandigarh-Kharar road",
    industrialProfile: "IT parks, real estate boom",
    cropPattern: [], keySites: [],
  },
  {
    id: 53, name: "S.A.S. Nagar", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "SAS Nagar",
    electorate2022: 238998, geographicType: "Urban (IT City)",
    airConnectivity: "Chandigarh International Airport",
    industrialProfile: "IT/ITES, Quark City, Bestech Business Tower",
    cropPattern: [], keySites: [],
  },
  {
    id: 112, name: "Dera Bassi", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "SAS Nagar",
    electorate2022: 287622, geographicType: "Semi-Urban / Industrial",
    railConnectivity: "Dera Bassi railway station (Ambala-Chandigarh line)", roadConnectivity: "NH-7 (Chandigarh-Delhi highway)",
    industrialProfile: "Industrial focal point, multiple manufacturing units, pharmaceutical",
    cropPattern: [], keySites: [],
  },
];

// Fatehgarh Sahib District (3 seats)
export const malwaFatehgarhSahibConstituencies: ConstituencyProfile[] = [
  {
    id: 54, name: "Bassi Pathana", district: "Fatehgarh Sahib", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib",
    electorate2022: 149248, geographicType: "Rural / Semi-Urban", cropPattern: [], keySites: [],
  },
  {
    id: 55, name: "Fatehgarh Sahib", district: "Fatehgarh Sahib", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib",
    electorate2022: 161754, geographicType: "Semi-Urban / Pilgrimage Town",
    keySites: ["Fatehgarh Sahib Gurudwara (Sahibzada martyrdom)", "Jyoti Saroop"],
    cropPattern: [],
  },
  {
    id: 56, name: "Amloh", district: "Fatehgarh Sahib", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib",
    electorate2022: 144482, geographicType: "Rural",
    industrialProfile: "Mandi Gobindgarh (steel town, nearby)",
    cropPattern: [], keySites: [],
  },
];

// Ludhiana District (14 seats)
export const malwaLudhianaConstituencies: ConstituencyProfile[] = [
  {
    id: 57, name: "Khanna", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 171622, geographicType: "Semi-Urban / Industrial",
    railConnectivity: "Khanna railway station (Delhi-Amritsar line)", roadConnectivity: "NH-44",
    keySites: ["Asia's largest grain market"],
    cropPattern: [],
  },
  {
    id: 58, name: "Samrala", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 175822, geographicType: "Rural / Semi-Urban",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 59, name: "Sahnewal", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 265097, geographicType: "Semi-Urban / Industrial",
    airConnectivity: "Sahnewal Airport (civil enclave)",
    industrialProfile: "Small-scale industries, packaging",
    cropPattern: [], keySites: [],
  },
  {
    id: 60, name: "Ludhiana East", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 217728, geographicType: "Urban", cropPattern: [], keySites: [],
  },
  {
    id: 61, name: "Ludhiana South", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 178167, geographicType: "Urban / Industrial", cropPattern: [], keySites: [],
  },
  {
    id: 62, name: "Atam Nagar", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 170654, geographicType: "Urban (Ludhiana core)", cropPattern: [], keySites: [],
  },
  {
    id: 63, name: "Ludhiana Central", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 158931, geographicType: "Urban (CBD)",
    industrialProfile: "Hosiery capital of India, bicycle manufacturing, auto parts",
    cropPattern: [], keySites: [],
  },
  {
    id: 64, name: "Ludhiana West", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 182455, geographicType: "Urban", cropPattern: [], keySites: [],
  },
  {
    id: 65, name: "Ludhiana North", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 205063, geographicType: "Urban", cropPattern: [], keySites: [],
  },
  {
    id: 66, name: "Gill", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Ludhiana",
    electorate2022: 273104, geographicType: "Rural / Peri-Urban",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 67, name: "Payal", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Ludhiana",
    electorate2022: 165608, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 68, name: "Dakha", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana",
    electorate2022: 187760, geographicType: "Rural / Semi-Urban", cropPattern: [], keySites: [],
  },
  {
    id: 69, name: "Raikot", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Ludhiana",
    electorate2022: 156301, geographicType: "Semi-Urban / Rural", cropPattern: [], keySites: [],
  },
  {
    id: 70, name: "Jagraon", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Ludhiana",
    electorate2022: 184819, geographicType: "Semi-Urban",
    keySites: ["Jagraon -- religious diversity, Muslim/Sikh coexistence"],
    cropPattern: [],
  },
];

// Moga District (4 seats)
export const malwaMogaConstituencies: ConstituencyProfile[] = [
  {
    id: 71, name: "Nihal Singh Wala", district: "Moga", region: "Malwa", reservation: "SC", lokSabha: "Moga",
    electorate2022: 197869, geographicType: "Rural",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 72, name: "Bagha Purana", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Moga",
    electorate2022: 172120, geographicType: "Rural",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 73, name: "Moga", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Moga",
    electorate2022: 203541, geographicType: "Urban / Semi-Urban",
    railConnectivity: "Moga railway station (Ludhiana-Firozpur line)",
    industrialProfile: "NOT_FOUND", cropPattern: [], keySites: [],
  },
  {
    id: 74, name: "Dharamkot", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Moga",
    electorate2022: 181612, geographicType: "Rural",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
];

// Firozpur District (4 seats)
export const malwaFirozpurConstituencies: ConstituencyProfile[] = [
  {
    id: 75, name: "Zira", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Firozpur",
    electorate2022: 187300, geographicType: "Rural / Semi-Urban",
    riverProximity: ["Sutlej (north)"], floodRisk: "LOW",
    cropPattern: ["Wheat", "paddy", "basmati"], keySites: [],
  },
  {
    id: 76, name: "Firozpur City", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Firozpur",
    electorate2022: 172957, geographicType: "Urban / Border", borderProximity: "YES (Pakistan, ~10 km)",
    railConnectivity: "Firozpur railway station (Firozpur-Ludhiana line)",
    keySites: ["Saragarhi Memorial Gurudwara", "Anglo-Sikh War memorial"],
    cropPattern: [],
  },
  {
    id: 77, name: "Firozpur Rural", district: "Firozpur", region: "Malwa", reservation: "SC", lokSabha: "Firozpur",
    electorate2022: 195975, geographicType: "Rural / Border", borderProximity: "YES (Pakistan, ~5-15 km)",
    riverProximity: ["Sutlej (north)"], floodRisk: "MODERATE-HIGH",
    cropPattern: [], keySites: [],
  },
  {
    id: 78, name: "Guru Har Sahai", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Firozpur",
    electorate2022: 172641, geographicType: "Rural",
    riverProximity: ["Sutlej (north)"], floodRisk: "LOW",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
];

// Fazilka District (4 seats)
export const malwaFazilkaConstituencies: ConstituencyProfile[] = [
  {
    id: 79, name: "Jalalabad", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Fazilka",
    electorate2022: 213416, geographicType: "Rural / Semi-Urban / Border", borderProximity: "YES (Pakistan, ~15-25 km)",
    cropPattern: ["Cotton", "wheat", "paddy (cotton belt)"], keySites: [],
  },
  {
    id: 80, name: "Fazilka", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Fazilka",
    electorate2022: 177520, geographicType: "Urban / Border", borderProximity: "YES (Pakistan, ~10 km, Sulemanki border)",
    railConnectivity: "Fazilka railway station (Firozpur-Fazilka line)",
    keySites: ["Sulemanki Border Post"],
    cropPattern: [],
  },
  {
    id: 81, name: "Abohar", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Fazilka",
    electorate2022: 178416, geographicType: "Urban / Agricultural Hub",
    railConnectivity: "Abohar railway station (Bhatinda-Abohar line)",
    cropPattern: ["Cotton (cotton belt)", "wheat", "kinnow (citrus)"],
    industrialProfile: "Cotton ginning and pressing, textile",
    keySites: [],
  },
  {
    id: 82, name: "Balluana", district: "Fazilka", region: "Malwa", reservation: "SC", lokSabha: "Fazilka",
    electorate2022: 183929, geographicType: "Rural",
    cropPattern: ["Cotton", "wheat", "paddy"], keySites: [],
  },
];

// Sri Muktsar Sahib District (4 seats)
export const malwaMuktsarConstituencies: ConstituencyProfile[] = [
  {
    id: 83, name: "Lambi", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Sri Muktsar Sahib",
    electorate2022: 165263, geographicType: "Rural",
    cropPattern: ["Cotton", "wheat", "paddy"],
    notes: "Parkash Singh Badal's traditional stronghold",
  },
  {
    id: 84, name: "Gidderbaha", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Sri Muktsar Sahib",
    electorate2022: 167228, geographicType: "Semi-Urban / Rural",
    cropPattern: ["Cotton", "wheat"], keySites: [],
  },
  {
    id: 85, name: "Malout", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "SC", lokSabha: "Sri Muktsar Sahib",
    electorate2022: 176573, geographicType: "Semi-Urban",
    railConnectivity: "Malout railway station",
    cropPattern: ["Cotton", "wheat"], keySites: [],
  },
  {
    id: 86, name: "Muktsar", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Sri Muktsar Sahib",
    electorate2022: 188889, geographicType: "Semi-Urban / Historical Town",
    keySites: ["Sri Muktsar Sahib -- Battle of Muktsar (1705)", "Maghi Mela"],
    cropPattern: ["Cotton", "wheat", "paddy"],
  },
];

// Faridkot District (3 seats)
export const malwaFaridkotConstituencies: ConstituencyProfile[] = [
  {
    id: 87, name: "Faridkot", district: "Faridkot", region: "Malwa", reservation: "General", lokSabha: "Faridkot",
    electorate2022: 169823, geographicType: "Urban / Semi-Urban",
    railConnectivity: "Faridkot railway station",
    keySites: ["Faridkot Fort", "Qila Mubarak"],
    cropPattern: ["Wheat", "paddy"],
  },
  {
    id: 88, name: "Kotkapura", district: "Faridkot", region: "Malwa", reservation: "General", lokSabha: "Faridkot",
    electorate2022: 159646, geographicType: "Semi-Urban / Rural",
    cropPattern: ["Wheat", "paddy", "cotton"], keySites: [],
  },
  {
    id: 89, name: "Jaitu", district: "Faridkot", region: "Malwa", reservation: "SC", lokSabha: "Faridkot",
    electorate2022: 151056, geographicType: "Rural / Semi-Urban",
    keySites: ["Jaitu -- historic Jaitu Morcha (Sikh agitation 1920s)"],
    cropPattern: ["Wheat", "paddy"],
  },
];

// Bathinda District (6 seats)
export const malwaBathindaConstituencies: ConstituencyProfile[] = [
  {
    id: 90, name: "Rampura Phul", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda",
    electorate2022: 169859, geographicType: "Rural / Semi-Urban",
    cropPattern: ["Cotton", "wheat", "paddy"], keySites: [],
  },
  {
    id: 91, name: "Bhucho Mandi", district: "Bathinda", region: "Malwa", reservation: "SC", lokSabha: "Bathinda",
    electorate2022: 184785, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 92, name: "Bathinda Urban", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda",
    electorate2022: 229525, geographicType: "Urban",
    railConnectivity: "Bathinda Junction (major railhead, 6 lines converge)",
    airConnectivity: "Bathinda Airport (civil enclave, Bhisiana IAF base)",
    industrialProfile: "Guru Nanak Dev Thermal Plant, AIIMS Bathinda, central university",
    keySites: ["Qila Mubarak", "Lakhi Jungle"],
    cropPattern: [],
  },
  {
    id: 93, name: "Bathinda Rural", district: "Bathinda", region: "Malwa", reservation: "SC", lokSabha: "Bathinda",
    electorate2022: 158082, geographicType: "Rural",
    cropPattern: ["Cotton", "wheat"], keySites: [],
  },
  {
    id: 94, name: "Talwandi Sabo", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda",
    electorate2022: 156336, geographicType: "Rural / Pilgrimage Town",
    keySites: ["Takht Sri Damdama Sahib (one of 5 Sikh Takhts)"],
    cropPattern: ["Cotton", "wheat", "paddy"],
  },
  {
    id: 95, name: "Maur", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda",
    electorate2022: 167547, geographicType: "Rural",
    cropPattern: ["Cotton", "wheat"], keySites: [],
  },
];

// Mansa District (3 seats)
export const malwaMansaConstituencies: ConstituencyProfile[] = [
  {
    id: 96, name: "Mansa", district: "Mansa", region: "Malwa", reservation: "General", lokSabha: "Bathinda",
    electorate2022: 218339, geographicType: "Urban / Semi-Urban",
    railConnectivity: "Mansa railway station (Bathinda-Dhuri line)",
    cropPattern: ["Cotton", "wheat"],
    notes: "Cotton belt; high farmer distress",
  },
  {
    id: 97, name: "Sardulgarh", district: "Mansa", region: "Malwa", reservation: "General", lokSabha: "Bathinda",
    electorate2022: 181679, geographicType: "Rural",
    cropPattern: ["Cotton", "wheat"], keySites: [],
  },
  {
    id: 98, name: "Budhlada", district: "Mansa", region: "Malwa", reservation: "SC", lokSabha: "Bathinda",
    electorate2022: 195170, geographicType: "Rural / Semi-Urban",
    cropPattern: ["Cotton", "wheat"], keySites: [],
  },
];

// Sangrur District (4 seats, excluding Malerkotla)
export const malwaSangrurConstituencies: ConstituencyProfile[] = [
  {
    id: 99, name: "Lehra", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur",
    electorate2022: 172109, geographicType: "Rural",
    cropPattern: ["Wheat", "paddy"], keySites: [],
  },
  {
    id: 100, name: "Dirba", district: "Sangrur", region: "Malwa", reservation: "SC", lokSabha: "Sangrur",
    electorate2022: 182695, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 101, name: "Sunam", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur",
    electorate2022: 196136, geographicType: "Semi-Urban",
    keySites: ["Sunam -- birthplace of Shaheed Udham Singh"],
    cropPattern: [],
  },
  {
    id: 108, name: "Sangrur", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur",
    electorate2022: 189838, geographicType: "Urban / Semi-Urban",
    railConnectivity: "Sangrur railway station",
    keySites: ["Sangrur Fort", "Banasar Garden"],
    cropPattern: [],
  },
];

// Barnala District (3 seats)
export const malwaBarnalaConstituencies: ConstituencyProfile[] = [
  {
    id: 102, name: "Bhadaur", district: "Barnala", region: "Malwa", reservation: "SC", lokSabha: "Sangrur",
    electorate2022: 157809, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 103, name: "Barnala", district: "Barnala", region: "Malwa", reservation: "General", lokSabha: "Sangrur",
    electorate2022: 182502, geographicType: "Urban / Semi-Urban",
    railConnectivity: "Barnala railway station (Bathinda-Dhuri line)",
    cropPattern: [], keySites: [],
  },
  {
    id: 104, name: "Mehal Kalan", district: "Barnala", region: "Malwa", reservation: "SC", lokSabha: "Sangrur",
    electorate2022: 160348, geographicType: "Rural", cropPattern: [], keySites: [],
  },
];

// Malerkotla District (3 seats)
export const malwaMalerkotlaConstituencies: ConstituencyProfile[] = [
  {
    id: 105, name: "Malerkotla", district: "Malerkotla", region: "Malwa", reservation: "General", lokSabha: "Malerkotla",
    electorate2022: 159900, geographicType: "Urban / Semi-Urban",
    keySites: ["Malerkotla -- only Muslim-ruled princely state in Punjab; communal harmony legacy"],
    notes: "23rd district, created June 2021",
    cropPattern: [],
  },
  {
    id: 106, name: "Amargarh", district: "Malerkotla", region: "Malwa", reservation: "General", lokSabha: "Malerkotla",
    electorate2022: 165909, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 107, name: "Dhuri", district: "Sangrur (historically) / Malerkotla boundary", region: "Malwa", reservation: "General", lokSabha: "Malerkotla",
    electorate2022: 165053, geographicType: "Semi-Urban",
    railConnectivity: "Dhuri Junction (important rail junction)",
    cropPattern: [], keySites: [],
  },
];

// Patiala District (8 seats)
export const malwaPatialaConstituencies: ConstituencyProfile[] = [
  {
    id: 109, name: "Nabha", district: "Patiala", region: "Malwa", reservation: "SC", lokSabha: "Patiala",
    electorate2022: 184623, geographicType: "Semi-Urban / Historical Town",
    railConnectivity: "Nabha railway station",
    keySites: ["Nabha -- erstwhile princely state", "Hira Mahal"],
    cropPattern: [],
  },
  {
    id: 110, name: "Patiala Rural", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala",
    electorate2022: 225639, geographicType: "Rural / Peri-Urban",
    cropPattern: ["Wheat", "paddy", "basmati"], keySites: [],
  },
  {
    id: 111, name: "Rajpura", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala",
    electorate2022: 182228, geographicType: "Urban / Industrial",
    railConnectivity: "Rajpura Junction (important junction, Ambala-Ludhiana line)",
    industrialProfile: "Rajpura thermal plant, food processing, IT",
    cropPattern: [], keySites: [],
  },
  {
    id: 113, name: "Ghanaur", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala",
    electorate2022: 164546, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 114, name: "Sanour", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala",
    electorate2022: 222969, geographicType: "Rural", cropPattern: [], keySites: [],
  },
  {
    id: 115, name: "Patiala", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala",
    electorate2022: 161399, geographicType: "Urban (Royal City)",
    railConnectivity: "Patiala railway station", roadConnectivity: "NH-64, NH-7 (Chandigarh-Patiala highway)",
    keySites: ["Qila Mubarak", "Moti Bagh Palace", "Sheesh Mahal", "Baradari Gardens"],
    institutional: "Punjabi University, Rajiv Gandhi National University of Law, PEDA",
    cropPattern: [],
  },
  {
    id: 116, name: "Samana", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala",
    electorate2022: 192473, geographicType: "Semi-Urban / Rural",
    keySites: ["Samana -- historical Battle of Samana (Guru Gobind Singh)"],
    cropPattern: [],
  },
  {
    id: 117, name: "Shutrana", district: "Patiala", region: "Malwa", reservation: "SC", lokSabha: "Patiala",
    electorate2022: 181568, geographicType: "Rural", cropPattern: [], keySites: [],
  },
];

// ==========================================
// ALL CONSTITUENCIES COMBINED
// ==========================================

export const allConstituencies: ConstituencyProfile[] = [
  ...majhaPathankotConstituencies,
  ...majhaGurdaspurConstituencies,
  ...majhaAmritsarConstituencies,
  ...majhaTarnTaranConstituencies,
  ...doabaKapurthalaConstituencies,
  ...doabaJalandharConstituencies,
  ...doabaHoshiarpurConstituencies,
  ...doabaSBSNagarConstituencies,
  ...malwaRupnagarConstituencies,
  ...malwaSASNagarConstituencies,
  ...malwaFatehgarhSahibConstituencies,
  ...malwaLudhianaConstituencies,
  ...malwaMogaConstituencies,
  ...malwaFirozpurConstituencies,
  ...malwaFazilkaConstituencies,
  ...malwaMuktsarConstituencies,
  ...malwaFaridkotConstituencies,
  ...malwaBathindaConstituencies,
  ...malwaMansaConstituencies,
  ...malwaSangrurConstituencies,
  ...malwaBarnalaConstituencies,
  ...malwaMalerkotlaConstituencies,
  ...malwaPatialaConstituencies,
];

// ==========================================
// BORDER CONSTITUENCIES SUMMARY
// ==========================================

export const borderConstituencySummary: BorderConstituencySummary[] = [
  {
    borderDistrict: "Pathankot",
    borderConstituencies: ["Sujanpur", "Bhoa", "Pathankot"],
    borderCharacter: "J&K + Pakistan border; defence-heavy; Shivalik terrain",
    totalBorderConstituencies: 3,
  },
  {
    borderDistrict: "Gurdaspur",
    borderConstituencies: ["Gurdaspur", "Dina Nagar", "Dera Baba Nanak"],
    borderCharacter: "Pakistan border; Ravi riverine; Kartarpur Corridor",
    totalBorderConstituencies: 3,
  },
  {
    borderDistrict: "Amritsar",
    borderConstituencies: ["Ajnala", "Attari", "Amritsar North/West"],
    borderCharacter: "Wagah-Attari ceremonial border; high visibility",
    totalBorderConstituencies: 3,
  },
  {
    borderDistrict: "Tarn Taran",
    borderConstituencies: ["Tarn Taran", "Khem Karan", "Patti"],
    borderCharacter: "Pakistan border; Harike wetland; very high flood risk",
    totalBorderConstituencies: 3,
  },
  {
    borderDistrict: "Firozpur",
    borderConstituencies: ["Firozpur City", "Firozpur Rural", "Guru Har Sahai"],
    borderCharacter: "Pakistan border; Sutlej riverine; historic saragarhi",
    totalBorderConstituencies: 3,
  },
  {
    borderDistrict: "Fazilka",
    borderConstituencies: ["Jalalabad", "Fazilka"],
    borderCharacter: "Pakistan border; Sulemanki post; cotton belt",
    totalBorderConstituencies: 2,
  },
];

// ==========================================
// GEOGRAPHIC TYPE CLASSIFICATION
// ==========================================

export const geographicClassifications: GeographicClassification[] = [
  {
    type: "Urban",
    estimatedConstituencies: 20,
    keyExamples: ["Amritsar North/Central/East/West", "Ludhiana Central/East/North/South/West", "Jalandhar Central/West/North/Cantt", "Bathinda Urban", "Patiala", "Mohali", "Pathankot city"],
  },
  {
    type: "Semi-Urban",
    estimatedConstituencies: 35,
    keyExamples: ["Most district headquarters", "industrial towns"],
  },
  {
    type: "Rural",
    estimatedConstituencies: 55,
    keyExamples: ["Majority of Malwa cotton belt", "border belt", "agricultural constituencies"],
  },
  {
    type: "Border",
    estimatedConstituencies: 18,
    keyExamples: ["All constituencies within ~20 km of Pakistan border"],
  },
  {
    type: "Pilgrimage",
    estimatedConstituencies: 5,
    keyExamples: ["Anandpur Sahib", "Fatehgarh Sahib", "Talwandi Sabo", "Dera Baba Nanak", "Sultanpur Lodhi", "Muktsar"],
  },
];

// ==========================================
// CROP PATTERN & AGRICULTURAL ZONES
// ==========================================

export const agriculturalZones: AgriculturalZone[] = [
  {
    zone: "Paddy-Wheat (Central)",
    districts: ["Ludhiana", "Jalandhar", "Kapurthala", "Moga", "Patiala"],
    dominantCrops: ["Rice", "wheat"],
    constituencyImpact: "Green Revolution heartland; farmer distress, MSP critical issue",
    issues: ["MSP procurement", "stubble burning", "water table depletion"],
  },
  {
    zone: "Cotton Belt (Southwest)",
    districts: ["Bathinda", "Mansa", "Muktsar", "Fazilka", "Faridkot"],
    dominantCrops: ["Cotton", "wheat"],
    constituencyImpact: "Bt cotton, pink bollworm, cotton MSP",
    issues: ["Pink bollworm", "cotton prices", "water scarcity"],
  },
  {
    zone: "Basmati Zone",
    districts: ["Gurdaspur", "Amritsar", "Tarn Taran", "Firozpur", "Pathankot"],
    dominantCrops: ["Basmati rice", "wheat"],
    constituencyImpact: "Export-oriented, premium pricing",
    issues: ["export markets", "basmati prices"],
  },
  {
    zone: "Horticulture/Mixed",
    districts: ["Hoshiarpur", "Rupnagar", "SBS Nagar"],
    dominantCrops: ["Kinnow", "mango", "vegetables", "maize"],
    constituencyImpact: "Diversification potential",
    issues: ["market access", "storage facilities"],
  },
  {
    zone: "Semi-Arid",
    districts: ["Mansa", "Bathinda", "Muktsar", "Fazilka (southern parts)"],
    dominantCrops: ["Cotton", "wheat", "guar"],
    constituencyImpact: "Water scarcity, canal dependency",
    issues: ["groundwater depletion", "canal water allocation"],
  },
];

// ==========================================
// STRATEGIC INSIGHTS
// ==========================================

export const constituencyStrategicInsights: StrategicInsight[] = [
  {
    priority: 1,
    title: "Malwa Dominance is Key to Victory",
    description: "Malwa has 69 of 117 seats. Congress won only a fraction of these in 2022 but historically dominated the region.",
    targetConstituencies: ["Bathinda", "Mansa", "Muktsar", "Fazilka"],
    actionItems: [
      "Reclaim cotton belt seats through farmer distress messaging",
      "Address water management and groundwater depletion",
      "Leverage historical Congress dominance in Malwa",
    ],
  },
  {
    priority: 2,
    title: "Border Constituencies as Swing Zones",
    description: "18-20 border constituencies have unique concerns requiring tailored messaging.",
    targetConstituencies: ["Tarn Taran", "Khem Karan", "Firozpur", "Abohar", "Jalalabad"],
    actionItems: [
      "Craft border-specific manifesto addressing BSF presence",
      "Address cross-border tensions and farming restrictions",
      "Counter drug smuggling narratives",
    ],
  },
  {
    priority: 3,
    title: "Urban-Rural Divide in Messaging",
    description: "Urban constituencies (~20-25) care about industry and jobs. Rural constituencies (~60+) care about MSP, water, electricity.",
    actionItems: [
      "Tailor messaging per geographic type",
      "Urban: industry, jobs, civic infrastructure",
      "Rural: MSP, water, electricity, crop diversification",
    ],
  },
  {
    priority: 4,
    title: "Pilgrimage Towns as Rally Points",
    description: "Anandpur Sahib, Muktsar, Talwandi Sabo, Fatehgarh Sahib, Sultanpur Lodhi are natural congregation points.",
    targetConstituencies: ["Anandpur Sahib", "Muktsar", "Talwandi Sabo", "Fatehgarh Sahib", "Sultanpur Lodhi"],
    actionItems: [
      "Schedule major events around religious fairs",
      "Hola Mohalla (Anandpur Sahib), Maghi Mela (Muktsar)",
    ],
  },
  {
    priority: 5,
    title: "Flood & Water Stress Zones",
    description: "Khem Karan, Harike area, and Sutlej-adjacent constituencies face recurring floods.",
    targetConstituencies: ["Khem Karan", "Tarn Taran", "Firozpur Rural", "Dera Baba Nanak"],
    actionItems: [
      "Address water management as a poll issue",
      "Highlight flood relief and infrastructure",
    ],
  },
  {
    priority: 6,
    title: "Connectivity-Based Campaign Logistics",
    description: "Use rail junctions and airport cities as logistics hubs for campaign movement.",
    targetConstituencies: ["Bathinda", "Dhuri", "Rajpura", "Jalandhar", "Khanna"],
    actionItems: [
      "Bathinda: major railhead, airport",
      "Rajpura: important rail junction",
      "Use airport cities: Amritsar, Pathankot, Bathinda, Chandigarh/Mohali",
    ],
  },
];

// ==========================================
// DATA GAPS
// ==========================================

export const constituencyDataGaps: DataGap[] = [
  { dataPoint: "Per-constituency area (sq km)", status: "NOT_FOUND", priority: "HIGH", notes: "Only district-level available" },
  { dataPoint: "Tehsil/block for each constituency", status: "NOT_FOUND", priority: "MEDIUM", notes: "Needs ECI delimitation data" },
  { dataPoint: "Health facilities count per constituency", status: "NOT_FOUND", priority: "HIGH", notes: "Needs District Census Handbook extraction" },
  { dataPoint: "Education institutions per constituency", status: "NOT_FOUND", priority: "HIGH", notes: "Needs DISE/DCHB data" },
  { dataPoint: "Mobile coverage quality", status: "NOT_FOUND", priority: "MEDIUM", notes: "Needs TRAI/DoT data" },
  { dataPoint: "Electricity reliability per constituency", status: "NOT_FOUND", priority: "MEDIUM", notes: "Needs PSPCL data" },
  { dataPoint: "Water quality per constituency", status: "NOT_FOUND", priority: "HIGH", notes: "Needs CGWB/PCB data, especially Malwa" },
  { dataPoint: "Market day schedule per constituency", status: "NOT_FOUND", priority: "LOW", notes: "Needs field verification" },
  { dataPoint: "Industrial profile (detailed)", status: "PARTIAL", priority: "MEDIUM", notes: "Major cities only" },
  { dataPoint: "Road/rail connectivity (detailed)", status: "PARTIAL", priority: "MEDIUM", notes: "Major routes only" },
  { dataPoint: "Flood/drought risk (constituency-level)", status: "PARTIAL", priority: "HIGH", notes: "District-level only, needs granular mapping" },
];

// ==========================================
// SUMMARY STATISTICS
// ==========================================

export const constituencySummaryStats: ConstituencySummaryStats = {
  totalConstituencies: 117,
  totalElectorate: allConstituencies.reduce((sum, c) => sum + c.electorate2022, 0),
  avgElectoratePerConstituency: Math.round(
    allConstituencies.reduce((sum, c) => sum + c.electorate2022, 0) / allConstituencies.length
  ),
  byRegion: [
    { region: "Majha", count: 25, totalElectorate: majhaPathankotConstituencies.concat(majhaGurdaspurConstituencies, majhaAmritsarConstituencies, majhaTarnTaranConstituencies).reduce((sum, c) => sum + c.electorate2022, 0) },
    { region: "Doaba", count: 23, totalElectorate: doabaKapurthalaConstituencies.concat(doabaJalandharConstituencies, doabaHoshiarpurConstituencies, doabaSBSNagarConstituencies).reduce((sum, c) => sum + c.electorate2022, 0) },
    { region: "Malwa", count: 69, totalElectorate: malwaRupnagarConstituencies.concat(malwaSASNagarConstituencies, malwaFatehgarhSahibConstituencies, malwaLudhianaConstituencies, malwaMogaConstituencies, malwaFirozpurConstituencies, malwaFazilkaConstituencies, malwaMuktsarConstituencies, malwaFaridkotConstituencies, malwaBathindaConstituencies, malwaMansaConstituencies, malwaSangrurConstituencies, malwaBarnalaConstituencies, malwaMalerkotlaConstituencies, malwaPatialaConstituencies).reduce((sum, c) => sum + c.electorate2022, 0) },
  ],
  byReservation: [
    { reservation: "General", count: allConstituencies.filter(c => c.reservation === "General").length },
    { reservation: "SC", count: allConstituencies.filter(c => c.reservation === "SC").length },
  ],
  borderCount: allConstituencies.filter(c => c.borderProximity?.includes("YES") ?? false).length,
  urbanCount: allConstituencies.filter(c => c.geographicType.includes("Urban")).length,
  ruralCount: allConstituencies.filter(c => c.geographicType.includes("Rural")).length,
  semiUrbanCount: allConstituencies.filter(c => c.geographicType.includes("Semi-Urban")).length,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get constituency by ID
 */
export function getConstituencyById(id: number): ConstituencyProfile | undefined {
  return allConstituencies.find(c => c.id === id);
}

/**
 * Get constituencies by district
 */
export function getConstituenciesByDistrict(district: string): ConstituencyProfile[] {
  return allConstituencies.filter(c => c.district === district);
}

/**
 * Get constituencies by region
 */
export function getConstituenciesByRegion(region: "Majha" | "Doaba" | "Malwa"): ConstituencyProfile[] {
  return allConstituencies.filter(c => c.region === region);
}

/**
 * Get constituencies by reservation type
 */
export function getConstituenciesByReservation(reservation: "General" | "SC"): ConstituencyProfile[] {
  return allConstituencies.filter(c => c.reservation === reservation);
}

/**
 * Get border constituencies
 */
export function getBorderConstituencies(): ConstituencyProfile[] {
  return allConstituencies.filter(c => c.borderProximity?.includes("YES") ?? false);
}

/**
 * Get constituencies with high flood risk
 */
export function getHighFloodRiskConstituencies(): ConstituencyProfile[] {
  return allConstituencies.filter(c => c.floodRisk === "HIGH" || c.floodRisk === "VERY HIGH");
}

/**
 * Get constituencies by crop pattern
 */
export function getConstituenciesByCrop(crop: string): ConstituencyProfile[] {
  return allConstituencies.filter(c => c.cropPattern?.some(cp => cp.toLowerCase().includes(crop.toLowerCase())) ?? false);
}

/**
 * Get constituencies with key sites (pilgrimage/religious)
 */
export function getPilgrimageConstituencies(): ConstituencyProfile[] {
  return allConstituencies.filter(c =>
    c.keySites?.some(site =>
      site.includes("Gurudwara") ||
      site.includes("Temple") ||
      site.includes("Gurdwara") ||
      site.includes("Shrine") ||
      site.includes("Takht") ||
      site.includes("Sahib")
    ) ?? false
  );
}

/**
 * Get total electorate by region
 */
export function getElectorateByRegion(region: "Majha" | "Doaba" | "Malwa"): number {
  return getConstituenciesByRegion(region).reduce((sum, c) => sum + c.electorate2022, 0);
}

/**
 * Get constituencies sorted by electorate (descending)
 */
export function getConstituenciesByElectorate(): ConstituencyProfile[] {
  return [...allConstituencies].sort((a, b) => b.electorate2022 - a.electorate2022);
}

/**
 * Get top N constituencies by electorate
 */
export function getTopElectorateConstituencies(n: number = 10): ConstituencyProfile[] {
  return getConstituenciesByElectorate().slice(0, n);
}
