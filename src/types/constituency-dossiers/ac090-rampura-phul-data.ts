/**
 * AC-090 Rampura Phul Assembly Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source: AC090-Rampura-Phul.md + AC090-RampuraPhul-deep.md
 */

import type {
  RampuraPhulDossierComplete,
} from "./ac090-rampura-phul-types";

// =============================================================================
// MAIN DOSSIER DATA (from AC090-Rampura-Phul.md)
// =============================================================================

const mainDossierData = {
  executiveSummary: {
    description:
      "Rampura Phul (AC090) is a General category assembly constituency in Bathinda district of Punjab's Malwa region. The constituency witnessed an AAP victory in 2022 with Balkar Singh Siddhu winning by a thin margin of 10,410 votes. Key issues include agricultural distress, drug crisis, infrastructure development, and youth unemployment.",
    winner: "Balkar Singh Siddhu",
    winnerParty: "AAP" as const,
    margin: 10410,
    keyIssues: [
      "Drug menace - Seizures in Bathinda district",
      "Market town issues - Agricultural marketing problems",
      "Urban infrastructure - Town needs development",
      "Agricultural distress - Wheat/cotton farmers",
      "Youth unemployment - Limited opportunities",
    ],
    politicalInsight:
      "AAP holds this seat with a thin margin of 10,410 votes (7.65%). This is a VULNERABLE seat for AAP as the mandate is split. Congress came close in 2022 and needs a strong push. Anti-incumbency could be a key factor.",
  },

  constituencyProfile: {
    acNumber: 90,
    officialName: "Rampura Phul",
    district: "Bathinda",
    region: "Malwa" as const,
    category: "General" as const,
    lokSabhaSeat: "Bathinda" as const,
    location: "Malwa region, Central Punjab",
  },

  electionResults: [
    {
      year: 2022,
      winner: "Balkar Singh Siddhu",
      winnerParty: "AAP" as const,
      voteShare: 43,
      margin: 10410,
      marginDescription: "10,410 votes (7.65%)",
      runnerUp: "Not specified",
      totalElectors: 155000,
      notes: "AAP won by thin margin - vulnerable seat",
    },
    {
      year: 2017,
      winner: "Gurpreet Singh Kangar",
      winnerParty: "INC" as const,
      margin: 10385,
      totalElectors: 150000,
      notes: "INC won by 10,385 votes",
    },
    {
      year: 2012,
      winner: "Not available",
      winnerParty: "INC" as const,
      margin: 0,
      notes: "Data not available",
    },
  ],

  casteComposition: {
    entries: [
      { category: "Jat Sikh", estimatedPercent: 28 },
      { category: "Hindu Minority", estimatedPercent: 30 },
      { category: "SC Population", estimatedPercent: 28 },
      { category: "OBC", estimatedPercent: 10 },
    ],
    keyDemographics: [
      "Sikh Majority: ~65-70%",
      "Hindu Minority: ~30-35%",
      "Jat Sikh: Dominant (~28-32%)",
      "SC Population: ~28-30%",
      "OBC: ~10-12%",
    ],
  },

  electorateData: [
    {
      electionYear: 2022,
      totalElectors: 155000,
      turnoutPercent: 77,
    },
    {
      electionYear: 2017,
      totalElectors: 150000,
      turnoutPercent: 78,
    },
  ],

  voterDemographics: {
    turnout: 77,
    ruralVotersPercent: 75,
    urbanVotersPercent: 25,
    urbanRuralMix: "Urban-rural mix with market town",
  },

  keyLocalIssues: [
    {
      rank: 1,
      title: "Drug menace",
      description: "Seizures in Bathinda district - youth addiction prevalent",
    },
    {
      rank: 2,
      title: "Market town issues",
      description: "Agricultural marketing problems",
    },
    {
      rank: 3,
      title: "Urban infrastructure",
      description: "Town needs development",
    },
    {
      rank: 4,
      title: "Agricultural distress",
      description: "Wheat/cotton farmers facing issues",
    },
    {
      rank: 5,
      title: "Youth unemployment",
      description: "Limited opportunities",
    },
  ],

  congressPosition: {
    currentStatus: {
      holder: "Balkar Singh Siddhu (AAP)",
      margin: 10410,
      vulnerability:
        "AAP holds this seat with thin margin - mandate is split",
      history:
        "2017: INC won by 10,385; 2022: AAP won by 10,410 - swing seat",
    },
    assessment: {
      points: [
        "AAP won by thin 10,410 vote margin",
        "Very close result - mandate is split",
        "Congress came close - needs strong push",
        "Anti-incumbency could be key factor",
        "Need candidate with local acceptance",
      ],
    },
    recommendations: [
      "Target AAP anti-incumbency",
      "Strong local candidate",
      "Focus on rural and agricultural voters",
      "Address drug crisis narrative",
    ],
  },

  recommendedCandidate: {
    profile: "Leader with market town background",
    background: "Agricultural business, or professional",
    keyTraits: ["Known for accessibility", "Development work"],
    targetVoters: ["Town voters", "Rural farmers"],
    priority: "HIGH",
  },

  attackLines: [
    {
      rank: 1,
      title: "Close election shows dissatisfaction",
      description:
        "AAP's thin margin proves voters are unhappy with performance",
    },
    {
      rank: 2,
      title: "Drug menace continues",
      description:
        "Despite AAP government, drug crisis remains unresolved in Bathinda district",
    },
    {
      rank: 3,
      title: "Town infrastructure neglected",
      description: "Rampura Phul town lacks basic development",
    },
    {
      rank: 4,
      title: "No development visible",
      description: "Broken promises on infrastructure and utilities",
    },
    {
      rank: 5,
      title: "Broken promises on jobs and finances",
      description:
        "AAP failed to deliver on employment and financial commitments",
    },
  ],

  voteShareAnalysis: {
    entries: [{ party: "AAP" as const, voteSharePercent: 43 }],
    congressGapToWin: 10,
    congressGapDescription:
      "AAP won with ~43% vote share - Congress within striking distance",
  },

  recommendations: {
    priority: "HIGH" as const,
    priorityRationale:
      "AAP won by thin margin - vulnerable seat, Congress can target",
    candidate: "Local candidate with market town background and Congress background",
    narrative: "AAP failed to deliver on promises and governance",
    outreach: "Rural voters, farmers, youth",
    coalition: "Focus on traditional Congress voters + farmers + youth",
  },

  sources: [
    "https://www.oneindia.com/rampura-phul-assembly-elections-pb-90/",
    "https://www.indiavotes.com/ac/summary/45474",
    "https://en.wikipedia.org/wiki/Rampura_Phul_Assembly_constituency",
  ],
};

