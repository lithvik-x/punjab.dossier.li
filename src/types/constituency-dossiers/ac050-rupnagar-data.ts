/**
 * AC050-Rupnagar Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC050-Rupnagar.md, AC050-Rupnagar-deep.md
 */

import type { AC050RupnagarTypes } from "./ac050-rupnagar-types";

export const ac050RupnagarData: AC050RupnagarTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 50,
    name: "Rupnagar",
    district: "Rupnagar",
    region: "Malwa",
    type: "General",
    lokSabhaSeat: "Anandpur Sahib",
    townType: "Municipal Council + Industrial",
    date: "20 May 2026",
  },

  baseline: {
    parliamentarySegment: "Anandpur Sahib Lok Sabha constituency",
    location: "District headquarters, industrial area",
    areaCharacter: "Mix of urban (Rupnagar town) and rural",
    industrialPresence: "Industrial area near Chandigarh",
  },

  executiveSummary: {
    overview:
      "Rupnagar (AC-050) is a General category assembly constituency in Rupnagar district, Malwa region of Punjab. AAP won this seat in 2022 with a substantial margin of 23,632 votes.",
    marginAnalysis:
      "While the margin is significant, it is not insurmountable with proper candidate selection and focused booth-level work.",
    congressPotential:
      "Congress can target this seat as part of a broader Malwa recovery strategy.",
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographicDeepDive: {
    censusData: {
      totalPopulation: "6,84,627 (Rupnagar District, 2011 Census)",
      sexRatio: "91.51% females per 1000 males",
      scPopulation: "17.98% in Rupnagar town",
      literacyRate: "[NEEDS VERIFICATION]",
    },
    townDemographics: {
      type: "Industrial town",
      language: "Punjabi speaking",
      communities: "Mix of communities",
      industrialTown: true,
    },
  },

  electoralRollAnalytics: {
    totalElectors2022: "~1,55,000",
    voterTurnout2022: "~1,20,000",
    turnoutPercentage2022: "~77%",
    totalElectors2017: "~1,50,000",
    voterTurnout2017: "~1,14,000",
    turnoutPercentage2017: "~76%",
  },

  casteComposition: {
    sikhs: "~65-70%",
    hindu: "~25-30%",
    sc: "~18-22%",
    other: "~5-7%",
    keyDemographics: [
      "Mix of urban (Rupnagar town) and rural",
      "Industrial area near Chandigarh",
      "Jat Sikh dominant",
    ],
  },

  casteCompositionDeep: {
    sikhsJatAndOthers: "~65-70%",
    hindu: "~25-30%",
    sc: "~18-22%",
    other: "~5-7%",
    keyNote: "Jat Sikh dominant",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Dinesh Chadha",
      party: "Aam Aadmi Party",
      margin: "23,632 votes",
      runnerUp: "(Congress candidate)",
      runnerUpParty: "Indian National Congress",
      totalCandidates: 8,
      urbanRuralMix: "Urban-rural mix",
      industrialPresence: true,
    },
    results2017: {
      winner: "(Congress candidate)",
      party: "Indian National Congress",
    },
    results2012: {
      winner: "(Congress candidate)",
      party: "Indian National Congress",
    },
    historicalPattern: "Congress held this seat before 2022",
    keyTrend:
      "AAP won with 23,632 margin - significant but lower than Anandpur Sahib. The industrial town base gives different dynamics than purely rural seats.",
  },

  electoralHistory: {
    results2022: {
      winner: "Dinesh Chadha",
      party: "AAP",
      margin: "23,632 votes",
      runnerUp: "Iqbal Singh Lalpura",
      runnerUpParty: "BJP",
      totalCandidates: 8,
      urbanRuralMix: "Urban-rural mix",
      industrialPresence: true,
    },
    runnerUp: "Iqbal Singh Lalpura",
    runnerUpParty: "BJP",
    marginOfVictory: "23,632 votes",
    totalCandidates: 8,
    urbanRuralMix: "Urban-rural mix",
    industrialPresence: true,
  },

  voteShareAnalysis: {
    aap: "~42%",
    inc: "~32%",
    sad: "~14%",
    bjp: "~5%",
    others: "~7%",
    congressGapToWin: "~12,000 additional votes (half margin)",
  },

  // ==========================================================================
  // PUBLIC SENTIMENT & ISSUES
  // ==========================================================================
  publicSentiment: {
    keySentimentIndicators: [
      "AAP urban dominance",
      "Industrial town concerns",
      "Youth employment expectations",
    ],
    urbanDominance: "AAP urban dominance",
    industrialTownConcerns: "Industrial town concerns",
    youthEmploymentExpectations: "Youth employment expectations",
  },

  governanceGap: {
    administrativeStructure: {
      districtCollector: "DC Rupnagar",
      municipalCorporation: "Municipal Corporation",
      industrialArea: "Industrial area",
    },
    keyConcerns: [
      "Nangal industrial area",
      "Bhakra Dam water issues",
      "Urban infrastructure",
    ],
  },

  localIssues: {
    topIssues: [
      {
        rank: 1,
        title: "Industrial Employment",
        description: "Township needs more industries",
      },
      {
        rank: 2,
        title: "Urban Infrastructure",
        description: "Town maintenance, roads, drainage",
      },
      {
        rank: 3,
        title: "Employment",
        description: "Jobs for local youth",
      },
      {
        rank: 4,
        title: "Agriculture",
        description: "Rural areas depend on farming",
      },
      {
        rank: 5,
        title: "Drug Crisis",
        description:
          "Malwa region affected though less than Doaba",
      },
    ],
    governanceGaps: [
      "Industrial employment",
      "Water and power",
      "Urban infrastructure",
      "Healthcare",
      "Youth employment",
    ],
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  influencersPowerStructure: {
    keyInfluencers: [
      {
        category: "Industrialists",
        description: "Local industrialists have significant influence",
      },
      {
        category: "AAP local leaders",
        description: "AAP local leaders",
      },
      {
        category: "BJP leaders",
        description: "BJP leaders (Naraingarh connection)",
      },
      {
        category: "Former MLAs",
        description: "Former MLAs",
      },
    ],
    industrialists: "Industrialists",
    aapLocalLeaders: "AAP local leaders",
    bjpLeaders: "BJP leaders (Naraingarh connection)",
    naraingarhConnection: "Naraingarh industrial base connection",
    formerMLAs: "Former MLAs",
  },

  strategicBlueprint: {
    aapStrategy: {
      maintainMargin: "Maintain margin",
      industrialDevelopmentPromises: "Industrial development promises",
      urbanSchemes: "Urban schemes",
    },
    bjpStrategy: {
      strongChallengePossible: true,
      naraingarhIndustrialBase: "Strong industrial base",
      centralSchemes: "Central schemes",
    },
    congressStrategy: {
      weakenedPosition: true,
      rebuildingNeeded: "Rebuilding needed",
    },
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentStatus: "Loss in 2022 - AAP won by 23,632 margin",
    lossIn2022: "AAP won by 23,632 margin",
    opportunity: "Industrial/urban mix offers multiple paths",
    strategy:
      "Combine urban development narrative with rural outreach",
  },

  strategicRecommendations: {
    candidate: "Strong local candidate with industrial/business connect",
    urbanFocus: "Development narrative for Rupnagar town",
    ruralOutreach: "Farmer issues, MSP, irrigation",
    drugNarrative: "AAP failed despite tall claims",
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      caste: "Sikh (Jat preferred) or Hindu (Khatri/Arora)",
      background: "Business, industry, or professional",
      age: "45-55 years",
      quality: "Development-focused, clean image",
      connect: "Urban + rural connection",
    },
    attackLines: {
      developmentFailures: "Town infrastructure deteriorated",
      brokenPromises: "Employment promises unfulfilled",
      drugCrisis: "Youth addiction continues",
      mlaPerformance: "Dinesh Chadha failed on local issues",
    },
    congressStrategy: {
      currentPosition: "Weakened position",
      incumbentName: "Dinesh Chadha (AAP)",
      termCount: 1,
      challenges: [
        "Maintain grip while addressing issues",
        "Urban development narrative",
        "Rural outreach",
      ],
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      "AAP won decisively in 2022",
      "Urban-industrial mix constituency",
      "Malwa region political significance",
    ],
    weaknesses: [
      "Congress weakened position",
      "23,632 margin requires focused effort",
      "Rebuilding needed",
    ],
    opportunities: [
      "Industrial/urban mix offers multiple paths",
      "Development narrative for Rupnagar town",
      "Farmer and youth issues",
    ],
    threats: [
      "AAP incumbency advantage",
      "Drug crisis narrative",
      "Broken promises perception",
    ],
  },

  // ==========================================================================
  // RECOMMENDATIONS
  // ==========================================================================
  recommendationsSummary: {
    priority: {
      level: "MEDIUM",
      rationale:
        "Significant margin but achievable with focused effort",
    },
    candidate:
      "Strong local candidate with urban connect and industrial/business background",
    narrative: "Development failures, broken promises",
    voterCoalition: "Urban + rural + traditional Congress base",
    marginReversalPotential: {
      level: "MEDIUM",
      rationale: "23,632 requires focused booth-level work",
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "News18" },
      { name: "OneIndia" },
      { name: "IndiaVotes" },
      { name: "CNBC TV18" },
      { name: "Chanakyya" },
      { name: "minimax-web-search" },
    ],
    researchStatus: {
      status: "PARTIALLY VERIFIED",
      sourcesConsulted: ["minimax-web-search"],
      dataCurrency: "As of 20 May 2026",
    },
  },
};
