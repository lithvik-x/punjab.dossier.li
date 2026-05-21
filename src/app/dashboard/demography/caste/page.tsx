"use client";

import { Badge } from "@/components/ui/MetricCard";

/**
 * Demography - Caste Composition Section
 * SC, OBC, Upper Caste demographics and electoral impact
 */

export default function DemographyCastePage() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
              C
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Caste Composition
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            SC, OBC, Upper Caste demographics and their electoral significance
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </div>

      {/* Caste Composition Content */}
      <div className="rounded-xl border-2 border-orange-500 bg-orange-50 p-6 dark:border-orange-700 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
            C
          </span>
          <div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Caste Demographics & Electoral Impact</h3>
            <p className="text-sm text-orange-600 dark:text-orange-400">SC, OBC, and Upper Caste population distribution</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Caste composition content is extracted from the main demography page. This section contains detailed SC, OBC,
          and Upper Caste demographic analysis with electoral implications.
        </p>
      </div>
    </div>
  );
}
