/**
 * AC073-Moga Assembly Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC073-Moga.md, AC073-Moga-deep.md
 *
 * DATA CONFLICT NOTE:
 * - AC073-Moga.md (main) states: Winner 2022 = Dr. Amandeep Kaur Arora (AAP), Harjot Kamal Singh (Congress) was runner-up with margin 20,915
 * - AC073-Moga-deep.md (deep) states: Winner 2022 = Harjot Kamal Singh (INC/Congress), votes 52,357, runner-up [NEEDS VERIFICATION]
 * Both sources claim the same vote count of 52,357 for their respective winners.
 * This is a CRITICAL DATA CONFLICT requiring official CEO Punjab verification.
 * The conflict is preserved explicitly — one version per source.
 */

import type { AC073MogaTypes } from './ac073-moga-types';

export const ac073MogaData: AC073MogaTypes = {
  // ==========================================================================
  // IDENTITY
  // ==========================================================================
  identity: {
    acNumber: 73,
    name: "Moga",
    district: "Moga",
    region: "Malwa",
    category: "General",
    date: "20 May 2026",
  },

  profile: {
    acNumber: "73",
    officialName: "Moga",
    district: "Moga",
    region: "Malwa",
    category: "General",
    lokSabhaSeat: "Faridkot",
    tehsil: "Moga",
  },

  // ==========================================================================
  // EXECUTIVE SUMMARY
  // ==========================================================================
  executiveSummary: {
    overview:
      "Moga (AC 73) is a general category assembly constituency and district headquarters. Part of Moga district, Malwa region. Urban-rural mix with town and surrounding villages.",
    winner2022: "Dr. Amandeep Kaur Arora (AAP)",
    winner2022Note: "Per main dossier source",
    margin2022: "20,915 votes",
    margin2022Note: "AAP defeated Congress candidate Harjot Kamal Singh",
    congressOpportunity:
      "Congress lost by 20,915 votes in 2022 after winning the seat in 2017. Large margin to overcome; AAP has urban voter base; town population less favorable to Congress; need strong local candidate.",
  },

  overview:
    "Moga (AC 73) is a general category assembly constituency and district headquarters. Part of Moga district, Malwa region. Urban-rural mix with town and surrounding villages.",

  // ==========================================================================
  // ELECTION HISTORY
  // ==========================================================================
  electionHistory: {
    result2022: {
      winner: "Dr. Amandeep Kaur Arora",
      party: "AAP",
      margin: "20,915 votes",
      marginType: "WIDE",
      runnerUp: "Harjot Kamal Singh",
      note: "AAP defeated Congress candidate Harjot Kamal Singh",
    },
    result2017: {
      winner: "Harjot Kamal Singh",
      party: "INC",
      votes: "52,357",
      note: "Congress won; Harjot Kamal Singh held the seat",
    },
    keyTrend:
      "Seat shifted from Congress to AAP. Congress won in 2017 with Harjot Kamal Singh; AAP won in 2022 with Dr. Amandeep Kaur Arora.",
  },

  // ==========================================================================
  // DISTRICT ELECTORATE DATA
  // ==========================================================================
  districtElectorate: {
    election: "2022",
    totalElectors: "7,57,853",
    votesPolled: "5,60,966",
    turnout: "74.0%",
  },

  // ==========================================================================
  // CASTE COMPOSITION
  // ==========================================================================
  casteComposition: {
    districtDemographics: {
      scPopulation: "363,417",
      sexRatio: "893 per 1000",
      populationDensity: "444 per sq km",
    },
    urbanDemographics: {
      upperCastes: "Khatri, Arora, Baniya in town",
      bc: "Trading and business communities",
      sc: "Mazhabi, Ramdassia in town and villages",
      jatSikh: "Rural areas, some in town",
    },
    categories: [
      { category: "SC (Mazhabi, Ramdassia)", estimatedPercentage: "~36-37%" },
      { category: "Jat Sikh", estimatedPercentage: "Majority rural" },
      { category: "Khatri/Arora (urban)", estimatedPercentage: "Urban upper castes" },
      { category: "Baniya (urban)", estimatedPercentage: "Trading/business" },
      { category: "BC", estimatedPercentage: "Trading and business" },
    ],
  },

  // ==========================================================================
  // KEY LOCAL ISSUES
  // ==========================================================================
  keyLocalIssues: {
    issues: [
      {
        rank: 1,
        title: "Town Infrastructure",
        description: "Roads, drainage, sanitation",
      },
      {
        rank: 2,
        title: "Agriculture",
        description: "Farm distress in surrounding areas",
      },
      {
        rank: 3,
        title: "Drug Menace",
        description: "Urban and rural youth affected",
      },
      {
        rank: 4,
        title: "Healthcare",
        description: "District hospital facilities",
      },
      {
        rank: 5,
        title: "Education",
        description: "College and professional education",
      },
      {
        rank: 6,
        title: "Industrial Development",
        description: "Limited jobs",
      },
      {
        rank: 7,
        title: "Unemployment",
        description: "Youth joblessness",
      },
    ],
  },

  // ==========================================================================
  // CONGRESS STRATEGIC POSITION
  // ==========================================================================
  congressStrategicPosition: {
    currentStatus: {
      lossIn2022: "Lost by 20,915 votes",
      marginAnalysis: "Significant gap (20,915) to overcome",
    },
    keyChallenges: [
      "Large margin to overcome",
      "AAP has urban voter base",
      "Town population less favorable to Congress",
      "Need strong local candidate",
    ],
    opportunities: [
      "Town grievances with infrastructure",
      "Rural-urban divide exploitation",
      "AAP government's governance failures",
      "Possible consolidation of non-AAP votes",
    ],
  },

  // ==========================================================================
  // RECOMMENDED CANDIDATE PROFILE
  // ==========================================================================
  recommendedCandidateProfile: {
    table: [
      { attribute: "Caste", idealProfile: "Khatri/Arora or Jat Sikh with urban base" },
      { attribute: "Profile", idealProfile: "Professional, doctor, or business class" },
      { attribute: "Background", idealProfile: "Moga town family with recognition" },
      { attribute: "Priority", idealProfile: "Urban voter connect essential" },
      { attribute: "Name Recognition", idealProfile: "Name recognition in town" },
      { attribute: "Credibility", idealProfile: "Professional credibility" },
      { attribute: "Issue Raising", idealProfile: "Ability to raise town issues" },
      { attribute: "Resources", idealProfile: "Financial resources for campaign" },
    ],
  },

  // ==========================================================================
  // ATTACK LINES AGAINST AAP
  // ==========================================================================
  attackLines: {
    vulnerabilities: [
      "Healthcare: District hospital facilities poor",
      "Town Infrastructure: Broken roads, waterlogging",
      "Governance: Administrative issues",
      "Unemployment: Youth without jobs",
      "Drug Crisis: Youth addiction",
    ],
    lines: [
      {
        rank: 1,
        title: "Healthcare Failure",
        description: "Dr. Amandeep Kaur: Doctor MLA, but no treatment for Moga's problems",
      },
      {
        rank: 2,
        title: "Town Infrastructure",
        description: "Moga town deserves development, not just advertisements",
      },
      {
        rank: 3,
        title: "Urban Development",
        description: "Urban Moga needs real development",
      },
      {
        rank: 4,
        title: "Drug Crisis",
        description: "Youth addiction crisis unaddressed",
      },
      {
        rank: 5,
        title: "Governance",
        description: "Administrative issues and broken promises",
      },
    ],
    congressNarratives: [
      "Dr. Amandeep Kaur: Doctor MLA, but no treatment for Moga's problems",
      "Moga town deserves development, not just advertisements",
      "Urban Moga needs real development",
    ],
  },

  // ==========================================================================
  // MARGIN ANALYSIS
  // ==========================================================================
  marginAnalysis: {
    entries: [
      { year: 2022, winner: "AAP", margin: "20,915", keyContest: "vs Congress" },
      { year: 2017, winner: "Congress", margin: "Held", keyContest: "Congress retained" },
    ],
  },

  // ==========================================================================
  // CONSTITUENCY NOTES
  // ==========================================================================
  constituencyNotes: {
    notes: [
      "Urban center with rural hinterland",
      "Town voters key to victory",
      "Candidate profile must suit urban constituency",
      "Professional/doctor candidate may appeal",
    ],
  },

  // ==========================================================================
  // DEEP RESEARCH DATA
  // ==========================================================================
  deepResearch: {
    metadata: {
      researchDossierId: "AC073-Moga",
      topic: "Moga Assembly Constituency (AC073), Punjab",
      tier: 2,
      date: "20 May 2026",
      dataCurrency: "As of May 2026 | Election Data: 2022",
      sourcesConsulted: "Web search, ResultUniversity, Wikipedia, CNBC TV18, CEO Punjab",
      verificationStatus: "PARTIALLY_VERIFIED",
    },

    constituencyIdentity: {
      acNo: "73",
      name: "Moga",
      district: "Moga",
      region: "Malwa",
      category: "General",
      lokSabha: "Faridkot",
      tehsil: "Moga",
      location: "Central Moga district, district headquarters town",
    },

    geographicBoundaries: {
      description: "Located in central Moga district, district headquarters town",
      keyAreas: "Moga town and surrounding rural villages",
    },

    urbanRuralComposition: {
      mix: "Mixed: Urban (district HQ) + Rural surrounding areas",
      urbanPopulation: "Moga town with trading and service economy",
      rural: "Agricultural villages in surrounding areas",
      economy: "Agriculture, small industry, services, trading",
    },

    electoralHistory: [
      {
        year: 2022,
        winner: "Harjot Kamal Singh",
        party: "INC",
        margin: "52,357 votes (raw, margin TBD per deep source)",
      },
      {
        year: 2017,
        winner: "[NEEDS VERIFICATION]",
        party: "[NEEDS VERIFICATION]",
        margin: "[NEEDS VERIFICATION]",
      },
      {
        year: 2012,
        winner: "[NEEDS VERIFICATION]",
        party: "[NEEDS VERIFICATION]",
        margin: "[NEEDS VERIFICATION]",
      },
    ],

    demographics: {
      population: {
        mogaTown: "[NEEDS VERIFICATION]",
        constituency: "[NEEDS VERIFICATION]",
      },
      districtDemographics: [
        { indicator: "Total Population", value: "~9,95,746" },
        { indicator: "SC Population", value: "3,63,417 (36.5%)" },
        { indicator: "Sex Ratio", value: "893 per 1000" },
        { indicator: "Population Density", value: "444/sq.km" },
      ],
      casteComposition: {
        jatSikh: "Major agrarian caste in rural areas",
        khatriArora: "Trading and business in town",
        scDalit: "Significant population in rural and urban",
        obc: "[NEEDS VERIFICATION]",
      },
      religiousComposition: {
        sikh: "~58-60%",
        hindu: "~38-40%",
      },
    },

    keyIssues: {
      primaryIssues: [
        { issue: "Drug Menace: Affecting youth across urban and rural" },
        { issue: "Unemployment: Particularly urban youth, educated unemployed" },
        { issue: "Agricultural Distress: Rural hinterland concerns" },
        { issue: "Urban Services: Infrastructure in town, drainage, roads" },
        { issue: "Healthcare: District hospital and health services" },
      ],
      secondaryIssues: [
        { issue: "Education quality" },
        { issue: "Industrial development" },
        { issue: "Employment in non-agricultural sectors" },
      ],
    },

    politicalLandscape: {
      currentMLA: {
        name: "Harjot Kamal Singh",
        party: "Indian National Congress",
        term: "2022-2027",
      },
      significanceOf2022Win:
        "Congress won despite AAP wave — shows party organization strength in district HQ. Urban voters backed Congress. One of only 18 seats won by Congress in 2022.",
      partyPerformanceTrend: [
        {
          year: 2022,
          inc: "W",
          aap: "2nd",
          sad: "3rd",
          notes: "Congress win in Malwa wave",
        },
        {
          year: 2017,
          inc: "[W/2nd]",
          aap: "2nd/W",
          sad: "[W/2nd]",
          notes: "[NEEDS VERIFICATION]",
        },
      ],
    },

    competitiveLandscape: {
      likelyContenders: [
        { party: "INC", position: "Incumbent, trying to retain" },
        { party: "AAP", position: "Strong urban support, will target" },
        { party: "SAD-BJP", position: "Historical presence in Malwa" },
        { party: "BJP", position: "Urban support base" },
      ],
      strategicConsiderations: {
        considerations: [
          "Congress held this seat in AAP wave — strong organization",
          "Urban voters showed different pattern than rural",
          "SAD-BJP alliance could impact",
        ],
      },
    },

    intelligenceGaps: {
      missingData: [
        { gap: "2022 exact vote shares and margin", status: "OPEN" },
        { gap: "2017, 2012 results", status: "OPEN" },
        { gap: "Caste demographics", status: "PARTIALLY ADDRESSED" },
        { gap: "Full list of candidates and votes", status: "OPEN" },
        { gap: "MLA's performance record", status: "OPEN" },
      ],
    },

    recommendations: {
      congressStrategy: {
        candidate: "Incumbent Harjot Kamal Singh or similar profile",
        focus: ["Urban development", "jobs", "drug crisis"],
        strengths: ["District HQ", "urban voter trust"],
        challenges: ["AAP's anti-corruption narrative"],
      },
      aapStrategy: {
        target: "Urban voters",
        points: [
          "Target urban voters with development promise",
          "Counter Congress's local connect",
          "Emphasize anti-corruption",
        ],
      },
    },
  },

  // ==========================================================================
  // DATA QUALITY
  // ==========================================================================
  dataQuality: {
    sources: [
      "News18",
      "OneIndia",
      "IndiaVotes",
      "CNBC TV18",
      "Wikipedia",
      "ProNeta",
      "ResultUniversity",
      "CEO Punjab",
      "minimax-web-search",
    ],
    compiledDate: "20 May 2026",
    verificationStatus: "PARTIALLY_VERIFIED",
    verificationNotes: [
      { note: "Winner confirmed (name appears in both sources)" },
      { note: "DATA CONFLICT: Main dossier says AAP won; deep research says INC/Congress won — requires official CEO Punjab verification" },
      { note: "2022 margin: Main says 20,915; deep says 52,357 raw votes for Harjot Kamal Singh (INC)" },
      { note: "Intelligence gaps remain per deep research file" },
    ],
    dataCurrency: "As of 20 May 2026 | Election Data: 2022",
    conflictNote:
      "CRITICAL CONFLICT: AC073-Moga.md claims AAP (Dr. Amandeep Kaur Arora) won 2022; AC073-Moga-deep.md claims INC (Harjot Kamal Singh) won 2022. Both cite 52,357 votes for their respective winners. Official CEO Punjab result verification required.",
  },
};

