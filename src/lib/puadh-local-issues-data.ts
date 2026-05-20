// @ts-nocheck
// Puadh Local Issues Data for Punjab Congress 2027 Election Dashboard
// Derived from: MP1-foundational/governance/local-issues-puadh-remaining.md
// Research Date: 19 May 2026 | Data Currency: March-April 2026

import type {
  PuadhLocalIssuesKPI,
  PuadhConstituencyIssue,
  PuadhDataPoint,
  PuadhCongressStrategy,
  PuadhDataGap,
  PuadhCrossCuttingTheme,
} from "@/types/local-issues-types";

// ==========================================
// META
// ==========================================

const puadhMeta = {
  researchDate: "19 May 2026",
  sourcesConsulted: 14,
  dataFreshness: "March-April 2026 (most recent)",
  confidence: "MEDIUM-HIGH (well-sourced from Tribune, Indian Express, ToI, Babushahi; some constituencies have thinner coverage)",
  researcher: "Intelligence Research Agent",
};

// ==========================================
// SAS NAGAR (MOHALI) DATA
// ==========================================

const sasNagarIssues: PuadhConstituencyIssue[] = [
  {
    issue: "Traffic congestion & parking chaos",
    priority: 1,
    intensity: "Critical",
    temporality: "Chronic",
    blamedEntity: "AAP/GMADA/MC",
    status: "Unresolved; murders linked to parking disputes",
    congressResponse: "Promise integrated city bus + parking management",
  },
  {
    issue: "No city bus service (20+ years)",
    priority: 2,
    intensity: "Critical",
    temporality: "Chronic",
    blamedEntity: "All parties",
    status: "Rs 6 crore budgeted but never operationalised",
    congressResponse: "Commit to operational bus within 6 months of power",
  },
  {
    issue: "Garbage crisis -- no permanent dumping site",
    priority: 3,
    intensity: "Critical",
    temporality: "Acute",
    blamedEntity: "AAP/MC",
    status: "Phase 8-B site closed Nov 2024; 53 informal dumping points vs 11 before",
    congressResponse: "Propose integrated waste processing at Samgauli",
  },
  {
    issue: "Unregulated autorickshaw monopoly",
    priority: 4,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "MC/State Govt",
    status: "Fares unchecked; adds to congestion",
    congressResponse: "Regulate auto permits, integrate with bus routes",
  },
  {
    issue: "Poor road conditions",
    priority: 5,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "GMADA/MC",
    status: "New sectors lack infrastructure",
    congressResponse: "Demand accountability from GMADA",
  },
  {
    issue: "Water supply & drainage gaps",
    priority: 6,
    intensity: "High",
    temporality: "Acute",
    blamedEntity: "MC/GMADA",
    status: "New sectors lack sewerage; F&CC sanctions issued Dec 2025",
    congressResponse: "Promise comprehensive water/sewer upgrade",
  },
  {
    issue: "MC expansion without capacity building",
    priority: 7,
    intensity: "Medium",
    temporality: "Emerging",
    blamedEntity: "AAP",
    status: "New areas added Dec 2025 without matching resources",
    congressResponse: "Demand capacity-first expansion policy",
  },
  {
    issue: "Smart City project delays",
    priority: 8,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "AAP/Central",
    status: "Punjab at 87% completion (below 93% national)",
    congressResponse: "Accelerate pending Rs 481 crore projects",
  },
];

// ==========================================
// LUDHIANA URBAN DATA
// ==========================================

