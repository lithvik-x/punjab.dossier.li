// @ts-nocheck
// Rumor Management & Fact-Checking System Data
// Derived from: direct-documentation/cat-7-public-sentiment/g32-rumor-management-fact-checking-system.md
// Punjab Congress Digital Intelligence Dashboard 2027

import type {
  RumorManagementReport,
  DetectionRing,
  PlatformMonitoring,
  AlertEscalation,
  AlertLevel,
  RumorSourceClassification,
  RumorVelocityClassification,
  RumorDemographicClassification,
  RumorDamageClassification,
  Tier1Protocol,
  Tier2Protocol,
  Tier3Protocol,
  Tier4Protocol,
  ResponseTimeSummary,
  FactCheckPipeline,
  FormatSelection,
  LanguageStrategy,
  ApprovalAuthority,
  DistributionChannel,
  PreBunkCategory,
  PreBunkingPhase,
  KnownRumorScenario,
  HistoricalIncidentPreBunk,
  FactCheckNetworkStructure,
  RegionalCoverageTarget,
  ExpertPanel,
  ResponseTimeMetric,
  ContainmentRateTarget,
  EngagementMetric,
  PreBunkingMetric,
  NetworkHealthMetric,
  PreElectionActivities,
  CampaignPhaseActivities,
  KeySuccessFactor,
  IntegrationPoint,
} from "@/types/rumor-management-types";

// ==========================================
// DETECTION NETWORK DATA
// ==========================================

export const detectionRingsData: DetectionRing[] = [
  {
    ring: "Ring 1 — Field Intelligence",
    timeHorizon: "Before Viral",
    description: "Village and mohalla level before achieving network scale",
    coverage: "Party workers, booth-level agents, local sympathizers embedded in communities",
  },
  {
    ring: "Ring 2 — Digital Command Center",
    timeHorizon: "Early Viral",
    description: "Aggregates field reports and systematic social media monitoring",
    coverage: "Platform coverage across WhatsApp, Facebook, Twitter/X, Instagram, YouTube, Cable TV",
  },
  {
    ring: "Ring 3 — Opposition Tracking",
    timeHorizon: "Continuous",
    description: "Tracks opposition social media, press releases, public statements",
    coverage: "Rumor triggers - claims likely to generate rebuttals or misrepresent Congress positions",
  },
];

export const platformMonitoringData: PlatformMonitoring[] = [
  { platform: "WhatsApp", monitoringMethod: "Field volunteers + forwarded reports", keyAccountsGroups: "District-level groups, journalist groups, influencer groups" },
  { platform: "Facebook", monitoringMethod: "CrowdTangle + manual monitoring", keyAccountsGroups: "Punjabi news pages, regional journalists, regional groups, candidate pages" },
  { platform: "Twitter/X", monitoringMethod: "Keyword tracking + mention monitoring", keyAccountsGroups: "Verified journalists, party accounts, opposition accounts" },
  { platform: "Instagram", monitoringMethod: "Hashtag monitoring", keyAccountsGroups: "Youth-focused accounts, regional influencers" },
  { platform: "YouTube", monitoringMethod: "Comment monitoring on regional channels", keyAccountsGroups: "Cable news YouTube channels, regional vloggers" },
  { platform: "Cable TV", monitoringMethod: "Field reports from viewers", keyAccountsGroups: "Local cable operators, regional news channels" },
];

export const alertEscalationData: AlertEscalation[] = [
  { detectionSource: "Field Monitor", timeToDistrictCommand: "30 minutes", timeToStateHQ: "60 minutes" },
  { detectionSource: "Social Media Alert", timeToDistrictCommand: "15 minutes", timeToStateHQ: "30 minutes" },
  { detectionSource: "Direct Citizen Report", timeToDistrictCommand: "45 minutes", timeToStateHQ: "90 minutes" },
  { detectionSource: "Media Report", timeToDistrictCommand: "60 minutes", timeToStateHQ: "120 minutes" },
];

export const alertLevelsData: AlertLevel[] = [
  {
    level: 1,
    scope: "AC-Level",
    recipients: "District President, AC observer, Social Media In-Charge",
    action: "Local monitoring and initial assessment",
  },
  {
    level: 2,
    scope: "District-Level",
    recipients: "District President + State Spokesperson + Regional Head",
    action: "Prepare response if rumor is verified",
  },
  {
    level: 3,
    scope: "State-Level",
    recipients: "State President, Campaign Committee, Communications Head",
    action: "Full response operation authorized",
  },
  {
    level: 4,
    scope: "Crisis",
    recipients: "Full Campaign Committee + Legal Team + National Leadership",
    action: "Emergency protocols activated",
  },
];

