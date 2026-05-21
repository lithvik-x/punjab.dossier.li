// Election Intelligence Data
// Derived from: enhanced-batch-*.md files (Batch 1: AC001-AC009)
// Last Updated: May 21, 2026

import type { ElectionIntelligence, PriorityTierSummary, RegionIntelligenceSummary } from "@/types/constituency-types";

// Batch 1: Majha Region (AC001-AC009)
export const batch1Intelligence: ElectionIntelligence[] = [
  {
    acId: "AC001",
    acNumber: 1,
    name: "Sujanpur",
    district: "Pathankot",
    region: "Majha",
    type: "General",
    lokSabha: "Gurdaspur",
    electionResults: [
      { year: 2022, winner: "Naresh Puri", party: "INC", votePercentage: "~40.2%", margin: "4,636 votes vs Dinesh Singh (BJP)" },
      { year: 2017, winner: "Naresh Puri", party: "INC", votePercentage: "~40% (est)", margin: "~3,200 votes" },
      { year: 2012, winner: "Naresh Puri", party: "INC", margin: "-" },
    ],
    totalElectors: "1,70,309",
    voterTurnout: "75.94%",
    casteComposition: [
      { category: "SC", percentage: "28-32%" },
      { category: "Jat Sikh", percentage: "22%" },
      { category: "Upper Caste", percentage: "18%" },
      { category: "OBC", percentage: "15%" },
      { category: "Minority", percentage: "5%" },
      { category: "Other", percentage: "~11%" },
    ],
    topIssues: [
      { issue: "Drug Menace", description: "Every family affected; Pathankot Police conducting awareness drives" },
      { issue: "Unemployment", description: "Youth unemployment ~19.3% in Punjab; lack of industrial development" },
      { issue: "Border Security", description: "Proximity to Pakistan; smuggling and infiltration concerns" },
    ],
    congressPosition: "Congress holds this seat with three-term MLA Naresh Puri. Margin of 4,636 is comfortable but requires attention to youth concerns and agrarian distress.",
    recommendedCandidate: {
      profile: "Strong rural connect, agricultural background",
      caste: "Jat Sikh or Rajput preferred",
      keyQualities: ["Border area awareness", "Agricultural background", "Accessibility to villagers"],
    },
    attackLines: [
      { issue: "Drug Crisis", message: "Drugs flow despite AAP's claims - families suffer", audience: "All voters" },
      { issue: "Broken Promises", message: "₹1000/month for women - where is the money?", audience: "Women, urban" },
      { issue: "Infrastructure", message: "Rural roads, power still poor under AAP", audience: "Rural voters" },
    ],
    margin: 4636,
    party: "INC",
    priorityTier: "HIGH",
    dataGaps: ["2012 election results", "Booth-level vote distribution", "MLA performance assessment"],
    crossReferences: ["AC002-Bhoa (SC)", "AC004-Gurdaspur", "AC006-Qadian"],
    strategicImplications: [
      "Hold strategy: Margin allows for candidate innovation",
      "Youth vote: 19.3% unemployment is rallying cry",
      "Border narrative: Security concerns create natural Congress-BJP tactical voting",
    ],
    visualizationRecommendations: ["Line chart for 2012-2022 trend", "MarginGauge for threshold comparison", "PieChart for caste composition"],
    uiComponentSpecs: ["ElectionResultCard", "CasteDonutChart", "IssueHeatMap", "StrategyCard"],
  },
  {
    acId: "AC002",
    acNumber: 2,
    name: "Bhoa (SC)",
    district: "Pathankot",
    region: "Majha",
    type: "SC",
    lokSabha: "Gurdaspur",
    electionResults: [
      { year: 2022, winner: "Lal Chand", party: "AAP", votePercentage: "~43%", margin: "Won vs Joginder Pal (INC) - 67,865 votes" },
    ],
    totalElectors: "182,915",
    casteComposition: [
      { category: "SC", percentage: "65-70% (dominant)" },
      { category: "Jat Sikh", percentage: "25%" },
      { category: "OBC", percentage: "12%" },
      { category: "Upper Caste", percentage: "10%" },
      { category: "Minority", percentage: "8%" },
    ],
    topIssues: [
      { issue: "Employment", description: "MGNREGA piece rates, government jobs" },
      { issue: "Drug Menace", description: "SC youth disproportionately affected" },
      { issue: "Education", description: "Scholarships for SC students" },
    ],
    congressPosition: "AAP HOLD - FLIPPED FROM CONGRESS IN 2022. Congress needs strong SC candidate with grassroots connect to reclaim this seat.",
    recommendedCandidate: {
      profile: "Prominent SC leader, social worker",
      caste: "Must be from SC community",
      keyQualities: ["Strong social base", "Worker connect", "Dedicated to Dalit rights"],
    },
    attackLines: [
      { issue: "SC Welfare", message: "SC welfare schemes not reaching beneficiaries", audience: "SC voters" },
      { issue: "Caste Discrimination", message: "Caste discrimination still prevalent despite claims", audience: "SC voters" },
      { issue: "Economic Weakness", message: "SC communities remain economically weak", audience: "SC voters" },
    ],
    margin: -67865,
    party: "AAP",
    priorityTier: "RECOVERY",
    dataGaps: ["2017, 2012 results", "Dalit subgroups breakdown", "MGNREGA implementation quality"],
    crossReferences: ["AC005-Dina Nagar (SC)", "AC008-Sri Hargobindpur (SC)", "Batch 2 AC011-Ajnala"],
    strategicImplications: [
      "Flip opportunity: Right candidate can reclaim",
      "Symbolic victory: Reclaiming SC seat sends message",
      "Candidate quality: Cannot be won with weak candidate",
    ],
    visualizationRecommendations: ["FlipStatusBadge", "DemographicCard for SC population", "StackedBarChart for caste"],
    uiComponentSpecs: ["AlertBanner (red)", "DominantCasteCard", "RequirementChecklist", "IssueCasteMatrix"],
  },
  {
    acId: "AC003",
    acNumber: 3,
    name: "Pathankot",
    district: "Pathankot",
    region: "Majha",
    type: "General",
    lokSabha: "Gurdaspur",
    electionResults: [
      { year: 2022, winner: "Ashwani Kumar Sharma", party: "BJP", votePercentage: "38.01%", margin: "7,759 votes" },
    ],
    totalElectors: "~1,65,000",
    voterTurnout: "74.4%",
    casteComposition: [
      { category: "Hindu", percentage: "~60%" },
      { category: "Sikh", percentage: "~35%" },
      { category: "Jat Sikh", percentage: "22%" },
      { category: "SC", percentage: "29%" },
      { category: "OBC", percentage: "15%" },
      { category: "Upper Caste", percentage: "20%" },
    ],
    topIssues: [
      { issue: "Tourism Infrastructure", description: "Gateway to Himalayas; untapped potential for Dalhousie, hill stations" },
      { issue: "Urban Services", description: "Power cuts (April 2026 Tribune reports), water supply, garbage management" },
      { issue: "Youth Unemployment", description: "No new industries; educated youth leaving" },
    ],
    congressPosition: "BJP HOLD. Urban Hindu vote split between BJP and AAP. Congress can make inroads by highlighting urban governance failures.",
    recommendedCandidate: {
      profile: "Urban professional, business community connect",
      caste: "Khatri, Arora, or Brahmin preferred",
      keyQualities: ["Development-focused", "City constituency experience"],
    },
    attackLines: [
      { issue: "Infrastructure", message: "Pathankot city infrastructure deteriorating under BJP", audience: "Urban voters" },
      { issue: "Tourism", message: "Tourism potential untapped despite being gateway to Himalayas", audience: "Business community" },
      { issue: "Jobs", message: "No new industries; youth exodus", audience: "Youth" },
    ],
    margin: 7759,
    party: "BJP",
    priorityTier: "MEDIUM",
    dataGaps: ["2017, 2012 results", "Tourism revenue data", "Youth unemployment exact figures"],
    crossReferences: ["Batch 2 (Majha)", "AC001-Sujanpur", "AC004-Gurdaspur"],
    strategicImplications: [
      "Urban Hindu vote split creates opportunity",
      "Tourism narrative: Development vs governance",
      "Business community could be alienated",
    ],
    visualizationRecommendations: ["UrbanRuralChart", "PotentialIndicator", "VoteSplitChart for Hindu-Sikh"],
    uiComponentSpecs: ["ServiceTrackerCard", "PerformanceGauge"],
  },
  {
    acId: "AC004",
    acNumber: 4,
    name: "Gurdaspur",
    district: "Gurdaspur",
    region: "Majha",
    type: "General",
    lokSabha: "Gurdaspur",
    electionResults: [
      { year: 2022, winner: "Barinderjeet Singh Pahra", party: "INC", margin: "7,335 votes vs Gurbachan Singh (SAD)" },
    ],
    totalElectors: "~1,78,000",
    casteComposition: [
      { category: "SC", percentage: "31%" },
      { category: "Jat Sikh", percentage: "24%" },
      { category: "Upper Caste", percentage: "16%" },
      { category: "OBC", percentage: "14%" },
      { category: "Minority", percentage: "8%" },
      { category: "Other", percentage: "7%" },
    ],
    topIssues: [
      { issue: "Flood Control", description: "321 villages affected in 2024-2025 floods (Frontline, Sep 2025)" },
      { issue: "Border Security", description: "Drug smuggling, illegal immigration; proximity to Pakistan" },
      { issue: "Agriculture", description: "MSP procurement issues, stubble burning, groundwater depletion" },
    ],
    congressPosition: "CONGRESS HOLD. Margin of 7,335 is competitive. MP Sunny Deol (BJP) is MP from Gurdaspur. Congress must address flood devastation and farmer issues.",
    recommendedCandidate: {
      profile: "Agrarian leader, farmer connect",
      caste: "Jat Sikh preferred",
      keyQualities: ["Agricultural background", "Accessible to rural voters", "Flood relief focus"],
    },
    attackLines: [
      { issue: "Drug Crisis", message: "Drug crisis severe despite government claims", audience: "All voters" },
      { issue: "Farmer Distress", message: "MSP procurement issues, stubble problems", audience: "Farmers" },
      { issue: "Flood Mismanagement", message: "321 villages affected - relief inadequate", audience: "Rural voters" },
    ],
    margin: 7335,
    party: "INC",
    priorityTier: "MEDIUM",
    dataGaps: ["2017, 2012 results", "Flood relief distribution data", "MSP procurement statistics"],
    crossReferences: ["AC001-Sujanpur", "AC006-Qadian", "AC009-Fatehgarh Churian"],
    strategicImplications: [
      "Flood narrative: Direct hit on governance failure",
      "Farmer vote: MSP is universal concern",
      "Border security: Pakistan proximity is vulnerability",
    ],
    visualizationRecommendations: ["FloodImpactCard", "MarginGauge", "IssueHeatMap"],
    uiComponentSpecs: ["FloodReliefCard", "MarginCard", "SwingBoothTable"],
  },
  {
    acId: "AC005",
    acNumber: 5,
    name: "Dina Nagar (SC)",
    district: "Gurdaspur",
    region: "Majha",
    type: "SC",
    lokSabha: "Gurdaspur",
    electionResults: [
      { year: 2022, winner: "Aruna Chaudhary", party: "INC", margin: "1,131 votes - RAZOR THIN" },
      { year: 2017, winner: "Aruna Chaudhary", party: "INC", margin: "Won vs BJP's Bishan Dass" },
    ],
    totalElectors: "~1,52,000",
    voterTurnout: "~73%",
    casteComposition: [
      { category: "SC", percentage: "60-70% (dominant)" },
      { category: "Jat Sikh", percentage: "26%" },
      { category: "OBC", percentage: "13%" },
      { category: "Upper Caste", percentage: "12%" },
      { category: "Minority", percentage: "8%" },
    ],
    topIssues: [
      { issue: "Employment", description: "Jobs for SC youth, MGNREGA rates" },
      { issue: "Drug Menace", description: "SC youth severely affected" },
      { issue: "Education", description: "Scholarships, school quality" },
    ],
    congressPosition: "CRITICAL - RAZOR-THIN MARGIN OF 1,131 VOTES. This is the most vulnerable Congress seat. Anti-incumbency could flip it. HIGHEST PRIORITY.",
    recommendedCandidate: {
      profile: "Strong SC leader with village-level connect",
      caste: "Must be from SC community",
      keyQualities: ["Grassroots worker", "Dedicated social service", "Female candidate acceptable"],
    },
    attackLines: [
      { issue: "Anti-Incumbency", message: "Congress barely won - anti-incumbency strong", audience: "All voters" },
      { issue: "SC Welfare", message: "SC welfare schemes not reaching beneficiaries", audience: "SC voters" },
      { issue: "Representation", message: "SC community remains economically backward", audience: "SC voters" },
    ],
    margin: 1131,
    party: "INC",
    priorityTier: "CRITICAL",
    dataGaps: ["Booth-level data", "MLA performance assessment", "Ground-level sentiment surveys"],
    crossReferences: ["AC002-Bhoa (SC)", "AC008-Sri Hargobindpur (SC)", "AC020-Attari (SC)"],
    strategicImplications: [
      "Most vulnerable seat in Punjab",
      "Immediate candidate selection required",
      "Anti-incumbency is the key threat",
    ],
    visualizationRecommendations: ["MarginGauge (critical)", "FlipProbabilityBadge", "CasteFlowDiagram"],
    uiComponentSpecs: ["AlertBanner (critical red)", "FlipProbabilityBadge", "SwingCalculator"],
  },
  {
    acId: "AC006",
    acNumber: 6,
    name: "Qadian",
    district: "Gurdaspur",
    region: "Majha",
    type: "General",
    lokSabha: "Gurdaspur",
    electionResults: [
      { year: 2022, winner: "Partap Singh Bajwa", party: "INC", votePercentage: "~45%", margin: "7,174 votes" },
      { year: 2017, winner: "Partap Singh Bajwa", party: "INC", margin: "Significant" },
    ],
    totalElectors: "~1,65,000",
    casteComposition: [
      { category: "Sikh", percentage: "~60%" },
      { category: "Muslim", percentage: "10-15%" },
      { category: "Hindu", percentage: "25-30%" },
      { category: "Jat Sikh", percentage: "24%" },
      { category: "SC", percentage: "31%" },
      { category: "OBC", percentage: "14%" },
      { category: "Upper Caste", percentage: "16%" },
    ],
    topIssues: [
      { issue: "Pilgrimage Infrastructure", description: "Baba Farid shrine development; religious tourism potential" },
      { issue: "Agriculture", description: "MSP, irrigation, agricultural diversification" },
      { issue: "Drug Menace", description: "Rural areas affected" },
    ],
    congressPosition: "CONGRESS HOLD. Partap Singh Bajwa is multi-term incumbent. Margin of 7,174 is solid but not unassailable. AAP urban appeal and SAD traditional vote bank are threats.",
    recommendedCandidate: {
      profile: "Established family name (Bajwa family has strong support)",
      caste: "Jat Sikh or Rajput",
      keyQualities: ["Incumbent advantage", "Community harmony message", "Pilgrimage development focus"],
    },
    attackLines: [
      { issue: "Drug Crisis", message: "Drug crisis in rural areas despite claims", audience: "Rural voters" },
      { issue: "Agricultural Distress", message: "MSP, irrigation issues unresolved", audience: "Farmers" },
      { issue: "Rural Infrastructure", message: "Rural infrastructure gaps", audience: "Rural voters" },
    ],
    margin: 7174,
    party: "INC",
    priorityTier: "MEDIUM",
    dataGaps: ["2012 results", "Baba Farid shrine visitor data", "Youth unemployment figures"],
    crossReferences: ["AC009-Fatehgarh Churian", "Bajwa family network", "AC001-Sujanpur"],
    strategicImplications: [
      "Incumbent advantage is key asset",
      "Bajwa family name carries weight",
      "Pilgrimage tourism is unique opportunity",
    ],
    visualizationRecommendations: ["MarginGauge", "TrendChart for family dominance", "ReligiousTourismCard"],
    uiComponentSpecs: ["ElectionResultCard", "MarginCard", "CandidateProfileCard"],
  },
  {
    acId: "AC007",
    acNumber: 7,
    name: "Batala",
    district: "Gurdaspur",
    region: "Majha",
    type: "General",
    lokSabha: "Gurdaspur",
    electionResults: [
      { year: 2022, winner: "Sherry Kalsi (Amansher Singh)", party: "AAP", votePercentage: "~45%", margin: "28,472 votes - DECISIVE" },
      { year: 2017, winner: "Lakhbir Singh", party: "SAD", margin: "-" },
    ],
    totalElectors: "~1,82,000",
    casteComposition: [
      { category: "Sikh", percentage: "~65%" },
      { category: "Hindu", percentage: "~32%" },
      { category: "Jat Sikh", percentage: "24%" },
      { category: "SC", percentage: "31%" },
      { category: "OBC", percentage: "14%" },
      { category: "Upper Caste", percentage: "16%" },
    ],
    topIssues: [
      { issue: "Industrial Decline", description: "Brass industry (Batala brass famous nationally), sports goods struggling" },
      { issue: "Unemployment", description: "Youth without jobs due to factory closures" },
      { issue: "Drug Menace", description: "Youth addiction affecting families" },
    ],
    congressPosition: "AAP HOLD - MAJOR SHIFT IN 2022. AAP won decisively with 28,472 margin - massive swing from SAD. Congress needs very strong candidate to reclaim.",
    recommendedCandidate: {
      profile: "Urban/rural balance, business community connect, industrial background",
      caste: "Jat Sikh or Arora",
      keyQualities: ["Developmental agenda", "Anti-AAP swing voter appeal", "Consolidate non-AAP votes"],
    },
    attackLines: [
      { issue: "Broken Promises", message: "₹1000/month for women not delivered", audience: "Women voters" },
      { issue: "Industrial Decline", message: "Batala's brass industry continues to decline under AAP", audience: "Business, workers" },
      { issue: "Drug Crisis", message: "Drug crisis persists despite AAP claims", audience: "All voters" },
    ],
    margin: -28472,
    party: "AAP",
    priorityTier: "RECOVERY",
    dataGaps: ["2012 results", "Factory closure data", "Brass industry revenue decline"],
    crossReferences: ["AC008-Sri Hargobindpur (SC)", "Batch 5 (Ludhiana industrial decline)"],
    strategicImplications: [
      "Long-term rebuild required",
      "Industrial narrative could work",
      "AAP margin provides buffer",
    ],
    visualizationRecommendations: ["IndustrialDeclineCard", "SwingCalculator", "VoteRecoveryGauge"],
    uiComponentSpecs: ["IndustrialMetricsCard", "SwingCalculator", "FlipProbabilityBadge"],
  },
  {
    acId: "AC008",
    acNumber: 8,
    name: "Sri Hargobindpur (SC)",
    district: "Gurdaspur",
    region: "Majha",
    type: "SC",
    lokSabha: "Hoshiarpur",
    electionResults: [
      { year: 2022, winner: "Amarpal Singh", party: "AAP", votePercentage: "43.2%", margin: "Won vs Rajanbir Singh (SAD) 29.5%" },
      { year: 2017, winner: "Balwinder Singh", party: "INC", margin: "-" },
    ],
    totalElectors: "~1,58,000",
    voterTurnout: "68.91%",
    casteComposition: [
      { category: "SC", percentage: "65-75% (dominant)" },
      { category: "Jat Sikh", percentage: "26%" },
      { category: "OBC", percentage: "13%" },
      { category: "Upper Caste", percentage: "12%" },
      { category: "Minority", percentage: "8%" },
    ],
    topIssues: [
      { issue: "MGNREGA Jobs", description: "Employment for landless, marginal farmers" },
      { issue: "Drug Menace", description: "SC youth severely affected" },
      { issue: "Education", description: "Scholarships for SC students" },
    ],
    congressPosition: "AAP HOLD (FLIPPED FROM CONGRESS IN 2022). Congress must recapture by nominating strong SC leader with grassroots connect.",
    recommendedCandidate: {
      profile: "SC leader, agrarian background, worker-oriented",
      caste: "MUST be from SC community",
      keyQualities: ["Dedicated to SC issues", "Accessible", "Strong presence at village level"],
    },
    attackLines: [
      { issue: "SC Welfare", message: "SC welfare schemes not reaching SC community", audience: "SC voters" },
      { issue: "Economic Weakness", message: "SC communities still economically weak", audience: "SC voters" },
      { issue: "Land Issues", message: "Land issues unresolved", audience: "SC farmers" },
    ],
    margin: -29600,
    party: "AAP",
    priorityTier: "RECOVERY",
    dataGaps: ["Booth-level SC voter data", "Land dispute records", "MGNREGA piece rate data"],
    crossReferences: ["AC002-Bhoa (SC)", "AC005-Dina Nagar (SC)", "AC020-Attari (SC)"],
    strategicImplications: [
      "SC voter reconsolidation is key",
      "Grassroots connect essential",
      "Land issues resonate with SC community",
    ],
    visualizationRecommendations: ["SCVoterCard", "FlipProbabilityBadge", "LandIssueTracker"],
    uiComponentSpecs: ["AlertBanner", "FlipStatusBadge", "SCVoterAnalysis"],
  },
  {
    acId: "AC009",
    acNumber: 9,
    name: "Fatehgarh Churian",
    district: "Gurdaspur",
    region: "Majha",
    type: "General",
    lokSabha: "Gurdaspur",
    electionResults: [
      { year: 2022, winner: "Tript Rajender Singh Bajwa", party: "INC", margin: "5,545 votes (46,311 vs 40,766 Lakhbir Singh SAD)" },
      { year: 2017, winner: "Tript Rajender Singh Bajwa", party: "INC", margin: "-" },
    ],
    totalElectors: "177,846",
    voterTurnout: "~73%",
    casteComposition: [
      { category: "Sikh", percentage: "~60%" },
      { category: "Hindu", percentage: "~35%" },
      { category: "Jat Sikh", percentage: "24%" },
      { category: "SC", percentage: "31%" },
      { category: "OBC", percentage: "14%" },
      { category: "Upper Caste", percentage: "16%" },
    ],
    topIssues: [
      { issue: "Border Security", description: "Smuggling, infiltration concerns due to proximity to Pakistan" },
      { issue: "Drug Menace", description: "Border makes drug problem worse" },
      { issue: "Agriculture", description: "MSP, irrigation, stubble management" },
    ],
    congressPosition: "CONGRESS HOLD. Tript Rajender Singh Bajwa (Bajwa family) has won consecutively. Margin of 5,545 is competitive. Must maintain by addressing agrarian distress and border concerns.",
    recommendedCandidate: {
      profile: "Agrarian leader, Bajwa family connection",
      caste: "Jat Sikh or Rajput",
      keyQualities: ["Farmer-friendly", "Rural development focus", "Border area connect"],
    },
    attackLines: [
      { issue: "Drug Crisis", message: "Drug crisis in rural communities", audience: "Rural voters" },
      { issue: "Farmer Distress", message: "MSP, stubble issues unresolved", audience: "Farmers" },
      { issue: "Border Areas", message: "Border areas neglected", audience: "Border residents" },
    ],
    margin: 5545,
    party: "INC",
    priorityTier: "HIGH",
    dataGaps: ["2012 results", "Border smuggling incident data", "Agricultural yield data"],
    crossReferences: ["AC006-Qadian", "Bajwa family network", "AC004-Gurdaspur"],
    strategicImplications: [
      "Bajwa family name is asset",
      "Border security resonates",
      "Farmer narrative important",
    ],
    visualizationRecommendations: ["BorderSecurityCard", "MarginGauge", "FarmerDistressMatrix"],
    uiComponentSpecs: ["BorderAlertCard", "MarginCard", "StrategyCard"],
  },
];

