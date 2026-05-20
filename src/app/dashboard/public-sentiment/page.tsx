"use client";

import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";
import { KEY_ISSUES_VERIFIED, POLITICAL_ANATOMY } from "@/lib/constants";
import {
  KEY_SYNTHESIS_METRICS,
  crossReferenceValidation,
  qualityValidation,
  gapAnalysis,
} from "@/lib/synthesis-data";

// ============================================================
// CYCLE 2: OPPOSITION INTELLIGENCE - PUBLIC SENTIMENT
// ============================================================

interface SentimentMetric {
  party: string;
  value: number;
  change?: number;
  trend: "up" | "down" | "stable";
}

interface VoterSegment {
  segment: string;
  primary: string;
  intensity: string;
  shift: string;
  sentiment: string;
}

interface PollData {
  source: string;
  congress: number;
  aap: number;
  bjp: number;
  sad: number;
  date: string;
}

interface EmotionalDriver {
  emotion: string;
  intensity: string;
  triggers: string[];
  actionable: string;
}

interface AntiIncumbencyMetric {
  metric: string;
  value: string;
  detail: string;
}

// === CYCLE 1: WhatsApp Usage Data ===
interface WhatsAppUsage {
  platform: string;
  usagePct: string;
  dailyActive: string;
  politicalReach: string;
  note: string;
}

const whatsAppUsageData: WhatsAppUsage[] = [
  { platform: "WhatsApp", usagePct: "26.2%", dailyActive: "~55 lakh users", politicalReach: "Dominant political messaging platform", note: "Forward chains, group broadcasts, misinformation spread" },
];

// ==========================================
// CYCLE 2: SOCIO-ECONOMIC DATA INTERFACES (from research-P2/10_socio_economic)
// ==========================================

interface SocioEconomicMetric {
  label: string;
  value: string;
  unit?: string;
  comparison?: string;
  severity: "critical" | "high" | "medium" | "low";
  trend?: "up" | "down" | "stable";
}

interface PunjabSocioEconomic {
  perCapitaIncome: SocioEconomicMetric;
  youthUnemployment: SocioEconomicMetric;
  stateDebt: SocioEconomicMetric;
  debtToGSDP: SocioEconomicMetric;
  groundwaterExtraction: SocioEconomicMetric;
  drugUsers: SocioEconomicMetric;
  farmDebt: SocioEconomicMetric;
  hdi: SocioEconomicMetric;
  mpiPoverty: SocioEconomicMetric;
  districtPCIDisparity: SocioEconomicMetric;
  giniCoefficient: SocioEconomicMetric;
}

interface AllianceMathItem {
  party: string;
  likelySeats: string;
  region: string;
  conditions: string[];
}

interface GovernmentFormation {
  formation: string;
  floorTestTiming?: string;
  riskFactors?: string[];
  allianceMath?: AllianceMathItem[];
  governorDynamics?: string[];
  horseTradingPrevention?: string[];
}

interface CabinetConsiderations {
  ministerCount: string;
  regionalBalance: string;
  communityRepresentation: string[];
  keyPortfolios: string[];
  experienceVsNewFaces: string;
}

