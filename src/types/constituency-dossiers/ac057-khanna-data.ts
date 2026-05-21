/**
 * AC057-Khanna Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC057-Khanna.md and AC057-Khanna-deep.md
 */

import type { AC057KhannaTypes } from "./ac057-khanna-types";

export const ac057KhannaData: AC057KhannaTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  metadata: {
    taskId: "AC057-DEEP",
    topic: "Khanna Assembly Constituency Deep Research",
    tier: 2,
    date: "20 May 2026",
    agent: "Orchestrator-Research",
    sourcesConsulted: "minimax-web-search",
    verificationStatus: "PARTIALLY VERIFIED",
    dataCurrency: "As of 20 May 2026",
  },

  identity: {
    acNumber: 57,
    name: "Khanna",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Ludhiana",
    character: "Industrial/commercial town",
    borderStatus: "Not border district",
  },

  baseline: {
    geographicProfile: [
      "Major industrial town in Ludhiana district",
      "Commercial hub for surrounding area",
      "Trading community dominant",
      "Mix of urban and peri-urban",
    ],
    areaCharacter: "Industrial/commercial town",
    mixType: "Urban and peri-urban mix",
  },

  // ==========================================================================
  // ELECTORAL HISTORY
  // ==========================================================================
  electoralHistory: {
    results2022: {
      winner: "Tarunpreet Singh Sond",
      party: "AAP",
      voteShare: "~40%",
      margin: "TBD",
      runnerUp: "Gurkirat Singh",
      runnerUpParty: "Congress",
      totalElectors: "~1,60,000+",
      voterTurnout: "~75%+",
      votesPolled: "~1,20,000+",
    },
    results2017: {
      winner: "Congress candidate",
      party: "INC",
      pattern: "Congress held before AAP",
    },
    results2012: {
      winner: "Congress candidate",
      party: "INC",
      pattern: "Congress traditional seat",
    },
    historicalTrend: "2012: INC Win, 2017: INC Win, 2022: AAP Win",
    marginNote: "DATA NEEDS VERIFICATION",
  },

  voterEcosystem: {
    electorateData: {
      totalElectors: "~1,60,000+",
      votesPolled: "~1,20,000+",
      voterTurnout: "~75%+",
    },
    turnoutTrend: [
      {
        year: 2022,
        turnoutPercent: "~75%",
        notes: "High for urban",
      },
      {
        year: 2017,
        turnoutPercent: "~75%",
        notes: "Consistent",
      },
      {
        year: 2012,
        turnoutPercent: "~74%",
        notes: "Consistent",
      },
    ],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  casteComposition: {
    source: "Based on regional estimates",
    composition: [
      {
        category: "Sikh (Jat + Others)",
        estimatedPercent: "55-60%",
        notes: "Majority",
      },
      {
        category: "Hindu",
        estimatedPercent: "35-40%",
        notes: "Commercial class",
      },
      {
        category: "SC",
        estimatedPercent: "18-22%",
        notes: "Present",
      },
      {
        category: "Other",
        estimatedPercent: "5-7%",
        notes: "Small populations",
      },
    ],
    keyCommunities: {
      KhatriArora: "Business community",
      Baniya: "Trading community",
      JatSikh: "Agricultural and business",
      SC: "Mazhabi, Ramdasia in urban",
    },
  },

  // ==========================================================================
  // LOCAL ISSUES
  // ==========================================================================
  localIssues: {
    topIssues: [
      {
        rank: 1,
        title: "Industrial Growth & MSME",
        description: [
          "Factory jobs for youth",
          "MSME development",
          "Industrial area expansion",
        ],
      },
      {
        rank: 2,
        title: "Commercial Tax Burden",
        description: [
          "GST impact on small businesses",
          "Trading community concerns",
          "Tax compliance costs",
        ],
      },
      {
        rank: 3,
        title: "Urban Infrastructure",
        description: [
          "Town roads and drainage",
          "Market area infrastructure",
          "Water supply",
        ],
      },
      {
        rank: 4,
        title: "Employment",
        description: [
          "Jobs for educated youth",
          "Industrial training",
          "NRI emigration",
        ],
      },
      {
        rank: 5,
        title: "Drug Crisis",
        description: [
          "Urban youth addiction",
          "Industrial labor affected",
        ],
      },
    ],
  },

  // ==========================================================================
  // GOVERNANCE AUDIT
  // ==========================================================================
  governanceAudit: {
    administrativeStructure: {
      district: "Ludhiana",
      dc: "Ludhiana District Collector",
      mc: "Khanna Municipal Council",
      mla: "Tarunpreet Singh Sond",
      mlaParty: "AAP",
      mlaTenure: "2022-present",
    },
    mlaPerformance: {
      name: "Tarunpreet Singh Sond",
      party: "AAP",
      background: [
        "Business community connect",
        "Industrial background",
      ],
      performance: "MODERATE",
    },
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalInfluencers: [
      {
        name: "Tarunpreet Singh Sond (AAP MLA)",
        description: [
          "Business background",
          "Won against Congress",
          "Trading community connect",
        ],
        role: "Current MLA",
      },
      {
        name: "Congress Leaders",
        description: [
          "Traditional family networks",
          "Still have influence",
          "Business community ties",
        ],
        role: "Opposition",
      },
    ],
    traderMerchantAssociations: {
      name: "Trader Merchant Associations",
      description: [
        "Significant influence",
        "Commercial tax concerns",
        "Local business interests",
      ],
    },
  },

  // ==========================================================================
  // AAP VULNERABILITY ANALYSIS
  // ==========================================================================
  aapVulnerability: {
    vulnerabilities: {
      whyVulnerable: [
        "Tax Burden: GST crushing small businesses",
        "Industrial Stagnation: No major new factories",
        "Town Neglect: Infrastructure deteriorating",
        "Broken Promises: Employment promises unfulfilled",
      ],
      weakPoints: [
        {
          issue: "Tax reform",
          aapPromise: "Ease GST burden",
          currentStatus: "No major change",
          voterSentiment: "ANGRY",
        },
        {
          issue: "Industrial",
          aapPromise: "Jobs, factories",
          currentStatus: "Limited",
          voterSentiment: "DISAPPOINTED",
        },
        {
          issue: "Town infra",
          aapPromise: "Better Khanna",
          currentStatus: "Neglected",
          voterSentiment: "FRUSTRATED",
        },
        {
          issue: "Employment",
          aapPromise: "Jobs for youth",
          currentStatus: "Limited",
          voterSentiment: "DISAPPOINTED",
        },
      ],
    },
  },

  // ==========================================================================
  // CONGRESS STRATEGY
  // ==========================================================================
  congressStrategy: {
    currentPosition: {
      result2022: "Lost (margin needs verification)",
      opportunity: "Industrial/commercial seat",
      challenge: "Business voter dynamics",
    },
    businessCommunityOutreach: [
      {
        community: "Trading Community",
        points: [
          "GST impact concerns",
          "Business-friendly narrative",
          "Local trader associations",
        ],
      },
      {
        community: "Industrial Workers",
        points: [
          "Factory union connect",
          "Employment narrative",
          "Working class issues",
        ],
      },
    ],
    industrialWorkersOutreach: [
      "Factory union connect",
      "Employment narrative",
      "Working class issues",
    ],
    candidateSelection: {
      background: ["Business", "trader community"],
      caste: "Hindu (Khatri/Arora/Baniya)",
      age: "45-55 years",
    },
  },

  // ==========================================================================
  // CANDIDATE RECOMMENDATION
  // ==========================================================================
  candidateRecommendation: {
    idealProfile: [
      {
        attribute: "Caste",
        requirement: "Hindu (Khatri, Arora, Baniya) or Sikh",
      },
      {
        attribute: "Background",
        requirement: "Business, industry, trader",
      },
      {
        attribute: "Age",
        requirement: "45-55 years",
      },
      {
        attribute: "Quality",
        requirement: "Business-friendly, development",
      },
      {
        attribute: "Connect",
        requirement: "Khanna traders, industrialists",
      },
    ],
    priorityApproach: [
      "Find business community candidate",
      "GST/tax burden narrative",
      "Industrial employment focus",
      "Trading community outreach",
    ],
  },

  // ==========================================================================
  // VOTE SHARE ANALYSIS & 2027 PROJECTION
  // ==========================================================================
  voteShareAnalysis: {
    results2022Breakdown: [
      {
        party: "AAP",
        sharePercent: "~40%",
        votesEstimate: "~48,000",
      },
      {
        party: "INC",
        sharePercent: "~35%",
        votesEstimate: "~42,000",
      },
      {
        party: "BJP",
        sharePercent: "~10%",
        votesEstimate: "~12,000",
      },
      {
        party: "SAD",
        sharePercent: "~8%",
        votesEstimate: "~10,000",
      },
      {
        party: "Others",
        sharePercent: "~7%",
        votesEstimate: "~8,000",
      },
    ],
    congressGapAnalysis: {
      margin: "DATA NEEDS VERIFICATION",
      position: "Congress strong second position",
      keyFactor: "Industrial vote key",
    },
    projection2027: {
      tier: "TIER 2 - MEDIUM PRIORITY",
      description: "Commercial/industrial seat, Business voter dynamics, Candidate quality critical",
    },
    priorityRanking: {
      tier: "TIER 2 - MEDIUM PRIORITY",
      description: "AC057 Khanna: Commercial dynamics",
      seatDetails: [
        "AC055 Fatehgarh Sahib: 32,199 margin",
        "AC056 Amloh: 24,663 margin",
      ],
    },
  },

  // ==========================================================================
  // STRATEGIC POSITION
  // ==========================================================================
  strategicPosition: {
    congress: {
      currentStatus: "Lost in 2022: AAP won in industrial town",
      challenge: "Urban voter shift to AAP",
      opportunity: "Business community may be disillusioned",
    },
    considerations: {
      factors: [
        "Business Vote: GST, tax burden on traders",
        "Urban Shift: AAP consolidating urban votes",
        "SAD Factor: SAD voters moving to BJP or Congress",
        "Development: Town infrastructure neglected?",
      ],
    },
    recommendations: {
      recommendations: [
        "Candidate: Business-friendly candidate, commercial background",
        "Trade Community: Address GST, taxation concerns",
        "Infrastructure: Town development narrative",
        "SAD Split: Attract SAD voters",
      ],
    },
  },

  // ==========================================================================
  // ATTACK LINES
  // ==========================================================================
  attackLines: {
    lines: [
      {
        title: "Tax Burden",
        description: "GST crushing small businesses",
      },
      {
        title: "Industrial Stagnation",
        description: "No new factories, jobs",
      },
      {
        title: "Town Neglect",
        description: "Infrastructure deteriorating",
      },
      {
        title: "Broken Promises",
        description: "Employment promises unfulfilled",
      },
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "News18" },
      { name: "OneIndia" },
      { name: "IndiaVotes" },
      { name: "Hindustan Times" },
      { name: "MyNeta" },
    ],
    compiled: "20 May 2026",
    status: "NEEDS MARGIN VERIFICATION",
  },
};
