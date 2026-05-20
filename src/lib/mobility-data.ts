// Movement & Mobility KPI Data for Punjab Congress 2027
// Derived from: research-M2/MP1-foundational/geography/movement-mobility.md

import type {
  MobilityKPI,
  UrbanCommuterCorridor,
  RuralMandiCommute,
  SeasonalMigration,
  SeasonalCalendarEntry,
  MigrantSentimentData,
  BJPMobilizationData,
  CongressPositionData,
  MigrantSettlement,
  EmigrationProfile,
  EmigrationCorridor,
  NRIEngagementTiming,
  NRIVoterImpact,
  PilgrimageCircuit,
  PilgrimageSite,
  CattleMandiDay,
  AgriculturalMandiHub,
  MandiCampaignNote,
  MajorFair,
  CampaignWindow,
  CriticalCampaignWindow,
  StrategicInsight,
  MobilityDataGap,
} from "@/types/mobility-types";

// ==========================================
// DAILY COMMUTER PATTERNS
// ==========================================

export const urbanCommuterCorridors: UrbanCommuterCorridor[] = [
  {
    name: "Chandigarh Tricity",
    description: "Chandigarh-Mohali-Panchkula forms the densest commuter belt",
    dailyCommuters: 500000,
    profile: [
      "Government employees",
      "IT sector workers",
      "Students",
    ],
  },
  {
    name: "Ludhiana Industrial Belt",
    description: "Workers commute from surrounding towns to Ludhiana's textile and bicycle manufacturing zones",
    dailyCommuters: 0, // not explicitly quantified
    profile: [
      "Textile factory workers",
      "Bicycle manufacturing workers",
      "Industrial laborers",
    ],
    campaignNote: "Surrounding towns: Khanna, Doraha, Moga",
  },
  {
    name: "Amritsar City",
    description: "Commuter flows from Tarn Taran, Ajnala, and Baba Bakala into Amritsar",
    dailyCommuters: 100000,
    profile: [
      "Trade workers",
      "Healthcare workers",
      "Golden Temple visitors (100,000+ daily to Harmandir Sahib alone)",
    ],
  },
  {
    name: "Jalandhar-Phagwara",
    description: "Industrial corridor with daily labor movement between manufacturing towns",
    dailyCommuters: 0, // not explicitly quantified
    profile: [
      "Manufacturing workers",
      "Industrial laborers",
    ],
  },
];

export const ruralMandiCommute: RuralMandiCommute = {
  distanceRange: "10-30 km",
  timingPattern: "Procurement days (wheat: April-May, paddy: October-November)",
  procurementSeasons: [
    "Wheat procurement (April-May)",
    "Paddy procurement (October-November)",
  ],
  campaignNote:
    "High-visibility campaign moments — candidates and parties routinely visit mandis during procurement season",
};

// ==========================================
// SEASONAL MIGRATION (INBOUND LABOR)
// ==========================================

export const seasonalMigration: SeasonalMigration = {
  estimatedMigrantWorkers: "1.2-1.3 million (12-13 lakh)",
  originStates: [
    "Uttar Pradesh (eastern districts)",
    "Bihar",
    "Rajasthan",
    "Madhya Pradesh",
    "Odisha",
  ],
  earningsPerSeason: "Rs 40,000-45,000",
  seasonDuration: "roughly three months",
  source: "Times of India, Sept 2025",
  dataVintage: "2024-2026",
};

export const seasonalCalendar: SeasonalCalendarEntry[] = [
  {
    period: "Oct-Nov",
    activity: "Paddy harvest & procurement",
    migrantInflux: "Peak arrival — 12-13 lakh workers in grain markets",
  },
  {
    period: "Nov-Dec",
    activity: "Wheat sowing, vegetable planting",
    migrantInflux: "Continued demand in fields",
  },
  {
    period: "Apr-May",
    activity: "Wheat harvest & procurement",
    migrantInflux: "Second peak — similar numbers for rabi procurement",
  },
  {
    period: "Jun-Jul",
    activity: "Paddy transplantation",
    migrantInflux: "Labor-intensive; high demand for transplant workers",
  },
  {
    period: "Jul-Sep",
    activity: "Brick kiln season",
    migrantInflux: "200,000+ workers in kilns across Malwa and Doaba",
  },
  {
    period: "Year-round",
    activity: "Construction, domestic work",
    migrantInflux: "Steady demand in urban centers",
  },
];