// ==========================================
// RUMOR CLASSIFICATION DATA
// ==========================================

export const sourceClassificationsData: RumorSourceClassification[] = [
  {
    category: "Internal — Self-Inflicted",
    definition: "Rumor originating from Congress's own actions, statements, or omissions",
    examples: "A candidate makes a controversial statement; party releases a poorly worded poster; a leader's old video is taken out of context",
    primaryResponseOwner: "Internal Communications + Legal",
  },
  {
    category: "External — Competitor Driven",
    definition: "Rumor originating from rival parties (AAP, SAD, BJP, independent)",
    examples: "AAP releases fake poll data; SAD circulates false farmer betrayal narrative",
    primaryResponseOwner: "Opposition Research + Fact-Check",
  },
  {
    category: "External — Third Party",
    definition: "Rumor from media, civil society, foreign sources, or unidentifiable origin",
    examples: "WhatsApp forward about EVM hacking; fake news about polling date; communal incitement from unknown source",
    primaryResponseOwner: "Security Cell + Law Enforcement",
  },
  {
    category: "Internal — Disgruntled Actor",
    definition: "Rumor from within the party ecosystem (ex-member, dissident, faction)",
    examples: "Former MLA spreads rumors about current candidate; internal faction leaks damaging information",
    primaryResponseOwner: "Internal Harmony Cell + Senior Leader Outreach",
  },
];

export const velocityClassificationsData: RumorVelocityClassification[] = [
  {
    category: "Slow Burn",
    definition: "Localized spread within one or two districts; primarily through word of mouth or small WhatsApp groups",
    detectionWindow: "3-7 days to peak",
    priority: "Monitor",
  },
  {
    category: "Moderate Spread",
    definition: "Crosses district boundaries; appears on regional social media; covered by local journalists",
    detectionWindow: "24-72 hours to peak",
    priority: "Prepare Response",
  },
  {
    category: "Fast Spread",
    definition: "Statewide reach within hours; picked up by multiple media outlets; trending on Twitter/Facebook",
    detectionWindow: "2-12 hours to peak",
    priority: "Immediate response",
  },
  {
    category: "Viral Flash",
    definition: "Reaches statewide saturation within 2-3 hours; major media amplification; potential for violence or major disruption",
    detectionWindow: "30 minutes to peak",
    priority: "Emergency response",
  },
];

export const demographicClassificationsData: RumorDemographicClassification[] = [
  {
    category: "Limited",
    definition: "Single village, single community, single AC",
    demographicsAffected: "Specific caste or religious group within one area",
    responseScale: "Local response",
  },
  {
    category: "Community",
    definition: "Multiple villages, one or two districts",
    demographicsAffected: "Jat Sikh community, Dalit community, OBC groups",
    responseScale: "Regional response",
  },
  {
    category: "Demographic",
    definition: "Cross-community within a region",
    demographicsAffected: "Rural voters across communities; urban youth across communities",
    responseScale: "Multi-district response",
  },
  {
    category: "Statewide",
    definition: "All Punjab or nearly all regions",
    demographicsAffected: "All voter demographics",
    responseScale: "Full state response",
  },
];

export const damageClassificationsData: RumorDamageClassification[] = [
  {
    category: "Low",
    impactLevel: "Low",
    responseUrgency: "Monitor only; respond within 48 hours if at all",
    example: "Incorrect quote attributed to a local leader",
  },
  {
    category: "Medium",
    impactLevel: "Medium",
    responseUrgency: "Respond within 24 hours",
    example: "Misattributed position on a regional issue",
  },
  {
    category: "High",
    impactLevel: "High",
    responseUrgency: "Respond within 12 hours; consider press conference",
    example: "False claim about candidate's criminal record",
  },
  {
    category: "Crisis",
    impactLevel: "Crisis",
    responseUrgency: "Immediate response (< 2 hours); emergency protocols",
    example: "False communal violence rumor; fake EVM manipulation claim",
  },
];

// ==========================================
// RESPONSE PROTOCOLS DATA
// ==========================================