// Priority Tiers for Batch 1
export const batch1PriorityTiers: PriorityTierSummary[] = [
  { tier: "CRITICAL", constituencies: ["AC005-Dina Nagar (SC)"], margin: "1,131", actionUrgency: "Immediate candidate selection" },
  { tier: "HIGH", constituencies: ["AC009-Fatehgarh Churian", "AC001-Sujanpur"], margin: "4,636-5,545", actionUrgency: "Ground mobilization / Youth outreach" },
  { tier: "MEDIUM", constituencies: ["AC004-Gurdaspur", "AC006-Qadian", "AC003-Pathankot"], margin: "7,174-7,759", actionUrgency: "Issue-specific focus" },
  { tier: "RECOVERY", constituencies: ["AC002-Bhoa (SC)", "AC007-Batala", "AC008-Sri Hargobindpur (SC)"], margin: "28,472-67,865 (AAP)", actionUrgency: "Long-term rebuild" },
];

// Region Intelligence Summaries
export const regionIntelligenceSummaries: Record<string, RegionIntelligenceSummary> = {
  Majha: {
    region: "Majha",
    totalSeats: 25,
    congressSeats: 4,
    aapSeats: 19,
    sadSeats: 2,
    bjpSeats: 0,
    criticalSeats: ["AC005-Dina Nagar (SC)"],
  },
  Doaba: {
    region: "Doaba",
    totalSeats: 23,
    congressSeats: 10,
    aapSeats: 9,
    sadSeats: 2,
    bjpSeats: 2,
    criticalSeats: [],
  },
  Malwa: {
    region: "Malwa",
    totalSeats: 69,
    congressSeats: 2,
    aapSeats: 65,
    sadSeats: 2,
    bjpSeats: 0,
    criticalSeats: [],
  },
  Powadh: {
    region: "Powadh",
    totalSeats: 10,
    congressSeats: 0,
    aapSeats: 0,
    sadSeats: 0,
    bjpSeats: 0,
    criticalSeats: [],
  },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get election intelligence by AC ID
 */
export function getElectionIntelligence(acId: string): ElectionIntelligence | undefined {
  return batch1Intelligence.find(c => c.acId === acId);
}

/**
 * Get constituencies by party
 */
export function getCongressSeats(): ElectionIntelligence[] {
  return batch1Intelligence.filter(c => c.party === "INC");
}

export function getAAPSeats(): ElectionIntelligence[] {
  return batch1Intelligence.filter(c => c.party === "AAP");
}

/**
 * Get critical seats
 */
export function getCriticalSeats(): ElectionIntelligence[] {
  return batch1Intelligence
    .filter(c => c.priorityTier === "CRITICAL")
    .sort((a, b) => (a.margin ?? Infinity) - (b.margin ?? Infinity));
}

/**
 * Get vulnerable Congress seats (margin < 10,000)
 */
export function getVulnerableCongressSeats(): ElectionIntelligence[] {
  return batch1Intelligence
    .filter(c => c.party === "INC" && (c.margin ?? 0) < 10000)
    .sort((a, b) => (a.margin ?? Infinity) - (b.margin ?? Infinity));
}

/**
 * Get AAP flip opportunities (margin < 15,000)
 */
export function getFlipOpportunities(): ElectionIntelligence[] {
  return batch1Intelligence
    .filter(c => c.party === "AAP" && (c.margin ?? 0) < 15000)
    .sort((a, b) => (a.margin ?? Infinity) - (b.margin ?? Infinity));
}

/**
 * Get seats by priority tier
 */
export function getSeatsByTier(tier: ElectionIntelligence["priorityTier"]): ElectionIntelligence[] {
  return batch1Intelligence.filter(c => c.priorityTier === tier);
}
