/**
 * AC068-Dakha Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC068-Dakha.md, AC068-Dakha-deep.md
 */

import type { AC068DakhaTypes } from "./ac068-dakha-types";

export const ac068DakhaData: AC068DakhaTypes = {
  // ==========================================================================
  // IDENTITY & OVERVIEW
  // ==========================================================================
  identity: {
    acNumber: 68,
    name: "Dakha",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    date: "20 May 2026",
  },

  overview: {
    description:
      "Dakha (AC 68) is a general category assembly constituency in Ludhiana district, Malwa region. Part of Ludhiana Lok Sabha constituency. This is a semi-urban/rural constituency with agricultural base.",
    areaCharacter: "Semi-urban/rural with agricultural base",
    parliamentarySegment: "Ludhiana Lok Sabha constituency",
  },

  constituencyProfile: {
    basicDetails: {
      acNumber: 68,
      name: "Dakha",
      district: "Ludhiana",
      region: "Malwa",
      category: "General",
      date: "20 May 2026",
    },
    geographicBoundaries: {
      bordering: "Payal, Gill, and Raikot constituencies",
      keyTowns: ["Dakha (town)", "surrounding villages"],
    },
    urbanRuralComposition: {
      type: "Predominantly Rural",
      economy: ["Agriculture (wheat, paddy)", "Dairy farming"],
      ruralInfrastructureStatus: "needs_verification",
    },
  },

  executiveSummary: {
    summary:
      "Dakha (AC068) is an assembly constituency located in Ludhiana district, Malwa region of Punjab. The constituency is part of the Ludhiana parliamentary constituency for national elections. In a notable result in the 2022 elections, SAD (Shiromani Akali Dal) candidate Manpreet Singh Ayali won from Dakha, defeating Congress's Captain Sandeep Singh Sandhu. This was one of only 3 seats won by SAD in 2022, representing continued SAD support in their traditional stronghold area despite the AAP wave.",
  },

  // ==========================================================================
  // ELECTION RESULTS 2022
  // ==========================================================================
  electionResult2022: {
    winner: "Manpreet Singh Ayali",
    party: "Shiromani Akali Dal (SAD)",
    runnerUp: "Captain Sandeep Singh Sandhu",
    runnerUpParty: "Indian National Congress (INC)",
    margin: "[NEEDS VERIFICATION - Specific vote margin not found]",
    marginStatus: "needs_verification",
    totalCandidates: 10,
  },

  historicalPattern: {
    traditionalParties: "Congress and SAD have held this seat historically",
    breakthrough: "AAP breakthrough in 2022",
    contestType: "Multi-cornered contest typical",
  },

  electoralHistory: [
    {
      year: 2022,
      winner: "Manpreet Singh Ayali",
      party: "SAD",
      margin: "[NEEDS VERIFICATION]",
      marginStatus: "needs_verification",
    },
    {
      year: 2017,
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      margin: "[NEEDS VERIFICATION]",
      marginStatus: "needs_verification",
    },
    {
      year: 2012,
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      margin: "[NEEDS VERIFICATION]",
      marginStatus: "needs_verification",
    },
  ],

  partyPerformanceTrend: [
    {
      year: 2022,
      sad: "W",
      aap: "2nd",
      inc: "2nd",
      notes: "AAP wave but SAD held",
    },
    {
      year: 2017,
      sad: "[W/2nd]",
      aap: "2nd/W",
      inc: "[W/2nd]",
      notes: "[NEEDS ANALYSIS]",
    },
  ],

  voterTurnout: {
    turnout2022: "[NEEDS VERIFICATION from constituency-specific data]",
    turnoutStatus: "needs_verification",
    stateAverage: "62.80%",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    populationCensus2011: "[NEEDS VERIFICATION - Constituency level data not found]",
    casteCompositionStatus: "needs_verification",
    casteCompositionLudhianaRef: {
      jathSikh: "Major agrarian caste, traditional SAD voters",
      sc: "Significant rural population (~25-30%)",
      obc: "[NEEDS VERIFICATION]",
      upperCastes: "Khatri/Arora: Trading community",
      other: "Balance",
    },
    religiousComposition: {
      sikh: "~55-60% (Malwa region pattern)",
      hindu: "~40-45% (with Hindu minority)",
    },
  },

  casteDemographics: {
    jathSikh: "Majority community in rural areas",
    sc: "~25-30%",
    obc: "~25-30%",
    upperCastes: "~25-30%",
    other: "Balance",
  },

  keyCommunities: [
    {
      name: "Jat Sikh",
      description: "Agrarian community",
      politicalSignificance: "Politically significant, traditional SAD voters",
    },
    {
      name: "Mazhabi/Ramdassia",
      description: "SC communities",
      politicalSignificance: "Significant rural population",
    },
    {
      name: "OBC groups",
      description: "Various occupations",
      politicalSignificance: "Various occupations",
    },
    {
      name: "Khatri/Arora",
      description: "Trading community",
      politicalSignificance: "In urban portions",
    },
  ],

  // ==========================================================================
  // KEY ISSUES
  // ==========================================================================
  keyIssues: {
    localIssues: [
      {
        rank: 1,
        title: "Agriculture",
        description: "MSP, irrigation, stubble management",
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description: "Rural youth addiction",
      },
      {
        rank: 3,
        title: "Infrastructure",
        description: "Roads connecting villages",
      },
      {
        rank: 4,
        title: "Healthcare",
        description: "Rural health facilities",
      },
      {
        rank: 5,
        title: "Education",
        description: "Schools in villages",
      },
      {
        rank: 6,
        title: "Water",
        description: "Irrigation and drinking water",
      },
      {
        rank: 7,
        title: "Employment",
        description: "Limited industrial jobs",
      },
    ],
    primaryIssues: [
      "Agriculture: MSP, irrigation, stubble management",
      "Drug Crisis: Rural youth addiction",
      "Infrastructure: Roads connecting villages",
      "Healthcare: Rural health facilities",
      "Education: Schools in villages",
      "Water: Irrigation and drinking water",
      "Employment: Limited industrial jobs",
    ],
  },

  keyIssuesGrievances: {
    drugMenace:
      "Rural youth addiction severely affecting agricultural communities. Punjab described as 'awash in drugs' per NIH research. Border areas particularly affected.",
    agriculturalDistress: {
      issues: [
        "MSP procurement concerns",
        "Stubble management (post-harvest burning due to no alternatives)",
        "Groundwater depletion for irrigation",
        "Rising agricultural input costs",
      ],
    },
    unemployment: "Rural youth lacking industrial/job opportunities",
    ruralInfrastructure: "Roads, electricity, irrigation facilities",
  },

  localIssues: [
    {
      rank: 1,
      title: "Drug Menace",
      description:
        "Rural youth addiction severely affecting agricultural communities. Punjab described as 'awash in drugs' per NIH research. Border areas particularly affected.",
    },
    {
      rank: 2,
      title: "Agricultural Distress",
      description:
        "MSP procurement concerns, stubble management issues, groundwater depletion, rising input costs",
    },
    {
      rank: 3,
      title: "Unemployment",
      description: "Rural youth lacking industrial/job opportunities",
    },
    {
      rank: 4,
      title: "Rural Infrastructure",
      description: "Roads, electricity, irrigation facilities",
    },
  ],

  // ==========================================================================
  // POLITICAL LEADERSHIP
  // ==========================================================================
  politicalLeadership: {
    currentMLA: {
      name: "Manpreet Singh Ayali",
      party: "Shiromani Akali Dal",
      term: "2022-2027",
    },
    localInfluencers: {
      status: "needs_verification",
      influencers: [],
    },
    politicalSignificance:
      "SAD's 2022 victory here shows party retained some Malwa strongholds. Congress candidate was former military officer (Capt. Sandeep Singh Sandhu).",
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentStatus: {
      position2022: "Lost seat to AAP",
      historicalStanding: "Congress competitive historically",
      analysis: "AAP's rural outreach effective",
    },
    challenges: {
      challenges: [
        "Rebuilding rural organization",
        "Countering AAP's welfare message",
        "Consolidating non-AAP votes",
        "Local candidate development",
      ],
    },
    opportunities: {
      opportunities: [
        "Rural distress is real",
        "AAP government failed on promises",
        "Congress has rural roots",
        "Potential for multi-party coalition",
      ],
    },
  },

  // ==========================================================================
  // RECOMMENDED CANDIDATE PROFILE
  // ==========================================================================
  recommendedCandidateProfile: {
    idealCandidate: {
      caste: "Jat Sikh preferred for this rural seat",
      background: "Agricultural background essential",
      profile: "Farmer leader OR rural representative",
      connect: "Strong village-level network",
      priority: "Understanding of rural issues",
    },
    selectionPriorities: {
      priorities: [
        "Village-to-village connect",
        "Ability to address farmers' concerns",
        "Youth outreach capability",
        "Clean image with work capacity",
      ],
    },
  },

  // ==========================================================================
  // ATTACK LINES
  // ==========================================================================
  attackLines: {
    vulnerabilities: {
      vulnerabilities: [
        "Farm Sector: MSP procurement failures",
        "Stubble: No sustainable solution",
        "Drug Menace: Rural youth destruction",
        "Migration: Village youth leaving",
        "Broken Promises: Employment, income guarantees",
      ],
    },
    congressNarrative: {
      narratives: [
        "AAP's guarantee is empty, Congress delivers",
        "Dakha's farmers: Your vote = Your survival",
        "Real development for real Punjab, not Delhi's dictates",
      ],
    },
  },

  recommendationsForCongress: [
    "Candidate: Strong local candidate with Jat Sikh background",
    "Focus: Farmers' issues, drug crisis",
    "Caste Strategy: Consolidate Jat Sikh + Dalit votes",
    "Differentiation: From AAP (who also claims to address drugs)",
  ],

  // ==========================================================================
  // COMPETITIVE LANDSCAPE 2027
  // ==========================================================================
  competitiveLandscape2027: {
    keyContenders: [
      {
        party: "SAD",
        position: "Incumbent, traditional base",
        notes: "Retained core support despite AAP wave",
      },
      {
        party: "AAP",
        position: "Strong 2nd place in 2022",
        notes: "Anti-corruption positioning",
      },
      {
        party: "Congress",
        position: "Significant candidate in 2022",
        notes: "Trying to rebuild from 3rd position",
      },
      {
        party: "BJP",
        position: "Limited independent base",
        notes: "SAD alliance partner",
      },
    ],
    strategicConsiderations: {
      considerations: [
        "SAD hold demonstrates continued relevance in Malwa",
        "AAP needs to convert 2nd place to win",
        "Congress needs to rebuild from 3rd position",
      ],
    },
  },

  competitiveLandscape: {
    keyContenders: [
      {
        party: "SAD",
        position: "Incumbent",
        notes: "Traditional stronghold",
      },
      {
        party: "AAP",
        position: "Strong 2nd",
        notes: "2022 anti-AAP wave did not fully penetrate",
      },
      {
        party: "Congress",
        position: "3rd place",
        notes: "Lost to SAD, needs rebuild",
      },
      {
        party: "BJP",
        position: "Limited base",
        notes: "SAD alliance partner",
      },
    ],
    strategicConsiderations: {
      considerations: [
        "SAD won in 2022 showing they retained core support",
        "Congress candidate (ex-military) got significant votes",
        "AAP wave did not fully penetrate this constituency",
      ],
    },
  },

  // ==========================================================================
  // INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      { item: "Exact 2022 vote shares and margin", verified: false },
      { item: "2017 winner and results", verified: false },
      { item: "Caste demographics at constituency level", verified: false },
      { item: "Local influential families", verified: false },
      { item: "MLA's performance and constituency work", verified: false },
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    dossierId: "AC068-Dakha",
    topic: "Dakha Assembly Constituency (AC068), Punjab",
    tier: 2,
    dataCurrency: "As of May 2026 | Election Data: 2022",
    sourcesConsulted: [
      "Web search",
      "Wikipedia",
      "IndiaVotes",
      "ADR Report",
      "India Today",
    ],
    verificationStatus:
      "PARTIALLY VERIFIED - Winner confirmed but vote share needs verification",
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Exact 2022 vote shares and margin",
        "2017 winner and results",
        "Caste demographics at constituency level",
        "Local influential families",
        "MLA's performance and constituency work",
      ],
    },
  },

  // ==========================================================================
  // NOTES
  // ==========================================================================
  constituencyNotes: {
    notes: [
      "Rural seat requires rural-focused campaign",
      "Agriculture is key vote mobilizer",
      "Booth-level rural organizing crucial",
      "Candidate must live in constituency",
    ],
  },
};