const ludhianaUrbanIssues: PuadhConstituencyIssue[] = [
  {
    issue: "Hosiery/textile industry crisis -- Chinese imports",
    priority: 1,
    intensity: "Critical",
    temporality: "Acute",
    blamedEntity: "Central Govt/AAP",
    status: "Chinese products >50% market share; cottage industry closing",
    congressResponse: "Demand import tariffs + MSME protection package",
  },
  {
    issue: "Buddha Nullah toxic pollution",
    priority: 2,
    intensity: "Critical",
    temporality: "Chronic",
    blamedEntity: "AAP/PPCB",
    status: "PPCB colluding with dyeing units; BOD 154 mg/l; contempt petitions filed",
    congressResponse: "Promise independent pollution monitoring",
  },
  {
    issue: "Traffic congestion -- 100-year-old infrastructure",
    priority: 3,
    intensity: "Critical",
    temporality: "Chronic",
    blamedEntity: "MC/State Govt",
    status: "Only 150 traffic police for entire city; 16 no-tolerance zones declared but unenforced",
    congressResponse: "Fund infrastructure modernisation plan",
  },
  {
    issue: "Air pollution -- city among India's worst",
    priority: 4,
    intensity: "Critical",
    temporality: "Chronic",
    blamedEntity: "AAP/PPCB/MC",
    status: "AQI consistently 'poor'; declared critically polluted by CPCB",
    congressResponse: "Comprehensive clean air action plan",
  },
  {
    issue: "Industrial input cost surge",
    priority: 5,
    intensity: "High",
    temporality: "Acute",
    blamedEntity: "Central Govt",
    status: "Yarn, fabric costs rising; demand weakening",
    congressResponse: "Industrial policy with input cost relief",
  },
  {
    issue: "Unregulated auto-rickshaw proliferation",
    priority: 6,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "MC/State",
    status: "Decade-long unregulated growth on congested routes",
    congressResponse: "Route rationalisation + public transport",
  },
  {
    issue: "Municipal Corporation misgovernance",
    priority: 7,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "AAP/MC",
    status: "Inter-department coordination failure; encroachments unchecked",
    congressResponse: "Promise MC reform + accountability",
  },
  {
    issue: "Open garbage burning & waste management",
    priority: 8,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "MC",
    status: "No systematic collection; roadside dumping routine",
    congressResponse: "Door-to-door waste collection city-wide",
  },
  {
    issue: "Residential-to-commercial conversion",
    priority: 9,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "MC/Town Planning",
    status: "Model Town, BRS Nagar, Sarabha Nagar affected",
    congressResponse: "Enforce mixed land-use regulations",
  },
  {
    issue: "Lack of new Transport Nagar / satellite bus stand",
    priority: 10,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "MC/State",
    status: "Proposed but not executed",
    congressResponse: "Prioritise relocation of congestion hubs",
  },
];

// ==========================================
// PATIALA DATA
// ==========================================

const patialaIssues: PuadhConstituencyIssue[] = [
  {
    issue: "Civic infrastructure -- roads, water, sewerage",
    priority: 1,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "AAP/MC",
    status: "Tenders worth Rs 20 crore issued; 50 electric buses promised within 6 months",
    congressResponse: "Accelerate + expand civic projects",
  },
  {
    issue: "Stray dog menace",
    priority: 2,
    intensity: "High",
    temporality: "Acute",
    blamedEntity: "MC",
    status: "Sterilisation of 50 dogs/day announced; kennel capacity expanding 50 to 200",
    congressResponse: "Fund comprehensive animal birth control",
  },
  {
    issue: "Solid waste management gaps",
    priority: 3,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "MC",
    status: "New MRF project started in 2 wards with Thapar University support",
    congressResponse: "Scale MRF to all wards city-wide",
  },
  {
    issue: "Canal-based drinking water supply",
    priority: 4,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "State Govt",
    status: "New clean water projects in pipeline",
    congressResponse: "Prioritise completion + quality monitoring",
  },
  {
    issue: "Flooding during monsoon",
    priority: 5,
    intensity: "Medium",
    temporality: "Acute",
    blamedEntity: "AAP/PWD",
    status: "Drain near Deer Park to be widened; 1,000 recharge wells planned",
    congressResponse: "Verify execution before monsoon",
  },
  {
    issue: "Smart City project delays",
    priority: 6,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "AAP/Central",
    status: "Patiala among 3 Punjab smart cities; 87% completion rate",
    congressResponse: "Fast-track remaining projects",
  },
  {
    issue: "Punjabi University funding concerns",
    priority: 7,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "State Govt",
    status: "NOT_FOUND -- verification needed",
    congressResponse: "Commit adequate funding for higher education",
  },
  {
    issue: "Heritage preservation neglect",
    priority: 8,
    intensity: "Low",
    temporality: "Chronic",
    blamedEntity: "State Govt/AAP",
    status: "NOT_FOUND -- verification needed",
    congressResponse: "Propose heritage conservation programme",
  },
  {
    issue: "Rural-urban divide in service delivery",
    priority: 9,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "System",
    status: "Peripheral areas lack basic amenities",
    congressResponse: "Equitable development plan for rural Patiala",
  },
];

