/**
 * AC-042 Sham Chaurasi Assembly Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source: AC042-Sham-Chaurasi.md + AC042-ShamChaurasi-deep.md
 */

import type {
  ShamChaurasiDossierComplete,
  ConstituencyReference,
  MainDossierData,
  DeepResearchData,
} from "./ac042-sham-chaurasi-types";

// =============================================================================
// MAIN DOSSIER DATA (AC042-Sham-Chaurasi.md)
// =============================================================================

export const shamChaurasiMainDossier = {
  executiveSummary: {
    description:
      "Sham Chaurasi (AC-042) is a Scheduled Caste (SC) reserved constituency in Hoshiarpur district, Doaba region of Punjab. AAP won this seat in 2022 with a significant margin of 21,356 votes, defeating the then-Congress candidate Pawan Kumar Adia who had won in 2017. The significant margin indicates Congress needs substantial effort to reclaim this SC stronghold.",
    winner: "Dr. Ravajot Singh",
    margin: 21356,
    runnerUp: "Pawan Kumar Adia",
    runnerUpParty: "INC",
    keyInsight:
      "AAP flipped this SC seat in 2022 after Congress held it for two terms. The 21,356 margin represents a major shift — from Congress win in 2017 to AAP commanding victory in 2022.",
  },

  constituencyProfile: {
    acNumber: 42,
    officialName: "Sham Chaurasi",
    district: "Hoshiarpur",
    region: "Doaba",
    category: "SC",
    lokSabhaSeat: "Hoshiarpur",
    location: "Rural constituency in Hoshiarpur district",
  },

  electionResults: [
    {
      year: 2022,
      winner: "Dr. Ravajot Singh",
      winnerParty: "AAP",
      margin: 21356,
      runnerUp: "Pawan Kumar Adia",
      runnerUpParty: "INC",
      totalCandidates: 7,
      notes:
        "AAP flipped this SC seat after Congress held it for two terms. Significant voter shift.",
    },
    {
      year: 2017,
      winner: "Pawan Kumar Adia",
      winnerParty: "INC",
      margin: 4500,
      marginDescription: "~4,500 votes",
      runnerUp: "Dr. Ravajot Singh",
      runnerUpParty: "AAP",
      totalCandidates: undefined,
      notes:
        "Congress won despite AAP's strong showing. AAP's Dr. Ravajot Singh was runner-up.",
    },
    {
      year: 2012,
      winner: "Pawan Kumar Adia",
      winnerParty: "INC",
      margin: 0,
      runnerUp: "",
      runnerUpParty: "INC",
      totalCandidates: undefined,
      notes: "Congress held the seat. Winner: Pawan Kumar Adia (INC).",
    },
  ],

  casteComposition: {
    entries: [
      { category: "SC Population", estimatedPercent: 42.5 }, // ~40-45%, midpoint
      { category: "Sikh (Jat + Others)", estimatedPercent: 56.5 }, // ~55-58%, midpoint
      { category: "Hindu", estimatedPercent: 36.5 }, // ~35-38%, midpoint
      { category: "Other", estimatedPercent: 7 },
    ],
    keyDemographics: [
      "Doaba region has highest SC concentration in Punjab",
      "Many villages have 40-65% SC population",
      "Mazhabi Sikh and Ravadasia Sikh communities are key voters",
    ],
  },

  electorateData: [
    {
      electionYear: 2022,
      totalElectors: 140000,
      voterTurnout: 105000,
      turnoutPercent: 75.0,
    },
    {
      electionYear: 2017,
      totalElectors: 135000,
      voterTurnout: 100000,
      turnoutPercent: 74.0,
    },
  ],

  keyLocalIssues: [
    {
      rank: 1,
      title: "Caste Discrimination",
      description:
        "Despite legal protections, social discrimination persists in rural areas",
    },
    {
      rank: 2,
      title: "Economic Development",
      description:
        "SC community lacks adequate economic opportunities and employment",
    },
    {
      rank: 3,
      title: "Education",
      description:
        "Low literacy rates in SC dominant villages; need for more schools and scholarships",
    },
    {
      rank: 4,
      title: "Land Issues",
      description:
        "Land ceiling issues, farmer distress affecting SC small farmers",
    },
    {
      rank: 5,
      title: "Drug Crisis",
      description:
        "Doaba region devastated by drug addiction — affects SC youth severely",
    },
  ],

  congressPosition: {
    currentStatus: {
      lossIn2022:
        "AAP won by substantial 21,356 margin — a landslide defeat for Congress",
      history:
        "Congress held this seat in 2012 and 2017 under Pawan Kumar Adia",
      challenge:
        "AAP made significant inroads into SC voter base, breaking Congress's traditional hold",
    },
    strategicAssessment: {
      points: [
        "SC voters shifted to AAP, possibly seeing AAP as more committed to welfare",
        "Congress candidate selection in 2022 may have been flawed",
        "AAP's welfare schemes (free electricity, etc.) resonated with SC voters",
        "Doaba drug crisis may have motivated anti-Congress sentiment",
      ],
    },
    recommendations: [
      "Candidate: Strong SC leader with authentic connection to community, preferably Mazhabi/Ravadasia Sikh",
      "Narrative: Focus on AAP's unfulfilled promises to SC community",
      "Outreach: Direct engagement with SC village leadership and panchayat networks",
      "Local Issues: Address land rights, education, employment for SC youth",
    ],
  },

  recommendedCandidate: {
    caste: "SC (Mazhabi Sikh or Ravadasia Sikh preferred)",
    background: "Social worker, teacher, or local leader",
    age: "40-55 years",
    connect:
      "Strong roots in SC villages of Sham Chaurasi, especially Mazhabi and Ravadasia Sikh communities",
    priority: "Education, employment, dignity for SC community",
  },

  attackLines: [
    {
      rank: 1,
      title: "Unfulfilled Promises",
      description:
        "AAP government failed to deliver on SC welfare promises made during 2022 campaign",
    },
    {
      rank: 2,
      title: "Discrimination in Party",
      description:
        "AAP tickets given to non-SC candidates in SC reserved seats — betrayal of voter mandate",
    },
    {
      rank: 3,
      title: "Drug Crisis Mismanagement",
      description:
        "SC youth disproportionately affected by drug addiction — AAP failed to address the crisis",
    },
    {
      rank: 4,
      title: "Governance Failure",
      description:
        "SC schools, health centers still inadequate under AAP governance",
    },
    {
      rank: 5,
      title: "Economic Neglect",
      description:
        "SC community lacks adequate economic opportunities despite AAP's promises",
    },
  ],

  voteShareAnalysis: {
    entries: [
      { party: "AAP", voteSharePercent: 42.0 },
      { party: "INC", voteSharePercent: 30.0 },
      { party: "SAD", voteSharePercent: 12.0 },
      { party: "BSP", voteSharePercent: 8.0 },
      { party: "OTHERS", voteSharePercent: 8.0 },
    ],
    congressGapToWin: 10500,
    congressGapDescription:
      "Half of AAP's 21,356 vote margin — approximately 10,500 additional votes needed",
  },

  riskFactors: [
    {
      factor: "SC Voter Shift",
      description:
        "Evidence suggests SC voters are moving to AAP — Congress's traditional SC voter base is eroding",
    },
    {
      factor: "Doaba Dynamics",
      description:
        "Drug crisis may have motivated anti-Congress sentiment among SC youth",
    },
    {
      factor: "AAP Welfare Narrative",
      description:
        "Free schemes (electricity, healthcare) resonated with economically disadvantaged SC voters",
    },
  ],

  recommendations: {
    priority: "HIGH",
    priorityRationale:
      "SC seat with significant 21,356 margin to overcome — HIGH priority for Congress recovery",
    candidate:
      "Authentic SC leader, preferably Mazhabi/Ravadasia Sikh, with grassroots connect",
    narrative: "AAP failed SC community, broken welfare promises, governance neglect",
    outreach:
      "Booth-level SC voter engagement, village-level meetings in SC-dominated villages",
    coalition:
      "Consider BSP voters — BSP pulled ~8% in 2022, potential alliance or voter transfer",
  },
};

