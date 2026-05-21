"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PARTY_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics, political anatomy, 2024 results", icon: "📊" },
  { id: "congress-status", name: "Congress Status", description: "Party factions, CM prospects, crisis matrix", icon: "🏛️" },
  { id: "congress-workers", name: "Congress Workers", description: "Worker hierarchy, digital deficit, zone-wise distribution", icon: "👥" },
  { id: "campaign-strategy", name: "Campaign Strategy", description: "Narrative, caste coalitions, booth structure", icon: "📋" },
  { id: "campaign-budget", name: "Campaign Budget", description: "Budget estimate, MP9 resources, transportation", icon: "💰" },
  { id: "aap-intelligence", name: "AAP Intelligence", description: "Party structure, financial resources, 2027 strategy", icon: "🔍" },
  { id: "sad-status", name: "SAD Status", description: "Electoral decline, factions, panthic issues", icon: "⚠️" },
  { id: "resources-logistics", name: "Resources & Logistics", description: "Rally venues, device procurement, MCC protocols", icon: "🚚" },
];

export default function PartyPage() {
  const pathname = usePathname();

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <h2 className="text-2xl font-bold text-cyan-700 dark:text-cyan-400">
          Party Propulsion
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Congress party machinery, worker networks, booth-level agents, and competitor intelligence for Punjab Election 2027.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PARTY_SECTIONS.map((section) => {
          const href = `/dashboard/party/${section.id}`;
          const isActive = pathname === href;
          return (
            <Link
              key={section.id}
              href={href}
              className={`group rounded-xl border p-6 transition-all hover:shadow-lg ${
                isActive
                  ? "border-cyan-500 bg-cyan-100 dark:bg-cyan-900/40"
                  : "border-slate-200 bg-white hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-800"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-2xl text-white">
                  {section.icon}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200">
                    {section.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {section.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm font-medium text-cyan-600 group-hover:text-cyan-700">
                View section
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
