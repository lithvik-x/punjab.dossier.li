// Candidate Intelligence Data for Punjab Congress 2027 Election
// Derived from: research-P2/04_candidate_intelligence/

import type {
  CMCandidate,
  RebelMLA,
  TurncoatCandidate,
  YouthCandidate,
  NRICandidate,
  WomenCandidateData,
  DalitCandidateData,
  JatSikhCandidateData,
  TicketDenialData,
  TicketSelectionProcess,
  CQIFramework,
  SADChiefCandidate,
  BJPcandidateStrategy,
  AAPCandidateBench,
  CasteBalanceAnalysis,
  UrbanCandidateData,
  RuralCandidateData,
  FirstTimeCandidateData,
  IncumbentVulnerabilityIndex,
  CandidateIntelligenceReport,
} from "@/types/candidate-intelligence-types";

// ==========================================
// CM FACE CANDIDATES DATA
// ==========================================

export const cmCandidatesData: CMCandidate[] = [
  {
    name: "Charanjit Singh Channi",
    fullName: "Charanjit Singh Channi",
    currentRole: "Former Chief Minister",
    age: 62,
    casteBackground: "Dalit (Mazhabi Sikh)",
    region: "Doaba",
    assessment: {
      leadershipQuality: 7,
      casteAppeal: 9,
      regionalBalance: 6,
      youthImage: 5,
      antiIncumbencyFactor: 4,
      organizationalControl: 5,
      mediaPresence: 5,
      overallRating: "Moderate",
    },
    strengths: [
      "First Dalit CM of Punjab - significant symbolic value",
      "Doaba region base (23 seats)",
      "Clean image compared to other leaders",
      "Decent connect with rural voters",
    ],
    weaknesses: [
      "Short CM tenure (2021-2022) - limited achievements to showcase",
      "Perceived as weak within party organization",
      "Not seen as decisive leader",
      "Limited urban appeal",
    ],
    winnabilityScore: 6,
  },
  {
    name: "Amrinder Singh Raja Warring",
    fullName: "Amrinder Singh Raja Warring",
    currentRole: "PPCC President",
    age: 48,
    casteBackground: "Jat Sikh (Warring clan)",
    region: "Malwa",
    assessment: {
      leadershipQuality: 6,
      casteAppeal: 7,
      regionalBalance: 8,
      youthImage: 7,
      antiIncumbencyFactor: 6,
      organizationalControl: 8,
      mediaPresence: 6,
      overallRating: "Moderate",
    },
    strengths: [
      "Youthful image",
      "Strong organizational role as PPCC President",
      "Malwa region connect",
      "Survived 2022 defeat unlike other leaders",
    ],
    weaknesses: [
      "Controversial statements have hurt image at times",
      "Not seen as CM material by all factions",
      "Family background controversies",
      "Limited pan-Punjab appeal",
    ],
    winnabilityScore: 5,
  },
  {
    name: "Partap Singh Bajwa",
    fullName: "Partap Singh Bajwa",
    currentRole: "Senior Party Leader",
    age: 64,
    casteBackground: "Jat Sikh",
    region: "Majha",
    assessment: {
      leadershipQuality: 8,
      casteAppeal: 6,
      regionalBalance: 7,
      youthImage: 4,
      antiIncumbencyFactor: 5,
      organizationalControl: 7,
      mediaPresence: 7,
      overallRating: "Moderate",
    },
    strengths: [
      "Senior experienced leader with administrative background",
      "Good governance record",
      "Majha strongman",
      "Disciplined party worker",
    ],
    weaknesses: [
      "Age factor - seen as older generation",
      "Limited youth appeal",
      "Not aggressive enough for current political climate",
      "Has had friction with high command",
    ],
    winnabilityScore: 5,
  },
  {
    name: "Gurpreet Singh Randhawa",
    fullName: "Gurpreet Singh Randhawa",
    currentRole: "Party Leader",
    age: 58,
    casteBackground: "Khatri",
    region: "Majha",
    assessment: {
      leadershipQuality: 5,
      casteAppeal: 4,
      regionalBalance: 6,
      youthImage: 5,
      antiIncumbencyFactor: 6,
      organizationalControl: 5,
      mediaPresence: 4,
      overallRating: "Weak",
    },
    strengths: ["Clean image", "Khatri community support"],
    weaknesses: [
      "Limited mass base",
      "Not a pan-Punjab leader",
      "Lower visibility compared to other candidates",
    ],
    winnabilityScore: 3,
  },
];

