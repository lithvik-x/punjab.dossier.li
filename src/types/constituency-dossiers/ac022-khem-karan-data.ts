/**
 * AC022 - Khem Karan Assembly Constituency
 * Data File
 *
 * Generated from:
 * - AC022-Khem-Karan.md (basic dossier)
 * - AC022-KhemKaran-deep.md (deep research dossier)
 *
 * Document IDs: AC022-Khem-Karan / AC022-KhemKaran-deep
 * Last Updated: 20 May 2026
 * Data Currency: As of 20 May 2026
 * Verification Status: PARTIALLY VERIFIED - Data predating 2024 marked as such
 */

import type {
  AC022KhemKaranDossier,
  DocumentMetadata,
  ConstituencyIdentity,
  GeographicContext,
  ReligiousComposition,
  CasteComposition,
  CasteCompositionDetailed,
  KeyDemographics,
  ElectionResults,
  VoterTurnout,
  PublicSentiment,
  GovernanceGap,
  LocalIssues,
  InfluencersAndPowerStructure,
  MediaLandscape,
  PhysicalMapping,
  SWOTAnalysis,
  StrategicBlueprint,
  CourseChangingFactors,
  DataGapsAndRecommendations,
  CongressStrategicPosition,
  AttackLines,
} from "./ac022-khem-karan-types";

// ============================================================
// METADATA
// ============================================================

const basicDossierMetadata: DocumentMetadata = {
  dossierId: "AC022-Khem-Karan",
  topic: "Khem Karan Assembly Constituency",
  date: "2026-05-20",
  dataCurrency: "As of 2024 election data",
  sources: "Wikipedia, Oneindia, IndiaVotes, ECI data",
  verificationStatus: "Verified",
  preparedFor: "Punjab Congress Election Intelligence",
  classification: "Internal Research Document",
};

const deepDossierMetadata: DocumentMetadata = {
  dossierId: "AC022-KhemKaran-deep",
  topic: "KhemKaran Assembly Constituency Deep Research",
  date: "20 May 2026",
  dataCurrency: "As of 20 May 2026",
  sources: "Web search, Election Commission data, Census 2011",
  verificationStatus: "PARTIALLY VERIFIED - Data predating 2024 marked as such",
  preparedFor: "Punjab Congress 2027 Election Intelligence",
  classification: "Internal Research Document",
};

// ============================================================
// SECTION 1: IDENTITY & GEOGRAPHIC CONTEXT
// ============================================================

const identity: ConstituencyIdentity = {
  acNumber: 22,
  officialName: "Khem Karan",
  district: "Tarn Taran",
  region: "Majha",
  category: "General",
  lokSabha: "Khadoor Sahib",
  tehsil: "Patti",
  borderStatus: "Border",
  reservation: "None (General)",
  totalElectors2022: 218055,
};

const geographicContext: GeographicContext = {
  description:
    "Khem Karan is located in the Patti tehsil of Tarn Taran district in the Majha region. The town is situated near the India-Pakistan border and has historical significance from the India-Pakistan partition. The area is characterized by intensive agriculture.",
  borderProximity: true,
  historicalSignificance: "Partition-affected area",
  agriculturalProfile: ["Wheat", "Paddy", "Cotton (historically)"],
  vulnerabilityPoints: [
    "Border smuggling routes",
    "Agricultural distress areas",
    "Unemployment hotspots",
  ],
};

// ============================================================
// SECTION 2: DEMOGRAPHIC DATA
// ============================================================

const religiousComposition: ReligiousComposition = {
  sikh: 89.1,
  hindu: 9.8,
  christian: 1.1,
};

const casteComposition: CasteComposition = {
  jatSikh: "~35-40%",
  scheduledCaste: "~25-30%",
  obc: "~15-18%",
  hindu: "~15-18%",
  muslim: "~1-2%",
  scUrbanKhemKaran: 38.09,
  scCommunities: "Ramdasia/Ravidassia",
  obcCommunities: "Tarkhan, Jheer (Kashyap Rajput) communities",
};

const casteCompositionDetailed: CasteCompositionDetailed = {
  scheduledCasteUrban: 38.09,
  jatSikhMajority: "Majority rural community",
  ramdasiaRavidassiaPresence: "Significant SC presence",
  obcCommunities: "Tarkhan, Jheer (Kashyap Rajput) communities",
};

const keyDemographics: KeyDemographics = {
  urbanPopulation: 11700,
  ruralDescription: "Agricultural villages in surrounding area",
  borderVillages: "Higher security sensitivity",
};

