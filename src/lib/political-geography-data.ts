// Political Geography Data for Punjab
// Derived from: research-M2/MP1-foundational/geography/political-geography.md

import type {
  PunjabStateProfile,
  RegionProfile,
  DistrictProfile,
  AssemblyConstituency,
  LokSabhaConstituency,
  SCReservedData,
  UrbanRuralSummary,
  UrbanACList,
  CampaignCluster,
  TravelRoute,
  PollingStationData,
  AccessibilityChallenge,
  BorderConstituency,
  GISSource,
  DataGap,
} from "@/types/political-geography-types";

// ==========================================
// PUNJAB STATE PROFILE
// ==========================================

export const PUNJAB_STATE_PROFILE: PunjabStateProfile = {
  totalArea: 50362, // sq km
  totalPopulation2011: 27743338,
  estimatedPopulation2026: 30000000,
  populationDensity2011: 551, // per sq km
  urbanPopulationPercent: 37.5,
  ruralPopulationPercent: 62.5,
  totalElectors2022: 21499804,
  maleElectors: 11298081,
  femaleElectors: 10200996,
  transgenderElectors: 727,
  voterTurnout2022: 72.15, // percentage
  internationalBorder: "Pakistan (553 km along west)",
  neighboringStates: "Haryana (south/east), Himachal Pradesh (north/east), Rajasthan (southwest)",
  capital: "Chandigarh (Union Territory, shared with Haryana)",
  researchDate: "19 May 2026",
  classification: "STRATEGIC -- Campaign Planning Intelligence",
};

// ==========================================
// REGION PROFILES
// ==========================================

export const REGION_PROFILES: RegionProfile[] = [
  {
    name: "Majha",
    meaning: "Central land",
    rivers: "Between Beas and Ravi",
    districts: ["Amritsar", "Gurdaspur", "Pathankot", "Tarn Taran", "Kapurthala (partial)"],
    districtCount: 5,
    totalACs: 25,
    totalElectorate: 4583920,
    avgConstituencySize: 183357,
    keyCharacteristics: "Sikh heartland, border belt, high defence presence, sacred Sikh sites",
  },
  {
    name: "Doaba",
    meaning: "Land of two rivers",
    rivers: "Between Sutlej and Beas",
    districts: ["Jalandhar", "Kapurthala", "Hoshiarpur", "SBS Nagar"],
    districtCount: 4,
    totalACs: 23,
    totalElectorate: 4083981,
    avgConstituencySize: 177564,
    keyCharacteristics: "NRI belt, Dalit concentration, highest literacy, Doaba voters influential",
  },
  {
    name: "Malwa",
    meaning: "South of Sutlej",
    rivers: "South of Sutlej",
    districts: [
      "Ludhiana", "Patiala", "Bathinda", "Sangrur", "Faridkot", "Fazilka",
      "Firozpur", "Mansa", "Moga", "Muktsar", "Barnala", "Fatehgarh Sahib",
      "Rupnagar", "SAS Nagar", "Malerkotla",
    ],
    districtCount: 15,
    totalACs: 69,
    totalElectorate: 12685903,
    avgConstituencySize: 183855,
    keyCharacteristics: "Agricultural belt, paddy-wheat dominant, cotton belt, canal-irrigated, AAP swept 62/69 in 2022",
  },
];

// ==========================================
// DISTRICT PROFILES
// ==========================================

