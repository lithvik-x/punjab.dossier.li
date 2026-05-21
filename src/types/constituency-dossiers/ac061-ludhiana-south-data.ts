/**
 * AC061-Ludhiana South Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC061-Ludhiana-South.md, AC061-LudhianaSouth-deep.md
 */

import type { AC061LudhianaSouthTypes } from './ac061-ludhiana-south-types';

export const ac061LudhianaSouthData: AC061LudhianaSouthTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 61,
    name: "Ludhiana South",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    date: "20 May 2026",
  },

  overview: {
    description:
      "Ludhiana South (AC 61) is a general category assembly constituency in Ludhiana district, part of the Malwa region of Punjab. It is located within Ludhiana Lok Sabha constituency.",
    location: "Urban Ludhiana constituency",
    character: "Urban, mixed caste",
  },

  profile: {
    acNo: "61",
    officialName: "Ludhiana South",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Ludhiana",
    character: "Urban, mixed caste",
    borderStatus: "Not border district",
  },

  // ==========================================================================
  // ELECTION HISTORY
  // ==========================================================================
  electionHistory: {
    result2022: {
      winner: "Rajinder Pal Kaur",
      party: "AAP",
      partyFull: "Aam Aadmi Party",
      votesReceived: "43,811",
      voteShare: "~35%",
      runnerUp: "Satinderpal Singh Tajpuri",
      runnerUpParty: "BJP",
      margin: "Significant margin (exact figure requires verification)",
      marginType: "SIGNIFICANT",
      turnout: "~65-70%",
      note: "Complex multi-party contest",
    },
    result2017: {
      winner: "Balvinder Singh Bains",
      party: "Lok Insaaf Party",
      votes: "53,955",
      note: "Seat was won by LIP before AAP wave",
    },
    result2012: {
      winner: "Please verify from ECI records",
      party: "Data requires verification",
      note: "Data requires verification",
      dataStatus: "NEEDS VERIFICATION",
    },
    historicalTrend:
      "2012: Data unclear | 2017: LIP Win (not Congress/AAP) | 2022: AAP Win (complex three-way) → Margin: NEEDS VERIFICATION",
  },

  marginAnalysis: {
    entries: [
      {
        year: "2022",
        winner: "AAP",
        margin: "Significant",
        runnerUpParty: "BJP",
      },
      {
        year: "2017",
        winner: "LIP",
        margin: "-",
        runnerUpParty: "Congress",
      },
    ],
  },

  // ==========================================================================
  // CASTE COMPOSITION
  // ==========================================================================
  casteComposition: {
    districtLevel: {
      scheduledCastes: "~25-28% of district population",
      upperCastes: "~35-40% (includes Khatri, Arora, Baniya, Brahmin, Jats)",
      obc: "~28-31%",
      muslim: "~1-2%",
      christian: "~1-2%",
    },
    keyCasteGroups: {
      groups: [
        "Jats: Major agrarian community",
        "Khatri/Arora: Business community, urban dominant",
        "Mazhabi/Ramdassia: SC community concentrated in rural areas",
        "Balmiki: SC community",
      ],
    },
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    totalElectors2022: "~1,60,000 - 1,80,000 (exact figure from ECI)",
    voterTurnoutTrend: [
      { year: "2022", turnout: "~65-70%" },
      { year: "2017", turnout: "~70-75%" },
    ],
    turnout2022: "~65-70%",
    turnout2017: "~70-75%",
  },

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: {
    issues: [
      {
        rank: 1,
        title: "Urban Development",
        description: "Infrastructure gaps in southern Ludhiana",
        details: [
          "Road and drainage issues",
          "Water supply interruptions",
        ],
      },
      {
        rank: 2,
        title: "Drug Trafficking",
        description: "Major corridor route through Ludhiana",
        details: [
          "Urban youth addiction",
          "Law and order concerns",
        ],
      },
      {
        rank: 3,
        title: "Industrial Pollution",
        description: "Factory emissions affecting residential areas",
        details: [
          "Environmental concerns",
          "Health impacts",
        ],
      },
      {
        rank: 4,
        title: "Water Table Depletion",
        description: "Agricultural and industrial water usage",
        details: [
          "Groundwater concerns",
          "Irrigation challenges",
        ],
      },
      {
        rank: 5,
        title: "Unemployment",
        description: "Limited formal sector jobs for youth",
      },
      {
        rank: 6,
        title: "Traffic Congestion",
        description: "Urban sprawl and road infrastructure",
      },
    ],
  },

  deepLocalIssues: {
    issues: [
      "Urban Development - Infrastructure gaps in southern Ludhiana",
      "Drug Trafficking - Major corridor route through Ludhiana",
      "Industrial Pollution - Factory emissions affecting residential areas",
      "Water Table Depletion - Agricultural and industrial water usage",
      "Unemployment - Limited formal sector jobs for youth",
      "Traffic Congestion - Urban sprawl and road infrastructure",
    ],
    priorityOrder: [
      "1. Urban Development",
      "2. Drug Trafficking",
      "3. Industrial Pollution",
      "4. Water Table Depletion",
      "5. Unemployment & Traffic",
    ],
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentStatus: {
      result2022: "Lost to AAP",
      result2017: "Did not win this seat (LIP won)",
      voteShare: "Estimated 25-30% in 2022",
    },
    keyChallenges: [
      "AAP has made deep inroads in urban Ludhiana",
      "Congress organization weakened after 2022 defeat",
      "Local leadership fragmentary",
      "Anti-incumbency against sitting MLA limited",
    ],
    opportunities: [
      "AAP government dissatisfaction (if any governance failures)",
      "Youth disillusionment with AAP's performance",
      "Potential consolidation of Hindu voters",
      "Dalit voter outreach if strong candidate fielded",
    ],
  },

  whyCongressCanWin: {
    factors: [
      "AAP government dissatisfaction (if any governance failures)",
      "Youth disillusionment with AAP's performance",
      "Potential consolidation of Hindu voters",
      "Dalit voter outreach if strong candidate fielded",
    ],
  },

  strategicRecommendations: {
    recommendations: [
      "Analyze BJP vote share to understand coalition potential",
      "Coalition building with anti-AAP voters",
      "Dalit voter outreach through Mazhabi, Ramdassia communities",
      "Urban middle class appeal",
    ],
  },

  // ==========================================================================
  // RECOMMENDED CANDIDATE PROFILE
  // ==========================================================================
  recommendedCandidateProfile: {
    idealCharacteristics: [
      "Young, educated, with local connect",
      "Business or professional class background",
      "Existing political family or new dynamic leader",
    ],
    table: [
      { attribute: "Caste", idealProfile: "Khatri/Arora or Jat Sikh preferred for this urban seat" },
      { attribute: "Profile", idealProfile: "Young, educated, with local connect" },
      { attribute: "Background", idealProfile: "Business or professional class" },
      { attribute: "Name Recognition", idealProfile: "Existing political family or new dynamic leader" },
      { attribute: "Age", idealProfile: "40-52 years" },
    ],
    candidateTypes: [
      "Young turks from Congress families",
      "Punjabi diaspora with return potential",
      "Professional/doctor/engineer with social work background",
    ],
  },

  // ==========================================================================
  // ATTACK LINES AGAINST AAP
  // ==========================================================================
  attackLines: {
    vulnerabilities: [
      {
        rank: 1,
        title: "Broken Promises",
        description: "AAP's unfulfilled guarantees",
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description: "Despite promises, drug problem persists",
      },
      {
        rank: 3,
        title: "Governance",
        description: "Law and order situation in city",
      },
      {
        rank: 4,
        title: "Employment",
        description: "No major job creation",
      },
      {
        rank: 5,
        title: "Development",
        description: "Infrastructure claims vs reality",
      },
    ],
    narratives: [
      "Congress understands Punjab's soil, AAP only understands Delhi's airconditioned offices",
      "Real development vs BJP's partner AAP",
      "Our youth deserve real jobs, not advertisements",
    ],
  },

  // ==========================================================================
  // AAP VULNERABILITY ANALYSIS
  // ==========================================================================
  aapVulnerabilityAnalysis: {
    whyVulnerable: [
      "Complex Mandate: Won with split votes",
      "BJP Strong: Second position shows Hindu consolidation",
      "Fragmented History: LIP won in 2017",
      "Urban Issues: Infrastructure failures",
    ],
    weakPoints: [
      {
        issue: "Urban Development",
        aapPromise: "Better infrastructure",
        currentStatus: "Declining",
        voterSentiment: "FRUSTRATED",
      },
      {
        issue: "Drug Crisis",
        aapPromise: "End trafficking",
        currentStatus: "Persisting",
        voterSentiment: "ANGRY",
      },
      {
        issue: "Employment",
        aapPromise: "Jobs",
        currentStatus: "Limited",
        voterSentiment: "DISAPPOINTED",
      },
      {
        issue: "Law & Order",
        aapPromise: "Security",
        currentStatus: "Concerns",
        voterSentiment: "WORRIED",
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
      mc: "Ludhiana Municipal Corporation",
      mla: "Rajinder Pal Kaur",
      mlaParty: "AAP",
      mlaTenure: "2022-present",
    },
    mlaPerformance: {
      name: "Rajinder Pal Kaur",
      party: "AAP",
      assessment: "Won in complex three-way contest",
      performanceNote: "Mixed mandate - Performance: NEEDS VERIFICATION",
    },
  },

  // ==========================================================================
  // INFLUENCERS & POWER STRUCTURE
  // ==========================================================================
  influencersPowerStructure: {
    politicalInfluencers: [
      {
        name: "Rajinder Pal Kaur (AAP MLA)",
        party: "AAP",
        position: "Current MLA",
        influence: "Won in 2022",
        details: [
          "Complex mandate",
          "Multiple party competition",
        ],
      },
      {
        name: "BJP Leaders",
        party: "BJP",
        position: "Opposition",
        influence: "Strong second position in 2022",
        details: [
          "Hindu voter base",
          "Growing influence",
        ],
      },
      {
        name: "Congress Leaders",
        party: "INC",
        position: "Third position",
        influence: "Organizational base",
        details: [
          "Looking for revival",
          "Organizational strengthening needed",
        ],
      },
    ],
  },

  // ==========================================================================
  // VOTE SHARE ANALYSIS
  // ==========================================================================
  voteShareAnalysis: {
    results2022: [
      { party: "AAP", sharePercentage: "~35%", votesEstimate: "~55,000" },
      { party: "BJP", sharePercentage: "~25%", votesEstimate: "~40,000" },
      { party: "INC", sharePercentage: "~25-30%", votesEstimate: "~40,000" },
      { party: "LIP", sharePercentage: "~5%", votesEstimate: "~8,000" },
      { party: "Others", sharePercentage: "~10%", votesEstimate: "~15,000" },
    ],
    gapAnalysis: {
      position2022: "Third position",
      need: "Consolidate anti-AAP votes",
      combinedAntiAAP: "BJP+INC+SAD: ~55-60% combined",
    },
    projection2027: {
      tier: "TIER 3 - CHALLENGING",
      tierLevel: "CHALLENGING",
      description:
        "Complex multi-party seat - Coalition required - Long-term organization building",
      requirements: [
        "Coalition building",
        "Strong candidate selection",
        "Organizational revival",
      ],
    },
    priorityRanking: [
      "TIER 3 - CHALLENGING: AC061 Ludhiana South: Third position",
      "AC060 Ludhiana East: Second position",
      "AC059 Sahnewal: 15,193 margin (BETTER)",
    ],
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congressStrategy: {
      currentPosition: "Third position in 2022",
      challenge: "Recovering from third place",
      opportunity: "BJP vs AAP split possible",
      coalitionBuilding: {
        phase: "Phase 1",
        duration: "6-12 months",
        strategies: [
          "Anti-AAP Voter Coalition",
          "Attract BJP+Congress+SAD voters",
          "United against AAP",
          "Common minimum program",
        ],
      },
      dalitVoterOutreach: {
        target: "SC vote bank",
        communities: ["Mazhabi", "Ramdassia", "Balmiki"],
      },
      candidateSelection: {
        caste: "Khatri/Arora or Jat Sikh preferred",
        profile: "Young, educated, local connect",
        background: "Business, professional, young turks",
        nameRecognition: "Congress family or new leader",
        age: "40-52 years",
      },
    },
    phase1Timeline: "6-12 months",
    priorityApproach: [
      "Analyze BJP vote share",
      "Coalition building",
      "Dalit voter outreach",
      "Urban middle class appeal",
    ],
  },

  // ==========================================================================
  // DEEP RESEARCH
  // ==========================================================================
  deepResearch: {
    executiveSummary: {
      overview:
        "Ludhiana South (AC061) is a General category assembly constituency in Ludhiana district, Malwa region of Punjab. AAP won this seat in 2022 with Rajinder Pal Kaur. The seat was previously won by Lok Insaaf Party (LIP) in 2017, indicating a fragmented political history. The urban constituency with mixed caste composition presents challenges for Congress but also opportunities for coalition building.",
      winner: "Rajinder Pal Kaur (AAP)",
      margin: "Significant (exact figure requires verification)",
      congressOpportunity:
        "Third position - Requires organizational revival and coalition building",
      seatHistory:
        "Fragmented history - LIP won in 2017, AAP in 2022 - no consistent winner",
    },

    constituencyIdentity: {
      acNo: "61",
      officialName: "Ludhiana South",
      district: "Ludhiana",
      region: "Malwa",
      category: "General",
      lokSabhaSeat: "Ludhiana",
      character: "Urban, mixed caste",
      borderStatus: "Not border district",
    },

    geographicProfile: {
      description: "Urban Ludhiana constituency",
      characteristics: [
        "Mixed residential areas",
        "Commercial pockets",
        "Industrial presence",
      ],
    },

    electoralHistory: {
      election2022: {
        candidate: "Rajinder Pal Kaur",
        party: "AAP",
        votes: "43,811",
        voteShare: "~35%",
        margin: "TBD",
      },
      election2017: {
        winner: "Balvinder Singh Bains",
        party: "LIP",
        pattern: "LIP won, not Congress or AAP",
      },
      election2012: {
        winner: "DATA NEEDS VERIFICATION",
        dataStatus: "NEEDS VERIFICATION",
        pattern: "Fragmented history",
      },
      historicalTrend:
        "2012: Data unclear | 2017: LIP Win | 2022: AAP Win → Margin: NEEDS VERIFICATION",
    },

    demographics: {
      populationComposition: [
        { category: "SC", estimatedPercentage: "25-28%", notes: "District average" },
        { category: "Upper Castes", estimatedPercentage: "35-40%", notes: "Khatri, Arora, Baniya, Brahmin, Jats" },
        { category: "OBC", estimatedPercentage: "28-31%", notes: "Significant" },
        { category: "Muslim", estimatedPercentage: "1-2%", notes: "Small minority" },
        { category: "Christian", estimatedPercentage: "1-2%", notes: "Small minority" },
      ],
      keyCommunities: [
        "Jats: Major agrarian community",
        "Khatri/Arora: Business community",
        "SC communities: Mazhabi, Ramdassia",
        "Balmiki: SC community",
      ],
    },

    voterEcosystem: {
      electorateData: [
        { metric: "Total Electors", value: "~1,60,000-1,80,000" },
        { metric: "Voter Turnout", value: "~65-70%" },
      ],
      turnoutTrend: [
        { year: "2022", turnoutPercentage: "~65-70%", notes: "Moderate" },
        { year: "2017", turnoutPercentage: "~70-75%", notes: "Consistent" },
      ],
    },

    localIssues: {
      topIssues: [
        {
          rank: 1,
          title: "Urban Development",
          description: "Infrastructure gaps in southern Ludhiana",
          subIssues: ["Road and drainage issues", "Water supply interruptions"],
        },
        {
          rank: 2,
          title: "Drug Trafficking",
          description: "Major corridor route through Ludhiana",
          subIssues: ["Urban youth addiction", "Law and order concerns"],
        },
        {
          rank: 3,
          title: "Industrial Pollution",
          description: "Factory emissions",
          subIssues: ["Environmental concerns", "Health impacts"],
        },
        {
          rank: 4,
          title: "Water Table Depletion",
          description: "Agricultural and industrial usage",
          subIssues: ["Groundwater concerns", "Irrigation challenges"],
        },
        {
          rank: 5,
          title: "Unemployment & Traffic",
          description: "Limited formal sector jobs",
          subIssues: ["Urban sprawl issues", "Traffic congestion"],
        },
      ],
    },

    governanceAudit: {
      administrativeStructure: {
        district: "Ludhiana",
        dc: "Ludhiana District Collector",
        mc: "Ludhiana Municipal Corporation",
        mla: "Rajinder Pal Kaur",
        mlaParty: "AAP",
        mlaTenure: "2022-present",
      },
      mlaPerformance: {
        name: "Rajinder Pal Kaur",
        party: "AAP",
        assessment: "Won in complex three-way contest",
        performanceNote: "Mixed mandate - Performance: NEEDS VERIFICATION",
      },
    },

    influencersPowerStructure: {
      politicalInfluencers: [
        {
          name: "Rajinder Pal Kaur",
          party: "AAP",
          position: "Current MLA",
          influence: "",
          details: ["Won in 2022", "Complex mandate", "Multiple party competition"],
        },
        {
          name: "BJP Leaders",
          party: "BJP",
          position: "Opposition",
          influence: "",
          details: ["Strong second position in 2022", "Hindu voter base", "Growing influence"],
        },
        {
          name: "Congress Leaders",
          party: "INC",
          position: "Third position",
          influence: "",
          details: ["Organizational base", "Looking for revival"],
        },
      ],
    },

    aapVulnerabilityAnalysis: {
      whyVulnerable: [
        "Complex Mandate: Won with split votes",
        "BJP Strong: Second position shows Hindu consolidation",
        "Fragmented History: LIP won in 2017",
        "Urban Issues: Infrastructure failures",
      ],
      weakPoints: [
        {
          issue: "Urban Development",
          aapPromise: "Better infrastructure",
          currentStatus: "Declining",
          voterSentiment: "FRUSTRATED",
        },
        {
          issue: "Drug Crisis",
          aapPromise: "End trafficking",
          currentStatus: "Persisting",
          voterSentiment: "ANGRY",
        },
        {
          issue: "Employment",
          aapPromise: "Jobs",
          currentStatus: "Limited",
          voterSentiment: "DISAPPOINTED",
        },
        {
          issue: "Law & Order",
          aapPromise: "Security",
          currentStatus: "Concerns",
          voterSentiment: "WORRIED",
        },
      ],
    },

    congressStrategicBlueprint: {
      currentPosition: "Third position in 2022",
      challenge: "Recovering from third place",
      opportunity: "BJP vs AAP split possible",
      coalitionBuilding: {
        phase: "Phase 1",
        duration: "6-12 months",
        strategies: [
          "Anti-AAP Voter Coalition",
          "Attract BJP+Congress+SAD voters",
          "United against AAP",
          "Common minimum program",
        ],
      },
      dalitVoterOutreach: {
        target: "SC vote bank",
        communities: ["Mazhabi", "Ramdassia", "Balmiki"],
      },
      candidateSelection: {
        caste: "Khatri/Arora or Jat Sikh preferred",
        profile: "Young, educated, local connect",
        background: "Business, professional, young turks",
        nameRecognition: "Congress family or new leader",
        age: "40-52 years",
      },
    },

    candidateRecommendation: {
      caste: "Khatri/Arora or Jat Sikh preferred",
      profile: "Young, educated, with local connect",
      background: "Business or professional class",
      nameRecognition: "Existing political family or new dynamic leader",
    },

    voteShareAnalysis: {
      results2022: [
        { party: "AAP", sharePercentage: "~35%", votesEstimate: "~55,000" },
        { party: "BJP", sharePercentage: "~25%", votesEstimate: "~40,000" },
        { party: "INC", sharePercentage: "~25-30%", votesEstimate: "~40,000" },
        { party: "LIP", sharePercentage: "~5%", votesEstimate: "~8,000" },
        { party: "Others", sharePercentage: "~10%", votesEstimate: "~15,000" },
      ],
      gapAnalysis: {
        position2022: "Third position",
        need: "Consolidate anti-AAP votes",
        combinedAntiAAP: "BJP+INC+SAD: ~55-60% combined",
      },
      projection2027: {
        tier: "TIER 3 - CHALLENGING",
        tierLevel: "CHALLENGING",
        description:
          "Complex multi-party seat - Coalition required - Long-term organization building",
        requirements: [
          "Coalition building",
          "Strong candidate selection",
          "Organizational revival",
        ],
      },
      priorityRanking: [
        "TIER 3 - CHALLENGING: AC061 Ludhiana South: Third position",
        "AC060 Ludhiana East: Second position",
        "AC059 Sahnewal: 15,193 margin (BETTER)",
      ],
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: ["News18", "OneIndia", "IndiaVotes", "minimax-web-search"],
    compiledDate: "20 May 2026",
    verificationStatus: {
      status: "PARTIALLY VERIFIED",
      notes: [
        "Main dossier partially verified",
        "Deep research partially verified - some data points need verification",
        "Margin figures require verification from ECI records",
        "2012 election data needs verification",
      ],
    },
    dataCurrency: "As of 20 May 2026",
  },
};

export type { AC061LudhianaSouthDossier } from './ac061-ludhiana-south-types';
