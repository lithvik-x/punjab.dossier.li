/**
 * AC109-Nabha Assembly Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC109-Nabha.md, AC109-Nabha-deep.md
 *
 * DATA CONFLICT:
 * - Main file (AC109-Nabha.md): Category = "General"
 * - Deep file (AC109-Nabha-deep.md): Type = "SC Reserved"
 * Official verification required to resolve this conflict.
 */

import type {
  AC109NabhaTypes,
  AC109NabhaDossier,
  ConstituencyHeader,
  ConstituencyIdentity,
  ConstituencyProfile,
  ExecutiveSummary,
  ElectionHistory,
  ElectionResult2022,
  ElectionResult2017,
  ElectionResult2012,
  ElectorateData,
  CasteCategory,
  CasteComposition,
  LocalIssue,
  KeyLocalIssues,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  AttackLine,
  AttackLinesAgainstAAP,
  Notes,
  DeepResearchData,
  DeepResearchMetadata,
  DeepConstituencyIdentity,
  GeographicBoundaries,
  GeographicContext,
  UrbanRuralComposition,
  DeepElectoralHistory,
  DemographicsDeep,
  DistrictDemographics,
  CasteCompositionDeep,
  KeyIssuesAndGrievances,
  PoliticalLeadership,
  VoterTurnout,
  GovernmentSchemes,
  CompetitiveLandscape2027,
  IntelligenceGaps,
  IntelligenceGap,
  Recommendations,
  DataQuality,
} from "./ac109-nabha-types";

// ============================================================================
// MAIN DOSSIER DATA (from AC109-Nabha.md)
// ============================================================================