export const DISTRICT_PROFILES: DistrictProfile[] = [
  { name: "Pathankot", region: "Majha", areaSqKm: 2294, population2011: 155940, density: 643, acCount: 3, acNumbers: [1, 2, 3] },
  { name: "Gurdaspur", region: "Majha", areaSqKm: 2610, population2011: 2104011, density: 647, acCount: 7, acNumbers: [4, 5, 6, 7, 8, 9, 10] },
  { name: "Amritsar", region: "Majha", areaSqKm: 5075, population2011: 2490656, density: 928, acCount: 11, acNumbers: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25] },
  { name: "Tarn Taran", region: "Majha", areaSqKm: 2414, population2011: 1112805, density: 464, acCount: 4, acNumbers: [21, 22, 23, 24] },
  { name: "Kapurthala", region: "Doaba", areaSqKm: 1633, population2011: 817668, density: 499, acCount: 4, acNumbers: [26, 27, 28, 29] },
  { name: "Jalandhar", region: "Doaba", areaSqKm: 2632, population2011: 2193590, density: 836, acCount: 9, acNumbers: [30, 31, 32, 33, 34, 35, 36, 37, 38] },
  { name: "Hoshiarpur", region: "Doaba", areaSqKm: 3365, population2011: 1558423, density: 469, acCount: 7, acNumbers: [39, 40, 41, 42, 43, 44, 45] },
  { name: "SBS Nagar", region: "Doaba", areaSqKm: 1257, population2011: 614362, density: 478, acCount: 3, acNumbers: [46, 47, 48] },
  { name: "Rupnagar", region: "Malwa", areaSqKm: 1356, population2011: 684627, density: 505, acCount: 3, acNumbers: [49, 50, 51] },
  { name: "SAS Nagar", region: "Malwa", areaSqKm: 1394, population2011: 994628, density: 909, acCount: 3, acNumbers: [52, 53, 112] },
  { name: "Fatehgarh Sahib", region: "Malwa", areaSqKm: 1147, population2011: 600163, density: 509, acCount: 3, acNumbers: [54, 55, 56] },
  { name: "Ludhiana", region: "Malwa", areaSqKm: 3767, population2011: 3487882, density: 978, acCount: 14, acNumbers: [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70] },
  { name: "Moga", region: "Malwa", areaSqKm: 1672, population2011: 992289, density: 444, acCount: 4, acNumbers: [71, 72, 73, 74] },
  { name: "Firozpur", region: "Malwa", areaSqKm: 5305, population2011: 2027176, density: 382, acCount: 4, acNumbers: [75, 76, 77, 78] },
  { name: "Fazilka", region: "Malwa", areaSqKm: 3113, population2011: 1042874, density: 329, acCount: 4, acNumbers: [79, 80, 81, 82] },
  { name: "Sri Muktsar Sahib", region: "Malwa", areaSqKm: 2597, population2011: 903075, density: 348, acCount: 4, acNumbers: [83, 84, 85, 86] },
  { name: "Faridkot", region: "Malwa", areaSqKm: 1469, population2011: 617508, density: 424, acCount: 3, acNumbers: [87, 88, 89] },
  { name: "Bathinda", region: "Malwa", areaSqKm: 3385, population2011: 1389271, density: 414, acCount: 6, acNumbers: [90, 91, 92, 93, 94, 95] },
  { name: "Mansa", region: "Malwa", areaSqKm: 2198, population2011: 769463, density: 350, acCount: 3, acNumbers: [96, 97, 98] },
  { name: "Sangrur", region: "Malwa", areaSqKm: 3625, population2011: 1655260, density: 457, acCount: 5, acNumbers: [99, 100, 101, 107, 108] },
  { name: "Barnala", region: "Malwa", areaSqKm: 1393, population2011: 595697, density: 402, acCount: 3, acNumbers: [102, 103, 104] },
  { name: "Malerkotla", region: "Malwa", areaSqKm: 1672, population2011: 428558, density: 0, acCount: 2, acNumbers: [105, 106] }, // density: VERIFICATION_NEEDED
  { name: "Patiala", region: "Malwa", areaSqKm: 3625, population2011: 1895686, density: 570, acCount: 7, acNumbers: [109, 110, 111, 113, 114, 115, 116, 117] },
];

// ==========================================
// COMPLETE 117 ASSEMBLY CONSTITUENCY DATABASE
// ==========================================

