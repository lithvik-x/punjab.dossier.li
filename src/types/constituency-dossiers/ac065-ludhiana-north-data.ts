/**
 * AC065-Ludhiana North Constituency Dossier Data
 * Generated through 6-cycle enhancement pipeline
 * Source files: AC065-Ludhiana-North.md, AC065-LudhianaNorth-deep.md
 * 100% token-by-token coverage of both source files
 */

import type {
  AC065LudhianaNorthTypes,
  ConstituencyHeader,
  ConstituencyIdentity,
  ConstituencyProfile,
  ExecutiveSummary,
  GeographicProfile,
  BorderStatus,
  ElectionHistory,
  DeepElectoralHistory,
  VoteShareAnalysis,
  VoterEcosystem,
  CasteComposition,
  DemographicDeepDive,
  KeyLocalIssues,
  LocalIssuesGrievances,
  CongressStrategicPosition,
  CongressStrategicBlueprint,
  GovernanceAudit,
  InfluencersPowerStructure,
  AapVulnerabilityAnalysis,
  RecommendedCandidateProfile,
  CandidateRecommendation,
  AttackLinesAgainstAAP,
  CongressGapAnalysis,
  PriorityRanking,
  VoteShareProjection2027,
  DeepResearch,
  ResearchMetadata,
  MainDossierData,
  DataQuality,
} from './ac065-ludhiana-north-types';

// ============================================================================
// IDENTITY & HEADER
// ============================================================================

const header: ConstituencyHeader = {
  acNumber: 65,
  name: "Ludhiana North",
  district: "Ludhiana",
  region: "Malwa",
  category: "General",
  date: "20 May 2026",
};

const identity: ConstituencyIdentity = {
  acNo: "65",
  name: "Ludhiana North",
  district: "Ludhiana",
  region: "Malwa",
  category: "General",
  lokSabhaSeat: "Ludhiana",
  character: "Urban-rural mix, peri-urban",
  borderStatus: "Not border district",
};

const profile: ConstituencyProfile = {
  acNumber: "65",
  officialName: "Ludhiana North",
  district: "Ludhiana",
  region: "Malwa",
  category: "General",
  lokSabhaSeat: "Ludhiana",
  character: "Urban-rural mix with significant peri-urban areas",
};

// ============================================================================
// EXECUTIVE SUMMARY
// ============================================================================

const executiveSummary: ExecutiveSummary = {
  overview:
    "Ludhiana North (AC065) is a General category assembly constituency in Ludhiana district, Malwa region of Punjab. AAP won this seat in 2022 with Madan Lall Bagga by a margin of 15,282 votes. Congress historically strong in this seat.",
  winner: "Madan Lall Bagga",
  party: "Aam Aadmi Party (AAP)",
  runnerUp: "Congress candidate",
  margin: 15282,
  urbanVoterDynamics: "Urban-rural mix with significant peri-urban areas makes this a competitive seat",
  congressChallenge: "AAP's wave carried this seat in 2022",
  congressRecovery: "The moderate margin and traditional Congress base make this a realistic recovery target for 2027",
  competitiveSeat: "Urban-rural mix makes this competitive",
  traditionalCongressBase: "Congress historically strong, base persists",
  recoveryTarget2027: "Realistic with correct candidate and booth-level focus",
};

// ============================================================================
// GEOGRAPHIC PROFILE
// ============================================================================

const geographicProfile: GeographicProfile = {
  mixOfUrbanCoreAndRural: true,
  significantPeriUrbanAreas: true,
  villagesTransitioningToUrban: true,
  northLudhianaDevelopmentZone: true,
  borderStatus: "Not border district",
};

const borderStatus: BorderStatus = {
  isBorderDistrict: false,
};

// ============================================================================
// ELECTION HISTORY
// ============================================================================

