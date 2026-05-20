// @ts-nocheck
// Synthesis Intelligence Data for Punjab Congress 2027
// Processed from: s1-cross-reference-validation.md, s2-master-index.md, s3-quality-validation.md, s4-gap-analysis.md

import type {
  SynthesisIntelligenceSummary,
  SynthesisQualityMetrics,
  SynthesisDemographicData,
  SynthesisPartyData,
  SynthesisGovernanceData,
  CrossReferenceValidation,
  MasterIndex,
  QualityValidation,
  GapAnalysis,
  KeySynthesisMetric,
  SYNTHESIS_KEY_METRICS,
} from "@/types/synthesis-types";

// ==========================================
// SYNTHESIS DEMOGRAPHIC DATA
// ==========================================

export const synthesisDemographicData: SynthesisDemographicData = {
  scPopulation: {
    percentage: 32,
    rank: "Highest in India",
    subCastes: [
      { name: "Mazhabi Sikh", percentage: "30-31.5%" },
      { name: "Ravidasia/Ramdasia", percentage: "23-26%" },
      { name: "Ad-Dharmi", percentage: "11-15%" },
      { name: "Valmiki", percentage: "10-11%" },
      { name: "Rai Sikh", percentage: "6%" },
    ],
  },
  jatSikh: {
    percentage: "20-25%",
    region: "Dominant in rural Malwa",
  },
  obc: {
    percentage: 31,
  },
  regionalSeats: {
    malwa: 69,
    majha: 27,
    doaba: 23,
  },
  voterData: {
    totalPopulation: "3.14 Cr",
    voters: "2.14 Cr",
    firstTimeVoters: "11.6 lakh",
    sexRatio: "895",
    urbanPercentage: "37.48%",
  },
};

// ==========================================
// SYNTHESIS PARTY DATA
// ==========================================

export const synthesisPartyData: SynthesisPartyData = {
  bjp: {
    voteShare2019: 9.63,
    voteShare2024: 18.56,
    status: "Going solo for 2027",
    growth: "Nearly doubled vote share",
  },
  aap: {
    voteShare2022: 42,
    voteShare2024: 26,
    mandateStatus: "Collapsed far more rapidly than framework anticipated",
  },
  congress: {
    seats2022: 18,
    seats2024: 7,
    factions: ["Warring", "Bajwa", "Channi"],
    cmFace: "No declared CM face",
  },
  sad: {
    splitDate: "August 2025",
    factions: ["SAD Badal", "SAD Punar Surjit", "Waris Punjab De"],
    seats2022: 3,
  },
};

// ==========================================
// SYNTHESIS GOVERNANCE DATA
// ==========================================

export const synthesisGovernanceData: SynthesisGovernanceData = {
  youthUnemployment: {
    percentage: 18.8,
    ageGroup: "15-29 years",
    ruralPercentage: 20.2,
  },
  groundwater: {
    overExploitedBlocks: 115,
    totalBlocks: 153,
    criticalDistricts: "70%+",
  },
  farmerDebt: {
    averagePerHousehold: "Rs 2.03 lakh",
    familiesInDebt: "54%+",
    totalDebt: "Rs 1.4 lakh crore",
  },
  drugCrisis: {
    users: "6.6 million",
    overdoseDeaths2024: 106,
    ndpsCases: "8,973",
  },
};

// ==========================================
// CROSS-REFERENCE VALIDATION DATA (s1)
// ==========================================

