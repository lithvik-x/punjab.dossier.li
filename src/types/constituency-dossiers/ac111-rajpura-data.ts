/**
 * AC111-Rajpura Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC111-Rajpura.md, AC111-Rajpura-deep.md
 */

import type {
  AC111RajpuraTypes,
  MainDossierData,
  DeepResearchData,
  ConstituencyHeader,
  ConstituencyIdentity,
  GeographicProfile,
  ExecutiveSummary,
  ExecutiveSummaryDeep,
  ElectionResult2022,
  ElectionResult2017,
  ElectionResult2012,
  Candidate2022,
  CasteComposition,
  CasteCompositionDeep,
  ElectorateData,
  KeyLocalIssue,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  AttackLinesAgainstAAP,
  ResearchMetadata,
  Demographics,
  PatialaDistrictDemographics,
  PunjabStateDemographics,
  CasteCategoriesPunjab,
  RajpuraSpecificCharacteristics,
  IssuesGrievances,
  DrugMenace,
  FarmerDistress,
  Unemployment,
  GovernanceGaps,
  WaterAndEnvironment,
  PoliticalDynamics,
  INCVulnerability,
  BJPPresence,
  SADFactor,
  AAPFortunes2026,
  CongressRevivalPotential,
  DevelopmentProfile,
  DevelopmentProjects2022_2026,
  MLADevelopmentClaims,
  DevelopmentGaps as DevGaps,
  VoterTurnoutAnalysis,
  VoterTurnout2022PatialaDistrict,
  VoterDemographics,
  InfluentialFigures,
  CurrentMLA,
  DistrictLeader,
  KeyInfluencer,
  WelfareSchemes,
  StateGovernmentSchemes,
  CentralGovernmentSchemes,
  PunjabSocialSecurity,
  ElectionReform,
  ECIMeasures,
  PatialaECIActivities,
  ElectoralRecommendations,
  VoteBankStrategy,
  AllianceConsiderations,
  IntelligenceAssessment,
  FactorAssessment,
  KeyRiskFactor,
  OpportunityWindow,
  IntelligenceGap,
  SWOTAnalysis,
  SWOTStrengths,
  SWOTWeaknesses,
  SWOTOpportunities,
  SWOTThreats,
  DataQuality,
  StrategicData,
  CongressStrategicPositionDeep,
  AttackLinesDeep,
  ElectionHistory,
} from "./ac111-rajpura-types";

// ============================================================================
// MAIN DOSSIER DATA (from AC111-Rajpura.md)
// ============================================================================

