"use client";

import Link from "next/link";
import { MetricCard, Badge } from "@/components/ui/MetricCard";

/**
 * Demography Overview Page
 * Main entry point for demography section - redirects to subpages
 */

const demographySections = [
  { id: "population", name: "Population", description: "Density, households, migration", color: "bg-blue-500", icon: "P" },
  { id: "gender", name: "Gender", description: "Sex ratio, women voters", color: "bg-pink-500", icon: "G" },
  { id: "age", name: "Age Structure", description: "Age cohorts, political demographics", color: "bg-green-500", icon: "A" },
  { id: "caste", name: "Caste Composition", description: "SC, OBC, Upper Caste", color: "bg-orange-500", icon: "C" },
  { id: "religious", name: "Religious", description: "Sikh, Hindu, Muslim demographics", color: "bg-purple-500", icon: "R" },
  { id: "urbanization", name: "Urbanization", description: "Urban-rural divide", color: "bg-indigo-500", icon: "U" },
  { id: "dera-sects", name: "Dera & Sects", description: "Radha Soami, SGPC, RSS", color: "bg-teal-500", icon: "D" },
  { id: "income", name: "Income", description: "Economic stratification", color: "bg-amber-500", icon: "I" },
];

export default function DemographyPage() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
              1
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Demography Derivation
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Voter segmentation by age, caste, religion, occupation, geography & psychographics
          </p>
        </div>
        <Badge variant="info">2.14 Cr Registered Voters</Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Registered Voters"
          value="2.14 Cr"
          subtitle="21,457,160 — CEO Punjab (May 2026)"
          color="bg-blue-500"
        />
        <MetricCard
          title="Punjab Population"
          value="3.14 Cr"
          subtitle="31.37M — Technical Group (Jul 2026)"
          color="bg-teal-500"
        />
        <MetricCard
          title="Female Voters"
          value="~48.6%"
          subtitle="Est. from sex ratio 895 (child sex ratio: 846); nat'l avg 940"
          change={2.3}
          trend="up"
          color="bg-pink-500"
        />
        <MetricCard
          title="SC Population"
          value="31.9%"
          subtitle="Highest in India, 88.6L"
          color="bg-orange-500"
        />
      </div>

      {/* Section Links */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
          Demography Sections
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
          Navigate to detailed demographic analysis for each section. All original content has been organized into dedicated subpages.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {demographySections.map((section) => (
            <Link
              key={section.id}
              href={`/dashboard/demography/${section.id}`}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white ${section.color}`}>
                  {section.icon}
                </span>
                <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {section.name}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Regional Overview */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm dark:border-emerald-800 dark:bg-emerald-900/10">
        <div className="mb-4 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Regional Distribution
          </h3>
          <Badge variant="success">Overview</Badge>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">73</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Malwa Seats</div>
            <div className="text-xs text-slate-500">62% of total</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">25</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Majha Seats</div>
            <div className="text-xs text-slate-500">21% of total</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">23</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Doaba Seats</div>
            <div className="text-xs text-slate-500">20% of total</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <div className="text-xs font-medium text-slate-500 mb-1">Urban Population</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">37.5%</div>
          <div className="text-xs text-slate-500">Census 2011</div>
        </div>
        <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <div className="text-xs font-medium text-slate-500 mb-1">Sex Ratio</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">895</div>
          <div className="text-xs text-slate-500">Per 1000 males</div>
        </div>
        <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
          <div className="text-xs font-medium text-slate-500 mb-1">Child Sex Ratio</div>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">846</div>
          <div className="text-xs text-slate-500">Census 2011 — concerning</div>
        </div>
      </div>
    </div>
  );
}
