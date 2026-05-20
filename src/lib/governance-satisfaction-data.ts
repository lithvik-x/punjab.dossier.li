// Governance Satisfaction Barometer Data
// Derived from: MP1/governance/satisfaction-barometer.md
// Research Date: 19 May 2026

import type {
  GovernanceSatisfactionReport,
  SatisfactionTrendData,
  IssueSatisfaction,
  DemographicSatisfactionData,
  CMApprovalData,
  ReElectWillingnessData,
  AntiIncumbencyData,
  GovernanceMetricsData,
  StrategicImplicationsData,
  SatisfactionTrendPoint,
  SatisfactionLevel,
  AntiIncumbencyIndicator,
  Direction,
  SignalStrength,
} from "@/types/governance-satisfaction-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  title: "Punjab Public Satisfaction Barometer — AAP Government (2022-2026)",
  megaPillar: "MP1 — Foundational Scan (Governance Assessment)",
  researchDate: "19 May 2026",
  classification: "Strategic Intelligence — Anti-Incumbency Quantification",
  dataFreshness: "Most data points from 2024-2026; some proxy indicators",
};

// ==========================================
// SATISFACTION TREND DATA (2022-2026)
// ==========================================

const satisfactionTrend: SatisfactionTrendData = {
  trajectory: [
    {
      period: "Q1 2022 (Mar)",
      satisfactionProxy: 85,
      evidence: "Post-election euphoria; 92-seat mandate; \"change\" narrative dominant",
    },
    {
      period: "Q4 2022",
      satisfactionProxy: 70,
      evidence: "Free electricity launched; honeymoon period waning; Health Minister Vijay Singla sacked for corruption within months",
    },
    {
      period: "Q3 2023",
      satisfactionProxy: 55,
      evidence: "Drug crisis persists; unemployment rising; first signs of farmer discontent",
    },
    {
      period: "Q1 2024",
      satisfactionProxy: 42,
      evidence: "Lok Sabha election — AAP wins only 3/13 seats; Congress takes 7; vote share drops",
    },
    {
      period: "Q4 2024",
      satisfactionProxy: 38,
      evidence: "Cabinet reshuffle; 4 ministers dropped; corruption taint; Delhi AAP loss demoralises cadre",
    },
    {
      period: "Q2 2025",
      satisfactionProxy: 35,
      evidence: "India Today reports Mann on \"overdrive to buff up image as tough administrator\"; internal AAP discontent",
    },
    {
      period: "Q4 2025",
      satisfactionProxy: 40,
      evidence: "Rural body polls won but 48.4% turnout (lowest since 2008); opposition calls it \"no confidence motion\"",
    },
    {
      period: "Q1 2026",
      satisfactionProxy: 42,
      evidence: "Rs 1000 women scheme finally announced (4 years late); AAP claims \"all guarantees fulfilled\" in 4-year report card",
    },
  ],
  keyInsight:
    "AAP's satisfaction has roughly halved from its post-election peak. The government has stabilised at a low-moderate level (~38-42%), propped up almost entirely by the free electricity scheme. Without that single achievement, satisfaction would likely be below 25%.",
  currentEstimate: {
    value: 40,
    range: "38-42%",
    proppedBy: ["Free electricity scheme (70-75% satisfaction)", "Lack of credible opposition consolidation", "SAD's near-collapse", "Cadre-based rural organisation"],
  },
};

// ==========================================
// ISSUE-WISE SATISFACTION
// ==========================================