export const migrantSentiment: MigrantSentimentData = {
  sentiment: "Rising anti-migrant sentiment",
  flashpointIncidents: [
    "Village panchayat resolutions in Mohali (2024-25)",
    "Village panchayat resolutions in Kharar (2024-25)",
    "Village panchayat resolutions in Hoshiarpur (2024-25)",
  ],
  slogan: "Parvasi Bhajao, Punjab Bachao",
  year: 2025,
};

export const bjpMobilization: BJPMobilizationData = {
  targetVoterPool: "20+ lakh eligible voters from UP/Bihar origin",
  originStates: ["Uttar Pradesh", "Bihar"],
  strategy: "Mobilizing migrant voters as a vote bank",
};

export const congressPosition: CongressPositionData = {
  position:
    "Must balance Sikh/Punjabi identity concerns with constitutional equality and economic dependence on migrant labor",
  challenges: [
    "Sikh/Punjabi identity concerns",
    "Economic dependence on migrant labor",
    "Constitutional equality framework",
  ],
};

export const migrantSettlements: MigrantSettlement[] = [
  {
    location: "Ludhiana",
    type: "industrial",
    reachabilityNote: "High concentration of migrant labor in textile/bicycle manufacturing zones",
  },
  {
    location: "Jalandhar",
    type: "industrial",
    reachabilityNote: "Manufacturing sector migrant concentrations",
  },
  {
    location: "Mohali",
    type: "construction",
    reachabilityNote: "Urban construction and service sector migrants",
  },
  {
    location: "Malwa brick kiln clusters",
    type: "brick_kiln",
    reachabilityNote: "Jul-Sep: 200,000+ workers in kilns across Malwa",
  },
  {
    location: "Doaba brick kiln clusters",
    type: "brick_kiln",
    reachabilityNote: "Jul-Sep: 200,000+ workers in kilns across Doaba",
  },
];

// ==========================================
// EMIGRATION & NRI DIASPORA
// ==========================================

export const emigrationProfile: EmigrationProfile = {
  proportionOfRuralHouseholds: 13.34,
  ranking: "second-highest after Kerala",
  totalEmigrants: "1 million",
  period: "2016 to February 2021",
  primaryDestinations: [
    "Canada (largest)",
    "United Kingdom",
    "Australia",
    "United States",
    "Italy",
    "Germany",
    "New Zealand",
  ],
};

export const emigrationCorridors: EmigrationCorridor[] = [
  {
    originRegion: "Doaba",
    originDistricts: ["Jalandhar", "Kapurthala", "Hoshiarpur", "Nawanshahr"],
    primaryDestination: "Canada",
    secondaryDestination: "UK",
    notes: "Highest emigration density; 'Doaba = Canada pipeline'",
  },
  {
    originRegion: "Malwa",
    originDistricts: ["Moga", "Ludhiana rural", "Sangrur"],
    primaryDestination: "Canada",
    secondaryDestination: "Australia",
    notes: "Growing trend",
  },
  {
    originRegion: "Majha",
    originDistricts: ["Amritsar", "Gurdaspur"],
    primaryDestination: "UK",
    secondaryDestination: "Italy",
    notes: "Historical connections; Italy corridor emerging",
  },
  {
    originRegion: "Statewide",
    originDistricts: ["Punjab-wide"],
    primaryDestination: "Gulf (Dubai, Qatar)",
    notes: "Working-class migration, less prestigious",
  },
];

export const nriEngagement: NRIEngagementTiming = {
  peakSeason: "November-February",
  coincidesWith: "campaign season",
};

