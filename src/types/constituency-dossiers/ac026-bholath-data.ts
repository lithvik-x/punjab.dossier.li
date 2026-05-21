/**
 * AC026-Bholath Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC026-Bholath.md, AC026-Bholath-deep.md
 */

import type { AC026BholathTypes } from "./ac026-bholath-types";

export const ac026BholathData: AC026BholathTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 26,
    name: "Bholath",
    district: "Kapurthala",
    region: "Doaba",
    lokSabha: "Hoshiarpur",
    type: "General",
    totalElectors2022: "136,413",
    date: "20 May 2026",
  },

  baseline: {
    tehsil: "Bholath",
    areaCharacter: "Agricultural area with historical significance, rural character with tehsil headquarters",
    keyIdentifiers: {
      doabaRegion: "Between Beas and Satluj rivers",
      agricultural: "Wheat, paddy cultivation",
      scPopulation: "Kapurthala district ~33.94% SC population",
    },
    geographicNotes:
      "Bholath is located in Kapurthala district in the Doaba region. The area is characterized by agriculture and has historical significance. The constituency is named after the town of Bholath.",
  },

  historicalContext: {
    historicalSignificance:
      "Bholath is an old town and tehsil with administrative significance in Kapurthala district",
    localHeritage: [
      "Tehsil headquarters administration",
      "Agricultural tradition",
      "Doaba region identity",
    ],
    religiousImportance:
      "Area has mixed religious composition with Sikh majority",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  religiousComposition: {
    sikh: "~60% (approximate - district has significant Hindu population)",
    hindu: "~38% (approximate)",
    other: "<2%",
  },

  casteCompositionDeep: {
    scPopulation: "33.94% (Kapurthala district average)",
    jatSikh: "Rural majority",
    khatriArora: "Urban business",
    obc: "Tarkhan, Kashyap communities",
  },

  townDemographics: {
    bhulathTehsil: "Rural character with agricultural villages",
    scPopulationTehsil: "17,394 in Bhulath tehsil alone",
    literacy: "[NEEDS VERIFICATION]",
  },

  electoralRollAnalytics: {
    totalElectors2022: "136,413",
    voterTurnout2022: "~67-69% (estimated)",
    voterTurnout2017: "~74-76%",
    genderGap: "[NEEDS VERIFICATION]",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Sukhapal Singh Khaira",
      party: "Indian National Congress",
      votes: "[DATA NEEDS VERIFICATION]",
      voteShare: "~43% (estimated)",
      margin: "9,225 votes",
      marginVotes: 9225,
      runnerUp: "[NEEDS VERIFICATION]",
      runnerUpParty: "[NEEDS VERIFICATION]",
      runnerUpVotes: "[NEEDS VERIFICATION]",
      totalElectors: "136,413",
      voterTurnout: "~67-69% (estimated)",
      note: "Congress hold - Sukhapal Singh Khaira is 3-term MLA; Khaira switched from AAP to Congress",
    },
    results2017: {
      winner: "Sukhapal Singh Khaira",
      party: "Aam Aadmi Party",
      status: "needs_verification",
    },
    results2012: {
      winner: "Bibi Jagir Kaur",
      party: "SAD",
      votes: "49,392",
      runnerUp: "Sukhapal Singh Khaira",
      runnerUpParty: "INC",
      runnerUpVotes: "42,387",
    },
    turnoutPattern: "Voter turnout declined from 74-76% (2017) to ~67-69% (2022)",
    historicalTrend:
      "Congress stronghold with Sukhapal Singh Khaira winning multiple terms. 2022: Congress win with 9,225 margin. Khaira founded Punjab Ekta Party after leaving AAP, then joined Congress.",
    coreVoters: [
      "Jat Sikh voters (Khaira base)",
      "Rural agricultural community",
      "General category voters",
    ],
    swingFactors: [
      "Khaira family political influence",
      "Caste consolidation among Jats",
      "Anti-incumbency against 3-term MLA",
      "AAP government's state policies",
    ],
  },

  casteComposition: {
    source:
      "Doaba region with significant SC population; Bholath is a General constituency",
    jatSikh: "~35-40%",
    sc: "~30-35% (Mazhabi/Ramdasia)",
    obc: "~15-18%",
    hinduUpper: "~10-12%",
    other: "~5%",
    notes:
      "Doaba region known for agricultural community; Jat Sikh dominance in rural areas; SC population significant but not decisive in this General seat",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    currentMood:
      "Stable but Watchful - Bholath has been Congress bastion with Sukhapal Singh Khaira winning multiple terms. Anti-incumbency possible given 3 terms.",
    sentimentDrivers: [
      "Local Leadership: Khaira factor significant",
      "Caste Dynamics: Jat Sikh + general category mix",
      "Agricultural Issues: MSP,佃权, input costs",
      "Development: Local infrastructure",
      "Youth: Employment concerns",
    ],
    grievances2024_2025: [
      "Road infrastructure",
      "Agricultural distress",
      "Healthcare facilities",
      "Employment opportunities",
    ],
    mlaSatisfaction:
      "Sukhapal Singh Khaira (Congress MLA) - 3-term MLA with strong local influence",
    issues: [
      {
        rank: 1,
        title: "Agriculture",
        description: "Farmer distress, MSP procurement,佃权 (tenant rights), input costs",
        prioritySegment: ["Rural voters", "Agricultural households"],
      },
      {
        rank: 2,
        title: "Infrastructure",
        description: "Roads in rural areas, Bholath town municipality needs",
        prioritySegment: ["Rural villages", "Bholath town residents"],
      },
      {
        rank: 3,
        title: "Healthcare",
        description: "CHC upgrade needed, healthcare access in rural areas",
        prioritySegment: ["Rural population", "SC communities"],
      },
      {
        rank: 4,
        title: "Education",
        description: "Higher education access for rural youth",
        prioritySegment: ["Youth (18-35)", "Rural families"],
      },
      {
        rank: 5,
        title: "Jobs",
        description: "Youth employment opportunities",
        prioritySegment: ["Young voters", "Educated unemployed youth"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  activeSchemes: {
    meraGharMeraMaan: "Active AAP government scheme",
    ashirwadScheme: "Active SC welfare scheme",
    aamAadmiClinics: "Active AAP government healthcare initiative",
    freeElectricity: "Active AAP government initiative",
  },

  developmentGaps: {
    bholathTownInfrastructure: "Bholath town infrastructure needs development",
    ruralRoadNetwork: "Rural road network connectivity to Kapurthala and Phagwara needs improvement",
    agriculturalResearch: "Agricultural research and extension services minimal",
    skillCenters: "Skill development programs insufficient for youth employment",
  },

  serviceDelivery: {
    health: "CHC level facilities; rural healthcare access limited",
    education: "[NEEDS VERIFICATION]",
    roads: "Roads to Kapurthala and Phagwara; village road connectivity needs improvement",
    waterSanitation: "[NEEDS VERIFICATION]",
  },

  schemeImplementation: {
    scWelfare: "SC schemes active but delivery assessment needed",
    beneficiaryLists:
      "[NEEDS VERIFICATION - complaints about inclusion/exclusion errors expected]",
    pds: "PDS ration cards distributed; fair price shops operational [NEEDS VERIFICATION]",
  },

  issues: [
    {
      category: "Agriculture",
      specificIssues: [
        "MSP procurement issues",
        "佃权 (tenant rights)",
        "Rural agricultural distress",
        "Canal irrigation",
        "Input costs",
      ],
    },
    {
      category: "Infrastructure",
      specificIssues: [
        "Bholath town municipality needs",
        "Rural road connectivity",
        "Market facilities",
        "Flood protection (Beas river)",
      ],
    },
    {
      category: "Healthcare",
      specificIssues: [
        "CHC facilities upgrade needed",
        "Healthcare access in rural areas",
        "Drug rehabilitation",
      ],
    },
    {
      category: "Employment",
      specificIssues: [
        "Youth jobs",
        "Skills training",
        "Industrial growth needed",
        "Educated unemployment",
      ],
    },
    {
      category: "Governance",
      specificIssues: [
        "Bibi Jagir Kaur factor - former MLA with strong local influence",
        "Drug crisis in Doaba region",
        "Congress party organization",
      ],
    },
  ],

  bholathSpecificIssues: {
    townMunicipality: "Bholath town municipality needs civic infrastructure development",
    marketFacilities: "Agricultural market facilities need improvement for farmers",
    floodProtection: "Flood protection needed for Beas river area villages",
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalActors: {
      incumbentMLA: "Sukhapal Singh Khaira (Congress)",
      congressLeaders: "needs_verification",
      sadLeaders: "needs_verification",
      bjpLeaders: "needs_verification",
    },
    communityInfluencers: {
      khairaFamily: "Political dynasty factor - Khaira family's political influence",
      jatSikhElders: "Caste influence in rural areas",
      sarpanches: "Village-level authority in rural constituencies",
      exServicemen: "Veterans community influence",
    },
    seatHoldingParty: "Congress",
    decisiveVoterGroup: "Jat Sikh voters",
    religiousFactor: "Important - Doaba region identity significant",
    casteConsolidationKey: true,
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi press"],
      cableTv: ["Cable TV", "Regional news channels"],
      digital: ["WhatsApp networks", "Facebook", "Instagram"],
    },
    informationChannels: {
      districtPress: ["District newspapers"],
      cableOperators: ["Local cable operators"],
      politicalWhatsAppGroups: ["Political WhatsApp groups"],
    },
    consumption: {
      bySegment:
        "WhatsApp groups for news; Punjabi press for older voters; Cable TV for regional news",
    },
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyLocations: {
      bholathTown: "Tehsil headquarters and main town",
      agriculturalVillages: "Surrounding agricultural villages",
      beasRiverArea: "River area with flooding vulnerability",
      tehsilComplex: "Administrative center",
    },
    infrastructure: {
      roads: "Roads to Kapurthala and Phagwara; river flooding vulnerability",
      riverFlooding: "Beas river flooding affects nearby villages",
      healthcare: "CHC level facilities",
      education: "needs_verification",
    },
    campaignInfrastructure: {
      rallyGrounds: "[NEEDS VERIFICATION]",
      hoardingSpots: "[NEEDS VERIFICATION]",
    },
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: [
      {
        factor: "Khaira Family",
        description: "Succession/dynasty issue - Khaira may not continue; family nominee scenario",
      },
      {
        factor: "Congress-SAD Alliance",
        description: "Would affect local dynamics dramatically",
      },
      {
        factor: "Candidate Selection",
        description: "Both parties' candidate selection crucial",
      },
      {
        factor: "Local Issues",
        description: "Flooding from Beas river could become major issue",
      },
    ],
    triggers: [
      {
        trigger: "Monsoon/Flooding",
        description: "Beas river flooding could mobilize affected voters",
      },
      {
        trigger: "Agricultural Crisis",
        description: "Farmers' distress could shift rural voter sentiment",
      },
      {
        trigger: "Government Scheme Delivery",
        description: "Major scheme delivery announcements could swing sentiment",
      },
      {
        trigger: "Local Development Announcements",
        description: "Development projects for Bholath tehsil",
      },
    ],
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "Congress stronghold",
      "Strong local leadership (Khaira family)",
      "Agricultural base",
      "Doaba region identity",
      "Khaira demonstrated cross-party appeal",
    ],
    weaknesses: [
      "Limited industrial development",
      "Infrastructure gaps in Bholath town",
      "AAP government (state opposition)",
      "No major schemes specifically for area",
      "Anti-incumbency against 3-term MLA",
    ],
    opportunities: [
      "Agri-processing units",
      "River-front development",
      "NRI investment",
      "Tourism potential",
      "Industrial growth from connectivity",
    ],
    threats: [
      "AAP government schemes",
      "Anti-incumbency against Khaira",
      "Family dynasty perception",
      "Rural distress",
      "Bibi Jagir Kaur's continued local influence (SAD)",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congressStrategy: {
      candidate: "Khaira or family nominee (incumbent advantage)",
      casteStrategy: "Jat Sikh + general category consolidation",
      issues: ["Local development", "Agriculture", "Jobs"],
      campaign: "Stronghold defense - Khaira factor utilization",
      familyFactor: "Khaira family political organization strength",
    },
    aapStrategy: {
      candidate: "Strong local candidate against Khaira",
      casteStrategy: "SC voters + urban population",
      issues: ["AAP schemes", "Anti-incumbency against Congress"],
      campaign: "Congress neglected area for 5 years",
    },
    targetSegments: [
      {
        segment: "Rural Jat Sikh",
        description: "Khaira base - decisive in General seat",
      },
      {
        segment: "SC Voters",
        description: "Potential shift - Mazhabi/Ramdasia communities",
      },
      {
        segment: "Youth",
        description: "Employment concerns - educated unemployed",
      },
      {
        segment: "Agricultural Community",
        description: "MSP,佃权, input costs concerns",
      },
    ],
    keyMessages: [
      {
        narrative: "SAD's Bibi Jagir Kaur: Dynasty politics, no vision for Bholath",
        themes: [
          "Part of dynasty politics",
          "No vision for Bholath development",
          "Bibi Jagir Kaur's anti-development record",
        ],
      },
      {
        narrative: "BJP-SAD alliance: Failed to deliver for 10 years (2012-2022)",
        themes: [
          "Failed to deliver for Bholath",
          "Neglected infrastructure",
          "No industrial growth",
        ],
      },
      {
        narrative: "Drug crisis: SAD-BJP government allowed drugs to flourish",
        themes: [
          "Doaba region vulnerable to drug crisis",
          "SAD-BJP government failure",
          "Need for clean governance",
        ],
      },
      {
        narrative: "No development: Bholath lacks basic infrastructure",
        themes: [
          "Town infrastructure neglected",
          "Rural roads poor",
          "Healthcare inadequate",
        ],
      },
      {
        narrative: "Farmer distress: SAD government was anti-farmer",
        themes: [
          "MSP not given due priority",
          "佃权 issues unaddressed",
          "Agricultural distress ignored",
        ],
      },
    ],
    mustWinBoothsStatus: "needs_verification",
    resourceAllocationStatus: "needs_verification",
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      caste: "Jat Sikh",
      casteCritical: false,
      profile: "Current MLA or political figure with experience, local connect",
      keyQualification:
        "Has demonstrated cross-party appeal; must consolidate both AAP and Congress voters",
      mustAddress: "Consolidate voter base; prevent anti-incumbency sentiment",
    },
    attackLines: {
      developmentFailure:
        "Sukhapal Singh Khaira: 3 terms but Bholath still lacks basic infrastructure",
      drugMenace:
        "Drug crisis in Doaba: Congress failed to address the menace despite being in power",
      reservationImplementation:
        "SC community neglected despite significant population",
      scStActViolations: "No justice for SC community under Congress rule",
      brokenPromises:
        "Development promises made in 2012, 2017, 2022 still unfulfilled",
    },
    congressStrategicPosition: {
      status: "FAVORABLE",
      incumbentName: "Sukhapal Singh Khaira (Congress)",
      margin: "9,225 votes (2022)",
      historicalPattern: [
        "2012: SAD (Bibi Jagir Kaur) won with 49,392 votes",
        "2017: AAP (Sukhapal Singh Khaira) won",
        "2022: Congress (Sukhapal Singh Khaira) won with 9,225 margin",
      ],
      challenge:
        "Congress needs to ensure Khaira doesn't switch parties again; need to retain him and consolidate vote bank; Bibi Jagir Kaur (SAD) still has local influence",
    },
  },

  // ==========================================================================
  // DATA GAPS
  // ==========================================================================
  dataGaps: {
    requiredVerification: [
      "2017 Assembly election detailed results",
      "Khaira family influence assessment",
      "Caste demographics for Bholath specifically",
      "Booth-level analysis",
      "Flood vulnerability data",
      "2022 election vote share details",
      "Runner-up candidate details 2022",
      "Bholath SC community details",
    ],
    intelligencePriorities: [
      "Khaira family organization strength",
      "AAP candidate identification for 2027",
      "Congress booth-level strength assessment",
      "SC voter alignment and swing potential",
      "Bibi Jagir Kaur's current influence on SAD",
      "Local development needs prioritization",
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Wikipedia" },
      { name: "Oneindia" },
      { name: "ECI (Election Commission of India) data" },
      { name: "Census 2011" },
      { name: "IndiaVotes.com" },
      { name: "MyNeta" },
      { name: "News18" },
      { name: "Punjab government websites" },
    ],
    researchStatus: {
      status: "partial",
      preparedFor: "Punjab Congress 2027 Election Intelligence",
      classification: "Internal Research Document",
    },
  },
};