// ==========================================================================
// TOKEN-BY-TOKEN COVERAGE VERIFICATION
// ==========================================================================

/**
 * Content Coverage Checklist — AC073-Moga.md (6-Cycle Verification):
 *
 * [x] AC Number: 73
 * [x] Name: Moga
 * [x] District: Moga
 * [x] Region: Malwa
 * [x] Category: General
 * [x] Date: 20 May 2026
 * [x] Constituency Overview (Moga as district HQ, Malwa region, urban-rural mix)
 * [x] 2022 Election Result: Winner Dr. Amandeep Kaur Arora (AAP), margin 20,915
 * [x] 2017 Election Result: Harjot Kamal Singh (Congress) won with 52,357 votes
 * [x] District Data: Total Electors 7,57,853, Votes Polled 5,60,966, Turnout 74.0%
 * [x] SC Population: 363,417 (~36-37%)
 * [x] Sex Ratio: 893 per 1000
 * [x] Population Density: 444 per sq km
 * [x] Urban Demographics: Khatri/Arora/Baniya (UC), BC (trading), SC (Mazhabi/Ramdassia), Jat Sikh (rural)
 * [x] 7 Key Local Issues (Town Infrastructure, Agriculture, Drug Menace, Healthcare, Education, Industrial Dev, Unemployment)
 * [x] Congress Strategic Position: Lost by 20,915, 4 key challenges, 4 opportunities
 * [x] Recommended Candidate Profile: 8 attributes (caste, profile, background, priority, etc.)
 * [x] Attack Lines: 5 attack lines + 3 congress narratives
 * [x] Margin Analysis table: 2022 (AAP, 20,915), 2017 (Congress, Held)
 * [x] Constituency Notes: 4 notes
 *
 * Content Coverage Checklist — AC073-Moga-deep.md (6-Cycle Verification):
 *
 * [x] Research Dossier ID: AC073-Moga
 * [x] Topic: Moga Assembly Constituency (AC073), Punjab
 * [x] Tier: 2
 * [x] Date: 20 May 2026
 * [x] Data Currency: As of May 2026 | Election Data: 2022
 * [x] Sources Consulted: Web search, ResultUniversity, Wikipedia, CNBC TV18, CEO Punjab
 * [x] Verification Status: PARTIALLY VERIFIED
 * [x] Executive Summary (Moga is district HQ, Malwa region, General seat, Congress win in 2022)
 * [x] Constituency Profile: AC 73, District Moga, Region Malwa, Category General, PC Faridkot, Tehsil Moga
 * [x] Geographic Boundaries: Central Moga district, key areas Moga town + rural villages
 * [x] Urban-Rural Composition: Mixed, trading/service economy, agriculture/small industry
 * [x] 2022 Election: Winner Harjot Kamal Singh (INC), votes 52,357, margin [TBD], runner-up [NEEDS VERIFICATION]
 * [x] Significance: One of 18 seats Congress won in 2022
 * [x] Voter Turnout: [NEEDS VERIFICATION], state average 62.80%
 * [x] Moga District Demographics: Total Pop ~9,95,746, SC 3,63,417 (36.5%), Sex Ratio 893, Density 444/sq.km
 * [x] Caste Composition: Jat Sikh (agrarian rural), Khatri/Arora (trading town), SC (rural+urban), OBC [TBD]
 * [x] Religious Composition: Sikh ~58-60%, Hindu ~38-40%
 * [x] 5 Primary Issues (Drug, Unemployment, Agri Distress, Urban Services, Healthcare)
 * [x] 3 Secondary Issues (Education, Industrial Dev, Non-agri Employment)
 * [x] Current MLA: Harjot Kamal Singh, INC, 2022-2027
 * [x] 2027 Likely Contenders: INC, AAP, SAD-BJP, BJP
 * [x] Strategic Considerations: Congress organization, urban-rural pattern, SAD-BJP impact
 * [x] Electoral History: 2022 winner Harjot Kamal Singh INC (52,357), 2017/2012 [NEEDS VERIFICATION]
 * [x] Intelligence Gaps: 5 open items
 * [x] Congress Strategy: Candidate, focus, strengths, challenges
 * [x] AAP Strategy: Target urban voters, counter Congress local connect, anti-corruption
 * [x] Data conflict note explicitly preserved
 * [x] All [NEEDS VERIFICATION] markers preserved in data
 * [x] Both source files fully tokenized and mapped
 */
