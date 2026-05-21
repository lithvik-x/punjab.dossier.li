/**
 * AC014-Jandiala Constituency Data
 * Generated through 6-cycle enhancement pipeline
 * Sources: AC014-Jandiala.md and AC014-Jandiala-deep.md
 */

import type {
  Ac014JandialaTypes,
  ConstituencyHeader,
  ConstituencyOverview,
  GeographicProfile,
  KeyStatistics2022,
  DemographicsCensus2011,
  DistrictScContext,
  CasteComposition,
  ScSubGroupBreakdown,
  ScSubGroup,
  VoterDemographics,
  ElectionResult,
  ElectionResults,
  CoreIssue,
  LocalIssue,
  TopLocalIssues,
  CandidateProfile,
  AttackLine,
  AttackLines,
  CongressStrategicPosition,
  MlaPerformance,
  DalitGovernanceIndicators,
  GeneralInfrastructure,
  Influencers,
  PoliticalInfluencer,
  SocialReligiousInfluencer,
  MediaLandscape,
  LocalMedia,
  DiasporaMedia,
  SocialMedia,
  SwotAnalysis,
  SwotCategory,
  PartyStrategy,
  StrategicBlueprints,
  CourseChangingFactor,
  CourseChangingFactors,
  IntelligenceGap,
  VerificationToDo,
  MonitoringKeywords,
  ResearchMetadata,
  Sources,
  PublicSentiment,
} from "./ac014-jandiala-types";

import {
  ConstituencyRegion,
  ConstituencyType,
  Party,
  CasteGroup,
  VerificationStatus,
  ProbabilityLevel,
  ImpactLevel,
} from "./ac014-jandiala-types";

// ============================================================================
// HEADER
// ============================================================================

const header: ConstituencyHeader = {
  acNumber: 14,
  name: "Jandiala",
  district: "Amritsar",
  region: ConstituencyRegion.MAJHA,
  type: ConstituencyType.SCHEDULED_CASTE,
  date: "20 May 2026",
};

// ============================================================================
// OVERVIEW
// ============================================================================

const overview: ConstituencyOverview = {
  description:
    "Jandiala is a reserved (SC) assembly constituency in Amritsar district. It includes Jandiala Guru town and surrounding rural areas.",
  includes: "Jandiala Guru town and surrounding rural areas",
  partOf: "Amritsar Lok Sabha constituency",
  location: "Amritsar district, Punjab",
  notableFeature:
    "SC-reserved constituency with Dalit-dominated voter profile; AAP won from Congress in 2022 indicating Dalit voter shift",
};

// ============================================================================
// GEOGRAPHIC PROFILE
// ============================================================================

const geographicProfile: GeographicProfile = {
  alternateName: "Jandiala Guru",
  location: "Town and assembly constituency in Amritsar district, Punjab",
  roadConnection: "Grand Trunk Road (NH3)",
  district: "Amritsar",
  tehsil: "Amritsar I tehsil",
  lokSabhaConstituency: "Amritsar",
  proximityToCity: "~15-20 km from Amritsar city",
};

// ============================================================================
// KEY STATISTICS 2022
// ============================================================================

const keyStatistics2022: KeyStatistics2022 = {
  winner: "Harbhajan Singh (also referred to as Harbhajan Singh ETO)",
  runnerUp: "Satinderjit Singh [NEEDS VERIFICATION]",
  winnerVoteCount: "[NEEDS VERIFICATION — per News18: AAP won after 'see-saw battle']",
  margin: "[NEEDS VERIFICATION — per India Today: margin exists]",
  party: Party.AAP,
  source: "News18, India Today",
};

// ============================================================================
// DEMOGRAPHICS CENSUS 2011
// ============================================================================

const demographics: DemographicsCensus2011 = {
  block: "Jandiala block",
  scPopulation: "43% (per Grokipedia — very high SC concentration)",
  townScPopulation: "13.78% (Jandiala Municipal Council — urban dilution)",
  source: "Grokipedia, Census2011.co.in",
};