export const tier1ProtocolData: Tier1Protocol = {
  trigger: "Low damage, slow spread, limited demographic reach",
  steps: [
    "Document the rumor in the Rumor Log (centralized spreadsheet/database)",
    "Assign a field monitor to track spread trajectory",
    "No public response required",
    "Re-evaluate if the rumor crosses into Medium damage territory",
  ],
  responseTime: "48-72 hours (monitoring cadence)",
  resourceRequirement: "1 field monitor, 1 digital log entry",
  example: "A local WhatsApp forward falsely claims a Congress candidate attended an event. Spread is limited to one assembly segment.",
};

export const tier2ProtocolData: Tier2Protocol = {
  trigger: "Medium damage OR Fast spread (but not both simultaneously)",
  steps: [
    "Verify the rumor within 2 hours of detection",
    "Produce a fact-check response (text post, infographic, or short video)",
    "Post on official Congress social media handles within 6 hours of verification",
    "Distribute to district and AC-level workers for local sharing",
    "If the rumor has a visual element, produce a visual rebuttal",
    "Document in Rumor Log with response and outcome",
  ],
  responseTime: "24 hours from detection to social media post",
  resourceRequirements: ["Social Media Team (1 writer, 1 designer if visual needed)", "District Social Media In-Charge for local distribution", "Fact-check approval from Communications Head"],
  example: "A video is circulated showing a Congress worker in a confrontation. The video is edited to remove context. The unedited version is sourced, captioned, and distributed.",
};

export const tier3ProtocolData: Tier3Protocol = {
  trigger: "High damage with Fast spread OR Viral Flash with High damage",
  steps: [
    "Emergency verification — target completion within 2 hours",
    "Communications Head authorizes full response operation",
    "Produce fact-check content across all formats: text statement, infographic, 60-second video",
    "Senior leader or designated spokesperson issues public statement",
    "Press release issued to all registered journalists",
    "Regional and AC-level workers activated for ground distribution",
    "Consider paid amplification if platform algorithms are suppressing organic reach",
    "If rumor involves a specific candidate, candidate issues personal statement",
    "Legal team evaluates need for legal notice or police complaint",
    "Post-response monitoring: track whether fact-check is gaining traction",
  ],
  responseTime: "12 hours from detection to leader statement",
  resourceRequirements: [
    "Full Communications Team",
    "Spokesperson availability",
    "Video production team (1 day turnaround)",
    "Legal review (parallel track)",
    "Paid amplification budget allocation",
  ],
  example: "AAP releases a poster falsely claiming Congress has allied with the BJP for the 2027 elections. The poster goes viral on WhatsApp and Facebook within 4 hours.",
};

export const tier4ProtocolData: Tier4Protocol = {
  trigger: "Crisis-level damage (potential for violence, major voter suppression, or existential reputation damage)",
  steps: [
    "Immediate: Campaign Committee Chair and State President notified simultaneously (< 30 minutes)",
    "Within 1 hour: Emergency verification complete; legal counsel engaged",
    "Within 2 hours: Emergency press conference; all regional spokespersons briefed",
    "Within 4 hours: Leader statement across all platforms (TV, social, WhatsApp)",
    "Within 6 hours: Legal notices issued; law enforcement notified if rumor constitutes incitement",
    "Within 12 hours: Full-page newspaper advertisements if warranted; national media briefing",
    "Continuous: Social media monitoring for secondary rumor mutations",
    "Aftermath: After-incident report documenting rumor, spread, response, and outcome",
  ],
  responseTime: "2 hours from detection to leader statement",
  resourceRequirements: [
    "Full Campaign Committee activation",
    "National media contacts",
    "Legal team on standby",
    "Potential law enforcement coordination",
    "Crisis communications consultant (if available)",
  ],
  example: "A false message circulates claiming polling has been advanced by two weeks. Or a communal violence rumor targets a specific village. Or a deepfake video of the State President is released 48 hours before polling.",
};

export const responseTimeSummaryData: ResponseTimeSummary[] = [
  { tier: 1, detectionToInitialResponse: "48-72 hours", detectionToPublicStatement: "N/A", detectionToLeaderCrisisResponse: "N/A" },
  { tier: 2, detectionToInitialResponse: "6-12 hours", detectionToPublicStatement: "24 hours", detectionToLeaderCrisisResponse: "N/A" },
  { tier: 3, detectionToInitialResponse: "2 hours", detectionToPublicStatement: "12 hours", detectionToLeaderCrisisResponse: "12 hours" },
  { tier: 4, detectionToInitialResponse: "30 minutes", detectionToPublicStatement: "2 hours", detectionToLeaderCrisisResponse: "2 hours" },
];

// ==========================================
// FACT-CHECK PRODUCTION DATA
// ==========================================

