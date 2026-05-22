"use client";

import { MetricCard, Badge, ProgressBar } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingDown,
  Users,
  Map,
  Target,
  Vote,
  Building2,
  Shield,
  TrendingUp,
} from "lucide-react";

// Vote share trajectory data
const bspVoteShare = [
  { year: "1992 Assembly", share: 16.32, seats: 9, note: "Akali boycott; highest-ever; Satnam Kainth became LoP" },
  { year: "1997 Assembly", share: 7.48, seats: 1, note: "Steep decline post-1992 peak" },
  { year: "2002 Assembly", share: 5.7, seats: 0, note: "Continued erosion; strong in Doaba only" },
  { year: "2012 Assembly", share: 4.0, seats: 0, note: "Barely 4% — marginal player" },
  { year: "2017 Assembly", share: 1.5, seats: 0, note: "Further decline; Congress/SAD dominance" },
  { year: "2022 Assembly", share: 1.77, seats: 0, note: "SAD alliance; contested 20 seats; won 0" },
  { year: "2024 LS", share: ~2.0, seats: 0, note: "Contested solo on all 13 seats" },
];

// SC community breakdown in Punjab
const scCommunities = [
  { community: "Mazhabi Sikhs", percentage: 33, note: "Largest SC group; rural Sikh context" },
  { community: "Valmikis (Balmiki)", percentage: 12, note: "Urban/concentration in Doaba" },
  { community: "Ravidassia (Ramdasia)", percentage: 15, note: "Doaba strong; politically assertive" },
  { community: "Ad-Dharmi", percentage: 11, note: "Doaba core; BSP's traditional base" },
  { community: "Chamar/Jatav", percentage: 10, note: "Smaller group; BSP identification" },
  { community: "Other SCs", percentage: 19, note: "Includes Bazigar, Dumna, Sansi" },
];

// Key seats where BSP can play spoiler
const bspSpoilerSeats = [
  { seat: "Jalandhar (SC)", bspVotes: "2,00,000+ (2019)", context: "BSP's strongest LS seat; Balwinder Singh got 2L+ votes in 2019; 5-cornered contest in 2024" },
  { seat: "Hoshiarpur (SC)", bspVotes: "1,28,000 (2019)", context: "Kanshi Ram won here in 1996; strong pockets: Phagwara, Sham Chaurasi, Chabbewal" },
  { seat: "Anandpur Sahib", bspVotes: "Strong base", context: "Covers 4 Doaba assembly segments; Kanshi Ram's home turf Ropar; BSP state president contesting" },
  { seat: "Faridkot (SC)", bspVotes: "Dent potential", context: "SC-reserved; BSP can split Dalit votes in multi-corner contests" },
];

// Alliance history
const allianceHistory = [
  { period: "1996 LS", partner: "SAD", detail: "First SAD-BSP alliance; limited impact" },
  { period: "2021-22 Assembly", partner: "SAD", detail: "BSP contested 20 seats (97-20 split). SAD swapped 12 seats previously fought by BJP to BSP" },
  { period: "2024 LS", partner: "SOLO", detail: "Snapped ties with SAD after SAD cosied up to BJP. Contested all 13 LS seats alone" },
  { period: "BSP-AAP 2022", partner: "Attempted", detail: "AAP approached BSP for pre-poll alliance before 2022; talks collapsed" },
];

// Key leaders
const bspKeyFaces = [
  { name: "Avtar Singh Karimpuri", role: "State President", since: "Nov 2024", background: "Former Rajya Sabha MP; appointed after Garhi's expulsion" },
  { name: "Dr Nachhatar Pal", role: "Key Face (Nawanshahr)", since: "Long-term", background: "BSP's strongest electoral performer in Doaba" },
  { name: "Balwinder Singh", role: "Jalandhar Candidate", since: "2019", background: "Got 2,00,000+ votes in Jalandhar LS 2019; BSP's best LS performer" },
  { name: "Khushi Ram", role: "Hoshiarpur Candidate", since: "2019", background: "Got 1.28L votes in Hoshiarpur LS 2019; ate into Congress Dalit vote" },
];

