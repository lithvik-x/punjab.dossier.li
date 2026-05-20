"use client";

import { MetricCard, DataTable, Badge, MiniChart, ProgressBar } from "@/components/ui/MetricCard";
import {
  agrarianDistressKPI,
  getSuicideTrend,
  getStubbleBurningTrend,
  getTopPolicyRecommendations,
} from "@/lib/agrarian-distress-data";
import {
  economicPerformanceKPI,
  getAAPFundingBreakdown,
  getCongressAttackLines,
} from "@/lib/edu-health-performance-data";
import {
  lawOrderWelfareData,
  getEncounterTrendForChart,
  getMostAffectedDistricts,
  getTopAttackLines,
  getDrugSeizureSummary,
  getBulletInjuryRate,
  getNHRCStatus,
} from "@/lib/laworder-welfare-data";
import {
  synthesisGovernanceData,
  KEY_SYNTHESIS_METRICS,
  crossReferenceValidation,
  qualityValidation,
  gapAnalysis,
} from "@/lib/synthesis-data";
import {
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Users,
  Wheat,
  Droplets,
  Flame,
  Shield,
  Scale,
  CheckCircle,
  XCircle,
  Banknote,
  Building2,
  Briefcase,
  DollarSign,
  Target,
  AlertOctagon,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  Crosshair,
  Skull,
  ShieldAlert,
  FileWarning,
  Eye,
  Ban,
  Zap,
  Siren,
  TrendingDownIcon,
  Frown,
  BarChart3,
  Calendar,
  UsersRound,
  MapPin,
  Factory,
  Bus,
  Trash2,
  TrafficCone,
} from "lucide-react";
import {
  promiseDeliveryKPI,
  getSeatLossTrend,
  getVoteShareTrend,
  getNDPSCasesTrend,
  getRegionalSeatChange,
  getAAPAttackLines,
} from "@/lib/promise-delivery-data";
import {
  localIssuesMalwaKPI,
  getCrisisIntensityColor,
  getOpportunityVariant,
  getTopAttackLines as getMalwaAttackLines,
  getCriticalIssues,
  getHighIssues,
  getHighOpportunityConstituencies,
  getDrugCrisisStats,
  getCancerCrisisStats,
  getUnemploymentStats,
} from "@/lib/governance-local-issues-malwa-data";
import { serviceDeliveryGapsData } from "@/lib/service-delivery-gaps-data";
import {
  puadhLocalIssuesKPI,
  getPuadhCriticalIssues,
  getPuadhStrategicImplications,
} from "@/lib/puadh-local-issues-data";
import { infraFinanceKPI } from "@/lib/governance-infra-finance-data";

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
      <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
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
            color="bg-red-500"
            icon={<AlertTriangle className="h-6 w-6" />}
          />
          <MetricCard
            title="Cumulative 2023-2026"
            value={agrarianDistressKPI.farmerSuicides.cumulative2023To2026}
            subtitle="Suicides from 2023-24 to Nov 2025-26"
            color="bg-red-600"
            icon={<Users className="h-6 w-6" />}
          />
          <MetricCard
            title="Water Crisis"
            value="80%"
            subtitle="Blocks over-exploited (CGWB 2024)"
            color="bg-blue-500"
            icon={<Droplets className="h-6 w-6" />}
          />
          <MetricCard
            title="Stubble Fires (2024-25)"
            value={agrarianDistressKPI.stubbleBurning.fires2024_25.count.toLocaleString()}
            subtitle="70% decrease from 36,663 in 2023"
            color="bg-orange-500"
            icon={<Flame className="h-6 w-6" />}
          />
        </div>

        {/* Farmer Debt & 2017 Waiver */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">2017 Debt Waiver (Congress)</h4>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-2xl font-bold text-green-600">
                Rs {agrarianDistressKPI.debtWaivers["2017"].waiverAmount.toLocaleString()} crore
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-1">Total waiver for small/marginal farmers (June 2017)</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">AAP Current Status</h4>
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <span className="text-lg font-semibold text-red-600">
                {agrarianDistressKPI.debtWaivers.currentAAP.formalWaiver}
              </span>
            </div>
            <p className="text-sm text-slate-500 mt-1">No formal waiver announced as of May 2026</p>
          </div>
        </div>
      </div>

      {/* Farmer Suicide Trend */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
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
              color="bg-red-500"
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
      </div>

      {/* MSP Procurement */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
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
            color="bg-green-500"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <MetricCard
            title="Wheat MSP"
            value={`Rs ${agrarianDistressKPI.mspProcurement.mspRates.wheat}`}
            subtitle="Per quintal (VERIFICATION_NEEDED)"
            color="bg-yellow-500"
          />
          <MetricCard
            title="Paddy MSP"
            value={`Rs ${agrarianDistressKPI.mspProcurement.mspRates.paddy}`}
            subtitle="Per quintal, moisture cap 17%"
            color="bg-yellow-500"
          />
          <MetricCard
            title="National Disbursed"
            value={`Rs ${agrarianDistressKPI.mspProcurement.national.disbursed.toLocaleString()} crore`}
            subtitle={`${agrarianDistressKPI.mspProcurement.national.wheatProcured} LMT wheat`}
            color="bg-blue-500"
          />
        </div>

        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Structural MSP Issues</h4>
          <ul className="space-y-1">
            {agrarianDistressKPI.mspProcurement.structuralIssues.map((issue, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-amber-600 dark:text-amber-300">
                <span className="text-amber-500">→</span>
                {issue}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Groundwater Crisis */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
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
            color="bg-red-500"
          />
          <MetricCard
            title="Over-exploited Blocks"
            value={`${agrarianDistressKPI.groundwater.overExploitedBlocks.percentage}%`}
            subtitle="Of Punjab blocks"
            color="bg-red-600"
          />
          <MetricCard
            title="Water Exhaustion"
            value={agrarianDistressKPI.groundwater.waterExhaustionTimeline.year}
            subtitle="If current trends continue"
            color="bg-red-700"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Primary Driver</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">{agrarianDistressKPI.groundwater.primaryDriver}</p>
          </div>
          <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Malwa Cancer Rates</h4>
            <p className="text-2xl font-bold text-red-600">{agrarianDistressKPI.groundwater.malwaCancer.ratePer100k}</p>
            <p className="text-sm text-red-600 dark:text-red-300">
              per 100,000 — linked to {agrarianDistressKPI.groundwater.malwaCancer.linkedContaminants.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Stubble Burning */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
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
            color="bg-green-500"
          />
          <MetricCard
            title="Wheat Season 2025"
            value={agrarianDistressKPI.stubbleBurning.wheatSeason2025.events.toLocaleString()}
            subtitle="Fire events (ISRO data)"
            color="bg-orange-500"
          />
        </div>

        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Historical Trend</h4>
        <div className="mb-4">
          <MiniChart
            data={stubbleTrend.map((d) => d.fires)}
            color="bg-orange-500"
            height={80}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
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
          </div>
          <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Punitive Measures</h4>
            <div className="space-y-1 text-sm text-red-600 dark:text-red-300">
              <p>FIR under Section {agrarianDistressKPI.stubbleBurning.punitiveMeasures.firSection}</p>
              <p>Environmental compensation: Rs {agrarianDistressKPI.stubbleBurning.punitiveMeasures.environmentalCompensation} lakh</p>
              <p>&quot;Red entries&quot; in land records blocking loans/sale</p>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Distress */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Regional Distribution of Agrarian Distress
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {agrarianDistressKPI.regionalDistress.mostAffected.map((region) => (
            <div
              key={region.region}
              className={`rounded-lg p-4 ${
                region.distressLevel === "HIGHEST"
                  ? "bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800"
                  : "bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800"
              }`}
            >
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
            </div>
          ))}
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
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
          </div>
        </div>
      </div>

      {/* Land Pooling Policy */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
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
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
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
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
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
          </div>
        </div>

        <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30 mb-4">
          <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Farmer Rejection</h4>
          <p className="text-red-600 dark:text-red-300">
            Labeled &quot;{agrarianDistressKPI.protests.landPooling.farmerRejection.label}&quot; —{' '}
            {agrarianDistressKPI.protests.landPooling.farmerRejection.concern}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-purple-100 p-4 dark:bg-purple-900/30">
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
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Result</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">{agrarianDistressKPI.protests.landPooling.result}</p>
          </div>
        </div>
      </div>

      {/* Political Positioning */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Political Positioning: Who Owns Farmer Issues?
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {/* Congress */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
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
          </div>

          {/* AAP */}
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
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
          </div>

          {/* BJP */}
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
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
          </div>

          {/* SAD */}
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
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
          </div>
        </div>
      </div>

      {/* Policy Recommendations */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-4">
          Top Policy Recommendations (Vote Impact)
        </h3>
        <div className="space-y-4">
          {topPolicies.map((policy, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-green-200 dark:border-green-800"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{policy.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{policy.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Recommendations for Congress */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-4">
          Strategic Recommendations for Congress
        </h3>
        <div className="grid gap-3 md:grid-cols-2">
          {agrarianDistressKPI.strategicRecommendations.map((rec) => (
            <div
              key={rec.number}
              className="rounded-lg bg-white p-4 dark:bg-slate-800"
            >
              <div className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-bold">
                  {rec.number}
                </span>
                <div>
                  <h4 className="font-medium text-slate-700 dark:text-slate-300">{rec.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{rec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Sources */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
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
      </div>

      {/* =============================================== */}
      {/* ECONOMIC PERFORMANCE SECTION */}
      {/* =============================================== */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <Banknote className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">
              Governance — Economic & Fiscal Performance (MP1-Foundational)
            </p>
            <p className="text-sm text-red-600 dark:text-red-300">
              Punjab&apos;s fiscal crisis and economic stagnation — Debt, deficits, unemployment, and the 2027 election
            </p>
          </div>
        </div>

        {/* Key Economic Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="State Debt (2025-26 RE)"
            value={`Rs ${(economicPerformanceKPI.fiscal.debtTrajectory.data[5].debtRsCrore / 100000).toFixed(2)} lakh Cr`}
            subtitle="46.8% of GSDP"
            color="bg-red-500"
            icon={<AlertOctagon className="h-6 w-6" />}
          />
          <MetricCard
            title="Fiscal Deficit (2025-26 RE)"
            value="4.2%"
            subtitle="Above FRBM threshold (3%)"
            color="bg-red-600"
            icon={<TrendingDown className="h-6 w-6" />}
          />
          <MetricCard
            title="Unemployment Rate"
            value="6.1%"
            subtitle="Nearly double national 3.2%"
            color="bg-orange-500"
            icon={<Briefcase className="h-6 w-6" />}
          />
          <MetricCard
            title="GSDP Growth 2025-26"
            value="6.1%"
            subtitle="Below national 7.4%"
            color="bg-yellow-500"
            icon={<TrendingDown className="h-6 w-6" />}
          />
        </div>

        {/* Key Stats Summary Table */}
        <div className="mb-6">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Economic Indicators</h4>
          <DataTable
            headers={["Indicator", "Punjab", "India", "Assessment"]}
            rows={economicPerformanceKPI.keyDataSummary.indicators.map((ind) => [
              ind.indicator,
              ind.punjab?.toString() || "N/A",
              ind.india?.toString() || "N/A",
              ind.assessment,
            ])}
          />
        </div>
      </div>

      {/* Fiscal Crisis Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <AlertOctagon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Fiscal Crisis Assessment</p>
            <p className="text-sm text-slate-500">Expert views on Punjab&apos;s debt situation</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {economicPerformanceKPI.fiscal.fiscalCrisisAssessment.experts.map((expert, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-4 ${
                expert.viewType === "Alarmist"
                  ? "bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800"
                  : expert.viewType === "Optimist"
                  ? "bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800"
                  : "bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800"
              }`}
            >
              <div className="mb-2">
                <Badge
                  variant={
                    expert.viewType === "Alarmist" ? "danger" : expert.viewType === "Optimist" ? "success" : "warning"
                  }
                >
                  {expert.viewType}
                </Badge>
              </div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{expert.expertName}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{expert.affiliation}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 italic">&quot;{expert.keyQuote}&quot;</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">Overall Assessment:</span>{" "}
            {economicPerformanceKPI.fiscal.fiscalCrisisAssessment.overallAssessment}
          </p>
        </div>
      </div>

      {/* Debt Trajectory Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Punjab&apos;s Debt Trajectory</h3>
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div>
            <DataTable
              headers={["Year", "Debt (Rs Crore)", "% of GSDP"]}
              rows={economicPerformanceKPI.fiscal.debtTrajectory.data.map((d) => [
                d.year,
                d.debtRsCrore.toLocaleString(),
                `${d.percentOfGSDP}%`,
              ])}
            />
          </div>
          <div>
            <h4 className="font-medium text-slate-600 dark:text-slate-400 mb-2">Annual Debt Increase History</h4>
            <div className="space-y-2">
              {economicPerformanceKPI.fiscal.debtTrajectory.annualIncreaseHistory.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between rounded bg-slate-50 p-2 dark:bg-slate-700">
                  <span className="text-sm text-slate-600 dark:text-slate-300">{item.period}</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">
                    Rs {item.annualIncreaseRsCrore.toLocaleString()} Cr/yr
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Debt Chart */}
        <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
          <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">Debt Growth Visualization</h4>
          <MiniChart
            data={economicPerformanceKPI.fiscal.debtTrajectory.data.map((d) => d.debtRsCrore)}
            color="bg-red-500"
            height={100}
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-300">
            <span className="font-semibold">AAP Average (2022-25):</span> Rs{" "}
            {economicPerformanceKPI.fiscal.debtTrajectory.aapFirstThreeYears.annualAverageRsCrore.toLocaleString()} crore/year —{" "}
            <span className="text-red-600 dark:text-red-200 font-bold">Highest in Punjab history</span>
          </p>
        </div>
      </div>

      {/* Fiscal Deficits Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Fiscal Deficits Comparison</h3>
        <DataTable
          headers={["Deficit Type", "2024-25 Act", "2025-26 BE", "2025-26 RE", "2026-27 BE"]}
          rows={economicPerformanceKPI.fiscal.fiscalDeficits.data.map((d) => [
            d.deficitType,
            `${d.FY2024_25_Actuals}%`,
            `${d.FY2025_26_BE}%`,
            `${d.FY2025_26_RE}%`,
            `${d.FY2026_27_BE}%`,
          ])}
        />
        <p className="mt-3 text-sm text-slate-500">{economicPerformanceKPI.fiscal.fiscalDeficits.note}</p>
      </div>

      {/* Committed Expenditure Section */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
            <DollarSign className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">Committed Expenditure Crisis</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">
              72% of revenue receipts pre-committed — limits fiscal flexibility
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-4">
          <MetricCard
            title="Salaries"
            value="Rs 39,115 Cr"
            subtitle="31% of revenue receipts"
            color="bg-blue-500"
            icon={<Users className="h-5 w-5" />}
          />
          <MetricCard
            title="Pensions"
            value="Rs 22,465 Cr"
            subtitle="18% of revenue receipts"
            color="bg-purple-500"
            icon={<Users className="h-5 w-5" />}
          />
          <MetricCard
            title="Interest Payments"
            value="Rs 28,755 Cr"
            subtitle="23% of revenue receipts"
            color="bg-red-500"
            icon={<Banknote className="h-5 w-5" />}
          />
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Total: Rs 90,335 Crore (72% of revenue)</h4>
          <ProgressBar value={72} max={100} color="bg-red-500" label="Committed Expenditure %" />
        </div>

        <p className="mt-4 text-sm text-orange-600 dark:text-orange-300">
          <span className="font-semibold">Note:</span> In 2024-25, committed expenditure consumed{" "}
          <span className="font-bold">85%</span> of revenue receipts — even more critical
        </p>
      </div>

      {/* GSDP Growth Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">GSDP Growth Performance</p>
            <p className="text-sm text-slate-500">Punjab consistently underperforms national growth</p>
          </div>
        </div>

        <DataTable
          headers={["Year", "Punjab GSDP", "India GDP", "Status"]}
          rows={economicPerformanceKPI.gsdp.growthTrend.data.map((d) => [
            d.year,
            `${d.punjabGSDPGrowth}%`,
            d.indiaGDPGrowth > 0 ? `${d.indiaGDPGrowth}%` : "—",
            d.punjabGSDPGrowth < d.indiaGDPGrowth ? "Below National" : "—",
          ])}
        />

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Agriculture</h4>
            <p className="text-2xl font-bold text-red-600">-2.5%</p>
            <p className="text-sm text-red-500">23% of economy</p>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400">Manufacturing</h4>
            <p className="text-2xl font-bold text-red-600">-1.2%</p>
            <p className="text-sm text-red-500">29% of economy</p>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Services</h4>
            <p className="text-2xl font-bold text-yellow-600">Slowing</p>
            <p className="text-sm text-yellow-500">48% of economy</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Average growth since 2020-21: <span className="font-semibold">4.9%</span> — Downward spiral since 2022-23
        </p>
      </div>

      {/* Per Capita Income Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Per Capita Income</h3>
        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="text-sm text-blue-600 dark:text-blue-300">Punjab (2025-26)</h4>
            <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
              Rs {economicPerformanceKPI.gsdp.perCapitaIncome.punjab.toLocaleString()}
            </p>
            <p className="text-sm text-blue-500">Growth: {economicPerformanceKPI.gsdp.perCapitaIncome.punjabGrowthRate}%</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
            <h4 className="text-sm text-slate-600 dark:text-slate-300">India (2025-26)</h4>
            <p className="text-3xl font-bold text-slate-700 dark:text-slate-200">
              Rs {economicPerformanceKPI.gsdp.perCapitaIncome.india.toLocaleString()}
            </p>
            <p className="text-sm text-slate-500">Growth: {economicPerformanceKPI.gsdp.perCapitaIncome.indiaGrowthRate}%</p>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-amber-700 dark:text-amber-400">
            <span className="font-semibold">Punjab is barely above national average (1.05x)</span> — Was{" "}
            <span className="font-bold">#1 until 2000</span>, now{" "}
            <span className="font-bold">10th among major Indian states</span>
          </p>
        </div>
      </div>

      {/* Unemployment Section */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-purple-700 dark:text-purple-400">Unemployment Crisis</p>
            <p className="text-sm text-purple-600 dark:text-purple-300">Nearly double the national average</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-4">
          <MetricCard
            title="Unemployment Rate"
            value="6.1%"
            subtitle="Punjab"
            color="bg-red-500"
          />
          <MetricCard
            title="Unemployment Rate"
            value="3.2%"
            subtitle="All India"
            color="bg-green-500"
          />
          <MetricCard
            title="LFPR"
            value="53.5%"
            subtitle="Punjab (vs 57.9% nat.)"
            color="bg-blue-500"
          />
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {economicPerformanceKPI.unemployment.ruralUrbanNote}
          </p>
          <p className="mt-2 text-sm text-slate-500">{economicPerformanceKPI.unemployment.youthUnemploymentNote}</p>
        </div>
      </div>

      {/* AAP Funding Operations Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">AAP Government Funding Operations</h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <MetricCard
            title="Net Borrowings (2026-27)"
            value="Rs 38,471 Cr"
            subtitle="To meet expenditure"
            color="bg-red-500"
            icon={<Banknote className="h-5 w-5" />}
          />
          <MetricCard
            title="WMA (RBI Advances)"
            value="Rs 80,000 Cr"
            subtitle="Short-term revolving credit"
            color="bg-orange-500"
            icon={<Building2 className="h-5 w-5" />}
          />
          <MetricCard
            title="Power Subsidies"
            value="Rs 15,550 Cr"
            subtitle="12.3% of revenue receipts"
            color="bg-yellow-500"
            icon={<DollarSign className="h-5 w-5" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Welfare Schemes</h4>
            {economicPerformanceKPI.aapFunding.welfareSchemes.map((scheme, idx) => (
              <div key={idx} className="mb-2 flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-300">{scheme.name}</span>
                <Badge variant="warning">Rs {scheme.amountRsCrore.toLocaleString()} Cr</Badge>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Sinking Funds Buildup</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-300">Previous (AAP takeover)</span>
              <span className="font-semibold">Rs {economicPerformanceKPI.aapFunding.sinkingFunds.previous.toLocaleString()} Cr</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-slate-600 dark:text-slate-300">Current</span>
              <span className="font-bold text-green-600">
                Rs {economicPerformanceKPI.aapFunding.sinkingFunds.current.toLocaleString()} Cr+
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-600 dark:text-amber-300">
            <span className="font-semibold">Power Subsidy Issue:</span>{" "}
            {economicPerformanceKPI.aapFunding.powerSubsidies.householdCoverage} —{" "}
            {economicPerformanceKPI.aapFunding.powerSubsidies.note}
          </p>
        </div>
      </div>

      {/* Historical Comparison Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Historical: Congress 2017-2022 vs AAP 2022-2027
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="info">CONGRESS (2017-2022)</Badge>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Debt Added: {economicPerformanceKPI.historicalComparison.congress2017_2022.debtAdded}</li>
              <li>• Fiscal Deficit: {economicPerformanceKPI.historicalComparison.congress2017_2022.fiscalDeficitManagement}</li>
              <li>• Industrial Policy: {economicPerformanceKPI.historicalComparison.congress2017_2022.industrialPolicy}</li>
              <li>• Power Subsidies: {economicPerformanceKPI.historicalComparison.congress2017_2022.powerSubsidies}</li>
              <li>• New Investment: {economicPerformanceKPI.historicalComparison.congress2017_2022.newInvestment}</li>
              <li>• Agricultural Crisis: {economicPerformanceKPI.historicalComparison.congress2017_2022.agriculturalCrisis}</li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <div className="mb-3 flex items-center gap-2">
              <Badge variant="danger">AAP (2022-2027)</Badge>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>• Debt Added: <span className="font-bold text-red-600">{economicPerformanceKPI.historicalComparison.aap2022_2027.debtAddedPerYear}</span></li>
              <li>• Fiscal Deficit: {economicPerformanceKPI.historicalComparison.aap2022_2027.fiscalDeficit}</li>
              <li>• Industrial Policy: {economicPerformanceKPI.historicalComparison.aap2022_2027.industrialPolicy}</li>
              <li>• Power Subsidies: {economicPerformanceKPI.historicalComparison.aap2022_2027.powerSubsidies}</li>
              <li>• New Investment: {economicPerformanceKPI.historicalComparison.aap2022_2027.newInvestment}</li>
              <li>• Agricultural Crisis: <span className="font-bold text-red-600">{economicPerformanceKPI.historicalComparison.aap2022_2027.agriculturalCrisis}</span></li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">{economicPerformanceKPI.historicalComparison.note}</p>
      </div>

      {/* Congress Attack Lines Section */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Congress 2027 Attack Lines</p>
            <p className="text-sm text-green-600 dark:text-green-300">Key economic vulnerabilities to exploit</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {economicPerformanceKPI.campaignIssues.congressAttackLines.map((attack, idx) => (
            <div key={idx} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{attack.label}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{attack.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AAP Defense Lines Section */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">AAP Defense Lines (Expected)</p>
            <p className="text-sm text-red-600 dark:text-red-300">Pre-packaged responses to economic attacks</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {economicPerformanceKPI.campaignIssues.aapDefenseLines.map((defense, idx) => (
            <div key={idx} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="mb-2 flex items-center gap-2">
                <ThumbsUp className="h-4 w-4 text-green-500" />
                <span className="font-semibold text-slate-700 dark:text-slate-300">{defense.point}</span>
              </div>
              <div className="flex items-start gap-2">
                <ThumbsDown className="h-4 w-4 text-red-500 mt-0.5" />
                <span className="text-sm text-slate-500 dark:text-slate-400">{defense.response}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Implications Section */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-4">
          Strategic Implications for Congress
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {economicPerformanceKPI.strategicImplications.implications.map((impl) => (
            <div key={impl.number} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-bold">
                  {impl.number}
                </span>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{impl.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{impl.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Economic Performance Sources */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Economic Data Sources</h4>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          {economicPerformanceKPI.sources.map((source) => (
            <div key={source.id} className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
              <Badge variant="default">{source.source}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Service Delivery Gaps Section */}
      <div className="rounded-xl border-2 border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
            <AlertCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">
              Service Delivery & Infrastructure Gaps (MP1-Foundational)
            </p>
            <p className="text-sm text-orange-600 dark:text-orange-300">
              AAP tenure 2022-2026: Health, Education, Power, Water, Social Welfare gaps
            </p>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Medical Specialist Vacancy"
            value={`${serviceDeliveryGapsData.health.specialistCrisis.specialistVacancyRate}%`}
            subtitle={`${serviceDeliveryGapsData.health.specialistCrisis.vacantPosts} of ${serviceDeliveryGapsData.health.specialistCrisis.totalPosts} posts vacant`}
            color="bg-red-500"
            icon={<AlertTriangle className="h-6 w-6" />}
          />
          <MetricCard
            title="Pension Delay"
            value={`${serviceDeliveryGapsData.socialWelfare.pensionArrears.delayMonths} months`}
            subtitle={`${(serviceDeliveryGapsData.socialWelfare.pensionArrears.beneficiariesAffected / 100000).toFixed(2)} lakh beneficiaries affected`}
            color="bg-red-600"
            icon={<Users className="h-6 w-6" />}
          />
          <MetricCard
            title="Power Cuts"
            value={serviceDeliveryGapsData.power.crisis.powerCutsRuralUrban}
            subtitle="Rural + Urban during heatwave"
            color="bg-yellow-500"
            icon={<Zap className="h-6 w-6" />}
          />
          <MetricCard
            title="Teacher Posts Abolished"
            value={serviceDeliveryGapsData.education.teacherVacancies.abolishedPosts.toLocaleString()}
            subtitle="30,391 vacant posts across departments"
            color="bg-purple-500"
            icon={<UsersRound className="h-6 w-6" />}
          />
        </div>

        {/* Health Service Gaps */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Health Service Gaps</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Doctor-to-Population Ratio</p>
              <p className="text-2xl font-bold text-red-600">
                {serviceDeliveryGapsData.health.generalDoctorShortage.doctorToPopulationRatio}
                <span className="text-sm font-normal text-slate-500"> / 1,000</span>
              </p>
              <p className="text-xs text-slate-500">National target: {serviceDeliveryGapsData.health.generalDoctorShortage.nationalTarget}/1,000</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Aam Aadmi Clinics</p>
              <p className="text-2xl font-bold text-green-600">
                {serviceDeliveryGapsData.health.aamAadmiClinics.operational}
                <span className="text-sm font-normal text-slate-500">+</span>
              </p>
              <p className="text-xs text-slate-500">Operational in Punjab</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Opioid Dependents</p>
              <p className="text-2xl font-bold text-orange-600">
                {serviceDeliveryGapsData.health.drugDeaddiction.estimatedOpioidDependents.toLocaleString()}
                <span className="text-sm font-normal text-slate-500">+</span>
              </p>
              <p className="text-xs text-slate-500">{serviceDeliveryGapsData.health.drugDeaddiction.mentalHealthTreatmentGap}% untreated</p>
            </div>
          </div>
        </div>

        {/* District Healthcare Shortages */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">District Healthcare Shortages</h4>
          <div className="grid gap-2 md:grid-cols-2">
            {serviceDeliveryGapsData.health.districtShortages.map((shortage, idx) => (
              <div key={idx} className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                <p className="font-semibold text-red-700 dark:text-red-400">{shortage.district}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{shortage.shortageType}</p>
                <p className="text-xs text-slate-500 mt-1">{shortage.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Service Gaps */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Education Service Gaps</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Special Education Posts (Jul 2025)</p>
              <p className="text-2xl font-bold text-purple-600">
                {serviceDeliveryGapsData.education.teacherVacancies.specialEducationPosts}
                <span className="text-sm font-normal text-slate-500"> (PRT + TGT)</span>
              </p>
              <p className="text-xs text-slate-500">{serviceDeliveryGapsData.education.teacherVacancies.candidatesApplied.toLocaleString()} candidates applied</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Education Budget</p>
              <p className="text-2xl font-bold text-green-600">
                Rs {serviceDeliveryGapsData.education.schoolInfrastructure.educationBudget.toLocaleString()}
                <span className="text-sm font-normal text-slate-500"> crore</span>
              </p>
              <p className="text-xs text-slate-500">Apr 2026 - absorption capacity questioned</p>
            </div>
          </div>
        </div>

        {/* Power Supply Gaps */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Power Supply Gaps</h4>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Demand Surge (Heatwave)</p>
              <p className="text-xl font-bold text-yellow-600">
                {serviceDeliveryGapsData.power.crisis.demandSurge.fromMW.toLocaleString()} → {serviceDeliveryGapsData.power.crisis.demandSurge.toMW.toLocaleString()} MW
              </p>
              <p className="text-xs text-slate-500">{serviceDeliveryGapsData.power.crisis.demandSurge.timeframe}</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">National Avg Rural Supply</p>
              <p className="text-2xl font-bold text-blue-600">
                {serviceDeliveryGapsData.power.supplyHours.nationalAverageRural}
                <span className="text-sm font-normal text-slate-500"> hrs/day</span>
              </p>
              <p className="text-xs text-slate-500">2025</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Mission Roshan Punjab</p>
              <p className="text-2xl font-bold text-green-600">
                Rs {serviceDeliveryGapsData.power.crisis.infrastructureSpending.toLocaleString()}
                <span className="text-sm font-normal text-slate-500"> crore</span>
              </p>
              <p className="text-xs text-slate-500">Infrastructure overhaul</p>
            </div>
          </div>
        </div>

        {/* Infrastructure Gaps */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Infrastructure Gaps</h4>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Rural Link Roads</p>
              <p className="text-2xl font-bold text-blue-600">
                {serviceDeliveryGapsData.infrastructure.roads.ruralLinkRoads.constructed.toLocaleString()}
                <span className="text-sm font-normal text-slate-500"> km</span>
              </p>
              <p className="text-xs text-slate-500">Rs {serviceDeliveryGapsData.infrastructure.roads.ruralLinkRoads.cost.toLocaleString()} crore</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Canal Irrigated Area</p>
              <p className="text-xl font-bold text-cyan-600">
                {serviceDeliveryGapsData.infrastructure.irrigation.canalIrrigatedArea.startAcres.toLocaleString()} → {serviceDeliveryGapsData.infrastructure.irrigation.canalIrrigatedArea.endAcres.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500">Acres (2022 → 2025)</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Canal Investment</p>
              <p className="text-2xl font-bold text-cyan-600">
                Rs {(serviceDeliveryGapsData.infrastructure.irrigation.canalSystemRejuvenation + serviceDeliveryGapsData.infrastructure.irrigation.canalModernisation).toLocaleString()}
                <span className="text-sm font-normal text-slate-500"> crore</span>
              </p>
              <p className="text-xs text-slate-500">Rejuvenation + Modernisation</p>
            </div>
          </div>
        </div>

        {/* Strategic Implications - Top Attack Vectors */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Top Attack Vectors for Congress 2027
          </h4>
          <div className="grid gap-2">
            {serviceDeliveryGapsData.strategic.highestImpactGaps.slice(0, 4).map((gap) => (
              <div key={gap.rank} className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                  {gap.rank}
                </span>
                <div>
                  <p className="font-semibold text-red-700 dark:text-red-400">{gap.issue}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{gap.affectedVoters}</p>
                  <p className="text-xs text-slate-500 mt-1">{gap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Congress Messaging */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Congress Messaging Angles</h4>
          <div className="grid gap-2">
            {serviceDeliveryGapsData.strategic.congressMessaging.map((msg, idx) => (
              <div key={idx} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <div className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-red-500 mt-0.5" />
                  <p className="text-sm text-slate-600 dark:text-slate-400">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Delivery Gaps Sources */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Service Delivery Gaps Sources</h4>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          {serviceDeliveryGapsData.sources.slice(0, 8).map((source) => (
            <div key={source.id} className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
              <Badge variant="default">{source.source}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* =============================================== */}
      {/* PUADH REGION & URBAN SEATS SECTION */}
      {/* =============================================== */}
      <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-purple-700 dark:text-purple-400">
              Governance — Puadh Region & Urban Seats (MP1-Foundational)
            </p>
            <p className="text-sm text-purple-600 dark:text-purple-300">
              SAS Nagar (Mohali), Ludhiana Urban, Patiala, Fatehgarh Sahib, Rupnagar — ~18-20 seats
            </p>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Smart City Completion"
            value="87%"
            subtitle="Punjab vs 93% national"
            color="bg-red-500"
            icon={<Building2 className="h-6 w-6" />}
          />
          <MetricCard
            title="Ludhiana Chinese Imports"
            value=">50%"
            subtitle="Market share lost to China"
            color="bg-red-600"
            icon={<Factory className="h-6 w-6" />}
          />
          <MetricCard
            title="Buddha Nullah BOD"
            value="154 mg/l"
            subtitle="Safe limit: <3 mg/l"
            color="bg-orange-500"
            icon={<AlertCircle className="h-6 w-6" />}
          />
          <MetricCard
            title="Mohali City Bus Gap"
            value="20 years"
            subtitle="No service since 2006"
            color="bg-purple-500"
            icon={<Bus className="h-6 w-6" />}
          />
        </div>

        {/* Overview */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Cross-Cutting Themes</h4>
          <div className="flex flex-wrap gap-2">
            {puadhLocalIssuesKPI.overview.keyThemes.map((theme, idx) => (
              <Badge key={idx} variant="info">{theme}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* SAS Nagar / Mohali Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">SAS Nagar (Mohali)</p>
            <p className="text-sm text-slate-500">Seats: {puadhLocalIssuesKPI.sasNagar.seats.join(", ")}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Smart City Rate"
            value={`${puadhLocalIssuesKPI.sasNagar.keyStats.smartCityCompletionRate}%`}
            subtitle={`National: ${puadhLocalIssuesKPI.sasNagar.keyStats.nationalAverage}%`}
            color="bg-red-500"
          />
          <MetricCard
            title="Pending Projects"
            value={`${puadhLocalIssuesKPI.sasNagar.keyStats.pendingProjects}`}
            subtitle={`Rs ${puadhLocalIssuesKPI.sasNagar.keyStats.pendingValueCrore} crore`}
            color="bg-orange-500"
          />
          <MetricCard
            title="Garbage Dumps"
            value={puadhLocalIssuesKPI.sasNagar.keyStats.garbageDumpsIncrease}
            subtitle="Informal dumps (vs 11 before)"
            color="bg-red-600"
            icon={<Trash2 className="h-6 w-6" />}
          />
          <MetricCard
            title="City Bus Planning"
            value={`${puadhLocalIssuesKPI.sasNagar.keyStats.cityBusPlanningYears} yrs`}
            subtitle="No service delivered"
            color="bg-purple-500"
            icon={<Bus className="h-6 w-6" />}
          />
        </div>

        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Top Issues</h4>
        <DataTable
          headers={["Priority", "Issue", "Intensity", "Status"]}
          rows={puadhLocalIssuesKPI.sasNagar.issues.slice(0, 5).map((issue) => [
            issue.priority.toString(),
            issue.issue,
            issue.intensity,
            issue.status,
          ])}
        />
      </div>

      {/* Ludhiana Urban Section */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <Factory className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Ludhiana Urban</p>
            <p className="text-sm text-red-600 dark:text-red-300">Seats: {puadhLocalIssuesKPI.ludhianaUrban.seats.join(", ")}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <MetricCard
            title="Chinese Import Share"
            value={`>${puadhLocalIssuesKPI.ludhianaUrban.keyStats.chineseImportShare}%`}
            subtitle="Hosiery market lost"
            color="bg-red-600"
            icon={<Factory className="h-6 w-6" />}
          />
          <MetricCard
            title="Efficiency Gap vs China"
            value={`${puadhLocalIssuesKPI.ludhianaUrban.keyStats.manufacturingEfficiencyGap}%`}
            subtitle="Manufacturing behind"
            color="bg-orange-500"
          />
          <MetricCard
            title="Buddha Nullah BOD"
            value={`${puadhLocalIssuesKPI.ludhianaUrban.keyStats.buddhaNullahBOD} mg/l`}
            subtitle={`Safe: <${puadhLocalIssuesKPI.ludhianaUrban.keyStats.safeLimitBOD} mg/l`}
            color="bg-red-500"
            icon={<AlertCircle className="h-6 w-6" />}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Textile Sector Share</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Woolen knitwear</span>
                <Badge variant="warning">{puadhLocalIssuesKPI.ludhianaUrban.keyStats.woolenKnitwearIndiaShare}% of India</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Hosiery</span>
                <Badge variant="warning">{puadhLocalIssuesKPI.ludhianaUrban.keyStats.hosieryIndiaShare}% of India</Badge>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Traffic Police</h4>
            <p className="text-2xl font-bold text-slate-700 dark:text-slate-200">
              ~{puadhLocalIssuesKPI.ludhianaUrban.keyStats.trafficPoliceStrength}
            </p>
            <p className="text-sm text-slate-500">Officers for entire city</p>
          </div>
        </div>

        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Top Issues</h4>
        <DataTable
          headers={["Priority", "Issue", "Intensity"]}
          rows={puadhLocalIssuesKPI.ludhianaUrban.issues.slice(0, 5).map((issue) => [
            issue.priority.toString(),
            issue.issue,
            issue.intensity,
          ])}
        />
      </div>

      {/* Patiala Section */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">Patiala</p>
            <p className="text-sm text-slate-500">Seats: {puadhLocalIssuesKPI.patiala.seats.join(", ")}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <MetricCard
            title="Civic Tenders"
            value={`Rs ${puadhLocalIssuesKPI.patiala.keyStats.civicProjectTendersCrore} Cr`}
            subtitle="Infrastructure projects"
            color="bg-green-500"
          />
          <MetricCard
            title="Electric Buses"
            value={puadhLocalIssuesKPI.patiala.keyStats.electricBusesPlanned.toString()}
            subtitle="Tendered"
            color="bg-green-600"
            icon={<Bus className="h-6 w-6" />}
          />
          <MetricCard
            title="Dog Sterilization"
            value={`${puadhLocalIssuesKPI.patiala.keyStats.dogSterilizationPerDay}/day`}
            subtitle="Target rate"
            color="bg-yellow-500"
          />
          <MetricCard
            title="Kennel Capacity"
            value={`${puadhLocalIssuesKPI.patiala.keyStats.kennelCapacityBefore} → ${puadhLocalIssuesKPI.patiala.keyStats.kennelCapacityAfter}`}
            subtitle="Expansion"
            color="bg-blue-500"
          />
        </div>

        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Top Issues</h4>
        <DataTable
          headers={["Priority", "Issue", "Intensity", "Congress Response"]}
          rows={puadhLocalIssuesKPI.patiala.issues.slice(0, 5).map((issue) => [
            issue.priority.toString(),
            issue.issue,
            issue.intensity,
            issue.congressResponse,
          ])}
        />
      </div>

      {/* Fatehgarh Sahib Section */}
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-white">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-yellow-700 dark:text-yellow-400">Fatehgarh Sahib</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">Seats: {puadhLocalIssuesKPI.fatehgarhSahib.seats.join(", ")}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <MetricCard
            title="Holy City Status"
            value={puadhLocalIssuesKPI.fatehgarhSahib.keyStats.holyCityStatus ? "Declared" : "Pending"}
            subtitle="Punjab Assembly Nov 2025"
            color={puadhLocalIssuesKPI.fatehgarhSahib.keyStats.holyCityStatus ? "bg-green-500" : "bg-yellow-500"}
          />
          <MetricCard
            title="2025 Floods"
            value={puadhLocalIssuesKPI.fatehgarhSahib.keyStats.flood2025Affected ? "Affected" : "Not Affected"}
            subtitle="District vulnerability"
            color={puadhLocalIssuesKPI.fatehgarhSahib.keyStats.flood2025Affected ? "bg-red-500" : "bg-green-500"}
          />
          <MetricCard
            title="Sacrilege Law"
            value={`${puadhLocalIssuesKPI.fatehgarhSahib.keyStats.sacrilegeLawMinYears}+ years`}
            subtitle="Minimum sentence proposed"
            color="bg-purple-500"
          />
        </div>

        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Issues</h4>
        <DataTable
          headers={["Priority", "Issue", "Intensity"]}
          rows={puadhLocalIssuesKPI.fatehgarhSahib.issues.slice(0, 4).map((issue) => [
            issue.priority.toString(),
            issue.issue,
            issue.intensity,
          ])}
        />
      </div>

      {/* Rupnagar / Anandpur Sahib Section */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-indigo-700 dark:text-indigo-400">Rupnagar / Anandpur Sahib</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-300">Seats: {puadhLocalIssuesKPI.rupnagar.seats.join(", ")}</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <MetricCard
            title="New District Proposal"
            value={puadhLocalIssuesKPI.rupnagar.keyStats.newDistrictProposed ? "Proposed" : "Not Proposed"}
            subtitle="Anandpur Sahib"
            color={puadhLocalIssuesKPI.rupnagar.keyStats.newDistrictProposed ? "bg-red-500" : "bg-green-500"}
          />
          <MetricCard
            title="Estimated Cost"
            value={`Rs ${puadhLocalIssuesKPI.rupnagar.keyStats.newDistrictCostCrore} Cr`}
            subtitle="Infrastructure outlay"
            color="bg-purple-500"
          />
          <MetricCard
            title="DBA Protest"
            value={`${puadhLocalIssuesKPI.rupnagar.keyStats.dbaProtestDays}+ days`}
            subtitle="Ropar lawyers strike"
            color="bg-red-600"
            icon={<AlertCircle className="h-6 w-6" />}
          />
          <MetricCard
            title="Holy City Status"
            value={puadhLocalIssuesKPI.rupnagar.keyStats.holyCityStatus ? "Declared" : "Pending"}
            subtitle="Anandpur Sahib"
            color={puadhLocalIssuesKPI.rupnagar.keyStats.holyCityStatus ? "bg-green-500" : "bg-yellow-500"}
          />
        </div>

        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Issues</h4>
        <DataTable
          headers={["Priority", "Issue", "Intensity", "Congress Response"]}
          rows={puadhLocalIssuesKPI.rupnagar.issues.slice(0, 4).map((issue) => [
            issue.priority.toString(),
            issue.issue,
            issue.intensity,
            issue.congressResponse,
          ])}
        />
      </div>

      {/* Strategic Implications for Congress - Puadh */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">
              Strategic Implications for Congress — Puadh Region
            </p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">
              Key attack vectors and positioning for 2027 election
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {getPuadhStrategicImplications().map((strategy) => (
            <div
              key={strategy.number}
              className="rounded-lg bg-white p-4 dark:bg-slate-800"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-bold">
                  {strategy.number}
                </span>
                <Badge variant="info">{strategy.region}</Badge>
              </div>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-1">{strategy.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{strategy.description}</p>
              <div className="space-y-1">
                {strategy.attackVectors.slice(0, 2).map((av, idx) => (
                  <p key={idx} className="text-xs text-slate-600 dark:text-slate-400">
                    → {av}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Data Points */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Key Data Points — Puadh Region
        </h3>
        <DataTable
          headers={["Metric", "Value", "Source", "Date"]}
          rows={puadhLocalIssuesKPI.dataPoints.map((dp) => [
            dp.metric,
            dp.value,
            dp.source,
            dp.date,
          ])}
        />
      </div>

      {/* Data Gaps */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
        <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400 mb-4">Data Gaps & Verification Needs</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {puadhLocalIssuesKPI.dataGaps.slice(0, 6).map((gap, idx) => (
            <div key={idx} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <div className="flex items-start gap-2">
                <Badge
                  variant={gap.priority === "High" ? "danger" : gap.priority === "Medium" ? "warning" : "default"}
                >
                  {gap.priority}
                </Badge>
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">{gap.gap}</p>
                  <p className="text-xs text-slate-500 mt-1">{gap.actionNeeded}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Puadh Sources */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Puadh Region Data Sources</h4>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          {puadhLocalIssuesKPI.sources.map((source) => (
            <div key={source.id} className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
              <Badge variant="default">{source.source}</Badge>
            </div>
          ))}
        </div>
      </div>

      {/* =============================================== */}
      {/* AAP INFRASTRUCTURE & FINANCE SECTION */}
      {/* =============================================== */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <Banknote className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">
              AAP Infrastructure & Finance (MP1-Foundational)
            </p>
            <p className="text-sm text-red-600 dark:text-red-300">
              Debt trajectory, power subsidies, freebies vs revenue deficit, infrastructure gaps
            </p>
          </div>
        </div>

        {/* Key Crisis Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="State Debt (Mar 2026)"
            value={`Rs ${infraFinanceKPI.debtTrajectory.re_FY2025_26.toFixed(2)}L Cr`}
            subtitle="From Rs 2.83L Cr in March 2022"
            color="bg-red-500"
            icon={<Banknote className="h-6 w-6" />}
          />
          <MetricCard
            title="Debt Added (AAP)"
            value={`Rs ${infraFinanceKPI.debtTrajectory.debtAdditionUnderAAP_4Years}L Cr`}
            subtitle="~Rs 44,000 Cr per year"
            color="bg-red-600"
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <MetricCard
            title="Debt-to-GSDP"
            value={`${infraFinanceKPI.debtTrajectory.debtToGSDP["FY2026-27_Estimate"]}%`}
            subtitle="2nd highest nationally (nat'l median: 32.1%)"
            color="bg-orange-500"
            icon={<BarChart3 className="h-6 w-6" />}
          />
          <MetricCard
            title="Total Freebies"
            value={`Rs ${(infraFinanceKPI.freebiesVsRevenueDeficit.totalFreebies / 1000).toFixed(1)}K Cr`}
            subtitle="Rs 26,300 Cr - exceeds revenue deficit"
            color="bg-yellow-500"
            icon={<DollarSign className="h-6 w-6" />}
          />
        </div>

        {/* Debt Trajectory Table */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Debt Trajectory</h4>
          <DataTable
            headers={["Period", "Debt (Rs Lakh Cr)", "Debt-to-GSDP (%)"]}
            rows={[
              ["March 2022 (AAP took power)", `${infraFinanceKPI.debtTrajectory.march2022_AAPTookPower}`, "46.6% (Parliament)"],
              ["March 2025", `${infraFinanceKPI.debtTrajectory.march2025}`, "-"],
              ["FY 2025-26 RE", `${infraFinanceKPI.debtTrajectory.re_FY2025_26}`, "-"],
              ["FY 2026-27 Projected", `${infraFinanceKPI.debtTrajectory.projected_FY2026_27}`, `${infraFinanceKPI.debtTrajectory.debtToGSDP["FY2026-27_Estimate"]}%`],
            ]}
          />
        </div>

        {/* Fiscal Stress Indicators */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Fiscal Stress Indicators</h4>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">New Borrowing for Debt Servicing</p>
              <p className="text-2xl font-bold text-red-600">
                {infraFinanceKPI.financialStress.newBorrowingDebtServicing.percentage}%
              </p>
              <p className="text-xs text-slate-500">Rs {infraFinanceKPI.financialStress.newBorrowingDebtServicing.amount.toLocaleString()} Cr in FY 2025-26</p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Interest Payment</p>
              <p className="text-2xl font-bold text-orange-600">
                Rs {infraFinanceKPI.financialStress.interestPayment.amount.toLocaleString()} Cr
              </p>
              <p className="text-xs text-slate-500">{infraFinanceKPI.financialStress.interestPayment.percentageOfRevenueReceipts}% of revenue receipts</p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Salary + Pension (FY 2026-27 BE)</p>
              <p className="text-2xl font-bold text-yellow-600">
                Rs {(infraFinanceKPI.financialStress.salaryPension.total / 1000).toFixed(1)}K Cr
              </p>
              <p className="text-xs text-slate-500">Exceeds total subsidy bill</p>
            </div>
          </div>
        </div>

        {/* Power Subsidy Burden */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Power Subsidy Burden</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Agriculture (Tubewells)</p>
              <p className="text-xl font-bold text-green-600">
                {infraFinanceKPI.powerSubsidy.agriculture.tubewells.toLocaleString()} units
              </p>
              <p className="text-xs text-slate-500">Free power to farmers</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Domestic (300 units free)</p>
              <p className="text-xl font-bold text-blue-600">Free since Jul 2022</p>
              <p className="text-xs text-slate-500">RE: Rs {infraFinanceKPI.powerSubsidy.domestic.re_FY2025_26.toLocaleString()} Cr</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Power Subsidy RE</p>
              <p className="text-2xl font-bold text-purple-600">
                Rs {infraFinanceKPI.powerSubsidy.totalPowerSubsidy.re_FY2025_26.toLocaleString()} Cr
              </p>
              <p className="text-xs text-slate-500">FY 2025-26 RE</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Power Subsidy BE</p>
              <p className="text-2xl font-bold text-indigo-600">
                Rs {infraFinanceKPI.powerSubsidy.totalPowerSubsidy.be_FY2026_27.toLocaleString()} Cr
              </p>
              <p className="text-xs text-slate-500">FY 2026-27 BE (reduced)</p>
            </div>
          </div>
        </div>

        {/* Freebies vs Revenue Deficit */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Freebies vs Revenue Deficit</h4>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
              <p className="text-sm font-medium text-green-700 dark:text-green-400">Free Power</p>
              <p className="text-xl font-bold text-green-600">
                Rs {infraFinanceKPI.freebiesVsRevenueDeficit.freePower.toLocaleString()} Cr
              </p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Women Dole</p>
              <p className="text-xl font-bold text-blue-600">
                Rs {infraFinanceKPI.freebiesVsRevenueDeficit.womenDole.amount.toLocaleString()} Cr
              </p>
              <p className="text-xs text-slate-500">{infraFinanceKPI.freebiesVsRevenueDeficit.womenDole.scheme}</p>
            </div>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-3 dark:border-purple-800 dark:bg-purple-900/20">
              <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Free Travel (Women)</p>
              <p className="text-xl font-bold text-purple-600">
                Rs {infraFinanceKPI.freebiesVsRevenueDeficit.freeTravelWomen.toLocaleString()} Cr
              </p>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-red-700 dark:text-red-400">Revenue Deficit</p>
                <p className="text-xl font-bold text-red-600">
                  Rs {infraFinanceKPI.freebiesVsRevenueDeficit.revenueDeficit.toLocaleString()} Cr
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">If freebies eliminated</p>
                <p className="text-sm font-medium text-green-600">Surplus possible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Water Crisis */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Water Crisis (Critical)</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Over-Exploited Blocks</p>
              <p className="text-2xl font-bold text-red-600">
                {infraFinanceKPI.water.crisis.blocks.overExploited.count}
                <span className="text-sm font-normal text-slate-500"> / {infraFinanceKPI.water.crisis.blocks.total}</span>
              </p>
              <p className="text-xs text-slate-500">{infraFinanceKPI.water.crisis.blocks.overExploited.percentage}% of blocks</p>
            </div>
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3 dark:border-orange-800 dark:bg-orange-900/20">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Safe Blocks</p>
              <p className="text-2xl font-bold text-orange-600">
                {infraFinanceKPI.water.crisis.blocks.safe.count}
                <span className="text-sm font-normal text-slate-500"> / {infraFinanceKPI.water.crisis.blocks.total}</span>
              </p>
              <p className="text-xs text-slate-500">Only {infraFinanceKPI.water.crisis.blocks.safe.percentage}%</p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Annual Water Table Decline</p>
              <p className="text-2xl font-bold text-yellow-600">
                {infraFinanceKPI.water.crisis.annualWaterTableDecline} m
              </p>
              <p className="text-xs text-slate-500">Per year</p>
            </div>
            <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-3 dark:border-cyan-800 dark:bg-cyan-900/20">
              <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">14-Point Plan (June 2025)</p>
              <p className="text-xl font-bold text-cyan-600">
                {infraFinanceKPI.water.plan14Point.restored.waterCourses.count.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500">Water courses restored</p>
            </div>
          </div>
        </div>

        {/* Smart Cities Status */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Smart Cities Mission - 87% Complete</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {infraFinanceKPI.smartCities.projects.slice(0, 4).map((project, idx) => (
              <div key={idx} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
                <p className="font-semibold text-slate-700 dark:text-slate-300">{project.city}</p>
                <p className="text-sm text-green-600">
                  {project.status.completed.projects}/{project.status.completed.projects + (project.status.ongoing?.projects || 0)} projects
                </p>
                <p className="text-xs text-slate-500">
                  Rs {project.status.completed.amount} Cr
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
            <div>
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Punjab vs National Average</p>
              <p className="text-xs text-slate-500">87% completion vs 93-94% nationally (nearly 10 years)</p>
            </div>
            <Badge variant="danger">Below National Avg</Badge>
          </div>
        </div>

        {/* Road Infrastructure */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Road Infrastructure</h4>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">New Roads (Mar 2026)</p>
              <p className="text-2xl font-bold text-blue-600">
                {infraFinanceKPI.roads.newRoadsMar2026.length}
                <span className="text-sm font-normal text-slate-500"> km</span>
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Existing Maintained</p>
              <p className="text-2xl font-bold text-green-600">
                {infraFinanceKPI.roads.existingRoadMaintenance.length.toLocaleString()}
                <span className="text-sm font-normal text-slate-500"> km</span>
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Rural Link Roads</p>
              <p className="text-2xl font-bold text-purple-600">
                {infraFinanceKPI.roads.ruralLinkRoads.length.toLocaleString()}
                <span className="text-sm font-normal text-slate-500"> km</span>
              </p>
            </div>
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-800 dark:bg-yellow-900/20">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Funding from Centre</p>
              <p className="text-xl font-bold text-yellow-600">
                Rs {infraFinanceKPI.roads.fundingFromCentre.amount.toLocaleString()} Cr
              </p>
            </div>
          </div>
        </div>

        {/* Expert Assessment */}
        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3">Expert Assessment</h4>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="text-sm italic text-slate-600 dark:text-slate-400">&quot;{infraFinanceKPI.expertAssessment.quote}&quot;</p>
            <p className="text-xs text-slate-500 mt-2">
              — {infraFinanceKPI.expertAssessment.expert.name}, {infraFinanceKPI.expertAssessment.expert.affiliation}
            </p>
          </div>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <div className="rounded-lg bg-red-100 p-2 dark:bg-red-900/30">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">Projected Debt by 2027</p>
              <p className="text-xl font-bold text-red-600">Rs {infraFinanceKPI.expertAssessment.projectedDebtBy2027} lakh crore</p>
            </div>
            <div className="rounded-lg bg-orange-100 p-2 dark:bg-orange-900/30">
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400">Annual Debt Rise</p>
              <p className="text-xl font-bold text-orange-600">Rs {infraFinanceKPI.expertAssessment.debtRiseRate.toLocaleString()} Cr</p>
            </div>
          </div>
        </div>

        {/* Strategic Attack Vectors */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Congress Attack Vectors for 2027
          </h4>
          <div className="grid gap-2">
            {infraFinanceKPI.strategicImplications.attackVectors.slice(0, 5).map((av) => (
              <div key={av.id} className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                  {av.id}
                </span>
                <div>
                  <p className="font-semibold text-red-700 dark:text-red-400">{av.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{av.description}</p>
                  {av.keyStatistic && (
                    <p className="text-xs font-medium text-red-600 mt-1">{av.keyStatistic}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure & Finance Sources */}
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Infrastructure & Finance Sources</h4>
          <div className="grid gap-2 md:grid-cols-2 text-sm">
            {infraFinanceKPI.sources.map((source) => (
              <div key={source.id} className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
                <Badge variant="default">{source.source}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =============================================== */}
      {/* PROMISE DELIVERY GAP ANALYSIS - Congress 2017-2022 */}
      {/* =============================================== */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <Frown className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Promise Delivery Gap - Congress 2017-2022</p>
            <p className="text-sm text-red-600 dark:text-red-300">{promiseDeliveryKPI.coreVerdict.summary}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <MetricCard title="Promise Delivery" value={promiseDeliveryKPI.coreVerdict.promiseDeliveryRate} subtitle="of 2017 manifesto (PPRC)" color="bg-red-500" icon={<AlertCircle className="h-6 w-6" />} />
          <MetricCard title="Seats 2017 to 2022" value={`${promiseDeliveryKPI.electoralData.congressSeats[2017]} to ${promiseDeliveryKPI.electoralData.congressSeats[2022]}`} subtitle={`${Math.abs(promiseDeliveryKPI.electoralData.congressSeats.change)} seat loss`} color="bg-red-600" icon={<TrendingDownIcon className="h-6 w-6" />} />
          <MetricCard title="Vote Share" value={`${promiseDeliveryKPI.electoralData.voteShare[2017]}% to ${promiseDeliveryKPI.electoralData.voteShare[2022]}%`} subtitle={`${promiseDeliveryKPI.electoralData.voteShare.changePercent} pp loss`} color="bg-orange-500" icon={<BarChart3 className="h-6 w-6" />} />
        </div>
      </div>

      {/* What Congress Delivered */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white"><CheckCircle className="h-6 w-6" /></div>
          <div><p className="font-semibold text-green-700 dark:text-green-400">What Congress Actually Delivered</p><p className="text-sm text-green-600 dark:text-green-300">Verifiable achievements 2017-2022</p></div>
        </div>
        <div className="grid gap-4 md:grid-cols-4 mb-6">
          <MetricCard title="NPGI Ranking" value={`#${promiseDeliveryKPI.education.npgiRanking.rank}`} subtitle="Best state 2019-20" color="bg-green-500" icon={<TrendingUp className="h-5 w-5" />} />
          <MetricCard title="NAS 2021" value="Best" subtitle="Performing state" color="bg-green-500" icon={<TrendingUp className="h-5 w-5" />} />
          <MetricCard title="IMR" value={`${promiseDeliveryKPI.education.infantMortalityRate.nfhs5}`} subtitle={`From ${promiseDeliveryKPI.education.infantMortalityRate.nfhs4}`} color="bg-blue-500" icon={<Users className="h-5 w-5" />} />
          <MetricCard title="Life Expectancy" value={`${promiseDeliveryKPI.education.lifeExpectancy.punjab} yrs`} subtitle={`Nat: ${promiseDeliveryKPI.education.lifeExpectancy.national}`} color="bg-blue-500" icon={<Calendar className="h-5 w-5" />} />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Crimes Against Women</h4>
            <div className="flex items-center gap-2"><TrendingDown className="h-5 w-5 text-green-500" /><span className="text-2xl font-bold text-green-600">{promiseDeliveryKPI.womenChildWelfare.crimesAgainstWomenChange}%</span></div>
            <p className="text-sm text-slate-500 mt-1">Reduction 2020 vs 2019 (5,886 to 4,838)</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Ease of Business</h4>
            <div className="flex items-center gap-2"><TrendingUp className="h-5 w-5 text-green-500" /><span className="text-2xl font-bold text-green-600">{promiseDeliveryKPI.economicIndicators.easeOfBusiness[2017]} to {promiseDeliveryKPI.economicIndicators.easeOfBusiness[2019]}</span></div>
            <p className="text-sm text-slate-500 mt-1">RBI ranking improvement</p>
          </div>
        </div>
      </div>

      {/* Failed Promises */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white"><XCircle className="h-6 w-6" /></div>
          <div><p className="font-semibold text-red-700 dark:text-red-400">What Congress Failed to Deliver</p><p className="text-sm text-red-600 dark:text-red-300">Verdicts on key 2017 promises</p></div>
        </div>
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">&quot;Ghar Ghar Naukri&quot; Jobs</h4>
            <Badge variant="danger">{promiseDeliveryKPI.jobs.verdict}</Badge>
          </div>
          <div className="grid gap-3 md:grid-cols-3 mb-3">
            <MetricCard title="Unemployed Q1 2017" value={`${promiseDeliveryKPI.jobs.unemployedPersons.q1_2017} lakh`} subtitle="Persons" color="bg-slate-500" />
            <MetricCard title="Unemployed Q4 2021" value={`${promiseDeliveryKPI.jobs.unemployedPersons.q4_2021}+ lakh`} subtitle="Persons" color="bg-red-500" />
            <MetricCard title="Unemployment Rate" value={`${promiseDeliveryKPI.jobs.unemploymentRate.congressTenure}%`} subtitle={`vs natl ${promiseDeliveryKPI.jobs.unemploymentRate.nationalRate}%`} color="bg-red-500" />
          </div>
          <p className="text-sm text-red-600 dark:text-red-400">{promiseDeliveryKPI.jobs.unemploymentRate.trend}</p>
        </div>
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300">Drug Eradication</h4>
            <Badge variant="danger">{promiseDeliveryKPI.drugs.verdict}</Badge>
          </div>
          <DataTable headers={["Year", "NDPS Cases", "Heroin kg"]} rows={[["2016", promiseDeliveryKPI.drugs.ndpsCases[2016].toLocaleString(), "—"], ["2017", promiseDeliveryKPI.drugs.ndpsCases[2017].toLocaleString(), "—"], ["2019", promiseDeliveryKPI.drugs.ndpsCases[2019].toLocaleString(), `${promiseDeliveryKPI.drugs.heroinRecovered[2019]} kg`], ["2020", promiseDeliveryKPI.drugs.ndpsCases[2020].toLocaleString(), `${promiseDeliveryKPI.drugs.heroinRecovered[2020]} kg`]]} />
          <p className="text-sm text-red-600 dark:text-red-400 mt-2">Cases MORE THAN DOUBLED in first year. Heroin doubled 2019 to 2020.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800"><div className="flex items-center justify-between mb-2"><h4 className="font-semibold text-slate-700 dark:text-slate-300">Farmer Welfare</h4><Badge variant="warning">{promiseDeliveryKPI.farmerWelfare.verdict}</Badge></div><p className="text-sm text-slate-500">{promiseDeliveryKPI.farmerWelfare.note}</p></div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800"><div className="flex items-center justify-between mb-2"><h4 className="font-semibold text-slate-700 dark:text-slate-300">&quot;Mafia Raj&quot;</h4><Badge variant="danger">{promiseDeliveryKPI.mafiaRaj.verdict}</Badge></div><p className="text-sm text-slate-500">Internal sources acknowledged mafia continued</p></div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800"><div className="flex items-center justify-between mb-2"><h4 className="font-semibold text-slate-700 dark:text-slate-300">Sacrilege Cases</h4><Badge variant="danger">{promiseDeliveryKPI.sacrilegeCases.verdict}</Badge></div><p className="text-sm text-slate-500">Top 5 nationally 2018-2020; no resolution</p></div>
        </div>
      </div>

      {/* Regional Seat Loss */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Regional Seat Loss (2017 to 2022)</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <DataTable headers={["Region", "2017", "2022", "Change"]} rows={promiseDeliveryKPI.electoralData.regionalSeats.map((r) => [r.region, r[2017].toString(), r[2022].toString(), <span key={r.region} className={r.change < 0 ? "text-red-600 font-semibold" : "text-green-600"}>{r.change > 0 ? "+" : ""}{r.change}</span>])} />
          <div>
            <h4 className="font-medium text-slate-600 dark:text-slate-400 mb-2">Trend</h4>
            <MiniChart data={getSeatLossTrend().map((d) => d.seats)} color="bg-red-500" height={100} />
            <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20">
              <p className="text-sm text-red-700 dark:text-red-400"><span className="font-semibold">Worst:</span> Malwa lost 38 of 40 seats</p>
              <p className="text-sm text-red-600 dark:text-red-300 mt-1">77% seat loss (77 to 18)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Failure */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white"><UsersRound className="h-6 w-6" /></div>
          <div><p className="font-semibold text-purple-700 dark:text-purple-400">Internal Party Collapse</p><p className="text-sm text-purple-600 dark:text-purple-300">Leadership warfare destroyed Congress</p></div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {promiseDeliveryKPI.leadershipTimeline.leaders.map((leader, idx) => (
            <div key={idx} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="font-semibold text-slate-700 dark:text-slate-300">{leader.name}</h4>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">{leader.role}</p>
              <ul className="space-y-1">{leader.keyActions.map((action, actionIdx) => (<li key={actionIdx} className="text-xs text-slate-500 dark:text-slate-400"> to {action}</li>))}</ul>
              <p className="text-xs text-red-600 dark:text-red-400 mt-2 font-medium">Verdict: {leader.assessment}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-400"><span className="font-semibold">Critical:</span> {promiseDeliveryKPI.leadershipTimeline.transitionNote}</p>
        </div>
      </div>

      {/* AAP vs Congress Comparison */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white"><Zap className="h-6 w-6" /></div>
          <div><p className="font-semibold text-blue-700 dark:text-blue-400">AAP vs Congress: Same Failures</p><p className="text-sm text-blue-600 dark:text-blue-300">2027 Attack: &quot;AAP = Congress 2.0&quot;</p></div>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 mb-6">
          {getAAPAttackLines().map((attack, idx) => (
            <div key={idx} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="text-xs text-slate-500 mb-1">AAP Claim:</p>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">&quot;{attack.claim}&quot;</p>
              <p className="text-xs text-red-600 dark:text-red-400 font-medium"> to {attack.attack}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30 mb-4">
          <p className="text-sm text-red-700 dark:text-red-400 font-semibold">{promiseDeliveryKPI.aapComparison.keyInsight}</p>
        </div>
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Comparative Accountability</h4>
        <DataTable headers={["Dimension", "Congress 2017-2022", "AAP 2022-2027"]} rows={promiseDeliveryKPI.aapComparison.comparativeFramework.map((c) => [c.dimension, c.congress2017_2022, c.aap2022_2027])} />
      </div>

      {/* Strategic Recommendations */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-4">2027 Strategic Recommendations</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {promiseDeliveryKPI.strategicRecommendations.map((rec) => (
            <div key={rec.number} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="flex items-start gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-bold">{rec.number}</span>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{rec.title}</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{rec.description}</p>
              {rec.canSay.length > 0 && <div className="mb-1"><p className="text-xs font-medium text-green-600">CAN: {rec.canSay[0].slice(0, 60)}...</p></div>}
              {rec.mustNotSay.length > 0 && <div><p className="text-xs font-medium text-red-600">NOT: {rec.mustNotSay[0].slice(0, 60)}...</p></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Promise Delivery Sources */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Promise Delivery Sources</h4>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          {promiseDeliveryKPI.sources.slice(0, 6).map((source) => (
            <div key={source.id} className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
              <Badge variant="default">{source.source}</Badge>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded bg-amber-100 dark:bg-amber-900/30">
          <p className="text-sm text-amber-700 dark:text-amber-400"><span className="font-semibold">Key:</span> AAP mirrors Congress failures. Frame as &quot;Congress without education achievements.&quot;</p>
        </div>
      </div>

      {/* =============================================== */}
      {/* LOCAL ISSUES MALWA SECTION */}
      {/* =============================================== */}
      <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
            <AlertOctagon className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-purple-700 dark:text-purple-400">
              Governance — Local Issues Malwa Region (MP1-Foundational)
            </p>
            <p className="text-sm text-purple-600 dark:text-purple-300">
              Malwa ({localIssuesMalwaKPI.regionalOverview.totalSeats} of 117 seats) — The decisive region | Data: 19 May 2026
            </p>
          </div>
        </div>

        {/* Malwa Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Malwa Seats"
            value={`${localIssuesMalwaKPI.regionalOverview.totalSeats}/117`}
            subtitle="Decisive region for government formation"
            color="bg-purple-500"
            icon={<AlertOctagon className="h-6 w-6" />}
          />
          <MetricCard
            title="AAP 2022 Win"
            value="66/69"
            subtitle="AAP swept Malwa in 2022"
            color="bg-red-500"
            icon={<TrendingDown className="h-6 w-6" />}
          />
          <MetricCard
            title="AAP Vote Share Drop"
            value="42% → 26%"
            subtitle="2022 to 2024 Lok Sabha"
            color="bg-orange-500"
            icon={<TrendingDownIcon className="h-6 w-6" />}
          />
          <MetricCard
            title="Congress 2024"
            value="7/13"
            subtitle="Punjab Lok Sabha seats"
            color="bg-blue-500"
            icon={<TrendingUp className="h-6 w-6" />}
          />
        </div>

        {/* Critical Issues Banner */}
        <div className="mb-6 rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <h4 className="font-bold text-red-700 dark:text-red-400">CRITICAL Issues (Voter Priority)</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {getCriticalIssues().map((issue) => (
              <Badge key={issue} variant="danger">{issue}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Drug Addiction Crisis - CRITICAL */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <Skull className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Drug Addiction — CRITICAL</p>
            <p className="text-sm text-red-600 dark:text-red-300">
              Most acute in: {localIssuesMalwaKPI.drugAddiction.mostAcuteDistricts.join(", ")}
            </p>
          </div>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Drug Users"
            value={`${(localIssuesMalwaKPI.drugAddiction.scale.totalDrugUsers / 1000000).toFixed(1)}M`}
            subtitle="Parliament Panel Report 2023"
            color="bg-red-500"
          />
          <MetricCard
            title="Children (10-17) with Disorders"
            value={`${(localIssuesMalwaKPI.drugAddiction.scale.childrenWithSubstanceDisorders / 1000).toFixed(0)}K`}
            subtitle="Substance use disorders"
            color="bg-red-600"
          />
          <MetricCard
            title="Families Affected"
            value={`${localIssuesMalwaKPI.drugAddiction.scale.familiesAffected}%`}
            subtitle="At least one addict"
            color="bg-orange-500"
          />
          <MetricCard
            title="Drones Seized (2024)"
            value={`${localIssuesMalwaKPI.drugAddiction.scale.dronesSeized2024}+`}
            subtitle="Double from 2023"
            color="bg-yellow-500"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-4">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Drug Deaths (Apr 2020 - Mar 2023)</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Reported</span>
              <span className="text-xl font-bold text-red-600">{localIssuesMalwaKPI.drugAddiction.scale.drugRelatedDeaths.reported}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">BJP Claimed (under AAP)</span>
              <span className="text-xl font-bold text-red-700">{localIssuesMalwaKPI.drugAddiction.scale.drugRelatedDeaths.bjpClaimed}</span>
            </div>
          </div>
          <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
            <h4 className="mb-2 font-semibold text-red-700 dark:text-red-400">Resolution Status</h4>
            <p className="text-sm text-red-600 dark:text-red-300">{localIssuesMalwaKPI.drugAddiction.resolutionStatus}</p>
          </div>
        </div>
      </div>

      {/* Cancer Belt & Water Contamination - CRITICAL */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
            <AlertCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-blue-700 dark:text-blue-400">Cancer Belt & Water Contamination — CRITICAL</p>
            <p className="text-sm text-blue-600 dark:text-blue-300">
              {localIssuesMalwaKPI.cancerBelt.scale.designation}
            </p>
          </div>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Muktsar Cancer Rate"
            value={`${localIssuesMalwaKPI.cancerBelt.scale.muktsarCancerPrevalence}/lakh`}
            subtitle="Highest in Punjab"
            color="bg-blue-500"
          />
          <MetricCard
            title="Uranium (Bathinda)"
            value={`${localIssuesMalwaKPI.cancerBelt.scale.bathindaUranium.concentration} ppb`}
            subtitle={`WHO limit: ${localIssuesMalwaKPI.cancerBelt.scale.bathindaUranium.whoLimit} ppb`}
            color="bg-red-500"
          />
          <MetricCard
            title="Samples Exceeded Limits"
            value={`${localIssuesMalwaKPI.cancerBelt.scale.barcAnalysis.exceededLimitsPercent}%`}
            subtitle={`of ${localIssuesMalwaKPI.cancerBelt.scale.barcAnalysis.samples} BARC samples`}
            color="bg-orange-500"
          />
          <MetricCard
            title="CGWB: Uranium Above Limits"
            value={`${localIssuesMalwaKPI.cancerBelt.scale.cgwB2025.uraniumAboveLimitsPercent}%`}
            subtitle={`of ${localIssuesMalwaKPI.cancerBelt.scale.cgwB2025.wellsSampled} wells`}
            color="bg-red-600"
          />
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">JJM Funding (2019-2026)</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Central Share</span>
            <span className="font-bold text-blue-600">Rs {localIssuesMalwaKPI.cancerBelt.scale.funding.centralShare} Cr</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">Total Expenditure</span>
            <span className="font-bold text-blue-700">Rs {localIssuesMalwaKPI.cancerBelt.scale.funding.totalExpenditure} Cr</span>
          </div>
        </div>
      </div>

      {/* Unemployment Crisis - CRITICAL */}
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-white">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-yellow-700 dark:text-yellow-400">Unemployment & Youth Distress — CRITICAL</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">
              Most acute in: {localIssuesMalwaKPI.unemployment.mostAffectedDistricts.join(", ")}
            </p>
          </div>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Youth Unemployment (15-29)"
            value={`${localIssuesMalwaKPI.unemployment.scale.youthUnemployment15129}%`}
            subtitle={`National: ${localIssuesMalwaKPI.unemployment.scale.nationalAverage}%`}
            color="bg-red-500"
          />
          <MetricCard
            title="Rural Youth Unemployment"
            value={`${localIssuesMalwaKPI.unemployment.scale.ruralYouthUnemployment}%`}
            subtitle={`Male: ${localIssuesMalwaKPI.unemployment.scale.ruralMaleUnemployment}% | Female: ${localIssuesMalwaKPI.unemployment.scale.ruralFemaleUnemployment}%`}
            color="bg-orange-500"
          />
          <MetricCard
            title="Female Labour Participation"
            value={`${localIssuesMalwaKPI.unemployment.scale.femaleLabourForceParticipation}%`}
            subtitle="Youth (15-29)"
            color="bg-red-600"
          />
          <MetricCard
            title="Punjab Debt"
            value={`Rs ${(localIssuesMalwaKPI.unemployment.scale.punjabDebt.amount / 100000).toFixed(1)} L Cr`}
            subtitle={`~${localIssuesMalwaKPI.unemployment.scale.punjabDebt.percentOfGSDP}% of GSDP`}
            color="bg-yellow-500"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Out-Migration Routes</h4>
            <div className="flex flex-wrap gap-2">
              {localIssuesMalwaKPI.unemployment.scale.outMigrationRoutes.map((route) => (
                <Badge key={route} variant="warning">{route}</Badge>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
            <h4 className="mb-2 font-semibold text-red-700 dark:text-red-400">AAP Claimed Jobs</h4>
            <p className="text-2xl font-bold text-red-600">{localIssuesMalwaKPI.unemployment.scale.aapClaimedJobs.toLocaleString()}</p>
            <p className="text-sm text-red-500">Quality and regularisation questioned</p>
          </div>
        </div>
      </div>

      {/* High Priority Issues */}
      <div className="rounded-xl border border-orange-200 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-900/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-orange-700 dark:text-orange-400">HIGH Priority Issues</p>
            <p className="text-sm text-orange-600 dark:text-orange-300">
              Canal irrigation, groundwater, stubble burning, health infrastructure
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Canal Irrigation */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Canal Irrigation</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Expenditure (FY 2022-25)</span>
                <span className="font-bold text-blue-600">Rs {localIssuesMalwaKPI.canalIrrigation.scale.canalLining.expenditure.toLocaleString()} Cr</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Canal Cleaned</span>
                <span className="font-bold text-blue-600">{localIssuesMalwaKPI.canalIrrigation.scale.canalLining.distanceCleaned.toLocaleString()} km</span>
              </div>
              <p className="text-xs text-red-500 mt-2">{localIssuesMalwaKPI.canalIrrigation.scale.tailEndProblem}</p>
            </div>
          </div>

          {/* Groundwater Depletion */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Groundwater Depletion</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Wells Monitored (CGWB 2025)</span>
                <span className="font-bold text-blue-600">{localIssuesMalwaKPI.groundwaterDepletion.scale.cgwB2025.wellsMonitored}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Shallow Water (0-10m)</span>
                <span className="font-bold text-red-600">{localIssuesMalwaKPI.groundwaterDepletion.scale.cgwB2025.shallowWaterPercent}%</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">{localIssuesMalwaKPI.groundwaterDepletion.scale.dualCrisis}</p>
            </div>
          </div>

          {/* Stubble Burning */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Stubble Burning</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Oct 2025 (single day)</span>
                <span className="font-bold text-red-600">{localIssuesMalwaKPI.stubbleBurning.scale.oct2025.cases} cases</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Malwa Share of Fires</span>
                <span className="font-bold text-orange-600">{localIssuesMalwaKPI.stubbleBurning.scale.malwaShareOfFires}%</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Paddy residue: {localIssuesMalwaKPI.stubbleBurning.scale.totalPaddyResidue}</p>
            </div>
          </div>

          {/* Health Infrastructure */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Health Infrastructure</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Moga Doctors</span>
                <span className="font-bold text-red-600">{localIssuesMalwaKPI.healthInfrastructure.keyEvidence.mogaDoctors.actual}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">vs Malerkotla</span>
                <span className="font-bold text-green-600">{localIssuesMalwaKPI.healthInfrastructure.keyEvidence.mogaDoctors.malerkotla}</span>
              </div>
              <p className="text-xs text-red-500 mt-2">{localIssuesMalwaKPI.healthInfrastructure.keyEvidence.aapMlaDharamkot}</p>
            </div>
          </div>
        </div>
      </div>

      {/* AAP Unfulfilled Promises */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <XCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">AAP Unfulfilled Promises — Political Leverage</p>
            <p className="text-sm text-red-600 dark:text-red-300">
              {localIssuesMalwaKPI.womenVoters.influence}
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-1 font-semibold text-slate-700 dark:text-slate-300">Women Rs 1,000/month</h4>
            <Badge variant="danger">{localIssuesMalwaKPI.aapPromises.brokenPromises.womenStipend.status}</Badge>
            <p className="mt-2 text-xs text-slate-500">{localIssuesMalwaKPI.womenVoters.deliveryImpact}</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-1 font-semibold text-slate-700 dark:text-slate-300">Drug-Free Punjab</h4>
            <Badge variant="danger">{localIssuesMalwaKPI.aapPromises.brokenPromises.drugFreePunjab.status}</Badge>
            <p className="mt-2 text-xs text-slate-500">{localIssuesMalwaKPI.aapPromises.brokenPromises.drugFreePunjab.promise}</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-1 font-semibold text-slate-700 dark:text-slate-300">22 Crops at MSP</h4>
            <Badge variant="danger">{localIssuesMalwaKPI.aapPromises.brokenPromises.msp22Crops.status}</Badge>
            <p className="mt-2 text-xs text-slate-500">{localIssuesMalwaKPI.aapPromises.brokenPromises.msp22Crops.promise}</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-1 font-semibold text-slate-700 dark:text-slate-300">Sand Mining Revenue</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Claimed:</span>
              <span className="font-bold text-red-600">Rs {localIssuesMalwaKPI.aapPromises.brokenPromises.sandMining.claimed.toLocaleString()} Cr</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Actual:</span>
              <span className="font-bold text-green-600">Rs {localIssuesMalwaKPI.aapPromises.brokenPromises.sandMining.actual.toLocaleString()} Cr</span>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-1 font-semibold text-slate-700 dark:text-slate-300">Mohalla Clinics</h4>
            <Badge variant="warning">{localIssuesMalwaKPI.aapPromises.brokenPromises.mohallaClinics.status}</Badge>
            <p className="mt-2 text-xs text-slate-500">{localIssuesMalwaKPI.aapPromises.brokenPromises.mohallaClinics.promise}</p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-1 font-semibold text-slate-700 dark:text-slate-300">AAP Internal Dissent</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300">{localIssuesMalwaKPI.aapInternalDissent.rajyaSabhaDefection.count} Rajya Sabha MPs defected (April 2026)</p>
            <p className="mt-1 text-xs text-red-500">{localIssuesMalwaKPI.aapInternalDissent.congressClaim}</p>
          </div>
        </div>
      </div>

      {/* Constituency Matrix - Top 30 Malwa Seats */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-700 dark:text-slate-300">
          Top 30 Malwa Seats — Congress Opportunity Matrix
        </h3>
        <DataTable
          headers={["#", "Constituency", "District", "2022 Winner", "Top Issues", "Congress Opportunity"]}
          rows={localIssuesMalwaKPI.constituencyMatrix.constituencies.map((c) => [
            c.rank.toString(),
            c.constituency,
            c.district,
            c.winner2022,
            c.topIssues.join(", "),
            <Badge key={c.rank} variant={getOpportunityVariant(c.congressOpportunity)}>{c.congressOpportunity}</Badge>,
          ])}
        />
      </div>

      {/* Campaign Leverage Points */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Highest-Impact Campaign Messages</p>
            <p className="text-sm text-green-600 dark:text-green-300">
              Key leverage points for Congress messaging
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {localIssuesMalwaKPI.leveragePoints.map((point) => (
            <div key={point.priority} className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
                  {point.priority}
                </span>
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{point.narrative}</h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top 10 Constituency Attack Lines */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <Crosshair className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Top 10 Constituency Attack Lines</p>
            <p className="text-sm text-red-600 dark:text-red-300">
              Priority targets for Congress campaign
            </p>
          </div>
        </div>

        <DataTable
          headers={["Priority", "Constituency", "Primary Attack", "Supporting Evidence"]}
          rows={localIssuesMalwaKPI.attackLines.map((line) => [
            line.priority.toString(),
            line.constituency,
            line.primaryAttack,
            line.supportingEvidence,
          ])}
        />
      </div>

      {/* AAP Internal Dissent Detail */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-700 dark:text-slate-300">AAP Internal Dissent</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="mb-2 font-semibold text-red-700 dark:text-red-400">Key Incidents</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {localIssuesMalwaKPI.aapInternalDissent.keyIncidents.map((incident, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-red-500">•</span>
                  {incident}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="mb-2 font-semibold text-blue-700 dark:text-blue-400">Electoral Arithmetic</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">4-cornered winning threshold</span>
                <span className="font-bold text-slate-700">{localIssuesMalwaKPI.antiIncumbency.winningThreshold.fourCornered}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-300">3-cornered winning threshold</span>
                <span className="font-bold text-slate-700">{localIssuesMalwaKPI.antiIncumbency.winningThreshold.threeCornered}%</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{localIssuesMalwaKPI.antiIncumbency.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Women & Dalit Voters */}
      <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h3 className="mb-4 text-lg font-semibold text-purple-700 dark:text-purple-400">Key Voter Demographics</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-pink-700 dark:text-pink-400">Women Voters (Swing Block)</h4>
            <div className="space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-300">{localIssuesMalwaKPI.womenVoters.influence}</p>
              <div className="rounded bg-pink-50 p-2 dark:bg-pink-900/20">
                <p className="text-pink-600 dark:text-pink-300">{localIssuesMalwaKPI.womenVoters.aapPromiseIssue}</p>
              </div>
              <p className="text-xs text-slate-500">{localIssuesMalwaKPI.womenVoters.drugCrisisImpact}</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-orange-700 dark:text-orange-400">Dalit Vote (32% of Punjab)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">% in Rural Malwa</span>
                <span className="font-bold text-slate-700">{localIssuesMalwaKPI.dalitVote.percentInRuralMalwa}%</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">{localIssuesMalwaKPI.dalitVote.aapInroads}</p>
              <p className="text-xs text-orange-500">{localIssuesMalwaKPI.dalitVote.congressMustOffer}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Gaps */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="mb-3 font-semibold text-slate-700 dark:text-slate-300">Data Verification Gaps</h4>
        <DataTable
          headers={["Data Point", "Status", "Action Required"]}
          rows={localIssuesMalwaKPI.dataGaps.map((gap) => [
            gap.dataPoint,
            <Badge key={gap.dataPoint} variant={gap.status === "NOT_FOUND" ? "danger" : gap.status === "PARTIAL" ? "warning" : "info"}>
              {gap.status}
            </Badge>,
            gap.actionRequired,
          ])}
        />
      </div>

      {/* ========================================== */}
      {/* SYNTHESIS INTELLIGENCE SECTION */}
      {/* Derived from: s1-s4 synthesis MD files */}
      {/* ========================================== */}

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

      {/* Sources */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="mb-3 font-semibold text-slate-700 dark:text-slate-300">Local Issues Malwa Sources</h4>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          {localIssuesMalwaKPI.sources.map((source) => (
            <div key={source.id} className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
              <Badge variant="default">{source.source}</Badge>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        <strong>Synthesis Sources:</strong> s1-cross-reference-validation.md (68 docs); s2-master-index.md (67 docs); s3-quality-validation.md (97% pass rate); s4-gap-analysis.md (405-section framework)
      </p>
    </div>
  );
}
