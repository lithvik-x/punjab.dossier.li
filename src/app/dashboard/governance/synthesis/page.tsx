"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";
import {
  synthesisGovernanceData,
  KEY_SYNTHESIS_METRICS,
  crossReferenceValidation,
  qualityValidation,
  gapAnalysis,
} from "@/lib/synthesis-data";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

/**
 * Governance Dashboard - Synthesis Intelligence
 * Cross-referenced governance crisis metrics and validation
 */
export default function GovernanceSynthesisPage() {
  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">
              Governance — Synthesis Intelligence
            </p>
            <p className="text-sm text-red-600 dark:text-red-300">
              Governance Crisis Metrics — Synthesized from s1-s4 Cross-Reference
            </p>
          </div>
        </div>
      </div>

      {/* Governance Crisis Synthesis */}
      <div className="mb-6 rounded-lg bg-gradient-to-r from-red-50 to-orange-50 p-4 dark:from-red-900/20 dark:to-orange-900/20">
        <h3 className="mb-3 text-lg font-semibold text-red-700 dark:text-red-400">
          Synthesis Intelligence: Governance Crisis Metrics
        </h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <div className="text-xs text-slate-500">Youth Unemployment</div>
            <div className="text-2xl font-bold text-red-600">{synthesisGovernanceData.youthUnemployment.percentage}%</div>
            <div className="text-xs text-slate-400">Age: {synthesisGovernanceData.youthUnemployment.ageGroup}</div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <div className="text-xs text-slate-500">Groundwater Crisis</div>
            <div className="text-2xl font-bold text-blue-600">{synthesisGovernanceData.groundwater.overExploitedBlocks}/{synthesisGovernanceData.groundwater.totalBlocks}</div>
            <div className="text-xs text-slate-400">blocks over-exploited</div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <div className="text-xs text-slate-500">Farmer Debt</div>
            <div className="text-2xl font-bold text-amber-600">{synthesisGovernanceData.farmerDebt.averagePerHousehold}</div>
            <div className="text-xs text-slate-400">{synthesisGovernanceData.farmerDebt.familiesInDebt} in debt</div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <div className="text-xs text-slate-500">Drug Users</div>
            <div className="text-2xl font-bold text-purple-600">{synthesisGovernanceData.drugCrisis.users}</div>
            <div className="text-xs text-slate-400">Overdose deaths: {synthesisGovernanceData.drugCrisis.overdoseDeaths2024}</div>
          </div>
        </div>
      </div>

      {/* Governance Key Metrics from Synthesis */}
      <div className="mb-6 rounded-lg bg-slate-50 p-4 dark:bg-slate-800/50">
        <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Governance Metrics (Synthesized from s1 Cross-Reference)
        </h4>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {KEY_SYNTHESIS_METRICS
            .filter(m => m.category === "Governance")
            .map((metric) => (
              <div key={metric.id} className="flex items-start gap-2 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-700">
                <div className="flex flex-col items-center">
                  <span className={`h-2 w-2 rounded-full ${
                    metric.status === "CORROBORATED" ? "bg-green-500" :
                    metric.status === "PARTIAL" ? "bg-yellow-500" : "bg-red-500"
                  }`}></span>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-500">{metric.metric}</div>
                  <div className="text-lg font-bold text-slate-800 dark:text-slate-200">{metric.value}</div>
                  <div className="text-xs text-slate-400">Source: {metric.source}</div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Quality Validation Summary */}
      <div className="mb-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
        <h4 className="mb-3 text-sm font-semibold text-green-700 dark:text-green-400">
          Quality Validation Summary (s3)
        </h4>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
            <div className="text-xs text-slate-500">Total Documents</div>
            <div className="text-xl font-bold text-indigo-600">{qualityValidation.scope.total}</div>
            <div className="text-xs text-slate-400">Pass Rate: {qualityValidation.passRate}%</div>
          </div>
          <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
            <div className="text-xs text-slate-500">Track A HIGH</div>
            <div className="text-xl font-bold text-green-600">{qualityValidation.trackASummary.high}/{qualityValidation.trackASummary.total}</div>
          </div>
          <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
            <div className="text-xs text-slate-500">Track B HIGH</div>
            <div className="text-xl font-bold text-green-600">{qualityValidation.trackBSummary.high}/{qualityValidation.trackBSummary.total}</div>
          </div>
          <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
            <div className="text-xs text-slate-500">Documents Requiring Revision</div>
            <div className="text-xl font-bold text-amber-600">{qualityValidation.documentsRequiringRevision.length}</div>
          </div>
        </div>
      </div>

      {/* Cross Reference Validation */}
      <div className="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
        <h4 className="mb-3 text-sm font-semibold text-blue-700 dark:text-blue-400">
          Cross-Reference Validation (s1)
        </h4>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Corroborated</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{crossReferenceValidation.corroboratedFindings.length}</div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Partial</span>
            </div>
            <div className="text-2xl font-bold text-yellow-600">{crossReferenceValidation.contradictoryFindings.length}</div>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Contradicted</span>
            </div>
            <div className="text-2xl font-bold text-red-600">{crossReferenceValidation.methodologyGaps.length}</div>
          </div>
        </div>
      </div>

      {/* Gap Analysis */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Gap Analysis (s4)
        </h4>
        <DataTable
          headers={["Category", "Gap", "Severity", "Recommendation"]}
          rows={gapAnalysis.gapSeverityMatrix.map((gap) => [
            gap.category,
            gap.gap,
            <Badge key={gap.gap} variant={gap.severity === "HIGH" ? "danger" : gap.severity === "MEDIUM" ? "warning" : "default"}>
              {gap.severity}
            </Badge>,
            gap.remediationEffort,
          ])}
        />
      </div>
    </div>
  );
}
