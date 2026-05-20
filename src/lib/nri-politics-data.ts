// @ts-nocheck
// NRI Politics & Overseas Voting Data for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/b35-nri-politics-overseas-voting.md
// Date: 20 May 2026 | Agent: Track B | Task ID: B35

import type { NRIPoliticsData } from "@/types/nri-politics-types";

export const NRI_POLITICS_DATA: NRIPoliticsData = {
  documentDate: "20 May 2026",
  agent: "Track B",
  taskId: "B35",
  frameworkSections: [
    "NRI Demographics",
    "NRI Organizations",
    "Proxy Voting Mechanisms",
    "Doaba NRI Impact",
    "NRI Campaign Strategy",
    "Remittance Influence",
    "Knowledge Confidence",
  ],

  // Demographics
  nriVoterDemographics: {
    totalEligibleVoters: "2-3 million",
    registeredVoters: "Under 100,000",
    actualVotesCast: "20,000-40,000",
    concentrationRegion: "Doaba region highest",
    concentrationNotes:
      "Doaba (Hoshiarpur, Jalandhar, Kapurthala, Nawanshahr) has 600,000-800,000 households with NRI connections",
  },

  populationByCountry: [
    {
      country: "Canada",
      estimatedPopulation: "800,000-1,200,000",
      voterPotential: "150,000-200,000",
      politicalOrganization: "PPCC Canada, WPO",
      ppccPresence: "Active chapters in Toronto, Vancouver, Calgary",
    },
    {
      country: "United Kingdom",
      estimatedPopulation: "400,000-600,000",
      voterPotential: "80,000-120,000",
      politicalOrganization: "PPCC UK",
      ppccPresence: "Active London chapter",
    },
    {
      country: "USA",
      estimatedPopulation: "300,000-500,000",
      voterPotential: "60,000-100,000",
      politicalOrganization: "PPCC USA",
      ppccPresence: " chapters in NYC, SF Bay Area",
    },
    {
      country: "Australia",
      estimatedPopulation: "100,000-200,000",
      voterPotential: "20,000-40,000",
      politicalOrganization: "Limited",
      ppccPresence: "Minimal presence",
    },
    {
      country: "Other Countries",
      estimatedPopulation: "200,000-400,000",
      voterPotential: "30,000-50,000",
      politicalOrganization: "Various diaspora groups",
      ppccPresence: "Fragmented",
    },
  ],

  // Organizations
  nriOrganizations: [
    {
      name: "PPCC Canada",
      country: "Canada",
      type: "Political",
      alignment: "Congress",
      influenceLevel: "High",
      membershipEstimate: "50,000+",
      activities: [
        "Voter registration drives",
        "Political mobilization campaigns",
        "Campaign funding",
        "Social media influence",
      ],
    },
    {
      name: "WPO (World Punjab Organization)",
      country: "Canada",
      type: "Cultural-Political",
      alignment: "Congress",
      influenceLevel: "High",
      membershipEstimate: "30,000+",
      activities: [
        "Cultural preservation",
        "Political advocacy",
        "Canada-Punjab ties",
      ],
    },
    {
      name: "PPCC UK",
      country: "United Kingdom",
      type: "Political",
      alignment: "Congress",
      influenceLevel: "Medium",
      membershipEstimate: "15,000+",
      activities: ["Voter awareness", "Campaign support"],
    },
    {
      name: "Punjabis in America",
      country: "USA",
      type: "Community",
      alignment: "Neutral",
      influenceLevel: "Low-Medium",
      membershipEstimate: "Varies",
      activities: ["Cultural events", "Limited political engagement"],
    },
  ],

  wpoCanada: {
    name: "World Punjab Organization",
    chapters: ["Toronto", "Vancouver", "Calgary", "Ottawa"],
    congressConnection: "Pro-Congress historically; leadership has family ties to party",
    keyActivities: [
      "Annual conventions",
      "Political discussions",
      "Voter registration in Canada",
      "Campaign contributions",
    ],
  },

  ppccCanada: {
    name: "Punjab Pradesh Congress Committee Canada",
    structure: "Chapter-based with central coordination",
    nriEngagement: "Active voter registration and postal ballot assistance",
    electionActivities: [
      "Congress candidate endorsement campaigns",
      "Issue-based advocacy",
      "Funding through diaspora network",
    ],
  },

  // Mechanisms
  proxyVotingMechanisms: [
    {
      mechanism: "Postal Ballot",
      description: "Voters abroad can vote by postal ballot if registered",
      eligibility: "All NRIs who are registered voters",
      utilization: "Very low - under 5% of eligible",
      barriers: [
        "Complex registration process",
        "Timing issues with postal delivery",
        "Lack of awareness",
        "ID requirements",
      ],
    },
    {
      mechanism: "Proxy Voting (EPROXY)",
      description: "Authorized proxy can vote on behalf of NRI",
      eligibility: "Limited - only for certain categories",
      utilization: "Negligible",
      barriers: [
        "Strict eligibility criteria",
        "Bureaucratic process",
        "Trust issues with proxy arrangement",
      ],
    },
    {
      mechanism: "Booth-level Proxy",
      description: "Local proxy voting at booth for absent voters",
      description2: "Not officially recognized mechanism but occurs informally",
      utilization: "Difficult to estimate",
      barriers: ["Illegal practice", "No official tracking"],
    },
  ],

  eroRemittance: {
    mechanism: "Election Related Overseas Remittance",
    annualVolume: "Difficult to quantify; informal networks substantial",
    electionInfluencePotential: "High - NRIs send money home especially during elections",
    congressAdvantage: "NRIs from Malwa traditionally Congress-aligned send remittances that influence local voters",
  },

  // Doaba
  doabaProfile: {
    region: "Doaba",
    nriConnectedHouseholds: "600,000-800,000",
    remittanceVolume: "Substantial - primary economic lifeline",
    politicalInfluence:
      "High - remittance-dependent economy creates clientelist networks",
    voterRegistrationRate: "Low - under 5% of eligible",
    actualTurnoutRate: "Very low - estimated 2-3% of eligible NRI votes cast",
  },

  doabaElectoralImpact: {
    description:
      "Despite low actual voting, NRI presence affects elections through remittance economy and family influence on voters",
    voteShareInfluence: "Indirect but significant through economic leverage",
    keyConstituencies: [
      "Jalandhar",
      "Kapurthala",
      "Hoshiarpur",
      "Nawanshahr",
      "Phagwara",
    ],
    nriCampaignPotential: "High - but requires addressing registration and voting barriers",
  },

  // Strategy
  campaignTactics: [
    {
      tactic: "Virtual Town Hall",
      platform: "Zoom/YouTube Live",
      targetAudience: "NRIs in Canada, UK, USA",
      cost: "Low (₹50,000-1 lakh per event)",
      effectiveness: "Medium - good for awareness, limited voter contact",
      implementationNotes:
        "Partner with NRI organizations for audience; use Punjabi-speaking moderators",
    },
    {
      tactic: "WhatsApp Campaign",
      platform: "WhatsApp Groups",
      targetAudience: "Family networks in Punjab",
      cost: "Very Low",
      effectiveness: "High - most effective for voter mobilization",
      implementationNotes:
        "Share candidate messages, rally videos, achievements through family groups",
    },
    {
      tactic: "NRI Voter Registration Drive",
      platform: "Online + Physical Camps",
      targetAudience: "Eligible NRI voters",
      cost: "Medium",
      effectiveness: "High potential but low current utilization",
      implementationNotes:
        "Partner with PPCC for registration camps in Canada, UK; provide facilitation",
    },
    {
      tactic: "Cable TV Ad Buy",
      platform: "Local Punjabi channels",
      targetAudience: "Families watching Indian TV in Punjab",
      cost: "Medium",
      effectiveness: "Medium - good reach to families",
      implementationNotes:
        "Coordinate with NRI-funded ads; families influence voter decisions",
    },
    {
      tactic: "Social Media Influencer",
      platform: "YouTube, Facebook, Instagram",
      targetAudience: "NRIs and NRI-connected families",
      cost: "Medium-High",
      effectiveness: "Medium-High",
      implementationNotes:
        "Partner with popular Punjabi YouTubers; NRI-targeted content",
    },
  ],

  diasporaEngagement: {
    strategy: "Leverage NRI remittance economy and family networks for political mobilization",
    virtualEngagementChannels: [
      "WhatsApp groups",
      "Facebook pages",
      "YouTube live events",
      "Zoom town halls",
    ],
    groundActivistPotential: "Low direct voting but high indirect influence",
    financialContributions: "Significant through party funds and local circulation",
    politicalMessagingApproach:
      "Frame Congress as protector of Punjab's interests against central government",
  },

  // Economic
  remittanceInfluence: {
    annualVolume: "₹35,000-40,000 crore annually to Punjab",
    percentOfStateGDP: "~30% of state GDP (Doaba higher)",
    householdEconomicInfluence:
      "NRI members fund family expenses, agriculture, businesses",
    politicalClientelismLink:
      "Money flows create obligation networks; candidates mobilize through financial assistance",
    congressConnection:
      "Congress historically seen as friend of NRI interests; Malwa NRIs traditionally Congress",
  },

  economicImpact: [
    {
      category: "Remittance Economy",
      description: "Doaba entirely dependent on NRI remittances",
      electoralRelevance:
        "NRI money gives families economic stability but political dependence on those who facilitate migration",
    },
    {
      category: "Real Estate",
      description: "NRI investment in farmland and property",
      electoralRelevance:
        "Land deals and property create obligation networks tied to political figures",
    },
    {
      category: "Clientelism",
      description: "NRI funds channeled through political networks",
      electoralRelevance:
        "Congress workers use NRI connections for fundraising and voter mobilization",
    },
  ],

  // Confidence
  knowledgeConfidence: [
    {
      category: "NRI Demographics",
      confidenceLevel: "Medium",
      dataSource: "Estimated from various diaspora reports",
      verificationNeeded: [
        "Actual voter registration numbers",
        "Votes cast by NRIs",
      ],
    },
    {
      category: "NRI Organizations",
      confidenceLevel: "High",
      dataSource: "Known organizations with public information",
      verificationNeeded: ["Membership numbers", "Activity levels"],
    },
    {
      category: "Proxy Voting",
      confidenceLevel: "Low",
      dataSource: "Limited official data",
      verificationNeeded: ["Actual proxy voting statistics"],
    },
    {
      category: "Doaba Impact",
      confidenceLevel: "Medium",
      dataSource: "Regional reports",
      verificationNeeded: ["Household NRI connections survey"],
    },
    {
      category: "Remittance Influence",
      confidenceLevel: "Medium",
      dataSource: "RBI and state bank data",
      verificationNeeded: ["Election-specific flows"],
    },
  ],

  researchGaps: [
    "Actual NRI voter registration and turnout data",
    "Proxy voting utilization rates",
    "Remittance flows during election periods",
    "NRI family voting influence patterns",
  ],
};
