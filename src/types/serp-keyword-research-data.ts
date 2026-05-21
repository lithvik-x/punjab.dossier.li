/**
 * SERP Keyword Research Data - Punjab 2027 Election Intelligence
 * Generated through 6-cycle enhancement pipeline
 * Source file: SERP-output-P6.md
 */

import type {
  SERPKeywordResearch,
  PunjabElectionOverview,
  CongressLeadership,
  PoliticalLeader,
  BJPStrategy,
  PartyStrategy,
  RegionProfile,
  MalwaRegion,
  MajhaRegion,
  DoabaRegion,
  CasteCommunity,
  JatSikhOBC,
  SCDalitCommunity,
  DrugCrisis,
  FarmerDistress,
  FarmerProtest,
  FarmerSuicideData,
  AAPWelfareScheme,
  FiscalCrisis,
  WomenScheme,
  StubbleBurning,
  GroundwaterContamination,
  KhalistanMovement,
  PunjabCanadaRelations,
  NRIDiaspora,
  KeywordCombination,
  PartyIssueMatrix,
  RegionIssueMatrix,
  LeaderIssueMatrix,
  CastePartyMatrix,
  CrisisMatrix,
  EventResponseMatrix,
  KeyFinding,
  RegionalBattleground,
  LeaderTracking,
  KeyDataPoint,
  PoliticalDevelopment,
  RajyaSabhaDefection,
  DGPStrategy,
  TrustVote,
  FarmerProtestMovement,
  DrugSeizureData,
  DeraProfile,
  SGPCUpdate,
  GovernanceAttackLine,
  DrugCrisisAttackLine,
  FarmerDistressAttackLine,
  CongressSWOT,
  ShortTailSearch,
  LeaderShortSearch,
  DistrictShortSearch,
  DeceasedLeader,
  SearchError,
} from './serp-keyword-research-types';

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

export const punjabElectionOverview: PunjabElectionOverview = {
  electionType: "Punjab Legislative Assembly (117 seats)",
  date: "February 2027",
  majorityThreshold: 59,
  regionalSeats: {
    malwa: 69,
    majha: 25,
    doaba: 23,
  },
  currentCM: "Bhagwant Mann (AAP)",
  keyParties: ["AAP", "Congress (INC)", "SAD", "BJP"],
  currentDebt: "₹4.17 lakh crore (projected March 2026)",
  fiscalDeficit: "4.08% of GSDP",
};

// ============================================================================
// POLITICAL ENTITIES - LEADERSHIP & STRATEGY
// ============================================================================

export const congressLeadership: CongressLeadership = {
  ppccChief: {
    name: "Amrinder Singh Raja Warring",
    role: "PPCC President",
    status: "active",
    details: "Born Nov 29, 1977; MP Ludhiana; former Cabinet Minister",
    party: "Congress",
  },
  clpLeader: {
    name: "Partap Singh Bajwa",
    role: "Leader of Opposition (CLP Leader)",
    status: "active",
    details: "MLA Qadian; Leader of Opposition since March 2022 (4th term)",
    party: "Congress",
  },
  potentialCmFaces: [
    {
      name: "Charanjit Singh Channi",
      role: "Former CM, SC Leader",
      status: "active",
      details: "First Dalit CM of Punjab; served 2021-2022",
      party: "Congress",
    },
    {
      name: "Navjot Singh Sidhu",
      role: "Former PPCC Chief",
      status: "inactive",
      details: "Wife launched new party (Bharatiya Rashtrawadi Party, Apr 2026); currently NOT affiliated with any party",
      party: "Congress",
    },
  ],
  centralObservers: [
    {
      name: "Bhupesh Baghel",
      role: "Congress In-charge Punjab",
      status: "active",
      details: "Note: Bhupesh Baghel is CM of Chhattisgarh, NOT Punjab in-charge - search error flagged",
    },
  ],
};

