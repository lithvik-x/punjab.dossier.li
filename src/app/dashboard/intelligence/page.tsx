"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";

// Technology Infrastructure Data (from MP8-001)
const techInfrastructureData = {
  constituencies: 117,
  districts: 23,
  totalITBudgetLow: 15.8,
  totalITBudgetMid: 25.9,
  totalITBudgetHigh: 40.2,
  hardwareCostLow: 8.2,
  hardwareCostMid: 12.5,
  hardwareCostHigh: 18.5,
  ruralMobilePenetration: 58.8,
  urbanMobilePenetration: 125.3,
  village4GCoverage: 88.9,
  village5GCoverage: 77.8,
  constituencyOfficeFailureRate: 30,
  itPersonnelState: "15-25",
  itPersonnelDistrict: "3-5",
  itPersonnelConstituency: "1-2",
  hardwareCostPerDistrictLow: 5.5,
  hardwareCostPerDistrictHigh: 11.55,
  hardwareCostPerConstituencyLow: 1.2,
  hardwareCostPerConstituencyHigh: 2.63,
};

// Voter Data Management (from MP8-002)
const voterDataManagement = {
  totalEligibleVoters: 2.25,
  pollingStations: "22,000-25,000",
  votersPerBooth: "650-1,000",
  totalDatabaseCostLow: 67,
  totalDatabaseCostHigh: 218,
  cloudHostingCost: "2-5 lakh/year",
  dataEntryCost: "5-15 lakh/cycle",
  appDevelopmentCost: "10-30 lakh",
  whatsappAPICost: "2-10 lakh/year",
  smsIVRCost: "3-13 lakh/year",
  dataAnalyticsCost: "10-25 lakh",
  surveyCost: "10-50 lakh",
};

// Cyber Security Data (from MP8-005)
const cyberSecurityData = {
  cyberAttackSurge2024: 300,
  hacktivistGroupsIdentified: 16,
  certInIncidents2025: 29.44,
  deepfakeExposureRate: 75,
  recommendedSecurityBudgetPercent: "8-12",
};

// Communication Infrastructure (from MP8-006)
const communicationData = {
  mobileTeledensity: 122.19,
  internetSubscribersPer100: 84.32,
  votersUnder35Percent: 65,
  whatsappGroups: "13,000-15,000",
  whatsappMembers: "9.1 lakh+",
  whatsappChannelSubscribers: "10,000+",
  messagesPerDay: 3,
  groundWorkers: 50000,
  volunteersPerBooth: 5,
  assemblyConstituencies: 117,
  lokSabhaConstituencies: 13,
  warRoomSetupCost: "15-30 lakh",
  totalCommInfrastructureLow: 85,
  totalCommInfrastructureHigh: 210,
};

// Emerging Tech Data (from MP8-010)
const emergingTechData = {
  hologramCampaignCost: "32-47 lakh",
  hologramReach: "4 lakh people",
  digitalAvatarCost: "1-2 lakh",
  voiceCloningCost: "1 lakh",
  totalAIInvestment2024: "80-100 crore",
  internetUsersIndia: 806,
  socialMediaUsersIndia: 491,
  cellularConnectionsIndia: 112,
  punjabYouthSocialMediaHours: 3.26,
  whatsappDominancePunjabYouth: 26.2,
  instagramDominancePunjabYouth: 20.8,
};

// MP8-002: Voter Data Management
const voterDataMgmt = {
  eligibleVoters: 2.25,
  pollingStations: "22,000-25,000",
  votersPerBooth: "650-1,000",
  databaseCostLow: 67,
  databaseCostHigh: 218,
  cloudHosting: "2-5 lakh/yr",
  dataEntryCost: "5-15 lakh/cycle",
  appDevCost: "10-30 lakh",
  whatsappAPICost: "2-10 lakh/yr",
  smsIVRCost: "3-13 lakh/yr",
  surveyCost: "10-50 lakh",
  dataAnalyticsCost: "10-25 lakh",
  deduplicationSoftwareDefect: true,
  dpdpActGap: true,
};

const voterEnrichmentTiers = [
  { tier: "Tier 1 — ECI Roll", fields: "Name, age, gender, EPIC, address, booth", cost: "Free" },
  { tier: "Tier 2 — Field Operations", fields: "Phone, support classification, contact history, issues", cost: "INR 5-15 lakh" },
  { tier: "Tier 3 — External Augmentation", fields: "Government scheme data, consumer profiles", cost: "INR 10-25 lakh" },
];

const voterSegmentation = [
  { segment: "Core Supporters", strategy: "Turn out to vote, reinforce loyalty", channel: "WhatsApp, door-to-door" },
  { segment: "Swing Voters", strategy: "Issue-specific messaging", channel: "WhatsApp, SMS, IVR" },
  { segment: "Opposition Supporters", strategy: "Suppress — not priority", channel: "Digital ads (awareness)" },
  { segment: "Non-Voters/Low Propensity", strategy: "Motivate through specific promises", channel: "SMS, IVR, door-to-door" },
];

const microTargetingIssues = [
  { issue: "Drug crisis", regions: "Malwa, Doaba" },
  { issue: "MSP/Farmer distress", regions: "All rural Malwa" },
  { issue: "Unemployment/NRI emigration", regions: "Doaba, urban" },
  { issue: "Healthcare", regions: "Urban, rural Malwa" },
  { issue: "Governance quality", regions: "All constituencies" },
];

// MP8-007: Data Analytics & BI
const analyticsChannels = [
  { channel: "Search Console Analytics", metric: "Impressions, CTR, position", use: "Organic search performance" },
  { channel: "Social Media Analytics", metric: "Reach, engagement, followers", use: "Platform performance tracking" },
  { channel: "Web Analytics", metric: "Traffic, bounce, conversions", use: "Website performance" },
  { channel: "Paid Campaign Analytics", metric: "CPC, conversions, ROI", use: "Ad spend optimization" },
  { channel: "WhatsApp Analytics", metric: "Delivery, read, response rates", use: "Voter engagement" },
  { channel: "SMS Analytics", metric: "Delivery, open rates", use: "Bulk outreach" },
  { channel: "ORM Analytics", metric: "Sentiment, reach, mentions", use: "Reputation monitoring" },
];

const abTestExamples = [
  { campaign: "Obama 2008", test: "'Learn More' vs 'Join Us Now'", result: "+18.6% conversion" },
  { campaign: "Obama 2012", tests: "500+ A/B tests", result: "+29% donation, +161% sign-ups" },
  { campaign: "Vote Leave", test: "5 narratives", result: "'Take Back Control' winning message" },
];

const analyticsTeamStructure = [
  { role: "Data Scientists", count: "1-2", cost: "INR 10-25 lakh/6mo" },
  { role: "Data Analysts", count: "2-3", cost: "INR 5-15 lakh/6mo" },
  { role: "Campaign Technologist", count: "1-2", cost: "INR 8-20 lakh/6mo" },
];

// MP8-008: Content Creation Pipeline
const contentPipeline = [
  { phase: "1. Ideation & Brief", deliverable: "Creative brief with audience, message, channels", turnaround: "2-4 hours" },
  { phase: "2. Production", deliverable: "Graphics, video, text, audio content", turnaround: "4-24 hours" },
  { phase: "3. Localization", deliverable: "EN/HI/PN variants, regional adaptations", turnaround: "2-8 hours" },
  { phase: "4. Approval", deliverable: "Legal, political, technical QC", turnaround: "4-48 hours" },
  { phase: "5. Distribution", deliverable: "Multi-channel deployment with tracking", turnaround: "Real-time" },
];

const contentTypes = [
  { type: "Video (Professional)", cost: "INR 50K-5L/min", use: "High-priority ads, manifesto" },
  { type: "Video (Rapid Response)", cost: "INR 5-20K/piece", use: "Reactive content, same-day" },
  { type: "AI-Generated Video", cost: "INR 1-3 lakh/video", use: "Personalized voter appeals" },
  { type: "Short-Form/Reels", cost: "INR 2-10K/piece", use: "Social media, youth outreach" },
  { type: "Static Graphics", cost: "INR 5-50K/piece", use: "WhatsApp, social, print" },
];

const eciCompliance = [
  { rule: "AI Content Labeling", requirement: "Label all synthetic content as 'AI Generated' or 'Digitally Enhanced'" },
  { rule: "48-Hour Silence Period", requirement: "No paid digital content in final 48 hours before polling" },
  { rule: "ECI Content Filters", requirement: "Built-in filters for Model Code of Conduct compliance" },
  { rule: "Digital Spending Audit", requirement: "Maintain logs of all digital campaign expenditure" },
];

// MP8-009: Mobile App & Party Workers
const workerAppBenchmarks = [
  { app: "BJP Saral App", downloads: "2.9M+", features: "Booth-level demographic data collection" },
  { app: "Ranneeti", campaigns: "1,290+", features: "Offline sync, GPS tracking, dashboard" },
  { app: "CampaignMitra", coverage: "All India", features: "WhatsApp integration, voter segmentation" },
];

const workerAppFeatures = [
  { category: "Contact Logging", features: "GPS-tagged visits, supporter tagging, issue tracker, call/WhatsApp integration" },
  { category: "Updates & Communications", features: "Multi-language push notifications, audio messages, content library" },
  { category: "Dashboard", features: "Real-time booth heat maps, performance rankings, alerts" },
];

const appTechStack = [
  { layer: "Architecture", choice: "PWA + WhatsApp Hybrid", rationale: "App-like experience, offline-first, 2G compatible" },
  { layer: "Offline Storage", choice: "Local booth data on device", rationale: "Works in low-connectivity Malwa/border areas" },
  { layer: "Sync", choice: "Auto-sync on WiFi/connectivity", rationale: "Background sync at night" },
  { layer: "Fallback", choice: "SMS + WhatsApp bot", rationale: "Ultra-low bandwidth alternative" },
];

const gamificationFeatures = [
  { feature: "Points System", detail: "+10 house visit, +15 supporter ID, +20 issue report" },
  { feature: "Leaderboards", detail: "Constituency/block/booth-level rankings" },
  { feature: "Badges", detail: "Perceptive worker, Rapid responder, Issue reporter" },
  { feature: "Rewards", detail: "Recognition in party communications, meetings" },
];

const appDevCost = {
  custom: "INR 15-40 lakh development + INR 2-5 lakh/month maintenance",
  saas: "INR 15,000-1,50,000/month (Ranneeti/CampaignMitra)",
};

// MP7-001: Keyword & Hashtag Monitoring Taxonomy (3,450+ keywords)
const keywordTaxonomy = {
  categories: 10,
  totalKeywords: "3,450+",
  breakdown: [
    { category: "A: Political Entities & People", keywords: "800+", description: "Congress leadership, PPCC, opposition, candidates" },
    { category: "B: Constituencies & Geography", keywords: "400+", description: "All 117 ACs, 13 Lok Sabha, regional terms" },
    { category: "C: Governance & Issues", keywords: "600+", description: "Drugs, unemployment, MSP, corruption, health, education" },
    { category: "D: Caste/Community/Religion", keywords: "300+", description: "Jat Sikh, Mazhabi, Ravidasia, OBC, religious institutions" },
    { category: "E: Sentiment & Emotion", keywords: "200+", description: "Hope, anger, fear, betrayal, frustration" },
    { category: "F: Elections & Campaign", keywords: "300+", description: "Vote, booth, EVM, ECI, nomination, rally" },
    { category: "G: Media & Platforms", keywords: "200+", description: "News channels, newspapers, social platforms" },
    { category: "H: Competitive Narratives", keywords: "250+", description: "AAP claims, SAD narratives, BJP counter-narratives" },
    { category: "I: Digital & Behavioral", keywords: "150+", description: "Engagement, bot detection, influencer terms" },
    { category: "J: Congress Brand & Narratives", keywords: "250+", description: "Party identity, legacy, 2027 narrative framework" },
  ],
  languageCoverage: ["Punjabi Gurmukhi", "Roman Punjabi", "Hindi", "English"],
};

// MP7-002: Platform-Specific Monitoring Protocols
const platformProtocols = {
  twitter: { scope: "Hashtag trends, mentions, bot detection", keyMetrics: "Impressions, engagements, SOV, trending position", alertTriggers: "Spike >300% normal, coordinated amplification" },
  facebook: { scope: "Public pages, groups, ad library", keyMetrics: "Page likes, engagement rate, comment sentiment", alertTriggers: "Viral negative, coordinated attack" },
  instagram: { scope: "Hashtags, geo-tags, Reels, Stories", keyMetrics: "Reach, engagement rate, follower growth", alertTriggers: "Cross-platform virality" },
  youtube: { scope: "Video titles, comments, channels", keyMetrics: "Views, watch time, comment sentiment", alertTriggers: "Negative video viral" },
  whatsapp: { scope: "Public groups (ethical monitoring)", keyMetrics: "Forward tracking via PIB, downstream platforms", alertTriggers: "Downstream amplification" },
};

// MP7-003: Alert Configuration Thresholds
const alertConfiguration = {
  spikeDetection: { volumeThreshold: ">200% of 7-day average", velocityThreshold: ">500 mentions/hour sustained 15+ min", geographicConcentration: ">40% from single district in 1-hour" },
  negativeSentiment: { ratioThreshold: ">35% negative baseline", sharpSwing: ">15 percentage points in 24h", highVelocity: ">100 negative mentions/hour" },
  crisisKeywords: ["attack", "burn", "clash", "murder", "rape", "lynch", "communal", "arrest", "booth capturing", "EVM malfunction"],
  viralContent: { crossPlatform: "3+ platforms within 1 hour", engagementThreshold: ">10,000 engagements in 2 hours", celebrityAmplification: "Verified >100K followers sharing" },
};

// MP7-004: Four-Level Alert System
const alertLevels = [
  { level: "GREEN", trigger: "Routine monitoring", response: "Standard reporting cadence", duration: "Continuous during campaign" },
  { level: "YELLOW", trigger: "Sentiment swing >10%, competitor announcement, emerging narrative", response: "Increase monitoring frequency, notify communications team", duration: "Until threat assessed" },
  { level: "ORANGE", trigger: "Sustained negative >48h, cross-platform attack, credible threat", response: "War room activation, leadership notification, counter-narrative deployment", duration: "Until contained" },
  { level: "RED", trigger: "Violence, assassination attempt, mass communal incident, deepfake viral", response: "Immediate leadership assembly, law enforcement coordination, 24/7 war room", duration: "Until resolved" },
];

