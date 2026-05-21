// AC074-Dharamkot Data File
// Derived from: AC074-Dharamkot.md and AC074-Dharamkot-deep.md
// Research Date: 20 May 2026 | Status: PARTIALLY VERIFIED

import type {
  AC074DharamkotDossier,
  AC074Metadata,
  ConstituencyBaseline,
  HistoricalContext,
  EconomicIdentity,
  DemographicDeepDive,
  ElectoralHistory,
  CasteCompositionData,
  LocalIssues,
  PublicSentiment,
  GovernanceGap,
  InfluencersPowerStructure,
  SWOTAnalysis,
  StrategicBlueprint,
  CongressStrategy,
  DeepResearchData,
  DataQualityFlag,
} from "./ac074-dharamkot-types";

// ==========================================
// METADATA
// ==========================================

const metadata: AC074Metadata = {
  acNumber: 74,
  name: "Dharamkot",
  district: "Moga",
  region: "Malwa",
  type: "General",
  date: "20 May 2026",
  researchSource: "Web search, Wikipedia, IndiaVotes, Deccan Herald, Chanakyya",
  researchDossierId: "AC074-Dharamkot",
  topic: "Dharamkot Assembly Constituency (AC074), Punjab",
  tier: 2,
  dataCurrency: "As of May 2026 | Election Data: 2022",
  sourcesConsulted: [
    "Web search",
    "Wikipedia",
    "IndiaVotes",
    "Deccan Herald",
    "Chanakyya",
  ],
  verificationStatus: "PARTIALLY VERIFIED - Details need verification",
};

// ==========================================
// CONSTITUENCY BASELINE
// ==========================================

const baseline: ConstituencyBaseline = {
  identity: {
    acNumber: 74,
    name: "Dharamkot",
    district: "Moga",
    region: "Malwa",
    category: "General",
    parliamentaryConstituency: "Faridkot (Lok Sabha)",
    tehsil: "Dharamkot",
  },
  overview:
    "Dharamkot (AC 74) is a general category assembly constituency in Moga district, Malwa region. Part of Faridkot (SC) Lok Sabha constituency. Rural agricultural constituency.",
  geographicBoundaries: {
    location: "Located in northern Moga district",
    border: "Border with Faridkot district",
    keyTowns: "Dharamkot (religious significance), villages",
  },
  urbanRuralComposition: {
    classification: "Semi-Rural: Mix of town and agricultural villages",
    religiousSignificance: "Town associated with Guru Nanak's teacher",
    economy: "Agriculture, small businesses, religious tourism",
  },
};

// ==========================================
// HISTORICAL CONTEXT
// ==========================================

const historicalContext: HistoricalContext = {
  formation: "Part of Moga district",
  historicalSignificance:
    "Historically significant town with religious importance (named after Guru Nanak's teacher)",
  religiousImportance:
    "Town has religious significance in Sikh history - named after Guru Nanak's teacher",
  modernEra:
    "Rural agricultural constituency, AAP breakthrough in rural Moga in 2022",
  historicalPattern: {
    traditionalPowers: "Congress/SAD competitive historically",
    breakthrough: "AAP breakthrough in rural Moga",
    contestPattern: "Multi-cornered contests typical",
  },
};

// ==========================================
// ECONOMIC IDENTITY
// ==========================================

const economicIdentity: EconomicIdentity = {
  primarySector: "Agriculture - Primary sector, farm distress",
  secondarySectors: [
    "Small businesses",
    "Agricultural labor",
    "Religious tourism",
  ],
  employmentBase: "Farming, agricultural labor, small businesses",
  keyCharacteristics: [
    "Rural agricultural economy",
    "Farm distress widespread",
    "Limited industrial jobs",
  ],
};

// ==========================================
// DEMOGRAPHIC DEEP-DIVE
// ==========================================

const demographic: DemographicDeepDive = {
  mogaDistrictDemographics: {
    totalPopulation: 995746,
    scPopulation: 363417,
    scPercentage: 36.5,
    sexRatio: 893,
  },
  casteComposition: {
    jatSikh: "Majority in rural areas",
    sc: "~36-37% (high)",
    obc: "~20-25%",
    upperCaste: "~25%",
    other: "Minorities and others",
  },
  keyCommunities: {
    jatSikh: "Dominant agrarian community",
    mazhabiRamdassia: "SC villages",
    obcGroups: "Agricultural labor, small businesses",
  },
  religiousComposition: {
    predominant: "Predominantly Sikh",
    significance: "Town has religious significance in Sikh history",
  },
  censusData: {
    dharamkotTown: "[NEEDS VERIFICATION]",
    constituency: "[NEEDS VERIFICATION]",
  },
};

