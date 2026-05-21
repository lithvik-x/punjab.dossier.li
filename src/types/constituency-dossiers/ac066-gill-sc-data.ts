/**
 * AC066-Gill-SC Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC066-Gill-SC.md, AC066-Gill-deep.md
 */

import type {
  Ac066GillScDossier,
  Ac066GillDeepDossier,
  Ac066GillScCombinedData,
  VerificationStatus,
  PartyPerformanceTrend,
} from './ac066-gill-sc-types';

// ============================================
// MAIN DOSSIER (from AC066-Gill-SC.md)
// ============================================

export const ac066GillScDossier: Ac066GillScDossier = {
  metadata: {
    acNumber: 66,
    name: 'Gill (SC)',
    nameClean: 'Gill',
    district: 'Ludhiana',
    region: 'Malwa',
    parliamentarySegment: 'Ludhiana',
    type: 'SC',
    date: '20 May 2026',
  },

  overview: {
    description:
      'Gill (SC) is a reserved assembly constituency for Scheduled Castes in Ludhiana district, Malwa region. Located within Ludhiana Lok Sabha constituency. This is primarily a rural/semi-urban constituency with significant SC population.',
    urbanRuralComposition: 'Rural/semi-urban with significant SC population',
    note: 'Verification needed for exact winner and margin',
  },

  electionResults: {
    year2022: {
      year: 2022,
      winner: 'MLA from AAP',
      party: 'AAP',
      margin: 'Congress was competitive',
    },
    year2017: {
      year: 2017,
      winner: 'needs_verification',
      party: 'needs_verification',
      margin: 'needs_verification',
    },
    year2012: {
      year: 2012,
      winner: 'needs_verification',
      party: 'needs_verification',
      margin: 'needs_verification',
    },
  },

  historicalPattern: {
    congressStrength: 'Congress historically strong in SC reserved seats',
    aapGains: 'AAP made significant gains in 2022',
    competitionPattern: 'Both parties compete aggressively for SC votes',
  },

  casteComposition: {
    scPopulation: '~25-28% of district',
    majorCommunities: [
      { name: 'Mazhabi Sikh', percentage: '~10% of state pop' },
      { name: 'Ramdassia/Ravidassia', percentage: '~8-9%' },
      { name: 'Balmiki', percentage: '~3-4%' },
      { name: 'Ad Dharmi', percentage: 'Another significant group' },
      { name: 'Bazigar', percentage: 'Smaller community' },
    ],
    communityDetails: [
      {
        community: 'Mazhabi Sikh',
        description: 'Primarily agricultural laborers, rural',
      },
      {
        community: 'Ramdassia',
        description: 'Previously known as Chamar, now diverse occupations',
      },
      {
        community: 'Balmiki',
        description: 'Concentrated in urban/peri-urban areas',
      },
      {
        community: 'Ad Dharmi',
        description: 'Distributed across rural areas',
      },
    ],
  },

  demographics: {
    // Basic demographics from deep research
    population: {
      totalPopulation: 'needs_verification',
      townPopulation: '~9,602 (Census 2011)',
      scPercentage: '~25% SC population (Census 2011)',
    },
    religiousComposition: {
      sikh: 'Majority (Malwa region typically 55-60% Sikh)',
      hindu: 'Significant minority (35-40%)',
      muslim: 'Small minority',
      christian: 'Small minority',
      sources: 'District-level data for Ludhiana',
    },
    stateDemographics: {
      categories: [
        { category: 'Sikh', percentage: '57.7%' },
        { category: 'Hindu', percentage: '38.5%' },
        { category: 'Muslim', percentage: '1.9%' },
        { category: 'Christian', percentage: '1.3%' },
        { category: 'SC (Dalit)', percentage: '31.9%' },
        { category: 'Upper Caste (Jat, Khatri, etc.)', percentage: '33.0%' },
      ],
    },
    // Caste breakdown
    casteComposition: {
      sc: '~25-28% of district',
      general: 'Upper castes including Jats, Khatris, Aroras',
      obc: 'needs_verification',
    },
  },

  keyLocalIssues: {
    issues: [
      { issue: 'Land Rights', description: 'Agricultural land issues for SC community' },
      { issue: 'Employment', description: 'Limited formal sector jobs' },
      { issue: 'Drug Addiction', description: 'Severe impact on SC youth' },
      { issue: 'Education', description: 'Access to quality education' },
      { issue: 'Health', description: 'Healthcare facilities in rural areas' },
      { issue: 'Caste Discrimination', description: 'Social issues persist' },
      { issue: 'MGNREGA', description: 'Employment guarantee implementation' },
    ],
  },

  scCommunityIssues: {
    issues: [
      'Land Distribution: Post-independence land reforms incomplete',
      'Manual Scavenging: Still exists in some areas',
      'Bonded Labor: Some cases reported',
      'Education: High dropout rates among SC students',
      'Political Representation: SC MLAs effectiveness matters',
    ],
    notes: 'SC reserved seats require dedicated community outreach',
  },

  congressStrategicPosition: {
    currentStatus:
      '2022: Lost to AAP in many SC reserved seats; Historical: Congress strong among SC voters; Challenge: AAP welfare schemes appeal',
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
      { attribute: 'Sub-caste', value: 'Mazhabi or Ramdassia preferred' },
      { attribute: 'Profile', value: 'Socially active leader with community roots' },
      { attribute: 'Background', value: 'Youth leader OR experienced worker' },
      { attribute: 'Priority', value: 'Connect with SC voter at village level' },
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
      'Welfare Schemes: Only announcements, no implementation',
      'Drug Menace: SC youth most affected',
      'Education: SC children lack quality access',
      'Employment: Schemes dont reach target',
      'Land: SC land rights issues unresolved',
    ],
    congressNarrative: [
      'AAP gives advertisements, Congress delivers rights',
      'SC community deserves real empowerment, not photo ops',
      'Your land, your jobs, your future: Congress保证',
    ],
  },

  researchNotes: {
    notes: [
      'SC reserved seats require dedicated community outreach',
      'Traditional Congress voter base among SC',
      'AAP made inroads with welfare narrative',
      '2027: Congress must reconnect with SC voters',
    ],
  },
};

