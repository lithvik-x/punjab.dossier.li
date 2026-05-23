"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge, DataTable, MetricCard, ProgressBar } from "@/components/ui/MetricCard";
import { Scale } from "lucide-react";
import eciData from "@/lib/election-commission-data";

export default function EciCompliancePage() {
  const {
    eciReadiness,
    voterList,
    criminalization,
    affidavit,
    expenditure,
    postalBallot,
  } = eciData;

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
              <Scale className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              ECI Compliance
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Election laws, expenditure limits
          </p>
        </div>
        <Badge variant="info">Election 2027</Badge>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Total Voters"
          value={voterList.preSIRMapping.totalVoters.toLocaleString("en-IN")}
          subtitle="Pre-SIR electorate"
          color="amber"
        />
        <MetricCard
          title="SIR Mapping Rate"
          value={`${voterList.preSIRMapping.coveragePercent}%`}
          subtitle={`${voterList.preSIRMapping.unmappedVoters} unmapped`}
          color="blue"
        />
        <MetricCard
          title="Assembly Constituencies"
          value={eciReadiness.machinery.assemblyConstituencies}
          subtitle={`${eciReadiness.machinery.pollingStations} polling stations`}
          color="emerald"
        />
        <MetricCard
          title="Criminal Candidates"
          value={`${criminalization.assembly2022.percentage}%`}
          subtitle={`${criminalization.assembly2022.withCriminalCases} of 1,304 candidates`}
          color="rose"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <MetricCard
          title="Expenditure Limit"
          value={`Rs ${(expenditure.election2022.limitPerCandidate / 100000).toFixed(0)} L`}
          subtitle="Per candidate"
          color="purple"
        />
        <MetricCard
          title="Avg Spending"
          value={`Rs ${(expenditure.election2022.avgPerCandidate / 100000).toFixed(1)} L`}
          subtitle="Per candidate (2022)"
          color="rose"
        />
        <MetricCard
          title="Postal Ballots"
          value={postalBallot.election2022.totalPostalBallots.toLocaleString("en-IN")}
          subtitle={`${postalBallot.election2022.postalBallotPercent}% of votes`}
          color="purple"
        />
        <MetricCard
          title="2022 Turnout"
          value={`${eciReadiness.baseline2022.voterTurnout}%`}
          subtitle={eciReadiness.baseline2022.pollingDate}
          color="cyan"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Election Timeline
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              CEO Punjab — {eciReadiness.ceo.currentCEO}
            </p>
            <div className="mt-6 space-y-3">
              {eciReadiness.timeline.map((event, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-slate-100 p-3 dark:border-slate-700/50"
                >
                  <div className="flex-shrink-0">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${
                        event.status === "VERIFIED"
                          ? "bg-green-500"
                          : "bg-amber-500"
                      }`}
                    >
                      {event.status === "VERIFIED" ? "✓" : "?"}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {event.milestone}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{event.date}</p>
                  </div>
                  <Badge
                    variant={event.status === "VERIFIED" ? "success" : "warning"}
                  >
                    {event.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Voter Demographics
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {voterList.demographics.totalVoters.toLocaleString("en-IN")} total voters
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">Male Voters</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {voterList.demographics.maleVoters.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">Female Voters</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {voterList.demographics.femaleVoters.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">First-Time Voters</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {voterList.demographics.firstTimeVoters.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">85+ Voters</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {voterList.demographics.votersAbove85.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Gender Ratio
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {voterList.genderRatio.maleToFemale} — {voterList.genderRatio.gapBelowNational} pts below national average
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">Rural Mapping</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">
                  {voterList.urbanRuralMapping.find((m) => m.category === "Rural")?.mappingCoverage}%
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">Urban Mapping</p>
                <p className="text-lg font-bold text-red-600 dark:text-red-400">
                  {voterList.urbanRuralMapping.find((m) => m.category === "Urban")?.mappingCoverage}%
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Turnout Trends
              </h4>
              <div className="mt-2 space-y-2">
                {voterList.turnoutTrends.map((t) => (
                  <div key={`${t.election}-${t.year}`} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      {t.election} {t.year}
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{t.turnout}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Special Intensive Revision (SIR)
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {eciReadiness.sir.description}
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Last Revision</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{eciReadiness.sir.lastRevision}</span>
              </div>
            </div>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Phase", "Period", "Activity"]}
                rows={eciReadiness.sir.phases.map((phase) => [
                  phase.phase,
                  phase.period,
                  phase.activity,
                ])}
                caption="SIR implementation phases"
              />
            </div>
            <div className="mt-4 space-y-3">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Risk Assessment</h4>
              {eciReadiness.sir.riskAssessment.map((risk, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-100 p-3 dark:border-slate-700/50"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {risk.risk}
                    </span>
                    <Badge
                      variant={
                        risk.severity === "HIGH"
                          ? "danger"
                          : risk.severity === "MEDIUM"
                          ? "warning"
                          : "info"
                      }
                    >
                      {risk.severity}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {risk.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Assembly Composition (2022)
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              117 seats across parties
            </p>
            <div className="mt-4 space-y-3">
              {eciReadiness.assemblyComposition
                .filter((p) => p.party !== "Total")
                .map((party) => (
                  <div key={party.party}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {party.party}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 dark:text-slate-400">
                          {party.voteShare > 0 ? `${party.voteShare}%` : "—"}
                        </span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          {party.seats}
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className={`h-2 rounded-full ${
                          party.party === "AAP"
                            ? "bg-orange-500"
                            : party.party === "INC (Congress)"
                            ? "bg-blue-600"
                            : party.party === "SAD"
                            ? "bg-amber-700"
                            : party.party === "BJP"
                            ? "bg-orange-600"
                            : "bg-slate-400"
                        }`}
                        style={{ width: `${(party.seats / 117) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Caste Group Distribution
              </h3>
              <div className="overflow-x-auto">
                <DataTable
                  headers={["Group", "% Population", "Est. Voters", "Political Significance"]}
                  rows={voterList.casteGroups.map((cg) => [
                    cg.casteGroup,
                    `${cg.populationPercent}%`,
                    cg.estimatedVoterBase,
                    cg.politicalSignificance,
                  ])}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Criminalization of Candidates
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Punjab ranks #{criminalization.stateComparison.find((s) => s.state === "Punjab")?.rank} among states
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
                <p className="text-xs text-red-600 dark:text-red-400">Candidates with Cases</p>
                <p className="text-xl font-bold text-red-700 dark:text-red-300">
                  {criminalization.assembly2022.percentage}%
                </p>
                <p className="text-xs text-red-500 dark:text-red-400">
                  {criminalization.assembly2022.withCriminalCases} of {criminalization.assembly2022.totalCandidates}
                </p>
              </div>
              <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
                <p className="text-xs text-red-600 dark:text-red-400">Serious Cases</p>
                <p className="text-xl font-bold text-red-700 dark:text-red-300">
                  {criminalization.assembly2022.seriousPercentage}%
                </p>
                <p className="text-xs text-red-500 dark:text-red-400">
                  {criminalization.assembly2022.withSeriousCases} candidates
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Trend: {criminalization.assembly2022.trend}
            </p>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Party", "Candidates", "With Cases", "%", "Serious", "%"]}
                rows={criminalization.partyBreakdown.map((p) => [
                  p.party,
                  p.totalCandidates,
                  p.withCriminalCases,
                  `${p.percentage}%`,
                  p.withSeriousCases,
                  `${p.seriousPercentage}%`,
                ])}
                caption="Party-wise criminal cases breakdown"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Top Districts by Criminalization
              </h4>
              <div className="mt-2 space-y-2">
                {criminalization.districtAnalysis.map((d) => (
                  <div key={d.district} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">{d.district}</span>
                    <span className="font-medium text-red-600">{d.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Candidate Affidavit Analysis
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {affidavit.selfSwornAffidavits.complianceRate}% affidavit compliance
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">Avg Assets</p>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  Rs {(affidavit.assets.overallStats.avgAssets / 100000).toFixed(1)} L
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">Candidates Above Rs 1 Cr</p>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  {affidavit.assets.overallStats.candidatesAbove1Crore}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Party-wise Average Assets
              </h4>
              <div className="mt-2 space-y-2">
                {affidavit.assets.partyProfiles.map((p) => (
                  <div key={p.party} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">{p.party}</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Rs {(p.avgAssets / 100000).toFixed(1)} L
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Education Levels
              </h4>
              <div className="mt-2 space-y-3">
                {affidavit.education.levels.map((level) => (
                  <ProgressBar
                    key={level.level}
                    label={level.level}
                    value={level.percentage}
                    max={35}
                    color="blue"
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Expenditure Analysis
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Limit: Rs {expenditure.election2022.limitInCrores} Cr per candidate
            </p>
            <div className="mt-6 space-y-4">
              {expenditure.breakdown.slice(0, 5).map((item) => (
                <div key={item.category} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.category}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Max: Rs {(item.maxSpending / 100000).toFixed(1)} L
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {item.spendingPercentOfLimit}%
                    </span>
                    <p className="text-xs text-slate-500">of limit</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-900/20">
              <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                Common Violations
              </h4>
              <ul className="mt-2 list-disc pl-5 text-sm text-amber-600 dark:text-amber-300">
                {expenditure.intelligence.violations.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Postal Ballot Analysis
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {postalBallot.election2022.postalBallotPercent}% of total votes in 2022
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">Total Issued</p>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  {postalBallot.election2022.totalPostalBallots.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400">Counting Rate</p>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                  {postalBallot.election2022.countingPercentage}%
                </p>
              </div>
            </div>
            <div className="mt-4 overflow-x-auto">
              <DataTable
                headers={["Category", "Eligible", "Applied", "Issued", "Counted", "Uptake"]}
                rows={postalBallot.categoryUptake.map((c) => [
                  c.category,
                  c.eligible.toLocaleString("en-IN"),
                  c.applied.toLocaleString("en-IN"),
                  c.issued.toLocaleString("en-IN"),
                  c.counted.toLocaleString("en-IN"),
                  `${c.uptakePercent}%`,
                ])}
                caption="Postal ballot category-wise uptake"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Intelligence Actions — Immediate
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Priority actions from ECI monitoring analysis
            </p>
            <div className="mt-4 space-y-3">
              {eciReadiness.intelligenceImplications.immediateActions.map((action, i) => (
                <div
                  key={i}
                  className={`rounded-lg border p-3 ${
                    action.priority === "URGENT" || action.priority === "CRITICAL"
                      ? "border-red-200 bg-red-50 dark:border-red-900/30 dark:bg-red-900/10"
                      : "border-amber-200 bg-amber-50 dark:border-amber-900/30 dark:bg-amber-900/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {action.action}
                    </p>
                    <Badge variant={action.priority === "URGENT" ? "danger" : "warning"}>
                      {action.priority}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Risk Matrix
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Election-related risks and mitigations
            </p>
            <div className="mt-4 space-y-3">
              {eciReadiness.intelligenceImplications.riskMatrix.map((risk, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-100 p-3 dark:border-slate-700/50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {risk.risk}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          risk.likelihood === "HIGH"
                            ? "danger"
                            : risk.likelihood === "MEDIUM"
                            ? "warning"
                            : "info"
                        }
                      >
                        {risk.likelihood}
                      </Badge>
                      <Badge
                        variant={
                          risk.impact === "VERY_HIGH" || risk.impact === "HIGH"
                            ? "danger"
                            : "warning"
                        }
                      >
                        {risk.impact}
                      </Badge>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {risk.mitigation}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-5">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Research Sources
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {eciReadiness.metadata.sourceType}
          </p>
          <ul className="mt-4 space-y-1">
            {eciReadiness.sources.map((src, i) => (
              <li key={i} className="text-sm text-slate-500 dark:text-slate-400">
                {src}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
