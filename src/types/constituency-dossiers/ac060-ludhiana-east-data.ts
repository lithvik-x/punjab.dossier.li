/**
 * AC060-Ludhiana East Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC060-Ludhiana-East.md, AC060-LudhianaEast-deep.md
 */

import type { AC060LudhianaEastTypes } from './ac060-ludhiana-east-types';

export const ac060LudhianaEastData: AC060LudhianaEastTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 60,
    name: "Ludhiana East",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Ludhiana",
    character: "Urban, part of industrial Ludhiana city",
    date: "20 May 2026",
  },

  profile: {
    acNumber: "60",
    officialName: "Ludhiana East",
    district: "Ludhiana",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Ludhiana",
    character: "Urban, part of industrial Ludhiana city",
  },

  executiveSummary: {
    overview:
      "Ludhiana East (AC-060) is a General category assembly constituency in Ludhiana district, Malwa region of Punjab. AAP won this seat in 2022 with Daljit Singh Grewal (Bhola). This is an urban constituency within Punjab's industrial capital.",
    winner: "Daljit Singh Grewal Bhola",
    party: "Aam Aadmi Party",
    runnerUp: "Sanjeev Talwar",
    urbanVoterDynamics:
      "The urban voter dynamics and commercial character make this a challenging seat for Congress to reclaim.",
    congressChallenge:
      "Congress held this urban seat in 2017. AAP won in 2022, flipping Ludhiana East. Urban voter shift to AAP is evident.",
    congressHeld2017: "AAP victory in urban Ludhiana",
  },

  geographicProfile: {
    fullyUrban: true,
    partOfLudhianaCity: true,
    commercialAndResidentialMix: true,
    industrialWorkersPresent: true,
    borderStatus: "Not border district",
  },

  borderStatus: {
    isBorderDistrict: false,
  },

  // ==========================================================================
  // ELECTION HISTORY
  // ==========================================================================
  electionHistory: {
    result2022: {
      winner: "Daljit Singh Grewal Bhola",
      party: "Aam Aadmi Party",
      runnerUp: "Sanjeev Talwar",
      totalElectors: "2,17,795",
      note: "AAP victory in urban Ludhiana",
    },
    result2017: {
      winner: "Sanjeev Talwar",
      party: "Indian National Congress",
      note: "Congress held this seat before 2022",
    },
    result2012: {
      winner: "Congress candidate",
      party: "Indian National Congress",
      note: "Congress won",
    },
    keyTrend:
      "Congress held this urban seat in 2017. AAP won in 2022, flipping Ludhiana East. Urban voter shift to AAP is evident.",
  },

  electorateData: {
    records: [
      {
        election: "2022",
        totalElectors: "2,17,795",
        voterTurnout: "~1,50,000+",
        turnoutPercentage: "~69%",
      },
      {
        election: "2017",
        totalElectors: "~2,10,000",
        voterTurnout: "~1,44,000",
        turnoutPercentage: "~69%",
      },
    ],
  },

  // ==========================================================================
  // DEEP ELECTORAL HISTORY
  // ==========================================================================
  deepResearch: {
    electoralHistory: {
      election2022: [
        {
          candidate: "Daljit Singh Grewal Bhola",
          party: "AAP",
          votes: "TBD",
          voteShare: "~40%",
          margin: "TBD",
        },
        {
          candidate: "Sanjeev Talwar",
          party: "INC",
          votes: "TBD",
          voteShare: "~32%",
          margin: "Runner-up",
        },
        {
          candidate: "BJP",
          party: "BJP",
          votes: "TBD",
          voteShare: "~12%",
          margin: "Third",
        },
      ],
      election2017: {
        winner: "Sanjeev Talwar (Congress)",
        pattern: "Congress hold before AAP",
      },
      election2012: {
        winner: "Congress candidate",
        pattern: "Congress traditional seat",
      },
      historicalTrendAnalysis:
        "2012: INC Win, 2017: INC Win, 2022: AAP Win (urban shift) → Margin: DATA NEEDS VERIFICATION",
      historicalTrend: [
        { year: 2012, party: "INC", result: "Win", note: "Congress traditional seat" },
        { year: 2017, party: "INC", result: "Win", note: "Congress hold before AAP" },
        { year: 2022, party: "AAP", result: "Win", note: "Urban shift" },
      ],
    },

    constituencyIdentity: {
      acNo: "60",
      name: "Ludhiana East",
      district: "Ludhiana",
      region: "Malwa",
      category: "General",
      lokSabhaSeat: "Ludhiana",
      character: "Urban, part of industrial Ludhiana city",
      borderStatus: "Not border district",
    },

    geographicProfile: {
      fullyUrban: true,
      partOfLudhianaCity: true,
      commercialAndResidentialMix: true,
      industrialWorkersPresent: true,
      borderStatus: "Not border district",
    },

    demographics: {
      populationComposition: [
        { category: "Sikh (Jat + Others)", estimatedPercentage: "50-55%", notes: "Majority" },
        { category: "Hindu", estimatedPercentage: "40-45%", notes: "Urban commercial" },
        { category: "SC", estimatedPercentage: "15-18%", notes: "Lower in urban" },
        { category: "Other", estimatedPercentage: "5%", notes: "Small populations" },
      ],
      keyCommunities: [
        { community: "Khatri/Arora", description: "Business community" },
        { community: "Baniya", description: "Trading community" },
        { community: "Professional class", description: "Growing" },
        { community: "Industrial workers", description: "Present" },
      ],
    },

    voterEcosystem: {
      electorateData2022: {
        totalElectors: "2,17,795",
        votesPolled: "~1,50,000+",
        voterTurnout: "~69%",
      },
      voterTurnoutTrend: [
        { year: "2022", turnoutPercentage: "~69%", notes: "Moderate for urban" },
        { year: "2017", turnoutPercentage: "~69%", notes: "Consistent" },
        { year: "2012", turnoutPercentage: "~68%", notes: "Consistent" },
      ],
    },

    localIssues: {
      top5IssuesPriorityOrder: [
        {
          rank: 1,
          title: "Urban Infrastructure",
          description: "City roads and drainage, power supply reliability, water supply, sanitation",
          subIssues: [
            "City roads and drainage",
            "Power supply reliability",
            "Water supply",
            "Sanitation",
          ],
        },
        {
          rank: 2,
          title: "Drug Crisis",
          description: "Urban youth addiction, prescription drug abuse, industrial workers affected",
          subIssues: [
            "Urban youth addiction",
            "Prescription drug abuse",
            "Industrial workers affected",
          ],
        },
        {
          rank: 3,
          title: "Employment",
          description: "Jobs for educated youth, industrial sector, startup ecosystem",
          subIssues: [
            "Jobs for educated youth",
            "Industrial sector",
            "Startup ecosystem",
          ],
        },
        {
          rank: 4,
          title: "Civic Services",
          description: "Municipal services, waste management, street lighting, public transport",
          subIssues: [
            "Municipal services",
            "Waste management",
            "Street lighting",
            "Public transport",
          ],
        },
        {
          rank: 5,
          title: "Commercial Tax",
          description: "GST impact on traders, market area issues",
          subIssues: ["GST impact on traders", "Market area issues"],
        },
      ],
    },

    governanceAudit: {
      administrativeStructure: {
        district: "Ludhiana",
        dc: "Ludhiana District Collector",
        mc: "Ludhiana Municipal Corporation",
        mla: "Daljit Singh Grewal Bhola",
        mlaParty: "AAP",
        mlaTenure: "2022-present",
      },
      mlaPerformance: {
        name: "Daljit Singh Grewal Bhola",
        party: "AAP",
        background: "Industrial background",
        performance: "MODERATE",
      },
    },

    influencersPowerStructure: {
      politicalInfluencers: [
        {
          name: "Daljit Singh Grewal Bhola",
          position: "AAP MLA",
          description: "Won against Congress in 2022",
          attributes: [
            "Urban voter connect",
            "Commercial background",
            "Industrial background",
          ],
        },
        {
          name: "Sanjeev Talwar",
          position: "Congress",
          description: "2017 winner, still has local influence",
          attributes: [
            "2017 winner",
            "Still has local influence",
            "Traditional base",
          ],
        },
        {
          name: "BJP Leaders",
          position: "BJP",
          description: "Growing in urban areas",
          attributes: [
            "Growing in urban areas",
            "Hindu voter mobilization",
            "Professional class connect",
          ],
        },
      ],
    },

    aapVulnerabilityAnalysis: {
      whyAapVulnerable: {
        reasons: [
          "Civic Failures: Roads, drainage, power cuts",
          "Drug Crisis: Urban youth addiction visible",
          "Urban Neglect: City infrastructure deteriorating",
          "Congress Hold: Congress won in 2017",
        ],
      },
      aapWeakPoints: {
        points: [
          {
            issue: "Civic infra",
            aapPromise: "Better Ludhiana",
            currentStatus: "Declining",
            voterSentiment: "ANGRY",
          },
          {
            issue: "Drug crisis",
            aapPromise: "End addiction",
            currentStatus: "Worsening",
            voterSentiment: "ANGRY",
          },
          {
            issue: "Employment",
            aapPromise: "Jobs",
            currentStatus: "Limited",
            voterSentiment: "DISAPPOINTED",
          },
          {
            issue: "Urban dev",
            aapPromise: "Infrastructure",
            currentStatus: "Neglected",
            voterSentiment: "FRUSTRATED",
          },
        ],
      },
    },

    congressStrategicBlueprint: {
      currentPosition: {
        result2022: "Lost (margin needs verification)",
        opportunity: "Won this seat in 2017",
        challenge: "Urban voter shift to AAP",
      },
      winningStrategy: {
        phase1: {
          timeframe: "6-12 months",
          activities: [
            "Hindu Professional Outreach: Urban middle class, business community, development narrative",
            "Civic Issues Campaign: Infrastructure failures, municipal services, urban decay",
            "Candidate Selection: Young, dynamic urban candidate, professional background, age 40-52 years",
          ],
        },
      },
    },

    candidateRecommendation: {
      idealCandidateProfile: [
        { attribute: "Caste", requirement: "Hindu (Khatri, Arora, Brahmin) or Sikh" },
        { attribute: "Background", requirement: "Professional, business, trader" },
        { attribute: "Age", requirement: "40-52 years" },
        { attribute: "Quality", requirement: "Urban-focused, development" },
        { attribute: "Connect", requirement: "City voters, young professionals" },
      ],
      priorityApproach: [
        "Find young urban candidate",
        "Civic failures campaign",
        "Hindu professional outreach",
        "Development narrative",
      ],
    },

    voteShareProjection2027: {
      voteShare2022: [
        { party: "AAP", voteShare: "~40%", votesEstimated: "~60,000" },
        { party: "INC", voteShare: "~32%", votesEstimated: "~48,000" },
        { party: "BJP", voteShare: "~12%", votesEstimated: "~18,000" },
        { party: "SAD", voteShare: "~8%", votesEstimated: "~12,000" },
        { party: "Others", voteShare: "~8%", votesEstimated: "~12,000" },
      ],
      gapAnalysis: {
        margin: "DATA NEEDS VERIFICATION",
        congress2017Winner: "Congress 2017 winner",
        urbanShiftToRecover: "Urban shift to recover",
      },
      projection: {
        tier: "TIER 2",
        priorityLevel: "MEDIUM PRIORITY",
        description: "Urban constituency, Congress won in 2017, Hindu professional outreach key",
        relatedSeats: [
          { acNumber: "AC060", name: "Ludhiana East", note: "Urban dynamics" },
          { acNumber: "AC057", name: "Khanna", note: "Commercial dynamics" },
          { acNumber: "AC059", name: "Sahnewal", margin: "15,193", note: "BETTER" },
        ],
      },
    },
  },

  // ==========================================================================
  // CASTE COMPOSITION
  // ==========================================================================
  casteComposition: {
    categories: [
      { category: "Sikh (Jat + Others)", estimatedPercentage: "~50-55%" },
      { category: "Hindu", estimatedPercentage: "~40-45%", notes: "urban commercial" },
      { category: "SC", estimatedPercentage: "~15-18%", notes: "lower in urban" },
      { category: "Other", estimatedPercentage: "~5%" },
    ],
    keyDemographics: [
      "Fully urban constituency",
      "Commercial, trading community",
      "Professional class",
      "Mixed religious composition",
    ],
  },

  demographicDeepDive: {
    populationComposition: [
      { category: "Sikh (Jat + Others)", estimatedPercentage: "50-55%", notes: "Majority" },
      { category: "Hindu", estimatedPercentage: "40-45%", notes: "Urban commercial" },
      { category: "SC", estimatedPercentage: "15-18%", notes: "Lower in urban" },
      { category: "Other", estimatedPercentage: "5%", notes: "Small populations" },
    ],
    keyCommunities: [
      { community: "Khatri/Arora", description: "Business community" },
      { community: "Baniya", description: "Trading community" },
      { community: "Professional class", description: "Growing" },
      { community: "Industrial workers", description: "Present" },
    ],
  },

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: {
    issues: [
      {
        rank: 1,
        title: "Urban Infrastructure",
        description: "City roads, drainage, power",
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description: "Urban youth addiction rising",
      },
      {
        rank: 3,
        title: "Employment",
        description: "Jobs for educated youth",
      },
      {
        rank: 4,
        title: "Civic Services",
        description: "Sanitation, municipal services",
      },
      {
        rank: 5,
        title: "Commercial Tax",
        description: "GST impact on traders",
      },
    ],
  },

  localIssuesGrievances: {
    top5IssuesPriorityOrder: [
      {
        rank: 1,
        title: "Urban Infrastructure",
        description: "City roads and drainage, power supply reliability, water supply, sanitation",
        subIssues: [
          "City roads and drainage",
          "Power supply reliability",
          "Water supply",
          "Sanitation",
        ],
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description: "Urban youth addiction, prescription drug abuse, industrial workers affected",
        subIssues: [
          "Urban youth addiction",
          "Prescription drug abuse",
          "Industrial workers affected",
        ],
      },
      {
        rank: 3,
        title: "Employment",
        description: "Jobs for educated youth, industrial sector, startup ecosystem",
        subIssues: ["Jobs for educated youth", "Industrial sector", "Startup ecosystem"],
      },
      {
        rank: 4,
        title: "Civic Services",
        description: "Municipal services, waste management, street lighting, public transport",
        subIssues: [
          "Municipal services",
          "Waste management",
          "Street lighting",
          "Public transport",
        ],
      },
      {
        rank: 5,
        title: "Commercial Tax",
        description: "GST impact on traders, market area issues",
        subIssues: ["GST impact on traders", "Market area issues"],
      },
    ],
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentStatus: {
      lossIn2022: "AAP won urban seat",
      challenge: "Urban voters shifting to AAP",
      opportunity: "Congress held this in 2017",
    },
    strategicConsiderations: [
      "Urban Shift: AAP consolidating urban votes",
      "Hindu Factor: Urban Hindus moving to AAP",
      "Congress Base: Traditional voters still exist",
      "Development: Civic infrastructure failures",
    ],
    recommendations: [
      "Candidate: Young, dynamic urban candidate",
      "Urban Narrative: Civic failures, infrastructure collapse",
      "Hindu Outreach: Address urban Hindu concerns",
      "Development Focus: Jobs, safety, services",
    ],
  },

  congressStrategicBlueprint: {
    currentPosition: {
      result2022: "Lost (margin needs verification)",
      opportunity: "Won this seat in 2017",
      challenge: "Urban voter shift to AAP",
    },
    winningStrategy: {
      phase1: {
        timeframe: "6-12 months",
        activities: [
          "Hindu Professional Outreach: Urban middle class, business community, development narrative",
          "Civic Issues Campaign: Infrastructure failures, municipal services, urban decay",
          "Candidate Selection: Young, dynamic urban candidate, professional background, age 40-52 years",
        ],
      },
    },
  },

  congressGapAnalysis: {
    margin: "DATA NEEDS VERIFICATION",
    congress2017Winner: "Congress 2017 winner",
    urbanShiftToRecover: "Urban shift to recover",
  },

  // ==========================================================================
  // GOVERNANCE AUDIT
  // ==========================================================================
  governanceAudit: {
    administrativeStructure: {
      district: "Ludhiana",
      dc: "Ludhiana District Collector",
      mc: "Ludhiana Municipal Corporation",
      mla: "Daljit Singh Grewal Bhola",
      mlaParty: "AAP",
      mlaTenure: "2022-present",
    },
    mlaPerformance: {
      name: "Daljit Singh Grewal Bhola",
      party: "AAP",
      background: "Industrial background",
      performance: "MODERATE",
    },
  },

  // ==========================================================================
  // INFLUENCERS & POWER STRUCTURE
  // ==========================================================================
  influencersPowerStructure: {
    politicalInfluencers: [
      {
        name: "Daljit Singh Grewal Bhola",
        position: "AAP MLA",
        description: "Won against Congress in 2022",
        attributes: ["Urban voter connect", "Commercial background"],
      },
      {
        name: "Sanjeev Talwar",
        position: "Congress",
        description: "2017 winner, still has local influence",
        attributes: ["2017 winner", "Still has local influence", "Traditional base"],
      },
      {
        name: "BJP Leaders",
        position: "BJP",
        description: "Growing in urban areas",
        attributes: ["Growing in urban areas", "Hindu voter mobilization", "Professional class connect"],
      },
    ],
  },

  // ==========================================================================
  // AAP VULNERABILITY ANALYSIS
  // ==========================================================================
  aapVulnerabilityAnalysis: {
    whyAapVulnerable: {
      reasons: [
        "Civic Failures: Roads, drainage, power cuts",
        "Drug Crisis: Urban youth addiction visible",
        "Urban Neglect: City infrastructure deteriorating",
        "Congress Hold: Congress won in 2017",
      ],
    },
    aapWeakPoints: {
      points: [
        {
          issue: "Civic infra",
          aapPromise: "Better Ludhiana",
          currentStatus: "Declining",
          voterSentiment: "ANGRY",
        },
        {
          issue: "Drug crisis",
          aapPromise: "End addiction",
          currentStatus: "Worsening",
          voterSentiment: "ANGRY",
        },
        {
          issue: "Employment",
          aapPromise: "Jobs",
          currentStatus: "Limited",
          voterSentiment: "DISAPPOINTED",
        },
        {
          issue: "Urban dev",
          aapPromise: "Infrastructure",
          currentStatus: "Neglected",
          voterSentiment: "FRUSTRATED",
        },
      ],
    },
  },

  // ==========================================================================
  // RECOMMENDED CANDIDATE PROFILE
  // ==========================================================================
  recommendedCandidateProfile: {
    table: [
      { attribute: "Caste", idealProfile: "Hindu (Khatri, Arora, Brahmin) or Sikh" },
      { attribute: "Background", idealProfile: "Professional, business, trader" },
      { attribute: "Age", idealProfile: "40-52 years" },
      { attribute: "Quality", idealProfile: "Urban-focused, development-oriented" },
      { attribute: "Connect", idealProfile: "City voters, young professionals" },
    ],
  },

  candidateRecommendation: {
    idealCandidateProfile: [
      { attribute: "Caste", requirement: "Hindu (Khatri, Arora, Brahmin) or Sikh" },
      { attribute: "Background", requirement: "Professional, business, trader" },
      { attribute: "Age", requirement: "40-52 years" },
      { attribute: "Quality", requirement: "Urban-focused, development" },
      { attribute: "Connect", requirement: "City voters, young professionals" },
    ],
    priorityApproach: [
      "Find young urban candidate",
      "Civic failures campaign",
      "Hindu professional outreach",
      "Development narrative",
    ],
  },

  // ==========================================================================
  // ATTACK LINES AGAINST AAP
  // ==========================================================================
  attackLines: {
    lines: [
      {
        rank: 1,
        title: "Civic Failures",
        description: "Roads, drainage, power cuts",
      },
      {
        rank: 2,
        title: "Drug Crisis",
        description: "Urban youth addiction visible",
      },
      {
        rank: 3,
        title: "Urban Neglect",
        description: "City infrastructure deteriorating",
      },
      {
        rank: 4,
        title: "Broken Promises",
        description: "Jobs, development promises unfulfilled",
      },
    ],
  },

  // ==========================================================================
  // VOTE SHARE ANALYSIS
  // ==========================================================================
  voteShareAnalysis: {
    parties2022: [
      { party: "AAP", voteShare: "~40%", votesEstimated: "~60,000" },
      { party: "INC", voteShare: "~32%", votesEstimated: "~48,000" },
      { party: "BJP", voteShare: "~12%", votesEstimated: "~18,000" },
      { party: "SAD", voteShare: "~8%", votesEstimated: "~12,000" },
      { party: "Others", voteShare: "~8%", votesEstimated: "~12,000" },
    ],
    congressGapAnalysis: "Data insufficient for full assessment",
    marginDataStatus: "DATA NEEDS VERIFICATION",
  },

  // ==========================================================================
  // PRIORITY RANKING
  // ==========================================================================
  priorityRanking: {
    tier: "TIER 2",
    priorityLevel: "MEDIUM PRIORITY",
    description: "Urban constituency",
    relatedSeats: [
      { acNumber: "AC060", name: "Ludhiana East", note: "Urban dynamics" },
      { acNumber: "AC057", name: "Khanna", note: "Commercial dynamics" },
      { acNumber: "AC059", name: "Sahnewal", margin: "15,193", note: "BETTER" },
    ],
  },

  voteShareProjection2027: {
    voteShare2022: [
      { party: "AAP", voteShare: "~40%", votesEstimated: "~60,000" },
      { party: "INC", voteShare: "~32%", votesEstimated: "~48,000" },
      { party: "BJP", voteShare: "~12%", votesEstimated: "~18,000" },
      { party: "SAD", voteShare: "~8%", votesEstimated: "~12,000" },
      { party: "Others", voteShare: "~8%", votesEstimated: "~12,000" },
    ],
    gapAnalysis: {
      margin: "DATA NEEDS VERIFICATION",
      congress2017Winner: "Congress 2017 winner",
      urbanShiftToRecover: "Urban shift to recover",
    },
    projection: {
      tier: "TIER 2",
      priorityLevel: "MEDIUM PRIORITY",
      description: "Urban constituency, Congress won in 2017, Hindu professional outreach key",
      relatedSeats: [
        { acNumber: "AC060", name: "Ludhiana East", note: "Urban dynamics" },
        { acNumber: "AC057", name: "Khanna", note: "Commercial dynamics" },
        { acNumber: "AC059", name: "Sahnewal", margin: "15,193", note: "BETTER" },
      ],
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: ["News18", "OneIndia", "IndiaVotes", "Wikipedia", "MyNeta"],
    compiledDate: "20 May 2026",
    verificationStatus: {
      status: "VERIFIED",
      notes: [
        "Main dossier verified",
        "Deep research verified - margin data needs verification",
      ],
    },
    dataCurrency: "As of 20 May 2026",
    researchStatus: "NEEDS MARGIN VERIFICATION",
  },
};
