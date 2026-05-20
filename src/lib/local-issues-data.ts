// Local Issues Data for Punjab Congress 2027 Election Dashboard
// Derived from: MP1-foundational/governance/local-issues-majha-doaba.md
// Research Date: 19 May 2026 | Data Currency: 2024-2026

import type {
  LocalIssuesKPI,
  BorderFarmingIssue,
  DrugMenaceIssue,
  GroundwaterContaminationIssue,
  SacrilegeJusticeIssue,
  HoochTragedyIssue,
  NRIPropertyIssue,
  YouthUnemploymentIssue,
  SportsLeatherIndustryIssue,
  SugarcaneFarmerIssue,
  IndustrialDeclineIssue,
  AdditionalMajhaIssue,
  AdditionalDoabaIssue,
  AAPPerformancePerception,
  OperationSindoorImpact,
  MigrationPressureValve,
  CongressStrategicPositioning,
  LocalIssuesSource,
} from "@/types/local-issues-types";

// ==========================================
// META
// ==========================================

const localIssuesMeta = {
  megaPillar: "MP1 — Foundational Scan",
  subPillar: "Governance & Local Issues",
  region: "Majha (Amritsar, Gurdaspur, Tarn Taran, Pathankot) + Doaba (Jalandhar, Hoshiarpur, Kapurthala, Nawanshahr)",
  dateCompiled: "19 May 2026",
  dataCurrency: "2024-2026",
  qualityFlag: "Research-grade; some constituency-level granular data marked VERIFICATION_NEEDED",
  sources: [
    "Indian Express",
    "Times of India",
    "The Hindu/Frontline",
    "Tribune",
    "NDTV",
    "Hindustan Times",
    "academic journals",
  ],
};

// ==========================================
// MAJHA DATA
// ==========================================

const borderFarmingData: BorderFarmingIssue = {
  priority: 1,
  affectedSeats: ["All border-adjacent seats in Amritsar, Tarn Taran, Gurdaspur, Pathankot (~10-12 seats)"],
  scale: {
    farmerLandAcres: 21500,
    govtLandAcres: 10000,
    villagesAffected: 220,
    totalHectares: "15-17 lakh hectares",
  },
  intensity: "HIGH",
  entityBlamed: ["Central Government (BSF protocol, fencing placement)", "AAP state govt for slow implementation"],
  resolutionStatus: "PARTIAL",
  keyGrievances: [
    "BSF gates open only fixed hours (9am-5pm summer, 10am-4pm winter)",
    "Two Kisan Guards required per tractor; frisking on entry and exit",
    "In some villages (Chhina Bhidichand, Khalra, Vaan, Dhal in Tarn Taran) fencing sits nearly 1 km inside Indian territory",
    "Land values and lease prospects depressed for fenced-out land",
    "Operation Sindoor (May 2025) caused unplanned evacuations; no compensation framework for crop loss",
  ],
  congressResponse: [
    "Demand time-bound fence realignment with Central funding",
    "Push for Rs 25,000/acre compensation for border farmers during military standoffs",
    "Advocate 24/7 farmer access with biometric ID instead of BSF gate system",
    "Link fence realignment to a comprehensive Border Area Development Package",
  ],
};

const drugMenaceData: DrugMenaceIssue = {
  priority: 2,
  affectedSeats: ["Tarn Taran (all 3 seats)", "Amritsar rural belt", "Gurdaspur border belt"],
  scale: {
    district: "Tarn Taran",
    note: "Worst-affected district in Punjab for heroin smuggling; drone drops from Pakistan routine",
  },
  intensity: "EXTREME",
  entityBlamed: [
    "Central govt (failure to seal border)",
    "AAP state govt (failure to rehabilitate)",
    "Pakistan-based smugglers",
  ],
  resolutionStatus: "UNRESOLVED",
  keyData: {
    deathsIn32Days: 42,
    hoochDeaths5Years: 176,
    majhaHooch2020: 121,
    arrestsClaimed: 992,
    budgetAllocation: 438,
  },
  congressResponse: [
    "Demand Central drug interdiction task force specifically for Majha border corridor",
    "Propose 100-bed de-addiction centre per border district with dedicated funding",
    "Attack AAP's 'arrest-only' approach — need rehabilitation, not just policing",
    "Counter BJP's Amit Shah drug campaign by pointing to Centre's failure to seal border",
    "Position Congress as the party of both strong borders AND compassionate rehabilitation",
  ],
};