export const crossReferenceValidation: CrossReferenceValidation = {
  synthesisDate: "20 May 2026",
  documentsReviewed: {
    trackA: 25,
    trackB: 43,
    total: 68,
  },
  corroboratedFindings: [
    {
      finding: "SC population ~32%",
      trackASource: ["a1", "a3"],
      trackBSource: ["b1"],
      status: "CORROBORATED",
    },
    {
      finding: "Jat Sikh ~20-25%",
      trackASource: ["a2"],
      trackBSource: ["b5"],
      status: "CORROBORATED",
    },
    {
      finding: "OBC ~31%",
      trackASource: ["a4"],
      trackBSource: ["b25"],
      status: "CORROBORATED",
    },
    {
      finding: "Malwa 69 seats",
      trackASource: ["a2", "a6"],
      trackBSource: ["b5"],
      status: "CORROBORATED",
    },
    {
      finding: "Youth unemployment 18-20%",
      trackASource: ["a5", "a16"],
      trackBSource: ["b5 (age cohort)"],
      status: "CORROBORATED",
    },
    {
      finding: "Farmer debt crisis",
      trackASource: ["a6", "a16"],
      trackBSource: ["b13"],
      status: "CORROBORATED",
    },
    {
      finding: "Drug crisis scale",
      trackASource: ["a8"],
      trackBSource: ["b13"],
      status: "CORROBORATED",
    },
    {
      finding: "BJP going solo 2027",
      trackASource: ["a11"],
      trackBSource: ["b16"],
      status: "CORROBORATED",
    },
    {
      finding: "SAD split/fraction",
      trackASource: ["a11"],
      trackBSource: ["b16"],
      status: "CORROBORATED",
    },
    {
      finding: "Congress factional",
      trackASource: ["a12", "a13"],
      trackBSource: ["b8", "b16"],
      status: "CORROBORATED",
    },
    {
      finding: "Groundwater crisis",
      trackASource: ["a15", "a19"],
      trackBSource: ["b4", "b13"],
      status: "CORROBORATED",
    },
    {
      finding: "Caste voting patterns",
      trackASource: ["a25"],
      trackBSource: ["b5", "b29"],
      status: "CORROBORATED",
    },
  ],
  contradictoryFindings: [
    {
      finding: "AAP Electoral Trajectory",
      trackA: "AAP vote share collapsed from 42% (2022) to ~26% (2024 Lok Sabha)",
      trackB: "Framework treats AAP as 'strong' incumbent with 'superior digital infrastructure'",
      resolution: "Update AAP SWOT: Remove 'incumbent advantage'. AAP is now a weakened incumbent.",
    },
    {
      finding: "Congress Organizational Health",
      trackA: "Congress lost 6 of 7 last by-elections. Factional warfare publicly visible.",
      trackB: "Factionalism documented but framed as manageable with high command intervention",
      resolution: "Add 'Ground Game Execution Risk' indicator. Organizational capacity is overstated.",
    },
    {
      finding: "Digital Campaign Infrastructure",
      trackA: "Punjabi NLP 'acutely underdeveloped', social media API restrictions limiting",
      trackB: "Advanced OSINT/HUMINT architecture, AI-powered campaign platforms described",
      resolution: "Downgrade AI/campaign technology deployment from 'available' to 'partially available'.",
    },
  ],
  corroboratedMethodology: [
    "Voter Segmentation by Caste",
    "Voter Psychology Hierarchy (Maslow-based)",
    "Competitive Intelligence Cycle",
    "Sikh Identity/Panthic Politics Framework",
    "Sentiment Analysis Dimensions",
  ],
  methodologyGaps: [
    {
      gap: "Dera Politics",
      trackBSection: "b33",
      risk: "HIGH",
      recommendation: "Commission dedicated Track A research on dera political alignments",
    },
    {
      gap: "NRI Political Influence",
      trackBSection: "NO METHODOLOGY",
      risk: "MEDIUM",
      recommendation: "Develop Track B methodology for NRI voter identification and mobilization",
    },
    {
      gap: "AI Campaign Technology Deployment",
      trackBSection: "b20, b41",
      risk: "HIGH",
      recommendation: "Conduct rapid technology audit of Congress's actual deployment capacity",
    },
    {
      gap: "Booth-Level Ground Intelligence",
      trackBSection: "b42",
      risk: "HIGH",
      recommendation: "Commission Track A field verification of Congress ground infrastructure",
    },
  ],
  confidenceAssessment: [
    { domain: "Demographics", confidence: "HIGH", basis: "Census 2011 data well-documented, current estimates consistent" },
    { domain: "Caste Voting", confidence: "HIGH", basis: "Multiple sources, consistent patterns" },
    { domain: "Party Positioning", confidence: "MEDIUM-HIGH", basis: "Quantitative data from 2022, 2024; 2026 survey data less reliable" },
    { domain: "Governance Issues", confidence: "HIGH", basis: "NCRB data, government statistics, multiple news sources" },
    { domain: "Technology Capability", confidence: "LOW", basis: "Significant gaps between framework assumption and ground reality" },
    { domain: "Ground Game", confidence: "MEDIUM", basis: "Organizational announcements vs. field validation gap" },
    { domain: "Dera/NRI Influence", confidence: "LOW", basis: "No recent research data available" },
    { domain: "Women Voters", confidence: "MEDIUM-LOW", basis: "Limited Track A coverage" },
  ],
};

