"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";

// Poll Projections
const pollProjections = [
  { scenario: "Hung Assembly", probability: "HIGHEST", congressSeats: "40-52", aapSeats: "35-45", sadBjpSeats: "20-30", conditions: "No single party majority" },
  { scenario: "Congress Largest", probability: "MODERATE", congressSeats: "52-58", aapSeats: "30-40", sadBjpSeats: "15-25", conditions: "Requires coalition support" },
  { scenario: "AAP Retention", probability: "LOW", congressSeats: "35-45", aapSeats: "50-60", sadBjpSeats: "15-20", conditions: "Welfare reinforcement needed" },
  { scenario: "Congress Majority", probability: "VERY LOW", congressSeats: "60-70", aapSeats: "25-35", sadBjpSeats: "10-15", conditions: "Requires wave election" }
];

// Persuadable Voter Types
const persuadableVoterTypes = [
  { type: "Disaffected AAP Voters", size: "8-12%", profile: "2022 AAP voters disillusioned by broken promises", keyIssue: "Drug crisis, jobs, governance", swingDirection: "Congress or NOTA", priority: "HIGH" },
  { type: "Swinging Jat Sikh", size: "6-8%", profile: "Traditional SAD voters exploring alternatives", keyIssue: "Drugs, farm distress, dera influence", swingDirection: "Congress or SAD-Punar Surjit", priority: "HIGH" },
  { type: "Urban Floating", size: "5-7%", profile: "Middle-class voters disappointed with AAP", keyIssue: "Infrastructure, jobs, corruption", swingDirection: "Congress or BJP", priority: "MEDIUM" },
  { type: "Young First-Timers", size: "3-5%", profile: "3.48 lakh new 2022 registrants, 57% FTV turnout", keyIssue: "Jobs, future prospects", swingDirection: "Congress or NOTA", priority: "MEDIUM" },
  { type: "NRI Influenced", size: "2-3%", profile: "7 lakh Punjabis abroad, only 393 registered voters", keyIssue: "Drugs, political stability", swingDirection: "Congress or diaspora apathy", priority: "LOW" },
];

// Digital Media Usage
const digitalMediaUsage = [
  { platform: "WhatsApp", usagePct: "26.2%", users: "~55 lakh", politicalRelevance: "Dominant for voter outreach, misinformation spread" },
  { platform: "Facebook", usagePct: "18.5%", users: "~39 lakh", politicalRelevance: "Event promotion, fundraising" },
  { platform: "YouTube", usagePct: "15.8%", users: "~33 lakh", politicalRelevance: "Video content, rallies" },
  { platform: "Instagram", usagePct: "12.4%", users: "~26 lakh", politicalRelevance: "Youth engagement, visual content" },
  { platform: "Twitter/X", usagePct: "8.2%", users: "~17 lakh", politicalRelevance: "News, narrative combat" },
];

// Ad Spend Comparison
const adSpendComparison = [
  { party: "BJP", digitalAdSpend: "₹50-80 crore", congressRatio: "25x", note: "Major outspend on digital ads, AI-generated content" },
  { party: "Congress", digitalAdSpend: "₹2-3 crore", congressRatio: "Baseline", note: "Limited digital infrastructure" },
  { party: "AAP", digitalAdSpend: "₹5-8 crore", congressRatio: "3-4x", note: "State-level digital presence" },
  { party: "SAD", digitalAdSpend: "₹0.5-1 crore", congressRatio: "Minimal", note: "Severely limited digital infrastructure" },
];

