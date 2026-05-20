// Opposition Research & Attack Strategy Data for Punjab Congress 2027
// Derived from: direct-documentation/cat-10-perception-strategy/b40-opposition-research-attack-strategy.md

import type {
  PartyPerceptionMetrics,
  LeaderPerceptionMetrics,
  IssueOwnershipAnalysis,
  PositioningQuadrant,
  VoterSegmentClassification,
  MediaToneAnalysis,
  DeraLandscape,
  CampaignObjectives,
  RegionalVoteShift,
  VictoryPathway,
  ResourceAllocation,
  TimelinePhase,
  MilestoneCheckpoint,
  ContingencyScenario,
  StakeholderAlignment,
  MasterNarrative,
  SubNarrative,
  EmotionalArchitecture,
  MessageHierarchy,
  NarrativeTesting,
} from '@/types/perception-audit-types';

// ==========================================
// RESEARCH METHODOLOGY
// ==========================================

export const researchProcessPhases = [
  {
    phase: 1,
    name: "Target Identification",
    description: "Identify priority targets based on electoral significance",
    priorityTargets: [
      "AAP MLAs in marginal seats where Congress is competitive",
      "SAD leaders in traditional Congress strongholds in Malwa",
      "Specific Cabinet ministers whose portfolios intersect with voter pain points",
      "Candidates with known vulnerabilities from prior elections",
    ],
  },
  {
    phase: 2,
    name: "Data Collection",
    description: "Gather information across multiple source categories",
    sources: [
      "Public records (asset declarations, criminal antecedents, educational qualifications)",
      "Media monitoring (statements, interviews, press conferences, social media)",
      "Field intelligence (local sources, party workers, community leaders, journalists)",
      "Commercial database searches (property holdings, business interests, corporate registrations)",
    ],
    requirement: "Each data point timestamped and source-documented",
  },
  {
    phase: 3,
    name: "Verification and Validation",
    description: "Multi-tier verification before intelligence classification",
    verificationTiers: [
      "Primary verification - authenticity through direct source or official record",
      "Secondary verification - cross-reference multiple independent sources",
      "Contextual verification - accuracy within appropriate temporal/situational context",
    ],
    confidenceScale: [
      { level: "Verified", description: "Multiple independent confirmations" },
      { level: "Confirmed", description: "Single authoritative source" },
      { level: "Unverified", description: "Credible but unconfirmed" },
      { level: "Disputed", description: "Conflicting accounts exist" },
    ],
  },
  {
    phase: 4,
    name: "Vulnerability Assessment",
    description: "Evaluate confirmed intelligence against standardized vulnerability taxonomy",
    scoringDimensions: [
      "Credibility - how believable the allegation to Punjab voters",
      "Relevance - does it connect to recognized voter concerns",
      "Exclusivity - can Congress plausibly exploit without equal counterattack",
    ],
  },
  {
    phase: 5,
    name: "Intelligence Packaging",
    description: "Package assessed vulnerabilities for different end-users",
    packages: [
      { type: "Candidate briefs", audience: "Campaign staff", format: "Summarized vulnerability data" },
      { type: "Opposing candidate profiles", audience: "Senior strategists", format: "Detailed information" },
      { type: "Media packages", audience: "Earned media deployment", format: "Press-release format" },
    ],
    requirement: "Legal review before deployment",
  },
];

// ==========================================
// DATA COLLECTION SOURCES
// ==========================================

export const sourceCategories = [
  {
    category: "Official Public Records",
    sources: [
      "ECI nomination papers (Affidavits with criminal antecedents, financial assets, qualifications)",
      "Punjab Government service records for elected officials",
      "Companies Registrar filings for business connections",
      "Land revenue records for agricultural holdings",
    ],
  },
  {
    category: "Media and Public Statements",
    sources: [
      "Press releases and social media posts",
      "Interview transcripts",
      "Public speeches",
      "Archived digital media content",
    ],
  },
  {
    category: "Field Intelligence Networks",
    sources: [
      "Local party workers",
      "Community leaders",
      "Regional journalists with constituency knowledge",
    ],
    verificationNote: "Requires particular verification rigor due to potential for misrepresentation",
  },
  {
    category: "Open Source Intelligence",
    sources: [
      "Property registration databases",
      "Court case tracking systems",
      "Corporate registry searches",
      "Social media analysis (Facebook, Instagram, WhatsApp)",
    ],
  },
];

// ==========================================
// VERIFICATION PROTOCOLS
// ==========================================

