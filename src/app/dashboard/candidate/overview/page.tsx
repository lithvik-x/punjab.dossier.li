"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";

const regionColors: Record<string, string> = {
  malwa: "bg-orange-500",
  majha: "bg-blue-500",
  doaba: "bg-green-500",
  powadh: "bg-purple-500",
};

const electionHistory = [
  { party: "AAP", seats: 92, voteShare: "42.4%", trend: "Down from 62 in 2017" },
  { party: "Congress", seats: 18, voteShare: "23.0%", trend: "Stable (18 in 2017)" },
  { party: "SAD", seats: 3, voteShare: "6.4%", trend: "Collapsed from 15 in 2017" },
  { party: "BJP", seats: 2, voteShare: "5.4%", trend: "Stable" },
];

const regionalSeats = [
  { region: "Malwa", seats: 69, congress2022: 12, target2027: "30-35", color: "bg-orange-500" },
  { region: "Majha", seats: 27, congress2022: 4, target2027: "10-12", color: "bg-blue-500" },
  { region: "Doaba", seats: 23, congress2022: 2, target2027: "8-10", color: "bg-green-500" },
];

export default function CandidateOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
              4
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Overview - Key metrics, election performance & seat targets
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </div>

      {/* Top Level Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Ticket Applicants"
          value="1,872"
          subtitle="For 117 seats (16:1 ratio)"
          color="bg-teal-500"
        />
        <MetricCard
          title="Probable Candidates"
          value="234"
          subtitle="Shortlisted (2:1 ratio)"
          color="bg-blue-500"
        />
        <MetricCard
          title="Winnability Index"
          value="68.5"
          subtitle="Avg across top picks"
          change={3.2}
          trend="up"
          color="bg-green-500"
        />
        <MetricCard
          title="Anti-Incumbency Risk"
          value="23"
          subtitle="High-risk incumbents"
          change={-5}
          trend="down"
          color="bg-red-500"
        />
      </div>

      {/* 2022 Election Performance & 2027 Targets */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            2022 Election Performance
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Baseline for 2027 turnaround strategy
          </p>
          <div className="mt-4 space-y-3">
            {electionHistory.map((item) => (
              <div key={item.party} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
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
          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-700 dark:text-red-300">
              Congress lost 3/3 by-elections (Gidderbaha, Dera Baba Nanak, Chabbewal) in 2024
            </p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">
              Tarn Taran dropped to 4th place - organizational collapse signal
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            2027 Seat Targets
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Requires +12-15 percentage point swing from 23% vote share
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20">
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-300">Congress Target</p>
                <p className="text-sm text-slate-500">55-65 seats</p>
              </div>
              <p className="text-3xl font-bold text-teal-600">55-65</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-300">SC Seat Target</p>
                <p className="text-sm text-slate-500">18-22 of 34 reserved</p>
              </div>
              <p className="text-3xl font-bold text-blue-600">18-22</p>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-300">Vote Share Target</p>
                <p className="text-sm text-slate-500">From 23% to 31-35%</p>
              </div>
              <p className="text-3xl font-bold text-purple-600">+12pp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Breakdown */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Seat Distribution & Targets
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {regionalSeats.map((region) => (
            <div key={region.region} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <div className={`h-3 w-3 rounded-full ${region.color}`} />
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{region.region}</h4>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Total Seats</span>
                  <span className="font-medium">{region.seats}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Congress 2022</span>
                  <span className="font-medium text-orange-600">{region.congress2022}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">Target 2027</span>
                  <span className="font-bold text-green-600">{region.target2027}</span>
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
      </div>

      {/* Key Metrics Row */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">By-Election Record (2022-2024)</h4>
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
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">Digital Campaign Plan</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Digital Push</span>
              <span className="font-semibold text-teal-600">70%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Training Phase</span>
              <span className="text-sm text-slate-500">April-July 2026</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Campaign Intensify</span>
              <span className="text-sm text-slate-500">Post-mid-July (after paddy sowing)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-500">Yatra Plan</span>
              <span className="text-sm text-slate-500">3-phase Malwa/Majha/Doaba</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-4">Key Issues for 2027</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Drug menace (6.6M users)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Punjab debt: Rs 4 lakh crore+</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Water crisis (115/153 blocks critical)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Youth unemployment: 18.8%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-sm text-slate-600 dark:text-slate-400">Farmer debt: Rs 2.03L/household</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
