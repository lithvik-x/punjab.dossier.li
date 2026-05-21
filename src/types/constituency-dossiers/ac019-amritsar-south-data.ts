/**
 * AC019 - Amritsar South Assembly Constituency
 * Data File
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC019-Amritsar-South.md, AC019-AmritsarSouth-deep.md
 */

import type { AC019AmritsarSouthDossier } from "./ac019-amritsar-south-types";

export const ac019AmritsarSouthData: AC019AmritsarSouthDossier = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  metadata: {
    acNumber: 19,
    name: "Amritsar South",
    district: "Amritsar",
    region: "Majha",
    type: "General",
    date: "20 May 2026",
    researchId: "AC019-AmritsarSouth-001",
    tier: 2,
    verificationStatus: "PARTIALLY_VERIFIED",
    sourcesConsulted: [
      "Web search (minimax-web-search)",
      "OneIndia",
      "IndiaVotes",
      "ADR India PDF",
      "Indiastat Factbook",
      "Wikipedia",
      "Grokipedia",
    ],
  },

  geographicProfile: {
    description:
      "Amritsar South is a General category Punjab Legislative Assembly constituency located south of Amritsar city — peri-urban and rural areas. Part of Amritsar Lok Sabha constituency. Growing area on Amritsar's urban fringe with agricultural hinterland.",
    partOfLokSabha: "Amritsar Lok Sabha constituency",
    areaCharacter: "Mixed",
    terrain: "Peri-urban and rural areas south of Amritsar city; agricultural hinterland on city's urban fringe",
    keyGeography:
      "Amritsar South: South of city, includes rural villages + peri-urban fringe. Agricultural belt: Intensive farming area in south Amritsar. Dense rural settlement on southern approach to city. Connectivity: Southern highways, major roads to surrounding towns.",
    connectivity: [
      "Southern highways",
      "Major roads to surrounding towns",
      "NH connecting to border areas",
    ],
    voterDemographicsEstimate: {
      ruralVoters: "~65-70%",
      urbanPeriUrbanVoters: "~30-35%",
      jatSikhVoters: "~40-50% (dominant)",
      scVoters: "~20-25%",
      otherHinduVoters: "~25-30% (Khatri, Brahmin, etc.)",
    },
  },

  researchSource: "AC019-Amritsar-South.md (summary dossier) + AC019-AmritsarSouth-deep.md (deep research)",

  // ==========================================================================
  // KEY STATISTICS 2022
  // ==========================================================================
  keyStatistics2022: {
    winner: "Dr. Inderbir Singh Nijjar",
    runnerUp: "[NEEDS VERIFICATION]",
    winnerParty: "Aam Aadmi Party",
    winnerVoteCount: "[NEEDS VERIFICATION — per OneIndia margin exists]",
    margin: "[NEEDS VERIFICATION]",
    totalElectors: "~1,52,000 (estimated)",
    voterTurnout: "~72% (estimated)",
    votesPolled: "[NEEDS VERIFICATION]",
    runnerUpParty: "[NEEDS VERIFICATION]",
    notes:
      "Historical note (Grokipedia): In 2017, Congress candidate Inderbir Singh Bolaria won Amritsar South with 47,581 votes (turnout: 62.74% from 148,806 electors). The 2022 winner (Dr. Inderbir Singh Nijjar) is a different person — both from Congress/AAP but different individuals (different middle name Nijjar vs Bolaria). This is a General (non-SC) seat with substantial Jat Sikh rural presence.",
  },

  // ==========================================================================
  // DEMOGRAPHIC DATA
  // ==========================================================================
  demographicData: {
    casteComposition: [
      {
        category: "Jat Sikh",
        percentage: "~32% (district urban south)",
        notes: "Dominant rural caste in south Amritsar — major vote bank",
        source: "AC019-Amritsar-South.md",
      },
      {
        category: "Upper Caste",
        percentage: "~25%",
        notes: "Including Khatri, Arora, Brahmin",
        source: "AC019-Amritsar-South.md",
      },
      {
        category: "SC",
        percentage: "~20%",
        notes: "[NEEDS VERIFICATION — likely 20-25% based on Indiastat]",
        source: "AC019-Amritsar-South.md",
      },
      {
        category: "OBC",
        percentage: "~11%",
        notes: "Present in rural and semi-urban population",
        source: "AC019-Amritsar-South.md",
      },
      {
        category: "Minority",
        percentage: "~8%",
        source: "AC019-Amritsar-South.md",
      },
      {
        category: "Other",
        percentage: "~4%",
        source: "AC019-Amritsar-South.md",
      },
    ],
    casteCompositionDeep: {
      scPopulation:
        "[NEEDS VERIFICATION — likely ~20-25% based on Indiastat]",
      jatSikh: "Dominant rural caste in south Amritsar",
      hinduKhatriArora: "Some in urban/peri-urban areas",
      obc: "Present in rural and semi-urban population",
      generalCategoryUpperCastes: "Present in urban component",
      source: "Indiastat Factbook, Census 2011",
    },
    religionBreakdown: [
      {
        religion: "Sikh",
        percentage: "~57.7% (state average)",
        notes: "Likely higher in rural south Amritsar",
        source: "Wikipedia Amritsar, Census 2011",
      },
      {
        religion: "Hindu",
        percentage: "~38.5% (state average)",
        notes: "More concentrated in urban south Amritsar",
        source: "Wikipedia Amritsar, Census 2011",
      },
    ],
    voterDemographicsEstimate: {
      ruralVoters: "~65-70%",
      urbanPeriUrbanVoters: "~30-35%",
      jatSikhVoters: "~40-50% (dominant)",
      scVoters: "~20-25%",
      otherHinduVoters: "~25-30% (Khatri, Brahmin, etc.)",
    },
  },

  // ==========================================================================
  // ELECTORAL HISTORY
  // ==========================================================================
  electoralHistory: {
    results: [
      {
        year: 2022,
        winner: "Dr. Inderbir Singh Nijjar",
        party: "AAP",
        runnerUp: "[NEEDS VERIFICATION]",
        runnerUpParty: "[NEEDS VERIFICATION]",
        margin: "[NEEDS VERIFICATION]",
        totalElectors: 152000,
        voterTurnout: "~72% (estimated)",
        source: "OneIndia, IndiaVotes, Grokipedia",
      },
      {
        year: 2017,
        winner: "Inderbir Singh Bolaria",
        party: "INC",
        runnerUp: "[NEEDS VERIFICATION]",
        runnerUpParty: "[NEEDS VERIFICATION]",
        marginVotes: 47581,
        winnerVoteCount: 47581,
        totalElectors: 148806,
        voterTurnout: "62.74%",
        source: "Grokipedia",
      },
      {
        year: 2012,
        winner: "[NEEDS VERIFICATION]",
        party: "[NEEDS VERIFICATION]",
        runnerUp: "[NEEDS VERIFICATION]",
        runnerUpParty: "[NEEDS VERIFICATION]",
        margin: "[NEEDS VERIFICATION]",
        source: "OneIndia, IndiaVotes",
      },
    ],
    turnoutPattern:
      "2017: 62.74% turnout from 148,806 electors. 2022: estimated ~72% from ~152,000 electors",
    coreVoters: ["Jat Sikh farmers", "Rural households", "Agrarian community"],
    swingFactors: [
      "Anti-incumbency against Congress (2017→2022)",
      "AAP split of Congress Sikh vote",
      "Jat Sikh vote bank shift from Congress to AAP",
      "Peri-urban development claims",
    ],
  },

  // ==========================================================================
  // LOCAL ISSUES
  // ==========================================================================
  localIssues: [
    {
      rank: 1,
      issue: "Farmer Distress",
      description:
        "MSP guarantee, stubble burning restrictions, irrigation, agricultural credit. Farmer agitation (Dallewall hunger strike 2024-25) signals live distress.",
      prioritySegment: ["Jat Sikh farmers", "Rural households (~65-70% of voters)"],
      notes: "Top rural issue — unresolved MSP guarantee",
    },
    {
      rank: 2,
      issue: "Rural Infrastructure",
      description:
        "Farm-to-market roads, power for agriculture, canal water supply, groundwater irrigation.",
      prioritySegment: ["Rural voters", "Farmer households"],
    },
    {
      rank: 3,
      issue: "Drug Addiction",
      description:
        "Rural youth addiction; AAP criticized on law & order. Rehabilitation absent.",
      prioritySegment: ["Rural youth", "Families"],
    },
    {
      rank: 4,
      issue: "Peri-urban Land Use",
      description:
        "Zone changes, land acquisition, farmer compensation. Urban sprawl from Amritsar city into south.",
      prioritySegment: ["Peri-urban fringe voters", "Affected farmers"],
    },
    {
      rank: 5,
      issue: "Youth Unemployment",
      description:
        "Skills gap, rural youth migration. Rural youth emigration for work.",
      prioritySegment: ["Young voters (18-35)"],
    },
    {
      rank: 6,
      issue: "Urban Development",
      description:
        "Municipal services where villages merged into city. Development promises unfulfilled.",
      prioritySegment: ["Urban and peri-urban voters"],
      notes: "AAP attack line: broken development promises",
    },
    {
      rank: 7,
      issue: "Healthcare Facilities",
      description:
        "Medical facilities inadequate. PHC infrastructure in villages needs improvement.",
      prioritySegment: ["All residents", "Rural population"],
    },
    {
      rank: 8,
      issue: "Educational Institution Development",
      description:
        "Institutional development lacking in constituency.",
      prioritySegment: ["Families with school-age children", "Youth"],
    },
  ],

  // ==========================================================================
  // PUBLIC SENTIMENT
  // ==========================================================================
  publicSentiment: {
    perceivedMood: "[NEEDS VERIFICATION — field intelligence required]",
    ruralSouthVoterProfile: {
      demographic: "Jat Sikh farmers — core rural vote bank",
      concerns: [
        "MSP and guaranteed procurement",
        "Stubble management alternatives",
        "Irrigation water supply",
        "Agricultural credit access",
        "Diesel prices for agriculture",
      ],
      notes:
        "Farmer agitation (Dallewall hunger strike 2024-25) signals live distress",
    },
    keySentimentDrivers: [
      "Farmer Distress — MSP guarantee, stubble, diesel, credit; top rural issue",
      "Drug Addiction — Rural youth; AAP criticized on law & order",
      "Urban Fringe Development — Peri-urban areas shifting from rural to urban identity",
      "Youth Unemployment — Rural youth emigration",
      "Governance — AAP's rural delivery record 2022-2026",
    ],
    verificationStatus: "needs_verification",
  },

  // ==========================================================================
  // GOVERNANCE GAP
  // ==========================================================================
  governanceGap: {
    mlaPerformance: {
      name: "Dr. Inderbir Singh Nijjar",
      party: "AAP",
      term: "First term (2022-2026)",
      firstTerm: true,
      notes:
        "First-term MLA; rural+peri-urban constituency; AAP government in power",
    },
    ruralInfrastructure: {
      agriculturalRoads: "[NEEDS VERIFICATION — condition]",
      irrigation: "Canal water supply, groundwater",
      ruralWaterSupply: "[NEEDS VERIFICATION]",
      powerForAgriculture: "[NEEDS VERIFICATION]",
      verificationStatus: "needs_verification",
    },
    periUrbanDevelopment: {
      urbanSprawl:
        "Urban sprawl from Amritsar city into south",
      landUseChange:
        "Agricultural land to residential/commercial conversion",
      municipalServices:
        "Municipal services where villages merged into city",
      zoneChanges: "[NEEDS VERIFICATION]",
      landAcquisition: "[NEEDS VERIFICATION]",
      farmerCompensation: "[NEEDS VERIFICATION]",
    },
    healthcare:
      "PHC infrastructure in villages [NEEDS VERIFICATION — specific facilities status]",
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    political: [
      {
        name: "Dr. Inderbir Singh Nijjar",
        role: "AAP MLA (incumbent)",
        party: "AAP",
        notes:
          "First-term; Sikh doctor; [NEEDS VERIFICATION — full profile including caste, medical specialization, prior politics]",
      },
      {
        name: "Inderbir Singh Bolaria",
        role: "Former Congress MLA",
        party: "INC",
        notes:
          "Previous winner (2017); 47,581 votes; may still have local support and personal vote base",
      },
      {
        name: "Congress Workers",
        role: "Local party organization",
        party: "INC",
        notes: "Retained rural organization despite 2022 defeat",
      },
      {
        name: "SAD Workers",
        role: "Traditional rural party workers",
        party: "SAD",
        notes:
          "Traditional rural Jat Sikh base — shattered but recoverable",
      },
    ],
    socialReligious: [
      "Jat Sikh Community Elders (informal village leaders)",
      "Gurudwara Committees (rural gurudwaras; voter mobilization)",
    ],
    farmerUnions: [
      "BKU (Bharatiya Kisan Union)",
      "KMF (various farmer unions)",
    ],
    dairyCooperatives: ["Dairy Cooperatives — rural economy; political engagement"],
    jatSikhSarpanches:
      "Jat Sikh Sarpanches — village-level decision makers; key vote brokers",
    casteEquations:
      "Jat Sikh dominant in rural south — traditional SAD/Congress voter base; AAP made inroads in 2022; surname Inderbir Singh suggests Sikh (possibly Jat) background",
  },

  // ==========================================================================
  // MEDIA LANDSCAPE
  // ==========================================================================
  mediaLandscape: {
    localRegional: [
      "Amritsar Tribune",
      "Punjab Kesari",
      "Ajit Daily",
    ],
    farmerMedia: [
      "Kisan Infos (Punjab farmer portal)",
      "Punjabi YouTube channels covering agriculture",
    ],
    socialMedia: [
      "Facebook (rural voter groups)",
      "WhatsApp (farmer union networks, sarpanch chains)",
      "YouTube (Punjabi news, farmer agitation coverage)",
    ],
    notes: "WhatsApp and Facebook dominate rural voter information chains; YouTube for farmer-specific content",
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyGeography:
      "Amritsar South: South of city, includes rural villages + peri-urban fringe. Agricultural belt: Intensive farming area in south Amritsar. Villages: Dense rural settlement on southern approach to city.",
    agriculturalBelt: "Intensive farming area in south Amritsar",
    villages: "Dense rural settlement on southern approach to city",
    connectivity: [
      "Southern highways",
      "Major roads to surrounding towns",
      "NH connecting to border areas",
    ],
    markets: ["Amritsar city markets (peri-urban fringe access)"],
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "AAP winner in 2022 with 4 years of incumbency",
      "AAP government resources for rural development",
      "New face vs. old Congress candidate",
      "Peri-urban development on AAP's agenda",
    ],
    weaknesses: [
      "2022 margin unclear — unknown vulnerability level",
      "Rural Jat Sikh base still leans toward SAD/Congress",
      "Farmer distress: AAP government may be blamed for not solving MSP issue",
      "First-term MLA — limited established local network",
    ],
    opportunities: [
      "CM Mann's farmer-friendly positioning (AAP)",
      "Peri-urban development: Claim credit for rural-urban infrastructure",
      "Rural road construction: MLA's constituency fund projects 2022-2026",
    ],
    threats: [
      "Farmer agitation: MSP guarantee unresolved — AAP blamed",
      "SAD revival: Jat Sikh voter return to SAD",
      "Congress rebound: Bolaria's personal vote base and name recognition",
      "Jat Sikh vote bank still not fully consolidated with AAP",
    ],
  },

  swotPartySpecific: {
    AAP: {
      strengths: [
        "Incumbent MLA with 4 years",
        "AAP government resources for rural development",
        "New face vs. old Congress candidate",
      ],
      weaknesses: [
        "2022 margin unclear — unknown vulnerability",
        "Rural Jat Sikh base still leans toward SAD/Congress",
        "Farmer distress: AAP government may be blamed for not solving MSP issue",
      ],
      opportunities: [
        "CM Mann's farmer-friendly positioning",
        "Peri-urban development: Claim credit",
        "Rural road construction via constituency fund",
      ],
    },
    Opposition: {
      opportunities: [
        "Farmer agitation: MSP guarantee unresolved — AAP blamed",
        "SAD revival: Jat Sikh voter return to SAD",
        "Congress rebound: Bolaria's personal vote base",
      ],
    },
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    forAAP: [
      "Field Dr. Inderbir Singh Nijjar — incumbency advantage",
      "Farmer narrative: AAP's MSP procurement, stubble alternatives",
      "Rural infrastructure: Claim credit for roads, water, power projects",
      "Rural youth: Employment schemes, skills training",
      "Counter SAD: 'SAD's 2017-2022 — what did they do for you?'",
    ],
    forCongress: [
      "Inderbir Singh Bolaria or similar: Use 2017 winning name recognition",
      "Farmer distress: Strong MSP guarantee promise",
      "SAD alliance: Only if Congress concedes — unlikely in a Jat Sikh seat",
    ],
    forSADBJP: [
      "SAD's natural Jat Sikh base — rebuilding",
      "Farmer MSP guarantee: SAD's core promise",
      "Jat Sikh voter outreach through village networks (Sarpanches, Gurudwara Committees)",
    ],
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      profile: "Jat Sikh leader, urban-rural mix appeal",
      casteConsideration:
        "Jat Sikh preferred for traditional Congress vote bank",
      keyQualities: ["Community connect", "Development narrative"],
    },
    attackLines: [
      {
        category: "Broken Promises",
        message:
          "Development promises unfulfilled — urban development, infrastructure",
      },
      {
        category: "Jat Sikh Issues",
        message:
          "Community concerns not addressed — Jat Sikh vote bank feels betrayed",
      },
      {
        category: "Healthcare",
        message: "Medical facilities inadequate — PHC infrastructure lacking",
      },
      {
        category: "Education",
        message:
          "Institutional development lacking in the constituency",
      },
    ],
    congressStrategy: {
      currentPosition:
        "AAP won Amritsar South from Congress in 2022. Congress must reconnect with Jat Sikh vote bank which traditionally supported the party.",
      incumbentName: "Dr. Inderbir Singh Nijjar (AAP)",
      challenges: [
        "Jat Sikh vote bank defected to AAP in 2022",
        "Congress must rebuild rural organization",
        "Retained Congress workers but lost voter confidence",
        "SAD also competing for same Jat Sikh vote bank",
      ],
    },
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: [
    {
      factor: "Farmer agitation peaks pre-election",
      probability: "Medium",
      impact: "HIGH",
    },
    {
      factor: "Congress fields Inderbir Singh Bolaria",
      probability: "Medium",
      impact: "HIGH",
    },
    {
      factor: "SAD revives with strong Jat Sikh candidate",
      probability: "Medium",
      impact: "HIGH",
    },
    {
      factor: "AAP announces major MSP scheme",
      probability: "Medium",
      impact: "HIGH",
    },
    {
      factor: "Dr. Inderbir Nijjar denied ticket",
      probability: "Medium",
      impact: "HIGH",
    },
    {
      factor: "Peri-urban land acquisition controversy",
      probability: "Medium",
      impact: "MEDIUM",
    },
  ],

  // ==========================================================================
  // INTELLIGENCE GAPS & VERIFICATION
  // ==========================================================================
  intelligenceGaps: [
    {
      item: "Full 2022 Amritsar South results — all candidates, vote counts",
      priority: "High",
    },
    {
      item: "Dr. Inderbir Singh Nijjar profile — full name, caste, medical specialization, prior politics",
      priority: "High",
    },
    {
      item: "2017 full results — margin analysis for Inderbir Singh Bolaria",
      priority: "High",
    },
    {
      item: "2022 margin in Amritsar South — to assess vulnerability level",
      priority: "High",
    },
    {
      item: "Jat Sikh % in constituency — for SAD/Congress targeting",
      priority: "Medium",
    },
    {
      item: "Farmer union presence — which BKU faction, active villages",
      priority: "Medium",
    },
    {
      item: "Peri-urban village list — villages transitioning to urban",
      priority: "Medium",
    },
    {
      item: "MLA's constituency fund projects 2022-2026 — specific rural infrastructure",
      priority: "Medium",
    },
    {
      item: "Rural infrastructure condition — agricultural roads, canal water, groundwater",
      priority: "Medium",
    },
    {
      item: "PHC/healthcare infrastructure details",
      priority: "Medium",
    },
    {
      item: "2012 election results — winner, party, margin",
      priority: "High",
    },
    {
      item: "SC population exact percentage for constituency",
      priority: "Medium",
    },
    {
      item: "Peri-urban land acquisition details and farmer compensation",
      priority: "Low",
    },
  ],

  // ==========================================================================
  // KEYWORDS FOR MONITORING
  // ==========================================================================
  keywordsForMonitoring: [
    {
      keyword: "amritsar south election results 2022",
      query: '"amritsar south" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
    },
    {
      keyword: "inderbir singh nijjar aap",
      query: '"inderbir singh nijjar" AND "amritsar south" AND "aap"',
    },
    {
      keyword: "amritsar south farmer issues",
      query: '"amritsar south" AND ("farmer" OR "msp" OR "stubborn" OR "jat")',
    },
    {
      keyword: "amritsar south congress sad bjp",
      query: '"amritsar south" AND ("congress" OR "sad" OR "bjp")',
    },
    {
      keyword: "amritsar south bolaria",
      query: '"amritsar south" AND ("bolaria" OR "farmer distress")',
    },
  ],

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "OneIndia", url: "https://www.oneindia.com" },
      { name: "IndiaVotes", url: "https://www.indiavotes.com" },
      { name: "Grokipedia", url: "https://grokipedia.org" },
      { name: "ADR India", url: "https://adrindia.org" },
      { name: "Indiastat Factbook", url: "https://www.indiastat.com" },
      { name: "Wikipedia Amritsar", url: "https://en.wikipedia.org/wiki/Amritsar" },
      { name: "Outlook India", url: "https://www.outlookindia.com" },
      { name: "The Federal", url: "https://www.thefederal.com" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Full 2022 Amritsar South results — all candidates, vote counts",
        "Dr. Inderbir Singh Nijjar profile — full name, caste, medical specialization, prior politics",
        "2017 full results — margin analysis for Inderbir Singh Bolaria",
        "2022 margin in Amritsar South — to assess vulnerability level",
        "Jat Sikh % in constituency — for SAD/Congress targeting",
        "Farmer union presence — which BKU faction, active villages",
        "Peri-urban village list — villages transitioning to urban",
        "MLA's constituency fund projects 2022-2026 — specific rural infrastructure",
        "Rural infrastructure condition — agricultural roads, canal water, groundwater",
        "PHC/healthcare infrastructure details",
        "2012 election results — winner, party, margin",
        "SC population exact percentage for constituency",
        "Peri-urban land acquisition details and farmer compensation",
        "Perceived mood / field intelligence — voter satisfaction with AAP MLA",
        "Drug addiction statistics for rural Amritsar South",
        "Youth unemployment data specific to constituency",
      ],
    },
  },
};
