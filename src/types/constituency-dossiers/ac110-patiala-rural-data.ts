/**
 * AC110-Patiala Rural Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC110-Patiala-Rural.md, AC110-PatialaRural-deep.md
 */

import type { AC110PatialaRuralTypes } from "./ac110-patiala-rural-types";

export const ac110PatialaRuralData: AC110PatialaRuralTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 110,
    name: "Patiala Rural",
    district: "Patiala",
    region: "Malwa",
    type: "General",
    dataCurrency: "As of 19 May 2026",
  },

  baseline: {
    parliamentarySegment: "Patiala Lok Sabha constituency",
    geographicContext:
      "Patiala Rural surrounds the urban center of Patiala city. The area is a mix of rural villages and peri-urban areas with agricultural economy.",
    areaCharacter: "Mixed rural and peri-urban with agricultural economy",
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    historicalSignificance:
      "Patiala Rural is part of Patiala region with historical political importance. Was previously SAD+BJP stronghold before shifting to AAP.",
    politicalImportance:
      "Defeat of senior Congress leader Brahm Mohindra shows anti-Congress wave, not permanent shift. Large margin makes recovery difficult but not impossible.",
  },

  economicIdentity: {
    primaryActivities: ["Agriculture", "Rural villages", "Peri-urban areas"],
    employmentPatterns: [
      "Agricultural work",
      "Small businesses",
      "Government jobs",
    ],
    areaDescription:
      "Rural villages and peri-urban areas surrounding Patiala city",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  censusData: {
    totalPopulation: "[NEEDS VERIFICATION - Patiala district total]",
    urban: "763,280 (district level)",
    sexRatio: "891 females per 1000 males (district average)",
    literacyRate: "[NEEDS VERIFICATION]",
    casteWise: "[NEEDS VERIFICATION - district level demographics]",
  },

  districtDemographics: {
    totalPopulation: "[NEEDS VERIFICATION]",
    urban: "763,280",
    sexRatio: "891 females per 1000 males",
  },

  electoralRollAnalytics: {
    totalElectors: "~165,000-175,000",
    voterTurnout2022: "~76-79%",
    voterTurnoutStateAverage: "~72%",
  },

  casteComposition: {
    source: "Caste estimates based on district-level data and regional patterns",
    jathSikh: "28-32%",
    obc: "18-22%",
    sc: "20-24%",
    hinduUpperCaste: "16-20%",
    others: "6-8%",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Doctor Balbir Singh",
      party: "Aam Aadmi Party",
      margin: "53,474 votes",
      runnerUp: "Brahm Mohindra",
      runnerUpParty: "INC",
      runnerUpNote: "Former Deputy Chief Minister",
    },
    results2017: {
      winner: "Brahm Mohindra",
      party: "INC",
      note:
        "Sukhbir Singh Badal (former PP president) had contested this seat in 2017",
    },
    results2012: {
      winner: "Congress",
      party: "INC",
    },
    turnoutPattern:
      "Consistent 72-79% in recent elections, above state average in 2022",
    coreVoters: [
      "Agrarian community",
      "Rural households",
      "Jat Sikh voters",
    ],
    swingFactors: [
      "Anti-incumbency against Congress",
      "AAP's anti-corruption narrative",
      "Drug menace concerns",
      "Agrarian distress",
    ],
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    mlaSatisfaction:
      "Doctor Balbir Singh (AAP) sitting MLA - constituent feedback mixed",
    trustInInstitutions:
      "[NEEDS VERIFICATION - general Punjab trends suggest declining trust in state govt]",
    issues: [
      {
        rank: 1,
        title: "Drug Menace",
        description:
          "Rural Patiala affected; Malwa region particularly impacted; youth addiction a major concern",
      },
      {
        rank: 2,
        title: "Agricultural Crisis",
        description:
          "Paddy/wheat farmers facing MSP issues, groundwater depletion, stubble management",
      },
      {
        rank: 3,
        title: "Urban Sprawl",
        description:
          "Rural-urban tension; rural areas feeling ignored in favor of urban development",
      },
      {
        rank: 4,
        title: "Healthcare",
        description:
          "Rural Primary Health Centers inadequate; healthcare access in rural areas poor",
      },
      {
        rank: 5,
        title: "Education",
        description:
          "Government schools failing; rural education infrastructure concerns",
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceGap: {
    serviceDelivery: {
      health:
        "Rural Primary Health Centers inadequate [NEEDS VERIFICATION]",
      education:
        "Government schools failing [NEEDS VERIFICATION]",
      infrastructure:
        "Rural infrastructure gaps [NEEDS VERIFICATION]",
      waterSanitation: "[NEEDS VERIFICATION]",
    },
    schemes: [
      {
        name: "MSP Procurement",
        status: "Issues with procurement delays and guarantees",
      },
      {
        name: "MGNREGA",
        status: "[NEEDS VERIFICATION]",
      },
      {
        name: "Ayushman Bharat",
        status: "[NEEDS VERIFICATION]",
      },
    ],
  },

  issues: [
    {
      category: "Drug Crisis",
      specificIssues: [
        "Uncontrolled drug trade in Malwa region",
        "Youth addiction rates",
        "Doctor Balbir Singh's role questioned",
      ],
    },
    {
      category: "Agrarian Distress",
      specificIssues: [
        "MSP procurement issues",
        "Groundwater depletion",
        "Stubble management",
        "Diesel prices",
      ],
    },
    {
      category: "Rural Development",
      specificIssues: [
        "Healthcare infrastructure",
        "Education facilities",
        "Road connectivity",
        "Water and sanitation",
      ],
    },
    {
      category: "Governance",
      specificIssues: [
        "Rural areas ignored - urban only focus",
        "Broken promises - Rs 1000/month",
        "Unemployment",
      ],
    },
  ],

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalPlayers: {
      currentMLA: {
        name: "Doctor Balbir Singh",
        role: "MLA (2022-2027)",
        party: "AAP",
      },
      formerLeaders: [
        "Brahm Mohindra (Former Dy. CM, Congress)",
        "Sukhbir Singh Badal (Former SAD President)",
      ],
      notableCandidates: [
        "Brahm Mohindra contested and lost in 2022",
        "Sukhbir Singh Badal contested in 2017",
      ],
    },
    communityInfluencers: [
      {
        category: "Religious Leaders",
        individuals: ["[NEEDS VERIFICATION]"],
      },
      {
        category: "Caste Leaders",
        individuals: ["[NEEDS VERIFICATION - dominant castes in area]"],
      },
      {
        category: "Farmers' Unions",
        individuals: ["[NEEDS VERIFICATION]"],
      },
    ],
    casteEquations:
      "Jat Sikh (28-32%) is dominant community; OBC (18-22%), SC (20-24%), Hindu Upper Caste (16-20%) are key vote banks",
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
    consumption:
      "WhatsApp groups for news, TV for elections, newspapers for older voters",
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "Congress still has rural base",
      "Defeated leader Brahm Mohindra may want revenge - utilize",
      "Anti-incumbency building against AAP",
      "Strong Jat Sikh community support possible",
    ],
    weaknesses: [
      "Massive 53,474 vote margin to overcome",
      "AAP has incumbency now",
      "Senior leader's defeat may demoralize party workers",
      "SAD+BJP decline affects overall opposition unity",
    ],
    opportunities: [
      "AAP government anti-incumbency at state level",
      "Rural distress over drug crisis",
      "Agrarian grievances未被解决",
      "Peri-urban areas may feel neglected",
    ],
    threats: [
      "AAP's welfare schemes may retain voters",
      "Doctor Balbir Singh's doctor identity provides credibility",
      "Division among opposition could help AAP",
      "Urban-rural divide issue may not resonate if development visible",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    narratives: [
      "53,474 votes - rejected Brahm Mohindra, got what?",
      "Drug trade grown - Doctor Balbir Singh prescriptions or drugs?",
      "Senior leader defeated, promises also betrayed",
      "Rural areas ignored - urban only focus",
      "Farmers still distressed - MSP not guaranteed",
    ],
    prioritySegments: [
      {
        segment: "Jat Sikh voters (28-32%)",
        rationale:
          "Largest community, traditionally Congress voters, can be mobilized",
      },
      {
        segment: "OBC voters (18-22%)",
        rationale:
          "Key swing vote bank, strategic outreach needed",
      },
      {
        segment: "Rural youth (18-35)",
        rationale:
          "Most affected by unemployment and drug crisis",
      },
      {
        segment: "Farmer households",
        rationale:
          "Agrarian economy, MSP procurement concerns",
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
      profile: "Rural advocate, agricultural background",
      casteConsideration: "Jat Sikh or Hindu Upper Caste",
      keyQualities: [
        "Strong personality",
        "Visible campaigner",
        "Rural connect",
        "Agricultural background",
      ],
      background:
        "New candidate recommended; avoid old faces who failed in 2022",
    },
    attackLines: {
      drugCrisis:
        "Local youth affected by drug addiction despite government claims; Drug trade grown under Doctor Balbir Singh",
      unemployment: "Lack of industrial development in Patiala Rural",
      brokenPromises:
        "Rs 1000/month for women not delivered; promises also betrayed",
      governanceFailures:
        "Infrastructure gaps in rural areas; urban only focus",
      ruralNeglect:
        "Rural areas ignored in favor of urban development",
      farmerDistress:
        "Farmers still distressed - MSP not guaranteed",
    },
    congressStrategy: {
      currentPosition: "Lost senior leader's seat",
      historicalStrength:
        "Was senior Congress leader Brahm Mohindra's constituency",
      challenges: [
        "Massive 53,474 vote margin to overcome",
        "AAP has incumbency now",
        "Senior leader's defeat may demoralize party workers",
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
      "SAD+BJP alliance revival",
    ],
    economicShocks: [
      "Agricultural crisis (crop failure, price crash)",
      "Job loss due to industrial closure",
      "Economic downturn affecting rural areas",
    ],
    socialEvents: [
      "Major drug bust coverage",
      "Communal incidents",
      "Farmer protests",
    ],
    externalShocks: [
      "Pandemic resurgence",
      "Natural calamities affecting agriculture",
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      {
        name: "OneIndia",
        url: "https://www.oneindia.com/patiala-rural-assembly-elections-pb-110/",
      },
      {
        name: "ADR Punjab Analysis",
        url: "https://adrindia.org/sites/default/files/Punjab_Assembly_Elections_2022_Analysis_of_Vote_Share_and_Margin_of_Victory_of_Winners_English.pdf",
      },
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Patiala_Rural_(Punjab_Assembly_constituency)",
      },
      {
        name: "BBC",
        url: "https://www.bbc.com",
      },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Full 2022 results with vote shares",
        "2017 result with Sukhbir Singh Badal",
        "Demographics breakdown",
        "Local political mapping",
        "SAD worker switch to AAP details",
        "Polling booth locations",
        "Health facilities details",
        "Education institutions",
        "MGNREGA current status",
        "PDS coverage details",
        "Ayushman Bharat enrollment",
        "Caste demographics specific to constituency",
        "Ex-MLA/Ministers from area",
        "Booth agents network",
        "Dominant castes in area",
        "Rally grounds and hoarding spots",
        "Must-win booths",
        "Resource allocation details",
        "Common misinformation themes",
      ],
      intelligenceGaps: [
        "Full 2022 results with vote shares",
        "2017 result with Sukhbir Singh Badal",
        "Demographics breakdown",
        "Local political mapping",
        "SAD worker switch to AAP",
      ],
    },
  },

  researchMetadata: {
    microTaskId: "AC110-PatialaRural",
    topic: "Patiala Rural Assembly Constituency - Deep Research",
    tier: "2",
    date: "20 May 2026",
    agent: "Research-Orchestrator",
    sourcesConsulted: "oneindia.com, bbc.com, adrindia.org, wikipedia.org",
    verificationStatus: "PARTIALLY VERIFIED",
    dataCurrency: "As of May 2026 (2022 election data is most recent)",
  },
};