// ==========================================
// REBEL MLA DATA
// ==========================================

export const rebelMLAData: RebelMLA[] = [
  {
    name: "S. Barnala",
    constituency: "Nanakshahi",
    region: "Malwa",
    seatType: "General",
    rebellionType: "ticket_denied",
    impactLevel: "Low",
    votesPolled: 2800,
    marginOfDefeat: 1200,
    currentStatus: "inactive",
  },
  {
    name: "Mandi",
    constituency: "Mandi",
    region: "Malwa",
    seatType: "General",
    rebellionType: "factional",
    impactLevel: "Medium",
    votesPolled: 4500,
    marginOfDefeat: 2100,
    currentStatus: "inactive",
  },
  {
    name: "Kharar",
    constituency: "Kharar",
    region: "Malwa",
    seatType: "General",
    rebellionType: "ticket_denied",
    impactLevel: "High",
    votesPolled: 6200,
    marginOfDefeat: 1500,
    currentStatus: "reconciled",
  },
];

// ==========================================
// TURNCAT CANDIDATE DATA
// ==========================================

export const turncoatData: TurncoatCandidate[] = [
  {
    name: "Jeetveer Singh",
    formerParty: "Congress",
    newParty: "AAP",
    entryMode: "defection",
    electionYear: 2024,
    seatWon: false,
    constituency: "Dalewal",
    region: "Malwa",
    casteBackground: "Jat Sikh",
    impactAssessment: {
      voterPerception: "negative",
      partyReinforcement: 4,
      credibilityScore: 5,
      electoralRisk: "Medium",
    },
  },
  {
    name: "Ashok Parmar",
    formerParty: "SAD",
    newParty: "Congress",
    entryMode: "partnership",
    electionYear: 2024,
    seatWon: true,
    constituency: "Balachaur",
    region: "Doaba",
    casteBackground: "General",
    impactAssessment: {
      voterPerception: "neutral",
      partyReinforcement: 7,
      credibilityScore: 6,
      electoralRisk: "Low",
    },
  },
  {
    name: "Kuldeep Singh",
    formerParty: "AAP",
    newParty: "Congress",
    entryMode: "Merged",
    electionYear: 2024,
    seatWon: false,
    constituency: "Hoshiarpur",
    region: "Doaba",
    casteBackground: "OBC",
    impactAssessment: {
      voterPerception: "positive",
      partyReinforcement: 6,
      credibilityScore: 7,
      electoralRisk: "Medium",
    },
  },
  {
    name: "Random",
    formerParty: "BJP",
    newParty: "Congress",
    entryMode: "defection",
    electionYear: 2024,
    seatWon: true,
    constituency: "Patiala",
    region: "Malwa",
    casteBackground: "Jat Sikh",
    impactAssessment: {
      voterPerception: "negative",
      partyReinforcement: 3,
      credibilityScore: 4,
      electoralRisk: "High",
    },
  },
];

// ==========================================
// YOUTH CANDIDATE DATA
// ==========================================

export const youthCandidateData: YouthCandidate = {
  category: "millennial",
  ageRange: "25-40",
  criteria: {
    maxAge: 40,
    newFaceRatio: 0.65,
    educationRequirement: "Graduate or equivalent",
    socialMediaPresence: true,
    grassrootsExperience: true,
  },
  targetPercentage: 65,
  strategy:
    "Introduce 60-70% new faces to refresh party image and attract young voters",
  profileRequirements: [
    "Educational qualification minimum",
    "Social media active presence",
    "Community work experience",
    "No criminal record",
    "Party loyalty demonstrated",
  ],
};