export const nriVoterImpact: NRIVoterImpact = {
  mechanism:
    "Remittances sustain rural economies; NRI families maintain strong political influence through remittances and family networks",
  strategicNote:
    "NRI voters in Punjab can swing outcomes in Doaba constituencies",
  concentrationRegion: "Doaba",
};

// ==========================================
// PILGRIMAGE ROUTES & CIRCUITS
// ==========================================

export const pilgrimageCircuits: PilgrimageCircuit[] = [
  {
    id: 1,
    name: "Amritsar Religious Circuit",
    sites: [
      {
        name: "Sri Harmandir Sahib (Golden Temple)",
        type: "sikh",
        dailyVisitors: 100000,
        campaignValue: "Highest footfall; langar halls are community gathering points",
      },
      {
        name: "Durgiana Mandir",
        type: "hindu",
        campaignValue: "Major Hindu temple, architecturally similar to Golden Temple",
      },
      {
        name: "Mata Lal Devi Temple",
        type: "hindu",
        campaignValue: "Local pilgrimage site",
      },
      {
        name: "Gobindgarh Fort",
        type: "mixed",
        campaignValue: "Heritage site",
      },
      {
        name: "Wagah Border ceremony",
        type: "mixed",
        dailyVisitors: 20000,
        campaignValue: "Daily ceremony, 20,000+ spectators",
      },
    ],
    totalDailyVisitors: "100,000+",
    peakEvent: "Daily (especially weekends and holidays)",
    peakAttendance: "100,000+",
    campaignNote:
      "Highest footfall; langar halls are community gathering points",
  },
  {
    id: 2,
    name: "Anandpur Sahib & Chamkaur Sahib Circuit",
    sites: [
      {
        name: "Takht Sri Kesgarh Sahib",
        type: "sikh",
        campaignValue: "Birthplace of the Khalsa (one of five Sikh Takhts)",
      },
      {
        name: "Gurudwara Sis Ganj Sahib",
        type: "sikh",
        campaignValue: "Associated with Guru Nanak's teachings",
      },
      {
        name: "Gurudwara Bhora Sahib",
        type: "sikh",
        campaignValue: "Associated with Guru Nanak's teachings",
      },
      {
        name: "Chamkaur Sahib",
        type: "sikh",
        campaignValue: "Site of the Battle of Chamkaur",
      },
      {
        name: "Kiratpur Sahib",
        type: "sikh",
        campaignValue: "On the route from Chandigarh",
      },
    ],
    totalDailyVisitors: "Not specified",
    peakEvent: "Hola Mohalla (March, 3-day festival)",
    peakAttendance: "500,000+",
    campaignNote: "Hola Mohalla is a 3-day festival with 500,000+ attendees",
  },
  {
    id: 3,
    name: "Fatehgarh Sahib & Sirhind Circuit",
    sites: [
      {
        name: "Gurudwara Fatehgarh Sahib",
        type: "sikh",
        campaignValue: "Martyrdom of Sahibzadas",
      },
      {
        name: "Gurudwara Jyoti Sarup",
        type: "sikh",
        campaignValue: "Associated with Guru Angad",
      },
      {
        name: "Rauza Sharif",
        type: "islamic",
        dailyVisitors: 100000,
        campaignValue: "Annual Urs draws 100,000+",
      },
    ],
    totalDailyVisitors: "Not specified",
    peakEvent: "Shaheedi Jor Mela (December)",
    peakAttendance: "200,000+",
    campaignNote: "Shaheedi Jor Mela in December draws 200,000+",
  },
  {
    id: 4,
    name: "Sultanpur Lodhi & Kapurthala Circuit",
    sites: [
      {
        name: "Gurudwara Ber Sahib",
        type: "sikh",
        campaignValue: "Guru Nanak's enlightenment site",
      },
      {
        name: "Multiple gurudwaras associated with Guru Nanak",
        type: "sikh",
        campaignValue: "Associated with Guru Nanak's life",
      },
    ],
    totalDailyVisitors: "Not specified",
    peakEvent: "Guru Nanak Gurpurab (November)",
    peakAttendance: "Massive gathering",
    campaignNote: "Guru Nanak Gurpurab in November",
  },
  {
    id: 5,
    name: "Damdama Sahib & Bathinda Circuit",
    sites: [
      {
        name: "Takht Sri Damdama Sahib",
        type: "sikh",
        campaignValue: "One of five Sikh Takhts",
      },
      {
        name: "Gurudwara at Talwandi Sabo",
        type: "sikh",
        campaignValue: "Where Guru Gobind Singh compiled final Guru Granth Sahib",
      },
    ],
    totalDailyVisitors: "Not specified",
    peakEvent: "Vaisakhi and annual jor mela",
    peakAttendance: "Major gathering",
    campaignNote: "Talwandi Sabo is also the site of Baisakhi celebrations",
  },
];