// ==========================================
// FATEHGARH SAHIB DATA
// ==========================================

const fatehgarhSahibIssues: PuadhConstituencyIssue[] = [
  {
    issue: "Agricultural distress -- irrigation, power",
    priority: 1,
    intensity: "Critical",
    temporality: "Chronic",
    blamedEntity: "System/AAP",
    status: "Underground power for farmers announced Mar 2026",
    congressResponse: "Ensure implementation; daytime power guarantee",
  },
  {
    issue: "Sikh religious sentiment & heritage",
    priority: 2,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "System",
    status: "Fatehgarh Sahib = site of Sahibzada martyrdom; religious tourism potential underutilised",
    congressResponse: "Develop religious tourism corridor",
  },
  {
    issue: "Education infrastructure gaps",
    priority: 3,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "State Govt",
    status: "NOT_FOUND -- verification needed",
    congressResponse: "Upgrade schools + higher education access",
  },
  {
    issue: "Rural connectivity & roads",
    priority: 4,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "PWD/State",
    status: "Announcements made; execution lagging",
    congressResponse: "Monitor + expedite road projects",
  },
  {
    issue: "Crop loss / natural calamity support",
    priority: 5,
    intensity: "Medium",
    temporality: "Acute",
    blamedEntity: "AAP/State",
    status: "Govt claims 'adequate assistance' but farmer dissatisfaction persists",
    congressResponse: "Transparent, swift crop loss compensation",
  },
  {
    issue: "Flood vulnerability (2025 floods affected district)",
    priority: 6,
    intensity: "Medium",
    temporality: "Acute",
    blamedEntity: "AAP/State",
    status: "District was among flood-affected in 2025",
    congressResponse: "Flood mitigation infrastructure plan",
  },
  {
    issue: "Industrial development vacuum",
    priority: 7,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "AAP/State",
    status: "Limited industrial base; MSME sector underserved",
    congressResponse: "MSME park + skill development centre",
  },
];

// ==========================================
// RUPNAGAR / ANANDPUR SAHIB DATA
// ==========================================

const rupnagarIssues: PuadhConstituencyIssue[] = [
  {
    issue: "Anandpur Sahib district creation controversy",
    priority: 1,
    intensity: "Critical",
    temporality: "Acute",
    blamedEntity: "AAP",
    status: "Rs 500-560 crore proposed; 40-day lawyer strike in Ropar; Congress leader threatens agitation",
    congressResponse: "Oppose bifurcation; demand development package instead",
  },
  {
    issue: "Religious tourism infrastructure deficit",
    priority: 2,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "State/Centre",
    status: "Holy city declared Nov 2025 but infrastructure lagging",
    congressResponse: "Comprehensive tourism + heritage plan",
  },
  {
    issue: "Agricultural issues -- irrigation, procurement",
    priority: 3,
    intensity: "High",
    temporality: "Chronic",
    blamedEntity: "System",
    status: "Standard Punjab agrarian issues apply",
    congressResponse: "State-specific procurement guarantee",
  },
  {
    issue: "Rural infrastructure -- roads, health, education",
    priority: 4,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "State Govt",
    status: "NOT_FOUND -- verification needed",
    congressResponse: "Rural development package",
  },
  {
    issue: "Administrative disruption from district reorganisation",
    priority: 5,
    intensity: "Medium",
    temporality: "Emerging",
    blamedEntity: "AAP",
    status: "Garhshankar, Kharar residents also oppose shift",
    congressResponse: "Oppose forced administrative changes",
  },
  {
    issue: "Bhakra-Nangal dam area employment",
    priority: 6,
    intensity: "Medium",
    temporality: "Chronic",
    blamedEntity: "Central/State",
    status: "NOT_FOUND -- verification needed",
    congressResponse: "Employment package for dam area youth",
  },
];

