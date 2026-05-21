// AC008-SriHargobindpur-SC Constituency Data
// Derived from: AC008-Sri-Hargobindpur.md and AC008-SriHargobindpurSC-deep.md
// 6-Cycle Enhancement Pipeline - Cycle 1: Initial Data Creation

import type {
  AC008SriHargobindpurSCDossier,
  ConstituencyIdentity,
  AdministrativeGeographic,
  HistoricalContext,
  EconomicIdentity,
  SocioCulturalIdentity,
  AdministrativeSetup,
  CensusData,
  ElectoralRollAnalytics,
  SchemePenetration,
  ElectoralHistory,
  VoterBehaviour,
  CurrentMood,
  KeyIssue,
  GovernanceGap,
  IssueVoterMapping,
  CommunityInfluencers,
  PoliticalInfluencers,
  SWOTAnalysis,
  StrategicBlueprint,
  CasteComposition,
  CongressStrategicPosition,
  CandidateProfile,
  AttackLines,
  DataQualityStatus,
} from "./ac008-sri-hargobindpur-sc-types";

// ==========================================
// CYCLE 1: IDENTITY & BASELINE DATA
// ==========================================

export const constituencyIdentity: ConstituencyIdentity = {
  acNumber: 8,
  name: "Sri Hargobindpur (SC)",
  district: "Gurdaspur",
  region: "Majha",
  date: "20 May 2026",
  researchSource: "Web-verified via minimax-web-search",
  reservation: "SC",
  parliamentarySegment: "Hoshiarpur Lok Sabha constituency",
};

export const administrativeGeographic: AdministrativeGeographic = {
  acNumber: 8,
  parliamentarySegment: "Hoshiarpur Lok Sabha constituency (Note: different from other Gurdaspur district ACs)",
  district: "Gurdaspur",
  type: "SC",
  area: "Rural SC-majority area, agricultural belt",
  historical: "Named after Guru Hargobind - Sikh religious significance",
};

export const historicalContext: HistoricalContext = {
  religiousSignificance: "Associated with Guru Hargobind Sahib",
  gurdwara: "Sri Hargobindpur has important gurdwara",
  partitionImpact: "Heavy demographic changes [NEEDS VERIFICATION]",
  socialHistory: "SC community settlement patterns [NEEDS VERIFICATION]",
};

export const economicIdentity: EconomicIdentity = {
  primaryActivities: ["Agriculture", "Agricultural labor"],
  employment: ["MGNREGA", "Agriculture", "Some government jobs"],
  economicStatus: "Economically weaker constituency",
  land: "Small holdings, some landless labor",
};

export const socioCulturalIdentity: SocioCulturalIdentity = {
  language: "Punjabi (Majha dialect)",
  religion: "Sikh majority (SC community), some Hindu",
  casteComposition: "SC ~65-75% [NEEDS VERIFICATION]",
  socialProfile: "Traditional agricultural labor community",
};

export const administrativeSetup: AdministrativeSetup = {
  rural: "Multiple panchayats, no major town",
  health: "CHCs, sub-centers [NEEDS VERIFICATION]",
  education: "Government schools [NEEDS VERIFICATION]",
};

// ==========================================
// CYCLE 2: DEMOGRAPHIC DATA
// ==========================================

export const censusData: CensusData = {
  population: "[NEEDS VERIFICATION]",
  electors2022: "[NEEDS VERIFICATION - estimate ~160,000]",
  sexRatio: "[NEEDS VERIFICATION]",
  literacy: "[NEEDS VERIFICATION]",
};

export const electoralAnalytics: ElectoralRollAnalytics = {
  voterTurnout2024: 53.13,
  voterTurnout2022: 68.91,
  source: "Indiastat Factbook",
  note: "Lower turnout in 2024 indicates possible drop in 2026 assembly",
};

export const schemePenetration: SchemePenetration = {
  pds: "High coverage",
  mgnrega: "Critical employment source",
  scSchemes: "[NEEDS VERIFICATION]",
};

