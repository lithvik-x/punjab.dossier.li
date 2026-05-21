/**
 * AC081-Abohar Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC081-Abohar.md (Tier 1 - VERIFIED), AC081-Abohar-deep.md (Tier 2 - PARTIALLY VERIFIED)
 */

import type {
  AC081AboharTypes,
  AC081AboharMainDossier,
  AC081AboharDeepResearch,
  ResearchMicroTask,
  ConstituencyIdentity,
  ConstituencyProfile,
  CasteComposition,
  CasteCompositionDeep,
  ReligionDistribution,
  LiteracyRate,
  Demographics,
  DistrictDemographics,
  ElectionResult2022,
  ElectionResult2017,
  ElectionResult2012,
  ElectoralHistory,
  ElectionHistory,
  VoterDemographics,
  VoterProfile,
  LocalIssue,
  LocalIssues,
  KeyIssues,
  PublicSentiment,
  PoliticalPlayers,
  CongressStrategicPosition,
  GovernanceGap,
  DevelopmentIndicators,
  BoothAnalysis,
  Outlook2027,
  IntelligenceGap,
  DataQuality,
  DataSource,
  ResearchStatus,
  CandidateProfile,
  AttackLine,
} from './ac081-abohar-types';

// ============================================================================
// RESEARCH METADATA - TIER 1 (VERIFIED)
// ============================================================================

const mainDossierMetadata: ResearchMicroTask = {
  taskId: "AC081",
  topic: "Abohar Assembly Constituency",
  tier: 1,
  date: "20 May 2026",
  agent: "researcher",
  sourcesConsulted: ["Wikipedia", "IndiaVotes", "MyNeta", "ECI data"],
  verificationStatus: "VERIFIED",
  dataCurrency: "As of 20 May 2026",
};

// ============================================================================
// RESEARCH METADATA - TIER 2 (PARTIALLY VERIFIED)
// ============================================================================

const deepResearchMetadata: ResearchMicroTask = {
  taskId: "AC081",
  topic: "Abohar Assembly Constituency - Deep Research",
  tier: 2,
  date: "20 May 2026",
  agent: "Constituency-Research-Agent",
  sourcesConsulted: ["Web searches on Punjab 2022 election results", "demographics", "issues"],
  verificationStatus: "PARTIALLY VERIFIED",
  dataCurrency: "As of May 2026",
};

// ============================================================================
// CORE IDENTITY
// ============================================================================

const constituencyIdentity: ConstituencyIdentity = {
  acNumber: 81,
  officialName: "Abohar",
  district: "Fazilka",
  region: "Malwa",
  category: "General",
  parliamentarySeat: "Firozpur",
};

const constituencyProfile: ConstituencyProfile = {
  assemblyConstituencyNo: 81,
  district: "Fazilka",
  region: "Malwa (South-West Punjab)",
  border: "~120km from Pakistan border",
  category: "General",
  parliamentaryConstituency: "Firozpur",
};

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

const casteComposition: CasteComposition = {
  source: "Tier 2 - PARTIALLY VERIFIED - requires constituency-level verification",
  jathSikh: "~35-40% (dominant agrarian community)",
  hinduGeneral: "~25-30%",
  scheduledCastes: "~25-28%",
  muslim: "~2-3%",
  otherBackwardClasses: "~5-7%",
  dominantCastes: ["Jat Sikhs", "Hindu Jats", "Baniya", "Brahmin"],
  obcBreakdown: "~15-18% including Saini, Kamboj, Labana",
};

const casteCompositionDeep: CasteCompositionDeep = {
  hinduMajorityUrban: "Abohar city has ~83% Hindu population",
  sikhUrban: "~16% in urban area, higher in rural parts",
  dominantCastes: ["Jat Sikhs", "Hindu Jats", "Baniya", "Brahmin"],
  obcPercentage: "~15-18%",
  obcIncludes: "Saini, Kamboj, Labana",
  scPopulation: "~25-30%",
};

const religionDistribution: ReligionDistribution = {
  source: "District level",
  sikh: "~57-60%",
  hindu: "~38-40%",
  others: "~2-3%",
};

const literacyRate: LiteracyRate = {
  district: "Fazilka District",
  rate: "~68%",
  censusYear: 2011,
};

const demographics: Demographics = {
  population: "~2,40,000",
  casteComposition,
  religionDistribution,
  literacyRate,
};

const districtDemographics: DistrictDemographics = {
  totalPopulation: "~2,40,000",
  literacyRate: "~68%",
};

const voterDemographics: VoterDemographics = {
  totalElectors2017: "159,670",
  voterTurnout: "~77-78%",
  urbanRuralMix: "Semi-urban with agricultural hinterland",
};

