"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, MetricCard } from "@/components/ui/MetricCard";
import { Trophy } from "lucide-react";
import {
  uniformSwingTable,
  uniformSwingThresholdForMajority,
  regionalSwingRequirements,
  segmentSwingEntries,
  mostLikelyScenario,
  scenarioMatrix,
  tippingPointVariables,
  historicalSwingData,
  turnoutImpactAnalysis,
} from "@/lib/turnout-swing-scenarios-data";

export default function VictoryPathwaysPage() {
  const regionalSummary = [
    {
      region: "Malwa",
      seats: 69,
      data: regionalSwingRequirements.find((r) => r.region === "Malwa"),
    },
    {
      region: "Majha",
      seats: 25,
      data: regionalSwingRequirements.find((r) => r.region === "Majha"),
    },
    {
      region: "Doaba",
      seats: 23,
      data: regionalSwingRequirements.find((r) => r.region === "Doaba"),
    },
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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-lg">
              <Trophy className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Victory Pathways
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Three strategic routes to majority
          </p>
        </div>
        <Badge variant="info">Swing Analysis</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Swing Threshold"
          value={`+${uniformSwingThresholdForMajority} pp`}
          subtitle="Uniform swing needed for 59 seats"
          color="amber"
        />
        <MetricCard
          title="Most Likely Outcome"
          value={mostLikelyScenario.mostLikelyOutcome}
          subtitle="Congress seat range"
          color="blue"
        />
        <MetricCard
          title="P(59+ Seats)"
          value={mostLikelyScenario.probability59Seats}
          subtitle="Probability of majority"
          color="emerald"
        />
        <MetricCard
          title="P(70+ Seats)"
          value={mostLikelyScenario.probability70Seats}
          subtitle="Probability of landslide"
          color="purple"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            label: "Modest Swing",
            key: "modestSwing" as const,
            swing: "+5-8 pp",
            seats: `${scenarioMatrix.modestSwing.congressSeatRange.low}-${scenarioMatrix.modestSwing.congressSeatRange.high}`,
            turnout: "Low turnout",
            description:
              "Congress reclaims traditional strongholds in Doaba and Majha but struggles in Malwa. AAP retains core Jat Sikh support.",
            color: "amber",
            borderColor: "border-amber-500",
          },
          {
            label: "Full Anti-Incumbency",
            key: "fullAntiIncumbency" as const,
            swing: "+8-10 pp",
            seats: `${scenarioMatrix.fullAntiIncumbency.congressSeatRange.low}-${scenarioMatrix.fullAntiIncumbency.congressSeatRange.high}`,
            turnout: "Baseline turnout",
            description:
              "Historical anti-incumbency cycle activates. AAP loses 45-60 seats from its 2022 tally. Congress crosses 50 seat mark.",
            color: "orange",
            borderColor: "border-orange-500",
          },
          {
            label: "Strong Wave / AAP Collapse",
            key: "strongWave" as const,
            swing: "+12-15 pp",
            seats: `${scenarioMatrix.strongWave.congressSeatRange.low}-${scenarioMatrix.strongWave.congressSeatRange.high}`,
            turnout: "High turnout",
            description:
              "Replicates 2017-scale wave. Major scandal or farmer union endorsement triggers disproportionate swing across all regions.",
            color: "emerald",
            borderColor: "border-emerald-500",
          },
        ].map((pathway) => (
          <Card key={pathway.key} className={`border-l-4 ${pathway.borderColor}`}>
            <CardContent className="pt-5">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {pathway.label}
                </h3>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg bg-${pathway.color}-500 text-xs font-bold text-white`}
                >
                  {pathway.swing.includes("5") ? "1" : pathway.swing.includes("8") ? "2" : "3"}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Required Swing</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {pathway.swing}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Seat Range</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {pathway.seats}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Turnout Scenario</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {pathway.turnout}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                {pathway.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Regional Requirements
            </h3>
            <div className="mt-4 space-y-4">
              {regionalSummary.map((r) => (
                <div
                  key={r.region}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {r.region}
                    </span>
                    <span className="text-xs text-slate-500">{r.seats} seats</span>
                  </div>
                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Required swing</span>
                      <span className="font-semibold text-amber-600 dark:text-amber-400">
                        {r.data?.requiredRegionalSwing ?? "—"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Target seats</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {r.data?.requiredSeats ?? "—"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Achievability</span>
                      <Badge
                        variant={
                          r.data?.achievability === "ACHIEVABLE"
                            ? "success"
                            : r.data?.achievability === "HARDEST"
                              ? "danger"
                              : "warning"
                        }
                      >
                        {r.data?.achievability ?? "—"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Uniform Swing Table
            </h3>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="pb-2 text-left font-medium text-slate-500 dark:text-slate-400">
                      Swing
                    </th>
                    <th className="pb-2 text-left font-medium text-slate-500 dark:text-slate-400">
                      INC %
                    </th>
                    <th className="pb-2 text-left font-medium text-slate-500 dark:text-slate-400">
                      AAP %
                    </th>
                    <th className="pb-2 text-left font-medium text-slate-500 dark:text-slate-400">
                      Seats
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {uniformSwingTable.slice(0, 5).map((row) => (
                    <tr
                      key={row.swingPercent}
                      className="border-b border-slate-100 dark:border-slate-700"
                    >
                      <td className="py-2 font-medium text-slate-700 dark:text-slate-300">
                        +{row.swingPercent} pp
                      </td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">
                        {row.incVotePercent}%
                      </td>
                      <td className="py-2 text-slate-600 dark:text-slate-400">
                        {row.aapVotePercent}%
                      </td>
                      <td className="py-2 font-semibold text-amber-600 dark:text-amber-400">
                        {row.estIncSeats}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Majority threshold: 59 seats at +10 pp uniform swing
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Historical Context
            </h3>
            <div className="mt-4 space-y-3">
              {historicalSwingData.transitions.map((t) => (
                <div
                  key={t.fromYear}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {t.fromYear}→{t.toYear}
                    </span>
                    <span className="text-xs text-slate-500">{t.magnitude}</span>
                  </div>
                  <div className="mt-1 flex gap-4 text-sm">
                    <span className="text-slate-500 dark:text-slate-400">
                      Congress swing:{" "}
                      <span
                        className={`font-semibold ${
                          t.congressSwing > 0 ? "text-emerald-500" : "text-rose-500"
                        }`}
                      >
                        {t.congressSwing > 0 ? "+" : ""}
                        {t.congressSwing} pp
                      </span>
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      Winner swing:{" "}
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        +{t.winnerSwing}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs italic text-slate-400">
              {historicalSwingData.keyInsight}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Segment-Specific Swing
            </h3>
            <div className="space-y-3">
              {segmentSwingEntries.slice(0, 6).map((segment) => (
                <div
                  key={segment.segment}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {segment.segment}
                      </span>
                      <span className="ml-2 text-xs text-slate-400">
                        {segment.sizePercentElectorate} of electorate
                      </span>
                    </div>
                    <Badge
                      variant={
                        segment.volatility === "HIGH"
                          ? "danger"
                          : segment.volatility === "MODERATE"
                            ? "warning"
                            : "info"
                      }
                    >
                      {segment.volatility}
                    </Badge>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">
                      Projected swing
                    </span>
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      {segment.projected2027Swing}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{segment.notes}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
              Turnout Impact on Seats
            </h3>
            <div className="space-y-3">
              {turnoutImpactAnalysis.map((item) => (
                <div
                  key={item.scenario}
                  className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.scenario}
                    </span>
                    <Badge
                      variant={
                        item.congressImpact === "HIGH POSITIVE"
                          ? "success"
                          : item.congressImpact === "NEGATIVE" ||
                              item.congressImpact === "SLIGHT NEGATIVE"
                            ? "danger"
                            : item.congressImpact === "MODERATE POSITIVE"
                              ? "info"
                              : "default"
                      }
                    >
                      {item.congressImpact}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Tipping Point Variables
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tippingPointVariables.map((v) => (
              <div
                key={v.variable}
                className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {v.variable}
                </h4>
                <div className="mt-2 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <p>
                    <span className="text-emerald-500">Pro-Congress:</span>{" "}
                    {v.proCongressShift}
                  </p>
                  {v.proAapShift !== "—" && (
                    <p>
                      <span className="text-rose-400">Pro-AAP:</span>{" "}
                      {v.proAapShift}
                    </p>
                  )}
                </div>
                <div className="mt-2">
                  <Badge
                    variant={
                      v.direction === "PRO-CONGRESS"
                        ? "success"
                        : v.direction === "PRO-AAP"
                          ? "danger"
                          : v.direction === "UNPREDICTABLE"
                            ? "warning"
                            : "default"
                    }
                  >
                    {v.direction}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
