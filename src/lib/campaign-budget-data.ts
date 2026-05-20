// Campaign Budget & Resource Allocation Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/g38-campaign-budget-resource-allocation.md

import type {
  PartyPerceptionMetrics,
  LeaderPerceptionMetrics,
  IssueOwnershipAnalysis,
  PositioningQuadrant,
  VoterSegmentClassification,
  MediaToneAnalysis,
  DeraLandscape,
  CampaignObjectives,
  RegionalVoteShift,
  VictoryPathway,
  ResourceAllocation,
  TimelinePhase,
  MilestoneCheckpoint,
  ContingencyScenario,
  StakeholderAlignment,
  MasterNarrative,
  SubNarrative,
  EmotionalArchitecture,
  MessageHierarchy,
  NarrativeTesting,
} from '@/types/perception-audit-types';

// ==========================================
// RESOURCE LANDSCAPE
// ==========================================

export const aapSpendingEnvelope: Record<string, unknown> = {
  "2022Actual": "Rs 170-250 crore",
  "2027Projected": {
    centralPartyFund: { low: "Rs 60 crore", high: "Rs 120 crore", note: "Delhi's continued financial muscle" },
    stateFunding: { low: "Rs 30 crore", high: "Rs 60 crore", note: "Ongoing schemes = goodwill capital" },
    individualDonors: { low: "Rs 50 crore", high: "Rs 120 crore", note: "Electoral bonds + digital, expanded donor base" },
    supporterNetworks: { low: "Rs 10 crore", high: "Rs 50 crore", note: "AAP's global supporters growing" },
    businessNetwork: { low: "Rs 20 crore", high: "Rs 50 crore", note: "Construction, transport, pharma" },
  },
  "total2027": { low: "Rs 260 crore", high: "Rs 400 crore" },
  upperBound: "Rs 400-500 crore if Delhi sends empowerment fund, diaspora expands, BJP-friendly donors back AAP",
};

export const congressSpendingEnvelope: Record<string, unknown> = {
  "2022Actual": "Rs 185-310 crore",
  "2027Projected": {
    centralPartyAllocation: { low: "Rs 80 crore", high: "Rs 150 crore", note: "Rahul Gandhi's political priority" },
    punjabPccFundraising: { low: "Rs 40 crore", high: "Rs 80 crore", note: "State-level donor base" },
    candidateSelfFunding: { low: "Rs 40 crore", high: "Rs 100 crore", note: "Wealthy candidates supplement" },
    nriSupporterNetworks: { low: "Rs 10 crore", high: "Rs 40 crore", note: "Congress's historic strength" },
    businessHouses: { low: "Rs 15 crore", high: "Rs 40 crore", note: "Sikh businessmen, industry" },
  },
  realisticEstimate: "Rs 250-350 crore (midpoint of range)",
};

export const bjpSpending: Record<string, unknown> = {
  "2027Projected": {
    centralPartyFund: { low: "Rs 60 crore", high: "Rs 100 crore" },
    stateBjpUnit: { low: "Rs 15 crore", high: "Rs 25 crore" },
    ndaAlignedDonors: { low: "Rs 10 crore", high: "Rs 20 crore" },
  },
  total: { low: "Rs 85 crore", high: "Rs 145 crore" },
};

export const resourceGapAnalysis = [
  { scenario: "Conservative", congress: "Rs 250 crore", aap: "Rs 260 crore", gap: "Rs 10 crore (AAP +10%)" },
  { scenario: "Base Case", congress: "Rs 300 crore", aap: "Rs 320 crore", gap: "Rs 20 crore (AAP +7%)" },
  { scenario: "Adverse", congress: "Rs 250 crore", aap: "Rs 400 crore", gap: "Rs 150 crore (AAP +60%)" },
];

// ==========================================
// MASTER ALLOCATION TABLE
// ==========================================

