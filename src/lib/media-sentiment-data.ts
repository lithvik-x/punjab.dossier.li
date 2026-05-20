// @ts-nocheck
// Media Sentiment Data for Punjab Dashboard
// Derived from: direct-documentation/cat-8-media-sentiment/*.md
// Date: May 20, 2026 | Status: COMPLETE

import type {
  PunjabiNewspaper,
  EnglishNewspaper,
  HindiNewspaper,
  JournalistProfile,
  JournalistTier,
  Spokesperson,
  SERMStrategy,
  SERMKeyword,
  PushdownContent,
  WikipediaEdit,
  CrisisProtocol,
  CrisisMessage,
  CrisisEscalation,
  LCO,
  Stringer,
  FacebookAdmin,
  WhatsAppOperator,
  ConstituencyYouTuber,
  VernacularPressRateCard,
  RadioRateCard,
  TVRateCard,
  CableTVRateCard,
  PressReleaseTemplate,
  RadioContentFormat,
  TVContentFormat,
  RegionalMediaBudget,
  MediaCampaignBudget,
  DialectPreference,
  CommunityRadioStation,
  StoryPlacement,
  QuestionToAvoid,
  TVPanelist,
  TVPanelStrategy,
  SocialMediaWarRoom,
  ContentCalendar,
  DistributionChannel,
  WhatsAppDistribution,
} from "@/types/media-sentiment";

// ==========================================
// PUNJABI NEWSPAPERS DATA
// ==========================================

export const punjabiNewspapersData: PunjabiNewspaper[] = [
  {
    name: "Ajit",
    dialect: "Standard Punjabi",
    circulation: "600,000+ copies daily",
    reach: "State-wide; strongest in Malwa/Doaba",
    politicalLean: "Congress-leaning (3.5/5)",
    owner: "Ajit Group of Publications (Hamdard family)",
    editorialFocus: "Rural readership, agricultural and Sikh religious content",
    rateCard: {
      standard: "INR 350-500 per column cm",
      frontPage: "INR 700-1,000 per column cm",
      backPage: "INR 550-750 per column cm",
      perColumnCm: "INR 350-500",
      classified: "INR 100-200 per word",
    },
    placementCalendar: {
      leadDays: 3,
      bookingDeadline: "2 days before publication",
      specialSections: ["Agriculture", "Religion", "Politics"],
      politicalAdPolicy: "Congress-friendly; offers party packages",
    },
  },
  {
    name: "Jagbani",
    dialect: "Standard Punjabi",
    circulation: "Major Punjabi daily",
    reach: "State-wide; strong in Majha/Doaba",
    politicalLean: "Moderate; Congress-leaning (3/5)",
    owner: "Jagbani Publications (Jagran Prakashan Group)",
    editorialFocus: "Urban readership, lifestyle and entertainment",
    rateCard: {
      standard: "INR 300-450 per column cm",
      frontPage: "INR 600-800 per column cm",
      backPage: "INR 500-650 per column cm",
      perColumnCm: "INR 300-450",
      classified: "INR 80-150 per word",
    },
    placementCalendar: {
      leadDays: 2,
      bookingDeadline: "1 day before",
      specialSections: ["Urban", "Youth", "Entertainment"],
      politicalAdPolicy: "Moderate rates; willing to negotiate",
    },
  },
  {
    name: "Punjabi Tribune",
    dialect: "Standard Punjabi",
    circulation: "500,000+ copies daily",
    reach: "State-wide; strong in urban centres",
    politicalLean: "Centrist/Independent (2.5/5)",
    owner: "The Tribune Group (Chandigarh)",
    editorialFocus: "Official language promotions, strong news coverage",
    rateCard: {
      standard: "INR 400-550 per column cm",
      frontPage: "INR 750-1,000 per column cm",
      backPage: "INR 600-800 per column cm",
      perColumnCm: "INR 400-550",
      classified: "INR 100-180 per word",
    },
    placementCalendar: {
      leadDays: 3,
      bookingDeadline: "2 days before",
      specialSections: ["Politics", "National", "Education"],
      politicalAdPolicy: "Balanced; values substance over spin",
    },
  },
  {
    name: "Rozana Spokesman",
    dialect: "Standard Punjabi",
    circulation: "350,000+ copies daily",
    reach: "State-wide; strong in Doaba",
    politicalLean: "Congress-friendly (3.5/5)",
    owner: "Spokesman Publications",
    editorialFocus: "SGPC, religious bodies, Sikh diaspora",
    rateCard: {
      standard: "INR 200-350 per column cm",
      frontPage: "INR 400-600 per column cm",
      backPage: "INR 300-500 per column cm",
      perColumnCm: "INR 200-350",
      classified: "INR 60-120 per word",
    },
    placementCalendar: {
      leadDays: 2,
      bookingDeadline: "1 day before",
      specialSections: ["SGPC", "Religious", "Diaspora"],
      politicalAdPolicy: "Congress-sympathetic; community focused",
    },
  },
  {
    name: "Punjab Kesari",
    dialect: "Malwai",
    circulation: "450,000+ copies daily",
    reach: "State-wide; dominant in Malwa",
    politicalLean: "BJP-RSS leaning (2/5)",
    owner: "Hindustan Publications (Jagran Group)",
    editorialFocus: "Urban, semi-urban, rural Jat Sikh, Aroras",
    rateCard: {
      standard: "INR 450-600 per column cm",
      frontPage: "INR 800-1,200 per column cm",
      backPage: "INR 650-900 per column cm",
      perColumnCm: "INR 450-600",
      classified: "INR 120-200 per word",
    },
    placementCalendar: {
      leadDays: 3,
      bookingDeadline: "2 days before",
      specialSections: ["Politics", "Business", "Agriculture"],
      politicalAdPolicy: "BJP-aligned; anti-AAP editorial stance",
    },
  },
  {
    name: "Jag Bani",
    dialect: "Standard Punjabi",
    circulation: "220,000+ copies daily",
    reach: "Malwa and Majha",
    politicalLean: "SAD aligned",
    owner: "Jagbani Publications",
    editorialFocus: "Rural Sikh, Majha diaspora",
    rateCard: {
      standard: "INR 300-450 per column cm",
      frontPage: "INR 550-750 per column cm",
      backPage: "INR 450-600 per column cm",
      perColumnCm: "INR 300-450",
      classified: "INR 80-150 per word",
    },
    placementCalendar: {
      leadDays: 2,
      bookingDeadline: "1 day before",
      specialSections: ["Rural", "Agriculture", "Sikh Issues"],
      politicalAdPolicy: "SAD-aligned; flexible on editorial",
    },
  },
  {
    name: "Desh Sevak",
    dialect: "Standard Punjabi",
    circulation: "Moderate",
    reach: "Chandigarh region",
    politicalLean: "Sikh-affiliated; Panthic issues",
    owner: "Desh Sevak Publications",
    editorialFocus: "Panthic issues, Sikh identity",
    rateCard: {
      standard: "INR 150-250 per column cm",
      frontPage: "INR 300-450 per column cm",
      backPage: "INR 250-350 per column cm",
      perColumnCm: "INR 150-250",
      classified: "INR 50-100 per word",
    },
    placementCalendar: {
      leadDays: 2,
      bookingDeadline: "1 day before",
      specialSections: ["Panthic", "Sikh Identity"],
      politicalAdPolicy: "Sikh-affiliated; moderate rates",
    },
  },
];