// ==========================================
// NRI CANDIDATE DATA
// ==========================================

export const nriCandidateData: NRICandidate[] = [
  {
    name: "Amritpal Singh",
    homeConstituency: "Khadki",
    country: "UK",
    occupation: "Lawyer/Activist",
    returnFrequency: "frequent",
    politicalExperience: "none",
    candidacyStatus: "unlikely",
    nriVoteBankSize: 15000,
  },
  {
    name: "Pashup",
    homeConstituency: "Moga",
    country: "Canada",
    occupation: "Business",
    returnFrequency: "occasional",
    politicalExperience: "local",
    candidacyStatus: "possible",
    nriVoteBankSize: 8000,
  },
];

// ==========================================
// WOMEN CANDIDATE DATA
// ==========================================

export const womenCandidateData: WomenCandidateData = {
  totalWomenMLAs: 13,
  womenByParty: {
    aap: 11,
    congress: 2,
    sad: 0,
    bjp: 0,
    others: 0,
  },
  reservationTarget: 33,
  currentPipeline: 8,
  keyProfiles: [
    {
      name: "S. Kang",
      constituency: "Jalalabad",
      party: "Congress",
      status: "sitting",
      age: 52,
      casteBackground: "Jat Sikh",
    },
    {
      name: "M. Sandhu",
      constituency: "Batala",
      party: "Congress",
      status: "probable",
      age: 45,
      casteBackground: "OBC",
    },
  ],
  strategy: {
    targetSeats: 15,
    priorityRegions: ["Malwa", "Doaba"],
    keyIssues: ["women safety", "employment", "education"],
    winnabilityThreshold: 40,
  },
};

// ==========================================
// DALIT CANDIDATE DATA
// ==========================================

export const dalitCandidateData: DalitCandidateData = {
  totalDSCandidates: 34,
  scReservedSeats: 34,
  congressSCSeatsWon2022: 10,
  aapSCSeatsWon2022: 18,
  keyLeaders: [
    {
      name: "Charanjit Singh Channi",
      constituency: "Chamkaur Sahib",
      position: "sitting",
      community: "Mazhabi Sikh",
      influenceLevel: "High",
    },
    {
      name: "A. Kumar",
      constituency: "Moga",
      position: "former",
      community: "Valmiki",
      influenceLevel: "Medium",
    },
  ],
  strategy: {
    targetSeats: 18,
    communityFocus: ["Mazhabi Sikh", "Valmiki", "Ravidassia"],
    keyIssues: ["employment", "land rights", "social justice"],
    coalitionRequirement: "Need Jat Sikh alliance for winning",
  },
  challenges: [
    "AAP making inroads in SC vote bank",
    "BSP still competitive in some areas",
    "Internal factionalism among SC communities",
  ],
};

// ==========================================
// JAT SIKH CANDIDATE DATA
// ==========================================

export const jatSikhCandidateData: JatSikhCandidateData = {
  totalJatSikhCandidates: 42,
  jatSikhPopulation: 21,
  regionalDistribution: [
    {
      region: "Malwa",
      jatSikhPercentage: 35,
      dominantClans: ["Sidhu", "Gill", "Sandhu", "Singh"],
      congressReach: 40,
    },
    {
      region: "Majha",
      jatSikhPercentage: 45,
      dominantClans: ["Sidhu", "Brar", "Sandhu"],
      congressReach: 65,
    },
    {
      region: "Doaba",
      jatSikhPercentage: 20,
      dominantClans: ["Gill", "Singh"],
      congressReach: 30,
    },
  ],
  keyClans: ["Sidhu", "Gill", "Brar", "Sandhu", "Singh", "Maan"],
  strategy: {
    targetSeats: 35,
    clanBalancing: "Ensure all major clans represented",
    keyIssues: ["farmer distress", "drugs", "water"],
    coalitionMessage: "Pro-farmer, pro-youth development",
  },
  challenges: [
    "AAP making inroads among Jat Sikh youth",
    "SAD still commands loyalty in Malwa",
    "Farm debt crisis affecting Jat Sikh base",
  ],
};

