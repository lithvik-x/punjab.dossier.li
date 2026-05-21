// AC003-Pathankot Data File
// Derived from: AC003-Pathankot.md and AC003-Pathankot-deep.md
// Research Date: 20 May 2026 | Status: PARTIAL (verification needed)

import type {
  AC003PathankotDossier,
  AC003Metadata,
  ConstituencyBaseline,
  DemographicDeepDive,
  ElectoralHistory,
  PublicSentiment,
  GovernanceGap,
  LocalIssues,
  InfluencersPowerStructure,
  SWOTAnalysis,
  StrategicBlueprint,
  CasteComposition,
  CongressStrategy,
  DataQualityFlag,
} from "./ac003-pathankot-types";

// ==========================================
// METADATA
// ==========================================

const metadata: AC003Metadata = {
  acNumber: 3,
  name: "Pathankot",
  district: "Pathankot",
  region: "Majha",
  type: "General",
  date: "20 May 2026",
  researchSource: "Web-verified via minimax-web-search",
};

// ==========================================
// CONSTITUENCY BASELINE
// ==========================================

const baseline: ConstituencyBaseline = {
  administrativeGeographic: {
    acNumber: 3,
    parliamentarySegment: "Gurdaspur Lok Sabha constituency",
    district: "Pathankot",
    type: "GEN",
    city: "Pathankot - gateway to Himalayas, strategic location",
    area: "Urban center with surrounding rural areas",
    terrain: "Foothills, near tri-junction of Punjab-Himachal-Jammu",
  },
  historicalContext: {
    formation: "Part of Pathankot district (created 2011)",
    historicalSignificance: "Ancient strategic point, Mughal era connections",
    modernEra: "Growing urban center, defense services presence",
    importance: "Major railway junction, road connectivity to Kashmir",
  },
  economicIdentity: {
    primaryActivities: ["Trade", "Defense", "Tourism", "Transport", "Small industry"],
    employment: ["Government jobs", "Tourism industry", "Railway", "Business"],
    keySectors: ["Hotel", "Tourism", "Transport", "Defense establishments"],
  },
  socioCulturalIdentity: {
    language: "Punjabi (Majha dialect), Hindi also spoken",
    religiousComposition: {
      hindu: 60,
      sikh: 35,
      others: 5,
    },
    casteComposition: "General category dominant [NEEDS VERIFICATION]",
    cultural: "Mix of Punjabi and Himachali culture due to location",
  },
  administrativeSetup: {
    municipalCorporation: "Pathankot MC",
    health: "District Hospital, medical college [NEEDS VERIFICATION]",
    education: "Universities, colleges [NEEDS VERIFICATION]",
    banking: "Good coverage - urban center",
  },
};

// ==========================================
// DEMOGRAPHIC DEEP-DIVE
// ==========================================

const demographic: DemographicDeepDive = {
  censusData: {
    cityPopulation2011: 160000,
    metroArea2026Estimate: 238000,
    sexRatio: "[NEEDS VERIFICATION]",
    literacy: "~88-90% (higher than state average)",
    migration: "In-migration from Himachal, J&K, Nepal",
  },
  electoralRollAnalytics: {
    totalElectors: 170000,
    voterTurnout2022: 74.4,
    genderGap: "[NEEDS VERIFICATION]",
  },
  schemePenetration: {
    pds: "Full coverage in urban, good in rural",
    mgnrega: "Less relevant in urban - more relevant in surrounding rural",
    ayushmanBharat: "Good coverage",
  },
};

// ==========================================
// ELECTORAL HISTORY
// ==========================================