// ============================================================
// SECTION 3: ELECTORAL HISTORY
// ============================================================

const electionResults: ElectionResults = {
  year2022: {
    winner: "Sarwan Singh Dhun",
    party: "Aam Aadmi Party",
    voteShare: "~42%",
    margin: "11,882 votes",
    marginValue: 11882,
    runnerUpParty: "Not specified in basic dossier",
  },
  year2017: {
    winner: "Sukhpal Singh Bhullar",
    party: "Indian National Congress",
    margin: "Not specified",
    runnerUp: "Not specified",
  },
  year2012: {
    winner: "Virsa Singh Valtoha",
    party: "Shiromani Akali Dal",
  },
};

const voterTurnout: VoterTurnout = {
  year2022: "~68-70% (estimated)",
  year2017: "~74-76% (state average)",
};

// ============================================================
// SECTION 4: PUBLIC SENTIMENT
// ============================================================

const publicSentiment: PublicSentiment = {
  currentMood: "Pragmatic",
  keyDrivers: {
    borderSecurity: "Proximity to Pakistan creates safety concerns",
    agriculturalDistress: "MSP, input costs, groundwater",
    drugMenace: "Reported in border areas",
    connectivity: "Road infrastructure to Patti, Tarn Taran",
    youthEmployment: "Limited industrial activity",
  },
  grievances: {
    employmentOpportunities: "Lack of employment opportunities",
    agriculturalInputCosts: "Agricultural input cost rise",
    borderAreaDevelopment: "Border area development neglect",
    healthcareFacilities: "Healthcare facilities in town",
  },
};

// ============================================================
// SECTION 5: GOVERNANCE GAP
// ============================================================

const governanceGap: GovernanceGap = {
  currentRepresentative: "Sarwan Singh Dhun",
  currentParty: "AAP",
  electedYear: 2022,
  district: "Tarn Taran",
  state: "AAP government",
  activeSchemes: [
    "Mera Ghar, Mera Maan housing",
    "Ashirwad Scheme",
    "Aam Aadmi Clinics",
    "Free electricity (statewide)",
  ],
  developmentGaps: [
    "No degree college in town",
    "Hospital facility insufficient",
    "Mandi/procurement infrastructure",
    "Rural road connectivity",
  ],
};

// ============================================================
// SECTION 6: LOCAL ISSUES
// ============================================================

const localIssues: LocalIssues = {
  topIssues: [
    {
      rank: 1,
      title: "Drug trafficking",
      description: "Border area vulnerability",
      verificationStatus: "Verified",
    },
    {
      rank: 2,
      title: "Stubble burning",
      description: "Environmental crisis",
      verificationStatus: "Verified",
    },
    {
      rank: 3,
      title: "Groundwater depletion",
      description: "Agricultural sustainability",
      verificationStatus: "Verified",
    },
    {
      rank: 4,
      title: "Unemployment",
      description: "Youth migration",
      verificationStatus: "Verified",
    },
    {
      rank: 5,
      title: "Irrigation",
      description: "Canal water availability",
      verificationStatus: "Verified",
    },
    {
      rank: 6,
      title: "Agricultural Crisis",
      description: "Input costs, MSP realization",
      verificationStatus: "Verified",
    },
    {
      rank: 7,
      title: "Border Security",
      description: "Vigilance, smuggling concerns",
      verificationStatus: "Verified",
    },
    {
      rank: 8,
      title: "Youth Unemployment",
      description: "Limited jobs, migration",
      verificationStatus: "Verified",
    },
    {
      rank: 9,
      title: "Healthcare",
      description: "CHC upgraded needs",
      verificationStatus: "Verified",
    },
    {
      rank: 10,
      title: "Drug Addiction",
      description: "Rural youth affected",
      verificationStatus: "Needs Verification",
    },
  ],
  areaSpecificConcerns: [
    {
      area: "Khem Karan town",
      concerns: ["Urban issues", "Healthcare facilities", "Educational institutions"],
    },
    {
      area: "Border villages",
      concerns: ["Development neglect", "Security concerns", "Connectivity"],
    },
    {
      area: "Agricultural areas",
      concerns: ["Canal irrigation water availability", "MSP realization", "Input costs"],
    },
  ],
};

// ============================================================
// SECTION 7: INFLUENCERS & POWER STRUCTURE
// ============================================================

