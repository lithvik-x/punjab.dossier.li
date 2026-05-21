"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";

interface SCSeatTarget {
  category: string;
  total: number;
  congress2022: number;
  target2027: string;
}

interface BoothMetric {
  metric: string;
  value: string;
  note: string;
}

const boothInfrastructure: BoothMetric[] = [
  { metric: "Total Booths", value: "23,000+", note: "Across 117 constituencies" },
  { metric: "Booth Sevaks", value: "25,000", note: "1 per booth, Panna Pramukh model" },
  { metric: "Booth Workers", value: "1.25 lakh", note: "Including 20 assistants each" },
  { metric: "Voters/Booth", value: "800-900", note: "Each assistant manages 30-35 voters" },
];

const scSeatTargets: SCSeatTarget[] = [
  { category: "SC Reserved Seats", total: 34, congress2022: 8, target2027: "18-22" },
  { category: "Mazhabi Sikh SC", total: 17, congress2022: 5, target2027: "12-15" },
  { category: "Other SC", total: 17, congress2022: 3, target2027: "6-8" },
];

export default function CandidateBoothOpsPage() {
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
            Booth Operations - Infrastructure & SC seat strategy
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </div>

      {/* Booth-Level Infrastructure */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Booth-Level Infrastructure (Mission 2027)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Panna Pramukh model adopted from BJP - AICC central monitoring
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {boothInfrastructure.map((item) => (
            <div key={item.metric} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50 text-center">
              <p className="text-2xl font-bold text-teal-600">{item.value}</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.metric}</p>
              <p className="text-xs text-slate-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-teal-50 dark:bg-teal-900/20">
          <p className="text-sm text-teal-700 dark:text-teal-300">
            Each booth sevak must meet every household 5-6 times before elections. Nameplates installed at booth sevak homes for voter identification.
          </p>
        </div>
      </div>

      {/* SC Seat Strategy */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SC Seat Strategy (34 Reserved Seats)
        </h3>
        <div className="mt-4">
          <DataTable
            headers={["Category", "Total Seats", "Congress 2022", "Target 2027", "Swing Required"]}
            rows={scSeatTargets.map((item) => [
              item.category,
              item.total.toString(),
              item.congress2022.toString(),
              item.target2027,
              `+${parseInt(item.target2027) - item.congress2022} seats`,
            ])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            AAP won 29/34 SC seats in 2022 (92% conversion). Congress target: recover Dalit vote through Channi leadership and SC-focused candidates.
          </p>
        </div>
      </div>

      {/* SC Seat Breakdown Visual */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SC Seat Target Breakdown
        </h3>
        <div className="mt-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Congress 2022</span>
              <span className="text-sm font-bold text-red-600">8 seats (23.5%)</span>
            </div>
            <ProgressBar label="" value={23.5} color="bg-red-500" showPercentage={false} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Target 2027 (Midpoint)</span>
              <span className="text-sm font-bold text-green-600">20 seats (58.8%)</span>
            </div>
            <ProgressBar label="" value={58.8} color="bg-green-500" showPercentage={false} />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AAP 2022 (Baseline)</span>
              <span className="text-sm font-bold text-orange-600">29 seats (85.3%)</span>
            </div>
            <ProgressBar label="" value={85.3} color="bg-orange-500" showPercentage={false} />
          </div>
        </div>
      </div>

      {/* Mission 2027 Targets */}
      <div className="rounded-xl border-2 border-teal-200 bg-teal-50 p-6 dark:border-teal-800 dark:bg-teal-900/20">
        <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-400">
          Mission 2027 - Booth Level Targets
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Household Visits</p>
            <p className="text-2xl font-bold text-teal-600">5-6x</p>
            <p className="text-xs text-slate-500 mt-1">Per booth sevak before election</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Nameplate Installation</p>
            <p className="text-2xl font-bold text-blue-600">25,000</p>
            <p className="text-xs text-slate-500 mt-1">At booth sevak homes</p>
          </div>
          <div className="rounded-lg bg-white p-4 text-center dark:bg-slate-800">
            <p className="text-xs text-slate-500">Voter Contact/Booth</p>
            <p className="text-2xl font-bold text-purple-600">800-900</p>
            <p className="text-xs text-slate-500 mt-1">Each assistant manages 30-35</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300">
            <strong>Model:</strong> Panna Pramukh system adapted from BJP - one dedicated worker per booth with AICC central monitoring for accountability.
          </p>
        </div>
      </div>
    </div>
  );
}