const issueSatisfaction: IssueSatisfaction[] = [
  {
    issue: "Free Electricity",
    satisfactionLevel: "HIGH",
    satisfactionPercentage: 72,
    promise: "300 units free per month per household (launched July 2022)",
    delivery: "~90% households receive zero electricity bills (AAP claim; contested by some consumers reporting inflated bills Feb 2026)",
    metrics: [
      { label: "Scheme", value: "300 units free/month/household" },
      { label: "Coverage", value: "~90% households (AAP claim)" },
      { label: "Farmer benefit", value: "Uninterrupted daytime power for agriculture (first time in Punjab's history)" },
      { label: "Cost to exchequer", value: "Significant subsidy burden; PSPCL financial stress" },
    ],
    strategicSignificance: "AAP's only genuine achievement; propping up overall satisfaction numbers",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    issue: "Drug Eradication",
    satisfactionLevel: "VERY_LOW",
    satisfactionPercentage: 17,
    promise: "\"End drug menace within 4 weeks of coming to power\" (Kejriwal, 2021)",
    delivery: "Drug crisis deepened; supply chains disrupted but shifted, not eliminated",
    metrics: [
      { label: "Reality", value: "Drug crisis deepened after 4 years" },
      { label: "Expert assessment", value: "\"Enforcement has been unable to curtail rising use and harms\" (IDPC, Jun 2025)" },
      { label: "Community response", value: "Malwa region communities organising own anti-drug drives" },
      { label: "Viral videos", value: "Young boys/girls using drugs publicly (May 2026)" },
    ],
    strategicSignificance: "AAP's signature promise — complete failure. Single biggest driver of anti-incumbency, especially in Malwa (69 seats). Congress's strongest attack vector.",
    verificationStatus: "VERIFIED",
  },
  {
    issue: "Employment",
    satisfactionLevel: "VERY_LOW",
    satisfactionPercentage: 22,
    promise: "65,264 government jobs provided in 4 years (merit-based, transparent)",
    delivery: "Drop in the ocean for Punjab's 2.8 crore population with ~19% youth unemployment",
    metrics: [
      { label: "AAP Claim", value: "65,264 government jobs in 4 years" },
      { label: "Youth unemployment (15-29)", value: "19.3% (BJP citing official data, Feb 2026)" },
      { label: "Rural youth unemployment", value: "22.5% — alarming level" },
      { label: "Migration", value: "Record numbers attempting illegal emigration" },
    ],
    strategicSignificance: "Government jobs insufficient for scale of need. No private industry, no economic growth strategy.",
    verificationStatus: "VERIFICATION_NEEDED",
  },
  {
    issue: "Women's Welfare",
    satisfactionLevel: "LOW",
    satisfactionPercentage: 32,
    promise: "Rs 1,000/month to all women",
    delivery: "Announced only in March 2026 Budget — nearly 4 YEARS after election",
    metrics: [
      { label: "Delivery delay", value: "4 years late" },
      { label: "Free bus travel", value: "Operational" },
      { label: "Sanitary pads", value: "27,000+ anganwadi centres distributing" },
      { label: "Perception", value: "\"Too little, too late\" — Rs 1,000/month at election eve reeks of desperation" },
    ],
    strategicSignificance: "4-year delay is a powerful narrative for Congress. Women voters feel betrayed by timing — scheme announced just 11 months before Feb 2027 election.",
    verificationStatus: "VERIFIED",
  },
  {
    issue: "Healthcare",
    satisfactionLevel: "LOW",
    satisfactionPercentage: 32,
    promise: "Aam Aadmi Clinics throughout Punjab",
    delivery: "881 operational (Mar 2026); target was 1,000+ by end of 2025",
    metrics: [
      { label: "Clinics operational", value: "881 (Mar 2026)" },
      { label: "Target", value: "1,000+ by end of 2025" },
      { label: "Outpatient visits", value: "50+ million cumulative" },
      { label: "Population served/institution", value: "6,871 in 2025 (worsening)" },
    ],
    strategicSignificance: "Some progress but district disparities persist; rural areas underserved",
    verificationStatus: "VERIFIED",
  },
  {
    issue: "Farmer Welfare",
    satisfactionLevel: "LOW",
    satisfactionPercentage: 27,
    promise: "Canal irrigation 22% to 70%, daytime power, debt relief, MSP commitment",
    delivery: "Canal irrigation claim unverified; daytime power delivered; debt relief NOT delivered",
    metrics: [
      { label: "Canal irrigation", value: "22% to 70%+ (AAP claim, Mar 2026) — VERIFICATION_NEEDED" },
      { label: "Electricity for farming", value: "Daytime power — genuine positive" },
      { label: "Debt relief", value: "NOT delivered meaningfully" },
      { label: "MSP commitment", value: "No progress beyond existing central schemes" },
    ],
    strategicSignificance: "Farmer distress persists; land acquisition protests ongoing",
    verificationStatus: "AAP_CLAIM",
  },
  {
    issue: "Law & Order",
    satisfactionLevel: "LOW",
    satisfactionPercentage: 27,
    promise: "Safe Punjab, end gangster culture",
    delivery: "Continued high-profile incidents; gangster culture persists",
    metrics: [
      { label: "Gangster culture", value: "Continued; high-profile incidents persist" },
      { label: "Drug mafia", value: "Supply chains disrupted but shifted, not eliminated" },
      { label: "Police credibility", value: "Compromised by allegations of partisan conduct in rural polls" },
      { label: "Amritpal Singh", value: "Pro-Khalistan MP elected from Khadoor Sahib in 2024 — law-and-order vacuum indicator" },
    ],
    strategicSignificance: "Law-and-order vacuum indicated by Amritpal Singh election",
    verificationStatus: "VERIFIED",
  },
  {
    issue: "Corruption-Free Governance",
    satisfactionLevel: "LOW",
    satisfactionPercentage: 22,
    promise: "Corruption-free governance (AAP came to power on anti-corruption platform)",
    delivery: "At least 10 ministers dropped/arrested since 2022; social media spending scandal",
    metrics: [
      { label: "Ministers dropped/arrested", value: "10+ since 2022 (including Vijay Singla, 4 in Sep 2024, Bhullar Mar 2026, Kuldeep Dhaliwal Jul 2025)" },
      { label: "MLA Raman Arora", value: "Arrested by Punjab Vigilance Bureau on corruption charges (2026)" },
      { label: "Minister Bhullar", value: "Arrested in Rs 8 lakh bribery case (Oct 2025); later sacked (Mar 2026)" },
      { label: "Social media spending", value: "Rs 10.59 crore on \"buying praise\" for CM (May 2026) — ALLEGATION" },
    ],
    strategicSignificance: "AAP came to power on anti-corruption platform — irony is politically damaging",
    verificationStatus: "ALLEGATION",
  },
  {
    issue: "Education",
    satisfactionLevel: "MODERATE",
    satisfactionPercentage: 42,
    promise: "Improved government schools, better education outcomes",
    delivery: "Some infrastructure improvement; quality of education outcomes not measured",
    metrics: [
      { label: "Sports budget", value: "Rs 1,791 crore" },
      { label: "New universities", value: "Sri Guru Teg Bahadur University approved at Anandpur Sahib (Mar 2026)" },
      { label: "Teacher postings", value: "VIP teachers near Chandigarh ordered back to border districts (Dec 2025)" },
    ],
    strategicSignificance: "Moderate satisfaction; rural-urban divide persists",
    verificationStatus: "VERIFIED",
  },
  {
    issue: "Infrastructure",
    satisfactionLevel: "MODERATE",
    satisfactionPercentage: 42,
    promise: "Better roads, toll-free commuting, irrigation",
    delivery: "19 toll plazas closed; canal irrigation claim unverified; no major industrial corridors",
    metrics: [
      { label: "Toll plazas closed", value: "19 — direct financial relief to commuters" },
      { label: "Canal irrigation", value: "22% to 70% (AAP claim) — VERIFICATION_NEEDED" },
      { label: "Thermal plant", value: "Sri Guru Amardas Thermal Plant at Goindwal Sahib purchased" },
    ],
    strategicSignificance: "No major new industrial corridors; private investment remains low",
    verificationStatus: "AAP_CLAIM",
  },
];