// ==========================================
// ENGLISH NEWSPAPERS DATA
// ==========================================

export const englishNewspapersData: EnglishNewspaper[] = [
  {
    name: "The Tribune",
    circulation: "~300,000 copies daily",
    reach: "Strong in Punjab; Chandigarh",
    regionalEdition: "Punjab Edition",
    politicalLean: "Centrist; historically independent",
  },
  {
    name: "Hindustan Times",
    circulation: "Significant urban readership",
    reach: "Chandigarh, Ludhiana, Jalandhar",
    regionalEdition: "Punjab Edition",
    politicalLean: "Moderately centrist; pro-establishment",
  },
  {
    name: "The Indian Express",
    circulation: "Moderate",
    reach: "Chandigarh bureau",
    regionalEdition: "Punjab Edition",
    politicalLean: "Independent; investigative journalism",
  },
  {
    name: "Times of India",
    circulation: "Moderate; urban elite",
    reach: "Chandigarh/Ludhiana",
    regionalEdition: "Punjab Edition",
    politicalLean: "Pro-business; BJP-leaning nationally",
  },
  {
    name: "The Hindu",
    circulation: "Limited but influential",
    reach: "Chandigarh bureau",
    regionalEdition: "National with Punjab coverage",
    politicalLean: "Independent; South-centric",
  },
];

// ==========================================
// HINDI NEWSPAPERS DATA
// ==========================================

export const hindiNewspapersData: HindiNewspaper[] = [
  {
    name: "Punjab Kesari",
    circulation: "Large; widely read in Punjab",
    reach: "Malwa region; Hindi-speaking areas",
    regionalEdition: "Punjab Edition",
    politicalLean: "Strongly BJP/Hindu nationalist aligned",
  },
  {
    name: "Dainik Bhaskar",
    circulation: "Significant in Hindi-speaking areas",
    reach: "Pathankot, Hoshiarpur, Rupnagar",
    regionalEdition: "Punjab Edition",
    politicalLean: "Pro-BJP nationally; local coverage balanced",
  },
  {
    name: "Hindi Tribune",
    circulation: "Moderate",
    reach: "Chandigarh",
    regionalEdition: "Punjab",
    politicalLean: "Neutral to centrist",
  },
  {
    name: "Amar Ujala",
    circulation: "Moderate in Punjab",
    reach: "Chandigarh bureau",
    regionalEdition: "Punjab Edition",
    politicalLean: "Pro-BJP editorial line",
  },
];

// ==========================================
// JOURNALIST PROFILES DATA
// ==========================================