export const bjpStrategy: BJPStrategy = {
  soloAnnounced: true,
  announcementDate: "March 14, 2026",
  keyFigures: [
    {
      name: "Amit Shah",
      role: "Union Home Minister",
      status: "active",
      details: "Announced BJP solo March 2026; anti-conversion law promise; drug trade elimination in 2 years",
    },
    {
      name: "Sunil Jakhar",
      role: "BJP Punjab President",
      status: "active",
      details: "Leading BJP's 117-seat solo campaign",
    },
    {
      name: "Ravneet Singh Bittu",
      role: "Union Minister",
      status: "active",
      details: "Railways, Food Processing; Lok Sabha MP from Majha region",
    },
  ],
  strategy: "Going solo after 30 years of SAD alliance; targeting urban Hindu, trading communities, Dalits",
  targetDemographics: ["Urban Hindu", "Trading communities", "Dalits", "Non-Jat Sikh", "OBC"],
};

export const sadStrategy: PartyStrategy = {
  party: "SAD",
  strategy: "Reworking poll strategy with focus on urban seats after BJP's 'go solo' call",
  keyStatements: [
    "SAD will win over 100 seats in 2027",
    "Every party has right to decide alliances",
  ],
  targetVotes: ["Jat Sikh", "Urban voters", "Panthic voters"],
};

// ============================================================================
// GEOGRAPHY & REGIONS
// ============================================================================

export const malwaRegion: MalwaRegion = {
  name: "Malwa",
  seats: 69,
  percentage: 59,
  districts: ["Bathinda", "Mansa", "Sangrur", "Ferozepur", "Faridkot", "Moga", "Ludhiana"],
  keyFight: "AAP vs Congress vs SAD",
  primaryIssues: ["Drugs", "Jat Sikh identity", "Farmer distress", "Groundwater contamination"],
  dominantCaste: "Jat Sikh",
  heartOfFarmerAgitation: true,
  drugCrisisImpact: "severe",
  jatSikhOBCCommunities: ["Jat Sikh", "OBC communities"],
};

export const majhaRegion: MajhaRegion = {
  name: "Majha",
  seats: 25,
  percentage: 21,
  districts: ["Pathankot", "Gurdaspur", "Hoshiarpur", "Nawanshahr", "Jalandhar", "Kapurthala"],
  keyFight: "Congress vs AAP",
  primaryIssues: ["Border security", "Panthic politics", "Drug trafficking"],
  dominantCaste: "Jat Sikh, Hindu",
  borderAreas: ["Pathankot", "Gurdaspur", "Tarn Taran"],
  pathankotSeats: 3,
  gurdaspurSeats: 5,
  hoshiarpurSeats: 4,
};

export const doabaRegion: DoabaRegion = {
  name: "Doaba",
  seats: 23,
  percentage: 20,
  districts: ["Jalandhar", "Kapurthala", "Hoshiarpur", "Nawanshahr", "Phagwara", "SBS Nagar"],
  keyFight: "Congress vs AAP",
  primaryIssues: ["SC voters", "NRI diaspora", "Dera politics"],
  dominantCaste: "SC (40%)",
  scDalitPopulation: "40%",
  channiHomeRegion: true,
  drugCrisisImpact: "severe",
};

// ============================================================================
// CASTE & COMMUNITY
// ============================================================================

export const jatSikhOBC: JatSikhOBC = {
  status: "Politically most influential community",
  obcDemand: true,
  shrinkingHoldings: true,
  risingDebt: true,
  fallingFarmIncomes: true,
};

export const scDalitCommunity: SCDalitCommunity = {
  population: "31.9% of Punjab's overall population",
  voteBankSignificance: "BSP's potential kingmaker role; SC make up 32% of population",
  bspOutreach: true,
  channiRepresentation: "First Dalit CM of Punjab",
};

// ============================================================================
// DRUGS & FARMER DISTRESS
// ============================================================================

export const drugCrisis: DrugCrisis = {
  commonlyAbused: ["Raw opium", "Poppy husk", "Heroin (chitta)", "Synthetic drugs", "Pharma opioids"],
  heroinSpend: "₹1,400/day",
  opioidSpend: "₹340/day",
  statistics: {
    heroinAbusers: "20.8%",
    nonAlcoholTobacco: "34.8% non-alcohol/tobacco substance abuse",
    injectingDrugUsers: "28% Injecting Drug Users (IDUs)",
  },
  droneSmuggling: {
    seizures2024: 179,
    heroinSeized2024: "88 kg cocaine seized",
    increasePercentage: "5900% increase (3 cases in 2021 to 179 in 2024)",
  },
};

