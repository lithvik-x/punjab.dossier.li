// @ts-nocheck
// Voter Contact Optimization Data for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g16-voter-contact-optimization-framework.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G16

import type { VoterContactOptimizationData } from "@/types/voter-contact-optimization-types";

export const VOTER_CONTACT_OPTIMIZATION_DATA: VoterContactOptimizationData = {
  documentDate: "20 May 2026",
  agent: "Track B",
  taskId: "G16",
  frameworkSections: [
    "Contact Prioritization Tiers",
    "Channel Optimization",
    "Contact Sequence Optimization",
    "Message Differentiation",
    "A/B Testing Framework",
    "Conversion Tracking",
    "Special Segment Strategies",
    "Resource Allocation",
    "Knowledge Confidence",
  ],

  // Prioritization
  contactTiers: [
    {
      tier: "Tier 1",
      conversionPotential: "Highest - Swing voters, occasional voters, protest voters",
      resourceAllocation: "45% of contact resources",
      contactFrequencyFormula: "5-7 contacts over campaign period",
      priorityCriteria: [
        "Recent shift in voting intention",
        "Low partisan loyalty",
        "High issue responsiveness",
        "Accessible via preferred channel",
      ],
      targetVoterProfile:
        "Swing voters, first-time voters, 2017-2022 protest voters considering Congress",
    },
    {
      tier: "Tier 2",
      conversionPotential: "Medium - Core supporters needing GOTV, soft Congress voters",
      resourceAllocation: "35% of contact resources",
      contactFrequencyFormula: "3-4 contacts over campaign period",
      priorityCriteria: [
        "Some partisan loyalty but weak commitment",
        "Positive views of Congress but not decided",
        "Traditional Congress families showing apathy",
      ],
      targetVoterProfile:
        "Weak Congress identifiers, occasional voters, Congress family members not planning to vote",
    },
    {
      tier: "Tier 3",
      conversionPotential: "Low - Deep loyalists, opposition locked voters",
      resourceAllocation: "20% of contact resources",
      contactFrequencyFormula: "1-2 contacts (GOTV only for own voters)",
      priorityCriteria: [
        "Strong opposition partisan loyalty",
        "Anti-Congress sentiment",
        "Vote already decided for AAP/SAD",
      ],
      targetVoterProfile:
        "Committed AAP/SAD voters, anti-Congress campaign victims",
    },
  ],

  tierAllocations: [
    {
      tier: "Tier 1",
      percentOfResources: "45%",
      contactGoal: "Contact each Tier 1 voter 5-7 times",
      expectedConversion: "15-20% shift toward Congress",
    },
    {
      tier: "Tier 2",
      percentOfResources: "35%",
      contactGoal: "Contact each Tier 2 voter 3-4 times",
      expectedConversion: "GOTV: 10-15% turnout increase",
    },
    {
      tier: "Tier 3",
      percentOfResources: "20%",
      contactGoal: "Minimal contact, GOTV only for own voters",
      expectedConversion: "Protect existing vote",
    },
  ],

  // Channels
  channels: [
    {
      name: "Door-to-Door (D2D)",
      category: "Face-to-Face",
      advantages: [
        "Highest persuasion effectiveness",
        "Personal connection",
        "Question/answer engagement",
        "Voter ID and commitment collection",
      ],
      implementationRequirements: [
        "Trained volunteers",
        "Voter lists with booth assignments",
        "Supervision structure",
        "Transportation",
      ],
      punjabSpecificAdvantage: [
        "Rural Punjabi hospitality - people stay to listen",
        "Family decision-making - multiple household members present",
        "Trust in local volunteers",
      ],
      conversionMetrics: {
        contactRate: "35-45% at home",
        conversationRate: "20-30% complete conversation",
        voteConversionRate: "25-35% among contacted",
        costPerContact: "₹15-25",
        roi: "Highest",
      },
      bestUsedFor: ["Tier 1 voters", "GOTV", "Rural areas", "SC voters"],
      limitations: [
        "Staff intensive",
        "Time consuming",
        "Urban access issues",
        "Female voter D2D challenging",
      ],
    },
    {
      name: "Phone Banking",
      category: "Telephonic",
      advantages: [
        "Broad reach",
        "Quick contact",
        "Cost effective",
        "Voter ID possible",
      ],
      implementationRequirements: [
        "Phone number database",
        "Call center setup",
        "Scripted conversations",
        "Call scheduling",
      ],
      punjabSpecificAdvantage: [
        "Works for urban voters",
        "NRIs can be contacted",
        "Quick voter ID in competitive seats",
      ],
      conversionMetrics: {
        contactRate: "15-25% answered",
        conversationRate: "10-15% engaged",
        voteConversionRate: "10-15% among contacted",
        costPerContact: "₹5-10",
        roi: "High",
      },
      bestUsedFor: ["Urban voters", "Voter ID", "First contact", "NRI families"],
      limitations: [
        "Low engagement rates",
        "Calls ignored",
        "No visual persuasion",
        "Script rigidity",
      ],
    },
    {
      name: "WhatsApp",
      category: "Digital",
      advantages: [
        "High open rates",
        "Shareable content",
        "Video capability",
        "Group messaging",
        "Cost effective",
      ],
      implementationRequirements: [
        "Contact lists",
        "Content creation",
        "Group management",
        "Forward networks",
      ],
      punjabSpecificAdvantage: [
        "Universal penetration in Punjab",
        "Family groups enable reach",
        "Video content highly shared",
        "Youth channel to elders",
      ],
      conversionMetrics: {
        contactRate: "70-80% delivered",
        conversationRate: "N/A",
        voteConversionRate: "12-18% measured shift",
        costPerContact: "₹0.10-0.50",
        roi: "Very High",
      },
      bestUsedFor: ["Awareness", "Event promotion", "Peer influence", "Youth reach",
      ],
      limitations: [
        "No direct voter ID",
        "Message saturation",
        "Forward chain dependency",
        "Difficult elderly reach",
      ],
    },
    {
      name: "SMS",
      category: "Digital",
      advantages: [
        "Direct delivery",
        "Simple messaging",
        "Broad reach",
        "Personalization possible",
      ],
      implementationRequirements: [
        "Mobile number database",
        "SMS gateway",
        "Message templates",
        "Timing optimization",
      ],
      punjabSpecificAdvantage: [
        "Works where WhatsApp blocked",
        "Reaches feature phone users",
        "Simple compliance",
      ],
      conversionMetrics: {
        contactRate: "90-95% delivered",
        conversationRate: "N/A",
        voteConversionRate: "5-8% measured shift",
        costPerContact: "₹0.30-0.60",
        roi: "Medium",
      },
      bestUsedFor: ["Reminder", "Event announcement", "Elder families", "Feature phone users"],
      limitations: [
        "No engagement",
        "Low attention",
        "Spam perception",
        "Limited content",
      ],
    },
    {
      name: "Village PA Announcements",
      category: "Mass",
      advantages: [
        "Rural penetration",
        "Family reception",
        "Authority presence",
        "Repeat reach",
      ],
      implementationRequirements: [
        "PA system equipment",
        "Local permission",
        "Scripted messages",
        "Timing coordination",
      ],
      punjabSpecificAdvantage: [
        "Village sarpanch coordination possible",
        "Morning/evening timing reaches everyone",
        "Collective reception - peer influence",
      ],
      conversionMetrics: {
        contactRate: "60-70% of village reached",
        conversationRate: "N/A",
        voteConversionRate: "8-12% measured shift",
        costPerContact: "₹2-5 per person",
        roi: "High for cost",
      },
      bestUsedFor: ["Rural GOTV", "Event announcement", "Elder families", "Collective villages"],
      limitations: [
        "No voter ID",
        "Message saturation",
        "Single direction",
        "Script rigidity",
      ],
    },
    {
      name: "Cable TV Ads",
      category: "Mass",
      advantages: [
        "Visual persuasion",
        "Family penetration",
        "Repeat exposure",
        "Local language",
      ],
      implementationRequirements: [
        "Local cable network agreements",
        "Ad content production",
        "Budget for slots",
        "Frequency planning",
      ],
      punjabSpecificAdvantage: [
        "Cable TV dominant in rural Punjab",
        "Family viewing - multiple voters reached",
        "Local cable operators known to Congress workers",
      ],
      conversionMetrics: {
        contactRate: "50-60% households",
        conversationRate: "N/A",
        voteConversionRate: "3-7% measured shift",
        costPerContact: "₹0.40-0.80",
        roi: "Medium-High",
      },
      bestUsedFor: ["Rural reach", "Visual impact", "Elder voters", "Family messaging"],
      limitations: [
        "No voter ID",
        "Passive viewing",
        "Remote control zapping",
        "Production costs",
      ],
    },
    {
      name: "Gurdwara Outreach",
      category: "Interpersonal",
      advantages: [
        "Concentrated Sikh voters",
        "Respectful setting",
        "Community leader presence",
        "Trust environment",
      ],
      implementationRequirements: [
        "Gurdwara committee relationships",
        "Community leader engagement",
        "Respectful messaging",
        "Service activities",
      ],
      punjabSpecificAdvantage: [
        "Sikh community values gurdwara settings",
        "Congress seen as protector of Sikh interests historically",
        "Granthis can be allies",
      ],
      conversionMetrics: {
        contactRate: "40-50% of congregation",
        conversationRate: "15-20% engaged after",
        voteConversionRate: "15-20% among contacted",
        costPerContact: "₹10-20",
        roi: "Medium",
      },
      bestUsedFor: ["Sikh voter persuasion", "Community endorsement", "Elder families", "NRI families"],
      limitations: [
        "Only Sikh voters",
        "Requires community relationships",
        "Religious neutrality concerns",
        "Limited frequency",
      ],
    },
  ],

  channelCostEfficiency: [
    {
      channel: "WhatsApp",
      costPerContact: "₹0.10-0.50",
      costPerVote: "₹15-30",
      roiRanking: 1,
      budgetRecommendation: "25% of digital budget",
    },
    {
      channel: "SMS",
      costPerContact: "₹0.30-0.60",
      costPerVote: "₹25-50",
      roiRanking: 2,
      budgetRecommendation: "10% of digital budget",
    },
    {
      channel: "Door-to-Door",
      costPerContact: "₹15-25",
      costPerVote: "₹60-120",
      roiRanking: 3,
      budgetRecommendation: "35% of ground budget",
    },
    {
      channel: "Village PA",
      costPerContact: "₹2-5",
      costPerVote: "₹40-80",
      roiRanking: 4,
      budgetRecommendation: "15% of rural budget",
    },
    {
      channel: "Phone Banking",
      costPerContact: "₹5-10",
      costPerVote: "₹80-150",
      roiRanking: 5,
      budgetRecommendation: "10% of outreach budget",
    },
    {
      channel: "Cable TV",
      costPerContact: "₹0.40-0.80",
      costPerVote: "₹100-200",
      roiRanking: 6,
      budgetRecommendation: "20% of media budget",
    },
    {
      channel: "Gurdwara",
      costPerContact: "₹10-20",
      costPerVote: "₹120-200",
      roiRanking: 7,
      budgetRecommendation: "10% of community budget",
    },
  ],

  channelIntegration: [
    {
      primaryChannel: "WhatsApp",
      secondaryChannel: "Door-to-Door",
      tertiaryChannel: "Gurdwara/Sikh religious gatherings",
      integrationRationale:
        "WhatsApp for awareness and network diffusion, D2D for Tier 1 voter ID and GOTV, Gurdwara for community endorsement",
      sequencingNotes:
        "WhatsApp first (build awareness), D2D second (personal persuasion), Gurdwara third (community validation)",
    },
    {
      primaryChannel: "SMS",
      secondaryChannel: "Village PA",
      tertiaryChannel: "Cable TV",
      integrationRationale:
        "SMS for reminders to feature phone users, PA for rural reach, Cable for visual reinforcement",
      sequencingNotes:
        "SMS first (quick reminder), PA second (village-wide), Cable third (evening visual)",
    },
  ],

  // Sequences
  firstContactStrategy: {
    objective: "Identify voter disposition and begin relationship",
    recommendedChannel: "WhatsApp or Phone Banking",
    messageFramework: "Introduction + Issue + Request",
    keyDataToCollect: [
      "Voter preference",
      "Key issues",
      "Preferred contact method",
      "Family voting pattern",
    ],
    followUpTrigger: "Any positive response triggers D2D follow-up",
  },

  gotvSequence: [
    {
      contactNumber: 1,
      daysBeforeElection: 14,
      channel: "WhatsApp/SMS",
      message: "Polling date reminder and booth location",
      action: "Remind and motivate",
    },
    {
      contactNumber: 2,
      daysBeforeElection: 7,
      channel: "Phone Banking",
      message: "Congress is in contention, your vote matters",
      action: "Intensify motivation",
    },
    {
      contactNumber: 3,
      daysBeforeElection: 3,
      channel: "Door-to-Door",
      message: "Personal request from local leader",
      action: "Final GOTV push",
    },
    {
      contactNumber: 4,
      daysBeforeElection: 1,
      channel: "Door-to-Door or Village PA",
      message: "Vote tomorrow - booth timing",
      action: "Last day GOTV",
    },
    {
      contactNumber: 5,
      daysBeforeElection: 0,
      channel: "Booth-level standby",
      message: "Transport assistance available",
      action: "Election day assistance",
    },
  ],

  contactSequenceOptimization: [
    {
      step: 1,
      channel: "WhatsApp Broadcast",
      timing: "Day 1-30 (Early Phase)",
      messageFocus: "Congress narrative and party story",
      objective: "Awareness",
      expectedResponse: "25% engagement",
    },
    {
      step: 2,
      channel: "Phone Banking",
      timing: "Day 15-30 (Mid Phase)",
      messageFocus: "Local issues and candidate introduction",
      objective: "Persuasion",
      expectedResponse: "10-15% identified as Congress supporters",
    },
    {
      step: 3,
      channel: "Door-to-Door",
      timing: "Day 20-45 (Late Phase)",
      messageFocus: "Personal connection and vote request",
      objective: "Persuasion + Voter ID",
      expectedResponse: "5-8% commit to Congress",
    },
    {
      step: 4,
      channel: "Gurdwara/Mass Gathering",
      timing: "Day 30-60 (Final Phase)",
      messageFocus: "Community endorsement and social proof",
      objective: "Social proof accumulation",
      expectedResponse: "Critical mass signal",
    },
  ],

  // Messages
  contactNumberMessages: [
    {
      contactNumber: 1,
      messageFramework: "Congress Story",
      contentFocus: "What Congress has done for Punjab, the narrative",
      tone: "Inspiring, positive",
      cta: "Learn more about Congress",
      specialInstructions: "Do not ask for vote on first contact",
    },
    {
      contactNumber: 2,
      messageFramework: "Local Issues",
      contentFocus: "Constituency-specific problems and Congress solutions",
      tone: "Empathetic, solution-oriented",
      cta: "Support Congress candidate",
    },
    {
      contactNumber: 3,
      messageFramework: "Candidate Introduction",
      contentFocus: "Candidate background and commitment",
      tone: "Personal, trustworthy",
      cta: "Will you support our candidate?",
    },
    {
      contactNumber: 4,
      messageFramework: "Social Proof",
      contentFocus: "Who else is supporting Congress in your area",
      tone: "Confident, building momentum",
      cta: "Join your neighbors - vote Congress",
    },
    {
      contactNumber: 5,
      messageFramework: "Urgency and GOTV",
      contentFocus: "Election is close, your vote counts",
      tone: "Urgent, warm",
      cta: "Please vote for Congress tomorrow",
    },
  ],

  segmentMessageMatrix: [
    {
      segment: "Young Voters (18-25)",
      issueEmphasis: "Jobs, education, future",
      emotionalAppeal: "Hope, aspiration",
      messengerRecommendation: "Young Congress leader",
      channelPreference: "WhatsApp, Instagram, YouTube",
    },
    {
      segment: "Jat Sikh Farmers",
      issueEmphasis: "Agriculture, MSP, debt relief",
      emotionalAppeal: "Pride, security",
      messengerRecommendation: "Jat leader, farmer organization",
      channelPreference: "D2D, WhatsApp, Gurdwara",
    },
    {
      segment: "SC Voters",
      issueEmphasis: "Welfare schemes, dignity, opportunity",
      emotionalAppeal: "Dignity, justice",
      messengerRecommendation: "SC community leader",
      channelPreference: "D2D, community gatherings",
    },
    {
      segment: "Rural Women",
      issueEmphasis: "Safety, welfare schemes, family",
      emotionalAppeal: "Security, care",
      messengerRecommendation: "Women Congress leader",
      channelPreference: "D2D (female volunteers), WhatsApp through family",
    },
    {
      segment: "Urban Middle Class",
      issueEmphasis: "Development, jobs, infrastructure",
      emotionalAppeal: "Progress, competence",
      messengerRecommendation: "Professional, business leader",
      channelPreference: "Digital, Cable TV, Phone Banking",
    },
  ],

  // Testing
  abTests: [
    {
      testName: "Message Frame Test",
      testType: "Message Frame",
      elements: [
        {
          variable: "Hope Frame",
          testGroup: "Congress will create 1 lakh jobs",
          controlGroup: "Congress provides employment",
          hypothesis: "Hope framing generates more enthusiasm",
          successMetric: "Voter ID rate",
        },
        {
          variable: "Anger Frame",
          testGroup: "AAP failed on unemployment",
          controlGroup: "Congress will fix unemployment",
          hypothesis: "Anger at incumbents drives more action",
          successMetric: "Voter ID rate",
        },
      ],
      sampleSize: "1000 voters per group",
      duration: "7 days",
      analysisPlan: "Compare voter ID rates between groups",
    },
    {
      testName: "Channel Test",
      testType: "Channel",
      elements: [
        {
          variable: "WhatsApp vs SMS",
          testGroup: "WhatsApp message with video",
          controlGroup: "SMS with link",
          hypothesis: "WhatsApp has higher engagement",
          successMetric: "Response rate",
        },
      ],
      sampleSize: "5000 voters per group",
      duration: "14 days",
      analysisPlan: "Compare response rates and voter ID",
    },
    {
      testName: "Messenger Test",
      testType: "Messenger",
      elements: [
        {
          variable: "Candidate vs Party Worker",
          testGroup: "Candidate personally calls",
          controlGroup: "Party worker calls",
          hypothesis: "Candidate contact has higher impact",
          successMetric: "Commit rate",
        },
      ],
      sampleSize: "500 voters per group",
      duration: "7 days",
      analysisPlan: "Compare commit rates",
    },
  ],

  // Tracking
  conversionFunnel: [
    {
      stage: "Contact Attempted",
      metric: "Total attempts",
      targetValue: "100% of target voters",
    },
    {
      stage: "Contact Made",
      metric: "Successfully reached",
      targetValue: "60% of attempts",
    },
    {
      stage: "Conversation Complete",
      metric: "Engaged discussion",
      targetValue: "25% of contacts",
    },
    {
      stage: "Pledge Obtained",
      metric: "Verbal commitment",
      targetValue: "15% of conversations",
    },
    {
      stage: "Vote Confirmed",
      metric: "Actual support",
      targetValue: "80% of pledges",
    },
    {
      stage: "Turnout",
      metric: "Came to vote",
      targetValue: "90% of confirmed supporters",
    },
  ],

  trackingMetrics: {
    contactAttempted: "Target: All Tier 1 and Tier 2 voters",
    contactMade: "Target: 60%+ contact rate",
    conversationCompleted: "Target: 25%+ conversation rate",
    pledgeObtained: "Target: 15%+ commit rate",
    voteConfirmed: "Target: 80%+ pledge fulfillment",
    turnoutRate: "Target: 90%+ turnout of confirmed supporters",
  },

  attributionModel:
    "Multi-touch attribution with 40% weight to last contact, 30% to first contact, 30% distributed among middle contacts",

  // Special Segments
  womenStrategy: {
    segment: "Women Voters",
    bestChannels: ["WhatsApp (through family)", "D2D with female volunteers", "Women gatherings"],
    timingConsiderations:
      "Morning hours for rural women, evening for urban; avoid cooking times",
    messageEmphasis: [
      "Family welfare",
      "Safety and security",
      "Women-specific schemes",
      "Healthcare and education",
    ],
    femaleVolunteerUtilization:
      "Deploy female Congress workers for D2D to women voters; train on women-specific messaging",
    familyTargetingApproach:
      "Target male head for permission, female for opinion; both for GOTV",
  },

  youthStrategy: {
    segment: "Youth (18-35)",
    digitalFirstApproach:
      "WhatsApp primary, Instagram secondary, YouTube for longer content",
    peerInfluenceLeverage:
      "Identify and activate young Congress supporters as peer connectors",
    issueFraming:
      "Jobs and employment as top issue, followed by drugs and education",
    activationPoints: [
      "Colleges and universities",
      "Employment exchanges",
      "Sports venues",
      "Cultural events",
    ],
  },

  scVoterStrategy: {
    segment: "SC Voters",
    communityLeaderEngagement:
      "Engage SC sarpanch, anganwadi workers, and community elders",
    localIssueEmphasis:
      "Welfare schemes, dignity issues, employment, land rights",
    boothLevelPresence:
      "Congress worker at every SC-majority booth from morning",
    transportMobilization:
      "Arrange transport to booth for SC voters; door-to-door GOTV",
  },

  migrantLaborerStrategy: {
    segment: "Migrant Laborers",
    contactTiming:
      "Contact during harvest seasons, festival returns, and via family networks year-round",
    locationTargeting:
      "Construction sites, brick kilns, industrial areas, agricultural markets",
    messageFramework:
      "Congress cares for workers; identify local Congress worker who can help",
    returnVoterProgram:
      "Pre-identify migrant voters who will return home to vote; provide travel assistance if needed",
  },

  // Resources
  resourceAllocation: [
    {
      region: "Malwa",
      voterCount: "69 assembly seats",
      allocatedBudget: "50% of campaign budget",
      costPerVoter: "₹15-20",
      channelMix: "D2D 40%, WhatsApp 30%, PA 15%, Other 15%",
      expectedContacts: "Contact each Tier 1 voter 5+ times",
      conversionTargets: "Shift 15% of swing voters",
    },
    {
      region: "Majha",
      voterCount: "27 assembly seats",
      allocatedBudget: "25% of campaign budget",
      costPerVoter: "₹12-18",
      channelMix: "D2D 35%, WhatsApp 25%, Cable 20%, Other 20%",
      expectedContacts: "Contact each Tier 1 voter 4+ times",
      conversionTargets: "Protect base, shift 10% of swing voters",
    },
    {
      region: "Doaba",
      voterCount: "23 assembly seats",
      allocatedBudget: "25% of campaign budget",
      costPerVoter: "₹10-15",
      channelMix: "WhatsApp 35%, D2D 30%, Cable 20%, Other 15%",
      expectedContacts: "Contact each Tier 1 voter 4+ times",
      conversionTargets: "Convert AAP protest voters, 12% shift target",
    },
  ],

  budgetScenarios: [
    {
      scenario: "Full Resource",
      channelReallocation: "Maximum D2D + Digital + Paid Media",
      expectedOutcome: "5-7% vote share increase",
      riskFactors: ["Budget overrun", "Volunteer capacity"],
      recommendation: "Best for high-priority seats",
    },
    {
      scenario: "Balanced",
      channelReallocation: "Balanced across channels",
      expectedOutcome: "3-4% vote share increase",
      riskFactors: ["Medium impact"],
      recommendation: "Recommended for most seats",
    },
    {
      scenario: "Digital Light",
      channelReallocation: "Minimal digital, maximum ground",
      expectedOutcome: "2-3% vote share increase",
      riskFactors: ["Misses urban voters"],
      recommendation: "For rural-dominated seats",
    },
  ],

  // Confidence
  knowledgeConfidence: [
    {
      category: "Channel Effectiveness",
      confidenceLevel: "High",
      sourceReliability: "Based on 2022 campaign data and pilot tests",
      punjabSpecificValidation: "Validated in Punjab context",
    },
    {
      category: "Conversion Rates",
      confidenceLevel: "Medium",
      sourceReliability: "Industry benchmarks and estimates",
      punjabSpecificValidation: "Needs Punjab-specific testing",
    },
    {
      category: "Cost Analysis",
      confidenceLevel: "High",
      sourceReliability: "Based on actual vendor quotes",
      punjabSpecificValidation: "Validated in Punjab markets",
    },
    {
      category: "Special Segment Strategies",
      confidenceLevel: "Medium",
      sourceReliability: "Expert recommendations",
      punjabSpecificValidation: "Limited field testing",
    },
  ],
};
