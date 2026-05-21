/**
 * AC093-Bathinda-Rural-SC Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC093-Bathinda-Rural-SC.md, AC093-BathindaRural-deep.md
 */

import type {
  Ac093BathindaRuralScDossier,
  Ac093BathindaDeepDossier,
  Ac093BathindaRuralScCombinedData,
  VerificationStatus,
} from './ac093-bathinda-rural-sc-types';

// ============================================
// MAIN DOSSIER (from AC093-Bathinda-Rural-SC.md - Tier 1)
// ============================================

export const ac093BathindaRuralScDossier: Ac093BathindaRuralScDossier = {
  metadata: {
    acNumber: 93,
    name: 'Bathinda Rural (SC)',
    nameClean: 'Bathinda Rural',
    district: 'Bathinda',
    region: 'Malwa',
    parliamentarySegment: 'Bathinda',
    type: 'SC',
    date: '20 May 2026',
  },

  politicalSignificance: {
    scReservedSeat: 'Significant Dalit voter base',
    ruralConstituency: 'Agricultural area around Bathinda city',
    aapDominance: 'Strong performance in rural SC areas',
  },

  electionResults: {
    year2022: {
      year: 2022,
      winner: 'Amit Ratan Kotfatta',
      party: 'Aam Aadmi Party (AAP)',
      votePercentage: '53.7%',
      voteCount: 66096,
      margin: '35,479 votes',
      runnerUp: 'INC candidate',
      totalElectors: 158866,
      totalVotes: 124402,
      voterTurnout: '78.3%',
      source: 'IndiaVotes, OneIndia, MyNeta, ECI data',
    },
    year2017: {
      year: 2017,
      winner: 'needs_verification',
      party: 'needs_verification',
      totalElectors: '~153,000',
      source: 'Approximation based on district data',
    },
    year2012: {
      year: 2012,
      winner: 'needs_verification',
      party: 'needs_verification',
      margin: 'needs_verification',
    },
  },

  historicalPattern: {
    congressStrength: 'Congress historically competitive in SC reserved seats',
    aapGains: 'AAP made significant gains in 2022 with 53.7% vote share',
    competitionPattern: 'Both parties compete aggressively for SC votes',
  },

  casteComposition: {
    scPopulation: '~38-42% (dominant: Mazhabi, Ramdasia)',
    majorCommunities: [
      { name: 'Mazhabi', percentage: 'Dominant SC community' },
      { name: 'Ramdasia', percentage: 'Significant SC community' },
      { name: 'Jat Sikh', percentage: '~20-25%' },
      { name: 'Hindu General', percentage: '~10-15%' },
      { name: 'OBC', percentage: '~10-12%' },
    ],
    communityDetails: [
      {
        community: 'Mazhabi',
        description: 'Primarily agricultural laborers, rural',
      },
      {
        community: 'Ramdasia',
        description: 'Previously known as Chamar, now diverse occupations',
      },
      {
        community: 'Jat Sikh',
        description: 'Agricultural community, farmer families',
      },
    ],
  },

  demographics: {
    population: {
      totalPopulation: '~175,000',
      note: 'Approximation based on Census 2011 and electoral data',
    },
    casteComposition: {
      sc: '~38-42%',
      sikhs: '~65-70%',
      hindu: '~30-35%',
      obc: '~10-12%',
    },
    religiousComposition: {
      sikh: '~65%',
      hindu: '~33%',
      others: '~2%',
      sources: 'District-level data for Bathinda',
    },
  },

  keyLocalIssues: {
    issues: [
      { issue: 'Drug addiction', description: 'Rural SC youth affected' },
      { issue: 'Agricultural distress', description: 'Wheat/cotton farmers' },
      { issue: 'Land issues', description: 'Small landowner problems' },
      { issue: 'Rural infrastructure', description: 'Roads, water, electricity' },
      { issue: 'Health and education', description: 'Rural facility gaps' },
    ],
  },

  scCommunityIssues: {
    issues: [
      'SC Welfare: Employment, education, health',
      'Drug Crisis: Youth addiction affecting all communities',
      'Agricultural Distress: Small farmers, MSP',
      'Rural Infrastructure: Roads, electricity, water',
      'Unemployment: SC youth job opportunities',
    ],
    notes: 'SC reserved seats require dedicated community outreach',
  },

  congressStrategicPosition: {
    currentStatus:
      'AAP holds this seat - Amit Ratan Kotfatta won with 53.7% vote share. Congress needs strong SC candidate with grassroots connect.',
    challenges: [
      'Breaking AAP welfare narrative',
      'Addressing actual SC community concerns',
      'Fielding strong SC candidate with community connect',
      'Booth-level penetration in SC villages',
    ],
    opportunities: [
      'SC community dissatisfaction with AAP governance',
      'Land/employment issues unaddressed',
      'Traditional Congress-SC voter connect',
      'Local candidate who understands issues',
    ],
  },

  recommendedCandidateProfile: {
    idealCandidate: [
      { attribute: 'Caste', value: 'Must be from SC community' },
      { attribute: 'Sub-caste', value: 'Mazhabi or Ramdasia preferred' },
      { attribute: 'Profile', value: 'Agricultural background, Dalit rights background' },
      { attribute: 'Background', value: 'Farmer representative, rural development work' },
      { attribute: 'Key Traits', value: 'Known for rural development work' },
    ],
    selectionPriorities: [
      'Community recognition',
      'Booth-level network',
      'Understanding of SC issues',
      'Ability to mobilize voters',
    ],
  },

  attackLines: {
    vulnerabilities: [
      'Rural infrastructure still pathetic',
      'Drug addiction destroying SC youth',
      'Agricultural distress ignored',
      'SC reservation promises unfulfilled',
      'Health services inaccessible to rural SC',
    ],
    congressNarrative: [
      'AAP gives advertisements, Congress delivers rights',
      'SC community deserves real empowerment, not photo ops',
      'Your land, your jobs, your future: Congress',
    ],
  },

  researchNotes: {
    notes: [
      'SC reserved seat - significant Dalit voter base',
      'Rural agricultural constituency around Bathinda city',
      'AAP dominant with 53.7% vote share in 2022',
      'Congress needs strong SC candidate with grassroots connect',
      'Anti-incumbency can be targeted',
    ],
  },
};