export const farmerDistress: FarmerDistress = {
  mspDemands: true,
  activeProtests: [
    {
      name: "BKU Ugrahan",
      demand: "MSP guarantee, input cost reduction",
      status: "active",
    },
    {
      name: "SKM (Samyukta Kisan Morcha)",
      demand: "MSP guarantee",
      status: "ongoing",
    },
    {
      name: "Bharatiya Kisan Mazdoor Union",
      demand: "Electricity Amendment Bill withdrawal",
      status: "active",
    },
  ],
  keyLeaders: [
    "Jagjit Singh Dallewall (SKM)",
    "Joginder Singh Ugrahan (BKU Ugrahan)",
    "Dilbag Singh (BKU)",
  ],
  suicideData: {
    total: 377,
    period: "2025-26 (up to mid-November)",
    debtRidden: "88% of 9,000+ suicides over 18 years",
    age1935: "75% of victims aged 19-35 years",
    malwaConcentration: "98% concentrated in Malwa region (Bathinda, Mansa, Sangrur districts)",
  },
};

// ============================================================================
// GOVERNANCE & SCHEMES
// ============================================================================

export const aapWelfareSchemes: AAPWelfareScheme[] = [
  {
    name: "Mukh Mantri Sehat Yojana",
    promise: "Free cashless treatment up to Rs 10 lakh for Punjab residents",
    implementationStatus: "delayed",
    details: "Row erupted as scheme non-operational across state; CAG audit findings critical",
  },
  {
    name: "Mukh Mantri Mawan Dhian Satikar Yojana",
    promise: "Rs 1,000/month for general women over 18; Rs 1,500 for SC women",
    implementationStatus: "implemented",
  },
];

export const fiscalCrisis: FiscalCrisis = {
  totalDebt: "₹4.17 lakh crore (projected March 2026)",
  debtIncrease: "₹1.33 lakh crore increase in 4 years under AAP",
  fiscalDeficit: "4.08% of GSDP",
  revenueDeficit: "2.06% of GSDP",
  debtToGSDP: "Of concern",
};

export const womenScheme: WomenScheme = {
  name: "Mukh Mantri Mawan Dheeyan Satkar Yojana",
  amountGeneral: "Rs 1,000/month",
  amountSC: "Rs 1,500/month",
  announced: "Budget 2026 (March 7, 2026)",
  implementationStarted: "July 2026",
};

// ============================================================================
// ENVIRONMENTAL ISSUES
// ============================================================================

export const stubbleBurning: StubbleBurning = {
  incidents2025: "Over 1,600 farm fire cases this season",
  reduction: "90% reduction claimed by Centre (December 2025) - but mixed ground reports",
  centreResponse: "CAQM issued statutory direction to eliminate wheat stubble burning in 2026",
};

export const groundwaterContamination: GroundwaterContamination = {
  affectedDistricts: ["Malwa region"],
  contaminationPercentage: "53% Malwa groundwater samples showed contamination",
  primaryContaminants: ["Uranium", "Arsenic", "Lead", "Selenium", "Mercury"],
  malwaSeverity: "critical",
  healthImpact: "High cancer rate attributed to toxic elements; 62.5% water samples exceed safe uranium limits",
};

// ============================================================================
// MEDIA & COMMUNICATION
// ============================================================================

export const mediaLandscape = {
  channels: [
    { name: "DD Punjabi", type: "government" as const },
    { name: "PTC Punjabi", type: "entertainment" as const },
    { name: "Zee Punjabi", type: "entertainment" as const },
    { name: "Pitaara TV", type: "movies" as const },
    { name: "ABP Sanjha", type: "news" as const },
    { name: "Chaupal TV", type: "news" as const },
  ],
  majorChannels: [
    "News18 Punjab",
    "TV24 News Punjab",
    "Khabar Insight",
    "Chardikla Time TV",
  ],
};

// ============================================================================
// MISCELLANEOUS ISSUES
// ============================================================================

export const khalistanMovement: KhalistanMovement = {
  currentStatus: "Pro-Khalistan protests spread globally; ISI-backed Khalistani shift to infrastructure sabotage",
  securityThreat: "high",
  referendumActivities: [
    "Washington DC (August 2025): 16,000+ Sikhs participated",
    "Seattle (March 2026): Voting at City Hall Park",
    "Ottawa (November 2025): Voting",
  ],
  keyFigures: [
    "Amritpal Singh (Waris Punjab De - in jail NSA)",
    "Simranjit Singh Mann (SAD(A) President, MP Sangrur)",
  ],
};

