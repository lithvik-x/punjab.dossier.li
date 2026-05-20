// Governance - Corruption Scandals Data for Punjab 2027
// Derived from: research-M2/MP1-foundational/governance/corruption-scandals.md
// Research Date: 19 May 2026 | Data Currency: May 2022 - May 2026

import type {
  CorruptionCase,
  CorruptionCasesSummary,
  SandMiningCorruption,
  LiquorPolicyCorruption,
  FoodgrainScam,
  CLUScam,
  SectorCorruption,
  CAGFinancials,
  EarlierCAGFindings,
  VigilanceBureauRaid,
  AntiCorruptionNarrative,
  CorruptionKeyStats,
  CorruptionAssessment,
  CorruptionScandalsReport,
} from "@/types/corruption-scandals-types";

// ==========================================
// MAJOR CORRUPTION CASES
// ==========================================

export const MAJOR_CASES: CorruptionCase[] = [
  {
    id: "case-001",
    accused: "Dr. Vijay Singla",
    position: "MLA Mansa, Cabinet Minister for Health",
    caseType: "Bribery for Tenders",
    date: "2022-05-24",
    allegation: "Demanding 1% commission on tenders and departmental work",
    amount: "Percentage-based (estimated several crore in scope)",
    agency: "Punjab Anti-Corruption",
    status: "bail_granted",
    statusDetails: "Granted bail 8 July 2022. Later appointed to Punjab Assembly committees — political rehabilitation.",
    significance: "First corruption case under AAP, within 2 months of taking office. Mann publicly confirmed allegations before arrest.",
  },
  {
    id: "case-002",
    accused: "Fauja Singh Sarari",
    position: "MLA Guru Har Sahai, Cabinet Minister (Horticulture, Food Processing, Defence Services Welfare)",
    caseType: "Extortion Audio Leak",
    date: "2022-09",
    allegation: "Audio clip surfaced allegedly discussing extortion plans with an associate, targeting food grain contractors",
    agency: "Punjab Vigilance Bureau",
    status: "resigned",
    statusDetails: "Resigned citing 'personal reasons' after show-cause notice from party. Denied allegations, called audio fake. Formal resignation January 2023.",
    significance: "Second cabinet exit on corruption/ethics grounds within first year.",
  },
  {
    id: "case-003",
    accused: "Amit Ratan Kotfatta",
    position: "MLA Bathinda Rural",
    caseType: "Bribery for Grants",
    date: "2023-02-23",
    allegation: "Demanded Rs 5 lakh bribe from Sarpanch of Ghudda village to release Rs 25 lakh government development grant",
    amount: "Rs 5 lakh",
    agency: "Punjab Vigilance Bureau",
    status: "charges_pending",
    statusDetails: "Forensic voice examination confirmed his voice. Granted regular bail by Punjab & Haryana HC, 22 May 2023. Case pending.",
  },
  {
    id: "case-004",
    accused: "Prof. Jaswant Singh Gajjan Majra",
    position: "MLA Amargarh",
    caseType: "Money Laundering / Bank Fraud",
    date: "2023-11-06",
    allegation: "Money laundering linked to Rs 41 crore bank fraud involving Tara Corporation Ltd.",
    amount: "Rs 41 crore",
    amountInCrore: 41,
    agency: "Enforcement Directorate (ED)",
    status: "bail_granted",
    statusDetails: "Jailed in Patiala Central Jail ~6 months. Granted regular bail by Punjab & Haryana HC, May 2024.",
    significance: "MLA had publicly claimed he would take only Rs 1 as salary.",
  },
  {
    id: "case-005",
    accused: "Raman Arora",
    position: "MLA Jalandhar Central",
    caseType: "Municipal Extortion Racket",
    date: "2025-05-23",
    allegation: "Running extortion racket using former Assistant Town Planner Sukhdev Vashisht to issue bogus municipal notices for illegal constructions, then 'settling' them for bribes",
    agency: "Punjab Vigilance Bureau",
    status: "ongoing",
    statusDetails: "Arrested; 5-day Vigilance custody granted. Case ongoing.",
  },
  {
    id: "case-006",
    accused: "Balkar Singh",
    position: "MLA Kartarpur, Minister for Local Bodies",
    caseType: "Objectionable Video / Misconduct",
    date: "2024-06",
    allegation: "Objectionable video surfaced; inappropriate behavior allegations",
    agency: "Punjab Vigilance Bureau",
    status: "dropped_from_cabinet",
    statusDetails: "Removed from cabinet. Protests reached Governor Banwarilal Purohit.",
  },
  {
    id: "case-007",
    accused: "Sanjeev Arora",
    position: "Rajya Sabha MP and Punjab Cabinet Minister for Industries",
    caseType: "Money Laundering / GST Fraud",
    date: "2026-05-09",
    allegation: "Money laundering linked to Rs 100+ crore GST fraud. Arora's company allegedly generated fraudulent purchase invoices for mobile phones worth over Rs 100 crore from non-existent entities. Fraud operated from May 2023 onwards.",
    amount: "Rs 100+ crore",
    amountInCrore: 100,
    agency: "Enforcement Directorate (ED)",
    status: "arrested",
    statusDetails: "Arrested 9 May 2026. Sent to 7-day ED custody on 10 May 2026. Has moved Punjab & Haryana HC challenging arrest.",
    significance: "Sitting cabinet minister arrested by ED. Most recent case.",
  },
  {
    id: "case-008",
    accused: "Laljit Singh Bhullar",
    position: "Minister for Transport and Jails",
    caseType: "Corruption Allegations",
    date: "2026-03",
    allegation: "Named in corruption allegations. Father among three booked in separate case.",
    agency: "Punjab Vigilance Bureau",
    status: "dropped_from_cabinet",
    statusDetails: "Dropped from cabinet. Bhullar is 10th AAP minister dropped from cabinet in 4 years.",
  },
];