// ============================================================================
// DISTRICT SC CONTEXT
// ============================================================================

const districtScContext: DistrictScContext = {
  totalSc: 770864,
  percentageOfDistrict: "30.95% of district population",
  source: "Grokipedia, Census 2011, District Census Handbook Amritsar",
};

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

const casteComposition: CasteComposition = {
  sc: 32.5, // ~32-35% (dominant in SC reserved seat)
  jatSikh: 30,
  obc: 12,
  upperCaste: 15,
  minority: 5,
  total: 100,
};

// ============================================================================
// SC SUB-GROUP BREAKDOWN
// ============================================================================

const ravidassiaRamdasiaSubGroup: ScSubGroup = {
  name: CasteGroup.RAVI_DASSIA,
  description: "Largest SC subgroup in constituency",
  traditionalOccupation: "Scraping, leather work",
  concentration: "Concentrated in rural Jandiala block",
};

const mazhabiSikhSubGroup: ScSubGroup = {
  name: CasteGroup.MAZHABI_SIKH,
  description: "SC community with traditional agricultural background",
  traditionalOccupation: "Traditional agricultural labour",
  concentration: "Present in rural villages",
};

const valmikiBaradSubGroup: ScSubGroup = {
  name: CasteGroup.VALMIKI,
  description: "SC community",
  traditionalOccupation: "[NEEDS VERIFICATION]",
  concentration: "Some presence in constituency",
};

const scSubGroupBreakdown: ScSubGroupBreakdown = {
  ravidassiaRamdasia: ravidassiaRamdasiaSubGroup,
  mazhabiSikh: mazhabiSikhSubGroup,
  valmikiBarad: valmikiBaradSubGroup,
};

// ============================================================================
// VOTER DEMOGRAPHICS
// ============================================================================

const voterDemographics: VoterDemographics = {
  scVoters: "~43%+ (reserved seat requirement)",
  generalCategoryVoters: "~57% (non-SC can also vote in SC seat)",
  ruralVoters: "~65-70%",
  urbanVoters: "~30-35% (Jandiala town)",
};

// ============================================================================
// ELECTION RESULTS
// ============================================================================

const electionResult2022: ElectionResult = {
  year: 2022,
  winner: "Harbhajan Singh",
  party: Party.AAP,
  runnerUp: "Satinderjit Singh [NEEDS VERIFICATION]",
  runnerUpParty: "[Congress/SAD?] [NEEDS VERIFICATION]",
  margin: "[NEEDS VERIFICATION]",
  verificationStatus: VerificationStatus.PARTIALLY_VERIFIED,
};

const electionResult2017: ElectionResult = {
  year: 2017,
  winner: "[NEEDS VERIFICATION]",
  party: "[NEEDS VERIFICATION]",
  runnerUp: "[NEEDS VERIFICATION]",
  runnerUpParty: "[NEEDS VERIFICATION]",
  margin: "[NEEDS VERIFICATION]",
  verificationStatus: VerificationStatus.NEEDS_VERIFICATION,
};

const electionResult2012: ElectionResult = {
  year: 2012,
  winner: "[NEEDS VERIFICATION]",
  party: "[NEEDS VERIFICATION]",
  runnerUp: "[NEEDS VERIFICATION]",
  runnerUpParty: "[NEEDS VERIFICATION]",
  margin: "[NEEDS VERIFICATION]",
  verificationStatus: VerificationStatus.NEEDS_VERIFICATION,
};

const electionResults: ElectionResults = {
  2022: electionResult2022,
  2017: electionResult2017,
  2012: electionResult2012,
};

// ============================================================================
// CORE ISSUES
// ============================================================================

