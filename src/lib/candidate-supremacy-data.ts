// Candidate Supremacy Data for Punjab Congress 2027 Election
// Derived from: direct-documentation/cat-4-candidate-supremacy/

import type {
  CandidateSupremacyReport,
  WinnabilityFactors,
  PartyFactors,
  CandidateFactors,
  CampaignFactors,
  CandidateProfile,
  CandidateBio,
  CandidateCharacter,
  CandidateCompetence,
  CandidateConnect,
  CandidateVision,
  CandidateSWOT,
  CandidateArchetype,
  DigitalPlatform,
  Platform,
  VulnerabilityAudit,
  VulnerabilityCategory,
  CrisisSeverity,
  CrisisLevel,
  CriminalizationStats,
  MoneyPowerAnalysis,
  SelfFinancingProfile,
  EncounterPoliticsPattern,
  StarCampaigner,
  StarCampaignerTier,
  DeploymentPhase,
  ConstituencyDeployment,
  CredibilityDimension,
  LeaderCredibilityProfile,
  CMFaceDeclaration,
  CMMFaceRiskMatrix,
  MonitoringSource,
  AlertThreshold,
  AttackCategory,
  ResponseProtocol,
  EscalationLevel,
  NarrativeType,
  NarrativeClassification,
  FactCheckWorkflow,
  DamageThreshold,
  ChannelTier,
  TVChannel,
  ShowFormat,
  HostilityLevel,
  PreInterviewProtocol,
  HostileQuestionCard,
  MicrositeFeature,
  TechnicalStack,
  ContentRequirement,
  ECICompliance,
  ImageDimension,
  DailyImageAction,
  WeeklyImageReview,
  DressCodeSetting,
  DressCodeRecommendation,
  ImageScorecard,
  BrandArchetype,
  BrandElement,
  BrandConsistency,
  ContentTypeFrequency,
  BrandHealthMetric,
  PerceptionDimension,
  PerceptionScore,
  DataCollectionMethod,
  VoterSegment,
  PerceptionGap,
  ThreatType,
  ThreatAssessment,
  AttackPattern,
  AttackPatternCharacteristics,
  SuppressionTactic,
  ResponseApproach,
  TriageCategory,
} from "@/types/candidate-supremacy-types";

// ==========================================
// B11: CANDIDATE SELECTION & PROFILING DATA
// ==========================================

const partyFactors: PartyFactors = {
  symbolStrength: 75,
  localPartyOrganization: 68,
  casteCommunityEquation: 72,
  previousElectionResultsTrend: 65,
  antiIncumbencyFactor: 45,
};

const candidateFactors: CandidateFactors = {
  localVsOutsiderStatus: 80,
  casteDemographicMatch: 85,
  traditionalVoteBankConnections: 70,
  nameRecognition: 65,
  acceptanceByLocalLeaders: 75,
};

const campaignFactors: CampaignFactors = {
  personalWealthSelfFunding: 60,
  networkForResourceMobilization: 55,
  dedicationCommitmentIndicators: 70,
  charismaAndCommunication: 65,
};

const winnabilityFactors: WinnabilityFactors = {
  partyFactors,
  candidateFactors,
  campaignFactors,
};

const candidateBio: CandidateBio = {
  educationalBackground: "Graduate from Punjab University, law degree from Amritsar",
  professionalHistory: "15 years in real estate, family business in agriculture",
  familyBackground: "Third generation political family, grandfather served as MLA",
  politicalCareerTrajectory: "Started as youth congress worker in 2005, elected as councillor 2012, MLA since 2017",
  achievementsRecord: "Developed 3 km rural road, established 2 schools, facilitated agricultural loan waivers for 500 farmers",
};

const candidateCharacter: CandidateCharacter = {
  integrityIndicators: [
    "Zero criminal cases registered",
    "Transparent asset declarations since 2012",
    "Regular attendance in assembly sessions",
  ],
  leadershipQualities: [
    "Crisis management during 2020 floods",
    "Coalition building with local leaders",
    "Youth mentorship programs",
  ],
  crisisHandling: [
    "Handled farmer protest peacefully in 2022",
    "Negotiated with government for relief funds",
  ],
  relationshipWithParty: [
    "Working with Congress for 18 years",
    "No factional affiliations",
    "Supported central party leadership consistently",
  ],
  publicPerception: "Well-respected, accessible to common voters, known for integrity",
};

const candidateCompetence: CandidateCompetence = {
  governanceCapability: "Strong understanding of rural development, effective Panchayati Raj implementation",
  legislativeSkill: "Passed 3 private member bills, active participation in budget discussions",
  communicationAbility: "Bilingual in Punjabi and Hindi, strong social media presence",
  strategicThinking: "Developed constituency development plan with 5-year phased approach",
  administrativeExperience: "Held position in district planning board, managed relief operations",
};

const candidateConnect: CandidateConnect = {
  localNetworks: [
    "Village Panchayat associations",
    "Sports clubs in 12 villages",
    "Cooperative bank network",
  ],
  casteCommunityLinks: [
    "Mazhabi Sikh community leader relationships",
    "OBC welfare association",
    "Inter-caste harmony committee",
  ],
  businessConnections: [
    "Ludhiana industrial association member",
    "Agricultural produce traders network",
    "Transport association contacts",
  ],
  civilSocietyTies: [
    "NGO partnerships for women empowerment",
    "Educational institution management",
    "Healthcare initiative collaborations",
  ],
  religiousInstitutionConnections: [
    "Gurdwara committees in 8 villages",
    "Religious leaders across communities",
    "Festival celebration committees",
  ],
};