const electionHistory: ElectionHistory = {
  result2022: {
    winner: "Madan Lall Bagga",
    party: "AAP",
    margin: 15282,
    marginVotes: 15282,
    defeated: "Congress candidate",
    note: "AAP breakthrough in 2022",
  },
  historicalContext:
    "Congress historically strong in this seat. AAP breakthrough in 2022. Pattern similar to other Ludhiana urban seats. Traditional Congress voter base persists.",
  congressHistoricallyStrong: "Congress historically strong in this seat",
  aapBreakthrough2022: "AAP breakthrough in 2022",
  patternSimilarToOtherLudhianaSeats:
    "Pattern similar to other Ludhiana urban seats",
  traditionalCongressVoterBasePersists: "Traditional Congress voter base persists",
  keyTrend: "From Congress to AAP in 2022",
};

const deepElectoralHistory: DeepElectoralHistory = {
  election2022: [
    {
      candidate: "Madan Lall Bagga",
      party: "AAP",
      votes: "TBD",
      voteShare: "~38%",
      margin: "15,282",
    },
    {
      candidate: "Congress",
      party: "INC",
      votes: "TBD",
      voteShare: "~33%",
      margin: "Runner-up",
    },
    {
      candidate: "Others",
      party: "-",
      votes: "-",
      voteShare: "~29%",
      margin: "-",
    },
  ],
  election2017: {
    winner: "Likely Congress win",
    pattern: "Congress traditionally held this seat",
  },
  election2012: {
    winner: "Congress pattern",
    pattern: "Congress historically strong",
  },
  historicalTrendAnalysis:
    "2017: Likely Congress win. 2022: AAP Win (15,282). Margin: 15,282 (RECOVERABLE)",
  historicalTrend: [
    {
      year: 2017,
      party: "Congress",
      result: "Win",
      note: "Likely Congress win",
    },
    {
      year: 2022,
      party: "AAP",
      result: "Win",
      note: "15,282 margin",
    },
  ],
};

// ============================================================================
// VOTE SHARE ANALYSIS
// ============================================================================

const voteShareAnalysis: VoteShareAnalysis = {
  parties2022: [
    { party: "AAP", voteShare: "~38%", votesEstimated: "~58,000" },
    { party: "INC", voteShare: "~33%", votesEstimated: "~50,000" },
    { party: "BJP", voteShare: "~12%", votesEstimated: "~18,000" },
    { party: "SAD", voteShare: "~8%", votesEstimated: "~12,000" },
    { party: "Others", voteShare: "~9%", votesEstimated: "~14,000" },
  ],
  congressGapAnalysis:
    "Votes needed: ~7,600 additional. Half margin: Achievable. Traditional base: Key asset.",
  votesNeeded: "~7,600 additional votes needed",
  halfMargin: "7,641 votes (half of 15,282)",
  marginDataStatus: "Estimated based on 2022 results",
};

// ============================================================================
// VOTER ECOSYSTEM
// ============================================================================

const voterEcosystem: VoterEcosystem = {
  electorateData2022: {
    totalElectors: "~1,70,000+",
    voterTurnout: "~65-70%",
  },
  voterTurnoutTrend: [
    {
      year: "2022",
      turnoutPercentage: "~65-70%",
      notes: "Moderate",
    },
    {
      year: "2017",
      turnoutPercentage: "~70%",
      notes: "Consistent",
    },
  ],
};

// ============================================================================
// CASTE COMPOSITION
// ============================================================================

const casteComposition: CasteComposition = {
  categories: [
    { category: "SC", estimatedPercentage: "25-30%", notes: "Significant" },
    {
      category: "Upper Castes",
      estimatedPercentage: "30-35%",
      notes: "Khatri, Arora, Jats",
    },
    { category: "OBC", estimatedPercentage: "25-30%", notes: "Significant" },
    {
      category: "Jat Sikh",
      estimatedPercentage: "Present",
      notes: "In village areas",
    },
    {
      category: "Mixed Population",
      estimatedPercentage: "Significant",
      notes: "Urban core + rural periphery",
    },
  ],
  keyDemographics: [
    "Khatri/Arora in old city areas",
    "Jat Sikh in village areas",
    "SC communities in rural and slum areas",
    "OBC in semi-urban areas",
  ],
};