export const ASSEMBLY_CONSTITUENCIES: AssemblyConstituency[] = [
  // Majha Region (ACs 1-25)
  { acNumber: 1, acName: "Sujanpur", district: "Pathankot", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 167230, classification: "Rural" },
  { acNumber: 2, acName: "Bhoa", district: "Pathankot", region: "Majha", reservation: "SC", lokSabha: "Gurdaspur", electorate2022: 182915, classification: "Rural" },
  { acNumber: 3, acName: "Pathankot", district: "Pathankot", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 152519, classification: "Semi-Urban" },
  { acNumber: 4, acName: "Gurdaspur", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 169628, classification: "Semi-Urban" },
  { acNumber: 5, acName: "Dina Nagar", district: "Gurdaspur", region: "Majha", reservation: "SC", lokSabha: "Gurdaspur", electorate2022: 192562, classification: "Rural" },
  { acNumber: 6, acName: "Qadian", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 181907, classification: "Rural" },
  { acNumber: 7, acName: "Batala", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 188862, classification: "Semi-Urban" },
  { acNumber: 8, acName: "Shri Hargobindpur", district: "Gurdaspur", region: "Majha", reservation: "SC", lokSabha: "Hoshiarpur", electorate2022: 178734, classification: "Rural" },
  { acNumber: 9, acName: "Fatehgarh Churian", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 175730, classification: "Rural" },
  { acNumber: 10, acName: "Dera Baba Nanak", district: "Gurdaspur", region: "Majha", reservation: "General", lokSabha: "Gurdaspur", electorate2022: 194613, classification: "Rural" },
  { acNumber: 11, acName: "Ajnala", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 157161, classification: "Rural" },
  { acNumber: 12, acName: "Raja Sansi", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 177713, classification: "Rural" },
  { acNumber: 13, acName: "Majitha", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 166136, classification: "Rural" },
  { acNumber: 14, acName: "Jandiala", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Khadoor Sahib", electorate2022: 180674, classification: "Rural" },
  { acNumber: 15, acName: "Amritsar North", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 202095, classification: "Urban" },
  { acNumber: 16, acName: "Amritsar West", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar", electorate2022: 214073, classification: "Urban" },
  { acNumber: 17, acName: "Amritsar Central", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 147058, classification: "Urban" },
  { acNumber: 18, acName: "Amritsar East", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 168013, classification: "Urban" },
  { acNumber: 19, acName: "Amritsar South", district: "Amritsar", region: "Majha", reservation: "General", lokSabha: "Amritsar", electorate2022: 177605, classification: "Semi-Urban" },
  { acNumber: 20, acName: "Attari", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar", electorate2022: 189475, classification: "Rural" },
  { acNumber: 21, acName: "Tarn Taran", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 196866, classification: "Semi-Urban" },
  { acNumber: 22, acName: "Khem Karan", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 216090, classification: "Rural (Border)" },
  { acNumber: 23, acName: "Patti", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 202155, classification: "Rural" },
  { acNumber: 24, acName: "Khadoor Sahib", district: "Tarn Taran", region: "Majha", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 201328, classification: "Rural" },
  { acNumber: 25, acName: "Baba Bakala", district: "Amritsar", region: "Majha", reservation: "SC", lokSabha: "Amritsar", electorate2022: 199929, classification: "Rural" },

  // Doaba Region (ACs 26-48)
  { acNumber: 26, acName: "Bholath", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 136413, classification: "Rural" },
  { acNumber: 27, acName: "Kapurthala", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 149885, classification: "Semi-Urban" },
  { acNumber: 28, acName: "Sultanpur Lodhi", district: "Kapurthala", region: "Doaba", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 148094, classification: "Rural" },
  { acNumber: 29, acName: "Phagwara", district: "Kapurthala", region: "Doaba", reservation: "SC", lokSabha: "Hoshiarpur", electorate2022: 192867, classification: "Semi-Urban" },
  { acNumber: 30, acName: "Phillaur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar", electorate2022: 207149, classification: "Semi-Urban" },
  { acNumber: 31, acName: "Nakodar", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 194824, classification: "Rural" },
  { acNumber: 32, acName: "Shahkot", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 181946, classification: "Rural" },
  { acNumber: 33, acName: "Kartarpur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar", electorate2022: 184515, classification: "Rural" },
  { acNumber: 34, acName: "Jalandhar West", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar", electorate2022: 171632, classification: "Urban" },
  { acNumber: 35, acName: "Jalandhar Central", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 174003, classification: "Urban" },
  { acNumber: 36, acName: "Jalandhar North", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 192058, classification: "Urban" },
  { acNumber: 37, acName: "Jalandhar Cantt", district: "Jalandhar", region: "Doaba", reservation: "General", lokSabha: "Jalandhar", electorate2022: 193666, classification: "Urban" },
  { acNumber: 38, acName: "Adampur", district: "Jalandhar", region: "Doaba", reservation: "SC", lokSabha: "Jalandhar", electorate2022: 167424, classification: "Rural" },
  { acNumber: 39, acName: "Mukerian", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 202924, classification: "Rural" },
  { acNumber: 40, acName: "Dasuya", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 197021, classification: "Rural" },
  { acNumber: 41, acName: "Urmar", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 181007, classification: "Rural" },
  { acNumber: 42, acName: "Sham Chaurasi", district: "Hoshiarpur", region: "Doaba", reservation: "SC", lokSabha: "Hoshiarpur", electorate2022: 177269, classification: "Rural" },
  { acNumber: 43, acName: "Hoshiarpur", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Hoshiarpur", electorate2022: 192794, classification: "Urban" },
  { acNumber: 44, acName: "Chabbewal", district: "Hoshiarpur", region: "Doaba", reservation: "SC", lokSabha: "Hoshiarpur", electorate2022: 161535, classification: "Rural" },
  { acNumber: 45, acName: "Garhshankar", district: "Hoshiarpur", region: "Doaba", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 175287, classification: "Rural" },
  { acNumber: 46, acName: "Banga", district: "SBS Nagar", region: "Doaba", reservation: "SC", lokSabha: "Anandpur Sahib", electorate2022: 165283, classification: "Rural" },
  { acNumber: 47, acName: "Nawan Shahr", district: "SBS Nagar", region: "Doaba", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 177231, classification: "Semi-Urban" },
  { acNumber: 48, acName: "Balachaur", district: "SBS Nagar", region: "Doaba", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 155145, classification: "Rural" },

  // Malwa Region (ACs 49-117)
  { acNumber: 49, acName: "Anandpur Sahib", district: "Rupnagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 191727, classification: "Semi-Urban" },
  { acNumber: 50, acName: "Rupnagar", district: "Rupnagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 183115, classification: "Semi-Urban" },
  { acNumber: 51, acName: "Chamkaur Sahib", district: "Rupnagar", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib", electorate2022: 197330, classification: "Rural" },
  { acNumber: 52, acName: "Kharar", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 266514, classification: "Semi-Urban" },
  { acNumber: 53, acName: "S.A.S. Nagar", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "Anandpur Sahib", electorate2022: 238998, classification: "Urban" },
  { acNumber: 54, acName: "Bassi Pathana", district: "Fatehgarh Sahib", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib", electorate2022: 149248, classification: "Rural" },
  { acNumber: 55, acName: "Fatehgarh Sahib", district: "Fatehgarh Sahib", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib", electorate2022: 161754, classification: "Semi-Urban" },
  { acNumber: 56, acName: "Amloh", district: "Fatehgarh Sahib", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib", electorate2022: 144482, classification: "Rural" },
  { acNumber: 57, acName: "Khanna", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 171622, classification: "Semi-Urban" },
  { acNumber: 58, acName: "Samrala", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 175822, classification: "Rural" },
  { acNumber: 59, acName: "Sahnewal", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 265097, classification: "Rural" },
  { acNumber: 60, acName: "Ludhiana East", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 217728, classification: "Urban" },
  { acNumber: 61, acName: "Ludhiana South", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 178167, classification: "Urban" },
  { acNumber: 62, acName: "Atam Nagar", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 170654, classification: "Urban" },
  { acNumber: 63, acName: "Ludhiana Central", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 158931, classification: "Urban" },
  { acNumber: 64, acName: "Ludhiana West", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 182455, classification: "Urban" },
  { acNumber: 65, acName: "Ludhiana North", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 205063, classification: "Urban" },
  { acNumber: 66, acName: "Gill", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Ludhiana", electorate2022: 273104, classification: "Semi-Urban" },
  { acNumber: 67, acName: "Payal", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib", electorate2022: 165608, classification: "Rural" },
  { acNumber: 68, acName: "Dakha", district: "Ludhiana", region: "Malwa", reservation: "General", lokSabha: "Ludhiana", electorate2022: 187760, classification: "Rural" },
  { acNumber: 69, acName: "Raikot", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Fatehgarh Sahib", electorate2022: 156301, classification: "Rural" },
  { acNumber: 70, acName: "Jagraon", district: "Ludhiana", region: "Malwa", reservation: "SC", lokSabha: "Ludhiana", electorate2022: 184819, classification: "Rural" },
  { acNumber: 71, acName: "Nihal Singhwala", district: "Moga", region: "Malwa", reservation: "SC", lokSabha: "Faridkot", electorate2022: 197869, classification: "Rural" },
  { acNumber: 72, acName: "Bagha Purana", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 172120, classification: "Rural" },
  { acNumber: 73, acName: "Moga", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 203541, classification: "Semi-Urban" },
  { acNumber: 74, acName: "Dharamkot", district: "Moga", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 181612, classification: "Rural" },
  { acNumber: 75, acName: "Zira", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Khadoor Sahib", electorate2022: 187300, classification: "Rural" },
  { acNumber: 76, acName: "Firozpur City", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 172957, classification: "Urban" },
  { acNumber: 77, acName: "Firozpur Rural", district: "Firozpur", region: "Malwa", reservation: "SC", lokSabha: "Firozpur", electorate2022: 195975, classification: "Rural" },
  { acNumber: 78, acName: "Guru Har Sahai", district: "Firozpur", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 172641, classification: "Rural" },
  { acNumber: 79, acName: "Jalalabad", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 213416, classification: "Rural" },
  { acNumber: 80, acName: "Fazilka", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 177520, classification: "Semi-Urban" },
  { acNumber: 81, acName: "Abohar", district: "Fazilka", region: "Malwa", reservation: "General", lokSabha: "Firozpur", electorate2022: 178416, classification: "Semi-Urban" },
  { acNumber: 82, acName: "Balluana", district: "Fazilka", region: "Malwa", reservation: "SC", lokSabha: "Firozpur", electorate2022: 183929, classification: "Rural" },
  { acNumber: 83, acName: "Lambi", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 165263, classification: "Rural" },
  { acNumber: 84, acName: "Gidderbaha", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 167228, classification: "Rural" },
  { acNumber: 85, acName: "Malout", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "SC", lokSabha: "Firozpur", electorate2022: 176573, classification: "Rural" },
  { acNumber: 86, acName: "Muktsar", district: "Sri Muktsar Sahib", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 188889, classification: "Semi-Urban" },
  { acNumber: 87, acName: "Faridkot", district: "Faridkot", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 169823, classification: "Semi-Urban" },
  { acNumber: 88, acName: "Kotkapura", district: "Faridkot", region: "Malwa", reservation: "General", lokSabha: "Faridkot", electorate2022: 159646, classification: "Rural" },
  { acNumber: 89, acName: "Jaitu", district: "Faridkot", region: "Malwa", reservation: "SC", lokSabha: "Faridkot", electorate2022: 151056, classification: "Rural" },
  { acNumber: 90, acName: "Rampura Phul", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 169859, classification: "Rural" },
  { acNumber: 91, acName: "Bhucho Mandi", district: "Bathinda", region: "Malwa", reservation: "SC", lokSabha: "Bathinda", electorate2022: 184785, classification: "Rural" },
  { acNumber: 92, acName: "Bathinda Urban", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 229525, classification: "Urban" },
  { acNumber: 93, acName: "Bathinda Rural", district: "Bathinda", region: "Malwa", reservation: "SC", lokSabha: "Bathinda", electorate2022: 158082, classification: "Rural" },
  { acNumber: 94, acName: "Talwandi Sabo", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 156336, classification: "Rural" },
  { acNumber: 95, acName: "Maur", district: "Bathinda", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 167547, classification: "Rural" },
  { acNumber: 96, acName: "Mansa", district: "Mansa", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 218339, classification: "Semi-Urban" },
  { acNumber: 97, acName: "Sardulgarh", district: "Mansa", region: "Malwa", reservation: "General", lokSabha: "Bathinda", electorate2022: 181679, classification: "Rural" },
  { acNumber: 98, acName: "Budhlada", district: "Mansa", region: "Malwa", reservation: "SC", lokSabha: "Bathinda", electorate2022: 195170, classification: "Rural" },
  { acNumber: 99, acName: "Lehra", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 172109, classification: "Rural" },
  { acNumber: 100, acName: "Dirba", district: "Sangrur", region: "Malwa", reservation: "SC", lokSabha: "Sangrur", electorate2022: 182695, classification: "Rural" },
  { acNumber: 101, acName: "Sunam", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 196136, classification: "Rural" },
  { acNumber: 102, acName: "Bhadaur", district: "Barnala", region: "Malwa", reservation: "SC", lokSabha: "Sangrur", electorate2022: 157809, classification: "Rural" },
  { acNumber: 103, acName: "Barnala", district: "Barnala", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 182502, classification: "Semi-Urban" },
  { acNumber: 104, acName: "Mehal Kalan", district: "Barnala", region: "Malwa", reservation: "SC", lokSabha: "Sangrur", electorate2022: 160348, classification: "Rural" },
  { acNumber: 105, acName: "Malerkotla", district: "Malerkotla", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib", electorate2022: 159900, classification: "Semi-Urban" },
  { acNumber: 106, acName: "Amargarh", district: "Malerkotla", region: "Malwa", reservation: "General", lokSabha: "Fatehgarh Sahib", electorate2022: 165909, classification: "Rural" },
  { acNumber: 107, acName: "Dhuri", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 165053, classification: "Rural" },
  { acNumber: 108, acName: "Sangrur", district: "Sangrur", region: "Malwa", reservation: "General", lokSabha: "Sangrur", electorate2022: 189838, classification: "Semi-Urban" },
  { acNumber: 109, acName: "Nabha", district: "Patiala", region: "Malwa", reservation: "SC", lokSabha: "Patiala", electorate2022: 184623, classification: "Rural" },
  { acNumber: 110, acName: "Patiala Rural", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 225639, classification: "Rural" },
  { acNumber: 111, acName: "Rajpura", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 182228, classification: "Semi-Urban" },
  { acNumber: 112, acName: "Dera Bassi", district: "SAS Nagar", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 287622, classification: "Semi-Urban" },
  { acNumber: 113, acName: "Ghanaur", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 164546, classification: "Rural" },
  { acNumber: 114, acName: "Sanour", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 222969, classification: "Rural" },
  { acNumber: 115, acName: "Patiala", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 161399, classification: "Urban" },
  { acNumber: 116, acName: "Samana", district: "Patiala", region: "Malwa", reservation: "General", lokSabha: "Patiala", electorate2022: 192473, classification: "Semi-Urban" },
  { acNumber: 117, acName: "Shutrana", district: "Patiala", region: "Malwa", reservation: "SC", lokSabha: "Patiala", electorate2022: 181568, classification: "Rural" },
];

// ==========================================
// LOK SABHA TO ASSEMBLY MAPPING
// ==========================================

export const LOK_SABHA_MAPPING: LokSabhaConstituency[] = [
  { name: "Gurdaspur", acNumbers: [1, 2, 3, 4, 5, 7, 9, 10], acCount: 8 },
  { name: "Amritsar", acNumbers: [6, 8, 11, 12, 13, 14, 15, 17], acCount: 8 },
  { name: "Khadoor Sahib", acNumbers: [16, 18, 19, 20, 21, 24, 25, 27, 28], acCount: 9 },
  { name: "Jalandhar", acNumbers: [26, 29, 30, 31, 32, 33, 34, 35, 36], acCount: 9 },
  { name: "Hoshiarpur", acNumbers: [37, 38, 39, 40, 41, 42, 43, 44, 45], acCount: 9 },
  { name: "Anandpur Sahib", acNumbers: [46, 47, 48, 49, 50, 52, 53], acCount: 7 },
  { name: "Ludhiana", acNumbers: [54, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 70], acCount: 13 },
  { name: "Fatehgarh Sahib", acNumbers: [51, 55, 56, 67, 69, 105, 106, 109], acCount: 8 },
  { name: "Faridkot", acNumbers: [71, 72, 73, 74, 84, 87, 88, 89], acCount: 8 },
  { name: "Firozpur", acNumbers: [75, 76, 77, 78, 82, 83, 85, 86], acCount: 8 },
  { name: "Bathinda", acNumbers: [79, 90, 91, 92, 93, 94, 95, 96, 98], acCount: 9 },
  { name: "Sangrur", acNumbers: [97, 99, 100, 101, 102, 103, 104, 107, 108], acCount: 9 },
  { name: "Patiala", acNumbers: [110, 111, 113, 114, 115, 116, 117], acCount: 7 },
];

// ==========================================
// SC RESERVED CONSTITUENCIES
// ==========================================

export const SC_RESERVED_DATA: SCReservedData = {
  totalSCSeats: 34,
  scSeatNumbers: [2, 5, 8, 14, 16, 20, 25, 29, 30, 33, 34, 38, 42, 44, 46, 51, 54, 66, 67, 69, 70, 71, 77, 82, 85, 89, 91, 93, 98, 100, 102, 104, 109, 117],
  byRegion: [
    { region: "Majha", scSeats: 8, totalSeats: 25 },
    { region: "Doaba", scSeats: 8, totalSeats: 23 },
    { region: "Malwa", scSeats: 18, totalSeats: 69 },
  ],
};

// ==========================================
// URBAN/RURAL CLASSIFICATION
// ==========================================

export const URBAN_RURAL_SUMMARY: UrbanRuralSummary[] = [
  { type: "Urban", acCount: 20, approxElectors: 4000000, strategicImplication: "Door-to-door + digital outreach; AAP strong in urban 2022" },
  { type: "Semi-Urban", acCount: 25, approxElectors: 4500000, strategicImplication: "Mixed strategy; public rallies + digital" },
  { type: "Rural", acCount: 72, approxElectors: 13000000, strategicImplication: "Village-level contact; sangat darshans; agricultural issues dominate" },
];

export const URBAN_AC_LIST: UrbanACList[] = [
  { acNumber: 15, acName: "Amritsar North" },
  { acNumber: 16, acName: "Amritsar West" },
  { acNumber: 17, acName: "Amritsar Central" },
  { acNumber: 18, acName: "Amritsar East" },
  { acNumber: 34, acName: "Jalandhar West" },
  { acNumber: 35, acName: "Jalandhar Central" },
  { acNumber: 36, acName: "Jalandhar North" },
  { acNumber: 37, acName: "Jalandhar Cantt" },
  { acNumber: 43, acName: "Hoshiarpur" },
  { acNumber: 53, acName: "S.A.S. Nagar" },
  { acNumber: 60, acName: "Ludhiana East" },
  { acNumber: 61, acName: "Ludhiana South" },
  { acNumber: 62, acName: "Atam Nagar" },
  { acNumber: 63, acName: "Ludhiana Central" },
  { acNumber: 64, acName: "Ludhiana West" },
  { acNumber: 65, acName: "Ludhiana North" },
  { acNumber: 76, acName: "Firozpur City" },
  { acNumber: 92, acName: "Bathinda Urban" },
  { acNumber: 115, acName: "Patiala" },
  { acNumber: 3, acName: "Pathankot" },
];

// ==========================================
// CAMPAIGN CLUSTERS
// ==========================================

export const CAMPAIGN_CLUSTERS: CampaignCluster[] = [
  {
    name: "Amritsar Metro",
    acNumbers: [15, 16, 17, 18, 19],
    acNames: ["Amritsar North", "Amritsar West", "Amritsar Central", "Amritsar East", "Amritsar South"],
    character: "Urban contiguous block",
    recommendedDays: 1,
  },
  {
    name: "Ludhiana Metro",
    acNumbers: [60, 61, 62, 63, 64, 65, 66],
    acNames: ["Ludhiana East", "Ludhiana South", "Atam Nagar", "Ludhiana Central", "Ludhiana West", "Ludhiana North", "Gill"],
    character: "Largest urban cluster",
    recommendedDays: 2,
  },
  {
    name: "Bathinda Belt",
    acNumbers: [90, 91, 92, 93, 94, 95],
    acNames: ["Rampura Phul", "Bhucho Mandi", "Bathinda Urban", "Bathinda Rural", "Talwandi Sabo", "Maur"],
    character: "AAP stronghold",
    recommendedDays: 2,
  },
  {
    name: "Patiala Crown",
    acNumbers: [109, 110, 111, 113, 114, 115, 116],
    acNames: ["Nabha", "Patiala Rural", "Rajpura", "Ghanaur", "Sanour", "Patiala", "Samana"],
    character: "Royal belt, traditional Congress territory",
    recommendedDays: 2,
  },
  {
    name: "Malwa Cotton Belt",
    acNumbers: [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    acNames: ["Fazilka", "Abohar", "Balluana", "Lambi", "Gidderbaha", "Malout", "Muktsar", "Faridkot", "Kotkapura", "Jaitu"],
    character: "Large contiguous rural zone",
    recommendedDays: 3,
  },
  {
    name: "Doaba NRI Belt",
    acNumbers: [34, 35, 36, 37, 30, 31, 38],
    acNames: ["Jalandhar West", "Jalandhar Central", "Jalandhar North", "Jalandhar Cantt", "Phillaur", "Nakodar", "Adampur"],
    character: "NRI influence high, diaspora funding potential",
    recommendedDays: 2,
  },
];

// ==========================================
// TRAVEL ROUTES
// ==========================================

export const TRAVEL_ROUTES: TravelRoute[] = [
  { route: "Chandigarh to Amritsar", distanceKm: 235, travelTimeHours: "4-5", notes: "Via NH7 (good road)" },
  { route: "Chandigarh to Ludhiana", distanceKm: 100, travelTimeHours: "2-2.5", notes: "Via NH7 (good road)" },
  { route: "Chandigarh to Bathinda", distanceKm: 225, travelTimeHours: "4-5", notes: "Via NH7/NH54" },
  { route: "Amritsar to Pathankot", distanceKm: 135, travelTimeHours: "2.5-3", notes: "Via NH54" },
  { route: "Ludhiana to Jalandhar", distanceKm: 60, travelTimeHours: "1-1.5", notes: "Via NH7" },
  { route: "Bathinda to Muktsar", distanceKm: 55, travelTimeHours: "1", notes: "Good connectivity" },
  { route: "Amritsar to Tarn Taran", distanceKm: 25, travelTimeHours: "45 min", notes: "Short, frequent travel" },
  { route: "Patiala to Sangrur", distanceKm: 60, travelTimeHours: "1.5", notes: "Moderate roads" },
  { route: "Jalandhar to Hoshiarpur", distanceKm: 40, travelTimeHours: "1", notes: "Good road" },
];

// ==========================================
// POLLING STATION DATA
// ==========================================

export const POLLING_STATION_DATA: PollingStationData = {
  totalStations2022: 23700,
  totalElectors: 21499804,
  avgElectorsPerStation: 907,
  eciNormMaxPerStation: 1200,
  avgStationsPerAC: 203,
};

// ==========================================
// ACCESSIBILITY CHALLENGES
// ==========================================

export const ACCESSIBILITY_CHALLENGES: AccessibilityChallenge[] = [
  { region: "Majha", challengeAreas: "Border belt (Khem Karan, Attari, Ajnala)", notes: "BSF coordination needed, restricted movement zones" },
  { region: "Majha", challengeAreas: "Riverine areas (Ravi, Beas floodplains)", notes: "Seasonal flooding disrupts access" },
  { region: "Doaba", challengeAreas: "Kandi belt (Hoshiarpur foothills)", notes: "Hilly terrain, poor road connectivity" },
  { region: "Malwa", challengeAreas: "Southwest (Mansa, Sri Muktsar Sahib, Fazilka)", notes: "Arid zones, long distances between villages" },
  { region: "Malwa", challengeAreas: "Cotton belt villages", notes: "Remote, sparse population" },
];

// ==========================================
// BORDER CONSTITUENCIES
// ==========================================

export const BORDER_CONSTITUENCIES: BorderConstituency[] = [
  { acNumber: 22, acName: "Khem Karan", district: "Tarn Taran", proximity: "2 km from border", specialRequirements: "Heavily militarized, BSF coordination" },
  { acNumber: 20, acName: "Attari", district: "Amritsar", proximity: "Wagah border", specialRequirements: "International attention, daily ceremony" },
  { acNumber: 11, acName: "Ajnala", district: "Amritsar", proximity: "Near border", specialRequirements: "BSF coordination" },
  { acNumber: 9, acName: "Fatehgarh Churian", district: "Gurdaspur", proximity: "Border proximity", specialRequirements: "Border security zone" },
  { acNumber: 10, acName: "Dera Baba Nanak", district: "Gurdaspur", proximity: "Border proximity", specialRequirements: "Border security zone" },
];

// ==========================================
// GIS DATA SOURCES
// ==========================================

export const GIS_SOURCES: GISSource[] = [
  { source: "Stanford Earthworks", url: "earthworks.stanford.edu/catalog/stanford-wh870qw1934", format: "Shapefile (post-delimitation)", quality: "High -- Academic grade" },
  { source: "DataMeet Assembly Constituencies", url: "projects.datameet.org/maps/assembly-constituencies/", format: "GeoJSON", quality: "Medium -- Community maintained" },
  { source: "CEO Punjab AC Map", url: "ceopunjab.gov.in/pcacmap", format: "Interactive web map", quality: "Official but no download" },
  { source: "State GIS Portal", url: "stategisportal.nic.in", format: "23 layers incl. admin boundaries", quality: "Government source" },
  { source: "Data{Meet} Village Boundaries", url: "projects.datameet.org/indian_village_boundaries/", format: "Shapefile", quality: "Village-level granularity" },
  { source: "NextGIS Punjab", url: "data.nextgis.com/en/region/IN-PB/base/", format: "Multiple formats", quality: "OSM-based" },
];

// ==========================================
// DATA GAPS
// ==========================================

export const POLITICAL_GEOGRAPHY_DATA_GAPS: DataGap[] = [
  { item: "GPS coordinates for 117 AC centroids", status: "NOT_COLLECTED", priority: "HIGH", notes: "Requires GIS shapefile processing" },
  { item: "GPS coordinates for 23,400+ polling stations", status: "NOT_COLLECTED", priority: "MEDIUM", notes: "Available per-AC from CEO Punjab" },
  { item: "Constituency adjacency matrix (full)", status: "NOT_COLLECTED", priority: "HIGH", notes: "Derivable from shapefile topology" },
  { item: "Updated 2026 electorate figures", status: "NOT_AVAILABLE", priority: "HIGH", notes: "Electoral roll revision ongoing" },
  { item: "2021 Census population data", status: "NOT_AVAILABLE", priority: "HIGH", notes: "Census not yet conducted" },
  { item: "Malerkotla district exact area/population", status: "PARTIAL", priority: "LOW", notes: "New district (2021)" },
  { item: "Exact polling station count per AC", status: "PARTIAL", priority: "MEDIUM", notes: "Available from CEO Punjab per-district" },
  { item: "Road network GIS for campaign routing", status: "NOT_COLLECTED", priority: "MEDIUM" },
  { item: "Railway connectivity per constituency", status: "NOT_COLLECTED", priority: "LOW" },
  { item: "Tehsil/block-level mapping per AC", status: "PARTIAL", priority: "MEDIUM", notes: "Needs cross-reference with revenue records" },
];

// ==========================================
// REGION STATS
// ==========================================

export const REGION_STATS = {
  majha: { seats: 25, electorate: "45.8 lakh", avgSize: "1,83,357" },
  doaba: { seats: 23, electorate: "40.8 lakh", avgSize: "1,77,564" },
  malwa: { seats: 69, electorate: "126.9 lakh", avgSize: "1,83,855" },
};

// ==========================================
// KEY ELECTORAL INSIGHTS
// ==========================================

export const KEY_ELECTORAL_INSIGHT = {
  malwaMath: "Malwa alone holds 69 seats -- a Congress majority of 59+ is mathematically impossible without winning 35+ seats in Malwa",
  aap2022Result: "AAP swept 62 of 69 Malwa seats in 2022",
  congressRecovery: "Congress must recover ground in Malwa to form government",
  scPopulation: "Punjab has 31.9% SC population (highest among Indian states)",
  scSeats: "34 of 117 ACs are reserved for Scheduled Caste candidates",
};
