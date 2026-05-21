"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/MetricCard";

const intelligenceSections = [
  {
    title: "Economic Macro Indicators",
    href: "/dashboard/intelligence/economic-macro",
    description: "GDP, GSDP, unemployment, debt metrics, fiscal intelligence",
    color: "bg-emerald-500",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "ECI Election Data",
    href: "/dashboard/intelligence/eci-election-data",
    description: "Voter rolls, ECI readiness, EVM/VVPAT, election schedule, candidate affidavits",
    color: "bg-sky-500",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Predictive Analytics",
    href: "/dashboard/intelligence/predictive-analytics",
    description: "Swing voter models, seat projections, CM face analysis, risk-adjusted confidence",
    color: "bg-violet-500",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Campaign Technology",
    href: "/dashboard/intelligence/campaign-technology",
    description: "Voter data management, analytics, content pipeline, mobile apps, real-time monitoring",
    color: "bg-indigo-500",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function IntelligencePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Intelligence & Analytics
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Comprehensive Punjab election intelligence dashboard
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {intelligenceSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${section.color} text-white`}>
                {section.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {section.title}
                  </h3>
                  <svg
                    className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {section.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 dark:border-slate-700 dark:from-indigo-900/20 dark:to-purple-900/20">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Intelligence Summary
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Research Documents</p>
            <p className="text-2xl font-bold text-indigo-600">10</p>
            <p className="text-xs text-slate-400">MP1-MP10 series</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Election Sectors</p>
            <p className="text-2xl font-bold text-violet-600">4</p>
            <p className="text-xs text-slate-400">Sub-pages</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-400">
            <p className="text-xs text-slate-500">Data Points</p>
            <p className="text-2xl font-bold text-emerald-600">2.14 Cr</p>
            <p className="text-xs text-slate-400">Voters tracked</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-xs text-slate-500">Last Updated</p>
            <p className="text-2xl font-bold text-sky-600">May</p>
            <p className="text-xs text-slate-400">2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
