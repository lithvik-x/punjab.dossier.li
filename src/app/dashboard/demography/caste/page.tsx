"use client";

import { Badge, ProgressBar, DataTable } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Users, AlertTriangle, Target, TrendingUp, UsersRound, Building2, Heart, Star } from "lucide-react";
import {
  casteDynamicsData,
  casteDynamicsMetrics,
  castePopulationData,
  regionalCasteData,
  bjpGrowthData,
  congressPerformanceData,
} from "@/lib/caste-dynamics-data";

/**
 * Demography - Caste Composition Section
 * SC, OBC, Upper Caste demographics and electoral impact
 */

export default function DemographyCastePage() {
  const { casteOrganization, dominantCasteByRegion, winningCoalition, casteTensions, congressStrategy, dataPoints } = casteDynamicsData;

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
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
              <Users className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Caste Composition
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            SC, OBC, Upper Caste demographics and their electoral significance in Punjab 2027
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </motion.div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card padding="md" className="border-l-4 border-l-orange-500">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">SC Population</p>
          <p className="mt-2 text-3xl font-bold text-orange-600">{casteDynamicsMetrics.scPopulation}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Highest in India</p>
        </Card>
        <Card padding="md" className="border-l-4 border-l-green-500">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Jat Sikh Population</p>
          <p className="mt-2 text-3xl font-bold text-green-600">{casteDynamicsMetrics.jatSikhPopulation}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Malwa heartland</p>
        </Card>
        <Card padding="md" className="border-l-4 border-l-blue-500">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">OBC Population</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{casteDynamicsMetrics.obcPopulation}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">No dominant OBC party</p>
        </Card>
        <Card padding="md" className="border-l-4 border-l-purple-500">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Reserved Seats</p>
          <p className="mt-2 text-3xl font-bold text-purple-600">{casteDynamicsMetrics.scReservedSeats}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">29% of Assembly</p>
        </Card>
      </div>

      {/* Key Insight Banner */}
      <Card padding="md" className="border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">
            <AlertTriangle className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Key Insight</h3>
            <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">
              {casteDynamicsMetrics.keyLesson}
            </p>
          </div>
        </div>
      </Card>

      {/* Caste Population Composition */}
      <Card padding="lg">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Caste Population Composition</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Punjab caste demographics breakdown</p>
        <div className="mt-6 space-y-4">
          {castePopulationData.map((item) => (
            <ProgressBar
              key={item.caste}
              label={item.caste}
              value={item.percent}
              maxValue={100}
              color={item.color}
            />
          ))}
        </div>
      </Card>

      {/* Regional Caste Dominance */}
      <Card padding="lg">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Regional Caste Dominance</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Key caste configurations by region (117 total seats)</p>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {regionalCasteData.map((region) => (
            <Card key={region.region} padding="md">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-white">{region.region}</h3>
                <Badge variant="info">{region.seats} seats</Badge>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{region.dominantCaste}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{region.scConcentration}</p>
            </Card>
          ))}
        </div>

        {/* Reserved Seats Info */}
        <div className="mt-6 rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
          <h4 className="font-semibold text-purple-700 dark:text-purple-400">Reserved Seats (SC)</h4>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold text-purple-600">{dominantCasteByRegion.reservedSeats.total}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Total Reserved Seats</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">{dominantCasteByRegion.reservedSeats.percentOfTotal}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">of Total Assembly</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            {dominantCasteByRegion.reservedSeats.distribution}. Congress won only {dominantCasteByRegion.reservedSeats.congress2022Result}.
          </p>
        </div>
      </Card>

      {/* Jat Sikh Analysis */}
      <Card padding="lg" className="border-2 border-green-500 bg-green-50 dark:bg-green-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-lg font-bold text-white">
            <UsersRound className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-400">Jat Sikh Analysis</h3>
            <p className="text-sm text-green-600 dark:text-green-400">Biradari Network & Political Behavior</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <div>
            <p className="font-medium text-green-700 dark:text-green-400">Network Nature</p>
            <p className="mt-1">{casteOrganization.jatSikh.nature}</p>
          </div>
          <div>
            <p className="font-medium text-green-700 dark:text-green-400">Key Mechanism</p>
            <p className="mt-1">{casteOrganization.jatSikh.keyMechanism}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="font-medium text-green-700 dark:text-green-400">Political Vehicle</p>
              <p className="mt-1">{casteOrganization.jatSikh.politicalVehicle}</p>
            </div>
            <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
              <p className="font-medium text-green-700 dark:text-green-400">Political Alignment</p>
              <p className="mt-1">{casteOrganization.jatSikh.politicalAlignment}</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-3 dark:bg-slate-800">
            <p className="font-medium text-green-700 dark:text-green-400">Concentration</p>
            <p className="mt-1">{casteOrganization.jatSikh.concentration}</p>
          </div>
        </div>
      </Card>

      {/* Dalit/SC Demographics */}
      <Card padding="lg" className="border-2 border-purple-500 bg-purple-50 dark:bg-purple-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white">
            <UsersRound className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400">Dalit/SC Demographics & Political Behavior</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400">Ad-Dharm, Ravidassia, and sub-group dynamics</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          {/* Ad-Dharm */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Ad-Dharm Movement</h4>
            <p className="mt-1">{casteOrganization.dalitSC.adDharm.name} — {casteOrganization.dalitSC.adDharm.nature}</p>
            <p className="mt-2 text-xs text-slate-500">{casteOrganization.dalitSC.adDharm.keyMechanism}</p>
          </div>

          {/* Dera Sachkhand Ballan */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Dera Sachkhand Ballan</h4>
            <p className="mt-1">{casteOrganization.dalitSC.deraSachkhandBallan.location} — Head: {casteOrganization.dalitSC.deraSachkhandBallan.head}</p>
            <p className="mt-1 text-xs text-slate-500">{casteOrganization.dalitSC.deraSachkhandBallan.recognition}</p>
            <p className="mt-1 font-medium text-purple-600">{casteOrganization.dalitSC.deraSachkhandBallan.politicalSignificance}</p>
          </div>

          {/* SC Sub-groups */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">SC Sub-Groups</h4>
            <p className="mt-1">{casteOrganization.dalitSC.sikhSCSubgroups}</p>
          </div>

          {/* Ravidassia Deras */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">Ravidassia Deras</h4>
            <p className="mt-1">{casteOrganization.dalitSC.ravidassiaDeras}</p>
          </div>

          {/* BSP Performance */}
          <div className="rounded-lg border border-purple-200 bg-purple-100 p-4 dark:border-purple-700 dark:bg-purple-900/40">
            <h4 className="font-semibold text-purple-700 dark:text-purple-400">BSP Performance</h4>
            <p className="mt-1">Recent Wins: {casteOrganization.dalitSC.bspPunjab.recentWins}</p>
            <p className="mt-1 text-xs text-slate-500">Seats: {casteOrganization.dalitSC.bspPunjab.seatsWon}</p>
          </div>
        </div>
      </Card>

      {/* OBC Overview */}
      <Card padding="lg" className="border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
            <TrendingUp className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">OBC Overview</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">Key OBC castes and political landscape</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <p className="font-medium">{casteOrganization.obc.overview}</p>

          {/* Key Castes */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {casteOrganization.obc.keyCastes.map((caste) => (
              <div key={caste.name} className="rounded-lg bg-white p-2 text-center dark:bg-slate-800">
                <p className="font-medium text-blue-700 dark:text-blue-400">{caste.name}</p>
                {caste.notes && <p className="text-xs text-slate-500">{caste.notes}</p>}
              </div>
            ))}
          </div>

          {/* Saini Significance */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Saini Significance</h4>
            <p className="mt-1">{casteOrganization.obc.sainiSignificance}</p>
          </div>

          {/* Ramgarhia Sabha */}
          <div className="rounded-lg bg-white p-4 dark:bg-slate-800">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400">Ramgarhia Sabha</h4>
            <p className="mt-1">{casteOrganization.obc.ramgarhiaSabha}</p>
          </div>
        </div>
      </Card>

      {/* Hindu Upper Caste */}
      <Card padding="lg" className="border-2 border-red-500 bg-red-50 dark:bg-red-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-lg font-bold text-white">
            <Building2 className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-400">Hindu Upper Caste Networks</h3>
            <p className="text-sm text-red-600 dark:text-red-400">Brahmin, Khatri, Arora, Bania associations</p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <p><span className="font-medium">Nature:</span> {casteOrganization.hinduUpperCaste.nature}</p>
          <p><span className="font-medium">Key Mechanism:</span> {casteOrganization.hinduUpperCaste.keyMechanism}</p>
          <p><span className="font-medium">Political Alignment:</span> {casteOrganization.hinduUpperCaste.politicalAlignment}</p>
          <p><span className="font-medium">Concentration:</span> {casteOrganization.hinduUpperCaste.concentration}</p>
        </div>
      </Card>

      {/* Deras as Political Institutions */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Deras as Political Institutions</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{casteOrganization.derasAsPoliticalInstitutions.insight}</p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {casteOrganization.derasAsPoliticalInstitutions.majorDeras.map((dera) => (
            <Card key={dera.name} padding="md">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900 dark:text-white">{dera.name}</h4>
                <Badge variant="info">{dera.location}</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{dera.community}</p>
              <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{dera.politicalSignificance}</p>
            </Card>
          ))}
        </div>
      </Card>

      {/* Electoral Implications - Winning Coalition */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Electoral Implications - Winning Coalition</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Population arithmetic and historical formulas</p>

        {/* Population Arithmetic Table */}
        <div className="mt-6">
          <DataTable
            headers={["Caste Group", "Population %", "Political Behavior"]}
            rows={winningCoalition.populationArithmetic.map((item) => [
              item.caste,
              `${item.populationPercent}%`,
              item.politicalBehavior,
            ])}
            caption="Caste Population & Political Behavior"
          />
        </div>

        {/* Historical Formulas */}
        <div className="mt-6 space-y-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">Historical Winning Formulas</h4>
          {winningCoalition.historicalFormulas.map((formula) => (
            <div key={formula.year} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between">
                <h5 className="font-semibold text-slate-900 dark:text-white">{formula.year} — {formula.party}</h5>
                <Badge variant="success">{formula.seats} seats</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Coalition: {formula.coalition}</p>
              <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">Key Lesson: {formula.keyLesson}</p>
            </div>
          ))}
        </div>

        {/* Key Lesson */}
        <div className="mt-6 rounded-lg border-2 border-orange-200 bg-orange-50 p-4 dark:border-orange-700 dark:bg-orange-900/20">
          <p className="font-medium text-orange-700 dark:text-orange-400">Key Lesson</p>
          <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">{winningCoalition.keyLesson}</p>
        </div>
      </Card>

      {/* Caste Tensions */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Caste Tensions & Conflicts</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Major tension points and inter-caste dynamics</p>

        <div className="mt-6 space-y-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">Major Tension Points</h4>
          {casteTensions.majorTensionPoints.map((tension, idx) => (
            <Card key={idx} padding="md">
              <div className="flex items-center justify-between">
                <h5 className="font-medium text-slate-900 dark:text-white">{tension.incident}</h5>
                <Badge variant="warning">{tension.date}</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tension.description}</p>
              {tension.rootCause && (
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">Root Cause: {tension.rootCause}</p>
              )}
            </Card>
          ))}
        </div>

        {/* Inter-caste Marriage */}
        <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <h4 className="font-semibold text-green-700 dark:text-green-400">Inter-Caste Marriage Rate</h4>
          <div className="mt-2 grid grid-cols-3 gap-4">
            <div>
              <p className="text-2xl font-bold text-green-600">{casteTensions.interCasteMarriage.punjabRate}%</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Punjab Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-600">{casteTensions.interCasteMarriage.nationalAverage}%</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">National Average</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">#1</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Ranking in India</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-green-600 dark:text-green-400">{casteTensions.interCasteMarriage.implication}</p>
        </div>

        {/* Caste-Class Intersection */}
        <div className="mt-6 space-y-4">
          <h4 className="font-semibold text-slate-900 dark:text-white">Caste-Class Intersection</h4>
          {casteTensions.casteClassIntersection.map((item, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              <h5 className="font-medium text-slate-900 dark:text-white">{item.dynamic}</h5>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Migrant Labor Impact */}
        <div className="mt-6 rounded-lg border border-slate-200 p-4 dark:border-slate-700">
          <h4 className="font-semibold text-slate-900 dark:text-white">Migrant Labor Impact</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{casteTensions.migrantLaborImpact}</p>
        </div>
      </Card>

      {/* Strategic Recommendations for Congress */}
      <Card padding="lg" className="border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
            <Target className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-400">Strategic Recommendations for Congress 2027</h3>
            <p className="text-sm text-orange-600 dark:text-orange-400">Caste strategy priorities</p>
          </div>
        </div>

        {/* Core Challenge */}
        <div className="mb-6 rounded-lg border-2 border-orange-300 bg-orange-100 p-4 dark:border-orange-600 dark:bg-orange-900/40">
          <p className="font-medium text-orange-700 dark:text-orange-400">Core Challenge</p>
          <p className="mt-1 text-sm text-orange-600 dark:text-orange-400">{congressStrategy.coreChallenge}</p>
        </div>

        {/* Priority Strategies */}
        <div className="space-y-4">
          {congressStrategy.priorities.map((priority) => (
            <Card key={priority.priority} padding="md" className="border border-orange-200">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-sm font-bold text-white">
                  {priority.priority}
                </span>
                <div className="flex-1">
                  <h4 className="font-semibold text-orange-700 dark:text-orange-400">{priority.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{priority.populationTarget}</p>
                </div>
                {priority.targetSeats && <Badge variant="info">{priority.targetSeats}</Badge>}
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{priority.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {priority.keyActions.map((action, idx) => (
                  <span key={idx} className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/40 dark:text-orange-400">
                    {action}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Anti-Coalition Intelligence */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Opposition Party Strategies</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">BJP, AAP, and SAD caste strategies</p>

        <div className="mt-6 space-y-4">
          {congressStrategy.antiCoalitionIntelligence.map((party) => (
            <Card key={party.party} padding="md">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900 dark:text-white">{party.party}</h4>
                {party.voteShareChange && (
                  <Badge variant={party.party === "BJP" ? "danger" : "info"}>{party.voteShareChange}</Badge>
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-300">{party.strategy}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {party.tactics.map((tactic, idx) => (
                  <span key={idx} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                    {tactic}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* BJP Growth Data */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">BJP Growth Trajectory</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {bjpGrowthData.map((data) => (
            <Card key={data.election} padding="md">
              <h4 className="font-medium text-slate-900 dark:text-white">{data.election}</h4>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-red-600">{data.voteShare}%</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Vote Share</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-600">{data.seats}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Seats</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm font-medium text-red-700 dark:text-red-400">BJP Threat: Vote share doubled from 6.6% to 18.56% in 2 years</p>
        </div>
      </Card>

      {/* Congress Performance */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Congress Performance Decline</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {congressPerformanceData.map((data) => (
            <Card key={data.year} padding="md">
              <h4 className="font-medium text-slate-900 dark:text-white">{data.year}</h4>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{data.seats}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Total Seats</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">{data.scSeatsWon}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">SC Reserved</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Congress lost 59 seats (77 → 18) in 5 years</p>
        </div>
      </Card>

      {/* Cross-Caste Leadership */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Cross-Caste Political Leadership</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Leaders with cross-caste acceptability</p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {casteDynamicsData.crossCasteLeadership.leaders.map((leader) => (
            <Card key={leader.name} padding="md">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-slate-900 dark:text-white">{leader.name}</h4>
                <Badge variant="info">{leader.party}</Badge>
              </div>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Caste: {leader.casteBackground}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{leader.crossCasteAcceptability}</p>
              {leader.currentStatus && (
                <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">Status: {leader.currentStatus}</p>
              )}
            </Card>
          ))}
        </div>
      </Card>

      {/* Key Data Points */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Key Data Points</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Critical metrics for Punjab caste analysis</p>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {dataPoints.entries.slice(0, 12).map((entry, idx) => (
            <div key={idx} className="flex items-center justify-between rounded-lg border border-slate-100 p-3 dark:border-slate-700">
              <span className="text-sm text-slate-600 dark:text-slate-400">{entry.metric}</span>
              <span className="font-medium text-slate-900 dark:text-white">{entry.value}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          Sources: {casteDynamicsData.dataQuality.sourcesConsulted} sources consulted. Most recent: {casteDynamicsData.dataQuality.mostRecentSource}. Confidence: {casteDynamicsData.dataQuality.overallConfidence}.
        </p>
      </Card>
    </div>
  );
}
