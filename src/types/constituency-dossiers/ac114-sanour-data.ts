/**
 * AC114-Sanour Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC114-Sanour.md, AC114-Sanour-deep.md
 */

import type { AC114SanourTypes } from "./ac114-sanour-types";

export const ac114SanourData: AC114SanourTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 114,
    name: "Sanour",
    district: "Patiala",
    region: "Malwa",
    type: "General",
    dataCurrency: "As of 20 May 2026",
  },

  constituencyProfile: {
    acNo: 114,
    type: "GEN (General)",
    district: "Patiala",
    region: "Malwa",
    partOf: "Patiala Lok Sabha seat",
    neighboringACs: ["Ghanaur (113)", "Patiala (115)", "Samana (116)"],
  },

  mlaProfile: {
    name: "Harmeet Singh Pathanmajra",
    age: 46,
    education: "Inter/Higher Secondary (Class 12)",
    father: "Hardev Singh",
    firstElected: 2022,
    party: "AAP",
    partyPosition: "AAP MLA from Sanour",
    criminalStatus: "proclaimed_offender",
    criminalCase: {
      timeline: [
        {
          date: "September 2, 2025",
          event: "Police attempt to arrest Pathanmajra in Zirakpur; he evaded arrest",
        },
        {
          date: "November 2025",
          event: "Reports emerged he fled to Australia",
        },
        {
          date: "December 2025",
          event: "Declared proclaimed offender by court",
        },
        {
          date: "March 2026",
          event: "Escaped from police custody after allegedly opening fire on cops",
        },
      ],
      currentStatus: "Absconding; AAP may have appointed new in-charge for constituency",
      proclaimedOffenderDate: "December 2025",
    },
    criticalNote:
      "Currently proclaimed offender in rape case; on the run since September 2025",
  },

  // ==========================================================================
  // ELECTORAL HISTORY
  // ==========================================================================
  electoralHistory: {
    results2022: {
      winner: "Harmeet Singh Pathanmajra",
      winnerVotes: 83893,
      party: "AAP",
      runnerUp: "Harinder Pal Singh Chandumajra",
      runnerUpVotes: 36771,
      margin: 49122,
      marginPercent: "~58.5% of votes polled — massive margin indicating wave victory",
      totalCandidates: 14,
    },
    results2017: {
      winner: "SAD",
      party: "SAD",
    },
    results2012: {
      winner: "Congress",
      party: "INC",
      status: "needs_verification",
    },
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  patialaDistrictDemographics: {
    totalSCPopulation: "4,65,547",
    scPercentageOfDistrict: "24.55% of district population",
    malwaRegionCharacteristic: "Jat Sikh dominant agrarian caste",
  },

  casteComposition: {
    jatSikh: "30-34% (Dominant caste; agrarian community; largest vote bank)",
    sc: "24-28% (Ramdassia/Mazhabi Sikh: Substantial in rural villages; 20-25% of population)",
    obc: "18-22% (Smaller communities)",
    upperCaste: "12-16% (Minor presence in town areas)",
    others: "5-7%",
  },

  ruralCharacteristics: {
    urbanRural: "entirely_rural",
    majorTowns: ["No major town in constituency"],
    agriculturalVillages: "Agricultural villages; canal irrigated farmland",
    irrigationType: "Canal irrigated",
    farmerProfiles: ["Small to large farmer profiles"],
    socialStructure: "Traditional Jat Sikh social structure",
    panchayatInfluence: "Visible Panchayat influence",
  },

  voterDemographics: {
    electorateType: "100% village electorate",
    dominantFamilies: ["Jat Sikh families dominate"],
    scVoters: "SC voters in specific villages",
    voterFamilySize: "Large voter families",
  },

  voterTurnout: {
    winningVotes: 83893,
    totalCandidates: 14,
    typicalRuralTurnout: "75-85%",
  },

  // ==========================================================================
  // KEY ISSUES
  // ==========================================================================
  criticalIssue: {
    rank: 1,
    title: "MLA's Criminal Status",
    description:
      "MLA Harmeet Singh Pathanmajra is proclaimed offender in rape case. Constituency effectively without its elected representative since September 2025. This is a massive governance failure and attack line. Voters feel betrayed — elected MLA is absconding.",
    affectedSegments: ["All constituents", "Rural voters", "Women voters"],
    severity: "critical",
  },

  agrarianDistress: {
    rank: 2,
    title: "Agrarian Distress",
    description: "Farmer suicides reported in the constituency",
    affectedSegments: ["Farmer households", "Jat Sikh community"],
    subIssues: [
      "MSP procurement issues",
      "Stubble burning ban without alternatives",
      "Groundwater depletion in Malwa",
      "Farm debt burden",
      "Canal water management disputes",
    ],
  },

  drugCrisis: {
    rank: 3,
    title: "Drug Crisis",
    description:
      "Rural youth addiction rates high. Malwa region is Punjab's most drug-affected region.",
    affectedSegments: ["Rural youth", "Families", "SC and Jat villages"],
    regionNotorious: true,
    deAddictionInfrastructure: "No de-addiction infrastructure in Sanour area",
  },

  governanceVacuum: {
    rank: 4,
    title: "Governance Vacuum",
    description:
      "MLA absent/absconding since September 2025. Development works stalled or delayed. No representation in assembly for this seat.",
    affectedSegments: ["All constituents", "Rural infrastructure dependent communities"],
    sinceDate: "September 2025",
    managingAuthority: "District administration handling constituency affairs",
    developmentStatus: "Stalled or delayed",
  },

  healthcareEducation: [
    {
      rank: 5,
      title: "Healthcare",
      description: "Rural health sub-centers inadequate. No major hospital nearby.",
      affectedSegments: ["Rural population", "Elderly", "Families"],
    },
    {
      rank: 6,
      title: "Education",
      description:
        "Schools of Eminence program limited rural reach. Government school infrastructure weak.",
      affectedSegments: ["Students", "Families"],
    },
    {
      rank: 7,
      title: "Rural Infrastructure",
      description: "Poor rural roads, drainage issues",
      affectedSegments: ["All rural residents"],
    },
  ],

  // ==========================================================================
  // POLITICAL DYNAMICS
  // ==========================================================================
  politicalDynamics: {
    aapPosition: {
      status: "critically_weakened",
      reputationDamage: [
        "MLA is proclaimed offender",
        "Party reputation severely damaged",
        "'Deshbakti' narrative severely undermined",
      ],
      newInCharge: "AAP appointed new in-charge for Sanour (September 2025)",
      narrativeUndermined: [
        "AAP appointed new in-charge indicating MLA's removal from active role",
        "Hypocrisy of 'Aam Aadmi' party with absconding MLA",
      ],
      hypocrisyPoints: [
        "MLA is proclaimed offender in rape case",
        "Constituency unrepresented",
        "AAP protects accused rapist",
      ],
    },
    congressPosition: {
      status: "opportunity",
      performance2022:
        "Congress did not field strong candidate; placed third",
      consolidationPotential:
        "Can consolidate: AAP defectors + Congress traditional voters + SAD anti-incumbent voters",
      allianceComplications:
        "Must avoid alliance complications with SAD; avoid splitting opposition votes",
    },
    sadPosition: {
      status: "strong_potential",
      previousMLA: "Harinder Pal Singh Chandumajra (SAD)",
      lossMargin2022: "Lost narrowly in 2022 with 49,122 margin",
      malwaHeartland: true,
      bjpAlliancePossible: true,
    },
    bjpPosition: {
      independentBase: "Limited independent base in rural Sanour",
      benefitsFromAlliance: "Benefits from SAD+BJP alliance",
    },
    keyVariables2027: {
      pathanmajraDisqualification:
        "Whether Pathanmajra remains disqualified/proclaimed offender",
      aapCandidateSelection: "Whether AAP expels him or continues to protect him",
      sadCandidateSelection: "SAD candidate selection",
      congressCandidateStrength: "Congress candidate strength",
      bjpAllianceDynamics: "BJP alliance dynamics",
    },
  },

  // ==========================================================================
  // DEVELOPMENT
  // ==========================================================================
  developmentDuringTenure: {
    activeRepresentationPeriod:
      "Less than 1 year of active representation (absconding since September 2025)",
    developmentWork: "No verifiable development work in constituency",
    managingAuthority: "District administration managed basic functions",
  },

  mlAPublicStatements: {
    videoClaim: "MLAs lack resources",
    blameTarget: "CM Mann government",
    videoDate: "September 2025",
  },

  infrastructureGaps: {
    ruralRoads: "Poor condition",
    irrigation: "Canal management inadequate",
    health: "No nearby hospital",
    education: "Government school infrastructure weak",
  },

  // ==========================================================================
  // INFLUENTIAL FIGURES
  // ==========================================================================
  currentMLA: {
    rank: 1,
    title: "Current MLA: CRITICAL CONCERN",
    description:
      "Harmeet Singh Pathanmajra (AAP) — proclaimed offender; on the run since September 2025",
    affectedSegments: ["All constituents"],
    severity: "critical",
    criminalStatus: "PROCLAIMED OFFENDER; ABSCONDING",
  },

  districtLeaders: {
    sadLeaders: ["Sukhbir Singh Badal", "Others"],
    congressLeaders: ["Congress leaders in Patiala"],
    patialaRoyalFamily: "Amarinder Singh influence",
  },

  keyInfluencers: {
    villageSarpanches: "Ground-level political mobilization",
    gurdwaraCommittees: "Religious authority",
    jatSikhElders: "Family vote mobilization",
    cooperativeSocietyHeads: "Credit and agricultural resources",
  },

  // ==========================================================================
  // WELFARE SCHEMES
  // ==========================================================================
  stateSchemes: {
    womenScheme: "₹1000/month for women: Implementation in rural areas [NEEDS VERIFICATION]",
    healthCards: "Ayushman Punjab [NEEDS VERIFICATION of rural coverage]",
    schoolsOfEminence: "Limited rural impact",
  },

  centralSchemes: {
    pmKisan: "PM Kisan Samman Nidhi: Farmers receiving",
    jalJeevanMission: "Jal Jeevan Mission: Rural tap water",
    pmAwasYojana: "PM Awas Yojana: Rural housing",
  },

  implementationGap: {
    mlAAbsenceSince: "September 2025",
    facilitationStatus:
      "No constituency-level facilitation; District administration overwhelmed",
  },

  // ==========================================================================
  // ELECTORAL RECOMMENDATIONS
  // ==========================================================================
  electoralRecommendations: {
    target: {
      constituency: "AC114-Sanour",
      voteShareTarget: "40%+",
    },
    primaryAttackLine:
      "MLA's Criminal Case and Governance Vacuum: Harmeet Singh Pathanmajra is a proclaimed offender. Constituency has been unrepresented for nearly 2 years. 'Deshbakti' (patriotism) of AAP is hollow with absconding MLA. 'Aam Aadmi' party protects accused rapist.",
    voteBankStrategy: {
      jatSikhWomen: "Outraged by MLA's criminal case",
      dalitVoters: "Party let them down by protecting accused",
      ruralYouth: "Drug crisis + no development",
      overallSentiment: "Anger at AAP's hypocrisy",
    },
    candidateProfile: {
      party: "Strong local SAD or Congress candidate",
      image: "Clean image; no criminal cases",
      criminalCases: "None",
      narrativeAbility: "Ability to project development narrative",
      castePreference: "Jat Sikh preferred to consolidate agrarian vote",
    },
    allianceConsiderations: {
      congressAvoids: "Must avoid splitting opposition votes with SAD",
      ifSADBJPForms:
        "Congress should consider supporting SAD candidate",
      bspRole: "For dalit vote",
    },
    winningPath: {
      scenarioA:
        "If AAP removes Pathanmajra and fields new candidate: Difficult for Congress",
      scenarioB:
        "If Pathanmajra remains AAP candidate: Massive Congress/SAD opportunity",
      bestPath:
        "Avoid triangular contest; unite opposition",
    },
  },

  // ==========================================================================
  // INTELLIGENCE ASSESSMENT
  // ==========================================================================
  intelligenceAssessment: {
    congressPosition: "MODERATE — Significant Opportunity",
    factorAssessments: [
      {
        factor: "2022 Result",
        assessment: "AAP won; 49,122 margin (wave victory)",
      },
      {
        factor: "INC 2022 Vote Share",
        assessment: "~12-15% (estimated; not competitive)",
      },
      {
        factor: "INC 2022 Position",
        assessment: "Third place behind AAP and SAD",
      },
      {
        factor: "Current MLA Status",
        assessment: "PROCLAIMED OFFENDER; ABSCONDING",
      },
      {
        factor: "Anti-Incumbency",
        assessment: "MAXIMUM against AAP (MLA's criminal record)",
      },
      {
        factor: "Caste Arithmetic",
        assessment: "Jat Sikh + SC + OBC",
      },
      {
        factor: "Win Probability (INC)",
        assessment: "MODERATE (if opposition vote consolidates)",
      },
    ],
    criticalAlert: {
      issue: "AAP MLA Vulnerability",
      details: [
        "MLA is proclaimed offender in rape case",
        "Escaped police custody March 2026",
        "Currently in Australia (as of Nov 2025 reports)",
        "Constituency unrepresented",
      ],
    },
    opportunityWindows: {
      mlACriminalCase: "Massive attack line",
      governanceVacuum: "AAP failed to represent constituents",
      aapNarrativeDestroyed: "AAP's 'Aam Aadmi' narrative destroyed",
      farmDistress: "Farm distress unresolved",
      drugCrisis: "Drug crisis persistent",
    },
    intelligenceGaps: {
      aapCandidateIn2027: "Whether AAP will expel or field Pathanmajra in 2027",
      congressCandidateOrBacking:
        "Whether Congress fields candidate or backs opposition alliance",
      courtProceedingsStatus: "Exact status of court proceedings",
      groundSentimentAfter2Years:
        "Ground-level sentiment after 2 years without representation",
    },
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentPosition: "Third place in three-way fight",
    historicalStrength: "Won in 2012",
    opportunity: "Can consolidate SAD+Congress anti-AAP votes",
    strengths: {
      items: [
        "Three-way fight benefits AAP — Congress must consolidate",
        "Won in 2012 — historical support",
        "Can attract SAD voters anti-incumbent",
      ],
    },
    weaknesses: {
      items: [
        "49,122 margin large",
        "No clear second-place position",
        "SAD has strong local presence",
      ],
    },
  },

  // ==========================================================================
  // ATTACK LINES
  // ==========================================================================
  attackLines: {
    items: [
      "49,122 votes — betrayal of Punjab",
      "Three-way fight only helped AAP — united opposition needed",
      "Drug addiction peaked — Pathanmajra inactive",
      "SAD and Congress both defeated — only AAP won",
      "Promises broken on MSP, jobs, women welfare",
    ],
  },

  recommendedCandidateProfile: {
    caste: "Jat Sikh (to consolidate Congress+SAD voters)",
    profile: "Strong personality, campaigner",
    attributes: ["Can attract SAD dissidents"],
    background: "Local leader, avoid dynastic candidate",
  },

  // ==========================================================================
  // NOTES
  // ==========================================================================
  notes: {
    threeWayCompetition: "Congress must avoid splitting votes",
    sadRunnerUp: "SAD was runner-up — can attract those voters",
    scPopulation:
      "SC population significant (~25%) — Mazhabi Sikh votes important",
    unityWithSAD:
      "Unity with SAD possible in anti-AAP front (assess seat-sharing)",
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "IndiaVotes", url: "https://www.indiavotes.com" },
      { name: "Oneindia", url: "https://www.oneindia.com" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki" },
      { name: "MyNeta", url: "https://www.myneta.info" },
      { name: "PRS India", url: "https://www.prsindia.org" },
      { name: "Indian Express", url: "https://www.indianexpress.com" },
      { name: "Hindustan Times", url: "https://www.hindustantimes.com" },
      { name: "News18", url: "https://www.news18.com" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "2012 election results verification",
        "Exact court proceedings status",
        "Ground-level sentiment after 2 years without representation",
        "Whether AAP will expel or field Pathanmajra in 2027",
        "Whether Congress fields candidate or backs opposition alliance",
        "₹1000/month women scheme implementation in rural areas",
        "Ayushman Punjab rural coverage",
      ],
      criticalNote:
        "PARTIALLY VERIFIED — 2022 data confirmed; CRITICAL: MLA is proclaimed offender in rape case",
    },
  },
};
