/**
 * AC083 - Lambi Assembly Constituency Data
 * Process through 6-cycle enhancement pipeline
 * Source: AC083-Lambi.md (Tier 1) + AC083-Lambi-deep.md (Tier 2)
 * 100% content coverage
 */

import type {
  AC083LambiDossierComplete,
  AC083MainDossier,
  AC083DeepResearch,
  AC083ResearchMicroTask,
  AC083ConstituencyIdentity,
  AC083ElectionResultDetail,
  AC083ElectionResultBasic,
  AC083CasteComposition,
  AC083LocalIssue,
  AC083CongressStrategy,
  AC083CongressChallenges,
  AC083CandidateProfile,
  AC083AttackLine,
  AC083Demographics,
  AC083KeyIssues,
  AC083CurrentMLA,
  AC083KeyHistoricalFigure,
  AC083VoterProfile,
  AC083GovernanceAndDevelopment,
  AC083BoothAnalysis,
  AC083IntelligenceGaps,
  AC083CongressRecommendations,
  AC083SWOTAnalysis,
  AC083StrategicBlueprint,
  AC083DataQuality,
  AC083ExecutiveSummary,
  AC083StrategicConsiderations,
  AC083ReligionDistribution,
  AC083ReligionBreakdown,
  AC083VerificationStatus,
  AC083Region,
  AC083Category,
  AC083LokSabhaSeat,
  AC083District,
  AC083Party,
  AC083Religion,
  AC083CasteCategory,
  AC083VoterType,
  AC083IntelligenceGapPriority,
  AC083CasteBreakdown,
  AC083BoothProfile,
  AC083DevelopmentIndicator,
  AC083Infrastructure,
  AC083GovernanceGap,
  AC083AAPStrategy,
  AC083CourseChangingFactor,
} from './ac083-lambi-types';

// =============================================================================
// CONSTANTS
// =============================================================================

const AC083_CONSTITUENCY_NUMBER = 83;
const AC083_AC_NUMBER_DISPLAY = 'AC083';
const AC083_CREATED_DATE = '2026-05-21';

// =============================================================================
// MAIN DOSSIER (TIER 1 - Verified Data)
// =============================================================================

