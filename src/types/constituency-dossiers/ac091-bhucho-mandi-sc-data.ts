/**
 * AC091-Bhucho Mandi SC Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC091-Bhucho-Mandi-SC.md, AC091-BhuchoMandi-deep.md
 */

import type {
  AC091BhuchoMandiSCTypes,
  ConstituencyHeader,
  ConstituencyIdentity,
  GeographicProfile,
  ElectionResults,
  Demographics,
  KeyLocalIssue,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  AttackLinesAgainstAAP,
  DeepResearchData,
  MainDossierData,
  DistrictContextBathinda,
  Notes,
  ResearchMetadata,
  ExecutiveSummary,
  ConstituencyProfile,
  CompetitiveLandscape2027,
  IntelligenceGaps,
  Recommendations,
  ElectoralHistoryEntry,
  KeyLocalIssues,
  PoliticalLandscape,
  CasteComposition,
  SCSubGroups,
  CasteBreakdown,
  ReligionBreakdown,
  VoterDemographics,
  GeographicBoundaries,
} from "./ac091-bhucho-mandi-sc-types";

// ============================================================================
// MAIN DOSSIER DATA (from AC091-Bhucho-Mandi-SC.md)
// ============================================================================

const mainDossier: MainDossierData = {
  header: {
    acNumber: 91,
    name: "Bhucho Mandi (SC)",
    district: "Bathinda",
    region: "Malwa",
    category: "SC",
    date: "20 May 2026",
  },

  constituencyOverview:
    "Bhucho Mandi (SC) is a Scheduled Caste reserved assembly constituency in Bathinda district, Malwa region of Punjab. It is part of Bathinda Lok Sabha constituency. The constituency witnessed a dramatic AAP victory in 2022 with Master Jagseer Singh winning by a massive margin of 50,212 votes.",

  identity: {
    acNumber: 91,
    name: "Bhucho Mandi (SC)",
    district: "Bathinda",
    region: "Malwa",
    type: "SC",
    parliamentarySegment: "Bathinda Lok Sabha",
    date: "20 May 2026",
  },

  electionResults: {
    results2022: {
      winner: "Master Jagseer Singh",
      party: "Aam Aadmi Party (AAP)",
      voteShare: "57.29%",
      votes: "85,778 votes",
      margin: "50,212 votes",
      runnerUp: "Not specified",
      totalElectors: "~150,000",
      status: "verified",
    },
    results2017: {
      winner: "Pritam Singh Kotbhai",
      party: "Indian National Congress (INC)",
      voteShare: "34.04%",
      votes: "51,605 votes",
      margin: "645 votes (VERY CLOSE)",
      runnerUp: "Jagsir Singh (AAP)",
      runnerUpVotes: "50,960 votes",
      status: "verified",
    },
    results2012: {
      winner: "Not available",
      party: "Not available",
      status: "not_available",
    },
    politicalSignificance: {
      scReserved: "SC reserved seat - Significant Dalit voter base",
      dramaticShift:
        "2017 was decided by just 645 votes - extremely close election",
      aapWave2022:
        "Master Jagseer Singh won with massive 50K margin in AAP wave",
    },
  },

  casteComposition: {
    scPopulation: {
      scPopulation: "~40-45%",
      dominant: "Mazhabi, Ramdasia, Ravidassia",
    },
    scSubGroups: [
      {
        name: "Mazhabi Sikh",
        description: "Dominant rural SC group",
      },
      {
        name: "Ramdasia",
        description: "Significant population in constituency",
      },
      {
        name: "Ravidassia",
        description: "Significant population in constituency",
      },
    ],
  },

  voterDemographics: {
    totalElectors: "~150,000",
    voterTurnout: "~78-80%",
    ruralCharacter: "Rural SC-dominated constituency",
  },

  keyLocalIssues: [
    {
      rank: 1,
      title: "Drug addiction",
      description:
        "Major concern in SC communities - destroying youth and families",
    },
    {
      rank: 2,
      title: "Unemployment",
      description:
        "Limited opportunities for SC youth - joblessness affecting rural areas",
    },
    {
      rank: 3,
      title: "Land issues",
      description:
        "Small farmer problems - land reform and ownership concerns",
    },
    {
      rank: 4,
      title: "Rural infrastructure",
      description: "Roads, water, electricity - inadequate rural infrastructure",
    },
    {
      rank: 5,
      title: "Health and education",
      description:
        "Rural facility gaps - limited access to quality healthcare and education",
    },
  ],

  congressStrategicPosition: {
    currentStatus: {
      position:
        "AAP holds this seat - Master Jagseer Singh won with huge margin",
      outcome: "Congress lost badly in 2022",
    },
    strategicOptions: [
      "Need a strong SC candidate with grassroots connect",
      "Focus on anti-incumbency (AAP 3 years in power)",
      "Address drug and unemployment issues",
      "Consider BSP alliance for SC consolidation",
    ],
    keyConsiderations: [
      "AAP holds this seat with 50,212 vote margin",
      "Congress lost badly in 2022",
      "Need strong SC candidate with grassroots connect",
      "Focus on anti-incumbency against AAP",
      "Address drug and unemployment in SC communities",
      "BSP alliance could consolidate SC votes",
    ],
  },

  recommendedCandidateProfile: {
    ideal: {
      profile:
        "SC community elder with political experience, known for social service, accessible",
      background: "Dalit rights, Panchayat leadership",
      keyTraits: "SC (mandatory), Mazhabi/Ramdasia/Ravidassia preferred",
      targetVoter: "Village-level worker network essential",
    },
  },

  attackLinesAgainstAAP: {
    vulnerabilities: [
      "Massive margin shows AAP takes SC votes for granted",
      "Drug addiction destroying SC youth",
      "SC youth still unemployed",
      "Educational opportunities limited for SC children",
      "Health services still inaccessible to rural SC",
    ],
    narratives: [
      "AAP takes SC votes for granted - 50K margin proves it",
      "Drug addiction destroying SC youth in rural Punjab",
      "SC youth remain unemployed despite AAP promises",
      "SC children denied quality education opportunities",
      "Rural SC communities lack basic health services",
    ],
  },

  districtContextBathinda: {
    bathindaDemographics: {
      religionDistribution: {
        sikh: "~65%",
        hindu: "~30-35%",
        others: "~2-5%",
      },
      remarks:
        "Sikh majority district with significant Hindu minority",
    },
  },

  sources: [
    "https://www.oneindia.com/bhucho-mandi-assembly-elections-pb-91/",
    "https://en.wikipedia.org/wiki/Bhucho_Mandi_Assembly_constituency",
    "https://en.wikipedia.org/wiki/2022_Punjab_Legislative_Assembly_election",
  ],

  notes: {
    content: [
      "SC reserved seat makes candidate's community connect crucial",
      "2017 was decided by just 645 votes - extremely narrow margin",
      "2022 AAP wave resulted in 50,212 vote margin",
      "Rural SC-dominated constituency",
      "Drug and unemployment are primary voter concerns",
    ],
  },
};