// ==========================================
// 2024 LOK SABHA RESULTS
// ==========================================

const lokSabhaResults = {
  electionDate: "June 2024",
  results: [
    { party: "Congress" as const, seats: 7, seatsTotal: 13, constituencies: [] },
    { party: "AAP" as const, seats: 3, seatsTotal: 13, constituencies: ["Sangrur", "Hoshiarpur", "Anandpur Sahib"] },
    { party: "SAD" as const, seats: 1, seatsTotal: 13, constituencies: ["Bathinda"] },
    { party: "Independents" as const, seats: 2, seatsTotal: 13, constituencies: ["Khadoor Sahib (Amritpal Singh)"] },
  ],
  strategicImplication:
    "When voters had a national-level alternative (Congress), they abandoned AAP. The Lok Sabha result is the strongest indicator that AAP's base has eroded substantially since 2022. AAP's vote share fell significantly; Congress retained its position as the single largest party by seats.",
};

// ==========================================
// DEMOGRAPHIC SATISFACTION
// ==========================================

const demographicSatisfaction: DemographicSatisfactionData = {
  demographics: [
    {
      demographic: "Jat Sikh (Rural Landowning)",
      satisfactionPercentage: 32,
      trend: "declining",
      populationPercent: 20,
      keyFactors: [
        "Farmer distress persists despite electricity gains",
        "Drug crisis hits rural families hardest",
        "MSP and debt relief promises unfulfilled",
        "Traditional power structure disrupted by AAP's \"outsider\" governance",
      ],
      strategicNote: "Politically decisive in 69 Malwa seats",
    },
    {
      demographic: "Scheduled Castes",
      satisfactionPercentage: 32,
      trend: "declining",
      populationPercent: 31.9,
      keyFactors: [
        "31.9% of Punjab population (highest proportion of any Indian state)",
        "Rs 1,500/month for SC women announced only in Mar 2026",
        "65,000 government jobs insufficient for scale of need",
        "Drug epidemic disproportionately impacts SC youth",
      ],
      strategicNote: "Congress traditional base — showing signs of returning",
    },
    {
      demographic: "Urban",
      satisfactionPercentage: 42,
      trend: "stable",
      populationPercent: 37,
      keyFactors: [
        "Free electricity universally positive",
        "Unemployment and lack of industrial investment negate gains",
        "Mohalla clinics: some benefit, quality concerns persist",
        "Social media spending scandal hurts urban middle class",
      ],
    },
    {
      demographic: "Women",
      satisfactionPercentage: 32,
      trend: "declining",
      keyFactors: [
        "Rs 1,000/month delayed 4 years — THE most damaging broken promise",
        "Free bus travel: genuinely appreciated",
        "Sanitary pads: positive but minor",
        "Drug addiction among sons/husbands: women bear the emotional burden",
      ],
      strategicNote: "Women voters were crucial to AAP's 2022 sweep — erosion here is electorally significant",
    },
    {
      demographic: "Youth (15-29)",
      satisfactionPercentage: 17,
      trend: "declining",
      keyFactors: [
        "Youth unemployment at 19.3%; rural at 22.5%",
        "\"Distress migration\" — record numbers attempting illegal emigration",
        "Drug crisis: youth are the primary victims",
        "PM Internship Scheme failed to attract Punjab youth",
      ],
      strategicNote: "AAP's youth base from 2022 has largely evaporated. This erosion is the single most dangerous trend for AAP.",
    },
  ],
  mostEroded: "Youth (15-20% satisfaction) — AAP's strongest demographic in 2022 has largely abandoned the party",
  leastEroded: "Urban (40-45% satisfaction) — propped up by free electricity scheme",
};