// ==========================================
// CORRUPTION CASES SUMMARY
// ==========================================

export const CORRUPTION_CASES_SUMMARY: CorruptionCasesSummary = {
  totalCases: 8,
  ministersDropped: 10,
  mlasArrested: 4,
  servingMinistersArrested: 1,
  casesByStatus: {
    arrested: 1,
    bail_granted: 2,
    resigned: 1,
    dropped_from_cabinet: 2,
    under_investigation: 0,
    ongoing: 1,
    charges_pending: 1,
  },
  casesByAgency: {
    "Punjab Anti-Corruption": 1,
    "Punjab Vigilance Bureau": 5,
    "Enforcement Directorate (ED)": 2,
  },
  recentCases: MAJOR_CASES.filter((c) => ["case-005", "case-007", "case-008"].includes(c.id)),
};

// ==========================================
// SAND MINING CORRUPTION
// ==========================================

export const SAND_MINING_CORRUPTION: SandMiningCorruption = {
  promise: {
    annualRevenue: "Rs 20,000 crore",
    source: "Kejriwal during 2022 campaign",
  },
  reality: {
    actualRevenue: "Rs 288 crore (approx)",
    actualRevenueCrore: 288,
    shortfallCrore: 19712,
    shortfallPercentage: 98.6,
  },
  timeline: [
    {
      date: "February 2026",
      event: "AAP's own Rajya Sabha MP Malvinder Singh Kang publicly raised questions about sand mining corruption",
      source: "Media report",
    },
    {
      date: "February 2026",
      event: "BJP's RP Singh demanded CBI probe into sand mining revenue mismatch",
      source: "Media report",
    },
    {
      date: "February 2025",
      event: "LoP Partap Singh Bajwa alleged illegal mining is 'rampant' in the state",
      source: "Punjab Assembly",
    },
  ],
  politicalStatements: [
    {
      person: "Partap Singh Bajwa",
      party: "Congress",
      statement: "The theme of the government was zero corruption but the manner in which the government is handling sand mining...",
      date: "February 2025",
    },
    {
      person: "Malvinder Singh Kang",
      party: "AAP (own MP)",
      statement: "Raised questions about sand mining corruption",
      date: "February 2026",
    },
    {
      person: "Sukhbir Singh Majithia",
      party: "SAD",
      statement: "Alleged violations of 2023 AAP mining policy continued",
      date: "2024",
    },
  ],
};

// ==========================================
// LIQUOR POLICY CORRUPTION
// ==========================================

export const LIQUOR_POLICY_CORRUPTION: LiquorPolicyCorruption = {
  delhiSpillover: {
    amount: "Rs 2,873 crore",
    allegedLoss: "Rs 2,873 crore (Delhi excise policy)",
    implicated: ["Arvind Kejriwal", "Manish Sisodia"],
  },
  punjabAllegations: {
    amount: "Rs 10,000 crore",
    source: "BJP allegation, August 2022",
    cbiProbeStatus: "CBI reportedly sought to investigate Punjab liquor scandal",
    chargesFiled: false,
  },
};