const groundwaterContaminationData: GroundwaterContaminationIssue = {
  priority: 3,
  affectedDistricts: ["Amritsar (worst)", "Tarn Taran", "Gurdaspur", "Pathankot (relatively safe)"],
  scale: {
    samplesAnalysed: 2709,
    exceedArsenicLimit: 16,
    uraniumContamination: 62,
  },
  intensity: "SEVERE",
  entityBlamed: ["State and Central governments for decades of neglect"],
  resolutionStatus: "UNRESOLVED",
  keyFindings: {
    amritsarArsenic: {
      highest: 111,
      unit: "ppb",
      safeLimit: "0.05 ppm",
      veryHighRiskSamples: 44.1,
    },
    tarnTaranUranium: "Highest uranium concentration in Majha",
    gurdaspurArsenic: "Second worst for arsenic after Amritsar",
    arsenicHabitations: 60,
  },
  congressResponse: [
    "Demand emergency water purification infrastructure for all Majha districts",
    "Push for Central funding under National Rural Drinking Water Programme",
    "Call for health screening camps for cancer and heavy metal poisoning in affected villages",
    "Position as 'invisible crisis' that AAP has ignored while focusing on Mohalla Clinics",
  ],
};

const sacrilegeJusticeData: SacrilegeJusticeIssue = {
  priority: 4,
  affectedSeats: ["All Majha seats; particularly resonant in Amritsar belt"],
  scale: {
    casesSince2015: 97,
    convictions: 0,
  },
  intensity: "HIGH",
  entityBlamed: [
    "SAD-BJP (2015 incidents under their watch)",
    "Congress (Captain govt failed to deliver)",
    "AAP (new law but no convictions)",
  ],
  resolutionStatus: "PARTIAL",
  keyDevelopments: {
    lawPassed: "Jagat Jot Sri Guru Granth Sahib Satkar (Amendment) Act",
    lawDate: "April 2026",
    lifeImprisonment: true,
    zeroPastConvictions: true,
  },
  congressResponse: [
    "Demand fast-track courts for all 97 pending sacrilege cases with time-bound prosecution",
    "Point out AAP's law is prospective only — does not deliver justice for 2015 incidents",
    "Position Congress as the party that will deliver actual convictions, not just legislation",
    "Highlight Justice Ranjit Singh Commission findings implicating SAD-BJP",
    "Commit to establishing a Sacrilege Victims Compensation Fund",
  ],
};

const hoochTragedyData: HoochTragedyIssue = {
  priority: 5,
  affectedSeats: ["Majitha (Amritsar)", "Tarn Taran seats", "Batala (Gurdaspur)"],
  scale: {
    majitha2025: 27,
    majha2020: 121,
    total5Years: 176,
  },
  intensity: "HIGH",
  entityBlamed: ["AAP state government (excise policy failures)", "liquor mafia", "police complicity"],
  resolutionStatus: "UNRESOLVED",
  congressResponse: [
    "Demand CBI inquiry into police-politician-liquor mafia nexus",
    "Push for methanol tracking system with strict supply chain controls",
    "Attack AAP excise policy as enabling illicit liquor trade",
  ],
};

const additionalMajhaIssues: AdditionalMajhaIssue[] = [
  {
    rank: 6,
    issue: "Unemployment & migration crisis",
    intensity: "HIGH",
    keyConstituency: "All 25 seats; youth moving abroad via IELTS route",
  },
  {
    rank: 7,
    issue: "Healthcare infrastructure gaps",
    intensity: "MEDIUM-HIGH",
    keyConstituency: "Gurdaspur, Tarn Taran — Mohalla Clinics insufficient for border areas",
  },
  {
    rank: 8,
    issue: "Dalit rights & land access",
    intensity: "MEDIUM",
    keyConstituency: "Gurdaspur, Tarn Taran — significant Mazhabi Sikh population",
  },
  {
    rank: 9,
    issue: "Pathankot development neglect",
    intensity: "MEDIUM",
    keyConstituency: "Pathankot seats — feels neglected compared to Amritsar",
  },
  {
    rank: 10,
    issue: "Agricultural distress (paddy procurement delays)",
    intensity: "MEDIUM",
    keyConstituency: "All rural seats — MSP procurement issues, debt",
  },
];

// ==========================================
// DOABA DATA
// ==========================================