export const journalistProfilesData: JournalistProfile[] = [
  {
    name: "Barjinder Singh Hamdard",
    outlet: "Ajit",
    designation: "Editor-in-Chief",
    location: "Jalandhar",
    beat: "Overall editorial direction; Sikh causes, farmer issues",
    phone: "[Jalandhar office]",
    leaning: "Pro-Congress",
    influence: "High",
    accessLevel: "Preferred",
    crisisContact: true,
    notes: "Most prominent target of AAP govt media actions 2023; family legacy from Sadhu Singh Hamdard",
  },
  {
    name: "GS Bhullar",
    outlet: "Jagbani",
    designation: "Officiating President, PDMA",
    location: "Jalandhar",
    beat: "Political; digital media ecosystem",
    phone: "[To be verified]",
    leaning: "Pro-Congress",
    influence: "Medium",
    accessLevel: "Regular",
    crisisContact: true,
    notes: "Key intermediary for digital media ecosystem; PDMA leadership gives cross-channel influence",
  },
  {
    name: "Swaraj Bir Singh",
    outlet: "Punjabi Tribune",
    designation: "Editor",
    location: "Chandigarh",
    beat: "Overall editorial",
    phone: "[Chandigarh bureau]",
    leaning: "Neutral",
    influence: "High",
    accessLevel: "Preferred",
    crisisContact: true,
    notes: "Tribune brand demands factual accuracy; policy-focused approach works best",
  },
  {
    name: "Vikram Jeet Singh Mann",
    outlet: "Daily Ajit",
    designation: "Staff Correspondent",
    location: "Chandigarh",
    beat: "Chandigarh political beat",
    phone: "[Chandigarh]",
    leaning: "Pro-Congress",
    influence: "Medium",
    accessLevel: "Regular",
    crisisContact: false,
    notes: "First point of contact for Chandigarh-based Ajit coverage",
  },
  {
    name: "Bhushan Sood",
    outlet: "Daily Ajit",
    designation: "Political Reporter",
    location: "Jalandhar",
    beat: "Political",
    phone: "[Jalandhar]",
    leaning: "Pro-Congress",
    influence: "Medium",
    accessLevel: "Regular",
    crisisContact: false,
    notes: "Regular contact for Ajit story inputs",
  },
  {
    name: "Rajesh Ramachandran",
    outlet: "The Tribune",
    designation: "Political Editor",
    location: "Chandigarh",
    beat: "Political Editor, Chandigarh",
    phone: "[Chandigarh bureau]",
    leaning: "Neutral",
    influence: "High",
    accessLevel: "Preferred",
    crisisContact: true,
    notes: "Tier 1 priority for op-ed placement; Tribune's neutral credibility essential",
  },
  {
    name: "Jupinderjit Singh",
    outlet: "The Tribune",
    designation: "Deputy Editor",
    location: "Chandigarh",
    beat: "Political",
    phone: "[Chandigarh bureau]",
    leaning: "Neutral",
    influence: "High",
    accessLevel: "Preferred",
    crisisContact: true,
    notes: "Interview target for major announcements",
  },
  {
    name: "Asit Jolly",
    outlet: "India Today",
    designation: "Chandigarh Bureau Head",
    location: "Chandigarh",
    beat: "Chandigarh Bureau",
    phone: "[Chandigarh bureau]",
    leaning: "Neutral",
    influence: "High",
    accessLevel: "Regular",
    crisisContact: true,
    notes: "India Today reach extends beyond Punjab; important for national narrative",
  },
  {
    name: "Yadwinder Singh",
    outlet: "Pro Punjab Tv",
    designation: "Founder/Editor",
    location: "State-wide",
    beat: "Live political coverage, press conferences, investigative",
    phone: "[WhatsApp]",
    leaning: "Pro-Congress",
    influence: "High",
    accessLevel: "Preferred",
    crisisContact: true,
    notes: "1.51M subscribers; founded 2020; highest-priority YouTube channel",
  },
  {
    name: "Prabjot Singh",
    outlet: "PTC News",
    designation: "Anchor/Journalist",
    location: "Chandigarh",
    beat: "Overall Punjab",
    phone: "[PTC News]",
    leaning: "Pro-SAD",
    influence: "High",
    accessLevel: "Restricted",
    crisisContact: false,
    notes: "Hostile outlet; monitor coverage but do not cultivate",
  },
];

// ==========================================
// JOURNALIST TIERS DATA
// ==========================================

export const journalistTiersData: JournalistTier[] = [
  {
    tier: "A",
    criteria: "Bureau chiefs, senior correspondents of major outlets, electronic media editors with programming influence",
    engagement: "Exclusive access, personal briefings, senior leader meetings",
    priority: "CRITICAL",
  },
  {
    tier: "B",
    criteria: "General political reporters, stringers, digital-only journalists",
    engagement: "Responsive service, regular briefings, press release priority",
    priority: "HIGH",
  },
  {
    tier: "C",
    criteria: "Local correspondents, junior staff",
    engagement: "Routine engagement, press conference access",
    priority: "MEDIUM",
  },
];

// ==========================================
// SPOKESPERSONS DATA
// ==========================================

export const spokespersonsData: Spokesperson[] = [
  {
    name: "Raja Warring",
    role: "PPCC President",
    tier: "National",
    specialization: ["Party strategy", "CM face decisions", "Major announcements"],
    mediaTrained: true,
    availability: "Full-time",
  },
  {
    name: "Partap Singh Bajwa",
    role: "PPCC Chairman",
    tier: "State",
    specialization: ["Policy", "Economics", "Regional politics"],
    mediaTrained: true,
    availability: "Full-time",
  },
  {
    name: "Bhupesh Baghel",
    role: "Punjab In-charge",
    tier: "National",
    specialization: ["Central coordination", "High-command liaison"],
    mediaTrained: true,
    availability: "As needed",
  },
  {
    name: "[Economist Advisor]",
    role: "Economic Spokesperson",
    tier: "State",
    specialization: ["Economics", "Jobs", "Data analysis"],
    mediaTrained: true,
    availability: "Per announcement",
  },
  {
    name: "[Farmer Cell Leader]",
    role: "Agricultural Spokesperson",
    tier: "Regional",
    specialization: ["Farmers", "Agriculture", "Mandis"],
    mediaTrained: true,
    availability: "Per announcement",
  },
];

// ==========================================
// SERM STRATEGIES DATA
// ==========================================