const demographicDeepDive: DemographicDeepDive = {
  populationComposition: [
    { category: "Mixed Population", estimatedPercentage: "Significant", notes: "Urban core + rural" },
    { category: "SC", estimatedPercentage: "25-30%", notes: "Significant" },
    { category: "Upper Castes", estimatedPercentage: "30-35%", notes: "Khatri, Arora, Jats" },
    { category: "OBC", estimatedPercentage: "25-30%", notes: "Significant" },
    { category: "Jat Sikh", estimatedPercentage: "Present", notes: "In villages" },
  ],
  keyCommunities: [
    { community: "Khatri/Arora", location: "Old city areas" },
    { community: "Jat Sikh", location: "Village areas" },
    { community: "SC communities", location: "Rural and slum areas" },
    { community: "OBC", location: "Semi-urban areas" },
  ],
};

// ============================================================================
// KEY LOCAL ISSUES
// ============================================================================

const keyLocalIssues: KeyLocalIssues = {
  issues: [
    {
      rank: 1,
      title: "Urban Infrastructure",
      description: "North Ludhiana development",
      subIssues: [
        "Peri-urban infrastructure gaps",
        "Road and drainage",
      ],
    },
    {
      rank: 2,
      title: "Peri-urban Issues",
      description: "Rapid urbanization challenges",
      subIssues: [
        "Encroachment problems",
        "Planning violations",
      ],
    },
    {
      rank: 3,
      title: "Drug Menace",
      description: "Youth addiction crisis",
      subIssues: [
        "Rural and urban interface",
        "Family devastation",
      ],
    },
    {
      rank: 4,
      title: "Agricultural Distress",
      description: "Farm sector issues",
      subIssues: [
        "MSP procurement",
        "Land acquisition",
      ],
    },
    {
      rank: 5,
      title: "Water Table & Connectivity",
      description: "Groundwater depletion concerns",
      subIssues: [
        "Road infrastructure gaps",
        "Rural connectivity",
      ],
    },
    {
      rank: 6,
      title: "Water Table",
      description: "Depletion concerns",
    },
  ],
};

const localIssuesGrievances: LocalIssuesGrievances = {
  top5IssuesPriorityOrder: [
    {
      rank: 1,
      title: "Urban Infrastructure",
      description: "North Ludhiana development, Peri-urban infrastructure gaps, Road and drainage",
      subIssues: [
        "North Ludhiana development",
        "Peri-urban infrastructure gaps",
        "Road and drainage",
      ],
    },
    {
      rank: 2,
      title: "Peri-urban Issues",
      description: "Rapid urbanization challenges, Encroachment problems, Planning violations",
      subIssues: [
        "Rapid urbanization challenges",
        "Encroachment problems",
        "Planning violations",
      ],
    },
    {
      rank: 3,
      title: "Drug Menace",
      description: "Youth addiction crisis, Rural and urban interface, Family devastation",
      subIssues: [
        "Youth addiction crisis",
        "Rural and urban interface",
        "Family devastation",
      ],
    },
    {
      rank: 4,
      title: "Agricultural Distress",
      description: "Farm sector issues, MSP procurement, Land acquisition",
      subIssues: [
        "Farm sector issues",
        "MSP procurement",
        "Land acquisition",
      ],
    },
    {
      rank: 5,
      title: "Water Table & Connectivity",
      description: "Groundwater depletion, Road infrastructure gaps, Rural connectivity",
      subIssues: [
        "Groundwater depletion",
        "Road infrastructure gaps",
        "Rural connectivity",
      ],
    },
  ],
};

// ============================================================================
// CONGRESS STRATEGIC POSITION
// ============================================================================

const congressStrategicPosition: CongressStrategicPosition = {
  currentStatus: {
    result2022: "Lost by 15,282 votes",
    margin: "15,282",
    challenge: "Recovering this traditional Congress seat",
    analysis: "AAP's wave carried this seat",
  },
  strategyRequirements: [
    "Strong local candidate",
    "Booth-level organization revival",
    "Caste-community consolidation",
    "Local issues vs national narrative",
  ],
  opportunities: [
    "AAP government performance under scrutiny",
    "Congress organizational base still exists",
    "Local MLA's performance will be key factor",
    "Potential consolidation of non-AAP votes",
  ],
  boothLevelOrganizingIsParamount:
    "Booth-level organizing is paramount",
  casteCommunityMath: "Caste-community math crucial",
};

