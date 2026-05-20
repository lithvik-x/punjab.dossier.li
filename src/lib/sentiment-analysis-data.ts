// @ts-nocheck
// Sentiment Analysis, Rumor Management & Influencer Mapping Data
// Derived from: direct-documentation/cat-7-public-sentiment/b18-sentiment-rumor-influencer-methodology.md
// Punjab Congress Digital Intelligence Dashboard 2027

import type {
  PrimaryEmotion,
  EmotionIntensity,
  EmotionDuration,
  AttributionType,
  TrustMetric,
  SentimentBaselineType,
  NSSRange,
  SVIComponent,
  VelocityThreshold,
  IssueSentiment,
  DemographicSentiment,
  RegionalSentiment,
  PlatformCoverage,
  SurveyType,
  FocusGroupType,
  MediaType,
  RumorType,
  PunjabRumorCategory,
  RumorLifecycleStage,
  SpreadOriginType,
  AmplifierType,
  DetectionChannel,
  VerificationStep,
  ResponseOption,
  LegalProvision,
  PlatformReporting,
  JournalistCategory,
  FormerPoliticianCategory,
  ReligiousAuthority,
  DeraInfo,
  CastePanchayatLeader,
  CelebrityCategory,
  GrassrootsLeadership,
  ProfessionalNetwork,
  InfluencerScoringComponent,
  AlignmentScoring,
  ActivityMetric,
  InfluencerTier,
} from "@/types/sentiment-analysis-types";

// ==========================================
// PART A: SENTIMENT ANALYSIS DATA
// ==========================================

export const primaryEmotionsData: PrimaryEmotion[] = [
  { emotion: "Hope", electoralRelevance: "Aspirational voting, optimism about future", punjabContext: "Voter hope for economic recovery, drug crisis resolution" },
  { emotion: "Anger", electoralRelevance: "Protest voting, anti-incumbency", punjabContext: "Anger over SYL canal, farmers' distress, unemployment" },
  { emotion: "Fear", electoralRelevance: "Security-oriented voting, risk aversion", punjabContext: "Fear about security, religious harmony, economic stability" },
  { emotion: "Pride", electoralRelevance: "Identity voting, cultural salience", punjabContext: "Sikh pride, Punjabi language, agricultural heritage" },
  { emotion: "Betrayal", electoralRelevance: "Defection, protest voting", punjabContext: "Perceived broken promises, candidate betrayal" },
  { emotion: "Resignation", electoralRelevance: "Apathy, low turnout", punjabContext: "Youth emigration, political disillusionment" },
  { emotion: "Enthusiasm", electoralRelevance: "Mobilization, turnout drive", punjabContext: "Campaign energy, leader charisma" },
  { emotion: "Indifference", electoralRelevance: "Non-engagement, abstention", punjabContext: "Urban apathy, youth disconnect" },
  { emotion: "Gratitude", electoralRelevance: "Loyalty, party identification", punjabContext: "Benefits received, personal connections" },
  { emotion: "Contempt", electoralRelevance: "Rejection, negative partisanship", punjabContext: "Contempt for specific leaders or parties" },
  { emotion: "Anxiety", electoralRelevance: "Risk assessment, swing voting", punjabContext: "Water crisis worry, agricultural debt anxiety" },
  { emotion: "Trust/Distrust", electoralRelevance: "Institutional credibility", punjabContext: "Trust in Congress leadership, distrust of BJP/AAP" },
  { emotion: "Shame/Honor", electoralRelevance: "Community-based voting", punjabContext: "Caste honor, religious dignity" },
];

export const emotionIntensityData: EmotionIntensity[] = [
  { level: "Mild", indicators: ["Qualified statements", "moderate language"], example: "\"Somewhat disappointed\"" },
  { level: "Moderate", indicators: ["Clear emotional markers"], example: "\"Very angry about this decision\"" },
  { level: "Strong", indicators: ["Caps", "multiple exclamation", "emphatic language"], example: "\"COMPLETELY UNACCEPTABLE!!!\"" },
];