export const factCheckPipelineData: FactCheckPipeline[] = [
  {
    phase: "Minute 0-30: Verification",
    timeRange: "0-30 minutes",
    activities: [
      "Claim isolation: What exactly is being claimed?",
      "Source tracing: Where did the rumor originate?",
      "Evidence gathering: What documents, videos, data反驳 the claim?",
      "Expert consultation: Subject matter expert confirms accuracy",
    ],
  },
  {
    phase: "Minute 30-90: Content Production",
    timeRange: "30-90 minutes",
    activities: [
      "Text draft: 200-400 words, simple Punjabi/Hindi/English",
      "Visual brief: Infographic layout, key data points",
      "Video script: 60-second format if video required",
    ],
  },
  {
    phase: "Minute 90-150: Approval",
    timeRange: "90-150 minutes",
    activities: [
      "Communications Head reviews",
      "Legal review (parallel for Tier 3+)",
      "Candidate/Leader clearance if personal statement required",
    ],
  },
  {
    phase: "Minute 150+: Distribution",
    timeRange: "150+ minutes",
    activities: ["Distribution across approved channels"],
  },
];

export const formatSelectionData: FormatSelection[] = [
  {
    format: "Text Post",
    bestUsedWhen: "Nuanced, detailed rebuttal; multiple claims to address",
    platform: "Twitter, Facebook, WhatsApp (forwardable)",
    languageMix: "English + Punjabi caption",
  },
  {
    format: "Infographic",
    bestUsedWhen: "Single claim; data-driven rebuttal; visual impact needed",
    platform: "Facebook, Instagram, WhatsApp",
    languageMix: "Punjabi + Hindi",
  },
  {
    format: "60-Second Video",
    bestUsedWhen: "Emotional context needed; video-based rumors; leader credibility",
    platform: "YouTube, Facebook, Instagram Reels, WhatsApp",
    languageMix: "Punjabi with English subtitles",
  },
  {
    format: "Audio Message",
    bestUsedWhen: "WhatsApp-native; older demographics; rural reach",
    platform: "WhatsApp groups",
    languageMix: "Punjabi",
  },
  {
    format: "Press Release",
    bestUsedWhen: "Media-oriented; formal record; journalist attribution",
    platform: "Email to journalists, website",
    languageMix: "English + Punjabi",
  },
];

export const languageStrategyData: LanguageStrategy[] = [
  { useCase: "WhatsApp groups (rural)", primaryLanguage: "Punjabi", secondaryLanguage: "Hindi if needed" },
  { useCase: "WhatsApp groups (urban)", primaryLanguage: "Hindi + Punjabi mix", secondaryLanguage: "English" },
  { useCase: "Facebook", primaryLanguage: "Punjabi + English", secondaryLanguage: "Hindi" },
  { useCase: "Twitter/X", primaryLanguage: "English + Punjabi", secondaryLanguage: "Hindi hashtags" },
  { useCase: "Instagram", primaryLanguage: "Punjabi + English", secondaryLanguage: "Hindi" },
  { useCase: "Cable TV", primaryLanguage: "Punjabi + Hindi", secondaryLanguage: "English" },
  { useCase: "Press", primaryLanguage: "English", secondaryLanguage: "Punjabi" },
];

export const approvalAuthorityData: ApprovalAuthority[] = [
  { tier: 1, contentType: "N/A", approvalAuthority: "No response", backup: "N/A" },
  { tier: 2, contentType: "Social media post", approvalAuthority: "District Communications In-Charge", backup: "Regional Head" },
  { tier: 2, contentType: "Infographic", approvalAuthority: "District Communications In-Charge + State Team", backup: "Regional Head" },
  { tier: 3, contentType: "Leader statement", approvalAuthority: "Communications Head + State President", backup: "Campaign Committee Chair" },
  { tier: 3, contentType: "Press release", approvalAuthority: "Communications Head", backup: "State Spokesperson" },
  { tier: 3, contentType: "Video", approvalAuthority: "Communications Head + Legal", backup: "Campaign Committee Chair" },
  { tier: 4, contentType: "All formats", approvalAuthority: "State President + Legal + Campaign Committee Chair", backup: "National Leadership" },
];