export default function IntelligencePage() {
  const dataSources = [
    { name: "Social Media (X/Twitter)", feeds: "Standard API: ~10K/hr", latency: "Real-time", accuracy: 92 },
    { name: "Ground Network", feeds: "11,700 booth agents", latency: "15 min", accuracy: 95 },
    { name: "News Aggregation", feeds: "Real-time news API", latency: "5 min", accuracy: 88 },
    { name: "Poll Data", feeds: "CSDS-Lokniti, local surveys", latency: "Daily", accuracy: 78 },
    { name: "WhatsApp Signal", feeds: "NOT MONITORABLE (E2E encrypted)", latency: "N/A", accuracy: 0 },
  ];

  const socialListeningTools = [
    { tool: "Meltwater", cost: "INR 1.5-10 lakh/month", capabilities: "Full-spectrum media monitoring, AI analytics", punjabiSupport: "Limited (English/Hindi)" },
    { tool: "Brandwatch", cost: "INR 2-15 lakh/month", capabilities: "Deep social listening, influencer identification", punjabiSupport: "None native" },
    { tool: "Talkwalker", cost: "INR 1-8 lakh/month", capabilities: "Crisis alerting, competitor analysis", punjabiSupport: "None native" },
    { tool: "Sprinklr", cost: "INR 3-20 lakh/month", capabilities: "Unified customer experience platform", punjabiSupport: "Hindi partial" },
    { tool: "Mentionlytics", cost: "INR 2,000-15,000/month", capabilities: "Basic sentiment, keyword tracking", punjabiSupport: "Limited" },
    { tool: "Google Alerts", cost: "Free", capabilities: "News and web mention tracking", punjabiSupport: "Works with Romanized Punjabi" },
  ];

  const xApiPricing = [
    { tier: "Free (Basic)", cost: "$100/month", posts: "1,500 Posts/month", capabilities: "Development/testing only" },
    { tier: "Basic", cost: "$100/month", posts: "10,000 Posts/month", capabilities: "Read-only; no write" },
    { tier: "Pro", cost: "$5,000/month", posts: "1 million Posts/month", capabilities: "Full API access" },
    { tier: "Enterprise", cost: "$20,000+/month", posts: "Unlimited", capabilities: "Dedicated support" },
  ];

  const techStackTiers = [
    { tier: "Tier 1 (Essential)", budget: "INR 2.84-7.3 lakh", duration: "8-month campaign", components: "Mentionlytics, Power BI, WhatsApp BSP, Fast2SMS, CampaignMitra, Google Cloud" },
    { tier: "Tier 2 (Recommended)", budget: "INR 15-40 lakh", duration: "8-month campaign", components: "Talkwalker, Custom dashboard, 2-3 data analysts, IVR system" },
    { tier: "Tier 3 (Full)", budget: "INR 50 lakh+", duration: "Full operation", components: "Meltwater/Brandwatch, SmartNeta, 5+ data team, 24/7 monitoring" },
  ];

  const implementationRoadmap = [
    { phase: "Phase 1 (May-Aug 2026)", budget: "INR 3-8 lakh", objectives: "Build core infrastructure, collect baseline data", deliverables: "Cloud env, voter DB, CampaignMitra, basic monitoring, GIS maps" },
    { phase: "Phase 2 (Sep-Dec 2026)", budget: "INR 5-15 lakh", objectives: "Scale operations, build intelligence", deliverables: "Full keyword tracking, voter profiles, field network, real-time dashboard" },
    { phase: "Phase 3 (Jan-Feb 2027)", budget: "INR 3-10 lakh", objectives: "Full operation, 24/7 monitoring", deliverables: "War room activation, GOTV systems, crisis response, real-time intelligence" },
  ];

  const electionScenarios = [
    { scenario: "A: Congress Majority", probability: "15-20%", seats: "60-72", conditions: "35-38% vote, AAP fracture, anti-incumbency mature", coalition: "None required" },
    { scenario: "B: Congress Strong", probability: "20-25%", seats: "52-59", conditions: "32-35% vote, AAP united but loses rural Malwa", coalition: "2-4 independents possible" },
    { scenario: "C: Hung Assembly", probability: "25-30%", seats: "45-52 (Congress)", conditions: "28-32% vote, AAP fractures (15-20 MLAs)", coalition: "Kingmaker dynamics" },
    { scenario: "D: Congress Minority", probability: "20-25%", seats: "40-48", conditions: "27-30% vote, AAP united, Modiwave active", coalition: "SAD partnership needed" },
    { scenario: "E: AAP Realignment", probability: "10-15%", seats: "30-40", conditions: "<25% vote, AAP fractures into multiple factions", coalition: "Opposition coalition" },
    { scenario: "F: AAP Supermajority", probability: "5-10%", seats: "15-25", conditions: "<22% vote, AAP governance record succeeds", coalition: "N/A (opposition)" },
  ];

  const seatProjections = [
    { confidence: "95% CI", range: "28-78 seats", interpretation: "Wide range reflecting uncertainty" },
    { confidence: "80% CI", range: "38-68 seats", interpretation: "Moderate confidence interval" },
    { confidence: "50% CI", range: "45-60 seats", interpretation: "Core projection range" },
    { confidence: "Point Estimate", range: "50-55 seats", interpretation: "Most likely outcome" },
  ];

  const voteShareThresholds = [
    { threshold: "<20%", projectedSeats: "10-20", scenario: "Worst case" },
    { threshold: "20-25%", projectedSeats: "18-28", scenario: "Floor scenario" },
    { threshold: "25-30%", projectedSeats: "35-48", scenario: "Base case" },
    { threshold: "30-35%", projectedSeats: "52-62", scenario: "Target range" },
    { threshold: ">35%", projectedSeats: "65-78", scenario: "Best case" },
  ];

  const regionalSwingTargets = [
    { region: "Malwa (69 seats)", current: "11 seats", target: "35-40 seats", swing: "+24-29" },
    { region: "Majha (25 seats)", current: "4 seats", target: "12-15 seats", swing: "+8-11" },
    { region: "Doaba (23 seats)", current: "3 seats", target: "10-12 seats", swing: "+7-9" },
    { region: "TOTAL (117 seats)", current: "18 seats", target: "57-67 seats", swing: "+39-49" },
  ];

  const riskTaxonomy = [
    { category: "A: Strategic", risk: "Voter fatigue with Congress", probability: "Medium (0.4)", impact: "High", mitigation: "Fresh leadership narrative" },
    { category: "A: Strategic", risk: "AAP welfare scheme retention", probability: "High (0.7)", impact: "High", mitigation: "Contrast on implementation failures" },
    { category: "A: Strategic", risk: "Caste consolidation failure", probability: "Medium (0.5)", impact: "High", mitigation: "Pre-poll caste coordination" },
    { category: "B: Operational", risk: "Fund allocation inefficiency", probability: "Medium (0.4)", impact: "Medium", mitigation: "Centralized war chest" },
    { category: "B: Operational", risk: "Candidate quality variance", probability: "Medium (0.5)", impact: "Medium", mitigation: "Standardized evaluation" },
    { category: "B: Operational", risk: "Booth agent coverage gaps", probability: "Medium (0.4)", impact: "Medium", mitigation: "Training + volunteer mobilization" },
    { category: "C: External", risk: "National event overshadowing", probability: "Low (0.2)", impact: "High", mitigation: "Rapid-response communication" },
    { category: "C: External", risk: "Economic shock (agri crisis)", probability: "Low (0.3)", impact: "High", mitigation: "Emergency policy proposals" },
  ];

  const warRoomSpecs = [
    { spec: "Space Required", value: "1,500-2,000 sq ft" },
    { spec: "Workstations", value: "25-30 with dual monitors" },
    { spec: "Internet", value: "100+ Mbps dedicated, redundant lines" },
    { spec: "Display Wall", value: "4K video wall (10+ panels)" },
    { spec: "Staff Total", value: "20-30 personnel" },
    { spec: "Shift Coverage", value: "18-20 hours/day during campaign" },
  ];

  const engagementBenchmarks = [
    { platform: "Facebook", rate: "0.5-1.5%", good: "1%", excellent: "3%+" },
    { platform: "Instagram", rate: "1.5-3%", good: "2%", excellent: "5%+" },
    { platform: "X (Twitter)", rate: "0.3-0.8%", good: "0.5%", excellent: "1%+" },
    { platform: "YouTube", rate: "5-10%", good: "7%", excellent: "12%+" },
    { platform: "WhatsApp Status", rate: "10-20%", good: "15%", excellent: "30%+" },
  ];

  const paidSocialAllocation = [
    { platform: "Meta (FB/Instagram)", percent: "45-50%", purpose: "Largest reach, best targeting" },
    { platform: "X (Twitter)", percent: "10-15%", purpose: "Real-time engagement" },
    { platform: "YouTube", percent: "15-20%", purpose: "Long-form persuasion" },
    { platform: "WhatsApp Status", percent: "5-10%", purpose: "Direct voter communication" },
    { platform: "Emerging Platforms", percent: "5-10%", purpose: "Early-mover advantage" },
  ];

  const crisisEscalation = [
    { level: "1 - Monitor", trigger: "Negative mention, low engagement", responseTime: "4 hours", escalation: "Content team observe" },
    { level: "2 - Engage", trigger: "Negative content gaining traction", responseTime: "1 hour", escalation: "Community Manager + Director" },
    { level: "3 - Respond", trigger: "Viral negative content, sustained attack", responseTime: "30 min", escalation: "Escalation Officer + Command Head" },
    { level: "4 - Crisis", trigger: "Major scandal, fake news, security", responseTime: "15 min", escalation: "Full Leadership + Press + Legal" },
  ];

  const alertTriggers = [
    { alertType: "Negative Narrative Spike", trigger: "3x normal volume of negative mentions", responseTime: "30 minutes" },
    { alertType: "Opposition Attack", trigger: "Specific attack narrative identified", responseTime: "1 hour" },
    { alertType: "Misinformation", trigger: "False claims about Congress/candidates", responseTime: "2 hours" },
    { alertType: "Local Incident", trigger: "Booth/district-level crisis", responseTime: "2 hours" },
    { alertType: "Media Story", trigger: "Breaking news requiring response", responseTime: "1 hour" },
  ];

  const fiscalData = [
    { metric: "Punjab State Debt", value: "Rs 4.17 lakh crore (~45% GSDP)", severity: "critical" },
    { metric: "BJP Punjab Donations", value: "Rs 60.30 crore (93%)", severity: "critical" },
    { metric: "Congress Punjab Donations", value: "Rs 3.73 crore (5.8%)", severity: "high" },
    { metric: "AAP Punjab Donations", value: "Rs 71 lakh (0.1%)", severity: "high" },
    { metric: "Fiscal Deficit 2025-26", value: "4.2% of GSDP", severity: "high" },
    { metric: "Power Subsidy", value: "Rs 15,550 crore", severity: "medium" },
    { metric: "Punjab 2022 Actual Spending", value: "Rs 17.99L avg (45% of limit)", severity: "medium" },
    { metric: "ECI Spending Limit", value: "Rs 40L/seat, 117 seats = Rs 46.8 Cr", severity: "medium" },
  ];

  const campaignFinance = [
    { party: "AAP 2027 (Projected)", amount: "Rs 260-400 Cr", source: "Central funds, state contacts, donors", gap: "vs Congress" },
    { party: "Congress 2027 (Projected)", amount: "Rs 220-350 Cr", source: "Central allocation, Punjab PCC, candidates", gap: "Base case" },
    { party: "BJP 2027 (Projected)", amount: "Rs 85-145 Cr", source: "Central funds, NDA donors", gap: "Solo fight" },
    { party: "Resource Deficit (Worst)", amount: "Rs 150 Cr", source: "AAP maximization scenario", gap: "Adverse case" },
  ];

  const budgetAllocation = [
    { category: "Field Operations", percent: 32, amount: "Rs 112 Cr", rationale: "Booth-level highest ROI" },
    { category: "Media & Advertising", percent: 25, amount: "Rs 87.5 Cr", rationale: "Narrative dominance" },
    { category: "Digital & Social", percent: 12, amount: "Rs 42 Cr", rationale: "Youth, measurable" },
    { category: "Events & Rallies", percent: 10, amount: "Rs 35 Cr", rationale: "Visibility, enthusiasm" },
    { category: "Staff & Infrastructure", percent: 8, amount: "Rs 28 Cr", rationale: "Organizational backbone" },
    { category: "Security & Compliance", percent: 5, amount: "Rs 17.5 Cr", rationale: "ECI compliance" },
    { category: "Contingency", percent: 8, amount: "Rs 28 Cr", rationale: "Crisis response" },
  ];

  const alertTiers = [
    { tier: "Red", seats: "5-8", risk: "Violence, booth capture" },
    { tier: "Orange", seats: "12-15", risk: "EVM malfunction, fights" },
    { tier: "Yellow", seats: "20-25", risk: "Disputes, delays" },
  ];

  const waterCrisisData = [
    { metric: "Over-Exploited Blocks", value: "115 of 153", detail: "75%+ of Punjab's agricultural blocks critically overexploited — highest in India", severity: "critical" },
    { metric: "CGWB Over-Exploited Classification", value: "78.9%", detail: "of blocks classified as over-exploited (CGWB 2024); 18 of 22 districts: water table dropped >1m/year (1998-2018)", severity: "critical" },
    { metric: "Groundwater Extraction", value: "156%", detail: "Extraction rate vs recharge — extracting 1.56x what replenishes annually", severity: "critical" },
    { metric: "Water Table Decline", value: "0.49 m/yr", detail: "Average annual decline; reaches 46 cm/yr in worst-affected Malwa blocks", severity: "critical" },
    { metric: "Uranium Contamination", value: "53%", detail: "of groundwater samples exceed safe limits in Malwa region; 44.51% of wells at 0-10m depth", severity: "critical" },
    { metric: "Tube Well Proliferation", value: "1.38M", detail: "From 192,000 (1970-71) to 1.38 million (2011-12); canal irrigation share: 58.4% → 28%, tubewell: 41.1% → 71.3%", severity: "critical" },
    { metric: "SYL Canal Status", value: "DEADLOCKED", detail: "Jan 2026: Punjab insists no surplus water; joint working group formed but no resolution", severity: "high" },
    { metric: "Water Source Contamination", value: "70%+", detail: "Surface and groundwater contaminated; only 29% of wastewater treated before release", severity: "critical" },
    { metric: "Canal Irrigation Expansion", value: "5.3M acres", detail: "From 2.23M (2022) to 5.3M acres (April 2026); target: 7M acres by 2027", severity: "medium" },
  ];

  const nriIntelligence = [
    { metric: "Diaspora Global Estimate", value: "3-5 million", severity: "high" },
    { metric: "Doaba NRI Belt", value: "23 assembly seats", severity: "critical" },
    { metric: "Family Vote Multiplier", value: "5-8x via remittance chains", severity: "high" },
    { metric: "NRI Sabha Punjab", value: "Paralyzed since Jan 2026", severity: "critical" },
    { metric: "India-Canada Tensions", value: "CSIS confirmed interference", severity: "high" },
    { metric: "ECI Proxy Voting", value: "Not operationalized", severity: "medium" },
  ];

  const diasporaThreats = [
    { threat: "BJP NRI Acceleration", detail: "Feb 2026 Punjab Diaspora Meet, Amit Shah Mission Punjab", severity: "critical" },
    { threat: "Canada Interference", detail: "CSIS May 2026: assassination, murder plots, extortion by India ops", severity: "critical" },
    { threat: "Dunki Migration", detail: "Doaba most affected: Canada, UK, Australia, Germany, USA, Gulf", severity: "high" },
    { threat: "Dera Vote-Bank", detail: "90% of donations in dera areas; 9,000 deras concentrated in Doaba", severity: "high" },
    { threat: "Congress NRI Gap", detail: "IOC structure exists but zero execution; 8-month window closing", severity: "critical" },
  ];

  const alerts = [
    { severity: "critical", location: "Ludhiana North", issue: "AAP worker agitation", time: "10 min ago" },
    { severity: "high", location: "Sangrur", issue: "SAD booth capture attempt", time: "45 min ago" },
    { severity: "medium", location: "Patiala", issue: "Voter slip distribution delay", time: "1 hour ago" },
    { severity: "low", location: "Amritsar West", issue: "Minor protest at booth 142", time: "2 hours ago" },
  ];

  // === DATA FROM A-01-11: DRUG NEXUS (Punjab Drug Crisis Intelligence) ===
  const drugNexusData = {
    users: {
      total: "6.6 million",
      percentage: "18% of population",
      classification: "Heroin/cannabis users",
      trend: "Increasing despite police claims"
    },
    seizures: {
      heroin2023: "226 kg",
      contraband: "Phensedyl, ganja trafficking routes",
      routes: "Pakistan border via BSF gaps, Delhi supply chains"
    },
    economicImpact: {
      annualLoss: "Rs 25,000 crore",
      perFamily: "Rs 1.5 lakh/year",
      agriculturalLabor: "30% wages lost to drug addiction"
    },
    policeNexus: {
      corruptionEstimate: "30-40% police complicit",
      TarnTaran: "Inspector suspended 2025, heroin recovery",
      Ferozpur: " DSP caught with 10kg heroine"
    },
    treatmentGap: {
      addicts: "2.8 million need treatment",
      deaddictionCenters: "Only 0.4% coverage",
      rehabCapacity: "Severely inadequate"
    },
    politicalSalience: {
      issueRank: "THE #1 rural Malwa issue",
      voterImpact: "Decisive in 40+ assembly seats",
      AAPfailure: "2022 promise unfulfilled"
    }
  };

  // === DATA FROM A-01-12: BORDER SECURITY ===
  const borderSecurityData = {
    threats: {
      BKI: "Babbar Khalsa International, Khalistan Liberation Front",
      Tiger: "KLF, param vaid",
      threatLevel: "MODERATE — India-Pakistan tensions"
    },
    infiltration: {
      routes: "Tarn Taran, Ferozpur, Ajnala",
      method: "Pakistan handlers via encrypted apps",
      sleeperCells: "3-5 suspected in Punjab"
    },
    bsfGaps: {
      fencingGaps: "2.7km/day construction rate",
      riverine: "Pakistan main issue at river boundaries",
      challenge: "Wheat smuggle, drug trafficking via border"
    },
    extremismRevival: {
      2025: "12 flagged people",
      2026: "23 flagged people (already double)",
      flagging: "CEB flags doubled in single year"
    },
    farmerBorderIssue: {
      wheatSmuggling: "10-15 trucks daily",
      crossBorderTrade: "Informal economy thriving",
      securityDilemma: "Border farmers sympathetic to Punjab"
    }
  };

  // === DATA FROM A-01-20: STUBBLE BURNING ===
  const stubbleBurningData = {
    magnitude: {
      incidents2023: "50,012",
      paddyResidue: "19.6 million tonnes",
      window: "October-November only",
      dayAverage: "1,000+ fires daily peak"
    },
    distribution: {
      malwaShare: "65-70% of total fires",
      regionalHotspots: "Bathinda, Mansa, Sangrur, Barnala, Moga",
      doaba: "Doaba generates less stubble (less rice)"
    },
    healthImpact: {
      delhiAQI: "Stubble contributes 20-40% Delhi pollution",
      prematureDeaths: "Link with respiratory illness spike",
      economicCost: "Rs 3.6 lakh crore health costs"
    },
    governmentResponse: {
      paddySubsidy: "Rs 1,500/acre",
      happySeeder: "Available but underutilized",
      solution: "In-situ residue management not adopted"
    },
    farmerDistress: {
      cost: "Rs 3,000-5,000/acre to manage stubble",
      alternateCrop: "DSR adoption only 28%",
      distress: "Additional Rs 10,000/acre cost burden"
    },
    environmental: {
      groundwater: "Paddy cultivation depletes groundwater",
      soilHealth: "Stubble burning destroys soil microbiology",
      carbonEmission: "Major contributor to Punjab emissions"
    }
  };

// MP10 Predictive Analytics Data
const seatProjectionModel = {
  observers: 45,
  surveys: 3,
  aiccOversight: true,
  confidenceInterval: "±15-25 seats",
  methodology: "MRP (Multiple Recursive Prediction)",
};

const voteShareForecasts = [
  { party: "Congress", low: 30, high: 33, avg: 31.5 },
  { party: "AAP", low: 26, high: 27, avg: 26.5 },
  { party: "SAD", low: 19, high: 20, avg: 19.5 },
  { party: "BJP", low: 13, high: 14, avg: 13.5 },
];

const constituencyMargins = [
  { category: "Safe", threshold: ">10%", description: "Comfortable win margin" },
  { category: "Likely", threshold: "5-10%", description: "Favorable but not secure" },
  { category: "Lean", threshold: "1-5%", description: "Narrow advantage" },
  { category: "Tossup", threshold: "<1%", description: "Too close to call" },
];

const swingVoterData = [
  { party: "AAP", swing2017to2022: "+27.9%", description: "Massive gain from Congress" },
  { party: "Congress", swing2017to2022: "-15.6%", description: "Major loss to AAP" },
  { party: "Seats under 10% margin", value: 68, description: "Competitive constituencies" },
];

const candidateViability = [
  { metric: "Total Candidates Analyzed", value: 1020 },
  { metric: "Renomination Rate", value: "35%" },
  { metric: "Postgraduate Impact", value: "+28% winnability" },
  { metric: "Criminal Cases Impact", value: "+27% winnability" },
  { metric: "Crorepati Status", value: "+14% winnability" },
];

const regionalCasteBlocs = [
  { region: "Malwa", seats: 69, deraInfluence: "12-18%" },
  { region: "Majha", seats: 25, deraInfluence: "Minimal" },
  { region: "Doaba", seats: 23, deraInfluence: "High (Dera concentration)" },
];

const turnoutModeling = [
  { election: "2022 Punjab", turnout: "65.38%", trend: "down" },
  { election: "2017 Punjab", turnout: "78.06%", trend: "up" },
  { election: "Rural Areas", turnout: "70-75%", segment: "rural" },
  { election: "Urban Areas", turnout: "58-64%", segment: "urban" },
];

const evmCounting = [
  { metric: "Booths per Counting Round", value: 14 },
  { metric: "Recount Threshold", value: "1000 votes" },
  { metric: "Total Polling Stations", value: "22,000-25,000" },
];

const mp10Scenarios = [
  { scenario: "Base Case", probability: "45-50%", congressSeats: "55-65", aapSeats: "35-45", conditions: "Hung assembly, Congress largest single party" },
  { scenario: "Best Case (Congress)", probability: "20-25%", congressSeats: "70-85", aapSeats: "25-35", conditions: "CM face announced early, opposition fragmentation" },
  { scenario: "Worst Case (Congress)", probability: "25-30%", congressSeats: "18-30", aapSeats: "60-75", conditions: "AAP welfare reinforcement, Congress leadership vacuum" },
];

const cmFaceAnalysis = [
  { candidate: "Charanjit Singh Channi", base: "Dalit electorate (32% SC)", strength: "First Dalit CM symbolism", weakness: "Majha region, panthic voters", regionalGap: "Sikh-majority constituencies" },
  { candidate: "Raja Warring", base: "Youth, rural organization", strength: "PPCC president network", weakness: "No separate CM claim", regionalGap: "Urban elite" },
  { candidate: "Partap Singh Bajwa", base: "Legislative experience", strength: "Urban-professional base", weakness: "Age perception", regionalGap: "Youth, rural Dalit" },
  { candidate: "Sukhjinder Randhawa", base: "Doaba-Malwa border", strength: "Regional heavyweight", weakness: "Limited pan-state recognition", regionalGap: "Majha, urban youth" },
];

const cmAnnouncementTiming = [
  { timing: "Optimal Window", days: "180-240", description: "6-8 months before election" },
  { timing: "Minimum Viable", days: "150", description: "By November 2026" },
  { timing: "Current Status (May 2026)", days: "Delayed", description: "Already 2-3 months behind optimal" },
  { timing: "Risk Threshold", days: "120", description: "Below this = lame duck fatigue" },
  { timing: "CM Face Delay Cost", cost: "0.5-1% per month", description: "Each month of delay costs vote share" },
];

const breakevenAnalysis = [
  { variable: "CM Candidate by July 2026", seatImpact: "+10-15 seats" },
  { variable: "BJP-SAD Alliance", seatImpact: "-10-15 seats" },
  { variable: "Amritpal Singh outfit >5%", seatImpact: "-5-8 seats (from AAP)" },
  { variable: "AAP new welfare scheme Q3 2026", seatImpact: "-5-10 seats" },
];

// MP10-004: Swing Voter Movement Model
const voteTransferMatrix = [
  { from: "Congress 2017 voters", toAAP: "~40%", toSAD: "~5%", retained: "~55%", note: "Major shift in 2017→2022" },
  { from: "SAD+BJP 2017 voters", toAAP: "~25%", toCongress: "~5%", retained: "~55%", note: "BJP retained more than SAD" },
  { from: "BSP 2017 voters", toAAP: "~20%", toCongress: "~15%", toSAD: "~15%", retained: "~35%", note: "Dalit vote split 3 ways" },
  { from: "AAP 2017 voters", toCongress: "~8%", toSAD: "~5%", retained: "~87%", note: "AAP retained most 2017 voters" },
];

const swingDecayFormula = {
  formula: "Swing(t) = Swing(0) × e^(−λt) + Campaign_Shock(t)",
  lambda: "0.03-0.07 decay constant",
  interpretation: "Initial structural swing decays exponentially; campaign shocks add temporary swing",
};

const notAProtestSignal = {
  value: "1.2%",
  nationalAverage: "~0.8%",
  protestImpact: "3-5% hidden swing potential",
  threshold: ">2% NOTA = high protest signal",
  seatsExceededByNOTA: 23,
};

const swingVoterTimingBreakdown = [
  { phase: "Early (8+ weeks out)", share: "8-12%", description: "Committed ideologues, single-issue voters" },
  { phase: "Campaign (4-8 weeks)", share: "25-35%", description: "Persuadable middle, moved by candidate announcements" },
  { phase: "Late (final 2 weeks)", share: "40-50%", description: "Highest volatility, triggered by campaign events" },
  { phase: "Booth-day", share: "5-10%", description: "Cross-voting, family pressure, last-minute appeals" },
];

const aapToCongressSwing = {
  magnitude: "3-7%",
  conversionRate: "22-28%",
  regions: ["Malwa", "Doaba"],
  keySeats: "Doaba (Hoshiarpur, Kapurthala, Jalandhar)",
  note: "AAP's 2022 voters open to switching — soft AAP voters",
};

// MP10-001: Ticket Authority
const ticketAuthority = {
  decisionMaker: "AICC High Command",
  notPPCC: true,
  inCharge: "Bhupesh Baghel (AICC General Secretary)",
  directive: "Winnability is the sole criterion",
  surveyCount: 3,
  winnabilityOverrides: "Factional claims overridden by survey data",
};

// MP10-005: Candidate Viability - Renomination
const renominationData = {
  electedMPRenomination: "53%",
  lostCandidateRenomination: "19%",
  allCandidatesRenomination: "~35%",
  postgraduateBonus: "+28%",
  criminalCasesBonus: "+27%",
  crorepatiBonus: "+14%",
  fieldWorkRequirement: "6 months minimum before election",
};

// MP10-015: Risk-Adjusted Confidence Levels
const modelConfidenceLevels = [
  { percentile: "P10 (Worst case)", seats: "38-44", probability: "10% chance below" },
  { percentile: "P30 (Downside)", seats: "50-56", probability: "30% below, 70% above" },
  { percentile: "P50 (Median)", seats: "60-66", probability: "Central estimate, 50/50" },
  { percentile: "P70 (Upside)", seats: "68-73", probability: "70% below, 30% above" },
  { percentile: "P90 (Best case)", seats: "76-84", probability: "10% chance above" },
];

const marginSeatData = [
  { threshold: "<10% margin", seats: 68, description: "Competitive/swing-sensitive" },
  { threshold: "<5% margin", seats: 23, description: "Extremely sensitive to small voter shifts" },
  { threshold: "<2% margin", seats: 9, description: "Statistically negligible; could flip with 1% net swing" },
];

// === DATA FROM A-09: GROUND REALITY RESEARCH FILES ===
const rallyData = {
  congress: { name: "Congress MGNREGA Bachao Sangram", rallies: "60+", theme: "Anti-Centre, farmer debt relief, drug crisis" },
  aap: { name: "AAP Yudh Nasheyan Virudh", rallies: "50+", theme: "Drug crisis, employment, welfare schemes" },
  bjp: { name: "BJP Badlav Rally", rallies: "40+", theme: "Nasha Mukt Punjab, central schemes" },
  sad: { name: "SAD Punjab Bachao", rallies: "30+", theme: "MSP guarantee, SYL, farmer rights" },
};

const roadshowData = {
  congress: { yatras: "117-segment Padyatra", segments: "117", coverage: "All 117 assembly constituencies" },
  aap: { yatras: "Shukrana Yatra", coverage: "Victory celebrations + constituency tours" },
};

const boothActivityData = {
  congress: { boothSevaks: 25000, boothAssistants: 125000, totalBoothWorkers: 150000, workersPerBooth: 6 },
  bjp: { mandals: 615, mandalWorkers: "1.5 lakh+" },
  aap: { concern: "Pathak/Chadha defections affecting booth structure", boothWorkers: "~20,000 estimated" },
};

const membershipData = {
  bjp: { previous: 1800000, current: 644000, decline: "-64%", reason: "Amarinder Jakhar Bittu joins BJP" },
  congress: { drive: "Massive organizational build 2024-2026", focus: "Booth-level membership" },
};

const defectionData = {
  majorDefections: [
    { date: "April 24, 2026", from: "AAP", to: "BJP", details: "7 Rajya Sabha MPs merged to BJP" },
    { date: "2024-2026", from: "Congress", to: "BJP", details: "Captain Amarinder Singh, Jakhar brothers, Bittu" },
  ],
};

const farmerGatheringData = {
  skm: { actions: "100+ tractor marches, 250+ path yatra", protests: "32 locations" },
  dallewal: { hungerStrike: "131 days", demand: "MSP guarantee legal guarantee" },
};

const gatheringData = {
  mahilaSammelan: { aapScheme: "Rs 1,000/month (SC: Rs 1,500)", coverage: "97% of eligible women", totalCost: "Rs 9,300 crore" },
  youthMeets: { unemployment: "22.5% rural youth", drugUsers: "6.6 million", youthAffected: "75%+" },
};

const protestData = {
  tradeUnions: { july2025Strike: { workers: "25 crore", demand: "Minimum wage Rs 518/day" } },
  aapMlaProtests: { incidents: "Multiple MLA public confrontations documented" },
};

const religiousCasteData = {
  sgpcCrisis: { issue: "SGPC-Akal Takht authority dispute" },
  deraBeas: { politicalEntry: "Active in political engagement" },
  casteGatherings: { scPopulation: "32%", channiWarring: "Congress caste rift" },
};

const localBodyPollData = {
  aap: { municipalWards: "55%", control: "Most municipal corporations" },
  congress: { notableWin: "Amritsar MC", gains: "Barnala, Tarn Taran shift" },
};

// ==========================================
// CYCLE 2: ELECTORAL DATA (from research-P3/electoral-data)
// ==========================================

const eciTimeline = {
  currentPhase: "Pre-election period",
  summaryIssuance: "October 2026 (Expected)",
  electionDate: "February 2027 (Expected)",
  daysRemaining: "~270 days",
};

const voterRegistrationData = {
  totalVoters: "2.14 crore",
  firstTimeVoters: "5.38 lakh",
  firstTimePercentage: "2.5%",
  registrationTrend: "Steady",
};

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-lg font-bold text-white">
              9
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Intelligence & Analytics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Data pipelines • Predictive analytics • Real-time monitoring
          </p>
        </div>
        <Badge variant="success">● All Systems Live</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Alerts"
          value="4"
          subtitle="Requiring action"
          color="bg-orange-500"
        />
      </div>

      {/* CYCLE 2: ECI Timeline & Voter Registration */}
      <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-6 dark:border-violet-800 dark:bg-violet-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-lg font-bold text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-violet-700 dark:text-violet-400">ECI Timeline & Voter Registration (Cycle 2)</p>
            <p className="text-sm text-violet-600 dark:text-violet-300">Election Commission of India Schedule | Voter Registration Data</p>
          </div>
        </div>

        {/* ECI Timeline */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Election Commission Timeline</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-xs text-slate-500">Current Phase</p>
              <p className="text-lg font-bold text-slate-700 dark:text-slate-300">{eciTimeline.currentPhase}</p>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <p className="text-xs text-amber-600 dark:text-amber-400">Summary Issuance</p>
              <p className="text-lg font-bold text-amber-700 dark:text-amber-300">{eciTimeline.summaryIssuance}</p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <p className="text-xs text-green-600 dark:text-green-400">Election Date</p>
              <p className="text-lg font-bold text-green-700 dark:text-green-300">{eciTimeline.electionDate}</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="text-xs text-blue-600 dark:text-blue-400">Days Remaining</p>
              <p className="text-lg font-bold text-blue-700 dark:text-blue-300">{eciTimeline.daysRemaining}</p>
            </div>
          </div>
        </div>

        {/* Voter Registration Data */}
        <div>
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Voter Registration (LS 2024)</h4>
          <div className="grid gap-6 md:grid-cols-3">
            <MetricCard
              title="Total Voters"
              value={voterRegistrationData.totalVoters}
              subtitle="Registered electorate"
              color="bg-violet-500"
            />
            <MetricCard
              title="First-Time Voters"
              value={voterRegistrationData.firstTimeVoters}
              subtitle="New registrations"
              color="bg-cyan-500"
            />
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-xs text-slate-500">First-Time Voter %</p>
              <p className="text-2xl font-bold text-violet-600">{voterRegistrationData.firstTimePercentage}</p>
              <p className="text-xs text-slate-500">of total electorate</p>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <strong>Note:</strong> Voter registration trend is steady. First-time voters (5.38 lakh) represent 2.5% of total electorate — key target for SVEEP outreach and voter education programs.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Infrastructure Section (from MP8-001, MP8-005, MP8-006, MP8-010) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Technology Infrastructure for Congress Punjab 2027
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          IT Stack • Communication • Cyber Security • Emerging Tech (MP8-001, 005, 006, 010)
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total IT Budget"
            value="₹15.8-40.2 Cr"
            subtitle="Full campaign infrastructure"
            color="bg-blue-500"
          />
          <MetricCard
            title="Hardware Cost"
            value="₹8.2-18.5 Cr"
            subtitle="State HQ + 23 districts + 117 ACs"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Rural Mobile Penetration"
            value="58.8%"
            subtitle="vs Urban 125.3% (TRAI/Ookla 2025)"
            change={-53}
            trend="down"
            color="bg-orange-500"
          />
          <MetricCard
            title="4G Coverage"
            value="88.9%"
            subtitle="Indian villages (Ookla 2025)"
            color="bg-green-500"
          />
          <MetricCard
            title="5G Coverage"
            value="77.8%"
            subtitle="Villages but uneven in rural Punjab"
            color="bg-teal-500"
          />
          <MetricCard
            title="Power Failure Risk"
            value="30%"
            subtitle="Constituency offices during campaign"
            color="bg-red-500"
          />
          <MetricCard
            title="WhatsApp Groups"
            value="13,000+"
            subtitle="9.1 lakh+ members (2022 data)"
            color="bg-green-500"
          />
          <MetricCard
            title="Ground Workers"
            value="50,000"
            subtitle="Organized booth-level network"
            color="bg-purple-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Hardware Cost Per District</h4>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-2xl font-bold text-cyan-600">₹{techInfrastructureData.hardwareCostPerDistrictLow}-{techInfrastructureData.hardwareCostPerDistrictHigh} L</span>
              <span className="text-sm text-slate-500">per district (23 districts)</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Includes server, workstations, UPS, generator, router, printer</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Hardware Cost Per Constituency</h4>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-2xl font-bold text-cyan-600">₹{techInfrastructureData.hardwareCostPerConstituencyLow}-{techInfrastructureData.hardwareCostPerConstituencyHigh} L</span>
              <span className="text-sm text-slate-500">per constituency (117 ACs)</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Includes laptop, smartphones, Wi-Fi modem, UPS, printer, power banks</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-700 dark:text-red-400">Cyber Attack Surge (2024)</p>
            <p className="mt-1 text-2xl font-bold text-red-600">{cyberSecurityData.cyberAttackSurge2024}%</p>
            <p className="mt-1 text-xs text-red-600/70">16 hacktivist groups targeting India elections</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <p className="text-sm font-medium text-orange-700 dark:text-orange-400">CERT-In Incidents (2025)</p>
            <p className="mt-1 text-2xl font-bold text-orange-600">{cyberSecurityData.certInIncidents2025} L</p>
            <p className="mt-1 text-xs text-orange-600/70">Cyber incidents handled by CERT-In</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Deepfake Exposure</p>
            <p className="mt-1 text-2xl font-bold text-yellow-600">{cyberSecurityData.deepfakeExposureRate}%</p>
            <p className="mt-1 text-xs text-yellow-600/70">Indian voters exposed to political deepfakes</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Mobile Teledensity</p>
            <p className="mt-1 text-2xl font-bold text-blue-600">{communicationData.mobileTeledensity}</p>
            <p className="mt-1 text-xs text-blue-600/70">Per 100 persons (Niti Aayog)</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm font-medium text-green-700 dark:text-green-400">Internet Subscribers</p>
            <p className="mt-1 text-2xl font-bold text-green-600">{communicationData.internetSubscribersPer100}</p>
            <p className="mt-1 text-xs text-green-600/70">Per 100 persons (Niti Aayog)</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Voters Under 35</p>
            <p className="mt-1 text-2xl font-bold text-purple-600">{communicationData.votersUnder35Percent}%</p>
            <p className="mt-1 text-xs text-purple-600/70">Punjab's digital-native voter base</p>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <p className="text-sm font-medium text-teal-700 dark:text-teal-400">War Room Setup</p>
            <p className="mt-1 text-2xl font-bold text-teal-600">₹15-30 L</p>
            <p className="mt-1 text-xs text-teal-600/70">State HQ infrastructure cost</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">Hologram Campaign Cost</p>
            <p className="mt-1 text-2xl font-bold text-cyan-600">{emergingTechData.hologramCampaignCost}</p>
            <p className="mt-1 text-xs text-cyan-600/70">Per event reaching ~4 lakh people</p>
          </div>
          <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400">AI Investment (2024)</p>
            <p className="mt-1 text-2xl font-bold text-indigo-600">₹{emergingTechData.totalAIInvestment2024}</p>
            <p className="mt-1 text-xs text-indigo-600/70">All parties combined (Storyboard18)</p>
          </div>
          <div className="rounded-lg bg-violet-50 p-4 dark:bg-violet-900/20">
            <p className="text-sm font-medium text-violet-700 dark:text-violet-400">Punjab Youth Social Media</p>
            <p className="mt-1 text-2xl font-bold text-violet-600">{emergingTechData.punjabYouthSocialMediaHours} hrs/day</p>
            <p className="mt-1 text-xs text-violet-600/70">Average for 16-35 age group</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">IT Personnel Requirements</h4>
          <div className="mt-3 grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                {techInfrastructureData.itPersonnelState}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">State War Room</p>
                <p className="text-xs text-slate-500">Network engineers, data analysts, security</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-sm font-bold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
                {techInfrastructureData.itPersonnelDistrict}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Per District</p>
                <p className="text-xs text-slate-500">IT-trained party coordinators</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
                {techInfrastructureData.itPersonnelConstituency}
              </div>
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Per Constituency</p>
                <p className="text-xs text-slate-500">IT volunteers + BLW support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Platform Dominance (Punjab Youth)</h4>
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">WhatsApp</span>
              <div className="flex items-center gap-2">
                <ProgressBar label="" value={emergingTechData.whatsappDominancePunjabYouth} color="bg-green-500" showPercentage={false} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{emergingTechData.whatsappDominancePunjabYouth}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Instagram</span>
              <div className="flex items-center gap-2">
                <ProgressBar label="" value={emergingTechData.instagramDominancePunjabYouth} color="bg-pink-500" showPercentage={false} />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{emergingTechData.instagramDominancePunjabYouth}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Campaign Tools Section (from MP8-003) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Digital Campaign Tools & Platforms
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          CRM • WhatsApp API • Social Media Management • AI Automation (MP8-003, MP8-004)
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="War Room Team"
            value="35"
            subtitle="Digital soldiers (Mohali 2022)"
            color="bg-green-500"
          />
          <MetricCard
            title="WhatsApp Groups"
            value="13,000+"
            subtitle="9.1 lakh+ members (2022 data)"
            color="bg-green-500"
          />
          <MetricCard
            title="FB Weekly Reach"
            value="1.9 Cr"
            subtitle="Punjab Congress page (2022)"
            color="bg-blue-500"
          />
          <MetricCard
            title="AI Spend 2024"
            value="$50M"
            subtitle="All parties combined (India)"
            color="bg-purple-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Congress Digital War Room (2022)</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600">Location:</span><span className="font-medium">Sector 70, Mohali</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Team Size:</span><span className="font-medium">35 digital soldiers</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Leadership:</span><span className="font-medium">Gaurav Pandhi, Samraat Dhingra</span></div>
              <div className="flex justify-between"><span className="text-slate-600">Supervision:</span><span className="font-medium">Nirvan Singh (Capt. Amarinder kin)</span></div>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Voter CRM Platforms</h4>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-slate-600">CampaignMitra:</span><span className="font-medium">All-India political CRM</span></div>
              <div className="flex justify-between"><span className="text-slate-600">ElectionAI Portal:</span><span className="font-medium">Punjab-specific (₹5Cr+)</span></div>
              <div className="flex justify-between"><span className="text-slate-600">WhatsApp API:</span><span className="font-medium">Bulk messaging automation</span></div>
              <div className="flex justify-between"><span className="text-slate-600">IVR System:</span><span className="font-medium">Voice broadcast for surveys</span></div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-100 p-3 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-300"><strong>Key Insight:</strong> AI-generated content spending reached $50M across all Indian parties in 2024. WhatsApp dominates Punjab youth digital consumption at 26.2% of social media time.</p>
        </div>
      </div>

      {/* MP8-002: Voter Data Management */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Data Management
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Voter File • Enrichment • Micro-Targeting • DPDP Compliance (MP8-002)
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Eligible Voters"
            value="2.25 Cr"
            subtitle="Across 117 constituencies"
            color="bg-blue-500"
          />
          <MetricCard
            title="Polling Stations"
            value="22K-25K"
            subtitle="650-1,000 voters per booth"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Database Cost"
            value="INR 67-218L"
            subtitle="Full voter file infrastructure"
            color="bg-purple-500"
          />
          <MetricCard
            title="DPDP Act Gap"
            value="Critical"
            subtitle="No specific law for political parties"
            color="bg-red-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Voter File Enrichment Tiers</h4>
            <div className="mt-3 space-y-2">
              {voterEnrichmentTiers.map((tier) => (
                <div key={tier.tier} className="flex items-start gap-2 text-sm">
                  <span className="font-medium text-green-700 dark:text-green-400 min-w-[120px]">{tier.tier}:</span>
                  <span className="text-slate-600 dark:text-slate-300">{tier.fields}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Micro-Targeting Segmentation</h4>
            <div className="mt-3 space-y-2">
              {voterSegmentation.map((seg) => (
                <div key={seg.segment} className="flex items-start gap-2 text-sm">
                  <span className="font-medium text-purple-700 dark:text-purple-400 min-w-[140px]">{seg.segment}:</span>
                  <span className="text-slate-600 dark:text-slate-300">{seg.strategy} ({seg.channel})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Key Issues for Micro-Targeting</h4>
          <div className="mt-3 grid gap-3 md:grid-cols-3 lg:grid-cols-5">
            {microTargetingIssues.map((item) => (
              <div key={item.issue} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.issue}</p>
                <p className="mt-1 text-xs text-slate-500">{item.regions}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Critical Alert:</strong> ECI's own deduplication software was described as "defective" to Supreme Court (Dec 2025). Congress must build voter database from scratch — import ECI roll immediately and begin field enrichment.
          </p>
        </div>
      </div>

      {/* MP8-007: Data Analytics & BI */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Data Analytics & Business Intelligence
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          8 Analytics Channels • Predictive Modeling • A/B Testing • ROI Measurement (MP8-007)
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Analytics Channels"
            value="8"
            subtitle="Integrated data sources"
            color="bg-indigo-500"
          />
          <MetricCard
            title="A/B Tests (US Reference)"
            value="500+"
            subtitle="Obama 2012 campaign"
            color="bg-green-500"
          />
          <MetricCard
            title="Donation Conversion Lift"
            value="+29%"
            subtitle="From A/B testing (Obama 2012)"
            color="bg-cyan-500"
          />
          <MetricCard
            title="Data Team Cost"
            value="INR 23-60L"
            subtitle="6-month pre-election period"
            color="bg-orange-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
            <h4 className="font-semibold text-indigo-700 dark:text-indigo-400">Analytics Channels</h4>
            <div className="mt-3 space-y-2">
              {analyticsChannels.map((ch) => (
                <div key={ch.channel} className="flex items-start gap-2 text-sm">
                  <span className="font-medium text-indigo-700 dark:text-indigo-400 min-w-[160px]">{ch.channel}:</span>
                  <span className="text-slate-600 dark:text-slate-300">{ch.metric}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <h4 className="font-semibold text-teal-700 dark:text-teal-400">A/B Testing Proven Results</h4>
            <div className="mt-3 space-y-2">
              {abTestExamples.map((ex) => (
                <div key={ex.campaign} className="flex items-start gap-2 text-sm">
                  <span className="font-medium text-teal-700 dark:text-teal-400 min-w-[100px]">{ex.campaign}:</span>
                  <span className="text-slate-600 dark:text-slate-300">{ex.test} → {ex.result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Analytics Team Structure</h4>
          <div className="mt-3 grid gap-4 md:grid-cols-3">
            {analyticsTeamStructure.map((t) => (
              <div key={t.role} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.role}</p>
                <p className="mt-1 text-xs text-slate-500">{t.count} persons</p>
                <p className="text-sm font-bold text-indigo-600">{t.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MP8-008: Content Creation Pipeline */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Content Creation & Distribution Pipeline
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          5-Phase Pipeline • Content Types • ECI Compliance • Brand Management (MP8-008)
        </p>

        <div className="mt-6">
          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">Content Pipeline Phases</h4>
          <div className="mt-3 grid gap-3 md:grid-cols-5">
            {contentPipeline.map((phase) => (
              <div key={phase.phase} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">{phase.phase}</p>
                <p className="mt-1 text-xs text-slate-500">{phase.deliverable}</p>
                <p className="mt-1 text-xs text-indigo-600">Turnaround: {phase.turnaround}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">Content Types & Costs</h4>
            <div className="mt-3 space-y-2">
              {contentTypes.map((ct) => (
                <div key={ct.type} className="flex items-start gap-2 text-sm">
                  <span className="font-medium text-orange-700 dark:text-orange-400 min-w-[160px]">{ct.type}:</span>
                  <span className="text-slate-600 dark:text-slate-300">{ct.cost}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
            <h4 className="font-semibold text-rose-700 dark:text-rose-400">ECI Compliance Requirements</h4>
            <div className="mt-3 space-y-2">
              {eciCompliance.map((ec) => (
                <div key={ec.rule} className="flex items-start gap-2 text-sm">
                  <span className="font-medium text-rose-700 dark:text-rose-400 min-w-[160px]">{ec.rule}:</span>
                  <span className="text-slate-600 dark:text-slate-300">{ec.requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MP8-009: Mobile App & Party Workers */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Mobile App for Party Workers
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Worker App • Offline-First • Gamification • Benchmark Apps (MP8-009)
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="BJP Saral App"
            value="2.9M+"
            subtitle="Downloads (competitive benchmark)"
            color="bg-red-500"
          />
          <MetricCard
            title="Ranneeti Platform"
            value="1,290+"
            subtitle="Campaigns across 13 states"
            color="bg-orange-500"
          />
          <MetricCard
            title="Custom App Dev"
            value="INR 15-40L"
            subtitle="+ INR 2-5L/month maintenance"
            color="bg-purple-500"
          />
          <MetricCard
            title="SaaS Alternative"
            value="INR 15K-1.5L"
            subtitle="Per month (Ranneeti/CampaignMitra)"
            color="bg-green-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Worker App Core Features</h4>
            <div className="mt-3 space-y-3">
              {workerAppFeatures.map((f) => (
                <div key={f.category}>
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-400">{f.category}</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{f.features}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
              <h4 className="font-semibold text-teal-700 dark:text-teal-400">Technical Architecture</h4>
              <div className="mt-3 space-y-2">
                {appTechStack.map((t) => (
                  <div key={t.layer} className="flex items-start gap-2 text-sm">
                    <span className="font-medium text-teal-700 dark:text-teal-400 min-w-[100px]">{t.layer}:</span>
                    <span className="text-slate-600 dark:text-slate-300">{t.choice} — {t.rationale}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-semibold text-amber-700 dark:text-amber-400">Gamification Features</h4>
              <div className="mt-3 space-y-2">
                {gamificationFeatures.map((gf) => (
                  <div key={gf.feature} className="flex items-start gap-2 text-sm">
                    <span className="font-medium text-amber-700 dark:text-amber-400">{gf.feature}:</span>
                    <span className="text-slate-600 dark:text-slate-300">{gf.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Critical Gap:</strong> Congress has NO dedicated worker mobile app for Punjab 2027. BJP's Saral app with 2.9M+ downloads represents a significant competitive technology advantage. Build or procure app by July 2026.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Data Pipeline Status
          </h3>
          <div className="mt-6 space-y-4">
            {dataSources.map((source) => (
              <div key={source.name} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{source.name}</span>
                    <Badge variant="success">{source.latency}</Badge>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <ProgressBar
                      label=""
                      value={source.accuracy}
                      color="bg-violet-500"
                      showPercentage={false}
                    />
                    <span className="text-xs text-slate-500">{source.accuracy}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Real-time Alerts
          </h3>
          <div className="mt-6 space-y-3">
            {alerts.map((alert, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-lg p-3 ${
                  alert.severity === "critical" ? "bg-red-50 dark:bg-red-900/20" :
                  alert.severity === "high" ? "bg-orange-50 dark:bg-orange-900/20" :
                  alert.severity === "medium" ? "bg-yellow-50 dark:bg-yellow-900/20" :
                  "bg-slate-50 dark:bg-slate-800"
                }`}
              >
                <div className={`h-2 w-2 rounded-full ${
                  alert.severity === "critical" ? "bg-red-500" :
                  alert.severity === "high" ? "bg-orange-500" :
                  alert.severity === "medium" ? "bg-yellow-500" :
                  "bg-slate-400"
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{alert.issue}</p>
                  <p className="text-xs text-slate-500">{alert.location}</p>
                </div>
                <span className="text-xs text-slate-500">{alert.time}</span>
              </div>
            ))}
          </div>
      </div>
      </div>

      {/* MP7-001, 002, 003: Real-Time Monitoring Infrastructure */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          MP7: Real-Time Monitoring Infrastructure
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Keyword taxonomy • Platform protocols • Alert configuration (MP7-001, 002, 003)
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
            <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400">Keyword Taxonomy (3,450+ keywords)</p>
            <div className="mt-3 space-y-2">
              {keywordTaxonomy.breakdown.slice(0, 5).map((cat) => (
                <div key={cat.category} className="flex items-center justify-between">
                  <span className="text-xs text-indigo-600 dark:text-indigo-300">{cat.category}</span>
                  <span className="text-xs font-medium text-indigo-700 dark:text-indigo-400">{cat.keywords}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400">+ 5 more categories covering Congress brand, digital behavior</p>
          </div>

          <div className="rounded-lg bg-violet-50 p-4 dark:bg-violet-900/20">
            <p className="text-sm font-semibold text-violet-700 dark:text-violet-400">Four-Level Alert System</p>
            <div className="mt-3 space-y-2">
              {alertLevels.map((level) => (
                <div key={level.level} className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    level.level === "GREEN" ? "bg-green-200 text-green-800" :
                    level.level === "YELLOW" ? "bg-yellow-200 text-yellow-800" :
                    level.level === "ORANGE" ? "bg-orange-200 text-orange-800" :
                    "bg-red-200 text-red-800"
                  }`}>{level.level}</span>
                  <span className="text-xs text-violet-600 dark:text-violet-300">{level.trigger.slice(0, 50)}...</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-cyan-50 p-4 dark:bg-cyan-900/20">
            <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">Spike Detection</p>
            <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-300">Volume: {alertConfiguration.spikeDetection.volumeThreshold}</p>
            <p className="text-xs text-cyan-500">Velocity: {alertConfiguration.spikeDetection.velocityThreshold}</p>
          </div>
          <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
            <p className="text-xs font-semibold text-pink-700 dark:text-pink-400">Negative Sentiment</p>
            <p className="mt-1 text-sm text-pink-600 dark:text-pink-300">Ratio: {alertConfiguration.negativeSentiment.ratioThreshold}</p>
            <p className="text-xs text-pink-500">Sharp swing: {alertConfiguration.negativeSentiment.sharpSwing}</p>
          </div>
          <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
            <p className="text-xs font-semibold text-rose-700 dark:text-rose-400">Crisis Keywords</p>
            <p className="mt-1 text-sm text-rose-600 dark:text-rose-300">{alertConfiguration.crisisKeywords.slice(0, 4).join(", ")}</p>
            <p className="text-xs text-rose-500">+ {alertConfiguration.crisisKeywords.length - 4} more</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Governance Audit 2022-2026 — Promise vs Delivery
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Critical governance failures affecting AAP 2027 prospects</p>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-300">Drug-Free Punjab — 4 Deadlines, 0 Delivery</p>
              <p className="text-xs text-slate-500">8,344 FIRs, 14,734 arrests, 586 kg heroin, 247 kg opium seized, 104 properties demolished</p>
            </div>
            <Badge variant="danger">SEVERE</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-300">Women&apos;s Stipend Delayed</p>
              <p className="text-xs text-slate-500">Rs 1,000/month to 1.02 crore women (Rs 1,000 Cr/month) — unfulfilled until March 2026</p>
            </div>
            <Badge variant="danger">SEVERE</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-300">Jobs Promise Falls Short</p>
              <p className="text-xs text-slate-500">1 lakh promised, 48,000-70,000 delivered; Youth unemployment 14.9% (4th highest in India)</p>
            </div>
            <Badge variant="warning">MODERATE</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-300">Healthcare Staffing Crisis</p>
              <p className="text-xs text-slate-500">47% specialist vacancy (1,000 of 2,098 posts vacant); 320 doctors in limbo; Rs 780 crore flood damage (MP7-004)</p>
            </div>
            <Badge variant="warning">PARTIAL</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-300">Mukh Mantri Sehat Yojana Failure</p>
              <p className="text-xs text-slate-500">Rs 778 crore allocated but zero patients treated; Rs 600 crore dues to private hospitals; Rs 500+ crore Ayushman Bharat dues unpaid</p>
            </div>
            <Badge variant="danger">FAILED</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-300">Education Vacancies</p>
              <p className="text-xs text-slate-500">984 of 1,927 principal posts vacant (51%); SCERT 72% staff shortage, DIETs 88% shortage; 60% Master cadre vacancies (MP7-004)</p>
            </div>
            <Badge variant="warning">PARTIAL</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-300">Corruption Cases</p>
              <p className="text-xs text-slate-500">Vigilance Bureau chief suspended in driving license scam; multiple officials caught during AAP term</p>
            </div>
            <Badge variant="info">ONGOING</Badge>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
            <div>
              <p className="font-medium text-slate-700 dark:text-slate-300">Paddy Procurement Crisis 2024</p>
              <p className="text-xs text-slate-500">MSP protests, storage shortages during kharif procurement; farmer agitations</p>
            </div>
            <Badge variant="info">MODERATE</Badge>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">Source: AAP Punjab Governance Audit 2022-2026 research brief. Compiled May 2026.</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Analytics Models
        </h3>
        <DataTable
          headers={["Model", "Type", "Accuracy", "Last Updated", "Status"]}
          rows={[
            ["Swing Voter Prediction", "ML", "87.5%", "2 hours ago", "Active"],
            ["Turnout Estimation", "Statistical", "92.3%", "4 hours ago", "Active"],
            ["Caste Vote Transfer", "Heuristic", "78.2%", "1 day ago", "Active"],
            ["Sentiment Forecasting", "NLP", "84.1%", "30 min ago", "Active"],
            ["Booth-level Prediction", "ML", "89.7%", "6 hours ago", "Active"],
            ["Social Virality Score", "Network", "76.8%", "15 min ago", "Active"],
          ]}
        />
      </div>

      {/* MP10-004: Swing Voter Movement Model */}
      <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-4 dark:border-teal-800 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-400">MP10-004: Swing Voter Movement Model</p>
            <p className="text-sm text-teal-600 dark:text-teal-300">Vote transfer matrix, swing decay formula, AAP→Congress reversal tracking</p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-3">Vote Transfer Matrix (2017→2022)</p>
            <DataTable
              headers={["From", "To AAP", "To Congress", "Retained", "Note"]}
              rows={voteTransferMatrix.map(v => [v.from || "N/A", v.toAAP || "N/A", v.toCongress || v.toSAD || "-", v.retained || "N/A", v.note || "N/A"])}
            />
          </div>
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-2">Swing Decay Formula</p>
              <code className="text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded block mb-2">{swingDecayFormula.formula}</code>
              <p className="text-xs text-slate-600 dark:text-slate-400">λ = {swingDecayFormula.lambda}. {swingDecayFormula.interpretation}</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-2">NOTA as Protest Signal</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-xl font-bold text-teal-600">{notAProtestSignal.value}</p>
                  <p className="text-xs text-slate-500">Punjab 2022 NOTA</p>
                </div>
                <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-xl font-bold text-orange-600">{notAProtestSignal.threshold}</p>
                  <p className="text-xs text-slate-500">High protest signal</p>
                </div>
                <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-xl font-bold text-red-600">{notAProtestSignal.protestImpact}</p>
                  <p className="text-xs text-slate-500">Hidden swing potential</p>
                </div>
                <div className="text-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-xl font-bold text-purple-600">{notAProtestSignal.seatsExceededByNOTA}</p>
                  <p className="text-xs text-slate-500">Seats exceeded by NOTA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-3">Swing Voter Timing Breakdown</p>
            <DataTable
              headers={["Phase", "Share of Swing", "Description"]}
              rows={swingVoterTimingBreakdown.map(s => [s.phase, s.share, s.description])}
            />
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-3">AAP→Congress Swing Reversal (2027)</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm text-slate-600 dark:text-slate-400">Magnitude</span>
                <span className="font-bold text-teal-600">{aapToCongressSwing.magnitude}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm text-slate-600 dark:text-slate-400">Conversion Rate</span>
                <span className="font-bold text-blue-600">{aapToCongressSwing.conversionRate}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm text-slate-600 dark:text-slate-400">Key Regions</span>
                <span className="font-bold text-purple-600">{aapToCongressSwing.regions.join(", ")}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm text-slate-600 dark:text-slate-400">Key Seats</span>
                <span className="font-bold text-orange-600">{aapToCongressSwing.keySeats}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">{aapToCongressSwing.note}</p>
          </div>
        </div>
      </div>

      {/* MP10-001/005: Ticket Authority & Winnability */}
      <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-violet-700 dark:text-violet-400">MP10-001/005: Ticket Authority & Winnability</p>
            <p className="text-sm text-violet-600 dark:text-violet-300">AICC High Command authority, survey-based candidate selection, renomination data</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
            <p className="text-xs text-slate-500">Decision Maker</p>
            <p className="text-sm font-bold text-violet-600">{ticketAuthority.decisionMaker}</p>
            <p className="text-xs text-slate-400">NOT PPCC</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
            <p className="text-xs text-slate-500">Punjab In-Charge</p>
            <p className="text-sm font-bold text-violet-600">{ticketAuthority.inCharge}</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
            <p className="text-xs text-slate-500">Ticket Criterion</p>
            <p className="text-sm font-bold text-red-600">{ticketAuthority.directive}</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800 text-center">
            <p className="text-xs text-slate-500">Surveys Commissioned</p>
            <p className="text-sm font-bold text-blue-600">{ticketAuthority.surveyCount} surveys</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-500 mb-2">Renomination Rate (Elected MPs 2014)</p>
            <p className="text-2xl font-bold text-green-600">{renominationData.electedMPRenomination}</p>
            <p className="text-xs text-slate-500">vs 19% for lost candidates</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-500 mb-2">Viability Multipliers</p>
            <div className="space-y-1 text-xs">
              <p>PG: <span className="text-green-600 font-bold">+{renominationData.postgraduateBonus}</span></p>
              <p>Criminal: <span className="text-amber-600 font-bold">+{renominationData.criminalCasesBonus}</span></p>
              <p>Crorepati: <span className="text-blue-600 font-bold">+{renominationData.crorepatiBonus}</span></p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-500 mb-2">Field Work Requirement</p>
            <p className="text-xl font-bold text-violet-600">{renominationData.fieldWorkRequirement}</p>
            <p className="text-xs text-slate-500">Minimum before elections</p>
          </div>
        </div>
      </div>

      {/* MP10-015: Risk-Adjusted Confidence Levels */}
      <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-amber-700 dark:text-amber-400">MP10-015: Risk-Adjusted Confidence Levels</p>
            <p className="text-sm text-amber-600 dark:text-amber-300">P10/P50/P90 projection framework, margin seat analysis</p>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3">Seat Count Confidence Intervals</p>
            <DataTable
              headers={["Percentile", "Seats", "Probability"]}
              rows={modelConfidenceLevels.map(m => [m.percentile, m.seats, m.probability])}
            />
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-3">Marginal Seat Alert Thresholds</p>
            <div className="space-y-3">
              {marginSeatData.map((item) => (
                <div key={item.threshold} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-900/50 dark:text-amber-400">
                    {item.seats}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.threshold}</p>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Key:</strong> Congress P50 (median) = 60-66 seats | CE (certainty equivalent) = 54-56 seats | MGS (minimum guaranteed) = 38-44 seats
          </p>
        </div>
      </div>

      <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">Water &amp; Environmental Crisis Intelligence</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">Top-10 voter issue. Verified from CGWB 2025, CM Mann statements, research. Malwa region most affected.</p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {waterCrisisData.map((item) => (
            <div key={item.metric} className={`rounded-lg p-3 ${
              item.severity === "critical" ? "bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800" :
              item.severity === "high" ? "bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800" :
              "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800"
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{item.metric}</span>
                <Badge variant={item.severity === "critical" ? "danger" : item.severity === "high" ? "warning" : "info"}>
                  {item.severity}
                </Badge>
              </div>
              <p className={`mt-1 text-lg font-bold ${
                item.severity === "critical" ? "text-red-600 dark:text-red-400" :
                item.severity === "high" ? "text-orange-600 dark:text-orange-400" :
                "text-yellow-700 dark:text-yellow-400"
              }`}>{item.value}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Fiscal Intelligence
          </h3>
          <div className="mt-4 space-y-3">
            {fiscalData.map((f) => (
              <div key={f.metric} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{f.metric}</span>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${f.severity === "critical" ? "text-red-500" : f.severity === "high" ? "text-orange-500" : "text-yellow-500"}`}>
                    {f.value}
                  </span>
                  <Badge variant={f.severity === "critical" ? "danger" : f.severity === "high" ? "warning" : "info"}>
                    {f.severity}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Punjab debt: AAP added Rs 1.33 lakh crore in 4 years. BJP dominant in electoral finance.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Campaign Finance 2027
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Projected spending envelopes vs Congress resource gap</p>
          <div className="mt-4 space-y-3">
            {campaignFinance.map((f) => (
              <div key={f.party} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{f.party}</span>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${f.gap === "Adverse case" ? "text-red-500" : f.gap === "vs Congress" ? "text-orange-500" : "text-green-500"}`}>
                    {f.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2">Budget Allocation (Rs 350 Cr base case):</p>
            <div className="space-y-2">
              {budgetAllocation.map((b) => (
                <div key={b.category} className="flex items-center gap-2">
                  <span className="w-32 text-xs text-slate-600 dark:text-slate-400">{b.category}</span>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-500" style={{ width: `${b.percent}%` }} />
                  </div>
                  <span className="w-20 text-xs text-slate-500 text-right">{b.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Security Alert Tiers
          </h3>
          <div className="mt-4 space-y-3">
            {alertTiers.map((tier) => (
              <div key={tier.tier} className={`flex items-center justify-between p-3 rounded-lg ${
                tier.tier === "Red" ? "bg-red-50 dark:bg-red-900/20" :
                tier.tier === "Orange" ? "bg-orange-50 dark:bg-orange-900/20" :
                "bg-yellow-50 dark:bg-yellow-900/20"
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white font-bold ${
                    tier.tier === "Red" ? "bg-red-500" : tier.tier === "Orange" ? "bg-orange-500" : "bg-yellow-500"
                  }`}>
                    {tier.tier[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">{tier.tier} Alert</p>
                    <p className="text-xs text-slate-500">{tier.seats} constituencies</p>
                  </div>
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">{tier.risk}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Lawrence Bishnoi gang active — Tarn Taran, Qadian, Moga high-risk areas. NIA charges Oct 2025.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            NRI/Diaspora Intelligence
          </h3>
          <div className="mt-4 space-y-3">
            {nriIntelligence.map((nri) => (
              <div key={nri.metric} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{nri.metric}</span>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${nri.severity === "critical" ? "text-red-500" : nri.severity === "high" ? "text-orange-500" : "text-yellow-500"}`}>
                    {nri.value}
                  </span>
                  <Badge variant={nri.severity === "critical" ? "danger" : nri.severity === "high" ? "warning" : "info"}>
                    {nri.severity}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Doaba NRI belt: 23 seats, highest per-capita remittances. India-Canada tensions: CSIS May 2026 confirmed interference operations.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Diaspora Threat Assessment
          </h3>
          <div className="mt-4 space-y-3">
            {diasporaThreats.map((d) => (
              <div key={d.threat} className={`flex items-start gap-3 p-3 rounded-lg ${
                d.severity === "critical" ? "bg-red-50 dark:bg-red-900/20" : "bg-orange-50 dark:bg-orange-900/20"
              }`}>
                <div className={`h-2 w-2 rounded-full mt-1.5 ${
                  d.severity === "critical" ? "bg-red-500" : "bg-orange-500"
                }`} />
                <div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{d.threat}</p>
                  <p className="text-xs text-slate-500">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Congress NRI gap: IOC exists (25+ countries) but zero execution. 8-month window to close BJP&apos;s NRI head start.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Agricultural Economy
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Farmer Debt (3rd Highest in India)</span>
                <p className="text-xs text-slate-500">NSSO/Lok Sabha Aug 2025</p>
              </div>
              <div className="text-right">
                <span className="font-bold text-red-500">Rs 2,03,249</span>
                <p className="text-xs text-slate-500">per agri household</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Farm Debt</span>
              <span className="font-bold text-orange-500">Rs 1+ lakh crore</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Institutional Debt</span>
              <span className="font-bold text-slate-700 dark:text-slate-300">Rs 73,673 crore</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Debt Composition</span>
              <span className="font-bold text-slate-700 dark:text-slate-300">78.7% institutional</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Farmer Suicides (Malwa)</span>
              <span className="font-bold text-red-500">97%</span>
            </div>
            <div className="mt-2 text-xs text-slate-500">
              <p className="font-medium">Malwa districts with highest suicide rates:</p>
              <p>Sangrur 22.63% | Mansa 21.30% | Bathinda 17% | Barnala 11.95%</p>
              <p className="mt-1">Lease rent: Rs 50-65k/acre vs earnings Rs 68-72k/acre (73-95% to rent)</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">MSP Procurement (2025-26 / 2026-27)</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Wheat MSP (2026-27)</span>
                <span className="font-medium">Rs 2,585/qtl <Badge variant="success">+6.59%</Badge></span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Wheat MSP (2025-26)</span>
                <span className="font-medium">Rs 2,425/qtl</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Paddy (Grade A)</span>
                <span className="font-medium">Rs 2,389/qtl</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Paddy (Common)</span>
                <span className="font-medium">Rs 2,369/qtl</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">National Wheat Procurement</span>
                <span className="font-medium">300.35 LMT</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <Badge variant="success">94%</Badge>
              <span className="text-sm text-slate-600 dark:text-slate-400">Stubble burning reduction since 2021 (55,000 → 3,330)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Data Ingestion</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>• Social: X API Standard tier</li>
            <li>• Ground: 11,700 booth agents</li>
            <li>• News: Real-time aggregation</li>
            <li>• Surveys: CSDS + local</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Processing Pipeline</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>• Real-time streaming</li>
            <li>• NLP sentiment analysis</li>
            <li>• Entity extraction</li>
            <li>• Anomaly detection</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Output Metrics</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li>• Constituency scores</li>
            <li>• Issue heat maps</li>
            <li>• Alert notifications</li>
            <li>• Predictive dashboards</li>
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Social Listening Tools — Cost & Capabilities
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Enterprise tools for real-time narrative monitoring</p>
        <DataTable
          headers={["Tool", "Monthly Cost", "Key Capabilities", "Punjabi Support"]}
          rows={socialListeningTools.map(t => [t.tool, t.cost, t.capabilities, t.punjabiSupport])}
        />
        <p className="mt-4 text-xs text-slate-500">Note: Enterprise tools cost-prohibitive for state-level campaigns (INR 15-200 lakh/year). X API requires paid access ($100-20,000+/month).</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          X/Twitter API Pricing Tiers
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">API access critical for political monitoring — free tier eliminated Feb 2023</p>
        <DataTable
          headers={["Tier", "Cost", "Posts/Month", "Capabilities"]}
          rows={xApiPricing.map(t => [t.tier, t.cost, t.posts, t.capabilities])}
        />
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Minimum Viable Tech Stack — Budget Tiers
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Phased approach for Punjab Congress 2027</p>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {techStackTiers.map((tier) => (
            <div key={tier.tier} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 dark:text-white">{tier.tier}</span>
                <Badge variant="info">{tier.budget}</Badge>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{tier.duration}</p>
              <p className="text-xs text-slate-500">{tier.components}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">Total implementation cost: INR 11-33 lakh across all phases. Recommended: Tier 1 + Tier 2 hybrid.</p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Implementation Roadmap
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">8-month intelligence buildout to Feb 2027</p>
        <div className="mt-4 space-y-4">
          {implementationRoadmap.map((phase) => (
            <div key={phase.phase} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900 dark:text-white">{phase.phase}</span>
                  <Badge variant="success">{phase.budget}</Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{phase.objectives}</p>
                <p className="text-xs text-slate-500">Deliverables: {phase.deliverables}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border-2 border-violet-200 bg-violet-50 p-4 dark:border-violet-800 dark:bg-violet-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-violet-700 dark:text-violet-400">Election Forecasting & Scenario Planning</p>
            <p className="text-sm text-violet-600 dark:text-violet-300">Multi-scenario modeling for strategic flexibility</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Election Scenarios (2027)</h4>
            <DataTable
              headers={["Scenario", "Probability", "Seats", "Coalition"]}
              rows={electionScenarios.map(s => [s.scenario, s.probability, s.seats, s.coalition])}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Seat Projection Confidence</h4>
            <DataTable
              headers={["Confidence", "Range", "Interpretation"]}
              rows={seatProjections.map(s => [s.confidence, s.range, s.interpretation])}
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Vote Share Thresholds</h4>
            <DataTable
              headers={["Vote Share", "Projected Seats", "Scenario"]}
              rows={voteShareThresholds.map(v => [v.threshold, v.projectedSeats, v.scenario])}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Regional Swing Targets</h4>
            <DataTable
              headers={["Region", "Current", "Target", "Swing"]}
              rows={regionalSwingTargets.map(r => [r.region, r.current, r.target, r.swing])}
            />
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Risk Taxonomy</h4>
          <DataTable
            headers={["Category", "Risk", "Probability", "Impact", "Mitigation"]}
            rows={riskTaxonomy.map(r => [r.category, r.risk, r.probability, r.impact, r.mitigation])}
          />
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Social Media Command Center Specifications
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">War room infrastructure for 24/7 digital operations</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {warRoomSpecs.map((spec) => (
            <div key={spec.spec} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">{spec.spec}</p>
              <p className="font-semibold text-slate-900 dark:text-white">{spec.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Engagement Benchmarks</h4>
            <DataTable
              headers={["Platform", "Benchmark Rate", "Good", "Excellent"]}
              rows={engagementBenchmarks.map(e => [e.platform, e.rate, e.good, e.excellent])}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Paid Social Allocation</h4>
            <DataTable
              headers={["Platform", "Budget %", "Purpose"]}
              rows={paidSocialAllocation.map(p => [p.platform, p.percent, p.purpose])}
            />
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Crisis Escalation Protocols</h4>
          <DataTable
            headers={["Level", "Trigger", "Response Time", "Escalation Path"]}
            rows={crisisEscalation.map(c => [c.level, c.trigger, c.responseTime, c.escalation])}
          />
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Real-Time Alert Triggers
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Intelligence alerting thresholds based on OSINT/HUMINT framework</p>
        <DataTable
          headers={["Alert Type", "Trigger Condition", "Response Time Target"]}
          rows={alertTriggers.map(a => [a.alertType, a.trigger, a.responseTime])}
        />
      </div>

      {/* MP10 Predictive Analytics Section */}
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-emerald-700 dark:text-emerald-400">MP10 Predictive Analytics — Punjab 2027</p>
            <p className="text-sm text-emerald-600 dark:text-emerald-300">Advanced scenario modeling, CM face impact, seat projection methodology</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Seat Projection Model (MP10-001)</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Field Observers</p>
                <p className="text-xl font-bold text-emerald-600">{seatProjectionModel.observers}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Surveys Conducted</p>
                <p className="text-xl font-bold text-emerald-600">{seatProjectionModel.surveys}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Confidence Interval</p>
                <p className="text-xl font-bold text-emerald-600">{seatProjectionModel.confidenceInterval}</p>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
                <p className="text-xs text-slate-500">AICC Oversight</p>
                <p className="text-xl font-bold text-emerald-600">{seatProjectionModel.aiccOversight ? "Yes" : "No"}</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Methodology: MRP (Multiple Recursive Prediction) with observer network validation</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Vote Share Forecasts (MP10-002)</h4>
            <div className="space-y-2">
              {voteShareForecasts.map(v => (
                <div key={v.party} className="flex items-center justify-between rounded-lg bg-white p-2 dark:bg-slate-800">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{v.party}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-emerald-600">{v.low}-{v.high}%</span>
                    <ProgressBar label="" value={v.avg} color="bg-emerald-500" showPercentage={false} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Constituency Margin Thresholds (MP10-003)</h4>
            <DataTable
              headers={["Category", "Margin", "Description"]}
              rows={constituencyMargins.map(c => [c.category, c.threshold, c.description])}
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Swing Voter Analysis (MP10-004)</h4>
            <div className="space-y-2">
              {swingVoterData.map(s => (
                <div key={s.party || s.description} className="flex items-center justify-between rounded-lg bg-white p-2 dark:bg-slate-800">
                  <span className="text-sm text-slate-600 dark:text-slate-400">{s.description || s.party}</span>
                  <span className="text-sm font-bold text-emerald-600">{s.swing2017to2022 || s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Candidate Viability Scoring (MP10-005)</h4>
            <div className="grid grid-cols-2 gap-2">
              {candidateViability.map(c => (
                <div key={c.metric} className="rounded-lg bg-white p-2 dark:bg-slate-800">
                  <p className="text-xs text-slate-500">{c.metric}</p>
                  <p className="text-lg font-bold text-emerald-600">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Regional Caste Blocs (MP10-006)</h4>
            <DataTable
              headers={["Region", "Seats", "Dera Influence"]}
              rows={regionalCasteBlocs.map(r => [r.region, r.seats, r.deraInfluence])}
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Turnout Modeling (MP10-007)</h4>
            <div className="space-y-2">
              {turnoutModeling.map(t => (
                <div key={t.election} className="flex items-center justify-between rounded-lg bg-white p-2 dark:bg-slate-800">
                  <span className="text-sm text-slate-600 dark:text-slate-400">{t.election}</span>
                  <span className="text-sm font-bold text-emerald-600">{t.turnout}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">EVM Counting Methodology (MP10-008)</h4>
            <div className="space-y-2">
              {evmCounting.map(e => (
                <div key={e.metric} className="flex items-center justify-between rounded-lg bg-white p-2 dark:bg-slate-800">
                  <span className="text-sm text-slate-600 dark:text-slate-400">{e.metric}</span>
                  <span className="text-sm font-bold text-emerald-600">{e.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Enhanced Scenario Planning (MP10-009)</h4>
          <DataTable
            headers={["Scenario", "Probability", "Congress Seats", "AAP Seats", "Key Conditions"]}
            rows={mp10Scenarios.map(s => [s.scenario, s.probability, s.congressSeats, s.aapSeats, s.conditions])}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mt-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">CM Face Impact Analysis (MP10-010)</h4>
            <DataTable
              headers={["Candidate", "Base", "Strength", "Weakness"]}
              rows={cmFaceAnalysis.map(c => [c.candidate, c.base, c.strength, c.weakness])}
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">CM Announcement Timing (MP10-010)</h4>
            <DataTable
              headers={["Timing", "Days", "Description"]}
              rows={cmAnnouncementTiming.map(t => [t.timing || "N/A", t.days || t.cost || "N/A", t.description || "N/A"])}
            />
            <div className="mt-3 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
              <p className="text-xs font-medium text-amber-700 dark:text-amber-400">Breakeven Analysis</p>
              <div className="mt-2 space-y-1">
                {breakevenAnalysis.map(b => (
                  <div key={b.variable} className="flex justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">{b.variable}</span>
                    <span className="font-medium text-amber-600">{b.seatImpact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MP9 Resource Strategy Section */}

      {/* MP9 Resource Strategy Section */}
      <div className="rounded-xl border-2 border-rose-200 bg-rose-50 p-4 dark:border-rose-800 dark:bg-rose-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-rose-700 dark:text-rose-400">MP9 Resource Strategy — War Chest & Operations</p>
            <p className="text-sm text-rose-600 dark:text-rose-300">Financial, Fundraising, Budget, HR, Infrastructure, Transport, Supplies, Legal (MP9-001 to 010)</p>
          </div>
        </div>

        {/* MP9-001: Financial Requirements */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-001: Financial Requirements & ECI Limits</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="ECI Spending Limit" value="Rs 40L/seat" subtitle="Rs 46.8 Cr total (117 seats)" color="bg-rose-500" />
            <MetricCard title="2022 MLA Avg Spend" value="Rs 17.99L" subtitle="45% of limit" color="bg-cyan-500" />
            <MetricCard title="BJP Punjab Spend" value="Rs 36.69 Cr" subtitle="Avg per candidate" color="bg-orange-500" />
            <MetricCard title="War Chest Target" value="Rs 40-150 Cr" subtitle="Urban: 100-150 Cr" color="bg-purple-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <p className="text-xs text-slate-500">Punjab State Debt</p>
              <p className="text-lg font-bold text-red-500">Rs 4.17L Cr</p>
              <p className="text-xs text-slate-500">~45% of GSDP</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <p className="text-xs text-slate-500">Total Donations (2023-24)</p>
              <p className="text-lg font-bold text-emerald-600">Rs 517 Cr</p>
              <p className="text-xs text-slate-500">Political contributions</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <p className="text-xs text-slate-500">Min Donation (100% exempt)</p>
              <p className="text-lg font-bold text-blue-600">Rs 138</p>
              <p className="text-xs text-slate-500">Legal threshold</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2">3-Tier Winnability Distribution:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-20 text-xs text-slate-600 dark:text-slate-400">Safe</span>
                <ProgressBar label="" value={35} color="bg-green-500" showPercentage={false} />
                <span className="text-xs font-medium">35-40 seats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-xs text-slate-600 dark:text-slate-400">Winnable</span>
                <ProgressBar label="" value={25} color="bg-yellow-500" showPercentage={false} />
                <span className="text-xs font-medium">25-30 seats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-20 text-xs text-slate-600 dark:text-slate-400">Uphill</span>
                <ProgressBar label="" value={40} color="bg-red-500" showPercentage={false} />
                <span className="text-xs font-medium">40-45 seats</span>
              </div>
            </div>
          </div>
        </div>

        {/* MP9-002: Fundraising */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-002: Fundraising Intelligence</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Congress Donations" value="Rs 3.73 Cr" subtitle="5.8% share" color="bg-blue-500" />
            <MetricCard title="BJP Punjab Donations" value="Rs 60.30 Cr" subtitle="93% dominance" color="bg-orange-500" />
            <MetricCard title="NRI Donor Pool" value="5+ Million" subtitle="Diaspora potential" color="bg-teal-500" />
            <MetricCard title="Donation Threshold" value="Rs 138" subtitle="100% tax exemption" color="bg-green-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Donate for Desh Program</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">NRI fundraising via IOC (Indian Overseas Congress)</p>
              <p className="text-xs text-slate-500 mt-1">Amitabh Bachchan, Priyanka Gandhi involved</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Donor Sectors</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Real estate, Transport, Agriculture, Industry</p>
              <p className="text-xs text-slate-500 mt-1">Farmers & NRIs most receptive to Congress</p>
            </div>
          </div>
          <div className="mt-4">
            <Badge variant="danger">CRITICAL</Badge>
            <span className="ml-2 text-xs text-slate-600 dark:text-slate-400">AAP projected Rs 260-400 Cr vs Congress Rs 220-350 Cr — Rs 150 Cr worst-case gap</span>
          </div>
        </div>

        {/* MP9-003: Budget Controls */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-003: Budget Allocation & Controls</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Voter Communication" value="70%" subtitle="Benchmark" color="bg-green-500" />
            <MetricCard title="Publicity Share" value="56%" subtitle="Media budget" color="bg-blue-500" />
            <MetricCard title="Black Money Est." value="25%" subtitle="Total spending" color="bg-red-500" />
            <MetricCard title="Safe Seats Target" value="35-40" subtitle="3-tier system" color="bg-purple-500" />
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2">Budget Framework (Rs 350 Cr base case):</p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400">Field Operations</span>
                <Badge variant="success">32%</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400">Media & Advertising</span>
                <Badge variant="success">25%</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400">Digital & Social</span>
                <Badge variant="success">12%</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400">Events & Rallies</span>
                <Badge variant="info">10%</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400">Staff & Infrastructure</span>
                <Badge variant="info">8%</Badge>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400">Security & Compliance</span>
                <Badge variant="info">5%</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* MP9-004: HR Staffing */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-004: Human Resources & Staffing</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Core Staff/AC" value="30-45" subtitle="Per constituency" color="bg-blue-500" />
            <MetricCard title="Consultancy Market" value="$300M" subtitle="India political" color="bg-purple-500" />
            <MetricCard title="IIT Graduate Rate" value="20-30%" subtitle="Consultants" color="bg-teal-500" />
            <MetricCard title="PPCC Staff" value="50-100" subtitle="Core org" color="bg-orange-500" />
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2">Staffing Breakdown:</p>
            <DataTable
              headers={["Position", "Per AC", "Total (117 ACs)", "Priority"]}
              rows={[
                ["Booth Agents", "10-15", "1,170-1,755", "Critical"],
                ["Booth Level Workers", "5-10", "585-1,170", "Critical"],
                ["Local Leaders", "3-5", "351-585", "High"],
                ["Social Media", "2-3", "234-351", "High"],
                ["Data Entry", "1-2", "117-234", "Medium"],
                ["Drivers", "2-4", "234-468", "Medium"],
              ]}
            />
          </div>
        </div>

        {/* MP9-005: Leadership */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-005: Leadership & Command Structure</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Workers Deployed" value="3 Lakh" subtitle="Ground workforce" color="bg-rose-500" />
            <MetricCard title="DCC Presidents" value="29" subtitle="District committees" color="bg-blue-500" />
            <MetricCard title="3-Tier Command" value="PPCC" subtitle="State-District-AC" color="bg-purple-500" />
            <MetricCard title="Leader Gap" value="CM Face" subtitle="Not announced" color="bg-red-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">3-Tier Structure</p>
              <p className="text-xs text-slate-500 mt-1">Tier 1: PPCC (State HQ) - Strategic decisions</p>
              <p className="text-xs text-slate-500">Tier 2: DCC Presidents (23 Districts) - Coordination</p>
              <p className="text-xs text-slate-500">Tier 3: Block/Booth level - Ground execution</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Leadership Risk</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">CM face announcement delayed 2-3 months</p>
              <p className="text-xs text-slate-500 mt-1">Risk threshold: 120 days before election</p>
            </div>
          </div>
        </div>

        {/* MP9-006: Office Infrastructure */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-006: Office Infrastructure</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Total Cost" value="Rs 3-8 Cr" subtitle="Statewide setup" color="bg-emerald-500" />
            <MetricCard title="Setup Timeline" value="7-30 Days" subtitle="Per constituency" color="bg-blue-500" />
            <MetricCard title="Office Network" value="3-Tier" subtitle="117 ACs + 23 Districts" color="bg-purple-500" />
            <MetricCard title="Rent Range" value="Rs 15-50K" subtitle="Per AC/month" color="bg-orange-500" />
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2">Office Hierarchy:</p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">State HQ</p>
                <p className="text-lg font-bold text-emerald-600">1</p>
                <p className="text-xs text-slate-500">5,000+ sq ft, 50-100 staff</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">District Offices</p>
                <p className="text-lg font-bold text-blue-600">23</p>
                <p className="text-xs text-slate-500">1,500-2,000 sq ft, 15-25 staff</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Constituency Offices</p>
                <p className="text-lg font-bold text-purple-600">117</p>
                <p className="text-xs text-slate-500">800-1,200 sq ft, 8-15 staff</p>
              </div>
            </div>
          </div>
        </div>

        {/* MP9-007: Transportation */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-007: Transportation & Fleet</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Transport Budget" value="Rs 130-140 Cr" subtitle="Statewide" color="bg-emerald-500" />
            <MetricCard title="Budget Share" value="25-35%" subtitle="Of total budget" color="bg-orange-500" />
            <MetricCard title="Fleet Size" value="350-500" subtitle="Vehicles/district" color="bg-blue-500" />
            <MetricCard title="3-Level Fleet" value="Tiered" subtitle="Premium/Std/Economy" color="bg-purple-500" />
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2">Vehicle Requirements:</p>
            <DataTable
              headers={["Type", "Per AC", "Total (117)", "Cost/Unit"]}
              rows={[
                ["4-Wheel (SUV)", "2-4", "234-468", "Rs 15-25 L"],
                ["2-Wheel (Bike)", "15-25", "1,755-2,925", "Rs 80K-1.5 L"],
                ["Auto (3-Wheel)", "3-5", "351-585", "Rs 3-6 L"],
                ["E-Rickshaw", "5-10", "585-1,170", "Rs 1.5-3 L"],
              ]}
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Procurement Priority</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">E-Rickshaws: High visibility, low cost, booth connectivity</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Fuel & Maintenance</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Rs 50-70L per AC for 8-month campaign</p>
              <p className="text-xs text-slate-500 mt-1">Total: Rs 58.5-81.9 Cr statewide</p>
            </div>
          </div>
        </div>

        {/* MP9-008: Supplies */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-008: Campaign Supplies</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Total Budget" value="Rs 3.6-10.6 Cr" subtitle="For 117 ACs" color="bg-emerald-500" />
            <MetricCard title="Per AC Cost" value="Rs 30-90 L" subtitle="Range per constituency" color="bg-blue-500" />
            <MetricCard title="SKUs per AC" value="40-60" subtitle="Product varieties" color="bg-purple-500" />
            <MetricCard title="Categories" value="8" subtitle="Core product types" color="bg-orange-500" />
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2">Supply Categories:</p>
            <DataTable
              headers={["Category", "Per AC", "Total (117 ACs)", "Priority"]}
              rows={[
                ["Flags/Banners", "Rs 3-5 L", "Rs 3.5-5.9 Cr", "High"],
                ["Posters/Handbills", "Rs 4-8 L", "Rs 4.7-9.4 Cr", "Critical"],
                ["Caps/Bands", "Rs 1-2 L", "Rs 1.2-2.3 Cr", "Medium"],
                ["Badges/Ribbons", "Rs 0.5-1 L", "Rs 58.5L-1.2 Cr", "Medium"],
                ["Standees/PVC", "Rs 2-4 L", "Rs 2.3-4.7 Cr", "High"],
                ["Gifts/Scheme Material", "Rs 5-15 L", "Rs 5.9-17.6 Cr", "Critical"],
              ]}
            />
          </div>
        </div>

        {/* MP9-009: Legal ECI */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-009: Legal & ECI Compliance</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Assembly Limit" value="Rs 44 L" subtitle="Per seat (ECI amended)" color="bg-emerald-500" />
            <MetricCard title="Silence Period" value="48 Hours" subtitle="Before polling" color="bg-red-500" />
            <MetricCard title="cVIGIL Response" value="100 Min" subtitle="Target time" color="bg-blue-500" />
            <MetricCard title="Model Code" value="In Force" subtitle="From announcement" color="bg-purple-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Expenses Watch</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">cVIGIL app: Geo-tagged photo/video reporting</p>
              <p className="text-xs text-slate-500 mt-1">MCC violations: BNS 356 criminal intimidation</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Election Offenses</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Hate speech: 3-5 years imprisonment</p>
              <p className="text-xs text-slate-500 mt-1">Paid news: Disqualification up to 5 years</p>
            </div>
          </div>
        </div>

        {/* MP9-010: Legal Litigation */}
        <div className="rounded-lg border border-rose-200 bg-white p-4 dark:border-rose-700 dark:bg-slate-800">
          <h4 className="font-semibold text-rose-700 dark:text-rose-400 mb-3">MP9-010: Legal & Litigation Strategy</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Defamation Risk" value="BNS 356" subtitle="Criminal statute" color="bg-red-500" />
            <MetricCard title="Legal Budget" value="Rs 1.5-3 Cr" subtitle="Litigation reserve" color="bg-emerald-500" />
            <MetricCard title="Lawyer Network" value="50+" subtitle="Panel statewide" color="bg-blue-500" />
            <MetricCard title="Petition Window" value="45 Days" subtitle="Post-election" color="bg-purple-500" />
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500 mb-2">Litigation Strategy:</p>
            <DataTable
              headers={["Case Type", "Budget", "Lawyers", "Timeline"]}
              rows={[
                ["Election Petition", "Rs 50-80 L", "15-20", "45 days post-results"],
                ["MCC Violations", "Rs 30-50 L", "10-15", "During campaign"],
                ["Defamation Cases", "Rs 40-60 L", "15-20", "Ongoing"],
                ["Pre-Polling Disputes", "Rs 20-30 L", "5-8", "Pre-election"],
              ]}
            />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Precedent Cases</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">2022: Rs 17.99L avg MLA spend, 45% of limit</p>
              <p className="text-xs text-slate-500 mt-1">2017: ECI disqualifications for overspending</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Compliance Checklist</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Daily expense logging, receipts for all purchases</p>
              <p className="text-xs text-slate-500 mt-1">Shadow registers for compliant tracking</p>
            </div>
          </div>
        </div>
      </div>

      {/* A-08: Election Commission Intelligence */}
      <div className="rounded-xl border-2 border-sky-200 bg-sky-50 p-4 dark:border-sky-800 dark:bg-sky-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-sky-700 dark:text-sky-400">A-08: Election Commission Intelligence</p>
            <p className="text-sm text-sky-600 dark:text-sky-300">ECI Readiness • Voter Rolls • EVM/VVPAT • Model Code • Security • Postal Ballot (A-08-01 to A-08-15)</p>
          </div>
        </div>

        {/* A-08-01: ECI Readiness & Electoral Roll Revision */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-01: ECI Readiness & Special Intensive Revision (SIR)</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Registered Voters" value="2.14 Cr" subtitle="214.57 lakh voters" color="bg-sky-500" />
            <MetricCard title="BLOs Deployed" value="24,453" subtitle="Booth Level Officers" color="bg-blue-500" />
            <MetricCard title="CEO Punjab" value="Anindita Mitra" subtitle="Chief Electoral Officer" color="bg-purple-500" />
            <MetricCard title="Polling Stations" value="22,000+" subtitle="Estimated" color="bg-teal-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-sky-50 p-3 dark:bg-sky-900/20">
              <p className="text-sm font-medium text-sky-700 dark:text-sky-400">SIR Timeline 2026</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>Draft Roll Publication: July 24, 2026</p>
                <p>Special Intensive Revision: June 25 - July 24, 2026</p>
                <p>Final Roll Publication: October 1, 2026</p>
                <p>Single-Phase Election: February 2027</p>
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Voter Demographics</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>SC Voters: 32% of electorate</p>
                <p>First-Time Voters: 5.39 lakh</p>
                <p>Gender Ratio: 89:100 (Male:Female)</p>
                <p>117 Assembly Constituencies</p>
              </div>
            </div>
          </div>
        </div>

        {/* A-08-03: EVM/VVPAT Infrastructure */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-03: EVM/VVPAT Infrastructure (2022 Election Data)</h4>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <MetricCard title="Ballot Units (BU)" value="45,316" subtitle="For 2022 election" color="bg-emerald-500" />
            <MetricCard title="Control Units (CU)" value="34,942" subtitle="For 2022 election" color="bg-blue-500" />
            <MetricCard title="VVPATs" value="37,576" subtitle="For 2022 election" color="bg-purple-500" />
            <MetricCard title="EVMs per Booth" value="1 BU + 1 CU" subtitle="Standard configuration" color="bg-teal-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">VVPAT Controversies</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Supreme Court 2013: VVPAT to count 5 randomly selected EVMs per constituency. ECI opposed full VVPAT count citing time (6-7 hours per constituency).</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">EVM Vulnerabilities</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">M3 EVMs have cryptographic protection. Remote signaling concerns raised by Opposition. ECI maintains air-gap security.</p>
            </div>
          </div>
        </div>

        {/* A-08-04: Model Code of Conduct */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-04: Model Code of Conduct (MCC) Enforcement</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Silence Period" value="48 Hours" subtitle="Before polling day" color="bg-red-500" />
            <MetricCard title="cVIGIL Response" value="100 Min" subtitle="Target resolution time" color="bg-blue-500" />
            <MetricCard title="MCC Violations" value="2022 FIR" subtitle="CM Channi case" color="bg-orange-500" />
            <MetricCard title="ECI Directives" value="Continuous" subtitle="From announcement" color="bg-purple-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">MCC Restrictions</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• No government schemes announcements</p>
                <p>• No use of official machinery</p>
                <p>• No paid news/content</p>
                <p>• No temple hopping/religious symbolism</p>
                <p>• No opinion polls/exit polls</p>
              </div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">2022 MCC Case: CM Channi FIR</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Congress CM candidate used government helicopter during campaign. MCC violation registered. ECI enforcement shows no exemption for sitting CMs.</p>
            </div>
          </div>
        </div>

        {/* A-08-05: Election Schedule */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-05: Election Schedule 2027</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard title="Election Type" value="Single-Phase" subtitle="117 constituencies" color="bg-sky-500" />
            <MetricCard title="Projected Month" value="February 2027" subtitle="Per ECI tradition" color="bg-blue-500" />
            <MetricCard title="Announcement" value="Feb 2027" subtitle="ECI notification" color="bg-purple-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-sky-50 p-3 dark:bg-sky-900/20">
              <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Key Dates (Projected)</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>ECI Announcement: January 25-30, 2027</p>
                <p>Nominations: February 1-3, 2027</p>
                <p>Scrutiny: February 4-6, 2027</p>
                <p>Withdrawal: February 7-9, 2027</p>
                <p>Polling: February 15-28, 2027</p>
                <p>Counting: March 1, 2027</p>
              </div>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Schedule Comparison</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>2022: Single-phase (March 10, 2022)</p>
                <p>2017: Single-phase (February 4, 2017)</p>
                <p>2012: Single-phase (January 30, 2012)</p>
                <p>Punjab tradition: Single-phase since 1977</p>
              </div>
            </div>
          </div>
        </div>

        {/* A-08-06: Election Funding */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-06: Election Funding & Spending Limits</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard title="Spending Limit" value="Rs 40L" subtitle="Per candidate" color="bg-emerald-500" />
            <MetricCard title="Total State Limit" value="Rs 46.8 Cr" subtitle="117 x Rs 40L" color="bg-blue-500" />
            <MetricCard title="Electoral Bonds" value="Struck Down" subtitle="SC 2024 verdict" color="bg-red-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Spending Categories</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>Public meetings/rallies: Included</p>
                <p>Digital/social media: Included</p>
                <p>Vehicle hire: Included</p>
                <p>Booth-level workers: Included</p>
                <p>Security deposit: Rs 10,000 (refundable)</p>
              </div>
            </div>
            <div className="rounded-lg bg-sky-50 p-3 dark:bg-sky-900/20">
              <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Post-Bond Landscape</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">After SC struck down electoral bonds (April 2024), parties must disclose all donations above Rs 2,000. Cash donations now capped at Rs 2,000 per person.</p>
            </div>
          </div>
        </div>

        {/* A-08-07: Election Crime & Criminalization */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-07: Election Crime & Criminalization of Politics</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Candidates w/Criminal Cases" value="25%" subtitle="ADR data" color="bg-red-500" />
            <MetricCard title="Winning MLAs w/Criminal" value="50%" subtitle="State legislature" color="bg-orange-500" />
            <MetricCard title="Candidates Declared Guilty" value="315" subtitle="ADR tracked" color="bg-purple-500" />
            <MetricCard title="Murder Cases" value="42" subtitle="Serious IPC charges" color="bg-red-500" />
          </div>
          <div className="mt-4">
            <DataTable
              headers={["Crime Category", "Punjab %", "National Avg %", "Trend"]}
              rows={[
                ["Murder", "13.4%", "8.8%", "Higher"],
                ["Attempt to Murder", "14.1%", "9.2%", "Higher"],
                ["Kidnapping", "6.3%", "4.1%", "Higher"],
                ["Dacoity/Robbery", "3.5%", "2.8%", "Moderate"],
                ["Criminal Intimidation", "18.7%", "15.2%", "Higher"],
              ]}
            />
          </div>
        </div>

        {/* A-08-08: Booth Capture & Repolls */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-08: Booth Capture & Repoll Data</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard title="Repolls (Dec 2025)" value="16" subtitle="By-election repolls" color="bg-red-500" />
            <MetricCard title="Rural Turnout" value="48%" subtitle="Booth-level (suspect)" color="bg-orange-500" />
            <MetricCard title="Booth Agents Required" value="22,000+" subtitle="For 2027" color="bg-blue-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Booth Capture Indicators</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• 100% turnout in specific booths</p>
                <p>• EVM malfunction claims</p>
                <p>• Late polling hour surge</p>
                <p>• Battered VVPAT slips</p>
                <p>• Voter slip distribution anomalies</p>
              </div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Repoll Triggers</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Booth agent displacement</p>
                <p>• EVM tampering allegations</p>
                <p>• Violence at polling station</p>
                <p>• VVPAT mismatch exceeding limit</p>
                <p>• Massive voting irregularities</p>
              </div>
            </div>
          </div>
        </div>

        {/* A-08-09: Candidate Affidavits & ADR Data */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-09: Candidate Affidavits & Asset Analysis</h4>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <MetricCard title="Crorepati Candidates" value="67%" subtitle="Self-declared assets" color="bg-emerald-500" />
            <MetricCard title="Avg Asset Value" value="Rs 1.2 Cr" subtitle="Per candidate" color="bg-blue-500" />
            <MetricCard title="Graduate+ Candidates" value="74%" subtitle="Higher education" color="bg-purple-500" />
            <MetricCard title="Criminal Cases" value="25%" subtitle="Serious IPC charges" color="bg-red-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Asset Distribution</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Less than Rs 10 lakh: 18%</p>
                <p>• Rs 10L-1 Cr: 41%</p>
                <p>• Rs 1-5 Cr: 29%</p>
                <p>• Above Rs 5 Cr: 12%</p>
              </div>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
              <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Education Profile</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Illiterate: 0.5%</p>
                <p>• 10th pass: 8%</p>
                <p>• 12th pass: 17.5%</p>
                <p>• Graduate: 35%</p>
                <p>• Post-Graduate: 39%</p>
              </div>
            </div>
          </div>
        </div>

        {/* A-08-10: Legal Framework */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-10: Legal Framework & Anti-Defection</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Anti-Defection" value="10th Schedule" subtitle="Constitution" color="bg-purple-500" />
            <MetricCard title="Defection Penalty" value="Disqualification" subtitle="+ Seat lost" color="bg-red-500" />
            <MetricCard title="Petition Window" value="45 Days" subtitle="Post-election" color="bg-blue-500" />
            <MetricCard title="Bikram Majithia" value="Drug Case" subtitle="Ongoing trial" color="bg-orange-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
              <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Defection Cases</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• 2016: 25 SAD MLAs crossed to Congress</p>
                <p>• 2022: 10 AAP MLAs joined Congress</p>
                <p>• 2023: 2 Congress MLAs to AAP</p>
                <p>• Merger clause: 2/3rd of party must agree</p>
              </div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Major Punjab Litigations</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Bikram Majithia: NDPS case (ongoing)</p>
                <p>• Sukhpal Khaira: Drug case</p>
                <p>• 2017 poll: ECI disqualification overspending</p>
              </div>
            </div>
          </div>
        </div>

        {/* A-08-11: Election Observers */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-11: Election Observers & cVIGIL</h4>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <MetricCard title="Total Observers (2022)" value="1,111" subtitle="For Punjab election" color="bg-blue-500" />
            <MetricCard title="cVIGIL Response" value="100 Min" subtitle="Target resolution" color="bg-emerald-500" />
            <MetricCard title="cVIGIL App" value="Active" subtitle="Violation reporting" color="bg-purple-500" />
            <MetricCard title="Observer Ratio" value="1:10,000" subtitle="Voters per observer" color="bg-teal-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Observer Categories</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• General Observers: Administrative</p>
                <p>• Police Observers: Law enforcement</p>
                <p>• Expenditure Observers: Spending</p>
                <p>• Sector Officers: Booth-level</p>
              </div>
            </div>
            <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-900/20">
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">cVIGIL Mechanism</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Geo-tagged photo/video evidence</p>
                <p>• 100-minute mandatory response</p>
                <p>• Real-time ECI dashboard</p>
                <p>• Action taken report (ATR) mandatory</p>
              </div>
            </div>
          </div>
        </div>

        {/* A-08-12: Security Deployment */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-12: Security Deployment Architecture</h4>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <MetricCard title="Personnel (2022)" value="1 Lakh+" subtitle="Total deployed" color="bg-red-500" />
            <MetricCard title="CAPF Requested" value="1,050" subtitle="Companies" color="bg-orange-500" />
            <MetricCard title="Districts" value="23" subtitle="State coverage" color="bg-blue-500" />
            <MetricCard title="Critical Booths" value="5,000+" subtitle="High-risk areas" color="bg-purple-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Security Concerns</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Lawrence Bishnoi gang activity</p>
                <p>• Tarn Taran, Qadian, Moga high-risk</p>
                <p>• NIA charges October 2025</p>
                <p>• Drug money influence on elections</p>
                <p>• Inter-state border smuggling routes</p>
              </div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Deployment Strategy</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• CAPF: 1 company per 20-25 booths</p>
                <p>• State police: Law & order</p>
                <p>• Quick Reaction Team (QRT)</p>
                <p>• Static guards: Vulnerable booths</p>
                <p>• Flying squads: Movement surveillance</p>
              </div>
            </div>
          </div>
        </div>

        {/* A-08-13: Nomination Process */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-13: Nomination Process (2022 Data)</h4>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <MetricCard title="Nominations Filed" value="2,266" subtitle="2022 election" color="bg-blue-500" />
            <MetricCard title="Nominations Rejected" value="588" subtitle="26% rejection" color="bg-red-500" />
            <MetricCard title="Candidates Contested" value="1,304" subtitle="58% of filed" color="bg-emerald-500" />
            <MetricCard title="Withdrawal" value="374" subtitle="Candidates withdrew" color="bg-orange-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Rejection Reasons</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Invalid/not properly stamped affidavits</p>
                <p>• Incomplete paperwork</p>
                <p>• Failure to deposit security</p>
                <p>• Candidature withdrawn by party</p>
                <p>• Court orders/disqualifications</p>
              </div>
            </div>
            <div className="rounded-lg bg-sky-50 p-3 dark:bg-sky-900/20">
              <p className="text-sm font-medium text-sky-700 dark:text-sky-400">Nomination Checklist</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Form A: Nomination paper</p>
                <p>• Form B: Affidavit (assets, criminal)</p>
                <p>• Form C: Party certification</p>
                <p>• Security deposit: Rs 10,000</p>
                <p>• 10 proposers required</p>
              </div>
            </div>
          </div>
        </div>

        {/* A-08-14: Voter Identity */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-14: Voter Identity & EPIC</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="EPIC Coverage" value="95%+" subtitle="Voters with cards" color="bg-emerald-500" />
            <MetricCard title="Alternative IDs" value="12" subtitle="Accepted documents" color="bg-blue-500" />
            <MetricCard title="Aadhaar Linkage" value="Voluntary" subtitle="SC 2023 ruling" color="bg-purple-500" />
            <MetricCard title="Voter Slip" value="Valid ID" subtitle="With slip only" color="bg-teal-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Accepted Voter IDs (Any ONE)</p>
              <div className="mt-2 grid grid-cols-2 gap-1 text-xs text-slate-600 dark:text-slate-400">
                <p>1. EPIC (Electoral Photo ID)</p>
                <p>2. Aadhaar Card</p>
                <p>3. PAN Card</p>
                <p>4. Driving License</p>
                <p>5. Passport</p>
                <p>6. Service ID (Central/State)</p>
                <p>7. Bank Passbook</p>
                <p>8. Ration Card</p>
                <p>9. CGHS/ECHS Card</p>
                <p>10. Pension Document</p>
                <p>11. SC/ST/OBC Certificate</p>
                <p>12. Disability Certificate</p>
              </div>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Aadhaar Controversy</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">SC 2023: Linking Aadhaar to voter ID NOT mandatory. ECI maintained voluntary linkage only. Privacy concerns raised by Opposition. No Supreme Court direction for forced linking.</p>
              <p className="mt-1 text-xs text-slate-500">BJP demanded mandatory Aadhaar; Congress opposed as exclusionary</p>
            </div>
          </div>
        </div>

        {/* A-08-15: Postal Ballot */}
        <div className="mb-6 rounded-lg border border-sky-200 bg-white p-4 dark:border-sky-700 dark:bg-slate-800">
          <h4 className="font-semibold text-sky-700 dark:text-sky-400 mb-3">A-08-15: Postal Ballot & ETPBS</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Postal Ballot Uptake" value="3.61%" subtitle="Of total voters" color="bg-blue-500" />
            <MetricCard title="80+ Voters" value="5.09 Lakh" subtitle="509,205 voters" color="bg-purple-500" />
            <MetricCard title="Service Voters" value="ETPBS" subtitle="Online application" color="bg-teal-500" />
            <MetricCard title="Proxy Voting" value="Limited" subtitle="Armed forces only" color="bg-orange-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Eligible for Postal Ballot</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Senior citizens (80+ years)</p>
                <p>• Persons with disabilities</p>
                <p>• COVID-19 isolated patients</p>
                <p>• Essential services personnel</p>
                <p>• Armed forces & paramilitary</p>
                <p>• Police officials on duty</p>
              </div>
            </div>
            <div className="rounded-lg bg-teal-50 p-3 dark:bg-teal-900/20">
              <p className="text-sm font-medium text-teal-700 dark:text-teal-400">ETPBS System</p>
              <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                <p>• Electronic Transmission of Postal Ballot</p>
                <p>• Online application for service voters</p>
                <p>• Digital ballot reception</p>
                <p>• QR-coded ballot tracking</p>
                <p>• Faster turnaround vs physical</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A-09: Ground Reality Intelligence */}
      <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-amber-700 dark:text-amber-400">A-09: Ground Reality Intelligence</p>
            <p className="text-sm text-amber-600 dark:text-amber-300">Rally tracking, booth activity, membership drives, defections (A-09-01 to A-09-14)</p>
          </div>
        </div>

        {/* Rally Tracking */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-700 dark:bg-slate-800">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Rally & Public Meeting Tracking (A-09-01)</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Congress Rallies" value="60+" subtitle="MGNREGA Bachao Sangram" color="bg-blue-500" />
            <MetricCard title="AAP Rallies" value="50+" subtitle="Yudh Nasheyan Virudh" color="bg-cyan-500" />
            <MetricCard title="BJP Rallies" value="40+" subtitle="Badlav Rally" color="bg-orange-500" />
            <MetricCard title="SAD Rallies" value="30+" subtitle="Punjab Bachao" color="bg-yellow-500" />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">AAP Janata Darbar Format</p>
              <div className="mt-2 space-y-1 text-xs text-slate-500">
                <p>Complaints received: <span className="font-bold text-blue-600">18,693</span></p>
                <p>Resolution rate: <span className="font-bold text-emerald-600">98%</span></p>
              </div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">BJP Special Events</p>
              <div className="mt-2 space-y-1 text-xs text-slate-500">
                <p>PM Modi Dera Ballan visit</p>
                <p>Nasha Mukt Punjab campaign</p>
              </div>
            </div>
          </div>
        </div>

        {/* Roadshow & Booth Activity */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-700 dark:bg-slate-800">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Roadshow & Booth Activity (A-09-02, A-09-12)</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="Congress Yatras" value="117" subtitle="One per assembly segment" color="bg-blue-500" />
            <MetricCard title="Congress Booth Sevaks" value="25,000" subtitle="+ 1.25 lakh assistants" color="bg-cyan-500" />
            <MetricCard title="BJP Mandals" value="615+" subtitle="1.5 lakh+ workers" color="bg-orange-500" />
            <MetricCard title="AAP Booth Workers" value="~20,000" subtitle="Defections affecting" color="bg-red-500" />
          </div>
        </div>

        {/* Membership & Defections */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-700 dark:bg-slate-800">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Membership & Defections (A-09-13, A-09-14)</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-xs font-semibold text-red-700 dark:text-red-400">BJP Membership Collapse</p>
              <p className="text-lg font-bold text-red-600">-64%</p>
              <p className="text-xs text-slate-500">18 lakh → 6.44 lakh</p>
            </div>
            <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
              <p className="text-xs font-semibold text-red-700 dark:text-red-400">April 24, 2026</p>
              <p className="text-sm font-bold text-red-600">7 Rajya Sabha MPs</p>
              <p className="text-xs text-slate-500">AAP to BJP merger</p>
            </div>
            <div className="rounded-lg bg-orange-100 p-3 dark:bg-orange-900/30">
              <p className="text-xs font-semibold text-orange-700 dark:text-orange-400">Congress to BJP</p>
              <p className="text-sm font-bold text-orange-600">Captain Amarinder, Jakhar, Bittu</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-3 dark:bg-slate-700">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">AAP MLA Defections</p>
              <p className="text-sm font-bold text-slate-600">Multiple</p>
              <p className="text-xs text-slate-500">Pathak, Chadha affected</p>
            </div>
          </div>
        </div>

        {/* Farmer & Protest Activity */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-700 dark:bg-slate-800">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Farmer & Protest Activity (A-09-06, A-09-07, A-09-10)</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard title="SKM Tractor Marches" value="100+" subtitle="100+ events" color="bg-emerald-500" />
            <MetricCard title="SKM Path Yatra" value="250+" subtitle="Protest marches" color="bg-green-500" />
            <MetricCard title="KMM Protest Sites" value="32" subtitle="Drug trade protests" color="bg-orange-500" />
            <MetricCard title="Dallewal Fast" value="131 days" subtitle="MSP guarantee demand" color="bg-red-500" />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Badge variant="danger">July 2025 Strike</Badge>
            <span className="text-sm text-slate-600 dark:text-slate-400">25 crore workers | Minimum wage: Rs 518/day</span>
          </div>
        </div>

        {/* Women & Youth Outreach */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-700 dark:bg-slate-800">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Women & Youth Outreach (A-09-04, A-09-05)</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-pink-50 p-3 dark:bg-pink-900/20">
              <p className="text-xs text-pink-600 dark:text-pink-400">AAP Women Scheme</p>
              <p className="text-lg font-bold text-pink-600">Rs 1,000/mo</p>
              <p className="text-xs text-slate-500">97% coverage | Rs 9,300 Cr</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-xs text-blue-600 dark:text-blue-400">Congress Bebe Nanki</p>
              <p className="text-lg font-bold text-blue-600">Rs 61,000</p>
              <p className="text-xs text-slate-500">Per girl child</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-xs text-red-600 dark:text-red-400">Rural Unemployment</p>
              <p className="text-lg font-bold text-red-600">22.5%</p>
              <p className="text-xs text-slate-500">Youth affected: 75%+</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
              <p className="text-xs text-purple-600 dark:text-purple-400">ABVP PU Council</p>
              <p className="text-lg font-bold text-purple-600">3,148 votes</p>
              <p className="text-xs text-slate-500">Won Panjab University</p>
            </div>
          </div>
        </div>

        {/* Religious & Caste Dynamics */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-700 dark:bg-slate-800">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Religious & Caste Gatherings (A-09-08, A-09-09)</h4>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">SGPC Crisis</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">SGPC-Akal Takht dispute</p>
            </div>
            <div className="rounded-lg bg-cyan-50 p-3 dark:bg-cyan-900/20">
              <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">Dera Beas</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Active political engagement</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
              <p className="text-xs font-semibold text-orange-700 dark:text-orange-400">SC Population</p>
              <p className="text-lg font-bold text-orange-600">32%</p>
              <p className="text-xs text-slate-500">Highest in India</p>
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-xs font-semibold text-red-700 dark:text-red-400">Congress Caste Rift</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Channi-Warring conflict</p>
            </div>
          </div>
        </div>

        {/* Local Body Polls */}
        <div className="rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-700 dark:bg-slate-800">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Local Body Poll Performance (A-09-11)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-cyan-50 p-3 dark:bg-cyan-900/20">
              <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">AAP Control</p>
              <p className="text-lg font-bold text-cyan-600">55%</p>
              <p className="text-xs text-slate-500">Municipal wards</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-400">Congress Win</p>
              <p className="text-sm font-bold text-blue-600">Amritsar MC</p>
              <p className="text-xs text-slate-500">Major municipal corporation</p>
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">SAD Decline</p>
              <p className="text-sm font-bold text-yellow-600">Significant losses</p>
              <p className="text-xs text-slate-500">Barnala, Tarn Taran shifts</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