export default function BSPStatusPage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  BSP Punjab — Party Intelligence
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                  SC/Valmiki voter base, alliance history, Doaba strength, electoral strategy
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ALERT — Declining Force */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-amber-700 dark:text-amber-400">BSP in Punjab: Chronic Spoiler, Shrinking Base</p>
                <p className="text-sm text-amber-600 dark:text-amber-300">
                  Once a Dalit movement winning 9 seats (1992) with 16.32% vote share, BSP today is a marginal player at ~1.77% vote share.
                  Still relevant as a spoiler in 4-5 Doaba seats where SC concentration is highest.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CORE METRICS */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard
            title="Current Vote Share"
            value="~1.8%"
            subtitle="2022 Assembly: 1.77%; 2024 LS: ~2%"
            change={-98}
            trend="down"
            color="rose"
          />
          <MetricCard
            title="Historical Peak"
            value="16.32%"
            subtitle="1992 Assembly (9 seats); highest ever"
            color="rose"
          />
          <MetricCard
            title="Assembly Seats"
            value="0 / 117"
            subtitle="Last won seats in 1992 (9) and 1997 (1)"
            color="rose"
          />
          <MetricCard
            title="SC Population"
            value="32%"
            subtitle="Highest in India; core target constituency"
            change={0}
            trend="neutral"
            color="blue"
          />
        </div>
      </motion.div>

      {/* VOTE SHARE TRAJECTORY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-rose-600" />
              Vote Share Trajectory — The Long Decline
            </CardTitle>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sources: ECI, The Hindu (May 2024), Hindustan Times (May 2024), IndiaVotes
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-3 md:grid-cols-7">
              {bspVoteShare.map((d) => (
                <div key={d.year} className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-300">{d.year}</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-400">{d.share}%</p>
                  <p className="text-xs text-slate-500">{d.seats} seats</p>
                  <p className="mt-1 text-xs text-slate-500 leading-tight">{d.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-slate-100 p-3 dark:bg-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <strong>Why BSP declined in Punjab:</strong> Mainstream parties (Congress, SAD, AAP) co-opted Dalit representation —
                SC MLAs from non-BSP parties account for 83% of all SC legislators since 1967. Only 17% of SC MLAs came from BSP.
                Dalit vote is fragmented across parties, not captured by any single caste-based party (The Hindu/IDC Study).
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* SC/DAILT VOTER BASE */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              SC Community Breakdown — BSP&apos;s Target Constituency
            </CardTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Punjab has the highest SC percentage of any Indian state — 32% (Census 2011)
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-3">
              {scCommunities.map((c) => (
                <div key={c.community} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.community}</span>
                      <span className="ml-2 text-xs text-slate-400">{c.note}</span>
                    </div>
                    <span className="text-sm font-bold text-purple-600">{c.percentage}%</span>
                  </div>
                  <div className="mt-2">
                    <ProgressBar label={c.community} value={c.percentage} max={33} color="purple" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Valmiki + Ad-Dharmi Base</p>
                <p className="mt-2 text-xs text-slate-600">
                  BSP&apos;s traditional vote bank is the Ad-Dharmi and Valmiki (Balmiki) communities concentrated in Doaba.
                  Valmikis are primarily urban (sanitation workers, sweepers); Ad-Dharmis are land-owning Dalits in
                  Jalandhar/Hoshiarpur belt. Both communities feel underrepresented within Congress and AAP&apos;s wider
                  Dalit outreach (which includes Mazhabi Sikhs as largest SC group).
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-rose-600">Fragmentation Challenge</p>
                <p className="mt-2 text-xs text-slate-600">
                  Congress has historically given SCs highest representation (23% of SC MLAs 1967-2022), followed by SAD (28%).
                  AAP&apos;s 2022 sweep included 20+ SC MLAs. Mainstream parties absorb SC grievances better than BSP can,
                  leaving BSP with a shrinking hardcore base of ~1.5-2% — mostly party loyalists rather than community vote.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-purple-200 bg-purple-100/50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
              <p className="text-sm font-medium text-purple-600">34 Reserved SC Seats in Punjab Assembly</p>
              <div className="mt-1 grid grid-cols-4 gap-1 text-xs">
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Bhoa (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Gurdaspur (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Firozpur City (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Balluana (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Nabha (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Samrala (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Rajpura (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Jalandhar North (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Jalandhar Central (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Amritsar Central (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Amritsar South (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Ajnala (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Attari (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Hoshiarpur (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Banga (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Chabbewal (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Garhshankar (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Sultanpur Lodhi (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Zira (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Bhuylo (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Dhuri (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Sherpur (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Lehra (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Dera Baba Nanak (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Khem Karan (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Nawan Shahr (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Balachaur (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Dasuya (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Fatehgarh Churian (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Nihal Singh Wala (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Bhadaur (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Giddharbaha (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Malout (SC)</span>
                <span className="rounded bg-purple-100 px-2 py-1 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Lambi (SC)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* DOABA STRONGHOLD */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-5 w-5 text-cyan-600" />
              Doaba Region — BSP&apos;s Core Stronghold
            </CardTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              BSP founder Kanshi Ram shaped the party in Doaba; it remains BSP&apos;s only electoral relevant zone
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">Doaba SC Population</p>
                <p className="text-2xl font-bold text-cyan-600">40%+</p>
                <p className="text-xs text-slate-500">vs ~32% state average; highest SC density region</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">Key Districts</p>
                <p className="text-2xl font-bold text-cyan-600">5</p>
                <p className="text-xs text-slate-500">Jalandhar, Hoshiarpur, Nawanshahr, Kapurthala, SBS Nagar</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">BSP Strong Assembly Segments</p>
                <p className="text-2xl font-bold text-cyan-600">4-6</p>
                <p className="text-xs text-slate-500">Banga, Nawanshahr, Balachaur, Garhshankar, Phagwara, Sham Chaurasi</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <h4 className="mb-2 text-sm font-semibold text-cyan-700 dark:text-cyan-400">Historical Legacy</h4>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <p><strong>1992:</strong> BSP won 9 seats — peak electoral performance. Satnam Kainth became Leader of Opposition.</p>
                <p><strong>1996:</strong> Kanshi Ram won Hoshiarpur Lok Sabha seat — BSP&apos;s only LS win from Punjab.</p>
                <p><strong>1997:</strong> BSP won Garhshankar — last assembly seat won by party (single seat).</p>
                <p><strong>2002 onwards:</strong> Zero seats but stood second on 4 Doaba seats.</p>
                <p><strong>2022:</strong> SAD alliance gave 20 seats; BSP drew blank but Dr Nachhatar Pal (Nawanshahr) came close.</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-cyan-200 bg-cyan-100/50 p-3 dark:border-cyan-800 dark:bg-cyan-900/20">
              <p className="text-sm font-medium text-cyan-600">Doaba Seat Consolidation Strategy</p>
              <p className="mt-1 text-xs text-slate-600">
                BSP&apos;s best 2027 strategy is to consolidate the 4-5 Doaba assembly seats where it retains organisational
                memory and candidate recognition. Jalandhar LS (2L+ votes in 2019) and Hoshiarpur LS (1.28L votes in 2019)
                are the party&apos;s only remaining high-visibility contests. Outside Doaba, BSP is electorally irrelevant.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* SPOILER SEATS */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-amber-600" />
              Spoiler Analysis — Where BSP Can Still Matter
            </CardTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Source: The Hindu, Hindustan Times, Institute for Development & Communication (May 2024)
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 space-y-3">
              {bspSpoilerSeats.map((s) => (
                <div key={s.seat} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-amber-700 dark:text-amber-400">{s.seat}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{s.context}</p>
                    </div>
                    <Badge variant="warning">SPOILER</Badge>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs font-medium text-amber-600">BSP Vote Share: {s.bspVotes}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-100/50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
              <p className="text-sm font-medium text-amber-600">Who Does BSP Hurt Most?</p>
              <p className="mt-1 text-xs text-slate-600">
                BSP&apos;s Dalit vote predominantly eats into <strong>Congress</strong> base (traditional Dalit vote catcher).
                In 2019 Hoshiarpur, BSP&apos;s 1.28L votes directly caused Congress&apos;s defeat. In Jalandhar, BSP&apos;s 2L+ votes
                made it a five-cornered fight. BSP also damages AAP&apos;s SC outreach (AAP won 20+ SC seats in 2022 but
                SC vote is fluid). BSP helps BJP indirectly by splitting anti-BJP Dalit vote in multi-corner contests.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ALLIANCE HISTORY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-slate-600" />
              Alliance History & Electoral Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {allianceHistory.map((a) => (
                <div key={a.period} className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
                  <p className="text-xs font-medium text-blue-600 dark:text-blue-300">{a.period}</p>
                  <p className="text-sm font-bold text-blue-700 dark:text-blue-400">{a.partner}</p>
                  <p className="mt-1 text-xs text-slate-500">{a.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">2022 SAD-BSP Alliance Breakdown</h4>
                <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <li>SAD contested 97 seats; BSP contested 20 seats</li>
                  <li>SAD gave BSP 12 seats previously contested by BJP — symbolic transfer of anti-BJP vote</li>
                  <li>Alliance won 0 seats combined (SAD went from 15 in 2017 to 3 in 2022 separately)</li>
                  <li>BSP vote share actually dropped (1.77%) compared to 2017 solo (1.5%) — alliance did not help</li>
                  <li>Alliance collapsed ahead of 2024 LS when SAD courted BJP again</li>
                </ul>
              </div>
              <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">BSP-AAP Alliance That Never Happened</h4>
                <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <li>AAP approached BSP for pre-poll alliance before 2022 Punjab Assembly elections</li>
                  <li>Talks collapsed over seat-sharing disagreements</li>
                  <li>AAP went solo and won 92 seats, negating BSP&apos;s relevance as alliance partner</li>
                  <li>Jan 2025: Former BSP state president Jasvir Singh Garhi joined AAP — individual defection</li>
                  <li>BSP-AAP alliance unlikely in 2027 unless AAP faces severe anti-incumbency</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-3 dark:border-rose-800 dark:bg-rose-900/20">
              <p className="text-sm font-medium text-rose-600">Internal Turmoil</p>
              <p className="mt-1 text-xs text-slate-600">
                Nov 2024: BSP expelled state president Jasvir Singh Garhi for &quot;indiscipline.&quot; Avtar Singh Karimpuri appointed replacement.
                Jan 2025: Garhi joined AAP along with former BSP Punjab Gen Sec Dr Jaspreet Singh. The leadership crisis
                highlights BSP&apos;s organisational decay and Mayawati&apos;s top-down control model failing in Punjab.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* KEY LEADERS */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              Key Faces
            </CardTitle>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              BSP Punjab leadership thin; no mass leaders with independent electoral heft
            </p>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              {bspKeyFaces.map((f) => (
                <div key={f.name} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                    {f.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <p className="mt-2 font-semibold text-slate-800 dark:text-slate-200">{f.name}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-300">{f.role} (since {f.since})</p>
                  <p className="mt-1 text-xs text-slate-500">{f.background}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-100/50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-600">Leadership Crisis</p>
              <p className="mt-1 text-xs text-slate-600">
                Unlike AAP (Mann), Congress (Warring), SAD (Sukhbir), or BJP (Jakhar), BSP has no face that commands
                media attention or voter recognition beyond Doaba micro-pockets. Mayawati has not visited Punjab for
                sustained campaigning since the 1990s. All key decisions are made from Lucknow — no local autonomy.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* ELECTORAL STRATEGY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        <Card className="border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Vote className="h-5 w-5 text-purple-600" />
              Electoral Strategy & 2027 Outlook
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Most Likely 2027 Strategy</p>
                <p className="mt-2 text-xs text-slate-600">
                  Solo contest on 20-25 seats in Doaba + select SC-reserved constituencies.
                  Unlikely to find alliance partner given declining relevance.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Best Case Scenario</p>
                <p className="mt-2 text-xs text-slate-600">
                  2-3% vote share; possible spoiler in 4-5 seats. Winning a seat is highly unlikely
                  without alliance with a major party.
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-sm font-medium text-rose-600">Worst Case Scenario</p>
                <p className="mt-2 text-xs text-slate-600">
                  Further decline to &lt;1% as AAP and BJP intensify SC outreach; key leaders defect to AAP/BJP;
                  BSP reduced to token presence.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400">Strategic Options for BSP</h4>
              <div className="mt-2 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-purple-500">1.</span>
                  <p><strong>Merge with INDIA bloc?</strong> Congress has 34 reserved seats as bargaining chip. But Mayawati has historically resisted alliance with Congress in Punjab.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-purple-500">2.</span>
                  <p><strong>Revive SAD alliance?</strong> Both parties weakened; SAD at 13.26% (2024 LS) down from alliance-era 30%+. Combined vote share (~15%) still insufficient for seat wins.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-purple-500">3.</span>
                  <p><strong>BJP alliance?</strong> Ideologically contradictory (BSP is Ambedkarite; BJP is Hindutva). BJP has its own Dalit outreach via 5-point plan. Deep ideological incompatibility.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-purple-500">4.</span>
                  <p><strong>Go solo, consolidate Doaba:</strong> Most realistic. Focus resources on 5-6 Doaba seats where BSP has historical presence and candidate recall value.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-purple-200 bg-purple-100/50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
              <p className="text-sm font-medium text-purple-600">Verdict</p>
              <p className="mt-1 text-xs text-slate-600">
                BSP is a <strong>marginal factor</strong> in Punjab 2027. Its relevance is limited to spoiling in 4-5 seats
                where SC vote concentration is high and multi-corner contests narrow margins. The party&apos;s decline from
                16.32% (1992) to ~1.8% (2022) reflects the structural absorption of Dalit representation by mainstream
                parties. BSP&apos;s best hope is becoming a kingmaker in a hung assembly scenario — but it would need 5+
                seats to play that role, which requires an alliance it is unlikely to secure.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
