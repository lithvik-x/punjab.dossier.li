"use client";

import Link from "next/link";
import { MetricCard, Badge } from "@/components/ui/MetricCard";

const competitionSections = [
  {
    id: "aap",
    title: "AAP Analysis",
    description: "AAP SWOT, broken promises, internal factions, seat vulnerabilities",
    color: "bg-orange-500",
    href: "/dashboard/competition/aap",
  },
  {
    id: "sad",
    title: "SAD Status",
    description: "SAD party status, factions, alliance breakdown",
    color: "bg-green-500",
    href: "/dashboard/competition/sad",
  },
  {
    id: "bjp",
    title: "BJP Growth",
    description: "BJP growth trajectory, going solo 2027, organizational infrastructure",
    color: "bg-yellow-500",
    href: "/dashboard/competition/bjp",
  },
  {
    id: "caste",
    title: "Caste Demographics",
    description: "Caste coalition math, vote bank breakdown",
    color: "bg-purple-500",
    href: "/dashboard/competition/caste",
  },
  {
    id: "regional",
    title: "Regional Analysis",
    description: "Malwa, Majha, Doaba regional dynamics",
    color: "bg-blue-500",
    href: "/dashboard/competition/regional",
  },
  {
    id: "synthesis",
    title: "Synthesis",
    description: "M1 Mega-Pillar synthesis, competitor intelligence summary",
    color: "bg-red-500",
    href: "/dashboard/competition/synthesis",
  },
];

const coreMetrics = [
  { title: "AAP Current Seats", value: "92", subtitle: "2022 Assembly results", color: "bg-orange-500" },
  { title: "SAD Current Seats", value: "3", subtitle: "2022 results (post-split)", color: "bg-green-500" },
  { title: "BJP Vote Share", value: "18.6%", subtitle: "Up from 6.6% in 2022", change: 182, trend: "up" as const, color: "bg-orange-500" },
  { title: "Congress Current Seats", value: "18", subtitle: "2022 results", color: "bg-blue-500" },
  { title: "Congress Seats Needed", value: "Net +41", subtitle: "18 → 59 (majority mark)", color: "bg-blue-500" },
  { title: "BJP Lok Sabha 2024", value: "5/13", subtitle: "Best-ever Punjab result", change: 400, trend: "up" as const, color: "bg-yellow-500" },
  { title: "Dera Influence", value: "40-50", subtitle: "Seats affected", color: "bg-purple-500" },
  { title: "Youth Unemployment", value: "14.9%", subtitle: "4th highest in India", trend: "down" as const, color: "bg-red-500" },
];

export default function CompetitionOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
              6
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Competition Management
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            AAP • SAD • BJP • BSP analysis • Vote bank tracking • 2027 Assembly
          </p>
        </div>
        <Badge variant="danger">4 Major Competitors</Badge>
      </div>

      {/* Crisis Alerts */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">BJP-SAD Alliance Broken — March 2026</p>
              <p className="text-sm text-red-600 dark:text-red-300">Amit Shah confirms BJP will fight solo in 2027. 30+ year alliance ended.</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-orange-700 dark:text-orange-400">AAP Fell 5 Seats Short of Majority — 2022</p>
              <p className="text-sm text-orange-600 dark:text-orange-300">AAP won 92 seats on 42.01% vote share. Needed 97 for majority (59 seats).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-yellow-700 dark:text-yellow-400">BJP Vote Share Triple: 6.6% → 18.6% (2024)</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-300">BJP tripled vote share from 2022 Assembly. Now Punjab&apos;s 3rd largest party.</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-400">7 Rajya Sabha MPs Defected to BJP — April 2026</p>
              <p className="text-sm text-purple-600 dark:text-purple-300">Key AAP Punjab strategists jumped ship. Mass defection wave in April 2026.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border-2 border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-yellow-700 dark:text-yellow-400">SAD Split — August 11, 2025</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-300">SAD (Punar Surjit) formed under Giani Harpreet Singh. Two factions competing.</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-green-700 dark:text-green-400">Akal Takht Ultimatum — May 2026</p>
              <p className="text-sm text-green-600 dark:text-green-300">Jathedar Kuldip Singh Gargaj gave 15-day ultimatum over sacrilege law.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Metrics Grid */}
      <div className="grid gap-6 lg:grid-cols-4">
        {coreMetrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            subtitle={metric.subtitle}
            color={metric.color}
            trend={metric.trend}
            change={metric.change}
          />
        ))}
      </div>

      {/* Section Navigation */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
          Competition Sections
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {competitionSections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${section.color} text-white font-bold`}>
                  {section.id.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links to Other Dashboards */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Related Dashboards
        </h3>
        <div className="grid gap-4 md:grid-cols-4">
          <Link
            href="/dashboard/party"
            className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md dark:bg-slate-800"
          >
            <p className="font-medium text-slate-900 dark:text-white">Party Propulsion</p>
            <p className="text-xs text-slate-500">Congress machinery</p>
          </Link>
          <Link
            href="/dashboard/candidate"
            className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md dark:bg-slate-800"
          >
            <p className="font-medium text-slate-900 dark:text-white">Candidate Supremacy</p>
            <p className="text-xs text-slate-500">Candidate profiles</p>
          </Link>
          <Link
            href="/dashboard/voter"
            className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md dark:bg-slate-800"
          >
            <p className="font-medium text-slate-900 dark:text-white">Voter Enticement</p>
            <p className="text-xs text-slate-500">Voter outreach</p>
          </Link>
          <Link
            href="/dashboard/demography"
            className="rounded-lg bg-white p-4 shadow-sm hover:shadow-md dark:bg-slate-800"
          >
            <p className="font-medium text-slate-900 dark:text-white">Demography Derivation</p>
            <p className="text-xs text-slate-500">Voter segmentation</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