const electoral: ElectoralHistory = {
  pastThreeElections: [
    {
      year: 2022,
      winner: "Ashwani Kumar Sharma",
      party: "BJP",
      votePercent: 38.01,
      margin: "7,759 votes",
      votes: 43132,
    },
    {
      year: 2017,
      winner: "Amit Singh (INC) [NEEDS VERIFICATION]",
      party: "",
      votePercent: 0,
      margin: "",
    },
    {
      year: 2012,
      winner: "[NEEDS VERIFICATION]",
      party: "",
      votePercent: 0,
      margin: "",
    },
  ],
  fullResults2022: {
    winner: "Ashwani Kumar Sharma (BJP)",
    votes: 43132,
    percent: 38.01,
    turnout: 74.4,
    swingFrom2017: "[NEEDS VERIFICATION]",
  },
  voterBehaviour: {
    turnout: "74.4% (slightly below state average)",
    urbanVoter: "More informed, media-savvy",
    swingPattern: "BJP strength in urban, Congress historically strong in rural",
  },
};

// ==========================================
// PUBLIC SENTIMENT
// ==========================================

const publicSentiment: PublicSentiment = {
  currentMood: {
    mla: "Ashwani Kumar Sharma",
    party: "BJP",
    expectations: ["Urban development", "Tourism boost", "Infrastructure"],
  },
  keyIssues: [
    {
      issue: "Tourism Infrastructure",
      description: "Gateway to Himalayas - can be developed more",
      segment: "Youth, business community",
    },
    {
      issue: "Urban Services",
      description: "Power cuts, water supply, garbage management",
      segment: "All urban residents",
    },
    {
      issue: "Drug Menace",
      description: "Even urban areas affected",
      segment: "Parents, youth",
    },
    {
      issue: "Unemployment",
      description: "Youth seeking jobs",
      segment: "Youth",
    },
    {
      issue: "Border Security",
      description: "Proximity to sensitive areas",
      segment: "Military families, general",
    },
  ],
};

// ==========================================
// GOVERNANCE GAP
// ==========================================

const governanceGap: GovernanceGap = {
  serviceDelivery: {
    health: "District hospital functional [NEEDS VERIFICATION]",
    education: "Good school network [NEEDS VERIFICATION]",
    municipal: "Pathankot MC responsibilities",
  },
  urbanIssues: {
    powerCuts: "Especially in summer [SOURCE: Tribune India, April 2026]",
    waterSupply: "[NEEDS VERIFICATION]",
    solidWaste: "[NEEDS VERIFICATION]",
  },
};

// ==========================================
// LOCAL ISSUES
// ==========================================

const localIssues: LocalIssues = {
  issueVoterMapping: [
    { issue: "Tourism/jobs", segment: "Youth, business community", category: "Tourism" },
    { issue: "Urban services", segment: "All urban residents", category: "Urban Services" },
    { issue: "Drug prevention", segment: "Parents, youth", category: "Drug Prevention" },
    { issue: "Defense security", segment: "Military families, general", category: "Defense Security" },
  ],
};

// ==========================================
// INFLUENCERS & POWER STRUCTURE
// ==========================================

const influencers: InfluencersPowerStructure = {
  nonPolitical: {
    businessLeaders: "Chamber of commerce",
    tourismIndustry: "Hotel owners, travel agents",
    defense: "Retired defense personnel community",
  },
  political: {
    currentMLA: "Ashwani Kumar Sharma (BJP)",
    historical: "[NEEDS VERIFICATION - past MLAs]",
  },
};

// ==========================================
// SWOT ANALYSIS
// ==========================================

const swot: SWOTAnalysis = {
  strengths: {
    strengths: [
      "Urban constituency with educated voters",
      "BJP winning 2022 - party organization active",
      "Strategic location - tourism potential",
    ],
  },
  weaknesses: {
    weaknesses: [
      "Mix of urban-rural interests difficult to balance",
      "Power infrastructure inadequate",
    ],
  },
  opportunities: {
    opportunities: [
      "Tourism boost from Kartarpur corridor spillover",
      "Defense establishment spending",
      "Industrial development",
    ],
  },
  threats: {
    threats: [
      "AAP government at state level (different party)",
      "Migration of youth",
    ],
  },
};

// ==========================================
// STRATEGIC BLUEPRINT
// ==========================================

