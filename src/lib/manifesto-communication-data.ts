// @ts-nocheck
// Manifesto, Communication & Content Strategy Data
// Derived from: direct-documentation/cat-3-party-propulsion/b9-manifesto-communication-content-strategy.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import { ManifestoCommunicationData } from "@/types/manifesto-communication-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "2026-05-20",
  agent: "Track B",
  taskId: "B9",
  frameworkReference: "Section 3.4-3.6",
  confidence: "HIGH" as const,
};

// ==========================================
// MANIFESTO DESIGN - RESEARCH PHASE
// ==========================================

const voterPrioritySurvey = {
  stratification: [
    "Regional divisions (Malwa, Majha, Doaba)",
    "Caste demographics (Mazhabi Sikh, Jat Sikh, OBC, Upper Caste Hindu, SC)",
    "Age cohorts (youth 18-35, middle-aged 36-55, senior 55+)",
    "Urban-rural divide",
    "Gender considerations",
  ],
  methodology:
    "Combination of quantitative panel surveys (minimum 2,000-3,000 respondents) with qualitative depth interviews",
  sampleSize: "Minimum 2,000-3,000 for state-level representativeness",
  aiccCoordination:
    "Central Election Committee (CEC) of Congress party relies on AICC Research Department in coordination with state units",
};

const focusGroupDiscussions = {
  representativeConstituencies:
    "Representative constituencies across each region",
  demographicGroups: [
    "Farmers",
    "Youth",
    "Women",
    "Industrial workers",
    "Traders",
  ],
  swingVoterPopulations: "Explicit targeting for qualitative research",
  purpose:
    "Probe not just what issues matter but how voters conceptualize problems, what language they use, and what emotional triggers surround key topics",
};

const constituencyLevelGathering = {
  blockLevelMeetings:
    "Meetings with block-level Congress committee leaders",
  localMediaAnalysis: "Analysis of local media for recurring complaints",
  previousElectionAnalysis:
    "Review of previous election results in specific constituencies",
  localPowerStructures:
    "Understanding of local power structures and influential figures",
};

const expertConsultations = {
  agriculturalEconomists: "For farm policy",
  industrialRelations: "For employment policy",
  legalExperts: "For constitutional/political reforms",
  healthExperts: "For drug rehabilitation and healthcare",
  educationExperts: "For school/college governance",
  energySpecialists: "For power and renewable policy",
  waterResource: "For irrigation and groundwater",
};

const competitiveAnalysis = {
  aap2022Manifesto: "AAP's 2022 manifesto and subsequent government commitments",
  sadPositions: "SAD's manifesto positions",
  bjpStatePositions:
    "BJP's state and national positions as they apply to Punjab",
  centralSchemes: "Central government schemes relevant to Punjab",
  differentiationOpportunities:
    "Areas where party may want to adopt similar positions or explicitly contrast",
};

const draftingPhase = {
  brainstormingSessions:
    "Large-format brainstorming sessions bringing together senior leadership, policy experts, legislators, and younger party workers",
  sectorCommittees: [
    "Agriculture and Irrigation",
    "Industry, Employment and Skills",
    "Health and Drug Rehabilitation",
    "Education",
    "Law and Order",
    "Water and Environment",
    "Transport and Infrastructure",
    "Social Welfare (including SC/BC communities)",
    "Women and Child Development",
    "Youth and Sports",
  ],
  legalReview:
    "Legal review ensures promises are achievable, funded, state subjects distinguished, no electoral law violations, proper disclaimers",
  financialCosting:
    "Independent cost assessment providing total outlay, funding sources, phased implementation projections",
  pilotTesting:
    "Draft commitments tested with representative voter focus groups before finalization",
};

const keyComponents = {
  statementOfValues:
    "Opening section establishing party's philosophical foundation — why it exists, what principles guide decisions, what future state envisioned",
  sectorWiseCommitments:
    "Specific promises organized by theme/sector with deliverable, target beneficiary, timeline, cost, implementation approach",
  financialProjections:
    "Summary table showing total projected costs, funding sources, fiscal impact for transparency",
  implementationTimeline:
    "Commitments organized by electoral term phases — first 100 days, first year, full term",
  successIndicators:
    "Measurable metrics by which voters can assess implementation — specific, quantifiable indicators",
};

const testingPhase = {
  voterReactionSurveys: [
    "Overall manifesto appeal",
    "Specific commitment reactions",
    "Comparative positioning against opponent promises",
    "Changes in voting intention",
  ],
  socialMediaResponse: [
    "Sentiment analysis of social mentions",
    "Most-shared commitments",
    "Criticisms and objections",
    "Comparison with opponent response",
  ],
  mediaAnalysis: [
    "Tone of coverage (positive/negative/neutral)",
    "Key commitments highlighted",
    "Frames used in coverage",
    "Comparison with media treatment of opponent manifestos",
  ],
  focusGroupFeedback:
    "Deeper qualitative feedback from focus groups testing full manifesto document and presentation",
  revisionIterations: [
    "Unclear or misunderstood commitments",
    "Credibility concerns",
    "Emotional resonance gaps",
    "Competitive positioning needs",
  ],
};