// ============================================================================
// DEEP RESEARCH DATA (from AC091-BhuchoMandi-deep.md)
// ============================================================================

const deepResearch: DeepResearchData = {
  metadata: {
    dossierId: "AC091-Bhucho Mandi",
    topic: "Bhucho Mandi Assembly Constituency - Deep Research",
    tier: 2,
    date: "20 May 2026",
    dataCurrency: "As of May 2026",
    sourcesConsulted: [
      "Web searches on Punjab 2022 election results",
      "Demographics",
      "Issues",
    ],
    verificationStatus: "PARTIALLY VERIFIED - requires local verification",
  },

  executiveSummary: {
    overview:
      "Bhucho Mandi (AC091) is a Scheduled Caste (SC) reserved assembly constituency in Bathinda district of Punjab's Malwa region. The constituency witnessed a significant AAP victory in 2022 with Master Jagseer Singh winning by a large margin. Key issues include social welfare of SC community, agricultural distress, and unemployment.",
    result2022:
      "Master Jagseer Singh (AAP) won with 50,212 vote margin in 2022",
    keyIssues:
      "Social welfare of SC community, agricultural distress, unemployment, drug crisis",
  },

  constituencyProfile: {
    basicDetails: {
      assemblyConstituencyNo: 91,
      district: "Bathinda",
      region: "Malwa (Central Punjab)",
      category: "Scheduled Caste (SC)",
      parliamentaryConstituency: "Bathinda (Lok Sabha)",
    },
    electionResults2022: {
      winner: "Master Jagseer Singh (Aam Aadmi Party)",
      margin: "50,212 votes (significant margin)",
      turnout: "~76-78% [ESTIMATE]",
      totalElectors: "~1,70,000 [APPROXIMATION]",
    },
  },

  demographics: {
    population: "~175,000 [APPROXIMATION]",
    casteComposition: {
      scPopulation: "~55-60% (dominant)",
      dominant: "Mazhabi, Ramdasia, Ravidassia",
    },
    scSubGroups: [
      {
        name: "Mazhabi Sikh",
        description: "Dominant rural SC group",
      },
      {
        name: "Ramdasia",
        description: "Significant population",
      },
      {
        name: "Ravidassia",
        description: "Significant population",
      },
    ],
    casteBreakdown: {
      scheduledCastes: "~55-60% (dominant)",
      jatSikh: "~20-25%",
      hinduGeneral: "~10-15%",
      obc: "~5-10%",
      dominant: "SC population dominant due to reserved seat",
    },
    religionBreakdown: {
      sikh: "~65%",
      hindu: "~33%",
      others: "~2%",
    },
    censusYear: 2011,
  },

  keyIssues: {
    primaryIssues: {
      issues: [
        {
          rank: 1,
          title: "Social Welfare",
          description:
            "SC community employment, education - broken AAP promises",
        },
        {
          rank: 2,
          title: "Drug Crisis",
          description:
            "Youth addiction affecting all communities - severe in Malwa",
        },
        {
          rank: 3,
          title: "Agricultural Distress",
          description:
            "Small and marginal farmers - affects dalit agricultural laborers",
        },
        {
          rank: 4,
          title: "Unemployment",
          description:
            "SC youth job opportunities - limited employment for rural youth",
        },
        {
          rank: 5,
          title: "Land Issues",
          description:
            "Small landholdings - land reform and ownership concerns",
        },
      ],
    },
    secondaryIssues: {
      issues: [
        "Education access for SC children",
        "Healthcare facilities for rural areas",
        "Rural infrastructure development",
        "MGNREGA implementation",
      ],
    },
  },

  politicalLandscape: {
    currentMla: {
      name: "Master Jagseer Singh (AAP)",
      party: "Aam Aadmi Party",
    },
    keyConsiderations: [
      "SC reserved seat - candidate's community connect crucial",
      "Large margin (50,212) suggests strong AAP hold",
      "AAP won with significant margin in 2022",
      "Rural SC-dominated constituency",
    ],
  },

  electoralHistory: [
    {
      year: 2022,
      winner: "Master Jagseer Singh",
      party: "AAP",
      margin: "50,212",
      status: "verified",
    },
    {
      year: 2017,
      winner: "NEEDS DATA",
      party: "NEEDS DATA",
      margin: "NEEDS DATA",
      status: "needs_verification",
    },
    {
      year: 2012,
      winner: "NEEDS DATA",
      party: "NEEDS DATA",
      margin: "NEEDS DATA",
      status: "needs_verification",
    },
  ],

  competitiveLandscape2027: {
    likelyContenders: [
      {
        party: "AAP",
        status: "Incumbent, strong hold with 50K margin",
      },
      {
        party: "Congress",
        status: "Needs strong SC candidate to compete",
      },
      {
        party: "BSP",
        status: "Could split SC votes - alliance considerations",
      },
    ],
    strategicConsiderations: [
      "SC reserved seat - community connect essential",
      "AAP's 50,212 margin indicates strong voter loyalty",
      "Congress needs to rebuild SC voter trust",
      "BSP alliance could impact vote consolidation",
    ],
  },

  intelligenceGaps: {
    criticalMissingData: [
      "2017 and earlier results",
      "Sub-caste composition (Mazhabi, Ramdasia, etc.)",
      "Booth-wise analysis",
      "All 2022 candidate vote shares",
      "Current MLA's performance",
    ],
  },

  recommendations: {
    congressStrategy: {
      candidate:
        "SC candidate with strong community connect and grassroots leadership",
      primaryNarrative: "AAP failed on SC welfare promises",
      targetVoters: ["SC community", "Rural youth", "Small farmers"],
      grievanceFocus: [
        "Jobs",
        "Education",
        "Social welfare",
        "Drug crisis",
      ],
    },
  },
};

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