// ==========================================
// CM BHAGWANT MANN APPROVAL
// ==========================================

const cmApproval: CMApprovalData = {
  trends: [
    { period: "Mar 2022", approval: 80, notes: "Massive personal mandate from Sangrur; \"common man\" narrative" },
    { period: "Late 2022", approval: 65, notes: "Some governance stumbles; electricity success helped" },
    { period: "Mid 2023", approval: 50, notes: "Drug crisis; perception of remote-controlled by Kejriwal" },
    { period: "Early 2024", approval: 40, notes: "Lok Sabha loss damaged personal credibility" },
    { period: "Late 2024", approval: 38, notes: "Delhi AAP collapse; viewed as Kejriwal's \"deputy\"" },
    { period: "Mid 2025", approval: 42, notes: "Image-building efforts; \"tough administrator\" push (India Today)" },
    { period: "Early 2026", approval: 45, notes: "\"Guarantees fulfilled\" narrative; Rs 1,000 scheme; report card" },
  ],
  currentEstimate: {
    value: 43,
    range: "42-45%",
    personalBrandEquity: "CM Mann's personal approval remains higher than government satisfaction, suggesting personal brand equity beyond AAP",
    keyWeakness: "Perception that he is remote-controlled by Kejriwal (especially after Kejriwal's Delhi defeat and arrest) undermines his \"strong CM\" image",
  },
};

