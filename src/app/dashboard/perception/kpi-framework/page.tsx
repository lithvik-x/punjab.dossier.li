"use client";

import { Badge, DataTable, MetricCard } from "@/components/ui/MetricCard";
import {
  leadingIndicators,
  laggingIndicators,
  organizationalKPIs,
  electoralKPIs,
  communicationKPIs,
} from "@/lib/campaign-kpi-risk-data";
import {
  CAMPAIGN_PHASES,
  PHASE_WISE_KPIS,
  REPORTING_CADENCE,
  KPI_FRAMEWORK_RISKS,
} from "@/lib/phase-wise-kpi-data";

export default function KpiFrameworkPage() {
  const totalPhases = CAMPAIGN_PHASES.length;
  const totalKPIs = PHASE_WISE_KPIS.length;
  const orgKPIsCount = organizationalKPIs.length;
  const electoralKPIsCount = electoralKPIs.length;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
              📈
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              KPI Framework
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Leading/lagging indicators, organizational KPIs
          </p>
        </div>
        <Badge variant="info">40 Total KPIs</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Campaign Phases"
          value={totalPhases}
          subtitle="Foundation to Post-Election"
          color="bg-emerald-500"
        />
        <MetricCard
          title="Active KPIs"
          value={totalKPIs}
          subtitle="Across all 5 phases"
          color="bg-blue-500"
        />
        <MetricCard
          title="Organizational KPIs"
          value={orgKPIsCount}
          subtitle="Worker, volunteer, resource"
          color="bg-amber-500"
        />
        <MetricCard
          title="Electoral KPIs"
          value={electoralKPIsCount}
          subtitle="Vote share, seats, margins"
          color="bg-purple-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Campaign Phases
          </h3>
          <div className="mt-4 space-y-3">
            {CAMPAIGN_PHASES.map((phase) => {
              const phaseKpis = PHASE_WISE_KPIS.filter((k) => k.phase === phase.phase);
              return (
                <div
                  key={phase.phase}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                        {phase.phase}
                      </span>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                        {phase.name}
                      </h4>
                    </div>
                    <Badge variant="info">{phaseKpis.length} KPIs</Badge>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{phase.period}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {phase.strategicObjective}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Leading vs Lagging Indicators
          </h3>

          <div className="mb-6">
            <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Leading Indicators
            </h4>
            <div className="space-y-2">
              {leadingIndicators.map((li) => (
                <div
                  key={li.category}
                  className="rounded-lg border border-blue-100 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
                      {li.category}
                    </span>
                    <span className="text-xs text-blue-500">{li.whyTheyLead}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {li.indicators.map((ind) => (
                      <span
                        key={ind}
                        className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-800 dark:text-blue-300"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Lagging Indicators
            </h4>
            <div className="space-y-2">
              {laggingIndicators.map((li) => (
                <div
                  key={li.category}
                  className="rounded-lg border border-amber-100 bg-amber-50 p-3 dark:border-amber-800 dark:bg-amber-900/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-amber-700 dark:text-amber-400">
                      {li.category}
                    </span>
                    <span className="text-xs text-amber-500">{li.whyTheyLag}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {li.indicators.map((ind) => (
                      <span
                        key={ind}
                        className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-600 dark:bg-amber-800 dark:text-amber-300"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Organizational KPIs
          </h3>
          <div className="space-y-3">
            {organizationalKPIs.map((kpi) => (
              <div
                key={kpi.kpi}
                className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {kpi.kpi}
                  </span>
                  <Badge variant="info">{kpi.target}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">{kpi.definition}</p>
                <p className="mt-1 text-xs text-slate-400">Frequency: {kpi.frequency}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Electoral KPIs
          </h3>
          <div className="space-y-3">
            {electoralKPIs.map((kpi) => (
              <div
                key={kpi.kpi}
                className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {kpi.kpi}
                  </span>
                  <Badge variant="success">{kpi.target}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">{kpi.definition}</p>
                <p className="mt-1 text-xs text-slate-400">Frequency: {kpi.frequency}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Communication KPIs
          </h3>
          <div className="space-y-3">
            {communicationKPIs.map((kpi) => (
              <div
                key={kpi.kpi}
                className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {kpi.kpi}
                  </span>
                  <Badge variant="info">{kpi.target}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">{kpi.definition}</p>
                <p className="mt-1 text-xs text-slate-400">Frequency: {kpi.frequency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Reporting Cadence
          </h3>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Phase", "Frequency", "Participants", "Escalation"]}
              rows={REPORTING_CADENCE.map((rc) => [
                `Phase ${rc.phase}`,
                <Badge key={rc.phase} variant="info">{rc.reviewFrequency}</Badge>,
                rc.participants.join(", "),
                rc.escalationPath,
              ])}
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            KPI Framework Risks
          </h3>
          <div className="mt-4 space-y-3">
            {KPI_FRAMEWORK_RISKS.map((risk) => (
              <div
                key={risk.id}
                className={`rounded-lg border p-3 ${
                  risk.severity === "critical"
                    ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                    : risk.severity === "high"
                      ? "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20"
                      : "border-slate-200 dark:border-slate-700"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {risk.risk}
                  </span>
                  <Badge
                    variant={
                      risk.severity === "critical"
                        ? "danger"
                        : risk.severity === "high"
                          ? "warning"
                          : "info"
                    }
                  >
                    {risk.severity}
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">{risk.impactDescription}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  Mitigation: {risk.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Phase-Wise KPI Snapshot
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Select KPIs from each campaign phase
        </p>
        <div className="mt-4 space-y-6">
          {CAMPAIGN_PHASES.map((phase) => {
            const phaseKpis = PHASE_WISE_KPIS.filter((k) => k.phase === phase.phase).slice(0, 4);
            return (
              <div key={phase.phase}>
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                    {phase.phase}
                  </span>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                    {phase.name}
                  </h4>
                  <span className="text-xs text-slate-500">({phase.period})</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {phaseKpis.map((kpi) => (
                    <div
                      key={kpi.id}
                      className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">{kpi.id}</span>
                        <Badge
                          variant={
                            kpi.category === "infrastructure"
                              ? "info"
                              : kpi.category === "human-resources"
                                ? "warning"
                                : "default"
                          }
                        >
                          {kpi.category}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {kpi.kpi}
                      </p>
                      <p className="text-xs text-slate-500">
                        Target: {kpi.target.value} {kpi.target.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