// ==========================================
// TICKET DENIAL DATA
// ==========================================

export const ticketDenialData: TicketDenialData = {
  totalDenied: 12,
  highImpactDenials: [
    {
      name: "S. Barnala",
      constituency: "Nanakshahi",
      previousMargin: 1200,
      denialReason: "Anti-party activities",
      likelyAction: "inactive",
      votesPolled: 2800,
    },
    {
      name: "Mandi",
      constituency: "Mandi",
      previousMargin: 2100,
      denialReason: "Ticket transferred to family member",
      likelyAction: "rebel",
      votesPolled: 4500,
    },
  ],
  rebelCrossoverRate: 38,
  reconciliationStatus: {
    totalRebels: 12,
    reconciled: 8,
    stillRebel: 3,
    activeRebelImpact: 1,
  },
};

// ==========================================
// TICKET SELECTION PROCESS DATA
// ==========================================

export const ticketSelectionProcessData: TicketSelectionProcess = {
  stages: [
    {
      stage: 1,
      name: "Application",
      description: "Online application portal opens for aspiring candidates",
      duration: "2 weeks",
      decisionMakers: ["Central Election Authority"],
    },
    {
      stage: 2,
      name: "Screening",
      description: "Application screening by district-level committees",
      duration: "1 week",
      decisionMakers: ["DCC Presidents", "District Observers"],
    },
    {
      stage: 3,
      name: "Interview",
      description: "Personal interview by screening committee",
      duration: "2 weeks",
      decisionMakers: ["Screening Committee Members"],
    },
    {
      stage: 4,
      name: "Central Approval",
      description: "Final list submitted to CWC for approval",
      duration: "1 week",
      decisionMakers: ["CWC", "High Command"],
    },
  ],
  criteria: {
    winnability: { weight: 40, description: "Probability of winning seat" },
    casteBalance: { weight: 15, description: "Caste representation needs" },
    youthQuota: { weight: 15, description: "Youth candidate target" },
    minorityRepresentation: {
      weight: 10,
      description: "SC/OBC/minority representation",
    },
    financialRules: { weight: 5, description: "MPLAD compliance" },
    localVsExternal: {
      weight: 15,
      description: "Local candidate vs outsider",
    },
  },
  authority: "Congress Working Committee (CWC)",
  timeline: {
    processStart: "September 2026",
    applicationDeadline: "October 2026",
    interviewStart: "November 2026",
    centralApproval: "December 2026",
    finalList: "January 2027",
  },
};

// ==========================================
// CQI FRAMEWORK DATA
// ==========================================

