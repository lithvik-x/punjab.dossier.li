"use client";

import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";
import { KEY_ISSUES_VERIFIED } from "@/lib/constants";

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
              Total outstanding debt exceeds Rs 1 lakh crore. Institutional: 78.7% | Non-institutional: 21.3%.
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
    </div>
  );
}