export const masterBudgetAllocation = [
  { category: "Field Operations", percentage: 32, amount: "Rs 112 crore", rationale: "Highest ROI - booth-level wins elections" },
  { category: "Media & Advertising", percentage: 25, amount: "Rs 87.5 crore", rationale: "Narrative dominance, urban/middle-class reach" },
  { category: "Digital & Social Media", percentage: 12, amount: "Rs 42 crore", rationale: "Cost-effective, youth-skewing, measurable" },
  { category: "Events & Rallies", percentage: 10, amount: "Rs 35 crore", rationale: "Visibility, enthusiasm generation, media coverage" },
  { category: "Staff & Infrastructure", percentage: 8, amount: "Rs 28 crore", rationale: "Organizational backbone" },
  { category: "Security & Compliance", percentage: 5, amount: "Rs 17.5 crore", rationale: "ECI compliance, physical safety" },
  { category: "Contingency", percentage: 8, amount: "Rs 28 crore", rationale: "Crisis response, opportunity capture" },
];

export const fieldOperationsBreakdown = [
  { subCategory: "Booth-level workers", percentage: 26, amount: "Rs 91 crore", note: "23,000 booths × Rs 15,000 honoraria" },
  { subCategory: "Booth-level materials", percentage: 8, amount: "Rs 9 crore", note: "Banners, caps, pamphlets" },
  { subCategory: "Transport & logistics", percentage: 12, amount: "Rs 4.2 crore", note: "Worker movement on polling day" },
  { subCategory: "Voter ID drives", percentage: 5, amount: "Rs 1.8 crore", note: "Pre-election ground work" },
  { subCategory: "Feedback & data systems", percentage: 3, amount: "Rs 1 crore", note: "Mobile reporting, booth captains" },
];

export const mediaAdvertisingBreakdown = [
  { subCategory: "TV Advertising", percentage: 35, amount: "Rs 30.6 crore", note: "Punjabi channels, prime time" },
  { subCategory: "Print Advertising", percentage: 20, amount: "Rs 17.5 crore", note: "Punjabi Tribune, Jagbani, Dainik Bhaskar" },
  { subCategory: "Outdoor/Hoardings", percentage: 25, amount: "Rs 21.9 crore", note: "Major crossings, rural markets" },
  { subCategory: "Radio/Audio", percentage: 8, amount: "Rs 7 crore", note: "Punjabi FM stations, rural reach" },
  { subCategory: "PR & Media Relations", percentage: 7, amount: "Rs 6.1 crore", note: "Earned media, press releases" },
  { subCategory: "Content Production", percentage: 5, amount: "Rs 4.4 crore", note: "Videos, ads, creative" },
];

export const digitalSocialBreakdown = [
  { subCategory: "Meta Platforms", percentage: 30, amount: "Rs 12.6 crore", note: "Facebook + Instagram" },
  { subCategory: "YouTube", percentage: 20, amount: "Rs 8.4 crore", note: "Video content, TrueView ads" },
  { subCategory: "WhatsApp", percentage: 15, amount: "Rs 6.3 crore", note: "Paid messaging + admin" },
  { subCategory: "X/Twitter", percentage: 10, amount: "Rs 4.2 crore", note: "Media amplification, elite narrative" },
  { subCategory: "Google Ads", percentage: 10, amount: "Rs 4.2 crore", note: "Issue-based search targeting" },
  { subCategory: "Influencer/KOL", percentage: 10, amount: "Rs 4.2 crore", note: "Punjabi influencers, religious figures" },
  { subCategory: "Digital creative", percentage: 5, amount: "Rs 2.1 crore", note: "Content creation" },
];

// ==========================================
// SEAT CATEGORIZATION FOR BUDGETING
// ==========================================

export const seatCategorization = [
  { category: "FLIP LIST", seats: 45, description: "Lost by <5% margin in 2022, must win", priorityWeight: "2.5× base" },
  { category: "DEFEND LIST", seats: 18, description: "Won by Congress in 2022, must retain", priorityWeight: "1.5× base" },
  { category: "PRIORITY LIST", seats: 20, description: "Winnable with investment, not currently held", priorityWeight: "2.0× base" },
  { category: "HARD CORE", seats: 20, description: "Safe/strong Congress seats, minimal investment", priorityWeight: "0.5× base" },
  { category: "OUTSIDE", seats: 14, description: "Deeply problematic, minimal ROI", priorityWeight: "0.25× base" },
];