const geographicBoundaries: GeographicBoundaries = {
  location: "Bathinda district, Malwa region",
  borderAreas: "Part of Bathinda Lok Sabha constituency",
  keyTowns: "Bhucho Mandi and surrounding villages",
};

const geographicProfile: GeographicProfile = {
  boundaries: geographicBoundaries,
  urbanRuralComposition: {
    character: "Predominantly Rural",
    scPopulation: "~40-45% to 55-60% (SC reserved seat)",
    economy: "Agriculture, rural labor",
  },
};

const demographics: Demographics = {
  population: "~175,000 [APPROXIMATION]",
  casteComposition: deepResearch.demographics.casteComposition,
  scSubGroups: deepResearch.demographics.scSubGroups,
  casteBreakdown: deepResearch.demographics.casteBreakdown,
  religionBreakdown: deepResearch.demographics.religionBreakdown,
  censusYear: 2011,
};

const congressStrategicPosition: CongressStrategicPosition = {
  currentStatus: {
    position: mainDossier.congressStrategicPosition.currentStatus.position,
    outcome: mainDossier.congressStrategicPosition.currentStatus.outcome,
  },
  strategicOptions: mainDossier.congressStrategicPosition.strategicOptions,
  keyConsiderations:
    mainDossier.congressStrategicPosition.keyConsiderations,
};

const recommendedCandidateProfile: RecommendedCandidateProfile =
  mainDossier.recommendedCandidateProfile;

const attackLinesAgainstAAP: AttackLinesAgainstAAP =
  mainDossier.attackLinesAgainstAAP;

const districtContextBathinda: DistrictContextBathinda =
  mainDossier.districtContextBathinda;

const notes: Notes = mainDossier.notes;

export const ac091BhuchoMandiSCData: AC091BhuchoMandiSCTypes = {
  mainDossier,

  deepResearch,

  completeDossier: {
    header: mainDossier.header,
    identity: mainDossier.identity,
    geographicProfile,
    electionResults: mainDossier.electionResults,
    demographics,
    keyLocalIssues: mainDossier.keyLocalIssues,
    congressStrategicPosition,
    recommendedCandidateProfile,
    attackLinesAgainstAAP,
    deepResearchData: deepResearch,
    districtContextBathinda,
    notes,
  },
};

// Named exports for flexible importing
export const ac091BhuchoMandiMainDossier = mainDossier;
export const ac091BhuchoMandiDeepResearch = deepResearch;
export const ac091BhuchoMandiCompleteDossier = ac091BhuchoMandiSCData.completeDossier;
