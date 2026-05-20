// Population Structure & Demographics Data for Punjab 2027
// Source: research-M2/MP1-foundational/demographics/population-structure.md
// Research Date: 2026-05-20

import type { PopulationStructureData } from "@/types/population-types";

export const populationStructureData: PopulationStructureData = {
  // ==========================================
  // 1. POPULATION OVERVIEW
  // ==========================================
  populationOverview: {
    census2011: {
      population: 27743338,
      populationCrore: "2.77 crore",
      rankingAmongStates: 16,
      shareOfIndiaPopulation: 2.3,
      density: 551,
      decadalGrowthRate: 13.9,
      previousDecadalGrowthRate: 20.1, // 1991-2001
    },
    projections: {
      projectedPopulation2026: 31370000,
      projectedPopulationMillion: "~31.37 million",
      annualGrowthRate2026: 0.58,
      growthRankAmongStates: "10th lowest among Indian states",
      growthTrend: {
        yearlyGrowth2011: 3.2, // lakh/year
        yearlyGrowth2020: 1.5, // lakh/year
      },
    },
  },

  // ==========================================
  // 2. RELIGIOUS COMPOSITION
  // ==========================================
  religiousComposition: {
    census2011: {
      sikh: 57.69,
      hindu: 38.49,
      christian: 1.26,
      muslim: 1.93,
      other: 0.6,
    },
    sikhTrend: {
      census2001: 59.91,
      census2011: 57.69,
      projected2025: 55, // estimated - below 55%
      projected2030: 50, // some analysts suggest below 50%
    },
    dalitSC: {
      populationPercent: 32,
      rankingAmongStates: "one of the highest SC percentages among Indian states",
      highestConcentration: [
        { district: "SBS Nagar", percent: 42.5 },
        { district: "Muktsar", percent: 42.3 },
        { district: "Fazilka", percent: 42.3 },
        { district: "Firozepur", percent: 42.1 },
      ],
    },
    unverifiedClaims: {
      christianPopulationClaim: 15,
      source: "Asia Samachar, December 2024 (advocacy-sourced)",
      note: "NOT independently verified. 2011 Census recorded only 1.26%.",
      requiresVerification: true,
    },
  },

  // ==========================================
  // 3. GENDER & SEX RATIO
  // ==========================================
  sexRatio: {
    historical: [
      { year: 1911, ratio: 870 },
      { year: 1971, ratio: 865 },
      { year: 1991, ratio: 882 },
      { year: 2001, ratio: 876 },
      { year: 2011, ratio: 895 },
    ],
    census2011: 895,
    sexRatioAtBirth2025: 924,
    nationalAverage2025: 928,
    regionalGap: "Punjab historically underperformed; gap narrowing",
    districtLevel: [
      { district: "Hoshiarpur", sexRatio: 961, region: "Doaba" },
      { district: "SBS Nagar", sexRatio: 954, region: "Doaba" },
      { district: "Rupnagar", sexRatio: 915, region: "Doaba" },
      { district: "Jalandhar", sexRatio: 915, region: "Doaba" },
      { district: "Kapurthala", sexRatio: 912, region: "Majha" },
      { district: "Tarn Taran", sexRatio: 900, region: "Majha" },
      { district: "Ludhiana", sexRatio: 873, region: "Malwa" },
      { district: "Bathinda", sexRatio: 868, region: "Malwa" },
    ],
    regionalPattern: [
      { region: "Doaba", average: 936, trend: "significantly better" },
      { region: "Majha", average: 909, trend: "moderate" },
      { region: "Malwa", average: 870, trend: "lagging" },
    ],
  },

  // ==========================================
  // 4. AGE STRUCTURE
  // ==========================================
  ageStructure: {
    census2011: {
      ageGroups: [
        { group: "0-14 (children)", population: 7084950, percent: 25.53 },
        { group: "15-29 (youth)", population: 8058180, percent: 29.05 },
        { group: "30-44 (young adults)", population: 5894079, percent: 21.25 },
        { group: "45-59 (middle-aged)", population: 3798790, percent: 13.69 },
        { group: "60+ (elderly)", population: 1847158, percent: 6.65 },
      ],
      workingAge: {
        population: 17751049,
        percent: 63.98,
        ageRange: "15-59",
      },
    },
    dependencyRatios: {
      youngDependency: 40, // per 100 working-age
      oldDependency: 10, // per 100 working-age
      totalDependency: 50, // per 100 working-age
    },
    fertilityRates: [
      { education: "No schooling", rate: 2.5 },
      { education: "<5 years schooling", rate: 2.5 },
      { education: "5-9 years", rate: 2.0 },
      { education: "10-11 years", rate: 1.9 },
      { education: "12+ years", rate: 1.5 },
    ],
    keyInsights: {
      agingRate: "Punjab is aging faster than most Indian states",
      comparisonToKerala: "By 2030, old-age dependency ratio projected to reach levels comparable to Kerala",
      youthPipelineImplication: "Slower population growth means shrinking youth voter pipeline compared to neighboring states",
    },
  },

  // ==========================================
  // 5. URBAN vs RURAL SPLIT
  // ==========================================
  urbanRuralSplit: {
    census2011: {
      urbanPercent: 37.5,
      ruralPercent: 62.5,
      urbanGrowth2001to2011: 37.5,
    },
    urbanizationRank: "After Maharashtra, Gujarat, Tamil Nadu, Kerala",
    majorUrbanCenters: [
      { city: "Ludhiana", populationApprox: 1.7 },
      { city: "Amritsar", populationApprox: 1.3 },
      { city: "Jalandhar", populationApprox: 1.1 },
      { city: "Patiala", populationApprox: 0.5 },
      { city: "Bathinda", populationApprox: 0.4 },
      { city: "Mohali/SAS Nagar", populationApprox: 0.4 },
    ],
    politicalImplication: {
      urbanVoterGrowth: "Creates new competitive seats",
      ruralHeartland: "Malwa (69 seats) is predominantly rural agrarian",
      malwaSeats: 69,
    },
  },

  // ==========================================
  // 6. LITERACY & EDUCATION
  // ==========================================
  literacyEducation: {
    census2011: {
      overall: 76,
      male: 81,
      female: 71,
    },
    lifeExpectancy: {
      state: 70.8,
      national: 69.9,
      urban: 73.3,
      rural: 69.2,
      gap: 4.1,
    },
    implications: [
      "High literacy correlates with political awareness and issue-based voting",
      "Punjab's educated youth are increasingly mobile and globally connected",
      "IELTS and study abroad have become mainstream life aspirations",
    ],
  },

  // ==========================================
  // 7. ECONOMIC & OCCUPATIONAL STRUCTURE
  // ==========================================
  economicStructure: {
    sectoralEmployment: [
      { sector: "Agriculture & allied", percentOfEmployment: 2.78 },
      { sector: "Secondary (manufacturing, construction, utilities)", percentOfEmployment: 38.15 },
      { sector: "Tertiary (services, trade, transport)", percentOfEmployment: 59.08 },
    ],
    agricultureAllied: 2.78,
    secondary: 38.15,
    tertiary: 59.08,
    keyFinding: "Despite Punjab's agrarian identity, agriculture employs fewer than 3% of workers",
    politicalImplication: "Voter concerns: Jobs, not land reform, are the dominant economic priority. AAP's 5-year record will be judged on urban job creation and manufacturing investment",
  },

  // ==========================================
  // 8. YOUTH UNEMPLOYMENT
  // ==========================================
  youthUnemployment: {
    urbanYouthRate: [
      { period: "July-September 2024", unemploymentRate: 12.2, trend: "baseline" },
      { period: "October-December 2024", unemploymentRate: 14.9, trend: "sharply rising" },
    ],
    genderBreakdown: [
      { gender: "Female", unemploymentRate: 21.7 },
      { gender: "Male", unemploymentRate: 12.8 },
    ],
    labourForceIndicators: [
      { indicator: "Labour Force Participation Rate (LFPR)", octToDec2024: 43.3, previousQuarter: 43.8 },
      { indicator: "Worker Population Ratio (WPR)", octToDec2024: 36.9, previousQuarter: 38.5 },
    ],
    usDeportationConnection: {
      totalDeported: 332,
      punjabOrigin: 126,
      percent: 38,
      implication: "Illegal migration is a significant coping mechanism for unemployed youth. Families have incurred heavy debts expecting remittances — deportation creates economic shock",
    },
    politicalRisk: "Mann government promised 'reverse migration' through job creation. The worsening youth unemployment data directly undermines this promise",
  },

  // ==========================================
  // 9. NRI / DIASPORA
  // ==========================================
  nriDiaspora: {
    estimates: [
      { destination: "Canada", estimatedPopulation: "1.2-1.5 million" },
      { destination: "USA", estimatedPopulation: "500,000-700,000" },
      { destination: "UK", estimatedPopulation: "400,000-600,000" },
      { destination: "Australia", estimatedPopulation: "200,000-300,000" },
      { destination: "Gulf Countries", estimatedPopulation: "300,000-500,000" },
    ],
    totalEstimated: "~3-4 million",
    diasporaAsPercentOfDomestic: "10-13% of domestic population — one of the highest diaspora-to-home ratios for any Indian state",
    nriHouseholds: [
      { region: "Doaba", percentRuralHouseholds: 24 },
      { region: "Majha", percentRuralHouseholds: 12 },
      { region: "Malwa", percentRuralHouseholds: 5 },
    ],
    nriVotingPotential: {
      registration: "Possible via Form 12F (proxy voting)",
      actualTurnout: "<5% of eligible NRIs vote",
      strategicImplication: "NRI votes are electorally negligible. However, NRI remittances ($3-4 billion estimated annually) create economic dependencies that shape family political expectations",
    },
    changingSocialProfile: {
      communityShift: "Now includes urban Sikhs, upper-caste Hindus, and better-off SC households",
      classShift: "Established business owners and professionals emigrating, not just unemployed youth",
      genderShift: "Young women increasingly emigrating independently",
      casteBroadening: "SC youth (better-off sections) now emigrating in significant numbers",
    },
    villages: [
      {
        name: "Dosanjh Kalan",
        district: "Jalandhar district",
        classification: "NRI village",
        percentHouseholds: 40,
      },
    ],
  },

  // ==========================================
  // 10. MIGRATION PATTERNS
  // ==========================================
  migrationPatterns: {
    outboundEmigration: {
      historicPattern: "Doaba first → Majha second → Malwa last and fastest",
      regions: [
        { region: "Doaba", description: "Emigration began here due to smaller landholdings, post-WWII visas" },
        { region: "Majha", description: "Greater economic integration with West" },
        { region: "Malwa", description: "Driven by agrarian distress; now includes Sangrur, Faridkot, Muktsar, Tarn Taran" },
      ],
      pushFactors: [
        "Stagnating agrarian income",
        "Decline in government jobs",
        "Lack of quality private sector employment",
        "Social aspiration linked to emigration (marriage prospects, status)",
        "Visa consultant ecosystem normalizing emigration as a life plan",
      ],
      pullFactors: [
        "Study visas to Canada, UK, Australia, USA",
        "Job opportunities in Gulf (for lower-skilled workers)",
        "Family reunification",
      ],
    },
    recentReversal: [
      { indicator: "Passport applications", trend: "Dropped ~40% since 2023", source: "Tribune, Feb 2026" },
      { indicator: "IELTS coaching business", trend: "Down 60-70%", source: "TOI, Oct 2023" },
      { indicator: "Visa consultant closures", trend: "Multiple reported", source: "TOI report" },
      { indicator: "Canada visa tightening", trend: "Bill C-12 restrictions", source: "News reports" },
      { indicator: "US ICE enforcement", trend: "Increased deportations", source: "News reports" },
    ],
    inboundMigration: {
      description: "Punjab is a net migrant-receiving state — workers from Bihar, UP, Jharkhand fill agricultural and construction labor gaps",
      tensions: "Village councils (Mohali district) passing resolutions against migrants; Punjab & Haryana High Court has issued notices on migrant rights violations",
    },
    financialCost: [
      { category: "Assets sold/mortgaged", amountCrore: "Rs. 5,636 crore" },
      { category: "Borrowed for emigration", amountCrore: "Rs. 14,342 crore" },
    ],
  },

  // ==========================================
  // 11. VOTER ROLL & ELECTORAL DATA
  // ==========================================
  electoralData: {
    registeredVoters2022: 21499804,
    voterTurnout2022: 72.15,
    turnoutChangeFrom2017: -5.05,
    previousTurnout: 77.2,
    votesCast2022: 15500000,
    totalAssemblySeats: 117,
    seatsNeededForMajority: 59,
    femaleTurnout: "Typically 2-5 percentage points lower than male turnout. AAP made targeted women-specific outreach in 2022",
  },

  // ==========================================
  // 12. 2027 ELECTION DEMOGRAPHIC IMPLICATIONS
  // ==========================================
  electionImplications: {
    factors: [
      { factor: "Youth unemployment (14.9%, rising sharply)", direction: "Anti-incumbent", intensity: "HIGH" },
      { factor: "Female youth unemployment (21.7%)", direction: "Anti-incumbent, women voters", intensity: "HIGH" },
      { factor: "Male youth emigration", direction: "Depresses AAP's potential critics at home", intensity: "MEDIUM" },
      { factor: "Dalit population (32%)", direction: "Congress historical base, needs AAP-proofing", intensity: "HIGH" },
      { factor: "Female voter turnout gap", direction: "Opportunity for Congress mobilization", intensity: "MEDIUM" },
      { factor: "Declining Sikh %", direction: "Changes intra-Sikh voting dynamics", intensity: "MEDIUM" },
      { factor: "Malwa agrarian distress", direction: "Anti-incumbent, emigration-driven anger", intensity: "HIGH" },
      { factor: "NRI remittance dependency", direction: "Families sensitive to visa/deportation shocks", intensity: "MEDIUM" },
      { factor: "Urban voter growth", direction: "Creates new competitive seats", intensity: "MEDIUM" },
      { factor: "NRI household concentration", direction: "Doaba 24% — diaspora influence on family voting", intensity: "MEDIUM" },
    ],
    congressStrategies: [
      {
        priority: 1,
        strategyName: "Dalit Re-mobilization (HIGHEST PRIORITY)",
        description: "32% of population is the decisive voting bloc. Congress's 2022 Dalit support collapsed to AAP. Targeted outreach to Dalit youth, women, community leaders, and welfare promise tracking is essential.",
        targetSeats: "40+ where Dalit voters are the swing bloc",
        keyActions: [
          "Engage all major dera heads — do not rely on single dera",
          "Field strong SC candidates in reserved seats with local biradari credibility",
          "Counter BJP's Modi-at-dera symbolism with substance on welfare promises",
          "Target BSP voters — BSP's 40+ block samiti wins show Dalit assertion space exists",
        ],
      },
      {
        priority: 2,
        strategyName: "Youth Economic Narrative",
        description: "Youth unemployment at 14.9% (rising) is the single most potent anti-AAP message. Congress needs a credible jobs/skills/industry alternative, not just criticism.",
        keyActions: [
          "Must address the blocked-emigration frustration",
          "Present credible alternative to AAP's job creation promises",
          "Focus on urban job creation and manufacturing investment",
        ],
      },
      {
        priority: 3,
        strategyName: "Female Voter Activation",
        description: "Female youth unemployment at 21.7% and lower female turnout create a mobilization opportunity.",
        keyActions: [
          "Congress must present economic opportunity narratives for women specifically",
          "Targeted women-specific outreach similar to 2022 AAP approach",
        ],
      },
      {
        priority: 4,
        strategyName: "Malwa Focus",
        description: "Malwa (69 seats) faces the worst combination: agrarian distress, highest youth emigration growth, declining sex ratios, and highest borrowing for migration.",
        targetSeats: "69 seats",
        keyActions: [
          "These voters are angry, mobile, and connected to diaspora networks",
          "Address agrarian distress and blocked emigration frustration",
        ],
      },
      {
        priority: 5,
        strategyName: "Doaba NRI Outreach",
        description: "24% rural household NRI connections concentrated in Jalandhar, Kapurthala, Hoshiarpur, SBS Nagar districts.",
        keyActions: [
          "While NRI votes are few, NRI opinions influence family voting and financial flows",
          "Leverage diaspora networks for domestic political messaging",
        ],
      },
      {
        priority: 6,
        strategyName: "Urban Middle-Class Outreach",
        description: "Urban voter growth creates competitive seats in Ludhiana, Jalandhar, Amritsar, Patiala, Mohali.",
        keyActions: [
          "Educated professionals who are also emigrating are the decisive bloc",
          "Address both domestic job concerns and emigration aspirations",
        ],
      },
    ],
  },

  // ==========================================
  // DATA QUALITY INDEX
  // ==========================================
  dataQuality: [
    { dataPoint: "Total population 2026 projection", quality: "HIGH", notes: "Technical Group, National Commission on Population" },
    { dataPoint: "Religious composition 2011 (Sikh/Hindu)", quality: "HIGH", notes: "2011 Census authoritative" },
    { dataPoint: "Religious composition current estimate", quality: "MEDIUM", notes: "Current % requires census verification" },
    { dataPoint: "Christian population (current %)", quality: "LOW", notes: "2011 Census: 1.26%. '15%' claim is unverified advocacy source" },
    { dataPoint: "Dalit (SC) population 32%", quality: "HIGH", notes: "Census 2011 confirmed" },
    { dataPoint: "Sex ratio (2011)", quality: "HIGH", notes: "Census 2011" },
    { dataPoint: "Sex ratio at birth (2025)", quality: "HIGH", notes: "Punjab Health Dept, Tribune reporting" },
    { dataPoint: "Youth unemployment (Oct-Dec 2024)", quality: "HIGH", notes: "PLFS, Ministry of Statistics" },
    { dataPoint: "Sectoral employment", quality: "HIGH", notes: "PLFS" },
    { dataPoint: "NRI household %", quality: "MEDIUM", notes: "Academic study (2023)" },
    { dataPoint: "Total diaspora population", quality: "LOW", notes: "Widely disputed estimates; no authoritative figure" },
    { dataPoint: "Voter turnout 2022", quality: "HIGH", notes: "ECI official data" },
    { dataPoint: "Passport/visa application trends", quality: "MEDIUM", notes: "Tribune (Feb 2026), TOI (Oct 2023)" },
  ],
};

