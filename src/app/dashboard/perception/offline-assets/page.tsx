"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable, MetricCard, ProgressBar } from "@/components/ui/MetricCard";
import { Package } from "lucide-react";
import {
  partyOfficeNetwork,
  infrastructureAssessmentScoring,
  karyakartaTierModel,
  consolidatedAssetScorecard,
  regionalAssetDeployment,
  resourcePriorities,
  bjpOrganizationalComparison,
  activationProtocol,
} from "@/lib/offline-perception-assets-data";

export default function OfflineAssetsPage() {
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500 text-white shadow-lg">
              <Package className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Offline Assets
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Karyakarta network inventory
          </p>
        </div>
        <Badge variant="info">Congress-Verified</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="District Offices"
          value={partyOfficeNetwork.districtOffices.count}
          subtitle="All Punjab districts"
          color="cyan"
        />
        <MetricCard
          title="Block Offices"
          value={partyOfficeNetwork.blockOffices.count}
          subtitle="Critical mid-tier execution hubs"
          color="cyan"
        />
        <MetricCard
          title="Booth-Level Presence"
          value={partyOfficeNetwork.boothLevel.estimatedCount.toLocaleString()}
          subtitle="Estimated coverage points"
          color="cyan"
        />
        <MetricCard
          title="Active Karyakartas"
          value="45K-60K"
          subtitle="Tier 1 core activists"
          color="cyan"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Infrastructure Assessment Scoring
            </h3>
            <div className="mt-4 space-y-4">
              {infrastructureAssessmentScoring.map((item) => (
                <div key={item.level}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.level}
                    </span>
                    <Badge
                      variant={
                        item.priority === "Maintain"
                          ? "success"
                          : item.priority === "Strengthen"
                            ? "info"
                            : item.priority === "Activate"
                              ? "warning"
                              : "danger"
                      }
                    >
                      {item.priority}
                    </Badge>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>Reach: {item.reach}/5</span>
                    <span>Credibility: {item.credibility}/5</span>
                    <span>Activatability: {item.activatability}/5</span>
                  </div>
                  <ProgressBar
                    label="Total Score"
                    value={item.totalScore}
                    max={15}
                    color={
                      item.totalScore >= 12
                        ? "emerald"
                        : item.totalScore >= 10
                          ? "blue"
                          : "amber"
                    }
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Karyakarta Tier Model
            </h3>
            <div className="mt-4 space-y-4">
              {karyakartaTierModel.map((tier) => (
                <div
                  key={tier.tier}
                  className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900 dark:text-white">
                      Tier {tier.tier}: {tier.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      {tier.estimatedCount}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {tier.description}
                  </p>
                  <span className="mt-1 inline-block text-xs text-slate-400">
                    {tier.estimatedPercentage}
                  </span>
                  {tier.strategicNote && (
                    <p className="mt-2 text-xs italic text-slate-400 dark:text-slate-500">
                      {tier.strategicNote}
                    </p>
                  )}
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
              Consolidated Asset Scorecard
            </h3>
            <div className="mt-4">
              <DataTable
                headers={["Category", "Reach", "Cred.", "Activ.", "RCS", "Deploy."]}
                rows={consolidatedAssetScorecard.map((a) => [
                  a.category,
                  a.reach.toString(),
                  a.credibility.toString(),
                  a.activatability.toString(),
                  a.rcsScore.toString(),
                  a.deployability,
                ])}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Regional Deployment Strategy
            </h3>
            <div className="mt-4 space-y-3">
              {regionalAssetDeployment.map((region) => (
                <div
                  key={region.region}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {region.region}
                  </h4>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-600 dark:text-slate-300">Assets: </span>
                    {region.primaryAssets.join(", ")}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                    {region.priorityDeployment}
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
              BJP Organizational Comparison
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                <h4 className="font-semibold text-green-700 dark:text-green-400">
                  BJP Strengths
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-green-600 dark:text-green-300">
                  {bjpOrganizationalComparison.bjpStrengths.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
                <h4 className="font-semibold text-red-700 dark:text-red-400">
                  Congress Weaknesses
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-red-600 dark:text-red-300">
                  {bjpOrganizationalComparison.congressWeaknesses.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Resource Priorities
            </h3>
            <div className="mt-4 space-y-3">
              {resourcePriorities.map((rp) => (
                <div
                  key={rp.item}
                  className="rounded-lg border border-slate-200 p-3 dark:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-900 dark:text-white">
                      {rp.item}
                    </h4>
                    <Badge
                      variant={
                        rp.priority === "Highest"
                          ? "danger"
                          : rp.priority === "High"
                            ? "warning"
                            : rp.priority === "Medium"
                              ? "info"
                              : "default"
                      }
                    >
                      {rp.priority}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {rp.description}
                  </p>
                  <div className="mt-1 flex gap-3 text-xs text-slate-400 dark:text-slate-500">
                    <span>Cost: {rp.cost}</span>
                    <span>Impact: {rp.impact}</span>
                    <span>Timeline: {rp.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Activation Protocol
          </h3>
          <div className="mt-4 space-y-2">
            {activationProtocol.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                  {i + 1}
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