// ============================================
// DEEP RESEARCH DOSSIER (from AC066-Gill-deep.md)
// ============================================

const partyPerformanceTrend: PartyPerformanceTrend[] = [
  { year: 2022, aap: '[W]', inc: '[2nd]', sad: '[3rd]', bjp: '[4th]' },
  { year: 2017, aap: '[LOST]', inc: '[W/L]', sad: '[W/L]', bjp: '[LOST]' },
];

export const ac066GillDeepDossier: Ac066GillDeepDossier = {
  metadata: {
    dossierId: 'AC066-Gill',
    topic: 'Gill Assembly Constituency (AC066), Punjab',
    tier: 2,
    date: '20 May 2026',
    dataCurrency: 'As of May 2026 | Election Data: 2022',
    sourcesConsulted: [
      'Web search (7 queries)',
      'CEO Punjab',
      'IndiaVotes',
      'Wikipedia',
      'ADR Report',
    ],
    verificationStatus: 'PARTIALLY VERIFIED - Additional verification needed for vote shares',
  },

  executiveSummary:
    'Gill (AC066) is a Scheduled Caste (SC) reserved assembly constituency located in Ludhiana district, Malwa region of Punjab. The constituency is part of the Ludhiana parliamentary constituency for national elections. In the 2022 Punjab Legislative Assembly elections, the Aam Aadmi Party (AAP) won this seat as part of their historic landslide victory, sweeping 92 out of 117 seats in the state.',

  constituencyProfile: {
    basicDetails: {
      acNumber: 66,
      name: 'Gill (SC)',
      nameClean: 'Gill',
      district: 'Ludhiana',
      region: 'Malwa',
      parliamentarySegment: 'Ludhiana',
      type: 'SC',
      date: '20 May 2026',
    },
    geographicBoundaries: {
      description:
        'Gill assembly constituency encompasses areas surrounding the town of Gill, which is an industrial and agricultural region in southern Ludhiana district.',
      borderingConstituencies: ['Payal', 'Dakha', 'Raikot'],
      keyTowns: ['Gill', 'Various villages in Payal tehsil'],
      agriculturalProfile:
        'Wheat and paddy cultivation dominant; also industrial presence due to proximity to Ludhiana',
    },
    urbanRuralComposition: {
      classification: 'Predominantly rural agrarian constituency',
      keyTowns: ['Gill', 'Various villages in Payal tehsil'],
      agriculturalProfile:
        'Wheat and paddy cultivation dominant; also industrial presence due to proximity to Ludhiana',
    },
  },

  electionResults: {
    winnerRunnerUp: {
      winner: 'needs_verification',
      party: 'Aam Aadmi Party (AAP)',
      runnerUp: 'needs_verification',
      margin: 'needs_verification',
    },
    voterTurnout: {
      year2022: '~60.95% (based on CEO Punjab data showing 117,539 votes out of 192,838 electors for a booth-level sample)',
      year2017: 'needs_verification',
      trend: 'needs_verification',
    },
    partyPerformanceTrend,
  },

  demographics: {
    population: {
      totalPopulation: 'needs_verification',
      townPopulation: '~9,602 (Census 2011)',
      scPercentage: 'Gill town has ~25% SC population (Census 2011)',
    },
    religiousComposition: {
      sikh: 'Majority religion (Malwa region typically 55-60% Sikh)',
      hindu: 'Significant minority (35-40%)',
      muslim: 'Small minorities',
      christian: 'Small minorities',
      sources: 'District-level data for Ludhiana',
    },
    stateDemographics: {
      categories: [
        { category: 'Sikh', percentage: '57.7%' },
        { category: 'Hindu', percentage: '38.5%' },
        { category: 'Muslim', percentage: '1.9%' },
        { category: 'Christian', percentage: '1.3%' },
        { category: 'SC (Dalit)', percentage: '31.9%' },
        { category: 'Upper Caste (Jat, Khatri, etc.)', percentage: '33.0%' },
      ],
    },
    casteComposition: {
      sc: 'Gill town has ~25% SC population (Census 2011)',
      general: 'Upper castes including Jats, Khatris, Aroras',
      obc: 'needs_verification',
    },
  },

  keyIssuesGrievances: {
    primaryIssues: [
      {
        issue: 'Drug Menace',
        description:
          'Ludhiana district, including Gill constituency, faces severe drug abuse issues particularly among rural youth. Punjab has been described as "awash in drugs" with easy availability of heroin and other substances.',
        impact: 'Severe impact on rural youth',
      },
      {
        issue: 'Unemployment',
        description:
          'Youth unemployment is a critical issue, with economic decline coinciding with rising drug abuse fueled by lack of employment opportunities.',
        impact: 'Critical for youth voters',
      },
      {
        issue: 'Agricultural Distress',
        description:
          'Issues related to MSP (Minimum Support Price), stubble management, groundwater depletion affecting farmers.',
        impact: 'Affects farming community',
      },
      {
        issue: 'Governance Quality',
        description: 'Quality of healthcare and education in rural areas remains a concern.',
        impact: 'Affects quality of life',
      },
    ],
    secondaryIssues: [
      'Road infrastructure in rural areas',
      'Irrigation facility improvements needed',
      'Electricity and rural electrification issues',
    ],
  },

  politicalLeadership: {
    currentMLA: {
      name: 'needs_verification',
      party: 'Aam Aadmi Party',
      term: '2022-2027',
    },
    localPoliticalFigures: 'needs_verification',
    districtLeadership: {
      ludhianaDistrictAdministration: 'Deputy Commissioner',
      ppccLeadership: 'needs_verification',
      sadLeadership: 'needs_verification',
      bjpPunjabLeadership: 'Sunil Jakhar (President)',
    },
  },

  governmentSchemes: {
    healthSchemes: [
      {
        name: 'Ayushman Bharat - Punjab (Mukh Mantri Sehat Bima Yojana)',
        description:
          'Provides free hospital care up to Rs 10 lakh for families.',
        source: 'Punjab State Health Agency',
      },
      {
        name: 'Mukhyamantri Sehat Yojana',
        description: 'Cashless health insurance cover for 65% of Punjab population.',
      },
    ],
    socialSecuritySchemes: [
      {
        name: 'Punjab Ashirwad Scheme',
        description: 'Financial support for girls marriage',
      },
      {
        name: 'Shagun Scheme',
        description: 'Financial assistance to beneficiaries at various stages',
      },
    ],
    agriculturalSchemes: 'needs_verification',
    beneficiaryStatistics: {
      totalAyushmanCards: 'needs_verification',
      schemeCoverage: 'needs_verification',
    },
  },

  electoralHistory: {
    previousWinners: [
      { year: 2022, winner: 'needs_verification', party: 'needs_verification', margin: 'needs_verification' },
      { year: 2017, winner: 'needs_verification', party: 'needs_verification', margin: 'needs_verification' },
      { year: 2012, winner: 'needs_verification', party: 'needs_verification', margin: 'needs_verification' },
    ],
    trendAnalysis:
      '2022: AAP wave swept Malwa region including Gill; 2017: needs_verification; 2012: needs_verification',
  },

  voterEcosystem: {
    votingPatterns: {
      constituencyClassification: 'Swing Constituency',
      dalitVote:
        'Crucial voting bloc given SC-reserved status',
      farmerVote: 'Agricultural community concerns on MSP, stubble',
      antiIncumbency:
        'Malwa region showed significant anti-incumbency against SAD-BJP government in 2022',
    },
    voterDemographics: {
      youngVoters: 'Significant portion, concerned about unemployment and drugs',
      womenVoters: 'Active participation, approximately 48-49% of electorate',
      ruralElectorate: 'Dominant voting block',
    },
  },

  competitiveLandscape: {
    keyContenders: [
      {
        party: 'Aam Aadmi Party (AAP)',
        description: 'Incumbent, anti-corruption narrative',
        position: '1st',
      },
      {
        party: 'Indian National Congress (INC)',
        description: 'Opposition, trying to regain ground',
        position: '2nd',
      },
      {
        party: 'Shiromani Akali Dal (SAD)',
        description: 'Historical presence, alliance with BJP',
        position: '3rd',
      },
      {
        party: 'Bharatiya Janata Party (BJP)',
        description: 'Limited local base but part of SAD alliance',
        position: '4th',
      },
    ],
    attackLinesAAP: [
      {
        category: 'Broken Promises',
        description: 'Broken promises (Rs 1000/month for women, etc.)',
      },
      {
        category: 'Drug Crisis',
        description:
          'Drug crisis persistence despite AAPs "naash" tagline',
      },
      {
        category: 'Governance Failures',
        description: 'Governance failures in health and education',
      },
      {
        category: 'Economic Decline',
        description: 'Economic decline',
      },
    ],
    attackLinesOpposition: 'needs_verification',
  },

  intelligenceGaps: {
    dataRequiringVerification: [
      'Exact 2022 winner name and vote share for Gill AC066',
      '2017 and 2012 election results details',
      'Precise voter turnout 2017, 2012',
      'Caste composition at constituency level',
      'Local influential leaders and their party affiliations',
      'MLAs performance, attendance, constituency development',
      'Specific schemes and beneficiary numbers',
      'Any riots or significant events in constituency history',
    ],
    requiredAdditionalSearches: [
      'Gill Punjab 2022 winner MLA name vote share',
      'Gill Punjab 2017 2012 election results MLA',
      'Gill Ludhiana constituency candidate list 2022 2017',
      'Gill Punjab influential leaders sarpanch political',
    ],
  },

  recommendations: {
    targetVoterSegments: [
      {
        segment: 'Dalit Voters',
        description:
          'Need strong dalit leadership candidate; BSP may cut into this vote',
        priority: 'High',
      },
      {
        segment: 'Rural Youth',
        description: 'Employment and drug rehabilitation promises',
        priority: 'High',
      },
      {
        segment: 'Farmers',
        description: 'MSP guarantees, debt relief',
        priority: 'Medium',
      },
    ],
    candidateProfileRecommendation: {
      caste: 'SC candidate (mandatory for reserved seat)',
      profile: 'Rural connect, clean image, youth-oriented',
      background: 'Agricultural background preferred; anti-drug stance essential',
    },
    keyMessages: [
      'Drug crisis unaddressed under AAP',
      'Broken promises on women sops',
      'Governance failures in health and jobs',
    ],
    allianceConsiderations:
      'BSP alliance could help consolidate dalit votes but may alienate others; needs_assessment of 2017-2022 vote split patterns',
  },
};

// ============================================
// COMBINED DATA EXPORT
// ============================================

export const ac066GillScData: Ac066GillScCombinedData = {
  dossier: ac066GillScDossier,
  deepDossier: ac066GillDeepDossier,
  researchDate: '20 May 2026',
  researchStatus: 'partial',
  verificationProgress: 35,
};

// Named exports for convenience
export const ac066GillScMainDossier = ac066GillScDossier;
export const ac066GillScDeepResearch = ac066GillDeepDossier;
export const ac066GillScComplete = ac066GillScData;
