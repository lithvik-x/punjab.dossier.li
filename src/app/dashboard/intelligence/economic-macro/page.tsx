"use client";

import { MetricCard, DataTable, Badge, MiniChart, ProgressBar } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  economicMacroKPI,
  gsdpTrajectoryData,
  fiscalDeficitsData,
  debtTrajectoryData,
  revenueCollectionsData,
  sectoralCompositionData,
  employmentData,
  bankingCreditData,
  povertyInflationData,
  aapVulnerabilities,
  congressNarratives,
  verificationNeededItems,
  getCurrentDebtToGSDP,
  getLatestRevenueDeficitPercent,
  getLatestFiscalDeficitPercent,
  getUnemploymentComparison,
  getPerCapitaDebtRsCrore,
  getSectoralGrowthRates,
} from "@/lib/kpi-data";
import {
  AlertOctagon,
  TrendingDown,
  TrendingUp,
  Banknote,
  DollarSign,
  Briefcase,
  Target,
  AlertTriangle,
  Scale,
  Building2,
  Shield,
  Eye,
  FileWarning,
} from "lucide-react";

/**
 * Intelligence Dashboard - Economic Macro Indicators
 * Punjab's fiscal health and economic vulnerabilities
 */
export default function EconomicMacroPage() {
  const debtToGSDP = getCurrentDebtToGSDP();
  const revenueDeficit = getLatestRevenueDeficitPercent();
  const fiscalDeficit = getLatestFiscalDeficitPercent();
  const unemployment = getUnemploymentComparison();
  const perCapitaDebt = getPerCapitaDebtRsCrore();
  const sectoralGrowth = getSectoralGrowthRates();

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <Banknote className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">
              Intelligence — Economic Macro Indicators (MP1-PESTLE Economic)
            </p>
            <p className="text-sm text-red-600 dark:text-red-300">
              Punjab&apos;s structural fiscal crisis and economic vulnerabilities — Debt, deficits, sectoral stagnation
            </p>
          </div>
        </div>

        {/* Key Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Outstanding Debt (2025-26)"
            value={`Rs ${(debtTrajectoryData[6]?.outstandingDebtRsCrore / 100000).toFixed(2)} Lakh Cr`}
            subtitle={`${debtToGSDP}% of GSDP`}
            color="rose"
            icon={<AlertOctagon className="h-6 w-6" />}
          />
          <MetricCard
            title="Revenue Deficit (2025-26 BE)"
            value={`${revenueDeficit}%`}
            subtitle="Borrowing to fund day-to-day expenditure"
            color="rose"
            icon={<TrendingDown className="h-6 w-6" />}
          />
          <MetricCard
            title="Fiscal Deficit (2025-26 BE)"
            value={`${fiscalDeficit}%`}
            subtitle="Above FRBM target of 3%"
            color="orange"
            icon={<Scale className="h-6 w-6" />}
          />
          <MetricCard
            title="Unemployment Rate"
            value={`${employmentData.unemployment.rate.plfs2023_24}%`}
            subtitle={`${unemployment.multiple} of national ${employmentData.unemployment.nationalAverage}%`}
            color="purple"
            icon={<Briefcase className="h-6 w-6" />}
          />
        </div>

        {/* Per Capita Debt Warning */}
        <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-semibold text-red-700 dark:text-red-400">
              Per Capita State Debt: Rs {perCapitaDebt.toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-red-600 dark:text-red-300 mt-1">
            Every Punjabi carries Rs 1.5+ lakh in state debt per capita
          </p>
        </div>
      </div>

      {/* GSDP and Growth Trajectory */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">GSDP and Growth Trajectory</p>
            <p className="text-sm text-slate-500">Punjab consistently trails national average</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div>
            <DataTable
              headers={["Year", "GSDP (Rs Cr)", "Growth (Constant)", "Per Capita Income"]}
              rows={gsdpTrajectoryData.map((d) => [
                d.year,
                d.gsdpCurrentPricesRsCrore?.toLocaleString() || "—",
                d.gsdpGrowthConstantPrices ? `${d.gsdpGrowthConstantPrices}%` : "—",
                d.perCapitaIncomeRs ? `Rs ${d.perCapitaIncomeRs.toLocaleString()}` : "—",
              ])}
            />
          </div>
          <div>
            <h4 className="font-medium text-slate-600 dark:text-slate-400 mb-2">GSDP Growth Visualization</h4>
            <MiniChart
              data={gsdpTrajectoryData.filter(d => d.gsdpGrowthConstantPrices).map(d => d.gsdpGrowthConstantPrices!)}
              color="emerald"
              height={100}
            />
            <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20">
              <p className="text-sm text-amber-700 dark:text-amber-400">
                <span className="font-semibold">GSDP CAGR (2019-24):</span> 8.52% at current prices
              </p>
              <p className="text-sm text-amber-600 dark:text-amber-300 mt-1">
                Real growth consistently trails national average by 0.5-1 percentage point
              </p>
            </div>
          </div>
        </div>

        {/* Per Capita Ranking Decline */}
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Per Capita Income Ranking Decline</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">#1</p>
              <p className="text-sm text-slate-500">1981</p>
              <p className="text-xs text-slate-400">Punjab ranked 1st</p>
            </div>
            <div className="text-center">
              <p className="text-2xl text-slate-500">→</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">#16</p>
              <p className="text-sm text-slate-500">Current</p>
              <p className="text-xs text-slate-400">Among Indian states</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fiscal Deficits */}
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <Scale className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Fiscal Deficits</p>
            <p className="text-sm text-red-600 dark:text-red-300">State borrowing to fund consumption, not capital creation</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <DataTable
            headers={["Year", "Revenue Deficit", "Fiscal Deficit", "Primary Deficit"]}
            rows={fiscalDeficitsData.map((d) => [
              d.year,
              d.revenueDeficitPercentGSDP ? `${d.revenueDeficitPercentGSDP}%` : d.revenueDeficitRsCrore.toLocaleString(),
              d.fiscalDeficitPercentGSDP ? `${d.fiscalDeficitPercentGSDP}%` : d.fiscalDeficitRsCrore?.toLocaleString() || "—",
              d.primaryDeficitRsCrore ? `Rs ${d.primaryDeficitRsCrore.toLocaleString()} Cr` : "—",
            ])}
          />
          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Critical Finding</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Revenue deficit means Punjab is borrowing to fund day-to-day expenditure, not productive investment.
              </p>
            </div>
            <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30">
              <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Capital Expenditure</h4>
              <p className="text-2xl font-bold text-red-600">4.4%</p>
              <p className="text-sm text-red-600 dark:text-red-300">of total borrowings go to capital expenditure</p>
              <p className="text-xs text-red-500 mt-1">CAG 2023-24: Bulk of loans used for consumption or past debt repayment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Debt Profile */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Debt Profile</h3>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div>
            <DataTable
              headers={["Year", "Outstanding Debt (Rs Cr)", "Debt-to-GSDP %"]}
              rows={debtTrajectoryData.filter(d => d.outstandingDebtRsCrore).map((d) => [
                d.year,
                d.outstandingDebtRsCrore.toLocaleString(),
                d.debtToGSDPPercent ? `${d.debtToGSDPPercent}%` : "—",
              ])}
            />
          </div>
          <div>
            <h4 className="font-medium text-slate-600 dark:text-slate-400 mb-2">Debt Growth Visualization</h4>
            <MiniChart
              data={debtTrajectoryData.filter(d => d.outstandingDebtRsCrore).map(d => d.outstandingDebtRsCrore)}
              color="rose"
              height={100}
            />
          </div>
        </div>

        {/* Debt Composition */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Annual Debt Increase"
            value="Rs 33,721 Cr"
            subtitle="Average under AAP (2022-25)"
            color="rose"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <MetricCard
            title="Interest Payments"
            value="Rs 23,900 Cr"
            subtitle="23% of revenue receipts"
            color="orange"
            icon={<DollarSign className="h-5 w-5" />}
          />
          <MetricCard
            title="Debt Servicing"
            value="41%"
            subtitle="of total revenue (2022-23)"
            color="rose"
            icon={<Banknote className="h-5 w-5" />}
          />
          <MetricCard
            title="Off-Budget Borrowings"
            value="Rs 4,093 Cr"
            subtitle="Via PSUs (CAG flagged)"
            color="amber"
            icon={<FileWarning className="h-5 w-5" />}
          />
        </div>

        {/* NITI Aayog Ranking */}
        <div className="rounded-lg bg-red-100 p-4 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-semibold text-red-700 dark:text-red-400">NITI Aayog Fiscal Health Index 2025</span>
          </div>
          <p className="text-2xl font-bold text-red-600">LAST</p>
          <p className="text-sm text-red-600 dark:text-red-300">Among major states</p>
          <div className="mt-3 p-2 bg-red-50 dark:bg-red-900/20 rounded">
            <p className="text-sm text-red-700 dark:text-red-400">
              <span className="font-semibold">FRBM Target:</span> 20% debt-to-GSDP
            </p>
            <p className="text-sm text-red-600 dark:text-red-300">
              <span className="font-semibold">Punjab Current:</span> ~{debtToGSDP}%
            </p>
          </div>
        </div>
      </div>

      {/* Revenue and Tax Collections */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-blue-700 dark:text-blue-400">Revenue and Tax Collections</p>
            <p className="text-sm text-blue-600 dark:text-blue-300">State captures shrinking share of its economy</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <MetricCard
            title="Own Tax Revenue"
            value={`Rs ${revenueCollectionsData.ownTaxRevenue.amountRsCrore.toLocaleString()} Cr`}
            subtitle={`+${revenueCollectionsData.ownTaxRevenue.growth}% growth (2024-25)`}
            color="emerald"
            icon={<DollarSign className="h-5 w-5" />}
          />
          <MetricCard
            title="Revenue Receipts"
            value={`Rs ${revenueCollectionsData.revenueReceipts.amountRsCrore.toLocaleString()} Cr`}
            subtitle="CAGR 9.71% from 2019-20"
            color="blue"
            icon={<Banknote className="h-5 w-5" />}
          />
          <MetricCard
            title="GST Growth (Net)"
            value={`${revenueCollectionsData.ownTaxRevenue.gstGrowth.net}%`}
            subtitle="Above national avg of 10%"
            color="emerald"
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        {/* Committed Expenditure */}
        <div className="rounded-lg bg-orange-100 p-4 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800">
          <h4 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">Committed Expenditure Crisis</h4>
          <div className="grid gap-3 md:grid-cols-3 mb-4">
            <div>
              <p className="text-sm text-slate-500">Salaries + Pensions + Interest</p>
              <p className="text-xl font-bold text-slate-700">Rs 76,388 Cr</p>
              <p className="text-xs text-slate-400">65% of revenue expenditure</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">+ Committed + Inflexible</p>
              <p className="text-xl font-bold text-slate-700">Rs 88,808 Cr</p>
              <p className="text-xs text-slate-400">75.64% of revenue expenditure</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">With Subsidies Added</p>
              <p className="text-xl font-bold text-red-600">120%+</p>
              <p className="text-xs text-slate-400">Exceeds total revenue</p>
            </div>
          </div>
          <p className="text-sm text-orange-600 dark:text-orange-300">
            Result: The state must borrow simply to meet its salary and subsidy obligations
          </p>
        </div>
      </div>

      {/* Sectoral Composition */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Sectoral Composition (GSVA 2023-24)</h3>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div>
            <h4 className="font-medium text-slate-600 dark:text-slate-400 mb-3">Sector Share of GSVA</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Agriculture (incl. allied)</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{sectoralCompositionData.gsvaShare.agriculture}%</span>
                </div>
                <ProgressBar value={sectoralCompositionData.gsvaShare.agriculture} max={100} color="emerald" label="Agriculture" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Industry</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{sectoralCompositionData.gsvaShare.industry}%</span>
                </div>
                <ProgressBar value={sectoralCompositionData.gsvaShare.industry} max={100} color="blue" label="Industry" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600 dark:text-slate-300">Services</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{sectoralCompositionData.gsvaShare.services}%</span>
                </div>
                <ProgressBar value={sectoralCompositionData.gsvaShare.services} max={100} color="purple" label="Services" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-slate-600 dark:text-slate-400 mb-3">Growth Rates (Constant 2023-24)</h4>
            <div className="grid gap-2">
              <div className="flex items-center justify-between rounded bg-green-50 p-2 dark:bg-green-900/20">
                <span className="text-sm text-slate-600 dark:text-slate-300">Agriculture</span>
                <Badge variant="warning">{sectoralGrowth.agriculture}%</Badge>
              </div>
              <div className="flex items-center justify-between rounded bg-blue-50 p-2 dark:bg-blue-900/20">
                <span className="text-sm text-slate-600 dark:text-slate-300">Manufacturing</span>
                <Badge variant="success">{sectoralGrowth.industry}%</Badge>
              </div>
              <div className="flex items-center justify-between rounded bg-purple-50 p-2 dark:bg-purple-900/20">
                <span className="text-sm text-slate-600 dark:text-slate-300">Services</span>
                <Badge variant="success">{sectoralGrowth.services}%</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Agriculture Employment vs National */}
        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Agriculture Employment Paradox</h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Punjab Agricultural Employment</p>
              <p className="text-2xl font-bold text-amber-600">{sectoralCompositionData.agricultureEmployment.percentWorkforce}%</p>
              <p className="text-xs text-slate-400">of workforce (PLFS 2023-24)</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">National Agricultural Employment</p>
              <p className="text-2xl font-bold text-slate-600">~42%</p>
              <p className="text-xs text-slate-400">of workforce</p>
            </div>
          </div>
          <p className="text-sm text-amber-600 dark:text-amber-300 mt-3">
            Despite lower agricultural employment share, growth is anaemic (2.3%) reflecting Punjab&apos;s structural farm crisis
          </p>
        </div>
      </div>

      {/* Banking and Credit */}
      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-800 dark:bg-cyan-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
            <Banknote className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-cyan-700 dark:text-cyan-400">Banking and Credit</p>
            <p className="text-sm text-cyan-600 dark:text-cyan-300">Capital flight from Punjab</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <MetricCard
            title="Credit-Deposit Ratio"
            value={`${bankingCreditData.creditDepositRatio.value}%`}
            subtitle={`vs national ${bankingCreditData.creditDepositRatio.nationalAverage}%`}
            color="rose"
            icon={<AlertTriangle className="h-5 w-5" />}
          />
          <MetricCard
            title="FDI Inflow"
            value={`Rs ${bankingCreditData.fdiInflow.amountRsCrore.toLocaleString()} Cr`}
            subtitle={bankingCreditData.fdiInflow.period}
            color="blue"
            icon={<Building2 className="h-5 w-5" />}
          />
          <MetricCard
            title="Investment FY26"
            value={`Rs ${bankingCreditData.investmentFY26.amountRsCrore.toLocaleString()} Cr`}
            subtitle={`Projected ${bankingCreditData.investmentFY26.projectedJobs.toLocaleString()} jobs`}
            color="emerald"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <MetricCard
            title="Exports FY25"
            value={`Rs ${bankingCreditData.exportsFY25.amountRsCrore.toLocaleString()} Cr`}
            subtitle="Engineering, rice, pharma, textiles"
            color="purple"
            icon={<Building2 className="h-5 w-5" />}
          />
        </div>

        <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
          <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Industrial Strengths</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="info">Woollen Knitwear: {bankingCreditData.industrialStrengths.woollenKnitwear}</Badge>
            <Badge variant="info">Sports Goods: {bankingCreditData.industrialStrengths.sportsGoods}</Badge>
            <Badge variant="info">Sewing Machines: {bankingCreditData.industrialStrengths.sewingMachines}</Badge>
          </div>
        </div>
      </div>

      {/* Poverty and Inflation */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">Poverty and Inflation</h3>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Population Below Poverty Line</h4>
            <p className="text-3xl font-bold text-green-600">{povertyInflationData.poverty.populationBelowPL.percent}%</p>
            <p className="text-sm text-green-600 dark:text-green-300">2025-26 estimate</p>
            <p className="text-xs text-green-500 mt-1">{povertyInflationData.poverty.populationBelowPL.ranking}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
              {povertyInflationData.poverty.note}
            </p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">CPI Inflation</h4>
            <p className="text-3xl font-bold text-blue-600">{povertyInflationData.inflation.cpi}%</p>
            <p className="text-sm text-blue-600 dark:text-blue-300">February 2025</p>
            <p className="text-xs text-slate-500 mt-2">Moderate</p>
          </div>
        </div>

        <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-600 dark:text-amber-300">
            <span className="font-semibold">Multidimensional Poverty:</span> {povertyInflationData.multidimensionalPoverty}
          </p>
        </div>
      </div>

      {/* Political Intelligence - AAP Vulnerabilities */}
      <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-red-700 dark:text-red-400">Political Intelligence — AAP Vulnerabilities</p>
            <p className="text-sm text-red-600 dark:text-red-300">Key economic vulnerabilities for Congress to exploit</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {aapVulnerabilities.map((vuln) => (
            <div key={vuln.id} className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-red-200 dark:border-red-800">
              <div className="flex items-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                  {vuln.id}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{vuln.title}</h4>
                  {vuln.keyPoints[0] && (
                    <p className="text-sm text-red-600 dark:text-red-300 mt-1">{vuln.keyPoints[0]}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Political Intelligence - Congress Narratives */}
      <div className="rounded-xl border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400">Congress Narrative Opportunities</p>
            <p className="text-sm text-green-600 dark:text-green-300">Key messages to resonate with voters</p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {congressNarratives.map((narrative) => (
            <div key={narrative.id} className="rounded-lg bg-white p-4 dark:bg-slate-800 border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold">
                  {narrative.id}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">{narrative.narrative}</h4>
                  {narrative.keyStatistic && (
                    <p className="text-sm text-green-600 dark:text-green-300 mt-1">{narrative.keyStatistic}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Needed */}
      <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-800 dark:bg-yellow-900/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-white">
            <Eye className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold text-yellow-700 dark:text-yellow-400">Verification Needed</p>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">Data gaps requiring further research</p>
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2">
          {verificationNeededItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="text-yellow-500">→</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-3">Data Sources</h4>
        <div className="grid gap-2 md:grid-cols-2 text-sm">
          {economicMacroKPI.sources.slice(0, 12).map((source, idx) => (
            <div key={idx} className="flex items-center justify-between text-slate-600 dark:text-slate-400">
              <span className="truncate">{source}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
