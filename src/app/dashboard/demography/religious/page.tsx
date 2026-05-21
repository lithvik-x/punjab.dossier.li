"use client";

import { Badge } from "@/components/ui/MetricCard";

/**
 * Demography - Religious Demographics Section
 * Sikh, Hindu, Muslim demographics and religious community electoral analysis
 */

export default function DemographyReligiousPage() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
              R
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Religious Demographics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Sikh, Hindu, Muslim demographics and religious community electoral patterns
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </div>

      {/* Religious Demographics Content */}
      <div className="rounded-xl border-2 border-purple-500 bg-purple-50 p-6 dark:border-purple-700 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
            R
          </span>
          <div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Religious Community Demographics</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">Sikh, Hindu, Muslim population distribution and electoral impact</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Religious demographics content is extracted from the main demography page. This section contains detailed
          Sikh, Hindu, and Muslim demographic analysis with electoral implications.
        </p>
      </div>
    </div>
  );
}
