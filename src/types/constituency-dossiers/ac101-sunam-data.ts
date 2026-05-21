/**
 * AC101 - Sunam Assembly Constituency Data
 * Generated from: AC101-Sunam.md and AC101-Sunam-deep.md
 * Date: 21 May 2026
 *
 * 100% Content Coverage - All sections, tables, bullet points, data points
 * Processing: 6-cycle enhancement pipeline
 */

import type {
  AC101SunamDossier,
} from './ac101-sunam-types';

export const ac101SunamData: AC101SunamDossier = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    header: {
      acNumber: 101,
      constituencyName: 'Sunam',
      district: 'Sangrur',
      region: 'Malwa',
      category: 'General',
      dataCurrency: 'As of 19 May 2026',
    },
    profile: {
      acNumber: '101',
      officialName: 'Sunam',
      district: 'Sangrur',
      region: 'Malwa',
      category: 'General',
      lokSabhaSeat: 'NEEDS VERIFICATION',
      type: 'NEEDS VERIFICATION',
      geographicContext: {
        description: 'Sunam is situated in Sangrur district in the Malwa region of Punjab. The area is primarily agricultural with a mix of rural and small urban populations.',
        location: 'Sangrur district, Malwa region, Punjab',
        agriculturalBase: 'Primarily agricultural with wheat/paddy cultivation',
        demographics: 'Mix of rural and small urban populations',
      },
    },
  },

  // ==========================================================================
  // ELECTION HISTORY
  // ==========================================================================
  electionHistory: {
    result2022: {
      winner: 'Aman Aurora',
      party: 'Aam Aadmi Party',
      voteShare: '~46-48% (estimated)',
      margin: '75,277 votes',
      marginVotes: 75277,
      runnerUp: 'INC Candidate',
      runnerUpParty: 'INC',
      note: 'Massive AAP victory with 75,277 vote margin',
      verificationStatus: 'Partially Verified',
    },
    result2017: {
      winner: 'SAD Candidate',
      party: 'Shiromani Akali Dal',
      margin: 'Multi-thousand votes',
      note: 'SAD won before AAP surge',
      verificationStatus: 'Needs Verification',
    },
    result2012: {
      winner: 'Congress',
      party: 'INC',
      note: 'Congress historically held this seat',
      verificationStatus: 'Needs Verification',
    },
    keyTrend: 'AAP wave in 2022 with massive 75,277 margin; historically SAD stronghold before AAP surge; anti-incumbency may build against AAP',
  },

  // ==========================================================================
  // DEEP ELECTORAL HISTORY
  // ==========================================================================
  deepElectoralHistory: {
    winner: 'NEEDS VERIFICATION - winner name and party',
    runnerUp: 'NEEDS VERIFICATION',
    margin: 'NEEDS VERIFICATION',
    keyContestants: 'NEEDS VERIFICATION - full candidate list',
    context2017: 'NEEDS VERIFICATION - previous election results',
    verificationStatus: 'PARTIALLY VERIFIED - 2022 data from main dossier, others need verification',
  },

  // ==========================================================================
  // ELECTORAL TRENDS
  // ==========================================================================
  electoralTrends: {
    historicalPattern: 'Historically SAD stronghold before AAP surge in 2022',
    aapSurge: 'AAP won with massive 75,277 vote margin in 2022',
    antiIncumbency: 'Anti-incumbency may build against AAP due to broken promises',
  },

  // ==========================================================================
  // CASTE COMPOSITION
  // ==========================================================================
  casteComposition: {
    categories: [
      { category: 'Jat Sikh', estimatedPercentage: '28-32%' },
      { category: 'OBC (Tarkhan, Julaha, etc.)', estimatedPercentage: '18-22%' },
      { category: 'SC (Mazhabi, Ravidasia)', estimatedPercentage: '26-30%' },
      { category: 'Hindu Upper Caste', estimatedPercentage: '12-15%' },
      { category: 'Muslim', estimatedPercentage: '2-4%' },
      { category: 'Others', estimatedPercentage: '5-8%' },
    ],
    totalSikhPercentage: '28-32%',
    totalHinduPercentage: '12-15%',
    totalSCPercentage: '26-30%',
    totalOtherPercentage: '5-8%',
    keyDemographics: [
      'Jat Sikh - agricultural dominant caste',
      'OBC (Tarkhan, Julaha) - significant vote bank',
      'SC (Mazhabi, Ravidasia) - decisive in close contests',
    ],
  },

  // ==========================================================================
  // DEMOGRAPHICS DEEP
  // ==========================================================================
  demographicsDeep: {
    districtLevel: {
      totalPopulation: '1,655,169',
      male: '878,029',
      female: '777,140',
      rural: '68.8%',
      urban: '31.2%',
      source: '2011 Census - Sangrur District',
    },
    communityComposition: {
      description: 'NEEDS VERIFICATION - Sunam specific',
      verificationStatus: 'Needs Verification',
    },
  },

  // ==========================================================================
  // ELECTORATE DATA
  // ==========================================================================
  electorateData: {
    totalElectors: '~145,000-155,000',
    voterTurnout2022: '~76-78%',
    turnoutPercentage: '76-78%',
  },

  // ==========================================================================
  // VOTER OUTREACH
  // ==========================================================================
  voterOutreach: {
    stateAverage: '72%',
    constituencySpecific: 'NEEDS VERIFICATION',
    verificationStatus: 'Needs Verification',
  },

  // ==========================================================================
  // KEY ISSUES
  // ==========================================================================
  keyIssues: {
    issues: [
      {
        rank: 1,
        title: 'Drug Menace',
        description: 'Primary concern; Sunam region has high addiction rates. Malwa region affected. Youth addiction concern.',
      },
      {
        rank: 2,
        title: 'Agricultural Distress',
        description: 'Wheat/paddy MSP issues, stubble management, groundwater depletion. Farmer distress unresolved.',
      },
      {
        rank: 3,
        title: 'Unemployment',
        description: 'Youth emigration, lack of industrial jobs. Broken promises on jobs - where are the 50 lakh jobs?',
      },
      {
        rank: 4,
        title: 'Road Infrastructure',
        description: 'Rural roads in disrepair. Development gaps in healthcare and education.',
      },
      {
        rank: 5,
        title: 'Healthcare',
        description: 'Lack of tertiary care facilities. Governance collapse in health - hospital supplies lacking.',
      },
    ],
  },

  // ==========================================================================
  // DEEP LOCAL ISSUES
  // ==========================================================================
  deepLocalIssues: {
    issueCategories: [
      'Drug Crisis',
      'Agrarian Distress',
      'Development Gaps',
    ],
    details: {
      drugCrisis: 'Malwa region affected. Youth addiction concern. Uncontrolled according to intelligence reports.',
      agrarianDistress: 'MSP issues, groundwater depletion, stubble management. Unresolved farmer distress.',
      developmentGaps: 'Healthcare, education, employment gaps. Governance failures.',
    },
  },

  // ==========================================================================
  // PUBLIC SENTIMENT
  // ==========================================================================
  publicSentiment: {
    perceivedMood: 'Anti-incumbency building against AAP due to broken promises',
    sentimentDrivers: [
      'Drug crisis unaddressed by incumbent',
      'Farmers still waiting for MSP payments',
      'Broken Rs 1000/month promise',
      'Unemployment not addressed',
      'Sunam lost its pride - no development visible',
    ],
    verificationStatus: 'Partially Verified - based on main dossier intelligence',
  },

  // ==========================================================================
  // POLITICAL LEADERSHIP
  // ==========================================================================
  politicalLeadership: {
    currentMLA: {
      name: 'NEEDS VERIFICATION - current MLA 2022-2027',
      term: '2022-2027',
      verificationStatus: 'Needs Verification',
    },
    keyFigures: {
      description: 'NEEDS VERIFICATION - local leaders',
      verificationStatus: 'Needs Verification',
    },
  },

  // ==========================================================================
  // CONGRESS STRATEGY
  // ==========================================================================
  congressStrategy: {
    strategicPosition: {
      currentPosition: 'Third place / weak opposition',
      performance2022: 'Poor; lost deposit in many reports',
      strengths: {
        strengths: [
          'Historical Congress support among SC communities and Tarkhan OBCs',
          'Anti-AAP sentiment building due to broken promises',
          'Drug issue not addressed by incumbent',
          'Caste arithmetic: OBC + SC coalition can win with proper candidate',
        ],
      },
      weaknesses: {
        weaknesses: [
          'No strong local Congress leader visible',
          'AAP wave still relatively strong',
          'Organizational weakness',
        ],
      },
    },
    assessment: {
      opportunity: 'AAP wave may subside; anti-incumbency building; OBC + SC coalition can win with proper candidate',
      challenges: [
        'Need strong local candidate',
        'AAP organizational presence',
        'Historical ties to anti-incumbency against various parties',
      ],
    },
  },

  // ==========================================================================
  // RECOMMENDED CANDIDATE PROFILE
  // ==========================================================================
  recommendedCandidateProfile: {
    table: [
      { attribute: 'Caste', idealProfile: 'Mazhabi Sikh or Ravidasia SC candidate preferred' },
      { attribute: 'Profile', idealProfile: 'Youth leader with clean image, preferably from farming background' },
      { attribute: 'Attributes', idealProfile: 'Strong anti-drugs stance, connected to agricultural community' },
      { attribute: 'Background', idealProfile: 'First-time candidate with social work background preferred over dynastic politician' },
    ],
    castePreference: 'Mazhabi Sikh or Ravidasia SC candidate preferred',
    backgroundPreference: 'First-time candidate with social work background preferred over dynastic politician',
    keyAttributes: [
      'Youth leader with clean image',
      'From farming background',
      'Strong anti-drugs stance',
      'Connected to agricultural community',
    ],
  },

  // ==========================================================================
  // ATTACK LINES
  // ==========================================================================
  attackLines: {
    lines: [
      {
        rank: 1,
        title: 'Drug Crisis',
        line: 'Drugs continue to flow despite tall claims - 75,277 votes cannot buy safety',
      },
      {
        rank: 2,
        title: 'Farmer Distress',
        line: 'Farmers still waiting for MSP payments - where is the Rs 1000/month promise?',
      },
      {
        rank: 3,
        title: 'Broken Promises',
        line: 'Broken promises on jobs - where are the 50 lakh jobs?',
      },
      {
        rank: 4,
        title: 'Governance Failure',
        line: 'Governance collapse in health - hospital supplies lacking',
      },
      {
        rank: 5,
        title: 'Lost Pride',
        line: 'Sunam lost its pride - no development visible on ground',
      },
    ],
  },

  // ==========================================================================
  // DEEP ATTACK LINES
  // ==========================================================================
  deepAttackLines: {
    lines: [
      'Drug Crisis: Uncontrolled',
      'Farmer Distress: Unresolved',
      'Broken Promises: Rs 1000/month',
      'Governance Failures',
      'Unemployment',
    ],
  },

  // ==========================================================================
  // GOVERNMENT SCHEMES
  // ==========================================================================
  governmentSchemes: {
    schemes: [
      {
        name: 'NEEDS VERIFICATION',
        beneficiaryData: 'NEEDS VERIFICATION',
        verificationStatus: 'Needs Verification',
      },
    ],
    verificationStatus: 'Needs Verification - beneficiary data required',
  },

  // ==========================================================================
  // INTELLIGENCE DATA
  // ==========================================================================
  intelligenceData: {
    gaps: {
      gaps: [
        { item: 'Full 2022 results - all candidate vote counts', priority: 'High' },
        { item: '2017 and earlier results', priority: 'High' },
        { item: 'Demographics - Sunam specific', priority: 'High' },
        { item: 'Local political mapping', priority: 'High' },
        { item: 'Scheme beneficiaries', priority: 'Medium' },
      ],
      verificationItems: [
        { item: 'Winner and margin verification', priority: 'High' },
        { item: 'Demographics - Sunam specific', priority: 'High' },
        { item: 'Local political mapping', priority: 'High' },
        { item: 'Scheme beneficiaries', priority: 'Medium' },
      ],
    },
    researchPriorities: {
      priorities: [
        'Identify winner and margin',
        'Analyze voter segments',
        'Map influential families',
      ],
    },
  },

  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    id: 'AC101-Sunam',
    topic: 'Sunam Assembly Constituency - Deep Research',
    tier: 2,
    date: '20 May 2026',
    agent: 'Research-Orchestrator',
    sourcesConsulted: [
      'grokipedia.com',
      'cnbctv18.com',
      'bbc.com',
      'adrindia.org',
    ],
    verificationStatus: 'PARTIALLY VERIFIED',
    dataCurrency: 'As of May 2026 (2022 election data is most recent)',
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: {
      sources: [
        'AC101-Sunam.md (Main Dossier)',
        'AC101-Sunam-deep.md (Deep Research)',
        'Grokipedia Sunam',
        'CNBC TV18 Sunam',
        'BBC',
        'ADR India',
      ],
      urls: [
        'https://grokipedia.com/page/sunam_assembly_constituency',
        'https://www.cnbctv18.com/politics/sunam-election-result-2022-live-how-to-check-sunam-legislative-assembly-election-vidhan-sabha-winners-losers-vote-margin-news-updates-12663842.htm',
      ],
    },
    compiledDate: '21 May 2026',
    verificationStatus: 'PARTIALLY VERIFIED',
    dataCurrency: 'As of 19-21 May 2026',
  },
};
