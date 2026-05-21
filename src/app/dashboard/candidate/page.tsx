"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/MetricCard";

const CANDIDATE_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics, election performance, seat targets", icon: "📊" },
  { id: "leadership", name: "Leadership", description: "CM face candidates, factional dynamics", icon: "👥" },
  { id: "winnability", name: "Winnability", description: "CQI framework, ticket authority, priority candidates", icon: "🎯" },
  { id: "strategy", name: "Strategy", description: "Campaign, digital, perception & reputation", icon: "📣" },
  { id: "booth-ops", name: "Booth Operations", description: "Infrastructure, SC seat strategy", icon: "🏠" },
  { id: "aap-analysis", name: "AAP Analysis", description: "Turncoats, incumbent vulnerability", icon: "🔍" },
  { id: "young-turks", name: "Young Turks", description: "Next generation candidates", icon: "⚡" },
  { id: "rebels", name: "Rebel MLAs", description: "Ticket denial patterns, factional risks", icon: "⚠️" },
];

export default function CandidatePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
              4
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Candidate profiles - Winnability analysis - Anti-incumbency tracking
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </div>

      {/* Section Navigation */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CANDIDATE_SECTIONS.map((section) => (
          <Link
            key={section.id}
            href={`/dashboard/candidate/${section.id}`}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-teal-500 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="text-3xl mb-3">{section.icon}</div>
            <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
              {section.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Summary */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Section Overview
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-xs text-slate-500 mb-1">Total Subpages</p>
            <p className="text-xl font-bold text-teal-600">8 Sections</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-xs text-slate-500 mb-1">Content Preserved</p>
            <p className="text-xl font-bold text-green-600">100%</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-xs text-slate-500 mb-1">Navigation</p>
            <p className="text-xl font-bold text-blue-600">Sidebar + Cards</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          All original content has been organized into focused subpages. Use the sidebar menu or cards above to navigate to specific sections.
        </p>
      </div>
    </div>
  );
}
