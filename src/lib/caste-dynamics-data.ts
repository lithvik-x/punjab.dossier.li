// Caste Dynamics & Political Organizations Data for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/caste-dynamics.md
// Research Date: 2026-05-20

import type { CasteDynamicsData } from "@/types/caste-dynamics-types";

export const casteDynamicsData: CasteDynamicsData = {
  // ==========================================
  // 1. CASTE ORGANIZATION LANDSCAPE
  // ==========================================
  casteOrganization: {
    jatSikh: {
      name: "Jat Sikh Biradari Network",
      nature: "Informal, kinship-based (biradari) rather than formal organizations",
      keyMechanism: "Dominance exercised through land ownership, gurdwara management committees, and agricultural cooperatives. The biradari system functions as an informal political coordination body at village/tehsil level, influencing candidate selection and vote consolidation.",
      politicalVehicle: "Historically aligned with Shiromani Akali Dal (SAD)",
      politicalAlignment: "In 2017, SAD captured 37% of Jat Sikh vote vs Congress at 28%. By 2022, AAP swept across Jat votes on class/governance platform, not caste.",
      concentration: "Malwa belt (69 seats) is the Jat Sikh heartland. 11 of 13 CMs since 1966 have been Jat Sikhs.",
    },
    dalitSC: {
      adDharm: {
        name: "Ad-Dharm Movement (est. 1920s)",
        nature: "Recognized as a separate religion in 1931 Census",
        keyMechanism: "Argues Ad-Dharm is the original native religion of Dalits, predating Aryan imposition. Now manifests as Ravidassia religion.",
      },
      deraSachkhandBallan: {
        name: "Dera Sachkhand Ballan",
        location: "Jalandhar",
        community: "Ravidassia/Ad-Dharmi community",
        head: "Sant Niranjan Das",
        recognition: "Received Padma Shri (Jan 2026), PM Modi visited Feb 2026 — widely seen as BJP outreach",
        politicalSignificance: "Major Ravidassia headquarters",
      },
      ravidassiaDeras:
        "Multiple deras exist across Doaba region, each with independent following. NOT a monolithic bloc — internal fractures between Balmikis, Mazhabis, Ad-Dharmis, and Ravidasias, and within Ravidasias across multiple deras.",
      bspPunjab: {
        recentWins: "Won 40 block samiti seats and 5 zila parishad seats in Dec 2025 local body elections",
        seatsWon: "40+ block samiti + 5 zila parishad",
      },
      sikhSCSubgroups:
        "Mazhabi Sikhs (concentrated in Majha), Balmiki Hindus (urban/semi-urban), Ramdasia Sikhs (Doaba). Each has distinct political behavior.",
    },
    obc: {
      overview: "No single dominant OBC political formation in Punjab (unlike Yadav-dominated UP/Bihar)",
      keyCastes: [
        { name: "Sainis", notes: "Recognized OBC in Punjab since 2016" },
        { name: "Kambojs" },
        { name: "Tarkhans/Ramgarhias" },
        { name: "Lohars" },
        { name: "Nais" },
        { name: "Kumhars" },
        { name: "Kashyaps" },
      ],
      sainiSignificance:
        "Haryana CM Nayab Singh Saini deployed by BJP as bridge to Punjab OBCs — 70+ events in Punjab in 7 months (Oct 2025-Apr 2026). Saini community straddles Hindu-Sikh identity (52% Sikh, 48% Hindu per 1931 Census).",
      ramgarhiaSabha:
        "Community organization for Tarkhan (carpenter) caste, maintains gurdwaras and educational institutions",
    },
    hinduUpperCaste: {
      name: "Hindu Upper Caste Networks",
      nature: "Brahmin Sabhas, Khatri/Arora associations active in urban centers",
      keyMechanism: "Urban networks in Ludhiana, Jalandhar, Amritsar",
      politicalAlignment: "Traditionally Congress or BJP. BJP vote share rose to 18.56% in 2024 LS — largely urban Hindu consolidation.",
      concentration: "Upper-caste Hindus (Brahmins, Khatris, Aroras, Banias, Bhatias) = approximately 10-15% of Punjab population",
    },
    derasAsPoliticalInstitutions: {
      insight:
        "Deras emerged as Dalit response to caste exclusion within Sikhism. Dalits hold disproportionately low agricultural land despite economic prosperity. Land ownership remains the primary status marker.",
      majorDeras: [
        { name: "Dera Sacha Sauda", location: "Sirsa", community: "Various", politicalSignificance: "Historically influenced Fatehabad/adjacent Punjab areas" },
        { name: "Dera Sachkhand Ballan", location: "Jalandhar", community: "Ravidassia", politicalSignificance: "Ravidassia headquarters, PM Modi visited Feb 2026" },
        { name: "Radha Soami Satsang Beas", location: "Amritsar", community: "Various", politicalSignificance: "PM Modi visited Nov 2022" },
        { name: "Namdhari Sikh sect", location: "Bhaini Sahib, Sahnewal", community: "Sikh", politicalSignificance: "Saini visited Jan 2026" },
      ],
    },
  },

  // ==========================================
  // 2. DOMINANT CASTE BY REGION
  // ==========================================
  dominantCasteByRegion: {
    regions: [
      {
        region: "Malwa",
        seats: 69,
        dominantCaste: "Jat Sikhs dominant in ~45 seats",
        keyDynamic: "Jat Sikhs + significant SC/OBC in remaining. Agricultural heartland, Jat landownership hegemony. SC concentration high in Bathinda, Mansa, Muktsar",
      },
      {
        region: "Majha",
        seats: 25,
        dominantCaste: "Mixed — Jat Sikhs + Mazhabi/Balmiki SCs decisive",
        keyDynamic: "Jat + Mazhabi swing. Tarn Taran, Amritsar Rural have high Mazhabi Sikh concentration. Gurdaspur/Pathankot have Hindu OBC pockets",
      },
      {
        region: "Doaba",
        seats: 23,
        dominantCaste: "SC-dominant (40%+ in many areas)",
        keyDynamic:
          "Ravidassia/Ad-Dharmi decisive. Highest Dalit concentration in India. 34 reserved seats statewide heavily concentrated here. Jalandhar, Hoshiarpur, Kapurthala, Nawanshahr",
      },
    ],
    reservedSeats: {
      total: 34,
      percentOfTotal: "29% of 117 Assembly seats",
      distribution: "Heavily concentrated in Doaba, then Malwa, then Majha",
      congress2022Result: "Congress won only 5 of 34 reserved seats despite appointing Dalit CM Channi",
    },
  },

  // ==========================================
  // 3. WINNING COALITION ARITHMETIC
  // ==========================================
  winningCoalition: {
    populationArithmetic: [
      { caste: "Jat Sikhs", populationPercent: 21, politicalBehavior: "Traditional power holders, SAD-leaning but swung to AAP/Congress" },
      { caste: "SC (Sikh + Hindu)", populationPercent: 32, politicalBehavior: "Highest in India. Fragmented across sub-castes and deras. Not a monolithic vote bank" },
      { caste: "OBC (Saini, Kamboj, Tarkhan, etc.)", populationPercent: 31, politicalBehavior: "Politically underrepresented, fragmented, increasingly targeted by BJP" },
      { caste: "Upper-caste Hindus", populationPercent: 10, politicalBehavior: "Urban, BJP/Congress leaning" },
      { caste: "Others (migrants, etc.)", populationPercent: 3, politicalBehavior: "Growing factor in industrial belts (Ludhiana)" },
    ],
    historicalFormulas: [
      {
        year: 2017,
        party: "Congress",
        seats: 77,
        coalition: "Jat Sikhs + SC + Hindu upper caste + anti-Akali sentiment",
        keyLesson: "Broad coalition transcending caste on anti-incumbency platform",
      },
      {
        year: 2022,
        party: "AAP",
        seats: 92,
        coalition: "Class trumped caste entirely",
        keyLesson:
          "300 units free electricity + Rs 1,000/month for women cut across ALL caste lines. Won across Jat, SC, OBC, urban, rural",
      },
    ],
    congressRequirements: [
      { target: "SC consolidation", percent: 40, action: "Target 40%+ of SC vote across all sub-groups via dera engagement + SC leadership" },
      { target: "Jat Sikh split", percent: 30, action: "Win ~30% of Jat vote (feasible if AAP anti-incumbency rises and SAD remains weak)" },
      { target: "Hindu upper-caste retention", percent: 12, action: "Congress traditional base in urban areas" },
      { target: "OBC outreach", percent: 31, action: "Identify OBC candidates in OBC-concentration seats" },
    ],
    keyLesson:
      "Punjab's 'egalitarian ethos of Sikhism often bridges caste divides' (Harjeshwar Pal Singh, political commentator). Unlike UP/Bihar, caste arithmetic alone does not win Punjab. Class economics + governance sentiment + anti-incumbency are stronger predictors.",
  },

  // ==========================================
  // 4. CASTE TENSIONS & CONFLICTS
  // ==========================================
  casteTensions: {
    majorTensionPoints: [
      {
        incident: "Muktsar inter-caste marriage incident",
        date: "Aug 2025",
        description: "Dalit family ousted from village after son's inter-caste marriage. Home burnt down.",
        rootCause: "Illustrates ongoing caste resistance in rural Malwa",
      },
      {
        incident: "Ad-Dharm vs Jat Sikh tension",
        date: "Ongoing",
        description: "Rooted in landlessness of Dalits despite economic mobility",
        rootCause:
          "Mechanization of agriculture + influx of migrant labor reduced Dalit bargaining power",
      },
      {
        incident: "Balmiki/Mazhabi vs Ravidassia tension",
        date: "Ongoing",
        description: "Within SC communities, sub-caste rivalries prevent consolidation",
        rootCause:
          "Balmikis (sweeper caste) face discrimination even from other SC groups",
      },
    ],
    interCasteMarriage: {
      punjabRate: 28.4,
      nationalAverage: 9.9,
      ranking: "HIGHEST in India (Kerala is second at 21.3%)",
      implication:
        "Reflects Sikhism's egalitarian influence and weakening of Brahmanical caste hierarchy in Punjab. However, resistance persists in rural areas and among dominant landed castes.",
    },
    casteClassIntersection: [
      {
        dynamic: "Wealthy SC vs poor Jat",
        description:
          "Emerging dynamic where economically prosperous Dalits (NRI income, government jobs, service sector) coexist with indebted Jat farmers. This inversion creates political volatility.",
      },
      {
        dynamic: "Landless SC middle class",
        description:
          "Dalit economic mobility through migration abroad, service sector, and government reservations has created a class that is economically mobile but socially subordinate.",
      },
    ],
    migrantLaborImpact:
      "Bihari/UP migrant workers replaced local Dalit agricultural labor, reducing Jat dependence on local Dalits and weakening traditional patron-client (jajmani) relationships",
  },

  // ==========================================
  // 5. CASTE-VOTE BLOC ANALYSIS
  // ==========================================
  casteVoteBlocs: {
    exitPollPatterns: [
      {
        election: "2022 Assembly",
        patterns: [
          "AAP won across ALL caste groups — caste was not the determining factor",
          "Congress won only 5 of 34 SC-reserved seats despite Dalit CM",
          "SAD retained partial Jat Sikh loyalty but was decimated",
          "BJP was limited to urban Hindu pockets",
        ],
      },
    ],
    lokSabha2024Shift: {
      bjpVoteShare: "From 6.6% (2022) to 18.56% (2024)",
      seatsLed: 23,
      note: "Primarily Hindu consolidation + OBC outreach",
    },
    localBody2025: [
      {
        party: "AAP",
        blockSamitiSeats: 0,
        zilaParishadSeats: 0,
        date: "Dec 2025",
      },
      {
        party: "BSP",
        blockSamitiSeats: 40,
        zilaParishadSeats: 5,
        date: "Dec 2025",
      },
    ],
  },

  // ==========================================
  // 6. CROSS-CASTE POLITICAL LEADERSHIP
  // ==========================================
  crossCasteLeadership: {
    leaders: [
      {
        name: "Bhagwant Mann (AAP)",
        party: "AAP",
        casteBackground: "Jat Sikh",
        crossCasteAcceptability: "CM elected 2022. Won on cross-caste class platform. Currently the broadest cross-caste acceptability.",
      },
      {
        name: "Capt. Amarinder Singh",
        party: "BJP (formerly Congress)",
        casteBackground: "Patiala royal family",
        crossCasteAcceptability:
          "Commanded respect across caste lines in Malwa",
        currentStatus: "Now BJP",
      },
      {
        name: "Partap Singh Bajwa (Congress)",
        party: "Congress",
        casteBackground: "Jat Sikh",
        crossCasteAcceptability: "Influence in Gurdaspur/Majha",
      },
      {
        name: "Charanjit Singh Channi (Congress)",
        party: "Congress",
        casteBackground: "SC",
        crossCasteAcceptability: "SC credibility but limited cross-caste appeal beyond Doaba",
        currentStatus: "First Dalit CM of Punjab",
      },
    ],
    verificationNeeded:
      "Comprehensive list of leaders accepted across caste lines, sub-regional leaders with biradari-crossing influence, and religious leaders (dera heads) with political sway beyond their own caste",
  },

  // ==========================================
  // 7. CONGRESS CASTE STRATEGY FOR 2027
  // ==========================================
  congressStrategy: {
    coreChallenge:
      "Congress won only 18 seats in 2022 (down from 77 in 2017). The caste strategy of appointing a Dalit CM (Channi) failed because class economics (AAP guarantees) overrode caste identity. For 2027, Congress must combine caste strategy with economic messaging.",
    priorities: [
      {
        priority: 1,
        name: "SC Consolidation",
        populationTarget: "32% population, 34 reserved seats",
        description:
          "Engage all major dera heads — do not rely on single dera. Field strong SC candidates in reserved seats with local biradari credibility. Counter BJP's Modi-at-dera symbolism with substance on land rights (shamlat), economic development.",
        targetSeats: "34 reserved seats",
        keyActions: [
          "Engage all major dera heads — do not rely on single dera",
          "Field strong SC candidates in reserved seats with local biradari credibility",
          "Counter BJP's Modi-at-dera symbolism with substance on land rights",
          "Target BSP voters — BSP's 40+ block samiti wins show Dalit assertion space exists",
        ],
      },
      {
        priority: 2,
        name: "Jat Sikh Recovery",
        populationTarget: "21% population, Malwa dominance",
        description:
          "Jat Sikhs are the traditional Congress constituency (2017: 28% Jat vote, second only to SAD's 37%). With SAD in decline and AAP facing anti-incumbency, Jat Sikh vote is up for grabs.",
        targetSeats: "Malwa rural seats",
        keyActions: [
          "Field Jat Sikh candidates in Malwa rural seats",
          "Address agrarian distress and farm debt",
          "Compete on anti-incumbency against AAP",
        ],
      },
      {
        priority: 3,
        name: "OBC Outreach",
        populationTarget: "31% population, underrepresented",
        description:
          "OBCs have NEVER had a CM in Punjab (only Zail Singh as OBC/Ramgarhia in 1972-77). Identify OBC winnable seats and field OBC candidates.",
        keyActions: [
          "Identify OBC winnable seats and field OBC candidates",
          "Counter BJP's Saini-led OBC outreach with local Punjabi OBC leaders",
          "Address underrepresentation of OBCs in political appointments",
        ],
      },
      {
        priority: 4,
        name: "Hindu Upper Caste Retention",
        populationTarget: "10-15% population",
        description: "Prevent further BJP consolidation of urban Hindu vote",
        keyActions: [
          "Field Hindu candidates in urban constituencies (Ludhiana, Jalandhar, Amritsar)",
          "Present Congress as alternative to BJP for urban Hindu voters",
        ],
      },
    ],
    antiCoalitionIntelligence: [
      {
        party: "BJP",
        strategy: "Replicating Haryana model — stitching non-Jat coalition",
        voteShareChange: "Vote share doubled from 6.6% (2022) to 18.56% (2024)",
        tactics: [
          "Using Saini as OBC bridge",
          "Dera visits for SC outreach",
          "Hindu consolidation in urban areas",
        ],
      },
      {
        party: "AAP",
        strategy: "Anti-incumbency building within class-over-caste framework",
        tactics: [
          "Free electricity and women welfare maintaining cross-caste appeal",
          "If guarantees lose appeal, caste identities may resurface",
        ],
      },
      {
        party: "SAD",
        strategy: "Continuing decline limits fragmentation ability",
        tactics: ["Unable to split Jat Sikh vote effectively"],
      },
    ],
  },

  // ==========================================
  // 8. KEY DATA POINTS
  // ==========================================
  dataPoints: {
    entries: [
      { metric: "SC population % of Punjab", value: "31.94% (highest in India)", source: "Census 2011/Swarajya", year: "2011" },
      { metric: "Jat Sikh population %", value: "~21%", source: "India Today/Census", year: "2011" },
      { metric: "OBC population %", value: "~31%", source: "Swarajya estimate", year: "2026" },
      { metric: "Hindu upper caste population %", value: "~10-15%", source: "Swarajya estimate", year: "2026" },
      { metric: "Hindu total population %", value: "38.49%", source: "Census 2011/TOI", year: "2011" },
      { metric: "Sikh SC % of total population", value: "19.4%", source: "TOI analysis", year: "2011" },
      { metric: "Hindu SC % of total population", value: "12.4%", source: "TOI analysis", year: "2011" },
      { metric: "SC-reserved Assembly seats", value: "34 of 117", source: "ECI", year: "Current" },
      { metric: "Inter-caste marriage rate Punjab", value: "28.4% (highest in India)", source: "IHDS/Facebook-The Hindu", year: "2025" },
      { metric: "BJP vote share 2022 Assembly", value: "6.6%", source: "ECI", year: "2022" },
      { metric: "BJP vote share 2024 LS", value: "18.56%", source: "ECI", year: "2024" },
      { metric: "Congress SC-reserved seats won 2022", value: "5 of 34", source: "ECI", year: "2022" },
      { metric: "BSP block samiti seats won Dec 2025", value: "40+", source: "Media reports", year: "Dec 2025" },
      { metric: "AAP seats won 2022 Assembly", value: "92 of 117", source: "ECI", year: "2022" },
      { metric: "Doaba SC concentration", value: "40%+ in several areas", source: "Swarajya", year: "2026" },
      { metric: "Non-Jat CMs since 1966", value: "2 of 13", source: "Swarajya", year: "2026" },
    ],
  },

  // ==========================================
  // 9. DATA QUALITY & GAPS
  // ==========================================
  dataQuality: {
    gaps: [
      {
        gap: "Constituency-level dominant caste mapping",
        status: "NOT AVAILABLE from open sources",
        verificationNeeded:
          "Systematic 117-AC breakdown requires cross-tabulation of Census 2011 caste data with AC boundaries",
      },
      {
        gap: "Caste-based voting bloc sizes",
        status: "NOT AVAILABLE publicly",
        verificationNeeded: "Requires proprietary survey data (CSDS-Lokniti or similar)",
      },
      {
        gap: "Caste panchayat influence zones",
        status: "Field research needed",
        verificationNeeded:
          "Geographic mapping of informal biradari panchayats and their vote-direction capacity",
      },
      {
        gap: "Sub-caste voting behavior",
        status: "Not systematically documented",
        verificationNeeded:
          "Voting behavior of Mazhabi vs Balmiki vs Ravidassia vs Ad-Dharmi for each constituency",
      },
      {
        gap: "Dera-wise follower counts and political leaning",
        status: "Sensitive data requiring field intelligence",
        verificationNeeded: "Number of followers per dera and their political preference trends",
      },
      {
        gap: "OBC candidate winnability analysis",
        status: "Requires historical election data cross-referenced",
        verificationNeeded: "Which specific OBC sub-castes can win in which seats",
      },
      {
        gap: "Updated caste demographics post-2021",
        status: "Census 2021 caste data not yet released",
        verificationNeeded: "All population percentages based on 2011 Census projections",
      },
      {
        gap: "Cross-caste leaders inventory",
        status: "Field mapping needed",
        verificationNeeded:
          "Comprehensive list of leaders with credibility across caste lines at constituency level",
      },
    ],
    overallConfidence: "MEDIUM",
    sourcesConsulted: 8,
    mostRecentSource: "Swarajya article dated 15 May 2026",
  },
};

