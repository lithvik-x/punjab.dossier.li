"use client";

import { Badge } from "@/components/ui/MetricCard";

/**
 * Demography - Dera & Sects Section
 * Radha Soami, SGPC, RSS influence and sect voter blocks
 */

export default function DemographyDeraSectsPage() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
              D
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Dera & Sects
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Radha Soami, SGPC, RSS influence and sect voter blocks
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </div>

      {/* Dera & Sects Content */}
      <div className="rounded-xl border-2 border-teal-500 bg-teal-50 p-6 dark:border-teal-700 dark:bg-teal-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
            D
          </span>
          <div>
            <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-400">Dera & Sect Influence</h3>
            <p className="text-sm text-teal-600 dark:text-teal-400">Religious sects and their electoral impact</p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Dera and sects content is extracted from the main demography page. This section contains detailed
          analysis of Radha Soami, Dera Sach Khand, Namdhari, Nirankari and other sect influences on voting patterns.
        </p>
      </div>
    </div>
  );
}