export const sermStrategiesData: SERMStrategy[] = [
  {
    type: "Pushdown",
    objective: "Push negative content below top 3 search results",
    targetKeywords: ["Congress corrupt Punjab", "Congress old faces Punjab", "Punjab Congress B-team"],
    timeline: "Ongoing; intensive 90 days pre-election",
    responsible: "Digital Cell",
  },
  {
    type: "ContentCreation",
    objective: "Create authoritative positive content in high volume",
    targetKeywords: ["Punjab Congress 2027", "Congress Punjab manifesto", "Raja Warring"],
    timeline: "6-9 months",
    responsible: "Content Team",
  },
  {
    type: "WikipediaEditing",
    objective: "Maintain accurate, comprehensive Wikipedia presence",
    targetKeywords: ["Punjab Pradesh Congress Committee", "Amarinder Singh Raja Warring"],
    timeline: "Ongoing",
    responsible: "Wikipedia Team",
  },
  {
    type: "SocialListening",
    objective: "Monitor and respond to emerging narratives",
    targetKeywords: ["Congress Punjab", "Punjab Congress news"],
    timeline: "Real-time",
    responsible: "Social Media Cell",
  },
  {
    type: "CrisisResponse",
    objective: "Rapid response to negative content",
    targetKeywords: ["Congress Punjab crisis", "Raja Warring controversy"],
    timeline: "Within 2 hours of detection",
    responsible: "Rapid Response Team",
  },
];

// ==========================================
// SERM KEYWORDS DATA
// ==========================================

export const sermKeywordsData: SERMKeyword[] = [
  {
    keyword: "Punjab Congress",
    category: "Neutral",
    priority: "Critical",
    pushdownTargets: ["Congress corrupt Punjab", "Congress old faces Punjab"],
    contentBrief: "Comprehensive party overview with achievements and 2027 vision",
  },
  {
    keyword: "Raja Warring",
    category: "Positive",
    priority: "High",
    pushdownTargets: ["Raja Warring defection"],
    contentBrief: "Leadership biography, party unity messaging, campaign activities",
  },
  {
    keyword: "Congress Punjab 2027",
    category: "Positive",
    priority: "Critical",
    pushdownTargets: ["Congress lost Punjab", "Punjab Congress failures"],
    contentBrief: "Mission 2027 campaign launch, manifesto preview, candidate profiles",
  },
  {
    keyword: "Congress Punjab manifesto 2027",
    category: "Positive",
    priority: "Critical",
    pushdownTargets: ["Punjab Congress promise 2022"],
    contentBrief: "Full manifesto with policy commitments and implementation timelines",
  },
  {
    keyword: "Congress Punjab drug policy",
    category: "Positive",
    priority: "High",
    pushdownTargets: ["Congress Punjab drugs"],
    contentBrief: "Comprehensive drug rehabilitation plan with block-level de-addiction centres",
  },
];

// ==========================================
// CRISIS PROTOCOLS DATA
// ==========================================

export const crisisProtocolsData: CrisisProtocol[] = [
  {
    level: "Red",
    trigger: "Leadership scandal, major policy failure, violent incident, death of prominent figure",
    responseTime: "30 minutes",
    spokesperson: "Party President or Senior Leader",
    actions: [
      "Immediate senior leader response",
      "Press conference activation",
      "Full protocol activation",
      "Legal team mobilization",
    ],
    stakeholders: ["High Command", "State Leadership", "Legal Cell", "Media Cell"],
  },
  {
    level: "Orange",
    trigger: "Local leader controversy, misstatement by spokesperson, negative policy implementation",
    responseTime: "2 hours",
    spokesperson: "Communications Head",
    actions: [
      "Rapid response statement",
      "Holding statement deployment",
      "Briefing if necessary",
    ],
    stakeholders: ["Communications Director", "Media Cell", "Affected Leader"],
  },
  {
    level: "Yellow",
    trigger: "Social media criticism, isolated negative coverage, opposition attack",
    responseTime: "4 hours",
    spokesperson: "Media Cell",
    actions: [
      "Monitor and assess",
      "Standard channel response",
      "No protocol activation",
    ],
    stakeholders: ["Media Cell"],
  },
  {
    level: "Green",
    trigger: "Routine positive coverage, no negative developments",
    responseTime: "N/A",
    spokesperson: "N/A",
    actions: [
      "Continue standard operations",
      "Maintain content calendar",
    ],
    stakeholders: ["Media Cell"],
  },
];

// ==========================================
// LCO DATA (Local Cable Operators)
// ==========================================

export const lcoData: LCO[] = [
  {
    name: "[LCO Name]",
    area: "[Village/Town]",
    constituency: "[Assembly Constituency]",
    cableReach: "300-2,000 households",
    digitalSubscriberCount: 500,
    politicalLean: "Transactional",
    congressEngagement: "Unknown",
    activationPotential: "Medium",
    notes: "Engage through block-level Congress workers",
  },
];

// ==========================================
// STRINGER DATA
// ==========================================

export const stringersData: Stringer[] = [
  {
    name: "[Stringer Name]",
    area: "[Village/Cluster]",
    outlet: "[Newspaper Name]",
    beat: "[Beat Focus]",
    politicalLean: "Variable",
    congressEngagement: "Passive",
    storyYield: "2-3 stories per week",
    contactFrequency: "Weekly",
    notes: "Retired teachers, former block politicians, or aspiring journalists",
  },
];

// ==========================================
// FACEBOOK ADMIN DATA
// ==========================================

export const facebookAdminsData: FacebookAdmin[] = [
  {
    name: "[Admin Name]",
    groupName: "[Group Name]",
    members: 2500,
    region: "[Constituency/Region]",
    politicalLean: "Neutral",
    congressEngagement: "Passive",
    monetization: false,
    adminType: "Sympathizer",
    notes: "Approach with value before making asks",
  },
];

// ==========================================
// WHATSAPP OPERATOR DATA
// ==========================================

