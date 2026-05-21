/**
 * AC032-Shahkot Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC032-Shahkot.md, AC032-Shahkot-deep.md
 */

import type { AC032ShahkotTypes } from "./ac032-shahkot-types";

export const ac032ShahkotData: AC032ShahkotTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 32,
    name: "Shahkot",
    district: "Jalandhar",
    region: "Doaba",
    type: "General",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Jalandhar Lok Sabha constituency",
    tehsil: "Shahkot",
    subDistrictsCovered: ["Shahkot Tehsil", "Surrounding rural blocks"],
    areaCharacter: "Predominantly agricultural with significant SC population",
    terrain: "Doaba region between Beas and Satluj rivers, plains",
    keyIdentifiers: {
      doabaRegion: "Between Beas and Satluj",
      jalandharDistrictSC: "SC 38.95%",
      agriculturalProfile: ["Wheat cultivation", "Paddy cultivation"],
      urbanCenter: "Shahkot town as administrative center",
    },
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    formation: "Part of Jalandhar district, Doaba region",
    historicalSignificance:
      "Shahkot is a town and tehsil with historical administrative significance",
    localHeritage: [
      "Agricultural tradition",
      "Doaba region cultural identity",
      "Historical Sikh heritage",
    ],
  },

  economicIdentity: {
    primaryActivities: [
      "Agriculture (wheat, paddy)",
      "Agricultural labor",
      "Small businesses",
    ],
    employmentPatterns: [
      "Agricultural work",
      "Government jobs",
      "Local trade",
      "Migration for employment",
    ],
    landholdingPatterns:
      "Mixed landholding patterns typical of Doaba region",
  },

  socioCulturalIdentity: {
    language: "Punjabi (Doaba dialect)",
    religiousComposition: {
      sikh: "~59% (approximate)",
      hindu: "~38% (approximate)",
      other: "<3%",
    },
    casteCompositionStatus: "needs_verification",
    culturalInstitutions: ["Gurdwaras", "Temples", "Local fairs"],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  censusData: {
    population: "[NEEDS VERIFICATION - Jalandhar district total ~2.2 million]",
    sexRatio: "~895 females per 1000 males (district average)",
    literacyRate: "~85% (district average)",
    casteWise: "SC ~38.95% (district average), rest general population",
  },

  electoralRollAnalytics: {
    totalElectors2022: "182,103",
    genderGap: "[NEEDS VERIFICATION]",
    voterTurnout2022: "~68-70% (estimated)",
    voterTurnout2017: "~74-76%",
    voterTurnoutStateAverage: "~78%",
  },

  schemePenetration: {
    meraGharMeraMaan: "State government scheme [NEEDS VERIFICATION]",
    ashirwadScheme: "State government scheme [NEEDS VERIFICATION]",
    aamAadmiClinics: "State government scheme [NEEDS VERIFICATION]",
    freeElectricity: "State government scheme [NEEDS VERIFICATION]",
  },

  digitalAccess: {
    mobileInternetUrban: "~80%",
    mobileInternetRural: "~65%",
    socialMedia: ["WhatsApp", "Facebook", "Instagram"],
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Hardev Singh Ladi",
      party: "Indian National Congress",
      voteShare: "~40% (estimated)",
      margin: "12,079 votes",
      totalElectors: "182,103",
      voterTurnout: "~68-70%",
      votesPolled: "[NEEDS VERIFICATION]",
      runnerUp: "[NEEDS VERIFICATION]",
      runnerUpParty: "[NEEDS VERIFICATION]",
    },
    results2017: {
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      margin: "[DATA NEEDS VERIFICATION]",
    },
    results2012: {
      winner: "Ajit Singh Kohar",
      party: "Shiromani Akali Dal",
      margin: "[NEEDS VERIFICATION]",
    },
    historicalTrend: [
      "2022: Congress win with 12,079 margin",
      "Strong margin against AAP",
      "Congress held despite AAP wave",
      "Historical Akali Dal presence (2012)",
    ],
    turnoutPattern: "Voter turnout declining from ~74-76% (2017) to ~68-70% (2022)",
    coreVoters: [
      "Jat Sikh rural voters",
      "SC voters (substantial population)",
      "Agricultural community",
    ],
    swingFactors: [
      "Anti-incumbency",
      "Local candidate popularity",
      "Caste coalition maintenance",
      "AAP wave impact",
    ],
  },

  casteComposition: {
    source: "District-level estimates with constituency approximation",
    jatSikh: "~40-45%",
    sc: "~28-32%",
    obc: "~12-15%",
    hindu: "~8-10%",
    other: "~5%",
  },

  casteCompositionDeep: {
    scPopulation: "~38.95% (district average)",
    jatSikhRural: "Rural majority community",
    ramdasiaRavidassia: "Significant presence in constituency",
    obcCommunities: ["Tarkhan community", "Kashyap community"],
  },

  tehsilDemographics: {
    description: "Multiple villages with mixed population",
    scRural: "High SC concentration in rural areas",
    agriculturalLabor: "Significant agricultural labor concentration",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    currentMood:
      "Stable - Congress won comfortably in 2022 with 12,079 margin",
    status: "stable",
    sentimentDrivers: [
      "Local Leadership: Hardev Singh Ladi factor",
      "Caste: High SC population",
      "Agriculture: Rural voter concerns",
      "Doaba Identity: Regional consciousness",
      "Development: Infrastructure needs",
    ],
    grievances: [
      "Road infrastructure",
      "Agricultural distress",
      "Healthcare facilities",
      "Employment opportunities",
    ],
    mlaSatisfaction:
      "Hardev Singh Ladi (Congress) - established himself with 2022 win",
    issues: [
      {
        rank: 1,
        title: "Drug Crisis",
        description:
          "Major issue in Doaba region - youth addiction affecting families",
        prioritySegment: ["Rural youth", "Families", "Entire constituency"],
      },
      {
        rank: 2,
        title: "Agricultural Distress",
        description:
          "Stubble burning, MSP procurement issues, rural distress",
        prioritySegment: ["Farmer households", "Agricultural laborers"],
      },
      {
        rank: 3,
        title: "Rural Infrastructure",
        description: "Roads, water, electricity gaps in rural areas",
        prioritySegment: ["Rural residents", "Agricultural community"],
      },
      {
        rank: 4,
        title: "Employment",
        description: "Limited industrial growth, limited job opportunities",
        prioritySegment: ["Youth (18-35)", "Families"],
      },
      {
        rank: 5,
        title: "Healthcare",
        description: "Rural health facilities inadequate",
        prioritySegment: ["All residents", "Rural population"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceGap: {
    currentRepresentation: {
      mla: "Hardev Singh Ladi",
      party: "Congress",
      district: "Jalandhar",
      stateGovernment: "AAP government (opposition)",
    },
    serviceDelivery: {
      health: "CHC level facilities [NEEDS VERIFICATION]",
      education: "[NEEDS VERIFICATION]",
      roads: "[NEEDS VERIFICATION]",
      waterSanitation: "[NEEDS VERIFICATION]",
    },
    schemeImplementation: {
      meraGharMeraMaan: "Statewide scheme [NEEDS VERIFICATION]",
      ashirwadScheme: "Statewide scheme [NEEDS VERIFICATION]",
      aamAadmiClinics: "Statewide scheme [NEEDS VERIFICATION]",
      freeElectricity: "Statewide scheme [NEEDS VERIFICATION]",
    },
    developmentGaps: {
      shahkotTownInfrastructure: "Town municipality needs development",
      ruralRoadNetwork: "Rural road network needs improvement",
      agriculturalExtension: "Agricultural extension services limited",
      healthcare: "Healthcare facilities need upgrade",
    },
  },

  localIssues: {
    topIssues: {
      agriculture: "MSP,佃权, rural distress",
      infrastructure: "Roads, drainage",
      healthcare: "CHC facilities",
      employment: "Youth jobs",
      casteWelfare: "SC welfare",
    },
    shahkotSpecific: {
      townMunicipalityNeeds: "Shahkot town municipality needs improvements",
      marketInfrastructure: "Market infrastructure development needed",
      sugarcane: "Sugarcane cultivation [NEEDS VERIFICATION if applicable]",
      floodVulnerability:
        "Flood vulnerability [NEEDS VERIFICATION]",
    },
  },

  issues: [
    {
      category: "Agriculture",
      specificIssues: [
        "MSP procurement",
        "Stubble management",
        "佃权 issues",
        "Agricultural distress",
      ],
    },
    {
      category: "Infrastructure",
      specificIssues: ["Road conditions", "Drainage", "Rural connectivity"],
    },
    {
      category: "Healthcare",
      specificIssues: ["CHC facilities", "Rural health services", "Medical staff"],
    },
    {
      category: "Employment",
      specificIssues: [
        "Limited industrial jobs",
        "Youth unemployment",
        "Migration for work",
      ],
    },
    {
      category: "Social",
      specificIssues: ["Drug rehabilitation", "SC welfare", "Caste-based issues"],
    },
  ],

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalActors: {
      mla: "Hardev Singh Ladi (Congress MLA)",
      aapLocalLeaders: "[NEEDS VERIFICATION]",
      sadLeaders: "[NEEDS VERIFICATION]",
      bjpLeaders: "[NEEDS VERIFICATION]",
    },
    communityInfluencers: {
      familyInfluence: "Hardev Singh Ladi Family - significant political influence",
      jatSikhElders: "Jat Sikh Elders - rural vote influence",
      scLeaders: "SC Leaders - high SC population representation",
      exServicemen: "Ex-Servicemen - veterans community influence",
    },
    powerEquation:
      "Congress holds seat with Ladi family influence; AAP trying to penetrate; Caste-based voting significant",
    casteBasedVoting:
      "Caste-based voting patterns significant; Jat Sikh + SC coalition important",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi press", "Doaba newspapers", "Jalandhar media"],
      tv: ["Local cable", "Regional news channels"],
      digital: ["WhatsApp networks", "Facebook", "Instagram"],
    },
    consumption: {
      bySegment:
        "WhatsApp for news distribution, Punjabi press for older voters, digital for youth",
    },
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyLocations: {
      shahkotTown: "Shahkot town - administrative and commercial center",
      agriculturalVillages:
        "Agricultural villages surrounding Shahkot town",
      gurudwaraSites: "Gurudwara sites in the region",
      jalandharMogaRoad:
        "Located on Jalandhar-Moga road - key connectivity route",
    },
    infrastructure: {
      roads: "Roads to Jalandhar and Moga [NEEDS VERIFICATION]",
      healthcare: "CHC level healthcare [NEEDS VERIFICATION]",
      education: "[NEEDS VERIFICATION]",
      mandiFacilities: "Mandi facilities available [NEEDS VERIFICATION]",
    },
    boothLogistics: {
      status: "needs_verification",
      locations: [],
    },
    campaignInfrastructure: {
      rallyGrounds: "[NEEDS VERIFICATION]",
      hoardingSpots: "[NEEDS VERIFICATION]",
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "Congress win 2022 with 12,079 margin - decisive victory",
      "Strong local leadership - Hardev Singh Ladi",
      "High SC population - traditional Congress base",
      "Doaba regional identity",
      "Established Congress organization",
    ],
    weaknesses: [
      "AAP government in power (state-level opposition challenge)",
      "Limited opposition resources",
      "Infrastructure gaps",
      "Rural distress",
      "Drug crisis affecting region",
    ],
    opportunities: [
      "Congress organization strength",
      "High SC voter population",
      "Regional identity advantage",
      "NRI investment potential",
      "Doaba cultural identity",
    ],
    threats: [
      "AAP government schemes appeal to voters",
      "Anti-incumbency risk against Congress",
      "SAD revival attempt",
      "Rural distress continuing",
      "AAP penetration efforts",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congressStrategy: {
      candidate: "Hardev Singh Ladi or family member",
      casteStrategy: "Jat Sikh + SC combination",
      keyIssues: ["Development", "Agriculture", "Jobs"],
      campaign: "Stronghold defense - maintain 2022 momentum",
      organization: "Booth-level organization critical",
    },
    aapStrategy: {
      candidate: "Strong challenger [NEEDS VERIFICATION]",
      casteStrategy: "SC + urban + youth coalition",
      keyIssues: ["AAP schemes", "Change narrative"],
      campaign: "Congress neglected area - anti-incumbency narrative",
    },
    targetSegments: [
      {
        segment: "Rural Jat Sikh",
        description: "Core Congress voters",
      },
      {
        segment: "SC Voters",
        description: "Substantial population - Congress base",
      },
      {
        segment: "Women",
        description: "Welfare schemes focus",
      },
      {
        segment: "Youth",
        description: "Employment and drugs concerns",
      },
    ],
    mustWinBoothsStatus: "needs_verification",
    resourceAllocationStatus: "needs_verification",
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: {
      candidateLadiFamilySuccession:
        "Ladi family succession - will Hardev Singh Ladi contest again or family member",
      allianceCongressSad:
        "Congress-SAD tie-up possibility - potential alliance",
      localPerformanceAssessment:
        "MLA performance assessment - Hardev Singh Ladi's work evaluation",
      monsoonAgriculturalConditions:
        "Monsoon and agricultural conditions - rural economy dependency",
    },
    triggers: [
      "Party alliances",
      "Candidate selection",
      "Development announcements",
      "Agricultural conditions",
    ],
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      profile: "Current MLA with local connect, rural background",
      casteConsideration: "Jat Sikh preferred",
      keyQualifications: [
        "Maintain development narrative",
        "Strong booth-level connect",
        "Caste coalition management",
      ],
      antiDrugMessaging:
        "Continue anti-drug messaging - critical for Doaba region",
    },
    attackLines: {
      aapInaction: "What did AAP do for Shahkot in 4 years?",
      drugCrisis:
        "Drug crisis: Doaba youth dying, AAP government silent",
      brokenPromises:
        "Broken promises: Jobs, money for women, farmers - nothing delivered",
      sadBjpLegacy:
        "SAD-BJP: They ruined us for decades, but AAP did no better",
      localCandidateMatter:
        "Local candidate matters: We need someone who stays, not party-hoppers",
    },
    congressStrategy: {
      currentPosition:
        "STRONG - Won by 12,079 votes. Congress has solid position. Need to work on consolidation.",
      incumbentName: "Hardev Singh Ladi",
      margin: "12,079 votes",
      challenges: [
        "Maintain Jat Sikh and SC voter coalition",
        "Address rural distress",
        "Counter AAP government schemes appeal",
        "Booth-level organization",
      ],
    },
  },

  // ==========================================================================
  // RECOMMENDATIONS
  // ==========================================================================
  recommendations: {
    dataGaps: {
      verificationItems: [
        "2017 election results",
        "Ladi family influence details",
        "Caste demographics specific to constituency",
        "Booth-level analysis",
        "MLA performance evaluation",
        " AAP candidate identification",
        "Voter mood assessment",
      ],
    },
    intelligencePriorities: {
      priorities: [
        "Congress organization strength assessment",
        "AAP candidate identification",
        "Booth-level assessment",
        "Voter mood tracking",
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
      "Party alliance announcements",
    ],
    economicShocks: [
      "Agricultural crisis (crop failure, price crash)",
      "Job loss due to industrial closure",
      "Drug-related economic impact",
    ],
    socialEvents: [
      "Major drug bust coverage",
      "Communal incidents",
      "Prominent local events",
    ],
    externalShocks: [
      "State government policy changes",
      "Pandemic/resurgence",
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Wikipedia" },
      { name: "Oneindia" },
      { name: "Election Commission of India" },
      { name: "Census 2011" },
      { name: "News18" },
      { name: "India Today" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "2017 election results",
        "Ladi family influence",
        "Caste demographics specific to constituency",
        "Booth-level analysis",
        "MLA performance",
        "Congress organization strength",
        "AAP candidate identification",
        "Booth-level assessment",
        "Voter mood",
        "Polling booth locations",
        "Healthcare facilities details",
        "Education institutions",
        "Rally grounds and hoarding spots",
        "Must-win booths",
        "Resource allocation",
        "Common misinformation themes",
        "SAD-BJP local leaders",
        "Flood vulnerability data",
        "Sugarcane cultivation status",
      ],
    },
  },
};