const mainDossier = {
  header: {
    acNumber: 109,
    name: "Nabha",
    district: "Patiala",
    region: "Malwa" as const,
    category: "General" as const,
    date: "19 May 2026",
  },

  identity: {
    acNumber: 109,
    name: "Nabha",
    district: "Patiala",
    region: "Malwa" as const,
    category: "General" as const,
    dataCurrency: "As of 19 May 2026",
  },

  profile: {
    acNumber: "109",
    officialName: "Nabha",
    district: "Patiala",
    region: "Malwa" as const,
    category: "General" as const,
    lokSabhaSeat: "Patiala" as const,
    type: "General",
  },

  executiveSummary: {
    overview:
      "Nabha is a general-category constituency in Patiala district. AAP won decisively in 2022 with Gurdev Singh Dev Maan defeating Congress by 52,600 votes. The substantial margin indicates strong AAP support. However, Nabha has historical ties to royal heritage (Nabha State) and traditional politics. Congress can make inroads with a candidate who has Patiala royal connect or strong rural base.",
    winner2022: "Gurdev Singh Dev Maan",
    party2022: "AAP",
    margin2022: "52,600 votes",
    marginType: "WIDE" as const,
    runnerUp: "Congress Candidate",
    congressOpportunity:
      "Congress can make inroads with a candidate who has Patiala royal connect or strong rural base.",
    notes: [
      "Nabha has historical significance (Nabha State)",
      "Royal family may have informal influence - assess",
      "Large margin suggests AAP wave, but winnable with right candidate",
    ],
  },

  constituencyOverview:
    "Nabha is a general-category constituency in Patiala district, part of the Malwa region. The constituency has historical ties to royal heritage through Nabha State. AAP won decisively in 2022 with a margin of 52,600 votes.",

  electionResults: {
    results2022: {
      winner: "Gurdev Singh Dev Maan",
      party: "AAP",
      margin: "52,600 votes",
      marginType: "WIDE" as const,
      runnerUp: "Congress Candidate",
      note: "AAP won decisively",
    } as ElectionResult2022,
    historicalContext: "Congress previously won both 2012 and 2017",
    congressBase: "Traditional Congress support in rural areas",
    aapGainedGround: "AAP emerged strongly in 2022",
    ruralScVotesDecisive: "SC votes decisive in 2022 outcome",
  },

  electionHistory: {
    result2022: {
      winner: "Gurdev Singh Dev Maan",
      party: "AAP",
      margin: "52,600 votes",
      marginType: "WIDE" as const,
      runnerUp: "Congress Candidate",
      note: "AAP won decisively",
    } as ElectionResult2022,
    result2017: {
      winner: "Congress",
      party: "INC",
      note: "Congress won before AAP emergence",
    } as ElectionResult2017,
    result2012: {
      winner: "Congress",
      party: "INC",
      note: "Congress won before AAP emergence",
    } as ElectionResult2012,
    keyTrend:
      "AAP emerged strongly in 2022, defeating Congress by large margin. Congress previously won both 2012 and 2017.",
  } as ElectionHistory,

  electorateData: {
    totalElectors: "~150,000-160,000",
    voterTurnout2022: "~75-78%",
    note: "Voter turnout data from 2022 election",
  } as ElectorateData,

  casteComposition: {
    categories: [
      { category: "Jat Sikh", estimatedPercentage: "30-34%" },
      { category: "OBC", estimatedPercentage: "18-22%" },
      { category: "SC", estimatedPercentage: "20-24%" },
      { category: "Hindu Upper Caste", estimatedPercentage: "14-18%" },
      { category: "Others", estimatedPercentage: "6-8%" },
    ] as CasteCategory[],
    note: "Jat Sikh is the dominant caste group",
  } as CasteComposition,

  keyLocalIssues: [
      {
        rank: 1,
        title: "Drug addiction",
        description:
          "Rural SC villages severely affected. Youth addiction destroying families in rural areas.",
      },
      {
        rank: 2,
        title: "Heritage preservation",
        description: "Nabha's historical importance as former capital of Nabha State.",
      },
      {
        rank: 3,
        title: "Agricultural distress",
        description:
          "Farmer suicides reported. MSP issues and agrarian crisis affecting rural population.",
      },
      {
        rank: 4,
        title: "Unemployment",
        description: "Youth migration due to lack of employment opportunities.",
      },
      {
        rank: 5,
        title: "Healthcare",
        description: "Rural health facilities poor. PHCs without doctors reported.",
      },
    ] as LocalIssue[],

  congressStrategicPosition: {
    currentPosition: {
      status: "Lost significantly in 2022",
      lossIn2022: "Lost to AAP with 52,600 vote margin",
      historicalStrength: "Won before AAP emergence (2012, 2017)",
      challenge: "Overcoming large AAP margin",
    },
    strengths: [
      "Historical Congress voters still exist",
      "Royal/heritage connect may help",
      "Anti-incumbency on AAP",
    ],
    weaknesses: [
      "Large margin to overcome",
      "AAP organization strong",
      "Need exceptional candidate",
    ],
    keyChallenges: [
      "Large 52,600 vote margin to overcome",
      "AAP has strong organizational presence",
      "Need exceptional candidate to turn the tide",
    ],
    opportunities: [
      "Historical Congress voters still exist in constituency",
      "Royal/heritage connect may help appeal",
      "Anti-incumbency sentiment against AAP government",
    ],
  } as CongressStrategicPosition,

  recommendedCandidateProfile: {
    ideal: {
      caste: "Jat Sikh (dominant) or Hindu Upper Caste",
      profile:
        "Candidate with heritage/royal connect OR strong rural worker",
      attributes: "Accessible, strong stand on drug issue",
      background: "Avoid dynastic; consider new blood",
    },
    table: [
      { attribute: "Caste", idealProfile: "Jat Sikh (dominant) or Hindu Upper Caste" },
      { attribute: "Profile", idealProfile: "Heritage/royal connect OR strong rural worker" },
      { attribute: "Attributes", idealProfile: "Accessible, strong stand on drug issue" },
      { attribute: "Background", idealProfile: "Avoid dynastic; consider new blood" },
    ],
  } as RecommendedCandidateProfile,

  attackLinesAgainstAAP: {
    vulnerabilities: [
      "52,600 votes margin - did Punjab forget?",
      "Drug addiction increased - families destroyed",
      "Nabha's heritage ignored - no development",
      "Promises broken on jobs, MSP, women welfare",
      "Rural healthcare collapsed - PHCs without doctors",
    ],
    lines: [
      {
        rank: 1,
        title: "Large margin question",
        description:
          "52,600 votes margin - did Punjab forget? AAP promised change but delivered what?",
      },
      {
        rank: 2,
        title: "Drug crisis",
        description:
          "Drug addiction increased - families destroyed. Youth future sacrificed.",
      },
      {
        rank: 3,
        title: "Heritage neglect",
        description:
          "Nabha's heritage ignored - no development of historical sites or tourism.",
      },
      {
        rank: 4,
        title: "Broken promises",
        description:
          "Promises broken on jobs, MSP, women welfare. Empty assurances.",
      },
      {
        rank: 5,
        title: "Healthcare collapse",
        description:
          "Rural healthcare collapsed - PHCs without doctors, medicines scarce.",
      },
    ] as AttackLine[],
  } as AttackLinesAgainstAAP,

  notes: {
    content: [
      "Nabha has historical significance (Nabha State)",
      "Royal family may have informal influence - assess",
      "Large margin suggests AAP wave, but winnable with right candidate",
    ],
  } as Notes,
};