export const whatsappOperatorsData: WhatsAppOperator[] = [
  {
    name: "[Operator Name]",
    groupName: "[Group Name]",
    members: 250,
    region: "[Constituency]",
    purpose: "Voter Outreach",
    politicalLean: "Neutral",
    congressEngagement: "Passive",
    forwardingReliability: "Medium",
    notes: "Village residents groups, caste/community groups, Dera follower groups",
  },
];

// ==========================================
// CONSTITUENCY YOUTUBER DATA
// ==========================================

export const constituencyYouTubersData: ConstituencyYouTuber[] = [
  {
    name: "[YouTuber Name]",
    channelName: "[Channel Name]",
    subscribers: "50K-200K",
    contentType: "News",
    politicalLean: "Pro-Congress",
    congressEngagement: "Active",
    reach: "District-level",
    monetization: true,
    notes: "Local political commentators with 50K-300K subscribers are highest priority",
  },
];

// ==========================================
// VERNACULAR PRESS RATE CARDS
// ==========================================

export const vernacularPressRatesData: VernacularPressRateCard[] = [
  {
    newspaperName: "Punjab Kesari",
    standard: "INR 450-600 per column cm",
    frontPage: "INR 800-1,200 per column cm",
    backPage: "INR 650-900 per column cm",
    perColumnCm: "INR 450-600",
    classifiedPerWord: "INR 120-200",
    digitalDisplay: "INR 200-300 per column cm",
    regionalDiscount: "Malwa editions 10% cheaper",
  },
  {
    newspaperName: "Ajit",
    standard: "INR 350-500 per column cm",
    frontPage: "INR 700-1,000 per column cm",
    backPage: "INR 550-750 per column cm",
    perColumnCm: "INR 350-500",
    classifiedPerWord: "INR 100-200",
    digitalDisplay: "INR 150-250 per column cm",
    regionalDiscount: "Doaba edition 20% cheaper",
  },
  {
    newspaperName: "Jagbani",
    standard: "INR 300-450 per column cm",
    frontPage: "INR 600-800 per column cm",
    backPage: "INR 500-650 per column cm",
    perColumnCm: "INR 300-450",
    classifiedPerWord: "INR 80-150",
    digitalDisplay: "INR 100-200 per column cm",
    regionalDiscount: "Rural editions 25% lower",
  },
  {
    newspaperName: "Rozana Spokesman",
    standard: "INR 200-350 per column cm",
    frontPage: "INR 400-600 per column cm",
    backPage: "INR 300-500 per column cm",
    perColumnCm: "INR 200-350",
    classifiedPerWord: "INR 60-120",
    digitalDisplay: "INR 80-150 per column cm",
    regionalDiscount: "Community supplements negotiable",
  },
];

// ==========================================
// RADIO RATE CARDS
// ==========================================

export const radioRatesData: RadioRateCard[] = [
  {
    station: "Radio Punjab (AIR)",
    frequency: "105.6 FM",
    standard: "INR 3,000-6,000 per spot",
    primeTime: "INR 6,000-12,000 per spot",
    package: "INR 25,000-50,000 for 10 spots",
    minimumBuy: "5 spots minimum",
  },
  {
    station: "Big FM",
    frequency: "92.7 FM",
    standard: "INR 4,000-8,000 per spot",
    primeTime: "INR 8,000-15,000 per spot",
    package: "INR 35,000-70,000 for 10 spots",
    minimumBuy: "10 spots minimum",
  },
  {
    station: "Radio City",
    frequency: "91.1 FM",
    standard: "INR 3,500-7,000 per spot",
    primeTime: "INR 7,000-14,000 per spot",
    package: "INR 30,000-60,000 for 10 spots",
    minimumBuy: "10 spots minimum",
  },
  {
    station: "Radio Mirchi",
    frequency: "98.3 FM",
    standard: "INR 3,000-6,000 per spot",
    primeTime: "INR 6,000-12,000 per spot",
    package: "INR 25,000-50,000 for 10 spots",
    minimumBuy: "5 spots minimum",
  },
  {
    station: "FM Gold",
    frequency: "106.4 FM",
    standard: "INR 2,500-5,000 per spot",
    primeTime: "INR 5,000-10,000 per spot",
    package: "INR 20,000-40,000 for 10 spots",
    minimumBuy: "5 spots minimum",
  },
];

// ==========================================
// TV RATE CARDS
// ==========================================

export const tvRatesData: TVRateCard[] = [
  {
    channel: "PTC News",
    type: "News",
    standard: "INR 1,500-2,500 per 10 sec",
    primeTime: "INR 4,000-6,000 per 30 sec",
    package: "INR 40,000-60,000 for 10 spots",
    minimumBuy: "25 spots minimum",
    ddFreeDish: true,
  },
  {
    channel: "ABP Sanjha",
    type: "News",
    standard: "INR 1,200-2,000 per 10 sec",
    primeTime: "INR 3,500-5,000 per 30 sec",
    package: "INR 30,000-50,000 for 10 spots",
    minimumBuy: "20 spots minimum",
    ddFreeDish: false,
  },
  {
    channel: "Zee Punjabi",
    type: "GEC",
    standard: "INR 800-1,500 per 10 sec",
    primeTime: "INR 2,000-3,500 per 30 sec",
    package: "INR 20,000-35,000 for 10 spots",
    minimumBuy: "15 spots minimum",
    ddFreeDish: true,
  },
  {
    channel: "DD Punjabi",
    type: "Regional",
    standard: "INR 500-1,000 per 10 sec",
    primeTime: "INR 1,500-2,500 per 30 sec",
    package: "INR 15,000-25,000 for 10 spots",
    minimumBuy: "10 spots minimum",
    ddFreeDish: true,
  },
];

