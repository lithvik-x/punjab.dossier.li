export const OPERATIONAL_HEADS = [
  {
    id: "demography",
    number: 1,
    title: "Demography Derivation",
    icon: "Users",
    description: "Voter segmentation by age, caste, religion, occupation, geography, psychographics",
    color: "bg-blue-500",
  },
  {
    id: "constituency",
    number: 2,
    title: "Constituency Proliferation",
    icon: "MapPin",
    description: "117 Assembly constituencies, booth-level targeting, regional analysis",
    color: "bg-green-500",
  },
  {
    id: "party",
    number: 3,
    title: "Party Propulsion",
    icon: "Flag",
    description: "Congress party machinery, worker networks, booth-level agents",
    color: "bg-cyan-500",
  },
  {
    id: "candidate",
    number: 4,
    title: "Candidate Supremacy",
    icon: "UserCheck",
    description: "Candidate profiles, winnability analysis, anti-incumbency factors",
    color: "bg-teal-500",
  },
  {
    id: "voter",
    number: 5,
    title: "Voter Enticement",
    icon: "Heart",
    description: "Voter outreach, micro-targeting, issue-based campaigns",
    color: "bg-pink-500",
  },
  {
    id: "competition",
    number: 6,
    title: "Competition Management",
    icon: "Swords",
    description: "AAP, SAD, BJP, BSP analysis, vote bank tracking",
    color: "bg-orange-500",
  },
  {
    id: "public-sentiment",
    number: 7,
    title: "Public Sentiment",
    icon: "MessageCircle",
    description: "Real-time sentiment tracking, issue prioritization",
    color: "bg-purple-500",
  },
  {
    id: "media-sentiment",
    number: 8,
    title: "Media Sentiment",
    icon: "Tv",
    description: "News analysis, social media monitoring, narrative tracking",
    color: "bg-indigo-500",
  },
  {
    id: "intelligence",
    number: 9,
    title: "Intelligence & Analytics",
    icon: "Brain",
    description: "Data pipelines, predictive analytics, real-time monitoring",
    color: "bg-violet-500",
  },
  {
    id: "perception",
    number: 10,
    title: "Perception & Strategy",
    icon: "Target",
    description: "SWOT analysis, campaign strategy, narrative formation",
    color: "bg-rose-500",
  },
  {
    id: "governance",
    number: 11,
    title: "Governance Analysis",
    icon: "Scale",
    description: "Agrarian distress, MSP procurement, water crisis, farmer protests, land pooling policy",
    color: "bg-amber-500",
  },
] as const;

export const REGIONS = [
  { id: "malwa", name: "Malwa", constituencies: 69, border: "Central/South Punjab" },
  { id: "majha", name: "Majha", constituencies: 25, border: "Pakistan border, Central" },
  { id: "doaba", name: "Doaba", constituencies: 23, border: "Dual river region" },
  { id: "powadh", name: "Powadh", constituencies: 10, border: "Punjab-Haryana border" },
] as const;

export const PARTIES = [
  { id: "congress", name: "Indian National Congress", shortName: "INC", color: "#00A0DC" },
  { id: "aap", name: "Aam Aadmi Party", shortName: "AAP", color: "#12B5E5" },
  { id: "sad", name: "Shiromani Akali Dal", shortName: "SAD", color: "#3C8D2F" },
  { id: "bjp", name: "Bharatiya Janata Party", shortName: "BJP", color: "#FF671F" },
  { id: "bsp", name: "Bahujan Samaj Party", shortName: "BSP", color: "#0C7A92" },
] as const;

export const VERIFIED_2022_RESULTS = {
  totalSeats: 117,
  aap: { seats: 92, voteShare: 42.01 },
  congress: { seats: 18, voteShare: 22.98 },
  sad: { seats: 3, voteShare: 18.38 },
  bjp: { seats: 2, voteShare: 8.0 },
  turnout: 72.15,
  electors: 21457000,
};

export const RELIGIOUS_DEMOGRAPHICS = {
  sikhs: { percentage: 57.69, voters: "1.24 Cr", note: "Majority religion" },
  hindus: { percentage: 38.49, voters: "82.3L", note: "Second largest" },
  muslims: { percentage: 1.93, voters: "4.1L", note: "Concentrated in Malerkotla" },
  christians: { percentage: 1.26, voters: "2.7L", note: "Growing via conversions" },
  others: { percentage: 0.63, voters: "1.3L", note: "Buddhists, Jains, Sikhs" },
} as const;

export const SC_SUB_CATEGORIES = {
  mazhabiSikh: { name: "Mazhabi Sikh", percentageOfSC: 29.72, population: "26.3L", region: "Majha, Malwa border", politicalTilt: "SAD→AAP", issues: ["Landlessness", "Discrimination", "Christian conversions"] },
  ravidasiaRamdasia: { name: "Ravidasia/Ramdasia", percentageOfSC: 23.45, population: "20.8L", region: "Doaba", politicalTilt: "Congress", issues: ["Sub-categorization", "Dera influence", "Education"] },
  balmikiValmiki: { name: "Balmiki/Valmiki", percentageOfSC: 9.78, population: "8.7L", region: "Doaba, Malwa", politicalTilt: "Congress", issues: ["Sanitation stigma", "Conversion pull", "Sub-quota"] },
  adDharm: { name: "Ad-Dharm", percentageOfSC: 11.48, population: "10.2L", region: "Doaba", politicalTilt: "Congress/BSP", issues: ["Education", "Economic mobility"] },
  raiSikh: { name: "Rai Sikh", percentageOfSC: 5.83, population: "5.2L", region: "Malwa, Majha", politicalTilt: "SAD", issues: ["Criminal tribe stigma", "Representation"] },
  bazigar: { name: "Bazigar", percentageOfSC: 2.72, population: "2.4L", region: "Patiala, Sangrur", politicalTilt: "AAP", issues: ["Nomadic identity", "Livelihood"] },
} as const;