// ==========================================
// CROSS-CUTTING THEMES
// ==========================================

const crossCuttingThemes: PuadhCrossCuttingTheme[] = [
  {
    id: 1,
    title: "Civic infrastructure collapse",
    description: "Traffic, garbage, water, sewerage failures across all urban centres",
    affectedRegions: ["SAS Nagar", "Ludhiana Urban", "Patiala"],
  },
  {
    id: 2,
    title: "Industrial distress",
    description: "Ludhiana hosiery/textile crisis from Chinese imports",
    affectedRegions: ["Ludhiana Urban"],
  },
  {
    id: 3,
    title: "Environmental emergency",
    description: "Buddha Nullah pollution, air quality, open dumping",
    affectedRegions: ["Ludhiana Urban"],
  },
  {
    id: 4,
    title: "Smart City underperformance",
    description: "Punjab at 87% completion vs 93% national average",
    affectedRegions: ["SAS Nagar", "Patiala"],
  },
  {
    id: 5,
    title: "Religious-political issues",
    description: "Anandpur Sahib district controversy, sacrilege laws",
    affectedRegions: ["Rupnagar", "Fatehgarh Sahib"],
  },
  {
    id: 6,
    title: "Public transport vacuum",
    description: "Mohali has no city bus after 20 years of planning",
    affectedRegions: ["SAS Nagar"],
  },
];

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

const strategicImplications: PuadhCongressStrategy[] = [
  {
    number: 1,
    region: "Mohali/Kharar",
    title: "Urban Civic Failure is AAP's Achilles Heel",
    description: "AAP has governed Punjab since 2022 but Mohali -- the 'model city' adjacent to Chandigarh -- has no city bus, no garbage disposal site, and escalating traffic deaths over parking.",
    attackVectors: [
      "Visual-contrast campaign: dysfunction of AAP's flagship urban constituency",
      "Co-opt and amplify Kulwant Singh's (Mohali MLA) hospital parking demands",
    ],
  },
  {
    number: 2,
    region: "Ludhiana",
    title: "Industrial Rescue Package as Vote Magnet",
    description: "The hosiery/textile crisis is existential. With >50% market share lost to Chinese imports and cottage industry closing, hundreds of thousands of livelihoods are at stake.",
    attackVectors: [
      "Promise 'Ludhiana Industrial Rescue Package' with import duty demands to Centre",
      "Commit MSME technology upgradation fund",
      "Attack AAP for PPCB collusion on Buddha Nullah pollution",
      "Link environmental degradation to public health costs",
    ],
  },
  {
    number: 3,
    region: "Patiala",
    title: "Competence Contrast on Civic Delivery",
    description: "Patiala is a traditional Congress stronghold (Captain Amarinder Singh's base). AAP has made recent inroads (won MC polls Dec 2024).",
    attackVectors: [
      "Position as party that delivers civic infrastructure (contrast with AAP delays)",
      "Promise accelerated Smart City completion",
      "Commit heritage conservation programme",
    ],
  },
  {
    number: 4,
    region: "Fatehgarh Sahib",
    title: "Leverage Congress Lok Sabha Win",
    description: "Congress won the Fatehgarh Sahib Lok Sabha seat in 2024 (Amar Singh). This is a base to build on.",
    attackVectors: [
      "Agricultural relief (farmers are core voters)",
      "Religious tourism development (Fatehgarh Sahib as pilgrimage hub)",
      "Exploit AAP's sacrilege law announcement as reactive politics",
    ],
  },
  {
    number: 5,
    region: "Rupnagar/Anandpur Sahib",
    title: "Exploit District Creation Controversy",
    description: "The Anandpur Sahib district proposal is politically explosive. Congress should lead opposition to the move.",
    attackVectors: [
      "Demand development package instead of administrative reorganisation",
      "Build coalition with lawyers, local stakeholders protesting the move",
      "Position AAP as creating disruption for political gain near religious anniversaries",
    ],
  },
  {
    number: 6,
    region: "Cross-cutting",
    title: "Cross-Cutting Campaign Themes",
    description: "Key narrative attacks that cut across multiple constituencies",
    attackVectors: [
      "'10 years of Smart City, 87% done' -- governance failure evidence",
      "Chinese import invasion -- tie to both Central BJP failure and AAP industrial policy",
      "Buddha Nullah -- environmental destruction under AAP watch",
      "Public transport vacuum -- Mohali 20 years, Ludhiana chaos, Patiala just starting",
    ],
  },
];

