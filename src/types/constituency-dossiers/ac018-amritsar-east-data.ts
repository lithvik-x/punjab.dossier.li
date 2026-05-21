/**
 * AC018 - Amritsar East Assembly Constituency
 * Data file - comprehensive constituency dossier
 * Cycles: 1 (Initial creation), 3 (Additional improvement pass)
 *
 * Data sourced from:
 * - OneIndia
 * - IndiaVotes
 * - India Today
 * - ADR India PDF
 * - Indiastat Factbook
 * - Wikipedia
 * - ResultUniversity.com
 * - minimax-web-search
 */

import type {
  AC018AmritsarEast,
  ConstituencyIdentity,
  GeographicProfile,
  VoterDemographicsEstimate,
  KeyStatistics2022,
  ElectionResult,
  ElectionResultsData,
  CasteComposition,
  DetailedCasteBreakdown,
  ReligionBreakdown,
  KeyVotingDynamics,
  PublicSentiment,
  LocalIssue,
  LocalIssuesData,
  GovernanceGap,
  PoliticalInfluencer,
  SocialReligiousInfluencer,
  InfluencersPowerStructure,
  MediaLandscape,
  PhysicalMapping,
  SwotEntry,
  SwotAnalysis,
  StrategicDirective,
  StrategicBlueprint,
  CourseChangingFactor,
  CourseChangingFactors,
  IntelligenceGap,
  IntelligenceGapsData,
  Source,
  SourceData,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  AttackLine,
  AttackLinesData,
  PunjabParty,
} from "./ac018-amritsar-east-types";

// ============ CONSTITUENCY IDENTITY ============

const identity: ConstituencyIdentity = {
  acNumber: 18,
  name: "Amritsar East",
  district: "Amritsar",
  region: "Majha",
  type: "General",
  date: "20 May 2026",
};

// ============ GEOGRAPHIC PROFILE ============

const geographicProfile: GeographicProfile = {
  description:
    "Amritsar East is a General category Punjab Legislative Assembly constituency located in eastern part of Amritsar city and peri-urban areas.",
  location: "Eastern part of Amritsar city and peri-urban areas",
  partOfLokSabha: "Amritsar Lok Sabha constituency",
  urbanRuralMix: "Mixed",
  voterDemographics: {
    urbanVotersPercent: 55,
    ruralPeriUrbanVotersPercent: 45,
    scVotersPercent: 23,
    sikhVotersPercent: 55,
    hinduVotersPercent: 38,
  } as VoterDemographicsEstimate,
};

// ============ KEY STATISTICS 2022 ============

const keyStatistics2022: KeyStatistics2022 = {
  winner: "Jeevanjot Kaur",
  party: "AAP" as PunjabParty,
  runnerUp: null,
  runnerUpParty: null,
  winnerVoteCount: null,
  margin: 6750,
  totalElectors: 145000,
  voterTurnout: 70,
};

// ============ ELECTION RESULTS ============

const electionResults: ElectionResultsData = {
  2022: {
    year: 2022,
    winner: "Jeevanjot Kaur",
    party: "AAP",
    runnerUp: "",
    runnerUpParty: "INC",
    margin: 6750,
    winnerVoteCount: null,
    isVerified: false,
  } as ElectionResult,
  2017: {
    year: 2017,
    winner: "Navjot Singh Sidhu",
    party: "INC",
    runnerUp: "",
    runnerUpParty: "",
    margin: null,
    winnerVoteCount: null,
    isVerified: false,
  } as ElectionResult,
  2012: {
    year: 2012,
    winner: "",
    party: "OTH",
    runnerUp: "",
    runnerUpParty: "",
    margin: null,
    winnerVoteCount: null,
    isVerified: false,
  } as ElectionResult,
};

// ============ CASTE COMPOSITION ============

const casteComposition: CasteComposition = {
  upperCaste: 28,
  jatSikh: 24,
  sc: 23,
  obc: 12,
  minority: 8,
  other: 5,
};

// ============ DETAILED CASTE BREAKDOWN ============

const detailedCasteBreakdown: DetailedCasteBreakdown = {
  scheduledCastes: 23,
  jatSikh: "Dominant rural caste in peri-urban villages",
  hinduKhatriArora: "Urban commercial class in city areas",
  brahmin: "Urban professional class",
  obc: "Present in urban and semi-urban population",
};

// ============ RELIGION BREAKDOWN ============

const religionBreakdown: ReligionBreakdown = {
  sikh: 57.7,
  hindu: 0,
  other: 0,
  urbanArea: {
    sikh: 48,
    hindu: 49,
  },
  periUrbanVillages: "Predominantly Sikh",
};

// ============ KEY VOTING DYNAMICS ============