const mainDossier: MainDossierData = {
  header: {
    acNumber: 111,
    name: "Rajpura",
    district: "Patiala",
    region: "Malwa",
    category: "General",
    dataCurrency: "As of 19 May 2026",
  },

  executiveSummary: {
    overview:
      "Rajpura is a general-category constituency in Patiala district, located near the border with Haryana. AAP won in 2022 with Neena Mittal defeating BJP's Jagdish Kumar Jagga by 22,493 votes.",
    electionResult2022:
      "AAP (Neena Mittal) won with 22,493 vote margin over BJP (Jagdish Kumar Jagga)",
    constituencyCharacter:
      "Semi-urban with significant agricultural hinterland along Ambala-Chandigarh highway",
    mlaSignificance:
      "Neena Mittal is AAP's State Treasurer, giving Rajpura organizational significance",
  },

  electionResults2022: {
    winner: "Neena Mittal",
    party: "Aam Aadmi Party",
    winnerVotes: 54834,
    runnerUp: "Jagdish Kumar Jagga",
    runnerUpParty: "BJP",
    runnerUpVotes: 32341,
    margin: 22493,
    marginPercentage: "~41% of votes polled",
    status: "verified",
  },

  electionResults2017: {
    winner: "BJP Candidate",
    winnerParty: "BJP",
    status: "needs_verification",
  },

  electionResults2012: {
    winner: "Congress",
    winnerParty: "INC",
    status: "needs_verification",
  },

  casteComposition: [
    { category: "Jat Sikh", estimatedPercentage: "26-30%" },
    { category: "OBC", estimatedPercentage: "18-22%" },
    { category: "SC", estimatedPercentage: "18-22%" },
    { category: "Hindu Upper Caste", estimatedPercentage: "20-24%" },
    { category: "Others", estimatedPercentage: "6-8%" },
  ],

  electorateData: {
    totalElectors: "~155,000-165,000",
    voterTurnout2022: "~76-79%",
  },

  keyLocalIssues: [
    {
      rank: 1,
      title: "Border Security",
      description:
        "Proximity to Haryana border creates security challenges including drug trafficking routes",
    },
    {
      rank: 2,
      title: "Drug Trafficking",
      description:
        "Rajpura is on drug trafficking route through Haryana; youth addiction to heroin/chitta reported",
    },
    {
      rank: 3,
      title: "Industrial Development",
      description:
        "Lack of jobs and industrial development in the constituency",
    },
    {
      rank: 4,
      title: "Agriculture",
      description:
        "Farmer distress due to MSP issues, stubble burning restrictions, groundwater depletion",
    },
    {
      rank: 5,
      title: "Urban Infrastructure",
      description:
        "Growing town needs attention - roads, drainage, municipal infrastructure inadequate",
    },
  ],

  congressStrategicPosition: {
    currentPosition: "Third place - lost votes to AAP",
    historicalStrength: "Won in 2012, lost to BJP in 2017",
    opportunity: "Three-way fight - Congress can consolidate anti-AAP votes",
    strengths: [
      "Three-way fight historically",
      "Congress has local presence",
      "Can consolidate BJP+Congress voters vs AAP",
    ],
    weaknesses: [
      "AAP won despite BJP being runner-up",
      "Congress needs to avoid splitting anti-AAP votes",
      "No clear dominant local leader",
    ],
  },

  recommendedCandidateProfile: {
    caste:
      "Hindu Upper Caste (matches runner-up profile) OR Jat Sikh",
    profile: "Urban professional or businessman",
    attributes: ["Clean image", "Development focus"],
    background:
      "New face may attract anti-incumbent votes",
  },

  attackLinesAgainstAAP: {
    lines: [
      "22,493 votes - choice between BJP and Congress?",
      "Drug routes through Rajpura - security failure",
      "No industrial development - jobs promise broken",
      "Urban infrastructure collapsed - roads, drainage",
      "AAP-BJP both failed - only Congress can deliver",
    ],
  },

  notes: [
    "Three-way fight benefits AAP - Congress must avoid this",
    "Proximity to Haryana gives strategic importance",
    "Hindu Upper Caste votes split between BJP and AAP - Congress could consolidate",
    "Candidate selection critical to avoid vote splitting",
  ],
};

// ============================================================================
// DEEP RESEARCH DATA (from AC111-Rajpura-deep.md)
// ============================================================================