const congressStrategicBlueprint: CongressStrategicBlueprint = {
  currentPosition: {
    result2022: "Lost by 15,282 votes",
    opportunity: "Traditional Congress base",
    margin: "7,600 additional votes needed",
    challenge: "AAP's wave carried this seat",
  },
  winningStrategy: {
    phase1: {
      timeframe: "3-6 months",
      activities: [
        "Traditional Voter Activation: Congress family networks, Booth-level workers, Caste-community consolidation",
        "Drug Crisis Campaign: #1 issue in voter outreach, AAP's failure highlighted, Family devastation narrative",
        "Peri-urban Issues Focus: Urban-rural transition problems, North Ludhiana development, Infrastructure gaps",
        "Candidate Selection: Strong local candidate, Urban-rural connect, Age: 45-55 years",
      ],
    },
  },
  traditionalVoterActivation: {
    congressFamilyNetworks: "Congress family networks",
    boothLevelWorkers: "Booth-level workers",
    casteCommunityConsolidation: "Caste-community consolidation",
  },
  drugCrisisCampaign: {
    priority: "#1 issue in voter outreach",
    narrative: "AAP's failure highlighted, Family devastation narrative",
  },
  periUrbanIssuesFocus: {
    urbanRuralTransitionProblems: "Urban-rural transition problems",
    northLudhianaDevelopment: "North Ludhiana development",
    infrastructureGaps: "Infrastructure gaps",
  },
  candidateSelection: {
    criteria: [
      "Strong local candidate",
      "Urban-rural connect",
      "Age: 45-55 years",
    ],
  },
};

// ============================================================================
// GOVERNANCE AUDIT
// ============================================================================

const governanceAudit: GovernanceAudit = {
  administrativeStructure: {
    district: "Ludhiana",
    dc: "Ludhiana District Collector",
    mc: "Ludhiana Municipal Corporation (partial)",
    mla: "Madan Lall Bagga",
    mlaParty: "AAP",
    mlaTenure: "2022-present",
  },
  mlaPerformance: {
    name: "Madan Lall Bagga",
    party: "AAP",
    background: "Won decisively in 2022",
    performance: "Mixed performance reviews",
    accessibilityConcerns: "Accessibility concerns raised",
  },
};

// ============================================================================
// INFLUENCERS & POWER STRUCTURE
// ============================================================================

const influencersPowerStructure: InfluencersPowerStructure = {
  politicalInfluencers: [
    {
      name: "Madan Lall Bagga",
      party: "AAP",
      position: "AAP MLA",
      description: "Won decisively in 2022 with 15,282 margin. Mixed reviews on performance. Local influence.",
      attributes: [
        "Won decisively in 2022",
        "Mixed reviews on performance",
        "Local influence",
      ],
    },
    {
      name: "Congress Leaders",
      party: "INC",
      position: "Traditional organizational base",
      description: "Historically strong organizational base. Looking for comeback in 2027.",
      attributes: [
        "Traditional organizational base",
        "Historically strong here",
        "Looking for comeback",
      ],
    },
    {
      name: "BJP/SAD Leaders",
      party: "BJP/SAD",
      position: "Third position",
      description: "Third position with potential coalition partner. Hindu voter base.",
      attributes: [
        "Third position",
        "Potential coalition partner",
        "Hindu voter base",
      ],
    },
  ],
};

// ============================================================================
// AAP VULNERABILITY ANALYSIS
// ============================================================================