export default function SynthesisPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
          M1
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            M1: Competitor Intelligence Synthesis
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Mega-Pillar 3 synthesis, competitor analysis summary
          </p>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold">
            M1
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">MEGA-PILLAR 3: Competitor Intelligence — Synthesis</p>
            <p className="text-sm text-red-600 dark:text-red-300">Punjab Congress 2027 Election Intelligence | May 2026</p>
          </div>
        </div>

        <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-3">The Political Landscape: Fractured Competition, Unified Opportunity</h4>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-red-50 p-3 text-center dark:bg-red-900/30">
            <p className="text-xs text-slate-500">AAP Assembly 2022</p>
            <p className="text-2xl font-bold text-red-600">92/117</p>
            <p className="text-xs text-slate-400">Historic victory</p>
          </div>
          <div className="rounded-lg bg-red-50 p-3 text-center dark:bg-red-900/30">
            <p className="text-xs text-slate-500">AAP Lok Sabha 2024</p>
            <p className="text-2xl font-bold text-red-400">3/13</p>
            <p className="text-xs text-slate-400">Seats led in 32/117</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-3 text-center dark:bg-orange-900/30">
            <p className="text-xs text-slate-500">SAD Status</p>
            <p className="text-2xl font-bold text-orange-600">SPLIT</p>
            <p className="text-xs text-slate-400">April 2025</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-900/30">
            <p className="text-xs text-slate-500">BJP 2027</p>
            <p className="text-2xl font-bold text-blue-600">SOLO</p>
            <p className="text-xs text-slate-400">Amit Shah declaration</p>
          </div>
        </div>
      </div>

      {/* Poll Projections */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Poll Projections — 2027 Assembly
        </h3>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Scenario", "Probability", "Congress Seats", "AAP Seats", "SAD+BJP Seats", "Conditions"]}
            rows={pollProjections.map(p => [p.scenario, p.probability, p.congressSeats, p.aapSeats, p.sadBjpSeats, p.conditions])}
          />
        </div>
      </div>

      {/* AAP Vulnerabilities */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Critical Vulnerabilities
        </h3>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border border-red-200 p-3 dark:border-red-800">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-red-700">Drug Crisis Failure</p>
              <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-700">CRITICAL</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">6.6 million users, 697,000 child users, overdose deaths &quot;spiraling&quot;</p>
          </div>
          <div className="rounded-lg border border-orange-200 p-3 dark:border-orange-800">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-orange-700">Employment Lie</p>
              <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-700">CRITICAL</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">25 lakh promised vs ~65,000 actual (2.6% delivery rate)</p>
          </div>
          <div className="rounded-lg border border-yellow-200 p-3 dark:border-yellow-800">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-yellow-700">Corruption Irony</p>
              <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">HIGH</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Minister arrest May 2026, sand mining, liquor, taxi permits</p>
          </div>
        </div>
      </div>

      {/* April 2026 Defection */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Seismic Shift: April 2026 Defection
        </h3>
        <div className="mt-4 rounded-lg bg-red-100 p-4 dark:bg-red-900/40">
          <p className="text-sm font-semibold text-red-700 dark:text-red-300">7 Rajya Sabha MPs defected to BJP</p>
          <p className="text-xs text-slate-600 mt-1">Including key AAP strategists Raghav Chadha and Sandeep Pathak</p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Raghav Chadha Role</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">De-facto CM in Punjab, backroom strategist for 2022 victory</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Sandeep Pathak Role</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Architect of data-driven booth-level grassroots campaign</p>
          </div>
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-xs text-slate-500">Impact</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">SEVERE - Key 2022 strategists left for BJP</p>
          </div>
        </div>
      </div>

      {/* Persuadable Voter Types */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Persuadable Voter Types
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP2-010 composite voter segmentation</p>

        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {persuadableVoterTypes.map((voter) => (
            <div key={voter.type} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{voter.type}</p>
                <Badge variant={voter.priority === "HIGH" ? "danger" : voter.priority === "MEDIUM" ? "warning" : "default"}>
                  {voter.priority}
                </Badge>
              </div>
              <p className="text-xs text-slate-500 mt-2">Size: {voter.size}</p>
              <p className="text-xs text-slate-500 mt-1">Profile: {voter.profile}</p>
              <p className="text-xs text-slate-500 mt-1">Key Issue: {voter.keyIssue}</p>
              <p className="text-xs text-slate-500 mt-1">Swing: {voter.swingDirection}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Media Usage */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Digital Media Usage in Punjab
        </h3>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Platform", "Usage %", "Users", "Political Relevance"]}
            rows={digitalMediaUsage.map(d => [d.platform, d.usagePct, d.users, d.politicalRelevance])}
          />
        </div>
      </div>

      {/* Ad Spend Comparison */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Digital Ad Spend Comparison
        </h3>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Party", "Digital Ad Spend", "vs Congress", "Note"]}
            rows={adSpendComparison.map(a => [a.party, a.digitalAdSpend, a.congressRatio, a.note])}
          />
        </div>
      </div>

      {/* Vote Efficiency Analysis */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Vote Efficiency Analysis
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">AAP Vote Efficiency Ratio</p>
            <p className="text-2xl font-bold text-green-600">1.47x</p>
            <p className="text-xs text-slate-500">AAP won 62 seats with 42% vote (2022)</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Congress Vote Efficiency Ratio</p>
            <p className="text-2xl font-bold text-red-600">0.79x</p>
            <p className="text-xs text-slate-500">Congress won 18 seats with 22.9% vote (2022)</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">BJP Vote Efficiency Ratio</p>
            <p className="text-2xl font-bold text-orange-600">1.49x</p>
            <p className="text-xs text-slate-500">BJP won 29 seats with 19.5% vote (2022)</p>
          </div>
        </div>
      </div>

      {/* Key Intelligence Events */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Key Intelligence Events
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Tarn Taran By-election (Nov 2025)</p>
            <p className="text-xl font-bold text-red-600">Raja Warring - 4th, Lost Deposit</p>
            <p className="text-xs text-slate-500">Raja Warring&apos;s casteist remark cost Congress the seat; finished fourth, lost deposit. AAP won with Dr. Joginder Singh Mann (Mazhabi Sikh candidate).</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Dallewal 123-Day Hunger Strike</p>
            <p className="text-xl font-bold text-orange-600">Nov 2024 - Mar 2025</p>
            <p className="text-xs text-slate-500">Jagjit Singh Dallewal conducted hunger strike demanding legal MSP guarantee. Farmer protests ongoing since Feb 13, 2024 (300+ days at Shambhu, Khanauri borders).</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Waris Punjab De Margin</p>
            <p className="text-xl font-bold text-purple-600">197,120 votes</p>
            <p className="text-xs text-slate-500">Amritpal Singh&apos;s Waris Punjab De 2022 margin in Lok Sabha. Party competing with SAD for Panthic Sikh votes.</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Sunil Kanugolu Ticket Selection</p>
            <p className="text-xl font-bold text-blue-600">Survey-Based Methodology</p>
            <p className="text-xs text-slate-500">Congress uses survey-based ticket selection; may override local preferences. Creates ticketless voter risk (4-7% potential loss).</p>
          </div>
        </div>
      </div>

      {/* AAP CM Face Uncertainty */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <p className="text-sm font-bold text-red-700 dark:text-red-400">AAP CM Face Uncertainty</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Whether Bhagwant Mann leads or is replaced for 2027 is UNRESOLVED. This is the single most impactful unknown for Congress campaign planning. Internal deliberations opaque.</p>
      </div>

      {/* Congress Math Summary */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress 2027 Math Summary
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Congress Needs</h4>
            <ul className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
              <li>• Net +41 seats (18 → 59 majority)</li>
              <li>• Realistic target: 40-50 seats (net +22 to +32)</li>
              <li>• Regional swing: Malwa 6-8%, Doaba 12-15%, Majha 8-10%</li>
              <li>• Caste coalition: 70% non-Jat strategy</li>
              <li>• SC voters: Congress 42-48%, BSP 28-35% split</li>
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Vulnerability Drivers</h4>
            <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
              <li>• Broken promises: Women stipend delayed 4 years</li>
              <li>• Drug crisis: 4 deadlines missed, drugs still pervasive</li>
              <li>• Jobs failure: 48-70K delivered vs 24 lakh promised (0.2-0.3%)</li>
              <li>• Governance: 63 MLAs in touch with Raghav Chadha (April 2026)</li>
              <li>• Defections: 7 Rajya Sabha MPs to BJP in April 2026</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