// ==========================================
// WILLINGNESS TO RE-ELECT
// ==========================================

const reElectWillingness: ReElectWillingnessData = {
  trends: [
    { period: "Early 2022", willingnessProxy: 80, evidence: "Won 92 of 117 seats; unprecedented mandate" },
    { period: "Late 2022", willingnessProxy: 65, evidence: "Honeymoon period; electricity success" },
    { period: "Mid 2023", willingnessProxy: 50, evidence: "Drug failure becoming apparent; first criticism" },
    { period: "Early 2024", willingnessProxy: 35, evidence: "Lok Sabha: only 3/13 seats won; Congress took 7" },
    { period: "Late 2024", willingnessProxy: 30, evidence: "Delhi AAP collapse damaged Punjab brand; cabinet corruption" },
    { period: "Mid 2025", willingnessProxy: 32, evidence: "Mann image-building overdrive; rural polls approaching" },
    { period: "Dec 2025", willingnessProxy: 35, evidence: "Rural body polls won but lowest turnout since 2008" },
    { period: "Early 2026", willingnessProxy: 38, evidence: "Rs 1,000 women scheme announced; \"report card\" released" },
  ],
  currentEstimate: {
    value: 37,
    range: "35-40%",
    seatEstimate: "40-50 seats",
    retainedSeats: 47,
    lostSeats: 45,
    floorFactors: [
      "Free electricity",
      "Lack of credible opposition consolidation",
      "SAD's near-collapse",
      "Cadre-based rural organisation",
    ],
  },
};

// ==========================================
// ANTI-INCUMBENCY INDICATORS
// ==========================================

const antiIncumbencyIndicators: AntiIncumbencyIndicator[] = [
  {
    indicator: "Lok Sabha 2024 (3/13 seats)",
    signalStrength: "STRONG",
    direction: "anti_incumbency",
    detail: "AAP won only 3 of 13 seats — devastating for incumbent state government",
  },
  {
    indicator: "Rural poll turnout (48.4%, lowest since 2008)",
    signalStrength: "STRONG",
    direction: "anti_incumbency",
    detail: "Voter disengagement rather than endorsement",
  },
  {
    indicator: "Drug crisis failure",
    signalStrength: "VERY_STRONG",
    direction: "anti_incumbency",
    detail: "Core promise broken — biggest driver of anti-incumbency",
  },
  {
    indicator: "Youth unemployment 19.3%",
    signalStrength: "STRONG",
    direction: "anti_incumbency",
    detail: "Demographic erosion — youth were AAP's strongest base",
  },
  {
    indicator: "Rs 1,000 delayed 4 years",
    signalStrength: "STRONG",
    direction: "anti_incumbency",
    detail: "Women demographic erosion — betrayal narrative",
  },
  {
    indicator: "10+ ministers dropped/arrested",
    signalStrength: "MODERATE",
    direction: "anti_incumbency",
    detail: "Corruption taint — irony of anti-corruption party",
  },
  {
    indicator: "Distress migration acceleration",
    signalStrength: "STRONG",
    direction: "anti_incumbency",
    detail: "Economic failure indicator — record illegal emigration attempts",
  },
  {
    indicator: "Social media spending scandal",
    signalStrength: "MODERATE",
    direction: "anti_incumbency",
    detail: "Transparency concerns — Rs 10.59 crore alleged",
  },
  {
    indicator: "7 MPs defected from AAP (Apr 2026)",
    signalStrength: "STRONG",
    direction: "anti_incumbency",
    detail: "Internal party collapse indicator",
  },
];