const nriPropertyData: NRIPropertyIssue = {
  priority: 1,
  affectedSeats: ["All Doaba seats; especially Jalandhar rural, Kapurthala, Nawanshahr, Hoshiarpur"],
  scale: {
    nriCommissionComplaints: 50,
    actualEstimate: 500,
    meaComplaints2025: 140,
  },
  intensity: "EXTREME",
  entityBlamed: [
    "Punjab NRI Sabha (described as 'hollow edifice')",
    "state government for weak enforcement",
    "land grabbers operating with impunity",
  ],
  resolutionStatus: "UNRESOLVED",
  keyData: {
    householdsWithOverseas: 24,
    landRelatedComplaints: 80,
    nriSabhaStatus: "institutional crisis (ThePrint, Mar 2026)",
  },
  congressResponse: [
    "Promise NRI Fast-Track Courts in Jalandhar, Hoshiarpur, Kapurthala with 90-day resolution",
    "Propose strengthening NRI Commission with statutory powers and dedicated investigative staff",
    "Commit to digitising all land records with NRI property flag system",
    "Address diaspora's emotional connection: 'Your land, your rights, your Congress'",
    "Counter AAP's annual 'NRI Punjabian Naal Milni' as symbolic rather than substantive",
  ],
};

const youthUnemploymentData: YouthUnemploymentIssue = {
  priority: 2,
  affectedSeats: ["All 23 seats"],
  scale: {
    assetsSold: 5636,
    borrowed: 14342,
    migrantsLeftAfter2016: 73,
  },
  intensity: "EXTREME",
  entityBlamed: [
    "All state governments since 1990s",
    "AAP for failing to create jobs",
    "Central government for industry flight to Himachal/Haryana",
  ],
  resolutionStatus: "UNRESOLVED",
  keyDynamics: [
    "Doaba historically had highest migration; now Malwa also seeing massive outflow",
    "Inability to migrate is seen as social failure — affects marriage prospects",
    "'Reverse dowry' system: families finance women's IELTS/education as pathway for men to emigrate through marriage",
    "Visa tightening in Canada (2024), UK, and US deportations creating economic crisis for families",
    "Industry flight: Doaba's capital has moved to Himachal/Haryana; remaining industry concentrated on GT Road belt",
    "Jat Sikh dominance of farming, Bania dominance of business — leaves few options for youth",
  ],
  congressResponse: [
    "Promise industrial policy focused on Doaba clusters (sports goods, leather, food processing)",
    "Commit to skill development centres in every Doaba block",
    "Address migration as economic failure, not cultural aspiration — 'Jobs at Home' narrative",
    "Target youth with concrete employment guarantees tied to industrial revival",
  ],
};

const sportsLeatherIndustryData: SportsLeatherIndustryIssue = {
  priority: 3,
  affectedSeats: ["Jalandhar (all 7 seats)", "parts of Kapurthala"],
  scale: {
    jalandharSportsGoodsShare: 75,
    exportCountries: 100,
    employment: 500000,
  },
  intensity: "HIGH",
  entityBlamed: ["State policy neglect", "competition from China/Vietnam", "lack of R&D investment"],
  resolutionStatus: "PARTIAL",
  keyDevelopments: {
    policy2026: "Punjab Sports & Leather Manufacturing Policy 2026 (Jan 2026)",
    rdCentreMoU: "MoU signed for R&D centre in Jalandhar (Jan 2026)",
    extensionCentre: "Sports Technology Extension Centre announced (Dec 2025)",
  },
  congressResponse: [
    "Demand time-bound implementation of 2026 policy with budget allocation specifics",
    "Push for export incentives and anti-dumping duties against Chinese competition",
    "Propose Jalandhar Sports Goods cluster as a 'National Manufacturing Champion' zone",
    "Attack AAP for policy announcements without execution",
  ],
};

const sugarcaneFarmerData: SugarcaneFarmerIssue = {
  priority: 4,
  affectedSeats: ["Kapurthala", "Nawanshahr (SBS Nagar)", "Hoshiarpur rural seats"],
  scale: {
    totalArrears: 93,
    pendingFrom2021_22: 27,
  },
  intensity: "HIGH",
  entityBlamed: ["State government", "private sugar mill owners", "Cane Commissioner for weak enforcement"],
  resolutionStatus: "PARTIAL",
  keyData: {
    bkuStatement: "BKU Doaba demanding reopening of closed sugar mills BUT only after arrears cleared",
    governmentMills: "Government mills in Nawanshahr and Kapurthala struggling with outdated infrastructure",
    seleniferousSoil: "Hoshiarpur and Nawanshahr also affected by seleniferous soils (PAU study, Dec 2025)",
  },
  congressResponse: [
    "Commit to clearing all pending arrears within 6 months of taking office",
    "Promise modernisation of government sugar mills with cooperative farmer ownership model",
    "Address selenium soil contamination in Hoshiarpur/Nawanshahr through PAU intervention",
  ],
};

