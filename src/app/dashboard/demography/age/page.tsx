"use client";

import { Badge } from "@/components/ui/MetricCard";

/**
 * Demography - Age Structure Section
 * Age distribution, political demographics, youth cohorts
 */

export default function DemographyAgePage() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
              A
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Age Structure & Demographics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Age cohorts, political demographics, youth unemployment, and generational patterns
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </div>

      {/* Age Structure Content */}
      <div className="rounded-xl border-2 border-green-500 bg-green-50 p-6 dark:border-green-700 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
            A
          </span>
          <div>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Age Distribution & Political Cohorts</h3>
            <p className="text-sm text-green-600 dark:text-green-400">Age structure analysis for electoral targeting</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Age structure content is extracted from the main demography page. This section contains detailed age cohort analysis,
          youth unemployment data, and generational voting patterns.
        </p>
      </div>
    </div>
  );
}
