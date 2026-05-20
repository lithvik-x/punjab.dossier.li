// @ts-nocheck
// Political Landscape Synthesis Data for Punjab 2027
// Derived from: research P4/synthesis/s1-s8
// Date: May 20, 2026

import type {
  PoliticalLandscapeSynthesis,
  RegionalAnalysis,
  CastePopulation,
  CoalitionBlock,
  CasteCompatibilityMatrix,
  PartyVoteShare,
  PartySeatProjection,
  PartyStrengths,
  FarmerDebtCrisis,
  YouthUnemployment,
  CrisisIntersection,
  ArhtiyaNetwork,
  DeraInfluence,
  CasteCouncilData,
  BoothOrganization,
  PartyFinances,
  LeadershipAssessment,
  VoterSegment,
  VDJStage,
  GOTVIntervention,
  PlatformUsage,
  DigitalGap,
  WhatsAppArchitecture,
  DigitalBudget,
  NRIInfluence,
  SADStrategy,
  AAPDefenseStrategy,
  OppositionThreatAssessment,
  ElectionScenario,
  CoalitionMath,
  StrategicInsight,
  RegionalCasteEcosystem,
  PartyTrajectory,
  RegionalTrajectory,
  TrendScenario,
  SwingFactor,
  SwingSegment,
  CasteSwingCalculation,
  MalwaSwingEquation,
  FlippableSeat,
  RiskItem,
  OpportunityItem,
  PriorityVoterSegment,
  RegionalPriority,
  TimelineMilestone,
  ResourceAllocation,
} from "@/types/p4-political-synthesis-types";

// ==========================================
// REGIONAL ANALYSIS DATA
// ==========================================

export const regionalAnalysisData: RegionalAnalysis[] = [
  {
    profile: {
      region: "Malwa",
      seats: 73,
      description: "The decisive battlefield containing 62% of assembly seats where government formation will be decided",
      keyCharacteristics: [
        "Acute agrarian distress (80-90% of farm suicides)",
        "Strong Akali Dal presence despite decline",
        "Complex three-way competition",
        "Akali Dal revival in rural polls (December 2025)",
      ],
    },
    casteEcosystem: [
      { caste: "Jat Sikh", malwaPercent: "32-40%", congressSupport: 65, akaliSupport: 25, aapSupport: 10, keyIssue: "Farmer debt, OBC status" },
      { caste: "Bania", malwaPercent: "15-22%", congressSupport: 35, akaliSupport: 45, aapSupport: 20, keyIssue: "Arhtiya commission, mandi system" },
      { caste: "Mazhabi Sikh", malwaPercent: "12-16%", congressSupport: 72, akaliSupport: 15, aapSupport: 13, keyIssue: "Sub-quota reservation, land rights" },
      { caste: "Ravidassia", malwaPercent: "Concentrated", congressSupport: 55, akaliSupport: 10, aapSupport: 35, keyIssue: "Dera influence, religious identity" },
    ],
    criticalFindings: [
      "Akali Dal won 13 of 17 zila parishad zones in Bathinda, 7 of 13 in Muktsar, 5 of 10 in Faridkot (Tribune India, December 2025)",
      "Average farm debt per household: Rs 2.03 lakh (NSO)",
      "54% of Punjab farming families in debt",
      "Total farm loans exceed Rs 1.4 lakh crore",
      "80-90% of all farm suicides occur in Malwa",
    ],
    electoralImplications: "Congress must win Malwa to form government. Channi's Dalit identity has limited Malwa penetration; must pair with Jat Sikh leaders.",
  },
  {
    profile: {
      region: "Majha",
      seats: 25,
      description: "Congress stronghold under pressure with border security and drugs as dominant issues",
      keyCharacteristics: [
        "Covers Amritsar, Tarn Taran, Gurdaspur, Pathankot",
        "Border security and drugs dominant issues",
        "Congress historically dominated (23 of 25 seats in 2017)",
        "High voter volatility demonstrated in Tarn Taran bypoll",
      ],
    },
    casteEcosystem: [
      { caste: "Jat Sikh", majhaPercent: "35-40%", congressSupport: 65, akaliSupport: 20, aapSupport: 15, keyIssue: "Border security, drugs" },
      { caste: "Mazhabi Sikh", majhaPercent: "18-22%", congressSupport: 72, akaliSupport: 10, aapSupport: 18, keyIssue: "Jobs, anti-drugs" },
      { caste: "Bania", majhaPercent: "12-15%", congressSupport: 35, akaliSupport: 40, aapSupport: 25, keyIssue: "Business climate" },
      { caste: "General/Others", majhaPercent: "25-30%", congressSupport: 40, akaliSupport: 30, aapSupport: 30, keyIssue: "Governance" },
    ],
    criticalFindings: [
      "Tarn Taran Bypoll (November 2025): AAP won with 42,649 votes; Congress finished FOURTH (15,078 votes)",
      "Congress cannot automatically inherit AAP's lost votes",
      "Radical Sikh mobilization (Waris Punjab De) can split panthic votes",
      "Channi's Dalit identity has limited penetration in Majha where panthic concerns carry deeper weight",
    ],
    electoralImplications: "AAP's perceived failure on governance, jobs, drugs creates opening. Mazhabi Sikh base (72%) remains most reliable vote bank.",
  },
  {
    profile: {
      region: "Doaba",
      seats: 23,
      description: "India's NRI hub with highest per capita remittances and highest Dalit concentration in the country",
      keyCharacteristics: [
        "Highest per capita remittances in India",
        "Highest Dalit concentration in the country",
        "Youth population (18-35) is 45-52%",
        "AAP governs from Jalandhar but won only 10 of 23 seats in 2022",
      ],
    },
    casteEcosystem: [
      { caste: "Khatri", doabaPercent: "12-18%", congressSupport: 40, akaliSupport: 35, aapSupport: 18, keyIssue: "Urban governance" },
      { caste: "Mazhabi Sikh", doabaPercent: "14-18%", congressSupport: 72, akaliSupport: 10, aapSupport: 18, keyIssue: "Jobs, land rights" },
      { caste: "Bania", doabaPercent: "10-15%", congressSupport: 35, akaliSupport: 35, aapSupport: 30, keyIssue: "Trade, credit" },
      { caste: "Ravidassia", doabaPercent: "Concentrated", congressSupport: 55, akaliSupport: 10, aapSupport: 35, keyIssue: "Dera influence" },
      { caste: "Gujjar", doabaPercent: "~11K votes", congressSupport: 50, akaliSupport: 20, aapSupport: 30, keyIssue: "Dairy, drugs" },
    ],
    criticalFindings: [
      "Rural Body Election Results (December 2025): AAP dominated but Congress held Nawanshahr district",
      "Channi's Jalandhar LS Victory (June 2024): Won with 3,90,053 votes, margin of ~1.76 lakh",
      "CM Bhagwant Mann shifted to rented accommodation in Jalandhar to run government from Doaba twice weekly",
      "High youth unemployment (22-28% estimated) creates volatility",
    ],
    electoralImplications: "AAP has government advantage but poor 2022 performance. Congress has structural strength through Channi but must expand beyond Dalit base.",
  },
];

