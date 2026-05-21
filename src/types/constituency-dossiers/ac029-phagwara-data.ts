/**
 * AC029-Phagwara Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC029-Phagwara.md, AC029-Phagwara-deep.md
 */

import type { AC029PhagwaraTypes } from "./ac029-phagwara-types";

export const ac029PhagwaraData: AC029PhagwaraTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 29,
    name: "Phagwara",
    district: "Kapurthala",
    region: "Doaba",
    type: "SC",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Hoshiarpur Lok Sabha constituency",
    subDistrictsCovered: ["Phagwara city", "surrounding industrial areas"],
    areaCharacter: "Urban municipal corporation, Doaba region, industrial hub with significant NRI diaspora",
    terrain: "Doaba region between Beas and Satluj rivers, primarily urban",
    municipalCorporation: true,
    cityType: "Municipal Corporation",
    nriHub: true,
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    formation: "Phagwara has been an assembly constituency in its current form post-2008 delimitation",
    historicalSignificance: "One of the largest urban centers in Kapurthala district, known for industrial presence and large NRI diaspora",
    localHeritage: [
      "Industrial heritage",
      "NRI diaspora connections",
      "Doaba cultural identity",
    ],
  },

  economicIdentity: {
    primaryActivities: ["Manufacturing units", "Small-scale industries", "Remittance economy"],
    employmentPatterns: [
      "Industrial jobs",
      "NRI remittance-dependent businesses",
      "Government employment",
      "Retail trade",
    ],
    landholdingPatterns: "Urban constituency - limited agricultural land",
    nriDiaspora: "Substantial NRI population - Phagwara is a recognized NRI hub with significant diaspora connections",
  },

  socioCulturalIdentity: {
    language: "Punjabi (Doaba dialect)",
    religiousComposition: {
      sikh: "~60% (approximate)",
      hindu: "~38% (approximate)",
      other: "<2%",
    },
    casteCompositionStatus: "needs_verification",
    culturalInstitutions: ["Gurdwaras", "Temples", "Doaba cultural centers"],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  censusData: {
    population: "~97,864 (Phagwara city)",
    sexRatio: "~895 females per 1000 males (district average)",
    literacyRate: "~85% (district average)",
    casteWise: "SC 22.8% non-indigenous in Phagwara; 44.84% in Phagwara Sharki CT",
  },

  urbanDemographics: {
    phagwaraCityPopulation: "~97,864",
    scPopulationPercentage: "44%+ in some urban wards",
    scInPhagwaraSharkiCT: "44.84%",
    hinduMajorityWards: "Some wards have Hindu majority",
    nriFamilies: "Substantial diaspora presence",
  },

  electoralRollAnalytics: {
    totalElectors: "193,076 (2022)",
    genderGap: "[NEEDS VERIFICATION]",
    voterTurnout2022: "~68-70% (estimated)",
    voterTurnout2017: "~74-76%",
    voterTurnoutStateAverage: "~78%",
  },

  schemePenetration: {
    meraGharMeraMaan: "Active statewide",
    ashirwadScheme: "Active statewide - SC welfare",
    scWelfareSchemes: "Active delivery in constituency",
    aamAadmiClinics: "Operational in Punjab",
  },

  digitalAccess: {
    mobileInternetUrban: "~85%",
    mobileInternetRural: "~70%",
    socialMedia: ["WhatsApp", "Facebook", "Instagram"],
    specialFactor: "2018 violence led to mobile internet and SMS suspension in 4 Punjab districts including Phagwara area - social media surveillance present",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Balwinder Singh Dhaliwal",
      party: "Indian National Congress",
      voteShare: "~38% (estimated)",
      margin: "2,712 votes",
      marginVotes: 2712,
      totalElectors: "193,076",
      voterTurnout: "~68-70%",
      votesPolled: "[NEEDS VERIFICATION]",
      runnerUp: "Joginder Singh Mann",
      runnerUpParty: "AAP",
    },
    results2017: {
      winner: "Som Parkash",
      party: "BJP",
      margin: "[DATA NEEDS VERIFICATION]",
    },
    results2012: {
      winner: "Som Parkash",
      party: "BJP",
    },
    turnoutPattern: "Declining turnout - 74-76% in 2017 to 68-70% in 2022",
    coreVoters: ["SC voters (decisive in reserved seat)", "Mazhabi Sikh (rural and urban)", "Urban poor"],
    swingFactors: [
      "SC vote consolidation",
      "Urban SC concentration",
      "NRI factor (remittance policy)",
      "AAP government scheme delivery",
    ],
  },

  casteComposition: {
    source: "Field research and district-level data",
    scMazhabiRamdasia: "~55-60%",
    jatSikh: "~20-25%",
    obc: "~12-15%",
    hinduUpper: "~5-8%",
  },

  casteCompositionDeep: {
    scOverall: "22.8% (non-indigenous in Phagwara)",
    scInPhagwaraSharkiCT: "44.84%",
    mazhabiSikh: "Significant urban SC presence - traditional Mazhabi Sikh voters",
    ramdasiaRavidassia: "Concentrated in urban areas",
    religiousCompositionKapurthala: {
      sikh: "~60%",
      hindu: "~38%",
      other: "<2%",
    },
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    currentMood: "Tense - SC reserved seat where Congress won by only 2,712 votes in 2022. AAP was strong second. Narrow margin and urban SC concentration make this a volatile seat.",
    mlaSatisfaction: "Balwinder Singh Dhaliwal (Congress MLA) - narrow margin indicates vulnerability",
    keySentimentDrivers: [
      "SC Politics: Caste consolidation crucial in reserved seat",
      "Urban Issues: Municipal infrastructure deficits",
      "NRI Factor: Remittance-dependent economy",
      "AAP Government: State scheme delivery assessment",
      "Law & Order: 2018 communal clash remembered",
    ],
    issues: [
      {
        rank: 1,
        title: "Tight Electoral Contest",
        description: "Only 2,712 margin in 2022 - razor-thin win makes this a volatile seat",
        prioritySegment: ["All voters", "Political strategists"],
      },
      {
        rank: 2,
        title: "Drug Addiction Crisis",
        description: "SC communities severely affected - AAP did nothing in government",
        prioritySegment: ["SC bastis", "Mazhabi/Ramdasia communities", "Families"],
      },
      {
        rank: 3,
        title: "Employment",
        description: "Limited industrial growth - jobs for educated SC youth scarce",
        prioritySegment: ["Young voters (18-35)", "SC youth"],
      },
      {
        rank: 4,
        title: "Education Access",
        description: "Access for SC children remains limited",
        prioritySegment: ["SC families", "SC students"],
      },
      {
        rank: 5,
        title: "Land Issues",
        description: "Agricultural reforms - limited land in urban constituency",
        prioritySegment: ["Farmers", "Landless laborers"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceGap: {
    phagwaraMCInfrastructure: "Municipal corporation management needs improvement",
    industrialEmployment: "Limited industrial development and jobs",
    skillDevelopment: "[NEEDS VERIFICATION - skill development programs]",
    urbanSCColonies: "Urban SC colonies require development attention",
  },

  serviceDelivery: {
    health: "Town-level healthcare facilities [NEEDS VERIFICATION]",
    education: "Government schools, some private institutions [NEEDS VERIFICATION]",
    roads: "Road connectivity to Jalandhar and Kapurthala [NEEDS VERIFICATION]",
    waterSanitation: "[NEEDS VERIFICATION]",
  },

  schemeImplementation: {
    mgnrega: "[NEEDS VERIFICATION]",
    beneficiaryLists: "[NEEDS VERIFICATION - SC welfare scheme delivery]",
    pds: "Ration cards distributed, fair price shops operational [NEEDS VERIFICATION]",
  },

  issues: [
    {
      category: "SC Welfare",
      specificIssues: [
        "Scheme delivery to SC community",
        "Drug crisis in SC bastis",
        "Education access for SC children",
      ],
    },
    {
      category: "Urban Infrastructure",
      specificIssues: [
        "Roads and drainage in municipal corporation",
        "Sanitation in SC colonies",
        "Municipal corporation performance",
      ],
    },
    {
      category: "Employment",
      specificIssues: [
        "Jobs for educated SC youth",
        "Industrial employment",
        "Skill development",
      ],
    },
    {
      category: "Law & Order",
      specificIssues: [
        "Communal harmony",
        "2018 incident impact",
        "Drug rehabilitation",
      ],
    },
    {
      category: "NRI",
      specificIssues: [
        "Remittance policy concerns",
        "Diaspora engagement",
        "NRI business connections",
      ],
    },
  ],

  // ==========================================================================
  // KEY EVENTS
  // ==========================================================================
  keyEvents: [
    {
      year: 2018,
      title: "Communal Clashes",
      description: "Mobile internet and SMS suspended in 4 Punjab districts due to communal tensions in Phagwara area",
      impact: "Indicates underlying social fragilities - residents remember the incident; communal harmony monitoring continues",
    },
    {
      year: 2022,
      title: "Congress Narrow Victory",
      description: "Balwinder Singh Dhaliwal (Congress) won by only 2,712 votes over AAP's Joginder Singh Mann",
      impact: "Makes seat volatile and vulnerable - SC reserved status adds complexity to caste calculations",
    },
  ],

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalActors: {
      congressMLA: "Balwinder Singh Dhaliwal (Congress MLA)",
      aapLocalLeaders: "[NEEDS VERIFICATION]",
      bjpLeaders: "[NEEDS VERIFICATION - Som Parkash's legacy continues]",
      sadLeaders: "[NEEDS VERIFICATION]",
    },
    communityInfluencers: {
      scLeaders: "Crucial in reserved seat - SC vote is decisive",
      mazhabiSikhCommunity: "Traditional voters - both rural and urban Mazhabi Sikh",
      urbanSarpanches: "[NEEDS VERIFICATION - if applicable]",
      nriLeaders: "Diaspora influence significant due to remittance economy",
      exServicemen: "Veterans community present",
    },
    casteEquations: "Congress holds by narrow margin; AAP trying to penetrate; SC vote decisive; caste consolidation key - Mazhabi vs Ramdasia/Ravidassia voting patterns matter",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi press", "Doaba newspapers"],
      tv: ["Local cable", "Regional news channels"],
      digital: ["Facebook", "WhatsApp", "Instagram"],
      nriMediaConnections: ["NRI media connections present - diaspora stays engaged through digital platforms"],
    },
    consumption: {
      bySegment: "WhatsApp groups for news, Punjabi press for older voters, social media for youth and diaspora",
    },
    specialFactor: "2018 violence got national attention - communal harmony monitoring and social media surveillance present in area",
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyLocations: {
      phagwaraCity: true,
      industrialAreas: true,
      scColonies: true,
      nriResidentialAreas: true,
    },
    infrastructure: {
      railConnectivity: true,
      roadToJalandhar: true,
      roadToKapurthala: true,
      municipalCorporation: true,
      healthcare: "Town-level facilities [NEEDS VERIFICATION]",
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
      "Congress incumbent (Balwinder Singh Dhaliwal)",
      "SC vote base (55-60% of electorate)",
      "NRI support network - substantial diaspora",
      "Doaba regional identity",
      "Urban municipal corporation infrastructure",
    ],
    weaknesses: [
      "Razor-thin 2022 margin (2,712 votes) - VULNERABLE",
      "AAP government in power (state-level schemes)",
      "Urban infrastructure gaps",
      "Law and order issues - 2018 communal tensions",
      "Drug crisis in SC communities",
    ],
    opportunities: [
      "SC welfare schemes focus - deliver and gain credit",
      "NRI investment potential - diaspora engagement",
      "Industrial employment creation",
      "Urban development initiatives",
      "Mazhabi Sikh voter consolidation",
    ],
    threats: [
      "AAP government appeal at state level",
      "Another narrow margin loss (2,712 is extremely tight)",
      "Communal tensions - 2018 incident could repeat",
      "Anti-incumbency against Congress MLA",
      "AAP candidate could be strong SC Mazhabi Sikh",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congressStrategy2027: [
      "Candidate: Strong SC candidate, preferably Mazhabi/Mazhabia Sikh",
      "Caste: SC consolidation essential - Mazhabi Sikh + Ramdasia/Ravidassia",
      "Issues: SC welfare, urban development, jobs for SC youth, drug crisis",
      "Campaign: 'Congress for SC community' - deliver on welfare schemes",
      "NRI: Diaspora engagement - remittance policy concerns",
    ],
    aapStrategy: [
      "Candidate: Strong SC challenger, Mazhabi Sikh + urban SC",
      "Caste: Mazhabi Sikh + SC urban coalition",
      "Issues: AAP schemes, change narrative",
      "Campaign: 'Congress neglected SC youth - Rs 1000/month promise broken'",
    ],
    targetSegments: [
      {
        segment: "SC voters (55-60%)",
        rationale: "Decisive in SC reserved seat - Mazhabi Sikh (rural and urban), Ramdasia/Ravidassia (urban)",
      },
      {
        segment: "Mazhabi Sikh Community",
        rationale: "Traditional Congress voters but can switch to AAP - must address drug crisis credibly",
      },
      {
        segment: "Urban poor and SC colonies",
        rationale: "Welfare schemes, infrastructure, employment for educated youth",
      },
      {
        segment: "NRI diaspora",
        rationale: "Remittance-dependent economy - policy concerns, diaspora engagement important",
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
      caste: "Mazhabi Sikh (CRITICAL for this SC seat)",
      profile: "Social worker, Dalit rights background, clean image, credible on drug crisis",
      keyQualification: "Must connect with Mazhabi/Ramdasia voters - traditional SC vote",
      mustAddress: "Drug crisis credibly in SC bastis - this is the #1 attack line against AAP",
    },
    attackLines: {
      joginderSinghMann: "Joginder Singh Mann: What did he do as AAP candidate? Only lost by 2,712 votes - not enough",
      drugCrisis: "Drug addiction: Crisis in Mazhabi bastis - AAP in government did nothing for SC communities",
      rs1000PromisedMoney: "Rs 1000/month: SC families didn't receive promised money - broken AAP promises",
      brokenPromises: "Broken promises: Employment for SC youth still scarce despite AAP government",
      bjpSomParkash: "BJP had Som Parkash for 10 years (2012, 2017) - we gave Congress a chance in 2022 and they won by only 2,712 votes",
    },
    congressStrategy: {
      status: "VULNERABLE - Won by only 2,712 votes. This is a TIGHT SEAT that can go either way. Congress must work hard to retain.",
      currentPosition: "Congress holds by razor-thin margin in SC reserved seat",
      incumbentName: "Balwinder Singh Dhaliwal",
      margin2022: "2,712 votes (LOW MARGIN - TIGHT RACE)",
      keyFactors: [
        "Congress won 2022 by razor-thin margin",
        "AAP is strong challenger",
        "BJP has historical presence (Som Parkash won 2012, 2017)",
        "Congress cannot take this seat for granted",
        "SC reserved status makes candidate caste critical",
      ],
    },
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: {
      candidateSelection: "Right SC candidate (Mazhabi Sikh) crucial - wrong candidate could cost the seat",
      communalIncident: "2018 repeat possibility - mobile internet/SMS suspension shows fragility",
      nriFactor: "Remittance policy changes could affect Phagwara's NRI-dependent economy",
      alliance: "Congress-SAD scenario could dramatically alter caste equations in Doaba",
    },
    triggers: {
      scSchemeDeliveryAssessment: "SC welfare scheme delivery will be judged - did money reach SC families?",
      lawOrderIncidents: "Any law and order incident, especially communal, will swing votes",
      municipalCorporationPerformance: "Phagwara MC performance - roads, drainage, sanitation in SC colonies",
      urbanDevelopmentAnnouncements: "Any new urban development projects will influence voter perception",
    },
  },

  // ==========================================================================
  // EXTERNAL FACTORS
  // ==========================================================================
  externalFactors: {
    politicalShocks: [
      "Congress-SAD alliance announcement",
      "BJP ticket for Som Parkash again",
      "Central government schemes announcement before election",
      "State-level corruption scandals",
    ],
    economicShocks: [
      "Remittance policy changes affecting NRI families",
      "Industrial unit closures",
      "Agricultural crisis",
    ],
    socialEvents: [
      "Communal incident like 2018",
      "Major drug bust coverage",
      "Caste consolidation efforts by any party",
    ],
    externalShocks: [
      "Any national security incident",
      "Pandemic or health emergency",
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Phagwara" },
      { name: "Oneindia", url: "https://www.oneindia.com" },
      { name: "ECI data", url: "https://eci.gov.in" },
      { name: "Census 2011", url: "https://censusindia.gov.in" },
      { name: "Punjab government websites", url: "https://punjab.gov.in" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "2017 full election results",
        "SC community breakdown (Mazhabi vs Ramdasia)",
        "2022 booth-level data",
        "Mazhabi vs other SC voting pattern",
        "NRI population data",
        "Polling booth locations",
        "MGNREGA current status",
        "PDS coverage details",
        "Ayushman Bharat enrollment in constituency",
        "Ex-MLA/Ministers from area",
        "Booth agents network",
        "Dominant castes in SC breakdown",
        "Rally grounds and hoarding spots",
        "Must-win booths",
        "Resource allocation details",
        "Common misinformation themes",
        "AAP organization strength in Phagwara",
        "2018 communal incident full impact study",
        "Balwinder Singh Dhaliwal term count/performance",
      ],
      intelligencePriorities: [
        "SC community leadership mapping - who are the actual SC community leaders?",
        "Booth-level 2022 analysis - which booths did Congress lose?",
        "Mazhabi vs Ramdasia/Ravidassia voting pattern - do they vote differently?",
        "AAP organization strength - how built up is AAP at booth level?",
        "2018 communal incident impact - has trust been restored?",
        "NRI voting patterns - do overseas Punjabis vote and how?",
        "Drug crisis in SC bastis - severity and government's response",
      ],
    },
    documentStatus: "Partial - Requires field verification",
    preparedFor: "Punjab Congress 2027 Election Intelligence",
    classification: "Internal Research Document",
  },
};