export const punjabCanadaRelations: PunjabCanadaRelations = {
  nijjarKilling: true,
  TrudeauAccusation: true,
  diplomaticStatus: "Ties froze after Trudeau allegations; two years lost",
};

export const nriDiaspora: NRIDiaspora = {
  majorDestinations: ["Canada", "UK", "Australia", "USA"],
  votingRightsStatus: "393 NRI voters in Punjab, but no vote in past 2 polls",
  influence: "Strong NRI community provides financial support to parties; Doaba diaspora particularly influential",
  remittanceImpact: "Punjab among highest per capita recipients of remittances",
};

// ============================================================================
// KEY FINDINGS SYNTHESIS
// ============================================================================

export const keyFindings: KeyFinding[] = [
  {
    id: 1,
    title: "No Clear Winner",
    description: "No party predicted to win 59 seats alone; fractured mandate likely",
    severity: "high",
  },
  {
    id: 2,
    title: "INDIA Bloc Formidable",
    description: "Congress+AAP+SAD combined could reach 70-80 seats",
    severity: "high",
  },
  {
    id: 3,
    title: "BJP Solo Strategy",
    description: "Amit Shah announced March 2026; targeting urban/Dalit/business votes independently",
    severity: "critical",
  },
  {
    id: 4,
    title: "Caste Chess",
    description: "Multiple calculations (Jat Sikh, SC, OBC, urban) creating complex vote arithmetic",
    severity: "high",
  },
  {
    id: 5,
    title: "Drug Crisis Critical",
    description: "Top issue despite government claims; 272 drone seizures, 676 smugglers arrested",
    severity: "critical",
  },
  {
    id: 6,
    title: "Farmer MSP Agitation",
    description: "May trigger protests before election; unions divided but active",
    severity: "high",
  },
  {
    id: 7,
    title: "Fiscal Crisis",
    description: "₹4.17 lakh crore debt, 4.08% fiscal deficit",
    severity: "critical",
  },
  {
    id: 8,
    title: "Sidhu Factor",
    description: "Wife Navjot Kaur's expulsion and new party launch signals internal Congress turbulence",
    severity: "high",
  },
  {
    id: 9,
    title: "Channi's Base",
    description: "SC voters in Doaba could be decisive; caste tensions within Congress",
    severity: "high",
  },
  {
    id: 10,
    title: "Mann's Record",
    description: "AAP governance claims vs ground reality (Mukh Mantri Sehat Yojana non-operational)",
    severity: "high",
  },
];

export const regionalBattlegrounds: RegionalBattleground[] = [
  {
    region: "Malwa",
    seats: 69,
    percentage: "59%",
    keyFight: "AAP vs Congress vs SAD",
    mainIssues: ["Drugs", "Jat Sikh", "Farmer"],
  },
  {
    region: "Doaba",
    seats: 23,
    percentage: "20%",
    keyFight: "Congress vs AAP",
    mainIssues: ["SC voters", "Channi factor"],
  },
  {
    region: "Majha",
    seats: 25,
    percentage: "21%",
    keyFight: "Congress vs AAP",
    mainIssues: ["Border", "Urban", "Drugs"],
  },
];

export const leaderTracking: LeaderTracking[] = [
  {
    leader: { name: "Bhagwant Mann", role: "CM", status: "active" },
    party: "AAP",
    role: "CM, declared CM face",
    currentStatus: "Twin blasts blamed on BJP",
  },
  {
    leader: { name: "Raja Warring", role: "PPCC President", status: "active" },
    party: "Congress",
    role: "PPCC President",
    currentStatus: "Wife's controversial attacks",
  },
  {
    leader: { name: "Charanjit Singh Channi", role: "Ex-CM", status: "active" },
    party: "Congress",
    role: "Ex-CM, SC leader",
    currentStatus: "Dalit representation demand",
  },
  {
    leader: { name: "Navjot Singh Sidhu", role: "Aggressive critic", status: "inactive" },
    party: "Congress",
    role: "Aggressive critic",
    currentStatus: "Wife launched new party",
  },
  {
    leader: { name: "Partap Singh Bajwa", role: "CLP Leader", status: "active" },
    party: "Congress",
    role: "CLP Leader",
    currentStatus: "HC case, unity efforts",
  },
  {
    leader: { name: "Sukhbir Singh Badal", role: "SAD President", status: "active" },
    party: "SAD",
    role: "Party President",
    currentStatus: "Claims 100 seats",
  },
  {
    leader: { name: "Amit Shah", role: "Union HM", status: "active" },
    party: "BJP",
    role: "Union Home Minister",
    currentStatus: "Announced BJP solo March 2026",
  },
];

