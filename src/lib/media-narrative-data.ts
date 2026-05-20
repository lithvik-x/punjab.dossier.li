// Media Narrative Data for Punjab Dashboard
// Derived from: research-P2/07_media_narrative/*.md
// Date: May 20, 2026 | Status: COMPLETE

import type {
  TVChannel,
  TVAdRate,
  RadioStation,
  DiasporaRadio,
  CampaignBudget,
  YouTubeChannel,
  RegionalStrategy,
  MSONetwork,
  MediaSource,
  SocialMetric,
  Journalist,
  CoverageVolume,
  CongressMention,
  CongressSentiment,
  AAPSentiment,
  BJPSentiment,
  // Perception page types
  StrategyPhase,
  NarrativePillar,
  VoteShareTrajectory,
  SeatScenario,
  ScenarioPlanning,
  CMFaceAnalysis,
  CMAnnouncementTiming,
  BreakevenAnalysis,
  GrievanceMatrix,
  AngryVoterProfile,
  // Party page types
  PartyWorker,
  ClassCasteEntry,
  NRISupportPattern,
  NRIVoterRegistration,
  VolunteerRecruitment,
  VolunteerSource,
  NonMonetaryIncentive,
  VolunteerTraining,
  TrainingModule,
  TrainingFormat,
  BoothStructure,
  BoothRole,
  PollingDayOp,
  ThreeContactStage,
  BoothContactStrategy,
  CeilingEffect,
  FemaleBoothSevakTarget,
  GOTVOperationsBudget,
  GOTVBreakdown,
  ElectionConstraint,
  HarvestBlackout,
  Countdown72Hour,
  BSPRelaunch2026,
  // SAD status types
  SADStatusData,
  ElectoralDecline,
  SADFaction,
  BSPAlliance,
  PanthicIssues,
  SADKeyLeader,
  // Additional types needed
  CongressScenario,
  ConstitutionalFramework,
  SupremeCourtPrecedent,
  ScenarioMatrix,
  PresidentsRuleScenario,
  CommunicationStrategy,
  MediaManagement,
  LegalPreparedness,
  ElectionPetitionDetails,
  RecountRequestDetails,
  DisqualificationCaseDetails,
  EVMVVPATChallengeDetails,
  GovernmentFormationTimeline,
  KeyVariable,
} from "@/types/media-narrative";

// ==========================================
// SENTIMENT DATA
// ==========================================

export const congressSentimentData: CongressSentiment = {
  negative: 52,
  neutral: 32,
  positive: 16,
  trend: "stable",
};

export const aapSentimentData: AAPSentiment = {
  negative: 38,
  neutral: 32,
  positive: 30,
  trend: "declining",
};

export const bjpSentimentData: BJPSentiment = {
  negative: 18,
  neutral: 37,
  positive: 45,
  trend: "rising",
};

// ==========================================
// COVERAGE VOLUME DATA
// ==========================================

export const coverageVolumeData: CoverageVolume[] = [
  { party: "AAP", level: "HIGHEST", color: "bg-red-500" },
  { party: "BJP", level: "HIGH", color: "bg-orange-500" },
  { party: "SAD", level: "MODERATE", color: "bg-yellow-500" },
  { party: "Congress", level: "LOW-MODERATE", color: "bg-slate-400" },
];

// ==========================================
// CONGRESS MEDIA NARRATIVES
// ==========================================

export const congressMentionsData: Record<string, CongressMention> = {
  narrative1: {
    label: "Congress is finished in Punjab",
    source: "BJP leaders (Himanta Sarma, Feb 2026)",
    sentiment: -0.85,
    reach: "National",
  },
  narrative2: {
    label: "No CM face / collective leadership",
    source: "Congress itself (Baghel, Jan 2026)",
    sentiment: -0.65,
    reach: "State-wide",
  },
  narrative3: {
    label: "Internal fights public",
    source: "Resignations, Jan 2026 warning",
    sentiment: -0.75,
    reach: "High",
  },
  narrative4: {
    label: "Tarn Taran by-election loss",
    source: "November 2025",
    sentiment: -0.7,
    reach: "State-wide",
  },
  narrative5: {
    label: "Jalandhar LS win (Channi)",
    source: "2024 Lok Sabha",
    sentiment: 0.6,
    reach: "Limited",
  },
};

// ==========================================
// TV CHANNEL DATA
// ==========================================