export const OBC_SUB_CATEGORIES = {
  saini: { name: "Saini", populationPct: "3-4%", region: "Doaba", occupation: "Horticulture, agriculture", politicalTilt: "Congress→AAP" },
  kamboj: { name: "Kamboj", populationPct: "3-4%", region: "Malwa", occupation: "Agriculture", politicalTilt: "Congress/SAD" },
  labana: { name: "Labana", populationPct: "2-3%", region: "Malwa", occupation: "Trade, transport", politicalTilt: "Congress" },
  tarkhanRamgarhia: { name: "Tarkhan/Ramgarhia", populationPct: "5-6%", region: "All regions", occupation: "Carpentry, artisan", politicalTilt: "Fragmented" },
  others: { name: "Others (Lohar, Sunar, Nai, Gujjar)", populationPct: "~10%", region: "Statewide", occupation: "Various", politicalTilt: "Mixed" },
} as const;

export const UPPER_CASTE_DATA = {
  jatSikh: { name: "Jat Sikh", populationPct: "20-25%", region: "Malwa dominant", politicalTilt: "Swing (SAD→AAP)", keyIssue: "Agrarian distress, farmer identity" },
  brahmin: { name: "Brahmin", populationPct: "4-5%", region: "HP border districts", politicalTilt: "Congress→BJP urban", keyIssue: "National security, temple politics" },
  khatriArora: { name: "Khatri/Arora", populationPct: "5-7%", region: "Urban centers", politicalTilt: "Congress/BJP/AAP", keyIssue: "Business environment" },
  rajput: { name: "Rajput", populationPct: "2-3%", region: "HP border", politicalTilt: "Congress→BJP", keyIssue: "Identity politics" },
} as const;

export const CASTE_CATEGORIES = {
  general: [
    { name: "Jat Sikh", percentage: 21, votesPerSeat: 28500, note: "~20-25% of Punjab, decisive swing bloc" },
    { name: "Bania (Khatri/Arora)", percentage: 7, votesPerSeat: 9500, note: "Urban trading, concentrated in 20-25 seats" },
    { name: "Brahmin", percentage: 4, votesPerSeat: 5400, note: "HP border districts, urban BJP lean" },
    { name: "Rajput", percentage: 2, votesPerSeat: 2700, note: "HP border, Congress→BJP shift" },
    { name: "Other Upper Caste", percentage: 3, votesPerSeat: 4100, note: "Sood, Bhatia, Mahajan" },
  ],
  obc: [
    { name: "Tarkhan/Ramgarhia", percentage: 6, votesPerSeat: 8100, note: "Largest OBC group, 5-6% of Punjab" },
    { name: "Saini/Kamboja", percentage: 5, votesPerSeat: 6800, note: "Doaba/Malwa, Congress traditional" },
    { name: "Labana", percentage: 3, votesPerSeat: 4100, note: "Malwa, trade/transport" },
    { name: "Other OBCs", percentage: 17, votesPerSeat: 23000, note: "Lohar, Gujjar, Kumhar, Nai, etc." },
  ],
  sc: [
    { name: "Mazhabi Sikh", percentage: 9, votesPerSeat: 12200, note: "~30% of SCs, rural Malwa/Majha, SAD base→AAP" },
    { name: "Ravidasia/Ramdasia", percentage: 7, votesPerSeat: 9500, note: "~23% of SCs, Doaba heartland, Congress" },
    { name: "Balmiki/Valmiki", percentage: 4, votesPerSeat: 5400, note: "~10% of SCs, Doaba/Malwa, conversion risk" },
    { name: "Ad-Dharm/Chamar", percentage: 4, votesPerSeat: 5400, note: "~11% of SCs, Doaba, most educated SC" },
    { name: "Other SCs", percentage: 8, votesPerSeat: 10800, note: "Rai Sikh, Bazigar, Vimukt Jatis" },
  ],
} as const;

export const KEY_ISSUES_VERIFIED = [
  { id: "drugs", name: "Drugs & Narcotics", priority: 1, sentiment: -0.87, verified: true, data: "6.6M users (Parliamentary Panel 2023), 697K children 10-17 with SUD, 230K opioid-dependent, 106 overdose deaths (2024, 2nd highest India), 51,000+ NDPS cases (2015-2024), 4,600+ kg heroin seized, 200+ drones seized (2024, double prior year), 13 lakh registered vs 8-9 lakh estimated actual patients" },
  { id: "unemployment", name: "Youth Unemployment", priority: 2, sentiment: -0.72, verified: true, data: "14-15% youth unemployment (PLFS 2024-25), national avg 14.8%; AAP's 1 lakh jobs promise unfulfilled" },
  { id: "agriculture", name: "Farmer Distress", priority: 3, sentiment: -0.65, verified: true, data: "89% farm households in debt, Rs 2.03L avg debt, 2,809 farmer suicides (2023-25)" },
  { id: "healthcare", name: "Healthcare", priority: 4, sentiment: -0.45, verified: true, data: "1 doctor per 7,000+ patients (CAG 2025, vs 1:1000 WHO norm), rural health critical" },
  { id: "power", name: "Power/Electricity", priority: 5, sentiment: -0.38, verified: true, data: "AAP free power promise kept but infrastructure crumbling" },
  { id: "education", name: "Education", priority: 6, sentiment: -0.28, verified: true, data: "41% schools without drinking water, 23% without electricity (UDISE 2023-24)" },
  { id: "pesticides", name: "Pesticide Issues", priority: 7, sentiment: -0.42, verified: true, data: "Cancer cases in Malwa: 1 per 20 households, pesticide link" },
  { id: "stubble", name: "Stubble Burning", priority: 8, sentiment: -0.31, verified: true, data: "Oct-Nov: 50% of Punjab's air pollution from stubble burning" },
  { id: "water", name: "Water Crisis", priority: 9, sentiment: -0.55, verified: true, data: "87% blocks overexploited, groundwater depletion 0.5m/year in central Punjab" },
  { id: "governance", name: "Governance", priority: 10, sentiment: -0.42, verified: true, data: "92 MLAs: 23 underperforming, 17 structural anomalies, 9 under scanner" },
] as const;

