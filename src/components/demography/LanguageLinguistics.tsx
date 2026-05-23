"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import {
  languageLinguisticsData,
  dialectInfo,
  scriptUsageData,
  channelScriptMatrix,
  dialectSlogans,
} from "@/lib/kpi-data";

/**
 * Language & Linguistics Section for Demography Dashboard
 * Data derived from: research-M2/MP1-foundational/demographics/language-linguistics.md
 */
export default function LanguageLinguistics() {
  const { motherTongueDistribution, districtLiteracy, languageEvents, congressLanguagePosition, priorityActions, dataGaps } = languageLinguisticsData;

  const totalSpeakers = motherTongueDistribution.reduce((sum, lang) => sum + lang.speakers, 0);

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-6 shadow-sm dark:border-purple-800 dark:bg-purple-900/10">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
            L
          </span>
          <div>
            <h2 className="text-xl font-bold text-purple-800 dark:text-purple-300">
              Language & Linguistics
            </h2>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Mother tongue distribution, dialects, script usage & campaign language matrix
            </p>
          </div>
          <Badge variant="info">Cycle 6 Data</Badge>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Punjabi Speakers"
            value="89.82%"
            subtitle="24.9M speakers (Census 2011)"
            color="purple"
          />
          <MetricCard
            title="Hindi Speakers"
            value="7.85%"
            subtitle="2.18M speakers"
            color="orange"
          />
          <MetricCard
            title="Overall Literacy"
            value="83.4%"
            subtitle="PLFS 2024"
            color="cyan"
          />
          <MetricCard
            title="Roman Punjabi (Social)"
            value="~70%"
            subtitle="Estimated social media dominance"
            color="blue"
          />
        </div>
      </div>

      {/* Mother Tongue Distribution */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-200">
          Mother Tongue Distribution (Census 2011)
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {motherTongueDistribution.map((lang) => (
            <div key={lang.language} className="rounded-lg bg-slate-50 p-4 dark:bg-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {lang.language}
                </span>
                <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                  {lang.percentage}%
                </span>
              </div>
              <ProgressBar
                label=""
                value={lang.percentage}
                max={100}
                color={lang.language === "Punjabi" ? "purple" : "amber"}
              />
              <p className="mt-1 text-xs text-slate-500">
                {(lang.speakers / 1000000).toFixed(2)}M speakers
              </p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Source: Census of India 2011 Language Report | Total population: {totalSpeakers.toLocaleString()}
        </p>
      </div>

      {/* Dialect Overview */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-sm dark:border-emerald-800 dark:bg-emerald-900/10">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
            Punjabi Dialects — Constituency Breakdown
          </h3>
          <Badge variant="success">4 Dialects</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dialectInfo.map((dialect) => (
            <div
              key={dialect.dialect}
              className={`rounded-lg p-4 ${
                dialect.priority === "CRITICAL"
                  ? "bg-orange-100 dark:bg-orange-900/30 border border-orange-300"
                  : dialect.priority === "HIGH"
                  ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200"
                  : "bg-white dark:bg-slate-800 border border-slate-200"
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-bold text-slate-800 dark:text-slate-200">
                  {dialect.name}
                </h4>
                <Badge
                  variant={
                    dialect.priority === "CRITICAL"
                      ? "danger"
                      : dialect.priority === "HIGH"
                      ? "warning"
                      : "default"
                  }
                >
                  {dialect.priority}
                </Badge>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Seats:</span>
                  <span className="font-semibold">{dialect.approximateSeats}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Region:</span>
                  <span className="text-xs">{dialect.region.split(" ")[0]}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                {dialect.characteristics.slice(0, 80)}...
              </p>
            </div>
          ))}
        </div>

        {/* Dialect Priority Table */}
        <div className="mt-6">
          <DataTable
            headers={["Dialect", "Region", "Approx. ACs", "Priority", "Key Districts"]}
            rows={dialectInfo.map((d) => [
              d.name,
              d.region.split(" ")[0],
              d.approximateSeats.toString(),
              d.priority,
              d.districts.slice(0, 3).join(", ") + (d.districts.length > 3 ? "..." : ""),
            ])}
            caption="Dialect-Region Quick Reference"
          />
        </div>
      </div>

      {/* Script Usage */}
      <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-6 shadow-sm dark:border-blue-800 dark:bg-blue-900/10">
        <h3 className="mb-4 text-lg font-semibold text-blue-800 dark:text-blue-300">
          Script Usage Patterns
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {scriptUsageData.map((script) => (
            <div key={script.script} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
              <h4 className="font-bold text-slate-800 dark:text-slate-200">
                {script.name}
              </h4>
              {script.literacy && (
                <ProgressBar label="Literacy" value={script.literacy} max={100} color="blue" />
              )}
              <div className="mt-2 space-y-1 text-xs">
                {script.context.slice(0, 2).map((ctx, i) => (
                  <p key={i} className="text-slate-600 dark:text-slate-400">
                    {ctx}
                  </p>
                ))}
              </div>
              <p className="mt-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                {script.campaignNotes.slice(0, 60)}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Channel-Script Matrix */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6 shadow-sm dark:border-amber-800 dark:bg-amber-900/10">
        <h3 className="mb-4 text-lg font-semibold text-amber-800 dark:text-amber-300">
          Campaign Script Selection by Channel
        </h3>
        <DataTable
          headers={["Channel", "Primary Script", "Secondary", "Notes"]}
          rows={channelScriptMatrix.map((c) => [
            c.channel,
            c.primaryScript.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase()),
            c.secondaryScript?.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "-",
            c.notes.slice(0, 40),
          ])}
          caption="Script Selection Matrix"
        />
      </div>

      {/* Dialect-Adapted Slogans */}
      <div className="rounded-xl border border-pink-200 bg-pink-50/50 p-6 shadow-sm dark:border-pink-800 dark:bg-pink-900/10">
        <h3 className="mb-4 text-lg font-semibold text-pink-800 dark:text-pink-300">
          Dialect-Adapted Campaign Slogans
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-pink-100 dark:bg-pink-900/30">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-pink-700 dark:text-pink-300">
                  Message Theme
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-pink-700 dark:text-pink-300">
                  Majhi
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-pink-700 dark:text-pink-300">
                  Malwai
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-pink-700 dark:text-pink-300">
                  Doabi
                </th>
                <th className="px-4 py-2 text-left text-xs font-semibold uppercase text-pink-700 dark:text-pink-300">
                  Puadhi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-100 dark:divide-pink-800">
              {dialectSlogans.map((slogan, i) => (
                <tr key={i}>
                  <td className="px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {slogan.messageTheme}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                    {slogan.majhi}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                    {slogan.malwai}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                    {slogan.doabi}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">
                    {slogan.puadhi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Literacy by District */}
      <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-6 shadow-sm dark:border-teal-800 dark:bg-teal-900/10">
        <h3 className="mb-4 text-lg font-semibold text-teal-800 dark:text-teal-300">
          District Literacy Rates
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {districtLiteracy.map((d) => (
            <div
              key={d.district}
              className={`rounded-lg p-3 ${
                d.deviation < -10
                  ? "bg-red-50 dark:bg-red-900/20 border border-red-200"
                  : d.deviation > 0
                  ? "bg-green-50 dark:bg-green-900/20 border border-green-200"
                  : "bg-white dark:bg-slate-800 border border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {d.district}
                </span>
                <span
                  className={`text-sm font-bold ${
                    d.deviation < -10
                      ? "text-red-600"
                      : d.deviation > 0
                      ? "text-green-600"
                      : "text-slate-600"
                  }`}
                >
                  {d.literacyRate}%
                </span>
              </div>
              <ProgressBar
                label=""
                value={d.literacyRate}
                max={100}
                color={d.deviation < -10 ? "rose" : d.deviation > 0 ? "emerald" : "cyan"}
              />
              <p className="mt-1 text-xs text-slate-500">
                {d.deviation > 0 ? "+" : ""}
                {d.deviation}% vs state avg
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <span className="text-xs text-slate-600">Low literacy (audio-first recommended)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-500" />
            <span className="text-xs text-slate-600">Above average</span>
          </div>
        </div>
      </div>

      {/* Language Politics */}
      <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-6 shadow-sm dark:border-violet-800 dark:bg-violet-900/10">
        <h3 className="mb-4 text-lg font-semibold text-violet-800 dark:text-violet-300">
          Language Politics — Congress Opportunity
        </h3>
        <div className="space-y-3">
          {languageEvents.map((event, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800"
            >
              <Badge variant={event.congressOpportunity ? "success" : "warning"}>
                {event.date}
              </Badge>
              <div>
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {event.title}
                </h4>
                <p className="text-xs text-slate-500">{event.description.slice(0, 100)}...</p>
                <p className="mt-1 text-xs text-slate-400">Source: {event.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Congress Position */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
              DO
            </h4>
            <ul className="space-y-1">
              {congressLanguagePosition.do.map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <span className="text-green-500">✓</span>
                  {action.replace("Campaign aggressively in Punjabi. ", "").replace("Position Congress as ", "")}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <h4 className="mb-2 text-sm font-semibold text-red-700 dark:text-red-400">
              DO NOT
            </h4>
            <ul className="space-y-1">
              {congressLanguagePosition.doNot.map((action, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <span className="text-red-500">✗</span>
                  {action.replace("Do NOT use Hindi as primary campaign language in any constituency -- it signals cultural insensitivity.", "Use Hindi as primary campaign language")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Priority Actions */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-800 dark:text-slate-200">
          Priority Language Actions for Campaign HQ
        </h3>
        <div className="grid gap-3 md:grid-cols-2">
          {priorityActions.map((action, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-700"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">
                {i + 1}
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-400">{action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Gaps */}
      <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
        <h4 className="mb-3 text-sm font-semibold text-yellow-700 dark:text-yellow-400">
          Data Gaps & Verification Needs
        </h4>
        <div className="grid gap-2 md:grid-cols-2">
          {dataGaps.map((gap) => (
            <div key={gap.dataPoint} className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-400">{gap.dataPoint}:</span>
              <div className="text-right">
                <span className="font-medium text-orange-600">{gap.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