const industrialDeclineData: IndustrialDeclineIssue = {
  priority: 5,
  affectedSeats: ["Jalandhar", "Kapurthala", "Phagwara (industrial belt seats)"],
  scale: {
    capitalFlight: "to Himachal/Haryana",
    gtRoadLosingCompetitiveness: true,
  },
  intensity: "MEDIUM-HIGH",
  entityBlamed: ["State policy", "tax regime", "infrastructure deficits"],
  resolutionStatus: "UNRESOLVED",
  keyDynamics: [
    "Doaba's remaining industry concentrated on GT Road corridor (Jalandhar-Phagwara)",
    "Kapurthala's rail coach factory is the only major public-sector employer",
    "Phagwara's industrial base eroding — sugar, paper, and textile units shutting",
    "Hoshiarpur's horticulture economy (Kinnow, mango, guava) needs processing infrastructure",
  ],
  congressResponse: [
    "Promise Doaba Industrial Corridor with tax incentives matching Himachal/Haryana",
    "Food processing parks in Hoshiarpur for horticulture produce",
    "MSME credit guarantee scheme for Jalandhar sports/leather clusters",
  ],
};

const additionalDoabaIssues: AdditionalDoabaIssue[] = [
  {
    rank: 6,
    issue: "Healthcare access (Mohalla Clinics vs hospitals)",
    intensity: "MEDIUM",
    keyConstituency: "Hoshiarpur, Nawanshahr — need hospitals, not just clinics",
  },
  {
    rank: 7,
    issue: "Education quality & IELTS economy distortion",
    intensity: "MEDIUM-HIGH",
    keyConstituency: "All seats — youth opting for IELTS over higher education",
  },
  {
    rank: 8,
    issue: "Dalit empowerment & reservation implementation",
    intensity: "MEDIUM",
    keyConstituency: "Jalandhar, Nawanshahr — significant Dalit population (Doaba has highest SC % in Punjab)",
  },
  {
    rank: 9,
    issue: "Road infrastructure & connectivity",
    intensity: "MEDIUM",
    keyConstituency: "Kapurthala, Nawanshahr — Doaba airport demand still unmet",
  },
  {
    rank: 10,
    issue: "Canada-India diplomatic impact on families",
    intensity: "HIGH",
    keyConstituency: "All seats — families with members in Canada anxious about visas, deportations",
  },
];

// ==========================================
// CROSS-CUTTING THEMES
// ==========================================

const aapPerformanceData: AAPPerformancePerception = {
  aapMLACriticism: {
    date: "March 2025",
    quote: "Feels like Pakistan, ask Finance Minister for funds",
  },
  congressClaim: {
    date: "February 2025",
    claim: "30-32 AAP MLAs ready to switch sides",
    mlasReadyToSwitch: 32,
  },
  delhiLossImpact: {
    date: "February 2025",
    impact: "Sent shockwaves through Punjab cadre; Mann rejected dissent claims",
  },
  internalCracks: {
    date: "April 2026",
    issue: "Raghav Chadha/Sandeep Pathak organisational roles causing friction",
  },
  blockElections: {
    date: "December 2025",
    significance: "Treated as 'semi-finals' before 2027 — AAP vs Congress direct fight in Doaba",
  },
  aapClaim: "Majha delivers, Doaba leads after rural body results (Dec 2025) — but actual results mixed",
};

const operationSindoorData: OperationSindoorImpact = {
  blackouts: {
    districts: ["Amritsar", "Gurdaspur", "Tarn Taran"],
    duration: "multiple nights",
  },
  schoolsShut: {
    districts: 6,
    duration: "extended periods",
  },
  evacuations: {
    unplanned: true,
    compensation: "no compensation framework",
  },
  farmersImpact: {
    harvestLost: true,
    cropsDamaged: true,
  },
  congressOpportunity:
    "Demand border area compensation package and disaster relief framework",
};

const migrationPressureValveData: MigrationPressureValve = {
  historicalContext:
    "Emigration has acted as 'pressure valve' for Jat Sikh discontent — without it, agrarian anger would explode politically (Frontline analysis)",
  currentConstraints: {
    canada: "Visa tightening (2024)",
    uk: "Visa tightening",
    us: "Deportations of irregular migrants hitting Doaba families hard",
  },
  politicalRisk:
    "If migration routes remain blocked by 2027, economic desperation could reshape voter behaviour",
  congressStrategy:
    "Create local jobs AND protect migration pathways for those who choose them",
};