export const verificationProtocols = {
  sourceAuthentication: [
    "Official records verified against original documents rather than copies",
    "Witness testimony requires corroboration from at least one independent source",
    "Document analysis confirms authenticity markers (letterhead, signatures, dates, seals)",
    "Digital media verified through metadata examination and cross-platform corroboration",
  ],
  contentVerification: [
    "Apparent inconsistencies between candidate affidavits and subsequent developments investigated",
    "Cross-temporal consistency checks compare current disclosures against prior filings",
  ],
  legalReview: [
    "Assesses defamation risk",
    "Verifies statements can be substantially proven",
    "Identifies election code implications",
  ],
  contextualAccuracy: [
    "Deployed intelligence must accurately represent situation even when highlighting negatives",
    "Partial truths without context damage credibility when manipulation is perceived",
  ],
};

// ==========================================
// ETHICAL BOUNDARIES
// ==========================================

export const prohibitedMethods = [
  "Illegal access to private communications (phones, emails, messaging apps)",
  "Bribery or inducement of government officials for confidential records",
  "Physical surveillance or stalking of research targets",
  "Fabrication of documents or evidence",
  "Hiring individuals specifically to make false statements about targets",
];

export const privacyBoundaries = [
  "Private family matters unrelated to political fitness",
  "Personal health information unless voluntarily disclosed publicly",
  "Religious practices or beliefs absent political significance",
  "Sexual orientation or relationships not bearing on public responsibilities",
];

export const accuracyResponsibilities = [
  "Verified intelligence may be deployed with confidence",
  "Unverified intelligence may inform internal strategy but not external communication",
  "If deployed intelligence is subsequently found inaccurate, immediate cessation and assessment of correction",
  "Campaign does not knowingly disseminate false information even if beneficial",
];

// ==========================================
// VULNERABILITY CATEGORIES
// ==========================================

export const candidateVulnerabilities = [
  {
    category: "Criminal Vulnerabilities",
    considerations: [
      "Disclosed cases examined for procedural status",
      "Conviction vs. chargesheeted accused status distinguished",
      "Relevance to governance capacity assessed",
    ],
    messagingApproach: "Emphasize 'charges pending' rather than 'criminal' in public communication",
  },
  {
    category: "Financial Vulnerabilities",
    indicators: [
      "Asset discrepancies between disclosed assets and known lifestyle indicators",
      "Unexplained sudden asset growth trajectories",
      "Business interests with government regulatory overlap (sand mining, liquor licensing, pharmaceuticals)",
      "Educational qualification discrepancies or unrecognized institutions",
    ],
  },
  {
    category: "Professional and Governance Vulnerabilities",
    scope: [
      "Failed campaign promises from prior terms",
      "Documented policy failures or implementation gaps",
      "Professional history revealing misconduct or ethical violations",
    ],
    note: "Incumbents will defend vigorously; requires particular attention to accuracy",
  },
  {
    category: "Personal Conduct Vulnerabilities",
    scope: [
      "Documented instances of public misconduct",
      "Domestic violence complaints",
      "Substance abuse evidence",
      "Antisocial behavior with public record",
    ],
    boundary: "Verifiable, publicly documented conduct vs. rumor or speculation",
  },
];

// ==========================================
// PARTY VULNERABILITIES
// ==========================================

export const aapGovernmentVulnerabilities = [
  {
    promise: "Drug abuse - 'Punjab will become drug-free'",
    deliveryGap: "Infrastructure improved but drug availability not demonstrably decreased",
    vulnerability: "AAP promised to ELIMINATE not manage - partial failure feels like total failure",
  },
  {
    promise: "Jobs - 10 lakh jobs + 20 lakh self-employment",
    deliveryGap: "~76% shortfall in formal job creation",
    vulnerability: "Unemployment remains Punjab's #2 issue; youth migration stories are vivid and collective",
  },
  {
    promise: "Healthcare system improvements",
    deliveryGap: "Severe staffing crisis in government hospitals 2024-2025",
    vulnerability: "Patients increasingly turned to private sector; out-of-pocket costs increased",
  },
];

export const aapOrganizationalVulnerabilities = [
  "Reliance on volunteer labor showing governance strain",
  "Elected representative dissent from party leadership",
  "AAP's expansion from Delhi origins raising local organizational depth questions",
  "MLA attendance and participation patterns in party functions",
];