export const keyDataPoints: KeyDataPoint[] = [
  { metric: "Debt", value: "₹4.17 lakh crore (projected March 2026)" },
  { metric: "Fiscal Deficit", value: "4.08% of GSDP" },
  { metric: "Youth Unemployment", value: "22.5% rural Punjab" },
  { metric: "Drug users", value: "230,000+ opioid-dependent" },
  { metric: "Heroin daily spend", value: "₹1,400/addict/day" },
  { metric: "Groundwater contamination", value: "53% Malwa samples affected" },
  { metric: "Drone smuggling", value: "272 drones seized from Pakistan" },
  { metric: "Heroin seized (March 2026)", value: "24.5 kg" },
];

// ============================================================================
// KEYWORD COMBINATIONS - PARTY × ISSUE MATRIX
// ============================================================================

export const partyIssueMatrix: PartyIssueMatrix[] = [
  // Congress × Drug Crisis
  { id: 46, query: "Congress Punjab drug crisis 2025 2026", category: "Congress × Drug Crisis", party: "Congress", issue: "Drug Crisis" },
  { id: 47, query: "Congress Bhagwant Mann drug policy criticism Punjab", category: "Congress × Drug Crisis", party: "Congress", issue: "Drug Crisis" },
  { id: 48, query: "Congress AAP drug blame Punjab election 2027", category: "Congress × Drug Crisis", party: "Congress", issue: "Drug Crisis" },
  { id: 49, query: "Partap Singh Bajwa drug issue Punjab", category: "Congress × Drug Crisis", party: "Congress", issue: "Drug Crisis" },
  { id: 50, query: "Raja Warring drug menace Punjab Congress", category: "Congress × Drug Crisis", party: "Congress", issue: "Drug Crisis" },
  // Congress × Farmer Distress
  { id: 51, query: "Congress Punjab farmer distress MSP 2025 2026", category: "Congress × Farmer Distress", party: "Congress", issue: "Farmer Distress" },
  { id: 52, query: "Congress Bhagwant Mann farmer protest failure Punjab", category: "Congress × Farmer Distress", party: "Congress", issue: "Farmer Distress" },
  { id: 53, query: "Partap Singh Bajwa farmer suicide Punjab", category: "Congress × Farmer Distress", party: "Congress", issue: "Farmer Distress" },
  { id: 54, query: "Punjab Congress BKU protest support 2025", category: "Congress × Farmer Distress", party: "Congress", issue: "Farmer Distress" },
  { id: 55, query: "Congress Punjab agrarian crisis report card 2027", category: "Congress × Farmer Distress", party: "Congress", issue: "Farmer Distress" },
  // AAP × Drug Crisis
  { id: 66, query: "AAP Punjab drug crisis governance record 2025 2026", category: "AAP × Drug Crisis", party: "AAP", issue: "Drug Crisis" },
  { id: 67, query: "Bhagwant Mann drug enforcement success failure Punjab", category: "AAP × Drug Crisis", party: "AAP", issue: "Drug Crisis" },
  { id: 68, query: "AAP Punjab Yudh Nashian Virudh campaign results", category: "AAP × Drug Crisis", party: "AAP", issue: "Drug Crisis" },
  { id: 69, query: "Punjab AAP anti-drug campaign Narishakti impact", category: "AAP × Drug Crisis", party: "AAP", issue: "Drug Crisis" },
  { id: 70, query: "Kejriwal Punjab drug policy defense 2027 election", category: "AAP × Drug Crisis", party: "AAP", issue: "Drug Crisis" },
];

// ============================================================================
// INTELLIGENCE GATHERED - PHASE 3
// ============================================================================

