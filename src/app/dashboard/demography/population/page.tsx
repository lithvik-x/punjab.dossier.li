"use client";

import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

/**
 * Demography - Population Section
 * This is a placeholder redirect page - the main population content is in the parent page.tsx
 */
export default function PopulationPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
              2
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Population & Migration
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Population density, household demographics, urbanization, and migration patterns
          </p>
        </div>
      </motion.div>
      <Card padding="lg">
        <p className="text-slate-600 dark:text-slate-400">
          Population data is integrated into the main Demography page. Please navigate to the Demography section for complete population insights.
        </p>
      </Card>
    </div>
  );
}