export const basePerSeatBudget = [
  { category: "FLIP LIST", basePerSeat: "Rs 7.5 crore" },
  { category: "DEFEND LIST", basePerSeat: "Rs 4.5 crore" },
  { category: "PRIORITY LIST", basePerSeat: "Rs 6.0 crore" },
  { category: "HARD CORE", basePerSeat: "Rs 1.5 crore" },
  { category: "OUTSIDE", basePerSeat: "Rs 0.75 crore" },
];

// ==========================================
// ROI OPTIMIZATION
// ==========================================

export const investmentRoiRanking = [
  { rank: 1, investment: "Booth-level worker honoraria", roiScore: 9.5, timeHorizon: "Medium", note: "Direct voter contact, turnout help" },
  { rank: 2, investment: "Voter ID / contact drives", roiScore: 9.0, timeHorizon: "Long", note: "Builds lasting database" },
  { rank: 3, investment: "WhatsApp voter contact", roiScore: 8.5, timeHorizon: "Short-Medium", note: "Cheap, direct, measurable" },
  { rank: 4, investment: "Micro-targeted digital ads", roiScore: 8.0, timeHorizon: "Short", note: "Audience precision" },
  { rank: 5, investment: "Local religious/community leaders", roiScore: 7.5, timeHorizon: "Medium", note: "Caste-community vote consolidation" },
  { rank: 6, investment: "Booth-level materials", roiScore: 7.0, timeHorizon: "Medium", note: "Visibility without persuasion" },
  { rank: 7, investment: "Radio (Punjabi FM)", roiScore: 6.5, timeHorizon: "Short", note: "Underutilized, good rural reach" },
  { rank: 8, investment: "District-level rallies", roiScore: 6.0, timeHorizon: "Medium", note: "Enthusiasm + earned media" },
  { rank: 9, investment: "Print advertising", roiScore: 5.5, timeHorizon: "Short", note: "Declining reach, elderly only" },
  { rank: 10, investment: "TV advertising", roiScore: 5.0, timeHorizon: "Short", note: "Expensive, broad reach, low precision" },
  { rank: 11, investment: "Mega rallies", roiScore: 4.5, timeHorizon: "Short", note: "High cost, symbolic value" },
  { rank: 12, investment: "Influencer partnerships", roiScore: 4.0, timeHorizon: "Medium", note: "Variable quality, risk of backlash" },
  { rank: 13, investment: "Hoardings/outdoor", roiScore: 3.5, timeHorizon: "Short", note: "Visual presence, no targeting" },
];

export const channelRoiComparison = [
  { channel: "Field (booth workers)", costPerVoter: "Rs 8-12", persuasionRate: "High (direct interaction)", turnoutImpact: "+8-12%", overallRoi: "BEST" },
  { channel: "Digital (meta/Google)", costPerVoter: "Rs 3-6", persuasionRate: "Moderate (awareness)", turnoutImpact: "+2-4%", overallRoi: "GOOD" },
  { channel: "TV", costPerVoter: "Rs 15-25", persuasionRate: "Low-Moderate (brand)", turnoutImpact: "+1-2%", overallRoi: "POOR" },
  { channel: "Print", costPerVoter: "Rs 20-35", persuasionRate: "Low (declining readership)", turnoutImpact: "+0-1%", overallRoi: "AVOID" },
  { channel: "Radio", costPerVoter: "Rs 6-10", persuasionRate: "Moderate", turnoutImpact: "+3-5%", overallRoi: "GOOD" },
  { channel: "Events/Rallies", costPerVoter: "Rs 50-100", persuasionRate: "Moderate-High (live)", turnoutImpact: "+4-6%", overallRoi: "MODERATE" },
];

// ==========================================
// PHASE-BASED INVESTMENT STRATEGY
// ==========================================

