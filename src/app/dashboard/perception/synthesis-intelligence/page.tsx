"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable, MetricCard, ProgressBar } from "@/components/ui/MetricCard";
import { Microscope } from "lucide-react";
import {
  PERCEPTION_BOTTLENECK_DATA,
} from "@/lib/perception-bottleneck-data";

export default function SynthesisIntelligencePage() {
  const data = PERCEPTION_BOTTLENECK_DATA;

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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg">
              <Microscope className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Synthesis Intelligence
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Gap analysis, remediation waves
          </p>
        </div>
        <Badge variant="info">Bottleneck Analysis</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Bottleneck Types"
          value={data.types.length}
          subtitle="Perception barriers"
          color="blue"
        />
        <MetricCard
          title="Punjab Bottlenecks"
          value={data.punjabBottlenecks.length}
          subtitle="Active blockers"
          color="cyan"
        />
        <MetricCard
          title="Interventions Planned"
          value={data.interventions.length}
          subtitle="Remediation waves"
          color="teal"
        />
        <MetricCard
          title="Campaign Phases"
          value={data.campaignPhaseIntegration.length}
          subtitle="Deployment stages"
          color="indigo"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Bottleneck Definitions
            </h3>
            <div className="mt-4 space-y-3">
              {data.bottleneckDefinitions.map((def, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                      {def.type}
                    </h4>
                    <Badge variant="info">{def.strategicCategory}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {def.definition}
                  </p>
                  <p className="mt-1 text-xs italic text-slate-400 dark:text-slate-500">
                    Voter asks: &ldquo;{def.voterQuestion}&rdquo;
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Underlying: {def.underlyingFear}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Punjab Bottleneck Inventory
            </h3>
            <div className="mt-4 space-y-4">
              {data.punjabBottlenecks.map((b, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-500">
                      {b.id}
                    </span>
                    <Badge
                      variant={
                        b.urgencyLevel === "Critical"
                          ? "danger"
                          : b.urgencyLevel === "High"
                            ? "warning"
                            : "info"
                      }
                    >
                      {b.urgencyLevel}
                    </Badge>
                  </div>
                  <h4 className="mt-1 font-medium text-slate-800 dark:text-slate-200">
                    {b.bottleneckType}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {b.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-slate-500">Severity:</span>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className={`h-full rounded-full ${
                          b.severity >= 8
                            ? "bg-rose-500"
                            : b.severity >= 6
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }`}
                        style={{ width: `${(b.severity / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-500">{b.severity}/10</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Region: {b.geographicConcentration}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Bottleneck Prioritization Matrix
          </h3>
          <div className="mt-4">
            <DataTable
              headers={["ID", "Bottleneck", "Severity", "Ease of Resolution", "Impact", "Order"]}
              rows={data.bottleneckPriorities.map((p) => {
                const b = data.punjabBottlenecks.find((b) => b.id === p.bottleneckId);
                return [
                  <span key="id" className="font-mono text-xs text-blue-500">
                    {p.bottleneckId}
                  </span>,
                  b?.bottleneckType ?? p.bottleneckId,
                  <span
                    key="sev"
                    className={
                      p.severity >= 8
                        ? "font-medium text-rose-500"
                        : p.severity >= 6
                          ? "font-medium text-amber-500"
                          : "font-medium text-blue-500"
                    }
                  >
                    {p.severity}/10
                  </span>,
                  p.easeOfResolution,
                  p.impactPotential,
                  <Badge key="ord" variant="info">
                    #{p.recommendedOrder}
                  </Badge>,
                ];
              })}
              caption="Priority ranking for bottleneck intervention"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Resource Allocation
            </h3>
            <div className="mt-4 space-y-4">
              {data.resourceAllocation.map((r, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {r.bottleneckId}: Severity {r.severity}
                    </span>
                    <span className="text-xs text-slate-500">{r.allocatedResources}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {r.expectedImpact}
                  </p>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{
                        width: r.allocatedResources,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Campaign Phase Integration
            </h3>
            <div className="mt-4 space-y-3">
              {data.campaignPhaseIntegration.map((phase, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {phase.phase}
                    </h4>
                    <Badge variant="info">{phase.timeframe}</Badge>
                  </div>
                  <p className="mt-1 text-xs font-medium text-blue-500">
                    Primary: {phase.primaryBottleneck}
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {phase.interventions.map((interv, j) => (
                      <li
                        key={j}
                        className="text-xs text-slate-500 dark:text-slate-400"
                      >
                        &bull; {interv}
                      </li>
                    ))}
                  </ul>
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
              Narrative Deployment Sequence
            </h3>
            <div className="mt-4 space-y-3">
              {data.narrativeDeploymentSequence.map((n, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        {n.deploymentOrder}
                      </span>
                      <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {n.narrative}
                      </h4>
                    </div>
                    <Badge variant="default">{n.timingRationale}</Badge>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    Pre-requisite: {n.prerequisiteEvidence}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Parallel: {n.parallelNarratives.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Counter-Narrative Strategies
            </h3>
            <div className="mt-4 space-y-3">
              {data.counterNarratives.map((cn, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <Badge variant="info">{cn.bottleneckType}</Badge>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                    &ldquo;{cn.counterNarrative}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Messenger: {cn.messengerRecommendation}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Channels: {cn.deliveryChannels.join(", ")}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {cn.evidenceRequired.map((e, j) => (
                      <Badge key={j} variant="default">
                        {e}
                      </Badge>
                    ))}
                  </div>
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
              Narrative Framings
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {data.narrativeFramings.map((nf, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                    {nf.framing}
                  </h4>
                  <ul className="mt-2 space-y-0.5">
                    {nf.storyElements.map((el, j) => (
                      <li
                        key={j}
                        className="text-xs text-slate-500 dark:text-slate-400"
                      >
                        &bull; {el}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                    Resonance: {nf.emotionalResonance}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Evidence: {nf.evidenceBase}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Knowledge Confidence Assessment
            </h3>
            <div className="mt-4 space-y-4">
              {data.knowledgeConfidence.map((kc, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {kc.category}
                    </span>
                    <Badge
                      variant={
                        kc.confidenceLevel === "High"
                          ? "success"
                          : kc.confidenceLevel === "Medium"
                            ? "warning"
                            : "danger"
                      }
                    >
                      {kc.confidenceLevel}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {kc.evidenceQuality}
                  </p>
                  <ProgressBar
                    label=""
                    value={
                      kc.confidenceLevel === "High"
                        ? 85
                        : kc.confidenceLevel === "Medium"
                          ? 55
                          : 25
                    }
                    color={
                      kc.confidenceLevel === "High"
                        ? "emerald"
                        : kc.confidenceLevel === "Medium"
                          ? "amber"
                          : "rose"
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Social Proof Indicators & Breaking Point Thresholds
          </h3>
          <div className="mt-4">
            <DataTable
              headers={["Indicator", "Measurement", "Baseline", "Breaking Point", "Exceeding Threshold"]}
              rows={data.socialProofIndicators.map((sp) => [
                sp.indicator,
                sp.measurement,
                sp.baseline,
                <Badge key="bp" variant="warning">
                  {sp.breakingPoint}
                </Badge>,
                <Badge key="et" variant="success">
                  {sp.exceedingThreshold}
                </Badge>,
              ])}
              caption="Key social proof metrics for perception change"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Tracking Metrics & Interventions
          </h3>
          <div className="mt-4">
            <DataTable
              headers={["Bottleneck", "Metric", "Baseline", "Target", "Frequency"]}
              rows={data.trackingMetrics.map((tm) => {
                return [
                  <span key="id" className="font-mono text-xs text-blue-500">
                    {tm.bottleneckId}
                  </span>,
                  tm.metric,
                  tm.baselineMeasurement,
                  tm.targetValue,
                  tm.measurementFrequency,
                ];
              })}
              caption="Real-time tracking framework for bottleneck resolution"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
