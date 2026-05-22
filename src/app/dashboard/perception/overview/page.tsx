"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import {
  BarChart3, Target, ClipboardList, Vote, Angry, Crosshair, Map, GraduationCap,
  Shield, Flag, Wallet, Heart, TrendingUp, Radio, Telescope, Scale,
  CloudSun, Search, Cog, Trophy, TrendingDown, Package, FileText, Microscope,
  CheckCircle2, ArrowRight
} from "lucide-react";

const PERCEPTION_SECTIONS = [
  { id: "overview", name: "Overview", description: "Key metrics & summary", icon: BarChart3, color: "rose" as const },
  { id: "swot-analysis", name: "SWOT Analysis", description: "Congress strengths, weaknesses, opportunities, threats", icon: Target, color: "blue" as const },
  { id: "campaign-strategy", name: "Campaign Strategy", description: "Timeline, phases, strategic priorities", icon: ClipboardList, color: "emerald" as const },
  { id: "seat-projections", name: "Seat Projections", description: "Vote share trajectory, poll consensus, scenarios", icon: Vote, color: "purple" as const },
  { id: "grievance-analysis", name: "Grievance Analysis", description: "Priority issues, angry voter profiles", icon: Angry, color: "rose" as const },
  { id: "religious-politics", name: "Religious Politics", description: "SGPC, Sikh issues, 1984, sacrilege law", icon: Crosshair, color: "amber" as const },
  { id: "regional-analysis", name: "Regional Analysis", description: "Malwa, Majha, Doaba grievances", icon: Map, color: "orange" as const },
  { id: "student-politics", name: "Student Politics", description: "Panjab University, NSUI/ABVP", icon: GraduationCap, color: "cyan" as const },
  { id: "election-security", name: "Election Security", description: "CAPF, high-risk constituencies, gangster networks", icon: Shield, color: "slate" as const },
  { id: "ground-operations", name: "Ground Operations", description: "Booth-level, karyakarta network", icon: Flag, color: "teal" as const },
  { id: "campaign-budget", name: "Campaign Budget", description: "Congress vs AAP budget comparison", icon: Wallet, color: "emerald" as const },
  { id: "welfare-delivery", name: "Welfare Delivery", description: "Government schemes, attribution challenges", icon: Heart, color: "pink" as const },
  { id: "kpi-framework", name: "KPI Framework", description: "Leading/lagging indicators, organizational KPIs", icon: TrendingUp, color: "indigo" as const },
  { id: "perception-audit", name: "Perception Audit", description: "Party & leader tracking, media tone", icon: Radio, color: "violet" as const },
  { id: "scenario-planning", name: "Scenario Planning", description: "Post-election scenarios, CM selection", icon: Telescope, color: "amber" as const },
  { id: "eci-compliance", name: "ECI Compliance", description: "Election laws, expenditure limits", icon: Scale, color: "lime" as const },
  { id: "weather-planning", name: "Weather Planning", description: "February weather patterns, logistics", icon: CloudSun, color: "sky" as const },
  { id: "opposition-research", name: "Opposition Research", description: "Attack strategy, vulnerability identification", icon: Search, color: "rose" as const },
  { id: "intelligence-pipeline", name: "Intelligence Pipeline", description: "Collection, analysis, synthesis, activation", icon: Cog, color: "gray" as const },
  { id: "victory-pathways", name: "Victory Pathways", description: "Three strategic routes to majority", icon: Trophy, color: "green" as const },
  { id: "aap-governance", name: "AAP Governance", description: "Claims vs delivery, Mann performance", icon: TrendingDown, color: "orange" as const },
  { id: "offline-assets", name: "Offline Assets", description: "Karyakarta network inventory", icon: Package, color: "blue" as const },
  { id: "manifesto-framework", name: "Manifesto Framework", description: "15-pillar framework", icon: FileText, color: "emerald" as const },
  { id: "synthesis-intelligence", name: "Synthesis Intelligence", description: "Gap analysis, remediation waves", icon: Microscope, color: "purple" as const },
];

const colorMap: Record<string, string> = {
  rose: "bg-rose-500",
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  purple: "bg-purple-500",
  amber: "bg-amber-500",
  orange: "bg-orange-500",
  cyan: "bg-cyan-500",
  slate: "bg-slate-500",
  teal: "bg-teal-500",
  pink: "bg-pink-500",
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  sky: "bg-sky-500",
  gray: "bg-gray-500",
  green: "bg-green-600",
  lime: "bg-lime-500",
};

export default function PerceptionOverviewPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-lg font-bold text-white shadow-lg">
              10
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Perception & Strategy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            SWOT analysis, campaign strategy, narrative formation, and intelligence synthesis
          </p>
        </div>
        <Badge variant="info">258 Days to Election</Badge>
      </motion.div>

      {/* Congress Momentum Banner */}
      <Card className="border-2 border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20">
        <CardContent className="flex items-center gap-3 pt-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-emerald-700 dark:text-emerald-400">Congress Momentum: Lok Sabha 2024 — 7/13 Seats in Punjab</p>
            <p className="text-sm text-emerald-600 dark:text-emerald-300">Plus: 25,000 booth sevaks appointed (May 2026), 117 AC coordinators (June 2025)</p>
          </div>
        </CardContent>
      </Card>

      {/* Section Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PERCEPTION_SECTIONS.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
          >
            <Link href={`/dashboard/perception/${section.id}`} className="group block h-full">
              <Card hover className="h-full">
                <CardContent className="flex items-start gap-4 pt-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg ${colorMap[section.color]} text-white`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {section.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                      {section.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0" />
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats Summary */}
      <Card hover>
        <CardHeader>
          <CardTitle>Quick Stats Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">4</p>
              <p className="text-sm text-slate-500">Campaign Phases</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5</p>
              <p className="text-sm text-slate-500">Narrative Pillars</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">58%</p>
              <p className="text-sm text-slate-500">Message Recall</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">62%</p>
              <p className="text-sm text-slate-500">Narrative Ownership</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