// ==========================================
// CASTE POPULATION DATA
// ==========================================

export const castePopulationData: CastePopulation[] = [
  { name: "Jat Sikh", populationPercent: 21, congressBase: 65, keyIssue: "Farmer debt, OBC status" },
  { name: "Mazhabi Sikh", populationPercent: 6.3, congressBase: 72, keyIssue: "Sub-quota reservation, land rights" },
  { name: "Ravidassia", populationPercent: 2.5, congressBase: 55, keyIssue: "Dera influence, religious identity" },
  { name: "Bania", populationPercent: 5.5, congressBase: 35, keyIssue: "Arhtiya commission, mandi system" },
  { name: "Khatri", populationPercent: 3, congressBase: 40, keyIssue: "Urban governance" },
  { name: "Brahmin", populationPercent: 2, congressBase: 42, keyIssue: "Government jobs, educational seats" },
  { name: "Gujjar", populationPercent: 4.5, congressBase: 50, keyIssue: "Dairy, drugs" },
  { name: "SC (Total)", populationPercent: 32, congressBase: 60, keyIssue: "Reservation, employment" },
];

// ==========================================
// COALITION BLOCKS
// ==========================================

export const coalitionBlocksData: CoalitionBlock[] = [
  {
    name: "Agrarian Dominance Bloc (Jat Sikh Banner)",
    description: "Jat Sikh agrarian bloc competing versus social justice bloc",
    casteComponents: ["Jat Sikh (21%)", "Bania (5.5%)", "Gujjar (4.5%)"],
    fragilityFactors: [
      "Jat Sikh youth emigration pressure reduces political engagement",
      "OBC status demand creating internal pressure",
      "Bania increasingly issue-based, not loyal",
      "Akali Dal competing for Jat Sikh votes in Malwa",
    ],
  },
  {
    name: "Social Justice Bloc (Dalit Banner)",
    description: "Dalit social justice coalition",
    casteComponents: ["Mazhabi Sikh (6.3%)", "Ravidassia (2.5%)", "Balmiki (concentrated)", "General SC (32% total)"],
    fragilityFactors: [
      "AAP won 85%+ of SC reserved seats in 2022 — voters may be sticky to AAP",
      "Mazhabi-Ravidassia tensions within Dalit category",
      "Dera influence creates unpredictable voting patterns",
      "BJP targeting Mazhabi Sikhs and Balmikis",
    ],
  },
];

// ==========================================
// CASTE COMPATIBILITY MATRIX
// ==========================================

export const casteCompatibilityMatrix: CasteCompatibilityMatrix[] = [
  { casteA: "Jat Sikh", casteB: "Mazhabi", relationship: "Tension" },
  { casteA: "Jat Sikh", casteB: "Bania", relationship: "Cooperation" },
  { casteA: "Jat Sikh", casteB: "Khatri", relationship: "Tension" },
  { casteA: "Jat Sikh", casteB: "Brahmin", relationship: "Tension" },
  { casteA: "Jat Sikh", casteB: "Gujjar", relationship: "Cooperation" },
  { casteA: "Jat Sikh", casteB: "Ravidassia", relationship: "Distance" },
  { casteA: "Mazhabi", casteB: "Bania", relationship: "Alliance" },
  { casteA: "Mazhabi", casteB: "Gujjar", relationship: "Alliance" },
  { casteA: "Mazhabi", casteB: "Ravidassia", relationship: "Alliance" },
  { casteA: "Bania", casteB: "Khatri", relationship: "Alliance" },
  { casteA: "Bania", casteB: "Brahmin", relationship: "Alliance" },
  { casteA: "Khatri", casteB: "Brahmin", relationship: "Alliance" },
];

// ==========================================
// PARTY VOTE SHARE DATA
// ==========================================

export const partyVoteShareData: PartyVoteShare[] = [
  { party: "AAP", voteShare: 26, trend: "down", source: "Indian Express", date: "Jun 2024" },
  { party: "AAP", voteShare: 42, trend: "down", source: "2022 Assembly", date: "2022" },
  { party: "BJP", voteShare: 19, trend: "up", source: "Frontline", date: "Feb 2026" },
  { party: "BJP", voteShare: 7.6, trend: "up", source: "2022 Assembly", date: "2022" },
  { party: "Congress", voteShare: 23, trend: "stable", source: "2022 Assembly", date: "2022" },
  { party: "SAD", voteShare: 5, trend: "down", source: "2024 Lok Sabha", date: "2024" },
];

// ==========================================
// PARTY SEAT PROJECTIONS
// ==========================================

export const partySeatProjectionData: PartySeatProjection[] = [
  { party: "Congress", optimistic: 55, baseline: 45, pessimistic: 30 },
  { party: "AAP", optimistic: 65, baseline: 50, pessimistic: 40 },
  { party: "Akali Dal", optimistic: 22, baseline: 15, pessimistic: 8 },
  { party: "BJP", optimistic: 20, baseline: 15, pessimistic: 10 },
];

// ==========================================
// PARTY STRENGTHS ASSESSMENT
// ==========================================

export const partyStrengthsData: Record<string, PartyStrengths> = {
  AAP: {
    boothInfrastructure: 7,
    financialResources: 8,
    leadershipUnity: 5,
    cmFaceClarity: 9,
    regionalStrength: 7,
    factionalVulnerability: "MODERATE",
    trajectory: "DECLINING",
  },
  Congress: {
    boothInfrastructure: 6,
    financialResources: 4,
    leadershipUnity: 3,
    cmFaceClarity: 2,
    regionalStrength: 6,
    factionalVulnerability: "CRITICAL",
    trajectory: "IMPROVING",
  },
  SAD: {
    boothInfrastructure: 3,
    financialResources: 3,
    leadershipUnity: 2,
    cmFaceClarity: 4,
    regionalStrength: 5,
    factionalVulnerability: "SEVERE",
    trajectory: "UNCERTAIN",
  },
};

// ==========================================
// FARMER DEBT CRISIS DATA
// ==========================================

export const farmerDebtCrisisData: FarmerDebtCrisis = {
  averageDebtPerHousehold: "Rs 2.03 lakh",
  familiesInDebt: "89%",
  totalFarmLoans: "Rs 1.4 lakh crore",
  farmSuicidePercent: "80-90%",
  stateRank: "Last among 18 major states",
};

// ==========================================
// YOUTH UNEMPLOYMENT DATA
// ==========================================

export const youthUnemploymentData: YouthUnemployment = {
  statewide: 20.2,
  doaba: "32-38%",
  rural: 22.5,
  nationalAverage: 14.6,
  ageGroup: "18-35",
};

// ==========================================
// CRISIS INTERSECTION DATA
// ==========================================

