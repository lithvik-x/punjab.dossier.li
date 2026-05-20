// @ts-nocheck
// Social Coalition Management Data for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g18-social-coalition-management-framework.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G18

import type { SocialCoalitionData } from "@/types/social-coalition-types";

export const SOCIAL_COALITION_DATA: SocialCoalitionData = {
  documentDate: "20 May 2026",
  agent: "Track B",
  taskId: "G18",
  frameworkSections: [
    "Coalition Architecture",
    "Regional Strategy",
    "Caste-Candidate Matching",
    "Inter-Caste Dynamics",
    "Dera Network Engagement",
    "Minority Outreach",
    "Gender Coalition",
    "Youth Coalition",
    "Seat-Level Targeting",
    "Coalition Cohesion",
    "Knowledge Confidence",
  ],

  // Architecture
  minimumWinningCoalition: {
    targetSeats: "55-65",
    voteShareTarget: "35-38%",
    marginRequirement: "Majority in Punjab assembly (117 seats)",
    coalitionRationale:
      "Congress needs to build minimum winning coalition by combining core voters + swing voters + protest voters",
  },

  coalitionComponents: [
    {
      community: "Traditional Congress Base",
      percentOfElectorate: "23-25%",
      currentAlignment: "Congress",
      targetAlignment: "Congress",
      voteShareTarget: "Maintain 23-25%",
      engagementPriority: "Critical",
    },
    {
      community: "SC Voters (Mazhabi, Ravadasia, Valmiki)",
      percentOfElectorate: "32-35%",
      currentAlignment: "Split (BSP/AAP/Congress)",
      targetAlignment: "Congress +20%",
      voteShareTarget: "Add 6-7%",
      engagementPriority: "Critical",
    },
    {
      community: "Jat Sikh (Malwa)",
      percentOfElectorate: "20-22%",
      currentAlignment: "Split (SAD/AAP/Congress)",
      targetAlignment: "Congress +15%",
      voteShareTarget: "Add 3-4%",
      engagementPriority: "High",
    },
    {
      community: "OBC Communities",
      percentOfElectorate: "15-18%",
      currentAlignment: "Split (Congress/AAP)",
      targetAlignment: "Congress +20%",
      voteShareTarget: "Add 3-4%",
      engagementPriority: "High",
    },
    {
      community: "Minorities (Muslim, Christian)",
      percentOfElectorate: "3-4%",
      currentAlignment: "Congress",
      targetAlignment: "Congress +10%",
      voteShareTarget: "Add 0.5-1%",
      engagementPriority: "Medium",
    },
    {
      community: "Urban Middle Class",
      percentOfElectorate: "10-12%",
      currentAlignment: "AAP",
      targetAlignment: "Congress +25%",
      voteShareTarget: "Add 2-3%",
      engagementPriority: "High",
    },
    {
      community: "Women (all communities)",
      percentOfElectorate: "48%",
      currentAlignment: "Swing",
      targetAlignment: "Congress +10%",
      voteShareTarget: "Add 4-5%",
      engagementPriority: "Critical",
    },
  ],

  congressBaseline: {
    seatsWon: 18,
    voteShare: "23.4%",
    keyWeakness:
      "Complete wipeout in Malwa, failure to retain core Jat Sikh and OBC voters, SC voter defection to AAP",
    recoveryTarget: "55-65 seats",
  },

  // Regional
  malwaStrategy: {
    region: "Malwa",
    seats: 69,
    challenges: [
      "Congress lost all Malwa seats in 2022",
      "Jat Sikh traditional SAD voters shifted to AAP",
      "Dera Sacha Sauda influence significant",
      "Perception that Congress cannot win",
    ],
    coalitionBuildingApproach:
      "Rebuild from core Jat Sikh base + SC voters + OBC; counter winnability perception with evidence",
    communityPriorities: [
      "Agriculture and MSP",
      "Drug crisis resolution",
      "Employment and youth future",
      "Dera leader endorsements",
    ],
    deraEngagementStrategy:
      "Secure endorsements from sympathetic Dera leaders; neutralization of hostile Deras",
    keyMessageFramework:
      "Congress is the only alternative to AAP; we can win Malwa; we care about Jat Sikh farmers",
  },

  majhaStrategy: {
    region: "Majha",
    seats: 27,
    characteristics: [
      "Border region with Pakistan",
      "More stable voting patterns",
      "Historically Congress stronghold",
      "Lower AAP penetration than Malwa",
    ],
    coalitionBuildingApproach:
      "Restore traditional Congress base; maximize turnout among loyalists; hold ground against AAP",
    communityPriorities: [
      "Border security",
      "Drug trafficking prevention",
      "Agriculture",
      "Punjab identity preservation",
    ],
    urbanRuralDivide:
      "Urban seats (Amritsar) contested; rural seats more stable for Congress",
    keyMessageFramework:
      "Restore Congress stability; we understand border issues; we protect Punjab's interests",
  },

  doabaStrategy: {
    region: "Doaba",
    seats: 23,
    characteristics: [
      "Highest SC concentration in Punjab",
      "Industrial base (sports goods, textiles)",
      "Significant NRI population",
      "Highest AAP performance in 2022",
    ],
    coalitionBuildingApproach:
      "Target Ravadasia and Mazhabi voters; capitalize on AAP governance failures; NRI family influence",
    communityPriorities: [
      "Jobs and employment",
      "SC welfare and dignity",
      "Industrial development",
      "NRI remittance economy protection",
    ],
    nriInfluence:
      "Doaba NRI families strongly influence local voting; engage NRI networks for Congress messaging",
    youthEngagement:
      "Highest youth population; jobs message resonates; AAP's unfulfilled promises on employment",
    keyMessageFramework:
      "Congress delivers on jobs; AAP failed unemployed youth; we protect SC welfare and NRI interests",
  },

  // Caste-Candidate
  scReservedSeats: {
    seatCategory: "SC-Reserved",
    totalSeats: 34,
    historicalPattern: "Congress historically won 15-20 of 34 SC seats; AAP won many in 2022",
    congressStrength:
      "Strong among Mazhabi Sikh in rural SC seats; weak among urban Valmiki voters",
    targetSeats: "18-22 SC seats",
    candidateCriteria: [
      "SC community member with local acceptance",
      "Clean image and accessibility",
      "Ability to mobilize community networks",
      "Not associated with any Dera in conflicting position",
    ],
  },

  jatSikhSeats: {
    seatCategory: "Jat Sikh Dominant",
    totalSeats: "45-50 (estimated)",
    JatPopulationPercent: "35-50% in these seats",
    congressHistoricalSupport:
      "Congress had 30-40% Jat Sikh support historically; dropped to 15-20% in 2022",
    targetSeats: "Congress can win in 25-30 Jat Sikh dominant seats",
    candidateProfile:
      "Jat Sikh farmer background; not urban elite; understands agriculture; has community respect",
  },

  obcSeats: {
    seatCategory: "OBC",
    totalSeats: "25-30 (estimated)",
    obcPopulationPercent: "30-45% in these seats",
    keyCommunities: ["Jat OBC", "Kashatriya", "Rajput", "Bania"],
    congressOutreach:
      "Historically Congress had OBC support; AAP making inroads with welfare messaging",
    targetSeats: "Congress can win in 15-18 OBC dominant seats",
  },

  // Inter-Caste
  casteFrictions: [
    {
      communityPair: "Jat Sikh - SC",
      historicalIssue: "Land ownership and social hierarchy",
      currentTensionLevel: "Medium",
      politicalImplication: "Jat Sikh leaders must explicitly support SC welfare to build coalition",
      mitigationStrategy: "Joint caste-harmony events; Jat leaders publicly backing SC candidates",
    },
    {
      communityPair: "SC - Backward OBC",
      historicalIssue: "Resource competition, menial labor stigma",
      currentTensionLevel: "Low",
      politicalImplication: "Both groups have shared anti-upper caste interests; potential alliance",
      mitigationStrategy: "Focus on common welfare themes; don't highlight internal divisions",
    },
    {
      communityPair: "Mazhabi Sikh - Ravadasia",
      historicalIssue: "Occupational similarities, agricultural labor",
      currentTensionLevel: "Low",
      politicalImplication: "Both rural SC groups; potential unified voting block",
      mitigationStrategy: "Joint SC welfare messaging; single SC identity framing",
    },
  ],

  voteTransfers: [
    {
      fromCommunity: "Young AAP supporters",
      toCommunity: "Congress",
      transferCondition: "AAP fails on jobs and governance",
      voteShare: "5-8% shift possible",
      electoralImpact: "Decisive in 15-20 competitive seats",
    },
    {
      fromCommunity: "SAD traditional voters",
      toCommunity: "Congress",
      transferCondition: "SAD-BJP alliance perceived as weak",
      voteShare: "3-5% shift possible",
      electoralImpact: "Important in Malwa seats",
    },
    {
      fromCommunity: "Protest voters",
      toCommunity: "Congress",
      transferCondition: "Winnability perception shifts",
      voteShare: "4-6% shift possible",
      electoralImpact: "Critical for majority calculation",
    },
  ],

  // Dera
  deraEngagements: [
    {
      deraName: "Dera Sacha Sauda",
      location: "Sirsa (Haryana)",
      followerBase: "Significant in Malwa",
      politicalAlignment: "Pro-AAP in 2022",
      influenceMechanism: "Social welfare services create loyalty; leader's word influences voting",
      engagementApproach:
        "Neutralize through alternative community leaders; do not directly engage if hostile",
      potentialEndorsementImpact: "High but currently hostile",
    },
    {
      deraName: "Dera Sachkhand Ballan",
      location: "Ballan (Malwa)",
      followerBase: "Significant in Malwa",
      politicalAlignment: "Historically Congress",
      influenceMechanism: "Spiritual guidance influences family voting decisions",
      engagementApproach:
        "Reinforce traditional ties; seek public endorsement; involve in welfare programs",
      potentialEndorsementImpact: "High - positive",
    },
    {
      deraName: "Radha Soami",
      location: "Beas (Majha)",
      followerBase: "Cross-sikh community, includes urban affluent",
      politicalAlignment: "Officially neutral but members influential",
      influenceMechanism: "Members follow spiritual guidance on secular matters",
      engagementApproach:
        "Respect neutrality; engage through member's individual networks; no formal endorsement sought",
      potentialEndorsementImpact: "Medium - through member influence",
    },
  ],

  deraSachaSauda: {
    deraName: "Dera Sacha Sauda",
    headquarters: "Sirsa, Haryana",
    followerBase: "50,000+ households in Malwa",
    keyLeader: "Gurmeet Ram Rahim",
    socialServiceBase: "Schools, hospitals, vocational training",
    politicalHistory:
      "Endorsed Congress in early 2000s; shifted to AAP in 2022; currently perceived as anti-Congress",
    engagementApproach: "Do not seek endorsement; focus on neutralization through community leaders",
  },

  deraBallan: {
    deraName: "Dera Sachkhand Ballan",
    headquarters: "Ballan, Malwa region",
    followerBase: "Significant Malwa presence, especially among Jat Sikh",
    keyLeader: "Sant Harnik Giri",
    influenceRegion: "Malwa heartland",
    politicalStance: "Traditionally Congress-aligned; seek renewed commitment",
    engagementApproach:
      "Formal meeting with Congress high command; public endorsement ceremony; joint welfare initiatives",
  },

  radhaSoami: {
    deraName: "Radha Soami",
    headquarters: "Beas, Majha",
    followerBase: "Cross-community, including affluent urban Sikh families",
    spiritualOrientation: "Sikh-inspired but non-sectarian",
    politicalNeutrality: "Officially neutral; members make individual choices",
    engagementConstraints:
      "Do not seek formal endorsement; engage through member networks individually",
  },

  // Minorities
  muslimOutreach: {
    community: "Muslim",
    populationPercent: "~2%",
    geographicConcentration: "Urban areas (Ludhiana, Malerkotla)",
    keyConcerns: ["Economic opportunity", "Social harmony", "Identity protection"],
    congressHistoricalSupport: "Congress has traditional support among Muslim voters",
    outreachStrategy:
      "Engage through local leaders; highlight Congress record on communal harmony; economic messaging",
    keyMessages: [
      "Congress protects minority rights",
      "Economic opportunity for all",
      "Communal harmony commitment",
    ],
  },

  christianOutreach: {
    community: "Christian",
    populationPercent: "~1.3%",
    geographicConcentration: "Urban areas, some rural pockets",
    keyConcerns: ["Religious freedom", "Educational institutions", "Social dignity"],
    congressHistoricalSupport: "Congress has strong support among Christian community",
    outreachStrategy:
      "Engage through church networks; highlight Congress protection of Christian institutions",
  },

  // Demographics
  womenCoalition: {
    targetWomenVoters: "48% of electorate",
    womensIssuesPriority: [
      "Safety and security",
      "Economic welfare schemes in womens name",
      "Healthcare access",
      "Education for children",
    ],
    mobilizationChannels: [
      "Mahila Congress network",
      "Women self-help groups",
      "Anganwadi workers",
      "Female D2D volunteers",
    ],
    familyVoterTargeting:
      "Target women as decision influencers for family vote; provide welfare scheme information directly to women",
    womenCandidateStrategy:
      "Increase women candidates from 6 to 15-18; focus on SC-reserved and urban seats",
  },

  youthCoalition: {
    targetAgeSegment: "18-35 (40% of electorate)",
    youthIssues: [
      "Unemployment (most critical)",
      "Drug addiction",
      "Education quality",
      "Future opportunities",
    ],
    digitalEngagementApproach:
      "WhatsApp primary; Instagram for image; YouTube for longer content; TikTok for viral potential",
    peerInfluenceLeverage:
      "Identify young Congress supporters in colleges, sports clubs, vocational training centers",
    employmentMessaging:
      "Congress will provide 1 lakh government jobs; skill development programs; startup support",
    aspirationalMessaging:
      "Punjab can be opportunity state; don't have to migrate for jobs; youth deserve future in Punjab",
  },

  // Seats
  highPrioritySeats: [
    {
      seatName: "Amritsar East",
      region: "Majha",
      reasonForPriority: "Urban, educated, high turnout; Congress can win with proper organization",
      currentIncumbent: "AAP",
      congressChance: "Medium-High",
      resourceAllocation: "High priority",
    },
    {
      seatName: "Jalandhar West",
      region: "Doaba",
      reasonForPriority: "Urban, industrial, protest voter potential",
      currentIncumbent: "AAP",
      congressChance: "Medium",
      resourceAllocation: "High priority",
    },
    {
      seatName: "Ludhiana Rural",
      region: "Malwa",
      reasonForPriority: "OBC majority, can be won with community outreach",
      currentIncumbent: "AAP",
      congressChance: "Medium",
      resourceAllocation: "Medium priority",
    },
    {
      seatName: "Bathinda",
      region: "Malwa",
      reasonForPriority: "Traditional SAD seat; possible Congress gain with winnability signal",
      currentIncumbent: "SAD",
      congressChance: "Medium",
      resourceAllocation: "Medium priority",
    },
    {
      seatName: "Moga",
      region: "Malwa",
      reasonForPriority: "Jat Sikh majority; Congress can consolidate with proper candidate",
      currentIncumbent: "AAP",
      congressChance: "Medium",
      resourceAllocation: "Medium priority",
    },
  ],

  defensiveSeats: [
    {
      seatName: "SC Reserved seats (various)",
      region: "Multiple",
      currentStatus: "AAP won many in 2022",
      threatLevel: "High",
      defenseStrategy:
        "Protect existing seats; don't lose further ground; focus on SC welfare delivery",
      resourceRequirement: "High",
    },
    {
      seatName: "Doaba SC seats",
      region: "Doaba",
      currentStatus: "AAP currently holds",
      threatLevel: "Medium",
      defenseStrategy:
        "Maintain Mazhabi and Ravadasia voter focus; don't let AAP regain initiative",
      resourceRequirement: "Medium",
    },
  ],

  // Cohesion
  coalitionRisks: [
    {
      riskFactor: "Winnability Perception",
      affectedCommunities: ["All voters", "especially swing voters"],
      probability: "High",
      impactOnCoalition:
        "If voters believe Congress cannot win, they will not waste vote",
      mitigationStrategy:
        "High-profile candidate announcements; visible campaign infrastructure; early start",
    },
    {
      riskFactor: "Dera Endorsement Shifts",
      affectedCommunities: ["Jat Sikh", "Rural voters"],
      probability: "Medium",
      impactOnCoalition:
        "Dera Sacha Sauda actively working for AAP; can shift significant voter blocks",
      mitigationStrategy:
        "Counter with Dera Ballan endorsement; activate own community leader networks",
    },
    {
      riskFactor: "Core Voter Apathy",
      affectedCommunities: ["Traditional Congress base"],
      probability: "Medium",
      impactOnCoalition:
        "Loyalists may not vote if they think result is predetermined",
      mitigationStrategy:
        "GOTV for own voters; personal outreach by local leaders; make race seem competitive",
    },
    {
      riskFactor: "Caste-Based Voting",
      affectedCommunities: ["All communities"],
      probability: "Low",
      impactOnCoalition:
        "If voters vote purely by caste, coalition building fails",
      mitigationStrategy:
        "Emphasize development over caste; candidate selection that reflects community but not exclusive",
    },
  ],

  communitySatisfaction: [
    {
      community: "Mazhabi Sikh",
      satisfactionScore: "6/10",
      keyGrievances: ["Land rights", "Jobs", "Social dignity"],
      churnRisk: "Medium - can shift to AAP if better offers",
      retentionStrategy:
        "Concrete welfare scheme delivery; Mazhabi candidate in key seats",
    },
    {
      community: "Ravadasia",
      satisfactionScore: "5/10",
      keyGrievances: ["Employment", "Caste discrimination", "Political representation"],
      churnRisk: "High - attracted by AAP's anti-upper caste messaging",
      retentionStrategy:
        "Jobs messaging; visible SC welfare; adequate representation in tickets",
    },
    {
      community: "Jat Sikh",
      satisfactionScore: "4/10",
      keyGrievances: ["Drug crisis", "MSP", "APMC support", "Perceived winnability"],
      churnRisk: "Medium - considering Congress if winnability signal strong",
      retentionStrategy:
        "Strong candidate with farmer background; clear drug crisis plan; MSP commitment",
    },
    {
      community: "OBC",
      satisfactionScore: "5/10",
      keyGrievances: ["Economic opportunity", "Political representation", "Scheme access"],
      churnRisk: "Medium - AAP's welfare schemes attractive",
      retentionStrategy:
        "OBC-focused welfare schemes; adequate ticket allocation; local leader engagement",
    },
  ],

  // Confidence
  knowledgeConfidence: [
    {
      category: "Coalition Math",
      confidenceLevel: "High",
      source: "Based on 2022 results and demographic data",
      punjabSpecificNotes: "Validated with state political experts",
    },
    {
      category: "Dera Influence",
      confidenceLevel: "Medium",
      source: "Known alignments and media reports",
      punjabSpecificNotes: "Dera positions can shift rapidly",
    },
    {
      category: "Caste Dynamics",
      confidenceLevel: "High",
      source: "Census data and electoral history",
      punjabSpecificNotes: "Caste voting patterns well documented",
    },
    {
      category: "Regional Strategies",
      confidenceLevel: "High",
      source: "Regional political analysis",
      punjabSpecificNotes: "Requires local validation",
    },
  ],
};
