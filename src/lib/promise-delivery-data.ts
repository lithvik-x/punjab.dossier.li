// @ts-nocheck
// Promise Delivery Gap Analysis Data
// Derived from: research-M2/MP1-foundational/governance/promise-delivery-gap.md
// Research Date: 2026-05-20 | Data Currency: 2017-2022

import {
  PromiseDeliveryKPI,
  PromiseDeliveryMetadata,
  EducationMetrics,
  JobsData,
  DrugMetrics,
  CrimeStatistics,
  EconomicIndicators,
  ElectoralData,
  LeadershipTimeline,
  AAPComparison,
  ConstituencyAnalysis,
  StrategicRecommendation,
  SourceCitation,
} from "@/types/governance-promise-delivery-types";

// ==========================================
// METADATA
// ==========================================

const metadata: PromiseDeliveryMetadata = {
  reportDate: "2026-05-20",
  megaPillar: "MP1 — Foundational Scan",
  domain: "Governance",
  taskId: "T-MP1-GOV-006",
  status: "COMPLETE",
  source: "web-research",
  confidence: "HIGH",
};

// ==========================================
// EDUCATION METRICS
// ==========================================

const educationMetrics: EducationMetrics = {
  npgiRanking: {
    year: "2019-20",
    rank: 1,
    note: "#1 among all states in school education quality",
  },
  nasPerformance: {
    year: "2021",
    status: "Best-performing state",
    note: "Marked improvement over previous cycles",
  },
  infantMortalityRate: {
    nfhs4: 29.2, // per 1,000 live births (2015-16)
    nfhs5: 28, // (NFHS-5)
    nationalAverage: 35.2,
  },
  lifeExpectancy: {
    punjab: 72.7,
    national: 69.4,
    period: "2014-2018",
  },
};

// ==========================================
// JOBS DATA
// ==========================================

const jobsData: JobsData = {
  unemployedPersons: {
    q1_2017: 4.19, // lakhs
    q4_2021: 8, // lakhs+
    change: "+4 lakh jobs LOST",
  },
  youthUnemployment: {
    q1_2017: "~8 lakh",
    q4_2021: "10+ lakh",
  },
  unemploymentRate: {
    congressTenure: 7.4,
    nationalRate: 4.8,
    trend: "Worsened while national rate fell from 6.1% to 4.8%",
  },
  verdict: "CATASTROPHIC FAILURE",
};

// ==========================================
// DRUG METRICS
// ==========================================

const drugMetrics: DrugMetrics = {
  ndpsCases: {
    2016: 5906,
    2017: 12356,
    2019: 11536,
    2020: 6909,
  },
  heroinRecovered: {
    2019: 460, // kg
    2020: 759, // kg
  },
  verdict: "CATASTROPHIC FAILURE",
};

// ==========================================
// CRIME STATISTICS
// ==========================================

const crimeStatistics: CrimeStatistics = {
  totalIPCCases: {
    2017: 39388,
    2020: 49870,
    changePercent: 27,
  },
  murderTrend: {
    baseline: "Baseline",
    change: "+10%",
  },
  crimesAgainstWomen: {
    2019: 5886,
    2020: 4838,
    changePercent: -17, // COVID effect
  },
  drugCases: {
    2017: 12356,
    2020: 6909,
    note: "Improved but COVID effect",
  },
};

// ==========================================
// ECONOMIC INDICATORS
// ==========================================

const economicIndicators: EconomicIndicators = {
  gsdpGrowth: {
    congressTenure: 5.45,
    previousSAD_BJP: 5.76,
    nationalAverage: 4.6,
  },
  perCapitaIncomeGrowth: {
    congress: 4.0,
    previousSAD_BJP: 4.3,
    period: "FY18-21 vs FY13-17",
  },
  easeOfBusiness: {
    2017: 20,
    2019: 19,
  },
};

// ==========================================
// LEADERSHIP TIMELINE
// ==========================================

