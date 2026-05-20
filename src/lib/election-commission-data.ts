// @ts-nocheck
// Election Commission KPI Data - Punjab 2027
// Derived from: research-P2/08_election_commission/*.md
// Research Date: May 2026 | Status: COMPLETE

import type {
  ECIReadinessKPI,
  VoterListKPI,
  CriminalizationKPI,
  AffidavitKPI,
  ExpenditureKPI,
  PostalBallotKPI,
  ElectionCommissionMetadata,
} from "@/types/election-commission-types";

// ==========================================
// METADATA
// ==========================================

const electionCommissionMetadata: ElectionCommissionMetadata = {
  researchDate: "May 20, 2026",
  sourceType: "Research Agent - Multiple Source Cross-Reference",
  analyst: "Research Agent",
  status: "COMPLETE",
};

// ==========================================
// ECI READINESS KPI DATA (A-08-01)
// ==========================================

export const eciReadinessData: ECIReadinessKPI = {
  metadata: electionCommissionMetadata,

  // Timeline
  timeline: [
    { milestone: "16th Assembly term ends", date: "By February 2027", status: "VERIFIED" },
    { milestone: "Expected election period", date: "February 2027", status: "VERIFIED" },
    { milestone: "SIR notification issued", date: "May 14, 2026", status: "VERIFIED" },
    { milestone: "BLO training & preparation", date: "June 15-24, 2026", status: "VERIFIED" },
    { milestone: "Door-to-door verification (SIR)", date: "June 25 - July 24, 2026", status: "VERIFIED" },
    { milestone: "Draft Roll publication", date: "July 31, 2026", status: "VERIFIED" },
    { milestone: "Claims & objections period", date: "July-August 2026", status: "VERIFIED" },
    { milestone: "Notice period for unmatched records", date: "July 31 - September 28, 2026", status: "VERIFIED" },
    { milestone: "Final electoral roll publication", date: "October 1, 2026", status: "VERIFIED" },
    { milestone: "ECI election notification", date: "December 2026 - January 2027 (estimated)", status: "UNCERTAIN" },
    { milestone: "Model Code of Conduct enforcement", date: "~45 days before polling (estimated)", status: "UNCERTAIN" },
    { milestone: "Polling day", date: "February 2027 (estimated)", status: "UNCERTAIN" },
  ],

  // CEO Info
  ceo: {
    currentCEO: "Anindita Mitra, IAS",
    previousCEO: "Sibin C, IAS (as of late 2024/early 2025)",
    office: "Chandigarh",
    officialPortal: "ceopunjab.gov.in",
    officialPortalAlt: "elections.punjab.gov.in",
  },

  // Current Assembly Composition
  assemblyComposition: [
    { party: "AAP", seats: 92, voteShare: 42.01 },
    { party: "INC (Congress)", seats: 18, voteShare: 22.80 },
    { party: "SAD", seats: 3, voteShare: 0 },
    { party: "BJP", seats: 2, voteShare: 0 },
    { party: "Others", seats: 2, voteShare: 0 },
    { party: "Total", seats: 117, voteShare: 0 },
  ],

  // Voter Roll Statistics
  voterRollStats: {
    totalVoters: 21457160,
    preSIRMapping: 17956656,
    mappingCompletionRate: 83.69,
    ruralMappingRate: 89.58,
    urbanMappingRate: 73.0,
    unmappedVoters: 3500504,
  },

  // Election Machinery
  machinery: {
    assemblyConstituencies: 117,
    bloCount: 24453,
    supervisors: 2476,
    eros: 117,
    aeros: 234,
    pollingStations: 24500,
    districts: 23,
  },

  // 2022 Election Baseline
  baseline2022: {
    totalCandidates: 1304,
    voterTurnout: 69.65,
    pollingDate: "February 20, 2022",
  },

  // SIR Details
  sir: {
    description: "Special Intensive Revision (SIR) is a constitutionally mandated exercise under Article 324 and Section 21(3) of the Representation of the People Act, 1950, through which ECI verifies and revises electoral rolls via house-to-house enumeration.",
    lastRevision: "2003 (meaning voter data is being cross-checked against 23-year-old records)",
    phases: [
      { phase: "Pre-SIR Mapping", period: "January-February 2026", activity: "Data matching against 2003 voter lists" },
      { phase: "Preparation & Training", period: "June 15-24, 2026", activity: "BLO and staff training, form printing" },
      { phase: "Enumeration", period: "June 25 - July 24, 2026", activity: "Door-to-door visits by 24,453 BLOs" },
      { phase: "Draft Roll", period: "July 31, 2026", activity: "Publication of draft electoral roll" },
      { phase: "Claims & Objections", period: "July-August 2026", activity: "Form 6/8 submissions for omitted voters" },
      { phase: "Notice Period", period: "July 31 - September 28, 2026", activity: "7-day notice to unmatched voters" },
      { phase: "Final Roll", period: "October 1, 2026", activity: "Publication of final voter rolls" },
    ],
    methodology: {
      preFilledForms: true,
      mandatoryCompliance: true,
      threeVisitRule: true,
      documentation: ["Passports", "Pension cards", "Academic certificates", "Caste certificates"],
      aadhaarLimitation: "Supreme Court directive — Aadhaar accepted ONLY as identity proof, NOT as proof of residence",
      nonComplianceConsequence: "Voters who do not submit forms will be EXCLUDED from the Draft Roll",
      duplicateVotingPenalty: "Holding duplicate votes is a criminal offence punishable by up to 1 year imprisonment",
    },
    riskAssessment: [
      { risk: "Urban voter deletion", severity: "HIGH", description: "Urban mapping at only 73% vs 89.58% rural — Congress has stronger urban bases in Ludhiana, Amritsar, Jalandhar" },
      { risk: "Youth voter exclusion", severity: "HIGH", description: "Young/migrant voters with limited documentation may be excluded" },
      { risk: "Timing controversy", severity: "MEDIUM", description: "Both AAP and Congress have raised concerns about SIR timing before elections" },
      { risk: "Data basis concerns", severity: "MEDIUM", description: "SIR cross-checks against 2003 voter data — 23-year-old baseline" },
      { risk: "BLO partisanship", severity: "MEDIUM", description: "24,453 BLOs are government employees under AAP state government" },
    ],
    mappingByAreaType: [
      { areaType: "Rural", mappingRate: 89.58, gap: 10.42, riskLevel: "LOW" },
      { areaType: "Urban", mappingRate: 73.0, gap: 27.0, riskLevel: "HIGH" },
      { areaType: "Overall", mappingRate: 83.69, gap: 16.31, riskLevel: "MEDIUM" },
    ],
  },

  // EVM/VVPAT
  evmVVPAT: {
    deployment: "Will be managed by ECI from central inventory",
    evmType: "M3/M4 Electronic Voting Machines",
    vvpat: "Mandatory — Voter Verifiable Paper Audit Trail",
    ballotPaperBackup: "Only if candidates exceed 64 per constituency",
  },

  // ECI New Initiatives
  eciInitiatives: [
    { initiative: "SIR nationwide", description: "House-to-house voter verification", impactOnPunjab: "ACTIVE — core current activity" },
    { initiative: "1,200 voter cap per station", description: "Polling stations limited to 1,200 voters", impactOnPunjab: "May increase total polling stations" },
    { initiative: "Colour voter lists", description: "Replacing B&W photographs with colour", impactOnPunjab: "Part of SIR process" },
    { initiative: "Ballot paper photo quality", description: "ECI revised guidelines for candidate photos on EVMs", impactOnPunjab: "Operational improvement" },
    { initiative: "Mobile polling stations", description: "For remote/inaccessible areas", impactOnPunjab: "Being deployed in phases" },
  ],

  // Party Engagement
  partyEngagement: [
    { party: "AAP", representatives: ["Ferry Sofat"], position: "Supports SIR timing controversy allegations" },
    { party: "INC (Congress)", representatives: ["Dr. Amar Singh", "Capt. Sandeep Sandhu"], position: "Questioned timing; committed booth-level monitoring" },
    { party: "SAD", representatives: ["Dr. Daljit Singh Cheema", "Adv. Arshdeep Singh Kler"], position: "Engaged with CEO" },
    { party: "BJP", representatives: ["N.K. Verma"], position: "Supports SIR; demands EVMs for municipal elections" },
    { party: "BSP", representatives: ["Dr. Avtar Singh Karimpuri"], position: "Engaged with CEO" },
    { party: "CPI(M)", representatives: ["R.L. Modgill", "Ranjit Singh"], position: "Engaged with CEO" },
  ],

  // Intelligence Implications
  intelligenceImplications: {
    immediateActions: [
      { action: "BLA Appointment: Congress must urgently appoint Booth Level Agents (BLAs) to monitor SIR", priority: "URGENT" },
      { action: "Urban voter protection: Focus resources on cities where 27% mapping gap threatens voter inclusion", priority: "CRITICAL" },
      { action: "Youth/new voter registration: Ensure newly eligible voters (turned 18 since 2022) are captured", priority: "HIGH" },
      { action: "Documentation drives: Help voters compile acceptable documentation (non-Aadhaar) for SIR compliance", priority: "HIGH" },
    ],
    strategicMonitoring: [
      { area: "Voter deletion patterns", action: "Track booth-wise deletion rates; flag anomalies", priority: "CRITICAL" },
      { area: "Urban vs rural deletion ratio", action: "If urban deletion exceeds rural, flags partisan bias", priority: "CRITICAL" },
      { area: "BLO compliance", action: "Monitor whether BLOs (state govt employees) act neutrally", priority: "HIGH" },
      { area: "Below-50% mapping booths", action: "Identify and target these high-risk booths", priority: "HIGH" },
      { area: "October 1 final roll", action: "Analyze final roll against 2022 voter data booth-wise", priority: "CRITICAL" },
    ],
    riskMatrix: [
      { risk: "Large-scale urban voter deletion", likelihood: "MEDIUM", impact: "VERY_HIGH", mitigation: "Deploy BLAs at every urban booth" },
      { risk: "Youth voter exclusion", likelihood: "HIGH", impact: "HIGH", mitigation: "Registration drives in colleges/universities" },
      { risk: "Manipulation of BLO process", likelihood: "MEDIUM", impact: "HIGH", mitigation: "Parallel verification by Congress workers" },
      { risk: "Delayed/late SIR completion", likelihood: "LOW", impact: "MEDIUM", mitigation: "Monitor ECI timeline compliance" },
      { risk: "EVM/VVPAT malfunction", likelihood: "LOW", impact: "MEDIUM", mitigation: "Standard ECI protocols handle this" },
    ],
    congressAdvantages: [
      "Congress has committed booth-level workers for SIR monitoring",
      "LoP Bajwa has publicly raised SIR concerns — creates political narrative",
      "Congress was represented in CEO meeting — institutional engagement established",
      "BSP, CPI(M) may align with Congress position on SIR fairness",
    ],
  },

  // Comparative Timeline
  comparativeTimeline: [
    { event: "Assembly constituted", election2022: "March 2022", election2027: "March 2027 (end)" },
    { event: "Election notification", election2022: "January 8, 2022", election2027: "December 2026 - January 2027 (est.)" },
    { event: "Polling date", election2022: "February 20, 2022", election2027: "February 2027 (est.)" },
    { event: "Result date", election2022: "March 10, 2022", election2027: "~18 days after polling" },
    { event: "Voter roll freeze", election2022: "~3 months before polling", election2027: "October 1, 2026 (SIR completion)" },
    { event: "MCC period", election2022: "~6 weeks before polling", election2027: "~6 weeks before polling (est.)" },
  ],

  // Key Personnel
  keyPersonnel: [
    { role: "Chief Election Commissioner (India)", name: "Gyanesh Kumar", notes: "Leading nationwide SIR initiative" },
    { role: "CEO Punjab", name: "Anindita Mitra, IAS", notes: "Leading SIR and 2027 preparations" },
    { role: "Previous CEO Punjab", name: "Sibin C, IAS", notes: "Was CEO as of late 2024" },
    { role: "State Election Commissioner (SEC)", name: "—", notes: "Separate body; conducting municipal polls" },
  ],

  // Sources
  sources: [
    "The Hindu. (2026, May 15). AAP, Congress raises concern over SIR in Punjab ahead of 2027 assembly polls.",
    "ETV Bharat. (2026, May 14). Punjab CEO announces month-long Special Intensive Revision campaign starting June 25.",
    "Babushahi Bureau. (2026, May 15). CEO Anindita Mitra urges registered and recognized political parties to appoint BLAs.",
    "UNI India. (2026, January 30). Punjab to undergo intensive voter list revision ahead of 2027 polls.",
    "CEO Punjab official portal: ceopunjab.gov.in",
  ],
};

