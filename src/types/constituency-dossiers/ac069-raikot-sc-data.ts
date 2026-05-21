/**
 * AC069-Raikot-SC Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC069-Raikot-SC.md, AC069-Raikot-deep.md
 */

import type { AC069RaikotSCTypes } from "./ac069-raikot-sc-types";

export const ac069RaikotSCData: AC069RaikotSCTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 69,
    name: "Raikot (SC)",
    district: "Ludhiana",
    region: "Malwa",
    category: "SC",
    reservedStatus: "Reserved",
    date: "20 May 2026",
  },

  overview: {
    description:
      "Raikot (SC) is a reserved assembly constituency for Scheduled Castes in Ludhiana district, Malwa region. Part of Fatehgarh Sahib Lok Sabha constituency. This is primarily a rural agricultural constituency.",
    parliamentaryConstituency: "Fatehgarh Sahib Lok Sabha constituency",
    areaCharacter: "Primarily rural agricultural constituency",
  },

  // ==========================================================================
  // ELECTION RESULTS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Hakam Singh Contractor",
      party: "AAP",
      margin: "27,644 votes",
      marginVotes: 27644,
      runnerUp: "Congress candidate",
      runnerUpParty: "Congress",
      resultType: "Strong AAP victory",
      status: "verified",
    },
    historicalPattern: {
      trend: "Congress traditionally strong in SC reserved seats, AAP made major gains in 2022",
      traditionalStrongparty: "Congress",
      aapGains: "AAP made major gains in 2022",
      marginAnalysis: "27,644 margin shows AAP dominance",
    },
    marginAnalysis: [
      {
        year: 2022,
        winner: "AAP",
        party: "AAP",
        margin: "27,644",
        keyFactor: "Anti-Congress wave",
        status: "verified",
      },
    ],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    casteComposition: {
      scDemographics: {
        concentration: "Rural Ludhiana district",
        dominantCommunities: [
          "Mazhabi Sikh",
          "Ramdassia/Ravidassia",
          "Balmiki",
          "Ad Dharmi",
        ],
        communityBreakdown: [
          { community: "Mazhabi Sikh", status: "Largest" },
          { community: "Ramdassia/Ravidassia", status: "Significant" },
          { community: "Balmiki", status: "Present" },
          { community: "Ad Dharmi", status: "Noted" },
        ],
      },
      otherCommunities: {
        jatSikh: "Minority in some areas",
        obc: "Various groups present",
      },
    },
    religiousComposition: {
      sikh: "55-60%",
      hindu: "35-40%",
      christian: "Small minority",
      muslim: "Small minority",
    },
    punjabScDemographics: {
      scPopulation: "31.9% of Punjab",
      mazhabiSikh: "~10% of Punjab",
      ramdasiaRavidassia: "~13.1%",
    },
    urbanRuralComposition: {
      character: "Predominantly Rural",
      scPopulation:
        "Significant (reserved seat indicates substantial SC population)",
      economy: ["Agriculture", "Dairy farming", "Small businesses"],
    },
  },

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  localIssues: {
    primaryIssues: [
      {
        rank: 1,
        title: "Agricultural Distress",
        description: "Farm sector crisis",
      },
      {
        rank: 2,
        title: "Drug Menace",
        description:
          "Rural SC youth severely affected",
      },
      {
        rank: 3,
        title: "Land Rights",
        description: "SC community land issues",
      },
      {
        rank: 4,
        title: "Education",
        description: "SC students' access",
      },
      {
        rank: 5,
        title: "Employment",
        description: "Limited jobs for SC youth",
      },
      {
        rank: 6,
        title: "Healthcare",
        description: "Rural health facilities",
      },
      {
        rank: 7,
        title: "Caste Discrimination",
        description: "Social issues persist",
      },
    ],
    count: 7,
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  strategicPosition: {
    congress: {
      currentStatus: {
        result2022: "Lost by 27,644 votes (large margin)",
        margin: "27,644 votes",
        gapToClose: "Significant gap to overcome",
        historicalBase: "Congress traditionally strong",
      },
      keyChallenges: [
        "Large margin to overcome (27,644)",
        "AAP's welfare schemes appealed to SC voters",
        "Need to reconnect with SC community",
        "Booth-level rural organization needed",
      ],
      opportunities: [
        "AAP government failures in governance",
        "SC community grievances with current MLA",
        "Local issues can override welfare narrative",
        "Strong candidate can make difference",
      ],
    },
  },

  // ==========================================================================
  // RECOMMENDED CANDIDATE PROFILE
  // ==========================================================================
  recommendedCandidate: {
    profile: {
      idealCandidate: {
        caste: "Must be from SC community",
        subCaste: "Mazhabi or Ramdassia preferred",
        background: ["Farmer leader", "Social worker"],
        profile: "Young, dynamic, with village connect",
        priority: ["Community trust", "Work capacity"],
      },
      selectionPriorities: [
        "Ability to mobilize SC voters",
        "Village-level presence",
        "Understanding of SC issues",
        "Clean image, no corruption",
      ],
      candidateAttributes: [
        "Caste: Must be from SC community",
        "Sub-caste: Mazhabi or Ramdassia preferred",
        "Background: Farmer leader OR social worker",
        "Profile: Young, dynamic, with village connect",
        "Priority: Community trust and work capacity",
      ],
    },
    selectionPriorities: [
      "Ability to mobilize SC voters",
      "Village-level presence",
      "Understanding of SC issues",
      "Clean image, no corruption",
    ],
  },

  // ==========================================================================
  // ATTACK LINES AGAINST AAP
  // ==========================================================================
  attackLines: {
    vulnerabilities: [
      {
        vulnerability: "welfare",
        title: "Welfare",
        narrative: ["Only doles, no empowerment"],
      },
      {
        vulnerability: "drug_crisis",
        title: "Drug Crisis",
        narrative: ["SC youth destruction continues"],
      },
      {
        vulnerability: "education",
        title: "Education",
        narrative: ["No quality access for SC children"],
      },
      {
        vulnerability: "land",
        title: "Land",
        narrative: ["SC land issues unresolved"],
      },
      {
        vulnerability: "representation",
        title: "Representation",
        narrative: ["MLA not accessible"],
      },
    ],
    congressNarrative: [
      "Hakam Singh Contractor: 5 years, what did SC get?",
      "Real empowerment vs welfare doles",
      "SC youth deserve jobs, not just announcements",
      "Your children's future: Vote for Congress",
    ],
    keyMessage:
      "Hakam Singh Contractor: 5 years, what did SC get?",
  },

  // ==========================================================================
  // MARGIN ANALYSIS
  // ==========================================================================
  marginAnalysis: {
    entries: [
      {
        year: 2022,
        winner: "AAP",
        margin: "27,644",
        marginVotes: 27644,
        keyFactor: "Anti-Congress wave",
      },
    ],
    notes: [
      "Large margin (27,644) makes recovery challenging",
      "Requires exceptional candidate and campaign",
      "Booth-level SC voter contact essential",
      "Caste-community identity matters",
      "Need to address root issues, not just welfare",
    ],
  },

  notes: [
    "Large margin (27,644) makes recovery challenging",
    "Requires exceptional candidate and campaign",
    "Booth-level SC voter contact essential",
    "Caste-community identity matters",
    "Need to address root issues, not just welfare",
  ],

  // ==========================================================================
  // DEEP RESEARCH DATA
  // ==========================================================================
  deepResearch: {
    metadata: {
      dossierId: "AC069-Raikot",
      topic: "Raikot Assembly Constituency (AC069), Punjab",
      tier: 2,
      date: "20 May 2026",
      dataCurrency: "As of May 2026 | Election Data: 2022",
      sourcesConsulted: [
        "Web search",
        "Chanakyya",
        "IndiaVotes",
        "Wikipedia",
        "CEO Punjab",
      ],
      verificationStatus: "PARTIALLY VERIFIED",
    },
    executiveSummary:
      "Raikot (AC069) is a Scheduled Caste (SC) reserved assembly constituency located in Ludhiana district, Malwa region of Punjab. It falls under the Fatehgarh Sahib parliamentary constituency for national elections. The constituency has a predominantly rural agrarian character with significant dalit population. In the 2022 elections, AAP won this seat as part of their Malwa sweep.",
    constituencyProfile: {
      basicDetails: {
        assemblyConstituencyNo: 69,
        district: "Ludhiana",
        region: "Malwa",
        category: "SC (Scheduled Caste) - Reserved",
        parliamentaryConstituency: "Fatehgarh Sahib (Lok Sabha)",
      },
      geographicBoundaries: {
        location: "Southern Ludhiana district",
        borders: "Payal, Jagraon, and surrounding constituencies",
        keyTowns: ["Raikot", "Surrounding villages"],
        areaCharacter: "Predominantly Rural",
        economy: ["Agriculture", "Dairy farming", "Small businesses"],
      },
    },
    voterTurnout: {
      2022: "[NEEDS VERIFICATION]",
      stateAverage: "62.80%",
      status: "needs_verification",
    },
    keyIssues: {
      category: "Primary Issues",
      issues: [
        "Drug Menace: Rural youth addiction affecting SC communities disproportionately",
        "Unemployment: Limited job opportunities for rural dalit youth",
        "Land Issues: Land ownership concerns, agrarian distress",
        "Social Justice: Effective implementation of SC/ST welfare schemes",
        "Education: Access to quality education for dalit children",
      ],
    },
    politicalLandscape: {
      currentMla: {
        name: "[NEEDS VERIFICATION - AAP candidate won]",
        party: "AAP",
        status: "needs_verification",
      },
      partyPerformance: [
        {
          year: 2022,
          aap: "W",
          inc: "2nd/3rd",
          sad: "LOST",
          notes: "AAP wave",
        },
        {
          year: 2017,
          aap: "[LOST]",
          inc: "[W/2nd]",
          sad: "[W/2nd]",
          notes: "[NEEDS VERIFICATION]",
        },
      ],
    },
    electoralHistory: {
      entries: [
        {
          year: 2022,
          winner: "[NEEDS VERIFICATION]",
          party: "AAP",
          margin: "[NEEDS VERIFICATION]",
          status: "needs_verification",
        },
        {
          year: 2017,
          winner: "[NEEDS VERIFICATION]",
          party: "[NEEDS VERIFICATION]",
          margin: "[NEEDS VERIFICATION]",
          status: "needs_verification",
        },
        {
          year: 2012,
          winner: "[NEEDS VERIFICATION]",
          party: "[NEEDS VERIFICATION]",
          margin: "[NEEDS VERIFICATION]",
          status: "needs_verification",
        },
      ],
    },
    intelligenceGaps: {
      criticalMissingData: [
        {
          item: "Winner name and vote share",
          status: "critical",
        },
        {
          item: "All candidates and their votes",
          status: "critical",
        },
        {
          item: "Historical results (2017, 2012)",
          status: "critical",
        },
        {
          item: "Local influential dalit leaders and families",
          status: "important",
        },
        {
          item: "Caste composition specifics",
          status: "important",
        },
        {
          item: "Scheme beneficiary data",
          status: "important",
        },
      ],
    },
    recommendations: {
      forCongress: {
        candidate: "Strong SC leader with dalit community trust",
        focus: ["Employment", "Education", "Social justice"],
        outreach:
          "Mazhabi Sikh and other SC communities",
        differentiation:
          "From AAP's claims of working for all",
      },
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      { name: "Web search" },
      { name: "Chanakyya" },
      { name: "IndiaVotes" },
      { name: "Wikipedia" },
      { name: "CEO Punjab" },
    ],
    researchStatus: {
      status: "partial",
      verificationNeeded: [
        "Winner name and vote share",
        "All candidates and their votes",
        "Historical results (2017, 2012)",
        "Local influential dalit leaders and families",
        "Caste composition specifics",
        "Scheme beneficiary data",
        "2022 Voter turnout",
      ],
    },
  },
};

// Alias for consistency with other dossiers
export const ac069RaikotSCMainDossier = ac069RaikotSCData;

// Complete dossier with deep research
export const ac069RaikotSCComplete = ac069RaikotSCData;
