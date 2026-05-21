/**
 * AC025-BabaBakala Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC025-Baba-Bakala.md, AC025-BabaBakala-deep.md
 */

import type { AC025BabaBakalaTypes } from "./ac025-baba-bakala-types";

export const ac025BabaBakalaData: AC025BabaBakalaTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 25,
    name: "Baba Bakala",
    district: "Amritsar",
    region: "Majha",
    lokSabha: "Khadoor Sahib",
    type: "SC",
    totalElectors2022: "199,929",
    date: "20 May 2026",
  },

  baseline: {
    tehsil: "Baba Bakala",
    areaCharacter: "Mixed urban-rural, historical town with agricultural villages",
    keyIdentifiers: {
      religiousSite: "Gurudwara Baba Bakala Sahib",
      tehsilHeadquarters: "Administrative center for Baba Bakala tehsil",
      scPopulation: "Substantial due to reserved status",
    },
    geographicNotes:
      "Historical town in Amritsar district; known for Gurudwara Baba Bakala Sahib; area has both agricultural and urban characteristics",
  },

  historicalContext: {
    historicalSignificance:
      "Baba Bakala is a historical town and tehsil in Amritsar district, known for the Gurudwara Baba Bakala Sahib, a significant Sikh religious site",
    localHeritage: [
      "Gurudwara Baba Bakala Sahib",
      "Tehsil headquarters administration",
      "Agricultural tradition",
    ],
    religiousImportance:
      "Gurudwara Baba Bakala Sahib is a significant Sikh religious site drawing pilgrims",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  religiousComposition: {
    sikh: "~72% (Amritsar district approximate)",
    hindu: "~27% (Amritsar district approximate)",
    other: "<1%",
  },

  casteCompositionDeep: {
    scPopulationTown: "27.16% (Baba Bakala town)",
    dominantSCCommunities: [
      "Ramdasia/Ravidassia (dominant SC communities)",
      "Mazhabi Sikh (significant rural presence)",
      "Balmiki (urban SC presence)",
    ],
    ruralPresence: "Mazhabi Sikh significant in rural villages",
    urbanPresence: "Balmiki urban SC presence",
    townPopulation: "~10,000 (Baba Bakala town)",
  },

  townDemographics: {
    bababakalaTown: "~10,000 population",
    scInTown: "27.16%",
    tehsilNotes: "Multiple villages in tehsil with higher SC percentage than town",
  },

  electoralRollAnalytics: {
    totalElectors2022: "199,929",
    voterTurnout2022: "~68-70% (estimated)",
    voterTurnout2017: "~74-76%",
    genderGap: "[NEEDS VERIFICATION]",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Dalbir Singh Tong",
      party: "AAP",
      votes: "52,468",
      voteShare: "~48% (estimated)",
      margin: "19,552 votes",
      marginVotes: 19552,
      runnerUp: "Santokh Singh Bhailpur",
      runnerUpParty: "Congress",
      runnerUpVotes: "32,916",
      totalElectors: "199,929",
      voterTurnout: "~68-70% (estimated)",
      note: "Largest margin in region; AAP breakthrough on SC reserved seat",
    },
    results2017: {
      winner: "Manjit Singh Mianwind",
      party: "SAD",
      status: "needs_verification",
    },
    results2012: {
      winner: "Manjit Singh Mianwind",
      party: "SAD",
      votes: "60,244",
      runnerUp: "Ranjit Singh",
      runnerUpParty: "INC (Chhajjalwadi)",
      runnerUpVotes: "31,019",
    },
    turnoutPattern: "Voter turnout declined from 74-76% (2017) to ~68-70% (2022)",
    historicalTrend:
      "2022: AAP won with massive margin (19,552); Strong anti-Congress, anti-SAD verdict; Dalbir Singh Tong established AAP foothold",
    coreVoters: [
      "SC voters (decisive)",
      "Mazhabi Sikh (rural)",
      "Ramdasia/Ravidassia (urban-rural)",
      "Religious voters",
    ],
    swingFactors: [
      "Caste consolidation",
      "Drug addiction crisis in SC bastis",
      "AAP's delivery on SC welfare promises",
      "Anti-incumbency against AAP (3+ years in power)",
    ],
  },

  casteComposition: {
    source:
      "SC-reserved constituency with dominant Dalit Sikh vote bank; Doaba region known for Chamar dominance",
    sc: "~55-60% (Mazhabi/Ramdasia/Ravidassia)",
    jatSikh: "~25-30%",
    obc: "~10-12%",
    hinduUpper: "~5-7%",
    other: "~5%",
    notes:
      "Doaba region known for Chamar dominance; SC-reserved constituency with dominant Dalit Sikh vote bank",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    currentMood:
      "Cautious - AAP won decisively in 2022 with largest margin; anti-incumbency may be building against AAP's 3+ years in power",
    sentimentDrivers: [
      "Caste Politics: SC voter consolidation crucial",
      "Religious Sentiment: Baba Bakala Sahib site",
      "Governance Delivery: AAP promises delivery",
      "Agricultural Distress: Rural voter concerns",
      "Youth Employment: Educated unemployment",
    ],
    grievances2024_2025: [
      "Local civic issues",
      "Agricultural distress",
      "Drug addiction in rural areas",
      "Healthcare access",
      "NRI grievances",
    ],
    mlaSatisfaction: "Dalbir Singh Tong (AAP MLA) - need to assess constituent feedback",
    issues: [
      {
        rank: 1,
        title: "Caste Discrimination",
        description: "Social justice issues affecting SC communities",
        prioritySegment: ["SC voters", "Dalit Sikh community"],
      },
      {
        rank: 2,
        title: "Drug Addiction",
        description:
          "Crisis affecting SC communities severely; AAP failed to curb the menace",
        prioritySegment: ["Rural youth", "SC bastis families"],
      },
      {
        rank: 3,
        title: "Employment",
        description: "Limited job opportunities for SC youth",
        prioritySegment: ["Young SC voters (18-35)"],
      },
      {
        rank: 4,
        title: "Land Issues",
        description: "Agricultural reforms, loan waivers",
        prioritySegment: ["Farmer households", "SC agricultural workers"],
      },
      {
        rank: 5,
        title: "Education",
        description: "Access to quality education for SC children",
        prioritySegment: ["SC families", "Youth"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  activeSchemes: {
    meraGharMeraMaan: "Active AAP government scheme",
    ashirwadScheme: "Active SC welfare scheme",
    scWelfareSchemes: "Multiple SC-focused schemes under AAP government",
    aamAadmiClinics: "Active AAP government healthcare initiative",
  },

  developmentGaps: {
    townInfrastructure: "Baba Bakala town infrastructure needs significant development",
    ruralHealthcare:
      "Rural healthcare facilities inadequate; CHC level coverage only",
    agriculturalExtension:
      "Minimal agricultural extension services for rural farmers",
    skillDevelopment: "Skill development programs insufficient for youth",
  },

  serviceDelivery: {
    health: "CHC level healthcare; rural healthcare access limited",
    education:
      "Higher secondary schools [NEEDS VERIFICATION]; access to quality education for SC children limited",
    roads: "Road connectivity to Amritsar and Ajnala; village roads need improvement",
    waterSanitation: "[NEEDS VERIFICATION]",
  },

  schemeImplementation: {
    scWelfare: "SC schemes active but delivery assessment needed",
    beneficiaryLists:
      "[NEEDS VERIFICATION - complaints about inclusion/exclusion errors expected]",
    pds: "PDS ration cards distributed; fair price shops operational [NEEDS VERIFICATION]",
  },

  issues: [
    {
      category: "SC Welfare",
      specificIssues: [
        "Schemes delivery to SC community",
        "Reservation implementation issues",
        "SC/ST Act violations - no justice for Dalit community",
      ],
    },
    {
      category: "Agriculture",
      specificIssues: [
        "MSP procurement",
        "佃权 (tenant rights)",
        "Rural agricultural distress",
        "Loan waivers",
      ],
    },
    {
      category: "Religious",
      specificIssues: [
        "Gurudwara development",
        "Religious tourism potential",
        "Gurudwara area infrastructure",
      ],
    },
    {
      category: "Employment",
      specificIssues: [
        "Youth jobs",
        "Skills training",
        "Educated unemployment",
      ],
    },
    {
      category: "Healthcare",
      specificIssues: [
        "CHC facilities upgrade needed",
        "Healthcare access in rural areas",
        "Drug rehabilitation for SC youth",
      ],
    },
  ],

  bababakalaSpecificIssues: {
    tehsilHeadquarters: "Tehsil headquarters administrative needs unmet",
    gurudwaraDevelopment: "Gurudwara area development needed for pilgrims",
    roadConnectivity: "Road connectivity to surrounding villages inadequate",
    mandiFacilities: "Mandi facilities for agricultural produce needed",
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalActors: {
      incumbentMLA: "Dalbir Singh Tong (AAP)",
      congressLeaders: "needs_verification",
      sadLeaders: "needs_verification",
      bjpLeaders: "needs_verification",
    },
    communityInfluencers: {
      scCommunityLeaders:
        "Crucial in reserved seat; SC vote is decisive",
      gurudwaraCommittee: "Religious authority at Baba Bakala Sahib",
      castePanchayats: "SC community organizations (Ramdasia, Ravidassia, Mazhabi)",
      exServicemen: "Mazhabi Sikh veterans",
    },
    seatHoldingParty: "AAP",
    decisiveVoterGroup: "SC voters",
    religiousFactor: "Important - Baba Bakala Sahib draws religious voters",
    casteConsolidationKey: true,
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi press"],
      cableTv: ["Cable TV", "Regional news channels"],
      religiousChannels: ["Religious channels"],
      digital: ["WhatsApp networks", "Facebook", "Instagram"],
    },
    informationChannels: {
      districtPress: ["District newspapers"],
      cableOperators: ["Local cable operators"],
      gurudwaraAnnouncements: ["Gurudwara announcements"],
    },
    consumption: {
      bySegment:
        "WhatsApp groups for news; Punjabi press for older voters; Gurudwara announcements for religious voters",
    },
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyLocations: {
      bababakalaTown: "Religious center and tehsil headquarters",
      gurudwaraBabaBakalaSahib: "Significant Sikh religious site",
      tehsilComplex: "Administrative center",
      agriculturalVillages: "Surrounding villages with high SC population",
    },
    infrastructure: {
      roads: "Roads to Amritsar and Ajnala; village road connectivity needs improvement",
      healthcare: "CHC level facilities",
      education: "needs_verification",
      gurudwaraParking: "needs_verification",
    },
    campaignInfrastructure: {
      rallyGrounds: "[NEEDS VERIFICATION]",
      hoardingSpots: "[NEEDS VERIFICATION]",
    },
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: [
      {
        factor: "Candidate Selection",
        description: "Right SC candidate crucial - Mazhabi/Ramdasia Sikh preferred",
      },
      {
        factor: "Baba Bakala Sahib",
        description: "Any religious controversy at the Gurudwara could shift sentiment",
      },
      {
        factor: "SC Schemes Delivery",
        description: "Assessment of government scheme delivery to SC community",
      },
      {
        factor: "Congress-SAD Alliance",
        description:
          "Congress-SAD tie-up scenario could dramatically alter electoral math",
      },
    ],
    triggers: [
      {
        trigger: "Government Scheme Delivery",
        description: "Major scheme delivery announcements could swing sentiment",
      },
      {
        trigger: "Local Development Announcements",
        description: "Development projects for Baba Bakala tehsil",
      },
      {
        trigger: "Caste Consolidation Efforts",
        description: "AAP or Congress outreach to SC caste Panchayats",
      },
      {
        trigger: "Drug Crime Affecting SC Youth",
        description: "High-profile drug case involving SC youth could mobilize community",
      },
    ],
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "Religious site importance (Gurudwara Baba Bakala Sahib)",
      "SC reserved seat advantage",
      "AAP incumbent with strong 2022 margin (19,552 votes)",
      "Largest margin in region in 2022",
    ],
    weaknesses: [
      "Town infrastructure gaps in Baba Bakala",
      "Limited industrial activity",
      "Healthcare shortages (CHC level only)",
      "Agricultural distress in rural areas",
    ],
    opportunities: [
      "Religious tourism potential from Gurudwara",
      "SC welfare scheme implementation",
      "NRI funding for community development",
      "Agriculture diversification",
    ],
    threats: [
      "Anti-incumbency building against AAP (3+ years in power)",
      "Drug menace affecting rural youth and SC communities",
      "AAP's unfulfilled promises to SC community",
      "Congress revival attempt with right candidate",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congressStrategy: {
      candidate:
        "Strong SC candidate, clean image, social worker or Dalit rights activist",
      casteStrategy: "SC vote consolidation essential - target Mazhabi/Ramdasia/Ravidassia",
      issues: [
        "Development",
        "SC welfare",
        "Jobs for SC youth",
        "Drug crisis in SC bastis",
      ],
      campaign: "AAP failed on SC promises - broken promises on women welfare, reservation",
      religiousApproach: "Respect Baba Bakala heritage and Gurudwara significance",
    },
    targetSegments: [
      {
        segment: "SC Voters (decisive)",
        description: "Mazhabi Sikh (rural), Ramdasia/Ravidassia (urban-rural)",
      },
      {
        segment: "Religious Voters",
        description: "Voters connected to Baba Bakala Sahib",
      },
      {
        segment: "Agricultural Community",
        description: "Rural distress, MSP concerns",
      },
      {
        segment: "Youth (18-35)",
        description: "Affected by unemployment and drug addiction",
      },
    ],
    keyMessages: [
      {
        narrative: "AAP didn't deliver for SC community",
        themes: [
          "Drug addiction in SC bastis: AAP failed to curb the menace",
          "Reservation implementation: Fake encounters with bureaucracy",
          "SC/ST Act violations: No justice for Dalit community",
        ],
      },
      {
        narrative: "Congress cares for downtrodden",
        themes: [
          "Dalit rights activist candidate",
          "SC welfare as priority",
          "Social justice focus",
        ],
      },
      {
        narrative: "Baba Bakala deserves better",
        themes: [
          "Town infrastructure neglected",
          "Tehsil headquarters needs unmet",
          "Gurudwara area development needed",
        ],
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
      caste: "Mazhabi Sikh or Ramdasia Sikh",
      casteCritical: true,
      profile: "Social worker, Dalit rights activist, youth leader",
      keyQualification:
        "Must have credibility in SC community, clean image, accessibility to SC bastis",
      mustAddress: "Drug addiction crisis in SC bastis",
    },
    attackLines: {
      developmentFailure: "Dalbir Singh Tong: Promised development but delivered nothing",
      drugMenace: "Drug addiction in SC bastis: AAP failed to curb the menace",
      reservationImplementation:
        "Reservation implementation: Fake encounters with bureaucracy",
      scStActViolations: "SC/ST Act violations: No justice for Dalit community",
      brokenPromises:
        "Broken promises: Rs 1000/month for women not reached SC families",
    },
    congressStrategicPosition: {
      status: "DIFFICULT",
      incumbentName: "Dalbir Singh Tong (AAP)",
      margin: "19,552 votes (AAP won by nearly 20,000)",
      historicalPattern: [
        "2012: SAD (Manjit Singh Mianwind) won with 60,244 votes",
        "2017: SAD (Manjit Singh Mianwind) won again",
        "2022: AAP (Dalbir Singh Tong) won with 19,552 margin",
      ],
      challenge:
        "Congress needs to reconnect with Mazhabi/Ramdasia voters; traditionally had strong Dalit Sikh support",
    },
  },

  // ==========================================================================
  // DATA GAPS
  // ==========================================================================
  dataGaps: {
    requiredVerification: [
      "2017 Assembly election results",
      "SC community voting patterns",
      "MLA performance assessment",
      "Local party organization details",
      "Gurudwara committee influence",
      "Booth-level AAP strength",
      "2012-2022 voter shift analysis",
      "Caste consolidation potential",
      "Education facilities details",
      "Gurudwara parking facilities",
      "Local Congress/SAD/BJP leaders",
    ],
    intelligencePriorities: [
      "SC community leadership mapping",
      "2022 voters' shift analysis (why SC voters moved to AAP)",
      "Booth-level AAP strength assessment",
      "Caste consolidation potential for Congress",
      "Drug addiction impact on SC youth - specific data",
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Wikipedia" },
      { name: "OneIndia" },
      { name: "ECI (Election Commission of India) data" },
      { name: "Census 2011" },
      { name: "IndiaVotes.com" },
      { name: "Punjab government websites" },
      { name: "News18" },
      { name: "ADR India" },
    ],
    researchStatus: {
      status: "partial",
      preparedFor: "Punjab Congress 2027 Election Intelligence",
      classification: "Internal Research Document",
    },
  },
};
