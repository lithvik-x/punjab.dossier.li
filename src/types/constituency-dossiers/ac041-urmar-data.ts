/**
 * AC041-Urmar Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC041-Urmar.md, AC041-Urmar-deep.md
 */

import type { AC041UrmarTypes } from "./ac041-urmar-types";

export const ac041UrmarData: AC041UrmarTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 41,
    name: "Urmar",
    district: "Hoshiarpur",
    region: "Doaba",
    type: "General",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Hoshiarpur Lok Sabha constituency",
    subDistrictsCovered: ["Urmar area", "surrounding rural blocks in Hoshiarpur district"],
    areaCharacter: "Rural/semi-urban in Hoshiarpur district",
    terrain: "Doaba region - agricultural plains with rural character",
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    formation: "Urmar has been an assembly constituency in Hoshiarpur district",
    historicalSignificance:
      "Doaba region's high Sikh population and significant SC electorate make this a strategically important seat for Congress to reclaim",
    localHeritage: ["Agricultural heritage", "Doaba cultural identity", "Rural community roots"],
  },

  economicIdentity: {
    primaryActivities: ["Agriculture", "Animal husbandry", "Small businesses"],
    employmentPatterns: [
      "Farming",
      "Agricultural labor",
      "Government jobs",
      "Small-scale businesses",
    ],
    landholdingPatterns: "Agricultural dominant - majority of population engaged in farming",
  },

  socioCulturalIdentity: {
    language: "Punjabi (Doaba dialect)",
    religiousComposition: {
      sikh: "~62% (Jat + Others)",
      hindu: "~30%",
    },
    casteCompositionStatus: "needs_verification",
    culturalInstitutions: ["Gurdwaras", "Temples", "Local fairs"],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  censusData: {
    population: "15,86,625 (Hoshiarpur district total)",
    sexRatio: "~895 females per 1000 males (district average)",
    literacyRate: "~85% (district average)",
    casteWise: "SC ~26-28% of district population",
  },

  electoralRollAnalytics: {
    totalElectors: "~1,30,000 (2022), ~1,25,000 (2017)",
    genderGap: "[NEEDS VERIFICATION]",
    voterTurnout2022: "~75%",
    voterTurnoutStateAverage: "~78%",
  },

  schemePenetration: {
    pdsNfsa: "[NEEDS VERIFICATION]",
    mgnrega: "[NEEDS VERIFICATION]",
    pmKisan: "[NEEDS VERIFICATION]",
    ayushmanBharat: "[NEEDS VERIFICATION]",
  },

  digitalAccess: {
    mobileInternetUrban: "~75%",
    mobileInternetRural: "~65%",
    socialMedia: ["WhatsApp", "Facebook", "Instagram"],
  },

  casteDemographics: {
    totalScPopulation: "5,57,504 (2011 Census - Hoshiarpur district)",
    scPercentageOfDistrict: "~26-28%",
    doabaRegionScConcentration: "40%+ in many villages",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Jasvir Singh Raja Gill",
      party: "AAP",
      voteShare: "~36.2%",
      margin: "4,190 votes",
      totalElectors: "~1,30,000",
      voterTurnout: "~75%",
      votesPolled: "~98,000",
      runnerUp: "Sangat Singh Gilzian",
      runnerUpParty: "INC",
    },
    results2017: {
      winner: "Sucha Singh",
      party: "INC",
      margin: "~3,200 votes",
    },
    results2012: {
      winner: "Sucha Singh",
      party: "INC",
    },
    turnoutPattern: "Consistent 74-75% in recent elections",
    coreVoters: ["Agrarian community", "Rural households", "Traditional Congress voters", "SC population in villages"],
    swingFactors: [
      "Anti-incumbency against Congress",
      "AAP wave in 2022",
      "Local candidate popularity",
      "Caste dynamics",
    ],
  },

  casteComposition: {
    source: "Caste estimates based on district-level census data and regional patterns",
    sikh: "~62% (Jat + Others)",
    hindu: "~30%",
    sc: "~26-28% (Hoshiarpur district total)",
    other: "~8%",
  },

  casteCompositionDeep: {
    scPopulation: "~26-28% [NEEDS VERIFICATION for constituency-specific data]",
    generalPopulation: "Rest of population",
  },

  voteShareData: {
    partyResults: [
      { party: "AAP", voteShare: "~36.2%" },
      { party: "INC", voteShare: "~33.5%" },
      { party: "SAD", voteShare: "~18%" },
      { party: "BSP", voteShare: "~6%" },
      { party: "Others", voteShare: "~6.3%" },
    ],
    congressGapToWin: "~2,100 additional votes (50% of margin reversal)",
    marginReversalPotential: "HIGH - 4,190 margin is surmountable",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    mlaSatisfaction: "[NEEDS VERIFICATION - AAP MLA Jasvir Singh Raja Gill sitting MLA]",
    trustInInstitutions:
      "[NEEDS VERIFICATION - general Punjab trends suggest declining trust in state govt]",
    issues: [
      {
        rank: 1,
        title: "Agricultural Distress",
        description:
          "MSP implementation issues, stubble burning restrictions, groundwater depletion",
        prioritySegment: ["Farmer households (~65%)"],
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description:
          "Drug addiction rates in Doaba region (highest in Punjab) - devastating families",
        prioritySegment: ["Rural youth", "Families"],
      },
      {
        rank: 3,
        title: "Unemployment",
        description: "Youth emigration, lack of industrial development",
        prioritySegment: ["Young voters (18-35)"],
      },
      {
        rank: 4,
        title: "Healthcare",
        description: "Inadequate hospital facilities in rural areas",
        prioritySegment: ["All residents", "Rural population"],
      },
      {
        rank: 5,
        title: "Roads/Infrastructure",
        description: "Rural connectivity needs improvement",
        prioritySegment: ["Rural residents"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceGap: {
    serviceDelivery: {
      health: "[NEEDS VERIFICATION - District hospital in Hoshiarpur, sub-centers in rural areas]",
      education: "[NEEDS VERIFICATION - Government schools, some private institutions]",
      roads: "[NEEDS VERIFICATION - Major connectivity via state highways]",
      waterSanitation: "[NEEDS VERIFICATION]",
    },
    schemeImplementation: {
      mgnrega: "[NEEDS VERIFICATION]",
      beneficiaryLists: "[NEEDS VERIFICATION - some complaints about inclusion/exclusion errors]",
      pds: "Ration cards distributed, fair price shops operational [NEEDS VERIFICATION]",
    },
  },

  issues: [
    {
      category: "Agriculture",
      specificIssues: [
        "MSP implementation delays",
        "Stubble burning restrictions",
        "Groundwater depletion",
        "Diesel prices",
      ],
    },
    {
      category: "Law & Order",
      specificIssues: [
        "Drug addiction crisis (highest in Punjab)",
        "Drug rehabilitation centers insufficient",
      ],
    },
    {
      category: "Employment",
      specificIssues: ["Limited industrial jobs", "Youth migration", "Lack of skill development"],
    },
    {
      category: "Infrastructure",
      specificIssues: ["Road conditions in rural areas", "Power supply issues"],
    },
    {
      category: "Governance",
      specificIssues: [
        "AAP government scheme delivery",
        "Local MLA performance",
        "Rural development programs",
      ],
    },
  ],

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    nonPoliticalInfluencers: {
      religious: ["Local granthis", "Priests"],
      casteLeaders: "[NEEDS VERIFICATION - dominant castes in Urmar area]",
      professional: ["Farmers' unions", "Trader associations"],
    },
    politicalNodes: {
      exMla: "Sucha Singh (Congress) - former MLA",
      boothAgents: "[NEEDS VERIFICATION]",
      notableFamilies: "[NEEDS VERIFICATION]",
    },
    casteEquations:
      "Doaba's complex caste dynamics require careful candidate selection",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi Tribune", "Jag Bani", "Dainik Bhaskar", "News18", "OneIndia"],
      tv: ["Local cable", "Regional news channels"],
      digital: ["Facebook", "WhatsApp", "Instagram"],
    },
    consumption: {
      bySegment: "WhatsApp groups for news, TV for elections, newspapers for older voters",
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
      "Congress held this seat in 2012 and 2017",
      "Narrow AAP margin (4,190 votes) indicates winnable seat",
      "Doaba region high Sikh population traditionally favorable for Congress",
      "Significant SC electorate in the region",
    ],
    weaknesses: [
      "Lost to AAP in 2022 by narrow margin",
      "Drug crisis severe in Doaba region",
      "Limited industrial development",
      "Youth out-migration",
    ],
    opportunities: [
      "Small margin reversal possible with correct candidate",
      "AAP government failures on drug crisis - winning issue for Congress",
      "Booth-level management can consolidate traditional Congress voters",
    ],
    threats: [
      "AAP momentum despite narrow win",
      "Doaba's complex caste dynamics",
      "Local disputes can split Congress votes",
      "AAP carried Urmar showing shift in voter preference",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    narratives: [
      '"Drug Mukt Doaba" - Every family affected; demand accountability from AAP',
      '"Broken Promises" - ₹1000/month for women not fully implemented, unemployment risen',
      '"Governance Failures" - Healthcare, education infrastructure still inadequate',
      '"Local Son" - Candidate with strong roots in Urmar/Hoshiarpur area',
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
      {
        segment: "SC electorate",
        rationale: "Significant population in Doaba region, traditional Congress voters",
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
      caste: "Sikh (Jat or Rajput Sikh preferred)",
      background: "Agricultural, connected to farming community",
      age: "45-55 years",
      localConnect: "Strong roots in Urmar/Hoshiarpur area",
      issueChampion: ["Farmer issues", "Youth issues", "Anti-drug stance"],
    },
    attackLines: {
      drugCrisis:
        "Despite AAP's claims, drug addiction continues devastating Doaba families - Doaba has highest addiction rates in Punjab",
      brokenPromises:
        "₹1000/month for women not implemented fully, unemployment has risen under AAP government",
      governanceFailures:
        "Healthcare infrastructure inadequate in rural areas, education facilities still gap",
      ticketDistribution:
        "AAP gave ticket to politically inexperienced candidate (Jasvir Singh Raja Gill)",
    },
    congressStrategy: {
      currentPosition: "Lost to AAP in 2022 by narrow 4,190 margin",
      lossIn2022: "AAP won by 4,190 votes",
      history: "Congress held this seat in 2012 and 2017 (Sucha Singh)",
      opportunity:
        "Small margin indicates reversal possible with correct candidate and booth-level management",
      recommendedStrategy: [
        "Candidate Selection: Prioritize locally respected Sikh leader with farmer background",
        "Caste Balance: Ensure SC candidate consideration if ticket to Rajput Sikh",
        "Drug Narrative: AAP government failed on drug crisis - this is winning issue for Congress",
        "Booth Management: Congress traditional vote bank needs consolidation",
      ],
    },
  },

  // ==========================================================================
  // RISK FACTORS
  // ==========================================================================
  riskFactors: {
    risks: [
      "Caste Configuration: Doaba's complex caste dynamics require careful candidate selection",
      "Local Issues: Any local disputes can split Congress votes",
      "AAP Momentum: Despite narrow win, AAP carried Urmar - showing shift in voter preference",
      "Youth Out-Migration: Employment opportunities drive young voters away",
    ],
  },

  // ==========================================================================
  // RECOMMENDATIONS SUMMARY
  // ==========================================================================
  recommendationsSummary: {
    priority: "HIGH - Close margin seat, direct Congress target",
    candidate: "Local Sikh leader with farmer/agri background",
    narrative: "Drug crisis, broken promises, governance failure",
    casteStrategy: "Consolidate traditional Congress voters + attract floating voters",
    marginReversalPotential: "HIGH - 4,190 margin is surmountable",
  },

  // ==========================================================================
  // EXTERNAL FACTORS
  // ==========================================================================
  externalFactors: {
    politicalShocks: [
      "Central government schemes announcement before election",
      "State-level corruption scandals",
      "AAP's local MLA performance",
    ],
    economicShocks: [
      "Agricultural crisis (crop failure, price crash)",
      "Job loss due to industrial closure",
    ],
    socialEvents: ["Major drug bust coverage", "Communal incidents"],
    externalShocks: ["Pandemic/resurgence", "Economic downturn"],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "News18", url: "https://www.news18.com" },
      { name: "OneIndia", url: "https://www.oneindia.com" },
      { name: "IndiaVotes", url: "https://www.indiavotes.com" },
      { name: "India Today", url: "https://www.indiatoday.in" },
      { name: "ProNeta", url: "https://www.proneta.com" },
      { name: "ECI Data", url: "https://eci.gov.in" },
      { name: "minimax-web-search", url: "" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Polling booth locations and accessibility",
        "Local heritage sites",
        "Landholding patterns",
        "Health facilities details",
        "Education institutions",
        "Banks/Post offices",
        "2012 and 2017 election results detailed verification",
        "Voter turnout exact figures",
        "MGNREGA current status",
        "PDS coverage details",
        "Ayushman Bharat enrollment",
        "Caste demographics specific to constituency",
        "Ex-MLA/Ministers from area",
        "Booth agents network",
        "Dominant castes in Urmar area",
        "Rally grounds and hoarding spots",
        "Must-win booths",
        "Resource allocation details",
        "Common misinformation themes",
        "Hoshiarpur district SC population for constituency",
      ],
    },
  },
};