export const sadBjpAllianceVulnerabilities = [
  "2017-2022 governance failures (drug crisis worsening, agrarian distress)",
  "Alliance management tensions over seat distribution for 2027",
  "SAD's relationship with farmer organizations post agricultural laws controversy",
  "BJP's minority representation strategy tension with SAD's Sikh voter base",
];

// ==========================================
// LEADER VULNERABILITIES
// ==========================================

export const leaderVulnerabilityTypes = [
  {
    type: "Statement Vulnerabilities",
    description: "Public statements contradicting each other, reversing positions, or creating voter alienation",
    documentation: "Comprehensive archives of leader statement history on key issues",
  },
  {
    type: "Association Vulnerabilities",
    description: "Relationships with controversial figures, criminal elements, or organizations with tainted reputations",
    handlingNote: "Requires connection to policy significance - can appear smear-oriented if not",
  },
  {
    type: "Image and Lifestyle Vulnerabilities",
    description: "Leaders emphasizing simplicity with lifestyle inconsistencies, organizational funding irregularities",
    verificationNote: "Requires high investment in verification - leaders will contest vigorously",
  },
];

// ==========================================
// ATTACK ADVERTISING FRAMEWORK
// ==========================================

export const negativeCampaigningTypology = [
  {
    type: "Comparative Advertising",
    description: "Direct contrast between sponsoring candidate and opponent on specific attributes, records, positions",
    variants: ["Explicit (naming opponent)", "Implicit ('my record' vs 'the incumbent's record')"],
    requirements: "Verifiable claims about both subject and target",
    effectiveness: "Natural voter tendency to process comparative information efficiently",
    risk: "False comparisons expose campaign to legal liability and credibility damage",
  },
  {
    type: "Associative Messaging",
    description: "Link opponent to negative concepts, groups, or events without explicit comparison or claim",
    mechanisms: [
      "Visual imagery associating opponent with corruption",
      "Event photographs linking candidates to controversial figures",
      "Framing governance failures as symptoms of deeper character flaws",
    ],
    advantage: "Avoids factual claims that can be debunked while influencing perceptions",
    risk: "Can appear guilt-by-association without substance if overused",
  },
  {
    type: "Contextual Framing",
    description: "Embed opponent information within broader narrative contexts rendering it more damaging",
    approach: "Transform isolated vulnerability data into coherent narrative memorable to voters",
    requirements: "Sufficient vulnerability volume to construct credible narrative",
    effectiveness: "Particularly effective for party-level vulnerabilities with accumulated instances",
  },
];

// ==========================================
// MESSAGE DEVELOPMENT
// ==========================================

export const messageDevelopmentProcess = [
  "Initial message development from vulnerability assessment results",
  "Creative teams develop multiple message variations testing different frames and emotional appeals",
  "Internal review against legal standards, counterattack scenarios, and campaign theme consistency",
  "Refined messages proceed to limited testing before full deployment",
];

export const messageTestingApproaches = [
  { approach: "Focus groups", description: "Qualitative feedback on message resonance and counterarguments" },
  { approach: "Randomized survey experiments", description: "Quantitative comparison of persuasive effects against control groups" },
  { approach: "A/B testing in digital advertising", description: "Real-time performance data for message refinement" },
];

export const emotionalActivation = {
  rationalChannel: "Provides information voters use in candidate evaluation",
  emotionalChannel: "Associates opponent with feelings voters wish to avoid (fear, disgust, anger, disappointment)",
  recommendedApproach: "Combine both - factual basis supporting emotional reaction",
  punjabContext: "Appeals to dignity (pride in state's potential vs. perceived degradation) and security (fear of violence/instability) resonate without appearing purely negative",
};

// ==========================================
// TIMING OF ATTACKS
// ==========================================

export const attackTimingPhases = [
  {
    phase: "Pre-Announcement Phase",
    timeline: "T-12 to T-6 months",
    focus: "Opposition research development and limited probe testing",
    approach: "Test responses and refine messages rather than achieve full persuasive effect",
    methods: [
      "Background leaks to journalists (deniable and non-attributed to campaign)",
      "Social media content testing engagement",
      "Limited paid advertising testing response",
    ],
    strategicNote: "Findings inform more refined attack strategies for later phases",
  },
  {
    phase: "Campaign Season Phase",
    timeline: "T-6 to T-1 month",
    focus: "Full offensive advertising with highest voter attention",
    intensityEscalation: "Volume and intensity escalate as election approaches",
    peakIntensity: "Final two weeks",
    themeFocus: "Durable themes likely to remain salient through voting day",
  },
  {
    phase: "Last Week Phase",
    timeline: "T-7 days to T-1 day",
    focus: "Themes where late-breaking information could influence undecided voters",
    criteria: "Claims substantiable under time pressure",
    appropriateFor: [
      "Truth-squad responses to opponent attacks that gained traction",
      "Late-breaking verifiable information",
    ],
    notAppropriate: "Negative advertising requiring extended narrative development",
  },
  {
    phase: "Election Day",
    focus: "Truth-squad operations continue; direct advertising legally restricted",
    approach: "Counter last-minute opponent surprises only; offensive advertising concludes",
  },
];

