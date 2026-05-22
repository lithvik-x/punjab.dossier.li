"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Tv, Radio, Newspaper, TrendingUp } from "lucide-react";
import type {
  TVChannel,
  TVAdRate,
  RadioStation,
  DiasporaRadio,
  MSONetwork,
  CampaignBudget,
  MediaSource,
  YouTubeChannel,
  RegionalStrategy,
} from "@/types/media-narrative";

export default function MediaTraditionalPage() {
  const tvChannels: TVChannel[] = [
    { name: "PTC Punjabi", type: "GEC", subscribers: "20.125M monthly reach", ownership: "G Next Media (Sukhbir Badal connected)", barchart: 95 },
    { name: "PTC News", type: "News", subscribers: "DD Free Dish Ch 62 (Apr 2026)", ownership: "SAD-BJP aligned", barchart: 88 },
    { name: "ABP Sanjha", type: "News", subscribers: "Top 10 Punjabi channel", ownership: "ABP Network", barchart: 72 },
    { name: "News18 Punjab", type: "News", subscribers: "4.8M reach (J-Band)", ownership: "Network18/Reliance", barchart: 65 },
    { name: "Zee Punjabi", type: "GEC", subscribers: "#2 position BARC 2022 (196K AMA)", ownership: "ZEE/Subhash Chandra", barchart: 70 },
    { name: "DD Punjabi", type: "Public", subscribers: "Must-carry, rural reach", ownership: "Prasar Bharati (Govt)", barchart: 35 },
  ];

  const tvAdRates: TVAdRate[] = [
    { channel: "PTC Punjabi", standard: "Rs 5,000-20,000", primeTime: "Rs 30,000-80,000", note: "Prime 2-3x base" },
    { channel: "ABP Sanjha", standard: "Rs 5,000-18,000", primeTime: "Rs 25,000-60,000", note: "Industry estimate" },
    { channel: "News18 Punjab", standard: "Rs 4,000-15,000", primeTime: "Rs 20,000-50,000", note: "J-Band: Rs 413" },
    { channel: "Zee Punjab HP", standard: "Rs 4,000-15,000", primeTime: "Rs 20,000-45,000", note: "Regional" },
    { channel: "PTC News", standard: "Rs 3,000-12,000", primeTime: "Rs 15,000-40,000", note: "DD Free Dish expanded reach" },
  ];

  const radioStationsFull: RadioStation[] = [
    { name: "Radio Punjab (AIR)", frequency: "105.6 FM", listeners: "8-12L daily", demographic: "35-60+ yrs, rural", type: "Public" },
    { name: "Big FM", frequency: "92.7 FM", listeners: "6-10L daily", demographic: "18-45 yrs, urban", type: "Private" },
    { name: "Radio City", frequency: "91.1 FM", listeners: "5-8L daily", demographic: "18-40 yrs, urban", type: "Private" },
    { name: "Radio Mirchi", frequency: "98.3 FM", listeners: "4-7L daily", demographic: "18-35 yrs, urban", type: "Private" },
    { name: "FM Gold", frequency: "106.4 FM", listeners: "3-5L daily", demographic: "25-50 yrs, urban", type: "Public" },
    { name: "AIR Amritsar", frequency: "102.4 FM", listeners: "Regional", demographic: "Rural, border areas", type: "Public" },
  ];

  const diasporaRadio: DiasporaRadio[] = [
    { name: "Sher E Punjab Radio", market: "Canada/International", type: "Online", reach: "Significant NRI listenership", utility: "Diaspora engagement" },
    { name: "Punjabi Radio USA", market: "USA", type: "Online", reach: "Large NRI audience", utility: "Political content permissible" },
    { name: "Desh Punjab Radio", market: "USA (Sacramento)", type: "Online", reach: "Diaspora reach", utility: "Merged entity" },
  ];

  const campaignBudget: CampaignBudget[] = [
    { scale: "Minimum (4 weeks)", tvBudget: "Rs 18-33 lakh", radioBudget: "Rs 3-6 lakh", total: "Rs 21-39 lakh" },
    { scale: "Recommended (8 weeks)", tvBudget: "Rs 63 lakh-1 crore", radioBudget: "Rs 5.5-11 lakh", total: "Rs 68 lakh-1.1 crore" },
    { scale: "Maximum (12 weeks)", tvBudget: "Rs 1-1.5 crore", radioBudget: "Rs 8-15 lakh", total: "Rs 1.08-1.65 crore" },
  ];

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

  const msoNetworks: MSONetwork[] = [
    { name: "SITI Networks", coverage: "800+ locations, 245+ districts", fiber: "33,000+ km optical fiber", headend: "15 digital headends", note: "Largest MSO India" },
    { name: "DEN Networks", coverage: "Pan-India cable presence", owner: "Reliance-Disney merged entity", note: "Major Punjab coverage" },
    { name: "Fastway", coverage: "North India, strong Punjab", note: "LCN mapping available" },
    { name: "Hathway Cable", coverage: "Present in Punjab", owner: "Reliance ecosystem", note: "GTPL Hathway key player" },
  ];

  const barcNote = "BARC TV ratings suspended since March 2026 (Ministry directive) — No official viewership data available as of May 2026";

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

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              <Tv className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Traditional Media
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            TV • Radio • Print • Cable/MSO infrastructure
          </p>
        </div>
        <Badge variant="success">+0.48 Media Sentiment</Badge>
      </motion.div>

      {/* Punjabi Media Landscape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Punjabi Media Landscape (Verified)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Top media outlets ranked by circulation/reach — Ajit #1 newspaper (Media Ant May 2025)</p>
            <div className="mt-6 space-y-4">
              {mediaSources.map((source) => (
                <motion.div
                  key={source.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
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
                    color="purple"
                    showPercentage={false}
                  />
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* TV Channel Reach */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>TV Channel Reach & Market Position (G26 Research)</CardTitle>
              <Badge variant="warning">BARC Suspended Mar 2026</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">{barcNote}</p>
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
                    <ProgressBar label="" value={channel.barchart} color="purple" showPercentage={false} />
                  </div>
                  <Badge variant={channel.name.includes("PTC") || channel.name.includes("Zee") ? "danger" : "default"}>
                    {channel.ownership.includes("SAD") || channel.ownership.includes("BJP") ? "Hostile" :
                     channel.ownership.includes("ABP") || channel.ownership.includes("Network") ? "Neutral" : "Public"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* TV Advertising Rates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>TV Advertising Rates (G26 Research)</CardTitle>
              <Badge variant="info">30-sec Spot Rates</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">Regional Punjabi channels — BARC suspension means actual viewership-based pricing is fluid</p>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Channel", "Standard Time", "Prime Time (8-11 PM)", "Notes"]}
                rows={tvAdRates.map(r => [r.channel, r.standard, r.primeTime, r.note])}
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              National channels for comparison: Aaj Tak prime time INR 50,000-2,00,000+ | IPL TV INR 18 lakh per 30 sec
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Radio Landscape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Radio Landscape with Listenership (G26 Research)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">FM radio significantly underutilized for political messaging in Punjab</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-slate-700 mb-2">Domestic FM Stations</h4>
                <div className="space-y-3">
                  {radioStationsFull.map((radio) => (
                    <motion.div
                      key={radio.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Radio className="h-4 w-4 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-700 dark:text-slate-300">{radio.name}</span>
                          <Badge variant="info">{radio.frequency}</Badge>
                        </div>
                        <p className="text-xs text-slate-500">{radio.listeners} • {radio.demographic}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-700 mb-2">NRI/Diaspora Radio Networks</h4>
                <div className="space-y-3">
                  {diasporaRadio.map((radio) => (
                    <motion.div
                      key={radio.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
                    >
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
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MSO/Cable Infrastructure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Cable/MSO Infrastructure (G26 Research)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">SITI, DEN, Hathway, GTPL — Reliance-Disney merged entity (Nov 2024) controls significant distribution</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {msoNetworks.map((mso) => (
                <motion.div
                  key={mso.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">{mso.name}</h4>
                    <Badge variant="default">{mso.owner ? "Reliance" : "Independent"}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{mso.coverage}</p>
                  {mso.fiber && <p className="mt-1 text-xs text-slate-500">{mso.fiber}</p>}
                  {mso.headend && <p className="mt-1 text-xs text-slate-500">{mso.headend}</p>}
                  <p className="mt-2 text-xs text-amber-600">{mso.note}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Campaign Budget Estimates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Campaign Budget Estimates (G26 Research)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">Recommended TV/Radio broadcast budgets for Punjab election 2027</p>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Campaign Scale", "TV Budget", "Radio Budget", "Combined Total"]}
                rows={campaignBudget.map(b => [b.scale, b.tvBudget, b.radioBudget, b.total])}
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Minimum viable: Rs 21-39 lakh (4 weeks) | Recommended: Rs 68 lakh-1.1 crore (8 weeks)
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Regional Media Strategy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Regional Media Strategy (G26/G3 Research)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Tailored approach for Malwa (69 seats), Majha (27 seats), Doaba (23 seats) — Government ad rate revision: +26% (Nov 2025)
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {regionalStrategy.map((r) => (
                <motion.div
                  key={r.region}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className={`rounded-lg p-4 ${
                    r.region === "Malwa" ? "bg-red-50 dark:bg-red-900/20" :
                    r.region === "Majha" ? "bg-blue-50 dark:bg-blue-900/20" :
                    "bg-purple-50 dark:bg-purple-900/20"
                  }`}
                >
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
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