export const crisisIntersectionData: CrisisIntersection = {
  feedbackLoop: "Farmer debt → Youth emigration → Labor drain → Increased costs → Deeper debt → More emigration",
  primaryCause: "Debt forces youth emigration, youth flight prevents agricultural modernization",
  regionalSeverity: [
    { region: "Malwa", severity: "MAXIMUM" },
    { region: "Doaba", severity: "HIGH" },
    { region: "Majha", severity: "MEDIUM" },
  ],
};

// ==========================================
// ARHTIYA NETWORK DATA
// ==========================================

export const arhtiyaNetworkData: ArhtiyaNetwork = {
  totalAgents: 45000,
  voterInfluencePerAgent: "200-2000",
  alignment: {
    akali: 45,
    congress: 35,
    aap: 10,
    independent: 10,
  },
  leveragePoint: "Credit dependency chain controls 65-75% of farmers",
};

// ==========================================
// DERA INFLUENCE DATA
// ==========================================

export const deraInfluenceData: DeraInfluence[] = [
  {
    name: "Dera Sacha Sauda",
    seatsInfluenced: 69,
    region: "Malwa",
    congressStatus: "Lost",
    strategy: "Avoid",
  },
  {
    name: "Radha Soami Beas",
    seatsInfluenced: 40,
    region: "Doaba/Malwa",
    congressStatus: "Neutral",
    strategy: "Court",
  },
  {
    name: "Dera Sachkhand Ballan",
    seatsInfluenced: 23,
    region: "Doaba",
    congressStatus: "Solid",
    congressSupport: 55,
    strategy: "Defend",
  },
  {
    name: "Sant Nirankari Mission",
    seatsInfluenced: 15,
    region: "Urban",
    congressStatus: "Neutral",
    strategy: "Build",
  },
];

// ==========================================
// CASTE COUNCIL DATA
// ==========================================

export const casteCouncilData: CasteCouncilData[] = [
  {
    councilType: "Mazhabi Sikh",
    population: "6.3%",
    congressLoyalty: 72,
    vulnerability: "Economic dependency on landed Jat Sikh peasantry",
    gotvLeverage: "Landless laborer identity, employment schemes",
  },
  {
    councilType: "Ravidassia",
    population: "2.5%",
    congressLoyalty: 55,
    vulnerability: "Dera influence creates unpredictable voting patterns",
    gotvLeverage: "Channi connection, temple visits, religious events",
  },
  {
    councilType: "Balmiki",
    population: "Urban concentrated",
    congressLoyalty: 50,
    vulnerability: "AAP outreach increasing",
    gotvLeverage: "Urban employment schemes, municipal representation",
  },
];

// ==========================================
// BOOTH ORGANIZATION DATA
// ==========================================

export const boothOrganizationData: BoothOrganization[] = [
  {
    party: "AAP",
    estimatedBooths: 23000,
    workersPerBooth: "1-2 (volunteers)",
    governanceLeverage: true,
    readiness: "MODERATE (volunteer-based, not cadre-based)",
  },
  {
    party: "Congress",
    estimatedBooths: 23000,
    workersPerBooth: "5-10 (target)",
    governanceLeverage: false,
    readiness: "REBUILDING (3 lakh workers for 23,000 booths = 13 per booth)",
  },
  {
    party: "SAD",
    estimatedBooths: 23000,
    workersPerBooth: "5-10 (target)",
    governanceLeverage: false,
    readiness: "WEAK (mass retirements post-2022, rebuilding since Feb 2026)",
  },
];

// ==========================================
// PARTY FINANCES DATA
// ==========================================

export const partyFinancesData: PartyFinances[] = [
  {
    party: "AAP",
    estimatedAnnualFunds: "Rs 38 crore (2024-25)",
    governmentPatronage: true,
    fundraisingCapacity: "Strong (Prudent Electoral Trust: Rs 16.4 crore)",
  },
  {
    party: "Congress",
    estimatedAnnualFunds: "LIMITED",
    governmentPatronage: false,
    fundraisingCapacity: "High Command dependent",
  },
  {
    party: "SAD",
    estimatedAnnualFunds: "DIMINISHED",
    governmentPatronage: false,
    fundraisingCapacity: "Significantly reduced post-2022",
  },
];

// ==========================================
// LEADERSHIP ASSESSMENT DATA
// ==========================================

export const leadershipAssessmentData: LeadershipAssessment[] = [
  {
    leader: "Bhagwant Mann (AAP)",
    party: "AAP",
    strengths: ["Directness, humor, common-man image", "Clear CM face", "Governance delivery network"],
    weaknesses: ["Autonomy increasingly constrained by Delhi", "Governance failures attach to his record"],
    massConnect: "STRONG",
    unified: false,
  },
  {
    leader: "Charanjit Singh Channi (Congress)",
    party: "Congress",
    strengths: ["Only Congress leader who won LS seat (Jalandhar, margin 1.76 lakh)", "Dalit identity provides historic first-CM narrative"],
    weaknesses: ["Regionally concentrated strength", "Jat Sikh leadership dominated party tensions"],
    massConnect: "MODERATE",
    unified: false,
  },
  {
    leader: "Sukhbir Singh Badal (SAD)",
    party: "SAD",
    strengths: ["Dynastic control", "Religious machinery"],
    weaknesses: ["Religious punishment (Akal Takht)", "Dynasty perception alienates youth and reformers"],
    massConnect: "LOW",
    unified: false,
  },
];

// ==========================================
// VOTER SEGMENTS DATA
// ==========================================

export const voterSegmentsData: VoterSegment[] = [
  {
    id: "S1",
    name: "Traditional Congress",
    percentOfElectorate: "25-30%",
    swingProbability: 5,
    primaryRegion: "Majha (30-32%), Doaba (26-28%)",
    priorityLevel: "RETENTION",
    coreMessage: "Your Congress, your family, your identity",
    primaryChannel: "Family elder networks",
  },
  {
    id: "S2",
    name: "Traditional Akali",
    percentOfElectorate: "18-22%",
    swingProbability: 10,
    primaryRegion: "Malwa (22-25%)",
    priorityLevel: "RETENTION",
    coreMessage: "Akali failed farmers - time for change",
    primaryChannel: "Caste networks, WhatsApp",
  },
  {
    id: "S3",
    name: "Issue Voter",
    percentOfElectorate: "18-22%",
    swingProbability: 50,
    primaryRegion: "Malwa (22-25%)",
    priorityLevel: "HIGH",
    coreMessage: "[Specific Issue] - Congress has a solution",
    primaryChannel: "WhatsApp forward chains, direct contact",
  },
  {
    id: "S4",
    name: "Youth First-Timer",
    percentOfElectorate: "15-18%",
    swingProbability: 35,
    primaryRegion: "Doaba (22-25%)",
    priorityLevel: "CRITICAL",
    coreMessage: "1 lakh govt jobs, NRI facilitation",
    primaryChannel: "WhatsApp + YouTube + Instagram",
  },
  {
    id: "S5",
    name: "Caste-Consolidator",
    percentOfElectorate: "10-12%",
    swingProbability: 20,
    primaryRegion: "ALL REGIONS",
    priorityLevel: "MODERATE",
    coreMessage: "Reservation protection, land rights",
    primaryChannel: "Caste council endorsement, community leaders",
  },
  {
    id: "S6",
    name: "Rational Evaluator",
    percentOfElectorate: "8-12%",
    swingProbability: 30,
    primaryRegion: "Urban (Ludhiana, Jalandhar, Amritsar, Patiala)",
    priorityLevel: "MODERATE",
    coreMessage: "Development plan, proven candidate",
    primaryChannel: "Media + debates, WhatsApp fact-chains",
  },
];

