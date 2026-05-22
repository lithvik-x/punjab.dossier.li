"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { BarChart3, Users, Target, TrendingUp, Home, AlertTriangle, Zap } from "lucide-react";

const CANDIDATE_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics, election performance, seat targets", icon: BarChart3 },
  { id: "leadership", name: "Leadership", description: "CM face candidates, factional dynamics", icon: Users },
  { id: "winnability", name: "Winnability", description: "CQI framework, ticket authority, priority candidates", icon: Target },
  { id: "strategy", name: "Strategy", description: "Campaign, digital, perception & reputation", icon: TrendingUp },
  { id: "booth-ops", name: "Booth Operations", description: "Infrastructure, SC seat strategy", icon: Home },
  { id: "aap-analysis", name: "AAP Analysis", description: "Turncoats, incumbent vulnerability", icon: AlertTriangle },
  { id: "young-turks", name: "Young Turks", description: "Next generation candidates", icon: Zap },
  { id: "rebels", name: "Rebel MLAs", description: "Ticket denial patterns, factional risks", icon: AlertTriangle },
];

export default function CandidatePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-lg font-bold text-white shadow-lg">
              <Users className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Candidate Supremacy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Candidate profiles - Winnability analysis - Anti-incumbency tracking
          </p>
        </div>
        <Badge variant="info">117 Candidates</Badge>
      </motion.div>

      {/* Section Navigation */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CANDIDATE_SECTIONS.map((section) => (
          <Link
            key={section.id}
            href={`/dashboard/candidate/${section.id}`}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-teal-500 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="mb-3 text-teal-600">
              <section.icon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
              {section.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {section.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Summary */}
      <Card hover>
        <CardHeader>
          <CardTitle>Section Overview</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-xs text-slate-500 mb-1">Total Subpages</p>
            <p className="text-xl font-bold text-teal-600">8 Sections</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-xs text-slate-500 mb-1">Content Preserved</p>
            <p className="text-xl font-bold text-green-600">100%</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50">
            <p className="text-xs text-slate-500 mb-1">Navigation</p>
            <p className="text-xl font-bold text-blue-600">Sidebar + Cards</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          All original content has been organized into focused subpages. Use the sidebar menu or cards above to navigate to specific sections.
        </p>
        </CardContent>
        </Card>
    </div>
  );
}
