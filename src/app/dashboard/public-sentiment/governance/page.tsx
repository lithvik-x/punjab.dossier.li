"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";

export default function GovernancePage() {
  const issueSatisfaction = [
    { issue: "Free Electricity", satisfaction: 72, level: "HIGH", color: "bg-green-500" },
    { issue: "Education", satisfaction: 42, level: "MODERATE", color: "bg-yellow-400" },
    { issue: "Infrastructure", satisfaction: 42, level: "MODERATE", color: "bg-yellow-400" },
    { issue: "Women's Welfare", satisfaction: 32, level: "LOW", color: "bg-orange-500" },
    { issue: "Healthcare", satisfaction: 32, level: "LOW", color: "bg-orange-500" },
    { issue: "Farmer Welfare", satisfaction: 27, level: "LOW", color: "bg-orange-600" },
    { issue: "Law & Order", satisfaction: 27, level: "LOW", color: "bg-orange-600" },
    { issue: "Corruption-Free", satisfaction: 22, level: "LOW", color: "bg-red-500" },
    { issue: "Employment", satisfaction: 22, level: "VERY_LOW", color: "bg-red-600" },
    { issue: "Drug Eradication", satisfaction: 17, level: "VERY_LOW", color: "bg-red-700" }
  ];

  const demographicSatisfaction = [
    { demo: "Youth (15-29)", value: 17, trend: "down", note: "Most eroded - AAP's strongest base" },
    { demo: "Women", value: 32, trend: "down", note: "Delayed Rs 1000 scheme" },
    { demo: "Jat Sikh (20%)", value: 32, trend: "down", note: "Farm distress, drug crisis" },
    { demo: "SC (31.9%)", value: 32, trend: "down", note: "Congress base returning" },
    { demo: "Urban", value: 42, trend: "stable", note: "Propped by electricity" }
  ];

  const antiIncumbencyIndicators = [
    { indicator: "Drug crisis failure", strength: "VERY_STRONG", signal: "Core promise broken" },
    { indicator: "Lok Sabha 2024 (3/13 seats)", strength: "STRONG", signal: "Anti-incumbency confirmed" },
    { indicator: "Youth unemployment 19.3%", strength: "STRONG", signal: "Demographic erosion" },
    { indicator: "Rural turnout 48.4% (lowest since 2008)", strength: "STRONG", signal: "Voter disengagement" },
    { indicator: "Rs 1000 delayed 4 years", strength: "STRONG", signal: "Women demographic erosion" },
    { indicator: "7 MPs defected (Apr 2026)", strength: "STRONG", signal: "Internal party collapse" },
    { indicator: "10+ ministers dropped/arrested", strength: "MODERATE", signal: "Corruption taint" },
    { indicator: "Social media spending scandal", strength: "MODERATE", signal: "Transparency concerns" }
  ];

  const cmMannApprovalTrend = [
    { period: "Mar 2022", approval: "80%", notes: "Massive personal mandate from Sangrur" },
    { period: "Late 2022", approval: "65%", notes: "Electricity success helped" },
    { period: "Mid 2023", approval: "50%", notes: "Drug crisis; remote-controlled by Kejriwal perception" },
    { period: "Early 2024", approval: "40%", notes: "Lok Sabha loss damaged credibility" },
    { period: "Late 2024", approval: "38%", notes: "Delhi AAP collapse; seen as Kejriwal's deputy" },
    { period: "Mid 2025", approval: "42%", notes: "Image-building efforts; tough administrator push" },
    { period: "Early 2026", approval: "45%", notes: "Guarantees fulfilled narrative" }
  ];

  const strategicImplications = [
    "AAP's floor: ~35-40% re-election willingness (40-50 seats, down from 92 in 2022) - Congress needs 59+ for majority",
    "#1 Attack Vector: Drug crisis - AAP promised to end in 4 weeks; 4 years later it's worse. Resonates across ALL demographics",
    "Women voters: Winnable - 4-year delay on Rs 1000 is a betrayal narrative. Congress should announce superior package",
    "Youth crisis: 19.3% unemployment at crisis level - need credible employment plan, not just government jobs",
    "Mann vs Government: Mann's personal approval (42-45%) exceeds government satisfaction (38-42%) - focus on failures, not person",
    "Proof of concept: 2024 Lok Sabha proves AAP is beatable - Congress recovered from 2022 low of 18 seats",
    "Historical pattern: No Punjab government won 3 consecutive terms - anti-incumbency building but not yet decisive"
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Governance & Satisfaction
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            AAP governance track record, broken promises, and satisfaction metrics
          </p>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="rounded-xl border-2 border-rose-500 bg-rose-50 p-6 dark:border-rose-700 dark:bg-rose-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">G</span>
          <div>
            <h3 className="text-lg font-semibold text-rose-700 dark:text-rose-400">Governance Satisfaction Barometer - AAP Government (2022-2026)</h3>
            <p className="text-sm text-rose-600 dark:text-rose-400">MP1-Foundational Scan | Research Date: 19 May 2026 | Classification: Strategic Intelligence</p>
          </div>
        </div>

        <div className="rounded-lg bg-rose-100 p-3 dark:bg-rose-900/40">
          <p className="text-sm text-rose-700 dark:text-rose-300">
            <strong>Executive Summary:</strong> Public satisfaction with the Bhagwant Mann-led AAP government has undergone a steep decline from the euphoric post-election high of March 2022. While the government retains a single credible achievement (free electricity), it faces deep dissatisfaction on the issues that matter most: drug eradication, employment, women's welfare, and corruption-free governance. The 2024 Lok Sabha results (AAP won only 3 of 13 seats) serve as the most authoritative satisfaction proxy.
          </p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard title="Overall Satisfaction" value="~40%" subtitle="Down from 85% in Q1 2022" color="bg-rose-500" trend="down" />
        <MetricCard title="Drug Eradication" value="15-20%" subtitle="AAP's broken #1 promise" color="bg-red-600" />
        <MetricCard title="Youth Unemployment" value="19.3%" subtitle="Rural: 22.5%" color="bg-red-600" />
        <MetricCard title="CM Mann Approval" value="42-45%" subtitle="Down from 80% in Mar 2022" color="bg-rose-500" trend="down" />
      </div>

      {/* Issue-wise Satisfaction */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Issue-wise Satisfaction
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Sorted by satisfaction level - drug eradication and employment are the biggest failures</p>
        <div className="mt-4 grid gap-3">
          {issueSatisfaction.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="w-36 text-sm text-slate-600 dark:text-slate-400">{item.issue}</span>
              <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full`}
                  style={{ width: `${item.satisfaction}%` }}
                />
              </div>
              <span className="w-16 text-sm font-medium text-slate-700 dark:text-slate-300">{item.satisfaction}%</span>
              <span className={`w-20 text-xs px-2 py-1 rounded text-center ${
                item.level === "VERY_LOW" ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" :
                item.level === "LOW" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400" :
                item.level === "MODERATE" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400" :
                "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400"
              }`}>{item.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Demographic & Lok Sabha */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Demographic Satisfaction
          </h3>
          <div className="mt-4 space-y-2">
            {demographicSatisfaction.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">{item.demo}</span>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{item.note}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.value}%</span>
                  <span className={`text-xs ${item.trend === "down" ? "text-red-500" : "text-yellow-500"}`}>↓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Lok Sabha 2024 Results (June)
          </h3>
          <div className="mt-4 space-y-2">
            {[
              { party: "Congress", seats: 7, total: 13, color: "bg-indigo-500" },
              { party: "AAP", seats: 3, total: 13, color: "bg-orange-500" },
              { party: "SAD", seats: 1, total: 13, color: "bg-yellow-500" },
              { party: "Independents", seats: 2, total: 13, color: "bg-gray-500" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-sm text-slate-600 dark:text-slate-400 flex-1">{item.party}</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {item.seats}/{item.total}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <strong>Key:</strong> AAP won only 3 seats as incumbent - Congress maintained 7 despite multi-cornered fight
            </p>
          </div>
        </div>
      </div>

      {/* Anti-Incumbency Indicators */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Key Anti-Incumbency Indicators
        </h3>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {antiIncumbencyIndicators.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-2 bg-slate-50 rounded dark:bg-slate-700">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                item.strength === "VERY_STRONG" ? "bg-red-700" :
                item.strength === "STRONG" ? "bg-red-500" :
                "bg-yellow-500"
              }`} />
              <span className="text-sm text-slate-600 dark:text-slate-400 flex-1">{item.indicator}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{item.signal}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CM Mann Approval Trend */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          CM Bhagwant Mann Approval Trend
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-400">Period</th>
                <th className="text-right py-2 px-3 text-slate-600 dark:text-slate-400">Approval</th>
                <th className="text-left py-2 px-3 text-slate-600 dark:text-slate-400">Notes</th>
              </tr>
            </thead>
            <tbody>
              {cmMannApprovalTrend.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-2 px-3 text-slate-700 dark:text-slate-300">{row.period}</td>
                  <td className="text-right py-2 px-3 font-medium text-slate-700 dark:text-slate-300">{row.approval}</td>
                  <td className="py-2 px-3 text-slate-500 dark:text-slate-400">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AAP Broken Promises */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">AAP Broken Promises - Key Electoral Liabilities</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Women Stipend */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Women Stipend: Rs 1,000/Month
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">4 Years Delayed - 1.3+ Crore Women Affected</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
              <p className="text-sm text-slate-500">Promise Date</p>
              <p className="text-xl font-bold text-red-600">March 2022</p>
              <p className="text-xs text-slate-500">Announced in AAP's 2022 manifesto</p>
            </div>
            <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-900/20">
              <p className="text-sm text-slate-500">Implementation</p>
              <p className="text-xl font-bold text-red-600">April 2026 (Pilot)</p>
              <p className="text-xs text-slate-500">Only pilot started, full rollout delayed 4+ years</p>
            </div>
          </div>
        </div>

        {/* Jobs Promise */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            AAP's Broken Promise: 25 Lakh Jobs
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">2016/2017 commitment - 5 years, unfulfilled</p>
          <div className="mt-4 rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              AAP's 2016/2017 commitment: 25 lakh jobs in 5 years. As of 2026, this promise remains unfulfilled - youth unemployment has actually increased since AAP took office.
            </p>
            <p className="text-xs text-slate-500 mt-2">Source: NDTV July 2016, The Hindu March 2026</p>
          </div>
        </div>
      </div>

      {/* AAP Governance Achievements */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Governance: Claims vs Reality
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">What AAP claims vs what voters experience</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Healthcare */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            AAP Healthcare: Mohalla Clinics
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Free primary healthcare via 881 Mohalla Clinics</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <MetricCard title="Mohalla Clinics" value="881" subtitle="Free primary healthcare centers" color="bg-green-500" />
            <MetricCard title="OPD Visits" value="5 Crore+" subtitle="Over 5 crore patient visits" color="bg-blue-500" />
            <MetricCard title="MMSY Coverage" value="Rs 10 Lakh" subtitle="Per family insurance coverage" color="bg-purple-500" />
          </div>
          <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <strong>Congress Counter:</strong> Mohalla Clinics provide basic care but lack specialists, diagnostics, and emergency services. Advanced cases still require expensive private hospitals.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            AAP Education: Schools of Eminence
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Education sector investments</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <MetricCard title="NAS Ranking" value="#1" subtitle="National Achievement Survey rank" color="bg-green-500" />
            <MetricCard title="Schools of Eminence" value="118" subtitle="Upgraded secondary schools" color="bg-blue-500" />
            <MetricCard title="Teachers Recruited" value="14,525" subtitle="New teacher appointments" color="bg-purple-500" />
          </div>
          <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <strong>Note:</strong> NAS #1 ranking based on government school performance. Private school results not included in this ranking.
            </p>
          </div>
        </div>
      </div>

      {/* Anti-Drug Campaign */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Anti-Drug Campaign
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">NDPS Act enforcement statistics - 63,053 cases, 85,418 arrests - but drugs remain #1 voter issue</p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard title="NDPS Cases" value="63,053" subtitle="Total cases registered" color="bg-red-500" />
          <MetricCard title="Arrested" value="85,418" subtitle="Individuals arrested" color="bg-orange-500" />
          <MetricCard title="Heroin Seized" value="5,119 kg" subtitle="Drug seizures under AAP" color="bg-purple-500" />
          <MetricCard title="Users Affected" value="6.6 Million" subtitle="Drug users in Punjab" color="bg-red-500" />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>Gap:</strong> Despite 63K+ cases and 85K arrests, drugs remain Punjab's #1 voter issue. 230K opioid-dependent, 106 overdose deaths (2024). Supply chains intact.
          </p>
        </div>
      </div>

      {/* Strategic Implications */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Strategic Implications for Congress
        </h3>
        <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
          {strategicImplications.map((item, i) => (
            <p key={i}>• {item}</p>
          ))}
        </div>
      </div>

      {/* Data Gaps */}
      <div className="rounded-lg bg-yellow-100 p-4 dark:bg-yellow-900/40">
        <p className="text-sm text-yellow-700 dark:text-yellow-300">
          <strong>Data Gaps (VERIFICATION_NEEDED):</strong> Independent satisfaction survey (2025-2026) NOT FOUND | Canal irrigation 22% to 70% AAP claim | 49% road accident reduction AAP claim | 65,264 jobs claim | Rs 10.59 crore social media spending allegation
        </p>
      </div>
    </div>
  );
}
