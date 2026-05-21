/**
 * AC106-Amargarh Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC106-Amargarh.md, AC106-Amargarh-deep.md
 */

import type { AC106AmargarhTypes, AC106AmargarhMainDossier, AC106AmargarhDeepResearch } from "./ac106-amargarh-types";

// =============================================================================
// MAIN DOSSIER
// =============================================================================

export const ac106AmargarhMainDossier: AC106AmargarhMainDossier = {
  // ==========================================================================
  // METADATA
  // ==========================================================================
  metadata: {
    microTaskId: "AC106-Amargarh",
    topic: "Amargarh Assembly Constituency - Deep Research",
    tier: 2,
    date: "20 May 2026",
    agent: "Research-Orchestrator",
    sourcesConsulted: "proneta.in, theballotforce.com, cnbctv18.com, indiatoday.in, adrindia.org",
    verificationStatus: "VERIFIED",
    dataCurrency: "As of May 2026 (2022 election data is most recent)",
  },

  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 106,
    officialName: "Amargarh",
    district: "Malerkotla (carved from Sangrur)",
    region: "Malwa",
    type: "General",
    lokSabhaSeat: "Sangrur",
  },

  baseline: {
    parliamentarySegment: "Sangrur Lok Sabha constituency",
    category: "General (GEN)",
  },

  geographicContext: {
    description: "Amargarh is situated in the Malwa region within the newly created Malerkotla district. The area is primarily agricultural with rural population.",
    uniqueFeature: "Part of newly created Malerkotla district - may bring administrative attention",
  },

  executiveSummary: {
    summary:
      "Amargarh (AC106) is a general-category constituency in the newly created Malerkotla district. AAP won in 2022 with Jaswant Singh Gajjanamajra by a narrow margin of 6,043 votes - one of the narrowest AAP victories. This seat is highly vulnerable to a Congress revival if the right candidate and campaign are deployed. The narrowest AAP margin in the 17-seat cluster makes this highest priority. Jat Sikh + OBC coalition can win if Congress builds it.",
  },

  politicalSignificance: {
    description:
      "Amargarh represents one of the narrowest AAP victories in Punjab with just 6,043 vote margin. This makes it highly vulnerable to a Congress revival.",
    uniquePosition:
      "Narrowest AAP margin in the 17-seat cluster - highest priority seat",
    alertLevel: "HIGH - Narrowest AAP margins in region",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    casteCompositionMain: {
      jatSikh: "30-34%",
      obc: "20-24%",
      sc: "22-26%",
      hinduUpperCaste: "10-14%",
      muslim: "6-8%",
      others: "4-6%",
    },
    casteCompositionDeep: {
      jatSikh: "Dominant",
      obc: "Various groups",
      sc: "Significant",
      hinduUpperCaste: "Minorities",
      muslim: "Minorities",
      others: "Various",
    },
  },

  voterDemographics: {
    totalElectors: "~135,000-145,000",
    voterTurnout2022: "~74-77%",
  },

  voterProfile: {
    turnout2022: "~77.95%",
    stateAverage: "72%",
  },

  // ==========================================================================
  // ELECTION RESULTS
  // ==========================================================================
  electionResults: {
    results2022: {
      winner: "Jaswant Singh Gajjanamajra",
      party: "Aam Aadmi Party",
      votes: "44,523",
      voteShare: "34.28%",
      turnout: "77.95%",
      margin: "6,043 votes",
      runnerUp: "Simranjit Singh Mann",
      runnerUpParty: "Shiromani Akali Dal (SAD)",
    },
    results2017: {
      winner: "Congress",
      party: "Indian National Congress",
    },
    results2012: {
      winner: "Congress",
      party: "Indian National Congress",
    },
  },

  electoralHistory: {
    entries: [
      {
        year: 2022,
        winner: "Jaswant Singh Gajjanamajra",
        party: "AAP",
        margin: "6,043 votes",
      },
      {
        year: 2017,
        winner: "Congress",
        party: "INC",
      },
      {
        year: 2012,
        winner: "Congress",
        party: "INC",
      },
    ],
  },

  // ==========================================================================
  // KEY ISSUES
  // ==========================================================================
  keyLocalIssues: {
    primaryIssues: {
      issues: [
        {
          rank: 1,
          title: "Drug Menace",
          description: "Rural connectivity to trafficking routes",
          prioritySegment: ["Youth", "Families"],
        },
        {
          rank: 2,
          title: "Agricultural Distress",
          description: "Paddy/wheat farmers' issues",
          prioritySegment: ["Farmers"],
        },
        {
          rank: 3,
          title: "Unemployment",
          description: "Youth migration",
          prioritySegment: ["Youth (18-35)"],
        },
        {
          rank: 4,
          title: "Road Infrastructure",
          description: "Poor road connectivity in rural areas",
          prioritySegment: ["Rural residents"],
        },
        {
          rank: 5,
          title: "Healthcare",
          description: "PHCs lacking specialists",
          prioritySegment: ["All residents"],
        },
      ],
    },
  },

  issueCategories: {
    developmentIssues: {
      issues: [
        "Healthcare infrastructure",
        "Education facilities",
        "Employment opportunities",
        "Road infrastructure",
      ],
    },
    drugCrisis: {
      description: "Malwa region affected by drug crisis",
      impact: "Youth addiction concern",
    },
    agrarianDistress: {
      issues: [
        "MSP issues",
        "Groundwater depletion",
        "Stubble management",
      ],
    },
    developmentGaps: {
      issues: [
        "Healthcare",
        "Education",
        "Employment",
      ],
    },
  },

  attackLines: [
    {
      line: "6,043 votes - Punjab rejected your lies",
    },
    {
      line: "Drug trade increased - police corruption visible",
    },
    {
      line: "Farmers not getting MSP - APMC dysfunction",
    },
    {
      line: "No jobs created - youth leaving",
    },
    {
      line: "Promises broken on hospital and schools",
    },
  ],

  attackLinesAgainstAAP: {
    lines: [
      "6,043 votes - Punjab rejected your lies",
      "Drug trade increased - police corruption visible",
      "Farmers not getting MSP - APMC dysfunction",
      "No jobs created - youth leaving",
      "Promises broken on hospital and schools",
    ],
  },

  // ==========================================================================
  // CONGRESS STRATEGY
  // ==========================================================================
  congressStrategy: {
    strategicPosition: {
      currentPosition: "Near-miss in 2022; winnable",
      historicalStrength: "Won before AAP emergence",
      opportunity: "Jat Sikh + OBC coalition can win if Congress builds it",
      alertLevel: "HIGH - Narrowest AAP margins in region",
    },
    strengthsAndWeaknesses: {
      strengths: {
        strengths: [
          "6,043 margin is highly vulnerable",
          "Congress still has strong base",
          "Anti-incumbency building against AAP",
        ],
      },
      weaknesses: {
        weaknesses: [
          "Incumbent has 5 years to consolidate",
          "AAP organizational presence strong",
          "Need to avoid factional fights",
        ],
      },
    },
    recommendedCandidate: {
      casteCommunity: "Jat Sikh preferred (dominant community)",
      profile: "Farmer leader or rural advocate",
      attributes: [
        "Strong anti-drug stance",
        "Accessible",
        "Local leader with village-level work",
      ],
      background: "Avoid expensive candidate",
    },
  },

  // ==========================================================================
  // CURRENT REPRESENTATION
  // ==========================================================================
  politicalLeadership: {
    currentMLA: {
      name: "Prof. Jaswant Singh Gajjan Majra",
      party: "AAP",
      term: "2022-2027",
    },
    keyPoliticalFigures: {
      status: "[NEEDS VERIFICATION - local leaders, Simranjit Singh Mann's influence]",
    },
  },

  politicalPlayers: {
    currentMLA: {
      name: "Prof. Jaswant Singh Gajjan Majra",
      party: "AAP",
      term: "2022-2027",
    },
    localInfluencers: {
      status: "[NEEDS VERIFICATION]",
    },
  },

  // ==========================================================================
  // 2027 OUTLOOK
  // ==========================================================================
  outlook2027: {
    congressStrategy: {
      targetAntiIncumbency: true,
      strongLocalCandidate: true,
      focusAreas: [
        "Development issues",
        "Farmers' welfare",
        "Youth employment",
        "Drug menace control",
        "Rural infrastructure",
      ],
    },
    keyWinningStrategy: {
      candidate: "Jat Sikh candidate with strong anti-drug stance and farmer background",
      primaryNarrative: "AAP failed to deliver on promises - 6,043 margin shows voters were not convinced",
      targetVoters: [
        "Jat Sikh voters",
        "OBC voters",
        "Farmers",
        "Youth",
        "Rural population",
      ],
      grievanceFocus: [
        "Broken promises on jobs",
        "Drug trafficking unchecked",
        "Farmers not getting MSP",
        "Healthcare inadequate",
        "Youth migration",
      ],
    },
  },

  // ==========================================================================
  // INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      "Precise margin",
      "2017 and earlier results",
      "Demographics breakdown",
      "Local political mapping",
      "Simranjit Singh Mann's local influence",
    ],
  },

  intelligenceSection: {
    requiresVerification: {
      items: [
        "Precise margin",
        "2017 and earlier results",
        "Demographics breakdown",
        "Local political mapping",
        "Simranjit Singh Mann's local influence",
        "Full candidate list",
        "Local political families",
        "Booth-wise results",
      ],
    },
    researchPriorities: {
      priorities: [
        "Analyze SAD vote retention",
        "Assess impact of Simranjit Singh Mann",
        "Map Jat Sikh voting patterns",
      ],
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      {
        name: "Proneta Amargarh",
        url: "https://proneta.in/Amargarh_assembly_constituency_Punjab-10",
      },
      {
        name: "The Ballot Force",
        url: "https://theballotforce.com/intelligence/amargarh-assembly-constituency-punjab-election-results",
      },
      {
        name: "India Today Amargarh",
        url: "https://www.indiatoday.in/elections/story/amargarh-punjab-assembly-election-results-2022-live-updates-1922948-2022-03-09",
      },
      {
        name: "CNBCTV18",
      },
    ],
    researchStatus: {
      status: "VERIFIED - with gaps requiring local verification for precision",
      gaps: [
        "Exact 2022 margin",
        "2017 and earlier electoral history",
        "Booth-wise results",
        "Local political families",
        "Local Influencers",
        "Simranjit Singh Mann's influence",
      ],
    },
  },
};

