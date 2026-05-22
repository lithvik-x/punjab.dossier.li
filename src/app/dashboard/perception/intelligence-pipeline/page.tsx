"use client";

import { Badge, DataTable, MetricCard } from "@/components/ui/MetricCard";
import {
  batch1Intelligence,
  batch1PriorityTiers,
  regionIntelligenceSummaries,
  getVulnerableCongressSeats,
  getFlipOpportunities,
} from "@/lib/election-intelligence";
import { PERCEPTION_BOTTLENECK_DATA } from "@/lib/perception-bottleneck-data";

export default function IntelligencePipelinePage() {
  const totalACs = batch1Intelligence.length;
  const criticalSeats = batch1Intelligence.filter((s) => s.priorityTier === "CRITICAL").length;
  const highSeats = batch1Intelligence.filter((s) => s.priorityTier === "HIGH").length;
  const recoverySeats = batch1Intelligence.filter((s) => s.priorityTier === "RECOVERY").length;

  const vulnerableSeats = getVulnerableCongressSeats();
  const flipOpportunities = getFlipOpportunities();

  const regions = Object.values(regionIntelligenceSummaries);
  const bottlenecks = PERCEPTION_BOTTLENECK_DATA.punjabBottlenecks;
  const counterNarratives = PERCEPTION_BOTTLENECK_DATA.counterNarratives;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-white">
              ⚙️
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Intelligence Pipeline
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Collection, analysis, synthesis, activation
          </p>
        </div>
        <Badge variant="info">Batch 1: Majha</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="ACs Analyzed"
          value={totalACs}
          subtitle="Batch 1 Majha region"
          color="bg-cyan-500"
        />
        <MetricCard
          title="Critical Priority"
          value={criticalSeats}
          subtitle="Immediate action required"
          color="bg-red-500"
        />
        <MetricCard
          title="High Priority"
          value={highSeats}
          subtitle="Ground mobilization"
          color="bg-amber-500"
        />
        <MetricCard
          title="Recovery Seats"
          value={recoverySeats}
          subtitle="Long-term rebuild"
          color="bg-purple-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Priority Tier Summary
          </h3>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Tier", "Constituencies", "Margin", "Action Urgency"]}
              rows={batch1PriorityTiers.map((t) => [
                <Badge
                  key={t.tier}
                  variant={
                    t.tier === "CRITICAL"
                      ? "danger"
                      : t.tier === "HIGH"
                        ? "warning"
                        : t.tier === "MEDIUM"
                          ? "info"
                          : "default"
                  }
                >
                  {t.tier}
                </Badge>,
                t.constituencies.join(", "),
                t.margin,
                t.actionUrgency,
              ])}
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Region Intelligence Summary
          </h3>
          <div className="mt-4 space-y-4">
            {regions.map((region) => (
              <div
                key={region.region}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
              >
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                  {region.region}
                </h4>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center text-sm">
                  <div>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">{region.totalSeats}</p>
                    <p className="text-slate-500">Total</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">{region.congressSeats}</p>
                    <p className="text-slate-500">Congress</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{region.aapSeats}</p>
                    <p className="text-slate-500">AAP</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Vulnerable Congress Seats
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            INC-held seats with margin under 10,000
          </p>
          <div className="mt-4 space-y-3">
            {vulnerableSeats.map((seat) => (
              <div
                key={seat.acId}
                className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-red-700 dark:text-red-400">
                    {seat.name}
                  </span>
                  <Badge variant="danger">{seat.margin?.toLocaleString()} votes</Badge>
                </div>
                <p className="mt-1 text-sm text-red-600 dark:text-red-300">
                  {seat.congressPosition.slice(0, 120)}...
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            AAP Flip Opportunities
          </h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            AAP-held seats with margin under 15,000
          </p>
          <div className="mt-4 space-y-3">
            {flipOpportunities.map((seat) => (
              <div
                key={seat.acId}
                className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-blue-700 dark:text-blue-400">
                    {seat.name}
                  </span>
                  <Badge variant="info">
                    {Math.abs(seat.margin ?? 0).toLocaleString()} votes
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-blue-600 dark:text-blue-300">
                  {seat.congressPosition.slice(0, 120)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Perception Bottlenecks — Punjab Inventory
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {bottlenecks.length} identified bottlenecks across all regions
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bottlenecks.map((bn) => (
            <div
              key={bn.id}
              className={`rounded-lg border p-4 ${
                bn.urgencyLevel === "Critical"
                  ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                  : bn.urgencyLevel === "High"
                    ? "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20"
                    : "border-slate-200 dark:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700 dark:text-slate-300">{bn.id}</span>
                <Badge
                  variant={
                    bn.urgencyLevel === "Critical"
                      ? "danger"
                      : bn.urgencyLevel === "High"
                        ? "warning"
                        : "info"
                  }
                >
                  {bn.urgencyLevel}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {bn.description}
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                <span>Severity: {bn.severity}/10</span>
                <span>|</span>
                <span>{bn.affectedVoterSegment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Counter-Narrative Design
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Targeted responses for each bottleneck type
        </p>
        <div className="mt-4 space-y-4">
          {counterNarratives.map((cn) => (
            <div
              key={cn.bottleneckType}
              className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                  {cn.bottleneckType}
                </h4>
                <Badge variant="info">{cn.emotionalAppeal}</Badge>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                "{cn.counterNarrative}"
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {cn.deliveryChannels.map((ch) => (
                  <span
                    key={ch}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400"
                  >
                    {ch}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Messenger: {cn.messengerRecommendation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
