"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";

// Alliance Data
const allianceStatus = {
  bjpSadAlliance: "COLLAPSED",
  bjpStatement: "Amit Shah (March 14, 2026): BJP will contest all 117 seats independently",
  sadStatement: "Sukhbir Singh Badal: 'Every party has a right to take decisions'",
  allianceDuration: "1997-2020 (23 years)",
  breakupReason: "Farm laws controversy (September 2020)",
  currentStatus: "Complete break - Amit Shah Moga rally confirmed solo run",
};

// SAD Factions
const sadFactions = [
  { name: "SAD (Badal)", leader: "Sukhbir Singh Badal", status: "Main party, controls 3 seats" },
  { name: "SAD (Waris Punjab De)", leader: "Amritpal Singh (detained in Assam jail)", status: "Pro-Khalistani, MP from Khadoor Sahib" },
  { name: "SAD (Punar Surjit)", leader: "Giani Harpreet Singh (former Akal Takht Jathedar)", status: "Reform faction, open to BJP alliance" },
  { name: "SAD (Amritsar)", leader: "Tarsem Singh (father of Amritpal Singh)", status: "Another faction" },
];

// SAD 2022 Performance
const sadElectoralData = {
  seats2022: 3,
  voteShare2022: 18.38,
  worstEverResult: true,
  ls2024Seats: 1,
  ls2024SeatOnly: "Bathinda",
  byPollTarnTaran: {
    voteShare: "25.97%",
    note: "Severe swing against SAD"
  }
};

// SAD Finances
const oppositionFinances = {
  sad: {
    status: "FINANCIALLY CRIPPED",
    donorBase: "COLLAPSED since 2017 defeat",
    crisis: "Senior leaders not contributing; 6 months no funds collected"
  }
};

export default function SADStatusPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
          S
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            SAD Status
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Shiromani Akali Dal party status, factions, alliance breakdown
          </p>
        </div>
      </div>

      {/* Crisis Alert */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">BJP-SAD Alliance Collapsed — March 2026</p>
            <p className="text-sm text-red-600 dark:text-red-300">Amit Shah confirms BJP will fight solo. 23-year alliance (1997-2020) completely broken.</p>
          </div>
        </div>
      </div>

      {/* Core Metrics */}
      <div className="grid gap-6 lg:grid-cols-4">
        <MetricCard title="SAD Current Seats" value="3" subtitle="2022 results (post-split)" color="bg-green-500" />
        <MetricCard title="SAD Vote Share" value="18.38%" subtitle="2022 Assembly" color="bg-green-500" />
        <MetricCard title="Alliance Status" value="BROKEN" subtitle="23-year alliance ended" color="bg-red-500" />
        <MetricCard title="SAD Factions" value="4" subtitle="Competing groups" color="bg-yellow-500" />
      </div>

      {/* Alliance Breakdown */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          BJP-SAD Alliance Breakdown
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">BJP Statement</h4>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">
              Amit Shah (March 14, 2026): &quot;BJP will contest all 117 seats independently&quot;
            </p>
            <p className="mt-2 text-xs text-slate-500">Source: TOI March 2026</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">SAD Response</h4>
            <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">
              Sukhbir Singh Badal: &quot;Every party has a right to take decisions&quot;
            </p>
            <p className="mt-2 text-xs text-slate-500">Acknowledged the split</p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Alliance Duration</p>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300">1997-2020</p>
            <p className="text-xs text-slate-500">23 years</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Breakup Reason</p>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300">Farm Laws</p>
            <p className="text-xs text-slate-500">September 2020</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-slate-500">Current Status</p>
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300">Complete Break</p>
            <p className="text-xs text-slate-500">Solo run 2027</p>
          </div>
        </div>
      </div>

      {/* SAD Factions */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SAD Faction Landscape
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {sadFactions.map((faction) => (
            <div key={faction.name} className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">{faction.name}</h4>
                <Badge variant="warning">{faction.status.split(" ").slice(0, 2).join(" ")}</Badge>
              </div>
              <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">
                <span className="font-medium">Leader:</span> {faction.leader}
              </p>
              <p className="mt-1 text-sm text-yellow-600 dark:text-yellow-300">
                <span className="font-medium">Status:</span> {faction.status}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-orange-100 p-4 dark:bg-orange-900/40">
          <p className="text-sm text-orange-700 dark:text-orange-300">
            <strong>Key Insight:</strong> SAD is deeply fragmented with 4 competing factions. This fragments the anti-AAP vote and creates confusion among Sikh voters who traditionally supported SAD.
          </p>
        </div>
      </div>

      {/* Electoral Performance */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SAD Electoral Performance
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">2022 Assembly Election</h4>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-slate-500">Seats Won</p>
                <p className="text-2xl font-bold text-red-600">{sadElectoralData.seats2022}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Vote Share</p>
                <p className="text-2xl font-bold text-red-600">{sadElectoralData.voteShare2022}%</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">Worst ever result in SAD history</p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">2024 Lok Sabha</h4>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-slate-500">Seats Won</p>
                <p className="text-2xl font-bold text-yellow-600">{sadElectoralData.ls2024Seats}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">Winning Seat</p>
                <p className="text-2xl font-bold text-yellow-600">{sadElectoralData.ls2024SeatOnly}</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">Only Bathinda retained</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Tarn Taran By-election (Nov 2025)</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Vote Share: <span className="font-bold text-red-600">{sadElectoralData.byPollTarnTaran.voteShare}</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">{sadElectoralData.byPollTarnTaran.note}</p>
        </div>
      </div>

      {/* Financial Status */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SAD Financial Status
        </h3>

        <div className="mt-4 rounded-lg border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="font-semibold text-red-700 dark:text-red-400">FINANCIALLY CRIPPED</p>
          </div>
          <div className="mt-3 space-y-2 text-sm text-red-600 dark:text-red-300">
            <p>• Donor base: <span className="font-medium">COLLAPSED since 2017 defeat</span></p>
            <p>• Crisis: <span className="font-medium">Senior leaders not contributing</span></p>
            <p>• Status: <span className="font-medium">6 months no funds collected</span></p>
          </div>
        </div>
      </div>

      {/* SAD Strategy */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SAD 2027 Strategy
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Strengths</h4>
            <ul className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
              <li>• Jat Sikh vote bank</li>
              <li>• Agrarian community</li>
              <li>• Traditional loyalty</li>
              <li>• Bathinda influence</li>
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Weaknesses</h4>
            <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
              <li>• Drug traffic perception</li>
              <li>• Family dynasty debates</li>
              <li>• Less youth appeal</li>
              <li>• Urban alienation</li>
            </ul>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Opportunities</h4>
            <ul className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
              <li>• Congress anti-incumbency</li>
              <li>• BJP alliance leverage</li>
              <li>• Kisan card scheme</li>
            </ul>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Threats</h4>
            <ul className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
              <li>• Dera Sacha Sauda impact</li>
              <li>• Minority flight</li>
              <li>• Youth migration issue</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Counter-Narrative */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Counter-Narrative Strategy Against SAD
        </h3>
        <div className="mt-4 rounded-lg border border-slate-200 p-4 dark:border-slate-700">
          <p className="font-medium text-slate-700 dark:text-slate-300">&quot;Against SAD&quot;</p>
          <p className="mt-1 text-sm text-slate-500">&quot;15 years SAD rule: Drugs flooded Punjab, farmers left helpless, youth destroyed&quot;</p>
        </div>
      </div>
    </div>
  );
}