const influencersAndPowerStructure: InfluencersAndPowerStructure = {
  politicalActors: [
    {
      name: "Sarwan Singh Dhun",
      party: "AAP",
      role: "MLA (current representative)",
      status: "Current",
    },
    {
      name: "Sukhpal Singh Bhullar",
      party: "Indian National Congress",
      role: "Former MLA (2017)",
      status: "Former",
    },
    {
      name: "Virsa Singh Valtoha",
      party: "Shiromani Akali Dal",
      role: "Former MLA (2012)",
      status: "Former",
    },
    {
      name: "Local SAD Leaders",
      party: "Shiromani Akali Dal",
      role: "Local leaders",
      status: "Needs Verification",
    },
    {
      name: "Congress Leaders",
      party: "Indian National Congress",
      role: "Local leaders",
      status: "Needs Verification",
    },
    {
      name: "Border SDF",
      party: "Unknown",
      role: "Border area representatives",
      status: "Needs Verification",
    },
  ],
  communityInfluencers: [
    {
      group: "Jat Sikh Sarpanches",
      influenceType: "Rural vote influence",
      description: "Village-level leaders with significant influence in rural areas",
    },
    {
      group: "Religious Leaders",
      influenceType: "Community guidance",
      description: "Gurudwara priests with spiritual authority",
    },
    {
      group: "Ex-Servicemen",
      influenceType: "Veterans community",
      description: "Military veterans with organized community network",
    },
    {
      group: "NRI Families",
      influenceType: "Remittance-dependent households",
      description: "Diaspora-linked families with economic influence",
    },
  ],
  powerStructureNotes:
    "AAP holds current power. Local factions within parties. Caste-based voting patterns observed.",
};

// ============================================================
// SECTION 8: MEDIA LANDSCAPE
// ============================================================

const mediaLandscape: MediaLandscape = {
  localMedia: "Punjabi vernacular press dominant",
  socialMedia: "WhatsApp for political messaging, Mobile penetration high",
  informationChannels: [
    "Cable TV networks",
    "Local cable operators",
    "Sikh religious channels",
  ],
};

// ============================================================
// SECTION 9: PHYSICAL MAPPING
// ============================================================

const physicalMapping: PhysicalMapping = {
  keyLocations: [
    "Khem Karan town (urban center)",
    "Border check posts",
    "Agricultural villages",
    "Canal system for irrigation",
  ],
  infrastructure: {
    roadConnectivity: "Road connectivity to Patti",
    nearestRailwayStation: "Needs Verification",
    primaryHealthCenter: "Primary health center available",
    mandi: "Mandi for agriculture produce",
  },
  vulnerabilityPoints: [
    "Border smuggling routes",
    "Agricultural distress areas",
    "Unemployment hotspots",
  ],
};

// ============================================================
// SECTION 10: SWOT ANALYSIS
// ============================================================

const swotAnalysis: SWOTAnalysis = {
  strengths: [
    "Border location advantage",
    "Agricultural base",
    "AAP incumbent advantage",
    "NRI diaspora support",
  ],
  weaknesses: [
    "Limited urban infrastructure",
    "No major industry",
    "Healthcare gaps",
    "Educational institution shortage",
  ],
  opportunities: [
    "Border trade potential",
    "Agri-processing units",
    "NRI investment",
    "Tourism (religious)",
  ],
  threats: [
    "Drug trafficking networks",
    "Security tensions",
    "Youth outmigration",
    "Farm distress",
  ],
};

// ============================================================
// SECTION 11: STRATEGIC BLUEPRINT
// ============================================================

const strategicBlueprint: StrategicBlueprint = {
  congressStrategy: {
    candidateProfile: {
      caste: "Jat Sikh or Rajput Sikh",
      profile: "Farmer leader, clean image, local connect",
      keyQualification: "Must address drug crisis credibly",
      avoid: "Dynastic candidate with perception issues",
    },
    casteFactor: "Jat Sikh + SC combination",
    issues: ["Agriculture", "unemployment", "drug menace"],
    campaign: "Focus on AAP's unfulfilled promises",
    groundGame: "Strong booth-level organization",
    targetSegments: ["Jat Sikh voters", "SC voters", "Border area voters", "Youth"],
    keyMessages: [
      "Development neglected in border area",
      "AAP failed on farmer promises",
      "Congress cares for border villages",
    ],
  },
  targetSegments: [
    {
      segment: "Jat Sikh voters",
      description: "Majority community",
    },
    {
      segment: "SC voters",
      description: "Substantial population",
    },
    {
      segment: "Border area voters",
      description: "Security-conscious",
    },
    {
      segment: "Youth",
      description: "Employment-focused",
    },
  ],
  keyMessages: [
    { message: "Development neglected in border area" },
    { message: "AAP failed on farmer promises" },
    { message: "Congress cares for border villages" },
  ],
};