const leadershipTimeline: LeadershipTimeline = {
  leaders: [
    {
      name: "Captain Amarinder Singh",
      role: "CM, 2017–Sept 2021",
      keyActions: [
        "Ran dysfunctional government with limited legislative productivity",
        "No meaningful crackdown on criminal mafias",
        "Refused cooperation with BJP on major policy decisions",
      ],
      assessment: "Dysfunctional governance",
    },
    {
      name: "Navjot Singh Sidhu",
      role: "Punjab Congress President, 2021–2022",
      keyActions: [
        "Publicly undermined his own government's leadership",
        "Openly criticized CM Channi",
        "Made party ungovernable in final months",
      ],
      assessment: "Party destabilizer",
    },
    {
      name: "Charanjit Singh Channi",
      role: "CM, Sept 2021–March 2022",
      keyActions: [
        "Installed as Dalit CM to consolidate vote bank",
        "Tenure consumed by campaign management, not governance",
        "Seen as desperate gamble that failed",
      ],
      assessment: "Desperate political gambit",
    },
  ],
  transitionNote:
    "September 2021 replacement of Amarinder with Channi, 4-5 months before elections - alienated Amarinder's base, created open warfare between Sidhu and Channi, demoralized party machinery",
};

// ==========================================
// ELECTORAL DATA
// ==========================================

const electoralData: ElectoralData = {
  congressSeats: {
    2017: 77,
    2022: 18,
    change: -59,
  },
  voteShare: {
    2017: 38.5,
    2022: 23.0,
    changePercent: -15,
  },
  regionalSeats: [
    { region: "Malwa (69 seats)", 2017: 40, 2022: 2, change: -38 },
    { region: "Majha (25 seats)", 2017: 22, 2022: 6, change: -16 },
    { region: "Doaba (23 seats)", 2017: 15, 2022: 10, change: -5 },
  ],
  cabinetMinistersLost: 8,
  notableLosses: [
    {
      name: "Manpreet Badal",
      seat: "Bathinda Urban",
      margin: 70000,
      note: "Finance Minister lost by nearly 70,000 votes",
    },
    {
      name: "CM Channi",
      seat: "Own seat",
      note: "Incumbent CM going down to defeat",
    },
    {
      name: "Sidhu",
      seat: "Party president",
      note: "Lost as party president - humiliating personal verdict",
    },
  ],
};

// ==========================================
// AAP COMPARISON
// ==========================================

const aapComparison: AAPComparison = {
  claims: [
    {
      aapClaim: "300 units free electricity",
      reality: "Punjab's power sector debt surged; actual delivery inconsistent",
      attackVector: "Empty promises, mounting debt",
    },
    {
      aapClaim: "Drugs will end in 4 weeks",
      reality: "Drug crisis persists; same BJP-AAP blame game",
      attackVector: "AAP made the same promise Congress did — and failed identically",
    },
    {
      aapClaim: "20 lakh jobs",
      reality: "No verifiable job creation data",
      attackVector: "Where are the 20 lakh jobs AAP promised?",
    },
    {
      aapClaim: "Aam Aadmi Clinics",
      reality: "Limited infrastructure; quality concerns",
      attackVector: "Clinics without medicines/doctors — photo ops not healthcare",
    },
  ],
  comparativeFramework: [
    {
      dimension: "Jobs",
      congress2017_2022: "Net negative (4 lakh lost)",
      aap2022_2027: "VERIFICATION_NEEDED — AAP claims 26,797 govt jobs; private sector unclear",
    },
    {
      dimension: "Drugs",
      congress2017_2022: "Doubled then improved",
      aap2022_2027: "Promised 4 weeks, ongoing crisis",
    },
    {
      dimension: "Economy",
      congress2017_2022: "Below previous SAD-BJP record",
      aap2022_2027: "Power debt crisis, fiscal stress",
    },
    {
      dimension: "Education",
      congress2017_2022: "Genuine improvement (#1 ranking)",
      aap2022_2027: "Inheriting improved system",
    },
    {
      dimension: "Internal governance",
      congress2017_2022: "Open warfare, 11% promise delivery",
      aap2022_2027: "Less internal chaos, but policy paralysis on major issues",
    },
    {
      dimension: "Transparency",
      congress2017_2022: "Acche DIN campaign vs reality",
      aap2022_2027: "Promised transparency, actual media restriction during special session",
    },
  ],
  keyInsight:
    "AAP's actual 2022-2027 record mirrors Congress's 2017-2022 failures closely — same broken promises on drugs and jobs, same power sector dysfunction. Frame AAP as 'Congress without even the education achievements.'",
};

