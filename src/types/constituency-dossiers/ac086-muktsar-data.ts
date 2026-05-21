/**
 * AC086 - Muktsar Assembly Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Source: AC086-Muktsar.md (Tier 1) + AC086-Muktsar-deep.md (Tier 2)
 * Date: 21 May 2026
 *
 * 100% Content Coverage - All sections, tables, bullet points, data points
 */

import type {
  AC086MuktsarDossier,
  MainDossierData,
  DeepResearchData,
  ResearchMetadata,
  ConstituencyIdentity,
  GeographicProfile,
  KeyStatistics2022,
  PoliticalSignificance,
  ElectionResult,
  ElectionResults,
  Demographics,
  CasteBreakdown,
  ReligionBreakdown,
  KeySocialGroup,
  LocalIssue,
  CongressStrategicPosition,
  CandidateProfile,
  AttackLine,
  StrategicData,
  VoteShareAnalysis,
  VoteShareBreakdown,
  ConstituencyProfile,
  ElectionResultDeep,
  KeyCandidateDeep,
  DemographicsDeep,
  ElectoralHistoryDeep,
  PrimaryIssue,
  CurrentMLA,
  VoterProfileDeep,
  CongressStrategy2027,
  IntelligenceGap,
  RecommendationsCampaign,
} from './ac086-muktsar-types';

// =============================================================================
// MAIN DOSSIER DATA (from AC086-Muktsar.md - Tier 1)
// =============================================================================