const coreIssues: CoreIssue[] = [
  {
    id: 1,
    title: "SC community welfare and empowerment",
    description:
      "Welfare schemes and their effective delivery to SC beneficiaries",
    priority: 1,
  },
  {
    id: 2,
    title: "Urban (Jandiala Guru) development",
    description: "Development of Jandiala Guru town infrastructure",
    priority: 2,
  },
  {
    id: 3,
    title: "Agricultural labor issues",
    description: "Issues facing agricultural laborers in rural areas",
    priority: 3,
  },
  {
    id: 4,
    title: "Employment for SC youth",
    description: "Job opportunities and skill development for SC youth",
    priority: 4,
  },
  {
    id: 5,
    title: "Social discrimination concerns",
    description:
      "Addressing caste-based discrimination despite legal equality",
    priority: 5,
  },
];

// ============================================================================
// TOP LOCAL ISSUES (SC CONSTITUENCY FOCUS)
// ============================================================================

const topLocalIssues: LocalIssue[] = [
  {
    id: 1,
    issue: "Unemployment & Skills",
    details:
      "SC youth lack industrial skills; migration to cities; government jobs, skill training, NCLP",
    source: "India Today Dalit demography analysis",
  },
  {
    id: 2,
    issue: "Land & agrarian issues",
    details:
      "Small/marginal SC farmers; irrigation, credit access; access to panchayat land, prevention of land alienation",
    source: "India Today Dalit demography analysis",
  },
  {
    id: 3,
    issue: "Caste-based Discrimination",
    details:
      "Social inequality despite legal equality; dignity politics; formal equality vs social reality gaps",
    source: "India Today Dalit demography analysis",
  },
  {
    id: 4,
    issue: "Drug Addiction",
    details:
      "Rural youth addiction hits SC communities hard; rehabilitation absent",
    source: "India Today Dalit demography analysis, general Amritsar district issues",
  },
  {
    id: 5,
    issue: "Education Infrastructure",
    details:
      "SC student drop-out rates, scholarship awareness, hostel facilities, SC hostel facilities, scholarship disbursement",
    source:
      "India Today Dalit demography analysis, general SC voter research",
  },
];

const topLocalIssuesContainer: TopLocalIssues = {
  issues: topLocalIssues,
  count: 5,
};

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

const candidateProfile: CandidateProfile = {
  profile: "SC leader, worker-focused, grassroots",
  casteConsideration: "MUST be from SC community",
  keyQualities: ["Social justice focus", "Accessible", "Dedicated to welfare"],
};

// ============================================================================
// ATTACK LINES AGAINST AAP INCUMBENT
// ============================================================================

const attackLines: AttackLine[] = [
  {
    category: "SC Welfare",
    message: "Welfare schemes not reaching SC beneficiaries",
  },
  {
    category: "Broken Promises",
    message: "₹1000/month for women unfulfilled",
  },
  {
    category: "Economic Issues",
    message: "SC community economic condition unchanged",
  },
  {
    category: "Joblessness",
    message: "SC youth remain unemployed",
  },
];

const attackLinesContainer: AttackLines = {
  lines: attackLines,
};

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

const congressStrategicPosition: CongressStrategicPosition = {
  background:
    "AAP won from Congress in 2022. Congress must recapture this SC seat by nominating a dedicated SC leader focused on welfare and social justice.",
  requirement:
    "Congress needs strong Dalit candidate — possibly from Ravidassia community. Congress-SAD alliance only makes sense if Congress concedes this seat to SAD's Dalit candidate [UNLIKELY]",
};

// ============================================================================
// MLA PERFORMANCE
// ============================================================================

const mlaPerformance: MlaPerformance = {
  name: "Harbhajan Singh",
  party: Party.AAP,
  term: "2022-2026 (first term)",
  background: "Dalit community background [NEEDS VERIFICATION]",
  verificationStatus: VerificationStatus.PARTIALLY_VERIFIED,
};

// ============================================================================
// DALIT GOVERNANCE INDICATORS
// ============================================================================

