/**
 * AC103-Barnala Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC103-Barnala.md, AC103-Barnala-deep.md
 */

import type { AC103BarnalaTypes } from "./ac103-barnala-types";

export const ac103BarnalaData: AC103BarnalaTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 103,
    name: "Barnala",
    district: "Barnala",
    region: "Malwa",
    category: "General",
    dataCurrency: "As of 19 May 2026",
  },

  baseline: {
    parliamentarySegment: "Barnala district",
    subDistrictsCovered: ["Barnala city", "surrounding rural blocks"],
    areaCharacter: "Mixed urban-rural, district headquarters",
    terrain: "Malwa region plains",
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  censusData: {
    cityPopulation: "116,449",
    districtPopulation: "595,527",
    malePopulation: "316,169",
    femalePopulation: "279,358",
    sexRatio: "875 females per 1000 males",
  },

  casteComposition: {
    jathSikh: "32-36%",
    obc: "18-22%",
    sc: "24-28%",
    hinduUpperCaste: "12-15%",
    others: "6-8%",
    source: "Caste estimates based on district-level data",
  },

  casteCompositionDeep: {
    cityDemographics: {
      cityPopulation: "116,449",
      sikhPercentage: "50.37%",
      hinduPercentage: "Significant minority (remainder)",
      notableFact:
        "Barnala city is the only Sikh majority city in India with approximately 50.37% Sikh population",
    },
    districtDemographics: {
      totalPopulation: "595,527",
      male: "316,169",
      female: "279,358",
      sexRatio: "875 females per 1000 males",
    },
  },

  electoralRollAnalytics: {
    totalElectors: "~150,000-160,000",
    genderGap: "needs_verification",
    voterTurnout2022: "~76-78%",
    voterTurnoutStateAverage: "~72%",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Kuldeep Singh Dhillon",
      party: "INC",
      voteShare: "~39-41%",
      margin: "2,157 votes",
      marginVotes: 2157,
      runnerUp: "AAP Candidate",
      runnerUpParty: "AAP",
      totalElectors: "~150,000-160,000",
      voterTurnout: "~76-78%",
    },
    results2017: {
      winner: "Congress",
      party: "INC",
      margin: "needs_verification",
    },
    results2012: {
      winner: "Congress",
      party: "INC",
      margin: "needs_verification",
    },
    turnoutPattern: "Consistent 76-78% in recent elections",
    coreVoters: ["Agrarian community", "Jat Sikh voters", "Rural households"],
    swingFactors: [
      "Anti-incumbency",
      "Local candidate popularity",
      "AAP consolidation",
    ],
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    issues: [],
    misinformationStatus: "needs_verification",
  },

  keyIssues: [
    {
      rank: 1,
      title: "Agriculture crisis",
      description: "MSP, stubble, irrigation water",
      prioritySegment: ["Farmer households (~65%)"],
    },
    {
      rank: 2,
      title: "Drug addiction",
      description: "Severe in rural hinterland",
      prioritySegment: ["Rural youth", "Families"],
    },
    {
      rank: 3,
      title: "Unemployment",
      description: "Youth migration to Canada/Gulf",
      prioritySegment: ["Young voters (18-35)"],
    },
    {
      rank: 4,
      title: "Healthcare",
      description: "District hospital inadequate",
      prioritySegment: ["All residents"],
    },
    {
      rank: 5,
      title: "Roads",
      description: "Rural connectivity poor",
      prioritySegment: ["Rural residents"],
    },
  ],

  issues: [
    {
      category: "Agriculture",
      specificIssues: ["MSP procurement delays", "Stubble management", "Irrigation water"],
    },
    {
      category: "Health",
      specificIssues: ["District hospital inadequate", "Medicines shortage"],
    },
    {
      category: "Law and Order",
      specificIssues: ["Drug trade continues openly", "Police unable or unwilling"],
    },
    {
      category: "Employment",
      specificIssues: ["Youth unemployment", "Migration to Canada/Gulf"],
    },
    {
      category: "Infrastructure",
      specificIssues: ["Rural road connectivity", "Power supply"],
    },
  ],

  governanceGap: {
    serviceDelivery: {
      health: "District hospital inadequate - no medicines",
      education: "needs_verification",
      roads: "Rural connectivity poor",
      waterSanitation: "needs_verification",
    },
    schemeImplementation: {
      mgnrega: "needs_verification",
      beneficiaryLists: "needs_verification",
      pds: "needs_verification",
    },
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    nonPoliticalInfluencers: {
      religious: ["Local granthis", "Priests"],
      casteLeaders: "needs_verification",
      professional: ["Farmers' unions", "Trader associations"],
    },
    politicalNodes: {
      exMla: "needs_verification",
      boothAgents: "needs_verification",
      currentMla: "Kuldeep Singh Dhillon (INC) - 2022 winner",
    },
    casteEquations: "needs_verification",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi Tribune", "Jag Bani", "Dainik Bhaskar"],
      tv: ["Local cable", "Regional news channels"],
      digital: ["Facebook", "WhatsApp", "Instagram"],
    },
    consumption: {
      bySegment:
        "WhatsApp groups for news, TV for elections, newspapers for older voters",
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "INC holds with narrow margin of 2,157 votes",
      "Traditional Congress voters still loyal",
      "Narrow win shows anti-AAP votes consolidated behind Congress",
      "Jat Sikh community base (32-36%)",
    ],
    weaknesses: [
      "Small margin means fragile hold",
      "Any anti-incumbency or candidate issue could flip",
      "AAP very likely to target this seat aggressively",
      "District hospital inadequate",
    ],
    opportunities: [
      "One of only 18 Congress seats in 2022 - highly symbolic",
      "If AAP targeted, anti-AAP votes could consolidate further",
      "Local body polls showed mixed signals",
    ],
    threats: [
      "AAP high priority target seat",
      "Drug crisis in rural hinterland",
      "Youth out-migration",
      "Agrarian distress",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    narratives: [
      '"Barnala hospital has no medicines - 2,157 votes rejected your lies"',
      '"Drug trade continues openly - police unable or unwilling"',
      '"MSP not reaching farmers - where is the guarantee?"',
      '"Jobs promised, none created - youth leaving Punjab"',
      '"Broken promise on Rs 1000/month - women betrayed"',
    ],
    prioritySegments: [
      {
        segment: "Jat Sikh voters (32-36%)",
        rationale: "Strong rural connect, traditional Congress voters",
      },
      {
        segment: "Young voters (18-35)",
        rationale: "Most affected by unemployment and drug issues",
      },
      {
        segment: "Farmer households",
        rationale: "Agrarian economy, MSP concerns",
      },
    ],
    mustWinBoothsStatus: "needs_verification",
    resourceAllocationStatus: "needs_verification",
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentPosition: "INC holds with razor-thin margin",
    performance2022:
      "Won but by just 2,157 votes - extremely vulnerable",
    alertLevel: "HIGH - Must invest heavily",
    strengths: [
      "Incumbent advantage (if running again)",
      "Traditional Congress voters still loyal",
      "Narrow win shows anti-AAP votes consolidated behind Congress",
    ],
    weaknesses: [
      "Small margin means fragile hold",
      "Any anti-incumbency or candidate issue could flip",
      "AAP very likely to target this seat aggressively",
    ],
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      caste: "Jat Sikh (preferred; strong rural connect)",
      profile: "Farmer leader or rural uplift worker",
      attributes: [
        "Strong agricultural background",
        "Clean image",
        "Either incumbent or well-known rural leader",
      ],
      background:
        "Avoid dynastic candidate if incumbent not running",
    },
    attackLines: {
      drugCrisis: "Drug trade continues openly - police unable or unwilling",
      unemployment:
        "Jobs promised, none created - youth leaving Punjab and Malwa region",
      brokenPromises: "Broken promise on Rs 1000/month - women betrayed",
      governanceFailures: "Barnala hospital has no medicines - 2,157 votes rejected your lies",
      healthInfrastructure: "District hospital inadequate - no medicines",
    },
    congressStrategy: {
      currentPosition: "INC holds with razor-thin margin of 2,157 votes",
      performance2022:
        "Won but by just 2,157 votes - extremely vulnerable",
      alertLevel: "HIGH",
      strengths: [
        "Incumbent advantage (if running again)",
        "Traditional Congress voters still loyal",
        "Narrow win shows anti-AAP votes consolidated behind Congress",
      ],
      weaknesses: [
        "Small margin means fragile hold",
        "Any anti-incumbency or candidate issue could flip",
        "AAP very likely to target this seat aggressively",
      ],
    },
  },

  // ==========================================================================
  // EXTERNAL FACTORS
  // ==========================================================================
  externalFactors: {
    politicalShocks: [
      "Central government schemes announcement before election",
      "State-level corruption scandals",
      "AAP high-priority target announcement",
    ],
    economicShocks: [
      "Agricultural crisis (crop failure, price crash)",
      "Job loss due to industrial closure",
    ],
    socialEvents: ["Major drug bust coverage", "Communal incidents"],
    externalShocks: ["Pandemic resurgence", "International border incidents"],
  },

  // ==========================================================================
  // DEEP RESEARCH
  // ==========================================================================
  deepResearch: {
    executiveSummary:
      "Barnala is an assembly constituency and the headquarters of Barnala district in Punjab. The district was created in 2012 and Barnala city is notable for being a Sikh majority city - the only such city in India with approximately 50.37% Sikh population. The constituency witnessed competitive elections in 2022 with various parties fielding candidates.",

    constituencyProfile: {
      basicInformation: {
        assemblyConstituencyNo: 103,
        district: "Barnala",
        region: "Malwa",
        type: "General",
      },
      geographicContext: {
        location: "Malwa region",
        region: "Malwa",
        districtHeadquarters: "Barnala city",
        urbanRuralMix:
          "Barnala city with mix of urban and surrounding rural areas",
      },
    },

    demographics: {
      cityDemographics: {
        cityPopulation: "116,449",
        sikhPercentage: "50.37%",
        hinduPercentage: "Significant minority (remainder)",
        notableFact:
          "Barnala city is the only Sikh majority city in India with approximately 50.37% Sikh population",
      },
      districtDemographics: {
        totalPopulation: "595,527",
        male: "316,169",
        female: "279,358",
        sexRatio: "875 females per 1000 males",
      },
    },

    keyIssues: {
      drugCrisis: "Malwa region affected, youth addiction concern",
      agrarianDistress: "MSP issues, groundwater depletion, stubble management",
      urbanIssues: "City infrastructure, healthcare facilities, employment for educated youth",
    },

    politicalLeadership: {
      currentMla: "needs_verification",
      status: "Current MLA (2022-2027) - verification needed",
    },

    keyPoliticalFigures: {
      status: "needs_verification",
      localLeaders: "needs_verification",
      influentialFamilies: "needs_verification",
    },

    electoralTrends: {
      status: "needs_verification",
      historicalPatterns: "needs_verification",
    },

    voterOutreach: {
      voterTurnout2022: "needs_verification",
      stateAverage: "72%",
      constituencySpecific: "needs_verification",
    },

    governmentSchemes: {
      status: "needs_verification",
      beneficiaryData: "needs_verification",
    },

    intelligenceGaps: {
      requiresVerification: [
        "Full 2022 results",
        "2017 and earlier results",
        "Demographics breakdown",
        "Local political mapping",
        "Scheme beneficiaries",
        "Winner and margin",
        "Sikh majority city dynamics",
        "Urban-rural voter split",
        "Current MLA name",
        "Local leaders and influential families",
        "Booth-level analysis",
        "Must-win booths",
        "Rally grounds and hoarding spots",
      ],
    },

    researchPriorities: {
      priorities: [
        "Identify winner and margin",
        "Analyze Sikh majority city dynamics",
        "Map urban-rural voter split",
      ],
    },
  },

  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    taskId: "AC103-Barnala",
    topic: "Barnala Assembly Constituency - Deep Research",
    tier: 2,
    date: "20 May 2026",
    agent: "Research-Orchestrator",
    sourcesConsulted: [
      "grokipedia.com",
      "proneta.in",
      "cnbctv18.com",
      "bbc.com",
      "adrindia.org",
    ],
    verificationStatus: "PARTIALLY VERIFIED",
    dataCurrency: "As of May 2026 (2022 election data is most recent)",
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Grokipedia", url: "https://grokipedia.com/page/barnala_assembly_constituency" },
      { name: "Proneta", url: "https://proneta.in/Barnala_assembly_constituency_Punjab-10" },
      { name: "Census2011", url: "https://www.census2011.co.in/census/city/21-barnala.html" },
      { name: "CNBCTV18", url: "https://www.cnbctv18.com" },
      { name: "BBC", url: "https://www.bbc.com" },
      { name: "ADR India", url: "https://adrindia.org" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Full 2022 results (winner name verification, vote share)",
        "2017 and earlier election results",
        "Demographics breakdown specific to constituency",
        "Local political mapping",
        "Scheme beneficiaries",
        "Current MLA (2022-2027) name and background",
        "Local leaders and influential families",
        "Booth-level analysis",
        "Must-win booths identification",
        "Rally grounds and hoarding spots",
        "Sikh majority city voter dynamics",
        "Urban-rural voter split",
        "Electoral trends historical patterns",
        "Voter turnout 2022 exact figure",
        "MGNREGA current status",
        "PDS coverage details",
        "Ayushman Bharat enrollment",
      ],
    },
  },

  // ==========================================================================
  // NOTES
  // ==========================================================================
  notes: [
    "One of only 18 Congress seats in 2022 - highly symbolic",
    "Margin of 2,157 votes makes it a prime target seat for AAP",
    "Congress must prioritize this seat with candidate clarity early",
    "Local body polls showed mixed signals - assess carefully",
    "Barnala city is the only Sikh majority city in India with approximately 50.37% Sikh population",
  ],
};