const voterProfile: VoterProfile = {
  turnoutAnalysis: {
    stateAverage: "72%",
    aboharEstimate: "~76-78%",
    trend: "Border areas typically show higher turnout",
  },
  voterDemographics: {
    ruralVoters: "~70-75%",
    urbanVoters: "~25-30%",
    youngVoters: "~30-35% of electorate",
  },
};

// ============================================================================
// ELECTION RESULTS
// ============================================================================

const results2022: ElectionResult2022 = {
  winner: "Sandeep Jakhar",
  party: "INC",
  partyFull: "Indian National Congress",
  voteShare: "~46% (estimated)",
  margin: "5,471 votes",
  marginVotes: 5471,
  runnerUp: "Arun Narang",
  runnerUpParty: "BJP",
  totalVotesPolled: "~156,000",
  voterTurnout: "~76-78%",
};

const results2017: ElectionResult2017 = {
  winner: "Arun Narang",
  party: "BJP",
  partyFull: "Bharatiya Janata Party",
  margin: "~35,743 votes",
  marginVotes: 35743,
  defeated: "Sunil Jakhar",
  partyDefeated: "INC",
  totalElectors: "159,670",
};

const results2012: ElectionResult2012 = {
  winner: "Not available",
  party: "",
  status: "No data from sources",
};

const electoralHistory: ElectoralHistory[] = [
  { year: 2022, winner: "Sandeep Jakhar", party: "INC", margin: "5,471 votes", verification: "Verified" },
  { year: 2017, winner: "Arun Narang", party: "BJP", margin: "~35,743 votes", verification: "Verified" },
  { year: 2012, winner: "Data not available", party: "", margin: "N/A", verification: "Needs data" },
  { year: 2007, winner: "Data not available", party: "", margin: "N/A", verification: "Needs data" },
];

const electionHistory: ElectionHistory = {
  results2022,
  results2017,
  results2012,
  historicalResults: electoralHistory,
  turnoutPattern: "~76-78% (above state average of 72%)",
  coreVoters: ["Rural voters ~70-75%", "Jat Sikh community", "Hindu urban middle-class"],
  swingFactors: ["Drug crisis response", "Agricultural distress", "AAP performance"],
};

// ============================================================================
// KEY ISSUES
// ============================================================================

const localIssues: LocalIssue[] = [
  {
    rank: 1,
    title: "Drug menace",
    description: "Malwa region including Fazilka district has been severely affected by drug addiction. Heroin and synthetic drug abuse among youth is a major concern. Seizures reported in Fazilka district.",
  },
  {
    rank: 2,
    title: "Agricultural distress",
    description: "Cotton belt issues, MSP procurement concerns, stubble management, groundwater depletion. Farmers face challenges with MSP and irrigation.",
  },
  {
    rank: 3,
    title: "Water table decline",
    description: "Irrigation challenges in border region due to water table depletion and canal water availability issues.",
  },
  {
    rank: 4,
    title: "Road infrastructure",
    description: "Connectivity to rural areas needs improvement.",
  },
  {
    rank: 5,
    title: "Employment",
    description: "Youth migration for jobs due to limited industrial development.",
  },
];

const localIssuesData: LocalIssues = {
  issues: localIssues,
};

const keyIssues: KeyIssues = {
  primaryIssues: {
    drugCrisis: "Malwa region including Fazilka district has been severely affected by drug addiction. Heroin and synthetic drug abuse among youth is a major concern.",
    agriculturalDistress: "Farmers face issues with MSP procurement, stubble management, groundwater depletion.",
    unemployment: "Limited industrial development, youth emigration for jobs.",
    waterScarcity: "Border region faces water table depletion and canal water availability issues.",
    borderAreaIssues: "Proximity to Pakistan creates unique security and smuggling-related challenges.",
  },
  attackLinesForCongress: [
    "AAP government failed to tackle drug menace despite tall promises",
    "Broken promise of Rs 1000/month to women",
    "Governance failures in health and education sectors",
  ],
};

const publicSentiment: PublicSentiment = {
  issues: localIssues,
  misinformationStatus: "needs_verification",
};

// ============================================================================
// POLITICAL PLAYERS
// ============================================================================

const currentMLA = {
  name: "Sandeep Jakhar",
  party: "Congress",
  background: "Political family - brother of former MP",
  strengths: ["Agricultural community connections", "Dynastic appeal", "Incumbent advantage"],
  incumbencyStatus: "Currently serving MLA",
};

const keyCompetitors = [
  { name: "Arun Narang", party: "BJP", status: "2017 winner, incumbent advantage lost" },
  { name: "AAP Candidate", party: "AAP", status: "Name verification needed" },
];