// ==========================================
// CABLE TV RATE CARDS
// ==========================================

export const cableTVRatesData: CableTVRateCard[] = [
  {
    mso: "SITI Networks",
    lcn: "Various",
    basePackage: "INR 50,000-1,00,000 per campaign",
    politicalRate: "INR 75,000-1,50,000 per campaign",
    placementFee: "INR 10,000-25,000 extra",
  },
  {
    mso: "DEN Networks",
    lcn: "Various",
    basePackage: "INR 45,000-90,000 per campaign",
    politicalRate: "INR 65,000-1,35,000 per campaign",
    placementFee: "INR 8,000-20,000 extra",
  },
];

// ==========================================
// PRESS RELEASE TEMPLATES
// ==========================================

export const pressReleaseTemplatesData: PressReleaseTemplate[] = [
  {
    type: "Standard",
    format: "Inverted pyramid; 400-600 words",
    keyElements: [
      "Headline (60-70 characters, keyword-rich)",
      "Subheadline expanding headline",
      "Dateline and lead paragraph (who/what/when/where)",
      "Body organized by importance",
      "2-3 quotes from leaders",
      "Background context",
      "Boilerplate",
    ],
    distribution: ["PTI", "UNI", "Direct email", "WhatsApp broadcast"],
    approvalChain: ["Media Cell Head", "Communications Director", "Leader (if Tier 1)"],
  },
  {
    type: "Crisis",
    format: "Brief; 200-300 words; immediate",
    keyElements: [
      "Acknowledge situation",
      "Express concern",
      "Indicate action being taken",
      "Provide factual context",
    ],
    distribution: ["WhatsApp direct to journalists", "Website immediately", "Social media"],
    approvalChain: ["Party President", "Communications Director"],
  },
  {
    type: "Announcement",
    format: "Full press release; 500-800 words",
    keyElements: [
      "Major announcement details",
      "Leader quote",
      "Supporting data",
      "Background on issue",
      "All-language translations ready",
    ],
    distribution: ["All friendly outlets", "Neutral Tier 1", "International media"],
    approvalChain: ["Leader approval required", "Legal review", "All translations approved"],
  },
];

// ==========================================
// RADIO CONTENT FORMATS
// ==========================================

export const radioContentFormatsData: RadioContentFormat[] = [
  {
    format: "Jingle",
    duration: "30 seconds",
    productionRequirements: "Professional audio production; Punjabi voiceover; background music",
    complianceNotes: "Election commission disclosure required",
  },
  {
    format: "PSA",
    duration: "30-60 seconds",
    productionRequirements: "Informal tone; community figure endorsement preferred",
    complianceNotes: "Non-partisan framing preferred for PSA content",
  },
  {
    format: "TalkShow",
    duration: "15-30 minutes",
    productionRequirements: "Studio setup; expert guest; interactive format",
    complianceNotes: "Balanced representation if competing parties invited",
  },
  {
    format: "Interview",
    duration: "5-10 minutes",
    productionRequirements: "Candidate or spokesperson availability; pre-interview brief",
    complianceNotes: "Standard political content disclosure",
  },
];

// ==========================================
// TV CONTENT FORMATS
// ==========================================

export const tvContentFormatsData: TVContentFormat[] = [
  {
    format: "NewsPackage",
    duration: "90-120 seconds",
    productionRequirements: "Professional shoot; key messages; visual B-roll",
    placementStrategy: "Early morning or evening news slots",
  },
  {
    format: "TalkShow",
    duration: "20-30 minutes",
    productionRequirements: "Studio; host; 2-3 guests; audience questions",
    placementStrategy: "Prime time slots; debate format",
  },
  {
    format: "Documentary",
    duration: "5-15 minutes",
    productionRequirements: "Professional production; multiple locations; interviews",
    placementStrategy: "Special segments; weekend slots",
  },
  {
    format: "PSA",
    duration: "30-60 seconds",
    productionRequirements: "Clean messaging; community figures; emotional appeal",
    placementStrategy: "Run between programs; high frequency",
  },
];

// ==========================================
// REGIONAL MEDIA BUDGETS
// ==========================================

export const regionalMediaBudgetsData: RegionalMediaBudget[] = [
  {
    region: "Malwa",
    totalBudget: "INR 60 lakh",
    tvAllocation: "INR 25 lakh",
    radioAllocation: "INR 8 lakh",
    printAllocation: "INR 15 lakh",
    digitalAllocation: "INR 10 lakh",
    contingency: "INR 2 lakh",
  },
  {
    region: "Majha",
    totalBudget: "INR 25 lakh",
    tvAllocation: "INR 10 lakh",
    radioAllocation: "INR 5 lakh",
    printAllocation: "INR 6 lakh",
    digitalAllocation: "INR 3 lakh",
    contingency: "INR 1 lakh",
  },
  {
    region: "Doaba",
    totalBudget: "INR 15 lakh",
    tvAllocation: "INR 5 lakh",
    radioAllocation: "INR 3 lakh",
    printAllocation: "INR 4 lakh",
    digitalAllocation: "INR 2.5 lakh",
    contingency: "INR 0.5 lakh",
  },
];

// ==========================================
// MEDIA CAMPAIGN BUDGETS
// ==========================================

