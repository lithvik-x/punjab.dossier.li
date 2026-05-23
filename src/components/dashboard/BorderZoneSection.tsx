"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import {
  borderZoneOverview,
  borderSecurityInfrastructure,
  attariWagahICP,
  kartarpurCorridor,
  drugTraffickingData,
  borderFarmerImpact,
  borderConstituencies,
  congressBorderStrategy,
  getFencingStatus,
  getBorderFarmerStats,
} from "@/lib/border-zone-data";
import { Shield, AlertTriangle, TrendingUp, TrendingDown, Users, DollarSign, MapPin, Activity } from "lucide-react";

/**
 * Border Zone Section Component
 * Displays Punjab's 553 km International Border with Pakistan data
 */
export function BorderZoneSection() {
  const fencingStatus = getFencingStatus();
  const farmerStats = getBorderFarmerStats();

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-blue-700 dark:text-blue-400">
              Punjab Border Zone (MP1-Foundational/Geography)
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-300">
              553 km International Border with Pakistan — Strategic vulnerabilities and electoral implications
            </p>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Total Border Length"
            value="553 km"
            subtitle="International Border with Pakistan"
            color="blue"
          />
          <MetricCard
            title="Border Districts"
            value="6"
            subtitle="Malwa & Majha regions"
            color="blue"
          />
          <MetricCard
            title="Assembly Constituencies"
            value="28-30"
            subtitle="Out of 117 total"
            color="blue"
          />
          <MetricCard
            title="Farming Families"
            value="12,000+"
            subtitle="Beyond fence affected"
            color="blue"
          />
        </div>

        {/* Fencing Status */}
        <div className="mb-6 rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Border Fencing Status</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{fencingStatus.fenced} km</p>
                <p className="text-sm text-slate-500">Fenced ({fencingStatus.percentageFenced}%)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">{fencingStatus.unfenced} km</p>
                <p className="text-sm text-slate-500">Unfenced (riverine gaps)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">60</p>
                <p className="text-sm text-slate-500">Vulnerable riverine points</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <ProgressBar
              label="Fencing Completion"
              value={fencingStatus.percentageFenced}
              max={100}
              color="emerald"
            />
          </div>
        </div>
      </div>

      {/* Border Districts Grid */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Border Districts & Key Assembly Constituencies
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {borderZoneOverview.districts.map((district) => (
            <div key={district.name} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-700 dark:text-slate-300">{district.name}</h4>
                <Badge variant="info">{district.region}</Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-500">Key ACs:</p>
                <div className="flex flex-wrap gap-1">
                  {district.keyACs.map((ac) => (
                    <span key={ac} className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {ac}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Security Infrastructure */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Border Security Infrastructure (BSF)
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="BSF Battalions"
            value={borderSecurityInfrastructure.bsfDeployment.totalBattalions}
            subtitle="Western Command"
            color="cyan"
          />
          <MetricCard
            title="BSF Personnel"
            value={borderSecurityInfrastructure.bsfDeployment.totalPersonnel}
            subtitle="Across Western Command"
            color="cyan"
          />
          <MetricCard
            title="2025 Drone Recoveries"
            value={borderSecurityInfrastructure.recoveries2025.dronesRecovered}
            subtitle="+88% from 2024"
            color="rose"
          />
          <MetricCard
            title="Heroin Seized (2025)"
            value={borderSecurityInfrastructure.recoveries2025.heroinSeized}
            subtitle="Along border"
            color="rose"
          />
        </div>

        {/* Technology Systems */}
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Surveillance Technology</h4>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {borderSecurityInfrastructure.technologies.map((tech) => (
            <div key={tech.name} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <div className="flex items-start gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{tech.function}</p>
                  {tech.yearActivated && (
                    <Badge variant="default" className="mt-1">{tech.yearActivated}</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Border Points */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Attari-Wagah ICP */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-amber-700 dark:text-amber-400">Attari-Wagah ICP</p>
              <p className="text-sm text-amber-600 dark:text-amber-300">Primary India-Pak Trade Point</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Opened</span>
              <Badge variant="success">{attariWagahICP.inaugurated}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Status</span>
              <Badge variant="danger">CLOSED (Post-Pahalgam)</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Peak Trade (2018-19)</span>
              <span className="font-semibold text-green-600">{attariWagahICP.tradeHistory.peak.value}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Post-Pulwama (2022-23)</span>
              <span className="font-semibold text-red-600">{attariWagahICP.tradeHistory.postPulwama.value}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Recovery (2023-24)</span>
              <span className="font-semibold text-green-600">{attariWagahICP.tradeHistory.recovery.value}</span>
            </div>
            <div className="mt-2 rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                Trade Halted: {attariWagahICP.tradeHistory.postPahalgam2025.tradeHalted}
              </p>
              <p className="text-xs text-red-600 dark:text-red-300 mt-1">
                Employment Impact: {attariWagahICP.tradeHistory.postPahalgam2025.employmentImpact}
              </p>
            </div>
          </div>
        </div>

        {/* Kartarpur Corridor */}
        <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-400">Kartarpur Corridor</p>
              <p className="text-sm text-purple-600 dark:text-purple-300">4.1 km Visa-Free Corridor</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Opened</span>
              <Badge variant="success">{kartarpurCorridor.inaugurated}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600 dark:text-slate-400">Current Status</span>
              <Badge variant="warning">Limited Operations</Badge>
            </div>
            {kartarpurCorridor.statusHistory.map((status, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{status.period}</span>
                <Badge variant={status.status === 'operational' ? 'success' : status.status === 'closed' ? 'danger' : 'warning'}>
                  {status.status}
                </Badge>
              </div>
            ))}
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-2">
              {kartarpurCorridor.emotionalSignificance}
            </p>
          </div>
        </div>
      </div>

      {/* Drug Trafficking */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Drone-Driven Drug Smuggling</p>
            <p className="text-sm text-red-600 dark:text-red-300">Explosive surge in border trafficking</p>
          </div>
        </div>

        {/* Drone Seizure Trend */}
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Drone Seizure Trend</h4>
        <div className="mb-6">
          <DataTable
            headers={["Year", "Cases", "Source", "Note"]}
            rows={drugTraffickingData.droneSeizures.map((d) => [
              d.year.toString(),
              d.cases.toString(),
              d.source,
              d.note || "-",
            ])}
          />
        </div>

        {/* Hotspot Districts */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Hotspot Districts</h4>
            <div className="flex flex-wrap gap-2">
              {drugTraffickingData.hotspotDistricts.map((district) => (
                <Badge key={district} variant="danger">{district}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Drug Types</h4>
            <div className="flex flex-wrap gap-2">
              {drugTraffickingData.drugTypes.map((drug) => (
                <Badge key={drug.type} variant={drug.note === 'primary' ? 'danger' : 'warning'}>
                  {drug.type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Border Farmer Impact */}
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Border Farmer Impact</p>
            <p className="text-sm text-green-600 dark:text-green-300">
              {farmerStats.families.toLocaleString()} families | {farmerStats.land} | {farmerStats.villages}
            </p>
          </div>
        </div>

        {/* Farmer Restrictions */}
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Access Restrictions</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Winter Hours</span>
                <Badge variant="warning">{borderFarmerImpact.restrictions.accessHours.winter}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Summer Hours</span>
                <Badge variant="warning">{borderFarmerImpact.restrictions.accessHours.summer}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Kisan ID</span>
                <Badge variant="danger">{borderFarmerImpact.restrictions.kisanID}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Effective Farming Days</span>
                <Badge variant="danger">{borderFarmerImpact.restrictions.effectiveFarmingDays}/year</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Crop Damage</span>
                <Badge variant="danger">{borderFarmerImpact.restrictions.cropDamage.extent}</Badge>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Compensation Status</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Committee</span>
                <Badge variant="info">{borderFarmerImpact.compensation.committee}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Current Rate</span>
                <span className="font-semibold text-green-600">{borderFarmerImpact.compensation.currentRate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">2023-24 Status</span>
                <Badge variant="danger">Arrears Pending</Badge>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
              <p className="text-sm text-red-700 dark:text-red-400">Key Issues:</p>
              <ul className="mt-1 space-y-1 text-xs text-red-600 dark:text-red-300">
                {borderFarmerImpact.compensation.disbursementIssues.slice(0, 3).map((issue, idx) => (
                  <li key={idx}>• {issue}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fence Realignment Proposal */}
        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Fence Realignment Proposal (2025-26)</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="success">Announced</Badge>
                <span className="text-sm text-slate-500">{borderFarmerImpact.fenceRealignment.announcement.date}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {borderFarmerImpact.fenceRealignment.announcement.status}
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Land Restoration: <span className="font-semibold text-green-600">{borderFarmerImpact.fenceRealignment.landRestoration}</span>
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Farmers Position:</p>
              <ul className="mt-1 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• Willing up to {borderFarmerImpact.fenceRealignment.farmersPosition.willingDistance} from border</li>
                <li>• Demand: {borderFarmerImpact.fenceRealignment.farmersPosition.permanentAcquisitionRate}</li>
              </ul>
              <Badge variant="warning" className="mt-2">Trust Deficit: {borderFarmerImpact.fenceRealignment.politicalTrustDeficit}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Key Electoral Issues */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Key Electoral Issues in Border Belt
        </h3>
        <div className="grid gap-3 md:grid-cols-2">
          {borderConstituencies.keyElectoralIssues.map((issue) => (
            <div key={issue.priority} className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                {issue.priority}
              </div>
              <div>
                <p className="font-medium text-slate-700 dark:text-slate-300">{issue.issue}</p>
                <p className="text-xs text-slate-500 mt-1">{issue.affectedPopulation}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">{issue.politicalRelevance}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Congress Strategy */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">Congress 2027 Strategy</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">Positioning: {congressBorderStrategy.positioning}</p>
          </div>
        </div>

        {/* Key Promises */}
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Key Promises</h4>
        <div className="grid gap-3 md:grid-cols-2 mb-6">
          {congressBorderStrategy.keyPromises.map((promise) => (
            <div key={promise.number} className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="font-medium text-slate-700 dark:text-slate-300">{promise.promise}</p>
              <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">{promise.historicalContext}</p>
            </div>
          ))}
        </div>

        {/* Attack Vectors */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-3">Attack AAP On:</h4>
            <ul className="space-y-2">
              {congressBorderStrategy.attackVectors.againstAAP.map((attack, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-red-600 dark:text-red-300">
                  <span className="text-red-500">→</span>
                  {attack}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-orange-100 p-4 dark:bg-orange-900/30">
            <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-3">Attack BJP On:</h4>
            <ul className="space-y-2">
              {congressBorderStrategy.attackVectors.againstBJP.map((attack, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-orange-600 dark:text-orange-300">
                  <span className="text-orange-500">→</span>
                  {attack}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Data Sources</h4>
        <div className="grid gap-2 md:grid-cols-2">
          {[
            { source: "BSF Western Command ADG", date: "December 2025", pub: "Times of India" },
            { source: "NCB Annual Report 2024", date: "September 2025", pub: "The Hindu" },
            { source: "Sanskriti IAS (Fence Realignment)", date: "2026", pub: "Sanskriti IAS" },
            { source: "Mongabay India", date: "May 2025", pub: "Mongabay" },
            { source: "CM Mann Announcement", date: "April 2026", pub: "Hindustan Times" },
            { source: "Attari Trade Closure", date: "April 2025", pub: "Indian Express" },
          ].map((src, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">{src.source}</span>
              <div className="flex items-center gap-2">
                <Badge variant="default">{src.date}</Badge>
                <span className="text-xs text-slate-500">{src.pub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
