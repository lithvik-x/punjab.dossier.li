// Youth Disconnect & Anti-Establishment Politics Data
// Derived from: direct-documentation/cat-7-public-sentiment/b36-youth-disconnect-anti-establishment.md
// Punjab Congress Digital Intelligence Dashboard 2027

import type {
  YouthDisconnectReport,
  YouthDisillusionmentFactors,
  ApoliticalTrendData,
  VoterTurnoutPattern,
  YouthTurnoutSpecifics,
  ElectoralImplications,
  SocialMediaPlatformDynamics,
  MigrationData,
  VoterRegistrationImpact,
  AAPYouthCoalition,
  CongressStrategicImplications,
  KeyConcept,
  DataSource,
  ConfidenceLevel,
} from "@/types/youth-disconnect-types";

// ==========================================
// YOUTH DISILLUSIONMENT DATA
// ==========================================

export const youthDisillusionmentFactorsData: YouthDisillusionmentFactors = {
  structuralOrigins: [
    "Post-1984 decline of traditional Sikh political institutions",
    "Unemployment rates consistently exceeding national averages (20-25% for urban youth)",
    "2012-2017 SAD-BJP corruption scandals",
    "2017-2022 Congress perceived governance failures",
    "AAP government (2022-present) early enthusiasm moderated by 2024-2025",
  ],
  farmerProtestEffect:
    "The 2020-2022 farmer protests created heightened political awareness and skepticism toward central government initiatives, but this energy did not translate into sustained engagement with state-level electoral politics",
  issuePriorities: ["Job creation", "Drug abuse eradication", "Quality healthcare", "Educational opportunities"],
};

export const apoliticalTrendDataData: ApoliticalTrendData = {
  surveyData:
    "60-70% of Punjab youth hold opinions on political issues, fewer than 30% intended to vote or participate in party activities",
  intentionalNonEngagement:
    '"Intention non-engagement" differs from politically apathetic framing - reflects conscious choice to decline engagement with institutional politics',
  culturalFactors:
    "Political engagement increasingly channeled through issue-specific movements rather than party membership; Dera Sacha Sauda and Radha Soami Satsang Beas serve as alternative community mobilization structures",
  generationalShift:
    "Punjab's millennial and Gen-Z youth increasingly form political attitudes through digital media, peer networks, and individual experience, disrupting traditional party machines' voter mobilization efforts",
};

// ==========================================
// VOTER TURNOUT DATA
// ==========================================

export const voterTurnoutPatternsData: VoterTurnoutPattern[] = [
  { electionYear: 2022, turnout: 75.8, trend: "Falling", notes: "Decline from 78.8% in 2017" },
  { electionYear: 2017, turnout: 78.8, trend: "Rising", notes: "Highest in recent cycles" },
  { electionYear: 2012, turnout: 78.1, trend: "Stable", notes: "" },
];

export const youthTurnoutSpecificsData: YouthTurnoutSpecifics = {
  firstTimeVoterTurnout: "Approximately 65-70%",
  ageGroup: "18-19 or first-time voters",
  comparisonToStateAverage: "Below state average of 75.8%",
};

export const electoralImplicationsData: ElectoralImplications = {
  lowerTurnoutBenefit: "Parties with older, more reliable voter bases benefit from lower youth turnout",
  aapUrbanStrategy:
    "AAP won several urban constituencies (including portions of Ludhiana and Jalandhar) despite lower overall turnout, suggesting AAP mobilized its target demographics more effectively",
  congressChallenge:
    "Parties face strategic challenge of either increasing youth turnout (requiring issue-based rather than patronage-based mobilization) or targeting older voter cohorts more intensely",
};

// ==========================================
// SOCIAL MEDIA DYNAMICS DATA
// ==========================================

export const socialMediaPlatformDynamicsData: SocialMediaPlatformDynamics[] = [
  {
    platform: "Facebook",
    ageRange: "22-35",
    politicalSignificance: "Significant for Punjab youth in 22-35 age range; hosts political groups and news sharing, but increasingly associated with older demographics",
    notes: "",
  },
  {
    platform: "Instagram",
    ageRange: "Youth",
    politicalSignificance: "Growing political expression through stories and reels; significant for issue-based mobilization around specific causes",
    notes: "Farmers' protests, environmental issues",
  },
  {
    platform: "WhatsApp",
    ageRange: "All ages",
    politicalSignificance: "Primary vector for political information transmission; WhatsApp groups serve as political discussion spaces but largely invisible to campaign operations",
    notes: "",
  },
  {
    platform: "YouTube",
    ageRange: "Youth-adjacent",
    politicalSignificance: "Political commentary channels (in Punjabi and Hindi) have grown substantially; some individual creators have audience sizes rivaling traditional media",
    notes: "",
  },
];

