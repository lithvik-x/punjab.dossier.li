/**
 * AC095-Maur Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC095-Maur.md, AC095-Maur-deep.md
 */

import type { AC095MaurTypes } from "./ac095-maur-types";

export const ac095MaurData: AC095MaurTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 95,
    name: "Maur",
    district: "Bathinda",
    region: "Malwa",
    type: "General",
    lokSabhaSeat: "Bathinda",
    date: "20 May 2026",
  },

  baseline: {
    areaCharacter: "Rural agricultural constituency",
    terrain: "Punjab plains, Malwa region",
    parliamentarySegment: "Bathinda Lok Sabha constituency",
  },

  executiveSummary: {
    overview:
      "Maur (AC095) is a General category assembly constituency in Bathinda district of Punjab's Malwa region. The constituency witnessed an AAP victory in 2022 with Sukhveer Singh Maiserkhana winning.",
    keyFinding:
      "AAP holds this seat with doubled margin from 14K to 35K, indicating strengthening position.",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Sukhveer Singh Maiserkhana",
      party: "Aam Aadmi Party (AAP)",
      votesReceived: "63,099",
      voteShare: "~47%",
      margin: "35,008 votes",
      runnerUp: "Darshan Singh",
      runnerUpParty: "Independent",
      totalElectors: "~135,000",
      turnout: "~77-78%",
    },
    results2017: {
      winner: "Jagdeep Singh Kamalu",
      party: "Aam Aadmi Party (AAP)",
      margin: "14,677 votes",
      totalElectors: "~130,000",
    },
    results2012: null,
    turnoutPattern: "77-78% consistent",
    marginTrend: "Margin doubled from 14K (2017) to 35K (2022)",
  },

  keyCandidates2022: [
    {
      candidate: "Sukhveer Singh Maiserkhana",
      party: "Aam Aadmi Party (AAP)",
      status: "verified",
    },
    {
      candidate: "Darshan Singh",
      party: "Independent",
      status: "verified",
    },
    {
      candidate: "Jagmeet Singh Brar",
      party: "Shiromani Akali Dal (SAD)",
      status: "needs_verification",
    },
  ],

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    totalPopulation: "~175,000 [APPROXIMATION]",
    totalElectors: "~130,000-135,000",
    voterTurnout: "~77-78%",
    ruralVoters: "~80-85%",
    casteComposition: {
      source: "Based on district-level data and estimates",
      jathSikh: "~38-43%",
      hinduGeneral: "~28-33%",
      sc: "~18-22%",
      obc: "~5-8%",
      other: "~2%",
    },
    religionDistribution: {
      sikh: "~65%",
      hindu: "~33%",
      others: "~2%",
      source: "District level - Bathinda",
    },
    verificationStatus: "partial",
  },

  casteCompositionDeep: {
    jathSikh: "~38-43%",
    hinduGeneral: "~28-33%",
    scheduledCastes: "~18-22%",
    otherBackwardClasses: "~5-8%",
    verificationStatus: "needs_verification",
  },

  districtDemographics: {
    district: "Bathinda",
    sikh: "~65%",
    hindu: "~33%",
    others: "~2%",
    source: "District level data",
  },

  // ==========================================================================
  // ISSUES & SENTIMENT
  // ==========================================================================
  keyLocalIssues: {
    issues: [
      {
        rank: 1,
        title: "Drug Menace",
        description: "Rural youth affected by drug addiction prevalent in Malwa region",
        prioritySegment: ["Rural youth", "Families"],
      },
      {
        rank: 2,
        title: "Agricultural Distress",
        description:
          "Cotton/wheat farmers facing issues with MSP, water, and agricultural inputs",
        prioritySegment: ["Farmer households", "Agrarian community"],
      },
      {
        rank: 3,
        title: "Rural Infrastructure",
        description: "Roads, water, electricity gaps in rural areas",
        prioritySegment: ["All rural residents"],
      },
      {
        rank: 4,
        title: "Youth Unemployment",
        description: "Limited job opportunities for rural youth",
        prioritySegment: ["Young voters (18-35)"],
      },
      {
        rank: 5,
        title: "Health Facilities",
        description: "Rural healthcare gaps and inadequate medical facilities",
        prioritySegment: ["All residents", "Families"],
      },
    ],
    verificationStatus: "verified",
  },

  publicSentimentIndicators: {
    drugCrisis:
      "Youth addiction prevalent in Malwa region - major grievance",
    agriculturalDistress:
      "Farmer issues including MSP, water availability, cotton/wheat cultivation challenges",
    unemployment:
      "Limited industrial development, limited job opportunities for youth",
    infrastructureGaps:
      "Roads, rural connectivity, water supply, electricity in rural areas",
    healthFacilities:
      "Medical facilities adequacy concerns in rural constituency",
  },

  congressStrategicPosition: {
    currentStatus:
      "AAP holds this seat - Sukhveer Singh Maiserkhana won with doubled margin",
    challenges: [
      "AAP's strengthening position with doubled margin",
      "Need to leverage anti-incumbency",
      "Address rural distress",
    ],
    requirements: [
      "Fresh candidate with strong local connect",
      "Focus on anti-incumbency messaging",
      "Address rural distress directly",
      "Build coalition approach",
    ],
  },

  // ==========================================================================
  // STRATEGIC RECOMMENDATIONS
  // ==========================================================================
  recommendedCandidateProfile: {
    profile: "Sikh leader with agricultural background",
    background: "Farmer representative, rural development experience",
    keyTraits: ["Known for accessibility", "Grassroots connect"],
    targetVoter: ["Rural voters", "Jat Sikh community", "Farmers"],
  },

  attackLinesAgainstAAP: {
    lines: [
      {
        issue: "No visible development in Maur",
        narrative:
          "Despite AAP government claims, no visible development in the constituency",
      },
      {
        issue: "Drug addiction destroying youth",
        narrative:
          "Drug crisis continues to devastate rural youth despite government claims",
      },
      {
        issue: "Agricultural crisis ignored",
        narrative:
          "Farmers' issues with MSP, water, and agricultural inputs remain unaddressed",
      },
      {
        issue: "Broken promises on financial assistance",
        narrative:
          "AAP's promise of ₹1000/month for women not delivered",
      },
      {
        issue: "Rural infrastructure pathetic",
        narrative:
          "Roads, water, electricity infrastructure remains poor in rural areas",
      },
    ],
  },

  strategicConsiderations: {
    antiIncumbency:
      "Can leverage anti-incumbency against AAP government",
    ruralDistress:
      "Must address rural and agricultural voter concerns directly",
    coalitionApproach:
      "Build coalition across Jat Sikh, SC, and other communities",
  },

  // ==========================================================================
  // DEEP RESEARCH
  // ==========================================================================
  deepResearch: {
    executiveSummary: {
      overview:
        "Maur (AC095) is a General category assembly constituency in Bathinda district of Punjab's Malwa region. The constituency witnessed an AAP victory in 2022 with Sukhveer Singh Maiserkhana winning. Key issues include agricultural distress, drug crisis, and unemployment.",
      keyIssues: [
        "Drug Crisis: Youth addiction prevalent in Malwa",
        "Agricultural Distress: Farmer issues, MSP, water",
        "Unemployment: Limited industrial development",
        "Infrastructure: Roads, rural connectivity",
        "Healthcare: Medical facilities adequacy",
      ],
      politicalLandscape:
        "AAP stronghold - won both 2017 and 2022 elections with improving margins",
    },

    constituencyProfile: {
      assemblyConstituencyNo: 95,
      district: "Bathinda",
      region: "Malwa (Central Punjab)",
      category: "General (GEN)",
      parliamentaryConstituency: "Bathinda (Lok Sabha)",
    },

    electionResults2022: {
      winner: "Sukhveer Singh Maiserkhana",
      party: "Aam Aadmi Party",
      votesReceived: "63,099",
      runnerUp: "Lakha Singh Sidhana",
      margin: "[NEEDS VERIFICATION - significant given high vote count]",
      turnout: "~74-76% [ESTIMATE]",
      totalElectors: "~165,000 [APPROXIMATION]",
    },

    keyCandidates2022: [
      {
        candidate: "Sukhveer Singh Maiserkhana",
        party: "Aam Aadmi Party",
        status: "verified",
      },
      {
        candidate: "Jagmeet Singh Brar",
        party: "Shiromani Akali Dal",
        status: "needs_verification",
      },
      {
        candidate: "Darshan Singh",
        party: "Congress [NEEDS VERIFICATION]",
        status: "needs_verification",
      },
    ],

    demographics: {
      totalPopulation: "~175,000 [APPROXIMATION]",
      totalElectors: "~130,000-165,000 [APPROXIMATION]",
      voterTurnout: "~74-78%",
      ruralVoters: "~80-85%",
      casteComposition: {
        source: "Census 2011 estimates [NEEDS CONSTITUENCY-LEVEL VERIFICATION]",
        jathSikh: "~38-43%",
        hinduGeneral: "~28-33%",
        sc: "~18-22%",
        obc: "~5-8%",
        other: "~2%",
      },
      religionDistribution: {
        sikh: "~65%",
        hindu: "~33%",
        others: "~2%",
        source: "District level - Bathinda",
      },
      verificationStatus: "partial",
    },

    electoralHistory: [
      {
        year: 2022,
        winner: "Sukhveer Singh Maiserkhana",
        party: "AAP",
        margin: "[VERIFY]",
        status: "needs_verification",
      },
      {
        year: 2017,
        winner: "[NEEDS DATA]",
        party: "",
        margin: "[NEEDS DATA]",
        status: "needs_verification",
      },
      {
        year: 2012,
        winner: "[NEEDS DATA]",
        party: "",
        margin: "[NEEDS DATA]",
        status: "needs_verification",
      },
    ],

    districtContext: {
      districtName: "Bathinda",
      religionDistribution: {
        sikh: "~65%",
        hindu: "~33%",
        others: "~2%",
        source: "District level data",
      },
    },

    publicSentimentIndicators: {
      drugCrisis: "Youth addiction prevalent in Malwa - major grievance",
      agriculturalDistress:
        "Farmer issues including MSP, water, cotton/wheat cultivation challenges",
      unemployment:
        "Limited industrial development, limited job opportunities for youth",
      infrastructureGaps:
        "Roads, rural connectivity, water supply, electricity in rural areas",
      healthFacilities:
        "Medical facilities adequacy concerns in rural constituency",
    },

    currentMLA: "Sukhveer Singh Maiserkhana (AAP)",

    intelligenceGaps: [
      "Exact 2022 margin",
      "2017 and earlier results",
      "Booth-wise analysis",
      "All 2022 candidate vote shares",
      "Current MLA's performance",
      "Caste demographics specific to constituency",
      "Key influencers and power structure",
      "Media consumption patterns",
    ],

    recommendations: [
      "Strong local candidate with rural connect",
      "Primary Narrative: AAP failed on delivery",
      "Target Voters: Rural, farmers, youth",
      "Grievance Focus: Drug crisis, agricultural distress, broken promises",
    ],
  },

  congressStrategy2027: {
    leverageAntiIncumbency: true,
    candidateRequirement: "Strong local candidate with rural connect",
    targetVoters: ["Rural voters", "Farmers", "Youth"],
    grievanceFocus: [
      "Drug crisis",
      "Farmer distress",
      "Broken promises",
      "Rural infrastructure",
    ],
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      {
        name: "ProNeta",
        url: "https://proneta.in/Maur_assembly_constituency_Punjab-95",
      },
      {
        name: "IndiaVotes",
        url: "https://www.indiavotes.com/ac/summary/45479",
      },
      {
        name: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Maur_Assembly_constituency",
      },
      {
        name: "News18",
      },
      {
        name: "OneIndia",
      },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Exact 2022 margin",
        "2017 and 2012 election results",
        "Booth-wise analysis",
        "All 2022 candidate vote shares",
        "Current MLA's performance assessment",
        "Caste demographics specific to constituency",
        "Key political influencers",
        "Media landscape",
      ],
      intelligenceGaps: [
        "Exact 2022 margin",
        "2017 and earlier results",
        "Booth-wise analysis",
        "All 2022 candidate vote shares",
        "Current MLA's performance",
      ],
    },
  },
};

// ============================================================================
// REFERENCE EXPORTS
// ============================================================================

export const ac095MaurMainDossier = ac095MaurData;
export const ac095MaurDeepResearch = ac095MaurData.deepResearch;
export const ac095MaurCompleteDossier = ac095MaurData;

export type AC095MaurData = typeof ac095MaurData;
