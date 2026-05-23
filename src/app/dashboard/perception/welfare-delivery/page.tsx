"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, MetricCard } from "@/components/ui/MetricCard";
import { Heart } from "lucide-react";

export default function WelfareDeliveryPage() {
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
              <Heart className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Welfare Delivery
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Government schemes, attribution challenges
          </p>
        </div>
        <Badge variant="info">Delivery Analysis</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Central Schemes"
          value="15+"
          subtitle="Major welfare programs"
          color="cyan"
        />
        <MetricCard
          title="DBT Penetration"
          value="60%"
          subtitle="Major schemes covered"
          color="blue"
        />
        <MetricCard
          title="Admin Bottlenecks"
          value="12"
          subtitle="Delivery chain issues"
          color="amber"
        />
        <MetricCard
          title="Voter Attribution Confusion"
          value="40-60%"
          subtitle="Cannot ID responsible govt"
          color="purple"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Central Government Schemes
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50">
                <h4 className="font-medium text-slate-700 dark:text-slate-300">
                  PM-KISAN
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Direct income support for farmers
                </p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50">
                <h4 className="font-medium text-slate-700 dark:text-slate-300">
                  Ujjwala Yojana
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  LPG connections for rural households
                </p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50">
                <h4 className="font-medium text-slate-700 dark:text-slate-300">
                  Jal Jeevan Mission
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Rural water supply
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              State Government Schemes
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50">
                <h4 className="font-medium text-slate-700 dark:text-slate-300">
                  Tahrikit scheme
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Punjab government welfare initiative
                </p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50">
                <h4 className="font-medium text-slate-700 dark:text-slate-300">
                  Bhushan
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Education scholarship program
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Attribution Dynamics
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
              <h4 className="font-semibold text-amber-700 dark:text-amber-400">
                Visibility vs Funding
              </h4>
              <p className="mt-1 text-xs text-amber-600 dark:text-amber-300">
                Voters see state schemes but attribute to central funding
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400">
                Source Confusion
              </h4>
              <p className="mt-1 text-xs text-blue-600 dark:text-blue-300">
                40-60% cannot identify which government runs schemes
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <h4 className="font-semibold text-purple-700 dark:text-purple-400">
                Temporal Attribution
              </h4>
              <p className="mt-1 text-xs text-purple-600 dark:text-purple-300">
                Recent schemes credited, older schemes forgotten
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <h4 className="font-semibold text-red-700 dark:text-red-400">
                Incumbency Challenge
              </h4>
              <p className="mt-1 text-xs text-red-600 dark:text-red-300">
                AAP cannot claim credit for central schemes
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
