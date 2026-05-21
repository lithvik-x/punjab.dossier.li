"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";

export default function VoterDemographicsPage() {
  const womenVoterData = [
    { label: "Women Electorate", value: "1.01 Crore", note: "47% of total electorate" },
    { label: "2022 Women Turnout", value: "71.91%", note: "Strong participation" },
    { label: "AAP Women Loyalty", value: "70-76%", note: "HIGHEST party loyalty" },
    { label: "Scheme Outlay", value: "Rs 9,300 Crore", note: "Budget 2026-27" },
    { label: "Affected Women", value: "1.3+ Crore", note: "Rs 1000/month promise delayed 4 years" },
    { label: "Active Grievance Constituencies", value: "94 of 117", note: "Nearly all constituencies" },
  ];

  const youthVoterData = [
    { label: "Youth (18-35) Share", value: "~40%", note: "of total voters" },
    { label: "AAP Youth Loyalty", value: "55-62%", note: "LOWEST of all demographics" },
    { label: "Exhausted AAP Youth Voters", value: "18-25%", note: "2022 youth voters exhausted" },
    { label: "Youth Unemployment", value: "19.3%", note: "PLFS Oct-Dec 2025" },
    { label: "Rural Female Unemployment", value: "30.7%", note: "2x national average" },
    { label: "AAP Vote Floor (May 2026)", value: "28-32%", note: "Declining from 42%" },
  ];

  const scVotingData = [
    { subCaste: "Total SC Population", value: "~32%", note: "Highest proportion in India" },
    { subCaste: "AAP SC-reserved seats (2022)", value: "29/34", note: "85% of SC seats" },
    { subCaste: "Mazhabi Sikh (30% of SC)", value: "SAD-AAP shift", note: "Rural Malwa/Majha" },
    { subCaste: "Ravidasia (23-26% of SC)", value: "Congress base", note: "Doaba heartland" },
    { subCaste: "Ad-Dharm (11-15% of SC)", value: "Congress/BSP", note: "Most educated SC" },
  ];

  const migrationData = [
    { metric: "Punjab diaspora (Canada)", value: "12-15 lakh", note: "~13% of population" },
    { metric: "Student permit backlog", value: "3-4 years", note: "Post-2024 policy changes" },
    { metric: "Rejected visas", value: "40-50%", note: "15-25K annually" },
    { metric: "Deportation risk families", value: "~50,000", note: "US visa rejections" },
  ];

  const studentElectionsData = [
    { fact: "Student union elections banned", value: "Since 1984", note: "Over 4 decades" },
    { fact: "PU Campus NSUI presence", value: "Minimal", note: "Banned structure" },
    { fact: "Student leaders pathway", value: "Campus-to-politics", note: "Campus Aktiv, youth wings" },
  ];

  const youthCongressData = [
    { role: "Youth Congress President", name: "Mohit Mohindra", detail: "Announced 60-70% youth candidates for 2027" },
    { role: "NSUI President (Punjab)", name: "Kunwar Khanoura", detail: "Student leader at Panjab University" },
    { role: "Factional divide", name: "Warring vs Channi", detail: "Non-Jat vs Jat representation" },
  ];

  const voterTurnoutData = [
    { election: "2022 Assembly", turnout: "70.14%", note: "Highest in 30 years" },
    { election: "Rural turnout 2022", turnout: "48.4%", note: "Lowest since 2008" },
    { election: "First-time voters 2022", turnout: "~60%", note: "Only 6 out of 10 voted" },
  ];

  const aapYouthVoteData = [
    { demographic: "2022 Youth Vote (18-35)", value: "45-55%", note: "AAP's winning coalition" },
    { demographic: "2024 Erosion Signal", value: "Visible", note: "Lok Sabha results" },
    { demographic: "2026 Survey Floor", value: "28-32%", note: "AAP overall" },
    { demographic: "Youth unemployment", value: "19.3%", note: "Crisis-level" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-lg font-bold text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Voter Demographics
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Women, youth, SC voting patterns, and migration dynamics
          </p>
        </div>
      </div>

      {/* Critical Alert - Women Voter Crisis */}
      <div className="rounded-xl border-2 border-pink-200 bg-pink-50 p-4 dark:border-pink-800 dark:bg-pink-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-pink-700 dark:text-pink-400">Women Voter Crisis: Rs 1,000/Month - 4 Years Delayed</p>
            <p className="text-sm text-pink-600 dark:text-pink-300">Most Exploitable AAP Vulnerability - 1.3+ Crore Women Affected - 94 of 117 constituencies with active grievance</p>
          </div>
        </div>
      </div>

      {/* Women & Youth Voter Demographics */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Women Voter Landscape (MP2-003, MP2-018)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Women are AAP's most loyal demographic - but Rs 1,000/month promise remains unfulfilled</p>
          <div className="mt-4 space-y-3">
            {womenVoterData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">{item.label}</span>
                <span className="font-bold text-pink-600">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-pink-50 dark:bg-pink-900/20">
            <p className="text-sm text-pink-700 dark:text-pink-300">
              <strong>Congress Opportunity:</strong> Announce superior women welfare package with faster rollout to capture this loyal but betrayed demographic
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Youth Voter Demographics (MP2-016, MP2-022)
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Youth: AAP's MOST VULNERABLE demographic - 18-25% of 2022 youth voters exhausted</p>
          <div className="mt-4 space-y-3">
            {youthVoterData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">{item.label}</span>
                <span className={`font-bold ${item.value.includes("55") || item.value.includes("19.3") || item.value.includes("18-25") || item.value.includes("28-32") ? "text-red-600" : "text-blue-600"}`}>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
            <p className="text-sm text-red-700 dark:text-red-300">
              <strong>Congress Strategy:</strong> 19.3% unemployment is crisis-level. Credible employment plan + youth candidates (60-70% as announced) can flip this segment
            </p>
          </div>
        </div>
      </div>

      {/* SC Voting Patterns */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          SC Voter Dynamics (32% of Punjab Population)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">AAP won 29/34 SC-reserved seats in 2022 - A13 Research</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {scVotingData.map((item, i) => (
            <div key={i} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <p className="text-sm text-purple-600 font-medium">{item.subCaste}</p>
              <p className="text-xl font-bold text-purple-700 dark:text-purple-300">{item.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
          <p className="text-sm text-orange-700 dark:text-orange-400">
            <strong>Caste Census:</strong> AAP commissioned caste census April 2026 to assess SC aspirations amid conversion controversy (Christianity). Estimates range from "few thousand" (academic) to inflated political claims. Impact unknown.
          </p>
        </div>
      </div>

      {/* Migration Data */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Youth Migration Patterns (A24 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Canada dream reversing - visa restrictions, deportation risk, diplomatic tensions</p>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {migrationData.map((item, i) => (
            <div key={i} className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <p className="text-sm text-blue-600 font-medium">{item.metric}</p>
              <p className="text-xl font-bold text-blue-700 dark:text-blue-300">{item.value}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            <strong>Political Impact:</strong> Families with overseas ties represent significant constituency. Changing migration patterns could shift political expectations. Disillusioned families (failed migration investments) may increase anti-incumbent sentiment.
          </p>
        </div>
      </div>

      {/* Student Elections */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Student Politics: Banned Since 1984 (A24 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">No student union elections on any Punjab campus for over 4 decades</p>
        <div className="mt-4">
          <DataTable
            headers={["Fact", "Value", "Note"]}
            rows={studentElectionsData.map(item => [item.fact, item.value, item.note])}
          />
        </div>
        <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-purple-700 dark:text-purple-300">
            <strong>Campus-to-Politics Pipeline:</strong> Prem Singh Chandumajra (Akali), Brahm Mohindra (Congress), Partap Singh Bajwa (Congress), Kuljit Singh Nagra (Congress) - all started as student leaders.
          </p>
        </div>
      </div>

      {/* Congress Youth Organization */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Congress Youth Organization (A24 Research)
        </h3>
        <div className="mt-4 space-y-4">
          {youthCongressData.map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{item.role}</p>
                <p className="text-lg font-bold text-blue-600">{item.name}</p>
                <p className="text-sm text-slate-500">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
          <p className="text-sm text-orange-700 dark:text-orange-400">
            <strong>Factional Contest:</strong> Warring (non-Jat face Shuvam Sharma) vs Channi (Gagandeep Jalalpur) - reflects broader tension over SC/OBC representation. All top Punjab Congress positions held by Jats except Youth Congress president.
          </p>
        </div>
      </div>

      {/* Voter Turnout */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Voter Turnout Patterns (B36 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Declining turnout benefits parties with older, more reliable voter bases</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {voterTurnoutData.map((item, i) => (
            <div key={i} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
              <p className="text-sm text-slate-500">{item.election}</p>
              <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">{item.turnout}</p>
              <p className="text-xs text-slate-500 mt-1">{item.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
          <p className="text-sm text-red-700 dark:text-red-400">
            <strong>Engagement-Voting Gap:</strong> 40-50% of socially politically active youth do NOT vote. Social media engagement does not predict voting behavior. Campaign resource allocation should not be based on social media engagement alone.
          </p>
        </div>
      </div>

      {/* AAP Youth Coalition */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          AAP Youth Coalition 2022 (B36 Research)
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">AAP won 45-55% of youth (18-35) vote in 2022 - erosion signals in 2024-26</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {aapYouthVoteData.map((item, i) => (
            <div key={i} className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <p className="text-sm text-purple-600 font-medium">{item.demographic || item.note}</p>
              <p className="text-xl font-bold text-purple-700 dark:text-purple-300">{item.value}</p>
              {item.note && <p className="text-xs text-slate-500 mt-1">{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