const candidateVision: CandidateVision = {
  articulatedGoals: "Transform constituency into model development hub with emphasis on agriculture modernization and youth employment",
  understandingOfIssues: "Deep understanding of agrarian distress, water table depletion, and unemployment through direct voter engagement",
  solutionOrientation: "Evidence-based policy proposals with clear implementation timelines and accountability mechanisms",
  longTermThinking: "5-year development roadmap aligned with Punjab's agricultural sustainability and industrial growth potential",
};

const candidateSwot: CandidateSWOT = {
  strengths: [
    "Strong local connect and recognition",
    "Clean image with no criminal cases",
    "Family legacy in constituency service",
    "Deep understanding of agrarian issues",
  ],
  weaknesses: [
    "Limited urban voter outreach",
    "Social media presence needs strengthening",
    "Resource constraints compared to rivals",
  ],
  opportunities: [
    "AAP government failures on core promises",
    "Youth seeking alternative leadership",
    "Farmer unrest over MSP implementation",
  ],
  threats: [
    "Coordinated attacks from opponent digital teams",
    "Caste arithmetic shifts in key villages",
    "Economic slowdown affecting rural credit",
  ],
};

const candidateProfile: CandidateProfile = {
  bio: candidateBio,
  character: candidateCharacter,
  competence: candidateCompetence,
  connect: candidateConnect,
  vision: candidateVision,
  swot: candidateSwot,
};

const archetypes: CandidateArchetype[] = [
  "Reformer",
  "Administrator",
  "Protector",
  "Builder",
  "Charismatic",
  "Traditional",
];

// ==========================================
// B12: DIGITAL CRISIS MANAGEMENT DATA
// ==========================================

const digitalPlatforms: DigitalPlatform[] = [
  {
    name: "Facebook",
    primaryAudience: "35+ rural and semi-urban voters",
    contentStrategy: "Video-first with 40% video content, daily posting during campaign",
    postingCadence: "2-3 posts daily during campaign, 1 post daily otherwise",
    keyMetrics: ["Page likes", "Shares", "Comments", "Video views"],
  },
  {
    name: "Instagram",
    primaryAudience: "18-34 urban and youth voters",
    contentStrategy: "50% Reels, 30% Feed posts, 20% Stories",
    postingCadence: "Daily Stories, 3-5 Reels per week",
    keyMetrics: ["Followers", "Engagement rate", "Reels views"],
  },
  {
    name: "WhatsApp",
    primaryAudience: "All demographics, family networks",
    contentStrategy: "Broadcast lists for单向 communication, group monitoring for intel",
    postingCadence: "Daily updates with multimedia content",
    keyMetrics: ["Forward count", "Group spread velocity"],
  },
  {
    name: "X",
    primaryAudience: "Journalists, urban educated, political operatives",
    contentStrategy: "Real-time engagement, rapid response, thread-based explanations",
    postingCadence: "5-10 tweets daily during campaign",
    keyMetrics: ["Retweets", "Quote tweets", "Mention velocity"],
  },
  {
    name: "YouTube",
    primaryAudience: "Punjabi-speaking diaspora, policy-focused voters",
    contentStrategy: "Long-form speeches, policy explainers, documentary content",
    postingCadence: "2 videos weekly minimum during campaign",
    keyMetrics: ["Views", "Watch time", "Subscriber growth"],
  },
  {
    name: "ShareChat",
    primaryAudience: "Rural non-English speaking voters",
    contentStrategy: "Punjabi-first content, emotional folk-style videos",
    postingCadence: "Daily Punjabi content, regional targeting",
    keyMetrics: ["Views", "Shares", "Regional reach"],
  },
];

const vulnerabilityAudits: VulnerabilityAudit[] = [
  {
    category: "Criminal",
    severity: 1,
    exploitability: "Low - no criminal history",
    persistence: "Permanent record but cleared",
    counterNarrativeDifficulty: "Not applicable - clean record",
  },
  {
    category: "Financial",
    severity: 2,
    exploitability: "Moderate - asset declarations may be scrutinized",
    persistence: "Permanent - documents on record",
    counterNarrativeDifficulty: "Easy with documentation",
  },
  {
    category: "PersonalLife",
    severity: 2,
    exploitability: "Low - private family life maintained",
    persistence: "Medium - gossip persists",
    counterNarrativeDifficulty: "Moderate - privacy limits response options",
  },
  {
    category: "SocialMedia",
    severity: 3,
    exploitability: "High - historical posts from 2018 may exist",
    persistence: "Permanent - archived content",
    counterNarrativeDifficulty: "Moderate - requires pre-bunking",
  },
  {
    category: "Associational",
    severity: 2,
    exploitability: "Moderate - some party colleague associations",
    persistence: "Long-term - relationships documented",
    counterNarrativeDifficulty: "Easy - all affiliations legitimate",
  },
  {
    category: "Statement",
    severity: 2,
    exploitability: "Moderate - public statements over years",
    persistence: "Permanent - media archives",
    counterNarrativeDifficulty: "Moderate - context required",
  },
  {
    category: "Academic",
    severity: 1,
    exploitability: "Very Low - credentials verified",
    persistence: "Permanent - records on file",
    counterNarrativeDifficulty: "Not applicable - verified credentials",
  },
  {
    category: "FamilyMember",
    severity: 2,
    exploitability: "Moderate - family members' activities scrutinized",
    persistence: "Long-term - family history",
    counterNarrativeDifficulty: "Moderate - family cooperation secured",
  },
];