export const CAMPAIGN_CHANNELS = [
  { id: "whatsapp", name: "WhatsApp", reach: 8500000, engagement: 0.72, cost: 0.05, verified: true, note: "Primary voter contact channel" },
  { id: "facebook", name: "Facebook", reach: 6200000, engagement: 0.45, cost: 0.12, verified: true, note: "Wide penetration in Punjab" },
  { id: "instagram", name: "Instagram", reach: 4100000, engagement: 0.68, cost: 0.15, verified: true, note: "Youth-heavy platform" },
  { id: "youtube", name: "YouTube", reach: 3800000, engagement: 0.52, cost: 0.25, verified: true, note: "Video content dominant" },
  { id: "tiktok", name: "TikTok", reach: 2200000, engagement: 0.81, cost: 0.08, verified: false, note: "Banned but still used" },
  { id: "tv", name: "TV Ads", reach: 12000000, engagement: 0.22, cost: 2.50, verified: true, note: "PTC, TV Punjab reach" },
  { id: "radio", name: "Radio", reach: 4500000, engagement: 0.31, cost: 0.35, verified: false, note: "Local language stations" },
  { id: "print", name: "Print Media", reach: 2800000, engagement: 0.18, cost: 0.80, verified: true, note: "Tribune, Dainik Bhaskar" },
  { id: "door", name: "Door-to-Door", reach: 500000, engagement: 0.85, cost: 1.20, verified: true, note: "25,000 booth sevaks deployed" },
  { id: "rallies", name: "Rallies", reach: 800000, engagement: 0.78, cost: 1.50, verified: true, note: "Star campaigner visits" },
] as const;

export const ELECTION_INFO = {
  electionDate: "February 2027",
  daysRemaining: 258,
  totalSeats: 117,
  majorityMark: 59,
  totalElectors: 21608701,
  booths: 23847,
  votersPerBooth: 906,
} as const;

export const BJP_SAD_ALLIANCE = {
  broken: true,
  confirmedDate: "March 2026",
  source: "Amit Shah statement, TOI March 14, 2026",
  implication: "BJP fighting solo, SAD must realign strategy",
} as const;

export const CONGRESS_ORG = {
  boothSevaks: 25000,
  appointedDate: "May 2026",
  source: "New Indian Express May 16, 2026",
  coordinators: 117,
  appointedDateCoord: "June 2025",
} as const;

// === POLITICAL ANATOMY DATA (from research-P2/01_punjab_political_anatomy) ===
export const POLITICAL_ANATOMY = {
  // Regional Distribution of 117 Assembly Seats
  regionalDistribution: {
    malwa: { seats: 69, percentage: 59, color: "bg-orange-500" },
    majha: { seats: 25, percentage: 21, color: "bg-blue-500" },
    doaba: { seats: 23, percentage: 20, color: "bg-green-500" },
  },
  // Caste Composition (as % of total population)
  casteComposition: {
    sc: { percentage: 32, note: "Scheduled Caste - highest in India" },
    jatSikh: { percentage: 21, note: "Largest single caste, dominant in Malwa" },
    mazhabi: { percentage: 6.3, note: "Largest SC sub-caste, rural Malwa/Majha" },
    bania: { percentage: 5.5, note: "Trading community, urban" },
    khatri: { percentage: 4.4, note: "Business community, 50% Hindu/50% Sikh" },
    brahmin: { percentage: 3.2, note: "Priesthood, academia, bureaucracy" },
    obc: { percentage: 31, note: "Other Backward Classes" },
  },
  // Religious Composition (Census 2011)
  religiousComposition: {
    sikh: { percentage: 57.7, voters: "1.24 Cr", note: "Majority religion" },
    hindu: { percentage: 38.5, voters: "82.3L", note: "Significant minority" },
    muslim: { percentage: 1.9, voters: "4.1L", note: "Concentrated in Malerkotla" },
    christian: { percentage: 1.3, voters: "2.7L", note: "Growing via Dalit conversions" },
  },
  // 2022 Assembly Election Results
  assemblyResults2022: {
    aap: { seats: 92, voteShare: 42.01 },
    congress: { seats: 18, voteShare: 22.98 },
    sad: { seats: 3, voteShare: 18.38 },
    bjp: { seats: 2, voteShare: 8.0 },
    others: { seats: 2, voteShare: 8.63 },
  },
  // Drug Crisis Data
  drugCrisis: {
    heroinShareIndia: "44.5%", // Punjab's share of India's heroin seizures
    estimatedUsers: "6.6 Million", // Total drug users in Punjab
    opioidDependent: "230,000",
    childrenWithSUD: "697,000", // 10-17 age group
    overdoseDeaths2024: 106,
    ndpsCases2015to2024: "51,000+",
    heroinSeized: "4,600+ kg",
    dronesSeized2024: 200,
  },
  // Drone Smuggling Data
  droneSmuggling: {
    cases2024: 179,
    increaseFrom2021: "6000%", // 2021 had ~3 cases
    heroinSeizedViaDrones: "600+ kg",
    mainRoutes: ["Pakistan border, Punjab-Haryana border"],
    seizureLocations: ["Moga", "Ferozpur", "Ajnala", "Tarn Taran"],
  },
  // Farmer Suicides Data
  farmerSuicides: {
    total2000to2018: 9291,
    debtRelatedPercent: 88,
    annualAverage: "488 per year",
    crisisDistricts: ["Sangrur", "Bathinda", "Mansa", "Moga", "Ferozpur"],
  },
  // SC Reserved Seats Performance (2022)
  scReservedSeats: {
    total: 34,
    aapWon: 29,
    congressWon: 5,
    aapPercentage: "85%",
  },
  // Voter Demographics Summary
  voterDemographics: {
    totalElectors: "2.14 Cr",
    scVoters: "32%",
    ruralPopulation: "62.5%",
    urbanPopulation: "37.5%",
    femaleElectorate: "48.6%",
    sexRatio: 895,
  },
} as const;

// ============================================================
// KPI MONITORING, ESCALATION & COURSE CORRECTION FRAMEWORK
// Source: MP10-predictive-outcomes/kpis/monitoring-escalation-framework.md
// ============================================================

// === TRAFFIC LIGHT DEFINITIONS ===
export const TRAFFIC_LIGHT_DEFINITIONS = [
  {
    status: "GREEN",
    criteria: "On track — within 10% of phase target or trending positively",
    visual: "Solid green",
    interpretation: "Continue execution. No intervention required.",
  },
  {
    status: "YELLOW",
    criteria: "At risk — within 10% below target, or stalled for 1 review period, or trending downward",
    visual: "Amber",
    interpretation: "Department head reviews within 24 hours, presents correction plan at next review.",
  },
  {
    status: "RED",
    criteria: "Off-track — more than 10% below target, or declining for 2+ consecutive review periods, or below red-flag threshold",
    visual: "Solid red",
    interpretation: "Campaign Director reviews within 4 hours. Emergency meeting convened. Resource reallocation authorized.",
  },
] as const;