export const hinduPilgrimageSites: PilgrimageSite[] = [
  {
    name: "Durgiana Mandir",
    type: "hindu",
    location: "Amritsar",
    campaignValue: "Major Hindu temple, architecturally similar to Golden Temple",
  },
  {
    name: "Kali Mata Mandir",
    type: "hindu",
    location: "Patiala",
    campaignValue: "Prominent Kali temple in Patiala",
  },
  {
    name: "Shiv Mandir",
    type: "hindu",
    location: "Jalandhar",
    campaignValue: "Major Shiva temple in Jalandhar",
  },
  {
    name: "Mata Mansa Devi",
    type: "hindu",
    location: "Near Panchkula border",
    campaignValue: "Significant Devi temple near Chandigarh",
  },
  {
    name: "Mukteshwar Mahadev",
    type: "hindu",
    location: "Hoshiarpur",
    campaignValue: "Shiva temple in Hoshiarpur district",
  },
  {
    name: "Navratri melas",
    type: "hindu",
    campaignValue: "Large congregations at Devi temples (April and October)",
  },
];

export const islamicSufiSites: PilgrimageSite[] = [
  {
    name: "Rauza Sharif",
    type: "sufi",
    location: "Sirhind/Fatehgarh Sahib",
    dailyVisitors: 100000,
    peakEvent: "Annual Urs",
    campaignValue: "Annual Urs draws 100,000+",
  },
  {
    name: "Haider Shaykh",
    type: "sufi",
    location: "Malerkotla",
    campaignValue: "Significant Sufi shrine",
  },
  {
    name: "Mian Mir Dargah",
    type: "sufi",
    location: "Lahore (historical connection to Golden Temple)",
    campaignValue: "Historical connection to Golden Temple",
  },
];

// ==========================================
// WEEKLY MANDI / MARKET DAY SCHEDULE
// ==========================================

export const cattleMandiSchedule: CattleMandiDay[] = [
  { day: "Monday", locations: ["Raikot", "Zira"], districts: ["Ludhiana", "Ferozepur"] },
  { day: "Tuesday", locations: ["Moga", "Barnala"], districts: ["Moga", "Barnala"] },
  { day: "Wednesday", locations: ["Lehragaga", "Sunam"], districts: ["Sangrur"] },
  { day: "Thursday", locations: ["Gidderbaha", "Rampura"], districts: ["Muktsar", "Bathinda"] },
  { day: "Friday", locations: ["Dhuri", "Malerkotla"], districts: ["Sangrur", "Malerkotla"] },
  { day: "Saturday", locations: ["Patiala", "Nabha"], districts: ["Patiala"] },
  { day: "Sunday", locations: ["Jagraon", "Phillaur"], districts: ["Ludhiana", "Jalandhar"] },
];