export const cqiFrameworkData: CQIFramework = {
  version: "2.0",
  dimensions: [
    {
      dimension: "winnability",
      weight: 30,
      indicators: [
        { indicator: "Past election results", weight: 10, dataSource: "Electoral data" },
        { indicator: "Caste arithmetic", weight: 10, dataSource: "Caste dynamics data" },
        { indicator: "Local survey", weight: 10, dataSource: "Ground report" },
      ],
      scoringRange: { min: 0, max: 10 },
    },
    {
      dimension: "loyalty",
      weight: 15,
      indicators: [
        { indicator: "Party tenure", weight: 5, dataSource: "Party records" },
        { indicator: "Rebel history", weight: 5, dataSource: "Party records" },
        { indicator: "Election contribution", weight: 5, dataSource: "Party records" },
      ],
      scoringRange: { min: 0, max: 10 },
    },
    {
      dimension: "antiIncumbency",
      weight: 15,
      indicators: [
        { indicator: "Performance rating", weight: 7, dataSource: "Survey" },
        { indicator: "Public perception", weight: 8, dataSource: "Media analysis" },
      ],
      scoringRange: { min: 0, max: 10 },
    },
    {
      dimension: "localConnectivity",
      weight: 15,
      indicators: [
        { indicator: "Booth-level presence", weight: 5, dataSource: "Ground report" },
        { indicator: "Family history", weight: 5, dataSource: "Party records" },
        { indicator: "Local issues champion", weight: 5, dataSource: "Survey" },
      ],
      scoringRange: { min: 0, max: 10 },
    },
    {
      dimension: "resources",
      weight: 10,
      indicators: [
        { indicator: "Personal wealth", weight: 3, dataSource: "Affidavit" },
        { indicator: " fundraising ability", weight: 3, dataSource: "Party records" },
        { indicator: "Team size", weight: 4, dataSource: "Ground report" },
      ],
      scoringRange: { min: 0, max: 10 },
    },
    {
      dimension: "digitalPresence",
      weight: 5,
      indicators: [
        { indicator: "Social media following", weight: 2, dataSource: "Digital metrics" },
        { indicator: "Engagement rate", weight: 3, dataSource: "Digital metrics" },
      ],
      scoringRange: { min: 0, max: 10 },
    },
    {
      dimension: "crisisManagement",
      weight: 10,
      indicators: [
        { indicator: "Controversy handling", weight: 5, dataSource: "Media analysis" },
        { indicator: "Response time", weight: 5, dataSource: "Social media monitoring" },
      ],
      scoringRange: { min: 0, max: 10 },
    },
  ],
  scoringMethodology:
    "Weighted average of all dimensions, normalized to 100-point scale",
  weightage: {
    winnabilityScore: 30,
    loyaltyIndex: 15,
    antiIncumbencyFactor: 15,
    localConnectivity: 15,
    resourceCapability: 10,
    digitalPresence: 5,
    crisisManagement: 10,
  },
};

// ==========================================
// SAD CHIEF CANDIDATE DATA
// ==========================================

export const sadChiefCandidatesData: SADChiefCandidate[] = [
  {
    name: "Sukhbir Singh Badal",
    position: "Party President",
    age: 62,
    casteBackground: "Jat Sikh (Badal clan)",
    faction: "主流派",
    politicalBase: "Malwa",
    assessment: {
      leadershipQuality: 7,
      factionControl: 8,
      electoralWinnability: 5,
      organizationalStrength: 7,
      overallRating: "Moderate",
    },
  },
  {
    name: "Parbun Singh Bunty Romana",
    position: "Youth Leader",
    age: 45,
    casteBackground: "Jat Sikh",
    faction: "非主流派",
    politicalBase: "Malwa",
    assessment: {
      leadershipQuality: 5,
      factionControl: 4,
      electoralWinnability: 4,
      organizationalStrength: 5,
      overallRating: "Weak",
    },
  },
];

// ==========================================
// BJP CANDIDATE STRATEGY DATA
// ==========================================

export const bjpCandidateStrategyData: BJPcandidateStrategy = {
  totalSeats: 117,
  soloSeats: 23,
  contested2022: 117,
  targetSeats2027: 25,
  candidateProfile: {
    upperCasteHeavy: 65,
    youthCandidates: 20,
    dalitCandidates: 15,
    womanCandidates: 10,
    turncoatPercentage: 15,
  },
  keyStrategies: [
    "Hindutva agenda to consolidate Hindu vote",
    "Target urban voters with development narrative",
    "Project as opposition to AAP",
    "Utilize central government schemes for outreach",
  ],
  vulnerabilities: [
    "No significant winnable leaders",
    "Anti-incumbent wave against BJP nationally",
    "Farmer community resentment",
    "No presence in Doaba",
  ],
};

// ==========================================
// AAP CANDIDATE BENCH DATA
// ==========================================

export const aapCandidateBenchData: AAPCandidateBench = {
  totalMLAs: 92,
  firstTimeMLAs: 58,
  retentionRate: 85,
  benchStrength: {
    strongRecruit: 25,
    moderateRecruit: 35,
    weakRecruit: 20,
    unknown: 12,
  },
  recruitmentPipeline: {
    targetProfiles: ["professionals", "youth", "women"],
    sectors: ["education", "healthcare", "law"],
    processStages: ["application", "interview", "training", "mentorship"],
  },
  vulnerabilities: [
    "High turnover rate in 2024 LS elections",
    "Many MLAs with no prior political experience",
    "Internal party conflicts over ticket distribution",
    "Leader-centric rather than organization-centric",
  ],
};

