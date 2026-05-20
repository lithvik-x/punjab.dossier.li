// @ts-nocheck
// Voter Shift Prediction Methodology Data for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g7-voter-shift-prediction-methodology.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G7

import type { VoterShiftPredictionData } from "@/types/voter-shift-prediction-types";

export const VOTER_SHIFT_PREDICTION_DATA: VoterShiftPredictionData = {
  documentDate: "20 May 2026",
  agent: "Track B",
  taskId: "G7",
  frameworkSections: [
    "Theoretical Framework",
    "Shift Probability Model",
    "Early Warning Indicators",
    "Shift Vector Modeling",
    "Historical Pattern Analysis",
    "Punjab-Specific Shift Drivers",
    "2027 Prediction Application",
    "Knowledge Confidence",
  ],

  // Theory
  theoreticalFrameworks: {
    pushPull: {
      framework: "Push-Pull Theory",
      pushFactors: [
        "Dissatisfaction with current government performance",
        "Perceived corruption or misconduct",
        "Failure to deliver on promises",
        "Economic hardship during term",
        "Scandals or controversies",
      ],
      pullFactors: [
        "Attractiveness of opposition candidate",
        "Perceived competence of alternative",
        "Hope for better governance",
        "Social network influence to switch",
        "Nostalgia for past performance",
      ],
      punjabApplication:
        "2022 AAP wave: Push (Congress/SAD corruption, drug crisis) + Pull (AAP clean image promise) = massive shift",
    },
    anchor: {
      theory: "Party Identification / Anchoring Theory",
      partyIdentification:
        "Partisan loyalties act as anchors that resist change; strength of anchor determines volatility",
      stabilityMechanisms: [
        "Family tradition across generations",
        "Social identity linked to party",
        "Positive past experience with party",
        "Investment in party's success",
      ],
      deshock: "Major shocks can break anchor: corruption scandals, leader betrayal, catastrophic policy failures",
      punjabApplication:
        "Congress's 2017-2022 collapse shows anchor weakening; AAP provides alternative identity anchor for some voters",
    },
    salience: {
      theory: "Salience Theory / Issue Ownership",
      issueSalience:
        "When a particular issue becomes highly salient to voters, the party associated with that issue benefits",
      timing:
        "Issues that emerge late in campaign can override established preferences",
      mediaAgendaSetting:
        "Media's emphasis on certain issues shapes voter priorities and thus voting decisions",
      punjabApplication:
        "Drug crisis made drugs THE issue in 2022; AAP owned it by promising solutions; Congress failed to counter",
    },
  },

  // Model
  shiftProbabilityFormula: {
    formula: "SSP(s,t,d) = BaseLoyalty × (1 - AntiIncumbencyWeight) × IssueSalience × CandidateQualityDelta × DeraInfluence × (1 + WaveMomentum)",
    variables: [
      {
        variable: "BaseLoyalty",
        description: "Voter's baseline party loyalty score (0-1)",
        typicalRange: "0.3-0.8 depending on partisan strength",
      },
      {
        variable: "AntiIncumbencyWeight",
        description: "Weight assigned to anti-incumbent sentiment",
        typicalRange: "0-0.5 depending on government performance",
      },
      {
        variable: "IssueSalience",
        description: "Salience of key issues at time of voting (0-2 scale)",
        typicalRange: "1.0 baseline; can spike to 1.5-2.0 for critical issues",
      },
      {
        variable: "CandidateQualityDelta",
        description: "Quality difference between candidates (1.0 = equal)",
        typicalRange: "0.8-1.3",
      },
      {
        variable: "DeraInfluence",
        description: "Multiplier for Dera leader endorsement (0.5-1.5)",
        typicalRange: "0.8-1.2 for most voters",
      },
      {
        variable: "WaveMomentum",
        description: "Collective shift momentum (can be negative or positive)",
        typicalRange: "-0.2 to +0.3",
      },
    ],
    weights: [
      { factor: "Partisan Loyalty", weight: "30%", justification: "Most stable predictor in short term" },
      { factor: "Anti-Incumbency", weight: "25%", justification: "Strong in high-dissatisfaction environments" },
      { factor: "Issue Salience", weight: "20%", justification: "Can override other factors when intense" },
      { factor: "Candidate Quality", weight: "15%", justification: "Important in candidate-centric races" },
      { factor: "Dera Influence", weight: "5%", justification: "Significant in Malwa but not universal" },
      { factor: "Wave Momentum", weight: "5%", justification: "Late campaign swings, hardest to predict" },
    ],
  },

  sspVariables: [
    {
      name: "BaseLoyalty",
      description: "Measured through voter surveys on party identification",
      dataSource: "Congress internal polling, exit polls",
      measurementApproach: "Scale 0-10 party ID strength, normalize to 0-1",
    },
    {
      name: "AntiIncumbencyWeight",
      description: "Government approval ratings and specific dissatisfaction metrics",
      dataSource: "Approval polls, grievance tracking",
      measurementApproach: "Composite of performance + corruption + promises broken",
    },
    {
      name: "IssueSalience",
      description: "Which issues voters cite as most important",
      dataSource: "Issue salience surveys, media content analysis",
      measurementApproach: "Percent citing issue as #1 / #2 concern",
    },
    {
      name: "CandidateQualityDelta",
      description: "Candidate appeal relative to opponent",
      dataSource: "Candidate preference polls, network analysis",
      measurementApproach: "Net favorability difference between candidates",
    },
    {
      name: "DeraInfluence",
      description: "Dera leader's public endorsement and follower response",
      dataSource: "Dera announcements, social listening",
      measurementApproach: "Endorsement strength × estimated follower turnout",
    },
    {
      name: "WaveMomentum",
      description: "Observed late-campaign shifts in polling",
      dataSource: "Tracking polls over final 30 days",
      measurementApproach: "Change in vote share from T-30 to T-0",
    },
  ],

  probabilityOutputs: [
    {
      voterSegment: "Jat Sikh (Malwa)",
      baseLoyalty: "0.35",
      antiIncumbencyWeight: "0.40",
      issueSalienceScore: "1.3",
      candidateQualityDelta: "1.1",
      deraInfluence: "1.2",
      waveMomentum: "0.10",
      finalProbability: "0.48",
      confidenceLevel: "Medium",
    },
    {
      voterSegment: "SC Voters (Mazhabi)",
      baseLoyalty: "0.45",
      antiIncumbencyWeight: "0.30",
      issueSalienceScore: "1.2",
      candidateQualityDelta: "1.0",
      deraInfluence: "1.0",
      waveMomentum: "0.05",
      finalProbability: "0.52",
      confidenceLevel: "High",
    },
    {
      voterSegment: "Urban Middle Class",
      baseLoyalty: "0.25",
      antiIncumbencyWeight: "0.35",
      issueSalienceScore: "1.4",
      candidateQualityDelta: "0.9",
      deraInfluence: "1.0",
      waveMomentum: "0.15",
      finalProbability: "0.38",
      confidenceLevel: "Medium",
    },
    {
      voterSegment: "Rural OBC",
      baseLoyalty: "0.40",
      antiIncumbencyWeight: "0.30",
      issueSalienceScore: "1.1",
      candidateQualityDelta: "1.0",
      deraInfluence: "0.9",
      waveMomentum: "0.05",
      finalProbability: "0.45",
      confidenceLevel: "Medium",
    },
  ],

  // EWIs
  behavioralEWIs: [
    {
      indicator: "Grievance Calls Volume",
      measurement: "Call center complaint volume",
      baseline: "100 calls/day per constituency (average)",
      warningThreshold: ">200 calls/day",
      dataCollectionMethod: "Call center tracking, social media monitoring",
    },
    {
      indicator: "Negative Social Media Sentiment",
      measurement: "Percent negative mentions of party",
      baseline: "40% negative",
      warningThreshold: ">60% negative",
      dataCollectionMethod: "Social listening tools",
    },
    {
      indicator: "Booth-Level Worker Morale",
      measurement: "Worker engagement scores",
      baseline: "70% positive",
      warningThreshold: "<50% positive",
      dataCollectionMethod: "Worker surveys, attrition rates",
    },
    {
      indicator: "Event Attendance Decline",
      measurement: "Rally/event attendance vs. previous election",
      baseline: "Comparable to 2022",
      warningThreshold: ">30% decline",
      dataCollectionMethod: "Event headcounts, media coverage",
    },
  ],

  psychographicEWIs: [
    {
      indicator: "Winnability Perception",
      measurement: "Percent believing Congress can win",
      baseline: "40% believe",
      warningThreshold: "<30% believe",
      dataCollectionMethod: "Voter surveys",
    },
    {
      indicator: "Candidate Preference vs. Party",
      measurement: "Percent choosing candidate over party",
      baseline: "45% candidate-centric",
      warningThreshold: ">60% candidate-centric",
      dataCollectionMethod: "Voter surveys",
    },
    {
      indicator: "Issue Ownership Perception",
      measurement: "Which party seen as best on #1 issue",
      baseline: "Tied or Congress lead",
      warningThreshold: "Opposition leads on most issues",
      dataCollectionMethod: "Issue ownership surveys",
    },
    {
      indicator: "Trust in Government",
      measurement: "Approval of incumbent performance",
      baseline: "40% approve",
      warningThreshold: "<30% approve",
      dataCollectionMethod: "Approval rating polls",
    },
  ],

  structuralEWIs: [
    {
      indicator: "Fundraising Gap",
      measurement: "Congress funds vs. AAP funds raised",
      baseline: "Parity or slight deficit",
      warningThreshold: ">2x gap",
      dataCollectionMethod: "Internal finance tracking",
    },
    {
      indicator: "Candidate Quality",
      measurement: "Candidate net favorability",
      baseline: "Net +10 favorability",
      warningThreshold: "Net negative",
      dataCollectionMethod: "Candidate polls",
    },
    {
      indicator: "Booth Organization Score",
      measurement: "Booth-level worker coverage",
      baseline: "80% booths with active workers",
      warningThreshold: "<60% coverage",
      dataCollectionMethod: "Ground surveys",
    },
    {
      indicator: "Winnable Seats Declared",
      measurement: "Seats where Congress officially announces candidates",
      baseline: "All seats by T-30",
      warningThreshold: "<50% by T-30",
      dataCollectionMethod: "Announcement tracking",
    },
  ],

  ewiThresholds: [
    {
      category: "Behavioral",
      indicator: "Grievance Calls",
      normalRange: "100-150/day",
      elevatedRisk: "150-200/day",
      criticalRisk: ">200/day",
    },
    {
      category: "Psychographic",
      indicator: "Winnability Perception",
      normalRange: ">40%",
      elevatedRisk: "30-40%",
      criticalRisk: "<30%",
    },
    {
      category: "Structural",
      indicator: "Fundraising Gap",
      normalRange: "<1.5x",
      elevatedRisk: "1.5-2x",
      criticalRisk: ">2x",
    },
  ],

  // Vectors
  shiftVectors: [
    {
      fromParty: "AAP",
      toParty: "Congress",
      voterSegment: "Protest voters disappointed with AAP governance",
      magnitude: "3-5%",
      velocity: "Slow but steady",
      triggers: ["AAP unfulfilled promises on jobs", "No visible governance improvement"],
    },
    {
      fromParty: "SAD",
      toParty: "Congress",
      voterSegment: "Traditional SAD voters considering alternatives",
      magnitude: "2-4%",
      velocity: "Moderate",
      triggers: ["SAD-BJP alliance perceived as weak", "Desire for opposition unity"],
    },
    {
      fromParty: "Congress",
      toParty: "AAP",
      voterSegment: "Weak Congress identifiers",
      magnitude: "2-3%",
      velocity: "Slow",
      triggers: ["Winnability concerns", "Candidate quality doubts"],
    },
  ],

  vectorComponents: {
    individualLevelFactors: [
      "Partisan loyalty strength",
      "Personal experience with government",
      "Candidate preference",
      "Family voting tradition",
    ],
    communityLevelFactors: [
      "Community leader endorsements",
      "Caste voting patterns",
      "Dera influence",
      "Local social networks",
    ],
    structuralFactors: [
      "Government performance",
      "National political environment",
      "Economic conditions",
      "Scandal exposure",
    ],
    temporalFactors: [
      "Campaign timing",
      "Late-emerging issues",
      "Debate moments",
      "Get-out-the-vote efficiency",
    ],
  },

  velocityTracking: [
    {
      voterSegment: "Jat Sikh Youth",
      baseline2022: "20% Congress",
      currentIndicators: "25-28% Congress leaning",
      projected2027: "28-32% Congress",
      confidenceInProjection: "Medium",
    },
    {
      voterSegment: "Mazhabi Sikh",
      baseline2022: "45% Congress",
      currentIndicators: "50-55% Congress leaning",
      projected2027: "50-55% Congress",
      confidenceInProjection: "High",
    },
    {
      voterSegment: "Urban Protest Voters",
      baseline2022: "10% Congress (post-AAP shift)",
      currentIndicators: "18-22% Congress leaning",
      projected2027: "20-25% Congress",
      confidenceInProjection: "Low",
    },
  ],

  // Historical
  congressShifts: [
    {
      year: "2012",
      seats: 46,
      voteShare: "40.1%",
      shiftFromPrevious: "+13 seats, +4.3% vote share",
      keyDrivers: ["Anti-incumbency against SAD-BJP", "Special category initiatives"],
    },
    {
      year: "2017",
      seats: 77,
      voteShare: "38.5%",
      shiftFromPrevious: "+31 seats, -1.6% vote share",
      keyDrivers: ["Congress wave", "SAD-BJP anti-incumbency", "Captain Amarinder Singh popularity"],
    },
    {
      year: "2022",
      seats: 18,
      voteShare: "23.4%",
      shiftFromPrevious: "-59 seats, -15.1% vote share",
      keyDrivers: ["AAP wave", "Complete Malwa collapse", "Dera influence shifts", "Protest voting"],
    },
  ],

  aapProgression: [
    {
      year: "2012",
      seats: 0,
      voteShare: "3.8%",
      shiftPattern: "Entering Punjab politics",
    },
    {
      year: "2017",
      seats: 20,
      voteShare: "23.7%",
      shiftPattern: "Major breakthrough - urban, youth, SC support",
    },
    {
      year: "2022",
      seats: 92,
      voteShare: "42.3%",
      shiftPattern: "Wave election - won across all regions and communities",
    },
  ],

  sadBjpAnalysis: {
    traditionalVoters: "Jat Sikh, rural Malwa base",
    "2022Shift": "Massive shift to AAP - lost almost all seats",
    potentialRecovery: "Limited recovery expected without major change in voter perception",
    riskFactors: [
      "BJP alliance may drag down SAD",
      "Leadership vacuum post-Badal",
      "No clear recovery narrative",
    ],
  },

  regionalPatterns: [
    {
      region: "Malwa",
      "2012Pattern": "SAD-BJP dominant but Congress competitive",
      "2017Pattern": "Congress surge but SAD retained most seats",
      "2022Pattern": "AAP wave - Congress nearly wiped out",
      dominantFactor: "Dera influence, anti-incumbency, winnability perception",
      "2027Projection": "Congress recovery possible if winnability signal strong",
    },
    {
      region: "Majha",
      "2012Pattern": "Congress stronghold",
      "2017Pattern": "Congress retained but reduced",
      "2022Pattern": "AAP gained significantly",
      dominantFactor: "Border security, candidate quality",
      "2027Projection": "Congress can recover with proper candidate selection",
    },
    {
      region: "Doaba",
      "2012Pattern": "Congress-SAD competition",
      "2017Pattern": "AAP breakthrough in SC seats",
      "2022Pattern": "AAP dominant",
      dominantFactor: "SC voter shift to AAP, youth protest vote",
      "2027Projection": "AAP vulnerable if governance fails to deliver",
    },
  ],

  // Punjab Drivers
  drugsImpact: {
    driver: "Drugs Crisis",
    severity: "9/10",
    affectedCommunities: "All communities, especially youth and rural",
    governmentResponsibility: "Voters hold AAP government responsible for drug crisis despite claims of crackdown",
    voterAngerDirection: "Anger directed at AAP if perceived as failing; anger at previous Congress government if narrative shifts",
    shiftPotential: "Can help Congress if positioned as alternative approach",
  },

  agrarianImpact: {
    driver: "Agricultural Distress",
    severity: "8/10",
    affectedFarmers: "85% of rural population directly or indirectly dependent",
    mortgageDebt: "High levels of farm debt, though not as severe as 2015 crisis",
    farmerSuicides: "Continued suicides attributed to debt",
    shiftDirection: "Can hurt AAP if farmers perceive lack of MSP support; helps Congress if positioned as farmer friend",
  },

  youthUnemploymentImpact: {
    driver: "Youth Unemployment",
    severity: "9/10",
    affectedYouthPercent: "~30% of educated youth unemployed",
    educationMigration: "High rates of youth leaving Punjab for jobs",
    shiftPotential: "Critical - AAP promised jobs and failed to deliver; Congress opportunity",
  },

  womenWelfareImpact: {
    driver: "Women Welfare",
    beneficiaryPerception: "Mixed - some schemes continued, some reduced",
    schemeContinuation: "Most BJP-origin schemes continued by AAP",
    congressAdvantage: "Congress can position as original welfare champion; women voters are persuadable",
  },

  casteConversionImpact: {
    driver: "Caste Conversion",
    phenomenon: "Some SC families converting to Christianity for benefits",
    affectedVoters: "Small but visible minority of SC voters",
    politicalImplication: "Creates confusion about identity-based voting; Congress should avoid direct comment",
  },

  deraInfluence: {
    driver: "Dera Network Influence",
    keyDeras: ["Dera Sacha Sauda", "Dera Ballan", "Radha Soami"],
    alignmentShift: "Dera Ballan remains Congress-aligned; Dera Sacha Sauda moved to AAP",
    followerVoteTransfer: "Dera Ballan can deliver 3-5% in Malwa seats; Dera Sacha Sauda actively working for AAP",
  },

  waveMomentum: {
    factor: "Wave Momentum",
    description: "Late-campaign collective shift that can override fundamentals",
    measurement: "Tracking poll changes in final 30 days",
    impactOnShift: "In wave elections, can shift 5-10% in final 2 weeks",
  },

  // 2027 Predictions
  scenarios: [
    {
      scenario: "Optimistic",
      voteShareProjection: "36-40%",
      seatProjection: "58-72 seats",
      keyAssumptions: [
        "Congress candidate quality high across most seats",
        "AAP governance failures become dominant narrative",
        "Winnability perception strongly favors Congress",
        "Dera Ballan endorsement actively deployed",
      ],
      riskFactors: [
        "Overestimation of anti-AAP sentiment",
        "Candidate quality variability",
        "GOTV effectiveness",
      ],
      probability: "25%",
    },
    {
      scenario: "Base",
      voteShareProjection: "32-36%",
      seatProjection: "40-55 seats",
      keyAssumptions: [
        "Mixed candidate quality",
        "Governance narrative competitive",
        "Winnability perception moderate",
        "GOTV at normal levels",
      ],
      riskFactors: [
        "Wave momentum could go either way",
        "Dera influence uncertain",
        "Economic conditions unknown",
      ],
      probability: "50%",
    },
    {
      scenario: "Pessimistic",
      voteShareProjection: "26-32%",
      seatProjection: "22-38 seats",
      keyAssumptions: [
        "Candidate selection problems in key seats",
        "Winnability perception remains against Congress",
        "AAP narrative stays dominant",
        "GOTV weaknesses persist",
      ],
      riskFactors: [
        "Underestimation of AAP strength",
        "Overestimation of anti-incumbency",
        "Regional variations unaccounted",
      ],
      probability: "25%",
    },
  ],

  constituencyPredictions: [
    {
      constituency: "Amritsar East",
      region: "Majha",
      currentHolder: "AAP",
      "2022Margin": "AAP +12%",
      shiftIndicators: [
        "Urban educated voters showing Congress interest",
        "Candidate quality critical",
        "NRI family influence",
      ],
      prediction2027: "Competitive - Congress can win with right candidate",
      confidence: "Medium",
      counterfactualScenarios: [
        "Strong AAP candidate = AAP retains",
        "Weak AAP candidate + strong Congress = Congress wins",
      ],
    },
    {
      constituency: "Jalandhar West",
      region: "Doaba",
      currentHolder: "AAP",
      "2022Margin": "AAP +8%",
      shiftIndicators: [
        "Industrial workers disappointed",
        "Youth unemployment high",
        "SC vote potentially movable",
      ],
      prediction2027: "Lean AAP but vulnerable",
      confidence: "Low",
      counterfactualScenarios: [
        "Governance narrative dominant = AAP retains",
        "Jobs narrative dominant = Congress competitive",
      ],
    },
    {
      constituency: "Bathinda",
      region: "Malwa",
      currentHolder: "SAD",
      margin2022: "SAD +15%",
      shiftIndicators: [
        "SAD-BJP alliance weakness",
        "Malwa anti-incumbency potential",
        "Farmer distress signal",
      ],
      prediction2027: "Congress can win if SAD-BJP splits anti-AAP vote",
      confidence: "Medium",
      counterfactualScenarios: [
        "Triangular contest = Congress wins",
        "Direct AAP vs Congress = uncertain",
      ],
    },
  ],

  recoveryPath: {
    fromSeats: 18,
    toSeatsOptimistic: 65,
    toSeatsBase: 48,
    voteShareRecovery: "+10-15% from 2022 baseline",
    requiredSwing: "Need to swing 8-12% from AAP to Congress in seats where AAP won",
    criticalSeats: [
      "Amritsar East",
      "Jalandhar West",
      "Ludhiana Rural",
      "Moga",
      "Pathankot",
      "Hoshiarpur",
      "Kapurthala",
    ],
  },

  // Confidence
  knowledgeConfidence: [
    {
      category: "Historical Patterns",
      confidenceLevel: "High",
      dataReliability: "Verified election data",
      modelLimitations: "Past patterns may not repeat",
    },
    {
      category: "Shift Drivers",
      confidenceLevel: "Medium",
      dataReliability: "Observable indicators",
      modelLimitations: "Subjective severity ratings",
    },
    {
      category: "Model Outputs",
      confidenceLevel: "Low",
      dataReliability: "Model estimates",
      modelLimitations: "Unforeseen events, wave dynamics",
    },
    {
      category: "2027 Predictions",
      confidenceLevel: "Low",
      dataReliability: "Multiple assumptions",
      modelLimitations: "High uncertainty at 9 months out",
    },
  ],
};
