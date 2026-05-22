"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable, MetricCard } from "@/components/ui/MetricCard";
import { Flag } from "lucide-react";

export default function GroundOperationsPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-white shadow-lg">
              <Flag className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Ground Operations
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Booth-level ground game and karyakarta network
          </p>
        </div>
        <Badge variant="info">258 Days to Election</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Claimed Booth Workers"
          value="3 Lakh"
          subtitle="5 workers per booth target"
          color="blue"
        />
        <MetricCard
          title="Core Activists"
          value="45-60K"
          subtitle="15-20% of claimed"
          color="orange"
        />
        <MetricCard
          title="Urban Ratio"
          value="1:40-60"
          subtitle="Worker to voters"
          color="emerald"
        />
        <MetricCard
          title="Rural Ratio"
          value="1:60-80"
          subtitle="Worker to voters"
          color="purple"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Booth Sevak Model
            </h3>
            <div className="mt-4 grid gap-4">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-700 dark:text-green-400">Target Booths</h4>
                <div className="mt-3 space-y-2 text-sm text-green-600 dark:text-green-300">
                  <p>585 total target (target booths)</p>
                  <p>5 workers per booth (3 lakh target)</p>
                  <p>April 2026: 25,000 booth sevaks appointed</p>
                  <p>117 AC coordinators appointed (June 2025)</p>
                </div>
                <div className="mt-3">
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-2 rounded-full bg-green-500" style={{ width: "8.3%" }} />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">8.3% target achievement (25,000 of 300,000)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Voter Contact Programs
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <p>Door-to-door voter ID verification</p>
              <p>Booth-level demographic mapping</p>
              <p>Specialized teams: youth, women, SC, agricultural</p>
              <p>GOTV (Get Out The Vote) execution critical</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Worker Tier Classification
          </h3>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Tier", "Description", "Count", "Activation Rate"]}
              rows={[
                ["Tier 1", "Core activists - full commitment", "45-60K", "85%"],
                ["Tier 2", "Regular supporters - periodic involvement", "120-150K", "45%"],
                ["Tier 3", "Event-based participants", "200-250K", "20%"],
                ["Tier 4", "Sympathizers - name only", "1+Lakh+", "5%"],
              ]}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Karyakarta Network Reality
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
                <span className="text-sm text-red-600 dark:text-red-300">Claimed Members</span>
                <span className="font-bold text-red-700 dark:text-red-400">3 Lakh</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                <span className="text-sm text-orange-600 dark:text-orange-300">Core Activists (Tier 1)</span>
                <span className="font-bold text-orange-700 dark:text-orange-400">45-60K</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                <span className="text-sm text-yellow-600 dark:text-yellow-300">Regular Supporters (Tier 2)</span>
                <span className="font-bold text-yellow-700 dark:text-yellow-400">120-150K</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <span className="text-sm text-blue-600 dark:text-blue-300">Event-Based (Tier 3)</span>
                <span className="font-bold text-blue-700 dark:text-blue-400">200-250K</span>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Tier 1 (Core)</span>
                  <span className="font-medium text-green-600">85%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-2 rounded-full bg-green-500" style={{ width: "85%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Tier 2 (Regular)</span>
                  <span className="font-medium text-yellow-600">45%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-2 rounded-full bg-yellow-500" style={{ width: "45%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Tier 3 (Event)</span>
                  <span className="font-medium text-orange-600">20%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-2 rounded-full bg-orange-500" style={{ width: "20%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Tier 4 (Sympathizer)</span>
                  <span className="font-medium text-red-600">5%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-2 rounded-full bg-red-500" style={{ width: "5%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <strong>Strategic Implication:</strong> Only 15-20% of claimed karyakarta network is actually active. Resource allocation must focus on Tier 1-2 activation rather than expansion. Target: 150K core activists by October 2026.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