// ==========================================
// VDJ STAGES DATA
// ==========================================

export const vdjStagesData: VDJStage[] = [
  { stage: 1, name: "Issue Activation", reachableSegments: ["S3", "S4"], activationSpeed: "FAST" },
  { stage: 2, name: "Information Search", reachableSegments: ["S4", "S3", "S6"], activationSpeed: "MODERATE-FAST" },
  { stage: 3, name: "Evaluation", reachableSegments: ["S3", "S4", "S5", "S6"], activationSpeed: "FAST" },
  { stage: 4, name: "Commitment", reachableSegments: ["S1", "S2", "S3", "S4", "S5"], activationSpeed: "N/A" },
  { stage: 5, name: "GOTV", reachableSegments: ["All"], activationSpeed: "Last 2 weeks" },
];

// ==========================================
// GOTV INTERVENTIONS DATA
// ==========================================

export const gotvInterventionsData: GOTVIntervention[] = [
  {
    segment: "S1: Traditional Congress",
    difficulty: "LOW",
    primaryChallenge: "Physical booth access",
    interventionStrategy: "Booth agent + family elder reminder",
    expectedTurnoutImpact: "+3-5%",
  },
  {
    segment: "S4: Youth First-Timer",
    difficulty: "HIGH",
    primaryChallenge: "Apathy + last-minute plans",
    interventionStrategy: "Early GOTV 2+ weeks out + peer pressure",
    expectedTurnoutImpact: "+5-10%",
  },
  {
    segment: "S3: Issue Voter",
    difficulty: "MEDIUM",
    primaryChallenge: "Transportation (rural Malwa)",
    interventionStrategy: "Booth agent + family elder + transport",
    expectedTurnoutImpact: "+5-8%",
  },
];

// ==========================================
// PLATFORM USAGE DATA
// ==========================================

export const platformUsageData: PlatformUsage[] = [
  { platform: "WhatsApp", youthUsagePercent: 26.2, ranking: 1, targetingCapability: "High", congressGap: "NO infrastructure", priority: "CRITICAL" },
  { platform: "Instagram", youthUsagePercent: 20.8, ranking: 2, targetingCapability: "High", congressGap: "Minimal presence", priority: "HIGH" },
  { platform: "Facebook", youthUsagePercent: 14.8, ranking: 3, targetingCapability: "Very High", congressGap: "No surrogate network", priority: "HIGH" },
  { platform: "YouTube", youthUsagePercent: 10.2, ranking: 4, targetingCapability: "High", congressGap: "Inconsistent", priority: "HIGH" },
  { platform: "Twitter/X", youthUsagePercent: 5, ranking: 5, targetingCapability: "Medium", congressGap: "Reactive only", priority: "MEDIUM" },
];

// ==========================================
// DIGITAL GAPS DATA
// ==========================================

export const digitalGapsData: DigitalGap[] = [
  { gap: "No voter database", severity: "CRITICAL", impact: "Cannot execute microtargeting", fillTime: "3-6 months" },
  { gap: "No WhatsApp organizing", severity: "CRITICAL", impact: "Cannot reach constituency level", fillTime: "2-3 months" },
  { gap: "No surrogate page network", severity: "HIGH", impact: "Cannot match BJP/AAP digital presence", fillTime: "4-6 months" },
  { gap: "No NRI voter database", severity: "CRITICAL", impact: "Cannot mobilize diaspora", fillTime: "3 months" },
  { gap: "No real-time analytics", severity: "HIGH", impact: "Cannot counter rapid opponent messaging", fillTime: "2-3 months" },
];

// ==========================================
// WHATSAPP ARCHITECTURE DATA
// ==========================================

export const whatsappArchitectureData: WhatsAppArchitecture[] = [
  { level: 1, name: "Campaign War Room", description: "Central command for all WhatsApp messaging, rapid response team, content calendar management" },
  { level: 2, name: "117 Constituency Coordinators", description: "Zone-level management, content adaptation for local issues, feedback to war room" },
  { level: 3, name: "Booth-Level Workers", description: "Ground-level voter contact, voter-specific messaging, real-time sentiment reporting (3-5 per booth)" },
  { level: 4, name: "Community Groups", description: "Caste-based groups (Jat Sikh, Mazhabi, etc.), farmer groups, youth groups, women groups" },
  { level: 5, name: "NRI Networks", description: "Country-specific groups (Canada, UK, USA, Australia), family bridge groups, diaspora influencer networks" },
];

// ==========================================
// DIGITAL BUDGET DATA
// ==========================================

export const digitalBudgetData: DigitalBudget[] = [
  { component: "Voter Database Build", lowCrore: 5, highCrore: 15, priority: "CRITICAL" },
  { component: "WhatsApp Business API", lowCrore: 1, highCrore: 3, priority: "CRITICAL" },
  { component: "Meta/Facebook Campaign", lowCrore: 10, highCrore: 30, priority: "HIGH" },
  { component: "Google/YouTube Campaign", lowCrore: 5, highCrore: 15, priority: "HIGH" },
  { component: "Surrogate Page Networks", lowCrore: 2, highCrore: 5, priority: "HIGH" },
  { component: "Analytics Infrastructure", lowCrore: 2, highCrore: 5, priority: "HIGH" },
  { component: "NRI Diaspora Program", lowCrore: 1, highCrore: 3, priority: "HIGH" },
  { component: "Rapid Response Team", lowCrore: 2, highCrore: 3, priority: "MEDIUM" },
  { component: "Content Production", lowCrore: 3, highCrore: 5, priority: "MEDIUM" },
];

// ==========================================
// NRI INFLUENCE DATA
// ==========================================

export const nriInfluenceData: NRIInfluence[] = [
  { country: "Canada", population: "~1.4 million Punjabi-origin", engagementChannels: ["WhatsApp family groups", "Facebook", "YouTube"], congressGap: "NO organized NRI WhatsApp network" },
  { country: "USA", population: "~500,000+ Punjabi Americans", engagementChannels: ["Facebook", "YouTube", "WhatsApp"], congressGap: "No NRI-specific Facebook strategy" },
  { country: "UK", population: "~300,000+ Punjabi Britons", engagementChannels: ["WhatsApp", "Facebook"], congressGap: "No YouTube influencer partnerships" },
  { country: "Australia", population: "Significant Punjabi community", engagementChannels: ["WhatsApp", "Facebook"], congressGap: "No diaspora messaging program" },
];

