"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { MetricCard, DataTable, Badge, MiniChart, ProgressBar } from "@/components/ui/MetricCard";
import { AlertTriangle, Zap, UsersRound } from "lucide-react";
import {
  economicPerformanceKPI,
  getAAPFundingBreakdown,
  getCongressAttackLines,
} from "@/lib/edu-health-performance-data";
import { serviceDeliveryGapsData } from "@/lib/service-delivery-gaps-data";
import {
  AlertOctagon,
  TrendingDown,
  Briefcase,
  Banknote,
  Building2,
  DollarSign,
  Users,
  TrendingUp,
  AlertCircle,
  Target,
  Shield,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

/**
 * Governance Dashboard - Economic & Fiscal Performance
 * Punjab's fiscal crisis and economic stagnation
 */
export default function GovernanceEconomicFiscalPage() {
  const aapFunding = getAAPFundingBreakdown();
  const congressAttackLines = getCongressAttackLines();

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
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
              color="rose"
              icon={<AlertOctagon className="h-6 w-6" />}
            />
            <MetricCard
              title="Fiscal Deficit (2025-26 RE)"
              value="4.2%"
              subtitle="Above FRBM threshold (3%)"
              color="rose"
              icon={<TrendingDown className="h-6 w-6" />}
            />
            <MetricCard
              title="Unemployment Rate"
              value="6.1%"
              subtitle="Nearly double national 3.2%"
              color="orange"
              icon={<Briefcase className="h-6 w-6" />}
            />
            <MetricCard
              title="GSDP Growth 2025-26"
              value="6.1%"
              subtitle="Below national 7.4%"
              color="amber"
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
        </Card>
      </motion.div>

      {/* Fiscal Crisis Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="bg-white dark:bg-slate-800">
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
              <Card
                key={idx}
                className={
                  expert.viewType === "Alarmist"
                    ? "border-red-200 dark:border-red-800 bg-red-100 dark:bg-red-900/30"
                    : expert.viewType === "Optimist"
                    ? "border-green-200 dark:border-green-800 bg-green-100 dark:bg-green-900/30"
                    : "border-yellow-200 dark:border-yellow-800 bg-yellow-100 dark:bg-yellow-900/30"
                }
              >
                <CardContent>
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
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-slate-100 dark:bg-slate-700">
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-semibold">Overall Assessment:</span>{" "}
                {economicPerformanceKPI.fiscal.fiscalCrisisAssessment.overallAssessment}
              </p>
            </CardContent>
          </Card>
        </Card>
      </motion.div>

      {/* Debt Trajectory Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="bg-white dark:bg-slate-800">
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
                  <Card key={idx} className="bg-slate-50 dark:bg-slate-700">
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600 dark:text-slate-300">{item.period}</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          Rs {item.annualIncreaseRsCrore.toLocaleString()} Cr/yr
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Debt Chart */}
          <Card className="bg-red-50 dark:bg-red-900/20">
            <CardContent>
              <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">Debt Growth Visualization</h4>
              <MiniChart
                data={economicPerformanceKPI.fiscal.debtTrajectory.data.map((d) => d.debtRsCrore)}
                color="rose"
                height={100}
              />
              <p className="mt-2 text-sm text-red-600 dark:text-red-300">
                <span className="font-semibold">AAP Average (2022-25):</span> Rs{" "}
                {economicPerformanceKPI.fiscal.debtTrajectory.aapFirstThreeYears.annualAverageRsCrore.toLocaleString()} crore/year —{" "}
                <span className="font-bold text-red-600 dark:text-red-200">Highest in Punjab history</span>
              </p>
            </CardContent>
          </Card>
        </Card>
      </motion.div>

      {/* Fiscal Deficits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="bg-white dark:bg-slate-800">
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
        </Card>
      </motion.div>

      {/* Committed Expenditure Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
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
              color="blue"
              icon={<Users className="h-5 w-5" />}
            />
            <MetricCard
              title="Pensions"
              value="Rs 22,465 Cr"
              subtitle="18% of revenue receipts"
              color="purple"
              icon={<Users className="h-5 w-5" />}
            />
            <MetricCard
              title="Interest Payments"
              value="Rs 28,755 Cr"
              subtitle="23% of revenue receipts"
              color="rose"
              icon={<Banknote className="h-5 w-5" />}
            />
          </div>

          <Card className="bg-white dark:bg-slate-800">
            <CardContent>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Total: Rs 90,335 Crore (72% of revenue)</h4>
              <ProgressBar value={72} max={100} color="rose" label="Committed Expenditure %" />
            </CardContent>
          </Card>

          <p className="mt-4 text-sm text-orange-600 dark:text-orange-300">
            <span className="font-semibold">Note:</span> In 2024-25, committed expenditure consumed{" "}
            <span className="font-bold">85%</span> of revenue receipts — even more critical
          </p>
        </Card>
      </motion.div>

      {/* GSDP Growth Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="bg-white dark:bg-slate-800">
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
            <Card className="bg-red-50 dark:bg-red-900/20">
              <CardContent>
                <h4 className="font-semibold text-red-700 dark:text-red-400">Agriculture</h4>
                <p className="text-2xl font-bold text-red-600">-2.5%</p>
                <p className="text-sm text-red-500">23% of economy</p>
              </CardContent>
            </Card>
            <Card className="bg-red-50 dark:bg-red-900/20">
              <CardContent>
                <h4 className="font-semibold text-red-700 dark:text-red-400">Manufacturing</h4>
                <p className="text-2xl font-bold text-red-600">-1.2%</p>
                <p className="text-sm text-red-500">29% of economy</p>
              </CardContent>
            </Card>
            <Card className="bg-yellow-50 dark:bg-yellow-900/20">
              <CardContent>
                <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Services</h4>
                <p className="text-2xl font-bold text-yellow-600">Slowing</p>
                <p className="text-sm text-yellow-500">48% of economy</p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Average growth since 2020-21: <span className="font-semibold">4.9%</span> — Downward spiral since 2022-23
          </p>
        </Card>
      </motion.div>

      {/* Per Capita Income Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <Card className="bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Per Capita Income</h3>
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <Card className="bg-blue-50 dark:bg-blue-900/20">
              <CardContent>
                <h4 className="text-sm text-blue-600 dark:text-blue-300">Punjab (2025-26)</h4>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                  Rs {economicPerformanceKPI.gsdp.perCapitaIncome.punjab.toLocaleString()}
                </p>
                <p className="text-sm text-blue-500">Growth: {economicPerformanceKPI.gsdp.perCapitaIncome.punjabGrowthRate}%</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 dark:bg-slate-700">
              <CardContent>
                <h4 className="text-sm text-slate-600 dark:text-slate-300">India (2025-26)</h4>
                <p className="text-3xl font-bold text-slate-700 dark:text-slate-200">
                  Rs {economicPerformanceKPI.gsdp.perCapitaIncome.india.toLocaleString()}
                </p>
                <p className="text-sm text-slate-500">Growth: {economicPerformanceKPI.gsdp.perCapitaIncome.indiaGrowthRate}%</p>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-amber-50 dark:bg-amber-900/20">
            <CardContent>
              <p className="text-amber-700 dark:text-amber-400">
                <span className="font-semibold">Punjab is barely above national average (1.05x)</span> — Was{" "}
                <span className="font-bold">#1 until 2000</span>, now{" "}
                <span className="font-bold">10th among major Indian states</span>
              </p>
            </CardContent>
          </Card>
        </Card>
      </motion.div>

      {/* Unemployment Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
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
              color="rose"
            />
            <MetricCard
              title="Unemployment Rate"
              value="3.2%"
              subtitle="All India"
              color="emerald"
            />
            <MetricCard
              title="LFPR"
              value="53.5%"
              subtitle="Punjab (vs 57.9% nat.)"
              color="blue"
            />
          </div>

          <Card className="bg-white dark:bg-slate-800">
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {economicPerformanceKPI.unemployment.ruralUrbanNote}
              </p>
              <p className="mt-2 text-sm text-slate-500">{economicPerformanceKPI.unemployment.youthUnemploymentNote}</p>
            </CardContent>
          </Card>
        </Card>
      </motion.div>

      {/* AAP Funding Operations Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <Card className="bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">AAP Government Funding Operations</h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <MetricCard
              title="Net Borrowings (2026-27)"
              value="Rs 38,471 Cr"
              subtitle="To meet expenditure"
              color="rose"
              icon={<Banknote className="h-5 w-5" />}
            />
            <MetricCard
              title="WMA (RBI Advances)"
              value="Rs 80,000 Cr"
              subtitle="Short-term revolving credit"
              color="orange"
              icon={<Building2 className="h-5 w-5" />}
            />
            <MetricCard
              title="Power Subsidies"
              value="Rs 15,550 Cr"
              subtitle="12.3% of revenue receipts"
              color="amber"
              icon={<DollarSign className="h-5 w-5" />}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <Card className="bg-red-50 dark:bg-red-900/20">
              <CardContent>
                <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Welfare Schemes</h4>
                {economicPerformanceKPI.aapFunding.welfareSchemes.map((scheme, idx) => (
                  <div key={idx} className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-600 dark:text-slate-300">{scheme.name}</span>
                    <Badge variant="warning">Rs {scheme.amountRsCrore.toLocaleString()} Cr</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="bg-green-50 dark:bg-green-900/20">
              <CardContent>
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
              </CardContent>
            </Card>
          </div>

          <Card className="bg-amber-50 dark:bg-amber-900/20">
            <CardContent>
              <p className="text-sm text-amber-600 dark:text-amber-300">
                <span className="font-semibold">Power Subsidy Issue:</span>{" "}
                {economicPerformanceKPI.aapFunding.powerSubsidies.householdCoverage} —{" "}
                {economicPerformanceKPI.aapFunding.powerSubsidies.note}
              </p>
            </CardContent>
          </Card>
        </Card>
      </motion.div>

      {/* Historical Comparison Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        <Card className="bg-white dark:bg-slate-800">
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Historical: Congress 2017-2022 vs AAP 2022-2027
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
              <CardContent>
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
              </CardContent>
            </Card>
            <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
              <CardContent>
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
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-sm text-slate-500">{economicPerformanceKPI.historicalComparison.note}</p>
        </Card>
      </motion.div>

      {/* Congress Attack Lines Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.0 }}
      >
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
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
              <Card key={idx} className="bg-white dark:bg-slate-800">
                <CardContent>
                  <div className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300">{attack.label}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{attack.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* AAP Defense Lines Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      >
        <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
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
              <Card key={idx} className="bg-white dark:bg-slate-800">
                <CardContent>
                  <div className="mb-2 flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-green-500" />
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{defense.point}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ThumbsDown className="h-4 w-4 text-red-500 mt-0.5" />
                    <span className="text-sm text-slate-500 dark:text-slate-400">{defense.response}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Strategic Implications Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        <Card className="border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20">
          <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-400 mb-4">
            Strategic Implications for Congress
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {economicPerformanceKPI.strategicImplications.implications.map((impl) => (
              <Card key={impl.number} className="bg-white dark:bg-slate-800">
                <CardContent>
                  <div className="flex items-start gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-white text-xs font-bold">
                      {impl.number}
                    </span>
                    <div>
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300">{impl.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{impl.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Economic Performance Sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      >
        <Card className="bg-slate-50 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Economic Data Sources</h4>
          <div className="grid gap-2 md:grid-cols-2 text-sm">
            {economicPerformanceKPI.sources.map((source) => (
              <div key={source.id} className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
                <Badge variant="default">{source.source}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Service Delivery Gaps Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.4 }}
      >
        <Card className="border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20">
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
              color="rose"
              icon={<AlertTriangle className="h-6 w-6" />}
            />
            <MetricCard
              title="Pension Delay"
              value={`${serviceDeliveryGapsData.socialWelfare.pensionArrears.delayMonths} months`}
              subtitle={`${(serviceDeliveryGapsData.socialWelfare.pensionArrears.beneficiariesAffected / 100000).toFixed(2)} lakh beneficiaries affected`}
              color="rose"
              icon={<Users className="h-6 w-6" />}
            />
            <MetricCard
              title="Power Cuts"
              value={serviceDeliveryGapsData.power.crisis.powerCutsRuralUrban}
              subtitle="Rural + Urban during heatwave"
              color="amber"
              icon={<Zap className="h-6 w-6" />}
            />
            <MetricCard
              title="Teacher Posts Abolished"
              value={serviceDeliveryGapsData.education.teacherVacancies.abolishedPosts.toLocaleString()}
              subtitle="30,391 vacant posts across departments"
              color="purple"
              icon={<UsersRound className="h-6 w-6" />}
            />
          </div>

          {/* Health Service Gaps */}
          <Card className="bg-white dark:bg-slate-800 mb-6">
            <CardContent>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Health Service Gaps</h4>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Doctor-to-Population Ratio</p>
                    <p className="text-2xl font-bold text-red-600">
                      {serviceDeliveryGapsData.health.generalDoctorShortage.doctorToPopulationRatio}
                      <span className="text-sm font-normal text-slate-500"> / 1,000</span>
                    </p>
                    <p className="text-xs text-slate-500">National target: {serviceDeliveryGapsData.health.generalDoctorShortage.nationalTarget}/1,000</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Aam Aadmi Clinics</p>
                    <p className="text-2xl font-bold text-green-600">
                      {serviceDeliveryGapsData.health.aamAadmiClinics.operational}
                      <span className="text-sm font-normal text-slate-500">+</span>
                    </p>
                    <p className="text-xs text-slate-500">Operational in Punjab</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Opioid Dependents</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {serviceDeliveryGapsData.health.drugDeaddiction.estimatedOpioidDependents.toLocaleString()}
                      <span className="text-sm font-normal text-slate-500">+</span>
                    </p>
                    <p className="text-xs text-slate-500">{serviceDeliveryGapsData.health.drugDeaddiction.mentalHealthTreatmentGap}% untreated</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* District Healthcare Shortages */}
          <Card className="bg-white dark:bg-slate-800 mb-6">
            <CardContent>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">District Healthcare Shortages</h4>
              <div className="grid gap-2 md:grid-cols-2">
                {serviceDeliveryGapsData.health.districtShortages.map((shortage, idx) => (
                  <Card key={idx} className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                    <CardContent>
                      <p className="font-semibold text-red-700 dark:text-red-400">{shortage.district}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{shortage.shortageType}</p>
                      <p className="text-xs text-slate-500 mt-1">{shortage.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education Service Gaps */}
          <Card className="bg-white dark:bg-slate-800 mb-6">
            <CardContent>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Education Service Gaps</h4>
              <div className="grid gap-3 md:grid-cols-2">
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Special Education Posts (Jul 2025)</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {serviceDeliveryGapsData.education.teacherVacancies.specialEducationPosts}
                      <span className="text-sm font-normal text-slate-500"> (PRT + TGT)</span>
                    </p>
                    <p className="text-xs text-slate-500">{serviceDeliveryGapsData.education.teacherVacancies.candidatesApplied.toLocaleString()} candidates applied</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Education Budget</p>
                    <p className="text-2xl font-bold text-green-600">
                      Rs {serviceDeliveryGapsData.education.schoolInfrastructure.educationBudget.toLocaleString()}
                      <span className="text-sm font-normal text-slate-500"> crore</span>
                    </p>
                    <p className="text-xs text-slate-500">Apr 2026 - absorption capacity questioned</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Power Supply Gaps */}
          <Card className="bg-white dark:bg-slate-800 mb-6">
            <CardContent>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Power Supply Gaps</h4>
              <div className="grid gap-3 md:grid-cols-3">
                <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
                  <CardContent>
                    <p className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Demand Surge (Heatwave)</p>
                    <p className="text-xl font-bold text-yellow-600">
                      {serviceDeliveryGapsData.power.crisis.demandSurge.fromMW.toLocaleString()} → {serviceDeliveryGapsData.power.crisis.demandSurge.toMW.toLocaleString()} MW
                    </p>
                    <p className="text-xs text-slate-500">{serviceDeliveryGapsData.power.crisis.demandSurge.timeframe}</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">National Avg Rural Supply</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {serviceDeliveryGapsData.power.supplyHours.nationalAverageRural}
                      <span className="text-sm font-normal text-slate-500"> hrs/day</span>
                    </p>
                    <p className="text-xs text-slate-500">2025</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Mission Roshan Punjab</p>
                    <p className="text-2xl font-bold text-green-600">
                      Rs {serviceDeliveryGapsData.power.crisis.infrastructureSpending.toLocaleString()}
                      <span className="text-sm font-normal text-slate-500"> crore</span>
                    </p>
                    <p className="text-xs text-slate-500">Infrastructure overhaul</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Infrastructure Gaps */}
          <Card className="bg-white dark:bg-slate-800 mb-6">
            <CardContent>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Infrastructure Gaps</h4>
              <div className="grid gap-3 md:grid-cols-3">
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Rural Link Roads</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {serviceDeliveryGapsData.infrastructure.roads.ruralLinkRoads.constructed.toLocaleString()}
                      <span className="text-sm font-normal text-slate-500"> km</span>
                    </p>
                    <p className="text-xs text-slate-500">Rs {serviceDeliveryGapsData.infrastructure.roads.ruralLinkRoads.cost.toLocaleString()} crore</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Canal Irrigated Area</p>
                    <p className="text-xl font-bold text-cyan-600">
                      {serviceDeliveryGapsData.infrastructure.irrigation.canalIrrigatedArea.startAcres.toLocaleString()} → {serviceDeliveryGapsData.infrastructure.irrigation.canalIrrigatedArea.endAcres.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-500">Acres (2022 → 2025)</p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-700">
                  <CardContent>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Canal Investment</p>
                    <p className="text-2xl font-bold text-cyan-600">
                      Rs {(serviceDeliveryGapsData.infrastructure.irrigation.canalSystemRejuvenation + serviceDeliveryGapsData.infrastructure.irrigation.canalModernisation).toLocaleString()}
                      <span className="text-sm font-normal text-slate-500"> crore</span>
                    </p>
                    <p className="text-xs text-slate-500">Rejuvenation + Modernisation</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Implications - Top Attack Vectors */}
          <Card className="bg-white dark:bg-slate-800 mb-6">
            <CardContent>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">
                Top Attack Vectors for Congress 2027
              </h4>
              <div className="grid gap-2">
                {serviceDeliveryGapsData.strategic.highestImpactGaps.slice(0, 4).map((gap) => (
                  <Card key={gap.rank} className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                    <CardContent>
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                          {gap.rank}
                        </span>
                        <div>
                          <p className="font-semibold text-red-700 dark:text-red-400">{gap.issue}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{gap.affectedVoters}</p>
                          <p className="text-xs text-slate-500 mt-1">{gap.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Congress Messaging */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent>
              <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Congress Messaging Angles</h4>
              <div className="grid gap-2">
                {serviceDeliveryGapsData.strategic.congressMessaging.map((msg, idx) => (
                  <Card key={idx} className="border-slate-200 dark:border-slate-700">
                    <CardContent>
                      <div className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-red-500 mt-0.5" />
                        <p className="text-sm text-slate-600 dark:text-slate-400">{msg.message}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </Card>
      </motion.div>

      {/* Service Delivery Gaps Sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
      >
        <Card className="bg-slate-50 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Service Delivery Gaps Sources</h4>
          <div className="grid gap-2 md:grid-cols-2 text-sm">
            {serviceDeliveryGapsData.sources.slice(0, 8).map((source) => (
              <div key={source.id} className="flex items-center justify-between">
                <span className="text-slate-600 dark:text-slate-400">{source.title}</span>
                <Badge variant="default">{source.source}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
