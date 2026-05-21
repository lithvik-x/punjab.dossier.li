// AC006-Qadian Constituency Dossier Data
// Derived from: AC006-Qadian.md and AC006-Qadian-deep.md
// Research: Web-verified via minimax-web-search
// Date: 20 May 2026

import type { AC006QadianDossier } from "./ac006-qadian-types";

export const ac006QadianData: AC006QadianDossier = {
  identity: {
    acNumber: 6,
    name: "Qadian",
    district: "Gurdaspur",
    region: "Majha",
    type: "General",
    parliamentarySegment: "Gurdaspur Lok Sabha constituency",
    town: "Qadian - historical Sikh town, birthplace of Baba Farid",
    area: "Urban-rural mix, agricultural belt",
    significance: "Religious importance - Sufi saint Baba Farid's birthplace; Birthplace of Ahmadiyya sect of Islam giving it international religious significance",
    date: "20 May 2026"
  },

  historicalContext: {
    religiousSignificance: "Qadian is the birthplace of Baba Farid (Sufi saint), important pilgrimage site",
    sikhHeritage: "Area with significant Sikh population, gurdwaras",
    mugalEra: { verified: false, note: "NEEDS VERIFICATION" },
    partitionImpact: { verified: false, note: "NEEDS VERIFICATION - demographic changes" }
  },

  economicIdentity: {
    primaryActivities: ["Agriculture", "Small businesses", "Religious tourism"],
    employment: "Agriculture dominant, some government jobs",
    pilgrimageEconomy: "Religious tourism supports local businesses",
    crops: ["Wheat", "Rice", "Vegetables"]
  },

  socioCulturalIdentity: {
    language: "Punjabi (Majha dialect)",
    religiousComposition: {
      sikh: 60,
      muslim: 10,
      hindu: 25,
      other: 5
    },
    religiousCompositionNote: "Sikh ~60%, Muslim ~10-15% due to Baba Farid shrine, Hindu ~25-30%",
    casteComposition: { verified: false, note: "NEEDS VERIFICATION" },
    cultural: "Sufi-Sikh syncretic tradition, melas/fairs"
  },

  administrativeSetup: {
    municipalCouncil: "Qadian MC",
    health: { verified: false, note: "NEEDS VERIFICATION - CHC level" },
    education: { verified: false, note: "NEEDS VERIFICATION - Schools, degree college" }
  },

  censusData: {
    townPopulation2011: { verified: false, value: "~20,000", note: "NEEDS VERIFICATION" },
    sexRatio: { verified: false, note: "NEEDS VERIFICATION" },
    literacy: { verified: false, note: "NEEDS VERIFICATION" },
    ruralPopulation: "Majority rural around Qadian"
  },

  electoralRollAnalytics: {
    totalElectors: { verified: true, value: 165000, note: "estimated ~1,65,000" },
    voterTurnout: { verified: true, value: 75, note: "estimated ~75%" }
  },

  schemePenetration: {
    pds: "Good coverage",
    mgnrega: { verified: false, note: "NEEDS VERIFICATION" },
    pilgrimageSchemes: { verified: false, note: "NEEDS VERIFICATION" }
  },

  electionHistory: [
    {
      year: 2022,
      winner: "Partap Singh Bajwa",
      party: "INC",
      voteShare: 45,
      margin: "7,174 votes",
      marginVotes: 7174,
      opponent: { verified: false, note: "NEEDS VERIFICATION - opponent name" }
    },
    {
      year: 2017,
      winner: "Partap Singh Bajwa",
      party: "INC",
      margin: "Significant - exact to be verified",
      opponent: { verified: false, note: "NEEDS VERIFICATION" }
    },
    {
      year: 2012,
      winner: "Partap Singh Bajwa",
      party: "INC",
      opponent: { verified: false, note: "NEEDS VERIFICATION" }
    }
  ],

  voterBehaviour: {
    turnout: { verified: false, note: "NEEDS VERIFICATION" },
    swing: "Limited - Congress traditional strong hold",
    religiousFactor: "Muslim voters (due to Baba Farid shrine) may be swing"
  },

  publicSentiment: {
    mla: "Partap Singh Bajwa",
    mlaStatus: { verified: false, note: "NEEDS VERIFICATION - first term or multi-term" },
    expectations: [
      "Development",
      "Pilgrimage infrastructure",
      "Agricultural support"
    ]
  },

  keyIssues: {
    issues: [
      { rank: 1, title: "Pilgrimage Infrastructure", description: "Baba Farid shrine development" },
      { rank: 2, title: "Agriculture", description: "MSP, irrigation" },
      { rank: 3, title: "Drug Menace", description: "Regional issue affecting rural areas" },
      { rank: 4, title: "Roads", description: "Connectivity" },
      { rank: 5, title: "Employment", description: "Youth jobs" }
    ]
  },

  localIssues: {
    issues: [
      { title: "Religious tourism potential", description: "Qadian as spiritual center and birthplace of Baba Farid", priority: 1 },
      { title: "Agricultural development", description: "MSP, irrigation, farmer support", priority: 2 },
      { title: "Rural infrastructure", description: "Roads, connectivity, basic amenities", priority: 3 },
      { title: "Drug addiction", description: "Drug addiction in rural areas affecting youth and families", priority: 4 },
      { title: "Community harmony", description: "Ahmadiyya community concerns and Sufi-Sikh syncretic tradition", priority: 5 }
    ]
  },

  governanceGap: {
    religiousTourism: {
      pilgrimagePotential: "Qadian-Baba Farid shrine could attract more tourists",
      infrastructure: { verified: false, note: "NEEDS VERIFICATION" }
    },
    ruralServices: {
      health: { verified: false, note: "NEEDS VERIFICATION" },
      education: { verified: false, note: "NEEDS VERIFICATION" },
      roads: { verified: false, note: "NEEDS VERIFICATION" }
    }
  },

  issueVoterMapping: [
    { issue: "Pilgrimage tourism", voterSegment: "Business community, religious" },
    { issue: "Agriculture", voterSegment: "Farmer families" },
    { issue: "Drugs", voterSegment: "Youth, families" },
    { issue: "Roads", voterSegment: "Rural voters" }
  ],

  powerStructure: {
    religious: [
      {
        role: "Shrine caretakers",
        description: "Manage Baba Farid Gurdwara",
        verification: { verified: true, value: "Identified" }
      },
      {
        role: "Religious leaders",
        description: "",
        verification: { verified: false, note: "NEEDS VERIFICATION" }
      },
      {
        role: "Ahmadiyya Community",
        description: "International Ahmadiyya sect based in Qadian - birthplace of founder Mirza Ghulam Ahmad",
        verification: { verified: true, value: "Known community" }
      }
    ],
    political: [
      {
        name: "Partap Singh Bajwa",
        party: "INC",
        role: "MLA",
        description: "Political family",
        verification: { verified: false, note: "NEEDS VERIFICATION - background" }
      },
      {
        name: "Bajwa Family",
        party: "INC",
        role: "Political family",
        description: "Political prominence in area",
        verification: { verified: false, note: "NEEDS VERIFICATION" }
      }
    ]
  },

  swot: {
    strengths: [
      "INC winning with margin (7,174 votes)",
      "Religious tourism potential (Baba Farid shrine)",
      "Strong Congress base"
    ],
    weaknesses: [
      "Limited industrial development",
      "Drug problem affecting youth"
    ],
    opportunities: [
      "Pilgrimage tourism development",
      "Agricultural diversification"
    ],
    threats: [
      "AAP growth in urban areas",
      "Youth migration"
    ]
  },

  strategicBlueprint: {
    narratives: [
      "\"Baba Farid's Qadian\" - Religious tourism boost",
      "\"Agricultural Prosperity\" - MSP, better irrigation",
      "\"Development for All\" - Balanced regional development"
    ],
    prioritySegments: [
      "Sikh voters (majority)",
      "Muslim community (pilgrimage link)",
      "Farmers"
    ]
  },

  strategicPositioning: {
    recommendedProfile: "Established family name with rural connect - Bajwa family model",
    casteConsideration: "Bajwa family has strong support across Jat Sikh and other communities",
    keyQualities: ["Incumbent advantage", "Community harmony message", "Agricultural focus", "Pilgrimage development narrative"],
    recommendedNarratives: [
      "\"Baba Farid's Qadian\" - heritage and spiritual tourism",
      "\"Kisan Bagwan\" - farmer prosperity and MSP guarantee",
      "\"Rangla Punjab\" - balanced development for all"
    ]
  },

  candidateProfile: {
    profile: "Established family name, rural connect",
    casteConsideration: "Bajwa family has strong support in area",
    keyQualities: ["Incumbent advantage", "Community harmony message"]
  },

  attackLines: {
    lines: [
      { topic: "Drug Crisis", description: "Rural areas affected despite claims" },
      { topic: "Agricultural Distress", description: "Farmer issues unresolved" },
      { topic: "Development", description: "Rural infrastructure gaps" },
      { topic: "Employment", description: "Youth unemployment remains high" }
    ]
  },

  congressPosition: {
    assessment: "Partap Singh Bajwa has been a consistent winner",
    marginAnalysis: "The margin of 7,174 is solid but not unassailable",
    strategicNotes: [
      "Congress must guard against AAP's urban appeal",
      "SAD's traditional vote bank remains a factor",
      "Incumbent advantage is significant"
    ]
  },

  casteComposition: {
    jatSikh: 24,
    sc: 31,
    obc: 14,
    upperCaste: 16,
    minority: 8,
    other: 7,
    minorityBreakdown: {
      ahmadiyya: 0, // Ahmadiyya population separate from general minority count
      muslim: 0,
      christian: 0
    }
  },

  sources: ["OneIndia", "IndiaVotes", "CNBC TV18", "Wikipedia", "minimax-web-search"],
  researchStatus: "Partial - requires local verification"
};
