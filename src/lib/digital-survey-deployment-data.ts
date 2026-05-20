// @ts-nocheck
// Congress Digital Survey Deployment Playbook Data
// Derived from: direct-documentation/cat-3-party-propulsion/g83-congress-digital-survey-deployment-playbook.md
// Research Date: 2026-05-20 | Data Currency: May 2026

import { DigitalSurveyDeploymentData, SurveyType } from "@/types/digital-survey-deployment-types";

// ==========================================
// METADATA
// ==========================================

const metadata = {
  reportDate: "May 2026",
  documentType: "Operational Playbook",
  version: "1.0",
  classification: "Internal — Punjab Pradesh Congress Committee",
  confidence: "HIGH" as const,
};

// ==========================================
// SURVEY TYPES
// ==========================================

const surveyTypes = [
  {
    type: "Baseline Vote Share" as SurveyType,
    purpose: "Establish current voter support by constituency before campaign launches",
    whenToRun: "Pre-campaign (T-6 months)",
    costIndex: "High" as const,
    turnaround: "10-14 days",
    decisionMatrix:
      "Run Baseline before anything else. Provides foundational data for all subsequent campaigns.",
  },
  {
    type: "Candidate Preference Test" as SurveyType,
    purpose: "Measure candidate name recognition and voter preference within each constituency",
    whenToRun: "Candidate selection phase (T-5 months)",
    costIndex: "Medium" as const,
    turnaround: "7-10 days",
    decisionMatrix:
      "Should conclude before candidate lists are finalized.",
  },
  {
    type: "Issue Salience Poll" as SurveyType,
    purpose: "Rank which issues voters prioritize (drugs, unemployment, water, etc.)",
    whenToRun: "Mid-campaign (T-3 months)",
    costIndex: "Medium" as const,
    turnaround: "5-7 days",
    decisionMatrix: "Run monthly after candidate announcement.",
  },
  {
    type: "Leader Approval" as SurveyType,
    purpose: "Track Congress leadership and local candidate approval ratings",
    whenToRun: "Ongoing (monthly pulses)",
    costIndex: "Low" as const,
    turnaround: "3-5 days",
    decisionMatrix: "Run bi-weekly in final 3 months.",
  },
  {
    type: "Rapid Pulse" as SurveyType,
    purpose:
      "Capture voter sentiment during breaking events (candidature announcements, controversies, policy shifts)",
    whenToRun: "As-needed",
    costIndex: "Low" as const,
    turnaround: "24-48 hours",
    decisionMatrix: "Event-driven only.",
  },
];

// ==========================================
// METHODOLOGY
// ==========================================

const digitalInfrastructure = {
  smartphonePenetration: {
    urban: 75,
    rural: 60,
  },
  whatsappUsage: 68,
  facebookInstagramPenetration: {
    age18_45: 65,
    punjabiSpeaking: 70,
  },
};

const mixedModeMethodology = {
  primaryChannel:
    "WhatsApp Broadcast — distribute survey links via booth agent networks and party contact lists. Achieves 35-45% completion rates when sent through trusted personal contacts.",
  boothAgentSupplementation:
    "Each of Punjab's ~23,000 polling booths has 2-3 designated booth agents. Deploy them to collect responses from voters without smartphone access.",
  phoneFollowUp:
    "For respondents who receive WhatsApp links but don't complete within 48 hours, booth agents conduct phone follow-ups.",
  qrCodeAtEvents:
    "At public rallies, meetings, and community gatherings, display QR codes linking to short surveys (5 questions maximum).",
  completionRates: {
    whatsappTrusted: "35-45%",
    coldDistribution: "8-12%",
  },
};