export const agriculturalMandiHubs: AgriculturalMandiHub[] = [
  {
    name: "Khanna",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Asia's largest grain market",
  },
  {
    name: "Rajpura",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Major grain market",
  },
  {
    name: "Dhuri",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Major grain market",
  },
  {
    name: "Lehragaga",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Major grain market in Sangrur district",
  },
  {
    name: "Barnala",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Major grain market",
  },
  {
    name: "Moga",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Major grain market",
  },
  {
    name: "Patiala",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Major grain market",
  },
  {
    name: "Jalandhar",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Major grain market",
  },
  {
    name: "Amritsar",
    cropType: "all",
    season: "April-May (wheat), October-November (paddy)",
    notes: "Major grain market",
  },
  {
    name: "Abohar",
    cropType: "cotton",
    season: "October-November (cotton)",
    notes: "Malwa cotton belt",
  },
  {
    name: "Fazilka",
    cropType: "cotton",
    season: "October-November (cotton)",
    notes: "Malwa cotton belt",
  },
  {
    name: "Muktsar",
    cropType: "cotton",
    season: "October-November (cotton)",
    notes: "Malwa cotton belt",
  },
  {
    name: "Bathinda",
    cropType: "cotton",
    season: "October-November (cotton)",
    notes: "Malwa cotton belt",
  },
  {
    name: "Ludhiana",
    cropType: "vegetables",
    season: "Year-round",
    notes: "Major vegetable wholesale market",
  },
  {
    name: "Jalandhar",
    cropType: "vegetables",
    season: "Year-round",
    notes: "Major vegetable wholesale market",
  },
  {
    name: "Amritsar",
    cropType: "vegetables",
    season: "Year-round",
    notes: "Major vegetable wholesale market",
  },
];

export const mandiCampaignNote: MandiCampaignNote = {
  note: "Mandis are where farmers converge during procurement. Any campaign event at a mandi during April-May or October-November gets guaranteed large attendance and media coverage.",
  procurementSeasons: [
    "Wheat procurement (April-May)",
    "Paddy procurement (October-November)",
  ],
  mediaCoverage: "High visibility events for campaign coverage",
};

// ==========================================
// MAJOR FAIRS & CONGREGATIONS
// ==========================================

export const majorFairs: MajorFair[] = [
  // Sikh Gurpurabs & Melas
  {
    name: "Hola Mohalla",
    religion: "sikh",
    location: "Anandpur Sahib (Ropar)",
    timing: "March (day after Holi)",
    attendance: "500,000+",
    attendanceCount: 500000,
    campaignRelevance: "Largest Sikh festival gathering in Malwa/Doaba border region",
  },
  {
    name: "Baisakhi / Vaisakhi",
    religion: "sikh",
    location: "Talwandi Sabo, Anandpur Sahib",
    timing: "13-14 April",
    attendance: "300,000+",
    attendanceCount: 300000,
    campaignRelevance: "Major Sikh harvest festival; Vaisakhi at Takht Damdama Sahib",
  },
  {
    name: "Martyrdom of Guru Arjan Dev",
    religion: "sikh",
    location: "Tarn Taran, Amritsar",
    timing: "June",
    attendance: "100,000+",
    attendanceCount: 100000,
  },
  {
    name: "Guru Nanak Gurpurab",
    religion: "sikh",
    location: "Sultanpur Lodhi, Nanaksar",
    timing: "November",
    attendance: "200,000+",
    attendanceCount: 200000,
    campaignRelevance: "Major Sikh outreach opportunity; NRI season arrival",
  },
  {
    name: "Shaheedi Jor Mela",
    religion: "sikh",
    location: "Fatehgarh Sahib",
    timing: "December",
    attendance: "200,000+",
    attendanceCount: 200000,
    campaignRelevance: "Major pre-election Sikh congregation; emotional messaging on sacrifice",
  },
  {
    name: "Maghi Mela",
    religion: "sikh",
    location: "Muktsar",
    timing: "14 January",
    attendance: "500,000+",
    attendanceCount: 500000,
    campaignRelevance:
      "Largest pre-election gathering; critical Malwa outreach. Signal of momentum in 69-seat Malwa region",
  },
  {
    name: "Jor Mela (Baba Bakala)",
    religion: "sikh",
    location: "Baba Bakala (Amritsar)",
    timing: "August (Raksha Bandhan)",
    attendance: "200,000+",
    attendanceCount: 200000,
    campaignRelevance: "Religious gathering outreach; women-centric messaging opportunity",
  },
  // Hindu Fairs
  {
    name: "Chhapar Mela",
    religion: "hindu",
    location: "Chhapar (Ludhiana)",
    timing: "September (Anant Chaturdashi)",
    attendance: "Millions",
    attendanceCount: 1000000,
    campaignRelevance: "Major Malwa outreach — millions attend",
  },
  {
    name: "Jarag Mela",
    religion: "hindu",
    location: "Jarag (Patiala)",
    timing: "March-April",
    attendance: "200,000+",
    attendanceCount: 200000,
  },
  {
    name: "Roshni Mela",
    religion: "hindu",
    location: "Jagraon (Ludhiana)",
    timing: "October (Kartik)",
    attendance: "100,000+",
    attendanceCount: 100000,
  },
  {
    name: "Navratri Melas",
    religion: "hindu",
    location: "Various Devi temples",
    timing: "April & October",
    attendance: "50,000-100,000 per site",
    attendanceCount: 75000,
    campaignRelevance: "Hindu outreach at Navratri melas",
  },
  {
    name: "Dussehra",
    religion: "hindu",
    location: "Various (Patiala, Jalandhar)",
    timing: "October",
    attendance: "100,000+",
    attendanceCount: 100000,
    campaignRelevance: "Hindu outreach in major cities",
  },
  // Other Major Congregations
  {
    name: "Eid / Urs",
    religion: "islamic",
    location: "Malerkotla, Rauza Sharif",
    timing: "Variable (Islamic calendar)",
    attendance: "Significant Muslim congregation",
    attendanceCount: 100000,
  },
  {
    name: "Christmas",
    religion: "christian",
    location: "Jalandhar, Ludhiana",
    timing: "25 December",
    attendance: "Notable Christian population gathering",
    attendanceCount: 50000,
  },
  {
    name: "Republic Day",
    religion: "government",
    location: "All district headquarters",
    timing: "26 January",
    attendance: "Government events, public gatherings",
    attendanceCount: 10000,
  },
  {
    name: "Independence Day",
    religion: "government",
    location: "All district headquarters",
    timing: "15 August",
    attendance: "Government events, public gatherings",
    attendanceCount: 10000,
  },
];

