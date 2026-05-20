// Governance - Local Issues Malwa Data for Punjab 2027
// Derived from: research-M2/MP1-foundational/governance/local-issues-malwa.md
// Research Date: 19 May 2026 | Data Currency: 2024-2026

import type {
  LocalIssuesMalwaKPI,
  ConstituencyIssue,
  CampaignLeveragePoint,
  ConstituencyAttackLine,
  DataGap,
  SourceCitation,
} from "@/types/governance-local-issues-malwa-types";

// ==========================================
// MAIN KPI DATA
// ==========================================

export const localIssuesMalwaKPI: LocalIssuesMalwaKPI = {
  // Metadata
  reportDate: "19 May 2026",
  megaPillar: "MP1-Foundational",
  domain: "Governance | Local Issues | Malwa Region",
  taskId: "Local Issues | Malwa Region",
  classification: "STRATEGIC INTELLIGENCE — For PPCC Campaign Planning",
  dataCurrency: "Most data from 2024-2026 sources; older data marked",

  // Regional Overview
  regionalOverview: {
    totalSeats: 69,
    decisiveRegion: true,
    historicalNote:
      "Whoever wins Malwa usually forms the government. In 2022, AAP swept 66 of 69 Malwa seats; Congress won only 2, SAD won 1.",
    districts: [
      "Bathinda",
      "Mansa",
      "Sangrur",
      "Barnala",
      "Faridkot",
      "Muktsar (Sri Muktsar Sahib)",
      "Ferozepur",
      "Fazilka",
      "Ludhiana (rural)",
      "Moga",
      "Fatehgarh Sahib",
      "Patiala",
      "Mohali (SAS Nagar)",
      "Rupnagar (parts)",
    ],
    socialComposition: {
      jatSikhDominance: "Jat Sikh dominance in rural seats",
      dalitPopulation: "Significant Dalit population (32%+ in many Malwa districts)",
      urbanHinduPockets: "Urban Hindu pockets in Ludhiana, Patiala, Mohali, Bathinda city",
    },
    election2022: {
      aap: 66,
      congress: 2,
      sad: 1,
    },
    election2024LokSabha: {
      aapVoteShare: 26, // dropped from 42%
      congressSeats: 7, // of 13
    },
    currentStatus:
      "Anti-incumbency against AAP MLAs is now widespread but the opposition is fragmented — creating an arithmetic challenge, not a wave opportunity.",
  },

  // Drug Addiction Crisis
  drugAddiction: {
    intensity: "CRITICAL",
    mostAcuteDistricts: [
      "Ferozepur",
      "Fazilka",
      "Muktsar",
      "Bathinda",
      "Mansa",
      "Sangrur",
    ],
    scale: {
      totalDrugUsers: 6600000, // 6.6 million
      childrenWithSubstanceDisorders: 697000, // 697,000 (10-17 age)
      addictsInGovernmentCentres: 620000, // ~6.2 lakh
      addictsInPrivateFacilities: 612000, // ~6.12 lakh
      drugRelatedDeaths: {
        reported: 266, // April 2020-March 2023
        bjpClaimed: 587, // under AAP watch
      },
      familiesAffected: 65, // 64-65%
      opioidDependent: 230000, // 230,000+
      dronesSeized2024: 200, // 200+ (double 2023)
    },
    entityBlamed: {
      primary: "AAP State Government — promised 'drug-free Punjab in 3 months' in 2022; completely unfulfilled",
      secondary: "Centre — BSF border management, NDPS enforcement",
      tertiary: "Cross-border trafficking networks",
    },
    resolutionStatus:
      "UNRESOLVED and worsening. Enforcement-led approach has failed. Fentanyl adulteration entering heroin supply is causing overdose spikes. De-addiction centres understaffed. Women increasingly drawn into drug trade.",
    congressProposedResponse: [
      "Comprehensive de-addiction with rehabilitation-first approach",
      "Special Malwa task force",
      "Employment-linked recovery programmes",
    ],
  },

  // Cancer Belt Crisis
  cancerBelt: {
    intensity: "CRITICAL",
    mostAffectedDistricts: ["Bathinda", "Muktsar", "Mansa", "Faridkot", "Fazilka"],
    scale: {
      designation: "Malwa officially designated 'cancer belt' of India",
      muktsarCancerPrevalence: 136.3, // per lakh
      bathindaUranium: {
        concentration: 684, // ppb
        whoLimit: 15, // ppb
      },
      barcAnalysis: {
        samples: 1500,
        exceededLimitsPercent: 35,
      },
      cgwB2025: {
        wellsSampled: 296,
        uraniumAboveLimitsPercent: 53,
        arsenicAboveLimitsPercent: 9.1,
      },
      funding: {
        centralShare: 799.5, // Rs crore
        totalExpenditure: 2084, // Rs crore (2019-2026)
      },
    },
    entityBlamed: [
      "Successive state governments (Congress, SAD, AAP) — chronic inaction",
      "Centre — inadequate Jal Jeevan Mission funding",
      "Green Revolution pesticide overuse (historical)",
      "Heavy industry contamination",
    ],
    resolutionStatus:
      "PARTIALLY ADDRESSED. JJM implementing piped water schemes but coverage incomplete. No cancer hospital of excellence in Malwa region. NGT has taken cognisance (April 2025).",
    congressProposedResponse: [
      "Dedicated cancer care centre in Bathinda",
      "Mandatory water quality testing every 6 months",
      "Uranium filtration plants at village level",
      "Pipeline from clean surface water sources",
    ],
  },

  // Unemployment Crisis
  unemployment: {
    intensity: "CRITICAL",
    mostAffectedDistricts: [
      "Bathinda",
      "Mansa",
      "Sangrur",
      "Barnala",
      "Muktsar",
      "Faridkot",
    ],
    scale: {
      youthUnemployment15129: 19.3, // percent
      nationalAverage: 14.3, // percent
      ruralYouthUnemployment: 22.5, // percent
      ruralMaleUnemployment: 19.9, // percent
      ruralFemaleUnemployment: 30.7, // percent
      labourForceParticipation: 45.9, // percent
      femaleLabourForceParticipation: 22, // percent
      outMigrationRoutes: ["Canada", "UK", "Australia"],
      aapClaimedJobs: 48000, // 48,000
      punjabDebt: {
        amount: 400000, // Rs 4 lakh crore
        percentOfGSDP: 47.5, // 45-50%
      },
    },
    entityBlamed: {
      primary: "AAP State Government — failed job promise, fiscal crisis limits hiring",
      secondary: "Centre — no special economic package for Punjab",
      historical: "Successive governments failed to diversify economy from agriculture",
    },
    resolutionStatus:
      "UNRESOLVED. AAP launched Industrial & Business Policy 2026 but impact yet to be seen. Punjab debt nearing Rs 4 lakh crore — severely limits fiscal space.",
    congressProposedResponse: [
      "Employment guarantee scheme for rural youth",
      "Industrial corridors in Bathinda-Mansa-Sangrur",
      "Skill centres aligned to local economy",
      "Subsidy for agro-processing units",
    ],
  },

  // Canal Irrigation Crisis
  canalIrrigation: {
    intensity: "HIGH",
    affectedDistricts: ["Fazilka", "Ferozepur", "Muktsar", "Bathinda", "Mansa", "Sangrur"],
    scale: {
      sirhindFeederClosure: {
        date: "March 2024",
        incident: "Fazilka farmers threatened to jump into Gang Canal",
      },
      tailEndProblem:
        "Tail-end villages in Mansa and Bathinda routinely receive insufficient canal water",
      april2025Policy:
        "CM Mann announced farms getting canal water would NOT receive daytime electricity for tubewells — penalising farmers canal water hasn't reached",
      canalLining: {
        expenditure: 4557, // Rs crore (FY 2022-2025)
        distanceCleaned: 15539, // km
      },
      undergroundPipeline: {
        project: "Sangrur",
        fiscalYear: "FY 2025-26",
      },
    },
    entityBlamed: [
      "AAP State Government — irrigation department mismanagement, ad hoc canal closures",
      "Canal department officials — corruption in water distribution",
      "Centre — inter-state water disputes unresolved",
    ],
    resolutionStatus:
      "PARTIALLY ADDRESSED. AAP claims canal discharge improvements but tail-end problem persists. Constituency-level MLA Shruti Chaudhry acknowledged need for assessment (Nov 2024).",
    congressProposedResponse: [
      "Time-bound tail-end water guarantee",
      "Constituency-level canal water audit",
      "Community water user associations",
      "Restoration of daytime power to tubewell-dependent farmers",
    ],
  },

  // Groundwater Depletion Crisis
  groundwaterDepletion: {
    intensity: "HIGH",
    mostSevereDistricts: ["Bathinda", "Mansa", "Sangrur", "Barnala", "Faridkot", "Muktsar"],
    scale: {
      cgwB2025: {
        wellsMonitored: 164,
        shallowWaterPercent: 44.51, // 0-10 metres bgl
      },
      historicalContext:
        "Malwa cotton belt historically groundwater-dependent; rice cultivation accelerated depletion",
      dualCrisis:
        "Falling water tables AND toxic contamination in same aquifers",
      freeElectricityImpact: "Free electricity policy incentivising tubewell overuse",
    },
    entityBlamed: [
      "State Government — free power without conservation mandates",
      "Centre — inadequate NAQUIM implementation",
      "Farmers — paddy monoculture",
    ],
    resolutionStatus: "UNRESOLVED. Surface water diversion projects incomplete. No mandatory crop diversification programme.",
    congressProposedResponse: [
      "Mandatory groundwater recharge in every panchayat",
      "Incentive-based crop diversification away from paddy",
      "Community-managed recharge structures",
    ],
  },

  // Stubble Burning Crisis
  stubbleBurning: {
    intensity: "HIGH",
    affectedAreas: "All Malwa agricultural belts",
    scale: {
      oct2025: {
        firstTripleDigitDay: "Oct 26",
        cases: 122,
      },
      malwaEpicentre: "Malwa belt identified as 'epicentre' of farm fire crisis (Hindustan Times, Oct 2025)",
      totalPaddyResidue: "~20 million metric tonnes annually",
      malwaShareOfFires: 58, // percent
      nasaSatelliteNote: "Seasonal crop fires burning later in the day than previous years",
    },
    entityBlamed: [
      "AAP State Government — inadequate happy seeder/in-situ management machinery distribution",
      "Centre — insufficient MSP incentive for crop diversification",
      "Farmers — compulsion of short window between rice harvest and wheat sowing",
    ],
    resolutionStatus:
      "PARTIALLY ADDRESSED. Centre mandates 20% paddy straw pellets in thermal plants by Nov 2025 (30% by Nov 2026). AAP claims 100% residue management target but farm fires continued.",
    congressProposedResponse: [
      "Bonus for non-burning farmers",
      "Community-based straw collection cooperatives",
      "Pelletisation units at block level",
      "Crop diversification incentive",
    ],
  },

  // Health Infrastructure Crisis
  healthInfrastructure: {
    intensity: "HIGH",
    affectedAreas: ["Moga", "Mansa", "Muktsar", "Faridkot", "Bathinda rural"],
    keyEvidence: {
      mogaDoctors: {
        actual: 4,
        malerkotla: 28,
      },
      dharamkotHospital: {
        subDivisionalHospital: "No sub-divisional hospital (population-based criteria blocks upgrade)",
        nearestTraumaCentre: "65 km away in Jalandhar",
      },
      mohaliDispensary:
        "AAP MLA Kuljit Singh contradicted Health Minister on dispensary staffing — no doctor had arrived by 9 AM",
      aamAadmiClinics: {
        launched: 500,
        issue: "Specialist positions remain unfilled; Centre accused AAP of rebranding Centre-funded clinics",
      },
      aapMlaDharamkot:
        '"We feel like we are living in Pakistan" — Devinderjeet Singh Laddi Dhos, AAP MLA, March 2025 Assembly',
    },
    entityBlamed:
      "AAP State Government — healthcare recruitment skewed, rural Malwa neglected",
    resolutionStatus:
      "PARTIALLY ADDRESSED. Clinics operational but understaffed. No new medical college in Malwa. Cancer patients still travelling to Bikaner.",
    congressProposedResponse: [
      "Medical college in Bathinda with cancer speciality",
      "Trauma centres in every subdivision",
      "Guaranteed doctor-to-population ratio",
      "Mobile cancer screening units",
    ],
  },

  // Law & Order Crisis
  lawOrder: {
    intensity: "HIGH",
    affectedDistricts: ["Sangrur", "Mansa", "Bathinda", "Moga", "Ludhiana rural"],
    keyEvidence: {
      sidhuMoosewala: {
        murder: "May 2022",
        location: "Mansa",
        impact: "Massive public anger; AAP government's Anti-Gangster Task Force faced backlash over encounter killings",
      },
      gangsterIssue:
        "Lawrence Bishnoi giving televised interviews from custody — government accountability questioned",
      extortionRackets:
        "Extortion rackets targeting businesses in Ludhiana and smaller towns",
      aapMlaJailed:
        "AAP MLA Pathanmajra jailed; alleges false FIRs for criticising flood response (April 2026)",
    },
    entityBlamed: "AAP State Government — law and order is a state subject",
    resolutionStatus:
      "UNRESOLVED. Anti-Gangster Task Force operational but gangster network expanding. Cross-state coordination inadequate.",
  },

  // AAP Unfulfilled Promises
  aapPromises: {
    intensity: "HIGH",
    brokenPromises: {
      womenStipend: {
        promise: "Rs 1,000/month for women",
        status: "NOT DELIVERED (3+ years in office)",
      },
      drugFreePunjab: {
        promise: "Drug-free Punjab in 3 months",
        status: "FAILED",
      },
      msp22Crops: {
        promise: "22 crops at MSP",
        status: "NOT IMPLEMENTED",
      },
      sandMining: {
        claimed: 20000, // Rs crore potential
        actual: 288, // Rs crore actual
      },
      mohallaClinics: {
        promise: "Mohalla Clinics with full staffing",
        status: "PARTIALLY DONE",
      },
    },
    womenProtestNote:
      "Women protested outside Kejriwal's Delhi residence (Jan 2025) over unfulfilled stipend",
    politicalImplication:
      "Women voters are AAP's critical base. If Rs 1,000/month is delivered before election, 10-15 seats could shift. If not, Congress gains.",
  },

  // Education Crisis
  education: {
    intensity: "MEDIUM",
    keyEvidence: {
      schoolsOfEminence: {
        locations: "urban areas", // concentrated in urban areas
      },
      itiFundsDiversion:
        "AAP MLA Jagraon (Sarvajit Kaur Manuke) exposed diversion of ITI funds from her constituency to neighbouring Dakha",
      vacantPrincipalPosts: {
        total: 50, // of 64
      },
      zirakpurCollege:
        "No government college in Zirakpur; AAP MLA Kuljit Randhawa had to offer to arrange land",
    },
  },

  // Constituency Matrix - Top 30 Most Competitive Malwa Seats
  constituencyMatrix: {
    constituencies: [
      { rank: 1, constituency: "Bathinda Urban", district: "Bathinda", winner2022: "AAP", topIssues: ["Cancer/water", "unemployment", "drugs"], congressOpportunity: "HIGH" },
      { rank: 2, constituency: "Bathinda Rural", district: "Bathinda", winner2022: "AAP", topIssues: ["Canal tail-end", "cancer", "groundwater"], congressOpportunity: "HIGH" },
      { rank: 3, constituency: "Talwandi Sabo", district: "Bathinda", winner2022: "AAP", topIssues: ["Cancer", "drugs", "irrigation"], congressOpportunity: "HIGH" },
      { rank: 4, constituency: "Maur", district: "Bathinda", winner2022: "AAP", topIssues: ["Drugs", "canal water", "cancer"], congressOpportunity: "MEDIUM-HIGH" },
      { rank: 5, constituency: "Muktsar", district: "Muktsar", winner2022: "AAP", topIssues: ["Cancer (#1 in Punjab)", "drugs", "water"], congressOpportunity: "HIGH" },
      { rank: 6, constituency: "Malout", district: "Muktsar", winner2022: "AAP", topIssues: ["Drugs", "unemployment", "canal water"], congressOpportunity: "HIGH" },
      { rank: 7, constituency: "Gidderbaha", district: "Muktsar", winner2022: "AAP (byelection 2024)", topIssues: ["Drugs", "irrigation", "stubble"], congressOpportunity: "MEDIUM" },
      { rank: 8, constituency: "Lambi", district: "Muktsar", winner2022: "AAP", topIssues: ["Canal water", "cancer", "drugs"], congressOpportunity: "HIGH" },
      { rank: 9, constituency: "Mansa", district: "Mansa", winner2022: "AAP", topIssues: ["Drugs", "cancer", "unemployment"], congressOpportunity: "HIGH" },
      { rank: 10, constituency: "Sardulgarh", district: "Mansa", winner2022: "AAP", topIssues: ["Canal tail-end", "cancer", "drugs"], congressOpportunity: "HIGH" },
      { rank: 11, constituency: "Budhlada", district: "Mansa", winner2022: "AAP", topIssues: ["Irrigation", "drugs", "unemployment"], congressOpportunity: "MEDIUM-HIGH" },
      { rank: 12, constituency: "Sangrur", district: "Sangrur", winner2022: "AAP", topIssues: ["Unemployment", "drugs", "gangsters"], congressOpportunity: "HIGH" },
      { rank: 13, constituency: "Sunam", district: "Sangrur", winner2022: "AAP", topIssues: ["Canal water", "drugs", "stubble burning"], congressOpportunity: "HIGH" },
      { rank: 14, constituency: "Lehra", district: "Sangrur", winner2022: "AAP", topIssues: ["Irrigation", "unemployment", "drugs"], congressOpportunity: "MEDIUM-HIGH" },
      { rank: 15, constituency: "Barnala", district: "Barnala", winner2022: "CONGRESS (byelection 2024)", topIssues: ["Unemployment", "health", "education"], congressOpportunity: "BASE" },
      { rank: 16, constituency: "Bhadaur", district: "Barnala", winner2022: "AAP", topIssues: ["Drugs", "canal water", "unemployment"], congressOpportunity: "MEDIUM-HIGH" },
      { rank: 17, constituency: "Dhanaula", district: "Barnala", winner2022: "AAP", topIssues: ["Health infrastructure", "drugs"], congressOpportunity: "MEDIUM" },
      { rank: 18, constituency: "Faridkot", district: "Faridkot", winner2022: "AAP", topIssues: ["Cancer", "drugs", "uranium water"], congressOpportunity: "HIGH" },
      { rank: 19, constituency: "Kotkapura", district: "Faridkot", winner2022: "AAP", topIssues: ["Canal water", "drugs", "cancer"], congressOpportunity: "HIGH" },
      { rank: 20, constituency: "Jaitu", district: "Faridkot", winner2022: "AAP", topIssues: ["Irrigation", "cancer", "unemployment"], congressOpportunity: "MEDIUM-HIGH" },
      { rank: 21, constituency: "Ferozepur Rural", district: "Ferozepur", winner2022: "AAP", topIssues: ["Border area neglect", "drugs", "canal water"], congressOpportunity: "HIGH" },
      { rank: 22, constituency: "Ferozepur City", district: "Ferozepur", winner2022: "AAP", topIssues: ["Unemployment", "drugs", "development"], congressOpportunity: "MEDIUM-HIGH" },
      { rank: 23, constituency: "Guruharsahai", district: "Ferozepur", winner2022: "AAP", topIssues: ["Canal tail-end", "drugs", "cancer"], congressOpportunity: "HIGH" },
      { rank: 24, constituency: "Fazilka", district: "Fazilka", winner2022: "AAP", topIssues: ["Canal crisis (Gang Canal)", "drugs", "cancer"], congressOpportunity: "HIGH" },
      { rank: 25, constituency: "Abohar", district: "Fazilka", winner2022: "AAP", topIssues: ["Drugs", "unemployment", "irrigation"], congressOpportunity: "MEDIUM-HIGH" },
      { rank: 26, constituency: "Moga", district: "Moga", winner2022: "AAP", topIssues: ["Health deficit (4 doctors!)", "drugs", "unemployment"], congressOpportunity: "HIGH" },
      { rank: 27, constituency: "Dharamkot", district: "Moga", winner2022: "AAP", topIssues: ["Health crisis", "drugs", "stubble burning"], congressOpportunity: "HIGH" },
      { rank: 28, constituency: "Nihal Singh Wala", district: "Moga", winner2022: "AAP", topIssues: ["Drugs", "irrigation", "unemployment"], congressOpportunity: "MEDIUM-HIGH" },
      { rank: 29, constituency: "Ludhiana Rural", district: "Ludhiana", winner2022: "AAP", topIssues: ["Unemployment", "industry decline", "law & order"], congressOpportunity: "HIGH" },
      { rank: 30, constituency: "Jagraon", district: "Ludhiana", winner2022: "AAP", topIssues: ["ITI diversion", "drugs", "stubble burning"], congressOpportunity: "MEDIUM-HIGH" },
    ],
  },

  // Electoral Dynamics
  antiIncumbency: {
    description:
      '"Anti-incumbency is widespread, but Punjab enters 2026 without a unified alternative — leaving arithmetic, not anger, to decide power" — PunjabToday, Jan 2026',
    aapVoteShare2022: 42,
    aapVoteShare2024: 26,
    congressBase: "20-25% stable; natural magnet for anti-incumbency",
    winningThreshold: {
      fourCornered: 20, // ~20-22%
      threeCornered: 27, // ~26-28%
    },
  },

  aapInternalDissent: {
    description: "AAP's own MLAs publicly attacking government in Assembly (March 2025)",
    keyIncidents: [
      'AAP MLA Dharamkot: "Is Moga not part of Punjab? We feel like we are living in Pakistan"',
      "AAP MLA Mohali contradicted Health Minister on dispensary staff",
      "7 Rajya Sabha MPs defected to BJP (April 2026)",
      'AAP launched "public shaming" drive against defectors — signals desperation',
    ],
    rajyaSabhaDefection: {
      date: "April 2026",
      count: 7,
    },
    congressClaim: "30+ AAP MLAs ready to switch",
  },

  womenVoters: {
    influence: "Women influence nearly half of household voting decisions",
    aapPromiseIssue:
      "AAP's Rs 1,000/month promise unfulfilled — critical trust deficit",
    deliveryImpact:
      "If delivered before election, AAP blunts anti-incumbency; if not, 10-15 seats swing to Congress",
    drugCrisisImpact:
      "Drug crisis disproportionately impacts women (sons/husbands addicted)",
  },

  dalitVote: {
    percentOfPunjab: 32,
    percentInRuralMalwa: 37,
    aapInroads:
      "AAP has made inroads via welfare schemes and panchayat land rights",
    congressBase: "Congress traditional Dalit base eroded but not destroyed",
    landRightsIssue:
      "AAP government did salvage panchayat land encroachments and conducted Shamlat auctions per law — positive for AAP",
    congressMustOffer:
      "Congress must offer concrete Dalit economic agenda to regain lost ground",
  },

  // Campaign Intelligence
  leveragePoints: [
    {
      priority: 1,
      narrative: "Drug Crisis + Unemployment",
      description:
        'Combine as "AAP destroyed your children\'s future" narrative; drugs and joblessness are the SAME issue for voters',
    },
    {
      priority: 2,
      narrative: "Cancer Belt Betrayal",
      description:
        "No cancer hospital in 4 years despite Malwa being India's worst-affected region; visceral emotional issue",
    },
    {
      priority: 3,
      narrative: "Women's Betrayal",
      description:
        "Rs 1,000/month promise broken; directly hits the demographic most likely to swing",
    },
    {
      priority: 4,
      narrative: "Tail-End Farmers",
      description:
        "Canal water not reaching villages in Mansa, Bathinda, Fazilka while MLA claims improvements; combine with groundwater crisis",
    },
    {
      priority: 5,
      narrative: "Health Infrastructure",
      description:
        "AAP's own MLAs admitting health system collapse in Malwa",
    },
  ],

  attackLines: [
    { priority: 1, constituency: "Muktsar", primaryAttack: "Cancer capital of Punjab — no hospital", supportingEvidence: "136.3/lakh cancer rate, highest in India" },
    { priority: 2, constituency: "Dharamkot", primaryAttack: "Health apartheid", supportingEvidence: 'AAP MLA said "feels like Pakistan" — only 4 doctors' },
    { priority: 3, constituency: "Bathinda Rural", primaryAttack: "Cancer + uranium + canal failure", supportingEvidence: "684 ppb uranium, tail-end villages dry" },
    { priority: 4, constituency: "Fazilka", primaryAttack: "Canal crisis — farmers threatened suicide", supportingEvidence: "Sirhind Feeder closed without notice" },
    { priority: 5, constituency: "Mansa", primaryAttack: "Moosewala murder + drugs", supportingEvidence: "Law and order collapse" },
    { priority: 6, constituency: "Sangrur", primaryAttack: "CM's own district — broken promises", supportingEvidence: "Unemployment 22.5% rural, drugs unabated" },
    { priority: 7, constituency: "Moga", primaryAttack: "Health neglect", supportingEvidence: "Only 4 doctors in two recruitment rounds" },
    { priority: 8, constituency: "Faridkot", primaryAttack: "Cancer + uranium water", supportingEvidence: "113 ppb uranium, cancer belt district" },
    { priority: 9, constituency: "Talwandi Sabo", primaryAttack: "Cancer + contaminated water", supportingEvidence: "Core of cancer belt" },
    { priority: 10, constituency: "Ferozepur Rural", primaryAttack: "Border neglect + drugs", supportingEvidence: "Drug trafficking epicentre" },
  ],

  // Data Gaps
  dataGaps: [
    { dataPoint: "Constituency-wise cancer incidence (2024-2026)", status: "NOT_FOUND", actionRequired: "File RTI or use ICMR registry" },
    { dataPoint: "Drug seizure data by district (2024-2026)", status: "PARTIAL", actionRequired: "Need district-level breakdown" },
    { dataPoint: "Canal water delivery to tail-end villages (constituency-wise)", status: "PARTIAL", actionRequired: "MLA-level survey needed" },
    { dataPoint: "AAP Mohalla Clinic staffing by Malwa constituency", status: "NOT_FOUND", actionRequired: "Ground verification required" },
    { dataPoint: "Stubble burning hotspots by constituency (2024-2025)", status: "PARTIAL", actionRequired: "NASA VIIRS data by constituency" },
    { dataPoint: "Women's stipend delivery timeline", status: "CONFIRMED_NOT_DELIVERED", actionRequired: "Track AAP budget allocations" },
    { dataPoint: "AAP MLA performance rating (constituency-wise)", status: "NOT_FOUND", actionRequired: "Commission survey" },
    { dataPoint: "Farmer suicide data by district (2024-2026)", status: "NOT_FOUND", actionRequired: "Critical data gap" },
    { dataPoint: "De-addiction centre count by district vs requirement", status: "PARTIAL", actionRequired: "State assembly question" },
    { dataPoint: "Groundwater depth trend by block (2020-2025)", status: "PARTIAL", actionRequired: "CGWB data available" },
  ],

  // Sources
  sources: [
    { id: 1, title: "Times of India — Groundwater depletion", source: "Mar 31, 2026" },
    { id: 2, title: "Union Ministry of Jal Shakti — Rajya Sabha reply", source: "Mar 30, 2026" },
    { id: 3, title: "UNI India — Heavy metals and uranium contamination", source: "Feb 10, 2026" },
    { id: 4, title: "Frontline/The Hindu — Unkept promises in Punjab", source: "Jan 29, 2025" },
    { id: 5, title: "Times of India — AAP MLAs slam govt in Assembly", source: "Mar 26, 2025" },
    { id: 6, title: "IDPC/Talking Drugs — Punjab needs healing", source: "Jun 16, 2025" },
    { id: 7, title: "PunjabToday — Punjab 2027: Anti-Incumbency Without an Alternative", source: "Jan 9, 2026" },
    { id: 8, title: "Times of India — Youth unemployment rises in Punjab (PLFS Oct-Dec 2025)", source: "Feb 11, 2026" },
    { id: 9, title: "BARC/Central University of Punjab — Uranium contamination study", source: "2024" },
    { id: 10, title: "CGWB Annual Ground Water Quality Report", source: "2025" },
    { id: 11, title: "Hindustan Times — Punjab Farm fire count 890, Malwa belt epicentre", source: "Oct 28, 2025" },
    { id: 12, title: "Indian Express — Water crisis: Punjab farmers bear the brunt", source: "Mar 19, 2024" },
    { id: 13, title: "Tribune India — AAP launches public shaming drive after 7 RS MPs defect", source: "Apr 26, 2026" },
    { id: 14, title: "CGWB/Bhabha Atomic Research Centre — 1,500-sample uranium analysis", source: "2024" },
    { id: 15, title: "Scribd/Punjab Current Affairs 2025 — All-Women Anti-Drug Committees in Malwa", source: "2025" },
  ],
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get crisis intensity color
 */
export function getCrisisIntensityColor(intensity: string): string {
  switch (intensity) {
    case "CRITICAL":
      return "bg-red-500";
    case "HIGH":
      return "bg-orange-500";
    case "MEDIUM":
      return "bg-yellow-500";
    case "LOW":
      return "bg-green-500";
    default:
      return "bg-blue-500";
  }
}

/**
 * Get congress opportunity badge variant
 */
export function getOpportunityVariant(opportunity: string): "success" | "warning" | "danger" | "info" {
  switch (opportunity) {
    case "HIGH":
      return "success";
    case "MEDIUM-HIGH":
      return "info";
    case "MEDIUM":
      return "warning";
    case "BASE":
      return "danger";
    default:
      return "info";
  }
}

/**
 * Get top 10 attack targets
 */
export function getTopAttackLines(): ConstituencyAttackLine[] {
  return localIssuesMalwaKPI.attackLines;
}

/**
 * Get critical issues by intensity
 */
export function getCriticalIssues(): string[] {
  const issues = localIssuesMalwaKPI;
  const critical: string[] = [];

  if (issues.drugAddiction.intensity === "CRITICAL") critical.push("Drug Addiction");
  if (issues.cancerBelt.intensity === "CRITICAL") critical.push("Cancer Belt & Water Contamination");
  if (issues.unemployment.intensity === "CRITICAL") critical.push("Unemployment & Youth Distress");

  return critical;
}

/**
 * Get high issues by intensity
 */
export function getHighIssues(): string[] {
  const issues = localIssuesMalwaKPI;
  const high: string[] = [];

  if (issues.canalIrrigation.intensity === "HIGH") high.push("Canal Irrigation & Tail-End Water Injustice");
  if (issues.groundwaterDepletion.intensity === "HIGH") high.push("Groundwater Depletion");
  if (issues.stubbleBurning.intensity === "HIGH") high.push("Stubble Burning & Air Pollution");
  if (issues.healthInfrastructure.intensity === "HIGH") high.push("Health Infrastructure Deficit");
  if (issues.lawOrder.intensity === "HIGH") high.push("Law & Order / Gangster Crisis");
  if (issues.aapPromises.intensity === "HIGH") high.push("AAP Unfulfilled Promises");

  return high;
}

/**
 * Get constituencies by congress opportunity
 */
export function getHighOpportunityConstituencies(): ConstituencyIssue[] {
  return localIssuesMalwaKPI.constituencyMatrix.constituencies.filter(
    (c) => c.congressOpportunity === "HIGH"
  );
}

/**
 * Get drug crisis statistics for display
 */
export function getDrugCrisisStats(): { label: string; value: string }[] {
  const scale = localIssuesMalwaKPI.drugAddiction.scale;
  return [
    { label: "Total Drug Users", value: `${(scale.totalDrugUsers / 1000000).toFixed(1)}M` },
    { label: "Children with Disorders", value: `${(scale.childrenWithSubstanceDisorders / 1000).toFixed(0)}K` },
    { label: "Families Affected", value: `${scale.familiesAffected}%` },
    { label: "Drones Seized (2024)", value: `${scale.dronesSeized2024}+` },
  ];
}

/**
 * Get cancer crisis statistics for display
 */
export function getCancerCrisisStats(): { label: string; value: string }[] {
  const scale = localIssuesMalwaKPI.cancerBelt.scale;
  return [
    { label: "Muktsar Cancer Rate", value: `${scale.muktsarCancerPrevalence}/lakh` },
    { label: "Uranium (Bathinda)", value: `${scale.bathindaUranium.concentration} ppb` },
    { label: "WHO Safe Limit", value: `${scale.bathindaUranium.whoLimit} ppb` },
    { label: "Samples Exceeded Limits", value: `${scale.barcAnalysis.exceededLimitsPercent}%` },
  ];
}

/**
 * Get unemployment statistics for display
 */
export function getUnemploymentStats(): { label: string; value: string }[] {
  const scale = localIssuesMalwaKPI.unemployment.scale;
  return [
    { label: "Youth Unemployment", value: `${scale.youthUnemployment15129}%` },
    { label: "Rural Youth", value: `${scale.ruralYouthUnemployment}%` },
    { label: "Female Youth", value: `${scale.ruralFemaleUnemployment}%` },
    { label: "Punjab Debt", value: `Rs ${(scale.punjabDebt.amount / 100000).toFixed(1)}L Cr` },
  ];
}
