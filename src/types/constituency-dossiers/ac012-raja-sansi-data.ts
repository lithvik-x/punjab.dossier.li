/**
 * AC012 - Raja Sansi Assembly Constituency Data
 * Generated from: AC012-Raja-Sansi.md and AC012-RajaSansi-deep.md
 * Date: 20 May 2026
 * 
 * 100% Content Coverage - All sections, tables, bullet points, data points
 */

import type {
  AC012RajaSansiDossier,
} from './ac012-raja-sansi-types';

export const ac012RajaSansiData: AC012RajaSansiDossier = {
  // ==========================================================================
  // METADATA
  // ==========================================================================
  metadata: {
    microTaskId: 'AC012-RajaSansi-001',
    topic: 'Raja Sansi Assembly Constituency Deep Research',
    tier: 2,
    date: '20 May 2026',
    agent: 'Orchestrator-R1',
    verificationStatus: 'PARTIALLY VERIFIED',
    dataCurrency: 'As of 20 May 2026',
    sources: [
      'Web search (minimax-web-search)',
      'OneIndia',
      'ADR India PDF',
      'IndiaVotes',
      'CityPopulation.de',
      'Punjab Census Handbook',
      'Wikipedia Amritsar',
      'News18.com',
      'Outlook India',
      'Newsgram',
      'Babushahi.com',
      'Reddit r/punjab',
    ],
  },

  // ==========================================================================
  // 1. CONSTITUENCY IDENTITY & BASELINE
  // ==========================================================================
  constituencyIdentity: {
    header: {
      acNumber: 12,
      name: 'Raja Sansi',
      district: 'Amritsar',
      region: 'Majha',
      type: 'General',
      date: '20 May 2026',
    },
    geographicProfile: {
      description: 'Raja Sansi is a town/city and assembly constituency in Amritsar district, Punjab',
      location: 'Located near Amritsar city, part of Amritsar Lok Sabha constituency',
      significance: 'Growing urban-periurban area with mixed residential, commercial, and agricultural land use',
      historicalOrigin: 'Name origin linked to local Sikh Rajput history. Home to Raja Sansi (Allawaal) — minor character in Sikh history',
      landUse: 'Mixed residential, commercial, and agricultural',
    },
    keyStatistics2022: {
      winner: 'Sukhwinder Singh Sarkaria (INC)',
      runnerUp: null,
      winnerVoteCount: null,
      margin: 5474,
      party: 'Congress',
      totalElectors: 165000,
      voterTurnout: 73,
    },
    notableNote: 'Raja Sansi is notable as one of the few Congress wins in Amritsar district in 2022, defying the AAP wave. Most Amritsar urban seats went to AAP; Raja Sansi was a Congress stronghold retained against the AAP tide — suggests strong local Congress organization.',
  },

  // ==========================================================================
  // 2. ELECTION RESULTS
  // ==========================================================================
  electionResults: {
    2022: {
      year: 2022,
      winner: 'Sukhwinder Singh Sarkaria',
      party: 'INC',
      runnerUp: null,
      runnerUpParty: null,
      margin: 5474,
      winnerVoteCount: null,
      totalElectors: 165000,
      voterTurnout: 73,
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
      totalElectors: null,
      voterTurnout: null,
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
      totalElectors: null,
      voterTurnout: null,
      verificationStatus: 'Needs Verification',
    },
  },

  // ==========================================================================
  // 3. DEMOGRAPHIC DEEP-DIVE
  // ==========================================================================
  demographics: {
    population2011: 14298,
    urbanRuralSplit: {
      urban: 55,
      rural: 45,
    },
    casteComposition: {
      jatSikh: 35,
      sc: 28,
      obc: 12,
      upperCaste: 18,
      minority: 5,
      other: 2,
    },
    religionBreakdown: [
      {
        religion: 'Sikh',
        percentage: null,
        notes: 'Majority in rural Raja Sansi assembly area',
      },
      {
        religion: 'Hindu',
        percentage: 49.36,
        notes: 'Urban Hindu population in Amritsar city',
      },
      {
        religion: 'Sikh (Urban)',
        percentage: 48,
        notes: 'Urban Amritsar city',
      },
      {
        religion: 'Muslim',
        percentage: null,
        notes: 'Minority community present',
      },
      {
        religion: 'Christian',
        percentage: null,
        notes: 'Minority community present',
      },
    ],
    keySocialGroups: [
      {
        group: 'Jat Sikh',
        description: 'Agricultural dominant caste',
        politicalSignificance: 'Significant in rural polling booths',
      },
      {
        group: 'Khatri/Khatri-Sikh',
        description: 'Business/trade community',
        politicalSignificance: 'In town area',
      },
      {
        group: 'SC (Mazhabi, Ravidassia)',
        description: 'Scheduled Castes',
        politicalSignificance: 'Decisive in close contests — 30%+ of electorate',
      },
      {
        group: 'Brahmin',
        description: 'Urban, educational/administrative class',
        politicalSignificance: 'Urban voters',
      },
      {
        group: 'Rajput',
        description: 'Historical presence',
        politicalSignificance: 'Some agricultural',
      },
    ],
    scPopulationDistrict: 770864,
    districtScPercentage: 30.95,
  },

  // ==========================================================================
  // 4. PUBLIC SENTIMENT
  // ==========================================================================
  publicSentiment: {
    perceivedMood: null,
    sentimentDrivers: [
      {
        issue: 'Drug Crisis',
        description: 'Border-adjacent Amritsar rural areas affected; Raja Sansi semi-urban location makes it transit zone. Youth addiction reported in local media.',
        source: ['Local media reports'],
      },
      {
        issue: 'Unemployment',
        description: 'Raja Sansi proximity to Amritsar city means youth seek urban jobs. Skills gap cited.',
        source: ['General intelligence'],
      },
      {
        issue: 'Governance',
        description: 'AAP government 2022-2026 — mixed reviews. CM Mann "digital governance" vs. law & order concerns. Congress supporters likely frame AAP as failed on local development.',
        source: ['Outlook India', 'Newsgram'],
      },
      {
        issue: 'Farmer Distress',
        description: 'Rural component of constituency affected by MSP, stubble issues. Punjab farmer agitations (Dallewall hunger strike 2024-25) signaled continued distress.',
        source: ['Babushahi.com', 'Reddit r/punjab'],
      },
      {
        issue: 'Border Security',
        description: 'Raja Sansi proximity to Amritsar generates national security salience among Hindu voters.',
        source: ['General intelligence'],
      },
    ],
    verificationStatus: 'Needs Verification — field intelligence required',
  },

  // ==========================================================================
  // 5. LOCAL ISSUES (Top 5 from deep research)
  // ==========================================================================
  localIssues: [
    {
      rank: 1,
      title: 'Urban Development & Land Use',
      description: 'Raja Sansi transitioning from town to urban extension of Amritsar; zoning disputes, unauthorized construction',
      category: 'Urban',
    },
    {
      rank: 2,
      title: 'Drug/Youth Addiction',
      description: 'Semi-urban area experiencing drug consumption rise; rehabilitation infrastructure absent',
      category: 'Social',
    },
    {
      rank: 3,
      title: 'Unemployment & Skills',
      description: 'Youth lack industrial skills; migration to cities/overseas',
      category: 'Economic',
    },
    {
      rank: 4,
      title: 'Agrarian Distress',
      description: 'MSP, stubble, water table issues (rural component)',
      category: 'Rural',
    },
    {
      rank: 5,
      title: 'Civic Services',
      description: 'Sewerage, drainage, municipal services in Raja Sansi town',
      category: 'Infrastructure',
    },
  ],

  // ==========================================================================
  // 6. GOVERNANCE GAP
  // ==========================================================================
  governanceGap: {
    mlaName: 'Sukhwinder Singh Sarkaria',
    party: 'INC',
    term: '2022-2026 (first/first-term MLA in 2022)',
    infrastructureIssues: [
      {
        issue: 'Urban water supply',
        status: 'Verified',
        details: 'Amritsar bulk water supply project ongoing (AIIB-funded)',
      },
      {
        issue: 'Sewerage/drainage',
        status: 'Needs Verification',
        details: null,
      },
      {
        issue: 'Road connectivity',
        status: 'Needs Verification',
        details: 'Raja Sansi town roads',
      },
      {
        issue: 'Power supply',
        status: 'Needs Verification',
        details: null,
      },
    ],
    developmentProjects: [
      {
        name: 'Amritsar Smart City Mission',
        description: 'Some components may have covered Raja Sansi urban area',
        status: 'Ongoing',
        verificationStatus: 'Needs Verification',
      },
    ],
  },

  // ==========================================================================
  // 7. INFLUENCERS & POWER STRUCTURE
  // ==========================================================================
  influencersPowerStructure: {
    political: [
      {
        name: 'Sukhwinder Singh Sarkaria (INC MLA)',
        affiliation: 'INC',
        role: 'Local strongman',
        background: 'Likely from business/trading community or Jat Sikh background',
        verificationStatus: 'Needs Verification',
      },
      {
        name: 'Congress Party Workers',
        affiliation: 'INC',
        role: 'Booth-level organization',
        background: null,
        verificationStatus: 'Verified',
      },
      {
        name: 'SAD Workers',
        affiliation: 'SAD',
        role: 'Lost 2022 but still have rural reach',
        background: 'Rebuilding',
        verificationStatus: 'Verified',
      },
      {
        name: 'BJP',
        affiliation: 'BJP',
        role: 'Growing Hindutva mobilization in urban Raja Sansi',
        background: 'Potential ally for SAD',
        verificationStatus: 'Verified',
      },
    ],
    socialReligious: [
      {
        name: 'Town Merchants Association',
        type: 'Economic',
        description: 'Khatri/Arora business community',
        politicalRelevance: 'Political fundraising base',
      },
      {
        name: 'Gurudwara Committees',
        type: 'Religious',
        description: 'Sikh religious authority',
        politicalRelevance: 'Mobilization during elections',
      },
      {
        name: 'Youth Clubs',
        type: 'Social',
        description: 'Informal networks',
        politicalRelevance: 'Social media amplification',
      },
      {
        name: 'NRI Families',
        type: 'Diaspora',
        description: 'Significant Raja Sansi diaspora (Canada, UK)',
        politicalRelevance: 'Remittances shape economic profile',
      },
    ],
  },

  // ==========================================================================
  // 8. MEDIA LANDSCAPE
  // ==========================================================================
  mediaLandscape: {
    local: [
      { name: 'Amritsar Tribune', language: 'English', type: 'Print' },
      { name: 'The Tribune', language: 'English', type: 'Print' },
      { name: 'Punjab Kesari', language: 'Punjabi', type: 'Print' },
      { name: 'Ajit Daily', language: 'Punjabi', type: 'Print' },
      { name: 'Amritsar Vlogs', language: 'Punjabi', type: 'Digital' },
      { name: 'City News', language: 'Punjabi', type: 'Digital' },
    ],
    hindiEnglish: [
      { name: 'Dainik Bhaskar', language: 'Hindi', type: 'Print' },
      { name: 'The Hindu', language: 'English', type: 'Print' },
      { name: 'Indian Express', language: 'English', type: 'Print' },
    ],
    socialMedia: [
      'Facebook (Primary for 30+ age group)',
      'Instagram (Youth voter engagement)',
      'WhatsApp (Voter mobilization chains)',
    ],
  },

  // ==========================================================================
  // 9. PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    urbanCore: 'Urban core with markets, residential areas',
    surroundingArea: 'Rural agricultural',
    connectivity: 'NH3 (Amritsar-Pathankot road) passes through area',
    distanceFromAmritsarCity: '~10-15 km',
    airportProximity: 'Raja Sansi Airport (Sri Guru Ram Dass Jee International Airport) nearby — generates regional economic activity but also noise/pollution concerns',
    voterDemographics: {
      urbanVoters: 55,
      ruralVoters: 45,
      scVoters: 25,
      womenVoterParticipation: 'Moderate-to-high',
    },
  },

  // ==========================================================================
  // 10. SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      { item: 'Incumbent MLA with proven 2022 retention ability', party: 'Congress' },
      { item: 'Congress organization in town trading community', party: 'Congress' },
      { item: 'Local personal influence of Sarkaria family', party: 'Congress' },
      { item: 'Anti-AAP voters looking for alternative', party: 'Congress' },
    ],
    weaknesses: [
      { item: 'Statewide Congress weakness post-2022 AAP wave', party: 'Congress' },
      { item: 'No clear 2027 narrative beyond "replace Mann government"', party: 'Congress' },
      { item: 'Urban voters trending AAP on development expectations', party: 'Congress' },
    ],
    opportunities: [
      { item: "AAP's governance failures 2022-2026 become focal point", party: 'Congress' },
      { item: 'SAD+BJP alliance could bring Hindutva consolidation in urban Raja Sansi', party: 'Congress/SAD/BJP' },
      { item: 'Drug crisis unaddressed — fear-based mobilization', party: 'Congress' },
    ],
    threats: [
      { item: 'AAP makes inroads in Raja Sansi town', party: 'AAP' },
      { item: "SAD+BJP poach Congress's Hindu voter base", party: 'SAD/BJP' },
      { item: 'Incumbent MLA ticket denial splits Congress vote', party: 'Congress' },
    ],
  },

  // ==========================================================================
  // 11. STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congress: [
      'Sukhwinder Singh Sarkaria as candidate — incumbency is asset',
      "Emphasize Congress's role in stopping AAP's \"failures\"",
      'Farmer distress + unemployment + drug crisis: triple narrative',
      'Local development: claim credit for any road/drainage/urban project 2022-2026',
      'Khatri/business community outreach: economic slowdown concerns',
    ],
    aap: [
      'Capitalize on anti-incumbency against Congress MLA (if 5-term MLA)',
      'Urban voter mobilization on development: water, power, roads',
      'Youth outreach: employment schemes, overseas job cells',
      'Clean governance narrative vs Congress "old politics"',
    ],
    sadBjp: [
      'Need Congress-AAP split to win',
      'Target urban Hindu voters with Hindutva/national security narrative',
      "SAD's rural farmer base: MSP guarantee + stubble solution",
    ],
  },

  // ==========================================================================
  // 12. COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    factors: [
      {
        factor: 'Congress denies ticket to Sukhwinder Sarkaria',
        probability: 'Medium',
        impact: 'HIGH',
      },
      {
        factor: 'AAP fields high-profile candidate',
        probability: 'Medium',
        impact: 'HIGH',
      },
      {
        factor: 'SAD+BJP alliance materializes',
        probability: 'High',
        impact: 'HIGH',
      },
      {
        factor: 'Major law & order incident in Raja Sansi',
        probability: 'Low',
        impact: 'HIGH',
      },
      {
        factor: 'Amritsar development package from central government',
        probability: 'Medium',
        impact: 'MEDIUM',
      },
      {
        factor: 'NRI voter mobilization (social media)',
        probability: 'Medium',
        impact: 'MEDIUM',
      },
    ],
  },

  // ==========================================================================
  // INTELLIGENCE GAPS & VERIFICATION TO-DO
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      { id: 1, item: 'Full 2022 Raja Sansi results — all candidate vote counts', priority: 'High' },
      { id: 2, item: 'Sukhwinder Singh Sarkaria profile — caste, background, previous terms', priority: 'High' },
      { id: 3, item: '2017 and 2012 electoral history — trend analysis', priority: 'High' },
      { id: 4, item: 'Raja Sansi voter turnout 2022 — per CEO Punjab', priority: 'Medium' },
      { id: 5, item: 'Caste-wise vote base breakdown — Jat Sikh %, SC %, Khatri %, etc.', priority: 'Medium' },
      { id: 6, item: 'Booth-level results — to identify which booths won/lost Congress', priority: 'Medium' },
      { id: 7, item: 'Any major development project in Raja Sansi 2022-2026 — MLA constituency fund', priority: 'Medium' },
      { id: 8, item: 'Raja Sansi airport expansion impact — land acquisition controversies', priority: 'Low' },
    ],
    verificationToDo: [
      { id: 1, item: 'Full 2022 Raja Sansi results — all candidate vote counts', priority: 'High' },
      { id: 2, item: 'Sukhwinder Singh Sarkaria profile — caste, background, previous terms', priority: 'High' },
      { id: 3, item: '2017 and 2012 electoral history — trend analysis', priority: 'High' },
      { id: 4, item: 'Raja Sansi voter turnout 2022 — per CEO Punjab', priority: 'Medium' },
      { id: 5, item: 'Caste-wise vote base breakdown — Jat Sikh %, SC %, Khatri %, etc.', priority: 'Medium' },
      { id: 6, item: 'Booth-level results — to identify which booths won/lost Congress', priority: 'Medium' },
      { id: 7, item: 'Any major development project in Raja Sansi 2022-2026 — MLA constituency fund', priority: 'Medium' },
      { id: 8, item: 'Raja Sansi airport expansion impact — land acquisition controversies', priority: 'Low' },
    ],
  },

  // ==========================================================================
  // STRATEGIC DATA (from summary file)
  // ==========================================================================
  strategicData: {
    congressStrategicPosition: {
      margin: 5474,
      assessment: 'Congress won with 5,474 margin - competitive but defensible. The party must maintain focus on development and avoid complacency.',
      recommendation: 'Congress must work to retain. Incumbent MLA should be renominated.',
    },
    recommendedCandidateProfile: {
      profile: 'Development-focused, mixed urban-rural appeal',
      casteConsideration: 'Khatri/Arora background suits urban section',
      keyQualities: ['Professional background', 'Accessibility'],
    },
    attackLinesAgainstIncumbent: [
      {
        topic: 'Narrow Win',
        line: 'Congress barely won - anti-incumbency present',
      },
      {
        topic: 'Development',
        line: 'Infrastructure gaps persist',
      },
      {
        topic: 'Unemployment',
        line: 'Educated youth without jobs',
      },
      {
        topic: 'Drug Problem',
        line: 'Urban-rural drug nexus',
      },
    ],
  },

  // ==========================================================================
  // MONITORING KEYWORDS
  // ==========================================================================
  monitoringKeywords: {
    keywords: [
      '"raja sansi" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
      '"sukhwinder singh sarkaria" AND "raja sansi"',
      '"raja sansi" AND ("congress" OR "aap" OR "sad")',
      '"raja sansi" AND ("development" OR "urban" OR "roads")',
      '"raja sansi" AND ("drug" OR "unemployment")',
    ],
  },
};