const strategicBlueprint: StrategicBlueprint = {
  topNarratives: [
    {
      title: "Development of Gateway",
      description: "Position Pathankot as tourism hub",
    },
    {
      title: "Urban Modernisation",
      description: "Smart city aspirations",
    },
    {
      title: "Jobs for Youth",
      description: "Skill development",
    },
  ],
  prioritySegments: [
    { segment: "Youth (18-35)", focus: "employment" },
    { segment: "Business community", focus: "ease of doing business" },
    { segment: "Defense families", focus: "welfare" },
  ],
};

// ==========================================
// CASTE COMPOSITION (from deep file)
// ==========================================

const casteComposition: CasteComposition = {
  jatSikh: 22,
  sc: 29,
  obc: 15,
  upperCaste: 20,
  minority: 5,
  other: 9,
};

// ==========================================
// CONGRESS STRATEGY (from deep file)
// ==========================================

const congressStrategy: CongressStrategy = {
  strategicPosition: {
    currentHolder: "BJP",
    situation:
      "BJP holds this urban seat. Congress needs to make inroads by highlighting urban governance failures and AAP's performance.",
    urbanVoteSplit: "The urban Hindu vote is split between BJP and AAP.",
  },
  recommendedCandidateProfile: {
    profile: "Urban professional, business community connect",
    casteConsideration: "Khatri, Arora, or Brahmin background works well",
    keyQualities: ["Development-focused", "city constituency experience"],
  },
  attackLines: [
    {
      line: "Urban Neglect",
      description: "Pathankot city infrastructure deteriorating",
    },
    {
      line: "Tourism Potential",
      description: "Untapped tourism sector despite potential",
    },
    {
      line: "Youth Exodus",
      description: "No new industries, educated youth leaving",
    },
    {
      line: "Border Issues",
      description: "Security concerns not addressed",
    },
  ],
};

// ==========================================
// DATA QUALITY FLAGS
// ==========================================

const dataQualityFlags: DataQualityFlag[] = [
  { field: "casteComposition", status: "NEEDS_VERIFICATION" },
  { field: "sexRatio", status: "NEEDS_VERIFICATION" },
  { field: "totalElectors", status: "NEEDS_VERIFICATION" },
  { field: "genderGap", status: "NEEDS_VERIFICATION" },
  { field: "2017ElectionResult", status: "NEEDS_VERIFICATION" },
  { field: "2012ElectionResult", status: "NOT_FOUND" },
  { field: "swingFrom2017", status: "NEEDS_VERIFICATION" },
  { field: "historicalMLAs", status: "NEEDS_VERIFICATION" },
  { field: "medicalCollege", status: "NEEDS_VERIFICATION" },
  { field: "universitiesColleges", status: "NEEDS_VERIFICATION" },
  { field: "waterSupply", status: "NEEDS_VERIFICATION" },
  { field: "solidWaste", status: "NEEDS_VERIFICATION" },
  { field: "healthDistrictHospital", status: "NEEDS_VERIFICATION" },
  { field: "educationSchoolNetwork", status: "NEEDS_VERIFICATION" },
  { field: "2022VoteShareDeep", status: "PARTIAL", source: "~45% (estimated)" },
];

// ==========================================
// SOURCES
// ==========================================

const sources: string[] = [
  "theballotforce.com",
  "IndiaVotes",
  "Wikipedia",
  "Tribune reports",
  "Oneindia",
  "ECI data",
  "ADR PDF analysis",
];

// ==========================================
// COMPLETE DOSSIER
// ==========================================

export const ac003PathankotDossier: AC003PathankotDossier = {
  metadata,
  baseline,
  demographic,
  electoral,
  publicSentiment,
  governanceGap,
  localIssues,
  influencers,
  swot,
  strategicBlueprint,
  casteComposition,
  congressStrategy,
  dataQualityFlags,
  sources,
};

// Named exports for convenience
export const AC003_PATHANKOT = ac003PathankotDossier;
export default ac003PathankotDossier;