export const tvChannelsData: TVChannel[] = [
  {
    name: "PTC Punjabi",
    type: "GEC",
    subscribers: "20.125M monthly reach",
    ownership: "G Next Media (Sukhbir Badal connected)",
    barchart: 95,
  },
  {
    name: "PTC News",
    type: "News",
    subscribers: "DD Free Dish Ch 62 (Apr 2026)",
    ownership: "SAD-BJP aligned",
    barchart: 88,
  },
  {
    name: "ABP Sanjha",
    type: "News",
    subscribers: "Top 10 Punjabi channel",
    ownership: "ABP Network",
    barchart: 72,
  },
  {
    name: "News18 Punjab",
    type: "News",
    subscribers: "4.8M reach (J-Band)",
    ownership: "Network18/Reliance",
    barchart: 65,
  },
  {
    name: "Zee Punjabi",
    type: "GEC",
    subscribers: "#2 position BARC 2022 (196K AMA)",
    ownership: "ZEE/Subhash Chandra",
    barchart: 70,
  },
  {
    name: "DD Punjabi",
    type: "Public",
    subscribers: "Must-carry, rural reach",
    ownership: "Prasar Bharati (Govt)",
    barchart: 35,
  },
];

// ==========================================
// TV ADVERTISING RATES
// ==========================================

export const tvAdRatesData: TVAdRate[] = [
  {
    channel: "PTC Punjabi",
    standard: "Rs 5,000-20,000",
    primeTime: "Rs 30,000-80,000",
    note: "Prime 2-3x base",
  },
  {
    channel: "ABP Sanjha",
    standard: "Rs 5,000-18,000",
    primeTime: "Rs 25,000-60,000",
    note: "Industry estimate",
  },
  {
    channel: "News18 Punjab",
    standard: "Rs 4,000-15,000",
    primeTime: "Rs 20,000-50,000",
    note: "J-Band: Rs 413",
  },
  {
    channel: "Zee Punjab HP",
    standard: "Rs 4,000-15,000",
    primeTime: "Rs 20,000-45,000",
    note: "Regional",
  },
  {
    channel: "PTC News",
    standard: "Rs 3,000-12,000",
    primeTime: "Rs 15,000-40,000",
    note: "DD Free Dish expanded reach",
  },
];

// ==========================================
// RADIO STATIONS DATA
// ==========================================

export const radioStationsData: RadioStation[] = [
  {
    name: "Radio Punjab (AIR)",
    frequency: "105.6 FM",
    listeners: "8-12L daily",
    demographic: "35-60+ yrs, rural",
    type: "Public",
  },
  {
    name: "Big FM",
    frequency: "92.7 FM",
    listeners: "6-10L daily",
    demographic: "18-45 yrs, urban",
    type: "Private",
  },
  {
    name: "Radio City",
    frequency: "91.1 FM",
    listeners: "5-8L daily",
    demographic: "18-40 yrs, urban",
    type: "Private",
  },
  {
    name: "Radio Mirchi",
    frequency: "98.3 FM",
    listeners: "4-7L daily",
    demographic: "18-35 yrs, urban",
    type: "Private",
  },
  {
    name: "FM Gold",
    frequency: "106.4 FM",
    listeners: "3-5L daily",
    demographic: "25-50 yrs, urban",
    type: "Public",
  },
  {
    name: "AIR Amritsar",
    frequency: "102.4 FM",
    listeners: "Regional",
    demographic: "Rural, border areas",
    type: "Public",
  },
];

// ==========================================
// DIASPORA RADIO DATA
// ==========================================

export const diasporaRadioData: DiasporaRadio[] = [
  {
    name: "Sher E Punjab Radio",
    market: "Canada/International",
    type: "Online",
    reach: "Significant NRI listenership",
    utility: "Diaspora engagement",
  },
  {
    name: "Punjabi Radio USA",
    market: "USA",
    type: "Online",
    reach: "Large NRI audience",
    utility: "Political content permissible",
  },
  {
    name: "Desh Punjab Radio",
    market: "USA (Sacramento)",
    type: "Online",
    reach: "Diaspora reach",
    utility: "Merged entity",
  },
];

// ==========================================
// CAMPAIGN BUDGET DATA
// ==========================================

