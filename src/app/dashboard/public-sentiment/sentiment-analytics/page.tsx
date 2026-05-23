"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { BarChart3, TrendingUp, Users, Target, AlertTriangle } from "lucide-react";

export default function SentimentAnalyticsPage() {
  const seatProjections = [
    { party: "Congress", low: 45, high: 58, avg: 52, source: "Facebook video (Election Tak)" },
    { party: "AAP", low: 28, high: 37, avg: 33, source: "Various Facebook videos" },
    { party: "SAD", low: 14, high: 17, avg: 16, source: "Social media surveys" },
    { party: "BJP", low: 9, high: 12, avg: 11, source: "X/InsightRadarX" },
  ];

  const mp10ScenarioPlanning = [
    {
      scenario: "Base Case (45-50% probability)",
      congressSeats: "55-65",
      aapSeats: "35-45",
      sadBjpSeats: "15-25",
      others: "5-10",
      conditions: "Hung Assembly, Congress largest single party, requires coalition support"
    },
    {
      scenario: "Best Case for Congress (20-25%)",
      congressSeats: "70-85",
      aapSeats: "25-35",
      sadBjpSeats: "10-15",
      others: "5-10",
      conditions: "CM face announced early, opposition fragmentation (BJP solo + Amritpal splits Panthic)"
    },
    {
      scenario: "Worst Case for Congress (25-30%)",
      congressSeats: "18-30",
      aapSeats: "60-75",
      sadBjpSeats: "8-12",
      others: "5-10",
      conditions: "AAP welfare reinforcement, Congress leadership vacuum, SAD-BJP alliance"
    },
  ];

  const swingVoterAnalysis = {
    volatilityIndex: "HIGH (among highest in India)",
    seatsWithinSwingMargin: "79% (92 of 117 seats)",
    swingTriggers: ["Drug crisis", "Governance failure", "Farmer distress", "Caste consolidation"],
    lateSwingFactor: "40-50% of total swing occurs in final 2 weeks",
    protestVoteNota: "1.2% (above national avg 0.8%)",
    voteSwing2017to2022: [
      { party: "AAP", swing: "+27.9%", from: "14.4%", to: "42.3%" },
      { party: "Congress", swing: "-15.6%", from: "38.5%", to: "22.9%" },
      { party: "SAD+BJP", swing: "-7.6%", from: "25.7%", to: "18.1%" },
    ]
  };

  const formalSeatProjection = {
    observers: 45,
    observerDeployment: "~3 per district across 23 districts",
    surveys: 3,
    surveyOversight: "AICC (Bhupesh Baghel) + Rahul Gandhi team",
    methodology: "MRP (Multilevel Regression and Post-Stratifcation)",
    confidenceInterval: "±15-25 seats at state level",
  };

  const contestThresholds = [
    { type: "Four-cornered contest", threshold: "~20-22%", parties: "AAP vs Congress vs SAD vs BJP", implication: "Vote splitting lowers winning mark" },
    { type: "Three-cornered (with combine)", threshold: "~26-28%", parties: "AAP vs Congress vs BJP-SAD", implication: "Higher winning threshold" },
    { type: "Hung Assembly probability", probability: "HIGH", note: "AAP single largest but short of majority" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
            <BarChart3 className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Sentiment Analytics
            </h1>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Seat projections, scenario planning, and swing voter analysis
            </p>
          </div>
        </div>
      </motion.div>

      {/* Seat Projections - Informal Surveys */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Seat Projections (May 2026) - Informal Surveys</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Non-scientific social media surveys - directional indicators only. Source: Facebook videos, X posts</p>
            <div className="mt-4 space-y-4">
              {seatProjections.map((item) => (
                <div key={item.party} className="flex items-center gap-4">
                  <span className="w-24 font-medium text-slate-700 dark:text-slate-300">{item.party}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-purple-600">{item.low}-{item.high}</span>
                      <span className="text-slate-500">seats</span>
                      <span className="ml-auto text-sm text-green-600">avg: {item.avg}</span>
                    </div>
                    <ProgressBar label="" value={(item.low + item.high) / 2} color="purple" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                <strong>Note:</strong> Hung Assembly is high probability outcome per Punjab Today (Jan 2026). Anti-incumbency is real but unconverted - no unified alternative has crystallized.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Formal Seat Projection Model */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Formal Predictive Analytics (MP10-001 & MP10-009)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">Congress internal seat projection model - 45 observers, 3 surveys, MRP methodology</p>

            {/* Confidence Interval Display */}
            <div className="mt-4 grid gap-4 md:grid-cols-4">
              <MetricCard
                title="Hidden Observers"
                value={formalSeatProjection.observers}
                subtitle={formalSeatProjection.observerDeployment}
                color="blue"
              />
              <MetricCard
                title="AICC Surveys"
                value={formalSeatProjection.surveys}
                subtitle="Bhupesh Baghel + Rahul Gandhi teams"
                color="cyan"
              />
              <MetricCard
                title="Confidence Interval"
                value={formalSeatProjection.confidenceInterval}
                subtitle="State-level projection"
                color="purple"
              />
              <MetricCard
                title="Methodology"
                value="MRP"
                subtitle="Multilevel Regression + Post-Stratifcation"
                color="purple"
              />
            </div>

            {/* MP10-009 Scenario Planning */}
            <h4 className="mt-6 font-semibold text-blue-900 dark:text-blue-100">Scenario Planning (MP10-009)</h4>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              {mp10ScenarioPlanning.map((scenario) => (
                <div key={scenario.scenario} className={`rounded-lg p-4 ${
                  scenario.scenario.includes("Base") ? 'bg-green-100 dark:bg-green-900/40 border border-green-300' :
                  scenario.scenario.includes("Best") ? 'bg-blue-100 dark:bg-blue-900/40 border border-blue-300' :
                  'bg-red-100 dark:bg-red-900/40 border border-red-300'
                }`}>
                  <p className={`text-sm font-semibold ${
                    scenario.scenario.includes("Base") ? 'text-green-800 dark:text-green-200' :
                    scenario.scenario.includes("Best") ? 'text-blue-800 dark:text-blue-200' :
                    'text-red-800 dark:text-red-200'
                  }`}>{scenario.scenario}</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-xs text-slate-600 dark:text-slate-400">Congress:</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{scenario.congressSeats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-slate-600 dark:text-slate-400">AAP:</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{scenario.aapSeats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-slate-600 dark:text-slate-400">SAD+BJP:</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{scenario.sadBjpSeats}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{scenario.conditions}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Swing Voter Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-500" />
              Swing Voter Analysis (MP10-004)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Volatility & Margins</p>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">Seats within swing margin:</span>
                    <span className="text-sm font-bold text-red-600">79% (92/117)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">Late swing factor:</span>
                    <span className="text-sm font-bold text-orange-600">40-50% in final 2 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">NOTA 2022 (actual):</span>
                    <span className="text-sm font-bold text-red-600">0.71% (110,308 votes)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">NOTA increase vs 2017:</span>
                    <span className="text-sm font-bold text-red-600">10x (0.07% - 0.71%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-500">Jalandhar Central:</span>
                    <span className="text-sm font-bold text-red-600">NOTA 953 &gt; margin 247</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">2017-2022 Vote Swing</p>
                <div className="mt-2 space-y-1">
                  {swingVoterAnalysis.voteSwing2017to2022.map((s) => (
                    <div key={s.party} className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">{s.party}:</span>
                      <span className={`text-sm font-bold ${s.swing.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {s.swing} ({s.from}-{s.to})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Assembly Composition */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Current Assembly Composition (May 2026)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">117 seats total - confidence motion passed with 94 AAP MLAs</p>
            <div className="mt-4">
              <DataTable
                headers={["Party", "Current Seats", "2022 Result", "Change"]}
                rows={[
                  ["AAP", "94", "92 seats (42.01%)", "Hold +2"],
                  ["Congress", "16", "18 seats (22.98%)", "Lost 2"],
                  ["SAD", "3", "3 seats (18.38%)", "Hold (post-split)"],
                  ["BJP", "2", "2 seats (8.0%)", "Hold (going solo 2027)"],
                  ["BSP", "1", "0 seats", "Gain 1"],
                  ["Independent", "1", "2 seats", "Lost 1"],
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Four-Cornered Contest Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>2027 Contest Scenarios</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">Winning threshold varies by contest type</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {contestThresholds.map((item, i) => (
                <div key={i} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{item.type}</p>
                  <p className="text-2xl font-bold text-purple-600 mt-2">{item.threshold || item.probability}</p>
                  <p className="text-sm text-slate-500 mt-1">{item.parties || item.note}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.implication}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* SC Voting Patterns */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>SC Voter Dynamics (32% of Punjab Population)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">AAP won 29/34 SC-reserved seats in 2022</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {[
                { subCaste: "Total SC Population", value: "~32%", note: "Highest proportion in India" },
                { subCaste: "AAP SC-reserved seats (2022)", value: "29/34", note: "85% of SC seats" },
                { subCaste: "Mazhabi Sikh (30% of SC)", value: "SAD-AAP shift", note: "Rural Malwa/Majha" },
                { subCaste: "Ravidasia (23-26% of SC)", value: "Congress base", note: "Doaba heartland" },
                { subCaste: "Ad-Dharm (11-15% of SC)", value: "Congress/BSP", note: "Most educated SC" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                  <p className="text-sm text-purple-600 font-medium">{item.subCaste}</p>
                  <p className="text-xl font-bold text-purple-700 dark:text-purple-300">{item.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <p className="text-sm text-orange-700 dark:text-orange-400">
                <strong>Caste Census:</strong> AAP commissioned caste census April 2026 to assess SC aspirations amid conversion controversy (Christianity). Estimates range from &quot;few thousand&quot; (academic) to inflated political claims. Impact unknown.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AAP Vote Share Collapse */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-500" />
              AAP Vote Share Collapse (2022-2026)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">From wave victory to rapid erosion</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                { election: "2022 Assembly", value: "42.01%", seats: "92 seats", trend: "Wave victory" },
                { election: "2024 Lok Sabha", value: "~26%", seats: "7/13 seats", trend: "Sharp collapse" },
                { election: "2026 Surveys", value: "26-28%", seats: "Projected", trend: "Congress at 31-35%" },
              ].map((item, i) => (
                <div key={i} className={`rounded-lg p-4 ${i === 0 ? 'bg-green-50 dark:bg-green-900/20' : i === 1 ? 'bg-red-50 dark:bg-red-900/20' : 'bg-orange-50 dark:bg-orange-900/20'}`}>
                  <p className="text-sm text-slate-500">{item.election}</p>
                  <p className={`text-2xl font-bold ${i === 0 ? 'text-green-600' : 'text-red-600'}`}>{item.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.seats}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.trend}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