// ==========================================
// MASTER INDEX DATA (s2)
// ==========================================

export const masterIndex: MasterIndex = {
  synthesisDate: "20 May 2026",
  totalDocuments: {
    trackA: 25,
    trackB: 42,
    total: 67,
  },
  categories: [
    { category: "Demography", frameworkSections: "~140 sections", trackAFiles: 11, trackBFiles: 6, coverageRating: "MODERATE" },
    { category: "Constituency", frameworkSections: "~80 sections", trackAFiles: 2, trackBFiles: 3, coverageRating: "WEAK" },
    { category: "Party Propulsion", frameworkSections: "~60 sections", trackAFiles: 0, trackBFiles: 4, coverageRating: "CRITICAL_GAP" },
    { category: "Candidate Supremacy", frameworkSections: "~45 sections", trackAFiles: 1, trackBFiles: 3, coverageRating: "WEAK" },
    { category: "Voter Enticement", frameworkSections: "~55 sections", trackAFiles: 2, trackBFiles: 5, coverageRating: "WEAK" },
    { category: "Competition", frameworkSections: "~70 sections", trackAFiles: 4, trackBFiles: 5, coverageRating: "MODERATE" },
    { category: "Public Sentiment", frameworkSections: "~35 sections", trackAFiles: 3, trackBFiles: 2, coverageRating: "MODERATE" },
    { category: "Media Sentiment", frameworkSections: "~35 sections", trackAFiles: 0, trackBFiles: 2, coverageRating: "CRITICAL_GAP" },
    { category: "Intelligence Analytics", frameworkSections: "~50 sections", trackAFiles: 2, trackBFiles: 5, coverageRating: "WEAK" },
    { category: "Perception Strategy", frameworkSections: "~50 sections", trackAFiles: 0, trackBFiles: 5, coverageRating: "CRITICAL_GAP" },
  ],
  intelligenceGaps: [
    { gap: "Congress Ground Truth", category: "Party Propulsion", severity: "CRITICAL", impact: "No independent research on booth-level readiness", remediationEffort: "Medium", priority: "IMMEDIATE" },
    { gap: "BJP OBC Strategy", category: "Competition", severity: "CRITICAL", impact: "Haryana-model micro-caste mobilization not profiled", remediationEffort: "Medium", priority: "IMMEDIATE" },
    { gap: "AAP Governance Delivery Audit", category: "Competition", severity: "HIGH", impact: "No systematic documentation of AAP MLA performance", remediationEffort: "Medium", priority: "SHORT-TERM" },
    { gap: "Women Voter Sentiment", category: "Public Sentiment", severity: "HIGH", impact: "Specific issue preferences unknown", remediationEffort: "High", priority: "SHORT-TERM" },
    { gap: "Congress Baseline Perception", category: "Perception Strategy", severity: "HIGH", impact: "No actual Congress perception survey", remediationEffort: "High", priority: "SHORT-TERM" },
  ],
  policyRelevanceMatrix: [
    { strategyElement: "Ground Game Rebuild", primaryDocuments: ["A20", "B42", "B7"], secondaryDocuments: ["B14", "B26"] },
    { strategyElement: "Caste Vote Consolidation", primaryDocuments: ["A25", "A3", "A4", "A2", "B25", "B5"], secondaryDocuments: ["B29", "B33"] },
    { strategyElement: "Dalit Voter Reclamation", primaryDocuments: ["A25", "A3", "B33"], secondaryDocuments: ["A12", "B5"] },
    { strategyElement: "Jat Sikh Swing Capture", primaryDocuments: ["A2", "B29"], secondaryDocuments: ["A13", "B27"] },
    { strategyElement: "OBC Mobilization", primaryDocuments: ["A4", "B25"], secondaryDocuments: ["A11"] },
    { strategyElement: "Anti-Drug Narrative", primaryDocuments: ["A8", "A10"], secondaryDocuments: ["A16"] },
    { strategyElement: "Digital Campaign", primaryDocuments: ["A18", "A14", "B41", "B12"], secondaryDocuments: ["A7"] },
    { strategyElement: "Opposition Attack", primaryDocuments: ["A10", "A11", "A13", "A21", "B40"], secondaryDocuments: ["A14"] },
  ],
};

// ==========================================
// QUALITY VALIDATION DATA (s3)
// ==========================================