export const mediaCampaignBudgetsData: MediaCampaignBudget[] = [
  {
    scale: "Minimum",
    duration: "4 weeks",
    tvBudget: "INR 18-33 lakh",
    radioBudget: "INR 3-6 lakh",
    printBudget: "INR 5-10 lakh",
    digitalBudget: "INR 2-5 lakh",
    total: "INR 28-54 lakh",
    costPerReach: "INR 0.50-1.00 per reach",
  },
  {
    scale: "Recommended",
    duration: "8 weeks",
    tvBudget: "INR 63 lakh-1 crore",
    radioBudget: "INR 5.5-11 lakh",
    printBudget: "INR 12-20 lakh",
    digitalBudget: "INR 5-10 lakh",
    total: "INR 85 lakh-1.4 crore",
    costPerReach: "INR 0.35-0.70 per reach",
  },
  {
    scale: "Maximum",
    duration: "12 weeks",
    tvBudget: "INR 1-1.5 crore",
    radioBudget: "INR 8-15 lakh",
    printBudget: "INR 18-28 lakh",
    digitalBudget: "INR 10-18 lakh",
    total: "INR 1.36-2.11 crore",
    costPerReach: "INR 0.25-0.50 per reach",
  },
];

// ==========================================
// DIALECT PREFERENCES
// ==========================================

export const dialectPreferencesData: DialectPreference[] = [
  {
    dialect: "Malwai",
    percentage: "45% of Punjabi speakers",
    mediaPreference: "Punjab Kesari, Ajit (Malwa editions)",
    contentTone: "Hindi-influenced Punjabi; rural agrarian focus",
  },
  {
    dialect: "Majha",
    percentage: "40% of Punjabi speakers",
    mediaPreference: "Punjab Kesari, Ajit, Jagbani",
    contentTone: "Pure Punjabi; Sanskrit-derived vocabulary; gurdwara references",
  },
  {
    dialect: "Doaba",
    percentage: "15% of Punjabi speakers",
    mediaPreference: "Ajit (Doaba edition), local papers",
    contentTone: "Diaspora references; parwaas terms; refugee community identity",
  },
];

// ==========================================
// COMMUNITY RADIO STATIONS
// ==========================================

export const communityRadioStationsData: CommunityRadioStation[] = [
  {
    name: "Radio DIC",
    frequency: "107.8 FM",
    coverage: "10-15 km from Chandigarh",
    format: "Educational; community",
    politicalAdPolicy: "Issue-based awareness only; no direct political advertising",
    engagement: "Moderate cost; high trust in local community",
  },
  {
    name: "Radio 7",
    frequency: "90.0 FM",
    coverage: "15 km from Chandigarh",
    format: "University; youth-focused",
    politicalAdPolicy: "Youth engagement content preferred",
    engagement: "Punjabi University Chandigarh",
  },
  {
    name: "Radio LLM",
    frequency: "106.4 FM",
    coverage: "10 km from Ludhiana",
    format: "Rural youth; farmers",
    politicalAdPolicy: "Agricultural and rural content preferred",
    engagement: "Ludhiana Leadership Movement",
  },
];

// ==========================================
// TV PANEL STRATEGY DATA
// ==========================================

export const tvPanelistsData: TVPanelist[] = [
  {
    name: "[Spokesperson Name]",
    organization: "Congress",
    leaning: "Pro-Congress",
    reliability: "Dependable",
    topics: ["Party policy", "Election issues", "Counter-narratives"],
    avoidTopics: ["Internal party disputes", "Personal attacks"],
    notes: "Media trained; available for rapid response",
  },
];

export const tvPanelStrategiesData: TVPanelStrategy[] = [
  {
    show: "PTC News Debate",
    channel: "PTC News",
    format: "Debate",
    panelists: ["Congress Spokesperson", "AAP Spokesperson", "BJP Spokesperson"],
    talkingPoints: ["AAP governance failures", "Congress 2027 vision", "Drug crisis solutions"],
    questionsToAvoid: ["Sidhu's future", "Leadership disputes"],
    counterNarratives: ["Congress is the only alternative", "BJP-AAP alliance is fragmented"],
  },
];

// ==========================================
// SOCIAL MEDIA WAR ROOM
// ==========================================

export const socialMediaWarRoomData: SocialMediaWarRoom = {
  activePlatforms: ["Facebook", "Twitter", "Instagram", "YouTube", "WhatsApp"],
  teamSize: "4-6 dedicated personnel",
  shifts: ["Morning (8AM-4PM)", "Evening (4PM-12AM)"],
  responseTime: "15 minutes for urgent queries",
  escalationProtocol: "Tier 1: Media Cell | Tier 2: Communications Director | Tier 3: Party President",
};

// ==========================================
// CONTENT CALENDAR
// ==========================================

export const contentCalendarData: ContentCalendar[] = [
  {
    week: "Week 1",
    theme: "Party Positioning",
    platforms: ["Facebook", "Twitter", "Instagram"],
    contentTypes: ["Leadership profiles", "Party history", "Vision statements"],
    keyMessages: ["Congress 2027 Mission", "Raja Warring leadership", "United Punjab"],
    approvers: ["Communications Director"],
  },
  {
    week: "Week 2",
    theme: "Issue Focus: Drugs",
    platforms: ["Facebook", "YouTube", "WhatsApp"],
    contentTypes: ["Data visualizations", "Expert interviews", "Victim testimonies"],
    keyMessages: ["AAP failed on drugs promise", "Congress de-addiction plan", "Block-level centres"],
    approvers: ["Media Cell Head", "Legal"],
  },
];

// ==========================================
// DISTRIBUTION CHANNELS
// ==========================================

export const distributionChannelsData: DistributionChannel[] = [
  {
    channel: "WhatsApp",
    type: "Official",
    reach: "50,000+ voters",
    reliability: "High",
    cost: "Minimal (data costs)",
  },
  {
    channel: "Facebook",
    type: "Sympathizer",
    reach: "25,000+ voters",
    reliability: "Medium",
    cost: "INR 10,000-20,000 per month",
  },
  {
    channel: "Email",
    type: "Official",
    reach: "5,000+ contacts",
    reliability: "High",
    cost: "Minimal (software subscription)",
  },
];