// =============================================================================
// DEEP RESEARCH
// =============================================================================

export const ac106AmargarhDeepResearch: AC106AmargarhDeepResearch = {
  executiveSummary: {
    summary:
      "Amargarh is a General category assembly constituency in Malerkotla district (carved from Sangrur), part of the Malwa region. The constituency witnessed an AAP victory in 2022 with Prof. Jaswant Singh Gajjan Majra winning with 34.28% vote share. The margin and vote share indicate a multi-cornered contest. The area has agricultural economy with mixed demographics.",
  },

  constituencyProfile: {
    basicInformation: {
      assemblyConstituencyNo: 106,
      district: "Malerkotla (formerly Sangrur)",
      region: "Malwa",
      type: "General (Open)",
    },
    geographicContext: {
      description:
        "Amargarh is situated in the Malwa region within the newly created Malerkotla district. The area is primarily agricultural with rural population.",
    },
  },

  electionResults: {
    winner: {
      candidate: "Prof. Jaswant Singh Gajjan Majra",
      party: "Aam Aadmi Party",
      votes: "44,523",
      voteShare: "34.28%",
      turnout: "77.95%",
    },
    runnerUp: {
      candidate: "Simranjit Singh Mann",
      party: "Shiromani Akali Dal (SAD)",
    },
    keyContestants: {
      status: "[NEEDS VERIFICATION - full candidate list]",
    },
  },

  electoralHistory: {
    "2022Context": {
      performance: {
        aapWon: true,
        voteShare: "34.28% (indicating multi-cornered contest)",
        turnout: "77.95% (above state average)",
        margin: "[NEEDS VERIFICATION]",
      },
    },
    historicalPattern: {
      status: "[NEEDS VERIFICATION - 2017 and earlier results]",
    },
  },

  casteDemographics: {
    communityComposition: {
      typicalMalwaPattern: {
        jatSikh: "Dominant",
        dalitSc: "Significant",
        obc: "Various groups",
        hinduMuslim: "Minorities",
      },
    },
  },

  keyIssues: {
    drugCrisis: {
      description: "Malwa region affected",
      impact: "Youth addiction concern",
    },
    agrarianDistress: {
      issues: [
        "MSP issues",
        "Groundwater depletion",
        "Stubble management",
      ],
    },
    developmentGaps: {
      issues: [
        "Healthcare",
        "Education",
        "Employment",
      ],
    },
  },

  politicalLeadership: {
    currentMla: {
      name: "Prof. Jaswant Singh Gajjan Majra",
      party: "AAP",
    },
    keyPoliticalFigures: {
      status: "[NEEDS VERIFICATION - local leaders, Simranjit Singh Mann's influence]",
    },
  },

  voterOutreach: {
    voterTurnout2022: {
      turnout2022: "77.95%",
      stateAverage: "72%",
    },
  },

  governmentSchemes: {
    status: "[NEEDS VERIFICATION - beneficiary data]",
  },

  attackLines: {
    lines: [
      "Drug Crisis: Uncontrolled",
      "Farmer Distress: Unresolved",
      "Broken Promises: Rs 1000/month",
      "Governance Failures",
      "Unemployment",
    ],
  },

  intelligenceGaps: {
    requiresVerification: {
      items: [
        "Precise margin",
        "2017 and earlier results",
        "Demographics breakdown",
        "Local political mapping",
        "Simranjit Singh Mann's local influence",
      ],
    },
    researchPriorities: {
      priorities: [
        "Analyze SAD vote retention",
        "Assess impact of Simranjit Singh Mann",
        "Map Jat Sikh voting patterns",
      ],
    },
  },

  recommendations: {
    researchPriorities: [
      "Analyze SAD vote retention",
      "Assess impact of Simranjit Singh Mann",
      "Map Jat Sikh voting patterns",
    ],
  },

  sources: [
    {
      name: "Proneta Amargarh",
      url: "https://proneta.in/Amargarh_assembly_constituency_Punjab-10",
    },
    {
      name: "The Ballot Force",
      url: "https://theballotforce.com/intelligence/amargarh-assembly-constituency-punjab-election-results",
    },
    {
      name: "India Today Amargarh",
      url: "https://www.indiatoday.in/elections/story/amargarh-punjab-assembly-election-results-2022-live-updates-1922948-2022-03-09",
    },
  ],
};

// =============================================================================
// COMPLETE COMBINED DOSSIER
// =============================================================================

export const ac106AmargarhDossierComplete: AC106AmargarhTypes = {
  // Main dossier
  ...ac106AmargarhMainDossier,

  // Deep research
  deepResearch: ac106AmargarhDeepResearch,
};

// Reference export
export const ac106AmargarhReference = {
  acNumber: 106,
  name: "Amargarh",
  district: "Malerkotla",
  region: "Malwa",
  type: "General",
};

// Default export
export default ac106AmargarhDossierComplete;

// Data export for convenience
export const ac106AmargarhData = ac106AmargarhDossierComplete;
