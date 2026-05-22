"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable } from "@/components/ui/MetricCard";
import { ClipboardList, AlertTriangle } from "lucide-react";

export default function CampaignStrategyPage() {
  const strategies = [
    { phase: "Phase 1", name: "Foundation", timeline: "May-Jul 2026", objectives: 8, status: "active" },
    { phase: "Phase 2", name: "Build-up", timeline: "Aug-Oct 2026", objectives: 12, status: "pending" },
    { phase: "Phase 3", name: "Intensification", timeline: "Nov-Jan 2027", objectives: 15, status: "pending" },
    { phase: "Phase 4", name: "Final Push", timeline: "Feb 2027", objectives: 10, status: "pending" },
  ];

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
              <ClipboardList className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Campaign Strategy
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Campaign timeline, phases, and strategic priorities
          </p>
        </div>
        <Badge variant="info">258 Days to Election</Badge>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Campaign Timeline
            </h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {strategies.map((phase) => (
                <div
                  key={phase.phase}
                  className={`rounded-xl border p-4 ${
                    phase.status === "completed" ? "border-green-500 bg-green-50 dark:bg-green-900/20" :
                    phase.status === "active" ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" :
                    "border-slate-200 dark:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Badge variant={phase.status === "completed" ? "success" : phase.status === "active" ? "info" : "default"}>
                      {phase.phase}
                    </Badge>
                    {phase.status === "active" && <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />}
                  </div>
                  <h4 className="mt-2 font-semibold text-slate-700 dark:text-slate-300">{phase.name}</h4>
                  <p className="mt-1 text-sm text-slate-500">{phase.timeline}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {phase.objectives} objectives
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Strategic Priorities
            </h3>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Priority", "Action", "Timeline", "Owner", "Status"]}
                rows={[
                  ["Critical", "Drugs narrative control", "Ongoing", "Media Cell", "Active"],
                  ["High", "Youth engagement program", "Jun 2026", "Social Media", "Active"],
                  ["High", "Farmer welfare connect", "Jul 2026", "Outreach", "Planning"],
                  ["Medium", "Caste vote consolidation", "Aug 2026", "Zone Heads", "Pending"],
                  ["Medium", "Digital campaign launch", "Sep 2026", "IT Cell", "Pending"],
                  ["Low", "Celebrity endorsements", "Jan 2027", "PR Team", "Pending"],
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Intelligence-to-Agenda Conversion
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">4-stage pipeline from raw intelligence to campaign narrative</p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold">1</div>
              <h4 className="mt-2 font-semibold text-blue-700 dark:text-blue-400">Collection</h4>
              <p className="mt-2 text-sm text-blue-600 dark:text-blue-300">Ground reports, polling data, social listening, media monitoring</p>
            </div>

            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white text-sm font-bold">2</div>
              <h4 className="mt-2 font-semibold text-green-700 dark:text-green-400">Analysis</h4>
              <p className="mt-2 text-sm text-green-600 dark:text-green-300">Cross-reference validation, gap identification, trend mapping</p>
            </div>

            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white text-sm font-bold">3</div>
              <h4 className="mt-2 font-semibold text-orange-700 dark:text-orange-400">Synthesis</h4>
              <p className="mt-2 text-sm text-orange-600 dark:text-orange-300">Narrative formation, message testing, priority ranking</p>
            </div>

            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white text-sm font-bold">4</div>
              <h4 className="mt-2 font-semibold text-purple-700 dark:text-purple-400">Activation</h4>
              <p className="mt-2 text-sm text-purple-600 dark:text-purple-300">Campaign integration, rapid response, feedback loop</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
        <CardContent className="flex items-center gap-3 pt-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">Akal Takht vs AAP Government — May 2026</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">Akal Takht Jathedar Kuldip Singh Gargaj gave 15-day ultimatum to remove &quot;objectionable clauses&quot; from sacrilege law. CM Mann called it an &quot;ego yatra&quot; and is conducting a statewide Shukrana Yatra since May 6, 2026.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
