/**
 * AC097-Sardulgarh Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC097-Sardulgarh.md, AC097-Sardulgarh-deep.md
 */

import type { AC097SardulgarhTypes } from "./ac097-sardulgarh-types";

export const ac097SardulgarhData: AC097SardulgarhTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 97,
    name: "Sardulgarh",
    district: "Mansa",
    region: "Malwa",
    type: "General",
    lokSabhaSeat: "Bhatinda (Bathinda)",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Bathinda Lok Sabha constituency",
    areaCharacter: "Rural agricultural constituency",
    geographicContext:
      "Located within Mansa district in the cotton belt ('White Gold' region) of southern Punjab. Predominantly rural with agriculture as primary occupation.",
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    formation: "Part of Mansa district in Malwa region",
    historicalSignificance:
      "Rural agricultural area with cotton belt heritage, part of southern Punjab's agricultural economy",
    localHeritage: [
      "Agricultural tradition",
      "Cotton farming ('White Gold' region)",
    ],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  districtDemographics: {
    totalPopulation: "769,751",
    male: "408,732",
    female: "361,019",
    urban: "163,604",
    urbanPercentage: "21.2%",
    rural: "606,147",
    ruralPercentage: "78.8%",
    sexRatio: "883 females per 1000 males",
  },

  electoralRollAnalytics: {
    totalElectors2022: "181,679",
    totalVotes: "152,822",
    voterTurnout2022: "84.12%",
    voterTurnoutStatus: "HIGHEST turnout in Punjab 2022",
    voterTurnoutStateAverage: "~72%",
    ruralConstituency: "Rural agricultural constituency",
  },

  schemePenetration: {
    status: "needs_verification",
  },

  digitalAccess: {
    status: "needs_verification",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Gurpreet Singh Banawali",
      party: "Aam Aadmi Party (AAP)",
      voteShare: "~45% (estimated)",
      margin: "41,371 votes",
      marginVotes: 41371,
      runnerUp: "Not specified",
      runnerUpParty: "Not specified",
      totalElectors: "181,679",
      totalVotes: "152,822",
      turnout: "84.12%",
      turnoutStatus: "HIGHEST turnout",
    },
    results2017: {
      winner: "Dilraj Singh Bhunder",
      party: "Shiromani Akali Dal (SAD)",
      margin: "8,857 votes",
      marginVotes: 8857,
      totalElectors: "~175,000",
    },
    results2012: {
      winner: "Not available",
      party: "Not available",
      status: "Data not available",
    },
    turnoutPattern:
      "84.12% voter turnout - highest in Punjab 2022 (state average ~72%)",
    coreVoters: [
      "Rural agricultural community",
      "Jat Sikh voters",
      "Farmer households",
    ],
    swingFactors: [
      "Anti-incumbency against SAD",
      "AAP wave in 2022",
      "Local candidate popularity",
    ],
  },

  casteComposition: {
    sikhMajority: "~70-75%",
    hinduMinority: "~25-30%",
    jatSikh: "~30-35% (Dominant)",
    scPopulation: "~28-30%",
    obc: "~10-12%",
    source: "Caste estimates based on typical Malwa region patterns",
  },

  casteCompositionDeep: {
    districtSource: "Mansa district - 2011 Census",
    districtPopulation: "769,751",
    male: "408,732",
    female: "361,019",
    urban: "163,604 (21.2%)",
    rural: "606,147 (78.8%)",
    sexRatio: "883 females per 1000 males",
    communityComposition: {
      jatSikh: "Dominant agricultural community",
      dalitSC: "Significant population",
      hindu: "Minority community",
      muslim: "Very small minority",
    },
    casteCompositionStatus: "needs_verification",
    localDetails:
      "[NEEDS VERIFICATION - Sardulgarh specific demographics - typical Malwa pattern listed above]",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    mlaSatisfaction:
      "Gurpreet Singh Banawali (AAP) - elected with massive 41K margin, currently serving",
    issues: [
      {
        rank: 1,
        title: "Drug Menace",
        description:
          "Mansa district significantly affected by drug abuse among youth. Primary concern across Malwa region.",
        prioritySegment: ["Rural youth", "Families"],
      },
      {
        rank: 2,
        title: "Agricultural Distress",
        description:
          "Cotton/wheat belt - MSP procurement issues, cotton farming challenges, water table depletion",
        prioritySegment: ["Farmer households (~65%)", "Agricultural community"],
      },
      {
        rank: 3,
        title: "Groundwater Crisis",
        description:
          "Water table decline - major concern for agricultural sustainability",
        prioritySegment: ["Farmers", "Rural residents"],
      },
      {
        rank: 4,
        title: "Rural Infrastructure",
        description:
          "Roads, irrigation facilities need improvement",
        prioritySegment: ["All rural residents"],
      },
      {
        rank: 5,
        title: "Youth Unemployment",
        description:
          "High NRI emigration, limited local employment opportunities",
        prioritySegment: ["Young voters (18-35)", "Youth migrating for jobs"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceGap: {
    serviceDelivery: {
      health: "[NEEDS VERIFICATION]",
      education: "[NEEDS VERIFICATION]",
      roads: "Rural roads need improvement [NEEDS VERIFICATION]",
      waterSanitation: "[NEEDS VERIFICATION]",
      status: "needs_verification",
    },
    schemeImplementation: {
      youthNriScheme: "[NEEDS VERIFICATION - beneficiary data for Sardulgarh constituency]",
      status: "needs_verification",
    },
  },

  issues: [
    {
      category: "Drug Crisis",
      specificIssues: [
        "Malwa region severely affected including Mansa district",
        "Drug abuse among youth is primary concern",
        "Deaths due to drug addiction reported",
        "AAP government launched 'Yudh Nashian Virudh' campaign against drugs",
      ],
    },
    {
      category: "Agriculture",
      specificIssues: [
        "Cotton farming challenges",
        "MSP procurement issues",
        "Water table depletion",
        "Stubblem burning restrictions impact",
      ],
    },
    {
      category: "Employment",
      specificIssues: [
        "Limited industrial development",
        "Youth emigration for overseas jobs",
        "Need for skill development",
      ],
    },
    {
      category: "Infrastructure",
      specificIssues: [
        "Rural roads",
        "Irrigation facilities",
        "Basic amenities",
      ],
    },
  ],

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalLeadership: {
      currentMLA: {
        name: "Gurpreet Singh Banawali",
        party: "AAP",
        term: "2022-2027",
        status: "Currently serving",
      },
      keyPoliticalFigures: "[NEEDS VERIFICATION - local leaders, former MLAs, influential families]",
    },
    nonPoliticalInfluencers: {
      status: "needs_verification",
    },
    politicalNodes: {
      status: "needs_verification",
    },
    casteEquations:
      "[NEEDS VERIFICATION - specific caste demographics of constituency]",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["OneIndia", "Punjabi Tribune", "Jag Bani", "Dainik Bhaskar"],
      tv: ["Local cable", "Regional news channels"],
      digital: ["Facebook", "WhatsApp", "Instagram"],
    },
    consumption: {
      bySegment:
        "WhatsApp groups for news, TV for elections, social media for youth",
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
      status: "needs_verification",
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "Highest voter turnout (84.12%) in Punjab 2022",
      "AAP won by massive 41K margin - strong grip",
      "Sikh majority constituency",
      "Rural agricultural voter base",
    ],
    weaknesses: [
      "AAP has strong grip - difficult to dislodge",
      "Congress finished third in 2022",
      "Drug problem severe",
      "Limited industrial development",
    ],
    opportunities: [
      "Anti-incumbency factors against AAP government",
      "Local alliances could help",
      "Focus on development issues",
    ],
    threats: [
      "AAP incumbent with massive margin",
      "Strong AAP organization at booth level",
      "Youth out-migration",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    narratives: [
      "84% turnout but no development visible - demand accountability",
      "Drug addiction destroying families - government failing to act",
      "Cotton farmers still waiting for MSP - broken promises",
      "Water table declining - government silent",
      "Youth migrating for jobs - no local employment",
    ],
    prioritySegments: [
      {
        segment: "Young voters (18-35)",
        rationale: "Most affected by unemployment and drug crisis",
      },
      {
        segment: "Farmers",
        rationale: "Agrarian economy, MSP concerns, water table issues",
      },
      {
        segment: "Rural voters",
        rationale: "Infrastructure gaps, agricultural distress",
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
      profile: "Sikh leader with agricultural background",
      background: "Farmer representative, rural development focus",
      keyTraits: ["Known for accessibility", "Grassroots connect"],
      targetVoter: ["Rural voters", "Farmers"],
      casteConsideration: "Jat Sikh background preferred",
    },
    attackLines: {
      drugCrisis:
        "Drug addiction destroying families - government failing to curb menace despite claims",
      agrarianDistress:
        "Cotton farmers still waiting for MSP, water table declining",
      brokenPromises:
        "Rs 1000/month for women not delivered, development promises unfulfilled",
      governanceFailures:
        "Healthcare, education infrastructure gaps in rural areas",
      unemployment:
        "Youth migrating for jobs - no local employment opportunities",
    },
    congressStrategy: {
      currentPosition:
        "Congress finished third in 2022. AAP holds this seat with massive 41K margin.",
      incumbentName: "Gurpreet Singh Banawali (AAP)",
      termCount: 1,
      challenges: [
        "AAP has strong grip - 41,371 vote margin",
        "Need to rebuild organization from third-place finish",
        "Focus on anti-incumbency factors",
        "Consider local alliances",
      ],
      strategicOptions: [
        "Rebuild Congress organization",
        "Focus on local issues (drugs, agriculture, unemployment)",
        "Consider pre-election alliances",
        "Target anti-incumbent sentiment",
      ],
    },
  },

  // ==========================================================================
  // EXTERNAL FACTORS
  // ==========================================================================
  externalFactors: {
    politicalShocks: [
      "State-level corruption scandals",
      "Central government schemes announcement before election",
      "AAP government performance at state level",
    ],
    economicShocks: [
      "Agricultural crisis (crop failure, price crash)",
      "Job loss due to industrial closure",
    ],
    socialEvents: [
      "Major drug bust coverage",
      "Farmer protests",
      "Youth emigration news",
    ],
    externalShocks: [
      "Drug menace deaths reported",
      "Groundwater crisis escalation",
    ],
  },

  // ==========================================================================
  // DEEP RESEARCH
  // ==========================================================================
  deepResearch: {
    executiveSummary: {
      description:
        "Sardulgarh is a General category assembly constituency in Mansa district, part of the Malwa region. The constituency showed strong AAP performance in 2022. AAP leader Gurpreet Singh Banawali won against traditional political competitors. The area shares similar socio-economic characteristics with rest of Malwa including agricultural base and drug crisis concerns.",
      keyHighlights: [
        "AAP won by massive 41,371 vote margin in 2022",
        "Highest voter turnout (84.12%) in Punjab 2022",
        "Rural agricultural constituency in cotton belt",
        "SAD to AAP shift - won by SAD in 2017, AAP in 2022",
        "Malwa region drug crisis affects constituency",
      ],
    },
    constituencyProfile: {
      assemblyConstituencyNo: 97,
      district: "Mansa",
      region: "Malwa",
      lokSabhaSeat: "Bathinda",
      type: "General (Open)",
    },
    geographicContext:
      "Sardulgarh is located within Mansa district in the cotton belt ('White Gold' region) of southern Punjab. The area is predominantly rural with agriculture as the primary occupation.",
    electoralTrends: {
      "2022Performance": {
        aapWon: true,
        margin: "[NEEDS VERIFICATION]",
        marginStatus: "needs_verification",
      },
      historicalPattern:
        "[NEEDS VERIFICATION - 2017 and earlier results]",
      historicalStatus: "needs_verification",
    },
    keyIssuesGrievances: {
      drugCrisis: {
        description:
          "Malwa region including Mansa district severely affected. Drug abuse among youth is primary concern.",
        governmentResponse:
          "AAP government launched 'Yudh Nashian Virudh' campaign against drugs",
        impact: "Deaths due to drug addiction reported",
      },
      agrarianIssues: {
        cottonFarming: "Cotton farming challenges in the region",
        mspProcurement: "MSP procurement issues",
        waterTableDepletion: "Water table depletion affecting agriculture",
        stubbleBurning:
          "Stubblem burning restrictions impact farmers",
      },
      employment: {
        industrialDevelopment: "Limited industrial development",
        youthEmigration: "Youth emigration for overseas jobs",
        skillDevelopment: "Need for skill development",
      },
    },
    voterOutreach: {
      voterTurnout2022: "[NEEDS VERIFICATION - constituency-specific turnout]",
      stateAverage: "72%",
      turnoutStatus: "needs_verification",
    },
    governmentSchemes: {
      status: "needs_verification",
      details:
        "[NEEDS VERIFICATION - specific beneficiary data for Sardulgarh constituency]",
    },
    intelligenceGaps: {
      gaps: [
        "Full 2022 candidate list with vote shares",
        "2017 and earlier election results",
        "Precise victory margin",
        "Local caste composition",
        "Voter turnout specific data",
        "Local political influencer mapping",
        "Scheme beneficiary statistics",
      ],
    },
    researchPriorities: {
      priorities: [
        "Identify swing voter segments",
        "Map traditional Congress and SAD vote banks",
        "Assess AAP MLA performance",
        "Local body election results analysis",
      ],
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "OneIndia", url: "https://www.oneindia.com/sardulgarh-assembly-elections-pb-97/" },
      { name: "IndiaVotes", url: "https://www.indiavotes.com/ac/summary/45481" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sardulgarh_Assembly_constituency" },
      { name: "Proneta.in", url: "https://proneta.in/Sardulgarh_assembly_constituency_Punjab-097" },
      { name: "CNBC TV18", url: "https://www.cnbctv18.com" },
      { name: "India Today", url: "https://www.indiatoday.in/elections/story/sardulgarh-punjab-assembly-election-results-2022-live-updates-1922939-2022-03-09" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Full 2022 candidate list with vote shares",
        "Runner-up candidate details",
        "2017 and earlier election results",
        "Precise victory margin",
        "Local caste composition specific to Sardulgarh",
        "Voter turnout specific data for constituency",
        "Local political influencer mapping",
        "Scheme beneficiary statistics",
        "Polling booth locations and accessibility",
        "Key political figures - former MLAs, influential families",
        "Health facilities details",
        "Education institutions",
        "Banks/Post offices",
        "MGNREGA current status",
        "PDS coverage details",
        "Ayushman Bharat enrollment",
        "Booth agents network",
        "Rally grounds and hoarding spots",
        "Must-win booths",
        "Resource allocation details",
        "Common misinformation themes",
      ],
    },
  },
};