// ==========================================
// DERIVED METRICS FOR DASHBOARD
// ==========================================

export const populationMetrics = {
  // Key demographic indicators
  totalPopulation2026: "~31.37 million",
  annualGrowthRate2026: "0.58% (10th lowest in India)",
  workingAgePopulation: "63.98%",
  youthPopulation15_29: "29.05%",
  elderlyPopulation60Plus: "6.65%",

  // Religious composition
  sikhPopulation: "57.69%",
  hinduPopulation: "38.49%",
  dalitPopulation: "32%",

  // Sex ratio
  sexRatio2011: 895,
  sexRatioAtBirth2025: 924,

  // Economic
  agricultureEmployment: "2.78%",
  serviceSectorEmployment: "59.08%",
  youthUnemployment: "14.9% (Oct-Dec 2024)",
  femaleYouthUnemployment: "21.7%",

  // NRI
  diasporaEstimate: "~3-4 million",
  diasporaAsPercentOfDomestic: "10-13%",
  nriRuralHouseholdsDoaba: "24%",

  // Electoral
  registeredVoters2022: "21.5 million",
  voterTurnout2022: "72.15%",
  turnoutChangeFrom2017: "-5.05 pp",

  // 2027 implications
  congressPriorityFactors: [
    { factor: "Youth unemployment", intensity: "HIGH", direction: "Anti-incumbent" },
    { factor: "Female youth unemployment", intensity: "HIGH", direction: "Anti-incumbent" },
    { factor: "Dalit population (32%)", intensity: "HIGH", direction: "Congress base" },
    { factor: "Malwa agrarian distress", intensity: "HIGH", direction: "Anti-incumbent" },
  ],
};