// ============================================================================
// DEEP RESEARCH DATA (from AC109-Nabha-deep.md)
// ============================================================================

const deepResearch = {
  metadata: {
    researchDossierId: "AC109-Nabha",
    topic: "Nabha Assembly Constituency - Deep Research",
    tier: 2,
    date: "20 May 2026",
    dataCurrency: "As of May 2026 (2022 election data is most recent)",
    sourcesConsulted: "grokipedia.com, cnbctv18.com, bbc.com, adrindia.org",
    verificationStatus: "PARTIALLY_VERIFIED" as const,
    sources: [
      "Grokipedia Nabha (https://grokipedia.com/page/nabha_assembly_constituency)",
      "CNBC TV18 Nabha (https://www.cnbctv18.com/politics/nabha-election-result-2022-live-how-to-check-nabha-legislative-assembly-election-vidhan-sabha-winners-losers-vote-margin-news-updates-12656532.htm)",
    ],
  } as DeepResearchMetadata,

  constituencyIdentity: {
    acNo: "109",
    name: "Nabha",
    district: "Patiala",
    region: "Malwa",
    category: "SC Reserved", // CONFLICT: Main file says "General"
    lokSabha: "Patiala",
    type: "SC Reserved", // CONFLICT: Main file says "General"
  } as DeepConstituencyIdentity,

  geographicBoundaries: {
    description: "Located in Patiala district in the Malwa region",
    keyAreas: "Agricultural areas with significant SC population",
  } as GeographicBoundaries,

  geographicContext: {
    location: "Patiala district, Malwa region",
    economy: "Agricultural economy",
    agriculturalEconomy:
      "The area has significant SC population and agricultural economy",
  } as GeographicContext,

  urbanRuralComposition: {
    mix: "Rural agricultural constituency",
    urbanPopulation: "Nabha town is the urban center",
    rural: "Dominant rural agricultural areas",
    economy: "Agriculture-based with significant SC population",
  } as UrbanRuralComposition,

  electoralHistory: {
    election2022: {
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      runnerUp: "[NEEDS VERIFICATION]",
      runnerUpParty: "[NEEDS VERIFICATION]",
      margin: "[NEEDS VERIFICATION]",
      winnerConfirmed: false,
      needsVerification: [
        "Winner name and party from 2022",
        "Runner-up name and party",
        "Full margin",
        "Full candidate list",
      ],
    },
    election2017: {
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      margin: "[NEEDS VERIFICATION]",
    },
    historicalPattern: "[NEEDS VERIFICATION - historical voting patterns]",
    keyObservation:
      "Deep research file contains NEEDS VERIFICATION markers for most election data",
  } as DeepElectoralHistory,

  demographics: {
    districtDemographics: {
      totalPopulation: "[NEEDS VERIFICATION]",
      urbanPopulation: "763,280",
      sexRatio: "891 females per 1000 males",
    } as DistrictDemographics,
    casteComposition: {
      jatSikh: "30-34%",
      obc: "18-22%",
      sc: "20-24%",
      hinduUpperCaste: "14-18%",
      others: "6-8%",
    } as CasteCompositionDeep,
    scPopulationNote:
      "Significant SC population given reserved seat status. [NEEDS VERIFICATION - exact percentage]",
  } as DemographicsDeep,

  keyIssues: {
    primaryIssues: [
      { issue: "Drug Crisis - Malwa region affected, youth addiction concern" },
      { issue: "Agrarian Distress - MSP issues, groundwater depletion, stubble management" },
    ] as KeyIssuesAndGrievances["primaryIssues"],
    secondaryIssues: [
      { issue: "SC Community Issues - Social justice concerns, scheme access, representation, employment" },
    ] as KeyIssuesAndGrievances["secondaryIssues"],
  } as KeyIssuesAndGrievances,

  politicalLeadership: {
    currentMLA: "[NEEDS VERIFICATION]",
    currentMLAParty: "[NEEDS VERIFICATION]",
    currentMLATerm: "[NEEDS VERIFICATION - current MLA 2022-2027]",
    keyPoliticalFigures: ["[NEEDS VERIFICATION - local Dalit leaders, influential families]"],
    needsVerification: [
      "Current MLA name and party",
      "Key local political figures",
      "Dalit leaders and influential families",
    ],
  } as PoliticalLeadership,

  voterTurnout: {
    stateAverage: "72%",
    constituencySpecific: "[NEEDS VERIFICATION - constituency-specific turnout]",
  } as VoterTurnout,

  governmentSchemes: {
    beneficiaryData: "[NEEDS VERIFICATION - SC-specific beneficiary data]",
    needsVerification: [
      "SC-specific beneficiary data",
      "Scheme penetration metrics",
    ],
  } as GovernmentSchemes,

  competitiveLandscape: {
    likelyContenders: ["[NEEDS VERIFICATION]"],
    strategicConsiderations: ["[NEEDS VERIFICATION]"],
  } as CompetitiveLandscape2027,

  intelligenceGaps: {
    missingData: [
      {
        gap: "Full 2022 election results with exact vote counts",
        status: "OPEN" as const,
      },
      {
        gap: "2017 and earlier detailed election results",
        status: "OPEN" as const,
      },
      {
        gap: "SC population exact percentage",
        status: "OPEN" as const,
      },
      {
        gap: "Local political mapping",
        status: "OPEN" as const,
      },
      {
        gap: "Scheme beneficiaries data",
        status: "OPEN" as const,
      },
    ] as IntelligenceGap[],
  } as IntelligenceGaps,

  recommendations: {
    researchPriorities: [
      "Identify winner and margin from official sources",
      "Analyze Dalit vote bank dynamics",
      "Map party competition among SC voters",
    ] as string[],
  } as Recommendations,
} as DeepResearchData;

