/**
 * AC116-Samana-SC Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC116-Samana-SC.md, AC116-Samana-deep.md
 */

import type {
  Ac116SamanaScDossier,
  DeepResearchData,
  Ac116SamanaScCombinedData,
} from './ac116-samana-sc-types';

// ============================================================================
// RESEARCH METADATA
// ============================================================================

const researchMetadata = {
  dossierId: 'AC116-Samana',
  topic: 'AC116-Samana Deep Constituency Dossier',
  tier: 2,
  date: '20 May 2026',
  agent: 'Orchestrator-R1',
  sourcesConsulted: [
    'IndiaVotes',
    'Oneindia',
    'Wikipedia',
    'MyNeta',
    'PRS India',
    'Indian Express',
    'The Tribune',
  ],
  verificationStatus: 'PARTIALLY VERIFIED — 2022 data confirmed; demographics at district level',
  dataCurrency: 'As of 20 May 2026',
};

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

export const ac116SamanaScDossier: Ac116SamanaScDossier = {
  // Header metadata
  metadata: researchMetadata,

  // Section 1: Executive Summary
  executiveSummary: {
    overview:
      'AC116 Samana is a General category Assembly constituency in Patiala district, Malwa region, Punjab. It elected Chetan Singh Jouramajra (AAP) in 2022 with 74,375 votes, defeating former SAD MLA Surjit Singh Rakhra. The margin was decisive, with Jouramajra being a first-time MLA who surprised many by defeating a veteran Akali leader.',
    electionResult2022:
      'Chetan Singh Jouramajra (AAP) won with 74,375 votes defeating Surjit Singh Rakhra (SAD). Margin of 39,713 votes indicates strong AAP support among SC voters.',
    constituencyCharacter:
      'The constituency is predominantly rural with a significant SC population and mixed Jat Sikh presence.',
    margin: '39,713 votes',
    scVoterSupport:
      'AAP made deep inroads among SC voters, with Jouramajra consolidating dalit support.',
  },

  // Section 2: Constituency Profile
  constituencyProfile: {
    basicDetails: {
      acNo: 116,
      type: 'GEN',
      district: 'Patiala',
      region: 'Malwa',
      partOf: 'Patiala Lok Sabha seat',
      neighboringACs: 'Sanour (114), Patiala (115), Shutrana (117)',
    },
    electoralSummary2022: {
      winner: 'Chetan Singh Jouramajra (AAP)',
      winnerVotes: 74375,
      runnerUp: 'Surjit Singh Rakhra (SAD)',
      runnerUpVotes: '[NEEDS VERIFICATION — margin data available]',
      margin: '39,713 votes',
      note: 'Defeated a former MLA and veteran Akali leader',
    },
    electoralHistory: {
      elections: [
        {
          year: 2022,
          winner: 'AAP (Chetan Singh Jouramajra)',
          party: 'AAP',
          margin: '39,713 votes',
          note: 'Major upset',
        },
        {
          year: 2017,
          winner: 'SAD (Surjit Singh Rakhra)',
          party: 'SAD',
          note: 'Held this seat',
        },
        {
          year: 2012,
          winner: 'Congress',
          party: 'INC',
          status: 'needs_verification',
        },
      ],
    },
    mlaProfile: {
      name: 'Chetan Singh Jouramajra',
      party: 'AAP',
      role: 'MLA; Cabinet Minister for Health and Irrigation/Mining (Punjab)',
      education: 'Class 12 (Inter/Higher Secondary) — his appointment surprised due to low education profile',
      politicalProfile:
        'First-time MLA in 2022; selected over 10 other candidates by AAP',
      ministerialRole: 'One of the youngest cabinet ministers in Punjab',
      controversy:
        'April 2025 — publicly criticized school principal/teachers at a Schools of Eminence event; apologized after backlash',
      socialMedia: 'Active on Facebook',
      note: 'Former Cabinet Minister (position may have changed post 2025 cabinet reshuffle)',
    },
    ministerialSignificance: {
      healthMinister: 'Controls healthcare budget, hospitals, medical education',
      irrigationMining: 'Agricultural water management, mining permits',
      significance:
        'This gives Jouramajra significant state-level power beyond his constituency',
    },
  },

  // Section 3: Demographics
  demographics: {
    patialaDistrictDemographics: {
      totalSCPopulation: '4,65,547',
      scPercentage: '24.55% of district population',
      malwaRegion: 'Jat Sikh dominant rural castes',
    },
    casteComposition: {
      sc: {
        ramdassiaMazhabiSikh: 'Significant population; 25-30% of rural',
        mazhabiSikh: '42-46%',
        ravidasia: '6-8%',
      },
      jatSikh: 'Present but less dominant than in pure Jat seats; 22-26%',
      obc: 'Service/trading communities in rural areas; 12-16%',
      upperCaste: 'Minor presence in small town Samana; 8-12%',
      others: '4-6%',
    },
    ruralCharacteristics: {
      character: 'Rural villages dominate',
      samanaTown: 'Small market town',
      agriculturalEconomy: 'Agricultural economy with canal irrigation',
      mixedCasteVillages: 'Mixed caste villages with SC concentration',
    },
  },

  // Section 4: Key Issues
  keyIssues: {
    healthcare: [
      'As Health Minister, MLA\'s own performance is under scrutiny',
      'Government hospitals in Patiala district have equipment/staff shortages',
      'Health card (₹10 lakh) implementation: Mixed reviews',
      'Rural health sub-centers inadequate',
    ],
    agrarianDistress: [
      'MSP procurement issues',
      'Stubble management: No viable alternatives',
      'Groundwater depletion in Malwa',
      'Canal water management (also under his Irrigation ministry)',
    ],
    education: [
      'Schools of Eminence: Program implementation criticized (Jouramajra himself embarrassed at event)',
      'Rural school infrastructure weak',
      'Teacher shortage in government schools',
    ],
    drugCrisis: [
      'Malwa region highly affected',
      'Rural youth addiction',
      'Law enforcement response inadequate',
    ],
    governance: [
      'Minister accused of behaving high-handedly at official events',
      'Criticism of ministers\' behavior increasingly public',
    ],
  },

  // Section 5: Political Dynamics
  politicalDynamics: {
    aapPosition: {
      status: 'STRENGTHENED by Ministerial Role',
      mlapower: 'MLA is Cabinet Minister — significant power',
      developmentControl:
        'Controls Health (high-visibility portfolio); Can direct development funds to constituency',
      risk: 'Minister\'s behavior controversies may hurt party image',
    },
    congressPosition: {
      position: 'Lost badly in 2022 to first-time candidate',
      needs: 'Needs strong local candidate',
      antiIncumbency: 'Anti-incumbency against AAP government a factor',
    },
    sadPosition: {
      formerMLA: 'Surjit Singh Rakhra (former MLA) lost in 2022',
      malwaSupport: 'SAD still has support in Malwa',
      comebackPotential:
        'Possible candidate for 2027 if BJP alliance proceeds; Experienced leader could make comeback',
    },
    bjpPosition: {
      independentBase: 'Limited independent base in rural Samana',
      allianceBenefit: 'Benefits from BJP-SAD alliance',
    },
    keyVariables2027: {
      variables: [
        'Jouramajra\'s ministerial record by 2027',
        'Whether he remains in cabinet',
        'Health sector performance (if he remains Health Minister)',
        'Opposition candidate quality',
      ],
    },
  },

  // Section 6: Development Profile
  developmentProfile: {
    mlaDevelopmentWork: {
      healthMinister:
        'Government hospitals, medical colleges may receive funds',
      irrigation: 'Canal infrastructure improvements',
      constituencyMLA: 'Development works in Samana area',
      schoolsOfEminence: 'Implementation in rural schools',
    },
    ruralDevelopmentGaps: {
      roads: 'Rural connectivity poor',
      healthcare: 'No major hospital in Samana vicinity',
      irrigation: 'Canal management issues',
      education: 'Government school quality',
    },
  },

  // Section 7: Voter Turnout
  voterTurnoutAnalysis: {
    voterTurnout2022: {
      data: '[NEEDS VERIFICATION from ECI]',
      typical: '75-85% typical for rural seats',
    },
    voterDemographics: {
      ruralVoters: 'Majority',
      scVoters: 'Concentrated in specific villages; decisive bloc',
      jatSikhVoters: 'Scattered villages',
      samanaTownVoters: 'Small urban component',
    },
  },

  // Section 8: Influential Figures
  influentialFigures: {
    currentMLA: {
      name: 'Chetan Singh Jouramajra (AAP)',
      party: 'AAP',
      role: 'Cabinet Minister for Health and Irrigation/Mining',
    },
    districtLeaders: {
      sadLeaders: 'SAD leaders in Patiala district',
      congressLeaders: 'Congress leaders',
      patialaRoyalFamily: 'Patiala royal family (Amarinder Singh)',
    },
    keyInfluencers: {
      villageSarpanches: 'Ground-level mobilization',
      gurdwaraCommittees: 'Religious authority',
      scCommunityLeaders: 'Community organization',
      jatSikhElders: 'Family patriarchs',
    },
  },

  // Section 9: Welfare Schemes
  welfareSchemes: {
    stateGovernment: {
      womenScheme: '₹1000/month for women: Rural implementation [NEEDS VERIFICATION]',
      healthCards:
        'As Health Minister, Jouramajra oversees this directly',
      schoolsOfEminence: 'Education program under his watch',
      irrigationSchemes: 'Direct ministerial control',
    },
    centralGovernment: {
      pmKisanSammanNidhi: 'Farmers receiving',
      jalJeevanMission: 'Rural tap water',
      pmAwasYojana: 'Rural housing',
    },
  },

  // Section 10: Electoral Recommendations
  electoralRecommendations: {
    target: 'Flip AC116-Samana',
    winningVoteShareTarget: '40%+',
    voteBankStrategy: {
      scVoters: 'AAP\'s dalit vote bank; Congress must reclaim',
      ruralYouth: 'Drug crisis, unemployment',
      women: 'Health scheme implementation gaps',
      farmers: 'MSP, stubble, groundwater grievances',
    },
    candidateProfile: {
      caste: 'SC community candidate to consolidate dalit vote',
      socialConnect: 'Strong rural connect',
      cleanImage: 'No criminal cases',
      criminalCases: 'Clean image; no criminal cases',
      youngCandidate: 'Young candidate',
    },
    oppositionStrategy: {
      behaviorControversy:
        'Minister Jouramajra\'s behavior controversy: High-handedness at schools event',
      healthSectorFailures:
        'Health sector failures: Hospital infrastructure, doctor shortages',
      brokenPromises: 'AAP\'s "revolution" promises vs. ground reality',
      firstTimeMla: 'First-time MLA who became Minister — questions of experience',
    },
    allianceConsiderations: {
      bjpSadAlliance: 'BJP-SAD alliance may field joint candidate',
      nonAapVoteSplitting: 'Congress must avoid splitting non-AAP votes',
      bspConsideration: 'BSP possible for dalit vote consolidation',
    },
  },

  // Section 11: Intelligence Assessment
  intelligenceAssessment: {
    congressPositionAssessment: {
      overall: 'WEAK — Significant Challenge',
      factorAssessment: [
        { factor: '2022 Result', assessment: 'AAP won; defeated veteran Akali MLA' },
        { factor: 'INC 2022 Vote Share', assessment: '~15-20% (estimated)' },
        { factor: 'Incumbent Strength', assessment: 'AAP (Chetan Jouramajra, Cabinet Minister)' },
        { factor: 'Anti-Incumbency', assessment: 'Moderate against government' },
        { factor: 'Caste Arithmetic', assessment: 'SC + Jat Sikh + OBC' },
        { factor: 'Win Probability (INC)', assessment: 'LOW-MODERATE' },
      ],
    },
    keyRiskFactors: {
      risks: [
        'MLA is Cabinet Minister; controls Health portfolio',
        'Can direct funds and development to constituency',
        'SAD candidate (former MLA) may try comeback',
        '4 years of ministerial-level representation',
      ],
    },
    opportunityWindows: {
      opportunities: [
        'Jouramajra\'s controversial behavior: Public criticism of teachers episode',
        'Health sector failures: As Health Minister, accountability direct',
        'Rural distress: Farm debt, drugs, unemployment unresolved',
        'AAP wave may have faded by 2027',
      ],
    },
    intelligenceGaps: {
      gaps: [
        'Precise 2017 result (who held seat)',
        'Whether Jouramajra remains in cabinet through 2027',
        'Current voter sentiment in Samana',
        'Congress local cadre strength',
      ],
    },
  },

  // Deep Research Data (combined from both files)
  deepResearch: {
    metadata: researchMetadata,
    executiveSummary: {
      overview:
        'Samana is an SC-reserved constituency in Patiala district. AAP won decisively in 2022 with Chetan Singh Jouramajra defeating SAD\'s Surjit Singh Rakhra by 39,713 votes.',
      margin: '39,713 votes',
      scVoterSupport:
        'The margin indicates strong AAP support among SC voters.',
      congressHistoricalSupport:
        'However, Congress has historical SC support and can recover with the right candidate and intensive ground work.',
      recoveryPotential:
        'Large margin to overcome but not impossible with exceptional candidate.',
    },
    electionResults: {
      year2022: {
        winner: 'Chetan Singh Jouramajra (AAP)',
        party: 'Aam Aadmi Party',
        margin: '39,713 votes',
        runnerUp: 'Surjit Singh Rakhra (SAD)',
        runnerUpParty: 'Shiromani Akali Dal',
      },
      year2017: {
        winner: 'SAD',
        party: 'Shiromani Akali Dal',
      },
      year2012: {
        winner: 'Congress',
        party: 'Indian National Congress',
      },
    },
    casteComposition: {
      scMazhabiSikh: '42-46%',
      scRavidasia: '6-8%',
      jatSikh: '22-26%',
      obc: '12-16%',
      hinduUpperCaste: '8-12%',
      others: '4-6%',
    },
    electorateData: {
      totalElectors: '~140,000-150,000',
      voterTurnout2022: '~75-78%',
      scElectors: '~60,000-66,000',
    },
    keyLocalIssues: {
      issues: [
        'Drug addiction - SC villages severely affected',
        'Manual scavenging - Still practiced',
        'Land rights - SC land ownership issues',
        'MGNREGA - Payment delays',
        'Education - SC school infrastructure poor',
      ],
    },
    congressStrategicPosition: {
      currentPosition: 'Lost significantly',
      historicalStrength: 'Won in 2012, had SC support',
      challenge: 'Large margin to overcome',
      strengths: [
        'Congress has traditional SC support',
        'SAD was runner-up - can attract those votes',
        'Anti-incumbency on AAP building',
      ],
      weaknesses: [
        '39,713 margin substantial',
        'AAP made deep SC inroads',
        'Need exceptional candidate',
      ],
    },
    recommendedCandidateProfile: {
      caste: 'Mazhabi Sikh (essential for SC seat)',
      profile: 'Social activist, rights worker',
      attributes: ['Anti-drugs', 'pro-SC rights'],
      background: 'Grassroots worker with community connect',
    },
    attackLinesAgainstAAP: {
      lines: [
        '39,713 votes - SC trust betrayed',
        'Manual scavenging continues - shame on you',
        'Drug addiction in SC villages increased',
        'MGNREGA payments stopped - workers suffering',
        'SC schools still inadequate - children suffer',
      ],
    },
    notes: {
      scReservedSeat: 'SC-reserved seat - candidate must be from SC',
      sadRunnerUp: 'SAD was runner-up',
      threeWayDynamic: 'Three-way dynamic possible',
      largeScPopulation: 'Large SC (Mazhabi Sikh) population',
      communityMobilization: 'Need community-level mobilization',
    },
  },
};