// ==========================================
// CONSTITUENCY ANALYSIS
// ==========================================

const constituencyAnalysis: ConstituencyAnalysis = {
  assets: [
    {
      type: "Doaba belt (Jalandhar region)",
      examples: "10 of 23 seats retained in 2022",
      whyAsset: "Strong local networks; Dalit voter consolidation around Channi's successor figures",
    },
    {
      type: "Reserved seats (SC)",
      examples: "Quadian (Partap Singh Bajwa), Dera Baba Nanak",
      whyAsset: "Local strongmen maintained personal bases",
    },
    {
      type: "Rural Malwa (select)",
      examples: "Bholath, Lehra",
      whyAsset: "Sukhpal Singh Khaira, Rajinder Kaur Bhattal had personal following",
    },
    {
      type: "Border constituencies",
      examples: "Raja Sansi, Gidderbaha",
      whyAsset: "Incumbents who won despite wave",
    },
  ],
  liabilities: [
    {
      constituency: "Bathinda Urban",
      whyLiability: "Manpreet Badal lost by 70,000 votes — anti-incumbency against finance performance",
      mitigation: "New candidate, distance from old government",
    },
    {
      constituency: "Mansa",
      whyLiability: "Moosewala lost by 66,000 votes — celebrity candidate backfired",
      mitigation: "Avoid star candidates; prioritize local workers",
    },
    {
      constituency: "Majha region (Amritsar)",
      whyLiability: "22→6 seats; Amarinder's defection created backlash",
      mitigation: "AAP's Amarinder alliance may split this further",
    },
    {
      constituency: "Malwa central",
      whyLiability: '"Ghar Ghar Naukri" failure hit hardest here',
      mitigation: "Focus on new employment narrative, not past promises",
    },
  ],
  highRiskSeats: [
    {
      category: "Ghar Ghar Naukri seats",
      reasons: ["Most prominently advertised promise", "Complete failure to deliver"],
    },
    {
      category: "Malwa border belt",
      reasons: ["Drug crisis was #1 voter concern"],
    },
    {
      category: "Narrow AAP margin seats (2022)",
      reasons: ["Congress had large 2017 margin", "Swing voters available"],
    },
  ],
  opportunitySeats: [
    {
      category: "Urban seats",
      reasons: ["Power cuts/electricity costs are grievance"],
    },
    {
      category: "Rural seats",
      reasons: ["Aam Aadmi Clinics failed to materialize as healthcare"],
    },
    {
      category: "AAP candidate tainted seats",
      reasons: ["Local governance failure by AAP's own MLA"],
    },
  ],
};

// ==========================================
// STRATEGIC RECOMMENDATIONS
// ==========================================