export const campaignBudgetData: CampaignBudget[] = [
  {
    scale: "Minimum (4 weeks)",
    tvBudget: "Rs 18-33 lakh",
    radioBudget: "Rs 3-6 lakh",
    total: "Rs 21-39 lakh",
  },
  {
    scale: "Recommended (8 weeks)",
    tvBudget: "Rs 63 lakh-1 crore",
    radioBudget: "Rs 5.5-11 lakh",
    total: "Rs 68 lakh-1.1 crore",
  },
  {
    scale: "Maximum (12 weeks)",
    tvBudget: "Rs 1-1.5 crore",
    radioBudget: "Rs 8-15 lakh",
    total: "Rs 1.08-1.65 crore",
  },
];

// ==========================================
// YOUTUBE CHANNEL DATA
// ==========================================

export const youtubeChannelsData: YouTubeChannel[] = [
  {
    name: "Pro Punjab Tv",
    subscribers: "1.51M",
    lean: "Anti-establishment / Farmer legacy",
    value: "High",
    region: "State-wide",
  },
  {
    name: "PTC News",
    subscribers: "5M+",
    lean: "Pro-SAD",
    value: "Hostile",
    region: "State-wide",
  },
  {
    name: "ABP Sanjha",
    subscribers: "1M+",
    lean: "Moderate",
    value: "Neutral",
    region: "State-wide",
  },
  {
    name: "Zee Punjab",
    subscribers: "1M+",
    lean: "Pro-BJP",
    value: "Hostile",
    region: "State-wide",
  },
  {
    name: "News18 Punjab",
    subscribers: "500K+",
    lean: "Anti-AAP",
    value: "Neutral",
    region: "State-wide",
  },
  {
    name: "Punjab Today",
    subscribers: "500K+",
    lean: "Pro-Congress [UNVERIFIED]",
    value: "Potential",
    region: "State-wide",
  },
  {
    name: "Sikh Siyasat",
    subscribers: "400K+",
    lean: "Panthic/SGPC aligned",
    value: "Niche",
    region: "Diaspora",
  },
  {
    name: "Navdeep Singh Walia",
    subscribers: "200K+",
    lean: "Anti-AAP",
    value: "Monitor",
    region: "State-wide",
  },
  {
    name: "Breaking Punjabi News",
    subscribers: "200K+",
    lean: "Neutral",
    value: "Neutral",
    region: "State-wide",
  },
  {
    name: "Malwa TV",
    subscribers: "150K+",
    lean: "Regional",
    value: "Local",
    region: "Malwa",
  },
  {
    name: "Dhaliwal TV",
    subscribers: "100K+",
    lean: "Pro-Congress",
    value: "Potential",
    region: "State-wide",
  },
  {
    name: "Gursharan Singh TV",
    subscribers: "100K+",
    lean: "Independent",
    value: "Monitor",
    region: "State-wide",
  },
];

// ==========================================
// REGIONAL MEDIA STRATEGY DATA
// ==========================================

export const regionalStrategyData: RegionalStrategy[] = [
  {
    region: "Malwa",
    seats: 69,
    priority: "HIGHEST",
    primaryChannels: "PTC Punjabi, ABP Sanjha",
    printPriority: "Ajit, Punjabi Jagran",
    budgetAllocation: "60%",
    tvBudget: "Rs 15-50 lakh/week",
    strategy: "Counter BJP-RSS narrative; Punjabi language content; Malwa dialect focus",
  },
  {
    region: "Majha",
    seats: 27,
    priority: "SECONDARY",
    primaryChannels: "Zee Punjab, News18",
    printPriority: "Ajj Di Awaz, Nawan Zamana, Jagbani",
    budgetAllocation: "25%",
    tvBudget: "Rs 8-20 lakh/week",
    strategy: "Border sensitivity; Chandigarh elite reach; cross-border diaspora content",
  },
  {
    region: "Doaba",
    seats: 23,
    priority: "TERTIARY",
    primaryChannels: "PTC, ABP Sanjha",
    printPriority: "Rozana Spokesman, Jagbani, Ajit",
    budgetAllocation: "15%",
    tvBudget: "Rs 5-15 lakh/week",
    strategy: "Digital + TV combo; youth focus; NRI WhatsApp networks; highest SC concentration",
  },
];

// ==========================================
// MSO/CABLE INFRASTRUCTURE DATA
// ==========================================

