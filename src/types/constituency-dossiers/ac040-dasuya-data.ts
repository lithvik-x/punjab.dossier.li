/**
 * AC040-Dasuya Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC040-Dasuya.md, AC040-Dasuya-deep.md
 */

import type { AC040DasuyaTypes } from "./ac040-dasuya-types";

export const ac040DasuyaData: AC040DasuyaTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 40,
    officialName: "Dasuya",
    name: "Dasuya",
    district: "Hoshiarpur",
    region: "Doaba",
    lokSabha: "Hoshiarpur",
    reservation: "None (General)",
    type: "General",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Hoshiarpur Lok Sabha constituency",
    location: "Border-adjacent constituency in Hoshiarpur district",
    areaCharacter: "Transitional between Doaba and Majha characteristics",
    borderArea: true,
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    formation: "Part of Hoshiarpur district in Punjab",
    historicalSignificance:
      "Dasuya is a historic town with religious and cultural importance; area transitional between Doaba and Majha regions",
    localHeritage: [
      "Agricultural tradition",
      "Religious sites",
      "Border trade area",
    ],
  },

  economicIdentity: {
    primaryActivities: [
      "Agriculture (wheat, rice)",
      "Small-scale businesses",
      "Border trade",
    ],
    employmentPatterns: [
      "Government jobs",
      "Agriculture",
      "Local businesses",
      "Migration for work",
    ],
    landholdingPatterns:
      "Small to medium farmers predominant; agricultural economy dominant",
  },

  socioCulturalIdentity: {
    language: "Punjabi (Doaba/Majha transitional dialect)",
    religiousComposition: {
      sikh: "Majority (Jat Sikh significant population)",
      hindu: "Significant (Brahmin/Rajput communities)",
      christian: "Small population",
    },
    casteCompositionStatus: "needs_verification",
    culturalInstitutions: ["Gurdwaras", "Temples", "Local fairs"],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  districtDemographics: {
    totalPopulation: "15,86,625 (Hoshiarpur district)",
    rural: "Significant rural population",
    primaryEconomy: "Agriculture-based economy",
    borderTrade: "Border trade area",
  },

  electoralRollAnalytics: {
    totalElectors: "1,97,021 (2022 as per AC040-Dasuya.md) / 2,01,373 (2022 as per AC040-Dasuya-deep.md)",
    genderGap: "[NEEDS VERIFICATION]",
    voterTurnout2022: "~68-70% (estimated) / 66.27% (AC040-Dasuya-deep.md)",
    voterTurnout2017: "~74-76%",
    voterTurnoutStateAverage: "[NEEDS VERIFICATION]",
  },

  schemePenetration: {
    pdsNfsa: "[NEEDS VERIFICATION]",
    mgnrega: "[NEEDS VERIFICATION]",
    pmKisan: "[NEEDS VERIFICATION]",
    ayushmanBharat: "[NEEDS VERIFICATION]",
  },

  digitalAccess: {
    mobileInternetUrban: "~75-80% (estimated)",
    mobileInternetRural: "~60-70% (estimated)",
    socialMedia: ["WhatsApp", "Facebook", "Instagram"],
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Karamveer Singh Ghumman",
      party: "AAP",
      voteShare: "~40% (estimated)",
      margin: "8,587 votes",
      marginVotes: 8587,
      totalElectors: "1,97,021 / 2,01,373",
      voterTurnout: "~66-70%",
      votesPolled: "1,33,456",
      runnerUp: "[NEEDS VERIFICATION - possibly Congress]",
      runnerUpParty: "[NEEDS VERIFICATION]",
      runnerUpVotes: "[NEEDS VERIFICATION]",
    },
    results2017: {
      winner: "Arun Dogra",
      party: "INC",
      votes: "56,527",
      votesCount: 56527,
      runnerUp: "Sukhjit Kaur Sahi",
      runnerUpParty: "BJP",
      runnerUpVotes: "38,889",
      runnerUpVotesCount: 38889,
    },
    results2012: {
      winner: "Sukhjit Kaur Sahi",
      party: "BJP",
      votes: "77,494",
      votesCount: 77494,
      runnerUp: "Arun Dogra",
      runnerUpParty: "INC",
      runnerUpVotes: "30,063",
      runnerUpVotesCount: 30063,
    },
    turnoutPattern: "Volatile - alternating wins between parties",
    coreVoters: [
      "Agrarian community",
      "Rural households",
      "Jat Sikh voters",
      "Hindu Rajput/Brahmin voters",
    ],
    swingFactors: [
      "Anti-incumbency against previous governments",
      "Local candidate popularity",
      "Caste factor",
      "Drug crisis impact",
    ],
    alternatingWins: true,
    volatilityReason:
      "2012: BJP, 2017: Congress, 2022: AAP - suggests highly volatile electorate with no stable majority",
  },

  casteComposition: {
    source: "Hoshiarpur district - transitional between Doaba and Majha characteristics",
    hinduBrahminRajput: "~35-40%",
    jatSikh: "~25-30%",
    scMazhabiRamdasia: "~18-22%",
    obc: "~10-12%",
  },

  casteCompositionDeep: {
    hinduRajputBrahmin: "~35-40% (Brahmin and Rajput communities significant)",
    jatSikh: "~25-30% (predominant Sikh community)",
    scMazhabiRamdasia: "~18-22% (Mazhabi/Ramdasia SC communities)",
    obc: "~10-12%",
    source: "Hoshiarpur district demographics",
    regionalNote:
      "Transitional region between Doaba (higher Sikh population) and Majha (mixed demographics)",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    aapWave2022: "AAP won with comfortable margin in 2022",
    antiCongressSentiment: "Anti-Congress sentiment present in constituency",
    youthSupportForAAP: "Youth support for AAP visible",
    governanceExpectations: "High governance expectations from AAP government",
    issues: [
      {
        rank: 1,
        title: "Drug Crisis",
        description:
          "Doaba vulnerability to drug menace; Dasuya youth affected despite AAP government claims",
        prioritySegment: ["Rural youth", "Families", "Young voters (18-35)"],
      },
      {
        rank: 2,
        title: "Employment",
        description:
          "Limited industrial growth; youth unemployment a major concern",
        prioritySegment: ["Young voters (18-35)", "Families"],
      },
      {
        rank: 3,
        title: "Agricultural Distress",
        description:
          "MSP implementation issues, stubble management problems",
        prioritySegment: ["Farmer households", "Agrarian community"],
      },
      {
        rank: 4,
        title: "Border Area Development",
        description: "Infrastructure gaps in border-adjacent areas",
        prioritySegment: ["Border area residents"],
      },
      {
        rank: 5,
        title: "Healthcare Facilities",
        description: "Rural healthcare facilities inadequate",
        prioritySegment: ["Rural residents", "Families"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceGap: {
    administrativeStructure: {
      districtCollector: "DC Hoshiarpur",
      tehsil: "Tehsil Dasuya",
    },
    serviceDelivery: {
      health: "Rural healthcare facilities inadequate [NEEDS VERIFICATION]",
      education: "[NEEDS VERIFICATION]",
      roads: "Road infrastructure needs improvement",
      waterSanitation: "[NEEDS VERIFICATION]",
    },
    governanceIssues: {
      borderInfrastructure: "Border infrastructure needs attention",
      agriculturalProblems:
        "Agricultural problems including MSP implementation",
      ruralConnectivity: "Rural connectivity and infrastructure gaps",
    },
  },

  issues: [
    {
      category: "Drug Crisis",
      specificIssues: [
        "Doaba region vulnerability to drugs",
        "Dasuya youth affected",
        "AAP government failed to address",
      ],
    },
    {
      category: "Agriculture",
      specificIssues: [
        "MSP procurement delays",
        "Stubble management",
        "Diesel prices",
        "Pesticide quality",
      ],
    },
    {
      category: "Employment",
      specificIssues: [
        "Limited industrial development",
        "Youth unemployment",
        "Limited job opportunities",
      ],
    },
    {
      category: "Infrastructure",
      specificIssues: ["Road conditions", "Canal water", "Rural connectivity"],
    },
    {
      category: "Healthcare",
      specificIssues: ["Inadequate facilities", "Rural healthcare access"],
    },
  ],

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    nonPoliticalInfluencers: {
      religious: ["Sikh religious leaders", "Local priests"],
      casteLeaders:
        "[NEEDS VERIFICATION - dominant castes in constituency]",
      professional: ["Farmers' unions", "Kisan union leaders"],
    },
    politicalNodes: {
      exMla: "[NEEDS VERIFICATION - ex-MLAs from area]",
      boothAgents: "[NEEDS VERIFICATION]",
      youthActivists: "Youth activists present in area",
    },
    keyInfluencers: {
      kisanUnionLeaders: "Kisan union leaders influential",
      youthActivists: "Youth activists engaged",
      localCongressLeaders: "Local Congress leaders active",
      sikhReligiousLeaders: "Sikh religious leaders influential",
    },
    casteEquations:
      "[NEEDS VERIFICATION - specific caste equations in constituency]",
  },

  partyStrategies: {
    aap: {
      maintainMargin: "Maintaining 2022 margin of 8,587 votes",
      governanceDelivery: "Governance delivery showcase",
      youthEmployment: "Youth employment schemes",
    },
    congress: {
      rebuilding: "Rebuilding process after 2022 loss",
      localCandidate: "Local candidate identification",
      antiIncumbency: "Exploiting anti-incumbency against AAP",
    },
    bjp: {
      combiningWithSAD: "Combining with SAD (Shiromani Akali Dal)",
      hinduVoterMobilization: "Hindu voter mobilization strategy",
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "AAP won 2022 with comfortable margin (8,587 votes)",
      "Doaba region has shown AAP wave",
      "Youth support for AAP",
      "Agricultural community present",
    ],
    weaknesses: [
      "Drug crisis severe despite AAP claims",
      "Limited industrial development",
      "Alternating wins suggest unstable voter base",
      "Governance delivery gaps",
    ],
    opportunities: [
      "Border area development potential",
      "Youth employment schemes",
      "Agricultural reforms implementation",
      "Development projects",
    ],
    threats: [
      "Anti-incumbency building against AAP",
      "Alternating voter pattern",
      "Congress rebuilding under new leadership",
      "BJP-SAD combination for Hindu voter mobilization",
    ],
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      profile: "Local leader with development focus and clean image",
      casteConsideration: "Hindu Rajput/Brahmin or Jat Sikh background preferred",
      keyQualification:
        "Must have cross-community appeal to consolidate votes",
      keyQualities: [
        "Local leader",
        "Development focus",
        "Clean image",
        "Cross-community appeal",
      ],
      mustAddress: ["Drug crisis", "Agricultural issues", "Employment"],
    },
    attackLines: {
      attackLine1: "Karamveer Singh Ghumman: What did he do in 4 years?",
      attackLine2: "Drug crisis: Dasuya youth affected, AAP failed",
      attackLine3: "Agriculture: Farmers still struggling with MSP",
      attackLine4: "Broken promises: Rs 1000/month not delivered",
      attackLine5:
        "BJP ruled 10 years, AAP ruled 5 years - where is development?",
    },
    congressPosition: {
      status: "CHALLENGING",
      detail:
        "AAP won by 8,587 votes. Congress had won in 2017. Need strong comeback.",
      historicalWinPattern:
        "2012: BJP (Sukhjit Kaur Sahi) won, 2017: Congress (Arun Dogra) won, 2022: AAP (Karamveer Singh Ghumman) won",
      challenges: [
        "Alternating wins suggest volatile electorate",
        "Need to rebuild party organization",
        "Identify strong local candidate",
        "Address anti-incumbency against AAP",
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
      "BJP-SAD alliance changes",
    ],
    economicShocks: [
      "Agricultural crisis (crop failure, price crash)",
      "Job loss due to industrial closure",
      "MSP procurement issues",
    ],
    socialEvents: [
      "Major drug bust coverage",
      "Communal incidents",
      "Agrarian protests",
    ],
    externalShocks: [
      "Border security incidents",
      "Pandemic/resurgence",
      "International border tensions",
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Wikipedia" },
      { name: "Oneindia" },
      { name: "ECI data" },
      { name: "minimax-web-search" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "2022 election runner-up details",
        "2022 election runner-up party and votes",
        "Exact voter turnout 2022",
        "Polling booth locations",
        "Local heritage sites",
        "Landholding patterns",
        "Health facilities details",
        "Education institutions",
        "Banks/Post offices",
        "2017 and 2012 election results full verification",
        "Caste demographics specific to constituency",
        "Ex-MLA/Ministers from area",
        "Booth agents network",
        "Dominant castes in area",
        "Rally grounds and hoarding spots",
        "Must-win booths",
        "Resource allocation details",
        "Common misinformation themes",
        "MGNREGA current status",
        "PDS coverage details",
        "Ayushman Bharat enrollment",
      ],
    },
    microTaskInfo: {
      taskId: "AC040-Dasuya",
      topic: "Dasuya Assembly Constituency Deep Research",
      tier: "2",
      date: "20 May 2026",
      agent: "Orchestrator",
      sourcesConsulted: "minimax-web-search",
      verificationStatus: "PARTIALLY VERIFIED",
      dataCurrency: "As of 20 May 2026",
    },
  },
};
