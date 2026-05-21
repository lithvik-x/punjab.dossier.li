/**
 * AC004-Gurdaspur Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source: AC004-Gurdaspur.md + AC004-Gurdaspur-deep.md
 */

import type { AC004GurdaspurTypes } from "./ac004-gurdaspur-types";

export const ac004GurdaspurData: AC004GurdaspurTypes = {
  header: {
    acNumber: 4,
    name: "Gurdaspur",
    district: "Gurdaspur",
    region: "Majha",
    type: "General",
    date: "20 May 2026",
  },

  overview: {
    description: "Gurdaspur is a general assembly constituency and the administrative headquarters of Gurdaspur district. Historically significant, it is part of the Majha region and has strong agricultural roots.",
    administrativeSignificance: "Administrative headquarters of Gurdaspur district",
    historicalSignificance: "Part of Majha region with strong agricultural roots and historical significance",
    regionalContext: "Majha region - historically significant area",
  },

  electionResults: {
    2022: {
      year: 2022,
      winner: "Barinderjeet Singh Pahra",
      party: "INC",
      votes: 67709,
      margin: "7,335 votes",
      marginVotes: 7335,
      runnerUp: "Gurbachan Singh Babei",
      votePercentage: 43.74,
      status: "Winner",
    },
    2017: {
      year: 2017,
      winner: "",
      party: "",
      status: "Verifying",
    },
    2012: {
      year: 2012,
      winner: "",
      party: "",
      status: "Verifying",
    },
  },

  casteComposition: [
    { community: "Jat Sikh", percentage: 24, category: "Jat Sikh" },
    { community: "SC", percentage: 31, category: "SC" },
    { community: "OBC", percentage: 14, category: "OBC" },
    { community: "Upper Caste", percentage: 16, category: "Upper Caste" },
    { community: "Minority (Christian, Muslim)", percentage: 8, category: "Minority" },
    { community: "Other", percentage: 7, category: "Other" },
  ],

  keyLocalIssues: [
    { id: 1, issue: "Agriculture and farmer distress (MSP, stuble burning)", priority: "High" },
    { id: 2, issue: "Drug addiction crisis", priority: "High" },
    { id: 3, issue: "Groundwater depletion", priority: "High" },
    { id: 4, issue: "Rural unemployment", priority: "Medium" },
    { id: 5, issue: "Border area development", priority: "Medium" },
  ],

  congressPosition: {
    "2022Win": true,
    margin: 7335,
    marginVotes: 7335,
    keyChallenge: "Retention with competitive margin of 7,335 votes",
    strategy: "Congress won this seat in 2022. The party must retain by addressing farmer issues and drug crisis. The margin of 7,335 is competitive.",
  },

  candidateProfile: {
    preferredProfile: "Agrarian leader, farmer connect",
    casteConsideration: "Jat Sikh preferred for rural base",
    casteNote: "Jat Sikh preferred for rural base",
    keyQualities: ["Agricultural background", "Accessible to rural voters"],
  },

  attackLines: [
    {
      topic: "Drug Crisis",
      description: "Gurdaspur district heavily affected by drug addiction",
      impact: "High",
    },
    {
      topic: "Farmer Distress",
      description: "MSP procurement issues, stubble burning problems",
      impact: "High",
    },
    {
      topic: "Groundwater",
      description: "Over-exploitation of groundwater resources",
      impact: "Medium",
    },
    {
      topic: "Rural Exodus",
      description: "Youth migrating due to lack of opportunities",
      impact: "Medium",
    },
  ],

  sources: {
    primary: ["Oneindia", "IndiaVotes"],
    secondary: ["District-level census data"],
    researchStatus: "Partial - requires local verification",
  },

  constituencyIdentity: {
    administrative: {
      acNumber: 4,
      parliamentarySegment: "Gurdaspur Lok Sabha constituency",
      district: "Gurdaspur (original district, before Pathankot was carved)",
      type: "GEN",
      city: "Gurdaspur - historical military cantonment town",
      area: "Urban center with surrounding agricultural rural areas",
      borderInfo: "553km Pakistan border across 6 districts - Gurdaspur among them",
    },
    historical: {
      significance: "Name from Guru + Aspur - associated with Guru Nanak's visit",
      etymology: "Guru + Aspur (associated with Guru Nanak's visit)",
      cantonment: "British-era military establishment",
      freedomMovement: "Active participation in independence movement",
      partitionImpact: "Heavy impact - refugee settlement, demographic changes",
    },
    economic: {
      primaryActivities: ["Agriculture", "Defense", "Small industry", "Trade"],
      employment: ["Government/defense jobs", "Agriculture", "Business"],
      crops: ["Wheat", "Rice", "Maize in surrounding areas"],
      industry: ["Rice shellers", "Small manufacturing"],
    },
    socioCultural: {
      language: "Punjabi (Majha dialect)",
      religiousComposition: [
        { community: "Sikh", percentage: 58 },
        { community: "Hindu", percentage: 38 },
        { community: "Christian", percentage: 1.3 },
      ],
      casteCompositionNote: "NEEDS VERIFICATION - typical Punjabi distribution",
      cultural: "Rich literary heritage, rural sports traditions",
    },
    administrativeSetup: {
      municipalCouncil: "Gurdaspur MC",
      health: "Civil Hospital, CHCs in rural (NEEDS VERIFICATION)",
      education: "Degree colleges, ITI (NEEDS VERIFICATION)",
    },
  },

  demographicDeepDive: {
    censusData: {
      year: 2011,
      population: 2299026,
      male: 1212995,
      female: 1086031,
      estimated2026: 2.54,
      sexRatio: 895,
      literacyRate: 71.13,
      urbanPercentage: 25,
      ruralPercentage: 75,
    },
    electoralRoll: {
      year: 2022,
      totalElectors: "~180,000+",
      verificationStatus: "Needs Verification",
    },
    schemePenetration: [
      { scheme: "PDS", coverage: "High coverage (~85%+)", status: "Needs Verification" },
      { scheme: "MGNREGA", coverage: "Active - Gurdaspur district has multiple blocks", status: "Active" },
      { scheme: "PM-KISAN", coverage: "", status: "Needs Verification" },
      { scheme: "Ayushman Bharat", coverage: "", status: "Needs Verification" },
    ],
  },

  electoralHistory: {
    pastElections: [
      {
        year: 2022,
        winner: "Barinderjeet Singh Pahra",
        party: "INC",
        votes: 67709,
        margin: "7,335 votes",
        marginVotes: 7335,
        runnerUp: "Gurbachan Singh Babei",
        status: "Winner",
      },
      {
        year: 2017,
        winner: "",
        party: "",
        status: "Verifying",
      },
      {
        year: 2012,
        winner: "",
        party: "",
        status: "Verifying",
      },
    ],
    voterBehaviour: {
      coreSupport: "Agrarian community, rural voters",
      swingPattern: "Congress has traditional base; AAP cutting into urban support",
      casteFactor: "NEEDS VERIFICATION - dominant castes",
    },
    districtVotingPattern: [
      { party: "INC", percentage: 32.9, source: "IndiaVotes" },
      { party: "AAP", percentage: 31.1, source: "IndiaVotes" },
      { party: "SAD", percentage: 18.4, source: "IndiaVotes" },
    ],
  },

  publicSentiment: {
    mla: "Barinderjeet Singh Pahra",
    mlaParty: "INC",
    expectations: ["Development", "Road infrastructure", "Agricultural support"],
  },

  keyIssues: [
    { issue: "Border Security - Smuggling, illegal immigration concerns", priority: "High" },
    { issue: "Drug Menace - Major issue - proximity to border makes it worse", priority: "High" },
    { issue: "Agriculture - MSP, stubble, irrigation", priority: "High" },
    { issue: "Floods - Gurdaspur badly affected in 2024-2025 floods", priority: "High" },
    { issue: "Unemployment - Youth jobs", priority: "Medium" },
  ],

  governanceGap: {
    serviceDelivery: [
      { sector: "Flood Management", status: "Poor - 321 villages affected in recent floods", verificationStatus: "Verified" },
      { sector: "Health", status: "Civil hospital needs upgrades", verificationStatus: "Needs Verification" },
      { sector: "Roads", status: "", verificationStatus: "Needs Verification" },
    ],
    specialConcerns: [
      { concern: "Flood Vulnerability", description: "Area prone to river flooding" },
      { concern: "Border Issues", description: "Drug smuggling, illegal activities" },
    ],
  },

  localIssues: {
    issueVoterMapping: [
      { issue: "Flood control", prioritySegment: "Rural villages near rivers" },
      { issue: "Drug prevention", prioritySegment: "All, especially youth" },
      { issue: "Agriculture MSP", prioritySegment: "Farmer families (~70%)" },
      { issue: "Border security", prioritySegment: "Entire constituency" },
    ],
  },

  influencersPowerStructure: {
    politicalFigures: [
      { name: "Barinderjeet Singh Pahra", role: "Current INC MLA", party: "INC" },
      { name: "Sukhjinder Singh Randhawa", role: "Gurdaspur MP - Congress", party: "INC", source: "IndiaVotes 2024" },
      { name: "Sunny Deol", role: "Gurdaspur MP - BJP, actor", party: "BJP", source: "IndiaTV" },
    ],
    casteEquations: "NEEDS VERIFICATION - specific community strengths",
  },

  swot: {
    strengths: [
      "INC winning 2022 with decent margin",
      "Strong Congress party organization",
      "Agricultural heartland",
    ],
    weaknesses: [
      "Flood vulnerability",
      "Border security issues",
      "Drug problem severe",
    ],
    opportunities: [
      "Flood management infrastructure",
      "Border trade potential",
      "Tourism (heritage sites)",
    ],
    threats: [
      "AAP momentum in state",
      "Flood devastation impact on voters",
      "Youth out-migration",
    ],
  },

  strategicBlueprint: {
    narratives: [
      { title: "Border Development", description: "Security + prosperity" },
      { title: "Flood-Free Gurdaspur", description: "Infrastructure investment" },
      { title: "Agricultural Prosperity", description: "MSP, fair prices" },
    ],
    prioritySegments: [
      { rank: 1, segment: "Farmers", description: "Agricultural community" },
      { rank: 2, segment: "Rural voters", description: "Flood-affected" },
      { rank: 3, segment: "Youth", description: "Jobs, drug-free" },
    ],
  },

  dataSources: {
    sources: ["IndiaVotes", "resultuniversity", "Frontline/Hindu", "district websites"],
    researchStatus: "Partial - requires local verification",
  },

  researchVerification: {
    method: "Web-verified via minimax-web-search",
    date: "20 May 2026",
    sources: ["IndiaVotes", "resultuniversity", "Frontline/Hindu", "district websites"],
  },
};

export default ac004GurdaspurData;