const crisisSeverities: CrisisSeverity[] = [
  {
    level: 1,
    description: "Minor negative content with limited circulation",
    responseTimeline: "Monitor only, 24-hour response window",
    authorizationLevel: "Campaign Manager",
  },
  {
    level: 2,
    description: "Moderate negative content gaining some traction",
    responseTimeline: "4-6 hour response window",
    authorizationLevel: "Comms Director",
  },
  {
    level: 3,
    description: "Significant negative content going viral, media inquiry surge",
    responseTimeline: "1-2 hour response, all-hands",
    authorizationLevel: "Senior Leadership",
  },
  {
    level: 4,
    description: "Potentially electoral-damaging content, major media coverage",
    responseTimeline: "Immediate response",
    authorizationLevel: "Candidate + Senior Leadership",
  },
];

// ==========================================
// B34: CRIMINAL POLITICS & MONEY POWER DATA
// ==========================================

const criminalizationStats: CriminalizationStats[] = [
  {
    percentageMlAsWithCriminalCases: 34,
    seriousCrimeCasesPercentage: 18,
    year: 2022,
  },
  {
    percentageMlAsWithCriminalCases: 32,
    seriousCrimeCasesPercentage: 15,
    year: 2017,
  },
  {
    percentageMlAsWithCriminalCases: 28,
    seriousCrimeCasesPercentage: 12,
    year: 2012,
  },
];

const moneyPowerAnalysis: MoneyPowerAnalysis = {
  reportedExpenditureCeiling: 3000000,
  competitiveSeatEstimate: "Rs 3-10 crores per candidate for competitive seats",
  majorExpenditureCategories: [
    "Voter enticement (cash, liquor, gifts)",
    "Booth management and paid workers",
    "Campaign infrastructure and rallies",
    "Media campaigns and digital marketing",
    "Canvassing staff and door-to-door operations",
  ],
};

// ==========================================
// G20: STAR CAMPAIGNER DEPLOYMENT DATA
// ==========================================

const starCampaigners: StarCampaigner[] = [
  {
    name: "Rahul Gandhi",
    role: "AICC Leader",
    securityCover: "SPG Z+ category",
    coreVoterSignal: "National leadership, anti-corruption, farmer issues, youth",
    bestUsedIn: ["Large rallies 10000+, Malwa belt", "Jat Sikh constituencies"],
    tier: "National",
  },
  {
    name: "Priyanka Gandhi",
    role: "AICC Leader",
    securityCover: "SPG Z category",
    coreVoterSignal: "Women empowerment, youth, Congress party identity",
    bestUsedIn: ["Women-focused events", "Urban seats", "Majha-Sikh belt"],
    tier: "National",
  },
  {
    name: "Mallikarjun Kharge",
    role: "Congress President",
    securityCover: "SPG Z category",
    coreVoterSignal: "Dalit outreach, party authority",
    bestUsedIn: ["SC-reserved constituencies", "Doaba region"],
    tier: "National",
  },
  {
    name: "Randeep Singh Surjewala",
    role: "Senior spokesperson",
    securityCover: "Standard",
    coreVoterSignal: "Communication, political analysis, youth connect",
    bestUsedIn: ["Media interactions", "Policy debates", "Urban constituencies"],
    tier: "State",
  },
  {
    name: "Pawan Goenka",
    role: "PPCC Chief",
    securityCover: "Standard",
    coreVoterSignal: "State leadership, organizational strength",
    bestUsedIn: ["Party workers rallies", "Malwa region", "Organizational meetings"],
    tier: "State",
  },
];

const deploymentPhases: DeploymentPhase[] = [
  {
    name: "Introduction Phase",
    startDate: "2026-06-01",
    endDate: "2026-08-31",
    focus: "Candidate introduction, visibility building, base consolidation",
  },
  {
    name: "Escalation Phase",
    startDate: "2026-09-01",
    endDate: "2026-11-30",
    focus: "Momentum building, issue articulation, coalition development",
  },
  {
    name: "Maximum Pressure Phase",
    startDate: "2026-12-01",
    endDate: "2027-02-01",
    focus: "Final push, voter contact intensification, turnout maximization",
  },
];

const constituencyDeployments: ConstituencyDeployment[] = [
  {
    constituencyId: "MALWA-042",
    recommendedCampaigner: "Rahul Gandhi",
    deploymentRationale: "Large rally format ideal for Jat Sikh voter mobilization",
    expectedImpact: "High - national leader presence generates media coverage and voter enthusiasm",
  },
  {
    constituencyId: "DOABA-015",
    recommendedCampaigner: "Mallikarjun Kharge",
    deploymentRationale: "SC concentration requires dalit outreach specialist presence",
    expectedImpact: "High - direct community connect signal",
  },
  {
    constituencyId: "MAJHA-008",
    recommendedCampaigner: "Priyanka Gandhi",
    deploymentRationale: "Women voter turnout initiative with women-focused messaging",
    expectedImpact: "Very High - women's engagement and enthusiasm boost",
  },
  {
    constituencyId: "MALWA-071",
    recommendedCampaigner: "Pawan Goenka",
    deploymentRationale: "Party organizational strength demonstration",
    expectedImpact: "Moderate - worker morale boost and organizational alignment",
  },
];

// ==========================================
// G31: LEADERSHIP CREDIBILITY DATA
// ==========================================

const dimensionHierarchy: CredibilityDimension[] = [
  "Integrity",
  "Relatability",
  "Competence",
  "Decisiveness",
  "Electability",
];