export const engagementVotingGapData = {
  description: "40-50% of social media politically-active youth did not vote in immediately preceding election",
  factors: [
    "Registration barriers (especially for migrants)",
    "Psychological distance from electoral outcomes",
    "Consumption-oriented rather than action-oriented nature of social media engagement",
  ],
};

// ==========================================
// MIGRATION DATA
// ==========================================

export const migrationDataData: MigrationData[] = [
  {
    migrationType: "International",
    destinations: ["Canada", "UK", "Australia", "Germany", "Gulf states"],
    estimatedAnnualEmigrants: "100,000-150,000",
    ageGroup: "20-35 (predominantly young adults)",
    selectivity: "Educated and semi-skilled youth are disproportionately represented among emigrants",
  },
  {
    migrationType: "Internal",
    destinations: ["Delhi", "Mumbai", "Bangalore"],
    estimatedAnnualEmigrants: "Not specified",
    ageGroup: "Young adults",
    selectivity: "Educated youth",
  },
];

export const voterRegistrationImpactData: VoterRegistrationImpact = {
  issue: "Migrants frequently fail to update voter registration, resulting in registered voter lists that overstate actual resident populations",
  affectedConstituencies: "Some constituencies in Malwa region",
  discrepancyRange: "15-20%",
  partiesMostAffected: "Creates efficiency problems for all parties but particularly disadvantages parties attempting to mobilize core constituencies",
};

export const remittancePoliticsData = {
  description:
    "Remittances from migrant workers represent a significant portion of Punjab's economy; however, remittance receipt appears to reduce rather than increase local political engagement",
  mechanism:
    "Recipient families develop economic stakes in national/international policies (immigration, currency) rather than state Assembly policies",
  rationalDisengagement:
    "Youth who envision eventual migration may rationally disengage from state-level politics, viewing it as irrelevant to their life trajectory",
};

// ==========================================
// AAP YOUTH COALITION DATA
// ==========================================

export const aapYouthCoalitionData: AAPYouthCoalition = {
  year: 2022,
  youthVoteShare: "45-55%",
  attributedFactors: [
    "AAP's anti-corruption positioning",
    "Perceived support for the farmer protests",
    "Optimism about governance change",
  ],
  erosionSignals: [
    "Decline in social media engagement metrics for AAP's official channels",
    "Growing criticism of AAP governance performance in Punjab among youth demographics",
    "Survey data showing reduced satisfaction with government delivery on key youth priorities",
  ],
};

// ==========================================
// CONGRESS STRATEGIC IMPLICATIONS
// ==========================================

export const congressStrategicImplicationsData: CongressStrategicImplications = {
  youthVoteChallenge:
    "Congress is associated with the 2017-2022 governance period that youth remember as disappointing, while AAP retains anti-establishment credibility despite governance shortcomings",
  mobilizationArchitecture:
    "Traditional Congress booth-level organization requires adaptation; digital-to-ground conversion programs, issue-based volunteer recruitment, and civil society partnerships",
  regionalVariation:
    "Majha region (with higher migration rates) may exhibit more acute disengagement; Malwa's agricultural economy maintains some traditional political engagement patterns; Doaba's education sector creates distinct political socialization channels",
};

// ==========================================
// KEY CONCEPTS
// ==========================================

export const keyConceptsData: KeyConcept[] = [
  {
    term: "Political Socialization",
    definition:
      "The process by which individuals learn and internalize political attitudes, values, and behaviors from family, school, media, peer groups, and other institutions",
  },
  {
    term: "Apolitical Orientation",
    definition:
      "A deliberate choice to not engage with institutional politics while maintaining opinions on public matters; distinct from political ignorance or apathy",
  },
  {
    term: "Engagement-Voting Gap",
    definition:
      "The documented divergence between political expression (particularly on social media) and actual electoral participation",
  },
  {
    term: "Electoral Geography",
    definition:
      "The spatial distribution of voting patterns, turnout, and political preferences across geographic units",
  },
  {
    term: "First-Time Voter",
    definition: "Eligible voters aged 18-19 or first-time voters in a specific election cycle",
  },
  {
    term: "Voter Registration Gap",
    definition: "The discrepancy between eligible voters in an area and those actually registered on electoral rolls",
  },
  {
    term: "Booth-Level Organization",
    definition:
      "Political party infrastructure at the smallest electoral unit (typically 1,000-1,500 voters), relying on local volunteers for voter contact",
  },
  {
    term: "Anti-Establishment Politics",
    definition:
      "Political orientations and movements that oppose existing political institutions, incumbents, or perceived elite control of political systems",
  },
  {
    term: "Issue-Based Mobilization",
    definition:
      "Political engagement organized around specific policy problems rather than partisan loyalty or ideological platforms",
  },
  {
    term: "Remittance Politics",
    definition:
      "The influence of international migration and money transfers on domestic political attitudes and behavior",
  },
];