// ==========================================
// DATA POINTS
// ==========================================

const dataPoints: PuadhDataPoint[] = [
  {
    metric: "Punjab Smart City completion rate",
    value: "87% (179 of 205 projects)",
    source: "SBI Ecowrap / ToI",
    date: "Apr 2025",
  },
  {
    metric: "Pending Smart City projects in Punjab",
    value: "26 projects, Rs 481 crore",
    source: "SBI Ecowrap / ToI",
    date: "Apr 2025",
  },
  {
    metric: "National Smart City completion rate",
    value: "93%",
    source: "SBI Ecowrap",
    date: "Mar 2025",
  },
  {
    metric: "Chinese product share in Ludhiana hosiery",
    value: ">50% (yarn, fabric, garments)",
    source: "Industry association heads",
    date: "Nov 2025",
  },
  {
    metric: "Ludhiana manufacturing efficiency vs China",
    value: "At least 50% behind",
    source: "Vipan Vinayak, association president",
    date: "Nov 2025",
  },
  {
    metric: "Buddha Nullah BOD levels",
    value: "154 mg/l (safe limit: <3 mg/l)",
    source: "PPCB/HT",
    date: "Oct 2024",
  },
  {
    metric: "Mohali informal garbage dumps",
    value: "Increased from 11 to 53",
    source: "Indian Express",
    date: "Dec 2025",
  },
  {
    metric: "Mohali city bus service planning duration",
    value: "20 years (since 2006) without delivery",
    source: "Indian Express",
    date: "Dec 2025",
  },
  {
    metric: "Anandpur Sahib new district estimated cost",
    value: "Rs 500-560 crore",
    source: "ToI",
    date: "Nov 2025",
  },
  {
    metric: "Ropar DBA protest duration",
    value: "40+ days continuous",
    source: "ToI",
    date: "Nov 2025",
  },
  {
    metric: "Urban road construction plan (Punjab)",
    value: "2,120 km at Rs 1,300 crore",
    source: "Babushahi",
    date: "Apr 2026",
  },
  {
    metric: "Ludhiana traffic police field strength",
    value: "~150 officers",
    source: "Tribune",
    date: "Aug 2025",
  },
  {
    metric: "Patiala electric buses planned",
    value: "50 buses (tendered)",
    source: "Tribune",
    date: "Jun 2025",
  },
  {
    metric: "Patiala civic project tenders",
    value: "Rs 20 crore issued",
    source: "Tribune",
    date: "Jun 2025",
  },
];

// ==========================================
// DATA GAPS
// ==========================================

const dataGaps: PuadhDataGap[] = [
  {
    gap: "Punjabi University funding data for Patiala",
    priority: "High",
    actionNeeded: "Verify budget allocations, staff vacancies, student concerns",
  },
  {
    gap: "Heritage preservation status in Patiala",
    priority: "Medium",
    actionNeeded: "Audit royal heritage sites, tourism revenue data",
  },
  {
    gap: "Ludhiana constituency-wise issue prioritisation",
    priority: "High",
    actionNeeded: "Each of 6 urban seats needs granular data",
  },
  {
    gap: "Rupnagar rural infrastructure specifics",
    priority: "Medium",
    actionNeeded: "Road, health, education data by constituency",
  },
  {
    gap: "Bassi Pathana/Amloh agrarian specifics",
    priority: "Medium",
    actionNeeded: "Verify crop patterns, irrigation, farmer distress indicators",
  },
  {
    gap: "Bhakra-Nangal employment data",
    priority: "Medium",
    actionNeeded: "Check public sector employment trends in Nangal area",
  },
  {
    gap: "Derabassi constituency split issues",
    priority: "Low",
    actionNeeded: "Verify if partially in Mohali district, partially in other",
  },
  {
    gap: "Industrial policy 2026 actual impact on Ludhiana",
    priority: "High",
    actionNeeded: "Monitor implementation after Jan 2026 launch",
  },
  {
    gap: "Flood damage assessment 2025 for Puadh region",
    priority: "Medium",
    actionNeeded: "Get district-wise flood loss data for Rupnagar, Fatehgarh Sahib, Mohali",
  },
  {
    gap: "AAP's sacrilege law -- actual bill text and status",
    priority: "High",
    actionNeeded: "Track Assembly special session Apr 2026 outcome",
  },
];