const leaderProfiles: LeaderCredibilityProfile[] = [
  {
    leaderName: "S. Charanjit Singh Channi",
    dimensionScores: {
      Competence: 55,
      Integrity: 80,
      Relatability: 75,
      Decisiveness: 45,
      Electability: 70,
    },
    base: {
      caste: "Dalit (Mazhabi Sikh)",
      age: 75,
      constituency: "Chamkaur Sahib",
      politicalBase: "SC voters, Mazhabi Sikh community, anti-BJP non-Congress voters",
    },
    credibilityStrengths: [
      "Personal integrity - no corruption allegations",
      "Dalit identity - historically underrepresented community",
      "Short tenure record - limited anti-incumbency",
    ],
    credibilityGaps: [
      "Short CM tenure (6 months) - governance credibility question",
      "Age perception affecting youth connect",
      "Limited visible delivery achievements",
    ],
    deploymentRecommendation: "Deploy in SC-reserved seats and Doaba region; leverage Dalit identity for SC vote bank recovery",
  },
  {
    leaderName: "Sukwinder Singh Warring",
    dimensionScores: {
      Competence: 60,
      Integrity: 55,
      Relatability: 70,
      Decisiveness: 75,
      Electability: 65,
    },
    base: {
      caste: "Jat Sikh",
      age: 57,
      constituency: "Fazilka",
      politicalBase: "Rural Malwa, farm union connections, Jat Sikh agrarian vote",
    },
    credibilityStrengths: [
      "Proven electoral operative - PPCC president during 2022 campaign",
      "Farm union connections - BKU and related farm bodies",
      "Opposition attack dog - sustained AAP attacks",
    ],
    credibilityGaps: [
      "Jat Sikh ceiling - competes with Mann's incumbency advantage",
      "Sidhu faction hostility",
      "No state-level governance experience",
    ],
    deploymentRecommendation: "Best as Malwa campaigner-in-chief; not as CM face; focus on rural Jat Sikh constituencies",
  },
  {
    leaderName: "Partap Singh Bajwa",
    dimensionScores: {
      Competence: 75,
      Integrity: 80,
      Relatability: 50,
      Decisiveness: 55,
      Electability: 55,
    },
    base: {
      caste: "Jat Sikh (Rajput families)",
      age: 69,
      constituency: "Gurdaspur",
      politicalBase: "Majha region, upper-caste Sikh and Hindu voters, business community",
    },
    credibilityStrengths: [
      "Senior administrative experience - Rajya Sabha, ministerial roles",
      "Clean record - no corruption allegations across decades",
      "Hindu voter accessibility - moderate Sikh identity",
    ],
    credibilityGaps: [
      "SC vote ceiling - cannot credibly represent SC voters",
      "Age and communication style - youth alienation",
      "Patiala region vacuum",
    ],
    deploymentRecommendation: "Deploy in Majha region and Hindu-majority urban seats; state statesman role",
  },
];

const cmFaceRiskMatrix: CMMFaceRiskMatrix[] = [
  {
    scenario: "Declare Channi early (Nov 2026)",
    riskLevel: "Moderate",
    primaryRisk: "Sidhu/Bajwa/Warring factions feel sidelined",
    mitigation: "Give each undeclared leader formal campaign chairman roles with public prominence",
  },
  {
    scenario: "Declare Channi late (post-D-day)",
    riskLevel: "High",
    primaryRisk: "Appears reactive, loses media cycle advantage",
    mitigation: "Commit by 60 days before election minimum",
  },
  {
    scenario: "Declare no face",
    riskLevel: "Very High",
    primaryRisk: "AAP frames as weakness, voter defaults to Mann",
    mitigation: "Consider rotating campaign chairman model with Channi as first chair",
  },
  {
    scenario: "Declare Warring",
    riskLevel: "High-Moderate",
    primaryRisk: "Jat Sikh ceiling, Mann's incumbency advantage on Sikh identity",
    mitigation: "Requires active Sidhu reconciliation before declaration",
  },
  {
    scenario: "Declare Bajwa",
    riskLevel: "High",
    primaryRisk: "SC vote lost, fundamental vote bank problem",
    mitigation: "Not recommended unless AAP alliance changes math",
  },
];

// ==========================================
// G64: SLANDER & HEARSAY MONITORING DATA
// ==========================================

const monitoringSources: MonitoringSource[] = [
  "WhatsApp",
  "Facebook",
  "X",
  "YouTube",
  "LocalCableTV",
  "LocalForums",
  "WordOfMouth",
];

const alertThreshold: AlertThreshold = {
  volumeRed: 50,
  velocityRed: "10 minutes to reach 100 people",
  sourceCredibilityRed: "Verified/national media amplification",
  platformRed: "3+ platforms or media pickup",
};

const responseProtocols: ResponseProtocol[] = [
  {
    category: "Casteist",
    immediateTimeframe: "0-30 minutes",
    shortTermTimeframe: "30 min - 2 hrs",
    mediumTermTimeframe: "2-8 hrs",
    longTermTimeframe: "8-24 hrs",
    responseTeam: "Legal Convener + Caste Community Cell + Social Media Team",
  },
  {
    category: "PersonalCorruption",
    immediateTimeframe: "0-30 minutes",
    shortTermTimeframe: "30 min - 2 hrs",
    mediumTermTimeframe: "2-8 hrs",
    longTermTimeframe: "8-24 hrs",
    responseTeam: "Legal Convener + Finance Team + Candidate Presence",
  },
  {
    category: "CharacterAssassination",
    immediateTimeframe: "0-30 minutes",
    shortTermTimeframe: "30 min - 2 hrs",
    mediumTermTimeframe: "2-8 hrs",
    longTermTimeframe: "8-24 hrs",
    responseTeam: "Candidate + Inner Circle Only",
  },
  {
    category: "FamilyAttack",
    immediateTimeframe: "0-30 minutes",
    shortTermTimeframe: "30 min - 2 hrs",
    mediumTermTimeframe: "2-8 hrs",
    longTermTimeframe: "8-24 hrs",
    responseTeam: "Candidate + Family Only + Legal for Minor Protection",
  },
  {
    category: "FalsePromise",
    immediateTimeframe: "0-30 minutes",
    shortTermTimeframe: "30 min - 2 hrs",
    mediumTermTimeframe: "2-8 hrs",
    longTermTimeframe: "8-24 hrs",
    responseTeam: "Development Cell + Public Relations + Candidate",
  },
  {
    category: "MemeRidicule",
    immediateTimeframe: "0-30 minutes (if high threat)",
    shortTermTimeframe: "30 min - 2 hrs",
    mediumTermTimeframe: "2-8 hrs",
    longTermTimeframe: "8-24 hrs",
    responseTeam: "Social Media Team + Meme Desk",
  },
];

