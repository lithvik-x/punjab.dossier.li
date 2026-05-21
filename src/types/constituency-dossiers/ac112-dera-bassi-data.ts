/**
 * AC112 - Dera Bassi Assembly Constituency Data
 * Generated from: AC112-Dera-Bassi.md and AC112-DeraBassi-deep.md
 * Date: 21 May 2026
 *
 * 100% Content Coverage - All sections, tables, bullet points, data points
 */

import type {
  AC112DeraBassiMainDossier,
  AC112DeraBassiDeepResearch,
  AC112DeraBassiDossier,
  ConstituencyHeader,
  ElectionResult,
  CasteCompositionBreakdown,
  LocalIssue,
  StrategicData,
  ResearchMetadata,
  Demographics,
  KeyIssues,
  PoliticalDynamics,
  DevelopmentProfile,
  VoterTurnoutAnalysis,
  InfluentialFigures,
  WelfareSchemes,
  ElectoralRecommendations,
  IntelligenceAssessment,
  MLAProfile,
  GeographicProfile,
  LokSabhaSeat,
  KeyStatistics2022,
  DistrictDemographics,
  DeraBassiCharacteristics,
  LocalIssues,
  AAPPosition,
  CongressPosition,
  BJPPosition,
  SADPosition,
  KeyVariables2027,
  DistrictDevelopment,
  MLADevelopmentWork,
  InfrastructureGaps,
  VoterDemographics,
  CurrentMLA,
  DistrictLeaders,
  KeyInfluencer,
  StateSchemes,
  CentralSchemes,
  TransportSectorBenefits,
  VoteBankStrategy,
  OppositionToAAP,
  AllianceConsiderations,
  RecommendedCandidateProfile,
  CongressPositionAssessment,
  KeyRiskFactor,
  OpportunityWindow,
  IntelligenceGap,
  CongressStrategicPosition,
  CongressStrengths,
  CongressWeaknesses,
  RecommendedCaste,
  RecommendedProfile,
  AttackLine,
  ElectoralHistory,
} from './ac112-dera-bassi-types';

// =============================================================================
// MAIN DOSSIER (From AC112-Dera-Bassi.md)
// =============================================================================