export const politicalDevelopments: PoliticalDevelopment[] = [
  {
    date: "April 24, 2026",
    title: "AAP Rajya Sabha MP Defections to BJP",
    description: "7 of AAP's 10 Rajya Sabha MPs defected to BJP, led by Raghav Chadha. Largest parliamentary upheaval in AAP's history.",
    impact: "AAP's national parliamentary presence severely weakened; BJP gains organizational infrastructure",
    severity: "critical",
  },
];

export const rajyaSabhaDefections: RajyaSabhaDefection[] = [
  {
    date: "April 24, 2026",
    title: "AAP Rajya Sabha MP Defections to BJP",
    description: "7 of AAP's 10 Rajya Sabha MPs merged with BJP (not individual defections — structured merger under anti-defection law)",
    impact: "Over two-thirds of AAP's Rajya Sabha strength departed simultaneously",
    severity: "critical",
    mpCount: 7,
    totalMPs: 10,
    leader: "Raghav Chadha",
    impactOn2027: [
      "AAP's national parliamentary presence severely weakened",
      "BJP gains organizational infrastructure ahead of Punjab 2027",
      "SAD condemned defections as 'systemic failure of trust'",
    ],
  },
];

export const trustVotes: TrustVote[] = [
  {
    date: "May 1, 2026",
    result: "passed",
  },
];

export const drugSeizureData: DrugSeizureData[] = [
  { year: 2025, dronesSeized: 272, heroinKg: 367, totalContraband: "414 kg total" },
  { year: 2024, dronesSeized: 179, heroinKg: 283 },
  { year: 2026, dronesSeized: 47, heroinKg: 331, totalContraband: "Just 3 months" },
];

// ============================================================================
// DERAS
// ============================================================================

export const deraPolitics: DeraProfile[] = [
  {
    name: "Dera Sacha Sauda",
    location: "Sirsa, Haryana",
    regionalReach: "Malwa, cross-regional",
    politicalAlignment: "Historically sympathetic to BJP",
    influence: "Influences Malwa's voter matrix significantly",
  },
  {
    name: "Radha Soami Satsang Beas",
    location: "Doaba",
    regionalReach: "Doaba, NRI connections",
    politicalAlignment: "Business community, apolitical",
    influence: "Major NRI connection — Doaba diaspora heavily involved",
  },
  {
    name: "Ravidassia Dera",
    location: "Doaba",
    regionalReach: "Doaba, Hindu-Sikh Dalit",
    politicalAlignment: "Dalit vote bank",
    influence: "39% SC population in Jalandhar region; key Dalit vote consolidation",
  },
  {
    name: "Dera Sant Nirankari",
    location: "Urban centers",
    regionalReach: "All regions",
    politicalAlignment: "Secular, cross-caste",
    influence: "Cross-caste secular appeal",
  },
];

// ============================================================================
// SGPC
// ============================================================================

export const sgpcUpdate: SGPCUpdate = {
  president: "Harjinder Singh Dhami (5th term)",
  electionDate: "October 13, 2025",
  significance: "SGPC manages gurdwaras and wields significant Sikh religious-political influence",
};

// ============================================================================
// OPPOSITION ATTACK LINES
// ============================================================================

export const governanceAttackLines: GovernanceAttackLine[] = [
  { issue: "MMSY Zero Patients", attackLine: "Rs 778 crore spent, zero patients treated" },
  { issue: "Women Promise Delayed", attackLine: "4 years late, Rs 48,000 owed to each woman" },
  { issue: "Health Infrastructure", attackLine: "50%+ doctor vacancies, CAG exposes system collapse" },
  { issue: "Education Crisis", attackLine: "88% DIET vacancy, 60% Master Cadre empty" },
  { issue: "Fiscal Mismanagement", attackLine: "₹4.4 lakh crore debt, revenue deficit" },
];

export const drugCrisisAttackLines: DrugCrisisAttackLine[] = [
  { statistic: "367 kg heroin intercepted", attackLine: "But AAP claims success?" },
  { statistic: "2.5% population addicted", attackLine: "697,000 children affected" },
  { statistic: "251 Pakistan drones crossed", attackLine: "Security compromised" },
];

export const farmerDistressAttackLines: FarmerDistressAttackLine[] = [
  { data: "377 farmer deaths in 11 months", attackLine: "Despite claims" },
  { data: "MSP Promise", attackLine: "Procurement delays, farmers protesting on roads" },
  { data: "Electricity Bill", attackLine: "Farmers facing prosecution for stubble burning" },
];

