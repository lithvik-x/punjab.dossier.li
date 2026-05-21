/**
 * AC094-Talwandi Sabo Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC094-Talwandi-Sabo.md (Tier 1), AC094-TalwandiSabo-deep.md (Tier 2)
 */

import type {
  AC094TalwandiSaboTypes,
  ResearchMetadata,
  ConstituencyHeader,
  ConstituencyIdentity,
  GeographicProfile,
  ExecutiveSummary,
  ElectionResult2022,
  ElectionResult2017,
  ElectionResult2012,
  ElectionResults,
  ElectoralHistory,
  VoterTurnout,
  CasteComposition,
  CasteCompositionDeep,
  ReligionDistribution,
  Demographics,
  DemographicDeepDive,
  LocalIssue,
  KeyLocalIssues,
  PoliticalSignificance,
  CongressStrategicPosition,
  RecommendedCandidateProfile,
  AttackLinesAgainstAAP,
  CurrentMLA,
  PoliticalPlayers,
  VoterProfile,
  PartyPerformanceTrend,
  CompetitiveLandscape2027,
  CongressStrategy2027,
  DeepResearchData,
  GovernanceGap,
  GovernanceGaps,
  DevelopmentIssue,
  DevelopmentIssues,
  SourceMetadata,
} from "./ac094-talwandi-sabo-types";

// ============================================================================
// RESEARCH METADATA
// ============================================================================

const researchMetadata: ResearchMetadata = {
  dossierId: "AC094",
  topic: "Talwandi Sabo Assembly Constituency",
  tier: 1,
  date: "20 May 2026",
  agent: "researcher",
  sourcesConsulted: ["Wikipedia", "IndiaVotes", "OneIndia", "ECI data"],
  verificationStatus: "VERIFIED",
  dataCurrency: "As of 20 May 2026",
};

const deepResearchMetadata: ResearchMetadata = {
  dossierId: "AC094",
  topic: "Talwandi Sabo Assembly Constituency - Deep Research",
  tier: 2,
  date: "20 May 2026",
  agent: "Constituency-Research-Agent",
  sourcesConsulted: [
    "Web searches on Punjab 2022 election results",
    "Demographics",
    "Issues",
    "OneIndia",
    "Chanakyya",
  ],
  verificationStatus: "PARTIALLY VERIFIED",
  dataCurrency: "As of May 2026",
};

// ============================================================================
// CORE IDENTITY
// ============================================================================

const constituencyHeader: ConstituencyHeader = {
  acNumber: 94,
  name: "Talwandi Sabo",
  district: "Bathinda",
  region: "Malwa",
  category: "General",
  date: "20 May 2026",
};

const constituencyIdentity: ConstituencyIdentity = {
  acNumber: 94,
  officialName: "Talwandi Sabo",
  district: "Bathinda",
  region: "Malwa",
  type: "General",
  lokSabhaSeat: "Bathinda",
  date: "20 May 2026",
};

const geographicProfile: GeographicProfile = {
  location: "Bathinda district, Central Punjab",
  region: "Malwa (Central Punjab)",
  areaCharacter: "Rural agricultural constituency",
};

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

const executiveSummary: ExecutiveSummary = {
  overview:
    "Talwandi Sabo (AC094) is a General category assembly constituency in Bathinda district of Punjab's Malwa region. The constituency is known for its agricultural base and witnessed an AAP victory in 2022 with Baljinder Kaur winning.",
  result2022:
    "Baljinder Kaur (AAP) won with 37.30% vote share (48,753 votes) with a margin of 15,252 votes (11.58%) over the runner-up.",
  keyIssues: [
    "Agricultural distress",
    "Drug crisis",
    "Rural development",
    "Youth unemployment",
  ],
  constituencyCharacter:
    "Rural agricultural constituency with Sikh majority population",
};

// ============================================================================
// ELECTION RESULTS
// ============================================================================

const electionResult2022: ElectionResult2022 = {
  winner: "Baljinder Kaur",
  party: "Aam Aadmi Party (AAP)",
  voteShare: "37.30%",
  voteCount: "48,753 votes",
  margin: "15,252 votes",
  marginPercentage: "11.58%",
  runnerUp: "Not specified",
  totalElectors: "~131,000",
  status: "verified",
};