export const msoNetworksData: MSONetwork[] = [
  {
    name: "SITI Networks",
    coverage: "800+ locations, 245+ districts",
    fiber: "33,000+ km optical fiber",
    headend: "15 digital headends",
    note: "Largest MSO India",
  },
  {
    name: "DEN Networks",
    coverage: "Pan-India cable presence",
    owner: "Reliance-Disney merged entity",
    note: "Major Punjab coverage",
  },
  {
    name: "Fastway",
    coverage: "North India, strong Punjab",
    note: "LCN mapping available",
  },
  {
    name: "Hathway Cable",
    coverage: "Present in Punjab",
    owner: "Reliance ecosystem",
    note: "GTPL Hathway key player",
  },
];

// ==========================================
// BARC SUSPENSION NOTE
// ==========================================

export const barcSuspensionNote =
  "BARC TV ratings suspended since March 2026 (Ministry directive) — No official viewership data available as of May 2026";

// ==========================================
// MEDIA SOURCES DATA
// ==========================================

export const mediaSourcesData: MediaSource[] = [
  {
    name: "Ajit",
    type: "Newspaper",
    sentiment: 0.72,
    reach: "7,00,000+ copies/day",
    lean: "Congress-Akali friendly (3.5/5)",
    verified: true,
    owner: "Hamdard family (Sadhu Singh legacy)",
  },
  {
    name: "Punjabi Tribune",
    type: "Newspaper",
    sentiment: 0.52,
    reach: "5,00,000+ copies/day",
    lean: "Centrist/Independent (2.5/5)",
    verified: true,
    owner: "Tribune Group (Chandigarh)",
  },
  {
    name: "Jagbani",
    type: "Newspaper",
    sentiment: 0.58,
    reach: "4,00,000+ copies/day",
    lean: "Congress-leaning (3/5)",
    verified: true,
    owner: "Hind Samachar Group (Chopra family)",
  },
  {
    name: "Rozana Spokesman",
    type: "Newspaper",
    sentiment: 0.65,
    reach: "3,50,000+ copies/day",
    lean: "Congress-friendly (3.5/5)",
    verified: true,
    owner: "Spokesman group",
  },
  {
    name: "Punjab Kesari",
    type: "Newspaper",
    sentiment: 0.32,
    reach: "~2-3 lakh+ copies/day",
    lean: "BJP-RSS leaning (2/5)",
    verified: true,
    owner: "Hind Samachar Group (Chopra family)",
  },
  {
    name: "PTC News",
    type: "TV Channel",
    sentiment: 0.25,
    reach: "#1-2 Punjabi news (BARC Week 40 2022)",
    lean: "SAD-BJP aligned (1.5/5) — OWNED by Sukhbir Badal",
    verified: true,
    owner: "PTC Group (G Next Media)",
  },
  {
    name: "ABP Sanjha",
    type: "TV",
    sentiment: 0.48,
    reach: "Top 3 Punjabi news",
    lean: "Moderately AAP-leaning to Neutral (2/5)",
    verified: true,
    owner: "ABP Network",
  },
  {
    name: "Zee Punjabi",
    type: "TV",
    sentiment: 0.3,
    reach: "#2 BARC 2022 (196K AMA)",
    lean: "BJP-aligned (1.5/5)",
    verified: true,
    owner: "ZEE/Subhash Chandra",
  },
];

// ==========================================
// SOCIAL MEDIA METRICS DATA
// ==========================================

export const socialMetricsData: SocialMetric[] = [
  {
    platform: "WhatsApp",
    penetration: "80.8%",
    groups: 15000,
    reach: "42L",
    sentiment: 0.72,
  },
  {
    platform: "Facebook",
    penetration: "72%",
    followers: "12.5L",
    engagement: 4.2,
    sentiment: 0.48,
  },
  {
    platform: "Instagram",
    penetration: "74%",
    followers: "8.3L",
    engagement: 6.8,
    sentiment: 0.52,
  },
  {
    platform: "YouTube",
    penetration: "68%",
    subscribers: "4.5L",
    views: "45L",
    sentiment: 0.45,
  },
  {
    platform: "Twitter/X",
    penetration: "28%",
    followers: "2.1L",
    engagement: 3.5,
    sentiment: 0.38,
  },
];

// ==========================================
// WHATSAPP & DIGITAL AD SPEND DATA
// ==========================================

export const whatsAppUsageData = {
  whatsappUsagePct: "26.2%",
  note: "WhatsApp is the dominant platform for voter outreach and political communication",
};

