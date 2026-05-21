/**
 * AC092 - Bathinda Urban Assembly Constituency
 * Data File
 *
 * Generated through 6-cycle enhancement pipeline
 * Source: AC092-Bathinda-Urban.md (Tier 1) + AC092-BathindaUrban-deep.md (Tier 2)
 */

import type {
  BathindaUrbanConstituency,
} from "./ac092-bathinda-urban-types";

import {
  VerificationStatus,
  BathindaUrbanRegion,
  BathindaUrbanType,
  Party,
  CasteCategory,
  Religion,
  MediaType,
  ProbabilityLevel,
  ImpactLevel,
} from "./ac092-bathinda-urban-types";

// ============================================================================
// CYCLE 1-6: DATA CONSOLIDATION
// All content from both source files, organized by section
// ============================================================================

export const bathindaUrbanData: BathindaUrbanConstituency = {
  // ==========================================================================
  // RESEARCH METADATA
  // ==========================================================================
  researchMetadata: {
    microTaskId: "AC092-BathindaUrban-001",
    topic: "Bathinda Urban Assembly Constituency",
    tier: 1,
    date: "20 May 2026",
    agent: "researcher",
    sourcesConsulted: [
      "Wikipedia",
      "IndiaVotes",
      "ProNeta",
      "ECI data",
    ],
    verificationStatus: VerificationStatus.VERIFIED,
    dataCurrency: "As of 20 May 2026",
  },

  // ==========================================================================
  // SECTION 1: CONSTITUENCY IDENTITY & BASELINE
  // ==========================================================================
  constituencyIdentity: {
    acNumber: 92,
    name: "Bathinda Urban",
    district: "Bathinda",
    region: BathindaUrbanRegion.MALWA,
    type: BathindaUrbanType.GENERAL,
    geographicProfile: {
      description: "Bathinda Urban is a General category assembly constituency in Bathinda district",
      location: "Urban constituency covering Bathinda city - political and commercial center of Malwa region",
      lokSabhaConstituency: "Bathinda",
      keyAreas: [
        "Bathinda city center",
        "Commercial areas",
        "Urban residential zones",
      ],
      urbanPercentage: 100,
    },
    keyStatistics2022: {
      winner: "Jagroop Singh Gill",
      runnerUp: "Manpreet Singh Badal",
      runnerUpParty: Party.INC,
      winnerParty: Party.AAP,
      winnerVoteCount: 93057,
      margin: 63581,
      totalElectors: 229525,
      totalVotes: 162698,
      voterTurnout: 71,
    },
  },

  // ==========================================================================
  // SECTION 2: DEMOGRAPHIC DEEP-DIVE
  // ==========================================================================
  demographics: {
    casteComposition: [
      { category: CasteCategory.UPPER_CASTE, percentage: 25 },
      { category: CasteCategory.JAT_SIKH, percentage: 25 },
      { category: CasteCategory.BANIYA, percentage: 12 },
      { category: CasteCategory.SCHEDULED_CASTE, percentage: 18 },
      { category: CasteCategory.OBC, percentage: 15 },
      { category: CasteCategory.OTHER, percentage: 5 },
    ],
    religionBreakdown: [
      { religion: Religion.HINDU, percentage: 55 },
      { religion: Religion.SIKH, percentage: 43 },
      { religion: Religion.OTHER, percentage: 2 },
    ],
    votingDynamics: [
      {
        area: "Bathinda city center",
        voterBase: "Urban middle-class, trading community",
        dominantParties: ["AAP", "Congress"],
      },
      {
        area: "Urban residential zones",
        voterBase: "Educated urban voters",
        dominantParties: ["AAP", "Congress", "BJP"],
      },
    ],
    voterDemographics: {
      totalElectors: 229525,
      voterTurnout: 71,
      urbanPercentage: 100,
      description: "Fully urban constituency with educated, middle-class voters - largest electorate in region",
    },
    demographicsCensus2011: {
      population: 170000,
      populationNote: "APPROXIMATION - urban",
      casteComposition: [
        { category: CasteCategory.UPPER_CASTE, percentage: 25 },
        { category: CasteCategory.JAT_SIKH, percentage: 27 },
        { category: CasteCategory.SCHEDULED_CASTE, percentage: 17 },
        { category: CasteCategory.OBC, percentage: 10 },
      ],
      religionDistribution: [
        { religion: Religion.HINDU, percentage: 45 },
        { religion: Religion.SIKH, percentage: 50 },
        { religion: Religion.OTHER, percentage: 5 },
      ],
      districtReligionDistribution: [
        { religion: Religion.HINDU, percentage: 33 },
        { religion: Religion.SIKH, percentage: 65 },
        { religion: Religion.OTHER, percentage: 2 },
      ],
    },
  },

  // ==========================================================================
  // SECTION 3: ELECTORAL HISTORY
  // ==========================================================================
  electoralHistory: {
    results: [
      {
        year: 2022,
        winner: "Jagroop Singh Gill",
        party: Party.AAP,
        runnerUp: "Manpreet Singh Badal",
        runnerUpParty: Party.INC,
        margin: 63581,
        winnerVoteCount: 93057,
        runnerUpVoteCount: 29476,
        totalElectors: 229525,
        totalVotes: 162698,
        voterTurnout: 71,
        needsVerification: false,
      },
      {
        year: 2017,
        winner: "Manpreet Singh Badal",
        party: Party.INC,
        runnerUp: "Deepak Bansal",
        runnerUpParty: Party.AAP,
        margin: 18480,
        winnerVoteCount: 63942,
        runnerUpVoteCount: 45462,
        needsVerification: true,
      },
      {
        year: 2012,
        winner: "",
        party: "",
        runnerUp: "",
        runnerUpParty: "",
        margin: 0,
        needsVerification: true,
      },
    ],
    significance: "Major upset in 2022 - AAP's Jagroop Singh Gill defeated former Finance Minister Manpreet Singh Badal by massive 63,581 margin. Highest margin in the region demonstrates AAP's urban sweep.",
    historicalNote: "Manpreet Singh Badal served as Former Finance Minister of Punjab and is a senior Congress leader, close relative of Parkash Singh Badal. His defeat was politically significant and humiliating for the Congress party.",
  },

  // ==========================================================================
  // SECTION 4: POLITICAL SIGNIFICANCE
  // ==========================================================================
  politicalSignificance: {
    description: "Bathinda Urban is a significant urban constituency representing Bathinda city",
    keyPoints: [
      "Urban constituency - Bathinda city",
      "Manpreet Singh Badal's traditional seat - Former Finance Minister contested from here",
      "Big margin defeat - Manpreet Singh Badal lost by 63,581 votes",
      "Bathinda city - Political and commercial center of Malwa region",
    ],
  },

  // ==========================================================================
  // SECTION 5: CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    summary: "AAP holds this seat with massive 63,581 margin. Manpreet Singh Badal (big leader) lost badly. Strategic considerations for Congress.",
    strategicConsiderations: [
      "Manpreet Singh Badal's defeat was humiliating for Congress",
      "AAP has strong urban base in Bathinda",
      "Congress needs fresh candidate with urban appeal",
      "Focus on urban development failures by AAP",
      "Can leverage Manpreet Singh Badal's name recognition for 2027",
    ],
  },

  // ==========================================================================
  // SECTION 6: LOCAL ISSUES
  // ==========================================================================
  localIssues: {
    issues: [
      {
        rank: 1,
        issue: "Urban Infrastructure",
        description: "City roads, drainage systems needing improvement",
      },
      {
        rank: 2,
        issue: "Drug Menace",
        description: "Urban youth addiction crisis affecting the constituency",
      },
      {
        rank: 3,
        issue: "Health Infrastructure",
        description: "Medical college and Bathinda hospital facilities need attention",
      },
      {
        rank: 4,
        issue: "Unemployment",
        description: "Youth joblessness is a major concern",
      },
      {
        rank: 5,
        issue: "Clean Governance",
        description: "Administrative efficiency and transparency",
      },
    ],
    source: "OneIndia, ProNeta, IndiaVotes",
  },

  // ==========================================================================
  // SECTION 7: INFLUENCERS & POWER STRUCTURE
  // ==========================================================================
  influencers: {
    political: [
      {
        name: "Jagroop Singh Gill",
        party: Party.AAP,
        description: "Current MLA (2022-present); won against Manpreet Singh Badal with 63,581 margin",
        isCurrent: true,
        needsVerification: true,
      },
      {
        name: "Manpreet Singh Badal",
        party: Party.INC,
        description: "Former Finance Minister; lost 2022 election by massive margin; represents powerful Badal family",
        isCurrent: false,
        needsVerification: false,
      },
      {
        name: "Deepak Bansal",
        party: Party.AAP,
        description: "2017 runner-up from AAP",
        isCurrent: false,
        needsVerification: false,
      },
      {
        name: "Business Community Leaders",
        description: "Industrialists and traders in Bathinda city - significant political influence",
        isCurrent: false,
        needsVerification: false,
      },
    ],
    socialReligious: [
      {
        name: "Bathinda Industrialists Association",
        type: "Business Community",
        description: "Key political funding and influence in urban constituency",
      },
      {
        name: "Trading Community Leaders",
        type: "Baniya Community",
        description: "Significant trading community; politically active",
      },
    ],
  },

  // ==========================================================================
  // SECTION 8: MEDIA LANDSCAPE
  // ==========================================================================
  mediaLandscape: {
    outlets: [
      { name: "The Tribune", type: MediaType.NATIONAL },
      { name: "The Hindu", type: MediaType.NATIONAL },
      { name: "Indian Express", type: MediaType.NATIONAL },
      { name: "OneIndia", type: MediaType.REGIONAL },
      { name: "Punjab Kesari", type: MediaType.LOCAL },
      { name: "Dainik Bhaskar", type: MediaType.LOCAL },
    ],
    notes: "Regional and local media important for Bathinda urban constituency coverage",
  },

  // ==========================================================================
  // SECTION 9: PHYSICAL MAPPING
  // ==========================================================================
  physicalMapping: {
    keyGeography: "Bathinda Urban - Central Malwa region",
    description: "Fully urban constituency covering Bathinda city - commercial and political center",
    urbanVoterPercentage: 100,
    middleClassPercentage: "Significant portion",
  },

  // ==========================================================================
  // SECTION 10: GOVERNANCE GAP
  // ==========================================================================
  governanceGap: {
    mlaPerformance: {
      name: "Jagroop Singh Gill",
      party: Party.AAP,
      term: "2022-2026",
      background: null,
      attendanceRecord: null,
      workQuality: null,
      needsVerification: true,
    },
    governanceIssues: [
      "City infrastructure crumbling despite MLA claims",
      "Drug addiction in urban areas not addressed",
      "Clean governance promises unfulfilled",
    ],
    developmentWork: [
      "Urban development claims need verification",
      "Healthcare infrastructure claims need verification",
    ],
  },

  // ==========================================================================
  // SECTION 11: SWOT ANALYSIS
  // ==========================================================================
  swotAnalysis: {
    strengths: [
      {
        text: "AAP won with massive 63,581 margin - strong mandate",
        party: "AAP",
      },
      {
        text: "Manpreet Singh Badal's defeat weakens Congress position",
        party: "AAP",
      },
      {
        text: "Urban voters supported AAP - established base",
        party: "AAP",
      },
    ],
    weaknesses: [
      {
        text: "Congress can target urban voters disillusioned with AAP",
        party: "Opposition",
      },
      {
        text: "Need to deliver on development promises",
        party: "AAP",
      },
      {
        text: "Drug crisis and unemployment not addressed",
        party: "Opposition",
      },
    ],
    opportunities: [
      {
        text: "Congress needs strong candidate with urban profile",
        party: "Opposition",
      },
      {
        text: "Can leverage Manpreet Singh Badal's name recognition",
        party: "Opposition",
      },
      {
        text: "Bathinda is Home Minister Amit Shah's focus area for BJP",
        party: "Opposition",
      },
    ],
    threats: [
      {
        text: "BJP targeting Bathinda - Amit Shah involvement",
        party: "Opposition",
      },
      {
        text: "Anti-incumbency possible if governance issues persist",
        party: "Opposition",
      },
      {
        text: "Urban middle-class swing voters",
        party: "Opposition",
      },
    ],
  },

  // ==========================================================================
  // SECTION 12: STRATEGIC BLUEPRINT
  // ==========================================================================
  strategicBlueprint: [
    {
      party: "AAP",
      strategy: [
        "Continue urban development focus",
        "Highlight Manpreet Singh Badal's defeat as mandate",
        "Address drug crisis and unemployment",
        "Claim credit for any urban infrastructure work",
      ],
    },
    {
      party: "Congress",
      strategy: [
        "Field strong urban candidate (Manpreet Singh Badal or senior leader)",
        "Primary narrative: AAP failed on urban delivery",
        "Target voters: Urban middle class, youth, business community",
        "Grievance focus: Civic infrastructure, jobs, drug crisis",
        "Note: Consider Amit Shah's involvement in BJP strategy",
      ],
    },
    {
      party: "BJP",
      strategy: [
        "Amit Shah's focus area - expect targeted campaign",
        "Urban voter outreach",
        "Development narrative vs AAP",
      ],
    },
  ],

  // ==========================================================================
  // SECTION 13: COURSE-CHANGING FACTORS
  // ==========================================================================
  courseChangingFactors: [
    {
      factor: "Manpreet Singh Badal contests again",
      probability: ProbabilityLevel.MEDIUM,
      impact: ImpactLevel.HIGH,
    },
    {
      factor: "BJP fields strong candidate with central backing",
      probability: ProbabilityLevel.MEDIUM,
      impact: ImpactLevel.HIGH,
    },
    {
      factor: "AAP MLA denied ticket",
      probability: ProbabilityLevel.LOW,
      impact: ImpactLevel.HIGH,
    },
    {
      factor: "Major urban development announcement",
      probability: ProbabilityLevel.MEDIUM,
      impact: ImpactLevel.MEDIUM,
    },
    {
      factor: "Law and order incident",
      probability: ProbabilityLevel.LOW,
      impact: ImpactLevel.MEDIUM,
    },
  ],

  // ==========================================================================
  // SECTION 14: 2027 OUTLOOK
  // ==========================================================================
  outlook2027: {
    summary: "Congress can target urban voters disillusioned with AAP. Need strong candidate with urban profile. Can leverage Manpreet Singh Badal's name recognition. Note: Bathinda is also Home Minister Amit Shah's focus area for BJP.",
    targetVoters: [
      "Urban middle class",
      "Youth",
      "Business community",
    ],
    grievanceFocus: [
      "Civic infrastructure",
      "Jobs",
      "Drug crisis",
    ],
    candidateRequirements: "Strong urban candidate with clean image - doctor, engineer, or businessman background preferred",
    notes: [
      "Manpreet Singh Badal's name recognition can be leveraged",
      "AAP's urban governance failures are targetable",
      "BJP's Amit Shah involvement complicates Congress strategy",
      "Urban development is key campaign theme",
    ],
  },

  // ==========================================================================
  // INTELLIGENCE GAPS
  // ==========================================================================
  intelligenceGaps: {
    gaps: [
      { id: 1, item: "2017 margin for Manpreet Singh Badal", priority: "HIGH" },
      { id: 2, item: "Booth-wise analysis", priority: "HIGH" },
      { id: 3, item: "All 2022 candidate vote shares", priority: "HIGH" },
      { id: 4, item: "Current MLA's attendance and work quality", priority: "MEDIUM" },
      { id: 5, item: "Bathinda city development issues", priority: "MEDIUM" },
      { id: 6, item: "Jagroop Singh Gill background verification", priority: "MEDIUM" },
    ],
    verificationNotes: [
      "PARTIALLY_VERIFIED - requires local verification",
      "NEEDS_VERIFICATION indicates data requiring primary source verification",
    ],
  },

  // ==========================================================================
  // KEYWORDS FOR MONITORING
  // ==========================================================================
  keywordsForMonitoring: {
    keywordSets: [
      '"bathinda urban" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
      '"jagroop singh gill" AND "bathinda urban" AND "aap"',
      '"manpreet singh badal" AND "bathinda" AND "congress"',
      '"bathinda" AND ("drug" OR "unemployment" OR "urban development")',
      '"bathinda urban" AND ("aap" OR "congress" OR "bjp")',
    ],
  },

  // ==========================================================================
  // SUMMARY DATA (from AC092-Bathinda-Urban.md)
  // ==========================================================================
  summary: {
    acNumber: 92,
    name: "Bathinda Urban",
    district: "Bathinda",
    region: "Malwa",
    type: "General",
    date: "20 May 2026",
    overview: "Bathinda Urban (AC092) is a General category assembly constituency in Bathinda district and the city constituency of Bathinda. The constituency witnessed a major upset in 2022 when AAP's Jagroop Singh Gill defeated former Finance Minister Manpreet Singh Badal (Congress) by 63,581 votes - the highest margin in the region, demonstrating AAP's urban sweep.",
    electionResults2022: {
      winner: "Jagroop Singh Gill",
      party: "Aam Aadmi Party",
      voteShare: "~57% (93,057 votes)",
      margin: 63581,
      runnerUp: "Manpreet Singh Badal (INC)",
      totalElectors: 229525,
      totalVotes: 162698,
      voterTurnout: 71,
    },
    electionResults2017: {
      winner: "Manpreet Singh Badal",
      party: "Indian National Congress",
      voteShare: "~44% (63,942 votes)",
      margin: 18480,
      runnerUp: "Deepak Bansal (AAP)",
      needsVerification: true,
    },
    electionResults2012: {
      winner: null,
      needsVerification: true,
    },
    casteComposition: [
      { category: CasteCategory.UPPER_CASTE, percentage: 25 },
      { category: CasteCategory.JAT_SIKH, percentage: 25 },
      { category: CasteCategory.BANIYA, percentage: 12 },
      { category: CasteCategory.SCHEDULED_CASTE, percentage: 18 },
      { category: CasteCategory.OBC, percentage: 15 },
      { category: CasteCategory.OTHER, percentage: 5 },
    ],
    keyLocalIssues: [
      "Urban infrastructure - City roads, drainage",
      "Drug menace - Urban youth addiction",
      "Health infrastructure - Medical college/Bathinda hospital",
      "Unemployment - Youth joblessness",
      "Clean governance - Administrative efficiency",
    ],
    politicalSignificance: "Urban constituency; Manpreet Singh Badal's seat - Former Finance Minister contested from here; Big margin defeat - Manpreet Singh Badal lost by 63K votes; Bathinda city - Political and commercial center",
    congressStrategicPosition: "AAP holds this seat - Jagroop Singh Gill won by massive 63,581 margin. Manpreet Singh Badal (big leader) lost badly. Congress needs fresh candidate with urban profile. Focus on urban development failures by AAP government.",
    recommendedCandidateProfile: {
      profile: "Urban professional with clean image",
      background: "Doctor, engineer, or businessman",
      keyTraits: ["Known for urban development", "Accessible"],
      targetVoter: "Urban middle-class, trading community",
    },
    attackLinesAgainstAAP: [
      "City infrastructure crumbling despite MLA's claims",
      "Manpreet Singh Badal defeated - but what about his development work?",
      "Youth unemployment at peak",
      "Drug addiction in urban areas ignored",
      "Clean governance promise unfulfilled",
    ],
    sources: "https://www.oneindia.com/bathinda-urban-assembly-elections-pb-92/, https://proneta.in/Bathinda_Urban_assembly_constituency_Punjab-092, https://www.indiavotes.com/district/ac/286/2315",
  },

  // ==========================================================================
  // DEEP RESEARCH DATA (from AC092-BathindaUrban-deep.md)
  // ==========================================================================
  deepResearch: {
    executiveSummary: "Bathinda Urban (AC092) is a General category assembly constituency in Bathinda district and the city constituency of Bathinda. The constituency witnessed a major upset in 2022 when AAP's Jagroop Singh Gill defeated former Finance Minister Manpreet Singh Badal (Congress). With the highest margin in the region (63,581 votes), this seat demonstrates AAP's urban sweep.",
    constituencyProfile: {
      assemblyConstituencyNo: 92,
      district: "Bathinda",
      region: "Malwa (Central Punjab)",
      category: "General (GEN)",
      parliamentaryConstituency: "Bathinda (Lok Sabha)",
      historicalSignificance: "Manpreet Singh Badal: Former Finance Minister, senior Congress leader, close relative of Parkash Singh Badal. Loss represents AAP's dominance in urban areas.",
    },
    demographics: {
      population: 170000,
      populationNote: "APPROXIMATION - urban",
      casteComposition: [
        { category: CasteCategory.UPPER_CASTE, percentage: 25 },
        { category: CasteCategory.JAT_SIKH, percentage: 27 },
        { category: CasteCategory.SCHEDULED_CASTE, percentage: 17 },
        { category: CasteCategory.OBC, percentage: 10 },
      ],
      religionDistribution: [
        { religion: Religion.HINDU, percentage: 45 },
        { religion: Religion.SIKH, percentage: 50 },
        { religion: Religion.OTHER, percentage: 5 },
      ],
      districtReligionDistribution: [
        { religion: Religion.HINDU, percentage: 33 },
        { religion: Religion.SIKH, percentage: 65 },
        { religion: Religion.OTHER, percentage: 2 },
      ],
    },
    electoralHistory: {
      results: [
        {
          year: 2022,
          winner: "Jagroop Singh Gill",
          party: Party.AAP,
          runnerUp: "Manpreet Singh Badal",
          runnerUpParty: Party.INC,
          margin: 63581,
          needsVerification: false,
        },
        {
          year: 2017,
          winner: "Manpreet Singh Badal",
          party: Party.INC,
          runnerUp: "",
          runnerUpParty: Party.AAP,
          margin: 0,
          needsVerification: true,
        },
        {
          year: 2012,
          winner: "",
          party: "",
          runnerUp: "",
          runnerUpParty: "",
          margin: 0,
          needsVerification: true,
        },
      ],
      significance: "AAP won with massive margin - urban dominance established",
      historicalNote: "Manpreet Singh Badal's defeat was politically significant",
    },
    keyIssues: {
      issues: [
        { rank: 1, issue: "Urban Governance", description: "Civic services, sanitation, roads" },
        { rank: 2, issue: "Drug Crisis", description: "Urban youth addiction" },
        { rank: 3, issue: "Unemployment", description: "Youth jobs" },
        { rank: 4, issue: "Healthcare", description: "Urban health facilities" },
        { rank: 5, issue: "Law and Order", description: "Security concerns" },
      ],
      source: "Web searches, OneIndia, CNBC TV18, News18",
    },
    attackLines: [
      "AAP failed on urban governance",
      "Broken promises on jobs and development",
      "Drug crisis continues",
      "Civic infrastructure neglected",
    ],
    politicalPlayers: {
      currentMla: {
        name: "Jagroop Singh Gill",
        party: Party.AAP,
        description: "Current MLA (2022-present)",
        isCurrent: true,
        needsVerification: true,
      },
      keyHistoricalFigure: {
        name: "Manpreet Singh Badal",
        party: Party.INC,
        description: "Former Finance Minister, lost in 2022; represents powerful Badal family",
        isCurrent: false,
        needsVerification: false,
      },
      localInfluencers: [
        "Business community in Bathinda city",
        "Industrialists",
      ],
    },
    voterProfile: {
      turnout: "~74-76% [ESTIMATE]",
      urbanVoters: "~95-100%",
      middleClass: "Significant portion",
    },
    outlook2027: {
      summary: "Congress can target urban voters disillusioned with AAP. Need strong candidate with urban profile. Can leverage Manpreet Singh Badal's name recognition. Note: Bathinda is also Home Minister Amit Shah's focus area for BJP.",
      targetVoters: [
        "Urban middle class",
        "Business community",
        "Youth",
      ],
      grievanceFocus: [
        "Civic infrastructure",
        "Jobs",
        "Drug crisis",
      ],
      candidateRequirements: "Strong urban candidate",
      notes: [
        "Manpreet Singh Badal's name recognition can be leveraged",
        "AAP's urban delivery failures are targetable",
        "BJP's Amit Shah involvement complicates landscape",
      ],
    },
    intelligenceGaps: {
      gaps: [
        { id: 1, item: "2017 margin for Manpreet Singh Badal", priority: "HIGH" },
        { id: 2, item: "Booth-wise analysis", priority: "HIGH" },
        { id: 3, item: "All 2022 candidate vote shares", priority: "HIGH" },
        { id: 4, item: "Current MLA's attendance and work", priority: "MEDIUM" },
        { id: 5, item: "Bathinda city development issues", priority: "MEDIUM" },
      ],
      verificationNotes: [
        "PARTIALLY_VERIFIED - requires local verification",
        "[NEEDS VERIFICATION] indicates data requiring primary source verification",
      ],
    },
    recommendations: [
      "Candidate: Strong urban candidate (Manpreet Singh Badal or another senior leader)",
      "Primary Narrative: AAP failed on urban delivery",
      "Target Voters: Urban middle class, youth, business community",
      "Grievance Focus: Civic infrastructure, jobs, drug crisis",
      "Note: Consider Amit Shah's involvement in BJP strategy",
    ],
  },
};

// ============================================================================
// EXPORTS
// ============================================================================

export default bathindaUrbanData;