const antiIncumbency: AntiIncumbencyData = {
  indicators: antiIncumbencyIndicators,
  overallAssessment:
    "Anti-incumbency is building but not yet decisive. Historical pattern (no Punjab government has won 3 consecutive terms) favours the opposition. Congress must avoid fragmentation of the anti-AAP vote.",
  trend: "building",
};

// ==========================================
// GOVERNANCE METRICS
// ==========================================

const governanceMetrics: GovernanceMetricsData = {
  freeElectricity: {
    coverage: "~90% households receive zero electricity bills",
    farmerBenefit: "Uninterrupted daytime power for agriculture (first time in Punjab's history)",
    costToExchequer: "Significant subsidy burden; PSPCL financial stress",
    satisfaction: 72,
    issues: ["Some consumers reported inflated bills in February 2026", "PSPCL mounting losses may force tariff hikes"],
  },
  drugEradication: {
    promise: "\"End drug menace within 4 weeks of coming to power\" (Kejriwal, 2021)",
    reality: "Drug crisis deepened; supply chains shifted but not eliminated",
    expertAssessment: "\"Enforcement has been unable to curtail rising use and harms\" (IDPC, Jun 2025)",
    communityResponse: "Malwa region communities organising own anti-drug drives (sign of government failure)",
  },
  employment: {
    jobsProvided: 65264,
    youthUnemployment: 19.3,
    ruralYouthUnemployment: 22.5,
    migrationIssue: "Record numbers of Punjabi youth attempting illegal migration; \"distress migration\" linked to joblessness",
  },
  womenWelfare: {
    promise: "Rs 1,000/month to all women",
    deliveryDelay: "4 years — announced March 2026 Budget",
    freeBusTravel: "Operational — women can travel free on government buses",
    sanitaryPads: "27,000+ anganwadi centres distributing free sanitary pads",
  },
  healthcare: {
    clinicsOperational: 881,
    targetClinics: 1000,
    outpatientVisits: "50+ million cumulative",
    populationServedPerInstitution: 6871,
  },
  farmerWelfare: {
    canalIrrigation: "22% to 70%+ (AAP claim — VERIFICATION_NEEDED)",
    electricityForFarming: "Daytime power — genuine positive",
    debtRelief: "NOT delivered meaningfully",
    mspCommitment: "No progress beyond existing central schemes",
  },
  lawOrder: {
    gangsterCulture: "Continued; high-profile incidents persist",
    drugMafia: "Supply chains disrupted but shifted, not eliminated",
    policeCredibility: "Compromised by allegations of partisan conduct in rural polls (Dec 2025)",
    amritpalSinghFactor: "Pro-Khalistan MP elected from Khadoor Sahib in 2024 — indicates law-and-order vacuum",
  },
  corruptionGovernance: {
    ministersDropped: 10,
    corruptionCases: [
      "Health Minister Vijay Singla sacked (2022)",
      "4 dropped in Sep 2024",
      "Kuldeep Dhaliwal dropped Jul 2025",
      "Minister Bhullar arrested in Rs 8 lakh bribery case (Oct 2025); sacked Mar 2026",
      "MLA Raman Arora arrested on corruption charges (2026)",
    ],
    socialMediaSpending: "Rs 10.59 crore allegedly spent on \"buying praise\" for CM on social media (May 2026) — ALLEGATION",
  },
  education: {
    sportsBudget: "Rs 1,791 crore",
    newUniversities: "Sri Guru Teg Bahadur University approved at Anandpur Sahib (Mar 2026)",
    infrastructureInvestment: "Some improvement in government schools",
  },
  infrastructure: {
    tollPlazasClosed: 19,
    canalIrrigation: "22% to 70%+ (AAP claim — VERIFICATION_NEEDED)",
    thermalPlant: "Sri Guru Amardas Thermal Plant at Goindwal Sahib purchased",
  },
};