const aapVulnerabilityAnalysis: AapVulnerabilityAnalysis = {
  whyAapVulnerable: {
    reasons: [
      "Moderate Margin: 15,282 shows voter uncertainty",
      "Traditional Congress Area: Base persists",
      "Drug Crisis: No visible improvement",
      "Local MLA: Performance under scrutiny",
    ],
  },
  aapWeakPoints: {
    points: [
      {
        issue: "Drug crisis",
        aapPromise: "End addiction",
        currentStatus: "Worsening",
        voterSentiment: "ANGRY",
      },
      {
        issue: "Local issues",
        aapPromise: "MLA accessibility",
        currentStatus: "Concerns raised",
        voterSentiment: "FRUSTRATED",
      },
      {
        issue: "Infrastructure",
        aapPromise: "Development",
        currentStatus: "Neglected",
        voterSentiment: "ANGRY",
      },
      {
        issue: "Employment",
        aapPromise: "Jobs",
        currentStatus: "Limited",
        voterSentiment: "DISAPPOINTED",
      },
    ],
  },
};

// ============================================================================
// CANDIDATE PROFILE
// ============================================================================

const recommendedCandidateProfile: RecommendedCandidateProfile = {
  table: [
    { attribute: "Caste", idealProfile: "Jat Sikh or Khatri-Arora with base" },
    { attribute: "Background", idealProfile: "Congress family with worker network" },
    { attribute: "Age", idealProfile: "45-55 years" },
    { attribute: "Connect", idealProfile: "Mix of urban and rural" },
    { attribute: "Network", idealProfile: "Booth-level organization" },
    { attribute: "Quality", idealProfile: "Local issues champion" },
  ],
  keySelectionCriteria: [
    "Booth-level worker network",
    "Community leader support",
    "Financial resources for campaign",
    "Local issues champion",
  ],
};

const candidateRecommendation: CandidateRecommendation = {
  idealCandidateProfile: [
    { attribute: "Caste", requirement: "Jat Sikh or Khatri-Arora with base" },
    { attribute: "Profile", requirement: "Mix of urban and rural connect" },
    { attribute: "Background", requirement: "Congress family with worker network" },
    { attribute: "Priority", requirement: "Ability to mobilize across communities" },
    { attribute: "Network", requirement: "Booth-level worker network" },
    { attribute: "Resources", requirement: "Community leader support, Financial resources for campaign" },
    { attribute: "Quality", requirement: "Local issues champion" },
  ],
  priorityApproach: [
    "Booth organization revival",
    "Drug crisis as #1 issue",
    "Traditional Congress base",
    "Candidate with personal vote",
  ],
};

// ============================================================================
// ATTACK LINES
// ============================================================================

const attackLines: AttackLinesAgainstAAP = {
  vulnerabilities: [
    {
      rank: 1,
      title: "Drug Crisis",
      description: "Continued despite tall claims",
    },
    {
      rank: 2,
      title: "Governance",
      description: "Local issues unresolved",
    },
    {
      rank: 3,
      title: "Broken Promises",
      description: "Rs 1000/month not delivered",
    },
    {
      rank: 4,
      title: "Unemployment",
      description: "Youth still waiting for jobs",
    },
    {
      rank: 5,
      title: "Agricultural Crisis",
      description: "Farmers' issues ignored",
    },
  ],
  congressNarrative: [
    "Madan Bagga: 5 years, only headlines no development",
    "Congress will restore real development",
    "Your vote matters: Change AAP's misgovernance",
  ],
};

// ============================================================================
// 2027 PROJECTION
// ============================================================================

const congressGapAnalysis: CongressGapAnalysis = {
  margin: "15,282",
  votesNeeded: "~7,600 additional votes needed",
  halfMargin: "7,641 votes (half of 15,282)",
  traditionalBase: "Key asset",
};

const priorityRanking: PriorityRanking = {
  tier: "TIER 1",
  priorityLevel: "HIGH PRIORITY",
  description: "AC065 Ludhiana North: 15,282 margin",
  margin: "15,282 (moderate)",
  relatedSeats: [
    {
      acNumber: "AC065",
      name: "Ludhiana North",
      margin: "15,282",
    },
    {
      acNumber: "AC059",
      name: "Sahnewal",
      margin: "15,193",
    },
    {
      acNumber: "AC051",
      name: "Chamkaur Sahib",
      margin: "7,942",
      note: "BEST",
    },
  ],
};