const deepResearch: DeepResearchData = {
  metadata: {
    microTaskId: "AC111-Rajpura",
    topic: "AC111-Rajpura Deep Constituency Dossier",
    tier: 2,
    date: "20 May 2026",
    agent: "Orchestrator-R1",
    sourcesConsulted: [
      "IndiaVotes",
      "Oneindia",
      "Wikipedia",
      "MyNeta",
      "PRS India",
      "The Tribune",
    ],
    verificationStatus: "PARTIALLY VERIFIED — 2022 data confirmed; demographics at district level",
    dataCurrency: "As of 20 May 2026",
  },

  executiveSummary: {
    overview:
      "AC111 Rajpura is a General category Assembly constituency in Patiala district, Malwa region, Punjab. It elected Neena Mittal (AAP) in 2022 with a margin of 22,493 votes, making her the only woman MLA elected from Patiala district that cycle.",
    electionResult2022:
      "Neena Mittal (AAP) won with 54,834 votes; Jagdish Kumar Jagga (BJP) got 32,341 votes",
    margin: "22,493 votes (~41% of votes polled)",
    mlaProfile:
      "Neena Mittal is AAP's State Treasurer, giving Rajpura organizational significance within the party structure",
    threeWayFight:
      "Main opposition contestants in 2022 were BJP, Congress, and SAD - a three-way fight that Congress failed to capitalize on",
    strategicSignificance:
      "Semi-urban constituency with significant agricultural hinterland, situated along the Ambala-Chandigarh highway",
  },

  constituencyProfile: {
    basicDetails: {
      acNo: 111,
      type: "GEN (General)",
      district: "Patiala",
      region: "Malwa",
      partOf: "Patiala Lok Sabha seat",
      neighboringACs: [
        "Dera Bassi (112)",
        "Ghanaur (113)",
        "Sanour (114)",
        "Patiala Urban (115)",
      ],
    },
    electoralSummary2022: {
      winner: "Neena Mittal (AAP)",
      winnerVotes: 54834,
      runnerUp: "Jagdish Kumar Jagga (BJP)",
      runnerUpVotes: 32341,
      margin: 22493,
      marginPercentage: "~41% of votes polled [NEEDS VERIFICATION]",
    },
    candidateDetails2022: [
      { name: "Neena Mittal", party: "AAP", votes: 54834 },
      { name: "Jagdish Kumar Jagga", party: "BJP", votes: 32341 },
      { name: "[Congress candidate]", party: "INC", votes: 0 },
    ],
    mlaProfile: {
      name: "Neena Mittal",
      party: "AAP",
      role: "MLA, State Treasurer AAP Punjab",
      background:
        "Rajpura-based woman politician; contested LS 2019 from Patiala on AAP ticket; first elected to Vidhan Sabha in 2022",
      firstElected: "2022",
      socialMedia: "Active on Facebook with ~47.5K followers",
      notableAchievement: "Only woman winner from Patiala district in 2022",
    },
    electoralHistory: [
      {
        year: 2022,
        winner: "Neena Mittal",
        party: "AAP",
        status: "verified",
      },
      {
        year: 2017,
        winner: "[NEEDS VERIFICATION]",
        party: "[NEEDS VERIFICATION]",
        status: "needs_verification",
      },
      {
        year: 2012,
        winner: "[NEEDS VERIFICATION]",
        party: "[NEEDS VERIFICATION]",
        status: "needs_verification",
      },
    ],
  },

  demographics: {
    patialaDistrict: {
      totalScPopulation: "4,65,547",
      scPercentageOfDistrict: "24.55% of district population",
      region: "Malwa region",
    },
    punjabState: {
      sikh: "57.7%",
      hindu: "38.5%",
      muslim: "1.9%",
      christian: "1.3%",
    },
    casteCategories: {
      jatSikh:
        "~20-22% of state population; dominant agrarian caste in Malwa",
      scDalit: "~31.9% of state population (Ramdassia/Mazhabi Sikh)",
      obc: "~15-18% of state population",
      upperCastes: "~18-20% of state population (Khatri, Arora, Brahmin, Baniya)",
    },
    rajpuraSpecific: {
      description: "Semi-urban: town base + rural agricultural hinterland",
      tradingCommunity:
        "Trading community presence along National Highway",
      scPopulation: "SC population significant in rural pockets",
      jattSikhFarmers: "Jatt Sikh farmers form dominant rural vote bank",
    },
  },

  casteCompositionDeep: {
    jatSikh: "26-30%",
    obc: "18-22%",
    sc: "18-22%",
    hinduUpperCaste: "20-24%",
    others: "6-8%",
  },

  issuesAndGrievances: {
    drugMenace: {
      description:
        "Punjab-wide crisis; Rajpura's border proximity to Haryana makes it susceptible to drug trafficking routes",
      borderProximity:
        "Susceptible to drug trafficking routes through Haryana border",
      primaryGrievance:
        "Youth addiction to heroin/chitta reported as primary grievance",
      driver: "Unemployment cited as driver of drug consumption",
    },
    farmerDistress: {
      description: "Region is agrarian with significant agricultural hinterland",
      mspIssues: "MSP procurement issues",
      stubbleBurning:
        "Stubble burning restrictions without viable alternatives",
      groundwaterDepletion: "Groundwater depletion in Malwa region",
      debtBurden: "Debt burden on small/marginal farmers",
    },
    unemployment: {
      description:
        "Youth emigration (Dunki route to Canada/UK) prominent",
      dunkiRoute: "Dunki route to Canada/UK prominent",
      lackOfIndustrialDevelopment:
        "Lack of industrial development in Patiala district",
      skillMismatch:
        "Skill mismatch and absence of manufacturing near Rajpura",
    },
    governanceGaps: {
      municipalInfrastructure:
        "Municipal infrastructure in Rajpura town reported inadequate",
      roadMaintenance:
        "Road maintenance along NH (Ambala-Chandigarh corridor)",
      healthcareFacilities:
        "Healthcare facilities insufficient for semi-urban population",
    },
    waterAndEnvironment: {
      groundwaterDepletion: "Groundwater depletion in Malwa region (Aquifer decline)",
      drinkingWaterQuality: "Drinking water quality issues reported",
      canalIrrigationDependency: "Canal irrigation dependency",
    },
  },

  politicalDynamics: {
    incVulnerability: {
      description:
        "Congress did not perform strongly in Rajpura in 2022",
      antiIncumbencyFactor:
        "Anti-incumbency against previous government (2017-2022 Congress-SAD-SAD+BJP era) was a factor",
      aapSweptMalwa:
        "AAP swept Malwa in 2022; consolidation was broad-based",
    },
    bjpPresence: {
      bjpVotes2022: 32341,
      partyPosition: "Runner-up in 2022",
      rssNetworkActive: "RSS network active in rural Patiala",
      upperCasteHinduVotes:
        "Upper caste Hindu votes may have consolidated behind BJP",
    },
    sadFactor: {
      contested2022: "SAD contested but result data incomplete for 2022",
      alliance2017:
        "In 2017, SAD+BJP alliance held many Patiala district seats",
      malwaBaseBreached:
        "SAD's traditional Malwa base was breached by AAP wave",
    },
    aapFortunes2026: {
      stateWidePower:
        "State-wide AAP government (Mann Sarkar) in power since March 2022",
      performanceAudit:
        "Performance audit: drug crisis unresolved, farm distress ongoing — potential anti-incumbency",
      mlaSignificance:
        "Rajpura MLA Neena Mittal is party State Treasurer — central AAP figure",
      competitiveIfAntiIncumbency:
        "If anti-incumbency builds, Rajpura becomes competitive again",
    },
    congressRevivalPotential: {
      rebuildFrom18Seats: "Congress needs to rebuild from 18 seats (2022)",
      amarinderSinghInfluence:
        "Patiala district has Congress legacy; Amarinder Singh's influence historically strong",
      dalitVoteConsolidation:
        "Potential to combine old Amarinder loyalists + dalit vote consolidation",
    },
  },

  developmentProfile: {
    patialaDistrictDevelopment: {
      announcement:
        "CM Mann government announced ₹177 crore worth development projects for Patiala",
      urbanProjects:
        "Urban infrastructure projects through PUDA (Patiala Urban Planning and Development Authority)",
      healthSector: "Health sector investments in government hospitals",
      education: "Education: Schools of Eminence program",
    },
    mlaDevelopmentClaims: {
      facebookActivity:
        "MLA Neena Mittal's Facebook page active; claims work on roads, water, infrastructure",
      claims: "Claims work on roads, water, infrastructure",
      organizationalAccess:
        "As State Treasurer, has organizational access to state schemes",
    },
    gaps: {
      industrialDevelopment:
        "Industrial development in Rajpura area minimal",
      employmentGeneration:
        "No major MNREGA-type large employment generation",
      healthcareInfrastructure:
        "Healthcare infrastructure still inadequate for semi-urban population",
    },
  },

  voterTurnoutAnalysis: {
    patialaDistrict2022: {
      totalElectors: "18,08,258 (all ACs in Patiala district)",
      votesPolled: "13,12,322",
      turnoutPercentage: "~72.6%",
    },
    rajpuraSpecific:
      "Specific Rajpura turnout data [NEEDS VERIFICATION from ECI]",
    semiUrbanTypical: "Semi-urban seats typically see 70-80% turnout",
    voterDemographics: {
      urbanVoters: "Rajpura town",
      ruralVoters: "Agricultural villages in hinterland",
      youthVoters: "Significant proportion (18-35 demographic bulge)",
    },
  },

  influentialFigures: {
    currentMLA: {
      name: "Neena Mittal",
      party: "AAP",
      role: "MLA, State Treasurer AAP Punjab",
      background:
        "Rajpura-based woman politician; contested LS 2019 from Patiala on AAP ticket",
      firstElected: "2022",
      socialMedia: "Active on Facebook with ~47.5K followers",
      notableAchievement: "Only woman MLA from Patiala district in 2022",
    },
    districtLeaders: [
      {
        name: "Sunil Jakhar",
        party: "BJP",
        role: "BJP Punjab President",
        region: "Adjacent region",
      },
      {
        name: "Amarinder Singh (ex-CM)",
        party: "Congress",
        role: "Patiala royal family",
        region: "Patiala",
      },
      {
        name: "Manpreet Singh Buzza",
        party: "Congress",
        role: "Present in Patiala",
        region: "Patiala",
      },
    ],
    keyInfluencers: [
      {
        name: "RSS network",
        type: "Organization",
        politicalAffiliation: "Supports BJP",
        description: "Active in rural Patiala",
      },
      {
        name: "Dalit organizations",
        type: "Community",
        politicalAffiliation: "Mazhabi Sikh communities",
        description: "Have political mobilization capacity",
      },
      {
        name: "Jatt Sikh sarpanches",
        type: "Community Leaders",
        politicalAffiliation: "Various",
        description: "Ground-level political mobilization in villages",
      },
    ],
  },

  welfareSchemes: {
    stateGovernment: {
      womenFinancialAssistance:
        "₹1000/month for women (Mukhwaspurti/financial assistance scheme) — nearly 97% of adult women targeted",
      healthCards: "Health Cards (₹10 lakh coverage) under Ayushman Bharat - Punjab",
      schoolsOfEminence: "Schools of Eminence (education quality improvement)",
      irrigationFacilities: "Irrigation facilities push",
    },
    centralGovernment: {
      pmKisanSammanNidhi: "Direct income support for farmers",
      jalJeevanMission: "Tap water for rural households",
      pmAwasYojana: "Housing for rural poor",
    },
    punjabSocialSecurity: {
      socialSecurityPensions: "Social Security pensions for SC/OBC/widows",
      ashirwadScheme: "Ashirwad Scheme (marriage assistance for girls)",
      scholarships: "Pre-Matric/Post-Matric scholarships for SC students",
    },
    beneficiaryOutreach:
      "MLA Neena Mittal's social media claims to have facilitated scheme access; District administration runs awareness camps [NEEDS VERIFICATION]",
  },

  electionReform: {
    eciMeasures: {
      voterSlipDistribution: "Voter slip distribution",
      evmsWithVVPAT: "Electronic Voting Machines (EVMs) with VVPAT",
      sveep: "Systematic Voters' Education and Electoral Participation (SVEEP)",
    },
    patialaDistrictActivities: {
      awarenessPrograms: "Awareness programs in rural areas",
      nationalVotersDay: "National voters' day celebrations",
      mockPolls: "Mock polls in colleges",
    },
  },

  electoralRecommendations: {
    target: "Flip AC111-Rajpura",
    winningVoteShareTarget: "38-42%",
    voteBankStrategy: {
      jattSikhFarmers:
        "Address stubble/groundwater/MSP grievances; AAP's farm record is weak",
      dalitVoters:
        "AAP has not delivered on reservations/employment promises",
      urbanTradingCommunity:
        "Business owners affected by poor infrastructure",
      womenVoters: "₹1000/month scheme implementation issues",
    },
    candidateProfileRecommended:
      "Strong local connect in Rajpura town + rural hinterland; Caste balancing: If Jat Sikh candidate, pair with SC running mate analysis",
    candidateAttributes: [
      "Clean image; no criminal cases",
      "Youth candidate preferred (under 50)",
    ],
    oppositionToAAPStrategy: [
      "Highlight unfulfilled promises (drug crisis, jobs, health)",
      "Neena Mittal's record as State Treasurer: accountability for state failures",
      "Anti-incumbency against Mann Sarkar",
    ],
    allianceConsiderations: {
      sadBjpTieUp:
        "SAD+BJP tie-up likely in 2027 (historically worked in Patiala Malwa)",
      bspTieUp: "BSP tie-up possible for SC vote consolidation",
      triangularContestDynamics:
        "Congress must consider triangular contest dynamics",
    },
  },

  intelligenceAssessment: {
    overallPosition: "WEAK — Needs Strong Rebound",
    factors: [
      {
        factor: "2022 Result",
        assessment: "AAP won; 22,493 margin",
      },
      {
        factor: "INC 2022 Vote Share",
        assessment: "~18% (estimated)",
      },
      {
        factor: "Incumbent Stronghold",
        assessment: "AAP (Neena Mittal, State Treasurer)",
      },
      {
        factor: "Anti-Incumbency",
        assessment: "Moderate (AAP's performance mixed)",
      },
      {
        factor: "Caste Arithmetic",
        assessment: "Jat Sikh + SC + OBC = winning combo",
      },
      {
        factor: "Win Probability (INC)",
        assessment:
          "LOW (if AAP repeats); MODERATE if anti-incumbency peaks",
      },
    ],
    keyRiskFactors: [
      {
        description:
          "AAP may consolidate despite governance failures",
      },
      {
        description: "SAD+BJP alliance could split opposition votes",
      },
      {
        description:
          "Dalit vote may remain with AAP due to welfare schemes",
      },
    ],
    opportunityWindows: [
      {
        description:
          "Drug crisis: No visible improvement; major attack line",
      },
      {
        description:
          "Farmer distress: AAP government perceived as inactive on MSP/stubble",
      },
      {
        description:
          "Youth unemployment: Emigration crisis resonates in rural areas",
      },
      {
        description:
          "Criminal cases against AAP MLAs (Pathanmajra, Bazigar): National media noise",
      },
    ],
    intelligenceGaps: [
      {
        item: "Exact 2017 result (Congress or SAD)",
      },
      {
        item: "Precise voter turnout AC111",
      },
      {
        item: "Candidate preferences for 2027 from each party",
      },
      {
        item: "Ground-level anti-incumbency intensity against Neena Mittal specifically",
      },
    ],
  },

  swotAnalysis: {
    strengths: {
      items: [
        "Three-way fight historically",
        "Congress has local presence",
        "Can consolidate BJP+Congress voters vs AAP",
        "Patiala district has Congress legacy",
        "Amarinder Singh's influence historically strong in region",
      ],
    },
    weaknesses: {
      items: [
        "AAP won despite BJP being runner-up",
        "Congress needs to avoid splitting anti-AAP votes",
        "No clear dominant local leader",
        "Congress did not perform strongly in Rajpura in 2022",
        "Needs to rebuild from only 18 seats statewide (2022)",
      ],
    },
    opportunities: {
      items: [
        "Drug crisis: No visible improvement",
        "Farmer distress: AAP perceived as inactive on MSP/stubble",
        "Youth unemployment: Dunki emigration crisis resonates",
        "Three-way fight can be avoided with proper candidate",
        "SAD+BJP alliance might split opposition votes",
      ],
    },
    threats: {
      items: [
        "AAP may consolidate despite governance failures",
        "Neena Mittal is State Treasurer - central AAP figure",
        "SAD+BJP tie-up likely in 2027",
        "Dalit vote may remain with AAP due to welfare schemes",
        "Hindu Upper Caste votes split between BJP and AAP",
      ],
    },
  },

  dataQuality: {
    verificationStatus:
      "PARTIALLY VERIFIED — 2022 data confirmed; demographics at district level",
    needsVerification: [
      "Exact 2017 result (Congress or SAD)",
      "Precise voter turnout AC111",
      "Congress candidate votes 2022",
      "Margin percentage calculation",
      "Candidate preferences for 2027 from each party",
      "Ground-level anti-incumbency intensity against Neena Mittal",
    ],
    sources: [
      "IndiaVotes.com",
      "Oneindia",
      "Wikipedia",
      "MyNeta",
      "PRS India",
      "The Tribune",
      "Patiala NIC",
    ],
  },
};

