"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";

export default function SocioEconomicPage() {
  // Punjab vs Haryana Comparison
  const punjabVsHaryanaData = [
    { metric: "Per Capita Income", punjab: "2,30,523", haryana: "3,25,000", ratio: "1.41x" },
    { metric: "Youth Unemployment", punjab: "19.3%", haryana: "14.8%", difference: "+4.5pp" },
    { metric: "State Debt/GSDP", punjab: "44.47%", haryana: "28.3%", difference: "+16.17pp" },
    { metric: "Groundwater Extraction", punjab: "156%", haryana: "112%", difference: "+44pp" },
    { metric: "HDI Rank", punjab: "12", haryana: "9", difference: "3 ranks lower" },
  ];

  // Youth unemployment detailed data (PLFS Oct-Dec 2025) - A24
  const youthUnemploymentData = [
    { category: "Overall (15-29 years)", value: "19.3%", comparison: "vs 14.3% national avg", trend: "Up from 18.9%", severity: "HIGH" },
    { category: "Rural Combined", value: "22.5%", comparison: "Highest in north", trend: "Worsening", severity: "CRITICAL" },
    { category: "Rural Male", value: "19.9%", comparison: "vs 12.4% national", trend: "High", severity: "HIGH" },
    { category: "Rural Female", value: "30.7%", comparison: "2x national avg (12.9%)", trend: "Severe", severity: "CRITICAL" },
    { category: "Urban Combined", value: "14.8%", comparison: "vs 18.0% national", trend: "Moderate", severity: "MODERATE" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </span>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Socio-Economic Sentiment Drivers
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Economic distress is the #1 driver of voter anger and anti-incumbent sentiment
          </p>
        </div>
      </div>

      {/* Critical Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <MetricCard
          title="Youth Unemployment"
          value="19.3%"
          subtitle="Top anger driver"
          color="bg-red-500"
        />
        <MetricCard
          title="State Debt"
          value="4.17L Cr"
          subtitle="LAST in NITI FHI"
          color="bg-red-500"
        />
        <MetricCard
          title="Drug Users"
          value="6.6 Million"
          subtitle="18% of population"
          color="bg-red-500"
        />
        <MetricCard
          title="Farm Debt"
          value="1.04L / 3L Cr"
          subtitle="Short-term / Total agricultural debt"
          color="bg-orange-500"
        />
      </div>

      {/* Progress Bars */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Youth Unemployment (15-29 yrs)</span>
            <span className="text-sm font-bold text-red-600">19.3%</span>
          </div>
          <ProgressBar label="" value={19.3} color="bg-red-500" showPercentage={false} />
          <p className="text-xs text-slate-500 mt-1">National Average: 14.3% - Punjab is 5pp higher</p>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Debt-to-GSDP Ratio</span>
            <span className="text-sm font-bold text-red-600">44.47%</span>
          </div>
          <ProgressBar label="" value={44.47} color="bg-red-500" showPercentage={false} />
          <p className="text-xs text-slate-500 mt-1">Threshold: 25% - 1.78x over fiscal limit</p>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Groundwater Extraction</span>
            <span className="text-sm font-bold text-red-600">156.36%</span>
          </div>
          <ProgressBar label="" value={100} color="bg-red-500" showPercentage={false} />
          <p className="text-xs text-slate-500 mt-1">115 of 153 blocks over-exploited</p>
        </div>
      </div>

      {/* Punjab vs Haryana Comparison */}
      <div className="rounded-lg bg-white p-4 dark:bg-slate-800 mb-6">
        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Punjab vs Haryana Economic Comparison</h4>
        <DataTable
          headers={["Metric", "Punjab", "Haryana", "Gap"]}
          rows={punjabVsHaryanaData.map(d => [d.metric, d.punjab, d.haryana, d.ratio || d.difference || "N/A"])}
        />
      </div>

      {/* Sentiment Impact */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Per Capita Income</p>
          <p className="text-2xl font-bold text-red-600">2,30,523</p>
          <p className="text-xs text-slate-500">vs Haryana 3,25,000 (41% less)</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Gini Coefficient</p>
          <p className="text-2xl font-bold text-orange-600">0.48</p>
          <p className="text-xs text-slate-500">High income inequality</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">District Disparity</p>
          <p className="text-2xl font-bold text-orange-600">8.47:1</p>
          <p className="text-xs text-slate-500">Highest vs lowest district PCI</p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/40">
        <p className="text-sm text-red-700 dark:text-red-400">
          <strong>Sentiment Impact:</strong> Economic distress (19.3% youth unemployment, 4.17L Cr debt) is driving Anger + Resignation emotions. 6.6M drug users and agrarian debt create powerful anti-incumbent narrative for Congress to exploit.
        </p>
      </div>

      {/* Detailed Youth Unemployment */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-red-700 dark:text-red-400">CRITICAL: Youth Unemployment Crisis (PLFS Oct-Dec 2025)</p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {youthUnemploymentData.map((item, i) => (
            <div key={i} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500">{item.category}</p>
              <p className="text-lg font-bold text-red-600">{item.value}</p>
              <p className="text-xs text-slate-500">{item.comparison}</p>
              <Badge variant={item.severity === "CRITICAL" ? "danger" : item.severity === "HIGH" ? "warning" : "info"}>{item.severity}</Badge>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded bg-white dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <strong>Labour Force Participation:</strong> 45.9% overall (male 66.3%, female only 22%). Worker Population Ratio: 37.1% (15-29 age group). Haryana improved to 12.4% - Punjab worsening vs improving.
          </p>
        </div>
      </div>

      {/* Farmer Debt */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">CRITICAL: Farmer Debt - Most Potent Rural Economic Issue</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">
              <strong>Punjab ranked 3rd highest in farm debt (India)</strong> - Rs 2,03,249 per agri household (NSSO/Lok Sabha Aug 2025).
              Total outstanding debt: Rs 3 lakh crore (short-term: Rs 1.04 lakh crore). <strong>89% of farm households are indebted.</strong> Institutional: 78.7% | Non-institutional: 21.3%.
              Agri growth: 1.9% p.a. (2004-05 to 2024-25) - far below Green Revolution rates.
              Cotton yield declined 18.4% (500-408 kg/ha). Rice area expanded 200,000+ hectares.
            </p>
          </div>
        </div>
      </div>

      {/* Water Crisis */}
      <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50 p-4 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">CRITICAL: Water & Environmental Crisis - Top-10 Voter Issue</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">
              <strong>115 of 153 groundwater blocks over-exploited (75%+, highest in India).</strong> Groundwater extraction at 156% of recharge rate. Water table declining 0.49 m/yr avg (46 cm/yr in Malwa). SYL Canal deadlocked since Jan 2026. 70%+ water sources contaminated. Cancer rates in Malwa: 90-110 per 100,000.
            </p>
          </div>
        </div>
      </div>

      {/* Jobs Promise */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">AAP&apos;s Broken Promise: 25 Lakh Jobs</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">AAP&apos;s 2016/2017 commitment: 25 lakh jobs in 5 years. As of 2026, this promise remains unfulfilled - youth unemployment has actually increased since AAP took office. (NDTV July 2016, The Hindu March 2026)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