const keyVotingDynamics: KeyVotingDynamics = {
  voterProfile: "Mixed urban-rural",
  urbanVotersBehavior:
    "More volatile, responsive to development/identity politics",
  ruralPeriUrbanVotersBehavior:
    "Traditional party loyalty, family networks",
};

// ============ PUBLIC SENTIMENT ============

const publicSentiment: PublicSentiment = {
  perceivedMood: null,
  volatility: "High",
  narrowMarginImplication:
    "6,750 margin is narrow — small shift in voter preferences can flip seat. AAP won partly due to Sidhu factor (high-profile defection).",
  postSidhuDynamics:
    "Navjot Singh Sidhu left AAP in 2024 (after government formation). His supporters may have returned to Congress or be floating. Jeevanjot Kaur as standalone MLA has less political weight than AAP-with-Sidhu.",
  keyVoterConcerns: [
    "Urban Development: City east infrastructure — roads, water, power",
    "Law & Order: Drug crisis, hooch tragedy",
    "Peri-urban Villages: Irrigation, agricultural roads, MSP",
    "Employment: Youth unemployment",
    "Governance: AAP's overall performance",
  ],
};

// ============ LOCAL ISSUES ============

const top5Issues: LocalIssue[] = [
  {
    rank: 1,
    issue: "Urban Infrastructure",
    description:
      "City east residential colony issues: water, drainage, power, roads",
    category: "Urban",
  },
  {
    rank: 2,
    issue: "Peri-urban Agriculture",
    description:
      "Village irrigation, farm-to-market roads, MSP for Jat Sikh farmers",
    category: "Agriculture",
  },
  {
    rank: 3,
    issue: "Drug Crisis",
    description: "Youth addiction in urban and peri-urban areas",
    category: "LawOrder",
  },
  {
    rank: 4,
    issue: "Unemployment",
    description: "Youth joblessness, skills gap",
    category: "Employment",
  },
  {
    rank: 5,
    issue: "Law & Order",
    description: "Drug peddling, hooch tragedy (Amritsar)",
    category: "LawOrder",
  },
];

const localIssues: LocalIssuesData = {
  top5Issues,
};

// ============ GOVERNANCE GAP ============

const governanceGap: GovernanceGap = {
  mlapPerformance:
    "Jeevanjot Kaur (AAP) — first-term MLA. Note: Navjot Singh Sidhu was a cabinet minister in AAP government 2022-2024; his departure may have affected MLA's access.",
  infrastructureStatus: {
    urbanResidential:
      "Newer colonies, some lacking civic infrastructure",
    periUrban: "Village roads, water supply, irrigation",
    nationalHighwayConnectivity: null,
  },
  postSidhuInfluence:
    "Sidhu was CM ministerial colleague; his departure reduced AAP's East Amritsar profile. Jeevanjot Kaur as standalone MLA has less political weight than AAP-with-Sidhu.",
};

// ============ INFLUENCERS & POWER STRUCTURE ============

const politicalInfluencers: PoliticalInfluencer[] = [
  {
    name: "Jeevanjot Kaur",
    role: "MLA",
    party: "AAP",
    influence: "Incumbent MLA - first-term",
    currentStatus: "Serving as MLA (2022-2026)",
    verificationStatus: "Partially Verified",
  },
  {
    name: "Navjot Singh Sidhu",
    role: "Former AAP Minister",
    party: null,
    influence:
      "High-profile former MLA; won 2017 as Congress candidate, left for AAP, left AAP in 2024",
    currentStatus: "Needs verification - rejoined Congress?",
    verificationStatus: "Needs Verification",
  },
  {
    name: "Congress Workers",
    role: "Party Workers",
    party: "INC",
    influence: "Traditional organization; may be rebuilding after Sidhu's return",
    currentStatus: "Rebuilding",
    verificationStatus: "Verified",
  },
  {
    name: "BJP Workers",
    role: "Party Workers",
    party: "BJP",
    influence: "Growing Hindutva presence in urban east",
    currentStatus: "Growing",
    verificationStatus: "Verified",
  },
  {
    name: "SAD Workers",
    role: "Party Workers",
    party: "SAD",
    influence: "Lost rural component; rebuilding",
    currentStatus: "Rebuilding",
    verificationStatus: "Verified",
  },
];

const socialReligiousInfluencers: SocialReligiousInfluencer[] = [
  {
    name: "Sidhu Family",
    role: "Political Family",
    influence: "Significant local influence; Jeevanjot Kaur may be Sidhu family member",
  },
  {
    name: "Jat Sikh Sarpanches",
    role: "Village Leaders",
    influence: "Peri-urban village leaders — key vote mobilizers",
  },
  {
    name: "Urban RWAs",
    role: "Welfare Associations",
    influence: "Residential colony welfare associations",
  },
  {
    name: "Gurudwara Committees",
    role: "Religious Bodies",
    influence: "Sikh voter mobilization",
  },
];