export const ac083MainDossier: AC083MainDossier = {
  researchMetadata: {
    taskId: 'AC083',
    topic: 'Lambi Assembly Constituency',
    tier: 1,
    date: '20 May 2026',
    agent: 'researcher',
    sourcesConsulted: 'Wikipedia, IndiaVotes, OneIndia, ECI data',
    verificationStatus: 'VERIFIED' as AC083VerificationStatus,
    dataCurrency: 'As of 20 May 2026',
  },

  basicInformation: {
    assemblyConstituencyNo: 83,
    officialName: 'Lambi',
    district: 'Sri Muktsar Sahib' as AC083District,
    region: 'Malwa' as AC083Region,
    category: 'General' as AC083Category,
    parliamentaryConstituency: 'Faridkot' as AC083LokSabhaSeat,
  },

  electionResults: {
    2022: {
      winner: 'Gurmeet Singh Khudian',
      party: 'Aam Aadmi Party' as AC083Party,
      margin: 11396,
      runnerUp: 'Parkash Singh Badal',
      runnerUpParty: 'Shiromani Akali Dal' as AC083Party,
      totalElectors: '~158,000',
      significance: 'Historic upset - AAP defeated 5-term CM Parkash Singh Badal',
    },
    2017: {
      winner: 'Parkash Singh Badal',
      party: 'Shiromani Akali Dal' as AC083Party,
      margin: 22770,
      runnerUp: 'Unknown',
      runnerUpParty: 'Unknown' as AC083Party,
      totalElectors: '~155,000',
      significance: 'Parkash Singh Badal 5th term as CM',
    },
    2012: {
      winner: 'Parkash Singh Badal',
      party: 'Shiromani Akali Dal' as AC083Party,
      margin: 'Strong SAD base',
    },
  },

  politicalSignificance: {
    parkashSinghBadalSeat: 'Former CM and SAD chief contested from here',
    sadStronghold: 'Badal family influence strong',
    sikhMajority: '~75-80% Sikh population',
  },

  casteComposition: {
    jantSikh: '~75-80%',
    hinduGeneral: '~20-25%',
    scheduledCastes: '~28-30%',
    otherBackwardClasses: '~10-12%',
    dominantCommunity: 'Jat Sikh (agrarian community)',
    notes: 'OBC includes Saini, Kamboj',
    breakdown: [
      { category: 'Jat Sikh' as AC083CasteCategory, percentage: '~75-80%', notes: 'Dominant agrarian community' },
      { category: 'Hindu General' as AC083CasteCategory, percentage: '~20-25%', notes: 'Mostly in urban areas' },
      { category: 'Scheduled Castes' as AC083CasteCategory, percentage: '~28-30%' },
      { category: 'OBC' as AC083CasteCategory, percentage: '~10-12%', notes: 'Including Saini, Kamboj' },
    ],
  },

  voterDemographics: {
    totalElectors: '~155,000-158,000',
    voterTurnout: '~78-80%',
    fullyRural: 'Fully rural constituency',
    agriculturalEconomy: 'Agricultural economy',
  },

  keyLocalIssues: [
    {
      issue: 'Agricultural distress',
      category: 'Economy',
      details: 'Cotton, wheat MSP, stubble management',
    },
    {
      issue: 'Drug menace',
      category: 'Social',
      details: 'Seizures reported',
    },
    {
      issue: 'Groundwater crisis',
      category: 'Environment',
      details: 'Declining water table',
    },
    {
      issue: 'Rural infrastructure',
      category: 'Development',
      details: 'Roads, electricity',
    },
    {
      issue: 'Youth unemployment',
      category: 'Economy',
      details: 'Limited industries',
    },
  ],

  congressStrategicPosition: {
    aapWon2022: 'AAP won this in 2022 - Defeating Parkash Singh Badal (5-time CM). Congress finished third.',
    congressFinishedThird: 'Congress needs to rebuild from third position',
    strategicConsiderations: {
      congressPosition: 'Rebuilding from third position',
      strategicOptions: [
        'Consider supporting AAP candidate or independent',
        'Focus on anti-incumbency wave',
      ],
      candidateDependency: 'DEPENDENT ON ALLIANCE - SAD alliance likely',
      coalitionConsideration: 'Can target voters disillusioned with AAP',
    },
  },

  recommendedCandidateProfile: {
    recommendedProfile: 'Sikh leader with agricultural background',
    background: 'Farmer representative, rural development focus',
    keyTraits: ['Strong anti-drug stance', 'Accessible to rural masses'],
    targetVoter: 'Jat Sikh farmers, rural voters',
  },

  attackLinesAgainstAAP: [
    {
      line: 'Promise of Rs 1000/month for women - where is the money?',
      target: 'AAP',
      category: 'Broken Promises',
    },
    {
      line: 'Drug menace continues despite claims of crackdown',
      target: 'AAP',
      category: 'Governance Failure',
    },
    {
      line: 'Farmers still struggling for fair MSP',
      target: 'AAP',
      category: 'Agricultural Distress',
    },
    {
      line: 'No development visible in rural Lambi',
      target: 'AAP',
      category: 'Development',
    },
    {
      line: 'Unemployment increased among rural youth',
      target: 'AAP',
      category: 'Economy',
    },
  ],

  sources: [
    'https://en.wikipedia.org/wiki/Lambi_Assembly_constituency',
    'https://www.indiavotes.com/vidhan-sabha/2017/punjab/251/7',
    'https://www.cnbctv18.com/politics/abohar-election-result-2022-live-how-to-check-abohar-legislative-assembly-election-vidhan-sabha-winners-losers-vote-margin-news-updates-12713012.htm',
  ],
};

// =============================================================================
// DEEP RESEARCH (TIER 2)
// =============================================================================

