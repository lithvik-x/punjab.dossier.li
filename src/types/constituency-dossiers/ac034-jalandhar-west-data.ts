/**
 * AC034-Jalandhar-West Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC034-Jalandhar-West.md, AC034-JalandharWest-deep.md
 */

import type { AC034JalandharWestTypes } from "./ac034-jalandhar-west-types";

export const ac034JalandharWestData: AC034JalandharWestTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 34,
    name: "Jalandhar West",
    district: "Jalandhar",
    region: "Doaba",
    type: "SC",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Jalandhar Lok Sabha constituency",
    subDistrictsCovered: ["Jalandhar city west area"],
    areaCharacter: "Urban SC-reserved constituency in Jalandhar city",
    terrain: "Urban plain area of Doaba region",
    keyIdentifiers: [
      "Urban: Jalandhar city area",
      "SC Reserved: Significant SC population",
      "Industrial: Jalandhar's manufacturing hub",
      "Educational: University presence",
    ],
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    formation: "Part of Jalandhar district in Doaba region",
    historicalSignificance: "Urban SC constituency in industrial city of Jalandhar",
    localHeritage: [
      "Industrial heritage (sports goods, leather)",
      "University of Jalandhar",
      "Doaba region cultural identity",
    ],
  },

  economicIdentity: {
    primaryActivities: [
      "Manufacturing (sports goods, leather goods)",
      "Small-scale industries",
      "Retail trade",
      "Service sector",
    ],
    employmentPatterns: [
      "Industrial workers",
      "Government jobs",
      "Business/Self-employment",
      "Migrant labor",
    ],
    landholdingPatterns:
      "Urban constituency - limited agriculture, mostly industrial/commercial",
  },

  socioCulturalIdentity: {
    language: "Punjabi (Doaba dialect)",
    religiousComposition: {
      sikh: "~59% (approximate)",
      hindu: "~38% (approximate)",
      other: "<3%",
    },
    casteCompositionStatus: "needs_verification",
    culturalInstitutions: [
      "Gurdwaras",
      "Temples",
      "Urban market areas",
      "Industrial associations",
    ],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  censusData: {
    population: "Urban constituency - Jalandhar district total ~2.2 million",
    sexRatio: "~895 females per 1000 males (district average)",
    literacyRate: "~85% (urban areas higher than rural)",
    casteWise:
      "SC ~50-55% (Mazhabi/Ramdasia/Ravidassia dominant), rest general population",
  },

  electoralRollAnalytics: {
    totalElectors: "171,632 (2022)",
    genderGap: "[NEEDS VERIFICATION]",
    voterTurnout2022: "~65-68% (estimated)",
    voterTurnout2024: "~55% (lower due to urban apathy)",
    voterTurnout2017: "~72-75%",
    voterTurnoutStateAverage: "~78%",
  },

  schemePenetration: {
    pdsNfsa: "[NEEDS VERIFICATION]",
    mgnrega: "[NEEDS VERIFICATION - Jalandhar district data]",
    pmKisan: "[NEEDS VERIFICATION]",
    ayushmanBharat: "[NEEDS VERIFICATION - Jalandhar urban data]",
  },

  digitalAccess: {
    mobileInternetUrban: "~85%",
    socialMedia: ["WhatsApp", "Facebook", "Instagram", "Twitter/X"],
  },

  urbanDemographics: {
    cityVoterProfile: "Urban educated voters, industrial workers, middle class",
    educatedMiddleClass:
      "Significant presence - Jalandhar educational hub",
    industrialWorkers:
      "Major presence - sports goods, leather, manufacturing",
    migrantPopulation:
      "Significant - workers from other states in industries",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Sheetal Angural",
      party: "AAP",
      voteShare: "~40% (estimated)",
      margin: "37,325 votes",
      runnerUp: "[NEEDS VERIFICATION]",
      runnerUpParty: "[NEEDS VERIFICATION]",
    },
    results2024: {
      winner: "Mohinder Bhagat",
      party: "AAP",
      voteShare: "Over 58%",
      margin: "37,235 votes",
      turnout: "54.98%",
    },
    results2017: {
      winner: "Sushil Kumar Rinku",
      party: "INC",
      margin: "Not specified",
    },
    results2012: {
      winner: "Not specified from available data",
      party: "[NEEDS VERIFICATION]",
    },
    turnoutPattern: "Urban apathy in 2024 by-election - dropped to ~55%",
    historicalTrend:
      "2022: AAP massive win (37,325 margin) | 2024: AAP retained with similar margin | Congress third in urban seat",
    coreVoters: [
      "SC voters (decisive)",
      "Urban poor",
      "Industrial workers",
      "Middle class",
    ],
    swingFactors: [
      "AAP government scheme delivery",
      "MLA performance",
      "Urban infrastructure",
      "Employment for youth",
    ],
  },

  casteComposition: {
    source: "Urban SC-reserved constituency in Jalandhar city",
    sc: "~50-55% (Mazhabi/Ramdasia/Ravidassia)",
    hindu: "~20-25%",
    jatSikh: "~15-20%",
    muslim: "~3-5%",
    other: "~5-10%",
  },

  casteCompositionDeep: {
    scPopulation: "37,000+ SC population (from SECC data)",
    ramdasiaRavidassia: "Urban SC concentration",
    mazhabiSikh: "Urban and rural SC",
    urbanConcentration:
      "High in urban SC areas and SC colonies of Jalandhar city",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    currentMood: "Pro-AAP - Jalandhar West has shown strong AAP support in both 2022 and 2024",
    sentimentDrivers: [
      "Urban Issues: City infrastructure",
      "SC Welfare: Government schemes",
      "AAP Government: State scheme delivery",
      "Employment: Youth jobs in city",
      "Migrant Workers: Issues affecting laborers",
    ],
    grievances: [
      "Urban infrastructure (roads, drainage)",
      "Healthcare facilities",
      "Employment for youth",
      "Municipal services",
    ],
    mlaSatisfaction: "Mohinder Bhagat (AAP) - new MLA from 2024 by-election",
    trustInInstitutions:
      "[NEEDS VERIFICATION - general Punjab trends]",
    issues: [
      {
        rank: 1,
        title: "Urban SC Population",
        description: "Employment, education, housing for urban SC community",
        prioritySegment: ["SC voters", "Urban poor"],
      },
      {
        rank: 2,
        title: "Drug Addiction",
        description: "Urban youth affected by drug menace",
        prioritySegment: ["Youth", "Families"],
      },
      {
        rank: 3,
        title: "Infrastructure",
        description: "Basic amenities in slums, urban infrastructure",
        prioritySegment: ["Slum dwellers", "Urban poor"],
      },
      {
        rank: 4,
        title: "Healthcare",
        description: "Facilities for urban poor",
        prioritySegment: ["Urban poor", "Middle class"],
      },
      {
        rank: 5,
        title: "Jobs",
        description: "Industrial hub but limited SC access",
        prioritySegment: ["Youth", "SC community", "Industrial workers"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceGap: {
    serviceDelivery: {
      health: "City hospital facilities [NEEDS VERIFICATION]",
      education: "University nearby, government schools [NEEDS VERIFICATION]",
      roads: "Urban roads, sewage, water [NEEDS VERIFICATION]",
      waterSanitation: "[NEEDS VERIFICATION]",
      municipal: "Garbage, drainage [NEEDS VERIFICATION]",
    },
    schemeImplementation: {
      meraGharMeraMaan: "Statewide scheme active",
      ashirwadScheme: "SC welfare scheme active",
      scWelfareSchemes: "Various SC-specific schemes",
      aamAadmiClinics: "Statewide - urban clinics",
      freeElectricity: "Statewide scheme",
    },
    developmentGaps: [
      "Urban infrastructure",
      "Municipal services",
      "Healthcare in city",
      "Employment opportunities",
    ],
  },

  issues: [
    {
      category: "Infrastructure",
      specificIssues: ["Roads, sewage, water in urban areas", "Slum development"],
    },
    {
      category: "SC Welfare",
      specificIssues: ["Scheme delivery", "SC colony development", "Education access"],
    },
    {
      category: "Employment",
      specificIssues: ["Jobs for educated youth", "Industrial employment access for SC"],
    },
    {
      category: "Healthcare",
      specificIssues: ["City hospital facilities", "Aam Aadmi Clinics coverage"],
    },
    {
      category: "Municipal",
      specificIssues: ["Garbage collection", "Drainage", "Water supply"],
    },
  ],

  jalandharWestSpecific: {
    wardLevelIssues: ["Ward-level municipal issues", "Local civic problems"],
    scColonyDevelopment: ["SC colony infrastructure", "Basic amenities in SC areas"],
    cityVoterPriorities: ["Urban development", "Jobs", "Education"],
    middleClassConcerns: ["Infrastructure", "Healthcare", "Education for children"],
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalActors: {
      mla: "Mohinder Bhagat (AAP) - won 2024 by-election",
      mp: "Sushil Kumar Rinku (BJP) - MP from Jalandhar LS (ex-AAP)",
      congressLeaders: "[NEEDS VERIFICATION]",
      bjpLeaders: "[NEEDS VERIFICATION]",
    },
    communityInfluencers: {
      scLeaders: "Urban SC community leaders",
      municipalCouncillors: "Ward-level influence",
      industrialists: "Jalandhar business community",
      exServicemen: "Veterans in urban area",
    },
    powerStructureDescription:
      "AAP dominates urban SC | Congress weakened | BJP has MP (Sushil Rinku - ex-AAP) | Municipal corporation level presence",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: [
        "Punjabi Tribune",
        "Jag Bani",
        "Dainik Bhaskar",
        "Dainik Jagran",
      ],
      tv: ["Local cable", "Punjabi TV channels", "Regional news"],
      digital: ["Facebook", "WhatsApp", "Instagram", "YouTube"],
    },
    consumption: {
      bySegment:
        "WhatsApp groups for political news, TV for elections, social media for youth",
    },
    informationFlow: {
      urbanMediaSaturation: "High - city area",
      politicalWhatsAppGroups: "Active political discussion groups",
      cableTvNetworks: "Major information source",
      socialMedia: "Growing influence among youth",
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
    keyLocations: {
      jalandharCityWest: "Core urban area",
      urbanResidentialAreas: "Various colonies and sectors",
      industrialZones: "Manufacturing areas",
      scColonies: "SC predominant localities",
    },
    infrastructure: {
      urbanInfrastructure: "City infrastructure - roads, sewage, water",
      healthcare: "City hospital, Aam Aadmi Clinics",
      education: "University nearby, schools",
      municipalServices: "Municipal corporation services",
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "AAP massive margin (37,000+) in both elections",
      "Urban SC voter support strong",
      "AAP government schemes at state level",
      "MLA elevated profile (Mohinder Bhagat)",
    ],
    weaknesses: [
      "Urban infrastructure deficits",
      "Congress attempting recovery",
      "Municipal service issues",
      "BJP MP from area (Sushil Rinku)",
    ],
    opportunities: [
      "SC welfare focus",
      "Urban development schemes",
      "Industrial employment opportunities",
      "NRI connections (Jalandhar)",
    ],
    threats: [
      "Congress rebound attempt",
      "Municipal issues",
      "Law and order concerns",
      "Anti-incumbency against AAP",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congress2027: {
      candidate: "Strong SC candidate required",
      caste: "Mazhabi/Ramdasia Sikh (essential)",
      issues: ["Infrastructure", "Jobs", "Governance"],
      campaign: "AAP failed on city issues",
      organization: "Booth-level organization critical",
    },
    aap2027: {
      candidate: "Mohinder Bhagat or replacement",
      caste: "SC + urban + youth",
      issues: ["AAP schemes", "Development"],
      campaign: "SC welfare under AAP",
    },
    targetSegments: [
      "SC voters (decisive)",
      "Urban poor",
      "Middle class",
      "Youth (employment)",
    ],
    mustWinBoothsStatus: "needs_verification",
    resourceAllocationStatus: "needs_verification",
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    congress: {
      status: "DIFFICULT - AAP won with massive 37,325 margin in 2022, 2024 bypoll again won by AAP",
      currentPosition:
        "Congress finished THIRD in both 2022 and 2024 elections",
      keyFactors: [
        "2022: AAP won by 37,325 votes",
        "2024: AAP won again after sitting MLA died",
        "Congress finished THIRD in both elections",
        "Need complete overhaul of strategy",
      ],
      challenges: [
        "Urban SC voters heavily leaning AAP",
        "Congress organization weak in urban seat",
        "BJP MP Sushil Rinku has local influence",
        "Need to differentiate from both AAP and BJP",
      ],
      recommendedCandidate: {
        caste: "Mazhabi/Ramdasia Sikh (essential)",
        profile:
          "Urban social worker, Dalit activist, youth leader",
        keyQualification: "Must have clean image, anti-corruption stance",
        must: "Differentiate from both AAP and BJP",
      },
      recommendedCandidateProfile: {
        casteRequirement: "Mazhabi/Ramdasia Sikh - essential for SC-reserved seat",
        backgroundType: "Urban social worker, Dalit activist, youth leader",
        keyQualities: [
          "Clean image",
          "Anti-corruption stance",
          "Strong SC community connect",
          "Youth appeal",
          "Ability to differentiate from AAP and BJP",
        ],
        antiCorruptionStance: true,
        scCommunityConnect:
          "Must have visible work in SC colonies and among urban SC population",
      },
      attackLines: {
        mlaPerformance: "Mohinder Bhagat: What did he do in 1 year?",
        urbanPoorIgnored:
          "Urban poor ignored: Slums without water, electricity",
        drugCrisis: "Drug crisis: Youth dying, AAP government sleeping",
        brokenPromises:
          "Broken promises: Rs 1000/month not reached poor families",
        scCommunityNeglect:
          "Need someone who actually works for SC community",
      },
    },
  },

  // ==========================================================================
  // EXTERNAL FACTORS
  // ==========================================================================
  externalFactors: {
    wildcards: {
      mlaPerformance: "Mohinder Bhagat assessment - what has he delivered?",
      bjpMpFactor: "Sushil Rinku influence as ex-AAP turned BJP MP",
      municipalPerformance: "City services and municipal corporation",
      nationalIssues: "Economic conditions, central government schemes",
    },
    triggers: {
      urbanInfrastructureAnnouncements:
        "Urban infrastructure announcements by state govt",
      stateGovernmentSchemes: "New SC welfare scheme announcements",
      municipalCorporationPerformance:
        "Garbage, drainage, water supply issues",
      localDevelopment: "Local development projects and announcements",
    },
    politicalShocks: [
      "Central government scheme announcements before election",
      "State-level corruption scandals",
      "BJP-AAP alliance speculation",
    ],
    economicShocks: [
      "Industrial closure/job losses",
      "Economic downturn affecting urban workers",
    ],
    socialEvents: [
      "Major drug bust coverage",
      "Communal incidents",
      "Urban violence",
    ],
    externalShocks: [
      "Pandemic/resurgence",
      "Economic crisis",
      "Law and order incident",
    ],
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: {
      mlaPerformance: "Mohinder Bhagat assessment",
      bjpMpFactor: "Sushil Rinku influence",
      municipalPerformance: "City services",
      nationalIssues: "Economic conditions",
    },
    triggers: {
      urbanInfrastructureAnnouncements: "Development announcements",
      stateGovernmentSchemes: "New schemes for SC",
      municipalCorporationPerformance: "Service delivery",
      localDevelopment: "Local projects",
    },
  },

  // ==========================================================================
  // DATA GAPS & VERIFICATION
  // ==========================================================================
  dataGaps: {
    requiredVerification: [
      "2017 full election results",
      "Booth-level data",
      "SC community detailed breakdown",
      "MLA performance assessment",
      "Municipal issues specific to Jalandhar West",
      "Exact vote shares in 2022 and 2024",
      "Congress organizational structure",
      "BJP leadership in area",
      "Industrial employment data",
    ],
    intelligencePriorities: [
      "Booth-level AAP strength mapping",
      "Congress organization assessment",
      "SC voter patterns and preferences",
      "Municipal issues assessment",
      "Mohinder Bhagat work delivery analysis",
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jalandhar_West_(Assembly_constituency)" },
      { name: "OneIndia", url: "https://www.oneindia.com" },
      { name: "Election Commission of India", url: "https://eci.gov.in" },
      { name: "Census 2011", url: "https://censusindia.gov.in" },
      { name: "SECC Data", url: "[NEEDS VERIFICATION]" },
      { name: "Punjab Government", url: "https://punjab.gov.in" },
      { name: "News18", url: "https://www.news18.com" },
      { name: "India Today", url: "https://www.indiatoday.in" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "2017 complete election results",
        "Booth-level voting data",
        "SC sub-caste breakdown (Ramdasia, Mazhabi, Ravidassia)",
        "Mohinder Bhagat MLA performance 2024-2027",
        "Municipal corporation performance data",
        "Urban infrastructure gaps specific to Jalandhar West",
        "Congress party organization structure",
        "BJP local leadership details",
        "Industrial employment statistics",
        "NRI connections and influence",
        "Media consumption patterns",
        "Ward-wise issues mapping",
      ],
    },
  },
};