const influencersPowerStructure: InfluencersPowerStructure = {
  political: politicalInfluencers,
  socialReligious: socialReligiousInfluencers,
};

// ============ MEDIA LANDSCAPE ============

const mediaLandscape: MediaLandscape = {
  local: ["Amritsar Tribune", "Punjab Kesari"],
  regional: ["The Tribune", "India Today (Punjab)", "Babushahi.com"],
  socialMedia: [
    "Facebook: Community groups, local news",
    "WhatsApp: Voter contact",
    "YouTube: Punjabi news channels",
  ],
};

// ============ PHYSICAL MAPPING ============

const physicalMapping: PhysicalMapping = {
  keyGeography:
    "Amritsar East: Eastern city + peri-urban villages",
  urbanAreas: "Eastern residential colonies, some commercial",
  periUrbanVillages: "Agricultural settlements on city outskirts",
  connectivity: null,
};

// ============ SWOT ANALYSIS ============

const swotEntries: SwotEntry[] = [
  // AAP Strengths
  {
    category: "Strength",
    party: "AAP",
    point: "Incumbent MLA",
  },
  {
    category: "Strength",
    party: "AAP",
    point: "Sidhu legacy (if Jeevanjot Kaur is Sidhu family/ally)",
  },
  {
    category: "Strength",
    party: "AAP",
    point: "AAP government resources",
  },
  // AAP Weaknesses
  {
    category: "Weakness",
    party: "AAP",
    point:
      "Narrowest AAP margin in Amritsar (6,750) — highest vulnerability",
  },
  {
    category: "Weakness",
    party: "AAP",
    point:
      "Sidhu's departure may have deflated AAP's East Amritsar support",
  },
  {
    category: "Weakness",
    party: "AAP",
    point:
      "Urban voter volatility: more open to Hindutva/Congress messaging",
  },
  // AAP Opportunities
  {
    category: "Opportunity",
    party: "AAP",
    point: "Field strong candidate: Continuity vs. Change",
  },
  {
    category: "Opportunity",
    party: "AAP",
    point: "Development credit: Any local project",
  },
  {
    category: "Opportunity",
    party: "AAP",
    point: "Law & order: If improved, benefits incumbent",
  },
  // Opposition Opportunities
  {
    category: "Opportunity",
    party: "Congress",
    point:
      "Sidhu factor: His departure split AAP's vote",
  },
  {
    category: "Opportunity",
    party: "Congress",
    point:
      "Congress rebound: Sidhu back with Congress could revive Congress prospects",
  },
  {
    category: "Opportunity",
    party: "BJP",
    point:
      "Urban east has Hindu majority; BJP can consolidate",
  },
];

const swotAnalysis: SwotAnalysis = {
  entries: swotEntries,
};

// ============ STRATEGIC BLUEPRINT ============

const strategicDirectives: StrategicDirective[] = [
  {
    party: "AAP",
    objective: "Hold Amritsar East — Priority Target",
    keyActions: [
      "Field Jeevanjot Kaur or stronger candidate — incumbency",
      "Sidhu reconciliation: If Sidhu returns to AAP, huge boost; if not, separate Jeevanjot's identity from Sidhu",
      "Urban development: Claim credit for colony infrastructure",
      "Youth employment: Skills training, job melas",
      "Counter Congress: Sidhu left because he couldn't handle governance pressure",
    ],
  },
  {
    party: "Congress",
    objective: "Flip Amritsar East",
    keyActions: [
      "Sidhu return: Most impactful single factor — if Sidhu rejoins Congress, seat competitive",
      "Field strong local candidate",
      "Development criticism: Law & order, infrastructure failures",
      "AAP anti-incumbency: Capitalize on 4-year governance record",
    ],
  },
  {
    party: "BJP",
    objective: "Target Hindu Voters",
    keyActions: [
      "Urban east: Natural Hindutva constituency",
      "Strong candidate: Could split Hindu vote, hurting AAP",
      "National security: Strong centre needed for Punjab",
    ],
  },
];

const strategicBlueprint: StrategicBlueprint = {
  directives: strategicDirectives,
};

// ============ COURSE CHANGING FACTORS ============

const courseChangingFactorsList: CourseChangingFactor[] = [
  {
    factor: "Navjot Singh Sidhu rejoins Congress",
    probability: "Medium",
    impact: "HIGH",
  },
  {
    factor: "Sidhu stays with AAP",
    probability: "Medium",
    impact: "HIGH",
  },
  {
    factor: "Jeevanjot Kaur denied ticket",
    probability: "Medium",
    impact: "HIGH",
  },
  {
    factor: "Another law & order incident",
    probability: "Medium",
    impact: "HIGH",
  },
  {
    factor: "Congress fields strong local candidate",
    probability: "Medium",
    impact: "HIGH",
  },
  {
    factor: "BJP fields high-profile Hindu candidate",
    probability: "Medium",
    impact: "HIGH",
  },
  {
    factor: "Major peri-urban development project",
    probability: "Medium",
    impact: "MEDIUM",
  },
];