// ==========================================
// G65: FACT-FICTION CLARIFICATION DATA
// ==========================================

const narrativeTypes: NarrativeClassification[] = [
  {
    type: "A",
    definition: "Completely false, no basis in fact",
    example: "Candidate was arrested for murder (never occurred)",
    responsePriority: "High",
  },
  {
    type: "B",
    definition: "True base fact wildly inflated",
    example: "Candidate owes Rs 50 crore (actual: Rs 2 lakh tax dispute)",
    responsePriority: "Medium",
  },
  {
    type: "C",
    definition: "True fact presented in false framing",
    example: "Old photo at protest shown as recent",
    responsePriority: "Medium",
  },
  {
    type: "D",
    definition: "True but deliberately incomplete",
    example: "Mentioning conviction without mentioning acquittal",
    responsePriority: "Medium",
  },
];

const factCheckWorkflow: FactCheckWorkflow[] = [
  {
    hourPhase: "Hour 0-2",
    action: "Detect & Assess",
    duration: "2 hours",
  },
  {
    hourPhase: "Hour 2-4",
    action: "Verify Claim",
    duration: "2 hours",
  },
  {
    hourPhase: "Hour 4-8",
    action: "Gather Evidence & Draft",
    duration: "4 hours",
  },
  {
    hourPhase: "Hour 8-12",
    action: "Prepare Response",
    duration: "4 hours",
  },
  {
    hourPhase: "Hour 12-16",
    action: "Candidate Approval",
    duration: "4 hours",
  },
  {
    hourPhase: "Hour 16-24",
    action: "Deploy Response",
    duration: "8 hours",
  },
];

const damageThresholds: DamageThreshold[] = [
  {
    totalScore: 85,
    category: "Critical",
    responseDeadline: "6 hours",
  },
  {
    totalScore: 65,
    category: "High",
    responseDeadline: "12 hours",
  },
  {
    totalScore: 45,
    category: "Moderate",
    responseDeadline: "24 hours",
  },
  {
    totalScore: 25,
    category: "Low",
    responseDeadline: "48 hours or ignore",
  },
];

// ==========================================
// G66: TV INTERVIEW COORDINATION DATA
// ==========================================

const tvChannels: TVChannel[] = [
  {
    name: "PTC News",
    language: "Punjabi",
    reach: "#1 Punjabi news channel",
    primaryAudience: "35-65+, rural/semi-urban",
    politicalLean: "Pro-SAD historically, now AAP",
    tier: 1,
  },
  {
    name: "ABP Sanjha",
    language: "Punjabi",
    reach: "Top 3 Punjabi channel",
    primaryAudience: "30-60, rural",
    politicalLean: "Centrist",
    tier: 1,
  },
  {
    name: "Zee Punjab",
    language: "Punjabi",
    reach: "Top 5 Punjabi channel",
    primaryAudience: "All ages",
    politicalLean: "BJP-aligned editorial",
    tier: 1,
  },
  {
    name: "DD Punjabi",
    language: "Punjabi",
    reach: "Government free air, pan-Punjab",
    primaryAudience: "Rural, remote areas",
    politicalLean: "Neutral (state broadcaster)",
    tier: 1,
  },
  {
    name: "News18 Punjab",
    language: "Hindi/Punjabi",
    reach: "High",
    primaryAudience: "Urban, semi-urban youth",
    politicalLean: "Centrist/Congress-friendly",
    tier: 2,
  },
  {
    name: "India TV Punjab",
    language: "Hindi",
    reach: "Moderate-High",
    primaryAudience: "Urban middle class",
    politicalLean: "BJP-aligned",
    tier: 2,
  },
];

const showFormats: ShowFormat[] = [
  "StudioDebate",
  "SingleAnchorInterview",
  "PhoneInPublicShow",
  "Live Emmy",
  "PanelOfExperts",
];

const preInterviewProtocols: PreInterviewProtocol[] = [
  {
    hoursBefore: 3,
    action: "Key message brief delivered to candidate",
    description: "3 core message points, 5 anticipated questions, issue brief",
  },
  {
    hoursBefore: 2,
    action: "Anticipated Q&A session",
    description: "45-min session with hostile anchor simulation",
  },
  {
    hoursBefore: 1,
    action: "Mock interview with hostile questions",
    description: "Full mock interview, recorded, scored minimum 7/10",
  },
  {
    hoursBefore: 0.5,
    action: "Final message check and logistics",
    description: "Wardrobe, hydration, phone silent, bathroom break",
  },
];

const hostileQuestionCards: HostileQuestionCard[] = [
  {
    questionType: "The 2022 Loss Question",
    question: "Congress lost 92 seats in 2022. You were part of that campaign. Why should Punjab trust you again?",
    responseStructure: "Acknowledge → Context → Contrast → Forward",
    bridgePhrases: [
      "But here's what matters more...",
      "Let me tell you what's changed...",
      "The real question is...",
    ],
  },
  {
    questionType: "Criminal Cases Question",
    question: "Your candidate has criminal cases registered against them. How do you respond?",
    responseStructure: "Defer → Legal process → Character → Contrast",
    bridgePhrases: [
      "The law will take its course...",
      "Let me set the record straight on...",
      "What matters is what the people need...",
    ],
  },
  {
    questionType: "Dynasty Party Charge",
    question: "Congress is a dynasty party. Your family has held this seat for 40 years. When does Punjab get new leadership?",
    responseStructure: "Reframe → Value of experience → New generation → Party structure",
    bridgePhrases: [
      "Experience and new thinking are not opposites...",
      "Let me tell you what I've done, not who my family is...",
      "The people of my constituency know me personally...",
    ],
  },
];

