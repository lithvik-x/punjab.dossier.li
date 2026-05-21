"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";

interface RebelMLA {
  name: string;
  relation: string;
  constituency: string;
  reason: string;
  status: string;
}

const rebelMLAs: RebelMLA[] = [
  { name: "Manohar Singh", relation: "Brother of CM Channi", constituency: "Bassi Pathana", reason: "Denied ticket", status: "Contested as Independent" },
  { name: "Rana Inder Partap Singh", relation: "Son of Rana Gurjit Singh", constituency: "Sultanpur Lodhi", reason: "Denied ticket", status: "Won as Independent" },
  { name: "Harjot Kamal", relation: "Sitting MLA", constituency: "Moga", reason: "Denied ticket", status: "Joined BJP" },
  { name: "Rana Gurjit Singh", relation: "MLA, Kapurthala", constituency: "Kapurthala", reason: "Anti-Warring faction", status: "Camp leader" },
  { name: "Pargat Singh", relation: "MLA", constituency: "Jalandhar Cantonment", reason: "Anti-Bajwa", status: "Voiced displeasure" },
  { name: "Khushaldeep Dhillon", relation: "Ex-MLA, Vice-President", constituency: "Party position", reason: "Show-cause notice", status: "Issued notice" },
];

export default function CandidateRebelsPage() {
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
            Rebel MLAs - Ticket denial patterns & factional risks
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </div>

      {/* A-04-03: Congress Rebel MLAs */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress Rebel MLAs (A-04-03)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Ticket denial rebellions - 2022 pattern could repeat in 2027
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Rebel Name", "Relation", "Constituency", "Reason", "Status"]}
            rows={rebelMLAs.map((r) => [
              r.name,
              r.relation,
              r.constituency,
              r.reason,
              r.status,
            ])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-300">
            <strong>Risk:</strong> Major rebellion causing vote split has 40-50% probability. Multiple independents in key seats has 50-60% probability.
          </p>
        </div>
      </div>

      {/* Rebellion Risk Analysis */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Rebellion Risk Assessment
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="text-center p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-3xl font-bold text-red-600">40-50%</p>
            <p className="text-sm text-slate-500 mt-1">Major rebellion probability</p>
            <p className="text-xs text-slate-400 mt-1">Vote split scenario</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20">
            <p className="text-3xl font-bold text-orange-600">50-60%</p>
            <p className="text-sm text-slate-500 mt-1">Multiple independents</p>
            <p className="text-xs text-slate-400 mt-1">Key seat scenario</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20">
            <p className="text-3xl font-bold text-amber-600">6</p>
            <p className="text-sm text-slate-500 mt-1">Active rebel cases</p>
            <p className="text-xs text-slate-400 mt-1">Identified in A-04-03</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>2022 Lesson:</strong> Rana Inder Partap Singh won Sultanpur Lodhi as Independent after ticket denial. Manohar Singh (Channi brother) contested Bassi Pathana. Both cases cost Congress seats.
          </p>
        </div>
      </div>

      {/* High-Risk Rebels */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">
          High-Risk Rebel Profiles
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {/* Manohar Singh */}
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Manohar Singh</h4>
                <p className="text-sm text-slate-500">Brother of CM Channi</p>
              </div>
              <Badge variant="danger">High Risk</Badge>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Constituency:</span>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Bassi Pathana</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Issue:</span>
                <span className="text-xs font-medium text-red-600">Denied ticket</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Outcome:</span>
                <span className="text-xs font-medium text-red-600">Contested as Independent</span>
              </div>
            </div>
          </div>

          {/* Rana Inder Partap Singh */}
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Rana Inder Partap Singh</h4>
                <p className="text-sm text-slate-500">Son of Rana Gurjit Singh</p>
              </div>
              <Badge variant="danger">High Risk</Badge>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Constituency:</span>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Sultanpur Lodhi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Issue:</span>
                <span className="text-xs font-medium text-red-600">Denied ticket</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Outcome:</span>
                <span className="text-xs font-medium text-green-600">Won as Independent</span>
              </div>
            </div>
          </div>

          {/* Harjot Kamal */}
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Harjot Kamal</h4>
                <p className="text-sm text-slate-500">Sitting MLA</p>
              </div>
              <Badge variant="warning">Moderate Risk</Badge>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Constituency:</span>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Moga</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Issue:</span>
                <span className="text-xs font-medium text-red-600">Denied ticket</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Outcome:</span>
                <span className="text-xs font-medium text-red-600">Joined BJP</span>
              </div>
            </div>
          </div>

          {/* Rana Gurjit Singh */}
          <div className="p-4 rounded-lg bg-white dark:bg-slate-800">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">Rana Gurjit Singh</h4>
                <p className="text-sm text-slate-500">MLA, Kapurthala</p>
              </div>
              <Badge variant="warning">Moderate Risk</Badge>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Constituency:</span>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Kapurthala</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Issue:</span>
                <span className="text-xs font-medium text-orange-600">Anti-Warring faction</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-500">Status:</span>
                <span className="text-xs font-medium text-orange-600">Camp leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mitigation Strategy */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Rebellion Mitigation Strategy
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">1</div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Early Identification</p>
                <p className="text-xs text-slate-500">Survey workers for potential rebel sentiment before ticket announcement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">2</div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Pre-emptive Engagement</p>
                <p className="text-xs text-slate-500">Direct talks with potential rebels before final decisions</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">3</div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Accommodate Winnable Rebels</p>
                <p className="text-xs text-slate-500">If rebel winnability is high, adjust ticket allocation to retain vote share</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">4</div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Post-Denial Monitoring</p>
                <p className="text-xs text-slate-500">Track rebel movements and court joining within 2 weeks of denial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