// ==========================================
// CONGRESS STRATEGY
// ==========================================

const congressStrategicPositioning: CongressStrategicPositioning = {
  majha: {
    region: "Majha",
    totalSeats: 25,
    targetSeats: "12-15",
    strategies: [
      { issue: "Border champion", action: "Own the border farmer issue — demand fence realignment, compensation, development package" },
      { issue: "Drug rehabilitation", action: "Not just interdiction — rehabilitation centres, youth engagement, de-addiction infrastructure" },
      { issue: "Sacrilege justice", action: "Move beyond AAP's prospective law — demand convictions for 97 past cases" },
      { issue: "Water crisis", action: "Make groundwater contamination a visible issue — health camps, RO plants, emergency response" },
      { issue: "Anti-hooch", action: "Demand CBI inquiry into liquor mafia; excise policy overhaul" },
    ],
  },
  doaba: {
    region: "Doaba",
    totalSeats: 23,
    targetSeats: "12-14",
    strategies: [
      { issue: "NRI rights champion", action: "Fast-track courts, digital land records, property protection, diaspora engagement" },
      { issue: "Industrial revival", action: "Doaba Industrial Corridor, sports/leather policy execution, food processing parks" },
      { issue: "Sugarcane justice", action: "Clear arrears, modernise mills, cooperative ownership model" },
      { issue: "Jobs at home", action: "Counter migration narrative with concrete employment programmes" },
      { issue: "Dalit outreach", action: "Doaba's high SC population needs targeted manifesto commitments" },
    ],
  },
};

// ==========================================
// SOURCES
// ==========================================

const localIssuesSources: LocalIssuesSource[] = [
  { id: 1, title: "Indian Express", source: "News" },
  { id: 2, title: "Times of India", source: "News" },
  { id: 3, title: "The Hindu/Frontline", source: "News" },
  { id: 4, title: "Tribune", source: "News" },
  { id: 5, title: "NDTV", source: "News" },
  { id: 6, title: "Hindustan Times", source: "News" },
  { id: 7, title: "New Indian Express", source: "News" },
  { id: 8, title: "Economic Times", source: "News" },
  { id: 9, title: "ResearchGate", source: "Academic" },
  { id: 10, title: "Environmental Geochemistry and Health journal", source: "Academic", date: "2024" },
  { id: 11, title: "PAU surveys", source: "Academic" },
  { id: 12, title: "BKU Doaba statements", source: "Political", date: "Nov 2025" },
  { id: 13, title: "Punjab Government notifications", source: "Government" },
  { id: 14, title: "BSF/GoI border fencing announcements", source: "Government" },
  { id: 15, title: "NITI Aayog seminar records", source: "Government", date: "Jan 2026" },
  { id: 16, title: "ThePrint", source: "News", date: "Mar 2026" },
  { id: 17, title: "Mongabay India", source: "News", date: "May 2025" },
];

// ==========================================
// MAIN KPI EXPORT
// ==========================================

