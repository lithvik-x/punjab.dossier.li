"use client";

import { Badge, MetricCard, ProgressBar } from "@/components/ui/MetricCard";

export default function SeatProjectionsPage() {
  const voteShareTrajectory = [
    { year: "2019 LS", congress: 40, aap: 1, sad: 26, bjp: 9 },
    { year: "2022 Assembly", congress: 23, aap: 42, sad: 18, bjp: 7 },
    { year: "2024 LS", congress: 26, aap: 26, sad: 12, bjp: 18.5 },
  ];

  const seatScenarios = [
    { scenario: "Pessimistic", seats: "30-40", probability: 15 },
    { scenario: "Realistic", seats: "40-55", probability: 55 },
    { scenario: "Optimistic", seats: "55-65", probability: 25 },
    { scenario: "Supermajority", seats: "65+", probability: 5 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
              🗳️
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Seat Projections
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Vote share trajectory, poll consensus, and projection scenarios
          </p>
        </div>
        <Badge variant="info">258 Days to Election</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Vote Share Trajectory
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Congress decline and AAP surge (verified)</p>
          <div className="mt-4 space-y-3">
            {voteShareTrajectory.map((v) => (
              <div key={v.year} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{v.year}</span>
                <div className="flex gap-2">
                  <span className="text-xs text-blue-600">INC: {v.congress}%</span>
                  <span className="text-xs text-orange-500">AAP: {v.aap}%</span>
                  <span className="text-xs text-green-600">SAD: {v.sad}%</span>
                  <span className="text-xs text-orange-400">BJP: {v.bjp}%</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-sm text-red-700 dark:text-red-400">
              <strong>BJP Warning:</strong> 6.6% to 18.56% in 2 years. From 0 Lok Sabha seats to nearly contesting all 117.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Seat Projection Scenarios
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Based on 2024 LS data and current trends</p>
          <div className="mt-4 space-y-3">
            {seatScenarios.map((s) => (
              <div key={s.scenario} className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{s.scenario}</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-700 dark:text-slate-300">{s.seats} seats</span>
                  <Badge variant={s.probability > 40 ? "success" : s.probability > 20 ? "info" : "warning"}>
                    {s.probability}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">Reality check: AAP won 92 seats in 2022 from 42% vote share. Congress needs 59 for majority.</p>
        </div>
      </div>

      {/* Poll Consensus Ranges */}
      <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-700 dark:bg-emerald-900/20">
        <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-2">
          Poll Consensus Ranges
        </h3>
        <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-4">
          Aggregated multi-source polling projections — May 2026
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-blue-600">Congress</span>
              <Badge variant="info">45-58</Badge>
            </div>
            <div className="mt-3">
              <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-2 rounded-full bg-blue-500" style={{ width: "49%" }} />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Mid-point: 51.5 seats</p>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-orange-500">AAP</span>
              <Badge variant="warning">28-37</Badge>
            </div>
            <div className="mt-3">
              <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-2 rounded-full bg-orange-500" style={{ width: "32%" }} />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Mid-point: 32.5 seats</p>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-green-600">SAD</span>
              <Badge variant="success">14-18</Badge>
            </div>
            <div className="mt-3">
              <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                <div className="h-2 rounded-full bg-green-500" style={{ width: "16%" }} />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Mid-point: 16 seats</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            <strong>Key Insight:</strong> Hung assembly is the base case scenario. Congress needs to exceed the 45-58 range significantly to approach majority (59 seats). AAP is projected to lose significant seats from 2022's 92.
          </p>
        </div>
      </div>

      {/* MP10-009: Formal Scenario Planning */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Scenario Planning Matrix
        </h3>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-green-700 dark:text-green-400">Base Case (45-50%)</h4>
              <Badge variant="success">55-65 seats</Badge>
            </div>
            <p className="mt-2 text-sm text-green-600 dark:text-green-300">Congress: 55-65 seats, AAP: 35-45 seats, SAD-BJP: 15-25 seats</p>
            <p className="mt-2 text-sm text-slate-500">Hung Assembly, Congress largest single party, requires coalition support</p>
          </div>

          <div className="rounded-lg border border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">Best Case (20-25%)</h4>
              <Badge variant="info">70-85 seats</Badge>
            </div>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">Congress: 70-85 seats, AAP: 25-35 seats, SAD-BJP: 10-15 seats</p>
            <p className="mt-2 text-sm text-slate-500">CM face announced early, opposition fragmentation (BJP solo + Amritpal splits Panthic)</p>
          </div>

          <div className="rounded-lg border border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-red-700 dark:text-red-400">Worst Case (25-30%)</h4>
              <Badge variant="danger">18-30 seats</Badge>
            </div>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">Congress: 18-30 seats, AAP: 60-75 seats, SAD-BJP: 8-12 seats</p>
            <p className="mt-2 text-sm text-slate-500">AAP welfare reinforcement, Congress leadership vacuum, SAD-BJP alliance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
