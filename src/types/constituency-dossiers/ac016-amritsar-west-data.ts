/**
 * AC016-AmritsarWest Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC016-Amritsar-West.md, AC016-AmritsarWest-deep.md
 */

import type { AC016AmritsarWestTypes } from "./ac016-amritsar-west-types";

export const ac016AmritsarWestData: AC016AmritsarWestTypes = {
  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    microTaskId: "AC016-AmritsarWest-001",
    topic: "Amritsar West Assembly Constituency Deep Research",
    tier: "2",
    date: "20 May 2026",
    agent: "Orchestrator-R1",
    sourcesConsulted: "Web search (minimax-web-search), OneIndia, ADR India PDF, IndiaVotes, Indiastat Factbook, Wikipedia",
    verificationStatus: "PARTIALLY VERIFIED",
    dataCurrency: "As of 20 May 2026",
  },

  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 16,
    name: "Amritsar West",
    district: "Amritsar",
    region: "Majha",
    type: "SC",
    date: "20 May 2026",
  },

  overview: {
    description: "Amritsar West is a reserved (SC) assembly constituency covering western parts of Amritsar city. Urban SC constituency with significant Scheduled Caste population.",
    urbanSC: "Urban SC constituency — unusual as most SC seats are rural",
  },

  baseline: {
    geographicProfile: {
      description: "Amritsar West is a SC-reserved Punjab Legislative Assembly constituency in Amritsar district",
      location: "Located within Amritsar city and peri-urban areas west of city centre",
      parliamentarySegment: "Part of Amritsar Lok Sabha constituency",
      areaCharacter: "Urban SC constituency — unusual as most SC seats are rural",
    },
    keyStatistics2022: {
      winner: "Dr. Jasbir Singh",
      runnerUp: "[NEEDS VERIFICATION]",
      winnerVoteCount: "[NEEDS VERIFICATION]",
      margin: "43,913 votes",
      party: "Aam Aadmi Party",
      source: "OneIndia, ADR India PDF",
    },
    scPopulation: {
      amritsarWestSC: "24.49% (per Indiastat Factbook — urban SC-reserved seat)",
      districtSC: "30.95%",
      note: "This is a General+SC seat — while reserved for SC category, general voters also participate",
    },
    notableFact: "Amritsar West had one of the largest winning margins in the state for AAP in 2022 (43,913 votes). AAP's sweep of Amritsar district was complete including this SC seat.",
  },

  historicalContext: {
    formation: "SC-reserved urban constituency within Amritsar district",
    historicalSignificance: "Part of Amritsar's political landscape in Majha region",
    localHeritage: ["Urban colonies", "Peri-urban villages on western outskirts"],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  casteComposition: {
    scheduledCastes: "~24.49% (dominant in SC reserved seat)",
    jatSikh: "~25%",
    upperCaste: "~18%",
    obc: "~10%",
    minority: "~8%",
    source: "Caste estimates based on district-level data (Amritsar District - Urban SC)",
  },

  casteCompositionDeep: {
    scPopulation: "~24.49% in Amritsar West (per Indiastat — urban SC seat)",
    generalPopulation: "~75-76%",
    communityBreakdown: {
      ravidassia: "Present in urban colonies",
      mazhabiSikh: "Present in peri-urban villages within constituency",
      jatSikh: "Major caste in rural component (outside city)",
      hinduUpperCastes: "Khatri, Arora, Brahmin in city — trading and professional",
      obc: "Present in urban population",
    },
  },

  religionBreakdown: {
    sikh: "~57.7% (state average; city has slightly more Hindus)",
    hindu: "~38.5% (state average; urban Amritsar has near-equal Hindu-Sikh)",
    scCombined: "~32% of Punjab; urban SC is ~20-25% of urban population",
    source: "Indiastat Factbook, Census 2011, Wikipedia Demographics Punjab",
  },

  keyVotingDynamics: {
    scVotersDominance: "Dominant community (~24% in reserved seat — significant but not overwhelming)",
    urbanSCVoterBehavior: "SC voters: Dominant community (~24% in reserved seat — significant but not overwhelming)",
    loyaltyPattern: "Urban SC voters are more mobile, exposed to multiple parties. SC vote in urban setting less loyal to traditional parties vs rural SC voters",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electoralHistory: {
    results2022: {
      winner: "Dr. Jasbir Singh",
      party: "AAP",
      margin: "43,913 votes",
      totalElectors: "~1,48,000 (estimated)",
      voterTurnout: "~71% (estimated)",
      winnerVoteCount: "[NEEDS VERIFICATION]",
      runnerUp: "[NEEDS VERIFICATION]",
      runnerUpParty: "[NEEDS VERIFICATION]",
      marginDescription: "DECISIVE AAP WIN",
    },
    results2017: {
      winner: "(To be verified)",
      party: "(To be verified)",
      margin: "(To be verified)",
      status: "needs_verification",
    },
    results2012: {
      winner: "(To be verified)",
      party: "(To be verified)",
      status: "needs_verification",
    },
    turnoutPattern: "Consistent ~71% in 2022",
    marginSignificance: "AAP's large margin (43,913) suggests broad coalition — SC voters + urban moderates + anti-SAD/BJP voters",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    perceivedMood: "[NEEDS VERIFICATION — field intelligence required]",
    aapPosition: {
      marginStrength: "43,913 margin is substantial — AAP holds strong position",
      scVoterLoyalty: "SC voters gave AAP strong support in 2022 — question is whether 4 years maintained loyalty",
    },
    dissatisfactionVectors: [
      {
        issue: "Urban Infrastructure",
        description: "Amritsar West (city area) faces same civic issues as North",
      },
      {
        issue: "Drug Crisis",
        description: "Urban youth addiction — SC communities particularly affected",
      },
      {
        issue: "Governance Failures",
        description: '"Delhi rule" criticism of AAP government',
      },
      {
        issue: "Housing Issues",
        description: "Slum development ignored",
      },
    ],
    oppositionOpportunities: [
      "Law & order: Hooch tragedy in Amritsar (2025)",
      "Employment: Youth unemployment in urban SC community",
      "BSP potential revival: Dalit voters considering alternatives",
    ],
    source: "Reddit r/punjab, Newsgram, Babushahi.com",
  },

  // ==========================================================================
  // LOCAL ISSUES
  // ==========================================================================
  issues: [
    {
      rank: 1,
      title: "Unemployment & Skills",
      description: "Urban SC youth joblessness; skills training absent",
      affectedSegment: "Urban SC youth",
    },
    {
      rank: 2,
      title: "Drug Addiction",
      description: "Urban youth, including SC communities; rehabilitation infrastructure",
      affectedSegment: "Urban youth, SC communities",
    },
    {
      rank: 3,
      title: "Urban Slum Development",
      description: "Peri-urban colonies lacking civic infrastructure",
      affectedSegment: "Peri-urban colony residents",
    },
    {
      rank: 4,
      title: "Law & Order",
      description: "Drug peddling, hooch, theft in city west",
      affectedSegment: "All urban residents",
    },
    {
      rank: 5,
      title: "Healthcare",
      description: "Urban SC population's access to free/affordable healthcare",
      affectedSegment: "Urban SC population",
    },
  ],

  // ==========================================================================
  // GOVERNANCE
  // ==========================================================================
  governanceGap: {
    mlPerformance: {
      name: "Dr. Jasbir Singh",
      party: "AAP",
      term: "First-term MLA (2022-2026)",
      background: "Medical doctor (title 'Dr.')",
      accessToDalitSchemes: "SC-reserved incumbent in AAP government — theoretically more access to Dalit schemes",
    },
    urbanScSpecificIssues: {
      employment: "[NEEDS VERIFICATION]",
      slumDevelopment: "[NEEDS VERIFICATION]",
      icdsScholarships: "[NEEDS VERIFICATION]",
      skillTraining: "[NEEDS VERIFICATION]",
    },
    infrastructure: {
      urbanRoadNetwork: "[NEEDS VERIFICATION]",
      waterSupply: "Part of Amritsar city system",
      drainage: "Problematic in low-lying urban colonies",
    },
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    political: [
      {
        name: "Dr. Jasbir Singh (AAP MLA)",
        party: "AAP",
        description: "First-term incumbent; medical doctor; [NEEDS VERIFICATION — full profile]",
      },
    ],
    socialReligious: [
      {
        category: "BSP Party",
        description: "Historically contested SC seats; dormant after 2022",
      },
      {
        category: "Christian Missions",
        description: "Active among urban Dalit communities [NEEDS VERIFICATION]",
      },
      {
        category: "Ravidassia Community Leaders",
        description: "Key endorsement for SC candidates",
      },
      {
        category: "Urban RWAs",
        description: "Resident welfare associations in city West",
      },
      {
        category: "Gurudwara Committees",
        description: "Sikh SC voters' institutions",
      },
    ],
    parties: {
      bsp: "Historically contested SC seats; dormant after 2022",
      congress: "Some SC base but reduced",
      sad: "Lost SC voters post-2022; rebuilding difficult",
    },
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    local: ["Amritsar Tribune", "Punjab Kesari", "Dainik Bhaskar (Hindi)"],
    digital: ["Babushahi.com", "Punjabi YouTube channels"],
    socialMedia: ["Facebook: SC community groups, youth", "WhatsApp: Voter contact"],
    voterContact: "WhatsApp: Voter contact",
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyGeography: {
      description: "Amritsar West: Urban constituency within Amritsar city",
      areas: ["Mustafabad", "New Amritsar colonies", "Some peri-urban villages on western outskirts"],
      road: "GT Road western approach",
      periUrban: "Some peri-urban villages on western outskirts",
    },
    voterDemographics: {
      urbanVoters: "~90%",
      scVoters: "~24-25% (reserved seat)",
      generalCategoryVoters: "~75-76%",
      sikhVoters: "~45-50%",
      hinduVoters: "~45-50%",
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    aap: {
      strengths: [
        "43,913 margin is very strong — near-impossible to overturn",
        "Incumbency + AAP government resources",
        "Medical doctor MLA (Dr. Jasbir Singh) — professional credibility",
      ],
      weaknesses: [
        "4 years may have disappointed urban SC voter expectations",
        "No major SC-specific policy win visible to voters",
        "BSP revival could split SC vote",
      ],
      opportunities: [
        "Dr. Jasbir Singh's medical background: healthcare outreach",
        "Employment schemes for SC youth",
        "Urban development: Claim Smart City credit",
      ],
      threats: [
        "Another law & order incident",
        "SC community feels betrayed on employment/land issues",
        "Ticket denial to Dr. Jasbir Singh",
      ],
    },
    opposition: {
      opportunities: [
        "Hooch tragedy: sympathy + anger among urban voters",
        "BSP revival: Mayawati's Dalit card",
        "Congress's urban voter outreach: anti-AAP moderates",
      ],
    },
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    forAAP: {
      party: "AAP",
      recommendations: [
        "Field Dr. Jasbir Singh — incumbency + professional background",
        'Healthcare narrative: "Your MLA is a doctor who delivered health schemes"',
        "Employment: SC youth skill training, self-employment schemes",
        "Urban development: Claim credit for any ward-level projects",
        'Attack opposition: "They only do politics, we deliver"',
      ],
    },
    forBSP: {
      party: "BSP",
      recommendations: [
        "Need strong Dalit candidate — Ravidassia community leader",
        "Campaign on SC neglect by both AAP and Congress",
        "Rebuild organization booth by booth",
      ],
    },
    forCongress: {
      party: "Congress",
      recommendations: [
        "AAP is main threat; Congress needs urban moderate + SC voter",
        "Anti-AAP governance narrative",
        "Field young SC candidate with professional background",
      ],
    },
    forSADBJP: {
      party: "SAD+BJP",
      recommendations: [
        "Difficult in SC-reserved urban seat",
        "Unless Congress alliance happens, third-place finish likely",
      ],
    },
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      profile: "SC leader, welfare-focused, accessible",
      casteConsideration: "MUST be from SC community",
      keyQualities: ["Dedicated to SC issues", "Anti-AAP narrative"],
    },
    attackLines: {
      brokenPromises: "SC welfare schemes not delivered",
      urbanNeglect: "SC colonies neglected",
      housingIssues: "Slum development ignored",
      employment: "SC youth unemployment high",
    },
    congressStrategy: {
      currentPosition: "AAP won decisively with 43,913 margin - massive verdict against Congress. Congress must rebuild SC base by selecting dedicated SC candidate with strong welfare credentials.",
      incumbentName: "Dr. Jasbir Singh (AAP)",
      termCount: 1,
      challenges: [
        "Rebuild SC base",
        "Select dedicated SC candidate with strong welfare credentials",
      ],
    },
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    factors: [
      {
        factor: "BSP revives in Punjab",
        probability: "Medium",
        impact: "HIGH",
      },
      {
        factor: "Congress fields strong Dalit candidate",
        probability: "Medium",
        impact: "HIGH",
      },
      {
        factor: "Dr. Jasbir Singh denied ticket",
        probability: "Medium",
        impact: "HIGH",
      },
      {
        factor: "Another hooch/law & order tragedy",
        probability: "Medium",
        impact: "HIGH",
      },
      {
        factor: "AAP government SC-specific scheme announcement",
        probability: "Medium",
        impact: "MEDIUM",
      },
      {
        factor: "Major urban development project",
        probability: "Medium",
        impact: "MEDIUM",
      },
    ],
  },

  // ==========================================================================
  // INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      "Full 2022 Amritsar West results — all candidates, vote counts",
      "Dr. Jasbir Singh profile — full name, medical specialization, prior political experience",
      "2017 electoral history — winner, margin, trend",
      "Booth-level results — to identify margins by urban colony",
      "Amritsar West SC community composition — Ravidassia vs Mazhabi breakdown",
      "MLA's healthcare/SC initiatives 2022-2026 — specific programs",
      "BSP's 2022 vote share in Amritsar West — baseline for revival potential",
      "Peri-urban village component — any rural SC voters in this seat",
    ],
    monitoringKeywords: [
      '"amritsar west" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
      '"jasbir singh" AND "amritsar west" AND "aap"',
      '"amritsar west" AND ("sc" OR "dalit" OR " BSP" OR "congress")',
      '"amritsar west" AND ("hooch" OR "drug" OR "unemployment")',
      '"amritsar west" AND ("smart city" OR "urban development")',
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "OneIndia", url: "https://www.oneindia.com" },
      { name: "IndiaVotes", url: "https://www.indiavotes.com" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Amritsar_West_(Punjab_Assembly_constituency)" },
      { name: "ADR India", url: "https://adrindia.org" },
      { name: "Indiastat Factbook", url: "https://www.indiastat.com" },
      { name: "Babushahi.com", url: "https://www.babushahi.com" },
      { name: "Reddit r/punjab", url: "https://reddit.com/r/punjab" },
      { name: "Newsgram", url: "https://newsgram.com" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Full 2022 Amritsar West results",
        "Dr. Jasbir Singh profile",
        "2017 electoral history",
        "Booth-level results",
        "SC community composition breakdown",
        "MLA initiatives 2022-2026",
        "BSP 2022 vote share",
        "Peri-urban village component",
        "Urban road network status",
        "Slum development specifics",
        "ICDS and scholarship disbursement",
        "Skill training programs",
      ],
    },
  },
};
