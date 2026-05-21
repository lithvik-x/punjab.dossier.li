/**
 * AC027-Kapurthala Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC027-Kapurthala.md, AC027-Kapurthala-deep.md
 */

import type { AC027KapurthalaTypes } from "./ac027-kapurthala-types";

export const ac027KapurthalaData: AC027KapurthalaTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 27,
    name: "Kapurthala",
    district: "Kapurthala",
    region: "Doaba",
    type: "General",
    lokSabha: "Khadoor Sahib",
    districtHQ: true,
    date: "20 May 2026",
  },

  geographicProfile: {
    areaCharacter: "Smallest districts in Punjab by area and population, Doaba region characteristics",
    terrain: "Between Beas and Satluj rivers",
    keyIdentifiers: [
      "District Headquarters - Administrative center",
      "Religious Sites - Mughal-era mosques, Gurudwaras",
      "Doaba Region - Between Beas and Satluj",
      "Sultanpur Lodhi Area - Nearby religious significance",
    ],
  },

  historicalContext: {
    formation: "Kapurthala district - one of the smallest districts in Punjab",
    historicalSignificance: "Kapurthala town known for religious sites and British-era architecture",
    localHeritage: [
      "Mughal-era mosques",
      "Gurudwaras",
      "British-era architecture",
      "Sultanpur Lodhi (religious significance)",
    ],
  },

  // ==========================================================================
  // DEMOGRAPHICS
  // ==========================================================================
  demographics: {
    religiousComposition: {
      sikh: "~60%",
      hindu: "~38%",
      other: "<2%",
    },
    casteComposition: {
      source: "District-level estimates and research",
      jathSikh: "~30-35%",
      sc: "~20-25% (Mazhabi/Ramdasia)",
      obc: "~15-18% (Tarkhan, Kashyap communities)",
      khatriArora: "~20-25% (Hindu Khatri/Arora - dominant urban business community)",
      minority: "~2-3% (Muslim)",
      other: "~5-10%",
      breakdown: [
        { category: "Jat Sikh", percentage: "~30-35%" },
        { category: "Hindu Khatri/Arora", percentage: "~20-25%" },
        { category: "SC (Mazhabi/Ramdasia)", percentage: "~20-25%" },
        { category: "OBC (Tarkhan, Kashyap)", percentage: "~15-18%" },
        { category: "Muslim", percentage: "~2-3%" },
      ],
    },
    urbanDemographics: [
      {
        townName: "Kapurthala town",
        majorityReligion: "Hindu",
        scPopulation: "62.17% (village level)",
        businessCommunity: "Khatri, Arora dominant",
      },
    ],
    scPopulationDistrict: "33.94% (district average)",
  },

  // ==========================================================================
  // ELECTIONS
  // ==========================================================================
  electionHistory: {
    results2022: {
      winner: "Rana Gurjeet Singh",
      party: "Indian National Congress",
      votes: 44096,
      margin: "7,304 votes",
      voteShare: "~44% (estimated)",
      runnerUp: "Manju Rana",
      runnerUpParty: "AAP",
      runnerUpVotes: 36792,
      totalElectors: "149,885 (or 150,111 as per some sources)",
      voterTurnout: "68.42%",
      votesPolled: 102700,
    },
    results2017: {
      winner: "Rana Gurjit Singh",
      party: "INC",
    },
    results2012: {
      winner: "Rana Gurjeet Singh",
      party: "INC",
    },
    historicalTrend:
      "Congress win (7,304 margin) - Congress held seat against AAP wave. Indicates strong local Congress organization. Rana Gurjeet Singh has won 3 consecutive terms (2012, 2017, 2022).",
    congressHold: true,
    margin: "7,304 votes",
  },

  voterTurnout: [
    { year: 2022, percentage: "68.42%", votesPolled: 102700 },
    { year: 2017, percentage: "~75-77%" },
  ],

  // ==========================================================================
  // PUBLIC SENTIMENT
  // ==========================================================================
  publicSentiment: {
    currentMood: "Satisfied with Congress - Kapurthala has been Congress bastion",
    satisfactionLevel: "Mixed - AAP victory in neighboring areas creates concern",
    keyDrivers: [
      {
        rank: 1,
        title: "Local Leadership",
        description: "Rana family influence - political dynasty in area",
      },
      {
        rank: 2,
        title: "District Politics",
        description: "Kapurthala has own identity within Doaba region",
      },
      {
        rank: 3,
        title: "Development",
        description: "Town infrastructure needs",
      },
      {
        rank: 4,
        title: "Agricultural",
        description: "Rural voter concerns",
      },
      {
        rank: 5,
        title: "Religious Tourism",
        description: "Sultanpur Lodhi development factor",
      },
    ],
    grievances: [
      { issue: "Town roads and drainage" },
      { issue: "Healthcare facilities" },
      { issue: "University/college needs" },
      { issue: "Employment" },
    ],
    sentimentNotes:
      "Rana Gurjeet Singh won twice against AAP. However, AAP's victory in neighboring areas and state government schemes create mixed sentiment.",
  },

  // ==========================================================================
  // GOVERNANCE
  // ==========================================================================
  governanceGap: {
    currentMLA: "Rana Gurjeet Singh",
    party: "Congress",
    district: "Kapurthala",
    stateGovernment: "AAP government (opposition)",
    activeSchemes: [
      { name: "Mera Ghar, Mera Maan" },
      { name: "Ashirwad Scheme" },
      { name: "Aam Aadmi Clinics" },
      { name: "Free electricity" },
    ],
    developmentGaps: [
      { area: "Kapurthala town heritage development", status: "Needed" },
      { area: "University establishment", status: "[NEEDS VERIFICATION]" },
      { area: "Healthcare infrastructure", status: "Gaps exist" },
      { area: "Industrial Training Institute", status: "Needed" },
    ],
  },

  // ==========================================================================
  // LOCAL ISSUES
  // ==========================================================================
  localIssues: {
    topIssues: [
      {
        rank: 1,
        title: "Infrastructure",
        description: "Town roads, heritage preservation",
      },
      {
        rank: 2,
        title: "Education",
        description: "Degree college needs",
      },
      {
        rank: 3,
        title: "Healthcare",
        description: "District hospital upgrade",
      },
      {
        rank: 4,
        title: "Employment",
        description: "Jobs for educated youth",
      },
      {
        rank: 5,
        title: "Religious Tourism",
        description: "Sultanpur Lodhi development",
      },
    ],
    kapurthalaSpecific: [
      { issue: "Heritage site preservation" },
      { issue: "Municipal infrastructure" },
      { issue: "Taxila Anantpur connectivity" },
      { issue: "Industrial development" },
    ],
  },

  // ==========================================================================
  // POWER STRUCTURE
  // ==========================================================================
  powerStructure: {
    politicalActors: [
      {
        name: "Rana Gurjeet Singh",
        role: "Congress MLA",
        party: "INC",
        notes: "2-term incumbent (2012, 2017, 2022)",
      },
      {
        name: "Manju Rana",
        role: "AAP candidate - runner-up 2022",
        party: "AAP",
      },
      {
        name: "District Congress Leaders",
        role: "Local party organization",
        notes: "[NEEDS VERIFICATION]",
      },
      {
        name: "BJP Leaders",
        role: "Regional leadership",
        notes: "[NEEDS VERIFICATION]",
      },
    ],
    communityInfluencers: [
      { name: "Rana Family", type: "Political dynasty" },
      { name: "Khatri Community", type: "Business class influence" },
      { name: "Gurudwara Committees", type: "Religious authority" },
      { name: "Ex-Servicemen", type: "Veteran community" },
    ],
    congressHold: true,
    mainOpposition: "AAP",
    localIdentity: [
      "Congress holds seat",
      "Rana family influence",
      "Doaba region identity",
      "Kapurthala district identity",
    ],
  },

  // ==========================================================================
  // MEDIA
  // ==========================================================================
  mediaLandscape: {
    localMedia: [
      "Punjabi press",
      "Doaba newspapers",
      "WhatsApp networks",
      "Local cable",
    ],
    informationFlow: [
      "District journalism",
      "Political WhatsApp groups",
      "Cable TV networks",
    ],
  },

  // ==========================================================================
  // PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyLocations: [
      { name: "Kapurthala city", type: "Urban center" },
      { name: "Mughal-era monuments", type: "Heritage" },
      { name: "Gurudwara sites", type: "Religious" },
      { name: "Agricultural hinterland", type: "Rural" },
      { name: "Sultanpur Lodhi", type: "Religious tourism" },
    ],
    infrastructure: {
      connectivity: [
        "Rail connectivity",
        "Road to Jalandhar",
        "Road to Phagwara",
      ],
      facilities: [
        "District hospital",
        "Government college",
        "Mughal-era monuments",
        "Gurudwara sites",
      ],
    },
  },

  // ==========================================================================
  // SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: {
      items: [
        "Congress stronghold",
        "Rana family influence - political dynasty",
        "Heritage tourism potential (Mughal-era monuments, Sultanpur Lodhi)",
        "Administrative center (District HQ)",
        "Doaba region identity",
      ],
    },
    weaknesses: {
      items: [
        "Small district limitations",
        "Limited industry",
        "Healthcare gaps",
        "AAP government in power (opposition at state level)",
        "Town roads and drainage issues",
      ],
    },
    opportunities: {
      items: [
        "Heritage tourism development",
        "NRI investment potential",
        "Education hub possibility",
        "Religious tourism (Sultanpur Lodhi)",
        "Industrial development potential",
      ],
    },
    threats: {
      items: [
        "AAP schemes appeal to voters",
        "Youth outmigration",
        "Agricultural distress",
        "Anti-incumbency risk",
        "Drug crisis in Doaba region",
      ],
    },
  },

  // ==========================================================================
  // STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: {
    congress: {
      candidate: "Rana family or strong local candidate",
      caste: "Khatri + Jat Sikh + general",
      issues: ["Local development", "Heritage preservation", "Jobs"],
      campaign: "Rana family's work, Congress for Kapurthala",
      defense: "Hold against AAP",
    },
    aap: {
      candidate: "Strong challenger candidate",
      caste: "SC + urban + youth",
      issues: ["AAP schemes", "Change mandate"],
      campaign: "Congress neglected Kapurthala",
    },
  },

  // ==========================================================================
  // COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: {
    wildcards: [
      { factor: "Rana Family - succession planning" },
      { factor: "Congress-SAD Alliance - local impact" },
      { factor: "BJP - any third front possibility" },
      { factor: "Heritage tourism promotion" },
    ],
    triggers: [
      { event: "State government schemes" },
      { event: "Local development announcements" },
      { event: "Candidate selection" },
      { event: "Alliance decisions" },
    ],
  },

  // ==========================================================================
  // POLITICAL STRATEGY
  // ==========================================================================
  politicalStrategy: {
    recommendedCandidate: {
      caste: "Hindu Khatri/Arora background (dominant urban)",
      profile: "Current MLA with development credentials",
      keyQualification: "Incumbent advantage, must highlight work done",
      mustDo: "Differentiate from AAP's broken promises",
    },
    attackLines: [
      { line: "Manju Rana: AAP candidate who promises everything, delivers nothing" },
      { line: "AAP's 4-year rule: Kapurthala ignored, all focus on cities" },
      { line: "Broken promise: Rs 1000/month for women not implemented" },
      { line: "State of roads: Same condition as 2017, no improvement" },
      { line: "Jobs: Where are the jobs for local youth?" },
    ],
    congressPosition: {
      status: "STRONG",
      incumbentName: "Rana Gurjeet Singh",
      termCount: 3,
      mainChallenger: "AAP (Manju Rana)",
      positionNotes:
        "Rana Gurjeet Singh is a THREE-term incumbent (2012, 2017, 2022). He has consistently won. Congress has strong position here. Need to focus on DEVELOPMENT RECORD.",
    },
  },

  // ==========================================================================
  // DATA GAPS
  // ==========================================================================
  dataGaps: {
    requiredVerification: [
      { item: "2017 detailed election results" },
      { item: "Caste demographics (constituency-specific)" },
      { item: "Voter turnout data (booth-level)" },
      { item: "MLA performance assessment" },
      { item: "Local party organization details" },
      { item: "Lok Sabha verification" },
      { item: "University establishment status" },
      { item: "Taxila Anantpur connectivity" },
      { item: "District Congress Leaders names" },
      { item: "BJP Leaders names" },
    ],
    intelligencePriorities: [
      { priority: "Rana family influence assessment" },
      { priority: "Booth-level Congress strength" },
      { priority: "AAP organization and structure" },
      { priority: "Caste arithmetic (detailed)" },
    ],
  },

  // ==========================================================================
  // DOCUMENT METADATA
  // ==========================================================================
  documentStatus: "Partial - Requires field verification",
  preparedFor: "Punjab Congress 2027 Election Intelligence",
  classification: "Internal Research Document",
};