const launchPhase = {
  eventDesign:
    "Media production designed for television broadcast appeal, digital content generation, press coverage optimization, social media amplification",
  mediaStrategy: [
    "Embargoed press briefings for select media",
    "Simultaneous digital release",
    "Star campaigner soundbites ready for broadcast",
    "Fact-sheet and summary document for media",
  ],
  distributionPlan: [
    "Print copies for all booth-level workers",
    "Digital PDF for WhatsApp distribution",
    "Website hosting with search optimization",
    "Regional language versions (Punjabi, Hindi)",
    "Accessible formats for differently-abled voters",
  ],
  digitalRollout: [
    "Dedicated website section for manifesto",
    "Explainer videos for key commitments",
    "Social media graphics package",
    "FAQ document addressing likely questions",
    "Regional and demographic-specific summaries",
  ],
};

// ==========================================
// COMMUNICATION STRATEGY
// ==========================================

const channelStrategy = {
  traditionalMedia: ["Print newspapers", "TV channels", "Radio"],
  digitalPlatforms: [
    "Facebook",
    "Instagram",
    "YouTube",
    "WhatsApp",
    "Twitter/X",
  ],
  groundLevel: ["Rallies", "Booth-level workers", "Door-to-door"],
  microTargeting:
    "Regional differentiation (Malwa/Majha/Doaba), cultural resonance, platform-native optimization",
};

const messageFramework = {
  coreNarrative:
    "Congress as proven track record vs AAP's failed experiment — credibility, experience, and future vision",
  keyMessages: [
    "Congress built Punjab's agricultural infrastructure",
    "AAP broke promises on drugs, jobs, and power",
    "Congress will deliver sustainable welfare not freebies",
    "Unity, stability, and development",
  ],
  differentiationFromAAP: [
    "Targeted welfare vs universal freebies",
    "Fiscally responsible schemes",
    "Agricultural welfare focus (AAP underperformer)",
    "SC/ST dedicated schemes",
  ],
  culturalResonance:
    "Gurmukhi script content, Punjabi cultural references, regional dialect differentiation",
};

// ==========================================
// CONTENT STRATEGY
// ==========================================

const contentPillars = {
  pillar1: "Track Record — Congress's historical contributions to Punjab",
  pillar2:
    "AAP Failures — Broken promises and governance failures 2022-2026",
  pillar3:
    "Future Vision — Specific, achievable promises with implementation pathways",
  pillar4:
    "Cultural Connection — Punjabi identity, farmer welfare, youth empowerment",
};

const contentFormats = {
  video: [
    "Short-form Reels (30-60 seconds)",
    "Long-form YouTube videos (3-5 minutes)",
    "Testimonial videos",
    "Explainer animations",
  ],
  graphics: [
    "Quote cards",
    "Data infographics",
    "Event promotional posters",
    "Memes (culturally resonant)",
  ],
  text: [
    "Press releases",
    "Op-eds",
    "WhatsApp text campaigns",
    "SMS blasts",
  ],
  audio: [
    "Radio spots (30 seconds)",
    "Podcast episodes (20-30 minutes)",
    "IVR messages",
    "Campaign jingles",
  ],
};

const regionalContent = {
  malwa:
    "Jat Sikh and Dalit populations dominant — focus on agrarian issues, Malwai dialect",
  majha:
    "Border region sensitivity — drug crisis, farmer issues, Majhi dialect",
  doaba: "NRI-focused content — diaspora engagement, Mazhabi Sikh and Valmiki populations",
};

// ==========================================
// MAIN EXPORT
// ==========================================

export const manifestoCommunicationData: ManifestoCommunicationData = {
  metadata,
  manifestoDesign: {
    researchPhase: {
      voterPrioritySurvey,
      focusGroupDiscussions,
      constituencyLevelGathering,
      expertConsultations,
      competitiveAnalysis,
    },
    draftingPhase,
    keyComponents,
    testingPhase,
    launchPhase,
  },
  communicationStrategy: {
    channelStrategy,
    messageFramework,
  },
  contentStrategy: {
    contentPillars,
    contentFormats,
    regionalContent,
  },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getManifestoSectorCommittees(): string[] {
  return draftingPhase.sectorCommittees;
}

export function getContentPillars(): { pillar: string; description: string }[] {
  return [
    { pillar: "Pillar 1", description: contentPillars.pillar1 },
    { pillar: "Pillar 2", description: contentPillars.pillar2 },
    { pillar: "Pillar 3", description: contentPillars.pillar3 },
    { pillar: "Pillar 4", description: contentPillars.pillar4 },
  ];
}

export function getRegionalContentFocus(): {
  region: string;
  focus: string;
}[] {
  return [
    { region: "Malwa", focus: regionalContent.malwa },
    { region: "Majha", focus: regionalContent.majha },
    { region: "Doaba", focus: regionalContent.doaba },
  ];
}

export function getMessageFrameworkKeyPoints(): string[] {
  return messageFramework.keyMessages;
}