// ==========================================
// CAMPAIGN OPPORTUNITY CALENDAR (May 2026 - Feb 2027)
// ==========================================

export const campaignCalendar: CampaignWindow[] = [
  {
    period: "Jun-Jul 2026",
    mobilityEvent: "Paddy transplantation; migrant labor peak",
    campaignAction:
      "Visit fields; engage migrant workers; highlight labor issues",
  },
  {
    period: "Aug 2026",
    mobilityEvent: "Jor Mela Baba Bakala; Raksha Bandhan",
    campaignAction:
      "Religious gathering outreach; women-centric messaging",
  },
  {
    period: "Sep 2026",
    mobilityEvent: "Chhapar Mela (Ludhiana)",
    campaignAction: "Major Malwa outreach — millions attend",
  },
  {
    period: "Oct 2026",
    mobilityEvent: "Paddy procurement begins; Navratri; Dussehra",
    campaignAction: "Mandi visits; Hindu outreach at Navratri melas",
  },
  {
    period: "Nov 2026",
    mobilityEvent: "Guru Nanak Gurpurab; cotton procurement; NRI winter arrivals",
    campaignAction:
      "Sikh outreach; cotton belt (Malwa); NRI engagement",
  },
  {
    period: "Dec 2026",
    mobilityEvent: "Shaheedi Jor Mela (Fatehgarh Sahib); winter migrant return",
    campaignAction:
      "Major Sikh congregation; emotional messaging on sacrifice",
  },
  {
    period: "Jan 2027",
    mobilityEvent: "Maghi Mela (Muktsar) — 500,000+",
    campaignAction:
      "Largest pre-election gathering; critical Malwa outreach",
  },
  {
    period: "Jan-Feb 2027",
    mobilityEvent: "Wheat sowing season; voter registration deadline",
    campaignAction: "Door-to-door in villages; registration drives",
  },
  {
    period: "Feb 2027",
    mobilityEvent: "ELECTION (expected)",
    campaignAction: "All mobility channels activated for turnout",
  },
];

