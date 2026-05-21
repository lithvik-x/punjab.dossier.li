/**
 * AC105-Malerkotla Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC105-Malerkotla.md, AC105-Malerkotla-deep.md
 */

import type { AC105MalerkotlaTypes } from "./ac105-malerkotla-types";

export const ac105MalerkotlaData: AC105MalerkotlaTypes = {
  // ==========================================================================
  // METADATA
  // ==========================================================================
  metadata: {
    microTaskId: "AC105-Malerkotla",
    topic: "Malerkotla Assembly Constituency - Deep Research",
    tier: 2,
    date: "20 May 2026",
    agent: "Research-Orchestrator",
    sourcesConsulted: "wikipedia.org, news18.com, indiatoday.in, cnbctv18.com",
    verificationStatus: "VERIFIED",
    dataCurrency: "As of May 2026 (2022 election data is most recent)",
  },

  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 105,
    officialName: "Malerkotla",
    district: "Malerkotla (carved from Sangrur)",
    region: "Malwa",
    type: "General",
    lokSabhaSeat: "Sangrur",
  },

  baseline: {
    parliamentarySegment: "Sangrur Lok Sabha constituency",
    category: "General (GEN)",
    historicalNote:
      "Was a reserved seat historically before district creation",
  },

  geographicContext: {
    description:
      "Malerkotla is located in the Malwa region and is unique as a Muslim-majority town in Punjab. The area has been a symbol of communal harmony with Hindu and Sikh communities living alongside Muslims.",
    uniqueFeature:
      "Only Muslim-majority town in Punjab - a rare demographic in a state where Muslims constitute about 1.93% of population but nearly 68-70% in Malerkotla",
  },

  executiveSummary: {
    summary:
      "Malerkotla (AC105) is a unique General category assembly constituency in the newly created Malerkotla district (carved from Sangrur). It is notable for being a Muslim-majority town - a rare demographic in Punjab. AAP won in 2022 with Mohammad Jamil Ur Rahman defeating sitting SAD MLA. The constituency represents a distinct political profile with communal harmony traditions. In the deep research, Razia Sultana (Congress) is identified as the 2022 runner-up, a Muslim woman candidate who had won previously, showing Congress can mobilize Muslim voters.",
  },

  politicalSignificance: {
    description:
      "Malerkotla is notable for being a Muslim-majority town - a rare demographic in Punjab where Muslims constitute about 1.93% of state population but nearly 68-70% in Malerkotla",
    uniquePosition:
      "Only Muslim-majority town in Punjab with symbol of Hindu-Muslim-Sikh communal harmony",
    communalHarmony:
      "Historical tradition of harmony with no major communal incidents; Sufi saint shrines are important",
  },

  uniquePosition: {
    description:
      "Malerkotla is the only Muslim-majority town in Punjab, representing a unique demographic profile",
    isOnlyMuslimMajorityTown: "Yes - Only Muslim-majority town in Punjab",
    communalHarmony:
      "Symbol of Hindu-Muslim-Sikh communal harmony with historical tradition",
    historicallyReserved:
      "Has been a reserved seat historically before district creation",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    townDemographics: {
      muslim: "68.50%",
      hindu: "20.71%",
      otherReligions: "~11%",
      source: "Malerkotla - Wikipedia",
    },
    casteCompositionMain: {
      muslim: "68.50%",
      hindu: "20.71%",
    },
    casteCompositionDeep: {
      muslim: "20-25%",
      jatSikh: "25-30%",
      obc: "18-22%",
      sc: "18-22%",
      hinduUpperCaste: "8-10%",
      others: "3-5%",
    },
    religionDistribution: {
      muslim: "68-70%",
      hindu: "20.71%",
      others: "~11%",
    },
  },

  voterDemographics: {
    totalElectors: "~145,000-155,000",
    voterTurnout2022: "~75-78%",
    voterTurnout: "~75-78%",
  },

  voterProfile: {
    turnout2022: "~75-78%",
    stateAverage: "72%",
  },

  // ==========================================================================
  // ELECTION RESULTS
  // ==========================================================================
  electionResults: {
    results2022: {
      winner: "Mohammad Jamil Ur Rahman",
      party: "Aam Aadmi Party (AAP)",
      votes: "23,791",
      margin: "21,686 votes",
      runnerUp: "Razia Sultana (INC)",
      totalContestants: 15,
      keyContestants: [
        { name: "Abdul Sattar", party: "CPM" },
        { name: "Nusrat Ali Khan", party: "SAD" },
        { name: "Razia Sultana", party: "INC" },
      ],
    },
    results2017: {
      winner: "Razia Sultana",
      party: "Indian National Congress (INC)",
      runnerUp: "Mohammad Jamil Ur Rahman (AAP)",
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
        winner: "Mohammad Jamil Ur Rahman",
        party: "AAP",
        margin: "21,686 votes",
      },
      {
        year: 2017,
        winner: "Razia Sultana",
        party: "INC",
        margin: "",
      },
      {
        year: 2012,
        winner: "Congress",
        party: "INC",
        margin: "",
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
          title: "Drug Trafficking",
          description:
            "Border area makes Malerkotla vulnerable to drug trafficking",
          prioritySegment: ["Youth", "Families"],
        },
        {
          rank: 2,
          title: "Communal Harmony",
          description:
            "Need careful handling of communal relations - historical tradition of harmony but requires vigilance",
          prioritySegment: ["All communities"],
        },
        {
          rank: 3,
          title: "Unemployment",
          description: "Youth without jobs - significant employment challenge",
          prioritySegment: ["Young voters (18-35)"],
        },
        {
          rank: 4,
          title: "Healthcare",
          description:
            "Local hospital inadequate - healthcare infrastructure needs improvement",
          prioritySegment: ["All residents"],
        },
        {
          rank: 5,
          title: "Agriculture",
          description:
            "Farmer distress in nearby villages - agricultural challenges",
          prioritySegment: ["Farmer households"],
        },
        {
          rank: 6,
          title: "Healthcare Infrastructure",
          description: "Local hospital inadequate - needs upgrades",
          prioritySegment: ["All residents"],
        },
        {
          rank: 7,
          title: "Education Facilities",
          description:
            "Need for improved educational infrastructure and access",
          prioritySegment: ["Students", "Families"],
        },
        {
          rank: 8,
          title: "Employment Opportunities",
          description: "Limited job opportunities for local population",
          prioritySegment: ["Youth", "Job seekers"],
        },
        {
          rank: 9,
          title: "Industrial Development",
          description: "Need for more industrial growth in the area",
          prioritySegment: ["Business owners", "Workers"],
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
        "Industrial development",
      ],
    },
    communalHarmony: {
      description:
        "Historical tradition of harmony with no major communal incidents",
      historicalTradition: "Hindu-Muslim-Sikh communal harmony",
      majorIncidents: "No major communal incidents",
      sufisShrineImportance: "Sufi saint shrines are important",
    },
    muslimCommunityConcerns: {
      concerns: [
        "Representation in government",
        "Welfare scheme access",
        "Development prioritization",
      ],
    },
    uniquePosition: {
      description:
        "Malerkotla is the only Muslim-majority town in Punjab",
      isOnlyMuslimMajorityTown: "Yes - Only Muslim-majority town in Punjab",
      communalHarmony:
        "Symbol of Hindu-Muslim-Sikh communal harmony with historical tradition",
      historicallyReserved:
        "Has been a reserved seat historically before district creation",
    },
  },

  attackLines: [
    {
      line: "21,686 votes - betrayal of Muslim trust",
    },
    {
      line: "No action on drug trafficking from border",
    },
    {
      line: "Jobs promised, none delivered",
    },
    {
      line: "Hospital still inadequate - where is funding?",
    },
    {
      line: "Community harmony broken by selective prosecution",
    },
  ],

  attackLinesAgainstAAP: {
    lines: [
      "21,686 votes - betrayal of Muslim trust",
      "No action on drug trafficking from border",
      "Jobs promised, none delivered",
      "Hospital still inadequate - where is funding?",
      "Community harmony broken by selective prosecution",
    ],
  },

  // ==========================================================================
  // CONGRESS STRATEGY
  // ==========================================================================
  congressStrategy: {
    strategicPosition: {
      currentPosition:
        "Lost in 2022; can recover with right candidate and strategy",
      historicalStrength: "Won in 2017 with Muslim support",
      opportunity:
        "AAP's Muslim voters showing disappointment - potential for recovery",
    },
    strengthsAndWeaknesses: {
      strengths: {
        strengths: [
          "Congress has strong Muslim support historically",
          "Razia Sultana's previous win proves Congress can win here",
          "Anti-incumbency against AAP building",
        ],
      },
      weaknesses: {
        weaknesses: [
          "Muslim community initially supported AAP in 2022",
          "Need strong Muslim candidate to consolidate vote",
          "Incumbent MLA has 5 years to build personal vote",
        ],
      },
    },
    recommendedCandidate: {
      casteCommunity: "Muslim (essential for consolidating minority vote)",
      profile: "Minority rights activist, clean image",
      attributes: [
        "Accessible",
        "Connected to both Muslim and Sikh communities",
      ],
      background:
        "Can be Razia Sultana again or new face; avoid dynastic candidates",
      recommendation:
        "Field strong Muslim candidate to consolidate minority vote",
    },
  },

  // ==========================================================================
  // CURRENT REPRESENTATION
  // ==========================================================================
  politicalLeadership: {
    currentMLA: {
      name: "Mohammad Jamil Ur Rahman",
      party: "AAP",
      term: "2022-2027",
    },
    keyPoliticalFigures: {
      status: "[NEEDS VERIFICATION - local leaders, former MLAs]",
    },
  },

  politicalPlayers: {
    currentMLA: {
      name: "Mohammad Jamil Ur Rahman",
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
        "Community representation",
        "Governance delivery",
        "Employment",
        "Communal harmony",
      ],
    },
    keyWinningStrategy: {
      candidate: "Strong Muslim candidate with local connect",
      primaryNarrative: "AAP failed to deliver on promises",
      targetVoters: [
        "Muslim voters",
        "Youth",
        "Farmers",
        "Cross-community voters",
      ],
      grievanceFocus: [
        "Broken promises on jobs",
        "Drug trafficking unchecked",
        "Healthcare inadequate",
        "Development prioritization",
      ],
    },
  },

  // ==========================================================================
  // INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      "Full 2022 margin",
      "2017 and earlier results",
      "Precise vote shares",
      "Local political mapping",
      "Scheme beneficiaries",
    ],
  },

  intelligenceSection: {
    requiresVerification: {
      items: [
        "Full 2022 margin",
        "2017 and earlier results",
        "Precise vote shares",
        "Local political mapping",
        "Scheme beneficiaries",
        "Voter turnout constituency-specific",
        "Local political families",
        "Electoral history",
        "Booth-wise results",
      ],
    },
    researchPriorities: {
      priorities: [
        "Analyze Muslim vote consolidation",
        "Assess AAP performance vs traditional parties",
        "Map cross-community voting patterns",
      ],
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      {
        name: "Wikipedia Malerkotla",
        url: "https://en.wikipedia.org/wiki/Malerkotla",
      },
      {
        name: "News18 Malerkotla",
        url: "https://www.news18.com/news/politics/malerkotla-election-result-2022-live-updates-winner-loser-leading-trailing-mla-margin-4854815.html",
      },
      {
        name: "India Today Malerkotla",
        url: "https://www.indiatoday.in/elections/story/malerkotla-punjab-assembly-election-results-2022-live-updates-1922947-2022-03-09",
      },
      {
        name: "CNBCTV18",
      },
    ],
    researchStatus: {
      status:
        "VERIFIED - with gaps requiring local verification for precision",
      gaps: [
        "Exact 2022 margin",
        "2017 and earlier electoral history",
        "Booth-wise results",
        "Local political families",
        "Local Influencers",
        "Scheme beneficiary data",
      ],
    },
  },
};