const dalitGovernanceIndicators: DalitGovernanceIndicators = {
  scholarshipDisbursement: "[NEEDS VERIFICATION — any data]",
  scCorporation: "[NEEDS VERIFICATION — any MLA initiatives]",
  preventionOfAtrocities: "Law & order in rural areas [NEEDS VERIFICATION]",
  landCeiling: "Implementation status [NEEDS VERIFICATION]",
};

// ============================================================================
// GENERAL INFRASTRUCTURE
// ============================================================================

const generalInfrastructure: GeneralInfrastructure = {
  jandialaTown: ["GT Road connectivity", "Municipal services"],
  rural: ["Agricultural roads", "Irrigation"],
  waterSupply: "Rural water supply schemes [NEEDS VERIFICATION]",
};

// ============================================================================
// PUBLIC SENTIMENT
// ============================================================================

const publicSentiment: PublicSentiment = {
  perceivedMood: "[NEEDS VERIFICATION — field intelligence required]",
  dalitCommunityMood:
    "Ravidassia community has been courted by BSP (Mayawati) historically. AAP's 2022 win was partly due to anti-incumbency + 'new politics' appeal. Dalit voters disappointed with AAP's governance: [NEEDS VERIFICATION]. BSP still has dormant organizational presence.",
  notes:
    "Temple/church visits, community leaders' endorsements decisive in SC seat voting",
  verificationStatus: VerificationStatus.NEEDS_VERIFICATION,
};

// ============================================================================
// INFLUENCERS
// ============================================================================

const politicalInfluencers: PoliticalInfluencer[] = [
  {
    name: "Harbhajan Singh (AAP MLA)",
    party: Party.AAP,
    role: "First-term incumbent MLA",
    status: "Dalit community background [NEEDS VERIFICATION]",
  },
  {
    name: "BSP Party",
    party: Party.BSP,
    role: "Historically strong in SC seats",
    status: "Dormant but winnable with right candidate",
  },
  {
    name: "Congress",
    party: Party.CONGRESS,
    role: "Some SC voter base",
    status: "Depends on alliance partner",
  },
  {
    name: "SAD",
    party: Party.SAD,
    role: "Had some SC voter base pre-2022",
    status: "Organization shattered after 2022 wipeout",
  },
  {
    name: "SC Community Panchayats",
    role: "Informal village-level Dalit leaders",
  },
];

const socialReligiousInfluencers: SocialReligiousInfluencer[] = [
  {
    name: "Ravidassia Community Elders",
    role: "Key vote mobilization for Ravidassia voters",
  },
  {
    name: "Christian Missionaries",
    role: "Active in some SC communities",
    notes: "[NEEDS VERIFICATION — any in Jandiala]",
  },
  {
    name: "Dalit intellectuals/NGOs",
    role: "Shape community's political consciousness",
  },
  {
    name: "Gurudwara",
    role: "Sikh SC voters also influenced by religious institutions",
  },
];

const influencers: Influencers = {
  political: politicalInfluencers,
  socialReligious: socialReligiousInfluencers,
};

// ============================================================================
// MEDIA LANDSCAPE
// ============================================================================

const localMedia: LocalMedia = {
  outlets: ["Amritsar Tribune", "Punjab Kesari"],
};

const diasporaMedia: DiasporaMedia = {
  description: "Dalit diaspora (Canada, UK) with strong community media presence",
  channels: "Punjabi Dalit YouTube channels [NEEDS VERIFICATION]",
};

const socialMedia: SocialMedia = {
  platforms: ["Facebook", "WhatsApp", "YouTube"],
  usage:
    "Facebook: SC community groups, youth networks; WhatsApp: Community-level voter contact chains; YouTube: Punjabi news channels",
};

const mediaLandscape: MediaLandscape = {
  local: localMedia,
  diaspora: diasporaMedia,
  socialMedia: socialMedia,
};

// ============================================================================
// SWOT ANALYSIS (AAP)
// ============================================================================