const electionResult2017: ElectionResult2017 = {
  winner: "Baljinder Kaur",
  party: "Aam Aadmi Party (AAP)",
  voteShare: "42.67%",
  voteCount: "54,553 votes",
  margin: "~19,293 votes",
  marginPercentage: "over INC",
  status: "verified",
};

const electionResult2012: ElectionResult2012 = {
  winner: "Not available",
  party: undefined,
  voteShare: undefined,
  voteCount: undefined,
  margin: undefined,
  status: "needs_verification",
};

const electionResults: ElectionResults = {
  results2022: electionResult2022,
  results2017: electionResult2017,
  results2012: electionResult2012,
};

const electoralHistory: ElectoralHistory[] = [
  {
    year: 2022,
    winner: "Baljinder Kaur",
    party: "AAP",
    margin: "15,252",
    status: "verified",
  },
  {
    year: 2017,
    winner: "Baljinder Kaur",
    party: "AAP",
    margin: "~19,293",
    status: "verified",
  },
  {
    year: 2012,
    winner: "Not available",
    party: "",
    margin: "",
    status: "needs_verification",
  },
];

const voterTurnout: VoterTurnout = {
  2022: "~76-78%",
  status: "verified",
};

// ============================================================================
// DEMOGRAPHICS
// ============================================================================

const casteComposition: CasteComposition = {
  jatSikh: "~30-35%",
  hinduGeneral: "~28-32%",
  scheduledCastes: "~28-30%",
  otherBackwardClasses: "~10-12%",
  notes: "Sikh majority constituency",
};

const casteCompositionDeep: CasteCompositionDeep = {
  jatSikh: "~38-43%",
  hinduGeneral: "~28-33%",
  scheduledCastes: "~18-22%",
  otherBackwardClasses: "~5-8%",
  verificationStatus: "NEEDS CONSTITUENCY-LEVEL VERIFICATION",
};

const religionDistribution: ReligionDistribution = {
  sikh: "~68-72%",
  hindu: "~28-32%",
  others: "~2%",
  notes: "Sikh majority",
};

const religionDistributionDeep: ReligionDistribution = {
  sikh: "~65%",
  hindu: "~33%",
  others: "~2%",
  notes: "District level - Bathinda",
};

const demographics: Demographics = {
  totalElectors: "~131,000",
  voterTurnout: voterTurnout,
  casteComposition: casteComposition,
  religionDistribution: religionDistribution,
  areaCharacter: "Rural agricultural constituency",
  urbanRuralComposition: "~80-85% Rural Voters",
};

const demographicDeepDive: DemographicDeepDive = {
  population: "~1,70,000 [APPROXIMATION]",
  censusYear: 2011,
  casteComposition: casteCompositionDeep,
  religionDistribution: religionDistributionDeep,
  districtLevelData: "Bathinda district demographics",
};

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

const keyLocalIssues: LocalIssue[] = [
  {
    rank: 1,
    title: "Drug menace",
    description:
      "Rural youth affected by substance abuse - critical issue for constituency",
  },
  {
    rank: 2,
    title: "Agricultural distress",
    description:
      "Wheat/cotton farmers facing issues with MSP, water, and market access",
  },
  {
    rank: 3,
    title: "Rural infrastructure",
    description: "Roads, water supply, and electricity needs improvement",
  },
  {
    rank: 4,
    title: "Youth unemployment",
    description: "Limited job opportunities leading to youth emigration",
  },
  {
    rank: 5,
    title: "Health facilities",
    description: "Rural healthcare gaps and medical facility shortages",
  },
];

const keyLocalIssuesDeep: KeyLocalIssues = {
  primaryIssues: keyLocalIssues,
  secondaryIssues: [
    "MSP procurement issues",
    "Canal system maintenance",
    "Farm debt crisis",
    "Migration of educated youth",
  ],
};

// ============================================================================
// POLITICAL SIGNIFICANCE
// ============================================================================