export const phaseAllocation = [
  {
    phase: "Phase 1: Foundation",
    timeline: "Now to December 2026",
    budgetPercentage: 30,
    budgetAmount: "Rs 105 crore",
    primaryFocus: ["Voter ID drives and database building", "Booth-level worker recruitment and training", "Constituency-level infrastructure", "Digital infrastructure setup", "NRI fundraising campaigns"],
    allocation: {
      field: { percentage: 45, amount: "Rs 47.3 crore" },
      digital: { percentage: 20, amount: "Rs 21 crore" },
      staffInfra: { percentage: 25, amount: "Rs 26.3 crore" },
      media: { percentage: 10, amount: "Rs 10.5 crore" },
    },
  },
  {
    phase: "Phase 2: Build-Up",
    timeline: "January - February 2027 Week 2",
    budgetPercentage: 45,
    budgetAmount: "Rs 157.5 crore",
    primaryFocus: ["Voter contact programs", "Local advertising", "Events and rallies", "Campaign messaging rollout", "Early voting push"],
    allocation: {
      field: { percentage: 35, amount: "Rs 55.1 crore" },
      media: { percentage: 30, amount: "Rs 47.3 crore" },
      events: { percentage: 18, amount: "Rs 28.4 crore" },
      digital: { percentage: 12, amount: "Rs 18.9 crore" },
      contingency: { percentage: 5, amount: "Rs 7.9 crore" },
    },
  },
  {
    phase: "Phase 3: Acceleration",
    timeline: "Final 2 Weeks",
    budgetPercentage: 25,
    budgetAmount: "Rs 87.5 crore",
    primaryFocus: ["Maximum booth-level presence", "High-visibility rallies", "Last-mile digital advertising", "GOTV operations", "Rapid response to opposition attacks"],
    allocation: {
      field: { percentage: 40, amount: "Rs 35 crore" },
      media: { percentage: 25, amount: "Rs 21.9 crore" },
      events: { percentage: 15, amount: "Rs 13.1 crore" },
      digital: { percentage: 10, amount: "Rs 8.8 crore" },
      contingency: { percentage: 10, amount: "Rs 8.8 crore" },
    },
  },
];

// ==========================================
// RESOURCE GAP MITIGATION
// ==========================================

export const gapFillingPriorities = [
  { priority: 1, action: "Request additional central allocation", potentialAmount: "Rs 30-60 crore", timeline: "Weeks 1-4" },
  { priority: 2, action: "NRI fundraising campaign", potentialAmount: "Rs 20-50 crore", timeline: "Weeks 2-8" },
  { priority: 3, action: "Wealthy candidate self-funding increase", potentialAmount: "Rs 15-40 crore", timeline: "Weeks 2-12" },
  { priority: 4, action: "Corporate donor outreach", potentialAmount: "Rs 10-25 crore", timeline: "Weeks 4-12" },
  { priority: 5, action: "Reduce OUTSIDE seat allocation", potentialAmount: "Rs 3-5 crore", timeline: "Immediate" },
  { priority: 6, action: "Defer HARD CORE seat investment", potentialAmount: "Rs 10-15 crore", timeline: "Immediate" },
  { priority: 7, action: "Reduce contingency below 8%", potentialAmount: "Rs 10-15 crore", timeline: "Last resort" },
];

export const budgetCutPriorities = [
  {
    tier: 1,
    items: ["Mega rallies (reduce to 1-2)", "Print advertising", "Hoardings in Tier 2-3 markets", "Influencer partnerships"],
    savings: "Rs 30-45 crore",
  },
  {
    tier: 2,
    items: ["TV advertising reduced to 50%", "Radio reduced to essential only", "Some HARD CORE seat allocations eliminated"],
    savings: "Rs 28-33 crore",
  },
  {
    tier: 3,
    items: ["Field worker honoraria reduced from Rs 15,000 to Rs 10,000", "Central campaign staff reduced", "Regional offices in non-Flip zones closed"],
    savings: "Rs 38-55 crore",
    riskNote: "Last resort - impacts ground game",
  },
];

// ==========================================
// ECI EXPENDITURE LIMITS
// ==========================================

export const eciExpenditureLimits = [
  {
    category: "Large states (Punjab = 117 seats)",
    "2022Limit": "Rs 28-30 lakh per candidate",
    "2027Projected": "Rs 30-35 lakh per candidate (inflation-adjusted)",
  },
  {
    category: "Authorized political party expenditure",
    note: "Separate from candidate limit, not included in candidate cap",
  },
];

