"use client";

import { Badge, MetricCard } from "@/components/ui/MetricCard";
import {
  regionalClimatology,
  historicalElectionWeather,
  feb2027ForecastParameters,
  weatherImpactOnTurnout,
  ruralUrbanWeatherImpact,
  congressWeatherRiskAssessment,
  boothLevelTransportProtocol,
  extendedVotingHoursScenarios,
  congressContingencyPlanning,
  staffDeploymentPriorities,
  gotvMessageAdaptation,
  electionDaySmsTiming,
  malwaWeatherProfile,
  majhaWeatherProfile,
  doabaWeatherProfile,
  extremeWeatherScenarios,
  congressContingencyInventory,
  immediateActions,
  twoWeeksBeforePolling,
  pollingDayActions,
} from "@/lib/weather-election-day-data";

export default function WeatherPlanningPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-lg font-bold text-white">
              🌤️
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Weather Planning
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            February weather patterns, logistics
          </p>
        </div>
        <Badge variant="warning">Adverse Planning</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Regions Covered"
          value="3"
          subtitle="Malwa, Majha, Doaba"
          color="bg-sky-500"
        />
        <MetricCard
          title="Fog Days (Feb)"
          value={feb2027ForecastParameters.fog.match(/\d+/)?.[0] ?? "8-14"}
          subtitle="Expected in February"
          color="bg-blue-500"
        />
        <MetricCard
          title="Temperature Range"
          value="5-22°C"
          subtitle="February 2027"
          color="bg-teal-500"
        />
        <MetricCard
          title="Adverse Weather Probability"
          value="~40%"
          subtitle="Fog or rain on polling day"
          change={5}
          trend="neutral"
          color="bg-amber-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {regionalClimatology.map((region) => (
          <div
            key={region.region}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {region.region}
            </h3>
            <span className="text-xs text-slate-400">{region.seats} seats</span>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Temperature</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {region.temperature}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Rainfall</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {region.rainfall}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Fog Days</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {region.fogDays}
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400">{region.characteristics}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Historical Election Day Weather
          </h3>
          <div className="space-y-4">
            {historicalElectionWeather.map((election) => (
              <div
                key={election.election}
                className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {election.election} ({election.date})
                  </span>
                  <span className="text-xs text-slate-500">
                    {election.avgTemp}
                  </span>
                </div>
                <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
                  {election.weatherEvent}
                </p>
                <ul className="mt-2 space-y-1">
                  {election.observations.map((obs, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-500 dark:text-slate-400"
                    >
                      • {obs}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Weather Impact on Turnout
          </h3>
          <div className="space-y-3">
            {weatherImpactOnTurnout.map((w) => (
              <div
                key={w.weatherCondition}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {w.weatherCondition}
                </span>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {w.turnoutImpact}
                </p>
                {"effectConcentrated" in w && (
                  <p className="text-xs text-slate-400">
                    Affected: {w.effectConcentrated}
                  </p>
                )}
                {"mostAffected" in w && (
                  <p className="text-xs text-slate-400">
                    Most affected: {w.mostAffected}
                  </p>
                )}
              </div>
            ))}
          </div>

          <h4 className="mb-3 mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Congress Weather Risk
          </h4>
          <div className="rounded-lg border border-red-100 bg-red-50 p-3 dark:border-red-900/30 dark:bg-red-900/20">
            <p className="text-sm font-medium text-red-700 dark:text-red-400">
              {congressWeatherRiskAssessment.summary}
            </p>
            <p className="mt-1 text-xs text-red-500">
              {congressWeatherRiskAssessment.priorityRisk}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          Rural vs Urban Impact by Voter Category
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="pb-3 text-left font-medium text-slate-500 dark:text-slate-400">
                  Voter Category
                </th>
                <th className="pb-3 text-left font-medium text-slate-500 dark:text-slate-400">
                  Weather
                </th>
                <th className="pb-3 text-left font-medium text-slate-500 dark:text-slate-400">
                  Impact
                </th>
                <th className="pb-3 text-left font-medium text-slate-500 dark:text-slate-400">
                  Est. Swing
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {ruralUrbanWeatherImpact.map((row, i) => (
                <tr key={i}>
                  <td className="py-2.5 font-medium text-slate-700 dark:text-slate-300">
                    {row.voterCategory}
                  </td>
                  <td className="py-2.5 text-slate-500 dark:text-slate-400">
                    {row.weatherVariable}
                  </td>
                  <td className="py-2.5 text-slate-500 dark:text-slate-400">
                    {row.impactDirection}
                  </td>
                  <td className="py-2.5 font-semibold text-sky-600 dark:text-sky-400">
                    {row.estimatedSwing}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { region: "Malwa", profile: malwaWeatherProfile, color: "bg-amber-500" },
          { region: "Majha", profile: majhaWeatherProfile, color: "bg-blue-500" },
          { region: "Doaba", profile: doabaWeatherProfile, color: "bg-teal-500" },
        ].map(({ region, profile, color }) => (
          <div
            key={region}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {region} Profile
            </h3>
            <span className="text-xs text-slate-400">{profile.seats} seats</span>
            <div className="mt-3 space-y-1 text-sm">
              <p className="text-slate-500 dark:text-slate-400">
                {profile.weatherProfile}
              </p>
              <p className="text-slate-500 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Temperature:
                </span>{" "}
                {"temperature" in profile
                  ? profile.temperature
                  : (profile as typeof majhaWeatherProfile).weatherProfile.match(/[\d.]+°C/g)?.join(", ") ?? "See profile"}
              </p>
              {"fog" in profile && (
                <p className="text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Fog:
                  </span>{" "}
                  {profile.fog}
                </p>
              )}
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Vulnerabilities
              </span>
              <ul className="mt-2 space-y-1">
                {profile.specificVulnerabilities.slice(0, 2).map((v, i) => (
                  <li key={i} className="text-xs text-slate-400">
                    • {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Priority voters
              </span>
              <ul className="mt-2 space-y-1">
                {profile.congressPriority.slice(0, 2).map((p, i) => (
                  <li key={i} className="text-xs text-slate-400">
                    • {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Extreme Weather Scenarios
          </h3>
          <div className="space-y-3">
            {extremeWeatherScenarios.map((s) => (
              <div
                key={s.scenario}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {s.scenario}
                  </span>
                  <Badge variant="warning">{s.probability}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {s.impact}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  <span className="font-medium">Congress action:</span>{" "}
                  {s.congressAction}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Contingency Planning
          </h3>
          <div className="space-y-3">
            {extendedVotingHoursScenarios.map((s) => (
              <div
                key={s.scenario}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {s.scenario}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {s.recommendedAction}
                </p>
              </div>
            ))}
          </div>
          <h4 className="mb-3 mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Staff Deployment
          </h4>
          <div className="space-y-2">
            {staffDeploymentPriorities.map((s) => (
              <div
                key={s.role}
                className="flex items-start justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {s.role}
                  </span>
                  <p className="text-xs text-slate-400">{s.task}</p>
                </div>
                <span className="whitespace-nowrap text-xs text-slate-500">
                  {s.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            GOTV Message Adaptation
          </h3>
          <div className="space-y-3">
            {gotvMessageAdaptation.map((msg, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <div className="flex items-center justify-between">
                  <Badge
                    variant={
                      msg.weather === "Clear weather"
                        ? "success"
                        : msg.weather?.includes("Foggy")
                          ? "warning"
                          : "info"
                    }
                  >
                    {msg.weather ?? msg.emphasis}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {msg.message ?? msg.emphasis}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Election Day SMS Schedule
          </h3>
          <div className="space-y-2">
            {electionDaySmsTiming.map((sms) => (
              <div
                key={sms.timing}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-sky-600 dark:text-sky-400">
                    {sms.timing}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {sms.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          Action Timeline
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-400">
              Immediate Actions
            </h4>
            <ul className="mt-2 space-y-2">
              {immediateActions.map((a, i) => (
                <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                  • {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-sky-600 dark:text-sky-400">
              Two Weeks Before
            </h4>
            <ul className="mt-2 space-y-2">
              {twoWeeksBeforePolling.map((a, i) => (
                <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                  • {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-green-600 dark:text-green-400">
              Polling Day
            </h4>
            <ul className="mt-2 space-y-2">
              {pollingDayActions.map((a, i) => (
                <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                  • {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          Contingency Inventory
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="pb-3 text-left font-medium text-slate-500 dark:text-slate-400">
                  Item
                </th>
                <th className="pb-3 text-left font-medium text-slate-500 dark:text-slate-400">
                  Quantity per Segment
                </th>
                <th className="pb-3 text-left font-medium text-slate-500 dark:text-slate-400">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {congressContingencyInventory.map((item, i) => (
                <tr key={i}>
                  <td className="py-2.5 font-medium text-slate-700 dark:text-slate-300">
                    {item.item}
                  </td>
                  <td className="py-2.5 text-slate-500 dark:text-slate-400">
                    {item.quantity}
                  </td>
                  <td className="py-2.5 text-slate-500 dark:text-slate-400">
                    {item.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
