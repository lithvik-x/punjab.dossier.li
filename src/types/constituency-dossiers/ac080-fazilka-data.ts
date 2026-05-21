/**
 * AC080 - Fazilka Assembly Constituency Data
 * Generated from: AC080-Fazilka.md and AC080-Fazilka-deep.md
 * Date: 20 May 2026
 *
 * 100% Content Coverage - All sections, tables, bullet points, data points
 */

import type {
  AC080FazilkaDossier,
} from './ac080-fazilka-types';

export const ac080FazilkaData: AC080FazilkaDossier = {
  // ==========================================================================
  // METADATA
  // ==========================================================================
  metadata: {
    researchDossierId: 'AC080-Fazilka',
    topic: 'Fazilka Assembly Constituency (AC080), Punjab',
    tier: 2,
    date: '20 May 2026',
    dataCurrency: 'As of May 2026 | Election Data: 2022',
    sourcesConsulted: [
      'Web search',
      'Wikipedia',
      'IndiaVotes',
      'Chanakyya',
      'CEO Punjab',
      'India Today',
    ],
    verificationStatus: 'PARTIALLY VERIFIED - Details need verification',
  },

  // ==========================================================================
  // EXECUTIVE SUMMARY
  // ==========================================================================
  executiveSummary: {
    summary: 'Fazilka (AC080) is a General (GEN) category assembly constituency located in Fazilka district, Malwa region of Punjab. The district was carved out of Firozpur in 2023, making this a newly created district headquarters constituency. Fazilka is a border area town with significant trade importance due to its proximity to Pakistan. In the 2022 elections, the constituency was part of Firozpur district and the winner was from Aam Aadmi Party (AAP).',
    districtCreationNote: 'Fazilka became a separate district in 2023 (carved from Firozpur), making this a newly created district headquarters constituency.',
    electionNote: 'In the 2022 elections, the constituency was part of Firozpur district and the winner was from AAP.',
  },

  // ==========================================================================
  // 1. CONSTITUENCY IDENTITY & BASELINE
  // ==========================================================================
  constituencyIdentity: {
    header: {
      acNumber: 80,
      name: 'Fazilka',
      district: 'Fazilka',
      region: 'Malwa',
      category: 'General',
      date: '20 May 2026',
    },
    geographicProfile: {
      description: 'Fazilka (AC 80) is a general category assembly constituency in Fazilka district (carved from Firozpur), Malwa region. Part of Firozpur Lok Sabha constituency. Border district with Fazilka town as district headquarters.',
      location: 'Located in southwestern Punjab border area',
      significance: 'Border district with Pakistan, agricultural heartland',
      landUse: 'Agriculture, border trade, small businesses',
      borderCharacter: 'Strategic and trade importance due to proximity to Pakistan',
    },
    keyStatistics2022: {
      winner: 'Narinderpal Singh Sawna',
      party: 'Aam Aadmi Party (AAP)',
      margin: 27720,
      runnerUp: null,
      runnerUpParty: null,
      significantVictory: 'AAP won convincingly',
    },
    notableNote: 'Border constituency with urban center. Farm and drug issues dominant. Youth emigration a major concern. Town development also key issue. Candidate must balance urban-rural.',
  },

  // ==========================================================================
  // 2. CONSTITUENCY PROFILE (from deep research)
  // ==========================================================================
  constituencyProfile: {
    basicDetails: {
      assemblyConstituencyNo: 80,
      district: 'Fazilka (new district - carved from Firozpur in 2023)',
      region: 'Malwa (Border)',
      category: 'General (GEN)',
      parliamentaryConstituency: 'Firozpur (Lok Sabha)',
      tehsil: 'Fazilka',
    },
    geographicBoundaries: {
      description: 'Located in southwestern Punjab border area',
      keyTowns: 'Fazilka, border villages',
    },
    urbanRuralComposition: {
      composition: 'Semi-Urban/Rural Mix: Town and surrounding villages',
      borderCharacter: 'Strategic and trade importance',
      economy: ['Agriculture', 'Border trade', 'Small businesses'],
    },
  },

  // ==========================================================================
  // 3. ELECTION RESULTS
  // ==========================================================================
  electionResults: {
    2022: {
      year: 2022,
      winner: 'Narinderpal Singh Sawna',
      party: 'AAP',
      runnerUp: null,
      runnerUpParty: null,
      margin: 27720,
      winnerVoteCount: null,
      verificationStatus: 'Partially Verified',
    },
    2017: {
      year: 2017,
      winner: '',
      party: '',
      runnerUp: null,
      runnerUpParty: null,
      margin: null,
      winnerVoteCount: null,
      verificationStatus: 'Needs Verification',
    },
    2012: {
      year: 2012,
      winner: '',
      party: '',
      runnerUp: null,
      runnerUpParty: null,
      margin: null,
      winnerVoteCount: null,
      verificationStatus: 'Needs Verification',
    },
  },

  // ==========================================================================
  // 4. DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    districtDemographics: [
      {
        indicator: 'SC Population',
        value: '~450,736 (31.4% of district)',
      },
      {
        indicator: 'Border Areas',
        value: 'Strategic importance',
      },
      {
        indicator: 'Rural Population',
        value: '68.6%',
      },
    ],
    casteComposition: {
      jatSikh: 35,
      sc: 30,
      obc: 20,
      upperCaste: 25,
      borderCommunities: 10,
      other: 0,
    },
    religiousComposition: [
      {
        religion: 'Sikh',
        percentage: null,
        notes: 'Predominantly Sikh',
      },
      {
        religion: 'Hindu',
        percentage: null,
        notes: 'Minority',
      },
      {
        religion: 'Muslim',
        percentage: null,
        notes: 'Small Muslim minority in Fazilka town',
      },
    ],
    scPopulationDistrict: 450736,
    districtScPercentage: 31.4,
    ruralPopulationPercentage: 68.6,
  },

  // ==========================================================================
  // 5. KEY ISSUES AND GRIEVANCES
  // ==========================================================================
  keyIssues: {
    primary: [
      {
        rank: 1,
        title: 'Border Security',
        description: 'Proximity to Pakistan, cross-border terrorism concerns',
      },
      {
        rank: 2,
        title: 'Drug Trafficking',
        description: 'Border areas used for smuggling drugs into Punjab - severe in Malwa border region',
      },
      {
        rank: 3,
        title: 'Agricultural Distress',
        description: 'Border farmers face smuggling-related issues, MSP procurement, stubble management',
      },
      {
        rank: 4,
        title: 'Unemployment',
        description: 'Limited industrial development in border area',
      },
      {
        rank: 5,
        title: 'Infrastructure',
        description: 'Roads, connectivity, border infrastructure',
      },
    ],
    secondary: [
      {
        title: 'Healthcare facilities',
        description: 'New district needs better facilities',
      },
      {
        title: 'Education institutions',
        description: 'Need for improvement in border area',
      },
      {
        title: 'Border trade potential',
        description: 'Opportunity with Pakistan',
      },
      {
        title: 'Religious tourism',
        description: 'Some historic sites',
      },
    ],
  },

  // ==========================================================================
  // 6. POLITICAL LANDSCAPE
  // ==========================================================================
  politicalLandscape: {
    currentMla: {
      name: null,
      party: 'AAP',
      term: '2022-2027',
      verificationStatus: 'Needs Verification - AAP candidate won',
    },
    partyPerformanceTrend: [
      {
        year: 2022,
        aap: 'W',
        inc: '[2nd/3rd]',
        sad: 'LOST',
        notes: 'AAP wave',
      },
      {
        year: 2017,
        aap: 'LOST',
        inc: '[W/2nd]',
        sad: '[W/2nd]',
        notes: 'Needs verification',
      },
    ],
    districtSignificance: 'Fazilka becoming separate district is politically significant. New district headquarters may increase local political attention.',
  },

  // ==========================================================================
  // 7. ELECTORAL HISTORY
  // ==========================================================================
  electoralHistory: [
    {
      year: 2022,
      winner: '',
      party: 'AAP',
      margin: '',
      verificationStatus: 'Needs Verification',
    },
    {
      year: 2017,
      winner: '',
      party: '',
      margin: '',
      verificationStatus: 'Needs Verification',
    },
    {
      year: 2012,
      winner: '',
      party: '',
      margin: '',
      verificationStatus: 'Needs Verification',
    },
  ],

  // ==========================================================================
  // 8. COMPETITIVE LANDSCAPE 2027
  // ==========================================================================
  competitiveLandscape2027: {
    likelyContenders: [
      {
        party: 'AAP',
        position: 'Incumbent',
      },
      {
        party: 'SAD',
        position: 'Historical presence in Malwa',
      },
      {
        party: 'Congress',
        position: 'Trying to rebuild',
      },
      {
        party: 'BJP',
        position: 'Limited独立 base but SAD alliance',
      },
    ],
    strategicConsiderations: [
      'New district status increases importance',
      'Border security a key issue',
      'AAP to defend against SAD return',
    ],
  },

  // ==========================================================================
  // 9. INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      {
        id: 1,
        item: 'Winner name and vote share',
        priority: 'High',
      },
      {
        id: 2,
        item: '2017, 2012 results',
        priority: 'High',
      },
      {
        id: 3,
        item: 'Caste demographics',
        priority: 'High',
      },
      {
        id: 4,
        item: 'Local influential families',
        priority: 'Medium',
      },
      {
        id: 5,
        item: 'New district development status',
        priority: 'Medium',
      },
      {
        id: 6,
        item: 'Voter turnout 2022',
        priority: 'Medium',
      },
      {
        id: 7,
        item: 'Booth-level results',
        priority: 'Medium',
      },
      {
        id: 8,
        item: 'Fazilka town demographics specifics',
        priority: 'Low',
      },
    ],
  },

  // ==========================================================================
  // 10. LOCAL ISSUES (from main dossier)
  // ==========================================================================
  localIssues: {
    issues: [
      {
        rank: 1,
        title: 'Border Security',
        description: 'Proximity to Pakistan border',
        category: 'Border',
      },
      {
        rank: 2,
        title: 'Agriculture',
        description: 'Farm distress, MSP, canal irrigation',
        category: 'Agriculture',
      },
      {
        rank: 3,
        title: 'Drug Menace',
        description: 'Severe in Malwa border region',
        category: 'Social',
      },
      {
        rank: 4,
        title: 'Cross-border Trade',
        description: 'With Pakistan (Wagah-Attari)',
        category: 'Economic',
      },
      {
        rank: 5,
        title: 'Fazilka Town',
        description: 'Urban infrastructure needs',
        category: 'Urban',
      },
      {
        rank: 6,
        title: 'Groundwater',
        description: 'Depletion concerns',
        category: 'Infrastructure',
      },
      {
        rank: 7,
        title: 'Youth Migration',
        description: 'NRI emigration from border areas',
        category: 'Social',
      },
    ],
  },

  // ==========================================================================
  // 11. CONGRESS STRATEGIC POSITION (from main dossier)
  // ==========================================================================
  congressStrategicPosition: {
    currentStatus: {
      result: 'Lost by 27,720 votes',
      margin: 27720,
      challenge: 'Rebuilding in border constituency',
      historicalBase: 'Competitive historically',
    },
    keyChallenges: [
      'Significant margin to overcome',
      "AAP's welfare narrative appeal",
      'Border security dimension',
      'Urban-rural voter mix',
    ],
    opportunities: [
      'Border issues not addressed',
      'Farm distress real',
      'Youth emigration/drug crisis',
      'AAP government governance failures',
    ],
  },

  // ==========================================================================
  // 12. RECOMMENDED CANDIDATE PROFILE (from main dossier)
  // ==========================================================================
  recommendedCandidateProfile: {
    idealCandidate: {
      caste: 'Jat Sikh dominant',
      background: 'Farmer leader OR business/trading',
      profile: 'Mix of urban and rural connect',
      priority: 'Fazilka town + surrounding villages',
    },
    selectionCriteria: [
      'Town recognition in Fazilka',
      'Rural voter connect',
      'Border region understanding',
      'Ability to raise local issues',
    ],
  },

  // ==========================================================================
  // 13. ATTACK LINES AGAINST AAP (from main dossier)
  // ==========================================================================
  attackLinesAgainstAAP: [
    {
      topic: 'Border Security',
      vulnerability: 'State government neglects border',
      line: 'Border security has been neglected by the state government',
    },
    {
      topic: 'Farm Crisis',
      vulnerability: 'Farmers MSP not delivered',
      line: "Farmers' MSP promises not fulfilled",
    },
    {
      topic: 'Drug Menace',
      vulnerability: 'Youth destruction continues',
      line: 'Drug crisis destroying youth continues unchecked',
    },
    {
      topic: 'Fazilka Town',
      vulnerability: 'Urban infrastructure broken',
      line: 'Urban infrastructure remains broken',
    },
    {
      topic: 'Migration',
      vulnerability: 'Youth leaving due to lack of jobs',
      line: 'Youth forced to leave due to lack of employment opportunities',
    },
    {
      topic: 'Broken Promises',
      vulnerability: 'Development claims false',
      line: 'AAP development claims proven false on ground',
    },
  ],

  // ==========================================================================
  // 14. BORDER CONTEXT (from main dossier)
  // ==========================================================================
  borderContext: {
    districtFeatures: [
      'Border district with Pakistan',
      'Agricultural heartland',
      'High drug addiction rates',
      'Youth emigration crisis',
    ],
    economy: 'Agriculture, border trade, small businesses',
    majorConcerns: [
      'Border security',
      'Drug trafficking',
      'Youth emigration',
      'Farm distress',
    ],
  },

  // ==========================================================================
  // 15. KEY COMMUNITIES (from main dossier)
  // ==========================================================================
  keyCommunities: [
    {
      community: 'Jat Sikh',
      description: 'Agrarian, politically significant',
      politicalSignificance: 'Dominant community in constituency',
    },
    {
      community: 'Rajput',
      description: 'Rural presence',
      politicalSignificance: 'Significant rural voters',
    },
    {
      community: 'Mazhabi/Ramdassia',
      description: 'SC population',
      politicalSignificance: 'Significant vote share',
    },
    {
      community: 'Punjabi Muslim',
      description: 'In Fazilka town',
      politicalSignificance: 'Urban vote bank',
    },
  ],

  // ==========================================================================
  // 16. HISTORICAL PATTERN (from main dossier)
  // ==========================================================================
  historicalPattern: {
    pattern: 'Congress/SAD competitive historically',
    breakthrough: 'AAP breakthrough in 2022',
    borderDynamics: 'Border constituency dynamics',
  },

  // ==========================================================================
  // 17. STRATEGIC DATA (from main dossier)
  // ==========================================================================
  strategicData: {
    congressStrategicPosition: {
      currentStatus: {
        result: 'Lost by 27,720 votes',
        margin: 27720,
        challenge: 'Rebuilding in border constituency',
        historicalBase: 'Competitive historically',
      },
      keyChallenges: [
        'Significant margin to overcome',
        "AAP's welfare narrative appeal",
        'Border security dimension',
        'Urban-rural voter mix',
      ],
      opportunities: [
        'Border issues not addressed',
        'Farm distress real',
        'Youth emigration/drug crisis',
        'AAP government governance failures',
      ],
    },
    recommendedCandidateProfile: {
      idealCandidate: {
        caste: 'Jat Sikh dominant',
        background: 'Farmer leader OR business/trading',
        profile: 'Mix of urban and rural connect',
        priority: 'Fazilka town + surrounding villages',
      },
      selectionCriteria: [
        'Town recognition in Fazilka',
        'Rural voter connect',
        'Border region understanding',
        'Ability to raise local issues',
      ],
    },
    attackLinesAgainstAAP: [
      {
        topic: 'Border Security',
        vulnerability: 'State government neglects border',
        line: 'Border security has been neglected by the state government',
      },
      {
        topic: 'Farm Crisis',
        vulnerability: 'Farmers MSP not delivered',
        line: "Farmers' MSP promises not fulfilled",
      },
      {
        topic: 'Drug Menace',
        vulnerability: 'Youth destruction continues',
        line: 'Drug crisis destroying youth continues unchecked',
      },
      {
        topic: 'Fazilka Town',
        vulnerability: 'Urban infrastructure broken',
        line: 'Urban infrastructure remains broken',
      },
      {
        topic: 'Migration',
        vulnerability: 'Youth leaving due to lack of jobs',
        line: 'Youth forced to leave due to lack of employment opportunities',
      },
      {
        topic: 'Broken Promises',
        vulnerability: 'Development claims false',
        line: 'AAP development claims proven false on ground',
      },
    ],
  },

  // ==========================================================================
  // 18. DEEP RESEARCH RECOMMENDATIONS
  // ==========================================================================
  recommendations: {
    congressStrategy: {
      candidate: 'Strong local with border area connect',
      focus: [
        'Border security',
        'Drug trafficking',
        'Development',
      ],
      message: 'New district needs better attention',
      challenge: 'AAP won here in 2022',
    },
  },
};
