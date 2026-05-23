"use client";

import { DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import {
  ageStructureData,
  ageStructureMetrics,
  ageCohortDistributionData,
  politicalCohortData,
  temporalChangeData,
  birthRegistrationData,
  regionalAgeProfileData,
  ageStructureStrategicImplications,
} from "@/lib/age-structure-data";
import { Users, User, Baby, Briefcase, Home, Plane, AlertTriangle, GraduationCap, Globe } from "lucide-react";

/**
 * Demography - Age Structure Section
 * Age distribution, political demographics, youth cohorts, and generational patterns
 */

export default function DemographyAgePage() {
  // Destructure key data for readability
  const { populationOverview, ageCohorts, populationPyramid, politicalCohorts, firstTimeVoters, lifeStages, temporalChanges, emigration, regionalAge, dataQuality } = ageStructureData;

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
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
              A
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Age Structure & Demographics
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Age cohorts, political demographics, youth unemployment, and generational patterns
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </motion.div>

      {/* KEY METRICS SECTION */}
      <Card padding="lg" className="border-2 border-emerald-500 dark:border-emerald-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-lg font-bold text-white">
            A
          </span>
          <div>
            <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">Age Structure & Political Cohorts — Punjab 2027</h3>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">Sources: Census 2011, NFHS-5, UDISE+ 2023-24, ECI, StatisticsTimes</p>
          </div>
        </div>

        {/* Population Overview */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Population Overview (Projected 2026)</h4>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3.14 Cr</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-300">Total Population</div>
              <div className="text-xs text-blue-600 dark:text-blue-300">31.37 million (July 2026)</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">1.65 Cr</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Male Population</div>
              <div className="text-xs text-green-600 dark:text-green-300">16.45 million</div>
            </div>
            <div className="rounded-lg bg-rose-50 p-4 dark:bg-rose-900/20">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">1.49 Cr</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-rose-700 dark:text-rose-300">Female Population</div>
              <div className="text-xs text-rose-600 dark:text-rose-300">14.92 million</div>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">110.2</div>
              <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-300">Sex Ratio</div>
              <div className="text-xs text-purple-600 dark:text-purple-300">Males per 100 females</div>
            </div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">0.58%</div>
              <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">Annual Growth Rate</div>
              <div className="text-xs text-orange-600 dark:text-orange-300">10th lowest among states</div>
            </div>
            <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">1.6</div>
              <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-300">Total Fertility Rate</div>
              <div className="text-xs text-teal-600 dark:text-teal-300">Below replacement (2.1)</div>
            </div>
            <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">2.19%</div>
              <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-300">India Population Share</div>
              <div className="text-xs text-yellow-600 dark:text-yellow-300">Ranked by state</div>
            </div>
            <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">30-31</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-300">Median Age (Est.)</div>
              <div className="text-xs text-red-600 dark:text-red-300">Aging faster than national avg</div>
            </div>
          </div>
        </div>

        {/* Age Group Shares */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Age Group Shares (2026 Projected)</h4>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/20">
              <div className="flex items-center gap-2">
                <Baby className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">22%</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-indigo-700 dark:text-indigo-300">Youth (0-14)</div>
              <div className="text-xs text-indigo-600 dark:text-indigo-300">Declining share (was 25.5% in 2011)</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">64%</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-300">Working Age (15-59)</div>
              <div className="text-xs text-green-600 dark:text-green-300">Plateaued since 2011</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">12-13%</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-300">Elderly (60+)</div>
              <div className="text-xs text-orange-600 dark:text-orange-300">Growing (was 10.3% in 2011)</div>
            </div>
          </div>
        </div>

        {/* Population Pyramid Analysis */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Population Pyramid Analysis</h4>
          <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              <span className="font-semibold">Pyramid Shape:</span> {populationPyramid.pyramidShape}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              {populationPyramid.description}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-red-600 dark:text-red-400">Evidence:</span> {populationPyramid.constrictiveBaseEvidence}
            </p>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {populationPyramid.currentShares.map((share) => (
              <div key={share.ageGroup} className="rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{share.ageGroup}</span>
                  <div className="text-right">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{share.percent2026Projected}%</span>
                    <span className="ml-2 text-xs text-slate-400">(was {share.percent2011}% in 2011)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Birth Registration Decline */}
        <div className="mb-6">
          <h4 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-3">Birth Registration Decline</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {populationPyramid.birthRegistrations.map((birth) => (
              <div key={birth.year} className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
                <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">{birth.year}</div>
                <div className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-400">{birth.count.toLocaleString()}</div>
                {birth.decline && (
                  <div className="mt-1 text-xs font-medium text-red-600 dark:text-red-400">{birth.decline} decline</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* AGE COHORT TABLE */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Five-Year Age Cohorts — Census 2011
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Detailed population distribution by age group with sex ratio breakdown
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Age Group", "Population", "% of Total", "Male", "Female", "Sex Ratio (M:100F)"]}
            rows={ageCohorts.cohorts.map((cohort) => [
              cohort.ageGroup,
              cohort.population.toLocaleString(),
              `${cohort.percentOfTotal}%`,
              cohort.male.toLocaleString(),
              cohort.female.toLocaleString(),
              cohort.malesPer100Females,
            ])}
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">Total: {ageCohorts.total.toLocaleString()}</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">Census 2011</div>
          </div>
          <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <div className="text-lg font-bold text-green-600 dark:text-green-400">Male: {ageCohorts.totalMale.toLocaleString()}</div>
            <div className="text-xs text-green-600 dark:text-green-300">{ageCohorts.totalSexRatio} sex ratio</div>
          </div>
          <div className="rounded-lg bg-rose-50 p-3 dark:bg-rose-900/20">
            <div className="text-lg font-bold text-rose-600 dark:text-rose-400">Female: {ageCohorts.totalFemale.toLocaleString()}</div>
            <div className="text-xs text-rose-600 dark:text-rose-300">Census 2011</div>
          </div>
        </div>
      </Card>

      {/* POLITICAL AGE COHORTS */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Political Age Cohorts — 2027 Electorate
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Voter-relevant age groups with political significance
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {politicalCohorts.cohorts.map((cohort) => (
            <div key={cohort.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cohort.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{cohort.ageRange} years</div>
                </div>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {cohort.percentOfTotal}%
                </span>
              </div>
              <div className="mt-2 text-lg font-bold text-slate-700 dark:text-slate-300">{cohort.estimatedPopulation}</div>
              <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">{cohort.politicalSignificance}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* FIRST-TIME VOTERS 2027 */}
      <Card padding="lg" className="border-2 border-indigo-500 dark:border-indigo-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-lg font-bold text-white">
            18
          </span>
          <div>
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400">First-Time Voters 2027</h3>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">Age cohort turning 18 by Feb 2027</p>
          </div>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">2005-2009</div>
            <div className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">Birth Years</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">18-22</div>
            <div className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">Age Range (Feb 2027)</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">~8-10 Lakh</div>
            <div className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">Net New Voters</div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Estimation Pool</h4>
          <div className="space-y-2">
            {firstTimeVoters.pool.map((pool) => (
              <div key={pool.parameter} className="flex items-center justify-between rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                <span className="text-sm text-slate-600 dark:text-slate-400">{pool.parameter}</span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{pool.estimate}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2">SIR Status</h4>
          <p className="text-sm text-amber-600 dark:text-amber-300">{firstTimeVoters.estimation.sirStatus}</p>
          <p className="mt-2 text-xs text-amber-500">{firstTimeVoters.verificationNeeded}</p>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Political Character</h4>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1">
              <div className="text-xs text-slate-500">Born during AAP Governance: <span className="font-semibold text-green-600">{firstTimeVoters.politicalCharacter.bornDuringAAPGovernance ? "Yes" : "No"}</span></div>
              <div className="text-xs text-slate-500">Digital Native: <span className="font-semibold text-green-600">{firstTimeVoters.politicalCharacter.digitalNative ? "Yes" : "No"}</span></div>
              <div className="text-xs text-slate-500">Info Sources: {firstTimeVoters.politicalCharacter.primaryInfoSources.join(", ")}</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-slate-500">Key Issues: {firstTimeVoters.politicalCharacter.keyIssues.join(", ")}</div>
              <div className="text-xs text-slate-500">Voting Pattern: {firstTimeVoters.politicalCharacter.votingPattern}</div>
            </div>
          </div>
        </div>
      </Card>

      {/* LIFE STAGES CROSS-TABULATION */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Age x Life Stage Cross-Tabulation
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Life stage concerns and voting behavior patterns
        </p>
        <div className="mt-4 space-y-3">
          {lifeStages.stages.map((stage) => (
            <div key={stage.stage} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{stage.stage}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{stage.ageGroup} years</div>
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  {stage.votingBehaviorPattern}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-xs text-slate-500 dark:text-slate-400">Key Concerns: </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">{stage.keyConcerns.join(", ")}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* TEMPORAL CHANGES */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Temporal Change: 2001-2011-2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Key demographic indicators over two decades
        </p>
        <div className="mt-4 overflow-x-auto">
          <DataTable
            headers={["Indicator", "2001", "2011", "2026 (Projected)"]}
            rows={temporalChanges.indicators.map((ind) => [
              ind.indicator,
              ind.value2001,
              ind.value2011,
              ind.value2026Projected,
            ])}
          />
        </div>
        <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-400">
            <span className="font-semibold">Key Insight:</span> {temporalChanges.agingInsight}
          </p>
          <p className="mt-2 text-xs text-amber-600 dark:text-amber-300">
            Median Age: Punjab ({temporalChanges.medianAgeComparison.punjab}) vs India ({temporalChanges.medianAgeComparison.india}) — {temporalChanges.medianAgeComparison.comparableTo}
          </p>
        </div>
      </Card>

      {/* EMIGRATION IMPACT */}
      <Card padding="lg" className="border-2 border-red-500 dark:border-red-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            !
          </span>
          <div>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Emigration Impact on Youth Demographics</h3>
            <p className="text-sm text-red-600 dark:text-red-400">Major factor affecting youth political demographics</p>
          </div>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <Plane className="h-5 w-5 text-red-600 dark:text-red-400" />
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">50,000-80,000</div>
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">Annual Youth Emigration</div>
            <div className="text-xs text-slate-500">Primarily 18-30 age group</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">15-20%</div>
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">Present Youth Deficit</div>
            <div className="text-xs text-slate-500">Smaller than census-projected</div>
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Emigration Profile</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">{emigration.scale.profile}</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Net Effect:</span> {emigration.scale.netEffect}
          </p>
        </div>

        <div className="mb-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <h4 className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2">UDISE Evidence</h4>
          <div className="space-y-1 text-sm text-amber-600 dark:text-amber-300">
            <p>Sikh Children Foundational: {emigration.scale.udiseEvidence.sikhChildrenFoundational}</p>
            <p>Population Share 2011: {emigration.scale.udiseEvidence.populationShare2011}</p>
            <p>Gap: {emigration.scale.udiseEvidence.gap}</p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Top Destinations</h4>
          <div className="flex flex-wrap gap-2">
            {emigration.destinations.map((dest) => (
              <span key={dest} className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                {dest}
              </span>
            ))}
          </div>
        </div>
      </Card>

      {/* REGIONAL AGE VARIATIONS */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Age Profile Variations
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Age characteristics by Punjab region
        </p>
        <div className="mt-4 space-y-4">
          {regionalAge.regions.map((region) => (
            <div key={region.region} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">{region.region}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{region.districts}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-700 dark:text-slate-300">{region.seats} ACs</div>
                  <div className="text-xs text-slate-400">seats</div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-slate-600 dark:text-slate-400">{region.ageProfileCharacter}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-400">
            <span className="font-semibold">Doaba Note:</span> {regionalAge.doabaNote}
          </p>
        </div>
      </Card>

      {/* STRATEGIC IMPLICATIONS FOR CONGRESS */}
      <Card padding="lg" className="border-2 border-blue-500 dark:border-blue-700">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
            S
          </span>
          <div>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">Strategic Implications for Congress</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">Key insights for electoral strategy</p>
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-white p-4 shadow-sm dark:bg-slate-800">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Insight</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-red-600 dark:text-red-400">The &quot;Missing Youth&quot; Paradox:</span> {ageStructureStrategicImplications.keyInsight}
          </p>
        </div>

        <div className="space-y-3">
          {ageStructureStrategicImplications.congressStrategy.map((strategy) => (
            <div key={strategy.priority} className="flex items-start gap-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                {strategy.priority}
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">{strategy.factor}</div>
                <div className="text-xs text-slate-500 mt-1">Action: {strategy.action}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* DATA QUALITY & GAPS */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Data Quality & Gaps
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Confidence Level: <span className="font-semibold text-yellow-600">{dataQuality.confidence}</span>
        </p>
        <div className="mt-4 space-y-2">
          {dataQuality.dataGaps.map((gap) => (
            <div key={gap.dataPoint} className="flex items-center justify-between rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
              <span className="text-sm text-slate-600 dark:text-slate-400">{gap.dataPoint}</span>
              <div className="text-right">
                <span className="text-sm font-medium text-red-600">{gap.status}</span>
                <div className="text-xs text-slate-400">Needs: {gap.sourceNeeded}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Sources</h4>
          <div className="flex flex-wrap gap-2">
            {dataQuality.sources.map((source) => (
              <span key={source} className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                {source}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