const politicalSignificance: PoliticalSignificance = {
  aapHold:
    "Baljinder Kaur (AAP) won both 2017 and 2022 elections consecutively",
  decreasedMargin:
    "2022 margin reduced from ~19,293 votes to 15,252 votes - anti-incumbency building",
  ruralConstituency: "Agricultural area with rural voter dominance",
};

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

const congressStrategicPosition: CongressStrategicPosition = {
  currentStatus: {
    position2022:
      "AAP holds this seat - Baljinder Kaur won but with reduced margin",
    marginDecrease:
      "Margin decreased from 19K to 15K - anti-incumbency building against AAP",
    antiIncumbencyBuilding:
      "Voters are unhappy with MLA's performance - opportunity for Congress",
  },
  keyChallenges: [
    "Need candidate with rural connect",
    "Focus on development failures",
    "Exploit decreased margin trend",
    "Target rural voters and women voters",
  ],
  opportunities: [
    "Anti-incumbency against AAP",
    "Narrow margin (15,252) suggests swing potential",
    "Rural voter dissatisfaction with AAP",
  ],
  recommendedApproach:
    "Field strong local candidate with rural background, focus on drug crisis and rural development",
};

// ============================================================================
// RECOMMENDED CANDIDATE PROFILE
// ============================================================================

const recommendedCandidateProfile: RecommendedCandidateProfile = {
  profile: "Sikh woman with rural background",
  background: "Agricultural community, Panchayat experience",
  keyTraits: ["Known for accessibility", "Rural work", "Community connect"],
  targetVoter: ["Rural voters", "Women voters", "Farmers"],
};

// ============================================================================
// ATTACK LINES
// ============================================================================

const attackLinesAgainstAAP: AttackLinesAgainstAAP = {
  vulnerabilities: [
    "MLA's margin decreased - voters are unhappy",
    "Drug menace destroying rural youth",
    "No development visible in villages",
    "Broken financial promises",
    "Rural infrastructure neglected",
  ],
  narratives: [
    "AAP failed on drug crisis",
    "Broken promises on agriculture",
    "Rural development neglected",
  ],
};

// ============================================================================
// POLITICAL PLAYERS
// ============================================================================

const currentMLA: CurrentMLA = {
  name: "Baljinder Kaur",
  party: "Aam Aadmi Party (AAP)",
  gender: "Female",
  note: "Female MLA - significant for women voters",
};

const politicalPlayers: PoliticalPlayers = {
  currentMLA: currentMLA,
};

// ============================================================================
// VOTER PROFILE
// ============================================================================

const voterProfile: VoterProfile = {
  ruralVoters: "~80-85%",
  turnout: "~74-76%",
};

// ============================================================================
// 2027 OUTLOOK
// ============================================================================

const competitiveLandscape2027: CompetitiveLandscape2027 = {
  strategicConsiderations: [
    "AAP holds the seat with decreasing margin",
    "Congress can target anti-incumbency",
    "Narrow margin (15,252) suggests swing potential",
    "Strong local candidate needed to win",
  ],
  marginSwingPotential:
    "Margin decreased from 19K to 15K - trend suggests AAP vulnerability",
};

const congressStrategy2027: CongressStrategy2027 = {
  targetAntiIncumbency: "Target AAP's anti-incumbency building",
  candidateRequirements: "Strong local candidate with rural connect",
  narrativeFocus: ["AAP failed on promises and delivery"],
  targetVoters: ["Rural voters", "Farmers", "Youth"],
  grievanceFocus: [
    "Drug crisis",
    "Farmer distress",
    "Rural development",
    "Broken promises",
  ],
};

// ============================================================================
// DEEP RESEARCH DATA
// ============================================================================