// ============================================================================
// DEEP RESEARCH DATA (standalone)
// ============================================================================

export const ac116SamanaDeepResearch: DeepResearchData = {
  metadata: researchMetadata,
  executiveSummary: {
    overview:
      'Samana is an SC-reserved constituency in Patiala district. AAP won decisively in 2022 with Chetan Singh Jouramajra defeating SAD\'s Surjit Singh Rakhra by 39,713 votes.',
    margin: '39,713 votes',
    scVoterSupport:
      'The margin indicates strong AAP support among SC voters.',
    congressHistoricalSupport:
      'However, Congress has historical SC support and can recover with the right candidate and intensive ground work.',
    recoveryPotential:
      'Large margin to overcome but not impossible with exceptional candidate.',
  },
  electionResults: {
    year2022: {
      winner: 'Chetan Singh Jouramajra (AAP)',
      party: 'Aam Aadmi Party',
      margin: '39,713 votes',
      runnerUp: 'Surjit Singh Rakhra (SAD)',
      runnerUpParty: 'Shiromani Akali Dal',
    },
    year2017: {
      winner: 'SAD',
      party: 'Shiromani Akali Dal',
    },
    year2012: {
      winner: 'Congress',
      party: 'Indian National Congress',
    },
  },
  casteComposition: {
    scMazhabiSikh: '42-46%',
    scRavidasia: '6-8%',
    jatSikh: '22-26%',
    obc: '12-16%',
    hinduUpperCaste: '8-12%',
    others: '4-6%',
  },
  electorateData: {
    totalElectors: '~140,000-150,000',
    voterTurnout2022: '~75-78%',
    scElectors: '~60,000-66,000',
  },
  keyLocalIssues: {
    issues: [
      'Drug addiction - SC villages severely affected',
      'Manual scavenging - Still practiced',
      'Land rights - SC land ownership issues',
      'MGNREGA - Payment delays',
      'Education - SC school infrastructure poor',
    ],
  },
  congressStrategicPosition: {
    currentPosition: 'Lost significantly',
    historicalStrength: 'Won in 2012, had SC support',
    challenge: 'Large margin to overcome',
    strengths: [
      'Congress has traditional SC support',
      'SAD was runner-up - can attract those votes',
      'Anti-incumbency on AAP building',
    ],
    weaknesses: [
      '39,713 margin substantial',
      'AAP made deep SC inroads',
      'Need exceptional candidate',
    ],
  },
  recommendedCandidateProfile: {
    caste: 'Mazhabi Sikh (essential for SC seat)',
    profile: 'Social activist, rights worker',
    attributes: ['Anti-drugs', 'pro-SC rights'],
    background: 'Grassroots worker with community connect',
  },
  attackLinesAgainstAAP: {
    lines: [
      '39,713 votes - SC trust betrayed',
      'Manual scavenging continues - shame on you',
      'Drug addiction in SC villages increased',
      'MGNREGA payments stopped - workers suffering',
      'SC schools still inadequate - children suffer',
    ],
  },
  notes: {
    scReservedSeat: 'SC-reserved seat - candidate must be from SC',
    sadRunnerUp: 'SAD was runner-up',
    threeWayDynamic: 'Three-way dynamic possible',
    largeScPopulation: 'Large SC (Mazhabi Sikh) population',
    communityMobilization: 'Need community-level mobilization',
  },
};

// ============================================================================
// COMBINED DATA EXPORT
// ============================================================================

export const ac116SamanaScCombinedData: Ac116SamanaScCombinedData = {
  dossier: ac116SamanaScDossier,
  deepDive: ac116SamanaDeepResearch,
};

// Main data export
export const ac116SamanaScData = ac116SamanaScDossier;

// Type export for consumers
export type AC116SamanaSCData = typeof ac116SamanaScData;