export const qualityValidation: QualityValidation = {
  synthesisDate: "20 May 2026",
  scope: {
    trackA: 25,
    trackB: 42,
    total: 67,
  },
  overallAssessment: "EXEMPLARY",
  passRate: 97,
  trackASummary: {
    high: 23,
    medium: 2,
    low: 0,
    fail: 0,
    total: 25,
  },
  trackBSummary: {
    high: 42,
    medium: 0,
    low: 0,
    fail: 0,
    total: 42,
  },
  documentsRequiringRevision: [],
  bestPracticesDocuments: [
    { document: "a8-punjab-drugs-crime-statistics-2026.md", reason: "10 distinct Key Findings with specific statistics, comprehensive source citation, clear tabular data" },
    { document: "a19-punjab-water-agriculture-crisis-2026.md", reason: "7 Key Findings with specific metrics, multiple source types, current status included" },
    { document: "a6-punjab-agricultural-economy-2026.md", reason: "Specific procurement figures, farmer income impact analysis, crop-wise breakdown" },
    { document: "b11-candidate-selection-profiling-methodology.md", reason: "Quantitative winnability model with weights, Punjab-specific contextual notes" },
    { document: "b20-osint-humint-data-architecture.md", reason: "Platform coverage matrix, tool recommendations, Punjabi NLP challenges documented" },
    { document: "b22-perception-audit-strategy-formation.md", reason: "Three-tier leader perception analysis, Malwa-specific considerations" },
  ],
};

// ==========================================
// GAP ANALYSIS DATA (s4)
// ==========================================

