"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { OPERATIONAL_HEADS, REGIONS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Users: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  MapPin: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Flag: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  ),
  UserCheck: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Heart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Swords: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  MessageCircle: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Tv: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Brain: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Target: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ChevronDown: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  Map: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
};

const regionColors: Record<string, string> = {
  malwa: "bg-orange-500",
  majha: "bg-blue-500",
  doaba: "bg-green-500",
  powadh: "bg-purple-500",
};

export function Sidebar() {
  const pathname = usePathname();
  const [constituencyExpanded, setConstituencyExpanded] = useState(false);

  const isConstituencyActive = pathname?.startsWith("/dashboard/constituency");

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-slate-900 text-white">
      <div className="flex h-full flex-col">
        <div className="border-b border-slate-700 px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold">Punjab Congress</h1>
              <p className="text-xs text-slate-400">Intelligence Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-4 px-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Operational Heads
            </span>
          </div>
          <ul className="space-y-1">
            {OPERATIONAL_HEADS.map((head) => {
              // Special handling for constituency - it's a parent with sub-items
              if (head.id === "constituency") {
                const isActive = pathname === `/dashboard/${head.id}`;
                const isChildActive = pathname?.startsWith("/dashboard/constituency/");
                return (
                  <li key={head.id}>
                    <div>
                      <button
                        onClick={() => setConstituencyExpanded(!constituencyExpanded)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                          isActive || isChildActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                          {iconMap[head.icon]}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-slate-400">{head.number}</span>
                            <span className="text-sm font-medium truncate">{head.title}</span>
                          </div>
                        </div>
                        <span className={`transition-transform ${constituencyExpanded ? "rotate-180" : ""}`}>
                          {iconMap["ChevronDown"]}
                        </span>
                      </button>

                      {/* Submenu */}
                      {constituencyExpanded && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-slate-700 pl-3">
                          <Link
                            href="/dashboard/constituency"
                            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                              pathname === "/dashboard/constituency"
                                ? "bg-blue-600/30 text-blue-300"
                                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`}
                          >
                            <span className="text-slate-500">→</span>
                            Overview
                          </Link>
                          {REGIONS.map((region) => {
                            const regionPath = `/dashboard/constituency/${region.id}`;
                            const isRegionActive = pathname === regionPath;
                            return (
                              <Link
                                key={region.id}
                                href={regionPath}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all ${
                                  isRegionActive
                                    ? "bg-blue-600/30 text-blue-300"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                }`}
                              >
                                <span className={`flex h-5 w-5 items-center justify-center rounded ${regionColors[region.id]}`}>
                                  {iconMap["Map"]}
                                </span>
                                <span className="flex-1">{region.name}</span>
                                <span className="text-xs text-slate-500">{region.constituencies}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </li>
                );
              }

              const isActive = pathname === `/dashboard/${head.id}`;
              return (
                <li key={head.id}>
                  <Link
                    href={`/dashboard/${head.id}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${head.color}`}>
                      {iconMap[head.icon]}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-400">{head.number}</span>
                        <span className="text-sm font-medium truncate">{head.title}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-slate-700 px-4 py-4">
          <div className="rounded-lg bg-slate-800 p-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Election: Feb 2027</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">117 Seats • 2.77 Cr Voters</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