// Chart data for population age distribution
export const ageDistributionData = [
  { ageGroup: "0-14", population: 7084950, percent: 25.53, color: "#4F46E5" },
  { ageGroup: "15-29", population: 8058180, percent: 29.05, color: "#7C3AED" },
  { ageGroup: "30-44", population: 5894079, percent: 21.25, color: "#2563EB" },
  { ageGroup: "45-59", population: 3798790, percent: 13.69, color: "#059669" },
  { ageGroup: "60+", population: 1847158, percent: 6.65, color: "#DC2626" },
];

// Chart data for religious composition
export const religiousCompositionData = [
  { community: "Sikh", percent: 57.69, color: "#F59E0B" },
  { community: "Hindu", percent: 38.49, color: "#3B82F6" },
  { community: "Muslim", percent: 1.93, color: "#10B981" },
  { community: "Christian", percent: 1.26, color: "#EF4444" },
  { community: "Other", percent: 0.63, color: "#6B7280" },
];

// Chart data for sectoral employment
export const sectoralEmploymentData = [
  { sector: "Agriculture & Allied", percent: 2.78, color: "#22C55E" },
  { sector: "Secondary", percent: 38.15, color: "#3B82F6" },
  { sector: "Tertiary", percent: 59.08, color: "#8B5CF6" },
];