export const emotionDurationData: EmotionDuration[] = [
  { type: "Transient", characteristics: "Event-triggered, short-lived", electoralImpact: "Quick mobilizations, momentary swings" },
  { type: "Persistent", characteristics: "Long-running concerns", electoralImpact: "Deep-seated anti-incumbency, regional grievances" },
  { type: "Crystallized", characteristics: "Stable, hardened attitudes", electoralImpact: "Partisan identities, long-term voting patterns" },
];

export const attributionTypesData: AttributionType[] = [
  { attributionType: "Internal/External", definition: "Responsibility placed on leader vs. circumstances", example: "\"CM failed\" vs. \"Global inflation caused\"" },
  { attributionType: "Stable/Unstable", definition: "Perceived permanence of performance", example: "\"Always corrupt\" vs. \"One-time mistake\"" },
  { attributionType: "Global/Specific", definition: "Broad vs. narrow judgment", example: "\"全部都坏\" vs. \"Only this policy is bad\"" },
];

export const trustMetricsData: TrustMetric[] = [
  { dimension: "Competence Trust", measurementIndicators: "Technical capability, problem-solving ability" },
  { dimension: "Integrity Trust", measurementIndicators: "Honesty, anti-corruption record" },
  { dimension: "Benevolence Trust", measurementIndicators: "Genuine care for constituents" },
  { dimension: "Identified Trust", measurementIndicators: "Shared values, community representation" },
];

export const sentimentBaselineTypesData: SentimentBaselineType[] = [
  { type: "Baseline Sentiment", description: "Stable, enduring orientations", stability: "High" },
  { type: "Event-Driven Sentiment", description: "Spike-decay patterns from news/events", stability: "Medium" },
  { type: "Campaign-Induced Sentiment", description: "Campaign effects, speeches, rallies", stability: "Low" },
  { type: "Peer-Influenced Sentiment", description: "Social network effects, family/community", stability: "Medium" },
  { type: "Late-Crystallizing Sentiment", description: "Final weeks/decisions, \"floaters\"", stability: "Low" },
  { type: "Volatile Sentiment", description: "Rapid fluctuations, low anchoring", stability: "Low" },
  { type: "Crystallized Sentiment", description: "Firm, stable preferences", stability: "High" },
];

export const nssRangesData: NSSRange[] = [
  { range: "+70 to +100", interpretation: "Very Strong Positive" },
  { range: "+40 to +69", interpretation: "Strong Positive" },
  { range: "+20 to +39", interpretation: "Moderate Positive" },
  { range: "+1 to +19", interpretation: "Mild Positive" },
  { range: "-19 to +19", interpretation: "Neutral" },
  { range: "-20 to -1", interpretation: "Mild Negative" },
  { range: "-40 to -20", interpretation: "Moderate Negative" },
  { range: "-70 to -40", interpretation: "Strong Negative" },
  { range: "-100 to -70", interpretation: "Very Strong Negative" },
];

export const sviComponentsData: SVIComponent[] = [
  { component: "Total Mentions", description: "Raw volume across platforms", measurement: "Count" },
  { component: "Virality Coefficient", description: "Share/repeat rate ratio", measurement: "(Shares + Retweets) / Original Posts" },
  { component: "Velocity Factor", description: "Rate of new mentions per hour/day", measurement: "Trend slope" },
];

export const velocityThresholdsData: VelocityThreshold[] = [
  { velocityLevel: "Low", indicators: "<10 mentions/hour", alertStatus: "Normal monitoring" },
  { velocityLevel: "Rising", indicators: "10-50 mentions/hour", alertStatus: "Watch" },
  { velocityLevel: "High", indicators: "50-200 mentions/hour", alertStatus: "Active tracking" },
  { velocityLevel: "Viral", indicators: ">200 mentions/hour", alertStatus: "Crisis protocol" },
];