// ==========================================
// ELECTORAL HISTORY
// ==========================================

const electoral: ElectoralHistory = {
  election2022: {
    winner: "Devinderjeet Singh Laddi Dhose (AAP) [NEEDS VERIFICATION - Not found in search results]",
    party: "Aam Aadmi Party (AAP)",
    totalElectors: 182293,
    margin: "Won against Congress",
    runnerUp: "[NEEDS VERIFICATION]",
    totalCandidates: 10,
    acType: "GEN",
    turnout: "[NEEDS VERIFICATION]",
    stateAverage: 62.8,
  },
  historicalPattern:
    "Congress/SAD competitive historically. AAP breakthrough in rural Moga. Multi-cornered contests typical.",
  pastThreeElections: [
    {
      year: 2022,
      winner: "[NEEDS VERIFICATION]",
      party: "AAP",
      margin: "[NEEDS VERIFICATION]",
      notes: "AAP wave in Malwa",
    },
    {
      year: 2017,
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      margin: "[NEEDS VERIFICATION]",
      notes: "[NEEDS VERIFICATION]",
    },
    {
      year: 2012,
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      margin: "[NEEDS VERIFICATION]",
      notes: "[NEEDS VERIFICATION]",
    },
  ],
};

// ==========================================
// CASTE COMPOSITION DATA
// ==========================================

const casteComposition: CasteCompositionData = {
  jatSikh: 35,
  sc: 36,
  obc: 22,
  upperCaste: 25,
  other: 7,
};

// ==========================================
// LOCAL ISSUES
// ==========================================

const localIssues: LocalIssues = {
  primaryIssues: [
    {
      issue: "Agriculture",
      description: "Primary sector, farm distress",
      priority: 1,
    },
    {
      issue: "Drug Menace",
      description: "Rural youth addiction crisis",
      priority: 2,
    },
    {
      issue: "Irrigation",
      description: "Canal and groundwater",
      priority: 3,
    },
    {
      issue: "Environment",
      description: "Stubble burning - environmental/health issue",
      priority: 4,
    },
    {
      issue: "Infrastructure",
      description: "Rural infrastructure: roads, electricity",
      priority: 5,
    },
    {
      issue: "Education",
      description: "Schools access",
      priority: 6,
    },
    {
      issue: "Healthcare",
      description: "Rural health facilities",
      priority: 7,
    },
  ],
  secondaryIssues: [
    "Healthcare facilities",
    "Education access",
    "Religious tourism development",
    "Unemployment: Limited industrial jobs",
  ],
};

// ==========================================
// PUBLIC SENTIMENT
// ==========================================

const publicSentiment: PublicSentiment = {
  currentMood: {
    dominantConcerns: [
      "Drug Menace: Rural youth addiction",
      "Agricultural Distress: MSP, stubble, groundwater",
      "Unemployment: Limited industrial jobs",
      "Infrastructure: Rural roads, electricity",
    ],
    publicExpectations: [
      "Farm crisis solutions",
      "Drug prevention measures",
      "Rural development",
      "Employment opportunities",
    ],
  },
  keyIssues: localIssues.primaryIssues,
};

// ==========================================
// GOVERNANCE GAP
// ==========================================

const governanceGap: GovernanceGap = {
  serviceDelivery: {
    health: "Rural health facilities need improvement",
    education: "Schools access in rural areas",
  },
  infrastructure: {
    roads: "Rural roads need development",
    electricity: "Electricity supply in rural areas",
  },
  schemes: {
    pds: "Full coverage in rural areas",
    mgnrega: "Relevant for rural employment",
    ayushmanBharat: "Coverage in rural areas",
  },
};

// ==========================================
// INFLUENCERS & POWER STRUCTURE
// ==========================================

const influencers: InfluencersPowerStructure = {
  political: {
    currentMLA: "[NEEDS VERIFICATION - AAP candidate won 2022]",
    currentParty: "Aam Aadmi Party (AAP)",
    historicalLeaders: "Congress had presence historically [NEEDS VERIFICATION]",
  },
  community: {
    farmerLeaders: "Jat Sikh dominant agrarian community leaders",
    religiousLeaders: "Religious significance due to Guru Nanak's teacher connection",
    socialActivists: "Drug prevention/rehabilitation activists",
  },
};