export const distributionChannelsData: DistributionChannel[] = [
  { channel: "Official Congress social media accounts", priority: "PRIMARY", reach: "Controlled", credibility: "High" },
  { channel: "WhatsApp official party channel", priority: "PRIMARY", reach: "Variable", credibility: "High (trusted)" },
  { channel: "District and AC worker networks", priority: "PRIMARY", reach: "Variable", credibility: "High (trusted)" },
  { channel: "Sympathetic journalist list", priority: "PRIMARY", reach: "Very High", credibility: "Medium-High" },
  { channel: "WhatsApp group seeding", priority: "SECONDARY", reach: "Variable", credibility: "High" },
  { channel: "Cable TV", priority: "SECONDARY", reach: "Regional", credibility: "Medium" },
  { channel: "Radio: Community radio", priority: "SECONDARY", reach: "Rural", credibility: "High" },
  { channel: "Religious channels", priority: "SECONDARY", reach: "Dera followers", credibility: "Varies" },
];

// ==========================================
// PRE-BUNKING DATA
// ==========================================

export const preBunkCategoriesData: PreBunkCategory[] = [
  {
    category: 1,
    name: "Historical Record Pre-Bunks",
    description: "Builds factual history to counter revisionist narratives about Congress's track record",
    examples: [
      "Congress's role in Punjab's Green Revolution",
      "Congress governments' farmer welfare programs (1992-2007)",
      "Congress's minority empowerment record",
      "Congress's infrastructure development record",
      "Anti-Sikh riots 1984 — Congress's position, justice efforts, compensation provided",
    ],
  },
  {
    category: 2,
    name: "Policy Position Pre-Bunks",
    description: "Clarifies Congress positions before they are misrepresented",
    examples: [
      "Congress's stance on SYL canal (clear, unambiguous)",
      "Congress's agricultural debt relief plan for 2027",
      "Congress's drug de-addiction program structure and funding",
      "Congress's employment generation plan for youth",
      "Congress's position on MSP — written guarantee vs. verbal assurance",
    ],
  },
  {
    category: 3,
    name: "Comparative Pre-Bunks",
    description: "Draws direct contrasts with competitors on key issues",
    examples: [
      "AAP's actual delivery on 2022 promises vs. Congress's delivery record",
      "SAD's alliance history and farmer betrayal narrative",
      "BJP's statehood record and Congress's statehood advocacy",
      "Who has consistently fought for Punjab's water rights",
    ],
  },
  {
    category: 4,
    name: "Vulnerability Pre-Bunks",
    description: "Acknowledges weaknesses or past failures and contextualizes them",
    examples: [
      "Why Congress lost 2022 and what was learned",
      "Internal reform process for candidate selection",
      "Leadership renewal and new faces vs. dynasty politics narrative",
      "Previous government's failures — owning the critique while presenting change",
    ],
  },
];

export const preBunkingPhasesData: PreBunkingPhase[] = [
  { phase: 1, timing: "Now to 3 months before election", focus: "Foundation building: historical record, policy positions" },
  { phase: 2, timing: "3 months to 6 weeks before", focus: "Vulnerability pre-bunks: address internal critiques" },
  { phase: 3, timing: "6 weeks to 2 weeks before", focus: "Comparative pre-bunks: sharpen contrast with AAP" },
  { phase: 4, timing: "2 weeks to E-Day", focus: "Rapid response pre-bunks: address new rumors as they emerge" },
];