interface Swot {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

interface ScenarioItem {
  scenarioId: string;
  scenarioName: string;
  seatRange: string;
  probabilityAssessment: string;
  governmentFormation: GovernmentFormation;
  cabinetConsiderations?: CabinetConsiderations;
  first100DaysAgenda?: string[];
  swot: Swot;
}

interface ScenarioMatrix {
  scenarios: ScenarioItem[];
}

interface MediaManagement {
  designatedSpokesperson: string;
  speechesPrepared: boolean;
  socialMediaWarRoom: boolean;
  legalTeamOnStandby: boolean;
}

interface CommunicationStrategy {
  victorySpeech: string[];
  coalitionAnnouncement: string[];
  concessionSpeech: string[];
  mediaManagement: MediaManagement;
}

// CYCLE 2: SOCIO-ECONOMIC DATA (from research-P2/10_socio_economic)

const socioEconomicData: PunjabSocioEconomic = {
  perCapitaIncome: {
    label: "Per Capita Income",
    value: "2,30,523",
    unit: "INR",
    comparison: "Haryana: 3,25,000 INR",
    severity: "high",
    trend: "stable"
  },
  youthUnemployment: {
    label: "Youth Unemployment (15-29 yrs)",
    value: "19.3%",
    comparison: "National Avg: 14.3%",
    severity: "critical",
    trend: "up"
  },
  stateDebt: {
    label: "State Debt",
    value: "4.17",
    unit: "Lakh Crore INR",
    comparison: "LAST in NITI FHI Ranking",
    severity: "critical",
    trend: "up"
  },
  debtToGSDP: {
    label: "Debt-to-GSDP Ratio",
    value: "44.47%",
    comparison: "Fiscal Responsibility Threshold: 25%",
    severity: "critical",
    trend: "up"
  },
  groundwaterExtraction: {
    label: "Groundwater Extraction",
    value: "156.36%",
    unit: "% of recharge",
    comparison: "Over-exploited: 115 of 153 blocks",
    severity: "critical",
    trend: "up"
  },
  drugUsers: {
    label: "Drug Users",
    value: "6.6",
    unit: "Million",
    comparison: "18% of state population",
    severity: "critical",
    trend: "stable"
  },
  farmDebt: {
    label: "Farm Debt",
    value: "1.04 / 3",
    unit: "Lakh Crore INR (short-term / total)",
    comparison: "Avg Rs 2.03 lakh/household | 89% households indebted",
    severity: "high",
    trend: "stable"
  },
  hdi: {
    label: "Human Development Index",
    value: "0.740",
    comparison: "Rank 12 among Indian states",
    severity: "medium",
    trend: "stable"
  },
  mpiPoverty: {
    label: "MPI Poverty Rate",
    value: "4.75%",
    comparison: "Multidimensional Poverty Index",
    severity: "medium",
    trend: "down"
  },
  districtPCIDisparity: {
    label: "District PCI Disparity",
    value: "8.47:1",
    comparison: "Ratio between highest and lowest district",
    severity: "high",
    trend: "stable"
  },
  giniCoefficient: {
    label: "Gini Coefficient",
    value: "0.48",
    comparison: "Income inequality measure",
    severity: "high",
    trend: "stable"
  }
};

// Punjab vs Haryana Comparison
const punjabVsHaryanaData = [
  { metric: "Per Capita Income", punjab: "₹2,30,523", haryana: "₹3,25,000", ratio: "1.41x" },
  { metric: "Youth Unemployment", punjab: "19.3%", haryana: "14.8%", difference: "+4.5pp" },
  { metric: "State Debt/GSDP", punjab: "44.47%", haryana: "28.3%", difference: "+16.17pp" },
  { metric: "Groundwater Extraction", punjab: "156%", haryana: "112%", difference: "+44pp" },
  { metric: "HDI Rank", punjab: "12", haryana: "9", difference: "3 ranks lower" },
];

// CYCLE 2: Opposition Intelligence Sentiment Data

const oppositionSentiment: SentimentMetric[] = [
  { party: "Congress", value: 42, change: 10.5, trend: "up" },
  { party: "AAP", value: -42, change: -15, trend: "down" },
  { party: "BJP", value: 25, change: 8, trend: "up" },
  { party: "SAD", value: -28, change: -5, trend: "down" }
];

const voterSegmentSentiment: VoterSegment[] = [
  { segment: "Urban Youth (18-35)", primary: "Anger + Resignation", intensity: "Very High", shift: "AAP→Congress or NOTA", sentiment: "Negative" },
  { segment: "Rural Youth (18-35)", primary: "Anger + Betrayal", intensity: "High", shift: "AAP→Congress (drug crisis)", sentiment: "Negative" },
  { segment: "Women (25-55)", primary: "Frustration + Hope", intensity: "High", shift: "AAP loyal but disappointed", sentiment: "Mixed" },
  { segment: "SC Voters", primary: "Betrayal + Anger", intensity: "Very High", shift: "AAP→Congress (Mazhabi)", sentiment: "Negative" },
  { segment: "Jat Farmers", primary: "Anger + Resignation", intensity: "High", shift: "SAD/BJP or Congress", sentiment: "Negative" },
  { segment: "Urban Middle Class", primary: "Cynicism + Betrayal", intensity: "High", shift: "AAP→BJP or Congress", sentiment: "Negative" }
];

// Poll Data showing AAP collapse
const pollTimeline: PollData[] = [
  { source: "2022 Assembly Exit", congress: 22.9, aap: 42.0, bjp: 6.6, sad: 18.4, date: "Mar 2022" },
  { source: "2024 Lok Sabha", congress: 26.3, aap: 26.0, bjp: 18.6, sad: 11.6, date: "Apr 2024" },
  { source: "2026 Surveys", congress: 31.5, aap: 26.5, bjp: 13.5, sad: 19.5, date: "May 2026" }
];

// Emotional Drivers from Opposition Research
const emotionalDrivers: EmotionalDriver[] = [
  { emotion: "Anger", intensity: "Very High (85%)", triggers: ["Broken promises", "Drug crisis", "Unemployment", "SYL canal"], actionable: "Yes — channel into policy critique" },
  { emotion: "Betrayal", intensity: "Very High (81%)", triggers: ["Candidate defection", "Broken commitments", "Leadership vacuum"], actionable: "Yes — trust rebuilding" },
  { emotion: "Fear", intensity: "High (72%)", triggers: ["Security", "Religious harmony", "Economic stability"], actionable: "Yes — security narrative" },
  { emotion: "Resignation", intensity: "Moderate (58%)", triggers: ["Youth emigration", "Political disillusionment"], actionable: "Difficult — hope messaging required" }
];

// Anti-Incumbency Metrics (from Opposition Intelligence)
const antiIncumbencyMetrics: AntiIncumbencyMetric[] = [
  { metric: "Anti-Incumbency Score", value: "7/10", detail: "High voter dissatisfaction with AAP" },
  { metric: "AAP Dissatisfaction", value: "78%", detail: "Public dissatisfaction with AAP performance" },
  { metric: "AAP Vote Share Collapse", value: "42% → 26%", detail: "16 point drop in 2 years (2022-2024)" },
  { metric: "Broken Promises", value: "7 major", detail: "Women stipend, drugs, jobs, power rebate" },
  { metric: "Affected Seats", value: "45-55", detail: "Where AAP won on anti-incumbency in 2022" },
  { metric: "Flip Probability", value: "35-50%", detail: "20-30 AAP seats vulnerable" }
];

// WhatsApp Army Size Comparison (from Opposition Intelligence)
const whatsAppComparison = [
  { party: "BJP", size: "8-10 lakh", capacity: "Massive distribution", trend: "Growing" },
  { party: "AAP", size: "4-5 lakh", capacity: "Extensive grassroots", trend: "Stable" },
  { party: "Congress", size: "2-3 lakh", capacity: "Limited penetration", trend: "Growing slowly" },
  { party: "SAD", size: "1-2 lakh", capacity: "Traditional networks", trend: "Declining" }
];

// Hung Assembly Probability
const hungAssemblyLikelihood = {
  probability: "HIGH",
  reason: "AAP single largest but short of majority",
  scenarios: [
    { scenario: "Hung Assembly", probability: "35-40%", congress: "40-52", aap: "35-45" },
    { scenario: "Congress Largest", probability: "25-30%", congress: "52-58", aap: "30-40" },
    { scenario: "AAP Retention", probability: "20-25%", congress: "35-45", aap: "50-60" }
  ]
};

export default function PublicSentimentPage() {
  const sentimentTrend = [0.31, 0.33, 0.28, 0.35, 0.38, 0.41, 0.42];

  const voteIntention = [
    { party: "Congress", value: 26, source: "2024 LS actual", estimate: 32 },
    { party: "AAP", value: 25, source: "2024 LS actual", estimate: 26 },
    { party: "BJP", value: 18.6, source: "2024 LS actual", estimate: 18 },
    { party: "SAD", value: 11.6, source: "2024 LS actual", estimate: 14 },
    { party: "Others", value: 18.8, source: "2024 LS actual", estimate: 10 },
  ];

  const viralContent = [
    { content: "Sidhu Moosewala 'Scapegoat' song", platform: "YouTube", views: "65M+", sentiment: "Negative for AAP" },
    { content: "Mann Assembly 'drunk' video", platform: "Twitter/FB", views: "48hr trend", sentiment: "Negative for AAP" },
    { content: "AAP Rajya Sabha defections", platform: "Twitter", views: "National trend", sentiment: "Negative for AAP" },
  ];

  // Seat projection data from informal surveys (May 2026) - A13
  const seatProjections = [
    { party: "Congress", low: 45, high: 58, avg: 52, source: "Facebook video (Election Tak)" },
    { party: "AAP", low: 28, high: 37, avg: 33, source: "Various Facebook videos" },
    { party: "SAD", low: 14, high: 17, avg: 16, source: "Social media surveys" },
    { party: "BJP", low: 9, high: 12, avg: 11, source: "X/InsightRadarX" },
  ];

  // MP10-001: Formal Seat Projection Model (Congress Internal Data)
  const formalSeatProjection = {
    observers: 45,
    observerDeployment: "~3 per district across 23 districts",
    surveys: 3,
    surveyOversight: "AICC (Bhupesh Baghel) + Rahul Gandhi team",
    methodology: "MRP (Multilevel Regression and Post-Stratifcation)",
    confidenceInterval: "±15-25 seats at state level",
    tierClassification: [
      { tier: "Tier 1 (High Winnability)", resource: "Maximum investment", criteria: "Survey score + observer assessment" },
      { tier: "Tier 2 (Medium Contestable)", resource: "Selective investment", criteria: "New candidates, targeted welfare" },
      { tier: "Tier 3 (Low Unlikely)", resource: "Minimal exposure", criteria: "Retain presence, save resources" },
    ],
    updateTriggers: [
      "Post-SIR electoral roll (July 2026)",
      "Rally/event impact assessments",
      "Rahul Gandhi Punjab visits",
      "AAP fiscal announcements"
    ]
  };

  // MP10-002: Vote Share Forecasting
  const formalVoteShareForecast = [
    { party: "Congress", low: 30, high: 33, avg: 31.5, source: "Published polls (March-April 2026)" },
    { party: "AAP", low: 26, high: 27, avg: 26.5, source: "Published polls" },
    { party: "SAD", low: 19, high: 20, avg: 19.5, source: "Published polls" },
    { party: "BJP", low: 13, high: 14, avg: 13.5, source: "Published polls" },
    { party: "Others", low: 8, high: 11, avg: 9.5, source: "Calculated residual" },
  ];

  // MP10-009: Scenario Planning (Formal Three-Scenario Model)
  const mp10ScenarioPlanning = [
    {
      scenario: "Base Case (45-50% probability)",
      congressSeats: "55-65",
      aapSeats: "35-45",
      sadBjpSeats: "15-25",
      others: "5-10",
      conditions: "Hung Assembly, Congress largest single party, requires coalition support"
    },
    {
      scenario: "Best Case for Congress (20-25%)",
      congressSeats: "70-85",
      aapSeats: "25-35",
      sadBjpSeats: "10-15",
      others: "5-10",
      conditions: "CM face announced early, opposition fragmentation (BJP solo + Amritpal splits Panthic)"
    },
    {
      scenario: "Worst Case for Congress (25-30%)",
      congressSeats: "18-30",
      aapSeats: "60-75",
      sadBjpSeats: "8-12",
      others: "5-10",
      conditions: "AAP welfare reinforcement, Congress leadership vacuum, SAD-BJP alliance"
    },
  ];

  // MP10-004: Swing Voter Movement Data
  const swingVoterAnalysis = {
    volatilityIndex: "HIGH (among highest in India)",
    seatsWithinSwingMargin: "79% (92 of 117 seats)",
    swingTriggers: ["Drug crisis", "Governance failure", "Farmer distress", "Caste consolidation"],
    lateSwingFactor: "40-50% of total swing occurs in final 2 weeks",
    protestVoteNota: "1.2% (above national avg 0.8%)",
    voteSwing2017to2022: [
      { party: "AAP", swing: "+27.9%", from: "14.4%", to: "42.3%" },
      { party: "Congress", swing: "-15.6%", from: "38.5%", to: "22.9%" },
      { party: "SAD+BJP", swing: "-7.6%", from: "25.7%", to: "18.1%" },
    ]
  };

  // Youth unemployment detailed data (PLFS Oct-Dec 2025) - A24
  const youthUnemploymentData = [
    { category: "Overall (15-29 years)", value: "19.3%", comparison: "vs 14.3% national avg", trend: "Up from 18.9%", severity: "HIGH" },
    { category: "Rural Combined", value: "22.5%", comparison: "Highest in north", trend: "Worsening", severity: "CRITICAL" },
    { category: "Rural Male", value: "19.9%", comparison: "vs 12.4% national", trend: "High", severity: "HIGH" },
    { category: "Rural Female", value: "30.7%", comparison: "2x national avg (12.9%)", trend: "Severe", severity: "CRITICAL" },
    { category: "Urban Combined", value: "14.8%", comparison: "vs 18.0% national", trend: "Moderate", severity: "MODERATE" },
  ];

  // SC voting patterns - A13
  const scVotingData = [
    { subCaste: "Total SC Population", value: "~32%", note: "Highest proportion in India" },
    { subCaste: "AAP SC-reserved seats (2022)", value: "29/34", note: "85% of SC seats" },
    { subCaste: "Mazhabi Sikh (30% of SC)", value: "SAD→AAP shift", note: "Rural Malwa/Majha" },
    { subCaste: "Ravidasia (23-26% of SC)", value: "Congress base", note: "Doaba heartland" },
    { subCaste: "Ad-Dharm (11-15% of SC)", value: "Congress/BSP", note: "Most educated SC" },
  ];

  // AAP vote share collapse - A13
  const aapVoteCollapse = [
    { election: "2022 Assembly", value: "42.01%", seats: "92 seats", trend: "Wave victory" },
    { election: "2024 Lok Sabha", value: "~26%", seats: "7/13 seats", trend: "Sharp collapse" },
    { election: "2026 Surveys", value: "26-28%", seats: "Projected", trend: "Congress at 31-35%" },
  ];

  // Four-cornered contest thresholds - A13
  const contestThresholds = [
    { type: "Four-cornered contest", threshold: "~20-22%", parties: "AAP vs Congress vs SAD vs BJP", implication: "Vote splitting lowers winning mark" },
    { type: "Three-cornered (with combine)", threshold: "~26-28%", parties: "AAP vs Congress vs BJP-SAD", implication: "Higher winning threshold" },
    { type: "Hung Assembly probability", probability: "HIGH", note: "AAP single largest but short of majority" },
  ];

  // Viral content detailed metrics - A14
  const viralMetrics = [
    { metric: "Sidhu Moosewala 'Scapegoat' views", value: "65M+", platform: "YouTube", period: "April 2026 (second surge)" },
    { metric: "Pro Punjab Tv subscribers", value: "1.51M", platform: "YouTube", period: "Founded 2020" },
    { metric: "#Gaddar trending", value: "National", platform: "Twitter", period: "April 2026" },
    { metric: "Operation Lotus narrative", value: "48hr trend", platform: "Facebook", period: "April-May 2026" },
  ];

  // AAP Influencer Policy tiers - A14
  const influencerTiers = [
    { tier: "Category A (1M+ subscribers)", rate: "Rs 8 lakh/campaign" },
    { tier: "Category B (500K-1M)", rate: "Rs 5 lakh/campaign" },
    { tier: "Category C (100K-500K)", rate: "Rs 3 lakh/campaign" },
    { tier: "Category D/E (10K-100K)", rate: "Progressively lower" },
  ];

  // Social media penetration - B18
  const socialMediaPenetration = [
    { platform: "WhatsApp", urban: "85%+", rural: "70%+", note: "Primary voter contact channel" },
    { platform: "Facebook", penetration: "~65% of social users", note: "Regional groups" },
    { platform: "YouTube", penetration: "~45%", note: "Video comments" },
    { platform: "Instagram", penetration: "~25%", note: "Youth-heavy, growing" },
    { platform: "Twitter/X", penetration: "~15%", note: "Urban/elite" },
  ];

  // Migration data - A24
  const migrationData = [
    { metric: "Students to Canada (2022)", value: "136,000", note: "~60% of all Indian students to Canada" },
    { metric: "Canada trend (2025-26)", value: "Declining", note: "35% cap, visa restrictions, deportations" },
    { metric: "Deportation risk", value: "~9,000", note: "Punjabi students/asylum seekers" },
    { metric: "New destinations", value: "UK, NZ, Dubai", note: "Shifting migration patterns" },
  ];

  // Student elections banned since 1984 - A24
  const studentElectionsData = [
    { fact: "Banned since", value: "1984", note: "Height of terrorism period" },
    { fact: "Congress 2018 promise", value: "Never implemented", note: "Announced but not restored" },
    { fact: "AAP government action", value: "Not pursued", note: "No action since 2022" },
    { fact: "Key reason", value: "No party wants it", note: "'Students = anti-establishment' per former PU VC" },
  ];

  // Youth Congress organization - A24
  const youthCongressData = [
    { role: "Punjab Youth Congress President", name: "Mohit Mohindra", detail: "32yo, son of Brahm Mohindra, took office Aug 2023" },
    { role: "National NSUI President", name: "Vinod Jakhar", detail: "Appointed Feb 20, 2026 by Kharge" },
    { role: "NSUI claimed membership", value: "4 million", detail: "15,000 colleges (source: Wikipedia)" },
    { role: "2027 youth quota", value: "60-70 young faces", detail: "PPCC chief Warring announcement, Jan 2026" },
  ];

  // Voter turnout data - B36
  const voterTurnoutData = [
    { election: "2022 Assembly", turnout: "75.8%", note: "Below 2017 (78.8%)" },
    { election: "First-time voters 2022", turnout: "~65-70%", note: "Below state average" },
    { election: "Rural body polls 2025", turnout: "<50%", note: "Disengagement signal" },
  ];

  // AAP youth vote 2022 - B36
  const aapYouthVoteData = [
    { demographic: "Youth (18-35) vote for AAP (2022)", value: "45-55%", source: "Exit polls post-election" },
    { demographic: "AAP urban seats won", note: "Despite lower overall turnout", impact: "Better youth mobilization" },
    { demographic: "2024-26 erosion signals", value: "Declining", source: "Social media engagement metrics" },
  ];

  // Congress missing from digital - A14
  const congressDigitalGap = [
    { gap: "Congress 'missing' from narrative", source: "The Tribune, April 2026", impact: "AAP/BJP dominated social media" },
    { gap: "Digital ground mobilization", issue: "Drug menace not capitalized", source: "District Congress president complaint" },
    { gap: "Attacks 'lost bite'", issue: "Failing to capitalize on AAP troubles", source: "Punjab BJP president observation" },
  ];

  // Key hashtags - A14
  const keyHashtags = [
    { hashtag: "#Gaddar / #Gaddari", deployed: "AAP against defecting MPs", period: "April 2026" },
    { hashtag: "#OperationLotus", deployed: "AAP framing of BJP defections", period: "April-May 2026" },
    { hashtag: "#FarmersProtest", deployed: "Historical, resurfacing", period: "2020-21" },
    { hashtag: "#sidhumoosewala", reach: "5% of Punjab hashtag usage", period: "Ongoing" },
  ];

  // Emotional drivers for sentiment - B18
  const emotionalDrivers = [
    { emotion: "Anger", driver: "SYL canal, farmers' distress, unemployment", intensity: "High" },
    { emotion: "Fear", driver: "Security, religious harmony, economic stability", intensity: "High" },
    { emotion: "Betrayal", driver: "Broken promises, candidate betrayal", intensity: "Very High" },
    { emotion: "Resignation", driver: "Youth emigration, political disillusionment", intensity: "Moderate" },
    { emotion: "Hope", driver: "Economic recovery, drug crisis resolution", intensity: "Moderate" },
    { emotion: "Pride", driver: "Sikh pride, Punjabi language, agricultural heritage", intensity: "High" },
  ];

  // Rumor management response times - G32
  const rumorMetrics = [
    { stage: "Detection to Alert", target: "<45 min", critical: "<90 min" },
    { stage: "Alert to Verification", target: "<2 hrs", critical: "<4 hrs" },
    { stage: "Verification to First Response", target: "<4 hrs", critical: "<8 hrs" },
    { stage: "Containment Target (Tier 2)", target: ">85%", critical: ">70%" },
  ];

  // Sentiment velocity thresholds - B18
  const velocityThresholds = [
    { level: "Low", threshold: "<10 mentions/hour", status: "Normal monitoring" },
    { level: "Rising", threshold: "10-50 mentions/hour", status: "Watch" },
    { level: "High", threshold: "50-200 mentions/hour", status: "Active tracking" },
    { level: "Viral", threshold: ">200 mentions/hour", status: "Crisis protocol" },
  ];

  // Pre-bunking categories - G32
  const preBunkCategories = [
    { category: "Historical Record", examples: "Green Revolution, 1984, minority empowerment" },
    { category: "Policy Position", examples: "SYL canal, MSP guarantee, drug plan" },
    { category: "Comparative", examples: "AAP delivery vs Congress, SAD betrayal" },
    { category: "Vulnerability", examples: "Why Congress lost 2022, leadership renewal" },
  ];

  // Known rumor scenarios - G32
  const rumorScenarios = [
    { scenario: "Congress is Anti-Sikh", risk: "CRITICAL", mitigation: "Historical record, 1984 context, comparative" },
    { scenario: "Congress Sold Out Farmers", risk: "HIGH", mitigation: "MSP in writing, farm laws opposition" },
    { scenario: "All Parties Same / Nothing Will Change", risk: "HIGH", mitigation: "Concrete deliverables, specific commitments" },
    { scenario: "Congress Can't Win / Strategic Voting", risk: "HIGH", mitigation: "Internal polling, voter contact data" },
    { scenario: "Congress Leaders Are Corrupt", risk: "MODERATE", mitigation: "Reform documentation, comparative accountability" },
  ];

  // MP7-003: Buzz Tracking & Velocity Analysis (Real-Time Monitoring)
  const mp7BuzzTracking = {
    keywordTaxonomy: {
      total: "3,450+ keywords",
      categories: ["Policy (840)", "Leadership (620)", "Issue-based (1,100)", "Anti-corruption (450)", "Regional (440)"],
      languages: ["Punjabi", "Hindi", "English", "Dialectal variations"]
    },
    // === MP7 MISSING DATA ADDED: Top 5 Monitoring Keywords ===
    topKeywords: [
      { rank: 1, keyword: "Drugs/Nasha", priority: "CRITICAL", weight: 3.0, multiplier: "3.0x volume", reason: "Defining rural Malwa issue, 6.6M users" },
      { rank: 2, keyword: "Unemployment/Berozgar", priority: "CRITICAL", weight: 2.5, multiplier: "2.5x volume", reason: "Youth desperation, 19.3% youth unemployment" },
      { rank: 3, keyword: "MSP/Farm Crisis", priority: "HIGH", weight: 2.0, multiplier: "2.0x volume", reason: "Farmer suicide data, agrarian debt" },
      { rank: 4, keyword: "Corruption/Bhrashtachar", priority: "HIGH", weight: 1.8, multiplier: "1.8x volume", reason: "AAP governance failures, broken promises" },
      { rank: 5, keyword: "Law & Order/Security", priority: "MEDIUM", weight: 1.5, multiplier: "1.5x volume", reason: "Gangland killings, drug-related violence" },
    ],
    // === MP7 MISSING DATA ADDED: Keyword Volume Multipliers ===
    volumeMultipliers: [
      { issue: "Drugs/Nasha", multiplier: "3.0x", baseline: "100 mentions/hr", spike: "300 mentions/hr" },
      { issue: "Unemployment", multiplier: "2.5x", baseline: "100 mentions/hr", spike: "250 mentions/hr" },
      { issue: "MSP/Farm Crisis", multiplier: "2.0x", baseline: "100 mentions/hr", spike: "200 mentions/hr" },
      { issue: "Corruption", multiplier: "1.8x", baseline: "100 mentions/hr", spike: "180 mentions/hr" },
      { issue: "Law & Order", multiplier: "1.5x", baseline: "100 mentions/hr", spike: "150 mentions/hr" },
    ],
    // === MP7 MISSING DATA ADDED: Alert Thresholds ===
    alertThresholds: [
      { level: "GREEN", threshold: "Baseline", indicator: "<2x normal volume", action: "Routine monitoring" },
      { level: "ORANGE", threshold: "3x spike + 20% neg shift", indicator: "300% baseline + sentiment swing", response: "<30 min to war room" },
      { level: "RED", threshold: "Death clusters / Viral crisis", indicator: "Multiple deaths, 500%+ spike", response: "<15 min - leadership alert" },
    ],
    velocityMetrics: [
      { level: "Level 1 (Baseline)", mentions: "<100/hour", color: "bg-green-500", action: "Routine monitoring" },
      { level: "Level 2 (Elevated)", mentions: "100-500/hour", color: "bg-yellow-500", action: "Enhanced tracking" },
      { level: "Level 3 (High)", mentions: "500-2,000/hour", color: "bg-orange-500", action: "Active response team" },
      { level: "Level 4 (Critical)", mentions: ">2,000/hour", color: "bg-red-500", action: "War room escalation" },
      { level: "Crisis (Black Swan)", mentions: "Viral velocity", color: "bg-purple-500", action: "Leadership briefing" }
    ],
    originalAlertThresholds: [
      { type: "Spike Detection", threshold: "3x baseline within 15 min", response: "<30 min" },
      { type: "Negative Sentiment Shift", threshold: ">15% negative swing", response: "<60 min" },
      { type: "Cross-Platform Cascade", threshold: "3+ platforms simultaneously", response: "<45 min" },
      { type: "Influencer Amplification", threshold: "1M+ reach within 2 hours", response: "<90 min" }
    ],
    // === MP7 MISSING DATA ADDED: Real-Time Monitoring Operations ===
    monitoringOperations: {
      coverage: "24/7 (365 days)",
      cycles: {
        daily: "Hourly sentiment snapshots, 6 reports/day",
        weekly: "Comprehensive trend report, issue ranking",
        realtime: "Alert triggers for threshold breaches"
      },
      team: "5-7 analysts, 3 shifts",
      tools: "Social listening platform, sentiment analyzer, dashboard"
    },
    // === MP7 MISSING DATA ADDED: Monitoring Cost Tiers ===
    monitoringCostTiers: {
      basic: { cost: "INR 50-60 lakh/year", features: ["3,450+ keywords", "5 platforms", "Daily reports", "Email alerts"] },
      standard: { cost: "INR 60-70 lakh/year", features: ["All basic +", "Real-time dashboard", "Cross-platform correlation", "Influencer tracking"] },
      premium: { cost: "INR 70-80 lakh/year", features: ["All standard +", "Predictive analytics", "Rapid response tier integration", "Dedicated analyst"] },
    },
    // === MP7 MISSING DATA ADDED: Sentiment Decay Half-Lives ===
    sentimentDecay: {
      positiveStory: "48-72 hours half-life",
      negativeRumor: "24-36 hours half-life",
      crisisEvent: "7-10 days full decay",
      note: "Negative sentiment decays slower; requires active counter-narrative"
    },
    // === MP7 MISSING DATA ADDED: Cross-Platform Correlation ===
    crossPlatformCorrelation: {
      twitterToFacebook: "2-4 hour lag",
      twitterToInstagram: "4-6 hour lag",
      facebookToWhatsApp: "1-3 hour lag",
      viralVelocity: "Twitter first signal in 78% of cases",
      cascadePattern: "Twitter → Facebook → WhatsApp → Ground"
    },
    // === MP7 MISSING DATA ADDED: Rapid Response Tiers ===
    rapidResponseTiers: [
      { tier: "Tier 1 (CRITICAL)", responseTime: "2 hours", trigger: "Death clusters, violence, major scandal", escalation: "Immediate leadership briefing" },
      { tier: "Tier 2 (HIGH)", responseTime: "48 hours", trigger: "3x spike, negative viral narrative", escalation: "War room mobilization" },
      { tier: "Tier 3 (MODERATE)", responseTime: "2 weeks", trigger: "Sustained negative trend, rumor spread", escalation: "Strategy adjustment" },
    ],
    // === MP7 MISSING DATA ADDED: Response Time SLAs ===
    responseTimeSLAs: [
      { stage: "Detection to Alert", target: "<15 min", critical: "<30 min" },
      { stage: "Alert to Verification", target: "<2 hrs", critical: "<4 hrs" },
      { stage: "Verification to Response", target: "<4 hrs", critical: "<8 hrs" },
      { stage: "Response to Containment", target: "<24 hrs", critical: "<72 hrs" },
    ],
    dataSources: [
      { source: "Social Media", weight: "40%", platforms: "Facebook, X, Instagram, YouTube, TikTok" },
      { source: "News Media", weight: "25%", platforms: "Digital news, regional papers, TV" },
      { source: "WhatsApp/Telegram", weight: "20%", platforms: "Group forwards, channels" },
      { source: "Ground Reports", weight: "15%", platforms: "Booth-level feedback, rallies" }
    ]
  };

  // MP7-004: Emotion Analysis & Segment-Wise Tracking
  const mp7EmotionAnalysis = {
    primaryEmotions: [
      { emotion: "Anger", intensity: "Very High (85%)", triggers: ["Broken promises", "Drug crisis", "Unemployment", "SYL canal"], actionable: "Yes — channel into policy critique" },
      { emotion: "Fear", intensity: "High (72%)", triggers: ["Security", "Religious harmony", "Economic stability", "Job loss"], actionable: "Yes — security narrative" },
      { emotion: "Betrayal", intensity: "Very High (81%)", triggers: ["Candidate defection", "Broken commitments", "Leadership vacuum"], actionable: "Yes — trust rebuilding" },
      { emotion: "Resignation", intensity: "Moderate (58%)", triggers: ["Youth emigration", "Political disillusionment", "Cynicism"], actionable: "Difficult — hope messaging required" },
      { emotion: "Hope", intensity: "Moderate (52%)", triggers: ["New leadership", "Policy promises", "Change narrative"], actionable: "Yes — amplify aspirational" },
      { emotion: "Pride", intensity: "High (76%)", triggers: ["Sikh pride", "Punjabi language", "Agricultural heritage", "Cultural identity"], actionable: "Yes — heritage celebration" }
    ],
    segmentWiseEmotions: [
      { segment: "Urban Youth (18-25)", primary: "Anger + Resignation", intensity: "Very High", shift: "AAP→Congress or NOTA" },
      { segment: "Rural Youth (18-35)", primary: "Anger + Betrayal", intensity: "High", shift: "AAP→Congress (drug crisis)" },
      { segment: "Women (All)", primary: "Frustration + Hope", intensity: "High", shift: "AAP loyal but disappointed" },
      { segment: "SC Voters", primary: "Betrayal + Anger", intensity: "Very High", shift: "AAP→Congress (Mazhabi)" },
      { segment: "Jat Farmers", primary: "Anger + Resignation", intensity: "High", shift: "SAD/BJP or Congress" },
      { segment: "Urban Middle Class", primary: "Cynicism + Betrayal", intensity: "High", shift: "AAP→BJP or Congress" },
      { segment: "NRI Community", primary: "Anger + Pride", intensity: "Very High", shift: "Pro-Congress (historical)" }
    ],
    emotionTriggers: [
      { trigger: "Candidate Selection", emotional: "Excitement or Betrayal", impact: "High", timing: "Ticket announcement" },
      { trigger: "Rally/Event", emotional: "Hope or Anger", impact: "Medium", timing: "During event" },
      { trigger: "Social Media Viral", emotional: "Anger or Pride", impact: "High", timing: "48-72 hours" },
      { trigger: "News Story", emotional: "Fear or Trust", impact: "Medium", timing: "24-48 hours" },
      { trigger: "Defection/Joining", emotional: "Betrayal or Welcome", impact: "Very High", timing: "Immediate" }
    ]
  };

  // MP7-004: Rumor Management Framework
  const mp7RumorManagement = {
    detectionToAlert: { target: "<45 min", critical: "<90 min" },
    alertToVerification: { target: "<2 hrs", critical: "<4 hrs" },
    verificationToResponse: { target: "<4 hrs", critical: "<8 hrs" },
    containmentTarget: { tier2: ">85%", critical: ">70%" },
    preBunkingTopics: [
      { category: "Historical Record", examples: "1984 Sikh riots context, Green Revolution achievements, minority empowerment" },
      { category: "Policy Positions", examples: "SYL canal stance, MSP guarantee, drug crisis plan, farmers welfare" },
      { category: "Comparative", examples: "AAP 2022-2026 delivery vs Congress alternative, governance track record" },
      { category: "Leadership", examples: "Rahul Gandhi's consistency, Congress's 2024 performance, stability vs chaos" }
    ],
    knownRumorScenarios: [
      { rumor: "Congress is Anti-Sikh", risk: "CRITICAL", probability: "85%", impact: "Severe", mitigation: "Historical record, 1984 context, comparative", timeline: "Preempt before narrative gains traction" },
      { rumor: "Congress Sold Out Farmers", risk: "HIGH", probability: "70%", impact: "Significant", mitigation: "MSP in writing, farm laws opposition record", timeline: "Preempt" },
      { rumor: "All Parties Same / Nothing Changes", risk: "HIGH", probability: "75%", impact: "Moderate", mitigation: "Concrete deliverables, specific commitments", timeline: "Ongoing" },
      { rumor: "Congress Can't Win / Strategic Voting", risk: "HIGH", probability: "80%", impact: "High", mitigation: "Internal polling data, voter contact evidence", timeline: "Preempt" },
      { rumor: "Congress Leaders Are Corrupt", risk: "MODERATE", probability: "60%", impact: "Moderate", mitigation: "Reform documentation, accountability frameworks", timeline: "Reactive" }
    ],
    responsePlaybook: [
      { step: "Detect", tool: "Social listening + keyword alerts", sla: "<15 min" },
      { step: "Verify", tool: "Fact-check team + ground truth", sla: "<2 hrs" },
      { step: "Amplify", tool: "Pre-bunking content + influencer network", sla: "<4 hrs" },
      { step: "Contain", tool: "Counter-narrative + official response", sla: "<8 hrs" },
      { step: "Learn", tool: "Post-incident analysis + update playbook", sla: "24 hrs" }
    ]
  };

  // NRI Voter Sentiment (MP2-008)
  const nriVoterSentiment = [
    { sentiment: "Pro-Congress", diaspora: "Canada (8L), UK (4-5L)", reason: "Historical ties, anti-AAP drug trafficking narrative", intensity: "HIGH" },
    { sentiment: "Pro-BJP", diaspora: "Australia (2L), USA (1.5L)", reason: "Modi government support, economic opportunities", intensity: "MEDIUM" },
    { sentiment: "Anti-Establishment", diaspora: "Youth diaspora (3L+)", reason: "Drug crisis, broken promises, emigration frustration", intensity: "HIGH" },
    { sentiment: "Diaspora Apathy", diaspora: "All regions", reason: "No voting mechanism, disconnection from process", intensity: "VERY HIGH" },
  ];

  // India-Canada Tensions Impact (MP2-008)
  const indiaCanadaTensions = [
    { event: "Nijjar Killing", date: "Sept 2023", impact: "Hardened pro-Khalistan diaspora, anti-India sentiment spike" },
    { event: "Canada Diplomatic Crisis", date: "Sept 2024", impact: "66 Canadian diplomats expelled, INDIA flag march in Amritsar" },
    { event: "Student Visa Decline", date: "2025-26", impact: "136K students (2022) → declining due to 35% cap, deportations" },
    { event: "Deportation Risk", count: "~9,000", impact: "Punjabi students/asylum seekers face removal" },
  ];

  // Anti-Incumbent Sentiment (MP2-010)
  const antiIncumbentSentiment = [
    { metric: "AAP Broken Promises", count: 7, examples: "Drug-Free Punjab, 24L jobs, Women stipend, Healthcare, Education, Mohalla Clinics, Farmer debt" },
    { metric: "Vote Share Collapse", data: "42% (2022) → 26% (2024 LS)", impact: "16 point drop in 2 years" },
    { metric: "Anti-Incumbent Seats", estimate: "45-55 seats", note: "Where AAP won on anti-incumbency in 2022" },
    { metric: "Flip Probability", range: "35-50%", seats: "20-30 AAP seats vulnerable", reason: "Broken promise fatigue" },
  ];

  // Voter Disillusionment Metrics (MP2-010)
  const voterDisillusionment = [
    { type: "Dera Ballan Followers", sentiment: "MIXED", shift: "5-8 lakh followers, traditional SAD but considering alternatives", driver: "Dera Sachkhand Ballan activities" },
    { type: "Namdhari Voters", sentiment: "SWING", shift: "500K-1M, 3-5 ACs directly impacted", driver: "Namdhari sect politics" },
    { type: "Mazhabi Sikh Rural", sentiment: "AAP→Congress", shift: "30% of SC, traditional SAD shifting to AAP then Congress", driver: "Drug crisis, agrarian distress" },
    { type: "Urban Middle Class", sentiment: "AAP→BJP", shift: "15-20%, anti-corruption narrative backfired", driver: "ED arrests, governance failure" },
  ];

  // === DATA FROM A-01-19: ECONOMIC INEQUALITY ===
  const economicInequalityData = {
    giniCoefficient: {
      punjab: "0.296",
      india: "0.266",
      comparison: "Punjab has higher inequality than national average",
      urbanRuralGap: "Urban gini 0.35 vs Rural 0.24"
    },
    wealthDistribution: {
      top10: "55% of state wealth",
      bottom50: "8% of state wealth",
      middle40: "37% of state wealth",
      note: "Wealth concentration in urban elite, NRI families"
    },
    incomeGini: {
      rural: "0.24",
      urban: "0.35",
      urbanRuralGap: "46% higher in urban areas"
    },
    landInequality: {
      top10Percent: "74% of agricultural land",
      bottom50Percent: "3% of agricultural land",
      dalitLand: "3.5% despite 32% population",
      giniLand: "0.65 (highly unequal)"
    },
    nriRemittance: {
      annual: "$15-18 billion",
      contribution: "35-40% of Punjab's GDP",
      distribution: "Concentrated in Doaba and urban elite",
      inequality: "Remittances benefit top 20% households"
    },
    ruralDistress: {
      malwa: "80% of farm suicides in Malwa",
      debtBurden: "Rs 2.03 lakh average farm debt",
      agriculturalLaborers: "38% of SC landless"
    },
    impact: {
      politicalSalience: "Voter anger at wealth disparity",
      congressNarrative: "Pro-poor credentials vs AAP/BJP elite",
      targetSegments: ["Rural poor", "SC communities", "Landless laborers"]
    }
  };

  // === DATA FROM A-01-21: SUICIDE CLUSTERS ===
  const suicideClustersData = {
    bathindaMoga: {
      region: "Bathinda-Moga belt",
      suicides: "Excessive compared to other districts",
      cause: "Agrarian distress, debt, crop failure",
      electoralImpact: "High — voter anger at farm crisis"
    },
    farmSuicides: {
      2019: 302,
      2023: 174,
      decline: "-42%",
      butStillHigh: "174 deaths still significant",
      region: "80-90% in Malwa region"
    },
    pattern: {
      clusters: "Bathinda, Moga, Mansa, Sangrur",
      trigger: "Debt cycles, crop failure, price crashes",
      demographic: "Small/marginal farmers, Jat Sikh",
      warningSign: "Apricot 2026 case (brothers died)"
    },
    mentalHealth: {
      treatmentGap: "92% of mentally ill receive no treatment",
      mentalHealthBudget: "0.05% of health budget",
      psychiatrists: "0.03 per 100,000 population",
      depression: "12% prevalence in rural Punjab"
    },
    politicalFraming: {
      narrative: "AAP failed farmers, suicides continue",
      congressAdvantage: "Congress can weaponize",
      solution: "Promise MSP, debt waiver, crop insurance"
    },
    electionRelevance: {
      constituencies: "20-25 assembly seats",
      impact: "Farm distress = anti-incumbent",
      voterAppeal: "Promise rural rescue package"
    }
  };

// ==========================================
// CYCLE 4: POST-ELECTION SCENARIOS (T-MP10-FUTR-001)
// Scenario Matrix - 5 Congress Seat Scenarios
// ==========================================

const scenarioMatrixData: ScenarioMatrix = {
  scenarios: [
    {
      scenarioId: "A",
      scenarioName: "Comfortable Majority",
      seatRange: "70+ Seats",
      probabilityAssessment: "VERIFICATION_NEEDED - depends on campaign execution, AAP performance, alliance dynamics",
      governmentFormation: {
        formation: "Congress forms government alone; CLP elects leader becomes CM; no alliance dependency",
        floorTestTiming: "Within 15-30 days (Bommai precedent)",
      },
      cabinetConsiderations: {
        ministerCount: "18-20 Ministers (91st Amendment cap: 17 max)",
        regionalBalance: "Malwa, Majha, Doaba must all have representation",
        communityRepresentation: ["Jat Sikh", "Dalit (32% of Punjab population)", "Hindu", "Other communities"],
        keyPortfolios: ["Home", "Finance", "Revenue", "Agriculture", "PWD", "Health", "Education"],
        experienceVsNewFaces: "Mix of veterans and fresh talent",
      },
      first100DaysAgenda: [
        "Fulfill top 3 manifesto promises",
        "Establish anti-corruption mechanisms",
        "Address farmer distress (loan waiver or MSP assurance)",
        "Drug menace policy (rehabilitation and enforcement)",
        "Administrative clean-up (transfer postings based on merit)",
      ],
      swot: {
        strengths: [
          "Strong mandate enables bold reforms",
          "No coalition compulsions",
          "Can set narrative from Day 1",
        ],
        weaknesses: [
          "High expectations may be difficult to meet",
          "Internal factionalism may resurface without external pressure",
          "Anti-incumbency clock starts immediately",
        ],
        opportunities: [
          "Reset Congress brand in Punjab for next decade",
          "Demonstrate governance contrast with AAP",
          "Build cadre for Lok Sabha 2029",
        ],
        threats: [
          "AAP may regroup as aggressive opposition",
          "Central government (BJP) may create administrative friction",
          "Media scrutiny on every unfulfilled promise",
        ],
      },
    },
    {
      scenarioId: "B",
      scenarioName: "Narrow Majority",
      seatRange: "59-69 Seats",
      probabilityAssessment: "VERIFICATION_NEEDED",
      governmentFormation: {
        formation: "Congress can form government alone but with thin margin",
        floorTestTiming: "Request earliest possible test (within 3-5 days)",
        riskFactors: [
          "2-3 defections trigger crisis",
          "BJP/AAP poaching with central backing",
          "By-election losses erode margin",
        ],
      },
      cabinetConsiderations: {
        ministerCount: "Strategic allocation - every berth is a loyalty tool",
        regionalBalance: "Maximum caution - dissatisfaction = defection risk",
        communityRepresentation: ["Jat Sikh", "Dalit", "Hindu", "Other communities"],
        keyPortfolios: ["Home", "Finance", "Agriculture", "PWD", "Health"],
        experienceVsNewFaces: "Prioritize loyalty over experience",
      },
      swot: {
        strengths: [
          "Full majority claim, no coalition constraints",
        ],
        weaknesses: [
          "2-3 defections trigger crisis",
          "Factional demands harder to manage",
        ],
        opportunities: [
          "Demonstrate majority legitimacy",
        ],
        threats: [
          "BJP/AAP poaching with central backing",
          "By-election losses erode margin",
        ],
      },
    },
    {
      scenarioId: "C",
      scenarioName: "Single Largest, Short of Majority",
      seatRange: "40-58 Seats",
      probabilityAssessment: "Hung Assembly - Need Alliance Partners",
      governmentFormation: {
        formation: "Congress needs 59 seats for majority; shortfall of 1-19 seats",
        allianceMath: [
          { party: "BSP", likelySeats: "2-5 seats", region: "Doaba/Malwa SC-heavy constituencies", conditions: ["Deputy CM", "Significant portfolio"] },
          { party: "SAD (Amritsar/Amarinder faction)", likelySeats: "3-8 seats", region: "Fragmented Akali vote", conditions: ["Farmer-friendly policies", "Sikh religious body influence"] },
          { party: "Independents", likelySeats: "2-6 seats", region: "Statewide", conditions: ["Ministerial berths", "Constituency development funds"] },
        ],
        governorDynamics: [
          "Governor has discretion in hung assembly",
          "BJP influence on Governor possible (central appointee)",
          "Legal strategy: Have alliance letters ready before approaching Governor",
        ],
        horseTradingPrevention: [
          "Lodge pre-emptive complaint with Election Commission",
          "Document all MLA commitments in writing",
          "Approach Supreme Court for proactive anti-defection enforcement",
          "House MLAs in secure location during government formation",
        ],
      },
      swot: {
        strengths: [
          "Congress as natural pole of anti-AAP/BJP sentiment",
          "Historical precedent: Congress has managed coalitions",
          "Can claim 'people chose Congress as largest party'",
        ],
        weaknesses: [
          "Dependency on unreliable allies",
          "Policy compromises may dilute governance",
          "Allies may extract unreasonable demands mid-term",
        ],
        opportunities: [
          "Build long-term alliance structure for future elections",
          "Demonstrate coalition-building ability",
          "Reform-oriented allies could strengthen governance",
        ],
        threats: [
          "Government collapse mid-term if allies withdraw",
          "Presidential/Speaker manipulation by opposition",
          "Bye-election losses could sink the government",
        ],
      },
    },
    {
      scenarioId: "D",
      scenarioName: "Strong Opposition",
      seatRange: "25-39 Seats",
      probabilityAssessment: "Opposition Status",
      governmentFormation: {
        formation: "Claim Leader of Opposition position (minimum 10% of House = 12 MLAs - easily met)",
      },
      swot: {
        strengths: [
          "Significant floor presence to anchor opposition unity",
        ],
        weaknesses: [
          "Patronage networks weaken",
          "Factional blame game risk",
        ],
        opportunities: [
          "Government will face anti-incumbency by 2030",
        ],
        threats: [
          "AAP/BJP co-opt Congress vote base",
          "Further decline if not arrested",
        ],
      },
    },
    {
      scenarioId: "E",
      scenarioName: "Poor Performance",
      seatRange: "<25 Seats",
      probabilityAssessment: "Emergency Review Required",
      governmentFormation: {
        formation: "Emergency CLP meeting within 48 hours; independent committee to analyze defeat",
      },
      swot: {
        strengths: [
          "Congress brand has residual value",
          "2017 proved 77 seats possible",
        ],
        weaknesses: [
          "Existential questions",
          "Donor flight",
          "Cadre shift to winning parties",
        ],
        opportunities: [
          "Clean slate for new leadership",
        ],
        threats: [
          "AAP/BJP consolidate further",
          "Regional parties fill vacuum",
        ],
      },
    },
  ],
};

const communicationStrategyData: CommunicationStrategy = {
  victorySpeech: [
    "Acknowledge people's mandate with humility",
    "Credit party workers and alliance partners",
    "Outline immediate priorities (first 100 days preview)",
    "Message of unity - 'Punjab's victory, not Congress's victory'",
    "Graceful mention of opponents - democratic tradition",
  ],
  coalitionAnnouncement: [
    "Announce alliance before claiming to form government",
    "Present Common Minimum Program",
    "Introduce ally leaders - visual of unity",
    "Emphasize stability and shared vision for Punjab",
  ],
  concessionSpeech: [
    "Accept people's verdict gracefully - no conspiracy theories",
    "Thank workers for effort",
    "Commit to constructive opposition",
    "No immediate leadership announcements (allow reflection period)",
    "'We will be back stronger' - forward-looking message",
  ],
  mediaManagement: {
    designatedSpokesperson: "Prepare designated spokesperson for each scenario",
    speechesPrepared: true,
    socialMediaWarRoom: true,
    legalTeamOnStandby: true,
  },
};

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
              7
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Public Sentiment
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Real-time sentiment tracking • Issue prioritization • Mood analysis
          </p>
        </div>
        <Badge variant="success">+0.42 Net Sentiment</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Net Sentiment"
          value="+0.42"
          subtitle="Congress favorability"
          change={10.5}
          trend="up"
          color="bg-purple-500"
        />
        <MetricCard
          title="Data Points"
          value="12.4L"
          subtitle="This week"
          change={23}
          trend="up"
          color="bg-blue-500"
        />
        <MetricCard
          title="Positive Share"
          value="58%"
          subtitle="Favorable mentions"
          change={8}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Trending Issues"
          value="10"
          subtitle="Active topics"
          color="bg-orange-500"
        />
      </div>

      {/* Political Anatomy - Electoral Context for Sentiment */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm dark:border-emerald-800 dark:bg-emerald-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Political Anatomy — Electoral Context
          </h3>
          <Badge variant="success">Cycle 2 Data</Badge>
        </div>
        <p className="mb-6 text-sm text-emerald-700 dark:text-emerald-400">
          Understanding the electoral landscape that shapes public sentiment
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">117</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Total Assembly Seats</div>
            <div className="mt-1 text-xs text-slate-500">Majority: 59 seats</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2027</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Next Election</div>
            <div className="mt-1 text-xs text-slate-500">258 days remaining</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">79%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Seats Within Swing Margin</div>
            <div className="mt-1 text-xs text-slate-500">92 of 117 seats</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400">16pp</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">AAP Vote Share Collapse</div>
            <div className="mt-1 text-xs text-slate-500">42% → 26% (2022-2024)</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">2022 Assembly Results</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">AAP</span>
                <span className="font-medium text-cyan-600 dark:text-cyan-400">92 seats (42%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Congress</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">18 seats (23%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">SAD</span>
                <span className="font-medium text-green-600 dark:text-green-400">3 seats (18%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">BJP</span>
                <span className="font-medium text-slate-600">2 seats (6%)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Regional Distribution</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Malwa</span>
                <span className="font-medium text-orange-600 dark:text-orange-400">69 seats (59%)</span>
              </div>
              <ProgressBar label="" value={59} color="bg-orange-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Majha</span>
                <span className="font-medium text-blue-600 dark:text-blue-400">25 seats (21%)</span>
              </div>
              <ProgressBar label="" value={21} color="bg-blue-500" showPercentage={false} />
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Doaba</span>
                <span className="font-medium text-green-600 dark:text-green-400">23 seats (20%)</span>
              </div>
              <ProgressBar label="" value={20} color="bg-green-500" showPercentage={false} />
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Drug Crisis Impact</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Users</span><span className="font-medium">6.6 Million</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Youth Affected</span><span className="font-medium">75%+</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Overdose 2024</span><span className="font-medium text-red-600">106 deaths</span></div>
              <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">NDPS Cases</span><span className="font-medium">51,000+</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* CYCLE 2: SOCIO-ECONOMIC SENTIMENT DRIVERS (from research-P2/10_socio_economic) */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Socio-Economic Sentiment Drivers (research-P2/10_socio_economic)</p>
            <p className="text-sm text-red-600 dark:text-red-300">Economic distress is the #1 driver of voter anger and anti-incumbent sentiment</p>
          </div>
        </div>

        {/* Critical Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Youth Unemployment"
            value="19.3%"
            subtitle="Top anger driver"
            color="bg-red-500"
          />
          <MetricCard
            title="State Debt"
            value="₹4.17L Cr"
            subtitle="LAST in NITI FHI"
            color="bg-red-500"
          />
          <MetricCard
            title="Drug Users"
            value="6.6 Million"
            subtitle="18% of population"
            color="bg-red-500"
          />
          <MetricCard
            title="Farm Debt"
            value="₹1.04L / 3L Cr"
            subtitle="Short-term / Total agricultural debt"
            color="bg-orange-500"
          />
        </div>

        {/* Progress Bars */}
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Youth Unemployment (15-29 yrs)</span>
              <span className="text-sm font-bold text-red-600">19.3%</span>
            </div>
            <ProgressBar label="" value={19.3} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">National Average: 14.3% — Punjab is 5pp higher</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Debt-to-GSDP Ratio</span>
              <span className="text-sm font-bold text-red-600">44.47%</span>
            </div>
            <ProgressBar label="" value={44.47} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">Threshold: 25% — 1.78x over fiscal limit</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Groundwater Extraction</span>
              <span className="text-sm font-bold text-red-600">156.36%</span>
            </div>
            <ProgressBar label="" value={100} color="bg-red-500" showPercentage={false} />
            <p className="text-xs text-slate-500 mt-1">115 of 153 blocks over-exploited</p>
          </div>
        </div>

        {/* Punjab vs Haryana Comparison */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-800 mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjab vs Haryana Economic Comparison</h4>
          <DataTable
            headers={["Metric", "Punjab", "Haryana", "Gap"]}
            rows={punjabVsHaryanaData.map(d => [d.metric, d.punjab, d.haryana, d.ratio || d.difference || "N/A"])}
          />
        </div>

        {/* Sentiment Impact */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Per Capita Income</p>
            <p className="text-2xl font-bold text-red-600">₹2,30,523</p>
            <p className="text-xs text-slate-500">vs Haryana ₹3,25,000 (41% less)</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Gini Coefficient</p>
            <p className="text-2xl font-bold text-orange-600">0.48</p>
            <p className="text-xs text-slate-500">High income inequality</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">District Disparity</p>
            <p className="text-2xl font-bold text-orange-600">8.47:1</p>
            <p className="text-xs text-slate-500">Highest vs lowest district PCI</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>Sentiment Impact:</strong> Economic distress (19.3% youth unemployment, ₹4.17L Cr debt) is driving Anger + Resignation emotions. 6.6M drug users and agrarian debt create powerful anti-incumbent narrative for Congress to exploit.
          </p>
        </div>
      </div>

      {/* LOCAL ISSUES: MAJHA & DOABA - From MP1-foundational/governance/local-issues-majha-doaba.md */}
      <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-indigo-700 dark:text-indigo-400">
              Local Issues: Majha (25 Seats) & Doaba (23 Seats) — MP1-Foundational
            </p>
            <p className="text-sm text-indigo-600 dark:text-indigo-300">
              Region-specific issues ranked by voter priority — Research Date: 19 May 2026
            </p>
          </div>
        </div>

        {/* Meta Info */}
        <div className="mb-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Majha AAP 2022"
            value="17/25"
            subtitle="seats won"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Majha Congress 2022"
            value="3/25"
            subtitle="seats won"
            color="bg-orange-500"
          />
          <MetricCard
            title="Doaba AAP 2022"
            value="13/23"
            subtitle="seats won"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Doaba Congress 2022"
            value="7/23"
            subtitle="seats won"
            color="bg-orange-500"
          />
        </div>
      </div>

      {/* MAJHA ISSUES */}
      <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
            MAJHA REGION — Top 5 Issues
          </h3>
          <Badge variant="danger">Border Security | Drug Crisis | Water | Sacrilege</Badge>
        </div>

        {/* Issue 1: Border Farming */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white font-bold">1</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Border Farming Restrictions & Land Access</h4>
                <Badge variant="danger">HIGH Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">10-12 border seats affected | 21,500 acres farmer land + 10,000 acres govt land</p>
              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Affected Villages</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">~220</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Total Hectares</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">15-17 Lakh</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Resolution</p>
                  <p className="text-lg font-bold text-yellow-600">PARTIAL</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-amber-50 p-2 dark:bg-amber-900/20">
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  <strong>Key Grievance:</strong> BSF gates open 9am-5pm (summer) / 10am-4pm (winter); 2 Kisan Guards per tractor; some villages (Chhina Bhidichand, Khalra, Vaan, Dhal in Tarn Taran) have fencing 1 km inside Indian territory
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="warning">Central Govt blamed (BSF protocol)</Badge>
                <Badge variant="warning">AAP blamed (slow implementation)</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 2: Drug Menace */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white font-bold">2</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Drug Menace & Youth Addiction</h4>
                <Badge variant="danger">EXTREME Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Tarn Taran (all 3 seats), Amritsar rural, Gurdaspur border belt | Worst district in Punjab</p>
              <div className="mt-3 grid gap-2 md:grid-cols-4">
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Deaths (32 days)</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">42</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Hooch Deaths (5 yrs)</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">176</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Arrests Claimed</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">992</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Budget 2025-26</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">Rs 438 Cr</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-red-100 p-2 dark:bg-red-900/40">
                <p className="text-sm text-red-700 dark:text-red-400">
                  <strong>Crucial Data:</strong> 2020 Majha hooch tragedy killed 121 (80 in Tarn Taran alone). Methanol-based spurious liquor killed 27 in Majitha (May 2025). Drone drops from Pakistan routine in Tarn Taran/Amritsar border villages.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="danger">UNRESOLVED</Badge>
                <Badge variant="warning">Centre blamed (border sealing)</Badge>
                <Badge variant="warning">State blamed (rehabilitation)</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 3: Groundwater Contamination */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">3</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Groundwater Contamination — Arsenic & Uranium</h4>
                <Badge variant="warning">SEVERE Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Amritsar (worst), Tarn Taran, Gurdaspur | Silent public health emergency</p>
              <div className="mt-3 grid gap-2 md:grid-cols-4">
                <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                  <p className="text-xs text-blue-600 dark:text-blue-400">Samples Analysed</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-300">2,709</p>
                </div>
                <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                  <p className="text-xs text-blue-600 dark:text-blue-400">Exceed Arsenic Limit</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-300">16%</p>
                </div>
                <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                  <p className="text-xs text-blue-600 dark:text-blue-400">Uranium Contamination</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-300">62%</p>
                </div>
                <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                  <p className="text-xs text-blue-600 dark:text-blue-400">Arsenic Habitations</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-300">60%</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-blue-100 p-2 dark:bg-blue-900/40">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  <strong>Amritsar:</strong> Highest arsenic — 111 ppb found (safe limit: 0.05 ppm / 50 ppb). 44.10% of samples show "very high" health risk. Tarn Taran has highest uranium in Majha. Study published in Environmental Geochemistry and Health (2024).
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="danger">UNRESOLVED</Badge>
                <Badge variant="info">CGWB 2025 Data</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 4: Sacrilege Justice */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold">4</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sacrilege Justice & Sikh Religious Sentiment</h4>
                <Badge variant="warning">HIGH Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">All Majha seats | Emotive, politically volatile, mobilises Sikh vote</p>
              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <div className="rounded bg-purple-50 p-2 dark:bg-purple-900/30">
                  <p className="text-xs text-purple-600 dark:text-purple-400">Cases Since 2015</p>
                  <p className="text-lg font-bold text-purple-700 dark:text-purple-300">97</p>
                </div>
                <div className="rounded bg-purple-50 p-2 dark:bg-purple-900/30">
                  <p className="text-xs text-purple-600 dark:text-purple-400">Convictions</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">ZERO</p>
                </div>
                <div className="rounded bg-purple-50 p-2 dark:bg-purple-900/30">
                  <p className="text-xs text-purple-600 dark:text-purple-400">Law Passed Apr 2026</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">Life Imprisonment</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-purple-100 p-2 dark:bg-purple-900/40">
                <p className="text-sm text-purple-700 dark:text-purple-400">
                  AAP passed "Jagat Jot Sri Guru Granth Sahib Satkar (Amendment) Act" (Apr 2026) with life imprisonment — but ZERO past convictions achieved. Justice Ranjit Singh Commission findings still not acted upon.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="warning">PARTIAL</Badge>
                <Badge variant="info">Prospective law only</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 5: Hooch Tragedies */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white font-bold">5</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Spurious Liquor / Hooch Tragedies</h4>
                <Badge variant="warning">HIGH Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Majitha (Amritsar), Tarn Taran seats, Batala (Gurdaspur) | Recurring, deeply emotional</p>
              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Majitha Deaths (May 2025)</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">27</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Majha Deaths (2020)</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">121</p>
                </div>
                <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
                  <p className="text-xs text-red-600 dark:text-red-400">Total (5 Years)</p>
                  <p className="text-lg font-bold text-red-700 dark:text-red-300">176</p>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="danger">UNRESOLVED</Badge>
                <Badge variant="warning">AAP blamed (excise policy)</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOABA ISSUES */}
      <div className="rounded-xl border border-green-200 bg-green-50/50 p-6 dark:border-green-800 dark:bg-green-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
            DOABA REGION — Top 5 Issues
          </h3>
          <Badge variant="success">NRI Issues | Migration | Industry | Sugarcane</Badge>
        </div>

        {/* Issue 1: NRI Property */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">1</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">NRI Property Disputes & Diaspora Alienation</h4>
                <Badge variant="danger">EXTREME Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">All Doaba seats; especially Jalandhar rural, Kapurthala, Nawanshahr, Hoshiarpur</p>
              <div className="mt-3 grid gap-2 md:grid-cols-4">
                <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                  <p className="text-xs text-green-600 dark:text-green-400">NRI Commission Complaints</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">50%</p>
                </div>
                <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                  <p className="text-xs text-green-600 dark:text-green-400">Actual Estimate</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">10x higher</p>
                </div>
                <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                  <p className="text-xs text-green-600 dark:text-green-400">MEA Complaints (2025)</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">140</p>
                </div>
                <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                  <p className="text-xs text-green-600 dark:text-green-400">Households Overseas</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">24%</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-green-100 p-2 dark:bg-green-900/40">
                <p className="text-sm text-green-700 dark:text-green-400">
                  <strong>Key Data:</strong> 80% of NRI complaints are land-related (illegal possession, forged documents, family conflicts). NRI Sabha in institutional crisis (ThePrint, Mar 2026). Canada-India diplomatic rift (2024-25) creating panic. US deportations hitting Doaba families hard.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="danger">UNRESOLVED</Badge>
                <Badge variant="info">24% households have overseas members (highest in Punjab)</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 2: Youth Unemployment */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">2</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Youth Unemployment & Migration Crisis</h4>
                <Badge variant="danger">EXTREME Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">All 23 seats | Existential for Doaba's demographic future</p>
              <div className="mt-3 grid gap-2 md:grid-cols-3">
                <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                  <p className="text-xs text-green-600 dark:text-green-400">Assets Sold (2021-23)</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">Rs 5,636 Cr</p>
                </div>
                <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                  <p className="text-xs text-green-600 dark:text-green-400">Borrowed</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">Rs 14,342 Cr</p>
                </div>
                <div className="rounded bg-green-50 p-2 dark:bg-green-900/30">
                  <p className="text-xs text-green-600 dark:text-green-400">Migrants Left After 2016</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">73%</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-green-100 p-2 dark:bg-green-900/40">
                <p className="text-sm text-green-700 dark:text-green-400">
                  <strong>Pressure Valve Closing:</strong> Visa tightening in Canada (2024), UK deportations, US removals. "Reverse dowry" system emerging — families finance women's IELTS/education as pathway for men to emigrate through marriage. Inability to migrate seen as social failure affecting marriage prospects.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="danger">UNRESOLVED</Badge>
                <Badge variant="info">PAU Survey 2021-23</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 3: Sports & Leather Industry */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">3</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sports Goods & Leather Industry Decline</h4>
                <Badge variant="warning">HIGH Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Jalandhar (all 7 seats), parts of Kapurthala | Core economic identity of Jalandhar</p>
              <div className="mt-3 grid gap-2 md:grid-cols-4">
                <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                  <p className="text-xs text-blue-600 dark:text-blue-400">India's Sports Goods</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-300">75%</p>
                </div>
                <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                  <p className="text-xs text-blue-600 dark:text-blue-400">Export Countries</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-300">100+</p>
                </div>
                <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                  <p className="text-xs text-blue-600 dark:text-blue-400">Employment</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-300">500,000+</p>
                </div>
                <div className="rounded bg-blue-50 p-2 dark:bg-blue-900/30">
                  <p className="text-xs text-blue-600 dark:text-blue-400">Policy 2026</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-300">Released</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-blue-100 p-2 dark:bg-blue-900/40">
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  <strong>Key Developments:</strong> Punjab Sports & Leather Manufacturing Policy 2026 (Jan 2026). MoU for R&D centre in Jalandhar (Jan 2026). Sports Technology Extension Centre announced (Dec 2025). Despite announcements, actual disbursement and infrastructure creation remains slow.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="warning">PARTIAL</Badge>
                <Badge variant="info">NITI Aayog seminar held Jan 2026</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 4: Sugarcane Farmer */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold">4</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Sugarcane Farmer Arrears & Sugar Mill Crisis</h4>
                <Badge variant="warning">HIGH Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Kapurthala, Nawanshahr (SBS Nagar), Hoshiarpur rural seats | Recurring agitation cycle</p>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                <div className="rounded bg-amber-50 p-2 dark:bg-amber-900/30">
                  <p className="text-xs text-amber-600 dark:text-amber-400">Total Arrears</p>
                  <p className="text-lg font-bold text-amber-700 dark:text-amber-300">Rs 93 Crore</p>
                </div>
                <div className="rounded bg-amber-50 p-2 dark:bg-amber-900/30">
                  <p className="text-xs text-amber-600 dark:text-amber-400">Pending from 2021-22</p>
                  <p className="text-lg font-bold text-amber-700 dark:text-amber-300">Rs 27 Crore</p>
                </div>
              </div>
              <div className="mt-3 rounded bg-amber-100 p-2 dark:bg-amber-900/40">
                <p className="text-sm text-amber-700 dark:text-amber-400">
                  <strong>Key Data:</strong> BKU Doaba demanding reopening of closed sugar mills BUT only after arrears cleared (Nov 2025). Government mills in Nawanshahr and Kapurthala struggling with outdated infrastructure. Hoshiarpur and Nawanshahr also affected by seleniferous soils (PAU study, Dec 2025).
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="warning">PARTIAL</Badge>
                <Badge variant="info">BKU Doaba agitation intensifying</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Issue 5: Industrial Decline */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white font-bold">5</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Industrial Decline & Lack of Private Investment</h4>
                <Badge variant="warning">MEDIUM-HIGH Priority</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Jalandhar, Kapurthala, Phagwara (industrial belt seats) | Slow-motion crisis</p>
              <div className="mt-3 rounded bg-slate-100 p-2 dark:bg-slate-700">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Key Dynamics:</strong> Capital flight to Himachal/Haryana. GT Road belt losing competitiveness. Kapurthala's rail coach factory is only major public-sector employer. Phagwara's industrial base eroding — sugar, paper, textile units shutting. Hoshiarpur's horticulture economy (Kinnow, mango, guava) needs processing infrastructure.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="danger">UNRESOLVED</Badge>
                <Badge variant="info">Doaba Industrial Corridor needed</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CROSS-CUTTING THEMES */}
      <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 dark:border-purple-800 dark:bg-purple-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300">
            Cross-Cutting Themes
          </h3>
          <Badge variant="info">AAP Performance | Operation Sindoor | Migration Pressure</Badge>
        </div>

        {/* AAP Performance */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">AAP Performance Perception (Majha + Doaba)</h4>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded bg-red-50 p-3 dark:bg-red-900/30">
              <p className="text-xs text-red-600 dark:text-red-400">AAP MLAs Criticised Own Government (Mar 2025)</p>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">"Feels like Pakistan, ask Finance Minister for funds"</p>
            </div>
            <div className="rounded bg-red-50 p-3 dark:bg-red-900/30">
              <p className="text-xs text-red-600 dark:text-red-400">Congress Claim (Feb 2025)</p>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">30-32 AAP MLAs ready to switch sides</p>
            </div>
            <div className="rounded bg-amber-50 p-3 dark:bg-amber-900/30">
              <p className="text-xs text-amber-600 dark:text-amber-400">Delhi Loss Impact (Feb 2025)</p>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">Sent shockwaves through Punjab cadre; Mann rejected dissent claims</p>
            </div>
            <div className="rounded bg-amber-50 p-3 dark:bg-amber-900/30">
              <p className="text-xs text-amber-600 dark:text-amber-400">Block Elections (Dec 2025)</p>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">"Semi-finals" before 2027 — AAP vs Congress direct fight in Doaba</p>
            </div>
          </div>
        </div>

        {/* Operation Sindoor */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Operation Sindoor Impact (May 2025)</h4>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded bg-red-100 p-3 dark:bg-red-900/40">
              <p className="text-xs text-red-600 dark:text-red-400">Blackouts</p>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Amritsar, Gurdaspur, Tarn Taran — multiple nights</p>
            </div>
            <div className="rounded bg-red-100 p-3 dark:bg-red-900/40">
              <p className="text-xs text-red-600 dark:text-red-400">Schools Shut</p>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">5-6 border districts for extended periods</p>
            </div>
            <div className="rounded bg-red-100 p-3 dark:bg-red-900/40">
              <p className="text-xs text-red-600 dark:text-red-400">Farmers Impact</p>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Unplanned evacuations, no compensation, crops damaged</p>
            </div>
          </div>
          <div className="mt-3 rounded bg-cyan-50 p-2 dark:bg-cyan-900/30">
            <p className="text-sm text-cyan-700 dark:text-cyan-400">
              <strong>Congress Opportunity:</strong> Demand border area compensation package and disaster relief framework
            </p>
          </div>
        </div>

        {/* Migration Pressure Valve */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Migration as Political Pressure Valve</h4>
          <div className="mt-3 rounded bg-amber-50 p-3 dark:bg-amber-900/30">
            <p className="text-sm text-amber-700 dark:text-amber-400">
              <strong>Historical Context:</strong> Emigration has acted as "pressure valve" for Jat Sikh discontent — without it, agrarian anger would explode politically (Frontline analysis). Canada/UK visa tightening + US deportations = pressure valve closing.
            </p>
          </div>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
              <p className="text-xs text-red-600 dark:text-red-400">Canada</p>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Visa tightening (2024)</p>
            </div>
            <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
              <p className="text-xs text-red-600 dark:text-red-400">UK</p>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Visa tightening</p>
            </div>
            <div className="rounded bg-red-50 p-2 dark:bg-red-900/30">
              <p className="text-xs text-red-600 dark:text-red-400">US</p>
              <p className="text-sm font-medium text-red-700 dark:text-red-300">Deportations hitting families hard</p>
            </div>
          </div>
          <div className="mt-3 rounded bg-green-50 p-2 dark:bg-green-900/30">
            <p className="text-sm text-green-700 dark:text-green-400">
              <strong>Congress Strategy:</strong> Create local jobs AND protect migration pathways for those who choose them
            </p>
          </div>
        </div>
      </div>

      {/* CONGRESS STRATEGIC POSITIONING */}
      <div className="rounded-xl border-2 border-blue-200 bg-blue-50/50 p-6 dark:border-blue-800 dark:bg-blue-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
            Congress Strategic Positioning Summary
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Majha Strategy */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Majha (25 seats)</h4>
              <Badge variant="info">Target: 12-15 seats</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                <span className="text-sm font-medium text-red-700 dark:text-red-300">Border Champion:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Own border farmer issue — fence realignment, compensation, development package</span>
              </div>
              <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                <span className="text-sm font-medium text-red-700 dark:text-red-300">Drug Rehabilitation:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Not just interdiction — rehabilitation centres, youth engagement</span>
              </div>
              <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                <span className="text-sm font-medium text-red-700 dark:text-red-300">Sacrilege Justice:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Beyond AAP's prospective law — demand convictions for 97 past cases</span>
              </div>
              <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                <span className="text-sm font-medium text-red-700 dark:text-red-300">Water Crisis:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Make groundwater contamination visible — health camps, RO plants</span>
              </div>
              <div className="flex items-start gap-2 rounded bg-red-50 p-2 dark:bg-red-900/20">
                <span className="text-sm font-medium text-red-700 dark:text-red-300">Anti-Hooch:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">CBI inquiry into liquor mafia; excise policy overhaul</span>
              </div>
            </div>
          </div>

          {/* Doaba Strategy */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">Doaba (23 seats)</h4>
              <Badge variant="info">Target: 12-14 seats</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                <span className="text-sm font-medium text-green-700 dark:text-green-300">NRI Rights Champion:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Fast-track courts, digital land records, property protection</span>
              </div>
              <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Industrial Revival:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Doaba Industrial Corridor, sports/leather policy execution</span>
              </div>
              <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Sugarcane Justice:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Clear arrears, modernise mills, cooperative ownership</span>
              </div>
              <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Jobs at Home:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Counter migration narrative with concrete employment programmes</span>
              </div>
              <div className="flex items-start gap-2 rounded bg-green-50 p-2 dark:bg-green-900/20">
                <span className="text-sm font-medium text-green-700 dark:text-green-300">Dalit Outreach:</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Doaba's high SC population needs targeted commitments</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Weekly Sentiment Trend
          </h3>
          <div className="mt-4">
            <MiniChart data={sentimentTrend.map(v => v * 100)} color="bg-purple-500" height={100} />
          </div>
          <div className="mt-4 flex justify-between text-center">
            <div>
              <p className="text-2xl font-bold text-purple-500">+0.42</p>
              <p className="text-xs text-slate-500">Current</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">+10.5%</p>
              <p className="text-xs text-slate-500">Weekly Change</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Party Vote Intention
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">2024 LS actual (CSDS-Lokniti) / 2026 estimate (current May 2026 surveys show Congress at 31-35%)</p>
          <div className="mt-6 space-y-4">
            {voteIntention.map((item) => (
              <div key={item.party}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-blue-600">{item.party}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{item.value}% <span className="text-slate-400">/</span> <span className="text-green-600">{item.estimate}% est.</span></span>
                    <span className="text-xs text-slate-500">({item.source})</span>
                  </div>
                </div>
                <ProgressBar label="" value={item.value} color={item.party === "BJP" ? "bg-orange-400" : "bg-blue-500"} showPercentage={false} />
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-sm text-red-700 dark:text-red-400">
              <strong>BJP Warning:</strong> Vote share grew from 6.6% (2022) → 18.56% (2024) — nearly 3x in one cycle
            </p>
          </div>
        </div>
      </div>

      {/* AAP Governance Track Record - From research-P3/aap-governance */}
      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">AAP Governance: Claims vs Reality</p>
            <p className="text-sm text-green-600 dark:text-green-300">Extracted from research-P3/aap-governance — 12 policy areas analyzed</p>
          </div>
        </div>
      </div>

      {/* Mohalla Clinics - Healthcare Achievement */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Healthcare: Mohalla Clinics
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Free primary healthcare via 881 Mohalla Clinics — research-P3/aap-governance</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <MetricCard
            title="Mohalla Clinics"
            value="881"
            subtitle="Free primary healthcare centers"
            color="bg-green-500"
          />
          <MetricCard
            title="OPD Visits"
            value="5 Crore+"
            subtitle="Over 5 crore patient visits"
            color="bg-blue-500"
          />
          <MetricCard
            title="MMSY Coverage"
            value="Rs 10 Lakh"
            subtitle="Per family insurance coverage"
            color="bg-purple-500"
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
          <p className="text-sm text-green-700 dark:text-green-400">
            <strong>Congress Counter:</strong> Mohalla Clinics provide basic care but lack specialists, diagnostics, and emergency services. Advanced cases still require expensive private hospitals.
          </p>
        </div>
      </div>

      {/* Education Achievements */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Education: Schools of Eminence
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Education sector investments — research-P3/aap-governance</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <MetricCard
            title="NAS Ranking"
            value="#1"
            subtitle="National Achievement Survey rank"
            color="bg-green-500"
          />
          <MetricCard
            title="Schools of Eminence"
            value="118"
            subtitle="Upgraded secondary schools"
            color="bg-blue-500"
          />
          <MetricCard
            title="Teachers Recruited"
            value="14,525"
            subtitle="New teacher appointments"
            color="bg-purple-500"
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            <strong>Note:</strong> NAS #1 ranking based on government school performance. Private school results not included in this ranking.
          </p>
        </div>
      </div>

      {/* Women Stipend Delayed */}
      <div className="rounded-xl border-2 border-pink-200 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-pink-700 dark:text-pink-400">Women Stipend: Rs 1,000/Month — 4 Years Delayed</p>
            <p className="text-sm text-pink-600 dark:text-pink-300">Scheme announced March 2022, pilot program only starting April 2026 — affects 1.3+ crore women</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Promise Date</p>
            <p className="text-xl font-bold text-red-600">March 2022</p>
            <p className="text-xs text-slate-500">Announced in AAP's 2022 manifesto</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Implementation</p>
            <p className="text-xl font-bold text-red-600">April 2026 (Pilot)</p>
            <p className="text-xs text-slate-500">Only pilot started, full rollout delayed 4+ years</p>
          </div>
        </div>
      </div>

      {/* Anti-Drug Campaign */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Anti-Drug Campaign
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">NDPS Act enforcement statistics — research-P3/aap-governance</p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="NDPS Cases"
            value="63,053"
            subtitle="Total cases registered"
            color="bg-red-500"
          />
          <MetricCard
            title="Arrested"
            value="85,418"
            subtitle="Individuals arrested"
            color="bg-orange-500"
          />
          <MetricCard
            title="Heroin Seized"
            value="5,119 kg"
            subtitle="Drug seizures under AAP"
            color="bg-purple-500"
          />
          <MetricCard
            title="Users Affected"
            value="6.6 Million"
            subtitle="Drug users in Punjab"
            color="bg-red-500"
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>Gap:</strong> Despite 63K+ cases and 85K arrests, drugs remain Punjab's #1 voter issue. 230K opioid-dependent, 106 overdose deaths (2024). Supply chains intact.
          </p>
        </div>
      </div>

      {/* AAP Vote Share Collapse - from A13 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Vote Share Collapse (2022-2026)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">From wave victory to rapid erosion — A13 Research</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {aapVoteCollapse.map((item, i) => (
            <div key={i} className={`rounded-lg p-4 ${i === 0 ? 'bg-green-50 dark:bg-green-900/20' : i === 1 ? 'bg-red-50 dark:bg-red-900/20' : 'bg-orange-50 dark:bg-orange-900/20'}`}>
              <p className="text-sm text-slate-500">{item.election}</p>
              <p className={`text-2xl font-bold ${i === 0 ? 'text-green-600' : 'text-red-600'}`}>{item.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.seats}</p>
              <p className="text-xs text-slate-500 mt-1">{item.trend}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Women Voter Crisis - MP2-003, MP2-018, MP3-004 Critical Data */}
      <div className="rounded-xl border-2 border-pink-200 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-pink-700 dark:text-pink-400">Women Voter Crisis: Rs 1,000/Month — 4 Years Delayed, 1.3+ Crore Women Affected — MP2-018, MP3-004</p>
            <p className="text-sm text-pink-600 dark:text-pink-300">Most Exploitable AAP Vulnerability | Women: 1.01 Crore (47% of electorate) | AAP Women Loyalty 70-76% (HIGHEST) But Scheme Unfulfilled Since March 2022</p>
          </div>
        </div>
      </div>

      {/* Women & Youth Voter Demographics - MP2-003, MP2-016 */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Women Voter Landscape (MP2-003, MP2-018)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Women are AAP's most loyal demographic — but Rs 1,000/month promise remains unfulfilled</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Women Electorate</span>
              <span className="font-bold text-pink-600">1.01 Crore (47%)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">2022 Women Turnout</span>
              <span className="font-bold text-pink-600">71.91%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP Women Loyalty</span>
              <span className="font-bold text-green-600">70-76% (HIGHEST)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Scheme Outlay (Budget 2026-27)</span>
              <span className="font-bold text-pink-600">Rs 9,300 Crore</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Affected Women</span>
              <span className="font-bold text-red-600">1.3+ Crore</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Constituencies with Active Grievance</span>
              <span className="font-bold text-red-600">94 of 117</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Youth Voter Demographics (MP2-016, MP2-022)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Youth: AAP's MOST VULNERABLE demographic — 18-25% of 2022 youth voters exhausted</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth (18-35) Share</span>
              <span className="font-bold text-blue-600">~40% of voters</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP Youth Loyalty</span>
              <span className="font-bold text-red-600">55-62% (LOWEST)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Exhausted AAP Youth Voters</span>
              <span className="font-bold text-orange-600">18-25%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth Unemployment</span>
              <span className="font-bold text-red-600">19.3%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Rural Female Unemployment</span>
              <span className="font-bold text-red-600">30.7%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP Vote Floor (May 2026)</span>
              <span className="font-bold text-red-600">28-32%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seat Projections - from A13 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Seat Projections (May 2026) - Informal Surveys
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Non-scientific social media surveys — directional indicators only. No accredited polling data available. Source: Facebook videos, X posts</p>
        <div className="mt-4 space-y-4">
          {seatProjections.map((item) => (
            <div key={item.party} className="flex items-center gap-4">
              <span className="w-24 font-medium text-slate-700 dark:text-slate-300">{item.party}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-purple-600">{item.low}-{item.high}</span>
                  <span className="text-slate-500">seats</span>
                  <span className="ml-auto text-sm text-green-600">avg: {item.avg}</span>
                </div>
                <ProgressBar label="" value={(item.low + item.high) / 2} color="bg-purple-500" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <strong>Note:</strong> Hung Assembly is high probability outcome per Punjab Today (Jan 2026). Anti-incumbency is real but unconverted — no unified alternative has crystallized.
          </p>
        </div>
      </div>

      {/* MP10-001 & MP10-009: Formal Seat Projection Model & Scenario Planning */}
      <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
          Formal Predictive Analytics (MP10-001 & MP10-009)
        </h3>
        <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">Congress internal seat projection model — 45 observers, 3 surveys, MRP methodology</p>

        {/* Confidence Interval Display */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Hidden Observers"
            value={formalSeatProjection.observers}
            subtitle={formalSeatProjection.observerDeployment}
            color="bg-blue-500"
          />
          <MetricCard
            title="AICC Surveys"
            value={formalSeatProjection.surveys}
            subtitle="Bhupesh Baghel + Rahul Gandhi teams"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Confidence Interval"
            value={formalSeatProjection.confidenceInterval}
            subtitle="State-level projection"
            color="bg-purple-500"
          />
          <MetricCard
            title="Methodology"
            value="MRP"
            subtitle="Multilevel Regression + Post-Stratifcation"
            color="bg-indigo-500"
          />
        </div>

        {/* MP10-009 Scenario Planning */}
        <h4 className="mt-6 font-semibold text-blue-900 dark:text-blue-100">Scenario Planning (MP10-009)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          {mp10ScenarioPlanning.map((scenario) => (
            <div key={scenario.scenario} className={`rounded-lg p-4 ${
              scenario.scenario.includes("Base") ? 'bg-green-100 dark:bg-green-900/40 border border-green-300' :
              scenario.scenario.includes("Best") ? 'bg-blue-100 dark:bg-blue-900/40 border border-blue-300' :
              'bg-red-100 dark:bg-red-900/40 border border-red-300'
            }`}>
              <p className={`text-sm font-semibold ${
                scenario.scenario.includes("Base") ? 'text-green-800 dark:text-green-200' :
                scenario.scenario.includes("Best") ? 'text-blue-800 dark:text-blue-200' :
                'text-red-800 dark:text-red-200'
              }`}>{scenario.scenario}</p>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600 dark:text-slate-400">Congress:</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{scenario.congressSeats}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600 dark:text-slate-400">AAP:</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{scenario.aapSeats}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-slate-600 dark:text-slate-400">SAD+BJP:</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{scenario.sadBjpSeats}</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{scenario.conditions}</p>
            </div>
          ))}
        </div>

        {/* Tier Classification */}
        <h4 className="mt-6 font-semibold text-blue-900 dark:text-blue-100">Resource Allocation Tiers (MP10-001)</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {formalSeatProjection.tierClassification.map((tier) => (
            <div key={tier.tier} className="rounded-lg bg-white/50 p-3 dark:bg-slate-800/50">
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">{tier.tier}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Resource: {tier.resource}</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Criteria: {tier.criteria}</p>
            </div>
          ))}
        </div>

        {/* MP10-004 Swing Voter Analysis */}
        <h4 className="mt-6 font-semibold text-blue-900 dark:text-blue-100">Swing Voter Analysis (MP10-004)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Volatility & Margins</p>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Seats within swing margin:</span>
                <span className="text-sm font-bold text-red-600">79% (92/117)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Late swing factor:</span>
                <span className="text-sm font-bold text-orange-600">40-50% in final 2 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">NOTA 2022 (actual):</span>
                <span className="text-sm font-bold text-red-600">0.71% (110,308 votes)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">NOTA increase vs 2017:</span>
                <span className="text-sm font-bold text-red-600">10x (0.07% → 0.71%)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Jalandhar Central:</span>
                <span className="text-sm font-bold text-red-600">NOTA 953 {'>'} margin 247</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">2017→2022 Vote Swing</p>
            <div className="mt-2 space-y-1">
              {swingVoterAnalysis.voteSwing2017to2022.map((s) => (
                <div key={s.party} className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">{s.party}:</span>
                  <span className={`text-sm font-bold ${s.swing.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {s.swing} ({s.from}→{s.to})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Assembly Composition - from A13 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Current Assembly Composition (May 2026)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">117 seats total — confidence motion passed with 94 AAP MLAs</p>
        <div className="mt-4">
          <DataTable
            headers={["Party", "Current Seats", "2022 Result", "Change"]}
            rows={[
              ["AAP", "94", "92 seats (42.01%)", "Hold +2"],
              ["Congress", "16", "18 seats (22.98%)", "Lost 2"],
              ["SAD", "3", "3 seats (18.38%)", "Hold (post-split)"],
              ["BJP", "2", "2 seats (8.0%)", "Hold (going solo 2027)"],
              ["BSP", "1", "0 seats", "Gain 1"],
              ["Independent", "1", "2 seats", "Lost 1"],
            ]}
          />
        </div>
      </div>

      {/* Four-Cornered Contest Analysis - from A13 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          2027 Contest Scenarios
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Winning threshold varies by contest type — B18 Rumor Management Framework</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {contestThresholds.map((item, i) => (
            <div key={i} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
              <p className="font-semibold text-slate-700 dark:text-slate-200">{item.type}</p>
              <p className="text-2xl font-bold text-purple-600 mt-2">{item.threshold || item.probability}</p>
              <p className="text-sm text-slate-500 mt-1">{item.parties || item.note}</p>
              <p className="text-xs text-slate-400 mt-1">{item.implication}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Issue Priority Matrix
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {KEY_ISSUES_VERIFIED.map((issue) => (
            <div key={issue.id} className="flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                {issue.priority}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{issue.name}</span>
                  <Badge variant={issue.sentiment < -0.6 ? "danger" : issue.sentiment < -0.3 ? "warning" : "info"}>
                    {issue.sentiment < 0 ? "Negative" : "Neutral"}
                  </Badge>
                </div>
                <div className="mt-2 flex gap-4">
                  <div className="flex-1">
                    <ProgressBar
                      label="Severity"
                      value={Math.abs(issue.sentiment) * 100}
                      color={issue.sentiment < -0.6 ? "bg-red-500" : "bg-yellow-500"}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SC Voting Patterns - from A13 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SC Voter Dynamics (32% of Punjab Population)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">AAP won 29/34 SC-reserved seats in 2022 — A13 Research</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {scVotingData.map((item, i) => (
            <div key={i} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <p className="text-sm text-purple-600 font-medium">{item.subCaste}</p>
              <p className="text-xl font-bold text-purple-700 dark:text-purple-300">{item.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
          <p className="text-sm text-orange-700 dark:text-orange-400">
            <strong>Caste Census:</strong> AAP commissioned caste census April 2026 to assess SC aspirations amid conversion controversy (Christianity). Estimates range from &quot;few thousand&quot; (academic) to inflated political claims. Impact unknown.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Sentiment by Source
        </h3>
        <DataTable
          headers={["Source", "Data Points", "Congress %", "AAP %", "SAD %", "Sentiment"]}
          rows={[
            ["WhatsApp Groups", "45,200", "52%", "28%", "10%", "+0.62"],
            ["Twitter/X", "28,400", "41%", "38%", "8%", "+0.12"],
            ["Facebook", "32,100", "44%", "35%", "11%", "+0.28"],
            ["Local News", "8,500", "48%", "29%", "14%", "+0.45"],
            ["Door-to-Door", "15,200", "51%", "26%", "12%", "+0.71"],
            ["Rally Feedback", "12,400", "58%", "22%", "9%", "+0.82"],
          ]}
        />
      </div>

      {/* Detailed Youth Unemployment - from A24 */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-red-700 dark:text-red-400">CRITICAL: Youth Unemployment Crisis (PLFS Oct-Dec 2025)</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {youthUnemploymentData.map((item, i) => (
            <div key={i} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">{item.category}</p>
              <p className="text-lg font-bold text-red-600">{item.value}</p>
              <p className="text-xs text-slate-500">{item.comparison}</p>
              <Badge variant={item.severity === "CRITICAL" ? "danger" : item.severity === "HIGH" ? "warning" : "info"}>{item.severity}</Badge>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded bg-white dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Labour Force Participation:</strong> 45.9% overall (male 66.3%, female only 22%). Worker Population Ratio: 37.1% (15-29 age group). Haryana improved to 12.4% — Punjab worsening vs improving.
          </p>
        </div>
      </div>

      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">CRITICAL: Farmer Debt — Most Potent Rural Economic Issue</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">
              <strong>Punjab ranked 3rd highest in farm debt (India)</strong> — Rs 2,03,249 per agri household (NSSO/Lok Sabha Aug 2025).
              Total outstanding debt: Rs 3 lakh crore (short-term: Rs 1.04 lakh crore). <strong>89% of farm households are indebted.</strong> Institutional: 78.7% | Non-institutional: 21.3%.
              Agri growth: 1.9% p.a. (2004-05 to 2024-25) — far below Green Revolution rates.
              Cotton yield declined 18.4% (500→408 kg/ha). Rice area expanded 200,000+ hectares.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">CRITICAL: Water &amp; Environmental Crisis — Top-10 Voter Issue</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">
              <strong>115 of 153 groundwater blocks over-exploited (75%+, highest in India).</strong> Groundwater extraction at 156% of recharge rate. Water table declining 0.49 m/yr avg (46 cm/yr in Malwa). SYL Canal deadlocked since Jan 2026. 70%+ water sources contaminated. Cancer rates in Malwa: 90-110 per 100,000.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">AAP&apos;s Broken Promise: 25 Lakh Jobs</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">AAP&apos;s 2016/2017 commitment: 25 lakh jobs in 5 years. As of 2026, this promise remains unfulfilled — youth unemployment has actually increased since AAP took office. (NDTV July 2016, The Hindu March 2026)</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Congress Youth Candidates 2027</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Punjab Youth Congress President Mohit Mohindra announced 60-70% youth candidates for 2027 (Jan 2026) — a structural commitment, not cosmetic.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">First-Time Voter Turnout 2022</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Only ~6 out of 10 first-time voters actually voted in Punjab in 2022 — significant activation gap. (Indian Express, March 2022)</p>
        </div>
      </div>

      {/* Migration Data - from A24 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Youth Migration Patterns (A24 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Canada dream reversing — visa restrictions, deportation risk, diplomatic tensions</p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {migrationData.map((item, i) => (
            <div key={i} className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="text-sm text-blue-600 font-medium">{item.metric}</p>
              <p className="text-xl font-bold text-blue-700 dark:text-blue-300">{item.value}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <strong>Political Impact:</strong> Families with overseas ties represent significant constituency. Changing migration patterns could shift political expectations. Disillusioned families (failed migration investments) may increase anti-incumbent sentiment.
          </p>
        </div>
      </div>

      {/* Student Elections - from A24 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Student Politics: Banned Since 1984 (A24 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">No student union elections on any Punjab campus for over 4 decades</p>
        <div className="mt-4">
          <DataTable
            headers={["Fact", "Value", "Note"]}
            rows={studentElectionsData.map(item => [item.fact, item.value, item.note])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Campus-to-Politics Pipeline:</strong> Prem Singh Chandumajra (Akali), Brahm Mohindra (Congress), Partap Singh Bajwa (Congress), Kuljit Singh Nagra (Congress) — all started as student leaders.
          </p>
        </div>
      </div>

      {/* Youth Congress Organization - from A24 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress Youth Organization (A24 Research)
        </h3>
        <div className="mt-4 space-y-4">
          {youthCongressData.map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.role}</p>
                <p className="text-lg font-bold text-blue-600">{item.name || item.value}</p>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
          <p className="text-sm text-orange-700 dark:text-orange-400">
            <strong>Factional Contest:</strong> Warring (non-Jat face Shuvam Sharma) vs Channi (Gagandeep Jalalpur) — reflects broader tension over SC/OBC representation. All top Punjab Congress positions held by Jats except Youth Congress president.
          </p>
        </div>
      </div>

      {/* Voter Turnout Data - from B36 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Turnout Patterns (B36 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Declining turnout benefits parties with older, more reliable voter bases</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {voterTurnoutData.map((item, i) => (
            <div key={i} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
              <p className="text-sm text-slate-500">{item.election}</p>
              <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">{item.turnout}</p>
              <p className="text-xs text-slate-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>Engagement-Voting Gap:</strong> 40-50% of socially politically active youth do NOT vote. Social media engagement does not predict voting behavior. Campaign resource allocation should not be based on social media engagement alone.
          </p>
        </div>
      </div>

      {/* AAP Youth Vote 2022 - from B36 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Youth Coalition 2022 (B36 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">AAP won 45-55% of youth (18-35) vote in 2022 — erosion signals in 2024-26</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {aapYouthVoteData.map((item, i) => (
            <div key={i} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <p className="text-sm text-purple-600 font-medium">{item.demographic || item.note}</p>
              <p className="text-xl font-bold text-purple-700 dark:text-purple-300">{item.value || item.impact}</p>
              {item.source && <p className="text-xs text-slate-500 mt-1">{item.source}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Viral Content Impact
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Content affecting voter sentiment (verified)</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {viralContent.map((content, i) => (
            <div key={i} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <p className="font-medium text-purple-700 dark:text-purple-300">{content.content}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{content.platform} • {content.views}</p>
              <Badge variant="danger">{content.sentiment}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Viral Content Detailed Metrics - from A14 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Viral Content Metrics (A14 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Sidhu Moosewala as political meme template — 65M+ views</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {viralMetrics.map((item, i) => (
            <div key={i} className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <p className="text-sm text-red-600 font-medium">{item.metric}</p>
              <p className="text-xl font-bold text-red-700 dark:text-red-300">{item.value}</p>
              <p className="text-xs text-slate-500">{item.platform} — {item.period}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <strong>Moosewala &quot;Gaddar&quot; deployment:</strong> 1st surge (2023) after SYL canal statements by Sandeep Pathak. 2nd surge (April 2026) after 7 AAP Rajya Sabha MPs merged with BJP — Balkaur Singh reposted within hours.
          </p>
        </div>
      </div>

      {/* Key Hashtags - from A14 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Trending Hashtags & Narratives (A14 Research)
        </h3>
        <div className="mt-4">
          <DataTable
            headers={["Hashtag", "Deployed By", "Period"]}
            rows={keyHashtags.map(item => [item.hashtag || "N/A", item.deployed || "N/A", item.period || "N/A"])}
          />
        </div>
      </div>

      {/* Congress Missing from Digital - from A14 */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">CRITICAL: Congress &apos;Missing&apos; from Digital Narrative</p>
            <p className="text-sm text-red-600 dark:text-red-300">The Tribune (April 7, 2026) — AAP and BJP dominated Punjab social media while Congress and SAD were absent from the conversation</p>
          </div>
        </div>
        <div className="mt-4">
          <DataTable
            headers={["Gap", "Source", "Impact"]}
            rows={congressDigitalGap.map(item => [item.gap || "N/A", item.source || "N/A", item.impact || item.issue || "N/A"])}
          />
        </div>
      </div>

      {/* AAP Influencer Policy - from A14 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Influencer Empowerment Policy 2023 (A14 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Institutionalized paid social media amplification — effectively co-opting independent new media</p>
        <div className="mt-4">
          <DataTable
            headers={["Tier", "Subscriber Threshold", "Rate per Campaign"]}
            rows={influencerTiers.map(item => [item.tier, item.tier.split("(")[1]?.replace(")", "") || "", item.rate])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Strategic Implication:</strong> Congress cannot compete on price. Must build authentic relationships with creators who believe in the vision — give content autonomy. Recruit, don&apos;t buy.
          </p>
        </div>
      </div>

      {/* Social Media Penetration - from B18 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Social Media Penetration (B18 Methodology)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp as primary voter contact channel — 85%+ urban, 70%+ rural</p>
        <div className="mt-4">
          <DataTable
            headers={["Platform", "Penetration", "Notes"]}
            rows={socialMediaPenetration.map(item => [item.platform || "N/A", item.urban || item.penetration || "N/A", item.note || "N/A"])}
          />
        </div>
      </div>

      {/* Emotional Drivers - from B18 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Emotional Drivers of Sentiment (B18 Methodology)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Affective dimension — emotions that drive voter behavior below conscious rationality</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {emotionalDrivers.map((item, i) => (
            <div key={i} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-slate-700 dark:text-slate-200">{item.emotion}</p>
                <Badge variant={item.intensity === "Very High" ? "danger" : item.intensity === "High" ? "warning" : "info"}>{item.intensity}</Badge>
              </div>
              <p className="text-sm text-slate-500 mt-1">{item.driver}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Youth Voter Psychology & Enthusiasm - from G24 Research */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Youth Voter Psychology & Enthusiasm (G24 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">CSDS-Lokniti data — voter contact and attitude patterns</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-2xl font-bold text-blue-600">51%</p>
            <p className="text-sm text-blue-700 dark:text-blue-300">Contacted via WhatsApp/text/Facebook/X during campaign</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <p className="text-2xl font-bold text-purple-600">44%</p>
            <p className="text-sm text-purple-700 dark:text-purple-300">Wanted government change</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-2xl font-bold text-green-600">86%</p>
            <p className="text-sm text-green-700 dark:text-green-300">Say minority protection is government&apos;s duty</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500 italic">Note: Voter enthusiasm gap is UNFIXED — youth voter activation remains critical challenge</p>
      </div>

      {/* Youth Platform Preferences */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Youth Platform Preferences (18-35)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Where Punjab youth spend time — Video-first is critical</p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="flex items-center gap-2">
              <span className="text-xl">▶️</span>
              <span className="font-semibold text-red-700 dark:text-red-300">YouTube</span>
            </div>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">Primary news discovery for 18-35</p>
            <Badge variant="info">Long-form + Shorts</Badge>
          </div>
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <div className="flex items-center gap-2">
              <span className="text-xl">📸</span>
              <span className="font-semibold text-pink-700 dark:text-pink-300">Instagram</span>
            </div>
            <p className="mt-2 text-sm text-pink-600 dark:text-pink-300">Social + Visual, influencer-driven</p>
            <Badge variant="info">Reels + Stories</Badge>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="flex items-center gap-2">
              <span className="text-xl">💬</span>
              <span className="font-semibold text-green-700 dark:text-green-300">WhatsApp</span>
            </div>
            <p className="mt-2 text-sm text-green-600 dark:text-green-300">Family/group communication</p>
            <Badge variant="info">Text + Audio + Video</Badge>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="flex items-center gap-2">
              <span className="text-xl">✈️</span>
              <span className="font-semibold text-blue-700 dark:text-blue-300">Telegram</span>
            </div>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">Growing among tech-savvy youth</p>
            <Badge variant="info">Channels + Groups</Badge>
          </div>
        </div>
      </div>

      {/* Content Format Effectiveness */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Content Format Effectiveness
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">What resonates with Punjab youth — Video and humour win</p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <Badge variant="success">HIGH</Badge>
            <p className="mt-2 font-semibold text-green-700 dark:text-green-300">Video (Reels)</p>
            <p className="text-sm text-green-600 dark:text-green-300">Short attention span + visual + audio + Punjabi = engagement</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <Badge variant="danger">LOW</Badge>
            <p className="mt-2 font-semibold text-red-700 dark:text-red-300">Text</p>
            <p className="text-sm text-red-600 dark:text-red-300">Youth read headlines, rarely full articles</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <Badge variant="success">HIGH</Badge>
            <p className="mt-2 font-semibold text-green-700 dark:text-green-300">Interactive</p>
            <p className="text-sm text-green-600 dark:text-green-300">Polls/Q&A — creates participation, not just consumption</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <Badge variant="warning">VERY HIGH</Badge>
            <p className="mt-2 font-semibold text-yellow-700 dark:text-yellow-300">Memes/Humour</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">If it lands correctly — risky if it doesn&apos;t</p>
          </div>
        </div>
      </div>

      {/* Key Influencers */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Key Youth Influencers (Punjab 2026)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Named influencers for potential partnership — Congress must build own network</p>
        <div className="mt-4">
          <DataTable
            headers={["Name", "Category", "Platform", "Notes"]}
            rows={[
              ["Karan Atwal", "Content Creator", "Instagram/YouTube", "Social media creator, youth-focused"],
              ["Shyna Choudhary", "Influencer", "Instagram", "Miss India Punjab 2023, model"],
              ["Kunwar Khanoura", "Student Leader", "Instagram", "PU-NSUI leader"],
              ["Parabjot Singh Gill", "Student Leader", "Instagram", "NSUI candidate for PUCSC President"],
              ["Anurag Dalal", "Student Leader", "Instagram", "Won PUCSC President as independent, later joined NSUI"],
            ]}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
          <p className="text-sm text-orange-700 dark:text-orange-400">
            <strong>Strategic Note:</strong> Recruit, don&apos;t buy — partner with creators who believe in the vision. Give content autonomy.
          </p>
        </div>
      </div>

      {/* Sentiment Velocity Thresholds - from B18 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Sentiment Velocity Thresholds (B18 Methodology)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Monitoring benchmarks for social media virality</p>
        <div className="mt-4">
          <DataTable
            headers={["Velocity Level", "Threshold", "Alert Status"]}
            rows={velocityThresholds.map(item => [item.level, item.threshold, item.status])}
          />
        </div>
      </div>

      {/* Rumor Management Response Metrics - from G32 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Rumor Management Response Times (G32 Framework)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Speed beats perfection — faster response prevents more damage</p>
        <div className="mt-4">
          <DataTable
            headers={["Stage", "Target", "Critical Threshold"]}
            rows={rumorMetrics.map(item => [item.stage, item.target, item.critical])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Core Principle:</strong> Speed is structural. Detection-to-alert target under 45 minutes. A fast, imperfect response prevents more damage than a slow, perfect one.
          </p>
        </div>
      </div>

      {/* Pre-Bunking Categories - from G32 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Pre-Bunking Categories (G32 Framework)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Pre-bunking is cheaper than reactive response — build resistance before rumor circulates</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {preBunkCategories.map((item, i) => (
            <div key={i} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
              <p className="font-semibold text-slate-700 dark:text-slate-200">{item.category}</p>
              <p className="text-sm text-slate-500 mt-1">{item.examples}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Known Rumor Scenarios - from G32 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Known Rumor Scenarios to Pre-Bunk (G32 Framework)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Priority pre-bunking content for 2027 campaign</p>
        <div className="mt-4">
          <DataTable
            headers={["Rumor Scenario", "Risk Level", "Pre-Bunk Strategy"]}
            rows={rumorScenarios.map(item => [item.scenario, item.risk, item.mitigation])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>CRITICAL Pre-Bunk:</strong> &quot;Congress is Anti-Sikh&quot; — Most dangerous narrative. Origin: BJP-aligned media, AAP identity messaging, SAD historical claims. Requires historical record, 1984 context, and comparative framing.
          </p>
        </div>
      </div>

      {/* MP7-003: Buzz Tracking & Velocity Analysis */}
      <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            7.3
          </div>
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-400">MP7-003: Buzz Tracking & Velocity Analysis</p>
            <p className="text-sm text-teal-600 dark:text-teal-300">Real-time monitoring with 3,450+ keyword taxonomy</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Keyword Taxonomy */}
          <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50">
            <h4 className="font-semibold text-teal-800 dark:text-teal-100">Keyword Taxonomy</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Total Keywords:</span>
                <span className="font-bold text-teal-600">{mp7BuzzTracking.keywordTaxonomy.total}</span>
              </div>
              <div className="mt-3 space-y-1">
                {mp7BuzzTracking.keywordTaxonomy.categories.map((cat, i) => (
                  <p key={i} className="text-xs text-slate-500">• {cat}</p>
                ))}
              </div>
              <div className="mt-2 flex gap-2 flex-wrap">
                {mp7BuzzTracking.keywordTaxonomy.languages.map((lang, i) => (
                  <Badge key={i} variant="info">{lang}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Velocity Levels */}
          <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50">
            <h4 className="font-semibold text-teal-800 dark:text-teal-100">Velocity Alert Levels</h4>
            <div className="mt-3 space-y-2">
              {mp7BuzzTracking.velocityMetrics.map((level, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                  <span className="flex-1 text-sm text-slate-600 dark:text-slate-400">{level.level}</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{level.mentions}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Thresholds */}
        <h4 className="mt-6 font-semibold text-teal-800 dark:text-teal-100">Alert Thresholds & Response Times</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {mp7BuzzTracking.alertThresholds.map((alert, i) => (
            <div key={i} className="rounded-lg bg-white/50 p-3 dark:bg-slate-800/50">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{alert.level}</p>
              <p className="text-xs text-slate-500">Threshold: {alert.threshold}</p>
              <p className="text-xs text-teal-600">Response: {alert.response}</p>
            </div>
          ))}
        </div>

        {/* Data Sources */}
        <h4 className="mt-6 font-semibold text-teal-800 dark:text-teal-100">Data Sources & Weight</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          {mp7BuzzTracking.dataSources.map((source, i) => (
            <div key={i} className="rounded-lg bg-white/50 p-3 dark:bg-slate-800/50">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{source.source}</p>
                <Badge variant="info">{source.weight}</Badge>
              </div>
              <p className="text-xs text-slate-500 mt-1">{source.platforms}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MP7-004: Emotion Analysis & Segment-Wise Tracking */}
      <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-6 dark:border-rose-800 dark:bg-rose-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
            7.4
          </div>
          <div>
            <p className="font-semibold text-rose-700 dark:text-rose-400">MP7-004: Emotion Analysis & Segment-Wise Tracking</p>
            <p className="text-sm text-rose-600 dark:text-rose-300">Affective dimension analysis — emotions driving voter behavior</p>
          </div>
        </div>

        {/* Primary Emotions */}
        <h4 className="font-semibold text-rose-800 dark:text-rose-100">Primary Emotion Drivers</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {mp7EmotionAnalysis.primaryEmotions.map((emo, i) => (
            <div key={i} className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50">
              <div className="flex justify-between items-start">
                <p className="font-semibold text-rose-700 dark:text-rose-200">{emo.emotion}</p>
                <Badge variant={emo.intensity.includes("Very") ? "danger" : emo.intensity.includes("High") ? "warning" : "info"}>
                  {emo.intensity}
                </Badge>
              </div>
              <p className="text-xs text-slate-500 mt-2">Triggers: {emo.triggers.join(", ")}</p>
              <p className="text-xs text-teal-600 mt-1">Actionable: {emo.actionable}</p>
            </div>
          ))}
        </div>

        {/* Segment-Wise Emotions */}
        <h4 className="mt-6 font-semibold text-rose-800 dark:text-rose-100">Segment-Wise Emotion Analysis</h4>
        <div className="mt-3">
          <DataTable
            headers={["Voter Segment", "Primary Emotion", "Intensity", "Shift Direction"]}
            rows={mp7EmotionAnalysis.segmentWiseEmotions.map(seg => [
              seg.segment,
              seg.primary,
              seg.intensity,
              seg.shift
            ])}
          />
        </div>

        {/* Emotion Triggers */}
        <h4 className="mt-6 font-semibold text-rose-800 dark:text-rose-100">Emotion Trigger Points</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {mp7EmotionAnalysis.emotionTriggers.map((trigger, i) => (
            <div key={i} className="rounded-lg bg-white/50 p-3 dark:bg-slate-800/50">
              <p className="text-sm font-medium text-rose-700 dark:text-rose-200">{trigger.trigger}</p>
              <p className="text-xs text-slate-500 mt-1">Emotion: {trigger.emotional}</p>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-slate-400">Impact: {trigger.impact}</span>
                <span className="text-xs text-slate-400">When: {trigger.timing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MP7-004: Rumor Management Framework */}
      <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
            7.4
          </div>
          <div>
            <p className="font-semibold text-amber-700 dark:text-amber-400">MP7-004: Rumor Management Framework</p>
            <p className="text-sm text-amber-600 dark:text-amber-300">Detection → Verification → Response → Containment</p>
          </div>
        </div>

        {/* Response Time Metrics */}
        <h4 className="font-semibold text-amber-800 dark:text-amber-100">Response Time Targets</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50 text-center">
            <p className="text-2xl font-bold text-amber-600">{"<45 min"}</p>
            <p className="text-xs text-slate-500">Detection → Alert</p>
          </div>
          <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50 text-center">
            <p className="text-2xl font-bold text-amber-600">{"<2 hrs"}</p>
            <p className="text-xs text-slate-500">Alert → Verification</p>
          </div>
          <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50 text-center">
            <p className="text-2xl font-bold text-amber-600">{"<4 hrs"}</p>
            <p className="text-xs text-slate-500">Verification → Response</p>
          </div>
          <div className="rounded-lg bg-white/50 p-4 dark:bg-slate-800/50 text-center">
            <p className="text-2xl font-bold text-teal-600">{">85%"}</p>
            <p className="text-xs text-slate-500">Containment Target (Tier 2)</p>
          </div>
        </div>

        {/* Response Playbook */}
        <h4 className="mt-6 font-semibold text-amber-800 dark:text-amber-100">Response Playbook</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-5">
          {mp7RumorManagement.responsePlaybook.map((step, i) => (
            <div key={i} className="rounded-lg bg-white/50 p-3 dark:bg-slate-800/50">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">{i + 1}</span>
                <p className="font-medium text-amber-700 dark:text-amber-200">{step.step}</p>
              </div>
              <p className="text-xs text-slate-500 mt-2">{step.tool}</p>
              <p className="text-xs text-teal-600 mt-1">SLA: {step.sla}</p>
            </div>
          ))}
        </div>

        {/* Known Rumor Scenarios with MP7 Branding */}
        <h4 className="mt-6 font-semibold text-amber-800 dark:text-amber-100">Known Rumor Scenarios (Priority Pre-Bunk)</h4>
        <div className="mt-3">
          <DataTable
            headers={["Rumor", "Risk", "Probability", "Mitigation"]}
            rows={mp7RumorManagement.knownRumorScenarios.map(r => [
              r.rumor,
              r.risk,
              r.probability,
              r.mitigation
            ])}
          />
        </div>

        <div className="mt-4 p-3 rounded-lg bg-red-100 dark:bg-red-900/40 border border-red-300">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>CRITICAL:</strong> "Congress is Anti-Sikh" narrative requires immediate pre-bunking. Probability 85%, Impact Severe. Historical record + 1984 context + comparative framing required before narrative gains traction.
          </p>
        </div>
      </div>

      {/* CYCLE 1 ENHANCEMENT: Formal Seat Projections */}
      <div className="rounded-xl border-2 border-indigo-500 bg-indigo-50 p-6 dark:border-indigo-700 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">S</span>
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">Formal Seat Projections — Cycle 1 (MP10)</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">Congress Internal MRP Model | 45 Observers | ±15-25 seats</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard title="Congress Range" value="45-58" subtitle="Low to High" color="bg-indigo-500" />
          <MetricCard title="AAP Range" value="28-37" subtitle="Low to High" color="bg-orange-500" />
          <MetricCard title="SAD Range" value="14-17" subtitle="Low to High" color="bg-yellow-500" />
          <MetricCard title="BJP Range" value="9-12" subtitle="Low to High" color="bg-green-500" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Three-Scenario Model</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Base Case (45-50%):</span><span className="font-medium">Hung Assembly</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Congress:</span><span className="font-medium text-indigo-600">55-65 seats</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Best Case (20-25%):</span><span className="font-medium">Congress majority</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Congress:</span><span className="font-medium text-green-600">70-85 seats</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Worst Case (25-30%):</span><span className="font-medium">AAP landslide</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Congress:</span><span className="font-medium text-red-600">18-30 seats</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Vote Share Forecast</p>
            <div className="mt-3 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-slate-500">Congress:</span><span className="font-medium text-indigo-600">30-33%</span></div>
              <div className="flex justify-between"><span className="text-slate-500">AAP:</span><span className="font-medium text-orange-600">26-27%</span></div>
              <div className="flex justify-between"><span className="text-slate-500">SAD:</span><span className="font-medium text-yellow-600">19-20%</span></div>
              <div className="flex justify-between"><span className="text-slate-500">BJP:</span><span className="font-medium text-green-600">13-14%</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-indigo-100 p-3 dark:bg-indigo-900/40">
          <p className="text-sm text-indigo-700 dark:text-indigo-300">
            <strong>Key Insight:</strong> Congress needs CM face announcement by Oct 2026 to lock in Base Case. Late announcement risks sliding toward Worst Case as anti-incumbency converts to indecision. MRP methodology shows 79% of seats within swing margin.
          </p>
        </div>
      </div>

      {/* CYCLE 1: Governance Satisfaction Barometer (MP1/governance/satisfaction-barometer.md) */}
      <div className="rounded-xl border-2 border-rose-500 bg-rose-50 p-6 dark:border-rose-700 dark:bg-rose-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">G</span>
          <div>
            <h3 className="text-lg font-semibold text-rose-700 dark:text-rose-400">Governance Satisfaction Barometer — AAP Government (2022-2026)</h3>
            <p className="text-sm text-rose-600 dark:text-rose-400">MP1-Foundational Scan | Research Date: 19 May 2026 | Classification: Strategic Intelligence</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mt-4 rounded-lg bg-rose-100 p-3 dark:bg-rose-900/40">
          <p className="text-sm text-rose-700 dark:text-rose-300">
            <strong>Executive Summary:</strong> Public satisfaction with the Bhagwant Mann-led AAP government has undergone a steep decline from the euphoric post-election high of March 2022. While the government retains a single credible achievement (free electricity), it faces deep dissatisfaction on the issues that matter most: drug eradication, employment, women's welfare, and corruption-free governance. The 2024 Lok Sabha results (AAP won only 3 of 13 seats) serve as the most authoritative satisfaction proxy.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard title="Overall Satisfaction" value="~40%" subtitle="Down from 85% in Q1 2022" color="bg-rose-500" trend="down" />
          <MetricCard title="Drug Eradication" value="15-20%" subtitle="AAP's broken #1 promise" color="bg-red-600" />
          <MetricCard title="Youth Unemployment" value="19.3%" subtitle="Rural: 22.5%" color="bg-red-600" />
          <MetricCard title="CM Mann Approval" value="42-45%" subtitle="Down from 80% in Mar 2022" color="bg-rose-500" trend="down" />
        </div>

        {/* Satisfaction Trend Chart */}
        <div className="mt-6">
          <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300">Satisfaction Trend (2022-2026)</h4>
          <div className="mt-3 h-48 bg-white rounded-lg p-4 dark:bg-slate-800">
            <div className="flex items-end justify-between h-full gap-2">
              {[
                { period: "Q1 2022", value: 85, color: "bg-green-500" },
                { period: "Q4 2022", value: 70, color: "bg-green-400" },
                { period: "Q3 2023", value: 55, color: "bg-yellow-400" },
                { period: "Q1 2024", value: 42, color: "bg-yellow-500" },
                { period: "Q4 2024", value: 38, color: "bg-orange-400" },
                { period: "Q2 2025", value: 35, color: "bg-orange-500" },
                { period: "Q4 2025", value: 40, color: "bg-orange-400" },
                { period: "Q1 2026", value: 42, color: "bg-rose-500" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full flex flex-col items-center">
                    <span className="text-xs text-slate-600 dark:text-slate-400 mb-1">{item.value}%</span>
                    <div
                      className={`w-full max-w-12 rounded-t ${item.color}`}
                      style={{ height: `${item.value * 1.5}px` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 mt-2">{item.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Issue-wise Satisfaction */}
        <div className="mt-6">
          <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300">Issue-wise Satisfaction (sorted by level)</h4>
          <div className="mt-3 grid gap-3">
            {[
              { issue: "Free Electricity", satisfaction: 72, level: "HIGH", color: "bg-green-500" },
              { issue: "Education", satisfaction: 42, level: "MODERATE", color: "bg-yellow-400" },
              { issue: "Infrastructure", satisfaction: 42, level: "MODERATE", color: "bg-yellow-400" },
              { issue: "Women's Welfare", satisfaction: 32, level: "LOW", color: "bg-orange-500" },
              { issue: "Healthcare", satisfaction: 32, level: "LOW", color: "bg-orange-500" },
              { issue: "Farmer Welfare", satisfaction: 27, level: "LOW", color: "bg-orange-600" },
              { issue: "Law & Order", satisfaction: 27, level: "LOW", color: "bg-orange-600" },
              { issue: "Corruption-Free", satisfaction: 22, level: "LOW", color: "bg-red-500" },
              { issue: "Employment", satisfaction: 22, level: "VERY_LOW", color: "bg-red-600" },
              { issue: "Drug Eradication", satisfaction: 17, level: "VERY_LOW", color: "bg-red-700" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-36 text-sm text-slate-600 dark:text-slate-400">{item.issue}</span>
                <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full`}
                    style={{ width: `${item.satisfaction}%` }}
                  />
                </div>
                <span className="w-16 text-sm font-medium text-slate-700 dark:text-slate-300">{item.satisfaction}%</span>
                <span className={`w-20 text-xs px-2 py-1 rounded text-center ${
                  item.level === "VERY_LOW" ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" :
                  item.level === "LOW" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400" :
                  item.level === "MODERATE" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400" :
                  "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
                }`}>{item.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Demographic & Lok Sabha */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-lg p-4 shadow-sm dark:bg-slate-800">
            <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">Demographic Satisfaction</h4>
            <div className="space-y-2">
              {[
                { demo: "Youth (15-29)", value: 17, trend: "down", note: "Most eroded - AAP's strongest base" },
                { demo: "Women", value: 32, trend: "down", note: "Delayed Rs 1000 scheme" },
                { demo: "Jat Sikh (20%)", value: 32, trend: "down", note: "Farm distress, drug crisis" },
                { demo: "SC (31.9%)", value: 32, trend: "down", note: "Congress base returning" },
                { demo: "Urban", value: 42, trend: "stable", note: "Propped by electricity" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{item.demo}</span>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{item.note}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.value}%</span>
                    <span className={`text-xs ${item.trend === "down" ? "text-red-500" : "text-yellow-500"}`}>↓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm dark:bg-slate-800">
            <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">Lok Sabha 2024 Results (June)</h4>
            <div className="space-y-2">
              {[
                { party: "Congress", seats: 7, total: 13, color: "bg-indigo-500" },
                { party: "AAP", seats: 3, total: 13, color: "bg-orange-500" },
                { party: "SAD", seats: 1, total: 13, color: "bg-yellow-500" },
                { party: "Independents", seats: 2, total: 13, color: "bg-gray-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-sm text-slate-600 dark:text-slate-400 flex-1">{item.party}</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {item.seats}/{item.total}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                <strong>Key:</strong> AAP won only 3 seats as incumbent — Congress maintained 7 despite multi-cornered fight
              </p>
            </div>
          </div>
        </div>

        {/* Anti-Incumbency Indicators */}
        <div className="mt-6">
          <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300">Key Anti-Incumbency Indicators</h4>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            {[
              { indicator: "Drug crisis failure", strength: "VERY_STRONG", signal: "Core promise broken" },
              { indicator: "Lok Sabha 2024 (3/13 seats)", strength: "STRONG", signal: "Anti-incumbency confirmed" },
              { indicator: "Youth unemployment 19.3%", strength: "STRONG", signal: "Demographic erosion" },
              { indicator: "Rural turnout 48.4% (lowest since 2008)", strength: "STRONG", signal: "Voter disengagement" },
              { indicator: "Rs 1000 delayed 4 years", strength: "STRONG", signal: "Women demographic erosion" },
              { indicator: "7 MPs defected (Apr 2026)", strength: "STRONG", signal: "Internal party collapse" },
              { indicator: "10+ ministers dropped/arrested", strength: "MODERATE", signal: "Corruption taint" },
              { indicator: "Social media spending scandal", strength: "MODERATE", signal: "Transparency concerns" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-white rounded dark:bg-slate-800">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                  item.strength === "VERY_STRONG" ? "bg-red-700" :
                  item.strength === "STRONG" ? "bg-red-500" :
                  "bg-yellow-500"
                }`} />
                <span className="text-sm text-slate-600 dark:text-slate-400 flex-1">{item.indicator}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">{item.signal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Implications for Congress */}
        <div className="mt-6 bg-white rounded-lg p-4 shadow-sm dark:bg-slate-800">
          <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-3">Strategic Implications for Congress</h4>
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <p>• <strong>AAP's floor:</strong> ~35-40% re-election willingness (40-50 seats, down from 92 in 2022) — Congress needs 59+ for majority</p>
            <p>• <strong>#1 Attack Vector:</strong> Drug crisis — AAP promised to end in 4 weeks; 4 years later it's worse. Resonates across ALL demographics</p>
            <p>• <strong>Women voters:</strong> Winnable — 4-year delay on Rs 1000 is a betrayal narrative. Congress should announce superior package</p>
            <p>• <strong>Youth crisis:</strong> 19.3% unemployment at crisis level — need credible employment plan, not just government jobs</p>
            <p>• <strong>Mann vs Government:</strong> Mann's personal approval (42-45%) exceeds government satisfaction (38-42%) — focus on failures, not person</p>
            <p>• <strong>Proof of concept:</strong> 2024 Lok Sabha proves AAP is beatable — Congress recovered from 2022 low of 18 seats</p>
            <p>• <strong>Historical pattern:</strong> No Punjab government won 3 consecutive terms — anti-incumbency building but not yet decisive</p>
          </div>
        </div>

        {/* CM Mann Approval Trend */}
        <div className="mt-6">
          <h4 className="text-base font-semibold text-slate-700 dark:text-slate-300">CM Bhagwant Mann Approval Trend</h4>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-400">Period</th>
                  <th className="text-right py-2 px-3 text-slate-600 dark:text-slate-400">Approval</th>
                  <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-400">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { period: "Mar 2022", approval: "80%", notes: "Massive personal mandate from Sangrur" },
                  { period: "Late 2022", approval: "65%", notes: "Electricity success helped" },
                  { period: "Mid 2023", approval: "50%", notes: "Drug crisis; remote-controlled by Kejriwal perception" },
                  { period: "Early 2024", approval: "40%", notes: "Lok Sabha loss damaged credibility" },
                  { period: "Late 2024", approval: "38%", notes: "Delhi AAP collapse; seen as Kejriwal's deputy" },
                  { period: "Mid 2025", approval: "42%", notes: "Image-building efforts; tough administrator push" },
                  { period: "Early 2026", approval: "45%", notes: "Guarantees fulfilled narrative" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-2 px-3 text-slate-700 dark:text-slate-300">{row.period}</td>
                    <td className="text-right py-2 px-3 font-medium text-slate-700 dark:text-slate-300">{row.approval}</td>
                    <td className="py-2 px-3 text-slate-500 dark:text-slate-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Gaps & Verification */}
        <div className="mt-4 rounded-lg bg-yellow-100 p-3 dark:bg-yellow-900/40">
          <p className="text-sm text-yellow-700 dark:text-yellow-300">
            <strong>Data Gaps (VERIFICATION_NEEDED):</strong> Independent satisfaction survey (2025-2026) NOT FOUND | Canal irrigation 22%→70% AAP claim | 49% road accident reduction AAP claim | 65,264 jobs claim | Rs 10.59 crore social media spending allegation
          </p>
        </div>

        {/* ========================================== */}
        {/* SYNTHESIS INTELLIGENCE SECTION */}
        {/* Derived from: s1-s4 synthesis MD files */}
        {/* ========================================== */}

        {/* Synthesis Overview */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4 dark:from-indigo-900/20 dark:to-purple-900/20">
          <h3 className="mb-3 text-lg font-semibold text-indigo-700 dark:text-indigo-400">
            Synthesis Intelligence Overview
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Documents Validated</div>
              <div className="text-2xl font-bold text-indigo-600">{crossReferenceValidation.documentsReviewed.total}</div>
              <div className="text-xs text-slate-400">Track A: {crossReferenceValidation.documentsReviewed.trackA} + Track B: {crossReferenceValidation.documentsReviewed.trackB}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Quality Pass Rate</div>
              <div className="text-2xl font-bold text-green-600">{qualityValidation.passRate}%</div>
              <div className="text-xs text-slate-400">{qualityValidation.overallAssessment}</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Critical Gap Categories</div>
              <div className="text-2xl font-bold text-red-600">{gapAnalysis.categoryGapAnalysis.filter(c => c.coverageRating === "CRITICAL_GAP").length}</div>
              <div className="text-xs text-slate-400">Require immediate attention</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Tier 1 Critical Gaps</div>
              <div className="text-2xl font-bold text-amber-600">{gapAnalysis.tier1Gaps.length}</div>
              <div className="text-xs text-slate-400">Immediate remediation</div>
            </div>
          </div>
        </div>

        {/* Tier 1 Critical Gaps */}
        <div className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="mb-3 text-sm font-semibold text-red-700 dark:text-red-400">
            Tier 1 Critical Gaps (Require Immediate Remediation)
          </h4>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {gapAnalysis.tier1Gaps.map((gap, idx) => (
              <div key={idx} className="flex items-start gap-2 rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {idx + 1}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{gap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 Gaps */}
        <div className="mb-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="mb-3 text-sm font-semibold text-amber-700 dark:text-amber-400">
            Tier 2 Gaps (Short-Term Remediation)
          </h4>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {gapAnalysis.tier2Gaps.map((gap, idx) => (
              <div key={idx} className="flex items-start gap-2 rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                  {idx + 1}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{gap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gap Severity Matrix */}
        <div className="mb-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
          <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Gap Severity Matrix (Top Critical Items)
          </h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-xs dark:divide-slate-700">
              <thead className="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th className="px-3 py-2 text-left text-slate-600 dark:text-slate-400">Gap</th>
                  <th className="px-3 py-2 text-left text-slate-600 dark:text-slate-400">Severity</th>
                  <th className="px-3 py-2 text-left text-slate-600 dark:text-slate-400">Impact</th>
                  <th className="px-3 py-2 text-left text-slate-600 dark:text-slate-400">Priority</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                {gapAnalysis.gapSeverityMatrix.filter(g => g.severity === "CRITICAL").slice(0, 7).map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-3 py-2 text-slate-700 dark:text-slate-300">{row.gap}</td>
                    <td className="px-3 py-2"><span className="rounded-full bg-red-100 px-2 py-1 text-red-700 dark:bg-red-900/50 dark:text-red-400">{row.severity}</span></td>
                    <td className="px-3 py-2 text-slate-600 dark:text-slate-400">{row.impact}</td>
                    <td className="px-3 py-2"><span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400">{row.priority}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}