// ==========================================
// STRATEGIC IMPLICATIONS
// ==========================================

const strategicImplications: StrategicImplicationsData = {
  forCongress: [
    {
      number: 1,
      title: "AAP's floor is ~35-40% re-election willingness",
      description: "Translating to an estimated 40-50 seats (down from 92 in 2022). Congress needs 59+ for majority — the gap is achievable with the right coalition strategy.",
    },
    {
      number: 2,
      title: "The drug crisis is the #1 attack vector",
      description: "AAP promised to end it in 4 weeks; 4 years later, it's worse. This resonates across ALL demographics — rural, urban, Jat, SC, women, youth.",
    },
    {
      number: 3,
      title: "Women voters are winnable",
      description: "The 4-year delay on Rs 1,000 is a betrayal narrative that resonates emotionally. Congress should announce a superior women's welfare package.",
    },
    {
      number: 4,
      title: "Youth dissatisfaction (19.3% unemployment) is at crisis level",
      description: "Congress needs a credible employment plan — not just government jobs but industrial policy and private sector growth.",
    },
    {
      number: 5,
      title: "Mann's personal approval is higher than government satisfaction",
      description: "Campaign should focus on AAP government failures rather than personal attacks on Mann.",
    },
    {
      number: 6,
      title: "The 2024 Lok Sabha result proves AAP is beatable",
      description: "Congress's 7/13 performance shows the party has recovered from its 2022 low of 18 assembly seats.",
    },
    {
      number: 7,
      title: "Anti-incumbency is building but not yet decisive",
      description: "Historical pattern (no Punjab government has won 3 consecutive terms) favours the opposition. Congress must avoid fragmentation of the anti-AAP vote.",
    },
  ],
  dataGaps: [
    {
      dataPoint: "Independent satisfaction survey (2025-2026)",
      status: "NOT FOUND",
      actionNeeded: "No major independent satisfaction poll available for Punjab AAP government post-2024",
    },
    {
      dataPoint: "Quarterly satisfaction tracking",
      status: "NOT AVAILABLE",
      actionNeeded: "No systematic tracking exists publicly",
    },
    {
      dataPoint: "Canal irrigation 22% to 70% claim",
      status: "AAP CLAIM ONLY",
      actionNeeded: "VERIFICATION_NEEDED — independent assessment required",
    },
    {
      dataPoint: "49% road accident death reduction",
      status: "AAP CLAIM ONLY",
      actionNeeded: "VERIFICATION_NEEDED — independent data required",
    },
    {
      dataPoint: "65,264 government jobs",
      status: "AAP CLAIM",
      actionNeeded: "VERIFICATION_NEEDED — quality and permanence of jobs",
    },
    {
      dataPoint: "Rs 10.59 crore social media spending",
      status: "ALLEGATION",
      actionNeeded: "VERIFICATION_NEEDED — source credibility varies",
    },
  ],
};

// ==========================================
// COMPLETE GOVERNANCE SATISFACTION REPORT
// ==========================================