export const ac112DeraBassiMainDossier: AC112DeraBassiMainDossier = {
  // ==========================================================================
  // METADATA / HEADER
  // ==========================================================================
  header: {
    acNumber: 112,
    name: 'Dera Bassi',
    district: 'Sahibzada Ajit Singh Nagar (SAS Nagar)',
    region: 'Malwa',
    type: 'General',
    dataCurrency: 'As of 19 May 2026',
  },

  // ==========================================================================
  // EXECUTIVE SUMMARY
  // ==========================================================================
  executiveSummary:
    'Dera Bassi is a general-category constituency in SAS Nagar district (Mohali), part of the Tricity area with Chandigarh. This is a peri-urban constituency with significant migrant population and working-class voters. AAP won in 2022 with Kuljit Singh Randhawa by 21,721 votes. The constituency\'s proximity to Chandigarh and industrial nature makes it a different political dynamic than rural Malwa.',

  // ==========================================================================
  // ELECTION RESULTS
  // ==========================================================================
  electionResults: {
    2022: {
      year: 2022,
      winner: 'Kuljit Singh Randhawa',
      party: 'AAP',
      runnerUp: 'Congress Candidate',
      runnerUpParty: 'INC',
      margin: 21721,
      winnerVoteCount: 70032,
      totalElectors: null,
      voterTurnout: null,
      verificationStatus: 'Verified',
    },
    2017: {
      year: 2017,
      winner: 'SAD-BJP',
      party: 'SAD-BJP',
      runnerUp: null,
      runnerUpParty: null,
      margin: null,
      winnerVoteCount: null,
      totalElectors: null,
      voterTurnout: null,
      verificationStatus: 'Needs Verification',
    },
    2012: {
      year: 2012,
      winner: 'Congress',
      party: 'INC',
      runnerUp: null,
      runnerUpParty: null,
      margin: null,
      winnerVoteCount: null,
      totalElectors: null,
      voterTurnout: null,
      verificationStatus: 'Needs Verification',
    },
  },

  // ==========================================================================
  // CASTE COMPOSITION
  // ==========================================================================
  casteComposition: [
    { category: 'OBC', percentageRange: '24-28%', notes: 'Dominant community' },
    { category: 'SC', percentageRange: '22-26%' },
    { category: 'Hindu Upper Caste', percentageRange: '22-26%' },
    { category: 'Jat Sikh', percentageRange: '14-18%' },
    { category: 'Migrant/Other', percentageRange: '8-12%' },
  ],

  // ==========================================================================
  // ELECTORATE DATA
  // ==========================================================================
  electorateData: {
    totalElectors: '~165,000-175,000',
    voterTurnout2022: '~74-77%',
  },

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: [
    {
      rank: 1,
      title: 'Urbanization',
      description: 'Rapid growth without infrastructure',
      category: 'Urbanization',
    },
    {
      rank: 2,
      title: 'Migrant workers',
      description: 'Large migrant population',
      category: 'Social',
    },
    {
      rank: 3,
      title: 'Drug addiction',
      description: 'Industrial area vulnerability',
      category: 'Law & Order',
    },
    {
      rank: 4,
      title: 'Jobs',
      description: 'Industrial but insufficient employment',
      category: 'Economic',
    },
    {
      rank: 5,
      title: 'Traffic/roads',
      description: 'Connectivity to Chandigarh',
      category: 'Infrastructure',
    },
  ],

  // ==========================================================================
  // STRATEGIC DATA
  // ==========================================================================
  strategicData: {
    congressStrategicPosition: {
      currentPosition: 'Lost in 2022',
      historicalStrength: 'Won in 2012 before SAD-BJP wave',
      opportunity: 'Peri-urban voters disappointed with AAP',
    },
    strengths: {
      strengths: [
        'Congress won here before SAD-BJP',
        'Peri-urban voters anti-incumbent',
        'OBC + SC coalition possible',
      ],
    },
    weaknesses: {
      weaknesses: [
        'AAP has urban organization',
        'Migrant voters less politically aware',
        'Industrial workers not traditional Congress',
      ],
    },
    recommendedCaste: {
      caste: 'OBC',
      reason: 'Dominant community',
    },
    recommendedProfile: {
      profile: 'Industrial worker advocate, youth leader',
      attributes: ['Development focus', 'Accessible'],
      background: 'Worker leader or social activist',
    },
    attackLines: [
      { line: '21,721 votes - peri-urban ignored' },
      { line: 'Migrant workers exploited - no protection' },
      { line: 'Infrastructure collapsed - roads, drainage' },
      { line: 'Industrial jobs promised, not delivered' },
      { line: 'AAP government pro-Chandigarh, anti-Punjab' },
    ],
    notes: [
      'Peri-urban nature makes it different from rural Malwa',
      'Large migrant population may not vote traditionally',
      'Industrial area has unique issues (labour, pollution)',
      'OBC dominance suggests candidate selection from that community',
    ],
  },
};

// =============================================================================
// DEEP RESEARCH (From AC112-DeraBassi-deep.md)
// =============================================================================

