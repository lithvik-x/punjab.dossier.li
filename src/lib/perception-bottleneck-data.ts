// @ts-nocheck
// Perception Bottleneck Breaking Point Data for Punjab Congress 2027
// Source: direct-documentation/cat-5-voter-enticement/g8-perception-bottleneck-breaking-point-methodology.md
// Date: 20 May 2026 | Agent: Track B | Task ID: G8

import type { PerceptionBottleneckData } from "@/types/perception-bottleneck-types";

export const PERCEPTION_BOTTLENECK_DATA: PerceptionBottleneckData = {
  documentDate: "20 May 2026",
  agent: "Track B",
  taskId: "G8",
  frameworkSections: [
    "Bottleneck Types Definitions",
    "Measurement Methodology",
    "Breaking Point Identification",
    "Counter-Narrative Design",
    "Punjab-Specific Bottleneck Inventory",
    "Prioritization Matrix",
    "Deployment Calendar",
    "Monitoring & Adjustment",
    "Knowledge Confidence",
  ],

  // Definitions
  bottleneckDefinitions: [
    {
      type: "Winnability Belief",
      definition: "Voter perception that Congress cannot win in their constituency or region",
      voterQuestion: "If I vote for Congress, will my vote be wasted?",
      underlyingFear: "Wasting vote on a loser, reinforcing defeat",
      strategicCategory: "Perception of inevitability",
    },
    {
      type: "Competence Doubt",
      definition: "Voter perception that Congress cannot govern effectively or deliver on promises",
      voterQuestion: "Can Congress actually fix the problems if elected?",
      underlyingFear: "Electing an incompetent government that will fail",
      strategicCategory: "Capability skepticism",
    },
    {
      type: "Integrity Question",
      definition: "Voter perception that Congress is corrupt or lacks moral authority",
      voterQuestion: "Is Congress just as corrupt as the others?",
      underlyingFear: "Being fooled again by empty promises",
      strategicCategory: "Trust deficit",
    },
    {
      type: "Identity Mismatch",
      definition: "Voter perception that Congress does not represent their community or values",
      voterQuestion: "Does Congress really understand people like me?",
      underlyingFear: "Cultural alienation from party",
      strategicCategory: "Representation gap",
    },
    {
      type: "Priority Conflict",
      definition: "Voter perception that Congress priorities do not match voter's most urgent needs",
      voterQuestion: "Does Congress care about what I care about most?",
      underlyingFear: "Mismatch between voter needs and party agenda",
      strategicCategory: "Agenda misalignment",
    },
  ],

  types: [
    "Winnability Belief",
    "Competence Doubt",
    "Integrity Question",
    "Identity Mismatch",
    "Priority Conflict",
  ],

  // Measurement
  surveyMetrics: [
    {
      metric: "Winnability Perception",
      question: "Which party do you think will win in your constituency?",
      scale: "Congress / AAP / SAD / Other / Don't know",
      threshold: "<35% expect Congress win = bottleneck active",
      measurementFrequency: "Monthly tracking",
    },
    {
      metric: "Competence Rating",
      question: "Rate Congress on ability to deliver on promises (1-10)",
      scale: "1-10 scale",
      threshold: "Mean <6 = bottleneck active",
      measurementFrequency: "Quarterly",
    },
    {
      metric: "Trust Score",
      question: "How much do you trust Congress to keep its promises?",
      scale: "Fully / Mostly / Somewhat / Not at all",
      threshold: "<40% Fully/Mostly = bottleneck active",
      measurementFrequency: "Quarterly",
    },
    {
      metric: "Community Representation",
      question: "Does Congress understand issues facing [community]?",
      scale: "Yes / No / Somewhat",
      threshold: ">30% No = bottleneck active",
      measurementFrequency: "Pre-election only",
    },
    {
      metric: "Priority Match",
      question: "Is Congress focused on the issues most important to you?",
      scale: "Yes / No / Partial",
      threshold: ">40% No = bottleneck active",
      measurementFrequency: "Pre-election only",
    },
  ],

  focusGroupProtocol: {
    method: "Qualitative depth interviews and focus groups",
    groupComposition: [
      "Swing voters (non-Congress, non-AAP loyalists)",
      "Congress defectors (voted AAP in 2022)",
      "Core Congress supporters (for validation)",
      "Segment by region, caste, age",
    ],
    discussionTopics: [
      "Party perceptions unprompted",
      "Reasons for 2022 vote choice",
      "Conditions for considering Congress",
      "Trusted sources of information",
      "Response to potential messages",
    ],
    perceptionIndicators: [
      "Spontaneous mentions of bottlenecks",
      "Emotional intensity when discussing",
      "Word associations with parties",
      "Stated willingness to consider alternatives",
    ],
  },

  socialMediaAnalysis: [
    {
      metric: "Sentiment Ratio",
      platforms: ["Facebook", "Twitter", "Instagram", "YouTube"],
      sentimentIndicators: [
        "Positive mentions ratio",
        "Negative mention themes",
        "Neutral volume",
      ],
      volumeThresholds: ">30% negative = elevated concern",
      engagementMarkers: [
        "Share rates",
        "Comment sentiment",
        "Video completion rates",
      ],
    },
    {
      metric: "Narrative Themes",
      platforms: ["WhatsApp", "Facebook", "Twitter"],
      sentimentIndicators: [
        "Winnability narratives (winning/losing talk)",
        "Corruption accusations",
        "Competence claims",
      ],
      volumeThresholds: "Emerging themes tracked for intervention",
      engagementMarkers: [
        "Forward chains",
        "Group adoption of narratives",
        "Meme virality",
      ],
    },
  ],

  // Breaking Points
  breakingPointThresholds: [
    {
      bottleneckType: "Winnability Belief",
      socialProofThreshold: ">30% openly supporting Congress",
      evidenceAccumulationPoint: "3+ visible rallies with good attendance",
      authorityEndorsementTrigger: "2-3 credible endorsements from recognized figures",
      criticalIncidentRequirement: "Either AAP loss in nearby constituency OR visible crowd at Congress event",
      temporalAccelerationPoint: "Final 2 weeks",
    },
    {
      bottleneckType: "Competence Doubt",
      socialProofThreshold: ">40% have seen concrete proof of delivery",
      evidenceAccumulationPoint: "Documented delivery on 2-3 specific promises",
      authorityEndorsementTrigger: "Expert endorsement + media coverage",
      criticalIncidentRequirement: "Visible infrastructure or scheme delivery",
      temporalAccelerationPoint: "T-60 to T-30",
    },
    {
      bottleneckType: "Integrity Question",
      socialProofThreshold: ">50% believe Congress has changed/is different",
      evidenceAccumulationPoint: "3+ cases of Congress taking strong anti-corruption positions",
      authorityEndorsementTrigger: "Credible third-party validation",
      criticalIncidentRequirement: "Congress opponent exposed on corruption",
      temporalAccelerationPoint: "T-45 to T-30",
    },
    {
      bottleneckType: "Identity Mismatch",
      socialProofThreshold: ">60% believe Congress represents their community",
      evidenceAccumulationPoint: "Candidate-caste-community alignment visible",
      authorityEndorsementTrigger: "Community leader endorsements",
      criticalIncidentRequirement: "No identity-based criticism from within community",
      temporalAccelerationPoint: "Throughout campaign",
    },
    {
      bottleneckType: "Priority Conflict",
      socialProofThreshold: ">50% see Congress focused on their #1 issue",
      evidenceAccumulationPoint: "Issue emphasis matching voter priorities",
      authorityEndorsementTrigger: "Issue-specific endorsements",
      criticalIncidentRequirement: "Congress directly addresses dominant concern",
      temporalAccelerationPoint: "T-30 onwards",
    },
  ],

  socialProofIndicators: [
    {
      indicator: "Verbal Declarations",
      measurement: "Percent openly saying they will vote Congress",
      baseline: "15-20% at start",
      breakingPoint: ">35% publicly committed",
      exceedingThreshold: ">45% creates momentum",
    },
    {
      indicator: "Rally Attendance",
      measurement: "Observed vs expected attendance",
      baseline: "Below expectations",
      breakingPoint: "Exceeds expectations by 20%+",
      exceedingThreshold: "Unexpectedly large crowds",
    },
    {
      indicator: "Booth-Level Enthusiasm",
      measurement: "Worker and voter enthusiasm scores",
      baseline: "Low energy",
      breakingPoint: "High energy visible at booth level",
      exceedingThreshold: "Volunteers actively recruiting",
    },
  ],

  evidenceAccumulation: [
    {
      evidenceType: "Documented Delivery",
      quantity: "3-5 concrete examples",
      quality: "Verified, visible, uncontested",
      credibilityWeight: "High",
      voterAccumulationPattern: "Takes 4-6 weeks to sink in",
    },
    {
      evidenceType: "Media Coverage",
      quantity: "10+ positive stories",
      quality: "Credible outlets, not just paid",
      credibilityWeight: "Medium-High",
      voterAccumulationPattern: "Takes 2-3 weeks",
    },
    {
      evidenceType: "Social Proof",
      quantity: "30%+ openly supporting",
      quality: "From voter's own social network",
      credibilityWeight: "Highest",
      voterAccumulationPattern: "Accelerates over final 2 weeks",
    },
  ],

  authorityEndorsements: [
    {
      authorityType: "Celebrity Figure",
      credibilityScore: "8/10",
      voterTrust: "High for fans and general public",
      endorsementTiming: "T-60 to T-30 for maximum impact",
      multiplierEffect: "3-5x reach through media coverage",
    },
    {
      authorityType: "Community Leader",
      credibilityScore: "9/10",
      voterTrust: "Highest for their community",
      endorsementTiming: "T-45 to T-21",
      multiplierEffect: "Direct vote transfer within community",
    },
    {
      authorityType: "Expert/Professional",
      credibilityScore: "7/10",
      voterTrust: "High for issue-specific claims",
      endorsementTiming: "T-60 to T-30",
      multiplierEffect: "Validates competence narrative",
    },
    {
      authorityType: "Religious Figure",
      credibilityScore: "9/10",
      voterTrust: "Highest for faithful",
      endorsementTiming: "T-30 to T-14",
      multiplierEffect: "Can shift entire communities",
    },
  ],

  criticalIncidents: [
    {
      incidentType: "Opposition Scandal",
      severityRequirement: "High credibility source",
      voterPerception: "Taints all parties but may hurt incumbents more",
      mediaAmplification: "Critical for impact",
      persistenceImpact: "Medium - fades over 2-3 weeks",
    },
    {
      incidentType: "Congress Announcement",
      severityRequirement: "High-impact initiative",
      voterPerception: "Positive if credible",
      mediaAmplification: "Essential for reach",
      persistenceImpact: "High - becomes part of narrative",
    },
    {
      incidentType: "Gaffe/Misstep",
      severityRequirement: "Depends on severity",
      voterPerception: "Can be recovered if handled well",
      mediaAmplification: "Viral risk high",
      persistenceImpact: "Low if recovered quickly",
    },
  ],

  temporalDynamics: {
    accelerationFactor: "3x in final 2 weeks",
    thresholdVelocity: "Need >5% weekly shift to break perception",
    peakTiming: "T-7 to T-3 days",
    decayRate: "Slow - perceptions persist into next election",
    reversalRisk: "High if wrong narrative breaks in final days",
  },

  // Counter-Narratives
  counterNarratives: [
    {
      bottleneckType: "Winnability Belief",
      counterNarrative: "Congress is winning - join the winning side",
      evidenceRequired: [
        "Rally attendance",
        "Crowd enthusiasm",
        "Booth-level enthusiasm",
        "Other seat projections",
      ],
      messengerRecommendation: "Returnee, local leader, celebrity",
      deliveryChannels: ["WhatsApp virals", "Rallies", "Booth workers"],
      emotionalAppeal: "Hope, belonging, fear of missing out",
    },
    {
      bottleneckType: "Competence Doubt",
      counterNarrative: "Congress delivered before, will deliver again",
      evidenceRequired: [
        "Past delivery examples",
        "Specific plan with timeline",
        "Expert endorsements",
        "Comparison with AAP failures",
      ],
      messengerRecommendation: "Expert, professional, Returnee",
      deliveryChannels: ["Media ads", "Rallies", "Door-to-door"],
      emotionalAppeal: "Confidence, competence",
    },
    {
      bottleneckType: "Integrity Question",
      counterNarrative: "Congress has changed - new leadership, new approach",
      evidenceRequired: [
        "Anti-corruption actions",
        "New candidate profiles",
        "Transparency measures",
        "Third-party validation",
      ],
      messengerRecommendation: "Civil society figure, Returnee, religious leader",
      deliveryChannels: ["Media", "Community gatherings", "Social media"],
      emotionalAppeal: "Trust, renewal",
    },
    {
      bottleneckType: "Identity Mismatch",
      counterNarrative: "Congress is your party - candidates, issues, values",
      evidenceRequired: [
        "Candidate from community",
        "Community-specific promises",
        "Community leader endorsements",
        "Cultural programming",
      ],
      messengerRecommendation: "Community leader, local candidate",
      deliveryChannels: ["Community events", "WhatsApp groups", "Religious gatherings"],
      emotionalAppeal: "Pride, belonging, recognition",
    },
    {
      bottleneckType: "Priority Conflict",
      counterNarrative: "Congress hears you - your issue is our #1 priority",
      evidenceRequired: [
        "Issue-specific promises",
        "Policy details",
        "Leader prioritization",
        "Media coverage of issue",
      ],
      messengerRecommendation: "Issue-affected leader, expert",
      deliveryChannels: ["Issue-specific events", "Door-to-door", "WhatsApp"],
      emotionalAppeal: "Validation, hope",
    },
  ],

  narrativeFramings: [
    {
      framing: "Hope Narrative",
      storyElements: [
        "Punjab deserves better",
        "Congress has a plan",
        "Your vote can make the difference",
      ],
      emotionalResonance: "Positive, aspirational",
      evidenceBase: "Requires proof of capability",
      messengerCriteria: "Optimistic, credible leader",
    },
    {
      framing: "Anger Narrative",
      storyElements: [
        "AAP failed you",
        "Promises broken",
        "Jobs lost, not gained",
      ],
      emotionalResonance: "High for protest voters",
      evidenceBase: "Easy to document",
      messengerCriteria: "Can channel anger credibly",
    },
    {
      framing: "Fear Narrative",
      storyElements: [
        "What happens if AAP wins again",
        "Four more years of broken promises",
        "Your children's future",
      ],
      emotionalResonance: "Works for core supporters",
      evidenceBase: "Projected consequences",
      messengerCriteria: "Trusted authority figure",
    },
    {
      framing: "Pride Narrative",
      storyElements: [
        "Punjab's potential",
        "Our farmers, our youth",
        "Restore Punjab's glory",
      ],
      emotionalResonance: "Strong for Jat Sikh, rural",
      evidenceBase: "Historical achievements",
      messengerCriteria: "Punjab pride figure",
    },
  ],

  narrativeEffectiveness: [
    {
      narrativeType: "Hope",
      targetBottleneck: "Winnability, Competence",
      expectedShift: "5-8% among persuadables",
      timeToEffect: "3-4 weeks",
      decayRate: "Slow",
    },
    {
      narrativeType: "Anger",
      targetBottleneck: "Competence",
      expectedShift: "8-12% among protest voters",
      timeToEffect: "1-2 weeks",
      decayRate: "Medium",
    },
    {
      narrativeType: "Fear",
      targetBottleneck: "Winnability",
      expectedShift: "3-5% GOTV effect",
      timeToEffect: "1 week",
      decayRate: "Fast",
    },
    {
      narrativeType: "Pride",
      targetBottleneck: "Identity, Competence",
      expectedShift: "4-6% among Jat Sikh",
      timeToEffect: "2-3 weeks",
      decayRate: "Slow",
    },
  ],

  // Punjab Inventory
  punjabBottlenecks: [
    {
      id: "P-1",
      bottleneckType: "Winnability Belief",
      description: "Congress cannot win in Malwa - perception of inevitability",
      severity: 9,
      affectedVoterSegment: "All Malwa voters, especially swing voters",
      geographicConcentration: "Malwa region (69 seats)",
      causeOrigin: "2017-2022 collapse; wave narrative",
      currentEvidence: "Voters assume AAP will win Malwa",
      breakingPointMetrics: ">30% openly supporting Congress in Malwa",
      recommendedCounterNarrative: "Congress is winning Malwa - join the wave",
      urgencyLevel: "Critical",
    },
    {
      id: "P-2",
      bottleneckType: "Competence Doubt",
      description: "Congress cannot deliver jobs or fix drug crisis",
      severity: 8,
      affectedVoterSegment: "Youth (18-35), urban voters",
      geographicConcentration: "All regions, especially Doaba",
      causeOrigin: "AAP promises on jobs; drug crisis persistence",
      currentEvidence: "Voters cite jobs and drugs as top concerns",
      breakingPointMetrics: "Visible delivery on 2-3 specific promises",
      recommendedCounterNarrative: "Congress has a real plan - AAP had four years and failed",
      urgencyLevel: "Critical",
    },
    {
      id: "P-3",
      bottleneckType: "Winnability Belief",
      description: "Congress cannot win without traditional leadership",
      severity: 7,
      affectedVoterSegment: "Older voters, traditional Congress supporters",
      geographicConcentration: "Majha region",
      causeOrigin: "Leadership transitions post-2017",
      currentEvidence: "Some loyalists staying home due to candidate doubts",
      breakingPointMetrics: "Strong candidate announcement in Majha seats",
      recommendedCounterNarrative: "New generation of Congress leaders ready to serve",
      urgencyLevel: "High",
    },
    {
      id: "P-4",
      bottleneckType: "Identity Mismatch",
      description: "Congress does not represent Jat Sikh farmers",
      severity: 7,
      affectedVoterSegment: "Jat Sikh community",
      geographicConcentration: "Malwa rural",
      causeOrigin: "Perception of urban, elite Congress",
      currentEvidence: "Jat Sikh voters see Congress as out of touch",
      breakingPointMetrics: "Candidate from farming background + MSP commitment",
      recommendedCounterNarrative: "Congress stands with farmers - our candidate is one of you",
      urgencyLevel: "High",
    },
    {
      id: "P-5",
      bottleneckType: "Priority Conflict",
      description: "Congress priorities don't match voter priorities",
      severity: 6,
      affectedVoterSegment: "All voters who see issues differently",
      geographicConcentration: "All regions",
      causeOrigin: "Agenda mismatch between party and voters",
      currentEvidence: "Voters cite different top issues than Congress emphasizes",
      breakingPointMetrics: "Issue emphasis matching voter priorities",
      recommendedCounterNarrative: "We hear you - Punjab's issues are our issues",
      urgencyLevel: "Medium",
    },
  ],

  winnabilityBottlenecks: [
    {
      id: "P-1",
      bottleneckType: "Winnability Belief",
      description: "Congress cannot win in Malwa",
      severity: 9,
      affectedVoterSegment: "All Malwa voters",
      geographicConcentration: "Malwa region",
      perceivedGap: "40%+ believe AAP will win Malwa",
      winningEvidenceRequired: "Tight races in AAP-held Malwa seats, visible Congress support",
      timelineConstraint: "Must establish by T-45",
    },
  ],

  competenceBottlenecks: [
    {
      id: "P-2",
      bottleneckType: "Competence Doubt",
      description: "Congress cannot deliver on jobs",
      severity: 8,
      affectedVoterSegment: "Youth, urban voters",
      specificCompetenceQuestion: "Can Congress actually provide jobs?",
      governanceEvidenceRequired: "Specific skill development + employment plan",
      deliveryTimeline: "T-60 for plan announcement",
    },
  ],

  integrityBottlenecks: [
    {
      id: "P-6",
      bottleneckType: "Integrity Question",
      description: "Congress is corrupt like other parties",
      severity: 6,
      affectedVoterSegment: "Skeptical voters, urban middle class",
      specificIntegrityConcern: "All politicians are the same",
      accountabilityEvidenceRequired: "3+ anti-corruption positions, clean candidate list",
      trustRebuildingApproach: "Third-party validation, transparent processes",
    },
  ],

  identityBottlenecks: [
    {
      id: "P-4",
      bottleneckType: "Identity Mismatch",
      description: "Congress doesn't understand Jat Sikh farmers",
      severity: 7,
      affectedVoterSegment: "Jat Sikh community",
      voterIdentityConcern: "Our way of life is under threat",
      alignmentEvidenceRequired: "Candidate from community, farming background",
      symbolicActionNeeded: "Public commitment on MSP, farm debt relief",
    },
  ],

  priorityConflictBottlenecks: [
    {
      id: "P-7",
      bottleneckType: "Priority Conflict",
      description: "Congress focused on different issues than voters",
      severity: 6,
      affectedVoterSegment: "Varies by constituency",
      conflictingPriority: "Voters prioritize jobs, Congress emphasizes development",
      issueHierarchyEvidence: "Voter priority surveys vs. party messaging",
      prioritizationProof: "Issue-specific events and announcements",
    },
  ],

  // Prioritization
  bottleneckPriorities: [
    {
      bottleneckId: "P-1",
      severity: 9,
      prevalence: "High in Malwa (60%+)",
      easeOfResolution: "Moderate",
      counterNarrativeAvailability: "High",
      impactPotential: "Critical - determines whether Congress can compete",
      recommendedOrder: 1,
    },
    {
      bottleneckId: "P-2",
      severity: 8,
      prevalence: "High among youth (70%+)",
      easeOfResolution: "Difficult",
      counterNarrativeAvailability: "Medium",
      impactPotential: "Critical - determines youth vote",
      recommendedOrder: 2,
    },
    {
      bottleneckId: "P-4",
      severity: 7,
      prevalence: "High among Jat Sikh (50%+)",
      easeOfResolution: "Moderate",
      counterNarrativeAvailability: "High",
      impactPotential: "High - Jat Sikh vote is decisive in Malwa",
      recommendedOrder: 3,
    },
    {
      bottleneckId: "P-3",
      severity: 7,
      prevalence: "Moderate in Majha (40%+)",
      easeOfResolution: "Easy",
      counterNarrativeAvailability: "High",
      impactPotential: "High - Majha is Congress recoverable base",
      recommendedOrder: 4,
    },
    {
      bottleneckId: "P-5",
      severity: 6,
      prevalence: "Variable (30-50%)",
      easeOfResolution: "Easy",
      counterNarrativeAvailability: "High",
      impactPotential: "Medium - affects persuasion across segments",
      recommendedOrder: 5,
    },
  ],

  resourceAllocation: [
    {
      bottleneckId: "P-1",
      severity: 9,
      allocatedResources: "40% of narrative resources",
      expectedImpact: "Break winnability perception in Malwa",
      resourceEfficiency: "High - addressing most critical bottleneck",
    },
    {
      bottleneckId: "P-2",
      severity: 8,
      allocatedResources: "30% of narrative resources",
      expectedImpact: "Counter competence doubts on jobs",
      resourceEfficiency: "Medium - requires concrete plan",
    },
    {
      bottleneckId: "P-4",
      severity: 7,
      allocatedResources: "20% of narrative resources",
      expectedImpact: "Identity alignment with Jat Sikh",
      resourceEfficiency: "High - clear messaging possible",
    },
    {
      bottleneckId: "P-3",
      severity: 7,
      allocatedResources: "10% of narrative resources",
      expectedImpact: "Address leadership transition concerns",
      resourceEfficiency: "High - candidate announcements solve",
    },
  ],

  // Deployment
  interventions: [
    {
      bottleneckId: "P-1",
      interventionType: "Rally + Social Proof",
      startDate: "T-60",
      duration: "Ongoing",
      keyMilestones: [
        "T-60: First major Malwa rally",
        "T-45: 3 rallies completed",
        "T-30: Social proof threshold visible",
      ],
      resourceRequirement: "High - multiple rallies",
      coordinationNeeded: "Local leaders + central party",
    },
    {
      bottleneckId: "P-2",
      interventionType: "Jobs Plan Announcement",
      startDate: "T-75",
      duration: "One-time + ongoing reinforcement",
      keyMilestones: [
        "T-75: Formal plan release",
        "T-60: Expert endorsements",
        "T-30: Media campaign on plan",
      ],
      resourceRequirement: "Medium - plan development + communication",
      coordinationNeeded: "Policy team + media cell",
    },
    {
      bottleneckId: "P-4",
      interventionType: "Candidate Selection + Community Events",
      startDate: "T-90",
      duration: "Ongoing through candidate announcement",
      keyMilestones: [
        "T-90: Start community engagement",
        "T-60: Candidate finalized",
        "T-45: Community endorsement events",
      ],
      resourceRequirement: "High - local organizing",
      coordinationNeeded: "Caste leaders + candidate team",
    },
  ],

  campaignPhaseIntegration: [
    {
      phase: "Foundation (T-90 to T-60)",
      timeframe: "November - December 2026",
      primaryBottleneck: "P-1 (Winnability), P-4 (Identity)",
      interventions: [
        "Establish presence in Malwa",
        "Begin Jat Sikh community engagement",
        "Candidate identification for key seats",
      ],
      successMetrics: [
        "Rally attendance > expectations",
        "Community leader meetings secured",
        "Candidate commitments obtained",
      ],
    },
    {
      phase: "Build-up (T-60 to T-30)",
      timeframe: "January - February 2027",
      primaryBottleneck: "P-2 (Competence), P-3 (Leadership)",
      interventions: [
        "Major policy announcements",
        "Leadership visibility campaign",
        "Proof of delivery documentation",
      ],
      successMetrics: [
        "Policy coverage in media",
        "Poll movement on competence",
        "Candidate announcements completed",
      ],
    },
    {
      phase: "Intensify (T-30 to T-7)",
      timeframe: "March 2027",
      primaryBottleneck: "P-1 (Winnability)",
      interventions: [
        "Maximum rally activity",
        "Social proof accumulation",
        "GOTV preparation",
      ],
      successMetrics: [
        "Winnability perception shifts to Congress",
        "Social media virals on crowds",
        "Booth-level enthusiasm high",
      ],
    },
    {
      phase: "Final (T-7 to T-0)",
      timeframe: "Election week",
      primaryBottleneck: "All",
      interventions: [
        "GOTV push",
        "Momentum narrative",
        "Last-look persuasion",
      ],
      successMetrics: [
        "Turnout > 75%",
        "Perceived race is close",
        "Congress turnout high",
      ],
    },
  ],

  narrativeDeploymentSequence: [
    {
      narrative: "Hope - New Leadership",
      deploymentOrder: 1,
      timingRationale: "First 30 days - establish positive tone",
      prerequisiteEvidence: "Candidate quality visible",
      parallelNarratives: ["Competence plan"],
      conflictingMessages: "Avoid anger that scares off persuadables",
    },
    {
      narrative: "Competence - Jobs Plan",
      deploymentOrder: 2,
      timingRationale: "T-60 to T-30 - substantive phase",
      prerequisiteEvidence: "Detailed policy development",
      parallelNarratives: ["Identity - community connection"],
      conflictingMessages: "Avoid over-promising on jobs",
    },
    {
      narrative: "Anger - AAP Failures",
      deploymentOrder: 3,
      timingRationale: "T-45 to T-21 - contrast building",
      prerequisiteEvidence: "AAP governance failures documented",
      parallelNarratives: ["Hope for alternatives"],
      conflictingMessages: "Don't appear purely negative",
    },
    {
      narrative: "Pride - Punjab Potential",
      deploymentOrder: 4,
      timingRationale: "T-30 to T-14 - emotional connection",
      prerequisiteEvidence: "Positive vision developed",
      parallelNarratives: ["Identity - community pride"],
      conflictingMessages: "Don't appear nostalgic without vision",
    },
    {
      narrative: "Momentum - Winning Wave",
      deploymentOrder: 5,
      timingRationale: "T-14 to T-0 - social proof phase",
      prerequisiteEvidence: "Visible support base established",
      parallelNarratives: ["Fear of AAP return"],
      conflictingMessages: "Don't appear desperate or behind",
    },
  ],

  // Monitoring
  trackingMetrics: [
    {
      bottleneckId: "P-1",
      metric: "Winnability perception",
      baselineMeasurement: "15% expect Congress win",
      currentValue: undefined,
      targetValue: ">35% expect Congress win",
      measurementFrequency: "Bi-weekly",
      dataSource: "Quick polls",
    },
    {
      bottleneckId: "P-2",
      metric: "Competence rating",
      baselineMeasurement: "Mean 5.5/10",
      currentValue: undefined,
      targetValue: "Mean >7/10",
      measurementFrequency: "Monthly",
      dataSource: "Detailed surveys",
    },
    {
      bottleneckId: "P-4",
      metric: "Identity alignment",
      baselineMeasurement: "35% see Congress as their party",
      currentValue: undefined,
      targetValue: ">55% see Congress as their party",
      measurementFrequency: "Pre-election only",
      dataSource: "Segment-specific surveys",
    },
  ],

  interventionAdjustments: [
    {
      bottleneckId: "P-1",
      intervention: "Rally campaign",
      adjustmentNeeded: "If rallies don't generate coverage, shift to micro-targeted WhatsApp",
      rationale: "Coverage is the purpose; attendance alone insufficient",
      expectedOutcome: "Visible social proof across channels",
    },
    {
      bottleneckId: "P-2",
      intervention: "Jobs plan",
      adjustmentNeeded: "If plan doesn't resonate, simplify to 3 headline promises",
      rationale: "Voters don't read detailed plans; need simple memorable commitments",
      expectedOutcome: "Issue ownership on jobs shifts to Congress",
    },
  ],

  // Confidence
  knowledgeConfidence: [
    {
      category: "Bottleneck Identification",
      confidenceLevel: "High",
      evidenceQuality: "Based on observable behavior and surveys",
      punjabSpecificValidation: "Validated with state experts",
    },
    {
      category: "Breaking Point Thresholds",
      confidenceLevel: "Medium",
      evidenceQuality: "General research + expert estimates",
      punjabSpecificValidation: "Limited Punjab-specific data",
    },
    {
      category: "Counter-Narrative Effectiveness",
      confidenceLevel: "Low",
      evidenceQuality: "Theory + general effectiveness",
      punjabSpecificValidation: "Requires A/B testing",
    },
    {
      category: "Deployment Timing",
      confidenceLevel: "Medium",
      evidenceQuality: "Best practice + theory",
      punjabSpecificValidation: "Limited historical data",
    },
  ],
};
