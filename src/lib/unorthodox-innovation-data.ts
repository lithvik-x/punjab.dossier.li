// @ts-nocheck
// Unorthodox Voter Contact Innovation Data for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g35-unorthodox-voter-contact-innovation.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G35

import type { UnorthodoxInnovationData } from "@/types/unorthodox-innovation-types";

export const UNORTHODOX_INNOVATION_DATA: UnorthodoxInnovationData = {
  documentDate: "20 May 2026",
  agent: "Track B",
  taskId: "G35",
  frameworkSections: [
    "QR Code Placement",
    "Cable TV Insertion",
    "WhatsApp Status Ads",
    "Auto-Rickshaw Wraps",
    "APMC Market Presence",
    "Village Fair/Festival Booth",
    "Cremation/Burial Ground Branding",
    "School/College Gate Outreach",
    "Mobile LED Van",
    "IPL Cricket Watch Party",
    "WhatsApp Channel Launch",
    "Integration Strategy",
    "Knowledge Confidence",
  ],

  // Core Tactics
  qrCodePlacement: {
    id: 1,
    tactic: "QR Code Voter Engagement",
    category: "Digital",
    implementationComplexity: "Low",
    costProfile: "Very Low",
    expectedReach: "500-2000 scans per location per day",
    targetSegment: ["Urban voters", "Young voters", "NRI-connected families"],
    effectivenessRating: "Medium - depends on incentive and placement",
  },

  cableTVInsertion: {
    id: 2,
    tactic: "Cable TV Local Insertion",
    category: "Mass",
    implementationComplexity: "Medium",
    costProfile: "Low",
    expectedReach: "50,000-100,000 daily impressions per network",
    targetSegment: ["Rural voters", "Family viewers", "Elder viewers"],
    effectivenessRating: "High - proven in Punjab cable TV market",
  },

  whatsAppStatusAd: {
    id: 3,
    tactic: "WhatsApp Status Advertisement",
    category: "Digital",
    implementationComplexity: "Low",
    costProfile: "Very Low",
    expectedReach: "500-5000 views per ad per day",
    targetSegment: ["WhatsApp users", "Family networks", "Youth"],
    effectivenessRating: "Very High - lowest CPC available",
  },

  autoRickshawWrap: {
    id: 4,
    tactic: "Auto-Rickshaw Mobile Branding",
    category: "Ambient",
    implementationComplexity: "Low",
    costProfile: "Low",
    expectedReach: "200-500 daily impressions per vehicle",
    targetSegment: ["Urban commuters", "Rural market visitors", "Daily travelers"],
    effectivenessRating: "Medium - good for local reach",
  },

  apmcMarketPresence: {
    id: 5,
    tactic: "APMC Mandi Voter Engagement",
    category: "Community",
    implementationComplexity: "Medium",
    costProfile: "Low",
    expectedReach: "1000-5000 farmers per market per day",
    targetSegment: ["Farmers", "Agricultural laborers", "Traders"],
    effectivenessRating: "High - concentrated farmer audience",
  },

  villageFairBooth: {
    id: 6,
    tactic: "Village Fair & Festival Booth",
    category: "Event-Based",
    implementationComplexity: "Medium",
    costProfile: "Low",
    expectedReach: "500-2000 per fair",
    targetSegment: ["Rural voters", "Families", "Multiple communities"],
    effectivenessRating: "High - festive atmosphere conducive to engagement",
  },

  cremationGroundBranding: {
    id: 7,
    tactic: "Cremation/Burial Ground Memorial Branding",
    category: "Ambient",
    implementationComplexity: "High",
    costProfile: "Low",
    expectedReach: "Family members of deceased",
    targetSegment: ["Family decision makers", "Elder community members", "Community respect holders"],
    effectivenessRating: "Medium - respectful approach required",
  },

  schoolGateOutreach: {
    id: 8,
    tactic: "School/College Gate Parent Outreach",
    category: "Community",
    implementationComplexity: "Medium",
    costProfile: "Low",
    expectedReach: "500-2000 parents per school per event",
    targetSegment: ["Parents", "Family voters", "Women"],
    effectivenessRating: "High - parents are decisive voters",
  },

  mobileLEDVan: {
    id: 9,
    tactic: "Mobile LED Van Campaign",
    category: "Ambient",
    implementationComplexity: "Medium",
    costProfile: "Medium",
    expectedReach: "5000-20000 daily impressions per van",
    targetSegment: ["Rural audiences", "Market areas", "Event crowds"],
    effectivenessRating: "High - visual impact in public spaces",
  },

  iplWatchParty: {
    id: 10,
    tactic: "IPL Cricket Watch Party Political Engagement",
    category: "Event-Based",
    implementationComplexity: "High",
    costProfile: "Medium",
    expectedReach: "50000+ viewers per match across all parties",
    targetSegment: ["Youth", "Sports fans", "Family groups"],
    effectivenessRating: "Very High - cricket mad Punjab audience",
  },

  whatsAppChannelLaunch: {
    id: 11,
    tactic: "WhatsApp Channel Official Launch",
    category: "Digital",
    implementationComplexity: "Low",
    costProfile: "Very Low",
    expectedReach: "100000+ subscribers with proper promotion",
    targetSegment: ["WhatsApp users", "Family networks", "NRI families"],
    effectivenessRating: "Very High - direct to voter communication",
  },

  // Additional
  additionalTactics: [
    {
      id: 12,
      tactic: "WhatsApp Group Seeding",
      description: "Place Congress supporters as members in rival political WhatsApp groups to share content",
      implementationNotes: "Requires careful selection of participants; provide content library",
      costEfficiency: "Very High",
      riskFactors: ["Group discovery", "Moderation", "Potential backlash"],
    },
    {
      id: 13,
      tactic: "Cable Operator Partnerships",
      description: "Partner with local cable operators to display Congress content on local TV networks",
      implementationNotes: "Build relationships with cable operators; provide content",
      costEfficiency: "High",
      riskFactors: ["Operator loyalty", "AAP competition"],
    },
    {
      id: 14,
      tactic: "Village Sikh Religious Gathering (Diwan) Presence",
      description: "Congress representative attends village religious gatherings with proper respect",
      implementationNotes: "Must be invited or welcomed; provide service not just messaging",
      costEfficiency: "Medium",
      riskFactors: ["Not always welcomed", "Requires community relationships"],
    },
  ],

  // Metrics
  qrCodeMetrics: {
    placements: "500-1000 locations targeted",
    estimatedScans: "50,000-200,000 total scans",
    scanRate: "5-15% of those who see QR",
    costPerScan: "₹0.50-2.00",
    voteConversionEstimate: "2-5% of scanners",
  },

  cableTVCostEfficiency: {
    cpcEstimate: "₹0.35-0.60",
    cpmEstimate: "₹350-600",
    comparableDigitalCPM: "₹150-300 (Meta)",
    reachAdvantage:
      "Cable TV reaches non-Facebook users; better for rural and elderly",
  },

  whatsAppStatusMetrics: {
    estimatedViews: "500-5000 per status",
    saveRate: "5-10%",
    shareRate: "3-8%",
    cpcEstimate: "₹0.05-0.15",
    engagementRate: "15-25% (viewers who react or respond)",
  },

  autoRickshawMetrics: {
    vehiclesDeployed: "200-500 vehicles per constituency",
    dailyImpressions: "100,000-250,000 impressions",
    routeCoverage: "Urban and semi-urban routes",
    costPerDay: "₹30,000-75,000 per constituency",
    costPerImpression: "₹0.30-0.75",
  },

  apmcMetrics: {
    marketsCovered: "10-20 major APMCs",
    farmersReached: "50,000-100,000 per market season",
    engagementRate: "20-40% of visitors",
    costPerEngagement: "₹5-15 per farmer contacted",
  },

  villageFairMetrics: {
    eventsParticipated: "50-100 fairs per constituency",
    attendeesEstimated: "100,000-200,000 per constituency",
    voterRegistrations: "500-2000 per fair",
    contactCardsCollected: "1000-5000 per fair",
    costPerEvent: "₹15,000-40,000",
  },

  schoolGateMetrics: {
    institutionsTargeted: "20-50 per constituency",
    parentsReached: "10,000-50,000 per constituency",
    contactConversion: "15-25% provide contact info",
    eventsPerMonth: "5-10 per constituency",
    costPerInstitution: "₹5000-15,000",
  },

  mobileLEDMetrics: {
    vansDeployed: "3-5 per constituency",
    locationsPerDay: "10-20 per van",
    impressionsPerDay: "50,000-100,000 per constituency",
    costPerVanPerDay: "₹10,000-20,000",
    costPerThousandImpressions: "₹150-400",
  },

  iplWatchPartyMetrics: {
    venuesOrganized: "100-300 across Punjab",
    attendanceTotal: "50,000-150,000 total viewers",
    engagementConversion: "10-20% engagement rate",
    costPerAttendee: "₹50-150",
    socialMediaUplift: "2-5x normal during IPL",
  },

  whatsAppChannelMetrics: {
    subscriberTarget: "100,000-500,000",
    weeklyReach: "50,000-200,000",
    engagementRate: "10-20%",
    forwardRate: "5-15%",
    subscriberGrowthRate: "10-20% per week with active promotion",
  },

  // Integration
  integrationPlan: {
    primaryTactics: [
      "WhatsApp Channel Launch",
      "WhatsApp Status Ads",
      "Cable TV Insertion",
    ],
    supportingTactics: [
      "Auto-Rickshaw Wraps",
      "Mobile LED Van",
      "Village Fair Booths",
    ],
    sequencingRecommendation:
      "1) WhatsApp Channel first (creates infrastructure), 2) Status Ads during campaign (ongoing), 3) Physical presence tactics last 30 days",
    crossTacticSynergies: [
      "QR codes on auto-rickshaws lead to WhatsApp channel",
      "Cable TV promotes IPL watch party",
      "Village fairs include WhatsApp follow-up signups",
    ],
    budgetAllocation:
      "Digital: 40%, Physical Events: 35%, Ambient: 25%",
    expectedCombinedReach:
      "Cover 70-80% of voters through at least one unorthodox channel",
  },

  campaignCalendar: [
    {
      tactic: "WhatsApp Channel Launch",
      launchTiming: "T-90 days (November 2026)",
      duration: "Ongoing through election",
      peakEffectiveness: "Last 30 days",
      electionProximity: "Builds subscriber base early",
    },
    {
      tactic: "WhatsApp Status Ads",
      launchTiming: "T-60 days (December 2026)",
      duration: "Daily posting",
      peakEffectiveness: "Last 21 days",
      electionProximity: "Intensifies as election approaches",
    },
    {
      tactic: "Cable TV Insertion",
      launchTiming: "T-45 days (January 2027)",
      duration: "Throughout campaign",
      peakEffectiveness: "Middle 30 days",
      electionProximity: "Consistent presence",
    },
    {
      tactic: "Auto-Rickshaw Wraps",
      launchTiming: "T-30 days (February 2027)",
      duration: "Last 30 days",
      peakEffectiveness: "Last 14 days",
      electionProximity: "High frequency at end",
    },
    {
      tactic: "Village Fair Booths",
      launchTiming: "T-21 days (Late February)",
      duration: "Festivals and weekends",
      peakEffectiveness: "Weekends",
      electionProximity: "Weekend intensives",
    },
    {
      tactic: "IPL Watch Party",
      launchTiming: "T-14 days (March 2027)",
      duration: "During IPL matches",
      peakEffectiveness: "Match days",
      electionProximity: "IPL season coincides with election period",
    },
    {
      tactic: "Mobile LED Van",
      launchTiming: "T-7 days (March 2027)",
      duration: "Last 7 days",
      peakEffectiveness: "Final week",
      electionProximity: "Maximum intensity final week",
    },
  ],

  // Confidence
  knowledgeConfidence: [
    {
      category: "Cost Estimates",
      confidenceLevel: "Medium",
      punjabValidation: "Based on local vendor quotes; needs confirmation",
      costEstimateReliability: "Estimates +/- 20%",
    },
    {
      category: "Reach Estimates",
      confidenceLevel: "Medium",
      punjabValidation: "Industry benchmarks; actual performance varies",
      costEstimateReliability: "Estimates +/- 30%",
    },
    {
      category: "Effectiveness Ratings",
      confidenceLevel: "Low",
      punjabValidation: "Based on general marketing principles; limited Punjab-specific data",
      costEstimateReliability: "High uncertainty",
    },
  ],
};
