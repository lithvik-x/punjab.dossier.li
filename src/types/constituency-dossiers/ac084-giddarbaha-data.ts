/**
 * AC084-Giddarbaha Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC084-Giddarbaha.md, AC084-Giddarbaha-deep.md
 */

import type { AC084GiddarbahaTypes } from "./ac084-giddarbaha-types";

export const ac084GiddarbahaData: AC084GiddarbahaTypes = {
  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    microTaskId: "AC084",
    topic: "Giddarbaha Assembly Constituency",
    tier: 1,
    date: "20 May 2026",
    agent: "researcher",
    sourcesConsulted: ["Wikipedia", "IndiaVotes", "ECI data"],
    verificationStatus: "VERIFIED",
    dataCurrency: "As of 20 May 2026",
  },

  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 84,
    name: "Giddarbaha",
    district: "Sri Muktsar Sahib",
    region: "Malwa",
    type: "General",
    lokSabhaSeat: "Faridkot",
    date: "20 May 2026",
  },

  constituencyProfile: {
    assemblyConstituencyNo: 84,
    district: "Sri Muktsar Sahib (Muktsar)",
    region: "Malwa (South-West Punjab)",
    category: "GEN",
    parliamentaryConstituency: "Firozpur",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  casteComposition: {
    sikkMajority: "~70-75%",
    hinduMinority: "~25-30%",
    jatSikh: "~30-35%",
    scPopulation: "~25-28%",
    obc: "~12-15%",
  },

  casteCompositionDeep: {
    jatSikh: "~40-45% (dominant)",
    hinduGeneral: "~25-30%",
    scheduledCastes: "~20-23%",
    otherBackwardClasses: "~5-8%",
    muslim: "~1-2%",
  },

  religionDistribution: {
    sikh: "~71%",
    hindu: "~27%",
    others: "~2%",
    source: "District level - Muktsar",
  },

  voterDemographics: {
    totalElectors: "~148,000",
    voterTurnout: "~77-78%",
    areaCharacter: "Rural constituency with small towns",
  },

  demographicsCensus2011: {
    total: "~1,90,000 [APPROXIMATION]",
    status: "needs_verification",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Amrinder Singh Raja Warring",
      party: "Indian National Congress (INC)",
      voteShare: "~41% (estimated)",
      margin: "1,349 votes (VERY CLOSE)",
      runnerUp: "Pritpal Sharma",
      runnerUpParty: "AAP",
      totalVotesPolled: "~147,000",
      voterTurnout: "~77-78%",
    },
    results2017: {
      winner: "Amrinder Singh Raja Warring",
      party: "Indian National Congress (INC)",
      margin: "16,212 votes",
      totalElectors: "~148,000",
    },
    results2012: {
      winner: "Amrinder Singh Raja Warring",
      party: "Indian National Congress (INC)",
    },
    historyEntries: [
      {
        year: 2022,
        winner: "Amrinder Singh Raja Warring",
        party: "INC",
        margin: "1,349 votes",
        status: "verified",
      },
      {
        year: 2017,
        winner: "Amrinder Singh Raja Warring",
        party: "INC",
        margin: "16,212 votes",
        status: "verified",
      },
      {
        year: 2012,
        winner: "Amrinder Singh Raja Warring",
        party: "INC",
        margin: "",
        status: "verified",
      },
    ],
  },

  deepElectionResults: {
    winner: "[NEEDS VERIFICATION - candidate name and margin]",
    party: "AAP",
    turnout: "~76-78% [ESTIMATE]",
    totalElectors: "~1,80,000 [APPROXIMATION]",
    status: "needs_verification",
  },

  // ==========================================================================
  // POLITICAL CONTEXT
  // ==========================================================================
  politicalSignificance: {
    incumbentName: "Amrinder Singh Warring",
    politicalContext:
      "Amrinder Singh Warring's seat - Young Congress leader, won 3 consecutive terms",
    marginSignificance:
      "Very narrow margin in 2022 - AAP almost won",
    partyBastion: "Congress bastion - Warring family influence",
  },

  politicalParties: {
    winner: "Indian National Congress (INC)",
    runnerUp: "AAP",
    margin: "1,349 votes",
    marginCategory: "close",
  },

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: [
    {
      rank: 1,
      title: "Drug menace",
      description:
        "Muktsar district sees significant drug seizures - major concern for rural youth",
    },
    {
      rank: 2,
      title: "Agricultural issues",
      description: "Cotton/wheat cultivation problems - MSP procurement concerns",
    },
    {
      rank: 3,
      title: "Employment",
      description: "Limited industrial growth - youth unemployment",
    },
    {
      rank: 4,
      title: "Rural development",
      description: "Infrastructure gaps in roads, electricity, healthcare",
    },
    {
      rank: 5,
      title: "Water resources",
      description: "Irrigation challenges - groundwater depletion",
    },
  ],

  keyIssuesAndGrievances: {
    primaryIssues: [
      {
        rank: 1,
        title: "Agricultural Distress",
        description:
          "Small farmer issues, MSP, canal water - cotton/wheat cultivation problems",
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description:
          "Youth addiction - Malwa region problem - significant seizures in Muktsar district",
      },
      {
        rank: 3,
        title: "Unemployment",
        description: "Limited industrial development - limited job opportunities",
      },
      {
        rank: 4,
        title: "Rural Infrastructure",
        description: "Roads, electricity, healthcare gaps",
      },
      {
        rank: 5,
        title: "Groundwater Depletion",
        description: "Agricultural sustainability concerns",
      },
    ],
    attackLinesForCongress: [
      "AAP failed to address core issues",
      "Broken promises",
      "Governance failures",
      "Drug crisis continues",
    ],
  },

  deepKeyIssues: {
    agriculturalDistress: [
      "Small farmer issues",
      "MSP (Minimum Support Price) procurement",
      "Canal water availability",
    ],
    drugCrisis: [
      "Youth addiction",
      "Malwa region problem",
      "Significant seizures in Muktsar district",
    ],
    unemployment: [
      "Limited industrial development",
      "Limited job opportunities for youth",
    ],
    ruralInfrastructure: ["Roads", "Electricity", "Healthcare facilities"],
    groundwaterDepletion: [
      "Agricultural sustainability concerns",
      "Irrigation challenges",
    ],
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentPosition: "INC holds this seat",
    incumbentName: "Amrinder Singh Raja Warring",
    margin2022: "ONLY 1,349 votes - VULNERABLE seat for Congress",
    vulnerabilityAssessment:
      "This is a VULNERABLE seat for Congress - AAP finished very close",
    challenges: [
      "Warring is young but has strong base",
      "AAP finished very close - anti-incumbency risk",
      "Need to strengthen rural outreach",
    ],
    strategicFocus: [
      "Focus on development work done",
      "Strengthen rural outreach",
      "Address anti-incumbency concerns",
    ],
  },

  congressStrategyDeep: {
    currentPosition: "Congress needs to identify strong local candidate",
    candidateRequirement: "Local candidate with rural connect",
    primaryNarrative: "AAP failed on delivery",
    targetVoters: ["Rural voters", "Farmers", "Youth"],
    grievanceFocus: [
      "Drug crisis",
      "Agricultural distress",
      "Broken promises",
    ],
  },

  // ==========================================================================
  // RECOMMENDED CANDIDATE
  // ==========================================================================
  recommendedCandidate: {
    profile: "Incumbent Warring or similar young leader",
    background: "Agricultural + political family",
    keyTraits: ["Accessible", "Strong grassroots connect"],
    targetVoter: ["Rural voters", "Jat Sikh community"],
  },

  candidateProfileDeep: {
    profile: "Strong rural connect, agricultural background",
    casteBackground: "Jat Sikh preferred",
    keyQualities: ["Young leader", "Political family background", "Grassroots connect"],
    ruralConnect: "Essential - rural constituency",
  },

  // ==========================================================================
  // ATTACK LINES
  // ==========================================================================
  attackLines: {
    drugCrisis: "Drug deaths continue despite tall claims",
    unemployment: "Youth have no jobs, promises broken",
    brokenPromises: "AAP failed to deliver on guarantees",
    governanceFailures: "Governance collapsed at grassroots level",
    healthFacilities: "Health facilities pathetic in rural areas",
  },

  attackLinesDeep: {
    coreMessage: "AAP failed to deliver",
    drugDeaths: "Drug deaths continue despite tall claims",
    youthUnemployment: "Youth have no jobs, promises broken",
    agriculturalCrisis: "Agricultural crisis deepens",
    healthFacilities: "Health facilities pathetic in rural areas",
    governanceCollapse: "Governance collapsed at grassroots level",
  },

  // ==========================================================================
  // POLITICAL PLAYERS & INFLUENCERS
  // ==========================================================================
  politicalPlayers: {
    keyPoliticalFamilies: "[NEEDS VERIFICATION - local influential families]",
    status: "needs_verification",
  },

  influencersDeep: {
    traditionalVotingPatterns: "Traditional voting patterns suggest Congress/SAD base",
    congressBase: "Congress support base",
    sadBase: "SAD support base",
  },

  // ==========================================================================
  // 2027 OUTLOOK
  // ==========================================================================
  outlook2027: {
    congressStrategy:
      "Need to identify strong local candidate, focus on anti-incumbency against AAP, rural and agricultural focus",
    keyWinningStrategy: [
      {
        element: "Candidate",
        description: "Strong local candidate",
      },
      {
        element: "Primary Narrative",
        description: "AAP failed to deliver",
      },
      {
        element: "Target Voters",
        description: "Rural voters, farmers, youth",
      },
      {
        element: "Grievance Focus",
        description: "Drug crisis, agricultural distress, broken promises",
      },
    ],
  },

  // ==========================================================================
  // INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      { topic: "2022 exact winner and margin", status: "needs_verification" },
      { topic: "2017 and earlier results", status: "needs_verification" },
      { topic: "Local political families", status: "needs_verification" },
      { topic: "Booth-wise analysis", status: "needs_verification" },
      { topic: "Current MLA's performance", status: "needs_verification" },
    ],
    summary:
      "The following information requires verification: 2022 exact winner and margin, 2017 and earlier results, local political families, booth-wise analysis, current MLA's performance",
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Gidderbaha_Assembly_constituency",
      },
      {
        name: "IndiaVotes",
        url: "https://www.indiavotes.com/vidhan-sabha/2017/punjab/251/7",
      },
      {
        name: "Elections.in",
        url: "https://www.elections.in/punjab/assembly-constituencies/gidderbaha.html",
      },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "2022 exact winner and margin",
        "2017 and earlier results",
        "Local political families",
        "Booth-wise analysis",
        "Current MLA's performance",
        "Caste demographics specific to constituency",
        "Electorate numbers",
      ],
    },
    metadata: {
      microTaskId: "AC084",
      topic: "Giddarbaha Assembly Constituency - Deep Research",
      tier: 2,
      date: "20 May 2026",
      agent: "Constituency-Research-Agent",
      sourcesConsulted: [
        "Web searches on Punjab 2022 election results, demographics, issues",
      ],
      verificationStatus: "PARTIALLY VERIFIED",
      dataCurrency: "As of May 2026",
    },
  },

  // ==========================================================================
  // COMBINED DATA STRUCTURES
  // ==========================================================================
  mainDossier: {
    identity: {
      acNumber: 84,
      name: "Giddarbaha",
      district: "Sri Muktsar Sahib",
      region: "Malwa",
      type: "General",
      lokSabhaSeat: "Faridkot",
      date: "20 May 2026",
    },
    electionHistory: {
      results2022: {
        winner: "Amrinder Singh Raja Warring",
        party: "Indian National Congress (INC)",
        voteShare: "~41% (estimated)",
        margin: "1,349 votes (VERY CLOSE)",
        runnerUp: "Pritpal Sharma",
        runnerUpParty: "AAP",
        totalVotesPolled: "~147,000",
        voterTurnout: "~77-78%",
      },
      results2017: {
        winner: "Amrinder Singh Raja Warring",
        party: "Indian National Congress (INC)",
        margin: "16,212 votes",
        totalElectors: "~148,000",
      },
      results2012: {
        winner: "Amrinder Singh Raja Warring",
        party: "Indian National Congress (INC)",
      },
      historyEntries: [
        {
          year: 2022,
          winner: "Amrinder Singh Raja Warring",
          party: "INC",
          margin: "1,349 votes",
          status: "verified",
        },
        {
          year: 2017,
          winner: "Amrinder Singh Raja Warring",
          party: "INC",
          margin: "16,212 votes",
          status: "verified",
        },
        {
          year: 2012,
          winner: "Amrinder Singh Raja Warring",
          party: "INC",
          margin: "",
          status: "verified",
        },
      ],
    },
    politicalSignificance: {
      incumbentName: "Amrinder Singh Warring",
      politicalContext:
        "Amrinder Singh Warring's seat - Young Congress leader, won 3 consecutive terms",
      marginSignificance:
        "Very narrow margin in 2022 - AAP almost won",
      partyBastion: "Congress bastion - Warring family influence",
    },
    casteComposition: {
      sikkMajority: "~70-75%",
      hinduMinority: "~25-30%",
      jatSikh: "~30-35%",
      scPopulation: "~25-28%",
      obc: "~12-15%",
    },
    voterDemographics: {
      totalElectors: "~148,000",
      voterTurnout: "~77-78%",
      areaCharacter: "Rural constituency with small towns",
    },
    keyLocalIssues: [
      {
        rank: 1,
        title: "Drug menace",
        description:
          "Muktsar district sees significant drug seizures - major concern for rural youth",
      },
      {
        rank: 2,
        title: "Agricultural issues",
        description: "Cotton/wheat cultivation problems - MSP procurement concerns",
      },
      {
        rank: 3,
        title: "Employment",
        description: "Limited industrial growth - youth unemployment",
      },
      {
        rank: 4,
        title: "Rural development",
        description: "Infrastructure gaps in roads, electricity, healthcare",
      },
      {
        rank: 5,
        title: "Water resources",
        description: "Irrigation challenges - groundwater depletion",
      },
    ],
    congressStrategicPosition: {
      currentPosition: "INC holds this seat",
      incumbentName: "Amrinder Singh Raja Warring",
      margin2022: "ONLY 1,349 votes - VULNERABLE seat for Congress",
      vulnerabilityAssessment:
        "This is a VULNERABLE seat for Congress - AAP finished very close",
      challenges: [
        "Warring is young but has strong base",
        "AAP finished very close - anti-incumbency risk",
        "Need to strengthen rural outreach",
      ],
      strategicFocus: [
        "Focus on development work done",
        "Strengthen rural outreach",
        "Address anti-incumbency concerns",
      ],
    },
    recommendedCandidate: {
      profile: "Incumbent Warring or similar young leader",
      background: "Agricultural + political family",
      keyTraits: ["Accessible", "Strong grassroots connect"],
      targetVoter: ["Rural voters", "Jat Sikh community"],
    },
    attackLines: {
      drugCrisis: "Drug deaths continue despite tall claims",
      unemployment: "Youth have no jobs, promises broken",
      brokenPromises: "AAP failed to deliver on guarantees",
      governanceFailures: "Governance collapsed at grassroots level",
      healthFacilities: "Health facilities pathetic in rural areas",
    },
    dataQuality: {
      sources: [
        {
          name: "Wikipedia",
          url: "https://en.wikipedia.org/wiki/Gidderbaha_Assembly_constituency",
        },
        {
          name: "IndiaVotes",
          url: "https://www.indiavotes.com/vidhan-sabha/2017/punjab/251/7",
        },
        {
          name: "Elections.in",
          url: "https://www.elections.in/punjab/assembly-constituencies/gidderbaha.html",
        },
      ],
      researchStatus: {
        status: "partial",
        verificationNeeded: [
          "2022 exact winner and margin",
          "2017 and earlier results",
          "Local political families",
          "Booth-wise analysis",
          "Current MLA's performance",
        ],
      },
      metadata: {
        microTaskId: "AC084",
        topic: "Giddarbaha Assembly Constituency",
        tier: 1,
        date: "20 May 2026",
        agent: "researcher",
        sourcesConsulted: ["Wikipedia", "IndiaVotes", "ECI data"],
        verificationStatus: "VERIFIED",
        dataCurrency: "As of 20 May 2026",
      },
    },
  },

  deepResearch: {
    executiveSummary: {
      overview:
        "Giddarbaha (AC084) is a General category assembly constituency located in Muktsar district of Punjab's Malwa region. The constituency is known for its agricultural base and has been traditionally contested between Congress and SAD. In 2022, AAP made significant inroads here.",
      politicalContext:
        "Very narrow margin in 2022 - AAP almost won this Congress bastion",
      keyTakeaway:
        "VULNERABLE seat for Congress - margin of only 1,349 votes in 2022",
    },
    constituencyProfile: {
      assemblyConstituencyNo: 84,
      district: "Sri Muktsar Sahib (Muktsar)",
      region: "Malwa (South-West Punjab)",
      category: "GEN",
      parliamentaryConstituency: "Firozpur",
    },
    demographics: {
      total: "~1,90,000 [APPROXIMATION]",
      status: "needs_verification",
    },
    casteCompositionDeep: {
      jatSikh: "~40-45% (dominant)",
      hinduGeneral: "~25-30%",
      scheduledCastes: "~20-23%",
      otherBackwardClasses: "~5-8%",
      muslim: "~1-2%",
    },
    religionDistribution: {
      sikh: "~71%",
      hindu: "~27%",
      others: "~2%",
      source: "District level - Muktsar",
    },
    electoralHistory: [
      {
        year: 2022,
        winner: "[NEEDS VERIFICATION]",
        party: "AAP",
        margin: "[VERIFY]",
        status: "needs_verification",
      },
      {
        year: 2017,
        winner: "[NEEDS DATA]",
        party: "",
        margin: "",
        status: "needs_verification",
      },
      {
        year: 2012,
        winner: "[NEEDS DATA]",
        party: "",
        margin: "",
        status: "needs_verification",
      },
    ],
    keyIssues: {
      agriculturalDistress: [
        "Small farmer issues",
        "MSP (Minimum Support Price) procurement",
        "Canal water availability",
      ],
      drugCrisis: [
        "Youth addiction",
        "Malwa region problem",
        "Significant seizures in Muktsar district",
      ],
      unemployment: [
        "Limited industrial development",
        "Limited job opportunities for youth",
      ],
      ruralInfrastructure: ["Roads", "Electricity", "Healthcare facilities"],
      groundwaterDepletion: [
        "Agricultural sustainability concerns",
        "Irrigation challenges",
      ],
    },
    politicalPlayers: {
      keyPoliticalFamilies: "[NEEDS VERIFICATION - local influential families]",
      status: "needs_verification",
    },
    voterProfile: {
      turnout2022: "~76-78%",
      areaCharacter: "Rural dominated constituency",
      ruralUrban: "Rural",
    },
    outlook2027: {
      congressStrategy:
        "Need to identify strong local candidate, focus on anti-incumbency against AAP, rural and agricultural focus",
      keyWinningStrategy: [
        {
          element: "Candidate",
          description: "Strong local candidate",
        },
        {
          element: "Primary Narrative",
          description: "AAP failed on delivery",
        },
        {
          element: "Target Voters",
          description: "Rural voters, farmers, youth",
        },
        {
          element: "Grievance Focus",
          description: "Drug crisis, agricultural distress, broken promises",
        },
      ],
    },
    intelligenceGaps: {
      gaps: [
        { topic: "2022 exact winner and margin", status: "needs_verification" },
        { topic: "2017 and earlier results", status: "needs_verification" },
        { topic: "Local political families", status: "needs_verification" },
        { topic: "Booth-wise analysis", status: "needs_verification" },
        { topic: "Current MLA's performance", status: "needs_verification" },
      ],
      summary:
        "The following information requires verification: 2022 exact winner and margin, 2017 and earlier results, local political families, booth-wise analysis, current MLA's performance",
    },
    congressStrategy: {
      currentPosition: "Congress needs to identify strong local candidate",
      candidateRequirement: "Local candidate with rural connect",
      primaryNarrative: "AAP failed to deliver",
      targetVoters: ["Rural voters", "Farmers", "Youth"],
      grievanceFocus: ["Drug crisis", "Agricultural distress", "Broken promises"],
    },
    dataQuality: {
      sources: [
        {
          name: "Web searches on Punjab 2022 election results",
          url: "",
        },
      ],
      researchStatus: {
        status: "partial",
        verificationNeeded: [
          "2022 exact winner and margin",
          "2017 and earlier results",
          "Local political families",
          "Booth-wise analysis",
          "Current MLA's performance",
        ],
      },
      metadata: {
        microTaskId: "AC084",
        topic: "Giddarbaha Assembly Constituency - Deep Research",
        tier: 2,
        date: "20 May 2026",
        agent: "Constituency-Research-Agent",
        sourcesConsulted: [
          "Web searches on Punjab 2022 election results, demographics, issues",
        ],
        verificationStatus: "PARTIALLY VERIFIED",
        dataCurrency: "As of May 2026",
      },
    },
  },
};

export type AC084GiddarbahaData = typeof ac084GiddarbahaData;
