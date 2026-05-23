"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable, MetricCard } from "@/components/ui/MetricCard";
import { Wallet } from "lucide-react";

export default function CampaignBudgetPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg">
              <Wallet className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Campaign Budget
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Congress vs AAP budget comparison
          </p>
        </div>
        <Badge variant="info">Rs 350 Cr Target</Badge>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                INC
              </span>
              <h3 className="font-semibold text-slate-900 dark:text-white">Congress</h3>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              Rs 150-200 Cr
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">2027 projected envelope</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-xs font-bold text-white">
                AAP
              </span>
              <h3 className="font-semibold text-slate-900 dark:text-white">AAP</h3>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              Rs 250-350 Cr
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">2027 projected envelope</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 text-xs font-bold text-white">
                BJP
              </span>
              <h3 className="font-semibold text-slate-900 dark:text-white">BJP</h3>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              Rs 85-145 Cr
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">2027 projected envelope</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <MetricCard
          title="Adverse Scenario Gap"
          value="Rs 200 Cr"
          subtitle="Congress vs AAP"
          color="rose"
        />
        <MetricCard
          title="Base Case Gap"
          value="Rs 100 Cr"
          subtitle="Congress vs AAP"
          color="amber"
        />
        <MetricCard
          title="Favorable Scenario"
          value="Rs 50 Cr"
          subtitle="Congress vs AAP"
          color="emerald"
        />
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Budget Allocation Priorities
          </h3>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">Field Operations</span>
                <Badge variant="info">40%</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Booth-level workers, rallies, events</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">Media & Advertising</span>
                <Badge variant="info">30%</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">TV, digital, print campaigns</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">Digital & Social</span>
                <Badge variant="info">20%</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Social media, content creation</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-300">Research & Polling</span>
                <Badge variant="info">10%</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500">Opposition research, voter surveys</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            ROI priorities
          </h3>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Rank", "Investment", "ROI Score", "Time Horizon"]}
              rows={[
                ["#1", "Door-to-door voter contact", "Highest", "Immediate"],
                ["#2", "GOTV operations", "Very High", "Pre-election"],
                ["#3", "Social media campaigns", "High", "Ongoing"],
                ["#4", "Rally & events", "Medium", "Phase-based"],
                ["#5", "Television advertising", "Medium", "Last 30 days"],
              ]}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            What Not to Waste Money On
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-red-100 bg-red-50 p-3 dark:border-red-900/30 dark:bg-red-900/10">
              <p className="font-medium text-red-700 dark:text-red-400">Expensive celebrity endorsements</p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-300">
                Low ROI compared to ground outreach
              </p>
            </div>
            <div className="rounded-lg border border-red-100 bg-red-50 p-3 dark:border-red-900/30 dark:bg-red-900/10">
              <p className="font-medium text-red-700 dark:text-red-400">Overseas conventions</p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-300">
                Limited electoral impact
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
