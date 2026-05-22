"use client";

import { Badge, MetricCard } from "@/components/ui/MetricCard";
import {
  centralGovernmentSchemes,
  stateGovernmentSchemes,
  administrativeBottlenecks,
  dbtPenetration,
  dbtAdvantages,
  dbtLimitations,
  inclusionErrors,
  exclusionErrors,
  leakageRates,
  eliteCapturePatterns,
  beneficiaryBarriers,
  voterAttributionPatterns,
  congressAAPPositioning,
  informationAsymmetry,
  deliveryVsAwarenessReality,
  welfareKeyConcepts,
} from "@/lib/government-schemes-welfare-data";
import {
  lawOrderWelfareData,
  getDrugSeizureSummary,
  getBulletInjuryRate,
} from "@/lib/laworder-welfare-data";

export default function WelfareDeliveryPage() {
  const drugSeizures = getDrugSeizureSummary();
  const bulletInjuryRate = getBulletInjuryRate();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-lg font-bold text-white">
              🏥
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Welfare Delivery
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Government schemes, attribution challenges
          </p>
        </div>
        <Badge variant="info">Delivery Analysis</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Central Schemes"
          value={centralGovernmentSchemes.length}
          subtitle="Major welfare programs"
          color="bg-teal-500"
        />
        <MetricCard
          title="DBT Penetration"
          value={dbtPenetration.majorSchemes}
          subtitle="Major schemes covered"
          color="bg-blue-500"
        />
        <MetricCard
          title="Admin Bottlenecks"
          value={administrativeBottlenecks.length}
          subtitle="Delivery chain issues"
          color="bg-amber-500"
        />
        <MetricCard
          title="Voter Attribution Confusion"
          value="40-60%"
          subtitle="Cannot ID responsible govt"
          color="bg-purple-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Central Government Schemes
          </h3>
          <div className="space-y-4">
            {centralGovernmentSchemes.map((scheme) => (
              <div
                key={scheme.scheme}
                className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <h4 className="font-medium text-slate-700 dark:text-slate-300">
                  {scheme.scheme}
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {scheme.description}
                </p>
                <div className="mt-2 flex gap-4 text-xs text-slate-400">
                  <span>Beneficiaries: {scheme.beneficiaries}</span>
                  <span>Delivery: {scheme.deliveryMechanism}</span>
                </div>
                {"challenges" in scheme && (
                  <ul className="mt-2 space-y-1">
                    {scheme.challenges.map((c, i) => (
                      <li key={i} className="text-xs text-amber-600 dark:text-amber-400">
                        • {c}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            State Government Schemes
          </h3>
          <div className="space-y-4">
            {stateGovernmentSchemes.map((scheme) => (
              <div
                key={scheme.scheme}
                className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <h4 className="font-medium text-slate-700 dark:text-slate-300">
                  {scheme.scheme}
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {scheme.description}
                </p>
                {"status" in scheme && (
                  <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                    {scheme.status}
                  </p>
                )}
                {"coverage" in scheme && (
                  <p className="mt-1 text-xs text-slate-400">
                    Coverage: {scheme.coverage}
                  </p>
                )}
                {"inclusionGaps" in scheme && (
                  <ul className="mt-1 space-y-1">
                    {scheme.inclusionGaps?.map((gap, i) => (
                      <li key={i} className="text-xs text-red-500">
                        • Gap: {gap}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Administrative Bottlenecks
          </h3>
          <div className="space-y-3">
            {administrativeBottlenecks.map((b) => (
              <div
                key={b.issue}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {b.issue}
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {b.description}
                </p>
                <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                  Impact: {b.impact}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Leakage & Capture
          </h3>

          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Estimated Leakage Rates
          </h4>
          <div className="mt-2 space-y-2">
            {leakageRates.map((l) => (
              <div
                key={l.scheme}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {l.scheme}
                  </span>
                  <p className="text-xs text-slate-400">{l.primaryLeakagePoints}</p>
                </div>
                <Badge variant="danger">{l.estimatedLeakage}</Badge>
              </div>
            ))}
          </div>

          <h4 className="mb-2 mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Elite Capture Patterns
          </h4>
          <div className="space-y-2">
            {eliteCapturePatterns.map((e) => (
              <div
                key={e.type}
                className="rounded-lg border border-slate-100 bg-slate-50 p-2 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {e.type}
                </p>
                <p className="text-xs text-slate-400">{e.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Inclusion & Exclusion Errors
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-green-600 dark:text-green-400">
                Inclusion Errors (False Positives)
              </h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {inclusionErrors.description}
              </p>
              <ul className="mt-2 space-y-1">
                {inclusionErrors.manifestations.map((m, i) => (
                  <li key={i} className="text-xs text-slate-400">
                    • {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">
                Exclusion Errors (False Negatives)
              </h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {exclusionErrors.description}
              </p>
              <ul className="mt-2 space-y-1">
                {exclusionErrors.manifestations.map((m, i) => (
                  <li key={i} className="text-xs text-slate-400">
                    • {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Beneficiary Barriers
          </h3>
          <div className="space-y-3">
            {beneficiaryBarriers.map((b) => (
              <div
                key={b.barrier}
                className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
              >
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {b.barrier}
                </h4>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {b.description}
                </p>
                {"impact" in b && (
                  <p className="mt-1 text-xs text-amber-600 dark:text-amber-400">
                    Impact: {b.impact}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Voter Attribution Dynamics
          </h3>
          <div className="space-y-3">
            <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                Visibility vs Funding
              </p>
              <p className="mt-1 text-xs text-amber-600 dark:text-amber-300">
                {voterAttributionPatterns.visibilityVsFunding}
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                Source Confusion
              </p>
              <p className="mt-1 text-xs text-blue-600 dark:text-blue-300">
                {voterAttributionPatterns.sourceConfusion}
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 dark:bg-purple-900/20">
              <p className="text-sm font-medium text-purple-700 dark:text-purple-400">
                Temporal Attribution
              </p>
              <p className="mt-1 text-xs text-purple-600 dark:text-purple-300">
                {voterAttributionPatterns.temporalAttribution}
              </p>
            </div>
            <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                Incumbency Advantage
              </p>
              <p className="mt-1 text-xs text-red-600 dark:text-red-300">
                {voterAttributionPatterns.incumbencyAdvantage}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Congress vs AAP Positioning
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-green-600 dark:text-green-400">
                Congress Legacy
              </h4>
              <ul className="mt-2 space-y-1">
                {congressAAPPositioning.congressLegacy.map((item, i) => (
                  <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">
                Congress Challenges
              </h4>
              <ul className="mt-2 space-y-1">
                {congressAAPPositioning.congressChallenges.map((item, i) => (
                  <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                AAP Positioning
              </h4>
              <ul className="mt-2 space-y-1">
                {congressAAPPositioning.aapPositioning.map((item, i) => (
                  <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Delivery vs Awareness Reality
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Actual Delivery
              </h4>
              <div className="mt-2 space-y-2">
                {deliveryVsAwarenessReality.deliveryReality.map((d) => (
                  <div
                    key={d.scheme}
                    className="rounded-lg border border-slate-100 bg-slate-50 p-2 dark:border-slate-600 dark:bg-slate-700/50"
                  >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {d.scheme}
                    </span>
                    <p className="text-xs text-slate-400">{d.reality}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                Awareness Gaps
              </h4>
              <div className="mt-2 space-y-2">
                {deliveryVsAwarenessReality.awarenessReality.map((a) => (
                  <div
                    key={a.issue}
                    className="rounded-lg border border-slate-100 bg-slate-50 p-2 dark:border-slate-600 dark:bg-slate-700/50"
                  >
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {a.issue}
                    </span>
                    <p className="text-xs text-amber-500">{a.awareness}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
            Information Asymmetry
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-green-600 dark:text-green-400">
                Party Advantage
              </h4>
              <ul className="mt-2 space-y-1">
                {informationAsymmetry.partyAdvantage.map((item, i) => (
                  <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">
                Voter Limitations
              </h4>
              <ul className="mt-2 space-y-1">
                {informationAsymmetry.voterLimitations.map((item, i) => (
                  <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                Strategic Use
              </h4>
              <ul className="mt-2 space-y-1">
                {informationAsymmetry.strategicUse.map((item, i) => (
                  <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          DBT Analysis
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-green-600 dark:text-green-400">
              Advantages
            </h4>
            <ul className="mt-2 space-y-1">
              {dbtAdvantages.map((a, i) => (
                <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                  ✓ {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-red-600 dark:text-red-400">
              Limitations
            </h4>
            <ul className="mt-2 space-y-1">
              {dbtLimitations.map((l, i) => (
                <li key={i} className="text-xs text-slate-500 dark:text-slate-400">
                  ✗ {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
          Key Concepts
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(welfareKeyConcepts).map(([term, definition]) => (
            <div
              key={term}
              className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-600 dark:bg-slate-700/50"
            >
              <h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                {term
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (s) => s.toUpperCase())
                  .trim()}
              </h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
