"use client";

import { Badge } from "@/components/ui/MetricCard";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Users, Cross, Star, Building2, Heart, AlertTriangle, TrendingUp } from "lucide-react";
import {
  sikhPopulationData,
  observanceTiers,
  damdamiTaksalData,
  radhaSoamiData,
  namdhariData,
  nirankariData,
  nihangData,
  akjData,
  akalTakhtData,
  sgpcData,
  strategicSummary,
} from "@/lib/sikhism-internal-data";
import {
  hinduPopulationOverview,
  hinduDalitData,
  aryaSamajData,
  majorTemplesData,
  rssDistrictDensity,
  rssVictoryPlan2026,
  hinduMobilizationIssues,
  strategicImplicationsForCongress,
  sharedSacredCalendar,
} from "@/lib/hinduism-data";

/**
 * Demography - Religious Demographics Section
 * Sikh, Hindu, Muslim demographics and religious community electoral analysis
 */
export default function DemographyReligiousPage() {
  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
              <Star className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Religious Demographics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Sikh, Hindu, Muslim demographics and religious community electoral patterns
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </motion.div>

      {/* Sikh Demographics */}
      <Card padding="lg" className="border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
            <Users className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">Sikh Demographics</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">Majority community with complex internal diversity</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Population Overview */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Census 2011</p>
              <p className="text-2xl font-bold text-blue-600">{sikhPopulationData.census2011.percentage}%</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Current Estimate (2025)</p>
              <p className="text-2xl font-bold text-blue-600">{sikhPopulationData.currentEstimates2025.percentage}</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Decline since 2001</p>
              <p className="text-2xl font-bold text-red-600">~5%</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Drivers:</strong> Lower fertility rates, higher emigration (Canada, UK, Australia, US), Hindu migration from other states
          </p>

          {/* Observance Tiers */}
          <div>
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Observance Tiers</h4>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {observanceTiers.map((tier) => (
                <div key={tier.type} className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-800 dark:text-slate-200">{tier.type}</span>
                    <span className="text-sm font-bold text-blue-600">{tier.percentage}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{tier.electoralSignificance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Hindu Demographics */}
      <Card padding="lg" className="border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
            <Cross className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Hindu Demographics</h3>
            <p className="text-sm text-orange-600 dark:text-orange-400">~38% population, urban concentration</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Population Overview */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Population Share</p>
              <p className="text-2xl font-bold text-orange-600">{hinduPopulationOverview.percentageOfState}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">~10-11 million</p>
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">Concentration</p>
              <p className="text-lg font-medium text-slate-800 dark:text-slate-200">Urban centres & border districts</p>
            </div>
          </div>

          {/* Regional Distribution */}
          <div>
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Regional Distribution</h4>
            <div className="space-y-2">
              {hinduPopulationOverview.regionalDistribution.map((region) => (
                <div key={region.region} className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
                  <div>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{region.region}</span>
                    <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">({region.seats} seats)</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-orange-600">{region.hinduShare}</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{region.keyDistricts.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hindu Dalit Data */}
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Hindu Dalit Population</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Population</p>
                <p className="text-xl font-bold text-slate-800 dark:text-slate-200">{hinduDalitData.populationPercentage}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">SC Reserved Seats</p>
                <p className="text-xl font-bold text-slate-800 dark:text-slate-200">{hinduDalitData.reservedSeats} of {hinduDalitData.totalSeats}</p>
              </div>
            </div>
          </div>

          {/* Arya Samaj */}
          <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Arya Samaj Influence</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Founded 1875 by Swami Dayanand Saraswati. 1,200+ colleges, 10,000+ schools across Punjab.
              Historically Congress-leaning but some sections shifted to BJP post-2014.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {aryaSamajData.ideologicalStance.slice(0, 3).map((stance, i) => (
                <span key={i} className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/50 dark:text-orange-300">
                  {stance}
                </span>
              ))}
            </div>
          </div>

          {/* Major Temples */}
          <div>
            <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Major Temples</h4>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {majorTemplesData.slice(0, 6).map((temple) => (
                <div key={temple.name} className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-800">
                  <p className="font-medium text-slate-800 dark:text-slate-200">{temple.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{temple.location} - {temple.deity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Dera/Sect Influence */}
      <Card padding="lg" className="border-2 border-green-500 bg-green-50 dark:bg-green-900/20">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
            <Heart className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Dera/Sect Influence</h3>
            <p className="text-sm text-green-600 dark:text-green-400">Key spiritual movements and their electoral impact</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Damdami Taksal */}
          <Card padding="md">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Damdami Taksal</span>
              <Badge variant="warning">High Political</Badge>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{damdamiTaksalData.headquarters.location}, {damdamiTaksalData.headquarters.district}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Head: {damdamiTaksalData.currentHead}</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Influence: {damdamiTaksalData.influence.regions.join(", ")}</p>
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">Risk: Aligned with BJP; could mobilise Panthic voters against Congress</p>
          </Card>

          {/* Radha Soami */}
          <Card padding="md">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Radha Soami (RSSB)</span>
              <Badge variant="success">Vote Bank</Badge>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">HQ: Beas, Amritsar district</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Disciplined bloc voting per dera guidance</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Influence: {radhaSoamiData.constituencyInfluence.slice(0, 3).join(", ")}</p>
          </Card>

          {/* Namdhari */}
          <Card padding="md">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Namdhari</span>
              <Badge variant="info">Disciplined</Badge>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">HQ: Bhaini Sahib, Ludhiana</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Population: ~200,000-300,000</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Bloc voting per dera guidance</p>
          </Card>

          {/* Nirankari */}
          <Card padding="md">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Nirankari</span>
              <Badge variant="danger">Sensitive</Badge>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">HQ: Delhi (Punjab presence in Doaba)</p>
            <p className="mt-2 text-xs text-red-600 dark:text-red-400">Risk: Perceived closeness triggers backlash from mainstream Sikhs</p>
          </Card>

          {/* Nihang */}
          <Card padding="md">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Nihang Sikhs</span>
              <Badge variant="info">Respected</Badge>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Majha region, around Anandpur Sahib</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Factions: Budha Dal, Taruna Dal</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Generally apolitical but assertive on maryada issues</p>
          </Card>

          {/* AKJ */}
          <Card padding="md">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-slate-200">Akhand Kirtani Jatha</span>
              <Badge variant="info">Influential</Badge>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Strict Amritdhari group; scattered across Punjab</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Influence: Malwa region ({akjData.influence.regions.join(", ")})</p>
          </Card>
        </div>
      </Card>

      {/* Religious-Political Alignment */}
      <Card padding="lg" className="border-2 border-purple-500 bg-purple-50 dark:bg-purple-900/20">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
            <Building2 className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Religious-Political Alignment</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">Key institutions and their political roles</p>
          </div>
        </div>

        <div className="space-y-4">
          {/* SGPC */}
          <Card padding="md">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">SGPC (Shiromani Gurdwara Parbandhak Committee)</h4>
              <Badge variant="warning">Overdue Elections</Badge>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Members</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">170 elected + 15 nominated</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Last Election</p>
                <p className="text-sm font-medium text-red-600">2011 ({sgpcData.electionStatus.yearsOverdue} years overdue)</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Annual Budget</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Rs {sgpcData.structure.annualBudgetCrore} crore</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Control</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">SAD (Badal) via expired mandate</p>
              </div>
            </div>
          </Card>

          {/* Akal Takht */}
          <Card padding="md">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">Akal Takht</h4>
              <Badge variant="success">Supreme Authority</Badge>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Highest temporal seat of Sikh authority within Golden Temple complex</p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Current Jathedar: <span className="font-medium">{akalTakhtData.currentJathedar}</span></p>
            <p className="text-sm text-slate-700 dark:text-slate-300">Acting Jathedar: <span className="font-medium">{akalTakhtData.actingJathedar}</span></p>
            <div className="mt-3 rounded bg-red-50 p-2 dark:bg-red-900/20">
              <p className="text-xs font-medium text-red-700 dark:text-red-400">Dec 2024 Action: Tankhah (religious punishment) on Sukhbir Singh Badal</p>
            </div>
          </Card>

          {/* RSS Victory Plan */}
          <Card padding="md">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">RSS Punjab Victory Plan 2026</h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Five-point strategy targeting Dalit-Ram connect</p>
            <div className="mt-3 space-y-2">
              {rssVictoryPlan2026.fivePointStrategy.map((point) => (
                <div key={point.number} className="flex gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
                    {point.number}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{point.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{point.description.slice(0, 100)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Hindu Mobilization Issues */}
          <Card padding="md">
            <h4 className="font-semibold text-slate-800 dark:text-slate-300">Hindu Mobilization Issues</h4>
            <div className="mt-3 space-y-2">
              {hinduMobilizationIssues.map((issue) => (
                <div key={issue.issue} className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-700">
                  <span className="text-sm text-slate-700 dark:text-slate-300">{issue.issue}</span>
                  <Badge variant={issue.salience === "High" ? "danger" : issue.salience === "Moderate" ? "warning" : "info"}>
                    {issue.salience}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Card>

      {/* Strategic Implications */}
      <Card padding="lg" className="border-2 border-amber-500">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-lg font-bold text-white">
            !
          </span>
          <div>
            <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-400">Strategic Implications for Congress</h3>
            <p className="text-sm text-amber-600 dark:text-amber-400">Key opportunities and risks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Opportunities */}
          <div>
            <h4 className="mb-2 font-semibold text-green-700 dark:text-green-400">Opportunities</h4>
            <div className="space-y-2">
              {strategicSummary.opportunities.map((opp) => (
                <div key={opp.number} className="rounded-lg border border-green-200 bg-white p-3 dark:border-green-800 dark:bg-slate-800">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{opp.number}. {opp.title}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{opp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risks */}
          <div>
            <h4 className="mb-2 font-semibold text-red-700 dark:text-red-400">Risks</h4>
            <div className="space-y-2">
              {strategicSummary.risks.map((risk) => (
                <div key={risk.number} className="rounded-lg border border-red-200 bg-white p-3 dark:border-red-800 dark:bg-slate-800">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{risk.number}. {risk.title}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{risk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Recommendations */}
        <div className="mt-4">
          <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Top Recommendations</h4>
          <div className="space-y-2">
            {strategicSummary.topRecommendations.map((rec) => (
              <div key={rec.number} className="flex gap-3 rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-slate-800">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                  {rec.number}
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{rec.action}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Congress Positioning */}
        <div className="mt-4">
          <h4 className="mb-2 font-semibold text-slate-700 dark:text-slate-300">Congress Positioning Strategy</h4>
          <div className="space-y-2">
            {strategicImplicationsForCongress.map((impl) => (
              <div key={impl.number} className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm text-slate-700 dark:text-slate-300">{impl.number}. {impl.implication}</p>
                <p className="mt-1 text-xs text-green-600 dark:text-green-400">→ {impl.strategicValue}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Shared Festivals */}
      <Card padding="lg" className="border-2 border-slate-500">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-500 text-lg font-bold text-white">
            F
          </span>
          <div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-400">Shared Sacred Calendar</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Syncretic traditions bridging communities</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {sharedSacredCalendar.map((festival) => (
            <div key={festival.occasion} className="rounded-lg border border-slate-200 bg-white p-3 text-center dark:border-slate-700 dark:bg-slate-800">
              <p className="font-medium text-slate-800 dark:text-slate-200">{festival.occasion}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{festival.sharedParticipation}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