// Sex ratio trend data
export const sexRatioTrendData = [
  { year: 1911, ratio: 870 },
  { year: 1971, ratio: 865 },
  { year: 1991, ratio: 882 },
  { year: 2001, ratio: 876 },
  { year: 2011, ratio: 895 },
  { year: 2025, ratio: 924, isProjection: true },
];

// Youth unemployment trend
export const youthUnemploymentTrendData = [
  { period: "Jul-Sep 2024", rate: 12.2 },
  { period: "Oct-Dec 2024", rate: 14.9 },
];

// NRI diaspora destinations
export const nriDiasporaData = [
  { destination: "Canada", estimate: "1.2-1.5M", color: "#EF4444" },
  { destination: "USA", estimate: "500K-700K", color: "#3B82F6" },
  { destination: "UK", estimate: "400K-600K", color: "#22C55E" },
  { destination: "Gulf", estimate: "300K-500K", color: "#F59E0B" },
  { destination: "Australia", estimate: "200K-300K", color: "#8B5CF6" },
];

// District sex ratio data
export const districtSexRatioData = [
  { district: "Hoshiarpur", ratio: 961, region: "Doaba" },
  { district: "SBS Nagar", ratio: 954, region: "Doaba" },
  { district: "Rupnagar", ratio: 915, region: "Doaba" },
  { district: "Jalandhar", ratio: 915, region: "Doaba" },
  { district: "Kapurthala", ratio: 912, region: "Majha" },
  { district: "Tarn Taran", ratio: 900, region: "Majha" },
  { district: "Ludhiana", ratio: 873, region: "Malwa" },
  { district: "Bathinda", ratio: 868, region: "Malwa" },
];

// Dalit concentration by district
export const dalitConcentrationData = [
  { district: "SBS Nagar", percent: 42.5 },
  { district: "Muktsar", percent: 42.3 },
  { district: "Fazilka", percent: 42.3 },
  { district: "Firozepur", percent: 42.1 },
];

// Election implications summary
export const electionImplicationsSummary = {
  keyWarningSigns: [
    "Youth unemployment at 14.9% (rising sharply)",
    "Female youth unemployment at 21.7% (nearly double male rate)",
    "Voter turnout declined 5.05 pp from 2017",
    "Malwa agrarian distress + emigration-driven anger",
  ],
  opportunityAreas: [
    "Dalit population 32% — decisive voting bloc",
    "Female voter turnout gap — mobilization opportunity",
    "NRI household concentration in Doaba (24%)",
    "Urban voter growth creates competitive seats",
  ],
  congressPriorityStrategies: [
    "Dalit Re-mobilization (HIGHEST PRIORITY)",
    "Youth Economic Narrative",
    "Female Voter Activation",
    "Malwa Focus (69 seats)",
  ],
};
