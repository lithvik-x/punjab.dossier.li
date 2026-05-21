/**
 * AC015 - Amritsar North Assembly Constituency
 * Data File - All content from source documents
 */

import type {
  AC015AmritsarNorthDossier,
} from './ac015-amritsar-north-types';

export const ac015AmritsarNorthData: AC015AmritsarNorthDossier = {
  metadata: {
    acNumber: 15,
    name: 'Amritsar North',
    district: 'Amritsar',
    region: 'Majha',
    type: 'General',
    date: '20 May 2026',
    researchId: 'AC015-AmritsarNorth-001',
    tier: 2,
    verificationStatus: 'PARTIALLY_VERIFIED',
    sourcesConsulted: [
      'Web search (minimax-web-search)',
      'Wikipedia',
      'ProNeta',
      'IndiaVotes AC Summary',
      'ADR India PDF',
      'Indiastat Factbook',
    ],
  },

  geographicProfile: {
    description: 'Amritsar North is a Punjab Legislative Assembly constituency in Amritsar district. Part of Amritsar Lok Sabha constituency. Urban constituency within/near Amritsar city. Contiguous with Amritsar city urban sprawl.',
    partOfLokSabha: 'Amritsar',
    type: 'Urban',
    connectivity: ['GT Road passes through', 'Good road network'],
    keyMarkets: ['Lawrence Road', 'Hall Bazar', 'City commercial centres'],
    residentialAreas: ['Ranjit Avenue', 'Dashmesh Nagar', 'Urban colonies'],
  },

  keyStatistics2022: {
    winner: 'Kunwar Vijay Pratap Singh',
    runnerUp: 'Anil Joshi',
    winnerVoteCount: 58133,
    winnerVoteShare: 47.3,
    runnerUpVoteCount: 29815,
    runnerUpVoteShare: 24.2,
    margin: 28318,
    marginPercentagePoints: 23.1,
    totalValidVotes: 122948,
    totalElectors: 155000,
  },

  demographicData: {
    casteComposition: [
      { category: 'Upper Caste (Khatri, Arora, Brahmin)', percentage: 30 },
      { category: 'Jat Sikh', percentage: 25 },
      { category: 'SC', percentage: 22 },
      { category: 'OBC', percentage: 10 },
      { category: 'Minority', percentage: 8 },
      { category: 'Other', percentage: 5 },
    ],
    religionBreakdown: [
      { religion: 'Hindu', percentage: 49.36 },
      { religion: 'Sikh', percentage: 48.0 },
      { religion: 'Christian', percentage: 1.5 },
      { religion: 'Others (Muslim, Buddhist, Jain)', percentage: 1.14 },
    ],
    scPopulation: 20.09,
    urbanVotersPercentage: 95,
    keySocialGroups: [
      'Khatri/Arora: Major trading/business community in Amritsar city — General category',
      'Brahmin: Urban professional class — significant in urban North',
      'Jat Sikh: Some presence but less dominant in city North',
      'SC: ~20% — significant vote bank but not dominant',
      'OBC: Present in urban population',
    ],
  },

  electoralHistory: {
    results: [
      {
        year: 2022,
        winner: 'Kunwar Vijay Pratap Singh',
        party: 'AAP',
        runnerUp: 'Anil Joshi',
        runnerUpParty: 'SAD',
        margin: '28,318 votes',
        marginVotes: 28318,
        winnerVoteCount: 58133,
        runnerUpVoteCount: 29815,
      },
      {
        year: 2017,
        winner: 'Sunil Dutti',
        party: 'INC',
        runnerUp: 'Anil Joshi',
        runnerUpParty: 'BJP',
        margin: '[NEEDS VERIFICATION]',
      },
      {
        year: 2012,
        winner: '[NEEDS VERIFICATION]',
        party: '[NEEDS VERIFICATION]',
        runnerUp: '[NEEDS VERIFICATION]',
        runnerUpParty: '[NEEDS VERIFICATION]',
        margin: '[NEEDS VERIFICATION]',
      },
    ],
    source: 'IndiaVotes, ProNeta, CNBC TV18',
  },

  localIssues: [
    {
      rank: 1,
      issue: 'Urban Infrastructure & Civic Services',
      description: 'Water, drainage, road quality, power supply in Amritsar North',
    },
    {
      rank: 2,
      issue: 'Law & Order / Drug Crisis',
      description: 'Urban drug consumption, hooch/illicit liquor',
    },
    {
      rank: 3,
      issue: 'Unemployment',
      description: 'Youth, graduates unable to find employment',
    },
    {
      rank: 4,
      issue: 'Inflation & Cost of Living',
      description: 'Middle-class urban voter sensitivity',
    },
    {
      rank: 5,
      issue: 'Governance & Corruption',
      description: '"Punjab being run from Delhi" narrative; MELA/Mseva corruption allegations',
    },
  ],

  strategicPosition: {
    summary: 'AAP won decisively with 28,318 margin. Congress must build coalition against AAP by consolidating SAD, BJP, and Congress voters. Need strong urban candidate.',
    coalitionStrategy: 'Consolidate SAD, BJP, and Congress voters against AAP',
    targetVoterSegments: ['Urban voters', 'Trading community', 'Business community'],
  },

  recommendedCandidate: {
    profile: 'Urban professional, business community connect',
    casteConsideration: 'Khatri/Arora background suits trading community',
    keyQualities: ['Development agenda', 'Accessibility'],
  },

  attackLines: [
    {
      category: 'Broken Promises',
      message: '₹1000/month for women not delivered',
    },
    {
      category: 'Urban Neglect',
      message: 'City infrastructure deteriorating',
    },
    {
      category: 'Heritage',
      message: 'Golden Temple area management questioned',
    },
    {
      category: 'Unemployment',
      message: 'Youth still without jobs',
    },
  ],

  publicSentiment: {
    perceivedMood: '[NEEDS VERIFICATION — field intelligence required]',
    AAPStrongPosition: {
      voteShare: 47.3,
      margin: 28318,
      percentagePoints: 23.1,
    },
    voterDiscontentVectors: [
      'Urban Infrastructure: Amritsar city perennial issues — water supply, drainage, power cuts, road quality',
      'Law & Order: Drug peddling, hooch tragedies (Amritsar hooch deaths cited by BJP in 2025)',
      'Governance Failures: AAP government "outsourcing Punjab to Delhi" criticism',
      'Economic Slowdown: Inflation, unemployment hitting urban middle class',
    ],
  },

  governanceGap: {
    MLAPerformance: {
      name: 'Kunwar Vijay Pratap Singh',
      party: 'AAP',
      term: '2022-2026',
      notes: 'First-term MLA; Urban MLA in AAP government — potential for city-specific advocacy',
    },
    infrastructureIssues: {
      waterSupply: 'AIIB-funded Amritsar Bulk Water Supply Project ongoing [NEEDS VERIFICATION — completion status]',
      sewerage: '[NEEDS VERIFICATION — reported improvements]',
      roads: 'Amritsar Smart City Mission components present',
      power: 'Load shedding issues reported in urban areas',
    },
    lawAndOrder: [
      '2025 hooch tragedy in Amritsar — BJP raised as governance failure',
      'Drug peddling in city areas [NEEDS VERIFICATION]',
    ],
  },

  powerStructure: {
    political: [
      {
        name: 'Kunwar Vijay Pratap Singh',
        role: 'MLA',
        party: 'AAP',
        notes: 'First-term incumbent; likely young leader [NEEDS VERIFICATION — profile]',
      },
      {
        name: 'Anil Joshi',
        role: 'Senior Leader',
        party: 'SAD/BJP',
        notes: 'Senior leader; lost 2022; rebuilding',
      },
      {
        name: 'Sunil Dutti',
        role: 'Previous MLA',
        party: 'Congress',
        notes: 'Previous MLA; [NEEDS VERIFICATION — 2027 candidacy]',
      },
      {
        name: 'Local Congress Workers',
        role: 'Party Workers',
        party: 'Congress',
        notes: 'Retained some organization despite 2022 wipeout',
      },
    ],
    socialReligious: [
      'Amritsar Chamber of Commerce: Business community political voice',
      'Akhara Parishad: Religious body with urban Hindu influence',
      'Gurudwara Management: Sikh religious institutions',
      'Urban Middle-Class RWAs: Resident welfare associations; increasingly political',
    ],
  },

  mediaLandscape: {
    localRegional: [
      'The Tribune (English, Chandigarh)',
      'Indian Express (Punjab edition)',
      'Amritsar Tribune (local)',
      'Punjab Kesari (Punjabi daily)',
      'Dainik Bhaskar (Hindi)',
      'Babushahi.com (digital)',
    ],
    socialMedia: [
      'Twitter/X: Urban voter engagement',
      'Facebook: Community groups',
      'WhatsApp: Voter contact chains',
    ],
  },

  physicalMapping: {
    keyGeography: 'Amritsar North: Urban constituency within Amritsar city',
    markets: ['Lawrence Road', 'Hall Bazar', 'City commercial centres'],
    residentialAreas: ['Ranjit Avenue', 'Dashmesh Nagar', 'Urban colonies'],
    connectivity: ['GT Road passes through', 'Good road network'],
    voterDemographicsEstimate: {
      urbanVoters: '~95%+',
      scVoters: '~20%',
      generalCategory: '~80% (Hindu+Khatri+Brahmin+Others)',
      sikhVoters: '~45-50% of total (city Sikh population)',
    },
  },

  swotAnalysis: {
    strengths: [
      'Near-majority 47.3% vote share — very strong base',
      'Incumbency: 4 years of MLA visibility',
      'Urban voter preference for "new politics" vs old parties',
    ],
    weaknesses: [
      'Urban middle-class disappointment with governance (2022-2026)',
      'Law & order incidents (hooch tragedy) provide opposition ammunition',
      'No clear second-term narrative vs anti-incumbency',
    ],
    opportunities: [
      'Amritsar Smart City projects: claim visible urban development',
      'Employment schemes: any local job creation can be highlighted',
      'Congress-AAP competition: Congress is the main threat, not SAD+BJP',
    ],
    threats: [
      'Urban voter swing to Congress (Sunil Dutti as alternative)',
      'SAD+BJP Hindutva consolidation of Hindu voters',
    ],
  },

  strategicBlueprint: {
    forAAP: [
      'Field Kunwar Vijay Pratap Singh — incumbency is key',
      'Urban development: Claim credit for Smart City components, water supply',
      'Youth employment: Any skill training/employment scheme',
      'Counter Hindutva: "We deliver, they only do politics"',
      'Law & order: "More police stations opened, more arrests"',
    ],
    forCongress: [
      'Field Sunil Dutti (2017 winner) or new candidate — Congress needs urban voter base',
      'Development criticism: Water, power, infrastructure failures',
      'Young voter outreach: Employment narrative resonates',
      'Congress-SAD alliance unlikely here (seat-to-seat deal)',
    ],
    forSADBJP: [
      'Need to consolidate Hindu voters — Amritsar North has significant Hindu population',
      'Anil Joshi or similar senior candidate — experience vs. AAP newcomer',
      'Hindutva + development narrative: "Make Amritsar great again"',
    ],
  },

  courseChangingFactors: [
    {
      factor: 'Congress fields Sunil Dutti',
      probability: 'Medium',
      impact: 'HIGH',
    },
    {
      factor: 'Major infrastructure project (e.g., metro, flyover)',
      probability: 'Medium',
      impact: 'MEDIUM',
    },
    {
      factor: 'Another hooch/law & order tragedy',
      probability: 'Medium',
      impact: 'HIGH',
    },
    {
      factor: 'AAP denied ticket to Kunwar Vijay Pratap',
      probability: 'Medium',
      impact: 'HIGH',
    },
    {
      factor: 'SAD+BJP Hindutva mobilization',
      probability: 'Medium',
      impact: 'HIGH',
    },
    {
      factor: 'Economic slowdown worsens',
      probability: 'High',
      impact: 'MEDIUM',
    },
  ],

  intelligenceGaps: [
    {
      item: 'Kunwar Vijay Pratap Singh profile — full name, background, caste, age',
      priority: 'High',
    },
    {
      item: '2017 full results — Sunil Dutti vs Anil Joshi exact margin',
      priority: 'High',
    },
    {
      item: 'Amritsar Smart City projects completed 2022-2026 — list and locations',
      priority: 'Medium',
    },
    {
      item: 'Amritsar North voter turnout 2022 — per CEO Punjab',
      priority: 'Medium',
    },
    {
      item: 'Water supply project status — AIIB project completion date',
      priority: 'Medium',
    },
    {
      item: 'Hooch tragedy details — date, deaths, political fallout',
      priority: 'High',
    },
    {
      item: 'Sunil Dutti 2027 candidacy — Congress candidate plan',
      priority: 'High',
    },
    {
      item: 'Booth-level results in Amritsar North — to identify margin by area',
      priority: 'Medium',
    },
  ],

  keywordsForMonitoring: [
    {
      keyword: 'election-results',
      query: '"amritsar north" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
    },
    {
      keyword: 'incumbent',
      query: '"kunwar vijay pratap singh" AND "amritsar north"',
    },
    {
      keyword: 'party-competition',
      query: '"amritsar north" AND ("aap" OR "congress" OR "sad" OR "bjp")',
    },
    {
      keyword: 'law-order',
      query: '"amritsar" AND ("hooch" OR "law order" OR "drug" OR "water")',
    },
    {
      keyword: 'development',
      query: '"amritsar" AND ("smart city" OR "urban development")',
    },
  ],
};