const sampleSizes = {
  baselineStateWide: {
    minimum: 2500,
    recommended: 5000,
    confidenceLevel: "95% / ±2.5%",
  },
  baselinePerConstituency: {
    minimum: 150,
    recommended: 300,
    confidenceLevel: "90% / ±8%",
  },
  candidatePreference: {
    minimum: 200,
    recommended: 400,
    confidenceLevel: "90% / ±6%",
  },
  issueSalience: {
    minimum: 1000,
    recommended: 2500,
    confidenceLevel: "95% / ±2.5%",
  },
  leaderApproval: {
    minimum: 500,
    recommended: 1500,
    confidenceLevel: "95% / ±3%",
  },
  rapidPulse: {
    minimum: 300,
    recommended: 500,
    confidenceLevel: "90% / ±6%",
  },
};

// ==========================================
// RECRUITMENT
// ==========================================

const recruitmentChannels = {
  boothAgentNetworks:
    "Primary channel — booth agents already maintain voter contact lists for Get Out the Vote operations. Contains known party supporters and swing voters.",
  whatsappBroadcastLists:
    "Build from: (a) booth agent contact databases, (b) party member registrations, (c) event attendee lists, (d) social media followers who engaged with Congress content.",
  socialMediaRecruitment:
    "Run low-cost Facebook and Instagram ad campaigns targeting Punjabi-speaking users aged 25-65, geo-targeted to specific constituencies.",
  qrCodeAtEvents:
    "Effective for gaining responses from voters present at physical events. Self-selection bias — event attendees are more engaged party supporters.",
};

const recruitmentQuotas = [
  { demographic: "Rural", targetPercent: 60, boothAgentQuota: "At least 10 rural contacts per agent" },
  { demographic: "Female", targetPercent: 45, boothAgentQuota: "Explicitly request female respondents" },
  { demographic: "Age 45+", targetPercent: 35, boothAgentQuota: "Include older family members" },
  { demographic: "Scheduled Caste", targetPercent: 32, boothAgentQuota: "Prioritize Mazhabi Sikh contacts" },
  { demographic: "Majha/Malwa/Doaba", targetPercent: 0, boothAgentQuota: "Regional balance across agents" },
];

const sampleBias = {
  overRepresents: [
    "Urban voters",
    "Younger voters (18-35)",
    "Male respondents",
    "Educated voters",
    "Upper-caste Hindu voters",
  ],
  underRepresents: [
    "Rural voters",
    "Older voters (55+)",
    "Female respondents",
    "Scheduled caste voters (especially Mazhabi Sikh and Valmiki)",
    "Agricultural laborer households",
  ],
  correctionMethod:
    "Post-stratification weighting corrects for known population imbalances. Warning: Never weight stratum below 0.3 or above 3.0.",
};

// ==========================================
// PLATFORM SELECTION
// ==========================================

const platformComparison = [
  {
    platform: "Google Forms",
    cost: "Free",
    punjabiSupport: "Basic (transliteration issues)",
    mobileFirst: "Moderate",
    analytics: "Limited",
    bestFor: "Small teams, baseline surveys, low-budget",
  },
  {
    platform: "Typeform",
    cost: "Rs. 800-2,500/month",
    punjabiSupport: "Good",
    mobileFirst: "Excellent",
    analytics: "Good",
    bestFor: "Professional presentations, candidate preference",
  },
  {
    platform: "Kobotoolbox",
    cost: "Free (self-hosted) or Rs. 15,000+/month (hosted)",
    punjabiSupport: "Excellent (multi-language)",
    mobileFirst: "Good",
    analytics: "Excellent",
    bestFor: "Complex surveys, offline field collection",
  },
  {
    platform: "Qualtrics",
    cost: "Rs. 50,000+/month",
    punjabiSupport: "Excellent",
    mobileFirst: "Excellent",
    analytics: "Best-in-class",
    bestFor: "Large constituencies, multiple simultaneous surveys",
  },
  {
    platform: "Custom (React/Next.js)",
    cost: "Rs. 1,50,000-5,00,000 development",
    punjabiSupport: "Full control",
    mobileFirst: "Full control",
    analytics: "Full control",
    bestFor: "Full campaign integration, real-time dashboards",
  },
];

