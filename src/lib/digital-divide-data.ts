// @ts-nocheck
// Digital Divide & Media Accessibility Data for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g37-digital-divide-media-accessibility.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G37

import type { DigitalDivideData } from "@/types/digital-divide-types";

export const DIGITAL_DIVIDE_DATA: DigitalDivideData = {
  documentDate: "20 May 2026",
  agent: "Track B",
  taskId: "G37",
  frameworkSections: [
    "Digital Penetration Overview",
    "Voter Segment Accessibility",
    "Media Consumption Patterns",
    "Geographic Digital Divide",
    "Constituency Classification",
    "Offline-Primary Voter Strategy",
    "Channel Selection Matrix",
    "Knowledge Confidence",
  ],

  // Overview
  stateDigitalOverview: {
    smartphoneOverall: "72-76%",
    internetOverall: "68-72%",
    digitalPrimaryVoters: "58-62%",
    offlinePrimaryVoters: "28-32%",
    hybridVoters: "10-12%",
  },

  penetrationByArea: [
    {
      category: "Urban",
      smartphonePenetration: "84-87%",
      internetAccess: "80-84%",
      socialMediaUsage: "70-75%",
      whatsapppenetration: "78-82%",
      changeTrend: "Stable, near saturation",
    },
    {
      category: "Rural",
      smartphonePenetration: "62-68%",
      internetAccess: "55-62%",
      socialMediaUsage: "45-52%",
      whatsapppenetration: "58-65%",
      changeTrend: "Increasing 3-5% annually",
    },
  ],

  // Segment Accessibility
  segmentAccessibility: [
    {
      segment: "Urban Youth (18-35)",
      sizePercent: "15-18%",
      primaryMedia: "WhatsApp, Instagram, YouTube",
      secondaryMedia: "Facebook, Twitter",
      tertiaryMedia: "TV News, Print",
      reachStrategy: "Digital-first with social emphasis",
      accessibilityScore: "High",
    },
    {
      segment: "Urban Middle Age (36-50)",
      sizePercent: "12-15%",
      primaryMedia: "WhatsApp, Facebook",
      secondaryMedia: "TV News, Print",
      tertiaryMedia: "YouTube, Instagram",
      reachStrategy: "WhatsApp + Cable TV combination",
      accessibilityScore: "High",
    },
    {
      segment: "Rural Youth (18-35)",
      sizePercent: "10-12%",
      primaryMedia: "WhatsApp",
      secondaryMedia: "Facebook",
      tertiaryMedia: "Cable TV, Village PA",
      reachStrategy: "WhatsApp dominant; supplement with events",
      accessibilityScore: "Medium",
    },
    {
      segment: "Rural Adults (36-55)",
      sizePercent: "15-18%",
      primaryMedia: "WhatsApp, Cable TV",
      secondaryMedia: "TV News, Village PA",
      tertiaryMedia: "Facebook",
      reachStrategy: "Cable TV + WhatsApp through family",
      accessibilityScore: "Medium",
    },
    {
      segment: "Elderly (65+)",
      sizePercent: "10-12%",
      primaryMedia: "TV News, Cable TV",
      secondaryMedia: "Radio, Village PA",
      tertiaryMedia: "Family mediated digital",
      reachStrategy: "Traditional media + family influence",
      accessibilityScore: "Low",
    },
  ],

  scVoterAccessibility: {
    segment: "SC Voters",
    digitalPenetration: "55-65%",
    smartphoneOwnership: "50-60%",
    whatsappUsage: "45-55%",
    facebookUsage: "35-45%",
    offlineMediaReliance: "40-50% rely on offline channels",
    recommendedChannels: [
      "Door-to-Door (critical)",
      "Community gatherings",
      "WhatsApp (through family networks)",
      "Cable TV",
      "Village PA announcements",
    ],
    boothLevelStrategy:
      "Every SC-majority booth needs dedicated D2D team; use SC volunteers",
  },

  ruralWomenAccessibility: {
    segment: "Rural Women",
    smartphoneOwnership: "45-55%",
    internetAccess: "40-50%",
    whatsappUsage: "40-50%",
    tvAccessibility: "70-80% (family TV)",
    radioAccessibility: "50-60%",
    familyMediatedAccess:
      "75% access digital content through family members, especially male heads",
    recommendedChannels: [
      "Door-to-Door with female volunteers",
      "WhatsApp (family-mediated)",
      "Cable TV ads during family viewing time",
      "Women self-help group meetings",
      "Anganwadi center connections",
    ],
  },

  elderlyVoterAccessibility: {
    segment: "Elderly (65+)",
    digitalPenetration: "35-45%",
    traditionalMediaReliance: "85-90% rely on TV and radio",
    familyInfluenceMediation:
      "Elderly vote decisions often influenced by family members who have digital access",
    recommendedChannels: [
      "Cable TV (Punjabi news channels)",
      "Door-to-Door (respectful engagement)",
      "Village PA announcements",
      "Family-mediated messaging",
      "Community religious gatherings",
    ],
  },

  // Media Consumption
  mediaConsumptionBySegment: [
    {
      segment: "Urban Male 25-50",
      primaryChannel: "WhatsApp + YouTube",
      secondaryChannel: "Facebook + TV News",
      tertiaryChannel: "Print newspapers",
      dailyConsumptionHours: "3-4 hours digital, 1-2 hours TV",
      trustedMediaSource: "WhatsApp forward messages, local TV",
      persuasionSusceptibility: "Medium - skeptical of political ads",
    },
    {
      segment: "Urban Female 25-50",
      primaryChannel: "WhatsApp (family groups)",
      secondaryChannel: "TV Serials",
      tertiaryChannel: "Facebook",
      dailyConsumptionHours: "2-3 hours digital, 2-3 hours TV",
      trustedMediaSource: "WhatsApp messages, neighbors",
      persuasionSusceptibility: "High for family welfare issues",
    },
    {
      segment: "Rural Male 25-50",
      primaryChannel: "WhatsApp + Facebook",
      secondaryChannel: "Cable TV",
      tertiaryChannel: "Village PA",
      dailyConsumptionHours: "2-3 hours digital, 2-3 hours TV",
      trustedMediaSource: "WhatsApp messages, local leaders",
      persuasionSusceptibility: "High - values personal relationships",
    },
    {
      segment: "Rural Female 25-50",
      primaryChannel: "TV Serials + Cable TV",
      secondaryChannel: "WhatsApp (family mediated)",
      tertiaryChannel: "Radio",
      dailyConsumptionHours: "3-4 hours TV, 1-2 hours digital",
      trustedMediaSource: "TV programs, neighbors, family",
      persuasionSusceptibility: "High - responds to welfare and family themes",
    },
    {
      segment: "Elderly 65+",
      primaryChannel: "TV News (Punjabi)",
      secondaryChannel: "Radio",
      tertiaryChannel: "Cable TV",
      dailyConsumptionHours: "4-6 hours TV/Radio",
      trustedMediaSource: "TV news anchors, religious figures",
      persuasionSusceptibility: "Medium - values traditional authority",
    },
  ],

  whatsappUsage: {
    totalUsers: "16-18 million in Punjab",
    urbanUsers: "8-10 million",
    ruralUsers: "8-9 million",
    ageDistribution: "18-45 dominant (75%), 45+ growing",
    groupUsage:
      "Average user in 8-12 WhatsApp groups; family groups most trusted",
    politicalContentExposure:
      "35-45% receive political content weekly; 15-20% actively share",
  },

  cableTVPenetration: {
    totalHouseholds: "45-50 lakh",
    urbanCoverage: "85-90%",
    ruralCoverage: "75-80%",
    localCableNetworks: "500+ local operators",
    regionalChannels: "5-7 Punjabi channels with significant viewership",
  },

  printMediaReach: {
    dailyNewspapers: "15-20 lakh copies",
    vernacularReach: "85-90% of newspaper readers",
    urbanReach: "High",
    ruralReach: "Medium - delivery issues",
    digitalSubscribers: "Growing but small (2-3 lakh)",
  },

  // Geographic
  regionalDigitalProfiles: [
    {
      region: "Malwa",
      smartphonePenetration: "65-70%",
      internetAccess: "58-65%",
      socialMediaActive: "50-55%",
      offlineVoterPercent: "32-38%",
      urbanRuralMix: "Predominantly rural with few urban centers",
    },
    {
      region: "Majha",
      smartphonePenetration: "70-75%",
      internetAccess: "65-72%",
      socialMediaActive: "55-60%",
      offlineVoterPercent: "25-30%",
      urbanRuralMix: "Border region, balanced mix",
    },
    {
      region: "Doaba",
      smartphonePenetration: "72-78%",
      internetAccess: "68-75%",
      socialMediaActive: "58-65%",
      offlineVoterPercent: "22-28%",
      urbanRuralMix: "Most urbanized rural region",
    },
  ],

  malwaProfile: {
    region: "Malwa",
    digitalChallenge:
      "Lowest digital penetration in Punjab; highest offline voter population",
    ruralConnectivityGap:
      "15-20% of rural Malwa lacks reliable internet; connectivity drops in winters",
    whatsapppenetration: "60-68%",
    offlineVoterPercent: "32-38%",
  },

  majhaProfile: {
    region: "Majha",
    urbanRuralBalance:
      "More balanced than Malwa; Amritsar urban vs. rural border villages",
    nriConnectedFamilies:
      "High NRI population; remittance economy drives digital adoption",
    offlineVoterPercent: "25-30%",
  },

  doabaProfile: {
    region: "Doaba",
    nriDigitalConnectivity:
      "Highest - NRI families maintain digital ties; WhatsApp usage very high",
    youthDigitalNativeness:
      "Highest youth population and digital adoption in Punjab",
    offlineVoterPercent: "22-28%",
  },

  // Classification
  tier1DigitalPrimary: {
    tier: "Tier 1",
    description: "Digital-primary contact possible for majority of voters",
    seatCount: "35 seats",
    characteristics: [
      "Smartphone penetration >75%",
      "WhatsApp usage >70%",
      "Urban or semi-urban",
      "Youth population above average",
    ],
    primaryStrategy: "WhatsApp + Instagram + YouTube + D2D hybrid",
    digitalChannelPercent: "60% of outreach",
    offlineSupport: "GOTV phone banking supplement",
  },

  tier2Hybrid: {
    tier: "Tier 2",
    description: "Mixed digital and offline contact required",
    seatCount: "50 seats",
    characteristics: [
      "Smartphone penetration 60-75%",
      "WhatsApp usage 55-70%",
      "Mixed urban-rural",
      "Significant elderly population",
    ],
    strategyApproach: "Balanced WhatsApp + Cable TV + D2D + Village PA",
    channelMixRecommendation:
      "40% digital, 30% cable/TV, 30% ground outreach",
  },

  tier3OfflinePrimary: {
    tier: "Tier 3",
    description: "Offline channels dominant; digital supplement only",
    seatCount: "32 seats",
    characteristics: [
      "Smartphone penetration <60%",
      "WhatsApp usage <55%",
      "Predominantly rural",
      "High elderly population",
      "Malwa region concentrated",
    ],
    offlineStrategy: "D2D + Village PA + Cable TV + Community events",
    digitalSupplement:
      "WhatsApp through family members; do not assume voter has own smartphone",
  },

  constituencyClassifications: [
    {
      constituencyName: "Urban seats (sample)",
      tier: "Tier 1 Digital-Primary",
      digitalPenetrationScore: "78-88%",
      offlineVoterPercent: "12-22%",
      recommendedChannelMix: "WhatsApp 35%, D2D 25%, TV 20%, Other 20%",
    },
    {
      constituencyName: "Doaba semi-urban",
      tier: "Tier 1 Digital-Primary",
      digitalPenetrationScore: "75-82%",
      offlineVoterPercent: "18-25%",
      recommendedChannelMix: "WhatsApp 35%, D2D 30%, Cable 20%, Other 15%",
    },
    {
      constituencyName: "Majha rural",
      tier: "Tier 2 Hybrid",
      digitalPenetrationScore: "65-75%",
      offlineVoterPercent: "25-35%",
      recommendedChannelMix: "WhatsApp 30%, D2D 30%, Cable 25%, Other 15%",
    },
    {
      constituencyName: "Malwa rural",
      tier: "Tier 3 Offline-Primary",
      digitalPenetrationScore: "50-62%",
      offlineVoterPercent: "38-50%",
      recommendedChannelMix: "D2D 40%, Cable 25%, Village PA 20%, WhatsApp 15%",
    },
  ],

  // Offline Strategy
  offlineVoterProfiles: [
    {
      profile: "Rural Elderly (65+)",
      percentOfElectorate: "8-10%",
      concentrationRegion: "All rural regions, Malwa highest",
      estimatedAbsoluteNumbers: "40-50 lakh voters",
      mediaConsumption: "TV News, Radio, Village PA",
      influencePathways:
        "Family decision influenced by children; respect for local leaders",
      mobilizationApproach:
        "Through family members; D2D by respected local volunteers; Cable TV ads",
    },
    {
      profile: "Rural Women (low digital)",
      percentOfElectorate: "10-12%",
      concentrationRegion: "Malwa and Majha rural",
      estimatedAbsoluteNumbers: "50-60 lakh voters",
      mediaConsumption: "TV Serials, Family-mediated WhatsApp, Radio",
      influencePathways:
        "Male family members; women gatherings; anganwadi networks",
      mobilizationApproach:
        "Female Congress volunteers; women self-help groups; Cable TV during serial time",
    },
    {
      profile: "Agricultural Laborers",
      percentOfElectorate: "12-15%",
      concentrationRegion: "SC-concentrated rural areas",
      estimatedAbsoluteNumbers: "60-75 lakh voters",
      mediaConsumption: "Village PA, Cable TV, Radio",
      influencePathways:
        "Sarpanch, SC community leaders, agricultural union leaders",
      mobilizationApproach:
        "Through community leaders; D2D in villages; village fair presence",
    },
    {
      profile: "Migrant Workers",
      percentOfElectorate: "5-8%",
      concentrationRegion: "Urban peripheries, industrial areas",
      estimatedAbsoluteNumbers: "25-40 lakh voters",
      mediaConsumption: "Limited; seasonal return",
      influencePathways:
        "Village networks; construction/labor associations; family",
      mobilizationApproach:
        "Contact during seasonal returns; WhatsApp through family; labor union connections",
    },
  ],

  doorToDoorImportance: {
    rationale:
      "D2D is the ONLY channel that reliably reaches all voter segments regardless of digital access",
    costImplication:
      "Higher cost per contact but highest conversion; essential for Tier 3 seats",
    staffingRequirement:
      "Need 500-1000 trained volunteers per constituency for effective D2D",
    expectedEffectiveness:
      "25-35% vote conversion among contacted voters in Tier 3; 15-20% in Tier 1",
  },

  villageAnnouncementValue: {
    paSystemCoverage:
      "80-85% of villages have functional PA systems; morning/evening announcements",
    villageReach:
      "60-75% of village population hears daily announcements",
    costEfficiency: "Lowest cost per person reached in rural areas",
    messageRetention:
      "Moderate - simple messages work best; repeat announcements improve recall",
    bestUsedFor:
      "Event announcements, election reminders, simple issue messages, GOTV",
  },

  // Channel Matrix
  channelAccessibilityScores: [
    {
      channel: "WhatsApp",
      urbanScore: "90/100",
      ruralScore: "72/100",
      scWomenScore: "55/100",
      youthScore: "95/100",
      elderlyScore: "25/100",
      overallImportance: "Primary for most segments",
    },
    {
      channel: "Door-to-Door",
      urbanScore: "75/100",
      ruralScore: "88/100",
      scWomenScore: "85/100",
      youthScore: "65/100",
      elderlyScore: "80/100",
      overallImportance: "Critical for offline-primary segments",
    },
    {
      channel: "Cable TV",
      urbanScore: "82/100",
      ruralScore: "85/100",
      scWomenScore: "80/100",
      youthScore: "70/100",
      elderlyScore: "85/100",
      overallImportance: "High for rural and family reach",
    },
    {
      channel: "Village PA",
      urbanScore: "10/100",
      ruralScore: "85/100",
      scWomenScore: "75/100",
      youthScore: "60/100",
      elderlyScore: "80/100",
      overallImportance: "Essential for rural outreach",
    },
    {
      channel: "SMS",
      urbanScore: "80/100",
      ruralScore: "65/100",
      scWomenScore: "50/100",
      youthScore: "75/100",
      elderlyScore: "35/100",
      overallImportance: "Support channel for reminders",
    },
    {
      channel: "Phone Banking",
      urbanScore: "78/100",
      ruralScore: "60/100",
      scWomenScore: "45/100",
      youthScore: "70/100",
      elderlyScore: "40/100",
      overallImportance: "Moderate - supplement to physical contact",
    },
  ],

  multiChannelIntegrations: [
    {
      segment: "Young Urban (18-35)",
      primaryChannel: "WhatsApp",
      secondaryChannel: "Instagram Reels",
      tertiaryChannel: "YouTube",
      fallbackChannel: "SMS",
      integrationNotes:
        "Start with WhatsApp awareness; Instagram/YouTube for depth; SMS as fallback",
    },
    {
      segment: "Rural Adults (36-55)",
      primaryChannel: "WhatsApp",
      secondaryChannel: "Cable TV",
      tertiaryChannel: "D2D",
      fallbackChannel: "Village PA",
      integrationNotes:
        "WhatsApp through family; Cable TV evening; D2D for voter ID; Village PA for reminders",
    },
    {
      segment: "Elderly (65+)",
      primaryChannel: "Cable TV",
      secondaryChannel: "D2D",
      tertiaryChannel: "Village PA",
      fallbackChannel: "Radio",
      integrationNotes:
        "Cable TV Punjabi news; D2D by respectful local volunteers; Village PA announcements",
    },
    {
      segment: "SC Women",
      primaryChannel: "D2D (female volunteers)",
      secondaryChannel: "WhatsApp (family)",
      tertiaryChannel: "Community gatherings",
      fallbackChannel: "Cable TV",
      integrationNotes:
        "Female D2D volunteers essential; WhatsApp via family; community leader endorsement",
    },
  ],

  // Confidence
  knowledgeConfidence: [
    {
      category: "Digital Penetration Rates",
      confidenceLevel: "Medium",
      dataSource: "Industry reports, telco data",
      punjabSpecificValidation: "Needs constituency-level validation",
    },
    {
      category: "Media Consumption Patterns",
      confidenceLevel: "Medium",
      dataSource: "Benchmark surveys, industry data",
      punjabSpecificValidation: "Limited Punjab-specific research",
    },
    {
      category: "Segment Accessibility",
      confidenceLevel: "Medium",
      dataSource: "Expert estimates, general research",
      punjabSpecificValidation: "Needs field research",
    },
    {
      category: "Channel Effectiveness",
      confidenceLevel: "Low",
      dataSource: "General marketing principles",
      punjabSpecificValidation: "No Punjab-specific channel testing data",
    },
  ],
};