// =============================================================================
// DEEP RESEARCH DATA (from AC090-RampuraPhul-deep.md)
// =============================================================================

const deepResearchData = {
  identity: {
    constituency: {
      acNumber: 90,
      officialName: "Rampura Phul",
      district: "Bathinda",
      region: "Malwa" as const,
      category: "General" as const,
      lokSabhaSeat: "Faridkot" as const,
      location: "Malwa (Central Punjab)",
    },
    research: {
      researchMicroTaskId: "AC090",
      topic: "Rampura Phul Assembly Constituency - Deep Research",
      tier: 2,
      date: "20 May 2026",
      agent: "Constituency-Research-Agent",
      sourcesConsulted:
        "Web searches on Punjab 2022 election results, demographics, issues",
      verificationStatus: "PARTIALLY_VERIFIED" as const,
      dataCurrency: "As of May 2026",
    },
  },

  executiveSummary: {
    description:
      "Rampura Phul (AC090) is a General category assembly constituency in Bathinda district of Punjab's Malwa region. The constituency witnessed an AAP victory in 2022 with Balkar Singh Siddhu winning. Key issues include agricultural distress, drug crisis, and infrastructure development.",
    winner: "Balkar Singh Siddhu",
    margin: 10410,
    keyIssues: [
      "Drug Crisis: Youth addiction prevalent",
      "Agricultural Distress: Farmer issues, MSP procurement",
      "Infrastructure: Roads, canal system",
      "Unemployment: Youth jobs",
      "Healthcare: Medical facilities",
    ],
  },

  demographics: {
    totalPopulation: 180000,
    casteComposition: [
      { category: "Jat Sikh", estimatedPercent: 40 },
      { category: "Hindu General", estimatedPercent: 30 },
      { category: "Scheduled Castes", estimatedPercent: 20 },
      { category: "Other Backward Classes", estimatedPercent: 7 },
    ],
    religionDistribution: [
      { religion: "Sikh", percent: 65 },
      { religion: "Hindu", percent: 33 },
      { religion: "Others", percent: 2 },
    ],
    notes:
      "Caste composition NEEDS CONSTITUENCY-LEVEL VERIFICATION. Religion distribution is at district level (Bathinda).",
  },

  electoralHistory: {
    results: [
      { year: 2022, winner: "Balkar Singh Siddhu", winnerParty: "AAP" as const, margin: 10410 },
      { year: 2017, winner: "[NEEDS DATA]", winnerParty: "INC" as const, margin: 10385 },
      { year: 2012, winner: "[NEEDS DATA]", winnerParty: "INC" as const, margin: 0 },
    ],
    notes:
      "2017 and earlier results NEED VERIFICATION. Deep file shows Gurpreet Singh Kangar (INC) won 2017.",
  },

  keyIssues: {
    primaryIssues: [
      "Drug Crisis: Youth addiction prevalent",
      "Agricultural Distress: Farmer issues, MSP procurement",
      "Infrastructure: Roads, canal system",
      "Unemployment: Youth jobs",
      "Healthcare: Medical facilities",
    ],
    attackLines: [
      "AAP failed to tackle drug crisis",
      "Broken promises on employment",
      "Development promises unfulfilled",
    ],
  },

  politicalPlayers: {
    currentMLA: {
      name: "Balkar Singh Siddhu",
      party: "AAP" as const,
      notes: "Won 2022 by 10,410 votes",
    },
    localInfluencers: [
      {
        category: "Political",
        examples: ["[NEEDS VERIFICATION]"],
        notes: "Local influencer data requires verification",
      },
    ],
  },

  voterProfile: {
    turnout: 76,
    ruralVotersPercent: 75,
    urbanVotersPercent: 25,
  },

  outlook2027: {
    congressStrategy: {
      targetVoters: ["Rural voters", "Farmers", "Youth"],
      primaryNarrative: "AAP failed to deliver",
      grievanceFocus: ["Drug crisis", "Farmer distress", "Broken promises"],
      keyActions: [
        "Target AAP anti-incumbency",
        "Strong local candidate",
        "Focus on rural and agricultural voters",
      ],
    },
    keyWinningStrategy: {
      candidate: "Strong local candidate with Congress background",
      primaryNarrative: "AAP failed on promises and governance",
      targetVoters: ["Rural", "Farmers", "Youth"],
      grievanceFocus: ["Drug crisis", "Agricultural distress"],
    },
  },

  intelligenceGaps: {
    gaps: [
      {
        dataItem: "2017 and earlier election results",
        verificationNeeded: "Requires primary source verification",
      },
      {
        dataItem: "Booth-wise analysis",
        verificationNeeded: "Requires detailed electoral data",
      },
      {
        dataItem: "All 2022 candidate vote shares",
        verificationNeeded: "Requires complete election results",
      },
      {
        dataItem: "Current MLA's performance",
        verificationNeeded: "Requires local assessment",
      },
    ],
  },

  recommendations: [
    "Candidate: Local candidate with Congress background",
    "Primary Narrative: AAP failed to deliver",
    "Target Voters: Rural, farmers",
    "Grievance Focus: Drug crisis, agricultural distress",
  ],

  sources: [
    "Web searches - OneIndia",
    "Web searches - Chanakyya",
    "IndiaVotes",
    "Wikipedia",
  ],
};

// =============================================================================
// COMPILED COMPLETE DOSSIER
// =============================================================================

export const ac090RampuraPhulDossier: RampuraPhulDossierComplete = {
  researchId: "AC090",
  deepResearchId: "AC090-Deep",
  main: mainDossierData,
  deep: deepResearchData,
  compiledDate: "20 May 2026",
};

// =============================================================================
// CONSTITUENCY REFERENCE (shortcut)
// =============================================================================

export const ac090RampuraPhulReference = {
  acNumber: 90,
  name: "Rampura Phul",
  district: "Bathinda",
  region: "Malwa" as const,
  category: "General" as const,
  winner2022: "Balkar Singh Siddhu",
  winnerParty2022: "AAP" as const,
  margin2022: 10410,
};