// === KPI THRESHOLD EXAMPLES ===
export const KPI_THRESHOLD_EXAMPLES = [
  { kpi: "Vote share tracking", green: "Above 35%", yellow: "28-35% or declining 2+ weeks", red: "Below 28% sustained" },
  { kpi: "Seat projection (median)", green: "59+ projected", yellow: "50-58 projected", red: "Below 50 projected" },
  { kpi: "D2D coverage (Phase 3)", green: "Above 80% target", yellow: "60-80%", red: "Below 60%" },
  { kpi: "Volunteer activation rate", green: "Above 70%", yellow: "50-70%", red: "Below 50%" },
  { kpi: "Share of voice (media)", green: "Congress leading", yellow: "Within 10% of competitor", red: "Competitor exceeds Congress by 10%+" },
  { kpi: "Fundraising vs target", green: "Above 90% of target", yellow: "70-90% of target", red: "Below 70% of target" },
  { kpi: "Social media engagement growth", green: "Positive week-on-week", yellow: "Flat or <5% decline", red: ">10% decline sustained 2+ weeks" },
] as const;

// === MONITORING CADENCE ===
export const MONITORING_CADENCE = {
  daily: {
    type: "daily" as const,
    name: "Daily Operational Review",
    frequency: "Every Day",
    time: "7:00 AM",
    duration: "30 minutes",
    participants: ["War Room Operations Lead", "Media Monitor", "Digital Lead", "Ground Ops Coordinator"],
    inputs: ["Overnight media scan", "Social sentiment alert summary", "Ground incident reports"],
    outputs: ["War Room Morning Brief — issued by 7:30 AM"],
    reviewItems: [
      "Overnight media coverage — positive/negative/neutral stories",
      "Social media trending topics and sentiment alerts",
      "Ground incidents (clashes, protests, candidate issues)",
      "Calendar of events for the day — rallies, press conferences, VIP visits",
      "Any KPI that moved to RED overnight — immediate escalation",
    ],
  },
  weekly: {
    type: "weekly" as const,
    name: "Weekly Strategic Review",
    frequency: "Every Monday",
    time: "10:00 AM",
    duration: "90 minutes",
    participants: ["Campaign Director", "Campaign Manager", "All vertical heads", "Regional Coordinators (rotating)"],
    inputs: ["Weekly Intelligence Summary (10-15 pages)", "KPI dashboard snapshot", "Campaign activity tracker"],
    outputs: ["Updated KPI dashboard", "Decision log", "Action items for the week"],
    standardAgenda: [
      "KPI dashboard walkthrough — traffic light status for all 30+ KPIs (15 min)",
      "Deep-dive on YELLOW or RED KPIs — root cause analysis (20 min)",
      "Competitor activity summary — AAP, SAD, BJP, BSP (10 min)",
      "Ground ops report — D2D progress, rally outcomes (15 min)",
      "Media and digital performance — SOV, sentiment, engagement (10 min)",
      "Financial status — fundraising vs expenditure (5 min)",
      "Key decisions and action items (10 min)",
      "Next week priorities (5 min)",
    ],
  },
  fortnightly: {
    type: "fortnightly" as const,
    name: "Fortnightly Deep-Dive",
    frequency: "1st and 15th of each month",
    time: "2:00 PM",
    duration: "3 hours",
    participants: ["Campaign Director", "Campaign Manager", "Data & Analytics Head", "All Regional Coordinators", "Survey Vendor lead"],
    inputs: ["Latest survey wave results", "Constituency-level pulse reports", "AC-level KPI heatmaps"],
    outputs: ["Constituency Pulse Report", "Updated seat projections", "Re-prioritized AC classification"],
    focusAreas: [
      "AC-level performance review — which constituencies moving toward/away from Congress",
      "Survey data deep-dive — demographic shifts, issue salience, candidate performance",
      "Regional strategy assessment — Malwa/Majha/Doaba each reviewed separately",
      "Competitor alliance or strategy shifts — scenario modeling",
      "Tier reclassification of constituencies (Safe/Leaning/Toss-Up)",
    ],
  },
  monthly: {
    type: "monthly" as const,
    name: "Monthly Board-Level Review",
    frequency: "Last Saturday of each month",
    time: "TBD",
    duration: "2 hours",
    participants: ["Campaign Director", "State Congress President", "AICC observer", "CM Face (if declared)", "Senior leadership (5-7 leaders)"],
    inputs: ["Monthly Strategic Analysis (25-30 pages)", "Financial report", "Win probability index"],
    outputs: ["Strategic direction memo", "Resource allocation decisions", "Leadership directives"],
    agenda: [
      "Win probability index and seat projection update (15 min)",
      "Vote share trajectory and regional breakdown (10 min)",
      "Major strategic shifts or course corrections implemented (15 min)",
      "Financial health — fundraising, expenditure, projected shortfall (15 min)",
      "Competitor landscape update and scenario analysis (15 min)",
      "Key risks and mitigation status (10 min)",
      "Leadership decisions and directives (20 min)",
      "Next month priorities and resource requests (20 min)",
    ],
  },
} as const;

// === ESCALATION FRAMEWORK ===
export const ESCALATION_LEVELS = [
  {
    level: "L1",
    authority: "Vertical head (Media, Digital, Ground Ops, etc.)",
    trigger: "Single KPI turns YELLOW",
    responseTime: "Within 24 hours",
    action: "Root cause analysis, correction plan presented at weekly review",
  },
  {
    level: "L2",
    authority: "Campaign Manager",
    trigger: "Two or more KPIs YELLOW in same vertical, or single KPI stays YELLOW for 2 review periods",
    responseTime: "Within 12 hours",
    action: "Cross-vertical assessment, resource rebalancing within existing budget",
  },
  {
    level: "L3",
    authority: "Campaign Director",
    trigger: "Any KPI turns RED, or 3+ YELLOW across verticals, or vote intention drops 3+ points in 2 weeks",
    responseTime: "Within 4 hours",
    action: "Emergency meeting, resource reallocation (budget + personnel), strategy adjustment authorized",
  },
  {
    level: "L4",
    authority: "CM Face (if declared) or State Congress President",
    trigger: "Campaign-level crisis: seat projection below 45, major scandal, alliance reshuffle, communal tension spike",
    responseTime: "Within 2 hours",
    action: "Political-level decision: candidate changes, alliance talks, narrative pivot, AICC consultation",
  },
] as const;

