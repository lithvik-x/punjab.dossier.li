"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { CAMPAIGN_CHANNELS, KEY_ISSUES_VERIFIED } from "@/lib/constants";

// Voter Data Management (from MP8-002)
const voterDataManagement = {
  totalEligibleVoters: "~2.25 Crore",
  pollingStations: "22,000-25,000",
  votersPerBooth: "650-1,000",
  totalDatabaseCostLow: "₹67 Lakh",
  totalDatabaseCostHigh: "₹2.18 Crore",
  cloudHostingCost: "₹2-5 Lakh/year",
  dataEntryCost: "₹5-15 Lakh/cycle",
  appDevelopmentCost: "₹10-30 Lakh",
  whatsappAPICost: "₹2-10 Lakh/year",
  smsIVRCost: "₹3-13 Lakh/year",
  dataAnalyticsCost: "₹10-25 Lakh",
  surveyCost: "₹10-50 Lakh",
  shaktiAppWorkers: "4 Million+",
  congressMembersAdded2022: "2 Crore+",
};

// Digital Campaign Tools (from MP8-003, MP8-004)
const digitalCampaignData = {
  warRoomLocation: "Mohali, Sector 70",
  warRoomTeamSize: 35,
  whatsappGroups2022: "13,000+",
  whatsappMembers2022: "9.1 Lakh+",
  whatsappChannelSubscribers: "10,000+",
  messagesPerDay: 3,
  facebookWeeklyReach2022: "1.9 Crore",
  facebookEngagement2022: "77 Lakh",
  congressNationalFollowers: {
    instagram: "3.9 Million",
    twitter: "10.4 Million",
    youtube: "4.31 Million",
    facebook: "6.7 Million",
  },
  aiSpendingIndia2024: "USD 50 Million",
  aiRobocalls2024: "50 Million+",
  chatbotCost: "$3,000-15,000",
  aiInfrastructureMonthly: "₹15-50 Lakh",
  voterSegments: {
    jatSikhYouth: "20-22%",
    scVoters: "32%",
    urbanMiddleClass: "15%",
    ruralFarmers: "40%",
    womenVoters: "48%",
  },
};

// Mobile App Data (from MP8-009)
const mobileAppData = {
  bjpSaralAppDownloads: "2.9 Million+",
  ranneetiCampaigns: "1,290+",
  ranneetiStates: 13,
  customAppDevelopmentLow: "₹16-25 Lakh",
  customAppDevelopmentMid: "₹31-45 Lakh",
  customAppDevelopmentHigh: "₹54-76 Lakh",
  annualMaintenance: "₹7-14 Lakh",
  saasMonthlyCost: "₹15K-1.5 Lakh",
  masterTrainers: "50-100",
  blockCoordinators: "500-800",
  boothWorkers: "50,000-100,000",
  volunteersPerBooth: 5,
  supportVolumeInstallation: 7500,
  supportVolumeLogin: 10000,
  supportVolumeSync: 6000,
};

// Content Creation Data (from MP8-008)
const contentCreationData = {
  socialMediaGraphics: {
    unitCost: "₹500-2,000",
    quantity: "5,000+ pieces",
    totalRange: "₹25-100 Lakh",
  },
  videoProductionProfessional: {
    perMinute: "₹1-5 Lakh",
    totalRange: "₹50 Lakh-5 Crore",
  },
  videoProductionRapid: {
    perMinute: "₹10,000-50,000",
    totalRange: "₹20-100 Lakh",
  },
  memeQuickGraphics: {
    unitCost: "₹200-500",
    quantity: "10,000+",
    totalRange: "₹20-50 Lakh",
  },
  whatsappBroadcast: {
    setup: "₹5-15 Lakh",
  },
  templateLibrary: {
    annual: "₹60,000",
  },
  aiTools: {
    annual: "₹2-10 Lakh",
  },
  totalEstimate: "₹1-6 Crore",
};

// Analytics Data (from MP8-007)
const analyticsData = {
  primaryChannels: 8,
  surveyRespondentsRequired: "18.35 Lakh",
  pollingMargin: "2%",
  abTestObama2008: {
    improvement: "18.6%",
    newEmailSignups: "3 Million",
    donations: "$60 Million",
  },
  abTestObama2012: {
    tests: "500+",
    donationImprovement: "29%",
    signupImprovement: "161%",
  },
  platformCost: "₹15-25 Lakh",
  dataScienceTeam: "₹20-40 Lakh",
  surveys: "₹30-50 Lakh",
  dashboard: "₹10-15 Lakh",
  totalAnalyticsBudget: "₹75-130 Lakh",
};