// ==========================================
// DERIVED METRICS FOR DASHBOARD
// ==========================================

export const casteDynamicsMetrics = {
  // Key caste population shares
  scPopulation: "31.94% (highest in India)",
  jatSikhPopulation: "~21%",
  obcPopulation: "~31%",
  hinduUpperCastePopulation: "~10-15%",

  // Reserved seats
  scReservedSeats: "34 of 117 (29%)",

  // Inter-caste marriage
  interCasteMarriageRate: "28.4% (highest in India)",
  nationalInterCasteAverage: "9.9%",

  // BJP growth
  bjpVoteShare2022: "6.6%",
  bjpVoteShare2024: "18.56%",
  bjpSeatsLed2024: 23,

  // Congress 2022 performance
  congressSeats2022: 18,
  congressSeats2017: 77,
  congressScReservedSeatsWon2022: "5 of 34",

  // Key insight
  keyLesson:
    "Class economics + governance sentiment + anti-incumbency are stronger predictors than caste arithmetic in Punjab",
};

// Chart data for caste population composition
export const castePopulationData = [
  { caste: "SC (Sikh + Hindu)", percent: 32, color: "#7C3AED" },
  { caste: "OBC", percent: 31, color: "#2563EB" },
  { caste: "Jat Sikh", percent: 21, color: "#059669" },
  { caste: "Hindu Upper Caste", percent: 10, color: "#DC2626" },
  { caste: "Others", percent: 6, color: "#6B7280" },
];

