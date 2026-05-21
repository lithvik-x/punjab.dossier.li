/**
 * AC031-Nakodar Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC031-Nakodar.md, AC031-Nakodar-deep.md
 */

import type { AC031NakodarTypes } from "./ac031-nakodar-types";

export const ac031NakodarData: AC031NakodarTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 31,
    name: "Nakodar",
    district: "Jalandhar",
    region: "Doaba",
    type: "General",
    lokSabha: "Jalandhar",
    reservation: "None (General)",
    totalElectors2022: "194,933",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Jalandhar Lok Sabha constituency",
    tehsil: "Nakodar",
    areaCharacter: "Intensive agriculture and high SC population region",
    geographicContext:
      "Nakodar is a town and tehsil in Jalandhar district, Doaba region. The area is characterized by intensive agriculture and high SC population. Nakodar has historical significance in Sikh history.",
    keyIdentifiers: {
      doabaRegion: "Between Beas and Satluj",
      jalandharDistrictSc: "SC 38.95%",
      agricultural: "Wheat, paddy, sugarcane",
      historic: "Sikh history connections",
    },
  },

  historicalContext: {
    formation: "Part of Nakodar tehsil in Jalandhar district",
    historicalSignificance: "Area has historical significance in Sikh history",
    localHeritage: [
      "Sikh history connections",
      "Agricultural tradition",
      "Gurudwara sites",
    ],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographicProfile: {
    religiousComposition: {
      sikh: "~59% (approximate)",
      hindu: "~38% (approximate)",
      other: "<3%",
    },
    casteComposition: {
      scheduledCaste: "36.49% (Nakodar town)",
      jatSikh: "Rural majority",
      ramdasiaRavidassia: "Significant rural presence",
      obc: "Tarkhan, Kashyap communities",
    },
    townDemographics: {
      nakodarTownPopulation: "~15,000",
      scInTown: "36.49%",
      literacy: "[NEEDS VERIFICATION]",
    },
    casteCompositionStatus: "needs_verification",
  },

  voterTurnout: {
    2022: "~68-70% (estimated)",
    2017: "~74-76%",
    pattern: "Declining turnout trend observed",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Inderjit Kaur Mann",
      party: "Aam Aadmi Party (AAP)",
      voteShare: "~38% (estimated)",
      margin: "2,869 votes",
      marginVotes: 2869,
      runnerUp: "Gurpartap Singh Wadala",
      runnerUpParty: "Shiromani Akali Dal (SAD)",
      totalElectors: "194,933",
      voterTurnout: "~68-70% (estimated)",
      votesPolled: "[NEEDS VERIFICATION]",
      status: "partial",
    },
    results2017: {
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
      margin: "[NEEDS VERIFICATION]",
      status: "needs_verification",
    },
    results2012: {
      winner: "Gurpartap Singh Wadala",
      party: "Shiromani Akali Dal (SAD)",
      status: "verified",
    },
    turnoutPattern:
      "2022: AAP won narrowly with 2,869 margin. Smallest margin in region indicates vulnerability.",
    coreVoters: [
      "Jat Sikh rural voters",
      "SC voters (Mazhabi/Ramdasia)",
      "Agrarian community",
    ],
    swingFactors: [
      "Anti-incumbency building against AAP",
      "SAD revival attempt",
      "Congress positioning",
      "Three-way contest possible",
    ],
    historicalTrend:
      "2012: SAD (Gurpartap Singh Wadala) won. 2022: AAP (Inderjit Kaur Mann) won by narrow margin (2,869).",
  },

  casteComposition: {
    source: "District-level data with field verification recommended",
    jatSikh: "~35-40%",
    scMazhabiRamdasia: "~30-35%",
    obc: "~15-18%",
    hindu: "~10-12%",
    other: "~5-10%",
  },

  casteCompositionDeep: {
    scPopulation: "36.49% (Nakodar town)",
    jatSikhRuralMajority: "Rural majority",
    ramdasiaRavidassia: "Significant rural presence",
    obcTarkhanKashyap: "Tarkhan, Kashyap communities",
    townSc: "36.49%",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    currentMood: "Volatile",
    volatility:
      "With only 2,869 margin, Nakodar is highly vulnerable. AAP won narrowly in 2022. Any anti-incumbency or strong opposition candidate could flip this seat.",
    keySentimentDrivers: [
      "Narrow Win: Anti-incumbency likely building",
      "Agriculture: Rural distress prominent",
      "Doaba Identity: Regional consciousness",
      "Caste: High SC population",
      "Youth: Employment priorities",
    ],
    grievances: [
      "Agricultural distress",
      "Road infrastructure",
      "Healthcare facilities",
      "Employment",
    ],
    misinformationStatus: "needs_verification",
  },

  localIssues: {
    topIssues: [
      {
        rank: 1,
        title: "Tight Electoral Contest",
        description:
          "Only 2,869 margin in 2022 - seat is highly contestable",
        prioritySegment: ["All voters"],
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description: "Doaba region vulnerability to drug menace",
        prioritySegment: ["Rural youth", "Families"],
      },
      {
        rank: 3,
        title: "Agricultural Distress",
        description: "Stubble burning, MSP procurement issues",
        prioritySegment: ["Farmer households"],
      },
      {
        rank: 4,
        title: "Rural Infrastructure",
        description: "Roads, irrigation needs",
        prioritySegment: ["Rural residents"],
      },
      {
        rank: 5,
        title: "Employment",
        description: "Youth unemployment",
        prioritySegment: ["Young voters (18-35)"],
      },
    ],
    nakodarSpecific: [
      "Town municipality needs",
      "Mandi facilities",
      "Sugarcane pricing (if applicable)",
      "Flood vulnerability [NEEDS VERIFICATION]",
    ],
  },

  // ==========================================================================
  // GOVERNANCE
  // ==========================================================================
  governanceGap: {
    currentRepresentation: {
      mla: "Inderjit Kaur Mann (AAP)",
      district: "Jalandhar",
      state: "AAP government",
    },
    activeSchemes: {
      meraGharMeraMaan: true,
      ashirwadScheme: true,
      aamAadmiClinics: true,
      freeElectricity: true,
    },
    developmentGaps: {
      nakodarTownInfrastructure: "Town infrastructure needs attention",
      ruralRoadNetwork: "Rural road network gaps",
      agriculturalExtension: "Agricultural extension services limited",
      healthcare: "CHC facilities need improvement",
    },
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalActors: {
      aapMla: "Inderjit Kaur Mann (AAP MLA)",
      congressLeaders: "[NEEDS VERIFICATION]",
      sadLeaders: "[NEEDS VERIFICATION]",
      bjpLeaders: "[NEEDS VERIFICATION]",
    },
    communityInfluencers: {
      jatSikhElders: "Rural influence",
      scLeaders: "High SC population - significant influence",
      gurudwaraCommittees: "Religious authority in community",
      exServicemen: "Veterans community presence",
    },
    powerStructureDescription:
      "AAP holds by narrow margin. Congress main opposition. SAD trying to recover. Caste-based voting patterns.",
    casteBasedVoting: "High SC population (36.49%) significant voting bloc",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi press"],
      doabaNewspapers: ["Doaba newspapers"],
      cableTv: ["Cable TV", "Regional news channels"],
      digital: ["WhatsApp networks", "Facebook", "Instagram"],
    },
    consumption: {
      primaryChannels: ["Punjabi press", "Doaba newspapers", "Cable TV"],
      socialMediaUsage: ["WhatsApp", "Facebook", "Instagram"],
    },
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyLocations: {
      nakodarTown: "Town and tehsil headquarters",
      agriculturalVillages: "Agricultural villages in surrounding area",
      gurudwaraSites: "Gurudwara sites in the region",
      roadConnections: "Roads to Jalandhar and Moga",
    },
    infrastructure: {
      roadsToJalandharMoga: "Connectivity to Jalandhar and Moga",
      healthcare: "CHC level facilities",
      education: "[NEEDS VERIFICATION]",
      mandiFacilities: "Mandi facilities [NEEDS VERIFICATION]",
    },
    healthcareLevel: "CHC level",
    educationStatus: "needs_verification",
    mandiFacilitiesStatus: "needs_verification",
    floodVulnerability: "[NEEDS VERIFICATION]",
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "AAP incumbent with sitting MLA advantage",
      "AAP government schemes (Mera Ghar Mera Maan, Ashirwad, Aam Aadmi Clinics, Free Electricity)",
      "High SC population (AAP base demographic)",
      "Doaba regional identity",
    ],
    weaknesses: [
      "Very narrow 2022 margin (2,869 votes) - TIGHT RACE",
      "Anti-incumbency likely building against AAP",
      "AAP government criticism",
      "Limited visible development",
      "Declining voter turnout (68-70% vs 74-76% previously)",
    ],
    opportunities: [
      "Congress-SAD alliance could impact results",
      "Strong candidate selection",
      "Local issues campaign focusing on development",
      "Caste consolidation (Jat Sikh + SC combination)",
      "Three-way contest could split votes",
    ],
    threats: [
      "Congress rebound in 2027",
      "SAD revival under new leadership",
      "Another narrow margin loss for Congress/AAP",
      "Voter swing based on candidate selection",
      "Anti-incumbency could flip seat",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congressStrategy: {
      priority: "HIGH PRIORITY - AAP won by only 2,869 votes",
      candidateRequirements: {
        profile: "Strong local with clean image",
        caste: "Jat Sikh + SC combination",
        keyQualities: [
          "Strong local connect",
          "Development focus",
          "Clean image",
          "Appeal across Jat Sikh and SC voters",
        ],
      },
      issues: ["Agriculture", "Development", "Jobs"],
      campaignFocus:
        "AAP failed despite being in power. What did Inderjit Kaur Mann do in 4 years?",
      boothOrganization: "Strong organization needed at booth level",
    },
    aapStrategy: {
      candidateOptions: ["Inderjit Kaur Mann", "New candidate"],
      caste: "SC + urban + youth combination",
      issues: ["AAP schemes", "Welfare"],
      campaignFocus: "Development under AAP government",
    },
    targetSegments: [
      {
        segment: "Rural Jat Sikh",
        rationale: "Core vote bank, traditionally influential",
      },
      {
        segment: "SC voters (substantial ~30-35%)",
        rationale: "High population, AAP base but could be contested",
      },
      {
        segment: "Women",
        rationale: "Welfare schemes (Mera Ghar Mera Maan, Ashirwad)",
      },
      {
        segment: "Youth",
        rationale: "Employment priorities, affected by drug crisis",
      },
    ],
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      profile: "Strong rural connect, development focus, clean image",
      casteConsideration: "Jat Sikh or Rajput Sikh",
      keyQualifications: [
        "Must appeal across Jat Sikh and SC voters",
        "Clear stance on drug crisis",
        "Local connect essential",
      ],
      mustHave: [
        "Development focus",
        "Clean image",
        "Local connect",
        "Clear stance on drug crisis",
      ],
    },
    attackLines: {
      lines: [
        "Inderjit Kaur Mann: What did she do in 4 years?",
        "Drug crisis: Nakodar vulnerable, AAP failed",
        "No development: Rural infrastructure same as before",
        "Broken promises: Rs 1000/month for women not delivered",
        "SAD-BJP: They ruined Punjab for 10 years, AAP ruined it for 5 years",
      ],
    },
    congressStrategicPosition:
      "CONTESTABLE - AAP won by only 2,869 votes. Congress must focus on THIS SEAT. SAD also strong (runner-up in 2022).",
    threeWayContest:
      "2012: SAD (Gurpartap Singh Wadala) won. 2022: AAP (Inderjit Kaur Mann) won. Three-way contest possible in 2027.",
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: {
      factors: [
        "Candidate Selection: Both parties",
        "Alliance: Congress-SAD tie-up",
        "Local MLA Performance: Assessment critical",
        "Government Scheme Delivery: AAP's performance",
      ],
    },
    triggers: {
      factors: [
        "Monsoon/agricultural conditions",
        "Local development announcements",
        "Party alliances announcement",
        "Candidate announcements",
      ],
    },
  },

  // ==========================================================================
  // EXTERNAL FACTORS
  // ==========================================================================
  externalFactors: {
    politicalShocks: [
      "Congress-SAD alliance formation",
      "Central government schemes announcement",
      "State-level corruption scandals",
    ],
    economicShocks: [
      "Agricultural crisis (crop failure, price crash)",
      "Job loss events",
    ],
    socialEvents: [
      "Major drug bust coverage",
      "Communal incidents",
      "Gurudwara events",
    ],
    externalShocks: ["Monsoon/flood conditions", "Pandemic resurgence"],
  },

  // ==========================================================================
  // DATA GAPS
  // ==========================================================================
  dataGaps: {
    requiredVerification: [
      "2017 election results",
      "Detailed vote shares",
      "Caste demographics (specific to constituency)",
      "MLA Inderjit Kaur Mann performance assessment",
      "Booth-level data",
      "2022 booth-level analysis",
      "Congress organization strength",
      "Voter mood assessment",
      "ECI perception data",
    ],
    intelligencePriorities: [
      "2022 booth-level analysis",
      "MLA Inderjit Kaur Mann's work assessment",
      "Congress organization strength",
      "Voter mood assessment",
      "ECI perception",
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
      { name: "Census 2011" },
      { name: "Web search" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "2017 election results",
        "Detailed vote shares 2022",
        "Caste demographics specific to constituency",
        "Literacy rate",
        "Education facilities",
        "Mandi facilities",
        "Flood vulnerability",
        "Congress leaders identity",
        "SAD leaders identity",
        "BJP leaders identity",
        "Ex-MLA/Ministers from area",
        "Booth agents network",
        "Rally grounds and hoarding spots",
        "Health facilities details",
      ],
    },
  },
};