export const candidateSelfFundingExpectations = [
  { seatType: "FLIP List (top 15)", expectation: "Rs 2-5 crore", includes: "Additional field staff, local advertising, personal voter contact" },
  { seatType: "FLIP List (remaining 30)", expectation: "Rs 1-2 crore", includes: "Additional booth workers, local events" },
  { seatType: "DEFEND List", expectation: "Rs 50 lakh - 1 crore", includes: "Protection spending, incumbent advantage" },
  { seatType: "PRIORITY List", expectation: "Rs 1-3 crore", includes: "Investment in new territory" },
];

// ==========================================
// FUNDRAISING MILESTONES
// ==========================================

export const monthlyFundraisingTargets = [
  { month: "June 2026", target: "Rs 20 crore", cumulative: "Rs 20 crore", primaryFocus: "NRI launch + seed donors" },
  { month: "July 2026", target: "Rs 30 crore", cumulative: "Rs 50 crore", primaryFocus: "Corporate outreach begins" },
  { month: "August 2026", target: "Rs 40 crore", cumulative: "Rs 90 crore", primaryFocus: "Major donor drives" },
  { month: "September 2026", target: "Rs 40 crore", cumulative: "Rs 130 crore", primaryFocus: "Mid-campaign push" },
  { month: "October 2026", target: "Rs 35 crore", cumulative: "Rs 165 crore", primaryFocus: "Pre-festival fundraising" },
  { month: "November 2026", target: "Rs 50 crore", cumulative: "Rs 215 crore", primaryFocus: "Festival season + NRI surge" },
  { month: "December 2026", target: "Rs 45 crore", cumulative: "Rs 260 crore", primaryFocus: "Year-end giving" },
  { month: "January 2027", target: "Rs 40 crore", cumulative: "Rs 300 crore", primaryFocus: "Final push begins" },
  { month: "February 2027 (Wks 1-3)", target: "Rs 35 crore", cumulative: "Rs 335 crore", primaryFocus: "Last-minute contributions" },
  { month: "Mid-campaign contingency", target: "Rs 15 crore", cumulative: "Rs 350 crore", primaryFocus: "Central party + emergency" },
];

// ==========================================
// NRI FUNDRAISING POTENTIAL
// ==========================================

export const nriFundraisingPotential = [
  { market: "Canada (Ontario, BC)", estimatedDiaspora: "400,000+ Punjabi Canadians", avgDonation: "Rs 15,000-50,000", potential: "Rs 20-40 crore", approach: "Community organizations, gurdwaras" },
  { market: "UK (Southall, Birmingham)", estimatedDiaspora: "200,000+ Punjabi Brits", avgDonation: "Rs 10,000-30,000", potential: "Rs 10-20 crore", approach: "Punjabi media, UK Punjab Congress" },
  { market: "USA", estimatedDiaspora: "100,000+ Punjabi Americans", avgDonation: "Rs 20,000-75,000", potential: "Rs 10-20 crore", approach: "Digital campaigns, professional network" },
  { market: "Australia", estimatedDiaspora: "50,000+", avgDonation: "Rs 15,000-40,000", potential: "Rs 3-8 crore", approach: "Community outreach" },
];

// ==========================================
// WHAT NOT TO WASTE MONEY ON
// ==========================================

export const wastefulInvestments = [
  { investment: "National TV channels", reason: "Punjabi-speaking audience watches regional/satellite", alternative: "Regional Punjabi TV + cable" },
  { investment: "Full-page newspaper ads in English papers", reason: "Punjab voters read Punjabi press", alternative: "Punjabi print + WhatsApp forwards" },
  { investment: "Celebrity endorsements", reason: "Expensive, may alienate regional sentiment", alternative: "Local religious/community figures" },
  { investment: "Generic voter outreach", reason: "Low conversion", alternative: "Caste/community-specific messaging" },
  { investment: "Bulk SMS spam", reason: "Treats voters as digits", alternative: "Personalized WhatsApp + volunteer calls" },
  { investment: "Expensive campaign merchandise", reason: "Low utility, high cost", alternative: "Practical items (umbrellas, water bottles)" },
  { investment: "Rallies in non-Flip/Priority seats", reason: "Zero marginal return", alternative: "Reallocate to competitive seats" },
  { investment: "Digital ads without audience research", reason: "Wasted impressions", alternative: "Micro-targeting by caste, age, region" },
];