export const issueSentimentsData: IssueSentiment[] = [
  { issueCategory: "Drug Abuse", dominantSentiment: "Anger, Fear", secondarySentiment: "Shame, Anxiety", intensity: "High" },
  { issueCategory: "Unemployment", dominantSentiment: "Anxiety, Anger", secondarySentiment: "Hopelessness", intensity: "High" },
  { issueCategory: "Farmer Distress", dominantSentiment: "Anger, Pride", secondarySentiment: "Resignation", intensity: "High" },
  { issueCategory: "Water Crisis", dominantSentiment: "Fear, Anxiety", secondarySentiment: "Anger", intensity: "Very High" },
  { issueCategory: "Law & Order", dominantSentiment: "Fear, Anger", secondarySentiment: "Distrust", intensity: "High" },
  { issueCategory: "Sacred/Religious", dominantSentiment: "Pride, Anger", secondarySentiment: "Contempt, Shame", intensity: "Very High" },
  { issueCategory: "Women Safety", dominantSentiment: "Fear, Anger", secondarySentiment: "Anxiety", intensity: "High" },
  { issueCategory: "Healthcare", dominantSentiment: "Anxiety", secondarySentiment: "Gratitude (if improved)", intensity: "Moderate" },
];

export const demographicSentimentsData: DemographicSentiment[] = [
  { demographic: "Mazhabi Sikh", primarySentimentDrivers: "Employment, dignity, land rights", swingPotential: "High" },
  { demographic: "Jat Sikh", primarySentimentDrivers: "Agricultural honor, regional pride", swingPotential: "Moderate" },
  { demographic: "Valmiki Dalit", primarySentimentDrivers: "Empowerment, representation", swingPotential: "High" },
  { demographic: "Ravidasia Dalit", primarySentimentDrivers: "Economic opportunity, respect", swingPotential: "High" },
  { demographic: "Hindu OBC", primarySentimentDrivers: "Security, economic mobility", swingPotential: "High" },
  { demographic: "Upper Caste Hindu", primarySentimentDrivers: "Stability, administrative access", swingPotential: "Moderate" },
  { demographic: "Urban Youth", primarySentimentDrivers: "Jobs, entertainment, emigration", swingPotential: "Very High" },
  { demographic: "Rural Youth", primarySentimentDrivers: "Agriculture, migration", swingPotential: "High" },
  { demographic: "Dera Followers", primarySentimentDrivers: "Dera-Cong alignment cues", swingPotential: "High" },
];

export const regionalSentimentsData: RegionalSentiment[] = [
  { region: "Malwa (69 seats)", seats: 69, dominantSentiment: "Anger + Hope", keyIssues: ["Drugs", "agriculture"], swingPattern: "High swing potential" },
  { region: "Majha (27 seats)", seats: 27, dominantSentiment: "Pragmatic + Pride", keyIssues: ["Development", "identity"], swingPattern: "Moderate swing" },
  { region: "Doaba (23 seats)", seats: 23, dominantSentiment: "Anxiety + Aspiration", keyIssues: ["Jobs", "emigration"], swingPattern: "High swing potential" },
];

export const platformCoverageData: PlatformCoverage[] = [
  { platform: "Facebook", punjabiAudienceShare: "~65% of social users", sentimentValue: "High", notes: "Regional groups" },
  { platform: "WhatsApp", punjabiAudienceShare: "~80% of smartphone users", sentimentValue: "High", notes: "Hard to monitor" },
  { platform: "Twitter/X", punjabiAudienceShare: "~15% (urban/elite)", sentimentValue: "High", notes: "Media amplification" },
  { platform: "YouTube", punjabiAudienceShare: "~45%", sentimentValue: "High", notes: "Visual impact" },
  { platform: "Instagram", punjabiAudienceShare: "~25% (young)", sentimentValue: "High", notes: "Youth sentiment" },
  { platform: "TikTok", punjabiAudienceShare: "~10%", sentimentValue: "High", notes: "Limited data" },
];

export const surveyTypesData: SurveyType[] = [
  { type: "IVR Polls", frequency: "Weekly", sampleSize: "2,000+", purpose: "Quick trend tracking" },
  { type: "Live Caller", frequency: "Monthly", sampleSize: "1,500", purpose: "Deep sentiment dive" },
  { type: "Online Panel", frequency: "Bi-weekly", sampleSize: "1,000", purpose: "Urban youth focus" },
  { type: "Caste-weighted", frequency: "Quarterly", sampleSize: "3,000", purpose: "Demographic precision" },
];

export const focusGroupTypesData: FocusGroupType[] = [
  { type: "Caste-homogeneous", composition: "Single caste group", purpose: "Intra-caste dynamics" },
  { type: "Regional", composition: "Constituency residents", purpose: "Local issues" },
  { type: "Youth-specific", composition: "18-35 age group", purpose: "Aspirations" },
  { type: "Women-only", composition: "Female voters", purpose: "Women sentiment" },
  { type: "Dera-adjacent", composition: "Dera follower households", purpose: "Dera influence" },
];

