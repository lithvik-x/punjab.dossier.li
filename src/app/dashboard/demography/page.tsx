"use client";

import { MetricCard, ProgressBar, DataTable, Badge } from "@/components/ui/MetricCard";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { motion } from "framer-motion";
import { REGIONS } from "@/lib/constants";
import {
  jatSikhPopulationData,
  regionalJatDistribution,
  jatSikhClans,
  landholdingStratification,
  agriculturalDebtData,
  constituencyClusters,
  congressStrategyPoints,
  smallFarmerStatistic,
} from "@/lib/kpi-data";
import {
  urbanizationData,
  urbanizationMetrics,
  municipalCorpPopulationData,
  districtUrbanizationChartData,
  slumConcentrationData,
  urbanizationTrajectoryData,
} from "@/lib/urbanization-data";
import { Users, Building2, Home, Heart, AlertTriangle } from "lucide-react";

/**
 * Demography - Population Section
 * Population density, households, migration data
 */
export default function DemographyPopulationPage() {
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
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-lg font-bold text-white">
              2
            </span>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Population & Migration
            </h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Population density, household demographics, urbanization, and migration patterns
          </p>
        </div>
        <Badge variant="info">Demographics</Badge>
      </motion.div>

      {/* POPULATION DENSITY & HOUSEHOLD DATA (MP1-001) */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Population Density & Household Demographics — Census 2011
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab has 3rd highest population density in India at 551/km2. Child population (0-6) is 3,076,219. Dependency ratios show youth burden of 399 per 1000 working age.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">551/km2</div>
            </div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Population Density</div>
            <div className="text-sm text-blue-600 dark:text-blue-300">3rd highest in India</div>
            <div className="mt-2 text-xs text-red-600 dark:text-red-400">Bihar 1106, WB 1029</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">3,076,219</div>
            </div>
            <div className="mt-1 font-semibold text-green-700 dark:text-green-400">Child Population (0-6)</div>
            <div className="text-sm text-green-600 dark:text-green-300">9.8% of total population</div>
          </div>
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">4.8</div>
            </div>
            <div className="mt-1 font-semibold text-orange-700 dark:text-orange-400">Avg Household Size</div>
            <div className="text-sm text-orange-600 dark:text-orange-300">Members per household</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">65.66%</div>
            </div>
            <div className="mt-1 font-semibold text-purple-700 dark:text-purple-400">Nuclear Family</div>
            <div className="text-sm text-purple-600 dark:text-purple-300">Among highest in India</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-xl font-bold text-teal-600 dark:text-teal-400">88.88%</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Home Ownership</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">Owner-occupied households</div>
          </div>
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-xl font-bold text-yellow-600 dark:text-yellow-400">399</div>
            <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-400">Youth Dependency</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Per 1000 working age</div>
          </div>
          <div className="rounded-lg bg-red-50 p-4 dark:bg-red-900/20">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <div className="text-xl font-bold text-red-600 dark:text-red-400">164</div>
            </div>
            <div className="mt-1 text-sm font-semibold text-red-700 dark:text-red-400">Old-Age Dependency</div>
            <div className="text-xs text-red-600 dark:text-red-300">Per 1000 working age</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Migration:</span> Passport decline 40%, 500K+ illegal immigrants in USA, 2.37 lakh youngsters emigrated 2019-2020. <span className="font-semibold text-orange-700 dark:text-orange-400">Major brain drain from Doaba and Malwa belts.</span>
          </p>
        </div>
      </Card>

      {/* URBAN AGGLOMERATIONS & MIGRATION (MP1-004) */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban Agglomerations & Peri-Urban Growth — 2026
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          7 Urban Agglomerations with combined 5M+ population. Ludhiana has highest migrant voter concentration — 46.7% growth in migrant voters 2019-2024.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">1.6M+</div>
            <div className="mt-1 text-sm font-semibold text-yellow-700 dark:text-yellow-400">Ludhiana UA</div>
            <div className="text-xs text-yellow-600 dark:text-yellow-300">Largest UA</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1.1M+</div>
            <div className="mt-1 text-sm font-semibold text-blue-700 dark:text-blue-400">Amritsar UA</div>
            <div className="text-xs text-blue-600 dark:text-blue-300">2nd largest</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">1.0M+</div>
            <div className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">Jalandhar UA</div>
            <div className="text-xs text-teal-600 dark:text-teal-300">3rd largest</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">7 UAs</div>
            <div className="mt-1 text-sm font-semibold text-purple-700 dark:text-purple-400">Total Agglomerations</div>
            <div className="text-xs text-purple-600 dark:text-purple-300">5M+ combined population</div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-900/20">
            <div className="text-xl font-bold text-orange-600 dark:text-orange-400">3.5-4%</div>
            <div className="mt-1 text-sm font-semibold text-orange-700 dark:text-orange-400">Peri-Urban Growth</div>
            <div className="text-xs text-orange-600 dark:text-orange-300">vs core urban 2.1% — faster expansion</div>
          </div>
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <div className="text-xl font-bold text-green-600 dark:text-green-400">46.7%</div>
            <div className="mt-1 text-sm font-semibold text-green-700 dark:text-green-400">Ludhiana Migrant Growth</div>
            <div className="text-xs text-green-600 dark:text-green-300">3.32L → 4.87L voters (2019-2024)</div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Peri-Urban Zones:</span> Dera Bassi (industrial corridor), Moga peripheral, Khanna (steel corridor). <span className="font-semibold text-blue-700 dark:text-blue-400">Urban growing 8-10x faster than rural.</span>
          </p>
        </div>
      </Card>

      {/* Urban-Rural Distribution */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Urban-Rural Distribution — Census 2011
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Punjab is urbanizing rapidly: 37.48% urban (2011) vs 34.0% (2001). Projected ~42-44% urban by 2027.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">62.5%</div>
            </div>
            <div className="mt-1 font-semibold text-blue-700 dark:text-blue-400">Rural Population</div>
            <div className="mt-1 text-sm text-blue-600 dark:text-blue-300">1.73 Cr — dominates Malwa belt & Doaba</div>
            <div className="mt-2">
              <ProgressBar label="" value={62.5} color="blue" showPercentage={false} />
            </div>
          </div>
          <div className="rounded-lg bg-teal-50 p-4 dark:bg-teal-900/20">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">37.5%</div>
            </div>
            <div className="mt-1 font-semibold text-teal-700 dark:text-teal-400">Urban Population</div>
            <div className="mt-1 text-sm text-teal-600 dark:text-teal-300">1.04 Cr — Ludhiana, Amritsar, Jalandhar, Mohali</div>
            <div className="mt-2">
              <ProgressBar label="" value={37.5} color="cyan" showPercentage={false} />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 dark:bg-slate-900">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold">Key:</span> Voter ID mapping coverage higher in rural (89.58%) vs urban (73%) areas — actual 2022 turnout was ~71.3%. Urban voters concentrated in 4 major cities — concentrated campaign reach. <span className="font-semibold text-orange-700 dark:text-orange-400">Doaba: 42% Dalit concentration in some constituencies</span> — highest Dalit density in Punjab, strong AAP foothold.
          </p>
        </div>
      </Card>

      {/* Regional Voter Distribution */}
      <Card padding="lg">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Regional Voter Distribution
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Voter concentration by Punjab region
        </p>
        <div className="mt-6 space-y-5">
          {REGIONS.map((region) => (
            <div key={region.id}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {region.name}
                  </span>
                  <span className="ml-2 text-sm text-slate-500">({region.border})</span>
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {region.constituencies} ACs
                </span>
              </div>
              <ProgressBar
                label=""
                value={(region.constituencies / 117) * 100}
                color={region.id === "malwa" ? "amber" : region.id === "majha" ? "blue" : "emerald"}
                showPercentage={false}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