// ============================================================================
// DATA QUALITY
// ============================================================================

const dataQuality = {
  sources: [
    "AC109-Nabha.md (main dossier)",
    "AC109-Nabha-deep.md (deep research)",
    "Grokipedia (grokipedia.com/page/nabha_assembly_constituency)",
    "CNBC TV18 (cnbctv18.com)",
  ],
  compiledDate: "21 May 2026",
  verificationStatus: "PARTIALLY_VERIFIED" as const,
  verificationNotes: [
    {
      note: "Deep research file has NEEDS VERIFICATION markers for most election data - requires official CEO Punjab verification",
    },
    {
      note: "Category conflict: Main file says 'General', Deep file says 'SC Reserved' - official verification required",
    },
    {
      note: "2022 winner data in main file (Gurdev Singh Dev Maan, AAP, 52,600 votes) conflicts with deep file (NEEDS VERIFICATION)",
    },
  ],
  dataCurrency: "As of May 2026",
  conflictNote:
    "CATEGORY CONFLICT: Main file lists Nabha as 'General' category, but deep research file describes it as 'SC Reserved' constituency. This is a fundamental conflict requiring official verification from Election Commission/CEO Punjab records. Additionally, the deep research file has NEEDS VERIFICATION markers for the winner and margin data that the main file provides definitively (Gurdev Singh Dev Maan, AAP, 52,600 votes). All verification notes must be addressed before this dossier can be marked VERIFIED.",
} as DataQuality;

// ============================================================================
// COMPLETE DOSSIER
// ============================================================================

export const ac109NabhaData: AC109NabhaTypes = {
  // Header
  header: mainDossier.header,
  identity: mainDossier.identity,
  profile: mainDossier.profile,

  // Main dossier
  executiveSummary: mainDossier.executiveSummary,
  constituencyOverview: mainDossier.constituencyOverview,
  electionHistory: mainDossier.electionHistory,
  electorateData: mainDossier.electorateData,
  casteComposition: mainDossier.casteComposition,
  keyLocalIssues: { issues: mainDossier.keyLocalIssues },
  congressStrategicPosition: mainDossier.congressStrategicPosition,
  recommendedCandidateProfile: mainDossier.recommendedCandidateProfile,
  attackLines: mainDossier.attackLinesAgainstAAP,
  notes: mainDossier.notes,

  // Deep research
  deepResearch: deepResearch,

  // Quality
  dataQuality: dataQuality,
};

export const ac109NabhaDossier: AC109NabhaDossier = {
  main: mainDossier,
  deep: deepResearch,
  quality: dataQuality,
};

export default ac109NabhaData;