// ==========================================
// G67: CAMPAIGN WEBSITE & MICROSITE DATA
// ==========================================

const micrositeFeatures: MicrositeFeature[] = [
  {
    feature: "Candidate Bio",
    priority: "P0",
    description: "Photo, name, constituency, party affiliation, 200-word intro",
  },
  {
    feature: "Contact Form",
    priority: "P0",
    description: "Volunteer signup, event RSVPs, media enquiries",
  },
  {
    feature: "Issues Page",
    priority: "P1",
    description: "3-5 local + 3 statewide priority positions",
  },
  {
    feature: "Event Gallery",
    priority: "P1",
    description: "Photos from constituency events, minimum 6, maximum 20",
  },
  {
    feature: "Volunteer CTA",
    priority: "P0",
    description: "Prominent Join Campaign button on every page",
  },
  {
    feature: "Social Links",
    priority: "P1",
    description: "Facebook, Instagram, WhatsApp, X/Twitter handles",
  },
  {
    feature: "Donate Button",
    priority: "P2",
    description: "UPI/bank transfer redirect (compliance-permitting)",
  },
];

const contentRequirements: ContentRequirement[] = [
  {
    pageElement: "Page title",
    languageOrder: "Punjabi first",
    ratio: "—",
  },
  {
    pageElement: "Headings",
    languageOrder: "Punjabi first",
    ratio: "60:40",
  },
  {
    pageElement: "Body text",
    languageOrder: "Punjabi first",
    ratio: "70:30",
  },
  {
    pageElement: "CTAs",
    languageOrder: "Both languages",
    ratio: "—",
  },
  {
    pageElement: "Legal disclaimers",
    languageOrder: "English only",
    ratio: "—",
  },
];

const eciCompliance: ECICompliance = {
  candidateNameRequired: true,
  partyNameRequired: true,
  symbolRequired: true,
  fundingSourceRequired: true,
};

// ==========================================
// G75: IMAGE MANAGEMENT DATA
// ==========================================

const imageDimensions: ImageDimension[] = [
  "Competence",
  "Character",
  "Accessibility",
  "Relatability",
];

const dailyImageActions: DailyImageAction[] = [
  {
    timeOfDay: "6:00 AM - 7:30 AM",
    action: "Morning constituency walk",
    description: "30-45 minute walk in market or village chowk",
  },
  {
    timeOfDay: "7:30 AM - 8:00 AM",
    action: "Photo documentation",
    description: "2-3 candid photographs of voter interactions",
  },
  {
    timeOfDay: "8:00 AM - 9:00 AM",
    action: "Social media morning post",
    description: "One image with local-context caption before 9 AM",
  },
  {
    timeOfDay: "9:00 AM - 9:30 AM",
    action: "Dhaba/community tea stall visit",
    description: "20 minutes at local tea stall, listen more than speak",
  },
  {
    timeOfDay: "11:00 AM - 3:00 PM",
    action: "Community event attendance",
    description: "At least one community event per day during campaign",
  },
  {
    timeOfDay: "5:00 PM - 8:00 PM",
    action: "Door-to-door or public gathering",
    description: "Minimum 15-20 conversations per day",
  },
];

const dressCodeRecommendations: DressCodeRecommendation[] = [
  {
    setting: "VillageVisits",
    recommended: "Kurta-pyjama, simple shirt",
    avoid: "Bright designer wear, suits",
  },
  {
    setting: "ReligiousGatherings",
    recommended: "Traditional Sikh wear or formal Indian dress",
    avoid: "Sportswear, western formal",
  },
  {
    setting: "FarmerMeetings",
    recommended: "Khadi or simple local cotton",
    avoid: "Embroidered or luxury fabrics",
  },
  {
    setting: "SportsEvents",
    recommended: "Casual Indian (jeans + collar shirt)",
    avoid: "Ties, formal suits",
  },
  {
    setting: "UrbanConstituency",
    recommended: "Well-fitted simple formal Indian",
    avoid: "Loud accessories, heavy jewelry",
  },
  {
    setting: "Funerals",
    recommended: "Simple white or dark formal",
    avoid: "Bright colors, party wear",
  },
  {
    setting: "Weddings",
    recommended: "Traditional formal (safa/headgear appropriate)",
    avoid: "White (reserved for funerals)",
  },
];

const imageScorecards: ImageScorecard[] = [
  {
    dimension: "Competence",
    score: 65,
    evidenceThisMonth: "Delivered 3 km road, facilitated agricultural loans",
    actionRequired: "Continue visibility in development forums",
  },
  {
    dimension: "Character",
    score: 72,
    evidenceThisMonth: "Clean asset declarations, no criminal cases",
    actionRequired: "Publicize integrity record in communications",
  },
  {
    dimension: "Accessibility",
    score: 68,
    evidenceThisMonth: "Daily constituency presence, responsive to voter concerns",
    actionRequired: "Increase evening public gatherings",
  },
  {
    dimension: "Relatability",
    score: 70,
    evidenceThisMonth: "Dhaba visits, farm field presence, village interactions",
    actionRequired: "Maintain grassroots connect through regular visits",
  },
];

// ==========================================
// G76: PERSONAL BRAND DATA
// ==========================================

const brandArchetypes: BrandArchetype[] = [
  "FarmersSon",
  "YoungReformer",
  "ExperiencedAdministrator",
  "DeraConnectedLeader",
  "Warrior",
  "ProfessionalPolitician",
];

