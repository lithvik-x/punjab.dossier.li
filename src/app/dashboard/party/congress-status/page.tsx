"use client";

import { MetricCard, Badge } from "@/components/ui/MetricCard";

export default function CongressStatusPage() {
  return (
    <div className="space-y-8">
      {/* Congress Status - from research-P3/congress-status */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          Congress Status (May 2026)
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          PPCC leadership, Factional dynamics, CM face prospects, Org revival
        </p>

        {/* Key Metrics */}
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <MetricCard
            title="PPCC President"
            value="Amrinder Singh Raja Warring"
            subtitle="Since April 2022"
            color="bg-purple-500"
          />
          <MetricCard
            title="AICC In-Charge"
            value="Bhupesh Baghel"
            subtitle="Appointed Feb 2025"
            color="bg-purple-500"
          />
          <MetricCard
            title="Lok Sabha 2024"
            value="7/13"
            subtitle="Seats won, 26.30% vote share"
            color="bg-green-500"
          />
          <MetricCard
            title="Assembly Seats"
            value="15-16/117"
            subtitle="Current representation"
            color="bg-yellow-500"
          />
        </div>

        {/* Factional Dynamics */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Factional Dynamics</h4>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Warring</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">PPCC President, OBC outreach</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Channi</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">Ex-CM, SC community champion</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Bajwa</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">CLP Leader, Jat Sikh base</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Randhawa</span>
              <Badge variant="info">Active</Badge>
            </div>
            <p className="mt-1 text-xs text-slate-500">Deputy CLP, Doaba strong</p>
          </div>
        </div>

        {/* CM Face Prospects */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">CM Face Prospects</h4>
        <div className="mt-3 rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">No official declaration as of May 2026</p>
            <Badge variant="warning">6 Contenders</Badge>
          </div>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-6">
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Channi</span>
            <p className="mt-1 text-xs text-slate-500">Ex-CM, SC base</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Warring</span>
            <p className="mt-1 text-xs text-slate-500">PPCC President</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Bajwa</span>
            <p className="mt-1 text-xs text-slate-500">CLP Leader</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Randhawa</span>
            <p className="mt-1 text-xs text-slate-500">Deputy CLP</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Aujla</span>
            <p className="mt-1 text-xs text-slate-500">Contender</p>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Singla</span>
            <p className="mt-1 text-xs text-slate-500">Contender</p>
          </div>
        </div>

        {/* Org Revival */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Org Revival (May 2026)</h4>
        <div className="mt-3 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-2xl font-bold text-green-600">25,000</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Booth Sevaks</p>
            <p className="mt-1 text-xs text-slate-500">Sangathan Srijan Abhiyan</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-2xl font-bold text-green-600">1.25 Lakh</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Booth Assistants</p>
            <p className="mt-1 text-xs text-slate-500">1 per booth target model</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <p className="text-2xl font-bold text-green-600">~3 Lakh</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Total Party Workers</p>
            <p className="mt-1 text-xs text-slate-500">Worker base mobilized</p>
          </div>
        </div>

        {/* Survey Data */}
        <h4 className="mt-6 font-semibold text-purple-900 dark:text-purple-100">Candidate Selection Surveys</h4>
        <div className="mt-3 rounded-lg bg-cyan-50 p-3 dark:bg-cyan-900/20">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-cyan-700 dark:text-cyan-300">3 Surveys commissioned mid-May 2026</p>
            <Badge variant="info">Active</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-500">For candidate selection across 117 assembly segments</p>
        </div>
      </div>

      {/* 2027 Election Strategy */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">
          2027 Election Strategy
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Collective leadership model, Three-phase yatra
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Three-Phase Yatra</p>
            <p className="mt-1 text-xs text-slate-500">Statewide outreach campaign</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">117 AC Strategy</p>
            <p className="mt-1 text-xs text-slate-500">One coordinator per constituency</p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Factional Balance</p>
            <p className="mt-1 text-xs text-slate-500">Warring, Channi, Bajwa, Randhawa</p>
          </div>
        </div>
      </div>

      {/* Crisis Risk Matrix */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Crisis Risk Matrix
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Top 10 crisis types by probability × impact (20 total tracked)
        </p>
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="danger">CRITICAL</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Candidate Defection</span>
            </div>
            <span className="text-xs text-slate-500">P: High | I: Critical</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="danger">CRITICAL</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Social Media Gaffes</span>
            </div>
            <span className="text-xs text-slate-500">P: High | I: High</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="warning">HIGH</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Factional Violence</span>
            </div>
            <span className="text-xs text-slate-500">P: Medium | I: Critical</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="warning">HIGH</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Caste Calculus Upset</span>
            </div>
            <span className="text-xs text-slate-500">P: High | I: High</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3 dark:bg-orange-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="warning">HIGH</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Booth Capturing Reports</span>
            </div>
            <span className="text-xs text-slate-500">P: Medium | I: High</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="info">MEDIUM</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Manifesto Overpromise</span>
            </div>
            <span className="text-xs text-slate-500">P: High | I: Medium</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-yellow-50 p-3 dark:bg-yellow-900/20">
            <div className="flex items-center gap-3">
              <Badge variant="info">MEDIUM</Badge>
              <span className="text-sm text-slate-700 dark:text-slate-300">Ally Infighting</span>
            </div>
            <span className="text-xs text-slate-500">P: Medium | I: Medium</span>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">+13 additional crisis types monitored</p>
      </div>
    </div>
  );
}