export default function VoterPage() {
  const outreachMetrics = [
    { channel: "WhatsApp", sent: "45L", delivered: "42L", read: "31L", engagement: 72 },
    { channel: "Facebook", reach: "18.5L", engaged: "8.3L", engagement: 45 },
    { channel: "Instagram", reach: "12L", engaged: "8.1L", engagement: 68 },
    { channel: "Door-to-Door", contacts: "8.5L", households: "2.1L", coverage: 38 },
    { channel: "Rallies", events: 245, attendance: "12.3L", engagement: 78 },
  ];

  // === DATA FROM RESEARCH FILES ===

  // Caste Demographics (from a3-punjab-caste-sc-subcastes, a4-punjab-obc-minority-demographics)
  const casteComposition = {
    sc: { value: "31.94%", label: "SC (Scheduled Caste)", note: "Highest proportion in India" },
    jatSikh: { value: "20-25%", label: "Jat Sikh", note: "Dominant landowning caste, Malwa" },
    obc: { value: "31%", label: "OBC (Other Backward Classes)", note: "Saini, Kamboj, Labana communities" },
    upperCaste: { value: "10-12%", label: "Upper Caste Hindu", note: "Brahmin, Bania, Khatri, Rajput" },
    mazhabiSikh: { value: "30-31.5%", label: "Mazhabi Sikh", note: "Largest SC sub-caste, rural Malwa" },
    ravidasia: { value: "23-26%", label: "Ravidasia", note: "Doaba concentration, Dera Ballan link" },
    valmiki: { value: "10-11%", label: "Valmiki", note: "Urban, sanitation workers" },
    adDharmi: { value: "11-15%", label: "Ad-Dharmi", note: "SC sub-caste, agricultural laborers" },
    raiSikh: { value: "6%", label: "Rai Sikh", note: "Smallest SC sub-caste" },
  };

  // SC Voting Patterns (from a25-punjab-caste-voting-2026)
  const scVotingPatterns = {
    congressShare: "42-48%",
    aapShare2017: "8%",
    aapShare2022: "27%",
    aapGrowth: "+19 percentage points",
    bjpDalitOutreach: "Growing via OBC strategy",
    deraInfluence: "90% donations in dera areas",
    scReservedSeats: 34,
  };

  // Voter Psychology — Maslow Hierarchy (from b13-voter-psychology-influence-methodology)
  const voterPsychologyHierarchy = [
    { level: "Physiological", issues: ["Unemployment (intensity 5)", "Debt (intensity 5)", "Agricultural distress (intensity 5)"], color: "bg-red-500" },
    { level: "Safety", issues: ["Drug addiction (intensity 5)", "Health crisis (intensity 4)", "Law & order (intensity 5)"], color: "bg-orange-500" },
    { level: "Belonging", issues: ["Caste recognition (intensity 4)", "Dera networks", "Family honor politics"], color: "bg-yellow-500" },
    { level: "Esteem", issues: ["Dignity politics", "Development credit-claiming", "Representation promises"], color: "bg-green-500" },
    { level: "Self-Actualization", issues: ["Youth aspirations", "Education access", "Social justice reform"], color: "bg-blue-500" },
  ];

  // Pain Points Intensity (from b13)
  const painPointsIntensity = [
    { issue: "Drug addiction", intensity: 5, politicalSalience: "THE defining issue in rural Malwa" },
    { issue: "Youth unemployment", intensity: 5, politicalSalience: "Very High — youth desperation" },
    { issue: "Agricultural debt", intensity: 5, politicalSalience: "Very High — agrarian crisis" },
    { issue: "Water scarcity", intensity: 4, politicalSalience: "Growing — central Punjab groundwater depletion" },
    { issue: "Health crisis", intensity: 4, politicalSalience: "High — medical costs impoverish families" },
    { issue: "Education cost", intensity: 4, politicalSalience: "High — aspirational families" },
  ];

  // Influence Channel Effectiveness (from b13, b14)
  const influenceChannelMatrix = [
    { channel: "Dera Networks", reach: "High", efficacy: "Very High (bloc vote delivery)", cost: "Low", PunjabRelevance: "Force multipliers for bloc votes" },
    { channel: "Family Chains", reach: "High", efficacy: "Very High", cost: "Zero", PunjabRelevance: "Critical — family elder endorsement" },
    { channel: "Door-to-Door", reach: "Low", efficacy: "Highest", cost: "High", PunjabRelevance: "Critical in rural constituencies" },
    { channel: "WhatsApp", reach: "High", efficacy: "Medium", cost: "Low", PunjabRelevance: "Wide but unmeasurable" },
    { channel: "Religious Networks", reach: "High", efficacy: "High", cost: "Low", PunjabRelevance: "Gurudwara committees, SGPC influence" },
    { channel: "Public Meetings (Juloos)", reach: "Medium", efficacy: "High", cost: "Medium", PunjabRelevance: "Election standard" },
    { channel: "Temple/Market Visits", reach: "High", efficacy: "High", cost: "Low", PunjabRelevance: "High — religious places, haats" },
    { channel: "Phone Banking", reach: "Medium", efficacy: "Medium", cost: "Medium", PunjabRelevance: "Scalable to large voter bases" },
  ];

  // Voter Contact Conversion Rates (from b14)
  const contactConversionRates = [
    { channel: "Door-to-Door", contactToVote: "25-35%", persuasionRate: "5-10%", mobilizationLift: "15-20%" },
    { channel: "Phone Banking", contactToVote: "10-15%", persuasionRate: "3-5%", mobilizationLift: "10-15%" },
    { channel: "WhatsApp Broadcast", contactToVote: "12-18%", persuasionRate: "4-8%", mobilizationLift: "12-18%" },
    { channel: "SMS Reminder", contactToVote: "5-10%", persuasionRate: "1-3%", mobilizationLift: "5-10%" },
    { channel: "Village Announcement", contactToVote: "10-15%", persuasionRate: "2-5%", mobilizationLift: "10-15%" },
    { channel: "Family Influence", contactToVote: "20-30%", persuasionRate: "8-12%", mobilizationLift: "20-30%" },
  ];

  // Booth Classification (from b14)
  const boothClassification = [
    { type: "Safe Booth", characteristics: "Strong party base >60%", resourcePriority: "Maintain, minimal investment" },
    { type: "Contested Booth", characteristics: "Margin 5-15%", resourcePriority: "High priority, intensive contact" },
    { type: "Hostile Booth", characteristics: "Opposition base >60%", resourcePriority: "Limited investment, selective contact" },
    { type: "Floating Booth", characteristics: "No clear pattern", resourcePriority: "Research, message testing" },
    { type: "New Voter Booth", characteristics: "High first-time voter %", resourcePriority: "Voter education, engagement" },
  ];

  // Message Architecture — Appeal Types (from b13)
  const messageArchitecture = [
    { appealType: "Emotional-Anger", description: "Injustice identification, perpetrator attribution, righteous anger activation", example: "For 5 years, they watched our youth die from drugs. Every farm loan waiver was a promise broken." },
    { appealType: "Rational", description: "Problem data, solution specificity, implementation mechanism", example: "Congress promises Rs 500/quintal MSP increase. Additional Rs 25,000 annually for a 5-acre farmer." },
    { appealType: "Emotional-Hope", description: "Vision of positive future, path to achievement, collective transformation", example: "Imagine a Punjab where our children don't have to leave for Delhi. Where jobs are waiting at home." },
    { appealType: "Identity", description: "Identity recognition, group solidarity, collective interest framing", example: "A vote for our candidate is a vote for Mazhabi pride. We are 32% of Punjab — together we are powerful." },
    { appealType: "Fear", description: "Threat identification, probability assessment, consequence amplification", example: "If BJP wins, drugs will increase. Your land will be taken for SYL. Reservation will be diluted." },
    { appealType: "Moral", description: "Ethical principle statement, moral duty framing, integrity expectation", example: "Your vote is not just a choice, it's a responsibility. Vote for integrity. Vote for those who cannot vote for themselves." },
  ];

  // Dera Networks (from a23, b13)
  const deraNetworks = [
    { name: "Dera Sacha Sauda (Sirsa)", followerBase: "Cross-caste, Haryana-strong", politicalAlignment: "Historically Congress", engagement: "Direct engagement with derasar" },
    { name: "Dera Sachkhand Ballan", followerBase: "Majha region, Ravidasia community", politicalAlignment: "Shifts between parties", engagement: "Community events, Doaba concentrated" },
    { name: "Radha Soami Beas", followerBase: "Educated, urban", politicalAlignment: "A-political but network effect", engagement: "Service-oriented engagement" },
  ];

  // Dera Political Impact (from a23)
  const deraPoliticalImpact = {
    totalDeras: "9,000+",
    concentrationArea: "Doaba region (23 assembly seats)",
    scVoterConcentration: "39% in Jalandhar (SC reserved)",
    donationInfluence: "90% of donations in dera areas",
    voterDelivery: "Bloc votes on direction from Dera head",
  };

  // NRI Voter Data (from g22, a23)
  const nriVoterData = {
    totalNRIPunjab: "7 lakh (700,000)",
    totalDiasporaGlobal: "3-5 million",
    canada: "~950,000",
    usa: "~600,000+",
    uk: "~400,000-500,000",
    australia: "~300,000",
    registeredVoters2019: 393,
    actualVotesCast2019: 0,
    voterRegistrationRate: "<0.1%",
    influenceMultiplier: "5-8x through family pressure",
    doabaConcentration: "Highest per-capita NRI population",
    nriSabhaCrisis: "Jan 2026 — elections delayed, governance paralyzed",
    propertyFraud: "~50% of NRI complaints to Punjab State Commission",
  };

  // NRI Platform Usage (from g22)
  const nriPlatformUsage = [
    { platform: "WhatsApp", usage: "75-80%", ageGroup: "25-70+", contentType: "Text, voice notes, group chains", politicalUtility: "Primary family influence tool" },
    { platform: "Facebook", usage: "70-75%", ageGroup: "30-65+", contentType: "Video, live streams, groups", politicalUtility: "Community mobilization" },
    { platform: "YouTube", usage: "55-65%", ageGroup: "18-55+", contentType: "Long/short video, commentary", politicalUtility: "Punjabi news channels, political commentary" },
    { platform: "Instagram", usage: "35-45%", ageGroup: "18-40", contentType: "Reels, stories", politicalUtility: "Limited direct political influence" },
    { platform: "Twitter/X", usage: "15-25%", ageGroup: "25-55", contentType: "Text, threads", politicalUtility: "Elite influence, journalists" },
    { platform: "Telegram", usage: "10-15%", ageGroup: "20-45", contentType: "Channels, group chats", politicalUtility: "Pro-Khalistan networks" },
  ];

  // Women Voter Detailed Data (from g13, b28)
  const womenVoterDetailed = {
    totalWomenElectorate: "~1 crore (48-50% of 2.08 crore)",
    genderGap: "3-4 percentage points (narrowed from 8-10pp in 1990s)",
    turnout2022Women: "71.6%",
    turnout2022Men: "~70.5%",
    turnout2024Women: "62.28%",
    turnout2024Men: "63.27%",
    womenMLA2022: 6,
    totalMLAs: 117,
    womenMLAPercentage: "5.1%",
    scWomenShare: "~32% of Punjab population",
    topTurnout2024: [
      { constituency: "Sujanpur (Gurdaspur)", turnout: "75.75%" },
      { constituency: "Zira (Khadoor Sahib)", turnout: "71.02%" },
      { constituency: "Anandpur Sahib", turnout: "70.25%" },
    ],
    aapScheme: "Rs 1,000/month (SC: Rs 1,500) — Mukh Mantri Mawan Dhian Satikar Yojana",
    aapSchemeExcludes: "Govt employees, MPs/MLAs, income taxpayers (3-5% excluded)",
    congressBebeNanki: "Rs 61,000 per girl child (birth to graduation)",
    womenCrimeRise: "+35% gender-based violence (2019-2024 NCRB)",
    congressWomenLead2024: "16 of 37 segments (43%) where women dominated turnout",
  };

  // Age Cohort Voting Patterns (from b14)
  const ageCohortPatterns = [
    { cohort: "First-Time Voters (18-25)", share: "12-15%", priority: ["Unemployment", "Education", "Startup support"], influence: "Social media, peer networks, celebrity" },
    { cohort: "Young Adults (26-35)", share: "18-22%", priority: ["Housing", "Employment", "Healthcare"], influence: "Aspirational messaging, concrete proposals" },
    { cohort: "Established Adults (36-50)", share: "28-32%", priority: ["Children education", "Agricultural sustainability", "Family business"], influence: "Personal contact, local candidate reputation" },
    { cohort: "Mature Adults (51-65)", share: "22-25%", priority: ["Pension security", "Healthcare", "Traditional values"], influence: "Traditional media, community outreach" },
    { cohort: "Senior Citizens (65+)", share: "10-12%", priority: ["Old age security", "Healthcare", "Social respect"], influence: "Personal outreach, family recommendations" },
  ];

  // Voter Turnout Barriers (from b14)
  const turnoutBarriers = [
    { barrier: "Apathy", severity: "High", description: "All politicians same, learned helplessness" },
    { barrier: "Accessibility", severity: "Moderate", description: "Transport, elderly, disabled access to booths" },
    { barrier: "Procedural", severity: "Moderate", description: "Name not on list, wrong booth assignment" },
    { barrier: "Economic", severity: "High", description: "Paid voting, opportunity cost of a day's wages" },
    { barrier: "Social", severity: "Moderate", description: "Family opposition, caste panchayat directives" },
    { barrier: "Weather", severity: "Low", description: "Rain, summer heat, festival conflicts" },
    { barrier: "Confusion", severity: "Low", description: "Multiple elections, date confusion" },
    { barrier: "Intimidation", severity: "Moderate", description: "Booth capturing threats, cash-for-vote" },
  ];

  // Regional Seat Distribution (from s1, s2)
  const regionalSeats = [
    { region: "Malwa", seats: 69, share: "59%", description: "Decisive battleground, Jat Sikh dominance, highest farm distress" },
    { region: "Majha", seats: 27, share: "23%", description: "Amritsar, Gurdaspur; Hindu-Sikh mix, border security issues" },
    { region: "Doaba", seats: 23, share: "20%", description: "NRI belt, highest SC concentration (39% in Jalandhar), dera density" },
  ];

  // Ground Game Resources (from b14, b42)
  const groundGameResources = {
    totalBooths: "23,000+",
    votersPerBooth: "800-1,200",
    boothSevaksTarget: "25,000",
    totalBoothWorkersTarget: "1.25 lakh",
    currentBoothVolunteers: "4.2 per booth (avg)",
    targetBoothVolunteers: "8 per booth",
    pannaPramukhModel: "One worker per 10 voters",
  };

  // === MP6 MISSING DATA ADDED: 3-Contact Sequence ===
  const threeContactSequence = [
    { stage: "Awareness", timing: "T-45 to T-30 days", objective: "Name recognition, issue awareness", channels: ["WhatsApp broadcast", "Door-to-door", "Rallies"], contactRate: "100% of target voters" },
    { stage: "Persuasion", timing: "T-30 to T-10 days", objective: "Convince swing voters, address objections", channels: ["Personal outreach", "Family meetings", "Small group meetings"], contactRate: "60-70% of persuadable voters" },
    { stage: "GOTV (Get Out The Vote)", timing: "T-10 to E-Day", objective: "Turn supporters to voters, transport, last-minute push", channels: ["SMS/WhatsApp reminders", "Phone banking", "Booth-level follow-up"], contactRate: "90%+ of committed supporters" },
  ];

  // === MP6 MISSING DATA ADDED: Booth Contact Ratios ===
  const boothContactStrategy = [
    { category: "Safe Booth", margin: ">15%", contactRatio: "2:1", priority: "LOW", notes: "Maintain base, minimal incremental contact" },
    { category: "Competitive", margin: "5-15%", contactRatio: "3:1", priority: "MEDIUM", notes: "Intensive persuasion contact" },
    { category: "Battleground", margin: "2-5%", contactRatio: "4:1", priority: "HIGH", notes: "Maximum contact, personal outreach" },
    { category: "Swing Booth", margin: "<2% or undecided", contactRatio: "5:1", priority: "CRITICAL", notes: "Exhaustive contact, family-level GOTV" },
  ];

  // === MP6 MISSING DATA ADDED: Ceiling Effect ===
  const ceilingEffect = {
    finding: "5-7 contacts become counterproductive",
    threshold: "After 7 contacts, voter disengagement increases",
    data: "Contact fatigue causes 12-18% decrease in positive response",
    recommendation: "Maximum 5 contacts per voter in campaign cycle",
  };

  // === MP6 MISSING DATA ADDED: Volunteer Gaps ===
  const volunteerGaps = {
    boothSevakGap: { required: 40000, deployed: 25000, shortfall: "15,000-25,000 additional Booth Sevaks needed" },
    whatsappVolunteers: { required: 122230, deployed: 20000, shortfall: "1,02,230 WhatsApp volunteers deficit" },
    phoneBanking: { documented: "~0", note: "Phone banking volunteers virtually undocumented - major gap" },
    femaleTarget: { target: "30%", current: "~8%", gap: "Congress needs 30% female Booth Sevaks for women voter outreach" },
    shgNetwork: { potential: "SHG networks for women voter contact", note: "Self-Help Groups as force multipliers for women outreach" },
  };

  // === MP6 MISSING DATA ADDED: GOTV & Operations Budget ===
  const gotvOperationsBudget = {
    range: "Rs 75-145 crore",
    breakdown: {
      transport: "Rs 30-50 crore",
      boothAgentPayments: "Rs 15-25 crore",
      communicationCosts: "Rs 10-20 crore",
      foodAndLogistics: "Rs 8-15 crore",
      emergencyReserve: "Rs 12-35 crore",
    },
    perBooth: "Rs 30,000-60,000",
  };

  // === MP6 MISSING DATA ADDED: Election Calendar Constraints ===
  const electionConstraints = {
    harvestBlackout: {
      periods: ["Oct-Nov (Kharif harvest)", "Mar-Apr (Rabi harvest)"],
      impact: "Reduced voter availability, farm labor focused",
      mitigation: "Schedule outreach around harvest windows, night meetings",
    },
    countdown72Hour: {
      protocol: "Intensive 72-hour countdown",
      components: ["Hourly booth-level reporting", "Real-time GOTV dashboard", "Transport standby for elderly/disabled", "WhatsApp command chain activation"],
    },
  };

  // AAP Vote Share Collapse (from s1)
  const aapVoteCollapse = {
    voteShare2022: "42%",
    voteShare2024: "~26%",
    decline: "-16 percentage points",
    congress2017: "77 seats",
    congress2022: "18 seats",
    congress2024LS: "7 of 13 Lok Sabha seats",
    currentCongressPolls: "31-35%",
    currentAAPPolls: "26-28%",
  };

  // BJP Growth (from s1)
  const bjpGrowth = {
    voteShare2019: "9.63%",
    voteShare2024: "18.56%",
    growth: "+8.93 percentage points",
    strategy: "Going solo for 2027 (ending SAD-BJP alliance)",
    rajyaSabhaMPs: "6 of 7 now BJP",
  };

  // Farmer Distress Additional Data (from a16)
  const farmerDistressData = {
    avgDebtPerHousehold: "Rs 2.03 lakh",
    debtRank: "3rd highest in India (after Kerala, Andhra Pradesh)",
    farmingFamiliesInDebt: "54%+",
    totalFarmerLoans: "Rs 1.4 lakh crore",
    farmSuicides2019: 302,
    farmSuicides2023: 174,
    lastLoanWaiver: "2016",
    compensationPerSuicide: "Rs 3 lakh",
    msprocuredAtDeclaredMSP: "<15%",
    malwaRegion: "80-90% of suicides in Malwa",
    apricot2026Case: "Two brothers died March 23, 2026 — debt doubled from Rs 25L to Rs 50L",
  };

  // Drug Crisis Data (from a8, a16)
  const drugCrisisData = {
    totalUsers: "6.6 million",
    opioidDependent: "230,000",
    overdoseDeaths2024: 106,
    ndpsCases: "8,973",
    youthAffected: "75%+ youth",
    childrenUsingDrugs: "697,000",
    relapseRate: "80-90%",
    ganglandKillings2025: 31,
  };

  // SC Atrocity Data (from a16)
  const scAtrocityData = {
    cases2019: 166,
    cases2015: 147,
    rankInIndia: "5th highest for atrocities against SCs",
    nationalCommissionAlert: "May 2025 — urgent corrective steps required",
    scholarshipScam: "2023 vigilance probe delayed",
    virtualCourtroom: "India's first dedicated SC virtual courtroom — operational Jan 2026",
  };

  // Youth Migration Data (from a16, g22)
  const youthMigrationData = {
    studentsToCanada2022: "136,000",
    percentOfIndiaToCanada: "60%",
    totalBorrowedForMigration: "Rs 14,342 crore (2021-23)",
    totalAssetsSold: "Rs 5,636 crore",
    ieltsCenters: "5,000+",
    villageStudyAnandpur: "27.6% landowning households with IELTS enrollees",
    villageStudyFaridkot: "9% landowning households with members overseas",
    villageStudyTarnTaran: "16.2% landowning households with members abroad",
    villageStudyDosanjh: "~40% households have at least one member overseas (NRI village)",
    womenOutmigration: "More women than men leaving Punjab for abroad (first time)",
  };

  // Water Crisis Data (from s1, a19)
  const waterCrisisData = {
    blocksOverExploited: "115 of 153",
    districtsCritical: "70%+",
    malwaUraniumSamples: "53% exceeding limits",
    groundwaterExtraction: "156% of recharge rate",
    canalIrrigation: "5.3 million acres",
    sylCanalStatus: "Deadlocked",
  };

  // Punjab Fiscal Crisis (from a16)
  const fiscalCrisisData = {
    nitiAayogRank: "Last among 18 major states (fiscal health 2025)",
    stateDebt: "Rs 4.17 lakh crore",
    debtToGSDP: "40-45%",
    interestPayments: "Rs 28,755 crore (FY 2026-27)",
    percentRevenueDebtServicing: "~40%",
    gsdpGrowth: "6.1% vs India 7.4%",
    perCapitaIncome: "Rs 2.36 lakh",
  };

  // Voting Behavior Theory (from b32)
  const votingBehaviorTheory = [
    { theory: "Columbia School", core: "Social determinism — caste, religion, occupation shape voting", application: "Caste voting blocs, dera networks, party identification" },
    { theory: "Michigan Model", core: "Party ID + candidate image + issues (funnel of causality)", application: "AAP's candidate image overcame Congress party ID in 2022" },
    { theory: "Rational Choice", core: "Economic cost-benefit, retrospective voting", application: "Anti-incumbency punishment for perceived failures on drugs, jobs" },
    { theory: "Bounded Rationality", core: "Cognitive limits, heuristics, mental shortcuts", application: "Party loyalty as simplifying heuristic, symbol-based voting" },
  ];

  // Micro-Targeting Segments (from b14)
  const microTargetingSegments = [
    { segment: "Mazhabi Sikh (SC)", population: "8-10%", issues: ["Land rights", "Dignity", "Employment"], channel: "SCpora leaders, community meetings" },
    { segment: "Jat Sikh", population: "20-22%", issues: ["MSP", "Debt relief", "Canal water"], channel: "Mandi meetings, farmer unions" },
    { segment: "Ravidasia (Doaba)", population: "4-5%", issues: ["Dera recognition", "Business promotion", "Education"], channel: "Dera Ballan networks" },
    { segment: "OBC Communities", population: "15-18%", issues: ["Reservation", "Credit access", "Skill development"], channel: "OBC leaders, trader associations" },
    { segment: "Urban Middle Class", population: "~35-40%", issues: ["Services", "Infrastructure", "Safety"], channel: "Digital, RWA partnerships" },
  ];

  // Messenger Credibility (from b13)
  const messengerCredibility = [
    { type: "Dera Leader Endorsement", effectiveness: "Very High", note: "Bloc vote transfer" },
    { type: "Religious Figure Endorsement", effectiveness: "High", note: "Sikh community (SGPC)" },
    { type: "Family Elder Endorsement", effectiveness: "Very High", note: "Critical in conservative households" },
    { type: "Caste Elder Endorsement", effectiveness: "High", note: "Traditional voting patterns" },
    { type: "Candidate (Local)", effectiveness: "High", note: "Personal reputation, same background" },
    { type: "Expert Endorsement", effectiveness: "Medium", note: "Selective groups" },
  ];

  // Congress Factionalism Data (from s1)
  const congressFactionalism = {
    factions: ["Warring", "Bajwa", "Channi"],
    byElectionLosses: "6 of 7 last by-elections",
    aiccGagOrder: "January 2026",
    channiDemand: "More Dalit representation",
    noCMFace: "No declared CM candidate for 2027",
    groundGameRisk: "HIGH — organizational capacity to capitalize on AAP decline",
  };

  // NRI Sabha Crisis (from a23)
  const nriSabhaCrisis = {
    established: "1996/1998",
    registeredMembers: "23,000",
    presidentTermExpired: "January 4, 2026",
    currentStatus: "Elections delayed, governance paralyzed",
    courtCase: "Punjab & Haryana High Court petition filed",
    chiefPatron: "Chief Minister",
    allegations: "Constitutional violations, no AGM, no financial transparency",
  };

  // BJP NRI Strategy (from g22)
  const bjpNriStrategy = {
    diasporaMeet: "First-ever Punjabi Diaspora Meet — Chandigarh, February 2026",
    rajyaSabhaPlatform: "6 of 7 Punjab MPs now BJP",
    missionPunjab: "Amit Shah's NRI voter engagement component",
    advantage: "RSS/VHP global networks, resource advantage",
    weakness: "1984 perception problem in Sikh diaspora",
  };

  // India-Canada Tensions (from a23)
  const indiaCanadaTensions = {
    csisReport: "May 1, 2026 — India conducts foreign interference in Canada",
    confirmedActivities: ["Assassination", "Murder plots", "Extortion", "Electoral interference"],
    canadaResponse: "Liberal MPs condemned ongoing interference (Feb 2026)",
    diplomaticReset: "Modi-Carney meeting March 2026 at G7",
    impactOnPunjab: "Dual-edge: emboldens radical Sikh voices + boosts BJP anti-separatist narrative",
  };

  const nriData = {
    total: "7 lakh",
    influence: "Doaba NRI belt (23 assembly seats)",
    votingImpact: "Proxy voting, remittance influence on families",
    concern: "Canada-India interference (CSIS May 2026)",
  };

  const womenVoterData = {
    percentage: "~48%",
    turnout2022Women: "71.6%",
    turnout2022Men: "~70.5%",
    turnout2024Male: "63.27%",
    turnout2024Female: "62.28%",
    genderGap2024: "Men +0.99 pp lead",
    reversalNote: "2024 reversal from 2022 when women led by 1.1pp",
    congressAAPLead: "43%",
    congressAAPSegs: "16 of 37 Assembly segments",
    genderViolence: "+35% increase (2019-2024)",
    scheme: "Mukh Mantri Mawan Dhian Satikar Yojana: Rs 1,000/month (SC: Rs 1,500) announced March 2026",
  };

  const casteDemographics = {
    congressSC: "42-48%",
    aapDalitShare2017: "8%",
    aapDalitShare2022: "27%",
    youthElectorate: "37.4%",
  };

  const congressLeadershipGaps = {
    crisis1984: "1984 Sikh Genocide - Congress leadership gap, no senior Sikh leader at state command",
    rssOutreach2019_2024: "RSS Sikh outreach 2019-2024: 200+ Sikh morcha activations, 50+ dharam sabhas",
    jatSikhProfile: "Jat Sikh Congress voters: older, rural, farmer families with land holdings",
    congressSKMConnection: "Congress-SKM connection: 3 of 7 SKM leaders have family ties to Congress",
  };

  const ruralUrbanVoting2022 = {
    ruralCongress: "Rural Punjab voted Congress (62%)",
    urbanAAP: "Urban Punjab voted AAP (58%)",
    inversePattern: "2022 rural-Congress/urban-AAP inverse voting pattern",
  };

  // === DATA FROM MP2-009 (Booth Tier 2) ===
  const boothData = {
    totalPollingStations: "~18,000-23,000",
    registeredVoters2022: "21,499,804",
    votesPolled2022: "15,563,720",
    turnout2022: "72.15%",
    votersPerBoothStandard: "800-1,200 (ECI guideline)",
    regionalBoothDistribution: {
      malwa: { districts: 15, estimatedBooths: "~11,000-13,000" },
      majha: { districts: 4, estimatedBooths: "~3,000-4,000" },
      doaba: { districts: 4, estimatedBooths: "~2,500-3,000" },
    },
    criticalBoothCategories: {
      categoryA: { name: "Border Security Booths", districts: ["Pathankot", "Gurdaspur", "Tarn Taran", "Ferozepur", "Muktsar", "Fazilka"], estimatedBooths: "800-1,200" },
      categoryB: { name: "Urban Communal Tension", cities: ["Ludhiana", "Jalandhar", "Amritsar"], estimatedBooths: "500-800" },
      categoryC: { name: "Rural Caste Fault-Line", region: "Malwa (Jat-Dalit interface)", estimatedBooths: "600-1,000" },
      categoryD: { name: "Repeat Offender/Booth Capture", region: "Doaba", estimatedBooths: "200-400" },
    },
    partyStrongholdBooths: {
      congress: { estimatedBooths: "~4,000-5,500", characteristics: "Dalit-majority villages, urban lower-middle-class colonies" },
      aap: { estimatedBooths: "~7,000-9,000", characteristics: "Urban youth-heavy booths, middle-class colonies, new urban migrants" },
      sadBjp: { estimatedBooths: "~3,500-4,500", characteristics: "Jat Sikh-majority villages in Malwa, border belt traditional SAD voters" },
      swing: { estimatedBooths: "~3,000-4,000", characteristics: "Mixed-caste rural booths, OBC-majority areas, border region transitional booths" },
    },
    notauvBooths: {
      nationalAverage: "1.1-1.5%",
      punjabEstimate: "Slightly above national average",
      urbanNotau: "1.5-2.5%",
      ruralNotau: "0.5-1.5%",
      borderNotau: "<0.8%",
      highNotauBooths: "~1,500-2,500 booths (2%+ NOTA in 2022)",
    },
  };

  // === DATA FROM MP2-010 (Composite Tier 2) ===
  const compositeVoterTypes = {
    voterTypeTaxonomy: [
      { type: "Core AAP Supporters", estPct: "~32-35%", region: "Malwa dominant, urban", behavior2022: "Voted AAP", trajectory2027: "Stable (90% retention)" },
      { type: "Core Congress Supporters", estPct: "~15-18%", region: "Doaba, Majha pockets", behavior2022: "Voted Congress", trajectory2027: "Stable (historical party ID)" },
      { type: "Core SAD Supporters", estPct: "~10-12%", region: "Malwa, Majha", behavior2022: "Voted SAD/AAP split", trajectory2027: "Declining (SAD collapse)" },
      { type: "Core BJP Supporters", estPct: "~5-7%", region: "Urban Hindu, border", behavior2022: "Voted BJP", trajectory2027: "Growing (2024 LS surge)" },
      { type: "Anti-Incumbent AAP Voters", estPct: "~10-15%", region: "All regions", behavior2022: "Voted AGAINST Congress/SAD", trajectory2027: "HIGHLY MOBILE (now at risk)" },
      { type: "Persuadable Swing", estPct: "~8-12%", region: "Doaba, mixed urban", behavior2022: "Split AAP/Congress", trajectory2027: "DECISIVE in 2027" },
      { type: "Dalit Consolidating Voters", estPct: "~3-5%", region: "Doaba, SC-reserved seats", behavior2022: "Moved to AAP 2022", trajectory2027: "May reconsider" },
      { type: "Youth First-Time Voters", estPct: "~5-7%", region: "Urban, border districts", behavior2022: "Low turnout (57%)", trajectory2027: "Mobilization gap" },
      { type: "NRI-influenced Voters", estPct: "~3-5%", region: "Doaba, Malwa", behavior2022: "Pro-Congress historically, shifting to AAP", trajectory2027: "Proxy influence only" },
    ],
    acCategories: {
      categoryA: { name: "AAP Strongholds", acCount: "~55-60", aapVoteShare: ">45%", margin: ">15%", regions: "Malwa" },
      categoryB: { name: "Congress Strongholds", acCount: "~12-15", congressFloor: "28-35%", regions: "Doaba, Majha" },
      categoryC: { name: "True Swing/Marginal", acCount: "~20-25", margin: "<10%", regions: "Doaba dominates" },
      categoryD: { name: "AAP Vulnerable", acCount: "~15-20", margin: "Won by AAP 2022 but declining", regions: "Governance failures prominent" },
      categoryE: { name: "SAD/BJP Residual", acCount: "~5-8", coreLoyalist: "18-25%", regions: "Traditional SAD areas" },
      categoryF: { name: "NRI-Dominated", acCount: "~8-12", regions: "Doaba concentration" },
    },
    regionalSwingVoters: {
      malwa: { swingPct: "6-8%", aapFloor: "38-42%", congressCeiling: "25-28%" },
      doaba: { swingPct: "12-15%", note: "Highest swing concentration; only sub-region with genuine AAP-Congress contest" },
      majha: { swingPct: "8-10%", note: "More stable voting patterns due to religious/cultural identity" },
    },
    narrowMarginSeats: [
      { seat: "Jalandhar Central", winner: "AAP", margin: "247 votes", runnerUp: "Congress" },
      { seat: "Congress seat", margin: "466 votes", runnerUp: "AAP" },
      { seat: "Multiple seats", margin: "<2,000", note: "Small voter shifts flip these" },
      { seat: "Multiple seats", margin: "2,000-5,000", note: "Contested seats" },
    ],
    persuadableVoterTypes: {
      type1: { name: "Anti-Incumbent AAP Voters", pct: "10-15%", profile: "Rural Malwa, young families, Jat Sikh and OBC households", conversionPotential: "HIGH", acConcentration: "Malwa rural seats where AAP won by 15-20% margins" },
      type2: { name: "Dalit Consolidating Voters", pct: "3-5%", profile: "Doaba and Malwa SC-reserved seats, Mazhabi Sikh", conversionPotential: "MODERATE", acConcentration: "SC-reserved seats in Doaba" },
      type3: { name: "Young Urban Floating Voters", pct: "4-6%", profile: "First-time voters (18-22), urban, educated, NRI-aspiring", conversionPotential: "MODERATE", acConcentration: "Mohali, Jalandhar, Ludhiana, Amritsar urban" },
      type4: { name: "SAD Residual Voters", pct: "3-5%", profile: "Rural Malwa, Jat Sikh families, 45+ age group", conversionPotential: "MODERATE-HIGH", acConcentration: "Malwa rural around Bathinda, Muktsar, Mansa" },
      type5: { name: "BSP-to-AAP Dalit Switchers", pct: "2-3%", profile: "SC voters, particularly Ravidasia community in Doaba", conversionPotential: "MODERATE", acConcentration: "Doaba SC-reserved seats" },
    },
    congressVoteFloorCeiling: {
      statewideFloor: "22-25%",
      statewideWithCampaign: "28-32%",
      statewideCeiling: "35-38%",
      byRegion: {
        malwa: { floor2022: "~18-20%", floor2027: "18-22%", ceiling: "28-32%" },
        doaba: { floor2022: "~28-30%", floor2027: "28-32%", ceiling: "38-42%" },
        majha: { floor2022: "~30-33%", floor2027: "30-35%", ceiling: "40-45%" },
      },
    },
    antiIncumbentVoting: {
      malwaRural: { antiIncumbentPct: "15-25%", direction: "Against Congress (2022)", now: "May switch to anti-AAP" },
      doaba: { antiIncumbentPct: "12-18%", direction: "Against Congress (2022)", now: "May shift anti-AAP" },
      majha: { antiIncumbentPct: "10-15%", direction: "Against Congress (2022)", now: "Less anti-incumbent, more stable" },
      urbanHindu: { antiIncumbentPct: "10-15%", direction: "Against AAP (2022)", now: "Urban governance failures" },
    },
    flipMarginAnalysis: [
      { currentAAPMargin: "<2,000 votes", swingNeeded: "1-3%", seatsInCategory: "8-12" },
      { currentAAPMargin: "2,000-5,000", swingNeeded: "3-5%", seatsInCategory: "15-18" },
      { currentAAPMargin: "5,000-10,000", swingNeeded: "5-8%", seatsInCategory: "20-25" },
      { currentAAPMargin: "10,000-20,000", swingNeeded: "8-12%", seatsInCategory: "30-35" },
      { currentAAPMargin: ">20,000", swingNeeded: ">12%", seatsInCategory: "15-20" },
    ],
    partyVoteShare2022: {
      aap: { seats: 92, voteShare: "42.01%", trend: "+18.29 pp" },
      congress: { seats: 18, voteShare: "22.98%", trend: "-15.52 pp" },
      sad: { seats: 3, voteShare: "18.38%", trend: "-6.86 pp" },
      bjp: { seats: 2, voteShare: "5.96%", trend: "Combined with SAD" },
      bsp: { seats: 0, voteShare: "1.31%" },
      others: { seats: 2, voteShare: "~9.36%" },
    },
  };

  // === DATA FROM MP2-008 (NRI Tier 2) ===
  const nriDetailedData = {
    registrationStats: {
      totalNRIPunjab: "~7 lakh (700,000)",
      registeredVoters2019: 393,
      actualVotesCast2019: 0,
      voterRegistrationRate: "<0.1%",
      maleRegistered: 264,
      femaleRegistered: 129,
    },
    diasporaCountries: [
      { country: "Canada", estimatedPopulation: "~800,000", note: "Punjabi Canadians" },
      { country: "USA", estimatedPopulation: "~600,000+" },
      { country: "UK", estimatedPopulation: "~400,000-500,000" },
      { country: "Australia", estimatedPopulation: "~300,000" },
      { country: "Gulf States", estimatedPopulation: "Some presence" },
      { country: "Europe", estimatedPopulation: "France, Italy, Belgium" },
    ],
    canada2025Election: {
      punjabiOriginMPsElected: 22,
      note: "22 candidates of Punjab origin elected as MPs in Canada's 2025 federal election"
    },
    economicProfile: {
      wealthIndicator: "Significantly wealthier than domestic Punjab residents",
      propertyOwnership: "Own agricultural land, houses, commercial property in Punjab",
      politicalCatalyst: "Property disputes — 'most NRIs from Punjab left land and houses behind, which were in time usurped by relatives or intruders'",
    },
    partySupport: {
      aap: { description: "Strong NRI support in 2017 and 2022 elections; planeloads of NRIs (3,500 in 2017) flew to campaign", concerns: ["Silence on India-Canada Nijjar crisis", "Pro-Khalistan elements in support base"] },
      congress: { description: "Indian Overseas Congress (IOC) structured engagement; coordinators in UK, Europe, USA, Canada, Australia", activity: "Planning virtual strategy meeting ahead of 2027" },
      sad: { description: "Historically strong NRI support especially in Canada; significantly eroded since 2017" },
      bjp: { description: "No distinct NRI voter base; primarily Hindu NRI segments" },
    },
    canadaIndiaTensions: {
      sept2023: "Hardeep Singh Nijjar killing in Surrey, Canada",
      sept2024: "Canada named Indian envoys as 'persons of interest'; India expelled six Canadian diplomats",
      impact: {
        studentDisruption: "70% of Indian students in Canada from Punjab; study permit cuts; 21-year-old Hoshiarpur student: 'dream of studying in Canada was shattered'",
        familyAnxiety: "Deep anxiety among Punjab families with members in Canada",
        diplomaticReset: "June 2025 India-Canada reset reported",
      },
    },
    topIssues: {
      drugs: "#1 Priority — Drug abuse cited as top concern of NRI voters",
      unemployment: "Youth unemployment — NRIs acutely aware of push factors driving Punjabi youth abroad",
      propertyDisputes: "Land and property disputes when NRI property is usurped",
      justice1984: "1984 anti-Sikh riots — symbolic and emotional priority for diaspora",
      governanceCorruption: "Frustration with corruption, nepotism, misgovernance",
      immigrationAccess: "Canadian study visas and PR pathways affected by India-Canada tensions",
    },
    turnoutBarriers: [
      "Physical presence required — must travel to home AC in India",
      "No remote/express voting for NRIs",
      "Information asymmetry — many NRIs unaware of registration process (Form 6A)",
      "Cost and logistics — international travel to vote is expensive",
      "Registration barriers — passport-based verification",
    ],
  };

  // === DATA FROM MP2-007 (Marginalized Tier 2) ===
  const marginalizedVoterData = {
    disability: {
      totalPwD2022: "~1.34 lakh",
      registration: "Self-identification via voters.eci.gov.in; PwD flag in electoral roll",
      provisions: ["Postal ballot for 40%+ benchmark disability", "Pick-up and drop-off for PwD and senior voters", "SAKSHAM App for PwD voter services"],
      homeVoting: "Voters above 85 years and PwD with 40%+ benchmark disability can opt for optional home voting (since 2024)",
    },
    seniorCitizens: {
      centenarianVoters: "5,004 voters aged 100-119 years",
      superCentenarian: "205 voters aged 120+ years",
      total80Plus: "~5 million voters aged 80+",
      homeVotingAge: "85+ optional home voting",
      postalBallotAge: "80-84 years",
    },
    migrantWorkers: {
      estimatedPopulation: "30-40% of Punjab's farm workforce",
      seasonalMigrants: "12-13 lakh during peak paddy procurement season",
      totalEstimate: "20-35 lakh (no official figure)",
      voterIDIssue: "Typically hold voter IDs from native states (Bihar/UP); many NOT registered in Punjab",
      sept2025Backlash: {
        incident: "Hoshiarpur incident: alleged kidnapping, sodomy, murder of 5-year-old boy by migrant laborer",
        protests: "'Parvasi Bhajao, Punjab Bachao' slogans; panchayats in Mansa, Hoshiarpur passed resolutions demanding migrants vacate",
        impact: "Many migrants — especially in rented accommodations — fled Punjab in late September 2025",
      },
    },
  };

  // === MP6-002: Channel Effectiveness Matrix (from MP6) ===
  const channelEffectiveness = {
    channelImpact: [
      { channel: "Door-to-Door", reach: "Low-Medium", engagement: "Very High", retention: "Very High", persuasion: "Very High", costPerVoter: "₹15-30", costPerVote: "₹100-200" },
      { channel: "Phone Banking", reach: "Medium", engagement: "High", retention: "High", persuasion: "Medium-High", costPerVoter: "₹5-15", costPerVote: "₹50-100" },
      { channel: "WhatsApp", reach: "Very High", engagement: "Medium", retention: "Medium", persuasion: "Medium", costPerVoter: "₹0.50-2", costPerVote: "₹5-15" },
      { channel: "Rallies", reach: "Very High", engagement: "Low-Medium", retention: "Low", persuasion: "Low-Medium", costPerVoter: "₹5-15", costPerVote: "₹50-150" },
      { channel: "Local Meetings", reach: "Low", engagement: "High", retention: "High", persuasion: "High", costPerVoter: "₹10-25", costPerVote: "₹75-150" },
      { channel: "TV/Cable", reach: "High", engagement: "Low", retention: "Low-Medium", persuasion: "Low", costPerVoter: "₹2-5", costPerVote: "₹20-50" },
    ],
    segmentChannels: [
      { segment: "Urban Youth (18-25)", primary: "WhatsApp, Instagram", secondary: "Door-to-door", priority: "HIGH" },
      { segment: "Urban Middle Age (26-45)", primary: "WhatsApp, Facebook", secondary: "Local meetings", priority: "HIGH" },
      { segment: "Rural Youth (18-25)", primary: "WhatsApp, Folk media", secondary: "Door-to-door", priority: "HIGH" },
      { segment: "Rural Adults (26-60)", primary: "Door-to-door, rallies", secondary: "WhatsApp, folk media", priority: "VERY HIGH" },
      { segment: "SC Voters (all)", primary: "Door-to-door, dhadhi", secondary: "WhatsApp, religious", priority: "VERY HIGH" },
      { segment: "Women (all)", primary: "Women's meetings, WhatsApp", secondary: "Door-to-door", priority: "VERY HIGH" },
    ],
    phaseChannels: [
      { phase: "Pre-Launch (T-6 months)", channels: "Database building, volunteer recruitment, issue research" },
      { phase: "Launch (T-4 to 3 months)", channels: "Rallies, media, social media ads, WhatsApp broadcast" },
      { phase: "Active Campaign (T-2 months)", channels: "Door-to-door, local meetings, WhatsApp cascade, rallies" },
      { phase: "Final Sprint (T-2 weeks)", channels: "Door-to-door, GOTV calls, SMS, turnout tracking" },
      { phase: "Polling Day (T-0)", channels: "Booth workers, transport, turnout monitoring" },
    ],
  };

  // === MP6-003: GOTV Metrics (from MP6) ===
  const gotvMetrics = {
    impactByChannel: [
      { channel: "Door-to-Door", contactToVote: "25-35%", persuasionRate: "5-10%", mobilizationLift: "15-20%" },
      { channel: "Phone Banking", contactToVote: "10-15%", persuasionRate: "3-5%", mobilizationLift: "10-15%" },
      { channel: "WhatsApp Broadcast", contactToVote: "12-18%", persuasionRate: "4-8%", mobilizationLift: "12-18%" },
      { channel: "SMS Reminder", contactToVote: "5-10%", persuasionRate: "1-3%", mobilizationLift: "5-10%" },
      { channel: "Village Announcement", contactToVote: "10-15%", persuasionRate: "2-5%", mobilizationLift: "10-15%" },
      { channel: "Family Influence", contactToVote: "20-30%", persuasionRate: "8-12%", mobilizationLift: "20-30%" },
    ],
    hourlyTurnoutTargets: [
      { time: "9:00 AM", target: "15%+", action: "Worker reminder, transport" },
      { time: "11:00 AM", target: "30%+", action: "Booth intensification" },
      { time: "1:00 PM", target: "45%+", action: "Direct voter contact" },
      { time: "3:00 PM", target: "60%+", action: "GOTV push, personal calls" },
      { time: "5:00 PM", target: "75%+", action: "Final reminder, transport" },
      { time: "Close (6 PM)", target: "85%+", action: "Remaining voter transport" },
    ],
    aapModel: {
      workersPerThousand: 12,
      ratio: "1:83",
      approach: "Four-phase: Identification → Persuasion → Commitment → Turnout",
      training: "80-minute structured training per worker",
      source: "Delhi AAP 2025 model",
    },
    congressTarget: {
      workersPerThousand: "10-12",
      ratio: "1:100",
      profile: "Youth Congress, NSUI, Seva Dal members",
      technology: "App-based voter list with caste, age, gender, issue-tagged data",
    },
  };

  // === MP6-005: VRM System Requirements (from MP6) ===
  const vrmSystem = {
    voterDataPoints: [
      { category: "Demographic", fields: "Age, gender, caste, religion, family size", source: "Voter list, survey" },
      { category: "Geographic", fields: "Booth, ward, village, assembly constituency", source: "Voter list" },
      { category: "Behavioral", fields: "Past voting, participation level, contact history", source: "Campaign data, ECI" },
      { category: "Issue", fields: "Primary concern (drugs, jobs, water, etc.)", source: "Survey, conversation" },
      { category: "Influence", fields: "Community leader, social network position", source: "Network analysis" },
      { category: "Accessibility", fields: "Phone, WhatsApp, transport needs", source: "Contact records" },
    ],
    costEstimate: [
      { system: "Basic (Google Sheets + WhatsApp)", cost: "Free" },
      { system: "Mid-tier (CampaignMitra)", cost: "₹50K-5 lakh/year" },
      { system: "Enterprise (NGPVAN/Custom)", cost: "₹20 lakh+" },
    ],
  };

  // === MP10-002: NOTA as Protest Signal ===
  const notAProtestSignal = {
    nationalAverage: "1.1-1.5%",
    punjab2022: "1.2%",
    interpretation: "NOTA functions as protest vote when voters disillusioned with both major parties",
    swingIndicator: "High NOTA in 2017 → Major anti-incumbent wave (Congress lost 77→18 seats)",
    "2027Risk": "If NOTA exceeds 2%, signals voter disillusionment requiring candidate quality response",
    strategicNote: "NOTA protest voters are recoverable if candidate quality improves",
  };

  // === MP10-004: Swing Voter Timing Breakdown ===
  const swingVoterTimingBreakdown = {
    earlyDeciders: {
      percentage: "8-12%",
      timing: "T-6 months to T-2 months",
      profile: "Party loyalists, issue-based voters, elderly with stable preferences",
    },
    campaignPeriod: {
      percentage: "25-35%",
      timing: "T-2 months to T-2 weeks",
      profile: "Persuadable independents, swing voters, single-issue voters",
    },
    lateDeciders: {
      percentage: "40-50%",
      timing: "T-2 weeks to E-Day",
      profile: "Floating voters, convenience-based voters, accessibility voters, young first-timers",
    },
    note: "Late deciders are MOST susceptible to final campaign push and GOTV operations",
  };

  // === MP10-004: AAP to Congress Swing Reversal ===
  const aapToCongressSwing = {
    phenomenon: "AAP→Congress swing reversal emerging in 2024-2026",
    magnitude: "3-7% of total electorate shifting from AAP to Congress",
    conversionRate: "22-28% of AAP 2022 voters now considering Congress",
    reasons: [
      "Governance failure perception (drugs, jobs, economy)",
      "Anti-incumbency against AAP MLAs",
      "Warring organizational revival",
      "AICC High Command authority signaling stability",
    ],
    regionalConcentration: "Highest in Malwa rural seats where AAP won by 15-20% margins",
    risk: "Swing may reverse if Congress ticket distribution alienates key vote banks",
    opportunity: "Congress needs to capitalize before AAP recovers from governance slump",
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Voter Enticement
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Voter outreach • Micro-targeting • Issue-based campaigns
          </p>
        </div>
        <Badge variant="success">2.14Cr Registered Voters</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Messages Delivered"
          value="62L"
          subtitle="Digital outreach"
          change={34}
          trend="up"
          color="bg-pink-500"
        />
        <MetricCard
          title="Read Rate"
          value="71%"
          subtitle="Message engagement"
          change={8}
          trend="up"
          color="bg-blue-500"
        />
        <MetricCard
          title="Door-to-Door"
          value="38%"
          subtitle="Household coverage"
          change={12}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Event Attendance"
          value="12.3L"
          subtitle="Rally participation"
          change={23}
          trend="up"
          color="bg-purple-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Issue-Based Campaigning
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Top voter priorities driving our narrative
          </p>
          <div className="mt-6 space-y-4">
            {KEY_ISSUES_VERIFIED.slice(0, 6).map((issue, i) => (
              <div key={issue.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {i + 1}. {issue.name}
                  </span>
                  <Badge variant={issue.sentiment < -0.6 ? "danger" : issue.sentiment < -0.3 ? "warning" : "info"}>
                    {issue.sentiment < 0 ? "Negative" : "Mixed"}
                  </Badge>
                </div>
                <ProgressBar
                  label=""
                  value={100 - (i * 10)}
                  color={issue.id === "drugs" ? "bg-red-500" : "bg-blue-500"}
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Campaign Channel Effectiveness
          </h3>
          <div className="mt-6 space-y-4">
            {CAMPAIGN_CHANNELS.slice(0, 5).map((channel) => (
              <div key={channel.id} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{channel.name}</span>
                    <span className="text-sm text-slate-500">{(channel.reach / 1000000).toFixed(1)}M</span>
                  </div>
                  <ProgressBar
                    label=""
                    value={channel.engagement * 100}
                    color="bg-pink-500"
                    showPercentage={false}
                  />
                </div>
                <Badge variant={channel.engagement > 0.6 ? "success" : "info"}>
                  {channel.engagement * 100}%
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">CRITICAL: Drugs Crisis — 6.6 Million Users, 75%+ Youth Affected</p>
            <p className="text-sm text-red-600 dark:text-red-300">106 overdose deaths (2024), 8,973 NDPS cases. BJP promises &ldquo;Nasha Mukt Punjab&rdquo; in 2 years. Congress must own this narrative.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Youth Unemployment Crisis
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth unemployment</span>
              <span className="font-bold text-red-500">18-20%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">National average</span>
              <span className="font-bold text-slate-500">9.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP jobs promise</span>
              <span className="font-bold text-orange-500">1 lakh (unfulfilled)</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">Rural youth migration to cities accelerating. 697K children using drugs — pipeline issue.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Farmer Distress Data
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Farm households in debt</span>
              <span className="font-bold text-red-500">89%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Avg debt per household</span>
              <span className="font-bold text-red-500">Rs 2.03L</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Farmer suicides (2023-25)</span>
              <span className="font-bold text-red-500">2,809</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">MSP guarantee promise unfulfilled. Farm laws repealed but no legal backup.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Healthcare Emergency
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Doctor to patient ratio</span>
              <span className="font-bold text-red-500">1:7,000+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">WHO norm</span>
              <span className="font-bold text-slate-500">1:1,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Rural health crisis</span>
              <Badge variant="danger">Critical</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">Malwa cancer rate: 1 in 20 households linked to pesticide exposure. CAG Report 2025.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            NRI Voter Influence
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">NRIs from Punjab</span>
              <span className="font-bold text-purple-500">{nriData.total}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Key region</span>
              <span className="font-bold text-slate-500">{nriData.influence}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Canada interference</span>
              <Badge variant="warning">CSIS May 2026</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">{nriData.votingImpact}. NRI Sabha crisis Jan 2026.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Women Voters — 2024 Lok Sabha
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Women electorate</span>
              <span className="font-bold text-pink-500">{womenVoterData.percentage}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">2024 turnout (women)</span>
              <span className="font-bold text-pink-500">{womenVoterData.turnout2024Female}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">2024 turnout (men)</span>
              <span className="font-bold text-blue-500">{womenVoterData.turnout2024Male}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">2024 gender gap</span>
              <Badge variant="danger">{womenVoterData.genderGap2024}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Reversal note</span>
              <Badge variant="warning">{womenVoterData.reversalNote}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Congress vs AAP</span>
              <span className="font-bold text-green-500">{womenVoterData.congressAAPLead} <span className="text-xs font-normal text-slate-400">({womenVoterData.congressAAPSegs})</span></span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Gender violence</span>
              <Badge variant="danger">{womenVoterData.genderViolence}</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">{womenVoterData.scheme}</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Congress Bebe Nanki Scheme
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Total per girl</span>
              <span className="font-bold text-green-500">Rs 61,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Birth</span>
              <span className="font-bold text-slate-500">Rs 5,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">After Inter-School</span>
              <span className="font-bold text-slate-500">Rs 10,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">After Class 12</span>
              <span className="font-bold text-slate-500">Rs 25,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">After Graduation</span>
              <span className="font-bold text-slate-500">Rs 21,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Status</span>
              <Badge variant="success">Active (May 2026)</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">Vs AAP Rs 1,000/month — one-time education investment vs monthly cash transfer.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Women Media Consumption
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">WhatsApp</span>
              <Badge variant="success">75-80%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Television</span>
              <Badge variant="info">70-75%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">YouTube</span>
              <Badge variant="info">55-65%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Facebook</span>
              <Badge variant="info">45-55%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Instagram</span>
              <Badge variant="info">35-45%</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">WhatsApp is #1 channel. Punjabi TV channels (ESPN, PTC) dominate. Young women skew YouTube/Instagram.</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Outreach Campaign Matrix
        </h3>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["Channel", "Sent/Reach", "Delivered/Engaged", "Read/Attendance", "Engagement"]}
            rows={outreachMetrics.map((m) => [
              m.channel,
              (m.sent || m.reach || m.events || "-") as string,
              (m.delivered || m.engaged || m.households || "-") as string,
              (m.read || m.attendance || "-") as string,
              `${m.engagement}%`,
            ])}
          />
        </div>
      </div>

      {/* Technology & Digital Campaign Infrastructure (from MP8) */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Technology Infrastructure & Digital Campaign
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Digital tools, AI spending, and campaign technology costs
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Voter Database Cost"
            value={voterDataManagement.totalDatabaseCostHigh}
            subtitle="Total per election cycle"
            change={0}
            color="bg-cyan-500"
          />
          <MetricCard
            title="AI Spending (India 2024)"
            value="USD 50M"
            subtitle="Election AI & robocalls"
            change={0}
            color="bg-purple-500"
          />
          <MetricCard
            title="WhatsApp Groups"
            value="13,000+"
            subtitle="2022 campaign groups"
            change={0}
            color="bg-green-500"
          />
          <MetricCard
            title="WhatsApp Members"
            value="9.1 Lakh+"
            subtitle="2022 group membership"
            change={0}
            color="bg-teal-500"
          />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">War Room Setup</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Location</span>
                <span className="font-medium">{digitalCampaignData.warRoomLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Team Size</span>
                <span className="font-bold text-cyan-600">{digitalCampaignData.warRoomTeamSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Setup Cost</span>
                <span className="font-bold text-orange-500">₹15-30 Lakh</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Facebook Reach (2022)</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Weekly Reach</span>
                <span className="font-bold text-blue-600">{digitalCampaignData.facebookWeeklyReach2022}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Engagement</span>
                <span className="font-bold text-purple-600">{digitalCampaignData.facebookEngagement2022}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Mobile App Development</h4>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Low End</span>
                <span className="font-medium">{mobileAppData.customAppDevelopmentLow}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Mid Range</span>
                <span className="font-medium">{mobileAppData.customAppDevelopmentMid}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">High End</span>
                <span className="font-medium">{mobileAppData.customAppDevelopmentHigh}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Content Creation Pipeline</h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Social Graphics</span>
                <span className="font-medium">{contentCreationData.socialMediaGraphics.totalRange}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Video Production</span>
                <span className="font-medium">{contentCreationData.videoProductionProfessional.totalRange}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Meme Graphics</span>
                <span className="font-medium">{contentCreationData.memeQuickGraphics.totalRange}</span>
              </div>
              <div className="flex items-center justify-between border-t pt-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Total Estimate</span>
                <span className="font-bold text-orange-600">{contentCreationData.totalEstimate}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Analytics & Infrastructure</h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Platform Cost</span>
                <span className="font-medium">{analyticsData.platformCost}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Data Science Team</span>
                <span className="font-medium">{analyticsData.dataScienceTeam}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Surveys</span>
                <span className="font-medium">{analyticsData.surveys}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Dashboard</span>
                <span className="font-medium">{analyticsData.dashboard}</span>
              </div>
              <div className="flex items-center justify-between border-t pt-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Total Analytics</span>
                <span className="font-bold text-cyan-600">{analyticsData.totalAnalyticsBudget}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Congress Social Media Following</h4>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-pink-600">{digitalCampaignData.congressNationalFollowers.instagram}</p>
              <p className="text-sm text-slate-500">Instagram</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{digitalCampaignData.congressNationalFollowers.twitter}</p>
              <p className="text-sm text-slate-500">Twitter/X</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{digitalCampaignData.congressNationalFollowers.youtube}</p>
              <p className="text-sm text-slate-500">YouTube</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-700">{digitalCampaignData.congressNationalFollowers.facebook}</p>
              <p className="text-sm text-slate-500">Facebook</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Voter ID Collection</h4>
          <p className="mt-2 text-2xl font-bold text-pink-500">67%</p>
          <p className="text-sm text-slate-500">Target: 95%</p>
          <ProgressBar label="" value={67} color="bg-pink-500" showPercentage={false} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">EPIC Linked Mobile</h4>
          <p className="mt-2 text-2xl font-bold text-blue-500">43%</p>
          <p className="text-sm text-slate-500">Critical for SMS alerts</p>
          <ProgressBar label="" value={43} color="bg-blue-500" showPercentage={false} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Booth Volunteers</h4>
          <p className="mt-2 text-2xl font-bold text-green-500">4.2</p>
          <p className="text-sm text-slate-500">Avg per booth (target: 8)</p>
          <ProgressBar label="" value={52} color="bg-green-500" showPercentage={false} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Issue Awareness</h4>
          <p className="mt-2 text-2xl font-bold text-purple-500">58%</p>
          <p className="text-sm text-slate-500">Voters recall Congress msg</p>
          <ProgressBar label="" value={58} color="bg-purple-500" showPercentage={false} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Caste Demographics
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Congress SC reach</span>
              <span className="font-bold text-orange-500">{casteDemographics.congressSC}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP Dalit share (2017)</span>
              <span className="font-bold text-slate-500">{casteDemographics.aapDalitShare2017}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP Dalit share (2022)</span>
              <span className="font-bold text-green-500">{casteDemographics.aapDalitShare2022}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP Dalit growth</span>
              <Badge variant="success">+19pp (2017-2022)</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">AAP Dalit share grew 8% to 27% in 5 years - fastest gainer among SC voters.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Youth Electorate
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth (18-29) share</span>
              <span className="font-bold text-purple-500">{casteDemographics.youthElectorate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth unemployment</span>
              <Badge variant="danger">18-20%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP appeal to youth</span>
              <Badge variant="success">High</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">Over 1/3 of electorate is young. AAP dominates among first-time voters.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            2022 Rural-Urban Voting Pattern
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Rural Punjab</span>
              <Badge variant="success">{ruralUrbanVoting2022.ruralCongress}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Urban Punjab</span>
              <Badge variant="info">{ruralUrbanVoting2022.urbanAAP}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Pattern</span>
              <Badge variant="warning">Inverse</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">Clear rural-urban divide in 2022 results - Congress dominated rural, AAP dominated urban seats.</p>
        </div>
      </div>

      <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">CRITICAL: Congress Leadership Gap - 1984 Sikh Genocide Legacy</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">No senior Sikh leader at state command. Congress-SKM connection: 3 of 7 SKM leaders have family ties to Congress. RSS Sikh outreach 2019-2024: 200+ Sikh morcha activations, 50+ dharam sabhas.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Jat Sikh Congress Voter Profile
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Demographic</span>
              <span className="font-bold text-amber-600">Jat Sikh voters</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Age profile</span>
              <Badge variant="warning">Older (45+)</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Geography</span>
              <Badge variant="info">Rural</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Occupation</span>
              <Badge variant="info">Farmer families</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Land holdings</span>
              <Badge variant="success">Medium-large</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">Core Congress rural vote bank. Farmer unions, SKM connections. Responsive to MSP and debt relief messaging.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            RSS Sikh Outreach (2019-2024)
          </h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Sikh morcha activations</span>
              <span className="font-bold text-red-500">200+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Dharam sabhas</span>
              <span className="font-bold text-red-500">50+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Target demographic</span>
              <Badge variant="warning">Jat Sikh youth</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Congress impact</span>
              <Badge variant="danger">Leadership vacuum</Badge>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-500">RSS systematically expanding Sikh base. Congress has no counter-social infrastructure in rural Sikh belts.</p>
        </div>
      </div>

      {/* ================================================
          NEW SECTIONS FROM RESEARCH FILES
          ================================================ */}

      {/* Caste Composition Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Punjab Caste Composition — Full Breakdown
        </h3>
        <p className="text-sm text-slate-500">From a3-punjab-caste-sc-subcastes, a4-punjab-obc-minority-demographics</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "SC (Scheduled Caste)", value: casteComposition.sc.value, note: casteComposition.sc.note, color: "text-red-500" },
            { label: "OBC", value: casteComposition.obc.value, note: casteComposition.obc.note, color: "text-orange-500" },
            { label: "Jat Sikh", value: casteComposition.jatSikh.value, note: casteComposition.jatSikh.note, color: "text-amber-500" },
            { label: "Upper Caste Hindu", value: casteComposition.upperCaste.value, note: casteComposition.upperCaste.note, color: "text-blue-500" },
            { label: "Mazhabi Sikh", value: casteComposition.mazhabiSikh.value, note: "Largest SC sub-caste, rural Malwa", color: "text-purple-500" },
            { label: "Ravidasia", value: casteComposition.ravidasia.value, note: "Doaba concentration, Dera Ballan link", color: "text-green-500" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{item.label}</span>
                <span className={`font-bold ${item.color}`}>{item.value}</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Seat Distribution */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Regional Seat Distribution
          </h3>
          <p className="text-sm text-slate-500">Malwa, Majha, Doaba — three electoral regions</p>
          <div className="mt-4 space-y-3">
            {regionalSeats.map((r) => (
              <div key={r.region} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{r.region}</span>
                <div className="flex items-center gap-2">
                  <Badge variant="info">{r.seats} seats ({r.share})</Badge>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">Malwa is the decisive battleground with 69 seats — Jat Sikh dominance, highest farm distress, 80-90% of suicides.</p>
        </div>

        {/* Micro-Targeting Segments */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Micro-Targeting Segments
          </h3>
          <p className="text-sm text-slate-500">From b14-voter-contact-optimization-framework</p>
          <div className="mt-4 space-y-3">
            {microTargetingSegments.map((seg) => (
              <div key={seg.segment} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{seg.segment}</span>
                <Badge variant="info">{seg.population}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Age Cohort Patterns */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Age Cohort Voting Patterns
          </h3>
          <p className="text-sm text-slate-500">From b14-microtargeting-turnout-contact-framework</p>
          <div className="mt-4 space-y-2">
            {ageCohortPatterns.map((cohort) => (
              <div key={cohort.cohort} className="rounded border border-slate-100 p-2 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{cohort.cohort}</span>
                  <Badge variant="info">{cohort.share}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-400">Issues: {cohort.priority.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Voter Psychology Maslow Hierarchy */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Psychology — Maslow Hierarchy Applied to Political Behavior
        </h3>
        <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {voterPsychologyHierarchy.map((level) => (
            <div key={level.level} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <div className={`inline-block rounded px-2 py-1 text-xs font-bold text-white ${level.color}`}>
                {level.level}
              </div>
              <ul className="mt-2 space-y-1">
                {level.issues.map((issue) => (
                  <li key={issue} className="text-xs text-slate-600 dark:text-slate-400">• {issue}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Pain Points Intensity */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Pain Points — Intensity Matrix
          </h3>
          <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
          <div className="mt-6 space-y-4">
            {painPointsIntensity.map((point) => (
              <div key={point.issue}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{point.issue}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-red-500">Intensity {point.intensity}/5</span>
                    <Badge variant="danger">Very High</Badge>
                  </div>
                </div>
                <ProgressBar label="" value={point.intensity * 20} color="bg-red-500" showPercentage={false} />
                <p className="mt-1 text-xs text-slate-400">{point.politicalSalience}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Influence Channel Matrix */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Influence Channel Effectiveness Matrix
          </h3>
          <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
          <div className="mt-6 overflow-x-auto">
            <DataTable
              headers={["Channel", "Reach", "Efficacy", "Punjab Relevance"]}
              rows={influenceChannelMatrix.map((c) => [
                c.channel, c.reach, c.efficacy, c.PunjabRelevance
              ])}
            />
          </div>
        </div>
      </div>

      {/* Voter Contact Conversion Rates */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Contact — Conversion & Mobilization Rates
        </h3>
        <p className="text-sm text-slate-500">From b14-microtargeting-turnout-contact-framework</p>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["Channel", "Contact-to-Vote", "Persuasion Rate", "Mobilization Lift"]}
            rows={contactConversionRates.map((c) => [
              c.channel, c.contactToVote, c.persuasionRate, c.mobilizationLift
            ])}
          />
        </div>
      </div>

      {/* Booth Classification */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Booth Classification for Resource Allocation
          </h3>
          <p className="text-sm text-slate-500">From b14-microtargeting-turnout-contact-framework</p>
          <div className="mt-6 space-y-4">
            {boothClassification.map((booth) => (
              <div key={booth.type} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{booth.type}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{booth.characteristics}</p>
                <p className="mt-1 text-xs text-blue-500">Resource: {booth.resourcePriority}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Turnout Barriers */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Voter Turnout Barriers
          </h3>
          <p className="text-sm text-slate-500">From b14-microtargeting-turnout-contact-framework</p>
          <div className="mt-6 space-y-3">
            {turnoutBarriers.map((barrier) => (
              <div key={barrier.barrier} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{barrier.barrier}</span>
                <div className="flex items-center gap-2">
                  <Badge variant={barrier.severity === "High" ? "danger" : barrier.severity === "Moderate" ? "warning" : "info"}>
                    {barrier.severity}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-400">{ }</p>
        </div>
      </div>

      {/* Message Architecture */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Message Architecture — Appeal Types
        </h3>
        <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {messageArchitecture.map((msg) => (
            <div key={msg.appealType} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <span className="inline-block rounded bg-pink-100 px-2 py-1 text-xs font-bold text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                {msg.appealType}
              </span>
              <p className="mt-2 text-xs text-slate-500">{msg.description}</p>
              <p className="mt-2 rounded bg-slate-50 p-2 text-xs italic text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                &ldquo;{msg.example.substring(0, 80)}...&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Messenger Credibility */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Messenger Credibility Framework
        </h3>
        <p className="text-sm text-slate-500">From b13-voter-psychology-influence-methodology</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {messengerCredibility.map((m) => (
            <div key={m.type} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{m.type}</span>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant="success">Effectiveness: {m.effectiveness}</Badge>
              </div>
              <p className="mt-1 text-xs text-slate-400">{m.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dera Networks */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Dera Networks — Political Influence
          </h3>
          <p className="text-sm text-slate-500">From a23-punjab-nri-political-influence-2026, b13-voter-psychology-influence-methodology</p>
          <div className="mt-4 space-y-3">
            {deraNetworks.map((dera) => (
              <div key={dera.name} className="rounded-lg border border-slate-100 p-3 dark:border-slate-700">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{dera.name}</span>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="text-xs">
                    <span className="text-slate-400">Followers: </span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">{dera.followerBase}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-400">Alignment: </span>
                    <span className="font-medium text-slate-600 dark:text-slate-300">{dera.politicalAlignment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded bg-purple-50 p-3 dark:bg-purple-900/20">
            <p className="text-sm font-bold text-purple-700 dark:text-purple-400">Dera Political Impact:</p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              <span>Total Deras: <strong>{deraPoliticalImpact.totalDeras}</strong></span>
              <span>SC in Jalandhar: <strong>{deraPoliticalImpact.scVoterConcentration}</strong></span>
              <span>Concentration: <strong>{deraPoliticalImpact.concentrationArea}</strong></span>
              <span>Donation Influence: <strong>{deraPoliticalImpact.donationInfluence}</strong></span>
            </div>
          </div>
        </div>

        {/* NRI Voter Data */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            NRI Voter Data — Complete Profile
          </h3>
          <p className="text-sm text-slate-500">From a23-punjab-nri-political-influence-2026, g22-nri-digital-outreach-mobilization-2026</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Total NRI Punjab</span>
              <span className="font-bold text-purple-500">{nriVoterData.totalNRIPunjab}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Global Diaspora</span>
              <span className="font-bold text-purple-500">{nriVoterData.totalDiasporaGlobal}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded bg-slate-50 p-2 text-xs dark:bg-slate-800">
                <span className="text-slate-400">Canada: </span><strong>{nriVoterData.canada}</strong>
              </div>
              <div className="rounded bg-slate-50 p-2 text-xs dark:bg-slate-800">
                <span className="text-slate-400">USA: </span><strong>{nriVoterData.usa}</strong>
              </div>
              <div className="rounded bg-slate-50 p-2 text-xs dark:bg-slate-800">
                <span className="text-slate-400">UK: </span><strong>{nriVoterData.uk}</strong>
              </div>
              <div className="rounded bg-slate-50 p-2 text-xs dark:bg-slate-800">
                <span className="text-slate-400">Australia: </span><strong>{nriVoterData.australia}</strong>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Registered Voters (2019)</span>
              <Badge variant="danger">{nriVoterData.registeredVoters2019}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Actual Votes Cast (2019)</span>
              <Badge variant="danger">0</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Voter Registration Rate</span>
              <Badge variant="warning">{nriVoterData.voterRegistrationRate}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Influence Multiplier</span>
              <Badge variant="success">{nriVoterData.influenceMultiplier}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">NRI Sabha Crisis</span>
              <Badge variant="danger">{nriVoterData.nriSabhaCrisis}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* NRI Platform Usage */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          NRI Platform Usage — Digital Channel Preferences
        </h3>
        <p className="text-sm text-slate-500">From g22-nri-digital-outreach-mobilization-2026</p>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["Platform", "Usage %", "Age Group", "Content Type", "Political Utility"]}
            rows={nriPlatformUsage.map((p) => [p.platform, p.usage, p.ageGroup, p.contentType, p.politicalUtility])}
          />
        </div>
      </div>

      {/* Women Voter Detailed */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Women Voters — Comprehensive Data
          </h3>
          <p className="text-sm text-slate-500">From g13-women-voter-microtargeting-research-2026, b28-women-voting-gender-politics</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Total Women Electorate</span>
              <span className="font-bold text-pink-500">{womenVoterDetailed.totalWomenElectorate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Gender Gap (narrowed from 8-10pp)</span>
              <Badge variant="info">{womenVoterDetailed.genderGap}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">2022 Turnout (women)</span>
              <span className="font-bold text-green-500">{womenVoterDetailed.turnout2022Women}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">2022 Turnout (men)</span>
              <span className="font-bold text-blue-500">{womenVoterDetailed.turnout2022Men}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Women MLAs 2022</span>
              <Badge variant="warning">{womenVoterDetailed.womenMLA2022} of 117 ({womenVoterDetailed.womenMLAPercentage})</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Crime against women rise</span>
              <Badge variant="danger">{womenVoterDetailed.womenCrimeRise}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Congress lead (segments)</span>
              <Badge variant="success">{womenVoterDetailed.congressWomenLead2024}</Badge>
            </div>
            <div className="mt-3 rounded bg-pink-50 p-3 dark:bg-pink-900/20">
              <p className="text-xs font-bold text-pink-700 dark:text-pink-400">Top Turnout 2024 Lok Sabha:</p>
              {womenVoterDetailed.topTurnout2024.map((t) => (
                <p key={t.constituency} className="text-xs text-pink-600 dark:text-pink-300">{t.constituency}: {t.turnout}</p>
              ))}
            </div>
          </div>
        </div>

        {/* AAP Vote Share Collapse */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            AAP Vote Share Collapse — 2022 to 2026
          </h3>
          <p className="text-sm text-slate-500">From s1-cross-reference-validation</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP Vote Share 2022</span>
              <span className="font-bold text-red-500">{aapVoteCollapse.voteShare2022}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AAP Vote Share 2024</span>
              <span className="font-bold text-red-400">{aapVoteCollapse.voteShare2024}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Decline</span>
              <Badge variant="danger">{aapVoteCollapse.decline}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Congress Seats 2017</span>
              <span className="font-bold text-green-500">{aapVoteCollapse.congress2017}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Congress Seats 2022</span>
              <span className="font-bold text-red-400">{aapVoteCollapse.congress2022}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Congress LS Seats 2024</span>
              <Badge variant="success">{aapVoteCollapse.congress2024LS}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Current Congress Polls</span>
              <Badge variant="info">{aapVoteCollapse.currentCongressPolls}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Current AAP Polls</span>
              <Badge variant="warning">{aapVoteCollapse.currentAAPPolls}</Badge>
            </div>
          </div>
          <div className="mt-4 rounded bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs font-bold text-red-700 dark:text-red-400">CRITICAL FINDING:</p>
            <p className="text-xs text-red-600 dark:text-red-300">AAP&apos; 2022 mandate collapsed far more rapidly than framework anticipated. Congress must consolidate anti-AAP vote.</p>
          </div>
        </div>
      </div>

      {/* BJP Growth & Congress Factionalism */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            BJP Growth — Solo for 2027
          </h3>
          <p className="text-sm text-slate-500">From s1-cross-reference-validation</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">BJP Vote Share 2019</span>
              <span className="font-bold text-slate-500">{bjpGrowth.voteShare2019}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">BJP Vote Share 2024</span>
              <span className="font-bold text-green-500">{bjpGrowth.voteShare2024}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Growth</span>
              <Badge variant="success">{bjpGrowth.growth}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">2027 Strategy</span>
              <Badge variant="danger">{bjpGrowth.strategy}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Rajya Sabha MPs</span>
              <Badge variant="info">{bjpGrowth.rajyaSabhaMPs}</Badge>
            </div>
          </div>
          <div className="mt-4 rounded bg-orange-50 p-3 dark:bg-orange-900/20">
            <p className="text-xs font-bold text-orange-700 dark:text-orange-400">SAD Split (August 2025):</p>
            <p className="text-xs text-orange-600 dark:text-orange-300">Sukhbir Badal faction vs Giani Harpreet Singh&apos;s SAD (Punar Surjit) — organizational collapse creates opportunity for Congress.</p>
          </div>
        </div>

        {/* Congress Factionalism */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Congress Factionalism — Organizational Risk
          </h3>
          <p className="text-sm text-slate-500">From s1-cross-reference-validation</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Factions</span>
              <Badge variant="warning">{congressFactionalism.factions.join(", ")}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">By-election Losses</span>
              <Badge variant="danger">{congressFactionalism.byElectionLosses}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">AICC Gag Order</span>
              <Badge variant="warning">{congressFactionalism.aiccGagOrder}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Channi Demand</span>
              <Badge variant="info">{congressFactionalism.channiDemand}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">CM Face Declared</span>
              <Badge variant="danger">NO — {congressFactionalism.noCMFace}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Ground Game Risk</span>
              <Badge variant="danger">{congressFactionalism.groundGameRisk}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Farmer Distress Additional Data */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Farmer Distress — Complete Data
          </h3>
          <p className="text-sm text-slate-500">From a16-punjab-social-issues-2026</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Avg Debt per Household</span>
              <span className="font-bold text-red-500">{farmerDistressData.avgDebtPerHousehold}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Debt Rank in India</span>
              <Badge variant="danger">{farmerDistressData.debtRank}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Farming Families in Debt</span>
              <Badge variant="danger">{farmerDistressData.farmingFamiliesInDebt}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Total Farmer Loans</span>
              <span className="font-bold text-red-500">{farmerDistressData.totalFarmerLoans}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Farm Suicides 2019</span>
              <span className="font-bold text-slate-500">{farmerDistressData.farmSuicides2019}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Farm Suicides 2023</span>
              <span className="font-bold text-red-400">{farmerDistressData.farmSuicides2023}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Last Loan Waiver</span>
              <Badge variant="warning">{farmerDistressData.lastLoanWaiver}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">MSP Procured at Declared MSP</span>
              <Badge variant="danger">{farmerDistressData.msprocuredAtDeclaredMSP}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Malwa Region Suicides</span>
              <Badge variant="danger">{farmerDistressData.malwaRegion}</Badge>
            </div>
          </div>
          <div className="mt-4 rounded bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs font-bold text-red-700 dark:text-red-400">RECENT CASE (March 23, 2026):</p>
            <p className="text-xs text-red-600 dark:text-red-300">Two farmer brothers in Kotkapura died by suicide — debt doubled from Rs 25 lakh to Rs 50 lakh. Potato crop failure. Compensation: Rs 3 lakh.</p>
          </div>
        </div>

        {/* Drug Crisis Complete Data */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Drug Crisis — Complete Data
          </h3>
          <p className="text-sm text-slate-500">From a8-punjab-drugs-crime-statistics-2026, a16-punjab-social-issues-2026</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Total Drug Users</span>
              <span className="font-bold text-red-500">{drugCrisisData.totalUsers}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Opioid Dependent</span>
              <span className="font-bold text-red-400">{drugCrisisData.opioidDependent}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Overdose Deaths 2024</span>
              <Badge variant="danger">{drugCrisisData.overdoseDeaths2024}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">NDPS Cases</span>
              <span className="font-bold text-slate-500">{drugCrisisData.ndpsCases}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth Affected</span>
              <Badge variant="danger">{drugCrisisData.youthAffected}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Children Using Drugs</span>
              <Badge variant="danger">{drugCrisisData.childrenUsingDrugs}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Relapse Rate</span>
              <Badge variant="warning">{drugCrisisData.relapseRate}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Gangland Killings 2025</span>
              <Badge variant="danger">{drugCrisisData.ganglandKillings2025}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* SC Atrocity & Water Crisis */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            SC Atrocity Cases — Rising Trend
          </h3>
          <p className="text-sm text-slate-500">From a16-punjab-social-issues-2026</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Punjab Rank in India</span>
              <Badge variant="danger">{scAtrocityData.rankInIndia}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Cases 2019</span>
              <span className="font-bold text-red-500">{scAtrocityData.cases2019}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Cases 2015</span>
              <span className="font-bold text-slate-500">{scAtrocityData.cases2015}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Trend</span>
              <Badge variant="danger">Rising</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">NCSC Alert</span>
              <Badge variant="warning">{scAtrocityData.nationalCommissionAlert}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Scholarship Scam</span>
              <Badge variant="danger">{scAtrocityData.scholarshipScam}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Virtual Courtroom</span>
              <Badge variant="info">{scAtrocityData.virtualCourtroom}</Badge>
            </div>
          </div>
        </div>

        {/* Water Crisis */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Water Crisis — Groundwater Emergency
          </h3>
          <p className="text-sm text-slate-500">From a19-punjab-water-agriculture-crisis-2026, s1-cross-reference-validation</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Blocks Over-Exploited</span>
              <span className="font-bold text-red-500">{waterCrisisData.blocksOverExploited}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Districts Critical</span>
              <Badge variant="danger">{waterCrisisData.districtsCritical}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Malwa Uranium Samples</span>
              <Badge variant="danger">{waterCrisisData.malwaUraniumSamples}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Groundwater Extraction</span>
              <Badge variant="danger">{waterCrisisData.groundwaterExtraction}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Canal Irrigation</span>
              <span className="font-bold text-slate-500">{waterCrisisData.canalIrrigation}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">SYL Canal Status</span>
              <Badge variant="warning">{waterCrisisData.sylCanalStatus}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Youth Migration */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Youth Migration — Canada & Overseas
          </h3>
          <p className="text-sm text-slate-500">From a16-punjab-social-issues-2026, g22-nri-digital-outreach-mobilization-2026</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Students to Canada (2022)</span>
              <span className="font-bold text-red-500">{youthMigrationData.studentsToCanada2022}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">% of All India to Canada</span>
              <Badge variant="danger">{youthMigrationData.percentOfIndiaToCanada}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Total Borrowed (2021-23)</span>
              <span className="font-bold text-red-400">{youthMigrationData.totalBorrowedForMigration}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Assets Sold (2021-23)</span>
              <span className="font-bold text-slate-500">{youthMigrationData.totalAssetsSold}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">IELTS Centers</span>
              <Badge variant="info">{youthMigrationData.ieltsCenters}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Women Outmigration</span>
              <Badge variant="warning">{youthMigrationData.womenOutmigration}</Badge>
            </div>
          </div>
          <div className="mt-4 rounded bg-blue-50 p-3 dark:bg-blue-900/20">
            <p className="text-xs font-bold text-blue-700 dark:text-blue-400">Village Studies (Landowning Households with IELTS/Members Abroad):</p>
            <p className="text-xs text-blue-600 dark:text-blue-300">Anandpur: 27.6% | Faridkot: 9% | Tarn Taran: 16.2% | Dosanjh Kalan: ~40% (NRI village)</p>
          </div>
        </div>

        {/* Punjab Fiscal Crisis */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Punjab Fiscal Crisis — Economic Indicators
          </h3>
          <p className="text-sm text-slate-500">From a5-punjab-economic-indicators-2026, a16-punjab-social-issues-2026</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">NITI Aayog Fiscal Rank</span>
              <Badge variant="danger">LAST of 18 major states (2025)</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">State Debt</span>
              <span className="font-bold text-red-500">{fiscalCrisisData.stateDebt}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Debt-to-GSDP</span>
              <Badge variant="danger">{fiscalCrisisData.debtToGSDP}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Interest Payments (FY26-27)</span>
              <span className="font-bold text-red-400">{fiscalCrisisData.interestPayments}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Revenue on Debt Servicing</span>
              <Badge variant="warning">{fiscalCrisisData.percentRevenueDebtServicing}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">GSDP Growth</span>
              <span className="font-bold text-slate-500">{fiscalCrisisData.gsdpGrowth} (India: {fiscalCrisisData.gsdpGrowth})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Per Capita Income</span>
              <span className="font-bold text-slate-500">{fiscalCrisisData.perCapitaIncome}</span>
            </div>
          </div>
        </div>
      </div>

      {/* NRI Sabha Crisis & India-Canada Tensions */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            NRI Sabha Crisis & India-Canada Tensions
          </h3>
          <p className="text-sm text-slate-500">From a23-punjab-nri-political-influence-2026</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">NRI Sabha Established</span>
              <span className="font-bold text-slate-500">{nriSabhaCrisis.established}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Registered Members</span>
              <Badge variant="info">{nriSabhaCrisis.registeredMembers}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">President Term Expired</span>
              <Badge variant="danger">{nriSabhaCrisis.presidentTermExpired}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Current Status</span>
              <Badge variant="danger">Elections delayed, paralyzed</Badge>
            </div>
          </div>
          <div className="mt-4 rounded bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs font-bold text-red-700 dark:text-red-400">CSIS Report (May 1, 2026):</p>
            <p className="text-xs text-red-600 dark:text-red-300">India confirmed conducting foreign interference in Canada — assassination, murder plots, extortion. Liberal MPs condemned ongoing interference (Feb 2026).</p>
          </div>
        </div>

        {/* BJP NRI Strategy */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            BJP NRI Strategy — Accelerated Push
          </h3>
          <p className="text-sm text-slate-500">From g22-nri-digital-outreach-mobilization-2026</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Diaspora Meet</span>
              <Badge variant="danger">{bjpNriStrategy.diasporaMeet}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Rajya Sabha Platform</span>
              <Badge variant="info">{bjpNriStrategy.rajyaSabhaPlatform}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Mission Punjab</span>
              <Badge variant="info">{bjpNriStrategy.missionPunjab}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">BJP Advantage</span>
              <Badge variant="info">{bjpNriStrategy.advantage}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">BJP Weakness</span>
              <Badge variant="warning">{bjpNriStrategy.weakness}</Badge>
            </div>
          </div>
          <div className="mt-4 rounded bg-orange-50 p-3 dark:bg-orange-900/20">
            <p className="text-xs font-bold text-orange-700 dark:text-orange-400">Congress IOC Status:</p>
            <p className="text-xs text-orange-600 dark:text-orange-300">Chairman: Sam Pitroda (reappointed June 2024). 25+ country chapters. Rahul Gandhi met IOC Europe Dec 2025. Structural intent exists but execution gap vs BJP&apos;s resource advantage.</p>
          </div>
        </div>
      </div>

      {/* Voting Behavior Theories */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voting Behavior Theories — Punjab Application
        </h3>
        <p className="text-sm text-slate-500">From b32-voting-behavior-theories-models</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {votingBehaviorTheory.map((theory) => (
            <div key={theory.theory} className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <span className="inline-block rounded bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                {theory.theory}
              </span>
              <p className="mt-2 text-xs text-slate-500">{theory.core}</p>
              <p className="mt-2 text-xs italic text-slate-400">Application: {theory.application}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ground Game Resources */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Ground Game — Booth-Level Resources
        </h3>
        <p className="text-sm text-slate-500">From b14-microtargeting-turnout-contact-framework, b42-ground-game-booth-operations</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <span className="text-sm text-slate-500">Total Booths</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{groundGameResources.totalBooths}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <span className="text-sm text-slate-500">Voters per Booth</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{groundGameResources.votersPerBooth}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <span className="text-sm text-slate-500">Booth Sevaks Target</span>
            <p className="text-2xl font-bold text-green-500">{groundGameResources.boothSevaksTarget}</p>
          </div>
          <div className="rounded-lg border border-slate-100 p-4 dark:border-slate-700">
            <span className="text-sm text-slate-500">Total Workers Target</span>
            <p className="text-2xl font-bold text-green-500">{groundGameResources.totalBoothWorkersTarget}</p>
          </div>
        </div>
        <div className="mt-4 rounded bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm font-bold text-green-700 dark:text-green-400">Panna Pramukh Model:</p>
          <p className="mt-1 text-xs text-green-600 dark:text-green-300">One worker per 10 voters. Current avg: {groundGameResources.currentBoothVolunteers} per booth. Target: {groundGameResources.targetBoothVolunteers} per booth.</p>
        </div>
      </div>

      {/* AAP CASTE-COMMUNITY COALITION DATA - from MP3-002 */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
          AAP Caste-Community Support Coalition (2022 Peak)
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          From Lokniti-CSDS post-poll survey 2022 (MP3-002); coalition showing significant erosion by 2026
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">OBC Sikh Support</p>
            <p className="text-2xl font-bold text-red-600">56%</p>
            <p className="text-xs text-slate-500">+32pp from 2017</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Dalit Sikh Support</p>
            <p className="text-2xl font-bold text-red-600">Strong Majority</p>
            <p className="text-xs text-slate-500">Significant shift from Congress</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Jat Sikh Support</p>
            <p className="text-2xl font-bold text-red-600">Strong Majority</p>
            <p className="text-xs text-slate-500">Major shift from SAD</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Hindu OBC Support</p>
            <p className="text-2xl font-bold text-red-600">~80%</p>
            <p className="text-xs text-slate-500">Strong majority</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Hindu Upper Castes</p>
            <p className="text-2xl font-bold text-slate-600">~33%</p>
            <p className="text-xs text-slate-500">1 in 3; shifted from Congress</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Muslim Voters</p>
            <p className="text-2xl font-bold text-green-600">Strong Majority</p>
            <p className="text-xs text-slate-500">Shifted from SAD</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Hindu Dalits</p>
            <p className="text-2xl font-bold text-slate-600">~33%</p>
            <p className="text-xs text-slate-500">Mixed support</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">SC Population (Punjab)</p>
            <p className="text-2xl font-bold text-slate-600">32%</p>
            <p className="text-xs text-slate-500">AAP failed to fully convert</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-red-200 bg-red-100/50 p-3 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-600">2026 Erosion Assessment: Coalition fracturing</p>
          <p className="text-xs text-slate-600 mt-1">Rural voters (Malwa): 26% vote share in 2024 LS (down from 43% in 2022). Dalit vote largely remained with BSP/Congress. Women voters disillusioned by broken Rs 1,000/month promise. "Aam Aadmi turned Khaas" (entitled) narrative emerged June 2024.</p>
        </div>
      </div>

      {/* AAP REGIONAL STRENGTH ANALYSIS - from MP3-002, MP3-009 */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">
          AAP Regional Strength Analysis (2022 vs 2026)
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          From MP3-009 constituency-specific research
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-sm font-bold text-green-700 dark:text-green-400">MALWA — AAP Fortress</p>
            <p className="mt-2 text-2xl font-bold text-green-600">66/69</p>
            <p className="text-xs text-slate-500">AAP seats won in 2022 (95.7%)</p>
            <div className="mt-2 text-xs text-slate-600">
              <p>Highest margins: Budhlada (75,277), Bathinda Urban (63,581), Mansa (63,323), Dhuri (58,206)</p>
              <p className="mt-1">57 of 92 AAP wins had margins 20,000-75,000</p>
            </div>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <p className="text-sm font-bold text-yellow-700 dark:text-yellow-400">MAJHA — AAP Competitive</p>
            <p className="mt-2 text-2xl font-bold text-yellow-600">5-6</p>
            <p className="text-xs text-slate-500">AAP seats won in 2022 (~24%)</p>
            <div className="mt-2 text-xs text-slate-600">
              <p>Border districts: Amritsar, Gurdaspur, Pathankot</p>
              <p>Margins 25,000-43,000 in top seats</p>
              <p>Urban Sikh voter base more traditionally Congress/SAD</p>
            </div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm font-bold text-red-700 dark:text-red-400">DOABA — AAP Desert</p>
            <p className="mt-2 text-2xl font-bold text-red-600">1</p>
            <p className="text-xs text-slate-500">AAP seat (Sham Charausi, 21,356 margin)</p>
            <div className="mt-2 text-xs text-slate-600">
              <p>Congress stronghold; only AAP loss to full conversion failure</p>
              <p>Highest SC concentration (39% in Jalandhar SC reserved)</p>
              <p>Dera Ballan influence; BTO legacy</p>
              <p>NRI heartland but AAP failed to penetrate</p>
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">2027 Seat Projections (Opinion Polls, May 2026)</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>AAP realistic range:</span><span className="font-bold text-red-600">30-37-52 (Low-Mid-High)</span></div>
              <div className="flex justify-between"><span>Congress range:</span><span className="font-bold text-green-600">45-55-70 (Low-Mid-High)</span></div>
              <div className="flex justify-between"><span>SAD+BJP combined:</span><span className="font-bold text-orange-600">31-32% vote share</span></div>
              <div className="flex justify-between"><span>AAP's own claim:</span><span className="font-bold text-slate-600">100+ seats (Manish Sisodia)</span></div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">AAP Safe Seat Count (2027)</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between"><span>Realistic safe seats:</span><span className="font-bold text-red-600">35-45 (down from 57 in 2022)</span></div>
              <div className="flex justify-between"><span>At-risk seats (&lt;10,000 margin):</span><span className="font-bold text-orange-600">~35 seats</span></div>
              <div className="flex justify-between"><span>Opinion poll floor:</span><span className="font-bold text-orange-600">25-35 seats (worst case)</span></div>
            </div>
          </div>
        </div>

        {/* MP2 SCENARIO ANALYSIS - from MP2-SYNTHESIS */}
        <div className="mt-4 rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
          <p className="text-sm font-medium text-purple-700 dark:text-purple-400">2027 Scenario Analysis (MP2-SYNTHESIS)</p>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
              <p className="text-xs font-bold text-green-700 dark:text-green-400">BEST CASE - Congress 65-75 seats</p>
              <p className="mt-1 text-xs text-green-600 dark:text-green-300">Anti-incumbency peaks, excellent candidate selection, caste coalition consolidation, CM face decision doesn't fracture party</p>
            </div>
            <div className="rounded-lg bg-yellow-100 p-3 dark:bg-yellow-900/40">
              <p className="text-xs font-bold text-yellow-700 dark:text-yellow-400">BASE CASE - Congress 50-58 seats</p>
              <p className="mt-1 text-xs text-yellow-600 dark:text-yellow-300">Normal anti-incumbency, average candidate selection, BJP does not surge beyond projections</p>
            </div>
            <div className="rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
              <p className="text-xs font-bold text-red-700 dark:text-red-400">WORST CASE - Congress 38-45 seats</p>
              <p className="mt-1 text-xs text-red-600 dark:text-red-300">AAP recovers on development narrative, Congress candidate selections cause rebellions, internal fractures over CM face</p>
            </div>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Congress Hidden Voter Buffer: 7-13%</p>
              <p className="text-xs text-slate-500">Unmobilized supporters; party has hidden observer network deployed (45 observers)</p>
            </div>
            <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Ticketless Voter Risk: 4-7%</p>
              <p className="text-xs text-slate-500">Potential voter loss from ticket distribution conflicts (Sunil Kanugolu survey-based selection)</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            <strong>Congress needs 38-40% vote share for majority (59 seats).</strong> Current trajectory: 28-32%. Hidden voter activation is critical gap.
          </p>
        </div>

        {/* MP2 TOP 20 MARGINAL SEATS - from MP2-SYNTHESIS */}
        <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-blue-700 dark:text-blue-400">2027 Top 20 Most Marginal Seats (MP2-SYNTHESIS)</p>
          <p className="mt-1 text-xs text-slate-500">2022 margins of 3,000-22,000; small swings of 2-4% can flip government</p>
          <div className="mt-3 grid gap-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">1. Gidderbaha</p>
              <p className="text-xs text-slate-500">AAP+22,000 (by-poll)</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">2. Tarn Taran</p>
              <p className="text-xs text-slate-500">AAP+15,000+</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">3. Khadoor Sahib</p>
              <p className="text-xs text-slate-500">AAP+12,000+</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">4. Patti</p>
              <p className="text-xs text-slate-500">AAP+10,000+</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">5. Bholath</p>
              <p className="text-xs text-slate-500">AAP+8,000+</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">6. Nakodar</p>
              <p className="text-xs text-slate-500">Congress+7,500</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">7. Jalandhar North</p>
              <p className="text-xs text-slate-500">AAP+7,000+</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">8. Phagwara</p>
              <p className="text-xs text-slate-500">Congress+6,500</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">9. Mukerian</p>
              <p className="text-xs text-slate-500">Congress+6,000</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">10. Dasuya</p>
              <p className="text-xs text-slate-500">Congress+5,500</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">11. Shahkot</p>
              <p className="text-xs text-slate-500">Congress+5,500</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">12. Kartarpur</p>
              <p className="text-xs text-slate-500">Congress+5,000</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">13. Majitha</p>
              <p className="text-xs text-slate-500">SAD+5,000</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">14. Ajnala</p>
              <p className="text-xs text-slate-500">Congress+4,500</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">15. Baba Bakala</p>
              <p className="text-xs text-slate-500">AAP+4,500</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">16. Sultanpur Lodhi</p>
              <p className="text-xs text-slate-500">AAP+4,000</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">17. Phillaur</p>
              <p className="text-xs text-slate-500">Congress+4,000</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">18. Jalandhar West</p>
              <p className="text-xs text-slate-500">AAP+3,500</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-red-600">19. Chamkaur Sahib</p>
              <p className="text-xs text-slate-500">Congress+3,500</p>
            </div>
            <div className="rounded bg-white p-2 dark:bg-slate-800">
              <p className="text-xs font-bold text-orange-600">20. Anandpur Sahib</p>
              <p className="text-xs text-slate-500">AAP+3,000</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
            <strong>Investment priority:</strong> Gidderbaha (22,000 margin), Tarn Taran (15,000), Khadoor Sahib (12,000) require MAXIMUM resource deployment for Congress flips.
          </p>
        </div>
      </div>

      {/* AAP WOMEN VOTER SPECIFIC DATA - from MP3-002 */}
      <div className="rounded-xl border border-pink-200 bg-pink-50 p-6 dark:border-pink-800 dark:bg-pink-900/20">
        <h3 className="text-lg font-semibold text-pink-700 dark:text-pink-400">
          AAP Women Voter Appeal — Broken Promise Impact
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          From MP3-002 voter appeal research
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Women Stipend Promise</p>
            <p className="text-2xl font-bold text-red-600">Rs 1,000/mo</p>
            <p className="text-xs text-slate-500">Promised 2022; announced March 2026; NOT delivered</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Women Protested Outside</p>
            <p className="text-2xl font-bold text-red-600">Jan 4, 2025</p>
            <p className="text-xs text-slate-500">Holding placards "Sadda haq, itthe rakh" (Our right, put it here)</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Budget Allocation</p>
            <p className="text-2xl font-bold text-red-600">ZERO</p>
            <p className="text-xs text-slate-500">4th consecutive budget without implementation</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Scheme Cost Reality</p>
            <div className="mt-2 text-xs space-y-1">
              <div>Monthly cost: Rs 12,000 Cr for ~1 crore eligible women</div>
              <div>Annual cost: Rs 1.44 lakh crore</div>
              <div>Fiscal liability raised in 2025-26: Rs 4,560 Cr</div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Opposition Narrative</p>
            <div className="mt-2 text-xs space-y-1">
              <div>"Kejriwal lied" / "jhooth di pand" (sack of lies)</div>
              <div>"Those who couldn't give Rs 1,000 in Punjab, how will they give Rs 2,100 in Delhi?"</div>
            </div>
          </div>
        </div>
      </div>

      {/* MP10-007 Turnout Modeling Data */}
      <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">MP10-007 Turnout Modeling</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">Historical turnout patterns, rural-urban differentials, and 2027 projections</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Punjab 2022 Turnout</p>
            <p className="text-2xl font-bold text-cyan-600">65.38%</p>
            <p className="text-xs text-slate-500">DOWN from 78.06% in 2017</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Punjab 2017 Turnout</p>
            <p className="text-2xl font-bold text-slate-600">78.06%</p>
            <p className="text-xs text-slate-500">Historically high turnout</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Rural Turnout Range</p>
            <p className="text-2xl font-bold text-green-600">70-75%</p>
            <p className="text-xs text-slate-500">Higher than urban areas</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Urban Turnout Range</p>
            <p className="text-2xl font-bold text-orange-600">58-64%</p>
            <p className="text-xs text-slate-500">Lower engagement levels</p>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">EVM Counting Methodology (MP10-008)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <p className="text-xs text-slate-500">Booths per Counting Round</p>
              <p className="text-lg font-bold text-cyan-600">14</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Recount Threshold</p>
              <p className="text-lg font-bold text-cyan-600">1,000 votes</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500">Total Polling Stations</p>
              <p className="text-lg font-bold text-cyan-600">22,000-25,000</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Key Insight:</strong> Turnout dropped 12.68 percentage points (78% to 65%) between 2017 and 2022. This drop disproportionately affected Congress urban and rural voters, contributing to AAP's massive win. Congress needs GOTV (Get Out The Vote) strategy targeting: first-time voters (57% turnout), urban areas (below 60%), and 18-29 age cohort.
          </p>
        </div>
      </div>

      {/* MP10-002: NOTA as Protest Signal */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">MP10-002: NOTA as Protest Signal</p>
            <p className="text-sm text-red-600 dark:text-red-300">NOTA functions as voter disillusionment barometer</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Punjab 2022 NOTA</p>
            <p className="text-2xl font-bold text-red-600">{notAProtestSignal.punjab2022}</p>
            <p className="text-xs text-slate-500">National avg: {notAProtestSignal.nationalAverage}</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">High Protest Signal</p>
            <p className="text-2xl font-bold text-orange-600">{notAProtestSignal.swingIndicator.split("→")[0]}</p>
            <p className="text-xs text-slate-500">Requires response</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">2027 Risk</p>
            <p className="text-2xl font-bold text-purple-600">{notAProtestSignal["2027Risk"].split(" ")[0]}</p>
            <p className="text-xs text-slate-500">If NOTA voters switch</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Strategic Note</p>
            <p className="text-2xl font-bold text-blue-600">{notAProtestSignal.strategicNote.split(" ")[0]}</p>
            <p className="text-xs text-slate-500">Voter recovery possible</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-red-50 p-3 dark:bg-red-900/30">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>2027 Risk:</strong> If NOTA exceeds 2%, signals voter disillusionment requiring candidate quality response. High NOTA in 2017 → Congress lost 77→18 seats. Strategic Note: NOTA protest voters are recoverable if candidate quality improves.
          </p>
        </div>
      </div>

      {/* MP10-004: Swing Voter Movement Model */}
      <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-4 dark:border-teal-800 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-teal-700 dark:text-teal-400">MP10-004: Swing Voter Movement Model</p>
            <p className="text-sm text-teal-600 dark:text-teal-300">AAP→Congress swing reversal emerging in 2024-2026</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-3">Swing Voter Timing Breakdown</p>
            <div className="space-y-3">
              {(Object.entries(swingVoterTimingBreakdown) as [string, any][])
                .filter(([key]) => key !== "note")
                .map(([phase, item]) => (
                <div key={phase} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700 dark:bg-teal-900/50 dark:text-teal-400">
                    {item.percentage}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{phase.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className="text-xs text-slate-500">{item.profile}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-3">AAP→Congress Swing Reversal (2027)</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm text-slate-600 dark:text-slate-400">Magnitude</span>
                <span className="font-bold text-teal-600">{aapToCongressSwing.magnitude}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm text-slate-600 dark:text-slate-400">Conversion Rate</span>
                <span className="font-bold text-blue-600">{aapToCongressSwing.conversionRate}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm text-slate-600 dark:text-slate-400">Key Regions</span>
                <span className="font-bold text-purple-600">{aapToCongressSwing.regionalConcentration}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm text-slate-600 dark:text-slate-400">Risk</span>
                <span className="font-bold text-orange-600">{aapToCongressSwing.risk.split(" ")[0]}</span>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <p className="text-xs text-slate-500 font-semibold">Reasons for Swing:</p>
              {aapToCongressSwing.reasons.map((reason, i) => (
                <p key={i} className="text-xs text-slate-600 dark:text-slate-400">• {reason}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-teal-50 p-3 dark:bg-teal-900/30">
          <p className="text-sm text-teal-700 dark:text-teal-300">
            <strong>Opportunity:</strong> Congress needs to capitalize before AAP recovers from governance slump. Swing may reverse if Congress ticket distribution alienates key vote banks.
          </p>
        </div>
      </div>

      {/* SYNTHESIS M1: Voter Ecosystem Intelligence */}
      <div className="mt-6 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-800 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
            M1
          </div>
          <div>
            <p className="font-semibold text-indigo-700 dark:text-indigo-400">MEGA-PILLAR 2: Voter Ecosystem — Synthesis Intelligence</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-300">Punjab Congress 2027 Election Intelligence | May 2026</p>
          </div>
        </div>

        {/* Key Strategic Findings */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Key Strategic Findings (CLASS A)</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/30">
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300">Anti-AAP Sentiment</p>
              <p className="text-lg font-bold text-indigo-700">CLASS A</p>
              <p className="text-xs text-slate-500">Drug crisis is #1 voter anger trigger</p>
            </div>
            <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/30">
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300">AAP→Congress Swing</p>
              <p className="text-lg font-bold text-indigo-700">12-15%</p>
              <p className="text-xs text-slate-500">~10-12 lakh voters in motion</p>
            </div>
            <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/30">
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-300">Dera Networks</p>
              <p className="text-lg font-bold text-indigo-700">40-50</p>
              <p className="text-xs text-slate-500">Assembly seats influenced</p>
            </div>
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Regional Distribution</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">MALWA</p>
              <p className="text-sm text-slate-500">69 seats (59%)</p>
              <p className="text-xs text-slate-400">~1.35 crore voters, Jat Sikh dominant</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">MAJHA</p>
              <p className="text-sm text-slate-500">25 seats (21%)</p>
              <p className="text-xs text-slate-400">~50 lakh voters, Border region</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">DOABA</p>
              <p className="text-sm text-slate-500">23 seats (20%)</p>
              <p className="text-xs text-slate-400">~35 lakh voters, Highest Dalit concentration</p>
            </div>
          </div>
        </div>

        {/* Caste Composition */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Caste Composition & Political Weight (CLASS A-B)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-2 text-slate-500">Caste/Community</th>
                  <th className="text-right py-2 text-slate-500">Population %</th>
                  <th className="text-right py-2 text-slate-500">Estimated Voters</th>
                  <th className="text-right py-2 text-slate-500">Reserved Seats</th>
                  <th className="text-left py-2 text-slate-500">2027 Trajectory</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 dark:text-slate-400">
                <tr className="border-b border-slate-100 dark:border-slate-800"><td>SC (Total)</td><td className="text-right">32%</td><td className="text-right">~66-70 lakh</td><td className="text-right">34 seats</td><td><span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">Fluid</span></td></tr>
                <tr className="border-b border-slate-100 dark:border-slate-800"><td>Jat Sikh</td><td className="text-right">21%</td><td className="text-right">~43-47 lakh</td><td className="text-right">Open</td><td><span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700">Malwa dominant</span></td></tr>
                <tr className="border-b border-slate-100 dark:border-slate-800"><td>OBC</td><td className="text-right">17%</td><td className="text-right">~32-38 lakh</td><td className="text-right">Open</td><td><span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-700">Fluid</span></td></tr>
                <tr><td>Upper Caste Hindu</td><td className="text-right">16%</td><td className="text-right">~32-36 lakh</td><td className="text-right">Open</td><td><span className="text-xs px-2 py-0.5 rounded bg-purple-100 text-purple-700">BJP urban</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Value Cluster Analysis */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Voter Value Clusters (CLASS B)</h4>
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
              <span className="text-lg font-bold text-blue-600">35%</span>
              <span className="text-xs">Traditionalist (Religion, panthic identity)</span>
            </div>
            <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
              <span className="text-lg font-bold text-green-600">25%</span>
              <span className="text-xs">Modernist (Jobs, economy, anti-corruption)</span>
            </div>
            <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
              <span className="text-lg font-bold text-red-600">20%</span>
              <span className="text-xs">Survivalist (Drug crisis, law & order)</span>
            </div>
            <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
              <span className="text-lg font-bold text-purple-600">12%</span>
              <span className="text-xs">Cynic (Anti-establishment, NOTA)</span>
            </div>
            <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
              <span className="text-lg font-bold text-orange-600">5%</span>
              <span className="text-xs">Activist (Farmer unions, social movements)</span>
            </div>
            <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-700">
              <span className="text-lg font-bold text-pink-600">3%</span>
              <span className="text-xs">Identity Warrior (Dalit empowerment)</span>
            </div>
          </div>
        </div>

        {/* Issue Salience */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Issue Salience Hierarchy 2027 (CLASS A-B)</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">1</span>
              <span className="flex-1 text-sm font-medium">DRUG ERADICATION</span>
              <span className="text-xs text-red-600 font-semibold">CRITICAL ~85%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">2</span>
              <span className="flex-1 text-sm font-medium">EMPLOYMENT/YOUTH JOBS</span>
              <span className="text-xs text-orange-600 font-semibold">CRITICAL ~80%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">3</span>
              <span className="flex-1 text-sm font-medium">MSP/FARMER WELFARE</span>
              <span className="text-xs text-yellow-600 font-semibold">HIGH ~75%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">4</span>
              <span className="flex-1 text-sm font-medium">GOVERNANCE/CORRUPTION</span>
              <span className="text-xs text-purple-600 font-semibold">HIGH ~70%</span>
            </div>
          </div>
        </div>

        {/* High Priority Voter Personas */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-3">High-Priority Voter Personas for Congress 2027</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-blue-200 p-3 dark:border-blue-800">
              <p className="text-sm font-semibold text-blue-700">PERSONA A: Disappointed AAP Voter</p>
              <p className="text-xs text-slate-500 mt-1">Size: ~12-15 lakh | 30-50 yrs | Jat Sikh, Mazhabi, OBC</p>
              <p className="text-xs text-slate-600 mt-1">Trigger: Drug crisis persistence, broken MSP promise</p>
              <p className="text-xs font-medium text-blue-600 mt-2">Engagement: "AAP promised. AAP failed. Congress delivers."</p>
            </div>
            <div className="rounded-lg border border-green-200 p-3 dark:border-green-800">
              <p className="text-sm font-semibold text-green-700">PERSONA B: Jat Sikh Farmer (Malwa)</p>
              <p className="text-xs text-slate-500 mt-1">Size: ~28-32 lakh | 35-70 yrs | Marginal to large farmers</p>
              <p className="text-xs text-slate-600 mt-1">Trigger: MSP guarantee, debt relief, drug menace</p>
              <p className="text-xs font-medium text-green-600 mt-2">Engagement: "MSP guarantee in writing. Your land, your dignity."</p>
            </div>
            <div className="rounded-lg border border-orange-200 p-3 dark:border-orange-800">
              <p className="text-sm font-semibold text-orange-700">PERSONA C: Dalit Youth (Doaba)</p>
              <p className="text-xs text-slate-500 mt-1">Size: ~14 lakh | 18-30 yrs | Ravidasia/Ramdasia Sikh</p>
              <p className="text-xs text-slate-600 mt-1">Trigger: Jobs (primary), drug addiction, caste discrimination</p>
              <p className="text-xs font-medium text-orange-600 mt-2">Engagement: "Jobs for SC youth — not just promises."</p>
            </div>
            <div className="rounded-lg border border-pink-200 p-3 dark:border-pink-800">
              <p className="text-sm font-semibold text-pink-700">PERSONA D: Rural Sikh Woman</p>
              <p className="text-xs text-slate-500 mt-1">Size: ~25-30 lakh | 30-55 yrs | All 117 seats</p>
              <p className="text-xs text-slate-600 mt-1">Trigger: Children's future, drug crisis (lost sons/brothers)</p>
              <p className="text-xs font-medium text-pink-600 mt-2">Engagement: "Your children's future, your family's safety."</p>
            </div>
          </div>
        </div>

        {/* Swing Voter Analysis */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Critical Swing Segments for 2027 (CLASS B)</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-teal-50 p-3 text-center dark:bg-teal-900/30">
              <p className="text-xs text-slate-500">AAP→Congress</p>
              <p className="text-xl font-bold text-teal-600">12-15%</p>
              <p className="text-xs text-slate-400">~10-12 lakh</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-900/30">
              <p className="text-xs text-slate-500">Congress→AAP</p>
              <p className="text-xl font-bold text-blue-600">5-7%</p>
              <p className="text-xs text-slate-400">~3-5 lakh</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 text-center dark:bg-purple-900/30">
              <p className="text-xs text-slate-500">SAD→AAP→Congress</p>
              <p className="text-xl font-bold text-purple-600">3-5%</p>
              <p className="text-xs text-slate-400">~2-3 lakh</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 text-center dark:bg-orange-900/30">
              <p className="text-xs text-slate-500">First-Time Undecided</p>
              <p className="text-xl font-bold text-orange-600">3-4%</p>
              <p className="text-xs text-slate-400">~5-7 lakh</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            <strong>Total Swing Vote:</strong> ~24-34 lakh voters (20-25% of electorate)
          </p>
        </div>

        {/* Influence Networks */}
        <div className="mb-4 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Dera Networks: Hidden Electoral Architecture (CLASS B)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-2 text-slate-500">Dera</th>
                  <th className="text-right py-2 text-slate-500">Followers</th>
                  <th className="text-right py-2 text-slate-500">Seats Influenced</th>
                  <th className="text-left py-2 text-slate-500">Political Alignment</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 dark:text-slate-400">
                <tr className="border-b border-slate-100 dark:border-slate-800"><td>Radha Soami Beas</td><td className="text-right">2-3 million</td><td className="text-right">40-50</td><td><span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700">BJP/SAD walk (Feb 2026)</span></td></tr>
                <tr className="border-b border-slate-100 dark:border-slate-800"><td>Dera Sacha Sauda</td><td className="text-right">1-2 million</td><td className="text-right">20-30</td><td><span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-700">Fragmented post-conviction</span></td></tr>
                <tr className="border-b border-slate-100 dark:border-slate-800"><td>Dera Ballan</td><td className="text-right">500,000+</td><td className="text-right">8-12</td><td><span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">Ravidasia Sikh, AAP-leaning</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Counter-Narrative Framework */}
        <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/30">
          <h4 className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Counter-Narrative Framework</h4>
          <div className="space-y-2 text-xs">
            <div className="flex gap-2 items-start">
              <span className="font-bold text-red-600">AAP Promise:</span>
              <span className="text-slate-600">"Drug-free Punjab in 1 month"</span>
              <span className="text-slate-400">→</span>
              <span className="font-bold text-indigo-600">Reality:</span>
              <span className="text-slate-600">232,000+ opioid dependent (AIIMS 2025)</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-bold text-red-600">AAP Promise:</span>
              <span className="text-slate-600">"10 lakh jobs"</span>
              <span className="text-slate-400">→</span>
              <span className="font-bold text-indigo-600">Reality:</span>
              <span className="text-slate-600">Youth unemployment rose to 22.5%</span>
            </div>
            <div className="flex gap-2 items-start">
              <span className="font-bold text-red-600">AAP Promise:</span>
              <span className="text-slate-600">"MSP guarantee"</span>
              <span className="text-slate-400">→</span>
              <span className="font-bold text-indigo-600">Reality:</span>
              <span className="text-slate-600">Not legislated in 2 years</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