// ==========================================
// SWOT ANALYSIS
// ==========================================

const swot: SWOTAnalysis = {
  strengths: {
    strengths: [
      "Rural Malwa constituency with significant voter base",
      "Agrarian voters - traditional Congress support base",
      "High SC population (36-37%) - potential vote bank",
      "Farm distress is real issue that AAP hasn't solved",
      "Drug crisis affecting families - major concern",
    ],
  },
  weaknesses: {
    weaknesses: [
      "AAP's rural welfare narrative strong",
      "Booth-level rural organization gaps",
      "Farm distress not adequately addressed by Congress historically",
    ],
  },
  opportunities: {
    opportunities: [
      "Real rural grievances未被满足",
      "AAP government failures at state level",
      "Farm sector promises broken by AAP",
      "Issue-based campaign potential",
      "Drug crisis - families seeking solutions",
    ],
  },
  threats: {
    threats: [
      "AAP's continued welfare focus",
      "Rural voter dependency on schemes",
      "Multi-cornered contests splitting votes",
    ],
  },
};

// ==========================================
// STRATEGIC BLUEPRINT
// ==========================================

const strategicBlueprint: StrategicBlueprint = {
  topNarratives: [
    {
      title: "Farm Crisis Reality",
      description: "MSP, procurement failures - AAP's broken promises to farmers",
    },
    {
      title: "Drug Menace Destruction",
      description: "Rural youth addiction - AAP failed to prevent",
    },
    {
      title: "Rural Development Neglect",
      description: "Infrastructure issues - roads, electricity neglected",
    },
  ],
  prioritySegments: [
    {
      segment: "Farmers (Jat Sikh community)",
      focus: " MSP, procurement, irrigation",
    },
    {
      segment: "Rural Youth",
      focus: "Drug prevention, employment",
    },
    {
      segment: "SC Communities (Mazhabi/Ramdassia)",
      focus: "Welfare schemes, development",
    },
    {
      segment: "OBC Groups",
      focus: "Agricultural labor concerns",
    },
  ],
};

// ==========================================
// CONGRESS STRATEGY
// ==========================================

const congressStrategy: CongressStrategy = {
  strategicPosition: {
    currentStatus: "Lost to AAP in 2022",
    challenge: "Rural Moga reconstruction",
    historicalBase: "Congress had presence historically",
  },
  challenges: {
    AAPNarrative: "AAP's rural welfare narrative",
    drugCrisis: "Drug crisis affecting families",
    farmDistress: "Farm distress not addressed",
    boothOrganization: "Booth-level rural organization",
  },
  opportunities: {
    ruralGrievances: "Real rural grievances未被满足",
    governmentFailures: "AAP government failures at state level",
    brokenPromises: "Farm sector promises broken",
    issueBasedCampaign: "Potential for issue-based campaign",
  },
  recommendedCandidateProfile: {
    caste: "Jat Sikh preferred",
    background: ["Farmer leader", "Rural representative"],
    profile: ["Connected", "Accessible", "Honest"],
    priority: "Village-level organization",
  },
  selectionCriteria: {
    villageConnect: "Village-to-village connect essential",
    farmerCredentials: "Farmer leader credentials preferred",
    drugPreventionConnect: "Drug prevention/rehabilitation connect",
    cleanImage: "Clean image mandatory",
  },
  attackLines: [
    {
      line: "Farm Crisis",
      description: "MSP, procurement failures - AAP's broken promises",
    },
    {
      line: "Drug Menace",
      description: "Youth destruction - AAP failed to prevent",
    },
    {
      line: "Stubble Burning",
      description: "No solution despite ban",
    },
    {
      line: "Rural Neglect",
      description: "Infrastructure issues not addressed",
    },
    {
      line: "Broken Promises",
      description: "Development claims false",
    },
  ],
  congressNarrative: {
    farmersPromise: "Dharamkot's farmers: AAP's promises vs reality",
    youthDrugs: "Rural youth and drugs: AAP failed to prevent",
    voteMessage: "Vote for farmers, not for Delhi's agents",
  },
};

// ==========================================
// DEEP RESEARCH DATA
// ==========================================