const platformRecommendation = {
  phase1:
    "Use Google Forms with Kobotoolbox backup for offline booth agent data entry. Minimize costs while building survey muscle.",
  phase2:
    "Migrate to Typeform or Qualtrics for professional candidate preference and issue polling. Monthly cost is trivial against campaign budgets.",
  criticalRequirement:
    "All survey instruments must render correctly in Gurmukhi script. Test every survey on Android and iOS separately — rendering differences are common.",
  mobileFirstDesign:
    "78% of Punjab smartphone users are on Android with screens 5.5-6.7 inches. Design surveys for this viewport. Use large tap targets (minimum 44px), single-column layouts.",
};

// ==========================================
// QUESTIONNAIRE DESIGN
// ==========================================

const translationGuidance = {
  commonFailures: [
    "Direct translation from English to Punjabi produces awkward, unnatural questions",
    "The rule: write questions in Punjabi first, then translate to English for internal documentation",
  ],
  naturalPunjabiPhrases: [
    { english: "Who would you vote for?", punjabi: "Takeo vich keenu vote karna?" },
    { english: "What is your occupation?", punjabi: "Taange nu ki kam hai?" },
  ],
};

const socialDesirabilityProblem = {
  overReporting: 'Over-reporting voting intention (especially "will vote for Congress")',
  underReporting: "Under-reporting support for opposing parties",
  misrepresentation: "Misrepresenting caste affiliations in mixed settings",
  inflatingApproval: "Inflating approval of local leaders in phone surveys",
  mitigation: [
    "Indirect questioning for sensitive topics: Instead of 'Who will you vote for?' ask 'In your village/area, who do most people seem to support?'",
    "Randomized response technique: For caste/religion questions, randomly instruct respondents to answer truthfully or skip",
    "Conceal the sponsor: Where possible without ECI violation, avoid branding surveys as Congress-affiliated",
    "Booth agent neutrality: Train booth agents to read questions verbatim without tone or emphasis that signals desired answers",
  ],
};

const casteReligionHandling = {
  communityQuestion: 'Ask as "Which community do you identify with?" with full list of options including "Prefer not to say"',
  avoidDirectReligionQuestion: "Never ask religion directly — infer from name, location, and caste data",
  jatVsMazhabi:
    "Use surname and location patterns rather than direct questions where possible",
  developmentPriorities:
    'Ask about "development priorities for your community" rather than "what community are you from"',
};

// ==========================================
// SAMPLING
// ==========================================

const primaryStrata = {
  region: "Malwa (69 seats), Majha (27 seats), Doaba (23 seats)",
  urbanRural: "Punjab is 37% urban, 63% rural — but rural representation in digital samples is typically 25-30%",
  casteCommunity:
    "Jat Sikh (~20%), Mazhabi Sikh (~10%), Valmiki (~8%), Other SC (~14%), OBC (~16%), Upper Caste Hindu (~11%), Other (~21%)",
};

const secondaryStrata = {
  gender: "Must achieve 45%+ female representation",
  age: "18-35 (youth, 35%), 35-50 (working age, 35%), 50+ (senior, 30%)",
  boothLevelClustering: "Group respondents by polling booth for geographic granularity",
};

const oversamplingStrategy = {
  target:
    "Digital recruitment under-represents Scheduled Caste voters by 40-60%. To achieve statistically reliable estimates:",
  method: [
    "Assign each booth agent in SC-dominated booths a minimum of 20 SC respondent contacts",
    "Conduct separate WhatsApp broadcast campaigns in SC-majority areas with culturally appropriate messaging",
    "For 3-5 constituencies with high SC populations, supplement digital with in-person structured interviews",
  ],
  fieldEnumeration:
    "10-15 respondents per booth, collected by trained agents",
};

