/**
 * AC033-Kartarpur Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC033-Kartarpur.md, AC033-Kartarpur-deep.md
 */

import type { AC033KartarpurTypes } from "./ac033-kartarpur-types";

export const ac033KartarpurData: AC033KartarpurTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 33,
    name: "Kartarpur",
    district: "Jalandhar",
    region: "Doaba",
    lokSabha: "Jalandhar",
    type: "SC",
    reservation: "SC (Scheduled Caste)",
    totalElectors2022: "184,762",
    religiousSignificance: "Kartarpur Corridor, Guru Nanak connection",
    keyIdentifiers: [
      "Religious Site: Kartarpur Corridor terminus",
      "Doaba Region: Between Beas and Satluj",
      "SC Reserved: Significant SC population",
      "Border Adjacent: Near Pakistan via Corridor",
    ],
  },

  baseline: {
    geographicContext:
      "Located in Jalandhar district, Doaba region. The area gained international attention due to the Kartarpur Corridor - a visa-free border crossing connecting Gurudwara Darbar Sahib in Pakistan to the Indian side.",
    areaGainedInternationalAttention:
      "Kartarpur Corridor - a visa-free border crossing connecting Gurudwara Darbar Sahib in Pakistan to the Indian side",
    category: "SC Reserved",
  },

  historicalContext: {
    kartarpurCorridor:
      "Visa-free border crossing connecting Gurudwara Darbar Sahib in Pakistan to the Indian side",
    guruNanakConnection:
      "Sacred Sikh pilgrimage site associated with Guru Nanak",
    religiousStrategicSignificance:
      "The constituency has religious and strategic significance due to the Kartarpur Corridor",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographicDeepDive: {
    religiousComposition: {
      sikh: "~59% (approximate)",
      hindu: "~38% (approximate)",
      other: "<3%",
    },
    casteComposition: {
      sc: "51.25% (assembly average)",
      scTown: "38.85% (Kartarpur town)",
      scVillage: "31.50% (Kartarpur village)",
      ramdasiaRavidassia: "Dominant SC communities",
      mazhabiSikh: "Rural SC presence",
      jathSikh: "~20-25%",
      obc: "~12-15%",
      hindu: "~5-8%",
    },
    townDemographics: {
      municipalCouncilPopulation: "~25,000",
      scPopulationTown: "38.85% in town",
      religiousPilgrims: "Regular visitors",
    },
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electoralHistory: {
    results2022: {
      winner: "Balkar Singh",
      party: "Aam Aadmi Party",
      voteShare: "~38% (estimated)",
      margin: "4,574 votes",
      runnerUp: "Not specified",
      runnerUpParty: "Not specified",
      status: "Narrow but decisive margin",
    },
    results2017: {
      winner: "Chaudhary Surinder Singh",
      party: "Indian National Congress",
    },
    results2012: {
      winner: "Sarwan Singh Phillaur",
      party: "Shiromani Akali Dal",
    },
    historicalTrend:
      "2022: AAP win (4,574 margin), Congress strong second, Three-way contest between Congress, AAP, SAD",
    loksabha2024: "[NEEDS VERIFICATION]",
  },

  voterTurnout: {
    2022: "~68-70% (estimated)",
    2017: "~74-76%",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    currentMood:
      "Watchful - AAP won in 2022 and elevated Balkar Singh to cabinet. This shows AAP's commitment to seat. However, 4,574 margin is not comfortable. Congress will target this.",
    keyDrivers: [
      "Kartarpur Corridor: Religious tourism impact",
      "SC Politics: Caste consolidation crucial",
      "Border: Security and smuggling concerns",
      "Religious: Sikh pilgrimage economy",
      "Agriculture: Rural distress",
    ],
    grievances: [
      "Corridor facilities management",
      "Border security",
      "Agricultural distress",
      "Healthcare",
      "Unemployment",
    ],
  },

  localIssues: {
    topIssues: [
      {
        rank: 1,
        title: "Drug addiction",
        description: "Crisis in SC communities",
      },
      {
        rank: 2,
        title: "Caste discrimination",
        description: "Social justice issues",
      },
      {
        rank: 3,
        title: "Employment",
        description: "Jobs for SC youth",
      },
      {
        rank: 4,
        title: "Education",
        description: "Access for SC children",
      },
      {
        rank: 5,
        title: "Land reforms",
        description: "Agricultural issues",
      },
    ],
    kartarpurSpecific: [
      "Corridor entrance facilities",
      "Security at border",
      "Pilgrim amenities",
      "Town infrastructure",
    ],
  },

  // ==========================================================================
  // GOVERNANCE
  // ==========================================================================
  governanceGap: {
    currentRepresentation: {
      mla: "Balkar Singh",
      party: "AAP",
      ministryRole: "Local Government Minister",
      district: "Jalandhar",
      state: "AAP government",
    },
    activeSchemes: {
      schemes: [
        "Mera Ghar, Mera Maan",
        "Ashirwad Scheme",
        "SC welfare schemes",
        "Aam Aadmi Clinics",
        "Free electricity",
      ],
    },
    developmentGaps: {
      gaps: [
        "Kartarpur town infrastructure",
        "Corridor approach roads",
        "Healthcare facilities",
        "Religious site facilities",
      ],
    },
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalActors: {
      aapMla: "Balkar Singh (AAP MLA, Local Government Minister)",
      congressLeaders: "[NEEDS VERIFICATION]",
      sadLeaders: "[NEEDS VERIFICATION]",
      gurudwaraCommittee: "Gurudwara Committee: Religious authority",
    },
    communityInfluencers: {
      scLeaders: "Crucial in reserved seat",
      gurudwaraCommittees: "Kartarpur Sahib management",
      religiousPilgrims: "Regular visitors",
      borderCommunities: "Security consciousness",
    },
    powerDynamics:
      "AAP holds seat with minister, Congress main opposition, Religious community influence, Border security apparatus",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      localMedia: ["Punjabi press"],
      religiousPublications: ["Sikh religious publications"],
      coverage: "Corridor coverage (national)",
      networks: ["WhatsApp networks"],
    },
    specialFactor: {
      factor: "Kartarpur Corridor has national media attention",
      pilgrimageSeasonCoverage: "Pilgrimage season coverage",
      diplomaticAngle: "Pakistan-India diplomatic angle",
    },
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyLocations: {
      locations: [
        "Kartarpur town",
        "Gurudwara Darbar Sahib area (Pakistan side)",
        "Corridor terminal point",
        "Border security zone",
      ],
    },
    infrastructure: {
      corridorAccessRoad: "Corridor access road",
      securityInfrastructure: "Security infrastructure",
      healthcare: "CHC level",
      pilgrimFacilities: "Pilgrim facilities",
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "AAP holds seat with cabinet minister",
      "Religious tourism importance",
      "SC reserved constituency",
      "Doaba region identity",
    ],
    weaknesses: [
      "Narrow 2022 margin (4,574)",
      "Border smuggling concerns",
      "Rural infrastructure gaps",
      "Agricultural distress",
    ],
    opportunities: [
      "Religious tourism promotion",
      "NRI investment (pilgrimage)",
      "SC welfare schemes",
      "Corridor development",
    ],
    threats: [
      "Congress rebound",
      "Border security incidents",
      "Anti-incumbency",
      "Smuggling politics",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congressStrategy: {
      candidate: "Strong SC candidate, clean image",
      caste: "SC consolidation essential",
      issues: "SC welfare, corridor, development",
      campaign: "AAP failed despite minister",
      religiousApproach: "Respect Kartarpur heritage",
    },
    aapStrategy: {
      candidate: "Balkar Singh or replacement",
      caste: "SC + religious + youth",
      issues: "AAP schemes, corridor development",
      campaign: "Minister delivered for Kartarpur",
    },
    targetSegments: {
      segments: [
        "SC voters (decisive)",
        "Religious pilgrims",
        "Border communities",
        "Youth (employment)",
      ],
    },
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: {
      wildcards: [
        "Corridor Relations: India-Pak tensions",
        "Minister Performance: Balkar Singh's delivery",
        "Border Incident: Security concerns",
        "Alliance: Congress-SAD scenario",
      ],
    },
    triggers: {
      triggers: [
        "Corridor pilgrimage season",
        "India-Pak relations",
        "SC scheme delivery",
        "Monsoon conditions",
      ],
    },
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      caste: "Mazhabi/Ramdasia Sikh (CRITICAL for this SC seat)",
      profile: "Dalit rights activist, social worker, clean image",
      keyQualification: "Must reconnect with SC voters",
      mustAddress: "Drug crisis in Dalit bastis",
    },
    attackLines: {
      lines: [
        "Balkar Singh: What did he do for SC community in 4 years?",
        "Drug addiction: SC bastis destroyed, no government help",
        "Rs 1000/month: SC families didn't get promised money",
        "Reservation implementation: SC students still lack school access",
        "Broken promises: Employment for SC youth, nothing done",
      ],
    },
    congressPosition: {
      status:
        "CHALLENGING - AAP won by 4,574 votes. Congress had won in 2017. Tight contest possible.",
      keyFactors: [
        "2017: Congress (Chaudhary Surinder Singh) won",
        "2022: AAP (Balkar Singh) won",
        "Three-way contest between Congress, AAP, SAD",
        "Congress can reclaim if they field right candidate",
      ],
      reclaimCondition: "Congress can reclaim if they field right candidate",
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    researchStatus: {
      dossierId: "AC033-Kartarpur-deep",
      topic: "Kartarpur Assembly Constituency Deep Research",
      date: "20 May 2026",
      dataCurrency: "As of 20 May 2026",
      sources: [
        "Web search",
        "Election Commission data",
        "Census 2011",
      ],
      verificationStatus:
        "PARTIALLY VERIFIED - Data predating 2024 marked as such",
    },
    dataGaps: {
      requiredVerification: [
        "2017 results",
        "SC community voting patterns",
        "Corridor impact on economy",
        "Booth-level data",
        "Border security assessment",
      ],
      intelligencePriorities: [
        "SC community leadership mapping",
        "Booth-level AAP strength",
        "Congress organization",
        "Religious community mood",
        "Corridor security assessment",
      ],
    },
  },
};
