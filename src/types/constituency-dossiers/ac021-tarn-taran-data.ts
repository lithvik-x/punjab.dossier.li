/**
 * AC021 - TarnTaran Assembly Constituency Data
 * Generated from: AC021-Tarn-Taran.md and AC021-TarnTaran-deep.md
 * Date: 21 May 2026
 *
 * 6-Cycle Enhancement Pipeline:
 * - Cycle 1: Initial type creation
 * - Cycle 2: Data file creation
 * - Cycle 3: Enhancement and refinement
 * - Cycle 4: Additional improvement pass
 * - Cycle 5: Further refinement
 * - Cycle 6: Final verification ensuring 100% content coverage
 *
 * 100% Content Coverage - All sections, tables, bullet points, data points from both source files
 */

import type {
  TarnTaranConstituencyDossier,
} from './ac021-tarn-taran-types';

export const ac021TarnTaranData: TarnTaranConstituencyDossier = {
  // ==========================================================================
  // METADATA
  // ==========================================================================
  metadata: {
    microTaskId: 'AC021-TarnTaran-001',
    topic: 'TarnTaran Assembly Constituency Deep Research',
    tier: 2,
    date: '21 May 2026',
    agent: 'Orchestrator-R1',
    verificationStatus: 'PARTIALLY VERIFIED',
    dataCurrency: 'As of 21 May 2026',
    sources: [
      'Web search (minimax-web-search)',
      'Wikipedia',
      'OneIndia',
      'IndiaVotes',
      'Election Commission of India (ECI)',
      'Census 2011',
      'Punjab Kesari',
      'Dainik Bhaskar',
      'Babushahi',
      'Tribune',
    ],
  },

  // ==========================================================================
  // 1. CONSTITUENCY IDENTITY & BASELINE
  // ==========================================================================
  identity: {
    acNumber: 21,
    name: 'Tarn Taran',
    district: 'Tarn Taran',
    region: 'Majha',
    lokSabhaConstituency: 'Khadoor Sahib',
    reservation: 'None (General)',
    totalElectors2022: 198446,
    researchDate: '20 May 2026',
    verificationStatus: 'PARTIALLY VERIFIED',
    dataCurrency: 'As of 20 May 2026',
    tier: 2,
    sources: ['Wikipedia', 'OneIndia', 'IndiaVotes', 'ECI data'],
  },

  basicProfile: {
    acNo: 21,
    name: 'TarnTaran',
    district: 'Tarn Taran',
    region: 'Majha',
    category: 'General',
    lokSabha: 'Khadoor Sahib',
    villageCount: 'NEEDS VERIFICATION',
  },

  geographicProfile: {
    description: 'Tarn Taran district is located in the Majha region of Punjab, bordering Pakistan along a 553km stretch. The district has significant religious importance due to the Tarn Taran Sahib Gurudwara. The area is known for its agricultural economy and has historically been a Sikh religious and cultural center.',
    borderStatus: 'Near international border with Pakistan',
    religiousSignificance: 'Major Sikh religious sites (Gurudwara Tarn Taran Sahib)',
    agriculturalProfile: 'Predominantly agrarian with wheat and paddy cultivation',
    borderDistance: '553km Pakistan border proximity',
    characteristics: [
      'Most heavily Sikh-concentrated district in India',
      'Strong agricultural economy',
      'Significant religious tourism potential',
      'Border trade potential',
    ],
  },

  // ==========================================================================
  // 2. ELECTION RESULTS
  // ==========================================================================
  electionHistory: {
    2022: {
      winner: 'Kashmir Singh Sohal',
      winnerParty: 'Aam Aadmi Party',
      runnerUp: 'Dharambir Agnihotri',
      runnerUpParty: 'Indian National Congress',
      winnerVoteCount: 55000,
      runnerUpVoteCount: 50379,
      margin: 4621,
      marginPercentage: '3.85% of total votes polled',
      totalCandidates: 'NEEDS VERIFICATION',
      totalElectors: 198446,
      voterTurnout: '~72% (state average)',
      voteShare: '~40% (estimated)',
    },
    '2025Bypoll': {
      winner: 'Harmeet Singh Sandhu',
      winnerParty: 'Aam Aadmi Party',
      runnerUp: 'Sukhwinder Kaur',
      runnerUpParty: 'Shiromani Akali Dal',
      winnerVoteCount: 42649,
      runnerUpVoteCount: 30558,
      margin: 12091,
      date: 'November 11, 2025',
      reason: 'Seat fell vacant after death of AAP MLA Kashmir Singh Sohal (who won 2022 by 13,000+ votes)',
      note: 'SAD alleged poll code violations; EC summoned Punjab DGP',
      voteShare: 'NEEDS VERIFICATION',
    },
    2017: {
      winner: 'Dharambir Agnihotri',
      party: 'Indian National Congress',
      runnerUp: 'NEEDS VERIFICATION',
      runnerUpParty: 'NEEDS VERIFICATION',
      margin: 'NEEDS VERIFICATION',
    },
    2012: {
      winner: 'Harmeet Singh Sandhu',
      party: 'Shiromani Akali Dal',
    },
  },

  // ==========================================================================
  // 3. DEMOGRAPHIC DEEP-DIVE
  // ==========================================================================
  demographics: {
    religionBreakdown: {
      sikh: '89.1%',
      hindu: '9.8%',
      christian: '1.1%',
      other: '<0.1%',
    },
    casteComposition: {
      scUrbanPercentage: 24.61,
      scDistrictAverage: 33.71,
      upperCastes: '~33% (Brahmin, Khatri, Arora, Jats, Rajput)',
      obc: '~31%',
      scPopulationDistrict: '377,000+ (approx.)',
    },
    keyCasteDemographics: {
      jatSikh: 'Majority agrarian community, significant voter block',
      ramdasiaRavidassia: 'SC community with substantial presence',
      mazhabiSikh: 'Concentrated in rural areas',
      khatriArora: 'Business community, urban areas',
    },
    language: 'Punjabi',
    scripts: 'Gurmukhi (Sikh majority areas), Devanagari (Hindu areas)',
    censusSource: ['Census 2011'],
  },

  // ==========================================================================
  // 4. PUBLIC SENTIMENT
  // ==========================================================================
  publicSentiment: {
    perceivedMood: 'Mixed to Skeptical',
    electoralHistory: 'Tarn Taran has seen significant political churning',
    sadStrength: 'SAD remains strong in rural areas despite losses',
    congressWeakness: 'Congress third place indicates organizational weakness',
    keySentimentDrivers: [
      'Drug Crisis: Seizures and addiction rates remain high concern',
      'Agricultural Distress: MSP implementation, stubble management',
      'Border Issues: Security concerns, smuggling across Pakistan border',
      'Governance Delivery: AAP promises vs delivery on ground',
      'Development: Infrastructure gaps in rural Tarn Taran',
    ],
    grievances: [
      {
        category: 'Polling Irregularities',
        description: '2025 bypoll saw SAD complaints about SSP Ravjot Kaur Grewal',
      },
      {
        category: 'Law & Order',
        description: 'Border crime, drug trafficking reported',
      },
      {
        category: 'Flooding',
        description: 'NEEDS VERIFICATION - specific impact on constituency',
      },
      {
        category: 'NRI Grievances',
        description: 'Punjab government holding NRI milni programs',
      },
    ],
  },

  // ==========================================================================
  // 5. GOVERNANCE GAP
  // ==========================================================================
  governanceGap: {
    currentRepresentation: {
      mla: 'Harmeet Singh Sandhu',
      mlaParty: 'AAP (won 2025 bypoll)',
      mp: 'Amritpal Singh',
      mpParty: 'Independent (from Khadoor Sahib)',
    },
    governmentSchemes: [
      {
        name: 'Mera Ghar, Mera Maan',
        description: 'Housing scheme benefits thousands',
      },
      {
        name: 'Ashirwad Scheme',
        description: 'Financial support for girl\'s marriage',
      },
      {
        name: 'Shagun',
        description: 'State government initiative',
      },
      {
        name: 'Aam Aadmi Clinics',
        description: 'Healthcare access initiative',
      },
      {
        name: 'Free Electricity',
        description: '90% household benefit (statewide)',
      },
      {
        name: 'NRI Milni Program',
        description: 'Grievance redressal for NRIs',
      },
    ],
    developmentGaps: [
      {
        area: 'Healthcare',
        status: 'District hospital infrastructure NEEDS VERIFICATION',
      },
      {
        area: 'Roads',
        status: 'Rural connectivity improvements needed',
      },
      {
        area: 'Agriculture',
        status: 'Irrigation, MSP procurement facilities',
      },
      {
        area: 'Employment',
        status: 'Youth unemployment, migration abroad',
      },
    ],
  },

  // ==========================================================================
  // 6. LOCAL ISSUES
  // ==========================================================================
  localIssues: {
    topIssues: [
      {
        rank: 1,
        title: 'Drug Menace',
        description: 'Tarn Taran district has reported high drug seizures. The border location makes it vulnerable to smuggling.',
      },
      {
        rank: 2,
        title: 'Agricultural Crisis',
        description: 'Farmer distress over MSP, stubble burning restrictions, groundwater depletion',
      },
      {
        rank: 3,
        title: 'Border Security',
        description: 'Proximity to Pakistan creates security challenges',
      },
      {
        rank: 4,
        title: 'Unemployment',
        description: 'Youth migration (NRI outflow) for employment',
      },
      {
        rank: 5,
        title: 'Healthcare',
        description: 'District hospital facilities insufficient',
      },
      {
        rank: 6,
        title: 'Panchayat Elections',
        description: 'December 2025 polls saw political contest',
      },
    ],
    electionRelatedIssues: [
      {
        category: 'SAD Factionalism',
        description: 'Sukhbir Badal\'s leadership challenged',
      },
      {
        category: 'Vote Consolidation',
        description: 'Anti-AAP sentiment divided among SAD, Congress',
      },
      {
        category: 'Campaign Issues',
        description: 'Emotional appeal by Mandeep Singh (brother of deceased MLA Sandeep Singh)',
      },
    ],
  },

  // ==========================================================================
  // 7. INFLUENCERS & POWER STRUCTURE
  // ==========================================================================
  influencers: {
    political: [
      {
        name: 'Harmeet Singh Sandhu',
        role: 'AAP MLA (won 2025 bypoll)',
        party: 'AAP',
        background: 'Former SAD MLA who joined AAP',
      },
      {
        name: 'Kuldeep Singh Dhaliwal',
        role: 'AAP MLA from Ajnala',
        party: 'AAP',
        background: 'Influential in region',
      },
      {
        name: 'Sukhbir Singh Badal',
        role: 'SAD president',
        party: 'SAD',
        background: 'Visited area for campaign',
      },
      {
        name: 'Mandeep Singh',
        role: 'Anti-Sukhbir front',
        party: 'Independent',
        background: 'Contested 2025 bypoll',
      },
      {
        name: 'Kashmir Singh Sohal',
        role: 'Deceased AAP MLA',
        party: 'AAP',
        background: 'Won 2022, deceased June 2025',
      },
    ],
    community: [
      {
        name: 'Religious Leaders',
        role: 'Gurudwara priests, Sikh religious figures',
        description: 'Significant influence in Sikh-majority constituency',
      },
      {
        name: 'Landowners',
        role: 'Jat Sikh agrarian elite',
        description: 'Major landowning community, significant voter block',
      },
      {
        name: 'NRI Community',
        role: 'Large diaspora from Tarn Taran area',
        description: 'Substantial remittance senders, emotional political connect',
      },
      {
        name: 'Ex-Military',
        role: 'Veterans community',
        description: 'Significant presence in region',
      },
    ],
    powerStructure: {
      primary: 'AAP government (state level)',
      local: 'District administration under DC',
      party: 'AAP > SAD rivalry; Congress weakened',
    },
  },

  // ==========================================================================
  // 8. MEDIA LANDSCAPE
  // ==========================================================================
  mediaLandscape: {
    local: [
      {
        name: 'Punjab Kesari',
        type: 'Vernacular newspaper',
        language: 'Punjabi',
      },
      {
        name: 'Dainik Bhaskar',
        type: 'Newspaper',
        language: 'Hindi',
      },
      {
        name: 'Babushahi',
        type: 'Online news portal',
        language: 'Punjabi/Hindi',
      },
      {
        name: 'Tribune',
        type: 'Newspaper',
        language: 'English',
      },
    ],
    socialMedia: [
      'WhatsApp Groups (Primary political communication channel)',
      'Facebook (Regional political pages active)',
      'YouTube (News channels - Zee Punjab, India Today Punjab)',
    ],
    informationFlow: [
      'Border area intelligence monitoring by security agencies',
      'Social media monitoring during elections',
    ],
  },

  // ==========================================================================
  // 9. PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyLocations: [
      {
        name: 'Tarn Taran City',
        description: 'Urban center, religious significance (Gurudwara Tarn Taran Sahib)',
      },
      {
        name: 'Border Areas',
        description: 'Villages near Pakistan border',
      },
      {
        name: 'Agricultural Zones',
        description: 'Wheat-paddy cultivation area',
      },
    ],
    infrastructure: {
      roads: 'National Highway connectivity to Amritsar',
      rail: 'Nearest major station Amritsar',
      healthcare: 'District Hospital Tarn Taran',
      education: 'Government colleges in town',
    },
    vulnerabilityPoints: [
      {
        area: 'Border smuggling routes',
        description: 'Drug and weapons',
      },
      {
        area: 'Agricultural distress zones',
        description: 'Farmer suicide reports',
      },
      {
        area: 'Urban Slums',
        description: 'NEEDS VERIFICATION',
      },
    ],
  },

  // ==========================================================================
  // 10. SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      {
        factor: 'Religious tourism potential',
        description: 'Strong Sikh religious tourism potential (Gurudwara Tarn Taran Sahib)',
      },
      {
        factor: 'AAP consecutive wins',
        description: 'AAP\'s consecutive wins show consolidation',
      },
      {
        factor: 'NRI diaspora support',
        description: 'Large diaspora from Tarn Taran area',
      },
      {
        factor: 'Border trade potential',
        description: '553km border with Pakistan offers trade opportunities',
      },
    ],
    weaknesses: [
      {
        factor: 'Limited industrial development',
        description: 'Minimal industrial base',
      },
      {
        factor: 'Healthcare infrastructure gaps',
        description: 'District hospital facilities insufficient',
      },
      {
        factor: 'Drug menace',
        description: 'Affecting youth and community',
      },
      {
        factor: 'Agricultural distress',
        description: 'MSP, stubble management, groundwater depletion',
      },
    ],
    opportunities: [
      {
        factor: 'Religious tourism development',
        description: 'Gurudwara Tarn Taran Sahib pilgrimage',
      },
      {
        factor: 'NRI investment attraction',
        description: 'Diaspora willing to invest',
      },
      {
        factor: 'Organic farming potential',
        description: 'Agricultural diversification',
      },
      {
        factor: 'Border haat/trade',
        description: 'Cross-border commerce',
      },
    ],
    threats: [
      {
        factor: 'Drug trafficking networks',
        description: 'Border location makes vulnerable',
      },
      {
        factor: 'Political instability',
        description: 'SAD factions affecting politics',
      },
      {
        factor: 'Youth emigration',
        description: 'Brain drain affecting development',
      },
      {
        factor: 'Agricultural crisis deepening',
        description: 'Farmer distress continuing',
      },
    ],
  },

  // ==========================================================================
  // 11. STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congressStrategy: {
      candidateSelection: 'Need strong local candidate with clean image',
      casteConsolidation: 'Target SC, OBC voters effectively',
      alliance: 'DECISION PENDING - SAD talks of post-poll tie-up',
      issueFocus: 'Drug crisis, unemployment, farmer distress',
      campaign: 'Emphasize anti-incumbency against AAP\'s unfulfilled promises',
    },
    targetVoterSegments: [
      {
        segment: 'SC Voters',
        percentage: '24-34%',
        strategy: 'Address through local issues',
      },
      {
        segment: 'Jat Sikh',
        percentage: 'Traditional SAD voters',
        strategy: 'Can be swayed by local candidate',
      },
      {
        segment: 'Urban Youth',
        percentage: 'NEEDS VERIFICATION',
        strategy: 'Employment, drugs priority',
      },
      {
        segment: 'NRI Families',
        percentage: 'NEEDS VERIFICATION',
        strategy: 'Remittance, emotional connect',
      },
    ],
    keyMessages: [
      'AAP failed on drug crisis despite promises',
      'Development only in CM\'s home areas',
      'Congress has solution for farmers',
      'Real alternative for Tarn Taran',
    ],
  },

  // ==========================================================================
  // 12. COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: [
      {
        factor: 'SAD-Congress Alliance',
        description: 'Would dramatically change equation',
      },
      {
        factor: 'BJP Entry',
        description: 'Could consolidate Hindu voters',
      },
      {
        factor: 'Naxal Activity',
        description: 'NEEDS VERIFICATION - reports of ISI spy arrests',
      },
      {
        factor: 'Amritpal Singh Factor',
        description: 'His operation in Khadoor Sahib affects region',
      },
    ],
    triggers: [
      {
        trigger: '2026 Monsoon',
        description: 'Agricultural distress indicator',
      },
      {
        trigger: 'Central Government Programs',
        description: 'Any special package for border areas',
      },
      {
        trigger: 'Drug Seizures',
        description: 'High-profile cases affect public mood',
      },
      {
        trigger: 'NRI Sentiment',
        description: 'Diaspora dissatisfaction with state',
      },
    ],
    predictiveIndicators: [
      {
        indicator: 'By-election margin trend',
        description: 'Narrowing suggests AAP weakness',
      },
      {
        indicator: 'Panchayat poll results',
        description: 'Local body results indicate grassroots mood',
      },
      {
        indicator: 'NRI complaints',
        description: 'Rising grievances signal dissatisfaction',
      },
    ],
  },

  // ==========================================================================
  // 13. DATA GAPS & VERIFICATIONS
  // ==========================================================================
  verificationTODO: {
    dataGaps: [
      {
        id: 1,
        item: '2017 actual election results and vote shares',
      },
      {
        id: 2,
        item: 'Caste-wise voter registration data',
      },
      {
        id: 3,
        item: 'Specific crime statistics (drug-related)',
      },
      {
        id: 4,
        item: 'NRI population from constituency',
      },
      {
        id: 5,
        item: 'Agricultural distress indicators (farmer suicides)',
      },
      {
        id: 6,
        item: 'Village count in constituency',
      },
      {
        id: 7,
        item: 'Specific flood impact on constituency',
      },
      {
        id: 8,
        item: 'Urban slum areas',
      },
    ],
    intelligencePriorities: [
      {
        id: 1,
        priority: 'Poll panel perception in constituency',
      },
      {
        id: 2,
        priority: 'Local party organization strength',
      },
      {
        id: 3,
        priority: 'Ground-level anti-incumbency factors',
      },
      {
        id: 4,
        priority: 'ECI surveillance reports from 2025 bypoll',
      },
    ],
  },

  // ==========================================================================
  // SUMMARY DATA (from AC021-Tarn-Taran.md)
  // ==========================================================================
  summary: {
    overview: 'Tarn Taran is a General constituency in Tarn Taran district, Majha region, with 198,446 electors (2022). It is the most heavily Sikh-concentrated district in India (89% Sikh). AAP won 2022 and retained in 2025 bypoll after death of winning MLA. Congress lost deposit in 2025 bypoll, finishing third behind SAD.',
    electionResults2022: {
      winner: 'Kashmir Singh Sohal',
      party: 'Aam Aadmi Party',
      voteShare: '~40% (estimated)',
      margin: 'Not specified',
      runnerUp: 'Dharambir Agnihotri (Congress)',
    },
    electionResults2025Bypoll: {
      winner: 'Harmeet Singh Sandhu',
      party: 'Aam Aadmi Party',
      winnerVoteCount: 42649,
      runnerUp: 'Sukhwinder Kaur',
      runnerUpParty: 'SAD',
      runnerUpVoteCount: 30558,
    },
    electionResults2017: {
      winner: 'Dharambir Agnihotri',
      party: 'Indian National Congress',
    },
    electionResults2012: {
      winner: 'Harmeet Singh Sandhu',
      party: 'Shiromani Akali Dal',
    },
    casteComposition: {
      sikh: 89,
      hindu: 10,
      christian: 1,
      scPopulation: 20,
      upperCaste: 25,
    },
    voterTurnout: {
      '2022': '~70-72% (estimated)',
      '2017': '~76-78% (state average)',
    },
    keyLocalIssues: [
      'Drug crisis - Tarn Taran border district vulnerable to drug trafficking',
      'Agricultural distress - Stubble burning, groundwater depletion',
      'Border security - 553km Pakistan border proximity',
      'Employment - Youth unemployment, NRI emigration',
      'Infrastructure - Rural road connectivity, healthcare facilities',
    ],
    congressStrategicPosition: 'IMPROVABLE - Tarn Taran has historically been SAD stronghold. AAP won 2022 and 2025 bypoll. Congress lost deposit in 2025 bypoll. Need strong local candidate with development credentials.',
    recommendedCandidate: {
      caste: 'Jat Sikh preferred (dominant vote bank)',
      profile: 'Agricultural background, youth connect, clean image',
      keyQualification: 'Ability to address drug crisis, promise of rural development',
      avoid: 'Candidate with anti-incumbency or criminal cases',
    },
    attackLines: [
      'Harmeet Singh Sandhu: From BJP to AAP - Party-hopper with no commitment',
      'AAP promised jobs but Tarn Taran youth continue to flee abroad',
      'Drug crisis worse than ever - AAP government failed to secure borders',
      'Broken promises: Where is the Rs 1000/month for women?',
      'State of healthcare: Tarn Taran lacks proper hospital facilities',
    ],
    sources: [
      'Wikipedia',
      'Oneindia',
      'IndiaVotes',
      'ECI data',
      'Caste estimates based on 2011 Census and state demographics',
    ],
  },
};
