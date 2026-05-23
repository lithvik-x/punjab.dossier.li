"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { MetricCard, DataTable, Badge, MiniChart } from "@/components/ui/MetricCard";
import {
  agrarianDistressKPI,
  getSuicideTrend,
  getStubbleBurningTrend,
  getTopPolicyRecommendations,
} from "@/lib/agrarian-distress-data";
import {
  AlertTriangle,
  TrendingUp,
  Users,
  Wheat,
  Droplets,
  Flame,
  Shield,
  Scale,
  CheckCircle,
  XCircle,
} from "lucide-react";

/**
 * Governance Dashboard - Agrarian Distress
 * Punjab's Farming Crisis and the 2027 Election
 */
export default function GovernanceAgrarianDistressPage() {
  const suicideTrend = getSuicideTrend();
  const stubbleTrend = getStubbleBurningTrend();
  const topPolicies = getTopPolicyRecommendations();

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-amber-700 dark:text-amber-400">
                Governance — Agrarian Distress (MP1-Foundational)
              </p>
              <p className="text-sm text-amber-600 dark:text-amber-300">
                Punjab&apos;s farming crisis and the 2027 Election — Farmer debt, suicides, MSP, water crisis, protests
              </p>
            </div>
          </div>

          {/* Key Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <MetricCard
              title="Farmer Suicides (2022)"
              value={agrarianDistressKPI.farmerSuicides.data[3]?.recordedSuicides || 204}
              subtitle="204 in 2022 (157 cultivators + 47 labourers)"
              color="rose"
              icon={<AlertTriangle className="h-6 w-6" />}
            />
            <MetricCard
              title="Cumulative 2023-2026"
              value={agrarianDistressKPI.farmerSuicides.cumulative2023To2026}
              subtitle="Suicides from 2023-24 to Nov 2025-26"
              color="rose"
              icon={<Users className="h-6 w-6" />}
            />
            <MetricCard
              title="Water Crisis"
              value="80%"
              subtitle="Blocks over-exploited (CGWB 2024)"
              color="blue"
              icon={<Droplets className="h-6 w-6" />}
            />
            <MetricCard
              title="Stubble Fires (2024-25)"
              value={agrarianDistressKPI.stubbleBurning.fires2024_25.count.toLocaleString()}
              subtitle="70% decrease from 36,663 in 2023"
              color="orange"
              icon={<Flame className="h-6 w-6" />}
            />
          </div>

          {/* Farmer Debt & 2017 Waiver */}
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">2017 Debt Waiver (Congress)</h4>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-2xl font-bold text-green-600">
                    Rs {agrarianDistressKPI.debtWaivers["2017"].waiverAmount.toLocaleString()} crore
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">Total waiver for small/marginal farmers (June 2017)</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">AAP Current Status</h4>
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-lg font-semibold text-red-600">
                    {agrarianDistressKPI.debtWaivers.currentAAP.formalWaiver}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">No formal waiver announced as of May 2026</p>
              </CardContent>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* Farmer Suicide Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Farmer Suicide Trend (2019-2022)
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <DataTable
                headers={["Year", "Suicides", "Note"]}
                rows={agrarianDistressKPI.farmerSuicides.data.map((d) => [
                  d.year.toString(),
                  d.recordedSuicides.toString(),
                  d.cultivators ? `${d.cultivators} cultivators + ${d.labourers} labourers` : d.source,
                ])}
              />
            </div>
            <div>
              <h4 className="font-medium text-slate-600 dark:text-slate-400 mb-2">Trend Visualization</h4>
              <MiniChart
                data={suicideTrend.map((d) => d.suicides)}
                color="rose"
                height={100}
              />
              <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
                <p className="text-sm text-red-700 dark:text-red-400">
                  <span className="font-semibold">Peak Year:</span> 2016 (17.08% in South-Western Punjab)
                </p>
                <p className="text-sm text-red-600 dark:text-red-300 mt-1">
                  National 2022: {agrarianDistressKPI.farmerSuicides.national2022.total.toLocaleString()} farmer/farm
                  labourer suicides (~{agrarianDistressKPI.farmerSuicides.national2022.dailyAverage}/day)
                </p>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* MSP Procurement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="bg-white dark:bg-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-white">
              <Wheat className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-slate-700 dark:text-slate-300">MSP Procurement 2026</p>
              <p className="text-sm text-slate-500">Wheat and paddy minimum support prices</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <MetricCard
              title="Wheat Procured"
              value={`${agrarianDistressKPI.mspProcurement.wheat2026.procured} LMT`}
              subtitle={`Target: ${agrarianDistressKPI.mspProcurement.wheat2026.target} LMT`}
              color="emerald"
              icon={<TrendingUp className="h-5 w-5" />}
            />
            <MetricCard
              title="Wheat MSP"
              value={`Rs ${agrarianDistressKPI.mspProcurement.mspRates.wheat}`}
              subtitle="Per quintal (VERIFICATION_NEEDED)"
              color="amber"
            />
            <MetricCard
              title="Paddy MSP"
              value={`Rs ${agrarianDistressKPI.mspProcurement.mspRates.paddy}`}
              subtitle="Per quintal, moisture cap 17%"
              color="amber"
            />
            <MetricCard
              title="National Disbursed"
              value={`Rs ${agrarianDistressKPI.mspProcurement.national.disbursed.toLocaleString()} crore`}
              subtitle={`${agrarianDistressKPI.mspProcurement.national.wheatProcured} LMT wheat`}
              color="blue"
            />
          </div>

          <Card className="bg-amber-50 dark:bg-amber-900/20">
            <CardContent>
              <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Structural MSP Issues</h4>
              <ul className="space-y-1">
                {agrarianDistressKPI.mspProcurement.structuralIssues.map((issue, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-amber-600 dark:text-amber-300">
                    <span className="text-amber-500">→</span>
                    {issue}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Card>
      </motion.div>

      {/* Groundwater Crisis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
              <Droplets className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-blue-700 dark:text-blue-400">Groundwater Crisis</p>
              <p className="text-sm text-blue-600 dark:text-blue-300">Punjab&apos;s existential water threat</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <MetricCard
              title="Worst Decline Rate"
              value={`${agrarianDistressKPI.groundwater.declineRate.worstArea} cm/yr`}
              subtitle="In some areas"
              color="rose"
            />
            <MetricCard
              title="Over-exploited Blocks"
              value={`${agrarianDistressKPI.groundwater.overExploitedBlocks.percentage}%`}
              subtitle="Of Punjab blocks"
              color="rose"
            />
            <MetricCard
              title="Water Exhaustion"
              value={agrarianDistressKPI.groundwater.waterExhaustionTimeline.year}
              subtitle="If current trends continue"
              color="rose"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Primary Driver</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{agrarianDistressKPI.groundwater.primaryDriver}</p>
              </CardContent>
            </Card>
            <Card className="bg-red-100 dark:bg-red-900/30">
              <CardContent>
                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Malwa Cancer Rates</h4>
                <p className="text-2xl font-bold text-red-600">{agrarianDistressKPI.groundwater.malwaCancer.ratePer100k}</p>
                <p className="text-sm text-red-600 dark:text-red-300">
                  per 100,000 — linked to {agrarianDistressKPI.groundwater.malwaCancer.linkedContaminants.join(", ")}
                </p>
              </CardContent>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* Stubble Burning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-orange-700 dark:text-orange-400">Stubble Burning Crisis</p>
              <p className="text-sm text-orange-600 dark:text-orange-300">Farmers caught between law and economics</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <MetricCard
              title="2024-25 Fires"
              value={agrarianDistressKPI.stubbleBurning.fires2024_25.count.toLocaleString()}
              subtitle={`${agrarianDistressKPI.stubbleBurning.fires2024_25.changeFrom2023}% decrease from 2023`}
              color="emerald"
            />
            <MetricCard
              title="Wheat Season 2025"
              value={agrarianDistressKPI.stubbleBurning.wheatSeason2025.events.toLocaleString()}
              subtitle="Fire events (ISRO data)"
              color="orange"
            />
          </div>

          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Historical Trend</h4>
          <div className="mb-4">
            <MiniChart
              data={stubbleTrend.map((d) => d.fires)}
              color="amber"
              height={80}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Farmer Demands</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">BKU Ugrahan:</span>
                    <Badge variant="warning">Rs {agrarianDistressKPI.stubbleBurning.farmerDemands.bkuUgrahan.amount}/acre</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">SKM:</span>
                    <Badge variant="warning">Rs {agrarianDistressKPI.stubbleBurning.farmerDemands.skm.amount}/quintal</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-red-100 dark:bg-red-900/30">
              <CardContent>
                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Punitive Measures</h4>
                <div className="space-y-1 text-sm text-red-600 dark:text-red-300">
                  <p>FIR under Section {agrarianDistressKPI.stubbleBurning.punitiveMeasures.firSection}</p>
                  <p>Environmental compensation: Rs {agrarianDistressKPI.stubbleBurning.punitiveMeasures.environmentalCompensation} lakh</p>
                  <p>&quot;Red entries&quot; in land records blocking loans/sale</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* Regional Distress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Regional Distribution of Agrarian Distress
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {agrarianDistressKPI.regionalDistress.mostAffected.map((region) => (
              <Card
                key={region.region}
                className={
                  region.distressLevel === "HIGHEST"
                    ? "border-red-200 dark:border-red-800 bg-red-100 dark:bg-red-900/30"
                    : "border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20"
                }
              >
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-300">{region.region}</h4>
                    <Badge variant={region.distressLevel === "HIGHEST" ? "danger" : "warning"}>
                      {region.distressLevel}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {region.districts.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1">
                    {region.keyIssues.map((issue, idx) => (
                      <li key={idx} className="text-xs text-slate-500 dark:text-slate-400">
                        • {issue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
            <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                    {agrarianDistressKPI.regionalDistress.leastAffected.region}
                  </h4>
                  <Badge variant="success">LOWEST</Badge>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {agrarianDistressKPI.regionalDistress.leastAffected.districts.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {agrarianDistressKPI.regionalDistress.leastAffected.note}
                </p>
              </CardContent>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* Land Pooling Policy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-400">Land Pooling Policy — Key Political Flashpoint</p>
              <p className="text-sm text-purple-600 dark:text-purple-300">
                AAP forced to retreat after unprecedented opposition coalition
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Policy Scope</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Area:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {agrarianDistressKPI.protests.landPooling.scope.acres.toLocaleString()}+ acres
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Cities:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {agrarianDistressKPI.protests.landPooling.scope.cities}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Government Offer</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Return:</span>
                    <Badge variant="success">{agrarianDistressKPI.protests.landPooling.governmentOffer.return}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Annual Comp:</span>
                    <span className="font-semibold text-green-600">
                      {agrarianDistressKPI.protests.landPooling.governmentOffer.annualCompensation}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-red-100 dark:bg-red-900/30 mb-4">
            <CardContent>
              <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Farmer Rejection</h4>
              <p className="text-red-600 dark:text-red-300">
                Labeled &quot;{agrarianDistressKPI.protests.landPooling.farmerRejection.label}&quot; —{' '}
                {agrarianDistressKPI.protests.landPooling.farmerRejection.concern}
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-purple-100 dark:bg-purple-900/30">
              <CardContent>
                <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                  Unprecedented Political Alignment
                </h4>
                <div className="flex flex-wrap gap-2">
                  {agrarianDistressKPI.protests.landPooling.politicalAlignment.map((party) => (
                    <Badge key={party} variant="info">
                      {party}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-purple-600 dark:text-purple-300 mt-2">
                  All provided tactical support to farmer protests against AAP
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Result</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{agrarianDistressKPI.protests.landPooling.result}</p>
              </CardContent>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* Political Positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card className="bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Political Positioning: Who Owns Farmer Issues?
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Congress */}
            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="info">CONGRESS</Badge>
                  <span className="text-sm text-blue-600 dark:text-blue-300">Historical strength being reclaimed</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">2017:</span> {agrarianDistressKPI.politicalPositioning.congress.delivered2017}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">2025-26:</span> {agrarianDistressKPI.politicalPositioning.congress.current2025_26}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {agrarianDistressKPI.politicalPositioning.congress.designatedLeaders.map((leader) => (
                      <Badge key={leader} variant="info">
                        {leader}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AAP */}
            <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="danger">AAP</Badge>
                  <span className="text-sm text-red-600 dark:text-red-300">Farmer perception: Betrayed</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">2022 rise:</span> {agrarianDistressKPI.politicalPositioning.aap.rise2022}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">Reality:</span> {agrarianDistressKPI.politicalPositioning.aap.currentReality}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* BJP */}
            <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="warning">BJP</Badge>
                  <span className="text-sm text-orange-600 dark:text-orange-300">2025 pivot from 2020-21 stance</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">2020-21:</span> {agrarianDistressKPI.politicalPositioning.bjp.stance2020_21}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">2025:</span> {agrarianDistressKPI.politicalPositioning.bjp.pivot2025}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SAD */}
            <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="warning">SAD</Badge>
                  <span className="text-sm text-yellow-600 dark:text-yellow-300">Dilemma on 2027 positioning</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">2020-21:</span> {agrarianDistressKPI.politicalPositioning.sad.stance2020_21}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium">Current:</span> {agrarianDistressKPI.politicalPositioning.sad.currentPosition}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* Policy Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">
            Top Policy Recommendations (Vote Impact)
          </h3>
          <div className="space-y-4">
            {topPolicies.map((policy, idx) => (
              <Card key={idx} className="border-green-200 dark:border-green-800 bg-white dark:bg-slate-800">
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300">{policy.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{policy.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Strategic Recommendations for Congress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        <Card className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20">
          <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-4">
            Strategic Recommendations for Congress
          </h3>
          <div className="grid gap-3 md:grid-cols-2">
            {agrarianDistressKPI.strategicRecommendations.map((rec) => (
              <Card key={rec.number} className="bg-white dark:bg-slate-800">
                <CardContent>
                  <div className="flex items-start gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-bold">
                      {rec.number}
                    </span>
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-300">{rec.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{rec.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Data Sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        <Card className="bg-slate-50 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Data Sources</h4>
          <div className="grid gap-2 md:grid-cols-2 text-sm">
            {agrarianDistressKPI.sources.slice(0, 10).map((source) => (
              <div key={source.id} className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
                <Badge variant="default">{source.source}</Badge>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded bg-amber-100 dark:bg-amber-900/30">
            <p className="text-sm text-amber-700 dark:text-amber-400">
              <span className="font-semibold">Key Data Gaps:</span> Punjab farmer debt average (2025-26), Number excluded from 2017 waiver, BJP farmer vote share (2022), AAP Malwa vote share (2022)
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