// ==========================================
// FOODGRAIN TRANSPORTATION SCAM
// ==========================================

export const FOODGRAIN_SCAM: FoodgrainScam = {
  totalAmount: "Rs 2,000 crore transportation tender scam",
  amountCrore: 2000,
  period: "2020-2023 (originated under Congress, continued under AAP's first year)",
  edExpansion: {
    date: "January 2025",
    scope: "ED expanded probe to include payments made during AAP's first year in power (2022-23). All procurement agencies (Markfed, Punsup, Pungrain, Punjab State Warehousing Corp) asked to furnish payment details for 2022-23 season.",
    agencies: ["Markfed", "Punsup", "Pungrain", "Punjab State Warehousing Corp"],
  },
  congressAngle: {
    minister: "Bharat Bhushan Ashu",
    caseStatus: "Arrested by ED. Punjab filed SLP in Supreme Court challenging HC's quashing of FIR against Ashu (August 2025).",
  },
};

// ==========================================
// CHANGE OF LAND USE (CLU) SCAM
// ==========================================

export const CLU_SCAM: CLUScam = {
  edRaids: {
    date: "2026-05-08",
    entities: ["Suntec City (ICHBS)", "ABS Townships", "Altus Space Builders", "Dhir Constructions"],
  },
  amounts: {
    ichbsCollection: "Over Rs 150 crore from members without executing sale deeds",
    ichbsCollectionCrore: 150,
    altusUndervaluation: "Project undervalued by Rs 170+ crore",
    altusUndervaluationCrore: 170,
    cashSeized: "Rs 1 crore cash seized including Rs 21 lakh thrown from 9th floor",
  },
  politicalLinks: {
    aapPunjabChief: "Aman Arora (Cabinet minister)",
    description: "Gaurav Dhir of Dhir Constructions described as 'close associate' of AAP Punjab unit chief and Cabinet minister Aman Arora",
    cmOsdLink: "One raided individual (Nitin Gohal) linked to CM Mann's OSD Rajbir Ghuman",
  },
  aapResponse: "Aman Arora called it 'BJP's politics of goondagardi.' CM Mann said 'ED raid has nothing to do with us.'",
};

// ==========================================
// SECTOR CORRUPTION
// ==========================================

export const SECTOR_CORRUPTION: SectorCorruption = {
  sandMining: SAND_MINING_CORRUPTION,
  liquorPolicy: LIQUOR_POLICY_CORRUPTION,
  foodgrainTransportation: FOODGRAIN_SCAM,
  changeOfLandUse: CLU_SCAM,
};

// ==========================================
// CAG FINANCIAL FINDINGS (MARCH 2026)
// ==========================================

export const CAG_FINANCIALS: CAGFinancials = {
  revenueDeficit: {
    amount: "Rs 28,215 crore",
    amountCrore: 28215,
    percentageOfGSDP: 3.79,
    target: 3.52,
    variance: 0.27,
  },
  fiscalDeficit: {
    amount: "Rs 33,115 crore",
    amountCrore: 33115,
    percentageOfGSDP: 4.45,
    target: 4.6,
    variance: -0.15,
  },
  debtToGSDP: {
    ratio: 43.72,
    ratioWithOffBudget: 44.27,
    ranking: "Highest among major Indian states",
    totalDebt: "Spiralled from ~Rs 2.84 lakh crore when AAP took office",
    totalDebtLakhCrore: 284,
  },
  revenueExpenditure: {
    amount: "Rs 1,17,407 crore",
    amountCrore: 117407,
    percentageOfGSDP: 15.76,
    growthCAGR: 11.54,
  },
  capitalExpenditure: {
    amount: "Rs 4,743 crore",
    amountCrore: 4743,
    percentageOfTotal: 3.88,
    note: "Borrowed funds used for consumption, not development",
  },
  committedExpenditure: {
    percentage: 75.6,
    components: ["Debt servicing", "Salaries", "Pensions"],
  },
  subsidies: {
    percentageOfRevenue: 16,
    powerSubsidyPercentage: 92,
    trend: "Grew from 13.39% to ~16% of revenue",
  },
  borrowingUse: "Borrowed funds being used for current consumption and repayment, not capital creation",
  cagVerdict: "The finances are heavily stressed. Depending solely on economic growth would not suffice to cover the state's debt obligations.",
};