// ==========================================
// SAD STRATEGY DATA
// ==========================================

export const sadStrategyData: SADStrategy = {
  revivalPillars: [
    "Early mobilization (4 rallies/week since January 2026)",
    "Majithia return for booth-level networks",
    "Malwa consolidation focused on Jat Sikh farmers",
    "Urban expansion targeting 25+ urban seats",
    "Issue exploitation on AAP governance failures",
  ],
  targetSeats: "100 (assessed as unrealistic)",
  realisticCeiling: 22,
  internalFragments: ["Sukhbir Badal SAD", "Giani Harpreet Singh SAD (Punar Surjit)", "Waris Punjab De (Amritpal Singh)"],
  exploitationOpportunity: "BJP rejected SAD as coalition partner; Panthic vote fragmentation",
};

// ==========================================
// AAP DEFENSE STRATEGY DATA
// ==========================================

export const aapDefenseStrategyData: AAPDefenseStrategy = {
  pillars: [
    "Mann as CM face - will not be replaced",
    "Governance achievements - free electricity, 881 clinics, toll removal",
    "BJP as primary threat framing",
    "Regional outreach - Mann moved to Jalandhar",
    "Caste strategy - conducting caste census, SC wing appointments",
  ],
  vulnerabilities: [
    "Rs 1,000/month women stipend: NOT LAUNCHED",
    "Drug-free state: NOT ACHIEVED",
    "25 lakh jobs promised: Only ~63,000-108,000 delivered",
    "Fiscal constraints: Rs 4 lakh crore debt limits pre-election spending",
    "Mazhabi Sikh alienation: Valmiki/Mazhabi communities censured AAP for reservation neglect",
  ],
  brokenPromises: [
    { promise: "Rs 1,000/month to women", status: "NOT LAUNCHED" },
    { promise: "Drug-free state", status: "NOT ACHIEVED" },
    { promise: "25 lakh jobs", status: "~63,000-108,000 delivered" },
    { promise: "Rs 3,000/month unemployment allowance", status: "NEVER DELIVERED" },
  ],
  bjpAsMainThreat: true,
};

// ==========================================
// OPPOSITION THREAT ASSESSMENT DATA
// ==========================================

export const oppositionThreatAssessmentData: OppositionThreatAssessment[] = [
  { party: "AAP", threatLevel: "HIGH", primaryThreatType: "Incumbent advantage + governance delivery", exploitableWeakness: "Broken promises, debt, youth unemployment" },
  { party: "SAD", threatLevel: "MEDIUM", primaryThreatType: "Vote splitting in Malwa/Majha", exploitableWeakness: "Internal split, BJP rejection, Majithia nexus" },
  { party: "BJP", threatLevel: "MEDIUM-HIGH", primaryThreatType: "Urban expansion + resources", exploitableWeakness: "No state leadership, farm law resentment" },
];

// ==========================================
// ELECTION SCENARIOS DATA
// ==========================================

export const electionScenariosData: ElectionScenario[] = [
  {
    scenarioName: "Congress Wins",
    seats: { congress: 50, aap: 32, akali: 22, bjp: 12, others: 6 },
    requirements: ["Retain Mazhabi (72%)", "Win back some Jat Sikh (60%+)", "Flip Bania (40%+)", "Channi as CM face helps Doaba"],
    likelihood: "Requires full coalition build",
  },
  {
    scenarioName: "AAP Retains",
    seats: { congress: 32, aap: 55, akali: 18, bjp: 10, others: 7 },
    requirements: ["AAP retains SC reserved seats", "Some Jat Sikh youth votes", "Urban professional votes", "Anti-incumbency offset by welfare"],
    likelihood: "Baseline scenario",
  },
  {
    scenarioName: "Hung Assembly",
    seats: { congress: 45, aap: 38, akali: 21, bjp: 15, others: 3 },
    requirements: ["3-way split of Malwa", "Congress unable to recover fully", "AAP retains enough", "BJP plays kingmaker"],
    likelihood: "Most likely given current trajectory",
  },
];

// ==========================================
// COALITION MATH DATA
// ==========================================

export const coalitionMathData: CoalitionMath = {
  party: "Congress",
  pathTo59: [
    "Doaba: 12-15 seats (Channi base, Mazhabi + Ravidassia + Khatri)",
    "Majha: 12-15 seats (Mazhabi base + some Jat Sikh + urban)",
    "Malwa: 18-25 seats (need to flip from AAP and Akali)",
  ],
  gapAnalysis: [
    "Current maximum achievable appears to be 50-55 seats without:",
    "Formal pre-poll alliance with Akali Dal",
    "Significant Jat Sikh vote share recovery beyond 60%",
    "Bania community flipping from 45% Akali to 50%+ Congress",
  ],
  uncomfortableAlliances: [
    "Congress + Akali Dal (unlikely given 2022 bitterness)",
    "Congress + BJP (Congress would never; BJP extracting maximum)",
    "AAP + Congress (AAP won in 2022, unlikely to be junior partner)",
    "AAP + Akali (Malwa-based, possible if BJP pushes SAD toward AAP)",
  ],
};

// ==========================================
// STRATEGIC INSIGHTS DATA
// ==========================================

export const strategicInsightsData: StrategicInsight[] = [
  {
    insightId: "INS-1",
    title: "The Channi Dilemma",
    problem: "Channi is Congress's strongest 2027 asset but his strength is regionally concentrated. Doaba (23 seats): strongest; Malwa (73 seats): weakest.",
    opportunity: "Use Channi as dual-purpose asset: CM face for Doaba/Dalit mobilization AND symbol of social justice for Malwa Mazhabi voters.",
    recommendation: "Pair Channi with credible Jat Sikh leaders (Partap Singh Bajwa, Sukhjinder Singh Randhawa) for Malwa and Majha Jat Sikh outreach.",
    priority: "IMMEDIATE",
  },
  {
    insightId: "INS-2",
    title: "Malwa Decisiveness",
    problem: "Malwa has 73 of 117 seats (62%). No party can form government without Malwa. Akali Dal showing revival in rural polls.",
    opportunity: "Congress won only 18 Malwa seats in 2022. AAP won 66 statewide primarily by sweeping Malwa.",
    recommendation: "Commit to MSP legal guarantee, C2+50% formula, debt waiver up to Rs 2 lakh for small/marginal farmers.",
    priority: "HIGH",
  },
  {
    insightId: "INS-3",
    title: "Arhtiya Network Opportunity",
    problem: "In April 2026, 45,000 arhtiyas went on strike demanding restoration of 2.5% commission. AAP called it 'blackmailing.'",
    opportunity: "Congress could flip 5-10 Bania-dominated seats by positioning as protector of arhtiya interests against AAP's DBT reforms.",
    recommendation: "Commit to restore 2.5% commission, position against further DBT expansion in mandi system.",
    priority: "HIGH",
  },
  {
    insightId: "INS-4",
    title: "Dera Politics",
    problem: "Ravidassia voters (2.5%, 21% of Dalits) follow dera heads' political instructions. Dera Sachkhand Ballan is primary institution.",
    opportunity: "BJP's Modi visited Dera in January 2026. AAP announced year-long Guru Ravidas 650th birth anniversary celebrations.",
    recommendation: "Maintain Dera Sachkhand Ballan relationships, concrete Ravidas Temple promises, dera-specific welfare.",
    priority: "HIGH",
  },
  {
    insightId: "INS-5",
    title: "BJP as Third Pole",
    problem: "BJP vote share trajectory: 7-8% (SAD alliance) → 6.6% (2022) → 19% (2024 Lok Sabha). BJP is now Punjab's third-largest.",
    opportunity: "BJP at 19% vote share can be kingmaker if no party crosses 59. In a 3-way fight, BJP could extract high price.",
    recommendation: "Win outright majority rather than relying on BJP post-election deals. Monitor BJP's Dalit and OBC outreach.",
    priority: "HIGH",
  },
  {
    insightId: "INS-6",
    title: "Youth Emigration Safety Valve",
    problem: "Major emigration from Malwa region driven by Jat Sikh youth from landowning families. 'Dunki' illegal route used.",
    opportunity: "Emigration acts as 'pressure valve' for discontent. If emigration的大门 closes (visa restrictions), political unrest could intensify.",
    recommendation: "Position as party that will fight for MSP, farmer debt relief (reducing need for emigration). Offer concrete employment narrative.",
    priority: "MEDIUM",
  },
];

