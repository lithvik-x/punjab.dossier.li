"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { Activity, BarChart3, TrendingUp, Users, AlertTriangle, Target } from "lucide-react";

export default function SentimentOverviewPage() {
  const sentimentTrend = [0.31, 0.33, 0.28, 0.35, 0.38, 0.41, 0.42];

  const voteIntention = [
    { party: "Congress", value: 26, source: "2024 LS actual", estimate: 32 },
    { party: "AAP", value: 25, source: "2024 LS actual", estimate: 26 },
    { party: "BJP", value: 18.6, source: "2024 LS actual", estimate: 18 },
    { party: "SAD", value: 11.6, source: "2024 LS actual", estimate: 14 },
    { party: "Others", value: 18.8, source: "2024 LS actual", estimate: 10 },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
                <Target className="h-6 w-6" />
              </span>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Public Sentiment Overview
              </h1>
            </div>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Real-time sentiment tracking - Issue prioritization - Mood analysis
            </p>
          </div>
          <Badge variant="success">+0.42 Net Sentiment</Badge>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <MetricCard
          title="Net Sentiment"
          value="+0.42"
          subtitle="Congress favorability"
          change={10.5}
          trend="up"
          color="purple"
        />
        <MetricCard
          title="Data Points"
          value="12.4L"
          subtitle="This week"
          change={23}
          trend="up"
          color="blue"
        />
        <MetricCard
          title="Positive Share"
          value="58%"
          subtitle="Favorable mentions"
          change={8}
          trend="up"
          color="emerald"
        />
        <MetricCard
          title="Trending Issues"
          value="10"
          subtitle="Active topics"
          color="orange"
        />
      </motion.div>

      {/* Political Anatomy - Electoral Context for Sentiment */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card accentColor="emerald" className="bg-emerald-50/50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-emerald-500" />
              <span>Political Anatomy - Electoral Context</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mb-6">
              Understanding the electoral landscape that shapes public sentiment
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">117</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Total Assembly Seats</div>
                <div className="mt-1 text-xs text-slate-500">Majority: 59 seats</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2027</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Next Election</div>
                <div className="mt-1 text-xs text-slate-500">258 days remaining</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">79%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Seats Within Swing Margin</div>
                <div className="mt-1 text-xs text-slate-500">92 of 117 seats</div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">16pp</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">AAP Vote Share Collapse</div>
                <div className="mt-1 text-xs text-slate-500">42% - 26% (2022-2024)</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div>
                <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">2022 Assembly Results</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">AAP</span>
                    <span className="font-medium text-cyan-600 dark:text-cyan-400">92 seats (42%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Congress</span>
                    <span className="font-medium text-orange-600 dark:text-orange-400">18 seats (23%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">SAD</span>
                    <span className="font-medium text-green-600 dark:text-green-400">3 seats (18%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">BJP</span>
                    <span className="font-medium text-slate-600">2 seats (6%)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Regional Distribution</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Malwa</span>
                    <span className="font-medium text-orange-600 dark:text-orange-400">69 seats (59%)</span>
                  </div>
                  <ProgressBar label="" value={59} color="orange" showPercentage={false} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Majha</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">25 seats (21%)</span>
                  </div>
                  <ProgressBar label="" value={21} color="blue" showPercentage={false} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Doaba</span>
                    <span className="font-medium text-green-600 dark:text-green-400">23 seats (20%)</span>
                  </div>
                  <ProgressBar label="" value={20} color="green" showPercentage={false} />
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">Drug Crisis Impact</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Users</span><span className="font-medium">6.6 Million</span></div>
                  <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Youth Affected</span><span className="font-medium">75%+</span></div>
                  <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">Overdose 2024</span><span className="font-medium text-red-600">106 deaths</span></div>
                  <div className="flex justify-between"><span className="text-slate-600 dark:text-slate-400">NDPS Cases</span><span className="font-medium">51,000+</span></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Weekly Sentiment Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mt-4 flex items-end justify-between gap-2 h-24">
                {sentimentTrend.map((v, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full max-w-8 rounded-t bg-purple-500"
                      style={{ height: `${v * 200}px` }}
                    />
                    <span className="text-xs text-slate-500 mt-2">W{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-500">+0.42</p>
                  <p className="text-xs text-slate-500">Current</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-500">+10.5%</p>
                  <p className="text-xs text-slate-500">Weekly Change</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Party Vote Intention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 dark:text-slate-400">2024 LS actual (CSDS-Lokniti) / 2026 estimate (current May 2026 surveys show Congress at 31-35%)</p>
              <div className="mt-6 space-y-4">
                {voteIntention.map((item) => (
                  <div key={item.party}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-blue-600">{item.party}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.value}% <span className="text-slate-400">/</span> <span className="text-green-600">{item.estimate}% est.</span></span>
                        <span className="text-xs text-slate-500">({item.source})</span>
                      </div>
                    </div>
                    <ProgressBar label="" value={item.value} color={item.party === "BJP" ? "orange" : "blue"} showPercentage={false} />
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
                <p className="text-sm text-red-700 dark:text-red-400">
                  <strong>BJP Warning:</strong> Vote share grew from 6.6% (2022) - 18.56% (2024) - nearly 3x in one cycle
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Issue Priority Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Issue Priority Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                { id: 1, name: "Drug Crisis", priority: 1, sentiment: -0.85 },
                { id: 2, name: "Youth Unemployment", priority: 2, sentiment: -0.78 },
                { id: 3, name: "Farm Debt", priority: 3, sentiment: -0.72 },
                { id: 4, name: "Water Crisis", priority: 4, sentiment: -0.68 },
                { id: 5, name: "Corruption", priority: 5, sentiment: -0.65 },
                { id: 6, name: "Law & Order", priority: 6, sentiment: -0.55 },
              ].map((issue) => (
                <div key={issue.id} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    {issue.priority}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{issue.name}</span>
                      <Badge variant={issue.sentiment < -0.6 ? "danger" : issue.sentiment < -0.3 ? "warning" : "info"}>
                        {issue.sentiment < 0 ? "Negative" : "Neutral"}
                      </Badge>
                    </div>
                    <div className="mt-2 flex gap-4">
                      <div className="flex-1">
                        <ProgressBar
                          label="Severity"
                          value={Math.abs(issue.sentiment) * 100}
                          color={issue.sentiment < -0.6 ? "rose" : "amber"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Sentiment by Source */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Sentiment by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable
              headers={["Source", "Data Points", "Congress %", "AAP %", "SAD %", "Sentiment"]}
              rows={[
                ["WhatsApp Groups", "45,200", "52%", "28%", "10%", "+0.62"],
                ["Twitter/X", "28,400", "41%", "38%", "8%", "+0.12"],
                ["Facebook", "32,100", "44%", "35%", "11%", "+0.28"],
                ["Local News", "8,500", "48%", "29%", "14%", "+0.45"],
                ["Door-to-Door", "15,200", "51%", "26%", "12%", "+0.71"],
                ["Rally Feedback", "12,400", "58%", "22%", "9%", "+0.82"],
              ]}
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