export const ESCALATION_COMMUNICATION_PROTOCOL = [
  { level: "L1", communicationMethod: "Email to Campaign Manager + entry in war room decision log", timeline: "Immediate" },
  { level: "L2", communicationMethod: "Phone call to Campaign Director + written brief", timeline: "Within 6 hours" },
  { level: "L3", communicationMethod: "Immediate phone call + emergency meeting convened", timeline: "Within 4 hours" },
  { level: "L4", communicationMethod: "Direct phone call to CM Face/State President + AICC observer informed", timeline: "Immediate" },
] as const;

export const DE_ESCALATION_CRITERIA = {
  fromRedToYellow: [
    "Correction plan has been implemented for at least one full review period",
    "Measurable improvement documented (minimum 5% improvement toward target)",
    "Campaign Director signs off on de-escalation",
  ],
  fromYellowToGreen: [
    "Two consecutive review periods of improvement",
    "Target is within 10% of phase milestone",
  ],
} as const;

// === COURSE CORRECTION PROTOCOLS ===
export const COURSE_CORRECTION_CYCLE = [
  { step: 1, name: "IDENTIFY", duration: "4 hours", description: "KPI triggers alert (YELLOW or RED). Responsible vertical logs alert in war room decision log.", output: "Alert logged" },
  { step: 2, name: "DIAGNOSE", duration: "24 hours", description: "Vertical head conducts root cause analysis using 5-Why methodology.", output: "One-page Root Cause Brief" },
  { step: 3, name: "DESIGN", duration: "Varies", description: "Correction plan developed specifying: changes, timeline, resources, expected impact, success metrics.", output: "Correction plan document" },
  { step: 4, name: "IMPLEMENT", duration: "3-7 days (operational) / 1-3 days (RED-level)", description: "Correction plan executed.", output: "Implemented changes" },
  { step: 5, name: "MEASURE", duration: "Next review cycle", description: "Impact assessed by comparing KPI trajectory before and after intervention.", output: "Impact assessment report" },
  { step: 6, name: "ITERATE", duration: "Ongoing", description: "If KPI improves — continue and monitor. If not — escalate to next level and redesign.", output: "Decision to continue/escalate" },
] as const;

export const STAY_VS_PIVOT_DECISIONS = [
  { condition: "1-2 KPIs YELLOW, most KPIs GREEN", decision: "Stay the course. Vertical-level correction only." },
  { condition: "3+ KPIs YELLOW across different verticals", decision: "Pause and assess. Likely systemic issue. Campaign Manager-level review." },
  { condition: "Vote share declining but within normal fluctuation (under 2% over 4 weeks)", decision: "Stay the course. Increase monitoring frequency." },
  { condition: "Vote share drops 3+ points in 2 weeks", decision: "EMERGENCY STRATEGY REVIEW. Full pivot assessment." },
  { condition: "D2D coverage below 60% at Phase 3 midpoint", decision: "SURGE DEPLOYMENT — redirect volunteers from low-priority ACs to Toss-Up ACs." },
  { condition: "Volunteer activity below 50% of target", decision: "MOTIVATION INTERVENTION — leadership outreach, incentive refresh, grievance resolution drive." },
  { condition: "Competitor SOV exceeds Congress by 10%+", decision: "MEDIA STRATEGY PIVOT — emergency re-allocation of media budget, rapid response team activated." },
  { condition: "Survey shows competitor alliance possibility", decision: "SCENARIO MODELING — war game the alliance, identify vulnerable seats, pre-emptive counter-strategy." },
  { condition: "All GREEN but election is 60 days away and seat projection is below 55", decision: "AGGRESSIVE PIVOT — full strategy reassessment. Campaign executing well but strategy may be wrong." },
] as const;

export const INTERVENTION_TYPES = [
  { type: "Micro-correction", trigger: "Single operational KPI YELLOW", authority: "Vertical head", typicalDuration: "3-5 days" },
  { type: "Resource surge", trigger: "Ground ops or D2D RED", authority: "Campaign Manager", typicalDuration: "1-2 weeks" },
  { type: "Narrative pivot", trigger: "Sentiment or media KPI RED for 2+ weeks", authority: "Campaign Director + Media Head", typicalDuration: "1-3 weeks to see impact" },
  { type: "Candidate intervention", trigger: "AC-level data shows candidate-specific drag", authority: "Campaign Director + State President", typicalDuration: "VERIFICATION_NEEDED" },
  { type: "Strategy overhaul", trigger: "Win probability below 30% sustained, or seat projection below 45", authority: "CM Face / State President + AICC", typicalDuration: "2-4 weeks to implement" },
] as const;

// === PUNJAB-SPECIFIC ESCALATION SCENARIOS ===
export const PUNJAB_ESCALATION_SCENARIOS = {
  factionalInfighting: {
    scenario: "Factional Infighting Affecting Ground Metrics",
    detection: "Volunteer activation drops in specific districts; ground reports indicate factional tension; social media shows intra-party criticism",
    escalationPath: [
      "L1: District coordinator reports to Regional Coordinator within 24 hours",
      "L2: Campaign Manager convenes meeting of feuding factions within 48 hours",
      "L3: If unresolved in 72 hours, Campaign Director escalates to State President for political mediation",
      "L4: If factionalism threatens 5+ ACs, State President intervenes directly with AICC backing",
    ],
    context: "Congress has history of factionalism (Captain Amarinder Singh vs Sidhu, Sandhu vs Bajwa factions). Factional disputes can rapidly erode ground-level morale.",
    verificationNeeded: "Current factional alignment must be mapped before campaign launch",
  },
  competitorAlliance: {
    scenario: "Sudden Competitor Alliance",
    detection: "Media reports, back-channel intelligence, or public statements indicating alliance talks (AAP-SAD, BJP-SAD, or unexpected combination)",
    escalationPath: [
      "L2: Campaign Manager activates scenario modeling within 12 hours",
      "L3: Campaign Director convenes emergency strategy session within 24 hours",
      "L4: State President consults AICC on counter-alliance or solo strategy within 48 hours",
    ],
    verificationNeeded: "Pre-planned counter-alliance dossiers should be maintained and updated quarterly (developed under MP3)",
  },
  aapPolicyAnnouncement: {
    scenario: "Major Policy Announcement by AAP Government",
    detection: "AAP government announces major populist scheme (farm loan waiver expansion, new job program, free electricity increase) that could shift voter sentiment",
    escalationPath: [
      "L1: Media team issues rapid response within 2 hours — fact-check, counter-narrative",
      "L2: Campaign Manager convenes messaging war room within 4 hours",
      "L3: If polling shows 3+ point sentiment shift toward AAP within 1 week, Campaign Director authorizes counter-campaign",
    ],
    counterStrategyOptions: [
      "Expose implementation gaps of past promises",
      "Shift narrative to structural issues AAP cannot solve",
      "Accelerate Congress's own competing promise announcement",
    ],
  },
  communalTension: {
    scenario: "Communal Tension Spike",
    detection: "Intelligence reports of communal tension in any AC; social media monitoring detects hate speech spikes; ground reports of polarization",
    escalationPath: [
      "L2: Immediate — Campaign Manager halts all campaign activity in affected AC within 2 hours",
      "L3: Campaign Director issues public harmony statement within 4 hours, coordinated with party leadership",
      "L4: State President coordinates with administration and community leaders",
    ],
    protocol: "Congress positions itself as the party of communal harmony. Never exploit communal tension for political gain — hard brand principle. Pivot messaging to unity, development, and Punjabiyat.",
  },
} as const;