const courseChangingFactors: CourseChangingFactors = {
  factors: courseChangingFactorsList,
};

// ============ INTELLIGENCE GAPS ============

const intelligenceGapsList: IntelligenceGap[] = [
  {
    id: 1,
    item: "Full 2022 Amritsar East results — all candidates, vote counts, party breakdown",
    priority: "High",
  },
  {
    id: 2,
    item: "Jeevanjot Kaur profile — full name, background, family connection to Sidhu",
    priority: "High",
  },
  {
    id: 3,
    item:
      "Navjot Singh Sidhu current status — with AAP, Congress, or independent (as of May 2026)",
    priority: "High",
  },
  {
    id: 4,
    item: "2017 Navjot Singh Sidhu margin — to assess his personal vote base",
    priority: "Medium",
  },
  {
    id: 5,
    item:
      "Peri-urban village breakdown — which villages, what Jat Sikh concentration",
    priority: "Medium",
  },
  {
    id: 6,
    item:
      "Booth-level results 2022 — narrow margin suggests area-by-area swing",
    priority: "High",
  },
  {
    id: 7,
    item:
      "Sidhu's actual departure reason from AAP — affects supporter loyalty",
    priority: "Medium",
  },
  {
    id: 8,
    item:
      "BJP's organizational strength in Amritsar East — to assess Hindutva potential",
    priority: "Medium",
  },
];

const monitoringKeywords: string[] = [
  '"amritsar east" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
  '"jeevanjot kaur" AND "amritsar east" AND "aap"',
  '"navjot singh sidhu" AND "amritsar" AND ("aap" OR "congress" OR "2027")',
  '"amritsar east" AND ("bjp" OR "hindu" OR "hindutva")',
  '"amritsar east" AND ("sidhu" OR "congress" OR "development")',
];

const intelligenceGaps: IntelligenceGapsData = {
  gaps: intelligenceGapsList,
  monitoringKeywords,
};

// ============ CONGRESS STRATEGIC POSITION ============

const congressStrategicPosition: CongressStrategicPosition = {
  competitiveAssessment:
    "AAP won with narrow 6,750 margin - competitive and winnable",
  coalitionBuildingNote:
    "Congress must field strong candidate and build coalition",
  marginAnalysis:
    "NARROW MARGIN - Congress can win with right candidate",
};

// ============ RECOMMENDED CANDIDATE PROFILE ============

const recommendedCandidateProfile: RecommendedCandidateProfile = {
  profile: "Urban professional, mixed caste appeal",
  casteConsideration: "Arora/Khatri or Jat Sikh",
  keyQualities: ["Development focus", "Anti-AAP"],
};

// ============ ATTACK LINES ============

const attackLinesList: AttackLine[] = [
  {
    theme: "Close Win",
    message: "AAP barely won - anti-incumbency strong",
  },
  {
    theme: "Governance Failures",
    message: "City infrastructure deteriorating",
  },
  {
    theme: "Unemployment",
    message: "Educated youth still seeking jobs",
  },
  {
    theme: "Promises Broken",
    message: "AAP promises unfulfilled",
  },
];

const attackLines: AttackLinesData = {
  lines: attackLinesList,
};

// ============ SOURCES ============

const sources: SourceData = {
  consulted: [
    { name: "OneIndia", type: "Database" },
    { name: "IndiaVotes", type: "Database" },
    { name: "India Today", type: "News" },
    { name: "ADR India PDF", type: "Official" },
    { name: "Indiastat Factbook", type: "Database" },
    { name: "Wikipedia", type: "Web Search" },
    { name: "ResultUniversity.com", type: "Database" },
    { name: "minimax-web-search", type: "Web Search" },
  ],
  verificationStatus: "Partially Verified",
  currencyDate: "20 May 2026",
};

// ============ MAIN DATA OBJECT ============

export const ac018AmritsarEastData: AC018AmritsarEast = {
  identity,
  overview:
    "Amritsar East is a general assembly constituency covering eastern parts of Amritsar city. Urban constituency with mixed residential and commercial areas.",
  electionResults,
  casteComposition,
  religionBreakdown,
  detailedCasteBreakdown,
  keyVotingDynamics,
  publicSentiment,
  localIssues,
  governanceGap,
  influencersPowerStructure,
  mediaLandscape,
  physicalMapping,
  congressStrategicPosition,
  recommendedCandidateProfile,
  attackLines,
  swotAnalysis,
  strategicBlueprint,
  courseChangingFactors,
  intelligenceGaps,
  sources,
};

// Named export for convenience
export default ac018AmritsarEastData;