const brandElements: BrandElement = {
  tagline: "Kaam Bolde (Work Speaks)",
  visualIdentity: "Congress tricolor accent, saffron for agrarian connection, white for integrity, green for hope",
  voice: "Direct, warm, factual - connects with rural and urban constituents through authentic Punjabi delivery",
  story: "Third-generation public servant from farming family, witnessed agrarian distress firsthand, committed to rural transformation",
};

const brandConsistencyRules: BrandConsistency[] = [
  {
    touchpoint: "Poster",
    rule: "Same photo, same tagline, same 2 symbols. No crowding with other leaders' photos.",
  },
  {
    touchpoint: "Rally Speech",
    rule: "Open with personal story, pivot to one core promise, close with tagline.",
  },
  {
    touchpoint: "WhatsApp Forward",
    rule: "One message, one visual, one idea. No walls of text.",
  },
  {
    touchpoint: "Interview",
    rule: "Control narrative - if asked off-brand, pivot to promise within 15 seconds.",
  },
  {
    touchpoint: "Village Visit",
    rule: "Always stop at local dhaba, tea stall, or gurdwara. Be seen in civilian spaces.",
  },
];

const contentTypeFrequencies: ContentTypeFrequency[] = [
  {
    contentType: "Personal story post",
    frequency: "1x/week",
    purpose: "Human connection",
  },
  {
    contentType: "Constituency update (with photo)",
    frequency: "2-3x/week",
    purpose: "Proof of work",
  },
  {
    contentType: "Issue-based post",
    frequency: "1x/week",
    purpose: "Thought leadership",
  },
  {
    contentType: "Party solidarity post",
    frequency: "1x/week",
    purpose: "Party loyalty",
  },
  {
    contentType: "Event highlight",
    frequency: "2-3x/week",
    purpose: "Energy and activity",
  },
  {
    contentType: "Festival/occasion greeting",
    frequency: "On occasions",
    purpose: "Cultural authenticity",
  },
];

const brandHealthMetrics: BrandHealthMetric[] = [
  {
    metric: "Voter Recall",
    method: "Quick constituency survey - ask 100 people what candidate stands for",
    frequency: "Monthly",
    healthyRange: "60%+ can name core promise",
  },
  {
    metric: "Favorability Rating",
    method: "Simple favorability poll (thumbs up/down)",
    frequency: "Monthly",
    healthyRange: "45%+ net favorability",
  },
  {
    metric: "Social Media Sentiment",
    method: "Count positive/negative/neutral comments and forwards",
    frequency: "Weekly",
    healthyRange: "70%+ positive or neutral",
  },
  {
    metric: "Tagline Recall",
    method: "Ask randomly - what is candidate's tagline",
    frequency: "Monthly",
    healthyRange: "30%+ can recall without prompting",
  },
  {
    metric: "Physical Presence Score",
    method: "Count unique constituency visits, dhabha interactions",
    frequency: "Monthly",
    healthyRange: "Track upward trend",
  },
];

// ==========================================
// G77: PUBLIC PERCEPTION TRACKING DATA
// ==========================================

const perceptionDimensions: PerceptionDimension[] = [
  "Trustworthiness",
  "Accessibility",
  "Competence",
  "Corruption",
  "Leadership",
  "ConnectWithCommunity",
  "DeliveryCapability",
  "Character",
];

const voterSegments: VoterSegment[] = [
  {
    segment: "Youth (18-35)",
    approximateElectorate: 32,
    keyPerceptionDrivers: ["Jobs", "Drugs", "Migration", "Digital accessibility"],
  },
  {
    segment: "Women",
    approximateElectorate: 48,
    keyPerceptionDrivers: ["Safety", "Welfare schemes", "Family financial stability"],
  },
  {
    segment: "SC Population",
    approximateElectorate: 32,
    keyPerceptionDrivers: ["Land rights", "Affirmative action", "Dignity"],
  },
  {
    segment: "OBC",
    approximateElectorate: 17,
    keyPerceptionDrivers: ["Social mobility", "Reservation", "Economic opportunity"],
  },
  {
    segment: "Jat Sikh",
    approximateElectorate: 21,
    keyPerceptionDrivers: ["Agricultural policy", "Water", "Farmer debt"],
  },
  {
    segment: "Urban Middle Class",
    approximateElectorate: 15,
    keyPerceptionDrivers: ["Infrastructure", "Law and order", "Tax burden"],
  },
];

const dataCollectionMethods: DataCollectionMethod[] = [
  "FGD",
  "ExitPoll",
  "BoothAgentReport",
  "SocialMediaSentiment",
  "MysteryCaller",
];

const perceptionGaps: PerceptionGap[] = [
  {
    dimension: "Trustworthiness",
    voterScore: 38,
    candidateSelfScore: 55,
    gap: -17,
    severity: "Critical",
  },
  {
    dimension: "Accessibility",
    voterScore: 52,
    candidateSelfScore: 60,
    gap: -8,
    severity: "Moderate",
  },
  {
    dimension: "Competence",
    voterScore: 61,
    candidateSelfScore: 65,
    gap: -4,
    severity: "Minor",
  },
  {
    dimension: "Corruption",
    voterScore: 22,
    candidateSelfScore: 50,
    gap: -28,
    severity: "Critical",
  },
  {
    dimension: "Leadership",
    voterScore: 58,
    candidateSelfScore: 70,
    gap: -12,
    severity: "Significant",
  },
  {
    dimension: "ConnectWithCommunity",
    voterScore: 65,
    candidateSelfScore: 68,
    gap: -3,
    severity: "Minor",
  },
  {
    dimension: "DeliveryCapability",
    voterScore: 45,
    candidateSelfScore: 55,
    gap: -10,
    severity: "Significant",
  },
  {
    dimension: "Character",
    voterScore: 55,
    candidateSelfScore: 65,
    gap: -10,
    severity: "Significant",
  },
];