export const governanceSatisfactionData: GovernanceSatisfactionReport = {
  metadata,
  executiveSummary:
    "Public satisfaction with the Bhagwant Mann-led AAP government has undergone a steep decline from the euphoric post-election high of March 2022. While the government retains a single credible achievement (free electricity), it faces deep dissatisfaction on the issues that matter most: drug eradication, employment, women's welfare, and corruption-free governance. The 2024 Lok Sabha results (AAP won only 3 of 13 seats) serve as the most authoritative satisfaction proxy. The 48.4% voter turnout in December 2025 rural body elections signals voter disengagement rather than endorsement.",
  satisfactionTrend,
  lokSabhaResults,
  issueSatisfaction,
  demographicSatisfaction,
  cmApproval,
  reElectWillingness,
  antiIncumbency,
  governanceMetrics,
  strategicImplications,
};

// ==========================================
// SOURCE DATA FOR COMPONENTS
// ==========================================

// Overall satisfaction trend for charts
export const satisfactionTrendChartData = satisfactionTrend.trajectory.map((point) => ({
  period: point.period,
  value: point.satisfactionProxy,
  evidence: point.evidence,
}));

// Issue satisfaction sorted by level
export const issueSatisfactionSorted = [...issueSatisfaction].sort(
  (a, b) => a.satisfactionPercentage - b.satisfactionPercentage
);

// CM Approval trend
export const cmApprovalTrendData = cmApproval.trends.map((t) => ({
  period: t.period,
  value: t.approval,
  notes: t.notes,
}));

// Re-elect willingness trend
export const reElectWillingnessTrendData = reElectWillingness.trends.map((t) => ({
  period: t.period,
  value: t.willingnessProxy,
  evidence: t.evidence,
}));

// Anti-incumbency indicators by signal strength
export const antiIncumbencyByStrength = [...antiIncumbency.indicators].sort((a, b) => {
  const strengthOrder = { VERY_STRONG: 0, STRONG: 1, MODERATE: 2, WEAK: 3 };
  return strengthOrder[a.signalStrength] - strengthOrder[b.signalStrength];
});

// Key metrics for cards
export const keyGovernanceMetrics = [
  {
    label: "Youth Unemployment (15-29)",
    value: "19.3%",
    comparison: "Rural: 22.5%",
    trend: "up" as const,
    severity: "critical" as const,
  },
  {
    label: "Rural Poll Turnout (Dec 2025)",
    value: "48.4%",
    comparison: "Lowest since 2008 (was 68%)",
    trend: "down" as const,
    severity: "high" as const,
  },
  {
    label: "AAP Seats (Lok Sabha 2024)",
    value: "3/13",
    comparison: "Down from expected 8+",
    trend: "down" as const,
    severity: "critical" as const,
  },
  {
    label: "Government Jobs Promised",
    value: "65,264",
    comparison: "Against 19.3% youth unemployment",
    trend: "stable" as const,
    severity: "high" as const,
  },
  {
    label: "Aam Aadmi Clinics",
    value: "881",
    comparison: "Target: 1,000+ by end of 2025",
    trend: "stable" as const,
    severity: "medium" as const,
  },
  {
    label: "Free Electricity Coverage",
    value: "~90%",
    comparison: "AAP's only genuine achievement",
    trend: "stable" as const,
    severity: "low" as const,
  },
  {
    label: "Ministers Dropped/Arrested",
    value: "10+",
    comparison: "Since 2022 for corruption",
    trend: "up" as const,
    severity: "high" as const,
  },
  {
    label: "SC Population",
    value: "31.9%",
    comparison: "Highest proportion of any Indian state",
    trend: "stable" as const,
    severity: "low" as const,
  },
];

// Lok Sabha 2024 results for pie/donut chart
export const lokSabhaResultsChartData = lokSabhaResults.results.map((r) => ({
  party: r.party,
  seats: r.seats,
  total: r.seatsTotal,
  percentage: Math.round((r.seats / r.seatsTotal) * 100),
}));

// Demographic satisfaction data
export const demographicSatisfactionChartData = demographicSatisfaction.demographics.map((d) => ({
  demographic: d.demographic,
  value: d.satisfactionPercentage,
  trend: d.trend,
  population: d.populationPercent,
}));

// ==========================================
// EXPORTS
// ==========================================

export default governanceSatisfactionData;
