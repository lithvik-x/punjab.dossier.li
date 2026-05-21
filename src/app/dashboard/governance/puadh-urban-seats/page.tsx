"use client";

import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";
import { puadhLocalIssuesKPI, getPuadhCriticalIssues, getPuadhStrategicImplications } from "@/lib/puadh-local-issues-data";
import {
  MapPin, Factory, Bus, AlertCircle, Building2, Target,
} from "lucide-react";

/**
 * Governance Dashboard - Puadh Region & Urban Seats
 * SAS Nagar, Ludhiana Urban, Patiala, Fatehgarh Sahib, Rupnagar
 */
export default function GovernancePuadhUrbanSeatsPage() {
  const criticalIssues = getPuadhCriticalIssues("Ludhiana");
  const strategicImplications = getPuadhStrategicImplications();

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
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
          />
          <MetricCard
            title="City Bus Planning"
            value={`${puadhLocalIssuesKPI.sasNagar.keyStats.cityBusPlanningYears} yrs`}
            subtitle="No service delivered"
            color="bg-purple-500"
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
          />
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

      {/* Strategic Implications */}
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
          {strategicImplications.map((strategy) => (
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
            </div>
          ))}
        </div>
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
    </div>
  );
}
