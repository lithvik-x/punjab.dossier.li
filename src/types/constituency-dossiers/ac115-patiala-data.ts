/**
 * AC115-Patiala Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC115-Patiala.md, AC115-Patiala-deep.md
 */

import type { AC115PatialaTypes } from "./ac115-patiala-types";

export const ac115PatialaData: AC115PatialaTypes = {
  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMicroTask: {
    id: "AC115-Patiala",
    topic: "AC115-Patiala Deep Constituency Dossier",
    tier: 2,
    date: "20 May 2026",
    agent: "Orchestrator-R1",
    sourcesConsulted: [
      "IndiaVotes",
      "Oneindia",
      "Wikipedia",
      "MyNeta",
      "PRS India",
      "WION",
      "Hindustan Times",
      "CNBC TV18",
    ],
    verificationStatus: "PARTIALLY VERIFIED — 2022 data confirmed; MLA profile confirmed",
    dataCurrency: "As of 20 May 2026",
  },

  dataQuality: {
    sources: [
      { name: "IndiaVotes", url: "https://www.indiavotes.com" },
      { name: "Oneindia", url: "https://www.oneindia.com" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Patiala" },
      { name: "MyNeta", url: "https://www.myneta.info" },
      { name: "PRS India", url: "https://www.prsindia.org" },
      { name: "WION", url: "https://www.wionews.com" },
      { name: "Hindustan Times", url: "https://www.hindustantimes.com" },
      { name: "CNBC TV18", url: "https://www.cnbctv18.com" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Precise 2017 result (who held this seat before 2022)",
        "MLA Kohli's actual development work in city",
        "Current voter sentiment in Patiala city",
        "Ex-CM Amarinder Singh's political status in 2026-2027",
        "Voter turnout exact figure",
        "Booth-level analysis",
        "Caste demographics specific to constituency",
      ],
    },
  },

  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 115,
    name: "Patiala",
    district: "Patiala",
    region: "Malwa",
    type: "General",
    category: "General (Urban)",
    date: "19 May 2026",
  },

  baseline: {
    parliamentarySegment: "Patiala Lok Sabha seat",
    subDistrictsCovered: ["Patiala city proper"],
    areaCharacter: "Entirely urban (Patiala city)",
    character: "Entirely urban (Patiala city)",
    neighboringACs: ["Rajpura (111)", "Ghanaur (113)", "Sanour (114)", "Samana (116)"],
    terrain: "Urban plain area",
    pollingBoothsStatus: "needs_verification",
    pollingBooths: [],
  },

  // ==========================================================================
  // EXECUTIVE SUMMARY
  // ==========================================================================
  executiveSummary: {
    overview:
      "Patiala (also known as Patiala Urban) is a General category Assembly constituency in Patiala district, Malwa region, Punjab. It elected Ajitpal Singh Kohli (AAP) in 2022 with a margin of 19,873 votes, defeating former Chief Minister Amarinder Singh (Congress) who finished a distant third.",
    keyOutcome:
      "AAP won in 2022 in massive upset; political earthquake - ex-CM Amarinder Singh lost in his home turf",
    politicalSignificance:
      "This was the most high-profile result in Patiala district — the political titanic clash of the 'Maharaja of Patiala' versus the Aam Aadmi Party. Kohli won 48,104 votes. The seat covers Patiala city proper.",
    strategicImplication:
      "AAP won by narrowest margin (19,873) among the 17 seats being researched. This is a prime Congress recovery seat given the narrow margin and urban voter dissatisfaction with AAP.",
  },

  mlaProfile: {
    name: "Ajitpal Singh Kohli",
    age: "[NEEDS VERIFICATION — born around 1960s-70s]",
    background: "Former Mayor of Patiala (2007-2012); former Akali Dal member",
    politicalJourney:
      "7-decade family association with Akali Dal → Turned to AAP → Won in 2022",
    firstElected: "2022",
    socialMedia: {
      facebook: "~45.1K likes",
      instagram: "10K followers",
    },
    keyMoment: "Defeated ex-CM Amarinder Singh in his home turf",
    legislativeRole: "Regular MLA participation (per PRS data)",
  },

  exCMContext: {
    name: "Amarinder Singh",
    title: "Maharaja of Patiala (royal family)",
    formerRole: "Former CM of Punjab (2017-2022)",
    partyAffiliation2022: "Left Congress in 2021; formed Punjabi Ekta Party",
    contestedFrom: "Patiala (lost) and possibly another seat",
    outcome: "Lost; significant political figure; his loss was nationally covered",
    politicalSignificance:
      "His loss was a politically significant event that made headlines nationally",
    royalConnection:
      "Royal family continues to have social influence despite political decline",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographicComposition: {
    patialaCityDemographics: {
      urbanPopulation: "~400,000-500,000 (city proper)",
      diversity: [
        "Traders",
        "Professionals",
        "Urban poor",
        "Students",
        "Scheduled Castes",
      ],
      casteMix:
        "Khatri, Arora, Baniya, Brahmin (upper castes in trading/professional); SC population in labour colonies; OBC in service/petty trade",
    },
    casteComposition: [
      {
        category: "Upper Castes (Khatri/Arora/Brahmin/Baniya)",
        percentage: "35-40%",
        notes: "Dominant in old city trading",
      },
      { category: "OBC", percentage: "20-25%", notes: "Service class, small businesses" },
      { category: "SC", percentage: "25-30%", notes: "Concentrated in labour colonies, urban poor" },
      {
        category: "Muslim/Christian minorities",
        percentage: "Small percentage",
      },
    ],
    urbanVoterCharacteristics: {
      voterAwareness: "Higher voter awareness and political engagement",
      politicallyActive: [
        "Trade unions",
        "Business associations",
        "Students from Punjabi University",
      ],
      studentPopulation: "Punjabi University students politically conscious",
      womenVoters:
        "Significant proportion; traditionally pro-Congress in Patiala",
    },
  },

  casteComposition: {
    source: "Caste estimates based on district-level data and urban composition",
    hinduUpperCaste: "28-32%",
    jatSikh: "20-24%",
    obc: "18-22%",
    sc: "16-20%",
    muslim: "4-6%",
    others: "6-8%",
  },

  casteCompositionDeep: {
    upperCastes: "35-40% of urban population (Khatri/Arora/Brahmin/Baniya)",
    obc: "20-25% (service class, small businesses)",
    sc: "25-30% (concentrated in labour colonies, urban poor)",
    minorities: "Small percentage (Muslim/Christian)",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Ajitpal Singh Kohli",
      party: "AAP",
      winnerVotes: "48,104",
      margin: "19,873 votes",
      runnerUp: "[NEEDS VERIFICATION — Congress candidate was Col. (Retd.) Mohan Singh or similar]",
      runnerUpParty: "Congress",
      totalElectors: "~160,000-170,000",
      voterTurnout: "~72-75%",
      votesPolled: "[NEEDS VERIFICATION from ECI]",
      notes: "Ex-CM Amarinder Singh contested but lost on Punjabi Ekta Party ticket",
    },
    results2017: {
      winner: "Congress",
      party: "INC",
      margin: "[NEEDS VERIFICATION]",
      notes: "Likely a different candidate before Amarinder's Lok Sabha entry",
    },
    results2012: {
      winner: "Congress",
      party: "INC",
      notes: "[NEEDS VERIFICATION]",
    },
    turnoutPattern: "Urban seats typically see 65-75% turnout",
    coreVoters: [
      "Urban middle class",
      "Traders",
      "Scheduled Castes",
      "Urban poor",
      "Women voters",
    ],
    swingFactors: [
      "Urban governance failures",
      "Drug crisis",
      "Unemployment",
      "AAP's 4-year record",
    ],
  },

  voterTurnoutAnalysis: {
    turnout2022: "[NEEDS VERIFICATION from ECI]",
    typicalUrbanTurnout: "65-75%",
    demographics: [
      "Urban registered voters: Patiala city",
      "Professional/trader voters: Business associations",
      "University students: Punjabi University area",
      "Urban poor: Labour colonies and JJ clusters",
      "Women: High proportion; traditionally pro-Congress",
    ],
    voterCharacteristics: [
      "Higher voter awareness and political engagement",
      "Trade unions and business associations politically active",
      "Students from Punjabi University politically conscious",
      "Women voters: Significant proportion",
    ],
  },

  // ==========================================================================
  // KEY ISSUES & GRIEVANCES
  // ==========================================================================
  keyIssuesGrievances: {
    urbanGovernanceFailures: {
      infrastructure: [
        "Patiala municipal corporation infrastructure aging",
        "Water supply crisis (depends on canal/groundwater)",
        "Sewage and drainage problems",
        "Power cuts in summer",
        "Road maintenance in old city areas",
      ],
      waterSupply: "Patiala depends on canal/groundwater; water supply crisis",
      sewageDrainage: "Sewage and drainage problems in old city",
      powerCuts: "Power cuts in summer",
      roadMaintenance: "Road maintenance in old city areas needed",
    },
    drugCrisis: {
      problem: "Urban youth addiction to drugs (chitta, heroin)",
      availability: "Easy availability in urban markets",
      lawEnforcement: "Law enforcement perceived as ineffective",
    },
    unemployment: {
      youthUnemployment: "Punjabi University students facing job scarcity",
      emigration: "Youth emigration (Dunki) prominent",
      smallIndustry: "Small industry decline in Patiala",
    },
    healthcare: {
      governmentHospital: "Government medical college (GMCH Patiala) overburdened",
      privateHospitalCosts: "Private hospital costs high for poor",
      healthCardImplementation: "Health card implementation gaps",
    },
    lawAndOrder: {
      crimeAgainstWomen: "Crime against women reported",
      propertyDisputes: "Property disputes in urban expansion areas",
      drugPeddling: "Drug peddling networks",
    },
    education: {
      punjabiUniversity: "Punjabi University: Fee hikes, student protests",
      governmentSchools: "Government schools: Quality concerns",
      coachingInstitutes: "Coaching institutes and private education burden",
    },
  },

  // ==========================================================================
  // POLITICAL DYNAMICS
  // ==========================================================================
  politicalDynamics: {
    aapPosition: {
      won2022: "Won in 2022 in massive upset",
      mlaBackground: "MLA Kohli: Former Akali; brings urban political experience",
      governmentBenefits:
        "Government MLA: Benefits from state schemes and city development funds",
      risk: "4-year governance record scrutinized",
    },
    congressPosition: {
      defeated:
        "Defeated in 2022 despite ex-CM contesting",
      legacyStrength:
        "Patiala has strong Congress legacy (Amarinder Singh's home base)",
      needFor2027: "Need strong candidate for 2027",
      potentialCoalition:
        "Potential to combine: urban Dalit + upper caste anti-AAP voters",
    },
    sadPosition: {
      mlaBackground: "MLA Kohli was former Akali; party may field different candidate",
      support: "Malwa urban seat: SAD has support but lost in 2022 wave",
      lost2022: "Lost in 2022 AAP wave",
      alliancePossibility: "Possible alliance with BJP 2027",
    },
    bjpPosition: {
      independentBase: "Limited independent base in Patiala urban",
      upperCasteHinduVoters: "Upper caste Hindu voters may lean BJP in urban areas",
      allianceBenefit: "May benefit from BJP-SAD alliance",
    },
    amarinderSinghFactor: {
      politicalFuture: "Political future uncertain (as of May 2026)",
      partyViability: "His Punjabi Ekta Party's viability unclear",
      affiliationImpact:
        "If he returns to Congress or makes alliance, affects Patiala dynamics",
      royalInfluence: "Royal family influence still felt in Patiala",
    },
    keyVariables2027: [
      {
        variable: "MLA Kohli's governance record",
        description: "AAP MLA's 4-year record as city representative",
      },
      {
        variable: "Congress candidate selection",
        description: "Must be strong urban candidate",
      },
      {
        variable: "Ex-CM Amarinder Singh's affiliation",
        description: "May split or consolidate opposition votes",
      },
      {
        variable: "BJP-SAD alliance dynamics",
        description: "Will affect overall opposition consolidation",
      },
    ],
  },

  // ==========================================================================
  // DEVELOPMENT PROFILE
  // ==========================================================================
  developmentProfile: {
    patialaCityDevelopment: {
      cmMannGovernment: "₹177 crore worth of development projects for Patiala",
      puda: "Urban planning and development works",
      gmada: "GMADA involvement in Patiala periphery",
      heritageConservation: "Heritage conservation attempts",
    },
    mlaDevelopmentWork: {
      publicRecord: "Limited public record of constituency-specific development",
      cityWorks:
        "As city MLA, may have facilitated municipal works",
      infrastructureClaims: "Infrastructure claims need verification",
      verificationNeeded: [
        "MLA Kohli's actual development work in city",
        "Specific projects completed",
        "Budget utilization",
      ],
    },
    urbanInfrastructureGaps: {
      oldCityWaterSupply: "Tanked water in summer",
      sewageTreatment: "Inadequate sewage treatment",
      trafficCongestion: "Traffic congestion in city center",
      parkingInfrastructure: "Parking infrastructure missing",
      heritageBuildingPreservation: "Heritage building preservation issues",
    },
  },

  // ==========================================================================
  // INFLUENTIAL POLITICAL FIGURES
  // ==========================================================================
  influentialFigures: {
    currentMLA: {
      name: "Ajitpal Singh Kohli",
      party: "AAP",
      background: "Former Mayor of Patiala (2007-2012); former Akali Dal member",
    },
    districtLevelLeaders: [
      {
        name: "Amarinder Singh",
        role: "Ex-CM",
        description: "Maharaja of Patiala; political kingmaker",
      },
    ],
    amarinderSingh: {
      name: "Amarinder Singh",
      role: "Ex-CM",
      description: "Maharaja of Patiala; political kingmaker",
    },
    keyInfluencers: [
      {
        name: "Patiala Royal Family",
        type: "Royal",
        influence: "Continued social influence despite political decline",
      },
      {
        name: "Trading Communities (CAT)",
        type: "Business",
        influence: "Association of Traders politically active",
      },
      {
        name: "Punjabi University",
        type: "Academic",
        influence: "Student unions politically conscious",
      },
      {
        name: "Municipal Councilors",
        type: "Political",
        influence: "Ward-level influence",
      },
      {
        name: "Gurdwara Management Committees",
        type: "Religious",
        influence: "Religious authority",
      },
    ],
  },

  // ==========================================================================
  // WELFARE SCHEMES
  // ==========================================================================
  welfareSchemes: {
    stateGovernment: {
      womenScheme: "₹1000/month for women: Nearly 97% of adult women targeted; urban implementation",
      healthCards: "₹10 lakh Health Cards: Ayushman Punjab in Patiala GMCH and empanelled hospitals",
      schoolsOfEminence: "City schools upgraded",
      urbanEmployment: "MNREGA urban component",
    },
    centralGovernment: {
      pmKisan: "PM Kisan Samman Nidhi: For farmers (urban seat has rural pockets)",
      jalJeevanMission: "Jal Jeevan Mission: Urban tap water",
      pmAwasYojana: "PM Awas Yojana: Urban housing for poor",
      ayushmanBharat: "Ayushman Bharat: Health coverage",
    },
    patialaSpecific: {
      heritageTourism: "Heritage tourism development potential",
      industrialFocalPoint: "Food processing, textiles",
    },
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentPosition: "Near-miss - narrowest margin in cluster",
    historicalStrength: "Won before AAP; urban stronghold",
    alertLevel: "CRITICAL - Highest priority",
    marginNote:
      "Narrowest margin (19,873) among 17 seats being researched - TOP PRIORITY",
  },

  congressPosition: {
    strengths: [
      "Narrowest margin = easiest to flip",
      "Urban voters showing anti-AAP sentiment",
      "Congress won here before",
      "Hindu Upper Caste dominant - Congress traditional voter",
    ],
    weaknesses: [
      "AAP has urban organization",
      "Incumbent has 5 years to build",
      "Need strong urban candidate",
      "Ex-CM Amarinder's party may split votes",
    ],
  },

  // ==========================================================================
  // ELECTORAL RECOMMENDATIONS
  // ==========================================================================
  electoralRecommendations: {
    target: "Flip AC115-Patiala Urban",
    winningVoteShare: "40%+",
    voteBankStrategy: [
      "Urban Dalit voters: Congress's traditional voter; AAP delivered limited",
      "Upper caste urban voters: Anti-AAP sentiment if governance failures mount",
      "Women: ₹1000 scheme delivery issues; safety concerns",
      "Traders/business: Affected by poor urban infrastructure",
      "Youth: Unemployment and drug crisis",
    ],
    candidateProfileRecommended: {
      caste: "Hindu Upper Caste (dominant in urban) OR Jat Sikh",
      profile: "Urban professional, businessman, social activist",
      attributes: [
        "Development focus",
        "Clean image",
        "Accessible",
        "Strong urban Patiala connect",
        "Clean image; no criminal cases",
        "Young and dynamic (under 50 preferred)",
      ],
      background:
        "New face preferred; avoid old politician image; preferably from existing political family (Congress/Akali)",
    },
    oppositionStrategy: [
      "MLA Kohli: Former Akali Dal — what did he deliver for Patiala?",
      "AAP government failures: Drugs, jobs, infrastructure",
      "\"Revolutionary\" claims of 2022 vs. ground reality",
      "Col. (Retd.) Mohan Singh or similar strong candidate context",
    ],
    allianceConsiderations:
      "Congress must decide: Field strong candidate vs. possible alliance with SAD/BSP; Triangular contest benefits AAP; Anti-AAP consolidation across opposition parties is key",
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      caste: "Hindu Upper Caste (dominant in urban) OR Jat Sikh",
      profile: "Urban professional, businessman, social activist",
      attributes: [
        "Development focus",
        "Clean image",
        "Accessible",
        "Strong urban Patiala connect",
        "Clean image; no criminal cases",
        "Young and dynamic (under 50 preferred)",
        "Khatri/Arora or Baniya to get upper caste votes",
      ],
      background:
        "New face preferred; avoid old politician image; preferably from existing political family (Congress/Akali)",
    },
    attackLines: {
      narrowMargin: "19,873 votes - narrowest margin, biggest failure",
      urbanGovernance: "Patiala city crumbling - roads, drainage, garbage",
      brokenPromises: "Urban voters betrayed - jobs, healthcare broken",
      drugNetworks: "Drug networks active in city - police failure",
      heritageNeglect: "Heritage city ignored - no development",
    },
  },

  // ==========================================================================
  // INTELLIGENCE ASSESSMENT
  // ==========================================================================
  intelligenceAssessment: {
    overallCongressPosition: "MODERATE — Contested Seat",
    factors: [
      {
        factor: "2022 Result",
        assessment: "AAP won; 19,873 margin",
      },
      {
        factor: "INC 2022 Vote Share",
        assessment: "~25-30% (ex-CM contesting, got significant votes but lost)",
      },
      {
        factor: "INC 2022 Position",
        assessment: "Third place (Amarinder on Punjab Ekta ticket)",
      },
      {
        factor: "Incumbent Strength",
        assessment: "AAP (Ajitpal Kohli, former Mayor, former Akali)",
      },
      {
        factor: "Anti-Incumbency",
        assessment: "Moderate (AAP has 4-year city governance record)",
      },
      {
        factor: "Caste Arithmetic",
        assessment: "Complex urban mix",
      },
      {
        factor: "Win Probability (INC)",
        assessment: "MODERATE",
      },
    ],
    keyRiskFactors: [
      {
        risk: "MLA Kohli is experienced urban politician",
        description: "Former Mayor with deep local connections",
      },
      {
        risk: "AAP's 2022 'revolution' sentiment still alive",
        description: "Some voters still believe in AAP's anti-corruption narrative",
      },
      {
        risk: "Ex-CM Amarinder's party may split opposition votes",
        description: "Punjabi Ekta Party could divide anti-AAP voters",
      },
    ],
    opportunityWindows: [
      {
        opportunity: "Urban governance failures",
        description: "Water, sewage, roads, traffic issues",
      },
      {
        opportunity: "AAP government's overall record",
        description: "Drugs, farm distress, unemployment",
      },
      {
        opportunity: "MLA's former Akali background",
        description: "Questions about party loyalty",
      },
      {
        opportunity: "Youth anger over unemployment and drugs",
        description: "Key voting bloc frustrated",
      },
    ],
    intelligenceGaps: [
      {
        gap: "Ex-CM Amarinder Singh's political status",
        description: "In 2026-2027",
      },
      {
        gap: "Precise 2017 result",
        description: "Who held this seat before 2022",
      },
      {
        gap: "MLA Kohli's actual development work",
        description: "In city",
      },
      {
        gap: "Current voter sentiment",
        description: "In Patiala city",
      },
    ],
  },

  // ==========================================================================
  // SOURCES
  // ==========================================================================
  sources: {
    sourcesConsulted: [
      "Oneindia",
      "MyNeta",
      "PRS India",
      "WION",
      "Hindustan Times",
      "CNBC TV18",
      "Wikipedia",
    ],
    notes: "NEEDS VERIFICATION items marked accordingly in data.",
  },
};