// === RED TEAM EXERCISES ===
export const RED_TEAM_EXERCISE = {
  frequency: "Once per month (mid-month)",
  duration: "Half-day (4 hours)",
  participants: ["Campaign Director", "4-6 selected leaders (rotating)", "External advisor (if available)"],
  purpose: "Formally challenge the campaign's core assumptions to prevent groupthink and strategic blindness",
} as const;

export const RED_TEAM_ASSUMPTIONS = [
  {
    number: 1,
    assumption: "Anti-incumbency against AAP will benefit Congress",
    challengeQuestion: "What if AAP's welfare schemes sustain enough support to retain 50+ seats? What if the anti-incumbency vote splits between Congress and SAD-BJP?",
  },
  {
    number: 2,
    assumption: "Congress can win 59+ seats on its own",
    challengeQuestion: "What if a late alliance or seat-sharing arrangement is necessary? What are the alliance scenarios?",
  },
  {
    number: 3,
    assumption: "The CM face strategy will work",
    challengeQuestion: "What if declaring a CM face alienates a faction? What if no CM face is declared — can Congress win on collective leadership?",
  },
  {
    number: 4,
    assumption: "Drug issue remains a top voter concern",
    challengeQuestion: "What if employment or farm distress overtakes drugs as the primary issue?",
  },
  {
    number: 5,
    assumption: "Malwa is the decisive battleground",
    challengeQuestion: "What if AAP retains Malwa strength and the path to 59 runs through Majha and Doaba?",
  },
  {
    number: 6,
    assumption: "Social media and digital outreach will shift young voters",
    challengeQuestion: "What if ground-level mobilization matters more than digital for Punjab's electorate?",
  },
] as const;

// === WAR ROOM DECISION LOG ===
export const DECISION_LOG_FIELDS = [
  { field: "Decision ID", description: "Sequential identifier (e.g., DEC-2026-042)" },
  { field: "Date/Time", description: "When the decision was made" },
  { field: "Trigger", description: "What KPI alert or event prompted the decision" },
  { field: "Decision", description: "What was decided, in plain language" },
  { field: "Authority", description: "Who authorized the decision (name + role)" },
  { field: "Responsible", description: "Who is responsible for implementation" },
  { field: "Deadline", description: "By when must implementation be complete" },
  { field: "Success Metric", description: "How to measure if the decision achieved its intent" },
  { field: "Review Date", description: "When to assess impact" },
  { field: "Outcome", description: "Filled in after review — worked / partially worked / failed" },
] as const;

export const ACCOUNTABILITY_PRINCIPLES = [
  { number: 1, principle: "Single-point accountability", description: "Every decision has one named person responsible for implementation" },
  { number: 2, principle: "Deadline enforcement", description: "If implementation misses deadline by more than 48 hours without prior approval, it escalates one level automatically" },
  { number: 3, principle: "Outcome tracking", description: "Every decision is reviewed at next weekly meeting. Failed interventions analyzed for lessons learned" },
  { number: 4, principle: "No-blame culture", description: "Incorrect strategies based on best-available data are learning opportunities. Blame assigned only for negligence, inaction, or suppression of bad news" },
  { number: 5, principle: "Transparency", description: "Full decision log accessible to Campaign Director and State President. Weekly summary shared with all vertical heads" },
] as const;

// === GAPS & VERIFICATION NEEDS ===
export const KPI_FRAMEWORK_GAPS = [
  { item: "Current factional alignment within Punjab Congress", status: "VERIFICATION_NEEDED", actionRequired: "Map through MP1/MP3 research" },
  { item: "Pre-planned counter-alliance dossiers", status: "NOT YET DEVELOPED", actionRequired: "To be developed under MP3 (Competitor Intelligence)" },
  { item: "Actual escalation response times achievable by current PPCC structure", status: "VERIFICATION_NEEDED", actionRequired: "Depends on organizational capacity assessment (MP9)" },
  { item: "War room technology platform for decision logging", status: "VERIFICATION_NEEDED", actionRequired: "Technology selection under MP8" },
  { item: "Regional Coordinator availability for fortnightly deep-dives", status: "VERIFICATION_NEEDED", actionRequired: "Resource planning under MP9" },
] as const;

// ============================================================
// SEAT PROJECTION & MONTE CARLO SIMULATION DATA (from MP10-predictive-outcomes/models/seat-projection-montecarlo)
// ============================================================