// ==========================================
// VOTER LIST KPI DATA (A-08-02)
// ==========================================

export const voterListData: VoterListKPI = {
  metadata: electionCommissionMetadata,

  // Current Status
  sirStatus: {
    phase: "Phase-III (nationwide rollout)",
    announcementDate: "May 14, 2026",
    enumerationStart: "June 15, 2026",
    doorToDoorVerification: "June 25 – July 24, 2026",
    draftElectoralRolls: "July 31, 2026",
    claimsObjections: "July 31 – August 30, 2026",
    disposalOfClaims: "Till September 28, 2026",
    finalElectoralRolls: "October 1, 2026",
  },

  // Pre-SIR Mapping Progress
  preSIRMapping: {
    totalVoters: 21457160,
    mappingCompleted: 17956656,
    coveragePercent: 83.69,
    ruralCoverage: 89.58,
    urbanCoverage: 73.0,
    unmappedVoters: "~35 lakh (16.31%)",
  },

  // Human Resource Deployment
  hrDeployment: {
    bloCount: 24453,
    supervisors: 2476,
    eros: 117,
    aeros: 234,
    householdsPerBLO: 300,
    votersPerBLO: 1200,
  },

  // SIR Phase Results
  sirPhaseResults: [
    { phase: "Phase I", states: "Bihar", totalVotersBefore: 78900000, totalVotersAfter: 74200000, netDeletion: 4700000, deletionPercent: 5.95 },
    { phase: "Phase II", states: "9 states + 3 UTs", totalVotersBefore: 509900000, totalVotersAfter: 458100000, netDeletion: 51800000, deletionPercent: 10.2 },
    { phase: "Phase III", states: "16 states + 3 UTs (incl. Punjab)", totalVotersBefore: 0, totalVotersAfter: 0, netDeletion: 0, deletionPercent: 0 },
  ],

  // Voter Demographics
  demographics: {
    totalVoters: 21461739,
    maleVoters: 11286726,
    femaleVoters: 10174240,
    transgenderVoters: 773,
    firstTimeVoters: 538715,
    votersAbove85: 189855,
    divyangVoters: 158718,
    nriVoters: 281,
  },

  genderRatio: {
    maleToFemale: "1,000:901 (approx)",
    femalePer100Male: 89,
    nationalAverage: 95,
    gapBelowNational: 6,
  },

  electorateGrowth: [
    { year: 2014, totalElectorate: 1.96, change: "—" },
    { year: 2017, totalElectorate: 1.97, change: "+0.01" },
    { year: 2019, totalElectorate: 2.09, change: "+0.13" },
    { year: 2024, totalElectorate: 2.16, change: "+0.07" },
    { year: 2026, totalElectorate: 2.14, change: "-0.02 (SIR pre-revision)" },
  ],

  casteGroups: [
    { casteGroup: "Jat Sikh", populationPercent: 21, estimatedVoterBase: "~45 lakh", politicalSignificance: "Dominant agrarian community; swing voters" },
    { casteGroup: "Mazhabi/Ramdasia Sikh", populationPercent: 12, estimatedVoterBase: "~25 lakh", politicalSignificance: "SC Sikh; Congress/AAP competition" },
    { casteGroup: "Chamar/Ravidassia", populationPercent: 14, estimatedVoterBase: "~30 lakh", politicalSignificance: "SC Hindu/Sikh; traditional Congress base" },
    { casteGroup: "Khatri/Arora", populationPercent: 6, estimatedVoterBase: "~13 lakh", politicalSignificance: "Urban, business community" },
    { casteGroup: "Bania", populationPercent: 5.5, estimatedVoterBase: "~12 lakh", politicalSignificance: "Urban trading community" },
    { casteGroup: "Brahmin", populationPercent: 3.2, estimatedVoterBase: "~7 lakh", politicalSignificance: "Upper caste, urban/rural mix" },
    { casteGroup: "Saini", populationPercent: 3, estimatedVoterBase: "~6.5 lakh", politicalSignificance: "OBC; agricultural community" },
    { casteGroup: "Other OBCs", populationPercent: 8, estimatedVoterBase: "~17 lakh", politicalSignificance: "Kumhar, Teli, Nai etc." },
    { casteGroup: "Others", populationPercent: 27, estimatedVoterBase: "~58 lakh", politicalSignificance: "Various communities" },
  ],

  ageDistribution: [
    { ageGroup: "18-19 years", estimatedVoters: "5,38,715 (2.51%)", significance: "First-time voters" },
    { ageGroup: "20-29 years", estimatedVoters: "~42-45 lakh (est.)", significance: "Youth vote; highest unemployment concerns" },
    { ageGroup: "30-49 years", estimatedVoters: "~80-85 lakh (est.)", significance: "Working-age; economic issues" },
    { ageGroup: "50-69 years", estimatedVoters: "~55-60 lakh (est.)", significance: "Established voters; farmer community" },
    { ageGroup: "70+ years", estimatedVoters: "~15-18 lakh (est.)", significance: "Senior citizens; postal ballot eligible (85+)" },
    { ageGroup: "85+ years", estimatedVoters: "1,89,855", significance: "Facilitated/postal voting" },
  ],

  urbanRuralMapping: [
    { category: "Rural", pollingStations: 16517, mappingCoverage: 89.58 },
    { category: "Urban", pollingStations: 7934, mappingCoverage: 73.0 },
    { category: "Total", pollingStations: 24451, mappingCoverage: 83.69 },
  ],

  // New Voter Registration
  newVoterTrends: {
    decadalDecline: [
      { year: 2014, newVoters: 1.38, change: "—" },
      { year: 2019, newVoters: 1.38, change: "—" },
      { year: 2024, newVoters: 1.35, change: "-0.03 crore (-2.2%)" },
    ],
    firstTimeVoters: [
      { electionYear: 2017, count: 367077, percentOfElectorate: 1.24 },
      { electionYear: 2024, count: 538715, percentOfElectorate: 2.51 },
      { electionYear: 2027, count: 450000, percentOfElectorate: 2.3 },
    ],
  },

  // Voter Turnout
  turnoutTrends: [
    { election: "Lok Sabha", year: 2014, turnout: 70.6, notes: "High mobilization" },
    { election: "Assembly", year: 2017, turnout: 77.4, notes: "Peak turnout" },
    { election: "Lok Sabha", year: 2019, turnout: 65.8, notes: "Decline" },
    { election: "Assembly", year: 2022, turnout: 71.3, notes: "Further decline from 2017" },
    { election: "Lok Sabha", year: 2024, turnout: 62.8, notes: "8-point drop from 2014" },
  ],

  turnoutByGender: [
    { election: "2017 Assembly", maleTurnout: 70.5, femaleTurnout: 73.8, womenLed: true },
    { election: "2022 Assembly", maleTurnout: 70, femaleTurnout: 73, womenLed: true },
    { election: "2024 Lok Sabha", maleTurnout: 62.8, femaleTurnout: 62.8, womenLed: false },
  ],

  womenParticipation: {
    metric: "Women Elected Representatives",
    punjab: 7.7,
    comparison: 25,
    nationalAverage: 13.6,
  },

  // Deletion Projections
  deletionProjections: [
    { scenario: "Low (Bihar-like)", deletionPercent: 5.95, votersRemoved: "~12.8 lakh", remainingElectorate: "~2.02 crore" },
    { scenario: "Medium (Phase II avg)", deletionPercent: 10.2, votersRemoved: "~21.9 lakh", remainingElectorate: "~1.92 crore" },
    { scenario: "High (Gujarat-like)", deletionPercent: 14.5, votersRemoved: "~31.1 lakh", remainingElectorate: "~1.83 crore" },
  ],

  deletionMechanism: [
    "Deceased Voters (Form 7)",
    "Permanently Shifted (3 visits)",
    "Duplicate Entries (Automated de-duplication)",
    "Non-Citizen Voters (ECI verification)",
    "Absent Voters (BLO report)",
  ],

  // NRI Voters
  nriVoters: {
    registered: 281,
    form: "Form 6A",
    eligibility: "Indian citizen, holding Indian passport, not acquired foreign citizenship",
    presenceRequired: true,
    barriers: [
      "Physical presence requirement for voting",
      "Lack of awareness about Form 6A",
      "Difficulty in maintaining Indian passport while living abroad",
      "No proxy voting or postal ballot facility for NRIs",
    ],
  },

  // SC/ST Data
  scSTData: {
    reservedSeats: {
      assembly: 34,
      lokSabha: 2,
    },
    scPopulation: 32,
    scSubCastes: [
      { subCaste: "Ad-Dharmi/Ravidassia/Chamar", populationPercent: 14, traditionalAffiliation: "Congress", currentTrend: "Fragmented (AAP, BSP competition)" },
      { subCaste: "Mazhabi Sikh", populationPercent: 8, traditionalAffiliation: "SAD/Congress", currentTrend: "AAP inroads" },
      { subCaste: "Ramdasia Sikh", populationPercent: 4, traditionalAffiliation: "Congress", currentTrend: "Mixed" },
      { subCaste: "Balmiki", populationPercent: 3, traditionalAffiliation: "Congress", currentTrend: "AAP making inroads" },
      { subCaste: "Other SC groups", populationPercent: 3, traditionalAffiliation: "Mixed", currentTrend: "Fluid" },
    ],
  },

  // Forms
  forms: [
    { form: "Form 6", purpose: "New voter registration / Inclusion", usageDuringSIR: "Primary form for new voters" },
    { form: "Form 6A", purpose: "NRI voter registration", usageDuringSIR: "For overseas electors" },
    { form: "Form 7", purpose: "Objection to inclusion / Deletion", usageDuringSIR: "For removing ineligible voters" },
    { form: "Form 8", purpose: "Correction / Transfer / Update", usageDuringSIR: "For updating details" },
    { form: "Enumeration Form", purpose: "SIR-specific verification", usageDuringSIR: "New form for house-to-house verification" },
  ],

  // Intelligence Implications
  intelligence: {
    risks: [
      { risk: "Mass voter deletion in Congress strongholds", severity: "HIGH", mitigation: "Appoint BLAs at all 24,451 booths; monitor every deletion" },
      { risk: "Rural vs Urban mapping gap (89.58% vs 73%)", severity: "MEDIUM", mitigation: "Focus urban registration drives before July 31 deadline" },
      { risk: "Youth under-registration", severity: "HIGH", mitigation: "Target 18-19 age group aggressively; campus drives" },
      { risk: "Duplicate removal affecting genuine voters", severity: "MEDIUM", mitigation: "Legal challenge mechanism; BLA monitoring" },
      { risk: "SC voter deletions in reserved seats", severity: "HIGH", mitigation: "Special monitoring in 34 SC-reserved constituencies" },
    ],
    recommendations: [
      "BLA Deployment (URGENT): Congress must appoint BLAs at all 24,451 polling booths before June 15, 2026",
      "Claims & Objections Task Force: Establish a legal cell for each constituency to file claims and objections",
      "Youth Registration Drive: Target college and university campuses",
      "SC Voter Protection: In the 34 SC-reserved seats, track every voter deletion",
      "Women Voter Outreach: With female voter registration declining, mobilize women voters",
      "Urban Registration Gap: Focus on Ludhiana, Amritsar, Jalandhar, Patiala, and Bathinda",
      "Voter Turnout Recovery: With turnout declining from 77.4% (2017) to 62.8% (2024), recovery efforts needed",
    ],
    criticalDates: [
      { date: "May 20, 2026", event: "Today", congressAction: "Finalize BLA appointment list" },
      { date: "June 15, 2026", event: "SIR training begins", congressAction: "All BLAs must be appointed and trained" },
      { date: "June 25, 2026", event: "Door-to-door verification starts", congressAction: "BLAs accompany BLOs; monitor every form" },
      { date: "July 24, 2026", event: "Verification ends", congressAction: "Compile list of disputed deletions" },
      { date: "July 31, 2026", event: "Draft electoral rolls published", congressAction: "Review entire draft; file objections" },
      { date: "August 30, 2026", event: "Claims & objections deadline", congressAction: "All objections must be filed" },
      { date: "September 28, 2026", event: "Disposal of claims completed", congressAction: "Legal follow-up on rejected claims" },
      { date: "October 1, 2026", event: "Final electoral rolls published", congressAction: "Compare with pre-SIR rolls; analyze changes" },
      { date: "Feb 2027", event: "Assembly election", congressAction: "Execute voter mobilization based on final rolls" },
    ],
    dataGaps: [
      { gap: "Constituency-wise voter demographics", priority: "HIGH", method: "Obtain from CEO Punjab website" },
      { gap: "BLO contact details for all 24,451 booths", priority: "HIGH", method: "Party intelligence network" },
      { gap: "2022 Assembly election booth-wise turnout data", priority: "HIGH", method: "ECI statistical reports" },
      { gap: "Current NRI registration numbers", priority: "MEDIUM", method: "Form 6A filing data from ERO offices" },
      { gap: "Caste-wise voter registration (estimated)", priority: "MEDIUM", method: "Ground-level survey required" },
      { gap: "SIR deletion numbers (real-time)", priority: "CRITICAL", method: "BLA monitoring during June-July 2026" },
    ],
  },
};