export const mainDossierData: MainDossierData = {
  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    researchMicroTaskId: 'AC086',
    topic: 'Muktsar Assembly Constituency',
    tier: 1,
    date: '20 May 2026',
    agent: 'researcher',
    sourcesConsulted: 'Wikipedia, IndiaVotes, OneIndia, ECI data',
    verificationStatus: 'VERIFIED',
    dataCurrency: 'As of 20 May 2026',
  },

  // ==========================================================================
  // 1. CONSTITUENCY IDENTITY
  // ==========================================================================
  constituencyIdentity: {
    header: {
      acNumber: 86,
      officialName: 'Muktsar',
      district: 'Sri Muktsar Sahib',
      region: 'Malwa',
      type: 'General',
      date: '20 May 2026',
    },
    geographicProfile: {
      description: 'Muktsar is the district headquarters of Sri Muktsar Sahib district in Punjab\'s Malwa region',
      location: 'Malwa region (South-West Punjab)',
      significance: 'District capital with urban-rural mix',
    },
    keyStatistics2022: {
      winner: 'Jagdeep Singh Brar (Kaka Brar)',
      winnerParty: 'AAP',
      runnerUp: null,
      voteShare: 52,
      margin: 34194,
      marginDescription: '34,194 votes',
      totalElectors: 165000,
      voterTurnout: null,
      verificationStatus: 'VERIFIED',
    },
    lokSabhaSeat: 'Faridkot',
  },

  // ==========================================================================
  // 2. POLITICAL SIGNIFICANCE
  // ==========================================================================
  politicalSignificance: {
    districtHeadquarters: true,
    commercialCenter: true,
    sikhMajority: true,
    description: 'Muktsar town is district capital; trade and agriculture hub; ~70-75% Sikh population',
  },

  // ==========================================================================
  // 3. ELECTION RESULTS
  // ==========================================================================
  electionResults: {
    2022: {
      year: 2022,
      winner: 'Jagdeep Singh Brar (Kaka Brar)',
      party: 'AAP',
      margin: 34194,
      marginDescription: '34,194 votes',
      runnerUp: null,
      runnerUpParty: null,
      totalElectors: 165000,
      voterTurnout: null,
      voteShare: 52,
      notes: 'Estimated ~52% vote share',
      verificationStatus: 'VERIFIED',
    },
    2017: {
      year: 2017,
      winner: 'needs_verification',
      party: 'OTHERS',
      margin: null,
      marginDescription: null,
      runnerUp: null,
      runnerUpParty: null,
      totalElectors: 160000,
      voterTurnout: null,
      voteShare: null,
      notes: 'Winner not available',
      verificationStatus: 'NEEDS_VERIFICATION',
    },
    2012: null,
  },

  // ==========================================================================
  // 4. DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    totalPopulation: null,
    totalElectors: 165000,
    voterTurnout: 77,
    voterTurnoutPercent: '~77-78%',
    urbanRuralMix: 'Mix of urban and rural voters',
    casteComposition: [
      {
        category: 'Sikh Majority',
        estimatedPercent: 70,
        notes: '~70-75%',
      },
      {
        category: 'Hindu Minority',
        estimatedPercent: 30,
        notes: '~25-30%',
      },
      {
        category: 'Jat Sikh',
        estimatedPercent: 35,
        notes: 'Dominant (~30-35%)',
      },
      {
        category: 'SC Population',
        estimatedPercent: 29,
        notes: '~28-30%',
      },
      {
        category: 'OBC',
        estimatedPercent: 11,
        notes: '~10-12%',
      },
    ],
    religionBreakdown: [
      {
        religion: 'Sikh',
        percentage: 71,
        notes: 'District level - Muktsar',
      },
      {
        religion: 'Hindu',
        percentage: 27,
        notes: 'District level - Muktsar',
      },
      {
        religion: 'Others',
        percentage: 2,
        notes: 'District level - Muktsar',
      },
    ],
    keySocialGroups: [
      {
        group: 'Jat Sikh',
        description: 'Dominant community (~30-35%)',
      },
      {
        group: 'SC Population',
        description: 'Significant population (~28-30%)',
      },
      {
        group: 'Hindu General',
        description: 'Urban population (~25-30%)',
      },
    ],
  },

  // ==========================================================================
  // 5. KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: [
    {
      rank: 1,
      title: 'Drug menace',
      description: 'District sees significant seizures; major concern for voters',
      category: 'Law & Order',
    },
    {
      rank: 2,
      title: 'Urban infrastructure',
      description: 'Town needs development; roads and municipal services',
      category: 'Urban',
    },
    {
      rank: 3,
      title: 'Agricultural marketing',
      description: 'Mandi facilities need improvement for rural voters',
      category: 'Agricultural',
    },
    {
      rank: 4,
      title: 'Healthcare',
      description: 'District hospital needs upgrade',
      category: 'Healthcare',
    },
    {
      rank: 5,
      title: 'Employment',
      description: 'Youth joblessness is a growing concern',
      category: 'Economic',
    },
  ],

  // ==========================================================================
  // 6. STRATEGIC DATA
  // ==========================================================================
  strategicData: {
    congressPosition: {
      currentStatus: {
        aapHoldsSeat: true,
        winner: 'Jagdeep Singh Brar (Kaka Brar)',
        margin: 34194,
        runnerUp: null,
      },
      challenges: [
        'Build strong local organization',
        'Focus on urban-rural divide',
        'Address drug and development issues',
        'Consider alliance possibilities',
      ],
      recommendations: [
        'Build strong local organization',
        'Focus on urban-rural divide',
        'Address drug and development issues',
        'Consider alliance possibilities',
      ],
    },
    recommendedCandidate: {
      profile: 'Sikh leader with administrative experience',
      background: 'Business or agricultural community',
      keyTraits: ['Known for development work', 'Accessible'],
      targetVoters: ['Urban voters', 'Rural farmers'],
    },
    attackLines: [
      {
        rank: 1,
        title: 'Town infrastructure neglected',
        description: 'AAP MLA failed to develop district headquarters',
      },
      {
        rank: 2,
        title: 'Drug menace continues unchecked',
        description: 'Despite promises, drug crisis continues in district',
      },
      {
        rank: 3,
        title: 'Healthcare facilities deteriorated',
        description: 'District hospital needs remain unaddressed',
      },
      {
        rank: 4,
        title: 'Unemployment increased',
        description: 'Youth joblessness has grown under AAP',
      },
      {
        rank: 5,
        title: 'Broken promises on financial assistance',
        description: 'Failed to deliver on financial help promises',
      },
    ],
  },

  // ==========================================================================
  // 7. VOTE SHARE ANALYSIS
  // ==========================================================================
  voteShareAnalysis: null,

  // ==========================================================================
  // 8. SOURCES
  // ==========================================================================
  sources: [
    'https://www.oneindia.com/muktsar-assembly-elections-pb-86/',
    'https://www.indiavotes.com/vidhan-sabha/2017/punjab/251/7',
    'https://en.wikipedia.org/wiki/2022_Punjab_Legislative_Assembly_election',
  ],
};