export const MONTE_CARLO_SIMULATION = {
  // Simulation Metadata
  metadata: {
    documentationDate: "19 May 2026",
    source: "Pretrained knowledge (election forecasting methodology, Monte Carlo methods, Indian electoral analysis)",
    confidence: {
      methodology: "HIGH",
      correlationStructure: "MEDIUM",
      exactParameters: "LOW"
    },
    task: "T-MP10-MODL-002",
    dependencies: "T-MP10-MODL-001 (Vote Share Prediction) -- MET"
  },

  // Core Simulation Parameters
  parameters: {
    iterations: 10000,
    totalSeats: 117,
    majorityThreshold: 59,
    drawsPerIteration: 600,
    totalDraws: 6000000,
    performanceSeconds: 30,
    standardErrorThreshold: 0.005 // <0.5% standard error
  },

  // Algorithm Description
  algorithm: {
    description: "For each of 10,000 iterations: draw vote shares for each party from predicted distributions, apply correlation adjustments, apply independent candidate perturbation, determine winner by plurality, count total seats per party, flag majority/single-largest/hung assembly outcomes",
    steps: [
      "Draw vote shares for each party from predicted distributions",
      "Apply correlation adjustments",
      "Apply independent candidate perturbation",
      "Determine winner (highest vote share, even if <25%)",
      "Record winning party and margin",
      "Count total seats per party across all 117 constituencies",
      "Flag: majority (59+), single largest party, hung assembly"
    ]
  },

  // Vote Share Distribution Sampling Parameters
  voteShareDistribution: {
    safe: { marginThreshold: ">15%", standardDeviation: "2-3%", description: "Predicted margin >15%" },
    competitive: { marginThreshold: "5-15%", standardDeviation: "3-5%", description: "Margin 5-15%" },
    tossup: { marginThreshold: "<5%", standardDeviation: "5-7%", description: "Margin <5%" }
  },

  // Skewness Adjustment
  skewnessAdjustment: "In seats where one party dominates, the distribution is right-skewed for the leader (upside capped) and left-skewed for trailing parties (floor effects near historical minimums)",

  // Correlation Modeling
  correlationModeling: {
    geographicClustering: { strength: "0.3-0.5", mechanism: "Neighboring constituencies within same district move together (shared local issues, campaign effects)" },
    casteRegionCorrelation: { strength: "0.2-0.4", mechanism: "Constituencies with similar caste composition (e.g., high SC, high Jat Sikh) show correlated swings" },
    regionalWave: { strength: "Draw single wave factor", mechanism: "State-wide anti-incumbency or wave effect applies uniform shift with region-specific scaling" },
    partySpecificCorrelation: { strength: "0.2-0.3", mechanism: "Same-party constituencies share correlated upside/downside from statewide perception shifts" }
  },

  // Regional Wave Factor Scaling
  regionalWaveScaling: {
    malwa: { seats: 69, waveIntensity: 1.0, contestStructure: "3-way (AAP-Congress-SAD), BJP emerging as 4th in some seats", keyDynamics: "Highest volatility; farmer distress dominant; Congress historical stronghold pre-2022" },
    majha: { seats: 25, waveIntensity: 0.8, contestStructure: "4-way (AAP-Congress-SAD-BJP), strong BJP in urban", keyDynamics: "Border belt issues; drug menace salient; religious sentiment; SAD retains pockets" },
    doaba: { seats: 23, waveIntensity: 0.7, contestStructure: "3-4 way with BSP as significant factor in SC-reserved seats", keyDynamics: "Highest SC concentration; BSP splits Dalit vote; NRI influence; 8 SC-reserved seats" }
  },

  // Regional Contest Structures
  regionalContestStructures: [
    { region: "Malwa", seats: 69, typicalContest: "3-way (AAP-Congress-SAD)", keyDynamics: "Highest volatility; farmer distress dominant; Congress historical stronghold pre-2022" },
    { region: "Majha", seats: 25, typicalContest: "4-way (AAP-Congress-SAD-BJP)", keyDynamics: "Border belt issues; drug menace salient; religious sentiment; SAD retains pockets" },
    { region: "Doaba", seats: 23, typicalContest: "3-4 way with BSP factor", keyDynamics: "Highest SC concentration; BSP splits Dalit vote; NRI influence; 8 SC-reserved seats" }
  ],

  // Independent Candidate Modeling
  independentCandidateModel: {
    baselineVoteShare: "3-12% in Punjab",
    highIndependentSeats: "Rural Malwa seats with >10% independent share",
    spoilerEffect: "Votes split among community/caste groups - Jat Sikh independents draw from SAD/AAP, Dalit independents draw from Congress/BSP",
    verificationNeeded: "Constituency-level independent vote share history for 2012, 2017, 2022 elections"
  },

  // Win Probability Map Thresholds
  winProbabilityThresholds: [
    { category: "safe", probabilityRange: ">70%", color: "bg-blue-800", description: "Dark blue - safe seats" },
    { category: "leaning", probabilityRange: "50-70%", color: "bg-blue-400", description: "Light blue - leaning" },
    { category: "tossup", probabilityRange: "30-50%", color: "bg-yellow-400", description: "Yellow - toss-up" },
    { category: "reach", probabilityRange: "15-30%", color: "bg-red-300", description: "Light red - reach" },
    { category: "unlikely", probabilityRange: "<15%", color: "bg-red-600", description: "Dark red - unlikely" }
  ],

  // Historical Election Swings
  historicalSwings: [
    { election: "2012", congressSwing: "-5.3%", winnerSwing: "+3.1%", seats: null, note: "SAD-BJP won close election, SAD-BJP retained" },
    { election: "2017", congressSwing: "+9.8%", winnerSwing: "Congress wave", seats: 77, note: "Massive anti-SAD-BJP sentiment" },
    { election: "2022", congressSwing: "-18.5%", winnerSwing: "+32%", seats: 18, note: "Unprecedented AAP sweep" }
  ],

  // Punjab Swing Volatility Note
  swingVolatilityNote: "Punjab's swing volatility is extreme by Indian standards. A 5% statewide swing in vote share can translate to 20-40 seats in Punjab due to the multi-cornered structure.",

  // Reserved Seat Dynamics
  reservedSeatDynamics: {
    total: 34,
    percentage: 29,
    congressWon2017: 14,
    bspVoteShareReserved: "8-15%",
    bspVoteShareGeneral: "2-5%",
    note: "Highest proportion of SC-reserved seats in India",
    doabaSCSeats: 8,
    scSeatsInDoaba: 10,
    verificationNeeded: "Reserved/general classification for all 117 seats with 2022 results"
  },

  // Simulation Output Metrics
  simulationOutputMetrics: [
    { metric: "Mean projected seats", description: "Average Congress seats across all iterations" },
    { metric: "Median projected seats", description: "50th percentile (robust to outlier iterations)" },
    { metric: "80% confidence interval", description: "10th to 90th percentile range" },
    { metric: "95% confidence interval", description: "2.5th to 97.5th percentile range" },
    { metric: "P(Congress >= 59)", description: "Probability of achieving majority" },
    { metric: "P(Congress is single largest)", description: "Probability Congress wins more seats than any other party" },
    { metric: "P(Hung assembly)", description: "Probability no party reaches 59 seats" },
    { metric: "P(AAP >= 59)", description: "Probability of AAP majority (baseline competitor scenario)" }
  ],

  // Confidence Interval Ranges (placeholder - to be populated after simulation)
  confidenceIntervalRanges: {
    description: "Values will be populated once MODL-001 predictions are finalized and simulation is executed",
    levels: [
      { level: "50% (IQR)", congressRange: "X - Y", aapRange: "A - B", sadBjpRange: "S - T" },
      { level: "80%", congressRange: "X' - Y'", aapRange: "A' - B'", sadBjpRange: "S' - T'" },
      { level: "95%", congressRange: "X'' - Y''", aapRange: "A'' - B''", sadBjpRange: "S'' - T''" }
    ]
  },

  // Seat Category Definitions
  seatCategories: {
    tippingPoint: "The Nth seat that gives Congress its 59th win (varies per iteration; recorded across all iterations to find most frequently tipping constituencies)",
    swingSeats: { probabilityRange: "30-70%", priority: "HIGHEST", description: "Where campaign investment has highest marginal return" },
    surgeSeats: { probabilityRange: "<30%", priority: "REACH", description: "Below 30% but small statewide swing could make competitive - 'reach' targets" }
  },

  // Tipping-Point Analysis
  tippingPointAnalysis: {
    description: "Identifies marginal seats that flip outcome between Congress majority, single-largest-party, and hung assembly - highest-priority constituencies for resource allocation",
    congressTippingPoint: "The Nth seat that gives Congress its 59th win",
    swingSeats: "Congress win probability 30-70% - highest marginal return on campaign investment",
    surgeSeats: "Congress currently below 30% but small statewide swing could make competitive - 'reach' targets"
  },

  // Scenario Comparison
  scenarioComparisons: [
    { scenario: "Current baseline", description: "Current polling averages" },
    { scenario: "+2% statewide swing to Congress", description: "Favorable shift in voter mood" },
    { scenario: "+5% swing", description: "Significant positive momentum" },
    { scenario: "anti-AAP wave", description: "Wave effect against incumbent" },
    { scenario: "Status quo", description: "No change in current trajectory" }
  ],

  // Validation Protocol
  validationProtocol: {
    backtestingElections: [
      { election: "2022", description: "Feed 2021-era data and verify model would have predicted AAP's sweep" },
      { election: "2017", description: "Feed 2016-era data and verify prediction of Congress's 77-seat win" }
    ],
    acceptableAccuracy: "MAE < 5 seats for winning party at 80% confidence level",
    sensitivityAnalysis: "Vary key inputs (anti-incumbency index, survey vote share, candidate strength) by +/- 1 SD and record impact on projected seat count"
  },

  // Recalibration Schedule
  recalibration: {
    frequency: "Weekly during peak campaign season (Nov 2026 - Feb 2027)",
    triggers: [
      "Every new survey wave triggers a full re-simulation",
      "Candidate announcements (especially defections) trigger constituency-level updates",
      "Major events (scandals, policy announcements) are coded as input shocks"
    ]
  },

  // Multi-Cornered Contest Mechanics
  multiCorneredContest: {
    winnerVoteShareRange: "28-35%",
    partyCount: "4+ credible candidates",
    threshold: "Simple plurality (winner takes all with highest share regardless of threshold)",
    note: "Correctly captures phenomenon where party can win with 30% in 5-way split but needs 45%+ in straight fight"
  },

  // Punjab-Specific Challenges
  punjabChallenges: {
    multiCorneredContests: "Most constituencies have 4-5 credible candidates (AAP, Congress, SAD, BJP, BSP, sometimes strong independents)",
    regionalVariation: "Malwa (69), Majha (25), Doaba (23) have structurally different contest geometries",
    highVolatility: "Anti-incumbency produces large discontinuous swings (AAP: 0 to 92 seats in 2022)",
    independentSpoilers: "Strong independent candidates in rural Jat Sikh constituencies who can swing outcomes by splitting specific caste/community votes"
  },

  // Correlation Matrix Implementation
  correlationMatrixImplementation: {
    size: "117x117 (one row per constituency)",
    construction: "Geographic adjacency + caste composition similarity",
    decomposition: "Cholesky decomposition is O(n^3) but only computed once per simulation setup",
    efficiencyNote: "With 117 constituencies and 5-6 party draws each, each iteration involves ~600 random draws. Total: ~6 million draws per simulation run. Feasible in <30 seconds in Python/NumPy with vectorized operations."
  },

  // Output Storage
  outputStorage: {
    description: "Each iteration produces a 117-element winner vector. Storing all 10,000 winner vectors enables post-hoc analysis",
    exampleAnalysis: "Which seats flip together most often?"
  },

  // Strategic Integration
  strategicIntegration: [
    { output: "P(Congress >= 59)", use: "Overall campaign viability assessment; resource scaling decision" },
    { output: "Tipping-point seats", use: "Priority list for candidate deployment, campaign events, ad spending" },
    { output: "Win probability map", use: "Visual tool for campaign leadership; identifies geographic gaps" },
    { output: "Scenario analysis", use: "Tests impact of strategic choices (alliance with BSP? candidate swaps?)" },
    { output: "Swing seat list", use: "Micro-targeting priority; ground operation resource allocation" },
    { output: "Confidence intervals", use: "Manages expectations; prepares contingency plans for hung assembly" }
  ],

  // Visualization Suite
  visualizationSuite: [
    { chart: "Seat Distribution Histogram", description: "X-axis: seats (0-117), Y-axis: frequency, overlaid distributions for Congress/AAP/SAD/BJP, vertical line at 59 seats majority threshold" },
    { chart: "Win Probability Map", description: "Punjab map with 117 constituencies color-coded by Congress win probability with regional boundaries overlaid" },
    { chart: "Seat Range Table", description: "Confidence levels formatted for campaign leadership presentation" },
    { chart: "Scenario Comparison Bar Chart", description: "Side-by-side bars for current baseline, +2% swing, +5% swing, anti-AAP wave, status quo" }
  ]
} as const;