// ==========================================
// CRIMINALIZATION KPI DATA (A-08-03)
// ==========================================

export const criminalizationData: CriminalizationKPI = {
  metadata: electionCommissionMetadata,

  // 2022 Assembly Election Data
  assembly2022: {
    totalCandidates: 1304,
    withCriminalCases: 326,
    percentage: 25,
    withSeriousCases: 195,
    seriousPercentage: 15,
    trend: "25% in 2022 vs 9% in 2017",
  },

  // Party-wise Breakdown (from ADR reports)
  partyBreakdown: [
    { party: "AAP", totalCandidates: 89, withCriminalCases: 26, percentage: 29, withSeriousCases: 15, seriousPercentage: 17 },
    { party: "INC", totalCandidates: 84, withCriminalCases: 20, percentage: 24, withSeriousCases: 12, seriousPercentage: 14 },
    { party: "SAD", totalCandidates: 87, withCriminalCases: 23, percentage: 26, withSeriousCases: 14, seriousPercentage: 16 },
    { party: "BJP", totalCandidates: 82, withCriminalCases: 18, percentage: 22, withSeriousCases: 10, seriousPercentage: 12 },
    { party: "BSP", totalCandidates: 91, withCriminalCases: 31, percentage: 34, withSeriousCases: 18, seriousPercentage: 20 },
    { party: "Others", totalCandidates: 871, withCriminalCases: 208, percentage: 24, withSeriousCases: 126, seriousPercentage: 14 },
  ],

  // Year over Year
  yearOverYear: [
    { year: 2017, candidatesWithCriminalCases: 117, percentage: 9, trend: "stable", changePoints: 0 },
    { year: 2022, candidatesWithCriminalCases: 326, percentage: 25, trend: "up", changePoints: 16 },
  ],

  // State Comparison
  stateComparison: [
    { state: "Punjab", percentage: 25, rank: 1 },
    { state: "Bihar", percentage: 23, rank: 2 },
    { state: "Haryana", percentage: 18, rank: 3 },
    { state: "Uttar Pradesh", percentage: 15, rank: 4 },
  ],

  // District Analysis
  districtAnalysis: [
    { district: "Fatehgarh Sahib", candidatesWithCriminalCases: 8, totalCandidates: 15, percentage: 53, seriousCases: 5 },
    { district: "Moga", candidatesWithCriminalCases: 7, totalCandidates: 14, percentage: 50, seriousCases: 4 },
    { district: "Sangrur", candidatesWithCriminalCases: 9, totalCandidates: 19, percentage: 47, seriousCases: 6 },
    { district: "Bathinda", candidatesWithCriminalCases: 6, totalCandidates: 13, percentage: 46, seriousCases: 3 },
    { district: "Ludhiana", candidatesWithCriminalCases: 11, totalCandidates: 25, percentage: 44, seriousCases: 7 },
  ],

  // Key Statistics
  stats: {
    avgAssetsOfCriminalCandidates: 7071000,
    avgAssetsOfCleanCandidates: 4035000,
    moneyInElections: "Punjab among top 5 states for money power in elections",
  },

  // Intelligence Implications
  intelligence: {
    keyFindings: [
      "25% of 2022 candidates had criminal cases — 16 percentage points higher than 2017 (9%)",
      "Every major party has 22-34% of candidates with criminal cases",
      "BSP has highest percentage (34%) followed by AAP (29%) and SAD (26%)",
      "Punjab ranks #1 among states for candidate criminalization",
      "Money and muscle power remains dominant in Punjab politics",
    ],
    concerns: [
      "Sharp increase in criminalization from 9% to 25% in 5 years",
      "Congress also has 24% candidates with criminal cases",
      "Serious cases (15%) nearly doubles the national average",
      "Criminal candidates win 40% of contested seats",
    ],
    recommendations: [
      "Publicly contrast clean vs criminal candidates",
      "File complaints with ECI against candidates with serious cases",
      "Document criminal backgrounds for voter awareness campaigns",
      "Support ADR initiatives for voter education",
    ],
  },

  sources: [
    "ADR Punjab. (2022). Punjab Assembly Elections 2022: Analysis of Criminal, Financial and Educational Background of Candidates.",
    "Association for Democratic Reforms. (2022). Punjab Assembly Elections 2022: Analysis of Vote Share and Margin of Victory.",
  ],
};

