/**
 * AC038-Adampur Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source: AC038-Adampur.md + AC038-Adampur-deep.md
 */

import type { AC038AdampurTypes } from "./ac038-adampur-types";

export const ac038AdampurData: AC038AdampurTypes = {
  header: {
    acNumber: 38,
    name: "Adampur",
    district: "Jalandhar",
    region: "Doaba",
    type: "SC",
    date: "20 May 2026",
  },

  overview: {
    description: "Adampur is an SC-reserved assembly constituency in Jalandhar district, part of the Doaba region. Known for its significant SC population, the constituency is characterized by agricultural and semi-rural characteristics.",
    administrativeSignificance: "Part of Jalandhar district in Doaba region",
    historicalSignificance: "SC-reserved seat with strong Dalit political presence",
    regionalContext: "Doaba region - known for SC population concentration",
  },

  electionResults: {
    2022: {
      year: 2022,
      winner: "Sukhwinder Singh Kotli",
      party: "Indian National Congress",
      voteShare: "~38%",
      margin: "4,567 votes",
      marginVotes: 4567,
      runnerUp: "Not specified",
      status: "Winner",
    },
    2017: {
      year: 2017,
      winner: "Not specified",
      party: "",
      status: "Not Available",
    },
    2012: {
      year: 2012,
      winner: "Pawan Kumar Tinu",
      party: "Shiromani Akali Dal",
      votes: 48171,
      runnerUp: "Satnam Singh Kainth",
      runnerUpVotes: 28865,
      status: "Winner",
    },
  },

  casteComposition: [
    { community: "SC (Mazhabi/Ramdasia)", percentage: "50-55%", category: "SC" },
    { community: "Jat Sikh", percentage: "25-30%", category: "Jat Sikh" },
    { community: "OBC", percentage: "12-15%", category: "OBC" },
    { community: "Hindu", percentage: "5-8%", category: "Hindu" },
  ],

  voterTurnout: [
    { year: 2022, percentage: "~68%", votes: 113753, verificationStatus: "Verified" },
    { year: 2017, percentage: "~74-76%", verificationStatus: "Estimated" },
  ],

  keyLocalIssues: [
    { id: 1, issue: "Drug addiction", description: "Major issue in Doaba SC communities", priority: "High" },
    { id: 2, issue: "Caste discrimination", description: "Social justice concerns", priority: "High" },
    { id: 3, issue: "Employment", description: "Limited jobs for SC youth", priority: "High" },
    { id: 4, issue: "Education", description: "Access for SC children", priority: "Medium" },
    { id: 5, issue: "Land issues", description: "Agricultural reforms", priority: "Medium" },
  ],

  congressPosition: {
    status: "CONTESTABLE",
    margin: 4567,
    marginVotes: 4567,
    keyChallenge: "Won by only 4,567 votes - very tight margin",
    threeWayContest: true,
    mainChallenger: "AAP",
    strategy: "Congress won in 2022 with tight 4,567 vote margin. Three-way contest between Congress, AAP, and SAD. Must address drug crisis and connect with SC voters deeply.",
  },

  candidateProfile: {
    preferredProfile: "Dalit rights activist, social worker, clean image",
    casteConsideration: "Mazhabi/Ramdasia Sikh essential for SC seat",
    casteNote: "Must be from Mazhabi/Ramdasia Sikh community",
    keyQualities: [
      "Deep connection with SC voters",
      "Credible stance on drug crisis",
      "Social work background",
      "Clean public image",
    ],
  },

  attackLines: [
    { id: 1, topic: "AAP SC Record", description: "What did AAP do for SC community in 4 years?", impact: "High" },
    { id: 2, topic: "Drug Addiction", description: "SC bastis destroyed, no government help", impact: "High" },
    { id: 3, topic: "Promised Benefits", description: "Rs 1000/month: SC families didn't get promised money", impact: "High" },
    { id: 4, topic: "Reservation", description: "SC students still struggling for education", impact: "High" },
    { id: 5, topic: "Dalit Representation", description: "We need someone who actually works for Dalits", impact: "High" },
  ],

  sources: {
    primary: ["Wikipedia", "IndiaVotes", "ECI data"],
    secondary: ["minimax-web-search"],
    researchStatus: "Partially verified - requires local verification",
  },

  constituencyIdentity: {
    administrative: {
      acNumber: 38,
      parliamentarySegment: "Jalandhar Lok Sabha",
      district: "Jalandhar",
      region: "Doaba",
      category: "SC",
      lokSabha: "Jalandhar",
      location: "Rural/semi-urban constituency",
    },
    historical: {
      significance: "SC-reserved seat in Doaba region",
      reservationContext: "Reserved for Scheduled Castes due to significant SC population",
    },
    economic: {
      base: "Agricultural and small industry",
      primaryActivities: ["Agriculture", "Small industry", "Agricultural labor"],
      employment: ["Agricultural labor", "Small business"],
    },
    socioCultural: {
      language: "Punjabi",
      demographics: "Predominantly SC population",
      communityNote: "Punjabi speaking with agricultural labor and small business background",
    },
  },

  demographicDeepDive: {
    scDemographics: {
      scPopulation: 31.9,
      scPercentage: "31.9% of state population",
      ruralSCPercentage: "73.3% of SC population in rural areas",
      sikhSCPercentage: "60.8% of SCs are Sikh",
      communities: ["Mazhabi", "Ad-Dharmi", "Ramdasia"],
    },
    communityComposition: {
      predominantPopulation: "SC (reserved constituency)",
      language: "Punjabi",
      occupation: "Agricultural labor and small business",
    },
    electoralRoll: {
      year: 2022,
      totalElectors: 167424,
      semiRural: true,
      agriculturalBase: true,
    },
  },

  electoralHistory: {
    pastElections: {
      historicalPattern: [
        "Congress traditionally strong among SC voters",
        "Dalit assertion politics significant",
        "BSP presence notable",
      ],
      dalitAssertion: true,
      bspPresence: true,
      congressSCVoterBase: "Congress traditionally strong among SC voters in Doaba region",
    },
    voterBehaviour: {
      coreSupport: "SC voters - Mazhabi, Ramdasia communities",
      swingFactors: "Economic issues, welfare schemes, drug crisis",
      casteFactor: "Strong - SC reserved seat requires candidate from SC community",
    },
  },

  publicSentiment: {
    keyIndicators: [
      "Welfare scheme delivery expectations",
      "Land rights and agricultural issues",
      "Employment under MGNREGA",
      "Social justice concerns",
    ],
    pulse: [
      "BSP realignment possibilities",
      "Congress-SC voter connect",
      "Government scheme delivery",
    ],
    welfareExpectations: [
      "MGNREGA employment",
      "Land rights",
      "Education access",
      "Drug crisis resolution",
    ],
  },

  keyIssues: [
    { issue: "Agricultural distress and MSP", priority: "High" },
    { issue: "Unemployment among youth", priority: "High" },
    { issue: "Land rights for SC farmers", priority: "High" },
    { issue: "Drought/water shortage in Doaba", priority: "High" },
    { issue: "Education facilities for SC children", priority: "Medium" },
  ],

  governanceGap: {
    administrativeStructure: [
      "DC Jalandhar",
      "Tehsil headquarters",
      "Block Development offices",
    ],
    governanceGaps: [
      "Agricultural infrastructure",
      "Irrigation facilities",
      "Skill development for youth",
    ],
  },

  influencersPowerStructure: {
    keyInfluencers: [
      { name: "Dalit leaders and activists", category: "Community" },
      { name: "Kisan unions", category: "Agricultural" },
      { name: "Panchayati Raj institutions", category: "Local Government" },
      { name: "SC student organizations", category: "Youth" },
      { name: "Religious leaders (Gurdwaras)", category: "Religious" },
    ],
    powerCenters: [
      { center: "Community leaders" },
      { center: "Cooperative societies" },
      { center: "Milk societies" },
    ],
  },

  strategicBlueprint: {
    congressStrategy: [
      "Dalit welfare schemes",
      "Land distribution promises",
      "Employment guarantees",
    ],
    aapStrategy: [
      "Free education promise",
      "Youth employment",
      "Health insurance scheme",
    ],
    bspStrategy: [
      "Caste-based politics",
      "Mayawati's influence",
      "Local BSP leaders",
    ],
  },

  courseChangingFactors: {
    wildcards: [
      { factor: "BSP alliance talks" },
      { factor: "Caste consolidation efforts" },
      { factor: "Land record digitization" },
      { factor: "Agricultural reforms" },
    ],
    monitoringTriggers: [
      { trigger: "MGNREGA wage payments" },
      { trigger: "Land records updates" },
      { trigger: "SC Corporation scheme disbursements" },
    ],
  },

  dataSources: {
    primary: ["Wikipedia", "IndiaVotes", "ECI data"],
    secondary: ["minimax-web-search", "Census 2011 SC data"],
    researchStatus: "Partially verified",
  },

  researchVerification: {
    method: "Web-verified via minimax-web-search",
    date: "20 May 2026",
    sources: [
      "minimax-web-search: Adampur Punjab 2022 election results winner vote share margin",
      "Census 2011 SC data",
    ],
    status: "PARTIALLY VERIFIED",
  },
};

export default ac038AdampurData;