// ============================================================================
// SWOT ANALYSIS - CONGRESS
// ============================================================================

export const congressSWOT: CongressSWOT = {
  strengths: [
    "Lok Sabha 2024 momentum (7 seats)",
    "SAD collapse provides space",
    "Dalit vote consolidation possible",
    "Farmer distress anger can be leveraged",
  ],
  weaknesses: [
    "Internal leadership disputes (Sidhu vs Warring)",
    "No clear CM face",
    "Organizational weakness in Malwa",
    "NRI/diaspora perception issues",
  ],
  opportunities: [
    "AAP defections create anti-incumbency",
    "SAD existential crisis",
    "BJP going solo (splitting opposition)",
    "Economic distress visible",
  ],
  threats: [
    "AAP's welfare schemes (women's stipend)",
    "SAD revival possible",
    "Caste coalition complexity",
    "2027 boundaries/schedule uncertainties",
  ],
  leadershipDisputes: ["Sidhu vs Warring"],
  noClearCMFace: true,
};

// ============================================================================
// SHORT-TAIL SEARCHES
// ============================================================================

export const leaderShortSearches: LeaderShortSearch[] = [
  {
    keyword: "Channi",
    fullName: "Charanjit Singh Channi",
    status: "active",
    mpConstituency: "Jalandhar (Lok Sabha)",
    position: "CWC Member, Former CM Punjab (2021-2022)",
    keyIdentity: "First Dalit CM of Punjab",
  },
  {
    keyword: "Raja Warring",
    fullName: "Amrinder Singh Raja Warring",
    status: "active",
    mpConstituency: "Ludhiana",
    position: "PPCC President (since Sep 2022)",
    keyIdentity: "Former Cabinet Minister",
  },
  {
    keyword: "Bhagwant Mann",
    fullName: "Bhagwant Mann",
    status: "active",
    mpConstituency: "MLA Dhuri",
    position: "CM Punjab (incumbent)",
    keyIdentity: "AAP CM face for 2027",
  },
  {
    keyword: "Sukhbir Badal",
    fullName: "Sukhbir Singh Badal",
    status: "active",
    position: "SAD President",
    keyIdentity: "Will contest from Gidderbaha (not Jalalabad) in 2027",
  },
  {
    keyword: "Navjot Sidhu",
    fullName: "Navjot Singh Sidhu",
    status: "inactive",
    position: "Former PPCC Chief",
    keyIdentity: "Wife launched new party (Bharatiya Rashtrawadi Party, Apr 2026)",
  },
  {
    keyword: "Harsimrat",
    fullName: "Harsimrat Kaur Badal",
    status: "active",
    position: "SAD MP Bathinda",
    keyIdentity: "Former Union Minister",
  },
  {
    keyword: "Partap Bajwa",
    fullName: "Partap Singh Bajwa",
    status: "active",
    mpConstituency: "MLA Qadian",
    position: "Leader of Opposition (LoP), CLP Leader",
    keyIdentity: "Key Congress contender",
  },
  {
    keyword: "Sunil Jakhar",
    fullName: "Sunil Jakhar",
    status: "active",
    position: "BJP Punjab President",
    keyIdentity: "Leading BJP's 117-seat solo campaign",
  },
  {
    keyword: "Ravneet Bittu",
    fullName: "Ravneet Singh Bittu",
    status: "active",
    position: "Union Minister (Railways, Food Processing)",
    keyIdentity: "Lok Sabha MP from Majha region",
  },
  {
    keyword: "Amritpal",
    fullName: "Amritpal Singh",
    status: "inactive",
    position: "Waris Punjab De leader",
    keyIdentity: "Currently in jail (NSA); Pro-Khalistan activist",
  },
  {
    keyword: "Simranjit Mann",
    fullName: "Simranjit Singh Mann",
    status: "active",
    mpConstituency: "MP Sangrur",
    position: "SAD(A) President",
    keyIdentity: "Panthic politics figure",
  },
  {
    keyword: "Parkash Badal",
    fullName: "Parkash Singh Badal",
    status: "deceased",
    notes: "NOT a 2027 candidate - remove from active tracking",
  },
  {
    keyword: "Sukhdev Dhindsa",
    fullName: "Sukhdev Singh Dhindsa",
    status: "deceased",
    notes: "Former SAD(S) leader - remove from active 2027 candidate tracking",
  },
];

