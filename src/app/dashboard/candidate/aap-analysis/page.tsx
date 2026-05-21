"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";

interface VulnerableMLA {
  name: string;
  constituency: string;
  vulnerability: string;
  factor: string;
}

interface Turncoat {
  name: string;
  from: string;
  to: string;
  seat: string;
  status: string;
  margin: string;
}

const vulnerableMLAs: VulnerableMLA[] = [
  { name: "Gurmeet Singh Meet Hayer", constituency: "Barnala", vulnerability: "Critical", factor: "No thank-you visit after election" },
  { name: "Kuldeep Singh Dhaliwal", constituency: "Amritsar Rural", vulnerability: "High", factor: "Perceived neglect of Amritsar" },
  { name: "Labh Singh Ugoke", constituency: "Ugoke", vulnerability: "Critical", factor: "Constituent complaints not addressed" },
  { name: "Multiple AAP MLAs", constituency: "Amritsar region", vulnerability: "High", factor: "Women groups report legislators missing" },
];

const turncoats: Turncoat[] = [
  { name: "Ravneet Singh Bittu", from: "Congress", to: "BJP", seat: "Ludhiana MP", status: "Lost 2024 LS", margin: "Lost to Congress by 33,926" },
  { name: "Preneet Kaur", from: "Congress", to: "BJP", seat: "Patiala MP", status: "Lost 2024 LS", margin: "Lost despite incumbency" },
  { name: "Raj Kumar Chabbewal", from: "Congress", to: "AAP", seat: "Hoshiarpur (SC)", status: "Turned 2024", margin: "2-time Congress MLA" },
  { name: "Sushil Kumar Rinku", from: "AAP", to: "BJP", seat: "Jalandhar MP", status: "Lost by 175,993", margin: "Massive margin to Channi" },
  { name: "Mohinder Singh Kaypee", from: "Congress", to: "SAD", seat: "Jalandhar", status: "Finished 4th", margin: "67,911 votes" },
  { name: "Raghav Chadha", from: "AAP", to: "BJP", seat: "RS MP", status: "Apr 2026 defection", margin: "7 AAP RS MPs merged" },
];

export default function CandidateAAPAnalysisPage() {
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
            AAP Analysis - Turncoats, incumbent vulnerability & opposition tracking
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </div>

      {/* A-04-20: Incumbent Vulnerability */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Incumbent Vulnerability (A-04-20)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Anti-incumbency widespread but opposition fragmentation prevents unified alternative
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["MLA", "Constituency", "Vulnerability", "Key Factor"]}
            rows={vulnerableMLAs.map((v) => [
              v.name,
              v.constituency,
              v.vulnerability,
              v.factor,
            ])}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs font-semibold text-red-600">Critical Vulnerability (70+)</p>
            <p className="text-sm text-red-700 dark:text-red-300">Inaccessible legislators, document constituent complaints not addressed</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <p className="text-xs font-semibold text-orange-600">High Vulnerability (50-69)</p>
            <p className="text-sm text-orange-700 dark:text-orange-300">Performance failures, unmet promises, governance delivery gaps</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <p className="text-xs font-semibold text-yellow-600">Moderate Vulnerability (30-49)</p>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">Welfare dependency seats, SC vote bank protection through doles</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Strategic Challenge:</strong> AAP needs only 35-40% to win individual seats in three-way splits. Congress, BJP, SAD each threaten different vote banks but cannot unite.
          </p>
        </div>
      </div>

      {/* A-04-04: Turncoat Candidates */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Turncoat Candidates (A-04-04)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          2024 Lok Sabha: 38% of major party candidates were turncoats. 62% of BJP turncoats lost.
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Name", "From", "To", "Seat", "2024 Result"]}
            rows={turncoats.map((t) => [
              t.name,
              t.from,
              t.to,
              t.seat,
              t.status,
            ])}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <p className="text-xs font-semibold text-red-600">Voter Rejection Evidence</p>
            <p className="text-sm text-red-700 dark:text-red-300">62% of BJP turncoats lost 2024 LS polls. All 8 BJP turncoats in Punjab lost. Sushil Kumar Rinku lost by 175,993 votes to Channi.</p>
          </div>
          <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
            <p className="text-xs font-semibold text-amber-600">April 2026 Defections</p>
            <p className="text-sm text-amber-700 dark:text-amber-300">7 AAP Rajya Sabha MPs (6 Punjab-based) merged with BJP including Raghav Chadha, Sandeep Pathak. AAP reduced to 1 RS seat in Punjab.</p>
          </div>
        </div>
      </div>

      {/* Turncoat Impact Analysis */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Turncoat Impact Analysis
        </h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-3xl font-bold text-red-600">62%</p>
            <p className="text-sm text-slate-500 mt-1">BJP turncoats lost 2024 LS</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-3xl font-bold text-orange-600">8</p>
            <p className="text-sm text-slate-500 mt-1">BJP turncoats in Punjab lost</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-3xl font-bold text-purple-600">175,993</p>
            <p className="text-sm text-slate-500 mt-1">Rinku lost to Channi</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Key Insight:</strong> Voter rejection of turncoats is strong. Congress should target turncoat-heavy seats with narrative-focused campaigns emphasizing party loyalty and track record.
          </p>
        </div>
      </div>

      {/* AAP Organizational Weakness */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">
          AAP Organizational Weakness (2024 Evidence)
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-slate-800">
              <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Barnala By-election Loss</p>
                <p className="text-xs text-slate-500">Congress won despite AAP incumbency - constituent neglect penalty</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-slate-800">
              <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Tarn Taran Collapse</p>
                <p className="text-xs text-slate-500">Congress dropped to 4th place - organizational failure signal</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-slate-800">
              <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">RS MP Defection</p>
                <p className="text-xs text-slate-500">7 AAP RS MPs merged to BJP - organizational instability exposed</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-slate-800">
              <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">Legislator Inaccessibility</p>
                <p className="text-xs text-slate-500">Women groups report AAP MLAs missing - delivery failure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