// ==========================================
// TREND ANALYSIS DATA
// ==========================================

export const partyTrajectoriesData: PartyTrajectory[] = [
  {
    party: "Congress",
    trajectory: "IMPROVING",
    currentPosition: "Opposition, 18 seats (2022)",
    structuralCeiling: "59-65 seats",
    keyRisk: "CM face delay, factionalism",
  },
  {
    party: "AAP",
    trajectory: "DECLINING",
    currentPosition: "Governing, 92 seats (2022)",
    structuralCeiling: "55-65 seats",
    keyRisk: "Broken promises, anti-incumbency",
  },
  {
    party: "SAD",
    trajectory: "UNCERTAIN",
    currentPosition: "Opposition, 3 seats (2022)",
    structuralCeiling: "15-22 seats",
    keyRisk: "BJP split, internal factions",
  },
  {
    party: "BJP",
    trajectory: "GROWING",
    currentPosition: "Outside, 2 seats (2022), 19% vote (2024 LS)",
    structuralCeiling: "15-20 seats",
    keyRisk: "No state leadership, farm law resentment",
  },
];

export const regionalTrajectoriesData: RegionalTrajectory[] = [
  {
    region: "Malwa",
    trajectoryAssessment: "DECISIVE BATTLEGROUND",
    currentState: [
      "AAP dominant (2017-2022 wave)",
      "Congress recovered in LS 2024",
      "SAD showing rural revival signs",
    ],
    projection2027: {
      bestCase: "Congress 35-40 seats",
      baseCase: "Hung - 3-way split",
      worstCase: "AAP retains 30+ seats",
    },
    swingFactors: ["Farmer debt relief narrative", "Jat Sikh consolidation", "Arhtiya network alignment"],
  },
  {
    region: "Majha",
    trajectoryAssessment: "CONGRESS STRONGHOLD UNDER PRESSURE",
    currentState: [
      "Congress historically dominant",
      "Border security issues prominent",
      "Tarn Taran shows voter volatility",
    ],
    projection2027: {
      bestCase: "Congress 15-18 seats",
      baseCase: "Congress 12-15 seats",
      worstCase: "AAP fractures traditional Congress votes",
    },
    swingFactors: ["Drug crisis handling", "Border security narrative", "Panthic vs non-panthic voting"],
  },
  {
    region: "Doaba",
    trajectoryAssessment: "NR I HUB WITH HIGHEST DALIT CONCENTRATION",
    currentState: [
      "AAP governs from Jalandhar",
      "Highest per capita remittances",
      "Channi LS victory margin 1.76 lakh",
    ],
    projection2027: {
      bestCase: "Congress 10-12 seats",
      baseCase: "Congress 8-10 seats",
      worstCase: "AAP retains 15+ seats",
    },
    swingFactors: ["Channi CM face impact", "Youth unemployment", "NRI voting mobilization"],
  },
];

export const trendScenariosData: TrendScenario[] = [
  {
    scenarioName: "Congress Majority",
    seats: { Congress: 62, AAP: 35, SAD: 12, BJP: 8 },
    requirements: ["CM face announced by Aug 2026", "Malwa breakthrough", "Jat Sikh 60%+"],
    likelihood: "15-20%",
  },
  {
    scenarioName: "Hung Assembly",
    seats: { Congress: 48, AAP: 42, SAD: 15, BJP: 12 },
    requirements: ["3-way fight in Malwa", "No clear CM face", "BJP kingmaker"],
    likelihood: "35-40%",
  },
  {
    scenarioName: "AAP Retains",
    seats: { Congress: 35, AAP: 55, SAD: 14, BJP: 13 },
    requirements: ["Welfare scheme retention", "Anti-incumbency offset", "Dalit vote hold"],
    likelihood: "20-25%",
  },
];

export const swingFactorsData: SwingFactor[] = [
  { factorId: "SF-1", description: "CM Face Announcement", indicator: "Timing and popularity" },
  { factorId: "SF-2", description: "AAP Broken Promises", indicator: "Public sentiment tracking" },
  { factorId: "SF-3", description: "Farmer Debt Relief", indicator: "MSP guarantee campaign" },
  { factorId: "SF-4", description: "BJP Alliance Fate", indicator: "SAD-BJP reunion possibility" },
  { factorId: "SF-5", description: "Dera Politics", indicator: "Ravidassia vote movement" },
];

// ==========================================
// SWING CALCULATION DATA
// ==========================================

export const swingSegmentsData: SwingSegment[] = [
  {
    id: "SS1",
    name: "Soft AAP Voters",
    percentOfElectorate: "8-10%",
    voterCount: "17-21 lakh",
    swingProbability: "35%",
    congressSwingGain: "+3-5%",
    regionConcentration: "Malwa, Doaba",
  },
  {
    id: "SS2",
    name: "Jat Sikh Farmers",
    percentOfElectorate: "18-22%",
    voterCount: "38-47 lakh",
    swingProbability: "15%",
    congressSwingGain: "+2-3%",
    regionConcentration: "Malwa",
  },
  {
    id: "SS3",
    name: "Urban Middle Class",
    percentOfElectorate: "10-12%",
    voterCount: "21-26 lakh",
    swingProbability: "25%",
    congressSwingGain: "+2-4%",
    regionConcentration: "Ludhiana, Amritsar, Jalandhar",
  },
  {
    id: "SS4",
    name: "First-Time Youth Voters",
    percentOfElectorate: "6-8%",
    voterCount: "13-17 lakh",
    swingProbability: "40%",
    congressSwingGain: "+2-4%",
    regionConcentration: "Doaba, Urban Malwa",
  },
];

