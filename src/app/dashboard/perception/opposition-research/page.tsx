"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable, MetricCard } from "@/components/ui/MetricCard";
import { Search } from "lucide-react";
import {
  researchProcessPhases,
  candidateVulnerabilities,
  aapGovernmentVulnerabilities,
  negativeCampaigningTypology,
  attackTimingPhases,
  rapidResponseEscalation,
  responseSpeedTargets,
  preemptiveStrikeStrategies,
  factCheckingProtocol,
} from "@/lib/opposition-research-data";

export default function OppositionResearchPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg">
              <Search className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Opposition Research
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Attack strategy, vulnerability identification
          </p>
        </div>
        <Badge variant="info">Congress-Verified</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Research Phases"
          value={researchProcessPhases.length}
          subtitle="End-to-end methodology"
          color="rose"
        />
        <MetricCard
          title="Vulnerability Categories"
          value={candidateVulnerabilities.length}
          subtitle="Opponent weakness domains"
          color="rose"
        />
        <MetricCard
          title="Attack Timing Phases"
          value={attackTimingPhases.length}
          subtitle="Campaign escalation stages"
          color="rose"
        />
        <MetricCard
          title="Response Levels"
          value={rapidResponseEscalation.length}
          subtitle="Escalation framework"
          color="rose"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Research Process Phases
            </h3>
            <div className="mt-4 space-y-4">
              {researchProcessPhases.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                      {phase.phase}
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {phase.name}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              AAP Government Vulnerabilities
            </h3>
            <div className="mt-4 space-y-4">
              {aapGovernmentVulnerabilities.map((item) => (
                <div
                  key={item.promise}
                  className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900/30 dark:bg-red-900/10"
                >
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {item.promise}
                  </h4>
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    Delivery Gap: {item.deliveryGap}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.vulnerability}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Attack Advertising Framework
            </h3>
            <div className="mt-4 space-y-4">
              {negativeCampaigningTypology.map((item) => (
                <div
                  key={item.type}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {item.type}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="warning">{item.risk}</Badge>
                    <Badge variant="info">{item.effectiveness}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Attack Timing Phases
            </h3>
            <div className="mt-4 space-y-3">
              {attackTimingPhases.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      {phase.phase}
                    </h4>
                    {phase.timeline && (
                      <span className="text-xs font-medium text-red-500">
                        {phase.timeline}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {phase.focus}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Rapid Response Escalation
            </h3>
            <div className="mt-4">
              <DataTable
                headers={["Level", "Name", "Trigger", "Description"]}
                rows={rapidResponseEscalation.map((r) => [
                  r.level.toString(),
                  r.name,
                  r.trigger,
                  r.description,
                ])}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Preemptive Strike Strategies
            </h3>
            <div className="mt-4 space-y-3">
              {preemptiveStrikeStrategies.map((s) => (
                <div
                  key={s.strategy}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {s.strategy}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Response Speed Targets
            </h3>
            <div className="mt-4">
              <DataTable
                headers={["Channel", "Target Time"]}
                rows={responseSpeedTargets.map((t) => [t.channel, t.targetTime])}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Fact-Checking Protocol
            </h3>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                  Monitoring
                </h4>
                <ul className="mt-1 list-inside list-disc text-sm text-blue-600 dark:text-blue-300">
                  {factCheckingProtocol.monitoring.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <h4 className="text-sm font-semibold text-green-700 dark:text-green-400">
                  Verification Steps
                </h4>
                <ul className="mt-1 list-inside list-disc text-sm text-green-600 dark:text-green-300">
                  {factCheckingProtocol.verificationSteps.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
