"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { MetricCard, DataTable, Badge } from "@/components/ui/MetricCard";
import {
  localIssuesMalwaKPI,
  getCriticalIssues,
  getHighIssues,
  getHighOpportunityConstituencies,
  getDrugCrisisStats,
  getCancerCrisisStats,
  getUnemploymentStats,
} from "@/lib/governance-local-issues-malwa-data";
import {
  AlertOctagon,
  AlertTriangle,
  Skull,
  AlertCircle,
  Briefcase,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

/**
 * Governance Dashboard - Local Issues Malwa Region
 * Malwa region local issues and crisis analysis
 */
export default function GovernanceLocalIssuesMalwaPage() {
  const criticalIssues = getCriticalIssues();
  const highIssues = getHighIssues();
  const highOpportunity = getHighOpportunityConstituencies();
  const drugStats = getDrugCrisisStats();
  const cancerStats = getCancerCrisisStats();
  const unemploymentStats = getUnemploymentStats();

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
              <AlertOctagon className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-purple-700 dark:text-purple-400">
                Governance — Local Issues Malwa Region (MP1-Foundational)
              </p>
              <p className="text-sm text-purple-600 dark:text-purple-300">
                Malwa ({localIssuesMalwaKPI.regionalOverview.totalSeats} of 117 seats) — The decisive region | Data: 19 May 2026
              </p>
            </div>
          </div>

          {/* Malwa Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <MetricCard
              title="Malwa Seats"
              value={`${localIssuesMalwaKPI.regionalOverview.totalSeats}/117`}
              subtitle="Decisive region for government formation"
              color="purple"
              icon={<AlertOctagon className="h-6 w-6" />}
            />
            <MetricCard
              title="AAP 2022 Win"
              value="66/69"
              subtitle="AAP swept Malwa in 2022"
              color="rose"
              icon={<TrendingDown className="h-6 w-6" />}
            />
            <MetricCard
              title="AAP Vote Share Drop"
              value="42% → 26%"
              subtitle="2022 to 2024 Lok Sabha"
              color="orange"
              icon={<TrendingDown className="h-6 w-6" />}
            />
            <MetricCard
              title="Congress 2024"
              value="7/13"
              subtitle="Punjab Lok Sabha seats"
              color="blue"
              icon={<TrendingUp className="h-6 w-6" />}
            />
          </div>

          {/* Critical Issues Banner */}
          <Card className="bg-red-100 dark:bg-red-900/30 mb-6">
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <h4 className="font-bold text-red-700 dark:text-red-400">CRITICAL Issues (Voter Priority)</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {criticalIssues.map((issue) => (
                  <Badge key={issue} variant="danger">{issue}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Card>
      </motion.div>

      {/* Drug Addiction Crisis - CRITICAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
              <Skull className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">Drug Addiction — CRITICAL</p>
              <p className="text-sm text-red-600 dark:text-red-300">
                Most acute in: {localIssuesMalwaKPI.drugAddiction.mostAcuteDistricts.join(", ")}
              </p>
            </div>
          </div>

          <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Total Drug Users"
              value={`${(localIssuesMalwaKPI.drugAddiction.scale.totalDrugUsers / 1000000).toFixed(1)}M`}
              subtitle="Parliament Panel Report 2023"
              color="rose"
            />
            <MetricCard
              title="Children (10-17) with Disorders"
              value={`${(localIssuesMalwaKPI.drugAddiction.scale.childrenWithSubstanceDisorders / 1000).toFixed(0)}K`}
              subtitle="Substance use disorders"
              color="rose"
            />
            <MetricCard
              title="Families Affected"
              value={`${localIssuesMalwaKPI.drugAddiction.scale.familiesAffected}%`}
              subtitle="At least one addict"
              color="orange"
            />
            <MetricCard
              title="Drones Seized (2024)"
              value={`${localIssuesMalwaKPI.drugAddiction.scale.dronesSeized2024}+`}
              subtitle="Double from 2023"
              color="amber"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Drug Deaths (Apr 2020 - Mar 2023)</h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Reported</span>
                  <span className="text-xl font-bold text-red-600">{localIssuesMalwaKPI.drugAddiction.scale.drugRelatedDeaths.reported}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-red-100 dark:bg-red-900/30">
              <CardContent>
                <h4 className="mb-2 font-semibold text-red-700 dark:text-red-400">Resolution Status</h4>
                <p className="text-sm text-red-600 dark:text-red-300">{localIssuesMalwaKPI.drugAddiction.resolutionStatus}</p>
              </CardContent>
            </Card>
          </div>
        </Card>
      </motion.div>

      {/* Cancer Belt & Water Contamination - CRITICAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-blue-700 dark:text-blue-400">Cancer Belt & Water Contamination — CRITICAL</p>
              <p className="text-sm text-blue-600 dark:text-blue-300">
                {localIssuesMalwaKPI.cancerBelt.scale.designation}
              </p>
            </div>
          </div>

          <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Muktsar Cancer Rate"
              value={`${localIssuesMalwaKPI.cancerBelt.scale.muktsarCancerPrevalence}/lakh`}
              subtitle="Highest in Punjab"
              color="blue"
            />
            <MetricCard
              title="Uranium (Bathinda)"
              value={`${localIssuesMalwaKPI.cancerBelt.scale.bathindaUranium.concentration} ppb`}
              subtitle={`WHO limit: ${localIssuesMalwaKPI.cancerBelt.scale.bathindaUranium.whoLimit} ppb`}
              color="rose"
            />
            <MetricCard
              title="Samples Exceeded Limits"
              value={`${localIssuesMalwaKPI.cancerBelt.scale.barcAnalysis.exceededLimitsPercent}%`}
              subtitle={`of ${localIssuesMalwaKPI.cancerBelt.scale.barcAnalysis.samples} BARC samples`}
              color="orange"
            />
            <MetricCard
              title="CGWB: Uranium Above Limits"
              value={`${localIssuesMalwaKPI.cancerBelt.scale.cgwB2025.uraniumAboveLimitsPercent}%`}
              subtitle={`of ${localIssuesMalwaKPI.cancerBelt.scale.cgwB2025.wellsSampled} wells`}
              color="rose"
            />
          </div>
        </Card>
      </motion.div>

      {/* Unemployment Crisis - CRITICAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500 text-white">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-yellow-700 dark:text-yellow-400">Unemployment & Youth Distress — CRITICAL</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-300">
                Most acute in: {localIssuesMalwaKPI.unemployment.mostAffectedDistricts.join(", ")}
              </p>
            </div>
          </div>

          <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Youth Unemployment (15-29)"
              value={`${localIssuesMalwaKPI.unemployment.scale.youthUnemployment15129}%`}
              subtitle={`National: ${localIssuesMalwaKPI.unemployment.scale.nationalAverage}%`}
              color="rose"
            />
            <MetricCard
              title="Rural Youth Unemployment"
              value={`${localIssuesMalwaKPI.unemployment.scale.ruralYouthUnemployment}%`}
              subtitle={`Male: ${localIssuesMalwaKPI.unemployment.scale.ruralMaleUnemployment}%`}
              color="orange"
            />
            <MetricCard
              title="Female Labour Participation"
              value={`${localIssuesMalwaKPI.unemployment.scale.femaleLabourForceParticipation}%`}
              subtitle="Youth (15-29)"
              color="rose"
            />
            <MetricCard
              title="Graduate Unemployment"
              value={`${localIssuesMalwaKPI.unemployment.scale.youthUnemployment15129}%`}
              subtitle="Higher than national"
              color="amber"
            />
          </div>
        </Card>
      </motion.div>

      {/* Top Attack Lines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">Top Constituency Attack Lines</p>
              <p className="text-sm text-red-600 dark:text-red-300">
                Priority targets for Congress campaign
              </p>
            </div>
          </div>

          <DataTable
            headers={["Priority", "Constituency", "Primary Attack", "Supporting Evidence"]}
            rows={localIssuesMalwaKPI.attackLines.slice(0, 10).map((line) => [
              line.priority.toString(),
              line.constituency,
              line.primaryAttack,
              line.supportingEvidence,
            ])}
          />
        </Card>
      </motion.div>

      {/* Women & Dalit Voters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
          <h3 className="mb-4 text-lg font-semibold text-purple-700 dark:text-purple-400">Key Voter Demographics</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="mb-2 font-semibold text-pink-700 dark:text-pink-400">Women Voters (Swing Block)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{localIssuesMalwaKPI.womenVoters.influence}</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-slate-800">
              <CardContent>
                <h4 className="mb-2 font-semibold text-orange-700 dark:text-orange-400">Dalit Vote (32% of Punjab)</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">{localIssuesMalwaKPI.dalitVote.aapInroads}</p>
              </CardContent>
            </Card>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