export const districtShortSearches: DistrictShortSearch[] = [
  {
    name: "Ludhiana",
    keyCharacteristics: ["Major urban center", "Industrial hub", "Ludhiana West by-election Jun 2025: AAP won"],
    notableUpdate: "AAP won Ludhiana West bypoll - ruling party retains urban seat",
  },
  {
    name: "Jalandhar",
    keyCharacteristics: ["Doaba region", "Jalandhar Cantt (border seat)", "High Dalit population"],
    notableUpdate: "Congress LoP (Partap Singh Bajwa) from Qadian nearby",
  },
  {
    name: "Amritsar",
    keyCharacteristics: ["Majha region", "Border constituency", "Religious significance"],
    notableUpdate: "Tarn Taran bypoll (Nov 2025) impact",
  },
  {
    name: "Bathinda",
    keyCharacteristics: ["Malwa region", "SAD stronghold historically", "Harsimrat Kaur Badal MP"],
    notableUpdate: "Sukhbir shifting to Gidderbaha",
  },
  {
    name: "Patiala",
    keyCharacteristics: ["Patiala region", "Royal family legacy", "CSS vote consolidation"],
  },
  {
    name: "Sangrur",
    keyCharacteristics: ["Malwa region", "Simranjit Singh Mann (MP)", "AAP CM Bhagwant Mann's seat (Dhuri nearby)"],
  },
];

// ============================================================================
// CRITICAL CORRECTIONS
// ============================================================================

export const deceasedLeaders: DeceasedLeader[] = [
  {
    name: "Parkash Singh Badal",
    removeFromTracking: true,
    notes: "SAD patriarch legacy remains but candidate is deceased",
  },
  {
    name: "Sukhdev Singh Dhindsa",
    removeFromTracking: true,
    notes: "Former SAD(S) leader, constituency: Dhuri",
  },
];

export const searchErrors: SearchError[] = [
  {
    searchQuery: "Bhupesh Baghel",
    actualResult: "Bhupesh Baghel is Chief Minister of Chhattisgarh",
    correction: "NOT Punjab AICC in-charge - search returned Chhattisgarh results",
  },
];

// ============================================================================
// COMPLETE SERP DATA
// ============================================================================

export const serpKeywordResearchData: SERPKeywordResearch = {
  // Header
  documentGenerated: "May 2026",
  researchDate: "May 20-21, 2026",
  searchQueriesExecuted: 50,
  categoriesCovered: 8,
  keywordCombinationsGenerated: 300,

  // Executive
  electionOverview: punjabElectionOverview,

  // Parties
  congressLeadership,
  bjpStrategy,
  sadStrategy,

  // Regions
  malwaRegion,
  majhaRegion,
  doabaRegion,

  // Communities
  jatSikhOBC,
  scDalitCommunity,

  // Crisis
  drugCrisis,
  farmerDistress,

  // Governance
  aapSchemes: aapWelfareSchemes,
  fiscalCrisis,
  womenScheme,

  // Environment
  stubbleBurning,
  groundwaterContamination,

  // Media
  mediaLandscape,

  // External
  khalistanMovement,
  punjabCanadaRelations,
  nriDiaspora,

  // Intelligence
  keyFindings,
  regionalBattlegrounds,
  leaderTracking,
  keyDataPoints,

  // Keyword Matrices
  partyIssueMatrix,
  regionIssueMatrix: [],
  leaderIssueMatrix: [],
  castePartyMatrix: [],
  crisisMatrix: [],
  eventResponseMatrix: [],

  // Phase 3 Intelligence
  politicalDevelopments,
  rajyaSabhaDefections,
  dgpStrategies: [],
  trustVotes,
  farmerProtests: [],
  drugSeizureData,

  // Deras
  deraPolitics,

  // SGPC
  sgpcUpdate,

  // Attack Lines
  governanceAttackLines,
  drugCrisisAttackLines,
  farmerDistressAttackLines,

  // SWOT
  congressSWOT,

  // Short-tail searches
  leaderShortSearches,
  districtShortSearches,

  // Corrections
  deceasedLeaders,
  searchErrors,
};
