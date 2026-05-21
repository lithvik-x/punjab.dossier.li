/**
 * AC013-Majitha Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC013-Majitha.md, AC013-Majitha-deep.md
 */

import type { AC013MajithaTypes } from "./ac013-majitha-types";

export const ac013MajithaData: AC013MajithaTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 13,
    name: "Majitha",
    district: "Amritsar",
    region: "Majha",
    type: "General",
    date: "20 May 2026",
  },

  geographicProfile: {
    description:
      "Majitha is a town (Municipal Council) and assembly constituency in Amritsar district, Punjab",
    administrativeStatus: "Municipal Council; Tehsil sub-divisional headquarters",
    location: "Majha region, part of Amritsar Lok Sabha constituency",
    nh3Corridor: true,
    tehsilHQ: true,
    proximityToAmritsar: "~20-25 km",
    proximityToWagah: "~40-50 km",
  },

  baseline: {
    parliamentarySegment: "Amritsar Lok Sabha constituency",
    areaCharacter: "Mixed",
    terrain: "Semi-urban/urban core with significant rural agricultural hinterland",
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    localHeritage: [
      "Majitha village (eponymous origin)",
      "Agricultural tradition",
      "Majha region heartland",
    ],
    regionalSignificance:
      "Majha region heartland; Majithia family has deep roots in surrounding villages",
  },

  // ==========================================================================
  // DEMOGRAPHICS & CASTE COMPOSITION
  // ==========================================================================
  casteComposition: {
    source: "Amritsar district estimates based on Census 2011 and Indiastat Factbook",
    jathSikh: "~35%",
    sc: "~28%",
    obc: "~12%",
    upperCaste: "~18%",
    minority: "~5%",
    other: "~2%",
  },

  districtDemographics: {
    totalSCPopulation: "770,864",
    scPercentage: "30.95%",
    urbanSCPercentage: "21.76% (Amritsar city — urban dilution)",
    ruralSCPercentage: "~36-40%",
  },

  scComposition: {
    majithaMunicipalCouncilSC: "43.65% (per Census2011.co.in)",
    majithaTehsilBlockSC: "39.43% (per Indiastat Factbook)",
  },

  keySocialGroups: [
    {
      group: "Jat Sikh",
      description:
        "Dominant rural caste; core SAD vote bank; agricultural landholding community",
      politicalAffiliation: "Traditional SAD vote bank",
    },
    {
      group: "Ravidassia/Mazhabi Sikh (SC)",
      description:
        "Significant population; historically SAD voters but AAP made inroads in 2022",
      politicalAffiliation: "Historically SAD; AAP gaining in 2022",
    },
    {
      group: "Hindu Khatri/Arora",
      description: "Urban trading class; business community",
      politicalAffiliation: "Typically Congress or AAP",
    },
    {
      group: "Brahmin",
      description: "Urban professional class",
      politicalAffiliation: "Congress/AAP",
    },
  ],

  // ==========================================================================
  // ELECTORAL
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Ganieve Kaur Majithia",
      party: "Shiromani Akali Dal (SAD)",
      voteShare: "[NEEDS VERIFICATION]",
      margin: "26,062 votes",
      totalElectors: "~1,68,000 (estimated)",
      voterTurnout: "~75% (estimated)",
      runnerUp: "[NEEDS VERIFICATION]",
      runnerUpParty: "AAP",
      isHighMarginWin: true,
      marginNotes:
        "Second-highest margin statewide for SAD; one of only 3 SAD wins in 2022",
    },
    results2017: {
      winner: "[NEEDS VERIFICATION]",
      party: "Shiromani Akali Dal",
      runnerUp: "[NEEDS VERIFICATION]",
      runnerUpParty: "Congress",
      margin: "[NEEDS VERIFICATION]",
    },
    results2012: {
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      margin: "[NEEDS VERIFICATION]",
    },
    turnoutPattern:
      "Consistent ~72-78% in recent elections; Majitha bucked AAP wave in 2022",
    coreVoters: [
      "Jat Sikh rural voters",
      "Dalit voters (Ravidassia/Mazhabi)",
      "Agrarian community",
    ],
    swingFactors: [
      "AAP wave (partially countered by Majithia family influence in 2022)",
      "Young voters (18-35) attracted to AAP",
      "Dalit vote shift toward AAP",
    ],
  },

  electoralRollAnalytics: {
    totalElectors2022: "~1,68,000 (estimated)",
    voterTurnout2022: "~75% (estimated)",
    genderGap: "[NEEDS VERIFICATION]",
    turnoutStateAverage: "~78%",
  },

  ganieveKaurMajithiaSignificance: {
    familyBackground:
      "Member of prominent Majithia family; Bikram Singh Majithia (relative) was a prominent Congress minister, later switched to SAD+BJP",
    marginSignificance:
      "Second-highest margin statewide for SAD; one of only 3 SAD winners in 2022 — extremely narrow survival against AAP wave",
    statewideContext:
      "Majitha is one of only 3 SAD wins statewide in 2022 — very narrow survival against AAP wave. Makes it a critical target for AAP in 2027 and a must-hold for SAD",
    winType:
      "Personal/family base overcame AAP wave — indicates very strong Majithia family influence",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    perceivedMoodStatus: "needs_verification",
    sadResilience2022:
      "Majitha bucked the AAP wave due to Majithia family local influence; SAD's traditional vote bank (Jat Sikh rural, Dalit) partially held",
    threatsToSadHold2027: [
      "AAP's continued governance presence may have eroded SAD rural base further",
      "Young voters (18-35) may prefer AAP's 'change' narrative",
      "Dalit voters (Ravidassia) historically SAD but 2022 AAP wave made inroads",
    ],
    farmerDistress:
      "Critical issue — MSP procurement gaps, diesel costs, stubble management, credit. Farmer agitations affect rural Majitha significantly",
    drugCrisis:
      "Rural Amritsar district including Majitha affected; AAP government criticized for inadequate response",
  },

  localIssues: {
    issues: [
      {
        rank: 1,
        title: "Farmer Distress",
        description:
          "MSP procurement gaps, diesel costs, stubble burning restrictions (major in rural Majitha)",
        affectedSegments: ["Farmer households (~60-65%)", "Rural voters"],
      },
      {
        rank: 2,
        title: "Drug Addiction",
        description:
          "Rural youth addiction; border-adjacent Amritsar region; law & order concern",
        affectedSegments: ["Rural youth", "Families", "All voters"],
      },
      {
        rank: 3,
        title: "Rural Roads & Irrigation",
        description:
          "Farm-to-market roads, canal water for irrigation, agricultural infrastructure",
        affectedSegments: ["Rural voters", "Farmer community"],
      },
      {
        rank: 4,
        title: "Urban Civic Services",
        description:
          "Majitha town water supply, drainage, street lighting, Municipal infrastructure",
        affectedSegments: ["Urban voters (~35-40%)", "Majitha town residents"],
      },
      {
        rank: 5,
        title: "Youth Unemployment",
        description:
          "Skills gap; limited industrial development; migration to cities/overseas",
        affectedSegments: ["Young voters (18-35)", "Rural youth"],
      },
    ],
  },

  governanceGap: {
    serviceDelivery: {
      health: "[NEEDS VERIFICATION — Amritsar district has hospitals; rural sub-centers]",
      education:
        "[NEEDS VERIFICATION — Government schools, some private institutions]",
      roads: "NH3 road passing through provides connectivity; rural roads need improvement",
      waterSanitation:
        "Majitha town: Municipal infrastructure gaps (water, sewerage, roads) [NEEDS VERIFICATION]",
    },
    schemeImplementation: {
      mgnrega: "[NEEDS VERIFICATION — active in Amritsar district]",
      beneficiaryLists: "[NEEDS VERIFICATION — inclusion/exclusion errors likely]",
      pds:
        "Fair Price Shops operational [NEEDS VERIFICATION — specific Majitha coverage]",
    },
  },

  mlaperformance: {
    mlaName: "Ganieve Kaur Majithia",
    party: "SAD",
    termCount: 1,
    roleDescription:
      "First/first-term MLA in 2022; as SAD MLA in AAP-ruled state, limited direct program implementation; opposition MLA role: highlighting AAP government failures",
    constituencyFundUtilization: "[NEEDS VERIFICATION — specific projects 2022-2026]",
  },

  majithiaFamilyLegacy: {
    bikramSinghMajithiaRole:
      "Family kingmaker; former Congress minister; massive local influence; SAD-BJP alliance figure; switched from Congress to SAD+BJP",
    familyBackground:
      "Majithia family has historical roots in Majha region; significant land ownership; feudal-style influence in surrounding villages",
    landOwnership: "Significant land ownership in Majha region",
    patronageNetwork:
      "Networks of obligation through patronage; booth-level SAD machinery (reduced but present after 2022 collapse)",
  },

  infrastructure: {
    nh3Road: "NH3 (Amritsar-Pathankot corridor) passing through provides connectivity",
    majithaTown:
      "Municipal infrastructure — water, sewerage, roads; administrative functions as Tehsil HQ",
    ruralInfrastructure:
      "Agricultural roads, irrigation infrastructure [NEEDS VERIFICATION — specific gaps]",
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalInfluencers: [
      {
        name: "Ganieve Kaur Majithia",
        role: "SAD MLA, incumbent",
        influenceLevel: "high",
        party: "SAD",
      },
      {
        name: "Bikram Singh Majithia",
        role: "Former Minister, family kingmaker",
        influenceLevel: "high",
        party: "SAD+BJP",
      },
      {
        name: "SAD Party Workers",
        role: "Booth-level machinery",
        influenceLevel: "medium",
        party: "SAD",
      },
      {
        name: "Congress Workers",
        role: "Retained some rural base",
        influenceLevel: "medium",
        party: "Congress",
      },
    ],
    socialReligiousInfluencers: [
      {
        category: "Majithia Family",
        names: ["Feudal-style influence in surrounding villages"],
      },
      {
        category: "Gurudwara Committees",
        names: ["Rural Sikh voter mobilization"],
      },
      {
        category: "Jat Sikh Sarpanches",
        names: ["Village-level decision makers"],
      },
      {
        category: "SC Community Leaders",
        names: ["Ravidassia community vote — key swing group"],
      },
    ],
    familyInfluence:
      "Majithia family: feudal-style influence in surrounding villages; networks of obligation through patronage",
    boothLevel:
      "SAD booth-level machinery reduced but present after 2022 collapse [NEEDS VERIFICATION]",
    casteEquations:
      "Jat Sikh dominant rural; SC (Ravidassia) key swing group; AAP made Dalit inroads in 2022",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Amritsar Tribune", "Punjab Kesari", "Ajit Daily"],
      regionalNews: ["The Tribune", "Indian Express"],
      digital: ["Babushahi.com", "Facebook", "WhatsApp", "YouTube (Punjabi news channels)"],
      cable: ["Local cable news"],
    },
    consumption: {
      primaryChannel: "WhatsApp groups for voter contact chains; Facebook for electoral communication",
      voterContactMethod: "WhatsApp voter contact chains; Facebook primary electoral communication",
      platformNotes:
        "YouTube for Punjabi news channels; local cable for regional news",
    },
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    majithaTownDescription:
      "Urban core with administrative functions (Tehsil HQ); Municipal Council",
    ruralAreaDescription:
      "Agricultural villages on both sides of NH3; farm-based economy",
    nh3Corridor: "Majitha lies on Amritsar-Pathankot NH3 corridor — major road junction",
    proximityToAmritsarCity: "~20-25 km",
    proximityToWagahBorder: "~40-50 km",
    voterDemographics: {
      ruralVoters: "~60-65%",
      urbanVoters: "~35-40% (Majitha town)",
      scVoters: "~38-40%",
      jathSikhVoters: "~35-40%",
      otherHindu: "~15-20% (Khatri, Brahmin, Arora)",
    },
  },

  boothLogistics: {
    status: "needs_verification",
    locations: [],
  },

  campaignInfrastructure: {
    rallyGrounds: "[NEEDS VERIFICATION]",
    hoardingSpots: "[NEEDS VERIFICATION]",
  },

  // ==========================================================================
  // SWOT ANALYSIS (SAD perspective)
  // ==========================================================================
  swotAnalysis: {
    sad: {
      strengths: [
        "Majithia family personal charisma and local influence",
        "Strong rural Jat Sikh base (SAD's core vote)",
        "High-margin 2022 retention — proven winning ability",
        "SAD's 'party of Punjab' identity for rural voters",
      ],
      weaknesses: [
        "Statewide near-wipeout in 2022 — institutional weakness",
        "AAP government has 4 years to erode rural SAD base",
        "Dalit outreach limited (AAP made inroads with Ravidassia voters)",
      ],
      opportunities: [
        "Farmer agitation on MSP can be leveraged",
        "SAD+BJP alliance rebuilds Hindutva+farmer coalition",
        "Congress alliance could consolidate anti-AAP votes",
      ],
      threats: [
        "AAP's sustained presence 2022-2026 may have shifted voter preferences permanently",
        "Young voters attracted to AAP's 'change' narrative",
        "Dalit vote split between SAD (historical) and AAP (2022 gain)",
      ],
    },
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    forSad: {
      party: "SAD",
      keyNarratives: [
        "SAD's farmer credentials: MSP guarantee, stubble management",
        "Attack AAP governance: drug crisis unaddressed, farmers ignored",
        "SAD+BJP alliance narrative: 'Punjab's own party + strong central support'",
        "Majithia family legacy and local influence",
      ],
      prioritySegments: [
        {
          segment: "Jat Sikh rural voters",
          rationale: "Core SAD vote bank; strongest base",
        },
        {
          segment: "Dalit voters (Ravidassia)",
          rationale: "Historical SAD voters — need retention strategy",
        },
        {
          segment: "Young voters (18-35)",
          rationale: "Counter AAP's 'change' narrative",
        },
      ],
      candidateNotes:
        "Field Ganieve Kaur Majithia — incumbency + family name critical for 2027",
    },
    forAap: {
      party: "AAP",
      keyNarratives: [
        "Target Dalit voters: highlight SAD's 'neglect' of SC communities",
        "Urban voter mobilization in Majitha town",
        "Farmer narrative: 'CM Mann also delivering for farmers despite central government obstruction'",
        "Youth: employment schemes, skills training announcements",
        "Drug crisis: 'Seizures up under AAP' — law & order narrative",
      ],
      prioritySegments: [
        {
          segment: "Dalit voters (Ravidassia)",
          rationale: "2022 gains — consolidate and expand",
        },
        {
          segment: "Urban voters",
          rationale: "Majitha town component (~35-40%)",
        },
        {
          segment: "Young voters",
          rationale: "Employment and change narrative",
        },
      ],
      candidateNotes:
        "AAP fielding heavyweight candidate could flip urban component",
    },
    forCongress: {
      party: "Congress",
      keyNarratives: [
        "Only viable if Congress-SAD alliance materializes",
        "Without alliance: third-place finish likely given AAP wave",
        "Anti-AAP consolidation strategy",
      ],
      prioritySegments: [
        {
          segment: "Traditional Congress voters",
          rationale: "Retain remaining base",
        },
        {
          segment: "Swing voters",
          rationale: "Limited without alliance",
        },
      ],
      candidateNotes:
        "Must find heavyweight candidate or build coalition; Majithia family dominance is the core challenge",
    },
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    factors: [
      {
        factor: "SAD+BJP alliance formalized",
        probability: "High",
        impact: "HIGH",
      },
      {
        factor: "Congress-SAD alliance (Congress retreats)",
        probability: "Medium",
        impact: "HIGH",
      },
      {
        factor: "Majithia family internal conflict",
        probability: "Low",
        impact: "HIGH",
      },
      {
        factor: "AAP fielding heavyweight candidate",
        probability: "Medium",
        impact: "HIGH",
      },
      {
        factor: "Farmer agitation peaks pre-election",
        probability: "Medium",
        impact: "HIGH",
      },
      {
        factor: "Major drug crackdown by AAP government",
        probability: "Medium",
        impact: "MEDIUM",
      },
    ],
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      profile: "Strong local candidate, anti-AAP consolidation candidate",
      casteConsideration: "Jat Sikh, prefer Majha background; can challenge Majithia family influence",
      keyQualities: [
        "Can challenge Majithia family influence",
        "Anti-AAP consolidation positioning",
        "Rural connect and agricultural background",
      ],
    },
    attackLines: {
      drugCrisis: "Majha region badly affected; AAP government criticized for inadequate response",
      familyRule: "Majithia family dominance questioned; feudal-style influence in surrounding villages",
      brokenPromises: "Development promises unfulfilled; rural infrastructure gaps remain",
      aapWave: "Anti-incumbency against old parties; AAP wave still a factor in 2027",
    },
    congressStrategy: {
      currentPosition:
        "SAD won decisively with 26,062 margin. The Majithia family has deep roots here. Congress must either find a heavyweight candidate or build coalition strategy",
      majithiaFamilyDepth:
        "Majithia family has historical roots in Majha region; significant land ownership; feudal-style influence through patronage networks",
      strategicOptions:
        "Coalition strategy (Congress-SAD alliance) or heavyweight local candidate; third-place likely without one of these",
    },
  },

  // ==========================================================================
  // INTELLIGENCE GAPS & VERIFICATION
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      {
        item: "Full 2022 Majitha results — all candidate vote counts",
        priority: "high",
      },
      {
        item: "Ganieve Kaur Majithia profile — caste, prior political experience, family details",
        priority: "high",
      },
      {
        item: "2017 electoral history — trend analysis for Majitha",
        priority: "high",
      },
      {
        item: "Majitha SC community breakdown — Ravidassia vs Mazhabi vs other SC groups",
        priority: "medium",
      },
      {
        item: "Booth-level results — to identify margins by voter type",
        priority: "high",
      },
      {
        item: "MLA's constituency fund utilization 2022-2026 — specific projects",
        priority: "medium",
      },
      {
        item: "Majitha town's specific infrastructure gaps — water, drainage, roads",
        priority: "medium",
      },
      {
        item: "SAD's actual vote share in Majitha 2022 — was it >40% or less?",
        priority: "high",
      },
    ],
    monitoringKeywords: [
      '"majitha" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
      '"ganieve kaur majithia" AND "majitha"',
      '"majitha" AND ("sad" OR "aap" OR "congress")',
      '"majitha" AND ("farmer" OR "msp" OR "stubble")',
      '"bikram singh majithia" AND "majitha"',
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "OneIndia", url: "https://www.oneindia.com" },
      { name: "IndiaVotes", url: "https://www.indiavotes.com" },
      { name: "CNBC TV18", url: "https://www.cnbctv18.com" },
      { name: "ADR India", url: "https://adrindia.org" },
      { name: "Indiastat Publications", url: "https://www.indiastat.com" },
      { name: "CityPopulation.de", url: "https://www.citypopulation.de" },
      { name: "Punjab Census Handbook", url: "https://censusindia.gov.in" },
      { name: "Financial Express", url: "https://www.financialexpress.com" },
      { name: "Outlook India", url: "https://www.outlookindia.com" },
      { name: "The Federal", url: "https://www.thefederal.com" },
      { name: "India Today", url: "https://www.indiatoday.in" },
    ],
    researchStatus: {
      status: "PARTIALLY_VERIFIED",
      verificationNeeded: [
        "Full 2022 Majitha results — all candidate vote counts",
        "Ganieve Kaur Majithia profile",
        "2017 electoral history for Majitha",
        "Majitha SC community breakdown (Ravidassia vs Mazhabi)",
        "Booth-level results",
        "MLA constituency fund utilization 2022-2026",
        "Majitha town infrastructure gaps",
        "SAD's actual vote share in Majitha 2022",
        "Perceived mood — field intelligence required",
        "Rally grounds and hoarding spots",
        "Booth-level machinery details",
      ],
    },
    dataCurrency: "As of 20 May 2026",
  },

  // ==========================================================================
  // DEEP RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    microTaskId: "AC013-Majitha-001",
    topic: "Majitha Assembly Constituency Deep Research",
    tier: 2,
    date: "20 May 2026",
    agent: "Orchestrator-R1",
    sourcesConsulted:
      "Web search (minimax-web-search), OneIndia, ADR India PDF, IndiaVotes, Indiastat Publications, CityPopulation.de, Punjab Census Handbook",
    verificationStatus: "PARTIALLY_VERIFIED",
    dataCurrency: "As of 20 May 2026",
  },
};