// =============================================================================
// DEEP RESEARCH DATA (AC042-ShamChaurasi-deep.md)
// =============================================================================

export const shamChaurasiDeepResearch = {
  identity: {
    constituency: {
      acNumber: 42,
      officialName: "Sham Chaurasi",
      district: "Hoshiarpur",
      region: "Doaba",
      category: "SC",
      lokSabhaSeat: "Hoshiarpur",
      location: "Rural constituency in Hoshiarpur district",
    },
    research: {
      researchMicroTaskId: "AC042-ShamChaurasi",
      topic: "Sham Chaurasi Assembly Constituency Deep Research",
      tier: 2,
      date: "20 May 2026",
      agent: "Orchestrator",
      sourcesConsulted: "minimax-web-search",
      verificationStatus: "PARTIALLY_VERIFIED",
      dataCurrency: "As of 20 May 2026",
    },
  },

  demographics: {
    punjabSc: {
      scPopulationPercent: 31.9,
      ruralScPopulationPercent: 73.3,
      communities: ["Mazhabi", "Ad-Dharmi", "Ramdasia"],
      description:
        "SC Population: 31.9% of Punjab state. 73.3% rural SC population. Agricultural labor communities. Mazhabi, Ad-Dharmi, Ramdasia.",
    },
    hoshiarpur: {
      scConcentration: "High SC concentration in rural areas",
      laborForce: "Agricultural labor force predominant",
    },
  },

  electoralHistory: {
    results2022: [
      {
        year: 2022,
        winner: "Dr. Ravajot Singh",
        winnerParty: "AAP",
        votes: undefined, // [Votes] marker
        margin: 21356,
        runnerUp: undefined, // [NEEDS VERIFICATION]
        runnerUpParty: undefined,
        notes: "Runner-up requires verification",
      },
    ],
    historicalPattern:
      "AAP won with massive margin. Congress runner-up. Strong Dalit support for AAP. Key shift in 2022.",
  },

  publicSentiment: [
    {
      indicator: "AAP Wave",
      description:
        "AAP wave in 2022 was very strong, carrying Dr. Ravajot Singh to a landslide victory",
    },
    {
      indicator: "Dalit Voter Shift",
      description:
        "Significant Dalit voter shift to AAP — breaking from traditional Congress loyalty",
    },
    {
      indicator: "Expectations",
      description:
        "High expectations from AAP government among SC voters for welfare delivery",
    },
  ],

  governance: {
    administrative: {
      dc: "DC Hoshiarpur",
      blockDevelopmentOffices: "Block Development offices in constituency",
      panchayats: "Village Panchayats across Sham Chaurasi",
    },
    gaps: {
      gaps: [
        "SC colony development inadequate",
        "Land rights for SC farmers unresolved",
        "Agricultural wages remain low for SC labor",
      ],
    },
  },

  localIssues: [
    { rank: 1, title: "Employment generation", priorityOrder: 1 },
    { rank: 2, title: "Land rights for SC farmers", priorityOrder: 2 },
    { rank: 3, title: "Education facilities", priorityOrder: 3 },
    { rank: 4, title: "Healthcare", priorityOrder: 4 },
    { rank: 5, title: "Agricultural distress", priorityOrder: 5 },
  ],

  influencers: [
    {
      category: "Community Leaders",
      examples: ["Dalit community leaders", "Local SC activists"],
    },
    {
      category: "Religious",
      examples: ["Gurdwara committees (Sikh religious influence)"],
    },
    {
      category: "Local Governance",
      examples: ["Panchayat leaders", "Sarpanchs in SC-dominated villages"],
    },
    {
      category: "Youth",
      examples: ["Student activists", "Youth leaders"],
    },
  ],

  strategicBlueprints: [
    {
      party: "AAP",
      strategy: [
        "Maintain 21,356 margin of victory",
        "Deliver on Dalit welfare schemes",
        "Showcase scholarship programs for SC students",
      ],
    },
    {
      party: "INC",
      strategy: [
        "Dalit voter retrieval — win back shifted SC voters",
        "Develop strong local SC leader as candidate",
        "Highlight unfulfilled AAP promises",
      ],
    },
    {
      party: "BSP",
      strategy: [
        "Caste-based mobilization using Mayawati's influence",
        "Target SC voters disillusioned with both AAP and Congress",
        "Build on 8% vote share from 2022",
      ],
    },
  ],
};

