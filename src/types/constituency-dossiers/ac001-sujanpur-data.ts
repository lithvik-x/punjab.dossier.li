/**
 * AC001-Sujanpur Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC001-Sujanpur.md, AC001-Sujanpur-deep.md
 */

import type { AC001SujanpurTypes } from "./ac001-sujanpur-types";

export const ac001SujanpurData: AC001SujanpurTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 1,
    name: "Sujanpur",
    district: "Pathankot",
    region: "Majha",
    type: "General",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Gurdaspur Lok Sabha constituency",
    subDistrictsCovered: ["Sujanpur area", "surrounding rural blocks"],
    areaCharacter: "Mixed urban-rural, northernmost Punjab district",
    terrain:
      "Foothills of the Himalayas, near the border with Jammu & Kashmir",
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    formation:
      "Part of Pathankot district created in 2011 from Gurdaspur",
    historicalSignificance:
      "Area has strategic importance due to proximity to Himachal Pradesh and Jammu borders",
    localHeritage: [
      "Agricultural tradition",
      "Historical forts [NEEDS VERIFICATION]",
    ],
  },

  economicIdentity: {
    primaryActivities: ["Agriculture (wheat, rice)", "Small-scale industries", "Retail trade"],
    employmentPatterns: [
      "Government jobs",
      "Agriculture",
      "Local businesses",
      "Migration for work",
    ],
    landholdingPatterns:
      "[NEEDS VERIFICATION - typical Majha region small-to-medium farmers]",
  },

  socioCulturalIdentity: {
    language: "Punjabi (Majha dialect)",
    religiousComposition: {
      sikh: "57-60%",
      hindu: "35-38%",
      christian: "Small population",
    },
    casteCompositionStatus: "needs_verification",
    culturalInstitutions: ["Gurdwaras", "Temples", "Local fairs"],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  censusData: {
    population: "[NEEDS VERIFICATION - Pathankot district total ~327,000]",
    sexRatio: "~895 females per 1000 males (district average)",
    literacyRate: "~85% (district average, higher than state average)",
    casteWise: "SC ~28-32%, general population rest",
  },

  electoralRollAnalytics: {
    totalElectors: "~[NEEDS VERIFICATION - estimate 160,000-180,000]",
    genderGap: "[NEEDS VERIFICATION]",
    voterTurnout2022: "~74.4% (state average was ~78%)",
    voterTurnoutStateAverage: "~78%",
  },

  schemePenetration: {
    pdsNfsa: "[NEEDS VERIFICATION]",
    mgnrega: "Pathankot district had ~30,000 job cards issued [SOURCE: Punjab Govt announcement 2017]",
    pmKisan: "[NEEDS VERIFICATION]",
    ayushmanBharat: "[NEEDS VERIFICATION]",
  },

  digitalAccess: {
    mobileInternetUrban: "~85%",
    mobileInternetRural: "~70%",
    socialMedia: ["WhatsApp", "Facebook", "Instagram"],
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Naresh Puri",
      party: "INC",
      voteShare: "~40.2% (estimated)",
      margin: "4,636 votes",
      totalElectors: "1,70,309",
      voterTurnout: "75.94%",
      votesPolled: "1,29,339",
      runnerUp: "Dinesh Singh",
      runnerUpParty: "BJP",
    },
    results2017: {
      winner: "Naresh Puri",
      party: "INC",
      margin: "~3,200 votes (estimated)",
    },
    results2012: {
      winner: "Naresh Puri",
      party: "INC",
    },
    turnoutPattern: "Consistent 72-78% in recent elections",
    coreVoters: ["Agrarian community", "Rural households"],
    swingFactors: ["Anti-incumbency", "Local candidate popularity"],
  },

  casteComposition: {
    source: "Caste estimates based on district-level census data",
    jathSikh: "~22%",
    sc: "~29%",
    obc: "~15%",
    upperCaste: "~18% (Khatri, Arora, Brahmin)",
    minority: "~5% (Muslim, Christian)",
    other: "~11%",
  },

  casteCompositionDeep: {
    scPopulation: "~28-32% [NEEDS VERIFICATION]",
    generalPopulation: "Rest of population",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    mlaSatisfaction: "Naresh Puri (INC) sitting MLA - constituent feedback mixed",
    trustInInstitutions:
      "[NEEDS VERIFICATION - general Punjab trends suggest declining trust in state govt]",
    issues: [
      {
        rank: 1,
        title: "Drug Menace",
        description:
          "Cited as #1 issue across Punjab; Pathankot Police actively conducting awareness drives",
        prioritySegment: ["Rural youth", "Families"],
      },
      {
        rank: 2,
        title: "Unemployment",
        description:
          "Youth unemployment a major concern (Punjab youth unemployment ~19.3%)",
        prioritySegment: ["Young voters (18-35)"],
      },
      {
        rank: 3,
        title: "Agriculture Distress",
        description:
          "MSP procurement delays, stubble management, groundwater depletion",
        prioritySegment: ["Farmer households (~65%)"],
      },
      {
        rank: 4,
        title: "Infrastructure",
        description: "Roads, power supply issues",
        prioritySegment: ["All residents"],
      },
      {
        rank: 5,
        title: "Border Area Concerns",
        description: "Security, smuggling across border",
        prioritySegment: ["Border area residents"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceGap: {
    serviceDelivery: {
      health:
        "District hospital in Pathankot, sub-centers in rural areas [NEEDS VERIFICATION]",
      education:
        "Government schools, some private institutions [NEEDS VERIFICATION]",
      roads: "Major connectivity via NH and state highways [NEEDS VERIFICATION]",
      waterSanitation: "[NEEDS VERIFICATION]",
    },
    schemeImplementation: {
      mgnrega: "Active in district - wages being paid [NEEDS VERIFICATION]",
      beneficiaryLists:
        "[NEEDS VERIFICATION - some complaints about inclusion/exclusion errors]",
      pds: "Ration cards distributed, fair price shops operational [NEEDS VERIFICATION]",
    },
  },

  issues: [
    {
      category: "Infrastructure",
      specificIssues: ["Road conditions in rural areas", "Power cuts"],
    },
    {
      category: "Agriculture",
      specificIssues: ["MSP procurement delays", "Diesel prices", "Pesticide quality"],
    },
    {
      category: "Employment",
      specificIssues: ["Limited industrial jobs", "Youth migration"],
    },
    {
      category: "Social",
      specificIssues: ["Drug rehabilitation centers insufficient"],
    },
  ],

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    nonPoliticalInfluencers: {
      religious: ["Local granthis", "Priests"],
      casteLeaders: "[NEEDS VERIFICATION - dominant castes in area]",
      professional: ["Farmers' unions", "Trader associations"],
    },
    politicalNodes: {
      exMla: "[NEEDS VERIFICATION]",
      boothAgents: "[NEEDS VERIFICATION]",
      priyanshPuriFamily: "[NEEDS VERIFICATION - political background of winner]",
    },
    casteEquations:
      "[NEEDS VERIFICATION - specific caste demographics of constituency]",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi Tribune", "Jag Bani", "Dainik Bhaskar", "Dainik Jagran"],
      tv: ["Local cable", "Regional news channels"],
      digital: ["Facebook", "WhatsApp", "Instagram"],
    },
    consumption: {
      bySegment:
        "WhatsApp groups for news, TV for elections, newspapers for older voters",
    },
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
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
      "INC winner in 2022 with decent margin",
      "Majha region traditionally competitive for Congress",
      "Agricultural community base",
    ],
    weaknesses: [
      "Drug problem severe",
      "Limited industrial development",
      "Periphery district (far from state capital)",
    ],
    opportunities: [
      "Kartarpur Corridor development can boost area",
      "Tourism potential (hill areas)",
      "Youth skill development",
    ],
    threats: [
      "AAP government in power (state-level anti-incumbency may affect)",
      "Border security concerns",
      "Youth out-migration",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    narratives: [
      '"Drug Mukt Punjab" - Every family affected; demand accountability',
      '"Vote for Development" - Roads, hospitals, jobs',
      '"Local Son" - Candidate connectivity with constituency',
    ],
    prioritySegments: [
      {
        segment: "Young voters (18-35)",
        rationale: "Highest numbers, most affected by unemployment/drugs",
      },
      {
        segment: "Farmers",
        rationale: "Agrarian economy, MSP concerns",
      },
      {
        segment: "Women",
        rationale: "Welfare schemes, safety concerns",
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
      profile: "Strong rural connect, agricultural background",
      casteConsideration: "Jat Sikh or Rajput background preferred",
      keyQualities: ["Border area awareness", "Accessibility to villagers"],
    },
    attackLines: {
      drugCrisis:
        "Local youth affected by drug addiction despite government claims",
      unemployment: "Lack of industrial development in Pathankot",
      brokenPromises: "₹1000/month for women not delivered",
      governanceFailures: "Infrastructure gaps in rural areas",
    },
    congressStrategy: {
      currentPosition: "Congress holds this seat and represents the Pathankot border area",
      incumbentName: "Naresh Puri",
      termCount: 3,
      challenges: [
        "Maintain grip while addressing youth unemployment",
        "Address agrarian distress",
      ],
    },
  },

  // ==========================================================================
  // EXTERNAL FACTORS
  // ==========================================================================
  externalFactors: {
    politicalShocks: [
      "Central government schemes announcement before election",
      "Border tension with Pakistan",
      "State-level corruption scandals",
    ],
    economicShocks: [
      "Agricultural crisis (crop failure, price crash)",
      "Job loss due to industrial closure",
    ],
    socialEvents: ["Major drug bust coverage", "Communal incidents"],
    externalShocks: ["International border incidents", "Pandemic/resurgence"],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "IndiaVotes.com", url: "https://www.indiavotes.com" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sujanpur_(Punjab_Assembly_constituency)" },
      { name: "ADR India", url: "https://adrindia.org" },
      { name: "Punjab government websites", url: "https://punjab.gov.in" },
      { name: "News18", url: "https://www.news18.com" },
      { name: "OneIndia", url: "https://www.oneindia.com" },
      { name: "India Today", url: "https://www.indiatoday.in" },
      { name: "CNBC TV18", url: "https://www.cnbctv18.com" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Polling booth locations and accessibility",
        "Local heritage sites (historical forts)",
        "Landholding patterns",
        "Health facilities details",
        "Education institutions",
        "Banks/Post offices",
        "2017 and 2012 election results verification",
        "Voter turnout 2022 exact figure",
        "MGNREGA current status",
        "PDS coverage details",
        "Ayushman Bharat enrollment",
        "Caste demographics specific to constituency",
        "Ex-MLA/Ministers from area",
        "Booth agents network",
        "Priyansh Puri family political background",
        "Dominant castes in area",
        "Rally grounds and hoarding spots",
        "Must-win booths",
        "Resource allocation details",
        "Common misinformation themes",
      ],
    },
  },
};
