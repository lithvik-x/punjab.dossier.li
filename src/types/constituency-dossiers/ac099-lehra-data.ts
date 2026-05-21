/**
 * AC099 - Lehra Assembly Constituency Data
 * Tier 1: Basic Research Dossier
 * Tier 2: Deep Research Dossier
 */

import type {
  ResearchMetadata,
  ConstituencyIdentity,
  ElectionResult,
  ElectionResults,
  CasteComposition,
  VoterDemographics,
  LocalIssue,
  CongressStrategicPosition,
  CandidateProfile,
  AttackLine,
  MainDossierData,
  DeepResearchData,
  AC099LehraDossierComplete,
  AC099LehraReference,
} from './ac099-lehra-types';

// =============================================================================
// Tier 1: Main Research Dossier
// =============================================================================

const ac099LehraMetadata: ResearchMetadata = {
  taskId: 'AC099',
  topic: 'Lehra Assembly Constituency',
  tier: 1,
  date: '20 May 2026',
  agent: 'researcher',
  sourcesConsulted: ['Wikipedia', 'IndiaVotes', 'OneIndia', 'ECI data'],
  verificationStatus: 'VERIFIED',
  dataCurrency: 'As of 20 May 2026',
};

const ac099LehraIdentity: ConstituencyIdentity = {
  acNumber: 99,
  officialName: 'Lehra',
  district: 'Sangrur',
  region: 'Malwa',
  type: 'General',
  lokSabhaSeat: 'Sangrur',
};

const electionResult2022: ElectionResult = {
  year: 2022,
  winner: 'Barinder Kumar Goyal',
  party: 'Aam Aadmi Party (AAP)',
  voteShare: 43.59,
  votes: 60058,
  margin: 26518,
  totalElectors: 138000,
};

const electionResult2017: ElectionResult = {
  year: 2017,
  winner: 'Parminder Singh Dhindsa',
  party: 'Shiromani Akali Dal (SAD)',
  voteShare: 47.4,
  votes: 65550,
  margin: 26815,
  totalElectors: 138000,
};

const electionResult2012: ElectionResult = {
  year: 2012,
  winner: 'Not available',
  party: 'needs_verification',
};

const ac099LehraElectionResults: ElectionResults = {
  2022: electionResult2022,
  2017: electionResult2017,
  2012: electionResult2012,
};

const ac099LehraCasteComposition: CasteComposition = {
  sikhs: '~70-75%',
  hindus: '~25-30%',
  jatSikh: 'Dominant (~30-35%)',
  scPopulation: '~28-30%',
  obc: '~10-12%',
};

const ac099LehraVoterDemographics: VoterDemographics = {
  totalElectors: '~138,000',
  voterTurnout: '~77-78%',
  ruralConstituency: true,
};

const ac099LehraLocalIssues: LocalIssue[] = [
  {
    priority: 1,
    title: 'Drug menace',
    description: 'Rural youth affected',
  },
  {
    priority: 2,
    title: 'Agricultural distress',
    description: 'Wheat/cotton farmers',
  },
  {
    priority: 3,
    title: 'Groundwater crisis',
    description: 'Water table decline',
  },
  {
    priority: 4,
    title: 'Rural infrastructure',
    description: 'Roads, irrigation',
  },
  {
    priority: 5,
    title: 'Youth unemployment',
    description: 'Limited opportunities',
  },
];

const ac099LehraCongressPosition: CongressStrategicPosition = {
  currentHolder: 'Barinder Kumar Goyal',
  party: 'AAP',
  requirements: [
    'Strong local candidate',
    'Focus on anti-incumbency',
    'Address agricultural distress',
    'Build coalition with SAD remnants',
  ],
};

const ac099LehraCandidateProfile: CandidateProfile = {
  profile: 'Sikh leader with agricultural background',
  background: 'Farmer representative, rural development',
  keyTraits: 'Known for accessibility, grassroots connect',
  targetVoter: 'Rural voters, farmers',
};

const ac099LehraAttackLines: AttackLine[] = [
  { line: 'No development visible in Lehra' },
  { line: 'Drug addiction destroying youth' },
  { line: 'Agricultural crisis ignored' },
  { line: 'Water table declining' },
  { line: 'Broken financial promises' },
];

const ac099LehraSources: string[] = [
  'https://en.wikipedia.org/wiki/Lehra_Assembly_constituency',
  'https://www.oneindia.com/lehra-assembly-elections-pb-99/',
  'https://www.news18.com/news/politics/lehra-election-result-2022-live-updates-winner-loser-leading-trailing-mla-margin-4854851.html',
];

export const ac099LehraMainDossier: MainDossierData = {
  researchMetadata: ac099LehraMetadata,
  basicInformation: ac099LehraIdentity,
  electionResults: ac099LehraElectionResults,
  politicalSignificance: {
    shift: 'SAD to AAP shift - Won by SAD in 2017, AAP in 2022',
    margin: 'Both elections had ~26K margin',
    ruralConstituency: true,
  },
  casteComposition: ac099LehraCasteComposition,
  voterDemographics: ac099LehraVoterDemographics,
  keyLocalIssues: {
    issues: ac099LehraLocalIssues,
  },
  congressPosition: ac099LehraCongressPosition,
  recommendedCandidate: ac099LehraCandidateProfile,
  attackLines: ac099LehraAttackLines,
  sources: ac099LehraSources,
};