const strategicRecommendations: StrategicRecommendation[] = [
  {
    number: 1,
    title: "Lead with 'AAP = Congress 2.0'",
    description:
      "Most potent 2027 message: AAP repeated every failure of Congress (drugs, jobs, broken promises) while adding new failures (power debt, fiscal crisis)",
    canSay: [
      "AAP broke every promise we also made — but we built education infrastructure",
      "In 2017 we promised change from SAD; AAP promised change from us — and did nothing",
      "Our government improved schools; AAP is claiming credit for our investments",
    ],
    mustNotSay: [
      "We created X lakh jobs (fabricated)",
      "We solved the drug problem",
      "We ended mafia raj",
      "Ghar Ghar Naukri delivered",
      "Economic growth statistics from 2017-2022",
    ],
  },
  {
    number: 2,
    title: "Own the education achievement",
    description:
      "Congress's 2017-2022 education work created measurable, verifiable improvement. Foreground message: 'We built a system. AAP inherited it and is claiming credit.'",
    canSay: [
      "We built the foundation. AAP is inheriting a system we fixed.",
      "Punjab's health outcomes improved under Congress — AAP is claiming credit for our investments.",
    ],
    mustNotSay: ["Job creation numbers", "Drug eradication achievements", "Farmer welfare delivery"],
  },
  {
    number: 3,
    title: "Do NOT defend the 2017-2022 economic record",
    description: "The economic data is unfavorable. Focus on what Congress will do differently, not what it did before.",
    canSay: ["We faced a financial crisis; AAP inherited our solutions and failed to implement them"],
    mustNotSay: ["Economic growth statistics from 2017-2022"],
  },
  {
    number: 4,
    title: "Recruit candidates with local roots, not star power",
    description: "The Moosewala experiment backfired catastrophically. Candidates who lost in 2022 on personal merit should be assessed carefully.",
    canSay: [],
    mustNotSay: ["Using celebrity candidates"],
  },
  {
    number: 5,
    title: "Address internal governance failure directly",
    description:
      "The 2017-2022 experience proved Congress's biggest enemy is itself. Demonstrate party unity before election season, not during it.",
    canSay: [],
    mustNotSay: [],
  },
];

// ==========================================
// SOURCES
// ==========================================

const sources: SourceCitation[] = [
  { id: 1, title: "How Has Punjab Done in Last 5 Years Under the Congress Government?", source: "The Quint", date: "Jan 25, 2022", url: "https://www.thequint.com/news/webqoof/in-stats-how-has-punjab-done-in-the-last-5-years" },
  { id: 2, title: "In Punjab, Congress Proved Its Own Enemy and Paved Way for AAP", source: "The Wire", date: "March 10, 2022", url: "https://m.thewire.in/article/politics/punjab-congress-own-enemy-aap-rise" },
  { id: 3, title: "BJP tears into Congress 'failures' in Punjab rule", source: "The Hindu", date: "Sept 16, 2017", url: "https://www.thehindu.com/news/national/other-states/bjp-tears-into-congress-failures-in-punjab-rule/article19700314.ece" },
  { id: 4, title: "AAP questions achievements of Congress govt", source: "Times of India", date: "Nov 2021", url: "https://timesofindia.indiatimes.com/city/chandigarh/punjab-aap-questions-achievements-of-the-congress-govt-during-special-assembly-session/articleshow/87672900.cms" },
  { id: 5, title: "Punjab Government — Bringing Congress' Vision for School Education to Reality", source: "Congress Sandesh", date: "June 2021", url: "https://inc.in/congress-sandesh/others/punjab-government-bringing-congress-vision-for-school-education-to-reality" },
  { id: 6, title: "A Tale of Betrayal — Punjab Congress's Manifesto Review", source: "PPRC", date: "2022", url: "https://www.pprc.in/upload/36ATaleofBetrayal-PunjabCongresssManifestoReview.pdf" },
  { id: 7, title: "RBI Publications (GSDP, Per Capita Income, Ease of Doing Business)", source: "RBI", url: "https://www.rbi.org.in/Scripts/PublicationsView.aspx" },
  { id: 8, title: "NCRB Crime Data (2017-2020)", source: "NCRB", url: "https://ncrb.gov.in" },
  { id: 9, title: "NFHS-4, NFHS-5 Data", source: "NFHS", url: "http://rchiips.org/nfhs/" },
  { id: 10, title: "NSO PLFS Reports (2017-2020)", source: "NSO", url: "https://mospi.gov.in" },
  { id: 11, title: "CMIE Unemployment Data", source: "CMIE", url: "https://unemploymentinindia.cmie.com" },
  { id: 12, title: "National Performance Grading Index (NPGI) 2019-20", source: "Ministry of Education" },
];

