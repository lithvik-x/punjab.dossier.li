/**
 * AC017 - Amritsar Central Assembly Constituency
 * Data File
 *
 * Generated through 6-cycle enhancement pipeline
 * Source: AC017-Amritsar-Central.md (Deep Research) + AC017-AmritsarCentral-deep.md (Summary)
 */

import {
  AmritsarCentralConstituency,
  Party,
  Religion,
  CasteCategory,
  MediaType,
  ProbabilityLevel,
  ImpactLevel,
  VerificationStatus,
  ConstituencyRegion,
  ConstituencyType,
} from "./ac017-amritsar-central-types";

// ============================================================================
// CYCLE 1-6: DATA CONSOLIDATION
// All content from both source files, organized by section
// ============================================================================

export const amritsarCentralData: AmritsarCentralConstituency = {
  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    microTaskId: "AC017-AmritsarCentral-001",
    topic: "Amritsar Central Assembly Constituency Deep Research",
    tier: 2,
    date: "20 May 2026",
    agent: "Orchestrator-R1",
    sourcesConsulted: [
      "Web search (minimax-web-search)",
      "OneIndia",
      "IndiaVotes",
      "ADR India PDF",
      "Indiastat Factbook",
      "Wikipedia",
    ],
    verificationStatus: VerificationStatus.PARTIALLY_VERIFIED,
    dataCurrency: "As of 20 May 2026",
  },

  // ==========================================================================
  // SECTION 1: CONSTITUENCY IDENTITY & BASELINE
  // ==========================================================================
  constituencyIdentity: {
    acNumber: 17,
    name: "Amritsar Central",
    district: "Amritsar",
    region: ConstituencyRegion.MAJHA,
    type: ConstituencyType.GENERAL,
    geographicProfile: {
      description: "Amritsar Central is a General category Punjab Legislative Assembly constituency",
      location: "Located in the heart of Amritsar city — prime urban constituency",
      lokSabhaConstituency: "Part of Amritsar Lok Sabha constituency",
      keyAreas: [
        "Golden Temple area",
        "City commercial centre",
        "Old city",
      ],
      urbanPercentage: 98,
    },
    keyStatistics2022: {
      winner: "Ajay Gupta",
      runnerUp: null,
      runnerUpParty: null,
      winnerParty: Party.AAP,
      winnerVoteCount: null,
      margin: 14026,
      totalElectors: 142000,
      voterTurnout: 68,
    },
    scPopulation: {
      percentage: 20.22,
      comparisonToDistrictAverage: "Lower SC % than district average — reflects urban commercial character",
      notes: "Golden Temple area has significant Sikh population; surrounding city has more Hindu population",
    },
  },

  // ==========================================================================
  // SECTION 2: DEMOGRAPHIC DEEP-DIVE
  // ==========================================================================
  demographics: {
    casteComposition: [
      { category: CasteCategory.UPPER_CASTE, percentage: 32 },
      { category: CasteCategory.JAT_SIKH, percentage: 22 },
      { category: CasteCategory.SCHEDULED_CASTE, percentage: 20 },
      { category: CasteCategory.OBC, percentage: 12 },
      { category: CasteCategory.MINORITY, percentage: 10 },
      { category: CasteCategory.OTHER, percentage: 4 },
    ],
    religionBreakdown: [
      { religion: Religion.HINDU, percentage: 49.36 },
      { religion: Religion.SIKH, percentage: 48.0 },
      { religion: Religion.CHRISTIAN, percentage: 1.5 },
      { religion: Religion.MUSLIM, percentage: 0.5 },
      { religion: Religion.BUDDHIST, percentage: 0.3 },
      { religion: Religion.JAIN, percentage: 0.2 },
    ],
    votingDynamics: [
      {
        area: "Golden Temple area",
        voterBase: "Sikh voter base — traditional Congress/AAP",
        dominantParties: ["Congress", "AAP"],
      },
      {
        area: "City commercial area (Hall Bazar, Lawrence Road)",
        voterBase: "Khatri/Brahmin/Hindu — BJP/Congress/AAP",
        dominantParties: ["BJP", "Congress", "AAP"],
      },
      {
        area: "Old city",
        voterBase: "Mixed Hindu-Sikh; lower-income urban voters",
        dominantParties: ["AAP", "Congress", "BJP"],
      },
    ],
  },

  // ==========================================================================
  // SECTION 3: ELECTORAL HISTORY
  // ==========================================================================
  electoralHistory: {
    results: [
      {
        year: 2022,
        winner: "Ajay Gupta",
        party: Party.AAP,
        runnerUp: "",
        runnerUpParty: "",
        margin: 14026,
        needsVerification: false,
      },
      {
        year: 2017,
        winner: "",
        party: "",
        runnerUp: "",
        runnerUpParty: "",
        margin: 0,
        needsVerification: true,
      },
      {
        year: 2012,
        winner: "",
        party: "",
        runnerUp: "",
        runnerUpParty: "",
        margin: 0,
        needsVerification: true,
      },
    ],
    significance: "AAP winning a Hindu-majority urban seat in the holy city of Amritsar was politically significant. AAP managed to attract both Sikh and Hindu urban voters.",
    historicalNote: "Amritsar Central has traditionally been contested between BJP, Congress, and SAD. AAP's 2022 win reflected anti-incumbency against all three.",
  },

  // ==========================================================================
  // SECTION 4: PUBLIC SENTIMENT
  // ==========================================================================
  publicSentiment: {
    perceivedMood: null,
    needsVerification: true,
    aapPosition: "14,026 margin is narrow by AAP's Amritsar standards — seat more competitive than North/West. Urban commercial voters (Khatri, Bania, Brahmin) may be more volatile",
    keyVoterConcerns: [
      {
        topic: "Golden Temple & Religious Tourism",
        description: "Civic infrastructure around sacred site — cleaning, pilgrim facilities",
      },
      {
        topic: "Urban Infrastructure",
        description: "Water supply, power, drainage in old city",
      },
      {
        topic: "Law & Order",
        description: "Tourist safety, drug peddling near city centre",
      },
      {
        topic: "Business Environment",
        description: "Commercial taxes, market conditions, GST impact on small traders",
      },
      {
        topic: "Governance",
        description: '"Delhi control" criticism vs AAP\'s actual autonomy',
      },
    ],
    tourismFactor: "Amritsar Central's identity as a global pilgrimage destination creates unique voter priorities — Golden Temple management, border tourism (Wagah), international tourist safety.",
  },

  // ==========================================================================
  // SECTION 5: GOVERNANCE GAP
  // ==========================================================================
  governanceGap: {
    mlaPerformance: {
      name: "Ajay Gupta",
      party: Party.AAP,
      term: "2022-2026",
      background: null,
      needsVerification: true,
    },
    cityCentreInfrastructure: [
      "Golden Temple area: Cleanliness, drainage, water supply — maintained by SGPC not state government",
      "Old city: Aging water supply pipelines, drainage issues",
      "Power supply: Load shedding reports in peak summer",
      "Roads: City centre roads better than periphery",
    ],
    tourismSecurity: [
      "Border area security: BSF presence; tourist visa monitoring",
      "City centre policing: Law & order for pilgrims",
    ],
  },

  // ==========================================================================
  // SECTION 6: LOCAL ISSUES
  // ==========================================================================
  localIssues: {
    issues: [
      {
        rank: 1,
        issue: "Urban Infrastructure & Civic Services",
        description: "Water supply, drainage, road quality in old city",
      },
      {
        rank: 2,
        issue: "Golden Temple Area Management",
        description: "Pilgrim facilities, cleanliness, parking",
      },
      {
        rank: 3,
        issue: "Law & Order / Tourist Safety",
        description: "Drug peddling near city, theft",
      },
      {
        rank: 4,
        issue: "Business & Commercial Taxes",
        description: "Market traders' concerns about GST, rent, competition from e-commerce",
      },
      {
        rank: 5,
        issue: "Governance & Corruption",
        description: "MELA transparency, licensing, bribery",
      },
    ],
    source: "General Amritsar issues",
  },

  // ==========================================================================
  // SECTION 7: INFLUENCERS & POWER STRUCTURE
  // ==========================================================================
  influencers: {
    political: [
      {
        name: "Ajay Gupta (AAP MLA)",
        party: Party.AAP,
        description: "First-term incumbent; [NEEDS VERIFICATION — business background?]",
        needsVerification: true,
      },
      {
        name: "BJP Workers",
        party: Party.BJP,
        description: "Strong in city centre Hindu areas; rebuilding after 2022 wipeout",
        needsVerification: false,
      },
      {
        name: "Congress Workers",
        party: Party.CONGRESS,
        description: "Traditional city organization; reduced but present",
        needsVerification: false,
      },
      {
        name: "SAD Workers",
        party: Party.SAD,
        description: "Some presence; coalition with BJP now",
        needsVerification: false,
      },
      {
        name: "SGPC Members",
        description: "Golden Temple management body — political influence on Sikh voters",
        needsVerification: false,
      },
    ],
    socialReligious: [
      {
        name: "Golden Temple Management Committee (SGPC)",
        type: "Religious Body",
        description: "Controls sacred site; significant voter influence",
      },
      {
        name: "Market Traders Association",
        type: "Business Association",
        description: "Khatri/Arora business voice — political fundraising",
      },
      {
        name: "Hotel/Restaurant Owners",
        type: "Tourism Stakeholders",
        description: "Tourism economy stakeholders; tourism priorities",
      },
      {
        name: "Ramdasia Community Leaders",
        type: "SC Community",
        description: "[NEEDS VERIFICATION — any presence]",
      },
    ],
  },

  // ==========================================================================
  // SECTION 8: MEDIA LANDSCAPE
  // ==========================================================================
  mediaLandscape: {
    outlets: [
      { name: "The Tribune", type: MediaType.NATIONAL },
      { name: "The Hindu", type: MediaType.NATIONAL },
      { name: "Indian Express", type: MediaType.NATIONAL },
      { name: "The Times of India (Punjab edition)", type: MediaType.NATIONAL },
      { name: "Amritsar Tribune", type: MediaType.LOCAL },
      { name: "Punjab Kesari", type: MediaType.LOCAL },
      { name: "Dainik Bhaskar", type: MediaType.LOCAL },
    ],
    tourismMediaNotes: "International coverage of Golden Temple amplifies Amritsar's national profile",
    socialMediaNotes: "Twitter: Tourism, national media | Facebook: Local community | Instagram: Tourism-focused content; voter engagement",
  },

  // ==========================================================================
  // SECTION 9: PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyGeography: "Amritsar Central: Heart of Amritsar city",
    goldenTempleArea: "Sikh spiritual centre — core Sikh voter area",
    cityCentreCommercial: ["Hall Bazar", "Lawrence Road", "GT Road markets"],
    oldCity: "Densely populated urban residential",
    internationalBorder: "Wagah ~20km from city centre",
    voterDemographicsEstimate: {
      urbanVoters: 98,
      scVoters: 20,
      sikhVoters: 55,
      hinduVoters: 43,
      womenVoters: "Significant turnout in urban constituency",
    },
  },

  // ==========================================================================
  // SECTION 10: SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      {
        text: "Incumbent MLA with 4 years visibility",
        party: "AAP",
      },
      {
        text: "City centre development projects: claim credit",
        party: "AAP",
      },
      {
        text: "Sikh voter base (Golden Temple area) + Hindu urban moderate coalition",
        party: "AAP",
      },
    ],
    weaknesses: [
      {
        text: "Narrow 14,026 margin — more vulnerable than other AAP seats",
        party: "AAP",
      },
      {
        text: "Hindu urban voters more volatile — susceptible to Hindutva mobilization",
        party: "AAP",
      },
      {
        text: "Commercial community may be upset by business environment issues",
        party: "AAP",
      },
    ],
    opportunities: [
      {
        text: "Tourism infrastructure: 'Development of Amritsar as global city'",
        party: "AAP",
      },
      {
        text: "Golden Temple area improvements: CM Mann's initiatives",
        party: "AAP",
      },
      {
        text: "Law & order improvement: Police reforms messaging",
        party: "AAP",
      },
      {
        text: "Hindutva consolidation: BJP's natural base in Hindu-majority city seat",
        party: "Opposition",
      },
      {
        text: "Business community anger: GST, e-commerce competition",
        party: "Opposition",
      },
      {
        text: "Governance failures: Hooch tragedy, law & order",
        party: "Opposition",
      },
    ],
    threats: [
      {
        text: "Hindutva consolidation: BJP's natural base in Hindu-majority city seat",
        party: "Opposition",
      },
      {
        text: "Business community anger: GST, e-commerce competition",
        party: "Opposition",
      },
      {
        text: "Governance failures: Hooch tragedy, law & order",
        party: "Opposition",
      },
    ],
  },

  // ==========================================================================
  // SECTION 11: STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: [
    {
      party: "AAP",
      strategy: [
        "Field Ajay Gupta — incumbency critical given narrow margin",
        "Development: Claim credit for any city centre projects",
        "Law & order: 'Amritsar safest for pilgrims under AAP'",
        "Hindu outreach: 'AAP delivered for all — Sikh and Hindu'",
        'Counter Hindutva: "BJP does politics, AAP does development"',
      ],
    },
    {
      party: "BJP",
      strategy: [
        "Strong Hindu candidate — natural fit for Hindu-majority city seat",
        "Hindutva mobilization: Ram temple, article 370, national security",
        "Business community outreach: Economic nationalism, GST simplification",
        "AAP governance failures: Law & order, hooch tragedy",
      ],
    },
    {
      party: "Congress",
      strategy: [
        "Difficult third-party position in city",
        "Alliance with SAD makes sense only if Congress concedes",
      ],
    },
  ],

  // ==========================================================================
  // SECTION 12: COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: [
    {
      factor: "BJP fields high-profile Hindu candidate",
      probability: ProbabilityLevel.MEDIUM,
      impact: ImpactLevel.HIGH,
    },
    {
      factor: "Another law & order incident",
      probability: ProbabilityLevel.MEDIUM,
      impact: ImpactLevel.HIGH,
    },
    {
      factor: "Ajay Gupta denied ticket",
      probability: ProbabilityLevel.MEDIUM,
      impact: ImpactLevel.HIGH,
    },
    {
      factor: "Congress-SAD alliance seat-sharing",
      probability: ProbabilityLevel.HIGH,
      impact: ImpactLevel.HIGH,
    },
    {
      factor: "Golden Temple management controversy",
      probability: ProbabilityLevel.LOW,
      impact: ImpactLevel.MEDIUM,
    },
    {
      factor: "Major city infrastructure project",
      probability: ProbabilityLevel.MEDIUM,
      impact: ImpactLevel.MEDIUM,
    },
  ],

  // ==========================================================================
  // INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: [
    { id: 1, item: "Full 2022 Amritsar Central results — all candidates, vote counts" },
    { id: 2, item: "Ajay Gupta profile — background, caste, prior political experience" },
    { id: 3, item: "2017 electoral history — who won and margin" },
    { id: 4, item: "Hindu voter % in constituency — estimate for Hindutva mobilization potential" },
    { id: 5, item: "SGPC's political alignment — influences Sikh voter block" },
    { id: 6, item: "City centre specific infrastructure issues — baseline for claims" },
    { id: 7, item: "BJP's candidate selection — if a prominent Hindu leader" },
    { id: 8, item: "Tourism voter mobilization — NRI voters, pilgrim voters" },
  ],

  // ==========================================================================
  // KEYWORDS FOR MONITORING
  // ==========================================================================
  keywordsForMonitoring: {
    keywordSets: [
      '"amritsar central" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
      '"ajay gupta" AND "amritsar central" AND "aap"',
      '"amritsar central" AND ("bjp" OR "congress" OR "hindu" OR "golden temple")',
      '"amritsar" AND ("law order" OR "hooch" OR "tourism" OR "pilgrim")',
      '"amritsar" AND ("golden temple" OR "development" OR "urban")',
    ],
  },

  // ==========================================================================
  // SUMMARY DATA (from AC017-AmritsarCentral-deep.md)
  // ==========================================================================
  summary: {
    acNumber: 17,
    name: "Amritsar Central",
    district: "Amritsar",
    region: "Majha",
    type: "General",
    date: "20 May 2026",
    overview: "Amritsar Central is a general assembly constituency covering central Amritsar including the Golden Temple area. Urban constituency with religious and commercial significance.",
    electionResults2022: {
      winner: "Ajay Gupta",
      party: "Aam Aadmi Party",
      margin: 14026,
      totalElectors: 142000,
      voterTurnout: 68,
    },
    electionResults2017: {
      winner: null,
      party: null,
      needsVerification: true,
    },
    electionResults2012: {
      winner: null,
      needsVerification: true,
    },
    casteComposition: [
      { category: CasteCategory.UPPER_CASTE, percentage: 32 },
      { category: CasteCategory.JAT_SIKH, percentage: 22 },
      { category: CasteCategory.SCHEDULED_CASTE, percentage: 20 },
      { category: CasteCategory.OBC, percentage: 12 },
      { category: CasteCategory.MINORITY, percentage: 10 },
      { category: CasteCategory.OTHER, percentage: 4 },
    ],
    keyLocalIssues: [
      "Heritage preservation and Golden Temple area management",
      "Urban development",
      "Tourism infrastructure",
      "Law and order",
      "Commercial regulation",
    ],
    congressStrategicPosition: "AAP won with 14,026 margin. Congress must challenge by highlighting governance failures and building coalition with non-AAP voters.",
    recommendedCandidateProfile: {
      profile: "Urban professional, heritage focus",
      casteConsideration: "Khatri/Arora suits commercial community",
      keyQualities: ["Development credentials", "accessibility"],
    },
    attackLinesAgainstAAP: [
      "Heritage Neglect: Golden Temple area issues",
      "Broken Promises: Urban development promises unfulfilled",
      "Commercial Issues: Shopkeeper/Trader concerns ignored",
      "Tourism: Tourism potential not realized",
    ],
    sources: "Oneindia, IndiaVotes, Chanakyya. AAP won but margin narrower - Congress can challenge.",
  },
};

// ============================================================================
// EXPORTS
// ============================================================================

export default amritsarCentralData;