// ==========================================
// CYCLE 3: ELECTORAL HISTORY
// ==========================================

export const electoralHistory: ElectoralHistory = {
  elections: [
    {
      year: 2022,
      winner: "Amarpal Singh",
      party: "AAP",
      votes: 53205,
      votePercentage: 43.2,
      margin: "Won vs Rajanbir Singh (SAD) 29.5%",
      runnerUp: "Rajanbir Singh",
      runnerUpParty: "SAD",
      runnerUpVotes: 36242,
      runnerUpPercentage: 29.5,
    },
    {
      year: 2017,
      winner: "Balwinder Singh",
      party: "INC",
    },
    {
      year: 2012,
      winner: "[NEEDS VERIFICATION]",
    },
  ],
  conflictingData: [
    {
      source: "IndiaVotes",
      winner: "Amarpal Singh",
      party: "AAP",
      votes: 53205,
      percentage: 43.2,
      runnerUp: "Rajanbir Singh",
      runnerUpParty: "SAD",
      runnerUpVotes: 36242,
      runnerUpPercentage: 29.5,
    },
    {
      source: "resultuniversity.com",
      winner: "Balwinder Singh",
      party: "INC",
      votes: 57489,
      percentage: 0,
    },
  ],
  verdict:
    "Need to verify - AAP source (IndiaVotes) seems more current/accurate showing AAP win",
};

export const voterBehaviour: VoterBehaviour = {
  turnout2022: 68.91,
  casteFactor: "SC voters (~65-75%) decide winner",
  swing: "Shift to AAP in 2022",
};

// ==========================================
// CYCLE 4: PUBLIC SENTIMENT & ISSUES
// ==========================================

export const currentMood: CurrentMood = {
  mla: "Amarpal Singh",
  party: "AAP",
  term: "first-term",
  expectations: ["Jobs", "Welfare schemes", "Dignity"],
};

export const keyIssues: KeyIssue[] = [
  { issue: "Employment", description: "MGNREGA rates, jobs" },
  { issue: "Drug Menace", description: "SC youth affected" },
  { issue: "Education", description: "Scholarships" },
  { issue: "Land Rights", description: "[NEEDS VERIFICATION]" },
  { issue: "Agriculture", description: "Small farmer issues" },
];

export const governanceGap: GovernanceGap = {
  health: "[NEEDS VERIFICATION]",
  education: "[NEEDS VERIFICATION]",
  roads: "[NEEDS VERIFICATION]",
};

// ==========================================
// CYCLE 5: INFLUENCERS & SWOT
// ==========================================

export const issueVoterMapping: IssueVoterMapping[] = [
  { issue: "MGNREGA jobs", segment: "Landless, marginal farmers" },
  { issue: "Drugs", segment: "SC youth" },
  { issue: "Education", segment: "Students" },
  { issue: "Caste dignity", segment: "Entire SC community" },
];

export const communityInfluencers: CommunityInfluencers = {
  dalitLeaders: "[NEEDS VERIFICATION]",
  panchayatHeads: "[NEEDS VERIFICATION]",
};

export const politicalInfluencers: PoliticalInfluencers = {
  incumbentMLA: "Amarpal Singh",
  party: "AAP MLA (verify)",
  incWorkers: "Still active despite loss",
  sad: "[NEEDS VERIFICATION]",
};

export const swotAnalysis: SWOTAnalysis = {
  strengths: ["AAP won 2022", "SC voter consolidation possible"],
  weaknesses: ["First-term MLA", "Limited resources"],
  opportunities: ["SC welfare delivery", "Skill training"],
  threats: ["Congress revival among SC voters", "Drug problem"],
};

export const strategicBlueprint: StrategicBlueprint = {
  narratives: ["SC Welfare First", "Jobs & Development", "Drug-Free Future"],
  prioritySegments: ["SC voters (65-75%)", "Women (welfare)", "Youth"],
};

// ==========================================
// CYCLE 6: DEEP-DIVE & STRATEGIC DATA
// ==========================================