export const mediaTypesData: MediaType[] = [
  { type: "Punjabi Print", sources: "Ajit, Jagbani, Punjabi Tribune", sentimentCoding: "Lead stories, editorials" },
  { type: "Hindi Print", sources: "Dainik Bhaskar, Tata", sentimentCoding: "Hindi belt perception" },
  { type: "TV News", sources: "ENow, ABP, NDTV", sentimentCoding: "TV debates, framing" },
  { type: "Digital", sources: "Wire, The Print, Article", sentimentCoding: "Commentary" },
];

// ==========================================
// PART B: MISINFORMATION & RUMOR MANAGEMENT DATA
// ==========================================

export const rumorTypesData: RumorType[] = [
  { type: "Intentional Misinformation", intent: "To deceive/manipulate", falsityLevel: "Deliberately false", harmPotential: "Very High" },
  { type: "Unintentional Misinformation", intent: "Unaware of falsity", falsityLevel: "Genuinely false", harmPotential: "High" },
  { type: "Satire/Parody", intent: "Humor/entertainment", falsityLevel: "Fabricated but obvious", harmPotential: "Low-Moderate" },
  { type: "Out-of-Context", intent: "Misleading framing", falsityLevel: "Technically true, context false", harmPotential: "High" },
  { type: "Manipulated Media", intent: "Deception via editing", falsityLevel: "Media altered", harmPotential: "Very High" },
  { type: "Advice vs. Information", intent: "Informal vs. factual", falsityLevel: "Advice = opinion", harmPotential: "Variable" },
];

export const punjabRumorCategoriesData: PunjabRumorCategory[] = [
  { category: "Religious Incitement", examples: "Sacrilege fabrications, temple/church claims", sourcePattern: "WhatsApp forwarded" },
  { category: "Caste Polarization", examples: "Reservations lies, caste insult stories", sourcePattern: "Local leaders" },
  { category: "Dera Politics", examples: "Dera-Cong deal rumors, dera betrayal", sourcePattern: "Dera networks" },
  { category: "CM Candidate", examples: "Fake candidate lists, denied nominations", sourcePattern: "Political sources" },
  { category: "External Conspiracy", examples: "\"Central government\" framing", sourcePattern: "Opposition channels" },
  { category: "Economic Panic", examples: "Price manipulation, job loss stories", sourcePattern: "Media amplification" },
  { category: "Law & Order Fabrications", examples: "Crime statistics, fake encounters", sourcePattern: "Opposition" },
  { category: "Electoral Process", examples: "EVM manipulation, voting delays", sourcePattern: "Technical misinformation" },
];

export const rumorLifecycleStagesData: RumorLifecycleStage[] = [
  { stage: "Creation → Initial Spread", typicalTiming: "2-6 hours", interventionWindow: "PRIMARY" },
  { stage: "Initial Spread → Viral", typicalTiming: "6-24 hours", interventionWindow: "CRITICAL" },
  { stage: "Viral → MSM Pickup", typicalTiming: "12-48 hours", interventionWindow: "ACTIVE" },
  { stage: "Debunking → Decay", typicalTiming: "24-72 hours", interventionWindow: "RECOVERY" },
];

export const spreadOriginTypesData: SpreadOriginType[] = [
  { originType: "Political Operative", typicalSource: "Opposition party worker", spreadPattern: "Structured, coordinated" },
  { originType: "Local Leader", typicalSource: "Sitting MLA/councillor", spreadPattern: "Regional cluster" },
  { originType: "Media Misreport", typicalSource: "Regional channel", spreadPattern: "Rapid mainstream" },
  { originType: "Citizen Fabrication", typicalSource: "Anonymous user", spreadPattern: "Organic viral" },
  { originType: "Foreign/External", typicalSource: "Coordinated inauthentic", spreadPattern: "Cross-border patterns" },
];