export const knownRumorScenariosData: KnownRumorScenario[] = [
  {
    rumorTitle: '"Congress is Anti-Sikh"',
    background: "Most dangerous narrative for Congress in Punjab — directly threatens Sikh vote bank (~60% of electorate)",
    originPoints: ["BJP-aligned media and social media ecosystem", "AAP's identity-politics messaging", "SAD's historical claim to being sole Sikh representative"],
    preBunkStrategy: "Historical record: Congress's role in Anandpur Sahib Resolution, Rajiv-Longowal Accord, 1984 position; Recent record: Congress opposition to CAA/NRC, support for farmers' protests",
    format: "Long-form video (3-5 minutes) for YouTube and Facebook; infographic for WhatsApp; text thread for Twitter",
  },
  {
    rumorTitle: '"Congress Sold Out Farmers"',
    background: "Despite Congress's actual record, AAP has positioned itself as the farmer's party through 2020-2021 protests",
    originPoints: ["AAP's sustained 4-year narrative building", "SAD's historical farmer base", "BJP's central government record transferred onto Congress"],
    preBunkStrategy: "MSP in writing in 2027 manifesto; Congressional opposition to farm laws (parliamentary record); First state to nullify farm laws via state legislation",
    format: "Data-driven infographic; 90-second video with farmer testimonial; WhatsApp audio in Punjabi",
  },
  {
    rumorTitle: '"All Parties Are Same / Nothing Will Change"',
    background: "Electoral apathy and anti-incumbency sentiment threaten turnout and enthusiasm rather than specific vote choice",
    originPoints: ["Voter fatigue", "AAP's positioning as the 'different' option", "Legitimate frustration with political class"],
    preBunkStrategy: "Concrete deliverables from previous Congress governments; Specific 2027 commitments with implementation timelines; New leadership faces",
    format: "Achievement compilation video; direct-address video from star candidate; voter testimonial series",
  },
  {
    rumorTitle: '"Congress Can\'t Win / Don\'t Waste Your Vote"',
    background: '"Strategic voting" narrative pushed by AAP (to consolidate anti-Congress vote) and opponents (to suppress Congress turnout)',
    originPoints: ["AAP's 'strongest candidate' messaging", "BJP's polarization strategy", "Internal Congress pessimism"],
    preBunkStrategy: "Internal polling data (not public); Voter contact data showing enthusiasm; Historical examples of Congress upsets",
    format: "Energetic community meeting footage; candidate's personal guarantee; supporter mobilization testimonials",
  },
  {
    rumorTitle: '"Congress Leaders Are Corrupt"',
    background: "AAP's sustained anti-corruption narrative has created perception that all politicians are equally corrupt",
    originPoints: ["AAP's sustained positioning", "Legitimate voter anger at political corruption", "Specific historical instances"],
    preBunkStrategy: "Specific governance reforms: transparency measures, anti-corruption commissions established; Comparative AAP Delhi record",
    format: "Legal expert explainer video; comparative accountability scorecard; direct counter-narrative from clean-governance champion",
  },
];

export const historicalIncidentsData: HistoricalIncidentPreBunk[] = [
  {
    incident: "1984 Anti-Sikh Riots",
    triggerScenario: "During election campaign; comparative with Congress's current position",
    preBunkStrategy: "Pre-prepared detailed fact-sheet; survivor community outreach; legal record documentation",
  },
  {
    incident: "Drug Trade During Congress Rule",
    triggerScenario: "During attacks on candidate's family or Congress's state governance",
    preBunkStrategy: "Data on drug seizures across governments; AAP's actual delivery on drug enforcement; Congress's 2027 drug plan",
  },
  {
    incident: "Sand Mining Scams",
    triggerScenario: "During anti-incumbency attacks",
    preBunkStrategy: "Comparative enforcement data; specific actions taken; systemic reforms proposed",
  },
  {
    incident: "Ticket Distribution (Perceived Dynasty)",
    triggerScenario: "During candidate announcement phase",
    preBunkStrategy: "Reform process documentation; new face emphasis; merit-based selection criteria",
  },
];

// ==========================================
// FACT-CHECKER NETWORK DATA
// ==========================================

export const networkStructureData: FactCheckNetworkStructure[] = [
  { level: "STATE FACT-CHECK COORDINATION CELL", roles: ["Regional Fact-Check Coordinators (3: Malwa, Majha, Doaba)", "District Fact-Check Leads (12-15 districts)", "AC-Level Verifiers (117 ACs)", "Field Verifiers (variable per AC)"] },
  { level: "Subject Matter Expert Panels", roles: ["Legal & Constitutional", "Agricultural Policy", "Religious & Community Affairs", "Economic & Employment", "History & Historical Events"] },
  { level: "Legal Review Cell", roles: ["2-3 lawyers (criminal law, constitutional law, election law)", "1 legal coordinator"] },
];

export const regionalCoverageTargetsData: RegionalCoverageTarget[] = [
  { region: "Malwa", targetACCoverage: 69, minimumVerifiersPerAC: 3 },
  { region: "Majha", targetACCoverage: 25, minimumVerifiersPerAC: 2 },
  { region: "Doaba", targetACCoverage: 23, minimumVerifiersPerAC: 2 },
];

export const expertPanelsData: ExpertPanel[] = [
  { panel: "Legal & Constitutional", expertiseArea: "1984, constitutional matters, legal processes", responseTime: "2 hours", panelSize: 5 },
  { panel: "Agricultural Policy", expertiseArea: "Farm laws, MSP, agricultural distress", responseTime: "4 hours", panelSize: 5 },
  { panel: "Religious & Community", expertiseArea: "Sikh history, dera affairs, communal issues", responseTime: "4 hours", panelSize: 5 },
  { panel: "Economic & Employment", expertiseArea: "Job data, economic policy, migration", responseTime: "4 hours", panelSize: 4 },
  { panel: "History & Events", expertiseArea: "Historical incidents, political history", responseTime: "6 hours", panelSize: 4 },
];