// ============================================================
// SECTION 12: COURSE-CHANGING FACTORS
// ============================================================

const courseChangingFactors: CourseChangingFactors = {
  wildcards: [
    {
      factor: "Border Incident",
      description:
        "Any India-Pak tension affects voting pattern and security-sensitive voters",
    },
    {
      factor: "SAD Recovery",
      probability: "Moderate",
      description:
        "Factionalism resolution could boost SAD electoral performance",
    },
    {
      factor: "Congress-AAP Alliance",
      probability: "Low probability",
      description: "Possible but unlikely pre-election alliance",
    },
    {
      factor: "NRI Sentiment",
      description:
        "Remittance-dependent voters affected by diaspora policy changes",
    },
  ],
  triggers: [
    {
      name: "Agricultural distress index",
      description: "Rising farm distress could shift voter loyalty",
    },
    {
      name: "Drug seizure reports",
      description: "High-profile drug seizures could impact security narrative",
    },
    {
      name: "Border security incidents",
      description: "Cross-border tensions or infiltration events",
    },
    {
      name: "Central government schemes",
      description: "New schemes for border areas could influence voters",
    },
  ],
};

// ============================================================
// SECTION 13: DATA GAPS
// ============================================================

const dataGaps: DataGapsAndRecommendations = {
  requiredVerification: [
    "2017 and 2022 detailed vote shares",
    "Caste composition of voters",
    "Border village list",
    "Agricultural distress indicators",
    "Youth migration data",
  ],
  intelligencePriorities: [
    "MLA's performance assessment",
    "Local party organization strength",
    "Booth-level analysis",
    "ECI perception data",
  ],
};

// ============================================================
// CONGRESS STRATEGIC POSITION (from basic dossier)
// ============================================================

const congressStrategicPosition: CongressStrategicPosition = {
  status: "Contestable",
  margin: "AAP won by 11,882 votes",
  marginValue: 11882,
  notes:
    "AAP won by 11,882 votes (solid margin but not insurmountable). Congress has strong presence. Need to focus on LOCAL CANDIDATE with clean image.",
  keyFactors: [
    "Sukhpal Singh Bhullar (Congress) lost in 2017 to AAP",
    "2017 to 2022 swing shows anti-incumbency against Congress",
    "AAP benefited from MODI WAVE and anti-Congress sentiment",
  ],
  recommendedCandidateProfile: {
    caste: "Jat Sikh or Rajput Sikh",
    profile: "Farmer leader, clean image, local connect",
    keyQualification: "Must address drug crisis credibly",
    avoid: "Dynastic candidate with perception issues",
  },
};

// ============================================================
// ATTACK LINES (from basic dossier)
// ============================================================

const attackLines: AttackLines = {
  lines: [
    "Sarwan Singh Dhun: What did he do for Khem Karan in 4 years?",
    "Drug menace continues unchecked under AAP rule",
    "Promises of Rs 1000/month for women - where is the money?",
    "Farmer distress: AAP government indifferent to agriculture",
    "Youth have no jobs - same old promises, same disappointment",
  ],
};

// ============================================================
// SOURCES
// ============================================================

const sources: string[] = [
  "Wikipedia",
  "Oneindia",
  "IndiaVotes",
  "ECI data",
  "Census 2011",
  "Web search",
];

// ============================================================
// MAIN EXPORT
// ============================================================

export const ac022KhemKaranDossier: AC022KhemKaranDossier = {
  metadata: {
    basicDossier: basicDossierMetadata,
    deepDossier: deepDossierMetadata,
  },
  identity,
  geographicContext,
  demographicData: {
    religiousComposition,
    casteComposition,
    casteCompositionDetailed,
    keyDemographics,
  },
  electoralHistory: {
    electionResults,
    voterTurnout,
    historicalTrend:
      "AAP victory suggests urban-rural divide. Anti-incumbency against Congress observed 2017-2022.",
  },
  publicSentiment,
  governanceGap,
  localIssues,
  influencersAndPowerStructure,
  mediaLandscape,
  physicalMapping,
  swotAnalysis,
  strategicBlueprint,
  courseChangingFactors,
  dataGaps,
  congressStrategicPosition,
  attackLines,
  sources,
};