const swotCategory: SwotCategory = {
  strengths: [
    "Incumbency + AAP's continued governance presence",
    "Dalit vote bank partially consolidated from 2022",
    '"New politics" appeal to young SC voters',
  ],
  weaknesses: [
    "4 years of AAP government may have disappointed SC expectations",
    "BSP still has dormant SC base",
    "No clear Dalit-specific policy achievement visible to voter",
  ],
  opportunities: [
    "Congress-SAD alliance fragmentation — anti-AAP votes divided",
    "Dalit card: If BSP is isolated, AAP gets SC consolidation",
    "Employment schemes for SC youth: skill training, loans",
  ],
  threats: [
    "BSP revival: Mayawati's party reorganizing in Punjab",
    "Congress Dalit candidate: Old networks still exist",
    "SAD's attempt to rebuild SC base after 2022 wipeout",
    "Any anti-Dalit incident becomes electoral fodder",
  ],
};

const swotAnalysis: SwotAnalysis = {
  forParty: "AAP (Incumbent)",
  analysis: swotCategory,
};

// ============================================================================
// STRATEGIC BLUEPRINTS
// ============================================================================

const aapStrategy: PartyStrategy = {
  party: "AAP",
  recommendations: [
    "Field Harbhajan Singh (incumbent) — continuity + Dalit representation",
    'Dalit outreach: "AAP delivered for SC: [specific schemes]" [NEEDS VERIFICATION]',
    "Highlight employment: skills training, MUDRA loans disbursed",
    "Youth outreach: Overseas employment cell, NRI connections",
    'Attack Congress+SAD: "They ignored Dalits for 70 years"',
  ],
};

const congressStrategy: PartyStrategy = {
  party: "Congress",
  recommendations: [
    "Need strong Dalit candidate — possibly from Ravidassia community",
    "Congress-SAD alliance only makes sense if Congress concedes this seat to SAD's Dalit candidate [UNLIKELY]",
  ],
};

const bspStrategy: PartyStrategy = {
  party: "BSP",
  recommendations: [
    "BSP needs to rebuild from near-zero base",
    "Mayawati's Dalit outreach visits, candidate selection critical",
    'BSP core message: "AAP and Congress both fail Dalits"',
  ],
};

const sadBjpStrategy: PartyStrategy = {
  party: "SAD+BJP",
  recommendations: [
    "Difficult in SC seat — SAD's Dalit outreach historically limited",
    "May need Congress or BSP tie-up to be competitive",
  ],
};

const strategicBlueprints: StrategicBlueprints = {
  aap: aapStrategy,
  congress: congressStrategy,
  bsp: bspStrategy,
  sadBjp: sadBjpStrategy,
};

// ============================================================================
// COURSE-CHANGING FACTORS
// ============================================================================

const courseChangingFactorsList: CourseChangingFactor[] = [
  {
    factor: "BSP revives in Punjab",
    probability: ProbabilityLevel.MEDIUM,
    impact: ImpactLevel.HIGH,
  },
  {
    factor: "Congress fields strong Dalit candidate",
    probability: ProbabilityLevel.MEDIUM,
    impact: ImpactLevel.HIGH,
  },
  {
    factor: "Major SC atrocity incident",
    probability: ProbabilityLevel.LOW,
    impact: ImpactLevel.HIGH,
  },
  {
    factor: "AAP government job scheme for SC",
    probability: ProbabilityLevel.MEDIUM,
    impact: ImpactLevel.HIGH,
  },
  {
    factor: "SAD-Dalit outreach campaign",
    probability: ProbabilityLevel.LOW,
    impact: ImpactLevel.MEDIUM,
  },
  {
    factor: "Harbhajan Singh denied ticket",
    probability: ProbabilityLevel.MEDIUM,
    impact: ImpactLevel.HIGH,
  },
];

const courseChangingFactors: CourseChangingFactors = {
  factors: courseChangingFactorsList,
};

// ============================================================================
// INTELLIGENCE GAPS & VERIFICATION TO-DO
// ============================================================================