export const amplifierTypesData: AmplifierType[] = [
  { type: "Verified Media", reach: "Very High", credibility: "High", threatLevel: "High if false" },
  { type: "Influential Journalist", reach: "High", credibility: "High", threatLevel: "High" },
  { type: "Political Leader", reach: "High", credibility: "Very High", threatLevel: "Critical" },
  { type: "Religious Figure", reach: "High", credibility: "Very High", threatLevel: "Critical" },
  { type: "Local Community Leader", reach: "Moderate", credibility: "High", threatLevel: "Moderate" },
  { type: "Anonymous Account", reach: "Variable", credibility: "Low", threatLevel: "Moderate" },
];

export const detectionChannelsData: DetectionChannel[] = [
  { channel: "Social Listening", method: "Keyword monitoring, anomaly detection", latency: "1-4 hours" },
  { channel: "Hotline Reporting", method: "Supporter flagging system", latency: "Variable" },
  { channel: "Media Monitoring", method: "News scanning, TV alerts", latency: "2-8 hours" },
  { channel: "Third-Party Alerts", method: "Fact-checker networks", latency: "4-24 hours" },
  { channel: "Open Source Intelligence", method: "Manual social watching", latency: "Variable" },
];

export const verificationStepsData: VerificationStep[] = [
  { step: "Fact-Check", action: "Cross-reference official sources", output: "Confirmed/False/Mixed" },
  { step: "Source Authentication", action: "Account history, credibility", output: "Source Reliability Score" },
  { step: "Context Verification", action: "Original post/story vs. current", output: "Miscontextualized?" },
  { step: "Expert Consultation", action: "Subject matter experts", output: "Expert Opinion" },
  { step: "Media Forensics", action: "Image/video authenticity", output: "Authentic/Manipulated" },
];

export const responseOptionsData: ResponseOption[] = [
  { option: "Correction Statement", useCase: "Factual error", approval: "Regional Head", platform: "All" },
  { option: "Alternative Narrative", useCase: "Filling information gap", approval: "State Committee", platform: "All" },
  { option: "Legal Notice", useCase: "Defamation, IP theft", approval: "Legal Team", platform: "Legal + Platform" },
  { option: "Platform Report", useCase: "Content violation", approval: "Automated + Manual", platform: "Platform" },
  { option: "Police Complaint", useCase: "Criminal misinformation", approval: "Legal Team", platform: "Law Enforcement" },
];

export const legalProvisionsData: LegalProvision[] = [
  { section: "Sec 66D", offense: "Cheating by personation via computer", punishment: "3 years + fine", applicability: "Impersonation, deepfakes" },
  { section: "Sec 66E", offense: "Violation of privacy", punishment: "3 years + fine", applicability: "Private content leaks" },
  { section: "Sec 66", offense: "Computer-related offenses", punishment: "varies", applicability: "General cyber crimes" },
  { section: "Sec 67", offense: "Publishing obscene content", punishment: "3 years 1st, 5 years subsequent", applicability: "Explicit content" },
  { section: "Sec 67A", offense: "Publishing sexual content", punishment: "5 years + fine", applicability: "Non-consensual intimate" },
  { section: "Sec 69", offense: "Government blocking power", punishment: "Administrative", applicability: "Content removal" },
  { section: "Sec 79", offense: "Safe harbor (platforms)", punishment: "Conditional", applicability: "Platform liability" },
];

export const platformReportingData: PlatformReporting[] = [
  { platform: "Facebook/Meta", policy: "Community Standards", reportingLink: "facebook.com/help/report", responseTime: "24-72 hours" },
  { platform: "WhatsApp", policy: "Limited (no public reporting)", reportingLink: "Forwarded message limit", responseTime: "N/A" },
  { platform: "Twitter/X", policy: "Civic Integrity Policy", reportingLink: "Help Center", responseTime: "12-48 hours" },
  { platform: "YouTube", policy: "Misinformation Policy", reportingLink: "Report button", responseTime: "24-72 hours" },
  { platform: "Instagram", policy: "Community Guidelines", reportingLink: "Report button", responseTime: "24-72 hours" },
  { platform: "Google", policy: "Misinformation policies", reportingLink: "Search removal requests", responseTime: "Variable" },
];

// ==========================================
// PART C: INFLUENCER MAPPING DATA
// ==========================================