const politicalPlayers: PoliticalPlayers = {
  currentMLA,
  keyCompetitors,
  localInfluencers: "Village-level sarpanchs, industrialists - NEEDS VERIFICATION",
};

const congressStrategicPosition: CongressStrategicPosition = {
  currentStatus: "INC holds this seat - Sandeep Jakhar won in 2022 defeating BJP's Arun Narang",
  incumbentName: "Sandeep Jakhar",
  capitalizingOn: [
    "Anti-incumbency sentiment against AAP",
    "Agricultural community's dissatisfaction with AAP government",
    "Sandeep Jakhar's incumbency",
  ],
  needToAddress: [
    "Farmer distress and drug issues",
    "Mobilize Hindu voter base (83% in city)",
    "Retain urban professional votes",
  ],
  targetVoters: ["Rural Jat Sikh", "SC communities", "Urban youth", "Hindu urban middle-class"],
};

const candidateProfile: CandidateProfile = {
  profile: "Hindu leader with agrarian connect",
  background: "Business or agricultural community",
  keyTraits: [
    "Pro-active on drug menace",
    "Accessible to farming community",
    "Strong local connect",
  ],
  targetVoter: "Hindu urban middle-class + rural Jat votes",
};

const attackLines: AttackLine[] = [
  { line: "Drug seizures increased but addiction deaths continue" },
  { line: "Broken promise of Rs 1000/month for women" },
  { line: "Health infrastructure collapsed in rural areas" },
  { line: "No industrial growth, unemployment rose" },
  { line: "Governance failures in law and order" },
];

// ============================================================================
// GOVERNANCE & DEVELOPMENT
// ============================================================================

const developmentIndicators: DevelopmentIndicators = {
  roadConnectivity: "NEEDS VERIFICATION",
  healthcareFacilities: "District Hospital Abohar",
  educationalInstitutions: "NEEDS VERIFICATION",
  industrialDevelopment: "Limited, primarily agricultural",
};

const governanceGap: GovernanceGap = {
  serviceDelivery: {
    health: "District Hospital Abohar available but rural healthcare needs improvement",
    education: "NEEDS VERIFICATION",
    roads: "NEEDS VERIFICATION - rural connectivity issues",
    waterSanitation: "Water table decline affecting irrigation",
  },
  developmentIndicators,
};

const stateGovernmentSchemes = {
  beneficiaryData: "NEEDS VERIFICATION - beneficiary data for district",
};

// ============================================================================
// BOOTH ANALYSIS
// ============================================================================

const boothAnalysis: BoothAnalysis = {
  strongBoothProfile: {
    description: "Rural booths with Jat Sikh majority, Urban booths with mixed population",
    status: "NEEDS VERIFICATION - requires constituency data",
  },
  marginalBoothProfile: {
    description: "Requires verification - polling station data needed",
    status: "NEEDS VERIFICATION",
  },
};

// ============================================================================
// 2027 OUTLOOK
// ============================================================================

const outlook2027: Outlook2027 = {
  congressStrengths: {
    points: [
      "Sandeep Jakhar's incumbency",
      "Congress party's anti-incumbency sentiment against AAP",
      "Agricultural community's dissatisfaction with AAP government",
    ],
  },
  congressChallenges: {
    points: [
      "AAP wave still strong in Malwa",
      "Drug crisis not adequately addressed by any party",
      "Need to consolidate rural and Jat Sikh votes",
    ],
  },
  keyWinningStrategy: {
    strategies: [
      "Focus on drug crisis - hold AAP accountable",
      "Highlight broken promises (Rs 1000/month)",
      "Agricultural distress narrative",
      "Consolidate SC votes with local outreach",
      "Emphasize development work done by sitting MLA",
    ],
  },
};

// ============================================================================
// INTELLIGENCE GAPS
// ============================================================================

const intelligenceGaps: IntelligenceGap[] = [
  { item: "Exact 2022 margin of victory", verificationNeeded: "Primary source verification" },
  { item: "Complete candidate vote shares", verificationNeeded: "Detailed polling data" },
  { item: "Detailed caste composition at AC level", verificationNeeded: "Constituency-level survey" },
  { item: "Specific development indicators", verificationNeeded: "Local government data" },
  { item: "Booth-wise performance data", verificationNeeded: "Polling station records" },
  { item: "Local body election results (2022 onwards)", verificationNeeded: "State election commission" },
  { item: "Any scandals or local issues", verificationNeeded: "Local media monitoring" },
];

// ============================================================================
// DATA QUALITY
// ============================================================================