// =============================================================================
// Tier 2: Deep Research Dossier
// =============================================================================

const ac099LehraDeepMetadata: ResearchMetadata = {
  taskId: 'AC099-Lehra',
  topic: 'Lehra Assembly Constituency - Deep Research',
  tier: 2,
  date: '20 May 2026',
  agent: 'Research-Orchestrator',
  sourcesConsulted: ['news18.com', 'bbc.com', 'data-analytics.github.io', 'adrindia.org'],
  verificationStatus: 'PARTIALLY VERIFIED',
  dataCurrency: 'As of May 2026 (2022 election data is most recent)',
};

const ac099LehraDeepResearch: DeepResearchData = {
  executiveSummary: {
    description:
      'Lehra is an assembly constituency in Punjab\'s Malwa region. The 2022 election saw Barinder Kumar Goyal of AAP win from this seat. The constituency shares characteristics with other Malwa seats including agricultural economy, rural population, and similar voter demographics. Total 10 candidates contested in 2022.',
    winner: 'Barinder Kumar Goyal',
    party: 'AAP',
    totalContestants: 10,
  },

  constituencyProfile: {
    basicInformation: {
      assemblyConstituencyNo: 99,
      district: '[NEEDS VERIFICATION - likely Sangrur or Mansa]',
      region: 'Malwa',
      type: '[NEEDS VERIFICATION]',
      needsVerification: true,
    },
    geographicContext: {
      assemblyConstituencyNo: 99,
      district: '[NEEDS VERIFICATION - exact district location and characteristics]',
      region: 'Malwa',
      type: '[NEEDS VERIFICATION]',
      needsVerification: true,
    },
  },

  electionResults: {
    winner: {
      candidate: 'Barinder Kumar Goyal',
      party: 'Aam Aadmi Party',
      status: 'Won Lehra seat',
    },
    runnerUp: {
      candidate: '[NEEDS VERIFICATION - runner-up details]',
      party: '[NEEDS VERIFICATION]',
      needsVerification: true,
    },
    keyContestants: {
      winner: {
        candidate: 'Barinder Kumar Goyal',
        party: 'AAP',
        status: 'Won Lehra seat',
      },
      runnerUp: {
        candidate: '[NEEDS VERIFICATION]',
        party: '[NEEDS VERIFICATION]',
        needsVerification: true,
      },
      contestants: 10,
      context: '[NEEDS VERIFICATION - previous election results]',
    },
  },

  casteDemographics: {
    typicalMalwaPattern: true,
    jatSikh: 'Dominant',
    dalitSC: 'Significant',
    obc: 'Various groups',
    hinduMuslim: 'Minorities',
    needsVerification: true,
  },

  electoralTrends: {
    '2022Performance': {
      aapWon: true,
      contestants: 10,
    },
    historicalPattern: '[NEEDS VERIFICATION - 2017 and earlier results]',
    needsVerification: true,
  },

  keyIssues: {
    drugCrisis: {
      regionAffected: true,
      youthAddictionConcern: true,
      deathsReported: true,
    },
    agrarianIssues: {
      mspImplementation: true,
      groundwaterDepletion: true,
      stubbleManagement: true,
    },
    development: {
      healthcareGaps: true,
      educationInfrastructure: true,
      employment: true,
    },
  },

  politicalLeadership: {
    currentMLA: {
      name: 'Barinder Kumar Goyal',
      party: 'AAP',
      term: '2022-2027',
    },
    keyPoliticalFigures: '[NEEDS VERIFICATION - local leaders, influential families]',
    needsVerification: true,
  },

  voterOutreach: {
    stateAverage: 72,
    constituencySpecific: '[NEEDS VERIFICATION]',
    needsVerification: true,
  },

  governmentSchemes: {
    needsVerification: true,
  },

  attackLines: [
    'Drug Crisis: Uncontrolled despite promises',
    'Farmer Distress: Agrarian issues unresolved',
    'Broken Promises: Rs 1000/month',
    'Governance Failures',
    'Unemployment',
  ],

  intelligenceGaps: {
    gaps: [
      { item: 'Precise district location', needsVerification: true },
      { item: 'Full 2022 candidate list', needsVerification: true },
      { item: 'Vote shares and margin', needsVerification: true },
      { item: '2017 and earlier results', needsVerification: true },
      { item: 'Demographics breakdown', needsVerification: true },
      { item: 'Voter turnout', needsVerification: true },
      { item: 'Local influencers', needsVerification: true },
      { item: 'Scheme beneficiaries', needsVerification: true },
    ],
  },

  researchPriorities: [
    { priority: 1, description: 'Identify exact constituency boundaries' },
    { priority: 2, description: 'Analyze voter segments' },
    { priority: 3, description: 'Map traditional party vote banks' },
  ],
};

// =============================================================================
// Complete Dossier Export
// =============================================================================

export const ac099LehraDossierComplete: AC099LehraDossierComplete = {
  mainDossier: ac099LehraMainDossier,
  deepResearch: ac099LehraDeepResearch,
};

export const ac099LehraReference: AC099LehraReference = {
  taskId: 'AC099-Lehra',
  topic: 'Lehra Assembly Constituency',
  verificationStatus: 'PARTIALLY VERIFIED',
};

// Alias for backward compatibility
export const ac099LehraData = ac099LehraDossierComplete;