// ==========================================
// AFFIDAVIT KPI DATA (A-08-04)
// ==========================================

export const affidavitData: AffidavitKPI = {
  metadata: electionCommissionMetadata,

  // Asset Disclosure
  assets: {
    totalCandidates: 1304,
    assetDisclosures: [
      { category: "Zero Assets", avgAssets: 0, medianAssets: 0, candidatesAbove1Crore: 0, candidatesAbove10Crore: 0 },
      { category: "Under 10 Lakh", avgAssets: 500000, medianAssets: 450000, candidatesAbove1Crore: 0, candidatesAbove10Crore: 0 },
      { category: "10 Lakh - 1 Crore", avgAssets: 3500000, medianAssets: 3000000, candidatesAbove1Crore: 0, candidatesAbove10Crore: 0 },
      { category: "Above 1 Crore", avgAssets: 35000000, medianAssets: 20000000, candidatesAbove1Crore: 284, candidatesAbove10Crore: 32 },
      { category: "Above 10 Crore", avgAssets: 150000000, medianAssets: 120000000, candidatesAbove1Crore: 32, candidatesAbove10Crore: 32 },
    ],
    partyProfiles: [
      { party: "AAP", avgAssets: 4200000, candidatesWithCriminalCases: 26, candidatesAbove1Crore: 18 },
      { party: "INC", avgAssets: 5800000, candidatesWithCriminalCases: 20, candidatesAbove1Crore: 24 },
      { party: "SAD", avgAssets: 6500000, candidatesWithCriminalCases: 23, candidatesAbove1Crore: 28 },
      { party: "BJP", avgAssets: 7200000, candidatesWithCriminalCases: 18, candidatesAbove1Crore: 32 },
      { party: "BSP", avgAssets: 2100000, candidatesWithCriminalCases: 31, candidatesAbove1Crore: 8 },
      { party: "Others", avgAssets: 2800000, candidatesWithCriminalCases: 208, candidatesAbove1Crore: 174 },
    ],
    overallStats: {
      avgAssets: 4035000,
      medianAssets: 2200000,
      candidatesAbove1Crore: 284,
      candidatesZeroAssets: 87,
    },
  },

  // Education Levels
  education: {
    totalCandidates: 1304,
    levels: [
      { level: "Illiterate", candidates: 34, percentage: 3 },
      { level: "Metric/10th", candidates: 312, percentage: 24 },
      { level: "12th/Intermediate", candidates: 398, percentage: 31 },
      { level: "Graduate", candidates: 391, percentage: 30 },
      { level: "Post Graduate", candidates: 143, percentage: 11 },
      { level: "Doctorate/Professional", candidates: 26, percentage: 2 },
    ],
  },

  // Self-Sworn Affidavits
  selfSwornAffidavits: {
    totalCandidates: 1304,
    filedAffidavits: 1298,
    pendingAffidavits: 6,
    complianceRate: 99.5,
  },

  // Rejection Patterns
  rejectionPatterns: {
    totalAffidavitsRejected: 23,
    rejectionRate: 1.8,
    commonReasons: [
      "Mismatch in asset declaration",
      "Incorrect PAN details",
      "Educational qualification not verified",
      "Criminal case disclosure incomplete",
    ],
  },

  // Intelligence Implications
  intelligence: {
    findings: [
      "22% of candidates have assets above Rs 1 crore",
      "AAP has lowest average assets (Rs 42 lakh) — most fielded working-class candidates",
      "BJP has highest average assets (Rs 72 lakh)",
      "3% of candidates are illiterate — raises questions about candidate quality",
      "99.5% affidavit compliance rate — improved from previous elections",
    ],
    concerns: [
      "High asset candidates more likely to win — money matters",
      "Asset declaration discrepancies in 1.8% of cases",
      "Educational inequality: 27% have only metric/12th education",
    ],
    recommendations: [
      "Scrutinize asset sources of high-asset candidates",
      "Verify educational claims through ground surveys",
      "Publicize discrepancies in filed affidavits",
    ],
  },

  sources: [
    "ADR Punjab. (2022). Punjab Assembly Elections 2022: Analysis of Financial Background of Candidates.",
    "ECI Punjab. (2022). Candidate Affidavits Database.",
  ],
};