export const journalistCategoriesData: JournalistCategory[] = [
  { category: "Print Journalists", subTypes: "Political, crime, agricultural beats", influenceMechanism: "News framing, source selection", reach: "High (readership)" },
  { category: "TV Journalists", subTypes: "Anchors, reporters, analysts", influenceMechanism: "Visual impact, narrative control", reach: "Very High" },
  { category: "Digital Journalists", subTypes: "News portals, YouTubers", influenceMechanism: "Youth reach, viral potential", reach: "High (growing)" },
  { category: "Columnists", subTypes: "Op-ed writers, commentators", influenceMechanism: "Opinion formation, elite influence", reach: "Moderate" },
  { category: "Citizen Journalists", subTypes: "Local social media reporters", influenceMechanism: "Hyperlocal, community trust", reach: "Variable" },
];

export const formerPoliticianCategoriesData: FormerPoliticianCategory[] = [
  { category: "Ex-MLAs", influenceType: "Local issue knowledge, constituency networks", credibility: "High (local)", alignmentCertainty: "Variable" },
  { category: "Ex-MPs", influenceType: "State/national profile, elite access", credibility: "High", alignmentCertainty: "Moderate" },
  { category: "Ex-Ministers", influenceType: "Policy knowledge, administrative network", credibility: "Very High", alignmentCertainty: "Variable" },
  { category: "Party Veterans", influenceType: "Organizational loyalty, worker networks", credibility: "Very High", alignmentCertainty: "High" },
  { category: "Defectors", influenceType: "Insight into former party, grievance", credibility: "Moderate", alignmentCertainty: "Low" },
];

export const religiousAuthoritiesData: ReligiousAuthority[] = [
  { category: "Sikh Religious", examples: "SGPC members, granthis, takht heads", communityReach: "Very High (Sikh pop)", politicalInfluence: "High" },
  { category: "Hindu Religious", examples: "Priests, Sanskrit scholars", communityReach: "High (Hindu pop)", politicalInfluence: "Moderate" },
  { category: "Dera Heads", examples: "Sacha Sauda, Ballan, Beas", communityReach: "Very High (followers)", politicalInfluence: "Very High" },
  { category: "Islamic Religious", examples: "Imams, maulavis", communityReach: "High (Muslim pop)", politicalInfluence: "Moderate" },
  { category: "Christian Religious", examples: "Priests, bishops", communityReach: "Moderate", politicalInfluence: "Low-Moderate" },
];

export const deraInfoData: DeraInfo[] = [
  { name: "Dera Sacha Sauda", location: "Sirsa (Haryana)", followerEstimate: "6-8 million", politicalAlignmentHistory: "[NEEDS VERIFICATION]" },
  { name: "Dera Sachkhand Ballan", location: "Jalandhar", followerEstimate: "[DATA]", politicalAlignmentHistory: "[NEEDS VERIFICATION]" },
  { name: "Radha Soami Satsang Beas", location: "Beas", followerEstimate: "[DATA]", politicalAlignmentHistory: "[NEEDS VERIFICATION]" },
  { name: "Dera Sant Pal", location: "[LOCATION]", followerEstimate: "[DATA]", politicalAlignmentHistory: "[NEEDS VERIFICATION]" },
];

export const castePanchayatLeadersData: CastePanchayatLeader[] = [
  { casteCategory: "Mazhabi Sikh", panchayatType: "Jatia Mazhabi Sikh", influenceLevel: "Very High" },
  { casteCategory: "Valmiki", panchayatType: "Valmiki Panchayat", influenceLevel: "High" },
  { casteCategory: "Ravidasia", panchayatType: "Ravidasia Mandal", influenceLevel: "High" },
  { casteCategory: "Ad-Dharmi", panchayatType: "Ad-Dharmi Panchayat", influenceLevel: "Moderate" },
  { casteCategory: "Bazigar", panchayatType: "Bazigar Samaj", influenceLevel: "Moderate" },
];

export const celebrityCategoriesData: CelebrityCategory[] = [
  { category: "Film/TV Celebrities", examples: "Punjabi actors, singers", influenceType: "Aspirational, lifestyle", youthReach: "Very High" },
  { category: "Sports Figures", examples: "Cricketers, Kabaddi players", influenceType: "Local hero worship", youthReach: "High" },
  { category: "Models/Influencers", examples: "Instagram personalities", influenceType: "Lifestyle, trendsetting", youthReach: "Very High" },
  { category: "Artists", examples: "Folk singers, painters", influenceType: "Cultural identity", youthReach: "Moderate-High" },
  { category: "Comedians", examples: "Stand-up, satire", influenceType: "Opinion shaping", youthReach: "High" },
];