// ==========================================
// EARLIER CAG FINDINGS (SEPTEMBER 2025)
// ==========================================

export const EARLIER_CAG_FINDINGS: EarlierCAGFindings = {
  borrowedFundsUsage: "Punjab and West Bengal lead among states using borrowed funds to finance routine expenditure (salaries, subsidies)",
  debtToGSDPRanking: "Punjab's debt-to-GSDP ratio of 40.35% was highest among all Indian states",
  debtTrapCategory: true,
  healthServicesNote: "CAG report on Health Services (March 2025) — specific findings on health services management irregularities noted",
};

// ==========================================
// VIGILANCE BUREAU RAID
// ==========================================

export const VIGILANCE_BUREAU_RAID: VigilanceBureauRaid = {
  date: "2026-05-12",
  target: "Punjab Vigilance Bureau headquarters, Mohali",
  allegation: "Middlemen operating inside the Vigilance Bureau, collecting bribes to influence corruption cases",
  amount: {
    initialDemand: "Rs 20 lakh initially demanded",
    negotiated: "Rs 13 lakh + mobile phone for OP Rana, Reader to DG Vigilance",
  },
  arrests: {
    count: 3,
    description: "Two middlemen and one other person arrested. Cash recovered during operation.",
  },
  politicalSignificance: "The agency tasked with fighting corruption within AAP's own government was itself running a bribery racket. SAD demanded probe into CM Mann and Kejriwal over Vigilance corruption.",
};

// ==========================================
// ANTI-CORRUPTION NARRATIVE
// ==========================================

export const ANTI_CORRUPTION_NARRATIVE: AntiCorruptionNarrative = {
  aapClaims: [
    "Zero tolerance for corruption — Mann publicly sacked Singla within hours of allegations",
    "AAP points to swift action against own ministers as proof of anti-corruption commitment",
    "Claims 10 minister changes show accountability, not corruption",
  ],
  counterPoints: [
    "A party born from anti-corruption movement has had 10 ministers dropped, multiple MLAs arrested, a sitting minister in ED custody, and its own Vigilance Bureau raided by CBI for bribery",
    "Rs 20,000 crore sand mining promise vs Rs 288 crore delivered = 98.6% failure",
    "Debt-to-GSDP highest in India. CAG says finances heavily stressed. Borrowed money spent on consumption, not development",
    "AAP retained corrupt contractors from Congress era in foodgrain transportation; ED is now probing AAP's first year payments",
    "AAP's own MP (Malvinder Kang) publicly questioned sand mining corruption — internal dissent",
    "CBI raids on Vigilance Bureau itself show corruption is systemic, not isolated",
    "In Congress 2017-22 term, corruption allegations existed but the party did not claim moral superiority on anti-corruption — AAP's core brand is anti-corruption, making every case disproportionately damaging",
  ],
  keyStatistics: [
    { metric: "Ministers dropped from Mann cabinet (2022-26)", value: "10" },
    { metric: "MLAs arrested on corruption charges", value: "4+" },
    { metric: "Serving ministers arrested by ED", value: "1 (Sanjeev Arora, May 2026)" },
    { metric: "Sand mining revenue shortfall vs promise", value: "Rs 19,712 crore/year" },
    { metric: "Debt-to-GSDP ratio (highest in India)", value: "43.72-44.27%" },
    { metric: "CAG assessment", value: "Finances heavily stressed" },
    { metric: "AAP Punjab chief named in ED case", value: "Aman Arora (CLU scam, May 2026)" },
    { metric: "Vigilance Bureau itself raided by CBI", value: "May 2026" },
  ],
};

// ==========================================
// CORRUPTION KEY STATS
// ==========================================

export const CORRUPTION_KEY_STATS: CorruptionKeyStats = {
  ministersDropped: 10,
  mlasArrested: 4,
  servingMinistersArrested: 1,
  sandMiningShortfall: "Rs 19,712 crore/year",
  debtToGSDP: "43.72-44.27% (highest in India)",
  cagAssessment: "Finances heavily stressed",
  aapPunjabChiefNamed: true,
  vigilanceBureauRaided: true,
};

// ==========================================
// CORRUPTION ASSESSMENT
// ==========================================

