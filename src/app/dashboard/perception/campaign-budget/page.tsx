"use client";

import { Badge, DataTable, MetricCard, ProgressBar } from "@/components/ui/MetricCard";
import {
  aapSpendingEnvelope,
  congressSpendingEnvelope,
  bjpSpending,
  resourceGapAnalysis,
  masterBudgetAllocation,
  fieldOperationsBreakdown,
  mediaAdvertisingBreakdown,
  digitalSocialBreakdown,
  seatCategorization,
  basePerSeatBudget,
  investmentRoiRanking,
  channelRoiComparison,
  phaseAllocation,
  eciExpenditureLimits,
  monthlyFundraisingTargets,
  nriFundraisingPotential,
  wastefulInvestments,
} from "@/lib/campaign-budget-data";

export default function CampaignBudgetPage() {
  const congressEnvelope = congressSpendingEnvelope as Record<string, unknown>;
  const aapEnvelope = aapSpendingEnvelope as Record<string, unknown>;
  const baseAap = aapEnvelope["2027Projected"] as Record<string, Record<string, string>>;
  const baseCongress = congressEnvelope["2027Projected"] as Record<string, Record<string, string>>;

  const aapTotal = aapEnvelope["total2027"] as Record<string, string>;
  const congressEstimate = congressEnvelope["realisticEstimate"] as string;

  const largestCategory = masterBudgetAllocation.reduce((max, item) =>
    item.percentage > max.percentage ? item : max
  );

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
              Rs
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Campaign Budget
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Congress vs AAP budget comparison
          </p>
        </div>
        <Badge variant="info">Rs 350 Cr Target</Badge>
      </div>

      {/* Party Budget Comparison */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
              INC
            </span>
            <h3 className="font-semibold text-slate-900 dark:text-white">Congress</h3>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {congressEstimate}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">2027 projected envelope</p>
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-700">
            {Object.entries(baseCongress).map(([key, val]) => (
              <div key={key} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {val.low} — {val.high}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-xs font-bold text-white">
              AAP
            </span>
            <h3 className="font-semibold text-slate-900 dark:text-white">AAP</h3>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {aapTotal.low} — {aapTotal.high}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">2027 projected envelope</p>
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-700">
            {Object.entries(baseAap).map(([key, val]) => (
              <div key={key} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {val.low} — {val.high}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-saffron-600 text-xs font-bold text-white bg-orange-600">
              BJP
            </span>
            <h3 className="font-semibold text-slate-900 dark:text-white">BJP</h3>
          </div>
          <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {(bjpSpending["2027Projected"] as Record<string, Record<string, string>>)?.total?.low || "Rs 85 Cr"} — {(bjpSpending["2027Projected"] as Record<string, Record<string, string>>)?.total?.high || "Rs 145 Cr"}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">2027 projected envelope</p>
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-700">
            {Object.entries(bjpSpending["2027Projected"] as Record<string, Record<string, string>>).filter(([k]) => k !== "total").map(([key, val]) => (
              <div key={key} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  {val.low} — {val.high}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Gap Analysis */}
      <div className="grid gap-6 md:grid-cols-3">
        {resourceGapAnalysis.map((scenario) => (
          <MetricCard
            key={scenario.scenario}
            title={`${scenario.scenario} Scenario`}
            value={scenario.gap}
            subtitle={`Congress: ${scenario.congress} vs AAP: ${scenario.aap}`}
            color={
              scenario.scenario === "Adverse"
                ? "bg-red-500"
                : scenario.scenario === "Base Case"
                ? "bg-amber-500"
                : "bg-green-500"
            }
          />
        ))}
      </div>

      {/* Master Budget Allocation */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Master Budget Allocation
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Largest category: {largestCategory.category} ({largestCategory.percentage}%)
        </p>
        <div className="mt-6 overflow-x-auto">
          <DataTable
            headers={["Category", "Percentage", "Amount", "Rationale"]}
            rows={masterBudgetAllocation.map((item) => [
              item.category,
              `${item.percentage}%`,
              item.amount,
              item.rationale,
            ])}
          />
        </div>
      </div>

      {/* Budget Breakdowns */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Field Operations Breakdown
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {fieldOperationsBreakdown[0]?.note}
          </p>
          <div className="mt-4 space-y-3">
            {fieldOperationsBreakdown.map((item) => (
              <ProgressBar
                key={item.subCategory}
                label={`${item.subCategory} — ${item.amount}`}
                value={item.percentage}
                max={30}
                color="bg-green-500"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Media & Advertising Breakdown
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {mediaAdvertisingBreakdown[0]?.note}
          </p>
          <div className="mt-4 space-y-3">
            {mediaAdvertisingBreakdown.map((item) => (
              <ProgressBar
                key={item.subCategory}
                label={`${item.subCategory} — ${item.amount}`}
                value={item.percentage}
                max={40}
                color="bg-blue-500"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Digital & Social Media
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {digitalSocialBreakdown[0]?.note}
          </p>
          <div className="mt-4 space-y-3">
            {digitalSocialBreakdown.map((item) => (
              <ProgressBar
                key={item.subCategory}
                label={`${item.subCategory} — ${item.amount}`}
                value={item.percentage}
                max={35}
                color="bg-purple-500"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Seat Categorization */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Seat Categorization for Budgeting
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Priority-based allocation across {seatCategorization.reduce((s, c) => s + c.seats, 0)} seats
          </p>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Category", "Seats", "Description", "Priority Weight"]}
              rows={seatCategorization.map((s) => [
                <span key={s.category} className="font-medium">{s.category}</span>,
                s.seats,
                s.description,
                s.priorityWeight,
              ])}
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Base Per-Seat Budget
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Flip list at {basePerSeatBudget[0]?.basePerSeat} per seat
          </p>
          <div className="mt-4 space-y-4">
            {basePerSeatBudget.map((item) => (
              <div
                key={item.category}
                className="rounded-lg border border-slate-100 p-4 dark:border-slate-700/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {item.category}
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.basePerSeat}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  {seatCategorization.find((s) => s.category === item.category)?.priorityWeight} priority
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phase Allocation */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Phase-Based Investment Strategy
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Three-phase budget deployment totaling Rs 350 Cr
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {phaseAllocation.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-lg border border-slate-200 p-4 dark:border-slate-700"
            >
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">
                {phase.phase}
              </h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{phase.timeline}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  {phase.budgetPercentage}%
                </span>
                <span className="text-sm text-slate-500">{phase.budgetAmount}</span>
              </div>
              <ul className="mt-3 space-y-1">
                {phase.primaryFocus.map((focus, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-slate-400 before:content-['•'] before:mr-1.5">
                    {focus}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Rankings */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Investment ROI Ranking
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Top investments by ROI score
          </p>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Rank", "Investment", "ROI Score", "Time Horizon"]}
              rows={investmentRoiRanking.slice(0, 8).map((item) => [
                `#${item.rank}`,
                item.investment,
                item.roiScore,
                item.timeHorizon,
              ])}
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Channel ROI Comparison
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Cost per voter and persuasion effectiveness
          </p>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Channel", "Cost/Voter", "Persuasion", "Turnout Impact", "Overall"]}
              rows={channelRoiComparison.map((c) => [
                c.channel,
                c.costPerVoter,
                c.persuasionRate,
                c.turnoutImpact,
                <Badge
                  key={c.channel}
                  variant={
                    c.overallRoi === "BEST"
                      ? "success"
                      : c.overallRoi === "GOOD"
                      ? "info"
                      : c.overallRoi === "AVOID"
                      ? "danger"
                      : "warning"
                  }
                >
                  {c.overallRoi}
                </Badge>,
              ])}
              caption="Channel performance comparison"
            />
          </div>
        </div>
      </div>

      {/* Monthly Fundraising Targets */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Monthly Fundraising Targets
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Cumulative target: Rs {monthlyFundraisingTargets[monthlyFundraisingTargets.length - 1]?.cumulative}
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Month", "Target", "Cumulative", "Focus"]}
            rows={monthlyFundraisingTargets.map((m) => [
              m.month,
              m.target,
              m.cumulative,
              m.primaryFocus,
            ])}
          />
        </div>
      </div>

      {/* ECI Limits & NRI Fundraising */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            ECI Expenditure Limits
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Per-candidate and party expenditure caps
          </p>
          <div className="mt-4 space-y-3">
            {eciExpenditureLimits.map((limit, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-100 p-3 dark:border-slate-700/50"
              >
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {limit.category}
                </p>
                {"2022Limit" in limit && (
                  <p className="text-sm text-slate-500">
                    2022: {limit["2022Limit"] as string}
                  </p>
                )}
                {"2027Projected" in limit && (
                  <p className="text-sm text-slate-500">
                    2027: {limit["2027Projected"] as string}
                  </p>
                )}
                {"note" in limit && (
                  <p className="mt-1 text-xs text-slate-400">{limit.note as string}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            NRI Fundraising Potential
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Global Punjabi diaspora outreach
          </p>
          <div className="mt-4 overflow-x-auto">
            <DataTable
              headers={["Market", "Diaspora", "Avg Donation", "Potential"]}
              rows={nriFundraisingPotential.map((nri) => [
                nri.market,
                nri.estimatedDiaspora,
                nri.avgDonation,
                nri.potential,
              ])}
            />
          </div>
        </div>
      </div>

      {/* What Not to Waste Money On */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          What Not to Waste Money On
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Low-ROI investments to avoid
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {wastefulInvestments.map((w) => (
            <div
              key={w.investment}
              className="rounded-lg border border-red-100 bg-red-50 p-3 dark:border-red-900/30 dark:bg-red-900/10"
            >
              <p className="font-medium text-red-700 dark:text-red-400">{w.investment}</p>
              <p className="mt-1 text-sm text-red-600 dark:text-red-300">
                {w.reason}
              </p>
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                Alternative: {w.alternative}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
