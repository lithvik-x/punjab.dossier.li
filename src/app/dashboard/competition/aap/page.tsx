"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";

// AAP Broken Promises
const aapBrokenPromises = [
  { promise: "Drug-Free Punjab", status: "FAILED", detail: "4 deadlines missed, 6.6M users affected", severity: "CRITICAL" },
  { promise: "Women Stipend Rs 1,000/mo", status: "DELAYED", detail: "Announced March 2026, 4 years late", severity: "HIGH" },
  { promise: "24 Lakh Jobs", status: "FAILED", detail: "48-70K delivered (0.2% of promise)", severity: "CRITICAL" },
  { promise: "Power Rebate 50%", status: "PARTIAL", detail: "Only 100 units free, not 300", severity: "MEDIUM" },
  { promise: "Drug-Free by 2022", status: "FAILED", detail: "8,344 FIRs, 14,734 arrests but persistent crisis", severity: "CRITICAL" },
  { promise: "Healthcare", status: "PARTIAL", detail: "~50% specialist posts vacant", severity: "HIGH" },
  { promise: "Education", status: "FAILED", detail: "984/1,927 principal posts vacant (51%)", severity: "HIGH" }
];

// Top Vulnerable Seats
const topVulnerableSeats = [
  { seat: "Jalandhar Central", mla: "Raman Arora", vulnerability: 9.5, issue: "Arrested twice by Vigilance Bureau (May & Sept 2025). Extortion charges. Son involved in corruption case.", flipProbability: 85 },
  { seat: "Pathanmajra", mla: "Harmeet Singh Dhillon", vulnerability: 9.5, issue: "Rape charges. Escaped police custody in Karnal after allegedly opening fire on police. Fled to Australia.", flipProbability: 85 },
  { seat: "Khadoor Sahib", mla: "Manjinder Singh Lalpura", vulnerability: 9.0, issue: "Molestation conviction Sept 2025 (4-year sentence). Dalit woman victim — community severely alienated.", flipProbability: 80 },
  { seat: "Ludhiana", mla: "Sanjeev Arora (Minister)", vulnerability: 9.0, issue: "ED money laundering arrest May 2026. Industries Minister. Ludhiana industrial collapse.", flipProbability: 80 },
  { seat: "Bholath", mla: "Sukhbinder Singh", vulnerability: 8.5, issue: "Gobindpura mine scam; 8,400+ farmers affected; 250+ acre farmland destroyed", flipProbability: 75 },
  { seat: "Nakodar", mla: "Gurpreet Singh", vulnerability: 8.0, issue: "VSVP medical college promise unfulfilled; local hospital infrastructure poor", flipProbability: 70 },
  { seat: "Moga", mla: "Harjesh Kumar", vulnerability: 8.0, issue: "Agrarian distress; not delivering to farming community promises", flipProbability: 70 },
  { seat: "Shahid Bhumi", mla: "Budh Ram", vulnerability: 7.5, issue: "Doaba region weakness; SC voter alienation", flipProbability: 65 },
  { seat: "Fatehgarh Sahib", mla: "Dinesh Chuadh", vulnerability: 7.5, issue: "Gobindpura mine impact area; farming community upset", flipProbability: 65 },
  { seat: "Muktsar", mla: "Inderbir Singh", vulnerability: 7.5, issue: "Border region; agrarian distress; lack of development", flipProbability: 65 },
];

// AAP SWOT
const swotAnalysis = {
  strengths: ["Delhi model perception", "Free electricity narrative", "Youth support", "Anti-corruption stance"],
  weaknesses: [
    "Drug-Free Punjab: 4 deadlines set, ALL missed — 8,344 FIRs, 14,734 arrests, 586 kg heroin seized but drugs remain pervasive",
    "Women's Stipend Delayed: Rs 1,000/month promise unfulfilled for ~4 years (announced March 2026 budget)",
    "Jobs Promise Falls Short: 24 lakh promised, 48,000-70,000 delivered; Youth unemployment 14.9% (4th highest in India)",
    "Healthcare Crisis: ~50% specialist doctor posts vacant in government hospitals",
    "Education Vacancies: 984 of 1,927 principal posts vacant (51%); 984 of 3,000+ headmaster positions unfilled",
    "Mohalla Clinics: 400+ delivered vs 500 promised; Paddy Procurement Crisis 2024 with MSP protests",
  ],
  opportunities: ["Disillusioned SAD voters", "Anti-incumbency against Congress", "Urban voter swing"],
  threats: ["Broken promises", "Jail corruption narrative", "BJP alliance questions"],
};

