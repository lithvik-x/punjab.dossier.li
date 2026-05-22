"use client";

import Link from "next/link";
import { Scale, Banknote, MapPin, AlertOctagon, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

/**
 * Governance Dashboard - Overview
 * Central hub for all governance-related subpages
 */
export default function GovernancePage() {
  const sections = [
    {
      id: "agrarian-distress",
      title: "Agrarian Distress",
      description: "Farmer suicides, MSP, water crisis, stubble burning, land pooling, political positioning",
      icon: Scale,
      color: "bg-amber-500",
      href: "/dashboard/governance/agrarian-distress",
      stats: "204 farmer suicides (2022), 80% blocks over-exploited, 70% stubble fire decrease",
    },
    {
      id: "economic-fiscal",
      title: "Economic & Fiscal Performance",
      description: "Debt trajectory, fiscal deficits, unemployment, GSDP growth, service delivery gaps",
      icon: Banknote,
      color: "bg-red-500",
      href: "/dashboard/governance/economic-fiscal",
      stats: "Rs 4.28L Cr debt (46.8% GSDP), 4.2% fiscal deficit, 6.1% unemployment",
    },
    {
      id: "puadh-urban-seats",
      title: "Puadh Region & Urban Seats",
      description: "SAS Nagar, Ludhiana Urban, Patiala, Fatehgarh Sahib, Rupnagar urban analysis",
      icon: MapPin,
      color: "bg-purple-500",
      href: "/dashboard/governance/puadh-urban-seats",
      stats: "87% Smart City completion, >50% Chinese imports, Buddha Nullah BOD 154mg/l",
    },
    {
      id: "local-issues-malwa",
      title: "Local Issues Malwa Region",
      description: "Drug addiction, cancer belt, water contamination, unemployment crisis in Malwa",
      icon: AlertOctagon,
      color: "bg-orange-500",
      href: "/dashboard/governance/local-issues-malwa",
      stats: "66/69 Malwa seats AAP 2022, 42%→26% vote share drop, drug crisis critical",
    },
    {
      id: "synthesis",
      title: "Synthesis Intelligence",
      description: "Cross-referenced metrics, quality validation, gap analysis from s1-s4",
      icon: BarChart3,
      color: "bg-cyan-500",
      href: "/dashboard/governance/synthesis",
      stats: "19.3% youth unemployment, 76/132 blocks over-exploited, 4.6M drug users",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <Card padding="lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white">
            <BarChart3 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Governance Analysis
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              MP1-Foundational | Comprehensive governance crisis metrics for Punjab 2027
            </p>
          </div>
        </div>

        <CardContent>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            This section covers the complete governance landscape in Punjab, organized into five key areas:
            agrarian distress, economic performance, regional urban issues, Malwa-specific crises, and synthesized
            cross-referenced intelligence. Use the subpages below to navigate to specific sections.
          </p>
        </CardContent>
      </Card>

      {/* Section Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.id}
              href={section.href}
            >
              <Card hover className="h-full">
                <div className="mb-4 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${section.color} text-white transition-transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {section.title}
                  </h2>
                </div>
                <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                  {section.description}
                </p>
                <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold">Key Stats:</span> {section.stats}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  <span>View section</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Quick Summary */}
      <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
        <h3 className="mb-4 text-lg font-semibold text-red-700 dark:text-red-400">
          Executive Summary — Governance Crisis
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <div className="text-xs text-slate-500">Youth Unemployment</div>
            <div className="text-2xl font-bold text-red-600">19.3%</div>
            <div className="text-xs text-slate-400">Rural: 22.5%</div>
          </Card>
          <Card>
            <div className="text-xs text-slate-500">State Debt</div>
            <div className="text-2xl font-bold text-red-600">Rs 4.28L Cr</div>
            <div className="text-xs text-slate-400">46.8% of GSDP</div>
          </Card>
          <Card>
            <div className="text-xs text-slate-500">Drug Users (Est.)</div>
            <div className="text-2xl font-bold text-purple-600">4.6M+</div>
            <div className="text-xs text-slate-400">Overdose: 490/yr</div>
          </Card>
          <Card>
            <div className="text-xs text-slate-500">Groundwater</div>
            <div className="text-2xl font-bold text-blue-600">76/132</div>
            <div className="text-xs text-slate-400">blocks over-exploited</div>
          </Card>
        </div>
      </Card>
    </div>
  );
}
