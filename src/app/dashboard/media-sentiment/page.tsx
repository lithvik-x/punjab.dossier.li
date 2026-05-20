"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import type {
  CongressSentiment,
  AAPSentiment,
  BJPSentiment,
  CoverageVolume,
  CongressMention,
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
} from "@/types/media-narrative";
import {
  KEY_SYNTHESIS_METRICS,
  crossReferenceValidation,
  qualityValidation,
  gapAnalysis,
} from "@/lib/synthesis-data";

export default function MediaSentimentPage() {
  // Congress Coverage Sentiment (A37 Research)
  const congressSentiment: CongressSentiment = {
    negative: 52,
    neutral: 32,
    positive: 16,
    trend: "stable",
  };

  // AAP Coverage Sentiment (A37 Research)
  const aapSentiment: AAPSentiment = {
    negative: 38,
    neutral: 32,
    positive: 30,
    trend: "declining",
  };

  // BJP Coverage Sentiment (A37 Research)
  const bjpSentiment: BJPSentiment = {
    negative: 18,
    neutral: 37,
    positive: 45,
    trend: "rising",
  };

  // Coverage Volume Ranking (A37 Research)
  const coverageVolume: CoverageVolume[] = [
    { party: "AAP", level: "HIGHEST", color: "bg-red-500" },
    { party: "BJP", level: "HIGH", color: "bg-orange-500" },
    { party: "SAD", level: "MODERATE", color: "bg-yellow-500" },
    { party: "Congress", level: "LOW-MODERATE", color: "bg-slate-400" },
  ];

  // Congress Media Mentions Sentiment (A37 Research)
  const congressMentions: Record<string, CongressMention> = {
    narrative1: { label: "Congress is finished in Punjab", source: "BJP leaders (Himanta Sarma, Feb 2026)", sentiment: -0.85, reach: "National" },
    narrative2: { label: "No CM face / collective leadership", source: "Congress itself (Baghel, Jan 2026)", sentiment: -0.65, reach: "State-wide" },
    narrative3: { label: "Internal fights public", source: "Resignations, Jan 2026 warning", sentiment: -0.75, reach: "High" },
    narrative4: { label: "Tarn Taran by-election loss", source: "November 2025", sentiment: -0.70, reach: "State-wide" },
    narrative5: { label: "Jalandhar LS win (Channi)", source: "2024 Lok Sabha", sentiment: 0.60, reach: "Limited" },
  };

  // TV Channel Reach Data (G26 Research)
  const tvChannels: TVChannel[] = [
    { name: "PTC Punjabi", type: "GEC", subscribers: "20.125M monthly reach", ownership: "G Next Media (Sukhbir Badal connected)", barchart: 95 },
    { name: "PTC News", type: "News", subscribers: "DD Free Dish Ch 62 (Apr 2026)", ownership: "SAD-BJP aligned", barchart: 88 },
    { name: "ABP Sanjha", type: "News", subscribers: "Top 10 Punjabi channel", ownership: "ABP Network", barchart: 72 },
    { name: "News18 Punjab", type: "News", subscribers: "4.8M reach (J-Band)", ownership: "Network18/Reliance", barchart: 65 },
    { name: "Zee Punjabi", type: "GEC", subscribers: "#2 position BARC 2022 (196K AMA)", ownership: "ZEE/Subhash Chandra", barchart: 70 },
    { name: "DD Punjabi", type: "Public", subscribers: "Must-carry, rural reach", ownership: "Prasar Bharati (Govt)", barchart: 35 },
  ];

  // TV Advertising Rates 30-sec Spot (G26 Research)
  const tvAdRates: TVAdRate[] = [
    { channel: "PTC Punjabi", standard: "Rs 5,000-20,000", primeTime: "Rs 30,000-80,000", note: "Prime 2-3x base" },
    { channel: "ABP Sanjha", standard: "Rs 5,000-18,000", primeTime: "Rs 25,000-60,000", note: "Industry estimate" },
    { channel: "News18 Punjab", standard: "Rs 4,000-15,000", primeTime: "Rs 20,000-50,000", note: "J-Band: Rs 413" },
    { channel: "Zee Punjab HP", standard: "Rs 4,000-15,000", primeTime: "Rs 20,000-45,000", note: "Regional" },
    { channel: "PTC News", standard: "Rs 3,000-12,000", primeTime: "Rs 15,000-40,000", note: "DD Free Dish expanded reach" },
  ];

  // Radio Stations with Listenership (G26 Research)
  const radioStationsFull: RadioStation[] = [
    { name: "Radio Punjab (AIR)", frequency: "105.6 FM", listeners: "8-12L daily", demographic: "35-60+ yrs, rural", type: "Public" },
    { name: "Big FM", frequency: "92.7 FM", listeners: "6-10L daily", demographic: "18-45 yrs, urban", type: "Private" },
    { name: "Radio City", frequency: "91.1 FM", listeners: "5-8L daily", demographic: "18-40 yrs, urban", type: "Private" },
    { name: "Radio Mirchi", frequency: "98.3 FM", listeners: "4-7L daily", demographic: "18-35 yrs, urban", type: "Private" },
    { name: "FM Gold", frequency: "106.4 FM", listeners: "3-5L daily", demographic: "25-50 yrs, urban", type: "Public" },
    { name: "AIR Amritsar", frequency: "102.4 FM", listeners: "Regional", demographic: "Rural, border areas", type: "Public" },
  ];

  // NRI/Diaspora Radio (G26 Research)
  const diasporaRadio: DiasporaRadio[] = [
    { name: "Sher E Punjab Radio", market: "Canada/International", type: "Online", reach: "Significant NRI listenership", utility: "Diaspora engagement" },
    { name: "Punjabi Radio USA", market: "USA", type: "Online", reach: "Large NRI audience", utility: "Political content permissible" },
    { name: "Desh Punjab Radio", market: "USA (Sacramento)", type: "Online", reach: "Diaspora reach", utility: "Merged entity" },
  ];

  // Campaign Budget Estimates (G26 Research)
  const campaignBudget: CampaignBudget[] = [
    { scale: "Minimum (4 weeks)", tvBudget: "Rs 18-33 lakh", radioBudget: "Rs 3-6 lakh", total: "Rs 21-39 lakh" },
    { scale: "Recommended (8 weeks)", tvBudget: "Rs 63 lakh-1 crore", radioBudget: "Rs 5.5-11 lakh", total: "Rs 68 lakh-1.1 crore" },
    { scale: "Maximum (12 weeks)", tvBudget: "Rs 1-1.5 crore", radioBudget: "Rs 8-15 lakh", total: "Rs 1.08-1.65 crore" },
  ];

  // YouTube Channels with Subscribers (G3 Research)
  const youtubeChannelsFull: YouTubeChannel[] = [
    { name: "Pro Punjab Tv", subscribers: "1.51M", lean: "Anti-establishment / Farmer legacy", value: "High", region: "State-wide" },
    { name: "PTC News", subscribers: "5M+", lean: "Pro-SAD", value: "Hostile", region: "State-wide" },
    { name: "ABP Sanjha", subscribers: "1M+", lean: "Moderate", value: "Neutral", region: "State-wide" },
    { name: "Zee Punjab", subscribers: "1M+", lean: "Pro-BJP", value: "Hostile", region: "State-wide" },
    { name: "News18 Punjab", subscribers: "500K+", lean: "Anti-AAP", value: "Neutral", region: "State-wide" },
    { name: "Punjab Today", subscribers: "500K+", lean: "Pro-Congress [UNVERIFIED]", value: "Potential", region: "State-wide" },
    { name: "Sikh Siyasat", subscribers: "400K+", lean: "Panthic/SGPC aligned", value: "Niche", region: "Diaspora" },
    { name: "Navdeep Singh Walia", subscribers: "200K+", lean: "Anti-AAP", value: "Monitor", region: "State-wide" },
    { name: "Breaking Punjabi News", subscribers: "200K+", lean: "Neutral", value: "Neutral", region: "State-wide" },
    { name: "Malwa TV", subscribers: "150K+", lean: "Regional", value: "Local", region: "Malwa" },
    { name: "Dhaliwal TV", subscribers: "100K+", lean: "Pro-Congress", value: "Potential", region: "State-wide" },
    { name: "Gursharan Singh TV", subscribers: "100K+", lean: "Independent", value: "Monitor", region: "State-wide" },
  ];

  // Regional Media Strategy (G3 Research)
  const regionalStrategy: RegionalStrategy[] = [
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

  // MSO/Cable Infrastructure (G26 Research)
  const msoNetworks: MSONetwork[] = [
    { name: "SITI Networks", coverage: "800+ locations, 245+ districts", fiber: "33,000+ km optical fiber", headend: "15 digital headends", note: "Largest MSO India" },
    { name: "DEN Networks", coverage: "Pan-India cable presence", owner: "Reliance-Disney merged entity", note: "Major Punjab coverage" },
    { name: "Fastway", coverage: "North India, strong Punjab", note: "LCN mapping available" },
    { name: "Hathway Cable", coverage: "Present in Punjab", owner: "Reliance ecosystem", note: "GTPL Hathway key player" },
  ];

  // BARC Suspension Note (G26 Research)
  const barcNote = "BARC TV ratings suspended since March 2026 (Ministry directive) — No official viewership data available as of May 2026";

  // Media Sources Updated with full data (G3 Research)
  const mediaSources: MediaSource[] = [
    { name: "Ajit", type: "Newspaper", sentiment: 0.72, reach: "7,00,000+ copies/day", lean: "Congress-Akali friendly (3.5/5)", verified: true, owner: "Hamdard family (Sadhu Singh legacy)" },
    { name: "Punjabi Tribune", type: "Newspaper", sentiment: 0.52, reach: "5,00,000+ copies/day", lean: "Centrist/Independent (2.5/5)", verified: true, owner: "Tribune Group (Chandigarh)" },
    { name: "Jagbani", type: "Newspaper", sentiment: 0.58, reach: "4,00,000+ copies/day", lean: "Congress-leaning (3/5)", verified: true, owner: "Hind Samachar Group (Chopra family)" },
    { name: "Rozana Spokesman", type: "Newspaper", sentiment: 0.65, reach: "3,50,000+ copies/day", lean: "Congress-friendly (3.5/5)", verified: true, owner: "Spokesman group" },
    { name: "Punjab Kesari", type: "Newspaper", sentiment: 0.32, reach: "~2-3 lakh+ copies/day", lean: "BJP-RSS leaning (2/5)", verified: true, owner: "Hind Samachar Group (Chopra family)" },
    { name: "PTC News", type: "TV Channel", sentiment: 0.25, reach: "#1-2 Punjabi news (BARC Week 40 2022)", lean: "SAD-BJP aligned (1.5/5) — OWNED by Sukhbir Badal", verified: true, owner: "PTC Group (G Next Media)" },
    { name: "ABP Sanjha", type: "TV", sentiment: 0.48, reach: "Top 3 Punjabi news", lean: "Moderately AAP-leaning to Neutral (2/5)", verified: true, owner: "ABP Network" },
    { name: "Zee Punjabi", type: "TV", sentiment: 0.30, reach: "#2 BARC 2022 (196K AMA)", lean: "BJP-aligned (1.5/5)", verified: true, owner: "ZEE/Subhash Chandra" },
  ];

  // Social Media Metrics (A37 Research)
  const socialMetrics: SocialMetric[] = [
    { platform: "WhatsApp", penetration: "80.8%", groups: 15000, reach: "42L", sentiment: 0.72 },
    { platform: "Facebook", penetration: "72%", followers: "12.5L", engagement: 4.2, sentiment: 0.48 },
    { platform: "Instagram", penetration: "74%", followers: "8.3L", engagement: 6.8, sentiment: 0.52 },
    { platform: "YouTube", penetration: "68%", subscribers: "4.5L", views: "45L", sentiment: 0.45 },
    { platform: "Twitter/X", penetration: "28%", followers: "2.1L", engagement: 3.5, sentiment: 0.38 },
  ];

  // === CYCLE 1: WhatsApp & Digital Ad Spend Data ===
  const whatsAppUsageCycle1 = {
    whatsappUsagePct: "26.2%",
    note: "WhatsApp is the dominant platform for voter outreach and political communication"
  };

  const digitalAdSpendCycle1 = [
    { party: "BJP", spend: "₹50-80 crore", congressRatio: "25x", note: "Major outspend on digital ads, AI-generated content" },
    { party: "Congress", spend: "₹2-3 crore", congressRatio: "Baseline", note: "Limited digital infrastructure" },
    { party: "AAP", spend: "₹5-8 crore", congressRatio: "3-4x", note: "State-level digital presence" },
  ];

  const journalists: Journalist[] = [
    { name: "Barjinder Singh Hamdard", outlet: "Ajit", location: "Jalandhar", score: 4, role: "Editor-in-Chief" },
    { name: "GS Bhullar", outlet: "Jagbani", location: "Jalandhar", score: 3, role: "Officiating President, Punjab Digital Media Association" },
    { name: "Kuldeep Nayyar", outlet: "Drishti Magazine", location: "Chandigarh", score: 3.5, role: "Founder, Former Journalist" },
    { name: "Vikram Jeet Singh Mann", outlet: "Daily Ajit", location: "Chandigarh", score: 3.5, role: "Staff Correspondent" },
    { name: "Rajesh K Pathania", outlet: "Ajit Samachar", location: "Chandigarh", score: 3.5, role: "Reporter" },
    { name: "Bhushan Sood", outlet: "Daily Ajit", location: "Jalandhar", score: 3.5, role: "Reporter" },
    { name: "Rajinder Singh", outlet: "Daily Ajit", location: "Jalandhar", score: 3.5, role: "Reporter" },
    { name: "Dr S P Singh", outlet: "GNDU", location: "Amritsar", score: 3, role: "Former Vice-Chancellor, Public Intellectual" },
    { name: "Surinder Singh Lali", outlet: "Political Analyst", location: "State-wide", score: 3, role: "Commentator (News9)" },
    { name: "Rajesh Ramachandran", outlet: "The Tribune", location: "Chandigarh", score: 2.5, role: "Political Editor" },
    { name: "Swaraj Bir Singh", outlet: "Punjabi Tribune", location: "Chandigarh", score: 2.5, role: "Editor" },
    { name: "Jupinderjit Singh", outlet: "The Tribune", location: "Chandigarh", score: 2.5, role: "Deputy Editor" },
    { name: "Asit Jolly", outlet: "India Today", location: "Chandigarh", score: 2.5, role: "Bureau Head" },
    { name: "Prabjot Singh", outlet: "PTC", location: "Punjab", score: 1.5, role: "Overall Punjab" },
    { name: "Daljeet Singh", outlet: "PTC", location: "Punjab", score: 1.5, role: "Reporter" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              8
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Media Sentiment
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            News analysis • Social media monitoring • Narrative tracking • TV/Radio landscape
          </p>
        </div>
        <Badge variant="success">+0.48 Media Sentiment</Badge>
      </div>

      {/* Top Metric Cards - Updated with TV penetration data */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Media Mentions"
          value="12.4L"
          subtitle="This month"
          change={18}
          trend="up"
          color="bg-indigo-500"
        />
        <MetricCard
          title="Social Reach"
          value="72.5L"
          subtitle="Total impressions"
          change={34}
          trend="up"
          color="bg-blue-500"
        />
        <MetricCard
          title="TV Penetration"
          value="77.5%"
          subtitle="~46.5L households"
          change={0}
          trend="up"
          color="bg-purple-500"
        />
        <MetricCard
          title="Congress Coverage"
          value="16%"
          subtitle="Positive sentiment"
          change={-4}
          trend="down"
          color="bg-orange-500"
        />
      </div>

      {/* Coverage Volume Ranking - NEW from A37 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Coverage Volume Ranking by Party (A37 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Congress coverage is LOW-MODERATE — largely reactive, event-driven, not proactive</p>
        <div className="mt-4 flex items-center gap-4">
          {coverageVolume.map((item) => (
            <div key={item.party} className="flex items-center gap-2">
              <div className={`h-3 w-3 rounded-full ${item.color}`} />
              <span className="text-sm font-medium text-slate-700">{item.party}</span>
              <Badge variant={item.party === "Congress" ? "warning" : item.party === "AAP" ? "danger" : "default"}>
                {item.level}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Three-Column: Congress Sentiment | AAP Sentiment | BJP Sentiment - NEW from A37 */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 shadow-sm dark:border-orange-800 dark:bg-orange-900/20">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">Congress Coverage</h3>
            <Badge variant="warning">Stable</Badge>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Negative</span>
              <span className="text-sm font-bold text-red-600">{congressSentiment.negative}%</span>
            </div>
            <ProgressBar label="" value={congressSentiment.negative} color="bg-red-500" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Neutral</span>
              <span className="text-sm font-bold text-slate-600">{congressSentiment.neutral}%</span>
            </div>
            <ProgressBar label="" value={congressSentiment.neutral} color="bg-slate-400" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Positive</span>
              <span className="text-sm font-bold text-green-600">{congressSentiment.positive}%</span>
            </div>
            <ProgressBar label="" value={congressSentiment.positive} color="bg-green-500" />
          </div>
          <p className="mt-3 text-xs text-orange-600">Sources: Internal fights, &quot;finished&quot; narrative, no CM face</p>
        </div>

        <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">AAP Coverage</h3>
            <Badge variant="danger">Declining</Badge>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Negative</span>
              <span className="text-sm font-bold text-red-600">{aapSentiment.negative}%</span>
            </div>
            <ProgressBar label="" value={aapSentiment.negative} color="bg-red-500" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Neutral</span>
              <span className="text-sm font-bold text-slate-600">{aapSentiment.neutral}%</span>
            </div>
            <ProgressBar label="" value={aapSentiment.neutral} color="bg-slate-400" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Positive</span>
              <span className="text-sm font-bold text-green-600">{aapSentiment.positive}%</span>
            </div>
            <ProgressBar label="" value={aapSentiment.positive} color="bg-green-500" />
          </div>
          <p className="mt-3 text-xs text-red-600">Sources: Governance failures, Rajya Sabha crisis, defections</p>
        </div>

        <div className="rounded-xl border border-green-200 bg-green-50 p-6 shadow-sm dark:border-green-800 dark:bg-green-900/20">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">BJP Coverage</h3>
            <Badge variant="success">Rising</Badge>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Negative</span>
              <span className="text-sm font-bold text-red-600">{bjpSentiment.negative}%</span>
            </div>
            <ProgressBar label="" value={bjpSentiment.negative} color="bg-red-500" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Neutral</span>
              <span className="text-sm font-bold text-slate-600">{bjpSentiment.neutral}%</span>
            </div>
            <ProgressBar label="" value={bjpSentiment.neutral} color="bg-slate-400" />
            <div className="flex justify-between">
              <span className="text-sm text-slate-600">Positive</span>
              <span className="text-sm font-bold text-green-600">{bjpSentiment.positive}%</span>
            </div>
            <ProgressBar label="" value={bjpSentiment.positive} color="bg-green-500" />
          </div>
          <p className="mt-3 text-xs text-green-600">Sources: 9.6% to 18.5% vote share rise, Sunil Jakhar leadership</p>
        </div>
      </div>

      {/* Key Negative Narratives About Congress - NEW from A37 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Key Narratives About Congress (A37 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Negative narratives dominating coverage — requires proactive counter-strategy</p>
        <div className="mt-6 space-y-4">
          {Object.values(congressMentions).map((narrative, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-lg border border-slate-100 p-4 dark:border-slate-700">
              <div className="flex-1">
                <p className="font-medium text-slate-700 dark:text-slate-300">&quot;{narrative.label}&quot;</p>
                <p className="mt-1 text-xs text-slate-500">Source: {narrative.source} | Reach: {narrative.reach}</p>
              </div>
              <Badge variant={narrative.sentiment > 0 ? "success" : "danger"}>
                {narrative.sentiment > 0 ? "+" : ""}{narrative.sentiment}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Punjabi Media Landscape (Verified)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Top media outlets ranked by circulation/reach — Ajit #1 newspaper (Media Ant May 2025)</p>
          <div className="mt-6 space-y-4">
            {mediaSources.map((source) => (
              <div key={source.name}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{source.name}</span>
                    <Badge variant="default">{source.type}</Badge>
                    {source.verified && <Badge variant="success">Verified</Badge>}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={source.sentiment > 0.5 ? "success" : source.sentiment > 0.3 ? "warning" : "danger"}>
                      {source.sentiment > 0 ? "+" : ""}{source.sentiment}
                    </Badge>
                    <span className="text-xs text-slate-500">{source.reach}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-1">{source.lean}</p>
                <ProgressBar
                  label=""
                  value={source.sentiment * 100}
                  color="bg-indigo-500"
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Social Media Performance
          </h3>
          <div className="mt-6 space-y-4">
            {socialMetrics.map((social) => (
              <div key={social.platform} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-indigo-700">{social.platform[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{social.platform}</span>
                    <Badge variant={social.sentiment > 0.4 ? "success" : "info"}>
                      +{social.sentiment}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500">
                    {social.penetration} penetration • {social.reach || social.groups} reach
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TV Channel Reach - NEW from G26 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            TV Channel Reach & Market Position (G26 Research)
          </h3>
          <Badge variant="warning">BARC Suspended Mar 2026</Badge>
        </div>
        <p className="mt-1 text-sm text-slate-500">{barcNote}</p>
        <div className="mt-6 space-y-4">
          {tvChannels.map((channel) => (
            <div key={channel.name} className="flex items-center gap-4">
              <div className="w-32">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{channel.name}</span>
                <p className="text-xs text-slate-500">{channel.type}</p>
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-xs text-slate-500">{channel.subscribers}</span>
                  <span className="text-xs text-slate-400">{channel.barchart}%</span>
                </div>
                <ProgressBar label="" value={channel.barchart} color="bg-indigo-500" showPercentage={false} />
              </div>
              <Badge variant={channel.name.includes("PTC") || channel.name.includes("Zee") ? "danger" : "default"}>
                {channel.ownership.includes("SAD") || channel.ownership.includes("BJP") ? "Hostile" :
                 channel.ownership.includes("ABP") || channel.ownership.includes("Network") ? "Neutral" : "Public"}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Narrative Tracking */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Narrative Tracking
        </h3>
        <DataTable
          headers={["Narrative", "Source", "Reach", "Sentiment", "Congress Framing"]}
          rows={[
            ["Drugs Crisis", "Punjab Tribune", "12.5L", "Negative", "CM's mission" ],
            ["Farmers Welfare", "Times of India", "8.2L", "Positive", "Congress guarantee"],
            ["Jobs Generation", "The Hindu", "5.4L", "Mixed", "Action plan" ],
            ["Healthcare", "Indian Express", "4.8L", "Positive", "Infrastructure" ],
            ["Power Free", "TV Punjab", "18.2L", "Negative", "Debt burden" ],
            ["Education Reform", "Dainik Bhaskar", "6.1L", "Neutral", "Under review" ],
          ]}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Congress Narrative Share
          </h3>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Drugs Mission</span>
                <span className="text-sm font-medium">68%</span>
              </div>
              <ProgressBar label="" value={68} color="bg-blue-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Farmer Welfare</span>
                <span className="text-sm font-medium">54%</span>
              </div>
              <ProgressBar label="" value={54} color="bg-green-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Youth Jobs</span>
                <span className="text-sm font-medium">42%</span>
              </div>
              <ProgressBar label="" value={42} color="bg-purple-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">Healthcare</span>
                <span className="text-sm font-medium">48%</span>
              </div>
              <ProgressBar label="" value={48} color="bg-teal-500" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Competitor Media Share
          </h3>
          <div className="mt-6 space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-orange-600">AAP</span>
                <span className="text-sm font-medium">38%</span>
              </div>
              <ProgressBar label="" value={38} color="bg-orange-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-green-600">SAD</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <ProgressBar label="" value={15} color="bg-green-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-orange-400">BJP</span>
                <span className="text-sm font-medium">8%</span>
              </div>
              <ProgressBar label="" value={8} color="bg-orange-400" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-slate-500">Others</span>
                <span className="text-sm font-medium">6%</span>
              </div>
              <ProgressBar label="" value={6} color="bg-slate-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Regional Media Strategy - Enhanced with G26/G3 data */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Media Strategy (G26/G3 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Tailored approach for Malwa (69 seats), Majha (27 seats), Doaba (23 seats) — Government ad rate revision: +26% (Nov 2025)
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {regionalStrategy.map((r) => (
            <div key={r.region} className={`rounded-lg p-4 ${
              r.region === "Malwa" ? "bg-red-50 dark:bg-red-900/20" :
              r.region === "Majha" ? "bg-blue-50 dark:bg-blue-900/20" :
              "bg-purple-50 dark:bg-purple-900/20"
            }`}>
              <div className="flex items-center justify-between">
                <h4 className={`font-semibold ${
                  r.region === "Malwa" ? "text-red-700 dark:text-red-300" :
                  r.region === "Majha" ? "text-blue-700 dark:text-blue-300" :
                  "text-purple-700 dark:text-purple-300"
                }`}>{r.region}</h4>
                <Badge variant={r.priority === "HIGHEST" ? "danger" : r.priority === "SECONDARY" ? "info" : "default"}>
                  {r.seats} seats
                </Badge>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-600">Budget: {r.budgetAllocation}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">TV: {r.primaryChannels}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Print: {r.printPriority}</p>
              <p className="mt-2 text-xs italic text-slate-500">{r.strategy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TV Advertising Rates - NEW from G26 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            TV Advertising Rates (G26 Research)
          </h3>
          <Badge variant="info">30-sec Spot Rates</Badge>
        </div>
        <p className="mt-1 text-sm text-slate-500">Regional Punjabi channels — BARC suspension means actual viewership-based pricing is fluid</p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Channel", "Standard Time", "Prime Time (8-11 PM)", "Notes"]}
            rows={tvAdRates.map(r => [r.channel, r.standard, r.primeTime, r.note])}
          />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          National channels for comparison: Aaj Tak prime time INR 50,000-2,00,000+ | IPL TV INR 18 lakh per 30 sec
        </p>
      </div>

      {/* Radio Landscape - Enhanced with G26 data */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Radio Landscape with Listenership (G26 Research)
        </h3>
        <p className="mt-1 text-sm text-slate-500">FM radio significantly underutilized for political messaging in Punjab</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-medium text-slate-700 mb-2">Domestic FM Stations</h4>
            <div className="space-y-3">
              {radioStationsFull.map((radio) => (
                <div key={radio.name} className="flex items-center gap-3 rounded-lg border border-slate-100 p-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-700">FM</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{radio.name}</span>
                      <Badge variant="info">{radio.frequency}</Badge>
                    </div>
                    <p className="text-xs text-slate-500">{radio.listeners} • {radio.demographic}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-slate-700 mb-2">NRI/Diaspora Radio Networks</h4>
            <div className="space-y-3">
              {diasporaRadio.map((radio) => (
                <div key={radio.name} className="flex items-center gap-3 rounded-lg border border-slate-100 p-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-700">NRI</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{radio.name}</span>
                      <Badge variant="warning">{radio.market}</Badge>
                    </div>
                    <p className="text-xs text-slate-500">{radio.reach} | {radio.utility}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MSO/Cable Infrastructure - NEW from G26 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Cable/MSO Infrastructure (G26 Research)
        </h3>
        <p className="mt-1 text-sm text-slate-500">SITI, DEN, Hathway, GTPL — Reliance-Disney merged entity (Nov 2024) controls significant distribution</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {msoNetworks.map((mso) => (
            <div key={mso.name} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{mso.name}</h4>
                <Badge variant="default">{mso.owner ? "Reliance" : "Independent"}</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600">{mso.coverage}</p>
              {mso.fiber && <p className="mt-1 text-xs text-slate-500">{mso.fiber}</p>}
              {mso.headend && <p className="mt-1 text-xs text-slate-500">{mso.headend}</p>}
              <p className="mt-2 text-xs text-amber-600">{mso.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Budget Estimates - NEW from G26 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Campaign Budget Estimates (G26 Research)
        </h3>
        <p className="mt-1 text-sm text-slate-500">Recommended TV/Radio broadcast budgets for Punjab election 2027</p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Campaign Scale", "TV Budget", "Radio Budget", "Combined Total"]}
            rows={campaignBudget.map(b => [b.scale, b.tvBudget, b.radioBudget, b.total])}
          />
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Minimum viable: Rs 21-39 lakh (4 weeks) | Recommended: Rs 68 lakh-1.1 crore (8 weeks)
        </p>
      </div>

      {/* Key Journalists Database */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Key Journalists Database
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">20+ named journalists with outlets and Congress friendliness scores (1-5)</p>
        <DataTable
          headers={["Name", "Outlet", "Location", "Score", "Role"]}
          rows={journalists.map(j => [
            j.name,
            j.outlet,
            j.location,
            j.score.toString(),
            j.role,
          ])}
        />
      </div>

      {/* YouTube Channel Details - Enhanced with subscriber counts */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          YouTube Channel Details (G3 Research)
        </h3>
        <p className="mt-1 text-sm text-slate-500">Punjabi digital news ecosystem with verified subscriber counts</p>
        <div className="mt-4 space-y-3">
          {youtubeChannelsFull.map((ch) => (
            <div key={ch.name} className="flex items-center justify-between rounded-lg border border-slate-100 p-3 dark:border-slate-700">
              <div>
                <span className="font-medium text-slate-700 dark:text-slate-300">{ch.name}</span>
                <p className="text-xs text-slate-500">{ch.subscribers} subscribers — {ch.lean}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={ch.value === "High" ? "success" : ch.value === "Medium" ? "info" : ch.value === "Niche" ? "warning" : ch.value === "Hostile" ? "danger" : "default"}>
                  {ch.value}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advertising Rate Cards */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Print Advertising Rate Cards (2026)
        </h3>
        <p className="mt-1 text-sm text-slate-500">Government ad revision: +26% (Nov 2025)</p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Outlet", "Format", "Rate (per sq.cm)", "Full Page Display"]}
            rows={[
              ["Ajit (Jalandhar)", "Display/sq.cm", "Rs 450-700", "Rs 4-8 lakh"],
              ["Jagbani", "Display/sq.cm", "Rs 600+", "Rs 3-6 lakh"],
              ["Punjabi Tribune", "Display/sq.cm", "Rs 500-800", "Rs 3-6 lakh"],
              ["Punjab Kesari", "Display/sq.cm", "Rs 300-500", "Rs 2-5 lakh"],
              ["Rozana Spokesman", "Display/sq.cm", "Rs 400-650", "Rs 2-5 lakh"],
              ["The Tribune (Chandigarh)", "Display/sq.cm", "Rs 600-1,000", "Rs 5-10 lakh"],
            ]}
          />
        </div>
      </div>

      {/* MP5-001: Print Media Landscape - NEW DATA */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm dark:border-indigo-800 dark:bg-indigo-900/20">
        <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
          Print Media Landscape (MP5-001 Research)
        </h3>
        <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
          Punjabi newspapers dominate; Ajit is largest circulated Punjabi newspaper in India
        </p>

        {/* Print Media Metric Cards */}
        <div className="grid gap-4 md:grid-cols-4 mt-4">
          <MetricCard
            title="Ajit Circulation"
            value="386,160"
            subtitle="Copies/day (ABC data)"
            change={0}
            trend="up"
            color="bg-indigo-500"
          />
          <MetricCard
            title="National Print Growth"
            value="2.77%"
            subtitle="H1 2025 ABC data"
            change={2.77}
            trend="up"
            color="bg-green-500"
          />
          <MetricCard
            title="Punjab Kesari Readers"
            value="1.138M"
            subtitle="Wikipedia (readership)"
            change={0}
            trend="up"
            color="bg-blue-500"
          />
          <MetricCard
            title="Readership Multiplier"
            value="2.5x"
            subtitle="Industry standard"
            change={0}
            trend="up"
            color="bg-purple-500"
          />
        </div>

        {/* Punjabi Newspapers Table */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Top Punjabi Language Newspapers</h4>
          <DataTable
            headers={["Rank", "Publication", "HQ", "Founded", "Notes"]}
            rows={[
              ["1", "Ajit", "Jalandhar", "1941", "Largest Punjabi newspaper; 'Punjab di Awaaz'"],
              ["2", "Punjabi Tribune", "Chandigarh", "1978", "Part of Tribune group; Punjab/Haryana/HP coverage"],
              ["3", "Jag Bani", "Jalandhar", "1948", "Owned by Jagran group"],
              ["4", "Rozana Spokesman", "Mohali", "1951", "Founded by ex-Parliament Speaker Hukum Singh"],
              ["5", "Nirpakh Awaaz", "SAS Nagar", "—", "Known for investigative journalism"],
              ["6", "Punjabi Jagran", "Jalandhar", "—", "Part of Jagran Prakashan Limited"],
              ["7", "Daily Punjab Times", "Jalandhar", "—", "Published by PT Live Private Ltd"],
              ["8", "Charhdikala", "Patiala", "—", "Focus on culture and literature"],
              ["9", "Doaba Headlines", "Nakodar", "2002", "Regional focus on Doaba region"],
              ["10", "Khuli Soch", "Ludhiana", "2012", "Only Punjabi daily evening newspaper"],
            ]}
          />
        </div>

        {/* Language Distribution by Region */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-red-600">Malwa (15 districts)</h4>
            <p className="text-sm text-slate-600 mt-1">Punjabi Speakers: 90-100%</p>
            <p className="text-sm text-slate-600">Hindi: 5-10% | English: Minimal</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-blue-600">Majha (4 districts)</h4>
            <p className="text-sm text-slate-600 mt-1">Punjabi Speakers: 70-80%</p>
            <p className="text-sm text-slate-600">Hindi: 15-20% | English: 5-10%</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-purple-600">Doaba (4 districts)</h4>
            <p className="text-sm text-slate-600 mt-1">Punjabi Speakers: 80-90%</p>
            <p className="text-sm text-slate-600">Hindi: 10-15% | English: 5%</p>
          </div>
        </div>

        {/* Political Alignment of Publications */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Political Alignment of Major Publications</h4>
          <DataTable
            headers={["Publication", "Alignment", "Evidence"]}
            rows={[
              ["Punjab Kesari", "BJP/Akali Dal", "Raids by AAP govt Jan 2026; Congress criticized AAP"],
              ["Ajit", "Independent", "No strong partisan affiliation; respected journalism"],
              ["Jag Bani", "Congress-leaning", "Part of Jagran group; Congress cited in press freedom attacks"],
              ["Punjabi Jagran", "Congress-leaning", "Jagran group historically neutral but Congress-aligned"],
              ["Rozana Spokesman", "Neutral/Pro-Sikh", "Founded under Sikh political tradition"],
              ["The Tribune", "Centrist", "Long-standing balanced journalism reputation"],
            ]}
          />
        </div>

        {/* AAP Government Media Actions */}
        <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-700 dark:text-red-300">AAP Government Media Actions (2025-2026)</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>Nov 2025: Stopped government ads to newspapers publishing "sheeshmahal" story</li>
            <li>Nov 2025: Trucks stopped/searched under drug pretext, delaying newspaper delivery</li>
            <li>Jan 2026: Raids on Punjab Kesari Group establishments (excise, GST, food dept)</li>
            <li>Jan 2026: Police deployment outside Punjab Kesari offices in Jalandhar, Ludhiana, Bathinda</li>
            <li>Jan 2026: License cancellation attempts, power supply cuts to printing presses</li>
          </ul>
        </div>

        {/* Full Page Ad Rates */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Full Page Advertisement Rates</h4>
          <DataTable
            headers={["Publication", "Language", "Full Page Rate", "Insertion Strategy"]}
            rows={[
              ["Ajit", "Punjabi", "₹10,00,000+", "Morning edition"],
              ["Punjab Kesari", "Hindi", "₹8,00,000-12,00,000", "Morning edition"],
              ["Jag Bani", "Punjabi", "₹5,00,000-8,00,000", "Morning edition"],
              ["Punjabi Tribune", "Punjabi", "₹4,00,000-7,00,000", "Morning edition"],
              ["The Tribune", "English", "₹6,00,000-10,00,000", "Chandigarh edition"],
              ["Amar Ujala", "Hindi", "₹5,00,000-8,00,000 (Punjab ed.)", "Regional rates"],
            ]}
          />
        </div>
      </div>

      {/* MP5-002: Electronic Media TV/Radio - NEW DATA */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 shadow-sm dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
          Electronic Media Landscape (MP5-002 Research)
        </h3>
        <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
          Punjabi TV channels led by PTC; AIR statewide relay; Punjab govt spent Rs 1,093 crore on electronic media ads (2017-2025)
        </p>

        {/* TV Channel BARC Data */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjabi TV Channel BARC Viewership (Week 40 2022)</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <DataTable
                headers={["Channel", "AMA (000)", "Rank"]}
                rows={[
                  ["PTC Punjabi", "255.03", "#1"],
                  ["Zee Punjabi", "196.19", "#2"],
                  ["Colors", "143.62", "#3"],
                  ["Star Plus", "140.24", "#4"],
                  ["Goldmines", "132.64", "#5"],
                ]}
              />
            </div>
            <div>
              <DataTable
                headers={["Channel", "Weekly Impressions"]}
                rows={[
                  ["PTC Punjabi", "57,874"],
                  ["DD Punjabi", "48,178"],
                  ["Chardikla Time TV", "32,502"],
                  ["PTC Chak De", "21,624"],
                ]}
              />
            </div>
          </div>
        </div>

        {/* National Hindi News Channel Rates */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">National Hindi News Channel Ad Rates (Rs/second)</h4>
          <DataTable
            headers={["Channel", "Rate (Rs/sec)", "10-sec Spot", "30-sec Spot"]}
            rows={[
              ["Aaj Tak", "600", "6,000", "18,000"],
              ["India TV", "440", "4,400", "13,200"],
              ["News18 India", "380", "3,800", "11,400"],
              ["Zee News", "350", "3,500", "10,500"],
              ["Republic Bharat", "350", "3,500", "10,500"],
              ["ABP News", "350", "3,500", "10,500"],
              ["TV9 Bharatvarsh", "320", "3,200", "9,600"],
              ["NDTV India", "125", "1,250", "3,750"],
              ["News 24", "120", "1,200", "3,600"],
            ]}
          />
        </div>

        {/* Punjab Government Electronic Media Spending */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjab Government Electronic Media Spending</h4>
          <DataTable
            headers={["Period", "Government", "Electronic Media Spend", "Annual Avg"]}
            rows={[
              ["2017-2022 (5 years)", "Congress", "~Rs 317 crore", "~Rs 63 crore/year"],
              ["2022-2025 (3 years)", "AAP", "~Rs 317 crore + Rs 94 crore", "~Rs 130 crore/year"],
              ["2023-24 (single year)", "AAP", "~Rs 130 crore", "—"],
              ["2024-25 (partial)", "AAP", "~Rs 94 crore", "—"],
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">Total 8-year electronic media spend: Rs 1,093 crore | Total combined (print + electronic): Rs 1,534 crore</p>
        </div>

        {/* Radio Stations */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">AIR FM Stations in Punjab</h4>
            <DataTable
              headers={["City", "Frequency", "Type"]}
              rows={[
                ["Amritsar", "103.6 FM", "AIR External Service relay"],
                ["Bathinda", "101.1 FM", "Primary station"],
                ["Fazilka", "100.8 FM", "Relay"],
                ["Firozpur", "100.1 FM", "Relay"],
                ["Gurdaspur", "100.1 FM", "Relay"],
                ["Jalandhar", "702 kHz, 100.6 FM, 102.7 FM", "Primary + multiple FM"],
                ["Ludhiana", "100.1 FM", "Relay"],
                ["Patiala", "100.2 FM", "Primary station"],
              ]}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Private FM Stations</h4>
            <DataTable
              headers={["Station", "Frequency", "City", "Network"]}
              rows={[
                ["Big 92.7 FM", "92.7 MHz", "Amritsar, Jalandhar, Patiala", "Reliance Broadcast Network"],
                ["Red FM", "93.5 MHz", "Amritsar", "South Asia FM"],
                ["My FM", "94.3 MHz", "Amritsar, Jalandhar", "DB Corp Ltd"],
                ["Radio Mirchi", "98.3 / 104.8 MHz", "Amritsar, Jalandhar, Patiala", "ENIL"],
                ["Radio City", "91.9 / 91.1 MHz", "Jalandhar, Patiala", "Music Broadcast Ltd"],
                ["Radio Dhamaal 24", "106.4 MHz", "Patiala", "Skyline Radio Network"],
              ]}
            />
          </div>
        </div>

        {/* Time Slot Multipliers */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">TV Time Slot Rate Multipliers</h4>
          <DataTable
            headers={["Time Slot", "Multiplier", "Primary Audience"]}
            rows={[
              ["Morning (6-9 AM)", "1.0x", "Government servants, business, elderly"],
              ["Daytime (9 AM-4 PM)", "0.5-0.7x", "Home-makers, senior citizens"],
              ["Early Fringe (4-7 PM)", "1.2-1.5x", "Returning workers, youth"],
              ["Prime Time (8-11 PM)", "2.0-3.0x", "Families, all demographics"],
              ["Late Night (11 PM-1 AM)", "0.3-0.5x", "Youth, insomniacs"],
            ]}
          />
        </div>

        {/* Radio Advertising Rates */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Radio Advertising Rates (Punjab)</h4>
          <DataTable
            headers={["Station", "City", "10-sec Rate", "30-sec Rate"]}
            rows={[
              ["Radio Mirchi", "Amritsar/Jalandhar", "Rs 500-1,500", "Rs 1,500-4,500"],
              ["Big FM", "Amritsar/Jalandhar/Patiala", "Rs 400-1,200", "Rs 1,200-3,600"],
              ["My FM", "Amritsar/Jalandhar", "Rs 300-1,000", "Rs 900-3,000"],
              ["Red FM", "Amritsar", "Rs 300-1,000", "Rs 900-3,000"],
              ["Radio City", "Jalandhar/Patiala", "Rs 300-1,000", "Rs 900-3,000"],
              ["AIR (Govt.)", "All cities", "Rs 100-500", "Rs 300-1,500"],
            ]}
          />
        </div>
      </div>

      {/* MP5-003: Digital Media Landscape - NEW DATA */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 shadow-sm dark:border-blue-800 dark:bg-blue-900/20">
        <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
          Digital Media Landscape (MP5-003 Research)
        </h3>
        <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
          Mobile-first ecosystem; 96% via mobile; WhatsApp dominates political communication; Meta CPM ~$6.59
        </p>

        {/* Digital Metric Cards */}
        <div className="grid gap-4 md:grid-cols-4 mt-4">
          <MetricCard
            title="Internet Users (India)"
            value="806M"
            subtitle="55.3% penetration (Jan 2025)"
            change={0}
            trend="up"
            color="bg-blue-500"
          />
          <MetricCard
            title="Mobile Access"
            value="96%"
            subtitle="of internet users"
            change={0}
            trend="up"
            color="bg-green-500"
          />
          <MetricCard
            title="Punjab Internet"
            value="83.22%"
            subtitle="Household penetration"
            change={0}
            trend="up"
            color="bg-purple-500"
          />
          <MetricCard
            title="Mobile Speed"
            value="100.78"
            subtitle="Mbps median download"
            change={0}
            trend="up"
            color="bg-indigo-500"
          />
        </div>

        {/* Social Media Platform Rankings */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Social Media Platform Rankings (India 2025)</h4>
          <DataTable
            headers={["Platform", "Users (Ad Reach)", "% of Population", "% of Internet Users", "YoY Growth"]}
            rows={[
              ["YouTube", "491 million", "33.7%", "60.9%", "+6.3% (+29M)"],
              ["Instagram", "414 million", "28.4%", "51.4%", "+14.0% (+51M)"],
              ["Facebook", "384 million", "26.3%", "47.6%", "+4.5% (+16.7M)"],
              ["WhatsApp", "487 million+", "~33%", "~60%", "Stable"],
              ["LinkedIn", "150 million", "10.3%", "18.6%", "+25.0% (+30M)"],
              ["Twitter/X", "~18-22 million", "~1.5%", "~2.5%", "Minimal growth"],
            ]}
          />
        </div>

        {/* Gender Gap */}
        <div className="mt-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Digital Gender Gap</h4>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-slate-600">Male</span>
                <span className="text-sm font-bold text-blue-600">65.5%</span>
              </div>
              <ProgressBar label="" value={65.5} color="bg-blue-500" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-slate-600">Female</span>
                <span className="text-sm font-bold text-pink-600">34.5%</span>
              </div>
              <ProgressBar label="" value={34.5} color="bg-pink-500" />
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500">Social media gender split requires separate content strategies</p>
        </div>

        {/* Digital Ad CPM */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Digital Advertising Cost Benchmarks (2025)</h4>
          <DataTable
            headers={["Platform", "CPM", "CPC", "Notes"]}
            rows={[
              ["Meta (Facebook + Instagram)", "$6.59 avg", "$0.68 avg", "CPM range $3-$15"],
              ["Instagram", "$6.70 avg", "$0.20-$2.00", "Higher in competitive markets"],
              ["Google YouTube", "$5-$15 (est.)", "$0.50-$2.00", "Pre-roll skippable ads"],
              ["Twitter/X", "$5-$12 (est.)", "$0.50-$1.50", "Premium for political targeting"],
              ["LinkedIn", "$6-$15", "$2-$6", "Elite/decision-maker targeting"],
              ["WhatsApp Broadcast", "Near-zero", "Near-zero", "Cost = platform tools + labor"],
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">India has among world's lowest digital ad CPMs — ~1/5th to 1/10th of US/UK rates</p>
        </div>

        {/* Punjabi Influencers */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Top Punjabi Influencers (Social Media)</h4>
          <DataTable
            headers={["Rank", "Name", "Platform", "Follower Count", "Category"]}
            rows={[
              ["1", "Diljit Dosanjh", "Instagram", "26.7M", "Singer/Actor"],
              ["2", "Yuvraj Singh", "Instagram", "21.1M", "Cricketer"],
              ["3", "Yo Yo Honey Singh", "Instagram", "20.9M", "Singer"],
              ["4", "Sidhu Moose Wala (memorial)", "YouTube", "28.5M (music)", "Singer (deceased)"],
              ["5", "Guru Randhawa", "Instagram", "36.5M", "Singer"],
              ["6", "Amrinder Gill", "YouTube/Instagram", "~8M", "Singer/Actor"],
              ["7", "Neha Kakkar", "Instagram", "~22M", "Singer"],
              ["8", "Parmish Verma", "YouTube/Instagram", "~5M", "Singer/Director"],
              ["9", "Sharry Mann", "YouTube", "~3M", "Singer"],
              ["10", "Babbu Maan", "YouTube/Instagram", "~10M", "Singer"],
            ]}
          />
        </div>

        {/* Punjab-Specific Digital Indicators */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Punjab Digital Infrastructure</h4>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>Village mobile signal coverage: 99.6% (Ookla 1H 2025)</li>
              <li>Household internet penetration: 83.22%</li>
              <li>Daily internet usage: 6 hours 49 minutes</li>
              <li>553km India-Pakistan border across 6 districts</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">WhatsApp Political Networks</h4>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>Caste-Community Groups: Jat Sikh, Mazhabi, Balmiki, OBC</li>
              <li>Booth-Level Worker Groups: BLA to candidate teams</li>
              <li>Family Network Groups: Extended family 20-50 members</li>
              <li>Women-Only Groups: For conservative households</li>
              <li>NRI Groups: Canada, UK, Australia, USA diaspora</li>
            </ul>
          </div>
        </div>

        {/* Content Format Hierarchy */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Political Content Format Hierarchy (Punjab)</h4>
          <DataTable
            headers={["Format", "Share Value", "Notes"]}
            rows={[
              ["Video clips (30-90 sec)", "HIGHEST", "Most shared on WhatsApp; meme videos"],
              ["Memes/Images", "HIGH", "Single-frame political memes; lowest-cost viral"],
              ["Audio/Voice notes", "MEDIUM", "Critical for rural, lower-literacy voters"],
              ["Text posts", "LOW", "Minimal share value; lowest organic reach"],
              ["Articles/Long-form", "LOWEST", "Read by urban educated elite only"],
            ]}
          />
        </div>
      </div>

      {/* Research-P3: Media-Digital Extracted Data */}
      <div className="rounded-xl border border-violet-200 bg-violet-50 p-6 shadow-sm dark:border-violet-800 dark:bg-violet-900/20">
        <h3 className="text-lg font-semibold text-violet-700 dark:text-violet-300">
          Media-Digital: Key Findings (Research-P3)
        </h3>
        <p className="mt-1 text-sm text-violet-600 dark:text-violet-400">
          TV channels, newspapers, YouTube performance, influencers, WhatsApp misinformation, and content trends
        </p>

        {/* TV Channels - Political Alignment */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">TV Channel Political Alignment</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="font-semibold text-red-700">PTC Punjabi</span>
              </div>
              <p className="text-sm text-slate-600">SAD-owned (G Next Media)</p>
              <p className="text-xs text-slate-500 mt-1">Most reach in Punjabi TV</p>
              <ProgressBar label="" value={95} color="bg-red-500" showPercentage={false} />
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="font-semibold text-blue-700">ABP Sanjha</span>
              </div>
              <p className="text-sm text-slate-600">Neutral/Independent</p>
              <p className="text-xs text-slate-500 mt-1">ABP Network ownership</p>
              <ProgressBar label="" value={72} color="bg-blue-500" showPercentage={false} />
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-3 w-3 rounded-full bg-orange-500" />
                <span className="font-semibold text-orange-700">Zee Punjabi</span>
              </div>
              <p className="text-sm text-slate-600">BJP-aligned</p>
              <p className="text-xs text-slate-500 mt-1">Subhash Chandra ownership</p>
              <ProgressBar label="" value={70} color="bg-orange-500" showPercentage={false} />
            </div>
          </div>
        </div>

        {/* Newspapers */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Newspaper Reach & Lean</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-300">Ajit</span>
                  <span className="ml-2"><Badge variant="success">Independent</Badge></span>
                </div>
                <span className="text-lg font-bold text-green-600">700K+</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Daily circulation (largest Punjabi newspaper)</p>
              <ProgressBar label="" value={85} color="bg-green-500" showPercentage={false} />
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-700 dark:text-slate-300">Punjabi Tribune</span>
                  <span className="ml-2"><Badge variant="info">Secular</Badge></span>
                </div>
                <span className="text-lg font-bold text-blue-600">500K+</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Daily circulation (Tribune Group)</p>
              <ProgressBar label="" value={65} color="bg-blue-500" showPercentage={false} />
            </div>
          </div>
        </div>

        {/* YouTube Party Channels */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">YouTube Party Channels</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              title="News18 Punjab"
              value="8.08M"
              subtitle="Total views"
              change={0}
              trend="up"
              color="bg-blue-500"
            />
            <MetricCard
              title="Congress Punjab"
              value="7.25M"
              subtitle="Subscribers"
              change={0}
              trend="up"
              color="bg-blue-500"
            />
            <MetricCard
              title="AAP Punjab"
              value="6.26M"
              subtitle="Subscribers"
              change={0}
              trend="up"
              color="bg-blue-500"
            />
          </div>
        </div>

        {/* Key Influencers */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Influencers</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center">
                  <span className="text-lg font-bold text-purple-700">DD</span>
                </div>
                <div>
                  <p className="font-semibold text-purple-700">Diljit Dosanjh</p>
                  <p className="text-2xl font-bold text-purple-900">26.3M</p>
                  <p className="text-xs text-slate-500">Instagram followers</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-orange-200 flex items-center justify-center">
                  <span className="text-lg font-bold text-orange-700">S</span>
                </div>
                <div>
                  <p className="font-semibold text-orange-700">Navjot Singh Sidhu</p>
                  <p className="text-2xl font-bold text-orange-900">2.2M</p>
                  <p className="text-xs text-slate-500">AAP supporter (YouTube)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Misinformation */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">WhatsApp & Misinformation</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <p className="text-sm font-medium text-green-700">India WhatsApp Users</p>
              <p className="text-3xl font-bold text-green-600 mt-1">530M+</p>
              <p className="text-xs text-slate-500 mt-1">Largest platform for political communication</p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700">Image Misinformation</p>
              <p className="text-3xl font-bold text-red-600 mt-1">13%</p>
              <p className="text-xs text-slate-500 mt-1">Of images on WhatsApp are misinformation</p>
            </div>
          </div>
        </div>

        {/* Content Trends */}
        <div className="mt-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-700 dark:text-amber-300">Content Trends & Vulnerabilities</h4>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="h-2 w-2 mt-2 rounded-full bg-amber-500" />
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Instagram Reels Dominant</p>
                <p className="text-xs text-slate-500">Short-form video is most engaging content format</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="h-2 w-2 mt-2 rounded-full bg-red-500" />
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Rural Pro-Khalistan Vulnerability</p>
                <p className="text-xs text-slate-500">Rural areas more susceptible to pro-Khalistan content</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MP5-004: Ground Media / Jangla - NEW DATA */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 shadow-sm dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">
          Ground Media Landscape (MP5-004 Research)
        </h3>
        <p className="mt-1 text-sm text-green-600 dark:text-green-400">
          Ground media decisive for rural Punjab; AAP won ~70% of rural body seats (Dec 2025); Door-to-door most effective
        </p>

        {/* AAP Rural Body Poll Results */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">December 2025 Rural Body Election Results</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              title="AAP Rural Seats"
              value="~70%"
              subtitle="Won rural body polls"
              change={0}
              trend="up"
              color="bg-green-500"
            />
            <MetricCard
              title="Rural Voters"
              value="1.36 Cr"
              subtitle="63.5% of total electorate"
              change={0}
              trend="up"
              color="bg-blue-500"
            />
            <MetricCard
              title="Max Candidate Spend"
              value="Rs 2.55L"
              subtitle="Zila parishad candidate"
              change={0}
              trend="up"
              color="bg-purple-500"
            />
          </div>
        </div>

        {/* Voter Community Responsiveness */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Ground Media Responsiveness by Community</h4>
          <DataTable
            headers={["Community", "Population %", "Responsiveness", "Effective Channel"]}
            rows={[
              ["SC (Scheduled Caste)", "~32%", "HIGHEST", "Door-to-door, khap panchayat networks"],
              ["Jat Sikh", "~20-22%", "HIGH", "Haats, gurdwaras, kisan union gatherings"],
              ["OBC communities", "~15-18%", "MEDIUM-HIGH", "Direct contact, development promises"],
              ["Women voters", "48.5%", "HIGH", "Door-to-door, welfare scheme messaging"],
              ["Urban voters", "—", "LOWER", "Digital and mass media channels"],
            ]}
          />
        </div>

        {/* Cost Benchmarks */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Ground Media Cost Benchmarks</h4>
          <DataTable
            headers={["Item", "Cost Range", "Notes"]}
            rows={[
              ["Door-to-door team (20 workers, 5 days)", "Rs 50,000-1,50,000", "Labor + travel"],
              ["Mobile van with audio (1 van, 5 days)", "Rs 30,000-80,000", "Audio amplification"],
              ["Handouts/fliers per village (500 copies x 20)", "Rs 20,000-40,000", "Printed material"],
              ["Local influencer/pradhan coordination", "Rs 10,000-30,000", "Community leader engagement"],
              ["Total district-level ground media", "Rs 1.1-3 lakh", "Per constituency zone (15-20 villages)"],
              ["State-level ground media campaign", "Rs 15-40 crore", "All 23 districts, 117 ACs, 4 weeks"],
            ]}
          />
        </div>

        {/* Optimal Ground Media Mix */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Optimal Ground Media Mix (Rural Punjab)</h4>
          <DataTable
            headers={["Channel", "Budget %", "Effectiveness"]}
            rows={[
              ["Door-to-door campaigns", "25-30%", "Most effective for persuasion and GOTV"],
              ["Panchayat/pradhan networks", "15-20%", "Most cost-effective for message amplification"],
              ["Haat/chawk market interventions", "10-15%", "Efficient for broad reach"],
              ["Mobile audio/video vans", "8-10%", "Force multiplier, not primary tool"],
              ["Cycle rallies", "3-5%", "Mobilization supplement only"],
              ["Mass media (TV, radio, digital)", "35-45%", "Brand reinforcement and urban/semi-urban"],
            ]}
          />
        </div>

        {/* BJP Ground Campaign */}
        <div className="mt-6 rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
          <h4 className="font-semibold text-orange-700 dark:text-orange-300">BJP "De Sevadar" Ground Campaign (May 2025)</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>Six-month village campaign covering 50 constituencies</li>
            <li>Target: 1.57 lakh beneficiaries of central schemes (Kisan Samman Nidhi, Ayushman Bharat)</li>
            <li>Village-level camps to enroll fresh beneficiaries</li>
            <li>Resistance from AAP govt: BJP leaders detained (August 2025, Fazilka)</li>
            <li>Completed over 1,443 villages across 39 constituencies before shutdown</li>
          </ul>
        </div>
      </div>

      {/* MP5-005: Religious/Community Influencers - NEW DATA */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 shadow-sm dark:border-orange-800 dark:bg-orange-900/20">
        <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">
          Religious & Community Influencers (MP5-005 Research)
        </h3>
        <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">
          Deras command thousands of votes; Dera Sacha Sauda 60M followers; BJP Dalit-dera strategy targets 250 deras
        </p>

        {/* Major Deras */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Major Deras in Punjab</h4>
          <DataTable
            headers={["Dera", "Head", "Region", "Followers", "Political Tilt"]}
            rows={[
              ["Dera Sacha Sauda", "Gurmeet Ram Rahim Singh (convict)", "Malwa (Haryana HQ)", "60 million worldwide", "BJP (via parole strategy)"],
              ["Radha Soami Satsang Beas", "Baba Gurinder Singh Dhillon", "Doaba, Malwa", "Lakhs", "Neutral (officially)"],
              ["Dera Sachkhand Ballan", "Sant Niranjan Das", "Doaba", "Significant", "Ravidassia, 32% vote bank"],
              ["Sant Nirankari Mission", "Nirankari Sant", "Mixed", "Lakhs", "Generally neutral"],
              ["Namdhari Sect", "Baba Ram Singh", "Malwa", "Moderate", "Historically Akali"],
              ["Noormahal Dera", "Divya Jyoti Jagriti Sansthan", "Malwa", "Moderate", "Unknown"],
            ]}
          />
        </div>

        {/* Dera Sacha Sauda Details */}
        <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-700 dark:text-red-300">Dera Sacha Sauda Political Machine</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>Active since 2007 as political force in Punjab</li>
            <li>Headquarters in Sirsa, Haryana; influence spans Punjab's Malwa belt</li>
            <li>Ram Rahim parole strategy: BJP govt in Haryana granted parole 9 times since conviction (7 times in past 2 years)</li>
            <li>Ram Rahim currently serving 20-year rape sentence + life for murder</li>
            <li>2007 violent clashes with Sikhs: 1 dead, most serious since insurgency</li>
          </ul>
        </div>

        {/* Ravidassia Vote Bank */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Ravidassia Vote Bank (Dera Ballan)</h4>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>32% of Punjab's total vote bank</li>
              <li>Doaba region: Jalandhar, Hoshiarpur, Nawanshahr, Kapurthala</li>
              <li>BJP facilitated meeting: PM Modi + Sant Niranjan Dass (Dec 2025)</li>
              <li>AAP: Rs 25 crore for Sri Guru Ravidas Research Centre</li>
              <li>Congress (via Channi) close to the Dera</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">BJP Dalit-Dera Strategy (2027)</h4>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>Identified 250 small and large deras for structured outreach</li>
              <li>Padma Shri awarded to Sant Niranjan Das (Jan 2026)</li>
              <li>Strategy: Compensate for lack of Jatt Sikh support</li>
              <li>BJP vote share: 7-8% (alliance) → 6.6% (2022) → 18.5-19% (2024 Lok Sabha)</li>
            </ul>
          </div>
        </div>

        {/* Party Engagement with Deras */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Party Engagement with Deras</h4>
          <DataTable
            headers={["Party", "Approach", "Key Actions"]}
            rows={[
              ["BJP", "Dalit-dera strategy", "250 deras identified; PM Modi meet; Padma Shri to Sant Niranjan Das"],
              ["Congress", "Traditional ties, Channi connection", "High-profile Dalit CM face attempt; Dera Ballan association"],
              ["AAP", "Government scheme benefits", "Rs 25 crore research centre; Dera Seechewal MP seat"],
              ["SAD", "Panthic party claims", "Akal Takht edicts; SGPC control; damaged by perceived dera alliances"],
            ]}
          />
        </div>

        {/* BJP Vote Share Progression */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">BJP Vote Share Progression in Punjab</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500">Alliance Years</p>
              <p className="text-2xl font-bold text-green-600">7-8%</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500">2022 Assembly</p>
              <p className="text-2xl font-bold text-blue-600">6.6%</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500">2024 Lok Sabha</p>
              <p className="text-2xl font-bold text-red-600">18.5-19%</p>
            </div>
          </div>
        </div>
      </div>

      {/* MP5-006: Celebrity Influencers - NEW DATA */}
      <div className="rounded-xl border border-pink-200 bg-pink-50 p-6 shadow-sm dark:border-pink-800 dark:bg-pink-900/20">
        <h3 className="text-lg font-semibold text-pink-700 dark:text-pink-300">
          Celebrity & Cultural Influencers (MP5-006 Research)
        </h3>
        <p className="mt-1 text-sm text-pink-600 dark:text-pink-400">
          Celebrity endorsements crowd-pullers but unreliable vote-converters; Diljit Dosanjh ruled out politics (May 2026)
        </p>

        {/* Celebrity Political Candidates */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjabi Celebrities with Political Profiles</h4>
          <DataTable
            headers={["Name", "Domain", "Party", "Position", "Result"]}
            rows={[
              ["Bhagwant Mann", "Comedian/Satirist", "AAP", "CM (2022–present)", "VERIFIED SUCCESS"],
              ["Sunny Deol", "Bollywood Actor", "BJP", "MP Gurdaspur (2019–present)", "Active"],
              ["Navjot Singh Sidhu", "Cricketer/TV Star", "Congress", "MLA, Cabinet Minister", "Active"],
              ["Mohammad Sadiq", "Folk Singer", "Congress", "MP Faridkot (2019–present)", "Active"],
              ["Hans Raj Hans", "Sufi Singer", "BJP", "Lost Faridkot 2024", "Lost"],
              ["Anmol Gagan Mann", "Singer/Model", "AAP", "MLA Kharar (2022–2025)", "Resigned Jul 2025"],
              ["Gurpreet Ghuggi", "Actor/Comedian", "AAP", "Lost Batala 2017", "Lost"],
              ["Karamjit Anmol", "Actor", "AAP", "Lost Faridkot 2024", "Lost to son of Indira Gandhi assassin"],
              ["Sidhu Moosewala", "Rapper/Singer", "Congress", "Lost Mansa 2022", "Murdered May 2022"],
              ["Vinod Khanna (deceased)", "Bollywood Actor", "BJP", "MP Gurdaspur (several terms)", "Deceased"],
            ]}
          />
        </div>

        {/* Diljit Dosanjh Special */}
        <div className="mt-6 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <h4 className="font-semibold text-purple-700 dark:text-purple-300">Diljit Dosanjh — The Outlier</h4>
          <div className="grid gap-4 md:grid-cols-3 mt-2">
            <div>
              <p className="text-sm text-slate-500">Instagram</p>
              <p className="text-xl font-bold">26.7M followers</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Twitter/X</p>
              <p className="text-xl font-bold">5.5M followers</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">YouTube</p>
              <p className="text-xl font-bold">10M+</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600">Explicitly ruled out political entry (May 2026): "I love my work and want to continue doing that"</p>
          <p className="mt-1 text-sm text-slate-600">Prominent supporter of 2020-21 farmers' agitation; songs about farm laws turned protest into cultural movement</p>
        </div>

        {/* Celebrity Endorsement Effectiveness */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Celebrity Endorsement vs Electoral Success</h4>
          <DataTable
            headers={["Celebrity", "Party", "Result", "Analysis"]}
            rows={[
              ["Sidhu Moosewala", "Congress", "Lost Mansa 2022", "Massive youth following but lost"],
              ["Karamjit Anmol", "AAP", "Lost Faridkot 2024", "Lost to son of Indira Gandhi assassin"],
              ["Gurpreet Ghuggi", "AAP", "Lost Batala 2017", "No conversion"],
              ["Hans Raj Hans", "BJP", "Lost Faridkot 2024", "Lost despite prior MP status"],
              ["Anmol Gagan Mann", "AAP", "Won Kharar 2022, resigned 2025", "Only Bhagwant Mann succeeded"],
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">Research conclusion: Celebrity candidates fail to convert fame into votes; sole success is Bhagwant Mann (built over years, not overnight)</p>
        </div>

        {/* Celebrity Endorsement Rates */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Celebrity Endorsement Cost Estimates</h4>
          <DataTable
            headers={["Tier", "Rate", "Notes"]}
            rows={[
              ["Top Bollywood (SRK, Salman, Virat)", "₹5-8 crore/day", "Appearance fees"],
              ["Mid-tier Bollywood", "₹2.5-3.5 crore/day", "Appearance fees"],
              ["Premium Instagram post (national)", "₹30 lakh – ₹1 crore", "Per post"],
              ["Top Punjabi singers", "₹30 lakh – ₹1 crore", "Per rally/event appearance"],
            ]}
          />
        </div>
      </div>

      {/* MP5-007: News Agency Wire Services - NEW DATA */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 shadow-sm dark:border-cyan-800 dark:bg-cyan-900/20">
        <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300">
          News Agency & Wire Services (MP5-007 Research)
        </h3>
        <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-400">
          PTI/UNI/ANI Chandigarh bureaus; stringer networks; news travel time 2-4 hours Chandigarh to district
        </p>

        {/* News Agency Operations */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">National News Agency Operations</h4>
          <DataTable
            headers={["Agency", "Type", "Punjab Bureau", "Political Lean"]}
            rows={[
              ["PTI", "Nonprofit cooperative (450+ newspapers)", "Chandigarh bureau; 8-12 correspondents", "Neutral to Establishment"],
              ["UNI", "Cooperative, 1961", "Chandigarh bureau; Hindi/Urdu stronger", "Slightly Centrist"],
              ["ANI", "Private, 1971", "Chandigarh bureau; strong video", "Pro-BJP/Central Government"],
              ["IANS", "Private, 1986", "Lower Punjab relevance", "Moderate/International"],
            ]}
          />
        </div>

        {/* Stringer Network */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Stringer Network in Punjab</h4>
            <ul className="mt-2 text-sm text-slate-600 space-y-1">
              <li>3-15 active stringers per district (23 districts)</li>
              <li>Major districts: Ludhiana, Amritsar, Jalandhar, Patiala, Bathinda highest density</li>
              <li>Payment: INR 200-1,500 per story</li>
              <li>Monthly retainers: INR 10,000-75,000 per district</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Planted Story Costs</h4>
            <DataTable
              headers={["Placement Type", "Cost (INR)"]}
              rows={[
                ["District-level stringer story", "5,000 - 15,000"],
                ["District newspaper story (front page)", "15,000 - 40,000"],
                ["Chandigarh-based story (PTI/UNI tier)", "25,000 - 75,000"],
                ["State-level narrative campaign (10+ outlets)", "2,00,000 - 10,00,000"],
                ["TV news channel package (regional)", "50,000 - 3,00,000 per slot"],
                ["WhatsApp network amplification (statewide)", "50,000 - 2,00,000"],
              ]}
            />
          </div>
        </div>

        {/* News Travel Time */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">News Travel Time: Chandigarh to District Levels</h4>
          <DataTable
            headers={["Stage", "Time", "Notes"]}
            rows={[
              ["Wire Filing (PTI/UNI/ANI)", "0-30 min", "Stories filed simultaneously to subscribers"],
              ["Subscriber Reception (districts)", "30-60 min", "Stringers and local papers receive wire"],
              ["Local Adaptation/Translation", "1-2 hours", "Adding district-local angles"],
              ["District Publication", "3-5 hours", "Adapted stories published"],
              ["WhatsApp Amplification", "30-60 min", "After digital publication, near-total district penetration"],
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">Critical vulnerability: 2-4 hour window between wire filing and district publication</p>
        </div>

        {/* Congress vs AAP Media Capabilities */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Party Media Operations Comparison</h4>
          <DataTable
            headers={["Capability", "AAP Punjab", "Congress Punjab"]}
            rows={[
              ["Monitoring", "24/7 digital monitoring cell", "Limited to morning newspaper reviews"],
              ["Response Time", "30-90 minutes", "3-6 hours during working hours"],
              ["Content Production", "Full multimedia response in 60-90 min", "Slow, primarily statements"],
              ["Stringer Network", "Cultivating new relationships", "Weak; losing to AAP-aligned outlets"],
              ["Social Media Amplification", "Systematic", "Limited; dependent on individual leaders"],
            ]}
          />
        </div>
      </div>

      {/* MP5-008: Opinion Makers & Analysts - NEW DATA */}
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 shadow-sm dark:border-teal-800 dark:bg-teal-900/20">
        <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300">
          Opinion Makers & Think Tanks (MP5-008 Research)
        </h3>
        <p className="mt-1 text-sm text-teal-600 dark:text-teal-400">
          Chandigarh-Ludhiana axis; PANJ Foundation (est. 2024); Congress poorly covered by friendly columnists
        </p>

        {/* Key Columnists */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Newspaper Columnists on Punjab Politics</h4>
          <DataTable
            headers={["Columnist", "Outlet", "Lean", "Focus"]}
            rows={[
              ["Kanchan Vasdev", "Indian Express", "Pro-AAP (access-oriented)", "CMO beat, AAP leadership, state policies"],
              ["Manraj Grewal Sharma", "Indian Express", "Pro-AAP (access-oriented)", "North India coverage framing"],
              ["Dr. Jagmohan Singh Raju", "Indian Express", "Pro-BJP", "Security/Governance frame; BJP Punjab Gen Secy"],
              ["AJ Philip", "The Tribune", "Veteran/Independent", "Retrospective political analyses"],
              ["Rajdeep Sardesai", "TV/Digital", "National frame", "Punjab in all-India narratives"],
              ["Syed Asad Abbas", "TV platforms", "National frame", "Punjab as central to India"],
            ]}
          />
        </div>

        {/* Think Tanks */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjab-Focused Think Tanks</h4>
          <DataTable
            headers={["Organization", "Type", "Founded", "Notes"]}
            rows={[
              ["PANJ Foundation", "Non-partisan think tank", "Feb 2024", "Punjab Plan annual summit; most significant new entrant"],
              ["Punjab Thinks", "Commentary platform", "Active 2026", "X/Instagram presence; limited institutional footprint"],
              ["CPPR", "National (Kerala)", "—", "Occasional Punjab analysis"],
              ["PU-DST-CPR", "Academic", "Active", "Academic research; limited political circulation"],
              ["Opinion of Punjab", "Political platform", "Active", "Advertorial format; MLA Tracker"],
            ]}
          />
        </div>

        {/* Opinion Maker Party Leanings */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Opinion Maker Party Leanings</h4>
          <DataTable
            headers={["Category", "Lean", "Assessment"]}
            rows={[
              ["Pro-AAP", "Kanchan Vasdev, Manraj Grewal Sharma", "Access journalism; CMO beat reporters"],
              ["Pro-BJP", "Dr. Jagmohan Singh Raju, Organiser/RSS", "National security frame; governance failures"],
              ["Pro-Congress", "None identified (significant gap)", "No dominant Congress-sympathetic columnist"],
              ["Pro-SAD", "Severely diminished", "Post-2022 collapse; no replacement ecosystem"],
              ["Anti-AAP", "Organiser, The Hindu, independent journalists", "Press freedom criticism; Sahildeep Singh, Maninderjeet Sidhu"],
            ]}
          />
        </div>

        {/* Chandigarh Chorus Frames */}
        <div className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300">Elite Opinion Frames for 2027</h4>
          <div className="grid gap-4 md:grid-cols-3 mt-2">
            <div>
              <p className="text-sm font-semibold text-red-600">BJP-Aligned Frame</p>
              <p className="text-xs text-slate-600 mt-1">Governance failure: drugs, organized crime, agrarian distress, youth unemployment</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-600">AAP-Monitoring Frame</p>
              <p className="text-xs text-slate-600 mt-1">Legislative activity, international investor outreach, "standing up to Delhi"</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-600">Congress-Gap Frame</p>
              <p className="text-xs text-slate-600 mt-1">4-way fight: Warring vs Channi vs Bajwa vs Randhawa; no unified message</p>
            </div>
          </div>
        </div>

        {/* Cost of Opinion Pieces */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Cost of Commissioning Opinion/Research</h4>
          <p className="text-sm text-slate-500">No verifiable evidence of specific monetary amounts; currency is access, relationships, political alignment</p>
          <p className="mt-1 text-sm text-slate-500">Opinion of Punjab platform labeled "advertorial" by ANI — indicates paid political content disguised as journalism</p>
        </div>
      </div>

      {/* MP5-009: MELA & Public Events - NEW DATA */}
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm dark:border-yellow-800 dark:bg-yellow-900/20">
        <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">
          MELA & Public Event Media (MP5-009 Research)
        </h3>
        <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-400">
          Maghi Mela at Muktsar most politically significant (100,000+ footfall); AAP launched 2017 campaign here
        </p>

        {/* Major Melas Calendar */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Major Melas in Punjab — Political Relevance</h4>
          <DataTable
            headers={["Mela", "Location", "Timing", "Footfall", "Political Tier"]}
            rows={[
              ["Maghi Mela", "Muktsar", "January (Maghi day)", "100,000+", "TIER 1 — MUST-ATTEND"],
              ["Hoshiarpur Mela", "Hoshiarpur (Dussehra Ground)", "December–January", "50,000+", "TIER 2"],
              ["Vaisakhi Fairs", "Multiple locations", "April 13-14", "20,000–100,000", "TIER 2"],
              ["Baba Farid Aagman", "Faridkot", "September 19-23", "50,000+", "TIER 2"],
              ["Kila Raipur Sports Festival", "Kila Raipur (Ludhiana)", "February", "30,000+", "TIER 3"],
              ["Roshni Mela", "Jagraon (Ludhiana)", "Three days", "10,000–20,000", "TIER 3"],
              ["Basant Festival", "Kapurthala, Hoshiarpur", "January", "10,000–30,000", "TIER 3"],
              ["Harivallabh Sangeet Festival", "Jalandhar", "December 27-30", "15,000+", "TIER 3"],
            ]}
          />
        </div>

        {/* Maghi Mela Details */}
        <div className="mt-6 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-700 dark:text-red-300">Maghi Mela — Political Benchmark</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>Commemorates 40 Muktas who died fighting Mughals in 1705</li>
            <li>AAP 2016: Kejriwal launched AAP's 2017 Punjab campaign here with massive rally</li>
            <li>2026 (January): AAP returned with CM Bhagwant Mann mega rally after 10-year hiatus</li>
            <li>SAD, BJP (first independent conference), SAD (Waris Punjab De), SAD (Amritsar) all held separate conferences</li>
            <li>Congress 2026: Abided by Akal Takht directive; no rally organized</li>
          </ul>
        </div>

        {/* EC Expenditure Rules */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Election Commission Expenditure Rules</h4>
          <DataTable
            headers={["Item", "Rate", "Notes"]}
            rows={[
              ["Candidate ceiling (2022 Punjab Assembly)", "₹40 lakh per candidate", "Official limit"],
              ["Tea", "₹15/cup", "Fixed by District Poll Panels"],
              ["Samosa", "₹15", "Fixed by District Poll Panels"],
              ["Chole Bhature", "₹40", "Fixed by District Poll Panels"],
              ["Lassi", "₹20", "Fixed by District Poll Panels"],
              ["Nimbu Pani", "₹15", "Fixed by District Poll Panels"],
              ["TATA Safari/Scorpio (vehicle)", "₹10,000-15,000/day", "Hire rate"],
              ["Honda City/Ciaz (vehicle)", "₹5,000-8,000/day", "Hire rate"],
              ["Bus", "₹15,000-25,000/day", "Hire rate"],
            ]}
          />
        </div>

        {/* Mela Effectiveness vs Other Channels */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Mela vs Other Outreach Channels</h4>
          <DataTable
            headers={["Channel", "Reach", "Cost per Contact", "Engagement Depth", "Media Multiplier"]}
            rows={[
              ["Mela/Exhibition stall", "10,000–100,000/event", "₹5-15 per person", "LOW-MEDIUM", "HIGH"],
              ["Door-to-door", "200-500/day per volunteer", "₹20-50 per contact", "HIGH", "NONE"],
              ["Rally/Public meeting", "5,000–50,000/event", "₹50-200 per person", "MEDIUM", "HIGH"],
            ]}
          />
        </div>

        {/* Community-Specific Melas */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Captive Audience Events by Community</h4>
          <DataTable
            headers={["Event", "Community", "Regional Concentration", "Political Relevance"]}
            rows={[
              ["Maghi Mela, Muktsar", "Predominantly Sikh, Malwa", "South Malwa", "HIGH — Malwa Sikh voter mobilization"],
              ["Vaisakhi fairs", "Sikh + Hindu, statewide", "All 23 districts", "HIGH — Spring statewide push"],
              ["Baba Farid Aagman", "Interfaith (Sikh, Muslim, Hindu)", "Malwa (Faridkot, Bathinda, Mansa)", "MEDIUM — Sufi/western Malwa"],
              ["Hoshiarpur mela", "Mixed (Hindu majority region)", "Doaba/Majha border", "MEDIUM — non-Sikh voter outreach"],
              ["Harivallabh Sangeet", "Arts/culture patrons", "Jalandhar (Doaba)", "LOW — elite cultural"],
              ["PDFA Expo", "Dairy farmers, rural voters", "Ludhiana Malwa", "MEDIUM — rural/agricultural"],
            ]}
          />
        </div>
      </div>

      {/* MP5-010: Anti-Media Attack Vectors - NEW DATA */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">
          Anti-Media Attack Vectors (MP5-010 Research)
        </h3>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          BJP IT Cell: 5,500-6,000 core staff + 150,000+ WhatsApp workers; 61% misinformation pro-BJP (Alt News 2025)
        </p>

        {/* BJP IT Cell */}
        <div className="mt-6 rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
          <h4 className="font-semibold text-orange-700 dark:text-orange-300">BJP IT Cell — World's Largest Political CIB Network</h4>
          <div className="grid gap-4 md:grid-cols-4 mt-2">
            <div>
              <p className="text-sm text-slate-500">Core IT Cell Staff</p>
              <p className="text-xl font-bold text-red-600">5,500-6,000</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">WhatsApp Workers</p>
              <p className="text-xl font-bold text-red-600">150,000+</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Amit Malviya Fact-checks (2025)</p>
              <p className="text-xl font-bold text-red-600">12</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Daily Narrative Cycles</p>
              <p className="text-xl font-bold text-red-600">4</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600">WhatsApp University: Each worker manages 10-50+ groups; potential daily reach: 7.5M-75M+ impressions</p>
        </div>

        {/* AAP Proxy Propaganda Network */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">AAP Proxy Propaganda Network (Documented)</h4>
          <DataTable
            headers={["Page/Network", "Followers", "Operation"]}
            rows={[
              ["Fans of Deep Sidhu (FODS)", "1.89 lakh", "Proxy propaganda"],
              ["Soojhwan Punjab", "1.44 lakh", "Proxy propaganda"],
              ["The Punjab First", "News website", "Content publication"],
              ["World Punjabi Digital, Dankaram, Hindi Khabar Digital", "Various", "Amplification network"],
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">INR 14 lakh spent on 5,900+ Facebook ads (March 2023-December 2024); Connected to The Narrative Builders (Noida-based firm)</p>
        </div>

        {/* Misinformation Statistics */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Misinformation Statistics (Alt News 2025)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <MetricCard
              title="Pro-BJP Misinformation"
              value="61%"
              subtitle="of political targeting cases"
              change={0}
              trend="up"
              color="bg-red-500"
            />
            <MetricCard
              title="Pro-Congress"
              value="21%"
              subtitle="of political targeting cases"
              change={0}
              trend="up"
              color="bg-blue-500"
            />
            <MetricCard
              title="Rahul Gandhi Targeted"
              value="37%"
              subtitle="Most targeted individual"
              change={0}
              trend="up"
              color="bg-purple-500"
            />
          </div>
        </div>

        {/* Deepfake Threat */}
        <div className="mt-6 rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
          <h4 className="font-semibold text-purple-700 dark:text-purple-300">AI/Deepfake Threat (2024 General Election)</h4>
          <div className="grid gap-4 md:grid-cols-2 mt-2">
            <div>
              <p className="text-sm text-slate-600">Indians exposed to political deepfakes</p>
              <p className="text-2xl font-bold text-purple-600">75%+</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Who believed AI content was real</p>
              <p className="text-2xl font-bold text-purple-600">Nearly 1 in 4</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600">India has 460+ million social media users creating vast manipulation surface</p>
        </div>

        {/* Information Asymmetry */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Information Asymmetry: BJP vs Congress Digital Capacity</h4>
          <DataTable
            headers={["Dimension", "BJP IT Cell", "AAP (Punjab)", "Congress"]}
            rows={[
              ["Core Staff", "5,500-6,000", "~100-200", "~50-100"],
              ["Social Media Workers", "150,000+", "Hundreds trained", "Minimal organized"],
              ["WhatsApp Groups", "100,000s", "1,000s", "Few hundred"],
              ["Annual Budget", "INR 100+ crore (est.)", "INR 10+ crore (est.)", "Limited"],
              ["Response Time", "<1 hour", "<2 hours", ">24 hours"],
              ["Content Team", "20+ professionals", "5-10", "Minimal"],
            ]}
          />
        </div>

        {/* Legal Options */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Legal Options Against Hostile Media</h4>
          <DataTable
            headers={["Law/Option", "Description", "Limitation"]}
            rows={[
              ["Section 69A, IT Act", "Govt can block online content", "Congress needs BJP-led govt — unusable against BJP content"],
              ["Section 66D, IT Act", "Cheating by personation using computer", "Rarely applied; requires identifying perpetrator"],
              ["RTI Act", "Request advertising allocation, meetings", "Limited effectiveness against WhatsApp content"],
              ["Civil Defamation", "False statements causing harm", "Slow, expensive; identifying defendants difficult"],
              ["Platform Flagging", "Twitter/X, Facebook community guidelines", "Limited success vs coordinated networks"],
            ]}
          />
          <p className="mt-2 text-xs text-slate-500">Section 69A: 7,502 accounts/URLs blocked in 2023 alone; 36,800 total blocked (2018-2023)</p>
        </div>

        {/* Section 69A Blocking Stats */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">URLs Blocked (2023)</p>
            <p className="text-2xl font-bold text-red-600">7,502</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Total URLs Blocked (2018-2023)</p>
            <p className="text-2xl font-bold text-red-600">36,800</p>
          </div>
        </div>
      </div>

      {/* MP7-003: Sentiment & Opinion Tracking (from MP7 Section 7.3) */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
        <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
          Sentiment & Opinion Tracking (MP7-003)
        </h3>
        <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
          Real-time dashboard components • Sentiment shift alerts • Buzz tracking • Emotion analysis
        </p>

        {/* Sentiment Shift Alerts */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Sentiment Shift Alert Thresholds</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <Badge variant="info">Level 1</Badge>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">5-10% swing in 24h</p>
            <p className="text-xs text-slate-500">Log, monitor</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <Badge variant="warning">Level 2</Badge>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">10-20% swing in 24h</p>
            <p className="text-xs text-slate-500">Team notification, preliminary assessment</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <Badge variant="danger">Level 3</Badge>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">&gt;20% swing in 24h</p>
            <p className="text-xs text-slate-500">Senior leadership alert, strategy review</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <Badge variant="danger">CRISIS</Badge>
            <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">Extreme negative spike</p>
            <p className="text-xs text-slate-500">Immediate war room escalation</p>
          </div>
        </div>

        {/* Shift Classification */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Shift Classification Framework</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Organic</p>
            <p className="text-xs text-slate-500">Gradual change, authentic engagement patterns</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Manufactured</p>
            <p className="text-xs text-slate-500">Bot-like activity, coordinated sharing</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Astroturfed</p>
            <p className="text-xs text-slate-500">Fake grassroots, paid amplification</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Media-Amplified</p>
            <p className="text-xs text-slate-500">Journalist/anchor promotion, prime time coverage</p>
          </div>
        </div>

        {/* Emotion Analysis */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Emotion Detection Categories (MP7-003)</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-sm font-semibold text-red-700">Anger</p>
            <p className="text-xs text-slate-500">Drug deaths, broken promises, corruption</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <p className="text-sm font-semibold text-orange-700">Fear</p>
            <p className="text-xs text-slate-500">Crime, unemployment, lawlessness</p>
          </div>
          <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <p className="text-sm font-semibold text-green-700">Hope</p>
            <p className="text-xs text-slate-500">Change expectation, new leadership</p>
          </div>
          <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
            <p className="text-sm font-semibold text-purple-700">Pride</p>
            <p className="text-xs text-slate-500">Punjabiyat, Sikh identity, achievement</p>
          </div>
        </div>

        {/* Segment-Wise Emotion Analysis */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Segment-Wise Emotion Analysis</h4>
        <DataTable
          headers={["Segment", "Primary Emotions", "Secondary", "Strategic Implication"]}
          rows={[
            ["Rural Youth", "Anger, frustration, hope", "Fear (migration)", "Jobs, opportunities messaging"],
            ["Urban Middle Class", "Frustration, distrust", "Anger (corruption)", "Governance, accountability"],
            ["Farmers", "Pride, hope, anxiety", "Anger (MSP)", "MSP guarantee, respect"],
            ["Women", "Hope, fear", "Security concern", "Safety, welfare schemes"],
            ["SC Communities", "Anger, hope", "Frustration (discrimination)", "Social justice, dignity"],
          ]}
        />
      </div>

      {/* MP7-004: Competitive Monitoring (from MP7 Section 7.4) */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
        <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300">
          Competitive Monitoring (MP7-004)
        </h3>
        <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-400">
          AAP Activity Tracker • Competitor KPI Dashboard • Counter-Narrative Tracking
        </p>

        {/* AAP Activity Monitoring */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">AAP Activity Monitoring Parameters</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <Badge variant="info">Rallies & Events</Badge>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Location, attendance, CM presence, announcements</p>
            <p className="text-xs text-slate-500">Alert: Same-day alert</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <Badge variant="info">Digital Ads</Badge>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Facebook/Google Ad Library (spend, targeting, creative)</p>
            <p className="text-xs text-slate-500">Alert: Weekly report</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <Badge variant="info">Organic Content</Badge>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Post frequency, engagement, viral posts</p>
            <p className="text-xs text-slate-500">Alert: Real-time</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <Badge variant="warning">Statements</Badge>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Official announcements, press conferences, interviews</p>
            <p className="text-xs text-slate-500">Alert: 15-minute alert</p>
          </div>
        </div>

        {/* Social Media KPI Comparison */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">Social Media KPI Comparison</h4>
        <DataTable
          headers={["Platform", "Metric", "AAP (Baseline)", "Congress (Target)", "SAD", "BJP"]}
          rows={[
            ["Facebook", "Page Likes", "45L", "12L", "8L", "5L"],
            ["Facebook", "Engagement Rate", "4.2%", "2.1%", "1.8%", "1.5%"],
            ["Twitter/X", "Followers", "18L", "6L", "2L", "9L"],
            ["Instagram", "Followers", "32L", "9L", "3L", "4L"],
            ["YouTube", "Subscribers", "22L", "4L", "1L", "6L"],
          ]}
        />

        {/* Counter-Narrative Effectiveness */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">Counter-Narrative Effectiveness Assessment</h4>
        <DataTable
          headers={["Metric", "Measurement", "Target"]}
          rows={[
            ["Narrative Penetration", "% of target audience reached", "Track baseline"],
            ["Sentiment Shift", "Pre/post sentiment change", ">10% improvement"],
            ["Engagement", "Counter-narrative engagement", "Competitive with original"],
            ["Recall", "Aided awareness survey", ">40% unaided"],
            ["Behavioral", "Voter intention change", "Track in battleground seats"],
          ]}
        />

        {/* Vulnerability Identification */}
        <h4 className="mt-6 font-semibold text-emerald-900 dark:text-emerald-100">AAP Vulnerability Matrix</h4>
        <DataTable
          headers={["Issue", "AAP Vulnerability", "Congress Opportunity", "Priority"]}
          rows={[
            ["Drug Crisis", "High (promised eradication)", "Actual death data, failed promise", "CRITICAL"],
            ["Employment", "High (youth emigration)", "Skill development, industry", "HIGH"],
            ["Governance", "Medium (sand mining, liquor)", "Anti-corruption narrative", "HIGH"],
            ["Farmer Welfare", "Medium (MSP demand)", "MSP guarantee commitment", "HIGH"],
          ]}
        />
      </div>

      {/* MP5-SYNTHESIS: WhatsApp ROI - The Backbone Channel (Deliverable 1) */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">
          WhatsApp: The Indispensable Multiplier (MP5 Deliverable 1)
        </h3>
        <p className="mt-1 text-sm text-green-600 dark:text-green-400">
          WhatsApp is the backbone of Congress's entire last-mile voter contact architecture
        </p>

        {/* Key Stats */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="WhatsApp Groups"
            value="13,000+"
            subtitle="Political groups in Punjab"
            color="bg-green-500"
          />
          <MetricCard
            title="Group Members"
            value="9.1L+"
            subtitle="Members across all groups"
            color="bg-green-500"
          />
          <MetricCard
            title="Booth Sevaks Connected"
            value="25,000"
            subtitle="Each managing ~30 voters"
            color="bg-green-500"
          />
          <MetricCard
            title="ROI Multiplier"
            value="3-5x"
            subtitle="TV/rally content amplified"
            color="bg-green-500"
          />
        </div>

        {/* Why WhatsApp #1 */}
        <h4 className="mt-6 font-semibold text-green-900 dark:text-green-100">Why WhatsApp is #1 Channel</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-green-600">Cost Efficiency at Scale</p>
            <p className="text-xs text-slate-600 mt-1">Near-zero marginal cost per user reached. 25,000 booth sevaks cascade messages to voters within minutes.</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-green-600">Trusted Peer-to-Peer</p>
            <p className="text-xs text-slate-600 mt-1">Messages arrive from known contacts. In Punjab's kinship society, forwarded messages carry higher credibility than ads.</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm font-medium text-green-600">Multi-Format Support</p>
            <p className="text-xs text-slate-600 mt-1">Punjabi audio clips, visual cards, short video reels, text, documents — all propagate seamlessly.</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-green-100 p-3 dark:bg-green-900/40">
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Critical:</strong> If WhatsApp fails on election day, the ground game collapses. It is the nervous system connecting war room to 25,000 booth-level contacts.
          </p>
        </div>
      </div>

      {/* MP5-SYNTHESIS: Phase-wise Media Budget (Deliverable 2) */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          Congress Media Budget: Rs 100-150 Crore (MP5 Deliverable 2)
        </h3>
        <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
          Phase-wise spending allocation
        </p>

        {/* Phase-wise Spending */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Phase-wise Spending Allocation</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">1</span>
              <span className="text-sm font-bold text-blue-600">FOUNDATION</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">May–October 2026</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">15-20%</p>
            <p className="text-xs text-slate-500">Rs 15-30 Cr of Rs 100-150 Cr total</p>
            <p className="text-xs text-slate-600 mt-2">Organizational infrastructure, surveys, war room setup</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold text-white">2</span>
              <span className="text-sm font-bold text-indigo-600">CAMPAIGN PERIOD</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Nov 2026 – Last 14 Days</p>
            <p className="text-2xl font-bold text-indigo-600 mt-2">55-60%</p>
            <p className="text-xs text-slate-500">Rs 55-90 Cr of Rs 100-150 Cr total</p>
            <p className="text-xs text-slate-600 mt-2">Paid TV + digital + ground activation</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">3</span>
              <span className="text-sm font-bold text-red-600">ENDGAME</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Final 14 Days</p>
            <p className="text-2xl font-bold text-red-600 mt-2">35-40%</p>
            <p className="text-xs text-slate-500">Rs 35-40 Cr of Rs 100-150 Cr total</p>
            <p className="text-xs text-slate-600 mt-2">60% of undecided voters decide in last 10 days</p>
          </div>
        </div>

        {/* Channel Breakdown */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Channel Breakdown (Rs 100 Cr Scenario)</h4>
        <DataTable
          headers={["Channel", "%", "Rs Crore", "Key Components"]}
          rows={[
            ["TV (Punjabi + Hindi GECs)", "25-30%", "₹25-30 Cr", "PTC Punjabi, Channel 5, Zee Punjabi, DD Punjabi"],
            ["Digital (Meta + Google/YouTube)", "13-17%", "₹13-17 Cr", "Facebook/Instagram, Google search, YouTube pre-roll"],
            ["Outdoor/Billboard", "8-10%", "₹8-10 Cr", "GT Road hoardings, Amritsar 100ft Chowk"],
            ["Print Display", "8-10%", "₹8-10 Cr", "Punjab Kesari, Ajit, Dainik Bhaskar"],
            ["Ground Audio (jangla/chawk)", "2-3%", "₹2-3 Cr", "Mobile audio, village announcements"],
            ["Contingency Reserve", "15-20%", "₹15-30 Cr", "48-hr activation inventory"],
          ]}
        />
      </div>

      {/* MP5-016: Rapid Response Cell (Deliverable 5 - Gap) */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">
          Rapid Response Cell (MP5-016)
        </h3>
        <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">
          5-person team • 90-min text rebuttal SLA • 5,000+ misinformation monitors
        </p>

        {/* Cell Structure */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-bold text-orange-600">Rapid Response Cell</p>
            <div className="mt-3 space-y-2 text-xs text-slate-600">
              <p>• 5-person team on shift basis</p>
              <p>• Sunrise test monitoring (velocity tracking)</p>
              <p>• 90-min text rebuttal SLA</p>
              <p>• 3-hr video rebuttal SLA</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-bold text-orange-600">Misinformation Monitors</p>
            <p className="text-2xl font-bold text-orange-600 mt-2">5,000+</p>
            <p className="text-xs text-slate-500">Ground workers trained to screenshot and escalate</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-bold text-orange-600">Alt News / Boom Liaison</p>
            <p className="text-xs text-slate-600 mt-2">2-person contact cell within RRC for fact-check institutions</p>
          </div>
        </div>

        {/* Response Time Benchmarks */}
        <h4 className="mt-6 font-semibold text-orange-900 dark:text-orange-100">Response Time Benchmarks</h4>
        <DataTable
          headers={["Response Type", "SLA", "Owner"]}
          rows={[
            ["Social media rebuttal", "<15 minutes", "Social media responders"],
            ["Press statement", "<60 minutes", "Spokespersons"],
            ["Text rebuttal", "<90 minutes", "Rapid Response Cell"],
            ["Video rebuttal", "<3 hours", "Content team"],
            ["Legal notice", "<24 hours", "Legal officer"],
          ]}
        />

        <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Critical Gap:</strong> Congress's WhatsApp counter-misinformation capability is underdeveloped. BJP IT Cell has 150,000+ WhatsApp workers vs Congress's 5,000 monitors.
          </p>
        </div>
      </div>

      {/* MP5-SYNTHESIS: Top 3 Media Relationships (Deliverable 6) */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400">
          Top 3 Media Relationships (MP5 Deliverable 6)
        </h3>
        <p className="mt-1 text-sm text-cyan-600 dark:text-cyan-400">
          Critical cultivation targets for Congress media strategy
        </p>

        {/* Relationship 1: Punjab Kesari */}
        <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">1</span>
            <span className="text-sm font-bold text-red-600">Punjab Kesari</span>
            <Badge variant="danger">CRITICAL</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-2">Highest-circulation Punjabi newspaper in Punjab</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <div><span className="text-xs font-medium">Circulation:</span> <span className="text-xs">~2-3 lakh+ copies/day</span></div>
            <div><span className="text-xs font-medium">Reach:</span> <span className="text-xs">All 3 regions, all castes</span></div>
            <div><span className="text-xs font-medium">Lean:</span> <span className="text-xs">BJP-RSS leaning (2/5)</span></div>
          </div>
          <p className="text-xs text-slate-600 mt-2">Cultivation: Regular off-the-record briefings, exclusive content, op-ed placement, advertising commitment</p>
        </div>

        {/* Relationship 2: Punjabi YouTubers */}
        <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">2</span>
            <span className="text-sm font-bold text-red-600">Punjabi YouTube Ecosystem</span>
            <Badge variant="danger">CRITICAL</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-2">Primary info platform for urban youth (18-35)</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <div><span className="text-xs font-medium">Targets:</span> <span className="text-xs">3-5 key creators 100K+ subscribers</span></div>
            <div><span className="text-xs font-medium">Budget:</span> <span className="text-xs">₹3-5 Cr of total media</span></div>
            <div><span className="text-xs font-medium">Format:</span> <span className="text-xs">Comedy/political satire effective</span></div>
          </div>
          <p className="text-xs text-slate-600 mt-2">Cultivation: Pre-briefing sessions, exclusive visual content, sponsored content (ECI compliant)</p>
        </div>

        {/* Relationship 3: Alt News + Boom */}
        <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">3</span>
            <span className="text-sm font-bold text-blue-600">Alt News + Boom (Fact-Check)</span>
            <Badge variant="info">HIGH</Badge>
          </div>
          <p className="text-xs text-slate-500 mt-2">Third-party credibility amplifiers for rebuttals</p>
          <div className="mt-3 grid gap-2 md:grid-cols-3">
            <div><span className="text-xs font-medium">Alt News 2025:</span> <span className="text-xs">61% viral misinformation pro-BJP</span></div>
            <div><span className="text-xs font-medium">Amit Malviya:</span> <span className="text-xs">Top peddler (12 fact-checks)</span></div>
            <div><span className="text-xs font-medium">Rahul Gandhi:</span> <span className="text-xs">Most targeted individual (17/46)</span></div>
          </div>
          <p className="text-xs text-slate-600 mt-2">Cultivation: Proactive flagging, filing for verification, leveraging data in narrative</p>
        </div>
      </div>

      {/* MP5-020: Endgame Creative Sequence (Deliverable 2) */}
      <div className="rounded-xl border border-pink-200 bg-pink-50 p-6 dark:border-pink-800 dark:bg-pink-900/20">
        <h3 className="text-lg font-semibold text-pink-700 dark:text-pink-400">
          Endgame Creative Sequence (MP5-020)
        </h3>
        <p className="mt-1 text-sm text-pink-600 dark:text-pink-400">
          Final 14 days creative deployment strategy
        </p>

        {/* Phase 1: Negative Contrast */}
        <h4 className="mt-6 font-semibold text-pink-900 dark:text-pink-100">Days 1-7: Negative Contrast</h4>
        <div className="mt-2 rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-700">Intensify anti-AAP messaging:</p>
          <div className="mt-2 grid gap-2 md:grid-cols-4">
            <span className="text-xs">• Drugs crisis</span>
            <span className="text-xs">• Broken promises</span>
            <span className="text-xs">• Governance failures</span>
            <span className="text-xs">• Sheesh Mahal framing</span>
          </div>
        </div>

        {/* Phase 2: Aspiration */}
        <h4 className="mt-6 font-semibold text-pink-900 dark:text-pink-100">Days 8-12: Aspiration</h4>
        <div className="mt-2 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
          <p className="text-sm font-medium text-green-700">Positive Congress agenda:</p>
          <div className="mt-2 grid gap-2 md:grid-cols-4">
            <span className="text-xs">• Farmer income</span>
            <span className="text-xs">• Youth employment</span>
            <span className="text-xs">• Rural development</span>
            <span className="text-xs">• Congress positive vision</span>
          </div>
        </div>

        {/* Phase 3: Turnout */}
        <h4 className="mt-6 font-semibold text-pink-900 dark:text-pink-100">Days 13-14: Turnout</h4>
        <div className="mt-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-blue-700">Mobilization and wave narrative:</p>
          <div className="mt-2 grid gap-2 md:grid-cols-3">
            <span className="text-xs">• "Every vote counts"</span>
            <span className="text-xs">• Congress wave narrative</span>
            <span className="text-xs">• Anti-BJP nationalist framing</span>
          </div>
        </div>

        {/* Pre-Produced Assets */}
        <h4 className="mt-6 font-semibold text-pink-900 dark:text-pink-100">Pre-Produced Assets Ready for Deployment</h4>
        <DataTable
          headers={["Asset", "Timeline", "Notes"]}
          rows={[
            ["Victory/failure 30-min content package", "Ready within 2 hrs of exit poll", "Pre-filmed for rapid distribution"],
            ["Print + digital ad inventory (post-result)", "₹5 Cr reserved", "Immediate post-result messaging"],
            ["Rahul Gandhi final rally content", "Pre-filmed", "For rapid distribution"],
          ]}
        />
      </div>

      {/* MP5-003: BJP IT Cell Intelligence */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">
          BJP IT Cell: Digital War Machine (MP5-003)
        </h3>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          Documented structure and scale
        </p>

        {/* BJP IT Cell Stats */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Core IT Cell Staff"
            value="5,500-6,000"
            subtitle="Professional operation"
            color="bg-red-500"
          />
          <MetricCard
            title="WhatsApp Workers"
            value="150,000+"
            subtitle="WhatsApp University"
            color="bg-red-500"
          />
          <MetricCard
            title="Daily Reach Potential"
            value="7.5-75M"
            subtitle="If 10-50+ groups each"
            color="bg-red-500"
          />
          <MetricCard
            title="Daily Narrative Cycles"
            value="4"
            subtitle="Per day managed"
            color="bg-red-500"
          />
        </div>

        {/* Misinformation Stats */}
        <div className="mt-4 rounded-lg bg-orange-100 p-4 dark:bg-orange-900/40">
          <p className="text-sm font-medium text-orange-700">Alt News 2025 Data: 61% of viral political misinformation was pro-BJP</p>
          <p className="text-xs text-orange-600 mt-1">Amit Malviya (BJP IT Cell head) was the top peddler with 12 fact-checks</p>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Congress Counter:</strong> Congress must deploy 5,000+ ground monitors + Alt News/Boom liaison + pre-built myth-busting content library. WhatsApp Channel (broadcast) for official verified content is urgently needed.
          </p>
        </div>
      </div>

      {/* A-07-08: Fake News & Misinformation - NEW SECTION */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm dark:border-red-800 dark:bg-red-900/20">
        <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">
          Fake News & Misinformation Threat (A-07-08 Research)
        </h3>
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          CRITICAL THREAT: India highest risk globally for misinformation (WEF 2024); 75%+ Indians exposed to AI-generated political content
        </p>

        {/* Misinformation Threat Matrix */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="India Misinformation Risk"
            value="#1"
            subtitle="World Economic Forum 2024"
            color="bg-red-500"
          />
          <MetricCard
            title="Political Deepfake Cost"
            value="$50M+"
            subtitle="Spent by parties in 2024 elections"
            color="bg-orange-500"
          />
          <MetricCard
            title="Deepfake Victims"
            value="75%+"
            subtitle="Indians exposed to AI political content"
            color="bg-purple-500"
          />
          <MetricCard
            title="Fact-Check Coverage"
            value="31%"
            subtitle="Of viral misinformation targeted Congress"
            color="bg-blue-500"
          />
        </div>

        {/* Party Disinformation Capabilities */}
        <h4 className="mt-6 font-semibold text-red-900 dark:text-red-100">Party Disinformation Capabilities</h4>
        <DataTable
          headers={["Party", "IT Cell Scale", "AI/Deepfake", "Budget", "WhatsApp Network"]}
          rows={[
            ["BJP", "VERY HIGH (5,500-6,000 core)", "First-mover (2020 Delhi)", "HIGHEST ($50M+ national)", "150,000+ workers"],
            ["AAP", "HIGH (professional)", "Active (proxy networks)", "SIGNIFICANT", "Government-backed"],
            ["Congress", "MODERATE (growing)", "Limited usage", "CONSTRAINED", "Underdeveloped"],
            ["SAD", "LOW", "Minimal", "Limited", "Cadre-based"],
          ]}
        />

        {/* Key Misinformation Incidents */}
        <h4 className="mt-6 font-semibold text-red-900 dark:text-red-100">Key Misinformation Incidents (2022-2026)</h4>
        <DataTable
          headers={["Date", "Incident", "Platform", "Target", "Status"]}
          rows={[
            ["Feb 2020", "First political deepfake: Manoj Tiwari in Haryanvi; 15M reach via 5,800 WhatsApp groups", "WhatsApp", "Kejriwal/AAP", "VERIFIED"],
            ["Jan 2022", "Forged letter: Sikhs For Justice supporting AAP in Punjab polls", "Social Media", "AAP", "VERIFIED"],
            ["Jan 2022", "Edited Raghav Chadha video on plate-breaking falsely attributed to statement", "Facebook/WhatsApp", "AAP", "VERIFIED"],
            ["2024", "AI agencies (Polymath, Muonium) created deepfakes for BJP, Congress, YSRCP", "All platforms", "Multiple", "VERIFIED"],
            ["Apr 2026", "Congress-BJP protest over fake voter registrations in Ropar MC polls", "Ground/Social", "AAP", "VERIFIED"],
          ]}
        />

        {/* Deepfake AI Tools */}
        <h4 className="mt-6 font-semibold text-red-900 dark:text-red-100">AI Deepfake Industry (India)</h4>
        <DataTable
          headers={["Company", "Location", "Services", "Clients"]}
          rows={[
            ["Polymath Solution", "Pushkar, Rajasthan", "Deepfakes, voice clones, WhatsApp content", "BJP, Congress, YSRCP, Shiv Sena"],
            ["Muonium", "Tamil Nadu", "AI video, political deepfakes", "~10 politicians at $12K+ each"],
            ["Avantari Technologies", "Hyderabad", "Holograms, AR (declined deepfakes)", "Modi since 2012 Gujarat"],
            ["The Ideaz Factory", "India", "Deepfake production", "BJP (Manoj Tiwari 2020)"],
          ]}
        />

        {/* ECI Regulatory Response */}
        <h4 className="mt-6 font-semibold text-red-900 dark:text-red-100">ECI Regulatory Response</h4>
        <DataTable
          headers={["Date", "Action", "Requirement"]}
          rows={[
            ["May 2024", "First Advisory on AI", "Labeling synthetic content"],
            ["Jan 2025", "Second Advisory", "Disclosure of content creator identity"],
            ["Oct 2025", "Third Advisory", "10%+ visible display area for labels"],
            ["Apr 2026", "3-hour takedown rule", "First applied in Assam, Kerala, Tamil Nadu"],
          ]}
        />

        {/* Congress Counter-Strategy */}
        <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300">Congress Counter-Misinformation Strategy</h4>
          <div className="mt-2 grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium">24/7 Monitoring Cell</p>
              <p className="text-xs text-slate-600">Track WhatsApp chains, Facebook posts, YouTube comments</p>
            </div>
            <div>
              <p className="text-sm font-medium">Fact-Check Partnership</p>
              <p className="text-xs text-slate-600">Alt News, Boom Live for third-party verification</p>
            </div>
            <div>
              <p className="text-sm font-medium">Rapid Response Rebuttals</p>
              <p className="text-xs text-slate-600">90-min text, 3-hr video rebuttal SLA</p>
            </div>
            <div>
              <p className="text-sm font-medium">Deepfake Detection Tools</p>
              <p className="text-xs text-slate-600">AI tools to identify synthetic media</p>
            </div>
          </div>
        </div>
      </div>

      {/* A-07-14: Opinion Polls for Punjab 2027 - NEW SECTION */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 shadow-sm dark:border-indigo-800 dark:bg-indigo-900/20">
        <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300">
          Opinion Polls: Punjab 2027 Assembly (A-07-14 Research)
        </h3>
        <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
          Congress leads in anti-incumbency wave; No party crosses majority (59 seats) in most polls
        </p>

        {/* Historical Results */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Historical Results Baseline</h4>
        <DataTable
          headers={["Party", "2017 Vote %", "2017 Seats", "2022 Vote %", "2022 Seats"]}
          rows={[
            ["AAP", "23.72%", "20", "42.01%", "92"],
            ["Congress", "38.50%", "77", "22.98%", "18"],
            ["SAD", "25.24%", "15", "18.38%", "3"],
            ["BJP", "5.44% (alliance)", "3", "6.59%", "2"],
          ]}
        />

        {/* 2024 Lok Sabha Results */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">2024 Lok Sabha Results (Punjab - 13 seats)</h4>
        <DataTable
          headers={["Party", "Vote %", "Seats Won", "Change from 2019"]}
          rows={[
            ["Congress", "26.30%", "7", "-1"],
            ["AAP", "26.02%", "3", "+2"],
            ["BJP", "18.56%", "0", "-2"],
            ["SAD", "13.42%", "1", "-1"],
          ]}
        />

        {/* Opinion Poll Projections 2027 */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">2027 Assembly Seat Projections (May 2026 Polls)</h4>
        <DataTable
          headers={["Pollster/Source", "Date", "Congress", "AAP", "SAD", "BJP", "Methodology"]}
          rows={[
            ["InsightRadarX", "May 18, 2026", "45-52", "28-33", "14-18", "8-10", "Aggregated surveys"],
            ["YouTube Poll", "May 5, 2026", "58", "32", "15", "9", "Social media"],
            ["YouTube Poll", "April 23, 2026", "55", "37", "12", "8", "Social media"],
            ["Facebook Poll", "April 12, 2026", "51", "32", "18", "11", "Social media"],
            ["Facebook Poll", "~May 2026", "57", "33", "17", "9", "Social media"],
          ]}
        />

        {/* Vote Share Projections */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Vote Share Projections (April 2026)</h4>
        <DataTable
          headers={["Congress", "AAP", "SAD", "BJP", "Others"]}
          rows={[
            ["30%", "24%", "15%", "12%", "19%"],
          ]}
        />

        {/* Poll Accuracy Assessment */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">Poll Accuracy Context (2024 Lok Sabha)</h4>
        <DataTable
          headers={["Pollster", "Congress (Predicted)", "Congress (Actual)", "Accuracy"]}
          rows={[
            ["CVoter/ABP News", "5-7 seats", "7 seats", "Overestimated AAP"],
            ["MegaPoll/News18", "7 seats", "7 seats", "CLOSEST"],
          ]}
        />

        {/* Key Findings */}
        <div className="mt-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-300">Key Poll Findings for Congress</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>Consistent Congress lead across all polls (45-58 seats range)</li>
            <li>No party crosses 59-seat majority mark in most projections</li>
            <li>BJP surge from 7% (2022) to 18%+ shows significant vote transfer from SAD</li>
            <li>Congress must resolve CM face ambiguity to convert lead to majority</li>
            <li>Party commissioned 3 internal surveys (mid-May 2026) under Sunil Kanugolu</li>
          </ul>
        </div>

        {/* December 2025 Rural Body Elections */}
        <h4 className="mt-6 font-semibold text-indigo-900 dark:text-indigo-100">December 2025 Rural Body Election Results</h4>
        <DataTable
          headers={["Party", "Result", "Analysis"]}
          rows={[
            ["AAP", "Majority claimed (razor-thin margins)", "Warning sign for incumbents"],
            ["Congress", "Consistent second force", "Anti-AAP protest vote"],
            ["SAD", "Rural Malwa pockets recovery", "Jat Sikh base stabilizing"],
            ["BJP", "Minimal outside urban areas", "Limited rural penetration"],
            ["Turnout", "<50%", "Voter disengagement signal"],
          ]}
        />
      </div>

      {/* A-07-13: Media Alliances & Political Affiliations - NEW SECTION */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 shadow-sm dark:border-amber-800 dark:bg-amber-900/20">
        <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-300">
          Media Alliances & Political Affiliations (A-07-13 Research)
        </h3>
        <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
          PTC Network (Badal/SAD) most overt political ownership; AAP government spent Rs 1,534 crore on ads (2017-2025)
        </p>

        {/* Media Ownership Matrix */}
        <h4 className="mt-6 font-semibold text-amber-900 dark:text-amber-100">Media Outlet Political Affiliations</h4>
        <DataTable
          headers={["Outlet", "Type", "Owner", "Political Alignment", "Confidence"]}
          rows={[
            ["PTC News", "TV", "Sukhbir Singh Badal (via Gur-Baz Media)", "SAD (direct ownership)", "VERIFIED"],
            ["PTC Punjabi", "TV", "Badal family", "SAD (direct ownership)", "VERIFIED"],
            ["Punjab Kesari", "Print (Hindi)", "Chopra family", "Centre-right / anti-AAP", "VERIFIED"],
            ["Jagbani", "Print (Punjabi)", "Hind Samachar Group", "Centre-right / anti-AAP", "VERIFIED"],
            ["Ajit", "Print (Punjabi)", "Barjinder Singh Hamdard", "Independent with influence", "UNCERTAIN"],
            ["The Tribune", "Print (English)", "Dyal Singh Trust", "Independent / centrist", "VERIFIED"],
            ["ABP Sanjha", "TV", "ABP Network", "Neutral / commercially driven", "UNCERTAIN"],
            ["Zee Punjab", "TV", "Subhash Chandra (BJP Rajya Sabha)", "BJP-aligned", "VERIFIED"],
          ]}
        />

        {/* AAP Government Advertising */}
        <h4 className="mt-6 font-semibold text-amber-900 dark:text-amber-100">AAP Government Advertising (2017-2025)</h4>
        <DataTable
          headers={["Period", "Government", "Total Spend", "Annual Average"]}
          rows={[
            ["2017-2022 (5 years)", "Congress", "~Rs 317 crore", "~Rs 63 crore/year"],
            ["2022-2025 (3 years)", "AAP", "~Rs 317 crore + Rs 94 crore", "~Rs 130 crore/year"],
            ["FY 2024-25 alone", "AAP", "~Rs 94 crore (print)", "—"],
            ["8-year total (all govs)", "Combined", "Rs 1,534 crore", "—"],
          ]}
        />

        {/* Key Developments */}
        <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-semibold text-red-700 dark:text-red-300">Key Hostile Actions (2025-2026)</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>Jan 2026: Raids on Punjab Kesari Group establishments (excise, GST, food dept)</li>
            <li>Nov 2025: Government stopped ads to newspapers publishing "sheeshmahal" story</li>
            <li>Nov 2025: Trucks stopped/searched under drug pretext, delaying newspaper delivery</li>
            <li>Apr 2026: Journalists filed formal complaints about censorship by AAP government</li>
            <li>May 2026: Rs 10.59 crore contract for "online reputation management"</li>
          </ul>
        </div>

        {/* Congress Media Gap */}
        <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300">Congress Media Structural Gap</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li>No dedicated media arm in Punjab (unlike PTC for SAD)</li>
            <li>Limited government advertising leverage (not in power)</li>
            <li>Relies on neutral/independent outlets (The Tribune, Rozana Spokesman)</li>
            <li>Must build relationships with Ajit post-Badal alignment uncertainty</li>
          </ul>
        </div>
      </div>

      {/* A-07-12: Paid News & Media Ethics - NEW SECTION */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
          Paid News & Media Ethics (A-07-12 Research)
        </h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          HIGH THREAT: India press freedom rank 157/180 (RSF 2026); Only 1 disqualification for paid news in Indian history
        </p>

        {/* Regulatory Framework */}
        <h4 className="mt-6 font-semibold text-slate-700 dark:text-slate-300">Regulatory Framework</h4>
        <DataTable
          headers={["Mechanism", "Authority", "Effectiveness"]}
          rows={[
            ["MCMC (Media Certification)", "ECI + District Level", "MODERATE — under-resourced"],
            ["PCI Journalistic Conduct", "Press Council of India", "LOW — advisory only"],
            ["RPA Section 127A", "Election Commission", "LOW — only 1 disqualification ever"],
            ["SC Guidelines on Gov Ads (2015)", "Supreme Court", "MODERATE — routinely violated"],
          ]}
        />

        {/* Press Freedom Stats */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <MetricCard
            title="India Press Freedom Rank"
            value="157/180"
            subtitle="RSF World Press Freedom Index 2026"
            color="bg-red-500"
          />
          <MetricCard
            title="Paid News Disqualifications"
            value="1"
            subtitle="In Indian electoral history"
            color="bg-orange-500"
          />
          <MetricCard
            title="Section 69A URLs Blocked"
            value="36,800"
            subtitle="Total blocked (2018-2023)"
            color="bg-purple-500"
          />
        </div>

        {/* National Paid News Cases */}
        <h4 className="mt-6 font-semibold text-slate-700 dark:text-slate-300">Notable Paid News Cases</h4>
        <DataTable
          headers={["Case", "Year", "Details", "Outcome"]}
          rows={[
            ["Umlesh Yadav (UP)", "2011", "Failed to account for election expenses", "DISQUALIFIED — only such case"],
            ["Ashok Chavan (Maharashtra)", "2009", "Identical hagiographic articles in 3 newspapers", "ECI questioned"],
            ["Narottam Mishra (MP)", "2008", "42 news items 'read like advertisements'", "ECI found expense account failure"],
            ["Punjab Kesari", "2009", "Admitted earning Rs 10 crore from paid news", "Stated 'all media doing same'"],
          ]}
        />

        {/* Journalist Safety */}
        <h4 className="mt-6 font-semibold text-slate-700 dark:text-slate-300">Journalist Safety Incidents (Punjab)</h4>
        <DataTable
          headers={["Incident", "Year", "Status"]}
          rows={[
            ["Punjab Police assault on journalist (Batala) — sub-inspectors caught on CCTV", "Aug 2025", "VERIFIED — officers suspended"],
            ["Punjab Police officer assault on journalist (street)", "~2025", "VERIFIED — Brut India video"],
            ["Journalist assaulted at Surrey protest linked to Punjab tensions", "Mar 2023", "VERIFIED — Global News Canada"],
            ["CPJ election safety concerns for Punjab journalists", "Apr 2024", "VERIFIED — CPJ documented"],
          ]}
        />

        {/* ========================================== */}
        {/* SYNTHESIS INTELLIGENCE SECTION */}
        {/* Derived from: s1-s4 synthesis MD files */}
        {/* ========================================== */}

        {/* Gap Analysis - Media Sentiment (CRITICAL GAP) */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 p-4 dark:from-red-900/20 dark:to-orange-900/20">
          <h3 className="mb-3 text-lg font-semibold text-red-700 dark:text-red-400">
            Gap Analysis: Media Sentiment (CRITICAL GAP)
          </h3>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Coverage Rating</div>
              <div className="text-2xl font-bold text-red-600">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Media Sentiment")?.coverageRating || "CRITICAL_GAP"}
              </div>
              <div className="text-xs text-slate-400">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Media Sentiment")?.coveragePercent || 0}% framework coverage
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track A Documents</div>
              <div className="text-2xl font-bold text-amber-600">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Media Sentiment")?.trackAFiles || 0}
              </div>
              <div className="text-xs text-slate-400">Current research gap</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track B Documents</div>
              <div className="text-2xl font-bold text-indigo-600">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Media Sentiment")?.trackBFiles || 0}
              </div>
              <div className="text-xs text-slate-400">Existing documentation</div>
            </div>
            <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Framework Sections</div>
              <div className="text-2xl font-bold text-slate-600">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Media Sentiment")?.frameworkSections || 0}
              </div>
              <div className="text-xs text-slate-400">Requiring coverage</div>
            </div>
          </div>
          {/* Missing Sections */}
          {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Media Sentiment")?.missingSections && (
            <div className="mt-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Missing Sections (Require Immediate Research):</div>
              <div className="flex flex-wrap gap-2">
                {gapAnalysis.categoryGapAnalysis.find(c => c.category === "Media Sentiment")?.missingSections.map((gap, idx) => (
                  <span key={idx} className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-900/50 dark:text-red-400">
                    {gap.section}: {gap.description} ({gap.severity})
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quality Validation Summary */}
        <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
          <h4 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
            Quality Validation Summary (s3)
          </h4>
          <div className="grid gap-3 md:grid-cols-4">
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Total Documents</div>
              <div className="text-xl font-bold text-indigo-600">{qualityValidation.scope.total}</div>
              <div className="text-xs text-slate-400">Pass Rate: {qualityValidation.passRate}%</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track A HIGH</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.trackASummary.high}/{qualityValidation.trackASummary.total}</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Track B HIGH</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.trackBSummary.high}/{qualityValidation.trackBSummary.total}</div>
            </div>
            <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
              <div className="text-xs text-slate-500">Assessment</div>
              <div className="text-xl font-bold text-green-600">{qualityValidation.overallAssessment}</div>
            </div>
          </div>
        </div>

        {/* Critical Gaps Requiring Immediate Attention */}
        <div className="mb-6 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="mb-3 text-sm font-semibold text-amber-700 dark:text-amber-400">
            Critical Gaps Requiring Immediate Research
          </h4>
          <div className="grid gap-2 md:grid-cols-2">
            {gapAnalysis.gapSeverityMatrix
              .filter(g => g.severity === "CRITICAL")
              .slice(0, 6)
              .map((gap, idx) => (
                <div key={idx} className="flex items-start gap-2 rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300">{gap.gap}</div>
                    <div className="text-xs text-slate-500">Impact: {gap.impact} | Priority: {gap.priority}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

    </div>
  );
}