// Anti-Incumbency
const antiIncumbencyData = [
  { metric: "Anti-Incumbency Score", value: "7/10", impact: "HIGH voter dissatisfaction" },
  { metric: "AAP Vote Share Collapse", value: "42% → 26%", impact: "16 point drop in 2 years" },
  { metric: "Broken Promises Count", value: "7 major promises", impact: "Voter betrayal narrative" },
  { metric: "Affected Seats", value: "45-55 seats", impact: "Where AAP won on anti-incumbency in 2022" }
];

export default function AAPAnalysisPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
          A
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            AAP Analysis
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            AAP party status, SWOT, broken promises, vulnerabilities
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
            <p className="font-semibold text-red-700 dark:text-red-400">AAP Broken Promise Score: 92% Unfulfilled — MP3-004 Research</p>
            <p className="text-sm text-red-600 dark:text-red-300">Rs 4+ Lakh Crore Debt Trap | 50% Specialist Doctor Posts Vacant | 984 Principal Posts Empty | 1.3+ Crore Women Await Rs 1,000/Month</p>
          </div>
        </div>
      </div>

      {/* Core Metrics */}
      <div className="grid gap-6 lg:grid-cols-4">
        <MetricCard title="AAP Current Seats" value="92" subtitle="2022 Assembly results" color="bg-orange-500" />
        <MetricCard title="AAP 2027 Projection" value="58-68" subtitle="Realistic range" trend="down" color="bg-red-500" />
        <MetricCard title="Swing Seats" value="25-30" subtitle="High vulnerability" trend="down" color="bg-yellow-500" />
        <MetricCard title="Net Swing Required" value="-24 to -34" subtitle="AAP net seat loss" trend="down" color="bg-red-500" />
      </div>

      {/* AAP SWOT */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            AAP SWOT Analysis
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <h4 className="font-semibold text-green-700 dark:text-green-400">Strengths</h4>
              <ul className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
                {swotAnalysis.strengths.map((s) => <li key={s}>• {s}</li>)}
              </ul>
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-400">Weaknesses</h4>
              <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
                {swotAnalysis.weaknesses.map((w) => <li key={w}>• {w}</li>)}
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">Opportunities</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-600 dark:text-blue-300">
                {swotAnalysis.opportunities.map((o) => <li key={o}>• {o}</li>)}
              </ul>
            </div>
            <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Threats</h4>
              <ul className="mt-2 space-y-1 text-sm text-yellow-600 dark:text-yellow-300">
                {swotAnalysis.threats.map((t) => <li key={t}>• {t}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Anti-Incumbency */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Anti-Incumbency Against AAP
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {antiIncumbencyData.map((item) => (
              <div key={item.metric} className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                <p className="text-sm text-slate-500">{item.metric}</p>
                <p className="text-2xl font-bold text-red-600">{item.value}</p>
                <p className="text-xs text-slate-500 mt-1">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AAP Broken Promises */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Promise Tracker — Voter Enticement Analysis
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: Punjab Police, PLFS 2024, Health Dept 2025, CM speeches</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aapBrokenPromises.map((item) => (
            <div key={item.promise} className={`rounded-lg p-4 ${
              item.status === "BROKEN" || item.status === "FAILED" ? "bg-red-50 dark:bg-red-900/20" :
              item.status === "DELAYED" ? "bg-yellow-50 dark:bg-yellow-900/20" :
              "bg-orange-50 dark:bg-orange-900/20"
            }`}>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{item.promise}</h4>
                <Badge variant={item.status === "BROKEN" || item.status === "FAILED" ? "danger" : item.status === "DELAYED" ? "warning" : "default"}>
                  {item.status}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.detail}</p>
              <p className="text-xs text-slate-400 mt-1 italic">Severity: {item.severity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AAP Internal Factions & Defection Risk */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Internal Factions & Defection Risk
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP3-008 Internal Dynamics</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Rebellion Signal: 63 MLAs</h4>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">
              April 2026 signals — mass rebellion brewing. 63 AAP MLAs in touch with Raghav Chadha (former AAP Rajya Sabha MP who joined BJP). Source: Business Today, Indian Express.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">MLAs in contact</p>
                <p className="text-lg font-bold text-red-600">63</p>
              </div>
              <div className="rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Total MLAs</p>
                <p className="text-lg font-bold text-red-600">92</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Rajya Sabha Defection Wave</h4>
            <p className="mt-2 text-sm text-purple-600 dark:text-purple-300">
              April 2026: 7 of 10 Rajya Sabha MPs from other parties defected to BJP. Key AAP Punjab strategists jumped ship. Mass defection wave.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Defected to BJP</p>
                <p className="text-lg font-bold text-purple-600">7</p>
              </div>
              <div className="rounded bg-white p-2 dark:bg-slate-800">
                <p className="text-xs text-slate-500">Original total</p>
                <p className="text-lg font-bold text-purple-600">10</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Factional Risk Factors</h4>
          <div className="mt-2 grid gap-3 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">1.</span>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Leadership Vacuum: Kejriwal&apos;s Delhi imprisonment creates authority gap</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">2.</span>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Performance Failures: Women stipend delayed, drug promises broken</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">3.</span>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">Talent Drain: Key strategists defecting to BJP before elections</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-red-500 font-bold">4.</span>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">No Inner-Party Democracy: Centralized Delhi control alienates local leaders</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300">Defection Timeline Risk</h4>
          <DataTable
            headers={["Period", "Risk Level", "Trigger Event", "Probability"]}
            rows={[
              ["Pre-election 2026", "HIGH", "More MLAs cross to BJP before ticket distribution", "65-70%"],
              ["Post-ticket distribution", "MEDIUM", "Left-out candidates may defect", "40-50%"],
              ["Pre-poll 2027", "LOW-MEDIUM", "Last minute coalition talks", "25-35%"],
              ["Post-poll scenario", "DEPENDENT", "If AAP loses, mass exodus likely", "70-80%"],
            ]}
          />
        </div>
      </div>

      {/* AAP Seat Vulnerability */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Seat Vulnerability — Top 10 Critical Flips
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: AAP MLA performance audit, 9.5/10 max vulnerability scoring</p>

        <div className="mt-4 space-y-4">
          {topVulnerableSeats.map((seat, index) => (
            <div key={seat.seat} className={`rounded-lg border-2 p-4 ${
              seat.vulnerability >= 9.0 ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20" :
              seat.vulnerability >= 8.0 ? "border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20" :
              "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20"
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-slate-500">#{index + 1}</span>
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">{seat.seat}</h4>
                    <span className="text-sm text-slate-500">— {seat.mla}</span>
                    <Badge variant={seat.vulnerability >= 9.0 ? "danger" : seat.vulnerability >= 8.0 ? "warning" : "default"}>
                      {seat.vulnerability}/10
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{seat.issue}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-xs text-slate-500">Flip Probability</p>
                  <p className={`text-xl font-bold ${
                    seat.flipProbability >= 80 ? "text-red-600" :
                    seat.flipProbability >= 70 ? "text-orange-600" :
                    "text-yellow-600"
                  }`}>{seat.flipProbability}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AAP vs BJP Relationship */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP vs BJP Relationship Dynamics
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Source: MP3-008 Party Structure Analysis</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">BJP&apos;s Punjab Strategy</h4>
            <ul className="mt-2 space-y-1 text-sm text-purple-600 dark:text-purple-300">
              <li>• &quot;Haryana Model&quot; replication: 6.6% → 18.6% vote share</li>
              <li>• Amit Shah March 2026: &quot;BJP will fight solo in 2027&quot;</li>
              <li>• 600+ mandals established (organizational grid)</li>
              <li>• Anti-conversion law promised</li>
              <li>• OBC outreach: 31% population target</li>
              <li>• Dalit outreach: 32% SC population</li>
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">BJP&apos;s Delhi Governance Attack</h4>
            <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
              <li>• 70% school buses sold by AAP Delhi govt</li>
              <li>• Liquor policy lost 1000s Crores revenue</li>
              <li>• Water bill increased 3x in Delhi</li>
              <li>• &quot;Delhi model&quot; credibility gap nationally</li>
              <li>• 2024 Lok Sabha: AAP vote share collapsed 42% → 26%</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20 text-center">
            <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-400">3x</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">BJP vote share growth</p>
            <p className="text-xs text-slate-500">6.6% → 18.6%</p>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20 text-center">
            <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">7</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">Rajya Sabha defections to BJP</p>
            <p className="text-xs text-slate-500">April 2026 mass shift</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20 text-center">
            <p className="text-3xl font-bold text-red-700 dark:text-red-400">16%</p>
            <p className="text-sm text-red-600 dark:text-red-300">AAP vote share collapse</p>
            <p className="text-xs text-slate-500">42% → 26% (2022-2024)</p>
          </div>
        </div>
      </div>

      {/* Vote Bank Transfer */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Vote Bank Transfer Analysis
        </h3>
        <DataTable
          headers={["From Party", "To Party", "Swing Voters", "Key Reason", "Volatility"]}
          rows={[
            ["SAD", "Congress", "4.2%", "Drugs, broken promises", "Medium"],
            ["SAD", "AAP", "2.8%", "Anti-Congress sentiment", "High"],
            ["Congress", "AAP", "3.5%", "Youth, Delhi model", "High"],
            ["BJP", "Congress", "1.2%", "Local issues", "Low"],
            ["BSP", "Congress", "2.1%", "No viable option", "Medium"],
            ["Independent", "Congress", "1.8%", "Local leaders", "High"],
          ]}
        />
      </div>
    </div>
  );
}