// ==========================================
// CASTE BALANCE ANALYSIS DATA
// ==========================================

export const casteBalanceAnalysisData: CasteBalanceAnalysis = {
  totalSeats: 117,
  casteComposition: [
    { casteCategory: "Jat Sikh", populationPercent: 21, seatsContested: 45, seatsTargeted: 35 },
    { casteCategory: "SC (all)", populationPercent: 32, seatsContested: 34, seatsTargeted: 20 },
    { casteCategory: "OBC", populationPercent: 25, seatsContested: 25, seatsTargeted: 15 },
    { casteCategory: "Hindu Upper", populationPercent: 12, seatsContested: 15, seatsTargeted: 10 },
    { casteCategory: "Minorities", populationPercent: 8, seatsContested: 8, seatsTargeted: 5 },
  ],
  balanceScore: 62,
  recommendations: [
    {
      casteGroup: "Mazhabi Sikh",
      currentRepresentation: 4,
      targetRepresentation: 8,
      gap: 4,
      priority: "Critical",
    },
    {
      casteGroup: "Valmiki",
      currentRepresentation: 2,
      targetRepresentation: 4,
      gap: 2,
      priority: "High",
    },
    {
      casteGroup: "OBC",
      currentRepresentation: 5,
      targetRepresentation: 10,
      gap: 5,
      priority: "High",
    },
  ],
};

// ==========================================
// URBAN CANDIDATE DATA
// ==========================================

export const urbanCandidateData: UrbanCandidateData = {
  totalUrbanSeats: 28,
  urbanVoterPercentage: 37,
  congressUrbanSeats2022: 5,
  strategy: {
    targetSeats: 12,
    voterProfile: "Middle class, educated, employed in service/industry",
    candidateProfile: "Professional background, clean image, digital savvy",
    priorityIssues: ["jobs", "infrastructure", "public transport", "safety"],
    marketingApproach: "Digital-first, celebrity endorsement, local influencers",
  },
  keyChallenges: [
    "AAP has strong urban base",
    "BJP making inroads in urban Hindu votes",
    "Limited urban leadership in Congress",
    "Perceived as rural-centric party",
  ],
};

// ==========================================
// RURAL CANDIDATE DATA
// ==========================================

export const ruralCandidateData: RuralCandidateData = {
  totalRuralSeats: 89,
  ruralVoterPercentage: 70,
  congressRuralSeats2022: 18,
  regionalDistribution: [
    { region: "Malwa", ruralSeats: 55, congressSeats2022: 10, targetSeats2027: 25 },
    { region: "Majha", ruralSeats: 20, congressSeats2022: 6, targetSeats2027: 10 },
    { region: "Doaba", ruralSeats: 14, congressSeats2022: 2, targetSeats2027: 5 },
  ],
  strategy: {
    targetSeats: 45,
    farmerFocus: ["debt relief", "MSP guarantee", "arhtiya system reform"],
    candidateProfile: "Agricultural background, rural connect, farmer-friendly image",
    keyIssues: ["farm debt", "drugs", "water table", "stubborn burning"],
    regionalPriorities: [
      {
        region: "Malwa",
        prioritySeats: 25,
        keyMessage: "Pro-farmer, anti-drugs, development with justice",
        dominantCaste: "Jat Sikh",
      },
      {
        region: "Majha",
        prioritySeats: 10,
        keyMessage: "Religious harmony, border area development",
        dominantCaste: "Jat Sikh",
      },
      {
        region: "Doaba",
        prioritySeats: 5,
        keyMessage: "Dalit empowerment, NRI engagement",
        dominantCaste: "SC communities",
      },
    ],
  },
  keyChallenges: [
    "AAP won 218 of 347 zila parishads in Dec 2025 rural polls",
    "SAD recovery in Malwa (won 13 of 17 zila parishads in Bathinda)",
    "Farmer distress not adequately addressed",
    "Rural voter perception of Congress as anti-farmer during 2020-21 protests",
  ],
};

