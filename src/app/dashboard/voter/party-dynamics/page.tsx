"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Users, AlertTriangle, TrendingUp, Vote, Target, PartyPopper } from "lucide-react";

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

const bjpGrowth = {
  voteShare2019: "9.63%",
  voteShare2024: "18.56%",
  growth: "+8.93 percentage points",
  strategy: "Going solo for 2027 (ending SAD-BJP alliance)",
  rajyaSabhaMPs: "6 of 7 now BJP",
};

const congressFactionalism = {
  factions: ["Warring", "Bajwa", "Channi"],
  byElectionLosses: "6 of 7 last by-elections",
  aiccGagOrder: "January 2026",
  channiDemand: "More Dalit representation",
  noCMFace: "No declared CM candidate for 2027",
  groundGameRisk: "HIGH — organizational capacity to capitalize on AAP decline",
};

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
};

const congressVoteFloorCeiling = {
  statewideFloor: "22-25%",
  statewideWithCampaign: "28-32%",
  statewideCeiling: "35-38%",
  byRegion: {
    malwa: { floor2022: "~18-20%", floor2027: "18-22%", ceiling: "28-32%" },
    doaba: { floor2022: "~28-30%", floor2027: "28-32%", ceiling: "38-42%" },
    majha: { floor2022: "~30-33%", floor2027: "30-35%", ceiling: "40-45%" },
  },
};

const notAProtestSignal = {
  nationalAverage: "1.1-1.5%",
  punjab2022: "1.2%",
  interpretation: "NOTA functions as protest vote when voters disillusioned with both major parties",
  swingIndicator: "High NOTA in 2017 → Major anti-incumbent wave (Congress lost 77→18 seats)",
  "2027Risk": "If NOTA exceeds 2%, signals voter disillusionment requiring candidate quality response",
  strategicNote: "NOTA protest voters are recoverable if candidate quality improves",
};

const flipMarginAnalysis = [
  { currentAAPMargin: "<2,000 votes", swingNeeded: "1-3%", seatsInCategory: "8-12" },
  { currentAAPMargin: "2,000-5,000", swingNeeded: "3-5%", seatsInCategory: "15-18" },
  { currentAAPMargin: "5,000-10,000", swingNeeded: "5-8%", seatsInCategory: "20-25" },
  { currentAAPMargin: "10,000-20,000", swingNeeded: "8-12%", seatsInCategory: "30-35" },
  { currentAAPMargin: ">20,000", swingNeeded: ">12%", seatsInCategory: "15-20" },
];

const partyVoteShare2022 = {
  aap: { seats: 92, voteShare: "42.01%", trend: "+18.29 pp" },
  congress: { seats: 18, voteShare: "22.98%", trend: "-15.52 pp" },
  sad: { seats: 3, voteShare: "18.38%", trend: "-6.86 pp" },
  bjp: { seats: 2, voteShare: "5.96%", trend: "Combined with SAD" },
  bsp: { seats: 0, voteShare: "1.31%" },
  others: { seats: 2, voteShare: "~9.36%" },
};

const sadSplit = {
  date: "August 2025",
  factions: ["Sukhbir Badal faction", "Giani Harpreet Singh's SAD (Punar Surjit)"],
  impact: "Organizational collapse creates opportunity for Congress",
};

