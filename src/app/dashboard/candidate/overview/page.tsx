"use client";

import { motion } from "framer-motion";
import { MetricCard, ProgressBar, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Users, Target, TrendingUp, AlertTriangle } from "lucide-react";

const electionHistory = [
  { party: "AAP", seats: 92, voteShare: "42.4%", trend: "Down from 62 in 2017" },
  { party: "Congress", seats: 18, voteShare: "23.0%", trend: "Stable (18 in 2017)" },
  { party: "SAD", seats: 3, voteShare: "6.4%", trend: "Collapsed from 15 in 2017" },
  { party: "BJP", seats: 2, voteShare: "5.4%", trend: "Stable" },
];

const regionalSeats = [
  { region: "Malwa", seats: 69, congress2022: 12, target2027: "30-35", color: "amber" as const },
  { region: "Majha", seats: 27, congress2022: 4, target2027: "10-12", color: "blue" as const },
  { region: "Doaba", seats: 23, congress2022: 2, target2027: "8-10", color: "emerald" as const },
];

const keyIssues = [
  { label: "Drug menace (6.6M users)", color: "rose" as const },
  { label: "Punjab debt: Rs 4 lakh crore+", color: "amber" as const },
  { label: "Water crisis (115/153 blocks critical)", color: "cyan" as const },
  { label: "Youth unemployment: 18.8%", color: "amber" as const },
  { label: "Farmer debt: Rs 2.03L/household", color: "purple" as const },
];

const colorDotMap: Record<string, string> = {
  rose: "bg-rose-500",
  amber: "bg-amber-500",
  cyan: "bg-cyan-500",
  emerald: "bg-emerald-500",
  purple: "bg-purple-500",
  blue: "bg-blue-500",
};

export default function CandidateOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-lg">
              4
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Overview - Key metrics, election performance & seat targets
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </motion.div>

      {/* Top Level Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Ticket Applicants"
          value="1,872"
          subtitle="For 117 seats (16:1 ratio)"
          color="cyan"
          icon={<Users className="h-6 w-6" />}
        />
        <MetricCard
          title="Probable Candidates"
          value="234"
          subtitle="Shortlisted (2:1 ratio)"
          color="blue"
          icon={<Target className="h-6 w-6" />}
        />
        <MetricCard
          title="Winnability Index"
          value="68.5"
          subtitle="Avg across top picks"
          change={3.2}
          trend="up"
          color="emerald"
          icon={<TrendingUp className="h-6 w-6" />}
        />
        <MetricCard
          title="Anti-Incumbency Risk"
          value="23"
          subtitle="High-risk incumbents"
          change={-5}
          trend="down"
          color="rose"
          icon={<AlertTriangle className="h-6 w-6" />}
        />
      </div>

      {/* 2022 Election Performance & 2027 Targets */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card hover>
          <CardHeader>
            <CardTitle>2022 Election Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Baseline for 2027 turnaround strategy
            </p>
            <div className="space-y-3">
              {electionHistory.map((item) => (
                <div key={item.party} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{item.party}</span>
                    <p className="text-xs text-slate-500">{item.trend}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{item.seats} seats</p>
                    <p className="text-sm text-slate-500">{item.voteShare} vote share</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20">
              <p className="text-sm font-medium text-rose-700 dark:text-rose-300">
                Congress lost 3/3 by-elections (Gidderbaha, Dera Baba Nanak, Chabbewal) in 2024
              </p>
              <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">
                Tarn Taran dropped to 4th place - organizational collapse signal
              </p>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle>2027 Seat Targets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Requires +12-15 percentage point swing from 23% vote share
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/20">
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Congress Target</p>
                  <p className="text-sm text-slate-500">55-65 seats</p>
                </div>
                <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">55-65</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">SC Seat Target</p>
                  <p className="text-sm text-slate-500">18-22 of 34 reserved</p>
                </div>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">18-22</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
                <div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Vote Share Target</p>
                  <p className="text-sm text-slate-500">From 23% to 31-35%</p>
                </div>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">+12pp</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Regional Breakdown */}
      <Card hover>
        <CardHeader>
          <CardTitle>Regional Seat Distribution & Targets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {regionalSeats.map((region) => (
              <div key={region.region} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`h-3 w-3 rounded-full bg-${region.color}-500`} />
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{region.region}</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Total Seats</span>
                    <span className="font-medium">{region.seats}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Congress 2022</span>
                    <span className="font-medium text-orange-600 dark:text-orange-400">{region.congress2022}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-500">Target 2027</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{region.target2027}</span>
                  </div>
                  <ProgressBar
                    label="Target attainment"
                    value={Math.round((parseInt(region.target2027) / region.seats) * 100)}
                    color={region.color}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Metrics Row */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card hover>
          <CardHeader>
            <CardTitle as="h4">By-Election Record (2022-2024)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Gidderbaha</span>
                <Badge variant="danger">AAP Won</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Dera Baba Nanak</span>
                <Badge variant="danger">AAP Won</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Chabbewal</span>
                <Badge variant="danger">AAP Won</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Barnala</span>
                <Badge variant="success">Congress Won</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Tarn Taran</span>
                <Badge variant="danger">Dropped to 4th</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle as="h4">Digital Campaign Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Digital Push</span>
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">70%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Training Phase</span>
                <span className="text-sm text-slate-500">April-July 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Campaign Intensify</span>
                <span className="text-sm text-slate-500">Post-mid-July</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500">Yatra Plan</span>
                <span className="text-sm text-slate-500">3-phase Malwa/Majha/Doaba</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardHeader>
            <CardTitle as="h4">Key Issues for 2027</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {keyIssues.map((issue) => (
                <div key={issue.label} className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${colorDotMap[issue.color]}`} />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{issue.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