export const gapAnalysis: GapAnalysis = {
  synthesisDate: "20 May 2026",
  corpusReviewed: {
    trackA: 25,
    trackB: 42,
    total: 67,
  },
  frameworkSections: 405,
  categoryGapAnalysis: [
    {
      category: "Demography",
      frameworkSections: 140,
      trackAFiles: 11,
      trackBFiles: 6,
      coveragePercent: 8,
      coverageRating: "WEAK",
      existingFiles: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a19", "a25"],
      missingSections: [
        { section: "1.4", description: "Demographic Data Analysis Methods", severity: "HIGH" },
        { section: "1.5", description: "Social Demography", severity: "MEDIUM" },
        { section: "1.7", description: "Trend Spotting", severity: "MEDIUM" },
      ],
    },
    {
      category: "Party Propulsion",
      frameworkSections: 60,
      trackAFiles: 0,
      trackBFiles: 4,
      coveragePercent: 0,
      coverageRating: "CRITICAL_GAP",
      existingFiles: ["b8", "b9", "b10", "b37"],
      missingSections: [
        { section: "3.1", description: "Party Organizational Structure", severity: "CRITICAL" },
        { section: "3.2", description: "Party Cadre & Worker Database", severity: "CRITICAL" },
        { section: "3.3", description: "Party Finance & Resources", severity: "CRITICAL" },
      ],
    },
    {
      category: "Media Sentiment",
      frameworkSections: 35,
      trackAFiles: 0,
      trackBFiles: 2,
      coveragePercent: 0,
      coverageRating: "CRITICAL_GAP",
      existingFiles: ["b18", "b19"],
      missingSections: [
        { section: "8.1", description: "Media Outlet Landscape", severity: "CRITICAL" },
        { section: "8.3", description: "Editorial Slant Analysis", severity: "HIGH" },
        { section: "8.7", description: "Influencer/Micro-Influencer Map", severity: "HIGH" },
      ],
    },
    {
      category: "Perception Strategy",
      frameworkSections: 50,
      trackAFiles: 0,
      trackBFiles: 5,
      coveragePercent: 0,
      coverageRating: "CRITICAL_GAP",
      existingFiles: ["b22", "b23", "b31", "b39", "b40"],
      missingSections: [
        { section: "10.1", description: "Party Perception Audit", severity: "CRITICAL" },
        { section: "10.2", description: "Leader Perception Metrics", severity: "CRITICAL" },
        { section: "10.3", description: "Competitive Perception Analysis", severity: "HIGH" },
      ],
    },
  ],
  tier1Gaps: [
    "AAP Governance Delivery Audit (Seat-Level)",
    "Constituency-Level Margin Analysis",
    "Booth-Level Voter Roll Analysis",
    "Real-Time Sentiment Tracking Infrastructure",
    "Exit Poll Design & Previous Accuracy Analysis",
  ],
  tier2Gaps: [
    "Media Warfare Capacity Assessment",
    "Dera Endorsement Impact Quantification",
    "AAP Voter Switcher Profile",
    "Election Violence & Security Intelligence",
    "Congress Voter Enthusiasm Gap",
  ],
  gapSeverityMatrix: [
    { gap: "AAP governance delivery audit", category: "6.1", severity: "CRITICAL", impact: "Decides 30-40 seats", remediationEffort: "Medium", priority: "IMMEDIATE" },
    { gap: "Real-time sentiment tracking", category: "7.1", severity: "CRITICAL", impact: "Campaign calibration", remediationEffort: "High", priority: "IMMEDIATE" },
    { gap: "Constituency margin analysis", category: "2.1", severity: "CRITICAL", impact: "Resource allocation", remediationEffort: "Medium", priority: "IMMEDIATE" },
    { gap: "Booth-level voter roll analysis", category: "2.8", severity: "CRITICAL", impact: "Ground game", remediationEffort: "High", priority: "IMMEDIATE" },
    { gap: "Party propulsion current research", category: "3", severity: "CRITICAL", impact: "Base mobilization", remediationEffort: "Medium", priority: "SHORT-TERM" },
    { gap: "Media sentiment current research", category: "8", severity: "CRITICAL", impact: "Narrative warfare", remediationEffort: "Medium", priority: "SHORT-TERM" },
    { gap: "Perception strategy current research", category: "10", severity: "CRITICAL", impact: "Campaign positioning", remediationEffort: "High", priority: "SHORT-TERM" },
  ],
  remediationWaves: [
    {
      wave: 1,
      timeline: "June-July 2026",
      priority: "IMMEDIATE",
      items: [
        { gap: "AAP MLA Performance Audit", file: "docs/research/cat-6-competition/a26-aap-governance-delivery-audit-2026.md", category: "Competition" },
        { gap: "Booth-Level Voter Roll Analysis Protocol", file: "docs/direct-documentation/cat-2-constituency/b7a-booth-level-voter-roll-methodology.md", category: "Constituency" },
        { gap: "Congress Organizational Current State", file: "docs/research/cat-3-party-propulsion/a26-congress-punjab-org-status-2026.md", category: "Party Propulsion" },
        { gap: "Punjab Media Landscape Directory", file: "docs/research/cat-8-media-sentiment/a26-punjab-media-landscape-2026.md", category: "Media Sentiment" },
        { gap: "Congress Leader Perception Baseline", file: "docs/research/cat-10-perception-strategy/a26-congress-leader-perception-survey-2026.md", category: "Perception Strategy" },
      ],
    },
    {
      wave: 2,
      timeline: "August-September 2026",
      priority: "SHORT-TERM",
      items: [
        { gap: "117 Constituency Competitive Profiles", file: "docs/research/cat-2-constituency/a27-117-constituency-profiles-2026.md", category: "Constituency" },
        { gap: "Monthly Sentiment Tracking Design + First Wave", file: "docs/research/cat-7-public-sentiment/a28-punjab-sentiment-tracking-wave1-2026.md", category: "Public Sentiment" },
        { gap: "Dera Political Influence Quantification", file: "docs/research/cat-6-competition/a29-dera-influence-quantification-2026.md", category: "Competition" },
        { gap: "Congress Social Media Command Center Assessment", file: "docs/research/cat-9-intelligence-analytics/a30-congress-digital-warfare-assessment-2026.md", category: "Intelligence Analytics" },
        { gap: "AAP Attack Surface Full Documentation", file: "docs/research/cat-6-competition/a31-aap-attack-surface-complete-2026.md", category: "Competition" },
      ],
    },
  ],
};

// ==========================================
// SYNTHESIS QUALITY METRICS
// ==========================================

export const synthesisQualityMetrics: SynthesisQualityMetrics = {
  totalDocuments: 67,
  highQualityDocuments: 65,
  mediumQualityDocuments: 2,
  lowQualityDocuments: 0,
  passRate: 97,
  trackACoverage: 25,
  trackBCoverage: 42,
  criticalGaps: 3,
  highPriorityGaps: 4,
};

// ==========================================
// SYNTHESIS INTELLIGENCE SUMMARY
// ==========================================

export const synthesisIntelligenceSummary: SynthesisIntelligenceSummary = {
  crossReference: crossReferenceValidation,
  masterIndex: masterIndex,
  qualityValidation: qualityValidation,
  gapAnalysis: gapAnalysis,
  demographicData: synthesisDemographicData,
  partyData: synthesisPartyData,
  governanceData: synthesisGovernanceData,
};

