/**
 * AC063-Ludhiana Central Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC063-Ludhiana-Central.md, AC063-LudhianaCentral-deep.md
 */

import type { AC063LudhianaCentralTypes } from "./ac063-ludhiana-central-types";

export const ac063LudhianaCentralData: AC063LudhianaCentralTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 63,
    name: "Ludhiana Central",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    date: "20 May 2026",
    lokSabhaSeat: "Ludhiana",
    areaCharacter: "Urban core, old city, commercial",
    borderStatus: "Not border district",
  },

  geographicProfile: {
    urbanCore: "Urban core of Ludhiana",
    oldCityArea: "Old city area with narrow streets",
    denseCommercialZones: "Dense commercial zones",
    wholesaleMarkets: "Wholesale markets",
    residentialCumCommercial: "Residential-cum-commercial areas",
  },

  overview: {
    summary:
      "Ludhiana Central (AC 63) is a general category assembly constituency in Ludhiana district, Malwa region. It represents the urban core of Ludhiana city and has historically seen strong competition between Congress, BJP, and now AAP.",
    historicalCompetition: "Congress, BJP, and AAP",
    currentHolder: "Ashok 'Pappi' Parashar",
    party: "AAP",
  },

  historicalContext: {
    "2017Winner": "Surinder Kumar Dawar (Congress)",
    "2017Votes": "47,871",
    "2012Pattern": "Congress hold",
  },

  // ==========================================================================
  // ELECTION RESULTS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Ashok 'Pappi' Parashar",
      party: "AAP",
      margin: "Defeated Congress candidate",
      keyContestants: "Multiple candidates including BJP, LIP",
      totalElectors: "~1,80,000+",
      voterTurnout: "~65-70%",
      votesPolled: "TBD",
      voteShare: "~40%",
    },
    results2017: {
      winner: "Surinder Kumar Dawar",
      party: "Congress",
      votes: "47,871",
    },
    results2012: {
      winner: "Congress hold",
      party: "INC",
      pattern: "Congress hold",
    },
    turnoutPattern: "Consistent 65-70% in recent elections",
    historicalTrend: "2012: INC Win, 2017: INC Win (47,871 votes), 2022: AAP Win",
  },

  voteShareAnalysis: {
    "2022Breakdown": [
      { party: "AAP", estimatedShare: "~40%", estimatedVotes: "~65,000" },
      { party: "INC", estimatedShare: "~30%", estimatedVotes: "~49,000" },
      { party: "BJP", estimatedShare: "~15%", estimatedVotes: "~24,000" },
      { party: "LIP", estimatedShare: "~8%", estimatedVotes: "~13,000" },
      { party: "Others", estimatedShare: "~7%", estimatedVotes: "~11,000" },
    ],
    margin: "NEEDS VERIFICATION",
    congressGap: "Congress won in 2017 with 47,871",
    recoveryPotential: "Recovery possible with right candidate",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  casteComposition: {
    categories: [
      {
        name: "Brahmin",
        concentration: "Significant population in old city",
      },
      {
        name: "Khatri/Arora",
        concentration: "Business families concentrated",
        notes: "Trading communities",
      },
      {
        name: "Baniya",
        concentration: "Trading community",
      },
      {
        name: "SC",
        percentage: "20-25%",
        concentration: "Urban core, slum areas",
        notes: "Mazhabi, Ramdassia in slum areas",
      },
      {
        name: "Muslim",
        concentration: "Notable population in old city pockets",
      },
    ],
    totalSCPercentage: "~20-25% in urban core",
    keyCommunities: [
      "Trading communities: Khatri, Arora, Baniya",
      "Professional class: Brahmins, Khatris",
      "SC communities: Mazhabi, Ramdassia in slum areas",
      "Old city families: Political dynasties",
    ],
  },

  voterDemographics: {
    urbanDensity: "High voter density in old city areas",
    voterDensity: "Dense population",
    residentialCommercial:
      "Mix of residential and commercial areas",
  },

  demographicDeepDive: {
    populationComposition: [
      {
        category: "Brahmin",
        estimatedPercentage: "Significant",
        notes: "Old city concentration",
      },
      {
        category: "Khatri/Arora",
        estimatedPercentage: "Significant",
        notes: "Business families",
      },
      {
        category: "Baniya",
        estimatedPercentage: "Present",
        notes: "Trading community",
      },
      {
        category: "SC",
        estimatedPercentage: "20-25%",
        notes: "Urban SC in slum areas",
      },
      {
        category: "Muslim",
        estimatedPercentage: "Notable",
        notes: "Old city pockets",
      },
    ],
    keyCommunities: [
      "Trading communities: Khatri, Arora, Baniya",
      "Professional class: Brahmins, Khatris",
      "SC communities: Mazhabi, Ramdassia in slum areas",
    ],
    oldCityFamilies: "Political dynasties",
  },

  // ==========================================================================
  // VOTER ECOSYSTEM
  // ==========================================================================
  voterEcosystem: {
    electorateData: {
      totalElectors: "~1,80,000+",
      voterTurnout: "~65-70%",
    },
    turnoutTrend: [
      {
        year: 2022,
        turnoutPercentage: "~65-70%",
        notes: "Moderate urban",
      },
      {
        year: 2017,
        turnoutPercentage: "~70%",
        notes: "Consistent",
      },
    ],
  },

  // ==========================================================================
  // LOCAL ISSUES
  // ==========================================================================
  localIssues: {
    topIssues: [
      {
        rank: 1,
        title: "Old City Development",
        subIssues: [
          "Encroachment issues",
          "Narrow streets",
          "Drainage problems",
          "Heritage preservation",
        ],
        priority: "HIGH",
      },
      {
        rank: 2,
        title: "Commercial Activity",
        subIssues: [
          "Wholesale market issues",
          "Unemployment in markets",
          "GST impact on traders",
          "Shopkeeper concerns",
        ],
        priority: "HIGH",
      },
      {
        rank: 3,
        title: "Infrastructure",
        subIssues: [
          "Aging water/sewerage",
          "Traffic congestion in markets",
          "Power supply",
          "Street lighting",
        ],
        priority: "MEDIUM",
      },
      {
        rank: 4,
        title: "Law & Order",
        subIssues: [
          "Crime in city areas",
          "Women's safety",
          "Commercial fraud",
        ],
        priority: "MEDIUM",
      },
      {
        rank: 5,
        title: "Heritage & Pollution",
        subIssues: [
          "River pollution concerns",
          "Urban heritage sites",
          "Environmental regulations",
        ],
        priority: "LOW",
      },
      {
        rank: 6,
        title: "Traffic Management",
        subIssues: ["Market area congestion"],
        priority: "MEDIUM",
      },
    ],
    governanceIssues: [
      "Water/Sewerage: Aging infrastructure",
      "Pollution: River/Beas pollution concerns",
    ],
  },

  issueTaxonomy: [
    {
      category: "Infrastructure",
      issues: [
        {
          rank: 1,
          title: "Old City Development",
          subIssues: [
            "Encroachment",
            "Narrow streets",
            "Drainage",
          ],
          priority: "HIGH",
        },
      ],
    },
    {
      category: "Commercial",
      issues: [
        {
          rank: 2,
          title: "Commercial Activity",
          subIssues: [
            "Wholesale markets",
            "Unemployment",
          ],
          priority: "HIGH",
        },
      ],
    },
    {
      category: "Heritage",
      issues: [
        {
          rank: 3,
          title: "Heritage Conservation",
          subIssues: ["Old Ludhiana preservation"],
          priority: "MEDIUM",
        },
      ],
    },
    {
      category: "Environment",
      issues: [
        {
          rank: 4,
          title: "Water/Sewerage",
          subIssues: ["Aging infrastructure"],
          priority: "MEDIUM",
        },
      ],
    },
    {
      category: "Traffic",
      issues: [
        {
          rank: 5,
          title: "Traffic Management",
          subIssues: ["Market area congestion"],
          priority: "MEDIUM",
        },
      ],
    },
    {
      category: "Pollution",
      issues: [
        {
          rank: 6,
          title: "Pollution",
          subIssues: ["River/Beas pollution concerns"],
          priority: "LOW",
        },
      ],
    },
  ],

  // ==========================================================================
  // GOVERNANCE
  // ==========================================================================
  governanceAudit: {
    administrativeStructure: {
      district: "Ludhiana",
      dc: "Ludhiana District Collector",
      mc: "Ludhiana Municipal Corporation",
      mla: "Ashok 'Pappi' Parashar",
      mlaParty: "AAP",
      mlaTerm: "2022-present",
    },
    mlaAssessment: {
      name: "Ashok 'Pappi' Parashar",
      strengths: "Old city name recognition, Pappi nickname recognition, Trading community connect",
      performance: "MODERATE",
      party: "AAP",
    },
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalInfluencers: [
      {
        name: "Ashok 'Pappi' Parashar (AAP MLA)",
        role: "Current MLA",
        description: "Old city family, Pappi nickname recognition, Trading community connect",
        influence: "High - incumbent",
      },
      {
        name: "Surinder Kumar Dawar",
        role: "Congress Leader (2017 winner)",
        description: "Still has local influence, Old city family network",
        influence: "Moderate - former winner",
      },
    ],
    marketAssociations: [
      {
        name: "Market Trader Associations",
        concerns: ["GST concerns", "Commercial voter issues"],
        influence: "Significant",
      },
    ],
    oldCityFamilyNetwork:
      "Traditional voter networks, Community leaders influence voting",
  },

  // ==========================================================================
  // AAP VULNERABILITY
  // ==========================================================================
  aapVulnerability: {
    vulnerabilities: [
      "Urban Decay: Broken roads, waterlogging",
      "Market Struggles: Traders' concerns ignored",
      "Congress History: Old city families",
      "Law & Order: Crime concerns",
    ],
    weakPoints: [
      {
        issue: "Urban dev",
        aapPromise: "Fix old city",
        currentStatus: "Neglected",
        voterSentiment: "FRUSTRATED",
      },
      {
        issue: "Market issues",
        aapPromise: "Trader support",
        currentStatus: "GST burden",
        voterSentiment: "ANGRY",
      },
      {
        issue: "Law & order",
        aapPromise: "Safety",
        currentStatus: "Concerns",
        voterSentiment: "WORRIED",
      },
      {
        issue: "Heritage",
        aapPromise: "Preservation",
        currentStatus: "Neglected",
        voterSentiment: "DISAPPOINTED",
      },
    ],
  },

  // ==========================================================================
  // CONGRESS STRATEGY
  // ==========================================================================
  congressBlueprint: {
    phases: [
      {
        phase: "Phase 1: Old City Coalition",
        timeline: "6-12 months",
        activities: [
          "Trading Community Outreach: GST impact concerns, Market association connect, Commercial voter issues",
          "Old City Family Network: Pappi's family vs Congress families, Traditional voter networks, Community leaders",
          "Candidate Selection: Old Ludhiana family, Market/trading background, Khatri/Arora/Brahmin, Age: 45-55 years",
        ],
      },
    ],
    candidateSelection: {
      idealCaste: "Khatri/Arora or Brahmin",
      background: "Old Ludhiana family with market connect",
      ageRange: "45-55 years",
      profile: "Business or professional",
      nameRecognition: "Family's historical association with seat",
      networkRequirement: "Booth-level workers essential",
      priorityCriteria: [
        "Family's historical association with seat",
        "Ability to mobilize urban voters",
        "Connect with trading/business community",
      ],
    },
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    congressStrategy: {
      currentStatus: {
        "2022Result": "Lost to AAP",
        "2017Result": "Won under Congress",
        pattern: "Congress lost this seat to AAP wave",
      },
      challenges: {
        challenges: [
          "Breaking through AAP's urban vote share",
          "Reconciling with potential LIP/BJP voters",
          "Booth-level organization in dense urban area",
          "Need strong candidate with old city connect",
        ],
      },
      opportunities: {
        opportunities: [
          "AAP's urban governance failures",
          "Congress's historical connection",
          "Hindu voter consolidation possible",
          "Anti-incumbency against current MLA",
        ],
      },
    },
    recommendedCandidate: {
      profile: {
        idealCaste: "Khatri/Arora or Brahmin",
        background: "Old Ludhiana family with market connect",
        ageRange: "45-55 years",
        profile: "Business or professional",
        nameRecognition: "Family's historical association with seat",
        networkRequirement: "Booth-level workers essential",
        priorityCriteria: [
          "Family's historical association with seat",
          "Ability to mobilize urban voters",
          "Connect with trading/business community",
        ],
      },
      priorityApproach: [
        "Old city family candidate",
        "Market/trading community",
        "GST burden narrative",
        "Urban decay campaign",
      ],
    },
    attackLines: {
      vulnerabilities: [
        "Urban Decay: Broken roads, waterlogging",
        "Market Struggles: Traders' concerns ignored",
        "Law & Order: Crime in city areas",
        "Misgovernance: Unfulfilled promises",
      ],
      narratives: [
        "From Champa to Pappi, Ludhiana waits for real development",
        "Urban Ludhiana deserves better than Delhi's orders",
        "Your vote built Pappi's house, now build Congress's future",
      ],
    },
    congressNarratives: [
      {
        narratives: [
          "From Champa to Pappi, Ludhiana waits for real development",
        ],
      },
      {
        narratives: [
          "Urban Ludhiana deserves better than Delhi's orders",
        ],
      },
      {
        narratives: [
          "Your vote built Pappi's house, now build Congress's future",
        ],
      },
    ],
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: {
      strengths: [
        "Congress won in 2017 with 47,871 votes",
        "Old city family networks exist",
        "Historical connection to constituency",
        "Trading community has Congress leanings",
      ],
    },
    weaknesses: {
      weaknesses: [
        "AAP wave in 2022",
        "Dense urban area - difficult booth management",
        "Lost to AAP - anti-incumbency against Congress",
        "Need strong candidate with old city connect",
      ],
    },
    opportunities: {
      opportunities: [
        "AAP's urban governance failures",
        "GST burden on traders",
        "Urban decay - broken roads, waterlogging",
        "Hindu voter consolidation possible",
      ],
    },
    threats: {
      threats: [
        "AAP's sitting MLA advantage",
        "Old city Pappi name recognition",
        "Market associations may not deliver votes",
        "LIP/BJP vote consolidation",
      ],
    },
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    narratives: [
      {
        narratives: [
          "From Champa to Pappi, Ludhiana waits for real development",
        ],
      },
      {
        narratives: [
          "Urban Ludhiana deserves better than Delhi's orders",
        ],
      },
      {
        narratives: [
          "Your vote built Pappi's house, now build Congress's future",
        ],
      },
    ],
    prioritySegments: [
      {
        segment: "Trading community",
        rationale: "GST burden, market issues, commercial voter concerns",
      },
      {
        segment: "Old city families",
        rationale: "Traditional networks, historical connection",
      },
      {
        segment: "Hindu voters",
        rationale: "Consolidation possible, urban middle class",
      },
      {
        segment: "SC voters",
        rationale: "20-25% population, slum area concentration",
      },
    ],
    oldCityCoalition:
      "Phase 1 (6-12 months): Trading Community Outreach + Old City Family Network",
  },

  // ==========================================================================
  // 2027 PROJECTION
  // ==========================================================================
  voteProjection: {
    analysis2022: {
      "2022Breakdown": [
        { party: "AAP", estimatedShare: "~40%", estimatedVotes: "~65,000" },
        { party: "INC", estimatedShare: "~30%", estimatedVotes: "~49,000" },
        { party: "BJP", estimatedShare: "~15%", estimatedVotes: "~24,000" },
        { party: "LIP", estimatedShare: "~8%", estimatedVotes: "~13,000" },
        { party: "Others", estimatedShare: "~7%", estimatedVotes: "~11,000" },
      ],
      margin: "NEEDS VERIFICATION",
      congressGap: "Congress won in 2017 with 47,871",
      recoveryPotential: "Recovery possible with right candidate",
    },
    projection2027: {
      tier: "TIER 2 - MEDIUM PRIORITY",
      priority: "Urban core",
      urbanCore: "AC063 Ludhiana Central: Urban core",
      betterMargin: "AC062 Atam Nagar: 16,354 margin (BETTER)",
    },
    marginAnalysis:
      "Congress won in 2017 with 47,871 - Recovery possible with right candidate",
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "News18", url: "https://www.news18.com" },
      { name: "OneIndia", url: "https://www.oneindia.com" },
      { name: "IndiaVotes", url: "https://www.indiavotes.com" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ludhiana_Central" },
      { name: "MyNeta", url: "https://www.myneta.info" },
    ],
    researchStatus: {
      status: "PARTIALLY_VERIFIED",
      verificationNeeded: [
        "Exact vote share and margin for 2022",
        "Full 2012 election results",
        "Booth-level data",
        "Current MLA performance specifics",
        "Candidate family identification",
        "Market association leadership",
        "Specific booth agent network",
      ],
      notes: "Needs candidate family identification",
    },
    compiled: "20 May 2026",
    currentStatus: "NEEDS CANDIDATE FAMILY IDENTIFICATION",
  },

  // ==========================================================================
  // ADDITIONAL NOTES
  // ==========================================================================
  notes: [
    "Urban seat requires different strategy than rural",
    "Old city has distinct voter profile",
    "Booth-level penetration critical",
    "Community leaders influence voting",
    "Source: AC063-Ludhiana-Central.md and AC063-LudhianaCentral-deep.md",
  ],
};