// Chart data for regional caste dominance
export const regionalCasteData = [
  { region: "Malwa", seats: 69, dominantCaste: "Jat Sikh (~45 seats)", scConcentration: "High in Bathinda, Mansa, Muktsar", color: "#059669" },
  { region: "Majha", seats: 25, dominantCaste: "Mixed (Jat + Mazhabi/Balmiki)", scConcentration: "High in Tarn Taran, Amritsar Rural", color: "#2563EB" },
  { region: "Doaba", seats: 23, dominantCaste: "SC-dominant (40%+)", scConcentration: "Highest in India", color: "#7C3AED" },
];

// BJP growth data
export const bjpGrowthData = [
  { election: "2022 Assembly", voteShare: 6.6, seats: 0 },
  { election: "2024 Lok Sabha", voteShare: 18.56, seats: 23 },
];

// Congress performance data
export const congressPerformanceData = [
  { year: 2017, seats: 77, scSeatsWon: "N/A" },
  { year: 2022, seats: 18, scSeatsWon: "5 of 34" },
];

// Strategic implications summary
export const casteStrategicImplications = {
  congressCoreChallenge:
    "Caste strategy of appointing Dalit CM failed — class economics (AAP guarantees) overrode caste identity. Must combine caste + economic messaging.",
  priorityStrategies: [
    {
      priority: 1,
      name: "SC Consolidation (32%)",
      keyActions: ["Engage all major dera heads", "Field strong SC candidates in reserved seats", "Counter BJP dera symbolism"],
    },
    {
      priority: 2,
      name: "Jat Sikh Recovery (21%)",
      keyActions: ["Field Jat Sikh candidates in Malwa", "Address agrarian distress", "Compete on anti-incumbency"],
    },
    {
      priority: 3,
      name: "OBC Outreach (31%)",
      keyActions: ["Identify OBC winnable seats", "Counter BJP's Saini outreach", "Local Punjabi OBC leaders"],
    },
    {
      priority: 4,
      name: "Hindu Upper Caste Retention (10-15%)",
      keyActions: ["Field Hindu candidates in urban seats", "Prevent BJP consolidation"],
    },
  ],
  bjpThreat:
    "BJP replicating Haryana model — non-Jat coalition (SC + OBC + Hindu + migrant). Vote share doubled 6.6% → 18.56% in 2 years.",
  aapVulnerability:
    "If free electricity/guarantees lose appeal, caste identities resurface. BSP's local body wins show Dalit assertion space opening.",
};