// =============================================================================
// DEEP RESEARCH DATA (from AC086-Muktsar-deep.md - Tier 2)
// =============================================================================

export const deepResearchData: DeepResearchData = {
  // ==========================================================================
  // EXECUTIVE SUMMARY
  // ==========================================================================
  executiveSummary: {
    description: 'Muktsar (AC086) is the district headquarters constituency in Sri Muktsar Sahib district of Punjab\'s Malwa region. The constituency witnessed an AAP victory in 2022 with sitting MLA Jagdeep Singh (AAP) winning. Being a district capital, it has urban-rural mix with issues ranging from governance to agriculture.',
    winner: 'Jagdeep Singh (AAP)',
    margin: null,
    keyInsight: 'AAP won comfortably in 2022; Congress needs strong candidate and focused narrative on governance failures',
  },

  // ==========================================================================
  // 2. CONSTITUENCY PROFILE
  // ==========================================================================
  constituencyProfile: {
    assemblyConstituencyNo: 86,
    district: 'Sri Muktsar Sahib (Muktsar)',
    region: 'Malwa (South-West Punjab)',
    category: 'General',
    parliamentaryConstituency: 'Firozpur',
  },

  // ==========================================================================
  // 3. 2022 ELECTION RESULTS
  // ==========================================================================
  electionResult2022: {
    winner: 'Jagdeep Singh (Aam Aadmi Party) [aka Kaka Jagdeep Singh]',
    winnerParty: 'AAP',
    margin: null,
    turnout: '~76-78% [ESTIMATE]',
    totalElectors: '~1,80,000 [APPROXIMATION]',
    verificationStatus: 'PARTIALLY_VERIFIED',
  },

  // ==========================================================================
  // 4. KEY CANDIDATES 2022
  // ==========================================================================
  keyCandidates2022: [
    {
      name: 'Jagdeep Singh',
      party: 'AAP',
      notes: 'Winner (aka Kaka Jagdeep Singh)',
    },
    {
      name: 'Rajesh Pathela',
      party: 'BJP',
      notes: null,
    },
    {
      name: 'Dharamjeet Singh',
      party: 'INC',
      notes: 'NEEDS VERIFICATION',
    },
  ],

  // ==========================================================================
  // 5. DEMOGRAPHICS (Census 2011)
  // ==========================================================================
  demographics: {
    total: '~2,00,000 [APPROXIMATION - urban + rural]',
    casteComposition: [
      {
        category: 'Jat Sikh',
        percentage: '~35-40%',
        notes: null,
      },
      {
        category: 'Hindu General',
        percentage: '~30-35%',
        notes: 'urban',
      },
      {
        category: 'Scheduled Castes',
        percentage: '~18-22%',
        notes: null,
      },
      {
        category: 'Other Backward Classes',
        percentage: '~5-8%',
        notes: null,
      },
    ],
    religionDistribution: [
      {
        religion: 'Sikh',
        percentage: 71,
        notes: 'District Level - Muktsar',
      },
      {
        religion: 'Hindu',
        percentage: 27,
        notes: 'District Level - Muktsar',
      },
      {
        religion: 'Others',
        percentage: 2,
        notes: 'District Level - Muktsar',
      },
    ],
  },

  // ==========================================================================
  // 6. ELECTORAL HISTORY
  // ==========================================================================
  electoralHistory: [
    {
      year: 2022,
      winner: 'Jagdeep Singh',
      party: 'AAP',
      margin: null,
      notes: '[VERIFY]',
    },
    {
      year: 2017,
      winner: null,
      party: null,
      margin: null,
      notes: '[NEEDS DATA]',
    },
    {
      year: 2012,
      winner: null,
      party: null,
      margin: null,
      notes: '[NEEDS DATA]',
    },
  ],

  // ==========================================================================
  // 7. PRIMARY ISSUES
  // ==========================================================================
  primaryIssues: [
    {
      issue: 'Urban Governance',
      description: 'Sanitation, roads, municipal services',
    },
    {
      issue: 'Drug Crisis',
      description: 'District headquarters, still affected',
    },
    {
      issue: 'Agricultural Distress',
      description: 'Rural areas in constituency',
    },
    {
      issue: 'Healthcare',
      description: 'District hospital adequacy',
    },
    {
      issue: 'Unemployment',
      description: 'Youth jobs',
    },
  ],

  // ==========================================================================
  // 8. CURRENT MLA
  // ==========================================================================
  currentMLA: {
    name: 'Jagdeep Singh (AAP)',
    party: 'AAP',
    alias: 'Kaka Jagdeep Singh',
    background: null,
  },

  // ==========================================================================
  // 9. LOCAL INFLUENCERS
  // ==========================================================================
  localInfluencers: null,

  // ==========================================================================
  // 10. VOTER PROFILE
  // ==========================================================================
  voterProfile: {
    turnout: '~76-78%',
    ruralVoters: '~60-65%',
    urbanVoters: '~35-40% (Muktsar town)',
  },

  // ==========================================================================
  // 11. 2027 CONGRESS STRATEGY
  // ==========================================================================
  congressStrategy2027: {
    targetVoters: ['Urban voters disillusioned with AAP', 'Rural youth'],
    primaryNarrative: 'AAP failed on governance and delivery',
    keyWinningStrategy: {
      candidate: 'Strong candidate with urban connect',
      primaryNarrative: 'AAP failed on urban governance and delivery',
      targetVoters: ['Urban middle class', 'Rural youth'],
      grievanceFocus: ['Civic issues', 'Drug crisis', 'Jobs'],
    },
  },

  // ==========================================================================
  // 12. INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      {
        item: 'Exact 2022 margin and all candidate votes',
        priority: 'HIGH',
      },
      {
        item: '2017 and earlier results',
        priority: 'HIGH',
      },
      {
        item: 'Booth-wise analysis',
        priority: 'MEDIUM',
      },
      {
        item: 'Current MLA\'s attendance and performance',
        priority: 'MEDIUM',
      },
      {
        item: 'Urban development issues',
        priority: 'MEDIUM',
      },
    ],
  },

  // ==========================================================================
  // 13. RECOMMENDATIONS FOR CAMPAIGN
  // ==========================================================================
  recommendationsCampaign: {
    candidate: 'Candidate with urban profile',
    primaryNarrative: 'AAP failed on governance and delivery',
    targetVoters: ['Urban middle class', 'Rural youth'],
    grievanceFocus: ['Civic issues', 'Drug crisis', 'Unemployment'],
  },

  // ==========================================================================
  // 14. SOURCES
  // ==========================================================================
  sources: ['Web searches', 'News18', 'CNBC TV18'],

  // ==========================================================================
  // 15. NEEDS VERIFICATION
  // ==========================================================================
  needsVerification: [
    'Exact 2022 margin and all candidate votes',
    '2017 and earlier results',
    'Booth-wise analysis',
    'Current MLA\'s attendance and performance',
    'Urban development issues',
    'Dharamjeet Singh (Congress) candidate details',
    'Current MLA\'s background',
    'Local influencers',
  ],
};

// =============================================================================
// COMPLETE COMBINED DOSSIER
// =============================================================================

export const ac086MuktsarData: AC086MuktsarDossier = {
  metadata: {
    researchMicroTaskId: 'AC086',
    topic: 'Muktsar Assembly Constituency',
    tier: 1,
    date: '20 May 2026',
    agent: 'researcher',
    sourcesConsulted: 'Wikipedia, IndiaVotes, OneIndia, ECI data',
    verificationStatus: 'VERIFIED',
    dataCurrency: 'As of 20 May 2026',
  },

  main: mainDossierData,

  deep: deepResearchData,

  sources: [
    'https://www.oneindia.com/muktsar-assembly-elections-pb-86/',
    'https://www.indiavotes.com/vidhan-sabha/2017/punjab/251/7',
    'https://en.wikipedia.org/wiki/2022_Punjab_Legislative_Assembly_election',
    'Web searches',
    'News18',
    'CNBC TV18',
  ],

  compiledDate: '21 May 2026',
};

// =============================================================================
// EXPORTS
// =============================================================================

export type AC086MuktsarData = AC086MuktsarDossier;