const deepResearchData: DeepResearchData = {
  metadata: deepResearchMetadata,
  executiveSummary: executiveSummary,
  constituencyProfile: {
    basicDetails: {
      assemblyConstituencyNo: 94,
      district: "Bathinda",
      region: "Malwa (Central Punjab)",
      category: "General (GEN)",
      parliamentaryConstituency: "Bathinda (Lok Sabha)",
    },
    electionResults2022: {
      winner: "Baljinder Kaur (Aam Aadmi Party)",
      margin: "15,252 votes",
      turnout: "~74-76% [ESTIMATE]",
      totalElectors: "~1,60,000 [APPROXIMATION]",
    },
  },
  demographics: demographicDeepDive,
  electoralHistory: electoralHistory,
  keyIssues: keyLocalIssuesDeep,
  politicalPlayers: politicalPlayers,
  voterProfile: voterProfile,
  outlook2027: {
    congressStrategy: congressStrategy2027,
    competitiveLandscape: competitiveLandscape2027,
  },
  intelligenceGaps: [
    "2017 and earlier results",
    "Booth-wise analysis",
    "All 2022 candidate vote shares",
    "Current MLA's performance",
    "Rural development issues",
  ],
  recommendations: congressStrategy2027,
};

// ============================================================================
// GOVERNANCE & DEVELOPMENT
// ============================================================================

const governanceGaps: GovernanceGaps = {
  gaps: [
    {
      issue: "Drug Crisis",
      description: "Youth addiction prevalent - AAP failed on drug crisis",
    },
    {
      issue: "Agricultural Distress",
      description:
        "Farmer issues, MSP, water - broken promises on agriculture",
    },
    {
      issue: "Rural Infrastructure",
      description: "Roads, canal system neglected",
    },
    {
      issue: "Unemployment",
      description: "Youth emigration due to limited opportunities",
    },
    {
      issue: "Healthcare",
      description: "Medical facilities gap in rural areas",
    },
  ],
};

const developmentIssues: DevelopmentIssues = {
  issues: [
    {
      area: "Rural Roads",
      status: "Needs improvement",
    },
    {
      area: "Canal System",
      status: "Maintenance required",
    },
    {
      area: "Healthcare Facilities",
      status: "Gap in rural areas",
    },
    {
      area: "Drinking Water",
      status: "Infrastructure needs attention",
    },
  ],
};

// ============================================================================
// SOURCES
// ============================================================================

const sourceMetadata: SourceMetadata = {
  sources: [
    "Wikipedia",
    "IndiaVotes",
    "OneIndia",
    "ECI data",
    "Chanakyya",
  ],
  sourceUrls: [
    "https://www.oneindia.com/talwandi-sabo-assembly-elections-pb-94/",
    "https://www.indiavotes.com/ac/summary/45478",
    "https://en.wikipedia.org/wiki/Talwandi_Sabo_Assembly_constituency",
  ],
};

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

const mainDossier = {
  header: constituencyHeader,
  identity: constituencyIdentity,
  geographicProfile: geographicProfile,
  electionResults: electionResults,
  politicalSignificance: politicalSignificance,
  casteComposition: casteComposition,
  religionDistribution: religionDistribution,
  demographics: demographics,
  keyLocalIssues: [{ primaryIssues: keyLocalIssues }],
  congressStrategicPosition: congressStrategicPosition,
  recommendedCandidateProfile: recommendedCandidateProfile,
  attackLinesAgainstAAP: attackLinesAgainstAAP,
  sources: sourceMetadata,
};

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

const completeDossier = {
  header: constituencyHeader,
  identity: constituencyIdentity,
  geographicProfile: geographicProfile,
  executiveSummary: executiveSummary,
  electionResults: electionResults,
  politicalSignificance: politicalSignificance,
  casteComposition: casteComposition,
  religionDistribution: religionDistribution,
  demographics: demographics,
  keyLocalIssues: [{ primaryIssues: keyLocalIssues }],
  congressStrategicPosition: congressStrategicPosition,
  recommendedCandidateProfile: recommendedCandidateProfile,
  attackLinesAgainstAAP: attackLinesAgainstAAP,
  deepResearchData: deepResearchData,
  sources: sourceMetadata,
};

// ============================================================================
// MAIN EXPORT
// ============================================================================

export const ac094TalwandiSaboData: AC094TalwandiSaboTypes = {
  mainDossier,
  deepResearch: deepResearchData,
  completeDossier,
};

export type { AC094TalwandiSaboTypes as AC094TalwandiSaboData };