export const casteSwingCalculationsData: CasteSwingCalculation[] = [
  {
    caste: "Mazhabi Sikh",
    population: "6.3%",
    currentCongressPercent: 72,
    targetCongressPercent: 78,
    voterGain: "+1.2 lakh",
    seatImpact: "+3-5 seats",
  },
  {
    caste: "Ravidassia",
    population: "2.5%",
    currentCongressPercent: 55,
    targetCongressPercent: 65,
    voterGain: "+0.5 lakh",
    seatImpact: "+2-3 seats",
  },
  {
    caste: "Jat Sikh",
    population: "21%",
    currentCongressPercent: 55,
    targetCongressPercent: 62,
    voterGain: "+3.5 lakh",
    seatImpact: "+8-12 seats",
  },
  {
    caste: "Bania",
    population: "5.5%",
    currentCongressPercent: 35,
    targetCongressPercent: 45,
    voterGain: "+1.3 lakh",
    seatImpact: "+4-6 seats",
  },
];

export const malwaSwingEquationData: MalwaSwingEquation = {
  currentSeats: 18,
  targetSeats: 40,
  requiredSwing: "+22 seats from 69",
  totalSwingImpact: "Need 3-4% net swing across Malwa",
  projectedOutcome: "Hung assembly with Congress as largest single party",
};

export const flippableSeatsData: FlippableSeat[] = [
  { seat: "Moga", region: "Malwa", priority: "VERY_HIGH", flipPotential: "SAD weak, Jat Sikh swing" },
  { seat: "Bathinda Rural", region: "Malwa", priority: "HIGH", flipPotential: "SAD internal division" },
  { seat: "Nakodar", region: "Malwa", priority: "HIGH", flipPotential: "SAD-AAP split" },
  { seat: "Phillaur", region: "Doaba", priority: "MEDIUM", flipPotential: "Congress organizational push" },
  { seat: "Kharar", region: "Malwa", priority: "HIGH", flipPotential: "Urban, anti-AAP" },
];

// ==========================================
// RISK-OPPORTUNITY DATA
// ==========================================

export const risksData: RiskItem[] = [
  {
    riskId: "R-1",
    title: "CM Face Delay",
    category: "Strategic",
    severity: "CRITICAL",
    likelihood: "High - Already 2-3 months behind",
    impact: "-5-8% vote share",
    velocity: "Slow burn",
    mitigation: ["Announce by July 2026", "Use AICC survey data", "Pair with manifesto release"],
  },
  {
    riskId: "R-2",
    title: "BJP-SAD Alliance Revival",
    category: "External",
    severity: "HIGH",
    likelihood: "Medium - BJP wants 23 seats",
    impact: "-10-15 Congress seats",
    velocity: "Could happen by Aug 2026",
    mitigation: ["Monitor negotiations", "Prepare anti-SAD messaging", "Court SAD dissidents"],
  },
  {
    riskId: "R-3",
    title: "AAP Welfare Scheme Retention",
    category: "Strategic",
    severity: "HIGH",
    likelihood: "High - Women voters attached",
    impact: "-3-5% in retention areas",
    velocity: "Gradual erosion",
    mitigation: ["Contrast on delivery failures", "Announce better alternatives", "Document broken promises"],
  },
];

export const opportunitiesData: OpportunityItem[] = [
  {
    opportunityId: "O-1",
    title: "Arhtiya Network Courtable",
    category: "Coalition",
    urgency: "IMMEDIATE",
    potentialImpact: "Flip 5-10 Bania seats",
    timing: "Before arhtiya strike resolution",
    exploitationStrategy: [
      "Position as protector of mandis",
      "Commit to 2.5% commission restoration",
      "Contrast with AAP's DBT reforms",
    ],
  },
  {
    opportunityId: "O-2",
    title: "Dera Sachkhand Ballan",
    category: "Coalition",
    urgency: "HIGH",
    potentialImpact: "Secure Ravidassia 55% → 65%",
    timing: "Ongoing - Guru Ravidas events",
    exploitationStrategy: [
      "Maintain dera relationships",
      "Concrete Ravidas Temple promises",
      "Dera-specific welfare programs",
    ],
  },
  {
    opportunityId: "O-3",
    title: "BJP State Leadership Vacuum",
    category: "Competitive",
    urgency: "HIGH",
    potentialImpact: "Prevent BJP third-pole extraction",
    timing: "Before BJP fills leadership gap",
    exploitationStrategy: [
      "Highlight no Punjabi BJP leadership",
      "Attack BJP's centralism",
      "Position as only Punjabi party",
    ],
  },
];

// ==========================================
// STRATEGIC RECOMMENDATIONS DATA
// ==========================================

export const priorityVoterSegmentsData: PriorityVoterSegment[] = [
  {
    rank: 1,
    segment: "Traditional Congress (S1)",
    size: "25-30%",
    currentCongressPercent: "75%",
    targetPercent: "80%",
    seatImpact: "+2-3 seats (GOTV)",
    roi: "HIGH - Low cost retention",
  },
  {
    rank: 2,
    segment: "Issue Voter Malwa (S3)",
    size: "18-22%",
    currentCongressPercent: "40%",
    targetPercent: "55%",
    seatImpact: "+10-15 seats",
    roi: "MEDIUM - High investment",
  },
  {
    rank: 3,
    segment: "Youth First-Timer (S4)",
    size: "15-18%",
    currentCongressPercent: "30%",
    targetPercent: "45%",
    seatImpact: "+8-12 seats",
    roi: "HIGH - Long-term base",
  },
  {
    rank: 4,
    segment: "Caste-Consolidator (S5)",
    size: "10-12%",
    currentCongressPercent: "55%",
    targetPercent: "70%",
    seatImpact: "+5-8 seats",
    roi: "MEDIUM - Caste machinery needed",
  },
];

export const regionalPrioritiesData: RegionalPriority[] = [
  {
    region: "Malwa",
    seats: 69,
    resourceAllocation: "45% of campaign resources",
    target: "Win 35-40 seats",
    subRegionPriorities: [
      { subRegion: "Bathinda-Mansa", seats: 8, priorityIssue: "Farmer debt, SAD revival", flipPotential: "HIGH" },
      { subRegion: "Ludhiana Rural", seats: 10, priorityIssue: "Urban-rural divide, jobs", flipPotential: "MEDIUM" },
      { subRegion: "Ferozpur-Moga", seats: 9, priorityIssue: "Border security, drugs", flipPotential: "HIGH" },
    ],
  },
  {
    region: "Majha",
    seats: 25,
    resourceAllocation: "25% of campaign resources",
    target: "Win 12-15 seats",
    subRegionPriorities: [
      { subRegion: "Amritsar", seats: 6, priorityIssue: "Urban development, tourism", flipPotential: "MEDIUM" },
      { subRegion: "Tarn Taran", seats: 4, priorityIssue: "Drug crisis, border", flipPotential: "VERY_HIGH" },
    ],
  },
  {
    region: "Doaba",
    seats: 23,
    resourceAllocation: "20% of campaign resources",
    target: "Win 10-12 seats",
    subRegionPriorities: [
      { subRegion: "Jalandhar", seats: 8, priorityIssue: "Urban governance, jobs", flipPotential: "HIGH" },
      { subRegion: "Hoshiarpur", seats: 5, priorityIssue: "Rural development", flipPotential: "MEDIUM" },
    ],
  },
];