const dataSources: DataSource[] = [
  { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Abohar_Assembly_constituency" },
  { name: "IndiaVotes", url: "https://www.indiavotes.com/vidhan-sabha-details/2017/punjab/abohar/7/37276/251" },
  { name: "CNBCTV18", url: "https://www.cnbctv18.com/politics/abohar-election-result-2022-live-how-to-check-abohar-legislative-assembly-election-vidhan-sabha-winners-losers-vote-margin-news-updates-12713012.htm" },
  { name: "MyNeta", url: "https://www.myneta.info/punjab2017/index.php?action=show_winners&sort=default" },
  { name: "Web searches on Punjab 2022 election results", url: undefined },
  { name: "BBC", url: undefined },
];

const researchStatus: ResearchStatus = {
  status: "partial",
  verificationNeeded: [
    "Exact 2022 margin of victory",
    "Complete candidate vote shares",
    "Detailed caste composition at AC level",
    "Specific development indicators",
    "Booth-wise performance data",
    "Local body election results (2022 onwards)",
  ],
};

const dataQuality: DataQuality = {
  sources: dataSources,
  researchStatus,
};

// ============================================================================
// COMPLETE MAIN DOSSIER
// ============================================================================

export const ac081AboharMainDossier: AC081AboharMainDossier = {
  metadata: mainDossierMetadata,
  identity: constituencyIdentity,
  profile: constituencyProfile,
  demographics,
  casteCompositionDeep,
  religionDistribution,
  districtDemographics,
  voterDemographics,
  voterProfile,
  electionHistory,
  results2022,
  results2017,
  localIssues: localIssuesData,
  keyIssues,
  publicSentiment,
  politicalPlayers,
  congressPosition: congressStrategicPosition,
  governanceGap,
  boothAnalysis,
  outlook2027,
  intelligenceGaps: { gaps: intelligenceGaps },
  dataQuality,
};

// ============================================================================
// COMPLETE DEEP RESEARCH DOSSIER
// ============================================================================

export const ac081AboharDeepResearch: AC081AboharDeepResearch = {
  metadata: deepResearchMetadata,
  executiveSummary:
    "Abohar (AC081) is a General category assembly constituency in Fazilka district of Punjab's Malwa region, bordering Rajasthan and near the Pakistan border. The constituency has been a Congress stronghold historically but witnessed a significant shift in 2022 when AAP won the seat. Key issues include drug crisis, agricultural distress, unemployment, and water scarcity.",
  constituencyProfile: {
    basicDetails: constituencyProfile,
    borderInfo: "~120km from Pakistan border",
  },
  demographics: {
    population: "~2,40,000",
    casteComposition,
    religionDistribution,
    literacyRate,
  },
  electoralHistory: {
    table: electoralHistory,
  },
  keyIssues,
  politicalPlayers,
  voterProfile,
  governance: {
    developmentIndicators,
    stateGovernmentSchemes,
  },
  boothAnalysis,
  outlook2027,
  intelligenceGaps: { gaps: intelligenceGaps },
  recommendations: [
    "Candidate: Sandeep Jakhar - continue as nominee",
    "Primary Narrative: AAP failed on drug crisis, broken promises, and governance",
    "Target Voters: Rural Jat Sikh, SC communities, urban youth",
    "Grievance Focus: Drug addiction, unemployment, agricultural distress",
    "Booth Strategy: Focus on rural booths where Congress traditionally performs well",
  ],
  attackLines: [
    "AAP government failed to tackle drug menace despite tall promises",
    "Broken promise of Rs 1000/month to women",
    "Governance failures in health and education sectors",
  ],
};

// ============================================================================
// COMPLETE AC081 ABOHAR TYPES DATA
// ============================================================================

export const ac081AboharData: AC081AboharTypes = {
  // Identity
  identity: constituencyIdentity,
  profile: constituencyProfile,

  // Demographics
  demographics,
  casteCompositionDeep,
  religionDistribution,
  districtDemographics,
  voterDemographics,
  voterProfile,

  // Elections
  electionHistory,
  results2022,
  results2017,
  results2012,

  // Issues
  localIssues: localIssuesData,
  keyIssues,
  publicSentiment,

  // Political
  politicalPlayers,
  congressPosition: congressStrategicPosition,
  candidateRecommendation: { recommendedProfile: candidateProfile },
  attackLines: { lines: attackLines.map((a) => a.line) },

  // Governance
  governanceGap,

  // Booth
  boothAnalysis,

  // Outlook
  outlook2027,

  // Intelligence
  intelligenceGaps: { gaps: intelligenceGaps },

  // Quality
  dataQuality,
};

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type { AC081AboharTypes, AC081AboharMainDossier, AC081AboharDeepResearch };