const deepResearch: DeepResearchData = {
  intelligenceGaps: {
    missingData: [
      { item: "Winner name and vote share", status: "NEEDS VERIFICATION" },
      { item: "All candidates and votes", status: "NEEDS VERIFICATION" },
      { item: "Historical results", status: "NEEDS VERIFICATION" },
      { item: "Caste demographics exact figures", status: "NEEDS VERIFICATION" },
      { item: "Local influential families", status: "NEEDS VERIFICATION" },
      { item: "Dharamkot Town population", status: "NEEDS VERIFICATION" },
      { item: "Constituency population", status: "NEEDS VERIFICATION" },
      { item: "Voter turnout 2022", status: "NEEDS VERIFICATION" },
      { item: "2017 and 2012 election results", status: "NEEDS VERIFICATION" },
    ],
    recommendations: [
      "Candidate: Strong local with religious/rural connect",
      "Focus: Farmers' issues, drug crisis",
      "Message: Development vs AAP's broken promises",
    ],
  },
  recommendations: [
    "Congress should focus on real rural grievances",
    "Highlight AAP's broken promises on farm sector",
    "Drug crisis is a major vote influencer - address family impact",
    "Village-level booth organization crucial",
    "Candidate with Jat Sikh background and farmer connect preferred",
  ],
};

// ==========================================
// DATA QUALITY FLAGS
// ==========================================

const dataQualityFlags: DataQualityFlag[] = [
  { field: "winnerName2022", status: "NEEDS_VERIFICATION", notes: "Not found in search results" },
  { field: "voteShare2022", status: "NEEDS_VERIFICATION" },
  { field: "runnerUp2022", status: "NEEDS_VERIFICATION" },
  { field: "voterTurnout2022", status: "NEEDS_VERIFICATION" },
  { field: "election2017", status: "NEEDS_VERIFICATION" },
  { field: "election2012", status: "NEEDS_VERIFICATION" },
  { field: "dharamkotTownPopulation", status: "NEEDS_VERIFICATION" },
  { field: "constituencyPopulation", status: "NEEDS_VERIFICATION" },
  { field: "localInfluentialFamilies", status: "NEEDS_VERIFICATION" },
  { field: "casteDemographicsExact", status: "NEEDS_VERIFICATION" },
  { field: "casteCompositionPercentages", status: "PARTIAL", source: "Moga district averages used" },
  { field: "historicalMLAs", status: "NEEDS_VERIFICATION" },
  { field: "religiousComposition", status: "VERIFIED", notes: "Predominantly Sikh confirmed" },
  { field: "scPopulationMoga", status: "VERIFIED", source: "Census 2011" },
  { field: "totalElectors2022", status: "VERIFIED", source: "AC074-Dharamkot.md" },
];

// ==========================================
// SOURCES
// ==========================================

const sources: string[] = [
  "Web search",
  "Wikipedia",
  "IndiaVotes",
  "Deccan Herald",
  "Chanakyya",
  "ECI data",
  "ADR PDF analysis",
  "Tribune reports",
];

// ==========================================
// DISTRICT CONTEXT
// ==========================================

const districtContext = {
  scPopulation: 363417,
  scPercentage: "36-37%",
  description: "Rural dominant district",
  economy: "Agriculture-based economy",
  challenges: ["High drug addiction rates", "Farm distress widespread"],
};

// ==========================================
// NOTES
// ==========================================

const notes = [
  "Rural Malwa constituency",
  "Farm and drug issues dominant",
  "Booth-level organizing crucial",
  "Congress must address rural distress",
  "Moga at a glance: SC Population 363,417 (36-37%)",
  "High drug addiction rates in district",
  "Farm distress widespread",
];

// ==========================================
// COMPLETE DOSSIER
// ==========================================

export const ac074DharamkotDossier: AC074DharamkotDossier = {
  metadata,
  baseline,
  historicalContext,
  economicIdentity,
  demographic,
  electoral,
  casteComposition,
  localIssues,
  publicSentiment,
  governanceGap,
  influencers,
  swot,
  strategicBlueprint,
  congressStrategy,
  deepResearch,
  dataQualityFlags,
  sources,
};

// Named exports for convenience
export const AC074_DHARAMKOT = ac074DharamkotDossier;
export const districtContextData = districtContext;
export const constituencyNotes = notes;
export default ac074DharamkotDossier;