// ==========================================
// MAIN KPI OBJECT
// ==========================================

export const promiseDeliveryKPI: PromiseDeliveryKPI = {
  metadata,
  coreVerdict: {
    promiseDeliveryRate: "Less than 11%",
    summary:
      "Congress delivered less than 11% of its 2017 manifesto commitments. The government that inherited a financially stressed but structurally intact state left it worse on nearly every socio-economic metric, while consumed by internal warfare that destroyed its electoral coalition.",
  },
  education: educationMetrics,
  womenChildWelfare: {
    crimesAgainstWomenChange: -17,
    note: "2020 vs 2019 - partly COVID effect",
  },
  fiscalManagement: {
    gstImprovement: "Higher collections during Congress tenure vs prior periods",
    taxPosture: "Maintained tax-free posture similar to AAP's subsequent approach",
  },
  jobs: jobsData,
  drugs: drugMetrics,
  farmerWelfare: {
    verdict: "PARTIAL",
    note: "Agriculture remained in distress; farmers' protests 2020-2021 Congress unable to position itself as champion",
  },
  mafiaRaj: {
    verdict: "FAILURE",
    note: "Internal Congress sources acknowledged 'mafia raj' continued; sand mining and liquor sectors particularly affected",
  },
  sacrilegeCases: {
    verdict: "FAILURE",
    note: "Punjab ranked in top 5 states nationally for sacrilege-related crimes throughout 2018-2020; no resolution on 2015 incidents",
  },
  crimeStatistics,
  economicIndicators,
  leadershipTimeline,
  electoralData,
  aapComparison,
  constituencyAnalysis,
  strategicRecommendations,
  positioningFramework: {
    recommended: "Lead with AAP failures, acknowledge Congress shortcomings selectively",
    whenToAttackAAP: "When AAP's 2022-2027 record mirrors Congress's failures (drugs, jobs, power debt)",
    whenToReferenceCongress: "Education improvements, health indicators - areas where genuine progress was made",
  },
  sources,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getJobsVerdict(): string {
  return jobsData.verdict;
}

export function getDrugsVerdict(): string {
  return drugMetrics.verdict;
}

export function getSeatLossTrend(): { year: number; seats: number }[] {
  return [
    { year: 2017, seats: electoralData.congressSeats[2017] },
    { year: 2022, seats: electoralData.congressSeats[2022] },
  ];
}

export function getVoteShareTrend(): { year: number; share: number }[] {
  return [
    { year: 2017, share: electoralData.voteShare[2017] },
    { year: 2022, share: electoralData.voteShare[2022] },
  ];
}

export function getNDPSCasesTrend(): { year: number; cases: number }[] {
  return [
    { year: 2016, cases: drugMetrics.ndpsCases[2016] },
    { year: 2017, cases: drugMetrics.ndpsCases[2017] },
    { year: 2019, cases: drugMetrics.ndpsCases[2019] },
    { year: 2020, cases: drugMetrics.ndpsCases[2020] },
  ];
}

export function getRegionalSeatChange(): { region: string; change: number }[] {
  return electoralData.regionalSeats.map((r) => ({
    region: r.region.split(" ")[0], // "Malwa", "Majha", "Doaba"
    change: r.change,
  }));
}

export function getAAPAttackLines(): { claim: string; attack: string }[] {
  return aapComparison.claims.map((c) => ({
    claim: c.aapClaim,
    attack: c.attackVector,
  }));
}

export function getCongressCanSayMustNot(): { canSay: string[]; mustNotSay: string[] } {
  const allCanSay = new Set<string>();
  const allMustNotSay = new Set<string>();

  strategicRecommendations.forEach((rec) => {
    rec.canSay.forEach((s) => allCanSay.add(s));
    rec.mustNotSay.forEach((s) => allMustNotSay.add(s));
  });

  return {
    canSay: Array.from(allCanSay),
    mustNotSay: Array.from(allMustNotSay),
  };
}