// ============================================
// DEEP RESEARCH DOSSIER (from AC093-BathindaRural-deep.md - Tier 2)
// ============================================

export const ac093BathindaDeepDossier: Ac093BathindaDeepDossier = {
  metadata: {
    dossierId: 'AC093-Bathinda-Rural',
    topic: 'Bathinda Rural Assembly Constituency - Deep Research',
    tier: 2,
    date: '20 May 2026',
    agent: 'Constituency-Research-Agent',
    sourcesConsulted: [
      'Web searches on Punjab 2022 election results',
      'Demographics data',
      'Issues analysis',
    ],
    verificationStatus: 'PARTIALLY VERIFIED - requires local verification',
    dataCurrency: 'As of May 2026',
  },

  executiveSummary: {
    description:
      'Bathinda Rural (AC093) is a Scheduled Caste (SC) reserved assembly constituency in Bathinda district of Punjab\'s Malwa region. The constituency witnessed an AAP victory in 2022 with Amit Ratan Kotfatta winning. Key issues include SC community welfare, agricultural distress, and rural infrastructure.',
    keyHighlights: [
      'AAP won in 2022 with 53.7% vote share and 35,479 vote margin',
      'SC population dominant at ~55-60% of constituency',
      'Key issues: SC welfare, drug crisis, agricultural distress, rural infrastructure',
      'Congress can target anti-incumbency with strong SC candidate',
    ],
  },

  constituencyProfile: {
    basicDetails: {
      assemblyConstituencyNo: 93,
      district: 'Bathinda',
      region: 'Malwa (Central Punjab)',
      category: 'Scheduled Caste (SC)',
      parliamentaryConstituency: 'Bathinda (Lok Sabha)',
    },
    geographicBoundaries: {
      description: 'Rural agricultural area surrounding Bathinda city in Malwa region',
    },
  },

  electionResults2022: {
    winner: 'Amit Ratan Kotfatta',
    party: 'Aam Aadmi Party (AAP)',
    margin: '35,479 votes',
    turnout: '~72-75%',
    totalElectors: '~1,65,000',
  },

  electoralHistory: {
    year2022: {
      winner: 'Amit Ratan Kotfatta',
      party: 'AAP',
      margin: '35,479',
    },
    year2017: {
      winner: 'needs_verification',
      margin: 'needs_verification',
    },
    year2012: {
      winner: 'needs_verification',
      margin: 'needs_verification',
    },
  },

  demographics: {
    population: '~1,75,000',

    casteComposition: {
      sc: '~55-60% (dominant)',
      jatSikh: '~20-25%',
      hinduGeneral: '~10-15%',
      obc: '~5-10%',
    },

    religionDistribution: {
      sikh: '~65%',
      hindu: '~33%',
      others: '~2%',
    },
  },

  voterProfile: {
    turnout2022: '~72-75%',
    scVoters: '~55-60% (dominant)',
    ruralVoters: '~90-95%',
    electorCount: '~1,65,000',
  },

  primaryIssues: {
    issues: [
      { issue: 'SC Welfare: Employment, education, health' },
      { issue: 'Drug Crisis: Youth addiction affecting all communities' },
      { issue: 'Agricultural Distress: Small farmers, MSP' },
      { issue: 'Rural Infrastructure: Roads, electricity, water' },
      { issue: 'Unemployment: SC youth job opportunities' },
    ],
  },

  attackLinesForCongress: [
    'AAP failed on SC welfare promises',
    'Broken promises on employment',
    'Rural infrastructure neglected',
  ],

  outlook2027: {
    congressStrategy: [
      'Need strong SC candidate with grassroots connect',
      'Can target anti-incumbency against AAP',
      'SC community welfare as primary narrative',
    ],
    keyWinningStrategy: [
      {
        aspect: 'Candidate',
        description: 'SC candidate with strong community leadership',
      },
      {
        aspect: 'Primary Narrative',
        description: 'AAP failed on SC welfare promises',
      },
      {
        aspect: 'Target Voters',
        description: 'SC community, rural youth, small farmers',
      },
      {
        aspect: 'Grievance Focus',
        description: 'Employment, social welfare, drug crisis',
      },
    ],
  },

  intelligenceGaps: {
    dataRequiringVerification: [
      '2017 and earlier results',
      'Sub-caste composition',
      'Booth-wise analysis',
      'All 2022 candidate vote shares',
      'Current MLA performance',
    ],
  },

  recommendationsForCongress: [
    'Candidate: SC candidate with strong grassroots connect',
    'Primary Narrative: AAP failed on SC welfare',
    'Target Voters: SC community, rural youth',
    'Grievance Focus: Jobs, education, social welfare',
  ],
};

// ============================================
// COMBINED DATA EXPORT
// ============================================

export const ac093BathindaRuralScData: Ac093BathindaRuralScCombinedData = {
  dossier: ac093BathindaRuralScDossier,
  deepDossier: ac093BathindaDeepDossier,
  researchDate: '20 May 2026',
  researchStatus: 'partial',
  verificationProgress: 45,
};

// Named exports for convenience
export const ac093BathindaRuralScMainDossier = ac093BathindaRuralScDossier;
export const ac093BathindaRuralScDeepResearch = ac093BathindaDeepDossier;
export const ac093BathindaRuralScComplete = ac093BathindaRuralScData;