export const casteComposition: CasteComposition = {
  sc: "~35-38% (dominant in SC reserved seat)",
  jatSikh: "~26%",
  obc: "~13%",
  upperCaste: "~12%",
  minority: "~8%",
  note: "Gurdaspur District - SC Weighted",
};

export const congressPosition: CongressStrategicPosition = {
  position:
    "AAP flipped this SC seat from Congress in 2022. Congress must recapture by nominating a strong SC leader with grassroots connect.",
  recommendation: "AAP won from Congress - Congress needs strong SC candidate",
};

export const recommendedCandidate: CandidateProfile = {
  profile: "SC leader, agrarian background, worker-oriented",
  casteConsideration: "MUST be from SC community",
  keyQualities: ["Dedicated to SC issues", "Accessible"],
};

export const attackLines: AttackLines[] = [
  {
    category: "SC Welfare",
    points: ["Welfare schemes not reaching SC community"],
  },
  {
    category: "Economic Backwardness",
    points: ["SC communities still economically weak"],
  },
  {
    category: "Land Issues",
    points: ["Agricultural land ownership problems"],
  },
  {
    category: "Social Justice",
    points: ["Discrimination still prevalent"],
  },
];

// ==========================================
// DATA QUALITY TRACKING
// ==========================================

export const dataQuality: DataQualityStatus[] = [
  { field: "Population", status: "NEEDS_VERIFICATION" },
  { field: "Electors 2022", status: "NEEDS_VERIFICATION", notes: "Estimate ~160,000" },
  { field: "Sex Ratio", status: "NEEDS_VERIFICATION" },
  { field: "Literacy", status: "NEEDS_VERIFICATION" },
  { field: "SC Caste Composition", status: "NEEDS_VERIFICATION", notes: "65-75% estimate" },
  { field: "2017 Election Result", status: "PARTIAL" },
  { field: "2012 Election Result", status: "NEEDS_VERIFICATION" },
  { field: "2022 Election Winner", status: "CONFLICTING", sources: ["IndiaVotes", "resultuniversity.com"] },
  { field: "Partition Impact", status: "NEEDS_VERIFICATION" },
  { field: "Social History", status: "NEEDS_VERIFICATION" },
  { field: "Health Infrastructure", status: "NEEDS_VERIFICATION" },
  { field: "Education Infrastructure", status: "NEEDS_VERIFICATION" },
  { field: "Road Infrastructure", status: "NEEDS_VERIFICATION" },
  { field: "SC Schemes Coverage", status: "NEEDS_VERIFICATION" },
  { field: "Dalit Leaders", status: "NEEDS_VERIFICATION" },
  { field: "Panchayat Heads", status: "NEEDS_VERIFICATION" },
  { field: "SAD Position", status: "NEEDS_VERIFICATION" },
  { field: "Land Rights Status", status: "NEEDS_VERIFICATION" },
];

// ==========================================
// METADATA
// ==========================================

export const dataSources = [
  "IndiaVotes",
  "Indiastat Factbook",
  "Oneindia",
  "Hindustan Times",
  "resultuniversity.com",
];

export const researchStatus = "PARTIAL/VERIFICATION NEEDED - election winner conflicting sources";

// ==========================================
// COMPLETE DOSSIER EXPORT
// ==========================================

export const ac008SriHargobindpurSCData: AC008SriHargobindpurSCDossier = {
  constituency: constituencyIdentity,
  administrativeGeographic,
  historical: historicalContext,
  economic: economicIdentity,
  socioCultural: socioCulturalIdentity,
  administrative: administrativeSetup,
  census: censusData,
  electoralAnalytics,
  schemePenetration,
  electoralHistory,
  voterBehaviour,
  currentMood,
  keyIssues,
  governanceGap,
  issueVoterMapping,
  communityInfluencers,
  politicalInfluencers,
  swot: swotAnalysis,
  strategicBlueprint,
  casteComposition,
  congressPosition,
  recommendedCandidate,
  attackLines,
  dataQuality,
  dataSources,
  researchStatus,
};

export default ac008SriHargobindpurSCData;