export const criticalCampaignWindows: CriticalCampaignWindow[] = [
  {
    period: "Jan 2027",
    mobilityEvent: "Maghi Mela (Muktsar)",
    campaignAction: "Largest pre-election gathering; critical Malwa outreach",
    significance:
      "Single largest pre-election congregation in Punjab. Every major political leader attends. Final high-visibility Malwa event before voting.",
    regionalFocus: "Malwa (69-seat region)",
    expectedTurnout: "500,000+",
  },
  {
    period: "Sep 2026",
    mobilityEvent: "Chhapar Mela (Ludhiana)",
    campaignAction: "Major Malwa outreach",
    significance:
      "Millions attend; largest Hindu-majority congregation in Malwa",
    regionalFocus: "Malwa",
    expectedTurnout: "1,000,000+",
  },
];

export const strategicInsight: StrategicInsight = {
  event: "Maghi Mela in January 2027",
  significance:
    "Likely the single largest pre-election congregation in Punjab. Every major political leader attends. For Congress, this is the final high-visibility Malwa event before voting.",
  regionalImplication:
    "A strong Maghi showing in Muktsar signals momentum in the 69-seat Malwa region, which decides elections",
  congressAction:
    "Maximize visibility at Maghi Mela Muktsar; use it to signal momentum in Malwa",
};

// ==========================================
// DATA GAPS
// ==========================================

export const mobilityDataGaps: MobilityDataGap[] = [
  {
    dataPoint: "Exact weekly haat schedule by constituency",
    status: "VERIFICATION_NEEDED",
    verificationNeeded:
      "Mandi board data is procurement-focused, not weekly-haat focused. Requires district-level field verification.",
  },
  {
    dataPoint: "Internal migration numbers",
    status: "VERIFICATION_NEEDED",
    verificationNeeded:
      "Census 2021 migration data not yet published; current estimates are from NGO and media sources.",
  },
  {
    dataPoint: "NRI voter registration",
    status: "VERIFICATION_NEEDED",
    verificationNeeded:
      "How many diaspora members are registered voters in Punjab is not publicly available in consolidated form.",
  },
  {
    dataPoint: "Rail/road traffic volumes",
    status: "VERIFICATION_NEEDED",
    verificationNeeded:
      "Daily passenger data on key routes (Amritsar-Delhi, Ludhiana-Delhi, intra-Punjab) not readily accessible.",
  },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const mobilityKPI: MobilityKPI = {
  urbanCommuterCorridors,
  ruralMandiCommute,
  seasonalMigration,
  seasonalCalendar,
  migrantSentiment,
  bjpMobilization,
  congressPosition,
  migrantSettlements,
  emigrationProfile,
  emigrationCorridors,
  nriEngagement,
  nriVoterImpact,
  pilgrimageCircuits,
  hinduPilgrimageSites,
  islamicSufiSites,
  cattleMandiSchedule,
  agriculturalMandiHubs,
  mandiCampaignNote,
  majorFairs,
  campaignCalendar,
  criticalWindows: criticalCampaignWindows,
  strategicInsight,
  dataGaps: mobilityDataGaps,
  sources: [
    "Times of India, 'Punjab faces unrest as hostility towards migrant workers threatens agri-industry,' Sept 2025",
    "The Revealer, 'The Sikh State Built on Migration Abroad Now Wrestles with Migration Within,' May 2025",
    "Dharmik Vibes Blog, 'Exploring the Religious and Cultural Heritage of Punjab,' Feb 2025",
    "Wikipedia, 'Chhapar Mela' (accessed May 2026)",
    "ResearchGate, 'A Study on Overseas Migration from Rural Punjab,' 2024",
    "Punjab Mandi Board (emandikaran-pb.in) — market directory",
    "MEA India, Population of Overseas Indians (2024 data)",
    "Pre-trained knowledge: pilgrimage routes, mandi schedules, festival calendars",
  ],
};