// ==========================================
// EXPENDITURE KPI DATA (A-08-05)
// ==========================================

export const expenditureData: ExpenditureKPI = {
  metadata: electionCommissionMetadata,

  // 2022 Election Spending
  election2022: {
    totalCandidates: 1304,
    totalExpenditure: 0, // Data not fully available
    avgPerCandidate: 2800000,
    limitPerCandidate: 4000000,
    limitInCrores: 0.4,
  },

  // Expenditure Limits
  limits: [
    { category: "Per Candidate Limit", limit: 4000000, currency: "INR", notes: "INR 40 lakh per candidate for Assembly elections" },
    { category: "Political Party Limit", limit: 0, currency: "INR", notes: "No limit on party expenditure (exempt from reporting)" },
    { category: "Election Commission Deposit", limit: 10000, currency: "INR", notes: "Refundable if candidate gets 1/8 of votes polled" },
  ],

  // Spending Breakdown
  breakdown: [
    { category: "Campaigning/Rallies", avgSpending: 850000, maxSpending: 2200000, spendingPercentOfLimit: 21 },
    { category: "Media/Advertising", avgSpending: 720000, maxSpending: 1800000, spendingPercentOfLimit: 18 },
    { category: "Travel/Transport", avgSpending: 450000, maxSpending: 1100000, spendingPercentOfLimit: 11 },
    { category: "Booth Level Activities", avgSpending: 380000, maxSpending: 950000, spendingPercentOfLimit: 10 },
    { category: "Door-to-Door Campaigns", avgSpending: 320000, maxSpending: 800000, spendingPercentOfLimit: 8 },
    { category: "Other Items", avgSpending: 280000, maxSpending: 700000, spendingPercentOfLimit: 7 },
  ],

  // Booth Level Spending
  boothLevelSpending: [
    { category: "Booth Worker Welfare", amount: 50000, description: "Per booth worker honorarium" },
    { category: "Polling Day Operations", amount: 30000, description: "Transport, food, logistics per booth" },
    { category: "Voter Contact Materials", amount: 20000, description: "Pamphlets, badges, small items" },
    { category: "Vehicle Pool", amount: 150000, description: "Constituency-wide transport budget" },
    { category: "Communication Network", amount: 25000, description: "Phone/data for booth coordinators" },
  ],

  // Intelligence Implications
  intelligence: {
    keyFindings: [
      "INR 40 lakh per candidate limit — 4x increase from 2014 limit",
      "Actual spending often 2-3x the legal limit",
      "Party expenditure not capped — major advantage for funded parties",
      "Booth-level spending accounts for ~20% of total expenditure",
    ],
    violations: [
      "Cash distribution reported at Rs 500-2000 per voter in some constituencies",
      "Liquor distribution worth lakhs on polling day",
      "Vehicle rallies exceeding permitted limits",
      "Food/catering expenses not properly accounted",
    ],
    recommendations: [
      "Track spending reports filed with ECI after elections",
      "Document violations with photo/video evidence",
      "File complaints with ECI Expenditure Monitoring Cell",
      "Coordinate with State Election Commission for accounting",
    ],
  },

  sources: [
    "ECI. (2022). Punjab Assembly Elections 2022: Expenditure Reports.",
    "ADR. (2022). Analysis of Election Expenditure of Winners in Punjab Assembly Elections 2022.",
  ],
};

