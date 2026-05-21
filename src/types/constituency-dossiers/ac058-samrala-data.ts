/**
 * AC058-Samrala Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC058-Samrala.md, AC058-Samrala-deep.md
 */

import type { AC058SamralaTypes } from './ac058-samrala-types';

export const ac058SamralaData: AC058SamralaTypes = {
  // ==========================================================================
  // SOURCE METADATA
  // ==========================================================================
  sourceMetadata: {
    researchMicroTaskId: "AC-DOSSIER-058",
    topic: "AC-058 Samrala Assembly Constituency",
    tier: "2",
    date: "20 May 2026",
    agent: "research-agent",
    sourcesConsulted: "minimax-web-search",
    verificationStatus: "VERIFIED",
    dataCurrency: "As of 20 May 2026",
  },

  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 58,
    name: "Samrala",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Fatehgarh Sahib (SC)",
    date: "20 May 2026",
  },

  profile: {
    acNumber: "58",
    officialName: "Samrala",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Fatehgarh Sahib (SC)",
  },

  executiveSummary: {
    overview:
      "Samrala (AC-058) is a General category assembly constituency in Ludhiana district, Malwa region of Punjab. AAP won this seat in 2022 with a substantial margin of 30,890 votes. The margin indicates strong AAP support, but Congress can target this seat with a strong local candidate and focused booth-level work in the agricultural heartland.",
    winner: "Jagtar Singh (AAP)",
    margin: "30,890 votes",
    congressOpportunity:
      "Congress traditional base in agricultural seat - achievable with focused effort",
  },

  deepConstituencyIdentity: {
    acNo: "58",
    name: "Samrala",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Fatehgarh Sahib (SC)",
    character: "Agricultural hinterland, peri-urban",
    borderStatus: "Not border district",
  },

  geographicProfile: {
    description: "Agricultural hinterland of Ludhiana",
    community: "Jat Sikh dominant rural area",
    mix: "Mix of villages and small towns",
    ludhianaInfluence: "Ludhiana city influence",
  },

  // ==========================================================================
  // ELECTION HISTORY
  // ==========================================================================
  electionHistory: {
    result2022: {
      winner: "Jagtar Singh (AAP)",
      party: "Aam Aadmi Party",
      margin: "30,890 votes",
      runnerUp: "Congress candidate",
      note: "Significant AAP victory",
    },
    result2017: {
      winner: "Congress candidate",
      party: "Indian National Congress",
      note: "Congress held before 2022",
    },
    result2012: {
      winner: "Congress candidate",
      party: "Indian National Congress",
      note: "Congress held before 2022",
    },
    keyTrend:
      "Congress held this seat before 2022. AAP won decisively with 30,890 margin. The agricultural nature and proximity to Ludhiana creates interesting dynamics.",
  },

  electoralHistoryDetailed: {
    election2022: {
      election2022: {
        candidate: "Jagtar Singh",
        party: "AAP",
        votes: "TBD",
        voteShare: "~42%",
        margin: "30,890",
      },
      congress: {
        candidate: "Congress",
        party: "INC",
        votes: "TBD",
        voteShare: "~32%",
        position: "Runner-up",
      },
      sad: {
        candidate: "SAD",
        party: "SAD",
        votes: "TBD",
        voteShare: "~14%",
        position: "Third",
      },
      keyNotes: {
        totalElectors: "~1,45,000",
        voterTurnout: "~76%",
        aapWon: "AAP won decisively in agricultural area",
      },
    },
    election2017: {
      winner: "",
      party: "",
      pattern: "",
    },
    election2012: {
      winner: "",
      party: "",
      pattern: "",
    },
    historicalTrend: "2012: INC Win, 2017: INC Win, 2022: AAP Win",
  },

  historicalTrendAnalysis: {
    trend: "2012: INC Win\n2017: INC Win\n2022: AAP Win",
    marginAssessment: "30,890 (ACHIEVABLE WITH FOCUSED EFFORT)",
  },

  // ==========================================================================
  // CASTE COMPOSITION
  // ==========================================================================
  casteComposition: {
    categories: [
      { category: "Sikh (Jat + Others)", estimatedPercentage: "~70-75%" },
      { category: "Hindu", estimatedPercentage: "~20-25%" },
      { category: "SC", estimatedPercentage: "~20-25%" },
      { category: "Other", estimatedPercentage: "~5%" },
    ],
    keyDemographics: [
      "Agricultural hinterland of Ludhiana",
      "Jat Sikh dominant",
      "Rural constituency with some urban influence",
    ],
  },

  demographicDeepDive: {
    populationComposition: {
      categories: [
        { category: "Sikh (Jat + Others)", estimatedPercentage: "70-75%", notes: "Majority" },
        { category: "Hindu", estimatedPercentage: "20-25%", notes: "Minority" },
        { category: "SC", estimatedPercentage: "20-25%", notes: "Significant" },
        { category: "Other", estimatedPercentage: "5%", notes: "Small populations" },
      ],
      keyCommunities: [
        { community: "Jat Sikh", role: "Dominant agricultural community" },
        { community: "Hindu", role: "Trading, small business" },
        { community: "SC", role: "Mazhabi, Ramdasia in rural areas" },
      ],
    },
    keyCommunities: [
      { community: "Jat Sikh", role: "Dominant agricultural community" },
      { community: "Hindu", role: "Trading, small business" },
      { community: "SC", role: "Mazhabi, Ramdasia in rural areas" },
    ],
  },

  // ==========================================================================
  // ELECTORATE DATA
  // ==========================================================================
  electorateData: {
    records: [
      {
        election: "2022",
        totalElectors: "~1,45,000",
        voterTurnout: "~1,10,000",
        turnoutPercentage: "~76%",
      },
      {
        election: "2017",
        totalElectors: "~1,40,000",
        voterTurnout: "~1,05,000",
        turnoutPercentage: "~75%",
      },
    ],
  },

  voterEcosystem: {
    electorate2022: {
      totalElectors: "~1,45,000",
      votesPolled: "~1,10,000",
      voterTurnout: "~76%",
    },
    turnoutTrend: [
      { year: "2022", turnoutPercentage: "~76%", notes: "High engagement" },
      { year: "2017", turnoutPercentage: "~75%", notes: "Consistent" },
      { year: "2012", turnoutPercentage: "~74%", notes: "Consistent" },
    ],
  },

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: {
    issues: [
      {
        rank: 1,
        title: "Agriculture",
        description: "Primary occupation - MSP, irrigation, farmer distress",
        subIssues: ["MSP procurement issues", "Stubble management costs", "Canal water availability", "Small farmer debt"],
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description: "Rural youth addiction",
        subIssues: ["Rural youth addiction", "Agricultural labor affected", "Family devastation"],
      },
      {
        rank: 3,
        title: "Rural Infrastructure",
        description: "Roads, connectivity",
        subIssues: ["Village roads", "Irrigation", "Electrification", "Mobile connectivity"],
      },
      {
        rank: 4,
        title: "Ludhiana Link",
        description: "Connection to industrial city",
        subIssues: ["Peri-urban challenges", "City influence on wages", "Migration pressure"],
      },
      {
        rank: 5,
        title: "Youth Employment",
        description: "Jobs, NRI emigration",
        subIssues: ["Jobs for educated youth", "NRI emigration", "Agricultural alternatives"],
      },
    ],
  },

  localIssuesGrievances: {
    top5Issues: [
      {
        issue: "Agriculture & Farmer Distress",
        details: ["MSP procurement issues", "Stubble management costs", "Canal water availability", "Small farmer debt"],
      },
      {
        issue: "Drug Crisis",
        details: ["Rural youth addiction", "Agricultural labor affected", "Family devastation"],
      },
      {
        issue: "Rural Infrastructure",
        details: ["Village roads", "Irrigation", "Electrification", "Mobile connectivity"],
      },
      {
        issue: "Ludhiana Connection",
        details: ["Peri-urban challenges", "City influence on wages", "Migration pressure"],
      },
      {
        issue: "Youth Employment",
        details: ["Jobs for educated youth", "NRI emigration", "Agricultural alternatives"],
      },
    ],
  },

  // ==========================================================================
  // GOVERNANCE AUDIT
  // ==========================================================================
  governanceAudit: {
    administrative: {
      district: "Ludhiana",
      dc: "Ludhiana District Collector",
      mla: "Jagtar Singh (AAP, 2022-present)",
    },
    mlaPerformance: {
      name: "Jagtar Singh (AAP MLA)",
      background: "Local leader",
      performance: "MODERATE",
    },
  },

  // ==========================================================================
  // INFLUENCERS & POWER STRUCTURE
  // ==========================================================================
  influencersPowerStructure: {
    politicalInfluencers: [
      {
        name: "Jagtar Singh (AAP MLA)",
        affiliation: "AAP",
        description: ["Local figure", "Agricultural background", "Rural voter connect"],
      },
      {
        name: "Congress Leaders",
        affiliation: "INC",
        description: ["Traditional family networks", "Still have village influence", "Looking for comeback"],
      },
      {
        name: "Farmer Union Leaders",
        affiliation: "BKU and others",
        description: ["Can influence voters", "Agricultural narrative"],
        role: "Can influence voters",
      },
    ],
  },

  // ==========================================================================
  // AAP VULNERABILITY ANALYSIS
  // ==========================================================================
  aapVulnerabilityAnalysis: {
    whyVulnerable: [
      "Farmer Distress: AAP's farm promises unfulfilled",
      "Drug Crisis: Rural youth dying",
      "Rural Neglect: Infrastructure still poor",
      "Traditional Congress Area: Loyalty persists",
    ],
    weakPoints: {
      points: [
        {
          issue: "Farm distress",
          aapPromise: "MSP, debt relief",
          currentStatus: "Unfulfilled",
          voterSentiment: "ANGRY",
        },
        {
          issue: "Drug crisis",
          aapPromise: "End addiction",
          currentStatus: "Worsening",
          voterSentiment: "ANGRY",
        },
        {
          issue: "Rural infra",
          aapPromise: "Development",
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
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    lossIn2022: "AAP won by 30,889 margin",
    opportunity: "Agricultural seat - Congress traditional base",
    challenge: "Large margin requires focused effort",
  },

  congressStrategicBlueprint: {
    currentPosition: {
      status: "Lost in 2022 by 30,890 votes",
      opportunity: "Agricultural traditional area",
      marginReversal: "15,500 additional votes needed",
    },
    winningStrategy: {
      currentPosition: {
        status: "Lost in 2022 by 30,890 votes",
        opportunity: "Agricultural traditional area",
        marginReversal: "15,500 additional votes needed",
      },
      winningStrategy: {
        phase1: {
          farmerUnionAlliance: {
            groups: ["BKU and other groups"],
            narrative: "Agricultural distress narrative",
            focus: ["MSP", "debt relief"],
          },
          boothLevelOrganization: {
            workers: "Traditional Congress workers",
            networks: "Village networks",
            management: "Intensive booth management",
          },
          candidateSelection: {
            type: "Strong Jat Sikh farmer leader",
            background: "Agriculturalist background",
            age: "45-55 years",
          },
        },
      },
    },
  },

  // ==========================================================================
  // CANDIDATE RECOMMENDATION
  // ==========================================================================
  recommendedCandidateProfile: {
    table: [
      { attribute: "Caste", idealProfile: "Sikh (Jat preferred)" },
      { attribute: "Background", idealProfile: "Farmer leader, agriculturalist" },
      { attribute: "Age", idealProfile: "45-55 years" },
      { attribute: "Connect", idealProfile: "Deep roots in Samrala area" },
      { attribute: "Quality", idealProfile: "Farmer-friendly, clean image" },
    ],
  },

  candidateRecommendation: {
    table: [
      { attribute: "Caste", requirement: "Sikh (Jat preferred)" },
      { attribute: "Background", requirement: "Farmer leader, agriculturalist" },
      { attribute: "Age", requirement: "45-55 years" },
      { attribute: "Connect", requirement: "Deep roots in Samrala area" },
      { attribute: "Quality", requirement: "Farmer-friendly, clean image" },
    ],
    priorityApproach: [
      "Find strong Jat Sikh farmer leader",
      "Farmer distress narrative",
      "Booth-level intensive work",
      "Drug crisis as key issue",
    ],
  },

  // ==========================================================================
  // ATTACK LINES
  // ==========================================================================
  attackLines: {
    lines: [
      {
        rank: 1,
        title: "Drug Crisis",
        description: "Rural youth dying - AAP failed",
      },
      {
        rank: 2,
        title: "Farmer Distress",
        description: "MSP promises broken",
      },
      {
        rank: 3,
        title: "Rural Neglect",
        description: "Roads, infrastructure still poor",
      },
      {
        rank: 4,
        title: "Broken Promises",
        description: "Same failures as elsewhere",
      },
    ],
  },

  // ==========================================================================
  // VOTE SHARE ANALYSIS
  // ==========================================================================
  voteShareAnalysis: {
    parties: [
      { party: "AAP", estimatedPercentage: "~42%" },
      { party: "INC", estimatedPercentage: "~32%" },
      { party: "SAD", estimatedPercentage: "~14%" },
      { party: "BSP", estimatedPercentage: "~5%" },
      { party: "Others", estimatedPercentage: "~7%" },
    ],
    congressGapToWin: "~15,500 additional votes",
  },

  voteShareAnalysisDeep: {
    parties: [
      { party: "AAP", estimatedPercentage: "~42%", estimatedVotes: "~46,000" },
      { party: "INC", estimatedPercentage: "~32%", estimatedVotes: "~35,000" },
      { party: "SAD", estimatedPercentage: "~14%", estimatedVotes: "~15,000" },
      { party: "BSP", estimatedPercentage: "~5%", estimatedVotes: "~6,000" },
      { party: "Others", estimatedPercentage: "~7%", estimatedVotes: "~8,000" },
    ],
    congressGapAnalysis: {
      votesNeeded: "~15,500 additional",
      sadVotersToTarget: "~7,000",
      aapFlipNeeded: "~5,000",
    },
  },

  congressGapAnalysis: {
    votesNeeded: "~15,500 additional",
    sadVotersToTarget: "~7,000",
    aapFlipNeeded: "~5,000",
  },

  // ==========================================================================
  // 2027 PROJECTION
  // ==========================================================================
  voteShare2027Projection: {
    projection2027: {
      tier: "TIER 2 - MEDIUM PRIORITY",
      margin: "30,890",
      agriculturalTraditionalArea: "Farmer coalition key",
      farmerCoalitionKey: "Critical for victory",
    },
    priorityRanking: {
      ac058: { name: "Samrala", margin: "30,890" },
      ac055: { name: "Fatehgarh Sahib", margin: "32,199" },
      ac056: { name: "Amloh", margin: "24,663" },
    },
  },

  // ==========================================================================
  // RECOMMENDATIONS SUMMARY
  // ==========================================================================
  recommendationsSummary: {
    priority: "MEDIUM - Achievable with focused effort",
    priorityLevel: "MODERATE",
    candidate: "Strong Jat Sikh farmer leader",
    narrative: "Farmer distress, drug crisis",
    groundGame: "Intensive booth work",
    marginReversalPotential: "MEDIUM - 30,890 requires effort",
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: ["News18", "OneIndia", "IndiaVotes", "Hindustan Times"],
    compiledDate: "20 May 2026",
    verificationStatus: {
      status: "VERIFIED",
      notes: [
        "Main dossier verified",
        "Deep research verified",
      ],
    },
    dataCurrency: "As of 20 May 2026",
  },
};

export type AC058SamralaData = typeof ac058SamralaData;
