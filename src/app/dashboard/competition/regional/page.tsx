"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";

// Regional Seats
const regionalSeats = [
  { region: "Malwa", seats: 69, aapSeats: 53, sadSeats: 2, congressSeats: 14, bjpSeats: 0, keySeats: ["Bathinda", "Mansa", "Sangrur", "Moga", "Ferozpur"], deraInfluence: "HIGH", deras: "Dera Sacha Sauda dominant" },
  { region: "Majha", seats: 25, aapSeats: 19, sadSeats: 1, congressSeats: 4, bjpSeats: 1, keySeats: ["Amritsar", "Gurdaspur", "Hoshiarpur", "Kashmir", "Pathankot"], deraInfluence: "MODERATE", deras: "Radha Soami diffuse" },
  { region: "Doaba", seats: 23, aapSeats: 13, sadSeats: 0, congressSeats: 9, bjpSeats: 1, keySeats: ["Jalandhar", "Kapurthala", "Nawanshahr", "Hoshiarpur", "Phagwara"], deraInfluence: "MODERATE", deras: "Dera Ballan influence" },
];

// Regional Swing Potential
const regionalSwingPotential = [
  { region: "Malwa", seats: 69, swingRange: "6-8%", swingDirection: "AAP→Congress/SAD", flipSeats: "12-15 seats", congressFloor: 28, congressCeiling: 35 },
  { region: "Doaba", seats: 23, swingRange: "12-15%", swingDirection: "AAP→Congress", flipSeats: "6-8 seats", congressFloor: 10, congressCeiling: 14 },
  { region: "Majha", seats: 25, swingRange: "8-10%", swingDirection: "Mixed", flipSeats: "4-6 seats", congressFloor: 8, congressCeiling: 12 },
];

// Congress Floor/Ceiling by Region
const congressRegionalOutlook = [
  { region: "Malwa", floor: 28, ceiling: 35, note: "69 seats - AAP dominates but Congress gaining" },
  { region: "Doaba", floor: 10, ceiling: 14, note: "23 seats - Congress base, AAP challenge" },
  { region: "Majha", floor: 8, ceiling: 12, note: "25 seats - Mixed, border politics matter" },
  { region: "Total", floor: 46, ceiling: 61, note: "117 seats needed for majority: 59" },
];

// Dera Influence
const deraInfluence = [
  { name: "Dera Sacha Sauda", followers: "53L", seats: "15-20", region: "Malwa", leader: "Guru Sant Bhain Saheb" },
  { name: "Dera Ballan (SAD)", followers: "15L", seats: "19-23", region: "Doaba", leader: "Ballan" },
  { name: "Radha Soami Beas", followers: "40M+", seats: "All 117", region: "Diffuse", leader: "Beas" },
];

