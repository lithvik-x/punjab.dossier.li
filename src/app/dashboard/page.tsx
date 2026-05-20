"use client";

import { MetricCard, ProgressBar, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";
import { OPERATIONAL_HEADS, REGIONS, KEY_ISSUES_VERIFIED } from "@/lib/constants";

export default function DashboardOverview() {

  const weeklySentiment = [0.31, 0.28, 0.35, 0.38, 0.41, 0.39, 0.42];
  const weeklyReach = [1200000, 1450000, 1380000, 1620000, 1750000, 1680000, 1820000];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Intelligence Overview
          </h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Punjab Legislative Assembly Election 2027 • February
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="success">● Live Data</Badge>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Last updated: May 20, 2026 11:45 AM
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Registered Voters"
          value="2.14 Cr"
          subtitle="21,457,160 — CEO Punjab (May 2026)"
          color="bg-blue-500"
          icon={
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          }
        />
        <MetricCard
          title="Punjab Population"
          value="3.14 Cr"
          subtitle="31.37M — Technical Group (Jul 2026)"
          color="bg-teal-500"
          icon={
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <MetricCard
          title="Assembly Seats"
          value="117"
          subtitle="Target: 60+ for majority"
          change={0}
          trend="neutral"
          color="bg-green-500"
          icon={
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          }
        />
        <MetricCard
          title="Net Sentiment"
          value="+0.42"
          subtitle="Congress vs Combined Opp"
          change={5.1}
          trend="up"
          color="bg-purple-500"
          icon={
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          }
        />
        <MetricCard
          title="Days to Election"
          value="258"
          subtitle="February 15, 2027"
          change={0}
          trend="neutral"
          color="bg-orange-500"
          icon={
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Weekly Sentiment Trend
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Net favorability score (7-day rolling)
          </p>
          <div className="mt-4">
            <MiniChart data={weeklySentiment} color="bg-purple-500" height={80} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-500">+0.42</p>
              <p className="text-xs text-slate-500">This Week</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-400">0.38</p>
              <p className="text-xs text-slate-500">Last Week</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">+10.5%</p>
              <p className="text-xs text-slate-500">Change</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Campaign Reach
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total impressions (7-day rolling)
          </p>
          <div className="mt-4">
            <MiniChart data={weeklyReach.map(v => v / 1000000)} color="bg-blue-500" height={80} />
          </div>
          <div className="mt-4 flex justify-between text-center">
            <div>
              <p className="text-2xl font-bold text-blue-500">18.2L</p>
              <p className="text-xs text-slate-500">This Week</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-400">12L</p>
              <p className="text-xs text-slate-500">Last Week</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-500">+51%</p>
              <p className="text-xs text-slate-500">Growth</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Top Voter Issues
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Priority ranking by voter mention frequency
          </p>
          <div className="mt-6 space-y-4">
            {KEY_ISSUES_VERIFIED.slice(0, 6).map((issue, i) => (
              <ProgressBar
                key={issue.id}
                label={`${i + 1}. ${issue.name}`}
                value={100 - (i * 8)}
                color={
                  issue.sentiment < -0.6 ? "bg-red-500" :
                  issue.sentiment < -0.3 ? "bg-orange-500" :
                  "bg-yellow-500"
                }
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Regional Breakdown
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Voter distribution by Punjab region
          </p>
          <div className="mt-6 space-y-4">
            {REGIONS.map((region) => (
              <div key={region.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{region.name}</span>
                    <span className="text-sm text-slate-500">{region.constituencies} ACs</span>
                  </div>
                  <ProgressBar
                    label=""
                    value={(region.constituencies / 117) * 100}
                    color="bg-cyan-500"
                    showPercentage={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Caste-Vote Bank Analysis
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Estimated vote share by community (indicative)
        </p>
        <div className="mt-6">
          <DataTable
            headers={["Community", "Category", "Est. %", "Votes/Seat", "Congress Affinity"]}
            rows={[
              ["Jat Sikh", "General", "21%", "28,500", "Medium-High"],
              ["Mazhabi Sikh", "SC", "8%", "10,900", "High"],
              ["Bania", "General", "7%", "9,500", "Medium-High"],
              ["Ramdasia", "SC", "5%", "6,800", "High"],
              ["Brahmin", "General", "4%", "5,400", "Medium"],
              ["Lodhgarh", "OBC", "3%", "4,100", "Medium"],
              ["Arora", "General", "3%", "4,100", "High"],
              ["Tarkhan", "OBC/SC", "3%", "4,100", "Medium"],
            ]}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {OPERATIONAL_HEADS.slice(0, 6).map((head) => (
          <a
            key={head.id}
            href={`/dashboard/${head.id}`}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${head.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="text-lg font-bold">{head.number}</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {head.title}
                </h4>
                <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                  {head.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {OPERATIONAL_HEADS.slice(6).map((head) => (
          <a
            key={head.id}
            href={`/dashboard/${head.id}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${head.color} text-white shadow group-hover:scale-105 transition-transform`}>
                <span className="font-bold">{head.number}</span>
              </div>
              <h4 className="font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {head.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