const intelligenceGaps: IntelligenceGap[] = [
  { id: 1, item: "Full 2022 Jandiala results — all candidate names and vote counts" },
  { id: 2, item: "Harbhajan Singh profile — full name, caste, background, ETO reference" },
  { id: 3, item: "2017 electoral history — was this seat held by Congress/SAD/BSP?" },
  { id: 4, item: "SC community breakdown in Jandiala — Ravidassia vs Mazhabi vs other" },
  { id: 5, item: "Booth-level results — identify which booths went AAP vs Congress" },
  { id: 6, item: "MLA's Dalit-specific initiatives 2022-2026 — SC Corporation projects" },
  { id: 7, item: "Any major SC atrocity cases in Jandiala 2022-2026 — law & order" },
  { id: 8, item: "BSP's actual 2022 vote share — to assess dormancy vs. revival" },
];

const verificationToDo: VerificationToDo = {
  gaps: intelligenceGaps,
};

// ============================================================================
// MONITORING KEYWORDS
// ============================================================================

const monitoringKeywords: MonitoringKeywords = {
  keywordSets: [
    '"jandiala" AND "punjab" AND ("election" OR "results" OR " MLA" OR "2027")',
    '"harbhajan singh" AND "jandiala" AND "aap"',
    '"jandiala" AND ("sc" OR "dalit" OR "ravidassia")',
    '"jandiala" AND (" BSP" OR "congress" OR "sad")',
    '"jandiala" AND ("unemployment" OR "land" OR "farmer")',
  ],
};

// ============================================================================
// SOURCES & METADATA
// ============================================================================

const sources: Sources = {
  consulted: [
    "Web search (minimax-web-search)",
    "News18",
    "India Today",
    "ADR India PDF",
    "Grokipedia",
    "CityPopulation.de",
    "Wikipedia Jandiala Guru",
  ],
  verificationStatus: VerificationStatus.PARTIALLY_VERIFIED,
  dataCurrency: "As of 20 May 2026",
};

const researchMetadata: ResearchMetadata = {
  taskId: "AC014-Jandiala-001",
  topic: "Jandiala Assembly Constituency Deep Research",
  tier: 2,
  date: "20 May 2026",
  agent: "Orchestrator-R1",
  sources: sources,
};

// ============================================================================
// COMPLETE DATA OBJECT
// ============================================================================

export const ac014JandialaData: Ac014JandialaTypes = {
  header,
  overview,
  geographicProfile,
  keyStatistics2022,
  demographics,
  districtScContext,
  casteComposition,
  scSubGroupBreakdown,
  voterDemographics,
  electionResults,
  coreIssues,
  topLocalIssues: topLocalIssuesContainer,
  candidateProfile,
  attackLines: attackLinesContainer,
  congressStrategicPosition,
  mlaPerformance,
  dalitGovernanceIndicators,
  generalInfrastructure,
  influencers,
  mediaLandscape,
  swotAnalysis,
  strategicBlueprints,
  courseChangingFactors,
  verificationToDo,
  monitoringKeywords,
  researchMetadata,
};

// ============================================================================
// ADDITIONAL DATA FROM BASIC FILE
// ============================================================================

// 2022 Results additional details from basic file
export const election2022Details = {
  winner: "Harbhajan Singh ETO (AAP)",
  party: Party.AAP,
  margin: "(Significant - to be verified)",
  totalElectors: "~1,58,000 (estimated)",
  voterTurnout: "~73% (estimated)",
};

// 2017 Results from basic file
export const election2017Details = {
  winner: "(To be verified - likely Congress)",
  party: Party.CONGRESS,
};

// 2012 Results from basic file
export const election2012Details = {
  winner: "(To be verified)",
};

// Caste composition with ranges
export const casteCompositionRanges = {
  sc: { min: 32, max: 35, typical: 32.5 },
  jatSikh: 30,
  obc: 12,
  upperCaste: 15,
  minority: 5,
};

// Export all data as default
export default ac014JandialaData;
