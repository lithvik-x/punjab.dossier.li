"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/MetricCard";

const PERCEPTION_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary", icon: "📊", color: "bg-rose-500" },
  { id: "swot-analysis", name: "SWOT Analysis", description: "Congress strengths, weaknesses, opportunities, threats", icon: "🎯", color: "bg-blue-500" },
  { id: "campaign-strategy", name: "Campaign Strategy", description: "Timeline, phases, strategic priorities", icon: "📋", color: "bg-green-500" },
  { id: "seat-projections", name: "Seat Projections", description: "Vote share trajectory, poll consensus, scenarios", icon: "🗳️", color: "bg-purple-500" },
  { id: "grievance-analysis", name: "Grievance Analysis", description: "Priority issues, angry voter profiles", icon: "😤", color: "bg-red-500" },
  { id: "religious-politics", name: "Religious Politics", description: "SGPC, Sikh issues, 1984, sacrilege law", icon: "🛤️", color: "bg-amber-500" },
  { id: "regional-analysis", name: "Regional Analysis", description: "Malwa, Majha, Doaba grievances", icon: "🗺️", color: "bg-orange-500" },
  { id: "student-politics", name: "Student Politics", description: "Panjab University, NSUI/ABVP", icon: "🎓", color: "bg-cyan-500" },
  { id: "election-security", name: "Election Security", description: "CAPF, high-risk constituencies, gangster networks", icon: "🔒", color: "bg-slate-500" },
  { id: "ground-operations", name: "Ground Operations", description: "Booth-level, karyakarta network", icon: "🏁", color: "bg-teal-500" },
  { id: "campaign-budget", name: "Campaign Budget", description: "Congress vs AAP budget comparison", icon: "💰", color: "bg-emerald-500" },
  { id: "welfare-delivery", name: "Welfare Delivery", description: "Government schemes, attribution challenges", icon: "🏥", color: "bg-pink-500" },
  { id: "kpi-framework", name: "KPI Framework", description: "Leading/lagging indicators, organizational KPIs", icon: "📈", color: "bg-indigo-500" },
  { id: "perception-audit", name: "Perception Audit", description: "Party & leader tracking, media tone", icon: "📡", color: "bg-violet-500" },
  { id: "scenario-planning", name: "Scenario Planning", description: "Post-election scenarios, CM selection", icon: "🔮", color: "bg-yellow-500" },
  { id: "eci-compliance", name: "ECI Compliance", description: "Election laws, expenditure limits", icon: "⚖️", color: "bg-lime-500" },
  { id: "weather-planning", name: "Weather Planning", description: "February weather patterns, logistics", icon: "🌤️", color: "bg-sky-500" },
  { id: "opposition-research", name: "Opposition Research", description: "Attack strategy, vulnerability identification", icon: "🔍", color: "bg-rose-600" },
  { id: "intelligence-pipeline", name: "Intelligence Pipeline", description: "Collection, analysis, synthesis, activation", icon: "⚙️", color: "bg-gray-500" },
  { id: "victory-pathways", name: "Victory Pathways", description: "Three strategic routes to majority", icon: "🏆", color: "bg-green-600" },
  { id: "aap-governance", name: "AAP Governance", description: "Claims vs delivery, Mann performance", icon: "📉", color: "bg-orange-600" },
  { id: "offline-assets", name: "Offline Assets", description: "Karyakarta network inventory", icon: "📦", color: "bg-blue-600" },
  { id: "manifesto-framework", name: "Manifesto Framework", description: "15-pillar framework", icon: "📜", color: "bg-emerald-600" },
  { id: "synthesis-intelligence", name: "Synthesis Intelligence", description: "Gap analysis, remediation waves", icon: "🔬", color: "bg-purple-600" },
];

export default function PerceptionOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-lg font-bold text-white">
              10
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Perception & Strategy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            SWOT analysis, campaign strategy, narrative formation, and intelligence synthesis
          </p>
        </div>
        <Badge variant="info">258 Days to Election</Badge>
      </div>

      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Congress Momentum: Lok Sabha 2024 — 7/13 Seats in Punjab</p>
            <p className="text-sm text-green-600 dark:text-green-300">Plus: 25,000 booth sevaks appointed (May 2026), 117 AC coordinators (June 2025)</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PERCEPTION_SECTIONS.map((section) => (
          <Link
            key={section.id}
            href={`/dashboard/perception/${section.id}`}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${section.color}`}>
                {section.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {section.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {section.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400">
              <span>View section</span>
              <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Quick Stats Summary
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600">4</p>
            <p className="text-sm text-slate-500">Campaign Phases</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">5</p>
            <p className="text-sm text-slate-500">Narrative Pillars</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">58%</p>
            <p className="text-sm text-slate-500">Message Recall</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">62%</p>
            <p className="text-sm text-slate-500">Narrative Ownership</p>
          </div>
        </div>
      </div>
    </div>
  );
}
