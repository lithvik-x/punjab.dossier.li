/**
 * AC023 - Patti Assembly Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Sources: AC023-Patti.md, AC023-Patti-deep.md
 */

import type {
  ACA23PattiConstituencyDossier,
} from './ac023-patti-types';

export const ac023PattiData: ACA23PattiConstituencyDossier = {
  // ==========================================================================
  // BASIC INFORMATION (from AC023-Patti.md)
  // ==========================================================================
  basicInfo: {
    acNumber: 23,
    officialName: 'Patti',
    district: 'Tarn Taran',
    region: 'Majha',
    lokSabha: 'Khadoor Sahib',
    reservation: 'None (General)',
    totalElectors2022: 202155,
    tehsil: 'Patti',
  },

  // ==========================================================================
  // ELECTION RESULTS
  // ==========================================================================
  electionResults: {
    2022: {
      year: 2022,
      winner: 'Laljit Singh Bhullar',
      party: 'Aam Aadmi Party',
      voteShare: '~43%',
      margin: '10,999 votes',
      runnerUp: 'Not specified',
      dataVerified: true,
    },
    2017: {
      year: 2017,
      winner: 'Harminder Singh Gill',
      party: 'Indian National Congress',
      margin: 'Not specified',
      dataVerified: false,
    },
    2012: {
      year: 2012,
      winner: 'Adesh Partap Singh Kairon (SAD)',
      party: 'Shiromani Akali Dal',
      dataVerified: false,
    },
  },

  // ==========================================================================
  // CASTE COMPOSITION
  // ==========================================================================
  casteComposition: [
    { category: 'Jat Sikh', percentage: '~38-42%' },
    { category: 'SC (Mazhabi/Ramdasia)', percentage: '~22-28%' },
    { category: 'OBC', percentage: '~15-18%' },
    { category: 'Hindu Upper Caste', percentage: '~12-15%' },
    { category: 'Muslim', percentage: '~1-2%' },
  ],

  // ==========================================================================
  // VOTER TURNOUT
  // ==========================================================================
  voterTurnout: [
    { year: 2022, percentage: '~69-71%' },
    { year: 2017, percentage: '~75-77%' },
  ],

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: [
    {
      rank: 1,
      title: 'Border security',
      description: 'Proximity to Pakistan border',
    },
    {
      rank: 2,
      title: 'Drug trafficking',
      description: 'Major corridor for narcotics',
    },
    {
      rank: 3,
      title: 'Agricultural crisis',
      description: 'MSP procurement issues, stubble burning',
    },
    {
      rank: 4,
      title: 'Healthcare',
      description: 'Rural health facilities inadequate',
    },
    {
      rank: 5,
      title: 'Employment',
      description: 'Limited industrial growth',
    },
  ],

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    status: 'CHALLENGING',
    description:
      'AAP won by nearly 11,000 votes. Congress has support base. Need strong LOCAL CANDIDATE who can connect with Jat Sikh voters.',
  },

  // ==========================================================================
  // HISTORICAL PATTERN
  // ==========================================================================
  historicalPattern: [
    '2012: SAD won (Adesh Partap Singh Kairon)',
    '2017: Congress gained (Harminder Singh Gill)',
    '2022: AAP gained (Laljit Singh Bhullar)',
    'Shows electorate willing to change parties',
  ],

  // ==========================================================================
  // RECOMMENDED CANDIDATE PROFILE
  // ==========================================================================
  recommendedCandidateProfile: {
    preferredCaste: 'Jat Sikh preferred (dominant)',
    profile: [
      'Agricultural background',
      'Youth leader',
      'Clean image',
    ],
    keyQualification:
      'Ability to split Jat Sikh and SC votes effectively',
    requirement: 'Must have clear stand on drug crisis',
  },

  // ==========================================================================
  // ATTACK LINES AGAINST AAP INCUMBENT
  // ==========================================================================
  attackLines: [
    {
      rank: 1,
      text: 'Laljit Singh Bhullar: From Congress to AAP - Where is his loyalty?',
    },
    {
      rank: 2,
      text: 'What has he done for Patti in 4 years of AAP government?',
    },
    {
      rank: 3,
      text: 'Drug crisis: Patti on border route - AAP failed to check trafficking',
    },
    {
      rank: 4,
      text: 'Broken promise: Rs 1000/month for women not delivered',
    },
    {
      rank: 5,
      text: 'Farmer suicides continue - where is the help?',
    },
  ],

  // ==========================================================================
  // SOURCES
  // ==========================================================================
  sources: ['Wikipedia', 'Oneindia', 'IndiaVotes', 'ECI data.'],

  // ==========================================================================
  // DEEP RESEARCH DATA (from AC023-Patti-deep.md)
  // ==========================================================================
  deepResearch: {
    // ----------------------------------------------------------------
    // 1. Constituency Identity & Baseline
    // ----------------------------------------------------------------
    constituencyIdentity: {
      basicProfile: {
        acNo: 23,
        name: 'Patti',
        district: 'Tarn Taran',
        region: 'Majha',
        category: 'General',
        lokSabha: 'Khadoor Sahib',
        tehsil: 'Patti',
      },
      geographicContext:
        'Patti is both a town and tehsil headquarters in Tarn Taran district. The town is located in the Majha region and has historical significance. The area is predominantly agricultural with a strong Sikh population.',
      keyIdentifiers: {
        tehsilHeadquarters: true,
        agricultural: 'Wheat-paddy rotation',
        borderProximity: true,
      },
    },

    // ----------------------------------------------------------------
    // 2. Demographic Deep-Dive
    // ----------------------------------------------------------------
    demographicDeepDive: {
      religiousComposition: [
        { community: 'Sikh', percentage: 89.1 },
        { community: 'Hindu', percentage: 9.8 },
        { community: 'Christian', percentage: 1.1 },
      ],
      casteCompositionDetailed: [
        {
          category: 'Scheduled Caste (SC)',
          percentage: '25.25%',
          notes: 'urban Patti town',
        },
        {
          category: 'Jat Sikh',
          percentage: 'Dominant',
          notes: 'rural community',
        },
        {
          category: 'Ramdasia/Ravidassia',
          percentage: 'Significant',
          notes: 'SC presence',
        },
        {
          category: 'Khatri/Arora',
          percentage: 'N/A',
          notes: 'Business community in town',
        },
      ],
      townDemographics: {
        population: 22000,
        scPopulationPercentage: 25.25,
        literacy: '[NEEDS VERIFICATION]',
      },
    },

    // ----------------------------------------------------------------
    // 3. Electoral History
    // ----------------------------------------------------------------
    electoralHistory: {
      2022: {
        winner: 'Laljit Singh Bhullar',
        party: 'AAP',
        margin: 10999,
        source: 'OneIndia',
        dataVerified: true,
      },
      2017: {
        winner: 'Harminder Singh Gill',
        party: 'Congress',
        dataVerified: false,
      },
      historicalTrend:
        '2022: AAP won with strong margin (10,999). Pattern suggests AAP consolidation in area.',
    },

    // ----------------------------------------------------------------
    // 4. Public Sentiment
    // ----------------------------------------------------------------
    publicSentiment: {
      currentMood:
        'Transitional - Patti has seen political churning. The substantial AAP win in 2022 suggests anti-SAD sentiment consolidated. Local factors and candidate profile important.',
      keyDrivers: [
        { issue: 'Agricultural Distress', notes: 'MSP, input costs, land rights' },
        { issue: 'Development', notes: 'Town infrastructure needs' },
        { issue: 'Healthcare', notes: 'CHC/PHC facilities' },
        { issue: 'Employment', notes: 'Limited jobs for educated youth' },
        { issue: 'Drug Menace', notes: 'Rural youth affected [NEEDS VERIFICATION]' },
      ],
      grievances: [
        'Town sanitation and roads',
        'Agricultural procurement delays',
        'School facilities',
        'Employment opportunities',
      ],
    },

    // ----------------------------------------------------------------
    // 5. Governance Gap
    // ----------------------------------------------------------------
    governanceGap: {
      currentRepresentation: {
        mla: 'Laljit Singh Bhullar',
        party: 'AAP',
        district: 'Tarn Taran',
        state: 'Punjab',
      },
      activeSchemes: [
        { name: 'Mera Ghar, Mera Maan' },
        { name: 'Ashirwad Scheme' },
        { name: 'Aam Aami Clinics' },
        { name: 'Free electricity' },
      ],
      developmentGaps: [
        { item: 'Degree college', verified: false },
        { item: 'Hospital infrastructure', verified: true },
        { item: 'Market/mandi facilities', verified: true },
        { item: 'Industrial Training Institute', verified: true },
      ],
    },

    // ----------------------------------------------------------------
    // 6. Local Issues
    // ----------------------------------------------------------------
    localIssues: {
      topIssues: [
        { rank: 1, title: 'Agriculture', description: 'MSP realization, land rights issues' },
        { rank: 2, title: 'Infrastructure', description: 'Roads, drainage in town' },
        { rank: 3, title: 'Education', description: 'Higher education accessibility' },
        { rank: 4, title: 'Healthcare', description: 'Medical facilities upgrade needed' },
        { rank: 5, title: 'Youth Employment', description: 'Jobs, skills training' },
      ],
      pattiSpecific: {
        issues: [
          'Tehsil headquarters responsibilities',
          'Border area coordination',
          'Mandi yard facilities',
        ],
      },
    },

    // ----------------------------------------------------------------
    // 7. Influencers & Power Structure
    // ----------------------------------------------------------------
    influencersPowerStructure: {
      politicalActors: [
        { name: 'Laljit Singh Bhullar', party: 'AAP', verificationStatus: 'Verified' },
        { name: 'Local Congress Leaders', verificationStatus: 'NEEDS VERIFICATION' },
        { name: 'SAD Leaders', verificationStatus: 'NEEDS VERIFICATION' },
        { name: 'BJP Activists', verificationStatus: 'NEEDS VERIFICATION' },
      ],
      communityInfluencers: [
        'Jat Sikh Landlords: Traditional vote influencers',
        'Gurudwara Committees: Religious authority',
        'Ex-Servicemen: Veteran community',
        'Business Community: Town traders',
      ],
    },

    // ----------------------------------------------------------------
    // 8. Media Landscape
    // ----------------------------------------------------------------
    mediaLandscape: {
      localMedia: ['Punjabi press', 'WhatsApp groups', 'Cable TV networks'],
      informationFlow: [
        'District-level newspapers',
        'Local cable operators',
        'Religious channels',
      ],
    },

    // ----------------------------------------------------------------
    // 9. Physical Mapping
    // ----------------------------------------------------------------
    physicalMapping: {
      keyLocations: [
        'Patti town (urban center)',
        'Tehsil office complex',
        'Gurudwara Sahib',
        'Agricultural villages',
      ],
      infrastructure: [
        { item: 'Road to Tarn Taran, Khem Karan', verified: true },
        { item: 'Bus stand/transport hub', verified: true },
        { item: 'Grain market', verified: true },
        { item: 'Government college', verified: false },
      ],
    },

    // ----------------------------------------------------------------
    // 10. SWOT Analysis
    // ----------------------------------------------------------------
    swotAnalysis: {
      strengths: [
        'Tehsil headquarters administrative importance',
        'Agricultural hinterland',
        'AAP incumbent advantage',
        'Strong Sikh community',
      ],
      weaknesses: [
        'Limited industrial development',
        'Urban infrastructure gaps',
        'Healthcare shortages',
        'Educational institution gaps',
      ],
      opportunities: [
        'Agri-processing units',
        'Mandi upgradation',
        'NRI investment',
        'Border haat potential',
      ],
      threats: [
        'Agricultural distress',
        'Youth outmigration',
        'Drug menace',
        'Political anti-incumbency',
      ],
      analysisDate: '20 May 2026',
    },

    // ----------------------------------------------------------------
    // 11. Strategic Blueprint
    // ----------------------------------------------------------------
    strategicBlueprint: {
      congressStrategy: {
        candidate: 'Strong local with rural connect',
        casteStrategy: 'Jat Sikh + SC voters',
        issues: 'Agriculture, development, jobs',
        campaign: "AAP's unfulfilled promises",
        ground: 'Booth-level workers',
      },
      targetSegments: [
        'Rural Jat Sikh (core)',
        'SC voters (consolidate)',
        'Town traders (business issues)',
        'Youth (employment)',
      ],
      keyMessages: [
        'Patti ignored by AAP government',
        'Development only for CM\'s area',
        'Congress will prioritize Patti',
      ],
    },

    // ----------------------------------------------------------------
    // 12. Course-Changing Factors
    // ----------------------------------------------------------------
    courseChangingFactors: {
      wildcards: [
        {
          factor: 'Candidate Quality',
          description: 'Strong nominee can shift outcome',
        },
        {
          factor: 'Alliance Factor',
          description: 'Congress-SAD tie-up scenario',
        },
        {
          factor: 'NRI Factor',
          description: 'Remittance-dependent economy',
        },
        {
          factor: 'Security',
          description: 'Border area sensitivities',
        },
      ],
      triggers: [
        { name: 'Monsoon performance (agriculture)' },
        { name: 'Local development announcements' },
        { name: 'Central schemes for border areas' },
      ],
    },

    // ----------------------------------------------------------------
    // 13. Data Gaps & Recommendations
    // ----------------------------------------------------------------
    dataGapsRecommendations: {
      requiredVerification: [
        { item: '2017 results', verified: false },
        { item: 'Detailed vote shares', verified: false },
        { item: 'Caste demographics', verified: false },
        { item: 'Local issues priority ranking', verified: false },
        { item: 'MLA performance', verified: false },
      ],
      intelligencePriorities: [
        { item: 'Booth-level voter analysis' },
        { item: 'Local elite mapping' },
        { item: 'ECI assessment' },
        { item: 'Party organization strength' },
      ],
    },
  },

  // ==========================================================================
  // DOCUMENT METADATA
  // ==========================================================================
  documentMetadata: {
    dossierId: 'AC023-Patti-deep',
    topic: 'Patti Assembly Constituency Deep Research',
    date: '20 May 2026',
    dataCurrency: 'As of 20 May 2026',
    sources: 'Web search, Election Commission data, Census 2011',
    verificationStatus:
      'PARTIALLY VERIFIED - Data predating 2024 marked as such',
    documentStatus: 'Partial - Requires field verification',
    preparedFor: 'Punjab Congress 2027 Election Intelligence',
    classification: 'Internal Research Document',
  },
};