export const digitalAdSpendData = [
  {
    party: "BJP",
    spend: "₹50-80 crore",
    congressRatio: "25x",
    note: "Major outspend on digital ads, AI-generated content",
  },
  {
    party: "Congress",
    spend: "₹2-3 crore",
    congressRatio: "Baseline",
    note: "Limited digital infrastructure",
  },
  {
    party: "AAP",
    spend: "₹5-8 crore",
    congressRatio: "3-4x",
    note: "State-level digital presence",
  },
];

// ==========================================
// KEY JOURNALISTS DATA
// ==========================================

export const journalistsData: Journalist[] = [
  // Data would include journalist tracking
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Get sentiment data for a party
 */
export function getPartySentiment(
  party: "congress" | "aap" | "bjp"
): { negative: number; neutral: number; positive: number; trend: string } | null {
  switch (party) {
    case "congress":
      return congressSentimentData;
    case "aap":
      return aapSentimentData;
    case "bjp":
      return bjpSentimentData;
    default:
      return null;
  }
}

/**
 * Get media source by name
 */
export function getMediaSourceByName(name: string): MediaSource | undefined {
  return mediaSourcesData.find(
    (source) => source.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Get social metric by platform
 */
export function getSocialMetricByPlatform(
  platform: string
): SocialMetric | undefined {
  return socialMetricsData.find(
    (metric) => metric.platform.toLowerCase() === platform.toLowerCase()
  );
}

/**
 * Get YouTube channel by name
 */
export function getYouTubeChannelByName(name: string): YouTubeChannel | undefined {
  return youtubeChannelsData.find(
    (channel) => channel.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Get TV channel by name
 */
export function getTVChannelByName(name: string): TVChannel | undefined {
  return tvChannelsData.find(
    (channel) => channel.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Get regional strategy by region
 */
export function getRegionalStrategyByRegion(
  region: string
): RegionalStrategy | undefined {
  return regionalStrategyData.find(
    (strategy) => strategy.region.toLowerCase() === region.toLowerCase()
  );
}

/**
 * Get all hostile media sources for Congress
 */
export function getHostileMediaSources(): MediaSource[] {
  return mediaSourcesData.filter((source) => {
    const lean = source.lean.toLowerCase();
    return (
      lean.includes("sad") ||
      lean.includes("bjp") ||
      lean.includes("hostile") ||
      source.sentiment < 0.35
    );
  });
}

/**
 * Get all friendly/neutral media sources for Congress
 */
export function getFriendlyMediaSources(): MediaSource[] {
  return mediaSourcesData.filter((source) => {
    const lean = source.lean.toLowerCase();
    return (
      lean.includes("congress") ||
      lean.includes("friendly") ||
      lean.includes("neutral") ||
      source.sentiment >= 0.5
    );
  });
}

/**
 * Calculate total social media reach
 */
export function getTotalSocialMediaReach(): string {
  const totalFollowers = socialMetricsData.reduce((acc, metric) => {
    if (metric.followers) {
      const num = parseFloat(metric.followers.replace(/[L,]/g, ""));
      return acc + num;
    }
    return acc;
  }, 0);
  return `${totalFollowers.toFixed(1)}L combined followers`;
}

/**
 * Get coverage volume ranking
 */
export function getCoverageVolumeRanking(): CoverageVolume[] {
  return coverageVolumeData;
}

/**
 * Get campaign budget estimate by scale
 */
export function getCampaignBudgetByScale(
  scale: "Minimum" | "Recommended" | "Maximum"
): CampaignBudget | undefined {
  return campaignBudgetData.find((budget) => budget.scale.startsWith(scale));
}

/**
 * Get sentiment trend for a party
 */
export function getSentimentTrend(
  party: "congress" | "aap" | "bjp"
): string {
  const sentiment = getPartySentiment(party);
  return sentiment?.trend || "unknown";
}

/**
 * Get net sentiment score for a party (-1 to 1)
 */
export function getNetSentimentScore(
  party: "congress" | "aap" | "bjp"
): number {
  const sentiment = getPartySentiment(party);
  if (!sentiment) return 0;
  return (sentiment.positive - sentiment.negative) / 100;
}

/**
 * Get digital ad spend comparison
 */
export function getDigitalAdSpendComparison(): {
  party: string;
  spend: string;
  congressRatio: string;
}[] {
  return digitalAdSpendData;
}

/**
 * Check if BARC ratings are available
 */
export function isBARCAvailable(): boolean {
  return false; // Suspended since March 2026
}

/**
 * Get all parties with coverage data
 */
export function getAllPartiesCoverage(): string[] {
  return coverageVolumeData.map((c) => c.party);
}

/**
 * Get highest coverage party
 */
export function getHighestCoverageParty(): string {
  const sorted = [...coverageVolumeData].sort((a, b) => {
    const order = { HIGHEST: 4, HIGH: 3, MODERATE: 2, "LOW-MODERATE": 1 };
    return (order[b.level as keyof typeof order] || 0) -
           (order[a.level as keyof typeof order] || 0);
  });
  return sorted[0]?.party || "Unknown";
}

/**
 * Get media source sentiment score
 */
export function getMediaSourceSentiment(name: string): number {
  const source = getMediaSourceByName(name);
  return source?.sentiment || 0;
}

/**
 * Get WhatsApp group count estimate
 */
export function getWhatsAppGroupCount(): number {
  const whatsapp = socialMetricsData.find(
    (m) => m.platform.toLowerCase() === "whatsapp"
  );
  return whatsapp?.groups || 0;
}

/**
 * Get social media platform with highest penetration
 */
export function getHighestPenetrationPlatform(): string {
  const sorted = [...socialMetricsData].sort((a, b) => {
    const aPen = parseFloat(a.penetration.replace("%", ""));
    const bPen = parseFloat(b.penetration.replace("%", ""));
    return bPen - aPen;
  });
  return sorted[0]?.platform || "Unknown";
}

/**
 * Get YouTube channels sorted by subscribers
 */
export function getTopYouTubeChannels(count: number = 5): YouTubeChannel[] {
  return [...youtubeChannelsData]
    .sort((a, b) => {
      const aSub = parseFloat(a.subscribers.replace(/[MK]/g, ""));
      const bSub = parseFloat(b.subscribers.replace(/[MK]/g, ""));
      return bSub - aSub;
    })
    .slice(0, count);
}

/**
 * Get MSO network by name
 */
export function getMSONetworkByName(name: string): MSONetwork | undefined {
  return msoNetworksData.find(
    (mso) => mso.name.toLowerCase().includes(name.toLowerCase())
  );
}

/**
 * Get radio station by name
 */
export function getRadioStationByName(name: string): RadioStation | undefined {
  return radioStationsData.find(
    (station) => station.name.toLowerCase().includes(name.toLowerCase())
  );
}

/**
 * Get Congress mention by narrative key
 */
export function getCongressMention(key: string): CongressMention | undefined {
  return congressMentionsData[key];
}

/**
 * Get all Congress mentions as array
 */
export function getAllCongressMentions(): CongressMention[] {
  return Object.values(congressMentionsData);
}

/**
 * Get Congress mentions sorted by sentiment
 */
export function getCongressMentionsBySentiment(): CongressMention[] {
  return getAllCongressMentions().sort((a, b) => a.sentiment - b.sentiment);
}

/**
 * Get most negative Congress narrative
 */
export function getMostNegativeCongressNarrative(): CongressMention | undefined {
  const sorted = getCongressMentionsBySentiment();
  return sorted[0];
}

/**
 * Get most positive Congress narrative
 */
export function getMostPositiveCongressNarrative(): CongressMention | undefined {
  const sorted = getCongressMentionsBySentiment();
  return sorted[sorted.length - 1];
}

// ==========================================
// COMPLETE DATA EXPORT
// ==========================================

export const mediaNarrativeData = {
  reportDate: "May 20, 2026",
  confidence: {
    tvChannel: "HIGH",
    sentimentData: "MEDIUM",
    socialMedia: "MEDIUM",
    pollingData: "MEDIUM",
  },
  sentiment: {
    congress: congressSentimentData,
    aap: aapSentimentData,
    bjp: bjpSentimentData,
  },
  coverageVolume: coverageVolumeData,
  congressMentions: congressMentionsData,
  tvChannels: tvChannelsData,
  tvAdRates: tvAdRatesData,
  radioStations: radioStationsData,
  diasporaRadio: diasporaRadioData,
  campaignBudget: campaignBudgetData,
  youtubeChannels: youtubeChannelsData,
  regionalStrategy: regionalStrategyData,
  msoNetworks: msoNetworksData,
  barcNote: barcSuspensionNote,
  mediaSources: mediaSourcesData,
  socialMetrics: socialMetricsData,
  whatsAppUsage: whatsAppUsageData,
  digitalAdSpend: digitalAdSpendData,
};