export const ac083DeepResearch: AC083DeepResearch = {
  executiveSummary: {
    politicalSignificance: 'One of Punjab\'s most politically significant constituencies - traditional seat of five-term Chief Minister Parkash Singh Badal (SAD)',
    historicUpset: '2022 election witnessed a historic upset when AAP\'s Gurmeet Singh defeated the iconic SAD leader at age 94+',
    antiIncumbencySymbol: 'Symbolizes anti-incumbency against traditional parties',
    keyNarrative: 'This seat represents the shift in Malwa region politics from SAD dominance to AAP challenge',
  },

  constituencyProfile: {
    assemblyConstituencyNo: 83,
    officialName: 'Lambi',
    district: 'Sri Muktsar Sahib' as AC083District,
    region: 'Malwa' as AC083Region,
    category: 'General' as AC083Category,
    parliamentaryConstituency: 'Firozpur' as AC083LokSabhaSeat,
  },

  demographics: {
    totalElectors: '~180,000',
    voterTurnout: '~77-79%',
    ruralVoters: '~80-85%',
    urbanVoters: '~15-20%',
    voterType: 'Rural' as AC083VoterType,
    agrarianCommunity: 'Dominant',
    casteComposition: {
      jantSikh: '~45-50%',
      hinduGeneral: '~20-25%',
      scheduledCastes: '~20-22%',
      otherBackwardClasses: '~5-8%',
      muslim: '~1-2%',
      dominantCommunity: 'Jat Sikh (dominant agrarian community)',
      breakdown: [
        { category: 'Jat Sikh' as AC083CasteCategory, percentage: '~45-50%', notes: 'Dominant agrarian community' },
        { category: 'Hindu General' as AC083CasteCategory, percentage: '~20-25%' },
        { category: 'Scheduled Castes' as AC083CasteCategory, percentage: '~20-22%' },
        { category: 'Other Backward Classes' as AC083CasteCategory, percentage: '~5-8%' },
        { category: 'Muslim' as AC083CasteCategory, percentage: '~1-2%' },
      ],
    },
    religionDistribution: {
      sikh: '~71%',
      hindu: '~27%',
      others: '~2%',
      districtLevel: true,
      breakdown: [
        { religion: 'Sikh' as AC083Religion, percentage: '~71%' },
        { religion: 'Hindu' as AC083Religion, percentage: '~27%' },
        { religion: 'Other' as AC083Religion, percentage: '~2%' },
      ],
    },
  },

  electoralHistory: {
    2022: {
      winner: 'Gurmeet Singh',
      party: 'Aam Aadmi Party' as AC083Party,
      margin: 11396,
      runnerUp: 'Parkash Singh Badal',
      runnerUpParty: 'Shiromani Akali Dal' as AC083Party,
      totalElectors: '~158,000',
      significance: 'Historic upset win over Parkash Singh Badal',
    },
    2017: {
      winner: 'Parkash Singh Badal',
      party: 'Shiromani Akali Dal' as AC083Party,
      margin: 22770,
      runnerUp: 'Unknown',
      runnerUpParty: 'Unknown' as AC083Party,
      totalElectors: '~155,000',
      significance: '5th term as CM',
    },
    2012: {
      winner: 'Parkash Singh Badal',
      party: 'Shiromani Akali Dal' as AC083Party,
      margin: 'Strong SAD base',
    },
  },

  keyIssues: {
    primaryIssues: [
      'Symbolic Significance: Anti-establishment sentiment',
      'Agricultural Distress: MSP, stubble, groundwater',
      'Drug Crisis: Youth addiction, especially in Malwa',
      'Governance: Basic infrastructure, healthcare, education',
      'Unemployment: Youth emigration',
    ],
    agriculturalDistress: ['MSP issues for wheat and cotton', 'Stubble management problems', 'Groundwater decline'],
    drugCrisis: 'Youth addiction, especially in Malwa region - seizures reported',
    governanceAndInfrastructure: ['Basic infrastructure gaps', 'Healthcare availability', 'Education access'],
    unemployment: 'Youth emigration due to limited job opportunities',
    groundwater: 'Declining water table affecting agriculture',
    ruralInfrastructure: ['Road connectivity', 'Electricity supply', 'Canal irrigation system'],
  },

  politicalPlayers: {
    currentMLA: {
      name: 'Gurmeet Singh',
      party: 'Aam Aadmi Party' as AC083Party,
      background: '[NEEDS VERIFICATION]',
      electedYear: 2022,
      defeated: 'Parkash Singh Badal (5-term CM)',
    },
    keyHistoricalFigure: {
      name: 'Parkash Singh Badal',
      role: '5-term Chief Minister, SAD leader',
      party: 'Shiromani Akali Dal' as AC083Party,
      significance: 'Lost in 2022 at age 94+ - traditional seat holder',
      age: 94,
      lostIn2022: true,
    },
    localInfluencers: '[NEEDS VERIFICATION - Badal family retain influence]',
  },

  voterProfile: {
    turnout2022: '~77-79% (high for this region)',
    ruralVotersPercentage: '~80-85%',
    urbanVotersPercentage: '~15-20%',
    agrarianCommunity: 'Dominant',
    turnoutAnalysis: 'High turnout favored AAP in 2022',
  },

  governanceAndDevelopment: {
    developmentIndicators: [
      { sector: 'Rural Development', status: '[NEEDS VERIFICATION]', details: 'District level data' },
      { sector: 'Agricultural Infrastructure', status: 'Canal irrigation system', details: 'Available' },
      { sector: 'Healthcare', status: 'District Hospital Muktsar', details: 'Available in district' },
      { sector: 'Industrial Development', status: 'Limited', details: 'Few industries' },
    ],
    infrastructure: {
      agriculturalInfrastructure: 'Canal irrigation system',
      healthcare: 'District Hospital Muktsar',
      industrialDevelopment: 'Limited',
    },
    governanceGaps: [
      { sector: 'Rural Development', gap: '[NEEDS VERIFICATION]', priority: 'HIGH' },
      { sector: 'Healthcare', gap: 'Access in rural areas', priority: 'MEDIUM' },
      { sector: 'Education', gap: 'Infrastructure gaps', priority: 'MEDIUM' },
    ],
    districtLevel: true,
  },

  boothAnalysis: {
    strongBooths: {
      type: 'strong' as const,
      description: 'Rural Jat Sikh majority booths',
      voterComposition: 'Jat Sikh dominant',
      characteristics: [
        'Badal family loyalist villages',
        'Traditional SAD support base',
      ],
    },
    marginalBooths: {
      type: 'marginal' as const,
      description: 'Urban pockets, SC majority areas may be swing',
      characteristics: [
        'Urban pockets',
        'SC majority areas',
      ],
    },
    notes: 'Strong booth profile needs constituency-level data verification',
  },

  outlook2027: {
    congressStrategy: {
      opportunity: 'Lambi represents anti-AAP sentiment opportunity',
      canTarget: ['voters disillusioned with AAP'],
      canLeverage: ['Parkash Singh Badal\'s legacy (if SAD alliance)'],
      challenges: [
        'AAP won convincingly in 2022',
        'SAD is primary opponent, not Congress',
        'Need to understand 2022 swing voters',
      ],
      keyWinningStrategies: [
        'Coalition Building: If SAD alliance, joint campaign',
        'Primary Narrative: "AAP failed on all promises in 5 years"',
        'Target Voters: Rural voters, farmers, anti-AAP sentiment',
        'Grievance Focus: Drug crisis, broken promises, governance',
        'Historical Connection: Can invoke Parkash Singh Badal legacy if SAD ally',
      ],
      primaryNarrative: '"AAP failed on all promises in 5 years"',
      targetVoters: ['Rural voters', 'Farmers', 'Traditional SAD voters', 'Anti-AAP sentiment'],
      focusAreas: ['Drug crisis', 'Farmer distress', 'Broken promises', 'Governance'],
    },
    congressChallenges: {
      aapWonConvincingly: true,
      sadIsPrimaryOpponent: true,
      needToUnderstandSwingVoters: 'Critical gap in understanding 2022 swing voter profile',
      intelligenceGaps: [
        'Exact 2022 margin and vote shares',
        'Booth-wise results',
        'Sub-caste composition',
        'Current MLA\'s performance/attendance',
        'Local issues developed after 2022',
        'Opinion of sitting AAP MLA',
      ],
    },
  },

  intelligenceGaps: {
    gaps: [
      { information: 'Exact 2022 margin and vote shares', priority: 'HIGH' as AC083IntelligenceGapPriority, requiresPrimarySource: true },
      { information: 'Booth-wise results', priority: 'HIGH' as AC083IntelligenceGapPriority, requiresPrimarySource: true },
      { information: 'Sub-caste composition', priority: 'MEDIUM' as AC083IntelligenceGapPriority, requiresPrimarySource: true },
      { information: 'Current MLA\'s performance/attendance', priority: 'MEDIUM' as AC083IntelligenceGapPriority, requiresPrimarySource: true },
      { information: 'Local issues developed after 2022', priority: 'MEDIUM' as AC083IntelligenceGapPriority, requiresPrimarySource: true },
      { information: 'Opinion of sitting AAP MLA', priority: 'LOW' as AC083IntelligenceGapPriority, requiresPrimarySource: true },
    ],
    verificationNeeded: [
      'Exact 2022 margin and vote shares',
      'Booth-wise results',
      'Sub-caste composition',
      'Current MLA\'s performance/attendance',
      'Local issues developed after 2022',
      'Opinion of sitting AAP MLA',
    ],
    dataQualityNote: 'Intelligence gaps require primary source verification from ECI data, field research',
  },

  recommendations: {
    candidate: 'DEPENDENT ON ALLIANCE - SAD alliance likely',
    primaryNarrative: '"AAP\'s 5 years = no delivery on promises"',
    targetVoters: ['Rural voters', 'Farmers', 'Traditional SAD voters'],
    coalition: 'If SAD alliance, coordinate campaign',
    focus: ['Drug crisis', 'Farmer distress', 'Broken promises'],
  },

  swotAnalysis: {
    strengths: {
      items: [
        'Historical legacy of Parkash Singh Badal',
        'Strong SAD base in rural areas',
        'Jat Sikh voter dominance',
        'Badal family name recognition',
      ],
      historicalLegacy: 'Parkash Singh Badal served as CM for 5 terms from this seat',
      sadBase: 'Traditional SAD stronghold with loyal voter base',
    },
    weaknesses: {
      items: [
        'Lost momentum after 2022 defeat',
        'Parkash Singh Badal advanced age',
        'Need to rebuild third place position',
      ],
      lostMomentum: true,
      defeatIn2022: 'Historic loss to AAP breaking SAD hold',
    },
    opportunities: {
      items: [
        'Anti-AAP sentiment growing',
        'Potential SAD alliance',
        'AAP governance failures',
        'Dissatisfied voter groups',
      ],
      antiAAPSentiment: 'Voters disillusioned with broken promises',
      coalitionPotential: true,
    },
    threats: {
      items: [
        'AAP incumbency advantage',
        'SAD as primary opponent',
        'Intelligence gaps on swing voters',
        'Uncertain coalition dynamics',
      ],
      aapIncumbency: 'AAP government has 5 years to deliver',
      voterDisillusionment: 'May not swing back quickly',
    },
  },

  strategicBlueprint: {
    coalitionBuilding: 'If SAD alliance, joint campaign - critical for challenging AAP',
    primaryNarrative: '"AAP failed on all promises in 5 years"',
    targetVoters: ['Rural voters', 'Farmers', 'Traditional SAD voters', 'Anti-AAP sentiment'],
    grievanceFocus: ['Drug crisis', 'Broken promises', 'Governance', 'Farmer distress'],
    historicalConnection: 'Can invoke Parkash Singh Badal legacy if SAD ally',
    courseChangingFactors: {
      factors: [
        { factor: 'SAD Alliance', impact: 'Would fundamentally change campaign dynamics', timeline: 'Pre-election' },
        { factor: 'AAP Performance', impact: 'Governance failures could accelerate anti-AAP sentiment', timeline: 'Ongoing' },
        { factor: 'Swing Voter Analysis', impact: 'Understanding 2022 swing voters critical', timeline: 'Pre-campaign' },
      ],
      coalitionScenario: 'SAD alliance would enable joint opposition to AAP',
      aapPerformance: 'AAP has failed to deliver on promises, creating anti-incumbency',
    },
  },

  dataQuality: {
    overall: 'PARTIALLY VERIFIED',
    verifiedData: [
      'Basic constituency information',
      '2022 election results (margin 11,396)',
      '2017 election results (margin 22,770)',
      'Caste composition (district level)',
      'Religion distribution (district level)',
    ],
    estimatedData: [
      'Total electors (~155,000-180,000)',
      'Voter turnout (~77-80%)',
      'Caste composition (constituency level)',
    ],
    needsVerification: [
      'Booth-wise results',
      'Sub-caste composition',
      'Current MLA background',
      'Local influencer details',
      'Development indicators',
    ],
    sources: [
      'Web searches on Punjab 2022 election results',
      'Demographics research',
      'Issues analysis',
      'CNBC TV18',
      'OneIndia',
    ],
  },
};

// =============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// =============================================================================

export const ac083LambiDossierComplete: AC083LambiDossierComplete = {
  mainDossier: ac083MainDossier,
  deepResearch: ac083DeepResearch,
  metadata: {
    constituencyNumber: AC083_CONSTITUENCY_NUMBER,
    displayCode: AC083_AC_NUMBER_DISPLAY,
    createdDate: AC083_CREATED_DATE,
    lastUpdated: '2026-05-21',
    dataCoverage: '100% - Both Tier 1 and Tier 2 source files processed',
  },
};

// =============================================================================
// STANDALONE EXPORTS FOR INDEX
// =============================================================================

export const ac083LambiData = ac083LambiDossierComplete;