export const grassrootsLeadershipData: GrassrootsLeadership[] = [
  { category: "Village Sarpanch", countEstimate: "~13,000 in Punjab", influenceSphere: "Rural local", reliability: "Variable" },
  { category: "Ward Members", countEstimate: "~75,000", influenceSphere: "Urban local", reliability: "Variable" },
  { category: "Booth-level Workers", countEstimate: "~165,000", influenceSphere: "Micro-local", reliability: "High (party)" },
  { category: "Anganwadi Workers", countEstimate: "~27,000", influenceSphere: "Women, children", reliability: "Moderate" },
  { category: "ASHA Workers", countEstimate: "~20,000", influenceSphere: "Health, women", reliability: "Moderate" },
  { category: "School Teachers", countEstimate: "Variable", influenceSphere: "Families, youth", reliability: "Moderate" },
];

export const professionalNetworksData: ProfessionalNetwork[] = [
  { network: "Doctor Associations", keyInfluencers: "Private practitioners", influenceMechanism: "Middle-class trust" },
  { network: "Bar Associations", keyInfluencers: "Lawyers", influenceMechanism: "Legal community, educated" },
  { network: "Traders/Farmers Bodies", keyInfluencers: "APMC, commerce groups", influenceMechanism: "Economic interest" },
  { network: "Pensioner Groups", keyInfluencers: "Retired employees", influenceMechanism: "Stable, vote-rich" },
];

export const influencerScoringComponentsData: InfluencerScoringComponent[] = [
  { component: "Reach", scoreRange: "1-100", weight: 30 },
  { component: "Credibility", scoreRange: "1-100", weight: 25 },
  { component: "Engagement", scoreRange: "1-100", weight: 20 },
  { component: "Alignment", scoreRange: "-100 to +100", weight: 25 },
];

export const alignmentScoringsData: AlignmentScoring[] = [
  { score: "+80 to +100", label: "Strong Ally", definition: "Active support, repeat advocacy" },
  { score: "+50 to +79", label: "Supporter", definition: "Generally positive, responds to requests" },
  { score: "+20 to +49", label: "Sympathetic", definition: "Not hostile, passive positive" },
  { score: "-19 to +19", label: "Neutral", definition: "No clear position" },
  { score: "-20 to -49", label: "Unsympathetic", definition: "Passive negative" },
  { score: "-50 to -79", label: "Opponent", definition: "Active negative, critical" },
  { score: "-80 to -100", label: "Strong Opponent", definition: "Active opposition, attacks" },
];

export const activityMetricsData: ActivityMetric[] = [
  { metric: "Post Frequency", description: "Posts per week mentioning party/leader", frequency: "Weekly" },
  { metric: "Sentiment Trend", description: "Positive/Negative ratio over time", frequency: "Monthly" },
  { metric: "Response Rate", description: "Amplification of party content", frequency: "Per campaign" },
  { metric: "Event Attendance", description: "Physical/digital event participation", frequency: "Per event" },
  { metric: "Narrative Contribution", description: "Original positive content creation", frequency: "Weekly" },
];

export const influencerTiersData: InfluencerTier[] = [
  { tier: "Tier 1 (Strategic)", oisRange: "80+", engagementStrategy: "Direct relationship, regular contact", resourceLevel: "High" },
  { tier: "Tier 2 (Key)", oisRange: "60-79", engagementStrategy: "Coordinated campaigns, occasional access", resourceLevel: "Medium-High" },
  { tier: "Tier 3 (Tactical)", oisRange: "40-59", engagementStrategy: "Campaign-based engagement", resourceLevel: "Medium" },
  { tier: "Tier 4 (Watch)", oisRange: "20-39", engagementStrategy: "Monitor, opportunistic", resourceLevel: "Low" },
  { tier: "Tier 5 (Hostile)", oisRange: "<20", engagementStrategy: "Do not engage, mitigate", resourceLevel: "N/A" },
];