export default function PartyDynamicsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
              5
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Party Dynamics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            AAP collapse, BJP growth, and swing voter analysis
          </p>
        </div>
        <Badge variant="success">AAP: -16pp since 2022</Badge>
      </div>

      {/* AAP Vote Share Collapse */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>AAP Vote Share Collapse — 2022 to 2026</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From s1-cross-reference-validation</p>
              <div className="space-y-3">
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
            </CardContent>
          </Card>
        </motion.div>

        {/* BJP Growth */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>BJP Growth — Solo for 2027</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">From s1-cross-reference-validation</p>
              <div className="space-y-3">
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
                <p className="text-xs text-orange-600 dark:text-orange-300">{sadSplit.impact}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Congress Factionalism */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Congress Factionalism — Organizational Risk</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">From s1-cross-reference-validation</p>
            <div className="space-y-3">
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
          </CardContent>
        </Card>
      </motion.div>

      {/* 2022 Vote Share Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>2022 Assembly Election — Vote Share Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                <p className="text-xs text-slate-500">AAP</p>
                <p className="text-xl font-bold text-red-600">{partyVoteShare2022.aap.seats} seats</p>
                <p className="text-xs text-slate-500">{partyVoteShare2022.aap.voteShare}</p>
                <p className="text-xs text-green-600">{partyVoteShare2022.aap.trend}</p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
                <p className="text-xs text-slate-500">Congress</p>
                <p className="text-xl font-bold text-green-600">{partyVoteShare2022.congress.seats} seats</p>
                <p className="text-xs text-slate-500">{partyVoteShare2022.congress.voteShare}</p>
                <p className="text-xs text-red-600">{partyVoteShare2022.congress.trend}</p>
              </div>
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
                <p className="text-xs text-slate-500">SAD</p>
                <p className="text-xl font-bold text-yellow-600">{partyVoteShare2022.sad.seats} seats</p>
                <p className="text-xs text-slate-500">{partyVoteShare2022.sad.voteShare}</p>
                <p className="text-xs text-red-600">{partyVoteShare2022.sad.trend}</p>
              </div>
              <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
                <p className="text-xs text-slate-500">BJP</p>
                <p className="text-xl font-bold text-orange-600">{partyVoteShare2022.bjp.seats} seats</p>
                <p className="text-xs text-slate-500">{partyVoteShare2022.bjp.voteShare}</p>
                <p className="text-xs text-slate-500">{partyVoteShare2022.bjp.trend}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs text-slate-500">BSP</p>
                <p className="text-xl font-bold text-slate-600">{partyVoteShare2022.bsp.seats} seats</p>
                <p className="text-xs text-slate-500">{partyVoteShare2022.bsp.voteShare}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Others</p>
                <p className="text-xl font-bold text-slate-600">{partyVoteShare2022.others.seats} seats</p>
                <p className="text-xs text-slate-500">{partyVoteShare2022.others.voteShare}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Voter Type Taxonomy */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Composite Voter Type Taxonomy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 mb-4">9-type voter classification for 2027 targeting</p>
            <div className="overflow-x-auto">
              <DataTable
                headers={["Voter Type", "Est. %", "Region", "2022 Behavior", "2027 Trajectory"]}
                rows={compositeVoterTypes.voterTypeTaxonomy.map((v) => [
                  v.type, v.estPct, v.region, v.behavior2022, v.trajectory2027
                ])}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Congress Vote Floor/Ceiling */}
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Congress Vote Share — Floor/Ceiling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">Projected ranges for 2027</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Statewide Floor</span>
                  <span className="font-bold text-red-500">{congressVoteFloorCeiling.statewideFloor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">With Campaign</span>
                  <span className="font-bold text-orange-500">{congressVoteFloorCeiling.statewideWithCampaign}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Statewide Ceiling</span>
                  <span className="font-bold text-green-500">{congressVoteFloorCeiling.statewideCeiling}</span>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <p className="font-bold text-slate-600">By Region:</p>
                <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
                  <span className="font-medium text-orange-600">Malwa:</span> Floor 2027: {congressVoteFloorCeiling.byRegion.malwa.floor2027} | Ceiling: {congressVoteFloorCeiling.byRegion.malwa.ceiling}
                </div>
                <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
                  <span className="font-medium text-green-600">Doaba:</span> Floor 2027: {congressVoteFloorCeiling.byRegion.doaba.floor2027} | Ceiling: {congressVoteFloorCeiling.byRegion.doaba.ceiling}
                </div>
                <div className="rounded bg-slate-50 p-2 dark:bg-slate-800">
                  <span className="font-medium text-blue-600">Majha:</span> Floor 2027: {congressVoteFloorCeiling.byRegion.majha.floor2027} | Ceiling: {congressVoteFloorCeiling.byRegion.majha.ceiling}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Flip Margin Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>AAP Seat Flip Margin Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 mb-4">Swing required to flip AAP seats to Congress</p>
              <div className="space-y-2">
                {flipMarginAnalysis.map((flip) => (
                  <div key={flip.currentAAPMargin} className="flex items-center justify-between rounded border border-slate-100 p-2 dark:border-slate-700">
                    <span className="text-sm text-slate-600 dark:text-slate-400">AAP margin: {flip.currentAAPMargin}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="warning">Swing: {flip.swingNeeded}</Badge>
                      <span className="text-xs text-slate-500">({flip.seatsInCategory} seats)</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* NOTA as Protest Signal */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card className="border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-red-700 dark:text-red-400">NOTA as Protest Signal</p>
                <p className="text-sm text-red-600 dark:text-red-300">Voter disillusionment barometer</p>
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
                <strong>2027 Risk:</strong> {notAProtestSignal.swingIndicator} Strategic Note: {notAProtestSignal.strategicNote}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