export const whatsAppDistributionData: WhatsAppDistribution[] = [
  {
    groupName: "MJ-FRIENDLY-PUNJABI",
    type: "Media",
    members: 20,
    purpose: "Friendly Punjabi journalists",
    forwardingReliability: "High",
  },
  {
    groupName: "MJ-FRIENDLY-ENGLISH",
    type: "Media",
    members: 10,
    purpose: "Friendly English/Hindi journalists",
    forwardingReliability: "High",
  },
  {
    groupName: "Workers-Congress-Punjab",
    type: "Workers",
    members: 500,
    purpose: "Party worker coordination",
    forwardingReliability: "High",
  },
  {
    groupName: "Sympathizers-Punjab",
    type: "Sympathizers",
    members: 200,
    purpose: "Supporter network",
    forwardingReliability: "Medium",
  },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get journalist profile by name
 */
export function getJournalistByName(name: string): JournalistProfile | undefined {
  return journalistProfilesData.find(
    (j) => j.name.toLowerCase().includes(name.toLowerCase())
  );
}

/**
 * Get Punjabi newspaper by name
 */
export function getPunjabiNewspaperByName(name: string): PunjabiNewspaper | undefined {
  return punjabiNewspapersData.find(
    (n) => n.name.toLowerCase().includes(name.toLowerCase())
  );
}

/**
 * Get rate card for newspaper
 */
export function getNewspaperRateCard(name: string): VernacularPressRateCard | undefined {
  return vernacularPressRatesData.find(
    (r) => r.newspaperName.toLowerCase().includes(name.toLowerCase())
  );
}

/**
 * Get radio rate by station
 */
export function getRadioRateByStation(station: string): RadioRateCard | undefined {
  return radioRatesData.find(
    (r) => r.station.toLowerCase().includes(station.toLowerCase())
  );
}

/**
 * Get TV rate by channel
 */
export function getTVRateByChannel(channel: string): TVRateCard | undefined {
  return tvRatesData.find(
    (r) => r.channel.toLowerCase().includes(channel.toLowerCase())
  );
}

/**
 * Get crisis protocol by level
 */
export function getCrisisProtocolByLevel(
  level: "Red" | "Orange" | "Yellow" | "Green"
): CrisisProtocol | undefined {
  return crisisProtocolsData.find((p) => p.level === level);
}

/**
 * Get SERM strategy by type
 */
export function getSERMStrategyByType(
  type: "Pushdown" | "ContentCreation" | "WikipediaEditing" | "SocialListening" | "CrisisResponse"
): SERMStrategy | undefined {
  return sermStrategiesData.find((s) => s.type === type);
}

/**
 * Get media campaign budget by scale
 */
export function getMediaBudgetByScale(
  scale: "Minimum" | "Recommended" | "Maximum"
): MediaCampaignBudget | undefined {
  return mediaCampaignBudgetsData.find((b) => b.scale === scale);
}

/**
 * Get regional media budget by region
 */
export function getRegionalBudgetByRegion(
  region: string
): RegionalMediaBudget | undefined {
  return regionalMediaBudgetsData.find(
    (b) => b.region.toLowerCase() === region.toLowerCase()
  );
}

/**
 * Get dialect preference by dialect name
 */
export function getDialectPreference(
  dialect: string
): DialectPreference | undefined {
  return dialectPreferencesData.find(
    (d) => d.dialect.toLowerCase() === dialect.toLowerCase()
  );
}

// ==========================================
// COMPLETE DATA EXPORT
// ==========================================

export const mediaSentimentData = {
  reportDate: "May 20, 2026",
  confidence: {
    newspapers: "HIGH",
    tvChannels: "HIGH",
    radio: "MEDIUM",
    journalists: "MEDIUM-HIGH",
    serm: "MEDIUM",
    crisisProtocols: "HIGH",
    budgets: "MEDIUM",
  },
  newspapers: {
    punjabi: punjabiNewspapersData,
    english: englishNewspapersData,
    hindi: hindiNewspapersData,
  },
  journalists: journalistProfilesData,
  journalistTiers: journalistTiersData,
  spokespersons: spokespersonsData,
  serm: {
    strategies: sermStrategiesData,
    keywords: sermKeywordsData,
  },
  crisis: {
    protocols: crisisProtocolsData,
  },
  constituency: {
    lco: lcoData,
    stringers: stringersData,
    facebookAdmins: facebookAdminsData,
    whatsappOperators: whatsappOperatorsData,
    youTubers: constituencyYouTubersData,
  },
  rates: {
    vernacularPress: vernacularPressRatesData,
    radio: radioRatesData,
    tv: tvRatesData,
    cableTV: cableTVRatesData,
  },
  content: {
    pressReleases: pressReleaseTemplatesData,
    radioFormats: radioContentFormatsData,
    tvFormats: tvContentFormatsData,
  },
  budgets: {
    regional: regionalMediaBudgetsData,
    campaign: mediaCampaignBudgetsData,
  },
  regional: {
    dialects: dialectPreferencesData,
    communityRadio: communityRadioStationsData,
  },
  digital: {
    warRoom: socialMediaWarRoomData,
    contentCalendar: contentCalendarData,
    distribution: distributionChannelsData,
    whatsappDistribution: whatsAppDistributionData,
  },
  tv: {
    panelists: tvPanelistsData,
    strategies: tvPanelStrategiesData,
  },
};
