"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, MetricCard } from "@/components/ui/MetricCard";
import { TrendingUp } from "lucide-react";

export default function KpiFrameworkPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              KPI Framework
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Leading/lagging indicators, organizational KPIs
          </p>
        </div>
        <Badge variant="info">40 Total KPIs</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Campaign Phases"
          value="5"
          subtitle="Foundation to Post-Election"
          color="emerald"
        />
        <MetricCard
          title="Active KPIs"
          value="40"
          subtitle="Across all 5 phases"
          color="blue"
        />
        <MetricCard
          title="Organizational KPIs"
          value="15"
          subtitle="Worker, volunteer, resource"
          color="amber"
        />
        <MetricCard
          title="Electoral KPIs"
          value="12"
          subtitle="Vote share, seats, margins"
          color="purple"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Leading Indicators
            </h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                    Voter Contact Rate
                  </span>
                  <Badge variant="info">Daily</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">Doors knocked per day per worker</p>
              </div>
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                    Worker Activation
                  </span>
                  <Badge variant="info">Weekly</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">Active workers vs total enrolled</p>
              </div>
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                    Social Media Engagement
                  </span>
                  <Badge variant="info">Daily</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">Reach, shares, comments per post</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Lagging Indicators
            </h3>
            <div className="space-y-3">
              <div className="rounded-lg border border-amber-100 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                    Vote Share
                  </span>
                  <Badge variant="warning">Post-election</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">Actual votes obtained</p>
              </div>
              <div className="rounded-lg border border-amber-100 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                    Seat Count
                  </span>
                  <Badge variant="warning">Post-election</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">Total seats won</p>
              </div>
              <div className="rounded-lg border border-amber-100 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                    Margin of Victory/Loss
                  </span>
                  <Badge variant="warning">Post-election</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">Vote difference in each constituency</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            KPI Framework Risks
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Data collection delays
                </span>
                <Badge variant="danger">Critical</Badge>
              </div>
              <p className="mt-1 text-xs text-slate-500">Ground-level data may lag by 24-48 hours</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20">
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Worker underreporting
                </span>
                <Badge variant="warning">High</Badge>
              </div>
              <p className="mt-1 text-xs text-slate-500">Activity may be overstated vs actual</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