const voteShareProjection2027: VoteShareProjection2027 = {
  voteShare2022: voteShareAnalysis.parties2022,
  gapAnalysis: congressGapAnalysis,
  projection: priorityRanking,
  tier1HighPriority:
    "AC065 Ludhiana North: 15,282 margin, Traditional Congress base, Drug crisis as differentiator",
};

// ============================================================================
// DEEP RESEARCH
// ============================================================================

const researchMetadata: ResearchMetadata = {
  microTaskId: "AC065-DEEP",
  topic: "Ludhiana North Assembly Constituency Deep Research",
  tier: "2",
  date: "20 May 2026",
  agent: "Orchestrator-Research",
  sourcesConsulted: "minimax-web-search",
  verificationStatus: "VERIFIED",
  dataCurrency: "As of 20 May 2026",
};

const deepResearch: DeepResearch = {
  metadata: researchMetadata,
  constituencyIdentity: identity,
  geographicProfile: geographicProfile,
  electoralHistory: deepElectoralHistory,
  demographics: demographicDeepDive,
  voterEcosystem: voterEcosystem,
  localIssues: localIssuesGrievances,
  governanceAudit: governanceAudit,
  influencersPowerStructure: influencersPowerStructure,
  aapVulnerabilityAnalysis: aapVulnerabilityAnalysis,
  congressStrategicBlueprint: congressStrategicBlueprint,
  candidateRecommendation: candidateRecommendation,
  voteShareProjection2027: voteShareProjection2027,
};

// ============================================================================
// MAIN DOSSIER DATA
// ============================================================================

const mainDossierData: MainDossierData = {
  header: header,
  constituencyOverview:
    "Ludhiana North (AC 65) is a general category assembly constituency in Ludhiana district, Malwa region. Part of Ludhiana Lok Sabha constituency. Urban-rural mix with significant peri-urban areas.",
  electionHistory: electionHistory,
  voteShareAnalysis: voteShareAnalysis,
  casteComposition: casteComposition,
  keyLocalIssues: keyLocalIssues,
  congressStrategicPosition: congressStrategicPosition,
  recommendedCandidateProfile: recommendedCandidateProfile,
  attackLines: attackLines,
  notes: [
    "Congress must work to regain this seat",
    "15,282 margin is recoverable with effort",
    "Booth-level organizing is paramount",
    "Caste-community math crucial",
  ],
  congressMustWork: "Congress must work to regain this seat",
  boothLevelOrganizing:
    "Booth-level organizing is paramount",
  marginRecoverable: "15,282 margin is recoverable with effort",
};

// ============================================================================
// DATA QUALITY
// ============================================================================

const dataQuality: DataQuality = {
  sources: ["News18", "OneIndia", "IndiaVotes"],
  compiledDate: "20 May 2026",
  verificationStatus: {
    status: "VERIFIED",
    notes: [
      "Research Micro-Task ID: AC065-DEEP",
      "Verification Status: VERIFIED",
      "Data Currency: As of 20 May 2026",
    ],
  },
  dataCurrency: "As of 20 May 2026",
  researchStatus: "IMMEDIATE BOOTH ORGANIZATION REQUIRED",
  status: "IMMEDIATE BOOTH ORGANIZATION REQUIRED",
};

// ============================================================================
// COMPLETE CONSTITUENCY DOSSIER
// ============================================================================

export const ac065LudhianaNorthData: AC065LudhianaNorthTypes = {
  identity,
  header,
  profile,
  executiveSummary,
  geographicProfile,
  borderStatus,
  electionHistory,
  voteShareAnalysis,
  voterEcosystem,
  casteComposition,
  demographicDeepDive,
  keyLocalIssues,
  localIssuesGrievances,
  congressStrategicPosition,
  congressStrategicBlueprint,
  congressGapAnalysis,
  aapVulnerabilityAnalysis,
  governanceAudit,
  influencersPowerStructure,
  recommendedCandidateProfile,
  candidateRecommendation,
  attackLines,
  voteShareProjection2027,
  priorityRanking,
  deepResearch,
  mainDossier: mainDossierData,
  dataQuality,
};

export default ac065LudhianaNorthData;