// ==========================================
// KEY SYNTHESIS METRICS (for dashboard)
// ==========================================

export const KEY_SYNTHESIS_METRICS = [
  // Demographics
  { id: "DEM-001", category: "Demographics", metric: "SC Population", value: "~32%", source: "s1/a1,b1", status: "CORROBORATED" as const },
  { id: "DEM-002", category: "Demographics", metric: "Jat Sikh Population", value: "20-25%", source: "s1/a2,b5", status: "CORROBORATED" as const },
  { id: "DEM-003", category: "Demographics", metric: "OBC Population", value: "~31%", source: "s1/a4,b25", status: "CORROBORATED" as const },
  { id: "DEM-004", category: "Demographics", metric: "Malwa Seats", value: "69", source: "s1/a2,a6,b5", status: "CORROBORATED" as const },
  { id: "DEM-005", category: "Demographics", metric: "Total Voters", value: "2.14 Cr", source: "s2/A1", status: "CORROBORATED" as const },
  { id: "DEM-006", category: "Demographics", metric: "First-Time Voters", value: "11.6 lakh", source: "s2/A1", status: "CORROBORATED" as const },

  // Party Positioning
  { id: "PART-001", category: "Party", metric: "BJP Vote Share Growth", value: "9.63% → 18.56%", source: "s1/a11,b16", trend: "up" as const, status: "CORROBORATED" as const },
  { id: "PART-002", category: "Party", metric: "AAP Vote Collapse", value: "42% → 26%", source: "s1/a13,b16", trend: "down" as const, status: "PARTIAL" as const },
  { id: "PART-003", category: "Party", metric: "SAD Split", value: "August 2025", source: "s1/a11", status: "CORROBORATED" as const },
  { id: "PART-004", category: "Party", metric: "Congress Factions", value: "3 (Warring/Bajwa/Channi)", source: "s1/a12,a13,b8,b16", status: "CORROBORATED" as const },
  { id: "PART-005", category: "Party", metric: "Congress LS Seats 2024", value: "7/13", source: "s1/a13", status: "CORROBORATED" as const },

  // Governance Issues
  { id: "GOV-001", category: "Governance", metric: "Youth Unemployment", value: "18.8%", source: "s1/a5,a16,b5", status: "CORROBORATED" as const },
  { id: "GOV-002", category: "Governance", metric: "Groundwater Crisis", value: "115/153 blocks", source: "s1/a15,a19,b4,b13", status: "CORROBORATED" as const },
  { id: "GOV-003", category: "Governance", metric: "Farmer Debt", value: "Rs 2.03L/household", source: "s1/a6,a16,b13", status: "CORROBORATED" as const },
  { id: "GOV-004", category: "Governance", metric: "Drug Users", value: "6.6 Million", source: "s1/a8,b13", status: "CORROBORATED" as const },
  { id: "GOV-005", category: "Governance", metric: "Overdose Deaths 2024", value: "106", source: "s1/a8", status: "CORROBORATED" as const },

  // Quality Metrics
  { id: "QUAL-001", category: "Quality", metric: "Overall Pass Rate", value: "97%", source: "s3", status: "CORROBORATED" as const },
  { id: "QUAL-002", category: "Quality", metric: "HIGH Quality Documents", value: "65/67", source: "s3", status: "CORROBORATED" as const },
  { id: "QUAL-003", category: "Quality", metric: "Total Documents", value: "67", source: "s2", status: "CORROBORATED" as const },

  // Gap Analysis
  { id: "GAP-001", category: "Gaps", metric: "Critical Gap Categories", value: "3", source: "s4", status: "CORROBORATED" as const },
  { id: "GAP-002", category: "Gaps", metric: "Weak Categories", value: "4", source: "s4", status: "CORROBORATED" as const },
  { id: "GAP-003", category: "Gaps", metric: "Tier 1 Critical Gaps", value: "5", source: "s4", status: "CORROBORATED" as const },
];

// ==========================================
// CORROBORATION STATUS COLORS
// ==========================================

export const CORROBORATION_COLORS = {
  CORROBORATED: "bg-green-500",
  PARTIAL: "bg-yellow-500",
  GAP: "bg-red-500",
} as const;

export const CONFIDENCE_COLORS = {
  HIGH: "text-green-600 dark:text-green-400",
  MEDIUM: "text-yellow-600 dark:text-yellow-400",
  LOW: "text-red-600 dark:text-red-400",
} as const;