// ==========================================
// G78: RUMOR & MEME SUPPRESSION DATA
// ==========================================

const threatAssessments: ThreatAssessment[] = [
  {
    type: "TextRumor",
    suppressionDifficulty: "Medium - factual denial possible",
    frequencyPercentage: 60,
    electoralImpact: "Moderate - spreads through family networks",
  },
  {
    type: "VisualMeme",
    suppressionDifficulty: "High - emotional, shareable, persists visually",
    frequencyPercentage: 25,
    electoralImpact: "High - highly credible with real photo base",
  },
  {
    type: "HalfTruth",
    suppressionDifficulty: "Very High - contains truth, harder to reject",
    frequencyPercentage: 10,
    electoralImpact: "Very High - resonates with lived experience",
  },
  {
    type: "Deepfake",
    suppressionDifficulty: "Critical - most damaging, hardest to counter",
    frequencyPercentage: 5,
    electoralImpact: "Severe - can swing 5-10% voter opinion",
  },
];

const attackPatternCharacteristics: AttackPatternCharacteristics[] = [
  {
    party: "AAP",
    primaryPlatform: "WhatsApp-first strategy",
    memeFormat: "Sarcastic, relatable, Punjabi/Hindi mix",
    attackThemes: ["Corrupt", "BJP-RSS agent", "Failed promises", "Family dynasty"],
    amplification: "Real accounts + paid boosters + official party amplification",
  },
  {
    party: "BJP",
    primaryPlatform: "X/Twitter-first for national narrative",
    memeFormat: "Polarizing, Hindu nationalist framing, provocative",
    attackThemes: ["Anti-Hindu", "Urban Naxal", "Pakistan sympathizer", "Appeasing Muslims"],
    amplification: "IT cells, fringe accounts, official handles",
  },
];

const suppressionTactics: SuppressionTactic[] = [
  {
    platform: "WhatsApp",
    tactic: "Forward chains with pre-positioned positive content",
    principle: "Fill the vacuum with authentic content before attacks arrive",
  },
  {
    platform: "Facebook",
    tactic: "Report false news + boost opposing content + comment flooding",
    principle: "Remove source + amplify truth simultaneously",
  },
  {
    platform: "X",
    tactic: "Trend poisoning + quote tweet redirect + report manipulation",
    principle: "Flood expected hashtag + redirect viral narrative",
  },
  {
    platform: "YouTube",
    tactic: "Content ID claim + SEO suppression + dislike campaign",
    principle: "Remove source + push down in search + community rejection",
  },
];

const responseApproaches: ResponseApproach[] = [
  {
    approach: "TruthCascade",
    principle: "Flood space with truth - 5 truth pieces for every 1 lie",
    bestFor: "Outright fabrications with evidence available",
    warning: "Must have credible source authenticity",
  },
  {
    approach: "HumorousDeflection",
    principle: "Make attacker look ridiculous for making absurd claim",
    bestFor: "Absurd rumors that don't deserve serious response",
    warning: "Never mock the victim - mock the lie and liar",
  },
  {
    approach: "SourceDiscrediting",
    principle: "Destroy originator credibility - narrative dies with source",
    bestFor: "Half-truths and identifiable opponent sources",
    warning: "Must have documented history of lying to use this approach",
  },
];

// ==========================================
// MAIN REPORT
// ==========================================

export const candidateSupremacyData: CandidateSupremacyReport = {
  reportDate: "2026-05-20",
  confidence: "HIGH",
  sourcesConsulted: 13,
  dataCurrency: "Current through May 2026",
  winnabilityModel: winnabilityFactors,
  candidateProfiles: {
    "SAMPLE-CANDIDATE": candidateProfile,
  },
  archetypes,
  digitalCrisis: {
    platforms: digitalPlatforms,
    vulnerabilityAudit: vulnerabilityAudits,
    crisisLevels: crisisSeverities,
  },
  criminalPolitics: {
    criminalizationStats,
    moneyPowerAnalysis,
  },
  starCampaigners: {
    roster: starCampaigners,
    phases: deploymentPhases,
    deployments: constituencyDeployments,
  },
  leadershipCredibility: {
    dimensionHierarchy,
    leaders: leaderProfiles,
    cmFaceRiskMatrix,
  },
  slanderMonitoring: {
    sources: monitoringSources,
    alertThresholds: alertThreshold,
    responseProtocols,
  },
  factFiction: {
    narrativeTypes,
    workflow: factCheckWorkflow,
    damageThresholds,
  },
  tvInterview: {
    channels: tvChannels,
    showFormats,
    preInterviewProtocols,
    hostileQuestionCards,
  },
  campaignWebsite: {
    features: micrositeFeatures,
    contentRequirements,
    compliance: eciCompliance,
  },
  imageManagement: {
    dimensions: imageDimensions,
    dailyActions: dailyImageActions,
    dressCodes: dressCodeRecommendations,
    scorecards: imageScorecards,
  },
  personalBrand: {
    archetypes: brandArchetypes,
    elements: brandElements,
    consistencyRules: brandConsistencyRules,
    healthMetrics: brandHealthMetrics,
  },
  publicPerception: {
    dimensions: perceptionDimensions,
    voterSegments,
    dataCollectionMethods,
    gaps: perceptionGaps,
  },
  rumorSuppression: {
    threatAssessment: threatAssessments,
    attackPatterns: attackPatternCharacteristics,
    suppressionTactics,
    responseApproaches,
  },
};

export default candidateSupremacyData;
