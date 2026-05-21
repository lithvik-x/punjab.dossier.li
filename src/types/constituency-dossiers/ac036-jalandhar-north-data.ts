/**
 * AC036-Jalandhar-North Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC036-Jalandhar-North.md, AC036-JalandharNorth-deep.md
 * Note: User requested AC036-Nagar but AC036 is Jalandhar-North (no AC036-Nagar exists)
 */

import type { AC036JalandharNorthTypes } from "./ac036-jalandhar-north-types";

export const ac036JalandharNorthData: AC036JalandharNorthTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 36,
    name: "Jalandhar North",
    district: "Jalandhar",
    region: "Doaba",
    type: "General",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Jalandhar Lok Sabha constituency",
    subDistrictsCovered: ["Jalandhar city", "Cantonment area", "Industrial zones"],
    areaCharacter: "Urban constituency, major commercial and industrial center",
    terrain: "Urban plain, flat terrain",
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  historicalContext: {
    formation: "Part of Jalandhar district, historically significant as Doaba region",
    historicalSignificance:
      "Jalandhar is one of the oldest cities in Punjab, with historical heritage sites",
    localHeritage: [
      "Historical temples and religious sites",
      "Heritage preservation concerns",
    ],
  },

  economicIdentity: {
    primaryActivities: [
      "Manufacturing and industry",
      "Sports goods production",
      "IT and services",
      "Retail and trade",
    ],
    employmentPatterns: [
      "Industrial workers",
      "Business owners",
      "Service sector employees",
      "Government employees",
    ],
    landholdingPatterns: "Urban area - predominantly non-agricultural land holdings",
  },

  socioCulturalIdentity: {
    language: "Punjabi (Doaba dialect)",
    religiousComposition: {
      sikh: "57.7% (Punjab state average)",
      hindu: "38.5% (Punjab state average)",
      muslim: "1.9%",
      christian: "1.3%",
    },
    casteCompositionStatus: "needs_verification",
    culturalInstitutions: ["Gurdwaras", "Temples", "Market areas", "Industrial associations"],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  censusData: {
    population: "21,93,590 (Jalandhar district total - 2011 Census)",
    sexRatio: "~963 females per 1000 males (district average)",
    literacyRate: "~85% (district average, higher than state average)",
    casteWise: "SC ~38.95% of district population",
  },

  districtDemographics: {
    totalPopulation: "21,93,590",
    urbanPopulation: "Major urban center",
    scPopulation: "4,44,444",
    scPercentage: "38.95% of district population",
  },

  electoralRollAnalytics: {
    totalElectors: "192,058 (from basic file) / ~167,000 (from deep file)",
    genderGap: "[NEEDS VERIFICATION]",
    voterTurnout2022: "~66-70% (estimated)",
    voterTurnoutStateAverage: "~78%",
  },

  schemePenetration: {
    pdsNfsa: "[NEEDS VERIFICATION]",
    mgnrega: "[NEEDS VERIFICATION]",
    pmKisan: "[NEEDS VERIFICATION]",
    ayushmanBharat: "[NEEDS VERIFICATION]",
  },

  digitalAccess: {
    mobileInternetUrban: "~85%",
    mobileInternetRural: "[N/A - urban constituency]",
    socialMedia: ["WhatsApp", "Facebook", "Instagram", "YouTube"],
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Avtar Singh Junior",
      party: "Indian National Congress",
      voteShare: "~42% (estimated)",
      margin: "9,486 votes",
      marginVotes: 9486,
      totalElectors: "192,058",
      voterTurnout: "~66-70%",
      votesPolled: "~117,000 (from deep file)",
      runnerUp: "[NEEDS VERIFICATION]",
      runnerUpParty: "[NEEDS VERIFICATION]",
    },
    results2017: {
      winner: "Avtar Singh Junior",
      party: "Indian National Congress",
      margin: "[NEEDS VERIFICATION]",
    },
    results2012: {
      winner: "[NEEDS VERIFICATION]",
      party: "[NEEDS VERIFICATION]",
    },
    turnoutPattern: "Consistent 66-76% in recent elections",
    coreVoters: [
      "Urban middle class",
      "Industrial workers",
      "Business community",
      "Service sector employees",
    ],
    swingFactors: [
      "Urban voter volatility",
      "Drug crisis concerns",
      "Infrastructure development",
      "AAP growing urban base",
    ],
  },

  casteComposition: {
    source: "Urban constituency with mixed population estimates",
    hinduKhatriArora: "~30-35%",
    jatSikh: "~25-30%",
    scMazhabiRamdasia: "~18-22%",
    obc: "~12-15%",
    muslim: "~3-5%",
    other: "~5%",
  },

  casteCompositionDeep: {
    jathSikh: "20-22%",
    scDalit: "32%",
    obc: "15-18%",
    upperCaste: "18%",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    mlaSatisfaction:
      "Avtar Singh Junior (INC) - TWO-TERM incumbent, constituent feedback positive on development work",
    trustInInstitutions:
      "Urban middle-class dissatisfaction with law and order; drug crisis concerns prevalent",
    issues: [
      {
        rank: 1,
        title: "Drug Trafficking and Addiction",
        description:
          "Urban youth addiction perceived as #1 issue; government response criticized",
        prioritySegment: ["Urban youth", "Families"],
      },
      {
        rank: 2,
        title: "Unemployment",
        description:
          "Jobs for educated youth - major concern in urban constituency",
        prioritySegment: ["Young voters (18-35)"],
      },
      {
        rank: 3,
        title: "Infrastructure and Roads",
        description: "Jalandhar's chronic traffic and infrastructure issues",
        prioritySegment: ["All residents", "Commuters"],
      },
      {
        rank: 4,
        title: "Healthcare Accessibility",
        description: "Healthcare facility accessibility in urban areas",
        prioritySegment: ["All residents"],
      },
      {
        rank: 5,
        title: "Law and Order",
        description: "Urban safety concerns, law and order issues",
        prioritySegment: ["All residents", "Families"],
      },
    ],
    misinformationStatus: "needs_verification",
  },

  governanceAudit: {
    districtCollector: "Jalandhar district",
    policeSystem: "Commissionerate system",
    developmentMetrics: {
      developmentBoost: "₹283 crore development boost in 2025",
      smartCityInitiatives: "Smart City initiatives ongoing",
      grievanceRedressal: "24-hour grievance redressal system (Action Line 24/7)",
    },
    gaps: {
      trafficCongestion: "Traffic congestion in urban areas - persistent issue",
      waterSewerage: "Water and sewerage infrastructure aging",
      solidWasteManagement: "Solid waste management challenges",
    },
  },

  governanceGap: {
    serviceDelivery: {
      health: "[NEEDS VERIFICATION - urban healthcare facilities]",
      education: "[NEEDS VERIFICATION - schools and institutions]",
      roads: "Traffic congestion, road maintenance needed",
      waterSanitation: "Aging water and sewerage infrastructure",
    },
    schemeImplementation: {
      mgnrega: "[NEEDS VERIFICATION]",
      beneficiaryLists: "[NEEDS VERIFICATION]",
      pds: "[NEEDS VERIFICATION]",
    },
  },

  issues: [
    {
      category: "Law and Order",
      specificIssues: ["Drug trafficking", "Urban crime", "Police response time"],
    },
    {
      category: "Employment",
      specificIssues: ["Youth unemployment", "Job creation", "Skill development"],
    },
    {
      category: "Infrastructure",
      specificIssues: ["Traffic congestion", "Road conditions", "Urban planning"],
    },
    {
      category: "Health",
      specificIssues: ["Healthcare accessibility", "De-addiction centers"],
    },
  ],

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalPlayers: {
      localMLAs: "Current and former MLAs - significant influence",
      municipalCounselors: "Municipal Corporation counselors - local influence",
      industrialistsTraders: "Industrialists and traders - economic power center",
      religiousLeaders: "Gurdwara committees - community influence",
      socialMediaInfluencers: "Digital influencers - narrative shaping",
    },
    powerCenters: {
      partyLocalUnits: "Strong local party units",
      industrialAssociations: "Jalandhar is known for sports goods manufacturing",
      tradeUnions: "Industrial and service sector unions",
      studentOrganizations: "Youth and student wings of parties",
    },
    nonPoliticalInfluencers: {
      religious: ["Gurdwara committees", "Temple trusts"],
      casteLeaders: "[NEEDS VERIFICATION - dominant castes in constituency]",
      professional: ["Industrial associations", "Trade bodies"],
    },
    politicalNodes: {
      exMla: "[NEEDS VERIFICATION]",
      boothAgents: "[NEEDS VERIFICATION]",
    },
    casteEquations:
      "Hindu Khatri/Arora and Jat Sikh communities form major voter base",
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    inventory: {
      newspapers: ["Punjabi vernacular papers", "Regional dailies"],
      tv: ["Local cable networks", "Regional news channels"],
      digital: ["Facebook", "WhatsApp", "Instagram", "YouTube", "Digital news portals"],
    },
    consumption: {
      bySegment: "WhatsApp groups for news, TV for elections, digital for youth",
    },
    influencers: {
      localJournalists: "Local journalists - significant influence",
      politicalCommentators: "Political commentators on digital platforms",
      socialMediaActivists: "Social media activists and influencers",
    },
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyAreas: {
      urbanJalandharCity: "Main urban area of Jalandhar city",
      cantonmentArea: "Jalandhar Cantonment area",
      industrialZones: "Industrial focal points",
      marketAreas: "Market areas including Sadar Bazaar",
    },
    boundaries: {
      adjacent: "Adjacent to Jalandhar Cantt (AC037)",
      parliamentarySeat: "Part of Jalandhar Lok Sabha",
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
      "Urban constituency with educated electorate",
      "Strong Congress legacy - TWO-TERM incumbent",
      "Good road connectivity",
      "Industrial base - sports goods manufacturing hub",
      "Avtar Singh Junior won 2017 and 2022 consecutively",
    ],
    weaknesses: [
      "Aging infrastructure",
      "Drug prevalence perception",
      "Traffic congestion - Jalandhar's chronic issue",
      "Urban voter volatility increasing",
    ],
    opportunities: [
      "IT sector potential",
      "Industrial revival",
      "Urban modernization through Smart City",
      "Development boost of ₹283 crore",
    ],
    threats: [
      "AAP growing urban base",
      "Anti-incumbency against Congress",
      "Economic distress",
      "Urban voter shift to AAP",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    narratives: [
      '"What did AAP do in Jalandhar in 4 years?"',
      '"City infrastructure: Same problems since 2017"',
      '"Drug crisis: Urban youth dying, government sleeping"',
      '"Broken promises: Rs 1000/month not delivered"',
      '"We have work to show: Avtar Singh Junior delivers"',
    ],
    prioritySegments: [
      {
        segment: "Young voters (18-35)",
        rationale: "Most affected by unemployment and drug crisis",
      },
      {
        segment: "Industrial workers",
        rationale: "Core support base, employment concerns",
      },
      {
        segment: "Business community",
        rationale: "Infrastructure and ease of doing business",
      },
      {
        segment: "Urban middle class",
        rationale: "Development expectations, law and order",
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
      profile: "Current MLA Avtar Singh Junior with development credentials",
      casteConsideration: "Hindu Khatri/Arora or Jat Sikh background preferred",
      keyQualifications: [
        "Incumbent advantage - TWO TERMS",
        "Local connect",
        "Development track record",
      ],
      incumbentAdvantage:
        "Strong - Avtar Singh Junior won 2017 and 2022, good margin in 2022",
    },
    attackLines: {
      drugCrisis: "Urban youth affected by drug addiction - government response inadequate",
      unemployment: "Jobs for educated youth not delivered",
      brokenPromises: "Rs 1000/month for women not delivered",
      governanceFailures: "Same infrastructure problems since 2017, AAP did nothing",
      developmentFocus: "Avtar Singh Junior delivers - highlight development work",
    },
    congressStrategy: {
      currentPosition: "STRONG - Congress won by 9,486 votes, TWO-TERM incumbent",
      incumbentName: "Avtar Singh Junior",
      termCount: 2,
      margin: "9,486 votes",
      challenges: [
        "Address drug crisis concerns",
        "Urban voter volatility",
        "AAP growing urban base",
      ],
    },
    aapStrategy: {
      narrative: "Leveraging urban governance narrative, anti-corruption messaging",
      focusAreas: [
        "Youth employment promises",
        "Anti-corruption",
        "Civic failures",
      ],
    },
    sadbjpStrategy: {
      narrative: "Mobilizing Sikh voters, highlighting drug crisis",
      focusAreas: [
        "Local candidate selection",
        "Sikh voter mobilization",
        "Anti-AAP unity",
      ],
    },
  },

  // ==========================================================================
  // EXTERNAL FACTORS
  // ==========================================================================
  externalFactors: {
    politicalShocks: [
      "Ticket distribution controversy",
      "Candidate criminal background exposure",
      "Development fund allocation before elections",
      "Central government schemes announcement",
    ],
    economicShocks: [
      "Industrial closure/job losses",
      "Economic downturn impact",
    ],
    socialEvents: [
      "Major drug bust coverage",
      "Communal incidents",
      "Prominent criminal case",
    ],
    externalShocks: [
      "Law and order incident",
      "State government scandal",
    ],
    wildcards: {
      ticketDistribution: "Ticket distribution controversy can split votes",
      candidateCriminalBackground: "Candidate criminal background can impact voter sentiment",
      developmentFundAllocation:
        "Pre-election development fund allocation can shift voter preferences",
      centralGovernmentSchemes: "Central government schemes announcement can benefit incumbent",
      drugSeizureIncidents: "Drug seizure incidents can impact law and order narrative",
    },
    monitoringTriggers: {
      bypollHistory: "Bypoll history (Chabbewal shows volatility) - volatility indicator",
      candidateAnnouncements: "Candidate announcements - early signal of party strategy",
      allianceFormations: "Alliance formations between parties",
      groundReports: "Ground reports from local agents - field intelligence",
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jalandhar_North_(Punjab_Assembly_constituency)" },
      { name: "OneIndia", url: "https://www.oneindia.com" },
      { name: "IndiaVotes", url: "https://www.indiavotes.com" },
      { name: "ECI Data", url: "https://eci.gov.in" },
      { name: "ADR India", url: "https://adrindia.org" },
      { name: "News18", url: "https://www.news18.com" },
      { name: "India Today", url: "https://www.indiatoday.in" },
      { name: "Jalandhar district official portal", url: "https://jalandhar.nic.in" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Runner-up candidate name and party for 2022",
        "2017 and 2012 election results verification",
        "Exact voter turnout 2022 figure",
        "Polling booth locations",
        "Caste demographics specific to constituency",
        "Ex-MLA/Ministers from area",
        "Booth agents network",
        "Dominant castes in area",
        "Rally grounds and hoarding spots",
        "Must-win booths for Congress",
        "Resource allocation details",
        "Health facilities details",
        "Education institutions",
        "MGNREGA current status",
        "PDS coverage details",
        "Ayushman Bharat enrollment",
        "Common misinformation themes",
        "Traffic congestion specific data",
        "Smart City initiative progress",
      ],
    },
  },
};