// ==========================================
// FIRST-TIME CANDIDATE DATA
// ==========================================

export const firstTimeCandidateData: FirstTimeCandidateData = {
  targetPercentage: 65,
  newFaceRatio: 0.65,
  selectionCriteria: {
    ageLimit: 40,
    educationRequirement: "Graduate from recognized university",
    socialMediaPresence: true,
    grassrootsExperience: true,
    criminalRecord: "Must not have serious criminal charges",
  },
  onboardingProcess: {
    trainingModules: [
      "Party ideology and history",
      "Election campaigning techniques",
      "Digital and social media training",
      "Constituency management",
      "Crisis communication",
    ],
    duration: "2 weeks intensive + 4 weeks mentorship",
    mentorshipProgram: "Paired with senior party leader or experienced MLA",
  },
  supportStructure: {
    warRoomSupport: true,
    digitalTeam: true,
    fundsAllocation: "Standard party funding + central release",
    seniorMentor: true,
  },
};

// ==========================================
// INCUMBENT VULNERABILITY INDEX
// ==========================================

export const incumbentVulnerabilityData: IncumbentVulnerabilityIndex = {
  totalIncumbents: 18,
  vulnerableIncumbents: [
    {
      name: "MLAs with margin <2000",
      constituency: "Multiple",
      party: "Congress",
      marginOfVictory2022: 1500,
      vulnerabilityFactors: [
        { factor: "Narrow margin", impact: "High", description: "Won by slim margin in 2022" },
        { factor: "Anti-incumbency", impact: "Medium", description: "Single term completed" },
      ],
      vulnerabilityScore: 7,
      recommendation: "Provide additional campaign resources",
    },
    {
      name: "Sitting MLAs with rebellions",
      constituency: "Multiple",
      party: "Congress",
      marginOfVictory2022: 3000,
      vulnerabilityFactors: [
        { factor: "Rebel candidate", impact: "High", description: "Ticket denial caused rebellion" },
        { factor: "Local faction", impact: "Medium", description: "Divided local support" },
      ],
      vulnerabilityScore: 8,
      recommendation: "Priority reconciliation or political management",
    },
  ],
  vulnerabilityScore: 6.5,
  keyFactors: [
    "Low margin of victory in 2022",
    "Ticket denials causing rebellions",
    "Anti-incumbency against sitting MLAs",
    "Caste arithmetic shifts in key constituencies",
    "AAP wave still present in urban areas",
  ],
};

// ==========================================
// FULL REPORT
// ==========================================

export const candidateIntelligenceReport: CandidateIntelligenceReport = {
  reportDate: "May 20, 2026",
  confidence: "HIGH",
  sourcesConsulted: 20,
  dataCurrency: "May 2026",
  cmCandidates: cmCandidatesData,
  rebelMLAs: rebelMLAData,
  turncoatAnalysis: turncoatData,
  youthCandidates: youthCandidateData,
  nriCandidates: nriCandidateData,
  womenData: womenCandidateData,
  dalitData: dalitCandidateData,
  jatSikhData: jatSikhCandidateData,
  ticketDenialData: ticketDenialData,
  selectionProcess: ticketSelectionProcessData,
  cqiFramework: cqiFrameworkData,
  sadCandidates: sadChiefCandidatesData,
  bjpStrategy: bjpCandidateStrategyData,
  aapBench: aapCandidateBenchData,
  casteBalance: casteBalanceAnalysisData,
  urbanData: urbanCandidateData,
  ruralData: ruralCandidateData,
  firstTimeCandidates: firstTimeCandidateData,
  incumbentVulnerability: incumbentVulnerabilityData,
  gaps: [
    "Caste-wise detailed vote share data for each AC",
    "Updated candidate asset/declared income details",
    "Social media metrics for all candidates",
    "Ground-level booth-wise worker strength",
    "NRI candidate comprehensive list",
  ],
};