// ==========================================
// MAIN KPI EXPORT
// ==========================================

export const puadhLocalIssuesKPI: PuadhLocalIssuesKPI = {
  meta: puadhMeta,
  overview: {
    totalSeatsCovered: "18-20",
    totalPunjabSeats: 117,
    keyThemes: [
      "Civic infrastructure collapse",
      "Industrial distress (Ludhiana hosiery crisis)",
      "Environmental emergency (Buddha Nullah)",
      "Smart City underperformance",
      "Religious-political flashpoints",
      "Public transport vacuum",
    ],
  },
  sasNagar: {
    region: "SAS Nagar (Mohali)",
    district: "SAS Nagar",
    seats: ["SAS Nagar (Mohali)", "Kharar", "Derabassi (partially)"],
    issues: sasNagarIssues,
    keyStats: {
      smartCityCompletionRate: 87,
      nationalAverage: 93,
      pendingProjects: 26,
      pendingValueCrore: 481,
      garbageDumpsIncrease: "11 to 53",
      cityBusPlanningYears: 20,
      trafficDeathsNote: "Multiple murders linked to parking disputes including IISER scientist in 2025",
    },
  },
  ludhianaUrban: {
    region: "Ludhiana Urban",
    district: "Ludhiana",
    seats: ["Ludhiana Central", "Ludhiana North", "Ludhiana South", "Ludhiana East", "Atam Nagar", "Gill"],
    issues: ludhianaUrbanIssues,
    keyStats: {
      chineseImportShare: 50,
      manufacturingEfficiencyGap: 50,
      buddhaNullahBOD: 154,
      safeLimitBOD: 3,
      trafficPoliceStrength: 150,
      woolenKnitwearIndiaShare: 95,
      hosieryIndiaShare: 65,
    },
  },
  patiala: {
    region: "Patiala",
    district: "Patiala",
    seats: ["Patiala (Urban)", "Patiala (Rural)", "Rajpura", "Samana", "Shutrana", "Nabha", "Ghanaur (partial)"],
    issues: patialaIssues,
    keyStats: {
      civicProjectTendersCrore: 20,
      electricBusesPlanned: 50,
      dogSterilizationPerDay: 50,
      kennelCapacityBefore: 50,
      kennelCapacityAfter: 200,
    },
  },
  fatehgarhSahib: {
    region: "Fatehgarh Sahib",
    district: "Fatehgarh Sahib",
    seats: ["Fatehgarh Sahib", "Amloh", "Bassi Pathana", "Sirhind (partial overlap)"],
    issues: fatehgarhSahibIssues,
    keyStats: {
      holyCityStatus: true,
      flood2025Affected: true,
      sacrilegeLawMinYears: 10,
    },
  },
  rupnagar: {
    region: "Rupnagar / Anandpur Sahib",
    district: "Rupnagar",
    seats: ["Anandpur Sahib", "Rupnagar", "Chamkaur Sahib", "Nangal"],
    issues: rupnagarIssues,
    keyStats: {
      newDistrictProposed: true,
      newDistrictCostCrore: 500,
      dbaProtestDays: 40,
      holyCityStatus: true,
    },
  },
  crossCuttingThemes,
  dataPoints,
  strategicImplications,
  dataGaps,
  sources: [
    { id: 1, title: "Mohali civic mess gets worse", source: "Indian Express", date: "Dec 31, 2025" },
    { id: 2, title: "Ludhiana traffic woes worsen", source: "Tribune India", date: "Aug 13, 2025" },
    { id: 3, title: "Chinese imports threat to Ludhiana hosiery", source: "Times of India", date: "Nov 7, 2025" },
    { id: 4, title: "Opposition grows in Ropar over Anandpur Sahib district", source: "Times of India", date: "Nov 23, 2025" },
    { id: 5, title: "Punjab New Industrial Policy 2026", source: "Babushahi", date: "Apr 10, 2026" },
    { id: 6, title: "Punjab lags in Smart Cities Mission", source: "Times of India", date: "Apr 26, 2025" },
    { id: 7, title: "Buddha Nullah PPCB failed to act", source: "Times of India", date: "Jul 11, 2025" },
    { id: 8, title: "New road infra for Patiala", source: "Tribune India", date: "Jun 6, 2025" },
    { id: 9, title: "Ludhiana environmental issues took back seat", source: "Tribune India", date: "Dec 29, 2024" },
    { id: 10, title: "CM Mann announces reforms at Sirhind", source: "Babushahi", date: "Mar 28, 2026" },
    { id: 11, title: "Punjab declares holy cities", source: "NDTV", date: "Dec 16, 2025" },
    { id: 12, title: "MC polls mixed bag for AAP", source: "Hindustan Times", date: "Dec 24, 2024" },
    { id: 13, title: "Mohali expands MC limits", source: "GharDirectory", date: "Dec 9, 2025" },
    { id: 14, title: "Punjab Assembly declares holy cities", source: "Economic Times", date: "Nov 24, 2025" },
  ],
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get critical issues for a region
 */
export function getPuadhCriticalIssues(region: string): PuadhConstituencyIssue[] {
  const regionData = getRegionData(region);
  if (!regionData) return [];
  return regionData.issues.filter((i) => i.intensity === "Critical");
}

/**
 * Get all issues for a region sorted by priority
 */
export function getPuadhIssuesByRegion(region: string): PuadhConstituencyIssue[] {
  const regionData = getRegionData(region);
  if (!regionData) return [];
  return [...regionData.issues].sort((a, b) => a.priority - b.priority);
}

/**
 * Get region data by region name
 */
export function getRegionData(region: string): typeof puadhLocalIssuesKPI.sasNagar | typeof puadhLocalIssuesKPI.ludhianaUrban | typeof puadhLocalIssuesKPI.patiala | typeof puadhLocalIssuesKPI.fatehgarhSahib | typeof puadhLocalIssuesKPI.rupnagar | null {
  const regionMap: Record<string, string> = {
    "sas nagar": "sasNagar",
    "mohali": "sasNagar",
    "ludhiana": "ludhianaUrban",
    "ludhiana urban": "ludhianaUrban",
    "patiala": "patiala",
    "fatehgarh sahib": "fatehgarhSahib",
    "rupnagar": "rupnagar",
    "anandpur sahib": "rupnagar",
  };

  const key = regionMap[region.toLowerCase()];
  if (!key) return null;
  return puadhLocalIssuesKPI[key as keyof typeof puadhLocalIssuesKPI] as typeof puadhLocalIssuesKPI.sasNagar;
}

/**
 * Get key stats for dashboard display
 */
export function getPuadhKeyStats(): Array<{ metric: string; value: string; source: string }> {
  return puadhLocalIssuesKPI.dataPoints.map((dp) => ({
    metric: dp.metric,
    value: dp.value,
    source: dp.source,
  }));
}

/**
 * Get all strategic implications
 */
export function getPuadhStrategicImplications(): PuadhCongressStrategy[] {
  return puadhLocalIssuesKPI.strategicImplications;
}

/**
 * Get data gaps sorted by priority
 */
export function getPuadhDataGaps(): PuadhDataGap[] {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  return [...puadhLocalIssuesKPI.dataGaps].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
}

/**
 * Get cross-cutting themes
 */
export function getPuadhCrossCuttingThemes(): PuadhCrossCuttingTheme[] {
  return puadhLocalIssuesKPI.crossCuttingThemes;
}