// ==========================================
// TRUTH-SQUAD OPERATIONS
// ==========================================

export const factCheckingProtocol = {
  monitoring: [
    "All opponent communication channels monitored (advertising, social media, press conferences, speeches)",
    "Social media tracking tools, journalist relationship networks, direct event observation",
  ],
  verificationSteps: [
    "Claim isolation - extract specific factual assertion",
    "Evidence gathering - official records, expert sources, prior statements, data",
    "Assessment rating - True / Mostly True / Partially False / Mostly False / False",
  ],
  counterResponse: [
    "Response templates include false claim, evidence demonstrating falsity, appropriate counter-framing",
    "Response formats vary by channel (social media brief/punchy vs. earned media detailed)",
    "Maintained in ready-to-deploy format for rapid response when false claims achieve traction",
  ],
};

export const preemptiveStrikeStrategies = [
  {
    strategy: "Attack Surface Analysis",
    description: "Systematically analyze own vulnerabilities to anticipate opponent attack vectors",
    attackCategories: ["Criminal background", "Financial irregularities", "Broken promises", "Alliance tensions", "Candidate disqualifications"],
    indicators: ["Advertising airtime purchases", "Journalist inquiry patterns", "Social media targeting"],
  },
  {
    strategy: "Pre-emptive Disclosure",
    description: "Where anticipated attacks concern legitimate public record, frame narrative before opponent exploits",
    example: "Resolved criminal case from two decades prior - contextual framing prevents opponent presenting as breaking news",
    judgmentRequired: "Which vulnerabilities likely to emerge and whether early framing reduces damage",
  },
  {
    strategy: "Anticipatory Documentation",
    description: "Prepare defense files for all vulnerable Congress candidates",
    contents: [
      "Documentation addressing likely attack themes",
      "Response templates calibrated to different claim types",
      "Supporting evidence for counter-assertions",
    ],
  },
];

export const rapidResponseEscalation = [
  {
    level: 1,
    name: "Monitoring Response",
    description: "Social media monitoring without formal response",
    trigger: "Low-reach attacks",
  },
  {
    level: 2,
    name: "Statement Response",
    description: "Formal campaign statement or social media post",
    trigger: "Medium-reach attacks",
  },
  {
    level: 3,
    name: "Full Media Response",
    description: "Earned media engagement, press conferences, extended counter-messaging",
    trigger: "High-reach attacks",
  },
  {
    level: 4,
    name: "Advertising Response",
    description: "Paid counter-advertising deployment",
    trigger: "Severe attacks with major reach",
  },
];

export const responseSpeedTargets = [
  { channel: "Social media attacks", targetTime: "2-4 hours" },
  { channel: "Traditional media attacks", targetTime: "24 hours" },
  { channel: "Advertising attacks", targetTime: "48 hours" },
];

// ==========================================
// KEY CONCEPTS
// ==========================================

export const researchKeyConcepts = {
  oppositionResearch: "Systematic collection and analysis of information about political opponents to inform campaign strategy, messaging, and rapid response",
  vulnerabilityAssessment: "Process of evaluating identified opposition information for strategic utility across credibility, voter relevance, durability, counterattack resistance, and comparative exposure dimensions",
  negativeCampaigning: "Electoral communication intended to disadvantage opponents rather than promote sponsoring candidate",
  attackAdvertising: "Paid campaign communication specifically designed to highlight opponent weaknesses, records, or vulnerabilities",
  truthSquadOperations: "Campaign functions dedicated to fact-checking opponent claims, developing counter-narratives, and executing rapid response to opponent attacks",
  comparativeAdvertising: "Campaign advertising directly contrasting sponsoring candidate with opponent on specific attributes, records, or policy positions",
  associativeMessaging: "Communication strategy linking opponents to negative concepts without explicit factual comparison",
  counterNarrativeDevelopment: "Creation of alternative interpretive frameworks reframing opponent attacks within broader discrediting contexts",
};
