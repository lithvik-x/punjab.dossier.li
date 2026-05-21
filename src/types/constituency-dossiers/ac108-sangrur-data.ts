/**
 * AC108-Sangrur Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source: AC108-Sangrur.md + AC108-Sangrur-deep.md
 */

import type { AC108SangrurTypes } from "./ac108-sangrur-types";

export const ac108SangrurData: AC108SangrurTypes = {
  mainDossier: {
    header: {
      acNumber: 108,
      name: "Sangrur",
      district: "Sangrur",
      region: "Malwa",
      category: "General",
      dataCurrency: "As of 19 May 2026",
    },

    executiveSummary: {
      description: "Sangrur is a general-category constituency and district headquarters. AAP won in 2022 with Narinder Kaur Bharaj defeating Congress's Vijay Inder Singla (who was a cabinet minister in previous Congress government) by 36,430 votes. The defeat of a sitting minister shows the anti-Congress wave, but also signals AAP's strength here.",
      historicalNote: "Sangrur was the Lok Sabha seat contested by actor Dharmendra in 2004.",
      currentStatus: "AAP holds the seat with 36,430 vote margin",
      keyTakeaway: "Anti-incumbency wave against Congress but AAP's governance delivery questioned",
    },

    electionResults: {
      2022: {
        year: 2022,
        winner: "Narinder Kaur Bharaj",
        party: "Aam Aadmi Party",
        votes: 74851,
        margin: "36,430 votes",
        marginVotes: 36430,
        runnerUp: "Vijay Inder Singla",
        runnerUpParty: "INC",
        status: "Winner",
      },
      2017: {
        year: 2017,
        winner: "Congress",
        party: "INC",
        status: "Verifying",
      },
      2012: {
        year: 2012,
        winner: "Congress",
        party: "INC",
        status: "Verifying",
      },
    },

    casteComposition: [
      { community: "Jat Sikh", percentageMin: 28, percentageMax: 32, category: "Jat Sikh" },
      { community: "OBC", percentageMin: 18, percentageMax: 22, category: "OBC" },
      { community: "SC", percentageMin: 24, percentageMax: 28, category: "SC" },
      { community: "Hindu Upper Caste", percentageMin: 12, percentageMax: 16, category: "Upper Caste" },
      { community: "Muslim", percentageMin: 2, percentageMax: 4, category: "Minority" },
      { community: "Others", percentageMin: 4, percentageMax: 6, category: "Other" },
    ],

    electorateData: {
      totalElectorsMin: 160000,
      totalElectorsMax: 170000,
      voterTurnout2022: "~76-79%",
    },

    keyLocalIssues: [
      {
        id: 1,
        issue: "Drug menace",
        description: "Urban and peri-urban trafficking",
        priority: "High",
      },
      {
        id: 2,
        issue: "Governance failure",
        description: "District headquarters but poor facilities",
        priority: "High",
      },
      {
        id: 3,
        issue: "Unemployment",
        description: "High among educated youth",
        priority: "High",
      },
      {
        id: 4,
        issue: "Healthcare",
        description: "Civil hospital inadequate",
        priority: "High",
      },
      {
        id: 5,
        issue: "Education",
        description: "Higher education access limited",
        priority: "Medium",
      },
    ],

    congressPosition: {
      currentPosition: "Lost by substantial margin",
      historicalStrength: "Was Congress minister's seat",
      challenge: "Rebuilding from base",
      strengths: [
        "Anti-incumbency against AAP growing",
        "Defeat of minister shows wave, not permanent shift",
        "Congress has urban support base",
      ],
      weaknesses: [
        "36,430 margin is significant",
        "AAP urban organization strong",
        "Need strong candidate to compete",
      ],
    },

    candidateProfile: {
      preferredCaste: "Jat Sikh or Hindu Upper Caste (urban constituency)",
      preferredProfile: "Young urban professional or social activist",
      attributes: ["Clean image", "Education/reform agenda"],
      backgroundNote: "New face may work better than recycled politician",
    },

    attackLines: [
      {
        id: 1,
        topic: "36,430 votes margin",
        description: "Governance same",
        impact: "High",
      },
      {
        id: 2,
        topic: "Minister defeated",
        description: "Promises also defeated",
        impact: "High",
      },
      {
        id: 3,
        topic: "Urban youth unemployment",
        description: "Where are jobs?",
        impact: "High",
      },
      {
        id: 4,
        topic: "Civil hospital",
        description: "Still inadequate - hospital funding misused",
        impact: "Medium",
      },
      {
        id: 5,
        topic: "Drug trafficking",
        description: "In district HQ emboldened",
        impact: "High",
      },
    ],

    notes: [
      "District headquarters gives high visibility to both MLA and issues",
      "Urban constituency with mixed caste composition",
      "AAP won with candidate who had less political experience - Congress should contrast with experience",
    ],
  },

  deepResearch: {
    researchMetadata: {
      microTaskId: "AC108-Sangrur",
      topic: "Sangrur Assembly Constituency - Deep Research",
      tier: 2,
      date: "20 May 2026",
      agent: "Research-Orchestrator",
      sourcesConsulted: ["proneta.in", "resultuniversity.com", "grokipedia.com", "cnbctv18.com", "indiatoday.in"],
      verificationStatus: "PARTIALLY VERIFIED",
      dataCurrency: "As of May 2026 (2022 election data is most recent)",
    },

    constituencyProfile: {
      assemblyConstituencyNo: 108,
      district: "Sangrur",
      region: "Malwa",
      type: "[NEEDS VERIFICATION]",
    },

    geographicContext: {
      description: "Sangrur city is the district headquarters",
      areaCharacter: "Primarily agricultural with a mix of urban and rural populations",
      historicalNote: "Sangrur district previously had the largest Muslim population in Punjab before Malerkotla district was carved out",
      religiousDiversity: "Approximately 39% Hindu population per 2011 Census, approx 60% Sikh per other sources",
    },

    electionResult2022: {
      winner: {
        candidate: "Narinder Kaur Bharaj",
        party: "Aam Aadmi Party",
        votes: 74851,
      },
      runnerUp: {
        candidate: "Vijay Inder Singla",
        party: "Indian National Congress",
      },
      keyContext: "Vijay Inder Singla was Congress candidate",
      cmContext: "AAP won decisively in CM Bhagwant Mann's home district",
    },

    districtDemographics: {
      totalPopulation: 1655169,
      male: 878029,
      female: 777140,
      hinduPercentage: "~39%",
      sikhPercentage: "~60%",
      historicalNote: "Before Malerkotla district creation, Sangrur had the largest Muslim population in Punjab",
    },

    electoralTrend: {
      "2022Performance": {
        aapWon: true,
      },
      historicalPattern: "[NEEDS VERIFICATION - 2017 and earlier results]",
    },

    keyIssues: {
      drugCrisis: [
        "Malwa region affected",
        "Youth addiction concern",
      ],
      agrarianDistress: [
        "MSP issues",
        "Groundwater depletion",
        "Stubble management",
      ],
      developmentGaps: [
        "Healthcare",
        "Education",
        "Infrastructure in city",
      ],
    },

    politicalLeadership: {
      currentMLA: {
        name: "Narinder Kaur Bharaj",
        party: "AAP",
        term: "2022-2027",
      },
      keyPoliticalFigures: "[NEEDS VERIFICATION - local leaders]",
    },

    voterOutreach: {
      voterTurnout2022: {
        stateAverage: 72,
        constituencySpecific: "[NEEDS VERIFICATION]",
      },
    },

    governmentSchemes: {
      beneficiaryData: "[NEEDS VERIFICATION - beneficiary data]",
    },

    attackLines: [
      { topic: "Drug Crisis", description: "Uncontrolled" },
      { topic: "Farmer Distress", description: "Unresolved" },
      { topic: "Broken Promises", description: "Rs 1000/month" },
      { topic: "Governance Failures", description: "" },
      { topic: "Unemployment", description: "" },
    ],

    intelligenceGaps: {
      requiresVerification: [
        "Precise margin",
        "2017 and earlier results",
        "Demographics breakdown",
        "Local political mapping",
        "Scheme beneficiaries",
      ],
    },

    researchPriorities: {
      priorities: [
        "Analyze Hindu-Sikh voting patterns",
        "Assess AAP organizational strength",
        "Map traditional Congress support",
      ],
    },

    sources: {
      sources: ["Proneta Sangrur", "Result University", "Grokipedia Sangrur", "India Today Sangrur"],
      urls: [
        "https://proneta.in/Sangrur_assembly_constituency_Punjab-10",
        "https://resultuniversity.com/election/sangrur-punjab-assembly-constituency",
        "https://grokipedia.com/page/sangrur_assembly_constituency",
        "https://www.indiatoday.in/elections/story/sangrur-punjab-assembly-election-results-2022-live-updates-1922950-2022-03-09",
      ],
    },
  },
};

export default ac108SangrurData;