export const timelineMilestonesData: TimelineMilestone[] = [
  {
    phase: "Phase 1: Foundation (May-Jul 2026)",
    action: "Complete booth organization",
    owner: "PPCC Organizer",
    deadline: "Jul 31, 2026",
    successMetric: "100% booth coverage",
  },
  {
    phase: "Phase 2: Intensification (Aug-Oct 2026)",
    action: "Announce CM face + Ticket distribution",
    owner: "AICC High Command",
    deadline: "Oct 15, 2026",
    successMetric: "CM face approval 40%+",
  },
  {
    phase: "Phase 3: Mass Mobilization (Nov-Jan 2027)",
    action: "Nukkad rallies, manifesto launch",
    owner: "Campaign Committee",
    deadline: "Dec 1, 2026",
    successMetric: "117 constituencies covered",
  },
  {
    phase: "Phase 4: Final Sprint (Feb 2027)",
    action: "GOTV, booth-level deployment",
    owner: "District Presidents",
    deadline: "Feb 1, 2027",
    successMetric: "80%+ turnout in strongholds",
  },
];

export const resourceAllocationsData: ResourceAllocation[] = [
  {
    category: "Digital Infrastructure",
    amount: "Rs 8-12 crore",
    breakdown: ["Voter database: Rs 5Cr", "WhatsApp API: Rs 1Cr", "Meta campaigns: Rs 4Cr", "Analytics: Rs 2Cr"],
  },
  {
    category: "Booth-Level Operations",
    amount: "Rs 35-50 crore",
    breakdown: ["Worker training: Rs 10Cr", "GOTV transport: Rs 20Cr", "Booth materials: Rs 5Cr", "Agent payments: Rs 10Cr"],
  },
  {
    category: "Rallies & Events",
    amount: "Rs 20-30 crore",
    breakdown: ["Major rallies: Rs 15Cr", "Nukkad events: Rs 5Cr", "Manifesto launch: Rs 2Cr", "NRI outreach: Rs 3Cr"],
  },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const politicalLandscapeSynthesisData: PoliticalLandscapeSynthesis = {
  synthesisDate: "May 20, 2026",
  sourceFiles: [
    "s1-political-landscape.md",
    "s2-farmer-youth-crisis.md",
    "s3-power-brokers.md",
    "s4-party-machinery.md",
    "s5-candidate-ecology.md",
    "s6-voter-dynamics.md",
    "s7-digital-intelligence.md",
    "s8-opposition-intelligence.md",
  ],
  regionalAnalysis: regionalAnalysisData,
  castePopulation: castePopulationData,
  coalitionBlocks: coalitionBlocksData,
  casteCompatibilityMatrix: casteCompatibilityMatrix,
  partyVoteShare: partyVoteShareData,
  partySeatProjection: partySeatProjectionData,
  partyStrengths: partyStrengthsData,
  farmerDebtCrisis: farmerDebtCrisisData,
  youthUnemployment: youthUnemploymentData,
  crisisIntersection: crisisIntersectionData,
  arhtiyaNetwork: arhtiyaNetworkData,
  deraInfluence: deraInfluenceData,
  casteCouncils: casteCouncilData,
  boothOrganization: boothOrganizationData,
  partyFinances: partyFinancesData,
  leadershipAssessment: leadershipAssessmentData,
  voterSegments: voterSegmentsData,
  vdjStages: vdjStagesData,
  gotvInterventions: gotvInterventionsData,
  platformUsage: platformUsageData,
  digitalGaps: digitalGapsData,
  whatsappArchitecture: whatsappArchitectureData,
  digitalBudget: digitalBudgetData,
  nriInfluence: nriInfluenceData,
  sadStrategy: sadStrategyData,
  aapDefenseStrategy: aapDefenseStrategyData,
  oppositionThreatAssessment: oppositionThreatAssessmentData,
  electionScenarios: electionScenariosData,
  coalitionMath: coalitionMathData,
  strategicInsights: strategicInsightsData,
  // Trend Analysis
  partyTrajectories: partyTrajectoriesData,
  regionalTrajectories: regionalTrajectoriesData,
  trendScenarios: trendScenariosData,
  swingFactors: swingFactorsData,
  // Swing Calculation
  swingSegments: swingSegmentsData,
  casteSwingCalculations: casteSwingCalculationsData,
  malwaSwingEquation: malwaSwingEquationData,
  flippableSeats: flippableSeatsData,
  // Risk-Opportunity
  risks: risksData,
  opportunities: opportunitiesData,
  // Strategic Recommendations
  priorityVoterSegments: priorityVoterSegmentsData,
  regionalPriorities: regionalPrioritiesData,
  timelineMilestones: timelineMilestonesData,
  resourceAllocations: resourceAllocationsData,
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getRegionalAnalysis(region: "Malwa" | "Majha" | "Doaba"): RegionalAnalysis | undefined {
  return regionalAnalysisData.find(r => r.profile.region === region);
}

export function getCastePopulation(caste: string): CastePopulation | undefined {
  return castePopulationData.find(c => c.name === caste);
}

export function getVoterSegmentById(id: string): VoterSegment | undefined {
  return voterSegmentsData.find(v => v.id === id);
}

export function getPartyStrengths(party: string): PartyStrengths | undefined {
  return partyStrengthsData[party];
}

export function getStrategicInsightById(id: string): StrategicInsight | undefined {
  return strategicInsightsData.find(s => s.insightId === id);
}

export function getElectionScenario(name: string): ElectionScenario | undefined {
  return electionScenariosData.find(s => s.scenarioName === name);
}

export function getPartyTrajectory(party: string): PartyTrajectory | undefined {
  return partyTrajectoriesData.find(p => p.party === party);
}

export function getRegionalTrajectory(region: "Malwa" | "Majha" | "Doaba"): RegionalTrajectory | undefined {
  return regionalTrajectoriesData.find(r => r.region === region);
}

export function getRiskById(riskId: string): RiskItem | undefined {
  return risksData.find(r => r.riskId === riskId);
}

export function getOpportunityById(opportunityId: string): OpportunityItem | undefined {
  return opportunitiesData.find(o => o.opportunityId === opportunityId);
}

export function getFlippableSeatsByRegion(region: string): FlippableSeat[] {
  return flippableSeatsData.filter(s => s.region === region);
}

export function getTimelineMilestonesByPhase(phase: string): TimelineMilestone[] {
  return timelineMilestonesData.filter(m => m.phase.includes(phase));
}

export function getSwingSegmentById(id: string): SwingSegment | undefined {
  return swingSegmentsData.find(s => s.id === id);
}