// ==========================================
// SUCCESS METRICS DATA
// ==========================================

export const responseTimeMetricsData: ResponseTimeMetric[] = [
  { metric: "Detection to Alert", definition: "Time from rumor first appearing to alert reaching District Command", target: "< 45 minutes", criticalThreshold: "90 minutes" },
  { metric: "Alert to Verification", definition: "Time from alert to rumor verified (confirmed as false or partially false)", target: "< 2 hours", criticalThreshold: "4 hours" },
  { metric: "Verification to First Response", definition: "Time from verification to first social media post", target: "< 4 hours", criticalThreshold: "8 hours" },
  { metric: "First Response to Leader Statement", definition: "Time from first response to senior leader public statement", target: "< 12 hours", criticalThreshold: "24 hours" },
  { metric: "Full Containment", definition: "Time from first detection to rumor spread trajectory flattening", target: "< 24 hours", criticalThreshold: "72 hours" },
];

export const containmentRateTargetsData: ContainmentRateTarget[] = [
  { rumorTier: 1, targetRate: "N/A (monitor only)", minimumAcceptable: "N/A" },
  { rumorTier: 2, targetRate: "> 85%", minimumAcceptable: "70%" },
  { rumorTier: 3, targetRate: "> 75%", minimumAcceptable: "60%" },
  { rumorTier: 4, targetRate: "> 60%", minimumAcceptable: "50%" },
];

export const engagementMetricsData: EngagementMetric[] = [
  { metric: "Fact-Check Impressions", definition: "Number of unique accounts reached by fact-check content", target: "3x the rumor impression count" },
  { metric: "Fact-Check Engagement Rate", definition: "(Engagements / Impressions) for fact-check posts", target: "> 3%" },
  { metric: "Share Rate", definition: "(Shares / Impressions) — indicates how viral the fact-check is relative to the rumor", target: "> 1.5%" },
  { metric: "Correction Acceptance", definition: "Survey: % of respondents who saw rumor and then saw fact-check and updated their belief", target: "> 40%" },
  { metric: "WhatsApp Forward Rate", definition: "How many times the fact-check is forwarded within WhatsApp groups", target: "Top 10% of all political content" },
];

export const preBunkingMetricsData: PreBunkingMetric[] = [
  { metric: "Pre-Bunk Content Reach", definition: "Number of unique accounts reached by pre-bunking content", target: "> 500,000 cumulative" },
  { metric: "Pre-Bunk Engagement", definition: "Pre-bunking content engagement rate vs. baseline political content", target: "At parity or above" },
  { metric: "Vulnerability Reduction", definition: "Survey: % reduction in belief of false narratives among those exposed to pre-bunking vs. control", target: "> 25% reduction" },
  { metric: "Rumor Velocity Reduction", definition: "Among pre-bunked rumor categories, average time-to-peak spread", target: "50% longer than non-pre-bunked" },
];

export const networkHealthMetricsData: NetworkHealthMetric[] = [
  { metric: "Field Monitor Active Rate", definition: "% of assigned field monitors reporting within 24-hour window", target: "> 80%" },
  { metric: "Verification Accuracy", definition: "% of rumor verifications that prove accurate when checked by supervisors", target: "> 95%" },
  { metric: "False Positive Rate", definition: "% of reported 'rumors' that are actually true or substantially accurate", target: "< 10%" },
  { metric: "Volunteer Retention", definition: "% of volunteer network retained month-over-month", target: "> 90%" },
];

// ==========================================
// OPERATIONAL CALENDAR DATA
// ==========================================

export const preElectionActivitiesData: PreElectionActivities[] = [
  {
    phase: "Foundation Building",
    activities: [
      "Recruit and train regional volunteer network (target: 320 verifiers)",
      "Establish Digital Command Center with 3-shift coverage",
      "Build journalist and influencer contact database",
      "Pre-produce template fact-check formats for common rumor categories",
      "Launch Phase 1 pre-bunking content campaign",
      "Establish legal review cell and on-call protocols",
    ],
  },
  {
    phase: "Testing",
    activities: [
      "Conduct 2 tabletop exercises simulating Tier 3 and Tier 4 rumor crises",
      "Test communication chains from detection to response",
      "Verify journalist contact database accuracy",
    ],
  },
];

