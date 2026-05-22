"use client";

import { Badge, MetricCard, ProgressBar } from "@/components/ui/MetricCard";
import aapData from "@/lib/aap-governance-data";

export default function AapGovernancePage() {
  const {
    metadata,
    promises,
    budget,
    majorAllocations,
    policyTimeline,
    achievements,
    perception,
    oppositionCriticism,
    sources,
  } = aapData;

  const totalPromises = promises.length;
  const fulfilled = promises.filter(
    (p) => p.status === "FULFILLED"
  ).length;
  const partial = promises.filter(
    (p) => p.status === "PARTIALLY_FULFILLED" || p.status === "DELAYED_PILOT_ONLY"
  ).length;
  const notFulfilled = promises.filter(
    (p) => p.status === "NOT_FULFILLED" || p.status === "ROLLED_BACK"
  ).length;
  const avgFulfillment = Math.round(
    promises.reduce((sum, p) => sum + (p.fulfillmentPercent ?? 0), 0) / totalPromises
  );
  const totalAchievements = achievements.length;

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
              AG
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              AAP Governance
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Claims vs delivery, Mann performance, broken promises
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="info">{budget.fiscalYear}</Badge>
          <Badge variant="warning">{metadata.status}</Badge>
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Total Promises"
          value={totalPromises}
          subtitle="Across all categories"
          color="bg-orange-500"
        />
        <MetricCard
          title="Fulfilled"
          value={fulfilled}
          subtitle={`${Math.round((fulfilled / totalPromises) * 100)}% fully delivered`}
          color="bg-green-500"
        />
        <MetricCard
          title="Partially Fulfilled"
          value={partial}
          subtitle="In progress or delayed"
          color="bg-amber-500"
        />
        <MetricCard
          title="Not Fulfilled / Rolled Back"
          value={notFulfilled}
          subtitle={`${Math.round((notFulfilled / totalPromises) * 100)}% broken promises`}
          color="bg-red-500"
        />
      </div>

      {/* Second Metrics Row */}
      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Avg Fulfillment Rate"
          value={`${avgFulfillment}%`}
          subtitle="Across all promises"
          color="bg-blue-500"
        />
        <MetricCard
          title="Key Achievements"
          value={totalAchievements}
          subtitle="Major accomplishments"
          color="bg-indigo-500"
        />
        <MetricCard
          title="Budget Outlay"
          value={`Rs ${(budget.totalOutlay / 1000).toFixed(1)}K Cr`}
          subtitle={`${budget.fiscalYear}`}
          color="bg-emerald-500"
        />
        <MetricCard
          title="Outstanding Debt"
          value={`Rs ${(budget.outstandingDebt / 1000).toFixed(1)}K Cr`}
          subtitle={`${budget.debtToGSDP}% of GSDP`}
          color="bg-rose-500"
        />
      </div>

      {/* Promise Tracker */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Promise Tracker
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              All {totalPromises} key promises tracked by fulfillment status
            </p>
          </div>
          <Badge variant="success">{avgFulfillment}% avg fulfillment</Badge>
        </div>
        <div className="mt-6 h-3 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full rounded-full bg-green-500 transition-all"
            style={{ width: `${avgFulfillment}%` }}
          />
        </div>
        <div className="mt-6 space-y-3">
          {promises.map((p) => (
            <div
              key={p.id}
              className="rounded-lg border border-slate-100 p-4 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      {p.promise}
                    </span>
                    <Badge
                      variant={
                        p.status === "FULFILLED"
                          ? "success"
                          : p.status === "PARTIALLY_FULFILLED" || p.status === "DELAYED_PILOT_ONLY"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {p.status.replace(/_/g, " ")}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {p.deliveryStatus}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                    <span>Category: {p.category}</span>
                    <span>{p.source}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="text-lg font-bold text-slate-700 dark:text-slate-300">
                    {p.fulfillmentPercent}%
                  </span>
                </div>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className={`h-2 rounded-full transition-all ${
                    (p.fulfillmentPercent ?? 0) >= 100
                      ? "bg-green-500"
                      : (p.fulfillmentPercent ?? 0) >= 50
                      ? "bg-amber-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${p.fulfillmentPercent ?? 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Budget Overview & Key Achievements */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Budget Overview */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Budget Overview ({budget.fiscalYear})
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Rs {(budget.totalOutlay / 1000).toFixed(1)}K Cr outlay
          </p>
          <div className="mt-6 space-y-4">
            <ProgressBar
              label="Revenue Deficit"
              value={budget.revenueDeficit}
              max={5}
              color="bg-orange-500"
            />
            <ProgressBar
              label="Fiscal Deficit"
              value={budget.fiscalDeficit}
              max={6}
              color="bg-red-500"
            />
            <ProgressBar
              label="Debt-to-GSDP"
              value={budget.debtToGSDP}
              max={60}
              color="bg-rose-500"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Projected GSDP</p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Rs {(budget.projectedGSDP / 1000).toFixed(1)}K Cr
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
              <p className="text-xs text-slate-500 dark:text-slate-400">Outstanding Debt</p>
              <p className="text-lg font-bold text-slate-900 dark:text-white">
                Rs {(budget.outstandingDebt / 1000).toFixed(1)}K Cr
              </p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {majorAllocations.slice(0, 6).map((alloc) => (
              <div key={alloc.sector} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">{alloc.sector}</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  Rs {alloc.allocationRsCrore.toLocaleString("en-IN")} Cr
                  {alloc.percentChangeYoY && (
                    <span className="ml-1 text-green-500">+{alloc.percentChangeYoY}%</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Key Achievements
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {totalAchievements} major accomplishments tracked
          </p>
          <div className="mt-6 space-y-6">
            {achievements.map((ach) => (
              <div key={ach.id}>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                  {ach.title}
                </h4>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {ach.description}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {ach.metrics.slice(0, 4).map((m) => (
                    <div
                      key={m.label}
                      className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-700/50"
                    >
                      <p className="text-xs text-slate-500 dark:text-slate-400">{m.label}</p>
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perception Timeline & Issues */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Perception Timeline */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Public Perception Timeline
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Current sentiment: {perception.currentSentiment}
          </p>
          <div className="mt-6 space-y-4">
            {perception.timelines.map((tl) => (
              <div
                key={tl.period}
                className="rounded-lg border-l-4 border-blue-500 bg-slate-50 p-4 dark:bg-slate-700/50"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                    {tl.period}: {tl.description}
                  </h4>
                  {tl.voteShare && (
                    <Badge variant="info">{tl.voteShare}% vote share</Badge>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {tl.keyNarrative}
                </p>
                {tl.turnaroundFactors && tl.turnaroundFactors.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-500 dark:text-slate-400">
                    {tl.turnaroundFactors.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Key Issues
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {(perception.keyIssues ?? []).map((issue) => (
                <Badge key={issue} variant="warning">{issue}</Badge>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Risk Factors
            </h4>
            <ul className="mt-2 list-disc pl-5 text-sm text-red-600 dark:text-red-400">
              {(perception.riskFactors ?? []).map((rf, i) => (
                <li key={i}>{rf}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Opposition Criticism */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Opposition Criticism
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            From Congress, BJP, and expert analysts
          </p>
          <div className="mt-6 space-y-4">
            {oppositionCriticism.map((crit, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
              >
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      crit.party === "CONGRESS"
                        ? "info"
                        : crit.party === "BJP"
                        ? "danger"
                        : "default"
                    }
                  >
                    {crit.party}
                  </Badge>
                  {crit.date && (
                    <span className="text-xs text-slate-400">{crit.date}</span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {crit.source}
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-500 dark:text-slate-400">
                  {crit.keyPoints.map((kp, j) => (
                    <li key={j}>{kp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Timeline */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Policy Timeline
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Key events from {policyTimeline.events[0]?.date} to{" "}
          {policyTimeline.events[policyTimeline.events.length - 1]?.date}
        </p>
        <div className="mt-6 space-y-3">
          {policyTimeline.events.map((event, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-lg border border-slate-100 p-3 dark:border-slate-700/50"
            >
              <div className="flex-shrink-0 w-28 text-right">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {event.date}
                </span>
              </div>
              <div className="flex-1 border-l-2 border-slate-300 pl-4 dark:border-slate-600">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {event.policy}
                </p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {event.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Research Sources
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {metadata.sourceType} — {metadata.researchDate}
        </p>
        <ul className="mt-4 space-y-1">
          {sources.map((src, i) => (
            <li key={i} className="text-sm text-slate-500 dark:text-slate-400">
              {src}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