// ==========================================
// DATA SOURCES
// ==========================================

export const dataSourcesData: DataSource[] = [
  { name: "Election Commission of India", type: "Election Commission", reliability: "High" },
  { name: "ADR (Association for Democratic Reforms)", type: "ADR", reliability: "High" },
  { name: "CSDS (Centre for the Study of Developing Societies)", type: "CSDS", reliability: "High" },
  { name: "NSO (National Statistical Office)", type: "NSO", reliability: "High" },
  { name: "Various state government statistical abstracts", type: "Government", reliability: "Medium" },
];

// ==========================================
// CONFIDENCE LEVELS
// ==========================================

export const confidenceLevelsData: ConfidenceLevel[] = [
  {
    category: "Punjab's demographic youth profile (~50-55% under 30)",
    confidence: "High",
    verification: "Established demographic data",
  },
  {
    category: "Historical voter turnout patterns and urban-rural differentials",
    confidence: "High",
    verification: "Election Commission data",
  },
  {
    category: "General structural factors driving youth disillusionment (unemployment, governance failures)",
    confidence: "High",
    verification: "Multiple sources confirm",
  },
  {
    category: "Youth migration patterns to Canada, UK, Australia, and Gulf states",
    confidence: "High",
    verification: "Migration statistics",
  },
  {
    category: "AAP's 2022 victory relying significantly on youth support",
    confidence: "High",
    verification: "Exit polls and post-election analysis",
  },
  {
    category: "Specific age-disaggregated turnout figures (18-25 vs. 26-35)",
    confidence: "Medium",
    verification: "NEEDS VERIFICATION",
  },
  {
    category: "Precise estimates of social media engagement to voting behavior correlation",
    confidence: "Medium",
    verification: "NEEDS VERIFICATION",
  },
  {
    category: "Migration-induced voter registration gaps at constituency level",
    confidence: "Medium",
    verification: "NEEDS VERIFICATION",
  },
  {
    category: "Youth support erosion rates for AAP 2022-2026",
    confidence: "Medium",
    verification: "NEEDS VERIFICATION",
  },
  {
    category: "Specific survey percentages on youth issue priorities without 2024-2026 verification",
    confidence: "Low",
    verification: "NEEDS VERIFICATION",
  },
  {
    category: "Precise NRI political influence mechanisms",
    confidence: "Low",
    verification: "NEEDS VERIFICATION",
  },
  {
    category: "Youth apolitical trend quantitative measurements",
    confidence: "Low",
    verification: "NEEDS VERIFICATION",
  },
];

// ==========================================
// FULL REPORT
// ==========================================

export const youthDisconnectReport: YouthDisconnectReport = {
  reportDate: "20 May 2026",
  documentationType: "Direct Documentation — Training Knowledge",
  agent: "Track B",
  taskId: "B36",
  frameworkReference: "Section 7 (Public Sentiment)",
  youthPopulationPercent: "Approximately 50-55% of Punjab's population under the age of 30",
  youthUnemploymentRate: "20-25% range for urban youth (15-29 age group)",
  disillusionmentFactors: youthDisillusionmentFactorsData,
  apoliticalTrends: apoliticalTrendDataData,
  turnoutPatterns: voterTurnoutPatternsData,
  youthTurnout: youthTurnoutSpecificsData,
  socialMediaDynamics: socialMediaPlatformDynamicsData,
  migrationData: migrationDataData,
  aapYouthCoalition: aapYouthCoalitionData,
  congressStrategy: congressStrategicImplicationsData,
  keyConcepts: keyConceptsData,
  dataSources: dataSourcesData,
  confidenceLevels: confidenceLevelsData,
  gaps: [
    "Caste-wise detailed vote share data for each AC",
    "Updated candidate asset/declared income details",
    "Social media metrics for all candidates",
    "Ground-level booth-wise worker strength",
    "NRI candidate comprehensive list",
  ],
};