export const CORRUPTION_ASSESSMENT: CorruptionAssessment = {
  narrative: ANTI_CORRUPTION_NARRATIVE,
  keyStats: CORRUPTION_KEY_STATS,
  dataGaps: [
    "Detailed CAG findings on department-wise irregularities (health, education, rural development)",
    "RTI-based revelations of specific corruption instances",
    "Lokpal/Lokayukta cases filed specifically against AAP leaders in Punjab",
    "District-wise corruption perception data",
    "Punjab liquor policy specific investigation status (separate from Delhi case)",
    "Comparison table of Congress 2017-22 corruption allegations vs AAP 2022-26",
    "Detailed financial irregularities from CAG compliance audit on public sector enterprises",
  ],
};

// ==========================================
// COMPLETE CORRUPTION SCANDALS REPORT
// ==========================================

export const corruptionScandalsReport: CorruptionScandalsReport = {
  reportDate: "2026-05-19",
  source: "Web search (The Hindu, Indian Express, Times of India, The Print, NDTV, Economic Times, Scroll.in, Tribune, New Indian Express, OpIndia, Babushahi)",
  dataCurrency: "May 2022 - May 2026",
  strategicSignificance:
    "AAP swept to power in March 2022 on an anti-corruption platform, born from the India Against Corruption movement. Any corruption within AAP's own ranks is politically devastating — it destroys the party's core brand identity. As of May 2026, 10 ministers have been dropped from the Mann cabinet in four years, multiple MLAs arrested, and central agencies (ED, CBI) are actively investigating serving ministers.",

  majorCases: MAJOR_CASES,
  casesSummary: CORRUPTION_CASES_SUMMARY,
  sectorCorruption: SECTOR_CORRUPTION,
  cagFinancials: CAG_FINANCIALS,
  earlierCAGFindings: EARLIER_CAG_FINDINGS,
  vigilanceBureauRaid: VIGILANCE_BUREAU_RAID,
  assessment: CORRUPTION_ASSESSMENT,
  gapsRequiringResearch: CORRUPTION_ASSESSMENT.dataGaps,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get corruption case by ID
 */
export function getCaseById(id: string): CorruptionCase | undefined {
  return MAJOR_CASES.find((c) => c.id === id);
}

/**
 * Get cases by agency
 */
export function getCasesByAgency(agency: string): CorruptionCase[] {
  return MAJOR_CASES.filter((c) => c.agency.includes(agency));
}

/**
 * Get cases by status
 */
export function getCasesByStatus(status: CorruptionCase["status"]): CorruptionCase[] {
  return MAJOR_CASES.filter((c) => c.status === status);
}

/**
 * Get total number of ministers dropped
 */
export function getMinistersDroppedCount(): number {
  return CORRUPTION_CASES_SUMMARY.ministersDropped;
}

/**
 * Get sand mining shortfall in crores
 */
export function getSandMiningShortfall(): number {
  return SAND_MINING_CORRUPTION.reality.shortfallCrore;
}

/**
 * Get CAG verdict on state finances
 */
export function getCAGVerdict(): string {
  return CAG_FINANCIALS.cagVerdict;
}

/**
 * Check if a specific minister is under investigation
 */
export function isUnderInvestigation(name: string): boolean {
  return MAJOR_CASES.some(
    (c) => c.accused.toLowerCase().includes(name.toLowerCase()) && ["arrested", "ongoing", "charges_pending"].includes(c.status)
  );
}

// ==========================================
// ENUM CONSTANTS FOR USE IN COMPONENTS
// ==========================================

export const CORRUPTION_CASE_STATUS_LABELS: Record<CorruptionCase["status"], string> = {
  arrested: "Arrested",
  bail_granted: "Bail Granted",
  resigned: "Resigned",
  dropped_from_cabinet: "Dropped from Cabinet",
  under_investigation: "Under Investigation",
  ongoing: "Case Ongoing",
  charges_pending: "Charges Pending",
};

export const INVESTIGATING_AGENCY_LABELS: Record<string, string> = {
  "Punjab Anti-Corruption": "Punjab Anti-Corruption",
  "Punjab Vigilance Bureau": "Punjab Vigilance Bureau",
  "Enforcement Directorate (ED)": "ED",
  "Central Bureau of Investigation (CBI)": "CBI",
  "CBI under PMLA": "CBI (PMLA)",
};