export const campaignPhaseActivitiesData: CampaignPhaseActivities[] = [
  {
    phase: "Full Operations",
    activities: [
      "24-hour rumor monitoring with escalating staffing",
      "Daily morning brief on emerging narratives",
      "Real-time fact-check production for all Tier 2+ rumors",
      "Daily social media publishing of pre-bunking content",
      "Opposition tracking with dedicated monitors",
      "Weekly performance review against success metrics",
    ],
    peakPeriodActivities: [
      "All hands on deck — Campaign Committee in active monitoring mode",
      "Legal cell on standby for emergency responses",
      "Leader statement templates pre-approved for common crisis scenarios",
      "Pre-bunking content for most likely E-Day and post-voting rumors",
    ],
  },
];

// ==========================================
// KEY SUCCESS FACTORS DATA
// ==========================================

export const keySuccessFactorsData: KeySuccessFactor[] = [
  { factor: "Speed is structural", description: "The faster the response, the lower the cost. Build systems that enable 2-hour turnaround on Tier 3 responses." },
  { factor: "Field intelligence is irreplaceable", description: "No social media monitoring tool captures what a well-placed field volunteer in a village WhatsApp group captures." },
  { factor: "Pre-bunking is cheaper than response", description: "Invest in pre-bunking content production now, when campaign resources are available, to reduce crisis costs later." },
  { factor: "Classification discipline", description: "Every rumor must be classified consistently. Over-response wastes resources; under-response allows damage to spread." },
  { factor: "Documentation enables learning", description: "Every rumor incident must be logged with timeline, response, and outcome. This data improves the system continuously." },
  { factor: "Legal preparedness", description: "Have legal notices pre-drafted for common rumor categories. Legal threats can slow rumor spread even when the legal process is slow." },
  { factor: "Leader availability", description: "Tier 3 and Tier 4 responses require leader statements. Leaders must be reachable and briefed within 30 minutes of escalation." },
];

// ==========================================
// INTEGRATION POINTS DATA
// ==========================================

export const integrationPointsData: IntegrationPoint[] = [
  { section: "Intelligence Analytics (Category 9)", integrationDescription: "Rumor trends inform strategic positioning; intelligence on voter sentiment guides pre-bunking priorities" },
  { section: "Media Sentiment (Category 8)", integrationDescription: "Media monitoring feeds rumor detection; media relationships facilitate rapid response" },
  { section: "Public Sentiment (Category 7)", integrationDescription: "Rumor spread data is a real-time sentiment indicator; sentiment shifts trigger rumor investigation" },
  { section: "Competition Analysis (Category 6)", integrationDescription: "Opposition research feeds pre-bunking content; competitor rumor triggers are early warning signals" },
  { section: "Perception Strategy (Category 10)", integrationDescription: "The overall perception strategy sets the narrative priorities that guide which rumors get Tier 3+ response" },
];

// ==========================================
// FULL REPORT
// ==========================================

export const rumorManagementReport: RumorManagementReport = {
  reportDate: "20 May 2026",
  documentationType: "Direct Documentation",
  agent: "Track B",
  taskId: "G32",
  frameworkSections: "7.2 (Rumor/Hearsay Management)",
  detectionRings: detectionRingsData,
  alertEscalation: alertEscalationData,
  alertLevels: alertLevelsData,
  sourceClassifications: sourceClassificationsData,
  velocityClassifications: velocityClassificationsData,
  demographicClassifications: demographicClassificationsData,
  damageClassifications: damageClassificationsData,
  tier1Protocol: tier1ProtocolData,
  tier2Protocol: tier2ProtocolData,
  tier3Protocol: tier3ProtocolData,
  tier4Protocol: tier4ProtocolData,
  responseTimeSummary: responseTimeSummaryData,
  preBunkCategories: preBunkCategoriesData,
  preBunkingPhases: preBunkingPhasesData,
  knownRumorScenarios: knownRumorScenariosData,
  historicalIncidents: historicalIncidentsData,
  networkStructure: networkStructureData,
  regionalCoverageTargets: regionalCoverageTargetsData,
  expertPanels: expertPanelsData,
  responseTimeMetrics: responseTimeMetricsData,
  containmentRateTargets: containmentRateTargetsData,
  engagementMetrics: engagementMetricsData,
  preBunkingMetrics: preBunkingMetricsData,
  networkHealthMetrics: networkHealthMetricsData,
  preElectionActivities: preElectionActivitiesData,
  campaignPhaseActivities: campaignPhaseActivitiesData,
  keySuccessFactors: keySuccessFactorsData,
  integrationPoints: integrationPointsData,
};
