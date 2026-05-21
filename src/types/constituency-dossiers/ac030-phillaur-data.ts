/**
 * AC030-Phillaur Assembly Constituency Data
 * Generated from AC030-Phillaur.md and AC030-Phillaur-deep.md
 * 6-Cycle Enhancement Pipeline - Cycle 4 (Data Refinement)
 */

import type { Ac030Dossier } from './ac030-phillaur-types';

export const ac030PhillaurData: Ac030Dossier = {
  metadata: {
    dossierId: 'AC030-Phillaur',
    researchDossierId: 'AC030-Phillaur-deep',
    topic: 'Phillaur Assembly Constituency Deep Research',
    date: '20 May 2026',
    dataCurrency: 'As of 20 May 2026',
    sources: [
      'Wikipedia',
      'Oneindia',
      'ECI data',
      'Census 2011',
      'Web search',
      'Election Commission data'
    ],
    verificationStatus: 'PARTIALLY VERIFIED - Data predating 2024 marked as such',
    preparedFor: 'Punjab Congress 2027 Election Intelligence',
    classification: 'Internal Research Document'
  },

  basicInfo: {
    acNumber: 30,
    officialName: 'Phillaur',
    district: 'Jalandhar',
    region: 'Doaba',
    lokSabha: 'Jalandhar (SC)',
    reservation: 'SC (Scheduled Caste)',
    totalElectors2022: 207149,
    tehsil: 'Phillaur',
    category: 'General'
  },

  electionResults: [
    {
      year: 2022,
      winner: 'Vikramjit Singh Chaudhary',
      party: 'Indian National Congress',
      voteShare: '~42%',
      margin: '12,303 votes',
      marginNumeric: 12303,
      runnerUp: 'Prem Kumar'
    },
    {
      year: 2017,
      winner: 'Baldev Singh Khaira',
      party: 'Aam Aadmi Party',
      runnerUp: 'Not specified'
    },
    {
      year: 2012,
      winner: 'Avinash Chander',
      party: 'Bharatiya Janata Party',
      runnerUp: 'Not specified'
    }
  ],

  casteComposition: [
    {
      category: 'SC (Mazhabi/Ramdasia)',
      percentage: '~50-55%',
      notes: 'High concentration in Doaba region'
    },
    {
      category: 'Jat Sikh',
      percentage: '~25-30%',
      notes: 'Rural majority'
    },
    {
      category: 'OBC',
      percentage: '~12-15%',
      notes: ''
    },
    {
      category: 'Hindu',
      percentage: '~8-10%',
      notes: ''
    }
  ],

  voterTurnout: [
    { year: 2022, percentage: '~67-69%' },
    { year: 2017, percentage: '~74-76%' }
  ],

  keyLocalIssues: [
    {
      id: 1,
      title: 'Drug crisis',
      description: 'Major issue in Doaba, affects SC communities'
    },
    {
      id: 2,
      title: 'Agricultural reforms',
      description: 'MSP, land issues'
    },
    {
      id: 3,
      title: 'Employment',
      description: 'Limited jobs for SC youth'
    },
    {
      id: 4,
      title: 'Education',
      description: 'SC students access to quality education'
    },
    {
      id: 5,
      title: 'Urban sprawl',
      description: 'Phagwara town development'
    }
  ],

  congressStrategicPosition: {
    status: 'STRONG',
    margin: 12303,
    marginAsString: '12,303 votes',
    description: 'Won by 12,303 votes. AAP (Baldev Singh Khaira) was incumbent in 2017. Congress gained this seat. Good position for 2027.',
    keyFactors: [
      'Congress defeated AAP incumbent',
      'Strong margin of victory',
      'Need to consolidate SC voter base',
      'Must highlight development vs AAP failures'
    ]
  },

  recommendedCandidateProfile: {
    caste: 'Mazhabi/Ramdasia Sikh (essential for this SC seat)',
    profile: 'Worker leader, connects with SC community, clean image',
    keyQualification: 'Ability to maintain SC consolidation',
    mustHave: 'Continue anti-drug messaging'
  },

  attackLinesAgainstAAP: [
    { id: 1, text: 'Baldev Singh Khaira: 5 years as MLA, what did he do?' },
    { id: 2, text: 'Drug crisis: AAP government failed to protect SC youth' },
    { id: 3, text: 'No development in SC areas: Schools, hospitals missing' },
    { id: 4, text: 'Rs 1000/month: AAP made tall promises, SC families suffered' },
    { id: 5, text: 'Congress delivered: We need more time to complete work' }
  ],

  deepResearch: {
    constituencyIdentity: {
      basicProfile: {
        acNumber: 30,
        officialName: 'Phillaur',
        district: 'Jalandhar',
        region: 'Doaba',
        category: 'General',
        lokSabha: 'Jalandhar (SC)',
        tehsil: 'Phillaur',
        reservation: 'SC',
        totalElectors2022: 0,
      },
      geographicContext: {
        description: 'Phillaur is a town and tehsil in Jalandhar district, Doaba region. Located 20 km from Ludhiana, it has historically been a trade and agricultural center. The constituency combines urban and rural areas.',
        location: 'Doaba region',
        distanceFromLudhiana: '20 km',
        tradeHub: 'Historical market town',
        borderArea: 'Not border area',
        keyCharacteristics: [
          'Doaba Region: Between Beas and Satluj',
          'Jalandhar District: SC 38.95% (highest in state)',
          'Trade Hub: Historical market town',
          'Border: Not border area'
        ]
      },
      keyIdentifiers: [
        'Doaba Region: Between Beas and Satluj',
        'Jalandhar District: SC 38.95% (highest in Punjab)',
        'Trade Hub: Historical market town',
        'Border: Not border area'
      ]
    },

    demographics: {
      religiousComposition: [
        { religion: 'Sikh', percentage: '~59%' },
        { religion: 'Hindu', percentage: '~38%' },
        { religion: 'Other', percentage: '<3%' }
      ],
      casteComposition: [
        { category: 'Scheduled Caste (SC)', percentage: '38.95%', notes: 'Highest in Punjab' },
        { category: 'SC in Phillaur villages', percentage: '45-56%', notes: 'In many villages' },
        { category: 'Jat Sikh', percentage: 'Rural majority', notes: '' },
        { category: 'Khatri/Arora', percentage: 'Urban business', notes: '' }
      ],
      villageDemographics: [
        { villageName: 'Aujla village', scPercentage: 45.48 },
        { villageName: 'Nagar village', scPercentage: 56.07 }
      ]
    },

    electoralHistory: {
      election2022: {
        candidate: 'Vikramjit Singh Chaudhary',
        party: 'INC',
        votes: null,
        margin: 12303,
        runnerUp: 'Prem Kumar',
        runnerUpParty: 'AAP'
      },
      congressDevelopment: {
        year: 2025,
        description: 'Congress revoked suspension of Vikramjit Singh Chaudhary',
        implications: 'He had opposed Charanjit Singh Channi in Lok Sabha polls. Indicates internal Congress tensions.'
      },
      historicalTrend: '2022: Congress win (12,303 margin). Strong margin against AAP. But Congress tensions visible in 2025.'
    },

    publicSentiment: {
      currentMood: 'Turbulent',
      keyDrivers: [
        'Congress Tensions: Intra-party disputes',
        'Doaba Identity: Region consciousness',
        'Agricultural: Rural voter concerns',
        'Industrial: Phillaur proximity to Ludhiana',
        'Employment: Jobs for youth'
      ],
      grievances: [
        'Road infrastructure (NH1 crossing)',
        'Agricultural distress',
        'Healthcare facilities',
        'Employment opportunities'
      ]
    },

    governanceGap: {
      currentRepresentation: {
        mla: 'Vikramjit Singh Chaudhary (Congress)',
        district: 'Jalandhar',
        state: 'AAP government (opposition)'
      },
      activeSchemes: [
        'Mera Ghar, Mera Maan',
        'Ashirwad Scheme',
        'Aam Aadmi Clinics',
        'Free electricity'
      ],
      developmentGaps: [
        'Phillaur town infrastructure',
        'NH1 crossing safety',
        'Rural roads',
        'Healthcare'
      ]
    },

    localIssues: [
      {
        priority: 1,
        category: 'Infrastructure',
        details: ['Phillaur town, roads']
      },
      {
        priority: 2,
        category: 'Agriculture',
        details: ['MSP,佃权, rural distress']
      },
      {
        priority: 3,
        category: 'Healthcare',
        details: ['CHC facilities']
      },
      {
        priority: 4,
        category: 'Employment',
        details: ['Jobs for youth']
      },
      {
        priority: 5,
        category: 'Doaba Politics',
        details: ['Regional identity']
      }
    ],

    influencersPowerStructure: {
      politicalActors: [
        { name: 'Vikramjit Singh Chaudhary', role: 'Congress MLA', party: 'Congress' },
        { name: 'Charanjit Singh Channi', role: 'Congress MP', party: 'Congress' },
        { name: 'AAP Leaders', role: 'AAP', party: 'AAP' },
        { name: 'BJP Leaders', role: 'BJP', party: 'BJP' }
      ],
      communityInfluencers: [
        { community: 'Jat Sikh Elders', influence: 'Caste influence' },
        { community: 'Khatri Traders', influence: 'Business community' },
        { community: 'SC Leaders', influence: 'Doaba high SC population' },
        { community: 'Ex-Servicemen', influence: 'Veterans' }
      ],
      powerStructure: {
        description: 'Congress holds seat. MLA-MP tensions within Congress. AAP as main opposition. Caste-based voting.',
        dynamics: [
          'Congress holds seat',
          'MLA-MP tensions within Congress',
          'AAP as main opposition',
          'Caste-based voting'
        ]
      }
    },

    mediaLandscape: {
      localMedia: [
        'Punjabi press',
        'Doaba newspapers',
        'Jalandhar media',
        'WhatsApp networks'
      ],
      informationFlow: [
        'Jalandhar district journalism',
        'Doaba region consciousness',
        'Political WhatsApp groups'
      ]
    },

    physicalMapping: {
      keyLocations: [
        { name: 'Phillaur town', description: 'Urban center' },
        { name: 'Railway station area', description: 'Transport hub' },
        { name: 'Agricultural villages', description: 'Rural areas' },
        { name: 'NH1 corridor', description: 'Highway connection' }
      ],
      infrastructure: {
        items: [
          'National Highway 1 crossing',
          'Railway station',
          'Healthcare: CHC level',
          'Mandi facilities'
        ]
      }
    },

    swot: {
      strengths: {
        items: [
          'Congress win 2022 (12,303 margin)',
          'Doaba region identity',
          'High SC population (constituency advantage)',
          'Jalandhar district influence'
        ]
      },
      weaknesses: {
        items: [
          'Congress internal tensions',
          'MLA-MP conflict',
          'AAP government schemes',
          'Anti-incumbency possible'
        ]
      },
      opportunities: {
        items: [
          'Regional identity politics',
          'High SC voters (advantage for Congress)',
          'NRI investment',
          'Industrial proximity to Ludhiana'
        ]
      },
      threats: {
        items: [
          'Congress civil war',
          'AAP government appeal',
          'Internal party opposition to MLA',
          'Rural distress'
        ]
      }
    },

    strategicBlueprint: {
      congressStrategy: {
        candidate: 'Incumbent or family (if MLA continues)',
        caste: 'Jat Sikh + SC combination',
        issues: ['Development', 'doaba identity', 'jobs'],
        campaign: 'Party unity show, regional pride',
        resolve: 'Internal conflicts before elections'
      },
      aapStrategy: {
        candidate: 'Strong challenger',
        caste: 'SC + urban',
        issues: ['AAP schemes', 'Congress corruption'],
        campaign: 'Congress divided, AAP united'
      },
      targetSegments: [
        { segment: 'Rural Jat Sikh', description: 'Core Congress' },
        { segment: 'SC voters', description: 'Substantial' },
        { segment: 'Urban traders', description: 'Business community' },
        { segment: 'Youth', description: 'Employment' }
      ]
    },

    courseChangingFactors: {
      wildcards: [
        { id: 1, factor: 'Congress Unity: Resolution or continuation of tensions' },
        { id: 2, factor: 'MLA Performance: Assessment of 2022-2027' },
        { id: 3, factor: 'Alliance: Congress-SAD tie-up' },
        { id: 4, factor: 'Regional Politics: Doaba identity card' }
      ],
      triggers: [
        { id: 1, trigger: 'Party unity assessment' },
        { id: 2, trigger: 'AAP government performance' },
        { id: 3, trigger: 'Development announcements' },
        { id: 4, trigger: 'Internal Congress developments' }
      ]
    },

    dataGaps: {
      requiredVerification: [
        { id: 1, item: '2017 results', verificationNeeded: true },
        { id: 2, item: 'MLA-MP conflict origins', verificationNeeded: true },
        { id: 3, item: 'Caste demographics', verificationNeeded: true },
        { id: 4, item: 'Booth-level analysis', verificationNeeded: true },
        { id: 5, item: 'SC voter patterns', verificationNeeded: true }
      ],
      intelligencePriorities: [
        { id: 1, priority: 'Congress party unity assessment' },
        { id: 2, priority: 'MLA performance rating' },
        { id: 3, priority: 'AAP candidate identification' },
        { id: 4, priority: 'Booth-level organization' }
      ]
    }
  }
};

export default ac030PhillaurData;