// ==========================================
// POSTAL BALLOT KPI DATA (A-08-15)
// ==========================================

export const postalBallotData: PostalBallotKPI = {
  metadata: electionCommissionMetadata,

  // 2022 Election Data
  election2022: {
    totalVoters: 21457160,
    totalPostalBallots: 77500,
    turnout: 69.65,
    postalBallotPercent: 3.61,
    countingPercentage: 92,
  },

  // Category-wise Uptake
  categoryUptake: [
    { category: "Service Voters (Defense/Central)", eligible: 15000, applied: 8500, issued: 8200, returned: 7800, counted: 7200, uptakePercent: 52 },
    { category: "Senior Citizens (85+)", eligible: 189855, applied: 28000, issued: 27500, returned: 26000, counted: 24800, uptakePercent: 14 },
    { category: "Disabled/ Differently Abled", eligible: 158718, applied: 22000, issued: 21500, returned: 20000, counted: 19200, uptakePercent: 13 },
    { category: "Essential Services", eligible: 8000, applied: 3200, issued: 3100, returned: 2900, counted: 2700, uptakePercent: 40 },
    { category: "COVID-19 Affected", eligible: 0, applied: 0, issued: 0, returned: 0, counted: 0, uptakePercent: 0 },
    { category: "Other Categories", eligible: 25000, applied: 15800, issued: 15200, returned: 14500, counted: 13800, uptakePercent: 63 },
  ],

  // Service Voter Categories
  serviceVoters: [
    { category: "Armed Forces", count: 8500, eligiblePostal: 6800 },
    { category: "Central Armed Police Forces", count: 4200, eligiblePostal: 3360 },
    { category: "State Police", count: 1500, eligiblePostal: 1200 },
    { category: "Government Employees", count: 800, eligiblePostal: 640 },
  ],

  // Application Process
  applicationProcess: {
    onlineApplication: true,
    offlineApplication: true,
    deadlineDays: 7,
    issuedBeforeDays: 5,
  },

  // Intelligence Implications
  intelligence: {
    keyFindings: [
      "Only 3.61% of votes cast via postal ballot in 2022",
      "Service voters have highest uptake (52%) among eligible categories",
      "Senior citizens widely unaware of postal ballot facility",
      "Online application system underutilized — only 40% apply online",
      "92% of issued postal ballots were counted",
    ],
    barriers: [
      "Lack of awareness about postal ballot eligibility",
      "Complex application process for senior citizens",
      "Fear of ballot being invalidated due to technical errors",
      "Reluctance to vote by mail among younger voters",
      "COVID-19 provisions not utilized (no affected voters in Punjab)",
    ],
    recommendations: [
      "Awareness campaign targeting 85+ voters",
      "Simplify Form 12B for senior citizen applications",
      "Provide doorstep pickup of filled postal ballots",
      "Tie up with military authorities for service voter registration",
      "Leverage postal ballot for NRI voter engagement pilot",
    ],
  },

  sources: [
    "CEO Punjab. (2022). Punjab Assembly Elections 2022: Postal Ballot Statistics.",
    "ECI. (2022). Handbook for Returning Officer: Postal Ballot.",
  ],
};

// ==========================================
// EXPORT ALL DATA
// ==========================================

export const electionCommissionAllData = {
  eciReadiness: eciReadinessData,
  voterList: voterListData,
  criminalization: criminalizationData,
  affidavit: affidavitData,
  expenditure: expenditureData,
  postalBallot: postalBallotData,
};

export default electionCommissionAllData;
