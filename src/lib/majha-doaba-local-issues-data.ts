// @ts-nocheck
// Majha & Doaba Local Issues Data for Punjab Congress 2027 Election Dashboard
// Derived from: MP1-foundational/governance/local-issues-majha-doaba.md
// Research Date: 19 May 2026 | Data Currency: 2024-2026

import type {
  LocalIssuesKPI,
  BorderFarmingIssue,
  DrugMenaceIssue,
  GroundwaterContaminationIssue,
  SacrilegeJusticeIssue,
  HoochTragedyIssue,
  AdditionalMajhaIssue,
  NRIPropertyIssue,
  YouthUnemploymentIssue,
  SportsLeatherIndustryIssue,
  SugarcaneFarmerIssue,
  IndustrialDeclineIssue,
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

const meta = {
  megaPillar: "MP1 — Foundational Scan",
  subPillar: "Governance & Local Issues",
  region: "Majha (25 Seats) & Doaba (23 Seats)",
  dateCompiled: "19 May 2026",
  dataCurrency: "2024-2026 (see per-section notes)",
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

const majhaOverview = {
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
};

const borderFarmingIssue: BorderFarmingIssue = {
  priority: 1,
  affectedSeats: [
    "All border-adjacent seats in Amritsar, Tarn Taran, Gurdaspur, Pathankot (~10-12 seats)",
  ],
  scale: {
    farmerLandAcres: 21500,
    govtLandAcres: 10000,
    villagesAffected: 220,
    totalHectares: "15-17 lakh hectares total across six border districts",
  },
  intensity: "HIGH",
  entityBlamed: [
    "Central Government (BSF protocol, fencing placement)",
    "AAP state govt for slow implementation",
  ],
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

const drugMenaceIssue: DrugMenaceIssue = {
  priority: 2,
  affectedSeats: ["Tarn Taran (all 3 seats)", "Amritsar rural belt", "Gurdaspur border belt"],
  scale: {
    district: "Tarn Taran",
    note: "is the worst-affected district in Punjab for heroin smuggling; drone drops from Pakistan routine",
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
    budgetAllocation: 438, // Rs crore (2025-26)
  },
  congressResponse: [
    "Demand Central drug interdiction task force specifically for Majha border corridor",
    "Propose 100-bed de-addiction centre per border district with dedicated funding",
    "Attack AAP's 'arrest-only' approach — need rehabilitation, not just policing",
    "Counter BJP's Amit Shah drug campaign by pointing to Centre's failure to seal border",
    "Position Congress as the party of both strong borders AND compassionate rehabilitation",
  ],
};

const groundwaterContaminationIssue: GroundwaterContaminationIssue = {
  priority: 3,
  affectedDistricts: ["Amritsar (worst)", "Tarn Taran", "Gurdaspur", "Pathankot relatively safe"],
  scale: {
    samplesAnalysed: 2709,
    exceedArsenicLimit: 16, // percentage
    uraniumContamination: 62, // percentage of Punjab groundwater
  },
  intensity: "SEVERE",
  entityBlamed: [
    "State and Central governments for decades of neglect",
  ],
  resolutionStatus: "UNRESOLVED",
  keyFindings: {
    amritsarArsenic: {
      highest: 111, // ppb found in groundwater
      unit: "ppb",
      safeLimit: "0.05 ppm (50 ppb)",
      veryHighRiskSamples: 44.1, // percentage
    },
    tarnTaranUranium: "Highest uranium concentration in Majha",
    gurdaspurArsenic: "Second worst for arsenic after Amritsar",
    arsenicHabitations: 60, // percentage of all arsenic-contaminated habitations in Punjab fall in Majha belt
  },
  congressResponse: [
    "Demand emergency water purification infrastructure for all Majha districts",
    "Push for Central funding under National Rural Drinking Water Programme",
    "Call for health screening camps for cancer and heavy metal poisoning in affected villages",
    "Position as 'invisible crisis' that AAP has ignored while focusing on Mohalla Clinics",
  ],
};

const sacrilegeJusticeIssue: SacrilegeJusticeIssue = {
  priority: 4,
  affectedSeats: ["All Majha seats", "particularly resonant in Amritsar belt (proximity to Darbar Sahib)"],
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

const hoochTragedyIssue: HoochTragedyIssue = {
  priority: 5,
  affectedSeats: ["Majitha (Amritsar)", "Tarn Taran seats", "Batala (Gurdaspur)"],
  scale: {
    majitha2025: 27,
    majha2020: 121,
    total5Years: 176,
  },
  intensity: "HIGH",
  entityBlamed: [
    "AAP state government (excise policy failures)",
    "Liquor mafia",
    "Police complicity",
  ],
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

const doabaOverview = {
  districts: ["Jalandhar", "Hoshiarpur", "Kapurthala", "Nawanshahr"],
  totalSeats: 23,
  aap2022Seats: 13,
  congress2022Seats: 7,
  nriConnection: {
    householdsWithOverseasMembers: 24, // percentage
    note: "Doaba accounts for 24% of households with overseas members (highest in Punjab)",
  },
  keyIndustries: ["Sports goods (Jalandhar)", "Leather cluster", "Sugarcane farming"],
};

const nriPropertyIssue: NRIPropertyIssue = {
  priority: 1,
  affectedSeats: [
    "All Doaba seats",
    "especially Jalandhar rural, Kapurthala, Nawanshahr, Hoshiarpur",
  ],
  scale: {
    nriCommissionComplaints: 50, // percentage that are land-related
    actualEstimate: 1400, // 140 formal complaints to MEA (2025); actual estimated 10x higher
    meaComplaints2025: 140,
  },
  intensity: "EXTREME",
  entityBlamed: [
    "Punjab NRI Sabha (described as 'hollow edifice')",
    "State government for weak enforcement",
    "Land grabbers operating with impunity",
  ],
  resolutionStatus: "UNRESOLVED",
  keyData: {
    householdsWithOverseas: 24, // percentage
    landRelatedComplaints: 80, // percentage
    nriSabhaStatus: "NRI Sabha in crisis (ThePrint, Mar 2026); NRI Commission understaffed; District-Level Grievance Committees non-functional in most districts",
  },
  congressResponse: [
    "Promise NRI Fast-Track Courts in Jalandhar, Hoshiarpur, Kapurthala with 90-day resolution",
    "Propose strengthening NRI Commission with statutory powers and dedicated investigative staff",
    "Commit to digitising all land records with NRI property flag system",
    "Address diaspora's emotional connection: 'Your land, your rights, your Congress'",
    "Counter AAP's annual 'NRI Punjabian Naal Milni' as symbolic rather than substantive",
  ],
};

const youthUnemploymentIssue: YouthUnemploymentIssue = {
  priority: 2,
  affectedSeats: ["All 23 seats"],
  scale: {
    assetsSold: 5636, // Rs crore (PAU survey 2021-23)
    borrowed: 14342, // Rs crore
    migrantsLeftAfter2016: 73, // percentage
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
    "Visa tightening in Canada (2024), UK, and US deportations creating economic crisis",
    "Industry flight: Doaba's capital has moved to Himachal/Haryana",
    "Jat Sikh dominance of farming, Bania dominance of business — leaves few options for youth",
  ],
  congressResponse: [
    "Promise industrial policy focused on Doaba clusters (sports goods, leather, food processing)",
    "Commit to skill development centres in every Doaba block",
    "Address migration as economic failure, not cultural aspiration — 'Jobs at Home' narrative",
    "Target youth with concrete employment guarantees tied to industrial revival",
  ],
};

const sportsLeatherIndustryIssue: SportsLeatherIndustryIssue = {
  priority: 3,
  affectedSeats: ["Jalandhar (all 7 seats)", "parts of Kapurthala"],
  scale: {
    jalandharSportsGoodsShare: 75, // percentage of India's sports goods production
    exportCountries: 100, // countries
    employment: 500000, // people
  },
  intensity: "HIGH",
  entityBlamed: [
    "State policy neglect",
    "Competition from China/Vietnam",
    "Lack of R&D investment",
  ],
  resolutionStatus: "PARTIAL",
  keyDevelopments: {
    policy2026: "Punjab Sports & Leather Manufacturing Policy 2026 released (Jan 2026)",
    rdCentreMoU: "MoU signed for R&D centre in Jalandhar for sports goods and leather (Jan 2026)",
    extensionCentre: "Sports Technology Extension Centre announced (Dec 2025)",
  },
  congressResponse: [
    "Demand time-bound implementation of 2026 policy with budget allocation specifics",
    "Push for export incentives and anti-dumping duties against Chinese competition",
    "Propose Jalandhar Sports Goods cluster as a 'National Manufacturing Champion' zone",
    "Attack AAP for policy announcements without execution",
  ],
};

const sugarcaneFarmerIssue: SugarcaneFarmerIssue = {
  priority: 4,
  affectedSeats: ["Kapurthala", "Nawanshahr (SBS Nagar)", "Hoshiarpur rural seats"],
  scale: {
    totalArrears: 93, // Rs crore from government-aided sugar mills
    pendingFrom2021_22: 27, // Rs crore
  },
  intensity: "HIGH",
  entityBlamed: [
    "State government",
    "Private sugar mill owners",
    "Cane Commissioner for weak enforcement",
  ],
  resolutionStatus: "PARTIAL",
  keyData: {
    bkuStatement: "BKU Doaba demanding reopening of closed sugar mills BUT only after arrears cleared",
    governmentMills: "Government mills in Nawanshahr and Kapurthala struggling with outdated infrastructure",
    seleniferousSoil: "Hoshiarpur and Nawanshahr also affected by seleniferous soils (PAU study, Dec 2025) — selenium toxicity damaging crops",
  },
  congressResponse: [
    "Commit to clearing all pending arrears within 6 months of taking office",
    "Promise modernisation of government sugar mills with cooperative farmer ownership model",
    "Address selenium soil contamination in Hoshiarpur/Nawanshahr through PAU intervention",
  ],
};

const industrialDeclineIssue: IndustrialDeclineIssue = {
  priority: 5,
  affectedSeats: ["Jalandhar", "Kapurthala", "Phagwara (industrial belt seats)"],
  scale: {
    capitalFlight: "Capital flight to Himachal/Haryana; GT Road belt losing competitiveness",
    gtRoadLosingCompetitiveness: true,
  },
  intensity: "MEDIUM-HIGH",
  entityBlamed: [
    "State policy",
    "Tax regime",
    "Infrastructure deficits",
  ],
  resolutionStatus: "UNRESOLVED",
  keyDynamics: [
    "Doaba's remaining industry concentrated on GT Road corridor (Jalandhar-Phagwara)",
    "Kaputhala's rail coach factory is the only major public-sector employer",
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

const aapPerformance: AAPPerformancePerception = {
  aapMLACriticism: {
    date: "March 2025",
    quote: "AAP MLAs publicly criticised own government in Punjab Assembly over health facilities — 'Feels like Pakistan, ask Finance Minister for funds'",
  },
  congressClaim: {
    date: "February 2025",
    claim: "Congress leader Bajwa claimed 30-32 AAP MLAs ready to switch sides",
    mlasReadyToSwitch: 32,
  },
  delhiLossImpact: {
    date: "February 2025",
    impact: "AAP lost Delhi — sent shockwaves through Punjab cadre; Mann rejected dissent claims",
  },
  internalCracks: {
    date: "April 2026",
    issue: "Raghav Chadha/Sandeep Pathak organisational roles causing friction",
  },
  blockElections: {
    date: "December 2025",
    significance: "Block Samiti/Zila Parishad elections treated as 'semi-finals' before 2027 — AAP vs Congress direct fight in Doaba",
  },
  aapClaim: "AAP claimed 'Majha delivers, Doaba leads' after rural body results (Dec 2025) — but actual results mixed",
};

const operationSindoorImpact: OperationSindoorImpact = {
  blackouts: {
    districts: ["Amritsar", "Gurdaspur", "Tarn Taran"],
    duration: "Multiple nights",
  },
  schoolsShut: {
    districts: 5,
    duration: "Extended periods",
  },
  evacuations: {
    unplanned: true,
    compensation: "No compensation framework",
  },
  farmersImpact: {
    harvestLost: true,
    cropsDamaged: true,
  },
  congressOpportunity:
    "Demand border area compensation package and disaster relief framework",
};

const migrationPressureValve: MigrationPressureValve = {
  historicalContext:
    "Emigration has acted as 'pressure valve' for Jat Sikh discontent — without it, agrarian anger would explode politically (Frontline analysis)",
  currentConstraints: {
    canada: "Canada-India diplomatic rift (2024-25) has created panic among families",
    uk: "Visa tightening creating anxiety",
    us: "US deportations of irregular migrants hitting Doaba families hard",
  },
  politicalRisk:
    "If migration routes remain blocked by 2027, economic desperation could reshape voter behaviour",
  congressStrategy:
    "Congress must address both: create local jobs AND protect migration pathways for those who choose them",
};

// ==========================================
// CONGRESS STRATEGY
// ==========================================

const congressStrategy: CongressStrategicPositioning = {
  majha: {
    region: "Majha",
    totalSeats: 25,
    targetSeats: "12-15",
    strategies: [
      {
        issue: "Border champion",
        action: "Own the border farmer issue — demand fence realignment, compensation, development package",
      },
      {
        issue: "Drug rehabilitation",
        action: "Not just interdiction — rehabilitation centres, youth engagement, de-addiction infrastructure",
      },
      {
        issue: "Sacrilege justice",
        action: "Move beyond AAP's prospective law — demand convictions for 97 past cases",
      },
      {
        issue: "Water crisis",
        action: "Make groundwater contamination a visible issue — health camps, RO plants, emergency response",
      },
      {
        issue: "Anti-hooch",
        action: "Demand CBI inquiry into liquor mafia; excise policy overhaul",
      },
    ],
  },
  doaba: {
    region: "Doaba",
    totalSeats: 23,
    targetSeats: "12-14",
    strategies: [
      {
        issue: "NRI rights champion",
        action: "Fast-track courts, digital land records, property protection, diaspora engagement",
      },
      {
        issue: "Industrial revival",
        action: "Doaba Industrial Corridor, sports/leather policy execution, food processing parks",
      },
      {
        issue: "Sugarcane justice",
        action: "Clear arrears, modernise mills, cooperative ownership model",
      },
      {
        issue: "Jobs at home",
        action: "Counter migration narrative with concrete employment programmes",
      },
      {
        issue: "Dalit outreach",
        action: "Doaba's high SC population needs targeted manifesto commitments",
      },
    ],
  },
};

// ==========================================
// SOURCES
// ==========================================

const sources: LocalIssuesSource[] = [
  { id: 1, title: "Indian Express", source: "Various articles" },
  { id: 2, title: "Times of India", source: "Various articles" },
  { id: 3, title: "The Hindu/Frontline", source: "Various articles" },
  { id: 4, title: "Tribune", source: "Various articles" },
  { id: 5, title: "NDTV", source: "Various articles" },
  { id: 6, title: "Hindustan Times", source: "Various articles" },
  { id: 7, title: "New Indian Express", source: "Various articles" },
  { id: 8, title: "Economic Times", source: "Various articles" },
  { id: 9, title: "ResearchGate", source: "Academic journals" },
  {
    id: 10,
    title: "Environmental Geochemistry and Health journal",
    source: "2024 study",
  },
  { id: 11, title: "PAU surveys", source: "2021-23 survey data" },
  { id: 12, title: "BKU Doaba statements", source: "November 2025" },
  { id: 13, title: "Punjab Government notifications", source: "Various" },
  { id: 14, title: "BSF/GoI border fencing announcements", source: "Various" },
  { id: 15, title: "NITI Aayog seminar records", source: "January 2026" },
  { id: 16, title: "Pondicherry University + World University Fatehgarh Sahib study", source: "2024" },
  { id: 17, title: "ThePrint", source: "March 2026" },
  { id: 18, title: "Frontline", source: "March 2025" },
];

// ==========================================
// MAIN KPI EXPORT
// ==========================================

export const majhaDoabaLocalIssuesKPI: LocalIssuesKPI = {
  meta,
  majha: {
    overview: majhaOverview,
    issues: {
      borderFarming: borderFarmingIssue,
      drugMenace: drugMenaceIssue,
      groundwater: groundwaterContaminationIssue,
      sacrilegeJustice: sacrilegeJusticeIssue,
      hoochTragedy: hoochTragedyIssue,
    },
    additionalIssues: additionalMajhaIssues,
  },
  doaba: {
    overview: doabaOverview,
    issues: {
      nriProperty: nriPropertyIssue,
      youthUnemployment: youthUnemploymentIssue,
      sportsLeatherIndustry: sportsLeatherIndustryIssue,
      sugarcaneFarmer: sugarcaneFarmerIssue,
      industrialDecline: industrialDeclineIssue,
    },
    additionalIssues: additionalDoabaIssues,
  },
  crossCutting: {
    aapPerformance,
    operationSindoor: operationSindoorImpact,
    migrationPressureValve,
  },
  congressStrategy,
  sources,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get all Majha issues sorted by priority
 */
export function getMajhaIssuesByPriority(): Array<{
  issue: string;
  priority: number;
  intensity: string;
  status: string;
}> {
  const { issues, additionalIssues } = majhaDoabaLocalIssuesKPI.majha;
  const mainIssues = [
    { issue: "Border Farming", ...issues.borderFarming },
    { issue: "Drug Menace", ...issues.drugMenace },
    { issue: "Groundwater Contamination", ...issues.groundwater },
    { issue: "Sacrilege Justice", ...issues.sacrilegeJustice },
    { issue: "Hooch Tragedy", ...issues.hoochTragedy },
  ];
  const additional = additionalIssues.map((i) => ({
    issue: i.issue,
    priority: i.rank,
    intensity: i.intensity,
    status: "UNRESOLVED",
  }));
  return [...mainIssues, ...additional].sort((a, b) => a.priority - b.priority);
}

/**
 * Get all Doaba issues sorted by priority
 */
export function getDoabaIssuesByPriority(): Array<{
  issue: string;
  priority: number;
  intensity: string;
  status: string;
}> {
  const { issues, additionalIssues } = majhaDoabaLocalIssuesKPI.doaba;
  const mainIssues = [
    { issue: "NRI Property", ...issues.nriProperty },
    { issue: "Youth Unemployment", ...issues.youthUnemployment },
    { issue: "Sports/Leather Industry", ...issues.sportsLeatherIndustry },
    { issue: "Sugarcane Farmer Arrears", ...issues.sugarcaneFarmer },
    { issue: "Industrial Decline", ...issues.industrialDecline },
  ];
  const additional = additionalIssues.map((i) => ({
    issue: i.issue,
    priority: i.rank,
    intensity: i.intensity,
    status: "UNRESOLVED",
  }));
  return [...mainIssues, ...additional].sort((a, b) => a.priority - b.priority);
}

/**
 * Get extreme intensity issues across both regions
 */
export function getExtremeIntensityIssues(): Array<{
  region: string;
  issue: string;
  description: string;
}> {
  const issues: Array<{ region: string; issue: string; description: string }> = [];

  if (majhaDoabaLocalIssuesKPI.majha.issues.drugMenace.intensity === "EXTREME") {
    issues.push({
      region: "Majha",
      issue: "Drug Menace",
      description: `${majhaDoabaLocalIssuesKPI.majha.issues.drugMenace.scale.district} is worst-affected; drone drops routine`,
    });
  }

  const nriIntensity = majhaDoabaLocalIssuesKPI.doaba.issues.nriProperty.intensity;
  if (nriIntensity === "EXTREME") {
    issues.push({
      region: "Doaba",
      issue: "NRI Property Disputes",
      description: `${majhaDoabaLocalIssuesKPI.doaba.issues.nriProperty.scale.actualEstimate} estimated complaints (10x official)`,
    });
  }

  const youthIntensity = majhaDoabaLocalIssuesKPI.doaba.issues.youthUnemployment.intensity;
  if (youthIntensity === "EXTREME") {
    issues.push({
      region: "Doaba",
      issue: "Youth Unemployment & Migration",
      description: `Rs ${majhaDoabaLocalIssuesKPI.doaba.issues.youthUnemployment.scale.assetsSold} crore assets sold to fund migration`,
    });
  }

  return issues;
}

/**
 * Get Operation Sindoor impact summary
 */
export function getOperationSindoorSummary(): {
  districtsAffected: number;
  keyImpact: string;
  congressAsk: string;
} {
  const impact = majhaDoabaLocalIssuesKPI.crossCutting.operationSindoor;
  return {
    districtsAffected: impact.blackouts.districts.length,
    keyImpact: `${impact.blackouts.duration} blackouts; ${impact.schoolsShut.districts} districts schools shut`,
    congressAsk: impact.congressOpportunity,
  };
}

/**
 * Get Congress target seats summary
 */
export function getCongressTargetSeats(): {
  majha: { total: number; target: string };
  doaba: { total: number; target: string };
} {
  return {
    majha: {
      total: majhaDoabaLocalIssuesKPI.majha.overview.totalSeats,
      target: majhaDoabaLocalIssuesKPI.congressStrategy.majha.targetSeats,
    },
    doaba: {
      total: majhaDoabaLocalIssuesKPI.doaba.overview.totalSeats,
      target: majhaDoabaLocalIssuesKPI.congressStrategy.doaba.targetSeats,
    },
  };
}

/**
 * Get migration pressure valve status
 */
export function getMigrationPressureValveStatus(): {
  historicalContext: string;
  currentConstraints: string[];
  politicalRisk: string;
} {
  const valve = majhaDoabaLocalIssuesKPI.crossCutting.migrationPressureValve;
  return {
    historicalContext: valve.historicalContext,
    currentConstraints: Object.values(valve.currentConstraints),
    politicalRisk: valve.politicalRisk,
  };
}

/**
 * Get AAP internal dissent indicators
 */
export function getAAPDissentIndicators(): {
  mlaCriticism: string;
  congressClaim: string;
  delhiLoss: string;
  blockElections: string;
} {
  const performance = majhaDoabaLocalIssuesKPI.crossCutting.aapPerformance;
  return {
    mlaCriticism: performance.aapMLACriticism.quote,
    congressClaim: `${performance.congressClaim.mlasReadyToSwitch} MLAs ready to switch (${performance.congressClaim.date})`,
    delhiLoss: performance.delhiLossImpact.impact,
    blockElections: `${performance.blockElections.significance} (${performance.blockElections.date})`,
  };
}

/**
 * Get regional overview summary
 */
export function getRegionalOverviewSummary(): {
  majha: {
    seats: number;
    aapSeats: number;
    congressSeats: number;
    keyPressures: string[];
  };
  doaba: {
    seats: number;
    aapSeats: number;
    congressSeats: number;
    nriHouseholds: number;
  };
} {
  return {
    majha: {
      seats: majhaDoabaLocalIssuesKPI.majha.overview.totalSeats,
      aapSeats: majhaDoabaLocalIssuesKPI.majha.overview.aap2022Seats,
      congressSeats: majhaDoabaLocalIssuesKPI.majha.overview.congress2022Seats,
      keyPressures: majhaDoabaLocalIssuesKPI.majha.overview.keyPressures,
    },
    doaba: {
      seats: majhaDoabaLocalIssuesKPI.doaba.overview.totalSeats,
      aapSeats: majhaDoabaLocalIssuesKPI.doaba.overview.aap2022Seats,
      congressSeats: majhaDoabaLocalIssuesKPI.doaba.overview.congress2022Seats,
      nriHouseholds: majhaDoabaLocalIssuesKPI.doaba.overview.nriConnection.householdsWithOverseasMembers,
    },
  };
}