export const ac112DeraBassiDeepResearch: AC112DeraBassiDeepResearch = {
  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    microTaskId: 'AC112-DeraBassi',
    topic: 'AC112-Dera Bassi Deep Constituency Dossier',
    tier: 2,
    date: '20 May 2026',
    agent: 'Orchestrator-R1',
    sourcesConsulted: [
      'IndiaVotes',
      'Oneindia',
      'MyNeta',
      'PRS India',
      'Chanakyya',
      'ProNeta',
      'SAS Nagar NIC',
    ],
    verificationStatus: 'PARTIALLY VERIFIED — 2022 data confirmed; demographics at district level',
    dataCurrency: 'As of 20 May 2026',
  },

  // ==========================================================================
  // CONSTITUENCY PROFILE
  // ==========================================================================
  constituencyProfile: {
    basicDetails: {
      acNo: 112,
      type: 'GEN (General)',
      district: 'Sahibzada Ajit Singh Nagar (SAS Nagar/Mohali)',
      region: 'Malwa',
      lokSabhaSeat: 'Patiala Lok Sabha seat',
      neighboringACs: ['Rajpura (111)', 'Ghanaur (113)', 'Sanour (114)'],
      notable: 'Part of Chandigarh tri-city area; high urban/suburban growth',
    },
    electoralSummary2022: {
      winner: 'Kuljit Singh Randhawa',
      winnerParty: 'AAP',
      winnerVotes: 70032,
      runnerUp: 'Deepinder Singh Dhillon',
      runnerUpParty: 'INC',
      runnerUpVotes: 48311,
      margin: 21721,
      marginPercentage: '~31% of votes polled [NEEDS VERIFICATION]',
      verificationStatus: 'Verified',
    },
    electoralHistory: {
      2022: {
        year: 2022,
        winner: 'Kuljit Singh Randhawa',
        party: 'AAP',
        runnerUp: 'Deepinder Singh Dhillon',
        runnerUpParty: 'INC',
        margin: 21721,
        winnerVoteCount: 70032,
        verificationStatus: 'Verified',
      },
      2017: {
        year: 2017,
        winner: '',
        party: '',
        margin: null,
        winnerVoteCount: null,
        verificationStatus: 'Needs Verification',
      },
      2012: {
        year: 2012,
        winner: '',
        party: '',
        margin: null,
        winnerVoteCount: null,
        verificationStatus: 'Needs Verification',
      },
    },
    mlaprofile: {
      name: 'Kuljit Singh Randhawa',
      party: 'AAP',
      role: 'MLA; President, Punjab State Panchayat Parishad; President, Punjab Transport Wing (AAP)',
      background: 'Senior AAP leader; contested as 60-year-old candidate in 2022',
      firstTerm: 2022,
      socialMedia: {
        facebook: '~52K likes',
        instagram: '12K followers',
        twitter: 'X/Twitter',
      },
      organizationalSignificance:
        'Transport Wing President gives him labor/transport network connections',
      keySupporter: 'Publicly praised CM Mann government on irrigation, health card schemes',
    },
    scVoterComposition:
      'Chanakyya assembly seat data indicates Dera Bassi has approximately significant SC population. SC voters are a decisive factor in this peri-urban constituency.',
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    districtDemographics: {
      totalPopulation: 986147,
      literacyRate: 'High (~85%+); above state average',
      urbanPopulation: 'Major portion (Mohali, Kharar, Zirakpur urban sprawl)',
      ruralDescription: 'Agricultural villages being rapidly urbanized',
    },
    casteComposition: [
      {
        category: 'General Category (Upper castes)',
        percentageRange: 'Significant',
        notes: 'Due to urban professional class',
      },
      {
        category: 'OBC',
        percentageRange: 'Moderate',
        notes: 'Trading/service community',
      },
      {
        category: 'SC',
        percentageRange: 'Substantial',
        notes: 'In rural villages and migrant labor colonies',
      },
      {
        category: 'No single dominant agrarian caste',
        percentageRange: 'N/A',
        notes: 'Unlike Malwa Jat-heavy seats',
      },
    ],
    scVoterComposition:
      'Chanakyya assembly seat data indicates Dera Bassi has approximately significant SC population',
    noSingleDominantCaste:
      'Unlike Malwa Jat-heavy seats, there is no single dominant agrarian caste in Dera Bassi',
    deraBassiCharacteristics: {
      urbanization: 'Rapidly urbanizing: Zirakpur-Dera Bassi-Kharar axis',
      migrantPopulation: 'High migrant population from HP, J&K, and other Punjab areas',
      realEstateBoom: 'Explosive real estate development (Zirakpur, VIP Road area); Builders, contractors, property dealers politically significant',
      industrialAreas: 'Factories, SMEs near Chandigarh-Baddi corridor',
      transportSector: 'Trucks, logistics, freight',
    },
  },

  // ==========================================================================
  // KEY ISSUES
  // ==========================================================================
  keyIssues: {
    localIssues: {
      urbanizationPressures: [
        'Unplanned growth in Zirakpur/Dera Bassi; lack of municipal infrastructure',
        'Water supply crisis in new colonies',
        'Sewage and drainage problems in peri-urban areas',
        'Traffic congestion on Chandigarh-Baddi highway',
        'Building rule violations and illegal constructions',
      ],
      drugMenace: [
        'Mohali/SAS Nagar district has reported high drug seizures',
        'Youth addiction in peri-urban areas',
        'Easy availability due to proximity to inter-state borders',
        'Transport corridor used for trafficking',
      ],
      unemployment: [
        'Youth unemployment in tri-city area',
        'Migrant workers facing job insecurity',
        'Gig economy workers in delivery/services sector',
        'Real estate slump affecting construction employment',
      ],
      governanceFailures: [
        "Punjab's debt crisis impacting infrastructure spending",
        'Local government (MC Zirakpur, Dera Bassi) with limited resources',
        'GMADA (Greater Mohali Area Development Authority) development slow',
      ],
      farmerLandIssues: [
        'Agricultural land acquisition for urban expansion',
        'Compensation disputes',
        'Stubborn farmers in villages being converted',
        'Canal water theft/management issues',
      ],
    },
    issuesList: [
      {
        rank: 1,
        title: 'Urbanization Pressures',
        description: 'Unplanned growth, water crisis, sewage problems, traffic congestion, illegal constructions',
        category: 'Urbanization',
      },
      {
        rank: 2,
        title: 'Drug Menace',
        description: 'High drug seizures, youth addiction, easy availability due to inter-state border proximity',
        category: 'Law & Order',
      },
      {
        rank: 3,
        title: 'Unemployment',
        description: 'Youth unemployment, migrant worker insecurity, gig economy issues, real estate slump',
        category: 'Economic',
      },
      {
        rank: 4,
        title: 'Governance Failures',
        description: "Punjab's debt crisis, limited local government resources, slow GMADA development",
        category: 'Governance',
      },
      {
        rank: 5,
        title: 'Farmer/Land Issues',
        description: 'Land acquisition disputes, compensation issues, canal water theft',
        category: 'Social',
      },
    ],
  },

  // ==========================================================================
  // POLITICAL DYNAMICS
  // ==========================================================================
  politicalDynamics: {
    aapPosition: {
      incumbentStrengths: [
        'Kuljit Singh Randhawa won comfortably in 2022',
        'As Transport Wing President, has pan-Punjab organizational reach',
        'Government MLA; benefits from state schemes and development funds',
      ],
      organizationalReach: 'Pan-Punjab through Transport Wing presidency',
      risks: [
        "MLA's involvement in Transport Wing may face industry-specific criticism",
        'Government MLA subject to governance accountability',
      ],
    },
    congressPosition: {
      runnerUp2022: 'Deepinder Singh Dhillon was runner-up in 2022',
      urbanProfessionalVoterBase: 'Congress has urban professional voter base in Mohali',
      futureOpportunity: 'Incumbent state government fatigue may help Congress in future',
    },
    bjpPosition: {
      organizationalPresence: 'BJP has strong organizational presence in SAS Nagar (Chandigarh hinterland)',
      voterDemographic: 'RSS active; upper caste urban voters lean BJP',
      alliancePotential: 'Potential for BJP candidate if alliance dynamics require',
    },
    sadPosition: {
      traditionalBase: "SAD's traditional rural Malwa base",
      alliancePartner: 'Possible alliance partner with BJP in 2027',
    },
    keyVariables2027: {
      variables: [
        'Urban/peri-urban voter anger over infrastructure failures',
        'AAP government record on law and order (drugs)',
        'Real estate sector grievances against government policies',
        'Transport sector disruptions',
      ],
    },
  },

  // ==========================================================================
  // DEVELOPMENT PROFILE
  // ==========================================================================
  developmentProfile: {
    districtDevelopment: {
      gmadaInitiatives: ['GMADA pushing infrastructure in Mohali'],
      sectorPromotion: 'IT/BT sector promotion in Mohali',
      metroProposals: 'Metro rail proposals for Chandigarh-Mohali-Zirakpur corridor',
      healthcareInvestments: 'Healthcare investments near Chandigarh',
    },
    mladevelopmentWork: {
      irrigationWaterAccess: 'Canal water supply projects claimed',
      canalWaterSupplyProjects: 'Canal water supply projects claimed',
      roadInfrastructure: 'Road infrastructure claims',
    },
    infrastructureGaps: {
      municipalInfrastructure: 'Zirakpur municipal infrastructure critically inadequate',
      sewageTreatment: 'Sewage treatment plants insufficient',
      drinkingWaterSupply: 'Drinking water supply from Bhakra Nangal stressed',
      powerSupply: 'Power supply fluctuations in summer',
    },
  },

  // ==========================================================================
  // VOTER TURNOUT ANALYSIS
  // ==========================================================================
  voterTurnoutAnalysis: {
    turnout2022: 'Specific turnout data [NEEDS VERIFICATION from ECI data]',
    typicalTurnout: 'General category urban seats typically see 70-78% turnout',
    voterDemographics: {
      urbanVoters: 'Zirakpur, Dera Bassi town',
      migrantVoters: 'Significant population from other states',
      ruralVoters: 'Agricultural villages transitioning to urban',
      youngProfessionalVoters: 'High proportion of 18-35 age group',
    },
    verificationStatus: 'Needs Verification',
  },

  // ==========================================================================
  // INFLUENTIAL FIGURES
  // ==========================================================================
  influentialFigures: {
    currentMLA: {
      name: 'Kuljit Singh Randhawa (AAP)',
      roles: ['MLA Dera Bassi', 'President, Punjab State Panchayat Parishad', 'Transport Wing President'],
    },
    districtLeaders: [
      {
        name: 'Kulwant Singh',
        description: 'Former Mayor Mohali; currently MLA from SAS Nagar (different AC)',
      },
      {
        name: 'BJP leaders in SAS Nagar',
        description: 'BJP organizational presence',
      },
      {
        name: 'Congress leaders in Mohali',
        description: 'Congress organizational presence',
      },
    ],
    keyInfluencers: [
      {
        category: 'Property builders and real estate associations',
        description: 'Politically significant due to real estate boom',
      },
      {
        category: 'Transport operators and unions',
        description: 'Connected to MLA Randhawa\'s Transport Wing presidency',
      },
      {
        category: 'Migrant community leaders',
        description: 'Represent significant migrant population',
      },
      {
        category: 'Village sarpanches',
        description: 'In rapidly urbanizing gram panchayats',
      },
    ],
  },

  // ==========================================================================
  // WELFARE SCHEMES
  // ==========================================================================
  welfareSchemes: {
    stateSchemes: {
      womenFinancialAssistance: '₹1000/month for women (financial assistance)',
      healthCards: '₹10 lakh Ayushman Punjab coverage',
      schoolsOfEminence: 'Schools of Eminence (education)',
      irrigationImprovements: 'Irrigation water access improvements (per MLA\'s claims)',
    },
    centralSchemes: {
      pmKisanSammanNidhi: 'PM Kisan Samman Nidhi',
      jalJeevanMission: 'Jal Jeevan Mission (rural tap water)',
      pmAwasYojana: 'PM Awas Yojana (urban/rural housing)',
      ayushmanBharat: 'Ayushman Bharat (health coverage)',
    },
    transportSectorBenefits: {
      welfareConnection:
        'As Transport Wing President, MLA Randhawa connected to transport workers welfare',
      subsidizedPermits: 'Subsidized vehicle permits [NEEDS VERIFICATION]',
      accidentInsurance: 'Accident insurance schemes [NEEDS VERIFICATION]',
    },
  },

  // ==========================================================================
  // ELECTORAL RECOMMENDATIONS FOR CONGRESS
  // ==========================================================================
  electoralRecommendations: {
    target: 'Flip AC112-Dera Bassi',
    winningVoteShareTarget: '40%+',
    voteBankStrategy: {
      urbanMigrants: 'Target Punjabi migrants from HP, J&K; address job insecurity',
      realEstateConstructionWorkers:
        'Livelihood concerns; Nitin Gadkari-type infrastructure messaging',
      scVotersInRuralParts: 'Welfare scheme implementation gaps',
      womenVoters: 'Health card and ₹1000 scheme implementation issues',
    },
    oppositionToAAP: {
      infrastructureFailure: 'Infrastructure failure in Zirakpur/Dera Bassi peri-urban area',
      transportWingRole: 'MLA Randhawa\'s Transport Wing role — has he delivered for transport workers?',
      governanceRecord: "AAP government's overall governance record",
    },
    allianceConsiderations: {
      bjpLikelyPartner: 'BJP likely alliance partner; may contest if SAD included',
      triangularContest:
        'Triangular contest helps Congress only if BJP+Congress don\'t split non-AAP votes',
    },
    recommendedCandidateProfile: {
      profile: 'Young urban professional with real estate/peri-urban connect',
      casteBalancing: 'Caste balancing important given significant SC population',
      cleanImage: 'Clean image; no criminal cases',
      migrantCommunityAbility: 'Ability to mobilize migrant community votes',
    },
  },

  // ==========================================================================
  // INTELLIGENCE ASSESSMENT
  // ==========================================================================
  intelligenceAssessment: {
    congressPosition: [
      { overallPosition: 'Lost to AAP in 2022', factor: '2022 Result', assessment: 'AAP won; 21,721 margin' },
      { overallPosition: 'Weak position', factor: 'INC 2022 Vote Share', assessment: '~28-30% (estimated from margin data)' },
      { overallPosition: 'Opposition stance', factor: 'Incumbent Stronghold', assessment: 'AAP (Kuljit Randhawa, Panchayat Parishad President)' },
      { overallPosition: 'Moderate challenge', factor: 'Anti-Incumbency', assessment: 'Moderate' },
      { overallPosition: 'Difficult arithmetic', factor: 'Caste Arithmetic', assessment: 'Mixed urban; no single dominant bloc' },
      { overallPosition: 'Low-Moderate chance', factor: 'Win Probability (INC)', assessment: 'LOW-MODERATE' },
    ],
    keyRiskFactors: [
      { risk: 'AAP wave may still be operative in Malwa' },
      { risk: 'Transport Wing President has organized labor connections' },
      { risk: 'Urban voter may reward sitting government' },
    ],
    opportunityWindows: [
      { opportunity: 'Zirakpur infrastructure failures are acute and visible' },
      { opportunity: 'Drug problem in peri-urban Mohali widely reported' },
      { opportunity: 'Real estate sector grievances against current government' },
      { opportunity: 'Congress has base in Mohali urban' },
    ],
    intelligenceGaps: [
      { gap: '2017 and 2012 electoral history' },
      { gap: 'Precise turnout figures' },
      { gap: 'Real estate sector political preferences' },
      { gap: 'Gram panchayat election results (rural power structure)' },
    ],
  },
};

// =============================================================================
// COMPLETE DOSSIER (Combined)
// =============================================================================

export const ac112DeraBassiCompleteDossier: AC112DeraBassiDossier = {
  mainDossier: ac112DeraBassiMainDossier,
  deepResearch: ac112DeraBassiDeepResearch,
  completeDossier: {
    ...ac112DeraBassiMainDossier,
    ...ac112DeraBassiDeepResearch,
  } as AC112DeraBassiMainDossier & AC112DeraBassiDeepResearch,
};

// =============================================================================
// REFERENCE EXPORTS
// =============================================================================

export const ac112DeraBassiReference = {
  acNumber: 112,
  name: 'Dera Bassi',
  district: 'Sahibzada Ajit Singh Nagar (SAS Nagar)',
  region: 'Malwa',
  category: 'General',
  dataSources: ['AC112-Dera-Bassi.md', 'AC112-DeraBassi-deep.md'],
  generated: '21 May 2026',
  coverage: '100% across 6-cycle enhancement pipeline',
};
