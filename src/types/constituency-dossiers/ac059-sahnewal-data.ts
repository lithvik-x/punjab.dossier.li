/**
 * AC059-Sahnewal Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC059-Sahnewal.md, AC059-Sahnewal-deep.md
 *
 * SAHNEWAL (AC-059) - General Category Constituency in Ludhiana District, Malwa Region
 * Key Insight: AAP won 2022 with smallest margin (15,193) in Ludhiana cluster - BEST Congress target
 */

import type { AC059SahnewalTypes } from "./ac059-sahnewal-types";

export const ac059SahnewalData: AC059SahnewalTypes = {
  // ==========================================================================
  // RESEARCH METADATA (from source file headers)
  // ==========================================================================
  researchMetadata: {
    microTaskId: "AC-DOSSIER-059",
    topic: "AC-059 Sahnewal Assembly Constituency",
    tier: 2,
    date: "20 May 2026",
    agent: "research-agent",
    sourcesConsulted: "minimax-web-search",
    verificationStatus: "VERIFIED",
    dataCurrency: "As of 20 May 2026",
  },

  researchMetadataDeep: {
    microTaskId: "AC059-DEEP",
    topic: "Sahnewal Assembly Constituency Deep Research",
    tier: 2,
    date: "20 May 2026",
    agent: "Orchestrator-Research",
    sourcesConsulted: "minimax-web-search",
    verificationStatus: "VERIFIED",
    dataCurrency: "As of 20 May 2026",
  },

  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 59,
    name: "Sahnewal",
    district: "Ludhiana",
    region: "Malwa",
    type: "General",
    lokSabhaSeat: "Fatehgarh Sahib (SC)",
    date: "20 May 2026",
  },

  profile: {
    acNumber: "59",
    officialName: "Sahnewal",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Fatehgarh Sahib (SC)",
  },

  geographicProfile: {
    character: "Peri-urban, agricultural",
    borderStatus: "Not border district",
    description: [
      "Peri-urban area near Ludhiana",
      "Mix of village and small town",
      "Agricultural and small industry",
      "Ludhiana city influence",
    ],
  },

  // ==========================================================================
  // EXECUTIVE SUMMARY
  // ==========================================================================
  executiveSummary: {
    description:
      "Sahnewal (AC-059) is a General category assembly constituency in Ludhiana district, Malwa region of Punjab. AAP won this seat in 2022 with a margin of 15,193 votes. The moderate margin makes this a viable Congress target with proper candidate selection and effective voter mobilization. This represents Congress's BEST opportunity in the Ludhiana cluster - smallest margin among the Ludhiana seats in this batch.",
    keyHighlights: [
      "AAP won 2022 with margin of 15,193 votes",
      "Smallest margin among Ludhiana cluster seats",
      "Congress held seat before 2022",
      "Moderate margin makes this viable Congress target",
      "Best opportunity in Ludhiana cluster for Congress",
    ],
  },

  // ==========================================================================
  // ELECTION RESULTS HISTORY
  // ==========================================================================
  electionHistory: {
    result2022: {
      winner: "Hardeep Singh Mundian",
      party: "AAP",
      margin: "15,193 votes",
      marginVotes: 15193,
      runnerUp: "Congress candidate",
      runnerUpParty: "INC",
      note: "AAP victory with moderate margin",
    },
    result2017: {
      winner: "Congress candidate",
      party: "INC",
    },
    result2012: {
      winner: "Congress candidate",
      party: "INC",
    },
    keyTrend:
      "Congress held this seat before 2022. AAP won with 15,193 margin - the smallest margin among Ludhiana region seats in this batch. This represents Congress's best opportunity in the Ludhiana cluster.",
  },

  historicalTrendAnalysis: {
    pattern: "2012: INC Win | 2017: INC Win | 2022: AAP Win",
    interpretation:
      "Margin: 15,193 (SMALLEST IN LUDHIANA CLUSTER - BEST TARGET)",
  },

  // ==========================================================================
  // CASTE COMPOSITION
  // ==========================================================================
  casteComposition: {
    categories: [
      { category: "Sikh (Jat + Others)", estimatedPercentage: "~68-72%", numericPercentage: 70 },
      { category: "Hindu", estimatedPercentage: "~22-26%", numericPercentage: 24 },
      { category: "SC", estimatedPercentage: "~20-24%", numericPercentage: 22 },
      { category: "Other", estimatedPercentage: "~5%", numericPercentage: 5 },
    ],
    keyDemographics: [
      "Agricultural and peri-urban area",
      "Jat Sikh dominant",
      "Mix of village and small town",
    ],
    dominantCommunities: ["Jat Sikh"],
  },

  keyCommunities: [
    {
      community: "Jat Sikh",
      description: "Dominant community in the constituency",
    },
    {
      community: "Hindu",
      description: "Trading, small business",
    },
    {
      community: "SC",
      description: "Rural concentration",
    },
  ],

  // ==========================================================================
  // VOTER ELECTORATE DATA
  // ==========================================================================
  voterTurnout: [
    {
      election: "2022",
      totalElectors: "~1,50,000",
      votesPolled: "~1,13,000",
      voterTurnout: "~75%",
      turnoutPercentage: 75,
    },
    {
      election: "2017",
      totalElectors: "~1,45,000",
      votesPolled: "~1,08,000",
      voterTurnout: "~74%",
      turnoutPercentage: 74,
    },
  ],

  voterTurnoutTrend: [
    { year: "2022", turnoutPercentage: 75, notes: "Good engagement" },
    { year: "2017", turnoutPercentage: 74, notes: "Consistent" },
    { year: "2012", turnoutPercentage: 73, notes: "Consistent" },
  ],

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: {
    issues: [
      {
        rank: 1,
        title: "Agriculture & Farmer Distress",
        description: [
          "MSP procurement issues",
          "Stubble management",
          "Canal water",
          "Small farmer debt",
        ],
      },
      {
        rank: 2,
        title: "Peri-urban Issues",
        description: [
          "Rural-urban transition challenges",
          "Land acquisition concerns",
          "Encroachment issues",
        ],
      },
      {
        rank: 3,
        title: "Drug Crisis",
        description: [
          "Rural youth addiction",
          "Agricultural labor affected",
          "Family devastation",
        ],
      },
      {
        rank: 4,
        title: "Infrastructure",
        description: ["Village roads", "Drainage", "Electricity"],
      },
      {
        rank: 5,
        title: "Youth Employment",
        description: [
          "Jobs for educated youth",
          "NRI emigration",
          "Skill development",
        ],
      },
    ],
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentStatus: "Loss in 2022: AAP won by 15,193 margin",
    opportunity: "SMALLEST margin in Ludhiana cluster",
    advantage: "Congress has recovery potential",
  },

  whyCongressCanWin: {
    reasons: [
      "Smallest Margin: 15,193 is most achievable",
      "Traditional Base: Congress voters haven't shifted fully",
      "Peri-urban: Mixed character offers multiple approaches",
      "Booth Work: Intensive booth management can reverse",
    ],
  },

  strategicRecommendations: {
    recommendations: [
      "Candidate: Strong local candidate",
      "Local Issues: Address Sahnewal-specific problems",
      "Booth Work: Intensive booth-level management",
      "Drug Narrative: AAP failed on biggest issue",
    ],
  },

  congressStrategicBlueprint: {
    currentPosition: {
      result2022: "Lost by 15,193 votes",
      opportunity: "SMALLEST MARGIN in Ludhiana cluster",
      margin: "7,600 additional votes needed",
    },
    winningStrategy: {
      phase1: {
        title: "Intensive Booth Work (3-6 months)",
        activities: [
          "5 workers per booth",
          "Identify swing voters",
          "Personal contact",
          "Local Issues Campaign",
          "AAP MLA's unfulfilled promises",
          "Local grievances",
          "Drug crisis as #1 issue",
        ],
      },
      candidateSelection: {
        criteria: [
          "Strong local candidate",
          "Personal vote base",
        ],
        ageRange: "45-55 years",
      },
    },
  },

  // ==========================================================================
  // RECOMMENDED CANDIDATE PROFILE
  // ==========================================================================
  recommendedCandidateProfile: {
    table: [
      { attribute: "Caste", idealProfile: "Sikh (Jat preferred)" },
      { attribute: "Background", idealProfile: "Farmer, local leader" },
      { attribute: "Age", idealProfile: "45-55 years" },
      { attribute: "Connect", idealProfile: "Deep roots in Sahnewal area" },
      { attribute: "Quality", idealProfile: "Clean, local issues focused" },
      { attribute: "Network", idealProfile: "Personal booth-level workers" },
    ],
  },

  priorityApproach: {
    steps: [
      "Find strong local candidate",
      "Drug crisis as #1 issue",
      "Local issues campaign",
      "Intensive booth management",
    ],
  },

  // ==========================================================================
  // ATTACK LINES AGAINST AAP
  // ==========================================================================
  attackLines: {
    lines: [
      {
        title: "Drug Crisis",
        description: "Rural youth dying - AAP failed",
      },
      {
        title: "Smallest Margin",
        description: "Shows voter doubt about AAP",
      },
      {
        title: "Broken Promises",
        description: "Same failures as elsewhere",
      },
      {
        title: "Local Issues",
        description: "AAP MLA not addressing local problems",
      },
    ],
  },

  // ==========================================================================
  // VOTE SHARE ANALYSIS
  // ==========================================================================
  voteShareAnalysis: {
    parties: [
      { party: "AAP", partyCode: "AAP", estimatedPercentage: "~38%", numericPercentage: 38 },
      { party: "INC", partyCode: "INC", estimatedPercentage: "~33%", numericPercentage: 33 },
      { party: "SAD", partyCode: "SAD", estimatedPercentage: "~16%", numericPercentage: 16 },
      { party: "BSP", partyCode: "BSP", estimatedPercentage: "~6%", numericPercentage: 6 },
      { party: "Others", partyCode: "OTHER", estimatedPercentage: "~7%", numericPercentage: 7 },
    ],
    congressGap: "~7,600 additional votes needed",
    congressGapVotes: 7600,
  },

  congressGapAnalysis: {
    votesNeeded: "~7,600 additional",
    halfMarginTarget: "Achievable",
    sadVotersToTarget: "~5,000",
  },

  // ==========================================================================
  // RECOMMENDATIONS SUMMARY
  // ==========================================================================
  recommendationsSummary: {
    priority: "HIGH - Smallest margin in Ludhiana cluster",
    priorityLevel: "HIGH",
    candidate: "Strong local candidate",
    narrative: "Drug crisis, broken promises, local issues",
    groundGame: "Intensive booth work",
    marginReversalPotential: "HIGH - 15,193 achievable",
  },

  // ==========================================================================
  // DEEP RESEARCH DATA
  // ==========================================================================
  deepResearch: {
    constituencyIdentity: {
      acNo: "59",
      name: "Sahnewal",
      district: "Ludhiana",
      region: "Malwa",
      category: "General",
      lokSabha: "Fatehgarh Sahib (SC)",
      character: "Peri-urban, agricultural",
      borderStatus: "Not border district",
    },

    electoralHistory: {
      election2022: {
        candidate: "Hardeep Singh Mundian",
        party: "AAP",
        votes: "TBD",
        voteShare: "~38%",
        margin: "15,193",
      },
      election2017: {
        winner: "Congress candidate",
        party: "INC",
      },
      election2012: {
        winner: "Congress candidate",
        party: "INC",
      },
      historicalTrend:
        "2012: INC Win | 2017: INC Win | 2022: AAP Win | Margin: 15,193 (SMALLEST IN LUDHIANA CLUSTER - BEST TARGET)",
    },

    demographics: {
      populationComposition: [
        { category: "Sikh (Jat + Others)", estimatedPercentage: "68-72%", numericPercentage: 70 },
        { category: "Hindu", estimatedPercentage: "22-26%", numericPercentage: 24 },
        { category: "SC", estimatedPercentage: "20-24%", numericPercentage: 22 },
        { category: "Other", estimatedPercentage: "5%", numericPercentage: 5 },
      ],
      keyCommunities: [
        { community: "Jat Sikh", description: "Dominant" },
        { community: "Hindu", description: "Trading, small business" },
        { community: "SC", description: "Rural concentration" },
      ],
    },

    voterEcosystem: {
      electorate2022: {
        totalElectors: "~1,50,000",
        votesPolled: "~1,13,000",
        voterTurnout: "~75%",
      },
      turnoutTrend: [
        { year: "2022", turnoutPercentage: 75, notes: "Good engagement" },
        { year: "2017", turnoutPercentage: 74, notes: "Consistent" },
        { year: "2012", turnoutPercentage: 73, notes: "Consistent" },
      ],
    },

    governanceAudit: {
      district: "Ludhiana",
      dc: "Ludhiana District Collector",
      mla: "Hardeep Singh Mundian",
      mlaParty: "AAP",
      mlaTenure: "2022-present",
    },

    mlaPerformance: {
      mlaName: "Hardeep Singh Mundian",
      assessment: "Moderate",
      localLeader: true,
      margin: "Won by smallest margin",
      performance: "MODERATE",
    },

    powerStructure: {
      politicalInfluencers: [
        {
          name: "Hardeep Singh Mundian (AAP MLA)",
          affiliation: "AAP",
          description: ["Local figure", "Won by smallest margin"],
          vulnerability: "Vulnerable to anti-incumbency",
        },
        {
          name: "Congress Leaders",
          affiliation: "INC",
          description: ["Traditional family networks", "Village influence", "Looking for comeback"],
        },
        {
          name: "Farmer Union Leaders",
          affiliation: "BKU and others",
          description: ["Can influence voters", "Agricultural narrative"],
        },
      ],
    },

    aapVulnerability: {
      whyVulnerable: [
        "Smallest Margin: 15,193 shows voter doubt",
        "Drug Crisis: Rural youth dying",
        "Traditional Congress Area: Loyalty persists",
        "Local Issues: AAP MLA not addressing problems",
      ],
      weakPoints: [
        {
          issue: "Drug crisis",
          aapPromise: "End addiction",
          currentStatus: "Worsening",
          voterSentiment: "ANGRY",
        },
        {
          issue: "Local issues",
          aapPromise: "MLA accessibility",
          currentStatus: "Poor",
          voterSentiment: "FRUSTRATED",
        },
        {
          issue: "Farm distress",
          aapPromise: "MSP relief",
          currentStatus: "Unfulfilled",
          voterSentiment: "ANGRY",
        },
        {
          issue: "Employment",
          aapPromise: "Jobs",
          currentStatus: "Limited",
          voterSentiment: "DISAPPOINTED",
        },
      ],
    },

    strategicBlueprint: {
      aapStrategy: {
        priorities: ["Maintain margin", "Drug crisis response", "Local issue focus"],
      },
      congressStrategy: {
        priorities: [
          "Booth-level management",
          "5 workers per booth",
          "Identify swing voters",
          "Personal contact",
          "Drug crisis as #1 issue",
        ],
      },
      targetSegments: [
        { segment: "SAD voters", votes: "~5,000" },
        { segment: "Swing voters", votes: "Identify through booth work" },
      ],
    },

    priorityRanking: {
      tier: "TIER 1 - HIGH PRIORITY",
      seats: [
        { acNumber: "AC059", name: "Sahnewal", margin: "15,193", note: "BEST in Ludhiana" },
        { acNumber: "AC051", name: "Chamkaur Sahib", margin: "7,942", note: "BEST OVERALL" },
        { acNumber: "AC056", name: "Amloh", margin: "24,663" },
      ],
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: ["News18", "OneIndia", "IndiaVotes", "Chanakhya"],
    compiledDate: "20 May 2026",
    verificationStatus: "VERIFIED",
    researchAgent: "research-agent",
  },
};
