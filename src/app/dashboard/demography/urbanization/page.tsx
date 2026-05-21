"use client";

import { Badge } from "@/components/ui/MetricCard";

/**
 * Demography - Urbanization Section
 * Urban-rural divide, municipal corporations, peri-urban growth
 */

export default function DemographyUrbanizationPage() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              U
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Urbanization
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Urban-rural divide, municipal corporations, and peri-urban growth patterns
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </div>

      {/* Urbanization Content */}
      <div className="rounded-xl border-2 border-indigo-500 bg-indigo-50 p-6 dark:border-indigo-700 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
            U
          </span>
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">Urbanization & Settlement Classification</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">Urban-rural distribution and electoral implications</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Urbanization content is extracted from the main demography page. This section contains detailed
          urbanization trends, municipal corporation data, and urban-rural electoral implications.
          Note: Urbanization content is also included in the Population subpage.
        </p>
      </div>
    </div>
  );
}