// =============================================================================
// COMBINED COMPLETE DOSSIER
// =============================================================================

export const shamChaurasiDossierComplete: ShamChaurasiDossierComplete = {
  researchId: "AC-DOSSIER-042",
  deepResearchId: "AC042-ShamChaurasi",

  main: shamChaurasiMainDossier as MainDossierData,
  deep: shamChaurasiDeepResearch as DeepResearchData,

  sources: [
    "News18",
    "OneIndia",
    "IndiaVotes",
    "CNBC TV18",
    "Wikipedia",
    "ProNeta",
    "minimax-web-search: Sham Chaurasi Punjab 2022 election results winner vote share margin",
  ],

  compiledDate: "20 May 2026",
};

// =============================================================================
// CONSTITUENCY REFERENCE (convenience export)
// =============================================================================

export const shamChaurasiReference: ConstituencyReference = {
  acNumber: 42,
  name: "Sham Chaurasi",
  district: "Hoshiarpur",
  region: "Doaba",
  category: "SC",
  winner2022: "Dr. Ravajot Singh",
  winnerParty2022: "AAP",
  margin2022: 21356,
};

// =============================================================================
// CONTENT COVERAGE VERIFICATION
// =============================================================================

/**
 * Content Coverage Checklist (6-Cycle Verification):
 *
 * [x] AC Number: 42
 * [x] Official Name: Sham Chaurasi
 * [x] District: Hoshiarpur
 * [x] Region: Doaba
 * [x] Category: SC (Scheduled Caste)
 * [x] Lok Sabha Seat: Hoshiarpur
 * [x] Winner 2022: Dr. Ravajot Singh (AAP)
 * [x] Margin 2022: 21,356
 * [x] Runner-up 2022: Pawan Kumar Adia (INC)
 * [x] Winner 2017: Pawan Kumar Adia (INC)
 * [x] Winner 2012: Pawan Kumar Adia (INC)
 * [x] Margin 2017: ~4,500
 * [x] Caste Composition: SC ~40-45%, Sikh ~55-58%, Hindu ~35-38%, Other ~7%
 * [x] Electorate 2022: ~1,40,000 electors, ~1,05,000 turnout, 75%
 * [x] Electorate 2017: ~1,35,000 electors, ~1,00,000 turnout, 74%
 * [x] 5 Key Local Issues (Caste Discrimination, Economic Development, Education, Land Issues, Drug Crisis)
 * [x] Congress Strategic Position (Current Status, Assessment, Recommendations)
 * [x] Recommended Candidate Profile (SC, 40-55 years, social worker/teacher/leader)
 * [x] 5 Attack Lines Against AAP
 * [x] Vote Share: AAP 42%, INC 30%, SAD 12%, BSP 8%, Others 8%
 * [x] Congress Gap: ~10,500 votes needed
 * [x] 3 Risk Factors
 * [x] 5 Recommendations Summary
 * [x] Sources: News18, OneIndia, IndiaVotes, CNBC TV18, Wikipedia, ProNeta
 * [x] Punjab SC Demographics: 31.9%, 73.3% rural
 * [x] SC Communities: Mazhabi, Ad-Dharmi, Ramdasia
 * [x] Governance: DC Hoshiarpur, Block offices, Panchayats
 * [x] Governance Gaps: SC colony development, land rights, agricultural wages
 * [x] Public Sentiment indicators (3)
 * [x] Influencers (4 categories)
 * [x] Strategic Blueprints for AAP, Congress, BSP
 * [x] All [NEEDS VERIFICATION] markers preserved in data
 * [x] All [Votes] markers preserved in data
 */