// ============================================================================
// COMPLETE DOSSIER
// ============================================================================

export const ac111RajpuraData: AC111RajpuraTypes = {
  mainDossier,
  deepResearch,
  completeDossier: {
    header: mainDossier.header,
    identity: {
      acNumber: 111,
      name: "Rajpura",
      district: "Patiala",
      region: "Malwa",
      type: "GEN",
      parliamentarySeat: "Patiala Lok Sabha seat",
      neighboringACs: [
        "Dera Bassi (112)",
        "Ghanaur (113)",
        "Sanour (114)",
        "Patiala Urban (115)",
      ],
      date: "20 May 2026",
    },
    geographicProfile: {
      location: "Patiala district, Malwa region, Punjab",
      highwayCorridor: "Along Ambala-Chandigarh highway",
      areaCharacter: "Semi-urban with significant agricultural hinterland",
      borderProximity: "Near border with Haryana",
    },
    executiveSummary: mainDossier.executiveSummary,
    executiveSummaryDeep: deepResearch.executiveSummary,
    electionResults2022: mainDossier.electionResults2022,
    electionResults2017: mainDossier.electionResults2017,
    electionResults2012: mainDossier.electionResults2012,
    candidateDetails2022: deepResearch.constituencyProfile.candidateDetails2022,
    casteComposition: mainDossier.casteComposition,
    casteCompositionDeep: deepResearch.casteCompositionDeep,
    electorateData: mainDossier.electorateData,
    demographics: deepResearch.demographics,
    keyLocalIssues: mainDossier.keyLocalIssues,
    issuesAndGrievances: deepResearch.issuesAndGrievances,
    politicalDynamics: deepResearch.politicalDynamics,
    developmentProfile: deepResearch.developmentProfile,
    voterTurnoutAnalysis: deepResearch.voterTurnoutAnalysis,
    influentialFigures: deepResearch.influentialFigures,
    welfareSchemes: deepResearch.welfareSchemes,
    electionReform: deepResearch.electionReform,
    congressStrategicPosition: mainDossier.congressStrategicPosition,
    congressStrategicPositionDeep: {
      target: "Flip AC111-Rajpura",
      winningVoteShareTarget: "38-42%",
      voteBankStrategy: [
        "Jatt Sikh farmers: Address stubble/groundwater/MSP grievances",
        "Dalit voters: AAP has not delivered on reservations/employment",
        "Urban trading community: Business owners affected by infrastructure",
        "Women voters: ₹1000/month scheme implementation issues",
      ],
      candidateProfileRecommended:
        "Strong local connect in Rajpura town + rural hinterland",
      candidateProfileAttributes: [
        "Clean image; no criminal cases",
        "Youth candidate preferred (under 50)",
      ],
      oppositionToAAP: [
        "Highlight unfulfilled promises (drug crisis, jobs, health)",
        "Neena Mittal's record as State Treasurer: accountability for state failures",
        "Anti-incumbency against Mann Sarkar",
      ],
      allianceConsiderations: [
        "SAD+BJP tie-up likely in 2027",
        "BSP tie-up possible for SC vote consolidation",
        "Congress must consider triangular contest dynamics",
      ],
    },
    recommendedCandidateProfile: mainDossier.recommendedCandidateProfile,
    attackLinesAgainstAAP: mainDossier.attackLinesAgainstAAP,
    electoralRecommendations: deepResearch.electoralRecommendations,
    intelligenceAssessment: deepResearch.intelligenceAssessment,
    swotAnalysis: deepResearch.swotAnalysis,
    strategicData: {
      congressStrategicPosition: mainDossier.congressStrategicPosition,
      recommendedCandidateProfile: mainDossier.recommendedCandidateProfile,
      attackLinesAgainstAAP: mainDossier.attackLinesAgainstAAP,
      notes: mainDossier.notes,
    },
    dataQuality: deepResearch.dataQuality,
    notes: mainDossier.notes,
  },
};

// Named exports for convenience
export {
  mainDossier,
  deepResearch,
};
