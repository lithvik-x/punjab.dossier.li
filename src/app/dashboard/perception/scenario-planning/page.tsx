"use client";

import { Badge, MetricCard, DataTable } from "@/components/ui/MetricCard";
import {
  electionScenarios,
  coalitionReadinessFramework,
  communicationByScenario,
  governmentFormationTimeline,
  transitionPlanningElements,
  internalPartyManagement,
  preparednessChecklists,
  decisionMakingFramework,
} from "@/lib/post-election-scenario-data";

export default function ScenarioPlanningPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
              🔮
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Scenario Planning
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Post-election scenarios, CM selection
          </p>
        </div>
        <Badge variant="info">Strategic Preparedness</Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Scenarios Modeled"
          value={electionScenarios.length}
          subtitle="Election outcomes"
          color="bg-indigo-500"
        />
        <MetricCard
          title="Coalition Partners"
          value={coalitionReadinessFramework.potentialPartners.length}
          subtitle="Potential allies"
          color="bg-violet-500"
        />
        <MetricCard
          title="Govt Formation Window"
          value="72 hrs"
          subtitle="Post-result timeline"
          color="bg-amber-500"
        />
        <MetricCard
          title="Readiness Checklists"
          value={preparednessChecklists.length}
          subtitle="Scenario-specific"
          color="bg-green-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Election Scenarios
          </h3>
          <div className="mt-4 space-y-4">
            {electionScenarios.map((s, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                    {s.scenario}
                  </h4>
                  <Badge
                    variant={s.probability === "High" ? "success" : "warning"}
                  >
                    {s.probability}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {s.description}
                </p>
                {"conditions" in s && (
                  <ul className="mt-2 space-y-1">
                    {s.conditions?.map((c, j) => (
                      <li
                        key={j}
                        className="text-sm text-slate-600 dark:text-slate-400"
                      >
                        &bull; {c}
                      </li>
                    ))}
                  </ul>
                )}
                {"immediateActions" in s && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {s.immediateActions?.map((a, j) => (
                      <Badge key={j} variant="info">
                        {a}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Coalition Building Framework
          </h3>
          <div className="mt-4 space-y-4">
            {coalitionReadinessFramework.potentialPartners.map((p, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-800 dark:text-slate-200">
                    {p.party}
                  </h4>
                  <Badge variant="default">{p.seatPotential}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {p.alignment}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  Negotiation: {p.negotiationComplexity}
                </p>
              </div>
            ))}
          </div>
          <h4 className="mt-6 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Agreement Essentials
          </h4>
          <ul className="mt-2 space-y-1">
            {coalitionReadinessFramework.coalitionAgreementEssentials.map(
              (item, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-600 dark:text-slate-400"
                >
                  &bull; {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Communication Strategy by Scenario
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {Object.entries(communicationByScenario).map(([key, val]) => (
            <div
              key={key}
              className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
            >
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    key === "majorityWin"
                      ? "success"
                      : key === "hungAssembly"
                        ? "warning"
                        : "info"
                  }
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </Badge>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                Tone: {val.tone}
              </p>
              <ul className="mt-2 space-y-1">
                {val.keyMessages.map((msg, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    &bull; {msg}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Government Formation Timeline
          </h3>
          <div className="mt-4 space-y-3">
            {governmentFormationTimeline.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-slate-200 p-3 dark:border-slate-700"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {step.day}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {step.activity}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {step.responsible}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Transition Planning
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Governance Priority Areas
              </h4>
              <ul className="mt-2 space-y-1">
                {transitionPlanningElements.governancePriorityAreas.map(
                  (area, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      &bull; {area}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Administrative Actions
              </h4>
              <ul className="mt-2 space-y-1">
                {transitionPlanningElements.administrativeActions.map(
                  (action, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      &bull; {action}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Legislative Agenda
              </h4>
              <ul className="mt-2 space-y-1">
                {transitionPlanningElements.legislativeAgenda.map(
                  (item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      &bull; {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Preparedness Checklists
          </h3>
          <div className="mt-4 space-y-4">
            {preparednessChecklists.map((pc, i) => (
              <div key={i}>
                <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {pc.scenario}
                </h4>
                <ul className="mt-1 space-y-1">
                  {pc.readinessItems.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Internal Party Management
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Ticket Distribution Aftermath
              </h4>
              <ul className="mt-2 space-y-1">
                {internalPartyManagement.ticketDistributionAftermath.map(
                  (item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 dark:text-slate-400"
                    >
                      &bull; {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Faction Management
              </h4>
              <ul className="mt-2 space-y-1">
                {internalPartyManagement.factionManagement.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Leadership Signaling
              </h4>
              <ul className="mt-2 space-y-1">
                {internalPartyManagement.leadershipSignaling.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 dark:text-slate-400"
                  >
                    &bull; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Decision-Making Framework
        </h3>
        <DataTable
          headers={["Authority Area", "Designated Authority"]}
          rows={Object.entries(decisionMakingFramework.authority).map(
            ([area, authority]) => [area.replace(/([A-Z])/g, " $1").trim(), authority]
          )}
          caption="Post-election authority matrix"
        />
      </div>
    </div>
  );
}