export const localIssuesKPI: LocalIssuesKPI = {
  meta: localIssuesMeta,
  majha: {
    overview: {
      districts: ["Amritsar", "Gurdaspur", "Tarn Taran", "Pathankot"],
      totalSeats: 25,
      aap2022Seats: 17,
      congress2022Seats: 3,
      keyPressures: [
        "Border security constraints on farming",
        "Drug trafficking corridor through Tarn Taran/Amritsar",
        "Deep Sikh religious sentiment tied to sacrilege justice",
      ],
      historicStronghold: "Congress's historic stronghold but requires issue-by-issue re-engagement",
    },
    issues: {
      borderFarming: borderFarmingData,
      drugMenace: drugMenaceData,
      groundwater: groundwaterContaminationData,
      sacrilegeJustice: sacrilegeJusticeData,
      hoochTragedy: hoochTragedyData,
    },
    additionalIssues: additionalMajhaIssues,
  },
  doaba: {
    overview: {
      districts: ["Jalandhar", "Hoshiarpur", "Kapurthala", "Nawanshahr (SBS Nagar)"],
      totalSeats: 23,
      aap2022Seats: 13,
      congress2022Seats: 7,
      nriConnection: {
        householdsWithOverseasMembers: 24,
        note: "Nanda & Veron, 2015 — Doaba is Punjab's NRI heartland",
      },
      keyIndustries: ["Sports goods (Jalandhar)", "Leather", "Sugarcane farming"],
    },
    issues: {
      nriProperty: nriPropertyData,
      youthUnemployment: youthUnemploymentData,
      sportsLeatherIndustry: sportsLeatherIndustryData,
      sugarcaneFarmer: sugarcaneFarmerData,
      industrialDecline: industrialDeclineData,
    },
    additionalIssues: additionalDoabaIssues,
  },
  crossCutting: {
    aapPerformance: aapPerformanceData,
    operationSindoor: operationSindoorData,
    migrationPressureValve: migrationPressureValveData,
  },
  congressStrategy: congressStrategicPositioning,
  sources: localIssuesSources,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get issue priority label
 */
export function getIssuePriorityLabel(priority: number): string {
  switch (priority) {
    case 1:
      return "Top — Highest voter concern";
    case 2:
      return "Existential crisis";
    case 3:
      return "Silent emergency";
    case 4:
      return "Politically volatile";
    case 5:
      return "Recurring emotional";
    default:
      return `Rank ${priority}`;
  }
}

/**
 * Get intensity color class
 */
export function getIntensityColor(intensity: string): string {
  switch (intensity) {
    case "EXTREME":
      return "bg-red-600";
    case "HIGH":
      return "bg-red-500";
    case "SEVERE":
      return "bg-orange-600";
    case "MEDIUM-HIGH":
      return "bg-orange-500";
    case "MEDIUM":
      return "bg-yellow-500";
    default:
      return "bg-slate-500";
  }
}

/**
 * Get resolution status badge variant
 */
export function getResolutionStatusVariant(status: string): "success" | "warning" | "danger" {
  switch (status) {
    case "RESOLVED":
      return "success";
    case "PARTIAL":
      return "warning";
    case "UNRESOLVED":
      return "danger";
    default:
      return "warning";
  }
}

/**
 * Get all Majha issues as flat array
 */
export function getMajhaIssuesFlat(): Array<{ issue: string; priority: number; intensity: string }> {
  const { issues, additionalIssues } = localIssuesKPI.majha;
  return [
    { issue: "Border Farming Restrictions", priority: issues.borderFarming.priority, intensity: issues.borderFarming.intensity },
    { issue: "Drug Menace & Youth Addiction", priority: issues.drugMenace.priority, intensity: issues.drugMenace.intensity },
    { issue: "Groundwater Contamination", priority: issues.groundwater.priority, intensity: issues.groundwater.intensity },
    { issue: "Sacrilege Justice", priority: issues.sacrilegeJustice.priority, intensity: issues.sacrilegeJustice.intensity },
    { issue: "Spurious Liquor/Hooch", priority: issues.hoochTragedy.priority, intensity: issues.hoochTragedy.intensity },
    ...additionalIssues.map((i) => ({ issue: i.issue, priority: i.rank, intensity: i.intensity })),
  ].sort((a, b) => a.priority - b.priority);
}

/**
 * Get all Doaba issues as flat array
 */
export function getDoabaIssuesFlat(): Array<{ issue: string; priority: number; intensity: string }> {
  const { issues, additionalIssues } = localIssuesKPI.doaba;
  return [
    { issue: "NRI Property Disputes", priority: issues.nriProperty.priority, intensity: issues.nriProperty.intensity },
    { issue: "Youth Unemployment & Migration", priority: issues.youthUnemployment.priority, intensity: issues.youthUnemployment.intensity },
    { issue: "Sports & Leather Industry Decline", priority: issues.sportsLeatherIndustry.priority, intensity: issues.sportsLeatherIndustry.intensity },
    { issue: "Sugarcane Farmer Arrears", priority: issues.sugarcaneFarmer.priority, intensity: issues.sugarcaneFarmer.intensity },
    { issue: "Industrial Decline", priority: issues.industrialDecline.priority, intensity: issues.industrialDecline.intensity },
    ...additionalIssues.map((i) => ({ issue: i.issue, priority: i.rank, intensity: i.intensity })),
  ].sort((a, b) => a.priority - b.priority);
}

/**
 * Get Congress strategies for a region
 */
export function getCongressStrategies(region: "Majha" | "Doaba") {
  const strategy = region === "Majha"
    ? localIssuesKPI.congressStrategy.majha
    : localIssuesKPI.congressStrategy.doaba;
  return strategy;
}