const weightAdjustments = [
  { stratum: "Rural", populationPercent: 63, rawDigitalSamplePercent: 28, weight: 2.25 },
  { stratum: "Female", populationPercent: 49, rawDigitalSamplePercent: 32, weight: 1.53 },
  { stratum: "Age 50+", populationPercent: 31, rawDigitalSamplePercent: 14, weight: 2.21 },
  { stratum: "Mazhabi Sikh", populationPercent: 10, rawDigitalSamplePercent: 5, weight: 2.0 },
  { stratum: "Valmiki", populationPercent: 8, rawDigitalSamplePercent: 3, weight: 2.67 },
];

// ==========================================
// DATA COLLECTION CADENCE
// ==========================================

const standardTimelines = [
  {
    surveyType: "Baseline Vote Share" as SurveyType,
    fieldDuration: "5-7 days",
    analysisTime: "2-3 days",
    totalTurnaround: "7-10 days",
  },
  {
    surveyType: "Candidate Preference" as SurveyType,
    fieldDuration: "4-6 days",
    analysisTime: "2 days",
    totalTurnaround: "6-8 days",
  },
  {
    surveyType: "Issue Salience" as SurveyType,
    fieldDuration: "3-5 days",
    analysisTime: "1-2 days",
    totalTurnaround: "4-7 days",
  },
  {
    surveyType: "Leader Approval" as SurveyType,
    fieldDuration: "2-3 days",
    analysisTime: "1 day",
    totalTurnaround: "3-4 days",
  },
  {
    surveyType: "Rapid Pulse" as SurveyType,
    fieldDuration: "1-2 days",
    analysisTime: "4-8 hours",
    totalTurnaround: "24-48 hours",
  },
];

// ==========================================
// MAIN EXPORT
// ==========================================

export const digitalSurveyDeploymentData: DigitalSurveyDeploymentData = {
  metadata,
  surveyTypes,
  methodology: {
    digitalInfrastructure,
    mixedModeMethodology,
    sampleSizes,
  },
  recruitment: {
    channels: recruitmentChannels,
    quotas: recruitmentQuotas,
    sampleBias,
  },
  platformSelection: {
    comparison: platformComparison,
    recommendation: platformRecommendation,
  },
  questionnaireDesign: {
    translationGuidance,
    socialDesirabilityProblem,
    casteReligionHandling,
  },
  sampling: {
    primaryStrata,
    secondaryStrata,
    oversamplingStrategy,
    weightAdjustments,
  },
  dataCollectionCadence: {
    standardTimelines,
  },
};

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getSurveyTypeInfo(type: SurveyType): typeof surveyTypes[0] | undefined {
  return surveyTypes.find((s) => s.type === type);
}

export function getRecommendedSampleSize(type: SurveyType): number {
  const size = sampleSizes[type.replace(/\s+/g, "") as keyof typeof sampleSizes];
  return size?.recommended ?? 0;
}

export function getWeightAdjustment(
  stratum: string
): { stratum: string; weight: number } | undefined {
  return weightAdjustments.find((w) => w.stratum === stratum);
}

export function getPlatformRecommendation(): { phase: string; tool: string }[] {
  return [
    { phase: "Phase 1 (T-6 to T-3)", tool: "Google Forms + Kobotoolbox" },
    { phase: "Phase 2 (T-3 to election)", tool: "Typeform or Qualtrics" },
  ];
}

export function getCostEstimates(): { type: SurveyType; costRange: string }[] {
  return [
    { type: "Baseline Vote Share", costRange: "Rs. 80,000-1,50,000 per constituency" },
    { type: "Candidate Preference", costRange: "Rs. 40,000-80,000 per constituency" },
    { type: "Issue Salience", costRange: "Rs. 40,000-80,000" },
    { type: "Leader Approval", costRange: "Rs. 15,000-40,000" },
    { type: "Rapid Pulse", costRange: "Rs. 15,000-40,000 (spikes if <24hrs)" },
  ];
}
