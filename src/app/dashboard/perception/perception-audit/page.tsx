"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable, MetricCard, ProgressBar } from "@/components/ui/MetricCard";
import { Radar } from "lucide-react";
import {
  issueOwnershipAnalysis,
  voterSegmentClassifications,
  victoryPathways,
  resourceAllocation,
  timelinePhases,
} from "@/lib/perception-audit-data";
import {
  gapSalienceMatrix,
  aapPromiseAudit,
  rankedGovernanceGaps,
  segmentGrievanceProfiles,
  messagingPriorityTimeline,
  successMetric,
} from "@/lib/governance-gap-perception-audit-data";

export default function PerceptionAuditPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white shadow-lg">
              <Radar className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Perception Audit
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Party &amp; leader tracking, media tone
          </p>
        </div>
        <Badge variant="info">Congress-Verified</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Voter Segments"
          value={voterSegmentClassifications.length}
          subtitle="Classification categories"
          color="cyan"
        />
        <MetricCard
          title="Issue Ownership Areas"
          value={issueOwnershipAnalysis.length}
          subtitle="Key contestable domains"
          color="cyan"
        />
        <MetricCard
          title="Victory Pathways"
          value={victoryPathways.length}
          subtitle="Strategic routes to majority"
          color="cyan"
        />
        <MetricCard
          title="Campaign Phases"
          value={timelinePhases.length}
          subtitle="Timeline milestones"
          color="cyan"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Issue Ownership Analysis
            </h3>
            <div className="mt-4">
              <DataTable
                headers={["Issue", "Owner", "Recovery Potential"]}
                rows={issueOwnershipAnalysis.map((item) => [
                  item.issue,
                  <Badge
                    key={item.issue}
                    variant={
                      item.owner === "Congress"
                        ? "success"
                        : item.owner === "Contestable"
                          ? "warning"
                          : "danger"
                    }
                  >
                    {item.owner}
                  </Badge>,
                  item.recoveryPotential,
                ])}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Voter Segment Classifications
            </h3>
            <div className="mt-4">
              <DataTable
                headers={["Segment", "Est. %", "Reachability"]}
                rows={voterSegmentClassifications.map((s) => [
                  s.segment,
                  s.estimatedPercentage,
                  s.campaignReachability,
                ])}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Victory Pathways
            </h3>
            <div className="mt-4 space-y-3">
              {victoryPathways.map((path) => (
                <div
                  key={path.name}
                  className="rounded-lg border border-sky-200 bg-sky-50 p-4 dark:border-sky-900/30 dark:bg-sky-900/10"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      {path.name}
                    </h4>
                    <span className="text-sm font-bold text-sky-600 dark:text-sky-400">
                      {typeof path.seatTarget === "number"
                        ? `${path.seatTarget}+ seats`
                        : path.seatTarget}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {path.description}
                  </p>
                  <p className="mt-1 text-xs text-sky-600 dark:text-sky-400">
                    {path.keyStrategy}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Resource Allocation
            </h3>
            <div className="mt-4 space-y-4">
              {resourceAllocation.map((r) => (
                <ProgressBar
                  key={r.category}
                  label={r.category}
                  value={parseInt(r.percentage)}
                  color="cyan"
                />
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
              Percentages represent share of total campaign budget
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Campaign Timeline Phases
            </h3>
            <div className="mt-4 space-y-3">
              {timelinePhases.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      {phase.phase}
                    </h4>
                    <span className="text-xs font-medium text-sky-500">
                      {phase.timing}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {phase.focus.map((f) => (
                      <Badge key={f} variant="info">
                        {f}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Governance Gap Salience Matrix
            </h3>
            <div className="mt-4">
              <DataTable
                headers={["Governance Gap", "Severity", "Salience", "Priority"]}
                rows={gapSalienceMatrix.map((g) => [
                  g.governanceGap,
                  `${g.severity}/10`,
                  `${g.salience}/10`,
                  <Badge
                    key={g.governanceGap}
                    variant={
                      g.priority === "CRITICAL"
                        ? "danger"
                        : g.priority === "HIGH"
                          ? "warning"
                          : "info"
                    }
                  >
                    {g.priority}
                  </Badge>,
                ])}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              AAP Promise Audit
            </h3>
            <div className="mt-4 space-y-4">
              {aapPromiseAudit.map((item) => (
                <div
                  key={item.promise}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {item.promise}
                  </h4>
                  <div className="mt-2 grid gap-2 text-sm">
                    <div>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        Delivered:{" "}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {item.actualDelivery.join("; ")}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-red-600 dark:text-red-400">
                        Gaps:{" "}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {item.gaps?.join("; ") ?? ""}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 rounded bg-amber-50 p-2 text-xs text-amber-700 dark:bg-amber-900/20 dark:text-amber-400">
                    {item.perceptionVsReality}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Ranked Governance Gaps
            </h3>
            <div className="mt-4">
              <DataTable
                headers={["Rank", "Gap", "Score", "Primary Segment", "Region"]}
                rows={rankedGovernanceGaps.map((g) => [
                  `#${g.rank}`,
                  g.gap,
                  `${g.severityScore}/10`,
                  g.primarySegment,
                  g.regional,
                ])}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Segment Grievance Profiles
            </h3>
            <div className="mt-4 space-y-3">
              {segmentGrievanceProfiles.map((s) => (
                <div
                  key={s.segment}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      {s.segment}
                    </h4>
                    <Badge
                      variant={
                        s.recoveryPotential.startsWith("HIGH")
                          ? "success"
                          : s.recoveryPotential.startsWith("MEDIUM")
                            ? "warning"
                            : "danger"
                      }
                    >
                      {s.recoveryPotential}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Grievance: {s.primaryGrievance}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                    <span>Intensity: {s.intensity}/10</span>
                    <span>AAP 2022: {s.aap2022VoteShare}</span>
                  </div>
                  <ProgressBar
                    label="Grievance Intensity"
                    value={Math.round(s.intensity * 10)}
                    max={100}
                    color="cyan"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Messaging Priority Timeline
            </h3>
            <div className="mt-4 space-y-3">
              {messagingPriorityTimeline.map((phase) => (
                <div
                  key={phase.phase}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <h4 className="font-medium text-sky-600 dark:text-sky-400">
                    {phase.phase}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {phase.focus}
                  </p>
                  {phase.regions && (
                    <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                      Regions: {phase.regions}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Success Metric
          </h3>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Metric
              </p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                {successMetric.metric}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">Baseline</p>
                <p className="text-2xl font-bold text-slate-400">{successMetric.baseline}</p>
              </div>
              <div className="text-2xl text-slate-300 dark:text-slate-600">→</div>
              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">Target</p>
                <p className="text-2xl font-bold text-green-500">{successMetric.target}</p>
              </div>
            </div>
            <div className="text-sm text-slate-400 dark:text-slate-500">
              Target date: {successMetric.targetDate}
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {successMetric.condition}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
