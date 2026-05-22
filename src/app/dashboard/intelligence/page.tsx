"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { TrendingUp, Shield, BarChart3, Monitor } from "lucide-react";

const intelligenceSections = [
  {
    title: "Economic Macro Indicators",
    href: "/dashboard/intelligence/economic-macro",
    description: "GDP, GSDP, unemployment, debt metrics, fiscal intelligence",
    color: "emerald",
    icon: TrendingUp,
  },
  {
    title: "ECI Election Data",
    href: "/dashboard/intelligence/eci-election-data",
    description: "Voter rolls, ECI readiness, EVM/VVPAT, election schedule, candidate affidavits",
    color: "cyan",
    icon: Shield,
  },
  {
    title: "Predictive Analytics",
    href: "/dashboard/intelligence/predictive-analytics",
    description: "Swing voter models, seat projections, CM face analysis, risk-adjusted confidence",
    color: "purple",
    icon: BarChart3,
  },
  {
    title: "Campaign Technology",
    href: "/dashboard/intelligence/campaign-technology",
    description: "Voter data management, analytics, content pipeline, mobile apps, real-time monitoring",
    color: "blue",
    icon: Monitor,
  },
];

export default function IntelligencePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Intelligence & Analytics
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Comprehensive Punjab election intelligence dashboard
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {intelligenceSections.map((section, index) => (
          <motion.div
            key={section.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Link
              href={section.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 block"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${section.color}-500 text-white`}>
                  <section.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {section.title}
                    </h3>
                    <svg
                      className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {section.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Intelligence Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-xs text-slate-500">Research Documents</p>
                <p className="text-2xl font-bold text-indigo-600">10</p>
                <p className="text-xs text-slate-400">MP1-MP10 series</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-xs text-slate-500">Election Sectors</p>
                <p className="text-2xl font-bold text-violet-600">4</p>
                <p className="text-xs text-slate-400">Sub-pages</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-xs text-slate-500">Data Points</p>
                <p className="text-2xl font-bold text-emerald-600">2.14 Cr</p>
                <p className="text-xs text-slate-400">Voters tracked</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <p className="text-xs text-slate-500">Last Updated</p>
                <p className="text-2xl font-bold text-cyan-600">May</p>
                <p className="text-xs text-slate-400">2026</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