export default function RegionalAnalysisPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
          R
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Regional Analysis
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Malwa, Majha, Doaba regional dynamics, Dera influence
          </p>
        </div>
      </div>

      {/* Regional Seat Distribution */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Seat Distribution — Malwa vs Majha vs Doaba
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">117 total seats — Dera influence affects 40-50 seats</p>

        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Region", "Total Seats", "AAP Seats", "SAD Seats", "Congress Seats", "BJP Seats", "Dera Influence"]}
            rows={regionalSeats.map(r => [r.region, r.seats, r.aapSeats, r.sadSeats, r.congressSeats, r.bjpSeats, r.deraInfluence])}
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Malwa (69 seats)</h4>
            <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">• SAD traditional stronghold</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">• Dera Sacha Sauda dominant</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">• Congress making gains (drugs)</p>
            <p className="text-xs text-slate-500 mt-2">Key: Bathinda, Mansa, Sangrur</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Majha (25 seats)</h4>
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">• Border area</p>
            <p className="text-sm text-blue-600 dark:text-blue-300">• AAP strong urban base</p>
            <p className="text-sm text-blue-600 dark:text-blue-300">• Border security = BJP angle</p>
            <p className="text-xs text-slate-500 mt-2">Key: Amritsar, Gurdaspur, Hoshiarpur</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Doaba (23 seats)</h4>
            <p className="mt-2 text-sm text-green-600 dark:text-green-300">• Highest SC population %</p>
            <p className="text-sm text-green-600 dark:text-green-300">• AAP won only 13 in 2022</p>
            <p className="text-sm text-green-600 dark:text-green-300">• Dera Ballan influence</p>
            <p className="text-xs text-slate-500 mt-2">Key: Jalandhar, Kapurthala, Nawanshahr</p>
          </div>
        </div>
      </div>

      {/* Regional Swing Potential */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Swing Potential
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP2-010</p>

        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Region", "Seats", "Swing Range", "Swing Direction", "Flip Seats", "Congress Floor", "Congress Ceiling"]}
            rows={regionalSwingPotential.map(r => [r.region, r.seats, r.swingRange, r.swingDirection, r.flipSeats, r.congressFloor, r.congressCeiling])}
          />
        </div>

        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Congress Regional Outlook</h4>
          <DataTable
            headers={["Region", "Floor", "Ceiling", "Note"]}
            rows={congressRegionalOutlook.map(r => [r.region, r.floor, r.ceiling, r.note])}
          />
        </div>
      </div>

      {/* Dera Influence Deep Dive */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Dera/Vote Bank Influence — 40-50 Seats Affected
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: Dera follower quantification, seat influence analysis</p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {deraInfluence.map((dera) => (
            <div key={dera.name} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400">{dera.name}</h4>
              <p className="text-2xl font-bold text-purple-600 mt-2">{dera.followers}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Followers</p>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">Seats:</span>
                <span className="font-medium text-purple-600">{dera.seats}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Region:</span>
                <span className="font-medium text-purple-600">{dera.region}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-600 dark:text-red-300">
            <strong>Ram Rahim Parole Pattern:</strong> Released on parole 15+ times since 2017 — pattern aligns with election cycles. Dera Sacha Sauda (53L followers) influence strongest in Malwa region.
          </p>
        </div>
      </div>

      {/* Flip Margin Analysis */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          2022 Margin Analysis — Flippable Seats
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400">20-25 Seats</h4>
            <p className="mt-2 text-sm text-orange-600 dark:text-orange-300">Margin under 15,000 votes — flippable territory</p>
            <p className="mt-1 text-xs text-slate-500">Requires targeted candidate + local issue push</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">10-15 Seats</h4>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">Margin under 10,000 votes — highly vulnerable</p>
            <p className="mt-1 text-xs text-slate-500">Priority for Congress flip strategy</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Doaba Region Weakness</h4>
            <p className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">AAP won only 13 of 23 Doaba seats in 2022. Their weakest region.</p>
            <p className="mt-1 text-xs text-slate-500">23 seats total — Congress opportunity</p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Key Marginal Seats</h4>
          <DataTable
            headers={["Seat", "Margin", "Winner", "Vulnerability"]}
            rows={[
              ["Jalandhar Central", "247", "Congress (Channi)", "CRITICAL"],
              ["Ferozpur", "3,242", "Congress", "HIGH"],
              ["Ludhiana", "20,942", "Congress", "MEDIUM"],
              ["Dera Baba Nanak", "5,699", "AAP", "HIGH"],
            ]}
          />
        </div>
      </div>

      {/* Regional Contest Structures */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Contest Structures
        </h3>

        <div className="mt-4 space-y-4">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Malwa (69 seats)</h4>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <p className="text-sm text-yellow-600 dark:text-yellow-300">Typical Contest: 3-way (AAP-Congress-SAD)</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-300">Key Dynamics: Highest volatility; farmer distress dominant; Congress historical stronghold pre-2022</p>
            </div>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Majha (25 seats)</h4>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <p className="text-sm text-blue-600 dark:text-blue-300">Typical Contest: 4-way (AAP-Congress-SAD-BJP)</p>
              <p className="text-sm text-blue-600 dark:text-blue-300">Key Dynamics: Border belt issues; drug menace salient; religious sentiment; SAD retains pockets</p>
            </div>
          </div>

          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400">Doaba (23 seats)</h4>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <p className="text-sm text-green-600 dark:text-green-300">Typical Contest: 3-4 way with BSP factor</p>
              <p className="text-sm text-green-600 dark:text-green-300">Key Dynamics: Highest SC concentration; BSP splits Dalit vote; NRI influence; 8 SC-reserved seats</p>
            </div>
          </div>
        </div>
      </div>

      {/* Urban & Swing Voter Patterns */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban & Swing Voter Patterns
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Urban Non-Jat Pattern</h4>
            <div className="mt-3 space-y-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">• Anti-AAP urban swing visible in 2024</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• Pro-Congress shift among traders, professionals</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• AAP urban dominance eroding slowly</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• Youth still AAP-leaning but enthusiasm down</p>
            </div>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Caste Census Demand</h4>
            <div className="mt-3 space-y-2">
              <p className="text-sm text-slate-600 dark:text-slate-400">• Congress committed to caste census if elected</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• OBC权益 movement gaining momentum</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• AAP ambiguous on caste census</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">• BJP opposed (Constitutional validity questions)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
